var Tf=Object.defineProperty;var wf=(e,t)=>{for(var n in t)Tf(e,n,{get:t[n],enumerable:!0})};var y={BUILD_TIME:"2023-01-28T22:56:01.114Z",VERSION:"0.2.31",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};var Sf=Object.create,Si=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,Ei=Object.getOwnPropertyNames,_f=Object.getPrototypeOf,Cf=Object.prototype.hasOwnProperty,Lf=(e,t)=>function(){return t||(0,e[Ei(e)[0]])((t={exports:{}}).exports,t),t.exports},Af=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ei(t))!Cf.call(e,a)&&a!==n&&Si(e,a,{get:()=>t[a],enumerable:!(r=Ef(t,a))||r.enumerable});return e},kf=(e,t,n)=>(n=e!=null?Sf(_f(e)):{},Af(t||!e||!e.__esModule?Si(n,"default",{value:e,enumerable:!0}):n,e)),Mf=Lf({"esm-build-3120606719048d5175703f3b3f8812d3453a0d07-9fbf1061/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var a={exports:{}};r(a),n.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",a=o=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(_,M=void 0){super(M),this.createItem=_}get(_){return this.has(_)||this.set(_,this.createItem(_)),super.get(_)}}let l=T=>T&&typeof T=="object"&&typeof T.then=="function",u=(T,_)=>(...M)=>{o.runtime.lastError?T.reject(new Error(o.runtime.lastError.message)):_.singleCallbackArg||M.length<=1&&_.singleCallbackArg!==!1?T.resolve(M[0]):T.resolve(M)},c=T=>T==1?"argument":"arguments",f=(T,_)=>function(C,...z){if(z.length<_.minArgs)throw new Error(`Expected at least ${_.minArgs} ${c(_.minArgs)} for ${T}(), got ${z.length}`);if(z.length>_.maxArgs)throw new Error(`Expected at most ${_.maxArgs} ${c(_.maxArgs)} for ${T}(), got ${z.length}`);return new Promise((P,U)=>{if(_.fallbackToNoCallback)try{C[T](...z,u({resolve:P,reject:U},_))}catch(F){console.warn(`${T} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,F),C[T](...z),_.fallbackToNoCallback=!1,_.noCallback=!0,P()}else _.noCallback?(C[T](...z),P()):C[T](...z,u({resolve:P,reject:U},_))})},d=(T,_,M)=>new Proxy(_,{apply(C,z,P){return M.call(z,T,...P)}}),g=Function.call.bind(Object.prototype.hasOwnProperty),m=(T,_={},M={})=>{let C=Object.create(null),z={has(U,F){return F in T||F in C},get(U,F,J){if(F in C)return C[F];if(!(F in T))return;let X=T[F];if(typeof X=="function")if(typeof _[F]=="function")X=d(T,T[F],_[F]);else if(g(M,F)){let Re=f(F,M[F]);X=d(T,T[F],Re)}else X=X.bind(T);else if(typeof X=="object"&&X!==null&&(g(_,F)||g(M,F)))X=m(X,_[F],M[F]);else if(g(M,"*"))X=m(X,_[F],M["*"]);else return Object.defineProperty(C,F,{configurable:!0,enumerable:!0,get(){return T[F]},set(Re){T[F]=Re}}),X;return C[F]=X,X},set(U,F,J,X){return F in C?C[F]=J:T[F]=J,!0},defineProperty(U,F,J){return Reflect.defineProperty(C,F,J)},deleteProperty(U,F){return Reflect.deleteProperty(C,F)}},P=Object.create(T);return new Proxy(P,z)},b=T=>({addListener(_,M,...C){_.addListener(T.get(M),...C)},hasListener(_,M){return _.hasListener(T.get(M))},removeListener(_,M){_.removeListener(T.get(M))}}),x=new s(T=>typeof T!="function"?T:function(M){let C=m(M,{},{getContent:{minArgs:0,maxArgs:0}});T(C)}),p=new s(T=>typeof T!="function"?T:function(M,C,z){let P=!1,U,F=new Promise(Je=>{U=function(Se){P=!0,Je(Se)}}),J;try{J=T(M,C,U)}catch(Je){J=Promise.reject(Je)}let X=J!==!0&&l(J);if(J!==!0&&!X&&!P)return!1;let Re=Je=>{Je.then(Se=>{z(Se)},Se=>{let ce;Se&&(Se instanceof Error||typeof Se.message=="string")?ce=Se.message:ce="An unexpected error occurred",z({__mozWebExtensionPolyfillReject__:!0,message:ce})}).catch(Se=>{console.error("Failed to send onMessage rejected reply",Se)})};return Re(X?J:F),!0}),h=({reject:T,resolve:_},M)=>{o.runtime.lastError?o.runtime.lastError.message===r?_():T(new Error(o.runtime.lastError.message)):M&&M.__mozWebExtensionPolyfillReject__?T(new Error(M.message)):_(M)},w=(T,_,M,...C)=>{if(C.length<_.minArgs)throw new Error(`Expected at least ${_.minArgs} ${c(_.minArgs)} for ${T}(), got ${C.length}`);if(C.length>_.maxArgs)throw new Error(`Expected at most ${_.maxArgs} ${c(_.maxArgs)} for ${T}(), got ${C.length}`);return new Promise((z,P)=>{let U=h.bind(null,{resolve:z,reject:P});C.push(U),M.sendMessage(...C)})},S={devtools:{network:{onRequestFinished:b(x)}},runtime:{onMessage:b(p),onMessageExternal:b(p),sendMessage:w.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:w.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},R={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":R},services:{"*":R},websites:{"*":R}},m(o,S,i)};n.exports=a(chrome)}else n.exports=globalThis.browser})}}),Pf=kf(Mf()),{default:vi,...Rf}=Pf,Ga=vi!==void 0?vi:Rf;globalThis.immersiveTranslateBrowserAPI=Ga;var _i={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",isShowContextMenu:"\u521B\u5EFA\u53F3\u952E\u83DC\u5355"};var Ci={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var Li={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var Df=[{code:"zh-CN",messages:_i},{code:"zh-TW",messages:Ci},{code:"en",messages:Li}],Gt={};for(let e of Df)Gt[e.code]=e.messages;var Jt="Immersive Translate",be="immersive-translate";var ge="immersiveTranslate",Lr=ge+"IframeMessage",Ja=`${ge}Container`,Yt=`${ge}SpecifiedContainer`,Un="buildinConfig",jn="localConfig",Ya="openOptionsPage";var Ar=`${ge}PageTranslatedStatus`,Ai=`${ge}PageUrlChanged`,At=`${ge}ReceiveCommand`,h0=`${ge}PopupReceiveMessage`,kr="immersive-translate.owenyoung.com",b0=`https://${kr}/`,Wn=`https://${kr}/buildin_config.json`,Xt=`${ge}Mark`,Xa="immersiveTranslateEffect",Le=`${ge}Root`,Qa=`data-${be}-effect`,hn=`${ge}TranslatedMark`,Qt=`${ge}ParagraphId`,Ze=`${ge}AtomicBlockMark`,et=`${ge}ExcludeMark`,Mr=`${ge}StayOriginalMark`,bn=`${ge}PreWhitespaceMark`,wt=`${ge}InlineMark`,Zt=`${ge}BlockMark`,zn=`${ge}Left`,Pr=`${ge}Right`,y0=`${ge}Width`,x0=`${ge}Height`,ki=`${ge}Top`,Mi=`${ge}FontSize`,qn="lastRunTime",Za=`${ge}GlobalStyleMark`,Pi=["@","#"],Rr=" --- ",eo=`
`,Ye=`${be}-target-wrapper`,Dr=`${be}-pdf-target-container`,Ri=`${be}-target-inner`,T0=`${be}-source-wrapper`,to=`${be}-target-translation-block-wrapper`,Di=`${be}-target-translation-pdf-block-wrapper`,Oi=`${be}-target-translation-pre-whitespace`,no=`${be}-target-translation-inline-wrapper`;var kt=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],ro={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var Ni=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var Or="zh-CN";function vt(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():y}var te=vt();function fe(){return te.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Ii(){return typeof Deno<"u"}function yn(){try{return globalThis.self!==globalThis.top}catch{return!0}}var Of=vt(),Vn=Of.PROD==="1";function Fi(e,t,n){let r=e.querySelectorAll("footer"),a=e.querySelectorAll("aside"),o=Array.from(r).concat(Array.from(a)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),l=[];for(let c of i)s.length>0&&s[0].contains(c)||l.push(c);for(let c=0;c<t.length;c++){let f=t[c].element;for(let d=c+1;d<t.length;d++){let g=t[d].element;if(f.contains(g))t.splice(d,1),d--;else if(g.contains(f)){t.splice(c,1),c--;break}else f===g&&(t.splice(d,1),d--)}}return t.filter(c=>{let f=c.element;if(c.reserve)return!0;let d=!1,g=!1;for(let m of o)if(f===m||m.contains(f)){d=!0;break}if(d)return!1;for(let m of l){if(f.nodeName==="H1")continue;let b=m.querySelector("h1");if(!(b&&Ui(b.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(f===m||m.contains(f))){g=!0;break}}return!g}).map(c=>c.element)}function xn(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function Nr(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function ao(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function Kn(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function Ve(e,t){let n=[];for(let r of t){let a=e.querySelectorAll(r);for(let o of a)n.push(o)}return n}function Nf(e,t){let n=function(o){return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE?o.nodeType===Node.ELEMENT_NODE&&Ke(o,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;r.nextNode();){let o=r.currentNode;if(o.nodeType===Node.ELEMENT_NODE){if(ne(o,wt)){if(a===!0)return!0;continue}if(!t.inlineTags.includes(o.nodeName))return!1}}return!0}function it(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?ne(e,Zt)||e.nodeName==="BR"?!1:ne(e,wt)?!0:Nf(e,t):ne(e,wt):!1}function Hi(e,t){for(let n of t)if(n===e)return!0;return!1}function Bi(e,t){return!!t.metaTags.includes(e.nodeName)}function Ke(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:a}=t,o=[];return n&&a&&a.length>0?o=a||[]:o=a.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&ne(e,et)?!0:e.nodeType===Node.ELEMENT_NODE&&ne(e,Yt)?!1:!!o.includes(e.nodeName)}function $i(e,t,n,r){let a=Gn(r),o=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||io(s)||oo(s)||so(s)||o.test(s)?!1:Ui(i,t,n)}function Ui(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function oo(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function so(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function io(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function ji(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function ne(e,t){return If(e,t,"1")}function If(e,t,n){return Vn?e[Le]?!!(e[Le]&&e[Le][t]===n):!1:e.dataset[t]===n}function Wi(e,t){return Vn?e[Le]?!!(e[Le]&&e[Le][t]):!1:e.dataset[t]!==void 0}function en(e){return(e.innerText||e.textContent||"").trim()}function Ir(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ie(e,t,n){e.isContentEditable||(e.dataset[Xa]||(e.dataset[Xa]="1"),Vn?(e[Le]||(e[Le]={}),e[Le][t]||(e[Le][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function zi(e,t){if(Vn){if(!e[Le]||!e[Le][t])return;delete e[Le][t]}else delete e.dataset[t]}function Mt(e,t){return Vn?!e[Le]||!e[Le][t]?void 0:e[Le][t]:e.dataset[t]}function Tn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||ne(e,Mr))&&(n=!0),n}function qi(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function Gn(e){let{config:t}=e,n=Pi;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function Fr(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function Vi(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function We(){if(!yn())return globalThis.location.href;try{let t=globalThis.location.href;if(new URL(t).protocol==="about:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let r="";try{r=globalThis.parent.location.href}catch{}return r||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function lo(e,t){e.head.appendChild(e.createElement("style")).innerHTML=t}function co(e){return e.getAttribute("src")?!1:!!(e.getAttribute("srcdoc")&&e.contentDocument&&e.contentDocument.body)}function uo(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:a,additionalInlineSelectors:o,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:l,globalStyles:u,stayOriginalTags:c,stayOriginalSelectors:f,globalAttributes:d}=t,g=Object.keys(u);if(g.length>0)for(let C of g){let z=Ve(document.body,[C]);for(let P of z)if(!ne(P,Za)){ie(P,Za,"1");let U=u[C];P.style.cssText+=U}}let m=Object.keys(d);if(m.length>0)for(let C of m){let z=d[C],P=Object.keys(z),U=Ve(document.body,[C]);for(let F of U)for(let J of P){let X=z[J];F.getAttribute(J)!==X&&(X===null?F.removeAttribute(J):F.setAttribute(J,X))}}let b=[...n,...r],x=[...a,...o],p=[...s],h=l.map(C=>C.toLowerCase()),w=i;Ve(document.body,b).forEach(C=>{ne(C,et)||ie(C,et,"1")});let R=[];if(p.length>0&&(R=Ve(document.body,p).filter(C=>!ne(C,Ze))),h.length>0){let C=c.reduce((U,F)=>{let J=F.toLowerCase();return U.push(`<${J}>`,`</${J}>`,`<${J} />`),U},[]),z=[">http://",">https://"];C.push(...z);let P=Ve(document.body,h).filter(U=>{if(ne(U,Ze))return!1;{let J=U.innerHTML;return!C.some(Re=>J.includes(Re))}});R.push(...P)}R.forEach(C=>{ne(C,Ze)||ie(C,Ze,"1")});let T=[];if(x.length>0)for(let C of e)T.push(...Ve(C,x));T.forEach(C=>{ie(C,wt,"1")});let _=[];if(w.length>0)for(let C of e)_.push(...Ve(C,w));_.forEach(C=>{ie(C,Zt,"1")});let M=[];if(f.length>0)for(let C of e)M.push(...Ve(C,f));M.forEach(C=>{ie(C,Mr,"1")})}function Ki(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}function tn(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=kt.map(a=>a.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":kt[a]}else return"auto";else return kt[r]}var go=/iPhone/i,Gi=/iPod/i,Ji=/iPad/i,Yi=/\biOS-universal(?:.+)Mac\b/i,fo=/\bAndroid(?:.+)Mobile\b/i,Xi=/Android/i,wn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Hr=/Silk/i,St=/Windows Phone/i,Qi=/\bWindows(?:.+)ARM\b/i,Zi=/BlackBerry/i,el=/BB10/i,tl=/Opera Mini/i,nl=/\b(CriOS|Chrome)(?:.+)Mobile/i,rl=/Mobile(?:.+)Firefox\b/i,al=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function Ff(e){return t=>t.test(e)}function Br(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let a=Ff(n),o={apple:{phone:a(go)&&!a(St),ipod:a(Gi),tablet:!a(go)&&(a(Ji)||al(t))&&!a(St),universal:a(Yi),device:(a(go)||a(Gi)||a(Ji)||a(Yi)||al(t))&&!a(St)},amazon:{phone:a(wn),tablet:!a(wn)&&a(Hr),device:a(wn)||a(Hr)},android:{phone:!a(St)&&a(wn)||!a(St)&&a(fo),tablet:!a(St)&&!a(wn)&&!a(fo)&&(a(Hr)||a(Xi)),device:!a(St)&&(a(wn)||a(Hr)||a(fo)||a(Xi))||a(/\bokhttp\b/i)},windows:{phone:a(St),tablet:a(Qi),device:a(St)||a(Qi)},other:{blackberry:a(Zi),blackberry10:a(el),opera:a(tl),firefox:a(rl),chrome:a(nl),device:a(Zi)||a(el)||a(tl)||a(rl)||a(nl)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var mo="DENO",po="CHROME",$r="FIREFOX";function Hf(e){let t=po;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=$r:/deno/i.test(n)&&(t=mo)}catch{}return e===po&&t===po||e===$r&&t===$r||e===mo&&t===mo}function ol(){return typeof Deno<"u"}function sl(){return Hf($r)}function il(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var ll={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},cl={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:ll,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:ll,query:()=>{},sendMessage:()=>{}}};var Y;ol()?Y=cl:Y=globalThis.immersiveTranslateBrowserAPI;var ho={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],excludeSelectors:["[class^='lln-']"],extraBlockSelector:[".ytd-transcript-segment-renderer"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeSelectors:[".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]}]};function bo(e){return Array.isArray(e)?e:e?[e]:[]}function yo(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function Pt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function Ur(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let a={...e};return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))a[i]=s;else if(i.startsWith("additional")){let l=bo(s);a[i]=Array.from(new Set([...a[i],...l]))}else a[i]=bo(s)}),a}function Bf(){if(te.PROD==="1")return{};let e={};if(te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(te.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:te.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(te.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:te.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(te.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&te.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:te.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:te.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(te.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:te.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return te.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=te.IMMERSIVE_TRANSLATE_SERVICE),te.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),te.MOCK==="1"&&(e.translationService="mock"),e}async function Jn(){let e=await Y.storage.local.get(jn);if(e[jn]){let t=e[jn],n=t.tempTranslationUrlMatches||[],r=n.filter(i=>i.expiredAt>Date.now()),a=!1;r.length!==n.length&&(n=r,a=!0);let o={...t,tempTranslationUrlMatches:[...n]};return a&&await Yn(o),o}else return{}}async function Yn(e){await Y.storage.local.set({[jn]:e})}async function ul(e){await Y.storage.local.set({[Un]:e})}async function Xn(){let e=await Y.storage.local.get(Un),t={...ho,buildinConfigUpdatedAt:te.BUILD_TIME};if(e[Un]){let m=e[Un];if(m&&m.buildinConfigUpdatedAt){let b=new Date(m.buildinConfigUpdatedAt),x=new Date(t.buildinConfigUpdatedAt);b>x&&(t=m)}}let n={};if(!fe()&&Y.commands&&Y.commands.getAll){let m=await Y.commands.getAll();for(let b of m)b.name&&b.shortcut&&(n[b.name]=b.shortcut)}let r=Uf(),a=Bf(),i=(await Y.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},l=await Jn(),u=new Date;if(l&&l.tempTranslationUrlMatches&&l.tempTranslationUrlMatches.length>0){let m=l.tempTranslationUrlMatches.filter(b=>new Date(b.expiredAt)>u);if(m.length>0){let b=i.translationUrlPattern?i.translationUrlPattern?.matches||[]:[],x=Array.isArray(b)?b:[b],p=Array.from(new Set(x.concat(m.map(h=>h.match))));i.translationUrlPattern={...i.translationUrlPattern,matches:p}}}let c=Object.assign({},s,a,i);if(!c.interfaceLanguage){let m=await $f();c.interfaceLanguage=m}let f=Object.assign(r,t),d=Object.keys(f),g=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let m of d){let b=m;if(b==="generalRule")typeof c[b]=="object"&&(f[b]=Ur(r[b],c[b]));else if(b==="translationServices"){let x=c[b]||{},p=t[b]||{},h=Object.keys(p),w=Object.keys(x),S=[...new Set([...h,...w])],R={};for(let T of S)R[T]={...p[T],...x[T]};f[b]=R}else if(typeof c[b]!="string"&&typeof c[b]!="boolean"&&typeof c[b]!="number"&&g.includes(b))c[b]&&(f[b]=Object.assign(f[b],c[b])),b==="shortcuts"&&(f[b]={...f[b],...n});else if(b==="rules"){if(Array.isArray(c[b])&&(f[b]=[...c[b],...f[b]]),te.PROD==="0"&&te.DEV_RULES){let x=JSON.parse(te.DEV_RULES);f[b]=[...x,...f[b]]}}else c[b]!==void 0&&(f[b]=c[b])}return f.donateUrl=t.donateUrl,f.minVersion=t.minVersion,f.feedbackUrl=t.feedbackUrl,f}var $f=async()=>{let n=(await Y.i18n.getAcceptLanguages()).map(r=>tn(r)).find(r=>Gt[r]);return n||"en"},Uf=()=>{let e={...ho,buildinConfigUpdatedAt:te.BUILD_TIME};return{...e,targetLanguage:Or,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};function vn(){let e,t="pending",n=new Promise((r,a)=>{e={async resolve(o){await o,t="fulfilled",r(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var xo=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function jr(e,t){let n=vn(),r=setTimeout(()=>n.reject(new xo),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function Qn(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,o)=>{let i=()=>{clearTimeout(l),o(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{n?.removeEventListener("abort",i),a()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var gl=class{#e=0;#t=[];#n=[];#r=vn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=vn()}}[Symbol.asyncIterator](){return this.iterate()}};var tt={};wf(tt,{bgBlack:()=>md,bgBlue:()=>yd,bgBrightBlack:()=>vd,bgBrightBlue:()=>Cd,bgBrightCyan:()=>Ad,bgBrightGreen:()=>Ed,bgBrightMagenta:()=>Ld,bgBrightRed:()=>Sd,bgBrightWhite:()=>kd,bgBrightYellow:()=>_d,bgCyan:()=>Td,bgGreen:()=>hd,bgMagenta:()=>xd,bgRed:()=>pd,bgRgb24:()=>Dd,bgRgb8:()=>Pd,bgWhite:()=>wd,bgYellow:()=>bd,black:()=>Qf,blue:()=>nd,bold:()=>qf,brightBlack:()=>ml,brightBlue:()=>ud,brightCyan:()=>fd,brightGreen:()=>ld,brightMagenta:()=>gd,brightRed:()=>id,brightWhite:()=>dd,brightYellow:()=>cd,cyan:()=>ad,dim:()=>Vf,getColorEnabled:()=>Wf,gray:()=>sd,green:()=>ed,hidden:()=>Yf,inverse:()=>Jf,italic:()=>Kf,magenta:()=>rd,red:()=>Zf,reset:()=>zf,rgb24:()=>Rd,rgb8:()=>Md,setColorEnabled:()=>jf,strikethrough:()=>Xf,stripColor:()=>Nd,underline:()=>Gf,white:()=>od,yellow:()=>td});var{Deno:fl}=globalThis,dl=typeof fl?.noColor=="boolean"?fl.noColor:!0,To=!dl;function jf(e){dl||(To=e)}function Wf(){return To}function j(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function W(e,t){return To?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function zf(e){return W(e,j([0],0))}function qf(e){return W(e,j([1],22))}function Vf(e){return W(e,j([2],22))}function Kf(e){return W(e,j([3],23))}function Gf(e){return W(e,j([4],24))}function Jf(e){return W(e,j([7],27))}function Yf(e){return W(e,j([8],28))}function Xf(e){return W(e,j([9],29))}function Qf(e){return W(e,j([30],39))}function Zf(e){return W(e,j([31],39))}function ed(e){return W(e,j([32],39))}function td(e){return W(e,j([33],39))}function nd(e){return W(e,j([34],39))}function rd(e){return W(e,j([35],39))}function ad(e){return W(e,j([36],39))}function od(e){return W(e,j([37],39))}function sd(e){return ml(e)}function ml(e){return W(e,j([90],39))}function id(e){return W(e,j([91],39))}function ld(e){return W(e,j([92],39))}function cd(e){return W(e,j([93],39))}function ud(e){return W(e,j([94],39))}function gd(e){return W(e,j([95],39))}function fd(e){return W(e,j([96],39))}function dd(e){return W(e,j([97],39))}function md(e){return W(e,j([40],49))}function pd(e){return W(e,j([41],49))}function hd(e){return W(e,j([42],49))}function bd(e){return W(e,j([43],49))}function yd(e){return W(e,j([44],49))}function xd(e){return W(e,j([45],49))}function Td(e){return W(e,j([46],49))}function wd(e){return W(e,j([47],49))}function vd(e){return W(e,j([100],49))}function Sd(e){return W(e,j([101],49))}function Ed(e){return W(e,j([102],49))}function _d(e){return W(e,j([103],49))}function Cd(e){return W(e,j([104],49))}function Ld(e){return W(e,j([105],49))}function Ad(e){return W(e,j([106],49))}function kd(e){return W(e,j([107],49))}function Rt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function Md(e,t){return W(e,j([38,5,Rt(t)],39))}function Pd(e,t){return W(e,j([48,5,Rt(t)],49))}function Rd(e,t){return typeof t=="number"?W(e,j([38,2,t>>16&255,t>>8&255,t&255],39)):W(e,j([38,2,Rt(t.r),Rt(t.g),Rt(t.b)],39))}function Dd(e,t){return typeof t=="number"?W(e,j([48,2,t>>16&255,t>>8&255,t&255],49)):W(e,j([48,2,Rt(t.r),Rt(t.g),Rt(t.b)],49))}var Od=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Nd(e){return e.replace(Od,"")}function Wr(e,t){let n=null,r=null,a=(...o)=>{a.clear(),r=()=>{a.clear(),e.call(a,...o)},n=setTimeout(r,t)};return a.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},a.flush=()=>{r?.()},Object.defineProperty(a,"pending",{get:()=>typeof n=="number"}),a}var Jr,q,xl,Id,Zn,pl,Tl,Vr={},wl=[],Fd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Dt(e,t){for(var n in t)e[n]=t[n];return e}function vl(e){var t=e.parentNode;t&&t.removeChild(e)}function Sl(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Jr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return zr(e,i,r,a,null)}function zr(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++xl};return a==null&&q.vnode!=null&&q.vnode(o),o}function ht(e){return e.children}function qr(e,t){this.props=e,this.context=t}function Sn(e,t){if(t==null)return e.__?Sn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Sn(e):null}function El(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return El(e)}}function wo(e){(!e.__d&&(e.__d=!0)&&Zn.push(e)&&!Kr.__r++||pl!==q.debounceRendering)&&((pl=q.debounceRendering)||setTimeout)(Kr)}function Kr(){for(var e;Kr.__r=Zn.length;)e=Zn.sort(function(t,n){return t.__v.__b-n.__v.__b}),Zn=[],e.some(function(t){var n,r,a,o,i,s;t.__d&&(i=(o=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=Dt({},o)).__v=o.__v+1,vo(s,o,a,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??Sn(o),o.__h),Al(r,o),o.__e!=i&&El(o)))})}function _l(e,t,n,r,a,o,i,s,l,u){var c,f,d,g,m,b,x,p=r&&r.__k||wl,h=p.length;for(n.__k=[],c=0;c<t.length;c++)if((g=n.__k[c]=(g=t[c])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?zr(null,g,null,null,g):Array.isArray(g)?zr(ht,{children:g},null,null,null):g.__b>0?zr(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(d=p[c])===null||d&&g.key==d.key&&g.type===d.type)p[c]=void 0;else for(f=0;f<h;f++){if((d=p[f])&&g.key==d.key&&g.type===d.type){p[f]=void 0;break}d=null}vo(e,g,d=d||Vr,a,o,i,s,l,u),m=g.__e,(f=g.ref)&&d.ref!=f&&(x||(x=[]),d.ref&&x.push(d.ref,null,g),x.push(f,g.__c||m,g)),m!=null?(b==null&&(b=m),typeof g.type=="function"&&g.__k===d.__k?g.__d=l=Cl(g,l,e):l=Ll(e,g,d,p,m,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=Sn(d))}for(n.__e=b,c=h;c--;)p[c]!=null&&(typeof n.type=="function"&&p[c].__e!=null&&p[c].__e==n.__d&&(n.__d=Sn(r,c+1)),Ml(p[c],p[c]));if(x)for(c=0;c<x.length;c++)kl(x[c],x[++c],x[++c])}function Cl(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?Cl(r,t,n):Ll(n,r,r,a,r.__e,t));return t}function Ll(e,t,n,r,a,o){var i,s,l;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),i=null;else{for(s=o,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==a)break e;e.insertBefore(a,o),i=o}return i!==void 0?i:a.nextSibling}function Hd(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||Gr(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Gr(e,o,t[o],n[o],r)}function hl(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Fd.test(t)?n:n+"px"}function Gr(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||hl(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||hl(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?yl:bl,o):e.removeEventListener(t,o?yl:bl,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function bl(e){this.l[e.type+!1](q.event?q.event(e):e)}function yl(e){this.l[e.type+!0](q.event?q.event(e):e)}function vo(e,t,n,r,a,o,i,s,l){var u,c,f,d,g,m,b,x,p,h,w,S,R,T=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(u=q.__b)&&u(t);try{e:if(typeof T=="function"){if(x=t.props,p=(u=T.contextType)&&r[u.__c],h=u?p?p.props.value:u.__:r,n.__c?b=(c=t.__c=n.__c).__=c.__E:("prototype"in T&&T.prototype.render?t.__c=c=new T(x,h):(t.__c=c=new qr(x,h),c.constructor=T,c.render=$d),p&&p.sub(c),c.props=x,c.state||(c.state={}),c.context=h,c.__n=r,f=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),T.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Dt({},c.__s)),Dt(c.__s,T.getDerivedStateFromProps(x,c.__s))),d=c.props,g=c.state,f)T.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(T.getDerivedStateFromProps==null&&x!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(x,h),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(x,c.__s,h)===!1||t.__v===n.__v){c.props=x,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(_){_&&(_.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(x,c.__s,h),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,g,m)})}if(c.context=h,c.props=x,c.__v=t,c.__P=e,w=q.__r,S=0,"prototype"in T&&T.prototype.render)c.state=c.__s,c.__d=!1,w&&w(t),u=c.render(c.props,c.state,c.context);else do c.__d=!1,w&&w(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++S<25);c.state=c.__s,c.getChildContext!=null&&(r=Dt(Dt({},r),c.getChildContext())),f||c.getSnapshotBeforeUpdate==null||(m=c.getSnapshotBeforeUpdate(d,g)),R=u!=null&&u.type===ht&&u.key==null?u.props.children:u,_l(e,Array.isArray(R)?R:[R],t,n,r,a,o,i,s,l),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),b&&(c.__E=c.__=null),c.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Bd(n.__e,t,n,r,a,o,i,l);(u=q.diffed)&&u(t)}catch(_){t.__v=null,(l||o!=null)&&(t.__e=s,t.__h=!!l,o[o.indexOf(s)]=null),q.__e(_,t,n)}}function Al(e,t){q.__c&&q.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){q.__e(r,n.__v)}})}function Bd(e,t,n,r,a,o,i,s){var l,u,c,f=n.props,d=t.props,g=t.type,m=0;if(g==="svg"&&(a=!0),o!=null){for(;m<o.length;m++)if((l=o[m])&&"setAttribute"in l==!!g&&(g?l.localName===g:l.nodeType===3)){e=l,o[m]=null;break}}if(e==null){if(g===null)return document.createTextNode(d);e=a?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,d.is&&d),o=null,s=!1}if(g===null)f===d||s&&e.data===d||(e.data=d);else{if(o=o&&Jr.call(e.childNodes),u=(f=n.props||Vr).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!s){if(o!=null)for(f={},m=0;m<e.attributes.length;m++)f[e.attributes[m].name]=e.attributes[m].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(Hd(e,d,f,a,s),c)t.__k=[];else if(m=t.props.children,_l(e,Array.isArray(m)?m:[m],t,n,r,a&&g!=="foreignObject",o,i,o?o[0]:n.__k&&Sn(n,0),s),o!=null)for(m=o.length;m--;)o[m]!=null&&vl(o[m]);s||("value"in d&&(m=d.value)!==void 0&&(m!==e.value||g==="progress"&&!m||g==="option"&&m!==f.value)&&Gr(e,"value",m,f.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==e.checked&&Gr(e,"checked",m,f.checked,!1))}return e}function kl(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){q.__e(r,n)}}function Ml(e,t,n){var r,a;if(q.unmount&&q.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||kl(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){q.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Ml(r[a],t,typeof e.type!="function");n||e.__e==null||vl(e.__e),e.__=e.__e=e.__d=void 0}function $d(e,t,n){return this.constructor(e,n)}function Yr(e,t,n){var r,a,o;q.__&&q.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],vo(t,e=(!r&&n||t).__k=Sl(ht,null,[e]),a||Vr,Vr,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Jr.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),Al(o,e)}function So(e,t){var n={__c:t="__cC"+Tl++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(wo)},this.sub=function(i){a.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Jr=wl.slice,q={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},xl=0,Id=function(e){return e!=null&&e.constructor===void 0},qr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Dt({},this.state),typeof e=="function"&&(e=e(Dt({},n),this.props)),e&&Dt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),wo(this))},qr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),wo(this))},qr.prototype.render=ht,Zn=[],Kr.__r=0,Tl=0;var tr,we,Eo,Pl,er=0,Hl=[],Xr=[],Rl=q.__b,Dl=q.__r,Ol=q.diffed,Nl=q.__c,Il=q.unmount;function Zr(e,t){q.__h&&q.__h(we,e,er||t),er=0;var n=we.__H||(we.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Xr}),n.__[e]}function le(e){return er=1,Ud(Ul,e)}function Ud(e,t,n){var r=Zr(tr++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ul(void 0,t),function(o){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,o);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=we,!we.u)){we.u=!0;var a=we.shouldComponentUpdate;we.shouldComponentUpdate=function(o,i,s){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(c){return c.__c});if(l.every(function(c){return!c.__N}))return!a||a.call(this,o,i,s);var u=!1;return l.forEach(function(c){if(c.__N){var f=c.__[0];c.__=c.__N,c.__N=void 0,f!==c.__[0]&&(u=!0)}}),!!u&&(!a||a.call(this,o,i,s))}}return r.__N||r.__}function ze(e,t){var n=Zr(tr++,3);!q.__s&&$l(n.__H,t)&&(n.__=e,n.i=t,we.__H.__h.push(n))}function Co(e){return er=5,Bl(function(){return{current:e}},[])}function Bl(e,t){var n=Zr(tr++,7);return $l(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function nr(e,t){return er=8,Bl(function(){return e},t)}function Lo(e){var t=we.context[e.__c],n=Zr(tr++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(we)),t.props.value):e.__}function jd(){for(var e;e=Hl.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Qr),e.__H.__h.forEach(_o),e.__H.__h=[]}catch(t){e.__H.__h=[],q.__e(t,e.__v)}}q.__b=function(e){typeof e.type!="function"||e.o||e.type===ht?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),we=null,Rl&&Rl(e)},q.__r=function(e){Dl&&Dl(e),tr=0;var t=(we=e.__c).__H;t&&(Eo===we?(t.__h=[],we.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Xr,n.__N=n.i=void 0})):(t.__h.forEach(Qr),t.__h.forEach(_o),t.__h=[])),Eo=we},q.diffed=function(e){Ol&&Ol(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Hl.push(t)!==1&&Pl===q.requestAnimationFrame||((Pl=q.requestAnimationFrame)||Wd)(jd)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Xr&&(n.__=n.__V),n.i=void 0,n.__V=Xr})),Eo=we=null},q.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Qr),n.__h=n.__h.filter(function(r){return!r.__||_o(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],q.__e(r,n.__v)}}),Nl&&Nl(e,t)},q.unmount=function(e){Il&&Il(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Qr(r)}catch(a){t=a}}),n.__H=void 0,t&&q.__e(t,n.__v))};var Fl=typeof requestAnimationFrame=="function";function Wd(e){var t,n=function(){clearTimeout(r),Fl&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Fl&&(t=requestAnimationFrame(n))}function Qr(e){var t=we,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),we=t}function _o(e){var t=we;e.__c=e.__(),we=t}function $l(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ul(e,t){return typeof t=="function"?t(e):t}var iy=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var qd=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function ea({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,a=0,o=0;function i(){let c=Date.now();return c-a>t?(o=1,a=c,0):(o<e?o++:(a+=t,o=1),a-c)}let s=[];function l(){let c=Date.now();if(s.length<e)return s.push(c),0;let f=s.shift()+t;return c>=f?(s.push(c),0):(s.push(f),f-c)}let u=n?l:i;return c=>{let f=function(...d){if(!f.isEnabled)return(async()=>c.apply(this,d))();let g;return new Promise((m,b)=>{g=setTimeout(()=>{m(c.apply(this,d)),r.delete(g)},u()),r.set(g,b)})};return f.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new qd);r.clear(),s.splice(0,s.length)},f.isEnabled=!0,f}}var Ao;function Fo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Kl(e,t=","){return e.map(Fo).join(t)}var Gl=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function ta(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Jl(e,t="@media "){return t+Et(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function Et(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Vd(){}var De={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Yl(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Oo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(Yl(e),15)<<18}var Kd=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Ho({n:e,i:t,v:n=[]},r,a,o){for(let s of(e&&(e=Fo({n:e,i:t,v:n})),o=[...Et(o)],n)){let l=r.theme("screens",s);for(let u of Et(l&&Jl(l)||r.v(s))){var i;o.push(u),a|=l?67108864|Oo(u):s=="dark"?1073741824:u[0]=="@"?Oo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Kd.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var Bo=new Map;function jl(e){if(e.d){let t=[],n=ko(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?ko(r,o=>ko(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=o.indexOf(s[1]);return~l?o.slice(0,l)+s[0]+o.slice(l+s[1].length):Mo(o,i)}return Mo(i,o)})):r,"&"),r=>Mo(r,e.n?"."+Gl(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function ko(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Mo(e,t){return e.replace(/&/g,t)}var Gd=new Intl.Collator("en",{numeric:!0});function Jd(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=Xl(e[a],t)?n=a+1:r=a}return r}function Xl(e,t){let n=e.p&De.o;return n==(t.p&De.o)&&(n==De.b||n==De.o)?0:e.p-t.p||e.o-t.o||Gd.compare(e.n,t.n)}function Po(e,t){return Math.round(parseInt(e,16)*t)}function Yd(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Po(e.substr(1,o),i),Po(e.substr(1+o,o),i),Po(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function Ql(e,t,n,r,a=[]){return function o(i,{n:s,p:l,r:u=[],i:c},f){let d=[],g="",m=0,b=0;for(let h in i||{}){var x,p;let w=i[h];if(h[0]=="@"){if(!w)continue;if(h[1]=="a"){d.push(...Zl(s,l,Uo(""+w),f,l,u,c,!0));continue}if(h[1]=="l"){for(let S of Et(w))d.push(...o(S,{n:s,p:(x=De[h[7]],l&~De.o|x),r:u,i:c},f));continue}if(h[1]=="i"){d.push(...Et(w).map(S=>({p:-1,o:0,r:[],d:h+" "+S})));continue}if(h[1]=="k"){d.push({p:De.d,o:0,r:[h],d:o(w,{p:De.d},f).map(jl).join("")});continue}if(h[1]=="f"){d.push(...Et(w).map(S=>({p:De.d,o:0,r:[h],d:o(S,{p:De.d},f).map(jl).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))h=="label"&&w?s=w+ta(JSON.stringify([l,c,i])):(w||w===0)&&(h=h.replace(/[A-Z]/g,S=>"-"+S.toLowerCase()),b+=1,m=Math.max(m,(p=h)[0]=="-"?0:Yl(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+Et(w).map(S=>f.s(h,Xd(""+S,f.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let S=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(R,T)=>{let _=f.theme("screens",T);return _?(S|=67108864,Jl(_,"")):R}),S|=Oo(h)),d.push(...o(w,{n:s,p:S,r:[...u,h],i:c},f))}else d.push(...o(w,{p:l,r:[...u,h]},f))}return d.unshift({n:s,p:l,o:Math.max(0,15-b)+1.5*Math.min(m||15,15),r:u,d:g}),d.sort(Xl)}(e,Ho(t,n,r,a),n)}function Xd(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i)=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?Yd(s):""+s})}function $o(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function No(e,t,n=De.u,r,a){let o=[];for(let i of e)for(let s of function(l,u,c,f,d){var g;l={...l,i:l.i||d};let m=function(b,x){let p=Bo.get(b.n);return p?p(b,x):x.r(b.n,b.v[0]=="dark")}(l,u);return m?typeof m=="string"?({r:f,p:c}=Ho(l,u,c,f),$o(No(Uo(m),u,c,f,l.i),l.n)):Array.isArray(m)?m.map(b=>{var x,p;return{o:0,...b,r:[...Et(f),...Et(b.r)],p:(x=c,p=(g=b.p)!=null?g:c,x&~De.o|p)}}):Ql(m,l,u,c,f):[{c:Fo(l),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(Jd(o,s),0,s);return o}function Zl(e,t,n,r,a,o,i,s){return $o((s?n.flatMap(l=>No([l],r,a,o,i)):No(n,r,a,o,i)).map(l=>l.p&De.o&&(l.n||t==De.b)?{...l,p:l.p&~De.o|t,o:0}:l),e)}function Qd(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:l,r:u,i:c}=Ho(o,i,t);return n&&Zl(s,t,n,i,l,u,c,r)},Bo.set(e,a),e}function Ro(e,t){if(e[e.length-1]!="("){let n=[],r=!1,a=!1,o="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(o+=(o&&"-")+i)}o&&(a&&(o="-"+o),t[0].push({n:o,v:n.filter(Zd),i:r}))}}function Zd(e,t,n){return n.indexOf(e)==t}var Wl=new Map;function Uo(e){let t=Wl.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,l=(u,c=0)=>{a!=s&&(n.push(e.slice(a,s+c)),u&&Ro(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let f=n[c-1];if(/[~@]$/.test(f)){let d=r.shift();n.length=c,Ro([...n,"#"],r);let{v:g}=r[0].pop();for(let m of d)m.v.splice(+(m.v[0]=="dark")-+(g[0]=="dark"),g.length);Ro([...n,Qd(f.length>1?f.slice(0,-1)+ta(JSON.stringify([f,d])):f+"("+Kl(d)+")",De.a,d,/@$/.test(f))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),Wl.set(e,t=r[0])}return t}function ec(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function tc(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?ec(e,t,n=>Do(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Do(r),e?Do(e):"")}function Do(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=tc(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var wy=nc("@"),vy=nc("~");function nc(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(a,...o){return t(r,a,o)}});function t(n,r,a){return Kl(Uo(n+e+"("+tc(r,a)+")"))}}function Io(e,t){return Array.isArray(e)?zl(ec(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?zl(e):[e]}var em=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function zl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=em.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function rc(e,...t){var n,r;let a=Io(e,t),o=(((n=a.find(i=>i.label))==null?void 0:n.label)||"css")+ta(JSON.stringify(a));return r=(i,s)=>$o(a.flatMap(l=>Ql(l,i,s,De.o)),o),Bo.set(o,r),o}var Sy=new Proxy(function(e,t){return ql("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return ql(t,n,r)}});function ql(e,t,n){return{toString:()=>rc({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var Ey=Symbol();var ac=new Proxy(Vd,{apply:(e,t,n)=>Ao(n[0]),get(e,t){let n=Ao[t];return typeof n=="function"?function(){return n.apply(Ao,arguments)}:n}});var _y=function e(t){return new Proxy(function(n,...r){return Vl(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(a,...o){return Vl(t,r,a,o)}})}();function Vl(e,t,n,r){return{toString(){let a=Io(n,r),o=Gl(t+ta(JSON.stringify([t,a])));return(typeof e=="function"?e:ac)(rc({[`@keyframes ${o}`]:Io(n,r)})),o}}}var jo;function Qo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function dc(e,t=","){return e.map(Qo).join(t)}var mc=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function ra(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function aa(e,t="@media "){return t+nt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function nt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function nm(){}var Oe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function pc(e){return e.match(/[-=:;]/g)?.length||0}function Go(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(pc(e),15)<<18}var rm=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Zo({n:e,i:t,v:n=[]},r,a,o){e&&(e=Qo({n:e,i:t,v:n})),o=[...nt(o)];for(let s of n){let l=r.theme("screens",s);for(let u of nt(l&&aa(l)||r.v(s))){var i;o.push(u),a|=l?67108864|Go(u):s=="dark"?1073741824:u[0]=="@"?Go(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~rm.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var es=new Map;function oc(e){if(e.d){let t=[],n=Wo(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Wo(r,o=>Wo(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=o.indexOf(s[1]);return~l?o.slice(0,l)+s[0]+o.slice(l+s[1].length):zo(o,i)}return zo(i,o)})):r,"&"),r=>zo(r,e.n?"."+mc(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Wo(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function zo(e,t){return e.replace(/&/g,t)}var sc=new Intl.Collator("en",{numeric:!0});function am(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=hc(e[a],t)?n=a+1:r=a}return r}function hc(e,t){let n=e.p&Oe.o;return n==(t.p&Oe.o)&&(n==Oe.b||n==Oe.o)?0:e.p-t.p||e.o-t.o||sc.compare(ic(e.n),ic(t.n))||sc.compare(lc(e.n),lc(t.n))}function ic(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function lc(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function qo(e,t){return Math.round(parseInt(e,16)*t)}function Ot(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[qo(e.substr(1,o),i),qo(e.substr(1+o,o),i),qo(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function bc(e,t,n,r,a=[]){return function o(i,{n:s,p:l,r:u=[],i:c},f){let d=[],g="",m=0,b=0;for(let h in i||{}){var x,p;let w=i[h];if(h[0]=="@"){if(!w)continue;if(h[1]=="a"){d.push(...xc(s,l,ns(""+w),f,l,u,c,!0));continue}if(h[1]=="l"){for(let S of nt(w))d.push(...o(S,{n:s,p:(x=Oe[h[7]],l&~Oe.o|x),r:h[7]=="d"?[]:u,i:c},f));continue}if(h[1]=="i"){d.push(...nt(w).map(S=>({p:-1,o:0,r:[],d:h+" "+S})));continue}if(h[1]=="k"){d.push({p:Oe.d,o:0,r:[h],d:o(w,{p:Oe.d},f).map(oc).join("")});continue}if(h[1]=="f"){d.push(...nt(w).map(S=>({p:Oe.d,o:0,r:[h],d:o(S,{p:Oe.d},f).map(oc).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))h=="label"&&w?s=w+ra(JSON.stringify([l,c,i])):(w||w===0)&&(h=h.replace(/[A-Z]/g,S=>"-"+S.toLowerCase()),b+=1,m=Math.max(m,(p=h)[0]=="-"?0:pc(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+nt(w).map(S=>f.s(h,yc(""+S,f.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let S=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(R,T)=>{let _=f.theme("screens",T);return _?(S|=67108864,aa(_,"")):R}),S|=Go(h)),d.push(...o(w,{n:s,p:S,r:[...u,h],i:c},f))}else d.push(...o(w,{p:l,r:[...u,h]},f))}return d.unshift({n:s,p:l,o:Math.max(0,15-b)+1.5*Math.min(m||15,15),r:u,d:g}),d.sort(hc)}(e,Zo(t,n,r,a),n)}function yc(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i="")=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?Ot(s):""+nt(s).filter(l=>Object(l)!==l)})}function ts(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Jo(e,t,n=Oe.u,r,a){let o=[];for(let i of e)for(let s of function(l,u,c,f,d){l={...l,i:l.i||d};let g=function(m,b){let x=es.get(m.n);return x?x(m,b):b.r(m.n,m.v[0]=="dark")}(l,u);return g?typeof g=="string"?({r:f,p:c}=Zo(l,u,c,f),ts(Jo(ns(g),u,c,f,l.i),l.n)):Array.isArray(g)?g.map(m=>{var b,x;return{o:0,...m,r:[...nt(f),...nt(m.r)],p:(b=c,x=m.p??c,b&~Oe.o|x)}}):bc(g,l,u,c,f):[{c:Qo(l),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(am(o,s),0,s);return o}function xc(e,t,n,r,a,o,i,s){return ts((s?n.flatMap(l=>Jo([l],r,a,o,i)):Jo(n,r,a,o,i)).map(l=>l.p&Oe.o&&(l.n||t==Oe.b)?{...l,p:l.p&~Oe.o|t,o:0}:l),e)}function om(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:l,r:u,i:c}=Zo(o,i,t);return n&&xc(s,t,n,i,l,u,c,r)},es.set(e,a),e}function Vo(e,t,n){if(e[e.length-1]!="("){let r=[],a=!1,o=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),a=!a),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),o=!o),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(o&&(i="-"+i),t[0].push({n:i,v:r.filter(sm),i:a}))}}function sm(e,t,n){return n.indexOf(e)==t}var cc=new Map;function ns(e){let t=cc.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,l=(u,c=0)=>{a!=s&&(n.push(e.slice(a,s+c)),u&&Vo(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let f=n[c-1];if(/[~@]$/.test(f)){let d=r.shift();n.length=c,Vo([...n,"#"],r);let{v:g}=r[0].pop();for(let m of d)m.v.splice(+(m.v[0]=="dark")-+(g[0]=="dark"),g.length);Vo([...n,om(f.length>1?f.slice(0,-1)+ra(JSON.stringify([f,d])):f+"("+dc(d)+")",Oe.a,d,/@$/.test(f))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),cc.set(e,t=r[0])}return t}function Tc(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function wc(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Tc(e,t,n=>Ko(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Ko(r),e?Ko(e):"")}function Ko(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=wc(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var Wy=vc("@"),zy=vc("~");function vc(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(a,...o){return t(r,a,o)}}});function t(n,r,a){return dc(ns(n+e+"("+wc(r,a)+")"))}}function Yo(e,t){return Array.isArray(e)?uc(Tc(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?uc(e):[e]}var im=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function uc(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=im.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function Sc(e,...t){var n;let r=Yo(e,t),a=(r.find(o=>o.label)?.label||"css")+ra(JSON.stringify(r));return n=(o,i)=>ts(r.flatMap(s=>bc(s,o,i,Oe.o)),a),es.set(a,n),a}var qy=new Proxy(function(e,t){return gc("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return gc(t,n,r)}}});function gc(e,t,n){return{toString(){return Sc({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function L(e,t,n){return[e,lm(t,n)]}function lm(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Xo(n,1)}):n=>e||{[n[1]]:Xo(n,2)}}function Xo(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function A(e,t,n,r){return[e,cm(t,n,r)]}function cm(e,t,n){let r=typeof t=="string"?(a,o)=>({[t]:n?n(a,o):a._}):t||(({1:a,_:o},i,s)=>({[a||s]:o}));return(a,o)=>{let i=Ec(e||a[1]),s=o.theme(i,a.$$)??rr(a.$$,i,o);if(s!=null)return a._=Xo(a,0,s),r(a,o,i)}}function Ae(e,t={},n){return[e,um(t,n)]}function um(e={},t){return(n,r)=>{let{section:a=Ec(n[0]).replace("-","")+"Color"}=e,[o,i]=gm(n.$$);if(!o)return;let s=r.theme(a,o)||rr(o,a,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=a.replace("Color","Opacity"),property:c=a,selector:f}=e,d=r.theme(u,i||"DEFAULT")||i&&rr(i,u,r),g=t||(({_:b})=>{let x=ar(c,b);return f?{[f]:x}:x});n._={value:Ot(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:b=>Ot(s,b),opacityVariable:l||void 0,opacityValue:d||void 0};let m=g(n,r);if(!n.dark){let b=r.d(a,o,s);b&&b!==s&&(n._={value:Ot(b,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:x=>Ot(b,x),opacityVariable:l||void 0,opacityValue:d||void 0},m={"&":m,[r.v("dark")]:g(n,r)})}return m}}function gm(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function ar(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function rr(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=na(yc(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Ec(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function na(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,a="")=>na(n)+r+na(a)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var Vy=Symbol();var fm=new Proxy(nm,{apply(e,t,n){return jo(n[0])},get(e,t){let n=jo[t];return typeof n=="function"?function(){return n.apply(jo,arguments)}:n}});var Ky=function e(t){return new Proxy(function(n,...r){return fc(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(a,...o){return fc(t,r,a,o)}}})}();function fc(e,t,n,r){return{toString(){let a=Yo(n,r),o=mc(t+ra(JSON.stringify([t,a])));return(typeof e=="function"?e:fm)(Sc({[`@keyframes ${o}`]:Yo(n,r)})),o}}}var dm="inherit",mm="currentColor",pm="transparent",hm="#000",bm="#fff",ym={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},xm={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Tm={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},wm={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},vm={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},Sm={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Em={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},_m={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Cm={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Lm={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Am={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},km={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Mm={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Pm={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Rm={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Dm={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Om={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},Nm={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},Im={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},Fm={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},Hm={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},Bm={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},$m={__proto__:null,inherit:dm,current:mm,transparent:pm,black:hm,white:bm,slate:ym,gray:xm,zinc:Tm,neutral:wm,stone:vm,red:Sm,orange:Em,amber:_m,yellow:Cm,lime:Lm,green:Am,emerald:km,teal:Mm,cyan:Pm,sky:Rm,blue:Dm,indigo:Om,violet:Nm,purple:Im,fuchsia:Fm,pink:Hm,rose:Bm},_c={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:$m,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Xe(4,"rem",4,.5,.5),...Xe(12,"rem",4,5),14:"3.5rem",...Xe(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:Z("blur"),backdropBrightness:Z("brightness"),backdropContrast:Z("contrast"),backdropGrayscale:Z("grayscale"),backdropHueRotate:Z("hueRotate"),backdropInvert:Z("invert"),backdropOpacity:Z("opacity"),backdropSaturate:Z("saturate"),backdropSepia:Z("sepia"),backgroundColor:Z("colors"),backgroundImage:{none:"none"},backgroundOpacity:Z("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Xe(200,"",100,0,50),...Xe(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:Z("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:Z("spacing"),borderWidth:{DEFAULT:"1px",...rt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:Z("colors"),caretColor:Z("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Xe(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:Z("borderColor"),divideOpacity:Z("borderOpacity"),divideWidth:Z("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:Z("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...or(2,6),...or(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:Z("spacing"),gradientColorStops:Z("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...or(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...or(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Xe(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Xe(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:Z("spacing"),placeholderColor:Z("colors"),placeholderOpacity:Z("opacity"),outlineColor:Z("colors"),outlineOffset:rt(8,"px"),outlineWidth:rt(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:Z("colors"),ringOffsetWidth:rt(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...rt(8,"px")},rotate:{...rt(2,"deg"),...rt(12,"deg",3),...rt(180,"deg",45)},saturate:Xe(200,"",100,0,50),scale:{...Xe(150,"",100,0,50),...Xe(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:Z("spacing"),scrollPadding:Z("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...rt(2,"deg"),...rt(12,"deg",3)},space:Z("spacing"),stroke:Z("colors"),strokeWidth:Xe(2),textColor:Z("colors"),textDecorationColor:Z("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...rt(8,"px")},textUnderlineOffset:{auto:"auto",...rt(8,"px")},textIndent:Z("spacing"),textOpacity:Z("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:Z("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...or(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Xe(50,"",1,0,10),auto:"auto"}};function or(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function rt(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Xe(e,t="",n=1,r=0,a=1,o={}){for(;r<=e;r+=a)o[r]=r/n+t;return o}function Z(e){return({theme:t})=>t(e)}var Yy={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${_c.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${_c.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Qy=[L("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:rr(`[${t}]`,e,n)}}})),L("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),A("aspect-","aspectRatio"),L("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:a}=t("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(o[aa(l)]={"&":{maxWidth:l,...i(s)}})}return o;function i(s){let l=a&&(typeof a=="string"?a:a[s]||a.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),A("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),L("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),L("box-(border|content)","boxSizing",({1:e})=>e+"-box"),L("hidden",{display:"none"}),L("table-(auto|fixed)","tableLayout"),L(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",L("isolate","isolation"),L("object-(contain|cover|fill|none|scale-down)","objectFit"),A("object-","objectPosition"),L("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",oa),L("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),L("(static|fixed|absolute|relative|sticky)","position"),A("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),A("-?(top|bottom|left|right)(?:$|-)","inset"),L("visible","visibility"),L("invisible",{visibility:"hidden"}),A("-?z-","zIndex"),L("flex-((row|col)(-reverse)?)","flexDirection",Cc),L("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),A("(flex-(?:grow|shrink))(?:$|-)"),A("(flex)-"),A("grow(?:$|-)","flexGrow"),A("shrink(?:$|-)","flexShrink"),A("basis-","flexBasis"),A("-?(order)-"),"-?(order)-(\\d+)",A("grid-cols-","gridTemplateColumns"),L("grid-cols-(\\d+)","gridTemplateColumns",Mc),A("col-","gridColumn"),L("col-(span)-(\\d+)","gridColumn",kc),A("col-start-","gridColumnStart"),L("col-start-(auto|\\d+)","gridColumnStart"),A("col-end-","gridColumnEnd"),L("col-end-(auto|\\d+)","gridColumnEnd"),A("grid-rows-","gridTemplateRows"),L("grid-rows-(\\d+)","gridTemplateRows",Mc),A("row-","gridRow"),L("row-(span)-(\\d+)","gridRow",kc),A("row-start-","gridRowStart"),L("row-start-(auto|\\d+)","gridRowStart"),A("row-end-","gridRowEnd"),L("row-end-(auto|\\d+)","gridRowEnd"),L("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>oa(Cc(e))),L("grid-flow-(dense)","gridAutoFlow"),A("auto-cols-","gridAutoColumns"),A("auto-rows-","gridAutoRows"),A("gap-x(?:$|-)","gap","columnGap"),A("gap-y(?:$|-)","gap","rowGap"),A("gap(?:$|-)","gap"),"(justify-(?:items|self))-",L("justify-","justifyContent",Lc),L("(content|items|self)-",e=>({["align-"+e[1]]:Lc(e)})),L("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),A("p([xytrbl])?(?:$|-)","padding",En("padding")),A("-?m([xytrbl])?(?:$|-)","margin",En("margin")),A("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),L("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),A("w-","width"),A("min-w-","minWidth"),A("max-w-","maxWidth"),A("h-","height"),A("min-h-","minHeight"),A("max-h-","maxHeight"),A("font-","fontWeight"),A("font-","fontFamily","fontFamily",bt),L("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),L("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),L("italic","fontStyle"),L("not-italic",{fontStyle:"normal"}),L("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),A("tracking-","letterSpacing"),A("leading-","lineHeight"),L("list-(inside|outside)","listStylePosition"),A("list-","listStyleType"),L("list-","listStyleType"),A("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Ae("placeholder-",{property:"color",selector:"&::placeholder"}),L("text-(left|center|right|justify|start|end)","textAlign"),L("text-(ellipsis|clip)","textOverflow"),A("text-opacity-","textOpacity","--tw-text-opacity"),Ae("text-",{property:"color"}),A("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),A("indent-","textIndent"),L("(overline|underline|line-through)","textDecorationLine"),L("no-underline",{textDecorationLine:"none"}),A("underline-offset-","textUnderlineOffset"),Ae("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),A("decoration-","textDecorationThickness"),L("decoration-","textDecorationStyle"),L("(uppercase|lowercase|capitalize)","textTransform"),L("normal-case",{textTransform:"none"}),L("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),L("align-","verticalAlign"),L("whitespace-","whiteSpace"),L("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),L("break-words",{overflowWrap:"break-word"}),L("break-all",{wordBreak:"break-all"}),Ae("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Ae("accent-",{opacityVariable:!1,opacitySection:"opacity"}),L("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${nn(e," ")},var(--tw-gradient-stops))`),Ae("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Ae("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Ae("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),L("bg-(fixed|local|scroll)","backgroundAttachment"),L("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),L(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),L("bg-blend-","backgroundBlendMode"),L("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),A("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Ae("bg-",{section:"backgroundColor"}),A("bg-","backgroundImage"),A("bg-","backgroundPosition"),L("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",oa),A("bg-","backgroundSize"),A("rounded(?:$|-)","borderRadius"),A("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${nn(n[0])}-radius`]:t,[`border-${nn(n[1])}-radius`]:t}}),L("border-(collapse|separate)","borderCollapse"),A("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),L("border-(solid|dashed|dotted|double|none)","borderStyle"),A("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Ae("border-([xytrbl])-",{section:"borderColor"},En("border","Color")),Ae("border-"),A("border-([xytrbl])(?:$|-)","borderWidth",En("border","Width")),A("border(?:$|-)","borderWidth"),A("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),L("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),L("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),A("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${nn(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${nn(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Ae("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),A("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Ae("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),A("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),L("ring-inset",{"--tw-ring-inset":"inset"}),Ae("ring-",{property:"--tw-ring-color"}),A("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Ot(t("ringOffsetColor","","#fff")),"--tw-ring-color":Ot(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Ae("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),A("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":bt(e),"--tw-shadow-colored":bt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),A("(opacity)-"),L("mix-blend-","mixBlendMode"),...Ac(),...Ac("backdrop-"),A("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:bt(e),transitionTimingFunction:e._=="none"?void 0:bt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:bt(t("transitionDuration",""))})),A("duration(?:$|-)","transitionDuration","transitionDuration",bt),A("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",bt),A("delay(?:$|-)","transitionDelay","transitionDelay",bt),A("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=bt(e),a=r.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=n(a[0]))]:o,animation:a.join(" ")}:{animation:r}}),"(transform)-(none)",L("transform",as),L("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Pc(e=="gpu")})),A("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...as()})),A("-?(rotate)-","rotate",rs),A("-?(translate-[xy])-","translate",rs),A("-?(skew-[xy])-","skew",rs),L("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",oa),"(appearance)-",A("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",A("(cursor)-"),"(cursor)-",L("snap-(none)","scroll-snap-type"),L("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),L("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),L("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),L("snap-(normal|always)","scroll-snap-stop"),L("scroll-(auto|smooth)","scroll-behavior"),A("scroll-p([xytrbl])?(?:$|-)","padding",En("scroll-padding")),A("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",En("scroll-margin")),L("touch-(auto|none|manipulation)","touch-action"),L("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),L("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),L("outline",{outlineStyle:"solid"}),L("outline-(dashed|dotted|double|hidden)","outlineStyle"),A("(outline-offset)-"),Ae("outline-",{opacityVariable:!1,opacitySection:"opacity"}),A("outline-","outlineWidth"),"(pointer-events)-",A("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],L("select-(none|text|all|auto)","userSelect"),Ae("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Ae("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),A("stroke-","strokeWidth"),L("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),L("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function oa(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Cc(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function nn(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function bt(e){return e&&""+(e._||e)}function Lc({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function En(e,t=""){return({1:n,_:r})=>{let a={x:"lr",y:"tb"}[n]||n+n;return a?{...ar(e+"-"+nn(a[0])+t,r),...ar(e+"-"+nn(a[1])+t,r)}:ar(e+t,r)}}function Ac(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,L(`${e}filter`,n),...t.map(r=>A(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:a,_:o})=>({[`--tw-${a}`]:nt(o).map(i=>`${r}(${i})`).join(" "),...n})))]}function rs({1:e,_:t}){return{["--tw-"+e]:t,...as()}}function as(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Pc()}}}}function Pc(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function kc({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Mc({1:e}){return`repeat(${e},minmax(0,1fr))`}var jm=Object.create,Dc=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,zm=Object.getOwnPropertyNames,qm=Object.getPrototypeOf,Vm=Object.prototype.hasOwnProperty,Km=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Gm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of zm(t))!Vm.call(e,a)&&a!==n&&Dc(e,a,{get:()=>t[a],enumerable:!(r=Wm(t,a))||r.enumerable});return e},Jm=(e,t,n)=>(n=e!=null?jm(qm(e)):{},Gm(t||!e||!e.__esModule?Dc(n,"default",{value:e,enumerable:!0}):n,e)),Ym=Km((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var a={};return r.m=n,r.c=a,r.i=function(o){return o},r.d=function(o,i,s){r.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(i,"a",i),i},r.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,r,a){"use strict";(function(o){var i,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,f){u(r)==="object"&&u(o)==="object"?o.exports=f():(s=[],i=f,l=typeof i=="function"?i.apply(r,s):i,l!==void 0&&(o.exports=l))})(void 0,function(){return function(c){function f(g){if(d[g])return d[g].exports;var m=d[g]={i:g,l:!1,exports:{}};return c[g].call(m.exports,m,m.exports,f),m.l=!0,m.exports}var d={};return f.m=c,f.c=d,f.i=function(g){return g},f.d=function(g,m,b){f.o(g,m)||Object.defineProperty(g,m,{configurable:!1,enumerable:!0,get:b})},f.n=function(g){var m=g&&g.__esModule?function(){return g.default}:function(){return g};return f.d(m,"a",m),m},f.o=function(g,m){return Object.prototype.hasOwnProperty.call(g,m)},f.p="",f(f.s=0)}([function(c,f,d){function g(v,I){var H={};for(var ae in v)I.indexOf(ae)>=0||Object.prototype.hasOwnProperty.call(v,ae)&&(H[ae]=v[ae]);return H}Object.defineProperty(f,"__esModule",{value:!0});var m=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(v){return typeof v>"u"?"undefined":u(v)}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v>"u"?"undefined":u(v)},b=Object.assign||function(v){for(var I=1;I<arguments.length;I++){var H=arguments[I];for(var ae in H)Object.prototype.hasOwnProperty.call(H,ae)&&(v[ae]=H[ae])}return v},x={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:x.top,force:x.top,confirm:x.top,input:x.top,select:x.bottom,date:x.top}},h=f.setOptions=function(v){p=b({},p,v,{classes:b({},p.classes,v.classes),ids:b({},p.ids,v.ids),positions:b({},p.positions,v.positions)})},w=function(){return new Promise(function(v){return setTimeout(v,0)})},S=function(v){return new Promise(function(I){return setTimeout(I,1e3*v)})},R=function(){document.activeElement&&document.activeElement.blur()},T=function(){var v="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(I){var H=16*Math.random()|0,ae=I==="x"?H:3&H|8;return ae.toString(16)});return"notie-"+v},_={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},M=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},C=function(v){return v.keyCode===13},z=function(v){return v.keyCode===27},P=function(v,I){v.classList.add(p.classes.container),v.style[I]="-10000px",document.body.appendChild(v),v.style[I]="-"+v.offsetHeight+"px",v.listener&&window.addEventListener("keydown",v.listener),w().then(function(){v.style.transition=M(),v.style[I]=0})},U=function(v,I){var H=document.getElementById(v);H&&(H.style[I]="-"+H.offsetHeight+"px",H.listener&&window.removeEventListener("keydown",H.listener),S(p.transitionDuration).then(function(){H.parentNode&&H.parentNode.removeChild(H)}))},F=function(v,I){var H=document.createElement("div");H.id=p.ids.overlay,H.classList.add(p.classes.overlay),H.classList.add(p.classes.backgroundOverlay),H.style.opacity=0,v&&p.overlayClickDismiss&&(H.onclick=function(){U(v.id,I),J()}),document.body.appendChild(H),w().then(function(){H.style.transition=M(),H.style.opacity=p.overlayOpacity})},J=function(){var v=document.getElementById(p.ids.overlay);v.style.opacity=0,S(p.transitionDuration).then(function(){v.parentNode&&v.parentNode.removeChild(v)})},X=f.hideAlerts=function(v){var I=document.getElementsByClassName(p.classes.alert);if(I.length){for(var H=0;H<I.length;H++){var ae=I[H];U(ae.id,ae.position)}v&&S(p.transitionDuration).then(function(){return v()})}},Re=f.alert=function(v){var I=v.type,H=I===void 0?4:I,ae=v.text,G=v.time,Ee=G===void 0?p.alertTime:G,ye=v.stay,Ie=ye!==void 0&&ye,xe=v.position,Q=xe===void 0?p.positions.alert||Q.top:xe;R(),X();var oe=document.createElement("div"),se=T();oe.id=se,oe.position=Q,oe.classList.add(p.classes.textbox),oe.classList.add(_[H]),oe.classList.add(p.classes.alert),oe.innerHTML='<div class="'+p.classes.textboxInner+'">'+ae+"</div>",oe.onclick=function(){return U(se,Q)},oe.listener=function(B){(C(B)||z(B))&&X()},P(oe,Q),Ee&&Ee<1&&(Ee=1),!Ie&&Ee&&S(Ee).then(function(){return U(se,Q)})},Je=f.force=function(v,I){var H=v.type,ae=H===void 0?5:H,G=v.text,Ee=v.buttonText,ye=Ee===void 0?"OK":Ee,Ie=v.callback,xe=v.position,Q=xe===void 0?p.positions.force||Q.top:xe;R(),X();var oe=document.createElement("div"),se=T();oe.id=se;var B=document.createElement("div");B.classList.add(p.classes.textbox),B.classList.add(p.classes.backgroundInfo),B.innerHTML='<div class="'+p.classes.textboxInner+'">'+G+"</div>";var E=document.createElement("div");E.classList.add(p.classes.button),E.classList.add(_[ae]),E.innerHTML=ye,E.onclick=function(){U(se,Q),J(),Ie?Ie():I&&I()},oe.appendChild(B),oe.appendChild(E),oe.listener=function($){C($)&&E.click()},P(oe,Q),F()},Se=f.confirm=function(v,I,H){var ae=v.text,G=v.submitText,Ee=G===void 0?"Yes":G,ye=v.cancelText,Ie=ye===void 0?"Cancel":ye,xe=v.submitCallback,Q=v.cancelCallback,oe=v.position,se=oe===void 0?p.positions.confirm||se.top:oe;R(),X();var B=document.createElement("div"),E=T();B.id=E;var $=document.createElement("div");$.classList.add(p.classes.textbox),$.classList.add(p.classes.backgroundInfo),$.innerHTML='<div class="'+p.classes.textboxInner+'">'+ae+"</div>";var V=document.createElement("div");V.classList.add(p.classes.button),V.classList.add(p.classes.elementHalf),V.classList.add(p.classes.backgroundSuccess),V.innerHTML=Ee,V.onclick=function(){U(E,se),J(),xe?xe():I&&I()};var k=document.createElement("div");k.classList.add(p.classes.button),k.classList.add(p.classes.elementHalf),k.classList.add(p.classes.backgroundError),k.innerHTML=Ie,k.onclick=function(){U(E,se),J(),Q?Q():H&&H()},B.appendChild($),B.appendChild(V),B.appendChild(k),B.listener=function(K){C(K)?V.click():z(K)&&k.click()},P(B,se),F(B,se)},ce=function(v,I,H){var ae=v.text,G=v.submitText,Ee=G===void 0?"Submit":G,ye=v.cancelText,Ie=ye===void 0?"Cancel":ye,xe=v.submitCallback,Q=v.cancelCallback,oe=v.position,se=oe===void 0?p.positions.input||se.top:oe,B=g(v,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);R(),X();var E=document.createElement("div"),$=T();E.id=$;var V=document.createElement("div");V.classList.add(p.classes.textbox),V.classList.add(p.classes.backgroundInfo),V.innerHTML='<div class="'+p.classes.textboxInner+'">'+ae+"</div>";var k=document.createElement("input");k.classList.add(p.classes.inputField),k.setAttribute("autocapitalize",B.autocapitalize||"none"),k.setAttribute("autocomplete",B.autocomplete||"off"),k.setAttribute("autocorrect",B.autocorrect||"off"),k.setAttribute("autofocus",B.autofocus||"true"),k.setAttribute("inputmode",B.inputmode||"verbatim"),k.setAttribute("max",B.max||""),k.setAttribute("maxlength",B.maxlength||""),k.setAttribute("min",B.min||""),k.setAttribute("minlength",B.minlength||""),k.setAttribute("placeholder",B.placeholder||""),k.setAttribute("spellcheck",B.spellcheck||"default"),k.setAttribute("step",B.step||"any"),k.setAttribute("type",B.type||"text"),k.value=B.value||"",B.allowed&&(k.oninput=function(){var he=void 0;if(Array.isArray(B.allowed)){for(var de="",mt=B.allowed,Tt=0;Tt<mt.length;Tt++)mt[Tt]==="an"?de+="0-9a-zA-Z":mt[Tt]==="a"?de+="a-zA-Z":mt[Tt]==="n"&&(de+="0-9"),mt[Tt]==="s"&&(de+=" ");he=new RegExp("[^"+de+"]","g")}else m(B.allowed)==="object"&&(he=B.allowed);k.value=k.value.replace(he,"")});var K=document.createElement("div");K.classList.add(p.classes.button),K.classList.add(p.classes.elementHalf),K.classList.add(p.classes.backgroundSuccess),K.innerHTML=Ee,K.onclick=function(){U($,se),J(),xe?xe(k.value):I&&I(k.value)};var ke=document.createElement("div");ke.classList.add(p.classes.button),ke.classList.add(p.classes.elementHalf),ke.classList.add(p.classes.backgroundError),ke.innerHTML=Ie,ke.onclick=function(){U($,se),J(),Q?Q(k.value):H&&H(k.value)},E.appendChild(V),E.appendChild(k),E.appendChild(K),E.appendChild(ke),E.listener=function(he){C(he)?K.click():z(he)&&ke.click()},P(E,se),k.focus(),F(E,se)};f.input=ce;var ue=f.select=function(v,I){var H=v.text,ae=v.cancelText,G=ae===void 0?"Cancel":ae,Ee=v.cancelCallback,ye=v.choices,Ie=v.position,xe=Ie===void 0?p.positions.select||xe.top:Ie;R(),X();var Q=document.createElement("div"),oe=T();Q.id=oe;var se=document.createElement("div");se.classList.add(p.classes.textbox),se.classList.add(p.classes.backgroundInfo),se.innerHTML='<div class="'+p.classes.textboxInner+'">'+H+"</div>",Q.appendChild(se),ye.forEach(function(E,$){var V=E.type,k=V===void 0?1:V,K=E.text,ke=E.handler,he=document.createElement("div");he.classList.add(_[k]),he.classList.add(p.classes.button),he.classList.add(p.classes.selectChoice);var de=ye[$+1];de&&!de.type&&(de.type=1),de&&de.type===k&&he.classList.add(p.classes.selectChoiceRepeated),he.innerHTML=K,he.onclick=function(){U(oe,xe),J(),ke()},Q.appendChild(he)});var B=document.createElement("div");B.classList.add(p.classes.backgroundNeutral),B.classList.add(p.classes.button),B.innerHTML=G,B.onclick=function(){U(oe,xe),J(),Ee?Ee():I&&I()},Q.appendChild(B),Q.listener=function(E){z(E)&&B.click()},P(Q,xe),F(Q,xe)},pe=f.date=function(v,I,H){var ae=v.value,G=ae===void 0?new Date:ae,Ee=v.submitText,ye=Ee===void 0?"OK":Ee,Ie=v.cancelText,xe=Ie===void 0?"Cancel":Ie,Q=v.submitCallback,oe=v.cancelCallback,se=v.position,B=se===void 0?p.positions.date||B.top:se;R(),X();var E="&#9662",$=document.createElement("div"),V=document.createElement("div"),k=document.createElement("div"),K=function(Te){$.innerHTML=p.dateMonths[Te.getMonth()],V.innerHTML=Te.getDate(),k.innerHTML=Te.getFullYear()},ke=function(Te){var pt=new Date(G.getFullYear(),G.getMonth()+1,0).getDate(),pn=Te.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(pn)>pt&&(pn=pt.toString()),Te.target.textContent=pn,Number(pn)<1&&(pn="1"),G.setDate(Number(pn))},he=function(Te){var pt=Te.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Te.target.textContent=pt,G.setFullYear(Number(pt))},de=function(Te){K(G)},mt=function(Te){var pt=new Date(G.getFullYear(),G.getMonth()+Te+1,0).getDate();G.getDate()>pt&&G.setDate(pt),G.setMonth(G.getMonth()+Te),K(G)},Tt=function(Te){G.setDate(G.getDate()+Te),K(G)},wi=function(Te){var pt=G.getFullYear()+Te;pt<0?G.setFullYear(0):G.setFullYear(G.getFullYear()+Te),K(G)},qt=document.createElement("div"),Va=T();qt.id=Va;var Ka=document.createElement("div");Ka.classList.add(p.classes.backgroundInfo);var st=document.createElement("div");st.classList.add(p.classes.dateSelectorInner);var fn=document.createElement("div");fn.classList.add(p.classes.button),fn.classList.add(p.classes.elementThird),fn.classList.add(p.classes.dateSelectorUp),fn.innerHTML=E;var dn=document.createElement("div");dn.classList.add(p.classes.button),dn.classList.add(p.classes.elementThird),dn.classList.add(p.classes.dateSelectorUp),dn.innerHTML=E;var mn=document.createElement("div");mn.classList.add(p.classes.button),mn.classList.add(p.classes.elementThird),mn.classList.add(p.classes.dateSelectorUp),mn.innerHTML=E,$.classList.add(p.classes.element),$.classList.add(p.classes.elementThird),$.innerHTML=p.dateMonths[G.getMonth()],V.classList.add(p.classes.element),V.classList.add(p.classes.elementThird),V.setAttribute("contentEditable",!0),V.addEventListener("input",ke),V.addEventListener("blur",de),V.innerHTML=G.getDate(),k.classList.add(p.classes.element),k.classList.add(p.classes.elementThird),k.setAttribute("contentEditable",!0),k.addEventListener("input",he),k.addEventListener("blur",de),k.innerHTML=G.getFullYear();var Hn=document.createElement("div");Hn.classList.add(p.classes.button),Hn.classList.add(p.classes.elementThird),Hn.innerHTML=E;var Bn=document.createElement("div");Bn.classList.add(p.classes.button),Bn.classList.add(p.classes.elementThird),Bn.innerHTML=E;var $n=document.createElement("div");$n.classList.add(p.classes.button),$n.classList.add(p.classes.elementThird),$n.innerHTML=E,fn.onclick=function(){return mt(1)},dn.onclick=function(){return Tt(1)},mn.onclick=function(){return wi(1)},Hn.onclick=function(){return mt(-1)},Bn.onclick=function(){return Tt(-1)},$n.onclick=function(){return wi(-1)};var Vt=document.createElement("div");Vt.classList.add(p.classes.button),Vt.classList.add(p.classes.elementHalf),Vt.classList.add(p.classes.backgroundSuccess),Vt.innerHTML=ye,Vt.onclick=function(){U(Va,B),J(),Q?Q(G):I&&I(G)};var Kt=document.createElement("div");Kt.classList.add(p.classes.button),Kt.classList.add(p.classes.elementHalf),Kt.classList.add(p.classes.backgroundError),Kt.innerHTML=xe,Kt.onclick=function(){U(Va,B),J(),oe?oe(G):H&&H(G)},st.appendChild(fn),st.appendChild(dn),st.appendChild(mn),st.appendChild($),st.appendChild(V),st.appendChild(k),st.appendChild(Hn),st.appendChild(Bn),st.appendChild($n),Ka.appendChild(st),qt.appendChild(Ka),qt.appendChild(Vt),qt.appendChild(Kt),qt.listener=function(Te){C(Te)?Vt.click():z(Te)&&Kt.click()},P(qt,B),F(qt,B)};f.default={alert:Re,force:Je,confirm:Se,input:ce,select:ue,date:pe,setOptions:h,hideAlerts:X}}])})}).call(r,a(0)(n))}])})}),Xm=Jm(Ym()),{default:Rc,...Qm}=Xm,os=Rc!==void 0?Rc:Qm;var fx=Symbol("clean");var dx=Symbol();function ss(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=ss(e[r],t);return n}}function Nc(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,a,o){let i=e(r,a,...o);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,a){return e(n,r,...a)}}}}var vx=Nc((e,t,n)=>ss(t,r=>{for(let a in n)r=r.replace(new RegExp(`{${a}}`,"g"),n[a]);return r})),Sx=Nc((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),ss(t[r],a=>a.replace(/{count}/g,n))});var is=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function ls(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function $c(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function Uc(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function tp(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,o=0;o<n.length;o++)r.indexOf(n[o])===-1&&(a=!1);return a}var ir={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":is?173:189,"=":is?61:187,";":is?59:186,"'":222,"[":219,"]":221,"\\":220},yt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},gs={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Ne={16:!1,18:!1,17:!1,91:!1},_e={};for(sr=1;sr<20;sr++)ir["f".concat(sr)]=111+sr;var sr,me=[],Ic=!1,jc="all",Wc=[],ia=function(e){return ir[e.toLowerCase()]||yt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},np=function(e){return Object.keys(ir).find(function(t){return ir[t]===e})},rp=function(e){return Object.keys(yt).find(function(t){return yt[t]===e})};function zc(e){jc=e||"all"}function lr(){return jc||"all"}function ap(){return me.slice(0)}function op(){return me.map(function(e){return np(e)||rp(e)||String.fromCharCode(e)})}function sp(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function ip(e){return typeof e=="string"&&(e=ia(e)),me.indexOf(e)!==-1}function lp(e,t){var n,r;e||(e=lr());for(var a in _e)if(Object.prototype.hasOwnProperty.call(_e,a))for(n=_e[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;lr()===e&&zc(t||"all")}function cp(e){var t=e.keyCode||e.which||e.charCode,n=me.indexOf(t);if(n>=0&&me.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&me.splice(0,me.length),(t===93||t===224)&&(t=91),t in Ne){Ne[t]=!1;for(var r in yt)yt[r]===t&&(at[r]=!1)}}function up(e){if(typeof e>"u")Object.keys(_e).forEach(function(i){return delete _e[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&cs(i)});else if(typeof e=="object")e.key&&cs(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],o=n[1];typeof a=="function"&&(o=a,a=""),cs({key:e,scope:a,method:o,splitKey:"+"})}}var cs=function(e){var t=e.key,n=e.scope,r=e.method,a=e.splitKey,o=a===void 0?"+":a,i=Uc(t);i.forEach(function(s){var l=s.split(o),u=l.length,c=l[u-1],f=c==="*"?"*":ia(c);if(_e[f]){n||(n=lr());var d=u>1?$c(yt,l):[];_e[f]=_e[f].filter(function(g){var m=r?g.method===r:!0;return!(m&&g.scope===n&&tp(g.mods,d))})}})};function Fc(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var o in Ne)Object.prototype.hasOwnProperty.call(Ne,o)&&(!Ne[o]&&t.mods.indexOf(+o)>-1||Ne[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!Ne[16]&&!Ne[18]&&!Ne[17]&&!Ne[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Hc(e,t){var n=_e["*"],r=e.keyCode||e.which||e.charCode;if(at.filter.call(this,e)){if((r===93||r===224)&&(r=91),me.indexOf(r)===-1&&r!==229&&me.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(m){var b=gs[m];e[m]&&me.indexOf(b)===-1?me.push(b):!e[m]&&me.indexOf(b)>-1?me.splice(me.indexOf(b),1):m==="metaKey"&&e[m]&&me.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(me=me.slice(me.indexOf(b))))}),r in Ne){Ne[r]=!0;for(var a in yt)yt[a]===r&&(at[a]=!0);if(!n)return}for(var o in Ne)Object.prototype.hasOwnProperty.call(Ne,o)&&(Ne[o]=e[gs[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(me.indexOf(17)===-1&&me.push(17),me.indexOf(18)===-1&&me.push(18),Ne[17]=!0,Ne[18]=!0);var i=lr();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&Fc(e,n[s],i,t);if(r in _e){for(var l=0;l<_e[r].length;l++)if((e.type==="keydown"&&_e[r][l].keydown||e.type==="keyup"&&_e[r][l].keyup)&&_e[r][l].key){for(var u=_e[r][l],c=u.splitKey,f=u.key.split(c),d=[],g=0;g<f.length;g++)d.push(ia(f[g]));d.sort().join("")===me.sort().join("")&&Fc(e,u,i,t)}}}}function gp(e){return Wc.indexOf(e)>-1}function at(e,t,n){me=[];var r=Uc(e),a=[],o="all",i=document,s=0,l=!1,u=!0,c="+",f=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(i=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(f=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(o=t);s<r.length;s++)e=r[s].split(c),a=[],e.length>1&&(a=$c(yt,e)),e=e[e.length-1],e=e==="*"?"*":ia(e),e in _e||(_e[e]=[]),_e[e].push({keyup:l,keydown:u,scope:o,mods:a,shortcut:r[s],method:n,key:r[s],splitKey:c,element:i});typeof i<"u"&&!gp(i)&&window&&(Wc.push(i),ls(i,"keydown",function(d){Hc(d,i)},f),Ic||(Ic=!0,ls(window,"focus",function(){me=[]},f)),ls(i,"keyup",function(d){Hc(d,i),cp(d)},f))}function fp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(_e).forEach(function(n){var r=_e[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var us={getPressedKeyString:op,setScope:zc,getScope:lr,deleteScope:lp,getPressedKeyCodes:ap,isPressed:ip,filter:sp,trigger:fp,unbind:up,keyMap:ir,modifier:yt,modifierMap:gs};for(sa in us)Object.prototype.hasOwnProperty.call(us,sa)&&(at[sa]=us[sa]);var sa;typeof document<"u"&&(Bc=window.hotkeys,at.noConflict=function(e){return e&&window.hotkeys===at&&(window.hotkeys=Bc),at},window.hotkeys=at);var Bc;var Bx=os.alert;var fs=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),a=tt.green;r>1e4?a=tt.red:r>1e3&&(a=tt.yellow),console.debug(tt.dim(Jt+" TIMING:"),t,"in",a(r+"ms")),this.#e=n}},cr=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(tt.dim(Jt+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(tt.green(Jt+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(tt.yellow(Jt+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(tt.red(Jt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(tt.red(Jt+" FATAL:"),...t)}timing(){return this.level===0?new fs:{reset:()=>{},stop:()=>{}}}},O=new cr;var Fe=class extends Error{constructor(n,r,a){super(r);this.name=n,a&&(this.details=a)}};async function qc(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let o=await(e.fetchPolyfill||fetch)(t,r);if(o.ok&&o.status>=200&&o.status<400){if(n==="json")return await o.json();if(n==="text")return await o.text();if(n==="raw"){let i=await o.text(),s=Object.fromEntries([...o.headers.entries()]),l=o.url;return l||(o.headers.get("X-Final-URL")?l=o.headers.get("X-Final-URL"):l=t),{body:i,headers:s,status:o.status,statusText:o.statusText,url:l}}}else{let i;try{i=await o.text()}catch(s){O.error("parse response failed",s)}throw new Fe("fetchError",o.status+": "+o.statusText||"",i)}}function Nt(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function dp(e,t){return e<<t|e>>>32-t}function ca(e,t,n,r,a,o){return Nt(dp(Nt(Nt(t,e),Nt(r,o)),a),n)}function He(e,t,n,r,a,o,i){return ca(t&n|~t&r,e,t,a,o,i)}function Be(e,t,n,r,a,o,i){return ca(t&r|n&~r,e,t,a,o,i)}function $e(e,t,n,r,a,o,i){return ca(t^n^r,e,t,a,o,i)}function Ue(e,t,n,r,a,o,i){return ca(n^(t|~r),e,t,a,o,i)}function la(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,a,o,i,s=1732584193,l=-271733879,u=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)r=s,a=l,o=u,i=c,s=He(s,l,u,c,e[n],7,-680876936),c=He(c,s,l,u,e[n+1],12,-389564586),u=He(u,c,s,l,e[n+2],17,606105819),l=He(l,u,c,s,e[n+3],22,-1044525330),s=He(s,l,u,c,e[n+4],7,-176418897),c=He(c,s,l,u,e[n+5],12,1200080426),u=He(u,c,s,l,e[n+6],17,-1473231341),l=He(l,u,c,s,e[n+7],22,-45705983),s=He(s,l,u,c,e[n+8],7,1770035416),c=He(c,s,l,u,e[n+9],12,-1958414417),u=He(u,c,s,l,e[n+10],17,-42063),l=He(l,u,c,s,e[n+11],22,-1990404162),s=He(s,l,u,c,e[n+12],7,1804603682),c=He(c,s,l,u,e[n+13],12,-40341101),u=He(u,c,s,l,e[n+14],17,-1502002290),l=He(l,u,c,s,e[n+15],22,1236535329),s=Be(s,l,u,c,e[n+1],5,-165796510),c=Be(c,s,l,u,e[n+6],9,-1069501632),u=Be(u,c,s,l,e[n+11],14,643717713),l=Be(l,u,c,s,e[n],20,-373897302),s=Be(s,l,u,c,e[n+5],5,-701558691),c=Be(c,s,l,u,e[n+10],9,38016083),u=Be(u,c,s,l,e[n+15],14,-660478335),l=Be(l,u,c,s,e[n+4],20,-405537848),s=Be(s,l,u,c,e[n+9],5,568446438),c=Be(c,s,l,u,e[n+14],9,-1019803690),u=Be(u,c,s,l,e[n+3],14,-187363961),l=Be(l,u,c,s,e[n+8],20,1163531501),s=Be(s,l,u,c,e[n+13],5,-1444681467),c=Be(c,s,l,u,e[n+2],9,-51403784),u=Be(u,c,s,l,e[n+7],14,1735328473),l=Be(l,u,c,s,e[n+12],20,-1926607734),s=$e(s,l,u,c,e[n+5],4,-378558),c=$e(c,s,l,u,e[n+8],11,-2022574463),u=$e(u,c,s,l,e[n+11],16,1839030562),l=$e(l,u,c,s,e[n+14],23,-35309556),s=$e(s,l,u,c,e[n+1],4,-1530992060),c=$e(c,s,l,u,e[n+4],11,1272893353),u=$e(u,c,s,l,e[n+7],16,-155497632),l=$e(l,u,c,s,e[n+10],23,-1094730640),s=$e(s,l,u,c,e[n+13],4,681279174),c=$e(c,s,l,u,e[n],11,-358537222),u=$e(u,c,s,l,e[n+3],16,-722521979),l=$e(l,u,c,s,e[n+6],23,76029189),s=$e(s,l,u,c,e[n+9],4,-640364487),c=$e(c,s,l,u,e[n+12],11,-421815835),u=$e(u,c,s,l,e[n+15],16,530742520),l=$e(l,u,c,s,e[n+2],23,-995338651),s=Ue(s,l,u,c,e[n],6,-198630844),c=Ue(c,s,l,u,e[n+7],10,1126891415),u=Ue(u,c,s,l,e[n+14],15,-1416354905),l=Ue(l,u,c,s,e[n+5],21,-57434055),s=Ue(s,l,u,c,e[n+12],6,1700485571),c=Ue(c,s,l,u,e[n+3],10,-1894986606),u=Ue(u,c,s,l,e[n+10],15,-1051523),l=Ue(l,u,c,s,e[n+1],21,-2054922799),s=Ue(s,l,u,c,e[n+8],6,1873313359),c=Ue(c,s,l,u,e[n+15],10,-30611744),u=Ue(u,c,s,l,e[n+6],15,-1560198380),l=Ue(l,u,c,s,e[n+13],21,1309151649),s=Ue(s,l,u,c,e[n+4],6,-145523070),c=Ue(c,s,l,u,e[n+11],10,-1120210379),u=Ue(u,c,s,l,e[n+2],15,718787259),l=Ue(l,u,c,s,e[n+9],21,-343485551),s=Nt(s,r),l=Nt(l,a),u=Nt(u,o),c=Nt(c,i);return[s,l,u,c]}function Vc(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function ds(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function mp(e){return Vc(la(ds(e),e.length*8))}function pp(e,t){var n,r=ds(e),a=[],o=[],i;for(a[15]=o[15]=void 0,r.length>16&&(r=la(r,e.length*8)),n=0;n<16;n+=1)a[n]=r[n]^909522486,o[n]=r[n]^1549556828;return i=la(a.concat(ds(t)),512+t.length*8),Vc(la(o.concat(i),512+128))}function Kc(e){var t="0123456789abcdef",n="",r,a;for(a=0;a<e.length;a+=1)r=e.charCodeAt(a),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function ms(e){return unescape(encodeURIComponent(e))}function Gc(e){return mp(ms(e))}function hp(e){return Kc(Gc(e))}function Jc(e,t){return pp(ms(e),ms(t))}function bp(e,t){return Kc(Jc(e,t))}function _n(e,t,n){return t?n?Jc(t,e):bp(t,e):n?Gc(e):hp(e)}function Yc(e,t,n){let r=yp(e,t),a=[],o={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(o.tempSentences.reduce((l,u)=>l+u.text.length,0)+i.text.length>t||o.tempSentences.length>=n)&&(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(o.from!==i.from||o.to!==i.to)&&(o.tempSentences.length>0?(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(o.from=i.from,o.to=i.to)),o.tempSentences.push(i);return o.tempSentences.length>0&&a.push(o),a}function yp(e,t){let n=[];for(let r=0;r<e.length;r++){let a=e[r],{from:o,to:i,text:s,url:l}=a,u=s.split(/\r?\n/),c=[],f="";for(let d=0;d<u.length;d++){let g=u[d];if(g===""){c.length>0?d<u.length-1&&(c[c.length-1].suffix+=`
`):f+=`
`;continue}else if(g.length>t){let m=[];ps(g,t,m);for(let b=0;b<m.length;b++){let x=m[b],{text:p,prefix:h,suffix:w}=x;c.push({from:o,to:i,text:p,prefix:h,suffix:w,index:r,url:l})}}else c.push({text:g,prefix:f,suffix:"",from:o,to:i,index:r,url:l});c.length>0&&d<u.length-1&&(c[c.length-1].suffix+=`
`)}n.push(...c)}return n}function ur(e,t){let n=tn(e),r=tn(t),a=n===r;return a?!0:(a=n.startsWith("zh")&&r.startsWith("zh"),a)}function ps(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((o,i)=>{let s=e.lastIndexOf(i,t);return s>o?s:o},-1);if(a===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&ps(e.slice(t),t,n);else{let o=e.slice(0,a+1);o.startsWith(" ")?n.push({text:o.slice(1),prefix:" ",suffix:""}):n.push({text:o,prefix:"",suffix:""}),a+1<e.length&&ps(e.slice(a+1),t,n)}return n}var Cn=[];async function ua(e,t){return await new Promise((n,r)=>{let a=e,o=1,i=indexedDB.open(a,o);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let l=i.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function Xc(e){let t=`${be}-${e.service}@${e.from}->${e.to}`;return await Tp(t,e)}async function Qc(e){let t=_n(e.originalText),n=`${be}-${e.service}@${e.from}->${e.to}`;return await xp(n,t)}async function xp(e,t){let n=await ua(e);return await new Promise((r,a)=>{if(!n)return a();let o="cache",s=n.transaction([o],"readonly").objectStore(o).get(t);s.onsuccess=l=>{n.close();let u=s.result;r(u)},s.onerror=l=>{n.close(),console.error("queryInDB->onerror:",l),a()}})}async function Tp(e,t){let n=await ua(e);return(await vp()).includes(e)||await wp(e),await new Promise(a=>{if(!n)return a(!1);let o="cache",s=n.transaction([o],"readwrite").objectStore(o).put(t);s.onsuccess=l=>{n.close(),a(!0)},s.onerror=l=>{console.error("addInDB->onerror:",l),n.close(),a(!1)}})}async function wp(e){let t="cache_list",n=await ua(be+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=o=>{n.close(),Cn.push(e)},a.onerror=o=>{n.close(),console.error(o)}}async function vp(){if(Cn&&Cn.length>0)return Cn;let e=await ua(be+"-cacheList","cache_list");return Cn=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=o=>{e.close(),t(a.result)},a.onerror=o=>{e.close(),console.error(o),t([])}}),Cn}var Sp=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Ep=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,_p=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,Cp=/(\s+)|([\p{P}\p{S}])/gu,Lp=[["zh-CN",Sp],["ja",Ep],["ko",_p]];function Zc(e){if(!e)return"auto";let t="auto",n=0,r=0,a=e.match(Cp);a&&(r=a.reduce((i,s)=>i+s.length,0));let o=e.length-r;for(let i of Lp){let s=i[1],l=i[0],u=e.match(s),c=u?u.length:0;c>n&&(n=c,t=l)}return n*2.5/o>.5?t:"auto"}var tu="auto",ga="auto",eu="auto";function nu(e){tu=e}function It(e){ga=e}function Ft(){return ga!=="auto"?ga:eu!=="auto"?eu:tu}function fa(){return ga}var gr=new Map,Ln=class{constructor(t,n=!1){this.logger=new cr,n&&this.logger.setLevel("debug"),this.fromType=t,gr.has(t)||(gr.set(t,new Map),Y.runtime.onMessage.addListener((r,a,o)=>{let i=r.from,s=r.to,l,u,c;a.tab&&a.tab.id&&(l=a.tab.id,i=`${i}:${l}`,u=a.tab.url,c=a.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let f=bs(s),{type:d,name:g}=f;if(d!==t)return!1;let m=bs(i),x=gr.get(d).get(g);if(!x)return this.logger.debug(`no message handler for ${d}:${s}, but it's ok`),!1;let{messageHandler:p,sync:h}=x,w={type:t,name:m.name,id:l,url:u,active:c};if(h){try{let S=p(r.payload,w);o({ok:!0,data:S})}catch(S){o({ok:!1,errorName:S.name,errorMessage:S.message,errorDetails:S.details})}return!1}else return p(r.payload,w).then(S=>{o({ok:!0,data:S})}).catch(S=>{o({ok:!1,errorName:S.name,errorMessage:S.message,errorDetails:S.details})}),!0}))}getConnection(t,n,r){let a=!1;r&&r.sync&&(a=!0);let o=this.fromType,i=gr.get(o);if(i.has(t))return i.get(t).connectionInstance;{let s=new hs(`${o}:${t}`,this.logger);return gr.get(o).set(t,{messageHandler:n,sync:a,connectionInstance:s}),s}}},hs=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=bs(t),{type:a,id:o}=r;if(a!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await Y.runtime.sendMessage(i);return ru(i,s,this.logger)}catch(s){if(a==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(l,n,t,s),Promise.resolve({message:l})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await Y.tabs.sendMessage(o,i);return ru(i,s,this.logger)}}};function ru(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Fe(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function bs(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var rn=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await ys():n==="translateTheMainPage"?await ba():n==="translateToThePageEndImmediately"?await iu():n==="toggleTranslatePage"?await ha():n==="toggleTranslateTheWholePage"?await su():n==="toggleTranslateTheMainPage"?await ou():n==="translatePage"?await Bt():n==="restorePage"?Ht():n==="showTranslationOnly"?void 0:n==="setCurrentPageLanguageByClient"&&It(r)},Ap=function(e,t){let{method:n,data:r}=e;if(O.debug(`content script received sync message: ${n}`,r||" "),n==="ping")return"pong";if(n==="getPageStatus")return Qe();if(n==="getCurrentPageLanguage")return Ft()},da,ma;function au(){let e=pa();yn()||kp(),e.sendMessage("popup:main_sync",{method:"ready"}).catch(n=>{})}function pa(){return da||(da=new Ln("content_script",!1).getConnection("main",rn),da)}function kp(){return ma||(ma=new Ln("content_script",!1).getConnection("main_sync",Ap,{sync:!0}),ma)}async function lt(e){return await pa().sendMessage("background:main",e)}function ee(e){return fe()||Ii()?(e.fetchPolyfill=globalThis.GM_fetch,qc(e)):lt({method:"fetch",data:e})}function Ge(){return fe()?Xn():lt({method:"getConfig"})}function lu(){return fe()?Jn():lt({method:"getLocalConfig"})}function ya(e){return fe()?Yn(e):lt({method:"setLocalConfig",data:e})}function cu(e){return fe()?ul(e):lt({method:"setBuildinConfig",data:e})}function ot(e){if(e.text){let t=Zc(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(fe()){let t=Y.extra.detectLanguage(e.text);return Promise.resolve(t)}return lt({method:"detectLanguage",data:e})}function uu(){return lt({method:"detectTabLanguage"})}function gu(e){if(fe()){let n=new CustomEvent(Ar,{detail:e});document.dispatchEvent(n);return}pa().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function fu(e){return fe()?Qc(e):lt({method:"queryParagraphCache",data:e})}async function du(e){if(fe()){await Xc(e);return}return lt({method:"setParagraphCache",data:e})}async function xs(){if(fe())return Promise.resolve();await lt({method:"mockRequest"})}function xa(){return fe()?(Y.runtime.openOptionsPage(),Promise.resolve()):lt({method:"openOptionsPage"})}async function mu(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await ot({text:en(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=tn(document.documentElement.lang)),e}function Ts(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,a=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let l=e.matches(s),u=[];l?u=[e]:u=e.querySelectorAll(s);for(let c of u)ne(c,Yt)||ie(c,Yt,"1");return Array.from(u)}).flat();a.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let f=Ve(e,n.additionalSelectors);for(let d of f)ne(d,Yt)||ie(d,Yt,"1");a.push(...f.map(d=>({element:d,reserve:!0})))}let i=Ve(e,["article"]);a.push(...i.map(f=>({element:f,reserve:!0})));let s;if(a.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let f=Array.from(s);a=a.concat(f.map(d=>({element:d,reserve:!0})))}let l=[],u=f=>{if(f.nodeType===Node.ELEMENT_NODE&&Ke(f,t.rule,!1))return NodeFilter.FILTER_REJECT;if(f.nodeType===Node.TEXT_NODE&&(f.textContent?f.textContent.trim():"").length>=n.containerMinTextCount){let g=f.parentNode;g&&g.parentNode&&(g=g.parentNode),g&&g.nodeType===Node.ELEMENT_NODE&&(l.includes(g)||l.push(g))}return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;c.nextNode(););a.push(...l.map(f=>({element:f,reserve:!1})))}let o=Fi(e,a,n);return o.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),o}var ws=[];function pu(e){ws.push(e)}function vs(){ws.forEach(e=>e()),ws=[]}function ct(e,t,n,r){let a=[],{rule:o}=r,i=Gn(r);if(e.length===0)return null;e=e.map(g=>g.element?g:{element:g});let s="",l=!1;for(let g=0;g<e.length;g++){let b=e[g].element;if(typeof b=="string"){s+=b;continue}let x="";Fr(b,`[${et}]`)?x=Mp(b):x=b.innerText;let p=x.startsWith(" "),h=x.endsWith(" ");b.tagName==="A"&&(p=!0,h=!0);let w=Tn(b,o);if(x===""||w){w&&(p=!0,h=!0);let S={type:"element",value:b};a.push(S);let R=a.length-1,T=`${i[0]}${R}${i[1]}`;s+=(p?" ":"")+T+(h?" ":"");continue}if(!Ke(b,o,!0)){{let S=t?x:x.trim().replace(/\n/g," ");if(oo(S)||so(S)||io(S)||ji(S)){let R={type:"element",value:b};a.push(R);let T=a.length-1,_=`${i[0]}${T}${i[1]}`;s+=(p?" ":"")+_+(h?" ":"")}else l=!0,s+=(p?" ":"")+S+(h?" ":"")}if(typeof b!="string"){let S=Kn(b.nextSibling,t);S&&(s+=S)}}}if(!l)return null;let u=!1,c=s.split(" ").length,f=s.split(`
`).length;c<=o.blockMinWordCount&&s.length<=o.blockMinTextCount&&f<2&&(u=!0);let d={rootFrame:n,elements:e.map(g=>g.element),text:s,variables:a,inline:u,preWhitespace:t};return $i(d,r.state.translationArea==="body"?2:o.paragraphMinTextCount,r.state.translationArea==="body"?1:o.paragraphMinWordCount,r)?d:null}function Mp(e){let t="",n=a=>a.nodeType===Node.ELEMENT_NODE?ne(a,et)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(t+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var Pp=1,an=new Map;function yu(){return an}function $t(e){return an.get(e)}function fr(e,t){an.set(e,t)}function xu(){an.clear()}function hu(e){if(!ne(e,Xt))return!1;if(ne(e,hn))return!0;let t=Mt(e,Qt);if(!t)return!1;let n=parseInt(t),r=an.has(n);if(!r){let a=document.getElementById(`${Ye}-${n}`);a&&a.remove()}return r}function _t(e,t){let n={...e,id:Pp++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(ie(r,Xt,"1"),ie(r,Qt,`${n.id}`))}),t.push(n),an.set(n.id,{...n,state:"Original",observers:[]})}async function Tu(e,t,n){let r=[],{targetLanguage:a,rule:o}=n;for(let d of t){if(Ke(d,o,!1))continue;let g=ne(d,bn),m=[];if(ne(d,Ze)){if(!hu(d)){let h=ct([d],!0,e,n);h&&_t(h,r)}continue}let b=h=>{if(!(h.nodeType===Node.TEXT_NODE||h.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(h.nodeType===Node.ELEMENT_NODE){let w=h;if(w.isContentEditable||hu(h))return NodeFilter.FILTER_REJECT;if(ie(w,Xt,"1"),ne(w,Ze)){if(m.length>0){let R=ct([...m],g,e,n);R&&_t(R,r),m.length=0}m.push(w);let S=ct([...m],g,e,n);return S&&_t(S,r),m.length=0,NodeFilter.FILTER_REJECT}}if(Ke(h,o,!0)){if((h.nodeName==="CODE"||h.nodeName==="TT")&&h.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(it(h,o))return bu(h,m,r,g,e,n),NodeFilter.FILTER_REJECT;if(m.length>0){let w=ct([...m],g,e,n);w&&_t(w,r),m.length=0}return NodeFilter.FILTER_REJECT}return h.nodeName==="PRE"?(h.classList.contains("code"),NodeFilter.FILTER_REJECT):it(h,o)?(bu(h,m,r,g,e,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},x=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,b),p=x.nextNode();for(;p;){if(m.length>0){let h=ct([...m],g,e,n);h&&_t(h,r),m.length=0}p=x.nextNode()}if(m.length>0){let h=ct([...m],g,e,n);h&&_t(h,r),m.length=0}}let i=r.map(d=>{let{text:g}=d;return ot({text:g})}),s=await Promise.all(i),l=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],c="auto";n.state.isDetectParagraphLanguage||(c=fa());let f=Ft();return s.forEach((d,g)=>{let m=d;m==="auto"&&(m=f);let b={...r[g],languageByLocal:m,languageByClient:c};if(an.set(b.id,{...b,state:"Original",observers:[]}),!ur(d,a)){if(u.length>0&&u.some(h=>ur(d,h)))return;l.push(b)}}),l}function Rp(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,o=!1;for(;a=r.nextNode();){let s=a.textContent||"",l=s.trim();if(!o&&s.length>0&&l.length===0){o=!0,n.push(" ");continue}l.length>0&&(n.push(a.parentElement),o=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=Kn(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=Kn(e.nextSibling,t);s&&n.push(s)}return n}function bu(e,t,n,r,a,o){let i=e.previousElementSibling;if(i&&!it(i,o.rule)&&t.length>0){let l=ct([...t],r,a,o);l&&_t(l,n),t.length=0}Ke(e,o.rule,!1)?Bi(e,o.rule)||t.push(e):Tn(e,o.rule)?t.push(e):Fr(e,["code","tt"])?t.push(...Rp(e,r)):t.push(e)}async function Eu(e,t,n,r){let a=[],{rule:o}=n;for(let i=0;i<t.length;i++){let s=t[i],l=r[i];if(!l)throw new Error("targetContainer is null");let u=[],c=!0,f=null,d=function(b){let x=b;if(["DIV","BR"].includes(x.nodeName))return c=!0,NodeFilter.FILTER_REJECT;if(x.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(Op(b))return NodeFilter.FILTER_REJECT;if(ie(x,Xt,"1"),it(x,o)){let p=xn(u),h=globalThis.getComputedStyle(x);if(!p)u.push(Su(x,h));else{let w=globalThis.getComputedStyle(p),S=Ss(w),R=Ss(h),T=vu(R,S),_=!1;if(c&&f&&vu(R,f).left>=1.2&&(_=!0),!_&&c){let C=(x.innerText||x.textContent||"").trim();(C.startsWith("\u2022")||C.charCodeAt(0)===61623||/^\d+\./.test(C))&&(_=!0)}!_&&c&&xn(u)&&Nr(u).reduce((P,U)=>{let F=Ss(globalThis.getComputedStyle(U));return Math.max(P,F.right)},0)-S.right>o.pdfNewParagraphIndentRightIndentPx&&(_=!0),c&&(f=R,c=!1),_||(_=Dp(T,o)),_&&wu(u,a,e,n,l),u.push(Su(x,h)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},g=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,d),m=g.nextNode();for(;m;)m=g.nextNode();wu(u,a,e,n,l)}return a}function wu(e,t,n,r,a){if(e.length>0){let o=ct([...e],!1,n,r);o&&(o.isPdf=!0,o.targetContainer=a,o.inline=!1,_t(o,t)),e.length=0}}function Ss(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function Dp(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<0}function vu(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Su(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function Op(e){if(!ne(e,Xt))return!1;if(ne(e,hn))return!0;let t=Mt(e,Qt);if(!t)return!1;let n=parseInt(t),a=yu().has(n);if(!a){let o=document.getElementById(`${Ye}-${n}`);o&&o.remove()}return a}function _u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Np(e,t,n=[],r,a){let o=["notranslate"];return r&&o.push(Oi),e&&(o.push(`${be}-target-translation-theme-${e}`),t?o.push(`${no}-theme-${e}`):o.push(`${to}-theme-${e}`)),n.length>0&&o.push(...n),t?o.push(no):(o.push(to),a&&o.push(Di)),o}function Ip(e){let t=["notranslate",Ri];return e&&t.push(`${be}-target-translation-theme-${e}-inner`),t}function Cu(e,t,n){let{rule:r,translationTheme:a}=n,{variables:o}=e;o=o||[];let{text:i}=t,{wrapperPrefix:s,wrapperSuffix:l}=r,u=Gn(n),c="afterend",f=new RegExp(`${u[0]}(\\d+)${u[1]}`,"g"),d=0,g=_u(i);o.length>0&&(g=g.replace(f,p=>{let h=g.indexOf(p),w=g[h-1]===" ",S=g[h+p.length]===" ",R=o[Number(d)];if(d++,R.type==="element"){let T=R.value.outerHTML;return w||(T=" "+T),S||(T=T+" "),T}else O.error("variable type not supported",R);return p}));let m=Np(a,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf),b=Ip(a),x="";return r.translationBlockStyle&&(x=`style="${r.translationBlockStyle}"`),g=`<span ${x} class="${m.join(" ")}"><span class="${b.join(" ")}">${g}</span></span>`,e.inline||(s==="smart"?g=`<br>${g}`:g=`${s}${g}`,l==="smart"?g=`${g}`:g=`${g}${l}`),e.inline&&(g=`<span class="notranslate">&nbsp;</span>${g}`),{html:g,position:c}}function Au(e,t){let n=[];for(let r of e){if(ne(r,Ze))continue;if(ie(r,Ja,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let o=s=>s.nodeType===Node.ELEMENT_NODE&&Ke(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&_s(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,o);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let o=r.querySelectorAll("pre");for(let i of o)Lu(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(Wi(r,bn)||(Fp(r)?(ie(r,bn,"1"),t.isTransformPreTagNewLine&&Lu(r)):ie(r,bn,"0"))),Es(0,r,t,n)}return{hiddenElements:n}}function Es(e,t,n,r=[]){if(ne(t,Ze))return;let a=!1;if(e===0){let o=Tn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&it(t,n)&&!o&&(a=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let o of t.childNodes)if(o.nodeType===Node.ELEMENT_NODE){if(Ke(o,n,!1))continue;{let i=globalThis.getComputedStyle(o),s=!1;if(i.display==="none"&&(r.push(o),s=!0),!s){let l=i.clip,u=i.zIndex,c=i.height,f=i.width,d=0;if(u.startsWith("-")){let g=parseInt(u);isNaN(g)||(d=g)}if((l==="rect(1px, 1px, 1px, 1px)"||d<0)&&(s=!0),!s&&o.nodeName!=="BR"){let g=parseInt(c),m=parseInt(f);!isNaN(g)&&!isNaN(m)&&(g>0&&g<8||m>0&&m<=8)&&(s=!0)}}if(s){ie(o,et,"1");continue}else{if(o.nodeName==="DIV"||qi(o,n)){if((i.display==="inline"||i.display==="inline-flex")&&!ne(o,Zt)){ie(o,wt,"1");continue}}else if((o.nodeName==="SPAN"||o.nodeName==="A")&&!i.display.startsWith("inline")){ne(o,wt)||(ie(o,Zt,"1"),Es(e+1,o,n,r));continue}if(it(o,n)&&!a)continue;Es(e+1,o,n,r)}}}else if(o.nodeType===Node.TEXT_NODE){let i=o.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");o.after(s),s.appendChild(o)}}}}function Fp(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Lu(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function _s(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let l=n.lastIndexOf(s,t);return l>i?l:i},-1);if(o===-1)n.length>t+20&&_s(e,t+20);else{let i=n.slice(o+1);o++,i.startsWith(" ")&&o++;let s=e.splitText(o),l=document.createElement("br");s.parentNode?.insertBefore(l,s),o+1<n.length&&_s(s,t)}}function ku(e,t){let n=[];for(let r of e){let a=0,o=1e5,i=document.createElement("div"),s=c=>{let f=c;if(["DIV","BR"].includes(f.nodeName))return NodeFilter.FILTER_REJECT;if(f.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(f.nodeName==="SPAN"){let d=f.getBoundingClientRect(),g=globalThis.getComputedStyle(f),m=d.right,b=d.left,x=g.top.slice(0,-2),p=g.fontSize.slice(0,-2);return m>a&&(a=m),b<o&&(o=b),ie(f,zn,`${b}`),ie(f,Pr,`${m}`),ie(f,ki,x),ie(f,Mi,p),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;l.nextNode(););let u=a-o;u<600&&(u=600),n.push(i),i.style.left=a+"px",i.style.width=u+"px",i.classList.add(Dr),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var re=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,a=[],o=[],i=0,s=new Set,l=null,u=r[0].from,c=!1;r.some(d=>d.from!==u)&&(c=!0);try{o=Yc(r,this.maxTextLength,this.maxTextGroupLength)}catch(d){if(n){s.has(i)&&i++;for(let g=i;g<r.length;g++){let m=r[g];n(d,null,m)}l=d}else l=d}let f=ea({limit:this.throttleLimit,interval:1e3});O.debug("tempSentenceGroups",o.map(d=>d));for(let d=0;d<o.length;d++){let g=o[d],m=g.url,b=f(async()=>{let h=g.from;if(c&&(h="auto"),g.fromByClient!=="auto"&&(h=g.fromByClient),this.isSupportList)return await this.translateList({text:g.tempSentences.map(S=>S.text),from:h,to:g.to,url:m});{let w=g.tempSentences.map(_=>_.text).join(eo),S=await this.translate({text:w,from:h,to:g.to,url:m}),{text:R}=S;return{text:R.split(eo),from:S.from,to:S.to}}}),x;try{x=await b()}catch(h){if(n){s.has(i)&&i++;for(let w=i;w<r.length;w++){let S=r[w];n(h,null,S)}l=h;continue}else{l=h;continue}}let{text:p}=x;for(let h=0;h<p.length;h++)try{let w=p[h],S=g.tempSentences[h],{index:R,prefix:T,suffix:_}=S;a[R]===void 0?a[R]={...r[R],from:g.from,to:g.to,text:T+w+_}:a[R].text+=T+w+_,R!==i&&n&&(s.add(i),n(null,a[i],r[i])),i=R}catch(w){if(n){s.has(i)&&i++;for(let S=i;S<r.length;S++){let R=r[S];n(w,null,R)}throw w}else throw w}}if(n&&!s.has(i)&&a[i]&&r[i]&&n(null,a[i],r[i]),l)throw l;return{sentences:a}}detectLanguageLocally(t){return ot({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var An="input is invalid type",Cs=typeof window=="object",Ut=Cs?window:{};Ut.JS_SHA256_NO_WINDOW&&(Cs=!1);var Hp=!Cs&&typeof self=="object",Bp=!Ut.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Bp?Ut=global:Hp&&(Ut=self);var nv=!Ut.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,rv=typeof define=="function"&&define.amd,dr=!Ut.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",N="0123456789abcdef".split(""),$p=[-2147483648,8388608,32768,128],ut=[24,16,8,0],Ta=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],wa=["hex","array","digest","arrayBuffer"],Me=[];(Ut.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});dr&&(Ut.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Mu=function(e,t){return function(n){return new Pe(t,!0).update(n)[e]()}},Ru=function(e){var t=Mu("hex",e);t.create=function(){return new Pe(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<wa.length;++n){var r=wa[n];t[r]=Mu(r,e)}return t},Pu=function(e,t){return function(n,r){return new va(n,t,!0).update(r)[e]()}},Du=function(e){var t=Pu("hex",e);t.create=function(a){return new va(a,e)},t.update=function(a,o){return t.create(a).update(o)};for(var n=0;n<wa.length;++n){var r=wa[n];t[r]=Pu(r,e)}return t};function Pe(e,t){t?(Me[0]=Me[16]=Me[1]=Me[2]=Me[3]=Me[4]=Me[5]=Me[6]=Me[7]=Me[8]=Me[9]=Me[10]=Me[11]=Me[12]=Me[13]=Me[14]=Me[15]=0,this.blocks=Me):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Pe.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(An);if(dr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!dr||!ArrayBuffer.isView(e)))throw new Error(An)}else throw new Error(An);t=!0}for(var r,a=0,o,i=e.length,s=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(o=this.start;a<i&&o<64;++a)s[o>>2]|=e[a]<<ut[o++&3];else for(o=this.start;a<i&&o<64;++a)r=e.charCodeAt(a),r<128?s[o>>2]|=r<<ut[o++&3]:r<2048?(s[o>>2]|=(192|r>>6)<<ut[o++&3],s[o>>2]|=(128|r&63)<<ut[o++&3]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<ut[o++&3],s[o>>2]|=(128|r>>6&63)<<ut[o++&3],s[o>>2]|=(128|r&63)<<ut[o++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++a)&1023),s[o>>2]|=(240|r>>18)<<ut[o++&3],s[o>>2]|=(128|r>>12&63)<<ut[o++&3],s[o>>2]|=(128|r>>6&63)<<ut[o++&3],s[o>>2]|=(128|r&63)<<ut[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=s[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Pe.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=$p[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Pe.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=this.blocks,u,c,f,d,g,m,b,x,p,h,w;for(u=16;u<64;++u)g=l[u-15],c=(g>>>7|g<<25)^(g>>>18|g<<14)^g>>>3,g=l[u-2],f=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,l[u]=l[u-16]+c+l[u-7]+f<<0;for(w=t&n,u=0;u<64;u+=4)this.first?(this.is224?(x=300032,g=l[0]-1413257819,s=g-150054599<<0,r=g+24177077<<0):(x=704751109,g=l[0]-210244248,s=g-1521486534<<0,r=g+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),f=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),x=e&t,d=x^e&n^w,b=a&o^~a&i,g=s+f+b+Ta[u]+l[u],m=c+d,s=r+g<<0,r=g+m<<0),c=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),f=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),p=r&e,d=p^r&t^x,b=s&a^~s&o,g=i+f+b+Ta[u+1]+l[u+1],m=c+d,i=n+g<<0,n=g+m<<0,c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),f=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),h=n&r,d=h^n&e^p,b=i&s^~i&a,g=o+f+b+Ta[u+2]+l[u+2],m=c+d,o=t+g<<0,t=g+m<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),f=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),w=t&n,d=w^t&r^h,b=o&i^~o&s,g=a+f+b+Ta[u+3]+l[u+3],m=c+d,a=e+g<<0,e=g+m<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+a<<0,this.h5=this.h5+o<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};Pe.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=N[e>>28&15]+N[e>>24&15]+N[e>>20&15]+N[e>>16&15]+N[e>>12&15]+N[e>>8&15]+N[e>>4&15]+N[e&15]+N[t>>28&15]+N[t>>24&15]+N[t>>20&15]+N[t>>16&15]+N[t>>12&15]+N[t>>8&15]+N[t>>4&15]+N[t&15]+N[n>>28&15]+N[n>>24&15]+N[n>>20&15]+N[n>>16&15]+N[n>>12&15]+N[n>>8&15]+N[n>>4&15]+N[n&15]+N[r>>28&15]+N[r>>24&15]+N[r>>20&15]+N[r>>16&15]+N[r>>12&15]+N[r>>8&15]+N[r>>4&15]+N[r&15]+N[a>>28&15]+N[a>>24&15]+N[a>>20&15]+N[a>>16&15]+N[a>>12&15]+N[a>>8&15]+N[a>>4&15]+N[a&15]+N[o>>28&15]+N[o>>24&15]+N[o>>20&15]+N[o>>16&15]+N[o>>12&15]+N[o>>8&15]+N[o>>4&15]+N[o&15]+N[i>>28&15]+N[i>>24&15]+N[i>>20&15]+N[i>>16&15]+N[i>>12&15]+N[i>>8&15]+N[i>>4&15]+N[i&15];return this.is224||(l+=N[s>>28&15]+N[s>>24&15]+N[s>>20&15]+N[s>>16&15]+N[s>>12&15]+N[s>>8&15]+N[s>>4&15]+N[s&15]),l};Pe.prototype.toString=Pe.prototype.hex;Pe.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,a>>24&255,a>>16&255,a>>8&255,a&255,o>>24&255,o>>16&255,o>>8&255,o&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,s&255),l};Pe.prototype.array=Pe.prototype.digest;Pe.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function va(e,t,n){var r,a=typeof e;if(a==="string"){var o=[],i=e.length,s=0,l;for(r=0;r<i;++r)l=e.charCodeAt(r),l<128?o[s++]=l:l<2048?(o[s++]=192|l>>6,o[s++]=128|l&63):l<55296||l>=57344?(o[s++]=224|l>>12,o[s++]=128|l>>6&63,o[s++]=128|l&63):(l=65536+((l&1023)<<10|e.charCodeAt(++r)&1023),o[s++]=240|l>>18,o[s++]=128|l>>12&63,o[s++]=128|l>>6&63,o[s++]=128|l&63);e=o}else if(a==="object"){if(e===null)throw new Error(An);if(dr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!dr||!ArrayBuffer.isView(e)))throw new Error(An)}else throw new Error(An);e.length>64&&(e=new Pe(t,!0).update(e).array());var u=[],c=[];for(r=0;r<64;++r){var f=e[r]||0;u[r]=92^f,c[r]=54^f}Pe.call(this,t,n),this.update(c),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}va.prototype=new Pe;va.prototype.finalize=function(){if(Pe.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Pe.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Pe.prototype.finalize.call(this)}};var kn=Ru();kn.sha256=kn;kn.sha224=Ru(!0);kn.sha256.hmac=Du();kn.sha224.hmac=Du(!0);var Ou=kn;var Nu=Ou.sha256;function gt(e){return Promise.resolve(Nu(e))}function Sa(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function jt(e,t){let n=Nu.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Iu(e,t){let n=await jt(e,t);return Sa(n)}async function Ea(e,t){let n=Up(t),r=await jt(e,n);return Sa(r)}function Up(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}var Fu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],ft=class extends re{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),o=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${a}-${o}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:ft.langMap.get(a),SourceText:r,Target:ft.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:ft.langMapReverse.get(s.Response.Source)||a,to:ft.langMapReverse.get(s.Response.Target)||o}}async translateList(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:ft.langMap.get(a),SourceTextList:r,Target:ft.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:ft.langMapReverse.get(s.Response.Source)||a,to:ft.langMapReverse.get(s.Response.Target)||o}}async signedRequest({secretId:n,secretKey:r,action:a,payload:o,service:i,version:s}){let l=`${i}.tencentcloudapi.com`,u=new Date,c=`${new Date().valueOf()}`.slice(0,10),f=["POST","/","","content-type:application/json; charset=utf-8",`host:${l}`,"","content-type;host",await gt(o)].join(`
`),d=ft.getUTCDate(u),g=["TC3-HMAC-SHA256",c,`${d}/${i}/tc3_request`,await gt(f)].join(`
`),m=await Iu(d,`TC3${r}`),b=await Ea(i,m),x=await Ea("tc3_request",b),p=await Ea(g,x),h=await ee({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:l,"X-TC-Action":a,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${p}`},body:o});if(h instanceof Error)throw h;if(h.Response&&h.Response.Error&&h.Response.Error.Message)throw new Error(h.Response.Error.Message);return h}},on=ft;on.langMap=new Map(Fu),on.langMapReverse=new Map(Fu.map(([n,r])=>[r,n]));var Hu=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],mr=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:a,to:o}=n;if(!r)return{...n};let i=mr.langMap.get(a)||"auto",s=mr.langMap.get(o)||"zh-CN",l=await this.fetchWithoutToken(r,i,s);if(!l)throw new Error("google translate NETWORK_ERROR");if(!l.data[0]||l.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:l.data[0].map(c=>c[0]).filter(Boolean).join(""),from:mr.langMapReverse.get(l.data[2])||"auto",to:o}}async fetchWithoutToken(n,r,a){let o=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:a,q:n}),i="https://translate.googleapis.com/translate_a/single?"+o.toString();return{data:await ee({url:i})}}},sn=mr;sn.langMap=new Map(Hu),sn.langMapReverse=new Map(Hu.map(([n,r])=>[r,n]));function Bu(e){return e.result.texts}function jp(e,t){return t?e+(t-e%t):e}function Wp(e,t){return e.split(t).length-1}function $u(e){let t=Date.now(),n=1;for(let r of e)n+=Wp(r,"i");return jp(t,n)}function zp(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Ls(){return zp(1e6,1e8)}var As="https://www2.deepl.com/jsonrpc",_a="auto",Uu=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],ju=["formal","informal"];function zu(e,t=_a,n=Ls()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function qp(e,t=1){let n=[],r=0;for(let a=0;a<e.length;a++){let o=e[a].chunks;for(let i=0;i<o.length;i++){let s=o[i];n.push({kind:"default",_index:a,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:o.slice(0,r).map(l=>l.sentences[0].text),raw_en_context_after:r+1<o.length?[o[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function Wu(e){return e.reduce((t,n)=>{let r=n.chunks;for(let a of r)t.push(a.sentences[0].text);return t},[])}function Vp(e){if(!e)return{};if(!ju.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function qu(e,t,n,r=Ls(),a=1,o){let i=Wu(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:qp(n,a),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:Vp(o),timestamp:$u(Wu(n))},id:r}}function Kp(e=Uu){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function ks(e){return Kp()[e.toLowerCase()]}var Vu={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function Ku(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function Gp(e,t,n){let r=zu(e,t,n);return await ee({method:"POST",url:As+"?method=LMT_split_text",headers:Vu,body:Ku(r)})}async function Jp(e,t,n,r,a,o){let i=await Gp(e,n,r),s=qu(n==="auto"?i.result.lang.detected:n,t,Bu(i),r,a,o),l=s.params.jobs.map(f=>f._index);s.params.jobs=s.params.jobs.map(f=>{let d={...f};return delete d._index,d});let u=await ee({method:"POST",url:As+"?method=LMT_handle_jobs",body:Ku(s),headers:Vu}),c={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((f,d)=>{let g=l[d];c.text[g]===void 0&&(c.text[g]="");let m=s.params.jobs[d].sentences[0].prefix,b=s.params.jobs[d].sentences[0].prefix;c.text[g]=c.text[g]+m+f.beams[0].sentences[0].text}),c}async function Gu(e,t,n=_a,r,a,o){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:Jp(e,ks(t),ks(n)??"auto",r,a,o):{text:[],from:n,to:t}}var Ju=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Mn=class extends re{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:a,from:o}=n,i=await Gu(r,Mn.langMap.get(a),Mn.langMap.get(o));return{text:i.text,from:Mn.langMapReverse.get(i.from),to:Mn.langMapReverse.get(i.to)}}},ln=Mn;ln.langMap=new Map(Ju),ln.langMapReverse=new Map(Ju.map(([n,r])=>[r,n]));var Yu=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Zv=new Map(Yu),eS=new Map(Yu.map(([e,t])=>[t,e]));var Xu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Ms="https://transmart.qq.com/api/imt",cn=class extends re{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:a}=n,o=await this.detectLanguage(r),i=cn.langMap.get(o)||o,s=cn.langMap.get(a)||a;if(o===a)return{text:r,from:o,to:a};let l=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await ee({url:Ms,body:l,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:o||"auto",to:a}}async translateList(n){let{from:r,text:a,to:o}=n;if(a.length===1){let f=await this.translate({from:r,text:a[0],to:o,url:n.url});return{text:[f.text],from:f.from,to:f.to}}let i=await this.detectLanguage(a.join(`
`));if(i===o)return{text:a,from:i,to:o};let s=cn.langMap.get(i)||i,l=cn.langMap.get(o)||o,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:s,orig_url:n.url},target:{lang:l},type:"plain"}),c=await ee({url:Ms,body:u,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:i||"auto",to:o}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await ee({url:Ms,method:"POST",body:JSON.stringify(r)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let o=a.language,i=cn.langMapReverse.get(o);return i||o}},un=cn;un.langMap=new Map(Xu),un.langMapReverse=new Map(Xu.map(([n,r])=>[r,n]));function Qu(){return Math.random()>=0}var Pn=class extends re{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await xs(),await Qn(5e3);let a=r.match(/^\s*/)[0].length;return{text:r.slice(0,a)+"\u6A21\u62DF\uFF1A"+r.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:a,to:o}=n;if(await xs(),!Qu())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:a,to:o,text:[""]}:{from:a,to:o,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var tg=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],Zu=new Map(tg),eg=new Map(tg.map(([e,t])=>[t,e])),pr=class extends re{constructor(n,r){super(n,r);this.apikey="";this.codename=pr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...pr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:pr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:a,to:o}=n,i=await ee({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:Zu.get(a)||"auto",target_lang:Zu.get(o)})});if(i.status){let s=i;return{text:s.result,from:eg.get(s.source_lang),to:eg.get(s.target_lang)}}else throw new Error(i.msg)}},Ca=pr;Ca.DEFAULT_CODENAME="deepl";var La=Ca;var rg=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],ng=new Map(rg),Yp=new Map(rg.map(([e,t])=>[t,e])),Ps=class extends re{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:a,text:o}=n,i={source_lang:ng.get(r),target_lang:ng.get(a)},s=new URLSearchParams(i);o.forEach(g=>{s.append("text",g)});let l=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let c=await ee({url:u,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:f}=c;return{text:f.map(g=>g.text),from:f[0]&&Yp.get(f[0].detected_source_language)||r,to:a}}},ag=Ps;var Xp=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],ve={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},Rs=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Ds=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=Rs(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(Rs).sort().join(`&${r}=`)}`:`${r}=${Rs(n)}`}).filter(t=>t).join("&"),hr=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let a=t[r];return typeof a<"u"&&a!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],a=this.credentialString(n);return r.push(`${ve.algorithm} Credential=${t.accessKeyId}/${a}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),a={...this.request.params},o=this.request.params,i=this.request.headers;t.sessionToken&&(a[ve.tokenHeader]=t.sessionToken),a[ve.dateHeader]=r,a[ve.notSignBody]="",a[ve.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,a[ve.algorithmKey]=ve.algorithm,a[ve.signHeadersKey]="",a[ve.signQueriesKey]=void 0,a[ve.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let s=await this.signature(t,r);return this.request.params=o,this.request.headers=i,a[ve.signQueriesKey]=Object.keys(a).sort().join(";"),a[ve.signatureKey]=s,Ds(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[ve.dateHeader]=n,t.sessionToken&&(this.request.headers[ve.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[ve.contentSha256Header]=await gt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return Sa(await jt(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(ve.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=Ds(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,a)=>r[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let a=r[0].toLowerCase();if(this.isSignableHeader(a)){let o=r[1];if(typeof o>"u"||o===null||typeof o.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(o.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await gt(t)}async hexEncodedBodyHash(){return this.request.headers[ve.contentSha256Header]?this.request.headers[ve.contentSha256Header]:this.request.body?await this.hexEncodedHash(Ds(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return Xp.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,a){let o=await jt(n,`${ve.kDatePrefix}${t.secretKey}`),i=await jt(r,o),s=await jt(a,i);return jt(ve.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,ve.v4Identifier].join("/")}};var sg=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],og=new Map(sg),Qp=new Map(sg.map(([e,t])=>[t,e])),Os=class extends re{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n,i=og.get(a),s={TargetLanguage:og.get(o)||o,TextList:r};i&&(s.SourceLanguage=i);let l={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new hr(l,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(l.params),f=await ee({url:"https://open.volcengineapi.com"+l.pathname+"?"+c.toString(),headers:u.request.headers,method:l.method,body:l.body});if(f.TranslationList){let d=f.TranslationList.map(m=>m.Translation),g=a;return f.TranslationList.length>0&&f.TranslationList[0].DetectedSourceLanguage&&(g=Qp.get(f.TranslationList[0].DetectedSourceLanguage)||a),{text:d,from:g,to:o}}else{let d=f.ResponseMetaData.Error;throw new Fe(d.Code,d.Message)}}},ig=Os;var lg=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Zp=new Map(lg),eh=new Map(lg.map(([e,t])=>[t,e])),br=class extends re{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:a,to:o}=n,s={source_language:Zp.get(a)||"detect",target_language:"zh",text:r},l=await ee({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(l.base_resp&&l.base_resp.status_code===0){let u=l.translation,c=a;return l.detected_language&&(c=eh.get(l.detected_language)||a),{text:u,from:c,to:o}}else{let u=l.base_resp;throw new Fe(u.status_code.toString(),u.status_message)}}};var th=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],cg=new Map(th),yr=class extends re{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:a,to:o}=n,s=await ee({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:cg.get(a)||a,target_lang:cg.get(o)||o,text:r})});if(s.code===200)return{text:s.data,from:a,to:o};throw new Error(s.message||s.message||"API Error")}};var Ns="https://{s}bing.com",mg=Ns+"/translator",nh=Ns+"/ttranslatev3",rh=Ns+"/tspellcheckv3",Aa="bingGlobalConfig",pg=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],ug=new Map(pg),gg=new Map(pg.map(([e,t])=>[t,e])),fg=1e3,dt,Rn;function Is(e,t){return e.replace("{s}",t?t+".":"")}async function ah(){if(!dt){let n=await Y.storage.local.get(Aa);return n&&(dt=n[Aa]),!0}let{tokenTs:e,tokenExpiryInterval:t}=dt;return Date.now()-e>t}async function dg(){let e,t,n,r,a,o,i,s,l,u;try{let c=Is(mg,e),f=await ee({url:c,responseType:"raw"}),{body:d,headers:g,url:m}=f;e=m.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=g["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[a,r,o,i,s,l]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw console.error("failed to fetch global config",c),c}return dt={subdomain:e,IG:t,IID:n,key:a,token:r,tokenTs:a,tokenExpiryInterval:o,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:l,cookie:u,count:0},await Y.storage.local.set({[Aa]:dt}),dt}function oh(e){let{IG:t,IID:n,subdomain:r,isVertical:a}=dt;return Is(e?rh:nh,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+dt.count++:"")}function sh(e,t,n,r){let{token:a,key:o}=dt,i={fromLang:n,text:t,token:a,key:o};return!e&&r&&(i.to=r),i}async function hg(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>fg)throw new Error(`The supported maximum length of text is ${fg}. Please shorten the text.`);Rn||(Rn=dg()),await Rn,await ah()&&(Rn=dg(),await Rn),t=t||"auto",n=n||"zh-CN",t=ug.get(t)||t,n=ug.get(n)||n;let a=oh(!1),o=sh(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:Is(mg,dt.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(o),l=a,u=s.toString(),c=await ee({url:l,headers:i,method:"POST",body:u});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(dt=null,Rn=null,await Y.storage.local.remove(Aa),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let f=c[0].translations[0],d=c[0].detectedLanguage;return{text:f.text,from:gg.get(d.language),to:gg.get(f.to)}}var xr=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:a,to:o}=n;return r?await hg(r,a,o):{...n}}};var yg=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],bg=new Map(yg),ih=new Map(yg.map(([e,t])=>[t,e])),Fs=class extends re{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:a}=this,{appid:o,key:i}=this,{text:s,from:l,to:u}=n,c=new URLSearchParams({from:bg.get(l),to:bg.get(u),q:s,salt:r,appid:o,sign:_n(o+s+r+i)}),f=new URL(a);f.search=c.toString();let d=await ee({url:f.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new Fe("API_SERVER_ERROR",d.error_msg);let{trans_result:g,from:m}=d,b=g.map(({dst:p})=>p);return{from:ih.get(m),to:u,text:b.join(`
`)}}},xg=Fs;var lh=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Tg=new Map(lh),Hs=class extends re{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n;a==="auto"&&(a=await ot({text:r.join(" ")}));let i=r;return{text:(await ee({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Tg.get(a)}2${Tg.get(o)}`})})).target,from:a,to:o}}},wg=Hs;var Sg=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],vg=new Map(Sg),ch=new Map(Sg.map(([e,t])=>[t,e]));function uh(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Bs=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),l=this.appId+uh(r)+i+s+this.appSecret,u=await gt(l),c={q:r,appKey:this.appId,salt:i.toString(),from:vg.get(a),to:vg.get(o),sign:u,signType:"v3",curtime:s.toString()},f=new URLSearchParams(c),g=await ee({url:"https://openapi.youdao.com/api",method:"POST",body:f.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),m=g.l,[b,x]=m.split("2");return{text:g.translation.join(`
`),from:ch.get(b),to:o}}},Eg=Bs;var Dn={mock:{class:Pn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:Pn,name:"Mock2",homepage:"https://www.google.com"},google:{class:sn,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:un,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:ag,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:ig,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:br,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:xr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:on,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:xg,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:wg,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:La,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Eg,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:ln,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:yr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function $s(e,t){let n=Dn[e],r=t.config.translationServices[e]||{},a=!0,o=n.class.getAllProps();if(o.length>0){let i=o.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){a=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:a,config:r,props:n.class.getProps(),allProps:o}}var gh=Object.keys(Dn),_g=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return gh.filter(a=>{let o=Dn[a];return a.startsWith("mock")?!!r:!o.alpha||n||a===e.translationService}).map(a=>$s(a,e))};async function Us(e,t){if(!e.text)return e;let n=await js({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Fe("translateFailed","translate failed")}async function js(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:a}=t,o=r.translationGeneralConfig,i=r.translationServices,s=a,l=i[s]||{},u=[],c={sentences:Array(e.sentences.length)},f=e.sentences.length,d=-1;if(r.cache)for(let x of e.sentences){d++;let p=s;s==="openl"&&(p=s+"-"+l.codename||La.DEFAULT_CODENAME);let h=null;try{h=await jr(fu({originalText:x.text,from:x.from,to:x.to,service:p}),1e3)}catch(w){O.warn("query cache DB error, but it's ok",w)}if(h){let w={...x,text:h.translatedText};c.sentences[d]=w,n&&n(null,w,x)}else u.push(x)}else u.push(...e.sentences);let g=u.length;if(f-g>0&&O.debug(`use ${f-g} sentences from cache`),!u.length)return c;let m;try{m=new Dn[s].class(l,o),await m.init()}catch(x){if(n)for(let p of u)n(x,null,p);throw x}let b=await m.multipleTranslate({sentences:u},(x,p,h)=>{if(n&&(n(x,p,h),!x&&p&&!s.startsWith("mock")&&r.cache)){let w=s;s==="openl"&&(w=s+"-"+l.codename||La.DEFAULT_CODENAME),r.cache&&jr(du({translatedText:p.text,from:h.from,to:h.to,detectedFrom:p.from,key:_n(h.text),service:w}),3e3).catch(S=>{O.warn("set cache DB error",S)})}});for(let x of b.sentences){let p=c.sentences.findIndex(h=>!h);if(p===-1)throw new Fe("translateFailed","can not match the result");c.sentences[p]=x}return c}var Cg=["*://*/*","*","*://*"],Ag="immersive-translate-wildcard-placeholder.com";function Ws(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>Cg.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let a=r.href,o=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let l=s;if(s===o)return!0;if(Cg.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===o:dh(a,s)}catch{}return!1}else{let u,c=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let f=s.replace(/\*/g,Ag),d;try{d=new URL(f)}catch{return O.debug("invalid match pattern",f,"raw match value:",c),!1}let g=d.hostname,m=d.pathname;m==="/"&&(c.replace("://","").includes("/")||(m="/*"));let b=fh(u+":",Lg(g),Lg(m));if(b){let x=new URL(a);return x.port="",b.test(x.href)}else return!1}});if(i)return i}return null}function Lg(e){return e.replace(Ag,"*")}function fh(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function Tr(e,t){return Ws(e,t)!==null}function dh(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}async function Ct(e){let{url:t,config:n,state:r}=e,a=new URL(t),o="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:l,translationTheme:u,translationThemePatterns:c,translationUrlPattern:f,targetLanguage:d,sourceLanguageUrlPattern:g,immediateTranslationPattern:m}=n,b=On(t,i),x=On(t,m),p=s,h=Object.keys(l);for(let I of h){let H=l[I];if(On(t,H)){p=I;break}}let w=u,S=Object.keys(c);for(let I of S){let H=c[I];if(On(t,H)){w=I;break}}let R=On(t,f),T=mh(t,f);T||(T=Tr(t,Ni));let _=Object.keys(g),M={};for(let I of _){let H=g[I];if(H&&H.matches)for(let ae of H.matches)M[ae]=I}let C=Object.keys(M),z=Ws(t,C);z&&(o=M[z]??"auto",M[z]&&M[z]!=="auto"&&It(M[z]));let P=d||"zh-CN",U=a.hostname,F=await gt(U),J=a.pathname+a.search+a.hash,X=await gt(J),Re=`https://${F}.com/${X}`,Je=await Jn(),Se=n.translationStartMode;Se==="dynamic"&&x&&(Se="immediate");let ce={targetLanguage:P,config:n,translationService:p,translationTheme:w,isTranslateUrl:R,sourceLanguage:o,isTranslateExcludeUrl:T,rule:n.generalRule,url:t,encryptedUrl:Re,state:r||{translationArea:n.translationArea,translationStartMode:Se,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:b},localConfig:Je};ce.state.translationArea==="body"&&(ce.config.generalRule.excludeTags=ce.config.generalRule.excludeTags.filter(I=>I!=="BUTTON"&&I!=="LABEL"),ce.config.generalRule.additionalExcludeSelectors=ce.config.generalRule.additionalExcludeSelectors.filter(I=>I!==".btn")),ce.translationService==="d"&&(n.immediateTranslationTextCount=0);let ue=n.rules,pe;globalThis.PDFViewerApplication?pe=ue.find(I=>I.isPdf):pe=ue.find(I=>On(t,I));let v=n.generalRule;return pe&&(ce.rule=Ur(v,pe)),ce.rule.isPdf&&(ce.state.translationArea="main"),ce.state.translationArea==="body"&&(ce.rule.paragraphMinTextCount=1,ce.rule.paragraphMinWordCount=1),ce}function On(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:a,excludeSelectorMatches:o}=t;return r&&r.length>0&&Tr(e,r)?!1:n&&n.length>0&&Tr(e,n)?!0:o&&o.length>0&&Ir(o)?!1:!!(a&&a.length>0&&Ir(a))}function mh(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&Tr(e,n)||r&&r.length>0&&Ir(r))}var Ma="Original",ka=[],Gs=new Set,zs=[],Pa=[],Mg=[],Ra=[],kg=We().split("#")[0],Js=0,Ce,ph=Wr(vh,300),hh=Wr(Rg,200),Ys=vt(),bh=Ys.PROD==="1",Nn,wr=new Map,Pg,vr="";async function ha(){Qe()==="Original"?await Bt():(Qe()==="Translated"||Qe()==="Error")&&Ht()}function Ht(){vs();let e=[document.body,...wr.keys()];for(let t of e)Ks(t),t.querySelectorAll("."+Ye).forEach(o=>{o.remove()}),t.querySelectorAll("."+Dr).forEach(o=>{o.remove()}),t.querySelectorAll("["+Qa+"]").forEach(o=>{if(bh)delete o[Le];else{let s=Object.keys(o.dataset).filter(l=>l.startsWith(ge));for(let l of s)delete o.dataset[l]}o.removeAttribute(Qa)});Fg(),je("Translating"),vr&&(document.title=vr),je("Original")}function yh(e,t){let n=!1,r=ao(e.elements),a=xn(e.elements);Gs.add(e.id);let o=[];if(r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Pa.push(s),o.push(s),s.observe(r)}if(a&&a!==r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Pa.push(s),o.push(s),s.observe(a)}let i=$t(e.id);i&&(i.observers=o,fr(e.id,i))}function xh(e,t){if(e){let n=new ResizeObserver((r,a)=>{for(let o of r)o.contentRect.width>10&&(a.disconnect(),t(o.target))});n.observe(e),Mg.push(n)}}async function Rg(e){let t=[...Ra];Ra=[];let n=new Map;t.forEach(r=>{n.has(r.rootFrame)||n.set(r.rootFrame,[]),n.get(r.rootFrame)?.push(r.element)});for(let[r,a]of n)try{let o=[];for(let i of a){let s=Ts(i,e);if(s.length===0)continue;let l=s;o.push(...l)}await Xs(o,r,e)}catch(o){O.error(`translateNewDynamicNodes error: ${o.message}`)}}function qs(e,t){Gs.delete(e.id);let n=$t(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(o=>{o.disconnect()}),n.observers=[],n.state="Translating",fr(e.id,n));let r=e.id;Js+=e.text.length;let a=Nr(e.elements);if(e.isPdf){let o=ao(e.elements),i=window.getComputedStyle(o),s=i.top,l=i.fontSize,u=parseFloat(l.slice(0,-2));isNaN(u)||u>28&&(l="28px");let c=e.targetContainer,f=document.createElement("span");a.length===1&&(f.style.fontSize=l),f.id=`${Ye}-${r}`,f.style.top=s;let d=Mt(o,zn),g=a.reduce((x,p)=>{let h=Mt(p,zn);return h&&h<x?h:x},1e3),b=a.reduce((x,p)=>{let h=Mt(p,Pr);return h&&h>x?h:x},0)-g;b<30,b>600&&(b=600),d<200&&(d=10),d&&d<0&&(d=0),f.style.left=`${d||10}px`,g<400?f.style.width=b+"px":f.style.width=`calc(100% - ${g}px)`,f.classList.add("notranslate",`${Ye}`),c.appendChild(f)}else{let o=xn(e.elements),i="afterend";e.elements.length>0&&o&&(a.length===1?i="beforeend":it(e.elements[0],t.rule)||(i="beforeend")),t.rule.insertPosition&&(i=t.rule.insertPosition);let s=document.createElement("span");if(s.classList.add("notranslate",Ye),s.id=`${Ye}-${r}`,s.innerHTML=Ng(),i==="beforeend"){let l=Vi(o);l?l.appendChild(s):o.appendChild(s)}else if(i==="afterend")o.insertAdjacentElement(i,s);else throw new Error("not support position")}ka.push(r),ph(t)}function Th(e,t){t.state.translationStartMode==="dynamic"&&Js>t.config.immediateTranslationTextCount?yh(e,n=>{qs(n,t)}):qs(e,t)}async function Bt(){if(Ma==="Translating")return;je("Translating");let e=await Wt(We());if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),o=new URL(e.url).hostname,i=e.localConfig.tempTranslationUrlMatches||[],s=i.findIndex(u=>u.match===o&&u.expiredAt>r),l=!1;s>-1||(i.push({match:o,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),l=!0),l&&await Yn({...e.localConfig,tempTranslationUrlMatches:[...i]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),O.debug("ctx",e),e.state.isNeedClean?Ht():Ce.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),pu(()=>{Js=0,xu(),Pa.forEach(r=>{r.disconnect()}),Mg.forEach(r=>{r.disconnect()}),Pa=[],Gs.clear()}),je("Translating");try{let r=[document.body];document.querySelectorAll("iframe").forEach(i=>{co(i)&&(r.push(i.contentDocument.body),lo(i.contentDocument,Ys.IMMERSIVE_TRANSLATE_INJECTED_CSS))}),e.rule.shadowRootSelectors&&e.rule.shadowRootSelectors.length>0&&Ve(document.body,e.rule.shadowRootSelectors).forEach(s=>{s.shadowRoot&&s.shadowRoot.mode==="open"&&r.push(s.shadowRoot)});let o=0;je("Translating");for(let i of r)o+=await Dg(i,e);o===0&&je("Translated"),Og(e).catch(i=>{O.error("translateTitle error:",i.name,i.message,i.details||"")}),Eh(e)}catch(r){je("Error"),O.error(r)}}async function Dg(e,t){uo([e],t.rule);let n=Ts(e,t);O.debug("detect containers",n);let{rule:r}=t;n.length>0&&await Xs(n,e,t);let a=Sh(e,r,t);return e===document.body?Pg=a:wr.set(e,a),n.length}async function Wt(e){let t=await Ge();if(!Ce)Ce=await Ct({url:e,config:t});else{let n={url:e,config:t,state:Ce.state};Ce=await Ct(n)}return Ce}async function ou(){Qe()==="Original"?await ba():(Qe()==="Translated"||Qe()==="Error")&&(Ce=await Wt(We()),Ce.state.translationArea!=="main"?await ba():Ht())}async function ba(){Ce=await Wt(We()),Ce.state.translationArea="main",await Bt()}async function ys(){Ce=await Wt(We()),Ce.state.translationArea="body",await Bt()}async function su(){Qe()==="Original"?await ys():(Qe()==="Translated"||Qe()==="Error")&&(Ce=await Wt(We()),Ce.state.translationArea!=="body"?(Ce.state.translationArea="body",await Bt()):Ht())}async function iu(){Ce=await Wt(We()),Ce.state.translationArea="body",Ce.state.translationStartMode="immediate",await Bt(),await Rg(Ce)}async function Og(e){let t=document.title;if(!t||t.includes(Rr))return;vr!==t&&(vr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=fa()),n==="auto"){let r=await ot({text:t});if(ur(r,e.targetLanguage))return}try{let r=await Us({text:t,from:n,to:e.targetLanguage},e);r&&r.text&&(document.title=vr+Rr+r.text)}catch(r){throw r}}function wh(e,t){let n=e.querySelector("#"+Ye+"-"+t);n&&(n.innerHTML=Ng())}function Ng(){return`&nbsp;<span class="${be}-loading notranslate"></span>`}async function Xs(e,t,n){let{rule:r}=n;uo(e,r);let a=[];if(n.rule.isPdf)e.length>0&&(je("Translating"),a=ku(e,r).targetContainers);else{je("Translating");let i=Au(e,r),{hiddenElements:s}=i;for(let l of s)xh(l,()=>{zi(l,et),Xs([l],t,n)});je("Translating")}let o=[];if(n.rule.isPdf?o=await Eu(t,e,n,a):(e=e.filter(i=>!Ke(i,r,!1)),o=await Tu(t,e,n)),je("Translating"),o.length===0){je("Translated");return}O.debug("detect paragraphs",o);for(let i of o)Th(i,n);je("Translated")}async function Ig(e){let t=$t(e);if(!t)throw new Error("paragraph not found");wh(t.rootFrame,e);let n=await Wt(We()),r={id:t.id,text:t.text,from:t.languageByLocal,fromByClient:t.languageByClient,to:n.targetLanguage,url:n.encryptedUrl};try{let a=await Us(r,n);Vs(null,a,r,n)}catch(a){Vs(a,null,r,n)}}function Vs(e,t,n,r){let a=$t(n.id);if(a&&(e||!t)){e||(O.error("translate error",t),e=new Error("no response from server"));let o=n.id,i=a.rootFrame.querySelector(`#${Ye}-${o}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),a&&(a.state="Error",fr(a.id,a));let l=`<span class="${be}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${be}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${be}-clickable-button notranslate" data-${be}-paragraph-id="${o}" data-${be}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=l)}else{let o=$t(n.id);if(o){o.state="Translated",fr(o.id,o);let i=Cu(o,t,r),s=t.id,l=o.rootFrame.querySelector(`#${Ye}-${s}`);l&&(l.innerHTML=i.html,o.rootFrame.querySelectorAll(`[${Qt}="${s}"]`).forEach(c=>{ie(c,hn,"1")}))}else O.error("paragraph not found",n.id)}}async function vh(e){if(ka.length===0)return Promise.resolve();let t=[...ka];ka=[];let n="auto";e.state.isDetectParagraphLanguage||(n=Ft());let r={sentences:t.filter(o=>$t(o)).map(o=>{let i=$t(o),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){je("Translating");try{await js(r,e,(o,i,s)=>{Vs(o,i,s,e)})}catch(o){je("Error"),O.error("translateCurrentQueue error",o.name,o.message,o.details||" ");return}}je("Translated")}function je(e){Ma=e,gu(Ma)}function Sh(e,t,n){O.debug("enableMutatinObserver for ",e),Ks(e),zs=[],Ra=[];let r=t.inlineTags.concat(t.excludeTags).concat("#text","BR"),a=new MutationObserver(function(o){o.forEach(i=>{if(e===document.body){let s=We();if(s.split("#")[0]!==kg&&t.observeUrlChange){kg=s.split("#")[0],vs(),Ks(e),Fg(),setTimeout(()=>{O.debug("url changed, reinit page"),Da()},t.urlChangeDelay);let u=new Event(Ai);document.dispatchEvent(u);return}}i.addedNodes.forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let l=s;if(l.nodeName==="IFRAME")co(l)&&setTimeout(()=>{lo(l.contentDocument,Ys.IMMERSIVE_TRANSLATE_INJECTED_CSS),Dg(l.contentDocument.body,n).catch(u=>{O.error("translateFrame error",u.details||" ",u)})},n.rule.urlChangeDelay);else if(_h(t,l)||!r.includes(l.nodeName)){if(l.classList.contains("notranslate"))return;Hi(l,zs)||(Ra.push({element:l,rootFrame:e}),zs.push(l),hh(n))}}})})});return a.observe(e,{childList:!0,subtree:!0}),a}function Eh(e){let t=document.querySelector("title");t&&(Nn=new MutationObserver(function(n){n.length>0&&(n[0].target.text.includes(Rr)||Og(e).catch(a=>{O.error("translateTitle error:",a.name,a.message,a.details||"")}))}),Nn.observe(t,{subtree:!0,characterData:!0,childList:!0}))}function _h(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Da(){let e=yn(),t=await Wt(We());t.rule.urlChangeDelay&&await Qn(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?(fe()?n=await ot({text:en(document.body).slice(0,1e3)}):e?n=await ot({text:en(document.body).slice(0,1e3)}):n=await uu(),n==="auto"&&(n=await mu()),nu(n)):It(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(O.debug(`detect page language: ${n}`),Ki(n,t.config.translationLanguagePattern)&&(r=!0,O.debug(`match language pattern ${n}, auto translate`))),r?(Ce.state.isAutoTranslate=!0,await Bt()):O.debug("do not auto translate",t)}function Ks(e){if(wr.has(e)){let t=wr.get(e);t.disconnect(),t.takeRecords(),wr.delete(e)}else if(e===document.body){let t=Pg;t&&(t.disconnect(),t.takeRecords())}}function Fg(){Nn&&(Nn.disconnect(),Nn.takeRecords(),Nn=void 0)}function Qe(){return Ma}function Hg(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Qs(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let a=t[r],o=new RegExp("{"+r+"}","gm");n=n.replace(o,a.toString())}),n}function Sr(e,t,n){let r=e[t];if(!r)return n;let a=n.split("."),o="";do{o+=a.shift();let i=r[o];i!==void 0&&(typeof i=="object"||!a.length)?(r=i,o=""):a.length?o+=".":r=n}while(a.length);return r}function Zs(e,t,n,r,a){if(!e.hasOwnProperty(n))return t;let o=Sr(e,n,t);return o===t&&n!==r&&(o=Sr(e,r,t)),Qs(o,a)}var Bg={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},ei={...Gt,"zh-CN":{...Bg["zh-CN"],...Gt["zh-CN"]},"zh-TW":{...Bg["zh-TW"],...Gt["zh-TW"]}},$g=ei;function ti(e,t,n){return Zs(ei,e,t,Or,n)}var Oa=(e,t,n)=>{let r=Zs(ei,`languages.${e}`,t,"en");return n?ro[e]||e:r!==`languages.${e}`?r:ro[e]};function Ug(e){document.addEventListener("click",t=>{let n=t.target,r=n.getAttribute("data-immersive-translate-action");if(r&&r==="retry"){let a=n.getAttribute("data-immersive-translate-paragraph-id");a&&Ig(Number(a))}}),e.rule.fingerCountToToggleTranslagePageWhenTouching>=2&&globalThis.addEventListener("touchstart",t=>{if(t.touches.length==e.rule.fingerCountToToggleTranslagePageWhenTouching){ha();let n=new CustomEvent(At,{detail:{method:"toggleTranslatePage"}});globalThis.document.dispatchEvent(n)}}),fe()&&globalThis.top!=globalThis.self&&globalThis.addEventListener("message",t=>{t&&t.data&&t.data.payload&&t.data.author===Lr&&rn(t.data.payload,{tab:{id:1,url:"https://www.fake-iframe.com",active:!0}})},!1)}function Er(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}async function Na(e){try{let t=new Date;O.debug("cron task start, next will run at",new Date(t.getTime()+e).toLocaleString()),await Y.storage.local.set({[qn]:t.toISOString()}),await Ch()}catch(t){O.error("run cron task failed",t)}}async function jg(){let t=(await Ge()).interval;if(t){let n=await Y.storage.local.get(qn);if(n&&n[qn]){let r=n[qn];if(Date.now()-new Date(r).getTime()<t){let a=new Date(new Date(r).getTime()+t);O.debug(`cron task not run, next will run at ${a}`);return}else Na(t)}else Na(t)}}async function Ch(){try{let e=await Ge(),t=await ee({url:Wn}),n=e.buildinConfigUpdatedAt,r=new Date(n),a=t.buildinConfigUpdatedAt,o=new Date(a),i=t.minVersion,s=Y.runtime.getManifest().version;Er(s,i)?o>r?(await Y.storage.local.set({buildinConfig:t}),O.info(`sync remote rules success, latest: ${new Date(a).toLocaleString()}`)):O.debug(`no need to sync rules, latest: ${r}`):O.info(`local version is too old, please update to ${i} or later`)}catch(e){O.error("sync rules error: ",e)}}function Wg(){let e=["localhost",kr],t=["/dist/userscript/options/","/options/","/options"],n=We(),r=new URL(n),a=r.hostname,o=r.pathname;if((e.includes(a)||a.startsWith("192.168"))&&t.includes(o)){let i=document.querySelector("meta[name=immersive-translate-options]");if(i&&i.getAttribute("content")==="true")return!0}return!1}async function qg(){if(!document.getElementById("immersive-translate-status")){O.error("Could not find status element");return}await zg("local"),await zg("sync"),Lh();let t=document.getElementById("immersive-translate-page-ready");t&&setTimeout(()=>{t.value="true",t.dispatchEvent(new Event("change"))},100)}function Lh(){let e=document.getElementById("immersive-translate-manifest");if(!e){O.error("Could not find manifest element");return}e.value=JSON.stringify(Y.runtime.getManifest()),e.dispatchEvent(new Event("change"))}async function zg(e){let t=document.getElementById("immersive-translate-status"),n=document.getElementById(`immersive-translate-${e}-storage`);if(n){O.debug("init storage");let r=await Y.storage[e].get(null);n.value=JSON.stringify(r),n.dispatchEvent(new Event("change")),n.addEventListener("change",a=>{try{let o=JSON.parse(a.target.value);Y.storage[e].set(o)}catch(o){O.error("save to storage error",o)}})}else{O.error(`Could not find storage ${e} element`),t.innerText="Could not find storage local input element";return}}function Ia(e){rn(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(r=>{O.error("send content message request failed",e,r)}),document.querySelectorAll("iframe").forEach(r=>{r.contentWindow&&r.contentWindow.postMessage({author:Lr,payload:e},"*")});let n=new CustomEvent(At,{detail:e});globalThis.document.dispatchEvent(n)}function Vg(e){let t=e.shortcuts||{},r=Object.keys(t).reduce((o,i)=>(o[t[i]]=i,o),{}),a=Object.keys(r);for(let o of a){let i=o.replace(/MacCtrl/ig,"Ctrl");at(i,s=>{s.preventDefault(),Ia({method:r[o]})})}}var In={},Ah={root:"",lang:"en",fallbackLang:"en"};function ni(e,t){let n=Object.assign({},Ah,e);In=t||In;let[r,a]=le(n.lang),[o,i]=le(In),[s,l]=le(!1),u=f=>{if(o.hasOwnProperty(f))return;l(!1);let d=Hg(n.root||"",f);n.getUrl&&(d=n.getUrl(n.root||"",f),fetch(d).then(g=>g.json()).then(g=>{In[f]=g,i({...In}),l(!0)}).catch(g=>{i({...In}),l(!0)}))};return ze(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:a,t:(f,d)=>{if(!o.hasOwnProperty(r))return f;let g=Sr(o,r,f);return g===f&&r!==n.fallbackLang&&(g=Sr(o,n.fallbackLang,f)),Qs(g,d)},isReady:s}}var kh=0;function D(e,t,n,r,a){var o,i,s={};for(i in t)i=="ref"?o=t[i]:s[i]=t[i];var l={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--kh,__source:a,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return q.vnode&&q.vnode(l),l}var ai=So(null),ri={root:"assets",lang:"en",fallbackLang:"en"},Kg=e=>{let{t,setLang:n,lang:r,isReady:a}=ni({root:e.root||ri.root,lang:e.lang||ri.lang,fallbackLang:e.fallbackLang||ri.fallbackLang,getUrl:e.getUrl},e.translations);return D(ai.Provider,{value:{t,setLang:n,lang:r,isReady:a},children:e.children})};function Gg(e,t,n){let r=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),r=t!=="auto"?n[t].matches:[];let a={},o=Object.keys(n);for(let u of o){let f=n[u].matches;for(let d of f)a[d]||(a[d]=[]),a[d].push(u)}let i=a[e];if(i&&i.length>0)for(let u of i)n[u].matches.indexOf(e)>-1&&(n[u]={...n[u],matches:n[u].matches.filter(f=>f!==e)});let s=new Set(r);if(t==="auto")return{...n};s.add(e);let l=Array.from(s);return{...n,[t]:{...n[t],matches:l}}}function Jg(e,t=2e3){return n=>{let r,a=0;return o=>{++a==e&&(n(o),a=0),clearTimeout(r),r=setTimeout(()=>a=0,t)}}}function Yg(e){let t;try{t=new URL(e)}catch{return!1}let n=t.pathname;return n.endsWith(".html")||n.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}function Xg(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function Qg(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Fa(){return Y.runtime.getManifest().version}function zt(e){let{items:t,maxWidth:n}=e;return n=n||128,D("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let a=r.target.value,o=t.find(i=>i.value===a);o&&o.onSelected(o)},children:t.map(r=>D("option",{value:r.value,selected:r.selected,children:r.label}))})}var Ha="DROP_DOWN_DEFAULT_VALUE";function oi(e){let{showArrow:t,onSelected:n,className:r,menus:a,maxWidth:o}=e;r=r||"",t=t??!0,o=o||60;let i=Co(null);return D("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${r||""}`,value:Ha,style:{maxWidth:`${o}px`},onChange:s=>{s.preventDefault();let l=s.target.value;if(i.current&&l!==Ha){i.current.value=Ha,i.current?.dispatchEvent(new Event("change"));let u=a.find(c=>c.value===l);u&&n(u)}},children:[{value:Ha,label:e.label}].concat(a).map(s=>D("option",{value:s.value,children:s.label}))})}function Lt(){return Lo(ai)}function si(e){let{field:t,onChange:n,value:r}=e;r=r||t.default||"";let{t:a}=Lt();return t.type==="select"?D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:[t.label?a(t.label):t.name,"\uFF1A"]}),D(zt,{items:t.options.map(o=>({label:`${o.label?a(o.label):o.value}`,value:r,selected:r===o.value,onSelected:()=>{n(o.value)}}))})]}):null}var Mh=({date:e})=>{let{t}=Lt(),[n,r]=le(!1);return ze(()=>{setTimeout(()=>{r(!0)},5e3)},[]),n?null:D("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},Ph=({minVersion:e})=>{let{t}=Lt();return D("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},Rh=({message:e,handleSyncing:t,date:n})=>{let{t:r}=Lt();return D("p",{class:"text-sm",children:[r("failToSyncRules")," ",D("a",{onClick:t,children:r("retry")}),D("br",{}),r("failedReason"),"\uFF1A",e,D("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function ii(e){let{request:t}=e,[n,r]=le(null),{t:a}=Lt(),[o,i]=le(null),[s,l]=le(null),[u,c]=le(""),[f,d]=le(!1),[g,m]=le(!1),[b,x]=le(null),[p,h]=le(null),w=Fa(),S=async()=>{c("");let R=o;if(o===null)try{let T=await t({url:Wn});T?(i(T),R=T,d(!0)):(c(a("unknownError")),l(null))}catch(T){l(null),c(T.message);return}R!==null?(e.setStorageBuildinConfig(R),l(!1),r(R.buildinConfigUpdatedAt)):(c(a("canNotFetchRemoteRule")),l(null))};return ze(()=>{Xn().then(R=>{let T=R.buildinConfigUpdatedAt;x(R);let _=new Date(T);r(T),t({url:Wn}).then(M=>{let C=M,z=C.minVersion,P=w;i(C);let U=C.latestVersion;if(U&&(Er(P,U)?h(!0):h(!1)),Er(P,z)){let F=C.buildinConfigUpdatedAt;new Date(F)>_?(l(!0),S()):l(!1)}else m(!0),l(null)}).catch(M=>{l(null),c(M.message)})})},[]),ze(()=>{Xn().then(R=>{x(R)})},[n]),b?D("div",{class:"text-sm mt-2",style:{maxWidth:218},children:u?D(Rh,{handleSyncing:S,message:u,date:n||""}):g?D(Ph,{minVersion:o.minVersion}):s===null||s===!0?null:f?D(Mh,{date:n}):null}):null}function li(e){let t=Fa(),{onTranslateTheMainPage:n,onUserConfigChange:r,request:a,onSetBuildinConfig:o,pageStatus:i,config:s,onTranslateTheWholePage:l,openOptionsPage:u,ontranslateToThePageEndImmediately:c,onSetPageLanguage:f,onToggleTranslate:d,onTranslateLocalPdfFile:g,onTranslatePdf:m,onRestorePage:b,ctx:x,currentUrl:p,currentLang:h,onClose:w,onTranslatePage:S,onSetLocalConfig:R}=e,T=r,[_,M]=le(""),[C,z]=le(""),{t:P}=Lt(),U=null,F=null,J=null,X=null,Re=null,Je=null,Se=null,ce=null,ue=null,pe=null,v=null,I=null;if(s){let{translationService:E,translationServices:$,translationUrlPattern:V}=s;if(Dn[E]&&(ce=$s(E,x)),$&&$[E]?I=$[E]||{}:I={},p&&Yg(p)){ue=new URL(p),pe=Xg(ue.hostname),v=Qg(p);let{matches:k,excludeMatches:K}=V;F=k.includes(pe),U=k.includes(ue.hostname),X=K.includes(pe),J=K.includes(ue.hostname),Je=k.includes(v),Se=K.includes(v)}}if(s&&h&&h!=="auto"){let{translationLanguagePattern:E}=s,{matches:$}=E;$.includes(h)?Re=!0:Re=!1}let H=E=>{E.preventDefault(),u(),w()},ae=E=>{T($=>($.alpha?M("Success disable alpha!"):M("Success enable alpha!"),{...$,alpha:!$.alpha}))},G=()=>{T(E=>({...E,translationArea:"body"})),l()},Ee=()=>{T(E=>({...E,translationArea:"main"})),n()},ye=(E,$,V,k)=>{if(E==="default"){T(he=>{let de={...he.translationUrlPattern};return{...he,translationUrlPattern:{...he.translationUrlPattern,matches:Pt([ue?.hostname,pe,p],de.matches),excludeMatches:Pt([ue?.hostname,pe,p],de.excludeMatches)}}});return}let K=E,ke=K==="matches"?"excludeMatches":"matches";ue&&T(he=>{let de={...he.translationUrlPattern};return de[K]=yo($,de[K]),k.length>0&&(de[K]=Pt(k,de[K])),de[ke]=Pt(V,de[ke]),{...he,translationUrlPattern:{...he.translationUrlPattern,...de}}}),K==="matches"&&i==="Original"?setTimeout(()=>{S(),w()},100):K==="excludeMatches"&&i==="Translated"&&setTimeout(()=>{b(),w()},100)},Ie=E=>{if(!E){T(k=>{let K={...k.translationLanguagePattern};return{...k,translationLanguagePattern:{...k.translationLanguagePattern,matches:Pt(h,K.matches),excludeMatches:Pt(h,K.excludeMatches)}}});return}let $=E,V=$==="matches"?"excludeMatches":"matches";h&&T(k=>{let K={...k.translationLanguagePattern};return K[$]=yo(h,K[$]),K[V]=Pt(h,K[V]),{...k,translationLanguagePattern:{...k.translationLanguagePattern,...K}}}),$==="matches"&&i==="Original"&&setTimeout(()=>{S(),w()},100)},xe=ue?.pathname.toLowerCase().endsWith(".pdf"),Q=P("translate");i==="Translated"?Q=P("show-original"):i==="Original"?xe?sl()&&ue.protocol==="file:"?Q=P("translate-firefox-local-pdf"):Q=P("translate-pdf"):Q=P("translate"):Q=P(i);let oe=P("translateToThePageEndImmediately");(i==="Original"||i==="Translated")&&(s.shortcuts.toggleTranslatePage&&(il()&&x.rule.fingerCountToToggleTranslagePageWhenTouching>=2?Q+=` (${P(`fingers.${x.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:Q+=` (${s.shortcuts.toggleTranslatePage})`),s.shortcuts.toggleTranslateToThePageEndImmediately&&(oe+=` (${s.shortcuts.toggleTranslateToThePageEndImmediately})`));let se=[];x&&(se=_g(x));let B=E=>{E.preventDefault(),w()};return D("div",{class:"p-3",children:[D("div",{class:"text-sm",children:[D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:[P("popupSourceLanguage"),"\uFF1A"]}),D(zt,{items:kt.map(E=>({label:Oa(E,s.interfaceLanguage),value:E,selected:E===h,onSelected:$=>{f($.value)}}))})]}),s&&s.targetLanguage&&D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:[P("popupTarget"),"\uFF1A"]}),D(zt,{items:kt.filter(E=>E!=="auto").map(E=>({label:Oa(E,s.interfaceLanguage),value:E,selected:E===s.targetLanguage,onSelected:$=>{T(V=>({...V,targetLanguage:$.value}))}}))})]}),ce&&se.length>0&&D(ht,{children:[D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:[P("popupService"),"\uFF1A"]}),D(zt,{items:se.map(E=>({label:`${P("translationServices."+E.id)}${E.ok?"":" "+P("needAction")}`,value:E.id,selected:E.selected,onSelected:$=>{let V=se.find(k=>k.id===$.value);V.ok?(T(k=>({...k,translationService:V.id})),V.props.length===0?setTimeout(()=>{S()},1):setTimeout(()=>{b()},1)):(T(k=>({...k,translationService:V.id})),setTimeout(()=>{b()},1),setTimeout(()=>{u(),w()},100))}}))})]}),I&&ce.props.length>0&&ce.props.map((E,$)=>D("div",{class:"pl-4 text-sm",children:D(si,{field:E,value:I[E.name],onChange:V=>{T(k=>{let K=k.translationServices||{},ke=K[ce.id]||{};return setTimeout(()=>{b()},1),{...k,translationServices:{...K,[ce.id]:{...ke,[E.name]:V}}}})}},"field-"+$)}))]}),ue&&D("div",{class:"flex justify-between mb-2",children:[D("label",{class:"inline-block",children:P("forThisSite")}),D(zt,{items:[{label:P("default"),value:"default",selected:U===!1&&J===!1&&!F&&!X&&!Je&&!Se,onSelected:()=>{ye("default",ue.hostname,[],[]);let E=ue.hostname,$=x.localConfig.tempTranslationUrlMatches||[],V=$.filter(K=>K.match!==E),k=!1;V.length!==$.length&&(k=!0),k&&R({...x.localConfig,tempTranslationUrlMatches:[...V]})}},v&&{label:P("alwaysTranslateSomeSite",{hostname:P("currentUrl")}),value:"matchesUrl",selected:Je,onSelected:()=>{ye("matches",v,[v],[])}},{label:P("alwaysTranslateSomeSite",{hostname:ue.hostname}),value:"matches",selected:U,onSelected:E=>{ye(E.value,ue.hostname,[ue.hostname,pe,v],[pe])}},pe&&{label:P("alwaysTranslateSomeSite",{hostname:pe}),value:"matchesWild",selected:F,onSelected:()=>{ye("matches",pe,[v,ue.hostname,pe],[ue.hostname])}},v&&{label:P("neverTranslateSomeSite",{hostname:P("currentUrl")}),value:"excludeMatchesUrl",selected:Se,onSelected:()=>{ye("excludeMatches",v,[v],[])}},{label:P("neverTranslateSomeSite",{hostname:ue.hostname}),value:"excludeMatches",selected:J,onSelected:E=>{ye(E.value,ue.hostname,[ue.hostname,pe,v],[pe])}},pe&&{label:P("neverTranslateSomeSite",{hostname:pe}),value:"excludeMatchesWild",selected:X,onSelected:()=>{ye("excludeMatches",pe,[ue.hostname,v,pe],[ue.hostname])}}].filter(Boolean)})]})]}),D("div",{class:"",children:D("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{xe?m&&m():d()},"aria-busy":i==="Translating",disabled:i==="Translating",children:Q})}),D("div",{class:"flex justify-between",children:[h&&h!=="auto"?D("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[D("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!Re,onChange:E=>{let $=E.target.checked;Ie($?"matches":void 0)}}),P("alwaysTranslateSomeLanguage",{language:Oa(h,s.interfaceLanguage)})]}):D("span",{}),D(oi,{label:P("more"),showArrow:!0,onSelected:E=>{E.value==="translateTheWholePage"?l():E.value==="translateToThePageEndImmediately"?c():E.value==="translateTheMainPage"?n():E.value==="showTranslationOnly"||(E.value==="translateLocalPdfFile"?g&&g():E.value==="donate"?(globalThis.open(s.donateUrl),w()):E.value==="feedback"?(globalThis.open(s.feedbackUrl),w()):E.value==="options"?(u(),w()):E.value==="changeToTranslateTheWholePage"?G():E.value==="changeToTranslateTheMainPage"&&Ee())},menus:[s.translationArea==="main"&&{label:P("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},s.translationArea==="body"&&{label:P("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:oe,value:"translateToThePageEndImmediately"},!fe()&&{label:P("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2615\uFE0F "+P("sponsorLabel"),value:"donate"},{label:"\u{1F41B} "+P("feedback"),value:"feedback"},{label:"\u2699\uFE0F "+P("browser.openOptionsPage"),value:"options"}].filter(Boolean)})]}),D("div",{class:"text-sm",children:_}),D("div",{class:"text-sm",children:C}),D("footer",{children:[D(ii,{request:a,setStorageBuildinConfig:o}),D("div",{class:"mt-3 text-sm flex justify-between",children:[D("a",{href:"#",class:"secondary",onClick:H,children:P("options")}),fe()&&D("a",{href:"#",class:"secondary",onClick:B,children:P("close")}),D("span",{class:"immersive-translate-no-select muted",onClick:Jg(7)(ae),children:["V",t]})]})]})]})}var ci={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return Y.storage[n].get(r)},set:(e,t,n)=>Y.storage[n].set({[e]:t})};function Ba(e,t,n){let[r]=le(()=>typeof t=="function"?t():t),[a]=le(n),[o,i]=le(r),[s,l]=le(!0),[u,c]=le("");ze(()=>{ci.get(e,r,a).then(d=>{d[e]&&i(d[e]),l(!0),c("")}).catch(d=>{l(!1),c(d)})},[e,r,a]);let f=nr(d=>{let g=typeof d=="function"?d(o):d;O.debug("new settings",g),ci.set(e,g,a).then(()=>{i(g),l(!0),c("")}).catch(m=>{i(g),l(!1),c(m)})},[a,e,o]);return[o,f,s,u]}function ui(e,t,n){let r=[];return function(){let[o,i,s,l]=Ba(e,t,n),u=nr(c=>{for(let f of r)f(c)},[]);return ze(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[o,u,s,l]}}function Zg(e,t){return ui(e,t,"sync")}var Dh="userConfig",Oh={},ef=Zg(Dh,Oh);function gi(e){let{onClose:t}=e,[n,r]=le("Original"),[a,o,i,s]=ef(),[l,u]=le(null),[c,f]=le(globalThis.location.href),[d,g]=le("auto"),[m,b]=le(null),x=M=>{r(M.detail)},p=M=>{g(M);let C=Gg(c,M,l.sourceLanguageUrlPattern);o(z=>({...z,sourceLanguageUrlPattern:C})),It(M)},h=()=>{f(globalThis.location.href)};ze(()=>(document.addEventListener(Ar,x,!1),Ge().then(M=>{u(M);let C=Ft();g(C);let z=Qe();r(z),Na(M.interval)}),document.addEventListener("urlChange",h),()=>{document.removeEventListener("pageTranslatedStatus",x),document.removeEventListener("urlChange",h)}),[]),ze(()=>{Ge().then(M=>{u(M)})},[a]),ze(()=>{c&&l&&Ct({url:c,config:l}).then(M=>{b(M)})},[c,l]);let w=(M,C)=>()=>{Ia({method:M}),C&&t()},S=()=>{t()},R=()=>{globalThis.alert("Not implemented yet"),t()},T=()=>{globalThis.alert("Not implemented yet"),t()},_=()=>{xa(),t()};return!l||!m?null:D(li,{request:ee,onClose:S,onTranslateTheWholePage:w("translateTheWholePage",!0),openOptionsPage:_,onToggleTranslate:w("toggleTranslatePage",!0),onTranslateTheMainPage:w("translateTheMainPage",!0),ontranslateToThePageEndImmediately:w("translateToThePageEndImmediately",!0),onTranslatePage:w("translatePage",!0),onRestorePage:w("restorePage",!1),onTranslatePdf:R,onTranslateLocalPdfFile:T,onSetPageLanguage:p,onUserConfigChange:o,config:l,pageStatus:n,ctx:m,currentUrl:c,currentLang:d,onSetLocalConfig:ya,onSetBuildinConfig:cu})}function Nh(e,t){for(let n of t)e.appendChild(document.createElement("style")).innerHTML=n}var qe={position:"right",right:0,top:335},ja=!1,gn=null,xt=null,Wa=null,fi=null,Fn=null,di=null,tf=6,$a,Ua,rf=null,af=null;async function pi(){let e=vt();di=await lu(),qe=di.pagePopupConfig||qe;let t=document.createElement("div");t.id="immersive-translate-popup",t.setAttribute("style","all: initial"),document.documentElement.appendChild(t);let n=t.attachShadow({mode:"open"});fi=n;let r=[e.IMMERSIVE_TRANSLATE_PICO_CSS,e.IMMERSIVE_TRANSLATE_COMMON_CSS,e.IMMERSIVE_TRANSLATE_POPUP_CSS];Nh(n,r);let a=document.createElement("div");a.innerHTML=e.IMMERSIVE_TRANSLATE_POPUP_HTML,n.appendChild(a),gn=n.querySelector("#immersive-translate-popup-container");let i=n.querySelector("#immersive-translate-popup-btn");xt=i,Wa=n.querySelector("#mount"),gn.setAttribute("style",mi(qe)),xi(),i.addEventListener("mousedown",of),i.addEventListener("touchstart",Hh),globalThis.addEventListener("resize",l=>{gn.setAttribute("style",mi(qe))})}function Ih(){Yr(null,Wa),Wa.style.display="none",xt.style.display="block",Fn=setTimeout(()=>{xi(!0)},2e3)}function nf(e){let t=e.querySelector("#mount"),n=()=>{Ih()},r=a=>{a&&a.target&&a.target.id==="immersive-translate-popup-overlay"&&n()};(async()=>{let a=await Ge();Yr(D(Kg,{lang:a.interfaceLanguage,fallbackLang:"zh-CN",translations:$g,children:D("div",{onClick:r,id:"immersive-translate-popup-overlay",class:"immersive-translate-popup-overlay",children:D("div",{class:"immersive-translate-popup-wrapper",style:Fh(),children:D(gi,{onClose:n})})})}),t)})().then(()=>{xt.style.display="none",Wa.style.display="block"})}function Fh(){let e=hi(),t=e.height,{position:n,top:r,left:a}=qe,o={position:"fixed"},i=300,s=300,l=100;return n==="right"||n==="left"?(o.top=r-l,o.top+i>=t?(o.bottom=30,delete o.top):o.top<=10&&(o.top=10),n==="right"?o.right=0:n==="left"&&(o.left=0)):(n==="top"||n==="bottom")&&(o.left=a-l,o.left+s>=e.width?(o.right=0,delete o.left):o.left<=10&&(o.left=0),n==="top"?o.top=0:n==="bottom"&&(o.bottom=0)),o}function hi(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function of(e){af=gn.getAttribute("style"),$a=e.pageX,Ua=e.pageY,Fn&&clearTimeout(Fn),ja=!1,xt.style.opacity="1",xt.style.transform="none",rf=xt.getAttribute("style"),globalThis.addEventListener("mousemove",bi),globalThis.addEventListener("mouseup",yi),globalThis.addEventListener("touchmove",sf),globalThis.addEventListener("touchend",za),globalThis.addEventListener("touchcancel",za)}function Hh(e){e.preventDefault&&e.preventDefault(),of(e.changedTouches[0])}function sf(e){bi(e.changedTouches[0])}function za(e){e.preventDefault&&e.preventDefault(),yi(e.changedTouches[0])}function bi(e){e.preventDefault&&e.preventDefault(),ja=!0,gn.setAttribute("style",`left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`)}function yi(e){e.preventDefault&&e.preventDefault(),$h(),Fn&&clearTimeout(Fn),$a=$a||0,Ua=Ua||0;let t=Math.abs(e.pageX-$a),n=Math.abs(e.pageY-Ua);t<tf&&n<tf?(gn.setAttribute("style",af),xt.setAttribute("style",rf),nf(fi)):ja?Bh(e):nf(fi),ja=!1}function Bh(e){let t=hi(),n=e.clientX,r=e.clientY,a=r,o=t.height-r,i=n,s=t.width-n;a<o&&a<i&&a<s?qe={position:"top",left:n,top:0}:o<a&&o<i&&o<s?qe={position:"bottom",bottom:0,left:e.clientX}:i<a&&i<o&&i<s?qe={position:"left",left:0,top:e.clientY}:s<a&&s<o&&s<i&&(qe={position:"right",right:0,top:e.clientY});let l=mi(qe);gn.setAttribute("style",l),ya({...di,pagePopupConfig:qe}),Fn=setTimeout(()=>{xi(!0)},2e3)}function xi(e=!1){xt.style.opacity="0.4";let t="";qe.position==="left"?t="translateX(-40%)":qe.position==="right"?t="translateX(40%)":qe.position==="top"?t="translateY(-40%)":qe.position==="bottom"&&(t="translateY(40%)"),xt.style.transform=t,e&&(xt.style.transition="transform 0.2s ease-in-out, opacity 0.2s ease-in-out")}function $h(){globalThis.removeEventListener("mousemove",bi),globalThis.removeEventListener("mouseup",yi),globalThis.removeEventListener("touchmove",sf),globalThis.removeEventListener("touchend",za),globalThis.removeEventListener("touchcancel",za)}function mi(e){let t=Uh(e);return Object.keys(t).map(n=>typeof t[n]=="number"?`${n}:${t[n]}px;`:"").join("")}function Uh(e){let{position:t,...n}=e,r=hi(),a={};return t==="left"?(a.left=0,n.top>r.height?a.top=r.height-100:a.top=n.top):t==="right"?(a.right=0,n.top>r.height?a.top=r.height-100:a.top=n.top):t==="top"?(a.top=0,n.left>r.width?a.left=r.width-100:a.left=n.left):t==="bottom"&&(a.bottom=0,n.left>r.width?a.left=r.width-100:a.left=n.left),a}var qa=!1;async function lf(){let e=await Ge(),t={url:globalThis.location.href,config:e},n=await Ct(t);e.debug&&O.setLevel("debug"),globalThis.document.addEventListener(At,r=>{qa||(qa=!0,pi().catch(a=>{O.error("init popup error",a)}))}),n.isTranslateExcludeUrl?O.debug("detect exclude url, do not inject anything."):(Br().any||fe())&&n.rule.isShowUserscriptPagePopup&&(qa||(qa=!0,pi().catch(r=>{O.error("init popup error",r)})))}var jh=e=>document.head.appendChild(document.createElement("style")).innerHTML=e;function cf(){let t=vt().IMMERSIVE_TRANSLATE_INJECTED_CSS;t&&jh(t)}var uf={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.2.31",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["content_script.js"],css:["styles/inject.css"],run_at:"document_end",all_frames:!0}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleTranslateToThePageEndImmediately:{suggested_key:{default:"Alt+S"},description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html"},icons:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};async function gf(){let e=await Ge(),t=await Ct({config:e,url:We()});if(t.isTranslateExcludeUrl&&Wg())O.debug("detect web options page"),qg();else if(Ug(t),fe()?(cf(),Vg(e),Wh(e)):au(),e.debug?O.setLevel("debug"):O.setLevel("info"),globalThis.top!=globalThis.self||await lf().catch(a=>{O.error(`init popup page error: ${a}`)}),!t.isTranslateExcludeUrl){if(t.rule.isPdf){let a=!1;globalThis.PDFViewerApplication&&globalThis.PDFViewerApplication.initializedPromise.then(()=>{let o=globalThis.PDFViewerApplication;o.eventBus.on("pagesdestroy",()=>{Ht()}),o.eventBus.on("textlayerrendered",async()=>{a||(a=!0,await Da())}),o.eventBus.on("fileinputchange",()=>{a=!1})})}else await Da();jg()}}function Wh(e){if(fe()&&typeof GM<"u"&&GM&&GM.registerMenuCommand){let t=uf.commands,a=[...Object.keys(t).filter(o=>o==="toggleTranslatePage").map(o=>{let i=t[o].description,s=i;return i.startsWith("__MSG_")&&i.endsWith("__")&&(s=ti(`browser.${i.slice(6,-2)}`,e.interfaceLanguage)),{id:o,title:s}}),{id:Ya,title:ti("browser.openOptionsPage",e.interfaceLanguage),key:"o"}];for(let o of a)GM.registerMenuCommand(o.title,()=>{o.id===Ya?xa():zh({method:o.id})},o.key)}}function zh(e){rn(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(n=>{O.error("send content message request failed",e,n)});let t=new CustomEvent(At,{detail:e});globalThis.document.dispatchEvent(t)}var _r={capture:!0,once:!0,passive:!0},mf=()=>document.readyState==="interactive"||document.readyState==="complete",qh=e=>document.readyState===e,Cr=(e,t)=>qh(e)||mf()?(t(e),!0):!1,Vh=()=>new Promise(e=>{Cr("loading",e)||document.addEventListener("readystatechange",()=>{document.readyState==="loading"&&e("loading")},_r)}),Kh=()=>new Promise(e=>{Cr("interactive",e)||document.addEventListener("readystatechange",()=>{document.readyState==="interactive"&&e("interactive")},_r)}),Gh=()=>new Promise(e=>{Cr("complete",e)||document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&e("complete")},_r)}),ff=()=>new Promise(e=>{Cr("domready",e)||document.addEventListener("DOMContentLoaded",()=>{e("domready")},_r)}),df=()=>new Promise(e=>{Cr("load",e)||window.addEventListener("load",()=>{e("load")},_r)}),pf={};Object.defineProperties(pf,{state:{get:function(){return document.readyState}},loading:{get:function(){return Vh()}},interactive:{get:function(){return Kh()}},complete:{get:function(){return Gh()}},window:{get:function(){return df()}},load:{get:function(){return df()}},domready:{get:function(){return ff()}},dom:{get:function(){return ff()}},ready:{get:function(){return mf()}}});var hf=pf;var bf={NOT_FUNCTION:"Your executor is not a function. functions and promises are valid.",FAILED_TO_WAIT:"Failed to wait"};function Jh(e){return async()=>await e()}function Yh(e){if(typeof e!="function")throw new Error(bf.NOT_FUNCTION)}var Ti=class{constructor({interval:t=100,timeout:n=1e3,stopOnFailure:r=!1,verbose:a=!1,backoffFactor:o=1,backoffMaxInterval:i,message:s=""}={}){this._interval=t,this._timeout=n,this._stopOnFailure=r,this._isWaiting=!1,this._isResolved=!1,this._verbose=a,this._userMessage=s,this.originalStacktraceError=new Error,this._Console=console,this._backoffFactor=o,this._backoffMaxInterval=i||n,this.start=+Date.now()}tryEvery(t){return this._interval=t,this}stopAfter(t){return this._timeout=t,this}execute(t){return this._applyPromiseHandlers(),Yh(t),this._executeFn=Jh(t),this.start=Date.now(),this._isWaiting=!0,this._log("starting to execute"),this._runFunction(),this.promise}getPromise(){return this.promise}isResolved(){return this._isResolved}isWaiting(){return this._isWaiting}stopOnFailure(t){return this._stopOnFailure=t,this}_applyPromiseHandlers(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}_timeFromStart(){return Date.now()-this.start}_shouldStopTrying(){return this._timeFromStart()>this._timeout}_executeAgain(){this._log("executing again");let t=this._interval,n=t*this._backoffFactor;this._interval=n>this._backoffMaxInterval?this._backoffMaxInterval:n,setTimeout(this._runFunction.bind(this),t)}_failedToWait(){let t=`${bf.FAILED_TO_WAIT} after ${this._timeFromStart()}ms`;if(this._userMessage&&(t=`${t}: ${this._userMessage}`),this._lastError){this._lastError.message=`${t}
${this._lastError.message}`;let n=this.originalStacktraceError.stack;n&&(this._lastError.stack+=n.substring(n.indexOf(`
`)+1))}else this._lastError=this.originalStacktraceError,this._lastError.message=t;return this._log(this._lastError),this._lastError}_runFunction(){if(this._shouldStopTrying()){this._isWaiting=!1,this.reject?.(this._failedToWait());return}this._executeFn().then(t=>{if(t===!1){this._log(`then execute again with result: ${t}`),this._executeAgain();return}this.resolve?.(t),this._isWaiting=!1,this._isResolved=!0,this._log(`then done waiting with result: ${t}`)}).catch(t=>this._stopOnFailure?(this._log(`stopped on failure with err: ${t}`),this.reject?.(t)):(this._lastError=t,this._log(`catch with err: ${t}`),this._executeAgain()))}_log(t){this._verbose&&this._Console&&this._Console.log&&this._Console.log(t)}},yf=(e,t)=>new Ti(t).execute(e);async function xf(){try{return await yf(()=>{let e=en(document.body);if(e&&e.length>=10)return!0;throw new Error("there is no main text")},{timeout:1e4}),!0}catch(e){throw e}}hf.domready.then(()=>{xf().then(()=>{gf().catch(e=>{e&&O.error("translate page error",e.name,e.message,e.details||"",e)})}).catch(e=>{O.debug("can not detect a valid body: ",e)})}).catch(e=>{e&&O.error("translate dom ready detect error",e)});
