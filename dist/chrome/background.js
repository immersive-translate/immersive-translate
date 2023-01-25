var Sa=Object.defineProperty;var ka=(e,t)=>{for(var r in t)Sa(e,r,{get:t[r],enumerable:!0})};var v={BUILD_TIME:"2023-01-25T15:49:06.600Z",VERSION:"0.2.23",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};var Ea=Object.create,Zr=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,en=Object.getOwnPropertyNames,La=Object.getPrototypeOf,Pa=Object.prototype.hasOwnProperty,Ra=(e,t)=>function(){return t||(0,e[en(e)[0]])((t={exports:{}}).exports,t),t.exports},Oa=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of en(t))!Pa.call(e,o)&&o!==r&&Zr(e,o,{get:()=>t[o],enumerable:!(n=Ma(t,o))||n.enumerable});return e},Ia=(e,t,r)=>(r=e!=null?Ea(La(e)):{},Oa(t||!e||!e.__esModule?Zr(r,"default",{value:e,enumerable:!0}):r,e)),Da=Ra({"esm-build-dd657b4e6dab36bb0fd61c19cb6f770fbc7804f6-18dd0343/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(r,n){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],n);else if(typeof e<"u")n(t);else{var o={exports:{}};n(o),r.browser=o.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(r){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let n="The message port closed before a response was received.",o=a=>{let c={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(c).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class i extends WeakMap{constructor(T,$=void 0){super($),this.createItem=T}get(T){return this.has(T)||this.set(T,this.createItem(T)),super.get(T)}}let l=x=>x&&typeof x=="object"&&typeof x.then=="function",u=(x,T)=>(...$)=>{a.runtime.lastError?x.reject(new Error(a.runtime.lastError.message)):T.singleCallbackArg||$.length<=1&&T.singleCallbackArg!==!1?x.resolve($[0]):x.resolve($)},s=x=>x==1?"argument":"arguments",g=(x,T)=>function(B,...J){if(J.length<T.minArgs)throw new Error(`Expected at least ${T.minArgs} ${s(T.minArgs)} for ${x}(), got ${J.length}`);if(J.length>T.maxArgs)throw new Error(`Expected at most ${T.maxArgs} ${s(T.maxArgs)} for ${x}(), got ${J.length}`);return new Promise((ee,V)=>{if(T.fallbackToNoCallback)try{B[x](...J,u({resolve:ee,reject:V},T))}catch(R){console.warn(`${x} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,R),B[x](...J),T.fallbackToNoCallback=!1,T.noCallback=!0,ee()}else T.noCallback?(B[x](...J),ee()):B[x](...J,u({resolve:ee,reject:V},T))})},m=(x,T,$)=>new Proxy(T,{apply(B,J,ee){return $.call(J,x,...ee)}}),d=Function.call.bind(Object.prototype.hasOwnProperty),p=(x,T={},$={})=>{let B=Object.create(null),J={has(V,R){return R in x||R in B},get(V,R,X){if(R in B)return B[R];if(!(R in x))return;let H=x[R];if(typeof H=="function")if(typeof T[R]=="function")H=m(x,x[R],T[R]);else if(d($,R)){let De=g(R,$[R]);H=m(x,x[R],De)}else H=H.bind(x);else if(typeof H=="object"&&H!==null&&(d(T,R)||d($,R)))H=p(H,T[R],$[R]);else if(d($,"*"))H=p(H,T[R],$["*"]);else return Object.defineProperty(B,R,{configurable:!0,enumerable:!0,get(){return x[R]},set(De){x[R]=De}}),H;return B[R]=H,H},set(V,R,X,H){return R in B?B[R]=X:x[R]=X,!0},defineProperty(V,R,X){return Reflect.defineProperty(B,R,X)},deleteProperty(V,R){return Reflect.deleteProperty(B,R)}},ee=Object.create(x);return new Proxy(ee,J)},A=x=>({addListener(T,$,...B){T.addListener(x.get($),...B)},hasListener(T,$){return T.hasListener(x.get($))},removeListener(T,$){T.removeListener(x.get($))}}),_=new i(x=>typeof x!="function"?x:function($){let B=p($,{},{getContent:{minArgs:0,maxArgs:0}});x(B)}),f=new i(x=>typeof x!="function"?x:function($,B,J){let ee=!1,V,R=new Promise(Ue=>{V=function(Te){ee=!0,Ue(Te)}}),X;try{X=x($,B,V)}catch(Ue){X=Promise.reject(Ue)}let H=X!==!0&&l(X);if(X!==!0&&!H&&!ee)return!1;let De=Ue=>{Ue.then(Te=>{J(Te)},Te=>{let Ye;Te&&(Te instanceof Error||typeof Te.message=="string")?Ye=Te.message:Ye="An unexpected error occurred",J({__mozWebExtensionPolyfillReject__:!0,message:Ye})}).catch(Te=>{console.error("Failed to send onMessage rejected reply",Te)})};return De(H?X:R),!0}),w=({reject:x,resolve:T},$)=>{a.runtime.lastError?a.runtime.lastError.message===n?T():x(new Error(a.runtime.lastError.message)):$&&$.__mozWebExtensionPolyfillReject__?x(new Error($.message)):T($)},k=(x,T,$,...B)=>{if(B.length<T.minArgs)throw new Error(`Expected at least ${T.minArgs} ${s(T.minArgs)} for ${x}(), got ${B.length}`);if(B.length>T.maxArgs)throw new Error(`Expected at most ${T.maxArgs} ${s(T.maxArgs)} for ${x}(), got ${B.length}`);return new Promise((J,ee)=>{let V=w.bind(null,{resolve:J,reject:ee});B.push(V),$.sendMessage(...B)})},S={devtools:{network:{onRequestFinished:A(_)}},runtime:{onMessage:A(f),onMessageExternal:A(f),sendMessage:k.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:k.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},ne={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return c.privacy={network:{"*":ne},services:{"*":ne},websites:{"*":ne}},p(a,S,c)};r.exports=o(chrome)}else r.exports=globalThis.browser})}}),Na=Ia(Da()),{default:Qr,...$a}=Na,Vt=Qr!==void 0?Qr:$a;globalThis.browser=Vt;var tn={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00"};var rn={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var nn={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var ja=[{code:"zh-CN",messages:tn},{code:"zh-TW",messages:rn},{code:"en",messages:nn}],Ve={};for(let e of ja)Ve[e.code]=e.messages;var qe="Immersive Translate",ve="immersive-translate",_t="pdf/index.html",Q="immersiveTranslate",Xl=`${Q}Container`,Ql=`${Q}SpecifiedContainer`,At="buildinConfig",ct="localConfig",qt="openOptionsPage",Kt="translateLocalPdfFile",Zl=`${Q}PageTranslatedStatus`,ec=`${Q}PageUrlChanged`,tc=`${Q}ReceiveCommand`,rc=`${Q}PopupReceiveMessage`,on="immersive-translate.owenyoung.com",nc=`https://${on}/`,oc=`https://${on}/buildin_config.json`,ac=`${Q}Mark`;var ic=`${Q}Root`,sc=`data-${ve}-effect`,lc=`${Q}TranslatedMark`,cc=`${Q}ParagraphId`,uc=`${Q}AtomicBlockMark`,dc=`${Q}ExcludeMark`,fc=`${Q}StayOriginalMark`,gc=`${Q}PreWhitespaceMark`,pc=`${Q}InlineMark`,mc=`${Q}BlockMark`,hc=`${Q}Left`,bc=`${Q}Right`,yc=`${Q}Width`,xc=`${Q}Height`,vc=`${Q}Top`,wc=`${Q}FontSize`;var Tc=`${Q}GlobalStyleMark`;var _c=`${ve}-target-wrapper`,Ac=`${ve}-pdf-target-container`,Sc=`${ve}-target-inner`,kc=`${ve}-source-wrapper`,Cc=`${ve}-target-translation-block-wrapper`,Ec=`${ve}-target-translation-pdf-block-wrapper`,Mc=`${ve}-target-translation-pre-whitespace`,Lc=`${ve}-target-translation-inline-wrapper`;var ut=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"];var St="zh-CN";function et(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let r=ut.map(o=>o.toLowerCase()),n=r.indexOf(t);if(n===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let o=r.indexOf(t);return o===-1?"auto":ut[o]}else return"auto";else return ut[n]}function Ba(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():v}var F=Ba();function an(){return F.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}var sn={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},immediateTranslationPattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]}]};var Gt="DENO",kt="CHROME",Ct="FIREFOX";function ln(e){let t=kt;try{let r=navigator?.userAgent||"";/firefox/i.test(r)?t=Ct:/deno/i.test(r)&&(t=Gt)}catch{}return e===kt&&t===kt||e===Ct&&t===Ct||e===Gt&&t===Gt}function cn(){return ln(kt)}function un(){return typeof Deno<"u"}function dn(){return ln(Ct)}var fn={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},gn={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:fn,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:fn,query:()=>{},sendMessage:()=>{}}};var O;un()?O=gn:O=globalThis.browser;function Yt(e){return Array.isArray(e)?e:e?[e]:[]}function pn(e,t){let r=[],n=Object.keys(e);for(let c of n){let i=e[c];Array.isArray(i)&&r.push(c)}let o=e;return Object.keys(t).forEach(c=>{let i=t[c];if(i!==void 0)if(!r.includes(c))o[c]=i;else if(c.startsWith("additional")){let l=Yt(i);o[c]=Array.from(new Set([...o[c],...l]))}else o[c]=Yt(i)}),o}function Fa(){if(F.PROD==="1")return{};let e={};if(F.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&F.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:F.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:F.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(F.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&F.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:F.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:F.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(F.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:F.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(F.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:F.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(F.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&F.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:F.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:F.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(F.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&F.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:F.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:F.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(F.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:F.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return F.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=F.IMMERSIVE_TRANSLATE_SERVICE),F.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),F.MOCK==="1"&&(e.translationService="mock"),e}async function mn(){let e=await O.storage.local.get(ct);return e[ct]?e[ct]:{}}async function hn(e){await O.storage.local.set({[ct]:e})}async function Ke(){let e=await O.storage.local.get(At),t={...sn,buildinConfigUpdatedAt:F.BUILD_TIME};if(e[At]){let m=e[At],d=new Date(m.buildinConfigUpdatedAt),p=new Date(t.buildinConfigUpdatedAt);d>p&&(t=m)}let r={};if(!an()){let m=await O.commands.getAll();for(let d of m)d.name&&d.shortcut&&(r[d.name]=d.shortcut)}let n={...t,targetLanguage:St,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:t.generalRule,translationGeneralConfig:{engine:"google"},rules:[]},o=Fa(),c=(await O.storage.sync.get("userConfig")||{}).userConfig||{},i=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},l=Object.assign({},i,o,c);if(!l.interfaceLanguage){let m=await Ua();l.interfaceLanguage=m}let u=Object.assign(n,t),s=Object.keys(u),g=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let m of s){let d=m;if(d==="generalRule")typeof l[d]=="object"&&(u[d]=pn(n[d],l[d]));else if(d==="translationServices"){let p=l[d]||{},A=t[d]||{},_=Object.keys(A),f=Object.keys(p),w=[...new Set([..._,...f])],k={};for(let S of w)k[S]={...A[S],...p[S]};u[d]=k}else if(typeof l[d]!="string"&&typeof l[d]!="boolean"&&typeof l[d]!="number"&&g.includes(d))l[d]&&(u[d]=Object.assign(u[d],l[d])),d==="shortcuts"&&(u[d]={...u[d],...r});else if(d==="rules"){if(Array.isArray(l[d])&&(u[d]=[...l[d],...u[d]]),F.PROD==="0"&&F.DEV_RULES){let p=JSON.parse(F.DEV_RULES);u[d]=[...p,...u[d]]}}else l[d]!==void 0&&(u[d]=l[d])}return u.donateUrl=t.donateUrl,u.minVersion=t.minVersion,u.feedbackUrl=t.feedbackUrl,u}var Ua=async()=>{let r=(await O.i18n.getAcceptLanguages()).map(n=>et(n)).find(n=>Ve[n]);return r||"en"};function dt(){let e,t="pending",r=new Promise((n,o)=>{e={async resolve(a){await a,t="fulfilled",n(a)},reject(a){t="rejected",o(a)}}});return Object.defineProperty(r,"state",{get:()=>t}),Object.assign(r,e)}function Jt(e,t={}){let{signal:r,persistent:n}=t;return r?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((o,a)=>{let c=()=>{clearTimeout(l),a(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{r?.removeEventListener("abort",c),o()},e);if(r?.addEventListener("abort",c,{once:!0}),n===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var bn=class{#e=0;#t=[];#r=[];#n=dt();add(t){++this.#e,this.#o(t[Symbol.asyncIterator]())}async#o(t){try{let{value:r,done:n}=await t.next();n?--this.#e:this.#t.push({iterator:t,value:r})}catch(r){this.#r.push(r)}this.#n.resolve()}async*iterate(){for(;this.#e>0;){await this.#n;for(let t=0;t<this.#t.length;t++){let{iterator:r,value:n}=this.#t[t];yield n,this.#o(r)}if(this.#r.length){for(let t of this.#r)throw t;this.#r.length=0}this.#t.length=0,this.#n=dt()}}[Symbol.asyncIterator](){return this.iterate()}};var _e={};ka(_e,{bgBlack:()=>pi,bgBlue:()=>yi,bgBrightBlack:()=>Ti,bgBrightBlue:()=>ki,bgBrightCyan:()=>Ei,bgBrightGreen:()=>Ai,bgBrightMagenta:()=>Ci,bgBrightRed:()=>_i,bgBrightWhite:()=>Mi,bgBrightYellow:()=>Si,bgCyan:()=>vi,bgGreen:()=>hi,bgMagenta:()=>xi,bgRed:()=>mi,bgRgb24:()=>Oi,bgRgb8:()=>Pi,bgWhite:()=>wi,bgYellow:()=>bi,black:()=>Qa,blue:()=>ri,bold:()=>Va,brightBlack:()=>vn,brightBlue:()=>ui,brightCyan:()=>fi,brightGreen:()=>li,brightMagenta:()=>di,brightRed:()=>si,brightWhite:()=>gi,brightYellow:()=>ci,cyan:()=>oi,dim:()=>qa,getColorEnabled:()=>Ha,gray:()=>ii,green:()=>ei,hidden:()=>Ja,inverse:()=>Ya,italic:()=>Ka,magenta:()=>ni,red:()=>Za,reset:()=>Wa,rgb24:()=>Ri,rgb8:()=>Li,setColorEnabled:()=>za,strikethrough:()=>Xa,stripColor:()=>Di,underline:()=>Ga,white:()=>ai,yellow:()=>ti});var{Deno:yn}=globalThis,xn=typeof yn?.noColor=="boolean"?yn.noColor:!0,Xt=!xn;function za(e){xn||(Xt=e)}function Ha(){return Xt}function M(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function L(e,t){return Xt?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Wa(e){return L(e,M([0],0))}function Va(e){return L(e,M([1],22))}function qa(e){return L(e,M([2],22))}function Ka(e){return L(e,M([3],23))}function Ga(e){return L(e,M([4],24))}function Ya(e){return L(e,M([7],27))}function Ja(e){return L(e,M([8],28))}function Xa(e){return L(e,M([9],29))}function Qa(e){return L(e,M([30],39))}function Za(e){return L(e,M([31],39))}function ei(e){return L(e,M([32],39))}function ti(e){return L(e,M([33],39))}function ri(e){return L(e,M([34],39))}function ni(e){return L(e,M([35],39))}function oi(e){return L(e,M([36],39))}function ai(e){return L(e,M([37],39))}function ii(e){return vn(e)}function vn(e){return L(e,M([90],39))}function si(e){return L(e,M([91],39))}function li(e){return L(e,M([92],39))}function ci(e){return L(e,M([93],39))}function ui(e){return L(e,M([94],39))}function di(e){return L(e,M([95],39))}function fi(e){return L(e,M([96],39))}function gi(e){return L(e,M([97],39))}function pi(e){return L(e,M([40],49))}function mi(e){return L(e,M([41],49))}function hi(e){return L(e,M([42],49))}function bi(e){return L(e,M([43],49))}function yi(e){return L(e,M([44],49))}function xi(e){return L(e,M([45],49))}function vi(e){return L(e,M([46],49))}function wi(e){return L(e,M([47],49))}function Ti(e){return L(e,M([100],49))}function _i(e){return L(e,M([101],49))}function Ai(e){return L(e,M([102],49))}function Si(e){return L(e,M([103],49))}function ki(e){return L(e,M([104],49))}function Ci(e){return L(e,M([105],49))}function Ei(e){return L(e,M([106],49))}function Mi(e){return L(e,M([107],49))}function $e(e,t=255,r=0){return Math.trunc(Math.max(Math.min(e,t),r))}function Li(e,t){return L(e,M([38,5,$e(t)],39))}function Pi(e,t){return L(e,M([48,5,$e(t)],49))}function Ri(e,t){return typeof t=="number"?L(e,M([38,2,t>>16&255,t>>8&255,t&255],39)):L(e,M([38,2,$e(t.r),$e(t.g),$e(t.b)],39))}function Oi(e,t){return typeof t=="number"?L(e,M([48,2,t>>16&255,t>>8&255,t&255],49)):L(e,M([48,2,$e(t.r),$e(t.g),$e(t.b)],49))}var Ii=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Di(e){return e.replace(Ii,"")}var kn,N,Cn,Ni,ft,wn,$i,En={},Mn=[],ji=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function je(e,t){for(var r in t)e[r]=t[r];return e}function Ln(e){var t=e.parentNode;t&&t.removeChild(e)}function Qt(e,t,r,n,o){var a={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Cn};return o==null&&N.vnode!=null&&N.vnode(a),a}function rt(e){return e.children}function Et(e,t){this.props=e,this.context=t}function tt(e,t){if(t==null)return e.__?tt(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?tt(e):null}function Pn(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Pn(e)}}function Tn(e){(!e.__d&&(e.__d=!0)&&ft.push(e)&&!Mt.__r++||wn!==N.debounceRendering)&&((wn=N.debounceRendering)||setTimeout)(Mt)}function Mt(){for(var e;Mt.__r=ft.length;)e=ft.sort(function(t,r){return t.__v.__b-r.__v.__b}),ft=[],e.some(function(t){var r,n,o,a,c,i;t.__d&&(c=(a=(r=t).__v).__e,(i=r.__P)&&(n=[],(o=je({},a)).__v=a.__v+1,Dn(i,a,o,r.__n,i.ownerSVGElement!==void 0,a.__h!=null?[c]:null,n,c??tt(a),a.__h),Fi(n,a),a.__e!=c&&Pn(a)))})}function Rn(e,t,r,n,o,a,c,i,l,u){var s,g,m,d,p,A,_,f=n&&n.__k||Mn,w=f.length;for(r.__k=[],s=0;s<t.length;s++)if((d=r.__k[s]=(d=t[s])==null||typeof d=="boolean"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?Qt(null,d,null,null,d):Array.isArray(d)?Qt(rt,{children:d},null,null,null):d.__b>0?Qt(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=r,d.__b=r.__b+1,(m=f[s])===null||m&&d.key==m.key&&d.type===m.type)f[s]=void 0;else for(g=0;g<w;g++){if((m=f[g])&&d.key==m.key&&d.type===m.type){f[g]=void 0;break}m=null}Dn(e,d,m=m||En,o,a,c,i,l,u),p=d.__e,(g=d.ref)&&m.ref!=g&&(_||(_=[]),m.ref&&_.push(m.ref,null,d),_.push(g,d.__c||p,d)),p!=null?(A==null&&(A=p),typeof d.type=="function"&&d.__k===m.__k?d.__d=l=On(d,l,e):l=In(e,d,m,f,p,l),typeof r.type=="function"&&(r.__d=l)):l&&m.__e==l&&l.parentNode!=e&&(l=tt(m))}for(r.__e=A,s=w;s--;)f[s]!=null&&(typeof r.type=="function"&&f[s].__e!=null&&f[s].__e==r.__d&&(r.__d=tt(n,s+1)),$n(f[s],f[s]));if(_)for(s=0;s<_.length;s++)Nn(_[s],_[++s],_[++s])}function On(e,t,r){for(var n,o=e.__k,a=0;o&&a<o.length;a++)(n=o[a])&&(n.__=e,t=typeof n.type=="function"?On(n,t,r):In(r,n,n,o,n.__e,t));return t}function In(e,t,r,n,o,a){var c,i,l;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(r==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(i=a,l=0;(i=i.nextSibling)&&l<n.length;l+=2)if(i==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function Bi(e,t,r,n,o){var a;for(a in r)a==="children"||a==="key"||a in t||Lt(e,a,null,r[a],n);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||r[a]===t[a]||Lt(e,a,t[a],r[a],n)}function _n(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||ji.test(t)?r:r+"px"}function Lt(e,t,r,n,o){var a;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||_n(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||_n(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=r,r?n||e.addEventListener(t,a?Sn:An,a):e.removeEventListener(t,a?Sn:An,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function An(e){this.l[e.type+!1](N.event?N.event(e):e)}function Sn(e){this.l[e.type+!0](N.event?N.event(e):e)}function Dn(e,t,r,n,o,a,c,i,l){var u,s,g,m,d,p,A,_,f,w,k,S,ne,x=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(l=r.__h,i=t.__e=r.__e,t.__h=null,a=[i]),(u=N.__b)&&u(t);try{e:if(typeof x=="function"){if(_=t.props,f=(u=x.contextType)&&n[u.__c],w=u?f?f.props.value:u.__:n,r.__c?A=(s=t.__c=r.__c).__=s.__E:("prototype"in x&&x.prototype.render?t.__c=s=new x(_,w):(t.__c=s=new Et(_,w),s.constructor=x,s.render=zi),f&&f.sub(s),s.props=_,s.state||(s.state={}),s.context=w,s.__n=n,g=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),x.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=je({},s.__s)),je(s.__s,x.getDerivedStateFromProps(_,s.__s))),m=s.props,d=s.state,g)x.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(x.getDerivedStateFromProps==null&&_!==m&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(_,w),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(_,s.__s,w)===!1||t.__v===r.__v){s.props=_,s.state=s.__s,t.__v!==r.__v&&(s.__d=!1),s.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(T){T&&(T.__=t)}),s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(_,s.__s,w),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(m,d,p)})}if(s.context=w,s.props=_,s.__v=t,s.__P=e,k=N.__r,S=0,"prototype"in x&&x.prototype.render)s.state=s.__s,s.__d=!1,k&&k(t),u=s.render(s.props,s.state,s.context);else do s.__d=!1,k&&k(t),u=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++S<25);s.state=s.__s,s.getChildContext!=null&&(n=je(je({},n),s.getChildContext())),g||s.getSnapshotBeforeUpdate==null||(p=s.getSnapshotBeforeUpdate(m,d)),ne=u!=null&&u.type===rt&&u.key==null?u.props.children:u,Rn(e,Array.isArray(ne)?ne:[ne],t,r,n,o,a,c,i,l),s.base=t.__e,t.__h=null,s.__h.length&&c.push(s),A&&(s.__E=s.__=null),s.__e=!1}else a==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Ui(r.__e,t,r,n,o,a,c,l);(u=N.diffed)&&u(t)}catch(T){t.__v=null,(l||a!=null)&&(t.__e=i,t.__h=!!l,a[a.indexOf(i)]=null),N.__e(T,t,r)}}function Fi(e,t){N.__c&&N.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(n){n.call(r)})}catch(n){N.__e(n,r.__v)}})}function Ui(e,t,r,n,o,a,c,i){var l,u,s,g=r.props,m=t.props,d=t.type,p=0;if(d==="svg"&&(o=!0),a!=null){for(;p<a.length;p++)if((l=a[p])&&"setAttribute"in l==!!d&&(d?l.localName===d:l.nodeType===3)){e=l,a[p]=null;break}}if(e==null){if(d===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,m.is&&m),a=null,i=!1}if(d===null)g===m||i&&e.data===m||(e.data=m);else{if(a=a&&kn.call(e.childNodes),u=(g=r.props||En).dangerouslySetInnerHTML,s=m.dangerouslySetInnerHTML,!i){if(a!=null)for(g={},p=0;p<e.attributes.length;p++)g[e.attributes[p].name]=e.attributes[p].value;(s||u)&&(s&&(u&&s.__html==u.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(Bi(e,m,g,o,i),s)t.__k=[];else if(p=t.props.children,Rn(e,Array.isArray(p)?p:[p],t,r,n,o&&d!=="foreignObject",a,c,a?a[0]:r.__k&&tt(r,0),i),a!=null)for(p=a.length;p--;)a[p]!=null&&Ln(a[p]);i||("value"in m&&(p=m.value)!==void 0&&(p!==e.value||d==="progress"&&!p||d==="option"&&p!==g.value)&&Lt(e,"value",p,g.value,!1),"checked"in m&&(p=m.checked)!==void 0&&p!==e.checked&&Lt(e,"checked",p,g.checked,!1))}return e}function Nn(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(n){N.__e(n,r)}}function $n(e,t,r){var n,o;if(N.unmount&&N.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Nn(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){N.__e(a,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&$n(n[o],t,typeof e.type!="function");r||e.__e==null||Ln(e.__e),e.__=e.__e=e.__d=void 0}function zi(e,t,r){return this.constructor(e,r)}kn=Mn.slice,N={__e:function(e,t,r,n){for(var o,a,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),c=o.__d),c)return o.__E=o}catch(i){e=i}throw e}},Cn=0,Ni=function(e){return e!=null&&e.constructor===void 0},Et.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=je({},this.state),typeof e=="function"&&(e=e(je({},r),this.props)),e&&je(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),Tn(this))},Et.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Tn(this))},Et.prototype.render=rt,ft=[],Mt.__r=0,$i=0;var Hi,Me,Zt,jn;var Vn=[],er=[],Bn=N.__b,Fn=N.__r,Un=N.diffed,zn=N.__c,Hn=N.unmount;function Wi(){for(var e;e=Vn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Pt),e.__H.__h.forEach(tr),e.__H.__h=[]}catch(t){e.__H.__h=[],N.__e(t,e.__v)}}N.__b=function(e){typeof e.type!="function"||e.o||e.type===rt?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Me=null,Bn&&Bn(e)},N.__r=function(e){Fn&&Fn(e),Hi=0;var t=(Me=e.__c).__H;t&&(Zt===Me?(t.__h=[],Me.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=er,r.__N=r.i=void 0})):(t.__h.forEach(Pt),t.__h.forEach(tr),t.__h=[])),Zt=Me},N.diffed=function(e){Un&&Un(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Vn.push(t)!==1&&jn===N.requestAnimationFrame||((jn=N.requestAnimationFrame)||Vi)(Wi)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==er&&(r.__=r.__V),r.i=void 0,r.__V=er})),Zt=Me=null},N.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Pt),r.__h=r.__h.filter(function(n){return!n.__||tr(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],N.__e(n,r.__v)}}),zn&&zn(e,t)},N.unmount=function(e){Hn&&Hn(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Pt(n)}catch(o){t=o}}),r.__H=void 0,t&&N.__e(t,r.__v))};var Wn=typeof requestAnimationFrame=="function";function Vi(e){var t,r=function(){clearTimeout(n),Wn&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);Wn&&(t=requestAnimationFrame(r))}function Pt(e){var t=Me,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),Me=t}function tr(e){var t=Me;e.__c=e.__(),Me=t}var ad=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var rr;function dr(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Xn(e,t=","){return e.map(dr).join(t)}var Qn=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Rt(e){for(var t=9,r=e.length;r--;)t=Math.imul(t^e.charCodeAt(r),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Zn(e,t="@media "){return t+Ie(e).map(r=>(typeof r=="string"&&(r={min:r}),r.raw||Object.keys(r).map(n=>`(${n}-width:${r[n]})`).join(" and "))).join(",")}function Ie(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Gi(){}var ce={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function eo(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function lr(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(eo(e),15)<<18}var Yi=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function fr({n:e,i:t,v:r=[]},n,o,a){for(let i of(e&&(e=dr({n:e,i:t,v:r})),a=[...Ie(a)],r)){let l=n.theme("screens",i);for(let u of Ie(l&&Zn(l)||n.v(i))){var c;a.push(u),o|=l?67108864|lr(u):i=="dark"?1073741824:u[0]=="@"?lr(u):(c=u,1<<~(/:([a-z-]+)/.test(c)&&~Yi.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var gr=new Map;function qn(e){if(e.d){let t=[],r=nr(e.r.reduce((n,o)=>o[0]=="@"?(t.push(o),n):o?nr(n,a=>nr(o,c=>{let i=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(c);if(i){let l=a.indexOf(i[1]);return~l?a.slice(0,l)+i[0]+a.slice(l+i[1].length):or(a,c)}return or(c,a)})):n,"&"),n=>or(n,e.n?"."+Qn(e.n):""));return r&&t.push(r.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((n,o)=>o+"{"+n+"}",e.d)}}function nr(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(r,n,o)=>t(n)+o)}function or(e,t){return e.replace(/&/g,t)}var Ji=new Intl.Collator("en",{numeric:!0});function Xi(e,t){for(var r=0,n=e.length;r<n;){let o=n+r>>1;0>=to(e[o],t)?r=o+1:n=o}return n}function to(e,t){let r=e.p&ce.o;return r==(t.p&ce.o)&&(r==ce.b||r==ce.o)?0:e.p-t.p||e.o-t.o||Ji.compare(e.n,t.n)}function ar(e,t){return Math.round(parseInt(e,16)*t)}function Qi(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:r="1",opacityVariable:n}=t,o=n?`var(${n})`:r;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,c=[17,1,.062272][a-1];return`rgba(${[ar(e.substr(1,a),c),ar(e.substr(1+a,a),c),ar(e.substr(1+2*a,a),c),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function ro(e,t,r,n,o=[]){return function a(c,{n:i,p:l,r:u=[],i:s},g){let m=[],d="",p=0,A=0;for(let w in c||{}){var _,f;let k=c[w];if(w[0]=="@"){if(!k)continue;if(w[1]=="a"){m.push(...no(i,l,mr(""+k),g,l,u,s,!0));continue}if(w[1]=="l"){for(let S of Ie(k))m.push(...a(S,{n:i,p:(_=ce[w[7]],l&~ce.o|_),r:u,i:s},g));continue}if(w[1]=="i"){m.push(...Ie(k).map(S=>({p:-1,o:0,r:[],d:w+" "+S})));continue}if(w[1]=="k"){m.push({p:ce.d,o:0,r:[w],d:a(k,{p:ce.d},g).map(qn).join("")});continue}if(w[1]=="f"){m.push(...Ie(k).map(S=>({p:ce.d,o:0,r:[w],d:a(S,{p:ce.d},g).map(qn).join("")})));continue}}if(typeof k!="object"||Array.isArray(k))w=="label"&&k?i=k+Rt(JSON.stringify([l,s,c])):(k||k===0)&&(w=w.replace(/[A-Z]/g,S=>"-"+S.toLowerCase()),A+=1,p=Math.max(p,(f=w)[0]=="-"?0:eo(f)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(f)?+!!RegExp.$1||-!!RegExp.$2:0)+1),d+=(d?";":"")+Ie(k).map(S=>g.s(w,Zi(""+S,g.theme)+(s?" !important":""))).join(";"));else if(w[0]=="@"||w.includes("&")){let S=l;w[0]=="@"&&(w=w.replace(/\bscreen\(([^)]+)\)/g,(ne,x)=>{let T=g.theme("screens",x);return T?(S|=67108864,Zn(T,"")):ne}),S|=lr(w)),m.push(...a(k,{n:i,p:S,r:[...u,w],i:s},g))}else m.push(...a(k,{p:l,r:[...u,w]},g))}return m.unshift({n:i,p:l,o:Math.max(0,15-A)+1.5*Math.min(p||15,15),r:u,d}),m.sort(to)}(e,fr(t,r,n,o),r)}function Zi(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(r,n,o,a,c)=>{let i=t(o,c);return typeof i=="function"&&/color|fill|stroke/i.test(o)?Qi(i):""+i})}function pr(e,t){let r,n=[];for(let o of e)o.d&&o.n?r?.p==o.p&&""+r.r==""+o.r?(r.c=[r.c,o.c].filter(Boolean).join(" "),r.d=r.d+";"+o.d):n.push(r={...o,n:o.n&&t}):n.push({...o,n:o.n&&t});return n}function cr(e,t,r=ce.u,n,o){let a=[];for(let c of e)for(let i of function(l,u,s,g,m){var d;l={...l,i:l.i||m};let p=function(A,_){let f=gr.get(A.n);return f?f(A,_):_.r(A.n,A.v[0]=="dark")}(l,u);return p?typeof p=="string"?({r:g,p:s}=fr(l,u,s,g),pr(cr(mr(p),u,s,g,l.i),l.n)):Array.isArray(p)?p.map(A=>{var _,f;return{o:0,...A,r:[...Ie(g),...Ie(A.r)],p:(_=s,f=(d=A.p)!=null?d:s,_&~ce.o|f)}}):ro(p,l,u,s,g):[{c:dr(l),p:0,o:0,r:[]}]}(c,t,r,n,o))a.splice(Xi(a,i),0,i);return a}function no(e,t,r,n,o,a,c,i){return pr((i?r.flatMap(l=>cr([l],n,o,a,c)):cr(r,n,o,a,c)).map(l=>l.p&ce.o&&(l.n||t==ce.b)?{...l,p:l.p&~ce.o|t,o:0}:l),e)}function es(e,t,r,n){var o;return o=(a,c)=>{let{n:i,p:l,r:u,i:s}=fr(a,c,t);return r&&no(i,t,r,c,l,u,s,n)},gr.set(e,o),e}function ir(e,t){if(e[e.length-1]!="("){let r=[],n=!1,o=!1,a="";for(let c of e)if(!(c=="("||/[~@]$/.test(c))){if(c[0]=="!"&&(c=c.slice(1),n=!n),c.endsWith(":")){r[c=="dark:"?"unshift":"push"](c.slice(0,-1));continue}c[0]=="-"&&(c=c.slice(1),o=!o),c.endsWith("-")&&(c=c.slice(0,-1)),c&&c!="&"&&(a+=(a&&"-")+c)}a&&(o&&(a="-"+a),t[0].push({n:a,v:r.filter(ts),i:n}))}}function ts(e,t,r){return r.indexOf(e)==t}var Kn=new Map;function mr(e){let t=Kn.get(e);if(!t){let r=[],n=[[]],o=0,a=0,c=null,i=0,l=(u,s=0)=>{o!=i&&(r.push(e.slice(o,i+s)),u&&ir(r,n)),o=i+1};for(;i<e.length;i++){let u=e[i];if(a)e[i-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(c)e[i-1]!="\\"&&c.test(e.slice(i))&&(c=null,o=i+RegExp.lastMatch.length);else if(u=="/"&&e[i-1]!="\\"&&(e[i+1]=="*"||e[i+1]=="/"))c=e[i+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),r.push(u);else if(u==":")e[i+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let s=r.lastIndexOf("(");if(u==")"){let g=r[s-1];if(/[~@]$/.test(g)){let m=n.shift();r.length=s,ir([...r,"#"],n);let{v:d}=n[0].pop();for(let p of m)p.v.splice(+(p.v[0]=="dark")-+(d[0]=="dark"),d.length);ir([...r,es(g.length>1?g.slice(0,-1)+Rt(JSON.stringify([g,m])):g+"("+Xn(m)+")",ce.a,m,/@$/.test(g))],n)}s=r.lastIndexOf("(",s-1)}r.length=s+1}else/[~@]/.test(u)&&e[i+1]=="("&&n.unshift([])}l(!0),Kn.set(e,t=n[0])}return t}function oo(e,t,r){return t.reduce((n,o,a)=>n+r(o)+e[a+1],e[0])}function ao(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?oo(e,t,r=>sr(r).trim()):t.filter(Boolean).reduce((r,n)=>r+sr(n),e?sr(e):"")}function sr(e){let t,r="";if(e&&typeof e=="object")if(Array.isArray(e))(t=ao(e[0],e.slice(1)))&&(r+=" "+t);else for(let n in e)e[n]&&(r+=" "+n);else e!=null&&typeof e!="boolean"&&(r+=" "+e);return r}var yd=io("@"),xd=io("~");function io(e){return new Proxy(function(r,...n){return t("",r,n)},{get:(r,n)=>n in r?r[n]:function(o,...a){return t(n,o,a)}});function t(r,n,o){return Xn(mr(r+e+"("+ao(n,o)+")"))}}function ur(e,t){return Array.isArray(e)?Gn(oo(e,t,r=>r!=null&&typeof r!="boolean"?r:"")):typeof e=="string"?Gn(e):[e]}var rs=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Gn(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let r=[{}],n=[r[0]],o=[];for(;t=rs.exec(e);)t[4]&&(r.shift(),o.shift()),t[3]?(o.unshift(t[3]),r.unshift({}),n.push(o.reduce((a,c)=>({[c]:a}),r[0]))):t[4]||(r[0][t[1]]&&(r.unshift({}),n.push(o.reduce((a,c)=>({[c]:a}),r[0]))),r[0][t[1]]=t[2]);return n}function so(e,...t){var r,n;let o=ur(e,t),a=(((r=o.find(c=>c.label))==null?void 0:r.label)||"css")+Rt(JSON.stringify(o));return n=(c,i)=>pr(o.flatMap(l=>ro(l,c,i,ce.o)),a),gr.set(a,n),a}var vd=new Proxy(function(e,t){return Yn("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(r,n){return Yn(t,r,n)}});function Yn(e,t,r){return{toString:()=>so({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+r}})}}var wd=Symbol();var lo=new Proxy(Gi,{apply:(e,t,r)=>rr(r[0]),get(e,t){let r=rr[t];return typeof r=="function"?function(){return r.apply(rr,arguments)}:r}});var Td=function e(t){return new Proxy(function(r,...n){return Jn(t,"",r,n)},{get:(r,n)=>n==="bind"?e:n in r?r[n]:function(o,...a){return Jn(t,n,o,a)}})}();function Jn(e,t,r,n){return{toString(){let o=ur(r,n),a=Qn(t+Rt(JSON.stringify([t,o])));return(typeof e=="function"?e:lo)(so({[`@keyframes ${a}`]:ur(r,n)})),a}}}var hr;function kr(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function yo(e,t=","){return e.map(kr).join(t)}var xo=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function It(e){for(var t=9,r=e.length;r--;)t=Math.imul(t^e.charCodeAt(r),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Dt(e,t="@media "){return t+Ae(e).map(r=>(typeof r=="string"&&(r={min:r}),r.raw||Object.keys(r).map(n=>`(${n}-width:${r[n]})`).join(" and "))).join(",")}function Ae(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function os(){}var ue={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function vo(e){return e.match(/[-=:;]/g)?.length||0}function Tr(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(vo(e),15)<<18}var as=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Cr({n:e,i:t,v:r=[]},n,o,a){e&&(e=kr({n:e,i:t,v:r})),a=[...Ae(a)];for(let i of r){let l=n.theme("screens",i);for(let u of Ae(l&&Dt(l)||n.v(i))){var c;a.push(u),o|=l?67108864|Tr(u):i=="dark"?1073741824:u[0]=="@"?Tr(u):(c=u,1<<~(/:([a-z-]+)/.test(c)&&~as.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var Er=new Map;function co(e){if(e.d){let t=[],r=br(e.r.reduce((n,o)=>o[0]=="@"?(t.push(o),n):o?br(n,a=>br(o,c=>{let i=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(c);if(i){let l=a.indexOf(i[1]);return~l?a.slice(0,l)+i[0]+a.slice(l+i[1].length):yr(a,c)}return yr(c,a)})):n,"&"),n=>yr(n,e.n?"."+xo(e.n):""));return r&&t.push(r.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((n,o)=>o+"{"+n+"}",e.d)}}function br(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(r,n,o)=>t(n)+o)}function yr(e,t){return e.replace(/&/g,t)}var uo=new Intl.Collator("en",{numeric:!0});function is(e,t){for(var r=0,n=e.length;r<n;){let o=n+r>>1;0>=wo(e[o],t)?r=o+1:n=o}return n}function wo(e,t){let r=e.p&ue.o;return r==(t.p&ue.o)&&(r==ue.b||r==ue.o)?0:e.p-t.p||e.o-t.o||uo.compare(fo(e.n),fo(t.n))||uo.compare(go(e.n),go(t.n))}function fo(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function go(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function xr(e,t){return Math.round(parseInt(e,16)*t)}function Be(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:r="1",opacityVariable:n}=t,o=n?`var(${n})`:r;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,c=[17,1,.062272][a-1];return`rgba(${[xr(e.substr(1,a),c),xr(e.substr(1+a,a),c),xr(e.substr(1+2*a,a),c),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function To(e,t,r,n,o=[]){return function a(c,{n:i,p:l,r:u=[],i:s},g){let m=[],d="",p=0,A=0;for(let w in c||{}){var _,f;let k=c[w];if(w[0]=="@"){if(!k)continue;if(w[1]=="a"){m.push(...Ao(i,l,Lr(""+k),g,l,u,s,!0));continue}if(w[1]=="l"){for(let S of Ae(k))m.push(...a(S,{n:i,p:(_=ue[w[7]],l&~ue.o|_),r:u,i:s},g));continue}if(w[1]=="i"){m.push(...Ae(k).map(S=>({p:-1,o:0,r:[],d:w+" "+S})));continue}if(w[1]=="k"){m.push({p:ue.d,o:0,r:[w],d:a(k,{p:ue.d},g).map(co).join("")});continue}if(w[1]=="f"){m.push(...Ae(k).map(S=>({p:ue.d,o:0,r:[w],d:a(S,{p:ue.d},g).map(co).join("")})));continue}}if(typeof k!="object"||Array.isArray(k))w=="label"&&k?i=k+It(JSON.stringify([l,s,c])):(k||k===0)&&(w=w.replace(/[A-Z]/g,S=>"-"+S.toLowerCase()),A+=1,p=Math.max(p,(f=w)[0]=="-"?0:vo(f)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(f)?+!!RegExp.$1||-!!RegExp.$2:0)+1),d+=(d?";":"")+Ae(k).map(S=>g.s(w,_o(""+S,g.theme)+(s?" !important":""))).join(";"));else if(w[0]=="@"||w.includes("&")){let S=l;w[0]=="@"&&(w=w.replace(/\bscreen\(([^)]+)\)/g,(ne,x)=>{let T=g.theme("screens",x);return T?(S|=67108864,Dt(T,"")):ne}),S|=Tr(w)),m.push(...a(k,{n:i,p:S,r:[...u,w],i:s},g))}else m.push(...a(k,{p:l,r:[...u,w]},g))}return m.unshift({n:i,p:l,o:Math.max(0,15-A)+1.5*Math.min(p||15,15),r:u,d}),m.sort(wo)}(e,Cr(t,r,n,o),r)}function _o(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(r,n,o,a,c="")=>{let i=t(o,c);return typeof i=="function"&&/color|fill|stroke/i.test(o)?Be(i):""+Ae(i).filter(l=>Object(l)!==l)})}function Mr(e,t){let r,n=[];for(let o of e)o.d&&o.n?r?.p==o.p&&""+r.r==""+o.r?(r.c=[r.c,o.c].filter(Boolean).join(" "),r.d=r.d+";"+o.d):n.push(r={...o,n:o.n&&t}):n.push({...o,n:o.n&&t});return n}function _r(e,t,r=ue.u,n,o){let a=[];for(let c of e)for(let i of function(l,u,s,g,m){l={...l,i:l.i||m};let d=function(p,A){let _=Er.get(p.n);return _?_(p,A):A.r(p.n,p.v[0]=="dark")}(l,u);return d?typeof d=="string"?({r:g,p:s}=Cr(l,u,s,g),Mr(_r(Lr(d),u,s,g,l.i),l.n)):Array.isArray(d)?d.map(p=>{var A,_;return{o:0,...p,r:[...Ae(g),...Ae(p.r)],p:(A=s,_=p.p??s,A&~ue.o|_)}}):To(d,l,u,s,g):[{c:kr(l),p:0,o:0,r:[]}]}(c,t,r,n,o))a.splice(is(a,i),0,i);return a}function Ao(e,t,r,n,o,a,c,i){return Mr((i?r.flatMap(l=>_r([l],n,o,a,c)):_r(r,n,o,a,c)).map(l=>l.p&ue.o&&(l.n||t==ue.b)?{...l,p:l.p&~ue.o|t,o:0}:l),e)}function ss(e,t,r,n){var o;return o=(a,c)=>{let{n:i,p:l,r:u,i:s}=Cr(a,c,t);return r&&Ao(i,t,r,c,l,u,s,n)},Er.set(e,o),e}function vr(e,t,r){if(e[e.length-1]!="("){let n=[],o=!1,a=!1,c="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),o=!o),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(c+=(c&&"-")+i)}c&&(a&&(c="-"+c),t[0].push({n:c,v:n.filter(ls),i:o}))}}function ls(e,t,r){return r.indexOf(e)==t}var po=new Map;function Lr(e){let t=po.get(e);if(!t){let r=[],n=[[]],o=0,a=0,c=null,i=0,l=(u,s=0)=>{o!=i&&(r.push(e.slice(o,i+s)),u&&vr(r,n)),o=i+1};for(;i<e.length;i++){let u=e[i];if(a)e[i-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(c)e[i-1]!="\\"&&c.test(e.slice(i))&&(c=null,o=i+RegExp.lastMatch.length);else if(u=="/"&&e[i-1]!="\\"&&(e[i+1]=="*"||e[i+1]=="/"))c=e[i+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),r.push(u);else if(u==":")e[i+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let s=r.lastIndexOf("(");if(u==")"){let g=r[s-1];if(/[~@]$/.test(g)){let m=n.shift();r.length=s,vr([...r,"#"],n);let{v:d}=n[0].pop();for(let p of m)p.v.splice(+(p.v[0]=="dark")-+(d[0]=="dark"),d.length);vr([...r,ss(g.length>1?g.slice(0,-1)+It(JSON.stringify([g,m])):g+"("+yo(m)+")",ue.a,m,/@$/.test(g))],n)}s=r.lastIndexOf("(",s-1)}r.length=s+1}else/[~@]/.test(u)&&e[i+1]=="("&&n.unshift([])}l(!0),po.set(e,t=n[0])}return t}function So(e,t,r){return t.reduce((n,o,a)=>n+r(o)+e[a+1],e[0])}function ko(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?So(e,t,r=>wr(r).trim()):t.filter(Boolean).reduce((r,n)=>r+wr(n),e?wr(e):"")}function wr(e){let t,r="";if(e&&typeof e=="object")if(Array.isArray(e))(t=ko(e[0],e.slice(1)))&&(r+=" "+t);else for(let n in e)e[n]&&(r+=" "+n);else e!=null&&typeof e!="boolean"&&(r+=" "+e);return r}var Fd=Co("@"),Ud=Co("~");function Co(e){return new Proxy(function(r,...n){return t("",r,n)},{get(r,n){return n in r?r[n]:function(o,...a){return t(n,o,a)}}});function t(r,n,o){return yo(Lr(r+e+"("+ko(n,o)+")"))}}function Ar(e,t){return Array.isArray(e)?mo(So(e,t,r=>r!=null&&typeof r!="boolean"?r:"")):typeof e=="string"?mo(e):[e]}var cs=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function mo(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let r=[{}],n=[r[0]],o=[];for(;t=cs.exec(e);)t[4]&&(r.shift(),o.shift()),t[3]?(o.unshift(t[3]),r.unshift({}),n.push(o.reduce((a,c)=>({[c]:a}),r[0]))):t[4]||(r[0][t[1]]&&(r.unshift({}),n.push(o.reduce((a,c)=>({[c]:a}),r[0]))),r[0][t[1]]=t[2]);return n}function Eo(e,...t){var r;let n=Ar(e,t),o=(n.find(a=>a.label)?.label||"css")+It(JSON.stringify(n));return r=(a,c)=>Mr(n.flatMap(i=>To(i,a,c,ue.o)),o),Er.set(o,r),o}var zd=new Proxy(function(e,t){return ho("animation",e,t)},{get(e,t){return t in e?e[t]:function(r,n){return ho(t,r,n)}}});function ho(e,t,r){return{toString(){return Eo({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+r}})}}}function b(e,t,r){return[e,us(t,r)]}function us(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(r,n)=>({[e]:t?t(r,n):Sr(r,1)}):r=>e||{[r[1]]:Sr(r,2)}}function Sr(e,t,r=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${r} * -1)`:r}function y(e,t,r,n){return[e,ds(t,r,n)]}function ds(e,t,r){let n=typeof t=="string"?(o,a)=>({[t]:r?r(o,a):o._}):t||(({1:o,_:a},c,i)=>({[o||i]:a}));return(o,a)=>{let c=Mo(e||o[1]),i=a.theme(c,o.$$)??gt(o.$$,c,a);if(i!=null)return o._=Sr(o,0,i),n(o,a,c)}}function ae(e,t={},r){return[e,fs(t,r)]}function fs(e={},t){return(r,n)=>{let{section:o=Mo(r[0]).replace("-","")+"Color"}=e,[a,c]=gs(r.$$);if(!a)return;let i=n.theme(o,a)||gt(a,o,n);if(!i||typeof i=="object")return;let{opacityVariable:l=`--tw-${r[0].replace(/-$/,"")}-opacity`,opacitySection:u=o.replace("Color","Opacity"),property:s=o,selector:g}=e,m=n.theme(u,c||"DEFAULT")||c&&gt(c,u,n),d=t||(({_:A})=>{let _=pt(s,A);return g?{[g]:_}:_});r._={value:Be(i,{opacityVariable:l||void 0,opacityValue:m||void 0}),color:A=>Be(i,A),opacityVariable:l||void 0,opacityValue:m||void 0};let p=d(r,n);if(!r.dark){let A=n.d(o,a,i);A&&A!==i&&(r._={value:Be(A,{opacityVariable:l||void 0,opacityValue:m||"1"}),color:_=>Be(A,_),opacityVariable:l||void 0,opacityValue:m||void 0},p={"&":p,[n.v("dark")]:d(r,n)})}return p}}function gs(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function pt(e,t){let r={};return typeof t=="string"?r[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(r[t.opacityVariable]=t.opacityValue||"1"),r[e]=t.value),r}function gt(e,t,r){if(e[0]=="["&&e.slice(-1)=="]"){if(e=Ot(_o(e.slice(1,-1),r.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Mo(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function Ot(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,r="",n,o="")=>Ot(r)+n+Ot(o)):e.replace(/(^|[^\\])_+/g,(t,r)=>r+" ".repeat(t.length-r.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var Hd=Symbol();var ps=new Proxy(os,{apply(e,t,r){return hr(r[0])},get(e,t){let r=hr[t];return typeof r=="function"?function(){return r.apply(hr,arguments)}:r}});var Wd=function e(t){return new Proxy(function(r,...n){return bo(t,"",r,n)},{get(r,n){return n==="bind"?e:n in r?r[n]:function(o,...a){return bo(t,n,o,a)}}})}();function bo(e,t,r,n){return{toString(){let o=Ar(r,n),a=xo(t+It(JSON.stringify([t,o])));return(typeof e=="function"?e:ps)(Eo({[`@keyframes ${a}`]:Ar(r,n)})),a}}}var ms="inherit",hs="currentColor",bs="transparent",ys="#000",xs="#fff",vs={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},ws={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Ts={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},_s={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},As={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},Ss={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},ks={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},Cs={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Es={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Ms={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Ls={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},Ps={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Rs={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Os={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Is={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Ds={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Ns={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},$s={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},js={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},Bs={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},Fs={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},Us={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},zs={__proto__:null,inherit:ms,current:hs,transparent:bs,black:ys,white:xs,slate:vs,gray:ws,zinc:Ts,neutral:_s,stone:As,red:Ss,orange:ks,amber:Cs,yellow:Es,lime:Ms,green:Ls,emerald:Ps,teal:Rs,cyan:Os,sky:Is,blue:Ds,indigo:Ns,violet:$s,purple:js,fuchsia:Bs,pink:Fs,rose:Us},Lo={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:zs,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...we(4,"rem",4,.5,.5),...we(12,"rem",4,5),14:"3.5rem",...we(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:j("blur"),backdropBrightness:j("brightness"),backdropContrast:j("contrast"),backdropGrayscale:j("grayscale"),backdropHueRotate:j("hueRotate"),backdropInvert:j("invert"),backdropOpacity:j("opacity"),backdropSaturate:j("saturate"),backdropSepia:j("sepia"),backgroundColor:j("colors"),backgroundImage:{none:"none"},backgroundOpacity:j("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...we(200,"",100,0,50),...we(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:j("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:j("spacing"),borderWidth:{DEFAULT:"1px",...Se(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:j("colors"),caretColor:j("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...we(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:j("borderColor"),divideOpacity:j("borderOpacity"),divideWidth:j("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:j("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...mt(2,6),...mt(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:j("spacing"),gradientColorStops:j("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...mt(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...mt(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...we(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...we(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:j("spacing"),placeholderColor:j("colors"),placeholderOpacity:j("opacity"),outlineColor:j("colors"),outlineOffset:Se(8,"px"),outlineWidth:Se(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:j("colors"),ringOffsetWidth:Se(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Se(8,"px")},rotate:{...Se(2,"deg"),...Se(12,"deg",3),...Se(180,"deg",45)},saturate:we(200,"",100,0,50),scale:{...we(150,"",100,0,50),...we(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:j("spacing"),scrollPadding:j("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Se(2,"deg"),...Se(12,"deg",3)},space:j("spacing"),stroke:j("colors"),strokeWidth:we(2),textColor:j("colors"),textDecorationColor:j("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Se(8,"px")},textUnderlineOffset:{auto:"auto",...Se(8,"px")},textIndent:j("spacing"),textOpacity:j("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:j("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...mt(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...we(50,"",1,0,10),auto:"auto"}};function mt(e,t){let r={};do for(var n=1;n<e;n++)r[`${n}/${e}`]=Number((n/e*100).toFixed(6))+"%";while(++e<=t);return r}function Se(e,t,r=0){let n={};for(;r<=e;r=2*r||1)n[r]=r+t;return n}function we(e,t="",r=1,n=0,o=1,a={}){for(;n<=e;n+=o)a[n]=n/r+t;return a}function j(e){return({theme:t})=>t(e)}var Kd={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Lo.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Lo.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Yd=[b("\\[([-\\w]+):(.+)]",({1:e,2:t},r)=>({"@layer overrides":{"&":{[e]:gt(`[${t}]`,e,r)}}})),b("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),y("aspect-","aspectRatio"),b("container",(e,{theme:t})=>{let{screens:r=t("screens"),center:n,padding:o}=t("container"),a={width:"100%",marginRight:n&&"auto",marginLeft:n&&"auto",...c("xs")};for(let i in r){let l=r[i];typeof l=="string"&&(a[Dt(l)]={"&":{maxWidth:l,...c(i)}})}return a;function c(i){let l=o&&(typeof o=="string"?o:o[i]||o.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),y("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),b("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),b("box-(border|content)","boxSizing",({1:e})=>e+"-box"),b("hidden",{display:"none"}),b("table-(auto|fixed)","tableLayout"),b(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",b("isolate","isolation"),b("object-(contain|cover|fill|none|scale-down)","objectFit"),y("object-","objectPosition"),b("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Nt),b("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),b("(static|fixed|absolute|relative|sticky)","position"),y("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),y("-?(top|bottom|left|right)(?:$|-)","inset"),b("visible","visibility"),b("invisible",{visibility:"hidden"}),y("-?z-","zIndex"),b("flex-((row|col)(-reverse)?)","flexDirection",Po),b("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),y("(flex-(?:grow|shrink))(?:$|-)"),y("(flex)-"),y("grow(?:$|-)","flexGrow"),y("shrink(?:$|-)","flexShrink"),y("basis-","flexBasis"),y("-?(order)-"),"-?(order)-(\\d+)",y("grid-cols-","gridTemplateColumns"),b("grid-cols-(\\d+)","gridTemplateColumns",Do),y("col-","gridColumn"),b("col-(span)-(\\d+)","gridColumn",Io),y("col-start-","gridColumnStart"),b("col-start-(auto|\\d+)","gridColumnStart"),y("col-end-","gridColumnEnd"),b("col-end-(auto|\\d+)","gridColumnEnd"),y("grid-rows-","gridTemplateRows"),b("grid-rows-(\\d+)","gridTemplateRows",Do),y("row-","gridRow"),b("row-(span)-(\\d+)","gridRow",Io),y("row-start-","gridRowStart"),b("row-start-(auto|\\d+)","gridRowStart"),y("row-end-","gridRowEnd"),b("row-end-(auto|\\d+)","gridRowEnd"),b("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Nt(Po(e))),b("grid-flow-(dense)","gridAutoFlow"),y("auto-cols-","gridAutoColumns"),y("auto-rows-","gridAutoRows"),y("gap-x(?:$|-)","gap","columnGap"),y("gap-y(?:$|-)","gap","rowGap"),y("gap(?:$|-)","gap"),"(justify-(?:items|self))-",b("justify-","justifyContent",Ro),b("(content|items|self)-",e=>({["align-"+e[1]]:Ro(e)})),b("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),y("p([xytrbl])?(?:$|-)","padding",nt("padding")),y("-?m([xytrbl])?(?:$|-)","margin",nt("margin")),y("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),b("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),y("w-","width"),y("min-w-","minWidth"),y("max-w-","maxWidth"),y("h-","height"),y("min-h-","minHeight"),y("max-h-","maxHeight"),y("font-","fontWeight"),y("font-","fontFamily","fontFamily",Le),b("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),b("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),b("italic","fontStyle"),b("not-italic",{fontStyle:"normal"}),b("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:r})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(r?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),y("tracking-","letterSpacing"),y("leading-","lineHeight"),b("list-(inside|outside)","listStylePosition"),y("list-","listStyleType"),b("list-","listStyleType"),y("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),ae("placeholder-",{property:"color",selector:"&::placeholder"}),b("text-(left|center|right|justify|start|end)","textAlign"),b("text-(ellipsis|clip)","textOverflow"),y("text-opacity-","textOpacity","--tw-text-opacity"),ae("text-",{property:"color"}),y("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),y("indent-","textIndent"),b("(overline|underline|line-through)","textDecorationLine"),b("no-underline",{textDecorationLine:"none"}),y("underline-offset-","textUnderlineOffset"),ae("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),y("decoration-","textDecorationThickness"),b("decoration-","textDecorationStyle"),b("(uppercase|lowercase|capitalize)","textTransform"),b("normal-case",{textTransform:"none"}),b("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),b("align-","verticalAlign"),b("whitespace-","whiteSpace"),b("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),b("break-words",{overflowWrap:"break-word"}),b("break-all",{wordBreak:"break-all"}),ae("caret-",{opacityVariable:!1,opacitySection:"opacity"}),ae("accent-",{opacityVariable:!1,opacitySection:"opacity"}),b("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Ge(e," ")},var(--tw-gradient-stops))`),ae("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),ae("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),ae("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),b("bg-(fixed|local|scroll)","backgroundAttachment"),b("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),b(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),b("bg-blend-","backgroundBlendMode"),b("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),y("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),ae("bg-",{section:"backgroundColor"}),y("bg-","backgroundImage"),y("bg-","backgroundPosition"),b("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Nt),y("bg-","backgroundSize"),y("rounded(?:$|-)","borderRadius"),y("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let r={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Ge(r[0])}-radius`]:t,[`border-${Ge(r[1])}-radius`]:t}}),b("border-(collapse|separate)","borderCollapse"),y("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),b("border-(solid|dashed|dotted|double|none)","borderStyle"),y("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),ae("border-([xytrbl])-",{section:"borderColor"},nt("border","Color")),ae("border-"),y("border-([xytrbl])(?:$|-)","borderWidth",nt("border","Width")),y("border(?:$|-)","borderWidth"),y("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),b("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),b("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),y("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let r={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Ge(r[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Ge(r[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),ae("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),y("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),ae("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),y("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),b("ring-inset",{"--tw-ring-inset":"inset"}),ae("ring-",{property:"--tw-ring-color"}),y("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Be(t("ringOffsetColor","","#fff")),"--tw-ring-color":Be(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),ae("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),y("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":Le(e),"--tw-shadow-colored":Le(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),y("(opacity)-"),b("mix-blend-","mixBlendMode"),...Oo(),...Oo("backdrop-"),y("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:Le(e),transitionTimingFunction:e._=="none"?void 0:Le(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:Le(t("transitionDuration",""))})),y("duration(?:$|-)","transitionDuration","transitionDuration",Le),y("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",Le),y("delay(?:$|-)","transitionDelay","transitionDelay",Le),y("animate(?:$|-)","animation",(e,{theme:t,h:r})=>{let n=Le(e),o=n.split(" "),a=t("keyframes",o[0]);return a?{["@keyframes "+(o[0]=r(o[0]))]:a,animation:o.join(" ")}:{animation:n}}),"(transform)-(none)",b("transform",Rr),b("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":No(e=="gpu")})),y("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Rr()})),y("-?(rotate)-","rotate",Pr),y("-?(translate-[xy])-","translate",Pr),y("-?(skew-[xy])-","skew",Pr),b("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Nt),"(appearance)-",y("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",y("(cursor)-"),"(cursor)-",b("snap-(none)","scroll-snap-type"),b("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),b("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),b("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),b("snap-(normal|always)","scroll-snap-stop"),b("scroll-(auto|smooth)","scroll-behavior"),y("scroll-p([xytrbl])?(?:$|-)","padding",nt("scroll-padding")),y("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",nt("scroll-margin")),b("touch-(auto|none|manipulation)","touch-action"),b("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:r})=>({[`--tw-${t?"pan-x":r?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),b("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),b("outline",{outlineStyle:"solid"}),b("outline-(dashed|dotted|double|hidden)","outlineStyle"),y("(outline-offset)-"),ae("outline-",{opacityVariable:!1,opacitySection:"opacity"}),y("outline-","outlineWidth"),"(pointer-events)-",y("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],b("select-(none|text|all|auto)","userSelect"),ae("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),ae("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),y("stroke-","strokeWidth"),b("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),b("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Nt(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Po(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Ge(e,t="-"){let r=[];for(let n of e)r.push({t:"top",r:"right",b:"bottom",l:"left"}[n]);return r.join(t)}function Le(e){return e&&""+(e._||e)}function Ro({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function nt(e,t=""){return({1:r,_:n})=>{let o={x:"lr",y:"tb"}[r]||r+r;return o?{...pt(e+"-"+Ge(o[0])+t,n),...pt(e+"-"+Ge(o[1])+t,n)}:pt(e+t,n)}}function Oo(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),r={};for(let n of t)r[`--tw-${e}${n}`]="var(--tw-empty,/*!*/ /*!*/)";return r={[`${e}filter`]:t.map(n=>`var(--tw-${e}${n})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":r}},[`(${e}filter)-(none)`,b(`${e}filter`,r),...t.map(n=>y(`${n[0]=="h"?"-?":""}(${e}${n})(?:$|-)`,n,({1:o,_:a})=>({[`--tw-${o}`]:Ae(a).map(c=>`${n}(${c})`).join(" "),...r})))]}function Pr({1:e,_:t}){return{["--tw-"+e]:t,...Rr()}}function Rr(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":No()}}}}function No(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Io({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Do({1:e}){return`repeat(${e},minmax(0,1fr))`}var Ws=Object.create,jo=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,qs=Object.getOwnPropertyNames,Ks=Object.getPrototypeOf,Gs=Object.prototype.hasOwnProperty,Ys=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Js=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of qs(t))!Gs.call(e,o)&&o!==r&&jo(e,o,{get:()=>t[o],enumerable:!(n=Vs(t,o))||n.enumerable});return e},Xs=(e,t,r)=>(r=e!=null?Ws(Ks(e)):{},Js(t||!e||!e.__esModule?jo(r,"default",{value:e,enumerable:!0}):r,e)),Qs=Ys((e,t)=>{(function(r,n){typeof e=="object"&&typeof t=="object"?t.exports=n():typeof define=="function"&&define.amd?define([],n):typeof e=="object"?e.notie=n():r.notie=n()})(e,function(){return function(r){function n(a){if(o[a])return o[a].exports;var c=o[a]={i:a,l:!1,exports:{}};return r[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}var o={};return n.m=r,n.c=o,n.i=function(a){return a},n.d=function(a,c,i){n.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:i})},n.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(c,"a",c),c},n.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)},n.p="",n(n.s=1)}([function(r,n){r.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}},function(r,n,o){"use strict";(function(a){var c,i,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s};(function(s,g){u(n)==="object"&&u(a)==="object"?a.exports=g():(i=[],c=g,l=typeof c=="function"?c.apply(n,i):c,l!==void 0&&(a.exports=l))})(void 0,function(){return function(s){function g(d){if(m[d])return m[d].exports;var p=m[d]={i:d,l:!1,exports:{}};return s[d].call(p.exports,p,p.exports,g),p.l=!0,p.exports}var m={};return g.m=s,g.c=m,g.i=function(d){return d},g.d=function(d,p,A){g.o(d,p)||Object.defineProperty(d,p,{configurable:!1,enumerable:!0,get:A})},g.n=function(d){var p=d&&d.__esModule?function(){return d.default}:function(){return d};return g.d(p,"a",p),p},g.o=function(d,p){return Object.prototype.hasOwnProperty.call(d,p)},g.p="",g(g.s=0)}([function(s,g,m){function d(h,D){var E={};for(var W in h)D.indexOf(W)>=0||Object.prototype.hasOwnProperty.call(h,W)&&(E[W]=h[W]);return E}Object.defineProperty(g,"__esModule",{value:!0});var p=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(h){return typeof h>"u"?"undefined":u(h)}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h>"u"?"undefined":u(h)},A=Object.assign||function(h){for(var D=1;D<arguments.length;D++){var E=arguments[D];for(var W in E)Object.prototype.hasOwnProperty.call(E,W)&&(h[W]=E[W])}return h},_={top:"top",bottom:"bottom"},f={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:_.top,force:_.top,confirm:_.top,input:_.top,select:_.bottom,date:_.top}},w=g.setOptions=function(h){f=A({},f,h,{classes:A({},f.classes,h.classes),ids:A({},f.ids,h.ids),positions:A({},f.positions,h.positions)})},k=function(){return new Promise(function(h){return setTimeout(h,0)})},S=function(h){return new Promise(function(D){return setTimeout(D,1e3*h)})},ne=function(){document.activeElement&&document.activeElement.blur()},x=function(){var h="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(D){var E=16*Math.random()|0,W=D==="x"?E:3&E|8;return W.toString(16)});return"notie-"+h},T={1:f.classes.backgroundSuccess,success:f.classes.backgroundSuccess,2:f.classes.backgroundWarning,warning:f.classes.backgroundWarning,3:f.classes.backgroundError,error:f.classes.backgroundError,4:f.classes.backgroundInfo,info:f.classes.backgroundInfo,5:f.classes.backgroundNeutral,neutral:f.classes.backgroundNeutral},$=function(){return f.transitionSelector+" "+f.transitionDuration+"s "+f.transitionCurve},B=function(h){return h.keyCode===13},J=function(h){return h.keyCode===27},ee=function(h,D){h.classList.add(f.classes.container),h.style[D]="-10000px",document.body.appendChild(h),h.style[D]="-"+h.offsetHeight+"px",h.listener&&window.addEventListener("keydown",h.listener),k().then(function(){h.style.transition=$(),h.style[D]=0})},V=function(h,D){var E=document.getElementById(h);E&&(E.style[D]="-"+E.offsetHeight+"px",E.listener&&window.removeEventListener("keydown",E.listener),S(f.transitionDuration).then(function(){E.parentNode&&E.parentNode.removeChild(E)}))},R=function(h,D){var E=document.createElement("div");E.id=f.ids.overlay,E.classList.add(f.classes.overlay),E.classList.add(f.classes.backgroundOverlay),E.style.opacity=0,h&&f.overlayClickDismiss&&(E.onclick=function(){V(h.id,D),X()}),document.body.appendChild(E),k().then(function(){E.style.transition=$(),E.style.opacity=f.overlayOpacity})},X=function(){var h=document.getElementById(f.ids.overlay);h.style.opacity=0,S(f.transitionDuration).then(function(){h.parentNode&&h.parentNode.removeChild(h)})},H=g.hideAlerts=function(h){var D=document.getElementsByClassName(f.classes.alert);if(D.length){for(var E=0;E<D.length;E++){var W=D[E];V(W.id,W.position)}h&&S(f.transitionDuration).then(function(){return h()})}},De=g.alert=function(h){var D=h.type,E=D===void 0?4:D,W=h.text,I=h.time,ie=I===void 0?f.alertTime:I,be=h.stay,ye=be!==void 0&&be,oe=h.position,q=oe===void 0?f.positions.alert||q.top:oe;ne(),H();var z=document.createElement("div"),K=x();z.id=K,z.position=q,z.classList.add(f.classes.textbox),z.classList.add(T[E]),z.classList.add(f.classes.alert),z.innerHTML='<div class="'+f.classes.textboxInner+'">'+W+"</div>",z.onclick=function(){return V(K,q)},z.listener=function(C){(B(C)||J(C))&&H()},ee(z,q),ie&&ie<1&&(ie=1),!ye&&ie&&S(ie).then(function(){return V(K,q)})},Ue=g.force=function(h,D){var E=h.type,W=E===void 0?5:E,I=h.text,ie=h.buttonText,be=ie===void 0?"OK":ie,ye=h.callback,oe=h.position,q=oe===void 0?f.positions.force||q.top:oe;ne(),H();var z=document.createElement("div"),K=x();z.id=K;var C=document.createElement("div");C.classList.add(f.classes.textbox),C.classList.add(f.classes.backgroundInfo),C.innerHTML='<div class="'+f.classes.textboxInner+'">'+I+"</div>";var U=document.createElement("div");U.classList.add(f.classes.button),U.classList.add(T[W]),U.innerHTML=be,U.onclick=function(){V(K,q),X(),ye?ye():D&&D()},z.appendChild(C),z.appendChild(U),z.listener=function(se){B(se)&&U.click()},ee(z,q),R()},Te=g.confirm=function(h,D,E){var W=h.text,I=h.submitText,ie=I===void 0?"Yes":I,be=h.cancelText,ye=be===void 0?"Cancel":be,oe=h.submitCallback,q=h.cancelCallback,z=h.position,K=z===void 0?f.positions.confirm||K.top:z;ne(),H();var C=document.createElement("div"),U=x();C.id=U;var se=document.createElement("div");se.classList.add(f.classes.textbox),se.classList.add(f.classes.backgroundInfo),se.innerHTML='<div class="'+f.classes.textboxInner+'">'+W+"</div>";var Y=document.createElement("div");Y.classList.add(f.classes.button),Y.classList.add(f.classes.elementHalf),Y.classList.add(f.classes.backgroundSuccess),Y.innerHTML=ie,Y.onclick=function(){V(U,K),X(),oe?oe():D&&D()};var P=document.createElement("div");P.classList.add(f.classes.button),P.classList.add(f.classes.elementHalf),P.classList.add(f.classes.backgroundError),P.innerHTML=ye,P.onclick=function(){V(U,K),X(),q?q():E&&E()},C.appendChild(se),C.appendChild(Y),C.appendChild(P),C.listener=function(le){B(le)?Y.click():J(le)&&P.click()},ee(C,K),R(C,K)},Ye=function(h,D,E){var W=h.text,I=h.submitText,ie=I===void 0?"Submit":I,be=h.cancelText,ye=be===void 0?"Cancel":be,oe=h.submitCallback,q=h.cancelCallback,z=h.position,K=z===void 0?f.positions.input||K.top:z,C=d(h,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);ne(),H();var U=document.createElement("div"),se=x();U.id=se;var Y=document.createElement("div");Y.classList.add(f.classes.textbox),Y.classList.add(f.classes.backgroundInfo),Y.innerHTML='<div class="'+f.classes.textboxInner+'">'+W+"</div>";var P=document.createElement("input");P.classList.add(f.classes.inputField),P.setAttribute("autocapitalize",C.autocapitalize||"none"),P.setAttribute("autocomplete",C.autocomplete||"off"),P.setAttribute("autocorrect",C.autocorrect||"off"),P.setAttribute("autofocus",C.autofocus||"true"),P.setAttribute("inputmode",C.inputmode||"verbatim"),P.setAttribute("max",C.max||""),P.setAttribute("maxlength",C.maxlength||""),P.setAttribute("min",C.min||""),P.setAttribute("minlength",C.minlength||""),P.setAttribute("placeholder",C.placeholder||""),P.setAttribute("spellcheck",C.spellcheck||"default"),P.setAttribute("step",C.step||"any"),P.setAttribute("type",C.type||"text"),P.value=C.value||"",C.allowed&&(P.oninput=function(){var fe=void 0;if(Array.isArray(C.allowed)){for(var xe="",Ne=C.allowed,Oe=0;Oe<Ne.length;Oe++)Ne[Oe]==="an"?xe+="0-9a-zA-Z":Ne[Oe]==="a"?xe+="a-zA-Z":Ne[Oe]==="n"&&(xe+="0-9"),Ne[Oe]==="s"&&(xe+=" ");fe=new RegExp("[^"+xe+"]","g")}else p(C.allowed)==="object"&&(fe=C.allowed);P.value=P.value.replace(fe,"")});var le=document.createElement("div");le.classList.add(f.classes.button),le.classList.add(f.classes.elementHalf),le.classList.add(f.classes.backgroundSuccess),le.innerHTML=ie,le.onclick=function(){V(se,K),X(),oe?oe(P.value):D&&D(P.value)};var ke=document.createElement("div");ke.classList.add(f.classes.button),ke.classList.add(f.classes.elementHalf),ke.classList.add(f.classes.backgroundError),ke.innerHTML=ye,ke.onclick=function(){V(se,K),X(),q?q(P.value):E&&E(P.value)},U.appendChild(Y),U.appendChild(P),U.appendChild(le),U.appendChild(ke),U.listener=function(fe){B(fe)?le.click():J(fe)&&ke.click()},ee(U,K),P.focus(),R(U,K)};g.input=Ye;var _a=g.select=function(h,D){var E=h.text,W=h.cancelText,I=W===void 0?"Cancel":W,ie=h.cancelCallback,be=h.choices,ye=h.position,oe=ye===void 0?f.positions.select||oe.top:ye;ne(),H();var q=document.createElement("div"),z=x();q.id=z;var K=document.createElement("div");K.classList.add(f.classes.textbox),K.classList.add(f.classes.backgroundInfo),K.innerHTML='<div class="'+f.classes.textboxInner+'">'+E+"</div>",q.appendChild(K),be.forEach(function(U,se){var Y=U.type,P=Y===void 0?1:Y,le=U.text,ke=U.handler,fe=document.createElement("div");fe.classList.add(T[P]),fe.classList.add(f.classes.button),fe.classList.add(f.classes.selectChoice);var xe=be[se+1];xe&&!xe.type&&(xe.type=1),xe&&xe.type===P&&fe.classList.add(f.classes.selectChoiceRepeated),fe.innerHTML=le,fe.onclick=function(){V(z,oe),X(),ke()},q.appendChild(fe)});var C=document.createElement("div");C.classList.add(f.classes.backgroundNeutral),C.classList.add(f.classes.button),C.innerHTML=I,C.onclick=function(){V(z,oe),X(),ie?ie():D&&D()},q.appendChild(C),q.listener=function(U){J(U)&&C.click()},ee(q,oe),R(q,oe)},Aa=g.date=function(h,D,E){var W=h.value,I=W===void 0?new Date:W,ie=h.submitText,be=ie===void 0?"OK":ie,ye=h.cancelText,oe=ye===void 0?"Cancel":ye,q=h.submitCallback,z=h.cancelCallback,K=h.position,C=K===void 0?f.positions.date||C.top:K;ne(),H();var U="&#9662",se=document.createElement("div"),Y=document.createElement("div"),P=document.createElement("div"),le=function(Z){se.innerHTML=f.dateMonths[Z.getMonth()],Y.innerHTML=Z.getDate(),P.innerHTML=Z.getFullYear()},ke=function(Z){var Ee=new Date(I.getFullYear(),I.getMonth()+1,0).getDate(),Ze=Z.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(Ze)>Ee&&(Ze=Ee.toString()),Z.target.textContent=Ze,Number(Ze)<1&&(Ze="1"),I.setDate(Number(Ze))},fe=function(Z){var Ee=Z.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Z.target.textContent=Ee,I.setFullYear(Number(Ee))},xe=function(Z){le(I)},Ne=function(Z){var Ee=new Date(I.getFullYear(),I.getMonth()+Z+1,0).getDate();I.getDate()>Ee&&I.setDate(Ee),I.setMonth(I.getMonth()+Z),le(I)},Oe=function(Z){I.setDate(I.getDate()+Z),le(I)},Xr=function(Z){var Ee=I.getFullYear()+Z;Ee<0?I.setFullYear(0):I.setFullYear(I.getFullYear()+Z),le(I)},ze=document.createElement("div"),Ht=x();ze.id=Ht;var Wt=document.createElement("div");Wt.classList.add(f.classes.backgroundInfo);var Ce=document.createElement("div");Ce.classList.add(f.classes.dateSelectorInner);var Je=document.createElement("div");Je.classList.add(f.classes.button),Je.classList.add(f.classes.elementThird),Je.classList.add(f.classes.dateSelectorUp),Je.innerHTML=U;var Xe=document.createElement("div");Xe.classList.add(f.classes.button),Xe.classList.add(f.classes.elementThird),Xe.classList.add(f.classes.dateSelectorUp),Xe.innerHTML=U;var Qe=document.createElement("div");Qe.classList.add(f.classes.button),Qe.classList.add(f.classes.elementThird),Qe.classList.add(f.classes.dateSelectorUp),Qe.innerHTML=U,se.classList.add(f.classes.element),se.classList.add(f.classes.elementThird),se.innerHTML=f.dateMonths[I.getMonth()],Y.classList.add(f.classes.element),Y.classList.add(f.classes.elementThird),Y.setAttribute("contentEditable",!0),Y.addEventListener("input",ke),Y.addEventListener("blur",xe),Y.innerHTML=I.getDate(),P.classList.add(f.classes.element),P.classList.add(f.classes.elementThird),P.setAttribute("contentEditable",!0),P.addEventListener("input",fe),P.addEventListener("blur",xe),P.innerHTML=I.getFullYear();var it=document.createElement("div");it.classList.add(f.classes.button),it.classList.add(f.classes.elementThird),it.innerHTML=U;var st=document.createElement("div");st.classList.add(f.classes.button),st.classList.add(f.classes.elementThird),st.innerHTML=U;var lt=document.createElement("div");lt.classList.add(f.classes.button),lt.classList.add(f.classes.elementThird),lt.innerHTML=U,Je.onclick=function(){return Ne(1)},Xe.onclick=function(){return Oe(1)},Qe.onclick=function(){return Xr(1)},it.onclick=function(){return Ne(-1)},st.onclick=function(){return Oe(-1)},lt.onclick=function(){return Xr(-1)};var He=document.createElement("div");He.classList.add(f.classes.button),He.classList.add(f.classes.elementHalf),He.classList.add(f.classes.backgroundSuccess),He.innerHTML=be,He.onclick=function(){V(Ht,C),X(),q?q(I):D&&D(I)};var We=document.createElement("div");We.classList.add(f.classes.button),We.classList.add(f.classes.elementHalf),We.classList.add(f.classes.backgroundError),We.innerHTML=oe,We.onclick=function(){V(Ht,C),X(),z?z(I):E&&E(I)},Ce.appendChild(Je),Ce.appendChild(Xe),Ce.appendChild(Qe),Ce.appendChild(se),Ce.appendChild(Y),Ce.appendChild(P),Ce.appendChild(it),Ce.appendChild(st),Ce.appendChild(lt),Wt.appendChild(Ce),ze.appendChild(Wt),ze.appendChild(He),ze.appendChild(We),ze.listener=function(Z){B(Z)?He.click():J(Z)&&We.click()},ee(ze,C),R(ze,C)};g.default={alert:De,force:Ue,confirm:Te,input:Ye,select:_a,date:Aa,setOptions:w,hideAlerts:H}}])})}).call(n,o(0)(r))}])})}),Zs=Xs(Qs()),{default:$o,...el}=Zs,Or=$o!==void 0?$o:el;var uf=Symbol("clean");var df=Symbol();function Ir(e,t){if(typeof e=="string")return t(e);{let r={};for(let n in e)r[n]=Ir(e[n],t);return r}}function Fo(e){return t=>{if(t.transform){let r=t.transform;return t=t.input,{input:t,transform(n,o,a){let c=e(n,o,...a);return(...i)=>r(n,c,i)}}}else return{input:t,transform(r,n,o){return e(r,n,...o)}}}}var vf=Fo((e,t,r)=>Ir(t,n=>{for(let o in r)n=n.replace(new RegExp(`{${o}}`,"g"),r[o]);return n})),wf=Fo((e,t,r)=>{let n=new Intl.PluralRules(e).select(r);return n in t||(n="many"),Ir(t[n],o=>o.replace(/{count}/g,r))});var Dr=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Nr(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on".concat(t),function(){r(window.event)})}function Vo(e,t){for(var r=t.slice(0,t.length-1),n=0;n<r.length;n++)r[n]=e[r[n].toLowerCase()];return r}function qo(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),r=t.lastIndexOf("");r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function nl(e,t){for(var r=e.length>=t.length?e:t,n=e.length>=t.length?t:e,o=!0,a=0;a<r.length;a++)n.indexOf(r[a])===-1&&(o=!1);return o}var bt={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Dr?173:189,"=":Dr?61:187,";":Dr?59:186,"'":222,"[":219,"]":221,"\\":220},Re={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Br={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},de={16:!1,18:!1,17:!1,91:!1},te={};for(ht=1;ht<20;ht++)bt["f".concat(ht)]=111+ht;var ht,G=[],Uo=!1,Ko="all",Go=[],jt=function(e){return bt[e.toLowerCase()]||Re[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},ol=function(e){return Object.keys(bt).find(function(t){return bt[t]===e})},al=function(e){return Object.keys(Re).find(function(t){return Re[t]===e})};function Yo(e){Ko=e||"all"}function yt(){return Ko||"all"}function il(){return G.slice(0)}function sl(){return G.map(function(e){return ol(e)||al(e)||String.fromCharCode(e)})}function ll(e){var t=e.target||e.srcElement,r=t.tagName,n=!0;return(t.isContentEditable||(r==="INPUT"||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(n=!1),n}function cl(e){return typeof e=="string"&&(e=jt(e)),G.indexOf(e)!==-1}function ul(e,t){var r,n;e||(e=yt());for(var o in te)if(Object.prototype.hasOwnProperty.call(te,o))for(r=te[o],n=0;n<r.length;)r[n].scope===e?r.splice(n,1):n++;yt()===e&&Yo(t||"all")}function dl(e){var t=e.keyCode||e.which||e.charCode,r=G.indexOf(t);if(r>=0&&G.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&G.splice(0,G.length),(t===93||t===224)&&(t=91),t in de){de[t]=!1;for(var n in Re)Re[n]===t&&(Pe[n]=!1)}}function fl(e){if(typeof e>"u")Object.keys(te).forEach(function(c){return delete te[c]});else if(Array.isArray(e))e.forEach(function(c){c.key&&$r(c)});else if(typeof e=="object")e.key&&$r(e);else if(typeof e=="string"){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=r[0],a=r[1];typeof o=="function"&&(a=o,o=""),$r({key:e,scope:o,method:a,splitKey:"+"})}}var $r=function(e){var t=e.key,r=e.scope,n=e.method,o=e.splitKey,a=o===void 0?"+":o,c=qo(t);c.forEach(function(i){var l=i.split(a),u=l.length,s=l[u-1],g=s==="*"?"*":jt(s);if(te[g]){r||(r=yt());var m=u>1?Vo(Re,l):[];te[g]=te[g].filter(function(d){var p=n?d.method===n:!0;return!(p&&d.scope===r&&nl(d.mods,m))})}})};function zo(e,t,r,n){if(t.element===n){var o;if(t.scope===r||t.scope==="all"){o=t.mods.length>0;for(var a in de)Object.prototype.hasOwnProperty.call(de,a)&&(!de[a]&&t.mods.indexOf(+a)>-1||de[a]&&t.mods.indexOf(+a)===-1)&&(o=!1);(t.mods.length===0&&!de[16]&&!de[18]&&!de[17]&&!de[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Ho(e,t){var r=te["*"],n=e.keyCode||e.which||e.charCode;if(Pe.filter.call(this,e)){if((n===93||n===224)&&(n=91),G.indexOf(n)===-1&&n!==229&&G.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var A=Br[p];e[p]&&G.indexOf(A)===-1?G.push(A):!e[p]&&G.indexOf(A)>-1?G.splice(G.indexOf(A),1):p==="metaKey"&&e[p]&&G.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(G=G.slice(G.indexOf(A))))}),n in de){de[n]=!0;for(var o in Re)Re[o]===n&&(Pe[o]=!0);if(!r)return}for(var a in de)Object.prototype.hasOwnProperty.call(de,a)&&(de[a]=e[Br[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(G.indexOf(17)===-1&&G.push(17),G.indexOf(18)===-1&&G.push(18),de[17]=!0,de[18]=!0);var c=yt();if(r)for(var i=0;i<r.length;i++)r[i].scope===c&&(e.type==="keydown"&&r[i].keydown||e.type==="keyup"&&r[i].keyup)&&zo(e,r[i],c,t);if(n in te){for(var l=0;l<te[n].length;l++)if((e.type==="keydown"&&te[n][l].keydown||e.type==="keyup"&&te[n][l].keyup)&&te[n][l].key){for(var u=te[n][l],s=u.splitKey,g=u.key.split(s),m=[],d=0;d<g.length;d++)m.push(jt(g[d]));m.sort().join("")===G.sort().join("")&&zo(e,u,c,t)}}}}function gl(e){return Go.indexOf(e)>-1}function Pe(e,t,r){G=[];var n=qo(e),o=[],a="all",c=document,i=0,l=!1,u=!0,s="+",g=!1;for(r===void 0&&typeof t=="function"&&(r=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(c=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(s=t.splitKey)),typeof t=="string"&&(a=t);i<n.length;i++)e=n[i].split(s),o=[],e.length>1&&(o=Vo(Re,e)),e=e[e.length-1],e=e==="*"?"*":jt(e),e in te||(te[e]=[]),te[e].push({keyup:l,keydown:u,scope:a,mods:o,shortcut:n[i],method:r,key:n[i],splitKey:s,element:c});typeof c<"u"&&!gl(c)&&window&&(Go.push(c),Nr(c,"keydown",function(m){Ho(m,c)},g),Uo||(Uo=!0,Nr(window,"focus",function(){G=[]},g)),Nr(c,"keyup",function(m){Ho(m,c),dl(m)},g))}function pl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(te).forEach(function(r){var n=te[r].filter(function(o){return o.scope===t&&o.shortcut===e});n.forEach(function(o){o&&o.method&&o.method()})})}var jr={getPressedKeyString:sl,setScope:Yo,getScope:yt,deleteScope:ul,getPressedKeyCodes:il,isPressed:cl,filter:ll,trigger:pl,unbind:fl,keyMap:bt,modifier:Re,modifierMap:Br};for($t in jr)Object.prototype.hasOwnProperty.call(jr,$t)&&(Pe[$t]=jr[$t]);var $t;typeof document<"u"&&(Wo=window.hotkeys,Pe.noConflict=function(e){return e&&window.hotkeys===Pe&&(window.hotkeys=Wo),Pe},window.hotkeys=Pe);var Wo;var Kf=Or.alert;var Fr=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let r=performance.now(),n=Math.round(r-this.#e),o=_e.green;n>1e4?o=_e.red:n>1e3&&(o=_e.yellow),console.debug(_e.dim(qe+" TIMING:"),t,"in",o(n+"ms")),this.#e=r}},xt=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(_e.dim(qe+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(_e.green(qe+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(_e.yellow(qe+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(_e.red(qe+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(_e.red(qe+" FATAL:"),...t)}timing(){return this.level===0?new Fr:{reset:()=>{},stop:()=>{}}}},re=new xt;function Jo(e){let t=O.runtime.getURL(_t),r=new URL(t);return(e.startsWith("http")||!dn())&&r.searchParams.set("file",e),r.href}function Xo(e){return new URL(e)?.pathname.toLowerCase().endsWith(".pdf")}var ot=class extends Error{constructor(r,n,o){super(n);this.name=r,o&&(this.details=o)}};async function Qo(e){e.body;let{url:t,responseType:r,...n}=e;r||(r="json"),n={mode:"cors",...n};let a=await(e.fetchPolyfill||fetch)(t,n);if(a.ok&&a.status>=200&&a.status<400){if(r==="json")return await a.json();if(r==="text")return await a.text();if(r==="raw"){let c=await a.text(),i=Object.fromEntries([...a.headers.entries()]),l=a.url;return l||(a.headers.get("X-Final-URL")?l=a.headers.get("X-Final-URL"):l=t),{body:c,headers:i,status:a.status,statusText:a.statusText,url:l}}}else{let c;try{c=await a.text()}catch(i){re.error("parse response failed",i)}throw new ot("fetchError",a.status+": "+a.statusText||"",c)}}var Zo=["*://*/*","*","*://*"],ta="immersive-translate-wildcard-placeholder.com";function ml(e,t){let r=[];if(!t||(t&&!Array.isArray(t)?r=[t]:r=t,r.length===0))return null;if(r.some(c=>Zo.includes(c)))return e;let n=new URL(e);n.hash="",n.search="";let o=n.href,a=n.hostname;if(r&&r.length>0){let c=r.find(i=>{let l=i;if(i===a)return!0;if(Zo.includes(i))return!0;if(!i.includes("*")&&i.includes("://")){try{let u=new URL(i);return u.pathname==="/"&&!i.endsWith("/")?u.hostname===a:bl(o,i)}catch{}return!1}else{let u,s=i;i.includes("://")?u=i.split("://")[0]:(u="*",i="https://"+i);let g=i.replace(/\*/g,ta),m;try{m=new URL(g)}catch{return re.debug("invalid match pattern",g,"raw match value:",s),!1}let d=m.hostname,p=m.pathname;p==="/"&&(s.replace("://","").includes("/")||(p="/*"));let A=hl(u+":",ea(d),ea(p));if(A){let _=new URL(o);return _.port="",A.test(_.href)}else return!1}});if(c)return c}return null}function ea(e){return e.replace(ta,"*")}function hl(e,t,r){let n="^";return e==="*:"?n+="(http:|https:|file:)":n+=e,n+="//",t&&(e==="file:"||(t==="*"?n+="[^/]+?":(t.match(/^\*\./)&&(n+="[^/]*?",t=t.substring(2)),n+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),r?r==="*"||r==="/*"?n+="(/.*)?":r.includes("*")?(n+=r.replace(/\*/g,".*?"),n+="/?"):n+=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):n+="/?",n+="$",new RegExp(n)}function ra(e,t){return ml(e,t)!==null}function bl(e,t){let r=new URL(e),n=new URL(t);return r.hostname===n.hostname&&r.pathname===n.pathname&&r.protocol===n.protocol&&r.port===n.port}function na(e,t){let r=new Map;for(let a of t)r.set(a.header.toLowerCase(),a);let n=[],o=e.filter(a=>{let c=r.get(a.name.toLowerCase());if(c){if(c.operation==="remove")return!1;if(c.operation==="set")return!1}return!0});for(let a of t)a.operation==="set"&&n.push({name:a.header,value:a.value||""});return o.concat(n)}var Bt=[{id:1,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://httpstat.us/429"},{header:"origin",operation:"set",value:"https://httpstat.us/429"},{header:"DNT",operation:"set",value:"1"},{header:"cookie",operation:"remove"},{header:"sec-fetch-site",operation:"set",value:"same-site"}]},condition:{urlFilter:"https://httpstat.us/429",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:2,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"https://www.deepl.com"},{header:"DNT",operation:"set",value:"1"},{header:"cookie",operation:"remove"},{header:"sec-fetch-site",operation:"set",value:"same-site"}]},condition:{urlFilter:"https://www2.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:3,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://transmart.qq.com/api/imt",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:4,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://klgfhbiooeogdfodpopgppeadghjjemk"}]},condition:{urlFilter:"https://translate.volcengine.com/crx/translate/v1/",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}}];var vt=new Map,wt=class{constructor(t,r=!1){this.logger=new xt,r&&this.logger.setLevel("debug"),this.fromType=t,vt.has(t)||(vt.set(t,new Map),O.runtime.onMessage.addListener((n,o,a)=>{let c=n.from,i=n.to,l,u,s;o.tab&&o.tab.id&&(l=o.tab.id,c=`${c}:${l}`,u=o.tab.url,s=o.tab.active),this.logger.debug(`${n.to} received message [${n.payload.method}] from ${n.from}`,n.payload.data?n.payload.data:" ");let g=zr(i),{type:m,name:d}=g;if(m!==t)return!1;let p=zr(c),_=vt.get(m).get(d);if(!_)return this.logger.debug(`no message handler for ${m}:${i}`),a({ok:!1,errorName:"notActive",errorMessage:`${i} is not active, from ${c} ${n.payload.method}`}),!1;let{messageHandler:f,sync:w}=_,k={type:t,name:p.name,id:l,url:u,active:s};if(w){try{let S=f(n.payload,k);a({ok:!0,data:S})}catch(S){a({ok:!1,errorName:S.name,errorMessage:S.message,errorDetails:S.details})}return!1}else return f(n.payload,k).then(S=>{a({ok:!0,data:S})}).catch(S=>{a({ok:!1,errorName:S.name,errorMessage:S.message,errorDetails:S.details})}),!0}))}getConnection(t,r,n){let o=!1;n&&n.sync&&(o=!0);let a=this.fromType,c=vt.get(a);if(c.has(t))return c.get(t).connectionInstance;{let i=new Ur(`${a}:${t}`,this.logger);return vt.get(a).set(t,{messageHandler:r,sync:o,connectionInstance:i}),i}}},Ur=class{constructor(t,r){this.from=t,this.logger=r}async sendMessage(t,r){let n=zr(t),{type:o,id:a}=n;if(o!=="content_script"){let c={to:t,from:this.from,payload:r};this.logger.debug(`${c.from} send message [${c.payload.method}] to ${c.to}`,c.payload.data?c.payload.data:" ");try{let i=await O.runtime.sendMessage(c);return oa(c,i,this.logger)}catch(i){if(o==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(r)}`;return this.logger.debug(l,r,t,i),Promise.resolve({message:l})}else throw i}}else{let c={from:this.from,to:t,payload:r};this.logger.debug(`${c.from} send message [${c.payload.method}] to ${c.to}`,c.payload.data?c.payload.data:" ");let i=await O.tabs.sendMessage(a,c);return oa(c,i,this.logger)}}};function oa(e,t,r){if(t.ok)return r.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new ot(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function zr(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let r={type:t[0],name:t[1]};if(t[0]==="content_script"){let n=parseInt(t[2]);if(!isNaN(n))r.id=n;else throw new Error("tab id not a valid number")}return r}function Fe(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function yl(e,t){return e<<t|e>>>32-t}function Ut(e,t,r,n,o,a){return Fe(yl(Fe(Fe(t,e),Fe(n,a)),o),r)}function ge(e,t,r,n,o,a,c){return Ut(t&r|~t&n,e,t,o,a,c)}function pe(e,t,r,n,o,a,c){return Ut(t&n|r&~n,e,t,o,a,c)}function me(e,t,r,n,o,a,c){return Ut(t^r^n,e,t,o,a,c)}function he(e,t,r,n,o,a,c){return Ut(r^(t|~n),e,t,o,a,c)}function Ft(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var r,n,o,a,c,i=1732584193,l=-271733879,u=-1732584194,s=271733878;for(r=0;r<e.length;r+=16)n=i,o=l,a=u,c=s,i=ge(i,l,u,s,e[r],7,-680876936),s=ge(s,i,l,u,e[r+1],12,-389564586),u=ge(u,s,i,l,e[r+2],17,606105819),l=ge(l,u,s,i,e[r+3],22,-1044525330),i=ge(i,l,u,s,e[r+4],7,-176418897),s=ge(s,i,l,u,e[r+5],12,1200080426),u=ge(u,s,i,l,e[r+6],17,-1473231341),l=ge(l,u,s,i,e[r+7],22,-45705983),i=ge(i,l,u,s,e[r+8],7,1770035416),s=ge(s,i,l,u,e[r+9],12,-1958414417),u=ge(u,s,i,l,e[r+10],17,-42063),l=ge(l,u,s,i,e[r+11],22,-1990404162),i=ge(i,l,u,s,e[r+12],7,1804603682),s=ge(s,i,l,u,e[r+13],12,-40341101),u=ge(u,s,i,l,e[r+14],17,-1502002290),l=ge(l,u,s,i,e[r+15],22,1236535329),i=pe(i,l,u,s,e[r+1],5,-165796510),s=pe(s,i,l,u,e[r+6],9,-1069501632),u=pe(u,s,i,l,e[r+11],14,643717713),l=pe(l,u,s,i,e[r],20,-373897302),i=pe(i,l,u,s,e[r+5],5,-701558691),s=pe(s,i,l,u,e[r+10],9,38016083),u=pe(u,s,i,l,e[r+15],14,-660478335),l=pe(l,u,s,i,e[r+4],20,-405537848),i=pe(i,l,u,s,e[r+9],5,568446438),s=pe(s,i,l,u,e[r+14],9,-1019803690),u=pe(u,s,i,l,e[r+3],14,-187363961),l=pe(l,u,s,i,e[r+8],20,1163531501),i=pe(i,l,u,s,e[r+13],5,-1444681467),s=pe(s,i,l,u,e[r+2],9,-51403784),u=pe(u,s,i,l,e[r+7],14,1735328473),l=pe(l,u,s,i,e[r+12],20,-1926607734),i=me(i,l,u,s,e[r+5],4,-378558),s=me(s,i,l,u,e[r+8],11,-2022574463),u=me(u,s,i,l,e[r+11],16,1839030562),l=me(l,u,s,i,e[r+14],23,-35309556),i=me(i,l,u,s,e[r+1],4,-1530992060),s=me(s,i,l,u,e[r+4],11,1272893353),u=me(u,s,i,l,e[r+7],16,-155497632),l=me(l,u,s,i,e[r+10],23,-1094730640),i=me(i,l,u,s,e[r+13],4,681279174),s=me(s,i,l,u,e[r],11,-358537222),u=me(u,s,i,l,e[r+3],16,-722521979),l=me(l,u,s,i,e[r+6],23,76029189),i=me(i,l,u,s,e[r+9],4,-640364487),s=me(s,i,l,u,e[r+12],11,-421815835),u=me(u,s,i,l,e[r+15],16,530742520),l=me(l,u,s,i,e[r+2],23,-995338651),i=he(i,l,u,s,e[r],6,-198630844),s=he(s,i,l,u,e[r+7],10,1126891415),u=he(u,s,i,l,e[r+14],15,-1416354905),l=he(l,u,s,i,e[r+5],21,-57434055),i=he(i,l,u,s,e[r+12],6,1700485571),s=he(s,i,l,u,e[r+3],10,-1894986606),u=he(u,s,i,l,e[r+10],15,-1051523),l=he(l,u,s,i,e[r+1],21,-2054922799),i=he(i,l,u,s,e[r+8],6,1873313359),s=he(s,i,l,u,e[r+15],10,-30611744),u=he(u,s,i,l,e[r+6],15,-1560198380),l=he(l,u,s,i,e[r+13],21,1309151649),i=he(i,l,u,s,e[r+4],6,-145523070),s=he(s,i,l,u,e[r+11],10,-1120210379),u=he(u,s,i,l,e[r+2],15,718787259),l=he(l,u,s,i,e[r+9],21,-343485551),i=Fe(i,n),l=Fe(l,o),u=Fe(u,a),s=Fe(s,c);return[i,l,u,s]}function aa(e){var t,r="",n=e.length*32;for(t=0;t<n;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function Hr(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var n=e.length*8;for(t=0;t<n;t+=8)r[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return r}function xl(e){return aa(Ft(Hr(e),e.length*8))}function vl(e,t){var r,n=Hr(e),o=[],a=[],c;for(o[15]=a[15]=void 0,n.length>16&&(n=Ft(n,e.length*8)),r=0;r<16;r+=1)o[r]=n[r]^909522486,a[r]=n[r]^1549556828;return c=Ft(o.concat(Hr(t)),512+t.length*8),aa(Ft(a.concat(c),512+128))}function ia(e){var t="0123456789abcdef",r="",n,o;for(o=0;o<e.length;o+=1)n=e.charCodeAt(o),r+=t.charAt(n>>>4&15)+t.charAt(n&15);return r}function Wr(e){return unescape(encodeURIComponent(e))}function sa(e){return xl(Wr(e))}function wl(e){return ia(sa(e))}function la(e,t){return vl(Wr(e),Wr(t))}function Tl(e,t){return ia(la(e,t))}function ca(e,t,r){return t?r?la(t,e):Tl(t,e):r?sa(e):wl(e)}async function Vr(e){if(Math.abs(e)<1024)return e+" B";let r=["KB","MB","GB","TB","PB","EB","ZB","YB"],n=-1;do e/=1024,++n;while(Math.abs(e)>=1024&&n<r.length-1);return e.toFixed(1)+" "+r[n]}var at=[];async function Tt(e,t){return await new Promise((r,n)=>{let o=e,a=1,c=indexedDB.open(o,a);c.onsuccess=i=>{r(c.result)},c.onerror=i=>{console.error("onerror: Error opening the database, switching to non-database mode",i),n()},c.onupgradeneeded=i=>{let l=c.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function ua(e){let t=`${ve}-${e.service}@${e.from}->${e.to}`;return await Al(t,e)}async function da(e){let t=ca(e.originalText),r=`${ve}-${e.service}@${e.from}->${e.to}`;return await _l(r,t)}async function _l(e,t){let r=await Tt(e);return await new Promise((n,o)=>{if(!r)return o();let a="cache",i=r.transaction([a],"readonly").objectStore(a).get(t);i.onsuccess=l=>{r.close();let u=i.result;n(u)},i.onerror=l=>{r.close(),console.error("queryInDB->onerror:",l),o()}})}async function Al(e,t){let r=await Tt(e);return(await fa()).includes(e)||await Sl(e),await new Promise(o=>{if(!r)return o(!1);let a="cache",i=r.transaction([a],"readwrite").objectStore(a).put(t);i.onsuccess=l=>{r.close(),o(!0)},i.onerror=l=>{console.error("addInDB->onerror:",l),r.close(),o(!1)}})}async function Sl(e){let t="cache_list",r=await Tt(ve+"-cacheList",t),o=r.transaction([t],"readwrite").objectStore(t).put({key:e});o.onsuccess=a=>{r.close(),at.push(e)},o.onerror=a=>{r.close(),console.error(a)}}async function fa(){if(at&&at.length>0)return at;let e=await Tt(ve+"-cacheList","cache_list");return at=await new Promise(t=>{let r="cache_list",o=e.transaction([r],"readonly").objectStore(r).getAllKeys();o.onsuccess=a=>{e.close(),t(o.result)},o.onerror=a=>{e.close(),console.error(a),t([])}}),at}async function ga(){try{let e=[];(await fa()).forEach(n=>{e.push(kl(n))});let r=await Promise.all(e);return Vr(r.reduce((n,o)=>n+o,0))}catch(e){return console.error(e),Vr(0)}}async function kl(e){let t=await Tt(e),n=[...t.objectStoreNames].reduce((c,i)=>{let l=Cl(t,i);return c.push(l),c},[]),o=await Promise.all(n);return t.close(),o.reduce((c,i)=>c+i,0)}async function Cl(e,t){return await new Promise((r,n)=>{if(e==null)return n();let o=0,a=e.transaction([t]).objectStore(t).openCursor();a.onsuccess=c=>{let i=a.result;if(i){let l=i.value;o+=JSON.stringify(l).length,i.continue()}else r(o)},a.onerror=c=>n("error in "+t+": "+c)})}var zt,El=async function(e,t){let{method:r,data:n}=e;if(re.debug("background received message",r,n||" "),r==="mock")await Jt(150);else{if(r==="queryParagraphCache")return da(n);if(r==="setParagraphCache")return ua(n);if(r==="calculateSize")return ga();if(r==="fetch")return Qo(n);if(r==="getConfig")return Ke();if(r==="getLocalConfig")return mn();if(r==="openOptionsPage")O.runtime.openOptionsPage();else{if(r==="setLocalConfig")return hn(n);if(r==="detectLanguage"){let{text:o}=n;try{let a=await O.i18n.detectLanguage(o);return a.languages.length>0?et(a.languages[0].language):"auto"}catch(a){return re.debug("detect language error",a),"auto"}}else if(r==="detectTabLanguage")try{let o=await O.tabs.detectLanguage(t.id);return et(o)}catch(o){return re.debug("detect tab language error, use auto ",o),"auto"}}}};function pa(){qr();let e=O.runtime.getManifest();if(e.manifest_version>2,e.manifest_version===2){let t=Bt.map(n=>n.condition.urlFilter),r=Bt.reduce((n,o)=>(o.condition.resourceTypes.forEach(a=>{n.includes(a)||n.push(a)}),n),[]);O.webRequest.onBeforeSendHeaders.addListener(function(n){if(!(n.originUrl&&n.originUrl.startsWith("http"))&&!!n.originUrl&&n.requestHeaders)for(let o=0;o<t.length;o++){let a=Bt[o];if(a.condition.urlFilter&&ra(n.url,a.condition.urlFilter))return{requestHeaders:na(n.requestHeaders,a.action.requestHeaders)}}},{urls:t,types:r},["blocking","requestHeaders"])}}function qr(){return zt||(zt=new wt("background",!1).getConnection("main",El),zt)}function ma(){typeof O.commands<"u"&&O.commands.onCommand.addListener(async e=>{if(re.debug(`received command: ${e}`),e==="toggleTranslatePage"){let t=await O.tabs.query({active:!0,currentWindow:!0});if(t.length===0||typeof t[0].id>"u")return;let n=t[0].url;if(Xo(n)){O.tabs.create({url:Jo(n)});return}}await Kr({method:e})})}async function Kr(e){let r=(await O.tabs.query({currentWindow:!0,active:!0}))[0].id;qr().sendMessage(`content_script:main:${r}`,e).catch(o=>{re.error("send content message request failed",e,o)})}function Ml(e,t){let r=e;return t&&Object.keys(t).forEach(n=>{let o=t[n],a=new RegExp("{"+n+"}","gm");r=r.replace(a,o.toString())}),r}function ha(e,t,r){let n=e[t];if(!n)return r;let o=r.split("."),a="";do{a+=o.shift();let c=n[a];c!==void 0&&(typeof c=="object"||!o.length)?(n=c,a=""):o.length?a+=".":n=r}while(o.length);return n}function ba(e,t,r,n,o){if(!e.hasOwnProperty(r))return t;let a=ha(e,r,t);return a===t&&r!==n&&(a=ha(e,n,t)),Ml(a,o)}var ya={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},Ll={...Ve,"zh-CN":{...ya["zh-CN"],...Ve["zh-CN"]},"zh-TW":{...ya["zh-TW"],...Ve["zh-TW"]}};function xa(e,t,r){return ba(Ll,e,t,St,r)}var Gr=cn()?["action"]:["browser_action","page_action"],va=[{id:"toggleTranslatePage",contexts:["page","frame",...Gr]},{id:qt,contexts:Gr},{id:Kt,contexts:Gr}];async function Yr(e){re.debug("createContextMenu",va),await O.contextMenus.removeAll();for(let t of va)O.contextMenus.create({id:t.id,title:xa(`browser.${t.id}`,e.interfaceLanguage),contexts:t.contexts},()=>O.runtime.lastError)}async function wa(e){O.contextMenus.onClicked.addListener(t=>{if(t.menuItemId===qt)O.runtime.openOptionsPage();else if(t.menuItemId===Kt){let r=O.runtime.getURL(_t);O.tabs.create({url:r})}else Kr({method:t.menuItemId})}),await Yr(e)}function Jr(){Ke().then(e=>{Yr(e)}).catch(e=>{re.error("create menu error",e)})}function Ta(){O.runtime.onInstalled.addListener(e=>{re.debug(`onInstalled reason: ${e.reason}`),e.reason=="install"?(O.tabs.create({url:O.runtime.getURL("options.html")}),Jr()):(e.reason=="update"&&O.runtime.getManifest().version!=e.previousVersion,Jr())})}async function Pl(){Ta(),ma();let e=await Ke();wa(e).catch(t=>{re.error("setup context menu error",t)}),e.debug?re.setLevel("debug"):re.setLevel("info")}pa();Pl();
