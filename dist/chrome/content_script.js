var Kf=Object.defineProperty;var Gf=(e,t)=>{for(var n in t)Kf(e,n,{get:t[n],enumerable:!0})};var y={BUILD_TIME:"2023-01-25T15:49:06.600Z",VERSION:"0.2.23",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};var oi={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00"};var si={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var ii={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var Yf=[{code:"zh-CN",messages:oi},{code:"zh-TW",messages:si},{code:"en",messages:ii}],qt={};for(let e of Yf)qt[e.code]=e.messages;var Vt="Immersive Translate",de="immersive-translate";var le="immersiveTranslate",Ha=`${le}Container`,Kt=`${le}SpecifiedContainer`,yr="buildinConfig",Fn="localConfig",$a="openOptionsPage";var Tr=`${le}PageTranslatedStatus`,li=`${le}PageUrlChanged`,Gt=`${le}ReceiveCommand`,mh=`${le}PopupReceiveMessage`,xr="immersive-translate.owenyoung.com",hh=`https://${xr}/`,ci=`https://${xr}/buildin_config.json`,Jt=`${le}Mark`,Ba="immersiveTranslateEffect",Ee=`${le}Root`,Ua=`data-${de}-effect`,Yt=`${le}TranslatedMark`,Xt=`${le}ParagraphId`,Ge=`${le}AtomicBlockMark`,Je=`${le}ExcludeMark`,wr=`${le}StayOriginalMark`,gn=`${le}PreWhitespaceMark`,xt=`${le}InlineMark`,Qt=`${le}BlockMark`,Hn=`${le}Left`,vr=`${le}Right`,bh=`${le}Width`,yh=`${le}Height`,ui=`${le}Top`,fi=`${le}FontSize`,$n="lastRunTime",ja=`${le}GlobalStyleMark`,gi=["@","#"],Sr=" --- ",Wa=`
`,qe=`${de}-target-wrapper`,Er=`${de}-pdf-target-container`,di=`${de}-target-inner`,Th=`${de}-source-wrapper`,za=`${de}-target-translation-block-wrapper`,pi=`${de}-target-translation-pdf-block-wrapper`,mi=`${de}-target-translation-pre-whitespace`,qa=`${de}-target-translation-inline-wrapper`;var kt=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],Va={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var hi=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var Lr="zh-CN";function wt(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():y}var Y=wt();function he(){return Y.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function bi(){return typeof Deno<"u"}var Xf=wt(),Bn=Xf.PROD==="1";function yi(e,t,n){let r=e.querySelectorAll("footer"),a=e.querySelectorAll("aside"),o=Array.from(r).concat(Array.from(a)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),l=[];for(let c of i)s.length>0&&s[0].contains(c)||l.push(c);for(let c=0;c<t.length;c++){let g=t[c].element;for(let d=c+1;d<t.length;d++){let f=t[d].element;if(g.contains(f))t.splice(d,1),d--;else if(f.contains(g)){t.splice(c,1),c--;break}else g===f&&(t.splice(d,1),d--)}}return t.filter(c=>{let g=c.element;if(c.reserve)return!0;let d=!1,f=!1;for(let p of o)if(g===p||p.contains(g)){d=!0;break}if(d)return!1;for(let p of l){if(g.nodeName==="H1")continue;let T=p.querySelector("h1");if(!(T&&vi(T.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(g===p||p.contains(g))){f=!0;break}}return!f}).map(c=>c.element)}function dn(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function _r(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function Ga(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function Un(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function Ye(e,t){let n=[];for(let r of t){let a=e.querySelectorAll(r);for(let o of a)n.push(o)}return n}function Qf(e,t){let n=function(o){return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE?o.nodeType===Node.ELEMENT_NODE&&Ue(o,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;r.nextNode();){let o=r.currentNode;if(o.nodeType===Node.ELEMENT_NODE){if(Q(o,xt)){if(a===!0)return!0;continue}if(!t.inlineTags.includes(o.nodeName))return!1}}return!0}function nt(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?Q(e,Qt)||e.nodeName==="BR"?!1:Q(e,xt)?!0:Qf(e,t):Q(e,xt):!1}function Ti(e,t){for(let n of t)if(n===e)return!0;return!1}function xi(e,t){return!!t.metaTags.includes(e.nodeName)}function Ue(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:a}=t,o=[];return n&&a&&a.length>0?o=a||[]:o=a.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&Q(e,Je)?!0:e.nodeType===Node.ELEMENT_NODE&&Q(e,Kt)?!1:!!o.includes(e.nodeName)}function wi(e,t,n,r){let a=jn(r),o=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||Xa(s)||Ja(s)||Ya(s)||o.test(s)?!1:vi(i,t,n)}function vi(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function Ja(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function Ya(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function Xa(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function Si(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function Q(e,t){return Zf(e,t,"1")}function Zf(e,t,n){return Bn?e[Ee]?!!(e[Ee]&&e[Ee][t]===n):!1:e.dataset[t]===n}function Ei(e,t){return Bn?e[Ee]?!!(e[Ee]&&e[Ee][t]):!1:e.dataset[t]!==void 0}function Ka(e){return e.replace(/\s/g," ")}function Cr(e){let t=e.querySelector("main"),n="";if(t&&(n=Ka(t.innerText||t.textContent||"")),n.length>=10)return n;let r=e.querySelectorAll("article");if(r.length>0)for(let a of r)n=Ka(a.innerText||a.textContent||"");return n.length>=10||(n=Ka(e.innerText||e.textContent||"")),n}function kr(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function re(e,t,n){e.isContentEditable||(e.dataset[Ba]||(e.dataset[Ba]="1"),Bn?(e[Ee]||(e[Ee]={}),e[Ee][t]||(e[Ee][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function Li(e,t){if(Bn){if(!e[Ee]||!e[Ee][t])return;delete e[Ee][t]}else delete e.dataset[t]}function Pt(e,t){return Bn?!e[Ee]||!e[Ee][t]?void 0:e[Ee][t]:e.dataset[t]}function pn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||Q(e,wr))&&(n=!0),n}function _i(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function jn(e){let{config:t}=e,n=gi;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function Pr(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function Ci(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function Qa(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:a,additionalInlineSelectors:o,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:l,globalStyles:u,stayOriginalTags:c,stayOriginalSelectors:g,globalAttributes:d}=t,f=Object.keys(u);if(f.length>0)for(let F of f){let se=Ye(document.body,[F]);for(let ue of se)if(!Q(ue,ja)){re(ue,ja,"1");let G=u[F];ue.style.cssText+=G}}let p=Object.keys(d);if(p.length>0)for(let F of p){let se=d[F],ue=Object.keys(se),G=Ye(document.body,[F]);for(let J of G)for(let ee of ue){let pe=se[ee];J.getAttribute(ee)!==pe&&(pe===null?J.removeAttribute(ee):J.setAttribute(ee,pe))}}let T=[...n,...r],b=[...a,...o],m=[...s],h=l.map(F=>F.toLowerCase()),x=i;Ye(document.body,T).forEach(F=>{Q(F,Je)||re(F,Je,"1")});let R=[];if(m.length>0&&(R=Ye(document.body,m).filter(F=>!Q(F,Ge))),h.length>0){let F=c.reduce((G,J)=>{let ee=J.toLowerCase();return G.push(`<${ee}>`,`</${ee}>`,`<${ee} />`),G},[]),se=[">http://",">https://"];F.push(...se);let ue=Ye(document.body,h).filter(G=>{if(Q(G,Ge))return!1;{let ee=G.innerHTML;return!F.some(We=>ee.includes(We))}});R.push(...ue)}R.forEach(F=>{Q(F,Ge)||re(F,Ge,"1")});let U=[];if(b.length>0)for(let F of e)U.push(...Ye(F,b));U.forEach(F=>{re(F,xt,"1")});let z=[];if(x.length>0)for(let F of e)z.push(...Ye(F,x));z.forEach(F=>{re(F,Qt,"1")});let I=[];if(g.length>0)for(let F of e)I.push(...Ye(F,g));I.forEach(F=>{re(F,wr,"1")})}function ki(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}function Zt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=kt.map(a=>a.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":kt[a]}else return"auto";else return kt[r]}var Za=/iPhone/i,Pi=/iPod/i,Mi=/iPad/i,Ai=/\biOS-universal(?:.+)Mac\b/i,eo=/\bAndroid(?:.+)Mobile\b/i,Ri=/Android/i,mn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Mr=/Silk/i,vt=/Windows Phone/i,Ni=/\bWindows(?:.+)ARM\b/i,Di=/BlackBerry/i,Oi=/BB10/i,Ii=/Opera Mini/i,Fi=/\b(CriOS|Chrome)(?:.+)Mobile/i,Hi=/Mobile(?:.+)Firefox\b/i,$i=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function eg(e){return t=>t.test(e)}function Ar(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let a=eg(n),o={apple:{phone:a(Za)&&!a(vt),ipod:a(Pi),tablet:!a(Za)&&(a(Mi)||$i(t))&&!a(vt),universal:a(Ai),device:(a(Za)||a(Pi)||a(Mi)||a(Ai)||$i(t))&&!a(vt)},amazon:{phone:a(mn),tablet:!a(mn)&&a(Mr),device:a(mn)||a(Mr)},android:{phone:!a(vt)&&a(mn)||!a(vt)&&a(eo),tablet:!a(vt)&&!a(mn)&&!a(eo)&&(a(Mr)||a(Ri)),device:!a(vt)&&(a(mn)||a(Mr)||a(eo)||a(Ri))||a(/\bokhttp\b/i)},windows:{phone:a(vt),tablet:a(Ni),device:a(vt)||a(Ni)},other:{blackberry:a(Di),blackberry10:a(Oi),opera:a(Ii),firefox:a(Hi),chrome:a(Fi),device:a(Di)||a(Oi)||a(Ii)||a(Hi)||a(Fi)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var to="DENO",no="CHROME",Rr="FIREFOX";function tg(e){let t=no;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=Rr:/deno/i.test(n)&&(t=to)}catch{}return e===no&&t===no||e===Rr&&t===Rr||e===to&&t===to}function Bi(){return typeof Deno<"u"}function Ui(){return tg(Rr)}function ji(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var Wi={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},zi={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Wi,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Wi,query:()=>{},sendMessage:()=>{}}};var V;Bi()?V=zi:V=globalThis.browser;var qi={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},immediateTranslationPattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]}]};function ro(e){return Array.isArray(e)?e:e?[e]:[]}function ao(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function Mt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function Nr(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let a=e;return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))a[i]=s;else if(i.startsWith("additional")){let l=ro(s);a[i]=Array.from(new Set([...a[i],...l]))}else a[i]=ro(s)}),a}function ng(){if(Y.PROD==="1")return{};let e={};if(Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:Y.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:Y.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:Y.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return Y.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=Y.IMMERSIVE_TRANSLATE_SERVICE),Y.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),Y.MOCK==="1"&&(e.translationService="mock"),e}async function Dr(){let e=await V.storage.local.get(Fn);return e[Fn]?e[Fn]:{}}async function Vi(e){await V.storage.local.set({[Fn]:e})}async function Ki(){let e=await V.storage.local.get(yr),t={...qi,buildinConfigUpdatedAt:Y.BUILD_TIME};if(e[yr]){let d=e[yr],f=new Date(d.buildinConfigUpdatedAt),p=new Date(t.buildinConfigUpdatedAt);f>p&&(t=d)}let n={};if(!he()){let d=await V.commands.getAll();for(let f of d)f.name&&f.shortcut&&(n[f.name]=f.shortcut)}let r={...t,targetLanguage:Lr,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:t.generalRule,translationGeneralConfig:{engine:"google"},rules:[]},a=ng(),i=(await V.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},l=Object.assign({},s,a,i);if(!l.interfaceLanguage){let d=await rg();l.interfaceLanguage=d}let u=Object.assign(r,t),c=Object.keys(u),g=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let d of c){let f=d;if(f==="generalRule")typeof l[f]=="object"&&(u[f]=Nr(r[f],l[f]));else if(f==="translationServices"){let p=l[f]||{},T=t[f]||{},b=Object.keys(T),m=Object.keys(p),h=[...new Set([...b,...m])],x={};for(let v of h)x[v]={...T[v],...p[v]};u[f]=x}else if(typeof l[f]!="string"&&typeof l[f]!="boolean"&&typeof l[f]!="number"&&g.includes(f))l[f]&&(u[f]=Object.assign(u[f],l[f])),f==="shortcuts"&&(u[f]={...u[f],...n});else if(f==="rules"){if(Array.isArray(l[f])&&(u[f]=[...l[f],...u[f]]),Y.PROD==="0"&&Y.DEV_RULES){let p=JSON.parse(Y.DEV_RULES);u[f]=[...p,...u[f]]}}else l[f]!==void 0&&(u[f]=l[f])}return u.donateUrl=t.donateUrl,u.minVersion=t.minVersion,u.feedbackUrl=t.feedbackUrl,u}var rg=async()=>{let n=(await V.i18n.getAcceptLanguages()).map(r=>Zt(r)).find(r=>qt[r]);return n||"en"};function hn(){let e,t="pending",n=new Promise((r,a)=>{e={async resolve(o){await o,t="fulfilled",r(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var oo=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function Or(e,t){let n=hn(),r=setTimeout(()=>n.reject(new oo),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function Wn(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,o)=>{let i=()=>{clearTimeout(l),o(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{n?.removeEventListener("abort",i),a()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var Gi=class{#e=0;#t=[];#n=[];#r=hn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=hn()}}[Symbol.asyncIterator](){return this.iterate()}};var Xe={};Gf(Xe,{bgBlack:()=>Mg,bgBlue:()=>Dg,bgBrightBlack:()=>Hg,bgBrightBlue:()=>jg,bgBrightCyan:()=>zg,bgBrightGreen:()=>Bg,bgBrightMagenta:()=>Wg,bgBrightRed:()=>$g,bgBrightWhite:()=>qg,bgBrightYellow:()=>Ug,bgCyan:()=>Ig,bgGreen:()=>Rg,bgMagenta:()=>Og,bgRed:()=>Ag,bgRgb24:()=>Jg,bgRgb8:()=>Kg,bgWhite:()=>Fg,bgYellow:()=>Ng,black:()=>pg,blue:()=>yg,bold:()=>ig,brightBlack:()=>Xi,brightBlue:()=>_g,brightCyan:()=>kg,brightGreen:()=>Eg,brightMagenta:()=>Cg,brightRed:()=>Sg,brightWhite:()=>Pg,brightYellow:()=>Lg,cyan:()=>xg,dim:()=>lg,getColorEnabled:()=>og,gray:()=>vg,green:()=>hg,hidden:()=>gg,inverse:()=>fg,italic:()=>cg,magenta:()=>Tg,red:()=>mg,reset:()=>sg,rgb24:()=>Gg,rgb8:()=>Vg,setColorEnabled:()=>ag,strikethrough:()=>dg,stripColor:()=>Xg,underline:()=>ug,white:()=>wg,yellow:()=>bg});var{Deno:Ji}=globalThis,Yi=typeof Ji?.noColor=="boolean"?Ji.noColor:!0,so=!Yi;function ag(e){Yi||(so=e)}function og(){return so}function H(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function $(e,t){return so?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function sg(e){return $(e,H([0],0))}function ig(e){return $(e,H([1],22))}function lg(e){return $(e,H([2],22))}function cg(e){return $(e,H([3],23))}function ug(e){return $(e,H([4],24))}function fg(e){return $(e,H([7],27))}function gg(e){return $(e,H([8],28))}function dg(e){return $(e,H([9],29))}function pg(e){return $(e,H([30],39))}function mg(e){return $(e,H([31],39))}function hg(e){return $(e,H([32],39))}function bg(e){return $(e,H([33],39))}function yg(e){return $(e,H([34],39))}function Tg(e){return $(e,H([35],39))}function xg(e){return $(e,H([36],39))}function wg(e){return $(e,H([37],39))}function vg(e){return Xi(e)}function Xi(e){return $(e,H([90],39))}function Sg(e){return $(e,H([91],39))}function Eg(e){return $(e,H([92],39))}function Lg(e){return $(e,H([93],39))}function _g(e){return $(e,H([94],39))}function Cg(e){return $(e,H([95],39))}function kg(e){return $(e,H([96],39))}function Pg(e){return $(e,H([97],39))}function Mg(e){return $(e,H([40],49))}function Ag(e){return $(e,H([41],49))}function Rg(e){return $(e,H([42],49))}function Ng(e){return $(e,H([43],49))}function Dg(e){return $(e,H([44],49))}function Og(e){return $(e,H([45],49))}function Ig(e){return $(e,H([46],49))}function Fg(e){return $(e,H([47],49))}function Hg(e){return $(e,H([100],49))}function $g(e){return $(e,H([101],49))}function Bg(e){return $(e,H([102],49))}function Ug(e){return $(e,H([103],49))}function jg(e){return $(e,H([104],49))}function Wg(e){return $(e,H([105],49))}function zg(e){return $(e,H([106],49))}function qg(e){return $(e,H([107],49))}function At(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function Vg(e,t){return $(e,H([38,5,At(t)],39))}function Kg(e,t){return $(e,H([48,5,At(t)],49))}function Gg(e,t){return typeof t=="number"?$(e,H([38,2,t>>16&255,t>>8&255,t&255],39)):$(e,H([38,2,At(t.r),At(t.g),At(t.b)],39))}function Jg(e,t){return typeof t=="number"?$(e,H([48,2,t>>16&255,t>>8&255,t&255],49)):$(e,H([48,2,At(t.r),At(t.g),At(t.b)],49))}var Yg=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Xg(e){return e.replace(Yg,"")}function Ir(e,t){let n=null,r=null,a=(...o)=>{a.clear(),r=()=>{a.clear(),e.call(a,...o)},n=setTimeout(r,t)};return a.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},a.flush=()=>{r?.()},Object.defineProperty(a,"pending",{get:()=>typeof n=="number"}),a}var jr,B,nl,Qg,zn,Qi,rl,$r={},al=[],Zg=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Rt(e,t){for(var n in t)e[n]=t[n];return e}function ol(e){var t=e.parentNode;t&&t.removeChild(e)}function sl(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?jr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return Fr(e,i,r,a,null)}function Fr(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++nl};return a==null&&B.vnode!=null&&B.vnode(o),o}function ft(e){return e.children}function Hr(e,t){this.props=e,this.context=t}function bn(e,t){if(t==null)return e.__?bn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?bn(e):null}function il(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return il(e)}}function io(e){(!e.__d&&(e.__d=!0)&&zn.push(e)&&!Br.__r++||Qi!==B.debounceRendering)&&((Qi=B.debounceRendering)||setTimeout)(Br)}function Br(){for(var e;Br.__r=zn.length;)e=zn.sort(function(t,n){return t.__v.__b-n.__v.__b}),zn=[],e.some(function(t){var n,r,a,o,i,s;t.__d&&(i=(o=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=Rt({},o)).__v=o.__v+1,lo(s,o,a,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??bn(o),o.__h),fl(r,o),o.__e!=i&&il(o)))})}function ll(e,t,n,r,a,o,i,s,l,u){var c,g,d,f,p,T,b,m=r&&r.__k||al,h=m.length;for(n.__k=[],c=0;c<t.length;c++)if((f=n.__k[c]=(f=t[c])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Fr(null,f,null,null,f):Array.isArray(f)?Fr(ft,{children:f},null,null,null):f.__b>0?Fr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(d=m[c])===null||d&&f.key==d.key&&f.type===d.type)m[c]=void 0;else for(g=0;g<h;g++){if((d=m[g])&&f.key==d.key&&f.type===d.type){m[g]=void 0;break}d=null}lo(e,f,d=d||$r,a,o,i,s,l,u),p=f.__e,(g=f.ref)&&d.ref!=g&&(b||(b=[]),d.ref&&b.push(d.ref,null,f),b.push(g,f.__c||p,f)),p!=null?(T==null&&(T=p),typeof f.type=="function"&&f.__k===d.__k?f.__d=l=cl(f,l,e):l=ul(e,f,d,m,p,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=bn(d))}for(n.__e=T,c=h;c--;)m[c]!=null&&(typeof n.type=="function"&&m[c].__e!=null&&m[c].__e==n.__d&&(n.__d=bn(r,c+1)),dl(m[c],m[c]));if(b)for(c=0;c<b.length;c++)gl(b[c],b[++c],b[++c])}function cl(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?cl(r,t,n):ul(n,r,r,a,r.__e,t));return t}function ul(e,t,n,r,a,o){var i,s,l;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),i=null;else{for(s=o,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==a)break e;e.insertBefore(a,o),i=o}return i!==void 0?i:a.nextSibling}function ed(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||Ur(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Ur(e,o,t[o],n[o],r)}function Zi(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Zg.test(t)?n:n+"px"}function Ur(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Zi(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Zi(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?tl:el,o):e.removeEventListener(t,o?tl:el,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function el(e){this.l[e.type+!1](B.event?B.event(e):e)}function tl(e){this.l[e.type+!0](B.event?B.event(e):e)}function lo(e,t,n,r,a,o,i,s,l){var u,c,g,d,f,p,T,b,m,h,x,v,R,U=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(u=B.__b)&&u(t);try{e:if(typeof U=="function"){if(b=t.props,m=(u=U.contextType)&&r[u.__c],h=u?m?m.props.value:u.__:r,n.__c?T=(c=t.__c=n.__c).__=c.__E:("prototype"in U&&U.prototype.render?t.__c=c=new U(b,h):(t.__c=c=new Hr(b,h),c.constructor=U,c.render=nd),m&&m.sub(c),c.props=b,c.state||(c.state={}),c.context=h,c.__n=r,g=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),U.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Rt({},c.__s)),Rt(c.__s,U.getDerivedStateFromProps(b,c.__s))),d=c.props,f=c.state,g)U.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(U.getDerivedStateFromProps==null&&b!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(b,h),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(b,c.__s,h)===!1||t.__v===n.__v){c.props=b,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(z){z&&(z.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(b,c.__s,h),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,f,p)})}if(c.context=h,c.props=b,c.__v=t,c.__P=e,x=B.__r,v=0,"prototype"in U&&U.prototype.render)c.state=c.__s,c.__d=!1,x&&x(t),u=c.render(c.props,c.state,c.context);else do c.__d=!1,x&&x(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++v<25);c.state=c.__s,c.getChildContext!=null&&(r=Rt(Rt({},r),c.getChildContext())),g||c.getSnapshotBeforeUpdate==null||(p=c.getSnapshotBeforeUpdate(d,f)),R=u!=null&&u.type===ft&&u.key==null?u.props.children:u,ll(e,Array.isArray(R)?R:[R],t,n,r,a,o,i,s,l),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),T&&(c.__E=c.__=null),c.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=td(n.__e,t,n,r,a,o,i,l);(u=B.diffed)&&u(t)}catch(z){t.__v=null,(l||o!=null)&&(t.__e=s,t.__h=!!l,o[o.indexOf(s)]=null),B.__e(z,t,n)}}function fl(e,t){B.__c&&B.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){B.__e(r,n.__v)}})}function td(e,t,n,r,a,o,i,s){var l,u,c,g=n.props,d=t.props,f=t.type,p=0;if(f==="svg"&&(a=!0),o!=null){for(;p<o.length;p++)if((l=o[p])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,o[p]=null;break}}if(e==null){if(f===null)return document.createTextNode(d);e=a?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),o=null,s=!1}if(f===null)g===d||s&&e.data===d||(e.data=d);else{if(o=o&&jr.call(e.childNodes),u=(g=n.props||$r).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!s){if(o!=null)for(g={},p=0;p<e.attributes.length;p++)g[e.attributes[p].name]=e.attributes[p].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(ed(e,d,g,a,s),c)t.__k=[];else if(p=t.props.children,ll(e,Array.isArray(p)?p:[p],t,n,r,a&&f!=="foreignObject",o,i,o?o[0]:n.__k&&bn(n,0),s),o!=null)for(p=o.length;p--;)o[p]!=null&&ol(o[p]);s||("value"in d&&(p=d.value)!==void 0&&(p!==e.value||f==="progress"&&!p||f==="option"&&p!==g.value)&&Ur(e,"value",p,g.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==e.checked&&Ur(e,"checked",p,g.checked,!1))}return e}function gl(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){B.__e(r,n)}}function dl(e,t,n){var r,a;if(B.unmount&&B.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||gl(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){B.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&dl(r[a],t,typeof e.type!="function");n||e.__e==null||ol(e.__e),e.__=e.__e=e.__d=void 0}function nd(e,t,n){return this.constructor(e,n)}function Wr(e,t,n){var r,a,o;B.__&&B.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],lo(t,e=(!r&&n||t).__k=sl(ft,null,[e]),a||$r,$r,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?jr.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),fl(o,e)}function co(e,t){var n={__c:t="__cC"+rl++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(io)},this.sub=function(i){a.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}jr=al.slice,B={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},nl=0,Qg=function(e){return e!=null&&e.constructor===void 0},Hr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Rt({},this.state),typeof e=="function"&&(e=e(Rt({},n),this.props)),e&&Rt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),io(this))},Hr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),io(this))},Hr.prototype.render=ft,zn=[],Br.__r=0,rl=0;var Vn,Te,uo,pl,qn=0,wl=[],zr=[],ml=B.__b,hl=B.__r,bl=B.diffed,yl=B.__c,Tl=B.unmount;function Vr(e,t){B.__h&&B.__h(Te,e,qn||t),qn=0;var n=Te.__H||(Te.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:zr}),n.__[e]}function we(e){return qn=1,rd(El,e)}function rd(e,t,n){var r=Vr(Vn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):El(void 0,t),function(o){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,o);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=Te,!Te.u)){Te.u=!0;var a=Te.shouldComponentUpdate;Te.shouldComponentUpdate=function(o,i,s){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(c){return c.__c});if(l.every(function(c){return!c.__N}))return!a||a.call(this,o,i,s);var u=!1;return l.forEach(function(c){if(c.__N){var g=c.__[0];c.__=c.__N,c.__N=void 0,g!==c.__[0]&&(u=!0)}}),!!u&&(!a||a.call(this,o,i,s))}}return r.__N||r.__}function rt(e,t){var n=Vr(Vn++,3);!B.__s&&Sl(n.__H,t)&&(n.__=e,n.i=t,Te.__H.__h.push(n))}function go(e){return qn=5,vl(function(){return{current:e}},[])}function vl(e,t){var n=Vr(Vn++,7);return Sl(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Kn(e,t){return qn=8,vl(function(){return e},t)}function po(e){var t=Te.context[e.__c],n=Vr(Vn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Te)),t.props.value):e.__}function ad(){for(var e;e=wl.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(qr),e.__H.__h.forEach(fo),e.__H.__h=[]}catch(t){e.__H.__h=[],B.__e(t,e.__v)}}B.__b=function(e){typeof e.type!="function"||e.o||e.type===ft?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Te=null,ml&&ml(e)},B.__r=function(e){hl&&hl(e),Vn=0;var t=(Te=e.__c).__H;t&&(uo===Te?(t.__h=[],Te.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=zr,n.__N=n.i=void 0})):(t.__h.forEach(qr),t.__h.forEach(fo),t.__h=[])),uo=Te},B.diffed=function(e){bl&&bl(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(wl.push(t)!==1&&pl===B.requestAnimationFrame||((pl=B.requestAnimationFrame)||od)(ad)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==zr&&(n.__=n.__V),n.i=void 0,n.__V=zr})),uo=Te=null},B.__c=function(e,t){t.some(function(n){try{n.__h.forEach(qr),n.__h=n.__h.filter(function(r){return!r.__||fo(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],B.__e(r,n.__v)}}),yl&&yl(e,t)},B.unmount=function(e){Tl&&Tl(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{qr(r)}catch(a){t=a}}),n.__H=void 0,t&&B.__e(t,n.__v))};var xl=typeof requestAnimationFrame=="function";function od(e){var t,n=function(){clearTimeout(r),xl&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);xl&&(t=requestAnimationFrame(n))}function qr(e){var t=Te,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Te=t}function fo(e){var t=Te;e.__c=e.__(),Te=t}function Sl(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function El(e,t){return typeof t=="function"?t(e):t}var rb=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var id=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function Kr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,a=0,o=0;function i(){let c=Date.now();return c-a>t?(o=1,a=c,0):(o<e?o++:(a+=t,o=1),a-c)}let s=[];function l(){let c=Date.now();if(s.length<e)return s.push(c),0;let g=s.shift()+t;return c>=g?(s.push(c),0):(s.push(g),g-c)}let u=n?l:i;return c=>{let g=function(...d){if(!g.isEnabled)return(async()=>c.apply(this,d))();let f;return new Promise((p,T)=>{f=setTimeout(()=>{p(c.apply(this,d)),r.delete(f)},u()),r.set(f,T)})};return g.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new id);r.clear(),s.splice(0,s.length)},g.isEnabled=!0,g}}var mo;function Eo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Ml(e,t=","){return e.map(Eo).join(t)}var Al=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Gr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Rl(e,t="@media "){return t+St(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function St(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function ld(){}var Pe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Nl(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function wo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(Nl(e),15)<<18}var cd=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Lo({n:e,i:t,v:n=[]},r,a,o){for(let s of(e&&(e=Eo({n:e,i:t,v:n})),o=[...St(o)],n)){let l=r.theme("screens",s);for(let u of St(l&&Rl(l)||r.v(s))){var i;o.push(u),a|=l?67108864|wo(u):s=="dark"?1073741824:u[0]=="@"?wo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~cd.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var _o=new Map;function Ll(e){if(e.d){let t=[],n=ho(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?ho(r,o=>ho(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=o.indexOf(s[1]);return~l?o.slice(0,l)+s[0]+o.slice(l+s[1].length):bo(o,i)}return bo(i,o)})):r,"&"),r=>bo(r,e.n?"."+Al(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function ho(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function bo(e,t){return e.replace(/&/g,t)}var ud=new Intl.Collator("en",{numeric:!0});function fd(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=Dl(e[a],t)?n=a+1:r=a}return r}function Dl(e,t){let n=e.p&Pe.o;return n==(t.p&Pe.o)&&(n==Pe.b||n==Pe.o)?0:e.p-t.p||e.o-t.o||ud.compare(e.n,t.n)}function yo(e,t){return Math.round(parseInt(e,16)*t)}function gd(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[yo(e.substr(1,o),i),yo(e.substr(1+o,o),i),yo(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function Ol(e,t,n,r,a=[]){return function o(i,{n:s,p:l,r:u=[],i:c},g){let d=[],f="",p=0,T=0;for(let h in i||{}){var b,m;let x=i[h];if(h[0]=="@"){if(!x)continue;if(h[1]=="a"){d.push(...Il(s,l,ko(""+x),g,l,u,c,!0));continue}if(h[1]=="l"){for(let v of St(x))d.push(...o(v,{n:s,p:(b=Pe[h[7]],l&~Pe.o|b),r:u,i:c},g));continue}if(h[1]=="i"){d.push(...St(x).map(v=>({p:-1,o:0,r:[],d:h+" "+v})));continue}if(h[1]=="k"){d.push({p:Pe.d,o:0,r:[h],d:o(x,{p:Pe.d},g).map(Ll).join("")});continue}if(h[1]=="f"){d.push(...St(x).map(v=>({p:Pe.d,o:0,r:[h],d:o(v,{p:Pe.d},g).map(Ll).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))h=="label"&&x?s=x+Gr(JSON.stringify([l,c,i])):(x||x===0)&&(h=h.replace(/[A-Z]/g,v=>"-"+v.toLowerCase()),T+=1,p=Math.max(p,(m=h)[0]=="-"?0:Nl(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+St(x).map(v=>g.s(h,dd(""+v,g.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let v=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(R,U)=>{let z=g.theme("screens",U);return z?(v|=67108864,Rl(z,"")):R}),v|=wo(h)),d.push(...o(x,{n:s,p:v,r:[...u,h],i:c},g))}else d.push(...o(x,{p:l,r:[...u,h]},g))}return d.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(p||15,15),r:u,d:f}),d.sort(Dl)}(e,Lo(t,n,r,a),n)}function dd(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i)=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?gd(s):""+s})}function Co(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function vo(e,t,n=Pe.u,r,a){let o=[];for(let i of e)for(let s of function(l,u,c,g,d){var f;l={...l,i:l.i||d};let p=function(T,b){let m=_o.get(T.n);return m?m(T,b):b.r(T.n,T.v[0]=="dark")}(l,u);return p?typeof p=="string"?({r:g,p:c}=Lo(l,u,c,g),Co(vo(ko(p),u,c,g,l.i),l.n)):Array.isArray(p)?p.map(T=>{var b,m;return{o:0,...T,r:[...St(g),...St(T.r)],p:(b=c,m=(f=T.p)!=null?f:c,b&~Pe.o|m)}}):Ol(p,l,u,c,g):[{c:Eo(l),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(fd(o,s),0,s);return o}function Il(e,t,n,r,a,o,i,s){return Co((s?n.flatMap(l=>vo([l],r,a,o,i)):vo(n,r,a,o,i)).map(l=>l.p&Pe.o&&(l.n||t==Pe.b)?{...l,p:l.p&~Pe.o|t,o:0}:l),e)}function pd(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:l,r:u,i:c}=Lo(o,i,t);return n&&Il(s,t,n,i,l,u,c,r)},_o.set(e,a),e}function To(e,t){if(e[e.length-1]!="("){let n=[],r=!1,a=!1,o="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(o+=(o&&"-")+i)}o&&(a&&(o="-"+o),t[0].push({n:o,v:n.filter(md),i:r}))}}function md(e,t,n){return n.indexOf(e)==t}var _l=new Map;function ko(e){let t=_l.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,l=(u,c=0)=>{a!=s&&(n.push(e.slice(a,s+c)),u&&To(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let g=n[c-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=c,To([...n,"#"],r);let{v:f}=r[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(f[0]=="dark"),f.length);To([...n,pd(g.length>1?g.slice(0,-1)+Gr(JSON.stringify([g,d])):g+"("+Ml(d)+")",Pe.a,d,/@$/.test(g))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),_l.set(e,t=r[0])}return t}function Fl(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function Hl(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Fl(e,t,n=>xo(n).trim()):t.filter(Boolean).reduce((n,r)=>n+xo(r),e?xo(e):"")}function xo(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Hl(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var bb=$l("@"),yb=$l("~");function $l(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(a,...o){return t(r,a,o)}});function t(n,r,a){return Ml(ko(n+e+"("+Hl(r,a)+")"))}}function So(e,t){return Array.isArray(e)?Cl(Fl(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Cl(e):[e]}var hd=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Cl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=hd.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function Bl(e,...t){var n,r;let a=So(e,t),o=(((n=a.find(i=>i.label))==null?void 0:n.label)||"css")+Gr(JSON.stringify(a));return r=(i,s)=>Co(a.flatMap(l=>Ol(l,i,s,Pe.o)),o),_o.set(o,r),o}var Tb=new Proxy(function(e,t){return kl("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return kl(t,n,r)}});function kl(e,t,n){return{toString:()=>Bl({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var xb=Symbol();var Ul=new Proxy(ld,{apply:(e,t,n)=>mo(n[0]),get(e,t){let n=mo[t];return typeof n=="function"?function(){return n.apply(mo,arguments)}:n}});var wb=function e(t){return new Proxy(function(n,...r){return Pl(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(a,...o){return Pl(t,r,a,o)}})}();function Pl(e,t,n,r){return{toString(){let a=So(n,r),o=Al(t+Gr(JSON.stringify([t,a])));return(typeof e=="function"?e:Ul)(Bl({[`@keyframes ${o}`]:So(n,r)})),o}}}var Po;function $o(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Yl(e,t=","){return e.map($o).join(t)}var Xl=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Yr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Xr(e,t="@media "){return t+Qe(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function Qe(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function yd(){}var Me={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Ql(e){return e.match(/[-=:;]/g)?.length||0}function Oo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Ql(e),15)<<18}var Td=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Bo({n:e,i:t,v:n=[]},r,a,o){e&&(e=$o({n:e,i:t,v:n})),o=[...Qe(o)];for(let s of n){let l=r.theme("screens",s);for(let u of Qe(l&&Xr(l)||r.v(s))){var i;o.push(u),a|=l?67108864|Oo(u):s=="dark"?1073741824:u[0]=="@"?Oo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Td.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var Uo=new Map;function jl(e){if(e.d){let t=[],n=Mo(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Mo(r,o=>Mo(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=o.indexOf(s[1]);return~l?o.slice(0,l)+s[0]+o.slice(l+s[1].length):Ao(o,i)}return Ao(i,o)})):r,"&"),r=>Ao(r,e.n?"."+Xl(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Mo(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Ao(e,t){return e.replace(/&/g,t)}var Wl=new Intl.Collator("en",{numeric:!0});function xd(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=Zl(e[a],t)?n=a+1:r=a}return r}function Zl(e,t){let n=e.p&Me.o;return n==(t.p&Me.o)&&(n==Me.b||n==Me.o)?0:e.p-t.p||e.o-t.o||Wl.compare(zl(e.n),zl(t.n))||Wl.compare(ql(e.n),ql(t.n))}function zl(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function ql(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Ro(e,t){return Math.round(parseInt(e,16)*t)}function Nt(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Ro(e.substr(1,o),i),Ro(e.substr(1+o,o),i),Ro(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function ec(e,t,n,r,a=[]){return function o(i,{n:s,p:l,r:u=[],i:c},g){let d=[],f="",p=0,T=0;for(let h in i||{}){var b,m;let x=i[h];if(h[0]=="@"){if(!x)continue;if(h[1]=="a"){d.push(...nc(s,l,Wo(""+x),g,l,u,c,!0));continue}if(h[1]=="l"){for(let v of Qe(x))d.push(...o(v,{n:s,p:(b=Me[h[7]],l&~Me.o|b),r:u,i:c},g));continue}if(h[1]=="i"){d.push(...Qe(x).map(v=>({p:-1,o:0,r:[],d:h+" "+v})));continue}if(h[1]=="k"){d.push({p:Me.d,o:0,r:[h],d:o(x,{p:Me.d},g).map(jl).join("")});continue}if(h[1]=="f"){d.push(...Qe(x).map(v=>({p:Me.d,o:0,r:[h],d:o(v,{p:Me.d},g).map(jl).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))h=="label"&&x?s=x+Yr(JSON.stringify([l,c,i])):(x||x===0)&&(h=h.replace(/[A-Z]/g,v=>"-"+v.toLowerCase()),T+=1,p=Math.max(p,(m=h)[0]=="-"?0:Ql(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+Qe(x).map(v=>g.s(h,tc(""+v,g.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let v=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(R,U)=>{let z=g.theme("screens",U);return z?(v|=67108864,Xr(z,"")):R}),v|=Oo(h)),d.push(...o(x,{n:s,p:v,r:[...u,h],i:c},g))}else d.push(...o(x,{p:l,r:[...u,h]},g))}return d.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(p||15,15),r:u,d:f}),d.sort(Zl)}(e,Bo(t,n,r,a),n)}function tc(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i="")=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?Nt(s):""+Qe(s).filter(l=>Object(l)!==l)})}function jo(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Io(e,t,n=Me.u,r,a){let o=[];for(let i of e)for(let s of function(l,u,c,g,d){l={...l,i:l.i||d};let f=function(p,T){let b=Uo.get(p.n);return b?b(p,T):T.r(p.n,p.v[0]=="dark")}(l,u);return f?typeof f=="string"?({r:g,p:c}=Bo(l,u,c,g),jo(Io(Wo(f),u,c,g,l.i),l.n)):Array.isArray(f)?f.map(p=>{var T,b;return{o:0,...p,r:[...Qe(g),...Qe(p.r)],p:(T=c,b=p.p??c,T&~Me.o|b)}}):ec(f,l,u,c,g):[{c:$o(l),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(xd(o,s),0,s);return o}function nc(e,t,n,r,a,o,i,s){return jo((s?n.flatMap(l=>Io([l],r,a,o,i)):Io(n,r,a,o,i)).map(l=>l.p&Me.o&&(l.n||t==Me.b)?{...l,p:l.p&~Me.o|t,o:0}:l),e)}function wd(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:l,r:u,i:c}=Bo(o,i,t);return n&&nc(s,t,n,i,l,u,c,r)},Uo.set(e,a),e}function No(e,t,n){if(e[e.length-1]!="("){let r=[],a=!1,o=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),a=!a),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),o=!o),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(o&&(i="-"+i),t[0].push({n:i,v:r.filter(vd),i:a}))}}function vd(e,t,n){return n.indexOf(e)==t}var Vl=new Map;function Wo(e){let t=Vl.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,l=(u,c=0)=>{a!=s&&(n.push(e.slice(a,s+c)),u&&No(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let g=n[c-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=c,No([...n,"#"],r);let{v:f}=r[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(f[0]=="dark"),f.length);No([...n,wd(g.length>1?g.slice(0,-1)+Yr(JSON.stringify([g,d])):g+"("+Yl(d)+")",Me.a,d,/@$/.test(g))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),Vl.set(e,t=r[0])}return t}function rc(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function ac(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?rc(e,t,n=>Do(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Do(r),e?Do(e):"")}function Do(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=ac(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var $b=oc("@"),Bb=oc("~");function oc(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(a,...o){return t(r,a,o)}}});function t(n,r,a){return Yl(Wo(n+e+"("+ac(r,a)+")"))}}function Fo(e,t){return Array.isArray(e)?Kl(rc(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Kl(e):[e]}var Sd=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Kl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=Sd.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function sc(e,...t){var n;let r=Fo(e,t),a=(r.find(o=>o.label)?.label||"css")+Yr(JSON.stringify(r));return n=(o,i)=>jo(r.flatMap(s=>ec(s,o,i,Me.o)),a),Uo.set(a,n),a}var Ub=new Proxy(function(e,t){return Gl("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return Gl(t,n,r)}}});function Gl(e,t,n){return{toString(){return sc({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function E(e,t,n){return[e,Ed(t,n)]}function Ed(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Ho(n,1)}):n=>e||{[n[1]]:Ho(n,2)}}function Ho(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function L(e,t,n,r){return[e,Ld(t,n,r)]}function Ld(e,t,n){let r=typeof t=="string"?(a,o)=>({[t]:n?n(a,o):a._}):t||(({1:a,_:o},i,s)=>({[a||s]:o}));return(a,o)=>{let i=ic(e||a[1]),s=o.theme(i,a.$$)??Gn(a.$$,i,o);if(s!=null)return a._=Ho(a,0,s),r(a,o,i)}}function Le(e,t={},n){return[e,_d(t,n)]}function _d(e={},t){return(n,r)=>{let{section:a=ic(n[0]).replace("-","")+"Color"}=e,[o,i]=Cd(n.$$);if(!o)return;let s=r.theme(a,o)||Gn(o,a,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=a.replace("Color","Opacity"),property:c=a,selector:g}=e,d=r.theme(u,i||"DEFAULT")||i&&Gn(i,u,r),f=t||(({_:T})=>{let b=Jn(c,T);return g?{[g]:b}:b});n._={value:Nt(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:T=>Nt(s,T),opacityVariable:l||void 0,opacityValue:d||void 0};let p=f(n,r);if(!n.dark){let T=r.d(a,o,s);T&&T!==s&&(n._={value:Nt(T,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:b=>Nt(T,b),opacityVariable:l||void 0,opacityValue:d||void 0},p={"&":p,[r.v("dark")]:f(n,r)})}return p}}function Cd(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Jn(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function Gn(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=Jr(tc(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function ic(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function Jr(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,a="")=>Jr(n)+r+Jr(a)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var jb=Symbol();var kd=new Proxy(yd,{apply(e,t,n){return Po(n[0])},get(e,t){let n=Po[t];return typeof n=="function"?function(){return n.apply(Po,arguments)}:n}});var Wb=function e(t){return new Proxy(function(n,...r){return Jl(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(a,...o){return Jl(t,r,a,o)}}})}();function Jl(e,t,n,r){return{toString(){let a=Fo(n,r),o=Xl(t+Yr(JSON.stringify([t,a])));return(typeof e=="function"?e:kd)(sc({[`@keyframes ${o}`]:Fo(n,r)})),o}}}var Pd="inherit",Md="currentColor",Ad="transparent",Rd="#000",Nd="#fff",Dd={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Od={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Id={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},Fd={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},Hd={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},$d={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Bd={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},Ud={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},jd={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Wd={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},zd={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},qd={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Vd={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Kd={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Gd={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Jd={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Yd={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},Xd={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},Qd={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},Zd={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},ep={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},tp={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},np={__proto__:null,inherit:Pd,current:Md,transparent:Ad,black:Rd,white:Nd,slate:Dd,gray:Od,zinc:Id,neutral:Fd,stone:Hd,red:$d,orange:Bd,amber:Ud,yellow:jd,lime:Wd,green:zd,emerald:qd,teal:Vd,cyan:Kd,sky:Gd,blue:Jd,indigo:Yd,violet:Xd,purple:Qd,fuchsia:Zd,pink:ep,rose:tp},lc={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:np,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Ve(4,"rem",4,.5,.5),...Ve(12,"rem",4,5),14:"3.5rem",...Ve(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:K("blur"),backdropBrightness:K("brightness"),backdropContrast:K("contrast"),backdropGrayscale:K("grayscale"),backdropHueRotate:K("hueRotate"),backdropInvert:K("invert"),backdropOpacity:K("opacity"),backdropSaturate:K("saturate"),backdropSepia:K("sepia"),backgroundColor:K("colors"),backgroundImage:{none:"none"},backgroundOpacity:K("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Ve(200,"",100,0,50),...Ve(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:K("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:K("spacing"),borderWidth:{DEFAULT:"1px",...Ze(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:K("colors"),caretColor:K("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Ve(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:K("borderColor"),divideOpacity:K("borderOpacity"),divideWidth:K("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:K("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Yn(2,6),...Yn(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:K("spacing"),gradientColorStops:K("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Yn(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Yn(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Ve(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Ve(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:K("spacing"),placeholderColor:K("colors"),placeholderOpacity:K("opacity"),outlineColor:K("colors"),outlineOffset:Ze(8,"px"),outlineWidth:Ze(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:K("colors"),ringOffsetWidth:Ze(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Ze(8,"px")},rotate:{...Ze(2,"deg"),...Ze(12,"deg",3),...Ze(180,"deg",45)},saturate:Ve(200,"",100,0,50),scale:{...Ve(150,"",100,0,50),...Ve(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:K("spacing"),scrollPadding:K("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Ze(2,"deg"),...Ze(12,"deg",3)},space:K("spacing"),stroke:K("colors"),strokeWidth:Ve(2),textColor:K("colors"),textDecorationColor:K("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Ze(8,"px")},textUnderlineOffset:{auto:"auto",...Ze(8,"px")},textIndent:K("spacing"),textOpacity:K("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:K("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Yn(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Ve(50,"",1,0,10),auto:"auto"}};function Yn(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function Ze(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Ve(e,t="",n=1,r=0,a=1,o={}){for(;r<=e;r+=a)o[r]=r/n+t;return o}function K(e){return({theme:t})=>t(e)}var Vb={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${lc.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${lc.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Gb=[E("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:Gn(`[${t}]`,e,n)}}})),E("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),L("aspect-","aspectRatio"),E("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:a}=t("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(o[Xr(l)]={"&":{maxWidth:l,...i(s)}})}return o;function i(s){let l=a&&(typeof a=="string"?a:a[s]||a.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),L("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),E("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),E("box-(border|content)","boxSizing",({1:e})=>e+"-box"),E("hidden",{display:"none"}),E("table-(auto|fixed)","tableLayout"),E(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",E("isolate","isolation"),E("object-(contain|cover|fill|none|scale-down)","objectFit"),L("object-","objectPosition"),E("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Qr),E("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),E("(static|fixed|absolute|relative|sticky)","position"),L("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),L("-?(top|bottom|left|right)(?:$|-)","inset"),E("visible","visibility"),E("invisible",{visibility:"hidden"}),L("-?z-","zIndex"),E("flex-((row|col)(-reverse)?)","flexDirection",cc),E("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),L("(flex-(?:grow|shrink))(?:$|-)"),L("(flex)-"),L("grow(?:$|-)","flexGrow"),L("shrink(?:$|-)","flexShrink"),L("basis-","flexBasis"),L("-?(order)-"),"-?(order)-(\\d+)",L("grid-cols-","gridTemplateColumns"),E("grid-cols-(\\d+)","gridTemplateColumns",dc),L("col-","gridColumn"),E("col-(span)-(\\d+)","gridColumn",gc),L("col-start-","gridColumnStart"),E("col-start-(auto|\\d+)","gridColumnStart"),L("col-end-","gridColumnEnd"),E("col-end-(auto|\\d+)","gridColumnEnd"),L("grid-rows-","gridTemplateRows"),E("grid-rows-(\\d+)","gridTemplateRows",dc),L("row-","gridRow"),E("row-(span)-(\\d+)","gridRow",gc),L("row-start-","gridRowStart"),E("row-start-(auto|\\d+)","gridRowStart"),L("row-end-","gridRowEnd"),E("row-end-(auto|\\d+)","gridRowEnd"),E("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Qr(cc(e))),E("grid-flow-(dense)","gridAutoFlow"),L("auto-cols-","gridAutoColumns"),L("auto-rows-","gridAutoRows"),L("gap-x(?:$|-)","gap","columnGap"),L("gap-y(?:$|-)","gap","rowGap"),L("gap(?:$|-)","gap"),"(justify-(?:items|self))-",E("justify-","justifyContent",uc),E("(content|items|self)-",e=>({["align-"+e[1]]:uc(e)})),E("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),L("p([xytrbl])?(?:$|-)","padding",yn("padding")),L("-?m([xytrbl])?(?:$|-)","margin",yn("margin")),L("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),E("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),L("w-","width"),L("min-w-","minWidth"),L("max-w-","maxWidth"),L("h-","height"),L("min-h-","minHeight"),L("max-h-","maxHeight"),L("font-","fontWeight"),L("font-","fontFamily","fontFamily",gt),E("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),E("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),E("italic","fontStyle"),E("not-italic",{fontStyle:"normal"}),E("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),L("tracking-","letterSpacing"),L("leading-","lineHeight"),E("list-(inside|outside)","listStylePosition"),L("list-","listStyleType"),E("list-","listStyleType"),L("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Le("placeholder-",{property:"color",selector:"&::placeholder"}),E("text-(left|center|right|justify|start|end)","textAlign"),E("text-(ellipsis|clip)","textOverflow"),L("text-opacity-","textOpacity","--tw-text-opacity"),Le("text-",{property:"color"}),L("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),L("indent-","textIndent"),E("(overline|underline|line-through)","textDecorationLine"),E("no-underline",{textDecorationLine:"none"}),L("underline-offset-","textUnderlineOffset"),Le("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),L("decoration-","textDecorationThickness"),E("decoration-","textDecorationStyle"),E("(uppercase|lowercase|capitalize)","textTransform"),E("normal-case",{textTransform:"none"}),E("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),E("align-","verticalAlign"),E("whitespace-","whiteSpace"),E("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),E("break-words",{overflowWrap:"break-word"}),E("break-all",{wordBreak:"break-all"}),Le("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Le("accent-",{opacityVariable:!1,opacitySection:"opacity"}),E("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${en(e," ")},var(--tw-gradient-stops))`),Le("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Le("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Le("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),E("bg-(fixed|local|scroll)","backgroundAttachment"),E("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),E(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),E("bg-blend-","backgroundBlendMode"),E("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),L("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Le("bg-",{section:"backgroundColor"}),L("bg-","backgroundImage"),L("bg-","backgroundPosition"),E("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Qr),L("bg-","backgroundSize"),L("rounded(?:$|-)","borderRadius"),L("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${en(n[0])}-radius`]:t,[`border-${en(n[1])}-radius`]:t}}),E("border-(collapse|separate)","borderCollapse"),L("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),E("border-(solid|dashed|dotted|double|none)","borderStyle"),L("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Le("border-([xytrbl])-",{section:"borderColor"},yn("border","Color")),Le("border-"),L("border-([xytrbl])(?:$|-)","borderWidth",yn("border","Width")),L("border(?:$|-)","borderWidth"),L("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),E("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),E("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),L("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${en(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${en(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Le("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),L("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Le("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),L("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),E("ring-inset",{"--tw-ring-inset":"inset"}),Le("ring-",{property:"--tw-ring-color"}),L("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Nt(t("ringOffsetColor","","#fff")),"--tw-ring-color":Nt(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Le("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),L("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":gt(e),"--tw-shadow-colored":gt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),L("(opacity)-"),E("mix-blend-","mixBlendMode"),...fc(),...fc("backdrop-"),L("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:gt(e),transitionTimingFunction:e._=="none"?void 0:gt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:gt(t("transitionDuration",""))})),L("duration(?:$|-)","transitionDuration","transitionDuration",gt),L("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",gt),L("delay(?:$|-)","transitionDelay","transitionDelay",gt),L("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=gt(e),a=r.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=n(a[0]))]:o,animation:a.join(" ")}:{animation:r}}),"(transform)-(none)",E("transform",qo),E("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":pc(e=="gpu")})),L("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...qo()})),L("-?(rotate)-","rotate",zo),L("-?(translate-[xy])-","translate",zo),L("-?(skew-[xy])-","skew",zo),E("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Qr),"(appearance)-",L("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",L("(cursor)-"),"(cursor)-",E("snap-(none)","scroll-snap-type"),E("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),E("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),E("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),E("snap-(normal|always)","scroll-snap-stop"),E("scroll-(auto|smooth)","scroll-behavior"),L("scroll-p([xytrbl])?(?:$|-)","padding",yn("scroll-padding")),L("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",yn("scroll-margin")),E("touch-(auto|none|manipulation)","touch-action"),E("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),E("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),E("outline",{outlineStyle:"solid"}),E("outline-(dashed|dotted|double|hidden)","outlineStyle"),L("(outline-offset)-"),Le("outline-",{opacityVariable:!1,opacitySection:"opacity"}),L("outline-","outlineWidth"),"(pointer-events)-",L("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],E("select-(none|text|all|auto)","userSelect"),Le("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Le("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),L("stroke-","strokeWidth"),E("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),E("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Qr(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function cc(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function en(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function gt(e){return e&&""+(e._||e)}function uc({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function yn(e,t=""){return({1:n,_:r})=>{let a={x:"lr",y:"tb"}[n]||n+n;return a?{...Jn(e+"-"+en(a[0])+t,r),...Jn(e+"-"+en(a[1])+t,r)}:Jn(e+t,r)}}function fc(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,E(`${e}filter`,n),...t.map(r=>L(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:a,_:o})=>({[`--tw-${a}`]:Qe(o).map(i=>`${r}(${i})`).join(" "),...n})))]}function zo({1:e,_:t}){return{["--tw-"+e]:t,...qo()}}function qo(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":pc()}}}}function pc(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function gc({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function dc({1:e}){return`repeat(${e},minmax(0,1fr))`}var ap=Object.create,hc=Object.defineProperty,op=Object.getOwnPropertyDescriptor,sp=Object.getOwnPropertyNames,ip=Object.getPrototypeOf,lp=Object.prototype.hasOwnProperty,cp=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),up=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of sp(t))!lp.call(e,a)&&a!==n&&hc(e,a,{get:()=>t[a],enumerable:!(r=op(t,a))||r.enumerable});return e},fp=(e,t,n)=>(n=e!=null?ap(ip(e)):{},up(t||!e||!e.__esModule?hc(n,"default",{value:e,enumerable:!0}):n,e)),gp=cp((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var a={};return r.m=n,r.c=a,r.i=function(o){return o},r.d=function(o,i,s){r.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(i,"a",i),i},r.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,r,a){"use strict";(function(o){var i,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,g){u(r)==="object"&&u(o)==="object"?o.exports=g():(s=[],i=g,l=typeof i=="function"?i.apply(r,s):i,l!==void 0&&(o.exports=l))})(void 0,function(){return function(c){function g(f){if(d[f])return d[f].exports;var p=d[f]={i:f,l:!1,exports:{}};return c[f].call(p.exports,p,p.exports,g),p.l=!0,p.exports}var d={};return g.m=c,g.c=d,g.i=function(f){return f},g.d=function(f,p,T){g.o(f,p)||Object.defineProperty(f,p,{configurable:!1,enumerable:!0,get:T})},g.n=function(f){var p=f&&f.__esModule?function(){return f.default}:function(){return f};return g.d(p,"a",p),p},g.o=function(f,p){return Object.prototype.hasOwnProperty.call(f,p)},g.p="",g(g.s=0)}([function(c,g,d){function f(w,P){var M={};for(var q in w)P.indexOf(q)>=0||Object.prototype.hasOwnProperty.call(w,q)&&(M[q]=w[q]);return M}Object.defineProperty(g,"__esModule",{value:!0});var p=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(w){return typeof w>"u"?"undefined":u(w)}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w>"u"?"undefined":u(w)},T=Object.assign||function(w){for(var P=1;P<arguments.length;P++){var M=arguments[P];for(var q in M)Object.prototype.hasOwnProperty.call(M,q)&&(w[q]=M[q])}return w},b={top:"top",bottom:"bottom"},m={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:b.top,force:b.top,confirm:b.top,input:b.top,select:b.bottom,date:b.top}},h=g.setOptions=function(w){m=T({},m,w,{classes:T({},m.classes,w.classes),ids:T({},m.ids,w.ids),positions:T({},m.positions,w.positions)})},x=function(){return new Promise(function(w){return setTimeout(w,0)})},v=function(w){return new Promise(function(P){return setTimeout(P,1e3*w)})},R=function(){document.activeElement&&document.activeElement.blur()},U=function(){var w="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(P){var M=16*Math.random()|0,q=P==="x"?M:3&M|8;return q.toString(16)});return"notie-"+w},z={1:m.classes.backgroundSuccess,success:m.classes.backgroundSuccess,2:m.classes.backgroundWarning,warning:m.classes.backgroundWarning,3:m.classes.backgroundError,error:m.classes.backgroundError,4:m.classes.backgroundInfo,info:m.classes.backgroundInfo,5:m.classes.backgroundNeutral,neutral:m.classes.backgroundNeutral},I=function(){return m.transitionSelector+" "+m.transitionDuration+"s "+m.transitionCurve},F=function(w){return w.keyCode===13},se=function(w){return w.keyCode===27},ue=function(w,P){w.classList.add(m.classes.container),w.style[P]="-10000px",document.body.appendChild(w),w.style[P]="-"+w.offsetHeight+"px",w.listener&&window.addEventListener("keydown",w.listener),x().then(function(){w.style.transition=I(),w.style[P]=0})},G=function(w,P){var M=document.getElementById(w);M&&(M.style[P]="-"+M.offsetHeight+"px",M.listener&&window.removeEventListener("keydown",M.listener),v(m.transitionDuration).then(function(){M.parentNode&&M.parentNode.removeChild(M)}))},J=function(w,P){var M=document.createElement("div");M.id=m.ids.overlay,M.classList.add(m.classes.overlay),M.classList.add(m.classes.backgroundOverlay),M.style.opacity=0,w&&m.overlayClickDismiss&&(M.onclick=function(){G(w.id,P),ee()}),document.body.appendChild(M),x().then(function(){M.style.transition=I(),M.style.opacity=m.overlayOpacity})},ee=function(){var w=document.getElementById(m.ids.overlay);w.style.opacity=0,v(m.transitionDuration).then(function(){w.parentNode&&w.parentNode.removeChild(w)})},pe=g.hideAlerts=function(w){var P=document.getElementsByClassName(m.classes.alert);if(P.length){for(var M=0;M<P.length;M++){var q=P[M];G(q.id,q.position)}w&&v(m.transitionDuration).then(function(){return w()})}},We=g.alert=function(w){var P=w.type,M=P===void 0?4:P,q=w.text,j=w.time,be=j===void 0?m.alertTime:j,fe=w.stay,ke=fe!==void 0&&fe,ge=w.position,ae=ge===void 0?m.positions.alert||ae.top:ge;R(),pe();var S=document.createElement("div"),N=U();S.id=N,S.position=ae,S.classList.add(m.classes.textbox),S.classList.add(z[M]),S.classList.add(m.classes.alert),S.innerHTML='<div class="'+m.classes.textboxInner+'">'+q+"</div>",S.onclick=function(){return G(N,ae)},S.listener=function(_){(F(_)||se(_))&&pe()},ue(S,ae),be&&be<1&&(be=1),!ke&&be&&v(be).then(function(){return G(N,ae)})},ie=g.force=function(w,P){var M=w.type,q=M===void 0?5:M,j=w.text,be=w.buttonText,fe=be===void 0?"OK":be,ke=w.callback,ge=w.position,ae=ge===void 0?m.positions.force||ae.top:ge;R(),pe();var S=document.createElement("div"),N=U();S.id=N;var _=document.createElement("div");_.classList.add(m.classes.textbox),_.classList.add(m.classes.backgroundInfo),_.innerHTML='<div class="'+m.classes.textboxInner+'">'+j+"</div>";var A=document.createElement("div");A.classList.add(m.classes.button),A.classList.add(z[q]),A.innerHTML=fe,A.onclick=function(){G(N,ae),ee(),ke?ke():P&&P()},S.appendChild(_),S.appendChild(A),S.listener=function(W){F(W)&&A.click()},ue(S,ae),J()},me=g.confirm=function(w,P,M){var q=w.text,j=w.submitText,be=j===void 0?"Yes":j,fe=w.cancelText,ke=fe===void 0?"Cancel":fe,ge=w.submitCallback,ae=w.cancelCallback,S=w.position,N=S===void 0?m.positions.confirm||N.top:S;R(),pe();var _=document.createElement("div"),A=U();_.id=A;var W=document.createElement("div");W.classList.add(m.classes.textbox),W.classList.add(m.classes.backgroundInfo),W.innerHTML='<div class="'+m.classes.textboxInner+'">'+q+"</div>";var te=document.createElement("div");te.classList.add(m.classes.button),te.classList.add(m.classes.elementHalf),te.classList.add(m.classes.backgroundSuccess),te.innerHTML=be,te.onclick=function(){G(A,N),ee(),ge?ge():P&&P()};var D=document.createElement("div");D.classList.add(m.classes.button),D.classList.add(m.classes.elementHalf),D.classList.add(m.classes.backgroundError),D.innerHTML=ke,D.onclick=function(){G(A,N),ee(),ae?ae():M&&M()},_.appendChild(W),_.appendChild(te),_.appendChild(D),_.listener=function(oe){F(oe)?te.click():se(oe)&&D.click()},ue(_,N),J(_,N)},ne=function(w,P,M){var q=w.text,j=w.submitText,be=j===void 0?"Submit":j,fe=w.cancelText,ke=fe===void 0?"Cancel":fe,ge=w.submitCallback,ae=w.cancelCallback,S=w.position,N=S===void 0?m.positions.input||N.top:S,_=f(w,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);R(),pe();var A=document.createElement("div"),W=U();A.id=W;var te=document.createElement("div");te.classList.add(m.classes.textbox),te.classList.add(m.classes.backgroundInfo),te.innerHTML='<div class="'+m.classes.textboxInner+'">'+q+"</div>";var D=document.createElement("input");D.classList.add(m.classes.inputField),D.setAttribute("autocapitalize",_.autocapitalize||"none"),D.setAttribute("autocomplete",_.autocomplete||"off"),D.setAttribute("autocorrect",_.autocorrect||"off"),D.setAttribute("autofocus",_.autofocus||"true"),D.setAttribute("inputmode",_.inputmode||"verbatim"),D.setAttribute("max",_.max||""),D.setAttribute("maxlength",_.maxlength||""),D.setAttribute("min",_.min||""),D.setAttribute("minlength",_.minlength||""),D.setAttribute("placeholder",_.placeholder||""),D.setAttribute("spellcheck",_.spellcheck||"default"),D.setAttribute("step",_.step||"any"),D.setAttribute("type",_.type||"text"),D.value=_.value||"",_.allowed&&(D.oninput=function(){var Re=void 0;if(Array.isArray(_.allowed)){for(var Be="",Ct=_.allowed,Tt=0;Tt<Ct.length;Tt++)Ct[Tt]==="an"?Be+="0-9a-zA-Z":Ct[Tt]==="a"?Be+="a-zA-Z":Ct[Tt]==="n"&&(Be+="0-9"),Ct[Tt]==="s"&&(Be+=" ");Re=new RegExp("[^"+Be+"]","g")}else p(_.allowed)==="object"&&(Re=_.allowed);D.value=D.value.replace(Re,"")});var oe=document.createElement("div");oe.classList.add(m.classes.button),oe.classList.add(m.classes.elementHalf),oe.classList.add(m.classes.backgroundSuccess),oe.innerHTML=be,oe.onclick=function(){G(W,N),ee(),ge?ge(D.value):P&&P(D.value)};var ze=document.createElement("div");ze.classList.add(m.classes.button),ze.classList.add(m.classes.elementHalf),ze.classList.add(m.classes.backgroundError),ze.innerHTML=ke,ze.onclick=function(){G(W,N),ee(),ae?ae(D.value):M&&M(D.value)},A.appendChild(te),A.appendChild(D),A.appendChild(oe),A.appendChild(ze),A.listener=function(Re){F(Re)?oe.click():se(Re)&&ze.click()},ue(A,N),D.focus(),J(A,N)};g.input=ne;var yt=g.select=function(w,P){var M=w.text,q=w.cancelText,j=q===void 0?"Cancel":q,be=w.cancelCallback,fe=w.choices,ke=w.position,ge=ke===void 0?m.positions.select||ge.top:ke;R(),pe();var ae=document.createElement("div"),S=U();ae.id=S;var N=document.createElement("div");N.classList.add(m.classes.textbox),N.classList.add(m.classes.backgroundInfo),N.innerHTML='<div class="'+m.classes.textboxInner+'">'+M+"</div>",ae.appendChild(N),fe.forEach(function(A,W){var te=A.type,D=te===void 0?1:te,oe=A.text,ze=A.handler,Re=document.createElement("div");Re.classList.add(z[D]),Re.classList.add(m.classes.button),Re.classList.add(m.classes.selectChoice);var Be=fe[W+1];Be&&!Be.type&&(Be.type=1),Be&&Be.type===D&&Re.classList.add(m.classes.selectChoiceRepeated),Re.innerHTML=oe,Re.onclick=function(){G(S,ge),ee(),ze()},ae.appendChild(Re)});var _=document.createElement("div");_.classList.add(m.classes.backgroundNeutral),_.classList.add(m.classes.button),_.innerHTML=j,_.onclick=function(){G(S,ge),ee(),be?be():P&&P()},ae.appendChild(_),ae.listener=function(A){se(A)&&_.click()},ue(ae,ge),J(ae,ge)},_t=g.date=function(w,P,M){var q=w.value,j=q===void 0?new Date:q,be=w.submitText,fe=be===void 0?"OK":be,ke=w.cancelText,ge=ke===void 0?"Cancel":ke,ae=w.submitCallback,S=w.cancelCallback,N=w.position,_=N===void 0?m.positions.date||_.top:N;R(),pe();var A="&#9662",W=document.createElement("div"),te=document.createElement("div"),D=document.createElement("div"),oe=function(ye){W.innerHTML=m.dateMonths[ye.getMonth()],te.innerHTML=ye.getDate(),D.innerHTML=ye.getFullYear()},ze=function(ye){var ut=new Date(j.getFullYear(),j.getMonth()+1,0).getDate(),fn=ye.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(fn)>ut&&(fn=ut.toString()),ye.target.textContent=fn,Number(fn)<1&&(fn="1"),j.setDate(Number(fn))},Re=function(ye){var ut=ye.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);ye.target.textContent=ut,j.setFullYear(Number(ut))},Be=function(ye){oe(j)},Ct=function(ye){var ut=new Date(j.getFullYear(),j.getMonth()+ye+1,0).getDate();j.getDate()>ut&&j.setDate(ut),j.setMonth(j.getMonth()+ye),oe(j)},Tt=function(ye){j.setDate(j.getDate()+ye),oe(j)},ai=function(ye){var ut=j.getFullYear()+ye;ut<0?j.setFullYear(0):j.setFullYear(j.getFullYear()+ye),oe(j)},jt=document.createElement("div"),Ia=U();jt.id=Ia;var Fa=document.createElement("div");Fa.classList.add(m.classes.backgroundInfo);var tt=document.createElement("div");tt.classList.add(m.classes.dateSelectorInner);var ln=document.createElement("div");ln.classList.add(m.classes.button),ln.classList.add(m.classes.elementThird),ln.classList.add(m.classes.dateSelectorUp),ln.innerHTML=A;var cn=document.createElement("div");cn.classList.add(m.classes.button),cn.classList.add(m.classes.elementThird),cn.classList.add(m.classes.dateSelectorUp),cn.innerHTML=A;var un=document.createElement("div");un.classList.add(m.classes.button),un.classList.add(m.classes.elementThird),un.classList.add(m.classes.dateSelectorUp),un.innerHTML=A,W.classList.add(m.classes.element),W.classList.add(m.classes.elementThird),W.innerHTML=m.dateMonths[j.getMonth()],te.classList.add(m.classes.element),te.classList.add(m.classes.elementThird),te.setAttribute("contentEditable",!0),te.addEventListener("input",ze),te.addEventListener("blur",Be),te.innerHTML=j.getDate(),D.classList.add(m.classes.element),D.classList.add(m.classes.elementThird),D.setAttribute("contentEditable",!0),D.addEventListener("input",Re),D.addEventListener("blur",Be),D.innerHTML=j.getFullYear();var Dn=document.createElement("div");Dn.classList.add(m.classes.button),Dn.classList.add(m.classes.elementThird),Dn.innerHTML=A;var On=document.createElement("div");On.classList.add(m.classes.button),On.classList.add(m.classes.elementThird),On.innerHTML=A;var In=document.createElement("div");In.classList.add(m.classes.button),In.classList.add(m.classes.elementThird),In.innerHTML=A,ln.onclick=function(){return Ct(1)},cn.onclick=function(){return Tt(1)},un.onclick=function(){return ai(1)},Dn.onclick=function(){return Ct(-1)},On.onclick=function(){return Tt(-1)},In.onclick=function(){return ai(-1)};var Wt=document.createElement("div");Wt.classList.add(m.classes.button),Wt.classList.add(m.classes.elementHalf),Wt.classList.add(m.classes.backgroundSuccess),Wt.innerHTML=fe,Wt.onclick=function(){G(Ia,_),ee(),ae?ae(j):P&&P(j)};var zt=document.createElement("div");zt.classList.add(m.classes.button),zt.classList.add(m.classes.elementHalf),zt.classList.add(m.classes.backgroundError),zt.innerHTML=ge,zt.onclick=function(){G(Ia,_),ee(),S?S(j):M&&M(j)},tt.appendChild(ln),tt.appendChild(cn),tt.appendChild(un),tt.appendChild(W),tt.appendChild(te),tt.appendChild(D),tt.appendChild(Dn),tt.appendChild(On),tt.appendChild(In),Fa.appendChild(tt),jt.appendChild(Fa),jt.appendChild(Wt),jt.appendChild(zt),jt.listener=function(ye){F(ye)?Wt.click():se(ye)&&zt.click()},ue(jt,_),J(jt,_)};g.default={alert:We,force:ie,confirm:me,input:ne,select:yt,date:_t,setOptions:h,hideAlerts:pe}}])})}).call(r,a(0)(n))}])})}),dp=fp(gp()),{default:mc,...pp}=dp,Vo=mc!==void 0?mc:pp;var ly=Symbol("clean");var cy=Symbol();function Ko(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=Ko(e[r],t);return n}}function yc(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,a,o){let i=e(r,a,...o);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,a){return e(n,r,...a)}}}}var yy=yc((e,t,n)=>Ko(t,r=>{for(let a in n)r=r.replace(new RegExp(`{${a}}`,"g"),n[a]);return r})),Ty=yc((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),Ko(t[r],a=>a.replace(/{count}/g,n))});var Go=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Jo(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function Sc(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function Ec(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function bp(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,o=0;o<n.length;o++)r.indexOf(n[o])===-1&&(a=!1);return a}var Qn={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Go?173:189,"=":Go?61:187,";":Go?59:186,"'":222,"[":219,"]":221,"\\":220},dt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Qo={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Ae={16:!1,18:!1,17:!1,91:!1},ve={};for(Xn=1;Xn<20;Xn++)Qn["f".concat(Xn)]=111+Xn;var Xn,ce=[],Tc=!1,Lc="all",_c=[],ea=function(e){return Qn[e.toLowerCase()]||dt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},yp=function(e){return Object.keys(Qn).find(function(t){return Qn[t]===e})},Tp=function(e){return Object.keys(dt).find(function(t){return dt[t]===e})};function Cc(e){Lc=e||"all"}function Zn(){return Lc||"all"}function xp(){return ce.slice(0)}function wp(){return ce.map(function(e){return yp(e)||Tp(e)||String.fromCharCode(e)})}function vp(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function Sp(e){return typeof e=="string"&&(e=ea(e)),ce.indexOf(e)!==-1}function Ep(e,t){var n,r;e||(e=Zn());for(var a in ve)if(Object.prototype.hasOwnProperty.call(ve,a))for(n=ve[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;Zn()===e&&Cc(t||"all")}function Lp(e){var t=e.keyCode||e.which||e.charCode,n=ce.indexOf(t);if(n>=0&&ce.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&ce.splice(0,ce.length),(t===93||t===224)&&(t=91),t in Ae){Ae[t]=!1;for(var r in dt)dt[r]===t&&(et[r]=!1)}}function _p(e){if(typeof e>"u")Object.keys(ve).forEach(function(i){return delete ve[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&Yo(i)});else if(typeof e=="object")e.key&&Yo(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],o=n[1];typeof a=="function"&&(o=a,a=""),Yo({key:e,scope:a,method:o,splitKey:"+"})}}var Yo=function(e){var t=e.key,n=e.scope,r=e.method,a=e.splitKey,o=a===void 0?"+":a,i=Ec(t);i.forEach(function(s){var l=s.split(o),u=l.length,c=l[u-1],g=c==="*"?"*":ea(c);if(ve[g]){n||(n=Zn());var d=u>1?Sc(dt,l):[];ve[g]=ve[g].filter(function(f){var p=r?f.method===r:!0;return!(p&&f.scope===n&&bp(f.mods,d))})}})};function xc(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var o in Ae)Object.prototype.hasOwnProperty.call(Ae,o)&&(!Ae[o]&&t.mods.indexOf(+o)>-1||Ae[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!Ae[16]&&!Ae[18]&&!Ae[17]&&!Ae[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function wc(e,t){var n=ve["*"],r=e.keyCode||e.which||e.charCode;if(et.filter.call(this,e)){if((r===93||r===224)&&(r=91),ce.indexOf(r)===-1&&r!==229&&ce.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var T=Qo[p];e[p]&&ce.indexOf(T)===-1?ce.push(T):!e[p]&&ce.indexOf(T)>-1?ce.splice(ce.indexOf(T),1):p==="metaKey"&&e[p]&&ce.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(ce=ce.slice(ce.indexOf(T))))}),r in Ae){Ae[r]=!0;for(var a in dt)dt[a]===r&&(et[a]=!0);if(!n)return}for(var o in Ae)Object.prototype.hasOwnProperty.call(Ae,o)&&(Ae[o]=e[Qo[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ce.indexOf(17)===-1&&ce.push(17),ce.indexOf(18)===-1&&ce.push(18),Ae[17]=!0,Ae[18]=!0);var i=Zn();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&xc(e,n[s],i,t);if(r in ve){for(var l=0;l<ve[r].length;l++)if((e.type==="keydown"&&ve[r][l].keydown||e.type==="keyup"&&ve[r][l].keyup)&&ve[r][l].key){for(var u=ve[r][l],c=u.splitKey,g=u.key.split(c),d=[],f=0;f<g.length;f++)d.push(ea(g[f]));d.sort().join("")===ce.sort().join("")&&xc(e,u,i,t)}}}}function Cp(e){return _c.indexOf(e)>-1}function et(e,t,n){ce=[];var r=Ec(e),a=[],o="all",i=document,s=0,l=!1,u=!0,c="+",g=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(i=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(o=t);s<r.length;s++)e=r[s].split(c),a=[],e.length>1&&(a=Sc(dt,e)),e=e[e.length-1],e=e==="*"?"*":ea(e),e in ve||(ve[e]=[]),ve[e].push({keyup:l,keydown:u,scope:o,mods:a,shortcut:r[s],method:n,key:r[s],splitKey:c,element:i});typeof i<"u"&&!Cp(i)&&window&&(_c.push(i),Jo(i,"keydown",function(d){wc(d,i)},g),Tc||(Tc=!0,Jo(window,"focus",function(){ce=[]},g)),Jo(i,"keyup",function(d){wc(d,i),Lp(d)},g))}function kp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(ve).forEach(function(n){var r=ve[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var Xo={getPressedKeyString:wp,setScope:Cc,getScope:Zn,deleteScope:Ep,getPressedKeyCodes:xp,isPressed:Sp,filter:vp,trigger:kp,unbind:_p,keyMap:Qn,modifier:dt,modifierMap:Qo};for(Zr in Xo)Object.prototype.hasOwnProperty.call(Xo,Zr)&&(et[Zr]=Xo[Zr]);var Zr;typeof document<"u"&&(vc=window.hotkeys,et.noConflict=function(e){return e&&window.hotkeys===et&&(window.hotkeys=vc),et},window.hotkeys=et);var vc;var Oy=Vo.alert;var Zo=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),a=Xe.green;r>1e4?a=Xe.red:r>1e3&&(a=Xe.yellow),console.debug(Xe.dim(Vt+" TIMING:"),t,"in",a(r+"ms")),this.#e=n}},er=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Xe.dim(Vt+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(Xe.green(Vt+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Xe.yellow(Vt+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Xe.red(Vt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Xe.red(Vt+" FATAL:"),...t)}timing(){return this.level===0?new Zo:{reset:()=>{},stop:()=>{}}}},k=new er;var Ne=class extends Error{constructor(n,r,a){super(r);this.name=n,a&&(this.details=a)}};async function kc(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let o=await(e.fetchPolyfill||fetch)(t,r);if(o.ok&&o.status>=200&&o.status<400){if(n==="json")return await o.json();if(n==="text")return await o.text();if(n==="raw"){let i=await o.text(),s=Object.fromEntries([...o.headers.entries()]),l=o.url;return l||(o.headers.get("X-Final-URL")?l=o.headers.get("X-Final-URL"):l=t),{body:i,headers:s,status:o.status,statusText:o.statusText,url:l}}}else{let i;try{i=await o.text()}catch(s){k.error("parse response failed",s)}throw new Ne("fetchError",o.status+": "+o.statusText||"",i)}}function Dt(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Pp(e,t){return e<<t|e>>>32-t}function na(e,t,n,r,a,o){return Dt(Pp(Dt(Dt(t,e),Dt(r,o)),a),n)}function De(e,t,n,r,a,o,i){return na(t&n|~t&r,e,t,a,o,i)}function Oe(e,t,n,r,a,o,i){return na(t&r|n&~r,e,t,a,o,i)}function Ie(e,t,n,r,a,o,i){return na(t^n^r,e,t,a,o,i)}function Fe(e,t,n,r,a,o,i){return na(n^(t|~r),e,t,a,o,i)}function ta(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,a,o,i,s=1732584193,l=-271733879,u=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)r=s,a=l,o=u,i=c,s=De(s,l,u,c,e[n],7,-680876936),c=De(c,s,l,u,e[n+1],12,-389564586),u=De(u,c,s,l,e[n+2],17,606105819),l=De(l,u,c,s,e[n+3],22,-1044525330),s=De(s,l,u,c,e[n+4],7,-176418897),c=De(c,s,l,u,e[n+5],12,1200080426),u=De(u,c,s,l,e[n+6],17,-1473231341),l=De(l,u,c,s,e[n+7],22,-45705983),s=De(s,l,u,c,e[n+8],7,1770035416),c=De(c,s,l,u,e[n+9],12,-1958414417),u=De(u,c,s,l,e[n+10],17,-42063),l=De(l,u,c,s,e[n+11],22,-1990404162),s=De(s,l,u,c,e[n+12],7,1804603682),c=De(c,s,l,u,e[n+13],12,-40341101),u=De(u,c,s,l,e[n+14],17,-1502002290),l=De(l,u,c,s,e[n+15],22,1236535329),s=Oe(s,l,u,c,e[n+1],5,-165796510),c=Oe(c,s,l,u,e[n+6],9,-1069501632),u=Oe(u,c,s,l,e[n+11],14,643717713),l=Oe(l,u,c,s,e[n],20,-373897302),s=Oe(s,l,u,c,e[n+5],5,-701558691),c=Oe(c,s,l,u,e[n+10],9,38016083),u=Oe(u,c,s,l,e[n+15],14,-660478335),l=Oe(l,u,c,s,e[n+4],20,-405537848),s=Oe(s,l,u,c,e[n+9],5,568446438),c=Oe(c,s,l,u,e[n+14],9,-1019803690),u=Oe(u,c,s,l,e[n+3],14,-187363961),l=Oe(l,u,c,s,e[n+8],20,1163531501),s=Oe(s,l,u,c,e[n+13],5,-1444681467),c=Oe(c,s,l,u,e[n+2],9,-51403784),u=Oe(u,c,s,l,e[n+7],14,1735328473),l=Oe(l,u,c,s,e[n+12],20,-1926607734),s=Ie(s,l,u,c,e[n+5],4,-378558),c=Ie(c,s,l,u,e[n+8],11,-2022574463),u=Ie(u,c,s,l,e[n+11],16,1839030562),l=Ie(l,u,c,s,e[n+14],23,-35309556),s=Ie(s,l,u,c,e[n+1],4,-1530992060),c=Ie(c,s,l,u,e[n+4],11,1272893353),u=Ie(u,c,s,l,e[n+7],16,-155497632),l=Ie(l,u,c,s,e[n+10],23,-1094730640),s=Ie(s,l,u,c,e[n+13],4,681279174),c=Ie(c,s,l,u,e[n],11,-358537222),u=Ie(u,c,s,l,e[n+3],16,-722521979),l=Ie(l,u,c,s,e[n+6],23,76029189),s=Ie(s,l,u,c,e[n+9],4,-640364487),c=Ie(c,s,l,u,e[n+12],11,-421815835),u=Ie(u,c,s,l,e[n+15],16,530742520),l=Ie(l,u,c,s,e[n+2],23,-995338651),s=Fe(s,l,u,c,e[n],6,-198630844),c=Fe(c,s,l,u,e[n+7],10,1126891415),u=Fe(u,c,s,l,e[n+14],15,-1416354905),l=Fe(l,u,c,s,e[n+5],21,-57434055),s=Fe(s,l,u,c,e[n+12],6,1700485571),c=Fe(c,s,l,u,e[n+3],10,-1894986606),u=Fe(u,c,s,l,e[n+10],15,-1051523),l=Fe(l,u,c,s,e[n+1],21,-2054922799),s=Fe(s,l,u,c,e[n+8],6,1873313359),c=Fe(c,s,l,u,e[n+15],10,-30611744),u=Fe(u,c,s,l,e[n+6],15,-1560198380),l=Fe(l,u,c,s,e[n+13],21,1309151649),s=Fe(s,l,u,c,e[n+4],6,-145523070),c=Fe(c,s,l,u,e[n+11],10,-1120210379),u=Fe(u,c,s,l,e[n+2],15,718787259),l=Fe(l,u,c,s,e[n+9],21,-343485551),s=Dt(s,r),l=Dt(l,a),u=Dt(u,o),c=Dt(c,i);return[s,l,u,c]}function Pc(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function es(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function Mp(e){return Pc(ta(es(e),e.length*8))}function Ap(e,t){var n,r=es(e),a=[],o=[],i;for(a[15]=o[15]=void 0,r.length>16&&(r=ta(r,e.length*8)),n=0;n<16;n+=1)a[n]=r[n]^909522486,o[n]=r[n]^1549556828;return i=ta(a.concat(es(t)),512+t.length*8),Pc(ta(o.concat(i),512+128))}function Mc(e){var t="0123456789abcdef",n="",r,a;for(a=0;a<e.length;a+=1)r=e.charCodeAt(a),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function ts(e){return unescape(encodeURIComponent(e))}function Ac(e){return Mp(ts(e))}function Rp(e){return Mc(Ac(e))}function Rc(e,t){return Ap(ts(e),ts(t))}function Np(e,t){return Mc(Rc(e,t))}function Tn(e,t,n){return t?n?Rc(t,e):Np(t,e):n?Ac(e):Rp(e)}function Nc(e,t,n){let r=Dp(e,t),a=[],o={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(o.tempSentences.reduce((l,u)=>l+u.text.length,0)+i.text.length>t||o.tempSentences.length>=n)&&(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(o.from!==i.from||o.to!==i.to)&&(o.tempSentences.length>0?(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(o.from=i.from,o.to=i.to)),o.tempSentences.push(i);return o.tempSentences.length>0&&a.push(o),a}function Dp(e,t){let n=[];for(let r=0;r<e.length;r++){let a=e[r],{from:o,to:i,text:s,url:l}=a,u=s.split(/\r?\n/),c=[],g="";for(let d=0;d<u.length;d++){let f=u[d];if(f===""){c.length>0?d<u.length-1&&(c[c.length-1].suffix+=`
`):g+=`
`;continue}else if(f.length>t){let p=[];ns(f,t,p);for(let T=0;T<p.length;T++){let b=p[T],{text:m,prefix:h,suffix:x}=b;c.push({from:o,to:i,text:m,prefix:h,suffix:x,index:r,url:l})}}else c.push({text:f,prefix:g,suffix:"",from:o,to:i,index:r,url:l});c.length>0&&d<u.length-1&&(c[c.length-1].suffix+=`
`)}n.push(...c)}return n}function tr(e,t){let n=Zt(e),r=Zt(t),a=n===r;return a?!0:(a=n.startsWith("zh")&&r.startsWith("zh"),a)}function ns(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((o,i)=>{let s=e.lastIndexOf(i,t);return s>o?s:o},-1);if(a===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&ns(e.slice(t),t,n);else{let o=e.slice(0,a+1);o.startsWith(" ")?n.push({text:o.slice(1),prefix:" ",suffix:""}):n.push({text:o,prefix:"",suffix:""}),a+1<e.length&&ns(e.slice(a+1),t,n)}return n}var xn=[];async function ra(e,t){return await new Promise((n,r)=>{let a=e,o=1,i=indexedDB.open(a,o);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let l=i.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function Dc(e){let t=`${de}-${e.service}@${e.from}->${e.to}`;return await Ip(t,e)}async function Oc(e){let t=Tn(e.originalText),n=`${de}-${e.service}@${e.from}->${e.to}`;return await Op(n,t)}async function Op(e,t){let n=await ra(e);return await new Promise((r,a)=>{if(!n)return a();let o="cache",s=n.transaction([o],"readonly").objectStore(o).get(t);s.onsuccess=l=>{n.close();let u=s.result;r(u)},s.onerror=l=>{n.close(),console.error("queryInDB->onerror:",l),a()}})}async function Ip(e,t){let n=await ra(e);return(await Hp()).includes(e)||await Fp(e),await new Promise(a=>{if(!n)return a(!1);let o="cache",s=n.transaction([o],"readwrite").objectStore(o).put(t);s.onsuccess=l=>{n.close(),a(!0)},s.onerror=l=>{console.error("addInDB->onerror:",l),n.close(),a(!1)}})}async function Fp(e){let t="cache_list",n=await ra(de+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=o=>{n.close(),xn.push(e)},a.onerror=o=>{n.close(),console.error(o)}}async function Hp(){if(xn&&xn.length>0)return xn;let e=await ra(de+"-cacheList","cache_list");return xn=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=o=>{e.close(),t(a.result)},a.onerror=o=>{e.close(),console.error(o),t([])}}),xn}var $p=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Bp=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Up=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,jp=/(\s+)|([\p{P}\p{S}])/gu,Wp=[["zh-CN",$p],["ja",Bp],["ko",Up]];function Ic(e){if(!e)return"auto";let t="auto",n=0,r=0,a=e.match(jp);a&&(r=a.reduce((i,s)=>i+s.length,0));let o=e.length-r;for(let i of Wp){let s=i[1],l=i[0],u=e.match(s),c=u?u.length:0;c>n&&(n=c,t=l)}return n*2.5/o>.5?t:"auto"}var Hc="auto",aa="auto",Fc="auto";function $c(e){Hc=e}function Ot(e){aa=e}function It(){return aa!=="auto"?aa:Fc!=="auto"?Fc:Hc}function oa(){return aa}var nr=new Map,wn=class{constructor(t,n=!1){this.logger=new er,n&&this.logger.setLevel("debug"),this.fromType=t,nr.has(t)||(nr.set(t,new Map),V.runtime.onMessage.addListener((r,a,o)=>{let i=r.from,s=r.to,l,u,c;a.tab&&a.tab.id&&(l=a.tab.id,i=`${i}:${l}`,u=a.tab.url,c=a.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let g=as(s),{type:d,name:f}=g;if(d!==t)return!1;let p=as(i),b=nr.get(d).get(f);if(!b)return this.logger.debug(`no message handler for ${d}:${s}`),o({ok:!1,errorName:"notActive",errorMessage:`${s} is not active, from ${i} ${r.payload.method}`}),!1;let{messageHandler:m,sync:h}=b,x={type:t,name:p.name,id:l,url:u,active:c};if(h){try{let v=m(r.payload,x);o({ok:!0,data:v})}catch(v){o({ok:!1,errorName:v.name,errorMessage:v.message,errorDetails:v.details})}return!1}else return m(r.payload,x).then(v=>{o({ok:!0,data:v})}).catch(v=>{o({ok:!1,errorName:v.name,errorMessage:v.message,errorDetails:v.details})}),!0}))}getConnection(t,n,r){let a=!1;r&&r.sync&&(a=!0);let o=this.fromType,i=nr.get(o);if(i.has(t))return i.get(t).connectionInstance;{let s=new rs(`${o}:${t}`,this.logger);return nr.get(o).set(t,{messageHandler:n,sync:a,connectionInstance:s}),s}}},rs=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=as(t),{type:a,id:o}=r;if(a!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await V.runtime.sendMessage(i);return Bc(i,s,this.logger)}catch(s){if(a==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(l,n,t,s),Promise.resolve({message:l})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await V.tabs.sendMessage(o,i);return Bc(i,s,this.logger)}}};function Bc(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Ne(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function as(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var rr=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await ar():n==="translateTheMainPage"?await Sn():n==="translateToThePageEndImmediately"?await ca():n==="toggleTranslatePage"?await vn():n==="toggleTranslateTheWholePage"?await zc():n==="toggleTranslateTheMainPage"?await Wc():n==="translatePage"?await mt():n==="restorePage"?pt():n==="showTranslationOnly"?jc():n==="setCurrentPageLanguageByClient"&&Ot(r)},zp=function(e,t){let{method:n,data:r}=e;if(k.debug(`content script received sync message: ${n}`,r||" "),n==="ping")return"pong";if(n==="getPageStatus")return Ke();if(n==="getCurrentPageLanguage")return It()},sa,ia;function Uc(){let e=la();qp(),e.sendMessage("popup:main_sync",{method:"ready"}).catch(t=>{})}function la(){return sa||(sa=new wn("content_script",!1).getConnection("main",rr),sa)}function qp(){return ia||(ia=new wn("content_script",!1).getConnection("main_sync",zp,{sync:!0}),ia)}async function ht(e){return await la().sendMessage("background:main",e)}function X(e){return he()||bi()?(e.fetchPolyfill=globalThis.GM_fetch,kc(e)):ht({method:"fetch",data:e})}function je(){return he()?Ki():ht({method:"getConfig"})}function qc(){return he()?Dr():ht({method:"getLocalConfig"})}function Vc(e){return he()?Vi(e):ht({method:"setLocalConfig",data:e})}function at(e){if(e.text){let t=Ic(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(he()){let t=V.extra.detectLanguage(e.text);return Promise.resolve(t)}return ht({method:"detectLanguage",data:e})}function Kc(){return ht({method:"detectTabLanguage"})}function Gc(e){if(he()){let n=new CustomEvent(Tr,{detail:e});document.dispatchEvent(n);return}la().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function Jc(e){return he()?Oc(e):ht({method:"queryParagraphCache",data:e})}async function Yc(e){if(he()){await Dc(e);return}return ht({method:"setParagraphCache",data:e})}async function os(){if(he())return Promise.resolve();await ht({method:"mockRequest"})}function ua(){return he()?(V.runtime.openOptionsPage(),Promise.resolve()):ht({method:"openOptionsPage"})}async function Xc(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await at({text:Cr(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Zt(document.documentElement.lang)),e}function ss(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,a=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let l=e.matches(s),u=[];l?u=[e]:u=e.querySelectorAll(s);for(let c of u)Q(c,Kt)||re(c,Kt,"1");return Array.from(u)}).flat();a.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let g=Ye(e,n.additionalSelectors);for(let d of g)Q(d,Kt)||re(d,Kt,"1");a.push(...g.map(d=>({element:d,reserve:!0})))}let i=Ye(e,["article"]);a.push(...i.map(g=>({element:g,reserve:!0})));let s;if(a.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let g=Array.from(s);a=a.concat(g.map(d=>({element:d,reserve:!0})))}let l=[],u=g=>{if(g.nodeType===Node.ELEMENT_NODE&&Ue(g,t.rule,!1))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE&&(g.textContent?g.textContent.trim():"").length>=n.containerMinTextCount){let f=g.parentNode;f&&f.parentNode&&(f=f.parentNode),f&&f.nodeType===Node.ELEMENT_NODE&&(l.includes(f)||l.push(f))}return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;c.nextNode(););a.push(...l.map(g=>({element:g,reserve:!1})))}let o=yi(e,a,n);return o.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),o}var is=[];function Qc(e){is.push(e)}function ls(){is.forEach(e=>e()),is=[]}function ot(e,t,n){let r=[],{rule:a}=n,o=jn(n);if(e.length===0)return null;e=e.map(d=>d.element?d:{element:d});let i="",s=!1;for(let d=0;d<e.length;d++){let p=e[d].element;if(typeof p=="string"){i+=p;continue}let T="";Pr(p,`[${Je}]`)?T=Vp(p):T=p.innerText;let b=T.startsWith(" "),m=T.endsWith(" ");p.tagName==="A"&&(b=!0,m=!0);let h=pn(p,a);if(T===""||h){h&&(b=!0,m=!0);let x={type:"element",value:p};r.push(x);let v=r.length-1,R=`${o[0]}${v}${o[1]}`;i+=(b?" ":"")+R+(m?" ":"");continue}if(!Ue(p,a,!0)){{let x=t?T:T.trim().replace(/\n/g," ");if(Ja(x)||Ya(x)||Xa(x)||Si(x)){let v={type:"element",value:p};r.push(v);let R=r.length-1,U=`${o[0]}${R}${o[1]}`;i+=(b?" ":"")+U+(m?" ":"")}else s=!0,i+=(b?" ":"")+x+(m?" ":"")}if(typeof p!="string"){let x=Un(p.nextSibling,t);x&&(i+=x)}}}if(!s)return null;let l=!1,u=i.split(" ").length,c=i.split(`
`).length;u<=a.blockMinWordCount&&i.length<=a.blockMinTextCount&&c<2&&(l=!0);let g={elements:e.map(d=>d.element),text:i,variables:r,inline:l,preWhitespace:t};return wi(g,n.state.translationArea==="body"?2:a.paragraphMinTextCount,n.state.translationArea==="body"?1:a.paragraphMinWordCount,n)?g:null}function Vp(e){let t="",n=a=>a.nodeType===Node.ELEMENT_NODE?Q(a,Je)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(t+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var Kp=1,En=new Map;function tu(){return En}function Ft(e){return En.get(e)}function or(e,t){En.set(e,t)}function nu(){En.clear()}function Zc(e){if(!Q(e,Jt))return!1;if(Q(e,Yt))return!0;let t=Pt(e,Xt);if(!t)return!1;let n=parseInt(t),r=En.has(n);if(!r){let a=document.getElementById(`${qe}-${n}`);a&&a.remove()}return r}function Et(e,t){let n={...e,id:Kp++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(re(r,Jt,"1"),re(r,Xt,`${n.id}`))}),t.push(n),En.set(n.id,{...n,state:"Original",observers:[]})}async function ru(e,t,n){let r=[],{targetLanguage:a,rule:o}=n;for(let d of t){if(Ue(d,o,!1))continue;let f=Q(d,gn),p=[];if(Q(d,Ge)){if(!Zc(d)){let h=ot([d],f,n);h&&Et(h,r)}continue}let T=h=>{if(!(h.nodeType===Node.TEXT_NODE||h.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(h.nodeType===Node.ELEMENT_NODE){let x=h;if(x.isContentEditable||Zc(h))return NodeFilter.FILTER_REJECT;if(re(x,Jt,"1"),Q(x,Ge)){if(p.length>0){let R=ot([...p],f,n);R&&Et(R,r),p.length=0}p.push(x);let v=ot([...p],f,n);return v&&Et(v,r),p.length=0,NodeFilter.FILTER_REJECT}}if(Ue(h,o,!0)){if((h.nodeName==="CODE"||h.nodeName==="TT")&&h.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(nt(h,o))return eu(h,p,r,f,n),NodeFilter.FILTER_REJECT;if(p.length>0){let x=ot([...p],f,n);x&&Et(x,r),p.length=0}return NodeFilter.FILTER_REJECT}return h.nodeName==="PRE"?(h.classList.contains("code"),NodeFilter.FILTER_REJECT):nt(h,o)?(eu(h,p,r,f,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},b=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,T),m=b.nextNode();for(;m;){if(p.length>0){let h=ot([...p],f,n);h&&Et(h,r),p.length=0}m=b.nextNode()}if(p.length>0){let h=ot([...p],f,n);h&&Et(h,r),p.length=0}}let i=r.map(d=>{let{text:f}=d;return at({text:f})}),s=await Promise.all(i),l=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],c="auto";n.state.isDetectParagraphLanguage||(c=oa());let g=It();return s.forEach((d,f)=>{let p=d;p==="auto"&&(p=g);let T={...r[f],languageByLocal:p,languageByClient:c};if(!tr(d,a)){if(u.length>0&&u.some(h=>tr(d,h)))return;l.push(T)}}),l}function Gp(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,o=!1;for(;a=r.nextNode();){let s=a.textContent||"",l=s.trim();if(!o&&s.length>0&&l.length===0){o=!0,n.push(" ");continue}l.length>0&&(n.push(a.parentElement),o=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=Un(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=Un(e.nextSibling,t);s&&n.push(s)}return n}function eu(e,t,n,r,a){let o=e.previousElementSibling;if(o&&!nt(o,a.rule)&&t.length>0){let s=ot([...t],r,a);s&&Et(s,n),t.length=0}Ue(e,a.rule,!1)?xi(e,a.rule)||t.push(e):pn(e,a.rule)?t.push(e):Pr(e,["code","tt"])?t.push(...Gp(e,r)):t.push(e)}async function iu(e,t,n,r){let a=[],{rule:o}=n;for(let i=0;i<t.length;i++){let s=t[i],l=r[i];if(!l)throw new Error("targetContainer is null");let u=[],c=!0,g=null,d=function(T){let b=T;if(["DIV","BR"].includes(b.nodeName))return c=!0,NodeFilter.FILTER_REJECT;if(b.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(Yp(T))return NodeFilter.FILTER_REJECT;if(re(b,Jt,"1"),nt(b,o)){let m=dn(u),h=globalThis.getComputedStyle(b);if(!m)u.push(su(b,h));else{let x=globalThis.getComputedStyle(m),v=cs(x),R=cs(h),U=ou(R,v),z=!1;if(c&&g&&ou(R,g).left>=1.2&&(z=!0),!z&&c){let F=(b.innerText||b.textContent||"").trim();(F.startsWith("\u2022")||F.charCodeAt(0)===61623||/^\d+\./.test(F))&&(z=!0)}!z&&c&&dn(u)&&_r(u).reduce((ue,G)=>{let J=cs(globalThis.getComputedStyle(G));return Math.max(ue,J.right)},0)-v.right>o.pdfNewParagraphIndentRightIndentPx&&(z=!0),c&&(g=R,c=!1),z||(z=Jp(U,o)),z&&au(u,a,n,l),u.push(su(b,h)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,d),p=f.nextNode();for(;p;)p=f.nextNode();au(u,a,n,l)}return a}function au(e,t,n,r){if(e.length>0){let a=ot([...e],!1,n);a&&(a.isPdf=!0,a.targetContainer=r,a.inline=!1,Et(a,t)),e.length=0}}function cs(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function Jp(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<0}function ou(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function su(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function Yp(e){if(!Q(e,Jt))return!1;if(Q(e,Yt))return!0;let t=Pt(e,Xt);if(!t)return!1;let n=parseInt(t),a=tu().has(n);if(!a){let o=document.getElementById(`${qe}-${n}`);o&&o.remove()}return a}function lu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Xp(e,t,n=[],r,a){let o=["notranslate"];return r&&o.push(mi),e&&(o.push(`${de}-target-translation-theme-${e}`),t?o.push(`${qa}-theme-${e}`):o.push(`${za}-theme-${e}`)),n.length>0&&o.push(...n),t?o.push(qa):(o.push(za),a&&o.push(pi)),o}function Qp(e){let t=["notranslate",di];return e&&t.push(`${de}-target-translation-theme-${e}-inner`),t}function cu(e,t,n){let{rule:r,translationTheme:a}=n,{variables:o}=e;o=o||[];let{text:i}=t,{wrapperPrefix:s,wrapperSuffix:l}=r,u=jn(n),c="afterend",g=new RegExp(`${u[0]}(\\d+)${u[1]}`,"g"),d=0,f=lu(i);o.length>0&&(f=f.replace(g,b=>{let m=f.indexOf(b),h=f[m-1]===" ",x=f[m+b.length]===" ",v=o[Number(d)];if(d++,v.type==="element"){let R=v.value.outerHTML;return h||(R=" "+R),x||(R=R+" "),R}else k.error("variable type not supported",v);return b}));let p=Xp(a,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf),T=Qp(a);return f=`<span class="${p.join(" ")}"><span class="${T.join(" ")}">${f}</span></span>`,e.inline||(s==="smart"?f=`<br>${f}`:f=`${s}${f}`,l==="smart"?f=`${f}`:f=`${f}${l}`),e.inline&&(f=`<span class="notranslate">&nbsp;</span>${f}`),{html:f,position:c}}function fu(e,t){let n=[];for(let r of e){if(Q(r,Ge))continue;if(re(r,Ha,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let o=s=>s.nodeType===Node.ELEMENT_NODE&&Ue(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&fs(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,o);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let o=r.querySelectorAll("pre");for(let i of o)uu(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(Ei(r,gn)||(Zp(r)?(re(r,gn,"1"),t.isTransformPreTagNewLine&&uu(r)):re(r,gn,"0"))),us(0,r,t,n)}return{hiddenElements:n}}function us(e,t,n,r=[]){if(Q(t,Ge))return;let a=!1;if(e===0){let o=pn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&nt(t,n)&&!o&&(a=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let o of t.childNodes)if(o.nodeType===Node.ELEMENT_NODE){if(Ue(o,n,!1))continue;{let i=globalThis.getComputedStyle(o),s=!1;if(i.display==="none"&&(r.push(o),s=!0),!s){let l=i.clip,u=i.zIndex,c=i.height,g=i.width,d=0;if(u.startsWith("-")){let f=parseInt(u);isNaN(f)||(d=f)}if((l==="rect(1px, 1px, 1px, 1px)"||d<0)&&(s=!0),!s&&o.nodeName!=="BR"){let f=parseInt(c),p=parseInt(g);!isNaN(f)&&!isNaN(p)&&(f>0&&f<8||p>0&&p<=8)&&(s=!0)}}if(s){re(o,Je,"1");continue}else{if(o.nodeName==="DIV"||_i(o,n)){if((i.display==="inline"||i.display==="inline-flex")&&!Q(o,Qt)){re(o,xt,"1");continue}}else if((o.nodeName==="SPAN"||o.nodeName==="A")&&!i.display.startsWith("inline")){Q(o,xt)||(re(o,Qt,"1"),us(e+1,o,n,r));continue}if(nt(o,n)&&!a)continue;us(e+1,o,n,r)}}}else if(o.nodeType===Node.TEXT_NODE){let i=o.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");o.after(s),s.appendChild(o)}}}}function Zp(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function uu(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function fs(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let l=n.lastIndexOf(s,t);return l>i?l:i},-1);if(o===-1)n.length>t+20&&fs(e,t+20);else{let i=n.slice(o+1);o++,i.startsWith(" ")&&o++;let s=e.splitText(o),l=document.createElement("br");s.parentNode?.insertBefore(l,s),o+1<n.length&&fs(s,t)}}function gu(e,t){let n=[];for(let r of e){let a=0,o=1e5,i=document.createElement("div"),s=c=>{let g=c;if(["DIV","BR"].includes(g.nodeName))return NodeFilter.FILTER_REJECT;if(g.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(g.nodeName==="SPAN"){let d=g.getBoundingClientRect(),f=globalThis.getComputedStyle(g),p=d.right,T=d.left,b=f.top.slice(0,-2),m=f.fontSize.slice(0,-2);return p>a&&(a=p),T<o&&(o=T),re(g,Hn,`${T}`),re(g,vr,`${p}`),re(g,ui,b),re(g,fi,m),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;l.nextNode(););let u=a-o;u<600&&(u=600),n.push(i),i.style.left=a+"px",i.style.width=u+"px",i.classList.add(Er),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var Z=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,a=[],o=[],i=0,s=new Set,l=null,u=r[0].from,c=!1;r.some(d=>d.from!==u)&&(c=!0);try{o=Nc(r,this.maxTextLength,this.maxTextGroupLength)}catch(d){if(n){s.has(i)&&i++;for(let f=i;f<r.length;f++){let p=r[f];n(d,null,p)}l=d}else l=d}let g=Kr({limit:this.throttleLimit,interval:1e3});k.debug("tempSentenceGroups",o.map(d=>d));for(let d=0;d<o.length;d++){let f=o[d],p=f.url,T=g(async()=>{let h=f.from;if(c&&(h="auto"),f.fromByClient!=="auto"&&(h=f.fromByClient),this.isSupportList)return await this.translateList({text:f.tempSentences.map(v=>v.text),from:h,to:f.to,url:p});{let x=f.tempSentences.map(z=>z.text).join(Wa),v=await this.translate({text:x,from:h,to:f.to,url:p}),{text:R}=v;return{text:R.split(Wa),from:v.from,to:v.to}}}),b;try{b=await T()}catch(h){if(n){s.has(i)&&i++;for(let x=i;x<r.length;x++){let v=r[x];n(h,null,v)}l=h;continue}else{l=h;continue}}let{text:m}=b;for(let h=0;h<m.length;h++)try{let x=m[h],v=f.tempSentences[h],{index:R,prefix:U,suffix:z}=v;a[R]===void 0?a[R]={...r[R],from:f.from,to:f.to,text:U+x+z}:a[R].text+=U+x+z,R!==i&&n&&(s.add(i),n(null,a[i],r[i])),i=R}catch(x){if(n){s.has(i)&&i++;for(let v=i;v<r.length;v++){let R=r[v];n(x,null,R)}throw x}else throw x}}if(n&&!s.has(i)&&a[i]&&r[i]&&n(null,a[i],r[i]),l)throw l;return{sentences:a}}detectLanguageLocally(t){return at({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Ln="input is invalid type",gs=typeof window=="object",Ht=gs?window:{};Ht.JS_SHA256_NO_WINDOW&&(gs=!1);var em=!gs&&typeof self=="object",tm=!Ht.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;tm?Ht=global:em&&(Ht=self);var Yx=!Ht.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,Xx=typeof define=="function"&&define.amd,sr=!Ht.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",C="0123456789abcdef".split(""),nm=[-2147483648,8388608,32768,128],st=[24,16,8,0],fa=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],ga=["hex","array","digest","arrayBuffer"],_e=[];(Ht.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});sr&&(Ht.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var du=function(e,t){return function(n){return new Ce(t,!0).update(n)[e]()}},mu=function(e){var t=du("hex",e);t.create=function(){return new Ce(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<ga.length;++n){var r=ga[n];t[r]=du(r,e)}return t},pu=function(e,t){return function(n,r){return new da(n,t,!0).update(r)[e]()}},hu=function(e){var t=pu("hex",e);t.create=function(a){return new da(a,e)},t.update=function(a,o){return t.create(a).update(o)};for(var n=0;n<ga.length;++n){var r=ga[n];t[r]=pu(r,e)}return t};function Ce(e,t){t?(_e[0]=_e[16]=_e[1]=_e[2]=_e[3]=_e[4]=_e[5]=_e[6]=_e[7]=_e[8]=_e[9]=_e[10]=_e[11]=_e[12]=_e[13]=_e[14]=_e[15]=0,this.blocks=_e):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Ce.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(Ln);if(sr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!sr||!ArrayBuffer.isView(e)))throw new Error(Ln)}else throw new Error(Ln);t=!0}for(var r,a=0,o,i=e.length,s=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(o=this.start;a<i&&o<64;++a)s[o>>2]|=e[a]<<st[o++&3];else for(o=this.start;a<i&&o<64;++a)r=e.charCodeAt(a),r<128?s[o>>2]|=r<<st[o++&3]:r<2048?(s[o>>2]|=(192|r>>6)<<st[o++&3],s[o>>2]|=(128|r&63)<<st[o++&3]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<st[o++&3],s[o>>2]|=(128|r>>6&63)<<st[o++&3],s[o>>2]|=(128|r&63)<<st[o++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++a)&1023),s[o>>2]|=(240|r>>18)<<st[o++&3],s[o>>2]|=(128|r>>12&63)<<st[o++&3],s[o>>2]|=(128|r>>6&63)<<st[o++&3],s[o>>2]|=(128|r&63)<<st[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=s[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Ce.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=nm[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Ce.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=this.blocks,u,c,g,d,f,p,T,b,m,h,x;for(u=16;u<64;++u)f=l[u-15],c=(f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3,f=l[u-2],g=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10,l[u]=l[u-16]+c+l[u-7]+g<<0;for(x=t&n,u=0;u<64;u+=4)this.first?(this.is224?(b=300032,f=l[0]-1413257819,s=f-150054599<<0,r=f+24177077<<0):(b=704751109,f=l[0]-210244248,s=f-1521486534<<0,r=f+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),g=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),b=e&t,d=b^e&n^x,T=a&o^~a&i,f=s+g+T+fa[u]+l[u],p=c+d,s=r+f<<0,r=f+p<<0),c=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),m=r&e,d=m^r&t^b,T=s&a^~s&o,f=i+g+T+fa[u+1]+l[u+1],p=c+d,i=n+f<<0,n=f+p<<0,c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),h=n&r,d=h^n&e^m,T=i&s^~i&a,f=o+g+T+fa[u+2]+l[u+2],p=c+d,o=t+f<<0,t=f+p<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),x=t&n,d=x^t&r^h,T=o&i^~o&s,f=a+g+T+fa[u+3]+l[u+3],p=c+d,a=e+f<<0,e=f+p<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+a<<0,this.h5=this.h5+o<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};Ce.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=C[e>>28&15]+C[e>>24&15]+C[e>>20&15]+C[e>>16&15]+C[e>>12&15]+C[e>>8&15]+C[e>>4&15]+C[e&15]+C[t>>28&15]+C[t>>24&15]+C[t>>20&15]+C[t>>16&15]+C[t>>12&15]+C[t>>8&15]+C[t>>4&15]+C[t&15]+C[n>>28&15]+C[n>>24&15]+C[n>>20&15]+C[n>>16&15]+C[n>>12&15]+C[n>>8&15]+C[n>>4&15]+C[n&15]+C[r>>28&15]+C[r>>24&15]+C[r>>20&15]+C[r>>16&15]+C[r>>12&15]+C[r>>8&15]+C[r>>4&15]+C[r&15]+C[a>>28&15]+C[a>>24&15]+C[a>>20&15]+C[a>>16&15]+C[a>>12&15]+C[a>>8&15]+C[a>>4&15]+C[a&15]+C[o>>28&15]+C[o>>24&15]+C[o>>20&15]+C[o>>16&15]+C[o>>12&15]+C[o>>8&15]+C[o>>4&15]+C[o&15]+C[i>>28&15]+C[i>>24&15]+C[i>>20&15]+C[i>>16&15]+C[i>>12&15]+C[i>>8&15]+C[i>>4&15]+C[i&15];return this.is224||(l+=C[s>>28&15]+C[s>>24&15]+C[s>>20&15]+C[s>>16&15]+C[s>>12&15]+C[s>>8&15]+C[s>>4&15]+C[s&15]),l};Ce.prototype.toString=Ce.prototype.hex;Ce.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,a>>24&255,a>>16&255,a>>8&255,a&255,o>>24&255,o>>16&255,o>>8&255,o&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,s&255),l};Ce.prototype.array=Ce.prototype.digest;Ce.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function da(e,t,n){var r,a=typeof e;if(a==="string"){var o=[],i=e.length,s=0,l;for(r=0;r<i;++r)l=e.charCodeAt(r),l<128?o[s++]=l:l<2048?(o[s++]=192|l>>6,o[s++]=128|l&63):l<55296||l>=57344?(o[s++]=224|l>>12,o[s++]=128|l>>6&63,o[s++]=128|l&63):(l=65536+((l&1023)<<10|e.charCodeAt(++r)&1023),o[s++]=240|l>>18,o[s++]=128|l>>12&63,o[s++]=128|l>>6&63,o[s++]=128|l&63);e=o}else if(a==="object"){if(e===null)throw new Error(Ln);if(sr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!sr||!ArrayBuffer.isView(e)))throw new Error(Ln)}else throw new Error(Ln);e.length>64&&(e=new Ce(t,!0).update(e).array());var u=[],c=[];for(r=0;r<64;++r){var g=e[r]||0;u[r]=92^g,c[r]=54^g}Ce.call(this,t,n),this.update(c),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}da.prototype=new Ce;da.prototype.finalize=function(){if(Ce.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Ce.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Ce.prototype.finalize.call(this)}};var _n=mu();_n.sha256=_n;_n.sha224=mu(!0);_n.sha256.hmac=hu();_n.sha224.hmac=hu(!0);var bu=_n;var yu=bu.sha256;function it(e){return Promise.resolve(yu(e))}function pa(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function $t(e,t){let n=yu.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Tu(e,t){let n=await $t(e,t);return pa(n)}async function ma(e,t){let n=rm(t),r=await $t(e,n);return pa(r)}function rm(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}var xu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],lt=class extends Z{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),o=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${a}-${o}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:lt.langMap.get(a),SourceText:r,Target:lt.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:lt.langMapReverse.get(s.Response.Source)||a,to:lt.langMapReverse.get(s.Response.Target)||o}}async translateList(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:lt.langMap.get(a),SourceTextList:r,Target:lt.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:lt.langMapReverse.get(s.Response.Source)||a,to:lt.langMapReverse.get(s.Response.Target)||o}}async signedRequest({secretId:n,secretKey:r,action:a,payload:o,service:i,version:s}){let l=`${i}.tencentcloudapi.com`,u=new Date,c=`${new Date().valueOf()}`.slice(0,10),g=["POST","/","","content-type:application/json; charset=utf-8",`host:${l}`,"","content-type;host",await it(o)].join(`
`),d=lt.getUTCDate(u),f=["TC3-HMAC-SHA256",c,`${d}/${i}/tc3_request`,await it(g)].join(`
`),p=await Tu(d,`TC3${r}`),T=await ma(i,p),b=await ma("tc3_request",T),m=await ma(f,b),h=await X({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:l,"X-TC-Action":a,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${m}`},body:o});if(h instanceof Error)throw h;if(h.Response&&h.Response.Error&&h.Response.Error.Message)throw new Error(h.Response.Error.Message);return h}},tn=lt;tn.langMap=new Map(xu),tn.langMapReverse=new Map(xu.map(([n,r])=>[r,n]));var wu=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],ir=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:a,to:o}=n;if(!r)return{...n};let i=ir.langMap.get(a)||"auto",s=ir.langMap.get(o)||"zh-CN",l=await this.fetchWithoutToken(r,i,s);if(!l)throw new Error("google translate NETWORK_ERROR");if(!l.data[0]||l.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:l.data[0].map(c=>c[0]).filter(Boolean).join(""),from:ir.langMapReverse.get(l.data[2])||"auto",to:o}}async fetchWithoutToken(n,r,a){let o=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:a,q:n}),i="https://translate.googleapis.com/translate_a/single?"+o.toString();return{data:await X({url:i})}}},nn=ir;nn.langMap=new Map(wu),nn.langMapReverse=new Map(wu.map(([n,r])=>[r,n]));function vu(e){return e.result.texts}function am(e,t){return t?e+(t-e%t):e}function om(e,t){return e.split(t).length-1}function Su(e){let t=Date.now(),n=1;for(let r of e)n+=om(r,"i");return am(t,n)}function sm(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ds(){return sm(1e6,1e8)}var ps="https://www2.deepl.com/jsonrpc",ha="auto",Eu=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],Lu=["formal","informal"];function Cu(e,t=ha,n=ds()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function im(e,t=1){let n=[],r=0;for(let a=0;a<e.length;a++){let o=e[a].chunks;for(let i=0;i<o.length;i++){let s=o[i];n.push({kind:"default",_index:a,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:o.slice(0,r).map(l=>l.sentences[0].text),raw_en_context_after:r+1<o.length?[o[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function _u(e){return e.reduce((t,n)=>{let r=n.chunks;for(let a of r)t.push(a.sentences[0].text);return t},[])}function lm(e){if(!e)return{};if(!Lu.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function ku(e,t,n,r=ds(),a=1,o){let i=_u(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:im(n,a),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:lm(o),timestamp:Su(_u(n))},id:r}}function cm(e=Eu){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function ms(e){return cm()[e.toLowerCase()]}var Pu={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function Mu(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function um(e,t,n){let r=Cu(e,t,n);return await X({method:"POST",url:ps+"?method=LMT_split_text",headers:Pu,body:Mu(r)})}async function fm(e,t,n,r,a,o){let i=await um(e,n,r),s=ku(n==="auto"?i.result.lang.detected:n,t,vu(i),r,a,o),l=s.params.jobs.map(g=>g._index);s.params.jobs=s.params.jobs.map(g=>{let d={...g};return delete d._index,d});let u=await X({method:"POST",url:ps+"?method=LMT_handle_jobs",body:Mu(s),headers:Pu}),c={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((g,d)=>{let f=l[d];c.text[f]===void 0&&(c.text[f]="");let p=s.params.jobs[d].sentences[0].prefix,T=s.params.jobs[d].sentences[0].prefix;c.text[f]=c.text[f]+p+g.beams[0].sentences[0].text}),c}async function Au(e,t,n=ha,r,a,o){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:fm(e,ms(t),ms(n)??"auto",r,a,o):{text:[],from:n,to:t}}var Ru=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Cn=class extends Z{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:a,from:o}=n,i=await Au(r,Cn.langMap.get(a),Cn.langMap.get(o));return{text:i.text,from:Cn.langMapReverse.get(i.from),to:Cn.langMapReverse.get(i.to)}}},rn=Cn;rn.langMap=new Map(Ru),rn.langMapReverse=new Map(Ru.map(([n,r])=>[r,n]));var Nu=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Kw=new Map(Nu),Gw=new Map(Nu.map(([e,t])=>[t,e]));var Du=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],hs="https://transmart.qq.com/api/imt",an=class extends Z{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:a}=n,o=await this.detectLanguage(r),i=an.langMap.get(o)||o,s=an.langMap.get(a)||a;if(o===a)return{text:r,from:o,to:a};let l=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await X({url:hs,body:l,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:o||"auto",to:a}}async translateList(n){let{from:r,text:a,to:o}=n;if(a.length===1){let g=await this.translate({from:r,text:a[0],to:o,url:n.url});return{text:[g.text],from:g.from,to:g.to}}let i=await this.detectLanguage(a.join(`
`));if(i===o)return{text:a,from:i,to:o};let s=an.langMap.get(i)||i,l=an.langMap.get(o)||o,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:s,orig_url:n.url},target:{lang:l},type:"plain"}),c=await X({url:hs,body:u,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:i||"auto",to:o}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await X({url:hs,method:"POST",body:JSON.stringify(r)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let o=a.language,i=an.langMapReverse.get(o);return i||o}},on=an;on.langMap=new Map(Du),on.langMapReverse=new Map(Du.map(([n,r])=>[r,n]));function Ou(){return Math.random()>=0}var kn=class extends Z{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await os(),await Wn(5e3);let a=r.match(/^\s*/)[0].length;return{text:r.slice(0,a)+"\u6A21\u62DF\uFF1A"+r.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:a,to:o}=n;if(await os(),!Ou())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:a,to:o,text:[""]}:{from:a,to:o,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var Hu=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],Iu=new Map(Hu),Fu=new Map(Hu.map(([e,t])=>[t,e])),lr=class extends Z{constructor(n,r){super(n,r);this.apikey="";this.codename=lr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...lr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:lr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:a,to:o}=n,i=await X({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:Iu.get(a)||"auto",target_lang:Iu.get(o)})});if(i.status){let s=i;return{text:s.result,from:Fu.get(s.source_lang),to:Fu.get(s.target_lang)}}else throw new Error(i.msg)}},ba=lr;ba.DEFAULT_CODENAME="deepl";var ya=ba;var Bu=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],$u=new Map(Bu),gm=new Map(Bu.map(([e,t])=>[t,e])),bs=class extends Z{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:a,text:o}=n,i={source_lang:$u.get(r),target_lang:$u.get(a)},s=new URLSearchParams(i);o.forEach(f=>{s.append("text",f)});let l=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let c=await X({url:u,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:g}=c;return{text:g.map(f=>f.text),from:g[0]&&gm.get(g[0].detected_source_language)||r,to:a}}},Uu=bs;var dm=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],xe={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},ys=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Ts=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=ys(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(ys).sort().join(`&${r}=`)}`:`${r}=${ys(n)}`}).filter(t=>t).join("&"),cr=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let a=t[r];return typeof a<"u"&&a!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],a=this.credentialString(n);return r.push(`${xe.algorithm} Credential=${t.accessKeyId}/${a}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),a={...this.request.params},o=this.request.params,i=this.request.headers;t.sessionToken&&(a[xe.tokenHeader]=t.sessionToken),a[xe.dateHeader]=r,a[xe.notSignBody]="",a[xe.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,a[xe.algorithmKey]=xe.algorithm,a[xe.signHeadersKey]="",a[xe.signQueriesKey]=void 0,a[xe.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let s=await this.signature(t,r);return this.request.params=o,this.request.headers=i,a[xe.signQueriesKey]=Object.keys(a).sort().join(";"),a[xe.signatureKey]=s,Ts(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[xe.dateHeader]=n,t.sessionToken&&(this.request.headers[xe.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[xe.contentSha256Header]=await it(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return pa(await $t(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(xe.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=Ts(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,a)=>r[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let a=r[0].toLowerCase();if(this.isSignableHeader(a)){let o=r[1];if(typeof o>"u"||o===null||typeof o.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(o.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await it(t)}async hexEncodedBodyHash(){return this.request.headers[xe.contentSha256Header]?this.request.headers[xe.contentSha256Header]:this.request.body?await this.hexEncodedHash(Ts(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return dm.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,a){let o=await $t(n,`${xe.kDatePrefix}${t.secretKey}`),i=await $t(r,o),s=await $t(a,i);return $t(xe.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,xe.v4Identifier].join("/")}};var Wu=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],ju=new Map(Wu),pm=new Map(Wu.map(([e,t])=>[t,e])),xs=class extends Z{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n,i=ju.get(a),s={TargetLanguage:ju.get(o)||o,TextList:r};i&&(s.SourceLanguage=i);let l={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new cr(l,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(l.params),g=await X({url:"https://open.volcengineapi.com"+l.pathname+"?"+c.toString(),headers:u.request.headers,method:l.method,body:l.body});if(g.TranslationList){let d=g.TranslationList.map(p=>p.Translation),f=a;return g.TranslationList.length>0&&g.TranslationList[0].DetectedSourceLanguage&&(f=pm.get(g.TranslationList[0].DetectedSourceLanguage)||a),{text:d,from:f,to:o}}else{let d=g.ResponseMetaData.Error;throw new Ne(d.Code,d.Message)}}},zu=xs;var qu=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],mm=new Map(qu),hm=new Map(qu.map(([e,t])=>[t,e])),ur=class extends Z{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:a,to:o}=n,s={source_language:mm.get(a)||"detect",target_language:"zh",text:r},l=await X({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(l.base_resp&&l.base_resp.status_code===0){let u=l.translation,c=a;return l.detected_language&&(c=hm.get(l.detected_language)||a),{text:u,from:c,to:o}}else{let u=l.base_resp;throw new Ne(u.status_code.toString(),u.status_message)}}};var bm=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Vu=new Map(bm),fr=class extends Z{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:a,to:o}=n,s=await X({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Vu.get(a)||a,target_lang:Vu.get(o)||o,text:r})});if(s.code===200)return{text:s.data,from:a,to:o};throw new Error(s.message||s.message||"API Error")}};var ws="https://{s}bing.com",Xu=ws+"/translator",ym=ws+"/ttranslatev3",Tm=ws+"/tspellcheckv3",Ta="bingGlobalConfig",Qu=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],Ku=new Map(Qu),Gu=new Map(Qu.map(([e,t])=>[t,e])),Ju=1e3,ct,Pn;function vs(e,t){return e.replace("{s}",t?t+".":"")}async function xm(){if(!ct){let n=await V.storage.local.get(Ta);return n&&(ct=n[Ta]),!0}let{tokenTs:e,tokenExpiryInterval:t}=ct;return Date.now()-e>t}async function Yu(){let e,t,n,r,a,o,i,s,l,u;try{let c=vs(Xu,e),g=await X({url:c,responseType:"raw"}),{body:d,headers:f,url:p}=g;e=p.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=f["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[a,r,o,i,s,l]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw console.error("failed to fetch global config",c),c}return ct={subdomain:e,IG:t,IID:n,key:a,token:r,tokenTs:a,tokenExpiryInterval:o,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:l,cookie:u,count:0},await V.storage.local.set({[Ta]:ct}),ct}function wm(e){let{IG:t,IID:n,subdomain:r,isVertical:a}=ct;return vs(e?Tm:ym,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+ct.count++:"")}function vm(e,t,n,r){let{token:a,key:o}=ct,i={fromLang:n,text:t,token:a,key:o};return!e&&r&&(i.to=r),i}async function Zu(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Ju)throw new Error(`The supported maximum length of text is ${Ju}. Please shorten the text.`);Pn||(Pn=Yu()),await Pn,await xm()&&(Pn=Yu(),await Pn),t=t||"auto",n=n||"zh-CN",t=Ku.get(t)||t,n=Ku.get(n)||n;let a=wm(!1),o=vm(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:vs(Xu,ct.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(o),l=a,u=s.toString(),c=await X({url:l,headers:i,method:"POST",body:u});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(ct=null,Pn=null,await V.storage.local.remove(Ta),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let g=c[0].translations[0],d=c[0].detectedLanguage;return{text:g.text,from:Gu.get(d.language),to:Gu.get(g.to)}}var gr=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:a,to:o}=n;return r?await Zu(r,a,o):{...n}}};var tf=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],ef=new Map(tf),Sm=new Map(tf.map(([e,t])=>[t,e])),Ss=class extends Z{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:a}=this,{appid:o,key:i}=this,{text:s,from:l,to:u}=n,c=new URLSearchParams({from:ef.get(l),to:ef.get(u),q:s,salt:r,appid:o,sign:Tn(o+s+r+i)}),g=new URL(a);g.search=c.toString();let d=await X({url:g.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new Ne("API_SERVER_ERROR",d.error_msg);let{trans_result:f,from:p}=d,T=f.map(({dst:m})=>m);return{from:Sm.get(p),to:u,text:T.join(`
`)}}},nf=Ss;var Em=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],rf=new Map(Em),Es=class extends Z{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n;a==="auto"&&(a=await at({text:r.join(" ")}));let i=r;return{text:(await X({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${rf.get(a)}2${rf.get(o)}`})})).target,from:a,to:o}}},af=Es;var sf=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],of=new Map(sf),Lm=new Map(sf.map(([e,t])=>[t,e]));function _m(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Ls=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),l=this.appId+_m(r)+i+s+this.appSecret,u=await it(l),c={q:r,appKey:this.appId,salt:i.toString(),from:of.get(a),to:of.get(o),sign:u,signType:"v3",curtime:s.toString()},g=new URLSearchParams(c),f=await X({url:"https://openapi.youdao.com/api",method:"POST",body:g.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p=f.l,[T,b]=p.split("2");return{text:f.translation.join(`
`),from:Lm.get(T),to:o}}},lf=Ls;var Mn={mock:{class:kn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:kn,name:"Mock2",homepage:"https://www.google.com"},google:{class:nn,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:on,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:Uu,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:zu,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:ur,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:gr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:tn,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:nf,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:af,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:ya,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:lf,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:rn,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:fr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function _s(e,t){let n=Mn[e],r=t.config.translationServices[e]||{},a=!0,o=n.class.getAllProps();if(o.length>0){let i=o.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){a=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:a,config:r,props:n.class.getProps(),allProps:o}}var Cm=Object.keys(Mn),cf=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return Cm.filter(a=>{let o=Mn[a];return a.startsWith("mock")?!!r:!o.alpha||n||a===e.translationService}).map(a=>_s(a,e))};async function Cs(e,t){if(!e.text)return e;let n=await ks({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Ne("translateFailed","translate failed")}async function ks(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:a}=t,o=r.translationGeneralConfig,i=r.translationServices,s=a,l=i[s]||{};e.sentences=e.sentences.map(b=>b);let u=[],c={sentences:Array(e.sentences.length)},g=e.sentences.length,d=-1;if(r.cache)for(let b of e.sentences){d++;let m=s;s==="openl"&&(m=s+"-"+l.codename||ya.DEFAULT_CODENAME);let h=null;try{h=await Or(Jc({originalText:b.text,from:b.from,to:b.to,service:m}),1e3)}catch(x){k.warn("query cache DB error, but it's ok",x)}if(h){let x={...b,text:h.translatedText};c.sentences[d]=x,n&&n(null,x,b)}else u.push(b)}else u.push(...e.sentences);let f=u.length;if(g-f>0&&k.debug(`use ${g-f} sentences from cache`),!u.length)return c;let p;try{p=new Mn[s].class(l,o),await p.init()}catch(b){if(n)for(let m of u)n(b,null,m);throw b}let T=await p.multipleTranslate({sentences:u},(b,m,h)=>{if(n&&(n(b,m,h),!b&&m&&!s.startsWith("mock")&&r.cache)){let x=s;s==="openl"&&(x=s+"-"+l.codename||ya.DEFAULT_CODENAME),r.cache&&Or(Yc({translatedText:m.text,from:h.from,to:h.to,detectedFrom:m.from,key:Tn(h.text),service:x}),3e3).catch(v=>{k.warn("set cache DB error",v)})}});for(let b of T.sentences){let m=c.sentences.findIndex(h=>!h);if(m===-1)throw new Ne("translateFailed","can not match the result");c.sentences[m]=b}return c}var uf=["*://*/*","*","*://*"],gf="immersive-translate-wildcard-placeholder.com";function Ps(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>uf.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let a=r.href,o=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let l=s;if(s===o)return!0;if(uf.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===o:Pm(a,s)}catch{}return!1}else{let u,c=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let g=s.replace(/\*/g,gf),d;try{d=new URL(g)}catch{return k.debug("invalid match pattern",g,"raw match value:",c),!1}let f=d.hostname,p=d.pathname;p==="/"&&(c.replace("://","").includes("/")||(p="/*"));let T=km(u+":",ff(f),ff(p));if(T){let b=new URL(a);return b.port="",T.test(b.href)}else return!1}});if(i)return i}return null}function ff(e){return e.replace(gf,"*")}function km(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function dr(e,t){return Ps(e,t)!==null}function Pm(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}async function Lt(e){let{url:t,config:n,state:r}=e,a=new URL(t),o="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:l,translationTheme:u,translationThemePatterns:c,translationUrlPattern:g,targetLanguage:d,sourceLanguageUrlPattern:f,immediateTranslationPattern:p}=n,T=An(t,i),b=An(t,p),m=s,h=Object.keys(l);for(let P of h){let M=l[P];if(An(t,M)){m=P;break}}let x=u,v=Object.keys(c);for(let P of v){let M=c[P];if(An(t,M)){x=P;break}}let R=An(t,g),U=Mm(t,g);U||(U=dr(t,hi));let z=Object.keys(f),I={};for(let P of z){let M=f[P];if(M&&M.matches)for(let q of M.matches)I[q]=P}let F=Object.keys(I),se=Ps(t,F);se&&(o=I[se]??"auto",I[se]&&I[se]!=="auto"&&Ot(I[se]));let ue=d||"zh-CN",G=a.hostname,J=await it(G),ee=a.pathname+a.search+a.hash,pe=await it(ee),We=`https://${J}.com/${pe}`,ie=await Dr(),me=n.translationStartMode;me==="dynamic"&&b&&(me="immediate");let ne={targetLanguage:ue,config:n,translationService:m,translationTheme:x,isTranslateUrl:R,sourceLanguage:o,isTranslateExcludeUrl:U,rule:n.generalRule,url:t,encryptedUrl:We,state:r||{translationArea:n.translationArea,translationStartMode:me,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:T},localConfig:ie};ne.state.translationArea==="body"&&(ne.config.generalRule.excludeTags=ne.config.generalRule.excludeTags.filter(P=>P!=="BUTTON"&&P!=="LABEL"),ne.config.generalRule.additionalExcludeSelectors=ne.config.generalRule.additionalExcludeSelectors.filter(P=>P!==".btn")),ne.translationService==="d"&&(n.immediateTranslationTextCount=0);let yt=n.rules,_t;globalThis.PDFViewerApplication?_t=yt.find(P=>P.isPdf):_t=yt.find(P=>An(t,P));let w=n.generalRule;return _t&&(ne.rule=Nr(w,_t)),ne.rule.isPdf&&(ne.state.translationArea="main"),ne.state.translationArea==="body"&&(ne.rule.paragraphMinTextCount=1,ne.rule.paragraphMinWordCount=1),ne}function An(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:a,excludeSelectorMatches:o}=t;return r&&r.length>0&&dr(e,r)?!1:n&&n.length>0&&dr(e,n)?!0:o&&o.length>0&&kr(o)?!1:!!(a&&a.length>0&&kr(a))}function Mm(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&dr(e,n)||r&&r.length>0&&kr(r))}var wa="Original",xa=[],Ds=new Set,Ms=[],va=[],pf=[],Sa=[],df=globalThis.location.href.split("#")[0],Os=0,Se,Am=Ir($m,300),Rm=Ir(mf,200),Nm=wt(),Dm=Nm.PROD==="1",pr,mr,hr="";async function vn(){Ke()==="Original"?await mt():(Ke()==="Translated"||Ke()==="Error")&&pt()}function jc(){let e=document.querySelectorAll(`[${Yt}="1"]`);for(let t of e)t.style.display="none"}function pt(){ls(),Ns(),He("Translating"),hr&&(document.title=hr),document.querySelectorAll("."+qe).forEach(r=>{r.remove()}),document.querySelectorAll("."+Er).forEach(r=>{r.remove()}),document.querySelectorAll("["+Ua+"]").forEach(r=>{if(Dm)delete r[Ee];else{let o=Object.keys(r.dataset).filter(i=>i.startsWith(le));for(let i of o)delete r.dataset[i]}r.removeAttribute(Ua)}),He("Original")}function Om(e,t){let n=!1,r=Ga(e.elements),a=dn(e.elements);Ds.add(e.id);let o=[];if(r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});va.push(s),o.push(s),s.observe(r)}if(a&&a!==r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});va.push(s),o.push(s),s.observe(a)}let i=Ft(e.id);i&&(i.observers=o,or(e.id,i))}function Im(e,t){if(e){let n=new ResizeObserver((r,a)=>{for(let o of r)o.contentRect.width>10&&(a.disconnect(),t(o.target))});n.observe(e),pf.push(n)}}async function mf(e){let t=[...Sa];Sa=[];try{let n=[];for(let r of t){let a=ss(r,e);if(a.length===0)continue;let o=a;n.push(...o)}await Is(n,e)}catch(n){k.error(`translateNewDynamicNodes error: ${n.message}`)}}function As(e,t){Ds.delete(e.id);let n=Ft(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(o=>{o.disconnect()}),n.observers=[],n.state="Translating",or(e.id,n));let r=e.id;Os+=e.text.length;let a=_r(e.elements);if(e.isPdf){let o=Ga(e.elements),i=window.getComputedStyle(o),s=i.top,l=i.fontSize,u=parseFloat(l.slice(0,-2));isNaN(u)||u>28&&(l="28px");let c=e.targetContainer,g=document.createElement("span");a.length===1&&(g.style.fontSize=l),g.id=`${qe}-${r}`,g.style.top=s;let d=Pt(o,Hn),f=a.reduce((b,m)=>{let h=Pt(m,Hn);return h&&h<b?h:b},1e3),T=a.reduce((b,m)=>{let h=Pt(m,vr);return h&&h>b?h:b},0)-f;T<30,T>600&&(T=600),d<200&&(d=10),d&&d<0&&(d=0),g.style.left=`${d||10}px`,f<400?g.style.width=T+"px":g.style.width=`calc(100% - ${f}px)`,g.classList.add("notranslate",`${qe}`),c.appendChild(g)}else{let o=dn(e.elements),i="afterend";e.elements.length>0&&o&&(a.length===1?i="beforeend":nt(e.elements[0],t.rule)||(i="beforeend"));let s=document.createElement("span");if(s.classList.add("notranslate",qe),s.id=`${qe}-${r}`,s.innerHTML=bf(),i==="beforeend"){let l=Ci(o);l?l.appendChild(s):o.appendChild(s)}else if(i==="afterend")o.insertAdjacentElement(i,s);else throw new Error("not support position")}xa.push(r),Am(t)}function Fm(e,t){t.state.translationStartMode==="dynamic"&&Os>t.config.immediateTranslationTextCount?Om(e,n=>{As(n,t)}):As(e,t)}async function mt(){if(wa==="Translating")return;He("Translating");let e=await Bt(globalThis.location.href);e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),k.debug("ctx",e),e.state.isNeedClean?pt():Se.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Qc(()=>{Os=0,nu(),va.forEach(r=>{r.disconnect()}),pf.forEach(r=>{r.disconnect()}),va=[],Ds.clear()}),He("Translating");try{Qa([document.body],e.rule);let r=ss(document.body,e);k.debug("detect containers",r),He("Translating");let{rule:a}=e;r.length>0&&await Is(r,e),hf(e).catch(o=>{k.error("translateTitle error:",o.name,o.message,o.details||"")}),Bm(a,e),r.length===0&&He("Translated")}catch(r){He("Error"),k.error(r)}}async function Bt(e){let t=await je();if(!Se)Se=await Lt({url:e,config:t});else{let n={url:e,config:t,state:Se.state};Se=await Lt(n)}return Se}async function Wc(){Ke()==="Original"?await Sn():(Ke()==="Translated"||Ke()==="Error")&&(Se=await Bt(globalThis.location.href),Se.state.translationArea!=="main"?await Sn():pt())}async function Sn(){Se=await Bt(globalThis.location.href),Se.state.translationArea="main",await mt()}async function ar(){Se=await Bt(globalThis.location.href),Se.state.translationArea="body",await mt()}async function zc(){Ke()==="Original"?await ar():(Ke()==="Translated"||Ke()==="Error")&&(Se=await Bt(globalThis.location.href),Se.state.translationArea!=="body"?(Se.state.translationArea="body",await mt()):pt())}async function ca(){Se=await Bt(globalThis.location.href),Se.state.translationArea="body",Se.state.translationStartMode="immediate",await mt(),await mf(Se)}async function hf(e){let t=document.title;if(!t||t.includes(Sr))return;hr!==t&&(hr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=oa()),n==="auto"){let r=await at({text:t});if(tr(r,e.targetLanguage))return}try{let r=await Cs({text:t,from:n,to:e.targetLanguage},e);r&&r.text&&(document.title=hr+Sr+r.text)}catch(r){throw r}}function Hm(e){let t=document.getElementById(qe+"-"+e);t&&(t.innerHTML=bf())}function bf(){return`&nbsp;<span class="${de}-loading notranslate"></span>`}async function Is(e,t){let{rule:n}=t;Qa(e,n);let r=[];if(t.rule.isPdf)e.length>0&&(He("Translating"),r=gu(e,n).targetContainers);else{He("Translating");let o=fu(e,n),{hiddenElements:i}=o;for(let s of i)Im(s,()=>{Li(s,Je),Is([s],t)});He("Translating")}let a=[];if(t.rule.isPdf?a=await iu(document.body,e,t,r):(e=e.filter(o=>!Ue(o,n,!1)),a=await ru(document.body,e,t)),He("Translating"),a.length===0){He("Translated");return}k.debug("detect paragraphs",a);for(let o of a)Fm(o,t);He("Translated")}async function yf(e){let t=Ft(e);if(!t)throw new Error("paragraph not found");Hm(e);let n=await Bt(globalThis.location.href),r={id:t.id,text:t.text,from:t.languageByLocal,fromByClient:t.languageByClient,to:n.targetLanguage,url:n.encryptedUrl};try{let a=await Cs(r,n);Rs(null,a,r,n)}catch(a){Rs(a,null,r,n)}}function Rs(e,t,n,r){let a=Ft(n.id);if(e||!t){e||(k.error("translate error",t),e=new Error("no response from server"));let o=n.id,i=document.getElementById(`${qe}-${o}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),a&&(a.state="Error",or(a.id,a));let l=`<span class="${de}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${de}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${de}-clickable-button notranslate" data-${de}-paragraph-id="${o}" data-${de}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=l)}else{let o=Ft(n.id);if(o){o.state="Translated",or(o.id,o);let i=cu(o,t,r),s=t.id,l=document.getElementById(`${qe}-${s}`);l&&(l.innerHTML=i.html,document.querySelectorAll(`[${Xt}="${s}"]`).forEach(c=>{re(c,Yt,"1")}))}else k.error("paragraph not found",n.id)}}async function $m(e){if(xa.length===0)return Promise.resolve();let t=[...xa];xa=[];let n="auto";e.state.isDetectParagraphLanguage||(n=It());let r={sentences:t.filter(o=>Ft(o)).map(o=>{let i=Ft(o),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){He("Translating");try{await ks(r,e,(o,i,s)=>{Rs(o,i,s,e)})}catch(o){He("Error"),k.error("translateCurrentQueue error",o.name,o.message,o.details||" ");return}}He("Translated")}function He(e){wa=e,Gc(wa)}function Bm(e,t){k.debug("enableMutatinObserver"),Ns(),Ms=[],Sa=[];let n=e.inlineTags.concat(e.excludeTags).concat("#text","BR");pr=new MutationObserver(function(a){a.forEach(o=>{let i=globalThis.location.href;if(i.split("#")[0]!==df&&e.observeUrlChange){df=i.split("#")[0],ls(),Ns(),setTimeout(()=>{k.debug("url changed, reinit page"),Ea()},e.urlChangeDelay);let l=new Event(li);document.dispatchEvent(l);return}o.addedNodes.forEach(l=>{if(l.nodeType===Node.ELEMENT_NODE){let u=l;if(Um(e,u)||!n.includes(u.nodeName)){if(u.classList.contains("notranslate"))return;Ti(u,Ms)||(Sa.push(u),Ms.push(u),Rm(t))}}})})}),pr.observe(document.body,{childList:!0,subtree:!0});let r=document.querySelector("title");r&&(mr=new MutationObserver(function(a){a.length>0&&(a[0].target.text.includes(Sr)||hf(t).catch(i=>{k.error("translateTitle error:",i.name,i.message,i.details||"")}))}),mr.observe(r,{subtree:!0,characterData:!0,childList:!0}))}function Um(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Ea(){let e=await Bt(globalThis.location.href);e.rule.urlChangeDelay&&await Wn(e.rule.urlChangeDelay);let t=e.sourceLanguage;t==="auto"?(he()?t=await at({text:Cr(document.body).slice(0,1e3)}):t=await Kc(),t==="auto"&&(t=await Xc()),$c(t)):Ot(t);let n=e.state.isAutoTranslate||e.isTranslateUrl||e.rule.isPdf;!n&&!e.isTranslateExcludeUrl&&(k.debug(`detect page language: ${t}`),ki(t,e.config.translationLanguagePattern)&&(n=!0,k.debug(`match language pattern ${t}, auto translate`))),n?(Se.state.isAutoTranslate=!0,await mt()):k.debug("do not auto translate")}function Ns(){pr&&(pr.disconnect(),pr.takeRecords()),mr&&(mr.disconnect(),mr.takeRecords())}function Ke(){return wa}function Tf(e){document.addEventListener("click",t=>{let n=t.target,r=n.getAttribute("data-immersive-translate-action");if(r&&r==="retry"){let a=n.getAttribute("data-immersive-translate-paragraph-id");a&&yf(Number(a))}}),e.rule.fingerCountToToggleTranslagePageWhenTouching>=2&&globalThis.addEventListener("touchstart",t=>{if(t.touches.length==e.rule.fingerCountToToggleTranslagePageWhenTouching){vn();let n=new CustomEvent(Gt,{detail:{method:"toggleTranslatePage"}});globalThis.document.dispatchEvent(n)}})}function xf(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}async function La(e){try{let t=new Date;k.debug("cron task start, next will run at",new Date(t.getTime()+e).toLocaleString()),await V.storage.local.set({[$n]:t.toISOString()}),await jm()}catch(t){k.error("run cron task failed",t)}}async function wf(){let t=(await je()).interval;if(t){let n=await V.storage.local.get($n);if(n&&n[$n]){let r=n[$n];if(Date.now()-new Date(r).getTime()<t){let a=new Date(new Date(r).getTime()+t);k.debug(`cron task not run, next will run at ${a}`);return}else La(t)}else La(t)}}async function jm(){try{let e=await je(),t=await X({url:ci}),n=e.buildinConfigUpdatedAt,r=new Date(n),a=t.buildinConfigUpdatedAt,o=new Date(a),i=t.minVersion,s=V.runtime.getManifest().version;xf(s,i)?o>r?(await V.storage.local.set({buildinConfig:t}),k.info(`sync remote rules success, latest: ${new Date(a).toLocaleString()}`)):k.debug(`no need to sync rules, latest: ${r}`):k.info(`local version is too old, please update to ${i} or later`)}catch(e){k.error("sync rules error: ",e)}}function vf(){let e=["localhost",xr],t=["/dist/userscript/options/","/options/","/options"],n=globalThis.location.href,r=new URL(n),a=r.hostname,o=r.pathname;if((e.includes(a)||a.startsWith("192.168"))&&t.includes(o)){let i=document.querySelector("meta[name=immersive-translate-options]");if(i&&i.getAttribute("content")==="true")return!0}return!1}async function Ef(){if(!document.getElementById("immersive-translate-status")){k.error("Could not find status element");return}await Sf("local"),await Sf("sync"),Wm();let t=document.getElementById("immersive-translate-page-ready");t&&setTimeout(()=>{t.value="true",t.dispatchEvent(new Event("change"))},100)}function Wm(){let e=document.getElementById("immersive-translate-manifest");if(!e){k.error("Could not find manifest element");return}e.value=JSON.stringify(V.runtime.getManifest()),e.dispatchEvent(new Event("change"))}async function Sf(e){let t=document.getElementById("immersive-translate-status"),n=document.getElementById(`immersive-translate-${e}-storage`);if(n){k.debug("init storage");let r=await V.storage[e].get(null);n.value=JSON.stringify(r),n.dispatchEvent(new Event("change")),n.addEventListener("change",a=>{try{let o=JSON.parse(a.target.value);V.storage[e].set(o)}catch(o){k.error("save to storage error",o)}})}else{k.error(`Could not find storage ${e} element`),t.innerText="Could not find storage local input element";return}}function Lf(e){let t=e.shortcuts||{},r=Object.keys(t).reduce((o,i)=>(o[t[i]]=i,o),{}),a=Object.keys(r);for(let o of a){let i=o.replace(/MacCtrl/ig,"Ctrl");et(i,s=>{s.preventDefault(),zm({method:r[o]})})}}function zm(e){rr(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(n=>{k.error("send content message request failed",e,n)});let t=new CustomEvent(Gt,{detail:e});globalThis.document.dispatchEvent(t)}function _f(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Fs(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let a=t[r],o=new RegExp("{"+r+"}","gm");n=n.replace(o,a.toString())}),n}function br(e,t,n){let r=e[t];if(!r)return n;let a=n.split("."),o="";do{o+=a.shift();let i=r[o];i!==void 0&&(typeof i=="object"||!a.length)?(r=i,o=""):a.length?o+=".":r=n}while(a.length);return r}function Hs(e,t,n,r,a){if(!e.hasOwnProperty(n))return t;let o=br(e,n,t);return o===t&&n!==r&&(o=br(e,r,t)),Fs(o,a)}var Cf={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},$s={...qt,"zh-CN":{...Cf["zh-CN"],...qt["zh-CN"]},"zh-TW":{...Cf["zh-TW"],...qt["zh-TW"]}},kf=$s;function Bs(e,t,n){return Hs($s,e,t,Lr,n)}var _a=(e,t,n)=>{let r=Hs($s,`languages.${e}`,t,"en");return n?Va[e]||e:r!==`languages.${e}`?r:Va[e]};var Rn={},qm={root:"",lang:"en",fallbackLang:"en"};function Us(e,t){let n=Object.assign({},qm,e);Rn=t||Rn;let[r,a]=we(n.lang),[o,i]=we(Rn),[s,l]=we(!1),u=g=>{if(o.hasOwnProperty(g))return;l(!1);let d=_f(n.root||"",g);n.getUrl&&(d=n.getUrl(n.root||"",g),fetch(d).then(f=>f.json()).then(f=>{Rn[g]=f,i({...Rn}),l(!0)}).catch(f=>{i({...Rn}),l(!0)}))};return rt(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:a,t:(g,d)=>{if(!o.hasOwnProperty(r))return g;let f=br(o,r,g);return f===g&&r!==n.fallbackLang&&(f=br(o,n.fallbackLang,g)),Fs(f,d)},isReady:s}}var Vm=0;function O(e,t,n,r,a){var o,i,s={};for(i in t)i=="ref"?o=t[i]:s[i]=t[i];var l={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Vm,__source:a,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return B.vnode&&B.vnode(l),l}var Ws=co(null),js={root:"assets",lang:"en",fallbackLang:"en"},Pf=e=>{let{t,setLang:n,lang:r,isReady:a}=Us({root:e.root||js.root,lang:e.lang||js.lang,fallbackLang:e.fallbackLang||js.fallbackLang,getUrl:e.getUrl},e.translations);return O(Ws.Provider,{value:{t,setLang:n,lang:r,isReady:a},children:e.children})};function Mf(e,t,n){let r=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),r=t!=="auto"?n[t].matches:[];let a={},o=Object.keys(n);for(let u of o){let g=n[u].matches;for(let d of g)a[d]||(a[d]=[]),a[d].push(u)}let i=a[e];if(i&&i.length>0)for(let u of i)n[u].matches.indexOf(e)>-1&&(n[u]={...n[u],matches:n[u].matches.filter(g=>g!==e)});let s=new Set(r);if(t==="auto")return{...n};s.add(e);let l=Array.from(s);return{...n,[t]:{...n[t],matches:l}}}function Af(e,t=2e3){return n=>{let r,a=0;return o=>{++a==e&&(n(o),a=0),clearTimeout(r),r=setTimeout(()=>a=0,t)}}}function Rf(e){let t;try{t=new URL(e)}catch{return!1}let n=t.pathname;return n.endsWith(".html")||n.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}function Nf(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function Df(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Of(){return V.runtime.getManifest().version}function Ut(e){let{items:t,maxWidth:n}=e;return n=n||128,O("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let a=r.target.value,o=t.find(i=>i.value===a);o&&o.onSelected(o)},children:t.map(r=>O("option",{value:r.value,selected:r.selected,children:r.label}))})}var Ca="DROP_DOWN_DEFAULT_VALUE";function zs(e){let{showArrow:t,onSelected:n,className:r,menus:a,maxWidth:o}=e;r=r||"",t=t??!0,o=o||60;let i=go(null);return O("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${r||""}`,value:Ca,style:{maxWidth:`${o}px`},onChange:s=>{s.preventDefault();let l=s.target.value;if(i.current&&l!==Ca){i.current.value=Ca,i.current?.dispatchEvent(new Event("change"));let u=a.find(c=>c.value===l);u&&n(u)}},children:[{value:Ca,label:e.label}].concat(a).map(s=>O("option",{value:s.value,children:s.label}))})}function ka(){return po(Ws)}function qs(e){let{field:t,onChange:n,value:r}=e;r=r||t.default||"";let{t:a}=ka();return t.type==="select"?O("div",{class:"flex justify-between mb-2",children:[O("label",{class:"inline-block",children:[t.label?a(t.label):t.name,"\uFF1A"]}),O(Ut,{items:t.options.map(o=>({label:`${o.label?a(o.label):o.value}`,value:r,selected:r===o.value,onSelected:()=>{n(o.value)}}))})]}):null}function Vs(e){let t=Of(),{onTranslateTheMainPage:n,onUserConfigChange:r,pageStatus:a,config:o,onTranslateTheWholePage:i,openOptionsPage:s,ontranslateToThePageEndImmediately:l,onSetPageLanguage:u,onToggleTranslate:c,onTranslateLocalPdfFile:g,onTranslatePdf:d,onRestorePage:f,ctx:p,currentUrl:T,currentLang:b,onClose:m,onTranslatePage:h}=e,x=r,[v,R]=we(""),[U,z]=we(""),{t:I}=ka(),F=null,se=null,ue=null,G=null,J=null,ee=null,pe=null,We=null,ie=null,me=null,ne=null,yt=null;if(o){let{translationService:S,translationServices:N,translationUrlPattern:_}=o;if(Mn[S]&&(We=_s(S,p)),N&&N[S]?yt=N[S]||{}:yt={},T&&Rf(T)){ie=new URL(T),me=Nf(ie.hostname),ne=Df(T);let{matches:A,excludeMatches:W}=_;se=A.includes(me),F=A.includes(ie.hostname),G=W.includes(me),ue=W.includes(ie.hostname),ee=A.includes(ne),pe=W.includes(ne)}}if(o&&b&&b!=="auto"){let{translationLanguagePattern:S}=o,{matches:N}=S;N.includes(b)?J=!0:J=!1}let _t=S=>{S.preventDefault(),s(),m()},w=S=>{x(N=>(N.alpha?R("Success disable alpha!"):R("Success enable alpha!"),{...N,alpha:!N.alpha}))},P=()=>{x(S=>({...S,translationArea:"body"})),i()},M=()=>{x(S=>({...S,translationArea:"main"})),n()},q=(S,N,_,A)=>{if(S==="default"){x(D=>{let oe={...D.translationUrlPattern};return{...D,translationUrlPattern:{...D.translationUrlPattern,matches:Mt([ie?.hostname,me,T],oe.matches),excludeMatches:Mt([ie?.hostname,me,T],oe.excludeMatches)}}});return}let W=S,te=W==="matches"?"excludeMatches":"matches";ie&&x(D=>{let oe={...D.translationUrlPattern};return oe[W]=ao(N,oe[W]),A.length>0&&(oe[W]=Mt(A,oe[W])),oe[te]=Mt(_,oe[te]),{...D,translationUrlPattern:{...D.translationUrlPattern,...oe}}}),W==="matches"&&a==="Original"?setTimeout(()=>{h(),m()},100):W==="excludeMatches"&&a==="Translated"&&setTimeout(()=>{f(),m()},100)},j=S=>{if(!S){x(A=>{let W={...A.translationLanguagePattern};return{...A,translationLanguagePattern:{...A.translationLanguagePattern,matches:Mt(b,W.matches),excludeMatches:Mt(b,W.excludeMatches)}}});return}let N=S,_=N==="matches"?"excludeMatches":"matches";b&&x(A=>{let W={...A.translationLanguagePattern};return W[N]=ao(b,W[N]),W[_]=Mt(b,W[_]),{...A,translationLanguagePattern:{...A.translationLanguagePattern,...W}}}),N==="matches"&&a==="Original"&&setTimeout(()=>{h(),m()},100)},be=ie?.pathname.toLowerCase().endsWith(".pdf"),fe=I("translate");a==="Translated"?fe=I("show-original"):a==="Original"?be?Ui()&&ie.protocol==="file:"?fe=I("translate-firefox-local-pdf"):fe=I("translate-pdf"):fe=I("translate"):fe=I(a);let ke=I("translateToThePageEndImmediately");(a==="Original"||a==="Translated")&&(o.shortcuts.toggleTranslatePage&&(ji()&&p.rule.fingerCountToToggleTranslagePageWhenTouching>=2?fe+=` (${I(`fingers.${p.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:fe+=` (${o.shortcuts.toggleTranslatePage})`),o.shortcuts.toggleTranslateToThePageEndImmediately&&(ke+=` (${o.shortcuts.toggleTranslateToThePageEndImmediately})`));let ge=[];p&&(ge=cf(p));let ae=S=>{S.preventDefault(),m()};return O("div",{class:"p-3",children:[O("div",{class:"text-sm",children:[O("div",{class:"flex justify-between mb-2",children:[O("label",{class:"inline-block",children:[I("popupSourceLanguage"),"\uFF1A"]}),O(Ut,{items:kt.map(S=>({label:_a(S,o.interfaceLanguage),value:S,selected:S===b,onSelected:N=>{u(N.value)}}))})]}),o&&o.targetLanguage&&O("div",{class:"flex justify-between mb-2",children:[O("label",{class:"inline-block",children:[I("popupTarget"),"\uFF1A"]}),O(Ut,{items:kt.filter(S=>S!=="auto").map(S=>({label:_a(S,o.interfaceLanguage),value:S,selected:S===o.targetLanguage,onSelected:N=>{x(_=>({..._,targetLanguage:N.value}))}}))})]}),We&&ge.length>0&&O(ft,{children:[O("div",{class:"flex justify-between mb-2",children:[O("label",{class:"inline-block",children:[I("popupService"),"\uFF1A"]}),O(Ut,{items:ge.map(S=>({label:`${I("translationServices."+S.id)}${S.ok?"":" "+I("needAction")}`,value:S.id,selected:S.selected,onSelected:N=>{let _=ge.find(A=>A.id===N.value);_.ok?(x(A=>({...A,translationService:_.id})),_.props.length===0?setTimeout(()=>{h()},1):setTimeout(()=>{f()},1)):(x(A=>({...A,translationService:_.id})),setTimeout(()=>{f()},1),setTimeout(()=>{s(),m()},100))}}))})]}),yt&&We.props.length>0&&We.props.map((S,N)=>O("div",{class:"pl-4 text-sm",children:O(qs,{field:S,value:yt[S.name],onChange:_=>{x(A=>{let W=A.translationServices||{},te=W[We.id]||{};return setTimeout(()=>{f()},1),{...A,translationServices:{...W,[We.id]:{...te,[S.name]:_}}}})}},"field-"+N)}))]}),ie&&O("div",{class:"flex justify-between mb-2",children:[O("label",{class:"inline-block",children:I("forThisSite")}),O(Ut,{items:[{label:I("default"),value:"default",selected:F===!1&&ue===!1&&!se&&!G&&!ee&&!pe,onSelected:()=>{q("default",ie.hostname,[],[])}},{label:I("alwaysTranslateSomeSite",{hostname:ie.hostname}),value:"matches",selected:F,onSelected:S=>{q(S.value,ie.hostname,[ie.hostname,me,ne],[me])}},{label:I("neverTranslateSomeSite",{hostname:ie.hostname}),value:"excludeMatches",selected:ue,onSelected:S=>{q(S.value,ie.hostname,[ie.hostname,me,ne],[me])}},me&&{label:I("alwaysTranslateSomeSite",{hostname:me}),value:"matchesWild",selected:se,onSelected:()=>{q("matches",me,[ne,ie.hostname,me],[ie.hostname])}},me&&{label:I("neverTranslateSomeSite",{hostname:me}),value:"excludeMatchesWild",selected:G,onSelected:()=>{q("excludeMatches",me,[ie.hostname,ne,me],[ie.hostname])}},ne&&{label:I("alwaysTranslateSomeSite",{hostname:I("currentUrl")}),value:"matchesUrl",selected:ee,onSelected:()=>{q("matches",ne,[ne],[])}},ne&&{label:I("neverTranslateSomeSite",{hostname:I("currentUrl")}),value:"excludeMatchesUrl",selected:pe,onSelected:()=>{q("excludeMatches",ne,[ne],[])}}].filter(Boolean)})]})]}),O("div",{class:"",children:O("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{be?d&&d():c()},"aria-busy":a==="Translating",disabled:a==="Translating",children:fe})}),O("div",{class:"flex justify-between",children:[b&&b!=="auto"?O("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[O("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!J,onChange:S=>{let N=S.target.checked;j(N?"matches":void 0)}}),I("alwaysTranslateSomeLanguage",{language:_a(b,o.interfaceLanguage)})]}):O("span",{}),O(zs,{label:I("more"),showArrow:!0,onSelected:S=>{S.value==="translateTheWholePage"?i():S.value==="translateToThePageEndImmediately"?l():S.value==="translateTheMainPage"?n():S.value==="showTranslationOnly"||(S.value==="translateLocalPdfFile"?g&&g():S.value==="donate"?(globalThis.open(o.donateUrl),m()):S.value==="feedback"?(globalThis.open(o.feedbackUrl),m()):S.value==="options"?(s(),m()):S.value==="changeToTranslateTheWholePage"?P():S.value==="changeToTranslateTheMainPage"&&M())},menus:[o.translationArea==="main"&&{label:I("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},o.translationArea==="body"&&{label:I("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:ke,value:"translateToThePageEndImmediately"},!he()&&{label:I("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2615\uFE0F "+I("sponsorLabel"),value:"donate"},{label:"\u{1F41B} "+I("feedback"),value:"feedback"},{label:"\u2699\uFE0F "+I("browser.openOptionsPage"),value:"options"}].filter(Boolean)})]}),O("div",{class:"text-sm",children:v}),O("div",{class:"text-sm",children:U}),O("footer",{class:"mt-3 text-sm flex justify-between",children:[O("a",{href:"#",class:"secondary",onClick:_t,children:I("options")}),he()&&O("a",{href:"#",class:"secondary",onClick:ae,children:I("close")}),O("span",{class:"immersive-translate-no-select muted",onClick:Af(7)(w),children:["V",t]})]})]})}var Ks={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return V.storage[n].get(r)},set:(e,t,n)=>V.storage[n].set({[e]:t})};function Pa(e,t,n){let[r]=we(()=>typeof t=="function"?t():t),[a]=we(n),[o,i]=we(r),[s,l]=we(!0),[u,c]=we("");rt(()=>{Ks.get(e,r,a).then(d=>{d[e]&&i(d[e]),l(!0),c("")}).catch(d=>{l(!1),c(d)})},[e,r,a]);let g=Kn(d=>{let f=typeof d=="function"?d(o):d;k.debug("new settings",f),Ks.set(e,f,a).then(()=>{i(f),l(!0),c("")}).catch(p=>{i(f),l(!1),c(p)})},[a,e,o]);return[o,g,s,u]}function Gs(e,t,n){let r=[];return function(){let[o,i,s,l]=Pa(e,t,n),u=Kn(c=>{for(let g of r)g(c)},[]);return rt(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[o,u,s,l]}}function If(e,t){return Gs(e,t,"sync")}var Km="userConfig",Gm={},Ff=If(Km,Gm);function Js(e){let{onClose:t}=e,[n,r]=we("Original"),[a,o,i,s]=Ff(),[l,u]=we(null),[c,g]=we(globalThis.location.href),[d,f]=we("auto"),[p,T]=we(null),b=J=>{r(J.detail)},m=J=>{f(J);let ee=Mf(c,J,l.sourceLanguageUrlPattern);o(pe=>({...pe,sourceLanguageUrlPattern:ee})),Ot(J)},h=()=>{g(globalThis.location.href)};rt(()=>(document.addEventListener(Tr,b,!1),je().then(J=>{u(J);let ee=It();f(ee);let pe=Ke();r(pe),La(J.interval)}),document.addEventListener("urlChange",h),()=>{document.removeEventListener("pageTranslatedStatus",b),document.removeEventListener("urlChange",h)}),[]),rt(()=>{je().then(J=>{u(J)})},[a]),rt(()=>{c&&l&&Lt({url:c,config:l}).then(J=>{T(J)})},[c,l]);let x=()=>{mt(),t()},v=()=>{pt()},R=()=>{vn(),t()},U=()=>{ar(),t()},z=()=>{ca(),t()},I=()=>{Sn(),t()},F=()=>{t()},se=()=>{globalThis.alert("Not implemented yet"),t()},ue=()=>{globalThis.alert("Not implemented yet"),t()},G=()=>{ua(),t()};return!l||!p?null:O(Vs,{onClose:F,onTranslateTheWholePage:U,openOptionsPage:G,onToggleTranslate:R,onTranslateTheMainPage:I,ontranslateToThePageEndImmediately:z,onTranslatePage:x,onRestorePage:v,onTranslatePdf:se,onTranslateLocalPdfFile:ue,onSetPageLanguage:m,onUserConfigChange:o,config:l,pageStatus:n,ctx:p,currentUrl:c,currentLang:d})}function Jm(e,t){for(let n of t)e.appendChild(document.createElement("style")).innerHTML=n}var $e={position:"right",right:0,top:335},Ra=!1,sn=null,bt=null,Na=null,Ys=null,Nn=null,Xs=null,Hf=6,Ma,Aa,Bf=null,Uf=null;async function Zs(){let e=wt();Xs=await qc(),$e=Xs.pagePopupConfig||$e;let t=document.createElement("div");t.id="immersive-translate-popup",t.setAttribute("style","all: initial"),document.documentElement.appendChild(t);let n=t.attachShadow({mode:"open"});Ys=n;let r=[e.IMMERSIVE_TRANSLATE_PICO_CSS,e.IMMERSIVE_TRANSLATE_COMMON_CSS,e.IMMERSIVE_TRANSLATE_POPUP_CSS];Jm(n,r);let a=document.createElement("div");a.innerHTML=e.IMMERSIVE_TRANSLATE_POPUP_HTML,n.appendChild(a),sn=n.querySelector("#immersive-translate-popup-container");let i=n.querySelector("#immersive-translate-popup-btn");bt=i,Na=n.querySelector("#mount"),sn.setAttribute("style",Qs($e)),ri(),i.addEventListener("mousedown",jf),i.addEventListener("touchstart",Qm),globalThis.addEventListener("resize",l=>{sn.setAttribute("style",Qs($e))})}function Ym(){Wr(null,Na),Na.style.display="none",bt.style.display="block",Nn=setTimeout(()=>{ri(!0)},2e3)}function $f(e){let t=e.querySelector("#mount"),n=e.querySelector("#immersive-translate-popup-btn"),r=()=>{Ym()},a=o=>{o&&o.target&&o.target.id==="immersive-translate-popup-overlay"&&r()};(async()=>{let o=await je();Wr(O(Pf,{lang:o.interfaceLanguage,fallbackLang:"zh-CN",translations:kf,children:O("div",{onClick:a,id:"immersive-translate-popup-overlay",class:"immersive-translate-popup-overlay",children:O("div",{class:"immersive-translate-popup-wrapper",style:Xm(),children:O(Js,{onClose:r})})})}),t)})().then(()=>{bt.style.display="none",Na.style.display="block"})}function Xm(){let e=ei(),t=e.height,{position:n,top:r,left:a}=$e,o={position:"fixed"},i=300,s=300,l=100;return n==="right"||n==="left"?(o.top=r-l,o.top+i>=t?(o.bottom=30,delete o.top):o.top<=10&&(o.top=10),n==="right"?o.right=0:n==="left"&&(o.left=0)):(n==="top"||n==="bottom")&&(o.left=a-l,o.left+s>=e.width?(o.right=0,delete o.left):o.left<=10&&(o.left=0),n==="top"?o.top=0:n==="bottom"&&(o.bottom=0)),o}function ei(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function jf(e){Uf=sn.getAttribute("style"),Ma=e.pageX,Aa=e.pageY,Nn&&clearTimeout(Nn),Ra=!1,bt.style.opacity="1",bt.style.transform="none",Bf=bt.getAttribute("style"),globalThis.addEventListener("mousemove",ti),globalThis.addEventListener("mouseup",ni),globalThis.addEventListener("touchmove",Wf),globalThis.addEventListener("touchend",Da),globalThis.addEventListener("touchcancel",Da)}function Qm(e){e.preventDefault&&e.preventDefault(),jf(e.changedTouches[0])}function Wf(e){ti(e.changedTouches[0])}function Da(e){e.preventDefault&&e.preventDefault(),ni(e.changedTouches[0])}function ti(e){e.preventDefault&&e.preventDefault(),Ra=!0,sn.setAttribute("style",`left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`)}function ni(e){e.preventDefault&&e.preventDefault(),eh(),Nn&&clearTimeout(Nn),Ma=Ma||0,Aa=Aa||0;let t=Math.abs(e.pageX-Ma),n=Math.abs(e.pageY-Aa);t<Hf&&n<Hf?(sn.setAttribute("style",Uf),bt.setAttribute("style",Bf),$f(Ys)):Ra?Zm(e):$f(Ys),Ra=!1}function Zm(e){let t=ei(),n=e.clientX,r=e.clientY,a=r,o=t.height-r,i=n,s=t.width-n;a<o&&a<i&&a<s?$e={position:"top",left:n,top:0}:o<a&&o<i&&o<s?$e={position:"bottom",bottom:0,left:e.clientX}:i<a&&i<o&&i<s?$e={position:"left",left:0,top:e.clientY}:s<a&&s<o&&s<i&&($e={position:"right",right:0,top:e.clientY});let l=Qs($e);sn.setAttribute("style",l),Vc({...Xs,pagePopupConfig:$e}),Nn=setTimeout(()=>{ri(!0)},2e3)}function ri(e=!1){bt.style.opacity="0.4";let t="";$e.position==="left"?t="translateX(-40%)":$e.position==="right"?t="translateX(40%)":$e.position==="top"?t="translateY(-40%)":$e.position==="bottom"&&(t="translateY(40%)"),bt.style.transform=t,e&&(bt.style.transition="transform 0.2s ease-in-out, opacity 0.2s ease-in-out")}function eh(){globalThis.removeEventListener("mousemove",ti),globalThis.removeEventListener("mouseup",ni),globalThis.removeEventListener("touchmove",Wf),globalThis.removeEventListener("touchend",Da),globalThis.removeEventListener("touchcancel",Da)}function Qs(e){let t=th(e);return Object.keys(t).map(n=>typeof t[n]=="number"?`${n}:${t[n]}px;`:"").join("")}function th(e){let{position:t,...n}=e,r=ei(),a={};return t==="left"?(a.left=0,n.top>r.height?a.top=r.height-100:a.top=n.top):t==="right"?(a.right=0,n.top>r.height?a.top=r.height-100:a.top=n.top):t==="top"?(a.top=0,n.left>r.width?a.left=r.width-100:a.left=n.left):t==="bottom"&&(a.bottom=0,n.left>r.width?a.left=r.width-100:a.left=n.left),a}var zf={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.2.23",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["js/browser-polyfill.js","content_script.js"],css:["styles/inject.css"],run_at:"document_end"}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleTranslateToThePageEndImmediately:{suggested_key:{default:"Alt+S"},description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html"},icons:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};var Oa=!1,nh=e=>document.head.appendChild(document.createElement("style")).innerHTML=e;async function qf(){let e=await je(),t={url:globalThis.location.href,config:e},n=await Lt(t);if(e.debug&&k.setLevel("debug"),globalThis.document.addEventListener(Gt,r=>{Oa||(Oa=!0,Zs().catch(a=>{k.error("init popup error",a)}))}),he()&&typeof GM<"u"&&GM&&GM.registerMenuCommand){let r=zf.commands,i=[...Object.keys(r).filter(s=>s==="toggleTranslatePage").map(s=>{let l=r[s].description,u=l;return l.startsWith("__MSG_")&&l.endsWith("__")&&(u=Bs(`browser.${l.slice(6,-2)}`,e.interfaceLanguage)),{id:s,title:u}}),{id:$a,title:Bs("browser.openOptionsPage",e.interfaceLanguage),key:"o"}];for(let s of i)GM.registerMenuCommand(s.title,()=>{s.id===$a?ua():rh({method:s.id})},s.key)}if(n.isTranslateExcludeUrl)k.debug("detect exclude url, do not inject anything.");else{let a=wt().IMMERSIVE_TRANSLATE_INJECTED_CSS;a&&nh(a),(Ar().any||he())&&n.rule.isShowUserscriptPagePopup&&(Oa||(Oa=!0,Zs().catch(o=>{k.error("init popup error",o)})))}}function rh(e){rr(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(n=>{k.error("send content message request failed",e,n)});let t=new CustomEvent(Gt,{detail:e});globalThis.document.dispatchEvent(t)}async function Vf(){if(globalThis.top!=globalThis.self)return;let e=await je(),t=await Lt({config:e,url:globalThis.location.href});if(t.isTranslateExcludeUrl&&vf())k.debug("detect web options page"),Ef();else if(Tf(t),he()?Lf(e):Uc(),e.debug?k.setLevel("debug"):k.setLevel("info"),await qf().catch(a=>{k.error(`init popup page error: ${a}`)}),!t.isTranslateExcludeUrl){if(t.rule.isPdf){let a=!1;globalThis.PDFViewerApplication&&globalThis.PDFViewerApplication.initializedPromise.then(()=>{let o=globalThis.PDFViewerApplication;o.eventBus.on("pagesdestroy",()=>{pt()}),o.eventBus.on("textlayerrendered",async()=>{a||(a=!0,await Ea())}),o.eventBus.on("fileinputchange",()=>{a=!1})})}else await Ea();wf()}}Vf().catch(e=>{e&&k.error("translate page error",e.name,e.message,e.details||"",e)});
