var Af=Object.defineProperty;var Cf=(e,t)=>{for(var n in t)Af(e,n,{get:t[n],enumerable:!0})};var y={BUILD_TIME:"2023-01-31T09:25:54.435Z",VERSION:"0.2.35",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
.immersive-translate-target-translation-theme-mask-inner:hover {
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
`,MOCK:"0",DEBUG:"0"};var kf=Object.create,Li=Object.defineProperty,Pf=Object.getOwnPropertyDescriptor,Ai=Object.getOwnPropertyNames,Rf=Object.getPrototypeOf,Df=Object.prototype.hasOwnProperty,Of=(e,t)=>function(){return t||(0,e[Ai(e)[0]])((t={exports:{}}).exports,t),t.exports},If=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ai(t))!Df.call(e,a)&&a!==n&&Li(e,a,{get:()=>t[a],enumerable:!(r=Pf(t,a))||r.enumerable});return e},Nf=(e,t,n)=>(n=e!=null?kf(Rf(e)):{},If(t||!e||!e.__esModule?Li(n,"default",{value:e,enumerable:!0}):n,e)),Ff=Of({"esm-build-3120606719048d5175703f3b3f8812d3453a0d07-9fbf1061/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var a={exports:{}};r(a),n.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",a=o=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(w,R=void 0){super(R),this.createItem=w}get(w){return this.has(w)||this.set(w,this.createItem(w)),super.get(w)}}let l=S=>S&&typeof S=="object"&&typeof S.then=="function",u=(S,w)=>(...R)=>{o.runtime.lastError?S.reject(new Error(o.runtime.lastError.message)):w.singleCallbackArg||R.length<=1&&w.singleCallbackArg!==!1?S.resolve(R[0]):S.resolve(R)},c=S=>S==1?"argument":"arguments",g=(S,w)=>function(_,...U){if(U.length<w.minArgs)throw new Error(`Expected at least ${w.minArgs} ${c(w.minArgs)} for ${S}(), got ${U.length}`);if(U.length>w.maxArgs)throw new Error(`Expected at most ${w.maxArgs} ${c(w.maxArgs)} for ${S}(), got ${U.length}`);return new Promise((K,M)=>{if(w.fallbackToNoCallback)try{_[S](...U,u({resolve:K,reject:M},w))}catch(H){console.warn(`${S} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,H),_[S](...U),w.fallbackToNoCallback=!1,w.noCallback=!0,K()}else w.noCallback?(_[S](...U),K()):_[S](...U,u({resolve:K,reject:M},w))})},d=(S,w,R)=>new Proxy(w,{apply(_,U,K){return R.call(U,S,...K)}}),f=Function.call.bind(Object.prototype.hasOwnProperty),m=(S,w={},R={})=>{let _=Object.create(null),U={has(M,H){return H in S||H in _},get(M,H,V){if(H in _)return _[H];if(!(H in S))return;let J=S[H];if(typeof J=="function")if(typeof w[H]=="function")J=d(S,S[H],w[H]);else if(f(R,H)){let Pe=g(H,R[H]);J=d(S,S[H],Pe)}else J=J.bind(S);else if(typeof J=="object"&&J!==null&&(f(w,H)||f(R,H)))J=m(J,w[H],R[H]);else if(f(R,"*"))J=m(J,w[H],R["*"]);else return Object.defineProperty(_,H,{configurable:!0,enumerable:!0,get(){return S[H]},set(Pe){S[H]=Pe}}),J;return _[H]=J,J},set(M,H,V,J){return H in _?_[H]=V:S[H]=V,!0},defineProperty(M,H,V){return Reflect.defineProperty(_,H,V)},deleteProperty(M,H){return Reflect.deleteProperty(_,H)}},K=Object.create(S);return new Proxy(K,U)},b=S=>({addListener(w,R,..._){w.addListener(S.get(R),..._)},hasListener(w,R){return w.hasListener(S.get(R))},removeListener(w,R){w.removeListener(S.get(R))}}),x=new s(S=>typeof S!="function"?S:function(R){let _=m(R,{},{getContent:{minArgs:0,maxArgs:0}});S(_)}),p=new s(S=>typeof S!="function"?S:function(R,_,U){let K=!1,M,H=new Promise(Ye=>{M=function(Se){K=!0,Ye(Se)}}),V;try{V=S(R,_,M)}catch(Ye){V=Promise.reject(Ye)}let J=V!==!0&&l(V);if(V!==!0&&!J&&!K)return!1;let Pe=Ye=>{Ye.then(Se=>{U(Se)},Se=>{let pe;Se&&(Se instanceof Error||typeof Se.message=="string")?pe=Se.message:pe="An unexpected error occurred",U({__mozWebExtensionPolyfillReject__:!0,message:pe})}).catch(Se=>{console.error("Failed to send onMessage rejected reply",Se)})};return Pe(J?V:H),!0}),h=({reject:S,resolve:w},R)=>{o.runtime.lastError?o.runtime.lastError.message===r?w():S(new Error(o.runtime.lastError.message)):R&&R.__mozWebExtensionPolyfillReject__?S(new Error(R.message)):w(R)},T=(S,w,R,..._)=>{if(_.length<w.minArgs)throw new Error(`Expected at least ${w.minArgs} ${c(w.minArgs)} for ${S}(), got ${_.length}`);if(_.length>w.maxArgs)throw new Error(`Expected at most ${w.maxArgs} ${c(w.maxArgs)} for ${S}(), got ${_.length}`);return new Promise((U,K)=>{let M=h.bind(null,{resolve:U,reject:K});_.push(M),R.sendMessage(..._)})},E={devtools:{network:{onRequestFinished:b(x)}},runtime:{onMessage:b(p),onMessageExternal:b(p),sendMessage:T.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:T.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},I={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":I},services:{"*":I},websites:{"*":I}},m(o,E,i)};n.exports=a(chrome)}else n.exports=globalThis.browser})}}),Hf=Nf(Ff()),{default:_i,...Bf}=Hf,Ya=_i!==void 0?_i:Bf;globalThis.immersiveTranslateBrowserAPI=Ya;var Ci={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",isShowContextMenu:"\u521B\u5EFA\u53F3\u952E\u83DC\u5355",aboutLabel:"\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9",aboutIntro:"\u8BE5\u6269\u5C55\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u9891\u9053</4>\u83B7\u53D6\u6700\u65B0\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4"};var Mi={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var ki={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translationServices.niu":"Niu Translation","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var $f=[{code:"zh-CN",messages:Ci},{code:"zh-TW",messages:Mi},{code:"en",messages:ki}],Xt={};for(let e of $f)Xt[e.code]=e.messages;var vt="Immersive Translate",fe="immersive-translate";var de="immersiveTranslate",Cr=de+"IframeMessage",Xa=`${de}Container`,Qt=`${de}SpecifiedContainer`,Wn="buildinConfig",zn="localConfig",Qa="openOptionsPage",Za="openAboutPage";var Mr=`${de}PageTranslatedStatus`,Pi=`${de}PageUrlChanged`,Mt=`${de}ReceiveCommand`,M0=`${de}PopupReceiveMessage`,kr="immersive-translate.owenyoung.com",k0=`https://${kr}/`,qn=`https://${kr}/buildin_config.json`,Zt=`${de}Mark`,eo="immersiveTranslateEffect",Ce=`${de}Root`,to=`data-${fe}-effect`,yn=`${de}TranslatedMark`,en=`${de}ParagraphId`,et=`${de}AtomicBlockMark`,ct=`${de}ExcludeMark`,Ri=`data-${fe}-exclude-mark`,Pr=`${de}StayOriginalMark`,xn=`${de}PreWhitespaceMark`,St=`${de}InlineMark`,tn=`${de}BlockMark`,Vn=`${de}Left`,Rr=`${de}Right`,P0=`${de}Width`,R0=`${de}Height`,Di=`${de}Top`,Oi=`${de}FontSize`,Kn="lastRunTime",no=`${de}GlobalStyleMark`,Ii=["@","#"],Dr=" --- ",ro=`
`,Xe=`${fe}-target-wrapper`,Or=`${fe}-pdf-target-container`,Ni=`${fe}-target-inner`,D0=`${fe}-source-wrapper`,ao=`${fe}-target-translation-block-wrapper`,Fi=`${fe}-target-translation-vertical-block-wrapper`,Hi=`${fe}-target-translation-pdf-block-wrapper`,Bi=`${fe}-target-translation-pre-whitespace`,oo=`${fe}-target-translation-inline-wrapper`;var kt=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],so={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var $i=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var Ir="zh-CN";function Et(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():y}var ne=Et();function ge(){return ne.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Ui(){return typeof Deno<"u"}function Tn(){try{return globalThis.self!==globalThis.top}catch{return!0}}var Uf=Et(),Gn=Uf.PROD==="1";function ji(e,t,n){let r=e.querySelectorAll("footer"),a=e.querySelectorAll("aside"),o=Array.from(r).concat(Array.from(a)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),l=[];for(let c of i)s.length>0&&s[0].contains(c)||l.push(c);for(let c=0;c<t.length;c++){let g=t[c].element;for(let d=c+1;d<t.length;d++){let f=t[d].element;if(g.contains(f))t.splice(d,1),d--;else if(f.contains(g)){t.splice(c,1),c--;break}else g===f&&(t.splice(d,1),d--)}}return t.filter(c=>{let g=c.element;if(c.reserve)return!0;let d=!1,f=!1;for(let m of o)if(g===m||m.contains(g)){d=!0;break}if(d)return!1;for(let m of l){if(g.nodeName==="H1")continue;let b=m.querySelector("h1");if(!(b&&Vi(b.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(g===m||m.contains(g))){f=!0;break}}return!f}).map(c=>c.element)}function Pt(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function Nr(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function io(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function Jn(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function Ve(e,t){let n=[];for(let r of t){let a=e.querySelectorAll(r);for(let o of a)n.push(o)}return n}function jf(e,t){let n=function(o){return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE?o.nodeType===Node.ELEMENT_NODE&&Ke(o,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;r.nextNode();){let o=r.currentNode;if(o.nodeType===Node.ELEMENT_NODE){if(ae(o,St)){if(a===!0)return!0;continue}if(!t.inlineTags.includes(o.nodeName))return!1}}return!0}function ut(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?ae(e,tn)||e.nodeName==="BR"?!1:ae(e,St)?!0:jf(e,t):ae(e,St):!1}function Wi(e,t){for(let n of t)if(n===e)return!0;return!1}function zi(e,t){return!!t.metaTags.includes(e.nodeName)}function Ke(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:a}=t,o=[];return n&&a&&a.length>0?o=a||[]:o=a.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&ae(e,ct,!0)?!0:e.nodeType===Node.ELEMENT_NODE&&ae(e,Qt)?!1:!!o.includes(e.nodeName)}function qi(e,t,n,r){let a=Yn(r),o=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||uo(s)||lo(s)||co(s)||o.test(s)?!1:Vi(i,t,n)}function Vi(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function lo(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function co(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function uo(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function Ki(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function ae(e,t,n=!1){return Wf(e,t,"1",n)}function Wf(e,t,n,r=!1){return Gn&&!r?e[Ce]?!!(e[Ce]&&e[Ce][t]===n):!1:e.dataset[t]===n}function Gi(e,t,n=!1){return Gn&&!n?e[Ce]?!!(e[Ce]&&e[Ce][t]):!1:e.dataset[t]!==void 0}function nn(e){return(e.innerText||e.textContent||"").trim()}function Fr(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ie(e,t,n,r=!1){e.isContentEditable||(e.dataset[eo]||(e.dataset[eo]="1"),Gn&&!r?(e[Ce]||(e[Ce]={}),e[Ce][t]||(e[Ce][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function Ji(e,t,n=!1){if(Gn&&!n){if(!e[Ce]||!e[Ce][t])return;delete e[Ce][t]}else delete e.dataset[t]}function Rt(e,t,n=!1){return Gn&&!n?!e[Ce]||!e[Ce][t]?void 0:e[Ce][t]:e.dataset[t]}function wn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||ae(e,Pr))&&(n=!0),n}function Yi(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function Yn(e){let{config:t}=e,n=Ii;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function Hr(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function Xi(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function We(){if(!Tn())return globalThis.location.href;try{let t=globalThis.location.href;if(new URL(t).protocol==="about:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let r="";try{r=globalThis.parent.location.href}catch{}return r||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function go(e,t){e.head.appendChild(e.createElement("style")).innerHTML=t}function fo(e){return e.getAttribute("src")?!1:!!(e.getAttribute("srcdoc")&&e.contentDocument&&e.contentDocument.body)}function mo(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:a,additionalInlineSelectors:o,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:l,globalStyles:u,stayOriginalTags:c,stayOriginalSelectors:g,globalAttributes:d}=t,f=Object.keys(u);if(f.length>0)for(let _ of f){let U=Ve(document.body,[_]);for(let K of U)if(!ae(K,no)){ie(K,no,"1");let M=u[_];K.style.cssText+=M}}let m=Object.keys(d);if(m.length>0)for(let _ of m){let U=d[_],K=Object.keys(U),M=Ve(document.body,[_]);for(let H of M)for(let V of K){let J=U[V];H.getAttribute(V)!==J&&(J===null?H.removeAttribute(V):H.setAttribute(V,J))}}let b=[...n,...r],x=[...a,...o],p=[...s],h=l.map(_=>_.toLowerCase()),T=i;Ve(document.body,b).forEach(_=>{ae(_,ct,!0)||ie(_,ct,"1",!0)});let I=[];if(p.length>0&&(I=Ve(document.body,p).filter(_=>!ae(_,et))),h.length>0){let _=c.reduce((M,H)=>{let V=H.toLowerCase();return M.push(`<${V}>`,`</${V}>`,`<${V} />`),M},[]),U=[">http://",">https://"];_.push(...U);let K=Ve(document.body,h).filter(M=>{if(ae(M,et))return!1;{let V=M.innerHTML;return!_.some(Pe=>V.includes(Pe))}});I.push(...K)}I.forEach(_=>{ae(_,et)||ie(_,et,"1")});let S=[];if(x.length>0)for(let _ of e)S.push(...Ve(_,x));S.forEach(_=>{ie(_,St,"1")});let w=[];if(T.length>0)for(let _ of e)w.push(...Ve(_,T));w.forEach(_=>{ie(_,tn,"1")});let R=[];if(g.length>0)for(let _ of e)R.push(...Ve(_,g));R.forEach(_=>{ie(_,Pr,"1")})}function Qi(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}function rn(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=kt.map(a=>a.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":kt[a]}else return"auto";else return kt[r]}var po=/iPhone/i,Zi=/iPod/i,el=/iPad/i,tl=/\biOS-universal(?:.+)Mac\b/i,ho=/\bAndroid(?:.+)Mobile\b/i,nl=/Android/i,vn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Br=/Silk/i,_t=/Windows Phone/i,rl=/\bWindows(?:.+)ARM\b/i,al=/BlackBerry/i,ol=/BB10/i,sl=/Opera Mini/i,il=/\b(CriOS|Chrome)(?:.+)Mobile/i,ll=/Mobile(?:.+)Firefox\b/i,cl=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function zf(e){return t=>t.test(e)}function $r(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let a=zf(n),o={apple:{phone:a(po)&&!a(_t),ipod:a(Zi),tablet:!a(po)&&(a(el)||cl(t))&&!a(_t),universal:a(tl),device:(a(po)||a(Zi)||a(el)||a(tl)||cl(t))&&!a(_t)},amazon:{phone:a(vn),tablet:!a(vn)&&a(Br),device:a(vn)||a(Br)},android:{phone:!a(_t)&&a(vn)||!a(_t)&&a(ho),tablet:!a(_t)&&!a(vn)&&!a(ho)&&(a(Br)||a(nl)),device:!a(_t)&&(a(vn)||a(Br)||a(ho)||a(nl))||a(/\bokhttp\b/i)},windows:{phone:a(_t),tablet:a(rl),device:a(_t)||a(rl)},other:{blackberry:a(al),blackberry10:a(ol),opera:a(sl),firefox:a(ll),chrome:a(il),device:a(al)||a(ol)||a(sl)||a(ll)||a(il)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var bo="DENO",yo="CHROME",Ur="FIREFOX";function qf(e){let t=yo;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=Ur:/deno/i.test(n)&&(t=bo)}catch{}return e===yo&&t===yo||e===Ur&&t===Ur||e===bo&&t===bo}function ul(){return typeof Deno<"u"}function gl(){return qf(Ur)}function fl(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var dl={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},ml={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:dl,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:dl,query:()=>{},sendMessage:()=>{}}};var Y;ul()?Y=ml:Y=globalThis.immersiveTranslateBrowserAPI;var xo={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],excludeSelectors:["[class^='lln-']"],extraBlockSelector:[".ytd-transcript-segment-renderer"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeSelectors:[".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}}]};function To(e){return Array.isArray(e)?e:e?[e]:[]}function wo(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function Dt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function jr(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let a={...e};return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))a[i]=s;else if(i.startsWith("additional")){let l=To(s);a[i]=Array.from(new Set([...a[i],...l]))}else a[i]=To(s)}),a}function Vf(){if(ne.PROD==="1")return{};let e={};if(ne.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&ne.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:ne.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:ne.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&ne.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:ne.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:ne.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:ne.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:ne.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&ne.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:ne.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:ne.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&ne.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:ne.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:ne.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:ne.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return ne.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=ne.IMMERSIVE_TRANSLATE_SERVICE),ne.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),ne.MOCK==="1"&&(e.translationService="mock"),e}async function Xn(){let e=await Y.storage.local.get(zn);if(e[zn]){let t=e[zn],n=t.tempTranslationUrlMatches||[],r=n.filter(i=>i.expiredAt>Date.now()),a=!1;r.length!==n.length&&(n=r,a=!0);let o={...t,tempTranslationUrlMatches:[...n]};return a&&await Qn(o),o}else return{}}async function Qn(e){await Y.storage.local.set({[zn]:e})}async function pl(e){await Y.storage.local.set({[Wn]:e})}async function Zn(){let e=await Y.storage.local.get(Wn),t={...xo,buildinConfigUpdatedAt:ne.BUILD_TIME};if(e[Wn]){let m=e[Wn];if(m&&m.buildinConfigUpdatedAt){let b=new Date(m.buildinConfigUpdatedAt),x=new Date(t.buildinConfigUpdatedAt);b>x&&(t=m)}}let n={};if(!ge()&&Y.commands&&Y.commands.getAll){let m=await Y.commands.getAll();for(let b of m)b.name&&b.shortcut&&(n[b.name]=b.shortcut)}let r=Gf(),a=Vf(),i=(await Y.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},l=await Xn(),u=new Date;if(l&&l.tempTranslationUrlMatches&&l.tempTranslationUrlMatches.length>0){let m=l.tempTranslationUrlMatches.filter(b=>new Date(b.expiredAt)>u);if(m.length>0){let b=i.translationUrlPattern?i.translationUrlPattern?.matches||[]:[],x=Array.isArray(b)?b:[b],p=Array.from(new Set(x.concat(m.map(h=>h.match))));i.translationUrlPattern={...i.translationUrlPattern,matches:p}}}let c=Object.assign({},s,a,i);if(!c.interfaceLanguage){let m=await Kf();c.interfaceLanguage=m}let g=Object.assign(r,t),d=Object.keys(g),f=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let m of d){let b=m;if(b==="generalRule")typeof c[b]=="object"&&(g[b]=jr(r[b],c[b]));else if(b==="translationServices"){let x=c[b]||{},p=t[b]||{},h=Object.keys(p),T=Object.keys(x),E=[...new Set([...h,...T])],I={};for(let S of E)I[S]={...p[S],...x[S]};g[b]=I}else if(typeof c[b]!="string"&&typeof c[b]!="boolean"&&typeof c[b]!="number"&&f.includes(b))c[b]&&(g[b]=Object.assign(g[b],c[b])),b==="shortcuts"&&(g[b]={...g[b],...n});else if(b==="rules"){if(Array.isArray(c[b])&&(g[b]=[...c[b],...g[b]]),ne.PROD==="0"&&ne.DEV_RULES){let x=JSON.parse(ne.DEV_RULES);g[b]=[...x,...g[b]]}}else c[b]!==void 0&&(g[b]=c[b])}return g.donateUrl=t.donateUrl,g.minVersion=t.minVersion,g.feedbackUrl=t.feedbackUrl,g}var Kf=async()=>{let n=(await Y.i18n.getAcceptLanguages()).map(r=>rn(r)).find(r=>Xt[r]);return n||"en"},Gf=()=>{let e={...xo,buildinConfigUpdatedAt:ne.BUILD_TIME};return{...e,targetLanguage:Ir,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};function Sn(){let e,t="pending",n=new Promise((r,a)=>{e={async resolve(o){await o,t="fulfilled",r(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var vo=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function Wr(e,t){let n=Sn(),r=setTimeout(()=>n.reject(new vo),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function er(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,o)=>{let i=()=>{clearTimeout(l),o(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{n?.removeEventListener("abort",i),a()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var hl=class{#e=0;#t=[];#n=[];#r=Sn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=Sn()}}[Symbol.asyncIterator](){return this.iterate()}};var Ge={};Cf(Ge,{bgBlack:()=>wd,bgBlue:()=>_d,bgBrightBlack:()=>Md,bgBrightBlue:()=>Dd,bgBrightCyan:()=>Id,bgBrightGreen:()=>Pd,bgBrightMagenta:()=>Od,bgBrightRed:()=>kd,bgBrightWhite:()=>Nd,bgBrightYellow:()=>Rd,bgCyan:()=>Ad,bgGreen:()=>Sd,bgMagenta:()=>Ld,bgRed:()=>vd,bgRgb24:()=>$d,bgRgb8:()=>Hd,bgWhite:()=>Cd,bgYellow:()=>Ed,black:()=>od,blue:()=>cd,bold:()=>Qf,brightBlack:()=>xl,brightBlue:()=>bd,brightCyan:()=>xd,brightGreen:()=>pd,brightMagenta:()=>yd,brightRed:()=>md,brightWhite:()=>Td,brightYellow:()=>hd,cyan:()=>gd,dim:()=>Zf,getColorEnabled:()=>Yf,gray:()=>dd,green:()=>id,hidden:()=>rd,inverse:()=>nd,italic:()=>ed,magenta:()=>ud,red:()=>sd,reset:()=>Xf,rgb24:()=>Bd,rgb8:()=>Fd,setColorEnabled:()=>Jf,strikethrough:()=>ad,stripColor:()=>jd,underline:()=>td,white:()=>fd,yellow:()=>ld});var{Deno:bl}=globalThis,yl=typeof bl?.noColor=="boolean"?bl.noColor:!0,So=!yl;function Jf(e){yl||(So=e)}function Yf(){return So}function j(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function W(e,t){return So?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Xf(e){return W(e,j([0],0))}function Qf(e){return W(e,j([1],22))}function Zf(e){return W(e,j([2],22))}function ed(e){return W(e,j([3],23))}function td(e){return W(e,j([4],24))}function nd(e){return W(e,j([7],27))}function rd(e){return W(e,j([8],28))}function ad(e){return W(e,j([9],29))}function od(e){return W(e,j([30],39))}function sd(e){return W(e,j([31],39))}function id(e){return W(e,j([32],39))}function ld(e){return W(e,j([33],39))}function cd(e){return W(e,j([34],39))}function ud(e){return W(e,j([35],39))}function gd(e){return W(e,j([36],39))}function fd(e){return W(e,j([37],39))}function dd(e){return xl(e)}function xl(e){return W(e,j([90],39))}function md(e){return W(e,j([91],39))}function pd(e){return W(e,j([92],39))}function hd(e){return W(e,j([93],39))}function bd(e){return W(e,j([94],39))}function yd(e){return W(e,j([95],39))}function xd(e){return W(e,j([96],39))}function Td(e){return W(e,j([97],39))}function wd(e){return W(e,j([40],49))}function vd(e){return W(e,j([41],49))}function Sd(e){return W(e,j([42],49))}function Ed(e){return W(e,j([43],49))}function _d(e){return W(e,j([44],49))}function Ld(e){return W(e,j([45],49))}function Ad(e){return W(e,j([46],49))}function Cd(e){return W(e,j([47],49))}function Md(e){return W(e,j([100],49))}function kd(e){return W(e,j([101],49))}function Pd(e){return W(e,j([102],49))}function Rd(e){return W(e,j([103],49))}function Dd(e){return W(e,j([104],49))}function Od(e){return W(e,j([105],49))}function Id(e){return W(e,j([106],49))}function Nd(e){return W(e,j([107],49))}function Ot(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function Fd(e,t){return W(e,j([38,5,Ot(t)],39))}function Hd(e,t){return W(e,j([48,5,Ot(t)],49))}function Bd(e,t){return typeof t=="number"?W(e,j([38,2,t>>16&255,t>>8&255,t&255],39)):W(e,j([38,2,Ot(t.r),Ot(t.g),Ot(t.b)],39))}function $d(e,t){return typeof t=="number"?W(e,j([48,2,t>>16&255,t>>8&255,t&255],49)):W(e,j([48,2,Ot(t.r),Ot(t.g),Ot(t.b)],49))}var Ud=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function jd(e){return e.replace(Ud,"")}function It(e,t){let n=null,r=null,a=(...o)=>{a.clear(),r=()=>{a.clear(),e.call(a,...o)},n=setTimeout(r,t)};return a.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},a.flush=()=>{r?.()},Object.defineProperty(a,"pending",{get:()=>typeof n=="number"}),a}var Jr,q,El,Wd,tr,Tl,_l,Vr={},Ll=[],zd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Nt(e,t){for(var n in t)e[n]=t[n];return e}function Al(e){var t=e.parentNode;t&&t.removeChild(e)}function Cl(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Jr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return zr(e,i,r,a,null)}function zr(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++El};return a==null&&q.vnode!=null&&q.vnode(o),o}function bt(e){return e.children}function qr(e,t){this.props=e,this.context=t}function En(e,t){if(t==null)return e.__?En(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?En(e):null}function Ml(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ml(e)}}function Eo(e){(!e.__d&&(e.__d=!0)&&tr.push(e)&&!Kr.__r++||Tl!==q.debounceRendering)&&((Tl=q.debounceRendering)||setTimeout)(Kr)}function Kr(){for(var e;Kr.__r=tr.length;)e=tr.sort(function(t,n){return t.__v.__b-n.__v.__b}),tr=[],e.some(function(t){var n,r,a,o,i,s;t.__d&&(i=(o=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=Nt({},o)).__v=o.__v+1,_o(s,o,a,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??En(o),o.__h),Dl(r,o),o.__e!=i&&Ml(o)))})}function kl(e,t,n,r,a,o,i,s,l,u){var c,g,d,f,m,b,x,p=r&&r.__k||Ll,h=p.length;for(n.__k=[],c=0;c<t.length;c++)if((f=n.__k[c]=(f=t[c])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?zr(null,f,null,null,f):Array.isArray(f)?zr(bt,{children:f},null,null,null):f.__b>0?zr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(d=p[c])===null||d&&f.key==d.key&&f.type===d.type)p[c]=void 0;else for(g=0;g<h;g++){if((d=p[g])&&f.key==d.key&&f.type===d.type){p[g]=void 0;break}d=null}_o(e,f,d=d||Vr,a,o,i,s,l,u),m=f.__e,(g=f.ref)&&d.ref!=g&&(x||(x=[]),d.ref&&x.push(d.ref,null,f),x.push(g,f.__c||m,f)),m!=null?(b==null&&(b=m),typeof f.type=="function"&&f.__k===d.__k?f.__d=l=Pl(f,l,e):l=Rl(e,f,d,p,m,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=En(d))}for(n.__e=b,c=h;c--;)p[c]!=null&&(typeof n.type=="function"&&p[c].__e!=null&&p[c].__e==n.__d&&(n.__d=En(r,c+1)),Il(p[c],p[c]));if(x)for(c=0;c<x.length;c++)Ol(x[c],x[++c],x[++c])}function Pl(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?Pl(r,t,n):Rl(n,r,r,a,r.__e,t));return t}function Rl(e,t,n,r,a,o){var i,s,l;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),i=null;else{for(s=o,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==a)break e;e.insertBefore(a,o),i=o}return i!==void 0?i:a.nextSibling}function qd(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||Gr(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Gr(e,o,t[o],n[o],r)}function wl(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||zd.test(t)?n:n+"px"}function Gr(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||wl(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||wl(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Sl:vl,o):e.removeEventListener(t,o?Sl:vl,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function vl(e){this.l[e.type+!1](q.event?q.event(e):e)}function Sl(e){this.l[e.type+!0](q.event?q.event(e):e)}function _o(e,t,n,r,a,o,i,s,l){var u,c,g,d,f,m,b,x,p,h,T,E,I,S=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(u=q.__b)&&u(t);try{e:if(typeof S=="function"){if(x=t.props,p=(u=S.contextType)&&r[u.__c],h=u?p?p.props.value:u.__:r,n.__c?b=(c=t.__c=n.__c).__=c.__E:("prototype"in S&&S.prototype.render?t.__c=c=new S(x,h):(t.__c=c=new qr(x,h),c.constructor=S,c.render=Kd),p&&p.sub(c),c.props=x,c.state||(c.state={}),c.context=h,c.__n=r,g=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Nt({},c.__s)),Nt(c.__s,S.getDerivedStateFromProps(x,c.__s))),d=c.props,f=c.state,g)S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(S.getDerivedStateFromProps==null&&x!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(x,h),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(x,c.__s,h)===!1||t.__v===n.__v){c.props=x,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(w){w&&(w.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(x,c.__s,h),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,f,m)})}if(c.context=h,c.props=x,c.__v=t,c.__P=e,T=q.__r,E=0,"prototype"in S&&S.prototype.render)c.state=c.__s,c.__d=!1,T&&T(t),u=c.render(c.props,c.state,c.context);else do c.__d=!1,T&&T(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++E<25);c.state=c.__s,c.getChildContext!=null&&(r=Nt(Nt({},r),c.getChildContext())),g||c.getSnapshotBeforeUpdate==null||(m=c.getSnapshotBeforeUpdate(d,f)),I=u!=null&&u.type===bt&&u.key==null?u.props.children:u,kl(e,Array.isArray(I)?I:[I],t,n,r,a,o,i,s,l),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),b&&(c.__E=c.__=null),c.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Vd(n.__e,t,n,r,a,o,i,l);(u=q.diffed)&&u(t)}catch(w){t.__v=null,(l||o!=null)&&(t.__e=s,t.__h=!!l,o[o.indexOf(s)]=null),q.__e(w,t,n)}}function Dl(e,t){q.__c&&q.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){q.__e(r,n.__v)}})}function Vd(e,t,n,r,a,o,i,s){var l,u,c,g=n.props,d=t.props,f=t.type,m=0;if(f==="svg"&&(a=!0),o!=null){for(;m<o.length;m++)if((l=o[m])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,o[m]=null;break}}if(e==null){if(f===null)return document.createTextNode(d);e=a?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),o=null,s=!1}if(f===null)g===d||s&&e.data===d||(e.data=d);else{if(o=o&&Jr.call(e.childNodes),u=(g=n.props||Vr).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!s){if(o!=null)for(g={},m=0;m<e.attributes.length;m++)g[e.attributes[m].name]=e.attributes[m].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(qd(e,d,g,a,s),c)t.__k=[];else if(m=t.props.children,kl(e,Array.isArray(m)?m:[m],t,n,r,a&&f!=="foreignObject",o,i,o?o[0]:n.__k&&En(n,0),s),o!=null)for(m=o.length;m--;)o[m]!=null&&Al(o[m]);s||("value"in d&&(m=d.value)!==void 0&&(m!==e.value||f==="progress"&&!m||f==="option"&&m!==g.value)&&Gr(e,"value",m,g.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==e.checked&&Gr(e,"checked",m,g.checked,!1))}return e}function Ol(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){q.__e(r,n)}}function Il(e,t,n){var r,a;if(q.unmount&&q.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ol(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){q.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&Il(r[a],t,typeof e.type!="function");n||e.__e==null||Al(e.__e),e.__=e.__e=e.__d=void 0}function Kd(e,t,n){return this.constructor(e,n)}function Yr(e,t,n){var r,a,o;q.__&&q.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],_o(t,e=(!r&&n||t).__k=Cl(bt,null,[e]),a||Vr,Vr,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?Jr.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),Dl(o,e)}function Lo(e,t){var n={__c:t="__cC"+_l++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(Eo)},this.sub=function(i){a.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Jr=Ll.slice,q={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},El=0,Wd=function(e){return e!=null&&e.constructor===void 0},qr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Nt({},this.state),typeof e=="function"&&(e=e(Nt({},n),this.props)),e&&Nt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Eo(this))},qr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Eo(this))},qr.prototype.render=bt,tr=[],Kr.__r=0,_l=0;var rr,we,Ao,Nl,nr=0,Wl=[],Xr=[],Fl=q.__b,Hl=q.__r,Bl=q.diffed,$l=q.__c,Ul=q.unmount;function Zr(e,t){q.__h&&q.__h(we,e,nr||t),nr=0;var n=we.__H||(we.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Xr}),n.__[e]}function se(e){return nr=1,Gd(Vl,e)}function Gd(e,t,n){var r=Zr(rr++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Vl(void 0,t),function(o){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,o);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=we,!we.u)){we.u=!0;var a=we.shouldComponentUpdate;we.shouldComponentUpdate=function(o,i,s){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(c){return c.__c});if(l.every(function(c){return!c.__N}))return!a||a.call(this,o,i,s);var u=!1;return l.forEach(function(c){if(c.__N){var g=c.__[0];c.__=c.__N,c.__N=void 0,g!==c.__[0]&&(u=!0)}}),!!u&&(!a||a.call(this,o,i,s))}}return r.__N||r.__}function ze(e,t){var n=Zr(rr++,3);!q.__s&&ql(n.__H,t)&&(n.__=e,n.i=t,we.__H.__h.push(n))}function Mo(e){return nr=5,zl(function(){return{current:e}},[])}function zl(e,t){var n=Zr(rr++,7);return ql(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ar(e,t){return nr=8,zl(function(){return e},t)}function ko(e){var t=we.context[e.__c],n=Zr(rr++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(we)),t.props.value):e.__}function Jd(){for(var e;e=Wl.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Qr),e.__H.__h.forEach(Co),e.__H.__h=[]}catch(t){e.__H.__h=[],q.__e(t,e.__v)}}q.__b=function(e){typeof e.type!="function"||e.o||e.type===bt?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),we=null,Fl&&Fl(e)},q.__r=function(e){Hl&&Hl(e),rr=0;var t=(we=e.__c).__H;t&&(Ao===we?(t.__h=[],we.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Xr,n.__N=n.i=void 0})):(t.__h.forEach(Qr),t.__h.forEach(Co),t.__h=[])),Ao=we},q.diffed=function(e){Bl&&Bl(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Wl.push(t)!==1&&Nl===q.requestAnimationFrame||((Nl=q.requestAnimationFrame)||Yd)(Jd)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Xr&&(n.__=n.__V),n.i=void 0,n.__V=Xr})),Ao=we=null},q.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Qr),n.__h=n.__h.filter(function(r){return!r.__||Co(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],q.__e(r,n.__v)}}),$l&&$l(e,t)},q.unmount=function(e){Ul&&Ul(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Qr(r)}catch(a){t=a}}),n.__H=void 0,t&&q.__e(t,n.__v))};var jl=typeof requestAnimationFrame=="function";function Yd(e){var t,n=function(){clearTimeout(r),jl&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);jl&&(t=requestAnimationFrame(n))}function Qr(e){var t=we,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),we=t}function Co(e){var t=we;e.__c=e.__(),we=t}function ql(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Vl(e,t){return typeof t=="function"?t(e):t}var Ty=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Qd=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function ea({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,a=0,o=0;function i(){let c=Date.now();return c-a>t?(o=1,a=c,0):(o<e?o++:(a+=t,o=1),a-c)}let s=[];function l(){let c=Date.now();if(s.length<e)return s.push(c),0;let g=s.shift()+t;return c>=g?(s.push(c),0):(s.push(g),g-c)}let u=n?l:i;return c=>{let g=function(...d){if(!g.isEnabled)return(async()=>c.apply(this,d))();let f;return new Promise((m,b)=>{f=setTimeout(()=>{m(c.apply(this,d)),r.delete(f)},u()),r.set(f,b)})};return g.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new Qd);r.clear(),s.splice(0,s.length)},g.isEnabled=!0,g}}var Po;function $o(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Ql(e,t=","){return e.map($o).join(t)}var Zl=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function ta(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function ec(e,t="@media "){return t+Lt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function Lt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Zd(){}var Ie={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function tc(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Fo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(tc(e),15)<<18}var em=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Uo({n:e,i:t,v:n=[]},r,a,o){for(let s of(e&&(e=$o({n:e,i:t,v:n})),o=[...Lt(o)],n)){let l=r.theme("screens",s);for(let u of Lt(l&&ec(l)||r.v(s))){var i;o.push(u),a|=l?67108864|Fo(u):s=="dark"?1073741824:u[0]=="@"?Fo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~em.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var jo=new Map;function Kl(e){if(e.d){let t=[],n=Ro(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Ro(r,o=>Ro(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=o.indexOf(s[1]);return~l?o.slice(0,l)+s[0]+o.slice(l+s[1].length):Do(o,i)}return Do(i,o)})):r,"&"),r=>Do(r,e.n?"."+Zl(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Ro(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Do(e,t){return e.replace(/&/g,t)}var tm=new Intl.Collator("en",{numeric:!0});function nm(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=nc(e[a],t)?n=a+1:r=a}return r}function nc(e,t){let n=e.p&Ie.o;return n==(t.p&Ie.o)&&(n==Ie.b||n==Ie.o)?0:e.p-t.p||e.o-t.o||tm.compare(e.n,t.n)}function Oo(e,t){return Math.round(parseInt(e,16)*t)}function rm(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Oo(e.substr(1,o),i),Oo(e.substr(1+o,o),i),Oo(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function rc(e,t,n,r,a=[]){return function o(i,{n:s,p:l,r:u=[],i:c},g){let d=[],f="",m=0,b=0;for(let h in i||{}){var x,p;let T=i[h];if(h[0]=="@"){if(!T)continue;if(h[1]=="a"){d.push(...ac(s,l,zo(""+T),g,l,u,c,!0));continue}if(h[1]=="l"){for(let E of Lt(T))d.push(...o(E,{n:s,p:(x=Ie[h[7]],l&~Ie.o|x),r:u,i:c},g));continue}if(h[1]=="i"){d.push(...Lt(T).map(E=>({p:-1,o:0,r:[],d:h+" "+E})));continue}if(h[1]=="k"){d.push({p:Ie.d,o:0,r:[h],d:o(T,{p:Ie.d},g).map(Kl).join("")});continue}if(h[1]=="f"){d.push(...Lt(T).map(E=>({p:Ie.d,o:0,r:[h],d:o(E,{p:Ie.d},g).map(Kl).join("")})));continue}}if(typeof T!="object"||Array.isArray(T))h=="label"&&T?s=T+ta(JSON.stringify([l,c,i])):(T||T===0)&&(h=h.replace(/[A-Z]/g,E=>"-"+E.toLowerCase()),b+=1,m=Math.max(m,(p=h)[0]=="-"?0:tc(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+Lt(T).map(E=>g.s(h,am(""+E,g.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let E=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(I,S)=>{let w=g.theme("screens",S);return w?(E|=67108864,ec(w,"")):I}),E|=Fo(h)),d.push(...o(T,{n:s,p:E,r:[...u,h],i:c},g))}else d.push(...o(T,{p:l,r:[...u,h]},g))}return d.unshift({n:s,p:l,o:Math.max(0,15-b)+1.5*Math.min(m||15,15),r:u,d:f}),d.sort(nc)}(e,Uo(t,n,r,a),n)}function am(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i)=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?rm(s):""+s})}function Wo(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Ho(e,t,n=Ie.u,r,a){let o=[];for(let i of e)for(let s of function(l,u,c,g,d){var f;l={...l,i:l.i||d};let m=function(b,x){let p=jo.get(b.n);return p?p(b,x):x.r(b.n,b.v[0]=="dark")}(l,u);return m?typeof m=="string"?({r:g,p:c}=Uo(l,u,c,g),Wo(Ho(zo(m),u,c,g,l.i),l.n)):Array.isArray(m)?m.map(b=>{var x,p;return{o:0,...b,r:[...Lt(g),...Lt(b.r)],p:(x=c,p=(f=b.p)!=null?f:c,x&~Ie.o|p)}}):rc(m,l,u,c,g):[{c:$o(l),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(nm(o,s),0,s);return o}function ac(e,t,n,r,a,o,i,s){return Wo((s?n.flatMap(l=>Ho([l],r,a,o,i)):Ho(n,r,a,o,i)).map(l=>l.p&Ie.o&&(l.n||t==Ie.b)?{...l,p:l.p&~Ie.o|t,o:0}:l),e)}function om(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:l,r:u,i:c}=Uo(o,i,t);return n&&ac(s,t,n,i,l,u,c,r)},jo.set(e,a),e}function Io(e,t){if(e[e.length-1]!="("){let n=[],r=!1,a=!1,o="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(o+=(o&&"-")+i)}o&&(a&&(o="-"+o),t[0].push({n:o,v:n.filter(sm),i:r}))}}function sm(e,t,n){return n.indexOf(e)==t}var Gl=new Map;function zo(e){let t=Gl.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,l=(u,c=0)=>{a!=s&&(n.push(e.slice(a,s+c)),u&&Io(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let g=n[c-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=c,Io([...n,"#"],r);let{v:f}=r[0].pop();for(let m of d)m.v.splice(+(m.v[0]=="dark")-+(f[0]=="dark"),f.length);Io([...n,om(g.length>1?g.slice(0,-1)+ta(JSON.stringify([g,d])):g+"("+Ql(d)+")",Ie.a,d,/@$/.test(g))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),Gl.set(e,t=r[0])}return t}function oc(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function sc(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?oc(e,t,n=>No(n).trim()):t.filter(Boolean).reduce((n,r)=>n+No(r),e?No(e):"")}function No(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=sc(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var Oy=ic("@"),Iy=ic("~");function ic(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(a,...o){return t(r,a,o)}});function t(n,r,a){return Ql(zo(n+e+"("+sc(r,a)+")"))}}function Bo(e,t){return Array.isArray(e)?Jl(oc(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Jl(e):[e]}var im=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Jl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=im.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function lc(e,...t){var n,r;let a=Bo(e,t),o=(((n=a.find(i=>i.label))==null?void 0:n.label)||"css")+ta(JSON.stringify(a));return r=(i,s)=>Wo(a.flatMap(l=>rc(l,i,s,Ie.o)),o),jo.set(o,r),o}var Ny=new Proxy(function(e,t){return Yl("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return Yl(t,n,r)}});function Yl(e,t,n){return{toString:()=>lc({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var Fy=Symbol();var cc=new Proxy(Zd,{apply:(e,t,n)=>Po(n[0]),get(e,t){let n=Po[t];return typeof n=="function"?function(){return n.apply(Po,arguments)}:n}});var Hy=function e(t){return new Proxy(function(n,...r){return Xl(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(a,...o){return Xl(t,r,a,o)}})}();function Xl(e,t,n,r){return{toString(){let a=Bo(n,r),o=Zl(t+ta(JSON.stringify([t,a])));return(typeof e=="function"?e:cc)(lc({[`@keyframes ${o}`]:Bo(n,r)})),o}}}var qo;function ts(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function yc(e,t=","){return e.map(ts).join(t)}var xc=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function ra(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function aa(e,t="@media "){return t+tt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function tt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function cm(){}var Ne={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Tc(e){return e.match(/[-=:;]/g)?.length||0}function Xo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Tc(e),15)<<18}var um=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function ns({n:e,i:t,v:n=[]},r,a,o){e&&(e=ts({n:e,i:t,v:n})),o=[...tt(o)];for(let s of n){let l=r.theme("screens",s);for(let u of tt(l&&aa(l)||r.v(s))){var i;o.push(u),a|=l?67108864|Xo(u):s=="dark"?1073741824:u[0]=="@"?Xo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~um.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var rs=new Map;function uc(e){if(e.d){let t=[],n=Vo(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Vo(r,o=>Vo(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=o.indexOf(s[1]);return~l?o.slice(0,l)+s[0]+o.slice(l+s[1].length):Ko(o,i)}return Ko(i,o)})):r,"&"),r=>Ko(r,e.n?"."+xc(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Vo(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Ko(e,t){return e.replace(/&/g,t)}var gc=new Intl.Collator("en",{numeric:!0});function gm(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=wc(e[a],t)?n=a+1:r=a}return r}function wc(e,t){let n=e.p&Ne.o;return n==(t.p&Ne.o)&&(n==Ne.b||n==Ne.o)?0:e.p-t.p||e.o-t.o||gc.compare(fc(e.n),fc(t.n))||gc.compare(dc(e.n),dc(t.n))}function fc(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function dc(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Go(e,t){return Math.round(parseInt(e,16)*t)}function Ft(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Go(e.substr(1,o),i),Go(e.substr(1+o,o),i),Go(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function vc(e,t,n,r,a=[]){return function o(i,{n:s,p:l,r:u=[],i:c},g){let d=[],f="",m=0,b=0;for(let h in i||{}){var x,p;let T=i[h];if(h[0]=="@"){if(!T)continue;if(h[1]=="a"){d.push(...Ec(s,l,os(""+T),g,l,u,c,!0));continue}if(h[1]=="l"){for(let E of tt(T))d.push(...o(E,{n:s,p:(x=Ne[h[7]],l&~Ne.o|x),r:h[7]=="d"?[]:u,i:c},g));continue}if(h[1]=="i"){d.push(...tt(T).map(E=>({p:-1,o:0,r:[],d:h+" "+E})));continue}if(h[1]=="k"){d.push({p:Ne.d,o:0,r:[h],d:o(T,{p:Ne.d},g).map(uc).join("")});continue}if(h[1]=="f"){d.push(...tt(T).map(E=>({p:Ne.d,o:0,r:[h],d:o(E,{p:Ne.d},g).map(uc).join("")})));continue}}if(typeof T!="object"||Array.isArray(T))h=="label"&&T?s=T+ra(JSON.stringify([l,c,i])):(T||T===0)&&(h=h.replace(/[A-Z]/g,E=>"-"+E.toLowerCase()),b+=1,m=Math.max(m,(p=h)[0]=="-"?0:Tc(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+tt(T).map(E=>g.s(h,Sc(""+E,g.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let E=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(I,S)=>{let w=g.theme("screens",S);return w?(E|=67108864,aa(w,"")):I}),E|=Xo(h)),d.push(...o(T,{n:s,p:E,r:[...u,h],i:c},g))}else d.push(...o(T,{p:l,r:[...u,h]},g))}return d.unshift({n:s,p:l,o:Math.max(0,15-b)+1.5*Math.min(m||15,15),r:u,d:f}),d.sort(wc)}(e,ns(t,n,r,a),n)}function Sc(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i="")=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?Ft(s):""+tt(s).filter(l=>Object(l)!==l)})}function as(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Qo(e,t,n=Ne.u,r,a){let o=[];for(let i of e)for(let s of function(l,u,c,g,d){l={...l,i:l.i||d};let f=function(m,b){let x=rs.get(m.n);return x?x(m,b):b.r(m.n,m.v[0]=="dark")}(l,u);return f?typeof f=="string"?({r:g,p:c}=ns(l,u,c,g),as(Qo(os(f),u,c,g,l.i),l.n)):Array.isArray(f)?f.map(m=>{var b,x;return{o:0,...m,r:[...tt(g),...tt(m.r)],p:(b=c,x=m.p??c,b&~Ne.o|x)}}):vc(f,l,u,c,g):[{c:ts(l),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(gm(o,s),0,s);return o}function Ec(e,t,n,r,a,o,i,s){return as((s?n.flatMap(l=>Qo([l],r,a,o,i)):Qo(n,r,a,o,i)).map(l=>l.p&Ne.o&&(l.n||t==Ne.b)?{...l,p:l.p&~Ne.o|t,o:0}:l),e)}function fm(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:l,r:u,i:c}=ns(o,i,t);return n&&Ec(s,t,n,i,l,u,c,r)},rs.set(e,a),e}function Jo(e,t,n){if(e[e.length-1]!="("){let r=[],a=!1,o=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),a=!a),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),o=!o),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(o&&(i="-"+i),t[0].push({n:i,v:r.filter(dm),i:a}))}}function dm(e,t,n){return n.indexOf(e)==t}var mc=new Map;function os(e){let t=mc.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,l=(u,c=0)=>{a!=s&&(n.push(e.slice(a,s+c)),u&&Jo(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let g=n[c-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=c,Jo([...n,"#"],r);let{v:f}=r[0].pop();for(let m of d)m.v.splice(+(m.v[0]=="dark")-+(f[0]=="dark"),f.length);Jo([...n,fm(g.length>1?g.slice(0,-1)+ra(JSON.stringify([g,d])):g+"("+yc(d)+")",Ne.a,d,/@$/.test(g))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),mc.set(e,t=r[0])}return t}function _c(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function Lc(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?_c(e,t,n=>Yo(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Yo(r),e?Yo(e):"")}function Yo(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Lc(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var nx=Ac("@"),rx=Ac("~");function Ac(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(a,...o){return t(r,a,o)}}});function t(n,r,a){return yc(os(n+e+"("+Lc(r,a)+")"))}}function Zo(e,t){return Array.isArray(e)?pc(_c(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?pc(e):[e]}var mm=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function pc(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=mm.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function Cc(e,...t){var n;let r=Zo(e,t),a=(r.find(o=>o.label)?.label||"css")+ra(JSON.stringify(r));return n=(o,i)=>as(r.flatMap(s=>vc(s,o,i,Ne.o)),a),rs.set(a,n),a}var ax=new Proxy(function(e,t){return hc("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return hc(t,n,r)}}});function hc(e,t,n){return{toString(){return Cc({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function L(e,t,n){return[e,pm(t,n)]}function pm(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):es(n,1)}):n=>e||{[n[1]]:es(n,2)}}function es(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function A(e,t,n,r){return[e,hm(t,n,r)]}function hm(e,t,n){let r=typeof t=="string"?(a,o)=>({[t]:n?n(a,o):a._}):t||(({1:a,_:o},i,s)=>({[a||s]:o}));return(a,o)=>{let i=Mc(e||a[1]),s=o.theme(i,a.$$)??or(a.$$,i,o);if(s!=null)return a._=es(a,0,s),r(a,o,i)}}function Me(e,t={},n){return[e,bm(t,n)]}function bm(e={},t){return(n,r)=>{let{section:a=Mc(n[0]).replace("-","")+"Color"}=e,[o,i]=ym(n.$$);if(!o)return;let s=r.theme(a,o)||or(o,a,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=a.replace("Color","Opacity"),property:c=a,selector:g}=e,d=r.theme(u,i||"DEFAULT")||i&&or(i,u,r),f=t||(({_:b})=>{let x=sr(c,b);return g?{[g]:x}:x});n._={value:Ft(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:b=>Ft(s,b),opacityVariable:l||void 0,opacityValue:d||void 0};let m=f(n,r);if(!n.dark){let b=r.d(a,o,s);b&&b!==s&&(n._={value:Ft(b,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:x=>Ft(b,x),opacityVariable:l||void 0,opacityValue:d||void 0},m={"&":m,[r.v("dark")]:f(n,r)})}return m}}function ym(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function sr(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function or(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=na(Sc(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Mc(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function na(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,a="")=>na(n)+r+na(a)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var ox=Symbol();var xm=new Proxy(cm,{apply(e,t,n){return qo(n[0])},get(e,t){let n=qo[t];return typeof n=="function"?function(){return n.apply(qo,arguments)}:n}});var sx=function e(t){return new Proxy(function(n,...r){return bc(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(a,...o){return bc(t,r,a,o)}}})}();function bc(e,t,n,r){return{toString(){let a=Zo(n,r),o=xc(t+ra(JSON.stringify([t,a])));return(typeof e=="function"?e:xm)(Cc({[`@keyframes ${o}`]:Zo(n,r)})),o}}}var Tm="inherit",wm="currentColor",vm="transparent",Sm="#000",Em="#fff",_m={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Lm={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Am={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},Cm={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},Mm={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},km={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Pm={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},Rm={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Dm={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Om={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Im={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},Nm={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Fm={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Hm={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Bm={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},$m={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Um={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},jm={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},Wm={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},zm={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},qm={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},Vm={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},Km={__proto__:null,inherit:Tm,current:wm,transparent:vm,black:Sm,white:Em,slate:_m,gray:Lm,zinc:Am,neutral:Cm,stone:Mm,red:km,orange:Pm,amber:Rm,yellow:Dm,lime:Om,green:Im,emerald:Nm,teal:Fm,cyan:Hm,sky:Bm,blue:$m,indigo:Um,violet:jm,purple:Wm,fuchsia:zm,pink:qm,rose:Vm},kc={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:Km,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Qe(4,"rem",4,.5,.5),...Qe(12,"rem",4,5),14:"3.5rem",...Qe(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:ee("blur"),backdropBrightness:ee("brightness"),backdropContrast:ee("contrast"),backdropGrayscale:ee("grayscale"),backdropHueRotate:ee("hueRotate"),backdropInvert:ee("invert"),backdropOpacity:ee("opacity"),backdropSaturate:ee("saturate"),backdropSepia:ee("sepia"),backgroundColor:ee("colors"),backgroundImage:{none:"none"},backgroundOpacity:ee("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Qe(200,"",100,0,50),...Qe(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:ee("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:ee("spacing"),borderWidth:{DEFAULT:"1px",...nt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:ee("colors"),caretColor:ee("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Qe(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:ee("borderColor"),divideOpacity:ee("borderOpacity"),divideWidth:ee("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:ee("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...ir(2,6),...ir(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:ee("spacing"),gradientColorStops:ee("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...ir(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...ir(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Qe(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Qe(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:ee("spacing"),placeholderColor:ee("colors"),placeholderOpacity:ee("opacity"),outlineColor:ee("colors"),outlineOffset:nt(8,"px"),outlineWidth:nt(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:ee("colors"),ringOffsetWidth:nt(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...nt(8,"px")},rotate:{...nt(2,"deg"),...nt(12,"deg",3),...nt(180,"deg",45)},saturate:Qe(200,"",100,0,50),scale:{...Qe(150,"",100,0,50),...Qe(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:ee("spacing"),scrollPadding:ee("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...nt(2,"deg"),...nt(12,"deg",3)},space:ee("spacing"),stroke:ee("colors"),strokeWidth:Qe(2),textColor:ee("colors"),textDecorationColor:ee("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...nt(8,"px")},textUnderlineOffset:{auto:"auto",...nt(8,"px")},textIndent:ee("spacing"),textOpacity:ee("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:ee("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...ir(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Qe(50,"",1,0,10),auto:"auto"}};function ir(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function nt(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Qe(e,t="",n=1,r=0,a=1,o={}){for(;r<=e;r+=a)o[r]=r/n+t;return o}function ee(e){return({theme:t})=>t(e)}var cx={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${kc.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${kc.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},gx=[L("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:or(`[${t}]`,e,n)}}})),L("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),A("aspect-","aspectRatio"),L("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:a}=t("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(o[aa(l)]={"&":{maxWidth:l,...i(s)}})}return o;function i(s){let l=a&&(typeof a=="string"?a:a[s]||a.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),A("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),L("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),L("box-(border|content)","boxSizing",({1:e})=>e+"-box"),L("hidden",{display:"none"}),L("table-(auto|fixed)","tableLayout"),L(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",L("isolate","isolation"),L("object-(contain|cover|fill|none|scale-down)","objectFit"),A("object-","objectPosition"),L("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",oa),L("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),L("(static|fixed|absolute|relative|sticky)","position"),A("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),A("-?(top|bottom|left|right)(?:$|-)","inset"),L("visible","visibility"),L("invisible",{visibility:"hidden"}),A("-?z-","zIndex"),L("flex-((row|col)(-reverse)?)","flexDirection",Pc),L("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),A("(flex-(?:grow|shrink))(?:$|-)"),A("(flex)-"),A("grow(?:$|-)","flexGrow"),A("shrink(?:$|-)","flexShrink"),A("basis-","flexBasis"),A("-?(order)-"),"-?(order)-(\\d+)",A("grid-cols-","gridTemplateColumns"),L("grid-cols-(\\d+)","gridTemplateColumns",Ic),A("col-","gridColumn"),L("col-(span)-(\\d+)","gridColumn",Oc),A("col-start-","gridColumnStart"),L("col-start-(auto|\\d+)","gridColumnStart"),A("col-end-","gridColumnEnd"),L("col-end-(auto|\\d+)","gridColumnEnd"),A("grid-rows-","gridTemplateRows"),L("grid-rows-(\\d+)","gridTemplateRows",Ic),A("row-","gridRow"),L("row-(span)-(\\d+)","gridRow",Oc),A("row-start-","gridRowStart"),L("row-start-(auto|\\d+)","gridRowStart"),A("row-end-","gridRowEnd"),L("row-end-(auto|\\d+)","gridRowEnd"),L("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>oa(Pc(e))),L("grid-flow-(dense)","gridAutoFlow"),A("auto-cols-","gridAutoColumns"),A("auto-rows-","gridAutoRows"),A("gap-x(?:$|-)","gap","columnGap"),A("gap-y(?:$|-)","gap","rowGap"),A("gap(?:$|-)","gap"),"(justify-(?:items|self))-",L("justify-","justifyContent",Rc),L("(content|items|self)-",e=>({["align-"+e[1]]:Rc(e)})),L("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),A("p([xytrbl])?(?:$|-)","padding",_n("padding")),A("-?m([xytrbl])?(?:$|-)","margin",_n("margin")),A("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),L("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),A("w-","width"),A("min-w-","minWidth"),A("max-w-","maxWidth"),A("h-","height"),A("min-h-","minHeight"),A("max-h-","maxHeight"),A("font-","fontWeight"),A("font-","fontFamily","fontFamily",yt),L("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),L("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),L("italic","fontStyle"),L("not-italic",{fontStyle:"normal"}),L("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),A("tracking-","letterSpacing"),A("leading-","lineHeight"),L("list-(inside|outside)","listStylePosition"),A("list-","listStyleType"),L("list-","listStyleType"),A("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Me("placeholder-",{property:"color",selector:"&::placeholder"}),L("text-(left|center|right|justify|start|end)","textAlign"),L("text-(ellipsis|clip)","textOverflow"),A("text-opacity-","textOpacity","--tw-text-opacity"),Me("text-",{property:"color"}),A("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),A("indent-","textIndent"),L("(overline|underline|line-through)","textDecorationLine"),L("no-underline",{textDecorationLine:"none"}),A("underline-offset-","textUnderlineOffset"),Me("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),A("decoration-","textDecorationThickness"),L("decoration-","textDecorationStyle"),L("(uppercase|lowercase|capitalize)","textTransform"),L("normal-case",{textTransform:"none"}),L("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),L("align-","verticalAlign"),L("whitespace-","whiteSpace"),L("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),L("break-words",{overflowWrap:"break-word"}),L("break-all",{wordBreak:"break-all"}),Me("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Me("accent-",{opacityVariable:!1,opacitySection:"opacity"}),L("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${an(e," ")},var(--tw-gradient-stops))`),Me("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Me("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Me("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),L("bg-(fixed|local|scroll)","backgroundAttachment"),L("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),L(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),L("bg-blend-","backgroundBlendMode"),L("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),A("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Me("bg-",{section:"backgroundColor"}),A("bg-","backgroundImage"),A("bg-","backgroundPosition"),L("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",oa),A("bg-","backgroundSize"),A("rounded(?:$|-)","borderRadius"),A("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${an(n[0])}-radius`]:t,[`border-${an(n[1])}-radius`]:t}}),L("border-(collapse|separate)","borderCollapse"),A("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),L("border-(solid|dashed|dotted|double|none)","borderStyle"),A("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Me("border-([xytrbl])-",{section:"borderColor"},_n("border","Color")),Me("border-"),A("border-([xytrbl])(?:$|-)","borderWidth",_n("border","Width")),A("border(?:$|-)","borderWidth"),A("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),L("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),L("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),A("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${an(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${an(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Me("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),A("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Me("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),A("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),L("ring-inset",{"--tw-ring-inset":"inset"}),Me("ring-",{property:"--tw-ring-color"}),A("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Ft(t("ringOffsetColor","","#fff")),"--tw-ring-color":Ft(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Me("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),A("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":yt(e),"--tw-shadow-colored":yt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),A("(opacity)-"),L("mix-blend-","mixBlendMode"),...Dc(),...Dc("backdrop-"),A("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:yt(e),transitionTimingFunction:e._=="none"?void 0:yt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:yt(t("transitionDuration",""))})),A("duration(?:$|-)","transitionDuration","transitionDuration",yt),A("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",yt),A("delay(?:$|-)","transitionDelay","transitionDelay",yt),A("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=yt(e),a=r.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=n(a[0]))]:o,animation:a.join(" ")}:{animation:r}}),"(transform)-(none)",L("transform",is),L("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Nc(e=="gpu")})),A("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...is()})),A("-?(rotate)-","rotate",ss),A("-?(translate-[xy])-","translate",ss),A("-?(skew-[xy])-","skew",ss),L("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",oa),"(appearance)-",A("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",A("(cursor)-"),"(cursor)-",L("snap-(none)","scroll-snap-type"),L("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),L("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),L("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),L("snap-(normal|always)","scroll-snap-stop"),L("scroll-(auto|smooth)","scroll-behavior"),A("scroll-p([xytrbl])?(?:$|-)","padding",_n("scroll-padding")),A("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",_n("scroll-margin")),L("touch-(auto|none|manipulation)","touch-action"),L("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),L("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),L("outline",{outlineStyle:"solid"}),L("outline-(dashed|dotted|double|hidden)","outlineStyle"),A("(outline-offset)-"),Me("outline-",{opacityVariable:!1,opacitySection:"opacity"}),A("outline-","outlineWidth"),"(pointer-events)-",A("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],L("select-(none|text|all|auto)","userSelect"),Me("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Me("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),A("stroke-","strokeWidth"),L("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),L("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function oa(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Pc(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function an(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function yt(e){return e&&""+(e._||e)}function Rc({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function _n(e,t=""){return({1:n,_:r})=>{let a={x:"lr",y:"tb"}[n]||n+n;return a?{...sr(e+"-"+an(a[0])+t,r),...sr(e+"-"+an(a[1])+t,r)}:sr(e+t,r)}}function Dc(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,L(`${e}filter`,n),...t.map(r=>A(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:a,_:o})=>({[`--tw-${a}`]:tt(o).map(i=>`${r}(${i})`).join(" "),...n})))]}function ss({1:e,_:t}){return{["--tw-"+e]:t,...is()}}function is(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Nc()}}}}function Nc(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Oc({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Ic({1:e}){return`repeat(${e},minmax(0,1fr))`}var Jm=Object.create,Hc=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,Xm=Object.getOwnPropertyNames,Qm=Object.getPrototypeOf,Zm=Object.prototype.hasOwnProperty,ep=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),tp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Xm(t))!Zm.call(e,a)&&a!==n&&Hc(e,a,{get:()=>t[a],enumerable:!(r=Ym(t,a))||r.enumerable});return e},np=(e,t,n)=>(n=e!=null?Jm(Qm(e)):{},tp(t||!e||!e.__esModule?Hc(n,"default",{value:e,enumerable:!0}):n,e)),rp=ep((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var a={};return r.m=n,r.c=a,r.i=function(o){return o},r.d=function(o,i,s){r.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(i,"a",i),i},r.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,r,a){"use strict";(function(o){var i,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,g){u(r)==="object"&&u(o)==="object"?o.exports=g():(s=[],i=g,l=typeof i=="function"?i.apply(r,s):i,l!==void 0&&(o.exports=l))})(void 0,function(){return function(c){function g(f){if(d[f])return d[f].exports;var m=d[f]={i:f,l:!1,exports:{}};return c[f].call(m.exports,m,m.exports,g),m.l=!0,m.exports}var d={};return g.m=c,g.c=d,g.i=function(f){return f},g.d=function(f,m,b){g.o(f,m)||Object.defineProperty(f,m,{configurable:!1,enumerable:!0,get:b})},g.n=function(f){var m=f&&f.__esModule?function(){return f.default}:function(){return f};return g.d(m,"a",m),m},g.o=function(f,m){return Object.prototype.hasOwnProperty.call(f,m)},g.p="",g(g.s=0)}([function(c,g,d){function f(v,k){var F={};for(var oe in v)k.indexOf(oe)>=0||Object.prototype.hasOwnProperty.call(v,oe)&&(F[oe]=v[oe]);return F}Object.defineProperty(g,"__esModule",{value:!0});var m=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(v){return typeof v>"u"?"undefined":u(v)}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v>"u"?"undefined":u(v)},b=Object.assign||function(v){for(var k=1;k<arguments.length;k++){var F=arguments[k];for(var oe in F)Object.prototype.hasOwnProperty.call(F,oe)&&(v[oe]=F[oe])}return v},x={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:x.top,force:x.top,confirm:x.top,input:x.top,select:x.bottom,date:x.top}},h=g.setOptions=function(v){p=b({},p,v,{classes:b({},p.classes,v.classes),ids:b({},p.ids,v.ids),positions:b({},p.positions,v.positions)})},T=function(){return new Promise(function(v){return setTimeout(v,0)})},E=function(v){return new Promise(function(k){return setTimeout(k,1e3*v)})},I=function(){document.activeElement&&document.activeElement.blur()},S=function(){var v="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(k){var F=16*Math.random()|0,oe=k==="x"?F:3&F|8;return oe.toString(16)});return"notie-"+v},w={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},R=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},_=function(v){return v.keyCode===13},U=function(v){return v.keyCode===27},K=function(v,k){v.classList.add(p.classes.container),v.style[k]="-10000px",document.body.appendChild(v),v.style[k]="-"+v.offsetHeight+"px",v.listener&&window.addEventListener("keydown",v.listener),T().then(function(){v.style.transition=R(),v.style[k]=0})},M=function(v,k){var F=document.getElementById(v);F&&(F.style[k]="-"+F.offsetHeight+"px",F.listener&&window.removeEventListener("keydown",F.listener),E(p.transitionDuration).then(function(){F.parentNode&&F.parentNode.removeChild(F)}))},H=function(v,k){var F=document.createElement("div");F.id=p.ids.overlay,F.classList.add(p.classes.overlay),F.classList.add(p.classes.backgroundOverlay),F.style.opacity=0,v&&p.overlayClickDismiss&&(F.onclick=function(){M(v.id,k),V()}),document.body.appendChild(F),T().then(function(){F.style.transition=R(),F.style.opacity=p.overlayOpacity})},V=function(){var v=document.getElementById(p.ids.overlay);v.style.opacity=0,E(p.transitionDuration).then(function(){v.parentNode&&v.parentNode.removeChild(v)})},J=g.hideAlerts=function(v){var k=document.getElementsByClassName(p.classes.alert);if(k.length){for(var F=0;F<k.length;F++){var oe=k[F];M(oe.id,oe.position)}v&&E(p.transitionDuration).then(function(){return v()})}},Pe=g.alert=function(v){var k=v.type,F=k===void 0?4:k,oe=v.text,G=v.time,Ee=G===void 0?p.alertTime:G,Oe=v.stay,be=Oe!==void 0&&Oe,xe=v.position,ce=xe===void 0?p.positions.alert||ce.top:xe;I(),J();var Q=document.createElement("div"),ue=S();Q.id=ue,Q.position=ce,Q.classList.add(p.classes.textbox),Q.classList.add(w[F]),Q.classList.add(p.classes.alert),Q.innerHTML='<div class="'+p.classes.textboxInner+'">'+oe+"</div>",Q.onclick=function(){return M(ue,ce)},Q.listener=function($){(_($)||U($))&&J()},K(Q,ce),Ee&&Ee<1&&(Ee=1),!be&&Ee&&E(Ee).then(function(){return M(ue,ce)})},Ye=g.force=function(v,k){var F=v.type,oe=F===void 0?5:F,G=v.text,Ee=v.buttonText,Oe=Ee===void 0?"OK":Ee,be=v.callback,xe=v.position,ce=xe===void 0?p.positions.force||ce.top:xe;I(),J();var Q=document.createElement("div"),ue=S();Q.id=ue;var $=document.createElement("div");$.classList.add(p.classes.textbox),$.classList.add(p.classes.backgroundInfo),$.innerHTML='<div class="'+p.classes.textboxInner+'">'+G+"</div>";var te=document.createElement("div");te.classList.add(p.classes.button),te.classList.add(w[oe]),te.innerHTML=Oe,te.onclick=function(){M(ue,ce),V(),be?be():k&&k()},Q.appendChild($),Q.appendChild(te),Q.listener=function(C){_(C)&&te.click()},K(Q,ce),H()},Se=g.confirm=function(v,k,F){var oe=v.text,G=v.submitText,Ee=G===void 0?"Yes":G,Oe=v.cancelText,be=Oe===void 0?"Cancel":Oe,xe=v.submitCallback,ce=v.cancelCallback,Q=v.position,ue=Q===void 0?p.positions.confirm||ue.top:Q;I(),J();var $=document.createElement("div"),te=S();$.id=te;var C=document.createElement("div");C.classList.add(p.classes.textbox),C.classList.add(p.classes.backgroundInfo),C.innerHTML='<div class="'+p.classes.textboxInner+'">'+oe+"</div>";var B=document.createElement("div");B.classList.add(p.classes.button),B.classList.add(p.classes.elementHalf),B.classList.add(p.classes.backgroundSuccess),B.innerHTML=Ee,B.onclick=function(){M(te,ue),V(),xe?xe():k&&k()};var N=document.createElement("div");N.classList.add(p.classes.button),N.classList.add(p.classes.elementHalf),N.classList.add(p.classes.backgroundError),N.innerHTML=be,N.onclick=function(){M(te,ue),V(),ce?ce():F&&F()},$.appendChild(C),$.appendChild(B),$.appendChild(N),$.listener=function(z){_(z)?B.click():U(z)&&N.click()},K($,ue),H($,ue)},pe=function(v,k,F){var oe=v.text,G=v.submitText,Ee=G===void 0?"Submit":G,Oe=v.cancelText,be=Oe===void 0?"Cancel":Oe,xe=v.submitCallback,ce=v.cancelCallback,Q=v.position,ue=Q===void 0?p.positions.input||ue.top:Q,$=f(v,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);I(),J();var te=document.createElement("div"),C=S();te.id=C;var B=document.createElement("div");B.classList.add(p.classes.textbox),B.classList.add(p.classes.backgroundInfo),B.innerHTML='<div class="'+p.classes.textboxInner+'">'+oe+"</div>";var N=document.createElement("input");N.classList.add(p.classes.inputField),N.setAttribute("autocapitalize",$.autocapitalize||"none"),N.setAttribute("autocomplete",$.autocomplete||"off"),N.setAttribute("autocorrect",$.autocorrect||"off"),N.setAttribute("autofocus",$.autofocus||"true"),N.setAttribute("inputmode",$.inputmode||"verbatim"),N.setAttribute("max",$.max||""),N.setAttribute("maxlength",$.maxlength||""),N.setAttribute("min",$.min||""),N.setAttribute("minlength",$.minlength||""),N.setAttribute("placeholder",$.placeholder||""),N.setAttribute("spellcheck",$.spellcheck||"default"),N.setAttribute("step",$.step||"any"),N.setAttribute("type",$.type||"text"),N.value=$.value||"",$.allowed&&(N.oninput=function(){var he=void 0;if(Array.isArray($.allowed)){for(var ye="",Ae=$.allowed,it=0;it<Ae.length;it++)Ae[it]==="an"?ye+="0-9a-zA-Z":Ae[it]==="a"?ye+="a-zA-Z":Ae[it]==="n"&&(ye+="0-9"),Ae[it]==="s"&&(ye+=" ");he=new RegExp("[^"+ye+"]","g")}else m($.allowed)==="object"&&(he=$.allowed);N.value=N.value.replace(he,"")});var z=document.createElement("div");z.classList.add(p.classes.button),z.classList.add(p.classes.elementHalf),z.classList.add(p.classes.backgroundSuccess),z.innerHTML=Ee,z.onclick=function(){M(C,ue),V(),xe?xe(N.value):k&&k(N.value)};var Z=document.createElement("div");Z.classList.add(p.classes.button),Z.classList.add(p.classes.elementHalf),Z.classList.add(p.classes.backgroundError),Z.innerHTML=be,Z.onclick=function(){M(C,ue),V(),ce?ce(N.value):F&&F(N.value)},te.appendChild(B),te.appendChild(N),te.appendChild(z),te.appendChild(Z),te.listener=function(he){_(he)?z.click():U(he)&&Z.click()},K(te,ue),N.focus(),H(te,ue)};g.input=pe;var st=g.select=function(v,k){var F=v.text,oe=v.cancelText,G=oe===void 0?"Cancel":oe,Ee=v.cancelCallback,Oe=v.choices,be=v.position,xe=be===void 0?p.positions.select||xe.top:be;I(),J();var ce=document.createElement("div"),Q=S();ce.id=Q;var ue=document.createElement("div");ue.classList.add(p.classes.textbox),ue.classList.add(p.classes.backgroundInfo),ue.innerHTML='<div class="'+p.classes.textboxInner+'">'+F+"</div>",ce.appendChild(ue),Oe.forEach(function(te,C){var B=te.type,N=B===void 0?1:B,z=te.text,Z=te.handler,he=document.createElement("div");he.classList.add(w[N]),he.classList.add(p.classes.button),he.classList.add(p.classes.selectChoice);var ye=Oe[C+1];ye&&!ye.type&&(ye.type=1),ye&&ye.type===N&&he.classList.add(p.classes.selectChoiceRepeated),he.innerHTML=z,he.onclick=function(){M(Q,xe),V(),Z()},ce.appendChild(he)});var $=document.createElement("div");$.classList.add(p.classes.backgroundNeutral),$.classList.add(p.classes.button),$.innerHTML=G,$.onclick=function(){M(Q,xe),V(),Ee?Ee():k&&k()},ce.appendChild($),ce.listener=function(te){U(te)&&$.click()},K(ce,xe),H(ce,xe)},le=g.date=function(v,k,F){var oe=v.value,G=oe===void 0?new Date:oe,Ee=v.submitText,Oe=Ee===void 0?"OK":Ee,be=v.cancelText,xe=be===void 0?"Cancel":be,ce=v.submitCallback,Q=v.cancelCallback,ue=v.position,$=ue===void 0?p.positions.date||$.top:ue;I(),J();var te="&#9662",C=document.createElement("div"),B=document.createElement("div"),N=document.createElement("div"),z=function(Te){C.innerHTML=p.dateMonths[Te.getMonth()],B.innerHTML=Te.getDate(),N.innerHTML=Te.getFullYear()},Z=function(Te){var ht=new Date(G.getFullYear(),G.getMonth()+1,0).getDate(),bn=Te.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(bn)>ht&&(bn=ht.toString()),Te.target.textContent=bn,Number(bn)<1&&(bn="1"),G.setDate(Number(bn))},he=function(Te){var ht=Te.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Te.target.textContent=ht,G.setFullYear(Number(ht))},ye=function(Te){z(G)},Ae=function(Te){var ht=new Date(G.getFullYear(),G.getMonth()+Te+1,0).getDate();G.getDate()>ht&&G.setDate(ht),G.setMonth(G.getMonth()+Te),z(G)},it=function(Te){G.setDate(G.getDate()+Te),z(G)},Ei=function(Te){var ht=G.getFullYear()+Te;ht<0?G.setFullYear(0):G.setFullYear(G.getFullYear()+Te),z(G)},Gt=document.createElement("div"),Ga=S();Gt.id=Ga;var Ja=document.createElement("div");Ja.classList.add(p.classes.backgroundInfo);var lt=document.createElement("div");lt.classList.add(p.classes.dateSelectorInner);var mn=document.createElement("div");mn.classList.add(p.classes.button),mn.classList.add(p.classes.elementThird),mn.classList.add(p.classes.dateSelectorUp),mn.innerHTML=te;var pn=document.createElement("div");pn.classList.add(p.classes.button),pn.classList.add(p.classes.elementThird),pn.classList.add(p.classes.dateSelectorUp),pn.innerHTML=te;var hn=document.createElement("div");hn.classList.add(p.classes.button),hn.classList.add(p.classes.elementThird),hn.classList.add(p.classes.dateSelectorUp),hn.innerHTML=te,C.classList.add(p.classes.element),C.classList.add(p.classes.elementThird),C.innerHTML=p.dateMonths[G.getMonth()],B.classList.add(p.classes.element),B.classList.add(p.classes.elementThird),B.setAttribute("contentEditable",!0),B.addEventListener("input",Z),B.addEventListener("blur",ye),B.innerHTML=G.getDate(),N.classList.add(p.classes.element),N.classList.add(p.classes.elementThird),N.setAttribute("contentEditable",!0),N.addEventListener("input",he),N.addEventListener("blur",ye),N.innerHTML=G.getFullYear();var $n=document.createElement("div");$n.classList.add(p.classes.button),$n.classList.add(p.classes.elementThird),$n.innerHTML=te;var Un=document.createElement("div");Un.classList.add(p.classes.button),Un.classList.add(p.classes.elementThird),Un.innerHTML=te;var jn=document.createElement("div");jn.classList.add(p.classes.button),jn.classList.add(p.classes.elementThird),jn.innerHTML=te,mn.onclick=function(){return Ae(1)},pn.onclick=function(){return it(1)},hn.onclick=function(){return Ei(1)},$n.onclick=function(){return Ae(-1)},Un.onclick=function(){return it(-1)},jn.onclick=function(){return Ei(-1)};var Jt=document.createElement("div");Jt.classList.add(p.classes.button),Jt.classList.add(p.classes.elementHalf),Jt.classList.add(p.classes.backgroundSuccess),Jt.innerHTML=Oe,Jt.onclick=function(){M(Ga,$),V(),ce?ce(G):k&&k(G)};var Yt=document.createElement("div");Yt.classList.add(p.classes.button),Yt.classList.add(p.classes.elementHalf),Yt.classList.add(p.classes.backgroundError),Yt.innerHTML=xe,Yt.onclick=function(){M(Ga,$),V(),Q?Q(G):F&&F(G)},lt.appendChild(mn),lt.appendChild(pn),lt.appendChild(hn),lt.appendChild(C),lt.appendChild(B),lt.appendChild(N),lt.appendChild($n),lt.appendChild(Un),lt.appendChild(jn),Ja.appendChild(lt),Gt.appendChild(Ja),Gt.appendChild(Jt),Gt.appendChild(Yt),Gt.listener=function(Te){_(Te)?Jt.click():U(Te)&&Yt.click()},K(Gt,$),H(Gt,$)};g.default={alert:Pe,force:Ye,confirm:Se,input:pe,select:st,date:le,setOptions:h,hideAlerts:J}}])})}).call(r,a(0)(n))}])})}),ap=np(rp()),{default:Fc,...op}=ap,ls=Fc!==void 0?Fc:op;var _x=Symbol("clean");var Lx=Symbol();function cs(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=cs(e[r],t);return n}}function $c(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,a,o){let i=e(r,a,...o);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,a){return e(n,r,...a)}}}}var Ix=$c((e,t,n)=>cs(t,r=>{for(let a in n)r=r.replace(new RegExp(`{${a}}`,"g"),n[a]);return r})),Nx=$c((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),cs(t[r],a=>a.replace(/{count}/g,n))});var us=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function gs(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function qc(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function Vc(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function lp(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,o=0;o<n.length;o++)r.indexOf(n[o])===-1&&(a=!1);return a}var cr={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":us?173:189,"=":us?61:187,";":us?59:186,"'":222,"[":219,"]":221,"\\":220},xt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},ms={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Fe={16:!1,18:!1,17:!1,91:!1},_e={};for(lr=1;lr<20;lr++)cr["f".concat(lr)]=111+lr;var lr,me=[],Uc=!1,Kc="all",Gc=[],ia=function(e){return cr[e.toLowerCase()]||xt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},cp=function(e){return Object.keys(cr).find(function(t){return cr[t]===e})},up=function(e){return Object.keys(xt).find(function(t){return xt[t]===e})};function Jc(e){Kc=e||"all"}function ur(){return Kc||"all"}function gp(){return me.slice(0)}function fp(){return me.map(function(e){return cp(e)||up(e)||String.fromCharCode(e)})}function dp(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function mp(e){return typeof e=="string"&&(e=ia(e)),me.indexOf(e)!==-1}function pp(e,t){var n,r;e||(e=ur());for(var a in _e)if(Object.prototype.hasOwnProperty.call(_e,a))for(n=_e[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;ur()===e&&Jc(t||"all")}function hp(e){var t=e.keyCode||e.which||e.charCode,n=me.indexOf(t);if(n>=0&&me.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&me.splice(0,me.length),(t===93||t===224)&&(t=91),t in Fe){Fe[t]=!1;for(var r in xt)xt[r]===t&&(rt[r]=!1)}}function bp(e){if(typeof e>"u")Object.keys(_e).forEach(function(i){return delete _e[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&fs(i)});else if(typeof e=="object")e.key&&fs(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],o=n[1];typeof a=="function"&&(o=a,a=""),fs({key:e,scope:a,method:o,splitKey:"+"})}}var fs=function(e){var t=e.key,n=e.scope,r=e.method,a=e.splitKey,o=a===void 0?"+":a,i=Vc(t);i.forEach(function(s){var l=s.split(o),u=l.length,c=l[u-1],g=c==="*"?"*":ia(c);if(_e[g]){n||(n=ur());var d=u>1?qc(xt,l):[];_e[g]=_e[g].filter(function(f){var m=r?f.method===r:!0;return!(m&&f.scope===n&&lp(f.mods,d))})}})};function jc(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var o in Fe)Object.prototype.hasOwnProperty.call(Fe,o)&&(!Fe[o]&&t.mods.indexOf(+o)>-1||Fe[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!Fe[16]&&!Fe[18]&&!Fe[17]&&!Fe[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Wc(e,t){var n=_e["*"],r=e.keyCode||e.which||e.charCode;if(rt.filter.call(this,e)){if((r===93||r===224)&&(r=91),me.indexOf(r)===-1&&r!==229&&me.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(m){var b=ms[m];e[m]&&me.indexOf(b)===-1?me.push(b):!e[m]&&me.indexOf(b)>-1?me.splice(me.indexOf(b),1):m==="metaKey"&&e[m]&&me.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(me=me.slice(me.indexOf(b))))}),r in Fe){Fe[r]=!0;for(var a in xt)xt[a]===r&&(rt[a]=!0);if(!n)return}for(var o in Fe)Object.prototype.hasOwnProperty.call(Fe,o)&&(Fe[o]=e[ms[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(me.indexOf(17)===-1&&me.push(17),me.indexOf(18)===-1&&me.push(18),Fe[17]=!0,Fe[18]=!0);var i=ur();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&jc(e,n[s],i,t);if(r in _e){for(var l=0;l<_e[r].length;l++)if((e.type==="keydown"&&_e[r][l].keydown||e.type==="keyup"&&_e[r][l].keyup)&&_e[r][l].key){for(var u=_e[r][l],c=u.splitKey,g=u.key.split(c),d=[],f=0;f<g.length;f++)d.push(ia(g[f]));d.sort().join("")===me.sort().join("")&&jc(e,u,i,t)}}}}function yp(e){return Gc.indexOf(e)>-1}function rt(e,t,n){me=[];var r=Vc(e),a=[],o="all",i=document,s=0,l=!1,u=!0,c="+",g=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(i=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(o=t);s<r.length;s++)e=r[s].split(c),a=[],e.length>1&&(a=qc(xt,e)),e=e[e.length-1],e=e==="*"?"*":ia(e),e in _e||(_e[e]=[]),_e[e].push({keyup:l,keydown:u,scope:o,mods:a,shortcut:r[s],method:n,key:r[s],splitKey:c,element:i});typeof i<"u"&&!yp(i)&&window&&(Gc.push(i),gs(i,"keydown",function(d){Wc(d,i)},g),Uc||(Uc=!0,gs(window,"focus",function(){me=[]},g)),gs(i,"keyup",function(d){Wc(d,i),hp(d)},g))}function xp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(_e).forEach(function(n){var r=_e[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var ds={getPressedKeyString:fp,setScope:Jc,getScope:ur,deleteScope:pp,getPressedKeyCodes:gp,isPressed:mp,filter:dp,trigger:xp,unbind:bp,keyMap:cr,modifier:xt,modifierMap:ms};for(sa in ds)Object.prototype.hasOwnProperty.call(ds,sa)&&(rt[sa]=ds[sa]);var sa;typeof document<"u"&&(zc=window.hotkeys,rt.noConflict=function(e){return e&&window.hotkeys===rt&&(window.hotkeys=zc),rt},window.hotkeys=rt);var zc;var Qx=ls.alert;var ps=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),a=Ge.green;r>1e4?a=Ge.red:r>1e3&&(a=Ge.yellow),console.debug(Ge.dim(vt+" TIMING:"),t,"in",a(r+"ms")),this.#e=n}},gr=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Ge.dim(vt+" DEBUG:"),...t)}v(...t){this.#e<=0&&console.log(Ge.dim(vt+" VERBOSE:"),...t)}info(...t){this.#e<=1&&console.log(Ge.green(vt+" INFO:"),...t)}l(...t){this.#e<=1&&console.log(Ge.green(vt+" TEMP INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Ge.yellow(vt+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Ge.red(vt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Ge.red(vt+" FATAL:"),...t)}timing(){return this.level===0?new ps:{reset:()=>{},stop:()=>{}}}},D=new gr;var ke=class extends Error{constructor(n,r,a){super(r);this.name=n,a&&(this.details=a)}};async function Yc(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let o=await(e.fetchPolyfill||fetch)(t,r);if(o.ok&&o.status>=200&&o.status<400){if(n==="json")return await o.json();if(n==="text")return await o.text();if(n==="raw"){let i=await o.text(),s=Object.fromEntries([...o.headers.entries()]),l=o.url;return l||(o.headers.get("X-Final-URL")?l=o.headers.get("X-Final-URL"):l=t),{body:i,headers:s,status:o.status,statusText:o.statusText,url:l}}}else{let i;try{i=await o.text()}catch(s){D.error("parse response failed",s)}throw new ke("fetchError",o.status+": "+o.statusText||"",i)}}function Ht(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Tp(e,t){return e<<t|e>>>32-t}function ca(e,t,n,r,a,o){return Ht(Tp(Ht(Ht(t,e),Ht(r,o)),a),n)}function He(e,t,n,r,a,o,i){return ca(t&n|~t&r,e,t,a,o,i)}function Be(e,t,n,r,a,o,i){return ca(t&r|n&~r,e,t,a,o,i)}function $e(e,t,n,r,a,o,i){return ca(t^n^r,e,t,a,o,i)}function Ue(e,t,n,r,a,o,i){return ca(n^(t|~r),e,t,a,o,i)}function la(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,a,o,i,s=1732584193,l=-271733879,u=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)r=s,a=l,o=u,i=c,s=He(s,l,u,c,e[n],7,-680876936),c=He(c,s,l,u,e[n+1],12,-389564586),u=He(u,c,s,l,e[n+2],17,606105819),l=He(l,u,c,s,e[n+3],22,-1044525330),s=He(s,l,u,c,e[n+4],7,-176418897),c=He(c,s,l,u,e[n+5],12,1200080426),u=He(u,c,s,l,e[n+6],17,-1473231341),l=He(l,u,c,s,e[n+7],22,-45705983),s=He(s,l,u,c,e[n+8],7,1770035416),c=He(c,s,l,u,e[n+9],12,-1958414417),u=He(u,c,s,l,e[n+10],17,-42063),l=He(l,u,c,s,e[n+11],22,-1990404162),s=He(s,l,u,c,e[n+12],7,1804603682),c=He(c,s,l,u,e[n+13],12,-40341101),u=He(u,c,s,l,e[n+14],17,-1502002290),l=He(l,u,c,s,e[n+15],22,1236535329),s=Be(s,l,u,c,e[n+1],5,-165796510),c=Be(c,s,l,u,e[n+6],9,-1069501632),u=Be(u,c,s,l,e[n+11],14,643717713),l=Be(l,u,c,s,e[n],20,-373897302),s=Be(s,l,u,c,e[n+5],5,-701558691),c=Be(c,s,l,u,e[n+10],9,38016083),u=Be(u,c,s,l,e[n+15],14,-660478335),l=Be(l,u,c,s,e[n+4],20,-405537848),s=Be(s,l,u,c,e[n+9],5,568446438),c=Be(c,s,l,u,e[n+14],9,-1019803690),u=Be(u,c,s,l,e[n+3],14,-187363961),l=Be(l,u,c,s,e[n+8],20,1163531501),s=Be(s,l,u,c,e[n+13],5,-1444681467),c=Be(c,s,l,u,e[n+2],9,-51403784),u=Be(u,c,s,l,e[n+7],14,1735328473),l=Be(l,u,c,s,e[n+12],20,-1926607734),s=$e(s,l,u,c,e[n+5],4,-378558),c=$e(c,s,l,u,e[n+8],11,-2022574463),u=$e(u,c,s,l,e[n+11],16,1839030562),l=$e(l,u,c,s,e[n+14],23,-35309556),s=$e(s,l,u,c,e[n+1],4,-1530992060),c=$e(c,s,l,u,e[n+4],11,1272893353),u=$e(u,c,s,l,e[n+7],16,-155497632),l=$e(l,u,c,s,e[n+10],23,-1094730640),s=$e(s,l,u,c,e[n+13],4,681279174),c=$e(c,s,l,u,e[n],11,-358537222),u=$e(u,c,s,l,e[n+3],16,-722521979),l=$e(l,u,c,s,e[n+6],23,76029189),s=$e(s,l,u,c,e[n+9],4,-640364487),c=$e(c,s,l,u,e[n+12],11,-421815835),u=$e(u,c,s,l,e[n+15],16,530742520),l=$e(l,u,c,s,e[n+2],23,-995338651),s=Ue(s,l,u,c,e[n],6,-198630844),c=Ue(c,s,l,u,e[n+7],10,1126891415),u=Ue(u,c,s,l,e[n+14],15,-1416354905),l=Ue(l,u,c,s,e[n+5],21,-57434055),s=Ue(s,l,u,c,e[n+12],6,1700485571),c=Ue(c,s,l,u,e[n+3],10,-1894986606),u=Ue(u,c,s,l,e[n+10],15,-1051523),l=Ue(l,u,c,s,e[n+1],21,-2054922799),s=Ue(s,l,u,c,e[n+8],6,1873313359),c=Ue(c,s,l,u,e[n+15],10,-30611744),u=Ue(u,c,s,l,e[n+6],15,-1560198380),l=Ue(l,u,c,s,e[n+13],21,1309151649),s=Ue(s,l,u,c,e[n+4],6,-145523070),c=Ue(c,s,l,u,e[n+11],10,-1120210379),u=Ue(u,c,s,l,e[n+2],15,718787259),l=Ue(l,u,c,s,e[n+9],21,-343485551),s=Ht(s,r),l=Ht(l,a),u=Ht(u,o),c=Ht(c,i);return[s,l,u,c]}function Xc(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function hs(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function wp(e){return Xc(la(hs(e),e.length*8))}function vp(e,t){var n,r=hs(e),a=[],o=[],i;for(a[15]=o[15]=void 0,r.length>16&&(r=la(r,e.length*8)),n=0;n<16;n+=1)a[n]=r[n]^909522486,o[n]=r[n]^1549556828;return i=la(a.concat(hs(t)),512+t.length*8),Xc(la(o.concat(i),512+128))}function Qc(e){var t="0123456789abcdef",n="",r,a;for(a=0;a<e.length;a+=1)r=e.charCodeAt(a),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function bs(e){return unescape(encodeURIComponent(e))}function Zc(e){return wp(bs(e))}function Sp(e){return Qc(Zc(e))}function eu(e,t){return vp(bs(e),bs(t))}function Ep(e,t){return Qc(eu(e,t))}function Ln(e,t,n){return t?n?eu(t,e):Ep(t,e):n?Zc(e):Sp(e)}function tu(e,t,n){let r=_p(e,t),a=[],o={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(o.tempSentences.reduce((l,u)=>l+u.text.length,0)+i.text.length>t||o.tempSentences.length>=n)&&(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(o.from!==i.from||o.to!==i.to)&&(o.tempSentences.length>0?(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(o.from=i.from,o.to=i.to)),o.tempSentences.push(i);return o.tempSentences.length>0&&a.push(o),a}function _p(e,t){let n=[];for(let r=0;r<e.length;r++){let a=e[r],{from:o,to:i,text:s,url:l}=a,u=s.split(/\r?\n/),c=[],g="";for(let d=0;d<u.length;d++){let f=u[d];if(f===""){c.length>0?d<u.length-1&&(c[c.length-1].suffix+=`
`):g+=`
`;continue}else if(f.length>t){let m=[];ys(f,t,m);for(let b=0;b<m.length;b++){let x=m[b],{text:p,prefix:h,suffix:T}=x;c.push({from:o,to:i,text:p,prefix:h,suffix:T,index:r,url:l})}}else c.push({text:f,prefix:g,suffix:"",from:o,to:i,index:r,url:l});c.length>0&&d<u.length-1&&(c[c.length-1].suffix+=`
`)}n.push(...c)}return n}function fr(e,t){let n=rn(e),r=rn(t),a=n===r;return a?!0:(a=n.startsWith("zh")&&r.startsWith("zh"),a)}function ys(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((o,i)=>{let s=e.lastIndexOf(i,t);return s>o?s:o},-1);if(a===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&ys(e.slice(t),t,n);else{let o=e.slice(0,a+1);o.startsWith(" ")?n.push({text:o.slice(1),prefix:" ",suffix:""}):n.push({text:o,prefix:"",suffix:""}),a+1<e.length&&ys(e.slice(a+1),t,n)}return n}var An=[];async function ua(e,t){return await new Promise((n,r)=>{let a=e,o=1,i=indexedDB.open(a,o);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let l=i.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function nu(e){let t=`${fe}-${e.service}@${e.from}->${e.to}`;return await Ap(t,e)}async function ru(e){let t=Ln(e.originalText),n=`${fe}-${e.service}@${e.from}->${e.to}`;return await Lp(n,t)}async function Lp(e,t){let n=await ua(e);return await new Promise((r,a)=>{if(!n)return a();let o="cache",s=n.transaction([o],"readonly").objectStore(o).get(t);s.onsuccess=l=>{n.close();let u=s.result;r(u)},s.onerror=l=>{n.close(),console.error("queryInDB->onerror:",l),a()}})}async function Ap(e,t){let n=await ua(e);return(await Mp()).includes(e)||await Cp(e),await new Promise(a=>{if(!n)return a(!1);let o="cache",s=n.transaction([o],"readwrite").objectStore(o).put(t);s.onsuccess=l=>{n.close(),a(!0)},s.onerror=l=>{console.error("addInDB->onerror:",l),n.close(),a(!1)}})}async function Cp(e){let t="cache_list",n=await ua(fe+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=o=>{n.close(),An.push(e)},a.onerror=o=>{n.close(),console.error(o)}}async function Mp(){if(An&&An.length>0)return An;let e=await ua(fe+"-cacheList","cache_list");return An=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=o=>{e.close(),t(a.result)},a.onerror=o=>{e.close(),console.error(o),t([])}}),An}var kp=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Pp=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Rp=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,Dp=/(\s+)|([\p{P}\p{S}])/gu,Op=[["zh-CN",kp],["ja",Pp],["ko",Rp]];function au(e){if(!e)return"auto";let t="auto",n=0,r=0,a=e.match(Dp);a&&(r=a.reduce((i,s)=>i+s.length,0));let o=e.length-r;for(let i of Op){let s=i[1],l=i[0],u=e.match(s),c=u?u.length:0;c>n&&(n=c,t=l)}return n*2.5/o>.5?t:"auto"}var su="auto",ga="auto",ou="auto";function iu(e){su=e}function Bt(e){ga=e}function $t(){return ga!=="auto"?ga:ou!=="auto"?ou:su}function fa(){return ga}var dr=new Map,Cn=class{constructor(t,n=!1){this.logger=new gr,n&&this.logger.setLevel("debug"),this.fromType=t,dr.has(t)||(dr.set(t,new Map),Y.runtime.onMessage.addListener((r,a,o)=>{let i=r.from,s=r.to,l,u,c;a.tab&&a.tab.id&&(l=a.tab.id,i=`${i}:${l}`,u=a.tab.url,c=a.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let g=Ts(s),{type:d,name:f}=g;if(d!==t)return!1;let m=Ts(i),x=dr.get(d).get(f);if(!x)return this.logger.debug(`no message handler for ${d}:${s}, but it's ok`),!1;let{messageHandler:p,sync:h}=x,T={type:t,name:m.name,id:l,url:u,active:c};if(h){try{let E=p(r.payload,T);o({ok:!0,data:E})}catch(E){o({ok:!1,errorName:E.name,errorMessage:E.message,errorDetails:E.details})}return!1}else return p(r.payload,T).then(E=>{o({ok:!0,data:E})}).catch(E=>{o({ok:!1,errorName:E.name,errorMessage:E.message,errorDetails:E.details})}),!0}))}getConnection(t,n,r){let a=!1;r&&r.sync&&(a=!0);let o=this.fromType,i=dr.get(o);if(i.has(t))return i.get(t).connectionInstance;{let s=new xs(`${o}:${t}`,this.logger);return dr.get(o).set(t,{messageHandler:n,sync:a,connectionInstance:s}),s}}},xs=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=Ts(t),{type:a,id:o}=r;if(a!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await Y.runtime.sendMessage(i);return lu(i,s,this.logger)}catch(s){if(a==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(l,n,t,s),Promise.resolve({message:l})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await Y.tabs.sendMessage(o,i);return lu(i,s,this.logger)}}};function lu(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new ke(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function Ts(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var on=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await ws():n==="translateTheMainPage"?await ba():n==="translateToThePageEndImmediately"?await fu():n==="toggleTranslatePage"?await ha():n==="toggleTranslateTheWholePage"?await gu():n==="toggleTranslateTheMainPage"?await uu():n==="translatePage"?await jt():n==="restorePage"?Ut():n==="showTranslationOnly"?void 0:n==="setCurrentPageLanguageByClient"&&Bt(r)},Ip=function(e,t){let{method:n,data:r}=e;if(D.debug(`content script received sync message: ${n}`,r||" "),n==="ping")return"pong";if(n==="getPageStatus")return Ze();if(n==="getCurrentPageLanguage")return $t()},da,ma;function cu(){let e=pa();Tn()||Np(),e.sendMessage("popup:main_sync",{method:"ready"}).catch(n=>{})}function pa(){return da||(da=new Cn("content_script",!1).getConnection("main",on),da)}function Np(){return ma||(ma=new Cn("content_script",!1).getConnection("main_sync",Ip,{sync:!0}),ma)}async function at(e){return await pa().sendMessage("background:main",e)}function X(e){return ge()||Ui()?(e.fetchPolyfill=globalThis.GM_fetch,Yc(e)):at({method:"fetch",data:e})}function Je(){return ge()?Zn():at({method:"getConfig"})}function du(){return ge()?Xn():at({method:"getLocalConfig"})}function ya(e){return ge()?Qn(e):at({method:"setLocalConfig",data:e})}function mu(e){return ge()?pl(e):at({method:"setBuildinConfig",data:e})}function ot(e){if(e.text){let t=au(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(ge()){let t=Y.extra.detectLanguage(e.text);return Promise.resolve(t)}return at({method:"detectLanguage",data:e})}function pu(){return at({method:"detectTabLanguage"})}function hu(e){if(ge()){let n=new CustomEvent(Mr,{detail:e});document.dispatchEvent(n);return}pa().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function bu(e){return ge()?ru(e):at({method:"queryParagraphCache",data:e})}async function yu(e){if(ge()){await nu(e);return}return at({method:"setParagraphCache",data:e})}async function vs(){if(ge())return Promise.resolve();await at({method:"mockRequest"})}function xa(){return ge()?(Y.runtime.openOptionsPage(),Promise.resolve()):at({method:"openOptionsPage"})}function Ta(){return ge()?(Y.extra.openAboutPage(),Promise.resolve()):at({method:"openAboutPage"})}async function xu(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await ot({text:nn(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=rn(document.documentElement.lang)),e}function Ss(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,a=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let l=e.matches(s),u=[];l?u=[e]:u=e.querySelectorAll(s);for(let c of u)ae(c,Qt)||ie(c,Qt,"1");return Array.from(u)}).flat();a.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let g=Ve(e,n.additionalSelectors);for(let d of g)ae(d,Qt)||ie(d,Qt,"1");a.push(...g.map(d=>({element:d,reserve:!0})))}let i=Ve(e,["article"]);a.push(...i.map(g=>({element:g,reserve:!0})));let s;if(a.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let g=Array.from(s);a=a.concat(g.map(d=>({element:d,reserve:!0})))}let l=[],u=g=>{if(g.nodeType===Node.ELEMENT_NODE&&Ke(g,t.rule,!1))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE&&(g.textContent?g.textContent.trim():"").length>=n.containerMinTextCount){let f=g.parentNode;f&&f.parentNode&&(f=f.parentNode),f&&f.nodeType===Node.ELEMENT_NODE&&(l.includes(f)||l.push(f))}return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;c.nextNode(););a.push(...l.map(g=>({element:g,reserve:!1})))}let o=ji(e,a,n);return o.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),o}var Es=[];function Tu(e){Es.push(e)}function _s(){Es.forEach(e=>e()),Es=[]}function gt(e,t,n,r){let a=[],{rule:o}=r,i=Yn(r);if(e.length===0)return null;e=e.map(x=>x.element?x:{element:x});let s="",l=!1;for(let x=0;x<e.length;x++){let h=e[x].element;if(typeof h=="string"){s+=h;continue}let T="";Hr(h,`[${Ri}]`)?T=Fp(h):T=h.innerText;let E=T.startsWith(" "),I=T.endsWith(" ");h.tagName==="A"&&(E=!0,I=!0);let S=wn(h,o);if(T===""||S){S&&(E=!0,I=!0);let w={type:"element",value:h};a.push(w);let R=a.length-1,_=`${i[0]}${R}${i[1]}`;s+=(E?" ":"")+_+(I?" ":"");continue}if(!Ke(h,o,!0)){{let w=t?T:T.trim().replace(/\n/g," ");if(lo(w)||co(w)||uo(w)||Ki(w)){let R={type:"element",value:h};a.push(R);let _=a.length-1,U=`${i[0]}${_}${i[1]}`;s+=(E?" ":"")+U+(I?" ":"")}else l=!0,s+=(E?" ":"")+w+(I?" ":"")}if(typeof h!="string"){let w=Jn(h.nextSibling,t);w&&(s+=w)}}}if(!l)return null;let u=!1,c=s.split(" ").length,g=s.split(`
`).length;c<=o.blockMinWordCount&&s.length<=o.blockMinTextCount&&g<2&&(u=!0);let d=e.map(x=>x.element),f=Pt(e),m=!1;if(f){let p=globalThis.getComputedStyle(f).writingMode;m=p?p.includes("vertical"):!1}let b={rootFrame:n,isVertical:m,elements:d,text:s,variables:a,inline:u,preWhitespace:t};return qi(b,r.state.translationArea==="body"?2:o.paragraphMinTextCount,r.state.translationArea==="body"?1:o.paragraphMinWordCount,r)?b:null}function Fp(e){let t="",n=a=>a.nodeType===Node.ELEMENT_NODE?ae(a,ct,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(t+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var Hp=1,sn=new Map;function Su(){return sn}function Wt(e){return sn.get(e)}function mr(e,t){sn.set(e,t)}function Eu(){sn.clear()}function wu(e){if(!ae(e,Zt))return!1;if(ae(e,yn))return!0;let t=Rt(e,en);if(!t)return!1;let n=parseInt(t),r=sn.has(n);if(!r){let a=document.getElementById(`${Xe}-${n}`);a&&a.remove()}return r}function At(e,t){let n={...e,id:Hp++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(ie(r,Zt,"1"),ie(r,en,`${n.id}`))}),t.push(n),sn.set(n.id,{...n,state:"Original",observers:[]})}async function _u(e,t,n){let r=[],{targetLanguage:a,rule:o}=n;for(let d of t){if(Ke(d,o,!1))continue;let f=ae(d,xn),m=[];if(ae(d,et)){if(!wu(d)){let h=gt([d],!0,e,n);h&&At(h,r)}continue}let b=h=>{if(!(h.nodeType===Node.TEXT_NODE||h.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(h.nodeType===Node.ELEMENT_NODE){let T=h;if(T.isContentEditable||wu(h))return NodeFilter.FILTER_REJECT;if(ie(T,Zt,"1"),ae(T,et)){if(m.length>0){let I=gt([...m],f,e,n);I&&At(I,r),m.length=0}m.push(T);let E=gt([...m],f,e,n);return E&&At(E,r),m.length=0,NodeFilter.FILTER_REJECT}}if(Ke(h,o,!0)){if((h.nodeName==="CODE"||h.nodeName==="TT")&&h.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(ut(h,o))return vu(h,m,r,f,e,n),NodeFilter.FILTER_REJECT;if(m.length>0){let T=gt([...m],f,e,n);T&&At(T,r),m.length=0}return NodeFilter.FILTER_REJECT}return h.nodeName==="PRE"?(h.classList.contains("code"),NodeFilter.FILTER_REJECT):ut(h,o)?(vu(h,m,r,f,e,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},x=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,b),p=x.nextNode();for(;p;){if(m.length>0){let h=gt([...m],f,e,n);h&&At(h,r),m.length=0}p=x.nextNode()}if(m.length>0){let h=gt([...m],f,e,n);h&&At(h,r),m.length=0}}let i=r.map(d=>{let{text:f}=d;return ot({text:f})}),s=await Promise.all(i),l=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],c="auto";n.state.isDetectParagraphLanguage||(c=fa());let g=$t();return s.forEach((d,f)=>{let m=d;m==="auto"&&(m=g);let b={...r[f],languageByLocal:m,languageByClient:c||"auto"};if(sn.set(b.id,{...b,state:"Original",observers:[]}),!fr(d,a)){if(u.length>0&&u.some(h=>fr(d,h)))return;l.push(b)}}),l}function Bp(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,o=!1;for(;a=r.nextNode();){let s=a.textContent||"",l=s.trim();if(!o&&s.length>0&&l.length===0){o=!0,n.push(" ");continue}l.length>0&&(n.push(a.parentElement),o=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=Jn(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=Jn(e.nextSibling,t);s&&n.push(s)}return n}function vu(e,t,n,r,a,o){let i=e.previousElementSibling;if(i&&!ut(i,o.rule)&&t.length>0){let l=gt([...t],r,a,o);l&&At(l,n),t.length=0}Ke(e,o.rule,!1)?zi(e,o.rule)||t.push(e):wn(e,o.rule)?t.push(e):Hr(e,["code","tt"])?t.push(...Bp(e,r)):t.push(e)}async function Mu(e,t,n,r){let a=[],{rule:o}=n;for(let i=0;i<t.length;i++){let s=t[i],l=r[i];if(!l)throw new Error("targetContainer is null");let u=[],c=!0,g=null,d=function(b){let x=b;if(["DIV","BR"].includes(x.nodeName))return c=!0,NodeFilter.FILTER_REJECT;if(x.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(Up(b))return NodeFilter.FILTER_REJECT;if(ie(x,Zt,"1"),ut(x,o)){let p=Pt(u),h=globalThis.getComputedStyle(x);if(!p)u.push(Cu(x,h));else{let T=globalThis.getComputedStyle(p),E=Ls(T),I=Ls(h),S=Au(I,E),w=!1;if(c&&g&&Au(I,g).left>=1.5&&g.left>-3&&(w=!0),!w&&c){let _=(x.innerText||x.textContent||"").trim();(_.startsWith("\u2022")||_.charCodeAt(0)===61623||/^\d+\./.test(_))&&(w=!0)}!w&&c&&Pt(u)&&Nr(u).reduce((K,M)=>{let H=Ls(globalThis.getComputedStyle(M));return Math.max(K,H.right)},0)-E.right>o.pdfNewParagraphIndentRightIndentPx&&(w=!0),c&&(g=I,c=!1),w||(w=$p(S,o)),w&&Lu(u,a,e,n,l),u.push(Cu(x,h)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,d),m=f.nextNode();for(;m;)m=f.nextNode();Lu(u,a,e,n,l)}return a}function Lu(e,t,n,r,a){if(e.length>0){let o=gt([...e],!1,n,r);o&&(o.isPdf=!0,o.targetContainer=a,o.inline=!1,At(o,t)),e.length=0}}function Ls(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function $p(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<=t.pdfNewParagraphLineHeight*-1}function Au(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Cu(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function Up(e){if(!ae(e,Zt))return!1;if(ae(e,yn))return!0;let t=Rt(e,en);if(!t)return!1;let n=parseInt(t),a=Su().has(n);if(!a){let o=document.getElementById(`${Xe}-${n}`);o&&o.remove()}return a}function ku(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function jp(e,t,n=[],r,a){let o=["notranslate"];return r&&o.push(Bi),e&&(o.push(`${fe}-target-translation-theme-${e}`),t?o.push(`${oo}-theme-${e}`):o.push(`${ao}-theme-${e}`)),n.length>0&&o.push(...n),t?o.push(oo):(o.push(ao),a&&o.push(Hi)),o}function Wp(e){let t=["notranslate",Ni];return e&&t.push(`${fe}-target-translation-theme-${e}-inner`),t}function Pu(e,t,n){let{rule:r,translationTheme:a}=n,{variables:o,isVertical:i}=e;o=o||[];let{text:s}=t,{wrapperPrefix:l,wrapperSuffix:u}=r,c=Yn(n),g="afterend",d=new RegExp(`${c[0]}(\\d+)${c[1]}`,"g"),f=0,m=ku(s);o.length>0&&(m=m.replace(d,h=>{let T=m.indexOf(h),E=m[T-1]===" ",I=m[T+h.length]===" ",S=o[Number(f)];if(f++,S.type==="element"){let w=S.value.outerHTML;return E||(w=" "+w),I||(w=w+" "),w}else D.error("variable type not supported",S);return h}));let b=jp(a,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf);i&&b.push(Fi);let x=Wp(a),p="";return r.translationBlockStyle&&(p=`style="${r.translationBlockStyle}"`),m=`<span ${p} class="${b.join(" ")}"><span class="${x.join(" ")}">${m}</span></span>`,e.inline||(l==="smart"?m=`<br>${m}`:m=`${l}${m}`,u==="smart"?m=`${m}`:m=`${m}${u}`),e.inline&&(m=`<span class="notranslate">&nbsp;</span>${m}`),{html:m,position:g}}function Du(e,t){let n=[];for(let r of e){if(ae(r,et))continue;if(ie(r,Xa,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let o=s=>s.nodeType===Node.ELEMENT_NODE&&Ke(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&Cs(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,o);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let o=r.querySelectorAll("pre");for(let i of o)Ru(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(Gi(r,xn)||(zp(r)?(ie(r,xn,"1"),t.isTransformPreTagNewLine&&Ru(r)):ie(r,xn,"0"))),As(0,r,t,n)}return{hiddenElements:n}}function As(e,t,n,r=[]){if(ae(t,et))return;let a=!1;if(e===0){let o=wn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&ut(t,n)&&!o&&(a=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let o of t.childNodes)if(o.nodeType===Node.ELEMENT_NODE){if(Ke(o,n,!1))continue;{let i=globalThis.getComputedStyle(o),s=!1;if(i.display==="none"&&(r.push(o),s=!0),!s){let l=i.clip,u=i.zIndex,c=i.height,g=i.width,d=0;if(u.startsWith("-")){let f=parseInt(u);isNaN(f)||(d=f)}if((l==="rect(1px, 1px, 1px, 1px)"||d<0)&&(s=!0),!s&&o.nodeName!=="BR"){let f=parseInt(c),m=parseInt(g);!isNaN(f)&&!isNaN(m)&&(f>0&&f<8||m>0&&m<=8)&&(s=!0)}}if(s){ie(o,ct,"1",!0);continue}else{if(o.nodeName==="DIV"||Yi(o,n)){if((i.display==="inline"||i.display==="inline-flex")&&!ae(o,tn)){ie(o,St,"1");continue}}else if((o.nodeName==="SPAN"||o.nodeName==="A")&&!i.display.startsWith("inline")){ae(o,St)||(ie(o,tn,"1"),As(e+1,o,n,r));continue}if(ut(o,n)&&!a)continue;As(e+1,o,n,r)}}}else if(o.nodeType===Node.TEXT_NODE){let i=o.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");o.after(s),s.appendChild(o)}}}}function zp(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Ru(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function Cs(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let l=n.lastIndexOf(s,t);return l>i?l:i},-1);if(o===-1)n.length>t+20&&Cs(e,t+20);else{let i=n.slice(o+1);o++,i.startsWith(" ")&&o++;let s=e.splitText(o),l=document.createElement("br");s.parentNode?.insertBefore(l,s),o+1<n.length&&Cs(s,t)}}function Ou(e,t){let n=[];for(let r of e){let a=0,o=1e5,i=document.createElement("div"),s=c=>{let g=c;if(["DIV","BR"].includes(g.nodeName))return NodeFilter.FILTER_REJECT;if(g.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(g.nodeName==="SPAN"){let d=g.getBoundingClientRect(),f=globalThis.getComputedStyle(g),m=d.right,b=d.left,x=f.top.slice(0,-2),p=f.fontSize.slice(0,-2);return m>a&&(a=m),b<o&&(o=b),ie(g,Vn,`${b}`),ie(g,Rr,`${m}`),ie(g,Di,x),ie(g,Oi,p),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;l.nextNode(););let u=a-o;u<600&&(u=600),n.push(i),i.style.left=a+"px",i.style.width=a+"px",i.classList.add(Or),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var re=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,a=[],o=[],i=0,s=new Set,l=null,u=new Set;for(let d of r)d.from&&d.from!=="auto"&&u.add(d.from);let c=!1;u.size>1&&(c=!0);try{o=tu(r,this.maxTextLength,this.maxTextGroupLength)}catch(d){if(n){s.has(i)&&i++;for(let f=i;f<r.length;f++){let m=r[f];n(d,null,m)}l=d}else l=d}let g=ea({limit:this.throttleLimit,interval:1e3});D.debug("tempSentenceGroups",o.map(d=>d));for(let d=0;d<o.length;d++){let f=o[d],m=f.url,b=g(async()=>{let h=f.from;if(c&&(h="auto"),f.fromByClient&&f.fromByClient!=="auto"&&(h=f.fromByClient),this.isSupportList)return await this.translateList({text:f.tempSentences.map(E=>E.text),from:h,to:f.to,url:m});{let T=f.tempSentences.map(w=>w.text).join(ro),E=await this.translate({text:T,from:h,to:f.to,url:m}),{text:I}=E;return{text:I.split(ro),from:E.from,to:E.to}}}),x;try{x=await b()}catch(h){if(n){s.has(i)&&i++;for(let T=i;T<r.length;T++){let E=r[T];n(h,null,E)}l=h;continue}else{l=h;continue}}let{text:p}=x;for(let h=0;h<p.length;h++)try{let T=p[h],E=f.tempSentences[h],{index:I,prefix:S,suffix:w}=E;a[I]===void 0?a[I]={...r[I],from:f.from,to:f.to,text:S+T+w}:a[I].text+=S+T+w,I!==i&&n&&(s.add(i),n(null,a[i],r[i])),i=I}catch(T){if(n){s.has(i)&&i++;for(let E=i;E<r.length;E++){let I=r[E];n(T,null,I)}throw T}else throw T}}if(n&&!s.has(i)&&a[i]&&r[i]&&n(null,a[i],r[i]),l)throw l;return{sentences:a}}detectLanguageLocally(t){return ot({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Mn="input is invalid type",Ms=typeof window=="object",zt=Ms?window:{};zt.JS_SHA256_NO_WINDOW&&(Ms=!1);var qp=!Ms&&typeof self=="object",Vp=!zt.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Vp?zt=global:qp&&(zt=self);var pv=!zt.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,hv=typeof define=="function"&&define.amd,pr=!zt.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",O="0123456789abcdef".split(""),Kp=[-2147483648,8388608,32768,128],ft=[24,16,8,0],wa=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],va=["hex","array","digest","arrayBuffer"],Re=[];(zt.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});pr&&(zt.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Iu=function(e,t){return function(n){return new De(t,!0).update(n)[e]()}},Fu=function(e){var t=Iu("hex",e);t.create=function(){return new De(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<va.length;++n){var r=va[n];t[r]=Iu(r,e)}return t},Nu=function(e,t){return function(n,r){return new Sa(n,t,!0).update(r)[e]()}},Hu=function(e){var t=Nu("hex",e);t.create=function(a){return new Sa(a,e)},t.update=function(a,o){return t.create(a).update(o)};for(var n=0;n<va.length;++n){var r=va[n];t[r]=Nu(r,e)}return t};function De(e,t){t?(Re[0]=Re[16]=Re[1]=Re[2]=Re[3]=Re[4]=Re[5]=Re[6]=Re[7]=Re[8]=Re[9]=Re[10]=Re[11]=Re[12]=Re[13]=Re[14]=Re[15]=0,this.blocks=Re):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}De.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(Mn);if(pr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!pr||!ArrayBuffer.isView(e)))throw new Error(Mn)}else throw new Error(Mn);t=!0}for(var r,a=0,o,i=e.length,s=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(o=this.start;a<i&&o<64;++a)s[o>>2]|=e[a]<<ft[o++&3];else for(o=this.start;a<i&&o<64;++a)r=e.charCodeAt(a),r<128?s[o>>2]|=r<<ft[o++&3]:r<2048?(s[o>>2]|=(192|r>>6)<<ft[o++&3],s[o>>2]|=(128|r&63)<<ft[o++&3]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<ft[o++&3],s[o>>2]|=(128|r>>6&63)<<ft[o++&3],s[o>>2]|=(128|r&63)<<ft[o++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++a)&1023),s[o>>2]|=(240|r>>18)<<ft[o++&3],s[o>>2]|=(128|r>>12&63)<<ft[o++&3],s[o>>2]|=(128|r>>6&63)<<ft[o++&3],s[o>>2]|=(128|r&63)<<ft[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=s[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};De.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=Kp[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};De.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=this.blocks,u,c,g,d,f,m,b,x,p,h,T;for(u=16;u<64;++u)f=l[u-15],c=(f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3,f=l[u-2],g=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10,l[u]=l[u-16]+c+l[u-7]+g<<0;for(T=t&n,u=0;u<64;u+=4)this.first?(this.is224?(x=300032,f=l[0]-1413257819,s=f-150054599<<0,r=f+24177077<<0):(x=704751109,f=l[0]-210244248,s=f-1521486534<<0,r=f+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),g=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),x=e&t,d=x^e&n^T,b=a&o^~a&i,f=s+g+b+wa[u]+l[u],m=c+d,s=r+f<<0,r=f+m<<0),c=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),p=r&e,d=p^r&t^x,b=s&a^~s&o,f=i+g+b+wa[u+1]+l[u+1],m=c+d,i=n+f<<0,n=f+m<<0,c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),h=n&r,d=h^n&e^p,b=i&s^~i&a,f=o+g+b+wa[u+2]+l[u+2],m=c+d,o=t+f<<0,t=f+m<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),T=t&n,d=T^t&r^h,b=o&i^~o&s,f=a+g+b+wa[u+3]+l[u+3],m=c+d,a=e+f<<0,e=f+m<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+a<<0,this.h5=this.h5+o<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};De.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=O[e>>28&15]+O[e>>24&15]+O[e>>20&15]+O[e>>16&15]+O[e>>12&15]+O[e>>8&15]+O[e>>4&15]+O[e&15]+O[t>>28&15]+O[t>>24&15]+O[t>>20&15]+O[t>>16&15]+O[t>>12&15]+O[t>>8&15]+O[t>>4&15]+O[t&15]+O[n>>28&15]+O[n>>24&15]+O[n>>20&15]+O[n>>16&15]+O[n>>12&15]+O[n>>8&15]+O[n>>4&15]+O[n&15]+O[r>>28&15]+O[r>>24&15]+O[r>>20&15]+O[r>>16&15]+O[r>>12&15]+O[r>>8&15]+O[r>>4&15]+O[r&15]+O[a>>28&15]+O[a>>24&15]+O[a>>20&15]+O[a>>16&15]+O[a>>12&15]+O[a>>8&15]+O[a>>4&15]+O[a&15]+O[o>>28&15]+O[o>>24&15]+O[o>>20&15]+O[o>>16&15]+O[o>>12&15]+O[o>>8&15]+O[o>>4&15]+O[o&15]+O[i>>28&15]+O[i>>24&15]+O[i>>20&15]+O[i>>16&15]+O[i>>12&15]+O[i>>8&15]+O[i>>4&15]+O[i&15];return this.is224||(l+=O[s>>28&15]+O[s>>24&15]+O[s>>20&15]+O[s>>16&15]+O[s>>12&15]+O[s>>8&15]+O[s>>4&15]+O[s&15]),l};De.prototype.toString=De.prototype.hex;De.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,a>>24&255,a>>16&255,a>>8&255,a&255,o>>24&255,o>>16&255,o>>8&255,o&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,s&255),l};De.prototype.array=De.prototype.digest;De.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function Sa(e,t,n){var r,a=typeof e;if(a==="string"){var o=[],i=e.length,s=0,l;for(r=0;r<i;++r)l=e.charCodeAt(r),l<128?o[s++]=l:l<2048?(o[s++]=192|l>>6,o[s++]=128|l&63):l<55296||l>=57344?(o[s++]=224|l>>12,o[s++]=128|l>>6&63,o[s++]=128|l&63):(l=65536+((l&1023)<<10|e.charCodeAt(++r)&1023),o[s++]=240|l>>18,o[s++]=128|l>>12&63,o[s++]=128|l>>6&63,o[s++]=128|l&63);e=o}else if(a==="object"){if(e===null)throw new Error(Mn);if(pr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!pr||!ArrayBuffer.isView(e)))throw new Error(Mn)}else throw new Error(Mn);e.length>64&&(e=new De(t,!0).update(e).array());var u=[],c=[];for(r=0;r<64;++r){var g=e[r]||0;u[r]=92^g,c[r]=54^g}De.call(this,t,n),this.update(c),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}Sa.prototype=new De;Sa.prototype.finalize=function(){if(De.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();De.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),De.prototype.finalize.call(this)}};var kn=Fu();kn.sha256=kn;kn.sha224=Fu(!0);kn.sha256.hmac=Hu();kn.sha224.hmac=Hu(!0);var Bu=kn;var $u=Bu.sha256;function dt(e){return Promise.resolve($u(e))}function Ea(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function qt(e,t){let n=$u.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Uu(e,t){let n=await qt(e,t);return Ea(n)}async function _a(e,t){let n=Gp(t),r=await qt(e,n);return Ea(r)}function Gp(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}var ju=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],mt=class extends re{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),o=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${a}-${o}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:mt.langMap.get(a),SourceText:r,Target:mt.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:mt.langMapReverse.get(s.Response.Source)||a,to:mt.langMapReverse.get(s.Response.Target)||o}}async translateList(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:mt.langMap.get(a),SourceTextList:r,Target:mt.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:mt.langMapReverse.get(s.Response.Source)||a,to:mt.langMapReverse.get(s.Response.Target)||o}}async signedRequest({secretId:n,secretKey:r,action:a,payload:o,service:i,version:s}){let l=`${i}.tencentcloudapi.com`,u=new Date,c=`${new Date().valueOf()}`.slice(0,10),g=["POST","/","","content-type:application/json; charset=utf-8",`host:${l}`,"","content-type;host",await dt(o)].join(`
`),d=mt.getUTCDate(u),f=["TC3-HMAC-SHA256",c,`${d}/${i}/tc3_request`,await dt(g)].join(`
`),m=await Uu(d,`TC3${r}`),b=await _a(i,m),x=await _a("tc3_request",b),p=await _a(f,x),h=await X({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:l,"X-TC-Action":a,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${p}`},body:o});if(h instanceof Error)throw h;if(h.Response&&h.Response.Error&&h.Response.Error.Message)throw new Error(h.Response.Error.Message);return h}},ln=mt;ln.langMap=new Map(ju),ln.langMapReverse=new Map(ju.map(([n,r])=>[r,n]));var Wu=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],hr=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:a,to:o}=n;if(!r)return{...n};let i=hr.langMap.get(a)||"auto",s=hr.langMap.get(o)||"zh-CN",l=await this.fetchWithoutToken(r,i,s);if(!l)throw new Error("google translate NETWORK_ERROR");if(!l.data[0]||l.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:l.data[0].map(c=>c[0]).filter(Boolean).join(""),from:hr.langMapReverse.get(l.data[2])||"auto",to:o}}async fetchWithoutToken(n,r,a){let o=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:a,q:n}),i="https://translate.googleapis.com/translate_a/single?"+o.toString();return{data:await X({url:i})}}},cn=hr;cn.langMap=new Map(Wu),cn.langMapReverse=new Map(Wu.map(([n,r])=>[r,n]));function zu(e){return e.result.texts}function Jp(e,t){return t?e+(t-e%t):e}function Yp(e,t){return e.split(t).length-1}function qu(e){let t=Date.now(),n=1;for(let r of e)n+=Yp(r,"i");return Jp(t,n)}function Xp(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ks(){return Xp(1e6,1e8)}var Ps="https://www2.deepl.com/jsonrpc",La="auto",Vu=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],Ku=["formal","informal"];function Ju(e,t=La,n=ks()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function Qp(e,t=1){let n=[],r=0;for(let a=0;a<e.length;a++){let o=e[a].chunks;for(let i=0;i<o.length;i++){let s=o[i];n.push({kind:"default",_index:a,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:o.slice(0,r).map(l=>l.sentences[0].text),raw_en_context_after:r+1<o.length?[o[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function Gu(e){return e.reduce((t,n)=>{let r=n.chunks;for(let a of r)t.push(a.sentences[0].text);return t},[])}function Zp(e){if(!e)return{};if(!Ku.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function Yu(e,t,n,r=ks(),a=1,o){let i=Gu(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:Qp(n,a),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:Zp(o),timestamp:qu(Gu(n))},id:r}}function eh(e=Vu){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function Rs(e){return eh()[e.toLowerCase()]}var Xu={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function Qu(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function th(e,t,n){let r=Ju(e,t,n);return await X({method:"POST",url:Ps+"?method=LMT_split_text",headers:Xu,body:Qu(r)})}async function nh(e,t,n,r,a,o){let i=await th(e,n,r),s=Yu(n==="auto"?i.result.lang.detected:n,t,zu(i),r,a,o),l=s.params.jobs.map(g=>g._index);s.params.jobs=s.params.jobs.map(g=>{let d={...g};return delete d._index,d});let u=await X({method:"POST",url:Ps+"?method=LMT_handle_jobs",body:Qu(s),headers:Xu}),c={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((g,d)=>{let f=l[d];c.text[f]===void 0&&(c.text[f]="");let m=s.params.jobs[d].sentences[0].prefix,b=s.params.jobs[d].sentences[0].prefix;c.text[f]=c.text[f]+m+g.beams[0].sentences[0].text}),c}async function Zu(e,t,n=La,r,a,o){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:nh(e,Rs(t),Rs(n)??"auto",r,a,o):{text:[],from:n,to:t}}var eg=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Pn=class extends re{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:a,from:o}=n,i=await Zu(r,Pn.langMap.get(a),Pn.langMap.get(o));return{text:i.text,from:Pn.langMapReverse.get(i.from),to:Pn.langMapReverse.get(i.to)}}},un=Pn;un.langMap=new Map(eg),un.langMapReverse=new Map(eg.map(([n,r])=>[r,n]));var tg=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],fS=new Map(tg),dS=new Map(tg.map(([e,t])=>[t,e]));var ng=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Ds="https://transmart.qq.com/api/imt",gn=class extends re{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:a}=n,o=await this.detectLanguage(r),i=gn.langMap.get(o)||o,s=gn.langMap.get(a)||a;if(o===a)return{text:r,from:o,to:a};let l=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await X({url:Ds,body:l,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:o||"auto",to:a}}async translateList(n){let{from:r,text:a,to:o}=n;if(a.length===1){let g=await this.translate({from:r,text:a[0],to:o,url:n.url});return{text:[g.text],from:g.from,to:g.to}}let i=await this.detectLanguage(a.join(`
`));if(i===o)return{text:a,from:i,to:o};let s=gn.langMap.get(i)||i,l=gn.langMap.get(o)||o,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:s,orig_url:n.url},target:{lang:l},type:"plain"}),c=await X({url:Ds,body:u,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:i||"auto",to:o}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await X({url:Ds,method:"POST",body:JSON.stringify(r)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let o=a.language,i=gn.langMapReverse.get(o);return i||o}},fn=gn;fn.langMap=new Map(ng),fn.langMapReverse=new Map(ng.map(([n,r])=>[r,n]));function rg(){return Math.random()>=0}var Rn=class extends re{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await vs(),await er(5e3);let a=r.match(/^\s*/)[0].length;return{text:r.slice(0,a)+"\u6A21\u62DF\uFF1A"+r.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:a,to:o}=n;if(await vs(),!rg())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:a,to:o,text:[""]}:{from:a,to:o,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var sg=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],ag=new Map(sg),og=new Map(sg.map(([e,t])=>[t,e])),br=class extends re{constructor(n,r){super(n,r);this.apikey="";this.codename=br.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...br.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:br.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:a,to:o}=n,i=await X({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:ag.get(a)||"auto",target_lang:ag.get(o)})});if(i.status){let s=i;return{text:s.result,from:og.get(s.source_lang),to:og.get(s.target_lang)}}else throw new Error(i.msg)}},Aa=br;Aa.DEFAULT_CODENAME="deepl";var Ca=Aa;var lg=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],ig=new Map(lg),rh=new Map(lg.map(([e,t])=>[t,e])),Os=class extends re{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:a,text:o}=n,i={source_lang:ig.get(r),target_lang:ig.get(a)},s=new URLSearchParams(i);o.forEach(f=>{s.append("text",f)});let l=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let c=await X({url:u,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:g}=c;return{text:g.map(f=>f.text),from:g[0]&&rh.get(g[0].detected_source_language)||r,to:a}}},cg=Os;var ah=[["auto","auto"],["zh-CN","zh"],["zh-TW","cht"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"]],ug=new Map(ah),Is=class extends re{constructor(n,r){super(n,r);this.APIKEY="";this.isSupportList=!1;if(!n||!n.APIKEY)throw new Error("APIKEY are required");this.APIKEY=n.APIKEY}static getAllProps(){return[{name:"APIKEY",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=r,s={url:"https:///api.niutrans.com/NiuTransServer/translation",headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({src_text:i,from:ug.get(a)||a,to:ug.get(o)||o,apikey:this.APIKEY})},l=await X(s);if(l.tgt_text){let u=l.tgt_text;return u.endsWith(`
`)&&(u=u.slice(0,-1)),{text:u,from:a,to:o}}else throw new Error(JSON.stringify(l))}},gg=Is;var oh=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],ve={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},Ns=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Fs=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=Ns(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(Ns).sort().join(`&${r}=`)}`:`${r}=${Ns(n)}`}).filter(t=>t).join("&"),Dn=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let a=t[r];return typeof a<"u"&&a!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],a=this.credentialString(n);return r.push(`${ve.algorithm} Credential=${t.accessKeyId}/${a}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),a={...this.request.params},o=this.request.params,i=this.request.headers;t.sessionToken&&(a[ve.tokenHeader]=t.sessionToken),a[ve.dateHeader]=r,a[ve.notSignBody]="",a[ve.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,a[ve.algorithmKey]=ve.algorithm,a[ve.signHeadersKey]="",a[ve.signQueriesKey]=void 0,a[ve.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let s=await this.signature(t,r);return this.request.params=o,this.request.headers=i,a[ve.signQueriesKey]=Object.keys(a).sort().join(";"),a[ve.signatureKey]=s,Fs(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[ve.dateHeader]=n,t.sessionToken&&(this.request.headers[ve.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[ve.contentSha256Header]=await dt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return Ea(await qt(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(ve.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=Fs(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,a)=>r[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let a=r[0].toLowerCase();if(this.isSignableHeader(a)){let o=r[1];if(typeof o>"u"||o===null||typeof o.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(o.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await dt(t)}async hexEncodedBodyHash(){return this.request.headers[ve.contentSha256Header]?this.request.headers[ve.contentSha256Header]:this.request.body?await this.hexEncodedHash(Fs(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return oh.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,a){let o=await qt(n,`${ve.kDatePrefix}${t.secretKey}`),i=await qt(r,o),s=await qt(a,i);return qt(ve.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,ve.v4Identifier].join("/")}};var dg=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],fg=new Map(dg),sh=new Map(dg.map(([e,t])=>[t,e])),Hs=class extends re{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async remoteDetectLanguage(n){let r={TextList:[n]},a={region:"cn-north-1",method:"POST",params:{Action:"LangDetect",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(r)},o=new Dn(a,"translate");await o.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let i=new URLSearchParams(a.params),s=await X({url:"https://open.volcengineapi.com"+a.pathname+"?"+i.toString(),headers:o.request.headers,method:a.method,body:a.body});if(s.DetectedLanguageList&&s.DetectedLanguageList.length>0)return s.DetectedLanguageList[0].Language;if(s.ResponseMetadata&&s.ResponseMetadata.Error){let l=s.ResponseMetadata.Error;throw new ke(l.Code,l.Message)}else if(s.ResponseMetaData&&s.ResponseMetaData.Error){let l=s.ResponseMetaData.Error;throw new ke(l.Code,l.Message)}else throw new Error("response: "+JSON.stringify(s))}async translateList(n){let{text:r,from:a,to:o}=n,i=fg.get(a),s={TargetLanguage:fg.get(o)||o,TextList:r};i?s.SourceLanguage=i:s.SourceLanguage=await this.remoteDetectLanguage(r.join(`
`).slice(0,1e3));let l={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new Dn(l,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(l.params),g=await X({url:"https://open.volcengineapi.com"+l.pathname+"?"+c.toString(),headers:u.request.headers,method:l.method,body:l.body});if(g.TranslationList){let d=g.TranslationList.map(m=>m.Translation),f=a;return g.TranslationList.length>0&&g.TranslationList[0].DetectedSourceLanguage&&(f=sh.get(g.TranslationList[0].DetectedSourceLanguage)||a),{text:d,from:f,to:o}}else if(g.ResponseMetadata&&g.ResponseMetadata.Error){let d=g.ResponseMetadata.Error;throw new ke(d.Code,d.Message)}else if(g.ResponseMetaData&&g.ResponseMetaData.Error){let d=g.ResponseMetaData.Error;throw new ke(d.Code,d.Message)}else throw new Error("response: "+JSON.stringify(g))}},mg=Hs;var pg=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],ih=new Map(pg),lh=new Map(pg.map(([e,t])=>[t,e])),yr=class extends re{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:a,to:o}=n,s={source_language:ih.get(a)||"detect",target_language:"zh",text:r},l=await X({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(l.base_resp&&l.base_resp.status_code===0){let u=l.translation,c=a;return l.detected_language&&(c=lh.get(l.detected_language)||a),{text:u,from:c,to:o}}else{let u=l.base_resp;throw new ke(u.status_code.toString(),u.status_message)}}};var ch=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],hg=new Map(ch),xr=class extends re{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:a,to:o}=n,s=await X({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:hg.get(a)||a,target_lang:hg.get(o)||o,text:r})});if(s.code===200)return{text:s.data,from:a,to:o};throw new Error(s.message||s.message||"API Error")}};var Bs="https://{s}bing.com",wg=Bs+"/translator",uh=Bs+"/ttranslatev3",gh=Bs+"/tspellcheckv3",Ma="bingGlobalConfig",vg=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],bg=new Map(vg),yg=new Map(vg.map(([e,t])=>[t,e])),xg=1e3,pt,On;function $s(e,t){return e.replace("{s}",t?t+".":"")}async function fh(){if(!pt){let n=await Y.storage.local.get(Ma);return n&&(pt=n[Ma]),!0}let{tokenTs:e,tokenExpiryInterval:t}=pt;return Date.now()-e>t}async function Tg(){let e,t,n,r,a,o,i,s,l,u;try{let c=$s(wg,e),g=await X({url:c,responseType:"raw"}),{body:d,headers:f,url:m}=g;e=m.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=f["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[a,r,o,i,s,l]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw console.error("failed to fetch global config",c),c}return pt={subdomain:e,IG:t,IID:n,key:a,token:r,tokenTs:a,tokenExpiryInterval:o,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:l,cookie:u,count:0},await Y.storage.local.set({[Ma]:pt}),pt}function dh(e){let{IG:t,IID:n,subdomain:r,isVertical:a}=pt;return $s(e?gh:uh,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+pt.count++:"")}function mh(e,t,n,r){let{token:a,key:o}=pt,i={fromLang:n,text:t,token:a,key:o};return!e&&r&&(i.to=r),i}async function Sg(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>xg)throw new Error(`The supported maximum length of text is ${xg}. Please shorten the text.`);On||(On=Tg()),await On,await fh()&&(On=Tg(),await On),t=t||"auto",n=n||"zh-CN",t=bg.get(t)||t,n=bg.get(n)||n;let a=dh(!1),o=mh(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:$s(wg,pt.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(o),l=a,u=s.toString(),c=await X({url:l,headers:i,method:"POST",body:u});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(pt=null,On=null,await Y.storage.local.remove(Ma),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let g=c[0].translations[0],d=c[0].detectedLanguage;return{text:g.text,from:yg.get(d.language),to:yg.get(g.to)}}var Tr=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:a,to:o}=n;return r?await Sg(r,a,o):{...n}}};var _g=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Eg=new Map(_g),ph=new Map(_g.map(([e,t])=>[t,e])),Us=class extends re{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:a}=this,{appid:o,key:i}=this,{text:s,from:l,to:u}=n,c=new URLSearchParams({from:Eg.get(l),to:Eg.get(u),q:s,salt:r,appid:o,sign:Ln(o+s+r+i)}),g=new URL(a);g.search=c.toString();let d=await X({url:g.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new ke("API_SERVER_ERROR",d.error_msg);let{trans_result:f,from:m}=d,b=f.map(({dst:p})=>p);return{from:ph.get(m),to:u,text:b.join(`
`)}}},Lg=Us;var hh=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Ag=new Map(hh),js=class extends re{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n;a==="auto"&&(a=await ot({text:r.join(" ")}));let i=r;return{text:(await X({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Ag.get(a)}2${Ag.get(o)}`})})).target,from:a,to:o}}},Cg=js;var kg=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Mg=new Map(kg),bh=new Map(kg.map(([e,t])=>[t,e]));function yh(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Ws=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),l=this.appId+yh(r)+i+s+this.appSecret,u=await dt(l),c={q:r,appKey:this.appId,salt:i.toString(),from:Mg.get(a),to:Mg.get(o),sign:u,signType:"v3",curtime:s.toString()},g=new URLSearchParams(c),f=await X({url:"https://openapi.youdao.com/api",method:"POST",body:g.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),m=f.l,[b,x]=m.split("2");return{text:f.translation.join(`
`),from:bh.get(b),to:o}}},Pg=Ws;var In={mock:{class:Rn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:Rn,name:"Mock2",homepage:"https://www.google.com"},google:{class:cn,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:fn,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:cg,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:mg,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:yr,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:Tr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:ln,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:Lg,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Cg,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:Ca,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Pg,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:un,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:xr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"},niu:{class:gg,name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://niutrans.com/documents/contents/beginning_guide/6"}};function zs(e,t){let n=In[e],r=t.config.translationServices[e]||{},a=!0,o=n.class.getAllProps();if(o.length>0){let i=o.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){a=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:a,config:r,props:n.class.getProps(),allProps:o}}var xh=Object.keys(In),Rg=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return xh.filter(a=>{let o=In[a];return a.startsWith("mock")?!!r:!o.alpha||n||a===e.translationService}).map(a=>zs(a,e))};async function qs(e,t){if(!e.text)return e;let n=await Vs({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new ke("translateFailed","translate failed")}async function Vs(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:a}=t,o=r.translationGeneralConfig,i=r.translationServices,s=a,l=i[s]||{},u=[],c={sentences:Array(e.sentences.length)},g=e.sentences.length,d=-1;if(r.cache)for(let x of e.sentences){d++;let p=s;s==="openl"&&(p=s+"-"+l.codename||Ca.DEFAULT_CODENAME);let h=null;try{h=await Wr(bu({originalText:x.text,from:x.from,to:x.to,service:p}),1e3)}catch(T){D.warn("query cache DB error, but it's ok",T)}if(h){let T={...x,text:h.translatedText};c.sentences[d]=T,n&&n(null,T,x)}else u.push(x)}else u.push(...e.sentences);let f=u.length;if(g-f>0&&D.debug(`use ${g-f} sentences from cache`),!u.length)return c;let m;try{m=new In[s].class(l,o),await m.init()}catch(x){if(n)for(let p of u)n(x,null,p);throw x}let b=await m.multipleTranslate({sentences:u},(x,p,h)=>{if(n&&(n(x,p,h),!x&&p&&!s.startsWith("mock")&&r.cache)){let T=s;s==="openl"&&(T=s+"-"+l.codename||Ca.DEFAULT_CODENAME),r.cache&&Wr(yu({translatedText:p.text,from:h.from,to:h.to,detectedFrom:p.from,key:Ln(h.text),service:T}),3e3).catch(E=>{D.warn("set cache DB error",E)})}});for(let x of b.sentences){let p=c.sentences.findIndex(h=>!h);if(p===-1)throw new ke("translateFailed","can not match the result");c.sentences[p]=x}return c}var Dg=["*://*/*","*","*://*"],Ig="immersive-translate-wildcard-placeholder.com";function Ks(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>Dg.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let a=r.href,o=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let l=s;if(s===o)return!0;if(Dg.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===o:wh(a,s)}catch{}return!1}else{let u,c=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let g=s.replace(/\*/g,Ig),d;try{d=new URL(g)}catch{return D.debug("invalid match pattern",g,"raw match value:",c),!1}let f=d.hostname,m=d.pathname;m==="/"&&(c.replace("://","").includes("/")||(m="/*"));let b=Th(u+":",Og(f),Og(m));if(b){let x=new URL(a);return x.port="",b.test(x.href)}else return!1}});if(i)return i}return null}function Og(e){return e.replace(Ig,"*")}function Th(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function wr(e,t){return Ks(e,t)!==null}function wh(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}async function Ct(e){let{url:t,config:n,state:r}=e,a=new URL(t),o="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:l,translationTheme:u,translationThemePatterns:c,translationUrlPattern:g,targetLanguage:d,sourceLanguageUrlPattern:f,immediateTranslationPattern:m}=n,b=Nn(t,i),x=Nn(t,m),p=s,h=Object.keys(l);for(let k of h){let F=l[k];if(Nn(t,F)){p=k;break}}let T=u,E=Object.keys(c);for(let k of E){let F=c[k];if(Nn(t,F)){T=k;break}}let I=Nn(t,g),S=vh(t,g);S||(S=wr(t,$i));let w=Object.keys(f),R={};for(let k of w){let F=f[k];if(F&&F.matches)for(let oe of F.matches)R[oe]=k}let _=Object.keys(R),U=Ks(t,_);U&&(o=R[U]??"auto",R[U]&&R[U]!=="auto"&&Bt(R[U]));let K=d||"zh-CN",M=a.hostname,H=await dt(M),V=a.pathname+a.search+a.hash,J=await dt(V),Pe=`https://${H}.com/${J}`,Ye=await Xn(),Se=n.translationStartMode;Se==="dynamic"&&x&&(Se="immediate");let pe={targetLanguage:K,config:n,translationService:p,translationTheme:T,isTranslateUrl:I,sourceLanguage:o,isTranslateExcludeUrl:S,rule:n.generalRule,url:t,encryptedUrl:Pe,state:r||{translationArea:n.translationArea,translationStartMode:Se,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:b},localConfig:Ye};pe.state.translationArea==="body"&&(pe.config.generalRule.excludeTags=pe.config.generalRule.excludeTags.filter(k=>k!=="BUTTON"&&k!=="LABEL"),pe.config.generalRule.additionalExcludeSelectors=pe.config.generalRule.additionalExcludeSelectors.filter(k=>k!==".btn")),pe.translationService==="d"&&(n.immediateTranslationTextCount=0);let st=n.rules,le;globalThis.PDFViewerApplication?le=st.find(k=>k.isPdf):le=st.find(k=>Nn(t,k));let v=n.generalRule;return le&&(pe.rule=jr(v,le)),pe.rule.isPdf&&(pe.state.translationArea="main"),pe.state.translationArea==="body"&&(pe.rule.paragraphMinTextCount=1,pe.rule.paragraphMinWordCount=1),pe}function Nn(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:a,excludeSelectorMatches:o}=t;return r&&r.length>0&&wr(e,r)?!1:n&&n.length>0&&wr(e,n)?!0:o&&o.length>0&&Fr(o)?!1:!!(a&&a.length>0&&Fr(a))}function vh(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&wr(e,n)||r&&r.length>0&&Fr(r))}var Pa="Original",ka=[],Qs=new Set,Gs=[],Ra=[],Fg=[],Da=[],Ng=We().split("#")[0],Zs=0,Le,Sh=It(kh,300),Eh=It(Bg,200),ei=Et(),_h=ei.PROD==="1",Fn,vr=new Map,Hg,Sr="";async function ha(){Ze()==="Original"?await jt():(Ze()==="Translated"||Ze()==="Error")&&Ut()}function Ut(){_s();let e=[document.body,...vr.keys()];for(let t of e)Xs(t),t.querySelectorAll("."+Xe).forEach(o=>{o.remove()}),t.querySelectorAll("."+Or).forEach(o=>{o.remove()}),t.querySelectorAll("["+to+"]").forEach(o=>{if(_h)delete o[Ce];else{let s=Object.keys(o.dataset).filter(l=>l.startsWith(de));for(let l of s)delete o.dataset[l]}o.removeAttribute(to)});zg(),je("Translating"),Sr&&(document.title=Sr),je("Original")}function Lh(e,t){let n=!1,r=io(e.elements),a=Pt(e.elements);Qs.add(e.id);let o=[];if(r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Ra.push(s),o.push(s),s.observe(r)}if(a&&a!==r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Ra.push(s),o.push(s),s.observe(a)}let i=Wt(e.id);i&&(i.observers=o,mr(e.id,i))}function Ah(e,t){if(e){let n=new ResizeObserver((r,a)=>{for(let o of r)o.contentRect.width>10&&(a.disconnect(),t(o.target))});n.observe(e),Fg.push(n)}}async function Bg(e){let t=[...Da];Da=[];let n=new Map;t.forEach(r=>{n.has(r.rootFrame)||n.set(r.rootFrame,[]),n.get(r.rootFrame)?.push(r.element)});for(let[r,a]of n)try{let o=[];for(let i of a){let s=Ss(i,e);if(s.length===0)continue;let l=s;o.push(...l)}await ti(o,r,e)}catch(o){D.error(`translateNewDynamicNodes error: ${o.message}`)}}function Js(e,t){Qs.delete(e.id);let n=Wt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(o=>{o.disconnect()}),n.observers=[],n.state="Translating",mr(e.id,n));let r=e.id;Zs+=e.text.length;let a=Nr(e.elements);if(e.isPdf){let o=io(e.elements),i=globalThis.getComputedStyle(o),s=i.top,l=i.fontSize,u=parseFloat(l.slice(0,-2));isNaN(u)||u>20&&(l="20px");let c=e.targetContainer,g=document.createElement("span");a.length===1&&(g.style.fontSize=l),g.id=`${Xe}-${r}`,g.style.top=s;let d=Rt(o,Vn),f=a.reduce((x,p)=>{let h=Rt(p,Vn);return h&&h<x?h:x},1e3),b=a.reduce((x,p)=>{let h=Rt(p,Rr);return h&&h>x?h:x},0)-f;b<30,b>600&&(b=600),d<200&&(d=10),d&&d<0&&(d=0),g.style.left=`${f||10}px`,f<400?g.style.width=b+"px":g.style.width=`calc(100% - ${f}px)`,g.classList.add("notranslate",`${Xe}`),c.appendChild(g)}else{let o=Pt(e.elements),i="afterend";e.elements.length>0&&o&&(a.length===1?i="beforeend":ut(e.elements[0],t.rule)||(i="beforeend")),t.rule.insertPosition&&(i=t.rule.insertPosition);let s=document.createElement("span");if(s.classList.add("notranslate",Xe),s.id=`${Xe}-${r}`,s.innerHTML=jg(),i==="beforeend"){let l=Xi(o);l?l.appendChild(s):o.appendChild(s)}else if(i==="afterend")o.insertAdjacentElement(i,s);else throw new Error("not support position")}ka.push(r),Sh(t)}function Ch(e,t){t.state.translationStartMode==="dynamic"&&Zs>t.config.immediateTranslationTextCount?Lh(e,n=>{Js(n,t)}):Js(e,t)}async function jt(){if(Pa==="Translating")return;je("Translating");let e=await Vt(We());if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),o=new URL(e.url).hostname,i=e.localConfig.tempTranslationUrlMatches||[],s=i.findIndex(u=>u.match===o&&u.expiredAt>r),l=!1;s>-1||(i.push({match:o,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),l=!0),l&&await Qn({...e.localConfig,tempTranslationUrlMatches:[...i]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),D.debug("ctx",e),e.state.isNeedClean?Ut():Le.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Tu(()=>{Zs=0,Eu(),Ra.forEach(r=>{r.disconnect()}),Fg.forEach(r=>{r.disconnect()}),Ra=[],Qs.clear()}),je("Translating");try{let r=[document.body];document.querySelectorAll("iframe").forEach(i=>{fo(i)&&(r.push(i.contentDocument.body),go(i.contentDocument,ei.IMMERSIVE_TRANSLATE_INJECTED_CSS))}),e.rule.shadowRootSelectors&&e.rule.shadowRootSelectors.length>0&&Ve(document.body,e.rule.shadowRootSelectors).forEach(s=>{s.shadowRoot&&s.shadowRoot.mode==="open"&&r.push(s.shadowRoot)});let o=0;je("Translating"),D.debug("allFrames",r);for(let i of r)o+=await $g(i,e);o===0&&je("Translated"),Ug(e).catch(i=>{D.error("translateTitle error:",i.name,i.message,i.details||"")}),Rh(e)}catch(r){je("Error"),D.error(r)}}async function $g(e,t){mo([e],t.rule);let n=Ss(e,t);D.debug("detect containers",n);let{rule:r}=t;n.length>0&&await ti(n,e,t);let a=Ph(e,r,t);return e===document.body?Hg=a:vr.set(e,a),n.length}async function Vt(e){let t=await Je();if(!Le)Le=await Ct({url:e,config:t});else{let n={url:e,config:t,state:Le.state};Le=await Ct(n)}return Le}async function uu(){Ze()==="Original"?await ba():(Ze()==="Translated"||Ze()==="Error")&&(Le=await Vt(We()),Le.state.translationArea!=="main"?await ba():Ut())}async function ba(){Le=await Vt(We()),Le.state.translationArea="main",await jt()}async function ws(){Le=await Vt(We()),Le.state.translationArea="body",await jt()}async function gu(){Ze()==="Original"?await ws():(Ze()==="Translated"||Ze()==="Error")&&(Le=await Vt(We()),Le.state.translationArea!=="body"?(Le.state.translationArea="body",await jt()):Ut())}async function fu(){Le=await Vt(We()),Le.state.translationArea="body",Le.state.translationStartMode="immediate",await jt(),await Bg(Le)}async function Ug(e){let t=document.title;if(!t||t.includes(Dr))return;Sr!==t&&(Sr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=fa()),n==="auto"){let r=await ot({text:t});if(fr(r,e.targetLanguage))return}try{let r=await qs({id:0,url:e.url,text:t,from:n,to:e.targetLanguage,fromByClient:n},e);r&&r.text&&(document.title=Sr+Dr+r.text)}catch(r){throw r}}function Mh(e,t){let n=e.querySelector("#"+Xe+"-"+t);n&&(n.innerHTML=jg())}function jg(){return`&nbsp;<span class="${fe}-loading notranslate"></span>`}async function ti(e,t,n){let{rule:r}=n;mo(e,r);let a=[];if(n.rule.isPdf)e.length>0&&(je("Translating"),a=Ou(e,r).targetContainers);else{je("Translating");let i=Du(e,r),{hiddenElements:s}=i;for(let l of s)Ah(l,()=>{Ji(l,ct,!0),ti([l],t,n)});je("Translating")}let o=[];if(n.rule.isPdf?o=await Mu(t,e,n,a):(e=e.filter(i=>!Ke(i,r,!1)),o=await _u(t,e,n)),je("Translating"),o.length===0){je("Translated");return}D.debug("detect paragraphs",o);for(let i of o)Ch(i,n);je("Translated")}async function Wg(e){let t=Wt(e);if(!t)throw new Error("paragraph not found");Mh(t.rootFrame,e);let n=await Vt(We()),r={id:t.id,text:t.text,from:t.languageByLocal,fromByClient:t.languageByClient,to:n.targetLanguage,url:n.encryptedUrl};try{let a=await qs(r,n);Ys(null,a,r,n)}catch(a){Ys(a,null,r,n)}}function Ys(e,t,n,r){let a=Wt(n.id);if(a&&(e||!t)){e||(D.error("translate error",t),e=new Error("no response from server"));let o=n.id,i=a.rootFrame.querySelector(`#${Xe}-${o}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),a&&(a.state="Error",mr(a.id,a));let l=`<span class="${fe}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${fe}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${fe}-clickable-button notranslate" data-${fe}-paragraph-id="${o}" data-${fe}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=l)}else{let o=Wt(n.id);if(o){o.state="Translated",mr(o.id,o);let i=Pu(o,t,r),s=t.id,l=o.rootFrame.querySelector(`#${Xe}-${s}`);l&&(l.innerHTML=i.html,o.rootFrame.querySelectorAll(`[${en}="${s}"]`).forEach(c=>{ie(c,yn,"1")}))}else D.error("paragraph not found",n.id)}}async function kh(e){if(ka.length===0)return Promise.resolve();let t=[...ka];ka=[];let n="auto";e.state.isDetectParagraphLanguage||(n=$t());let r={sentences:t.filter(o=>Wt(o)).map(o=>{let i=Wt(o),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){je("Translating");try{await Vs(r,e,(o,i,s)=>{Ys(o,i,s,e)})}catch(o){je("Error"),D.error("translateCurrentQueue error",o.name,o.message,o.details||" ");return}}je("Translated")}function je(e){Pa=e,hu(Pa)}function Ph(e,t,n){D.debug("enableMutatinObserver for ",e),Xs(e),Gs=[],Da=[];let r=t.inlineTags.concat(t.excludeTags).concat("#text","BR"),a=new MutationObserver(function(o){o.forEach(i=>{if(e===document.body){let s=We();if(s.split("#")[0]!==Ng&&t.observeUrlChange){Ng=s.split("#")[0],_s(),Xs(e),zg(),setTimeout(()=>{D.debug("url changed, reinit page"),Oa()},t.urlChangeDelay);let u=new Event(Pi);document.dispatchEvent(u);return}}i.addedNodes.forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let l=s;if(l.nodeName==="IFRAME")fo(l)&&setTimeout(()=>{go(l.contentDocument,ei.IMMERSIVE_TRANSLATE_INJECTED_CSS),$g(l.contentDocument.body,n).catch(u=>{D.error("translateFrame error",u.details||" ",u)})},n.rule.urlChangeDelay);else if(Dh(t,l)||!r.includes(l.nodeName)){if(l.classList.contains("notranslate"))return;Wi(l,Gs)||(Da.push({element:l,rootFrame:e}),Gs.push(l),Eh(n))}}})})});return a.observe(e,{childList:!0,subtree:!0}),a}function Rh(e){let t=document.querySelector("title");t&&(Fn=new MutationObserver(function(n){n.length>0&&(n[0].target.text.includes(Dr)||Ug(e).catch(a=>{D.error("translateTitle error:",a.name,a.message,a.details||"")}))}),Fn.observe(t,{subtree:!0,characterData:!0,childList:!0}))}function Dh(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Oa(){let e=Tn(),t=await Vt(We());t.rule.urlChangeDelay&&await er(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?(ge()?n=await ot({text:nn(document.body).slice(0,1e3)}):e?n=await ot({text:nn(document.body).slice(0,1e3)}):n=await pu(),n==="auto"&&(n=await xu()),iu(n)):Bt(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(D.debug(`detect page language: ${n}`),Qi(n,t.config.translationLanguagePattern)&&(r=!0,D.debug(`match language pattern ${n}, auto translate`))),r?(Le.state.isAutoTranslate=!0,await jt()):D.debug("do not auto translate",t)}function Xs(e){if(vr.has(e)){let t=vr.get(e);t.disconnect(),t.takeRecords(),vr.delete(e)}else if(e===document.body){let t=Hg;t&&(t.disconnect(),t.takeRecords())}}function zg(){Fn&&(Fn.disconnect(),Fn.takeRecords(),Fn=void 0)}function Ze(){return Pa}function qg(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function ni(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let a=t[r],o=Oh(r);if(typeof a=="object"||o){let i=a;o&&typeof i=="string"&&(i={tag:"a",href:i});let s=`<${r}>`,l=n.indexOf(s);if(l!==-1){let u=i.tag||"a",c=n.indexOf(`</${r}>`);if(c!==-1){let g=n.substring(l+s.length,c),d=Object.keys(i).filter(f=>f!=="tag").map(f=>`${f}="${i[f]}"`).join(" ");n=n.replace(`${s}${g}</${r}>`,`<${u} ${d}>${g}</${u}>`)}}}else{let i=new RegExp("{"+r+"}","gm");n=n.replace(i,a.toString())}}),n}function Er(e,t,n){let r=e[t];if(!r)return n;let a=n.split("."),o="";do{o+=a.shift();let i=r[o];i!==void 0&&(typeof i=="object"||!a.length)?(r=i,o=""):a.length?o+=".":r=n}while(a.length);return r}function ri(e,t,n,r,a){if(!e.hasOwnProperty(n))return t;let o=Er(e,n,t);return o===t&&n!==r&&(o=Er(e,r,t)),ni(o,a)}function Oh(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var Vg={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},ai={...Xt,"zh-CN":{...Vg["zh-CN"],...Xt["zh-CN"]},"zh-TW":{...Vg["zh-TW"],...Xt["zh-TW"]}},Kg=ai;function Ia(e,t,n){return ri(ai,e,t,Ir,n)}var Na=(e,t,n)=>{let r=ri(ai,`languages.${e}`,t,"en");return n?so[e]||e:r!==`languages.${e}`?r:so[e]};function Gg(e){document.addEventListener("click",t=>{let n=t.target,r=n.getAttribute("data-immersive-translate-action");if(r&&r==="retry"){let a=n.getAttribute("data-immersive-translate-paragraph-id");a&&Wg(Number(a))}}),e.rule.fingerCountToToggleTranslagePageWhenTouching>=2&&globalThis.addEventListener("touchstart",t=>{if(t.touches.length==e.rule.fingerCountToToggleTranslagePageWhenTouching){ha();let n=new CustomEvent(Mt,{detail:{method:"toggleTranslatePage"}});globalThis.document.dispatchEvent(n)}}),ge()&&globalThis.top!=globalThis.self&&globalThis.addEventListener("message",t=>{t&&t.data&&t.data.payload&&t.data.author===Cr&&on(t.data.payload,{tab:{id:1,url:"https://www.fake-iframe.com",active:!0}})},!1)}function _r(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}async function Fa(e){try{let t=new Date;D.debug("cron task start, next will run at",new Date(t.getTime()+e).toLocaleString()),await Y.storage.local.set({[Kn]:t.toISOString()}),await Ih()}catch(t){D.error("run cron task failed",t)}}async function Jg(){let t=(await Je()).interval;if(t){let n=await Y.storage.local.get(Kn);if(n&&n[Kn]){let r=n[Kn];if(Date.now()-new Date(r).getTime()<t){let a=new Date(new Date(r).getTime()+t);D.debug(`cron task not run, next will run at ${a}`);return}else Fa(t)}else Fa(t)}}async function Ih(){try{let e=await Je(),t=await X({url:qn}),n=e.buildinConfigUpdatedAt,r=new Date(n),a=t.buildinConfigUpdatedAt,o=new Date(a),i=t.minVersion,s=Y.runtime.getManifest().version;_r(s,i)?o>r?(await Y.storage.local.set({buildinConfig:t}),D.info(`sync remote rules success, latest: ${new Date(a).toLocaleString()}`)):D.debug(`no need to sync rules, latest: ${r}`):D.info(`local version is too old, please update to ${i} or later`)}catch(e){D.error("sync rules error: ",e)}}function Yg(){let e=["localhost",kr],t=["/dist/userscript/options/","/options/","/options"],n=We(),r=new URL(n),a=r.hostname,o=r.pathname;if((e.includes(a)||a.startsWith("192.168"))&&t.includes(o)){let i=document.querySelector("meta[name=immersive-translate-options]");if(i&&i.getAttribute("content")==="true")return!0}return!1}async function Qg(){if(!document.getElementById("immersive-translate-status")){D.error("Could not find status element");return}await Xg("local"),await Xg("sync"),Nh();let t=document.getElementById("immersive-translate-page-ready");t&&setTimeout(()=>{t.value="true",t.dispatchEvent(new Event("change"))},100)}function Nh(){let e=document.getElementById("immersive-translate-manifest");if(!e){D.error("Could not find manifest element");return}e.value=JSON.stringify(Y.runtime.getManifest()),e.dispatchEvent(new Event("change"))}async function Xg(e){let t=document.getElementById("immersive-translate-status"),n=document.getElementById(`immersive-translate-${e}-storage`);if(n){D.debug("init storage");let r=await Y.storage[e].get(null);n.value=JSON.stringify(r),n.dispatchEvent(new Event("change")),n.addEventListener("change",a=>{try{let o=JSON.parse(a.target.value);Y.storage[e].set(o)}catch(o){D.error("save to storage error",o)}})}else{D.error(`Could not find storage ${e} element`),t.innerText="Could not find storage local input element";return}}function Ha(e){on(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(r=>{D.error("send content message request failed",e,r)}),document.querySelectorAll("iframe").forEach(r=>{r.contentWindow&&r.contentWindow.postMessage({author:Cr,payload:e},"*")});let n=new CustomEvent(Mt,{detail:e});globalThis.document.dispatchEvent(n)}function Zg(e){let t=e.shortcuts||{},r=Object.keys(t).reduce((o,i)=>(o[t[i]]=i,o),{}),a=Object.keys(r);for(let o of a){let i=o.replace(/MacCtrl/ig,"Ctrl");rt(i,s=>{s.preventDefault(),Ha({method:r[o]})})}}var Hn={},Fh={root:"",lang:"en",fallbackLang:"en"};function oi(e,t){let n=Object.assign({},Fh,e);Hn=t||Hn;let[r,a]=se(n.lang),[o,i]=se(Hn),[s,l]=se(!1),u=g=>{if(o.hasOwnProperty(g))return;l(!1);let d=qg(n.root||"",g);n.getUrl&&(d=n.getUrl(n.root||"",g),fetch(d).then(f=>f.json()).then(f=>{Hn[g]=f,i({...Hn}),l(!0)}).catch(f=>{i({...Hn}),l(!0)}))};return ze(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:a,t:(g,d)=>{if(!o.hasOwnProperty(r))return g;let f=Er(o,r,g);return f===g&&r!==n.fallbackLang&&(f=Er(o,n.fallbackLang,g)),ni(f,d)},isReady:s}}var Hh=0;function P(e,t,n,r,a){var o,i,s={};for(i in t)i=="ref"?o=t[i]:s[i]=t[i];var l={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Hh,__source:a,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return q.vnode&&q.vnode(l),l}var ii=Lo(null),si={root:"assets",lang:"en",fallbackLang:"en"},ef=e=>{let{t,setLang:n,lang:r,isReady:a}=oi({root:e.root||si.root,lang:e.lang||si.lang,fallbackLang:e.fallbackLang||si.fallbackLang,getUrl:e.getUrl},e.translations);return P(ii.Provider,{value:{t,setLang:n,lang:r,isReady:a},children:e.children})};function tf(e,t,n){let r=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),r=t!=="auto"?n[t].matches:[];let a={},o=Object.keys(n);for(let u of o){let g=n[u].matches;for(let d of g)a[d]||(a[d]=[]),a[d].push(u)}let i=a[e];if(i&&i.length>0)for(let u of i)n[u].matches.indexOf(e)>-1&&(n[u]={...n[u],matches:n[u].matches.filter(g=>g!==e)});let s=new Set(r);if(t==="auto")return{...n};s.add(e);let l=Array.from(s);return{...n,[t]:{...n[t],matches:l}}}function nf(e,t=2e3){return n=>{let r,a=0;return o=>{++a==e&&(n(o),a=0),clearTimeout(r),r=setTimeout(()=>a=0,t)}}}function rf(e){let t;try{t=new URL(e)}catch{return!1}let n=t.pathname;return n.endsWith(".html")||n.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}function af(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function of(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Ba(){return Y.runtime.getManifest().version}function Kt(e){let{items:t,maxWidth:n}=e;return n=n||128,P("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let a=r.target.value,o=t.find(i=>i.value===a);o&&o.onSelected(o)},children:t.map(r=>P("option",{value:r.value,selected:r.selected,children:r.label}))})}var $a="DROP_DOWN_DEFAULT_VALUE";function li(e){let{showArrow:t,onSelected:n,className:r,menus:a,maxWidth:o}=e;r=r||"",t=t??!0,o=o||60;let i=Mo(null);return P("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${r||""}`,value:$a,style:{maxWidth:`${o}px`},onChange:s=>{s.preventDefault();let l=s.target.value;if(i.current&&l!==$a){i.current.value=$a,i.current?.dispatchEvent(new Event("change"));let u=a.find(c=>c.value===l);u&&n(u)}},children:[{value:$a,label:e.label}].concat(a).map(s=>P("option",{value:s.value,children:s.label}))})}function Tt(){return ko(ii)}function ci(e){let{field:t,onChange:n,value:r}=e;r=r||t.default||"";let{t:a}=Tt();return t.type==="select"?P("div",{class:"flex justify-between mb-2",children:[P("label",{class:"inline-block",children:[t.label?a(t.label):t.name,"\uFF1A"]}),P(Kt,{items:t.options.map(o=>({label:`${o.label?a(o.label):o.value}`,value:r,selected:r===o.value,onSelected:()=>{n(o.value)}}))})]}):null}var Bh=({date:e})=>{let{t}=Tt(),[n,r]=se(!1);return ze(()=>{setTimeout(()=>{r(!0)},5e3)},[]),n?null:P("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},$h=({minVersion:e})=>{let{t}=Tt();return P("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},Uh=()=>{let{t:e}=Tt();return P("p",{class:"text-sm",dangerouslySetInnerHTML:{__html:e("badUserscriptBrowser",{1:"https://immersive-translate.owenyoung.com/installation.html"})}})},jh=({message:e,handleSyncing:t,date:n})=>{let{t:r}=Tt();return P("p",{class:"text-sm",children:[r("failToSyncRules")," ",P("a",{onClick:t,children:r("retry")}),P("br",{}),r("failedReason"),"\uFF1A",e,P("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function ui(e){let{request:t}=e,[n,r]=se(null),{t:a}=Tt(),[o,i]=se(null),[s,l]=se(null),[u,c]=se(""),[g,d]=se(!1),[f,m]=se(!1),[b,x]=se(!1),[p,h]=se(null),[T,E]=se(null),I=Ba(),S=async()=>{c("");let w=o;if(o===null)try{let R=await t({url:qn});R?(i(R),w=R,d(!0)):(c(a("unknownError")),l(null))}catch(R){l(null),c(R.message);return}w!==null?(e.setStorageBuildinConfig(w),l(!1),r(w.buildinConfigUpdatedAt)):(c(a("canNotFetchRemoteRule")),l(null))};return ze(()=>{Zn().then(w=>{let R=w.buildinConfigUpdatedAt;h(w);let _=new Date(R);if(r(R),I==="0.0.0"){x(!0);return}t({url:qn}).then(U=>{let K=U,M=K.minVersion,H=I;i(K);let V=K.latestVersion;if(V&&(_r(H,V)?E(!0):E(!1)),_r(H,M)){let J=K.buildinConfigUpdatedAt;new Date(J)>_?(l(!0),S()):l(!1)}else m(!0),l(null)}).catch(U=>{l(null),c(U.message)})})},[]),ze(()=>{Zn().then(w=>{h(w)})},[n]),p?P("div",{class:"text-sm mt-2",style:{maxWidth:218},children:b?P(Uh,{}):u?P(jh,{handleSyncing:S,message:u,date:n||""}):f?P($h,{minVersion:o.minVersion}):s===null||s===!0?null:g?P(Bh,{date:n}):null}):null}function gi(e){let t=Ba(),{onTranslateTheMainPage:n,onUserConfigChange:r,request:a,onSetBuildinConfig:o,pageStatus:i,config:s,openAboutPage:l,onTranslateTheWholePage:u,openOptionsPage:c,ontranslateToThePageEndImmediately:g,onSetPageLanguage:d,onToggleTranslate:f,onTranslateLocalPdfFile:m,onTranslatePdf:b,onRestorePage:x,ctx:p,currentUrl:h,currentLang:T,onClose:E,onTranslatePage:I,onSetLocalConfig:S}=e,w=r,[R,_]=se(""),[U,K]=se(""),{t:M}=Tt(),H=null,V=null,J=null,Pe=null,Ye=null,Se=null,pe=null,st=null,le=null,v=null,k=null,F=null;if(s){let{translationService:C,translationServices:B,translationUrlPattern:N}=s;if(In[C]&&(st=zs(C,p)),B&&B[C]?F=B[C]||{}:F={},h&&rf(h)){le=new URL(h),v=af(le.hostname),k=of(h);let{matches:z,excludeMatches:Z}=N;V=z.includes(v),H=z.includes(le.hostname),Pe=Z.includes(v),J=Z.includes(le.hostname),Se=z.includes(k),pe=Z.includes(k)}}if(s&&T&&T!=="auto"){let{translationLanguagePattern:C}=s,{matches:B}=C;B.includes(T)?Ye=!0:Ye=!1}let oe=C=>{C.preventDefault(),c()},G=C=>{w(B=>(B.alpha?_("Success disable alpha!"):_("Success enable alpha!"),{...B,alpha:!B.alpha}))},Ee=()=>{w(C=>({...C,translationArea:"body"})),u()},Oe=()=>{w(C=>({...C,translationArea:"main"})),n()},be=(C,B,N,z)=>{if(C==="default"){w(ye=>{let Ae={...ye.translationUrlPattern};return{...ye,translationUrlPattern:{...ye.translationUrlPattern,matches:Dt([le?.hostname,v,h],Ae.matches),excludeMatches:Dt([le?.hostname,v,h],Ae.excludeMatches)}}});return}let Z=C,he=Z==="matches"?"excludeMatches":"matches";le&&w(ye=>{let Ae={...ye.translationUrlPattern};return Ae[Z]=wo(B,Ae[Z]),z.length>0&&(Ae[Z]=Dt(z,Ae[Z])),Ae[he]=Dt(N,Ae[he]),{...ye,translationUrlPattern:{...ye.translationUrlPattern,...Ae}}}),Z==="matches"&&i==="Original"?setTimeout(()=>{I(),E()},100):Z==="excludeMatches"&&i==="Translated"&&setTimeout(()=>{x(),E()},100)},xe=C=>{if(!C){w(z=>{let Z={...z.translationLanguagePattern};return{...z,translationLanguagePattern:{...z.translationLanguagePattern,matches:Dt(T,Z.matches),excludeMatches:Dt(T,Z.excludeMatches)}}});return}let B=C,N=B==="matches"?"excludeMatches":"matches";T&&w(z=>{let Z={...z.translationLanguagePattern};return Z[B]=wo(T,Z[B]),Z[N]=Dt(T,Z[N]),{...z,translationLanguagePattern:{...z.translationLanguagePattern,...Z}}}),B==="matches"&&i==="Original"&&setTimeout(()=>{I(),E()},100)},ce=le?.pathname.toLowerCase().endsWith(".pdf"),Q=M("translate");i==="Translated"?Q=M("show-original"):i==="Original"?ce?gl()&&le.protocol==="file:"?Q=M("translate-firefox-local-pdf"):Q=M("translate-pdf"):Q=M("translate"):Q=M(i);let ue=M("translateToThePageEndImmediately");(i==="Original"||i==="Translated")&&(s.shortcuts.toggleTranslatePage&&(fl()&&p.rule.fingerCountToToggleTranslagePageWhenTouching>=2?Q+=` (${M(`fingers.${p.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:Q+=` (${s.shortcuts.toggleTranslatePage})`),s.shortcuts.toggleTranslateToThePageEndImmediately&&(ue+=` (${s.shortcuts.toggleTranslateToThePageEndImmediately})`));let $=[];p&&($=Rg(p));let te=C=>{C.preventDefault(),E()};return P("div",{class:"p-3",children:[P("div",{class:"text-sm",children:[P("div",{class:"flex justify-between mb-2",children:[P("label",{class:"inline-block",children:[M("popupSourceLanguage"),"\uFF1A"]}),P(Kt,{items:kt.map(C=>({label:Na(C,s.interfaceLanguage),value:C,selected:C===T,onSelected:B=>{d(B.value)}}))})]}),s&&s.targetLanguage&&P("div",{class:"flex justify-between mb-2",children:[P("label",{class:"inline-block",children:[M("popupTarget"),"\uFF1A"]}),P(Kt,{items:kt.filter(C=>C!=="auto").map(C=>({label:Na(C,s.interfaceLanguage),value:C,selected:C===s.targetLanguage,onSelected:B=>{w(N=>({...N,targetLanguage:B.value}))}}))})]}),st&&$.length>0&&P(bt,{children:[P("div",{class:"flex justify-between mb-2",children:[P("label",{class:"inline-block",children:[M("popupService"),"\uFF1A"]}),P(Kt,{items:$.map(C=>({label:`${M("translationServices."+C.id)}${C.ok?"":" "+M("needAction")}`,value:C.id,selected:C.selected,onSelected:B=>{let N=$.find(z=>z.id===B.value);N.ok?(w(z=>({...z,translationService:N.id})),N.props.length===0?setTimeout(()=>{I()},1):setTimeout(()=>{x()},1)):(w(z=>({...z,translationService:N.id})),setTimeout(()=>{c()},100))}}))})]}),F&&st.props.length>0&&st.props.map((C,B)=>P("div",{class:"pl-4 text-sm",children:P(ci,{field:C,value:F[C.name],onChange:N=>{w(z=>{let Z=z.translationServices||{},he=Z[st.id]||{};return setTimeout(()=>{x()},1),{...z,translationServices:{...Z,[st.id]:{...he,[C.name]:N}}}})}},"field-"+B)}))]}),le&&P("div",{class:"flex justify-between mb-2",children:[P("label",{class:"inline-block",children:M("forThisSite")}),P(Kt,{items:[{label:M("default"),value:"default",selected:H===!1&&J===!1&&!V&&!Pe&&!Se&&!pe,onSelected:()=>{be("default",le.hostname,[],[]);let C=le.hostname,B=p.localConfig.tempTranslationUrlMatches||[],N=B.filter(Z=>Z.match!==C),z=!1;N.length!==B.length&&(z=!0),z&&S({...p.localConfig,tempTranslationUrlMatches:[...N]})}},k&&{label:M("alwaysTranslateSomeSite",{hostname:M("currentUrl")}),value:"matchesUrl",selected:Se,onSelected:()=>{be("matches",k,[k],[])}},{label:M("alwaysTranslateSomeSite",{hostname:le.hostname}),value:"matches",selected:H,onSelected:C=>{be(C.value,le.hostname,[le.hostname,v,k],[v])}},v&&{label:M("alwaysTranslateSomeSite",{hostname:v}),value:"matchesWild",selected:V,onSelected:()=>{be("matches",v,[k,le.hostname,v],[le.hostname])}},k&&{label:M("neverTranslateSomeSite",{hostname:M("currentUrl")}),value:"excludeMatchesUrl",selected:pe,onSelected:()=>{be("excludeMatches",k,[k],[])}},{label:M("neverTranslateSomeSite",{hostname:le.hostname}),value:"excludeMatches",selected:J,onSelected:C=>{be(C.value,le.hostname,[le.hostname,v,k],[v])}},v&&{label:M("neverTranslateSomeSite",{hostname:v}),value:"excludeMatchesWild",selected:Pe,onSelected:()=>{be("excludeMatches",v,[le.hostname,k,v],[le.hostname])}}].filter(Boolean)})]})]}),P("div",{class:"",children:P("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{ce?b&&b():f()},"aria-busy":i==="Translating",disabled:i==="Translating",children:Q})}),P("div",{class:"flex justify-between",children:[T&&T!=="auto"?P("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[P("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!Ye,onChange:C=>{let B=C.target.checked;xe(B?"matches":void 0)}}),M("alwaysTranslateSomeLanguage",{language:Na(T,s.interfaceLanguage)})]}):P("span",{}),P(li,{label:M("more"),showArrow:!0,onSelected:C=>{C.value==="translateTheWholePage"?u():C.value==="translateToThePageEndImmediately"?g():C.value==="translateTheMainPage"?n():C.value==="showTranslationOnly"||(C.value==="translateLocalPdfFile"?m&&m():C.value==="donate"?(globalThis.open(s.donateUrl),E()):C.value==="feedback"?(globalThis.open(s.feedbackUrl),E()):C.value==="options"?(c(),E()):C.value==="changeToTranslateTheWholePage"?Ee():C.value==="changeToTranslateTheMainPage"?Oe():C.value==="about"&&l())},menus:[s.translationArea==="main"&&{label:"\u{1F480} "+M("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},s.translationArea==="body"&&{label:"\u{1F4D6} "+M("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:"\u26A1 "+ue,value:"translateToThePageEndImmediately"},!ge()&&{label:"\u{1F4C1} "+M("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2699\uFE0F "+M("browser.openOptionsPage"),value:"options"},{label:"\u2764\uFE0F "+M("aboutLabel"),value:"about"}].filter(Boolean)})]}),P("div",{class:"text-sm",children:R}),P("div",{class:"text-sm",children:U}),P("footer",{children:[P(ui,{request:a,setStorageBuildinConfig:o}),P("div",{class:"mt-3 text-sm flex justify-between",children:[P("a",{href:"#",class:"secondary",onClick:oe,children:M("options")}),ge()&&P("a",{href:"#",class:"secondary",onClick:te,children:M("close")}),P("span",{class:"immersive-translate-no-select muted",onClick:nf(7)(G),children:["V",t]})]})]})]})}var fi={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return Y.storage[n].get(r)},set:(e,t,n)=>Y.storage[n].set({[e]:t})};function Ua(e,t,n){let[r]=se(()=>typeof t=="function"?t():t),[a]=se(n),[o,i]=se(r),[s,l]=se(!0),[u,c]=se("");ze(()=>{fi.get(e,r,a).then(d=>{d[e]&&i(d[e]),l(!0),c("")}).catch(d=>{l(!1),c(d)})},[e,r,a]);let g=ar(d=>{let f=typeof d=="function"?d(o):d;D.debug("new settings",f),fi.set(e,f,a).then(()=>{i(f),l(!0),c("")}).catch(m=>{i(f),l(!1),c(m)})},[a,e,o]);return[o,g,s,u]}function di(e,t,n){let r=[];return function(){let[o,i,s,l]=Ua(e,t,n),u=ar(c=>{for(let g of r)g(c)},[]);return ze(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[o,u,s,l]}}function sf(e,t){return di(e,t,"sync")}var Wh="userConfig",zh={},lf=sf(Wh,zh);function mi(e){let{onClose:t}=e,[n,r]=se("Original"),[a,o,i,s]=lf(),[l,u]=se(null),[c,g]=se(globalThis.location.href),[d,f]=se("auto"),[m,b]=se(null),x=_=>{r(_.detail)},p=_=>{f(_);let U=tf(c,_,l.sourceLanguageUrlPattern);o(K=>({...K,sourceLanguageUrlPattern:U})),Bt(_)},h=()=>{g(globalThis.location.href)};ze(()=>(document.addEventListener(Mr,x,!1),Je().then(_=>{u(_);let U=$t();f(U);let K=Ze();r(K),Fa(_.interval)}),document.addEventListener("urlChange",h),()=>{document.removeEventListener("pageTranslatedStatus",x),document.removeEventListener("urlChange",h)}),[]),ze(()=>{Je().then(_=>{u(_)})},[a]),ze(()=>{c&&l&&Ct({url:c,config:l}).then(_=>{b(_)})},[c,l]);let T=(_,U)=>()=>{Ha({method:_}),U&&t()},E=()=>{t()},I=()=>{globalThis.alert("Not implemented yet"),t()},S=()=>{globalThis.alert("Not implemented yet"),t()},w=()=>{xa(),setTimeout(()=>{t()},50)},R=()=>{Ta(),setTimeout(()=>{t()},50)};return!l||!m?null:P(gi,{request:X,onClose:E,onTranslateTheWholePage:T("translateTheWholePage",!0),openOptionsPage:w,onToggleTranslate:T("toggleTranslatePage",!0),onTranslateTheMainPage:T("translateTheMainPage",!0),ontranslateToThePageEndImmediately:T("translateToThePageEndImmediately",!0),onTranslatePage:T("translatePage",!0),onRestorePage:T("restorePage",!1),onTranslatePdf:I,openAboutPage:R,onTranslateLocalPdfFile:S,onSetPageLanguage:p,onUserConfigChange:o,config:l,pageStatus:n,ctx:m,currentUrl:c,currentLang:d,onSetLocalConfig:ya,onSetBuildinConfig:mu})}function qh(e,t){for(let n of t)e.appendChild(document.createElement("style")).innerHTML=n}var qe={position:"right",right:0,top:335},za=!1,dn=null,wt=null,qa=null,pi=null,Bn=null,hi=null,cf=6,ja,Wa,gf=null,ff=null;async function yi(){let e=Et();hi=await du(),qe=hi.pagePopupConfig||qe;let t=document.createElement("div");t.id="immersive-translate-popup",t.setAttribute("style","all: initial"),document.documentElement.appendChild(t);let n=t.attachShadow({mode:"open"});pi=n;let r=[e.IMMERSIVE_TRANSLATE_PICO_CSS,e.IMMERSIVE_TRANSLATE_COMMON_CSS,e.IMMERSIVE_TRANSLATE_POPUP_CSS];qh(n,r);let a=document.createElement("div");a.innerHTML=e.IMMERSIVE_TRANSLATE_POPUP_HTML,n.appendChild(a),dn=n.querySelector("#immersive-translate-popup-container");let i=n.querySelector("#immersive-translate-popup-btn");wt=i,qa=n.querySelector("#mount"),dn.setAttribute("style",bi(qe)),vi(),i.addEventListener("mousedown",df),i.addEventListener("touchstart",Gh),globalThis.addEventListener("resize",l=>{dn.setAttribute("style",bi(qe))})}function Vh(){Yr(null,qa),qa.style.display="none",wt.style.display="block",Bn=setTimeout(()=>{vi(!0)},2e3)}function uf(e){let t=e.querySelector("#mount"),n=()=>{Vh()},r=a=>{a&&a.target&&a.target.id==="immersive-translate-popup-overlay"&&n()};(async()=>{let a=await Je();Yr(P(ef,{lang:a.interfaceLanguage,fallbackLang:"zh-CN",translations:Kg,children:P("div",{onClick:r,id:"immersive-translate-popup-overlay",class:"immersive-translate-popup-overlay",children:P("div",{class:"immersive-translate-popup-wrapper",style:Kh(),children:P(mi,{onClose:n})})})}),t)})().then(()=>{wt.style.display="none",qa.style.display="block"})}function Kh(){let e=xi(),t=e.height,{position:n,top:r,left:a}=qe,o={position:"fixed"},i=300,s=300,l=100;return n==="right"||n==="left"?(o.top=r-l,o.top+i>=t?(o.bottom=30,delete o.top):o.top<=10&&(o.top=10),n==="right"?o.right=0:n==="left"&&(o.left=0)):(n==="top"||n==="bottom")&&(o.left=a-l,o.left+s>=e.width?(o.right=0,delete o.left):o.left<=10&&(o.left=0),n==="top"?o.top=0:n==="bottom"&&(o.bottom=0)),o}function xi(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function df(e){ff=dn.getAttribute("style"),ja=e.pageX,Wa=e.pageY,Bn&&clearTimeout(Bn),za=!1,wt.style.opacity="1",wt.style.transform="none",gf=wt.getAttribute("style"),globalThis.addEventListener("mousemove",Ti),globalThis.addEventListener("mouseup",wi),globalThis.addEventListener("touchmove",mf),globalThis.addEventListener("touchend",Va),globalThis.addEventListener("touchcancel",Va)}function Gh(e){e.preventDefault&&e.preventDefault(),df(e.changedTouches[0])}function mf(e){Ti(e.changedTouches[0])}function Va(e){e.preventDefault&&e.preventDefault(),wi(e.changedTouches[0])}function Ti(e){e.preventDefault&&e.preventDefault(),za=!0,dn.setAttribute("style",`left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`)}function wi(e){e.preventDefault&&e.preventDefault(),Yh(),Bn&&clearTimeout(Bn),ja=ja||0,Wa=Wa||0;let t=Math.abs(e.pageX-ja),n=Math.abs(e.pageY-Wa);t<cf&&n<cf?(dn.setAttribute("style",ff),wt.setAttribute("style",gf),uf(pi)):za?Jh(e):uf(pi),za=!1}function Jh(e){let t=xi(),n=e.clientX,r=e.clientY,a=r,o=t.height-r,i=n,s=t.width-n;a<o&&a<i&&a<s?qe={position:"top",left:n,top:0}:o<a&&o<i&&o<s?qe={position:"bottom",bottom:0,left:e.clientX}:i<a&&i<o&&i<s?qe={position:"left",left:0,top:e.clientY}:s<a&&s<o&&s<i&&(qe={position:"right",right:0,top:e.clientY});let l=bi(qe);dn.setAttribute("style",l),ya({...hi,pagePopupConfig:qe}),Bn=setTimeout(()=>{vi(!0)},2e3)}function vi(e=!1){wt.style.opacity="0.4";let t="";qe.position==="left"?t="translateX(-40%)":qe.position==="right"?t="translateX(40%)":qe.position==="top"?t="translateY(-40%)":qe.position==="bottom"&&(t="translateY(40%)"),wt.style.transform=t,e&&(wt.style.transition="transform 0.2s ease-in-out, opacity 0.2s ease-in-out")}function Yh(){globalThis.removeEventListener("mousemove",Ti),globalThis.removeEventListener("mouseup",wi),globalThis.removeEventListener("touchmove",mf),globalThis.removeEventListener("touchend",Va),globalThis.removeEventListener("touchcancel",Va)}function bi(e){let t=Xh(e);return Object.keys(t).map(n=>typeof t[n]=="number"?`${n}:${t[n]}px;`:"").join("")}function Xh(e){let{position:t,...n}=e,r=xi(),a={};return t==="left"?(a.left=0,n.top>r.height?a.top=r.height-100:a.top=n.top):t==="right"?(a.right=0,n.top>r.height?a.top=r.height-100:a.top=n.top):t==="top"?(a.top=0,n.left>r.width?a.left=r.width-100:a.left=n.left):t==="bottom"&&(a.bottom=0,n.left>r.width?a.left=r.width-100:a.left=n.left),a}var Ka=!1;async function pf(){let e=await Je(),t={url:globalThis.location.href,config:e},n=await Ct(t);e.debug&&D.setLevel("debug"),globalThis.document.addEventListener(Mt,r=>{Ka||(Ka=!0,yi().catch(a=>{D.error("init popup error",a)}))}),n.isTranslateExcludeUrl?D.debug("detect exclude url, do not inject anything."):($r().any||ge())&&n.rule.isShowUserscriptPagePopup&&(Ka||(Ka=!0,yi().catch(r=>{D.error("init popup error",r)})))}var Qh=e=>document.head.appendChild(document.createElement("style")).innerHTML=e;function hf(){let t=Et().IMMERSIVE_TRANSLATE_INJECTED_CSS;t&&Qh(t)}var bf={manifest_version:3,name:"__MSG_brandName__",description:"__MSG_brandDescription__",version:"0.2.35",default_locale:"en",background:{service_worker:"background.js"},web_accessible_resources:["styles/inject.css","pdf/index.html"],content_scripts:[{matches:["<all_urls>","file:///*","*://*/*"],js:["content_script.js"],css:["styles/inject.css"],run_at:"document_end",all_frames:!0}],commands:{toggleTranslatePage:{suggested_key:{default:"Alt+A"},description:"__MSG_toggleTranslatePage__"},toggleTranslateTheWholePage:{suggested_key:{default:"Alt+W"},description:"__MSG_toggleTranslateTheWholePage__"},toggleTranslateToThePageEndImmediately:{suggested_key:{default:"Alt+S"},description:"__MSG_toggleTranslateToThePageEndImmediately__"},toggleTranslateTheMainPage:{description:"__MSG_toggleTranslateTheMainPage__"}},options_page:"options.html",options_ui:{page:"options.html",open_in_tab:!0,browser_style:!1},permissions:["storage","activeTab","contextMenus","webRequest","webRequestBlocking","declarativeNetRequestWithHostAccess","declarativeNetRequestFeedback","declarativeNetRequest"],host_permissions:["<all_urls>"],declarative_net_request:{rule_resources:[{id:"ruleset_1",enabled:!0,path:"rules/request_modifier_rule.json"}]},action:{default_popup:"popup.html",default_icon:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"}},browser_action:{default_icon:"icons/32.png",default_popup:"popup.html"},icons:{32:"icons/32.png",48:"icons/48.png",64:"icons/64.png",128:"icons/128.png",256:"icons/256.png"},browser_specific_settings:{gecko:{id:"{5efceaa7-f3a2-4e59-a54b-85319448e305}",strict_min_version:"63.0"}},key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"};async function yf(){let e=await Je(),t=await Ct({config:e,url:We()});if(t.isTranslateExcludeUrl&&Yg())D.debug("detect web options page"),Qg();else if(Gg(t),ge()?(hf(),Zg(e),n0(e)):cu(),e.debug?D.setLevel("debug"):D.setLevel("info"),globalThis.top!=globalThis.self||await pf().catch(a=>{D.error(`init popup page error: ${a}`)}),!t.isTranslateExcludeUrl){if(t.rule.isPdf){let a=!1;globalThis.PDFViewerApplication&&globalThis.PDFViewerApplication.initializedPromise.then(()=>{let o=globalThis.PDFViewerApplication;o.eventBus.on("pagesdestroy",()=>{Ut()}),o.eventBus.on("textlayerrendered",async()=>{a||(a=!0,await Oa())}),o.eventBus.on("fileinputchange",()=>{a=!1})})}else await Oa();Jg()}}var Zh=It(async()=>{await xa()},50),e0=It(async()=>{await Ta()},50),t0=It(e=>{r0({method:e})},50);function n0(e){if(ge()&&typeof GM<"u"&&GM&&GM.registerMenuCommand){let t=bf.commands,a=[...Object.keys(t).filter(o=>o==="toggleTranslatePage").map(o=>{let i=t[o].description,s=i;return i.startsWith("__MSG_")&&i.endsWith("__")&&(s=Ia(`browser.${i.slice(6,-2)}`,e.interfaceLanguage)),{id:o,title:s}}),{id:Qa,title:Ia("browser.openOptionsPage",e.interfaceLanguage),key:"o"},{id:Za,title:Ia("browser.openAboutPage",e.interfaceLanguage),key:"o"}];for(let o of a)GM.registerMenuCommand(o.title,()=>{o.id===Qa?Zh():o.id===Za?e0():t0(o.id)},o.key)}}function r0(e){on(e,{tab:{id:1,url:"https://www.fake.com",active:!0}}).catch(n=>{D.error("send content message request failed",e,n)});let t=new CustomEvent(Mt,{detail:e});globalThis.document.dispatchEvent(t)}var Lr={capture:!0,once:!0,passive:!0},wf=()=>document.readyState==="interactive"||document.readyState==="complete",a0=e=>document.readyState===e,Ar=(e,t)=>a0(e)||wf()?(t(e),!0):!1,o0=()=>new Promise(e=>{Ar("loading",e)||document.addEventListener("readystatechange",()=>{document.readyState==="loading"&&e("loading")},Lr)}),s0=()=>new Promise(e=>{Ar("interactive",e)||document.addEventListener("readystatechange",()=>{document.readyState==="interactive"&&e("interactive")},Lr)}),i0=()=>new Promise(e=>{Ar("complete",e)||document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&e("complete")},Lr)}),xf=()=>new Promise(e=>{Ar("domready",e)||document.addEventListener("DOMContentLoaded",()=>{e("domready")},Lr)}),Tf=()=>new Promise(e=>{Ar("load",e)||window.addEventListener("load",()=>{e("load")},Lr)}),vf={};Object.defineProperties(vf,{state:{get:function(){return document.readyState}},loading:{get:function(){return o0()}},interactive:{get:function(){return s0()}},complete:{get:function(){return i0()}},window:{get:function(){return Tf()}},load:{get:function(){return Tf()}},domready:{get:function(){return xf()}},dom:{get:function(){return xf()}},ready:{get:function(){return wf()}}});var Sf=vf;var Ef={NOT_FUNCTION:"Your executor is not a function. functions and promises are valid.",FAILED_TO_WAIT:"Failed to wait"};function l0(e){return async()=>await e()}function c0(e){if(typeof e!="function")throw new Error(Ef.NOT_FUNCTION)}var Si=class{constructor({interval:t=100,timeout:n=1e3,stopOnFailure:r=!1,verbose:a=!1,backoffFactor:o=1,backoffMaxInterval:i,message:s=""}={}){this._interval=t,this._timeout=n,this._stopOnFailure=r,this._isWaiting=!1,this._isResolved=!1,this._verbose=a,this._userMessage=s,this.originalStacktraceError=new Error,this._Console=console,this._backoffFactor=o,this._backoffMaxInterval=i||n,this.start=+Date.now()}tryEvery(t){return this._interval=t,this}stopAfter(t){return this._timeout=t,this}execute(t){return this._applyPromiseHandlers(),c0(t),this._executeFn=l0(t),this.start=Date.now(),this._isWaiting=!0,this._log("starting to execute"),this._runFunction(),this.promise}getPromise(){return this.promise}isResolved(){return this._isResolved}isWaiting(){return this._isWaiting}stopOnFailure(t){return this._stopOnFailure=t,this}_applyPromiseHandlers(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}_timeFromStart(){return Date.now()-this.start}_shouldStopTrying(){return this._timeFromStart()>this._timeout}_executeAgain(){this._log("executing again");let t=this._interval,n=t*this._backoffFactor;this._interval=n>this._backoffMaxInterval?this._backoffMaxInterval:n,setTimeout(this._runFunction.bind(this),t)}_failedToWait(){let t=`${Ef.FAILED_TO_WAIT} after ${this._timeFromStart()}ms`;if(this._userMessage&&(t=`${t}: ${this._userMessage}`),this._lastError){this._lastError.message=`${t}
${this._lastError.message}`;let n=this.originalStacktraceError.stack;n&&(this._lastError.stack+=n.substring(n.indexOf(`
`)+1))}else this._lastError=this.originalStacktraceError,this._lastError.message=t;return this._log(this._lastError),this._lastError}_runFunction(){if(this._shouldStopTrying()){this._isWaiting=!1,this.reject?.(this._failedToWait());return}this._executeFn().then(t=>{if(t===!1){this._log(`then execute again with result: ${t}`),this._executeAgain();return}this.resolve?.(t),this._isWaiting=!1,this._isResolved=!0,this._log(`then done waiting with result: ${t}`)}).catch(t=>this._stopOnFailure?(this._log(`stopped on failure with err: ${t}`),this.reject?.(t)):(this._lastError=t,this._log(`catch with err: ${t}`),this._executeAgain()))}_log(t){this._verbose&&this._Console&&this._Console.log&&this._Console.log(t)}},_f=(e,t)=>new Si(t).execute(e);async function Lf(){try{return await _f(()=>{let e=nn(document.body);if(e&&e.length>=10)return!0;throw new Error("there is no main text")},{timeout:1e4}),!0}catch(e){throw e}}Sf.domready.then(()=>{Lf().then(()=>{yf().catch(e=>{e&&D.error("translate page error",e.name,e.message,e.details||"",e)})}).catch(e=>{D.debug("can not detect a valid body: ",e)})}).catch(e=>{e&&D.error("translate dom ready detect error",e)});
