var uf=Object.defineProperty;var gf=(e,t)=>{for(var n in t)uf(e,n,{get:t[n],enumerable:!0})};var T={BUILD_TIME:"2023-01-28T13:52:36.540Z",VERSION:"0.2.29",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};var df=Object.create,Ci=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,Li=Object.getOwnPropertyNames,pf=Object.getPrototypeOf,hf=Object.prototype.hasOwnProperty,bf=(e,t)=>function(){return t||(0,e[Li(e)[0]])((t={exports:{}}).exports,t),t.exports},yf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Li(t))!hf.call(e,a)&&a!==n&&Ci(e,a,{get:()=>t[a],enumerable:!(r=mf(t,a))||r.enumerable});return e},xf=(e,t,n)=>(n=e!=null?df(pf(e)):{},yf(t||!e||!e.__esModule?Ci(n,"default",{value:e,enumerable:!0}):n,e)),Tf=bf({"esm-build-dd657b4e6dab36bb0fd61c19cb6f770fbc7804f6-18dd0343/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var a={exports:{}};r(a),n.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",a=o=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(L,O=void 0){super(O),this.createItem=L}get(L){return this.has(L)||this.set(L,this.createItem(L)),super.get(L)}}let c=v=>v&&typeof v=="object"&&typeof v.then=="function",u=(v,L)=>(...O)=>{o.runtime.lastError?v.reject(new Error(o.runtime.lastError.message)):L.singleCallbackArg||O.length<=1&&L.singleCallbackArg!==!1?v.resolve(O[0]):v.resolve(O)},l=v=>v==1?"argument":"arguments",g=(v,L)=>function(w,...R){if(R.length<L.minArgs)throw new Error(`Expected at least ${L.minArgs} ${l(L.minArgs)} for ${v}(), got ${R.length}`);if(R.length>L.maxArgs)throw new Error(`Expected at most ${L.maxArgs} ${l(L.maxArgs)} for ${v}(), got ${R.length}`);return new Promise((U,P)=>{if(L.fallbackToNoCallback)try{w[v](...R,u({resolve:U,reject:P},L))}catch(_){console.warn(`${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,_),w[v](...R),L.fallbackToNoCallback=!1,L.noCallback=!0,U()}else L.noCallback?(w[v](...R),U()):w[v](...R,u({resolve:U,reject:P},L))})},f=(v,L,O)=>new Proxy(L,{apply(w,R,U){return O.call(R,v,...U)}}),m=Function.call.bind(Object.prototype.hasOwnProperty),p=(v,L={},O={})=>{let w=Object.create(null),R={has(P,_){return _ in v||_ in w},get(P,_,H){if(_ in w)return w[_];if(!(_ in v))return;let B=v[_];if(typeof B=="function")if(typeof L[_]=="function")B=f(v,v[_],L[_]);else if(m(O,_)){let j=g(_,O[_]);B=f(v,v[_],j)}else B=B.bind(v);else if(typeof B=="object"&&B!==null&&(m(L,_)||m(O,_)))B=p(B,L[_],O[_]);else if(m(O,"*"))B=p(B,L[_],O["*"]);else return Object.defineProperty(w,_,{configurable:!0,enumerable:!0,get(){return v[_]},set(j){v[_]=j}}),B;return w[_]=B,B},set(P,_,H,B){return _ in w?w[_]=H:v[_]=H,!0},defineProperty(P,_,H){return Reflect.defineProperty(w,_,H)},deleteProperty(P,_){return Reflect.deleteProperty(w,_)}},U=Object.create(v);return new Proxy(U,R)},b=v=>({addListener(L,O,...w){L.addListener(v.get(O),...w)},hasListener(L,O){return L.hasListener(v.get(O))},removeListener(L,O){L.removeListener(v.get(O))}}),x=new s(v=>typeof v!="function"?v:function(O){let w=p(O,{},{getContent:{minArgs:0,maxArgs:0}});v(w)}),h=new s(v=>typeof v!="function"?v:function(O,w,R){let U=!1,P,_=new Promise(Z=>{P=function(ee){U=!0,Z(ee)}}),H;try{H=v(O,w,P)}catch(Z){H=Promise.reject(Z)}let B=H!==!0&&c(H);if(H!==!0&&!B&&!U)return!1;let j=Z=>{Z.then(ee=>{R(ee)},ee=>{let C;ee&&(ee instanceof Error||typeof ee.message=="string")?C=ee.message:C="An unexpected error occurred",R({__mozWebExtensionPolyfillReject__:!0,message:C})}).catch(ee=>{console.error("Failed to send onMessage rejected reply",ee)})};return j(B?H:_),!0}),y=({reject:v,resolve:L},O)=>{o.runtime.lastError?o.runtime.lastError.message===r?L():v(new Error(o.runtime.lastError.message)):O&&O.__mozWebExtensionPolyfillReject__?v(new Error(O.message)):L(O)},S=(v,L,O,...w)=>{if(w.length<L.minArgs)throw new Error(`Expected at least ${L.minArgs} ${l(L.minArgs)} for ${v}(), got ${w.length}`);if(w.length>L.maxArgs)throw new Error(`Expected at most ${L.maxArgs} ${l(L.maxArgs)} for ${v}(), got ${w.length}`);return new Promise((R,U)=>{let P=y.bind(null,{resolve:R,reject:U});w.push(P),O.sendMessage(...w)})},A={devtools:{network:{onRequestFinished:b(x)}},runtime:{onMessage:b(h),onMessageExternal:b(h),sendMessage:S.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:S.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},D={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":D},services:{"*":D},websites:{"*":D}},p(o,A,i)};n.exports=a(chrome)}else n.exports=globalThis.browser})}}),vf=xf(Tf()),{default:Ei,...wf}=vf,Ba=Ei!==void 0?Ei:wf;globalThis.immersiveTranslateBrowserAPI=Ba;function gn(){let e,t="pending",n=new Promise((r,a)=>{e={async resolve(o){await o,t="fulfilled",r(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var $a=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function Pr(e,t){let n=gn(),r=setTimeout(()=>n.reject(new $a),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function fn(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,o)=>{let i=()=>{clearTimeout(c),o(new DOMException("Delay was aborted.","AbortError"))},c=setTimeout(()=>{n?.removeEventListener("abort",i),a()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(c)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var Ai=class{#e=0;#t=[];#n=[];#r=gn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=gn()}}[Symbol.asyncIterator](){return this.iterate()}};var Qe={};gf(Qe,{bgBlack:()=>Jf,bgBlue:()=>Zf,bgBrightBlack:()=>rd,bgBrightBlue:()=>id,bgBrightCyan:()=>cd,bgBrightGreen:()=>od,bgBrightMagenta:()=>ld,bgBrightRed:()=>ad,bgBrightWhite:()=>ud,bgBrightYellow:()=>sd,bgCyan:()=>td,bgGreen:()=>Xf,bgMagenta:()=>ed,bgRed:()=>Yf,bgRgb24:()=>md,bgRgb8:()=>fd,bgWhite:()=>nd,bgYellow:()=>Qf,black:()=>If,blue:()=>Ff,bold:()=>Lf,brightBlack:()=>Mi,brightBlue:()=>qf,brightCyan:()=>Kf,brightGreen:()=>zf,brightMagenta:()=>Vf,brightRed:()=>jf,brightWhite:()=>Gf,brightYellow:()=>Wf,cyan:()=>Uf,dim:()=>Af,getColorEnabled:()=>Ef,gray:()=>$f,green:()=>Df,hidden:()=>Pf,inverse:()=>Mf,italic:()=>kf,magenta:()=>Hf,red:()=>Nf,reset:()=>Cf,rgb24:()=>dd,rgb8:()=>gd,setColorEnabled:()=>Sf,strikethrough:()=>Rf,stripColor:()=>hd,underline:()=>_f,white:()=>Bf,yellow:()=>Of});var{Deno:ki}=globalThis,_i=typeof ki?.noColor=="boolean"?ki.noColor:!0,ja=!_i;function Sf(e){_i||(ja=e)}function Ef(){return ja}function W(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function q(e,t){return ja?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Cf(e){return q(e,W([0],0))}function Lf(e){return q(e,W([1],22))}function Af(e){return q(e,W([2],22))}function kf(e){return q(e,W([3],23))}function _f(e){return q(e,W([4],24))}function Mf(e){return q(e,W([7],27))}function Pf(e){return q(e,W([8],28))}function Rf(e){return q(e,W([9],29))}function If(e){return q(e,W([30],39))}function Nf(e){return q(e,W([31],39))}function Df(e){return q(e,W([32],39))}function Of(e){return q(e,W([33],39))}function Ff(e){return q(e,W([34],39))}function Hf(e){return q(e,W([35],39))}function Uf(e){return q(e,W([36],39))}function Bf(e){return q(e,W([37],39))}function $f(e){return Mi(e)}function Mi(e){return q(e,W([90],39))}function jf(e){return q(e,W([91],39))}function zf(e){return q(e,W([92],39))}function Wf(e){return q(e,W([93],39))}function qf(e){return q(e,W([94],39))}function Vf(e){return q(e,W([95],39))}function Kf(e){return q(e,W([96],39))}function Gf(e){return q(e,W([97],39))}function Jf(e){return q(e,W([40],49))}function Yf(e){return q(e,W([41],49))}function Xf(e){return q(e,W([42],49))}function Qf(e){return q(e,W([43],49))}function Zf(e){return q(e,W([44],49))}function ed(e){return q(e,W([45],49))}function td(e){return q(e,W([46],49))}function nd(e){return q(e,W([47],49))}function rd(e){return q(e,W([100],49))}function ad(e){return q(e,W([101],49))}function od(e){return q(e,W([102],49))}function sd(e){return q(e,W([103],49))}function id(e){return q(e,W([104],49))}function ld(e){return q(e,W([105],49))}function cd(e){return q(e,W([106],49))}function ud(e){return q(e,W([107],49))}function _t(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function gd(e,t){return q(e,W([38,5,_t(t)],39))}function fd(e,t){return q(e,W([48,5,_t(t)],49))}function dd(e,t){return typeof t=="number"?q(e,W([38,2,t>>16&255,t>>8&255,t&255],39)):q(e,W([38,2,_t(t.r),_t(t.g),_t(t.b)],39))}function md(e,t){return typeof t=="number"?q(e,W([48,2,t>>16&255,t>>8&255,t&255],49)):q(e,W([48,2,_t(t.r),_t(t.g),_t(t.b)],49))}var pd=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function hd(e){return e.replace(pd,"")}function Rr(e,t){let n=null,r=null,a=(...o)=>{a.clear(),r=()=>{a.clear(),e.call(a,...o)},n=setTimeout(r,t)};return a.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},a.flush=()=>{r?.()},Object.defineProperty(a,"pending",{get:()=>typeof n=="number"}),a}var Hr,J,Di,bd,Vn,Pi,Oi,Dr={},Fi=[],yd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Mt(e,t){for(var n in t)e[n]=t[n];return e}function Hi(e){var t=e.parentNode;t&&t.removeChild(e)}function Ui(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Hr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return Ir(e,i,r,a,null)}function Ir(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Di};return a==null&&J.vnode!=null&&J.vnode(o),o}function Ze(e){return e.children}function Nr(e,t){this.props=e,this.context=t}function dn(e,t){if(t==null)return e.__?dn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?dn(e):null}function Bi(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Bi(e)}}function za(e){(!e.__d&&(e.__d=!0)&&Vn.push(e)&&!Or.__r++||Pi!==J.debounceRendering)&&((Pi=J.debounceRendering)||setTimeout)(Or)}function Or(){for(var e;Or.__r=Vn.length;)e=Vn.sort(function(t,n){return t.__v.__b-n.__v.__b}),Vn=[],e.some(function(t){var n,r,a,o,i,s;t.__d&&(i=(o=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=Mt({},o)).__v=o.__v+1,Wa(s,o,a,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??dn(o),o.__h),Wi(r,o),o.__e!=i&&Bi(o)))})}function $i(e,t,n,r,a,o,i,s,c,u){var l,g,f,m,p,b,x,h=r&&r.__k||Fi,y=h.length;for(n.__k=[],l=0;l<t.length;l++)if((m=n.__k[l]=(m=t[l])==null||typeof m=="boolean"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?Ir(null,m,null,null,m):Array.isArray(m)?Ir(Ze,{children:m},null,null,null):m.__b>0?Ir(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null){if(m.__=n,m.__b=n.__b+1,(f=h[l])===null||f&&m.key==f.key&&m.type===f.type)h[l]=void 0;else for(g=0;g<y;g++){if((f=h[g])&&m.key==f.key&&m.type===f.type){h[g]=void 0;break}f=null}Wa(e,m,f=f||Dr,a,o,i,s,c,u),p=m.__e,(g=m.ref)&&f.ref!=g&&(x||(x=[]),f.ref&&x.push(f.ref,null,m),x.push(g,m.__c||p,m)),p!=null?(b==null&&(b=p),typeof m.type=="function"&&m.__k===f.__k?m.__d=c=ji(m,c,e):c=zi(e,m,f,h,p,c),typeof n.type=="function"&&(n.__d=c)):c&&f.__e==c&&c.parentNode!=e&&(c=dn(f))}for(n.__e=b,l=y;l--;)h[l]!=null&&(typeof n.type=="function"&&h[l].__e!=null&&h[l].__e==n.__d&&(n.__d=dn(r,l+1)),Vi(h[l],h[l]));if(x)for(l=0;l<x.length;l++)qi(x[l],x[++l],x[++l])}function ji(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?ji(r,t,n):zi(n,r,r,a,r.__e,t));return t}function zi(e,t,n,r,a,o){var i,s,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),i=null;else{for(s=o,c=0;(s=s.nextSibling)&&c<r.length;c+=2)if(s==a)break e;e.insertBefore(a,o),i=o}return i!==void 0?i:a.nextSibling}function xd(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||Fr(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Fr(e,o,t[o],n[o],r)}function Ri(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||yd.test(t)?n:n+"px"}function Fr(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ri(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Ri(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Ni:Ii,o):e.removeEventListener(t,o?Ni:Ii,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ii(e){this.l[e.type+!1](J.event?J.event(e):e)}function Ni(e){this.l[e.type+!0](J.event?J.event(e):e)}function Wa(e,t,n,r,a,o,i,s,c){var u,l,g,f,m,p,b,x,h,y,S,A,D,v=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(u=J.__b)&&u(t);try{e:if(typeof v=="function"){if(x=t.props,h=(u=v.contextType)&&r[u.__c],y=u?h?h.props.value:u.__:r,n.__c?b=(l=t.__c=n.__c).__=l.__E:("prototype"in v&&v.prototype.render?t.__c=l=new v(x,y):(t.__c=l=new Nr(x,y),l.constructor=v,l.render=vd),h&&h.sub(l),l.props=x,l.state||(l.state={}),l.context=y,l.__n=r,g=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),v.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Mt({},l.__s)),Mt(l.__s,v.getDerivedStateFromProps(x,l.__s))),f=l.props,m=l.state,g)v.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v.getDerivedStateFromProps==null&&x!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(x,y),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(x,l.__s,y)===!1||t.__v===n.__v){l.props=x,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(L){L&&(L.__=t)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(x,l.__s,y),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,m,p)})}if(l.context=y,l.props=x,l.__v=t,l.__P=e,S=J.__r,A=0,"prototype"in v&&v.prototype.render)l.state=l.__s,l.__d=!1,S&&S(t),u=l.render(l.props,l.state,l.context);else do l.__d=!1,S&&S(t),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++A<25);l.state=l.__s,l.getChildContext!=null&&(r=Mt(Mt({},r),l.getChildContext())),g||l.getSnapshotBeforeUpdate==null||(p=l.getSnapshotBeforeUpdate(f,m)),D=u!=null&&u.type===Ze&&u.key==null?u.props.children:u,$i(e,Array.isArray(D)?D:[D],t,n,r,a,o,i,s,c),l.base=t.__e,t.__h=null,l.__h.length&&i.push(l),b&&(l.__E=l.__=null),l.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Td(n.__e,t,n,r,a,o,i,c);(u=J.diffed)&&u(t)}catch(L){t.__v=null,(c||o!=null)&&(t.__e=s,t.__h=!!c,o[o.indexOf(s)]=null),J.__e(L,t,n)}}function Wi(e,t){J.__c&&J.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){J.__e(r,n.__v)}})}function Td(e,t,n,r,a,o,i,s){var c,u,l,g=n.props,f=t.props,m=t.type,p=0;if(m==="svg"&&(a=!0),o!=null){for(;p<o.length;p++)if((c=o[p])&&"setAttribute"in c==!!m&&(m?c.localName===m:c.nodeType===3)){e=c,o[p]=null;break}}if(e==null){if(m===null)return document.createTextNode(f);e=a?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,f.is&&f),o=null,s=!1}if(m===null)g===f||s&&e.data===f||(e.data=f);else{if(o=o&&Hr.call(e.childNodes),u=(g=n.props||Dr).dangerouslySetInnerHTML,l=f.dangerouslySetInnerHTML,!s){if(o!=null)for(g={},p=0;p<e.attributes.length;p++)g[e.attributes[p].name]=e.attributes[p].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(xd(e,f,g,a,s),l)t.__k=[];else if(p=t.props.children,$i(e,Array.isArray(p)?p:[p],t,n,r,a&&m!=="foreignObject",o,i,o?o[0]:n.__k&&dn(n,0),s),o!=null)for(p=o.length;p--;)o[p]!=null&&Hi(o[p]);s||("value"in f&&(p=f.value)!==void 0&&(p!==e.value||m==="progress"&&!p||m==="option"&&p!==g.value)&&Fr(e,"value",p,g.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==e.checked&&Fr(e,"checked",p,g.checked,!1))}return e}function qi(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){J.__e(r,n)}}function Vi(e,t,n){var r,a;if(J.unmount&&J.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||qi(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){J.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Vi(r[a],t,typeof e.type!="function");n||e.__e==null||Hi(e.__e),e.__=e.__e=e.__d=void 0}function vd(e,t,n){return this.constructor(e,n)}function qa(e,t,n){var r,a,o;J.__&&J.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Wa(t,e=(!r&&n||t).__k=Ui(Ze,null,[e]),a||Dr,Dr,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Hr.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),Wi(o,e)}function Va(e,t){var n={__c:t="__cC"+Oi++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(za)},this.sub=function(i){a.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Hr=Fi.slice,J={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},Di=0,bd=function(e){return e!=null&&e.constructor===void 0},Nr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Mt({},this.state),typeof e=="function"&&(e=e(Mt({},n),this.props)),e&&Mt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),za(this))},Nr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),za(this))},Nr.prototype.render=Ze,Vn=[],Or.__r=0,Oi=0;var Gn,Ee,Ka,Ki,Kn=0,el=[],Ur=[],Gi=J.__b,Ji=J.__r,Yi=J.diffed,Xi=J.__c,Qi=J.unmount;function $r(e,t){J.__h&&J.__h(Ee,e,Kn||t),Kn=0;var n=Ee.__H||(Ee.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Ur}),n.__[e]}function Y(e){return Kn=1,wd(rl,e)}function wd(e,t,n){var r=$r(Gn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):rl(void 0,t),function(o){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,o);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=Ee,!Ee.u)){Ee.u=!0;var a=Ee.shouldComponentUpdate;Ee.shouldComponentUpdate=function(o,i,s){if(!r.__c.__H)return!0;var c=r.__c.__H.__.filter(function(l){return l.__c});if(c.every(function(l){return!l.__N}))return!a||a.call(this,o,i,s);var u=!1;return c.forEach(function(l){if(l.__N){var g=l.__[0];l.__=l.__N,l.__N=void 0,g!==l.__[0]&&(u=!0)}}),!!u&&(!a||a.call(this,o,i,s))}}return r.__N||r.__}function ge(e,t){var n=$r(Gn++,3);!J.__s&&nl(n.__H,t)&&(n.__=e,n.i=t,Ee.__H.__h.push(n))}function mn(e){return Kn=5,tl(function(){return{current:e}},[])}function tl(e,t){var n=$r(Gn++,7);return nl(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Jn(e,t){return Kn=8,tl(function(){return e},t)}function Ja(e){var t=Ee.context[e.__c],n=$r(Gn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Ee)),t.props.value):e.__}function Sd(){for(var e;e=el.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Br),e.__H.__h.forEach(Ga),e.__H.__h=[]}catch(t){e.__H.__h=[],J.__e(t,e.__v)}}J.__b=function(e){typeof e.type!="function"||e.o||e.type===Ze?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Ee=null,Gi&&Gi(e)},J.__r=function(e){Ji&&Ji(e),Gn=0;var t=(Ee=e.__c).__H;t&&(Ka===Ee?(t.__h=[],Ee.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Ur,n.__N=n.i=void 0})):(t.__h.forEach(Br),t.__h.forEach(Ga),t.__h=[])),Ka=Ee},J.diffed=function(e){Yi&&Yi(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(el.push(t)!==1&&Ki===J.requestAnimationFrame||((Ki=J.requestAnimationFrame)||Ed)(Sd)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Ur&&(n.__=n.__V),n.i=void 0,n.__V=Ur})),Ka=Ee=null},J.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Br),n.__h=n.__h.filter(function(r){return!r.__||Ga(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],J.__e(r,n.__v)}}),Xi&&Xi(e,t)},J.unmount=function(e){Qi&&Qi(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Br(r)}catch(a){t=a}}),n.__H=void 0,t&&J.__e(t,n.__v))};var Zi=typeof requestAnimationFrame=="function";function Ed(e){var t,n=function(){clearTimeout(r),Zi&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Zi&&(t=requestAnimationFrame(n))}function Br(e){var t=Ee,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Ee=t}function Ga(e){var t=Ee;e.__c=e.__(),Ee=t}function nl(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function rl(e,t){return typeof t=="function"?t(e):t}var Vb=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Ld=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function jr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,a=0,o=0;function i(){let l=Date.now();return l-a>t?(o=1,a=l,0):(o<e?o++:(a+=t,o=1),a-l)}let s=[];function c(){let l=Date.now();if(s.length<e)return s.push(l),0;let g=s.shift()+t;return l>=g?(s.push(l),0):(s.push(g),g-l)}let u=n?c:i;return l=>{let g=function(...f){if(!g.isEnabled)return(async()=>l.apply(this,f))();let m;return new Promise((p,b)=>{m=setTimeout(()=>{p(l.apply(this,f)),r.delete(m)},u()),r.set(m,b)})};return g.abort=()=>{for(let f of r.keys())clearTimeout(f),r.get(f)(new Ld);r.clear(),s.splice(0,s.length)},g.isEnabled=!0,g}}var Yn;function oo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function fl(e,t=","){return e.map(oo).join(t)}var so=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function pn(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function dl(e,t="@media "){return t+ve(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function ve(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Ad(e){return e}function io(){}var Ae={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function ml(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function to(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(ml(e),15)<<18}var kd=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function lo({n:e,i:t,v:n=[]},r,a,o){for(let s of(e&&(e=oo({n:e,i:t,v:n})),o=[...ve(o)],n)){let c=r.theme("screens",s);for(let u of ve(c&&dl(c)||r.v(s))){var i;o.push(u),a|=c?67108864|to(u):s=="dark"?1073741824:u[0]=="@"?to(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~kd.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var co=new Map;function no(e){if(e.d){let t=[],n=Ya(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Ya(r,o=>Ya(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=o.indexOf(s[1]);return~c?o.slice(0,c)+s[0]+o.slice(c+s[1].length):Xa(o,i)}return Xa(i,o)})):r,"&"),r=>Xa(r,e.n?"."+so(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Ya(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Xa(e,t){return e.replace(/&/g,t)}var _d=new Intl.Collator("en",{numeric:!0});function pl(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=hl(e[a],t)?n=a+1:r=a}return r}function hl(e,t){let n=e.p&Ae.o;return n==(t.p&Ae.o)&&(n==Ae.b||n==Ae.o)?0:e.p-t.p||e.o-t.o||_d.compare(e.n,t.n)}function Qa(e,t){return Math.round(parseInt(e,16)*t)}function bl(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Qa(e.substr(1,o),i),Qa(e.substr(1+o,o),i),Qa(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function uo(e,t,n,r,a=[]){return function o(i,{n:s,p:c,r:u=[],i:l},g){let f=[],m="",p=0,b=0;for(let y in i||{}){var x,h;let S=i[y];if(y[0]=="@"){if(!S)continue;if(y[1]=="a"){f.push(...fo(s,c,Xn(""+S),g,c,u,l,!0));continue}if(y[1]=="l"){for(let A of ve(S))f.push(...o(A,{n:s,p:(x=Ae[y[7]],c&~Ae.o|x),r:u,i:l},g));continue}if(y[1]=="i"){f.push(...ve(S).map(A=>({p:-1,o:0,r:[],d:y+" "+A})));continue}if(y[1]=="k"){f.push({p:Ae.d,o:0,r:[y],d:o(S,{p:Ae.d},g).map(no).join("")});continue}if(y[1]=="f"){f.push(...ve(S).map(A=>({p:Ae.d,o:0,r:[y],d:o(A,{p:Ae.d},g).map(no).join("")})));continue}}if(typeof S!="object"||Array.isArray(S))y=="label"&&S?s=S+pn(JSON.stringify([c,l,i])):(S||S===0)&&(y=y.replace(/[A-Z]/g,A=>"-"+A.toLowerCase()),b+=1,p=Math.max(p,(h=y)[0]=="-"?0:ml(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),m+=(m?";":"")+ve(S).map(A=>g.s(y,yl(""+A,g.theme)+(l?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let A=c;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(D,v)=>{let L=g.theme("screens",v);return L?(A|=67108864,dl(L,"")):D}),A|=to(y)),f.push(...o(S,{n:s,p:A,r:[...u,y],i:l},g))}else f.push(...o(S,{p:c,r:[...u,y]},g))}return f.unshift({n:s,p:c,o:Math.max(0,15-b)+1.5*Math.min(p||15,15),r:u,d:m}),f.sort(hl)}(e,lo(t,n,r,a),n)}function yl(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i)=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?bl(s):""+s})}function go(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function zr(e,t,n=Ae.u,r,a){let o=[];for(let i of e)for(let s of function(c,u,l,g,f){var m;c={...c,i:c.i||f};let p=function(b,x){let h=co.get(b.n);return h?h(b,x):x.r(b.n,b.v[0]=="dark")}(c,u);return p?typeof p=="string"?({r:g,p:l}=lo(c,u,l,g),go(zr(Xn(p),u,l,g,c.i),c.n)):Array.isArray(p)?p.map(b=>{var x,h;return{o:0,...b,r:[...ve(g),...ve(b.r)],p:(x=l,h=(m=b.p)!=null?m:l,x&~Ae.o|h)}}):uo(p,c,u,l,g):[{c:oo(c),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(pl(o,s),0,s);return o}function fo(e,t,n,r,a,o,i,s){return go((s?n.flatMap(c=>zr([c],r,a,o,i)):zr(n,r,a,o,i)).map(c=>c.p&Ae.o&&(c.n||t==Ae.b)?{...c,p:c.p&~Ae.o|t,o:0}:c),e)}function Md(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:c,r:u,i:l}=lo(o,i,t);return n&&fo(s,t,n,i,c,u,l,r)},co.set(e,a),e}function Za(e,t){if(e[e.length-1]!="("){let n=[],r=!1,a=!1,o="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(o+=(o&&"-")+i)}o&&(a&&(o="-"+o),t[0].push({n:o,v:n.filter(Pd),i:r}))}}function Pd(e,t,n){return n.indexOf(e)==t}var al=new Map;function Xn(e){let t=al.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,c=(u,l=0)=>{a!=s&&(n.push(e.slice(a,s+l)),u&&Za(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let g=n[l-1];if(/[~@]$/.test(g)){let f=r.shift();n.length=l,Za([...n,"#"],r);let{v:m}=r[0].pop();for(let p of f)p.v.splice(+(p.v[0]=="dark")-+(m[0]=="dark"),m.length);Za([...n,Md(g.length>1?g.slice(0,-1)+pn(JSON.stringify([g,f])):g+"("+fl(f)+")",Ae.a,f,/@$/.test(g))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),al.set(e,t=r[0])}return t}function xl(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function Tl(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?xl(e,t,n=>eo(n).trim()):t.filter(Boolean).reduce((n,r)=>n+eo(r),e?eo(e):"")}function eo(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Tl(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var s0=vl("@"),i0=vl("~");function vl(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(a,...o){return t(r,a,o)}});function t(n,r,a){return fl(Xn(n+e+"("+Tl(r,a)+")"))}}function ro(e,t){return Array.isArray(e)?ol(xl(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?ol(e):[e]}var Rd=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function ol(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=Rd.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function wl(e,...t){var n,r;let a=ro(e,t),o=(((n=a.find(i=>i.label))==null?void 0:n.label)||"css")+pn(JSON.stringify(a));return r=(i,s)=>go(a.flatMap(c=>uo(c,i,s,Ae.o)),o),co.set(o,r),o}var l0=new Proxy(function(e,t){return sl("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return sl(t,n,r)}});function sl(e,t,n){return{toString:()=>wl({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var c0=Symbol();function Qn({presets:e=[],...t}){let n={preflight:t.preflight!==!1&&[],darkMode:void 0,darkColor:void 0,theme:{},variants:ve(t.variants),rules:ve(t.rules),ignorelist:ve(t.ignorelist),hash:t.hash,stringify:t.stringify||Id};for(let r of ve([...e,{darkMode:t.darkMode,darkColor:t.darkColor,preflight:t.preflight!==!1&&ve(t.preflight),theme:t.theme,hash:t.hash,stringify:t.stringify}])){let{preflight:a,darkMode:o=n.darkMode,darkColor:i=n.darkColor,theme:s,variants:c,rules:u,ignorelist:l,hash:g=n.hash,stringify:f=n.stringify}=typeof r=="function"?r(n):r;n={preflight:n.preflight!==!1&&a!==!1&&[...n.preflight,...ve(a)],darkMode:o,darkColor:i,theme:{...n.theme,...s,extend:{...n.theme.extend,...s?.extend}},variants:[...n.variants,...ve(c)],rules:[...n.rules,...ve(u)],ignorelist:[...n.ignorelist,...ve(l)],hash:g,stringify:f}}return n}function Id(e,t){return e+":"+t}function il(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):ll(n,1)}):n=>e||{[n[1]]:ll(n,2)}}function ll(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function cl(e,t,n,r,a,o){for(let i of t){let s=n.get(i);s||n.set(i,s=r(i));let c=s(e,a,o);if(c)return c}}function Nd(e){var t;return ao(e[0],typeof(t=e[1])=="function"?t:()=>t)}function Dd(e){var t,n;return Array.isArray(e)?ao(e[0],il(e[1],e[2])):ao(e,il(t,n))}function ao(e,t){return Sl(e,(n,r,a,o)=>{let i=r.exec(n);if(i)return i.$$=n.slice(i[0].length),i.dark=o,t(i,a)})}function Sl(e,t){let n=ve(e).map(Od);return(r,a,o)=>{for(let i of n){let s=t(r,i,a,o);if(s)return s}}}function Od(e){return typeof e=="string"?RegExp("^"+e+(e.includes("$")||e.slice(-1)=="-"?"":"$")):e}function ul(e,t){return e.replace(/--(tw(?:-[\w-]+)?)\b/g,(n,r)=>"--"+t(r).replace("#",""))}function Fd(e,t){let n=Qn(e),r=function({theme:c,darkMode:u,darkColor:l,variants:g,rules:f,hash:m,stringify:p,ignorelist:b}){let x=new Map,h=new Map,y=new Map,S=new Map,A=Sl(b,(v,L)=>L.test(v));g.push(["dark",Array.isArray(u)||u=="class"?`${ve(u)[1]||".dark"} &`:typeof u=="string"&&u!="media"?u:"@media (prefers-color-scheme:dark)"]);let D=typeof m=="function"?v=>m(v,pn):m?pn:Ad;return{theme:function({extend:v={},...L}){let O={},w={get colors(){return R("colors")},theme:R,negative:()=>({}),breakpoints(P){let _={};for(let H in P)typeof P[H]=="string"&&(_["screen-"+H]=P[H]);return _}};return R;function R(P,_,H,B){if(P){var j;if({1:P,2:B}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(P)||[,P],/[.[]/.test(P)){let $=[];P.replace(/\[([^\]]+)\]|([^.[]+)/g,(X,E,I=E)=>$.push(I)),P=$.shift(),H=_,_=$.join("-")}let ee=O[P]||Object.assign(Object.assign(O[P]={},U(L,P)),U(v,P));if(_==null)return ee;let C=(j=ee[_||"DEFAULT"])!=null?j:H;return B?bl(C,{opacityValue:yl(B,R)}):C}let Z={};for(let ee of[...Object.keys(L),...Object.keys(v)])Z[ee]=R(ee);return Z}function U(P,_){let H=P[_];return typeof H=="function"&&(H=H(w)),H&&/color|fill|stroke/i.test(_)?function B(j,Z=[]){let ee={};for(let C in j){let $=j[C],X=[...Z,C];ee[X.join("-")]=$,C=="DEFAULT"&&(X=Z,ee[Z.join("-")]=$),typeof $=="object"&&Object.assign(ee,B($,X))}return ee}(H):H}}(c),e:so,h:D,s(v,L){return p(ul(v,D),ul(L,D),this)},d(v,L,O){return l?.(v,L,this,O)},v(v){return x.has(v)||x.set(v,cl(v,g,h,Nd,this)||"&:"+v),x.get(v)},r(v,L){let O=JSON.stringify([v,L]);return y.has(O)||y.set(O,!A(v,this)&&cl(v,f,S,Dd,this,L)),y.get(O)}}}(n),a=new Map,o=[],i=new Set;function s(c){let u=c.n&&r.h(c.n),l=no(u?{...c,n:u}:c);if(l&&!i.has(l)){i.add(l);let g=pl(o,c);t.insert(l,g,c),o.splice(g,0,c)}return u}return t.resume(c=>a.set(c,c),(c,u)=>{t.insert(c,o.length,u),o.push(u),i.add(c)}),Object.defineProperties(function(c){if(!a.size)for(let l of ve(n.preflight))typeof l=="function"&&(l=l(r)),l&&(typeof l=="string"?fo("",Ae.b,Xn(l),r,Ae.b,[],!1,!0):uo(l,{},r,Ae.b)).forEach(s);c=""+c;let u=a.get(c);if(!u){let l=new Set;for(let g of zr(Xn(c),r))l.add(g.c).add(s(g));u=[...l].filter(Boolean).join(" "),a.set(c,u).set(u,u)}return u},Object.getOwnPropertyDescriptors({get target(){return t.target},theme:r.theme,config:n,snapshot(){let c=t.snapshot(),u=new Set(i),l=new Map(a),g=[...o];return()=>{c(),i=u,a=l,o=g}},clear(){t.clear(),i=new Set,a=new Map,o=[]},destroy(){this.clear(),t.destroy()}}))}function Hd(e,t){return e!=t&&""+e.split(" ").sort()!=""+t.split(" ").sort()}function Ud(e=mo,t=document.documentElement){if(!t)return e;let n=new MutationObserver(a);n.observe(t,{attributeFilter:["class"],subtree:!0,childList:!0}),o(t),a([{target:t,type:""}]);let{destroy:r}=e;return e.destroy=()=>{n.disconnect(),r.call(e)},e;function a(i){for(let{type:s,target:c}of i)if(s[0]=="a")o(c);else for(let u of c.querySelectorAll("[class]"))o(u);n.takeRecords()}function o(i){let s,c=i.getAttribute("class");c&&Hd(c,s=e(c))&&i.setAttribute("class",s)}}function El(e){let t=document.querySelector(e||"style[data-twind]");return t&&t.tagName=="STYLE"||((t=document.createElement("style")).dataset.twind="",document.head.prepend(t)),t}function Bd(e){let t=e?.cssRules?e:(e&&typeof e!="string"?e:El(e)).sheet;return{target:t,snapshot(){let n=Array.from(t.cssRules,r=>r.cssText);return()=>{this.clear(),n.forEach(this.insert)}},clear(){for(let n=t.cssRules.length;n--;)t.deleteRule(n)},destroy(){var n;(n=t.ownerNode)==null||n.remove()},insert(n,r){try{t.insertRule(n,r)}catch{t.insertRule(":root{}",r),/:-[mwo]/.test(n)}},resume:io}}function $d(e){let t=e&&typeof e!="string"?e:El(e);return{target:t,snapshot(){let n=Array.from(t.childNodes,r=>r.textContent);return()=>{this.clear(),n.forEach(this.insert)}},clear(){t.textContent=""},destroy(){t.remove()},insert(n,r){t.insertBefore(document.createTextNode(n),t.childNodes[r]||null)},resume:io}}function Cl(e,t){let n=e?$d():Bd();return t||(n.resume=zd),n}function jd(e){return(e.ownerNode||e).textContent||(e.cssRules?Array.from(e.cssRules,t=>t.cssText):ve(e)).join("")}function zd(e,t){let n=jd(this.target),r=/\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;if(r.test(n)){var a;let o;for(let i of(r.lastIndex=0,this.clear(),document.querySelectorAll("[class]")))e(i.getAttribute("class"));for(;a=r.exec(n),o&&t(n.slice(o.index+o[0].length,a?.index),{p:parseInt(o[1],36),o:parseInt(o[2],36)/2,n:o[3]}),o=a;);}}var mo=new Proxy(io,{apply:(e,t,n)=>Yn(n[0]),get(e,t){let n=Yn[t];return typeof n=="function"?function(){return n.apply(Yn,arguments)}:n}});function Ll(e={},t=Cl,n){return Yn?.destroy(),Yn=Ud(Fd(e,typeof t=="function"?t():t),n)}function po(e,t=!0){var n;let r=Qn(e);return Ll({...r,hash:(n=r.hash)!=null?n:t},()=>Cl(!t))}var u0=function e(t){return new Proxy(function(n,...r){return gl(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(a,...o){return gl(t,r,a,o)}})}();function gl(e,t,n,r){return{toString(){let a=ro(n,r),o=so(t+pn(JSON.stringify([t,a])));return(typeof e=="function"?e:mo)(wl({[`@keyframes ${o}`]:ro(n,r)})),o}}}var Wd=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["print-color-adjust","color-adjust"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function Al(e){return Wd.get(e)}function kl(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}function _l(e,t){var n=/^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(e);return n?n[1]?/^sti/i.test(t)?1:0:n[2]?/^pat/i.test(t)?1:0:n[3]?/^image-/i.test(t)?1:0:n[4]?t[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(t)?4:0:0}var qd=[["-webkit-",1],["-moz-",2],["-ms-",4]];function Wr(){return({stringify:e})=>({stringify(t,n,r){let a="",o=Al(t);o&&(a+=e(o,n,r)+";");let i=kl(t),s=_l(t,n);for(let c of qd)i&c[1]&&(a+=e(c[0]+t,n,r)+";"),s&c[1]&&(a+=e(t,c[0]+n,r)+";");return a+e(t,n,r)}})}var ho;function Lo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Hl(e,t=","){return e.map(Lo).join(t)}var Ul=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function qr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Vr(e,t="@media "){return t+et(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function et(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Vd(){}var Fe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Bl(e){return e.match(/[-=:;]/g)?.length||0}function wo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Bl(e),15)<<18}var Kd=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Ao({n:e,i:t,v:n=[]},r,a,o){e&&(e=Lo({n:e,i:t,v:n})),o=[...et(o)];for(let s of n){let c=r.theme("screens",s);for(let u of et(c&&Vr(c)||r.v(s))){var i;o.push(u),a|=c?67108864|wo(u):s=="dark"?1073741824:u[0]=="@"?wo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Kd.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var ko=new Map;function Ml(e){if(e.d){let t=[],n=bo(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?bo(r,o=>bo(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=o.indexOf(s[1]);return~c?o.slice(0,c)+s[0]+o.slice(c+s[1].length):yo(o,i)}return yo(i,o)})):r,"&"),r=>yo(r,e.n?"."+Ul(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function bo(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function yo(e,t){return e.replace(/&/g,t)}var Pl=new Intl.Collator("en",{numeric:!0});function Gd(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=$l(e[a],t)?n=a+1:r=a}return r}function $l(e,t){let n=e.p&Fe.o;return n==(t.p&Fe.o)&&(n==Fe.b||n==Fe.o)?0:e.p-t.p||e.o-t.o||Pl.compare(Rl(e.n),Rl(t.n))||Pl.compare(Il(e.n),Il(t.n))}function Rl(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Il(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function xo(e,t){return Math.round(parseInt(e,16)*t)}function Pt(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[xo(e.substr(1,o),i),xo(e.substr(1+o,o),i),xo(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function jl(e,t,n,r,a=[]){return function o(i,{n:s,p:c,r:u=[],i:l},g){let f=[],m="",p=0,b=0;for(let y in i||{}){var x,h;let S=i[y];if(y[0]=="@"){if(!S)continue;if(y[1]=="a"){f.push(...Wl(s,c,Mo(""+S),g,c,u,l,!0));continue}if(y[1]=="l"){for(let A of et(S))f.push(...o(A,{n:s,p:(x=Fe[y[7]],c&~Fe.o|x),r:u,i:l},g));continue}if(y[1]=="i"){f.push(...et(S).map(A=>({p:-1,o:0,r:[],d:y+" "+A})));continue}if(y[1]=="k"){f.push({p:Fe.d,o:0,r:[y],d:o(S,{p:Fe.d},g).map(Ml).join("")});continue}if(y[1]=="f"){f.push(...et(S).map(A=>({p:Fe.d,o:0,r:[y],d:o(A,{p:Fe.d},g).map(Ml).join("")})));continue}}if(typeof S!="object"||Array.isArray(S))y=="label"&&S?s=S+qr(JSON.stringify([c,l,i])):(S||S===0)&&(y=y.replace(/[A-Z]/g,A=>"-"+A.toLowerCase()),b+=1,p=Math.max(p,(h=y)[0]=="-"?0:Bl(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),m+=(m?";":"")+et(S).map(A=>g.s(y,zl(""+A,g.theme)+(l?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let A=c;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(D,v)=>{let L=g.theme("screens",v);return L?(A|=67108864,Vr(L,"")):D}),A|=wo(y)),f.push(...o(S,{n:s,p:A,r:[...u,y],i:l},g))}else f.push(...o(S,{p:c,r:[...u,y]},g))}return f.unshift({n:s,p:c,o:Math.max(0,15-b)+1.5*Math.min(p||15,15),r:u,d:m}),f.sort($l)}(e,Ao(t,n,r,a),n)}function zl(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i="")=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?Pt(s):""+et(s).filter(c=>Object(c)!==c)})}function _o(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function So(e,t,n=Fe.u,r,a){let o=[];for(let i of e)for(let s of function(c,u,l,g,f){c={...c,i:c.i||f};let m=function(p,b){let x=ko.get(p.n);return x?x(p,b):b.r(p.n,p.v[0]=="dark")}(c,u);return m?typeof m=="string"?({r:g,p:l}=Ao(c,u,l,g),_o(So(Mo(m),u,l,g,c.i),c.n)):Array.isArray(m)?m.map(p=>{var b,x;return{o:0,...p,r:[...et(g),...et(p.r)],p:(b=l,x=p.p??l,b&~Fe.o|x)}}):jl(m,c,u,l,g):[{c:Lo(c),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(Gd(o,s),0,s);return o}function Wl(e,t,n,r,a,o,i,s){return _o((s?n.flatMap(c=>So([c],r,a,o,i)):So(n,r,a,o,i)).map(c=>c.p&Fe.o&&(c.n||t==Fe.b)?{...c,p:c.p&~Fe.o|t,o:0}:c),e)}function Jd(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:c,r:u,i:l}=Ao(o,i,t);return n&&Wl(s,t,n,i,c,u,l,r)},ko.set(e,a),e}function To(e,t,n){if(e[e.length-1]!="("){let r=[],a=!1,o=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),a=!a),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),o=!o),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(o&&(i="-"+i),t[0].push({n:i,v:r.filter(Yd),i:a}))}}function Yd(e,t,n){return n.indexOf(e)==t}var Nl=new Map;function Mo(e){let t=Nl.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,c=(u,l=0)=>{a!=s&&(n.push(e.slice(a,s+l)),u&&To(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let g=n[l-1];if(/[~@]$/.test(g)){let f=r.shift();n.length=l,To([...n,"#"],r);let{v:m}=r[0].pop();for(let p of f)p.v.splice(+(p.v[0]=="dark")-+(m[0]=="dark"),m.length);To([...n,Jd(g.length>1?g.slice(0,-1)+qr(JSON.stringify([g,f])):g+"("+Hl(f)+")",Fe.a,f,/@$/.test(g))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),Nl.set(e,t=r[0])}return t}function ql(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function Vl(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?ql(e,t,n=>vo(n).trim()):t.filter(Boolean).reduce((n,r)=>n+vo(r),e?vo(e):"")}function vo(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Vl(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var C0=Kl("@"),L0=Kl("~");function Kl(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(a,...o){return t(r,a,o)}}});function t(n,r,a){return Hl(Mo(n+e+"("+Vl(r,a)+")"))}}function Eo(e,t){return Array.isArray(e)?Dl(ql(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Dl(e):[e]}var Xd=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Dl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=Xd.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function Gl(e,...t){var n;let r=Eo(e,t),a=(r.find(o=>o.label)?.label||"css")+qr(JSON.stringify(r));return n=(o,i)=>_o(r.flatMap(s=>jl(s,o,i,Fe.o)),a),ko.set(a,n),a}var A0=new Proxy(function(e,t){return Ol("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return Ol(t,n,r)}}});function Ol(e,t,n){return{toString(){return Gl({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function k(e,t,n){return[e,Qd(t,n)]}function Qd(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Co(n,1)}):n=>e||{[n[1]]:Co(n,2)}}function Co(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function M(e,t,n,r){return[e,Zd(t,n,r)]}function Zd(e,t,n){let r=typeof t=="string"?(a,o)=>({[t]:n?n(a,o):a._}):t||(({1:a,_:o},i,s)=>({[a||s]:o}));return(a,o)=>{let i=Jl(e||a[1]),s=o.theme(i,a.$$)??Zn(a.$$,i,o);if(s!=null)return a._=Co(a,0,s),r(a,o,i)}}function Pe(e,t={},n){return[e,em(t,n)]}function em(e={},t){return(n,r)=>{let{section:a=Jl(n[0]).replace("-","")+"Color"}=e,[o,i]=tm(n.$$);if(!o)return;let s=r.theme(a,o)||Zn(o,a,r);if(!s||typeof s=="object")return;let{opacityVariable:c=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=a.replace("Color","Opacity"),property:l=a,selector:g}=e,f=r.theme(u,i||"DEFAULT")||i&&Zn(i,u,r),m=t||(({_:b})=>{let x=er(l,b);return g?{[g]:x}:x});n._={value:Pt(s,{opacityVariable:c||void 0,opacityValue:f||void 0}),color:b=>Pt(s,b),opacityVariable:c||void 0,opacityValue:f||void 0};let p=m(n,r);if(!n.dark){let b=r.d(a,o,s);b&&b!==s&&(n._={value:Pt(b,{opacityVariable:c||void 0,opacityValue:f||"1"}),color:x=>Pt(b,x),opacityVariable:c||void 0,opacityValue:f||void 0},p={"&":p,[r.v("dark")]:m(n,r)})}return p}}function tm(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function er(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function Zn(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=hn(zl(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Jl(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function hn(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,a="")=>hn(n)+r+hn(a)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var k0=Symbol();var nm=new Proxy(Vd,{apply(e,t,n){return ho(n[0])},get(e,t){let n=ho[t];return typeof n=="function"?function(){return n.apply(ho,arguments)}:n}});var _0=function e(t){return new Proxy(function(n,...r){return Fl(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(a,...o){return Fl(t,r,a,o)}}})}();function Fl(e,t,n,r){return{toString(){let a=Eo(n,r),o=Ul(t+qr(JSON.stringify([t,a])));return(typeof e=="function"?e:nm)(Gl({[`@keyframes ${o}`]:Eo(n,r)})),o}}}var rm="inherit",am="currentColor",om="transparent",sm="#000",im="#fff",lm={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},cm={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},um={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},gm={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},fm={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dm={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},mm={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},pm={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},hm={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},bm={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},ym={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},xm={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Tm={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},vm={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},wm={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Sm={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Em={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},Cm={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},Lm={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},Am={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},km={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},_m={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},Mm={__proto__:null,inherit:rm,current:am,transparent:om,black:sm,white:im,slate:lm,gray:cm,zinc:um,neutral:gm,stone:fm,red:dm,orange:mm,amber:pm,yellow:hm,lime:bm,green:ym,emerald:xm,teal:Tm,cyan:vm,sky:wm,blue:Sm,indigo:Em,violet:Cm,purple:Lm,fuchsia:Am,pink:km,rose:_m},Ro={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:Mm,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Ye(4,"rem",4,.5,.5),...Ye(12,"rem",4,5),14:"3.5rem",...Ye(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:ne("blur"),backdropBrightness:ne("brightness"),backdropContrast:ne("contrast"),backdropGrayscale:ne("grayscale"),backdropHueRotate:ne("hueRotate"),backdropInvert:ne("invert"),backdropOpacity:ne("opacity"),backdropSaturate:ne("saturate"),backdropSepia:ne("sepia"),backgroundColor:ne("colors"),backgroundImage:{none:"none"},backgroundOpacity:ne("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Ye(200,"",100,0,50),...Ye(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:ne("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:ne("spacing"),borderWidth:{DEFAULT:"1px",...tt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:ne("colors"),caretColor:ne("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Ye(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:ne("borderColor"),divideOpacity:ne("borderOpacity"),divideWidth:ne("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:ne("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...tr(2,6),...tr(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:ne("spacing"),gradientColorStops:ne("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...tr(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...tr(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Ye(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Ye(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:ne("spacing"),placeholderColor:ne("colors"),placeholderOpacity:ne("opacity"),outlineColor:ne("colors"),outlineOffset:tt(8,"px"),outlineWidth:tt(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:ne("colors"),ringOffsetWidth:tt(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...tt(8,"px")},rotate:{...tt(2,"deg"),...tt(12,"deg",3),...tt(180,"deg",45)},saturate:Ye(200,"",100,0,50),scale:{...Ye(150,"",100,0,50),...Ye(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:ne("spacing"),scrollPadding:ne("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...tt(2,"deg"),...tt(12,"deg",3)},space:ne("spacing"),stroke:ne("colors"),strokeWidth:Ye(2),textColor:ne("colors"),textDecorationColor:ne("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...tt(8,"px")},textUnderlineOffset:{auto:"auto",...tt(8,"px")},textIndent:ne("spacing"),textOpacity:ne("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:ne("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...tr(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Ye(50,"",1,0,10),auto:"auto"}};function tr(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function tt(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Ye(e,t="",n=1,r=0,a=1,o={}){for(;r<=e;r+=a)o[r]=r/n+t;return o}function ne(e){return({theme:t})=>t(e)}var Pm={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Ro.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Ro.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Rm=[k("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:Zn(`[${t}]`,e,n)}}})),k("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),M("aspect-","aspectRatio"),k("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:a}=t("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let c=n[s];typeof c=="string"&&(o[Vr(c)]={"&":{maxWidth:c,...i(s)}})}return o;function i(s){let c=a&&(typeof a=="string"?a:a[s]||a.DEFAULT);if(c)return{paddingRight:c,paddingLeft:c}}}),M("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),k("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),k("box-(border|content)","boxSizing",({1:e})=>e+"-box"),k("hidden",{display:"none"}),k("table-(auto|fixed)","tableLayout"),k(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",k("isolate","isolation"),k("object-(contain|cover|fill|none|scale-down)","objectFit"),M("object-","objectPosition"),k("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Kr),k("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),k("(static|fixed|absolute|relative|sticky)","position"),M("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),M("-?(top|bottom|left|right)(?:$|-)","inset"),k("visible","visibility"),k("invisible",{visibility:"hidden"}),M("-?z-","zIndex"),k("flex-((row|col)(-reverse)?)","flexDirection",Yl),k("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),M("(flex-(?:grow|shrink))(?:$|-)"),M("(flex)-"),M("grow(?:$|-)","flexGrow"),M("shrink(?:$|-)","flexShrink"),M("basis-","flexBasis"),M("-?(order)-"),"-?(order)-(\\d+)",M("grid-cols-","gridTemplateColumns"),k("grid-cols-(\\d+)","gridTemplateColumns",ec),M("col-","gridColumn"),k("col-(span)-(\\d+)","gridColumn",Zl),M("col-start-","gridColumnStart"),k("col-start-(auto|\\d+)","gridColumnStart"),M("col-end-","gridColumnEnd"),k("col-end-(auto|\\d+)","gridColumnEnd"),M("grid-rows-","gridTemplateRows"),k("grid-rows-(\\d+)","gridTemplateRows",ec),M("row-","gridRow"),k("row-(span)-(\\d+)","gridRow",Zl),M("row-start-","gridRowStart"),k("row-start-(auto|\\d+)","gridRowStart"),M("row-end-","gridRowEnd"),k("row-end-(auto|\\d+)","gridRowEnd"),k("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Kr(Yl(e))),k("grid-flow-(dense)","gridAutoFlow"),M("auto-cols-","gridAutoColumns"),M("auto-rows-","gridAutoRows"),M("gap-x(?:$|-)","gap","columnGap"),M("gap-y(?:$|-)","gap","rowGap"),M("gap(?:$|-)","gap"),"(justify-(?:items|self))-",k("justify-","justifyContent",Xl),k("(content|items|self)-",e=>({["align-"+e[1]]:Xl(e)})),k("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),M("p([xytrbl])?(?:$|-)","padding",bn("padding")),M("-?m([xytrbl])?(?:$|-)","margin",bn("margin")),M("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),k("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),M("w-","width"),M("min-w-","minWidth"),M("max-w-","maxWidth"),M("h-","height"),M("min-h-","minHeight"),M("max-h-","maxHeight"),M("font-","fontWeight"),M("font-","fontFamily","fontFamily",bt),k("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),k("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),k("italic","fontStyle"),k("not-italic",{fontStyle:"normal"}),k("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),M("tracking-","letterSpacing"),M("leading-","lineHeight"),k("list-(inside|outside)","listStylePosition"),M("list-","listStyleType"),k("list-","listStyleType"),M("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Pe("placeholder-",{property:"color",selector:"&::placeholder"}),k("text-(left|center|right|justify|start|end)","textAlign"),k("text-(ellipsis|clip)","textOverflow"),M("text-opacity-","textOpacity","--tw-text-opacity"),Pe("text-",{property:"color"}),M("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),M("indent-","textIndent"),k("(overline|underline|line-through)","textDecorationLine"),k("no-underline",{textDecorationLine:"none"}),M("underline-offset-","textUnderlineOffset"),Pe("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),M("decoration-","textDecorationThickness"),k("decoration-","textDecorationStyle"),k("(uppercase|lowercase|capitalize)","textTransform"),k("normal-case",{textTransform:"none"}),k("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),k("align-","verticalAlign"),k("whitespace-","whiteSpace"),k("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),k("break-words",{overflowWrap:"break-word"}),k("break-all",{wordBreak:"break-all"}),Pe("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Pe("accent-",{opacityVariable:!1,opacitySection:"opacity"}),k("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${jt(e," ")},var(--tw-gradient-stops))`),Pe("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Pe("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Pe("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),k("bg-(fixed|local|scroll)","backgroundAttachment"),k("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),k(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),k("bg-blend-","backgroundBlendMode"),k("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),M("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Pe("bg-",{section:"backgroundColor"}),M("bg-","backgroundImage"),M("bg-","backgroundPosition"),k("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Kr),M("bg-","backgroundSize"),M("rounded(?:$|-)","borderRadius"),M("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${jt(n[0])}-radius`]:t,[`border-${jt(n[1])}-radius`]:t}}),k("border-(collapse|separate)","borderCollapse"),M("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),k("border-(solid|dashed|dotted|double|none)","borderStyle"),M("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Pe("border-([xytrbl])-",{section:"borderColor"},bn("border","Color")),Pe("border-"),M("border-([xytrbl])(?:$|-)","borderWidth",bn("border","Width")),M("border(?:$|-)","borderWidth"),M("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),k("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),k("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),M("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${jt(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${jt(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Pe("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),M("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Pe("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),M("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),k("ring-inset",{"--tw-ring-inset":"inset"}),Pe("ring-",{property:"--tw-ring-color"}),M("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Pt(t("ringOffsetColor","","#fff")),"--tw-ring-color":Pt(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Pe("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),M("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":bt(e),"--tw-shadow-colored":bt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),M("(opacity)-"),k("mix-blend-","mixBlendMode"),...Ql(),...Ql("backdrop-"),M("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:bt(e),transitionTimingFunction:e._=="none"?void 0:bt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:bt(t("transitionDuration",""))})),M("duration(?:$|-)","transitionDuration","transitionDuration",bt),M("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",bt),M("delay(?:$|-)","transitionDelay","transitionDelay",bt),M("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=bt(e),a=r.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=n(a[0]))]:o,animation:a.join(" ")}:{animation:r}}),"(transform)-(none)",k("transform",Io),k("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":tc(e=="gpu")})),M("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Io()})),M("-?(rotate)-","rotate",Po),M("-?(translate-[xy])-","translate",Po),M("-?(skew-[xy])-","skew",Po),k("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Kr),"(appearance)-",M("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",M("(cursor)-"),"(cursor)-",k("snap-(none)","scroll-snap-type"),k("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),k("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),k("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),k("snap-(normal|always)","scroll-snap-stop"),k("scroll-(auto|smooth)","scroll-behavior"),M("scroll-p([xytrbl])?(?:$|-)","padding",bn("scroll-padding")),M("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",bn("scroll-margin")),k("touch-(auto|none|manipulation)","touch-action"),k("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),k("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),k("outline",{outlineStyle:"solid"}),k("outline-(dashed|dotted|double|hidden)","outlineStyle"),M("(outline-offset)-"),Pe("outline-",{opacityVariable:!1,opacitySection:"opacity"}),M("outline-","outlineWidth"),"(pointer-events)-",M("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],k("select-(none|text|all|auto)","userSelect"),Pe("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Pe("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),M("stroke-","strokeWidth"),k("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),k("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Kr(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Yl(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function jt(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function bt(e){return e&&""+(e._||e)}function Xl({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function bn(e,t=""){return({1:n,_:r})=>{let a={x:"lr",y:"tb"}[n]||n+n;return a?{...er(e+"-"+jt(a[0])+t,r),...er(e+"-"+jt(a[1])+t,r)}:er(e+t,r)}}function Ql(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,k(`${e}filter`,n),...t.map(r=>M(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:a,_:o})=>({[`--tw-${a}`]:et(o).map(i=>`${r}(${i})`).join(" "),...n})))]}function Po({1:e,_:t}){return{["--tw-"+e]:t,...Io()}}function Io(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":tc()}}}}function tc(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Zl({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function ec({1:e}){return`repeat(${e},minmax(0,1fr))`}var Im=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["portrait","@media (orientation:portrait)"],["landscape","@media (orientation:landscape)"],["contrast-more","@media (prefers-contrast:more)"],["contrast-less","@media (prefers-contrast:less)"],["marker","& *::marker,&::marker"],["selection","& *::selection,&::selection"],["first-letter","&::first-letter"],["first-line","&::first-line"],["file","&::file-selector-button"],["placeholder","&::placeholder"],["backdrop","&::backdrop"],["first","&:first-child"],["last","&:last-child"],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])",({1:e,4:t,5:n},{e:r,h:a,v:o})=>{let i=n&&hn(n)||(t[0]=="["?t:o(t.slice(1)));return`${(i.includes("&")?i:"&"+i).replace(/&/g,`:merge(.${r(a(e))})`)}${e[0]=="p"?"~":" "}&`}],["(ltr|rtl)",({1:e})=>`[dir="${e}"] &`],[/^\[(.+)]$/,({1:e})=>/[&@]/.test(e)&&hn(e).replace(/[}]+$/,"").split("{")]];function Gr({disablePreflight:e}={}){return{preflight:e?void 0:Pm,theme:Ro,variants:Im,rules:Rm}}var Nm=Object.create,rc=Object.defineProperty,Dm=Object.getOwnPropertyDescriptor,Om=Object.getOwnPropertyNames,Fm=Object.getPrototypeOf,Hm=Object.prototype.hasOwnProperty,Um=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Bm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Om(t))!Hm.call(e,a)&&a!==n&&rc(e,a,{get:()=>t[a],enumerable:!(r=Dm(t,a))||r.enumerable});return e},$m=(e,t,n)=>(n=e!=null?Nm(Fm(e)):{},Bm(t||!e||!e.__esModule?rc(n,"default",{value:e,enumerable:!0}):n,e)),jm=Um((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var a={};return r.m=n,r.c=a,r.i=function(o){return o},r.d=function(o,i,s){r.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(i,"a",i),i},r.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,r,a){"use strict";(function(o){var i,s,c,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,g){u(r)==="object"&&u(o)==="object"?o.exports=g():(s=[],i=g,c=typeof i=="function"?i.apply(r,s):i,c!==void 0&&(o.exports=c))})(void 0,function(){return function(l){function g(m){if(f[m])return f[m].exports;var p=f[m]={i:m,l:!1,exports:{}};return l[m].call(p.exports,p,p.exports,g),p.l=!0,p.exports}var f={};return g.m=l,g.c=f,g.i=function(m){return m},g.d=function(m,p,b){g.o(m,p)||Object.defineProperty(m,p,{configurable:!1,enumerable:!0,get:b})},g.n=function(m){var p=m&&m.__esModule?function(){return m.default}:function(){return m};return g.d(p,"a",p),p},g.o=function(m,p){return Object.prototype.hasOwnProperty.call(m,p)},g.p="",g(g.s=0)}([function(l,g,f){function m(E,I){var N={};for(var te in E)I.indexOf(te)>=0||Object.prototype.hasOwnProperty.call(E,te)&&(N[te]=E[te]);return N}Object.defineProperty(g,"__esModule",{value:!0});var p=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(E){return typeof E>"u"?"undefined":u(E)}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E>"u"?"undefined":u(E)},b=Object.assign||function(E){for(var I=1;I<arguments.length;I++){var N=arguments[I];for(var te in N)Object.prototype.hasOwnProperty.call(N,te)&&(E[te]=N[te])}return E},x={top:"top",bottom:"bottom"},h={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:x.top,force:x.top,confirm:x.top,input:x.top,select:x.bottom,date:x.top}},y=g.setOptions=function(E){h=b({},h,E,{classes:b({},h.classes,E.classes),ids:b({},h.ids,E.ids),positions:b({},h.positions,E.positions)})},S=function(){return new Promise(function(E){return setTimeout(E,0)})},A=function(E){return new Promise(function(I){return setTimeout(I,1e3*E)})},D=function(){document.activeElement&&document.activeElement.blur()},v=function(){var E="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(I){var N=16*Math.random()|0,te=I==="x"?N:3&N|8;return te.toString(16)});return"notie-"+E},L={1:h.classes.backgroundSuccess,success:h.classes.backgroundSuccess,2:h.classes.backgroundWarning,warning:h.classes.backgroundWarning,3:h.classes.backgroundError,error:h.classes.backgroundError,4:h.classes.backgroundInfo,info:h.classes.backgroundInfo,5:h.classes.backgroundNeutral,neutral:h.classes.backgroundNeutral},O=function(){return h.transitionSelector+" "+h.transitionDuration+"s "+h.transitionCurve},w=function(E){return E.keyCode===13},R=function(E){return E.keyCode===27},U=function(E,I){E.classList.add(h.classes.container),E.style[I]="-10000px",document.body.appendChild(E),E.style[I]="-"+E.offsetHeight+"px",E.listener&&window.addEventListener("keydown",E.listener),S().then(function(){E.style.transition=O(),E.style[I]=0})},P=function(E,I){var N=document.getElementById(E);N&&(N.style[I]="-"+N.offsetHeight+"px",N.listener&&window.removeEventListener("keydown",N.listener),A(h.transitionDuration).then(function(){N.parentNode&&N.parentNode.removeChild(N)}))},_=function(E,I){var N=document.createElement("div");N.id=h.ids.overlay,N.classList.add(h.classes.overlay),N.classList.add(h.classes.backgroundOverlay),N.style.opacity=0,E&&h.overlayClickDismiss&&(N.onclick=function(){P(E.id,I),H()}),document.body.appendChild(N),S().then(function(){N.style.transition=O(),N.style.opacity=h.overlayOpacity})},H=function(){var E=document.getElementById(h.ids.overlay);E.style.opacity=0,A(h.transitionDuration).then(function(){E.parentNode&&E.parentNode.removeChild(E)})},B=g.hideAlerts=function(E){var I=document.getElementsByClassName(h.classes.alert);if(I.length){for(var N=0;N<I.length;N++){var te=I[N];P(te.id,te.position)}E&&A(h.transitionDuration).then(function(){return E()})}},j=g.alert=function(E){var I=E.type,N=I===void 0?4:I,te=E.text,K=E.time,he=K===void 0?h.alertTime:K,we=E.stay,Ke=we!==void 0&&we,Me=E.position,fe=Me===void 0?h.positions.alert||fe.top:Me;D(),B();var ue=document.createElement("div"),de=v();ue.id=de,ue.position=fe,ue.classList.add(h.classes.textbox),ue.classList.add(L[N]),ue.classList.add(h.classes.alert),ue.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>",ue.onclick=function(){return P(de,fe)},ue.listener=function(z){(w(z)||R(z))&&B()},U(ue,fe),he&&he<1&&(he=1),!Ke&&he&&A(he).then(function(){return P(de,fe)})},Z=g.force=function(E,I){var N=E.type,te=N===void 0?5:N,K=E.text,he=E.buttonText,we=he===void 0?"OK":he,Ke=E.callback,Me=E.position,fe=Me===void 0?h.positions.force||fe.top:Me;D(),B();var ue=document.createElement("div"),de=v();ue.id=de;var z=document.createElement("div");z.classList.add(h.classes.textbox),z.classList.add(h.classes.backgroundInfo),z.innerHTML='<div class="'+h.classes.textboxInner+'">'+K+"</div>";var oe=document.createElement("div");oe.classList.add(h.classes.button),oe.classList.add(L[te]),oe.innerHTML=we,oe.onclick=function(){P(de,fe),H(),Ke?Ke():I&&I()},ue.appendChild(z),ue.appendChild(oe),ue.listener=function(Ie){w(Ie)&&oe.click()},U(ue,fe),_()},ee=g.confirm=function(E,I,N){var te=E.text,K=E.submitText,he=K===void 0?"Yes":K,we=E.cancelText,Ke=we===void 0?"Cancel":we,Me=E.submitCallback,fe=E.cancelCallback,ue=E.position,de=ue===void 0?h.positions.confirm||de.top:ue;D(),B();var z=document.createElement("div"),oe=v();z.id=oe;var Ie=document.createElement("div");Ie.classList.add(h.classes.textbox),Ie.classList.add(h.classes.backgroundInfo),Ie.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>";var be=document.createElement("div");be.classList.add(h.classes.button),be.classList.add(h.classes.elementHalf),be.classList.add(h.classes.backgroundSuccess),be.innerHTML=he,be.onclick=function(){P(oe,de),H(),Me?Me():I&&I()};var G=document.createElement("div");G.classList.add(h.classes.button),G.classList.add(h.classes.elementHalf),G.classList.add(h.classes.backgroundError),G.innerHTML=Ke,G.onclick=function(){P(oe,de),H(),fe?fe():N&&N()},z.appendChild(Ie),z.appendChild(be),z.appendChild(G),z.listener=function(Oe){w(Oe)?be.click():R(Oe)&&G.click()},U(z,de),_(z,de)},C=function(E,I,N){var te=E.text,K=E.submitText,he=K===void 0?"Submit":K,we=E.cancelText,Ke=we===void 0?"Cancel":we,Me=E.submitCallback,fe=E.cancelCallback,ue=E.position,de=ue===void 0?h.positions.input||de.top:ue,z=m(E,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);D(),B();var oe=document.createElement("div"),Ie=v();oe.id=Ie;var be=document.createElement("div");be.classList.add(h.classes.textbox),be.classList.add(h.classes.backgroundInfo),be.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>";var G=document.createElement("input");G.classList.add(h.classes.inputField),G.setAttribute("autocapitalize",z.autocapitalize||"none"),G.setAttribute("autocomplete",z.autocomplete||"off"),G.setAttribute("autocorrect",z.autocorrect||"off"),G.setAttribute("autofocus",z.autofocus||"true"),G.setAttribute("inputmode",z.inputmode||"verbatim"),G.setAttribute("max",z.max||""),G.setAttribute("maxlength",z.maxlength||""),G.setAttribute("min",z.min||""),G.setAttribute("minlength",z.minlength||""),G.setAttribute("placeholder",z.placeholder||""),G.setAttribute("spellcheck",z.spellcheck||"default"),G.setAttribute("step",z.step||"any"),G.setAttribute("type",z.type||"text"),G.value=z.value||"",z.allowed&&(G.oninput=function(){var Ue=void 0;if(Array.isArray(z.allowed)){for(var Ge="",kt=z.allowed,wt=0;wt<kt.length;wt++)kt[wt]==="an"?Ge+="0-9a-zA-Z":kt[wt]==="a"?Ge+="a-zA-Z":kt[wt]==="n"&&(Ge+="0-9"),kt[wt]==="s"&&(Ge+=" ");Ue=new RegExp("[^"+Ge+"]","g")}else p(z.allowed)==="object"&&(Ue=z.allowed);G.value=G.value.replace(Ue,"")});var Oe=document.createElement("div");Oe.classList.add(h.classes.button),Oe.classList.add(h.classes.elementHalf),Oe.classList.add(h.classes.backgroundSuccess),Oe.innerHTML=he,Oe.onclick=function(){P(Ie,de),H(),Me?Me(G.value):I&&I(G.value)};var lt=document.createElement("div");lt.classList.add(h.classes.button),lt.classList.add(h.classes.elementHalf),lt.classList.add(h.classes.backgroundError),lt.innerHTML=Ke,lt.onclick=function(){P(Ie,de),H(),fe?fe(G.value):N&&N(G.value)},oe.appendChild(be),oe.appendChild(G),oe.appendChild(Oe),oe.appendChild(lt),oe.listener=function(Ue){w(Ue)?Oe.click():R(Ue)&&lt.click()},U(oe,de),G.focus(),_(oe,de)};g.input=C;var $=g.select=function(E,I){var N=E.text,te=E.cancelText,K=te===void 0?"Cancel":te,he=E.cancelCallback,we=E.choices,Ke=E.position,Me=Ke===void 0?h.positions.select||Me.top:Ke;D(),B();var fe=document.createElement("div"),ue=v();fe.id=ue;var de=document.createElement("div");de.classList.add(h.classes.textbox),de.classList.add(h.classes.backgroundInfo),de.innerHTML='<div class="'+h.classes.textboxInner+'">'+N+"</div>",fe.appendChild(de),we.forEach(function(oe,Ie){var be=oe.type,G=be===void 0?1:be,Oe=oe.text,lt=oe.handler,Ue=document.createElement("div");Ue.classList.add(L[G]),Ue.classList.add(h.classes.button),Ue.classList.add(h.classes.selectChoice);var Ge=we[Ie+1];Ge&&!Ge.type&&(Ge.type=1),Ge&&Ge.type===G&&Ue.classList.add(h.classes.selectChoiceRepeated),Ue.innerHTML=Oe,Ue.onclick=function(){P(ue,Me),H(),lt()},fe.appendChild(Ue)});var z=document.createElement("div");z.classList.add(h.classes.backgroundNeutral),z.classList.add(h.classes.button),z.innerHTML=K,z.onclick=function(){P(ue,Me),H(),he?he():I&&I()},fe.appendChild(z),fe.listener=function(oe){R(oe)&&z.click()},U(fe,Me),_(fe,Me)},X=g.date=function(E,I,N){var te=E.value,K=te===void 0?new Date:te,he=E.submitText,we=he===void 0?"OK":he,Ke=E.cancelText,Me=Ke===void 0?"Cancel":Ke,fe=E.submitCallback,ue=E.cancelCallback,de=E.position,z=de===void 0?h.positions.date||z.top:de;D(),B();var oe="&#9662",Ie=document.createElement("div"),be=document.createElement("div"),G=document.createElement("div"),Oe=function(Se){Ie.innerHTML=h.dateMonths[Se.getMonth()],be.innerHTML=Se.getDate(),G.innerHTML=Se.getFullYear()},lt=function(Se){var ht=new Date(K.getFullYear(),K.getMonth()+1,0).getDate(),un=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(un)>ht&&(un=ht.toString()),Se.target.textContent=un,Number(un)<1&&(un="1"),K.setDate(Number(un))},Ue=function(Se){var ht=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Se.target.textContent=ht,K.setFullYear(Number(ht))},Ge=function(Se){Oe(K)},kt=function(Se){var ht=new Date(K.getFullYear(),K.getMonth()+Se+1,0).getDate();K.getDate()>ht&&K.setDate(ht),K.setMonth(K.getMonth()+Se),Oe(K)},wt=function(Se){K.setDate(K.getDate()+Se),Oe(K)},Si=function(Se){var ht=K.getFullYear()+Se;ht<0?K.setFullYear(0):K.setFullYear(K.getFullYear()+Se),Oe(K)},Ut=document.createElement("div"),Ha=v();Ut.id=Ha;var Ua=document.createElement("div");Ua.classList.add(h.classes.backgroundInfo);var ct=document.createElement("div");ct.classList.add(h.classes.dateSelectorInner);var sn=document.createElement("div");sn.classList.add(h.classes.button),sn.classList.add(h.classes.elementThird),sn.classList.add(h.classes.dateSelectorUp),sn.innerHTML=oe;var ln=document.createElement("div");ln.classList.add(h.classes.button),ln.classList.add(h.classes.elementThird),ln.classList.add(h.classes.dateSelectorUp),ln.innerHTML=oe;var cn=document.createElement("div");cn.classList.add(h.classes.button),cn.classList.add(h.classes.elementThird),cn.classList.add(h.classes.dateSelectorUp),cn.innerHTML=oe,Ie.classList.add(h.classes.element),Ie.classList.add(h.classes.elementThird),Ie.innerHTML=h.dateMonths[K.getMonth()],be.classList.add(h.classes.element),be.classList.add(h.classes.elementThird),be.setAttribute("contentEditable",!0),be.addEventListener("input",lt),be.addEventListener("blur",Ge),be.innerHTML=K.getDate(),G.classList.add(h.classes.element),G.classList.add(h.classes.elementThird),G.setAttribute("contentEditable",!0),G.addEventListener("input",Ue),G.addEventListener("blur",Ge),G.innerHTML=K.getFullYear();var zn=document.createElement("div");zn.classList.add(h.classes.button),zn.classList.add(h.classes.elementThird),zn.innerHTML=oe;var Wn=document.createElement("div");Wn.classList.add(h.classes.button),Wn.classList.add(h.classes.elementThird),Wn.innerHTML=oe;var qn=document.createElement("div");qn.classList.add(h.classes.button),qn.classList.add(h.classes.elementThird),qn.innerHTML=oe,sn.onclick=function(){return kt(1)},ln.onclick=function(){return wt(1)},cn.onclick=function(){return Si(1)},zn.onclick=function(){return kt(-1)},Wn.onclick=function(){return wt(-1)},qn.onclick=function(){return Si(-1)};var Bt=document.createElement("div");Bt.classList.add(h.classes.button),Bt.classList.add(h.classes.elementHalf),Bt.classList.add(h.classes.backgroundSuccess),Bt.innerHTML=we,Bt.onclick=function(){P(Ha,z),H(),fe?fe(K):I&&I(K)};var $t=document.createElement("div");$t.classList.add(h.classes.button),$t.classList.add(h.classes.elementHalf),$t.classList.add(h.classes.backgroundError),$t.innerHTML=Me,$t.onclick=function(){P(Ha,z),H(),ue?ue(K):N&&N(K)},ct.appendChild(sn),ct.appendChild(ln),ct.appendChild(cn),ct.appendChild(Ie),ct.appendChild(be),ct.appendChild(G),ct.appendChild(zn),ct.appendChild(Wn),ct.appendChild(qn),Ua.appendChild(ct),Ut.appendChild(Ua),Ut.appendChild(Bt),Ut.appendChild($t),Ut.listener=function(Se){w(Se)?Bt.click():R(Se)&&$t.click()},U(Ut,z),_(Ut,z)};g.default={alert:j,force:Z,confirm:ee,input:C,select:$,date:X,setOptions:y,hideAlerts:B}}])})}).call(r,a(0)(n))}])})}),zm=$m(jm()),{default:nc,...Wm}=zm,No=nc!==void 0?nc:Wm;var V0=Symbol("clean");var K0=Symbol();function Do(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=Do(e[r],t);return n}}function oc(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,a,o){let i=e(r,a,...o);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,a){return e(n,r,...a)}}}}var ny=oc((e,t,n)=>Do(t,r=>{for(let a in n)r=r.replace(new RegExp(`{${a}}`,"g"),n[a]);return r})),ry=oc((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),Do(t[r],a=>a.replace(/{count}/g,n))});var Oo=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Fo(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function uc(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function gc(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function Km(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,o=0;o<n.length;o++)r.indexOf(n[o])===-1&&(a=!1);return a}var rr={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Oo?173:189,"=":Oo?61:187,";":Oo?59:186,"'":222,"[":219,"]":221,"\\":220},yt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Bo={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},He={16:!1,18:!1,17:!1,91:!1},ke={};for(nr=1;nr<20;nr++)rr["f".concat(nr)]=111+nr;var nr,pe=[],sc=!1,fc="all",dc=[],Yr=function(e){return rr[e.toLowerCase()]||yt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},Gm=function(e){return Object.keys(rr).find(function(t){return rr[t]===e})},Jm=function(e){return Object.keys(yt).find(function(t){return yt[t]===e})};function mc(e){fc=e||"all"}function ar(){return fc||"all"}function Ym(){return pe.slice(0)}function Xm(){return pe.map(function(e){return Gm(e)||Jm(e)||String.fromCharCode(e)})}function Qm(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function Zm(e){return typeof e=="string"&&(e=Yr(e)),pe.indexOf(e)!==-1}function ep(e,t){var n,r;e||(e=ar());for(var a in ke)if(Object.prototype.hasOwnProperty.call(ke,a))for(n=ke[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;ar()===e&&mc(t||"all")}function tp(e){var t=e.keyCode||e.which||e.charCode,n=pe.indexOf(t);if(n>=0&&pe.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&pe.splice(0,pe.length),(t===93||t===224)&&(t=91),t in He){He[t]=!1;for(var r in yt)yt[r]===t&&(Be[r]=!1)}}function np(e){if(typeof e>"u")Object.keys(ke).forEach(function(i){return delete ke[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&Ho(i)});else if(typeof e=="object")e.key&&Ho(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],o=n[1];typeof a=="function"&&(o=a,a=""),Ho({key:e,scope:a,method:o,splitKey:"+"})}}var Ho=function(e){var t=e.key,n=e.scope,r=e.method,a=e.splitKey,o=a===void 0?"+":a,i=gc(t);i.forEach(function(s){var c=s.split(o),u=c.length,l=c[u-1],g=l==="*"?"*":Yr(l);if(ke[g]){n||(n=ar());var f=u>1?uc(yt,c):[];ke[g]=ke[g].filter(function(m){var p=r?m.method===r:!0;return!(p&&m.scope===n&&Km(m.mods,f))})}})};function ic(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var o in He)Object.prototype.hasOwnProperty.call(He,o)&&(!He[o]&&t.mods.indexOf(+o)>-1||He[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!He[16]&&!He[18]&&!He[17]&&!He[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function lc(e,t){var n=ke["*"],r=e.keyCode||e.which||e.charCode;if(Be.filter.call(this,e)){if((r===93||r===224)&&(r=91),pe.indexOf(r)===-1&&r!==229&&pe.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var b=Bo[p];e[p]&&pe.indexOf(b)===-1?pe.push(b):!e[p]&&pe.indexOf(b)>-1?pe.splice(pe.indexOf(b),1):p==="metaKey"&&e[p]&&pe.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(pe=pe.slice(pe.indexOf(b))))}),r in He){He[r]=!0;for(var a in yt)yt[a]===r&&(Be[a]=!0);if(!n)return}for(var o in He)Object.prototype.hasOwnProperty.call(He,o)&&(He[o]=e[Bo[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(pe.indexOf(17)===-1&&pe.push(17),pe.indexOf(18)===-1&&pe.push(18),He[17]=!0,He[18]=!0);var i=ar();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&ic(e,n[s],i,t);if(r in ke){for(var c=0;c<ke[r].length;c++)if((e.type==="keydown"&&ke[r][c].keydown||e.type==="keyup"&&ke[r][c].keyup)&&ke[r][c].key){for(var u=ke[r][c],l=u.splitKey,g=u.key.split(l),f=[],m=0;m<g.length;m++)f.push(Yr(g[m]));f.sort().join("")===pe.sort().join("")&&ic(e,u,i,t)}}}}function rp(e){return dc.indexOf(e)>-1}function Be(e,t,n){pe=[];var r=gc(e),a=[],o="all",i=document,s=0,c=!1,u=!0,l="+",g=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(i=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(l=t.splitKey)),typeof t=="string"&&(o=t);s<r.length;s++)e=r[s].split(l),a=[],e.length>1&&(a=uc(yt,e)),e=e[e.length-1],e=e==="*"?"*":Yr(e),e in ke||(ke[e]=[]),ke[e].push({keyup:c,keydown:u,scope:o,mods:a,shortcut:r[s],method:n,key:r[s],splitKey:l,element:i});typeof i<"u"&&!rp(i)&&window&&(dc.push(i),Fo(i,"keydown",function(f){lc(f,i)},g),sc||(sc=!0,Fo(window,"focus",function(){pe=[]},g)),Fo(i,"keyup",function(f){lc(f,i),tp(f)},g))}function ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(ke).forEach(function(n){var r=ke[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var Uo={getPressedKeyString:Xm,setScope:mc,getScope:ar,deleteScope:ep,getPressedKeyCodes:Ym,isPressed:Zm,filter:Qm,trigger:ap,unbind:np,keyMap:rr,modifier:yt,modifierMap:Bo};for(Jr in Uo)Object.prototype.hasOwnProperty.call(Uo,Jr)&&(Be[Jr]=Uo[Jr]);var Jr;typeof document<"u"&&(cc=window.hotkeys,Be.noConflict=function(e){return e&&window.hotkeys===Be&&(window.hotkeys=cc),Be},window.hotkeys=Be);var cc;var $o=No.alert;var op=0;function d(e,t,n,r,a){var o,i,s={};for(i in t)i=="ref"?o=t[i]:s[i]=t[i];var c={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--op,__source:a,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return J.vnode&&J.vnode(c),c}function jo({value:e,defaultCase:t=null,cases:n}){return e==null?null:d(Ze,{children:n[e]!=null?n[e]:t})}function zo(){let[e,t]=Y(location.hash);return ge(()=>{let n=()=>t(location.hash);return globalThis.addEventListener("hashchange",n,!1),()=>{globalThis.removeEventListener("hashchange",n)}},[]),e}function Xe(e){$o({type:"success",text:e})}function St(e){$o({type:"error",text:e})}var pc={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u8FDB\u884C\u6362\u884C\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",isShowContextMenu:"\u521B\u5EFA\u53F3\u952E\u83DC\u5355"};var hc={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var bc={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var sp=[{code:"zh-CN",messages:pc},{code:"zh-TW",messages:hc},{code:"en",messages:bc}],zt={};for(let e of sp)zt[e.code]=e.messages;var Wt="Immersive Translate",ye="immersive-translate";var me="immersiveTranslate",nx=me+"IframeMessage",Wo=`${me}Container`,qt=`${me}SpecifiedContainer`,Qr="buildinConfig",yn="localConfig",yc="openOptionsPage",xc="translateLocalPdfFile",Tc=`${me}PageTranslatedStatus`,vc=`${me}PageUrlChanged`,rx=`${me}ReceiveCommand`,ax=`${me}PopupReceiveMessage`,wc="immersive-translate.owenyoung.com",ox=`https://${wc}/`,qo=`https://${wc}/buildin_config.json`,Vt=`${me}Mark`,Vo="immersiveTranslateEffect",Re=`${me}Root`,Ko=`data-${ye}-effect`,Kt=`${me}TranslatedMark`,Gt=`${me}ParagraphId`,nt=`${me}AtomicBlockMark`,rt=`${me}ExcludeMark`,Zr=`${me}StayOriginalMark`,xn=`${me}PreWhitespaceMark`,Et=`${me}InlineMark`,Jt=`${me}BlockMark`,or=`${me}Left`,ea=`${me}Right`,sx=`${me}Width`,ix=`${me}Height`,Sc=`${me}Top`,Ec=`${me}FontSize`;var Go=`${me}GlobalStyleMark`,Cc=["@","#"],ta=" --- ",Jo=`
`,at=`${ye}-target-wrapper`,na=`${ye}-pdf-target-container`,Lc=`${ye}-target-inner`,lx=`${ye}-source-wrapper`,Yo=`${ye}-target-translation-block-wrapper`,Ac=`${ye}-target-translation-pdf-block-wrapper`,kc=`${ye}-target-translation-pre-whitespace`,Xo=`${ye}-target-translation-inline-wrapper`,_c=["none","dashed","underline","dashedBorder","mask","dotted","dividingLine","highlight","marker","blockquote","weakening","paper","italic","bold","thinDashed"],Tn=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],Qo={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var Mc=["toggleTranslatePage","toggleTranslateTheWholePage","toggleTranslateToThePageEndImmediately","toggleTranslateTheMainPage"],Pc=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"],Rc="Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.",Ic="\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",ra="zh-CN";var Zo=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),a=Qe.green;r>1e4?a=Qe.red:r>1e3&&(a=Qe.yellow),console.debug(Qe.dim(Wt+" TIMING:"),t,"in",a(r+"ms")),this.#e=n}},sr=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Qe.dim(Wt+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(Qe.green(Wt+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Qe.yellow(Wt+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Qe.red(Wt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Qe.red(Wt+" FATAL:"),...t)}timing(){return this.level===0?new Zo:{reset:()=>{},stop:()=>{}}}},V=new sr;var es=/iPhone/i,Nc=/iPod/i,Dc=/iPad/i,Oc=/\biOS-universal(?:.+)Mac\b/i,ts=/\bAndroid(?:.+)Mobile\b/i,Fc=/Android/i,vn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,aa=/Silk/i,Ct=/Windows Phone/i,Hc=/\bWindows(?:.+)ARM\b/i,Uc=/BlackBerry/i,Bc=/BB10/i,$c=/Opera Mini/i,jc=/\b(CriOS|Chrome)(?:.+)Mobile/i,zc=/Mobile(?:.+)Firefox\b/i,Wc=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function ip(e){return t=>t.test(e)}function oa(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let a=ip(n),o={apple:{phone:a(es)&&!a(Ct),ipod:a(Nc),tablet:!a(es)&&(a(Dc)||Wc(t))&&!a(Ct),universal:a(Oc),device:(a(es)||a(Nc)||a(Dc)||a(Oc)||Wc(t))&&!a(Ct)},amazon:{phone:a(vn),tablet:!a(vn)&&a(aa),device:a(vn)||a(aa)},android:{phone:!a(Ct)&&a(vn)||!a(Ct)&&a(ts),tablet:!a(Ct)&&!a(vn)&&!a(ts)&&(a(aa)||a(Fc)),device:!a(Ct)&&(a(vn)||a(aa)||a(ts)||a(Fc))||a(/\bokhttp\b/i)},windows:{phone:a(Ct),tablet:a(Hc),device:a(Ct)||a(Hc)},other:{blackberry:a(Uc),blackberry10:a(Bc),opera:a($c),firefox:a(zc),chrome:a(jc),device:a(Uc)||a(Bc)||a($c)||a(zc)||a(jc)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var ns="DENO",sa="CHROME",ia="FIREFOX";function qc(e){let t=sa;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=ia:/deno/i.test(n)&&(t=ns)}catch{}return e===sa&&t===sa||e===ia&&t===ia||e===ns&&t===ns}function Vc(){return qc(sa)}function Kc(){return typeof Deno<"u"}function rs(){return qc(ia)}function Gc(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var Jc={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Yc={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Jc,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Jc,query:()=>{},sendMessage:()=>{}}};var Q;Kc()?Q=Yc:Q=globalThis.immersiveTranslateBrowserAPI;var as={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return Q.storage[n].get(r)},set:(e,t,n)=>Q.storage[n].set({[e]:t})};function la(e,t,n){let[r]=Y(()=>typeof t=="function"?t():t),[a]=Y(n),[o,i]=Y(r),[s,c]=Y(!0),[u,l]=Y("");ge(()=>{as.get(e,r,a).then(f=>{f[e]&&i(f[e]),c(!0),l("")}).catch(f=>{c(!1),l(f)})},[e,r,a]);let g=Jn(f=>{let m=typeof f=="function"?f(o):f;V.debug("new settings",m),as.set(e,m,a).then(()=>{i(m),c(!0),l("")}).catch(p=>{i(m),c(!1),l(p)})},[a,e,o]);return[o,g,s,u]}function ca(e,t,n){let r=[];return function(){let[o,i,s,c]=la(e,t,n),u=Jn(l=>{for(let g of r)g(l)},[]);return ge(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[o,u,s,c]}}function Xc(e,t){return ca(e,t,"local")}function Qc(e,t){return ca(e,t,"sync")}var lp="userConfig",cp={},ot=Qc(lp,cp);function Rt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=Tn.map(a=>a.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":Tn[a]}else return"auto";else return Tn[r]}function ir(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():T}var re=ir();function xe(){return re.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Zc(){return typeof Deno<"u"}var os={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]}]};function ss(e){return Array.isArray(e)?e:e?[e]:[]}function wn(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function xt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function ua(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let a={...e};return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))a[i]=s;else if(i.startsWith("additional")){let c=ss(s);a[i]=Array.from(new Set([...a[i],...c]))}else a[i]=ss(s)}),a}function Yt(){if(re.PROD==="1")return{};let e={};if(re.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&re.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:re.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:re.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(re.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&re.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:re.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:re.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(re.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:re.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(re.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:re.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(re.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&re.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:re.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:re.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(re.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&re.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:re.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:re.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(re.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:re.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return re.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=re.IMMERSIVE_TRANSLATE_SERVICE),re.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),re.MOCK==="1"&&(e.translationService="mock"),e}async function lr(){let e=await Q.storage.local.get(yn);if(e[yn]){let t=e[yn],n=t.tempTranslationUrlMatches||[],r=n.filter(i=>i.expiredAt>Date.now()),a=!1;r.length!==n.length&&(n=r,a=!0);let o={...t,tempTranslationUrlMatches:[...n]};return a&&await cr(o),o}else return{}}async function cr(e){await Q.storage.local.set({[yn]:e})}async function Sn(){await Q.storage.local.set({[yn]:{}})}async function Ce(){let e=await Q.storage.local.get(Qr),t={...os,buildinConfigUpdatedAt:re.BUILD_TIME};if(e[Qr]){let p=e[Qr],b=new Date(p.buildinConfigUpdatedAt),x=new Date(t.buildinConfigUpdatedAt);b>x&&(t=p)}let n={};if(!xe()&&Q.commands&&Q.commands.getAll){let p=await Q.commands.getAll();for(let b of p)b.name&&b.shortcut&&(n[b.name]=b.shortcut)}let r=is(),a=Yt(),i=(await Q.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},c=await lr(),u=new Date;if(c&&c.tempTranslationUrlMatches&&c.tempTranslationUrlMatches.length>0){let p=c.tempTranslationUrlMatches.filter(b=>new Date(b.expiredAt)>u);if(p.length>0){let b=i.translationUrlPattern?i.translationUrlPattern?.matches||[]:[],x=Array.isArray(b)?b:[b],h=Array.from(new Set(x.concat(p.map(y=>y.match))));i.translationUrlPattern={...i.translationUrlPattern,matches:h}}}let l=Object.assign({},s,a,i);if(!l.interfaceLanguage){let p=await up();l.interfaceLanguage=p}let g=Object.assign(r,t),f=Object.keys(g),m=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let p of f){let b=p;if(b==="generalRule")typeof l[b]=="object"&&(g[b]=ua(r[b],l[b]));else if(b==="translationServices"){let x=l[b]||{},h=t[b]||{},y=Object.keys(h),S=Object.keys(x),A=[...new Set([...y,...S])],D={};for(let v of A)D[v]={...h[v],...x[v]};g[b]=D}else if(typeof l[b]!="string"&&typeof l[b]!="boolean"&&typeof l[b]!="number"&&m.includes(b))l[b]&&(g[b]=Object.assign(g[b],l[b])),b==="shortcuts"&&(g[b]={...g[b],...n});else if(b==="rules"){if(Array.isArray(l[b])&&(g[b]=[...l[b],...g[b]]),re.PROD==="0"&&re.DEV_RULES){let x=JSON.parse(re.DEV_RULES);g[b]=[...x,...g[b]]}}else l[b]!==void 0&&(g[b]=l[b])}return g.donateUrl=t.donateUrl,g.minVersion=t.minVersion,g.feedbackUrl=t.feedbackUrl,g}var up=async()=>{let n=(await Q.i18n.getAcceptLanguages()).map(r=>Rt(r)).find(r=>zt[r]);return n||"en"},is=()=>{let e={...os,buildinConfigUpdatedAt:re.BUILD_TIME};return{...e,targetLanguage:ra,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};async function cs(e){if(Math.abs(e)<1024)return e+" B";let n=["KB","MB","GB","TB","PB","EB","ZB","YB"],r=-1;do e/=1024,++r;while(Math.abs(e)>=1024&&r<n.length-1);return e.toFixed(1)+" "+n[r]}function eu(e,t,n){let r=gp(e,t),a=[],o={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(o.tempSentences.reduce((c,u)=>c+u.text.length,0)+i.text.length>t||o.tempSentences.length>=n)&&(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(o.from!==i.from||o.to!==i.to)&&(o.tempSentences.length>0?(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(o.from=i.from,o.to=i.to)),o.tempSentences.push(i);return o.tempSentences.length>0&&a.push(o),a}function gp(e,t){let n=[];for(let r=0;r<e.length;r++){let a=e[r],{from:o,to:i,text:s,url:c}=a,u=s.split(/\r?\n/),l=[],g="";for(let f=0;f<u.length;f++){let m=u[f];if(m===""){l.length>0?f<u.length-1&&(l[l.length-1].suffix+=`
`):g+=`
`;continue}else if(m.length>t){let p=[];ls(m,t,p);for(let b=0;b<p.length;b++){let x=p[b],{text:h,prefix:y,suffix:S}=x;l.push({from:o,to:i,text:h,prefix:y,suffix:S,index:r,url:c})}}else l.push({text:m,prefix:g,suffix:"",from:o,to:i,index:r,url:c});l.length>0&&f<u.length-1&&(l[l.length-1].suffix+=`
`)}n.push(...l)}return n}function ur(e,t){let n=Rt(e),r=Rt(t),a=n===r;return a?!0:(a=n.startsWith("zh")&&r.startsWith("zh"),a)}function ls(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((o,i)=>{let s=e.lastIndexOf(i,t);return s>o?s:o},-1);if(a===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&ls(e.slice(t),t,n);else{let o=e.slice(0,a+1);o.startsWith(" ")?n.push({text:o.slice(1),prefix:" ",suffix:""}):n.push({text:o,prefix:"",suffix:""}),a+1<e.length&&ls(e.slice(a+1),t,n)}return n}var $e=class extends Error{constructor(n,r,a){super(r);this.name=n,a&&(this.details=a)}};async function En(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let o=await(e.fetchPolyfill||fetch)(t,r);if(o.ok&&o.status>=200&&o.status<400){if(n==="json")return await o.json();if(n==="text")return await o.text();if(n==="raw"){let i=await o.text(),s=Object.fromEntries([...o.headers.entries()]),c=o.url;return c||(o.headers.get("X-Final-URL")?c=o.headers.get("X-Final-URL"):c=t),{body:i,headers:s,status:o.status,statusText:o.statusText,url:c}}}else{let i;try{i=await o.text()}catch(s){V.error("parse response failed",s)}throw new $e("fetchError",o.status+": "+o.statusText||"",i)}}function It(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function fp(e,t){return e<<t|e>>>32-t}function fa(e,t,n,r,a,o){return It(fp(It(It(t,e),It(r,o)),a),n)}function je(e,t,n,r,a,o,i){return fa(t&n|~t&r,e,t,a,o,i)}function ze(e,t,n,r,a,o,i){return fa(t&r|n&~r,e,t,a,o,i)}function We(e,t,n,r,a,o,i){return fa(t^n^r,e,t,a,o,i)}function qe(e,t,n,r,a,o,i){return fa(n^(t|~r),e,t,a,o,i)}function ga(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,a,o,i,s=1732584193,c=-271733879,u=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)r=s,a=c,o=u,i=l,s=je(s,c,u,l,e[n],7,-680876936),l=je(l,s,c,u,e[n+1],12,-389564586),u=je(u,l,s,c,e[n+2],17,606105819),c=je(c,u,l,s,e[n+3],22,-1044525330),s=je(s,c,u,l,e[n+4],7,-176418897),l=je(l,s,c,u,e[n+5],12,1200080426),u=je(u,l,s,c,e[n+6],17,-1473231341),c=je(c,u,l,s,e[n+7],22,-45705983),s=je(s,c,u,l,e[n+8],7,1770035416),l=je(l,s,c,u,e[n+9],12,-1958414417),u=je(u,l,s,c,e[n+10],17,-42063),c=je(c,u,l,s,e[n+11],22,-1990404162),s=je(s,c,u,l,e[n+12],7,1804603682),l=je(l,s,c,u,e[n+13],12,-40341101),u=je(u,l,s,c,e[n+14],17,-1502002290),c=je(c,u,l,s,e[n+15],22,1236535329),s=ze(s,c,u,l,e[n+1],5,-165796510),l=ze(l,s,c,u,e[n+6],9,-1069501632),u=ze(u,l,s,c,e[n+11],14,643717713),c=ze(c,u,l,s,e[n],20,-373897302),s=ze(s,c,u,l,e[n+5],5,-701558691),l=ze(l,s,c,u,e[n+10],9,38016083),u=ze(u,l,s,c,e[n+15],14,-660478335),c=ze(c,u,l,s,e[n+4],20,-405537848),s=ze(s,c,u,l,e[n+9],5,568446438),l=ze(l,s,c,u,e[n+14],9,-1019803690),u=ze(u,l,s,c,e[n+3],14,-187363961),c=ze(c,u,l,s,e[n+8],20,1163531501),s=ze(s,c,u,l,e[n+13],5,-1444681467),l=ze(l,s,c,u,e[n+2],9,-51403784),u=ze(u,l,s,c,e[n+7],14,1735328473),c=ze(c,u,l,s,e[n+12],20,-1926607734),s=We(s,c,u,l,e[n+5],4,-378558),l=We(l,s,c,u,e[n+8],11,-2022574463),u=We(u,l,s,c,e[n+11],16,1839030562),c=We(c,u,l,s,e[n+14],23,-35309556),s=We(s,c,u,l,e[n+1],4,-1530992060),l=We(l,s,c,u,e[n+4],11,1272893353),u=We(u,l,s,c,e[n+7],16,-155497632),c=We(c,u,l,s,e[n+10],23,-1094730640),s=We(s,c,u,l,e[n+13],4,681279174),l=We(l,s,c,u,e[n],11,-358537222),u=We(u,l,s,c,e[n+3],16,-722521979),c=We(c,u,l,s,e[n+6],23,76029189),s=We(s,c,u,l,e[n+9],4,-640364487),l=We(l,s,c,u,e[n+12],11,-421815835),u=We(u,l,s,c,e[n+15],16,530742520),c=We(c,u,l,s,e[n+2],23,-995338651),s=qe(s,c,u,l,e[n],6,-198630844),l=qe(l,s,c,u,e[n+7],10,1126891415),u=qe(u,l,s,c,e[n+14],15,-1416354905),c=qe(c,u,l,s,e[n+5],21,-57434055),s=qe(s,c,u,l,e[n+12],6,1700485571),l=qe(l,s,c,u,e[n+3],10,-1894986606),u=qe(u,l,s,c,e[n+10],15,-1051523),c=qe(c,u,l,s,e[n+1],21,-2054922799),s=qe(s,c,u,l,e[n+8],6,1873313359),l=qe(l,s,c,u,e[n+15],10,-30611744),u=qe(u,l,s,c,e[n+6],15,-1560198380),c=qe(c,u,l,s,e[n+13],21,1309151649),s=qe(s,c,u,l,e[n+4],6,-145523070),l=qe(l,s,c,u,e[n+11],10,-1120210379),u=qe(u,l,s,c,e[n+2],15,718787259),c=qe(c,u,l,s,e[n+9],21,-343485551),s=It(s,r),c=It(c,a),u=It(u,o),l=It(l,i);return[s,c,u,l]}function tu(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function us(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function dp(e){return tu(ga(us(e),e.length*8))}function mp(e,t){var n,r=us(e),a=[],o=[],i;for(a[15]=o[15]=void 0,r.length>16&&(r=ga(r,e.length*8)),n=0;n<16;n+=1)a[n]=r[n]^909522486,o[n]=r[n]^1549556828;return i=ga(a.concat(us(t)),512+t.length*8),tu(ga(o.concat(i),512+128))}function nu(e){var t="0123456789abcdef",n="",r,a;for(a=0;a<e.length;a+=1)r=e.charCodeAt(a),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function gs(e){return unescape(encodeURIComponent(e))}function ru(e){return dp(gs(e))}function pp(e){return nu(ru(e))}function au(e,t){return mp(gs(e),gs(t))}function hp(e,t){return nu(au(e,t))}function Cn(e,t,n){return t?n?au(t,e):hp(t,e):n?ru(e):pp(e)}var Ln=[];async function gr(e,t){return await new Promise((n,r)=>{let a=e,o=1,i=indexedDB.open(a,o);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let c=i.result,u=t||"cache";c.createObjectStore(u,{keyPath:"key"})}})}async function fs(e){let t=`${ye}-${e.service}@${e.from}->${e.to}`;return await yp(t,e)}async function ds(e){let t=Cn(e.originalText),n=`${ye}-${e.service}@${e.from}->${e.to}`;return await bp(n,t)}async function bp(e,t){let n=await gr(e);return await new Promise((r,a)=>{if(!n)return a();let o="cache",s=n.transaction([o],"readonly").objectStore(o).get(t);s.onsuccess=c=>{n.close();let u=s.result;r(u)},s.onerror=c=>{n.close(),console.error("queryInDB->onerror:",c),a()}})}async function yp(e,t){let n=await gr(e);return(await ms()).includes(e)||await xp(e),await new Promise(a=>{if(!n)return a(!1);let o="cache",s=n.transaction([o],"readwrite").objectStore(o).put(t);s.onsuccess=c=>{n.close(),a(!0)},s.onerror=c=>{console.error("addInDB->onerror:",c),n.close(),a(!1)}})}async function xp(e){let t="cache_list",n=await gr(ye+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=o=>{n.close(),Ln.push(e)},a.onerror=o=>{n.close(),console.error(o)}}async function ms(){if(Ln&&Ln.length>0)return Ln;let e=await gr(ye+"-cacheList","cache_list");return Ln=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=o=>{e.close(),t(a.result)},a.onerror=o=>{e.close(),console.error(o),t([])}}),Ln}async function ps(){try{let e=[];(await ms()).forEach(r=>{e.push(Tp(r))});let n=await Promise.all(e);return cs(n.reduce((r,a)=>r+a,0))}catch(e){return console.error(e),cs(0)}}async function Tp(e){let t=await gr(e),r=[...t.objectStoreNames].reduce((i,s)=>{let c=vp(t,s);return i.push(c),i},[]),a=await Promise.all(r);return t.close(),a.reduce((i,s)=>i+s,0)}async function vp(e,t){return await new Promise((n,r)=>{if(e==null)return r();let a=0,o=e.transaction([t]).objectStore(t).openCursor();o.onsuccess=i=>{let s=o.result;if(s){let c=s.value;a+=JSON.stringify(c).length,s.continue()}else n(a)},o.onerror=i=>r("error in "+t+": "+i)})}async function ou(){try{let t=(await ms()).map(r=>wp(r));return!!(await Promise.all(t)).every(r=>r)}catch(e){return console.error("deleteAll error",e),!1}}async function wp(e){return await new Promise(t=>{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>{t(!0)},n.onerror=r=>{t(!1)}})}var Sp=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Ep=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Cp=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,Lp=/(\s+)|([\p{P}\p{S}])/gu,Ap=[["zh-CN",Sp],["ja",Ep],["ko",Cp]];function su(e){if(!e)return"auto";let t="auto",n=0,r=0,a=e.match(Lp);a&&(r=a.reduce((i,s)=>i+s.length,0));let o=e.length-r;for(let i of Ap){let s=i[1],c=i[0],u=e.match(s),l=u?u.length:0;l>n&&(n=l,t=c)}return n*2.5/o>.5?t:"auto"}function fr(){try{return globalThis.self!==globalThis.top}catch{return!0}}var kp=ir(),dr=kp.PROD==="1";function iu(e,t,n){let r=e.querySelectorAll("footer"),a=e.querySelectorAll("aside"),o=Array.from(r).concat(Array.from(a)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),c=[];for(let l of i)s.length>0&&s[0].contains(l)||c.push(l);for(let l=0;l<t.length;l++){let g=t[l].element;for(let f=l+1;f<t.length;f++){let m=t[f].element;if(g.contains(m))t.splice(f,1),f--;else if(m.contains(g)){t.splice(l,1),l--;break}else g===m&&(t.splice(f,1),f--)}}return t.filter(l=>{let g=l.element;if(l.reserve)return!0;let f=!1,m=!1;for(let p of o)if(g===p||p.contains(g)){f=!0;break}if(f)return!1;for(let p of c){if(g.nodeName==="H1")continue;let b=p.querySelector("h1");if(!(b&&gu(b.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(g===p||p.contains(g))){m=!0;break}}return!m}).map(l=>l.element)}function An(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function da(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function hs(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function mr(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function st(e,t){let n=[];for(let r of t){let a=e.querySelectorAll(r);for(let o of a)n.push(o)}return n}function _p(e,t){let n=function(o){return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE?o.nodeType===Node.ELEMENT_NODE&&Je(o,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;r.nextNode();){let o=r.currentNode;if(o.nodeType===Node.ELEMENT_NODE){if(se(o,Et)){if(a===!0)return!0;continue}if(!t.inlineTags.includes(o.nodeName))return!1}}return!0}function ut(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?se(e,Jt)||e.nodeName==="BR"?!1:se(e,Et)?!0:_p(e,t):se(e,Et):!1}function lu(e,t){for(let n of t)if(n===e)return!0;return!1}function cu(e,t){return!!t.metaTags.includes(e.nodeName)}function Je(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:a}=t,o=[];return n&&a&&a.length>0?o=a||[]:o=a.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&se(e,rt)?!0:e.nodeType===Node.ELEMENT_NODE&&se(e,qt)?!1:!!o.includes(e.nodeName)}function uu(e,t,n,r){let a=hr(r),o=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||xs(s)||bs(s)||ys(s)||o.test(s)?!1:gu(i,t,n)}function gu(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function bs(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function ys(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function xs(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function fu(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function se(e,t){return Mp(e,t,"1")}function Mp(e,t,n){return dr?e[Re]?!!(e[Re]&&e[Re][t]===n):!1:e.dataset[t]===n}function du(e,t){return dr?e[Re]?!!(e[Re]&&e[Re][t]):!1:e.dataset[t]!==void 0}function pr(e){return(e.innerText||e.textContent||"").trim()}function ma(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ce(e,t,n){e.isContentEditable||(e.dataset[Vo]||(e.dataset[Vo]="1"),dr?(e[Re]||(e[Re]={}),e[Re][t]||(e[Re][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function mu(e,t){if(dr){if(!e[Re]||!e[Re][t])return;delete e[Re][t]}else delete e.dataset[t]}function Nt(e,t){return dr?!e[Re]||!e[Re][t]?void 0:e[Re][t]:e.dataset[t]}function kn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||se(e,Zr))&&(n=!0),n}function pu(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function hr(e){let{config:t}=e,n=Cc;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function pa(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function hu(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function Tt(){if(!fr())return globalThis.location.href;try{let t=globalThis.location.href;if(new URL(t).protocol==="about:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let r="";try{r=globalThis.parent.location.href}catch{}return r||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function Ts(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:a,additionalInlineSelectors:o,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:c,globalStyles:u,stayOriginalTags:l,stayOriginalSelectors:g,globalAttributes:f}=t,m=Object.keys(u);if(m.length>0)for(let w of m){let R=st(document.body,[w]);for(let U of R)if(!se(U,Go)){ce(U,Go,"1");let P=u[w];U.style.cssText+=P}}let p=Object.keys(f);if(p.length>0)for(let w of p){let R=f[w],U=Object.keys(R),P=st(document.body,[w]);for(let _ of P)for(let H of U){let B=R[H];_.getAttribute(H)!==B&&(B===null?_.removeAttribute(H):_.setAttribute(H,B))}}let b=[...n,...r],x=[...a,...o],h=[...s],y=c.map(w=>w.toLowerCase()),S=i;st(document.body,b).forEach(w=>{se(w,rt)||ce(w,rt,"1")});let D=[];if(h.length>0&&(D=st(document.body,h).filter(w=>!se(w,nt))),y.length>0){let w=l.reduce((P,_)=>{let H=_.toLowerCase();return P.push(`<${H}>`,`</${H}>`,`<${H} />`),P},[]),R=[">http://",">https://"];w.push(...R);let U=st(document.body,y).filter(P=>{if(se(P,nt))return!1;{let H=P.innerHTML;return!w.some(j=>H.includes(j))}});D.push(...U)}D.forEach(w=>{se(w,nt)||ce(w,nt,"1")});let v=[];if(x.length>0)for(let w of e)v.push(...st(w,x));v.forEach(w=>{ce(w,Et,"1")});let L=[];if(S.length>0)for(let w of e)L.push(...st(w,S));L.forEach(w=>{ce(w,Jt,"1")});let O=[];if(g.length>0)for(let w of e)O.push(...st(w,g));O.forEach(w=>{ce(w,Zr,"1")})}function bu(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function yu(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await it({text:pr(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Rt(document.documentElement.lang)),e}function vs(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,a=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let c=e.matches(s),u=[];c?u=[e]:u=e.querySelectorAll(s);for(let l of u)se(l,qt)||ce(l,qt,"1");return Array.from(u)}).flat();a.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let g=st(e,n.additionalSelectors);for(let f of g)se(f,qt)||ce(f,qt,"1");a.push(...g.map(f=>({element:f,reserve:!0})))}let i=st(e,["article"]);a.push(...i.map(g=>({element:g,reserve:!0})));let s;if(a.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let g=Array.from(s);a=a.concat(g.map(f=>({element:f,reserve:!0})))}let c=[],u=g=>{if(g.nodeType===Node.ELEMENT_NODE&&Je(g,t.rule,!1))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE&&(g.textContent?g.textContent.trim():"").length>=n.containerMinTextCount){let m=g.parentNode;m&&m.parentNode&&(m=m.parentNode),m&&m.nodeType===Node.ELEMENT_NODE&&(c.includes(m)||c.push(m))}return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;l.nextNode(););a.push(...c.map(g=>({element:g,reserve:!1})))}let o=iu(e,a,n);return o.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),o}var ws=[];function xu(e){ws.push(e)}function Ss(){ws.forEach(e=>e()),ws=[]}var vu="auto",ha="auto",Tu="auto";function wu(e){vu=e}function _n(e){ha=e}function br(){return ha!=="auto"?ha:Tu!=="auto"?Tu:vu}function ba(){return ha}function gt(e,t,n){let r=[],{rule:a}=n,o=hr(n);if(e.length===0)return null;e=e.map(f=>f.element?f:{element:f});let i="",s=!1;for(let f=0;f<e.length;f++){let p=e[f].element;if(typeof p=="string"){i+=p;continue}let b="";pa(p,`[${rt}]`)?b=Pp(p):b=p.innerText;let x=b.startsWith(" "),h=b.endsWith(" ");p.tagName==="A"&&(x=!0,h=!0);let y=kn(p,a);if(b===""||y){y&&(x=!0,h=!0);let S={type:"element",value:p};r.push(S);let A=r.length-1,D=`${o[0]}${A}${o[1]}`;i+=(x?" ":"")+D+(h?" ":"");continue}if(!Je(p,a,!0)){{let S=t?b:b.trim().replace(/\n/g," ");if(bs(S)||ys(S)||xs(S)||fu(S)){let A={type:"element",value:p};r.push(A);let D=r.length-1,v=`${o[0]}${D}${o[1]}`;i+=(x?" ":"")+v+(h?" ":"")}else s=!0,i+=(x?" ":"")+S+(h?" ":"")}if(typeof p!="string"){let S=mr(p.nextSibling,t);S&&(i+=S)}}}if(!s)return null;let c=!1,u=i.split(" ").length,l=i.split(`
`).length;u<=a.blockMinWordCount&&i.length<=a.blockMinTextCount&&l<2&&(c=!0);let g={elements:e.map(f=>f.element),text:i,variables:r,inline:c,preWhitespace:t};return uu(g,n.state.translationArea==="body"?2:a.paragraphMinTextCount,n.state.translationArea==="body"?1:a.paragraphMinWordCount,n)?g:null}function Pp(e){let t="",n=a=>a.nodeType===Node.ELEMENT_NODE?se(a,rt)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(t+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var Rp=1,Xt=new Map;function Cu(){return Xt}function Qt(e){return Xt.get(e)}function yr(e,t){Xt.set(e,t)}function Lu(){Xt.clear()}function Su(e){if(!se(e,Vt))return!1;if(se(e,Kt))return!0;let t=Nt(e,Gt);if(!t)return!1;let n=parseInt(t),r=Xt.has(n);if(!r){let a=document.getElementById(`${at}-${n}`);a&&a.remove()}return r}function Lt(e,t){let n={...e,id:Rp++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(ce(r,Vt,"1"),ce(r,Gt,`${n.id}`))}),t.push(n),Xt.set(n.id,{...n,state:"Original",observers:[]})}async function Au(e,t,n){let r=[],{targetLanguage:a,rule:o}=n;for(let f of t){if(Je(f,o,!1))continue;let m=se(f,xn),p=[];if(se(f,nt)){if(!Su(f)){let y=gt([f],!0,n);y&&Lt(y,r)}continue}let b=y=>{if(!(y.nodeType===Node.TEXT_NODE||y.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(y.nodeType===Node.ELEMENT_NODE){let S=y;if(S.isContentEditable||Su(y))return NodeFilter.FILTER_REJECT;if(ce(S,Vt,"1"),se(S,nt)){if(p.length>0){let D=gt([...p],m,n);D&&Lt(D,r),p.length=0}p.push(S);let A=gt([...p],m,n);return A&&Lt(A,r),p.length=0,NodeFilter.FILTER_REJECT}}if(Je(y,o,!0)){if((y.nodeName==="CODE"||y.nodeName==="TT")&&y.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(ut(y,o))return Eu(y,p,r,m,n),NodeFilter.FILTER_REJECT;if(p.length>0){let S=gt([...p],m,n);S&&Lt(S,r),p.length=0}return NodeFilter.FILTER_REJECT}return y.nodeName==="PRE"?(y.classList.contains("code"),NodeFilter.FILTER_REJECT):ut(y,o)?(Eu(y,p,r,m,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},x=document.createTreeWalker(f,NodeFilter.SHOW_ELEMENT,b),h=x.nextNode();for(;h;){if(p.length>0){let y=gt([...p],m,n);y&&Lt(y,r),p.length=0}h=x.nextNode()}if(p.length>0){let y=gt([...p],m,n);y&&Lt(y,r),p.length=0}}let i=r.map(f=>{let{text:m}=f;return it({text:m})}),s=await Promise.all(i),c=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],l="auto";n.state.isDetectParagraphLanguage||(l=ba());let g=br();return s.forEach((f,m)=>{let p=f;p==="auto"&&(p=g);let b={...r[m],languageByLocal:p,languageByClient:l};if(Xt.set(b.id,{...b,state:"Original",observers:[]}),!ur(f,a)){if(u.length>0&&u.some(y=>ur(f,y)))return;c.push(b)}}),c}function Ip(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,o=!1;for(;a=r.nextNode();){let s=a.textContent||"",c=s.trim();if(!o&&s.length>0&&c.length===0){o=!0,n.push(" ");continue}c.length>0&&(n.push(a.parentElement),o=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=mr(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=mr(e.nextSibling,t);s&&n.push(s)}return n}function Eu(e,t,n,r,a){let o=e.previousElementSibling;if(o&&!ut(o,a.rule)&&t.length>0){let s=gt([...t],r,a);s&&Lt(s,n),t.length=0}Je(e,a.rule,!1)?cu(e,a.rule)||t.push(e):kn(e,a.rule)?t.push(e):pa(e,["code","tt"])?t.push(...Ip(e,r)):t.push(e)}async function Pu(e,t,n,r){let a=[],{rule:o}=n;for(let i=0;i<t.length;i++){let s=t[i],c=r[i];if(!c)throw new Error("targetContainer is null");let u=[],l=!0,g=null,f=function(b){let x=b;if(["DIV","BR"].includes(x.nodeName))return l=!0,NodeFilter.FILTER_REJECT;if(x.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(Dp(b))return NodeFilter.FILTER_REJECT;if(ce(x,Vt,"1"),ut(x,o)){let h=An(u),y=globalThis.getComputedStyle(x);if(!h)u.push(Mu(x,y));else{let S=globalThis.getComputedStyle(h),A=Es(S),D=Es(y),v=_u(D,A),L=!1;if(l&&g&&_u(D,g).left>=1.2&&(L=!0),!L&&l){let w=(x.innerText||x.textContent||"").trim();(w.startsWith("\u2022")||w.charCodeAt(0)===61623||/^\d+\./.test(w))&&(L=!0)}!L&&l&&An(u)&&da(u).reduce((U,P)=>{let _=Es(globalThis.getComputedStyle(P));return Math.max(U,_.right)},0)-A.right>o.pdfNewParagraphIndentRightIndentPx&&(L=!0),l&&(g=D,l=!1),L||(L=Np(v,o)),L&&ku(u,a,n,c),u.push(Mu(x,y)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},m=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,f),p=m.nextNode();for(;p;)p=m.nextNode();ku(u,a,n,c)}return a}function ku(e,t,n,r){if(e.length>0){let a=gt([...e],!1,n);a&&(a.isPdf=!0,a.targetContainer=r,a.inline=!1,Lt(a,t)),e.length=0}}function Es(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function Np(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<0}function _u(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Mu(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function Dp(e){if(!se(e,Vt))return!1;if(se(e,Kt))return!0;let t=Nt(e,Gt);if(!t)return!1;let n=parseInt(t),a=Cu().has(n);if(!a){let o=document.getElementById(`${at}-${n}`);o&&o.remove()}return a}function Ru(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Cs(e,t,n=[],r,a){let o=["notranslate"];return r&&o.push(kc),e&&(o.push(`${ye}-target-translation-theme-${e}`),t?o.push(`${Xo}-theme-${e}`):o.push(`${Yo}-theme-${e}`)),n.length>0&&o.push(...n),t?o.push(Xo):(o.push(Yo),a&&o.push(Ac)),o}function Ls(e){let t=["notranslate",Lc];return e&&t.push(`${ye}-target-translation-theme-${e}-inner`),t}function Iu(e,t,n){let{rule:r,translationTheme:a}=n,{variables:o}=e;o=o||[];let{text:i}=t,{wrapperPrefix:s,wrapperSuffix:c}=r,u=hr(n),l="afterend",g=new RegExp(`${u[0]}(\\d+)${u[1]}`,"g"),f=0,m=Ru(i);o.length>0&&(m=m.replace(g,h=>{let y=m.indexOf(h),S=m[y-1]===" ",A=m[y+h.length]===" ",D=o[Number(f)];if(f++,D.type==="element"){let v=D.value.outerHTML;return S||(v=" "+v),A||(v=v+" "),v}else V.error("variable type not supported",D);return h}));let p=Cs(a,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf),b=Ls(a),x="";return r.translationBlockStyle&&(x=`style="${r.translationBlockStyle}"`),m=`<span ${x} class="${p.join(" ")}"><span class="${b.join(" ")}">${m}</span></span>`,e.inline||(s==="smart"?m=`<br>${m}`:m=`${s}${m}`,c==="smart"?m=`${m}`:m=`${m}${c}`),e.inline&&(m=`<span class="notranslate">&nbsp;</span>${m}`),{html:m,position:l}}function Du(e,t){let n=[];for(let r of e){if(se(r,nt))continue;if(ce(r,Wo,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let o=s=>s.nodeType===Node.ELEMENT_NODE&&Je(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&ks(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,o);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let o=r.querySelectorAll("pre");for(let i of o)Nu(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(du(r,xn)||(Op(r)?(ce(r,xn,"1"),t.isTransformPreTagNewLine&&Nu(r)):ce(r,xn,"0"))),As(0,r,t,n)}return{hiddenElements:n}}function As(e,t,n,r=[]){if(se(t,nt))return;let a=!1;if(e===0){let o=kn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&ut(t,n)&&!o&&(a=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let o of t.childNodes)if(o.nodeType===Node.ELEMENT_NODE){if(Je(o,n,!1))continue;{let i=globalThis.getComputedStyle(o),s=!1;if(i.display==="none"&&(r.push(o),s=!0),!s){let c=i.clip,u=i.zIndex,l=i.height,g=i.width,f=0;if(u.startsWith("-")){let m=parseInt(u);isNaN(m)||(f=m)}if((c==="rect(1px, 1px, 1px, 1px)"||f<0)&&(s=!0),!s&&o.nodeName!=="BR"){let m=parseInt(l),p=parseInt(g);!isNaN(m)&&!isNaN(p)&&(m>0&&m<8||p>0&&p<=8)&&(s=!0)}}if(s){ce(o,rt,"1");continue}else{if(o.nodeName==="DIV"||pu(o,n)){if((i.display==="inline"||i.display==="inline-flex")&&!se(o,Jt)){ce(o,Et,"1");continue}}else if((o.nodeName==="SPAN"||o.nodeName==="A")&&!i.display.startsWith("inline")){se(o,Et)||(ce(o,Jt,"1"),As(e+1,o,n,r));continue}if(ut(o,n)&&!a)continue;As(e+1,o,n,r)}}}else if(o.nodeType===Node.TEXT_NODE){let i=o.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");o.after(s),s.appendChild(o)}}}}function Op(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Nu(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function ks(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let c=n.lastIndexOf(s,t);return c>i?c:i},-1);if(o===-1)n.length>t+20&&ks(e,t+20);else{let i=n.slice(o+1);o++,i.startsWith(" ")&&o++;let s=e.splitText(o),c=document.createElement("br");s.parentNode?.insertBefore(c,s),o+1<n.length&&ks(s,t)}}function Ou(e,t){let n=[];for(let r of e){let a=0,o=1e5,i=document.createElement("div"),s=l=>{let g=l;if(["DIV","BR"].includes(g.nodeName))return NodeFilter.FILTER_REJECT;if(g.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(g.nodeName==="SPAN"){let f=g.getBoundingClientRect(),m=globalThis.getComputedStyle(g),p=f.right,b=f.left,x=m.top.slice(0,-2),h=m.fontSize.slice(0,-2);return p>a&&(a=p),b<o&&(o=b),ce(g,or,`${b}`),ce(g,ea,`${p}`),ce(g,Sc,x),ce(g,Ec,h),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;c.nextNode(););let u=a-o;u<600&&(u=600),n.push(i),i.style.left=a+"px",i.style.width=u+"px",i.classList.add(na),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var Fu=["*://*/*","*","*://*"],Uu="immersive-translate-wildcard-placeholder.com";function _s(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>Fu.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let a=r.href,o=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let c=s;if(s===o)return!0;if(Fu.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===o:Hp(a,s)}catch{}return!1}else{let u,l=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let g=s.replace(/\*/g,Uu),f;try{f=new URL(g)}catch{return V.debug("invalid match pattern",g,"raw match value:",l),!1}let m=f.hostname,p=f.pathname;p==="/"&&(l.replace("://","").includes("/")||(p="/*"));let b=Fp(u+":",Hu(m),Hu(p));if(b){let x=new URL(a);return x.port="",b.test(x.href)}else return!1}});if(i)return i}return null}function Hu(e){return e.replace(Uu,"*")}function Fp(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function Mn(e,t){return _s(e,t)!==null}function Hp(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}var Pn="input is invalid type",Ms=typeof window=="object",Dt=Ms?window:{};Dt.JS_SHA256_NO_WINDOW&&(Ms=!1);var Up=!Ms&&typeof self=="object",Bp=!Dt.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Bp?Dt=global:Up&&(Dt=self);var qv=!Dt.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,Vv=typeof define=="function"&&define.amd,xr=!Dt.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",F="0123456789abcdef".split(""),$p=[-2147483648,8388608,32768,128],ft=[24,16,8,0],ya=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],xa=["hex","array","digest","arrayBuffer"],Ne=[];(Dt.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});xr&&(Dt.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Bu=function(e,t){return function(n){return new De(t,!0).update(n)[e]()}},ju=function(e){var t=Bu("hex",e);t.create=function(){return new De(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<xa.length;++n){var r=xa[n];t[r]=Bu(r,e)}return t},$u=function(e,t){return function(n,r){return new Ta(n,t,!0).update(r)[e]()}},zu=function(e){var t=$u("hex",e);t.create=function(a){return new Ta(a,e)},t.update=function(a,o){return t.create(a).update(o)};for(var n=0;n<xa.length;++n){var r=xa[n];t[r]=$u(r,e)}return t};function De(e,t){t?(Ne[0]=Ne[16]=Ne[1]=Ne[2]=Ne[3]=Ne[4]=Ne[5]=Ne[6]=Ne[7]=Ne[8]=Ne[9]=Ne[10]=Ne[11]=Ne[12]=Ne[13]=Ne[14]=Ne[15]=0,this.blocks=Ne):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}De.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(Pn);if(xr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!xr||!ArrayBuffer.isView(e)))throw new Error(Pn)}else throw new Error(Pn);t=!0}for(var r,a=0,o,i=e.length,s=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(o=this.start;a<i&&o<64;++a)s[o>>2]|=e[a]<<ft[o++&3];else for(o=this.start;a<i&&o<64;++a)r=e.charCodeAt(a),r<128?s[o>>2]|=r<<ft[o++&3]:r<2048?(s[o>>2]|=(192|r>>6)<<ft[o++&3],s[o>>2]|=(128|r&63)<<ft[o++&3]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<ft[o++&3],s[o>>2]|=(128|r>>6&63)<<ft[o++&3],s[o>>2]|=(128|r&63)<<ft[o++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++a)&1023),s[o>>2]|=(240|r>>18)<<ft[o++&3],s[o>>2]|=(128|r>>12&63)<<ft[o++&3],s[o>>2]|=(128|r>>6&63)<<ft[o++&3],s[o>>2]|=(128|r&63)<<ft[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=s[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};De.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=$p[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};De.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=this.blocks,u,l,g,f,m,p,b,x,h,y,S;for(u=16;u<64;++u)m=c[u-15],l=(m>>>7|m<<25)^(m>>>18|m<<14)^m>>>3,m=c[u-2],g=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,c[u]=c[u-16]+l+c[u-7]+g<<0;for(S=t&n,u=0;u<64;u+=4)this.first?(this.is224?(x=300032,m=c[0]-1413257819,s=m-150054599<<0,r=m+24177077<<0):(x=704751109,m=c[0]-210244248,s=m-1521486534<<0,r=m+143694565<<0),this.first=!1):(l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),g=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),x=e&t,f=x^e&n^S,b=a&o^~a&i,m=s+g+b+ya[u]+c[u],p=l+f,s=r+m<<0,r=m+p<<0),l=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),h=r&e,f=h^r&t^x,b=s&a^~s&o,m=i+g+b+ya[u+1]+c[u+1],p=l+f,i=n+m<<0,n=m+p<<0,l=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),y=n&r,f=y^n&e^h,b=i&s^~i&a,m=o+g+b+ya[u+2]+c[u+2],p=l+f,o=t+m<<0,t=m+p<<0,l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),S=t&n,f=S^t&r^y,b=o&i^~o&s,m=a+g+b+ya[u+3]+c[u+3],p=l+f,a=e+m<<0,e=m+p<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+a<<0,this.h5=this.h5+o<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};De.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=F[e>>28&15]+F[e>>24&15]+F[e>>20&15]+F[e>>16&15]+F[e>>12&15]+F[e>>8&15]+F[e>>4&15]+F[e&15]+F[t>>28&15]+F[t>>24&15]+F[t>>20&15]+F[t>>16&15]+F[t>>12&15]+F[t>>8&15]+F[t>>4&15]+F[t&15]+F[n>>28&15]+F[n>>24&15]+F[n>>20&15]+F[n>>16&15]+F[n>>12&15]+F[n>>8&15]+F[n>>4&15]+F[n&15]+F[r>>28&15]+F[r>>24&15]+F[r>>20&15]+F[r>>16&15]+F[r>>12&15]+F[r>>8&15]+F[r>>4&15]+F[r&15]+F[a>>28&15]+F[a>>24&15]+F[a>>20&15]+F[a>>16&15]+F[a>>12&15]+F[a>>8&15]+F[a>>4&15]+F[a&15]+F[o>>28&15]+F[o>>24&15]+F[o>>20&15]+F[o>>16&15]+F[o>>12&15]+F[o>>8&15]+F[o>>4&15]+F[o&15]+F[i>>28&15]+F[i>>24&15]+F[i>>20&15]+F[i>>16&15]+F[i>>12&15]+F[i>>8&15]+F[i>>4&15]+F[i&15];return this.is224||(c+=F[s>>28&15]+F[s>>24&15]+F[s>>20&15]+F[s>>16&15]+F[s>>12&15]+F[s>>8&15]+F[s>>4&15]+F[s&15]),c};De.prototype.toString=De.prototype.hex;De.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,a>>24&255,a>>16&255,a>>8&255,a&255,o>>24&255,o>>16&255,o>>8&255,o&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||c.push(s>>24&255,s>>16&255,s>>8&255,s&255),c};De.prototype.array=De.prototype.digest;De.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function Ta(e,t,n){var r,a=typeof e;if(a==="string"){var o=[],i=e.length,s=0,c;for(r=0;r<i;++r)c=e.charCodeAt(r),c<128?o[s++]=c:c<2048?(o[s++]=192|c>>6,o[s++]=128|c&63):c<55296||c>=57344?(o[s++]=224|c>>12,o[s++]=128|c>>6&63,o[s++]=128|c&63):(c=65536+((c&1023)<<10|e.charCodeAt(++r)&1023),o[s++]=240|c>>18,o[s++]=128|c>>12&63,o[s++]=128|c>>6&63,o[s++]=128|c&63);e=o}else if(a==="object"){if(e===null)throw new Error(Pn);if(xr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!xr||!ArrayBuffer.isView(e)))throw new Error(Pn)}else throw new Error(Pn);e.length>64&&(e=new De(t,!0).update(e).array());var u=[],l=[];for(r=0;r<64;++r){var g=e[r]||0;u[r]=92^g,l[r]=54^g}De.call(this,t,n),this.update(l),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}Ta.prototype=new De;Ta.prototype.finalize=function(){if(De.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();De.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),De.prototype.finalize.call(this)}};var Rn=ju();Rn.sha256=Rn;Rn.sha224=ju(!0);Rn.sha256.hmac=zu();Rn.sha224.hmac=zu(!0);var Wu=Rn;var qu=Wu.sha256;function dt(e){return Promise.resolve(qu(e))}function va(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function Ot(e,t){let n=qu.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Vu(e,t){let n=await Ot(e,t);return va(n)}async function wa(e,t){let n=jp(t),r=await Ot(e,n);return va(r)}function jp(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}async function At(e){let{url:t,config:n,state:r}=e,a=new URL(t),o="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:c,translationTheme:u,translationThemePatterns:l,translationUrlPattern:g,targetLanguage:f,sourceLanguageUrlPattern:m,immediateTranslationPattern:p}=n,b=In(t,i),x=In(t,p),h=s,y=Object.keys(c);for(let I of y){let N=c[I];if(In(t,N)){h=I;break}}let S=u,A=Object.keys(l);for(let I of A){let N=l[I];if(In(t,N)){S=I;break}}let D=In(t,g),v=zp(t,g);v||(v=Mn(t,Pc));let L=Object.keys(m),O={};for(let I of L){let N=m[I];if(N&&N.matches)for(let te of N.matches)O[te]=I}let w=Object.keys(O),R=_s(t,w);R&&(o=O[R]??"auto",O[R]&&O[R]!=="auto"&&_n(O[R]));let U=f||"zh-CN",P=a.hostname,_=await dt(P),H=a.pathname+a.search+a.hash,B=await dt(H),j=`https://${_}.com/${B}`,Z=await lr(),ee=n.translationStartMode;ee==="dynamic"&&x&&(ee="immediate");let C={targetLanguage:U,config:n,translationService:h,translationTheme:S,isTranslateUrl:D,sourceLanguage:o,isTranslateExcludeUrl:v,rule:n.generalRule,url:t,encryptedUrl:j,state:r||{translationArea:n.translationArea,translationStartMode:ee,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:b},localConfig:Z};C.state.translationArea==="body"&&(C.config.generalRule.excludeTags=C.config.generalRule.excludeTags.filter(I=>I!=="BUTTON"&&I!=="LABEL"),C.config.generalRule.additionalExcludeSelectors=C.config.generalRule.additionalExcludeSelectors.filter(I=>I!==".btn")),C.translationService==="d"&&(n.immediateTranslationTextCount=0);let $=n.rules,X;globalThis.PDFViewerApplication?X=$.find(I=>I.isPdf):X=$.find(I=>In(t,I));let E=n.generalRule;return X&&(C.rule=ua(E,X)),C.rule.isPdf&&(C.state.translationArea="main"),C.state.translationArea==="body"&&(C.rule.paragraphMinTextCount=1,C.rule.paragraphMinWordCount=1),C}function In(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:a,excludeSelectorMatches:o}=t;return r&&r.length>0&&Mn(e,r)?!1:n&&n.length>0&&Mn(e,n)?!0:o&&o.length>0&&ma(o)?!1:!!(a&&a.length>0&&ma(a))}function zp(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&Mn(e,n)||r&&r.length>0&&ma(r))}var Ea="Original",Sa=[],Ns=new Set,Ps=[],Ca=[],Gu=[],La=[],Ku=Tt().split("#")[0],Ds=0,_e,Wp=Rr(Zp,300),qp=Rr(Xu,200),Vp=ir(),Kp=Vp.PROD==="1",Tr,vr,wr="";async function Ju(){vt()==="Original"?await Ft():(vt()==="Translated"||vt()==="Error")&&Nn()}function Yu(){let e=document.querySelectorAll(`[${Kt}="1"]`);for(let t of e)t.style.display="none"}function Nn(){Ss(),Is(),Ve("Translating"),wr&&(document.title=wr),document.querySelectorAll("."+at).forEach(r=>{r.remove()}),document.querySelectorAll("."+na).forEach(r=>{r.remove()}),document.querySelectorAll("["+Ko+"]").forEach(r=>{if(Kp)delete r[Re];else{let o=Object.keys(r.dataset).filter(i=>i.startsWith(me));for(let i of o)delete r.dataset[i]}r.removeAttribute(Ko)}),Ve("Original")}function Gp(e,t){let n=!1,r=hs(e.elements),a=An(e.elements);Ns.add(e.id);let o=[];if(r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Ca.push(s),o.push(s),s.observe(r)}if(a&&a!==r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Ca.push(s),o.push(s),s.observe(a)}let i=Qt(e.id);i&&(i.observers=o,yr(e.id,i))}function Jp(e,t){if(e){let n=new ResizeObserver((r,a)=>{for(let o of r)o.contentRect.width>10&&(a.disconnect(),t(o.target))});n.observe(e),Gu.push(n)}}async function Xu(e){let t=[...La];La=[];try{let n=[];for(let r of t){let a=vs(r,e);if(a.length===0)continue;let o=a;n.push(...o)}await Fs(n,e)}catch(n){V.error(`translateNewDynamicNodes error: ${n.message}`)}}function Rs(e,t){Ns.delete(e.id);let n=Qt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(o=>{o.disconnect()}),n.observers=[],n.state="Translating",yr(e.id,n));let r=e.id;Ds+=e.text.length;let a=da(e.elements);if(e.isPdf){let o=hs(e.elements),i=window.getComputedStyle(o),s=i.top,c=i.fontSize,u=parseFloat(c.slice(0,-2));isNaN(u)||u>28&&(c="28px");let l=e.targetContainer,g=document.createElement("span");a.length===1&&(g.style.fontSize=c),g.id=`${at}-${r}`,g.style.top=s;let f=Nt(o,or),m=a.reduce((x,h)=>{let y=Nt(h,or);return y&&y<x?y:x},1e3),b=a.reduce((x,h)=>{let y=Nt(h,ea);return y&&y>x?y:x},0)-m;b<30,b>600&&(b=600),f<200&&(f=10),f&&f<0&&(f=0),g.style.left=`${f||10}px`,m<400?g.style.width=b+"px":g.style.width=`calc(100% - ${m}px)`,g.classList.add("notranslate",`${at}`),l.appendChild(g)}else{let o=An(e.elements),i="afterend";e.elements.length>0&&o&&(a.length===1?i="beforeend":ut(e.elements[0],t.rule)||(i="beforeend")),t.rule.insertPosition&&(i=t.rule.insertPosition);let s=document.createElement("span");if(s.classList.add("notranslate",at),s.id=`${at}-${r}`,s.innerHTML=Xp(),i==="beforeend"){let c=hu(o);c?c.appendChild(s):o.appendChild(s)}else if(i==="afterend")o.insertAdjacentElement(i,s);else throw new Error("not support position")}Sa.push(r),Wp(t)}function Yp(e,t){t.state.translationStartMode==="dynamic"&&Ds>t.config.immediateTranslationTextCount?Gp(e,n=>{Rs(n,t)}):Rs(e,t)}async function Ft(){if(Ea==="Translating")return;Ve("Translating");let e=await Zt(Tt());if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),o=new URL(e.url).hostname,i=e.localConfig.tempTranslationUrlMatches||[],s=i.findIndex(u=>u.match===o&&u.expiredAt>r),c=!1;s>-1||(i.push({match:o,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),c=!0),c&&await cr({...e.localConfig,tempTranslationUrlMatches:[...i]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),V.debug("ctx",e),e.state.isNeedClean?Nn():_e.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),xu(()=>{Ds=0,Lu(),Ca.forEach(r=>{r.disconnect()}),Gu.forEach(r=>{r.disconnect()}),Ca=[],Ns.clear()}),Ve("Translating");try{Ts([document.body],e.rule);let r=vs(document.body,e);V.debug("detect containers",r),Ve("Translating");let{rule:a}=e;r.length>0&&await Fs(r,e),tg(e).catch(o=>{V.error("translateTitle error:",o.name,o.message,o.details||"")}),eh(a,e),r.length===0&&Ve("Translated")}catch(r){Ve("Error"),V.error(r)}}async function Zt(e){let t=await ng();if(!_e)_e=await At({url:e,config:t});else{let n={url:e,config:t,state:_e.state};_e=await At(n)}return _e}async function Qu(){vt()==="Original"?await Aa():(vt()==="Translated"||vt()==="Error")&&(_e=await Zt(Tt()),_e.state.translationArea!=="main"?await Aa():Nn())}async function Aa(){_e=await Zt(Tt()),_e.state.translationArea="main",await Ft()}async function Os(){_e=await Zt(Tt()),_e.state.translationArea="body",await Ft()}async function Zu(){vt()==="Original"?await Os():(vt()==="Translated"||vt()==="Error")&&(_e=await Zt(Tt()),_e.state.translationArea!=="body"?(_e.state.translationArea="body",await Ft()):Nn())}async function eg(){_e=await Zt(Tt()),_e.state.translationArea="body",_e.state.translationStartMode="immediate",await Ft(),await Xu(_e)}async function tg(e){let t=document.title;if(!t||t.includes(ta))return;wr!==t&&(wr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=ba()),n==="auto"){let r=await it({text:t});if(ur(r,e.targetLanguage))return}try{let r=await og({text:t,from:n,to:e.targetLanguage},e);r&&r.text&&(document.title=wr+ta+r.text)}catch(r){throw r}}function Xp(){return`&nbsp;<span class="${ye}-loading notranslate"></span>`}async function Fs(e,t){let{rule:n}=t;Ts(e,n);let r=[];if(t.rule.isPdf)e.length>0&&(Ve("Translating"),r=Ou(e,n).targetContainers);else{Ve("Translating");let o=Du(e,n),{hiddenElements:i}=o;for(let s of i)Jp(s,()=>{mu(s,rt),Fs([s],t)});Ve("Translating")}let a=[];if(t.rule.isPdf?a=await Pu(document.body,e,t,r):(e=e.filter(o=>!Je(o,n,!1)),a=await Au(document.body,e,t)),Ve("Translating"),a.length===0){Ve("Translated");return}V.debug("detect paragraphs",a);for(let o of a)Yp(o,t);Ve("Translated")}function Qp(e,t,n,r){let a=Qt(n.id);if(e||!t){e||(V.error("translate error",t),e=new Error("no response from server"));let o=n.id,i=document.getElementById(`${at}-${o}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),a&&(a.state="Error",yr(a.id,a));let c=`<span class="${ye}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${ye}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${ye}-clickable-button notranslate" data-${ye}-paragraph-id="${o}" data-${ye}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=c)}else{let o=Qt(n.id);if(o){o.state="Translated",yr(o.id,o);let i=Iu(o,t,r),s=t.id,c=document.getElementById(`${at}-${s}`);c&&(c.innerHTML=i.html,document.querySelectorAll(`[${Gt}="${s}"]`).forEach(l=>{ce(l,Kt,"1")}))}else V.error("paragraph not found",n.id)}}async function Zp(e){if(Sa.length===0)return Promise.resolve();let t=[...Sa];Sa=[];let n="auto";e.state.isDetectParagraphLanguage||(n=br());let r={sentences:t.filter(o=>Qt(o)).map(o=>{let i=Qt(o),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){Ve("Translating");try{await Hs(r,e,(o,i,s)=>{Qp(o,i,s,e)})}catch(o){Ve("Error"),V.error("translateCurrentQueue error",o.name,o.message,o.details||" ");return}}Ve("Translated")}function Ve(e){Ea=e,ag(Ea)}function eh(e,t){V.debug("enableMutatinObserver"),Is(),Ps=[],La=[];let n=e.inlineTags.concat(e.excludeTags).concat("#text","BR");Tr=new MutationObserver(function(a){a.forEach(o=>{let i=Tt();if(i.split("#")[0]!==Ku&&e.observeUrlChange){Ku=i.split("#")[0],Ss(),Is(),setTimeout(()=>{V.debug("url changed, reinit page"),nh()},e.urlChangeDelay);let c=new Event(vc);document.dispatchEvent(c);return}o.addedNodes.forEach(c=>{if(c.nodeType===Node.ELEMENT_NODE){let u=c;if(th(e,u)||!n.includes(u.nodeName)){if(u.classList.contains("notranslate"))return;lu(u,Ps)||(La.push(u),Ps.push(u),qp(t))}}})})}),Tr.observe(document.body,{childList:!0,subtree:!0});let r=document.querySelector("title");r&&(vr=new MutationObserver(function(a){a.length>0&&(a[0].target.text.includes(ta)||tg(t).catch(i=>{V.error("translateTitle error:",i.name,i.message,i.details||"")}))}),vr.observe(r,{subtree:!0,characterData:!0,childList:!0}))}function th(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function nh(){let e=fr(),t=await Zt(Tt());t.rule.urlChangeDelay&&await fn(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?(xe()?n=await it({text:pr(document.body).slice(0,1e3)}):e?n=await it({text:pr(document.body).slice(0,1e3)}):n=await rg(),n==="auto"&&(n=await yu()),wu(n)):_n(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(V.debug(`detect page language: ${n}`),bu(n,t.config.translationLanguagePattern)&&(r=!0,V.debug(`match language pattern ${n}, auto translate`))),r?(_e.state.isAutoTranslate=!0,await Ft()):V.debug("do not auto translate",t)}function Is(){Tr&&(Tr.disconnect(),Tr.takeRecords()),vr&&(vr.disconnect(),vr.takeRecords())}function vt(){return Ea}var Sr=new Map,Dn=class{constructor(t,n=!1){this.logger=new sr,n&&this.logger.setLevel("debug"),this.fromType=t,Sr.has(t)||(Sr.set(t,new Map),Q.runtime.onMessage.addListener((r,a,o)=>{let i=r.from,s=r.to,c,u,l;a.tab&&a.tab.id&&(c=a.tab.id,i=`${i}:${c}`,u=a.tab.url,l=a.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let g=Bs(s),{type:f,name:m}=g;if(f!==t)return!1;let p=Bs(i),x=Sr.get(f).get(m);if(!x)return this.logger.debug(`no message handler for ${f}:${s}, but it's ok`),!1;let{messageHandler:h,sync:y}=x,S={type:t,name:p.name,id:c,url:u,active:l};if(y){try{let A=h(r.payload,S);o({ok:!0,data:A})}catch(A){o({ok:!1,errorName:A.name,errorMessage:A.message,errorDetails:A.details})}return!1}else return h(r.payload,S).then(A=>{o({ok:!0,data:A})}).catch(A=>{o({ok:!1,errorName:A.name,errorMessage:A.message,errorDetails:A.details})}),!0}))}getConnection(t,n,r){let a=!1;r&&r.sync&&(a=!0);let o=this.fromType,i=Sr.get(o);if(i.has(t))return i.get(t).connectionInstance;{let s=new Us(`${o}:${t}`,this.logger);return Sr.get(o).set(t,{messageHandler:n,sync:a,connectionInstance:s}),s}}},Us=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=Bs(t),{type:a,id:o}=r;if(a!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await Q.runtime.sendMessage(i);return sg(i,s,this.logger)}catch(s){if(a==="popup"){let c=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(c,n,t,s),Promise.resolve({message:c})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await Q.tabs.sendMessage(o,i);return sg(i,s,this.logger)}}};function sg(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new $e(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function Bs(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var rh=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await Os():n==="translateTheMainPage"?await Aa():n==="translateToThePageEndImmediately"?await eg():n==="toggleTranslatePage"?await Ju():n==="toggleTranslateTheWholePage"?await Zu():n==="toggleTranslateTheMainPage"?await Qu():n==="translatePage"?await Ft():n==="restorePage"?Nn():n==="showTranslationOnly"?Yu():n==="setCurrentPageLanguageByClient"&&_n(r)};var ka;function $s(){return ka||(ka=new Dn("content_script",!1).getConnection("main",rh),ka)}async function en(e){return await $s().sendMessage("background:main",e)}function le(e){return xe()||Zc()?(e.fetchPolyfill=globalThis.GM_fetch,En(e)):en({method:"fetch",data:e})}function ng(){return xe()?Ce():en({method:"getConfig"})}function it(e){if(e.text){let t=su(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(xe()){let t=Q.extra.detectLanguage(e.text);return Promise.resolve(t)}return en({method:"detectLanguage",data:e})}function rg(){return en({method:"detectTabLanguage"})}function ag(e){if(xe()){let n=new CustomEvent(Tc,{detail:e});document.dispatchEvent(n);return}$s().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function ig(e){return xe()?ds(e):en({method:"queryParagraphCache",data:e})}async function lg(e){if(xe()){await fs(e);return}return en({method:"setParagraphCache",data:e})}async function js(){if(xe())return Promise.resolve();await en({method:"mockRequest"})}var ie=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,a=[],o=[],i=0,s=new Set,c=null,u=r[0].from,l=!1;r.some(f=>f.from!==u)&&(l=!0);try{o=eu(r,this.maxTextLength,this.maxTextGroupLength)}catch(f){if(n){s.has(i)&&i++;for(let m=i;m<r.length;m++){let p=r[m];n(f,null,p)}c=f}else c=f}let g=jr({limit:this.throttleLimit,interval:1e3});V.debug("tempSentenceGroups",o.map(f=>f));for(let f=0;f<o.length;f++){let m=o[f],p=m.url,b=g(async()=>{let y=m.from;if(l&&(y="auto"),m.fromByClient!=="auto"&&(y=m.fromByClient),this.isSupportList)return await this.translateList({text:m.tempSentences.map(A=>A.text),from:y,to:m.to,url:p});{let S=m.tempSentences.map(L=>L.text).join(Jo),A=await this.translate({text:S,from:y,to:m.to,url:p}),{text:D}=A;return{text:D.split(Jo),from:A.from,to:A.to}}}),x;try{x=await b()}catch(y){if(n){s.has(i)&&i++;for(let S=i;S<r.length;S++){let A=r[S];n(y,null,A)}c=y;continue}else{c=y;continue}}let{text:h}=x;for(let y=0;y<h.length;y++)try{let S=h[y],A=m.tempSentences[y],{index:D,prefix:v,suffix:L}=A;a[D]===void 0?a[D]={...r[D],from:m.from,to:m.to,text:v+S+L}:a[D].text+=v+S+L,D!==i&&n&&(s.add(i),n(null,a[i],r[i])),i=D}catch(S){if(n){s.has(i)&&i++;for(let A=i;A<r.length;A++){let D=r[A];n(S,null,D)}throw S}else throw S}}if(n&&!s.has(i)&&a[i]&&r[i]&&n(null,a[i],r[i]),c)throw c;return{sentences:a}}detectLanguageLocally(t){return it({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var cg=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],mt=class extends ie{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),o=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${a}-${o}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:mt.langMap.get(a),SourceText:r,Target:mt.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:mt.langMapReverse.get(s.Response.Source)||a,to:mt.langMapReverse.get(s.Response.Target)||o}}async translateList(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:mt.langMap.get(a),SourceTextList:r,Target:mt.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:mt.langMapReverse.get(s.Response.Source)||a,to:mt.langMapReverse.get(s.Response.Target)||o}}async signedRequest({secretId:n,secretKey:r,action:a,payload:o,service:i,version:s}){let c=`${i}.tencentcloudapi.com`,u=new Date,l=`${new Date().valueOf()}`.slice(0,10),g=["POST","/","","content-type:application/json; charset=utf-8",`host:${c}`,"","content-type;host",await dt(o)].join(`
`),f=mt.getUTCDate(u),m=["TC3-HMAC-SHA256",l,`${f}/${i}/tc3_request`,await dt(g)].join(`
`),p=await Vu(f,`TC3${r}`),b=await wa(i,p),x=await wa("tc3_request",b),h=await wa(m,x),y=await le({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:c,"X-TC-Action":a,"X-TC-Timestamp":l,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${f}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${h}`},body:o});if(y instanceof Error)throw y;if(y.Response&&y.Response.Error&&y.Response.Error.Message)throw new Error(y.Response.Error.Message);return y}},tn=mt;tn.langMap=new Map(cg),tn.langMapReverse=new Map(cg.map(([n,r])=>[r,n]));var ug=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],Er=class extends ie{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:a,to:o}=n;if(!r)return{...n};let i=Er.langMap.get(a)||"auto",s=Er.langMap.get(o)||"zh-CN",c=await this.fetchWithoutToken(r,i,s);if(!c)throw new Error("google translate NETWORK_ERROR");if(!c.data[0]||c.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:c.data[0].map(l=>l[0]).filter(Boolean).join(""),from:Er.langMapReverse.get(c.data[2])||"auto",to:o}}async fetchWithoutToken(n,r,a){let o=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:a,q:n}),i="https://translate.googleapis.com/translate_a/single?"+o.toString();return{data:await le({url:i})}}},nn=Er;nn.langMap=new Map(ug),nn.langMapReverse=new Map(ug.map(([n,r])=>[r,n]));function gg(e){return e.result.texts}function ah(e,t){return t?e+(t-e%t):e}function oh(e,t){return e.split(t).length-1}function fg(e){let t=Date.now(),n=1;for(let r of e)n+=oh(r,"i");return ah(t,n)}function sh(e,t){return Math.floor(Math.random()*(t-e+1))+e}function zs(){return sh(1e6,1e8)}var Ws="https://www2.deepl.com/jsonrpc",_a="auto",dg=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],mg=["formal","informal"];function hg(e,t=_a,n=zs()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function ih(e,t=1){let n=[],r=0;for(let a=0;a<e.length;a++){let o=e[a].chunks;for(let i=0;i<o.length;i++){let s=o[i];n.push({kind:"default",_index:a,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:o.slice(0,r).map(c=>c.sentences[0].text),raw_en_context_after:r+1<o.length?[o[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function pg(e){return e.reduce((t,n)=>{let r=n.chunks;for(let a of r)t.push(a.sentences[0].text);return t},[])}function lh(e){if(!e)return{};if(!mg.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function bg(e,t,n,r=zs(),a=1,o){let i=pg(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:ih(n,a),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:lh(o),timestamp:fg(pg(n))},id:r}}function ch(e=dg){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function qs(e){return ch()[e.toLowerCase()]}var yg={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function xg(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function uh(e,t,n){let r=hg(e,t,n);return await le({method:"POST",url:Ws+"?method=LMT_split_text",headers:yg,body:xg(r)})}async function gh(e,t,n,r,a,o){let i=await uh(e,n,r),s=bg(n==="auto"?i.result.lang.detected:n,t,gg(i),r,a,o),c=s.params.jobs.map(g=>g._index);s.params.jobs=s.params.jobs.map(g=>{let f={...g};return delete f._index,f});let u=await le({method:"POST",url:Ws+"?method=LMT_handle_jobs",body:xg(s),headers:yg}),l={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((g,f)=>{let m=c[f];l.text[m]===void 0&&(l.text[m]="");let p=s.params.jobs[f].sentences[0].prefix,b=s.params.jobs[f].sentences[0].prefix;l.text[m]=l.text[m]+p+g.beams[0].sentences[0].text}),l}async function Tg(e,t,n=_a,r,a,o){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:gh(e,qs(t),qs(n)??"auto",r,a,o):{text:[],from:n,to:t}}var vg=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],On=class extends ie{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:a,from:o}=n,i=await Tg(r,On.langMap.get(a),On.langMap.get(o));return{text:i.text,from:On.langMapReverse.get(i.from),to:On.langMapReverse.get(i.to)}}},rn=On;rn.langMap=new Map(vg),rn.langMapReverse=new Map(vg.map(([n,r])=>[r,n]));var wg=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],e1=new Map(wg),t1=new Map(wg.map(([e,t])=>[t,e]));var Sg=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Vs="https://transmart.qq.com/api/imt",an=class extends ie{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:a}=n,o=await this.detectLanguage(r),i=an.langMap.get(o)||o,s=an.langMap.get(a)||a;if(o===a)return{text:r,from:o,to:a};let c=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await le({url:Vs,body:c,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:o||"auto",to:a}}async translateList(n){let{from:r,text:a,to:o}=n;if(a.length===1){let g=await this.translate({from:r,text:a[0],to:o,url:n.url});return{text:[g.text],from:g.from,to:g.to}}let i=await this.detectLanguage(a.join(`
`));if(i===o)return{text:a,from:i,to:o};let s=an.langMap.get(i)||i,c=an.langMap.get(o)||o,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:s,orig_url:n.url},target:{lang:c},type:"plain"}),l=await le({url:Vs,body:u,method:"POST"});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:i||"auto",to:o}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await le({url:Vs,method:"POST",body:JSON.stringify(r)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let o=a.language,i=an.langMapReverse.get(o);return i||o}},on=an;on.langMap=new Map(Sg),on.langMapReverse=new Map(Sg.map(([n,r])=>[r,n]));function Eg(){return Math.random()>=0}var Fn=class extends ie{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await js(),await fn(5e3);let a=r.match(/^\s*/)[0].length;return{text:r.slice(0,a)+"\u6A21\u62DF\uFF1A"+r.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:a,to:o}=n;if(await js(),!Eg())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:a,to:o,text:[""]}:{from:a,to:o,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var Ag=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],Cg=new Map(Ag),Lg=new Map(Ag.map(([e,t])=>[t,e])),Cr=class extends ie{constructor(n,r){super(n,r);this.apikey="";this.codename=Cr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...Cr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:Cr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:a,to:o}=n,i=await le({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:Cg.get(a)||"auto",target_lang:Cg.get(o)})});if(i.status){let s=i;return{text:s.result,from:Lg.get(s.source_lang),to:Lg.get(s.target_lang)}}else throw new Error(i.msg)}},Ma=Cr;Ma.DEFAULT_CODENAME="deepl";var Pa=Ma;var _g=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],kg=new Map(_g),fh=new Map(_g.map(([e,t])=>[t,e])),Ks=class extends ie{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:a,text:o}=n,i={source_lang:kg.get(r),target_lang:kg.get(a)},s=new URLSearchParams(i);o.forEach(m=>{s.append("text",m)});let c=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let l=await le({url:u,method:"POST",body:c,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:g}=l;return{text:g.map(m=>m.text),from:g[0]&&fh.get(g[0].detected_source_language)||r,to:a}}},Mg=Ks;var dh=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Le={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},Gs=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Js=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=Gs(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(Gs).sort().join(`&${r}=`)}`:`${r}=${Gs(n)}`}).filter(t=>t).join("&"),Lr=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let a=t[r];return typeof a<"u"&&a!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],a=this.credentialString(n);return r.push(`${Le.algorithm} Credential=${t.accessKeyId}/${a}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),a={...this.request.params},o=this.request.params,i=this.request.headers;t.sessionToken&&(a[Le.tokenHeader]=t.sessionToken),a[Le.dateHeader]=r,a[Le.notSignBody]="",a[Le.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,a[Le.algorithmKey]=Le.algorithm,a[Le.signHeadersKey]="",a[Le.signQueriesKey]=void 0,a[Le.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let s=await this.signature(t,r);return this.request.params=o,this.request.headers=i,a[Le.signQueriesKey]=Object.keys(a).sort().join(";"),a[Le.signatureKey]=s,Js(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Le.dateHeader]=n,t.sessionToken&&(this.request.headers[Le.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Le.contentSha256Header]=await dt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return va(await Ot(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Le.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=Js(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,a)=>r[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let a=r[0].toLowerCase();if(this.isSignableHeader(a)){let o=r[1];if(typeof o>"u"||o===null||typeof o.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(o.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await dt(t)}async hexEncodedBodyHash(){return this.request.headers[Le.contentSha256Header]?this.request.headers[Le.contentSha256Header]:this.request.body?await this.hexEncodedHash(Js(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return dh.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,a){let o=await Ot(n,`${Le.kDatePrefix}${t.secretKey}`),i=await Ot(r,o),s=await Ot(a,i);return Ot(Le.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,Le.v4Identifier].join("/")}};var Rg=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Pg=new Map(Rg),mh=new Map(Rg.map(([e,t])=>[t,e])),Ys=class extends ie{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n,i=Pg.get(a),s={TargetLanguage:Pg.get(o)||o,TextList:r};i&&(s.SourceLanguage=i);let c={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new Lr(c,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let l=new URLSearchParams(c.params),g=await le({url:"https://open.volcengineapi.com"+c.pathname+"?"+l.toString(),headers:u.request.headers,method:c.method,body:c.body});if(g.TranslationList){let f=g.TranslationList.map(p=>p.Translation),m=a;return g.TranslationList.length>0&&g.TranslationList[0].DetectedSourceLanguage&&(m=mh.get(g.TranslationList[0].DetectedSourceLanguage)||a),{text:f,from:m,to:o}}else{let f=g.ResponseMetaData.Error;throw new $e(f.Code,f.Message)}}},Ig=Ys;var Ng=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],ph=new Map(Ng),hh=new Map(Ng.map(([e,t])=>[t,e])),Ar=class extends ie{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:a,to:o}=n,s={source_language:ph.get(a)||"detect",target_language:"zh",text:r},c=await le({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(c.base_resp&&c.base_resp.status_code===0){let u=c.translation,l=a;return c.detected_language&&(l=hh.get(c.detected_language)||a),{text:u,from:l,to:o}}else{let u=c.base_resp;throw new $e(u.status_code.toString(),u.status_message)}}};var bh=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Dg=new Map(bh),kr=class extends ie{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:a,to:o}=n,s=await le({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Dg.get(a)||a,target_lang:Dg.get(o)||o,text:r})});if(s.code===200)return{text:s.data,from:a,to:o};throw new Error(s.message||s.message||"API Error")}};var Xs="https://{s}bing.com",Bg=Xs+"/translator",yh=Xs+"/ttranslatev3",xh=Xs+"/tspellcheckv3",Ra="bingGlobalConfig",$g=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],Og=new Map($g),Fg=new Map($g.map(([e,t])=>[t,e])),Hg=1e3,pt,Hn;function Qs(e,t){return e.replace("{s}",t?t+".":"")}async function Th(){if(!pt){let n=await Q.storage.local.get(Ra);return n&&(pt=n[Ra]),!0}let{tokenTs:e,tokenExpiryInterval:t}=pt;return Date.now()-e>t}async function Ug(){let e,t,n,r,a,o,i,s,c,u;try{let l=Qs(Bg,e),g=await le({url:l,responseType:"raw"}),{body:f,headers:m,url:p}=g;e=p.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=m["set-cookie"],t=f.match(/IG:"([^"]+)"/)[1],n=f.match(/data-iid="([^"]+)"/)[1],[a,r,o,i,s,c]=JSON.parse(f.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(l){throw console.error("failed to fetch global config",l),l}return pt={subdomain:e,IG:t,IID:n,key:a,token:r,tokenTs:a,tokenExpiryInterval:o,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:c,cookie:u,count:0},await Q.storage.local.set({[Ra]:pt}),pt}function vh(e){let{IG:t,IID:n,subdomain:r,isVertical:a}=pt;return Qs(e?xh:yh,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+pt.count++:"")}function wh(e,t,n,r){let{token:a,key:o}=pt,i={fromLang:n,text:t,token:a,key:o};return!e&&r&&(i.to=r),i}async function jg(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Hg)throw new Error(`The supported maximum length of text is ${Hg}. Please shorten the text.`);Hn||(Hn=Ug()),await Hn,await Th()&&(Hn=Ug(),await Hn),t=t||"auto",n=n||"zh-CN",t=Og.get(t)||t,n=Og.get(n)||n;let a=vh(!1),o=wh(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:Qs(Bg,pt.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(o),c=a,u=s.toString(),l=await le({url:c,headers:i,method:"POST",body:u});if(l.ShowCaptcha||l.StatusCode===401||l.statusCode){if(pt=null,Hn=null,await Q.storage.local.remove(Ra),l.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${l.StatusCode}.
    `);if(l.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(l.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(l)}.`)}let g=l[0].translations[0],f=l[0].detectedLanguage;return{text:g.text,from:Fg.get(f.language),to:Fg.get(g.to)}}var _r=class extends ie{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:a,to:o}=n;return r?await jg(r,a,o):{...n}}};var Wg=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],zg=new Map(Wg),Sh=new Map(Wg.map(([e,t])=>[t,e])),Zs=class extends ie{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:a}=this,{appid:o,key:i}=this,{text:s,from:c,to:u}=n,l=new URLSearchParams({from:zg.get(c),to:zg.get(u),q:s,salt:r,appid:o,sign:Cn(o+s+r+i)}),g=new URL(a);g.search=l.toString();let f=await le({url:g.toString()});if(f.error_code)throw console.error(new Error("[Baidu service]"+f.error_msg)),new $e("API_SERVER_ERROR",f.error_msg);let{trans_result:m,from:p}=f,b=m.map(({dst:h})=>h);return{from:Sh.get(p),to:u,text:b.join(`
`)}}},qg=Zs;var Eh=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Vg=new Map(Eh),ei=class extends ie{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n;a==="auto"&&(a=await it({text:r.join(" ")}));let i=r;return{text:(await le({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Vg.get(a)}2${Vg.get(o)}`})})).target,from:a,to:o}}},Kg=ei;var Jg=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Gg=new Map(Jg),Ch=new Map(Jg.map(([e,t])=>[t,e]));function Lh(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var ti=class extends ie{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),c=this.appId+Lh(r)+i+s+this.appSecret,u=await dt(c),l={q:r,appKey:this.appId,salt:i.toString(),from:Gg.get(a),to:Gg.get(o),sign:u,signType:"v3",curtime:s.toString()},g=new URLSearchParams(l),m=await le({url:"https://openapi.youdao.com/api",method:"POST",body:g.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p=m.l,[b,x]=p.split("2");return{text:m.translation.join(`
`),from:Ch.get(b),to:o}}},Yg=ti;var Un={mock:{class:Fn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:Fn,name:"Mock2",homepage:"https://www.google.com"},google:{class:nn,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:on,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:Mg,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:Ig,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:Ar,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:_r,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:tn,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:qg,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Kg,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:Pa,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Yg,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:rn,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:kr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function ni(e,t){let n=Un[e],r=t.config.translationServices[e]||{},a=!0,o=n.class.getAllProps();if(o.length>0){let i=o.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){a=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:a,config:r,props:n.class.getProps(),allProps:o}}var Ah=Object.keys(Un),Xg=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return Ah.filter(a=>{let o=Un[a];return a.startsWith("mock")?!!r:!o.alpha||n||a===e.translationService}).map(a=>ni(a,e))};async function og(e,t){if(!e.text)return e;let n=await Hs({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new $e("translateFailed","translate failed")}async function Hs(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:a}=t,o=r.translationGeneralConfig,i=r.translationServices,s=a,c=i[s]||{},u=[],l={sentences:Array(e.sentences.length)},g=e.sentences.length,f=-1;if(r.cache)for(let x of e.sentences){f++;let h=s;s==="openl"&&(h=s+"-"+c.codename||Pa.DEFAULT_CODENAME);let y=null;try{y=await Pr(ig({originalText:x.text,from:x.from,to:x.to,service:h}),1e3)}catch(S){V.warn("query cache DB error, but it's ok",S)}if(y){let S={...x,text:y.translatedText};l.sentences[f]=S,n&&n(null,S,x)}else u.push(x)}else u.push(...e.sentences);let m=u.length;if(g-m>0&&V.debug(`use ${g-m} sentences from cache`),!u.length)return l;let p;try{p=new Un[s].class(c,o),await p.init()}catch(x){if(n)for(let h of u)n(x,null,h);throw x}let b=await p.multipleTranslate({sentences:u},(x,h,y)=>{if(n&&(n(x,h,y),!x&&h&&!s.startsWith("mock")&&r.cache)){let S=s;s==="openl"&&(S=s+"-"+c.codename||Pa.DEFAULT_CODENAME),r.cache&&Pr(lg({translatedText:h.text,from:y.from,to:y.to,detectedFrom:h.from,key:Cn(y.text),service:S}),3e3).catch(A=>{V.warn("set cache DB error",A)})}});for(let x of b.sentences){let h=l.sentences.findIndex(y=>!y);if(h===-1)throw new $e("translateFailed","can not match the result");l.sentences[h]=x}return l}function Qg(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function ri(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let a=t[r],o=new RegExp("{"+r+"}","gm");n=n.replace(o,a.toString())}),n}function Mr(e,t,n){let r=e[t];if(!r)return n;let a=n.split("."),o="";do{o+=a.shift();let i=r[o];i!==void 0&&(typeof i=="object"||!a.length)?(r=i,o=""):a.length?o+=".":r=n}while(a.length);return r}function ai(e,t,n,r,a){if(!e.hasOwnProperty(n))return t;let o=Mr(e,n,t);return o===t&&n!==r&&(o=Mr(e,r,t)),ri(o,a)}var Bn={},kh={root:"",lang:"en",fallbackLang:"en"};function oi(e,t){let n=Object.assign({},kh,e);Bn=t||Bn;let[r,a]=Y(n.lang),[o,i]=Y(Bn),[s,c]=Y(!1),u=g=>{if(o.hasOwnProperty(g))return;c(!1);let f=Qg(n.root||"",g);n.getUrl&&(f=n.getUrl(n.root||"",g),fetch(f).then(m=>m.json()).then(m=>{Bn[g]=m,i({...Bn}),c(!0)}).catch(m=>{i({...Bn}),c(!0)}))};return ge(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:a,t:(g,f)=>{if(!o.hasOwnProperty(r))return g;let m=Mr(o,r,g);return m===g&&r!==n.fallbackLang&&(m=Mr(o,n.fallbackLang,g)),ri(m,f)},isReady:s}}var ii=Va(null),si={root:"assets",lang:"en",fallbackLang:"en"},Zg=e=>{let{t,setLang:n,lang:r,isReady:a}=oi({root:e.root||si.root,lang:e.lang||si.lang,fallbackLang:e.fallbackLang||si.fallbackLang,getUrl:e.getUrl},e.translations);return d(ii.Provider,{value:{t,setLang:n,lang:r,isReady:a},children:e.children})};function ae(){return Ja(ii)}function Te(e){return d("div",{class:"nav-left",children:[d("div",{class:"title",children:e.title}),d("div",{class:"description",children:e.description})]})}function li(e){let{items:t,maxWidth:n}=e;return n=n||128,d("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let a=r.target.value,o=t.find(i=>i.value===a);o&&o.onSelected(o)},children:t.map(r=>d("option",{value:r.value,selected:r.selected,children:r.label}))})}function Ia(e){let{t}=ae();return d("div",{class:"input-row",children:[d("div",{class:"input-left",children:d("label",{for:e.field.name,children:[e.field.label?t(e.field.label):e.field.name,"\uFF1A"]})}),d("div",{class:"input-right",children:d("input",{required:e.field.required,placeholder:e.field.name,class:"input",value:e.value,type:e.type,onChange:n=>{e.onChange(n.target.value)}})})]})}function ci(e){let{field:t,root:n,onChange:r,value:a}=e;a=a||t.default||"";let{t:o}=ae();return t.type==="select"?d("div",{class:"flex justify-end mb-2",children:[d("label",{class:"engine",children:[t.label?o(t.label):t.name,"\uFF1A"]}),d(li,{items:t.options.map(i=>({label:`${i.label?o(i.label):i.value}`,value:a??"",selected:a===i.value,onSelected:()=>{r(i.value)}}))})]}):t.type==="text"?d("div",{children:d(Ia,{field:t,value:a,type:t.type,onChange:r})}):t.type==="password"?d("div",{children:d(Ia,{field:t,value:a,type:t.type,onChange:r})}):null}var ef={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},ui={...zt,"zh-CN":{...ef["zh-CN"],...zt["zh-CN"]},"zh-TW":{...ef["zh-TW"],...zt["zh-TW"]}},Na=ui;function gi(e,t,n){return ai(ui,e,t,ra,n)}var tf=()=>Tn.filter(e=>e!=="auto"),Ht=(e,t,n)=>{let r=ai(ui,`languages.${e}`,t,"en");return n?Qo[e]||e:r!==`languages.${e}`?r:Qo[e]};function Da(e){let{t,lang:n}=ae();return d("details",{role:"list",class:"nav-right",children:[d("summary",{"aria-haspopup":"listbox",children:t("edit")}),d("ul",{role:"listbox",class:"option-list",children:e.options.map(r=>{let a=Ht(r.value,n);return d("li",{children:d("label",{children:[d("input",{type:"checkbox",onChange:()=>{e.onToggleAlwaysLangs(!r.checked,r.value)},value:r.value,checked:r.checked}),a]})})})})]})}function $n(e){let{t}=ae();return d("div",{children:e.urls.map((n,r)=>d("div",{class:"url-list",children:[d("div",{class:"url-left",children:[d("div",{class:"url-name height-tight",children:n}),d("div",{class:"description text-1 height-tight",children:n})]}),d("nav",{children:d("ul",{children:d("li",{children:d("details",{role:"list",dir:"rtl",children:[d("summary",{"aria-haspopup":"listbox",role:"link"}),d("ul",{class:"delete",role:"listbox",children:[d("li",{children:d("a",{onClick:a=>{e.onEditUrl(n,e.type,r)},children:t("edit")})}),d("li",{children:d("a",{onClick:a=>{e.onDeleteUrl(n,e.type)},children:t("delete")})})]})]})})})})]},"menu"+r))})}function jn(e){let{t}=ae(),n=mn(null),{toggleModal:r}=e;return d("dialog",{id:"immersive-translate-overlay",onClick:o=>{o.preventDefault(),o.target&&o.target.id==="immersive-translate-overlay"&&r(o)},open:!0,children:d("article",{class:"add-modal",children:[d("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:e.toggleModal}),d("div",{class:"add-text",children:t("add url")}),d("input",{placeholder:"URL",ref:n,value:e.urlValue}),d("blockquote",{children:d("p",{class:"text-sm",children:t("addUrlDescription")})}),d("div",{class:"flex",children:[d("div",{class:"footer-button",children:d("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:e.toggleModal,children:t("cancel")})}),d("div",{class:"footer-button",children:d("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:o=>{if(o.preventDefault(),n.current&&n.current.value){if(e.onSubmitAddUrl){if(e.urlValue!==""){e.onSubmitAddUrl(n.current.value,e.index,e.type,"edit");return}e.onSubmitAddUrl(n.current.value,e.index,e.type);return}else if(e.onAddInterfaceUrl){if(e.urlValue!==""){e.onAddInterfaceUrl(n.current.value,"edit");return}e.onAddInterfaceUrl(n.current.value)}}},children:t("confirm")})})]})]})})}var fi=tf();function Oa(){let{t:e}=ae(),[t,n,r,a]=ot(),[o,i]=Y(null),[s,c]=Y(null),[u,l]=Y(0),[g,f]=Y(!1),[m,p]=Y(!1),[b,x]=Y(""),h=[];s&&(h=Xg(s));let y=null,S=null,A=[],D=[];if(o&&s){let{translationService:C,translationServices:$}=o;Un[C]&&(S=ni(C,s)),$&&$[C]?y=$[C]||{}:y={},A=fi.map(X=>o.translationLanguagePattern&&o.translationLanguagePattern.matches&&o.translationLanguagePattern.matches.includes(X)?{checked:!0,value:X}:{checked:!1,value:X}),D=fi.map(X=>o.translationLanguagePattern&&o.translationLanguagePattern.excludeMatches&&o.translationLanguagePattern.excludeMatches.includes(X)?{checked:!0,value:X}:{checked:!1,value:X})}ge(()=>(Be("esc",()=>{f(!1),p(!1)}),Ce().then(C=>{i(C),V.debug(C)}),()=>{Be.unbind("esc")}),[]),ge(()=>{Ce().then(C=>{i(C)})},[t]),ge(()=>{o&&At({url:"http://localhost",config:o}).then(C=>{c(C)})},[o]);let v=C=>{n($=>({...$,translationService:C}))},L=C=>{n(()=>({...C}))},O=C=>{C.preventDefault(),confirm(e("confirmResetConfig"))&&(L(Yt()),Sn().catch($=>{V.error("clean local config error",$)}),Xe(e("resetSuccess")))},w=C=>{n($=>({...$,targetLanguage:C}))},R=(C,$)=>{if(!C){n(I=>{let N={...I.translationLanguagePattern};return{...I,translationLanguagePattern:{...I.translationLanguagePattern,matches:xt($,N.matches),excludeMatches:xt($,N.excludeMatches)}}});return}let X=C,E=X==="matches"?"excludeMatches":"matches";$&&n(I=>{let N={...I.translationLanguagePattern};return N[X]=wn($,N[X]),N[E]=xt($,N[E]),{...I,translationLanguagePattern:{...I.translationLanguagePattern,...N}}})},U=(C,$)=>{R(C?"matches":void 0,$)},P=(C,$)=>{R(C?"excludeMatches":void 0,$)},_=C=>{C==="matches"?f(!g):p(!m)},H=(C,$,X,E)=>{_(X),n(I=>{let N=t.translationUrlPattern,te=[],K=[];N&&N.matches&&N.excludeMatches&&(te=N.matches,K=N.excludeMatches);let he=[...te],we=[...K];return E==="edit"&&(X==="matches"?he[$]=C:we[$]=C),X==="matches"?(he=wn(C,he),we=xt(C,K)):(he=xt(C,te),we=wn(C,we)),{...I,translationUrlPattern:{...I.translationUrlPattern,matches:he,excludeMatches:we}}})},B=(C,$)=>{n(X=>{let E=t.translationUrlPattern,I=[];$==="matches"?E&&E.matches&&(I=E.matches):E&&E.excludeMatches&&(I=E.excludeMatches);let N=[...I];return N=xt(C,N),{...X,translationUrlPattern:{...X.translationUrlPattern,[$]:N}}})},j=(C,$,X)=>{_($),x(C),l(X)};if(!o)return d("div",{children:"loading"});let Z=[];o&&o.translationLanguagePattern&&o.translationLanguagePattern.matches&&(Z=o.translationLanguagePattern.matches);let ee=[];return o&&o.translationLanguagePattern&&o.translationLanguagePattern.excludeMatches&&(ee=o.translationLanguagePattern.excludeMatches),d("div",{children:[d("div",{class:"nav",children:[d("strong",{class:"text-lg",children:e("general")}),d("a",{class:"text-sm",href:"#",onClick:O,children:e("reset")})]}),d("div",{class:"nav",children:[d(Te,{title:e("target"),description:e("translate other languages into specific language")}),d("select",{class:"select",onChange:C=>{C.preventDefault(),w(C.target.value)},children:fi.filter(C=>C!=="auto").map(C=>d("option",{value:C,selected:C===o.targetLanguage,children:Ht(C,o.interfaceLanguage)}))})]}),d("div",{class:"nav",children:[d(Te,{title:e("service"),description:e("select translation service")}),d("select",{class:"select",onChange:C=>{C.preventDefault(),v(C.target.value)},children:h.map(C=>d("option",{value:C.id,selected:C.id===o.translationService,children:`${e("translationServices."+C.id)}`}))})]}),S&&S.docUrl?d("div",{children:[d("a",{class:"pb-1 docUrl",href:S.homepage,children:e(`translationServices.${S.id}`)}),"\xA0",d("span",{class:"description pb-1",children:e("please refer to")}),"\xA0",d("a",{class:"pb-1 docUrl",href:S.docUrl,children:e("KeyAndConfigurationTutorial")})]}):null,y&&S&&S.allProps.length>0&&S.allProps.map(C=>d(ci,{field:C,value:y[C.name],onChange:$=>{n(X=>{let E=X.translationServices||{},I=E[S.id]||{};return{...X,translationServices:{...E,[S.id]:{...I,[C.name]:$}}}})}})),d("div",{class:"nav",children:[d(Te,{title:e("always languages"),description:e("always translate the following languages")}),d(Da,{options:A,onToggleAlwaysLangs:U})]}),d("div",{class:"langs-list",children:Z.map((C,$)=>d("div",{class:"lang-card",children:[d("div",{id:`${C}`,children:Ht(C,o.interfaceLanguage)}),d("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${C}`,onClick:X=>{X.preventDefault(),U(!1,Z[$])}})]}))}),d("div",{class:"nav",children:[d(Te,{title:e("neverTranslateLanguagesLabel"),description:e("neverTranslateTheFollowingLanguagesDescription")}),d(Da,{options:D,onToggleAlwaysLangs:P})]}),d("div",{class:"langs-list",children:ee.map((C,$)=>d("div",{class:"lang-card",children:[d("div",{id:`${C}`,children:Ht(C,o.interfaceLanguage)}),d("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${C}`,onClick:X=>{X.preventDefault(),P(!1,ee[$])}})]}))}),d("div",{class:"nav",children:[d(Te,{title:e("always sites"),description:e("always translate the following sites")}),d("div",{class:"nav-right",children:d("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:C=>{C.preventDefault(),_("matches")},children:e("add")})}),g?d(jn,{toggleModal:C=>{C.preventDefault(),_("matches")},onSubmitAddUrl:H,type:"matches",urlValue:b,index:u}):null]}),d($n,{urls:o.translationUrlPattern.matches,type:"matches",onDeleteUrl:B,onEditUrl:j}),d("div",{class:"nav",children:[d(Te,{title:e("never sites"),description:e("never translate the following sites")}),d("div",{class:"nav-right",children:d("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:C=>{C.preventDefault(),_("excludeMatches")},children:e("add")})}),m?d(jn,{toggleModal:C=>{C.preventDefault(),_("excludeMatches")},onSubmitAddUrl:H,type:"excludeMatches",urlValue:b,index:u}):null]}),d($n,{urls:o.translationUrlPattern.excludeMatches,type:"excludeMatches",onDeleteUrl:B,onEditUrl:j}),d("div",{class:"nav",children:[d(Te,{title:e("advanced"),description:e("advancedDescription")}),d("a",{class:"text-sm",href:"#advanced",children:e("goAdvancedSettings")})]})]})}var di=Vc()?["action"]:["browser_action","page_action"],mi=[{id:"toggleTranslatePage",contexts:["page",...di]},{id:yc,contexts:di},{id:xc,contexts:di}];async function nf(e){V.debug("createContextMenu",mi),await Q.contextMenus.removeAll();for(let t of mi)e.isShowContextMenu===!1&&t.id==="toggleTranslatePage"&&(t.contexts=t.contexts.filter(n=>n!=="page")),Q.contextMenus.create({id:t.id,title:gi(`browser.${t.id}`,e.interfaceLanguage),contexts:t.contexts},()=>Q.runtime.lastError)}async function rf(){let e=await Ce();V.debug("update ContextMenu",e);for(let t of mi){let n=gi(`browser.${t.id}`,e.interfaceLanguage);Q.contextMenus.update(t.id,{title:n})}}function pi(e){let{t}=ae(),{corfirmText:n,fingerCountToToggleTranslagePageWhenTouching:r,onChange:a,onClose:o,shortcuts:i}=e,s={},c=mn(null);for(let l=0;l<i.length;l++)s[i[l].name]=mn(null);let u=l=>{l.preventDefault(),l.target&&l.target.id==="immersive-translate-overlay"&&o()};return ge(()=>{},[]),d("dialog",{id:"immersive-translate-overlay",onClick:u,open:!0,children:d("article",{class:"add-modal",children:[d("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:l=>{l.preventDefault(),o()}}),i.map((l,g)=>{let{name:f,description:m,shortcut:p}=l;return d("div",{class:"flex justify-between items-center",children:[d("label",{class:"mb-2 text-sm",for:f,children:[m,":"]}),d("input",{type:"text",class:"!w-36",ref:s[f],disabled:l.disabled,id:f,name:f,value:p})]},`key-${g}`)}),Gc()&&d("div",{class:"flex justify-between items-center",children:[d("label",{for:"switch",class:"text-sm mb-2",children:t("toggleTranslatePageWhenThreeFingersOnTheScreen")}),d("select",{class:"select !w-36",ref:c,onChange:l=>{l.preventDefault()},children:[0,2,3,4,5].map(l=>d("option",{value:l,selected:l===r,children:`${t("fingers."+l)}`}))})]}),e.note&&d(e.note,{}),d("div",{class:"flex",children:[d("div",{class:"footer-button",children:d("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:l=>{l.preventDefault(),o()},children:t("cancel")})}),n&&d("div",{class:"footer-button",children:d("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:l=>{l.preventDefault();let g=[];for(let m=0;m<i.length;m++){let p=i[m],b=s[p.name];if(b.current){let x=b.current.value;g.push({...p,shortcut:x})}}let f={shortcuts:g};if(c.current){let m=c.current.value;f.fingerCountToToggleTranslagePageWhenTouching=parseInt(m)}a(f)},children:n})})]})]})})}var Mh=Object.keys(Na),Ph=e=>{let t=e.translationTheme;return e.translationThemePatterns[t]?[...e.translationThemePatterns[t].matches]:[]};function hi(){let[e,t,n,r]=ot(),[a,o]=Y(!1),[i,s]=Y(!1),[c,u]=Y(0),[l,g]=Y(null),{t:f,setLang:m}=ae(),[p,b]=Y(""),x=Q.runtime.getManifest();ge(()=>(Be("esc",()=>{o(!1),s(!1)}),()=>{Be.unbind("esc")}),[]),ge(()=>{Ce().then(w=>{At({config:w,url:globalThis.location.href}).then(R=>{g(R)})})},[e]);let h=w=>{t(R=>({...R,translationTheme:w}))},y=w=>{t(R=>({...R,interfaceLanguage:w}))},S=(w,R,U)=>{o(!a),t(P=>{let _=P.translationThemePatterns||{},H=_[R]||{},B=H.matches||[],j=[...B];return U==="edit"&&(j=xt(p,B)),j=wn(w,j),{...P,translationThemePatterns:{..._,[R]:{...H,matches:j}}}})},A=(w,R)=>{t(U=>{let P=U.translationThemePatterns||{},_=P[R]||{},B=[..._.matches||[]];return B=xt(w,B),{...U,translationThemePatterns:{...P,[R]:{..._,matches:B}}}})},D=(w,R,U)=>{o(!a),b(w),u(U)};if(!l)return d("div",{children:"loading"});let v=l.config,L=f("confirm"),O=()=>d("blockquote",{class:"text-sm",children:[f("browserShortcutsSucks")," ",d("kbd",{children:"Ctrl+A"}),"\xA0",d("kbd",{children:"Alt+B"}),"\xA0",d("kbd",{children:"Command+C"}),"\xA0 ",d("kbd",{children:"Ctrl+Shift+D"})," ",d("a",{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values",children:[f("help"),"?"]})]});return xe()||(rs()?(O=()=>d("blockquote",{class:"text-sm",children:[f("browserShortcutsNoteForFirefox"),"  ",d("a",{href:"https://support.mozilla.org/zh-CN/kb/%E7%AE%A1%E7%90%86Firefox%E7%9A%84%E6%89%A9%E5%B1%95%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F",children:[f("help"),"?"]})," "]}),L=""):(O=()=>d("blockquote",{class:"text-sm",children:f("browserShortcutsNoteForChrome")}),L=f("goSettings"))),d("div",{children:[d("div",{class:"nav",children:d("strong",{class:"text-lg",children:f("interface")})}),d("div",{class:"nav",children:[d(Te,{title:f("interface language")}),d("select",{class:"select",onChange:w=>{m(w.target.value),y(w.target.value),xe()||setTimeout(()=>{rf()},200)},children:Mh.map(w=>d("option",{value:w,selected:w===v.interfaceLanguage,children:Ht(w,v.interfaceLanguage,!0)}))})]}),d("div",{class:"nav",children:[d(Te,{title:f("keyboard shortcuts")}),d("div",{class:"nav-right",children:d("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:w=>{w.preventDefault(),s(!i)},children:f("modify")})})]}),!xe()&&d("div",{class:"nav",children:[d(Te,{title:f("isShowContextMenu")}),d("label",{for:"switch",children:d("input",{type:"checkbox",onChange:w=>{let R=w.target.checked;nf({...l.config,isShowContextMenu:R}),t(U=>({...U,isShowContextMenu:R}))},checked:l.config.isShowContextMenu===!0,id:"switch",name:"switch",role:"switch"})})]}),d("div",{class:"nav",children:[d(Te,{title:f("enableLineBreak"),description:f("enableLineBreakDescription")}),d("label",{for:"switch",children:d("input",{type:"checkbox",onChange:w=>{let R=w.target.checked;t(U=>{let P=U.generalRule||{};return{...U,generalRule:{...P,lineBreakMaxTextCount:R?280:0}}})},checked:l.rule.lineBreakMaxTextCount>0,id:"switch",name:"switch",role:"switch"})})]}),l.rule.lineBreakMaxTextCount>0&&d("div",{class:"nav",children:[d(Te,{title:f("lineBreakMaxTextCount")}),d("label",{for:"count",children:d("input",{type:"number",id:"count",onChange:w=>{let R=w.target.value;t(U=>{let P=U.generalRule||{};return{...U,generalRule:{...P,lineBreakMaxTextCount:parseInt(R)}}})},name:"count",value:l.rule.lineBreakMaxTextCount,placeholder:"Text Length",required:!0})})]}),(oa().any||xe())&&d("div",{class:"nav",children:[d(Te,{title:f("enableUserscriptPagePopup"),description:f("enableUserscriptPagePopupDescription",{touch:f("fingers."+v.generalRule.fingerCountToToggleTranslagePageWhenTouching)})}),d("label",{for:"switch",children:d("input",{type:"checkbox",onChange:w=>{let R=w.target.checked;t(U=>{let P=U.generalRule||{};return{...U,generalRule:{...P,isShowUserscriptPagePopup:R}}})},checked:l.rule.isShowUserscriptPagePopup,id:"switch",name:"switch",role:"switch"})})]}),d("div",{class:"nav",children:[d(Te,{title:f("translation display"),description:f("select diplay style")}),d("select",{class:"select",onChange:w=>{h(w.target.value)},children:_c.map(w=>d("option",{value:w,selected:w===v.translationTheme,children:f(`translationTheme.${w}`)}))})]}),d("div",{class:"pt-2 text-sm",children:d("p",{children:[Rc,d("br",{}),d("br",{}),d("span",{class:Cs(v.translationTheme,!1,[],!1,!1).join(" "),children:d("span",{class:Ls(v.translationTheme).join(" "),children:Ic})})]})}),d("div",{class:"nav",children:[d(Te,{title:"",description:f("useAboveStyleForTheseSites",{theme:f(`translationTheme.${v.translationTheme}`)})}),d("div",{class:"nav-right",children:d("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:w=>{w.preventDefault(),o(!a)},children:f("add")})})]}),a?d(jn,{toggleModal:w=>{w.preventDefault(),o(!a)},onAddInterfaceUrl:(w,R)=>{S(w,v.translationTheme,R)},urlValue:p,index:c}):null,d($n,{urls:Ph(v),type:"matches",onDeleteUrl:w=>{A(w,v.translationTheme)},onEditUrl:D}),i?d(pi,{note:O,corfirmText:L,fingerCountToToggleTranslagePageWhenTouching:v.generalRule.fingerCountToToggleTranslagePageWhenTouching,shortcuts:Mc.map(w=>({name:w,shortcut:v.shortcuts[w],description:f(`browser.${w}`),disabled:!xe()})),onChange:w=>{let{shortcuts:R,fingerCountToToggleTranslagePageWhenTouching:U}=w;xe()?t(P=>{let _=R.reduce((B,j)=>(B[j.name]=j.shortcut,B),{...P.shortcuts}),H={...P,shortcuts:_};return U!==void 0&&(H.generalRule={...H.generalRule,fingerCountToToggleTranslagePageWhenTouching:U}),H}):Q.tabs.create({url:"chrome://extensions/shortcuts"}),s(!1)},onClose:()=>{s(!1)}}):null]})}function bi(){let[e,t,n,r]=ot(),[a,o]=Y(null),{t:i}=ae();ge(()=>{Ce().then(b=>{o(b)})},[e]);let s=b=>{t(x=>({...x,debug:b}))},c=b=>{t(()=>({...b}))},u=b=>{try{let x=JSON.parse(b.target.value);if(!Array.isArray(x)){St("Invalid rules, rules must be an array");return}let h={...e};h.rules=x,c(h),Xe(i("saved"))}catch(x){St(`Invalid JSON ${x.message}`)}},l=b=>{try{let x=JSON.parse(b.target.value);c(x),Xe(i("saved"))}catch(x){St(`Invalid JSON ${x.message}`)}},g=b=>{b.preventDefault()},f=b=>{b.preventDefault(),c(Yt()),Xe(i("resetSuccess")),setTimeout(()=>{Sn().catch(x=>{V.error("clean local config error",x)})},500)},m=b=>{b.preventDefault();let x={...e};delete x.rules,c(x)},p=`[{
  "matches": "www.google.com",
  "selectors": [".title"]
}, {
  "matches": "*.twitter.com",
  "selectors": [".text"],
  "excludeSelectors": ["footer"]
}]`;return a?d("div",{children:[d("div",{class:"nav",children:d("strong",{class:"text-lg",children:i("developer")})}),d("fieldset",{children:d("label",{for:"switch",children:[d("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{s(!a.debug)},checked:a.debug}),i("toggleDebug")]})}),d("details",{class:"py-2",children:[d("summary",{children:"Edit User Rules"}),d("textarea",{rows:10,onChange:u,placeholder:p,value:e.rules?JSON.stringify(e.rules||[],null,2):""}),d("div",{children:[d("a",{href:"#",class:"mr-3 !py-2",onClick:g,role:"button",children:i("save")}),d("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[i("help"),"?"]}),d("a",{href:"#",onClick:m,class:"text-sm secondary mr-2",children:i("reset")})]})]}),d("details",{class:"py-2",children:[d("summary",{children:"Edit User Config"}),d("textarea",{rows:10,onChange:l,value:JSON.stringify(e,null,2)}),d("div",{children:[d("a",{href:"#",class:"mr-3 !py-2",onClick:g,role:"button",children:i("save")}),d("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[i("help"),"?"]}),d("a",{href:"#",onClick:f,class:"text-sm secondary mr-2",children:i("reset")})]})]}),d("details",{class:"py-2",children:[d("summary",{children:"Click to expand the final config"}),d("pre",{children:d("code",{children:JSON.stringify(a,null,2)})})]})]}):d("div",{children:"loading"})}function yi(){let[e,t,n,r]=ot(),[a,o]=Y(null),{t:i}=ae();ge(()=>{Ce().then(g=>{o(g)})},[]);let s=g=>{t(()=>({...g}))},c=g=>{try{let f=JSON.parse(g.target.value);s(f)}catch(f){St(`Invalid JSON ${f.message}`)}},u=g=>{g.preventDefault();let f=document.createElement("input");f.setAttribute("type","file"),f.setAttribute("accept","text/plain"),f.style.display="none",document.body.appendChild(f),f.oninput=m=>{let p=m.target,b=new FileReader;b.onload=function(){try{let x=JSON.parse(b.result);s(x),Xe(i("successImportConfig"))}catch(x){St(`Invalid JSON ${x.message}`)}},b.readAsText(p.files[0])},f.click(),document.body.removeChild(f)},l=g=>{g.preventDefault(),confirm(i("confirmResetConfig"))&&(s(Yt()),Xe(i("resetSuccess")),setTimeout(()=>{Sn().catch(f=>{V.error("clean local config error",f)})},500))};return d("div",{children:[d("div",{class:"nav",children:d("strong",{class:"text-lg",children:i("import_export")})}),d("div",{class:"pb-2",children:[d("a",{class:"mr-2 secondary",onClick:u,href:"#",role:"button",children:[d("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[d("path",{fill:"none",d:"M0 0h24v24H0z"}),d("path",{d:"M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"})]}),i("import")]}),d("a",{href:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),download:"immersive-translate-backup-"+new Date().toISOString().replace(/T/,"_").replace(/\..+/,"").replace(/\:/g,".")+".txt",class:"secondary mr-4",role:"button",children:[d("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[d("path",{fill:"none",d:"M0 0h24v24H0z"}),d("path",{d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"})]}),i("export")]}),d("a",{href:"#",onClick:l,class:"secondary text-sm",children:i("reset")})]}),d("details",{class:"pt-4",children:[d("summary",{children:i("clickToExpandConfig")}),d("pre",{children:d("code",{children:JSON.stringify(e,null,2)})})]})]})}function Fa(){return Q.runtime.getManifest().version}var Rh="buildinConfig",Ih={},af=Xc(Rh,Ih);function xi(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}function Ti(e,t=2e3){return n=>{let r,a=0;return o=>{++a==e&&(n(o),a=0),clearTimeout(r),r=setTimeout(()=>a=0,t)}}}async function of(){let e=["bingGlobalConfig","baiduGlobalConfig"];for(let t of e)await Q.storage.local.remove(t);xe()||await ou()}function sf(){return xe()?Promise.resolve("0 B"):ps()}var Nh=({date:e})=>{let{t}=ae();return d("p",{class:"text-sm",children:[t("The local rules are up to date")," ",new Date(e).toLocaleString()]})},Dh=({date:e})=>{let{t}=ae();return d("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},Oh=()=>{let{t:e}=ae();return d("p",{class:"text-sm","aria-busy":!0,children:[e("Checking for updates"),"..."]})},Fh=()=>{let{t:e}=ae();return d("p",{class:"text-sm",children:[e("Rules are being synchronized"),"..."]})},Hh=({minVersion:e})=>{let{t}=ae();return d("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},Uh=({latestVersion:e})=>{let{t}=ae();return d("p",{class:"text-sm",children:[t("foundNewVersion"),":"," ",d("a",{href:"https://github.com/immersive-translate/immersive-translate/releases",children:e})]})},Bh=()=>{let{t:e}=ae();return d("p",{class:"text-sm",children:e("theLocalExtensionIsUpToUpdate")})},$h=({message:e,handleSyncing:t,date:n})=>{let{t:r}=ae();return d("p",{class:"text-sm",children:[r("failToSyncRules")," ",d("a",{onClick:t,children:r("retry")}),d("br",{}),r("failedReason"),"\uFF1A",e,d("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function vi(){let[e,t]=Y(null),{t:n}=ae(),[r,a]=Y(n("calculating")+"..."),[o,i]=Y(null),[s,c]=af(),[u,l]=Y(null),[g,f]=Y(""),[m,p]=Y(!1),[b,x]=Y(!1),[h,y]=Y(null),[S,A]=Y(null),[D,v,L,O]=ot(),[w,R]=Y(!1),U=Fa(),P=async()=>{f("");let j=o;if(o===null)try{let Z=await En({url:qo});Z?(i(Z),j=Z,p(!0)):(f(n("unknownError")),l(null))}catch(Z){l(null),f(Z.message);return}j!==null?(c(j),l(!1),t(j.buildinConfigUpdatedAt)):(f(n("canNotFetchRemoteRule")),l(null))};ge(()=>{Ce().then(j=>{let Z=j.buildinConfigUpdatedAt;y(j);let ee=new Date(Z);t(Z),En({url:qo}).then(C=>{let $=C.minVersion,X=U;i(C);let E=C.latestVersion;if(E&&(xi(X,E)?A(!0):A(!1)),xi(X,$)){let I=C.buildinConfigUpdatedAt;new Date(I)>ee?(l(!0),P()):l(!1)}else x(!0),l(null)}).catch(C=>{l(null),f(C.message)})}),sf().then(j=>{a(j)})},[]),ge(()=>{Ce().then(j=>{y(j)})},[D,e]);let _=j=>{v(Z=>{let ee=!Z.alpha;return ee?Xe(n("enableAlphaSuccess")):Xe(n("disableAlphaSuccess")),{...Z,alpha:ee}})},H=j=>{j.preventDefault(),j.stopPropagation(),R(!0),of().then(()=>{R(!1),Xe("\u6E05\u7406\u6210\u529F"),a("0 B")}).catch(Z=>{R(!1),St(Z.message)})},B=j=>{v(Z=>({...Z,cache:j}))};return h?d("div",{class:"text-sm",children:[d("div",{class:"nav",children:d("strong",{onClick:Ti(7)(_),class:"text-lg immersive-translate-no-select",children:n("about")})}),d("p",{onClick:Ti(7)(_),class:"mb-2 immersive-translate-no-select",children:["V",U]}),S===!1&&d(Uh,{latestVersion:o?.latestVersion}),S===!0&&d(Bh,{}),d("fieldset",{children:d("label",{for:"switch",children:[d("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{B(!h.cache)},checked:h.cache}),n("allowCacheTranslations")]})}),!xe()&&r&&d("p",{class:"text-sm",children:[n("cacheSize"),"\xA0",r," \xA0 ",w?d("span",{children:[n("cleaning"),"..."]}):d("a",{class:"text-sm",href:"#",onClick:H,children:n("cleanCache")})]}),g?d($h,{handleSyncing:P,message:g,date:e||""}):b?d(Hh,{minVersion:o.minVersion}):u===null?d(Oh,{}):u===!0?d(Fh,{}):m?d(Dh,{date:e}):d(Nh,{date:e})]}):null}function wi(){let e=is(),[t,n,r,a]=ot(),[o,i]=Y(null),{t:s}=ae();ge(()=>{Ce().then(g=>{At({config:g,url:globalThis.location.href}).then(f=>{i(f)})})},[t]);let c=g=>{n(f=>({...f,translationTheme:g}))},u=g=>{n(f=>({...f,interfaceLanguage:g}))};if(!o)return d("div",{children:"loading"});let l=o.config;return d("div",{children:[d("div",{class:"nav",children:d("strong",{class:"text-lg",children:s("advanced")})}),d("div",{class:"nav",children:[d(Te,{title:s("translate all areas of the page"),description:s("translationAreaDescription")}),d("label",{for:"switch",children:d("input",{type:"checkbox",id:"switch",name:"switch",role:"switch",onChange:g=>{let f=g.target.checked;n(m=>({...m,translationArea:f?"body":"main"}))},checked:l.translationArea==="body"})})]}),d("div",{class:"nav",children:[d(Te,{title:s("translate to the bottom of the page"),description:s("translateToThePageEndImmediatelyDescription")}),d("label",{for:"switch",children:d("input",{type:"checkbox",onChange:g=>{let f=g.target.checked;n(m=>({...m,translationStartMode:f?"immediate":"dynamic"}))},checked:l.translationStartMode==="immediate",id:"switch",name:"switch",role:"switch"})})]}),d("div",{class:"nav",children:[d(Te,{title:s("translationLineBreakSettingTitle"),description:s("translationLineBreakSettingDescription",{count:e.generalRule.blockMinTextCount})}),d("select",{class:"select",onChange:g=>{n(f=>{let m=f.generalRule||{};return parseInt(g.target.value)===0?m={...m,blockMinTextCount:0,blockMinWordCount:0}:m={...m,blockMinTextCount:e.generalRule.blockMinTextCount,blockMinWordCount:e.generalRule.blockMinWordCount},{...f,generalRule:m}})},children:[d("option",{value:32,selected:l.generalRule.blockMinTextCount>0,children:s("smartLineBreak")}),d("option",{value:0,selected:l.generalRule.blockMinTextCount===0,children:s("alwaysLineBreak")})]})]}),d("div",{class:"nav",children:[d(Te,{title:s("tempTranslateDomainTitle"),description:s("tempTranslateDomainDescription")}),d("select",{class:"select",onChange:g=>{n(f=>({...f,tempTranslateDomainMinutes:parseInt(g.target.value)}))},children:[d("option",{value:0,selected:l.tempTranslateDomainMinutes===0,children:s("disabled")}),d("option",{value:5,selected:l.tempTranslateDomainMinutes===5,children:s("xMinutes",{count:5})}),d("option",{value:10,selected:l.tempTranslateDomainMinutes===10,children:s("xMinutes",{count:10})}),d("option",{value:30,selected:l.tempTranslateDomainMinutes===30,children:s("xMinutes",{count:30})})]})]}),d("div",{class:"nav",children:[d(Te,{title:s("the number of characters to be translated first")}),d("label",{for:"count",children:d("input",{type:"number",id:"count",onChange:g=>{let f=g.target.value;n(m=>({...m,immediateTranslationTextCount:parseInt(f)}))},name:"count",value:l.immediateTranslationTextCount,placeholder:"Text Length",required:!0})})]})]})}var lf=Qn({presets:[Wr(),Gr()]});function cf(){let e=document.getElementById("mount");e&&(async()=>{po(lf);let t=await Ce();t.debug&&V.setLevel("debug"),qa(d(Zg,{lang:t.interfaceLanguage,fallbackLang:"zh-CN",translations:Na,children:d(jh,{donateUrl:t.donateUrl})}),e)})()}function jh(e){let t=zo(),{t:n}=ae(),r=Fa(),a=[{name:n("general"),props:{href:"#general",className:"secondary"}},{name:n("interface"),props:{href:"#interface",className:"secondary"}},{name:n("import_export"),props:{href:"#import_export",className:"secondary"}},{name:n("about"),props:{href:"#about",className:"secondary"}}];return a.forEach(o=>{t===o.props.href&&(o.props.className="primary",o.props["aria-current"]="page")}),d(Ze,{children:d("main",{class:"container-fluid",children:[d("aside",{children:d("nav",{class:"flex flex-col h-full justify-between",children:[d("div",{children:[d("hgroup",{children:[d("h4",{class:"cursor-pointer p-0 m-0",onClick:()=>{globalThis.location.hash="#general"},children:n("browser.brandName")}),d("h6",{class:"!text-sm",children:r})]}),d("ul",{children:a.map((o,i)=>d("li",{class:"li",children:d("a",{...o.props,children:o.name})},`nav-${i}`))})]}),d("div",{class:"m-0 p-0 flex flex-col",children:[d("a",{class:"py-3 text-xs no-focus secondary",href:e.donateUrl,children:[n("donateCafe"),"\u2615\uFE0F"]}),d("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/CHANGELOG.html",children:n("changelog")}),d("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/",children:n("document")}),d("a",{class:"py-3 text-xs no-focus secondary",href:"#developer",children:n("developer")})]})]})}),d("div",{role:"main",children:d(jo,{value:t,defaultCase:d(Oa,{}),cases:{"#general":d(Oa,{}),"#interface":d(hi,{}),"#import_export":d(yi,{}),"#about":d(vi,{}),"#advanced":d(wi,{}),"#developer":d(bi,{})}})})]})})}cf();
