var Bu=Object.defineProperty;var ju=(e,t)=>{for(var n in t)Bu(e,n,{get:t[n],enumerable:!0})};var y={BUILD_TIME:"2023-01-24T11:08:42.792Z",VERSION:"0.2.20",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};function an(){let e,t="pending",n=new Promise((r,o)=>{e={async resolve(a){await a,t="fulfilled",r(a)},reject(a){t="rejected",o(a)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var ga=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function or(e,t){let n=an(),r=setTimeout(()=>n.reject(new ga),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function Ln(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((o,a)=>{let i=()=>{clearTimeout(l),a(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{n?.removeEventListener("abort",i),o()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var Es=class{#e=0;#t=[];#n=[];#r=an();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=an()}}[Symbol.asyncIterator](){return this.iterate()}};var Ve={};ju(Ve,{bgBlack:()=>bf,bgBlue:()=>wf,bgBrightBlack:()=>Lf,bgBrightBlue:()=>Pf,bgBrightCyan:()=>Af,bgBrightGreen:()=>Cf,bgBrightMagenta:()=>Mf,bgBrightRed:()=>_f,bgBrightWhite:()=>Rf,bgBrightYellow:()=>kf,bgCyan:()=>Sf,bgGreen:()=>Tf,bgMagenta:()=>vf,bgRed:()=>yf,bgRgb24:()=>If,bgRgb8:()=>Df,bgWhite:()=>Ef,bgYellow:()=>xf,black:()=>ef,blue:()=>af,bold:()=>Ku,brightBlack:()=>Cs,brightBlue:()=>df,brightCyan:()=>mf,brightGreen:()=>ff,brightMagenta:()=>pf,brightRed:()=>uf,brightWhite:()=>hf,brightYellow:()=>gf,cyan:()=>sf,dim:()=>Gu,getColorEnabled:()=>qu,gray:()=>cf,green:()=>nf,hidden:()=>Qu,inverse:()=>Xu,italic:()=>Ju,magenta:()=>of,red:()=>tf,reset:()=>Vu,rgb24:()=>Of,rgb8:()=>Nf,setColorEnabled:()=>zu,strikethrough:()=>Zu,stripColor:()=>Hf,underline:()=>Yu,white:()=>lf,yellow:()=>rf});var{Deno:Ls}=globalThis,_s=typeof Ls?.noColor=="boolean"?Ls.noColor:!0,da=!_s;function zu(e){_s||(da=e)}function qu(){return da}function O(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function I(e,t){return da?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Vu(e){return I(e,O([0],0))}function Ku(e){return I(e,O([1],22))}function Gu(e){return I(e,O([2],22))}function Ju(e){return I(e,O([3],23))}function Yu(e){return I(e,O([4],24))}function Xu(e){return I(e,O([7],27))}function Qu(e){return I(e,O([8],28))}function Zu(e){return I(e,O([9],29))}function ef(e){return I(e,O([30],39))}function tf(e){return I(e,O([31],39))}function nf(e){return I(e,O([32],39))}function rf(e){return I(e,O([33],39))}function af(e){return I(e,O([34],39))}function of(e){return I(e,O([35],39))}function sf(e){return I(e,O([36],39))}function lf(e){return I(e,O([37],39))}function cf(e){return Cs(e)}function Cs(e){return I(e,O([90],39))}function uf(e){return I(e,O([91],39))}function ff(e){return I(e,O([92],39))}function gf(e){return I(e,O([93],39))}function df(e){return I(e,O([94],39))}function pf(e){return I(e,O([95],39))}function mf(e){return I(e,O([96],39))}function hf(e){return I(e,O([97],39))}function bf(e){return I(e,O([40],49))}function yf(e){return I(e,O([41],49))}function Tf(e){return I(e,O([42],49))}function xf(e){return I(e,O([43],49))}function wf(e){return I(e,O([44],49))}function vf(e){return I(e,O([45],49))}function Sf(e){return I(e,O([46],49))}function Ef(e){return I(e,O([47],49))}function Lf(e){return I(e,O([100],49))}function _f(e){return I(e,O([101],49))}function Cf(e){return I(e,O([102],49))}function kf(e){return I(e,O([103],49))}function Pf(e){return I(e,O([104],49))}function Mf(e){return I(e,O([105],49))}function Af(e){return I(e,O([106],49))}function Rf(e){return I(e,O([107],49))}function Tt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function Nf(e,t){return I(e,O([38,5,Tt(t)],39))}function Df(e,t){return I(e,O([48,5,Tt(t)],49))}function Of(e,t){return typeof t=="number"?I(e,O([38,2,t>>16&255,t>>8&255,t&255],39)):I(e,O([38,2,Tt(t.r),Tt(t.g),Tt(t.b)],39))}function If(e,t){return typeof t=="number"?I(e,O([48,2,t>>16&255,t>>8&255,t&255],49)):I(e,O([48,2,Tt(t.r),Tt(t.g),Tt(t.b)],49))}var Ff=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Hf(e){return e.replace(Ff,"")}function sr(e,t){let n=null,r=null,o=(...a)=>{o.clear(),r=()=>{o.clear(),e.call(o,...a)},n=setTimeout(r,t)};return o.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},o.flush=()=>{r?.()},Object.defineProperty(o,"pending",{get:()=>typeof n=="number"}),o}var gr,H,Rs,$f,_n,ks,Ns,cr={},Ds=[],Uf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function xt(e,t){for(var n in t)e[n]=t[n];return e}function Os(e){var t=e.parentNode;t&&t.removeChild(e)}function Is(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?gr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return ir(e,i,r,o,null)}function ir(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Rs};return o==null&&H.vnode!=null&&H.vnode(a),a}function ct(e){return e.children}function lr(e,t){this.props=e,this.context=t}function on(e,t){if(t==null)return e.__?on(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?on(e):null}function Fs(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Fs(e)}}function pa(e){(!e.__d&&(e.__d=!0)&&_n.push(e)&&!ur.__r++||ks!==H.debounceRendering)&&((ks=H.debounceRendering)||setTimeout)(ur)}function ur(){for(var e;ur.__r=_n.length;)e=_n.sort(function(t,n){return t.__v.__b-n.__v.__b}),_n=[],e.some(function(t){var n,r,o,a,i,s;t.__d&&(i=(a=(n=t).__v).__e,(s=n.__P)&&(r=[],(o=xt({},a)).__v=a.__v+1,ma(s,a,o,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[i]:null,r,i??on(a),a.__h),Bs(r,a),a.__e!=i&&Fs(a)))})}function Hs(e,t,n,r,o,a,i,s,l,u){var c,g,d,f,m,T,h,p=r&&r.__k||Ds,b=p.length;for(n.__k=[],c=0;c<t.length;c++)if((f=n.__k[c]=(f=t[c])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?ir(null,f,null,null,f):Array.isArray(f)?ir(ct,{children:f},null,null,null):f.__b>0?ir(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(d=p[c])===null||d&&f.key==d.key&&f.type===d.type)p[c]=void 0;else for(g=0;g<b;g++){if((d=p[g])&&f.key==d.key&&f.type===d.type){p[g]=void 0;break}d=null}ma(e,f,d=d||cr,o,a,i,s,l,u),m=f.__e,(g=f.ref)&&d.ref!=g&&(h||(h=[]),d.ref&&h.push(d.ref,null,f),h.push(g,f.__c||m,f)),m!=null?(T==null&&(T=m),typeof f.type=="function"&&f.__k===d.__k?f.__d=l=$s(f,l,e):l=Us(e,f,d,p,m,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=on(d))}for(n.__e=T,c=b;c--;)p[c]!=null&&(typeof n.type=="function"&&p[c].__e!=null&&p[c].__e==n.__d&&(n.__d=on(r,c+1)),Ws(p[c],p[c]));if(h)for(c=0;c<h.length;c++)js(h[c],h[++c],h[++c])}function $s(e,t,n){for(var r,o=e.__k,a=0;o&&a<o.length;a++)(r=o[a])&&(r.__=e,t=typeof r.type=="function"?$s(r,t,n):Us(n,r,r,o,r.__e,t));return t}function Us(e,t,n,r,o,a){var i,s,l;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),i=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==o)break e;e.insertBefore(o,a),i=a}return i!==void 0?i:o.nextSibling}function Bf(e,t,n,r,o){var a;for(a in n)a==="children"||a==="key"||a in t||fr(e,a,null,n[a],r);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||fr(e,a,t[a],n[a],r)}function Ps(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Uf.test(t)?n:n+"px"}function fr(e,t,n,r,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ps(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Ps(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r||e.addEventListener(t,a?As:Ms,a):e.removeEventListener(t,a?As:Ms,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ms(e){this.l[e.type+!1](H.event?H.event(e):e)}function As(e){this.l[e.type+!0](H.event?H.event(e):e)}function ma(e,t,n,r,o,a,i,s,l){var u,c,g,d,f,m,T,h,p,b,x,L,$,z=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(u=H.__b)&&u(t);try{e:if(typeof z=="function"){if(h=t.props,p=(u=z.contextType)&&r[u.__c],b=u?p?p.props.value:u.__:r,n.__c?T=(c=t.__c=n.__c).__=c.__E:("prototype"in z&&z.prototype.render?t.__c=c=new z(h,b):(t.__c=c=new lr(h,b),c.constructor=z,c.render=Wf),p&&p.sub(c),c.props=h,c.state||(c.state={}),c.context=b,c.__n=r,g=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),z.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=xt({},c.__s)),xt(c.__s,z.getDerivedStateFromProps(h,c.__s))),d=c.props,f=c.state,g)z.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(z.getDerivedStateFromProps==null&&h!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(h,b),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(h,c.__s,b)===!1||t.__v===n.__v){c.props=h,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(F){F&&(F.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(h,c.__s,b),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,f,m)})}if(c.context=b,c.props=h,c.__v=t,c.__P=e,x=H.__r,L=0,"prototype"in z&&z.prototype.render)c.state=c.__s,c.__d=!1,x&&x(t),u=c.render(c.props,c.state,c.context);else do c.__d=!1,x&&x(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++L<25);c.state=c.__s,c.getChildContext!=null&&(r=xt(xt({},r),c.getChildContext())),g||c.getSnapshotBeforeUpdate==null||(m=c.getSnapshotBeforeUpdate(d,f)),$=u!=null&&u.type===ct&&u.key==null?u.props.children:u,Hs(e,Array.isArray($)?$:[$],t,n,r,o,a,i,s,l),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),T&&(c.__E=c.__=null),c.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=jf(n.__e,t,n,r,o,a,i,l);(u=H.diffed)&&u(t)}catch(F){t.__v=null,(l||a!=null)&&(t.__e=s,t.__h=!!l,a[a.indexOf(s)]=null),H.__e(F,t,n)}}function Bs(e,t){H.__c&&H.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){H.__e(r,n.__v)}})}function jf(e,t,n,r,o,a,i,s){var l,u,c,g=n.props,d=t.props,f=t.type,m=0;if(f==="svg"&&(o=!0),a!=null){for(;m<a.length;m++)if((l=a[m])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,a[m]=null;break}}if(e==null){if(f===null)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),a=null,s=!1}if(f===null)g===d||s&&e.data===d||(e.data=d);else{if(a=a&&gr.call(e.childNodes),u=(g=n.props||cr).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!s){if(a!=null)for(g={},m=0;m<e.attributes.length;m++)g[e.attributes[m].name]=e.attributes[m].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(Bf(e,d,g,o,s),c)t.__k=[];else if(m=t.props.children,Hs(e,Array.isArray(m)?m:[m],t,n,r,o&&f!=="foreignObject",a,i,a?a[0]:n.__k&&on(n,0),s),a!=null)for(m=a.length;m--;)a[m]!=null&&Os(a[m]);s||("value"in d&&(m=d.value)!==void 0&&(m!==e.value||f==="progress"&&!m||f==="option"&&m!==g.value)&&fr(e,"value",m,g.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==e.checked&&fr(e,"checked",m,g.checked,!1))}return e}function js(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){H.__e(r,n)}}function Ws(e,t,n){var r,o;if(H.unmount&&H.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||js(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){H.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Ws(r[o],t,typeof e.type!="function");n||e.__e==null||Os(e.__e),e.__=e.__e=e.__d=void 0}function Wf(e,t,n){return this.constructor(e,n)}function ha(e,t,n){var r,o,a;H.__&&H.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],ma(t,e=(!r&&n||t).__k=Is(ct,null,[e]),o||cr,cr,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?gr.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r),Bs(a,e)}function ba(e,t){var n={__c:t="__cC"+Ns++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.some(pa)},this.sub=function(i){o.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}gr=Ds.slice,H={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(s){e=s}throw e}},Rs=0,$f=function(e){return e!=null&&e.constructor===void 0},lr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=xt({},this.state),typeof e=="function"&&(e=e(xt({},n),this.props)),e&&xt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),pa(this))},lr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),pa(this))},lr.prototype.render=ct,_n=[],ur.__r=0,Ns=0;var kn,be,ya,zs,Cn=0,Xs=[],dr=[],qs=H.__b,Vs=H.__r,Ks=H.diffed,Gs=H.__c,Js=H.unmount;function mr(e,t){H.__h&&H.__h(be,e,Cn||t),Cn=0;var n=be.__H||(be.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:dr}),n.__[e]}function ye(e){return Cn=1,zf(ei,e)}function zf(e,t,n){var r=mr(kn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ei(void 0,t),function(a){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,a);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=be,!be.u)){be.u=!0;var o=be.shouldComponentUpdate;be.shouldComponentUpdate=function(a,i,s){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(c){return c.__c});if(l.every(function(c){return!c.__N}))return!o||o.call(this,a,i,s);var u=!1;return l.forEach(function(c){if(c.__N){var g=c.__[0];c.__=c.__N,c.__N=void 0,g!==c.__[0]&&(u=!0)}}),!!u&&(!o||o.call(this,a,i,s))}}return r.__N||r.__}function et(e,t){var n=mr(kn++,3);!H.__s&&Zs(n.__H,t)&&(n.__=e,n.i=t,be.__H.__h.push(n))}function xa(e){return Cn=5,Qs(function(){return{current:e}},[])}function Qs(e,t){var n=mr(kn++,7);return Zs(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Pn(e,t){return Cn=8,Qs(function(){return e},t)}function wa(e){var t=be.context[e.__c],n=mr(kn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(be)),t.props.value):e.__}function qf(){for(var e;e=Xs.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(pr),e.__H.__h.forEach(Ta),e.__H.__h=[]}catch(t){e.__H.__h=[],H.__e(t,e.__v)}}H.__b=function(e){typeof e.type!="function"||e.o||e.type===ct?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),be=null,qs&&qs(e)},H.__r=function(e){Vs&&Vs(e),kn=0;var t=(be=e.__c).__H;t&&(ya===be?(t.__h=[],be.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=dr,n.__N=n.i=void 0})):(t.__h.forEach(pr),t.__h.forEach(Ta),t.__h=[])),ya=be},H.diffed=function(e){Ks&&Ks(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Xs.push(t)!==1&&zs===H.requestAnimationFrame||((zs=H.requestAnimationFrame)||Vf)(qf)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==dr&&(n.__=n.__V),n.i=void 0,n.__V=dr})),ya=be=null},H.__c=function(e,t){t.some(function(n){try{n.__h.forEach(pr),n.__h=n.__h.filter(function(r){return!r.__||Ta(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],H.__e(r,n.__v)}}),Gs&&Gs(e,t)},H.unmount=function(e){Js&&Js(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{pr(r)}catch(o){t=o}}),n.__H=void 0,t&&H.__e(t,n.__v))};var Ys=typeof requestAnimationFrame=="function";function Vf(e){var t,n=function(){clearTimeout(r),Ys&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Ys&&(t=requestAnimationFrame(n))}function pr(e){var t=be,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),be=t}function Ta(e){var t=be;e.__c=e.__(),be=t}function Zs(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ei(e,t){return typeof t=="function"?t(e):t}var Fm=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Gf=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function hr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,o=0,a=0;function i(){let c=Date.now();return c-o>t?(a=1,o=c,0):(a<e?a++:(o+=t,a=1),o-c)}let s=[];function l(){let c=Date.now();if(s.length<e)return s.push(c),0;let g=s.shift()+t;return c>=g?(s.push(c),0):(s.push(g),g-c)}let u=n?l:i;return c=>{let g=function(...d){if(!g.isEnabled)return(async()=>c.apply(this,d))();let f;return new Promise((m,T)=>{f=setTimeout(()=>{m(c.apply(this,d)),r.delete(f)},u()),r.set(f,T)})};return g.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new Gf);r.clear(),s.splice(0,s.length)},g.isEnabled=!0,g}}var va;function Aa(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function si(e,t=","){return e.map(Aa).join(t)}var ii=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function br(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function li(e,t="@media "){return t+mt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function mt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Jf(){}var Me={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function ci(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function ka(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(ci(e),15)<<18}var Yf=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Ra({n:e,i:t,v:n=[]},r,o,a){for(let s of(e&&(e=Aa({n:e,i:t,v:n})),a=[...mt(a)],n)){let l=r.theme("screens",s);for(let u of mt(l&&li(l)||r.v(s))){var i;a.push(u),o|=l?67108864|ka(u):s=="dark"?1073741824:u[0]=="@"?ka(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Yf.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var Na=new Map;function ti(e){if(e.d){let t=[],n=Sa(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?Sa(r,a=>Sa(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):Ea(a,i)}return Ea(i,a)})):r,"&"),r=>Ea(r,e.n?"."+ii(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function Sa(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function Ea(e,t){return e.replace(/&/g,t)}var Xf=new Intl.Collator("en",{numeric:!0});function Qf(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=ui(e[o],t)?n=o+1:r=o}return r}function ui(e,t){let n=e.p&Me.o;return n==(t.p&Me.o)&&(n==Me.b||n==Me.o)?0:e.p-t.p||e.o-t.o||Xf.compare(e.n,t.n)}function La(e,t){return Math.round(parseInt(e,16)*t)}function Zf(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[La(e.substr(1,a),i),La(e.substr(1+a,a),i),La(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function fi(e,t,n,r,o=[]){return function a(i,{n:s,p:l,r:u=[],i:c},g){let d=[],f="",m=0,T=0;for(let b in i||{}){var h,p;let x=i[b];if(b[0]=="@"){if(!x)continue;if(b[1]=="a"){d.push(...gi(s,l,Oa(""+x),g,l,u,c,!0));continue}if(b[1]=="l"){for(let L of mt(x))d.push(...a(L,{n:s,p:(h=Me[b[7]],l&~Me.o|h),r:u,i:c},g));continue}if(b[1]=="i"){d.push(...mt(x).map(L=>({p:-1,o:0,r:[],d:b+" "+L})));continue}if(b[1]=="k"){d.push({p:Me.d,o:0,r:[b],d:a(x,{p:Me.d},g).map(ti).join("")});continue}if(b[1]=="f"){d.push(...mt(x).map(L=>({p:Me.d,o:0,r:[b],d:a(L,{p:Me.d},g).map(ti).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))b=="label"&&x?s=x+br(JSON.stringify([l,c,i])):(x||x===0)&&(b=b.replace(/[A-Z]/g,L=>"-"+L.toLowerCase()),T+=1,m=Math.max(m,(p=b)[0]=="-"?0:ci(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+mt(x).map(L=>g.s(b,eg(""+L,g.theme)+(c?" !important":""))).join(";"));else if(b[0]=="@"||b.includes("&")){let L=l;b[0]=="@"&&(b=b.replace(/\bscreen\(([^)]+)\)/g,($,z)=>{let F=g.theme("screens",z);return F?(L|=67108864,li(F,"")):$}),L|=ka(b)),d.push(...a(x,{n:s,p:L,r:[...u,b],i:c},g))}else d.push(...a(x,{p:l,r:[...u,b]},g))}return d.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(m||15,15),r:u,d:f}),d.sort(ui)}(e,Ra(t,n,r,o),n)}function eg(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i)=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?Zf(s):""+s})}function Da(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function Pa(e,t,n=Me.u,r,o){let a=[];for(let i of e)for(let s of function(l,u,c,g,d){var f;l={...l,i:l.i||d};let m=function(T,h){let p=Na.get(T.n);return p?p(T,h):h.r(T.n,T.v[0]=="dark")}(l,u);return m?typeof m=="string"?({r:g,p:c}=Ra(l,u,c,g),Da(Pa(Oa(m),u,c,g,l.i),l.n)):Array.isArray(m)?m.map(T=>{var h,p;return{o:0,...T,r:[...mt(g),...mt(T.r)],p:(h=c,p=(f=T.p)!=null?f:c,h&~Me.o|p)}}):fi(m,l,u,c,g):[{c:Aa(l),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(Qf(a,s),0,s);return a}function gi(e,t,n,r,o,a,i,s){return Da((s?n.flatMap(l=>Pa([l],r,o,a,i)):Pa(n,r,o,a,i)).map(l=>l.p&Me.o&&(l.n||t==Me.b)?{...l,p:l.p&~Me.o|t,o:0}:l),e)}function tg(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:l,r:u,i:c}=Ra(a,i,t);return n&&gi(s,t,n,i,l,u,c,r)},Na.set(e,o),e}function _a(e,t){if(e[e.length-1]!="("){let n=[],r=!1,o=!1,a="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),o=!o),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(a+=(a&&"-")+i)}a&&(o&&(a="-"+a),t[0].push({n:a,v:n.filter(ng),i:r}))}}function ng(e,t,n){return n.indexOf(e)==t}var ni=new Map;function Oa(e){let t=ni.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,l=(u,c=0)=>{o!=s&&(n.push(e.slice(o,s+c)),u&&_a(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let g=n[c-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=c,_a([...n,"#"],r);let{v:f}=r[0].pop();for(let m of d)m.v.splice(+(m.v[0]=="dark")-+(f[0]=="dark"),f.length);_a([...n,tg(g.length>1?g.slice(0,-1)+br(JSON.stringify([g,d])):g+"("+si(d)+")",Me.a,d,/@$/.test(g))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),ni.set(e,t=r[0])}return t}function di(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function pi(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?di(e,t,n=>Ca(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Ca(r),e?Ca(e):"")}function Ca(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=pi(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var Xm=mi("@"),Qm=mi("~");function mi(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(o,...a){return t(r,o,a)}});function t(n,r,o){return si(Oa(n+e+"("+pi(r,o)+")"))}}function Ma(e,t){return Array.isArray(e)?ri(di(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?ri(e):[e]}var rg=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function ri(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=rg.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function hi(e,...t){var n,r;let o=Ma(e,t),a=(((n=o.find(i=>i.label))==null?void 0:n.label)||"css")+br(JSON.stringify(o));return r=(i,s)=>Da(o.flatMap(l=>fi(l,i,s,Me.o)),a),Na.set(a,r),a}var Zm=new Proxy(function(e,t){return ai("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return ai(t,n,r)}});function ai(e,t,n){return{toString:()=>hi({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var eh=Symbol();var bi=new Proxy(Jf,{apply:(e,t,n)=>va(n[0]),get(e,t){let n=va[t];return typeof n=="function"?function(){return n.apply(va,arguments)}:n}});var th=function e(t){return new Proxy(function(n,...r){return oi(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(o,...a){return oi(t,r,o,a)}})}();function oi(e,t,n,r){return{toString(){let o=Ma(n,r),a=ii(t+br(JSON.stringify([t,o])));return(typeof e=="function"?e:bi)(hi({[`@keyframes ${a}`]:Ma(n,r)})),a}}}var Ia;function Va(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function _i(e,t=","){return e.map(Va).join(t)}var Ci=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Tr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function xr(e,t="@media "){return t+Ke(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function Ke(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function og(){}var Ae={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function ki(e){return e.match(/[-=:;]/g)?.length||0}function ja(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(ki(e),15)<<18}var sg=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Ka({n:e,i:t,v:n=[]},r,o,a){e&&(e=Va({n:e,i:t,v:n})),a=[...Ke(a)];for(let s of n){let l=r.theme("screens",s);for(let u of Ke(l&&xr(l)||r.v(s))){var i;a.push(u),o|=l?67108864|ja(u):s=="dark"?1073741824:u[0]=="@"?ja(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~sg.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var Ga=new Map;function yi(e){if(e.d){let t=[],n=Fa(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?Fa(r,a=>Fa(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):Ha(a,i)}return Ha(i,a)})):r,"&"),r=>Ha(r,e.n?"."+Ci(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function Fa(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function Ha(e,t){return e.replace(/&/g,t)}var Ti=new Intl.Collator("en",{numeric:!0});function ig(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=Pi(e[o],t)?n=o+1:r=o}return r}function Pi(e,t){let n=e.p&Ae.o;return n==(t.p&Ae.o)&&(n==Ae.b||n==Ae.o)?0:e.p-t.p||e.o-t.o||Ti.compare(xi(e.n),xi(t.n))||Ti.compare(wi(e.n),wi(t.n))}function xi(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function wi(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function $a(e,t){return Math.round(parseInt(e,16)*t)}function wt(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[$a(e.substr(1,a),i),$a(e.substr(1+a,a),i),$a(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function Mi(e,t,n,r,o=[]){return function a(i,{n:s,p:l,r:u=[],i:c},g){let d=[],f="",m=0,T=0;for(let b in i||{}){var h,p;let x=i[b];if(b[0]=="@"){if(!x)continue;if(b[1]=="a"){d.push(...Ri(s,l,Ya(""+x),g,l,u,c,!0));continue}if(b[1]=="l"){for(let L of Ke(x))d.push(...a(L,{n:s,p:(h=Ae[b[7]],l&~Ae.o|h),r:u,i:c},g));continue}if(b[1]=="i"){d.push(...Ke(x).map(L=>({p:-1,o:0,r:[],d:b+" "+L})));continue}if(b[1]=="k"){d.push({p:Ae.d,o:0,r:[b],d:a(x,{p:Ae.d},g).map(yi).join("")});continue}if(b[1]=="f"){d.push(...Ke(x).map(L=>({p:Ae.d,o:0,r:[b],d:a(L,{p:Ae.d},g).map(yi).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))b=="label"&&x?s=x+Tr(JSON.stringify([l,c,i])):(x||x===0)&&(b=b.replace(/[A-Z]/g,L=>"-"+L.toLowerCase()),T+=1,m=Math.max(m,(p=b)[0]=="-"?0:ki(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+Ke(x).map(L=>g.s(b,Ai(""+L,g.theme)+(c?" !important":""))).join(";"));else if(b[0]=="@"||b.includes("&")){let L=l;b[0]=="@"&&(b=b.replace(/\bscreen\(([^)]+)\)/g,($,z)=>{let F=g.theme("screens",z);return F?(L|=67108864,xr(F,"")):$}),L|=ja(b)),d.push(...a(x,{n:s,p:L,r:[...u,b],i:c},g))}else d.push(...a(x,{p:l,r:[...u,b]},g))}return d.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(m||15,15),r:u,d:f}),d.sort(Pi)}(e,Ka(t,n,r,o),n)}function Ai(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i="")=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?wt(s):""+Ke(s).filter(l=>Object(l)!==l)})}function Ja(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function Wa(e,t,n=Ae.u,r,o){let a=[];for(let i of e)for(let s of function(l,u,c,g,d){l={...l,i:l.i||d};let f=function(m,T){let h=Ga.get(m.n);return h?h(m,T):T.r(m.n,m.v[0]=="dark")}(l,u);return f?typeof f=="string"?({r:g,p:c}=Ka(l,u,c,g),Ja(Wa(Ya(f),u,c,g,l.i),l.n)):Array.isArray(f)?f.map(m=>{var T,h;return{o:0,...m,r:[...Ke(g),...Ke(m.r)],p:(T=c,h=m.p??c,T&~Ae.o|h)}}):Mi(f,l,u,c,g):[{c:Va(l),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(ig(a,s),0,s);return a}function Ri(e,t,n,r,o,a,i,s){return Ja((s?n.flatMap(l=>Wa([l],r,o,a,i)):Wa(n,r,o,a,i)).map(l=>l.p&Ae.o&&(l.n||t==Ae.b)?{...l,p:l.p&~Ae.o|t,o:0}:l),e)}function lg(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:l,r:u,i:c}=Ka(a,i,t);return n&&Ri(s,t,n,i,l,u,c,r)},Ga.set(e,o),e}function Ua(e,t,n){if(e[e.length-1]!="("){let r=[],o=!1,a=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),o=!o),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(a&&(i="-"+i),t[0].push({n:i,v:r.filter(cg),i:o}))}}function cg(e,t,n){return n.indexOf(e)==t}var vi=new Map;function Ya(e){let t=vi.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,l=(u,c=0)=>{o!=s&&(n.push(e.slice(o,s+c)),u&&Ua(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let g=n[c-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=c,Ua([...n,"#"],r);let{v:f}=r[0].pop();for(let m of d)m.v.splice(+(m.v[0]=="dark")-+(f[0]=="dark"),f.length);Ua([...n,lg(g.length>1?g.slice(0,-1)+Tr(JSON.stringify([g,d])):g+"("+_i(d)+")",Ae.a,d,/@$/.test(g))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),vi.set(e,t=r[0])}return t}function Ni(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function Di(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Ni(e,t,n=>Ba(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Ba(r),e?Ba(e):"")}function Ba(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Di(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var Th=Oi("@"),xh=Oi("~");function Oi(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(o,...a){return t(r,o,a)}}});function t(n,r,o){return _i(Ya(n+e+"("+Di(r,o)+")"))}}function za(e,t){return Array.isArray(e)?Si(Ni(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Si(e):[e]}var ug=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Si(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=ug.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function Ii(e,...t){var n;let r=za(e,t),o=(r.find(a=>a.label)?.label||"css")+Tr(JSON.stringify(r));return n=(a,i)=>Ja(r.flatMap(s=>Mi(s,a,i,Ae.o)),o),Ga.set(o,n),o}var wh=new Proxy(function(e,t){return Ei("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return Ei(t,n,r)}}});function Ei(e,t,n){return{toString(){return Ii({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function S(e,t,n){return[e,fg(t,n)]}function fg(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):qa(n,1)}):n=>e||{[n[1]]:qa(n,2)}}function qa(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function E(e,t,n,r){return[e,gg(t,n,r)]}function gg(e,t,n){let r=typeof t=="string"?(o,a)=>({[t]:n?n(o,a):o._}):t||(({1:o,_:a},i,s)=>({[o||s]:a}));return(o,a)=>{let i=Fi(e||o[1]),s=a.theme(i,o.$$)??Mn(o.$$,i,a);if(s!=null)return o._=qa(o,0,s),r(o,a,i)}}function Ee(e,t={},n){return[e,dg(t,n)]}function dg(e={},t){return(n,r)=>{let{section:o=Fi(n[0]).replace("-","")+"Color"}=e,[a,i]=pg(n.$$);if(!a)return;let s=r.theme(o,a)||Mn(a,o,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=o.replace("Color","Opacity"),property:c=o,selector:g}=e,d=r.theme(u,i||"DEFAULT")||i&&Mn(i,u,r),f=t||(({_:T})=>{let h=An(c,T);return g?{[g]:h}:h});n._={value:wt(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:T=>wt(s,T),opacityVariable:l||void 0,opacityValue:d||void 0};let m=f(n,r);if(!n.dark){let T=r.d(o,a,s);T&&T!==s&&(n._={value:wt(T,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:h=>wt(T,h),opacityVariable:l||void 0,opacityValue:d||void 0},m={"&":m,[r.v("dark")]:f(n,r)})}return m}}function pg(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function An(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function Mn(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=yr(Ai(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Fi(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function yr(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,o="")=>yr(n)+r+yr(o)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var vh=Symbol();var mg=new Proxy(og,{apply(e,t,n){return Ia(n[0])},get(e,t){let n=Ia[t];return typeof n=="function"?function(){return n.apply(Ia,arguments)}:n}});var Sh=function e(t){return new Proxy(function(n,...r){return Li(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(o,...a){return Li(t,r,o,a)}}})}();function Li(e,t,n,r){return{toString(){let o=za(n,r),a=Ci(t+Tr(JSON.stringify([t,o])));return(typeof e=="function"?e:mg)(Ii({[`@keyframes ${a}`]:za(n,r)})),a}}}var hg="inherit",bg="currentColor",yg="transparent",Tg="#000",xg="#fff",wg={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},vg={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Sg={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},Eg={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},Lg={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},_g={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Cg={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},kg={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Pg={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Mg={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Ag={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},Rg={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Ng={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Dg={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Og={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Ig={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Fg={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},Hg={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},$g={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},Ug={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},Bg={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},jg={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},Wg={__proto__:null,inherit:hg,current:bg,transparent:yg,black:Tg,white:xg,slate:wg,gray:vg,zinc:Sg,neutral:Eg,stone:Lg,red:_g,orange:Cg,amber:kg,yellow:Pg,lime:Mg,green:Ag,emerald:Rg,teal:Ng,cyan:Dg,sky:Og,blue:Ig,indigo:Fg,violet:Hg,purple:$g,fuchsia:Ug,pink:Bg,rose:jg},Hi={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:Wg,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...qe(4,"rem",4,.5,.5),...qe(12,"rem",4,5),14:"3.5rem",...qe(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:K("blur"),backdropBrightness:K("brightness"),backdropContrast:K("contrast"),backdropGrayscale:K("grayscale"),backdropHueRotate:K("hueRotate"),backdropInvert:K("invert"),backdropOpacity:K("opacity"),backdropSaturate:K("saturate"),backdropSepia:K("sepia"),backgroundColor:K("colors"),backgroundImage:{none:"none"},backgroundOpacity:K("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...qe(200,"",100,0,50),...qe(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:K("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:K("spacing"),borderWidth:{DEFAULT:"1px",...Ge(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:K("colors"),caretColor:K("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...qe(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:K("borderColor"),divideOpacity:K("borderOpacity"),divideWidth:K("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:K("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Rn(2,6),...Rn(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:K("spacing"),gradientColorStops:K("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Rn(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Rn(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...qe(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...qe(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:K("spacing"),placeholderColor:K("colors"),placeholderOpacity:K("opacity"),outlineColor:K("colors"),outlineOffset:Ge(8,"px"),outlineWidth:Ge(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:K("colors"),ringOffsetWidth:Ge(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Ge(8,"px")},rotate:{...Ge(2,"deg"),...Ge(12,"deg",3),...Ge(180,"deg",45)},saturate:qe(200,"",100,0,50),scale:{...qe(150,"",100,0,50),...qe(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:K("spacing"),scrollPadding:K("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Ge(2,"deg"),...Ge(12,"deg",3)},space:K("spacing"),stroke:K("colors"),strokeWidth:qe(2),textColor:K("colors"),textDecorationColor:K("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Ge(8,"px")},textUnderlineOffset:{auto:"auto",...Ge(8,"px")},textIndent:K("spacing"),textOpacity:K("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:K("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Rn(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...qe(50,"",1,0,10),auto:"auto"}};function Rn(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function Ge(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function qe(e,t="",n=1,r=0,o=1,a={}){for(;r<=e;r+=o)a[r]=r/n+t;return a}function K(e){return({theme:t})=>t(e)}var _h={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Hi.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Hi.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},kh=[S("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:Mn(`[${t}]`,e,n)}}})),S("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),E("aspect-","aspectRatio"),S("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:o}=t("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[xr(l)]={"&":{maxWidth:l,...i(s)}})}return a;function i(s){let l=o&&(typeof o=="string"?o:o[s]||o.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),E("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),S("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),S("box-(border|content)","boxSizing",({1:e})=>e+"-box"),S("hidden",{display:"none"}),S("table-(auto|fixed)","tableLayout"),S(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",S("isolate","isolation"),S("object-(contain|cover|fill|none|scale-down)","objectFit"),E("object-","objectPosition"),S("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",wr),S("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),S("(static|fixed|absolute|relative|sticky)","position"),E("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),E("-?(top|bottom|left|right)(?:$|-)","inset"),S("visible","visibility"),S("invisible",{visibility:"hidden"}),E("-?z-","zIndex"),S("flex-((row|col)(-reverse)?)","flexDirection",$i),S("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),E("(flex-(?:grow|shrink))(?:$|-)"),E("(flex)-"),E("grow(?:$|-)","flexGrow"),E("shrink(?:$|-)","flexShrink"),E("basis-","flexBasis"),E("-?(order)-"),"-?(order)-(\\d+)",E("grid-cols-","gridTemplateColumns"),S("grid-cols-(\\d+)","gridTemplateColumns",Wi),E("col-","gridColumn"),S("col-(span)-(\\d+)","gridColumn",ji),E("col-start-","gridColumnStart"),S("col-start-(auto|\\d+)","gridColumnStart"),E("col-end-","gridColumnEnd"),S("col-end-(auto|\\d+)","gridColumnEnd"),E("grid-rows-","gridTemplateRows"),S("grid-rows-(\\d+)","gridTemplateRows",Wi),E("row-","gridRow"),S("row-(span)-(\\d+)","gridRow",ji),E("row-start-","gridRowStart"),S("row-start-(auto|\\d+)","gridRowStart"),E("row-end-","gridRowEnd"),S("row-end-(auto|\\d+)","gridRowEnd"),S("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>wr($i(e))),S("grid-flow-(dense)","gridAutoFlow"),E("auto-cols-","gridAutoColumns"),E("auto-rows-","gridAutoRows"),E("gap-x(?:$|-)","gap","columnGap"),E("gap-y(?:$|-)","gap","rowGap"),E("gap(?:$|-)","gap"),"(justify-(?:items|self))-",S("justify-","justifyContent",Ui),S("(content|items|self)-",e=>({["align-"+e[1]]:Ui(e)})),S("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),E("p([xytrbl])?(?:$|-)","padding",sn("padding")),E("-?m([xytrbl])?(?:$|-)","margin",sn("margin")),E("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),S("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),E("w-","width"),E("min-w-","minWidth"),E("max-w-","maxWidth"),E("h-","height"),E("min-h-","minHeight"),E("max-h-","maxHeight"),E("font-","fontWeight"),E("font-","fontFamily","fontFamily",ut),S("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),S("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),S("italic","fontStyle"),S("not-italic",{fontStyle:"normal"}),S("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),E("tracking-","letterSpacing"),E("leading-","lineHeight"),S("list-(inside|outside)","listStylePosition"),E("list-","listStyleType"),S("list-","listStyleType"),E("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Ee("placeholder-",{property:"color",selector:"&::placeholder"}),S("text-(left|center|right|justify|start|end)","textAlign"),S("text-(ellipsis|clip)","textOverflow"),E("text-opacity-","textOpacity","--tw-text-opacity"),Ee("text-",{property:"color"}),E("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),E("indent-","textIndent"),S("(overline|underline|line-through)","textDecorationLine"),S("no-underline",{textDecorationLine:"none"}),E("underline-offset-","textUnderlineOffset"),Ee("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),E("decoration-","textDecorationThickness"),S("decoration-","textDecorationStyle"),S("(uppercase|lowercase|capitalize)","textTransform"),S("normal-case",{textTransform:"none"}),S("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),S("align-","verticalAlign"),S("whitespace-","whiteSpace"),S("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),S("break-words",{overflowWrap:"break-word"}),S("break-all",{wordBreak:"break-all"}),Ee("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Ee("accent-",{opacityVariable:!1,opacitySection:"opacity"}),S("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Dt(e," ")},var(--tw-gradient-stops))`),Ee("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Ee("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Ee("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),S("bg-(fixed|local|scroll)","backgroundAttachment"),S("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),S(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),S("bg-blend-","backgroundBlendMode"),S("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),E("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Ee("bg-",{section:"backgroundColor"}),E("bg-","backgroundImage"),E("bg-","backgroundPosition"),S("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",wr),E("bg-","backgroundSize"),E("rounded(?:$|-)","borderRadius"),E("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Dt(n[0])}-radius`]:t,[`border-${Dt(n[1])}-radius`]:t}}),S("border-(collapse|separate)","borderCollapse"),E("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),S("border-(solid|dashed|dotted|double|none)","borderStyle"),E("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Ee("border-([xytrbl])-",{section:"borderColor"},sn("border","Color")),Ee("border-"),E("border-([xytrbl])(?:$|-)","borderWidth",sn("border","Width")),E("border(?:$|-)","borderWidth"),E("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),S("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),S("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),E("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Dt(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Dt(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Ee("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),E("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Ee("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),E("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),S("ring-inset",{"--tw-ring-inset":"inset"}),Ee("ring-",{property:"--tw-ring-color"}),E("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":wt(t("ringOffsetColor","","#fff")),"--tw-ring-color":wt(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Ee("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),E("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":ut(e),"--tw-shadow-colored":ut(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),E("(opacity)-"),S("mix-blend-","mixBlendMode"),...Bi(),...Bi("backdrop-"),E("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:ut(e),transitionTimingFunction:e._=="none"?void 0:ut(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:ut(t("transitionDuration",""))})),E("duration(?:$|-)","transitionDuration","transitionDuration",ut),E("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",ut),E("delay(?:$|-)","transitionDelay","transitionDelay",ut),E("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=ut(e),o=r.split(" "),a=t("keyframes",o[0]);return a?{["@keyframes "+(o[0]=n(o[0]))]:a,animation:o.join(" ")}:{animation:r}}),"(transform)-(none)",S("transform",Qa),S("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":zi(e=="gpu")})),E("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Qa()})),E("-?(rotate)-","rotate",Xa),E("-?(translate-[xy])-","translate",Xa),E("-?(skew-[xy])-","skew",Xa),S("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",wr),"(appearance)-",E("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",E("(cursor)-"),"(cursor)-",S("snap-(none)","scroll-snap-type"),S("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),S("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),S("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),S("snap-(normal|always)","scroll-snap-stop"),S("scroll-(auto|smooth)","scroll-behavior"),E("scroll-p([xytrbl])?(?:$|-)","padding",sn("scroll-padding")),E("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",sn("scroll-margin")),S("touch-(auto|none|manipulation)","touch-action"),S("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),S("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),S("outline",{outlineStyle:"solid"}),S("outline-(dashed|dotted|double|hidden)","outlineStyle"),E("(outline-offset)-"),Ee("outline-",{opacityVariable:!1,opacitySection:"opacity"}),E("outline-","outlineWidth"),"(pointer-events)-",E("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],S("select-(none|text|all|auto)","userSelect"),Ee("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Ee("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),E("stroke-","strokeWidth"),S("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),S("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function wr(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function $i(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Dt(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function ut(e){return e&&""+(e._||e)}function Ui({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function sn(e,t=""){return({1:n,_:r})=>{let o={x:"lr",y:"tb"}[n]||n+n;return o?{...An(e+"-"+Dt(o[0])+t,r),...An(e+"-"+Dt(o[1])+t,r)}:An(e+t,r)}}function Bi(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,S(`${e}filter`,n),...t.map(r=>E(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:o,_:a})=>({[`--tw-${o}`]:Ke(a).map(i=>`${r}(${i})`).join(" "),...n})))]}function Xa({1:e,_:t}){return{["--tw-"+e]:t,...Qa()}}function Qa(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":zi()}}}}function zi(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function ji({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Wi({1:e}){return`repeat(${e},minmax(0,1fr))`}var qg=Object.create,Vi=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,Kg=Object.getOwnPropertyNames,Gg=Object.getPrototypeOf,Jg=Object.prototype.hasOwnProperty,Yg=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Xg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Kg(t))!Jg.call(e,o)&&o!==n&&Vi(e,o,{get:()=>t[o],enumerable:!(r=Vg(t,o))||r.enumerable});return e},Qg=(e,t,n)=>(n=e!=null?qg(Gg(e)):{},Xg(t||!e||!e.__esModule?Vi(n,"default",{value:e,enumerable:!0}):n,e)),Zg=Yg((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var o={};return r.m=n,r.c=o,r.i=function(a){return a},r.d=function(a,i,s){r.o(a,i)||Object.defineProperty(a,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(i,"a",i),i},r.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}},function(n,r,o){"use strict";(function(a){var i,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,g){u(r)==="object"&&u(a)==="object"?a.exports=g():(s=[],i=g,l=typeof i=="function"?i.apply(r,s):i,l!==void 0&&(a.exports=l))})(void 0,function(){return function(c){function g(f){if(d[f])return d[f].exports;var m=d[f]={i:f,l:!1,exports:{}};return c[f].call(m.exports,m,m.exports,g),m.l=!0,m.exports}var d={};return g.m=c,g.c=d,g.i=function(f){return f},g.d=function(f,m,T){g.o(f,m)||Object.defineProperty(f,m,{configurable:!1,enumerable:!0,get:T})},g.n=function(f){var m=f&&f.__esModule?function(){return f.default}:function(){return f};return g.d(m,"a",m),m},g.o=function(f,m){return Object.prototype.hasOwnProperty.call(f,m)},g.p="",g(g.s=0)}([function(c,g,d){function f(w,j){var D={};for(var V in w)j.indexOf(V)>=0||Object.prototype.hasOwnProperty.call(w,V)&&(D[V]=w[V]);return D}Object.defineProperty(g,"__esModule",{value:!0});var m=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(w){return typeof w>"u"?"undefined":u(w)}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w>"u"?"undefined":u(w)},T=Object.assign||function(w){for(var j=1;j<arguments.length;j++){var D=arguments[j];for(var V in D)Object.prototype.hasOwnProperty.call(D,V)&&(w[V]=D[V])}return w},h={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:h.top,force:h.top,confirm:h.top,input:h.top,select:h.bottom,date:h.top}},b=g.setOptions=function(w){p=T({},p,w,{classes:T({},p.classes,w.classes),ids:T({},p.ids,w.ids),positions:T({},p.positions,w.positions)})},x=function(){return new Promise(function(w){return setTimeout(w,0)})},L=function(w){return new Promise(function(j){return setTimeout(j,1e3*w)})},$=function(){document.activeElement&&document.activeElement.blur()},z=function(){var w="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(j){var D=16*Math.random()|0,V=j==="x"?D:3&D|8;return V.toString(16)});return"notie-"+w},F={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},M=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},k=function(w){return w.keyCode===13},Y=function(w){return w.keyCode===27},q=function(w,j){w.classList.add(p.classes.container),w.style[j]="-10000px",document.body.appendChild(w),w.style[j]="-"+w.offsetHeight+"px",w.listener&&window.addEventListener("keydown",w.listener),x().then(function(){w.style.transition=M(),w.style[j]=0})},X=function(w,j){var D=document.getElementById(w);D&&(D.style[j]="-"+D.offsetHeight+"px",D.listener&&window.removeEventListener("keydown",D.listener),L(p.transitionDuration).then(function(){D.parentNode&&D.parentNode.removeChild(D)}))},ce=function(w,j){var D=document.createElement("div");D.id=p.ids.overlay,D.classList.add(p.classes.overlay),D.classList.add(p.classes.backgroundOverlay),D.style.opacity=0,w&&p.overlayClickDismiss&&(D.onclick=function(){X(w.id,j),oe()}),document.body.appendChild(D),x().then(function(){D.style.transition=M(),D.style.opacity=p.overlayOpacity})},oe=function(){var w=document.getElementById(p.ids.overlay);w.style.opacity=0,L(p.transitionDuration).then(function(){w.parentNode&&w.parentNode.removeChild(w)})},Se=g.hideAlerts=function(w){var j=document.getElementsByClassName(p.classes.alert);if(j.length){for(var D=0;D<j.length;D++){var V=j[D];X(V.id,V.position)}w&&L(p.transitionDuration).then(function(){return w()})}},xe=g.alert=function(w){var j=w.type,D=j===void 0?4:j,V=w.text,U=w.time,me=U===void 0?p.alertTime:U,fe=w.stay,Pe=fe!==void 0&&fe,ge=w.position,re=ge===void 0?p.positions.alert||re.top:ge;$(),Se();var v=document.createElement("div"),A=z();v.id=A,v.position=re,v.classList.add(p.classes.textbox),v.classList.add(F[D]),v.classList.add(p.classes.alert),v.innerHTML='<div class="'+p.classes.textboxInner+'">'+V+"</div>",v.onclick=function(){return X(A,re)},v.listener=function(_){(k(_)||Y(_))&&Se()},q(v,re),me&&me<1&&(me=1),!Pe&&me&&L(me).then(function(){return X(A,re)})},se=g.force=function(w,j){var D=w.type,V=D===void 0?5:D,U=w.text,me=w.buttonText,fe=me===void 0?"OK":me,Pe=w.callback,ge=w.position,re=ge===void 0?p.positions.force||re.top:ge;$(),Se();var v=document.createElement("div"),A=z();v.id=A;var _=document.createElement("div");_.classList.add(p.classes.textbox),_.classList.add(p.classes.backgroundInfo),_.innerHTML='<div class="'+p.classes.textboxInner+'">'+U+"</div>";var P=document.createElement("div");P.classList.add(p.classes.button),P.classList.add(F[V]),P.innerHTML=fe,P.onclick=function(){X(A,re),oe(),Pe?Pe():j&&j()},v.appendChild(_),v.appendChild(P),v.listener=function(B){k(B)&&P.click()},q(v,re),ce()},ue=g.confirm=function(w,j,D){var V=w.text,U=w.submitText,me=U===void 0?"Yes":U,fe=w.cancelText,Pe=fe===void 0?"Cancel":fe,ge=w.submitCallback,re=w.cancelCallback,v=w.position,A=v===void 0?p.positions.confirm||A.top:v;$(),Se();var _=document.createElement("div"),P=z();_.id=P;var B=document.createElement("div");B.classList.add(p.classes.textbox),B.classList.add(p.classes.backgroundInfo),B.innerHTML='<div class="'+p.classes.textboxInner+'">'+V+"</div>";var ee=document.createElement("div");ee.classList.add(p.classes.button),ee.classList.add(p.classes.elementHalf),ee.classList.add(p.classes.backgroundSuccess),ee.innerHTML=me,ee.onclick=function(){X(P,A),oe(),ge?ge():j&&j()};var R=document.createElement("div");R.classList.add(p.classes.button),R.classList.add(p.classes.elementHalf),R.classList.add(p.classes.backgroundError),R.innerHTML=Pe,R.onclick=function(){X(P,A),oe(),re?re():D&&D()},_.appendChild(B),_.appendChild(ee),_.appendChild(R),_.listener=function(ae){k(ae)?ee.click():Y(ae)&&R.click()},q(_,A),ce(_,A)},_e=function(w,j,D){var V=w.text,U=w.submitText,me=U===void 0?"Submit":U,fe=w.cancelText,Pe=fe===void 0?"Cancel":fe,ge=w.submitCallback,re=w.cancelCallback,v=w.position,A=v===void 0?p.positions.input||A.top:v,_=f(w,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);$(),Se();var P=document.createElement("div"),B=z();P.id=B;var ee=document.createElement("div");ee.classList.add(p.classes.textbox),ee.classList.add(p.classes.backgroundInfo),ee.innerHTML='<div class="'+p.classes.textboxInner+'">'+V+"</div>";var R=document.createElement("input");R.classList.add(p.classes.inputField),R.setAttribute("autocapitalize",_.autocapitalize||"none"),R.setAttribute("autocomplete",_.autocomplete||"off"),R.setAttribute("autocorrect",_.autocorrect||"off"),R.setAttribute("autofocus",_.autofocus||"true"),R.setAttribute("inputmode",_.inputmode||"verbatim"),R.setAttribute("max",_.max||""),R.setAttribute("maxlength",_.maxlength||""),R.setAttribute("min",_.min||""),R.setAttribute("minlength",_.minlength||""),R.setAttribute("placeholder",_.placeholder||""),R.setAttribute("spellcheck",_.spellcheck||"default"),R.setAttribute("step",_.step||"any"),R.setAttribute("type",_.type||"text"),R.value=_.value||"",_.allowed&&(R.oninput=function(){var Ne=void 0;if(Array.isArray(_.allowed)){for(var je="",yt=_.allowed,pt=0;pt<yt.length;pt++)yt[pt]==="an"?je+="0-9a-zA-Z":yt[pt]==="a"?je+="a-zA-Z":yt[pt]==="n"&&(je+="0-9"),yt[pt]==="s"&&(je+=" ");Ne=new RegExp("[^"+je+"]","g")}else m(_.allowed)==="object"&&(Ne=_.allowed);R.value=R.value.replace(Ne,"")});var ae=document.createElement("div");ae.classList.add(p.classes.button),ae.classList.add(p.classes.elementHalf),ae.classList.add(p.classes.backgroundSuccess),ae.innerHTML=me,ae.onclick=function(){X(B,A),oe(),ge?ge(R.value):j&&j(R.value)};var ze=document.createElement("div");ze.classList.add(p.classes.button),ze.classList.add(p.classes.elementHalf),ze.classList.add(p.classes.backgroundError),ze.innerHTML=Pe,ze.onclick=function(){X(B,A),oe(),re?re(R.value):D&&D(R.value)},P.appendChild(ee),P.appendChild(R),P.appendChild(ae),P.appendChild(ze),P.listener=function(Ne){k(Ne)?ae.click():Y(Ne)&&ze.click()},q(P,A),R.focus(),ce(P,A)};g.input=_e;var pe=g.select=function(w,j){var D=w.text,V=w.cancelText,U=V===void 0?"Cancel":V,me=w.cancelCallback,fe=w.choices,Pe=w.position,ge=Pe===void 0?p.positions.select||ge.top:Pe;$(),Se();var re=document.createElement("div"),v=z();re.id=v;var A=document.createElement("div");A.classList.add(p.classes.textbox),A.classList.add(p.classes.backgroundInfo),A.innerHTML='<div class="'+p.classes.textboxInner+'">'+D+"</div>",re.appendChild(A),fe.forEach(function(P,B){var ee=P.type,R=ee===void 0?1:ee,ae=P.text,ze=P.handler,Ne=document.createElement("div");Ne.classList.add(F[R]),Ne.classList.add(p.classes.button),Ne.classList.add(p.classes.selectChoice);var je=fe[B+1];je&&!je.type&&(je.type=1),je&&je.type===R&&Ne.classList.add(p.classes.selectChoiceRepeated),Ne.innerHTML=ae,Ne.onclick=function(){X(v,ge),oe(),ze()},re.appendChild(Ne)});var _=document.createElement("div");_.classList.add(p.classes.backgroundNeutral),_.classList.add(p.classes.button),_.innerHTML=U,_.onclick=function(){X(v,ge),oe(),me?me():j&&j()},re.appendChild(_),re.listener=function(P){Y(P)&&_.click()},q(re,ge),ce(re,ge)},Ue=g.date=function(w,j,D){var V=w.value,U=V===void 0?new Date:V,me=w.submitText,fe=me===void 0?"OK":me,Pe=w.cancelText,ge=Pe===void 0?"Cancel":Pe,re=w.submitCallback,v=w.cancelCallback,A=w.position,_=A===void 0?p.positions.date||_.top:A;$(),Se();var P="&#9662",B=document.createElement("div"),ee=document.createElement("div"),R=document.createElement("div"),ae=function(he){B.innerHTML=p.dateMonths[he.getMonth()],ee.innerHTML=he.getDate(),R.innerHTML=he.getFullYear()},ze=function(he){var lt=new Date(U.getFullYear(),U.getMonth()+1,0).getDate(),rn=he.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(rn)>lt&&(rn=lt.toString()),he.target.textContent=rn,Number(rn)<1&&(rn="1"),U.setDate(Number(rn))},Ne=function(he){var lt=he.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);he.target.textContent=lt,U.setFullYear(Number(lt))},je=function(he){ae(U)},yt=function(he){var lt=new Date(U.getFullYear(),U.getMonth()+he+1,0).getDate();U.getDate()>lt&&U.setDate(lt),U.setMonth(U.getMonth()+he),ae(U)},pt=function(he){U.setDate(U.getDate()+he),ae(U)},Ss=function(he){var lt=U.getFullYear()+he;lt<0?U.setFullYear(0):U.setFullYear(U.getFullYear()+he),ae(U)},At=document.createElement("div"),ua=z();At.id=ua;var fa=document.createElement("div");fa.classList.add(p.classes.backgroundInfo);var Ze=document.createElement("div");Ze.classList.add(p.classes.dateSelectorInner);var en=document.createElement("div");en.classList.add(p.classes.button),en.classList.add(p.classes.elementThird),en.classList.add(p.classes.dateSelectorUp),en.innerHTML=P;var tn=document.createElement("div");tn.classList.add(p.classes.button),tn.classList.add(p.classes.elementThird),tn.classList.add(p.classes.dateSelectorUp),tn.innerHTML=P;var nn=document.createElement("div");nn.classList.add(p.classes.button),nn.classList.add(p.classes.elementThird),nn.classList.add(p.classes.dateSelectorUp),nn.innerHTML=P,B.classList.add(p.classes.element),B.classList.add(p.classes.elementThird),B.innerHTML=p.dateMonths[U.getMonth()],ee.classList.add(p.classes.element),ee.classList.add(p.classes.elementThird),ee.setAttribute("contentEditable",!0),ee.addEventListener("input",ze),ee.addEventListener("blur",je),ee.innerHTML=U.getDate(),R.classList.add(p.classes.element),R.classList.add(p.classes.elementThird),R.setAttribute("contentEditable",!0),R.addEventListener("input",Ne),R.addEventListener("blur",je),R.innerHTML=U.getFullYear();var vn=document.createElement("div");vn.classList.add(p.classes.button),vn.classList.add(p.classes.elementThird),vn.innerHTML=P;var Sn=document.createElement("div");Sn.classList.add(p.classes.button),Sn.classList.add(p.classes.elementThird),Sn.innerHTML=P;var En=document.createElement("div");En.classList.add(p.classes.button),En.classList.add(p.classes.elementThird),En.innerHTML=P,en.onclick=function(){return yt(1)},tn.onclick=function(){return pt(1)},nn.onclick=function(){return Ss(1)},vn.onclick=function(){return yt(-1)},Sn.onclick=function(){return pt(-1)},En.onclick=function(){return Ss(-1)};var Rt=document.createElement("div");Rt.classList.add(p.classes.button),Rt.classList.add(p.classes.elementHalf),Rt.classList.add(p.classes.backgroundSuccess),Rt.innerHTML=fe,Rt.onclick=function(){X(ua,_),oe(),re?re(U):j&&j(U)};var Nt=document.createElement("div");Nt.classList.add(p.classes.button),Nt.classList.add(p.classes.elementHalf),Nt.classList.add(p.classes.backgroundError),Nt.innerHTML=ge,Nt.onclick=function(){X(ua,_),oe(),v?v(U):D&&D(U)},Ze.appendChild(en),Ze.appendChild(tn),Ze.appendChild(nn),Ze.appendChild(B),Ze.appendChild(ee),Ze.appendChild(R),Ze.appendChild(vn),Ze.appendChild(Sn),Ze.appendChild(En),fa.appendChild(Ze),At.appendChild(fa),At.appendChild(Rt),At.appendChild(Nt),At.listener=function(he){k(he)?Rt.click():Y(he)&&Nt.click()},q(At,_),ce(At,_)};g.default={alert:xe,force:se,confirm:ue,input:_e,select:pe,date:Ue,setOptions:b,hideAlerts:Se}}])})}).call(r,o(0)(n))}])})}),ed=Qg(Zg()),{default:qi,...td}=ed,Za=qi!==void 0?qi:td;var jh=Symbol("clean");var Wh=Symbol();function eo(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=eo(e[r],t);return n}}function Gi(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,o,a){let i=e(r,o,...a);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,o){return e(n,r,...o)}}}}var Qh=Gi((e,t,n)=>eo(t,r=>{for(let o in n)r=r.replace(new RegExp(`{${o}}`,"g"),n[o]);return r})),Zh=Gi((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),eo(t[r],o=>o.replace(/{count}/g,n))});var to=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function no(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function Zi(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function el(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function ad(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,o=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(o=!1);return o}var Dn={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":to?173:189,"=":to?61:187,";":to?59:186,"'":222,"[":219,"]":221,"\\":220},gt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},oo={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Re={16:!1,18:!1,17:!1,91:!1},we={};for(Nn=1;Nn<20;Nn++)Dn["f".concat(Nn)]=111+Nn;var Nn,ie=[],Ji=!1,tl="all",nl=[],Sr=function(e){return Dn[e.toLowerCase()]||gt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},od=function(e){return Object.keys(Dn).find(function(t){return Dn[t]===e})},sd=function(e){return Object.keys(gt).find(function(t){return gt[t]===e})};function rl(e){tl=e||"all"}function On(){return tl||"all"}function id(){return ie.slice(0)}function ld(){return ie.map(function(e){return od(e)||sd(e)||String.fromCharCode(e)})}function cd(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function ud(e){return typeof e=="string"&&(e=Sr(e)),ie.indexOf(e)!==-1}function fd(e,t){var n,r;e||(e=On());for(var o in we)if(Object.prototype.hasOwnProperty.call(we,o))for(n=we[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;On()===e&&rl(t||"all")}function gd(e){var t=e.keyCode||e.which||e.charCode,n=ie.indexOf(t);if(n>=0&&ie.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&ie.splice(0,ie.length),(t===93||t===224)&&(t=91),t in Re){Re[t]=!1;for(var r in gt)gt[r]===t&&(ft[r]=!1)}}function dd(e){if(typeof e>"u")Object.keys(we).forEach(function(i){return delete we[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&ro(i)});else if(typeof e=="object")e.key&&ro(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],a=n[1];typeof o=="function"&&(a=o,o=""),ro({key:e,scope:o,method:a,splitKey:"+"})}}var ro=function(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,a=o===void 0?"+":o,i=el(t);i.forEach(function(s){var l=s.split(a),u=l.length,c=l[u-1],g=c==="*"?"*":Sr(c);if(we[g]){n||(n=On());var d=u>1?Zi(gt,l):[];we[g]=we[g].filter(function(f){var m=r?f.method===r:!0;return!(m&&f.scope===n&&ad(f.mods,d))})}})};function Yi(e,t,n,r){if(t.element===r){var o;if(t.scope===n||t.scope==="all"){o=t.mods.length>0;for(var a in Re)Object.prototype.hasOwnProperty.call(Re,a)&&(!Re[a]&&t.mods.indexOf(+a)>-1||Re[a]&&t.mods.indexOf(+a)===-1)&&(o=!1);(t.mods.length===0&&!Re[16]&&!Re[18]&&!Re[17]&&!Re[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Xi(e,t){var n=we["*"],r=e.keyCode||e.which||e.charCode;if(ft.filter.call(this,e)){if((r===93||r===224)&&(r=91),ie.indexOf(r)===-1&&r!==229&&ie.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(m){var T=oo[m];e[m]&&ie.indexOf(T)===-1?ie.push(T):!e[m]&&ie.indexOf(T)>-1?ie.splice(ie.indexOf(T),1):m==="metaKey"&&e[m]&&ie.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(ie=ie.slice(ie.indexOf(T))))}),r in Re){Re[r]=!0;for(var o in gt)gt[o]===r&&(ft[o]=!0);if(!n)return}for(var a in Re)Object.prototype.hasOwnProperty.call(Re,a)&&(Re[a]=e[oo[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ie.indexOf(17)===-1&&ie.push(17),ie.indexOf(18)===-1&&ie.push(18),Re[17]=!0,Re[18]=!0);var i=On();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&Yi(e,n[s],i,t);if(r in we){for(var l=0;l<we[r].length;l++)if((e.type==="keydown"&&we[r][l].keydown||e.type==="keyup"&&we[r][l].keyup)&&we[r][l].key){for(var u=we[r][l],c=u.splitKey,g=u.key.split(c),d=[],f=0;f<g.length;f++)d.push(Sr(g[f]));d.sort().join("")===ie.sort().join("")&&Yi(e,u,i,t)}}}}function pd(e){return nl.indexOf(e)>-1}function ft(e,t,n){ie=[];var r=el(e),o=[],a="all",i=document,s=0,l=!1,u=!0,c="+",g=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(i=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(a=t);s<r.length;s++)e=r[s].split(c),o=[],e.length>1&&(o=Zi(gt,e)),e=e[e.length-1],e=e==="*"?"*":Sr(e),e in we||(we[e]=[]),we[e].push({keyup:l,keydown:u,scope:a,mods:o,shortcut:r[s],method:n,key:r[s],splitKey:c,element:i});typeof i<"u"&&!pd(i)&&window&&(nl.push(i),no(i,"keydown",function(d){Xi(d,i)},g),Ji||(Ji=!0,no(window,"focus",function(){ie=[]},g)),no(i,"keyup",function(d){Xi(d,i),gd(d)},g))}function md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(we).forEach(function(n){var r=we[n].filter(function(o){return o.scope===t&&o.shortcut===e});r.forEach(function(o){o&&o.method&&o.method()})})}var ao={getPressedKeyString:ld,setScope:rl,getScope:On,deleteScope:fd,getPressedKeyCodes:id,isPressed:ud,filter:cd,trigger:md,unbind:dd,keyMap:Dn,modifier:gt,modifierMap:oo};for(vr in ao)Object.prototype.hasOwnProperty.call(ao,vr)&&(ft[vr]=ao[vr]);var vr;typeof document<"u"&&(Qi=window.hotkeys,ft.noConflict=function(e){return e&&window.hotkeys===ft&&(window.hotkeys=Qi),ft},window.hotkeys=ft);var Qi;var m0=Za.alert;function al(e,t,n){let r=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),r=t!=="auto"?n[t].matches:[];let o={},a=Object.keys(n);for(let u of a){let g=n[u].matches;for(let d of g)o[d]||(o[d]=[]),o[d].push(u)}let i=o[e];if(i&&i.length>0)for(let u of i)n[u].matches.indexOf(e)>-1&&(n[u]={...n[u],matches:n[u].matches.filter(g=>g!==e)});let s=new Set(r);if(t==="auto")return{...n};s.add(e);let l=Array.from(s);return{...n,[t]:{...n[t],matches:l}}}var so="DENO",io="CHROME",Er="FIREFOX";function hd(e){let t=io;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=Er:/deno/i.test(n)&&(t=so)}catch{}return e===io&&t===io||e===Er&&t===Er||e===so&&t===so}function ol(){return typeof Deno<"u"}function Lr(){return hd(Er)}function sl(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var il={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},ll={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:il,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:il,query:()=>{},sendMessage:()=>{}}};var G;ol()?G=ll:G=globalThis.browser;var cl={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00"};var ul={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var fl={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var bd=[{code:"zh-CN",messages:cl},{code:"zh-TW",messages:ul},{code:"en",messages:fl}],Ot={};for(let e of bd)Ot[e.code]=e.messages;var It="Immersive Translate",de="immersive-translate",_r="pdf/index.html",le="immersiveTranslate",lo=`${le}Container`,Ft=`${le}SpecifiedContainer`,Cr="buildinConfig",kr="localConfig";var gl=`${le}PageTranslatedStatus`,dl=`${le}PageUrlChanged`,X0=`${le}ReceiveCommand`,In=`${le}PopupReceiveMessage`,pl="immersive-translate.owenyoung.com",Q0=`https://${pl}/`,Z0=`https://${pl}/buildin_config.json`,Ht=`${le}Mark`,co="immersiveTranslateEffect",Le=`${le}Root`,uo=`data-${de}-effect`,$t=`${le}TranslatedMark`,Ut=`${le}ParagraphId`,Je=`${le}AtomicBlockMark`,Ye=`${le}ExcludeMark`,Pr=`${le}StayOriginalMark`,ln=`${le}PreWhitespaceMark`,ht=`${le}InlineMark`,Bt=`${le}BlockMark`,Fn=`${le}Left`,Mr=`${le}Right`,eb=`${le}Width`,tb=`${le}Height`,ml=`${le}Top`,hl=`${le}FontSize`;var fo=`${le}GlobalStyleMark`,bl=["@","#"],Ar=" --- ",go=`
`,Xe=`${de}-target-wrapper`,Rr=`${de}-pdf-target-container`,yl=`${de}-target-inner`,nb=`${de}-source-wrapper`,po=`${de}-target-translation-block-wrapper`,Tl=`${de}-target-translation-pdf-block-wrapper`,xl=`${de}-target-translation-pre-whitespace`,mo=`${de}-target-translation-inline-wrapper`;var vt=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],ho={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var wl=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var bo="zh-CN";function vl(e){let t=G.runtime.getURL(_r),n=new URL(t);return Lr()||n.searchParams.set("file",e),n.href}var yo=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),o=Ve.green;r>1e4?o=Ve.red:r>1e3&&(o=Ve.yellow),console.debug(Ve.dim(It+" TIMING:"),t,"in",o(r+"ms")),this.#e=n}},Hn=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Ve.dim(It+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(Ve.green(It+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Ve.yellow(It+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Ve.red(It+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Ve.red(It+" FATAL:"),...t)}timing(){return this.level===0?new yo:{reset:()=>{},stop:()=>{}}}},W=new Hn;var Sl=["*://*/*","*","*://*"],Ll="immersive-translate-wildcard-placeholder.com";function To(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>Sl.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let o=r.href,a=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let l=s;if(s===a)return!0;if(Sl.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===a:Td(o,s)}catch{}return!1}else{let u,c=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let g=s.replace(/\*/g,Ll),d;try{d=new URL(g)}catch{return W.debug("invalid match pattern",g,"raw match value:",c),!1}let f=d.hostname,m=d.pathname;m==="/"&&(c.replace("://","").includes("/")||(m="/*"));let T=yd(u+":",El(f),El(m));if(T){let h=new URL(o);return h.port="",T.test(h.href)}else return!1}});if(i)return i}return null}function El(e){return e.replace(Ll,"*")}function yd(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function St(e,t){return To(e,t)!==null}function Td(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}function xo(e){return Array.isArray(e)?e:e?[e]:[]}function wo(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function Et(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function Nr(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let o=e;return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))o[i]=s;else if(i.startsWith("additional")){let l=xo(s);o[i]=Array.from(new Set([...o[i],...l]))}else o[i]=xo(s)}),o}var cn="input is invalid type",vo=typeof window=="object",Lt=vo?window:{};Lt.JS_SHA256_NO_WINDOW&&(vo=!1);var xd=!vo&&typeof self=="object",wd=!Lt.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;wd?Lt=global:xd&&(Lt=self);var Cb=!Lt.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,kb=typeof define=="function"&&define.amd,$n=!Lt.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",C="0123456789abcdef".split(""),vd=[-2147483648,8388608,32768,128],tt=[24,16,8,0],Dr=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],Or=["hex","array","digest","arrayBuffer"],Ce=[];(Lt.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});$n&&(Lt.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var _l=function(e,t){return function(n){return new ke(t,!0).update(n)[e]()}},kl=function(e){var t=_l("hex",e);t.create=function(){return new ke(e)},t.update=function(o){return t.create().update(o)};for(var n=0;n<Or.length;++n){var r=Or[n];t[r]=_l(r,e)}return t},Cl=function(e,t){return function(n,r){return new Ir(n,t,!0).update(r)[e]()}},Pl=function(e){var t=Cl("hex",e);t.create=function(o){return new Ir(o,e)},t.update=function(o,a){return t.create(o).update(a)};for(var n=0;n<Or.length;++n){var r=Or[n];t[r]=Cl(r,e)}return t};function ke(e,t){t?(Ce[0]=Ce[16]=Ce[1]=Ce[2]=Ce[3]=Ce[4]=Ce[5]=Ce[6]=Ce[7]=Ce[8]=Ce[9]=Ce[10]=Ce[11]=Ce[12]=Ce[13]=Ce[14]=Ce[15]=0,this.blocks=Ce):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}ke.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(cn);if($n&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!$n||!ArrayBuffer.isView(e)))throw new Error(cn)}else throw new Error(cn);t=!0}for(var r,o=0,a,i=e.length,s=this.blocks;o<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(a=this.start;o<i&&a<64;++o)s[a>>2]|=e[o]<<tt[a++&3];else for(a=this.start;o<i&&a<64;++o)r=e.charCodeAt(o),r<128?s[a>>2]|=r<<tt[a++&3]:r<2048?(s[a>>2]|=(192|r>>6)<<tt[a++&3],s[a>>2]|=(128|r&63)<<tt[a++&3]):r<55296||r>=57344?(s[a>>2]|=(224|r>>12)<<tt[a++&3],s[a>>2]|=(128|r>>6&63)<<tt[a++&3],s[a>>2]|=(128|r&63)<<tt[a++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++o)&1023),s[a>>2]|=(240|r>>18)<<tt[a++&3],s[a>>2]|=(128|r>>12&63)<<tt[a++&3],s[a>>2]|=(128|r>>6&63)<<tt[a++&3],s[a>>2]|=(128|r&63)<<tt[a++&3]);this.lastByteIndex=a,this.bytes+=a-this.start,a>=64?(this.block=s[16],this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};ke.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=vd[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};ke.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=this.blocks,u,c,g,d,f,m,T,h,p,b,x;for(u=16;u<64;++u)f=l[u-15],c=(f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3,f=l[u-2],g=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10,l[u]=l[u-16]+c+l[u-7]+g<<0;for(x=t&n,u=0;u<64;u+=4)this.first?(this.is224?(h=300032,f=l[0]-1413257819,s=f-150054599<<0,r=f+24177077<<0):(h=704751109,f=l[0]-210244248,s=f-1521486534<<0,r=f+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),h=e&t,d=h^e&n^x,T=o&a^~o&i,f=s+g+T+Dr[u]+l[u],m=c+d,s=r+f<<0,r=f+m<<0),c=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),p=r&e,d=p^r&t^h,T=s&o^~s&a,f=i+g+T+Dr[u+1]+l[u+1],m=c+d,i=n+f<<0,n=f+m<<0,c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),b=n&r,d=b^n&e^p,T=i&s^~i&o,f=a+g+T+Dr[u+2]+l[u+2],m=c+d,a=t+f<<0,t=f+m<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),x=t&n,d=x^t&r^b,T=a&i^~a&s,f=o+g+T+Dr[u+3]+l[u+3],m=c+d,o=e+f<<0,e=f+m<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0,this.h5=this.h5+a<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};ke.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=C[e>>28&15]+C[e>>24&15]+C[e>>20&15]+C[e>>16&15]+C[e>>12&15]+C[e>>8&15]+C[e>>4&15]+C[e&15]+C[t>>28&15]+C[t>>24&15]+C[t>>20&15]+C[t>>16&15]+C[t>>12&15]+C[t>>8&15]+C[t>>4&15]+C[t&15]+C[n>>28&15]+C[n>>24&15]+C[n>>20&15]+C[n>>16&15]+C[n>>12&15]+C[n>>8&15]+C[n>>4&15]+C[n&15]+C[r>>28&15]+C[r>>24&15]+C[r>>20&15]+C[r>>16&15]+C[r>>12&15]+C[r>>8&15]+C[r>>4&15]+C[r&15]+C[o>>28&15]+C[o>>24&15]+C[o>>20&15]+C[o>>16&15]+C[o>>12&15]+C[o>>8&15]+C[o>>4&15]+C[o&15]+C[a>>28&15]+C[a>>24&15]+C[a>>20&15]+C[a>>16&15]+C[a>>12&15]+C[a>>8&15]+C[a>>4&15]+C[a&15]+C[i>>28&15]+C[i>>24&15]+C[i>>20&15]+C[i>>16&15]+C[i>>12&15]+C[i>>8&15]+C[i>>4&15]+C[i&15];return this.is224||(l+=C[s>>28&15]+C[s>>24&15]+C[s>>20&15]+C[s>>16&15]+C[s>>12&15]+C[s>>8&15]+C[s>>4&15]+C[s&15]),l};ke.prototype.toString=ke.prototype.hex;ke.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,o>>24&255,o>>16&255,o>>8&255,o&255,a>>24&255,a>>16&255,a>>8&255,a&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,s&255),l};ke.prototype.array=ke.prototype.digest;ke.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function Ir(e,t,n){var r,o=typeof e;if(o==="string"){var a=[],i=e.length,s=0,l;for(r=0;r<i;++r)l=e.charCodeAt(r),l<128?a[s++]=l:l<2048?(a[s++]=192|l>>6,a[s++]=128|l&63):l<55296||l>=57344?(a[s++]=224|l>>12,a[s++]=128|l>>6&63,a[s++]=128|l&63):(l=65536+((l&1023)<<10|e.charCodeAt(++r)&1023),a[s++]=240|l>>18,a[s++]=128|l>>12&63,a[s++]=128|l>>6&63,a[s++]=128|l&63);e=a}else if(o==="object"){if(e===null)throw new Error(cn);if($n&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!$n||!ArrayBuffer.isView(e)))throw new Error(cn)}else throw new Error(cn);e.length>64&&(e=new ke(t,!0).update(e).array());var u=[],c=[];for(r=0;r<64;++r){var g=e[r]||0;u[r]=92^g,c[r]=54^g}ke.call(this,t,n),this.update(c),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}Ir.prototype=new ke;Ir.prototype.finalize=function(){if(ke.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();ke.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),ke.prototype.finalize.call(this)}};var un=kl();un.sha256=un;un.sha224=kl(!0);un.sha256.hmac=Pl();un.sha224.hmac=Pl(!0);var Ml=un;var Al=Ml.sha256;function nt(e){return Promise.resolve(Al(e))}function Fr(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function _t(e,t){let n=Al.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Rl(e,t){let n=await _t(e,t);return Fr(n)}async function Hr(e,t){let n=Sd(t),r=await _t(e,n);return Fr(r)}function Sd(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}function Un(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():y}var J=Un();function Be(){return J.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Nl(){return typeof Deno<"u"}var Ed=Un(),Bn=Ed.PROD==="1";function Dl(e,t,n){let r=e.querySelectorAll("footer"),o=e.querySelectorAll("aside"),a=Array.from(r).concat(Array.from(o)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),l=[];for(let c of i)s.length>0&&s[0].contains(c)||l.push(c);for(let c=0;c<t.length;c++){let g=t[c].element;for(let d=c+1;d<t.length;d++){let f=t[d].element;if(g.contains(f))t.splice(d,1),d--;else if(f.contains(g)){t.splice(c,1),c--;break}else g===f&&(t.splice(d,1),d--)}}return t.filter(c=>{let g=c.element;if(c.reserve)return!0;let d=!1,f=!1;for(let m of a)if(g===m||m.contains(g)){d=!0;break}if(d)return!1;for(let m of l){if(g.nodeName==="H1")continue;let T=m.querySelector("h1");if(!(T&&Hl(T.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(g===m||m.contains(g))){f=!0;break}}return!f}).map(c=>c.element)}function fn(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function $r(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function Eo(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function jn(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function Qe(e,t){let n=[];for(let r of t){let o=e.querySelectorAll(r);for(let a of o)n.push(a)}return n}function Ld(e,t){let n=function(a){return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE?a.nodeType===Node.ELEMENT_NODE&&We(a,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),o=!0;for(;r.nextNode();){let a=r.currentNode;if(a.nodeType===Node.ELEMENT_NODE){if(Q(a,ht)){if(o===!0)return!0;continue}if(!t.inlineTags.includes(a.nodeName))return!1}}return!0}function rt(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?Q(e,Bt)||e.nodeName==="BR"?!1:Q(e,ht)?!0:Ld(e,t):Q(e,ht):!1}function Ol(e,t){for(let n of t)if(n===e)return!0;return!1}function Il(e,t){return!!t.metaTags.includes(e.nodeName)}function We(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:o}=t,a=[];return n&&o&&o.length>0?a=o||[]:a=o.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&Q(e,Ye)?!0:e.nodeType===Node.ELEMENT_NODE&&Q(e,Ft)?!1:!!a.includes(e.nodeName)}function Fl(e,t,n,r){let o=Wn(r),a=new RegExp(`^${o[0]}(\\d+)${o[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||Co(s)||Lo(s)||_o(s)||a.test(s)?!1:Hl(i,t,n)}function Hl(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function Lo(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function _o(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function Co(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function $l(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function Q(e,t){return _d(e,t,"1")}function _d(e,t,n){return Bn?e[Le]?!!(e[Le]&&e[Le][t]===n):!1:e.dataset[t]===n}function Ul(e,t){return Bn?e[Le]?!!(e[Le]&&e[Le][t]):!1:e.dataset[t]!==void 0}function So(e){return e.replace(/\s/g," ")}function Ur(e){let t=e.querySelector("main"),n="";if(t&&(n=So(t.innerText||t.textContent||"")),n.length>=10)return n;let r=e.querySelectorAll("article");if(r.length>0)for(let o of r)n=So(o.innerText||o.textContent||"");return n.length>=10||(n=So(e.innerText||e.textContent||"")),n}function ko(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ne(e,t,n){e.isContentEditable||(e.dataset[co]||(e.dataset[co]="1"),Bn?(e[Le]||(e[Le]={}),e[Le][t]||(e[Le][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function Bl(e,t){if(Bn){if(!e[Le]||!e[Le][t])return;delete e[Le][t]}else delete e.dataset[t]}function Ct(e,t){return Bn?!e[Le]||!e[Le][t]?void 0:e[Le][t]:e.dataset[t]}function gn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||Q(e,Pr))&&(n=!0),n}function jl(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function Wn(e){let{config:t}=e,n=bl;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function Br(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function Wl(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function jt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=vt.map(o=>o.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let o=n.indexOf(t);return o===-1?"auto":vt[o]}else return"auto";else return vt[r]}var zl={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3}]};function Cd(){if(J.PROD==="1")return{};let e={};if(J.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&J.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:J.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:J.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(J.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&J.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:J.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:J.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(J.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:J.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(J.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:J.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(J.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&J.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:J.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:J.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(J.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&J.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:J.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:J.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(J.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:J.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return J.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=J.IMMERSIVE_TRANSLATE_SERVICE),J.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),J.MOCK==="1"&&(e.translationService="mock"),e}async function Po(){let e=await G.storage.local.get(kr);return e[kr]?e[kr]:{}}async function Wt(){let e=await G.storage.local.get(Cr),t={...zl,buildinConfigUpdatedAt:J.BUILD_TIME};if(e[Cr]){let d=e[Cr],f=new Date(d.buildinConfigUpdatedAt),m=new Date(t.buildinConfigUpdatedAt);f>m&&(t=d)}let n={};if(!Be()){let d=await G.commands.getAll();for(let f of d)f.name&&f.shortcut&&(n[f.name]=f.shortcut)}let r={...t,targetLanguage:bo,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:t.generalRule,translationGeneralConfig:{engine:"google"},rules:[]},o=Cd(),i=(await G.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},l=Object.assign({},s,o,i);if(!l.interfaceLanguage){let d=await kd();l.interfaceLanguage=d}let u=Object.assign(r,t),c=Object.keys(u),g=["translationUrlPattern","translationLanguagePattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let d of c){let f=d;if(f==="generalRule")typeof l[f]=="object"&&(u[f]=Nr(r[f],l[f]));else if(f==="translationServices"){let m=l[f]||{},T=t[f]||{},h=Object.keys(T),p=Object.keys(m),b=[...new Set([...h,...p])],x={};for(let L of b)x[L]={...T[L],...m[L]};u[f]=x}else if(typeof l[f]!="string"&&typeof l[f]!="boolean"&&typeof l[f]!="number"&&g.includes(f))l[f]&&(u[f]=Object.assign(u[f],l[f])),f==="shortcuts"&&(u[f]={...u[f],...n});else if(f==="rules"){if(Array.isArray(l[f])&&(u[f]=[...l[f],...u[f]]),J.PROD==="0"&&J.DEV_RULES){let m=JSON.parse(J.DEV_RULES);u[f]=[...m,...u[f]]}}else l[f]!==void 0&&(u[f]=l[f])}return u.donateUrl=t.donateUrl,u.minVersion=t.minVersion,u.feedbackUrl=t.feedbackUrl,u}var kd=async()=>{let n=(await G.i18n.getAcceptLanguages()).map(r=>jt(r)).find(r=>Ot[r]);return n||"en"};async function zn(e){let{url:t,config:n,state:r}=e,o=new URL(t),a="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:l,translationTheme:u,translationThemePatterns:c,translationUrlPattern:g,targetLanguage:d,sourceLanguageUrlPattern:f}=n,m=St(t,i.matches);if(!m){let pe=i.selectorMatches;m=ko(pe)}let T=s,h=Object.keys(l);for(let pe of h){let Ue=l[pe];if(St(t,Ue.matches)){T=pe;break}}let p=u,b=Object.keys(c);for(let pe of b){let Ue=c[pe];if(St(t,Ue.matches)){p=pe;break}}let x=St(t,g.matches),L=St(t,g.excludeMatches);L||(L=St(t,wl));let $=Object.keys(f),z={};for(let pe of $){let Ue=f[pe];if(Ue&&Ue.matches)for(let w of Ue.matches)z[w]=pe}let F=Object.keys(z),M=To(t,F);M&&(a=z[M]??"auto");let k=d||"zh-CN",Y=o.hostname,q=await nt(Y),X=o.pathname+o.search+o.hash,ce=await nt(X),oe=`https://${q}.com/${ce}`,Se=await Po(),xe={targetLanguage:k,config:n,isDetectParagraphLanguage:m,translationService:T,translationTheme:p,isTranslateUrl:x,sourceLanguage:a,isTranslateExcludeUrl:L,rule:n.generalRule,url:t,encryptedUrl:oe,state:r||{translationArea:n.translationArea,translationStartMode:n.translationStartMode,isAutoTranslate:!1,isNeedClean:!1},localConfig:Se};xe.translationService==="d"&&(n.immediateTranslationTextCount=0);let se=n.rules,ue;globalThis.PDFViewerApplication?ue=se.find(pe=>pe.isPdf):ue=se.find(pe=>{let Ue=St(t,pe.matches);if(!Ue){let w=pe.selectorMatches;w&&w.length>0&&(Ue=ko(w))}return Ue});let _e=n.generalRule;return ue&&(xe.rule=Nr(_e,ue)),xe.rule.isPdf&&(xe.state.translationArea="main"),xe.state.translationArea==="body"&&(xe.rule.paragraphMinTextCount=1,xe.rule.paragraphMinWordCount=1),xe}function jr(e){let t;try{t=new URL(e)}catch{return!1}let n=t.pathname;return n.endsWith(".html")||n.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}var Mo={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return G.storage[n].get(r)},set:(e,t,n)=>G.storage[n].set({[e]:t})};function Wr(e,t,n){let[r]=ye(()=>typeof t=="function"?t():t),[o]=ye(n),[a,i]=ye(r),[s,l]=ye(!0),[u,c]=ye("");et(()=>{Mo.get(e,r,o).then(d=>{d[e]&&i(d[e]),l(!0),c("")}).catch(d=>{l(!1),c(d)})},[e,r,o]);let g=Pn(d=>{let f=typeof d=="function"?d(a):d;W.debug("new settings",f),Mo.set(e,f,o).then(()=>{i(f),l(!0),c("")}).catch(m=>{i(f),l(!1),c(m)})},[o,e,a]);return[a,g,s,u]}function Ao(e,t,n){let r=[];return function(){let[a,i,s,l]=Wr(e,t,n),u=Pn(c=>{for(let g of r)g(c)},[]);return et(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[a,u,s,l]}}function ql(e,t){return Ao(e,t,"sync")}var Pd="userConfig",Md={},Vl=ql(Pd,Md);var De=class extends Error{constructor(n,r,o){super(r);this.name=n,o&&(this.details=o)}};var qn=new Map,zt=class{constructor(t,n=!1){this.logger=new Hn,n&&this.logger.setLevel("debug"),this.fromType=t,qn.has(t)||(qn.set(t,new Map),G.runtime.onMessage.addListener((r,o,a)=>{let i=r.from,s=r.to,l,u,c;o.tab&&o.tab.id&&(l=o.tab.id,i=`${i}:${l}`,u=o.tab.url,c=o.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let g=No(s),{type:d,name:f}=g;if(d!==t)return!1;let m=No(i),h=qn.get(d).get(f);if(!h)return this.logger.debug(`no message handler for ${d}:${s}`),a({ok:!1,errorName:"notActive",errorMessage:`${s} is not active, from ${i} ${r.payload.method}`}),!1;let{messageHandler:p,sync:b}=h,x={type:t,name:m.name,id:l,url:u,active:c};if(b){try{let L=p(r.payload,x);a({ok:!0,data:L})}catch(L){a({ok:!1,errorName:L.name,errorMessage:L.message,errorDetails:L.details})}return!1}else return p(r.payload,x).then(L=>{a({ok:!0,data:L})}).catch(L=>{a({ok:!1,errorName:L.name,errorMessage:L.message,errorDetails:L.details})}),!0}))}getConnection(t,n,r){let o=!1;r&&r.sync&&(o=!0);let a=this.fromType,i=qn.get(a);if(i.has(t))return i.get(t).connectionInstance;{let s=new Ro(`${a}:${t}`,this.logger);return qn.get(a).set(t,{messageHandler:n,sync:o,connectionInstance:s}),s}}},Ro=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=No(t),{type:o,id:a}=r;if(o!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await G.runtime.sendMessage(i);return Kl(i,s,this.logger)}catch(s){if(o==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(l,n,t,s),Promise.resolve({message:l})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await G.tabs.sendMessage(a,i);return Kl(i,s,this.logger)}}};function Kl(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new De(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function No(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var Ad=function(e,t){let{method:n,data:r}=e;W.debug(`popup received message: ${n}`,r||" ");let o;t.active&&(o=t.id,globalThis.document.dispatchEvent(new CustomEvent(In,{detail:{tabId:o,payload:e}})))},zr;function Gl(){Vn()}function Vn(){return zr||(zr=new zt("popup",!1).getConnection("main_sync",Ad),zr)}function Jl(e,t=2e3){return n=>{let r,o=0;return a=>{++o==e&&(n(a),o=0),clearTimeout(r),r=setTimeout(()=>o=0,t)}}}function Yl(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function Xl(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Ql(){return G.runtime.getManifest().version}var Rd=0;function N(e,t,n,r,o){var a,i,s={};for(i in t)i=="ref"?a=t[i]:s[i]=t[i];var l={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Rd,__source:o,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(i in a)s[i]===void 0&&(s[i]=a[i]);return H.vnode&&H.vnode(l),l}function kt(e){let{items:t,maxWidth:n}=e;return n=n||128,N("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let o=r.target.value,a=t.find(i=>i.value===o);a&&a.onSelected(a)},children:t.map(r=>N("option",{value:r.value,selected:r.selected,children:r.label}))})}var qr="DROP_DOWN_DEFAULT_VALUE";function Do(e){let{showArrow:t,onSelected:n,className:r,menus:o,maxWidth:a}=e;r=r||"",t=t??!0,a=a||60;let i=xa(null);return N("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${r||""}`,value:qr,style:{maxWidth:`${a}px`},onChange:s=>{s.preventDefault();let l=s.target.value;if(i.current&&l!==qr){i.current.value=qr,i.current?.dispatchEvent(new Event("change"));let u=o.find(c=>c.value===l);u&&n(u)}},children:[{value:qr,label:e.label}].concat(o).map(s=>N("option",{value:s.value,children:s.label}))})}function Zl(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Oo(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let o=t[r],a=new RegExp("{"+r+"}","gm");n=n.replace(a,o.toString())}),n}function Kn(e,t,n){let r=e[t];if(!r)return n;let o=n.split("."),a="";do{a+=o.shift();let i=r[a];i!==void 0&&(typeof i=="object"||!o.length)?(r=i,a=""):o.length?a+=".":r=n}while(o.length);return r}function ec(e,t,n,r,o){if(!e.hasOwnProperty(n))return t;let a=Kn(e,n,t);return a===t&&n!==r&&(a=Kn(e,r,t)),Oo(a,o)}var dn={},Nd={root:"",lang:"en",fallbackLang:"en"};function Io(e,t){let n=Object.assign({},Nd,e);dn=t||dn;let[r,o]=ye(n.lang),[a,i]=ye(dn),[s,l]=ye(!1),u=g=>{if(a.hasOwnProperty(g))return;l(!1);let d=Zl(n.root||"",g);n.getUrl&&(d=n.getUrl(n.root||"",g),fetch(d).then(f=>f.json()).then(f=>{dn[g]=f,i({...dn}),l(!0)}).catch(f=>{i({...dn}),l(!0)}))};return et(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:o,t:(g,d)=>{if(!a.hasOwnProperty(r))return g;let f=Kn(a,r,g);return f===g&&r!==n.fallbackLang&&(f=Kn(a,n.fallbackLang,g)),Oo(f,d)},isReady:s}}var Ho=ba(null),Fo={root:"assets",lang:"en",fallbackLang:"en"},tc=e=>{let{t,setLang:n,lang:r,isReady:o}=Io({root:e.root||Fo.root,lang:e.lang||Fo.lang,fallbackLang:e.fallbackLang||Fo.fallbackLang,getUrl:e.getUrl},e.translations);return N(Ho.Provider,{value:{t,setLang:n,lang:r,isReady:o},children:e.children})};function Vr(){return wa(Ho)}function $o(e){let{field:t,onChange:n,value:r}=e;r=r||t.default||"";let{t:o}=Vr();return t.type==="select"?N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[t.label?o(t.label):t.name,"\uFF1A"]}),N(kt,{items:t.options.map(a=>({label:`${a.label?o(a.label):a.value}`,value:r,selected:r===a.value,onSelected:()=>{n(a.value)}}))})]}):null}function nc(e,t,n){let r=Dd(e,t),o=[],a={from:e[0].from,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(a.tempSentences.reduce((l,u)=>l+u.text.length,0)+i.text.length>t||a.tempSentences.length>=n)&&(o.push(a),a={from:i.from,to:i.to,tempSentences:[],url:i.url}),(a.from!==i.from||a.to!==i.to)&&(a.tempSentences.length>0?(o.push(a),a={from:i.from,to:i.to,tempSentences:[],url:i.url}):(a.from=i.from,a.to=i.to)),a.tempSentences.push(i);return a.tempSentences.length>0&&o.push(a),o}function Dd(e,t){let n=[];for(let r=0;r<e.length;r++){let o=e[r],{from:a,to:i,text:s,url:l}=o,u=s.split(/\r?\n/),c=[],g="";for(let d=0;d<u.length;d++){let f=u[d];if(f===""){c.length>0?d<u.length-1&&(c[c.length-1].suffix+=`
`):g+=`
`;continue}else if(f.length>t){let m=[];Uo(f,t,m);for(let T=0;T<m.length;T++){let h=m[T],{text:p,prefix:b,suffix:x}=h;c.push({from:a,to:i,text:p,prefix:b,suffix:x,index:r,url:l})}}else c.push({text:f,prefix:g,suffix:"",from:a,to:i,index:r,url:l});c.length>0&&d<u.length-1&&(c[c.length-1].suffix+=`
`)}n.push(...c)}return n}function Gn(e,t){let n=jt(e),r=jt(t),o=n===r;return o?!0:(o=n.startsWith("zh")&&r.startsWith("zh"),o)}function Uo(e,t,n){let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((a,i)=>{let s=e.lastIndexOf(i,t);return s>a?s:a},-1);if(o===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&Uo(e.slice(t),t,n);else{let a=e.slice(0,o+1);a.startsWith(" ")?n.push({text:a.slice(1),prefix:" ",suffix:""}):n.push({text:a,prefix:"",suffix:""}),o+1<e.length&&Uo(e.slice(o+1),t,n)}return n}async function rc(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let a=await(e.fetchPolyfill||fetch)(t,r);if(a.ok&&a.status>=200&&a.status<400){if(n==="json")return await a.json();if(n==="text")return await a.text();if(n==="raw"){let i=await a.text(),s=Object.fromEntries([...a.headers.entries()]),l=a.url;return l||(a.headers.get("X-Final-URL")?l=a.headers.get("X-Final-URL"):l=t),{body:i,headers:s,status:a.status,statusText:a.statusText,url:l}}}else{let i;try{i=await a.text()}catch(s){W.error("parse response failed",s)}throw new De("fetchError",a.status+": "+a.statusText||"",i)}}function Pt(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Od(e,t){return e<<t|e>>>32-t}function Gr(e,t,n,r,o,a){return Pt(Od(Pt(Pt(t,e),Pt(r,a)),o),n)}function Oe(e,t,n,r,o,a,i){return Gr(t&n|~t&r,e,t,o,a,i)}function Ie(e,t,n,r,o,a,i){return Gr(t&r|n&~r,e,t,o,a,i)}function Fe(e,t,n,r,o,a,i){return Gr(t^n^r,e,t,o,a,i)}function He(e,t,n,r,o,a,i){return Gr(n^(t|~r),e,t,o,a,i)}function Kr(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,o,a,i,s=1732584193,l=-271733879,u=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)r=s,o=l,a=u,i=c,s=Oe(s,l,u,c,e[n],7,-680876936),c=Oe(c,s,l,u,e[n+1],12,-389564586),u=Oe(u,c,s,l,e[n+2],17,606105819),l=Oe(l,u,c,s,e[n+3],22,-1044525330),s=Oe(s,l,u,c,e[n+4],7,-176418897),c=Oe(c,s,l,u,e[n+5],12,1200080426),u=Oe(u,c,s,l,e[n+6],17,-1473231341),l=Oe(l,u,c,s,e[n+7],22,-45705983),s=Oe(s,l,u,c,e[n+8],7,1770035416),c=Oe(c,s,l,u,e[n+9],12,-1958414417),u=Oe(u,c,s,l,e[n+10],17,-42063),l=Oe(l,u,c,s,e[n+11],22,-1990404162),s=Oe(s,l,u,c,e[n+12],7,1804603682),c=Oe(c,s,l,u,e[n+13],12,-40341101),u=Oe(u,c,s,l,e[n+14],17,-1502002290),l=Oe(l,u,c,s,e[n+15],22,1236535329),s=Ie(s,l,u,c,e[n+1],5,-165796510),c=Ie(c,s,l,u,e[n+6],9,-1069501632),u=Ie(u,c,s,l,e[n+11],14,643717713),l=Ie(l,u,c,s,e[n],20,-373897302),s=Ie(s,l,u,c,e[n+5],5,-701558691),c=Ie(c,s,l,u,e[n+10],9,38016083),u=Ie(u,c,s,l,e[n+15],14,-660478335),l=Ie(l,u,c,s,e[n+4],20,-405537848),s=Ie(s,l,u,c,e[n+9],5,568446438),c=Ie(c,s,l,u,e[n+14],9,-1019803690),u=Ie(u,c,s,l,e[n+3],14,-187363961),l=Ie(l,u,c,s,e[n+8],20,1163531501),s=Ie(s,l,u,c,e[n+13],5,-1444681467),c=Ie(c,s,l,u,e[n+2],9,-51403784),u=Ie(u,c,s,l,e[n+7],14,1735328473),l=Ie(l,u,c,s,e[n+12],20,-1926607734),s=Fe(s,l,u,c,e[n+5],4,-378558),c=Fe(c,s,l,u,e[n+8],11,-2022574463),u=Fe(u,c,s,l,e[n+11],16,1839030562),l=Fe(l,u,c,s,e[n+14],23,-35309556),s=Fe(s,l,u,c,e[n+1],4,-1530992060),c=Fe(c,s,l,u,e[n+4],11,1272893353),u=Fe(u,c,s,l,e[n+7],16,-155497632),l=Fe(l,u,c,s,e[n+10],23,-1094730640),s=Fe(s,l,u,c,e[n+13],4,681279174),c=Fe(c,s,l,u,e[n],11,-358537222),u=Fe(u,c,s,l,e[n+3],16,-722521979),l=Fe(l,u,c,s,e[n+6],23,76029189),s=Fe(s,l,u,c,e[n+9],4,-640364487),c=Fe(c,s,l,u,e[n+12],11,-421815835),u=Fe(u,c,s,l,e[n+15],16,530742520),l=Fe(l,u,c,s,e[n+2],23,-995338651),s=He(s,l,u,c,e[n],6,-198630844),c=He(c,s,l,u,e[n+7],10,1126891415),u=He(u,c,s,l,e[n+14],15,-1416354905),l=He(l,u,c,s,e[n+5],21,-57434055),s=He(s,l,u,c,e[n+12],6,1700485571),c=He(c,s,l,u,e[n+3],10,-1894986606),u=He(u,c,s,l,e[n+10],15,-1051523),l=He(l,u,c,s,e[n+1],21,-2054922799),s=He(s,l,u,c,e[n+8],6,1873313359),c=He(c,s,l,u,e[n+15],10,-30611744),u=He(u,c,s,l,e[n+6],15,-1560198380),l=He(l,u,c,s,e[n+13],21,1309151649),s=He(s,l,u,c,e[n+4],6,-145523070),c=He(c,s,l,u,e[n+11],10,-1120210379),u=He(u,c,s,l,e[n+2],15,718787259),l=He(l,u,c,s,e[n+9],21,-343485551),s=Pt(s,r),l=Pt(l,o),u=Pt(u,a),c=Pt(c,i);return[s,l,u,c]}function ac(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function Bo(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function Id(e){return ac(Kr(Bo(e),e.length*8))}function Fd(e,t){var n,r=Bo(e),o=[],a=[],i;for(o[15]=a[15]=void 0,r.length>16&&(r=Kr(r,e.length*8)),n=0;n<16;n+=1)o[n]=r[n]^909522486,a[n]=r[n]^1549556828;return i=Kr(o.concat(Bo(t)),512+t.length*8),ac(Kr(a.concat(i),512+128))}function oc(e){var t="0123456789abcdef",n="",r,o;for(o=0;o<e.length;o+=1)r=e.charCodeAt(o),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function jo(e){return unescape(encodeURIComponent(e))}function sc(e){return Id(jo(e))}function Hd(e){return oc(sc(e))}function ic(e,t){return Fd(jo(e),jo(t))}function $d(e,t){return oc(ic(e,t))}function pn(e,t,n){return t?n?ic(t,e):$d(t,e):n?sc(e):Hd(e)}var mn=[];async function Jr(e,t){return await new Promise((n,r)=>{let o=e,a=1,i=indexedDB.open(o,a);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let l=i.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function lc(e){let t=`${de}-${e.service}@${e.from}->${e.to}`;return await Bd(t,e)}async function cc(e){let t=pn(e.originalText),n=`${de}-${e.service}@${e.from}->${e.to}`;return await Ud(n,t)}async function Ud(e,t){let n=await Jr(e);return await new Promise((r,o)=>{if(!n)return o();let a="cache",s=n.transaction([a],"readonly").objectStore(a).get(t);s.onsuccess=l=>{n.close();let u=s.result;r(u)},s.onerror=l=>{n.close(),console.error("queryInDB->onerror:",l),o()}})}async function Bd(e,t){let n=await Jr(e);return(await Wd()).includes(e)||await jd(e),await new Promise(o=>{if(!n)return o(!1);let a="cache",s=n.transaction([a],"readwrite").objectStore(a).put(t);s.onsuccess=l=>{n.close(),o(!0)},s.onerror=l=>{console.error("addInDB->onerror:",l),n.close(),o(!1)}})}async function jd(e){let t="cache_list",n=await Jr(de+"-cacheList",t),o=n.transaction([t],"readwrite").objectStore(t).put({key:e});o.onsuccess=a=>{n.close(),mn.push(e)},o.onerror=a=>{n.close(),console.error(a)}}async function Wd(){if(mn&&mn.length>0)return mn;let e=await Jr(de+"-cacheList","cache_list");return mn=await new Promise(t=>{let n="cache_list",o=e.transaction([n],"readonly").objectStore(n).getAllKeys();o.onsuccess=a=>{e.close(),t(o.result)},o.onerror=a=>{e.close(),console.error(a),t([])}}),mn}var zd=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,qd=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Vd=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,Kd=/(\s+)|([\p{P}\p{S}])/gu,Gd=[["zh-CN",zd],["ja",qd],["ko",Vd]];function uc(e){if(!e)return"auto";let t="auto",n=0,r=0,o=e.match(Kd);o&&(r=o.reduce((i,s)=>i+s.length,0));let a=e.length-r;for(let i of Gd){let s=i[1],l=i[0],u=e.match(s),c=u?u.length:0;c>n&&(n=c,t=l)}return n*2.5/a>.5?t:"auto"}function Wo(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:o,additionalInlineSelectors:a,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:l,globalStyles:u,stayOriginalTags:c,stayOriginalSelectors:g,globalAttributes:d}=t,f=Object.keys(u);if(f.length>0)for(let k of f){let Y=Qe(document.body,[k]);for(let q of Y)if(!Q(q,fo)){ne(q,fo,"1");let X=u[k];q.style.cssText+=X}}let m=Object.keys(d);if(m.length>0)for(let k of m){let Y=d[k],q=Object.keys(Y),X=Qe(document.body,[k]);for(let ce of X)for(let oe of q){let Se=Y[oe];ce.getAttribute(oe)!==Se&&(Se===null?ce.removeAttribute(oe):ce.setAttribute(oe,Se))}}let T=[...n,...r],h=[...o,...a],p=[...s],b=l.map(k=>k.toLowerCase()),x=i;Qe(document.body,T).forEach(k=>{Q(k,Ye)||ne(k,Ye,"1")});let $=[];if(p.length>0&&($=Qe(document.body,p).filter(k=>!Q(k,Je))),b.length>0){let k=c.reduce((X,ce)=>{let oe=ce.toLowerCase();return X.push(`<${oe}>`,`</${oe}>`,`<${oe} />`),X},[]),Y=[">http://",">https://"];k.push(...Y);let q=Qe(document.body,b).filter(X=>{if(Q(X,Je))return!1;{let oe=X.innerHTML;return!k.some(xe=>oe.includes(xe))}});$.push(...q)}$.forEach(k=>{Q(k,Je)||ne(k,Je,"1")});let z=[];if(h.length>0)for(let k of e)z.push(...Qe(k,h));z.forEach(k=>{ne(k,ht,"1")});let F=[];if(x.length>0)for(let k of e)F.push(...Qe(k,x));F.forEach(k=>{ne(k,Bt,"1")});let M=[];if(g.length>0)for(let k of e)M.push(...Qe(k,g));M.forEach(k=>{ne(k,Pr,"1")})}function fc(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function gc(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await at({text:Ur(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=jt(document.documentElement.lang)),e}function zo(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,o=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let l=e.matches(s),u=[];l?u=[e]:u=e.querySelectorAll(s);for(let c of u)Q(c,Ft)||ne(c,Ft,"1");return Array.from(u)}).flat();o.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let g=Qe(e,n.additionalSelectors);for(let d of g)Q(d,Ft)||ne(d,Ft,"1");o.push(...g.map(d=>({element:d,reserve:!0})))}let i=Qe(e,["article"]);o.push(...i.map(g=>({element:g,reserve:!0})));let s;if(o.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let g=Array.from(s);o=o.concat(g.map(d=>({element:d,reserve:!0})))}let l=[],u=g=>{if(g.nodeType===Node.ELEMENT_NODE&&We(g,t.rule,!1))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE&&(g.textContent?g.textContent.trim():"").length>=n.containerMinTextCount){let f=g.parentNode;f&&f.parentNode&&(f=f.parentNode),f&&f.nodeType===Node.ELEMENT_NODE&&(l.includes(f)||l.push(f))}return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;c.nextNode(););o.push(...l.map(g=>({element:g,reserve:!1})))}let a=Dl(e,o,n);return a.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),a}var qo=[];function dc(e){qo.push(e)}function Vo(){qo.forEach(e=>e()),qo=[]}var mc="auto",Yr="auto",pc="auto";function hc(e){mc=e}function Xr(e){Yr=e}function Ko(){return Yr!=="auto"?Yr:pc!=="auto"?pc:mc}function bc(){return Yr}function ot(e,t,n){let r=[],{rule:o}=n,a=Wn(n);if(e.length===0)return null;e=e.map(d=>d.element?d:{element:d});let i="",s=!1;for(let d=0;d<e.length;d++){let m=e[d].element;if(typeof m=="string"){i+=m;continue}let T="";Br(m,`[${Ye}]`)?T=Jd(m):T=m.innerText;let h=T.startsWith(" "),p=T.endsWith(" ");m.tagName==="A"&&(h=!0,p=!0);let b=gn(m,o);if(T===""||b){b&&(h=!0,p=!0);let x={type:"element",value:m};r.push(x);let L=r.length-1,$=`${a[0]}${L}${a[1]}`;i+=(h?" ":"")+$+(p?" ":"");continue}if(!We(m,o,!0)){{let x=t?T:T.trim().replace(/\n/g," ");if(Lo(x)||_o(x)||Co(x)||$l(x)){let L={type:"element",value:m};r.push(L);let $=r.length-1,z=`${a[0]}${$}${a[1]}`;i+=(h?" ":"")+z+(p?" ":"")}else s=!0,i+=(h?" ":"")+x+(p?" ":"")}if(typeof m!="string"){let x=jn(m.nextSibling,t);x&&(i+=x)}}}if(!s)return null;let l=!1,u=i.split(" ").length,c=i.split(`
`).length;u<=o.blockMinWordCount&&i.length<=o.blockMinTextCount&&c<2&&(l=!0);let g={elements:e.map(d=>d.element),text:i,variables:r,inline:l,preWhitespace:t};return Fl(g,n.state.translationArea==="body"?2:o.paragraphMinTextCount,n.state.translationArea==="body"?1:o.paragraphMinWordCount,n)?g:null}function Jd(e){let t="",n=o=>o.nodeType===Node.ELEMENT_NODE?Q(o,Ye)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:o.nodeType===Node.TEXT_NODE?(o.textContent&&o.textContent.trim()!==""&&(t+=o.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var Yd=1,hn=new Map;function xc(){return hn}function qt(e){return hn.get(e)}function Jn(e,t){hn.set(e,t)}function wc(){hn.clear()}function yc(e){if(!Q(e,Ht))return!1;if(Q(e,$t))return!0;let t=Ct(e,Ut);if(!t)return!1;let n=parseInt(t),r=hn.has(n);if(!r){let o=document.getElementById(`${Xe}-${n}`);o&&o.remove()}return r}function bt(e,t){let n={...e,id:Yd++};n.elements.forEach(r=>{r instanceof HTMLElement&&(ne(r,Ht,"1"),ne(r,Ut,`${n.id}`))}),t.push(n),hn.set(n.id,{...n,state:"Original",observers:[]})}async function vc(e,t,n){let r=[],{targetLanguage:o,rule:a}=n;for(let c of t){if(We(c,a,!1))continue;let g=Q(c,ln),d=[];if(Q(c,Je)){if(!yc(c)){let h=ot([c],g,n);h&&bt(h,r)}continue}let f=h=>{if(!(h.nodeType===Node.TEXT_NODE||h.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(h.nodeType===Node.ELEMENT_NODE){let p=h;if(p.isContentEditable||yc(h))return NodeFilter.FILTER_REJECT;if(ne(p,Ht,"1"),Q(p,Je)){if(d.length>0){let x=ot([...d],g,n);x&&bt(x,r),d.length=0}d.push(p);let b=ot([...d],g,n);return b&&bt(b,r),d.length=0,NodeFilter.FILTER_REJECT}}if(We(h,a,!0)){if((h.nodeName==="CODE"||h.nodeName==="TT")&&h.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(rt(h,a))return Tc(h,d,r,g,n),NodeFilter.FILTER_REJECT;if(d.length>0){let p=ot([...d],g,n);p&&bt(p,r),d.length=0}return NodeFilter.FILTER_REJECT}return h.nodeName==="PRE"?(h.classList.contains("code"),NodeFilter.FILTER_REJECT):rt(h,a)?(Tc(h,d,r,g,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},m=document.createTreeWalker(c,NodeFilter.SHOW_ELEMENT,f),T=m.nextNode();for(;T;){if(d.length>0){let h=ot([...d],g,n);h&&bt(h,r),d.length=0}T=m.nextNode()}if(d.length>0){let h=ot([...d],g,n);h&&bt(h,r),d.length=0}}let i=r.map(c=>{let{text:g}=c;return at({text:g})}),s=await Promise.all(i),l=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[];return s.forEach((c,g)=>{if(!Gn(c,o)){if(u.length>0&&u.some(m=>Gn(c,m)))return;l.push(r[g])}}),r=l,r}function Xd(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),o=null,a=!1;for(;o=r.nextNode();){let s=o.textContent||"",l=s.trim();if(!a&&s.length>0&&l.length===0){a=!0,n.push(" ");continue}l.length>0&&(n.push(o.parentElement),a=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=jn(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=jn(e.nextSibling,t);s&&n.push(s)}return n}function Tc(e,t,n,r,o){let a=e.previousElementSibling;if(a&&!rt(a,o.rule)&&t.length>0){let s=ot([...t],r,o);s&&bt(s,n),t.length=0}We(e,o.rule,!1)?Il(e,o.rule)||t.push(e):gn(e,o.rule)?t.push(e):Br(e,["code","tt"])?t.push(...Xd(e,r)):t.push(e)}async function _c(e,t,n,r){let o=[],{rule:a}=n;for(let i=0;i<t.length;i++){let s=t[i],l=r[i];if(!l)throw new Error("targetContainer is null");let u=[],c=!0,g=null,d=function(T){let h=T;if(["DIV","BR"].includes(h.nodeName))return c=!0,NodeFilter.FILTER_REJECT;if(h.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(Zd(T))return NodeFilter.FILTER_REJECT;if(ne(h,Ht,"1"),rt(h,a)){let p=fn(u),b=globalThis.getComputedStyle(h);if(!p)u.push(Lc(h,b));else{let x=globalThis.getComputedStyle(p),L=Go(x),$=Go(b),z=Ec($,L),F=!1;c&&g&&Ec($,g).left>=1.2&&(F=!0),!F&&c&&fn(u)&&$r(u).reduce((q,X)=>{let ce=Go(globalThis.getComputedStyle(X));return Math.max(q,ce.right)},0)-L.right>a.pdfNewParagraphIndentRightIndentPx&&(F=!0),c&&(g=$,c=!1),F||(F=Qd(z,a)),F&&Sc(u,o,n,l),u.push(Lc(h,b)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,d),m=f.nextNode();for(;m;)m=f.nextNode();Sc(u,o,n,l)}return o}function Sc(e,t,n,r){if(e.length>0){let o=ot([...e],!1,n);o&&(o.isPdf=!0,o.targetContainer=r,o.inline=!1,bt(o,t)),e.length=0}}function Go(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function Qd(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<0}function Ec(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Lc(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function Zd(e){if(!Q(e,Ht))return!1;if(Q(e,$t))return!0;let t=Ct(e,Ut);if(!t)return!1;let n=parseInt(t),o=xc().has(n);if(!o){let a=document.getElementById(`${Xe}-${n}`);a&&a.remove()}return o}function Cc(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ep(e,t,n=[],r,o){let a=["notranslate"];return r&&a.push(xl),e&&(a.push(`${de}-target-translation-theme-${e}`),t?a.push(`${mo}-theme-${e}`):a.push(`${po}-theme-${e}`)),n.length>0&&a.push(...n),t?a.push(mo):(a.push(po),o&&a.push(Tl)),a}function tp(e){let t=["notranslate",yl];return e&&t.push(`${de}-target-translation-theme-${e}-inner`),t}function kc(e,t,n){let{rule:r,translationTheme:o}=n,{variables:a}=e;a=a||[];let{text:i}=t,{wrapperPrefix:s,wrapperSuffix:l}=r,u=Wn(n),c="afterend",g=new RegExp(`${u[0]}(\\d+)${u[1]}`,"g"),d=0,f=Cc(i);a.length>0&&(f=f.replace(g,h=>{let p=f.indexOf(h),b=f[p-1]===" ",x=f[p+h.length]===" ",L=a[Number(d)];if(d++,L.type==="element"){let $=L.value.outerHTML;return b||($=" "+$),x||($=$+" "),$}else W.error("variable type not supported",L);return h}));let m=ep(o,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf),T=tp(o);return f=`<span class="${m.join(" ")}"><span class="${T.join(" ")}">${f}</span></span>`,e.inline||(s==="smart"?f=`<br>${f}`:f=`${s}${f}`,l==="smart"?f=`${f}`:f=`${f}${l}`),e.inline&&(f=`<span class="notranslate">&nbsp;</span>${f}`),{html:f,position:c}}function Mc(e,t){let n=[];for(let r of e){if(Q(r,Je))continue;if(ne(r,lo,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let a=s=>s.nodeType===Node.ELEMENT_NODE&&We(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&Yo(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,a);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let a=r.querySelectorAll("pre");for(let i of a)Pc(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(Ul(r,ln)||(np(r)?(ne(r,ln,"1"),t.isTransformPreTagNewLine&&Pc(r)):ne(r,ln,"0"))),Jo(0,r,t,n)}return{hiddenElements:n}}function Jo(e,t,n,r=[]){if(Q(t,Je))return;let o=!1;if(e===0){let a=gn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&rt(t,n)&&!a&&(o=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let a of t.childNodes)if(a.nodeType===Node.ELEMENT_NODE){if(We(a,n,!1))continue;{let i=globalThis.getComputedStyle(a),s=!1;if(i.display==="none"&&(r.push(a),s=!0),!s){let l=i.clip,u=i.zIndex,c=i.height,g=i.width,d=0;if(u.startsWith("-")){let f=parseInt(u);isNaN(f)||(d=f)}if((l==="rect(1px, 1px, 1px, 1px)"||d<0)&&(s=!0),!s&&a.nodeName!=="BR"){let f=parseInt(c),m=parseInt(g);!isNaN(f)&&!isNaN(m)&&(f>0&&f<8||m>0&&m<=8)&&(s=!0)}}if(s){ne(a,Ye,"1");continue}else{if(a.nodeName==="DIV"||jl(a,n)){if((i.display==="inline"||i.display==="inline-flex")&&!Q(a,Bt)){ne(a,ht,"1");continue}}else if((a.nodeName==="SPAN"||a.nodeName==="A")&&!i.display.startsWith("inline")){Q(a,ht)||(ne(a,Bt,"1"),Jo(e+1,a,n,r));continue}if(rt(a,n)&&!o)continue;Jo(e+1,a,n,r)}}}else if(a.nodeType===Node.TEXT_NODE){let i=a.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");a.after(s),s.appendChild(a)}}}}function np(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Pc(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function Yo(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let l=n.lastIndexOf(s,t);return l>i?l:i},-1);if(a===-1)n.length>t+20&&Yo(e,t+20);else{let i=n.slice(a+1);a++,i.startsWith(" ")&&a++;let s=e.splitText(a),l=document.createElement("br");s.parentNode?.insertBefore(l,s),a+1<n.length&&Yo(s,t)}}function Ac(e,t){let n=[];for(let r of e){let o=0,a=1e5,i=document.createElement("div"),s=c=>{let g=c;if(["DIV","BR"].includes(g.nodeName))return NodeFilter.FILTER_REJECT;if(g.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(g.nodeName==="SPAN"){let d=g.getBoundingClientRect(),f=globalThis.getComputedStyle(g),m=d.right,T=d.left,h=f.top.slice(0,-2),p=f.fontSize.slice(0,-2);return m>o&&(o=m),T<a&&(a=T),ne(g,Fn,`${T}`),ne(g,Mr,`${m}`),ne(g,ml,h),ne(g,hl,p),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;l.nextNode(););let u=o-a;u<600&&(u=600),n.push(i),i.style.left=o+"px",i.style.width=u+"px",i.classList.add(Rr),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var Zr="Original",Qr=[],es=new Set,Xo=[],ea=[],Nc=[],ta=[],Rc=globalThis.location.href.split("#")[0],ts=0,ve,rp=sr(gp,300),ap=sr(Ic,200),op=Un(),sp=op.PROD==="1",Yn,Xn,Qn="";async function Dc(){dt()==="Original"?await Mt():(dt()==="Translated"||dt()==="Error")&&bn()}function Oc(){let e=document.querySelectorAll(`[${$t}="1"]`);for(let t of e)t.style.display="none"}function bn(){Vo(),Zo(),$e("Translating"),Qn&&(document.title=Qn),document.querySelectorAll("."+Xe).forEach(r=>{r.remove()}),document.querySelectorAll("."+Rr).forEach(r=>{r.remove()}),document.querySelectorAll("["+uo+"]").forEach(r=>{if(sp)delete r[Le];else{let a=Object.keys(r.dataset).filter(i=>i.startsWith(le));for(let i of a)delete r.dataset[i]}r.removeAttribute(uo)}),$e("Original")}function ip(e,t){let n=!1,r=Eo(e.elements),o=fn(e.elements);es.add(e.id);let a=[];if(r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});ea.push(s),a.push(s),s.observe(r)}if(o&&o!==r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});ea.push(s),a.push(s),s.observe(o)}let i=qt(e.id);i&&(i.observers=a,Jn(e.id,i))}function lp(e,t){if(e){let n=new ResizeObserver((r,o)=>{for(let a of r)a.contentRect.width>10&&(o.disconnect(),t(a.target))});n.observe(e),Nc.push(n)}}async function Ic(e){let t=[...ta];ta=[];try{let n=[];for(let r of t){let o=zo(r,e);if(o.length===0)continue;let a=o;n.push(...a)}await rs(n,e)}catch(n){W.error(`translateNewDynamicNodes error: ${n.message}`)}}function Qo(e,t){es.delete(e.id);let n=qt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(a=>{a.disconnect()}),n.observers=[],n.state="Translating",Jn(e.id,n));let r=e.id;ts+=e.text.length;let o=$r(e.elements);if(e.isPdf){let a=Eo(e.elements),i=window.getComputedStyle(a),s=i.top,l=i.fontSize,u=parseFloat(l.slice(0,-2));isNaN(u)||u>28&&(l="28px");let c=e.targetContainer,g=document.createElement("span");o.length===1&&(g.style.fontSize=l),g.id=`${Xe}-${r}`,g.style.top=s;let d=Ct(a,Fn),f=o.reduce((h,p)=>{let b=Ct(p,Fn);return b&&b<h?b:h},1e3),T=o.reduce((h,p)=>{let b=Ct(p,Mr);return b&&b>h?b:h},0)-f;T<30,T>600&&(T=600),d<200&&(d=10),d&&d<0&&(d=0),g.style.left=`${d||10}px`,f<400?g.style.width=T+"px":g.style.width=`calc(100% - ${f}px)`,g.classList.add("notranslate",`${Xe}`),c.appendChild(g)}else{let a=fn(e.elements),i="afterend";e.elements.length>0&&a&&(o.length===1?i="beforeend":rt(e.elements[0],t.rule)||(i="beforeend"));let s=document.createElement("span");if(s.classList.add("notranslate",Xe),s.id=`${Xe}-${r}`,s.innerHTML=up(),i==="beforeend"){let l=Wl(a);l?l.appendChild(s):a.appendChild(s)}else if(i==="afterend")a.insertAdjacentElement(i,s);else throw new Error("not support position")}Qr.push(r),rp(t)}function cp(e,t){t.state.translationStartMode==="dynamic"&&ts>t.config.immediateTranslationTextCount?ip(e,n=>{Qo(n,t)}):Qo(e,t)}async function Mt(){if(Zr==="Translating")return;$e("Translating");let e=await Vt(globalThis.location.href);e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),W.debug("ctx",e),e.state.isNeedClean?bn():ve.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),dc(()=>{ts=0,wc(),ea.forEach(r=>{r.disconnect()}),Nc.forEach(r=>{r.disconnect()}),ea=[],es.clear()}),$e("Translating");try{Wo([document.body],e.rule);let r=zo(document.body,e);W.debug("detect containers",r),$e("Translating");let{rule:o}=e;r.length>0&&await rs(r,e),Uc(e).catch(a=>{W.error("translateTitle error:",a.name,a.message,a.details||"")}),dp(o,e),r.length===0&&$e("Translated")}catch(r){$e("Error"),W.error(r)}}async function Vt(e){let t=await Bc();if(!ve)ve=await zn({url:e,config:t});else{let n={url:e,config:t,state:ve.state};ve=await zn(n)}return ve}async function Fc(){dt()==="Original"?await na():(dt()==="Translated"||dt()==="Error")&&(ve=await Vt(globalThis.location.href),ve.state.translationArea!=="main"?await na():bn())}async function na(){ve=await Vt(globalThis.location.href),ve.state.translationArea="main",await Mt()}async function ns(){ve=await Vt(globalThis.location.href),ve.state.translationArea="body",await Mt()}async function Hc(){dt()==="Original"?await ns():(dt()==="Translated"||dt()==="Error")&&(ve=await Vt(globalThis.location.href),ve.state.translationArea!=="body"?(ve.state.translationArea="body",await Mt()):bn())}async function $c(){ve=await Vt(globalThis.location.href),ve.state.translationArea="body",ve.state.translationStartMode="immediate",await Mt(),await Ic(ve)}async function Uc(e){let t=document.title;if(!t||t.includes(Ar))return;Qn!==t&&(Qn=t);let n="auto";if(e.isDetectParagraphLanguage||(n=bc()),n==="auto"){let r=await at({text:t});if(Gn(r,e.targetLanguage))return}try{let r=await zc({text:t,from:n,to:e.targetLanguage},e);r&&r.text&&(document.title=Qn+Ar+r.text)}catch(r){throw r}}function up(){return`&nbsp;<span class="${de}-loading notranslate"></span>`}async function rs(e,t){let{rule:n}=t;Wo(e,n);let r=[];if(t.rule.isPdf)e.length>0&&($e("Translating"),r=Ac(e,n).targetContainers);else{$e("Translating");let a=Mc(e,n),{hiddenElements:i}=a;for(let s of i)lp(s,()=>{Bl(s,Ye),rs([s],t)});$e("Translating")}let o=[];if(t.rule.isPdf?o=await _c(document.body,e,t,r):(e=e.filter(a=>!We(a,n,!1)),o=await vc(document.body,e,t)),$e("Translating"),o.length===0){$e("Translated");return}W.debug("detect paragraphs",o);for(let a of o)cp(a,t);$e("Translated")}function fp(e,t,n,r){let o=qt(n.id);if(e||!t){e||(W.error("translate error",t),e=new Error("no response from server"));let a=n.id,i=document.getElementById(`${Xe}-${a}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),o&&(o.state="Error",Jn(o.id,o));let l=`<span class="${de}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${de}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${de}-clickable-button notranslate" data-${de}-paragraph-id="${a}" data-${de}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=l)}else{let a=qt(n.id);if(a){a.state="Translated",Jn(a.id,a);let i=kc(a,t,r),s=t.id,l=document.getElementById(`${Xe}-${s}`);l&&(l.innerHTML=i.html,document.querySelectorAll(`[${Ut}="${s}"]`).forEach(c=>{ne(c,$t,"1")}))}else W.error("paragraph not found",n.id)}}async function gp(e){if(Qr.length===0)return Promise.resolve();let t=[...Qr];Qr=[];let n="auto";e.isDetectParagraphLanguage||(n=Ko());let r={sentences:t.filter(a=>qt(a)).map(a=>{let i=qt(a);return{id:i.id,url:e.encryptedUrl,text:i.text,from:n,to:e.targetLanguage}})};if(r.sentences.length>0){$e("Translating");try{await as(r,e,(a,i,s)=>{fp(a,i,s,e)})}catch(a){$e("Error"),W.error("translateCurrentQueue error",a.name,a.message,a.details||" ");return}}$e("Translated")}function $e(e){Zr=e,Wc(Zr)}function dp(e,t){W.debug("enableMutatinObserver"),Zo(),Xo=[],ta=[];let n=e.inlineTags.concat(e.excludeTags).concat("#text","BR");Yn=new MutationObserver(function(o){o.forEach(a=>{let i=globalThis.location.href;if(i.split("#")[0]!==Rc&&e.observeUrlChange){Rc=i.split("#")[0],Vo(),Zo(),setTimeout(()=>{W.debug("url changed, reinit page"),mp()},e.urlChangeDelay);let l=new Event(dl);document.dispatchEvent(l);return}a.addedNodes.forEach(l=>{if(l.nodeType===Node.ELEMENT_NODE){let u=l;if(pp(e,u)||!n.includes(u.nodeName)){if(u.classList.contains("notranslate"))return;Ol(u,Xo)||(ta.push(u),Xo.push(u),ap(t))}}})})}),Yn.observe(document.body,{childList:!0,subtree:!0});let r=document.querySelector("title");r&&(Xn=new MutationObserver(function(o){o.length>0&&(o[0].target.text.includes(Ar)||Uc(t).catch(i=>{W.error("translateTitle error:",i.name,i.message,i.details||"")}))}),Xn.observe(r,{subtree:!0,characterData:!0,childList:!0}))}function pp(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function mp(){let e=await Vt(globalThis.location.href);e.rule.urlChangeDelay&&await Ln(e.rule.urlChangeDelay);let t=e.sourceLanguage;t==="auto"?(Be()?t=await at({text:Ur(document.body).slice(0,1e3)}):t=await jc(),t==="auto"&&(t=await gc()),hc(t)):Xr(t);let n=e.state.isAutoTranslate||e.isTranslateUrl||e.rule.isPdf;!n&&!e.isTranslateExcludeUrl&&(W.debug(`detect page language: ${t}`),fc(t,e.config.translationLanguagePattern)&&(n=!0,W.debug(`match language pattern ${t}, auto translate`))),n?(ve.state.isAutoTranslate=!0,await Mt()):W.debug("do not auto translate")}function Zo(){Yn&&(Yn.disconnect(),Yn.takeRecords()),Xn&&(Xn.disconnect(),Xn.takeRecords())}function dt(){return Zr}var hp=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await ns():n==="translateTheMainPage"?await na():n==="translateToThePageEndImmediately"?await $c():n==="toggleTranslatePage"?await Dc():n==="toggleTranslateTheWholePage"?await Hc():n==="toggleTranslateTheMainPage"?await Fc():n==="translatePage"?await Mt():n==="restorePage"?bn():n==="showTranslationOnly"?Oc():n==="setCurrentPageLanguageByClient"&&Xr(r)};var ra;function os(){return ra||(ra=new zt("content_script",!1).getConnection("main",hp),ra)}async function Kt(e){return await os().sendMessage("background:main",e)}function te(e){return Be()||Nl()?(e.fetchPolyfill=globalThis.GM_fetch,rc(e)):Kt({method:"fetch",data:e})}function Bc(){return Be()?Wt():Kt({method:"getConfig"})}function at(e){if(e.text){let t=uc(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(Be()){let t=G.extra.detectLanguage(e.text);return Promise.resolve(t)}return Kt({method:"detectLanguage",data:e})}function jc(){return Kt({method:"detectTabLanguage"})}function Wc(e){if(Be()){let n=new CustomEvent(gl,{detail:e});document.dispatchEvent(n);return}os().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function qc(e){return Be()?cc(e):Kt({method:"queryParagraphCache",data:e})}async function Vc(e){if(Be()){await lc(e);return}return Kt({method:"setParagraphCache",data:e})}async function ss(){if(Be())return Promise.resolve();await Kt({method:"mockRequest"})}var Z=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,o=[],a=[],i=0,s=new Set,l=null;try{a=nc(r,this.maxTextLength,this.maxTextGroupLength),W.debug("tempSentenceGroups",a)}catch(c){if(n){s.has(i)&&i++;for(let g=i;g<r.length;g++){let d=r[g];n(c,null,d)}l=c}else l=c}let u=hr({limit:this.throttleLimit,interval:1e3});for(let c=0;c<a.length;c++){let g=a[c],d=g.url,f=u(async()=>{if(this.isSupportList)return await this.translateList({text:g.tempSentences.map(p=>p.text),from:g.from,to:g.to,url:d});{let h=g.tempSentences.map(L=>L.text).join(go),p=await this.translate({text:h,from:g.from,to:g.to,url:d}),{text:b}=p;return{text:b.split(go),from:p.from,to:p.to}}}),m;try{m=await f()}catch(h){if(n){s.has(i)&&i++;for(let p=i;p<r.length;p++){let b=r[p];n(h,null,b)}l=h;continue}else{l=h;continue}}let{text:T}=m;for(let h=0;h<T.length;h++)try{let p=T[h],b=g.tempSentences[h],{index:x,prefix:L,suffix:$}=b;o[x]===void 0?o[x]={...r[x],from:g.from,to:g.to,text:L+p+$}:o[x].text+=L+p+$,x!==i&&n&&(s.add(i),n(null,o[i],r[i])),i=x}catch(p){if(n){s.has(i)&&i++;for(let b=i;b<r.length;b++){let x=r[b];n(p,null,x)}throw p}else throw p}}if(n&&!s.has(i)&&o[i]&&r[i]&&n(null,o[i],r[i]),l)throw l;return{sentences:o}}detectLanguageLocally(t){return at({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Kc=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],st=class extends Z{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),o=`${n.getUTCMonth()+1}`.padStart(2,"0"),a=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${o}-${a}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:st.langMap.get(o),SourceText:r,Target:st.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:st.langMapReverse.get(s.Response.Source)||o,to:st.langMapReverse.get(s.Response.Target)||a}}async translateList(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:st.langMap.get(o),SourceTextList:r,Target:st.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:st.langMapReverse.get(s.Response.Source)||o,to:st.langMapReverse.get(s.Response.Target)||a}}async signedRequest({secretId:n,secretKey:r,action:o,payload:a,service:i,version:s}){let l=`${i}.tencentcloudapi.com`,u=new Date,c=`${new Date().valueOf()}`.slice(0,10),g=["POST","/","","content-type:application/json; charset=utf-8",`host:${l}`,"","content-type;host",await nt(a)].join(`
`),d=st.getUTCDate(u),f=["TC3-HMAC-SHA256",c,`${d}/${i}/tc3_request`,await nt(g)].join(`
`),m=await Rl(d,`TC3${r}`),T=await Hr(i,m),h=await Hr("tc3_request",T),p=await Hr(f,h),b=await te({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:l,"X-TC-Action":o,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${p}`},body:a});if(b instanceof Error)throw b;if(b.Response&&b.Response.Error&&b.Response.Error.Message)throw new Error(b.Response.Error.Message);return b}},Gt=st;Gt.langMap=new Map(Kc),Gt.langMapReverse=new Map(Kc.map(([n,r])=>[r,n]));var Gc=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],Zn=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:o,to:a}=n;if(!r)return{...n};let i=Zn.langMap.get(o)||"auto",s=Zn.langMap.get(a)||"zh-CN",l=await this.fetchWithoutToken(r,i,s);if(!l)throw new Error("google translate NETWORK_ERROR");if(!l.data[0]||l.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:l.data[0].map(c=>c[0]).filter(Boolean).join(""),from:Zn.langMapReverse.get(l.data[2])||"auto",to:a}}async fetchWithoutToken(n,r,o){let a=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:o,q:n}),i="https://translate.googleapis.com/translate_a/single?"+a.toString();return{data:await te({url:i})}}},Jt=Zn;Jt.langMap=new Map(Gc),Jt.langMapReverse=new Map(Gc.map(([n,r])=>[r,n]));function Jc(e){return e.result.texts}function bp(e,t){return t?e+(t-e%t):e}function yp(e,t){return e.split(t).length-1}function Yc(e){let t=Date.now(),n=1;for(let r of e)n+=yp(r,"i");return bp(t,n)}function Tp(e,t){return Math.floor(Math.random()*(t-e+1))+e}function is(){return Tp(1e6,1e8)}var ls="https://www2.deepl.com/jsonrpc",aa="auto",Xc=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],Qc=["formal","informal"];function eu(e,t=aa,n=is()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function xp(e,t=1){let n=[],r=0;for(let o=0;o<e.length;o++){let a=e[o].chunks;for(let i=0;i<a.length;i++){let s=a[i];n.push({kind:"default",_index:o,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:a.slice(0,r).map(l=>l.sentences[0].text),raw_en_context_after:r+1<a.length?[a[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function Zc(e){return e.reduce((t,n)=>{let r=n.chunks;for(let o of r)t.push(o.sentences[0].text);return t},[])}function wp(e){if(!e)return{};if(!Qc.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function tu(e,t,n,r=is(),o=1,a){let i=Zc(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:xp(n,o),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:wp(a),timestamp:Yc(Zc(n))},id:r}}function vp(e=Xc){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function cs(e){return vp()[e.toLowerCase()]}var nu={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function ru(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function Sp(e,t,n){let r=eu(e,t,n);return await te({method:"POST",url:ls+"?method=LMT_split_text",headers:nu,body:ru(r)})}async function Ep(e,t,n,r,o,a){let i=await Sp(e,n,r),s=tu(n==="auto"?i.result.lang.detected:n,t,Jc(i),r,o,a),l=s.params.jobs.map(g=>g._index);s.params.jobs=s.params.jobs.map(g=>{let d={...g};return delete d._index,d});let u=await te({method:"POST",url:ls+"?method=LMT_handle_jobs",body:ru(s),headers:nu}),c={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((g,d)=>{let f=l[d];c.text[f]===void 0&&(c.text[f]="");let m=s.params.jobs[d].sentences[0].prefix,T=s.params.jobs[d].sentences[0].prefix;c.text[f]=c.text[f]+m+g.beams[0].sentences[0].text}),c}async function au(e,t,n=aa,r,o,a){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:Ep(e,cs(t),cs(n)??"auto",r,o,a):{text:[],from:n,to:t}}var ou=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],yn=class extends Z{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:o,from:a}=n,i=await au(r,yn.langMap.get(o),yn.langMap.get(a));return{text:i.text,from:yn.langMapReverse.get(i.from),to:yn.langMapReverse.get(i.to)}}},Yt=yn;Yt.langMap=new Map(ou),Yt.langMapReverse=new Map(ou.map(([n,r])=>[r,n]));var su=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],jv=new Map(su),Wv=new Map(su.map(([e,t])=>[t,e]));var iu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],us="https://transmart.qq.com/api/imt",Xt=class extends Z{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:o}=n,a=await this.detectLanguage(r),i=Xt.langMap.get(a)||a,s=Xt.langMap.get(o)||o;if(a===o)return{text:r,from:a,to:o};let l=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await te({url:us,body:l,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:a||"auto",to:o}}async translateList(n){let{from:r,text:o,to:a}=n;if(o.length===1){let g=await this.translate({from:r,text:o[0],to:a,url:n.url});return{text:[g.text],from:g.from,to:g.to}}let i=await this.detectLanguage(o.join(`
`));if(i===a)return{text:o,from:i,to:a};let s=Xt.langMap.get(i)||i,l=Xt.langMap.get(a)||a,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:o,lang:s,orig_url:n.url},target:{lang:l},type:"plain"}),c=await te({url:us,body:u,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:i||"auto",to:a}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},o=await te({url:us,method:"POST",body:JSON.stringify(r)});if(o.header.ret_code!=="succ")throw new Error(o.message||o.header.ret_code);let a=o.language,i=Xt.langMapReverse.get(a);return i||a}},Qt=Xt;Qt.langMap=new Map(iu),Qt.langMapReverse=new Map(iu.map(([n,r])=>[r,n]));function lu(){return Math.random()>=0}var Tn=class extends Z{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await ss(),await Ln(5e3);let o=r.match(/^\s*/)[0].length;return{text:r.slice(0,o)+"\u6A21\u62DF\uFF1A"+r.slice(o,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:o,to:a}=n;if(await ss(),!lu())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:o,to:a,text:[""]}:{from:o,to:a,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var fu=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],cu=new Map(fu),uu=new Map(fu.map(([e,t])=>[t,e])),er=class extends Z{constructor(n,r){super(n,r);this.apikey="";this.codename=er.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...er.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:er.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:o,to:a}=n,i=await te({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:cu.get(o)||"auto",target_lang:cu.get(a)})});if(i.status){let s=i;return{text:s.result,from:uu.get(s.source_lang),to:uu.get(s.target_lang)}}else throw new Error(i.msg)}},oa=er;oa.DEFAULT_CODENAME="deepl";var sa=oa;var du=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],gu=new Map(du),Lp=new Map(du.map(([e,t])=>[t,e])),fs=class extends Z{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:o,text:a}=n,i={source_lang:gu.get(r),target_lang:gu.get(o)},s=new URLSearchParams(i);a.forEach(f=>{s.append("text",f)});let l=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let c=await te({url:u,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:g}=c;return{text:g.map(f=>f.text),from:g[0]&&Lp.get(g[0].detected_source_language)||r,to:o}}},pu=fs;var _p=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Te={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},gs=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},ds=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=gs(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(gs).sort().join(`&${r}=`)}`:`${r}=${gs(n)}`}).filter(t=>t).join("&"),tr=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let o=t[r];return typeof o<"u"&&o!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],o=this.credentialString(n);return r.push(`${Te.algorithm} Credential=${t.accessKeyId}/${o}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),o={...this.request.params},a=this.request.params,i=this.request.headers;t.sessionToken&&(o[Te.tokenHeader]=t.sessionToken),o[Te.dateHeader]=r,o[Te.notSignBody]="",o[Te.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,o[Te.algorithmKey]=Te.algorithm,o[Te.signHeadersKey]="",o[Te.signQueriesKey]=void 0,o[Te.signatureKey]=void 0,o=this.sortParams(o),this.request.params=o,this.request.headers={};let s=await this.signature(t,r);return this.request.params=a,this.request.headers=i,o[Te.signQueriesKey]=Object.keys(o).sort().join(";"),o[Te.signatureKey]=s,ds(o)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Te.dateHeader]=n,t.sessionToken&&(this.request.headers[Te.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Te.contentSha256Header]=await nt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return Fr(await _t(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Te.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=ds(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,o)=>r[0].toLowerCase()<o[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let o=r[0].toLowerCase();if(this.isSignableHeader(o)){let a=r[1];if(typeof a>"u"||a===null||typeof a.toString!="function")throw new Error(`Header ${o} contains invalid value`);n.push(`${o}:${this.canonicalHeaderValues(a.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await nt(t)}async hexEncodedBodyHash(){return this.request.headers[Te.contentSha256Header]?this.request.headers[Te.contentSha256Header]:this.request.body?await this.hexEncodedHash(ds(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return _p.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,o){let a=await _t(n,`${Te.kDatePrefix}${t.secretKey}`),i=await _t(r,a),s=await _t(o,i);return _t(Te.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,Te.v4Identifier].join("/")}};var hu=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],mu=new Map(hu),Cp=new Map(hu.map(([e,t])=>[t,e])),ps=class extends Z{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n,i=mu.get(o),s={TargetLanguage:mu.get(a)||a,TextList:r};i&&(s.SourceLanguage=i);let l={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new tr(l,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(l.params),g=await te({url:"https://open.volcengineapi.com"+l.pathname+"?"+c.toString(),headers:u.request.headers,method:l.method,body:l.body});if(g.TranslationList){let d=g.TranslationList.map(m=>m.Translation),f=o;return g.TranslationList.length>0&&g.TranslationList[0].DetectedSourceLanguage&&(f=Cp.get(g.TranslationList[0].DetectedSourceLanguage)||o),{text:d,from:f,to:a}}else{let d=g.ResponseMetaData.Error;throw new De(d.Code,d.Message)}}},bu=ps;var yu=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],kp=new Map(yu),Pp=new Map(yu.map(([e,t])=>[t,e])),nr=class extends Z{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:o,to:a}=n,s={source_language:kp.get(o)||"detect",target_language:"zh",text:r},l=await te({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(l.base_resp&&l.base_resp.status_code===0){let u=l.translation,c=o;return l.detected_language&&(c=Pp.get(l.detected_language)||o),{text:u,from:c,to:a}}else{let u=l.base_resp;throw new De(u.status_code.toString(),u.status_message)}}};var Mp=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Tu=new Map(Mp),rr=class extends Z{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:o,to:a}=n,s=await te({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Tu.get(o)||o,target_lang:Tu.get(a)||a,text:r})});if(s.code===200)return{text:s.data,from:o,to:a};throw new Error(s.message||s.message||"API Error")}};var ms="https://{s}bing.com",Eu=ms+"/translator",Ap=ms+"/ttranslatev3",Rp=ms+"/tspellcheckv3",ia="bingGlobalConfig",Lu=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],xu=new Map(Lu),wu=new Map(Lu.map(([e,t])=>[t,e])),vu=1e3,it,xn;function hs(e,t){return e.replace("{s}",t?t+".":"")}async function Np(){if(!it){let n=await G.storage.local.get(ia);return n&&(it=n[ia]),!0}let{tokenTs:e,tokenExpiryInterval:t}=it;return Date.now()-e>t}async function Su(){let e,t,n,r,o,a,i,s,l,u;try{let c=hs(Eu,e),g=await te({url:c,responseType:"raw"}),{body:d,headers:f,url:m}=g;e=m.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=f["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[o,r,a,i,s,l]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw console.error("failed to fetch global config",c),c}return it={subdomain:e,IG:t,IID:n,key:o,token:r,tokenTs:o,tokenExpiryInterval:a,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:l,cookie:u,count:0},await G.storage.local.set({[ia]:it}),it}function Dp(e){let{IG:t,IID:n,subdomain:r,isVertical:o}=it;return hs(e?Rp:Ap,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+it.count++:"")}function Op(e,t,n,r){let{token:o,key:a}=it,i={fromLang:n,text:t,token:o,key:a};return!e&&r&&(i.to=r),i}async function _u(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>vu)throw new Error(`The supported maximum length of text is ${vu}. Please shorten the text.`);xn||(xn=Su()),await xn,await Np()&&(xn=Su(),await xn),t=t||"auto",n=n||"zh-CN",t=xu.get(t)||t,n=xu.get(n)||n;let o=Dp(!1),a=Op(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:hs(Eu,it.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(a),l=o,u=s.toString(),c=await te({url:l,headers:i,method:"POST",body:u});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(it=null,xn=null,await G.storage.local.remove(ia),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let g=c[0].translations[0],d=c[0].detectedLanguage;return{text:g.text,from:wu.get(d.language),to:wu.get(g.to)}}var ar=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:o,to:a}=n;return r?await _u(r,o,a):{...n}}};var ku=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Cu=new Map(ku),Ip=new Map(ku.map(([e,t])=>[t,e])),bs=class extends Z{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:o}=this,{appid:a,key:i}=this,{text:s,from:l,to:u}=n,c=new URLSearchParams({from:Cu.get(l),to:Cu.get(u),q:s,salt:r,appid:a,sign:pn(a+s+r+i)}),g=new URL(o);g.search=c.toString();let d=await te({url:g.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new De("API_SERVER_ERROR",d.error_msg);let{trans_result:f,from:m}=d,T=f.map(({dst:p})=>p);return{from:Ip.get(m),to:u,text:T.join(`
`)}}},Pu=bs;var Fp=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Mu=new Map(Fp),ys=class extends Z{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n;o==="auto"&&(o=await at({text:r.join(" ")}));let i=r;return{text:(await te({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Mu.get(o)}2${Mu.get(a)}`})})).target,from:o,to:a}}},Au=ys;var Nu=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Ru=new Map(Nu),Hp=new Map(Nu.map(([e,t])=>[t,e]));function $p(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Ts=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),l=this.appId+$p(r)+i+s+this.appSecret,u=await nt(l),c={q:r,appKey:this.appId,salt:i.toString(),from:Ru.get(o),to:Ru.get(a),sign:u,signType:"v3",curtime:s.toString()},g=new URLSearchParams(c),f=await te({url:"https://openapi.youdao.com/api",method:"POST",body:g.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),m=f.l,[T,h]=m.split("2");return{text:f.translation.join(`
`),from:Hp.get(T),to:a}}},Du=Ts;var wn={mock:{class:Tn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:Tn,name:"Mock2",homepage:"https://www.google.com"},google:{class:Jt,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:Qt,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:pu,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:bu,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:nr,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:ar,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:Gt,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:Pu,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Au,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:sa,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Du,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:Yt,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:rr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function xs(e,t){let n=wn[e],r=t.config.translationServices[e]||{},o=!0,a=n.class.getAllProps();if(a.length>0){let i=a.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){o=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:o,config:r,props:n.class.getProps(),allProps:a}}var Up=Object.keys(wn),Ou=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return Up.filter(o=>{let a=wn[o];return o.startsWith("mock")?!!r:!a.alpha||n||o===e.translationService}).map(o=>xs(o,e))};async function zc(e,t){if(!e.text)return e;let n=await as({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new De("translateFailed","translate failed")}async function as(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:o}=t,a=r.translationGeneralConfig,i=r.translationServices,s=o,l=i[s]||{};e.sentences=e.sentences.map(h=>h);let u=[],c={sentences:Array(e.sentences.length)},g=e.sentences.length,d=-1;if(r.cache)for(let h of e.sentences){d++;let p=s;s==="openl"&&(p=s+"-"+l.codename||sa.DEFAULT_CODENAME);let b=null;try{b=await or(qc({originalText:h.text,from:h.from,to:h.to,service:p}),1e3)}catch(x){W.warn("query cache DB error, but it's ok",x)}if(b){let x={...h,text:b.translatedText};c.sentences[d]=x,n&&n(null,x,h)}else u.push(h)}else u.push(...e.sentences);let f=u.length;if(g-f>0&&W.debug(`use ${g-f} sentences from cache`),!u.length)return c;let m;try{m=new wn[s].class(l,a),await m.init()}catch(h){if(n)for(let p of u)n(h,null,p);throw h}let T=await m.multipleTranslate({sentences:u},(h,p,b)=>{if(n&&(n(h,p,b),!h&&p&&!s.startsWith("mock")&&r.cache)){let x=s;s==="openl"&&(x=s+"-"+l.codename||sa.DEFAULT_CODENAME),r.cache&&or(Vc({translatedText:p.text,from:b.from,to:b.to,detectedFrom:p.from,key:pn(b.text),service:x}),3e3).catch(L=>{W.warn("set cache DB error",L)})}});for(let h of T.sentences){let p=c.sentences.findIndex(b=>!b);if(p===-1)throw new De("translateFailed","can not match the result");c.sentences[p]=h}return c}var Iu={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},Fu={...Ot,"zh-CN":{...Iu["zh-CN"],...Ot["zh-CN"]},"zh-TW":{...Iu["zh-TW"],...Ot["zh-TW"]}},Hu=Fu;var la=(e,t,n)=>{let r=ec(Fu,`languages.${e}`,t,"en");return n?ho[e]||e:r!==`languages.${e}`?r:ho[e]};function ws(e){let t=Ql(),{onTranslateTheMainPage:n,onUserConfigChange:r,pageStatus:o,config:a,onTranslateTheWholePage:i,openOptionsPage:s,ontranslateToThePageEndImmediately:l,onSetPageLanguage:u,onToggleTranslate:c,onTranslateLocalPdfFile:g,onTranslatePdf:d,onRestorePage:f,ctx:m,currentUrl:T,currentLang:h,onClose:p,onTranslatePage:b}=e,x=r,[L,$]=ye(""),[z,F]=ye(""),{t:M}=Vr(),k=null,Y=null,q=null,X=null,ce=null,oe=null,Se=null,xe=null,se=null,ue=null,_e=null,pe=null;if(a){let{translationService:v,translationServices:A,translationUrlPattern:_}=a;if(wn[v]&&(xe=xs(v,m)),A&&A[v]?pe=A[v]||{}:pe={},T&&jr(T)){se=new URL(T),ue=Yl(se.hostname),_e=Xl(T);let{matches:P,excludeMatches:B}=_;Y=P.includes(ue),k=P.includes(se.hostname),X=B.includes(ue),q=B.includes(se.hostname),oe=P.includes(_e),Se=B.includes(_e)}}if(a&&h&&h!=="auto"){let{translationLanguagePattern:v}=a,{matches:A}=v;A.includes(h)?ce=!0:ce=!1}let Ue=v=>{v.preventDefault(),s(),p()},w=v=>{x(A=>(A.alpha?$("Success disable alpha!"):$("Success enable alpha!"),{...A,alpha:!A.alpha}))},j=()=>{x(v=>({...v,translationArea:"body"})),i()},D=()=>{x(v=>({...v,translationArea:"main"})),n()},V=(v,A,_,P)=>{if(v==="default"){x(R=>{let ae={...R.translationUrlPattern};return{...R,translationUrlPattern:{...R.translationUrlPattern,matches:Et([se?.hostname,ue,T],ae.matches),excludeMatches:Et([se?.hostname,ue,T],ae.excludeMatches)}}});return}let B=v,ee=B==="matches"?"excludeMatches":"matches";se&&x(R=>{let ae={...R.translationUrlPattern};return ae[B]=wo(A,ae[B]),P.length>0&&(ae[B]=Et(P,ae[B])),ae[ee]=Et(_,ae[ee]),{...R,translationUrlPattern:{...R.translationUrlPattern,...ae}}}),B==="matches"&&o==="Original"?setTimeout(()=>{b(),p()},100):B==="excludeMatches"&&o==="Translated"&&setTimeout(()=>{f(),p()},100)},U=v=>{if(!v){x(P=>{let B={...P.translationLanguagePattern};return{...P,translationLanguagePattern:{...P.translationLanguagePattern,matches:Et(h,B.matches),excludeMatches:Et(h,B.excludeMatches)}}});return}let A=v,_=A==="matches"?"excludeMatches":"matches";h&&x(P=>{let B={...P.translationLanguagePattern};return B[A]=wo(h,B[A]),B[_]=Et(h,B[_]),{...P,translationLanguagePattern:{...P.translationLanguagePattern,...B}}}),A==="matches"&&o==="Original"&&setTimeout(()=>{b(),p()},100)},me=se?.pathname.toLowerCase().endsWith(".pdf"),fe=M("translate");o==="Translated"?fe=M("show-original"):o==="Original"?me?Lr()&&se.protocol==="file:"?fe=M("translate-firefox-local-pdf"):fe=M("translate-pdf"):fe=M("translate"):fe=M(o);let Pe=M("translateToThePageEndImmediately");(o==="Original"||o==="Translated")&&(a.shortcuts.toggleTranslatePage&&(sl()&&m.rule.fingerCountToToggleTranslagePageWhenTouching>=2?fe+=` (${M(`fingers.${m.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:fe+=` (${a.shortcuts.toggleTranslatePage})`),a.shortcuts.toggleTranslateToThePageEndImmediately&&(Pe+=` (${a.shortcuts.toggleTranslateToThePageEndImmediately})`));let ge=[];m&&(ge=Ou(m));let re=v=>{v.preventDefault(),p()};return N("div",{class:"p-3",children:[N("div",{class:"text-sm",children:[N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[M("popupSourceLanguage"),"\uFF1A"]}),N(kt,{items:vt.map(v=>({label:la(v,a.interfaceLanguage),value:v,selected:v===h,onSelected:A=>{u(A.value)}}))})]}),a&&a.targetLanguage&&N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[M("popupTarget"),"\uFF1A"]}),N(kt,{items:vt.filter(v=>v!=="auto").map(v=>({label:la(v,a.interfaceLanguage),value:v,selected:v===a.targetLanguage,onSelected:A=>{x(_=>({..._,targetLanguage:A.value}))}}))})]}),xe&&ge.length>0&&N(ct,{children:[N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:[M("popupService"),"\uFF1A"]}),N(kt,{items:ge.map(v=>({label:`${M("translationServices."+v.id)}${v.ok?"":" "+M("needAction")}`,value:v.id,selected:v.selected,onSelected:A=>{let _=ge.find(P=>P.id===A.value);_.ok?(x(P=>({...P,translationService:_.id})),_.props.length===0?setTimeout(()=>{b()},1):setTimeout(()=>{f()},1)):(x(P=>({...P,translationService:_.id})),setTimeout(()=>{f()},1),setTimeout(()=>{s(),p()},100))}}))})]}),pe&&xe.props.length>0&&xe.props.map((v,A)=>N("div",{class:"pl-4 text-sm",children:N($o,{field:v,value:pe[v.name],onChange:_=>{x(P=>{let B=P.translationServices||{},ee=B[xe.id]||{};return setTimeout(()=>{f()},1),{...P,translationServices:{...B,[xe.id]:{...ee,[v.name]:_}}}})}},"field-"+A)}))]}),se&&N("div",{class:"flex justify-between mb-2",children:[N("label",{class:"inline-block",children:M("forThisSite")}),N(kt,{items:[{label:M("default"),value:"default",selected:k===!1&&q===!1&&!Y&&!X&&!oe&&!Se,onSelected:()=>{V("default",se.hostname,[],[])}},{label:M("alwaysTranslateSomeSite",{hostname:se.hostname}),value:"matches",selected:k,onSelected:v=>{V(v.value,se.hostname,[se.hostname,ue,_e],[ue])}},{label:M("neverTranslateSomeSite",{hostname:se.hostname}),value:"excludeMatches",selected:q,onSelected:v=>{V(v.value,se.hostname,[se.hostname,ue,_e],[ue])}},ue&&{label:M("alwaysTranslateSomeSite",{hostname:ue}),value:"matchesWild",selected:Y,onSelected:()=>{V("matches",ue,[_e,se.hostname,ue],[se.hostname])}},ue&&{label:M("neverTranslateSomeSite",{hostname:ue}),value:"excludeMatchesWild",selected:X,onSelected:()=>{V("excludeMatches",ue,[se.hostname,_e,ue],[se.hostname])}},_e&&{label:M("alwaysTranslateSomeSite",{hostname:M("currentUrl")}),value:"matchesUrl",selected:oe,onSelected:()=>{V("matches",_e,[_e],[])}},_e&&{label:M("neverTranslateSomeSite",{hostname:M("currentUrl")}),value:"excludeMatchesUrl",selected:Se,onSelected:()=>{V("excludeMatches",_e,[_e],[])}}].filter(Boolean)})]})]}),N("div",{class:"",children:N("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{me?d&&d():c()},"aria-busy":o==="Translating",disabled:o==="Translating",children:fe})}),N("div",{class:"flex justify-between",children:[h&&h!=="auto"?N("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[N("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!ce,onChange:v=>{let A=v.target.checked;U(A?"matches":void 0)}}),M("alwaysTranslateSomeLanguage",{language:la(h,a.interfaceLanguage)})]}):N("span",{}),N(Do,{label:M("more"),showArrow:!0,onSelected:v=>{v.value==="translateTheWholePage"?i():v.value==="translateToThePageEndImmediately"?l():v.value==="translateTheMainPage"?n():v.value==="showTranslationOnly"||(v.value==="translateLocalPdfFile"?g&&g():v.value==="donate"?(globalThis.open(a.donateUrl),p()):v.value==="feedback"?(globalThis.open(a.feedbackUrl),p()):v.value==="options"?(s(),p()):v.value==="changeToTranslateTheWholePage"?j():v.value==="changeToTranslateTheMainPage"&&D())},menus:[a.translationArea==="main"&&{label:M("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},a.translationArea==="body"&&{label:M("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:Pe,value:"translateToThePageEndImmediately"},!Be()&&{label:M("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2615\uFE0F "+M("sponsorLabel"),value:"donate"},{label:"\u{1F41B} "+M("feedback"),value:"feedback"},{label:"\u2699\uFE0F "+M("browser.openOptionsPage"),value:"options"}].filter(Boolean)})]}),N("div",{class:"text-sm",children:L}),N("div",{class:"text-sm",children:z}),N("footer",{class:"mt-3 text-sm flex justify-between",children:[N("a",{href:"#",class:"secondary",onClick:Ue,children:M("options")}),Be()&&N("a",{href:"#",class:"secondary",onClick:re,children:M("close")}),N("span",{class:"immersive-translate-no-select muted",onClick:Jl(7)(w),children:["V",t]})]})]})}var Zt={},$u={};function ca(e,t){if($u[e])try{t()}catch(n){W.error("run callback failed",n)}else Zt[e]||(Zt[e]=[]),Zt[e].push(t)}function Bp(e){if(Zt[e]&&Zt[e].length){let t=[...Zt[e]];Zt[e]=[],t.forEach(n=>n())}}function vs(){let[e,t]=ye("Original"),[n,r,o,a]=Vl(),[i,s]=ye(null),[l,u]=ye(null),[c,g]=ye(null),[d,f]=ye("auto"),[m,T]=ye(null),h=F=>{let{tabId:M,payload:k}=F.detail,{method:Y,data:q}=k;W.debug("popup received message",Y,q||" "),Y==="setPageStatus"&&M&&t(q)};et(()=>{let F=Vn();return G.tabs.query({currentWindow:!0,active:!0}).then(M=>{let k=M[0].id;g(k);let Y=M[0].url;G.tabs.onUpdated.addListener((q,X,ce)=>{q===q&&ce.url&&l&&ce.url!==l&&(u(ce.url),window.location.reload())}),globalThis.document.addEventListener(In,h),Y&&u(Y),Y&&jr(Y)&&(u(Y),F.sendMessage(`content_script:main_sync:${k}`,{method:"ping"}).then(q=>{$u[k]=!0,Bp(k)}).catch(q=>{W.debug("ping failed, but it is ok. cause maybe content is not injected",q)}),ca(k,async()=>{let q=await F.sendMessage(`content_script:main_sync:${k}`,{method:"getPageStatus"});t(q)}),ca(k,async()=>{let q=await Wt();s(q)}),ca(k,async()=>{let q=await F.sendMessage(`content_script:main_sync:${k}`,{method:"getCurrentPageLanguage"});f(q)}))}),()=>{globalThis.document.removeEventListener(In,h)}},[]),et(()=>{Wt().then(F=>{s(F)})},[n]),et(()=>{l&&i&&zn({url:l,config:i}).then(F=>{T(F)})},[l,i]);let p=F=>async()=>{let M=Vn(),Y=(await G.tabs.query({currentWindow:!0,active:!0}))[0].id;M.sendMessage(`content_script:main:${Y}`,{method:F}),setTimeout(()=>{globalThis.close()},10)},b=()=>{let F=G.runtime.getURL(_r);G.tabs.create({url:F}),globalThis.close()},x=()=>{l&&c&&(G.tabs.update(c,{url:vl(l)}),globalThis.close())},L=F=>{let M=Vn();if(f(F),c&&l){let k=al(l,F,i.sourceLanguageUrlPattern);r(Y=>({...Y,sourceLanguageUrlPattern:k})),ca(c,()=>{M.sendMessage(`content_script:main:${c}`,{method:"setCurrentPageLanguageByClient",data:F})})}},$=()=>{globalThis.close()},z=()=>{G.runtime.openOptionsPage(),globalThis.close()};return!i||!m?null:N(ws,{onClose:$,onToggleTranslate:p("toggleTranslatePage"),openOptionsPage:z,onTranslatePdf:x,onTranslateLocalPdfFile:b,onTranslateTheMainPage:p("translateTheMainPage"),onTranslateTheWholePage:p("translateTheWholePage"),ontranslateToThePageEndImmediately:p("translateToThePageEndImmediately"),onTranslatePage:p("translatePage"),onRestorePage:p("restorePage"),onSetPageLanguage:L,onUserConfigChange:r,config:i,pageStatus:e,ctx:m,currentUrl:l,currentLang:d})}var Uu=document.getElementById("mount");Gl();Uu&&(async()=>{let e=await Wt();e.debug&&W.setLevel("debug"),ha(N(tc,{lang:e.interfaceLanguage,translations:Hu,fallbackLang:"zh-CN",children:N(vs,{})}),Uu)})();
