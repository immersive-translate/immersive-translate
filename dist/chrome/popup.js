var ju=Object.defineProperty;var Wu=(e,t)=>{for(var n in t)ju(e,n,{get:t[n],enumerable:!0})};var y={BUILD_TIME:"2023-01-25T15:49:06.600Z",VERSION:"0.2.23",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};function rn(){let e,t="pending",n=new Promise((r,o)=>{e={async resolve(a){await a,t="fulfilled",r(a)},reject(a){t="rejected",o(a)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var ha=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function lr(e,t){let n=rn(),r=setTimeout(()=>n.reject(new ha),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function _n(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((o,a)=>{let i=()=>{clearTimeout(l),a(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{n?.removeEventListener("abort",i),o()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var _s=class{#e=0;#t=[];#n=[];#r=rn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=rn()}}[Symbol.asyncIterator](){return this.iterate()}};var ze={};Wu(ze,{bgBlack:()=>yf,bgBlue:()=>vf,bgBrightBlack:()=>_f,bgBrightBlue:()=>Mf,bgBrightCyan:()=>Rf,bgBrightGreen:()=>kf,bgBrightMagenta:()=>Af,bgBrightRed:()=>Cf,bgBrightWhite:()=>Nf,bgBrightYellow:()=>Pf,bgCyan:()=>Ef,bgGreen:()=>xf,bgMagenta:()=>Sf,bgRed:()=>Tf,bgRgb24:()=>Ff,bgRgb8:()=>Of,bgWhite:()=>Lf,bgYellow:()=>wf,black:()=>tf,blue:()=>of,bold:()=>Gu,brightBlack:()=>Ps,brightBlue:()=>pf,brightCyan:()=>hf,brightGreen:()=>gf,brightMagenta:()=>mf,brightRed:()=>ff,brightWhite:()=>bf,brightYellow:()=>df,cyan:()=>lf,dim:()=>Ju,getColorEnabled:()=>Vu,gray:()=>uf,green:()=>rf,hidden:()=>Zu,inverse:()=>Qu,italic:()=>Yu,magenta:()=>sf,red:()=>nf,reset:()=>Ku,rgb24:()=>If,rgb8:()=>Df,setColorEnabled:()=>qu,strikethrough:()=>ef,stripColor:()=>$f,underline:()=>Xu,white:()=>cf,yellow:()=>af});var{Deno:Cs}=globalThis,ks=typeof Cs?.noColor=="boolean"?Cs.noColor:!0,ba=!ks;function qu(e){ks||(ba=e)}function Vu(){return ba}function H(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function $(e,t){return ba?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Ku(e){return $(e,H([0],0))}function Gu(e){return $(e,H([1],22))}function Ju(e){return $(e,H([2],22))}function Yu(e){return $(e,H([3],23))}function Xu(e){return $(e,H([4],24))}function Qu(e){return $(e,H([7],27))}function Zu(e){return $(e,H([8],28))}function ef(e){return $(e,H([9],29))}function tf(e){return $(e,H([30],39))}function nf(e){return $(e,H([31],39))}function rf(e){return $(e,H([32],39))}function af(e){return $(e,H([33],39))}function of(e){return $(e,H([34],39))}function sf(e){return $(e,H([35],39))}function lf(e){return $(e,H([36],39))}function cf(e){return $(e,H([37],39))}function uf(e){return Ps(e)}function Ps(e){return $(e,H([90],39))}function ff(e){return $(e,H([91],39))}function gf(e){return $(e,H([92],39))}function df(e){return $(e,H([93],39))}function pf(e){return $(e,H([94],39))}function mf(e){return $(e,H([95],39))}function hf(e){return $(e,H([96],39))}function bf(e){return $(e,H([97],39))}function yf(e){return $(e,H([40],49))}function Tf(e){return $(e,H([41],49))}function xf(e){return $(e,H([42],49))}function wf(e){return $(e,H([43],49))}function vf(e){return $(e,H([44],49))}function Sf(e){return $(e,H([45],49))}function Ef(e){return $(e,H([46],49))}function Lf(e){return $(e,H([47],49))}function _f(e){return $(e,H([100],49))}function Cf(e){return $(e,H([101],49))}function kf(e){return $(e,H([102],49))}function Pf(e){return $(e,H([103],49))}function Mf(e){return $(e,H([104],49))}function Af(e){return $(e,H([105],49))}function Rf(e){return $(e,H([106],49))}function Nf(e){return $(e,H([107],49))}function Tt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function Df(e,t){return $(e,H([38,5,Tt(t)],39))}function Of(e,t){return $(e,H([48,5,Tt(t)],49))}function If(e,t){return typeof t=="number"?$(e,H([38,2,t>>16&255,t>>8&255,t&255],39)):$(e,H([38,2,Tt(t.r),Tt(t.g),Tt(t.b)],39))}function Ff(e,t){return typeof t=="number"?$(e,H([48,2,t>>16&255,t>>8&255,t&255],49)):$(e,H([48,2,Tt(t.r),Tt(t.g),Tt(t.b)],49))}var Hf=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function $f(e){return e.replace(Hf,"")}function cr(e,t){let n=null,r=null,o=(...a)=>{o.clear(),r=()=>{o.clear(),e.call(o,...a)},n=setTimeout(r,t)};return o.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},o.flush=()=>{r?.()},Object.defineProperty(o,"pending",{get:()=>typeof n=="number"}),o}var mr,B,Ds,Bf,Cn,Ms,Os,gr={},Is=[],Uf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function xt(e,t){for(var n in t)e[n]=t[n];return e}function Fs(e){var t=e.parentNode;t&&t.removeChild(e)}function Hs(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?mr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return ur(e,i,r,o,null)}function ur(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Ds};return o==null&&B.vnode!=null&&B.vnode(a),a}function it(e){return e.children}function fr(e,t){this.props=e,this.context=t}function an(e,t){if(t==null)return e.__?an(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?an(e):null}function $s(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return $s(e)}}function ya(e){(!e.__d&&(e.__d=!0)&&Cn.push(e)&&!dr.__r++||Ms!==B.debounceRendering)&&((Ms=B.debounceRendering)||setTimeout)(dr)}function dr(){for(var e;dr.__r=Cn.length;)e=Cn.sort(function(t,n){return t.__v.__b-n.__v.__b}),Cn=[],e.some(function(t){var n,r,o,a,i,s;t.__d&&(i=(a=(n=t).__v).__e,(s=n.__P)&&(r=[],(o=xt({},a)).__v=a.__v+1,Ta(s,a,o,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[i]:null,r,i??an(a),a.__h),Ws(r,a),a.__e!=i&&$s(a)))})}function Bs(e,t,n,r,o,a,i,s,l,u){var c,g,d,f,p,T,b,m=r&&r.__k||Is,h=m.length;for(n.__k=[],c=0;c<t.length;c++)if((f=n.__k[c]=(f=t[c])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?ur(null,f,null,null,f):Array.isArray(f)?ur(it,{children:f},null,null,null):f.__b>0?ur(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(d=m[c])===null||d&&f.key==d.key&&f.type===d.type)m[c]=void 0;else for(g=0;g<h;g++){if((d=m[g])&&f.key==d.key&&f.type===d.type){m[g]=void 0;break}d=null}Ta(e,f,d=d||gr,o,a,i,s,l,u),p=f.__e,(g=f.ref)&&d.ref!=g&&(b||(b=[]),d.ref&&b.push(d.ref,null,f),b.push(g,f.__c||p,f)),p!=null?(T==null&&(T=p),typeof f.type=="function"&&f.__k===d.__k?f.__d=l=Us(f,l,e):l=js(e,f,d,m,p,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=an(d))}for(n.__e=T,c=h;c--;)m[c]!=null&&(typeof n.type=="function"&&m[c].__e!=null&&m[c].__e==n.__d&&(n.__d=an(r,c+1)),qs(m[c],m[c]));if(b)for(c=0;c<b.length;c++)zs(b[c],b[++c],b[++c])}function Us(e,t,n){for(var r,o=e.__k,a=0;o&&a<o.length;a++)(r=o[a])&&(r.__=e,t=typeof r.type=="function"?Us(r,t,n):js(n,r,r,o,r.__e,t));return t}function js(e,t,n,r,o,a){var i,s,l;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),i=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==o)break e;e.insertBefore(o,a),i=a}return i!==void 0?i:o.nextSibling}function jf(e,t,n,r,o){var a;for(a in n)a==="children"||a==="key"||a in t||pr(e,a,null,n[a],r);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||pr(e,a,t[a],n[a],r)}function As(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Uf.test(t)?n:n+"px"}function pr(e,t,n,r,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||As(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||As(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r||e.addEventListener(t,a?Ns:Rs,a):e.removeEventListener(t,a?Ns:Rs,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Rs(e){this.l[e.type+!1](B.event?B.event(e):e)}function Ns(e){this.l[e.type+!0](B.event?B.event(e):e)}function Ta(e,t,n,r,o,a,i,s,l){var u,c,g,d,f,p,T,b,m,h,x,v,N,U=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(u=B.__b)&&u(t);try{e:if(typeof U=="function"){if(b=t.props,m=(u=U.contextType)&&r[u.__c],h=u?m?m.props.value:u.__:r,n.__c?T=(c=t.__c=n.__c).__=c.__E:("prototype"in U&&U.prototype.render?t.__c=c=new U(b,h):(t.__c=c=new fr(b,h),c.constructor=U,c.render=zf),m&&m.sub(c),c.props=b,c.state||(c.state={}),c.context=h,c.__n=r,g=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),U.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=xt({},c.__s)),xt(c.__s,U.getDerivedStateFromProps(b,c.__s))),d=c.props,f=c.state,g)U.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(U.getDerivedStateFromProps==null&&b!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(b,h),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(b,c.__s,h)===!1||t.__v===n.__v){c.props=b,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(D){D&&(D.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(b,c.__s,h),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,f,p)})}if(c.context=h,c.props=b,c.__v=t,c.__P=e,x=B.__r,v=0,"prototype"in U&&U.prototype.render)c.state=c.__s,c.__d=!1,x&&x(t),u=c.render(c.props,c.state,c.context);else do c.__d=!1,x&&x(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++v<25);c.state=c.__s,c.getChildContext!=null&&(r=xt(xt({},r),c.getChildContext())),g||c.getSnapshotBeforeUpdate==null||(p=c.getSnapshotBeforeUpdate(d,f)),N=u!=null&&u.type===it&&u.key==null?u.props.children:u,Bs(e,Array.isArray(N)?N:[N],t,n,r,o,a,i,s,l),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),T&&(c.__E=c.__=null),c.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Wf(n.__e,t,n,r,o,a,i,l);(u=B.diffed)&&u(t)}catch(D){t.__v=null,(l||a!=null)&&(t.__e=s,t.__h=!!l,a[a.indexOf(s)]=null),B.__e(D,t,n)}}function Ws(e,t){B.__c&&B.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){B.__e(r,n.__v)}})}function Wf(e,t,n,r,o,a,i,s){var l,u,c,g=n.props,d=t.props,f=t.type,p=0;if(f==="svg"&&(o=!0),a!=null){for(;p<a.length;p++)if((l=a[p])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,a[p]=null;break}}if(e==null){if(f===null)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),a=null,s=!1}if(f===null)g===d||s&&e.data===d||(e.data=d);else{if(a=a&&mr.call(e.childNodes),u=(g=n.props||gr).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!s){if(a!=null)for(g={},p=0;p<e.attributes.length;p++)g[e.attributes[p].name]=e.attributes[p].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(jf(e,d,g,o,s),c)t.__k=[];else if(p=t.props.children,Bs(e,Array.isArray(p)?p:[p],t,n,r,o&&f!=="foreignObject",a,i,a?a[0]:n.__k&&an(n,0),s),a!=null)for(p=a.length;p--;)a[p]!=null&&Fs(a[p]);s||("value"in d&&(p=d.value)!==void 0&&(p!==e.value||f==="progress"&&!p||f==="option"&&p!==g.value)&&pr(e,"value",p,g.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==e.checked&&pr(e,"checked",p,g.checked,!1))}return e}function zs(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){B.__e(r,n)}}function qs(e,t,n){var r,o;if(B.unmount&&B.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||zs(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){B.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&qs(r[o],t,typeof e.type!="function");n||e.__e==null||Fs(e.__e),e.__=e.__e=e.__d=void 0}function zf(e,t,n){return this.constructor(e,n)}function xa(e,t,n){var r,o,a;B.__&&B.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Ta(t,e=(!r&&n||t).__k=Hs(it,null,[e]),o||gr,gr,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?mr.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r),Ws(a,e)}function wa(e,t){var n={__c:t="__cC"+Os++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.some(ya)},this.sub=function(i){o.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}mr=Is.slice,B={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(s){e=s}throw e}},Ds=0,Bf=function(e){return e!=null&&e.constructor===void 0},fr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=xt({},this.state),typeof e=="function"&&(e=e(xt({},n),this.props)),e&&xt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),ya(this))},fr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ya(this))},fr.prototype.render=it,Cn=[],dr.__r=0,Os=0;var Pn,be,va,Vs,kn=0,Zs=[],hr=[],Ks=B.__b,Gs=B.__r,Js=B.diffed,Ys=B.__c,Xs=B.unmount;function yr(e,t){B.__h&&B.__h(be,e,kn||t),kn=0;var n=be.__H||(be.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:hr}),n.__[e]}function ye(e){return kn=1,qf(ni,e)}function qf(e,t,n){var r=yr(Pn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ni(void 0,t),function(a){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,a);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=be,!be.u)){be.u=!0;var o=be.shouldComponentUpdate;be.shouldComponentUpdate=function(a,i,s){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(c){return c.__c});if(l.every(function(c){return!c.__N}))return!o||o.call(this,a,i,s);var u=!1;return l.forEach(function(c){if(c.__N){var g=c.__[0];c.__=c.__N,c.__N=void 0,g!==c.__[0]&&(u=!0)}}),!!u&&(!o||o.call(this,a,i,s))}}return r.__N||r.__}function Qe(e,t){var n=yr(Pn++,3);!B.__s&&ti(n.__H,t)&&(n.__=e,n.i=t,be.__H.__h.push(n))}function Ea(e){return kn=5,ei(function(){return{current:e}},[])}function ei(e,t){var n=yr(Pn++,7);return ti(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Mn(e,t){return kn=8,ei(function(){return e},t)}function La(e){var t=be.context[e.__c],n=yr(Pn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(be)),t.props.value):e.__}function Vf(){for(var e;e=Zs.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(br),e.__H.__h.forEach(Sa),e.__H.__h=[]}catch(t){e.__H.__h=[],B.__e(t,e.__v)}}B.__b=function(e){typeof e.type!="function"||e.o||e.type===it?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),be=null,Ks&&Ks(e)},B.__r=function(e){Gs&&Gs(e),Pn=0;var t=(be=e.__c).__H;t&&(va===be?(t.__h=[],be.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=hr,n.__N=n.i=void 0})):(t.__h.forEach(br),t.__h.forEach(Sa),t.__h=[])),va=be},B.diffed=function(e){Js&&Js(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Zs.push(t)!==1&&Vs===B.requestAnimationFrame||((Vs=B.requestAnimationFrame)||Kf)(Vf)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==hr&&(n.__=n.__V),n.i=void 0,n.__V=hr})),va=be=null},B.__c=function(e,t){t.some(function(n){try{n.__h.forEach(br),n.__h=n.__h.filter(function(r){return!r.__||Sa(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],B.__e(r,n.__v)}}),Ys&&Ys(e,t)},B.unmount=function(e){Xs&&Xs(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{br(r)}catch(o){t=o}}),n.__H=void 0,t&&B.__e(t,n.__v))};var Qs=typeof requestAnimationFrame=="function";function Kf(e){var t,n=function(){clearTimeout(r),Qs&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Qs&&(t=requestAnimationFrame(n))}function br(e){var t=be,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),be=t}function Sa(e){var t=be;e.__c=e.__(),be=t}function ti(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ni(e,t){return typeof t=="function"?t(e):t}var $m=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Jf=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function Tr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,o=0,a=0;function i(){let c=Date.now();return c-o>t?(a=1,o=c,0):(a<e?a++:(o+=t,a=1),o-c)}let s=[];function l(){let c=Date.now();if(s.length<e)return s.push(c),0;let g=s.shift()+t;return c>=g?(s.push(c),0):(s.push(g),g-c)}let u=n?l:i;return c=>{let g=function(...d){if(!g.isEnabled)return(async()=>c.apply(this,d))();let f;return new Promise((p,T)=>{f=setTimeout(()=>{p(c.apply(this,d)),r.delete(f)},u()),r.set(f,T)})};return g.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new Jf);r.clear(),s.splice(0,s.length)},g.isEnabled=!0,g}}var _a;function Oa(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function li(e,t=","){return e.map(Oa).join(t)}var ci=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function xr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function ui(e,t="@media "){return t+pt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function pt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Yf(){}var ke={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function fi(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Ra(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(fi(e),15)<<18}var Xf=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Ia({n:e,i:t,v:n=[]},r,o,a){for(let s of(e&&(e=Oa({n:e,i:t,v:n})),a=[...pt(a)],n)){let l=r.theme("screens",s);for(let u of pt(l&&ui(l)||r.v(s))){var i;a.push(u),o|=l?67108864|Ra(u):s=="dark"?1073741824:u[0]=="@"?Ra(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Xf.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var Fa=new Map;function ri(e){if(e.d){let t=[],n=Ca(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?Ca(r,a=>Ca(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):ka(a,i)}return ka(i,a)})):r,"&"),r=>ka(r,e.n?"."+ci(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function Ca(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function ka(e,t){return e.replace(/&/g,t)}var Qf=new Intl.Collator("en",{numeric:!0});function Zf(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=gi(e[o],t)?n=o+1:r=o}return r}function gi(e,t){let n=e.p&ke.o;return n==(t.p&ke.o)&&(n==ke.b||n==ke.o)?0:e.p-t.p||e.o-t.o||Qf.compare(e.n,t.n)}function Pa(e,t){return Math.round(parseInt(e,16)*t)}function eg(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[Pa(e.substr(1,a),i),Pa(e.substr(1+a,a),i),Pa(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function di(e,t,n,r,o=[]){return function a(i,{n:s,p:l,r:u=[],i:c},g){let d=[],f="",p=0,T=0;for(let h in i||{}){var b,m;let x=i[h];if(h[0]=="@"){if(!x)continue;if(h[1]=="a"){d.push(...pi(s,l,$a(""+x),g,l,u,c,!0));continue}if(h[1]=="l"){for(let v of pt(x))d.push(...a(v,{n:s,p:(b=ke[h[7]],l&~ke.o|b),r:u,i:c},g));continue}if(h[1]=="i"){d.push(...pt(x).map(v=>({p:-1,o:0,r:[],d:h+" "+v})));continue}if(h[1]=="k"){d.push({p:ke.d,o:0,r:[h],d:a(x,{p:ke.d},g).map(ri).join("")});continue}if(h[1]=="f"){d.push(...pt(x).map(v=>({p:ke.d,o:0,r:[h],d:a(v,{p:ke.d},g).map(ri).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))h=="label"&&x?s=x+xr(JSON.stringify([l,c,i])):(x||x===0)&&(h=h.replace(/[A-Z]/g,v=>"-"+v.toLowerCase()),T+=1,p=Math.max(p,(m=h)[0]=="-"?0:fi(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+pt(x).map(v=>g.s(h,tg(""+v,g.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let v=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(N,U)=>{let D=g.theme("screens",U);return D?(v|=67108864,ui(D,"")):N}),v|=Ra(h)),d.push(...a(x,{n:s,p:v,r:[...u,h],i:c},g))}else d.push(...a(x,{p:l,r:[...u,h]},g))}return d.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(p||15,15),r:u,d:f}),d.sort(gi)}(e,Ia(t,n,r,o),n)}function tg(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i)=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?eg(s):""+s})}function Ha(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function Na(e,t,n=ke.u,r,o){let a=[];for(let i of e)for(let s of function(l,u,c,g,d){var f;l={...l,i:l.i||d};let p=function(T,b){let m=Fa.get(T.n);return m?m(T,b):b.r(T.n,T.v[0]=="dark")}(l,u);return p?typeof p=="string"?({r:g,p:c}=Ia(l,u,c,g),Ha(Na($a(p),u,c,g,l.i),l.n)):Array.isArray(p)?p.map(T=>{var b,m;return{o:0,...T,r:[...pt(g),...pt(T.r)],p:(b=c,m=(f=T.p)!=null?f:c,b&~ke.o|m)}}):di(p,l,u,c,g):[{c:Oa(l),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(Zf(a,s),0,s);return a}function pi(e,t,n,r,o,a,i,s){return Ha((s?n.flatMap(l=>Na([l],r,o,a,i)):Na(n,r,o,a,i)).map(l=>l.p&ke.o&&(l.n||t==ke.b)?{...l,p:l.p&~ke.o|t,o:0}:l),e)}function ng(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:l,r:u,i:c}=Ia(a,i,t);return n&&pi(s,t,n,i,l,u,c,r)},Fa.set(e,o),e}function Ma(e,t){if(e[e.length-1]!="("){let n=[],r=!1,o=!1,a="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),o=!o),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(a+=(a&&"-")+i)}a&&(o&&(a="-"+a),t[0].push({n:a,v:n.filter(rg),i:r}))}}function rg(e,t,n){return n.indexOf(e)==t}var ai=new Map;function $a(e){let t=ai.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,l=(u,c=0)=>{o!=s&&(n.push(e.slice(o,s+c)),u&&Ma(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let g=n[c-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=c,Ma([...n,"#"],r);let{v:f}=r[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(f[0]=="dark"),f.length);Ma([...n,ng(g.length>1?g.slice(0,-1)+xr(JSON.stringify([g,d])):g+"("+li(d)+")",ke.a,d,/@$/.test(g))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),ai.set(e,t=r[0])}return t}function mi(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function hi(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?mi(e,t,n=>Aa(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Aa(r),e?Aa(e):"")}function Aa(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=hi(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var Zm=bi("@"),eh=bi("~");function bi(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(o,...a){return t(r,o,a)}});function t(n,r,o){return li($a(n+e+"("+hi(r,o)+")"))}}function Da(e,t){return Array.isArray(e)?oi(mi(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?oi(e):[e]}var ag=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function oi(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=ag.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function yi(e,...t){var n,r;let o=Da(e,t),a=(((n=o.find(i=>i.label))==null?void 0:n.label)||"css")+xr(JSON.stringify(o));return r=(i,s)=>Ha(o.flatMap(l=>di(l,i,s,ke.o)),a),Fa.set(a,r),a}var th=new Proxy(function(e,t){return si("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return si(t,n,r)}});function si(e,t,n){return{toString:()=>yi({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var nh=Symbol();var Ti=new Proxy(Yf,{apply:(e,t,n)=>_a(n[0]),get(e,t){let n=_a[t];return typeof n=="function"?function(){return n.apply(_a,arguments)}:n}});var rh=function e(t){return new Proxy(function(n,...r){return ii(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(o,...a){return ii(t,r,o,a)}})}();function ii(e,t,n,r){return{toString(){let o=Da(n,r),a=ci(t+xr(JSON.stringify([t,o])));return(typeof e=="function"?e:Ti)(yi({[`@keyframes ${a}`]:Da(n,r)})),a}}}var Ba;function Ya(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function ki(e,t=","){return e.map(Ya).join(t)}var Pi=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function vr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Sr(e,t="@media "){return t+qe(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function qe(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function sg(){}var Pe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Mi(e){return e.match(/[-=:;]/g)?.length||0}function Va(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Mi(e),15)<<18}var ig=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Xa({n:e,i:t,v:n=[]},r,o,a){e&&(e=Ya({n:e,i:t,v:n})),a=[...qe(a)];for(let s of n){let l=r.theme("screens",s);for(let u of qe(l&&Sr(l)||r.v(s))){var i;a.push(u),o|=l?67108864|Va(u):s=="dark"?1073741824:u[0]=="@"?Va(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~ig.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var Qa=new Map;function xi(e){if(e.d){let t=[],n=Ua(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?Ua(r,a=>Ua(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):ja(a,i)}return ja(i,a)})):r,"&"),r=>ja(r,e.n?"."+Pi(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function Ua(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function ja(e,t){return e.replace(/&/g,t)}var wi=new Intl.Collator("en",{numeric:!0});function lg(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=Ai(e[o],t)?n=o+1:r=o}return r}function Ai(e,t){let n=e.p&Pe.o;return n==(t.p&Pe.o)&&(n==Pe.b||n==Pe.o)?0:e.p-t.p||e.o-t.o||wi.compare(vi(e.n),vi(t.n))||wi.compare(Si(e.n),Si(t.n))}function vi(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Si(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Wa(e,t){return Math.round(parseInt(e,16)*t)}function wt(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[Wa(e.substr(1,a),i),Wa(e.substr(1+a,a),i),Wa(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function Ri(e,t,n,r,o=[]){return function a(i,{n:s,p:l,r:u=[],i:c},g){let d=[],f="",p=0,T=0;for(let h in i||{}){var b,m;let x=i[h];if(h[0]=="@"){if(!x)continue;if(h[1]=="a"){d.push(...Di(s,l,eo(""+x),g,l,u,c,!0));continue}if(h[1]=="l"){for(let v of qe(x))d.push(...a(v,{n:s,p:(b=Pe[h[7]],l&~Pe.o|b),r:u,i:c},g));continue}if(h[1]=="i"){d.push(...qe(x).map(v=>({p:-1,o:0,r:[],d:h+" "+v})));continue}if(h[1]=="k"){d.push({p:Pe.d,o:0,r:[h],d:a(x,{p:Pe.d},g).map(xi).join("")});continue}if(h[1]=="f"){d.push(...qe(x).map(v=>({p:Pe.d,o:0,r:[h],d:a(v,{p:Pe.d},g).map(xi).join("")})));continue}}if(typeof x!="object"||Array.isArray(x))h=="label"&&x?s=x+vr(JSON.stringify([l,c,i])):(x||x===0)&&(h=h.replace(/[A-Z]/g,v=>"-"+v.toLowerCase()),T+=1,p=Math.max(p,(m=h)[0]=="-"?0:Mi(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+qe(x).map(v=>g.s(h,Ni(""+v,g.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let v=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(N,U)=>{let D=g.theme("screens",U);return D?(v|=67108864,Sr(D,"")):N}),v|=Va(h)),d.push(...a(x,{n:s,p:v,r:[...u,h],i:c},g))}else d.push(...a(x,{p:l,r:[...u,h]},g))}return d.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(p||15,15),r:u,d:f}),d.sort(Ai)}(e,Xa(t,n,r,o),n)}function Ni(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i="")=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?wt(s):""+qe(s).filter(l=>Object(l)!==l)})}function Za(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function Ka(e,t,n=Pe.u,r,o){let a=[];for(let i of e)for(let s of function(l,u,c,g,d){l={...l,i:l.i||d};let f=function(p,T){let b=Qa.get(p.n);return b?b(p,T):T.r(p.n,p.v[0]=="dark")}(l,u);return f?typeof f=="string"?({r:g,p:c}=Xa(l,u,c,g),Za(Ka(eo(f),u,c,g,l.i),l.n)):Array.isArray(f)?f.map(p=>{var T,b;return{o:0,...p,r:[...qe(g),...qe(p.r)],p:(T=c,b=p.p??c,T&~Pe.o|b)}}):Ri(f,l,u,c,g):[{c:Ya(l),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(lg(a,s),0,s);return a}function Di(e,t,n,r,o,a,i,s){return Za((s?n.flatMap(l=>Ka([l],r,o,a,i)):Ka(n,r,o,a,i)).map(l=>l.p&Pe.o&&(l.n||t==Pe.b)?{...l,p:l.p&~Pe.o|t,o:0}:l),e)}function cg(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:l,r:u,i:c}=Xa(a,i,t);return n&&Di(s,t,n,i,l,u,c,r)},Qa.set(e,o),e}function za(e,t,n){if(e[e.length-1]!="("){let r=[],o=!1,a=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),o=!o),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(a&&(i="-"+i),t[0].push({n:i,v:r.filter(ug),i:o}))}}function ug(e,t,n){return n.indexOf(e)==t}var Ei=new Map;function eo(e){let t=Ei.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,l=(u,c=0)=>{o!=s&&(n.push(e.slice(o,s+c)),u&&za(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let g=n[c-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=c,za([...n,"#"],r);let{v:f}=r[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(f[0]=="dark"),f.length);za([...n,cg(g.length>1?g.slice(0,-1)+vr(JSON.stringify([g,d])):g+"("+ki(d)+")",Pe.a,d,/@$/.test(g))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),Ei.set(e,t=r[0])}return t}function Oi(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function Ii(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Oi(e,t,n=>qa(n).trim()):t.filter(Boolean).reduce((n,r)=>n+qa(r),e?qa(e):"")}function qa(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Ii(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var wh=Fi("@"),vh=Fi("~");function Fi(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(o,...a){return t(r,o,a)}}});function t(n,r,o){return ki(eo(n+e+"("+Ii(r,o)+")"))}}function Ga(e,t){return Array.isArray(e)?Li(Oi(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Li(e):[e]}var fg=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Li(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=fg.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function Hi(e,...t){var n;let r=Ga(e,t),o=(r.find(a=>a.label)?.label||"css")+vr(JSON.stringify(r));return n=(a,i)=>Za(r.flatMap(s=>Ri(s,a,i,Pe.o)),o),Qa.set(o,n),o}var Sh=new Proxy(function(e,t){return _i("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return _i(t,n,r)}}});function _i(e,t,n){return{toString(){return Hi({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function E(e,t,n){return[e,gg(t,n)]}function gg(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Ja(n,1)}):n=>e||{[n[1]]:Ja(n,2)}}function Ja(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function L(e,t,n,r){return[e,dg(t,n,r)]}function dg(e,t,n){let r=typeof t=="string"?(o,a)=>({[t]:n?n(o,a):o._}):t||(({1:o,_:a},i,s)=>({[o||s]:a}));return(o,a)=>{let i=$i(e||o[1]),s=a.theme(i,o.$$)??An(o.$$,i,a);if(s!=null)return o._=Ja(o,0,s),r(o,a,i)}}function Se(e,t={},n){return[e,pg(t,n)]}function pg(e={},t){return(n,r)=>{let{section:o=$i(n[0]).replace("-","")+"Color"}=e,[a,i]=mg(n.$$);if(!a)return;let s=r.theme(o,a)||An(a,o,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=o.replace("Color","Opacity"),property:c=o,selector:g}=e,d=r.theme(u,i||"DEFAULT")||i&&An(i,u,r),f=t||(({_:T})=>{let b=Rn(c,T);return g?{[g]:b}:b});n._={value:wt(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:T=>wt(s,T),opacityVariable:l||void 0,opacityValue:d||void 0};let p=f(n,r);if(!n.dark){let T=r.d(o,a,s);T&&T!==s&&(n._={value:wt(T,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:b=>wt(T,b),opacityVariable:l||void 0,opacityValue:d||void 0},p={"&":p,[r.v("dark")]:f(n,r)})}return p}}function mg(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Rn(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function An(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=wr(Ni(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function $i(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function wr(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,o="")=>wr(n)+r+wr(o)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var Eh=Symbol();var hg=new Proxy(sg,{apply(e,t,n){return Ba(n[0])},get(e,t){let n=Ba[t];return typeof n=="function"?function(){return n.apply(Ba,arguments)}:n}});var Lh=function e(t){return new Proxy(function(n,...r){return Ci(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(o,...a){return Ci(t,r,o,a)}}})}();function Ci(e,t,n,r){return{toString(){let o=Ga(n,r),a=Pi(t+vr(JSON.stringify([t,o])));return(typeof e=="function"?e:hg)(Hi({[`@keyframes ${a}`]:Ga(n,r)})),a}}}var bg="inherit",yg="currentColor",Tg="transparent",xg="#000",wg="#fff",vg={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Sg={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Eg={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},Lg={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},_g={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},Cg={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},kg={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},Pg={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Mg={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Ag={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Rg={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},Ng={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Dg={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Og={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Ig={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Fg={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Hg={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},$g={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},Bg={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},Ug={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},jg={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},Wg={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},zg={__proto__:null,inherit:bg,current:yg,transparent:Tg,black:xg,white:wg,slate:vg,gray:Sg,zinc:Eg,neutral:Lg,stone:_g,red:Cg,orange:kg,amber:Pg,yellow:Mg,lime:Ag,green:Rg,emerald:Ng,teal:Dg,cyan:Og,sky:Ig,blue:Fg,indigo:Hg,violet:$g,purple:Bg,fuchsia:Ug,pink:jg,rose:Wg},Bi={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:zg,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...We(4,"rem",4,.5,.5),...We(12,"rem",4,5),14:"3.5rem",...We(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:G("blur"),backdropBrightness:G("brightness"),backdropContrast:G("contrast"),backdropGrayscale:G("grayscale"),backdropHueRotate:G("hueRotate"),backdropInvert:G("invert"),backdropOpacity:G("opacity"),backdropSaturate:G("saturate"),backdropSepia:G("sepia"),backgroundColor:G("colors"),backgroundImage:{none:"none"},backgroundOpacity:G("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...We(200,"",100,0,50),...We(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:G("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:G("spacing"),borderWidth:{DEFAULT:"1px",...Ve(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:G("colors"),caretColor:G("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...We(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:G("borderColor"),divideOpacity:G("borderOpacity"),divideWidth:G("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:G("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Nn(2,6),...Nn(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:G("spacing"),gradientColorStops:G("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Nn(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Nn(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...We(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...We(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:G("spacing"),placeholderColor:G("colors"),placeholderOpacity:G("opacity"),outlineColor:G("colors"),outlineOffset:Ve(8,"px"),outlineWidth:Ve(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:G("colors"),ringOffsetWidth:Ve(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Ve(8,"px")},rotate:{...Ve(2,"deg"),...Ve(12,"deg",3),...Ve(180,"deg",45)},saturate:We(200,"",100,0,50),scale:{...We(150,"",100,0,50),...We(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:G("spacing"),scrollPadding:G("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Ve(2,"deg"),...Ve(12,"deg",3)},space:G("spacing"),stroke:G("colors"),strokeWidth:We(2),textColor:G("colors"),textDecorationColor:G("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Ve(8,"px")},textUnderlineOffset:{auto:"auto",...Ve(8,"px")},textIndent:G("spacing"),textOpacity:G("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:G("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Nn(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...We(50,"",1,0,10),auto:"auto"}};function Nn(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function Ve(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function We(e,t="",n=1,r=0,o=1,a={}){for(;r<=e;r+=o)a[r]=r/n+t;return a}function G(e){return({theme:t})=>t(e)}var kh={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Bi.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Bi.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Mh=[E("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:An(`[${t}]`,e,n)}}})),E("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),L("aspect-","aspectRatio"),E("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:o}=t("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[Sr(l)]={"&":{maxWidth:l,...i(s)}})}return a;function i(s){let l=o&&(typeof o=="string"?o:o[s]||o.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),L("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),E("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),E("box-(border|content)","boxSizing",({1:e})=>e+"-box"),E("hidden",{display:"none"}),E("table-(auto|fixed)","tableLayout"),E(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",E("isolate","isolation"),E("object-(contain|cover|fill|none|scale-down)","objectFit"),L("object-","objectPosition"),E("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Er),E("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),E("(static|fixed|absolute|relative|sticky)","position"),L("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),L("-?(top|bottom|left|right)(?:$|-)","inset"),E("visible","visibility"),E("invisible",{visibility:"hidden"}),L("-?z-","zIndex"),E("flex-((row|col)(-reverse)?)","flexDirection",Ui),E("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),L("(flex-(?:grow|shrink))(?:$|-)"),L("(flex)-"),L("grow(?:$|-)","flexGrow"),L("shrink(?:$|-)","flexShrink"),L("basis-","flexBasis"),L("-?(order)-"),"-?(order)-(\\d+)",L("grid-cols-","gridTemplateColumns"),E("grid-cols-(\\d+)","gridTemplateColumns",qi),L("col-","gridColumn"),E("col-(span)-(\\d+)","gridColumn",zi),L("col-start-","gridColumnStart"),E("col-start-(auto|\\d+)","gridColumnStart"),L("col-end-","gridColumnEnd"),E("col-end-(auto|\\d+)","gridColumnEnd"),L("grid-rows-","gridTemplateRows"),E("grid-rows-(\\d+)","gridTemplateRows",qi),L("row-","gridRow"),E("row-(span)-(\\d+)","gridRow",zi),L("row-start-","gridRowStart"),E("row-start-(auto|\\d+)","gridRowStart"),L("row-end-","gridRowEnd"),E("row-end-(auto|\\d+)","gridRowEnd"),E("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Er(Ui(e))),E("grid-flow-(dense)","gridAutoFlow"),L("auto-cols-","gridAutoColumns"),L("auto-rows-","gridAutoRows"),L("gap-x(?:$|-)","gap","columnGap"),L("gap-y(?:$|-)","gap","rowGap"),L("gap(?:$|-)","gap"),"(justify-(?:items|self))-",E("justify-","justifyContent",ji),E("(content|items|self)-",e=>({["align-"+e[1]]:ji(e)})),E("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),L("p([xytrbl])?(?:$|-)","padding",on("padding")),L("-?m([xytrbl])?(?:$|-)","margin",on("margin")),L("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),E("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),L("w-","width"),L("min-w-","minWidth"),L("max-w-","maxWidth"),L("h-","height"),L("min-h-","minHeight"),L("max-h-","maxHeight"),L("font-","fontWeight"),L("font-","fontFamily","fontFamily",lt),E("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),E("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),E("italic","fontStyle"),E("not-italic",{fontStyle:"normal"}),E("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),L("tracking-","letterSpacing"),L("leading-","lineHeight"),E("list-(inside|outside)","listStylePosition"),L("list-","listStyleType"),E("list-","listStyleType"),L("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Se("placeholder-",{property:"color",selector:"&::placeholder"}),E("text-(left|center|right|justify|start|end)","textAlign"),E("text-(ellipsis|clip)","textOverflow"),L("text-opacity-","textOpacity","--tw-text-opacity"),Se("text-",{property:"color"}),L("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),L("indent-","textIndent"),E("(overline|underline|line-through)","textDecorationLine"),E("no-underline",{textDecorationLine:"none"}),L("underline-offset-","textUnderlineOffset"),Se("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),L("decoration-","textDecorationThickness"),E("decoration-","textDecorationStyle"),E("(uppercase|lowercase|capitalize)","textTransform"),E("normal-case",{textTransform:"none"}),E("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),E("align-","verticalAlign"),E("whitespace-","whiteSpace"),E("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),E("break-words",{overflowWrap:"break-word"}),E("break-all",{wordBreak:"break-all"}),Se("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Se("accent-",{opacityVariable:!1,opacitySection:"opacity"}),E("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Nt(e," ")},var(--tw-gradient-stops))`),Se("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Se("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Se("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),E("bg-(fixed|local|scroll)","backgroundAttachment"),E("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),E(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),E("bg-blend-","backgroundBlendMode"),E("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),L("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Se("bg-",{section:"backgroundColor"}),L("bg-","backgroundImage"),L("bg-","backgroundPosition"),E("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Er),L("bg-","backgroundSize"),L("rounded(?:$|-)","borderRadius"),L("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Nt(n[0])}-radius`]:t,[`border-${Nt(n[1])}-radius`]:t}}),E("border-(collapse|separate)","borderCollapse"),L("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),E("border-(solid|dashed|dotted|double|none)","borderStyle"),L("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Se("border-([xytrbl])-",{section:"borderColor"},on("border","Color")),Se("border-"),L("border-([xytrbl])(?:$|-)","borderWidth",on("border","Width")),L("border(?:$|-)","borderWidth"),L("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),E("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),E("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),L("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Nt(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Nt(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Se("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),L("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Se("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),L("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),E("ring-inset",{"--tw-ring-inset":"inset"}),Se("ring-",{property:"--tw-ring-color"}),L("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":wt(t("ringOffsetColor","","#fff")),"--tw-ring-color":wt(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Se("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),L("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":lt(e),"--tw-shadow-colored":lt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),L("(opacity)-"),E("mix-blend-","mixBlendMode"),...Wi(),...Wi("backdrop-"),L("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:lt(e),transitionTimingFunction:e._=="none"?void 0:lt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:lt(t("transitionDuration",""))})),L("duration(?:$|-)","transitionDuration","transitionDuration",lt),L("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",lt),L("delay(?:$|-)","transitionDelay","transitionDelay",lt),L("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=lt(e),o=r.split(" "),a=t("keyframes",o[0]);return a?{["@keyframes "+(o[0]=n(o[0]))]:a,animation:o.join(" ")}:{animation:r}}),"(transform)-(none)",E("transform",no),E("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Vi(e=="gpu")})),L("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...no()})),L("-?(rotate)-","rotate",to),L("-?(translate-[xy])-","translate",to),L("-?(skew-[xy])-","skew",to),E("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Er),"(appearance)-",L("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",L("(cursor)-"),"(cursor)-",E("snap-(none)","scroll-snap-type"),E("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),E("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),E("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),E("snap-(normal|always)","scroll-snap-stop"),E("scroll-(auto|smooth)","scroll-behavior"),L("scroll-p([xytrbl])?(?:$|-)","padding",on("scroll-padding")),L("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",on("scroll-margin")),E("touch-(auto|none|manipulation)","touch-action"),E("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),E("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),E("outline",{outlineStyle:"solid"}),E("outline-(dashed|dotted|double|hidden)","outlineStyle"),L("(outline-offset)-"),Se("outline-",{opacityVariable:!1,opacitySection:"opacity"}),L("outline-","outlineWidth"),"(pointer-events)-",L("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],E("select-(none|text|all|auto)","userSelect"),Se("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Se("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),L("stroke-","strokeWidth"),E("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),E("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Er(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Ui(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Nt(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function lt(e){return e&&""+(e._||e)}function ji({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function on(e,t=""){return({1:n,_:r})=>{let o={x:"lr",y:"tb"}[n]||n+n;return o?{...Rn(e+"-"+Nt(o[0])+t,r),...Rn(e+"-"+Nt(o[1])+t,r)}:Rn(e+t,r)}}function Wi(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,E(`${e}filter`,n),...t.map(r=>L(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:o,_:a})=>({[`--tw-${o}`]:qe(a).map(i=>`${r}(${i})`).join(" "),...n})))]}function to({1:e,_:t}){return{["--tw-"+e]:t,...no()}}function no(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Vi()}}}}function Vi(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function zi({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function qi({1:e}){return`repeat(${e},minmax(0,1fr))`}var Vg=Object.create,Gi=Object.defineProperty,Kg=Object.getOwnPropertyDescriptor,Gg=Object.getOwnPropertyNames,Jg=Object.getPrototypeOf,Yg=Object.prototype.hasOwnProperty,Xg=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Qg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Gg(t))!Yg.call(e,o)&&o!==n&&Gi(e,o,{get:()=>t[o],enumerable:!(r=Kg(t,o))||r.enumerable});return e},Zg=(e,t,n)=>(n=e!=null?Vg(Jg(e)):{},Qg(t||!e||!e.__esModule?Gi(n,"default",{value:e,enumerable:!0}):n,e)),ed=Xg((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var o={};return r.m=n,r.c=o,r.i=function(a){return a},r.d=function(a,i,s){r.o(a,i)||Object.defineProperty(a,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(i,"a",i),i},r.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}},function(n,r,o){"use strict";(function(a){var i,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,g){u(r)==="object"&&u(a)==="object"?a.exports=g():(s=[],i=g,l=typeof i=="function"?i.apply(r,s):i,l!==void 0&&(a.exports=l))})(void 0,function(){return function(c){function g(f){if(d[f])return d[f].exports;var p=d[f]={i:f,l:!1,exports:{}};return c[f].call(p.exports,p,p.exports,g),p.l=!0,p.exports}var d={};return g.m=c,g.c=d,g.i=function(f){return f},g.d=function(f,p,T){g.o(f,p)||Object.defineProperty(f,p,{configurable:!1,enumerable:!0,get:T})},g.n=function(f){var p=f&&f.__esModule?function(){return f.default}:function(){return f};return g.d(p,"a",p),p},g.o=function(f,p){return Object.prototype.hasOwnProperty.call(f,p)},g.p="",g(g.s=0)}([function(c,g,d){function f(w,P){var A={};for(var V in w)P.indexOf(V)>=0||Object.prototype.hasOwnProperty.call(w,V)&&(A[V]=w[V]);return A}Object.defineProperty(g,"__esModule",{value:!0});var p=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(w){return typeof w>"u"?"undefined":u(w)}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w>"u"?"undefined":u(w)},T=Object.assign||function(w){for(var P=1;P<arguments.length;P++){var A=arguments[P];for(var V in A)Object.prototype.hasOwnProperty.call(A,V)&&(w[V]=A[V])}return w},b={top:"top",bottom:"bottom"},m={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:b.top,force:b.top,confirm:b.top,input:b.top,select:b.bottom,date:b.top}},h=g.setOptions=function(w){m=T({},m,w,{classes:T({},m.classes,w.classes),ids:T({},m.ids,w.ids),positions:T({},m.positions,w.positions)})},x=function(){return new Promise(function(w){return setTimeout(w,0)})},v=function(w){return new Promise(function(P){return setTimeout(P,1e3*w)})},N=function(){document.activeElement&&document.activeElement.blur()},U=function(){var w="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(P){var A=16*Math.random()|0,V=P==="x"?A:3&A|8;return V.toString(16)});return"notie-"+w},D={1:m.classes.backgroundSuccess,success:m.classes.backgroundSuccess,2:m.classes.backgroundWarning,warning:m.classes.backgroundWarning,3:m.classes.backgroundError,error:m.classes.backgroundError,4:m.classes.backgroundInfo,info:m.classes.backgroundInfo,5:m.classes.backgroundNeutral,neutral:m.classes.backgroundNeutral},M=function(){return m.transitionSelector+" "+m.transitionDuration+"s "+m.transitionCurve},k=function(w){return w.keyCode===13},K=function(w){return w.keyCode===27},q=function(w,P){w.classList.add(m.classes.container),w.style[P]="-10000px",document.body.appendChild(w),w.style[P]="-"+w.offsetHeight+"px",w.listener&&window.addEventListener("keydown",w.listener),x().then(function(){w.style.transition=M(),w.style[P]=0})},X=function(w,P){var A=document.getElementById(w);A&&(A.style[P]="-"+A.offsetHeight+"px",A.listener&&window.removeEventListener("keydown",A.listener),v(m.transitionDuration).then(function(){A.parentNode&&A.parentNode.removeChild(A)}))},ue=function(w,P){var A=document.createElement("div");A.id=m.ids.overlay,A.classList.add(m.classes.overlay),A.classList.add(m.classes.backgroundOverlay),A.style.opacity=0,w&&m.overlayClickDismiss&&(A.onclick=function(){X(w.id,P),se()}),document.body.appendChild(A),x().then(function(){A.style.transition=M(),A.style.opacity=m.overlayOpacity})},se=function(){var w=document.getElementById(m.ids.overlay);w.style.opacity=0,v(m.transitionDuration).then(function(){w.parentNode&&w.parentNode.removeChild(w)})},ve=g.hideAlerts=function(w){var P=document.getElementsByClassName(m.classes.alert);if(P.length){for(var A=0;A<P.length;A++){var V=P[A];X(V.id,V.position)}w&&v(m.transitionDuration).then(function(){return w()})}},Ue=g.alert=function(w){var P=w.type,A=P===void 0?4:P,V=w.text,j=w.time,me=j===void 0?m.alertTime:j,fe=w.stay,Ce=fe!==void 0&&fe,ge=w.position,ae=ge===void 0?m.positions.alert||ae.top:ge;N(),ve();var S=document.createElement("div"),O=U();S.id=O,S.position=ae,S.classList.add(m.classes.textbox),S.classList.add(D[A]),S.classList.add(m.classes.alert),S.innerHTML='<div class="'+m.classes.textboxInner+'">'+V+"</div>",S.onclick=function(){return X(O,ae)},S.listener=function(_){(k(_)||K(_))&&ve()},q(S,ae),me&&me<1&&(me=1),!Ce&&me&&v(me).then(function(){return X(O,ae)})},ie=g.force=function(w,P){var A=w.type,V=A===void 0?5:A,j=w.text,me=w.buttonText,fe=me===void 0?"OK":me,Ce=w.callback,ge=w.position,ae=ge===void 0?m.positions.force||ae.top:ge;N(),ve();var S=document.createElement("div"),O=U();S.id=O;var _=document.createElement("div");_.classList.add(m.classes.textbox),_.classList.add(m.classes.backgroundInfo),_.innerHTML='<div class="'+m.classes.textboxInner+'">'+j+"</div>";var R=document.createElement("div");R.classList.add(m.classes.button),R.classList.add(D[V]),R.innerHTML=fe,R.onclick=function(){X(O,ae),se(),Ce?Ce():P&&P()},S.appendChild(_),S.appendChild(R),S.listener=function(W){k(W)&&R.click()},q(S,ae),ue()},pe=g.confirm=function(w,P,A){var V=w.text,j=w.submitText,me=j===void 0?"Yes":j,fe=w.cancelText,Ce=fe===void 0?"Cancel":fe,ge=w.submitCallback,ae=w.cancelCallback,S=w.position,O=S===void 0?m.positions.confirm||O.top:S;N(),ve();var _=document.createElement("div"),R=U();_.id=R;var W=document.createElement("div");W.classList.add(m.classes.textbox),W.classList.add(m.classes.backgroundInfo),W.innerHTML='<div class="'+m.classes.textboxInner+'">'+V+"</div>";var ee=document.createElement("div");ee.classList.add(m.classes.button),ee.classList.add(m.classes.elementHalf),ee.classList.add(m.classes.backgroundSuccess),ee.innerHTML=me,ee.onclick=function(){X(R,O),se(),ge?ge():P&&P()};var I=document.createElement("div");I.classList.add(m.classes.button),I.classList.add(m.classes.elementHalf),I.classList.add(m.classes.backgroundError),I.innerHTML=Ce,I.onclick=function(){X(R,O),se(),ae?ae():A&&A()},_.appendChild(W),_.appendChild(ee),_.appendChild(I),_.listener=function(oe){k(oe)?ee.click():K(oe)&&I.click()},q(_,O),ue(_,O)},ne=function(w,P,A){var V=w.text,j=w.submitText,me=j===void 0?"Submit":j,fe=w.cancelText,Ce=fe===void 0?"Cancel":fe,ge=w.submitCallback,ae=w.cancelCallback,S=w.position,O=S===void 0?m.positions.input||O.top:S,_=f(w,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);N(),ve();var R=document.createElement("div"),W=U();R.id=W;var ee=document.createElement("div");ee.classList.add(m.classes.textbox),ee.classList.add(m.classes.backgroundInfo),ee.innerHTML='<div class="'+m.classes.textboxInner+'">'+V+"</div>";var I=document.createElement("input");I.classList.add(m.classes.inputField),I.setAttribute("autocapitalize",_.autocapitalize||"none"),I.setAttribute("autocomplete",_.autocomplete||"off"),I.setAttribute("autocorrect",_.autocorrect||"off"),I.setAttribute("autofocus",_.autofocus||"true"),I.setAttribute("inputmode",_.inputmode||"verbatim"),I.setAttribute("max",_.max||""),I.setAttribute("maxlength",_.maxlength||""),I.setAttribute("min",_.min||""),I.setAttribute("minlength",_.minlength||""),I.setAttribute("placeholder",_.placeholder||""),I.setAttribute("spellcheck",_.spellcheck||"default"),I.setAttribute("step",_.step||"any"),I.setAttribute("type",_.type||"text"),I.value=_.value||"",_.allowed&&(I.oninput=function(){var Ae=void 0;if(Array.isArray(_.allowed)){for(var $e="",yt=_.allowed,dt=0;dt<yt.length;dt++)yt[dt]==="an"?$e+="0-9a-zA-Z":yt[dt]==="a"?$e+="a-zA-Z":yt[dt]==="n"&&($e+="0-9"),yt[dt]==="s"&&($e+=" ");Ae=new RegExp("[^"+$e+"]","g")}else p(_.allowed)==="object"&&(Ae=_.allowed);I.value=I.value.replace(Ae,"")});var oe=document.createElement("div");oe.classList.add(m.classes.button),oe.classList.add(m.classes.elementHalf),oe.classList.add(m.classes.backgroundSuccess),oe.innerHTML=me,oe.onclick=function(){X(W,O),se(),ge?ge(I.value):P&&P(I.value)};var je=document.createElement("div");je.classList.add(m.classes.button),je.classList.add(m.classes.elementHalf),je.classList.add(m.classes.backgroundError),je.innerHTML=Ce,je.onclick=function(){X(W,O),se(),ae?ae(I.value):A&&A(I.value)},R.appendChild(ee),R.appendChild(I),R.appendChild(oe),R.appendChild(je),R.listener=function(Ae){k(Ae)?oe.click():K(Ae)&&je.click()},q(R,O),I.focus(),ue(R,O)};g.input=ne;var gt=g.select=function(w,P){var A=w.text,V=w.cancelText,j=V===void 0?"Cancel":V,me=w.cancelCallback,fe=w.choices,Ce=w.position,ge=Ce===void 0?m.positions.select||ge.top:Ce;N(),ve();var ae=document.createElement("div"),S=U();ae.id=S;var O=document.createElement("div");O.classList.add(m.classes.textbox),O.classList.add(m.classes.backgroundInfo),O.innerHTML='<div class="'+m.classes.textboxInner+'">'+A+"</div>",ae.appendChild(O),fe.forEach(function(R,W){var ee=R.type,I=ee===void 0?1:ee,oe=R.text,je=R.handler,Ae=document.createElement("div");Ae.classList.add(D[I]),Ae.classList.add(m.classes.button),Ae.classList.add(m.classes.selectChoice);var $e=fe[W+1];$e&&!$e.type&&($e.type=1),$e&&$e.type===I&&Ae.classList.add(m.classes.selectChoiceRepeated),Ae.innerHTML=oe,Ae.onclick=function(){X(S,ge),se(),je()},ae.appendChild(Ae)});var _=document.createElement("div");_.classList.add(m.classes.backgroundNeutral),_.classList.add(m.classes.button),_.innerHTML=j,_.onclick=function(){X(S,ge),se(),me?me():P&&P()},ae.appendChild(_),ae.listener=function(R){K(R)&&_.click()},q(ae,ge),ue(ae,ge)},bt=g.date=function(w,P,A){var V=w.value,j=V===void 0?new Date:V,me=w.submitText,fe=me===void 0?"OK":me,Ce=w.cancelText,ge=Ce===void 0?"Cancel":Ce,ae=w.submitCallback,S=w.cancelCallback,O=w.position,_=O===void 0?m.positions.date||_.top:O;N(),ve();var R="&#9662",W=document.createElement("div"),ee=document.createElement("div"),I=document.createElement("div"),oe=function(he){W.innerHTML=m.dateMonths[he.getMonth()],ee.innerHTML=he.getDate(),I.innerHTML=he.getFullYear()},je=function(he){var st=new Date(j.getFullYear(),j.getMonth()+1,0).getDate(),nn=he.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(nn)>st&&(nn=st.toString()),he.target.textContent=nn,Number(nn)<1&&(nn="1"),j.setDate(Number(nn))},Ae=function(he){var st=he.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);he.target.textContent=st,j.setFullYear(Number(st))},$e=function(he){oe(j)},yt=function(he){var st=new Date(j.getFullYear(),j.getMonth()+he+1,0).getDate();j.getDate()>st&&j.setDate(st),j.setMonth(j.getMonth()+he),oe(j)},dt=function(he){j.setDate(j.getDate()+he),oe(j)},Ls=function(he){var st=j.getFullYear()+he;st<0?j.setFullYear(0):j.setFullYear(j.getFullYear()+he),oe(j)},Mt=document.createElement("div"),pa=U();Mt.id=pa;var ma=document.createElement("div");ma.classList.add(m.classes.backgroundInfo);var Xe=document.createElement("div");Xe.classList.add(m.classes.dateSelectorInner);var Zt=document.createElement("div");Zt.classList.add(m.classes.button),Zt.classList.add(m.classes.elementThird),Zt.classList.add(m.classes.dateSelectorUp),Zt.innerHTML=R;var en=document.createElement("div");en.classList.add(m.classes.button),en.classList.add(m.classes.elementThird),en.classList.add(m.classes.dateSelectorUp),en.innerHTML=R;var tn=document.createElement("div");tn.classList.add(m.classes.button),tn.classList.add(m.classes.elementThird),tn.classList.add(m.classes.dateSelectorUp),tn.innerHTML=R,W.classList.add(m.classes.element),W.classList.add(m.classes.elementThird),W.innerHTML=m.dateMonths[j.getMonth()],ee.classList.add(m.classes.element),ee.classList.add(m.classes.elementThird),ee.setAttribute("contentEditable",!0),ee.addEventListener("input",je),ee.addEventListener("blur",$e),ee.innerHTML=j.getDate(),I.classList.add(m.classes.element),I.classList.add(m.classes.elementThird),I.setAttribute("contentEditable",!0),I.addEventListener("input",Ae),I.addEventListener("blur",$e),I.innerHTML=j.getFullYear();var Sn=document.createElement("div");Sn.classList.add(m.classes.button),Sn.classList.add(m.classes.elementThird),Sn.innerHTML=R;var En=document.createElement("div");En.classList.add(m.classes.button),En.classList.add(m.classes.elementThird),En.innerHTML=R;var Ln=document.createElement("div");Ln.classList.add(m.classes.button),Ln.classList.add(m.classes.elementThird),Ln.innerHTML=R,Zt.onclick=function(){return yt(1)},en.onclick=function(){return dt(1)},tn.onclick=function(){return Ls(1)},Sn.onclick=function(){return yt(-1)},En.onclick=function(){return dt(-1)},Ln.onclick=function(){return Ls(-1)};var At=document.createElement("div");At.classList.add(m.classes.button),At.classList.add(m.classes.elementHalf),At.classList.add(m.classes.backgroundSuccess),At.innerHTML=fe,At.onclick=function(){X(pa,_),se(),ae?ae(j):P&&P(j)};var Rt=document.createElement("div");Rt.classList.add(m.classes.button),Rt.classList.add(m.classes.elementHalf),Rt.classList.add(m.classes.backgroundError),Rt.innerHTML=ge,Rt.onclick=function(){X(pa,_),se(),S?S(j):A&&A(j)},Xe.appendChild(Zt),Xe.appendChild(en),Xe.appendChild(tn),Xe.appendChild(W),Xe.appendChild(ee),Xe.appendChild(I),Xe.appendChild(Sn),Xe.appendChild(En),Xe.appendChild(Ln),ma.appendChild(Xe),Mt.appendChild(ma),Mt.appendChild(At),Mt.appendChild(Rt),Mt.listener=function(he){k(he)?At.click():K(he)&&Rt.click()},q(Mt,_),ue(Mt,_)};g.default={alert:Ue,force:ie,confirm:pe,input:ne,select:gt,date:bt,setOptions:h,hideAlerts:ve}}])})}).call(r,o(0)(n))}])})}),td=Zg(ed()),{default:Ki,...nd}=td,ro=Ki!==void 0?Ki:nd;var zh=Symbol("clean");var qh=Symbol();function ao(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=ao(e[r],t);return n}}function Yi(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,o,a){let i=e(r,o,...a);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,o){return e(n,r,...o)}}}}var e0=Yi((e,t,n)=>ao(t,r=>{for(let o in n)r=r.replace(new RegExp(`{${o}}`,"g"),n[o]);return r})),t0=Yi((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),ao(t[r],o=>o.replace(/{count}/g,n))});var oo=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function so(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function tl(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function nl(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function od(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,o=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(o=!1);return o}var On={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":oo?173:189,"=":oo?61:187,";":oo?59:186,"'":222,"[":219,"]":221,"\\":220},ut={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},co={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Me={16:!1,18:!1,17:!1,91:!1},xe={};for(Dn=1;Dn<20;Dn++)On["f".concat(Dn)]=111+Dn;var Dn,le=[],Xi=!1,rl="all",al=[],_r=function(e){return On[e.toLowerCase()]||ut[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},sd=function(e){return Object.keys(On).find(function(t){return On[t]===e})},id=function(e){return Object.keys(ut).find(function(t){return ut[t]===e})};function ol(e){rl=e||"all"}function In(){return rl||"all"}function ld(){return le.slice(0)}function cd(){return le.map(function(e){return sd(e)||id(e)||String.fromCharCode(e)})}function ud(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function fd(e){return typeof e=="string"&&(e=_r(e)),le.indexOf(e)!==-1}function gd(e,t){var n,r;e||(e=In());for(var o in xe)if(Object.prototype.hasOwnProperty.call(xe,o))for(n=xe[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;In()===e&&ol(t||"all")}function dd(e){var t=e.keyCode||e.which||e.charCode,n=le.indexOf(t);if(n>=0&&le.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&le.splice(0,le.length),(t===93||t===224)&&(t=91),t in Me){Me[t]=!1;for(var r in ut)ut[r]===t&&(ct[r]=!1)}}function pd(e){if(typeof e>"u")Object.keys(xe).forEach(function(i){return delete xe[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&io(i)});else if(typeof e=="object")e.key&&io(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],a=n[1];typeof o=="function"&&(a=o,o=""),io({key:e,scope:o,method:a,splitKey:"+"})}}var io=function(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,a=o===void 0?"+":o,i=nl(t);i.forEach(function(s){var l=s.split(a),u=l.length,c=l[u-1],g=c==="*"?"*":_r(c);if(xe[g]){n||(n=In());var d=u>1?tl(ut,l):[];xe[g]=xe[g].filter(function(f){var p=r?f.method===r:!0;return!(p&&f.scope===n&&od(f.mods,d))})}})};function Qi(e,t,n,r){if(t.element===r){var o;if(t.scope===n||t.scope==="all"){o=t.mods.length>0;for(var a in Me)Object.prototype.hasOwnProperty.call(Me,a)&&(!Me[a]&&t.mods.indexOf(+a)>-1||Me[a]&&t.mods.indexOf(+a)===-1)&&(o=!1);(t.mods.length===0&&!Me[16]&&!Me[18]&&!Me[17]&&!Me[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Zi(e,t){var n=xe["*"],r=e.keyCode||e.which||e.charCode;if(ct.filter.call(this,e)){if((r===93||r===224)&&(r=91),le.indexOf(r)===-1&&r!==229&&le.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var T=co[p];e[p]&&le.indexOf(T)===-1?le.push(T):!e[p]&&le.indexOf(T)>-1?le.splice(le.indexOf(T),1):p==="metaKey"&&e[p]&&le.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(le=le.slice(le.indexOf(T))))}),r in Me){Me[r]=!0;for(var o in ut)ut[o]===r&&(ct[o]=!0);if(!n)return}for(var a in Me)Object.prototype.hasOwnProperty.call(Me,a)&&(Me[a]=e[co[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(le.indexOf(17)===-1&&le.push(17),le.indexOf(18)===-1&&le.push(18),Me[17]=!0,Me[18]=!0);var i=In();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&Qi(e,n[s],i,t);if(r in xe){for(var l=0;l<xe[r].length;l++)if((e.type==="keydown"&&xe[r][l].keydown||e.type==="keyup"&&xe[r][l].keyup)&&xe[r][l].key){for(var u=xe[r][l],c=u.splitKey,g=u.key.split(c),d=[],f=0;f<g.length;f++)d.push(_r(g[f]));d.sort().join("")===le.sort().join("")&&Qi(e,u,i,t)}}}}function md(e){return al.indexOf(e)>-1}function ct(e,t,n){le=[];var r=nl(e),o=[],a="all",i=document,s=0,l=!1,u=!0,c="+",g=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(i=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(a=t);s<r.length;s++)e=r[s].split(c),o=[],e.length>1&&(o=tl(ut,e)),e=e[e.length-1],e=e==="*"?"*":_r(e),e in xe||(xe[e]=[]),xe[e].push({keyup:l,keydown:u,scope:a,mods:o,shortcut:r[s],method:n,key:r[s],splitKey:c,element:i});typeof i<"u"&&!md(i)&&window&&(al.push(i),so(i,"keydown",function(d){Zi(d,i)},g),Xi||(Xi=!0,so(window,"focus",function(){le=[]},g)),so(i,"keyup",function(d){Zi(d,i),dd(d)},g))}function hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(xe).forEach(function(n){var r=xe[n].filter(function(o){return o.scope===t&&o.shortcut===e});r.forEach(function(o){o&&o.method&&o.method()})})}var lo={getPressedKeyString:cd,setScope:ol,getScope:In,deleteScope:gd,getPressedKeyCodes:ld,isPressed:fd,filter:ud,trigger:hd,unbind:pd,keyMap:On,modifier:ut,modifierMap:co};for(Lr in lo)Object.prototype.hasOwnProperty.call(lo,Lr)&&(ct[Lr]=lo[Lr]);var Lr;typeof document<"u"&&(el=window.hotkeys,ct.noConflict=function(e){return e&&window.hotkeys===ct&&(window.hotkeys=el),ct},window.hotkeys=ct);var el;var b0=ro.alert;function sl(e,t,n){let r=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),r=t!=="auto"?n[t].matches:[];let o={},a=Object.keys(n);for(let u of a){let g=n[u].matches;for(let d of g)o[d]||(o[d]=[]),o[d].push(u)}let i=o[e];if(i&&i.length>0)for(let u of i)n[u].matches.indexOf(e)>-1&&(n[u]={...n[u],matches:n[u].matches.filter(g=>g!==e)});let s=new Set(r);if(t==="auto")return{...n};s.add(e);let l=Array.from(s);return{...n,[t]:{...n[t],matches:l}}}var uo="DENO",fo="CHROME",Cr="FIREFOX";function bd(e){let t=fo;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=Cr:/deno/i.test(n)&&(t=uo)}catch{}return e===fo&&t===fo||e===Cr&&t===Cr||e===uo&&t===uo}function il(){return typeof Deno<"u"}function kr(){return bd(Cr)}function ll(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var cl={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},ul={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:cl,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:cl,query:()=>{},sendMessage:()=>{}}};var J;il()?J=ul:J=globalThis.browser;var fl={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00"};var gl={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var dl={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var yd=[{code:"zh-CN",messages:fl},{code:"zh-TW",messages:gl},{code:"en",messages:dl}],Dt={};for(let e of yd)Dt[e.code]=e.messages;var Ot="Immersive Translate",de="immersive-translate",Pr="pdf/index.html",ce="immersiveTranslate",go=`${ce}Container`,It=`${ce}SpecifiedContainer`,Mr="buildinConfig",Ar="localConfig";var pl=`${ce}PageTranslatedStatus`,ml=`${ce}PageUrlChanged`,Z0=`${ce}ReceiveCommand`,Fn=`${ce}PopupReceiveMessage`,hl="immersive-translate.owenyoung.com",eb=`https://${hl}/`,tb=`https://${hl}/buildin_config.json`,Ft=`${ce}Mark`,po="immersiveTranslateEffect",Ee=`${ce}Root`,mo=`data-${de}-effect`,Ht=`${ce}TranslatedMark`,$t=`${ce}ParagraphId`,Ke=`${ce}AtomicBlockMark`,Ge=`${ce}ExcludeMark`,Rr=`${ce}StayOriginalMark`,sn=`${ce}PreWhitespaceMark`,mt=`${ce}InlineMark`,Bt=`${ce}BlockMark`,Hn=`${ce}Left`,Nr=`${ce}Right`,nb=`${ce}Width`,rb=`${ce}Height`,bl=`${ce}Top`,yl=`${ce}FontSize`;var ho=`${ce}GlobalStyleMark`,Tl=["@","#"],Dr=" --- ",bo=`
`,Je=`${de}-target-wrapper`,Or=`${de}-pdf-target-container`,xl=`${de}-target-inner`,ab=`${de}-source-wrapper`,yo=`${de}-target-translation-block-wrapper`,wl=`${de}-target-translation-pdf-block-wrapper`,vl=`${de}-target-translation-pre-whitespace`,To=`${de}-target-translation-inline-wrapper`;var vt=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],xo={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var Sl=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var wo="zh-CN";function El(e){let t=J.runtime.getURL(Pr),n=new URL(t);return(e.startsWith("http")||!kr())&&n.searchParams.set("file",e),n.href}var vo=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),o=ze.green;r>1e4?o=ze.red:r>1e3&&(o=ze.yellow),console.debug(ze.dim(Ot+" TIMING:"),t,"in",o(r+"ms")),this.#e=n}},$n=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(ze.dim(Ot+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(ze.green(Ot+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(ze.yellow(Ot+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(ze.red(Ot+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(ze.red(Ot+" FATAL:"),...t)}timing(){return this.level===0?new vo:{reset:()=>{},stop:()=>{}}}},z=new $n;var Ll=["*://*/*","*","*://*"],Cl="immersive-translate-wildcard-placeholder.com";function So(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>Ll.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let o=r.href,a=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let l=s;if(s===a)return!0;if(Ll.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===a:xd(o,s)}catch{}return!1}else{let u,c=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let g=s.replace(/\*/g,Cl),d;try{d=new URL(g)}catch{return z.debug("invalid match pattern",g,"raw match value:",c),!1}let f=d.hostname,p=d.pathname;p==="/"&&(c.replace("://","").includes("/")||(p="/*"));let T=Td(u+":",_l(f),_l(p));if(T){let b=new URL(o);return b.port="",T.test(b.href)}else return!1}});if(i)return i}return null}function _l(e){return e.replace(Cl,"*")}function Td(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function Bn(e,t){return So(e,t)!==null}function xd(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}function Eo(e){return Array.isArray(e)?e:e?[e]:[]}function Lo(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function St(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function Ir(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let o=e;return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))o[i]=s;else if(i.startsWith("additional")){let l=Eo(s);o[i]=Array.from(new Set([...o[i],...l]))}else o[i]=Eo(s)}),o}var ln="input is invalid type",_o=typeof window=="object",Et=_o?window:{};Et.JS_SHA256_NO_WINDOW&&(_o=!1);var wd=!_o&&typeof self=="object",vd=!Et.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;vd?Et=global:wd&&(Et=self);var Pb=!Et.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,Mb=typeof define=="function"&&define.amd,Un=!Et.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",C="0123456789abcdef".split(""),Sd=[-2147483648,8388608,32768,128],Ze=[24,16,8,0],Fr=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],Hr=["hex","array","digest","arrayBuffer"],Le=[];(Et.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});Un&&(Et.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var kl=function(e,t){return function(n){return new _e(t,!0).update(n)[e]()}},Ml=function(e){var t=kl("hex",e);t.create=function(){return new _e(e)},t.update=function(o){return t.create().update(o)};for(var n=0;n<Hr.length;++n){var r=Hr[n];t[r]=kl(r,e)}return t},Pl=function(e,t){return function(n,r){return new $r(n,t,!0).update(r)[e]()}},Al=function(e){var t=Pl("hex",e);t.create=function(o){return new $r(o,e)},t.update=function(o,a){return t.create(o).update(a)};for(var n=0;n<Hr.length;++n){var r=Hr[n];t[r]=Pl(r,e)}return t};function _e(e,t){t?(Le[0]=Le[16]=Le[1]=Le[2]=Le[3]=Le[4]=Le[5]=Le[6]=Le[7]=Le[8]=Le[9]=Le[10]=Le[11]=Le[12]=Le[13]=Le[14]=Le[15]=0,this.blocks=Le):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}_e.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(ln);if(Un&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!Un||!ArrayBuffer.isView(e)))throw new Error(ln)}else throw new Error(ln);t=!0}for(var r,o=0,a,i=e.length,s=this.blocks;o<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(a=this.start;o<i&&a<64;++o)s[a>>2]|=e[o]<<Ze[a++&3];else for(a=this.start;o<i&&a<64;++o)r=e.charCodeAt(o),r<128?s[a>>2]|=r<<Ze[a++&3]:r<2048?(s[a>>2]|=(192|r>>6)<<Ze[a++&3],s[a>>2]|=(128|r&63)<<Ze[a++&3]):r<55296||r>=57344?(s[a>>2]|=(224|r>>12)<<Ze[a++&3],s[a>>2]|=(128|r>>6&63)<<Ze[a++&3],s[a>>2]|=(128|r&63)<<Ze[a++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++o)&1023),s[a>>2]|=(240|r>>18)<<Ze[a++&3],s[a>>2]|=(128|r>>12&63)<<Ze[a++&3],s[a>>2]|=(128|r>>6&63)<<Ze[a++&3],s[a>>2]|=(128|r&63)<<Ze[a++&3]);this.lastByteIndex=a,this.bytes+=a-this.start,a>=64?(this.block=s[16],this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};_e.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=Sd[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};_e.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=this.blocks,u,c,g,d,f,p,T,b,m,h,x;for(u=16;u<64;++u)f=l[u-15],c=(f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3,f=l[u-2],g=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10,l[u]=l[u-16]+c+l[u-7]+g<<0;for(x=t&n,u=0;u<64;u+=4)this.first?(this.is224?(b=300032,f=l[0]-1413257819,s=f-150054599<<0,r=f+24177077<<0):(b=704751109,f=l[0]-210244248,s=f-1521486534<<0,r=f+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),b=e&t,d=b^e&n^x,T=o&a^~o&i,f=s+g+T+Fr[u]+l[u],p=c+d,s=r+f<<0,r=f+p<<0),c=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),m=r&e,d=m^r&t^b,T=s&o^~s&a,f=i+g+T+Fr[u+1]+l[u+1],p=c+d,i=n+f<<0,n=f+p<<0,c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),h=n&r,d=h^n&e^m,T=i&s^~i&o,f=a+g+T+Fr[u+2]+l[u+2],p=c+d,a=t+f<<0,t=f+p<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),x=t&n,d=x^t&r^h,T=a&i^~a&s,f=o+g+T+Fr[u+3]+l[u+3],p=c+d,o=e+f<<0,e=f+p<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0,this.h5=this.h5+a<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};_e.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=C[e>>28&15]+C[e>>24&15]+C[e>>20&15]+C[e>>16&15]+C[e>>12&15]+C[e>>8&15]+C[e>>4&15]+C[e&15]+C[t>>28&15]+C[t>>24&15]+C[t>>20&15]+C[t>>16&15]+C[t>>12&15]+C[t>>8&15]+C[t>>4&15]+C[t&15]+C[n>>28&15]+C[n>>24&15]+C[n>>20&15]+C[n>>16&15]+C[n>>12&15]+C[n>>8&15]+C[n>>4&15]+C[n&15]+C[r>>28&15]+C[r>>24&15]+C[r>>20&15]+C[r>>16&15]+C[r>>12&15]+C[r>>8&15]+C[r>>4&15]+C[r&15]+C[o>>28&15]+C[o>>24&15]+C[o>>20&15]+C[o>>16&15]+C[o>>12&15]+C[o>>8&15]+C[o>>4&15]+C[o&15]+C[a>>28&15]+C[a>>24&15]+C[a>>20&15]+C[a>>16&15]+C[a>>12&15]+C[a>>8&15]+C[a>>4&15]+C[a&15]+C[i>>28&15]+C[i>>24&15]+C[i>>20&15]+C[i>>16&15]+C[i>>12&15]+C[i>>8&15]+C[i>>4&15]+C[i&15];return this.is224||(l+=C[s>>28&15]+C[s>>24&15]+C[s>>20&15]+C[s>>16&15]+C[s>>12&15]+C[s>>8&15]+C[s>>4&15]+C[s&15]),l};_e.prototype.toString=_e.prototype.hex;_e.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,o>>24&255,o>>16&255,o>>8&255,o&255,a>>24&255,a>>16&255,a>>8&255,a&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,s&255),l};_e.prototype.array=_e.prototype.digest;_e.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function $r(e,t,n){var r,o=typeof e;if(o==="string"){var a=[],i=e.length,s=0,l;for(r=0;r<i;++r)l=e.charCodeAt(r),l<128?a[s++]=l:l<2048?(a[s++]=192|l>>6,a[s++]=128|l&63):l<55296||l>=57344?(a[s++]=224|l>>12,a[s++]=128|l>>6&63,a[s++]=128|l&63):(l=65536+((l&1023)<<10|e.charCodeAt(++r)&1023),a[s++]=240|l>>18,a[s++]=128|l>>12&63,a[s++]=128|l>>6&63,a[s++]=128|l&63);e=a}else if(o==="object"){if(e===null)throw new Error(ln);if(Un&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!Un||!ArrayBuffer.isView(e)))throw new Error(ln)}else throw new Error(ln);e.length>64&&(e=new _e(t,!0).update(e).array());var u=[],c=[];for(r=0;r<64;++r){var g=e[r]||0;u[r]=92^g,c[r]=54^g}_e.call(this,t,n),this.update(c),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}$r.prototype=new _e;$r.prototype.finalize=function(){if(_e.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();_e.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),_e.prototype.finalize.call(this)}};var cn=Ml();cn.sha256=cn;cn.sha224=Ml(!0);cn.sha256.hmac=Al();cn.sha224.hmac=Al(!0);var Rl=cn;var Nl=Rl.sha256;function et(e){return Promise.resolve(Nl(e))}function Br(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function Lt(e,t){let n=Nl.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Dl(e,t){let n=await Lt(e,t);return Br(n)}async function Ur(e,t){let n=Ed(t),r=await Lt(e,n);return Br(r)}function Ed(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}function jn(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():y}var Y=jn();function He(){return Y.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Ol(){return typeof Deno<"u"}var Ld=jn(),Wn=Ld.PROD==="1";function Il(e,t,n){let r=e.querySelectorAll("footer"),o=e.querySelectorAll("aside"),a=Array.from(r).concat(Array.from(o)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),l=[];for(let c of i)s.length>0&&s[0].contains(c)||l.push(c);for(let c=0;c<t.length;c++){let g=t[c].element;for(let d=c+1;d<t.length;d++){let f=t[d].element;if(g.contains(f))t.splice(d,1),d--;else if(f.contains(g)){t.splice(c,1),c--;break}else g===f&&(t.splice(d,1),d--)}}return t.filter(c=>{let g=c.element;if(c.reserve)return!0;let d=!1,f=!1;for(let p of a)if(g===p||p.contains(g)){d=!0;break}if(d)return!1;for(let p of l){if(g.nodeName==="H1")continue;let T=p.querySelector("h1");if(!(T&&Bl(T.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(g===p||p.contains(g))){f=!0;break}}return!f}).map(c=>c.element)}function un(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function jr(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function ko(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function zn(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function Ye(e,t){let n=[];for(let r of t){let o=e.querySelectorAll(r);for(let a of o)n.push(a)}return n}function _d(e,t){let n=function(a){return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE?a.nodeType===Node.ELEMENT_NODE&&Be(a,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),o=!0;for(;r.nextNode();){let a=r.currentNode;if(a.nodeType===Node.ELEMENT_NODE){if(Q(a,mt)){if(o===!0)return!0;continue}if(!t.inlineTags.includes(a.nodeName))return!1}}return!0}function tt(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?Q(e,Bt)||e.nodeName==="BR"?!1:Q(e,mt)?!0:_d(e,t):Q(e,mt):!1}function Fl(e,t){for(let n of t)if(n===e)return!0;return!1}function Hl(e,t){return!!t.metaTags.includes(e.nodeName)}function Be(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:o}=t,a=[];return n&&o&&o.length>0?a=o||[]:a=o.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&Q(e,Ge)?!0:e.nodeType===Node.ELEMENT_NODE&&Q(e,It)?!1:!!a.includes(e.nodeName)}function $l(e,t,n,r){let o=qn(r),a=new RegExp(`^${o[0]}(\\d+)${o[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||Ao(s)||Po(s)||Mo(s)||a.test(s)?!1:Bl(i,t,n)}function Bl(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function Po(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function Mo(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function Ao(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function Ul(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function Q(e,t){return Cd(e,t,"1")}function Cd(e,t,n){return Wn?e[Ee]?!!(e[Ee]&&e[Ee][t]===n):!1:e.dataset[t]===n}function jl(e,t){return Wn?e[Ee]?!!(e[Ee]&&e[Ee][t]):!1:e.dataset[t]!==void 0}function Co(e){return e.replace(/\s/g," ")}function Wr(e){let t=e.querySelector("main"),n="";if(t&&(n=Co(t.innerText||t.textContent||"")),n.length>=10)return n;let r=e.querySelectorAll("article");if(r.length>0)for(let o of r)n=Co(o.innerText||o.textContent||"");return n.length>=10||(n=Co(e.innerText||e.textContent||"")),n}function zr(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function re(e,t,n){e.isContentEditable||(e.dataset[po]||(e.dataset[po]="1"),Wn?(e[Ee]||(e[Ee]={}),e[Ee][t]||(e[Ee][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function Wl(e,t){if(Wn){if(!e[Ee]||!e[Ee][t])return;delete e[Ee][t]}else delete e.dataset[t]}function _t(e,t){return Wn?!e[Ee]||!e[Ee][t]?void 0:e[Ee][t]:e.dataset[t]}function fn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||Q(e,Rr))&&(n=!0),n}function zl(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function qn(e){let{config:t}=e,n=Tl;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function qr(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function ql(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function Ut(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=vt.map(o=>o.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let o=n.indexOf(t);return o===-1?"auto":vt[o]}else return"auto";else return vt[r]}var Vl={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},immediateTranslationPattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]}]};function kd(){if(Y.PROD==="1")return{};let e={};if(Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:Y.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:Y.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:Y.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:Y.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:Y.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:Y.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(Y.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:Y.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return Y.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=Y.IMMERSIVE_TRANSLATE_SERVICE),Y.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),Y.MOCK==="1"&&(e.translationService="mock"),e}async function Ro(){let e=await J.storage.local.get(Ar);return e[Ar]?e[Ar]:{}}async function jt(){let e=await J.storage.local.get(Mr),t={...Vl,buildinConfigUpdatedAt:Y.BUILD_TIME};if(e[Mr]){let d=e[Mr],f=new Date(d.buildinConfigUpdatedAt),p=new Date(t.buildinConfigUpdatedAt);f>p&&(t=d)}let n={};if(!He()){let d=await J.commands.getAll();for(let f of d)f.name&&f.shortcut&&(n[f.name]=f.shortcut)}let r={...t,targetLanguage:wo,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:t.generalRule,translationGeneralConfig:{engine:"google"},rules:[]},o=kd(),i=(await J.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},l=Object.assign({},s,o,i);if(!l.interfaceLanguage){let d=await Pd();l.interfaceLanguage=d}let u=Object.assign(r,t),c=Object.keys(u),g=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let d of c){let f=d;if(f==="generalRule")typeof l[f]=="object"&&(u[f]=Ir(r[f],l[f]));else if(f==="translationServices"){let p=l[f]||{},T=t[f]||{},b=Object.keys(T),m=Object.keys(p),h=[...new Set([...b,...m])],x={};for(let v of h)x[v]={...T[v],...p[v]};u[f]=x}else if(typeof l[f]!="string"&&typeof l[f]!="boolean"&&typeof l[f]!="number"&&g.includes(f))l[f]&&(u[f]=Object.assign(u[f],l[f])),f==="shortcuts"&&(u[f]={...u[f],...n});else if(f==="rules"){if(Array.isArray(l[f])&&(u[f]=[...l[f],...u[f]]),Y.PROD==="0"&&Y.DEV_RULES){let p=JSON.parse(Y.DEV_RULES);u[f]=[...p,...u[f]]}}else l[f]!==void 0&&(u[f]=l[f])}return u.donateUrl=t.donateUrl,u.minVersion=t.minVersion,u.feedbackUrl=t.feedbackUrl,u}var Pd=async()=>{let n=(await J.i18n.getAcceptLanguages()).map(r=>Ut(r)).find(r=>Dt[r]);return n||"en"};var Gl="auto",Vr="auto",Kl="auto";function Jl(e){Gl=e}function gn(e){Vr=e}function Vn(){return Vr!=="auto"?Vr:Kl!=="auto"?Kl:Gl}function Kr(){return Vr}async function Kn(e){let{url:t,config:n,state:r}=e,o=new URL(t),a="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:l,translationTheme:u,translationThemePatterns:c,translationUrlPattern:g,targetLanguage:d,sourceLanguageUrlPattern:f,immediateTranslationPattern:p}=n,T=dn(t,i),b=dn(t,p),m=s,h=Object.keys(l);for(let P of h){let A=l[P];if(dn(t,A)){m=P;break}}let x=u,v=Object.keys(c);for(let P of v){let A=c[P];if(dn(t,A)){x=P;break}}let N=dn(t,g),U=Md(t,g);U||(U=Bn(t,Sl));let D=Object.keys(f),M={};for(let P of D){let A=f[P];if(A&&A.matches)for(let V of A.matches)M[V]=P}let k=Object.keys(M),K=So(t,k);K&&(a=M[K]??"auto",M[K]&&M[K]!=="auto"&&gn(M[K]));let q=d||"zh-CN",X=o.hostname,ue=await et(X),se=o.pathname+o.search+o.hash,ve=await et(se),Ue=`https://${ue}.com/${ve}`,ie=await Ro(),pe=n.translationStartMode;pe==="dynamic"&&b&&(pe="immediate");let ne={targetLanguage:q,config:n,translationService:m,translationTheme:x,isTranslateUrl:N,sourceLanguage:a,isTranslateExcludeUrl:U,rule:n.generalRule,url:t,encryptedUrl:Ue,state:r||{translationArea:n.translationArea,translationStartMode:pe,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:T},localConfig:ie};ne.state.translationArea==="body"&&(ne.config.generalRule.excludeTags=ne.config.generalRule.excludeTags.filter(P=>P!=="BUTTON"&&P!=="LABEL"),ne.config.generalRule.additionalExcludeSelectors=ne.config.generalRule.additionalExcludeSelectors.filter(P=>P!==".btn")),ne.translationService==="d"&&(n.immediateTranslationTextCount=0);let gt=n.rules,bt;globalThis.PDFViewerApplication?bt=gt.find(P=>P.isPdf):bt=gt.find(P=>dn(t,P));let w=n.generalRule;return bt&&(ne.rule=Ir(w,bt)),ne.rule.isPdf&&(ne.state.translationArea="main"),ne.state.translationArea==="body"&&(ne.rule.paragraphMinTextCount=1,ne.rule.paragraphMinWordCount=1),ne}function dn(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:o,excludeSelectorMatches:a}=t;return r&&r.length>0&&Bn(e,r)?!1:n&&n.length>0&&Bn(e,n)?!0:a&&a.length>0&&zr(a)?!1:!!(o&&o.length>0&&zr(o))}function Md(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&Bn(e,n)||r&&r.length>0&&zr(r))}function Gr(e){let t;try{t=new URL(e)}catch{return!1}let n=t.pathname;return n.endsWith(".html")||n.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}var No={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return J.storage[n].get(r)},set:(e,t,n)=>J.storage[n].set({[e]:t})};function Jr(e,t,n){let[r]=ye(()=>typeof t=="function"?t():t),[o]=ye(n),[a,i]=ye(r),[s,l]=ye(!0),[u,c]=ye("");Qe(()=>{No.get(e,r,o).then(d=>{d[e]&&i(d[e]),l(!0),c("")}).catch(d=>{l(!1),c(d)})},[e,r,o]);let g=Mn(d=>{let f=typeof d=="function"?d(a):d;z.debug("new settings",f),No.set(e,f,o).then(()=>{i(f),l(!0),c("")}).catch(p=>{i(f),l(!1),c(p)})},[o,e,a]);return[a,g,s,u]}function Do(e,t,n){let r=[];return function(){let[a,i,s,l]=Jr(e,t,n),u=Mn(c=>{for(let g of r)g(c)},[]);return Qe(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[a,u,s,l]}}function Yl(e,t){return Do(e,t,"sync")}var Ad="userConfig",Rd={},Xl=Yl(Ad,Rd);var Re=class extends Error{constructor(n,r,o){super(r);this.name=n,o&&(this.details=o)}};var Gn=new Map,Wt=class{constructor(t,n=!1){this.logger=new $n,n&&this.logger.setLevel("debug"),this.fromType=t,Gn.has(t)||(Gn.set(t,new Map),J.runtime.onMessage.addListener((r,o,a)=>{let i=r.from,s=r.to,l,u,c;o.tab&&o.tab.id&&(l=o.tab.id,i=`${i}:${l}`,u=o.tab.url,c=o.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let g=Io(s),{type:d,name:f}=g;if(d!==t)return!1;let p=Io(i),b=Gn.get(d).get(f);if(!b)return this.logger.debug(`no message handler for ${d}:${s}`),a({ok:!1,errorName:"notActive",errorMessage:`${s} is not active, from ${i} ${r.payload.method}`}),!1;let{messageHandler:m,sync:h}=b,x={type:t,name:p.name,id:l,url:u,active:c};if(h){try{let v=m(r.payload,x);a({ok:!0,data:v})}catch(v){a({ok:!1,errorName:v.name,errorMessage:v.message,errorDetails:v.details})}return!1}else return m(r.payload,x).then(v=>{a({ok:!0,data:v})}).catch(v=>{a({ok:!1,errorName:v.name,errorMessage:v.message,errorDetails:v.details})}),!0}))}getConnection(t,n,r){let o=!1;r&&r.sync&&(o=!0);let a=this.fromType,i=Gn.get(a);if(i.has(t))return i.get(t).connectionInstance;{let s=new Oo(`${a}:${t}`,this.logger);return Gn.get(a).set(t,{messageHandler:n,sync:o,connectionInstance:s}),s}}},Oo=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=Io(t),{type:o,id:a}=r;if(o!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await J.runtime.sendMessage(i);return Ql(i,s,this.logger)}catch(s){if(o==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(l,n,t,s),Promise.resolve({message:l})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await J.tabs.sendMessage(a,i);return Ql(i,s,this.logger)}}};function Ql(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Re(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function Io(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var Nd=function(e,t){let{method:n,data:r}=e;z.debug(`popup received message: ${n}`,r||" ");let o;t.active&&(o=t.id,globalThis.document.dispatchEvent(new CustomEvent(Fn,{detail:{tabId:o,payload:e}})))},Yr;function Zl(){Jn()}function Jn(){return Yr||(Yr=new Wt("popup",!1).getConnection("main_sync",Nd),Yr)}function ec(e,t=2e3){return n=>{let r,o=0;return a=>{++o==e&&(n(a),o=0),clearTimeout(r),r=setTimeout(()=>o=0,t)}}}function tc(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function nc(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function rc(){return J.runtime.getManifest().version}var Dd=0;function F(e,t,n,r,o){var a,i,s={};for(i in t)i=="ref"?a=t[i]:s[i]=t[i];var l={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Dd,__source:o,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(i in a)s[i]===void 0&&(s[i]=a[i]);return B.vnode&&B.vnode(l),l}function Ct(e){let{items:t,maxWidth:n}=e;return n=n||128,F("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let o=r.target.value,a=t.find(i=>i.value===o);a&&a.onSelected(a)},children:t.map(r=>F("option",{value:r.value,selected:r.selected,children:r.label}))})}var Xr="DROP_DOWN_DEFAULT_VALUE";function Fo(e){let{showArrow:t,onSelected:n,className:r,menus:o,maxWidth:a}=e;r=r||"",t=t??!0,a=a||60;let i=Ea(null);return F("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${r||""}`,value:Xr,style:{maxWidth:`${a}px`},onChange:s=>{s.preventDefault();let l=s.target.value;if(i.current&&l!==Xr){i.current.value=Xr,i.current?.dispatchEvent(new Event("change"));let u=o.find(c=>c.value===l);u&&n(u)}},children:[{value:Xr,label:e.label}].concat(o).map(s=>F("option",{value:s.value,children:s.label}))})}function ac(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Ho(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let o=t[r],a=new RegExp("{"+r+"}","gm");n=n.replace(a,o.toString())}),n}function Yn(e,t,n){let r=e[t];if(!r)return n;let o=n.split("."),a="";do{a+=o.shift();let i=r[a];i!==void 0&&(typeof i=="object"||!o.length)?(r=i,a=""):o.length?a+=".":r=n}while(o.length);return r}function oc(e,t,n,r,o){if(!e.hasOwnProperty(n))return t;let a=Yn(e,n,t);return a===t&&n!==r&&(a=Yn(e,r,t)),Ho(a,o)}var pn={},Od={root:"",lang:"en",fallbackLang:"en"};function $o(e,t){let n=Object.assign({},Od,e);pn=t||pn;let[r,o]=ye(n.lang),[a,i]=ye(pn),[s,l]=ye(!1),u=g=>{if(a.hasOwnProperty(g))return;l(!1);let d=ac(n.root||"",g);n.getUrl&&(d=n.getUrl(n.root||"",g),fetch(d).then(f=>f.json()).then(f=>{pn[g]=f,i({...pn}),l(!0)}).catch(f=>{i({...pn}),l(!0)}))};return Qe(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:o,t:(g,d)=>{if(!a.hasOwnProperty(r))return g;let f=Yn(a,r,g);return f===g&&r!==n.fallbackLang&&(f=Yn(a,n.fallbackLang,g)),Ho(f,d)},isReady:s}}var Uo=wa(null),Bo={root:"assets",lang:"en",fallbackLang:"en"},sc=e=>{let{t,setLang:n,lang:r,isReady:o}=$o({root:e.root||Bo.root,lang:e.lang||Bo.lang,fallbackLang:e.fallbackLang||Bo.fallbackLang,getUrl:e.getUrl},e.translations);return F(Uo.Provider,{value:{t,setLang:n,lang:r,isReady:o},children:e.children})};function Qr(){return La(Uo)}function jo(e){let{field:t,onChange:n,value:r}=e;r=r||t.default||"";let{t:o}=Qr();return t.type==="select"?F("div",{class:"flex justify-between mb-2",children:[F("label",{class:"inline-block",children:[t.label?o(t.label):t.name,"\uFF1A"]}),F(Ct,{items:t.options.map(a=>({label:`${a.label?o(a.label):a.value}`,value:r,selected:r===a.value,onSelected:()=>{n(a.value)}}))})]}):null}function ic(e,t,n){let r=Id(e,t),o=[],a={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(a.tempSentences.reduce((l,u)=>l+u.text.length,0)+i.text.length>t||a.tempSentences.length>=n)&&(o.push(a),a={fromByClient:a.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(a.from!==i.from||a.to!==i.to)&&(a.tempSentences.length>0?(o.push(a),a={fromByClient:a.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(a.from=i.from,a.to=i.to)),a.tempSentences.push(i);return a.tempSentences.length>0&&o.push(a),o}function Id(e,t){let n=[];for(let r=0;r<e.length;r++){let o=e[r],{from:a,to:i,text:s,url:l}=o,u=s.split(/\r?\n/),c=[],g="";for(let d=0;d<u.length;d++){let f=u[d];if(f===""){c.length>0?d<u.length-1&&(c[c.length-1].suffix+=`
`):g+=`
`;continue}else if(f.length>t){let p=[];Wo(f,t,p);for(let T=0;T<p.length;T++){let b=p[T],{text:m,prefix:h,suffix:x}=b;c.push({from:a,to:i,text:m,prefix:h,suffix:x,index:r,url:l})}}else c.push({text:f,prefix:g,suffix:"",from:a,to:i,index:r,url:l});c.length>0&&d<u.length-1&&(c[c.length-1].suffix+=`
`)}n.push(...c)}return n}function Xn(e,t){let n=Ut(e),r=Ut(t),o=n===r;return o?!0:(o=n.startsWith("zh")&&r.startsWith("zh"),o)}function Wo(e,t,n){let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((a,i)=>{let s=e.lastIndexOf(i,t);return s>a?s:a},-1);if(o===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&Wo(e.slice(t),t,n);else{let a=e.slice(0,o+1);a.startsWith(" ")?n.push({text:a.slice(1),prefix:" ",suffix:""}):n.push({text:a,prefix:"",suffix:""}),o+1<e.length&&Wo(e.slice(o+1),t,n)}return n}async function lc(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let a=await(e.fetchPolyfill||fetch)(t,r);if(a.ok&&a.status>=200&&a.status<400){if(n==="json")return await a.json();if(n==="text")return await a.text();if(n==="raw"){let i=await a.text(),s=Object.fromEntries([...a.headers.entries()]),l=a.url;return l||(a.headers.get("X-Final-URL")?l=a.headers.get("X-Final-URL"):l=t),{body:i,headers:s,status:a.status,statusText:a.statusText,url:l}}}else{let i;try{i=await a.text()}catch(s){z.error("parse response failed",s)}throw new Re("fetchError",a.status+": "+a.statusText||"",i)}}function kt(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Fd(e,t){return e<<t|e>>>32-t}function ea(e,t,n,r,o,a){return kt(Fd(kt(kt(t,e),kt(r,a)),o),n)}function Ne(e,t,n,r,o,a,i){return ea(t&n|~t&r,e,t,o,a,i)}function De(e,t,n,r,o,a,i){return ea(t&r|n&~r,e,t,o,a,i)}function Oe(e,t,n,r,o,a,i){return ea(t^n^r,e,t,o,a,i)}function Ie(e,t,n,r,o,a,i){return ea(n^(t|~r),e,t,o,a,i)}function Zr(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,o,a,i,s=1732584193,l=-271733879,u=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)r=s,o=l,a=u,i=c,s=Ne(s,l,u,c,e[n],7,-680876936),c=Ne(c,s,l,u,e[n+1],12,-389564586),u=Ne(u,c,s,l,e[n+2],17,606105819),l=Ne(l,u,c,s,e[n+3],22,-1044525330),s=Ne(s,l,u,c,e[n+4],7,-176418897),c=Ne(c,s,l,u,e[n+5],12,1200080426),u=Ne(u,c,s,l,e[n+6],17,-1473231341),l=Ne(l,u,c,s,e[n+7],22,-45705983),s=Ne(s,l,u,c,e[n+8],7,1770035416),c=Ne(c,s,l,u,e[n+9],12,-1958414417),u=Ne(u,c,s,l,e[n+10],17,-42063),l=Ne(l,u,c,s,e[n+11],22,-1990404162),s=Ne(s,l,u,c,e[n+12],7,1804603682),c=Ne(c,s,l,u,e[n+13],12,-40341101),u=Ne(u,c,s,l,e[n+14],17,-1502002290),l=Ne(l,u,c,s,e[n+15],22,1236535329),s=De(s,l,u,c,e[n+1],5,-165796510),c=De(c,s,l,u,e[n+6],9,-1069501632),u=De(u,c,s,l,e[n+11],14,643717713),l=De(l,u,c,s,e[n],20,-373897302),s=De(s,l,u,c,e[n+5],5,-701558691),c=De(c,s,l,u,e[n+10],9,38016083),u=De(u,c,s,l,e[n+15],14,-660478335),l=De(l,u,c,s,e[n+4],20,-405537848),s=De(s,l,u,c,e[n+9],5,568446438),c=De(c,s,l,u,e[n+14],9,-1019803690),u=De(u,c,s,l,e[n+3],14,-187363961),l=De(l,u,c,s,e[n+8],20,1163531501),s=De(s,l,u,c,e[n+13],5,-1444681467),c=De(c,s,l,u,e[n+2],9,-51403784),u=De(u,c,s,l,e[n+7],14,1735328473),l=De(l,u,c,s,e[n+12],20,-1926607734),s=Oe(s,l,u,c,e[n+5],4,-378558),c=Oe(c,s,l,u,e[n+8],11,-2022574463),u=Oe(u,c,s,l,e[n+11],16,1839030562),l=Oe(l,u,c,s,e[n+14],23,-35309556),s=Oe(s,l,u,c,e[n+1],4,-1530992060),c=Oe(c,s,l,u,e[n+4],11,1272893353),u=Oe(u,c,s,l,e[n+7],16,-155497632),l=Oe(l,u,c,s,e[n+10],23,-1094730640),s=Oe(s,l,u,c,e[n+13],4,681279174),c=Oe(c,s,l,u,e[n],11,-358537222),u=Oe(u,c,s,l,e[n+3],16,-722521979),l=Oe(l,u,c,s,e[n+6],23,76029189),s=Oe(s,l,u,c,e[n+9],4,-640364487),c=Oe(c,s,l,u,e[n+12],11,-421815835),u=Oe(u,c,s,l,e[n+15],16,530742520),l=Oe(l,u,c,s,e[n+2],23,-995338651),s=Ie(s,l,u,c,e[n],6,-198630844),c=Ie(c,s,l,u,e[n+7],10,1126891415),u=Ie(u,c,s,l,e[n+14],15,-1416354905),l=Ie(l,u,c,s,e[n+5],21,-57434055),s=Ie(s,l,u,c,e[n+12],6,1700485571),c=Ie(c,s,l,u,e[n+3],10,-1894986606),u=Ie(u,c,s,l,e[n+10],15,-1051523),l=Ie(l,u,c,s,e[n+1],21,-2054922799),s=Ie(s,l,u,c,e[n+8],6,1873313359),c=Ie(c,s,l,u,e[n+15],10,-30611744),u=Ie(u,c,s,l,e[n+6],15,-1560198380),l=Ie(l,u,c,s,e[n+13],21,1309151649),s=Ie(s,l,u,c,e[n+4],6,-145523070),c=Ie(c,s,l,u,e[n+11],10,-1120210379),u=Ie(u,c,s,l,e[n+2],15,718787259),l=Ie(l,u,c,s,e[n+9],21,-343485551),s=kt(s,r),l=kt(l,o),u=kt(u,a),c=kt(c,i);return[s,l,u,c]}function cc(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function zo(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function Hd(e){return cc(Zr(zo(e),e.length*8))}function $d(e,t){var n,r=zo(e),o=[],a=[],i;for(o[15]=a[15]=void 0,r.length>16&&(r=Zr(r,e.length*8)),n=0;n<16;n+=1)o[n]=r[n]^909522486,a[n]=r[n]^1549556828;return i=Zr(o.concat(zo(t)),512+t.length*8),cc(Zr(a.concat(i),512+128))}function uc(e){var t="0123456789abcdef",n="",r,o;for(o=0;o<e.length;o+=1)r=e.charCodeAt(o),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function qo(e){return unescape(encodeURIComponent(e))}function fc(e){return Hd(qo(e))}function Bd(e){return uc(fc(e))}function gc(e,t){return $d(qo(e),qo(t))}function Ud(e,t){return uc(gc(e,t))}function mn(e,t,n){return t?n?gc(t,e):Ud(t,e):n?fc(e):Bd(e)}var hn=[];async function ta(e,t){return await new Promise((n,r)=>{let o=e,a=1,i=indexedDB.open(o,a);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let l=i.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function dc(e){let t=`${de}-${e.service}@${e.from}->${e.to}`;return await Wd(t,e)}async function pc(e){let t=mn(e.originalText),n=`${de}-${e.service}@${e.from}->${e.to}`;return await jd(n,t)}async function jd(e,t){let n=await ta(e);return await new Promise((r,o)=>{if(!n)return o();let a="cache",s=n.transaction([a],"readonly").objectStore(a).get(t);s.onsuccess=l=>{n.close();let u=s.result;r(u)},s.onerror=l=>{n.close(),console.error("queryInDB->onerror:",l),o()}})}async function Wd(e,t){let n=await ta(e);return(await qd()).includes(e)||await zd(e),await new Promise(o=>{if(!n)return o(!1);let a="cache",s=n.transaction([a],"readwrite").objectStore(a).put(t);s.onsuccess=l=>{n.close(),o(!0)},s.onerror=l=>{console.error("addInDB->onerror:",l),n.close(),o(!1)}})}async function zd(e){let t="cache_list",n=await ta(de+"-cacheList",t),o=n.transaction([t],"readwrite").objectStore(t).put({key:e});o.onsuccess=a=>{n.close(),hn.push(e)},o.onerror=a=>{n.close(),console.error(a)}}async function qd(){if(hn&&hn.length>0)return hn;let e=await ta(de+"-cacheList","cache_list");return hn=await new Promise(t=>{let n="cache_list",o=e.transaction([n],"readonly").objectStore(n).getAllKeys();o.onsuccess=a=>{e.close(),t(o.result)},o.onerror=a=>{e.close(),console.error(a),t([])}}),hn}var Vd=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Kd=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Gd=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,Jd=/(\s+)|([\p{P}\p{S}])/gu,Yd=[["zh-CN",Vd],["ja",Kd],["ko",Gd]];function mc(e){if(!e)return"auto";let t="auto",n=0,r=0,o=e.match(Jd);o&&(r=o.reduce((i,s)=>i+s.length,0));let a=e.length-r;for(let i of Yd){let s=i[1],l=i[0],u=e.match(s),c=u?u.length:0;c>n&&(n=c,t=l)}return n*2.5/a>.5?t:"auto"}function Vo(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:o,additionalInlineSelectors:a,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:l,globalStyles:u,stayOriginalTags:c,stayOriginalSelectors:g,globalAttributes:d}=t,f=Object.keys(u);if(f.length>0)for(let k of f){let K=Ye(document.body,[k]);for(let q of K)if(!Q(q,ho)){re(q,ho,"1");let X=u[k];q.style.cssText+=X}}let p=Object.keys(d);if(p.length>0)for(let k of p){let K=d[k],q=Object.keys(K),X=Ye(document.body,[k]);for(let ue of X)for(let se of q){let ve=K[se];ue.getAttribute(se)!==ve&&(ve===null?ue.removeAttribute(se):ue.setAttribute(se,ve))}}let T=[...n,...r],b=[...o,...a],m=[...s],h=l.map(k=>k.toLowerCase()),x=i;Ye(document.body,T).forEach(k=>{Q(k,Ge)||re(k,Ge,"1")});let N=[];if(m.length>0&&(N=Ye(document.body,m).filter(k=>!Q(k,Ke))),h.length>0){let k=c.reduce((X,ue)=>{let se=ue.toLowerCase();return X.push(`<${se}>`,`</${se}>`,`<${se} />`),X},[]),K=[">http://",">https://"];k.push(...K);let q=Ye(document.body,h).filter(X=>{if(Q(X,Ke))return!1;{let se=X.innerHTML;return!k.some(Ue=>se.includes(Ue))}});N.push(...q)}N.forEach(k=>{Q(k,Ke)||re(k,Ke,"1")});let U=[];if(b.length>0)for(let k of e)U.push(...Ye(k,b));U.forEach(k=>{re(k,mt,"1")});let D=[];if(x.length>0)for(let k of e)D.push(...Ye(k,x));D.forEach(k=>{re(k,Bt,"1")});let M=[];if(g.length>0)for(let k of e)M.push(...Ye(k,g));M.forEach(k=>{re(k,Rr,"1")})}function hc(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function bc(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await nt({text:Wr(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Ut(document.documentElement.lang)),e}function Ko(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,o=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let l=e.matches(s),u=[];l?u=[e]:u=e.querySelectorAll(s);for(let c of u)Q(c,It)||re(c,It,"1");return Array.from(u)}).flat();o.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let g=Ye(e,n.additionalSelectors);for(let d of g)Q(d,It)||re(d,It,"1");o.push(...g.map(d=>({element:d,reserve:!0})))}let i=Ye(e,["article"]);o.push(...i.map(g=>({element:g,reserve:!0})));let s;if(o.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let g=Array.from(s);o=o.concat(g.map(d=>({element:d,reserve:!0})))}let l=[],u=g=>{if(g.nodeType===Node.ELEMENT_NODE&&Be(g,t.rule,!1))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE&&(g.textContent?g.textContent.trim():"").length>=n.containerMinTextCount){let f=g.parentNode;f&&f.parentNode&&(f=f.parentNode),f&&f.nodeType===Node.ELEMENT_NODE&&(l.includes(f)||l.push(f))}return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;c.nextNode(););o.push(...l.map(g=>({element:g,reserve:!1})))}let a=Il(e,o,n);return a.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),a}var Go=[];function yc(e){Go.push(e)}function Jo(){Go.forEach(e=>e()),Go=[]}function rt(e,t,n){let r=[],{rule:o}=n,a=qn(n);if(e.length===0)return null;e=e.map(d=>d.element?d:{element:d});let i="",s=!1;for(let d=0;d<e.length;d++){let p=e[d].element;if(typeof p=="string"){i+=p;continue}let T="";qr(p,`[${Ge}]`)?T=Xd(p):T=p.innerText;let b=T.startsWith(" "),m=T.endsWith(" ");p.tagName==="A"&&(b=!0,m=!0);let h=fn(p,o);if(T===""||h){h&&(b=!0,m=!0);let x={type:"element",value:p};r.push(x);let v=r.length-1,N=`${a[0]}${v}${a[1]}`;i+=(b?" ":"")+N+(m?" ":"");continue}if(!Be(p,o,!0)){{let x=t?T:T.trim().replace(/\n/g," ");if(Po(x)||Mo(x)||Ao(x)||Ul(x)){let v={type:"element",value:p};r.push(v);let N=r.length-1,U=`${a[0]}${N}${a[1]}`;i+=(b?" ":"")+U+(m?" ":"")}else s=!0,i+=(b?" ":"")+x+(m?" ":"")}if(typeof p!="string"){let x=zn(p.nextSibling,t);x&&(i+=x)}}}if(!s)return null;let l=!1,u=i.split(" ").length,c=i.split(`
`).length;u<=o.blockMinWordCount&&i.length<=o.blockMinTextCount&&c<2&&(l=!0);let g={elements:e.map(d=>d.element),text:i,variables:r,inline:l,preWhitespace:t};return $l(g,n.state.translationArea==="body"?2:o.paragraphMinTextCount,n.state.translationArea==="body"?1:o.paragraphMinWordCount,n)?g:null}function Xd(e){let t="",n=o=>o.nodeType===Node.ELEMENT_NODE?Q(o,Ge)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:o.nodeType===Node.TEXT_NODE?(o.textContent&&o.textContent.trim()!==""&&(t+=o.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var Qd=1,bn=new Map;function wc(){return bn}function zt(e){return bn.get(e)}function Qn(e,t){bn.set(e,t)}function vc(){bn.clear()}function Tc(e){if(!Q(e,Ft))return!1;if(Q(e,Ht))return!0;let t=_t(e,$t);if(!t)return!1;let n=parseInt(t),r=bn.has(n);if(!r){let o=document.getElementById(`${Je}-${n}`);o&&o.remove()}return r}function ht(e,t){let n={...e,id:Qd++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(re(r,Ft,"1"),re(r,$t,`${n.id}`))}),t.push(n),bn.set(n.id,{...n,state:"Original",observers:[]})}async function Sc(e,t,n){let r=[],{targetLanguage:o,rule:a}=n;for(let d of t){if(Be(d,a,!1))continue;let f=Q(d,sn),p=[];if(Q(d,Ke)){if(!Tc(d)){let h=rt([d],f,n);h&&ht(h,r)}continue}let T=h=>{if(!(h.nodeType===Node.TEXT_NODE||h.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(h.nodeType===Node.ELEMENT_NODE){let x=h;if(x.isContentEditable||Tc(h))return NodeFilter.FILTER_REJECT;if(re(x,Ft,"1"),Q(x,Ke)){if(p.length>0){let N=rt([...p],f,n);N&&ht(N,r),p.length=0}p.push(x);let v=rt([...p],f,n);return v&&ht(v,r),p.length=0,NodeFilter.FILTER_REJECT}}if(Be(h,a,!0)){if((h.nodeName==="CODE"||h.nodeName==="TT")&&h.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(tt(h,a))return xc(h,p,r,f,n),NodeFilter.FILTER_REJECT;if(p.length>0){let x=rt([...p],f,n);x&&ht(x,r),p.length=0}return NodeFilter.FILTER_REJECT}return h.nodeName==="PRE"?(h.classList.contains("code"),NodeFilter.FILTER_REJECT):tt(h,a)?(xc(h,p,r,f,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},b=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,T),m=b.nextNode();for(;m;){if(p.length>0){let h=rt([...p],f,n);h&&ht(h,r),p.length=0}m=b.nextNode()}if(p.length>0){let h=rt([...p],f,n);h&&ht(h,r),p.length=0}}let i=r.map(d=>{let{text:f}=d;return nt({text:f})}),s=await Promise.all(i),l=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],c="auto";n.state.isDetectParagraphLanguage||(c=Kr());let g=Vn();return s.forEach((d,f)=>{let p=d;p==="auto"&&(p=g);let T={...r[f],languageByLocal:p,languageByClient:c};if(!Xn(d,o)){if(u.length>0&&u.some(h=>Xn(d,h)))return;l.push(T)}}),l}function Zd(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),o=null,a=!1;for(;o=r.nextNode();){let s=o.textContent||"",l=s.trim();if(!a&&s.length>0&&l.length===0){a=!0,n.push(" ");continue}l.length>0&&(n.push(o.parentElement),a=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=zn(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=zn(e.nextSibling,t);s&&n.push(s)}return n}function xc(e,t,n,r,o){let a=e.previousElementSibling;if(a&&!tt(a,o.rule)&&t.length>0){let s=rt([...t],r,o);s&&ht(s,n),t.length=0}Be(e,o.rule,!1)?Hl(e,o.rule)||t.push(e):fn(e,o.rule)?t.push(e):qr(e,["code","tt"])?t.push(...Zd(e,r)):t.push(e)}async function Cc(e,t,n,r){let o=[],{rule:a}=n;for(let i=0;i<t.length;i++){let s=t[i],l=r[i];if(!l)throw new Error("targetContainer is null");let u=[],c=!0,g=null,d=function(T){let b=T;if(["DIV","BR"].includes(b.nodeName))return c=!0,NodeFilter.FILTER_REJECT;if(b.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(tp(T))return NodeFilter.FILTER_REJECT;if(re(b,Ft,"1"),tt(b,a)){let m=un(u),h=globalThis.getComputedStyle(b);if(!m)u.push(_c(b,h));else{let x=globalThis.getComputedStyle(m),v=Yo(x),N=Yo(h),U=Lc(N,v),D=!1;if(c&&g&&Lc(N,g).left>=1.2&&(D=!0),!D&&c){let k=(b.innerText||b.textContent||"").trim();(k.startsWith("\u2022")||k.charCodeAt(0)===61623||/^\d+\./.test(k))&&(D=!0)}!D&&c&&un(u)&&jr(u).reduce((q,X)=>{let ue=Yo(globalThis.getComputedStyle(X));return Math.max(q,ue.right)},0)-v.right>a.pdfNewParagraphIndentRightIndentPx&&(D=!0),c&&(g=N,c=!1),D||(D=ep(U,a)),D&&Ec(u,o,n,l),u.push(_c(b,h)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,d),p=f.nextNode();for(;p;)p=f.nextNode();Ec(u,o,n,l)}return o}function Ec(e,t,n,r){if(e.length>0){let o=rt([...e],!1,n);o&&(o.isPdf=!0,o.targetContainer=r,o.inline=!1,ht(o,t)),e.length=0}}function Yo(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function ep(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<0}function Lc(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function _c(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function tp(e){if(!Q(e,Ft))return!1;if(Q(e,Ht))return!0;let t=_t(e,$t);if(!t)return!1;let n=parseInt(t),o=wc().has(n);if(!o){let a=document.getElementById(`${Je}-${n}`);a&&a.remove()}return o}function kc(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function np(e,t,n=[],r,o){let a=["notranslate"];return r&&a.push(vl),e&&(a.push(`${de}-target-translation-theme-${e}`),t?a.push(`${To}-theme-${e}`):a.push(`${yo}-theme-${e}`)),n.length>0&&a.push(...n),t?a.push(To):(a.push(yo),o&&a.push(wl)),a}function rp(e){let t=["notranslate",xl];return e&&t.push(`${de}-target-translation-theme-${e}-inner`),t}function Pc(e,t,n){let{rule:r,translationTheme:o}=n,{variables:a}=e;a=a||[];let{text:i}=t,{wrapperPrefix:s,wrapperSuffix:l}=r,u=qn(n),c="afterend",g=new RegExp(`${u[0]}(\\d+)${u[1]}`,"g"),d=0,f=kc(i);a.length>0&&(f=f.replace(g,b=>{let m=f.indexOf(b),h=f[m-1]===" ",x=f[m+b.length]===" ",v=a[Number(d)];if(d++,v.type==="element"){let N=v.value.outerHTML;return h||(N=" "+N),x||(N=N+" "),N}else z.error("variable type not supported",v);return b}));let p=np(o,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf),T=rp(o);return f=`<span class="${p.join(" ")}"><span class="${T.join(" ")}">${f}</span></span>`,e.inline||(s==="smart"?f=`<br>${f}`:f=`${s}${f}`,l==="smart"?f=`${f}`:f=`${f}${l}`),e.inline&&(f=`<span class="notranslate">&nbsp;</span>${f}`),{html:f,position:c}}function Ac(e,t){let n=[];for(let r of e){if(Q(r,Ke))continue;if(re(r,go,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let a=s=>s.nodeType===Node.ELEMENT_NODE&&Be(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&Qo(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,a);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let a=r.querySelectorAll("pre");for(let i of a)Mc(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(jl(r,sn)||(ap(r)?(re(r,sn,"1"),t.isTransformPreTagNewLine&&Mc(r)):re(r,sn,"0"))),Xo(0,r,t,n)}return{hiddenElements:n}}function Xo(e,t,n,r=[]){if(Q(t,Ke))return;let o=!1;if(e===0){let a=fn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&tt(t,n)&&!a&&(o=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let a of t.childNodes)if(a.nodeType===Node.ELEMENT_NODE){if(Be(a,n,!1))continue;{let i=globalThis.getComputedStyle(a),s=!1;if(i.display==="none"&&(r.push(a),s=!0),!s){let l=i.clip,u=i.zIndex,c=i.height,g=i.width,d=0;if(u.startsWith("-")){let f=parseInt(u);isNaN(f)||(d=f)}if((l==="rect(1px, 1px, 1px, 1px)"||d<0)&&(s=!0),!s&&a.nodeName!=="BR"){let f=parseInt(c),p=parseInt(g);!isNaN(f)&&!isNaN(p)&&(f>0&&f<8||p>0&&p<=8)&&(s=!0)}}if(s){re(a,Ge,"1");continue}else{if(a.nodeName==="DIV"||zl(a,n)){if((i.display==="inline"||i.display==="inline-flex")&&!Q(a,Bt)){re(a,mt,"1");continue}}else if((a.nodeName==="SPAN"||a.nodeName==="A")&&!i.display.startsWith("inline")){Q(a,mt)||(re(a,Bt,"1"),Xo(e+1,a,n,r));continue}if(tt(a,n)&&!o)continue;Xo(e+1,a,n,r)}}}else if(a.nodeType===Node.TEXT_NODE){let i=a.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");a.after(s),s.appendChild(a)}}}}function ap(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Mc(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function Qo(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let l=n.lastIndexOf(s,t);return l>i?l:i},-1);if(a===-1)n.length>t+20&&Qo(e,t+20);else{let i=n.slice(a+1);a++,i.startsWith(" ")&&a++;let s=e.splitText(a),l=document.createElement("br");s.parentNode?.insertBefore(l,s),a+1<n.length&&Qo(s,t)}}function Rc(e,t){let n=[];for(let r of e){let o=0,a=1e5,i=document.createElement("div"),s=c=>{let g=c;if(["DIV","BR"].includes(g.nodeName))return NodeFilter.FILTER_REJECT;if(g.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(g.nodeName==="SPAN"){let d=g.getBoundingClientRect(),f=globalThis.getComputedStyle(g),p=d.right,T=d.left,b=f.top.slice(0,-2),m=f.fontSize.slice(0,-2);return p>o&&(o=p),T<a&&(a=T),re(g,Hn,`${T}`),re(g,Nr,`${p}`),re(g,bl,b),re(g,yl,m),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;l.nextNode(););let u=o-a;u<600&&(u=600),n.push(i),i.style.left=o+"px",i.style.width=u+"px",i.classList.add(Or),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var ra="Original",na=[],ns=new Set,Zo=[],aa=[],Dc=[],oa=[],Nc=globalThis.location.href.split("#")[0],rs=0,we,op=cr(pp,300),sp=cr(Fc,200),ip=jn(),lp=ip.PROD==="1",Zn,er,tr="";async function Oc(){ft()==="Original"?await Pt():(ft()==="Translated"||ft()==="Error")&&yn()}function Ic(){let e=document.querySelectorAll(`[${Ht}="1"]`);for(let t of e)t.style.display="none"}function yn(){Jo(),ts(),Fe("Translating"),tr&&(document.title=tr),document.querySelectorAll("."+Je).forEach(r=>{r.remove()}),document.querySelectorAll("."+Or).forEach(r=>{r.remove()}),document.querySelectorAll("["+mo+"]").forEach(r=>{if(lp)delete r[Ee];else{let a=Object.keys(r.dataset).filter(i=>i.startsWith(ce));for(let i of a)delete r.dataset[i]}r.removeAttribute(mo)}),Fe("Original")}function cp(e,t){let n=!1,r=ko(e.elements),o=un(e.elements);ns.add(e.id);let a=[];if(r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});aa.push(s),a.push(s),s.observe(r)}if(o&&o!==r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});aa.push(s),a.push(s),s.observe(o)}let i=zt(e.id);i&&(i.observers=a,Qn(e.id,i))}function up(e,t){if(e){let n=new ResizeObserver((r,o)=>{for(let a of r)a.contentRect.width>10&&(o.disconnect(),t(a.target))});n.observe(e),Dc.push(n)}}async function Fc(e){let t=[...oa];oa=[];try{let n=[];for(let r of t){let o=Ko(r,e);if(o.length===0)continue;let a=o;n.push(...a)}await os(n,e)}catch(n){z.error(`translateNewDynamicNodes error: ${n.message}`)}}function es(e,t){ns.delete(e.id);let n=zt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(a=>{a.disconnect()}),n.observers=[],n.state="Translating",Qn(e.id,n));let r=e.id;rs+=e.text.length;let o=jr(e.elements);if(e.isPdf){let a=ko(e.elements),i=window.getComputedStyle(a),s=i.top,l=i.fontSize,u=parseFloat(l.slice(0,-2));isNaN(u)||u>28&&(l="28px");let c=e.targetContainer,g=document.createElement("span");o.length===1&&(g.style.fontSize=l),g.id=`${Je}-${r}`,g.style.top=s;let d=_t(a,Hn),f=o.reduce((b,m)=>{let h=_t(m,Hn);return h&&h<b?h:b},1e3),T=o.reduce((b,m)=>{let h=_t(m,Nr);return h&&h>b?h:b},0)-f;T<30,T>600&&(T=600),d<200&&(d=10),d&&d<0&&(d=0),g.style.left=`${d||10}px`,f<400?g.style.width=T+"px":g.style.width=`calc(100% - ${f}px)`,g.classList.add("notranslate",`${Je}`),c.appendChild(g)}else{let a=un(e.elements),i="afterend";e.elements.length>0&&a&&(o.length===1?i="beforeend":tt(e.elements[0],t.rule)||(i="beforeend"));let s=document.createElement("span");if(s.classList.add("notranslate",Je),s.id=`${Je}-${r}`,s.innerHTML=gp(),i==="beforeend"){let l=ql(a);l?l.appendChild(s):a.appendChild(s)}else if(i==="afterend")a.insertAdjacentElement(i,s);else throw new Error("not support position")}na.push(r),op(t)}function fp(e,t){t.state.translationStartMode==="dynamic"&&rs>t.config.immediateTranslationTextCount?cp(e,n=>{es(n,t)}):es(e,t)}async function Pt(){if(ra==="Translating")return;Fe("Translating");let e=await qt(globalThis.location.href);e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),z.debug("ctx",e),e.state.isNeedClean?yn():we.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),yc(()=>{rs=0,vc(),aa.forEach(r=>{r.disconnect()}),Dc.forEach(r=>{r.disconnect()}),aa=[],ns.clear()}),Fe("Translating");try{Vo([document.body],e.rule);let r=Ko(document.body,e);z.debug("detect containers",r),Fe("Translating");let{rule:o}=e;r.length>0&&await os(r,e),Uc(e).catch(a=>{z.error("translateTitle error:",a.name,a.message,a.details||"")}),mp(o,e),r.length===0&&Fe("Translated")}catch(r){Fe("Error"),z.error(r)}}async function qt(e){let t=await jc();if(!we)we=await Kn({url:e,config:t});else{let n={url:e,config:t,state:we.state};we=await Kn(n)}return we}async function Hc(){ft()==="Original"?await sa():(ft()==="Translated"||ft()==="Error")&&(we=await qt(globalThis.location.href),we.state.translationArea!=="main"?await sa():yn())}async function sa(){we=await qt(globalThis.location.href),we.state.translationArea="main",await Pt()}async function as(){we=await qt(globalThis.location.href),we.state.translationArea="body",await Pt()}async function $c(){ft()==="Original"?await as():(ft()==="Translated"||ft()==="Error")&&(we=await qt(globalThis.location.href),we.state.translationArea!=="body"?(we.state.translationArea="body",await Pt()):yn())}async function Bc(){we=await qt(globalThis.location.href),we.state.translationArea="body",we.state.translationStartMode="immediate",await Pt(),await Fc(we)}async function Uc(e){let t=document.title;if(!t||t.includes(Dr))return;tr!==t&&(tr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=Kr()),n==="auto"){let r=await nt({text:t});if(Xn(r,e.targetLanguage))return}try{let r=await qc({text:t,from:n,to:e.targetLanguage},e);r&&r.text&&(document.title=tr+Dr+r.text)}catch(r){throw r}}function gp(){return`&nbsp;<span class="${de}-loading notranslate"></span>`}async function os(e,t){let{rule:n}=t;Vo(e,n);let r=[];if(t.rule.isPdf)e.length>0&&(Fe("Translating"),r=Rc(e,n).targetContainers);else{Fe("Translating");let a=Ac(e,n),{hiddenElements:i}=a;for(let s of i)up(s,()=>{Wl(s,Ge),os([s],t)});Fe("Translating")}let o=[];if(t.rule.isPdf?o=await Cc(document.body,e,t,r):(e=e.filter(a=>!Be(a,n,!1)),o=await Sc(document.body,e,t)),Fe("Translating"),o.length===0){Fe("Translated");return}z.debug("detect paragraphs",o);for(let a of o)fp(a,t);Fe("Translated")}function dp(e,t,n,r){let o=zt(n.id);if(e||!t){e||(z.error("translate error",t),e=new Error("no response from server"));let a=n.id,i=document.getElementById(`${Je}-${a}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),o&&(o.state="Error",Qn(o.id,o));let l=`<span class="${de}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${de}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${de}-clickable-button notranslate" data-${de}-paragraph-id="${a}" data-${de}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=l)}else{let a=zt(n.id);if(a){a.state="Translated",Qn(a.id,a);let i=Pc(a,t,r),s=t.id,l=document.getElementById(`${Je}-${s}`);l&&(l.innerHTML=i.html,document.querySelectorAll(`[${$t}="${s}"]`).forEach(c=>{re(c,Ht,"1")}))}else z.error("paragraph not found",n.id)}}async function pp(e){if(na.length===0)return Promise.resolve();let t=[...na];na=[];let n="auto";e.state.isDetectParagraphLanguage||(n=Vn());let r={sentences:t.filter(a=>zt(a)).map(a=>{let i=zt(a),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){Fe("Translating");try{await ss(r,e,(a,i,s)=>{dp(a,i,s,e)})}catch(a){Fe("Error"),z.error("translateCurrentQueue error",a.name,a.message,a.details||" ");return}}Fe("Translated")}function Fe(e){ra=e,zc(ra)}function mp(e,t){z.debug("enableMutatinObserver"),ts(),Zo=[],oa=[];let n=e.inlineTags.concat(e.excludeTags).concat("#text","BR");Zn=new MutationObserver(function(o){o.forEach(a=>{let i=globalThis.location.href;if(i.split("#")[0]!==Nc&&e.observeUrlChange){Nc=i.split("#")[0],Jo(),ts(),setTimeout(()=>{z.debug("url changed, reinit page"),bp()},e.urlChangeDelay);let l=new Event(ml);document.dispatchEvent(l);return}a.addedNodes.forEach(l=>{if(l.nodeType===Node.ELEMENT_NODE){let u=l;if(hp(e,u)||!n.includes(u.nodeName)){if(u.classList.contains("notranslate"))return;Fl(u,Zo)||(oa.push(u),Zo.push(u),sp(t))}}})})}),Zn.observe(document.body,{childList:!0,subtree:!0});let r=document.querySelector("title");r&&(er=new MutationObserver(function(o){o.length>0&&(o[0].target.text.includes(Dr)||Uc(t).catch(i=>{z.error("translateTitle error:",i.name,i.message,i.details||"")}))}),er.observe(r,{subtree:!0,characterData:!0,childList:!0}))}function hp(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function bp(){let e=await qt(globalThis.location.href);e.rule.urlChangeDelay&&await _n(e.rule.urlChangeDelay);let t=e.sourceLanguage;t==="auto"?(He()?t=await nt({text:Wr(document.body).slice(0,1e3)}):t=await Wc(),t==="auto"&&(t=await bc()),Jl(t)):gn(t);let n=e.state.isAutoTranslate||e.isTranslateUrl||e.rule.isPdf;!n&&!e.isTranslateExcludeUrl&&(z.debug(`detect page language: ${t}`),hc(t,e.config.translationLanguagePattern)&&(n=!0,z.debug(`match language pattern ${t}, auto translate`))),n?(we.state.isAutoTranslate=!0,await Pt()):z.debug("do not auto translate")}function ts(){Zn&&(Zn.disconnect(),Zn.takeRecords()),er&&(er.disconnect(),er.takeRecords())}function ft(){return ra}var yp=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await as():n==="translateTheMainPage"?await sa():n==="translateToThePageEndImmediately"?await Bc():n==="toggleTranslatePage"?await Oc():n==="toggleTranslateTheWholePage"?await $c():n==="toggleTranslateTheMainPage"?await Hc():n==="translatePage"?await Pt():n==="restorePage"?yn():n==="showTranslationOnly"?Ic():n==="setCurrentPageLanguageByClient"&&gn(r)};var ia;function is(){return ia||(ia=new Wt("content_script",!1).getConnection("main",yp),ia)}async function Vt(e){return await is().sendMessage("background:main",e)}function te(e){return He()||Ol()?(e.fetchPolyfill=globalThis.GM_fetch,lc(e)):Vt({method:"fetch",data:e})}function jc(){return He()?jt():Vt({method:"getConfig"})}function nt(e){if(e.text){let t=mc(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(He()){let t=J.extra.detectLanguage(e.text);return Promise.resolve(t)}return Vt({method:"detectLanguage",data:e})}function Wc(){return Vt({method:"detectTabLanguage"})}function zc(e){if(He()){let n=new CustomEvent(pl,{detail:e});document.dispatchEvent(n);return}is().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function Vc(e){return He()?pc(e):Vt({method:"queryParagraphCache",data:e})}async function Kc(e){if(He()){await dc(e);return}return Vt({method:"setParagraphCache",data:e})}async function ls(){if(He())return Promise.resolve();await Vt({method:"mockRequest"})}var Z=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,o=[],a=[],i=0,s=new Set,l=null,u=r[0].from,c=!1;r.some(d=>d.from!==u)&&(c=!0);try{a=ic(r,this.maxTextLength,this.maxTextGroupLength)}catch(d){if(n){s.has(i)&&i++;for(let f=i;f<r.length;f++){let p=r[f];n(d,null,p)}l=d}else l=d}let g=Tr({limit:this.throttleLimit,interval:1e3});z.debug("tempSentenceGroups",a.map(d=>d));for(let d=0;d<a.length;d++){let f=a[d],p=f.url,T=g(async()=>{let h=f.from;if(c&&(h="auto"),f.fromByClient!=="auto"&&(h=f.fromByClient),this.isSupportList)return await this.translateList({text:f.tempSentences.map(v=>v.text),from:h,to:f.to,url:p});{let x=f.tempSentences.map(D=>D.text).join(bo),v=await this.translate({text:x,from:h,to:f.to,url:p}),{text:N}=v;return{text:N.split(bo),from:v.from,to:v.to}}}),b;try{b=await T()}catch(h){if(n){s.has(i)&&i++;for(let x=i;x<r.length;x++){let v=r[x];n(h,null,v)}l=h;continue}else{l=h;continue}}let{text:m}=b;for(let h=0;h<m.length;h++)try{let x=m[h],v=f.tempSentences[h],{index:N,prefix:U,suffix:D}=v;o[N]===void 0?o[N]={...r[N],from:f.from,to:f.to,text:U+x+D}:o[N].text+=U+x+D,N!==i&&n&&(s.add(i),n(null,o[i],r[i])),i=N}catch(x){if(n){s.has(i)&&i++;for(let v=i;v<r.length;v++){let N=r[v];n(x,null,N)}throw x}else throw x}}if(n&&!s.has(i)&&o[i]&&r[i]&&n(null,o[i],r[i]),l)throw l;return{sentences:o}}detectLanguageLocally(t){return nt({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Gc=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],at=class extends Z{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),o=`${n.getUTCMonth()+1}`.padStart(2,"0"),a=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${o}-${a}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:at.langMap.get(o),SourceText:r,Target:at.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:at.langMapReverse.get(s.Response.Source)||o,to:at.langMapReverse.get(s.Response.Target)||a}}async translateList(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:at.langMap.get(o),SourceTextList:r,Target:at.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:at.langMapReverse.get(s.Response.Source)||o,to:at.langMapReverse.get(s.Response.Target)||a}}async signedRequest({secretId:n,secretKey:r,action:o,payload:a,service:i,version:s}){let l=`${i}.tencentcloudapi.com`,u=new Date,c=`${new Date().valueOf()}`.slice(0,10),g=["POST","/","","content-type:application/json; charset=utf-8",`host:${l}`,"","content-type;host",await et(a)].join(`
`),d=at.getUTCDate(u),f=["TC3-HMAC-SHA256",c,`${d}/${i}/tc3_request`,await et(g)].join(`
`),p=await Dl(d,`TC3${r}`),T=await Ur(i,p),b=await Ur("tc3_request",T),m=await Ur(f,b),h=await te({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:l,"X-TC-Action":o,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${m}`},body:a});if(h instanceof Error)throw h;if(h.Response&&h.Response.Error&&h.Response.Error.Message)throw new Error(h.Response.Error.Message);return h}},Kt=at;Kt.langMap=new Map(Gc),Kt.langMapReverse=new Map(Gc.map(([n,r])=>[r,n]));var Jc=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],nr=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:o,to:a}=n;if(!r)return{...n};let i=nr.langMap.get(o)||"auto",s=nr.langMap.get(a)||"zh-CN",l=await this.fetchWithoutToken(r,i,s);if(!l)throw new Error("google translate NETWORK_ERROR");if(!l.data[0]||l.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:l.data[0].map(c=>c[0]).filter(Boolean).join(""),from:nr.langMapReverse.get(l.data[2])||"auto",to:a}}async fetchWithoutToken(n,r,o){let a=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:o,q:n}),i="https://translate.googleapis.com/translate_a/single?"+a.toString();return{data:await te({url:i})}}},Gt=nr;Gt.langMap=new Map(Jc),Gt.langMapReverse=new Map(Jc.map(([n,r])=>[r,n]));function Yc(e){return e.result.texts}function Tp(e,t){return t?e+(t-e%t):e}function xp(e,t){return e.split(t).length-1}function Xc(e){let t=Date.now(),n=1;for(let r of e)n+=xp(r,"i");return Tp(t,n)}function wp(e,t){return Math.floor(Math.random()*(t-e+1))+e}function cs(){return wp(1e6,1e8)}var us="https://www2.deepl.com/jsonrpc",la="auto",Qc=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],Zc=["formal","informal"];function tu(e,t=la,n=cs()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function vp(e,t=1){let n=[],r=0;for(let o=0;o<e.length;o++){let a=e[o].chunks;for(let i=0;i<a.length;i++){let s=a[i];n.push({kind:"default",_index:o,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:a.slice(0,r).map(l=>l.sentences[0].text),raw_en_context_after:r+1<a.length?[a[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function eu(e){return e.reduce((t,n)=>{let r=n.chunks;for(let o of r)t.push(o.sentences[0].text);return t},[])}function Sp(e){if(!e)return{};if(!Zc.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function nu(e,t,n,r=cs(),o=1,a){let i=eu(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:vp(n,o),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:Sp(a),timestamp:Xc(eu(n))},id:r}}function Ep(e=Qc){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function fs(e){return Ep()[e.toLowerCase()]}var ru={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function au(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function Lp(e,t,n){let r=tu(e,t,n);return await te({method:"POST",url:us+"?method=LMT_split_text",headers:ru,body:au(r)})}async function _p(e,t,n,r,o,a){let i=await Lp(e,n,r),s=nu(n==="auto"?i.result.lang.detected:n,t,Yc(i),r,o,a),l=s.params.jobs.map(g=>g._index);s.params.jobs=s.params.jobs.map(g=>{let d={...g};return delete d._index,d});let u=await te({method:"POST",url:us+"?method=LMT_handle_jobs",body:au(s),headers:ru}),c={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((g,d)=>{let f=l[d];c.text[f]===void 0&&(c.text[f]="");let p=s.params.jobs[d].sentences[0].prefix,T=s.params.jobs[d].sentences[0].prefix;c.text[f]=c.text[f]+p+g.beams[0].sentences[0].text}),c}async function ou(e,t,n=la,r,o,a){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:_p(e,fs(t),fs(n)??"auto",r,o,a):{text:[],from:n,to:t}}var su=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Tn=class extends Z{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:o,from:a}=n,i=await ou(r,Tn.langMap.get(o),Tn.langMap.get(a));return{text:i.text,from:Tn.langMapReverse.get(i.from),to:Tn.langMapReverse.get(i.to)}}},Jt=Tn;Jt.langMap=new Map(su),Jt.langMapReverse=new Map(su.map(([n,r])=>[r,n]));var iu=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Bv=new Map(iu),Uv=new Map(iu.map(([e,t])=>[t,e]));var lu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],gs="https://transmart.qq.com/api/imt",Yt=class extends Z{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:o}=n,a=await this.detectLanguage(r),i=Yt.langMap.get(a)||a,s=Yt.langMap.get(o)||o;if(a===o)return{text:r,from:a,to:o};let l=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await te({url:gs,body:l,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:a||"auto",to:o}}async translateList(n){let{from:r,text:o,to:a}=n;if(o.length===1){let g=await this.translate({from:r,text:o[0],to:a,url:n.url});return{text:[g.text],from:g.from,to:g.to}}let i=await this.detectLanguage(o.join(`
`));if(i===a)return{text:o,from:i,to:a};let s=Yt.langMap.get(i)||i,l=Yt.langMap.get(a)||a,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:o,lang:s,orig_url:n.url},target:{lang:l},type:"plain"}),c=await te({url:gs,body:u,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:i||"auto",to:a}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},o=await te({url:gs,method:"POST",body:JSON.stringify(r)});if(o.header.ret_code!=="succ")throw new Error(o.message||o.header.ret_code);let a=o.language,i=Yt.langMapReverse.get(a);return i||a}},Xt=Yt;Xt.langMap=new Map(lu),Xt.langMapReverse=new Map(lu.map(([n,r])=>[r,n]));function cu(){return Math.random()>=0}var xn=class extends Z{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await ls(),await _n(5e3);let o=r.match(/^\s*/)[0].length;return{text:r.slice(0,o)+"\u6A21\u62DF\uFF1A"+r.slice(o,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:o,to:a}=n;if(await ls(),!cu())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:o,to:a,text:[""]}:{from:o,to:a,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var gu=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],uu=new Map(gu),fu=new Map(gu.map(([e,t])=>[t,e])),rr=class extends Z{constructor(n,r){super(n,r);this.apikey="";this.codename=rr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...rr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:rr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:o,to:a}=n,i=await te({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:uu.get(o)||"auto",target_lang:uu.get(a)})});if(i.status){let s=i;return{text:s.result,from:fu.get(s.source_lang),to:fu.get(s.target_lang)}}else throw new Error(i.msg)}},ca=rr;ca.DEFAULT_CODENAME="deepl";var ua=ca;var pu=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],du=new Map(pu),Cp=new Map(pu.map(([e,t])=>[t,e])),ds=class extends Z{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:o,text:a}=n,i={source_lang:du.get(r),target_lang:du.get(o)},s=new URLSearchParams(i);a.forEach(f=>{s.append("text",f)});let l=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let c=await te({url:u,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:g}=c;return{text:g.map(f=>f.text),from:g[0]&&Cp.get(g[0].detected_source_language)||r,to:o}}},mu=ds;var kp=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Te={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},ps=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},ms=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=ps(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(ps).sort().join(`&${r}=`)}`:`${r}=${ps(n)}`}).filter(t=>t).join("&"),ar=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let o=t[r];return typeof o<"u"&&o!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],o=this.credentialString(n);return r.push(`${Te.algorithm} Credential=${t.accessKeyId}/${o}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),o={...this.request.params},a=this.request.params,i=this.request.headers;t.sessionToken&&(o[Te.tokenHeader]=t.sessionToken),o[Te.dateHeader]=r,o[Te.notSignBody]="",o[Te.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,o[Te.algorithmKey]=Te.algorithm,o[Te.signHeadersKey]="",o[Te.signQueriesKey]=void 0,o[Te.signatureKey]=void 0,o=this.sortParams(o),this.request.params=o,this.request.headers={};let s=await this.signature(t,r);return this.request.params=a,this.request.headers=i,o[Te.signQueriesKey]=Object.keys(o).sort().join(";"),o[Te.signatureKey]=s,ms(o)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Te.dateHeader]=n,t.sessionToken&&(this.request.headers[Te.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Te.contentSha256Header]=await et(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return Br(await Lt(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Te.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=ms(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,o)=>r[0].toLowerCase()<o[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let o=r[0].toLowerCase();if(this.isSignableHeader(o)){let a=r[1];if(typeof a>"u"||a===null||typeof a.toString!="function")throw new Error(`Header ${o} contains invalid value`);n.push(`${o}:${this.canonicalHeaderValues(a.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await et(t)}async hexEncodedBodyHash(){return this.request.headers[Te.contentSha256Header]?this.request.headers[Te.contentSha256Header]:this.request.body?await this.hexEncodedHash(ms(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return kp.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,o){let a=await Lt(n,`${Te.kDatePrefix}${t.secretKey}`),i=await Lt(r,a),s=await Lt(o,i);return Lt(Te.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,Te.v4Identifier].join("/")}};var bu=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],hu=new Map(bu),Pp=new Map(bu.map(([e,t])=>[t,e])),hs=class extends Z{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n,i=hu.get(o),s={TargetLanguage:hu.get(a)||a,TextList:r};i&&(s.SourceLanguage=i);let l={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new ar(l,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(l.params),g=await te({url:"https://open.volcengineapi.com"+l.pathname+"?"+c.toString(),headers:u.request.headers,method:l.method,body:l.body});if(g.TranslationList){let d=g.TranslationList.map(p=>p.Translation),f=o;return g.TranslationList.length>0&&g.TranslationList[0].DetectedSourceLanguage&&(f=Pp.get(g.TranslationList[0].DetectedSourceLanguage)||o),{text:d,from:f,to:a}}else{let d=g.ResponseMetaData.Error;throw new Re(d.Code,d.Message)}}},yu=hs;var Tu=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Mp=new Map(Tu),Ap=new Map(Tu.map(([e,t])=>[t,e])),or=class extends Z{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:o,to:a}=n,s={source_language:Mp.get(o)||"detect",target_language:"zh",text:r},l=await te({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(l.base_resp&&l.base_resp.status_code===0){let u=l.translation,c=o;return l.detected_language&&(c=Ap.get(l.detected_language)||o),{text:u,from:c,to:a}}else{let u=l.base_resp;throw new Re(u.status_code.toString(),u.status_message)}}};var Rp=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],xu=new Map(Rp),sr=class extends Z{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:o,to:a}=n,s=await te({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:xu.get(o)||o,target_lang:xu.get(a)||a,text:r})});if(s.code===200)return{text:s.data,from:o,to:a};throw new Error(s.message||s.message||"API Error")}};var bs="https://{s}bing.com",Lu=bs+"/translator",Np=bs+"/ttranslatev3",Dp=bs+"/tspellcheckv3",fa="bingGlobalConfig",_u=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],wu=new Map(_u),vu=new Map(_u.map(([e,t])=>[t,e])),Su=1e3,ot,wn;function ys(e,t){return e.replace("{s}",t?t+".":"")}async function Op(){if(!ot){let n=await J.storage.local.get(fa);return n&&(ot=n[fa]),!0}let{tokenTs:e,tokenExpiryInterval:t}=ot;return Date.now()-e>t}async function Eu(){let e,t,n,r,o,a,i,s,l,u;try{let c=ys(Lu,e),g=await te({url:c,responseType:"raw"}),{body:d,headers:f,url:p}=g;e=p.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=f["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[o,r,a,i,s,l]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw console.error("failed to fetch global config",c),c}return ot={subdomain:e,IG:t,IID:n,key:o,token:r,tokenTs:o,tokenExpiryInterval:a,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:l,cookie:u,count:0},await J.storage.local.set({[fa]:ot}),ot}function Ip(e){let{IG:t,IID:n,subdomain:r,isVertical:o}=ot;return ys(e?Dp:Np,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+ot.count++:"")}function Fp(e,t,n,r){let{token:o,key:a}=ot,i={fromLang:n,text:t,token:o,key:a};return!e&&r&&(i.to=r),i}async function Cu(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Su)throw new Error(`The supported maximum length of text is ${Su}. Please shorten the text.`);wn||(wn=Eu()),await wn,await Op()&&(wn=Eu(),await wn),t=t||"auto",n=n||"zh-CN",t=wu.get(t)||t,n=wu.get(n)||n;let o=Ip(!1),a=Fp(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:ys(Lu,ot.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(a),l=o,u=s.toString(),c=await te({url:l,headers:i,method:"POST",body:u});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(ot=null,wn=null,await J.storage.local.remove(fa),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let g=c[0].translations[0],d=c[0].detectedLanguage;return{text:g.text,from:vu.get(d.language),to:vu.get(g.to)}}var ir=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:o,to:a}=n;return r?await Cu(r,o,a):{...n}}};var Pu=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],ku=new Map(Pu),Hp=new Map(Pu.map(([e,t])=>[t,e])),Ts=class extends Z{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:o}=this,{appid:a,key:i}=this,{text:s,from:l,to:u}=n,c=new URLSearchParams({from:ku.get(l),to:ku.get(u),q:s,salt:r,appid:a,sign:mn(a+s+r+i)}),g=new URL(o);g.search=c.toString();let d=await te({url:g.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new Re("API_SERVER_ERROR",d.error_msg);let{trans_result:f,from:p}=d,T=f.map(({dst:m})=>m);return{from:Hp.get(p),to:u,text:T.join(`
`)}}},Mu=Ts;var $p=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Au=new Map($p),xs=class extends Z{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n;o==="auto"&&(o=await nt({text:r.join(" ")}));let i=r;return{text:(await te({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Au.get(o)}2${Au.get(a)}`})})).target,from:o,to:a}}},Ru=xs;var Du=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Nu=new Map(Du),Bp=new Map(Du.map(([e,t])=>[t,e]));function Up(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var ws=class extends Z{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),l=this.appId+Up(r)+i+s+this.appSecret,u=await et(l),c={q:r,appKey:this.appId,salt:i.toString(),from:Nu.get(o),to:Nu.get(a),sign:u,signType:"v3",curtime:s.toString()},g=new URLSearchParams(c),f=await te({url:"https://openapi.youdao.com/api",method:"POST",body:g.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p=f.l,[T,b]=p.split("2");return{text:f.translation.join(`
`),from:Bp.get(T),to:a}}},Ou=ws;var vn={mock:{class:xn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:xn,name:"Mock2",homepage:"https://www.google.com"},google:{class:Gt,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:Xt,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:mu,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:yu,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:or,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:ir,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:Kt,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:Mu,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Ru,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:ua,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Ou,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:Jt,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:sr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function vs(e,t){let n=vn[e],r=t.config.translationServices[e]||{},o=!0,a=n.class.getAllProps();if(a.length>0){let i=a.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){o=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:o,config:r,props:n.class.getProps(),allProps:a}}var jp=Object.keys(vn),Iu=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return jp.filter(o=>{let a=vn[o];return o.startsWith("mock")?!!r:!a.alpha||n||o===e.translationService}).map(o=>vs(o,e))};async function qc(e,t){if(!e.text)return e;let n=await ss({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Re("translateFailed","translate failed")}async function ss(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:o}=t,a=r.translationGeneralConfig,i=r.translationServices,s=o,l=i[s]||{};e.sentences=e.sentences.map(b=>b);let u=[],c={sentences:Array(e.sentences.length)},g=e.sentences.length,d=-1;if(r.cache)for(let b of e.sentences){d++;let m=s;s==="openl"&&(m=s+"-"+l.codename||ua.DEFAULT_CODENAME);let h=null;try{h=await lr(Vc({originalText:b.text,from:b.from,to:b.to,service:m}),1e3)}catch(x){z.warn("query cache DB error, but it's ok",x)}if(h){let x={...b,text:h.translatedText};c.sentences[d]=x,n&&n(null,x,b)}else u.push(b)}else u.push(...e.sentences);let f=u.length;if(g-f>0&&z.debug(`use ${g-f} sentences from cache`),!u.length)return c;let p;try{p=new vn[s].class(l,a),await p.init()}catch(b){if(n)for(let m of u)n(b,null,m);throw b}let T=await p.multipleTranslate({sentences:u},(b,m,h)=>{if(n&&(n(b,m,h),!b&&m&&!s.startsWith("mock")&&r.cache)){let x=s;s==="openl"&&(x=s+"-"+l.codename||ua.DEFAULT_CODENAME),r.cache&&lr(Kc({translatedText:m.text,from:h.from,to:h.to,detectedFrom:m.from,key:mn(h.text),service:x}),3e3).catch(v=>{z.warn("set cache DB error",v)})}});for(let b of T.sentences){let m=c.sentences.findIndex(h=>!h);if(m===-1)throw new Re("translateFailed","can not match the result");c.sentences[m]=b}return c}var Fu={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},Hu={...Dt,"zh-CN":{...Fu["zh-CN"],...Dt["zh-CN"]},"zh-TW":{...Fu["zh-TW"],...Dt["zh-TW"]}},$u=Hu;var ga=(e,t,n)=>{let r=oc(Hu,`languages.${e}`,t,"en");return n?xo[e]||e:r!==`languages.${e}`?r:xo[e]};function Ss(e){let t=rc(),{onTranslateTheMainPage:n,onUserConfigChange:r,pageStatus:o,config:a,onTranslateTheWholePage:i,openOptionsPage:s,ontranslateToThePageEndImmediately:l,onSetPageLanguage:u,onToggleTranslate:c,onTranslateLocalPdfFile:g,onTranslatePdf:d,onRestorePage:f,ctx:p,currentUrl:T,currentLang:b,onClose:m,onTranslatePage:h}=e,x=r,[v,N]=ye(""),[U,D]=ye(""),{t:M}=Qr(),k=null,K=null,q=null,X=null,ue=null,se=null,ve=null,Ue=null,ie=null,pe=null,ne=null,gt=null;if(a){let{translationService:S,translationServices:O,translationUrlPattern:_}=a;if(vn[S]&&(Ue=vs(S,p)),O&&O[S]?gt=O[S]||{}:gt={},T&&Gr(T)){ie=new URL(T),pe=tc(ie.hostname),ne=nc(T);let{matches:R,excludeMatches:W}=_;K=R.includes(pe),k=R.includes(ie.hostname),X=W.includes(pe),q=W.includes(ie.hostname),se=R.includes(ne),ve=W.includes(ne)}}if(a&&b&&b!=="auto"){let{translationLanguagePattern:S}=a,{matches:O}=S;O.includes(b)?ue=!0:ue=!1}let bt=S=>{S.preventDefault(),s(),m()},w=S=>{x(O=>(O.alpha?N("Success disable alpha!"):N("Success enable alpha!"),{...O,alpha:!O.alpha}))},P=()=>{x(S=>({...S,translationArea:"body"})),i()},A=()=>{x(S=>({...S,translationArea:"main"})),n()},V=(S,O,_,R)=>{if(S==="default"){x(I=>{let oe={...I.translationUrlPattern};return{...I,translationUrlPattern:{...I.translationUrlPattern,matches:St([ie?.hostname,pe,T],oe.matches),excludeMatches:St([ie?.hostname,pe,T],oe.excludeMatches)}}});return}let W=S,ee=W==="matches"?"excludeMatches":"matches";ie&&x(I=>{let oe={...I.translationUrlPattern};return oe[W]=Lo(O,oe[W]),R.length>0&&(oe[W]=St(R,oe[W])),oe[ee]=St(_,oe[ee]),{...I,translationUrlPattern:{...I.translationUrlPattern,...oe}}}),W==="matches"&&o==="Original"?setTimeout(()=>{h(),m()},100):W==="excludeMatches"&&o==="Translated"&&setTimeout(()=>{f(),m()},100)},j=S=>{if(!S){x(R=>{let W={...R.translationLanguagePattern};return{...R,translationLanguagePattern:{...R.translationLanguagePattern,matches:St(b,W.matches),excludeMatches:St(b,W.excludeMatches)}}});return}let O=S,_=O==="matches"?"excludeMatches":"matches";b&&x(R=>{let W={...R.translationLanguagePattern};return W[O]=Lo(b,W[O]),W[_]=St(b,W[_]),{...R,translationLanguagePattern:{...R.translationLanguagePattern,...W}}}),O==="matches"&&o==="Original"&&setTimeout(()=>{h(),m()},100)},me=ie?.pathname.toLowerCase().endsWith(".pdf"),fe=M("translate");o==="Translated"?fe=M("show-original"):o==="Original"?me?kr()&&ie.protocol==="file:"?fe=M("translate-firefox-local-pdf"):fe=M("translate-pdf"):fe=M("translate"):fe=M(o);let Ce=M("translateToThePageEndImmediately");(o==="Original"||o==="Translated")&&(a.shortcuts.toggleTranslatePage&&(ll()&&p.rule.fingerCountToToggleTranslagePageWhenTouching>=2?fe+=` (${M(`fingers.${p.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:fe+=` (${a.shortcuts.toggleTranslatePage})`),a.shortcuts.toggleTranslateToThePageEndImmediately&&(Ce+=` (${a.shortcuts.toggleTranslateToThePageEndImmediately})`));let ge=[];p&&(ge=Iu(p));let ae=S=>{S.preventDefault(),m()};return F("div",{class:"p-3",children:[F("div",{class:"text-sm",children:[F("div",{class:"flex justify-between mb-2",children:[F("label",{class:"inline-block",children:[M("popupSourceLanguage"),"\uFF1A"]}),F(Ct,{items:vt.map(S=>({label:ga(S,a.interfaceLanguage),value:S,selected:S===b,onSelected:O=>{u(O.value)}}))})]}),a&&a.targetLanguage&&F("div",{class:"flex justify-between mb-2",children:[F("label",{class:"inline-block",children:[M("popupTarget"),"\uFF1A"]}),F(Ct,{items:vt.filter(S=>S!=="auto").map(S=>({label:ga(S,a.interfaceLanguage),value:S,selected:S===a.targetLanguage,onSelected:O=>{x(_=>({..._,targetLanguage:O.value}))}}))})]}),Ue&&ge.length>0&&F(it,{children:[F("div",{class:"flex justify-between mb-2",children:[F("label",{class:"inline-block",children:[M("popupService"),"\uFF1A"]}),F(Ct,{items:ge.map(S=>({label:`${M("translationServices."+S.id)}${S.ok?"":" "+M("needAction")}`,value:S.id,selected:S.selected,onSelected:O=>{let _=ge.find(R=>R.id===O.value);_.ok?(x(R=>({...R,translationService:_.id})),_.props.length===0?setTimeout(()=>{h()},1):setTimeout(()=>{f()},1)):(x(R=>({...R,translationService:_.id})),setTimeout(()=>{f()},1),setTimeout(()=>{s(),m()},100))}}))})]}),gt&&Ue.props.length>0&&Ue.props.map((S,O)=>F("div",{class:"pl-4 text-sm",children:F(jo,{field:S,value:gt[S.name],onChange:_=>{x(R=>{let W=R.translationServices||{},ee=W[Ue.id]||{};return setTimeout(()=>{f()},1),{...R,translationServices:{...W,[Ue.id]:{...ee,[S.name]:_}}}})}},"field-"+O)}))]}),ie&&F("div",{class:"flex justify-between mb-2",children:[F("label",{class:"inline-block",children:M("forThisSite")}),F(Ct,{items:[{label:M("default"),value:"default",selected:k===!1&&q===!1&&!K&&!X&&!se&&!ve,onSelected:()=>{V("default",ie.hostname,[],[])}},{label:M("alwaysTranslateSomeSite",{hostname:ie.hostname}),value:"matches",selected:k,onSelected:S=>{V(S.value,ie.hostname,[ie.hostname,pe,ne],[pe])}},{label:M("neverTranslateSomeSite",{hostname:ie.hostname}),value:"excludeMatches",selected:q,onSelected:S=>{V(S.value,ie.hostname,[ie.hostname,pe,ne],[pe])}},pe&&{label:M("alwaysTranslateSomeSite",{hostname:pe}),value:"matchesWild",selected:K,onSelected:()=>{V("matches",pe,[ne,ie.hostname,pe],[ie.hostname])}},pe&&{label:M("neverTranslateSomeSite",{hostname:pe}),value:"excludeMatchesWild",selected:X,onSelected:()=>{V("excludeMatches",pe,[ie.hostname,ne,pe],[ie.hostname])}},ne&&{label:M("alwaysTranslateSomeSite",{hostname:M("currentUrl")}),value:"matchesUrl",selected:se,onSelected:()=>{V("matches",ne,[ne],[])}},ne&&{label:M("neverTranslateSomeSite",{hostname:M("currentUrl")}),value:"excludeMatchesUrl",selected:ve,onSelected:()=>{V("excludeMatches",ne,[ne],[])}}].filter(Boolean)})]})]}),F("div",{class:"",children:F("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{me?d&&d():c()},"aria-busy":o==="Translating",disabled:o==="Translating",children:fe})}),F("div",{class:"flex justify-between",children:[b&&b!=="auto"?F("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[F("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!ue,onChange:S=>{let O=S.target.checked;j(O?"matches":void 0)}}),M("alwaysTranslateSomeLanguage",{language:ga(b,a.interfaceLanguage)})]}):F("span",{}),F(Fo,{label:M("more"),showArrow:!0,onSelected:S=>{S.value==="translateTheWholePage"?i():S.value==="translateToThePageEndImmediately"?l():S.value==="translateTheMainPage"?n():S.value==="showTranslationOnly"||(S.value==="translateLocalPdfFile"?g&&g():S.value==="donate"?(globalThis.open(a.donateUrl),m()):S.value==="feedback"?(globalThis.open(a.feedbackUrl),m()):S.value==="options"?(s(),m()):S.value==="changeToTranslateTheWholePage"?P():S.value==="changeToTranslateTheMainPage"&&A())},menus:[a.translationArea==="main"&&{label:M("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},a.translationArea==="body"&&{label:M("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:Ce,value:"translateToThePageEndImmediately"},!He()&&{label:M("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2615\uFE0F "+M("sponsorLabel"),value:"donate"},{label:"\u{1F41B} "+M("feedback"),value:"feedback"},{label:"\u2699\uFE0F "+M("browser.openOptionsPage"),value:"options"}].filter(Boolean)})]}),F("div",{class:"text-sm",children:v}),F("div",{class:"text-sm",children:U}),F("footer",{class:"mt-3 text-sm flex justify-between",children:[F("a",{href:"#",class:"secondary",onClick:bt,children:M("options")}),He()&&F("a",{href:"#",class:"secondary",onClick:ae,children:M("close")}),F("span",{class:"immersive-translate-no-select muted",onClick:ec(7)(w),children:["V",t]})]})]})}var Qt={},Bu={};function da(e,t){if(Bu[e])try{t()}catch(n){z.error("run callback failed",n)}else Qt[e]||(Qt[e]=[]),Qt[e].push(t)}function Wp(e){if(Qt[e]&&Qt[e].length){let t=[...Qt[e]];Qt[e]=[],t.forEach(n=>n())}}function Es(){let[e,t]=ye("Original"),[n,r,o,a]=Xl(),[i,s]=ye(null),[l,u]=ye(null),[c,g]=ye(null),[d,f]=ye("auto"),[p,T]=ye(null),b=D=>{let{tabId:M,payload:k}=D.detail,{method:K,data:q}=k;z.debug("popup received message",K,q||" "),K==="setPageStatus"&&M&&t(q)};Qe(()=>{let D=Jn();return J.tabs.query({currentWindow:!0,active:!0}).then(M=>{let k=M[0].id;g(k);let K=M[0].url;J.tabs.onUpdated.addListener((q,X,ue)=>{q===q&&ue.url&&l&&ue.url!==l&&(u(ue.url),window.location.reload())}),globalThis.document.addEventListener(Fn,b),K&&u(K),K&&Gr(K)&&(u(K),D.sendMessage(`content_script:main_sync:${k}`,{method:"ping"}).then(q=>{Bu[k]=!0,Wp(k)}).catch(q=>{z.debug("ping failed, but it is ok. cause maybe content is not injected",q)}),da(k,async()=>{let q=await D.sendMessage(`content_script:main_sync:${k}`,{method:"getPageStatus"});t(q)}),da(k,async()=>{let q=await jt();s(q)}),da(k,async()=>{let q=await D.sendMessage(`content_script:main_sync:${k}`,{method:"getCurrentPageLanguage"});f(q)}))}),()=>{globalThis.document.removeEventListener(Fn,b)}},[]),Qe(()=>{jt().then(D=>{s(D)})},[n]),Qe(()=>{l&&i&&Kn({url:l,config:i}).then(D=>{T(D)})},[l,i]);let m=D=>async()=>{let M=Jn(),K=(await J.tabs.query({currentWindow:!0,active:!0}))[0].id;M.sendMessage(`content_script:main:${K}`,{method:D}),setTimeout(()=>{globalThis.close()},10)},h=()=>{let D=J.runtime.getURL(Pr);J.tabs.create({url:D}),globalThis.close()},x=()=>{l&&c&&(J.tabs.update(c,{url:El(l)}),globalThis.close())},v=D=>{let M=Jn();if(f(D),c&&l){let k=sl(l,D,i.sourceLanguageUrlPattern);r(K=>({...K,sourceLanguageUrlPattern:k})),da(c,()=>{M.sendMessage(`content_script:main:${c}`,{method:"setCurrentPageLanguageByClient",data:D})})}},N=()=>{globalThis.close()},U=()=>{J.runtime.openOptionsPage(),globalThis.close()};return!i||!p?null:F(Ss,{onClose:N,onToggleTranslate:m("toggleTranslatePage"),openOptionsPage:U,onTranslatePdf:x,onTranslateLocalPdfFile:h,onTranslateTheMainPage:m("translateTheMainPage"),onTranslateTheWholePage:m("translateTheWholePage"),ontranslateToThePageEndImmediately:m("translateToThePageEndImmediately"),onTranslatePage:m("translatePage"),onRestorePage:m("restorePage"),onSetPageLanguage:v,onUserConfigChange:r,config:i,pageStatus:e,ctx:p,currentUrl:l,currentLang:d})}var Uu=document.getElementById("mount");Zl();Uu&&(async()=>{let e=await jt();e.debug&&z.setLevel("debug"),xa(F(sc,{lang:e.interfaceLanguage,translations:$u,fallbackLang:"zh-CN",children:F(Es,{})}),Uu)})();
