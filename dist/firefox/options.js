var Ff=Object.defineProperty;var Uf=(e,t)=>{for(var n in t)Ff(e,n,{get:t[n],enumerable:!0})};var y={BUILD_TIME:"2023-01-31T16:22:29.867Z",VERSION:"0.2.37",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};var Bf=Object.create,Hi=Object.defineProperty,$f=Object.getOwnPropertyDescriptor,Bi=Object.getOwnPropertyNames,jf=Object.getPrototypeOf,zf=Object.prototype.hasOwnProperty,qf=(e,t)=>function(){return t||(0,e[Bi(e)[0]])((t={exports:{}}).exports,t),t.exports},Wf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Bi(t))!zf.call(e,a)&&a!==n&&Hi(e,a,{get:()=>t[a],enumerable:!(r=$f(t,a))||r.enumerable});return e},Vf=(e,t,n)=>(n=e!=null?Bf(jf(e)):{},Wf(t||!e||!e.__esModule?Hi(n,"default",{value:e,enumerable:!0}):n,e)),Kf=qf({"esm-build-3120606719048d5175703f3b3f8812d3453a0d07-9fbf1061/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var a={exports:{}};r(a),n.browser=a.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",a=o=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(v,P=void 0){super(P),this.createItem=v}get(v){return this.has(v)||this.set(v,this.createItem(v)),super.get(v)}}let c=w=>w&&typeof w=="object"&&typeof w.then=="function",u=(w,v)=>(...P)=>{o.runtime.lastError?w.reject(new Error(o.runtime.lastError.message)):v.singleCallbackArg||P.length<=1&&v.singleCallbackArg!==!1?w.resolve(P[0]):w.resolve(P)},l=w=>w==1?"argument":"arguments",d=(w,v)=>function(E,..._){if(_.length<v.minArgs)throw new Error(`Expected at least ${v.minArgs} ${l(v.minArgs)} for ${w}(), got ${_.length}`);if(_.length>v.maxArgs)throw new Error(`Expected at most ${v.maxArgs} ${l(v.maxArgs)} for ${w}(), got ${_.length}`);return new Promise((H,D)=>{if(v.fallbackToNoCallback)try{E[w](..._,u({resolve:H,reject:D},v))}catch(A){console.warn(`${w} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,A),E[w](..._),v.fallbackToNoCallback=!1,v.noCallback=!0,H()}else v.noCallback?(E[w](..._),H()):E[w](..._,u({resolve:H,reject:D},v))})},m=(w,v,P)=>new Proxy(v,{apply(E,_,H){return P.call(_,w,...H)}}),f=Function.call.bind(Object.prototype.hasOwnProperty),p=(w,v={},P={})=>{let E=Object.create(null),_={has(D,A){return A in w||A in E},get(D,A,M){if(A in E)return E[A];if(!(A in w))return;let $=w[A];if(typeof $=="function")if(typeof v[A]=="function")$=m(w,w[A],v[A]);else if(f(P,A)){let q=d(A,P[A]);$=m(w,w[A],q)}else $=$.bind(w);else if(typeof $=="object"&&$!==null&&(f(v,A)||f(P,A)))$=p($,v[A],P[A]);else if(f(P,"*"))$=p($,v[A],P["*"]);else return Object.defineProperty(E,A,{configurable:!0,enumerable:!0,get(){return w[A]},set(q){w[A]=q}}),$;return E[A]=$,$},set(D,A,M,$){return A in E?E[A]=M:w[A]=M,!0},defineProperty(D,A,M){return Reflect.defineProperty(E,A,M)},deleteProperty(D,A){return Reflect.deleteProperty(E,A)}},H=Object.create(w);return new Proxy(H,_)},T=w=>({addListener(v,P,...E){v.addListener(w.get(P),...E)},hasListener(v,P){return v.hasListener(w.get(P))},removeListener(v,P){v.removeListener(w.get(P))}}),x=new s(w=>typeof w!="function"?w:function(P){let E=p(P,{},{getContent:{minArgs:0,maxArgs:0}});w(E)}),h=new s(w=>typeof w!="function"?w:function(P,E,_){let H=!1,D,A=new Promise(Z=>{D=function(ee){H=!0,Z(ee)}}),M;try{M=w(P,E,D)}catch(Z){M=Promise.reject(Z)}let $=M!==!0&&c(M);if(M!==!0&&!$&&!H)return!1;let q=Z=>{Z.then(ee=>{_(ee)},ee=>{let te;ee&&(ee instanceof Error||typeof ee.message=="string")?te=ee.message:te="An unexpected error occurred",_({__mozWebExtensionPolyfillReject__:!0,message:te})}).catch(ee=>{console.error("Failed to send onMessage rejected reply",ee)})};return q($?M:A),!0}),b=({reject:w,resolve:v},P)=>{o.runtime.lastError?o.runtime.lastError.message===r?v():w(new Error(o.runtime.lastError.message)):P&&P.__mozWebExtensionPolyfillReject__?w(new Error(P.message)):v(P)},S=(w,v,P,...E)=>{if(E.length<v.minArgs)throw new Error(`Expected at least ${v.minArgs} ${l(v.minArgs)} for ${w}(), got ${E.length}`);if(E.length>v.maxArgs)throw new Error(`Expected at most ${v.maxArgs} ${l(v.maxArgs)} for ${w}(), got ${E.length}`);return new Promise((_,H)=>{let D=b.bind(null,{resolve:_,reject:H});E.push(D),P.sendMessage(...E)})},L={devtools:{network:{onRequestFinished:T(x)}},runtime:{onMessage:T(h),onMessageExternal:T(h),sendMessage:S.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:S.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},F={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":F},services:{"*":F},websites:{"*":F}},p(o,L,i)};n.exports=a(chrome)}else n.exports=globalThis.browser})}}),Gf=Vf(Kf()),{default:Ui,...Jf}=Gf,Ka=Ui!==void 0?Ui:Jf;globalThis.immersiveTranslateBrowserAPI=Ka;function hn(){let e,t="pending",n=new Promise((r,a)=>{e={async resolve(o){await o,t="fulfilled",r(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var Ga=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function Fr(e,t){let n=hn(),r=setTimeout(()=>n.reject(new Ga),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function bn(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((a,o)=>{let i=()=>{clearTimeout(c),o(new DOMException("Delay was aborted.","AbortError"))},c=setTimeout(()=>{n?.removeEventListener("abort",i),a()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(c)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var $i=class{#e=0;#t=[];#n=[];#r=hn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=hn()}}[Symbol.asyncIterator](){return this.iterate()}};var Qe={};Uf(Qe,{bgBlack:()=>wd,bgBlue:()=>Ld,bgBrightBlack:()=>Md,bgBrightBlue:()=>Id,bgBrightCyan:()=>Od,bgBrightGreen:()=>Rd,bgBrightMagenta:()=>Nd,bgBrightRed:()=>Pd,bgBrightWhite:()=>Fd,bgBrightYellow:()=>Dd,bgCyan:()=>kd,bgGreen:()=>Ed,bgMagenta:()=>Ad,bgRed:()=>Sd,bgRgb24:()=>$d,bgRgb8:()=>Hd,bgWhite:()=>_d,bgYellow:()=>Cd,black:()=>sd,blue:()=>ud,bold:()=>Zf,brightBlack:()=>qi,brightBlue:()=>yd,brightCyan:()=>Td,brightGreen:()=>hd,brightMagenta:()=>xd,brightRed:()=>pd,brightWhite:()=>vd,brightYellow:()=>bd,cyan:()=>fd,dim:()=>ed,getColorEnabled:()=>Xf,gray:()=>md,green:()=>ld,hidden:()=>ad,inverse:()=>rd,italic:()=>td,magenta:()=>gd,red:()=>id,reset:()=>Qf,rgb24:()=>Bd,rgb8:()=>Ud,setColorEnabled:()=>Yf,strikethrough:()=>od,stripColor:()=>zd,underline:()=>nd,white:()=>dd,yellow:()=>cd});var{Deno:ji}=globalThis,zi=typeof ji?.noColor=="boolean"?ji.noColor:!0,Ja=!zi;function Yf(e){zi||(Ja=e)}function Xf(){return Ja}function J(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function Y(e,t){return Ja?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Qf(e){return Y(e,J([0],0))}function Zf(e){return Y(e,J([1],22))}function ed(e){return Y(e,J([2],22))}function td(e){return Y(e,J([3],23))}function nd(e){return Y(e,J([4],24))}function rd(e){return Y(e,J([7],27))}function ad(e){return Y(e,J([8],28))}function od(e){return Y(e,J([9],29))}function sd(e){return Y(e,J([30],39))}function id(e){return Y(e,J([31],39))}function ld(e){return Y(e,J([32],39))}function cd(e){return Y(e,J([33],39))}function ud(e){return Y(e,J([34],39))}function gd(e){return Y(e,J([35],39))}function fd(e){return Y(e,J([36],39))}function dd(e){return Y(e,J([37],39))}function md(e){return qi(e)}function qi(e){return Y(e,J([90],39))}function pd(e){return Y(e,J([91],39))}function hd(e){return Y(e,J([92],39))}function bd(e){return Y(e,J([93],39))}function yd(e){return Y(e,J([94],39))}function xd(e){return Y(e,J([95],39))}function Td(e){return Y(e,J([96],39))}function vd(e){return Y(e,J([97],39))}function wd(e){return Y(e,J([40],49))}function Sd(e){return Y(e,J([41],49))}function Ed(e){return Y(e,J([42],49))}function Cd(e){return Y(e,J([43],49))}function Ld(e){return Y(e,J([44],49))}function Ad(e){return Y(e,J([45],49))}function kd(e){return Y(e,J([46],49))}function _d(e){return Y(e,J([47],49))}function Md(e){return Y(e,J([100],49))}function Pd(e){return Y(e,J([101],49))}function Rd(e){return Y(e,J([102],49))}function Dd(e){return Y(e,J([103],49))}function Id(e){return Y(e,J([104],49))}function Nd(e){return Y(e,J([105],49))}function Od(e){return Y(e,J([106],49))}function Fd(e){return Y(e,J([107],49))}function Rt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function Ud(e,t){return Y(e,J([38,5,Rt(t)],39))}function Hd(e,t){return Y(e,J([48,5,Rt(t)],49))}function Bd(e,t){return typeof t=="number"?Y(e,J([38,2,t>>16&255,t>>8&255,t&255],39)):Y(e,J([38,2,Rt(t.r),Rt(t.g),Rt(t.b)],39))}function $d(e,t){return typeof t=="number"?Y(e,J([48,2,t>>16&255,t>>8&255,t&255],49)):Y(e,J([48,2,Rt(t.r),Rt(t.g),Rt(t.b)],49))}var jd=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function zd(e){return e.replace(jd,"")}function Ur(e,t){let n=null,r=null,a=(...o)=>{a.clear(),r=()=>{a.clear(),e.call(a,...o)},n=setTimeout(r,t)};return a.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},a.flush=()=>{r?.()},Object.defineProperty(a,"pending",{get:()=>typeof n=="number"}),a}var qr,Q,Ji,qd,Qn,Wi,Yi,$r={},Xi=[],Wd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Dt(e,t){for(var n in t)e[n]=t[n];return e}function Qi(e){var t=e.parentNode;t&&t.removeChild(e)}function Zi(e,t,n){var r,a,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?qr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return Hr(e,i,r,a,null)}function Hr(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++Ji};return a==null&&Q.vnode!=null&&Q.vnode(o),o}function Ze(e){return e.children}function Br(e,t){this.props=e,this.context=t}function yn(e,t){if(t==null)return e.__?yn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?yn(e):null}function el(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return el(e)}}function Ya(e){(!e.__d&&(e.__d=!0)&&Qn.push(e)&&!jr.__r++||Wi!==Q.debounceRendering)&&((Wi=Q.debounceRendering)||setTimeout)(jr)}function jr(){for(var e;jr.__r=Qn.length;)e=Qn.sort(function(t,n){return t.__v.__b-n.__v.__b}),Qn=[],e.some(function(t){var n,r,a,o,i,s;t.__d&&(i=(o=(n=t).__v).__e,(s=n.__P)&&(r=[],(a=Dt({},o)).__v=o.__v+1,Xa(s,o,a,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??yn(o),o.__h),al(r,o),o.__e!=i&&el(o)))})}function tl(e,t,n,r,a,o,i,s,c,u){var l,d,m,f,p,T,x,h=r&&r.__k||Xi,b=h.length;for(n.__k=[],l=0;l<t.length;l++)if((f=n.__k[l]=(f=t[l])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Hr(null,f,null,null,f):Array.isArray(f)?Hr(Ze,{children:f},null,null,null):f.__b>0?Hr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(m=h[l])===null||m&&f.key==m.key&&f.type===m.type)h[l]=void 0;else for(d=0;d<b;d++){if((m=h[d])&&f.key==m.key&&f.type===m.type){h[d]=void 0;break}m=null}Xa(e,f,m=m||$r,a,o,i,s,c,u),p=f.__e,(d=f.ref)&&m.ref!=d&&(x||(x=[]),m.ref&&x.push(m.ref,null,f),x.push(d,f.__c||p,f)),p!=null?(T==null&&(T=p),typeof f.type=="function"&&f.__k===m.__k?f.__d=c=nl(f,c,e):c=rl(e,f,m,h,p,c),typeof n.type=="function"&&(n.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=yn(m))}for(n.__e=T,l=b;l--;)h[l]!=null&&(typeof n.type=="function"&&h[l].__e!=null&&h[l].__e==n.__d&&(n.__d=yn(r,l+1)),sl(h[l],h[l]));if(x)for(l=0;l<x.length;l++)ol(x[l],x[++l],x[++l])}function nl(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?nl(r,t,n):rl(n,r,r,a,r.__e,t));return t}function rl(e,t,n,r,a,o){var i,s,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),i=null;else{for(s=o,c=0;(s=s.nextSibling)&&c<r.length;c+=2)if(s==a)break e;e.insertBefore(a,o),i=o}return i!==void 0?i:a.nextSibling}function Vd(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||zr(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||zr(e,o,t[o],n[o],r)}function Vi(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Wd.test(t)?n:n+"px"}function zr(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Vi(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Vi(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Gi:Ki,o):e.removeEventListener(t,o?Gi:Ki,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ki(e){this.l[e.type+!1](Q.event?Q.event(e):e)}function Gi(e){this.l[e.type+!0](Q.event?Q.event(e):e)}function Xa(e,t,n,r,a,o,i,s,c){var u,l,d,m,f,p,T,x,h,b,S,L,F,w=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(u=Q.__b)&&u(t);try{e:if(typeof w=="function"){if(x=t.props,h=(u=w.contextType)&&r[u.__c],b=u?h?h.props.value:u.__:r,n.__c?T=(l=t.__c=n.__c).__=l.__E:("prototype"in w&&w.prototype.render?t.__c=l=new w(x,b):(t.__c=l=new Br(x,b),l.constructor=w,l.render=Gd),h&&h.sub(l),l.props=x,l.state||(l.state={}),l.context=b,l.__n=r,d=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),w.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Dt({},l.__s)),Dt(l.__s,w.getDerivedStateFromProps(x,l.__s))),m=l.props,f=l.state,d)w.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(w.getDerivedStateFromProps==null&&x!==m&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(x,b),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(x,l.__s,b)===!1||t.__v===n.__v){l.props=x,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(v){v&&(v.__=t)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(x,l.__s,b),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(m,f,p)})}if(l.context=b,l.props=x,l.__v=t,l.__P=e,S=Q.__r,L=0,"prototype"in w&&w.prototype.render)l.state=l.__s,l.__d=!1,S&&S(t),u=l.render(l.props,l.state,l.context);else do l.__d=!1,S&&S(t),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++L<25);l.state=l.__s,l.getChildContext!=null&&(r=Dt(Dt({},r),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(p=l.getSnapshotBeforeUpdate(m,f)),F=u!=null&&u.type===Ze&&u.key==null?u.props.children:u,tl(e,Array.isArray(F)?F:[F],t,n,r,a,o,i,s,c),l.base=t.__e,t.__h=null,l.__h.length&&i.push(l),T&&(l.__E=l.__=null),l.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Kd(n.__e,t,n,r,a,o,i,c);(u=Q.diffed)&&u(t)}catch(v){t.__v=null,(c||o!=null)&&(t.__e=s,t.__h=!!c,o[o.indexOf(s)]=null),Q.__e(v,t,n)}}function al(e,t){Q.__c&&Q.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){Q.__e(r,n.__v)}})}function Kd(e,t,n,r,a,o,i,s){var c,u,l,d=n.props,m=t.props,f=t.type,p=0;if(f==="svg"&&(a=!0),o!=null){for(;p<o.length;p++)if((c=o[p])&&"setAttribute"in c==!!f&&(f?c.localName===f:c.nodeType===3)){e=c,o[p]=null;break}}if(e==null){if(f===null)return document.createTextNode(m);e=a?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),o=null,s=!1}if(f===null)d===m||s&&e.data===m||(e.data=m);else{if(o=o&&qr.call(e.childNodes),u=(d=n.props||$r).dangerouslySetInnerHTML,l=m.dangerouslySetInnerHTML,!s){if(o!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Vd(e,m,d,a,s),l)t.__k=[];else if(p=t.props.children,tl(e,Array.isArray(p)?p:[p],t,n,r,a&&f!=="foreignObject",o,i,o?o[0]:n.__k&&yn(n,0),s),o!=null)for(p=o.length;p--;)o[p]!=null&&Qi(o[p]);s||("value"in m&&(p=m.value)!==void 0&&(p!==e.value||f==="progress"&&!p||f==="option"&&p!==d.value)&&zr(e,"value",p,d.value,!1),"checked"in m&&(p=m.checked)!==void 0&&p!==e.checked&&zr(e,"checked",p,d.checked,!1))}return e}function ol(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){Q.__e(r,n)}}function sl(e,t,n){var r,a;if(Q.unmount&&Q.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ol(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){Q.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&sl(r[a],t,typeof e.type!="function");n||e.__e==null||Qi(e.__e),e.__=e.__e=e.__d=void 0}function Gd(e,t,n){return this.constructor(e,n)}function Qa(e,t,n){var r,a,o;Q.__&&Q.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Xa(t,e=(!r&&n||t).__k=Zi(Ze,null,[e]),a||$r,$r,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?qr.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),al(o,e)}function Za(e,t){var n={__c:t="__cC"+Yi++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(Ya)},this.sub=function(i){a.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}qr=Xi.slice,Q={__e:function(e,t,n,r){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},Ji=0,qd=function(e){return e!=null&&e.constructor===void 0},Br.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Dt({},this.state),typeof e=="function"&&(e=e(Dt({},n),this.props)),e&&Dt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Ya(this))},Br.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ya(this))},Br.prototype.render=Ze,Qn=[],jr.__r=0,Yi=0;var er,Ee,eo,il,Zn=0,ml=[],Wr=[],ll=Q.__b,cl=Q.__r,ul=Q.diffed,gl=Q.__c,fl=Q.unmount;function Kr(e,t){Q.__h&&Q.__h(Ee,e,Zn||t),Zn=0;var n=Ee.__H||(Ee.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Wr}),n.__[e]}function z(e){return Zn=1,Jd(bl,e)}function Jd(e,t,n){var r=Kr(er++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):bl(void 0,t),function(o){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,o);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=Ee,!Ee.u)){Ee.u=!0;var a=Ee.shouldComponentUpdate;Ee.shouldComponentUpdate=function(o,i,s){if(!r.__c.__H)return!0;var c=r.__c.__H.__.filter(function(l){return l.__c});if(c.every(function(l){return!l.__N}))return!a||a.call(this,o,i,s);var u=!1;return c.forEach(function(l){if(l.__N){var d=l.__[0];l.__=l.__N,l.__N=void 0,d!==l.__[0]&&(u=!0)}}),!!u&&(!a||a.call(this,o,i,s))}}return r.__N||r.__}function ue(e,t){var n=Kr(er++,3);!Q.__s&&hl(n.__H,t)&&(n.__=e,n.i=t,Ee.__H.__h.push(n))}function xn(e){return Zn=5,pl(function(){return{current:e}},[])}function pl(e,t){var n=Kr(er++,7);return hl(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function tr(e,t){return Zn=8,pl(function(){return e},t)}function no(e){var t=Ee.context[e.__c],n=Kr(er++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Ee)),t.props.value):e.__}function Yd(){for(var e;e=ml.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Vr),e.__H.__h.forEach(to),e.__H.__h=[]}catch(t){e.__H.__h=[],Q.__e(t,e.__v)}}Q.__b=function(e){typeof e.type!="function"||e.o||e.type===Ze?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Ee=null,ll&&ll(e)},Q.__r=function(e){cl&&cl(e),er=0;var t=(Ee=e.__c).__H;t&&(eo===Ee?(t.__h=[],Ee.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Wr,n.__N=n.i=void 0})):(t.__h.forEach(Vr),t.__h.forEach(to),t.__h=[])),eo=Ee},Q.diffed=function(e){ul&&ul(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ml.push(t)!==1&&il===Q.requestAnimationFrame||((il=Q.requestAnimationFrame)||Xd)(Yd)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Wr&&(n.__=n.__V),n.i=void 0,n.__V=Wr})),eo=Ee=null},Q.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Vr),n.__h=n.__h.filter(function(r){return!r.__||to(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],Q.__e(r,n.__v)}}),gl&&gl(e,t)},Q.unmount=function(e){fl&&fl(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Vr(r)}catch(a){t=a}}),n.__H=void 0,t&&Q.__e(t,n.__v))};var dl=typeof requestAnimationFrame=="function";function Xd(e){var t,n=function(){clearTimeout(r),dl&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);dl&&(t=requestAnimationFrame(n))}function Vr(e){var t=Ee,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Ee=t}function to(e){var t=Ee;e.__c=e.__(),Ee=t}function hl(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function bl(e,t){return typeof t=="function"?t(e):t}var Ly=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Zd=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function Gr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,a=0,o=0;function i(){let l=Date.now();return l-a>t?(o=1,a=l,0):(o<e?o++:(a+=t,o=1),a-l)}let s=[];function c(){let l=Date.now();if(s.length<e)return s.push(l),0;let d=s.shift()+t;return l>=d?(s.push(l),0):(s.push(d),d-l)}let u=n?c:i;return l=>{let d=function(...m){if(!d.isEnabled)return(async()=>l.apply(this,m))();let f;return new Promise((p,T)=>{f=setTimeout(()=>{p(l.apply(this,m)),r.delete(f)},u()),r.set(f,T)})};return d.abort=()=>{for(let m of r.keys())clearTimeout(m),r.get(m)(new Zd);r.clear(),s.splice(0,s.length)},d.isEnabled=!0,d}}var nr;function fo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Ll(e,t=","){return e.map(fo).join(t)}var mo=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Tn(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Al(e,t="@media "){return t+ve(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function ve(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function em(e){return e}function po(){}var ke={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function kl(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function lo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(kl(e),15)<<18}var tm=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function ho({n:e,i:t,v:n=[]},r,a,o){for(let s of(e&&(e=fo({n:e,i:t,v:n})),o=[...ve(o)],n)){let c=r.theme("screens",s);for(let u of ve(c&&Al(c)||r.v(s))){var i;o.push(u),a|=c?67108864|lo(u):s=="dark"?1073741824:u[0]=="@"?lo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~tm.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var bo=new Map;function co(e){if(e.d){let t=[],n=ro(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?ro(r,o=>ro(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=o.indexOf(s[1]);return~c?o.slice(0,c)+s[0]+o.slice(c+s[1].length):ao(o,i)}return ao(i,o)})):r,"&"),r=>ao(r,e.n?"."+mo(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function ro(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function ao(e,t){return e.replace(/&/g,t)}var nm=new Intl.Collator("en",{numeric:!0});function _l(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=Ml(e[a],t)?n=a+1:r=a}return r}function Ml(e,t){let n=e.p&ke.o;return n==(t.p&ke.o)&&(n==ke.b||n==ke.o)?0:e.p-t.p||e.o-t.o||nm.compare(e.n,t.n)}function oo(e,t){return Math.round(parseInt(e,16)*t)}function Pl(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[oo(e.substr(1,o),i),oo(e.substr(1+o,o),i),oo(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function yo(e,t,n,r,a=[]){return function o(i,{n:s,p:c,r:u=[],i:l},d){let m=[],f="",p=0,T=0;for(let b in i||{}){var x,h;let S=i[b];if(b[0]=="@"){if(!S)continue;if(b[1]=="a"){m.push(...To(s,c,rr(""+S),d,c,u,l,!0));continue}if(b[1]=="l"){for(let L of ve(S))m.push(...o(L,{n:s,p:(x=ke[b[7]],c&~ke.o|x),r:u,i:l},d));continue}if(b[1]=="i"){m.push(...ve(S).map(L=>({p:-1,o:0,r:[],d:b+" "+L})));continue}if(b[1]=="k"){m.push({p:ke.d,o:0,r:[b],d:o(S,{p:ke.d},d).map(co).join("")});continue}if(b[1]=="f"){m.push(...ve(S).map(L=>({p:ke.d,o:0,r:[b],d:o(L,{p:ke.d},d).map(co).join("")})));continue}}if(typeof S!="object"||Array.isArray(S))b=="label"&&S?s=S+Tn(JSON.stringify([c,l,i])):(S||S===0)&&(b=b.replace(/[A-Z]/g,L=>"-"+L.toLowerCase()),T+=1,p=Math.max(p,(h=b)[0]=="-"?0:kl(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+ve(S).map(L=>d.s(b,Rl(""+L,d.theme)+(l?" !important":""))).join(";"));else if(b[0]=="@"||b.includes("&")){let L=c;b[0]=="@"&&(b=b.replace(/\bscreen\(([^)]+)\)/g,(F,w)=>{let v=d.theme("screens",w);return v?(L|=67108864,Al(v,"")):F}),L|=lo(b)),m.push(...o(S,{n:s,p:L,r:[...u,b],i:l},d))}else m.push(...o(S,{p:c,r:[...u,b]},d))}return m.unshift({n:s,p:c,o:Math.max(0,15-T)+1.5*Math.min(p||15,15),r:u,d:f}),m.sort(Ml)}(e,ho(t,n,r,a),n)}function Rl(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i)=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?Pl(s):""+s})}function xo(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Jr(e,t,n=ke.u,r,a){let o=[];for(let i of e)for(let s of function(c,u,l,d,m){var f;c={...c,i:c.i||m};let p=function(T,x){let h=bo.get(T.n);return h?h(T,x):x.r(T.n,T.v[0]=="dark")}(c,u);return p?typeof p=="string"?({r:d,p:l}=ho(c,u,l,d),xo(Jr(rr(p),u,l,d,c.i),c.n)):Array.isArray(p)?p.map(T=>{var x,h;return{o:0,...T,r:[...ve(d),...ve(T.r)],p:(x=l,h=(f=T.p)!=null?f:l,x&~ke.o|h)}}):yo(p,c,u,l,d):[{c:fo(c),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(_l(o,s),0,s);return o}function To(e,t,n,r,a,o,i,s){return xo((s?n.flatMap(c=>Jr([c],r,a,o,i)):Jr(n,r,a,o,i)).map(c=>c.p&ke.o&&(c.n||t==ke.b)?{...c,p:c.p&~ke.o|t,o:0}:c),e)}function rm(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:c,r:u,i:l}=ho(o,i,t);return n&&To(s,t,n,i,c,u,l,r)},bo.set(e,a),e}function so(e,t){if(e[e.length-1]!="("){let n=[],r=!1,a=!1,o="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(o+=(o&&"-")+i)}o&&(a&&(o="-"+o),t[0].push({n:o,v:n.filter(am),i:r}))}}function am(e,t,n){return n.indexOf(e)==t}var yl=new Map;function rr(e){let t=yl.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,c=(u,l=0)=>{a!=s&&(n.push(e.slice(a,s+l)),u&&so(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let d=n[l-1];if(/[~@]$/.test(d)){let m=r.shift();n.length=l,so([...n,"#"],r);let{v:f}=r[0].pop();for(let p of m)p.v.splice(+(p.v[0]=="dark")-+(f[0]=="dark"),f.length);so([...n,rm(d.length>1?d.slice(0,-1)+Tn(JSON.stringify([d,m])):d+"("+Ll(m)+")",ke.a,m,/@$/.test(d))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),yl.set(e,t=r[0])}return t}function Dl(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function Il(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Dl(e,t,n=>io(n).trim()):t.filter(Boolean).reduce((n,r)=>n+io(r),e?io(e):"")}function io(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Il(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var By=Nl("@"),$y=Nl("~");function Nl(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(a,...o){return t(r,a,o)}});function t(n,r,a){return Ll(rr(n+e+"("+Il(r,a)+")"))}}function uo(e,t){return Array.isArray(e)?xl(Dl(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?xl(e):[e]}var om=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function xl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=om.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function Ol(e,...t){var n,r;let a=uo(e,t),o=(((n=a.find(i=>i.label))==null?void 0:n.label)||"css")+Tn(JSON.stringify(a));return r=(i,s)=>xo(a.flatMap(c=>yo(c,i,s,ke.o)),o),bo.set(o,r),o}var jy=new Proxy(function(e,t){return Tl("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return Tl(t,n,r)}});function Tl(e,t,n){return{toString:()=>Ol({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var zy=Symbol();function ar({presets:e=[],...t}){let n={preflight:t.preflight!==!1&&[],darkMode:void 0,darkColor:void 0,theme:{},variants:ve(t.variants),rules:ve(t.rules),ignorelist:ve(t.ignorelist),hash:t.hash,stringify:t.stringify||sm};for(let r of ve([...e,{darkMode:t.darkMode,darkColor:t.darkColor,preflight:t.preflight!==!1&&ve(t.preflight),theme:t.theme,hash:t.hash,stringify:t.stringify}])){let{preflight:a,darkMode:o=n.darkMode,darkColor:i=n.darkColor,theme:s,variants:c,rules:u,ignorelist:l,hash:d=n.hash,stringify:m=n.stringify}=typeof r=="function"?r(n):r;n={preflight:n.preflight!==!1&&a!==!1&&[...n.preflight,...ve(a)],darkMode:o,darkColor:i,theme:{...n.theme,...s,extend:{...n.theme.extend,...s?.extend}},variants:[...n.variants,...ve(c)],rules:[...n.rules,...ve(u)],ignorelist:[...n.ignorelist,...ve(l)],hash:d,stringify:m}}return n}function sm(e,t){return e+":"+t}function vl(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):wl(n,1)}):n=>e||{[n[1]]:wl(n,2)}}function wl(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function Sl(e,t,n,r,a,o){for(let i of t){let s=n.get(i);s||n.set(i,s=r(i));let c=s(e,a,o);if(c)return c}}function im(e){var t;return go(e[0],typeof(t=e[1])=="function"?t:()=>t)}function lm(e){var t,n;return Array.isArray(e)?go(e[0],vl(e[1],e[2])):go(e,vl(t,n))}function go(e,t){return Fl(e,(n,r,a,o)=>{let i=r.exec(n);if(i)return i.$$=n.slice(i[0].length),i.dark=o,t(i,a)})}function Fl(e,t){let n=ve(e).map(cm);return(r,a,o)=>{for(let i of n){let s=t(r,i,a,o);if(s)return s}}}function cm(e){return typeof e=="string"?RegExp("^"+e+(e.includes("$")||e.slice(-1)=="-"?"":"$")):e}function El(e,t){return e.replace(/--(tw(?:-[\w-]+)?)\b/g,(n,r)=>"--"+t(r).replace("#",""))}function um(e,t){let n=ar(e),r=function({theme:c,darkMode:u,darkColor:l,variants:d,rules:m,hash:f,stringify:p,ignorelist:T}){let x=new Map,h=new Map,b=new Map,S=new Map,L=Fl(T,(w,v)=>v.test(w));d.push(["dark",Array.isArray(u)||u=="class"?`${ve(u)[1]||".dark"} &`:typeof u=="string"&&u!="media"?u:"@media (prefers-color-scheme:dark)"]);let F=typeof f=="function"?w=>f(w,Tn):f?Tn:em;return{theme:function({extend:w={},...v}){let P={},E={get colors(){return _("colors")},theme:_,negative:()=>({}),breakpoints(D){let A={};for(let M in D)typeof D[M]=="string"&&(A["screen-"+M]=D[M]);return A}};return _;function _(D,A,M,$){if(D){var q;if({1:D,2:$}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(D)||[,D],/[.[]/.test(D)){let k=[];D.replace(/\[([^\]]+)\]|([^.[]+)/g,(W,C,N=C)=>k.push(N)),D=k.shift(),M=A,A=k.join("-")}let ee=P[D]||Object.assign(Object.assign(P[D]={},H(v,D)),H(w,D));if(A==null)return ee;let te=(q=ee[A||"DEFAULT"])!=null?q:M;return $?Pl(te,{opacityValue:Rl($,_)}):te}let Z={};for(let ee of[...Object.keys(v),...Object.keys(w)])Z[ee]=_(ee);return Z}function H(D,A){let M=D[A];return typeof M=="function"&&(M=M(E)),M&&/color|fill|stroke/i.test(A)?function $(q,Z=[]){let ee={};for(let te in q){let k=q[te],W=[...Z,te];ee[W.join("-")]=k,te=="DEFAULT"&&(W=Z,ee[Z.join("-")]=k),typeof k=="object"&&Object.assign(ee,$(k,W))}return ee}(M):M}}(c),e:mo,h:F,s(w,v){return p(El(w,F),El(v,F),this)},d(w,v,P){return l?.(w,v,this,P)},v(w){return x.has(w)||x.set(w,Sl(w,d,h,im,this)||"&:"+w),x.get(w)},r(w,v){let P=JSON.stringify([w,v]);return b.has(P)||b.set(P,!L(w,this)&&Sl(w,m,S,lm,this,v)),b.get(P)}}}(n),a=new Map,o=[],i=new Set;function s(c){let u=c.n&&r.h(c.n),l=co(u?{...c,n:u}:c);if(l&&!i.has(l)){i.add(l);let d=_l(o,c);t.insert(l,d,c),o.splice(d,0,c)}return u}return t.resume(c=>a.set(c,c),(c,u)=>{t.insert(c,o.length,u),o.push(u),i.add(c)}),Object.defineProperties(function(c){if(!a.size)for(let l of ve(n.preflight))typeof l=="function"&&(l=l(r)),l&&(typeof l=="string"?To("",ke.b,rr(l),r,ke.b,[],!1,!0):yo(l,{},r,ke.b)).forEach(s);c=""+c;let u=a.get(c);if(!u){let l=new Set;for(let d of Jr(rr(c),r))l.add(d.c).add(s(d));u=[...l].filter(Boolean).join(" "),a.set(c,u).set(u,u)}return u},Object.getOwnPropertyDescriptors({get target(){return t.target},theme:r.theme,config:n,snapshot(){let c=t.snapshot(),u=new Set(i),l=new Map(a),d=[...o];return()=>{c(),i=u,a=l,o=d}},clear(){t.clear(),i=new Set,a=new Map,o=[]},destroy(){this.clear(),t.destroy()}}))}function gm(e,t){return e!=t&&""+e.split(" ").sort()!=""+t.split(" ").sort()}function fm(e=vo,t=document.documentElement){if(!t)return e;let n=new MutationObserver(a);n.observe(t,{attributeFilter:["class"],subtree:!0,childList:!0}),o(t),a([{target:t,type:""}]);let{destroy:r}=e;return e.destroy=()=>{n.disconnect(),r.call(e)},e;function a(i){for(let{type:s,target:c}of i)if(s[0]=="a")o(c);else for(let u of c.querySelectorAll("[class]"))o(u);n.takeRecords()}function o(i){let s,c=i.getAttribute("class");c&&gm(c,s=e(c))&&i.setAttribute("class",s)}}function Ul(e){let t=document.querySelector(e||"style[data-twind]");return t&&t.tagName=="STYLE"||((t=document.createElement("style")).dataset.twind="",document.head.prepend(t)),t}function dm(e){let t=e?.cssRules?e:(e&&typeof e!="string"?e:Ul(e)).sheet;return{target:t,snapshot(){let n=Array.from(t.cssRules,r=>r.cssText);return()=>{this.clear(),n.forEach(this.insert)}},clear(){for(let n=t.cssRules.length;n--;)t.deleteRule(n)},destroy(){var n;(n=t.ownerNode)==null||n.remove()},insert(n,r){try{t.insertRule(n,r)}catch{t.insertRule(":root{}",r),/:-[mwo]/.test(n)}},resume:po}}function mm(e){let t=e&&typeof e!="string"?e:Ul(e);return{target:t,snapshot(){let n=Array.from(t.childNodes,r=>r.textContent);return()=>{this.clear(),n.forEach(this.insert)}},clear(){t.textContent=""},destroy(){t.remove()},insert(n,r){t.insertBefore(document.createTextNode(n),t.childNodes[r]||null)},resume:po}}function Hl(e,t){let n=e?mm():dm();return t||(n.resume=hm),n}function pm(e){return(e.ownerNode||e).textContent||(e.cssRules?Array.from(e.cssRules,t=>t.cssText):ve(e)).join("")}function hm(e,t){let n=pm(this.target),r=/\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;if(r.test(n)){var a;let o;for(let i of(r.lastIndex=0,this.clear(),document.querySelectorAll("[class]")))e(i.getAttribute("class"));for(;a=r.exec(n),o&&t(n.slice(o.index+o[0].length,a?.index),{p:parseInt(o[1],36),o:parseInt(o[2],36)/2,n:o[3]}),o=a;);}}var vo=new Proxy(po,{apply:(e,t,n)=>nr(n[0]),get(e,t){let n=nr[t];return typeof n=="function"?function(){return n.apply(nr,arguments)}:n}});function Bl(e={},t=Hl,n){return nr?.destroy(),nr=fm(um(e,typeof t=="function"?t():t),n)}function wo(e,t=!0){var n;let r=ar(e);return Bl({...r,hash:(n=r.hash)!=null?n:t},()=>Hl(!t))}var qy=function e(t){return new Proxy(function(n,...r){return Cl(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(a,...o){return Cl(t,r,a,o)}})}();function Cl(e,t,n,r){return{toString(){let a=uo(n,r),o=mo(t+Tn(JSON.stringify([t,a])));return(typeof e=="function"?e:vo)(Ol({[`@keyframes ${o}`]:uo(n,r)})),o}}}var bm=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["print-color-adjust","color-adjust"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function $l(e){return bm.get(e)}function jl(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}function zl(e,t){var n=/^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(e);return n?n[1]?/^sti/i.test(t)?1:0:n[2]?/^pat/i.test(t)?1:0:n[3]?/^image-/i.test(t)?1:0:n[4]?t[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(t)?4:0:0}var ym=[["-webkit-",1],["-moz-",2],["-ms-",4]];function Yr(){return({stringify:e})=>({stringify(t,n,r){let a="",o=$l(t);o&&(a+=e(o,n,r)+";");let i=jl(t),s=zl(t,n);for(let c of ym)i&c[1]&&(a+=e(c[0]+t,n,r)+";"),s&c[1]&&(a+=e(t,c[0]+n,r)+";");return a+e(t,n,r)}})}var So;function Do(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Ql(e,t=","){return e.map(Do).join(t)}var Zl=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Xr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Qr(e,t="@media "){return t+at(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function at(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function xm(){}var He={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function ec(e){return e.match(/[-=:;]/g)?.length||0}function _o(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(ec(e),15)<<18}var Tm=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Io({n:e,i:t,v:n=[]},r,a,o){e&&(e=Do({n:e,i:t,v:n})),o=[...at(o)];for(let s of n){let c=r.theme("screens",s);for(let u of at(c&&Qr(c)||r.v(s))){var i;o.push(u),a|=c?67108864|_o(u):s=="dark"?1073741824:u[0]=="@"?_o(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Tm.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var No=new Map;function ql(e){if(e.d){let t=[],n=Eo(e.r.reduce((r,a)=>a[0]=="@"?(t.push(a),r):a?Eo(r,o=>Eo(a,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=o.indexOf(s[1]);return~c?o.slice(0,c)+s[0]+o.slice(c+s[1].length):Co(o,i)}return Co(i,o)})):r,"&"),r=>Co(r,e.n?"."+Zl(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,a)=>a+"{"+r+"}",e.d)}}function Eo(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,a)=>t(r)+a)}function Co(e,t){return e.replace(/&/g,t)}var Wl=new Intl.Collator("en",{numeric:!0});function vm(e,t){for(var n=0,r=e.length;n<r;){let a=r+n>>1;0>=tc(e[a],t)?n=a+1:r=a}return r}function tc(e,t){let n=e.p&He.o;return n==(t.p&He.o)&&(n==He.b||n==He.o)?0:e.p-t.p||e.o-t.o||Wl.compare(Vl(e.n),Vl(t.n))||Wl.compare(Kl(e.n),Kl(t.n))}function Vl(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Kl(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Lo(e,t){return Math.round(parseInt(e,16)*t)}function It(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,a=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Lo(e.substr(1,o),i),Lo(e.substr(1+o,o),i),Lo(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function nc(e,t,n,r,a=[]){return function o(i,{n:s,p:c,r:u=[],i:l},d){let m=[],f="",p=0,T=0;for(let b in i||{}){var x,h;let S=i[b];if(b[0]=="@"){if(!S)continue;if(b[1]=="a"){m.push(...ac(s,c,Fo(""+S),d,c,u,l,!0));continue}if(b[1]=="l"){for(let L of at(S))m.push(...o(L,{n:s,p:(x=He[b[7]],c&~He.o|x),r:b[7]=="d"?[]:u,i:l},d));continue}if(b[1]=="i"){m.push(...at(S).map(L=>({p:-1,o:0,r:[],d:b+" "+L})));continue}if(b[1]=="k"){m.push({p:He.d,o:0,r:[b],d:o(S,{p:He.d},d).map(ql).join("")});continue}if(b[1]=="f"){m.push(...at(S).map(L=>({p:He.d,o:0,r:[b],d:o(L,{p:He.d},d).map(ql).join("")})));continue}}if(typeof S!="object"||Array.isArray(S))b=="label"&&S?s=S+Xr(JSON.stringify([c,l,i])):(S||S===0)&&(b=b.replace(/[A-Z]/g,L=>"-"+L.toLowerCase()),T+=1,p=Math.max(p,(h=b)[0]=="-"?0:ec(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+at(S).map(L=>d.s(b,rc(""+L,d.theme)+(l?" !important":""))).join(";"));else if(b[0]=="@"||b.includes("&")){let L=c;b[0]=="@"&&(b=b.replace(/\bscreen\(([^)]+)\)/g,(F,w)=>{let v=d.theme("screens",w);return v?(L|=67108864,Qr(v,"")):F}),L|=_o(b)),m.push(...o(S,{n:s,p:L,r:[...u,b],i:l},d))}else m.push(...o(S,{p:c,r:[...u,b]},d))}return m.unshift({n:s,p:c,o:Math.max(0,15-T)+1.5*Math.min(p||15,15),r:u,d:f}),m.sort(tc)}(e,Io(t,n,r,a),n)}function rc(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,a,o,i="")=>{let s=t(a,i);return typeof s=="function"&&/color|fill|stroke/i.test(a)?It(s):""+at(s).filter(c=>Object(c)!==c)})}function Oo(e,t){let n,r=[];for(let a of e)a.d&&a.n?n?.p==a.p&&""+n.r==""+a.r?(n.c=[n.c,a.c].filter(Boolean).join(" "),n.d=n.d+";"+a.d):r.push(n={...a,n:a.n&&t}):r.push({...a,n:a.n&&t});return r}function Mo(e,t,n=He.u,r,a){let o=[];for(let i of e)for(let s of function(c,u,l,d,m){c={...c,i:c.i||m};let f=function(p,T){let x=No.get(p.n);return x?x(p,T):T.r(p.n,p.v[0]=="dark")}(c,u);return f?typeof f=="string"?({r:d,p:l}=Io(c,u,l,d),Oo(Mo(Fo(f),u,l,d,c.i),c.n)):Array.isArray(f)?f.map(p=>{var T,x;return{o:0,...p,r:[...at(d),...at(p.r)],p:(T=l,x=p.p??l,T&~He.o|x)}}):nc(f,c,u,l,d):[{c:Do(c),p:0,o:0,r:[]}]}(i,t,n,r,a))o.splice(vm(o,s),0,s);return o}function ac(e,t,n,r,a,o,i,s){return Oo((s?n.flatMap(c=>Mo([c],r,a,o,i)):Mo(n,r,a,o,i)).map(c=>c.p&He.o&&(c.n||t==He.b)?{...c,p:c.p&~He.o|t,o:0}:c),e)}function wm(e,t,n,r){var a;return a=(o,i)=>{let{n:s,p:c,r:u,i:l}=Io(o,i,t);return n&&ac(s,t,n,i,c,u,l,r)},No.set(e,a),e}function Ao(e,t,n){if(e[e.length-1]!="("){let r=[],a=!1,o=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),a=!a),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),o=!o),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(o&&(i="-"+i),t[0].push({n:i,v:r.filter(Sm),i:a}))}}function Sm(e,t,n){return n.indexOf(e)==t}var Gl=new Map;function Fo(e){let t=Gl.get(e);if(!t){let n=[],r=[[]],a=0,o=0,i=null,s=0,c=(u,l=0)=>{a!=s&&(n.push(e.slice(a,s+l)),u&&Ao(n,r)),a=s+1};for(;s<e.length;s++){let u=e[s];if(o)e[s-1]!="\\"&&(o+=+(u=="[")||-(u=="]"));else if(u=="[")o+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,a=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let d=n[l-1];if(/[~@]$/.test(d)){let m=r.shift();n.length=l,Ao([...n,"#"],r);let{v:f}=r[0].pop();for(let p of m)p.v.splice(+(p.v[0]=="dark")-+(f[0]=="dark"),f.length);Ao([...n,wm(d.length>1?d.slice(0,-1)+Xr(JSON.stringify([d,m])):d+"("+Ql(m)+")",He.a,m,/@$/.test(d))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),Gl.set(e,t=r[0])}return t}function oc(e,t,n){return t.reduce((r,a,o)=>r+n(a)+e[o+1],e[0])}function sc(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?oc(e,t,n=>ko(n).trim()):t.filter(Boolean).reduce((n,r)=>n+ko(r),e?ko(e):"")}function ko(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=sc(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var o0=ic("@"),s0=ic("~");function ic(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(a,...o){return t(r,a,o)}}});function t(n,r,a){return Ql(Fo(n+e+"("+sc(r,a)+")"))}}function Po(e,t){return Array.isArray(e)?Jl(oc(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Jl(e):[e]}var Em=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Jl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],a=[];for(;t=Em.exec(e);)t[4]&&(n.shift(),a.shift()),t[3]?(a.unshift(t[3]),n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(a.reduce((o,i)=>({[i]:o}),n[0]))),n[0][t[1]]=t[2]);return r}function lc(e,...t){var n;let r=Po(e,t),a=(r.find(o=>o.label)?.label||"css")+Xr(JSON.stringify(r));return n=(o,i)=>Oo(r.flatMap(s=>nc(s,o,i,He.o)),a),No.set(a,n),a}var i0=new Proxy(function(e,t){return Yl("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return Yl(t,n,r)}}});function Yl(e,t,n){return{toString(){return lc({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function R(e,t,n){return[e,Cm(t,n)]}function Cm(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Ro(n,1)}):n=>e||{[n[1]]:Ro(n,2)}}function Ro(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function I(e,t,n,r){return[e,Lm(t,n,r)]}function Lm(e,t,n){let r=typeof t=="string"?(a,o)=>({[t]:n?n(a,o):a._}):t||(({1:a,_:o},i,s)=>({[a||s]:o}));return(a,o)=>{let i=cc(e||a[1]),s=o.theme(i,a.$$)??or(a.$$,i,o);if(s!=null)return a._=Ro(a,0,s),r(a,o,i)}}function Re(e,t={},n){return[e,Am(t,n)]}function Am(e={},t){return(n,r)=>{let{section:a=cc(n[0]).replace("-","")+"Color"}=e,[o,i]=km(n.$$);if(!o)return;let s=r.theme(a,o)||or(o,a,r);if(!s||typeof s=="object")return;let{opacityVariable:c=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=a.replace("Color","Opacity"),property:l=a,selector:d}=e,m=r.theme(u,i||"DEFAULT")||i&&or(i,u,r),f=t||(({_:T})=>{let x=sr(l,T);return d?{[d]:x}:x});n._={value:It(s,{opacityVariable:c||void 0,opacityValue:m||void 0}),color:T=>It(s,T),opacityVariable:c||void 0,opacityValue:m||void 0};let p=f(n,r);if(!n.dark){let T=r.d(a,o,s);T&&T!==s&&(n._={value:It(T,{opacityVariable:c||void 0,opacityValue:m||"1"}),color:x=>It(T,x),opacityVariable:c||void 0,opacityValue:m||void 0},p={"&":p,[r.v("dark")]:f(n,r)})}return p}}function km(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function sr(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function or(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=vn(rc(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function cc(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function vn(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,a="")=>vn(n)+r+vn(a)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var l0=Symbol();var _m=new Proxy(xm,{apply(e,t,n){return So(n[0])},get(e,t){let n=So[t];return typeof n=="function"?function(){return n.apply(So,arguments)}:n}});var c0=function e(t){return new Proxy(function(n,...r){return Xl(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(a,...o){return Xl(t,r,a,o)}}})}();function Xl(e,t,n,r){return{toString(){let a=Po(n,r),o=Zl(t+Xr(JSON.stringify([t,a])));return(typeof e=="function"?e:_m)(lc({[`@keyframes ${o}`]:Po(n,r)})),o}}}var Mm="inherit",Pm="currentColor",Rm="transparent",Dm="#000",Im="#fff",Nm={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Om={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Fm={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},Um={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},Hm={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},Bm={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},$m={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},jm={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},zm={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},qm={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Wm={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},Vm={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Km={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Gm={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Jm={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Ym={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Xm={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},Qm={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},Zm={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},ep={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},tp={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},np={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},rp={__proto__:null,inherit:Mm,current:Pm,transparent:Rm,black:Dm,white:Im,slate:Nm,gray:Om,zinc:Fm,neutral:Um,stone:Hm,red:Bm,orange:$m,amber:jm,yellow:zm,lime:qm,green:Wm,emerald:Vm,teal:Km,cyan:Gm,sky:Jm,blue:Ym,indigo:Xm,violet:Qm,purple:Zm,fuchsia:ep,pink:tp,rose:np},Ho={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:rp,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...rt(4,"rem",4,.5,.5),...rt(12,"rem",4,5),14:"3.5rem",...rt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:re("blur"),backdropBrightness:re("brightness"),backdropContrast:re("contrast"),backdropGrayscale:re("grayscale"),backdropHueRotate:re("hueRotate"),backdropInvert:re("invert"),backdropOpacity:re("opacity"),backdropSaturate:re("saturate"),backdropSepia:re("sepia"),backgroundColor:re("colors"),backgroundImage:{none:"none"},backgroundOpacity:re("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...rt(200,"",100,0,50),...rt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:re("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:re("spacing"),borderWidth:{DEFAULT:"1px",...ot(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:re("colors"),caretColor:re("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...rt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:re("borderColor"),divideOpacity:re("borderOpacity"),divideWidth:re("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:re("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...ir(2,6),...ir(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:re("spacing"),gradientColorStops:re("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...ir(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...ir(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...rt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...rt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:re("spacing"),placeholderColor:re("colors"),placeholderOpacity:re("opacity"),outlineColor:re("colors"),outlineOffset:ot(8,"px"),outlineWidth:ot(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:re("colors"),ringOffsetWidth:ot(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...ot(8,"px")},rotate:{...ot(2,"deg"),...ot(12,"deg",3),...ot(180,"deg",45)},saturate:rt(200,"",100,0,50),scale:{...rt(150,"",100,0,50),...rt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:re("spacing"),scrollPadding:re("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...ot(2,"deg"),...ot(12,"deg",3)},space:re("spacing"),stroke:re("colors"),strokeWidth:rt(2),textColor:re("colors"),textDecorationColor:re("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...ot(8,"px")},textUnderlineOffset:{auto:"auto",...ot(8,"px")},textIndent:re("spacing"),textOpacity:re("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:re("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...ir(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...rt(50,"",1,0,10),auto:"auto"}};function ir(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function ot(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function rt(e,t="",n=1,r=0,a=1,o={}){for(;r<=e;r+=a)o[r]=r/n+t;return o}function re(e){return({theme:t})=>t(e)}var ap={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Ho.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Ho.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},op=[R("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:or(`[${t}]`,e,n)}}})),R("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),I("aspect-","aspectRatio"),R("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:a}=t("container"),o={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let c=n[s];typeof c=="string"&&(o[Qr(c)]={"&":{maxWidth:c,...i(s)}})}return o;function i(s){let c=a&&(typeof a=="string"?a:a[s]||a.DEFAULT);if(c)return{paddingRight:c,paddingLeft:c}}}),I("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),R("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),R("box-(border|content)","boxSizing",({1:e})=>e+"-box"),R("hidden",{display:"none"}),R("table-(auto|fixed)","tableLayout"),R(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",R("isolate","isolation"),R("object-(contain|cover|fill|none|scale-down)","objectFit"),I("object-","objectPosition"),R("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Zr),R("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),R("(static|fixed|absolute|relative|sticky)","position"),I("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),I("-?(top|bottom|left|right)(?:$|-)","inset"),R("visible","visibility"),R("invisible",{visibility:"hidden"}),I("-?z-","zIndex"),R("flex-((row|col)(-reverse)?)","flexDirection",uc),R("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),I("(flex-(?:grow|shrink))(?:$|-)"),I("(flex)-"),I("grow(?:$|-)","flexGrow"),I("shrink(?:$|-)","flexShrink"),I("basis-","flexBasis"),I("-?(order)-"),"-?(order)-(\\d+)",I("grid-cols-","gridTemplateColumns"),R("grid-cols-(\\d+)","gridTemplateColumns",mc),I("col-","gridColumn"),R("col-(span)-(\\d+)","gridColumn",dc),I("col-start-","gridColumnStart"),R("col-start-(auto|\\d+)","gridColumnStart"),I("col-end-","gridColumnEnd"),R("col-end-(auto|\\d+)","gridColumnEnd"),I("grid-rows-","gridTemplateRows"),R("grid-rows-(\\d+)","gridTemplateRows",mc),I("row-","gridRow"),R("row-(span)-(\\d+)","gridRow",dc),I("row-start-","gridRowStart"),R("row-start-(auto|\\d+)","gridRowStart"),I("row-end-","gridRowEnd"),R("row-end-(auto|\\d+)","gridRowEnd"),R("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Zr(uc(e))),R("grid-flow-(dense)","gridAutoFlow"),I("auto-cols-","gridAutoColumns"),I("auto-rows-","gridAutoRows"),I("gap-x(?:$|-)","gap","columnGap"),I("gap-y(?:$|-)","gap","rowGap"),I("gap(?:$|-)","gap"),"(justify-(?:items|self))-",R("justify-","justifyContent",gc),R("(content|items|self)-",e=>({["align-"+e[1]]:gc(e)})),R("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),I("p([xytrbl])?(?:$|-)","padding",wn("padding")),I("-?m([xytrbl])?(?:$|-)","margin",wn("margin")),I("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),R("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),I("w-","width"),I("min-w-","minWidth"),I("max-w-","maxWidth"),I("h-","height"),I("min-h-","minHeight"),I("max-h-","maxHeight"),I("font-","fontWeight"),I("font-","fontFamily","fontFamily",xt),R("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),R("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),R("italic","fontStyle"),R("not-italic",{fontStyle:"normal"}),R("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),I("tracking-","letterSpacing"),I("leading-","lineHeight"),R("list-(inside|outside)","listStylePosition"),I("list-","listStyleType"),R("list-","listStyleType"),I("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Re("placeholder-",{property:"color",selector:"&::placeholder"}),R("text-(left|center|right|justify|start|end)","textAlign"),R("text-(ellipsis|clip)","textOverflow"),I("text-opacity-","textOpacity","--tw-text-opacity"),Re("text-",{property:"color"}),I("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),I("indent-","textIndent"),R("(overline|underline|line-through)","textDecorationLine"),R("no-underline",{textDecorationLine:"none"}),I("underline-offset-","textUnderlineOffset"),Re("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),I("decoration-","textDecorationThickness"),R("decoration-","textDecorationStyle"),R("(uppercase|lowercase|capitalize)","textTransform"),R("normal-case",{textTransform:"none"}),R("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),R("align-","verticalAlign"),R("whitespace-","whiteSpace"),R("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),R("break-words",{overflowWrap:"break-word"}),R("break-all",{wordBreak:"break-all"}),Re("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Re("accent-",{opacityVariable:!1,opacitySection:"opacity"}),R("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Jt(e," ")},var(--tw-gradient-stops))`),Re("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Re("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Re("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),R("bg-(fixed|local|scroll)","backgroundAttachment"),R("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),R(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),R("bg-blend-","backgroundBlendMode"),R("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),I("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Re("bg-",{section:"backgroundColor"}),I("bg-","backgroundImage"),I("bg-","backgroundPosition"),R("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Zr),I("bg-","backgroundSize"),I("rounded(?:$|-)","borderRadius"),I("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Jt(n[0])}-radius`]:t,[`border-${Jt(n[1])}-radius`]:t}}),R("border-(collapse|separate)","borderCollapse"),I("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),R("border-(solid|dashed|dotted|double|none)","borderStyle"),I("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Re("border-([xytrbl])-",{section:"borderColor"},wn("border","Color")),Re("border-"),I("border-([xytrbl])(?:$|-)","borderWidth",wn("border","Width")),I("border(?:$|-)","borderWidth"),I("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),R("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),R("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),I("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Jt(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Jt(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Re("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),I("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Re("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),I("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),R("ring-inset",{"--tw-ring-inset":"inset"}),Re("ring-",{property:"--tw-ring-color"}),I("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":It(t("ringOffsetColor","","#fff")),"--tw-ring-color":It(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Re("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),I("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":xt(e),"--tw-shadow-colored":xt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),I("(opacity)-"),R("mix-blend-","mixBlendMode"),...fc(),...fc("backdrop-"),I("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:xt(e),transitionTimingFunction:e._=="none"?void 0:xt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:xt(t("transitionDuration",""))})),I("duration(?:$|-)","transitionDuration","transitionDuration",xt),I("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",xt),I("delay(?:$|-)","transitionDelay","transitionDelay",xt),I("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=xt(e),a=r.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=n(a[0]))]:o,animation:a.join(" ")}:{animation:r}}),"(transform)-(none)",R("transform",Bo),R("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":pc(e=="gpu")})),I("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Bo()})),I("-?(rotate)-","rotate",Uo),I("-?(translate-[xy])-","translate",Uo),I("-?(skew-[xy])-","skew",Uo),R("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Zr),"(appearance)-",I("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",I("(cursor)-"),"(cursor)-",R("snap-(none)","scroll-snap-type"),R("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),R("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),R("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),R("snap-(normal|always)","scroll-snap-stop"),R("scroll-(auto|smooth)","scroll-behavior"),I("scroll-p([xytrbl])?(?:$|-)","padding",wn("scroll-padding")),I("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",wn("scroll-margin")),R("touch-(auto|none|manipulation)","touch-action"),R("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),R("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),R("outline",{outlineStyle:"solid"}),R("outline-(dashed|dotted|double|hidden)","outlineStyle"),I("(outline-offset)-"),Re("outline-",{opacityVariable:!1,opacitySection:"opacity"}),I("outline-","outlineWidth"),"(pointer-events)-",I("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],R("select-(none|text|all|auto)","userSelect"),Re("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Re("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),I("stroke-","strokeWidth"),R("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),R("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Zr(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function uc(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Jt(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function xt(e){return e&&""+(e._||e)}function gc({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function wn(e,t=""){return({1:n,_:r})=>{let a={x:"lr",y:"tb"}[n]||n+n;return a?{...sr(e+"-"+Jt(a[0])+t,r),...sr(e+"-"+Jt(a[1])+t,r)}:sr(e+t,r)}}function fc(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,R(`${e}filter`,n),...t.map(r=>I(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:a,_:o})=>({[`--tw-${a}`]:at(o).map(i=>`${r}(${i})`).join(" "),...n})))]}function Uo({1:e,_:t}){return{["--tw-"+e]:t,...Bo()}}function Bo(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":pc()}}}}function pc(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function dc({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function mc({1:e}){return`repeat(${e},minmax(0,1fr))`}var sp=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["portrait","@media (orientation:portrait)"],["landscape","@media (orientation:landscape)"],["contrast-more","@media (prefers-contrast:more)"],["contrast-less","@media (prefers-contrast:less)"],["marker","& *::marker,&::marker"],["selection","& *::selection,&::selection"],["first-letter","&::first-letter"],["first-line","&::first-line"],["file","&::file-selector-button"],["placeholder","&::placeholder"],["backdrop","&::backdrop"],["first","&:first-child"],["last","&:last-child"],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])",({1:e,4:t,5:n},{e:r,h:a,v:o})=>{let i=n&&vn(n)||(t[0]=="["?t:o(t.slice(1)));return`${(i.includes("&")?i:"&"+i).replace(/&/g,`:merge(.${r(a(e))})`)}${e[0]=="p"?"~":" "}&`}],["(ltr|rtl)",({1:e})=>`[dir="${e}"] &`],[/^\[(.+)]$/,({1:e})=>/[&@]/.test(e)&&vn(e).replace(/[}]+$/,"").split("{")]];function ea({disablePreflight:e}={}){return{preflight:e?void 0:ap,theme:Ho,variants:sp,rules:op}}var ip=Object.create,bc=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,cp=Object.getOwnPropertyNames,up=Object.getPrototypeOf,gp=Object.prototype.hasOwnProperty,fp=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),dp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of cp(t))!gp.call(e,a)&&a!==n&&bc(e,a,{get:()=>t[a],enumerable:!(r=lp(t,a))||r.enumerable});return e},mp=(e,t,n)=>(n=e!=null?ip(up(e)):{},dp(t||!e||!e.__esModule?bc(n,"default",{value:e,enumerable:!0}):n,e)),pp=fp((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var a={};return r.m=n,r.c=a,r.i=function(o){return o},r.d=function(o,i,s){r.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(i,"a",i),i},r.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(n,r,a){"use strict";(function(o){var i,s,c,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,d){u(r)==="object"&&u(o)==="object"?o.exports=d():(s=[],i=d,c=typeof i=="function"?i.apply(r,s):i,c!==void 0&&(o.exports=c))})(void 0,function(){return function(l){function d(f){if(m[f])return m[f].exports;var p=m[f]={i:f,l:!1,exports:{}};return l[f].call(p.exports,p,p.exports,d),p.l=!0,p.exports}var m={};return d.m=l,d.c=m,d.i=function(f){return f},d.d=function(f,p,T){d.o(f,p)||Object.defineProperty(f,p,{configurable:!1,enumerable:!0,get:T})},d.n=function(f){var p=f&&f.__esModule?function(){return f.default}:function(){return f};return d.d(p,"a",p),p},d.o=function(f,p){return Object.prototype.hasOwnProperty.call(f,p)},d.p="",d(d.s=0)}([function(l,d,m){function f(C,N){var U={};for(var V in C)N.indexOf(V)>=0||Object.prototype.hasOwnProperty.call(C,V)&&(U[V]=C[V]);return U}Object.defineProperty(d,"__esModule",{value:!0});var p=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(C){return typeof C>"u"?"undefined":u(C)}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C>"u"?"undefined":u(C)},T=Object.assign||function(C){for(var N=1;N<arguments.length;N++){var U=arguments[N];for(var V in U)Object.prototype.hasOwnProperty.call(U,V)&&(C[V]=U[V])}return C},x={top:"top",bottom:"bottom"},h={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:x.top,force:x.top,confirm:x.top,input:x.top,select:x.bottom,date:x.top}},b=d.setOptions=function(C){h=T({},h,C,{classes:T({},h.classes,C.classes),ids:T({},h.ids,C.ids),positions:T({},h.positions,C.positions)})},S=function(){return new Promise(function(C){return setTimeout(C,0)})},L=function(C){return new Promise(function(N){return setTimeout(N,1e3*C)})},F=function(){document.activeElement&&document.activeElement.blur()},w=function(){var C="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(N){var U=16*Math.random()|0,V=N==="x"?U:3&U|8;return V.toString(16)});return"notie-"+C},v={1:h.classes.backgroundSuccess,success:h.classes.backgroundSuccess,2:h.classes.backgroundWarning,warning:h.classes.backgroundWarning,3:h.classes.backgroundError,error:h.classes.backgroundError,4:h.classes.backgroundInfo,info:h.classes.backgroundInfo,5:h.classes.backgroundNeutral,neutral:h.classes.backgroundNeutral},P=function(){return h.transitionSelector+" "+h.transitionDuration+"s "+h.transitionCurve},E=function(C){return C.keyCode===13},_=function(C){return C.keyCode===27},H=function(C,N){C.classList.add(h.classes.container),C.style[N]="-10000px",document.body.appendChild(C),C.style[N]="-"+C.offsetHeight+"px",C.listener&&window.addEventListener("keydown",C.listener),S().then(function(){C.style.transition=P(),C.style[N]=0})},D=function(C,N){var U=document.getElementById(C);U&&(U.style[N]="-"+U.offsetHeight+"px",U.listener&&window.removeEventListener("keydown",U.listener),L(h.transitionDuration).then(function(){U.parentNode&&U.parentNode.removeChild(U)}))},A=function(C,N){var U=document.createElement("div");U.id=h.ids.overlay,U.classList.add(h.classes.overlay),U.classList.add(h.classes.backgroundOverlay),U.style.opacity=0,C&&h.overlayClickDismiss&&(U.onclick=function(){D(C.id,N),M()}),document.body.appendChild(U),S().then(function(){U.style.transition=P(),U.style.opacity=h.overlayOpacity})},M=function(){var C=document.getElementById(h.ids.overlay);C.style.opacity=0,L(h.transitionDuration).then(function(){C.parentNode&&C.parentNode.removeChild(C)})},$=d.hideAlerts=function(C){var N=document.getElementsByClassName(h.classes.alert);if(N.length){for(var U=0;U<N.length;U++){var V=N[U];D(V.id,V.position)}C&&L(h.transitionDuration).then(function(){return C()})}},q=d.alert=function(C){var N=C.type,U=N===void 0?4:N,V=C.text,G=C.time,Te=G===void 0?h.alertTime:G,we=C.stay,Ae=we!==void 0&&we,Pe=C.position,me=Pe===void 0?h.positions.alert||me.top:Pe;F(),$();var fe=document.createElement("div"),pe=w();fe.id=pe,fe.position=me,fe.classList.add(h.classes.textbox),fe.classList.add(v[U]),fe.classList.add(h.classes.alert),fe.innerHTML='<div class="'+h.classes.textboxInner+'">'+V+"</div>",fe.onclick=function(){return D(pe,me)},fe.listener=function(K){(E(K)||_(K))&&$()},H(fe,me),Te&&Te<1&&(Te=1),!Ae&&Te&&L(Te).then(function(){return D(pe,me)})},Z=d.force=function(C,N){var U=C.type,V=U===void 0?5:U,G=C.text,Te=C.buttonText,we=Te===void 0?"OK":Te,Ae=C.callback,Pe=C.position,me=Pe===void 0?h.positions.force||me.top:Pe;F(),$();var fe=document.createElement("div"),pe=w();fe.id=pe;var K=document.createElement("div");K.classList.add(h.classes.textbox),K.classList.add(h.classes.backgroundInfo),K.innerHTML='<div class="'+h.classes.textboxInner+'">'+G+"</div>";var ie=document.createElement("div");ie.classList.add(h.classes.button),ie.classList.add(v[V]),ie.innerHTML=we,ie.onclick=function(){D(pe,me),M(),Ae?Ae():N&&N()},fe.appendChild(K),fe.appendChild(ie),fe.listener=function(Ne){E(Ne)&&ie.click()},H(fe,me),A()},ee=d.confirm=function(C,N,U){var V=C.text,G=C.submitText,Te=G===void 0?"Yes":G,we=C.cancelText,Ae=we===void 0?"Cancel":we,Pe=C.submitCallback,me=C.cancelCallback,fe=C.position,pe=fe===void 0?h.positions.confirm||pe.top:fe;F(),$();var K=document.createElement("div"),ie=w();K.id=ie;var Ne=document.createElement("div");Ne.classList.add(h.classes.textbox),Ne.classList.add(h.classes.backgroundInfo),Ne.innerHTML='<div class="'+h.classes.textboxInner+'">'+V+"</div>";var ye=document.createElement("div");ye.classList.add(h.classes.button),ye.classList.add(h.classes.elementHalf),ye.classList.add(h.classes.backgroundSuccess),ye.innerHTML=Te,ye.onclick=function(){D(ie,pe),M(),Pe?Pe():N&&N()};var X=document.createElement("div");X.classList.add(h.classes.button),X.classList.add(h.classes.elementHalf),X.classList.add(h.classes.backgroundError),X.innerHTML=Ae,X.onclick=function(){D(ie,pe),M(),me?me():U&&U()},K.appendChild(Ne),K.appendChild(ye),K.appendChild(X),K.listener=function(Ue){E(Ue)?ye.click():_(Ue)&&X.click()},H(K,pe),A(K,pe)},te=function(C,N,U){var V=C.text,G=C.submitText,Te=G===void 0?"Submit":G,we=C.cancelText,Ae=we===void 0?"Cancel":we,Pe=C.submitCallback,me=C.cancelCallback,fe=C.position,pe=fe===void 0?h.positions.input||pe.top:fe,K=f(C,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);F(),$();var ie=document.createElement("div"),Ne=w();ie.id=Ne;var ye=document.createElement("div");ye.classList.add(h.classes.textbox),ye.classList.add(h.classes.backgroundInfo),ye.innerHTML='<div class="'+h.classes.textboxInner+'">'+V+"</div>";var X=document.createElement("input");X.classList.add(h.classes.inputField),X.setAttribute("autocapitalize",K.autocapitalize||"none"),X.setAttribute("autocomplete",K.autocomplete||"off"),X.setAttribute("autocorrect",K.autocorrect||"off"),X.setAttribute("autofocus",K.autofocus||"true"),X.setAttribute("inputmode",K.inputmode||"verbatim"),X.setAttribute("max",K.max||""),X.setAttribute("maxlength",K.maxlength||""),X.setAttribute("min",K.min||""),X.setAttribute("minlength",K.minlength||""),X.setAttribute("placeholder",K.placeholder||""),X.setAttribute("spellcheck",K.spellcheck||"default"),X.setAttribute("step",K.step||"any"),X.setAttribute("type",K.type||"text"),X.value=K.value||"",K.allowed&&(X.oninput=function(){var $e=void 0;if(Array.isArray(K.allowed)){for(var Xe="",Pt=K.allowed,Ct=0;Ct<Pt.length;Ct++)Pt[Ct]==="an"?Xe+="0-9a-zA-Z":Pt[Ct]==="a"?Xe+="a-zA-Z":Pt[Ct]==="n"&&(Xe+="0-9"),Pt[Ct]==="s"&&(Xe+=" ");$e=new RegExp("[^"+Xe+"]","g")}else p(K.allowed)==="object"&&($e=K.allowed);X.value=X.value.replace($e,"")});var Ue=document.createElement("div");Ue.classList.add(h.classes.button),Ue.classList.add(h.classes.elementHalf),Ue.classList.add(h.classes.backgroundSuccess),Ue.innerHTML=Te,Ue.onclick=function(){D(Ne,pe),M(),Pe?Pe(X.value):N&&N(X.value)};var ct=document.createElement("div");ct.classList.add(h.classes.button),ct.classList.add(h.classes.elementHalf),ct.classList.add(h.classes.backgroundError),ct.innerHTML=Ae,ct.onclick=function(){D(Ne,pe),M(),me?me(X.value):U&&U(X.value)},ie.appendChild(ye),ie.appendChild(X),ie.appendChild(Ue),ie.appendChild(ct),ie.listener=function($e){E($e)?Ue.click():_($e)&&ct.click()},H(ie,pe),X.focus(),A(ie,pe)};d.input=te;var k=d.select=function(C,N){var U=C.text,V=C.cancelText,G=V===void 0?"Cancel":V,Te=C.cancelCallback,we=C.choices,Ae=C.position,Pe=Ae===void 0?h.positions.select||Pe.top:Ae;F(),$();var me=document.createElement("div"),fe=w();me.id=fe;var pe=document.createElement("div");pe.classList.add(h.classes.textbox),pe.classList.add(h.classes.backgroundInfo),pe.innerHTML='<div class="'+h.classes.textboxInner+'">'+U+"</div>",me.appendChild(pe),we.forEach(function(ie,Ne){var ye=ie.type,X=ye===void 0?1:ye,Ue=ie.text,ct=ie.handler,$e=document.createElement("div");$e.classList.add(v[X]),$e.classList.add(h.classes.button),$e.classList.add(h.classes.selectChoice);var Xe=we[Ne+1];Xe&&!Xe.type&&(Xe.type=1),Xe&&Xe.type===X&&$e.classList.add(h.classes.selectChoiceRepeated),$e.innerHTML=Ue,$e.onclick=function(){D(fe,Pe),M(),ct()},me.appendChild($e)});var K=document.createElement("div");K.classList.add(h.classes.backgroundNeutral),K.classList.add(h.classes.button),K.innerHTML=G,K.onclick=function(){D(fe,Pe),M(),Te?Te():N&&N()},me.appendChild(K),me.listener=function(ie){_(ie)&&K.click()},H(me,Pe),A(me,Pe)},W=d.date=function(C,N,U){var V=C.value,G=V===void 0?new Date:V,Te=C.submitText,we=Te===void 0?"OK":Te,Ae=C.cancelText,Pe=Ae===void 0?"Cancel":Ae,me=C.submitCallback,fe=C.cancelCallback,pe=C.position,K=pe===void 0?h.positions.date||K.top:pe;F(),$();var ie="&#9662",Ne=document.createElement("div"),ye=document.createElement("div"),X=document.createElement("div"),Ue=function(Se){Ne.innerHTML=h.dateMonths[Se.getMonth()],ye.innerHTML=Se.getDate(),X.innerHTML=Se.getFullYear()},ct=function(Se){var yt=new Date(G.getFullYear(),G.getMonth()+1,0).getDate(),pn=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(pn)>yt&&(pn=yt.toString()),Se.target.textContent=pn,Number(pn)<1&&(pn="1"),G.setDate(Number(pn))},$e=function(Se){var yt=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Se.target.textContent=yt,G.setFullYear(Number(yt))},Xe=function(Se){Ue(G)},Pt=function(Se){var yt=new Date(G.getFullYear(),G.getMonth()+Se+1,0).getDate();G.getDate()>yt&&G.setDate(yt),G.setMonth(G.getMonth()+Se),Ue(G)},Ct=function(Se){G.setDate(G.getDate()+Se),Ue(G)},Fi=function(Se){var yt=G.getFullYear()+Se;yt<0?G.setFullYear(0):G.setFullYear(G.getFullYear()+Se),Ue(G)},Vt=document.createElement("div"),Wa=w();Vt.id=Wa;var Va=document.createElement("div");Va.classList.add(h.classes.backgroundInfo);var ut=document.createElement("div");ut.classList.add(h.classes.dateSelectorInner);var fn=document.createElement("div");fn.classList.add(h.classes.button),fn.classList.add(h.classes.elementThird),fn.classList.add(h.classes.dateSelectorUp),fn.innerHTML=ie;var dn=document.createElement("div");dn.classList.add(h.classes.button),dn.classList.add(h.classes.elementThird),dn.classList.add(h.classes.dateSelectorUp),dn.innerHTML=ie;var mn=document.createElement("div");mn.classList.add(h.classes.button),mn.classList.add(h.classes.elementThird),mn.classList.add(h.classes.dateSelectorUp),mn.innerHTML=ie,Ne.classList.add(h.classes.element),Ne.classList.add(h.classes.elementThird),Ne.innerHTML=h.dateMonths[G.getMonth()],ye.classList.add(h.classes.element),ye.classList.add(h.classes.elementThird),ye.setAttribute("contentEditable",!0),ye.addEventListener("input",ct),ye.addEventListener("blur",Xe),ye.innerHTML=G.getDate(),X.classList.add(h.classes.element),X.classList.add(h.classes.elementThird),X.setAttribute("contentEditable",!0),X.addEventListener("input",$e),X.addEventListener("blur",Xe),X.innerHTML=G.getFullYear();var Jn=document.createElement("div");Jn.classList.add(h.classes.button),Jn.classList.add(h.classes.elementThird),Jn.innerHTML=ie;var Yn=document.createElement("div");Yn.classList.add(h.classes.button),Yn.classList.add(h.classes.elementThird),Yn.innerHTML=ie;var Xn=document.createElement("div");Xn.classList.add(h.classes.button),Xn.classList.add(h.classes.elementThird),Xn.innerHTML=ie,fn.onclick=function(){return Pt(1)},dn.onclick=function(){return Ct(1)},mn.onclick=function(){return Fi(1)},Jn.onclick=function(){return Pt(-1)},Yn.onclick=function(){return Ct(-1)},Xn.onclick=function(){return Fi(-1)};var Kt=document.createElement("div");Kt.classList.add(h.classes.button),Kt.classList.add(h.classes.elementHalf),Kt.classList.add(h.classes.backgroundSuccess),Kt.innerHTML=we,Kt.onclick=function(){D(Wa,K),M(),me?me(G):N&&N(G)};var Gt=document.createElement("div");Gt.classList.add(h.classes.button),Gt.classList.add(h.classes.elementHalf),Gt.classList.add(h.classes.backgroundError),Gt.innerHTML=Pe,Gt.onclick=function(){D(Wa,K),M(),fe?fe(G):U&&U(G)},ut.appendChild(fn),ut.appendChild(dn),ut.appendChild(mn),ut.appendChild(Ne),ut.appendChild(ye),ut.appendChild(X),ut.appendChild(Jn),ut.appendChild(Yn),ut.appendChild(Xn),Va.appendChild(ut),Vt.appendChild(Va),Vt.appendChild(Kt),Vt.appendChild(Gt),Vt.listener=function(Se){E(Se)?Kt.click():_(Se)&&Gt.click()},H(Vt,K),A(Vt,K)};d.default={alert:q,force:Z,confirm:ee,input:te,select:k,date:W,setOptions:b,hideAlerts:$}}])})}).call(r,a(0)(n))}])})}),hp=mp(pp()),{default:hc,...bp}=hp,$o=hc!==void 0?hc:bp;var L0=Symbol("clean");var A0=Symbol();function jo(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=jo(e[r],t);return n}}function xc(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,a,o){let i=e(r,a,...o);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,a){return e(n,r,...a)}}}}var O0=xc((e,t,n)=>jo(t,r=>{for(let a in n)r=r.replace(new RegExp(`{${a}}`,"g"),n[a]);return r})),F0=xc((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),jo(t[r],a=>a.replace(/{count}/g,n))});var zo=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function qo(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function Ec(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function Cc(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function Tp(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,a=!0,o=0;o<n.length;o++)r.indexOf(n[o])===-1&&(a=!1);return a}var cr={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":zo?173:189,"=":zo?61:187,";":zo?59:186,"'":222,"[":219,"]":221,"\\":220},Tt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Ko={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Be={16:!1,18:!1,17:!1,91:!1},_e={};for(lr=1;lr<20;lr++)cr["f".concat(lr)]=111+lr;var lr,be=[],Tc=!1,Lc="all",Ac=[],na=function(e){return cr[e.toLowerCase()]||Tt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},vp=function(e){return Object.keys(cr).find(function(t){return cr[t]===e})},wp=function(e){return Object.keys(Tt).find(function(t){return Tt[t]===e})};function kc(e){Lc=e||"all"}function ur(){return Lc||"all"}function Sp(){return be.slice(0)}function Ep(){return be.map(function(e){return vp(e)||wp(e)||String.fromCharCode(e)})}function Cp(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function Lp(e){return typeof e=="string"&&(e=na(e)),be.indexOf(e)!==-1}function Ap(e,t){var n,r;e||(e=ur());for(var a in _e)if(Object.prototype.hasOwnProperty.call(_e,a))for(n=_e[a],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;ur()===e&&kc(t||"all")}function kp(e){var t=e.keyCode||e.which||e.charCode,n=be.indexOf(t);if(n>=0&&be.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&be.splice(0,be.length),(t===93||t===224)&&(t=91),t in Be){Be[t]=!1;for(var r in Tt)Tt[r]===t&&(je[r]=!1)}}function _p(e){if(typeof e>"u")Object.keys(_e).forEach(function(i){return delete _e[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&Wo(i)});else if(typeof e=="object")e.key&&Wo(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0],o=n[1];typeof a=="function"&&(o=a,a=""),Wo({key:e,scope:a,method:o,splitKey:"+"})}}var Wo=function(e){var t=e.key,n=e.scope,r=e.method,a=e.splitKey,o=a===void 0?"+":a,i=Cc(t);i.forEach(function(s){var c=s.split(o),u=c.length,l=c[u-1],d=l==="*"?"*":na(l);if(_e[d]){n||(n=ur());var m=u>1?Ec(Tt,c):[];_e[d]=_e[d].filter(function(f){var p=r?f.method===r:!0;return!(p&&f.scope===n&&Tp(f.mods,m))})}})};function vc(e,t,n,r){if(t.element===r){var a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(var o in Be)Object.prototype.hasOwnProperty.call(Be,o)&&(!Be[o]&&t.mods.indexOf(+o)>-1||Be[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!Be[16]&&!Be[18]&&!Be[17]&&!Be[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function wc(e,t){var n=_e["*"],r=e.keyCode||e.which||e.charCode;if(je.filter.call(this,e)){if((r===93||r===224)&&(r=91),be.indexOf(r)===-1&&r!==229&&be.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var T=Ko[p];e[p]&&be.indexOf(T)===-1?be.push(T):!e[p]&&be.indexOf(T)>-1?be.splice(be.indexOf(T),1):p==="metaKey"&&e[p]&&be.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(be=be.slice(be.indexOf(T))))}),r in Be){Be[r]=!0;for(var a in Tt)Tt[a]===r&&(je[a]=!0);if(!n)return}for(var o in Be)Object.prototype.hasOwnProperty.call(Be,o)&&(Be[o]=e[Ko[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(be.indexOf(17)===-1&&be.push(17),be.indexOf(18)===-1&&be.push(18),Be[17]=!0,Be[18]=!0);var i=ur();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&vc(e,n[s],i,t);if(r in _e){for(var c=0;c<_e[r].length;c++)if((e.type==="keydown"&&_e[r][c].keydown||e.type==="keyup"&&_e[r][c].keyup)&&_e[r][c].key){for(var u=_e[r][c],l=u.splitKey,d=u.key.split(l),m=[],f=0;f<d.length;f++)m.push(na(d[f]));m.sort().join("")===be.sort().join("")&&vc(e,u,i,t)}}}}function Mp(e){return Ac.indexOf(e)>-1}function je(e,t,n){be=[];var r=Cc(e),a=[],o="all",i=document,s=0,c=!1,u=!0,l="+",d=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(i=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(d=t.capture),typeof t.splitKey=="string"&&(l=t.splitKey)),typeof t=="string"&&(o=t);s<r.length;s++)e=r[s].split(l),a=[],e.length>1&&(a=Ec(Tt,e)),e=e[e.length-1],e=e==="*"?"*":na(e),e in _e||(_e[e]=[]),_e[e].push({keyup:c,keydown:u,scope:o,mods:a,shortcut:r[s],method:n,key:r[s],splitKey:l,element:i});typeof i<"u"&&!Mp(i)&&window&&(Ac.push(i),qo(i,"keydown",function(m){wc(m,i)},d),Tc||(Tc=!0,qo(window,"focus",function(){be=[]},d)),qo(i,"keyup",function(m){wc(m,i),kp(m)},d))}function Pp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(_e).forEach(function(n){var r=_e[n].filter(function(a){return a.scope===t&&a.shortcut===e});r.forEach(function(a){a&&a.method&&a.method()})})}var Vo={getPressedKeyString:Ep,setScope:kc,getScope:ur,deleteScope:Ap,getPressedKeyCodes:Sp,isPressed:Lp,filter:Cp,trigger:Pp,unbind:_p,keyMap:cr,modifier:Tt,modifierMap:Ko};for(ta in Vo)Object.prototype.hasOwnProperty.call(Vo,ta)&&(je[ta]=Vo[ta]);var ta;typeof document<"u"&&(Sc=window.hotkeys,je.noConflict=function(e){return e&&window.hotkeys===je&&(window.hotkeys=Sc),je},window.hotkeys=je);var Sc;var Go=$o.alert;var Rp=0;function g(e,t,n,r,a){var o,i,s={};for(i in t)i=="ref"?o=t[i]:s[i]=t[i];var c={type:e,props:s,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Rp,__source:a,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return Q.vnode&&Q.vnode(c),c}function Jo({value:e,defaultCase:t=null,cases:n}){return e==null?null:g(Ze,{children:n[e]!=null?n[e]:t})}function Yo(){let[e,t]=z(location.hash);return ue(()=>{let n=()=>t(location.hash);return globalThis.addEventListener("hashchange",n,!1),()=>{globalThis.removeEventListener("hashchange",n)}},[]),e}var Xo=/iPhone/i,_c=/iPod/i,Mc=/iPad/i,Pc=/\biOS-universal(?:.+)Mac\b/i,Qo=/\bAndroid(?:.+)Mobile\b/i,Rc=/Android/i,Sn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,ra=/Silk/i,Lt=/Windows Phone/i,Dc=/\bWindows(?:.+)ARM\b/i,Ic=/BlackBerry/i,Nc=/BB10/i,Oc=/Opera Mini/i,Fc=/\b(CriOS|Chrome)(?:.+)Mobile/i,Uc=/Mobile(?:.+)Firefox\b/i,Hc=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function Dp(e){return t=>t.test(e)}function aa(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let a=Dp(n),o={apple:{phone:a(Xo)&&!a(Lt),ipod:a(_c),tablet:!a(Xo)&&(a(Mc)||Hc(t))&&!a(Lt),universal:a(Pc),device:(a(Xo)||a(_c)||a(Mc)||a(Pc)||Hc(t))&&!a(Lt)},amazon:{phone:a(Sn),tablet:!a(Sn)&&a(ra),device:a(Sn)||a(ra)},android:{phone:!a(Lt)&&a(Sn)||!a(Lt)&&a(Qo),tablet:!a(Lt)&&!a(Sn)&&!a(Qo)&&(a(ra)||a(Rc)),device:!a(Lt)&&(a(Sn)||a(ra)||a(Qo)||a(Rc))||a(/\bokhttp\b/i)},windows:{phone:a(Lt),tablet:a(Dc),device:a(Lt)||a(Dc)},other:{blackberry:a(Ic),blackberry10:a(Nc),opera:a(Oc),firefox:a(Uc),chrome:a(Fc),device:a(Ic)||a(Nc)||a(Oc)||a(Uc)||a(Fc)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}var Zo="DENO",oa="CHROME",sa="FIREFOX";function Bc(e){let t=oa;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=sa:/deno/i.test(n)&&(t=Zo)}catch{}return e===oa&&t===oa||e===sa&&t===sa||e===Zo&&t===Zo}function $c(){return Bc(oa)}function jc(){return typeof Deno<"u"}function es(){return Bc(sa)}function zc(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var qc={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Wc={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:qc,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:qc,query:()=>{},sendMessage:()=>{}},identity:{getRedirectURL:e=>e||"",launchWebAuthFlow:e=>Promise.resolve(e.url)}};var j;jc()?j=Wc:j=globalThis.immersiveTranslateBrowserAPI;var Vc={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C(\u66F4\u6574\u9F50)/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",isShowContextMenu:"\u521B\u5EFA\u53F3\u952E\u83DC\u5355",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u540C\u6B65\u65F6\u4F1A\u6BD4\u8F83\u672C\u5730\u548C\u4E91\u7AEF\u914D\u7F6E\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9",aboutIntro:"\u8BE5\u6269\u5C55\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u9891\u9053</4>\u83B7\u53D6\u6700\u65B0\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65"};var Kc={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",syncToCloud:"\u540C\u6B65\u5230\u96F2\u7AEF",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u8ACB\u9078\u64C7\u6587\u4EF6\u64CD\u4F5C",import_hint:"\u5C0E\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",importSuccess:"\u5C0E\u5165\u6210\u529F",importFail:"\u5C0E\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557"};var Gc={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translationServices.niu":"Niu Translation","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed"};var Ip=[{code:"zh-CN",messages:Vc},{code:"zh-TW",messages:Kc},{code:"en",messages:Gc}],Yt={};for(let e of Ip)Yt[e.code]=e.messages;var At="Immersive Translate",he="immersive-translate";var ge="immersiveTranslate",Jc="759003177173-mfm15s5nd77vfmo6e7lanof1emnanf0e.apps.googleusercontent.com",Ye=ge+"GoogleAccessToken",ts=ge+"AuthFlow",ia="immersive-translate-config-latest.json",ns=ge+"AuthState",Vx=ge+"IframeMessage",rs=`${ge}Container`,Xt=`${ge}SpecifiedContainer`,gr="buildinConfig",En="localConfig",Yc="openOptionsPage";var Xc="translateLocalPdfFile",Qc=`${ge}PageTranslatedStatus`,Zc=`${ge}PageUrlChanged`,Kx=`${ge}ReceiveCommand`,Gx=`${ge}PopupReceiveMessage`,eu="immersive-translate.owenyoung.com",Jx=`https://${eu}/`,as=`https://${eu}/buildin_config.json`,Qt=`${ge}Mark`,os="immersiveTranslateEffect",De=`${ge}Root`,ss=`data-${he}-effect`,Cn=`${ge}TranslatedMark`,Zt=`${ge}ParagraphId`,st=`${ge}AtomicBlockMark`,gt=`${ge}ExcludeMark`,tu=`data-${he}-exclude-mark`,la=`${ge}StayOriginalMark`,Ln=`${ge}PreWhitespaceMark`,kt=`${ge}InlineMark`,en=`${ge}BlockMark`,fr=`${ge}Left`,ca=`${ge}Right`,Yx=`${ge}Width`,Xx=`${ge}Height`,nu=`${ge}Top`,ru=`${ge}FontSize`;var is=`${ge}GlobalStyleMark`,au=["@","#"],ua=" --- ",ls=`
`,it=`${he}-target-wrapper`,ga=`${he}-pdf-target-container`,ou=`${he}-target-inner`,Qx=`${he}-source-wrapper`,cs=`${he}-target-translation-block-wrapper`,su=`${he}-target-translation-vertical-block-wrapper`,iu=`${he}-target-translation-pdf-block-wrapper`,lu=`${he}-target-translation-pre-whitespace`,us=`${he}-target-translation-inline-wrapper`,cu=["none","dashed","underline","dashedBorder","mask","dotted","dividingLine","highlight","marker","blockquote","weakening","paper","italic","bold","thinDashed","wavy","nativeDotted","nativeDashed","nativeUnderline"],An=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],gs={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var uu=["toggleTranslatePage","toggleTranslateTheWholePage","toggleTranslateToThePageEndImmediately","toggleTranslateTheMainPage"],gu=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"],fu="Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.",du="\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",fa="zh-CN";function ze(e){Go({type:"success",text:e})}function qe(e){Go({type:"error",text:e})}var fs=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),a=Qe.green;r>1e4?a=Qe.red:r>1e3&&(a=Qe.yellow),console.debug(Qe.dim(At+" TIMING:"),t,"in",a(r+"ms")),this.#e=n}},mr=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Qe.dim(At+" DEBUG:"),...t)}v(...t){this.#e<=0&&console.log(Qe.dim(At+" VERBOSE:"),...t)}info(...t){this.#e<=1&&console.log(Qe.green(At+" INFO:"),...t)}l(...t){this.#e<=1&&console.log(Qe.green(At+" TEMP INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Qe.yellow(At+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Qe.red(At+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Qe.red(At+" FATAL:"),...t)}timing(){return this.level===0?new fs:{reset:()=>{},stop:()=>{}}}},O=new mr;var ds={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return j.storage[n].get(r)},set:(e,t,n)=>j.storage[n].set({[e]:t})};function da(e,t,n){let[r]=z(()=>typeof t=="function"?t():t),[a]=z(n),[o,i]=z(r),[s,c]=z(!0),[u,l]=z("");ue(()=>{ds.get(e,r,a).then(m=>{m[e]&&i(m[e]),c(!0),l("")}).catch(m=>{c(!1),l(m)})},[e,r,a]);let d=tr(m=>{let f=typeof m=="function"?m(o):m;O.debug("new settings",f),ds.set(e,f,a).then(()=>{i(f),c(!0),l("")}).catch(p=>{i(f),c(!1),l(p)})},[a,e,o]);return[o,d,s,u]}function ma(e,t,n){let r=[];return function(){let[o,i,s,c]=da(e,t,n),u=tr(l=>{for(let d of r)d(l)},[]);return ue(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[o,u,s,c]}}function mu(e,t){return ma(e,t,"local")}function pu(e,t){return ma(e,t,"sync")}var Np="userConfig",Op={},Fp=pu(Np,Op);function et(){let[e,t,n,r]=Fp();return[e,function(o){let i=typeof o=="function"?o(e):o;i&&(i.updatedAt=new Date().toISOString()),t(i)},n,r,t]}function Nt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=An.map(a=>a.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let a=n.indexOf(t);return a===-1?"auto":An[a]}else return"auto";else return An[r]}function pr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():y}var ae=pr();function de(){return ae.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function hu(){return typeof Deno<"u"}function hr(){if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let e=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(e&&e._isUserscript)}else return!1}var ms={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],excludeSelectors:["[class^='lln-']"],extraBlockSelector:[".ytd-transcript-segment-renderer"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeSelectors:[".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}}]};function ps(e){return Array.isArray(e)?e:e?[e]:[]}function kn(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function vt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function pa(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let a={...e};return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))a[i]=s;else if(i.startsWith("additional")){let c=ps(s);a[i]=Array.from(new Set([...a[i],...c]))}else a[i]=ps(s)}),a}function tn(){if(ae.PROD==="1")return{};let e={};if(ae.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&ae.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:ae.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:ae.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&ae.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:ae.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:ae.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:ae.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:ae.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&ae.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:ae.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:ae.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&ae.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:ae.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:ae.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(ae.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:ae.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return ae.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=ae.IMMERSIVE_TRANSLATE_SERVICE),ae.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),ae.MOCK==="1"&&(e.translationService="mock"),e}async function Ot(){let e=await j.storage.local.get(En);if(e[En]){let t=e[En],n=t.tempTranslationUrlMatches||[],r=n.filter(i=>i.expiredAt>Date.now()),a=!1;r.length!==n.length&&(n=r,a=!0);let o={...t,tempTranslationUrlMatches:[...n]};return a&&await Ft(o),o}else return{}}async function Ft(e){await j.storage.local.set({[En]:e})}async function bu(){await j.storage.local.set({[gr]:{}})}async function Ut(){await j.storage.local.set({[En]:{}})}async function Ce(){let e=await j.storage.local.get(gr),t={...ms,buildinConfigUpdatedAt:ae.BUILD_TIME};if(e[gr]){let f=e[gr];if(f&&f.buildinConfigUpdatedAt){let p=new Date(f.buildinConfigUpdatedAt),T=new Date(t.buildinConfigUpdatedAt);p>T&&(t=f)}}let n={};if(!de()&&j.commands&&j.commands.getAll){let f=await j.commands.getAll();for(let p of f)p.name&&p.shortcut&&(n[p.name]=p.shortcut)}let r=hs(),a=tn(),o=await yu(),i=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},s=await Ot(),c=new Date;if(s&&s.tempTranslationUrlMatches&&s.tempTranslationUrlMatches.length>0){let f=s.tempTranslationUrlMatches.filter(p=>new Date(p.expiredAt)>c);if(f.length>0){let p=o.translationUrlPattern?o.translationUrlPattern?.matches||[]:[],T=Array.isArray(p)?p:[p],x=Array.from(new Set(T.concat(f.map(h=>h.match))));o.translationUrlPattern={...o.translationUrlPattern,matches:x}}}let u=Object.assign({},i,a,o);if(!u.interfaceLanguage){let f=await Up();u.interfaceLanguage=f}let l=Object.assign(r,t),d=Object.keys(l),m=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let f of d){let p=f;if(p==="generalRule")typeof u[p]=="object"&&(l[p]=pa(r[p],u[p]));else if(p==="translationServices"){let T=u[p]||{},x=t[p]||{},h=Object.keys(x),b=Object.keys(T),S=[...new Set([...h,...b])],L={};for(let F of S)L[F]={...x[F],...T[F]};l[p]=L}else if(typeof u[p]!="string"&&typeof u[p]!="boolean"&&typeof u[p]!="number"&&m.includes(p))u[p]&&(l[p]=Object.assign(l[p],u[p])),p==="shortcuts"&&(l[p]={...l[p],...n});else if(p==="rules"){if(Array.isArray(u[p])&&(l[p]=[...u[p],...l[p]]),ae.PROD==="0"&&ae.DEV_RULES){let T=JSON.parse(ae.DEV_RULES);l[p]=[...T,...l[p]]}}else u[p]!==void 0&&(l[p]=u[p])}return l.donateUrl=t.donateUrl,l.minVersion=t.minVersion,l.feedbackUrl=t.feedbackUrl,l}async function yu(){return(await j.storage.sync.get("userConfig")||{}).userConfig||{}}var Up=async()=>{let n=(await j.i18n.getAcceptLanguages()).map(r=>Nt(r)).find(r=>Yt[r]);return n||"en"},hs=()=>{let e={...ms,buildinConfigUpdatedAt:ae.BUILD_TIME};return{...e,targetLanguage:fa,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};function br(e){if(Math.abs(e)<1024)return e+" Byte";let n=["KB","MB","GB","TB","PB","EB","ZB","YB"],r=-1;do e/=1024,++r;while(Math.abs(e)>=1024&&r<n.length-1);return e.toFixed(1)+" "+n[r]}function xu(e,t,n){let r=Hp(e,t),a=[],o={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(o.tempSentences.reduce((c,u)=>c+u.text.length,0)+i.text.length>t||o.tempSentences.length>=n)&&(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(o.from!==i.from||o.to!==i.to)&&(o.tempSentences.length>0?(a.push(o),o={fromByClient:o.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(o.from=i.from,o.to=i.to)),o.tempSentences.push(i);return o.tempSentences.length>0&&a.push(o),a}function Hp(e,t){let n=[];for(let r=0;r<e.length;r++){let a=e[r],{from:o,to:i,text:s,url:c}=a,u=s.split(/\r?\n/),l=[],d="";for(let m=0;m<u.length;m++){let f=u[m];if(f===""){l.length>0?m<u.length-1&&(l[l.length-1].suffix+=`
`):d+=`
`;continue}else if(f.length>t){let p=[];bs(f,t,p);for(let T=0;T<p.length;T++){let x=p[T],{text:h,prefix:b,suffix:S}=x;l.push({from:o,to:i,text:h,prefix:b,suffix:S,index:r,url:c})}}else l.push({text:f,prefix:d,suffix:"",from:o,to:i,index:r,url:c});l.length>0&&m<u.length-1&&(l[l.length-1].suffix+=`
`)}n.push(...l)}return n}function yr(e,t){let n=Nt(e),r=Nt(t),a=n===r;return a?!0:(a=n.startsWith("zh")&&r.startsWith("zh"),a)}function bs(e,t,n){let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((o,i)=>{let s=e.lastIndexOf(i,t);return s>o?s:o},-1);if(a===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&bs(e.slice(t),t,n);else{let o=e.slice(0,a+1);o.startsWith(" ")?n.push({text:o.slice(1),prefix:" ",suffix:""}):n.push({text:o,prefix:"",suffix:""}),a+1<e.length&&bs(e.slice(a+1),t,n)}return n}var Ie=class extends Error{constructor(n,r,a){super(r);this.name=n,a&&(this.details=a)}};async function _n(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let o=await(e.fetchPolyfill||fetch)(t,r);if(o.ok&&o.status>=200&&o.status<400){if(n==="json")return await o.json();if(n==="text")return await o.text();if(n==="raw"){let i=await o.text(),s=Object.fromEntries([...o.headers.entries()]),c=o.url;return c||(o.headers.get("X-Final-URL")?c=o.headers.get("X-Final-URL"):c=t),{body:i,headers:s,status:o.status,statusText:o.statusText,url:c}}}else{let i;try{i=await o.text()}catch(s){O.error("parse response failed",s)}throw new Ie("fetchError",o.status+": "+o.statusText||"",i)}}function Ht(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Bp(e,t){return e<<t|e>>>32-t}function ba(e,t,n,r,a,o){return Ht(Bp(Ht(Ht(t,e),Ht(r,o)),a),n)}function We(e,t,n,r,a,o,i){return ba(t&n|~t&r,e,t,a,o,i)}function Ve(e,t,n,r,a,o,i){return ba(t&r|n&~r,e,t,a,o,i)}function Ke(e,t,n,r,a,o,i){return ba(t^n^r,e,t,a,o,i)}function Ge(e,t,n,r,a,o,i){return ba(n^(t|~r),e,t,a,o,i)}function ha(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,a,o,i,s=1732584193,c=-271733879,u=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)r=s,a=c,o=u,i=l,s=We(s,c,u,l,e[n],7,-680876936),l=We(l,s,c,u,e[n+1],12,-389564586),u=We(u,l,s,c,e[n+2],17,606105819),c=We(c,u,l,s,e[n+3],22,-1044525330),s=We(s,c,u,l,e[n+4],7,-176418897),l=We(l,s,c,u,e[n+5],12,1200080426),u=We(u,l,s,c,e[n+6],17,-1473231341),c=We(c,u,l,s,e[n+7],22,-45705983),s=We(s,c,u,l,e[n+8],7,1770035416),l=We(l,s,c,u,e[n+9],12,-1958414417),u=We(u,l,s,c,e[n+10],17,-42063),c=We(c,u,l,s,e[n+11],22,-1990404162),s=We(s,c,u,l,e[n+12],7,1804603682),l=We(l,s,c,u,e[n+13],12,-40341101),u=We(u,l,s,c,e[n+14],17,-1502002290),c=We(c,u,l,s,e[n+15],22,1236535329),s=Ve(s,c,u,l,e[n+1],5,-165796510),l=Ve(l,s,c,u,e[n+6],9,-1069501632),u=Ve(u,l,s,c,e[n+11],14,643717713),c=Ve(c,u,l,s,e[n],20,-373897302),s=Ve(s,c,u,l,e[n+5],5,-701558691),l=Ve(l,s,c,u,e[n+10],9,38016083),u=Ve(u,l,s,c,e[n+15],14,-660478335),c=Ve(c,u,l,s,e[n+4],20,-405537848),s=Ve(s,c,u,l,e[n+9],5,568446438),l=Ve(l,s,c,u,e[n+14],9,-1019803690),u=Ve(u,l,s,c,e[n+3],14,-187363961),c=Ve(c,u,l,s,e[n+8],20,1163531501),s=Ve(s,c,u,l,e[n+13],5,-1444681467),l=Ve(l,s,c,u,e[n+2],9,-51403784),u=Ve(u,l,s,c,e[n+7],14,1735328473),c=Ve(c,u,l,s,e[n+12],20,-1926607734),s=Ke(s,c,u,l,e[n+5],4,-378558),l=Ke(l,s,c,u,e[n+8],11,-2022574463),u=Ke(u,l,s,c,e[n+11],16,1839030562),c=Ke(c,u,l,s,e[n+14],23,-35309556),s=Ke(s,c,u,l,e[n+1],4,-1530992060),l=Ke(l,s,c,u,e[n+4],11,1272893353),u=Ke(u,l,s,c,e[n+7],16,-155497632),c=Ke(c,u,l,s,e[n+10],23,-1094730640),s=Ke(s,c,u,l,e[n+13],4,681279174),l=Ke(l,s,c,u,e[n],11,-358537222),u=Ke(u,l,s,c,e[n+3],16,-722521979),c=Ke(c,u,l,s,e[n+6],23,76029189),s=Ke(s,c,u,l,e[n+9],4,-640364487),l=Ke(l,s,c,u,e[n+12],11,-421815835),u=Ke(u,l,s,c,e[n+15],16,530742520),c=Ke(c,u,l,s,e[n+2],23,-995338651),s=Ge(s,c,u,l,e[n],6,-198630844),l=Ge(l,s,c,u,e[n+7],10,1126891415),u=Ge(u,l,s,c,e[n+14],15,-1416354905),c=Ge(c,u,l,s,e[n+5],21,-57434055),s=Ge(s,c,u,l,e[n+12],6,1700485571),l=Ge(l,s,c,u,e[n+3],10,-1894986606),u=Ge(u,l,s,c,e[n+10],15,-1051523),c=Ge(c,u,l,s,e[n+1],21,-2054922799),s=Ge(s,c,u,l,e[n+8],6,1873313359),l=Ge(l,s,c,u,e[n+15],10,-30611744),u=Ge(u,l,s,c,e[n+6],15,-1560198380),c=Ge(c,u,l,s,e[n+13],21,1309151649),s=Ge(s,c,u,l,e[n+4],6,-145523070),l=Ge(l,s,c,u,e[n+11],10,-1120210379),u=Ge(u,l,s,c,e[n+2],15,718787259),c=Ge(c,u,l,s,e[n+9],21,-343485551),s=Ht(s,r),c=Ht(c,a),u=Ht(u,o),l=Ht(l,i);return[s,c,u,l]}function Tu(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function ys(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function $p(e){return Tu(ha(ys(e),e.length*8))}function jp(e,t){var n,r=ys(e),a=[],o=[],i;for(a[15]=o[15]=void 0,r.length>16&&(r=ha(r,e.length*8)),n=0;n<16;n+=1)a[n]=r[n]^909522486,o[n]=r[n]^1549556828;return i=ha(a.concat(ys(t)),512+t.length*8),Tu(ha(o.concat(i),512+128))}function vu(e){var t="0123456789abcdef",n="",r,a;for(a=0;a<e.length;a+=1)r=e.charCodeAt(a),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function xs(e){return unescape(encodeURIComponent(e))}function wu(e){return $p(xs(e))}function zp(e){return vu(wu(e))}function Su(e,t){return jp(xs(e),xs(t))}function qp(e,t){return vu(Su(e,t))}function Mn(e,t,n){return t?n?Su(t,e):qp(t,e):n?wu(e):zp(e)}var Pn=[];async function xr(e,t){return await new Promise((n,r)=>{let a=e,o=1,i=indexedDB.open(a,o);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let c=i.result,u=t||"cache";c.createObjectStore(u,{keyPath:"key"})}})}async function Ts(e){let t=`${he}-${e.service}@${e.from}->${e.to}`;return await Vp(t,e)}async function vs(e){let t=Mn(e.originalText),n=`${he}-${e.service}@${e.from}->${e.to}`;return await Wp(n,t)}async function Wp(e,t){let n=await xr(e);return await new Promise((r,a)=>{if(!n)return a();let o="cache",s=n.transaction([o],"readonly").objectStore(o).get(t);s.onsuccess=c=>{n.close();let u=s.result;r(u)},s.onerror=c=>{n.close(),console.error("queryInDB->onerror:",c),a()}})}async function Vp(e,t){let n=await xr(e);return(await ws()).includes(e)||await Kp(e),await new Promise(a=>{if(!n)return a(!1);let o="cache",s=n.transaction([o],"readwrite").objectStore(o).put(t);s.onsuccess=c=>{n.close(),a(!0)},s.onerror=c=>{console.error("addInDB->onerror:",c),n.close(),a(!1)}})}async function Kp(e){let t="cache_list",n=await xr(he+"-cacheList",t),a=n.transaction([t],"readwrite").objectStore(t).put({key:e});a.onsuccess=o=>{n.close(),Pn.push(e)},a.onerror=o=>{n.close(),console.error(o)}}async function ws(){if(Pn&&Pn.length>0)return Pn;let e=await xr(he+"-cacheList","cache_list");return Pn=await new Promise(t=>{let n="cache_list",a=e.transaction([n],"readonly").objectStore(n).getAllKeys();a.onsuccess=o=>{e.close(),t(a.result)},a.onerror=o=>{e.close(),console.error(o),t([])}}),Pn}async function Ss(){try{let e=[];(await ws()).forEach(r=>{e.push(Gp(r))});let n=await Promise.all(e);return br(n.reduce((r,a)=>r+a,0))}catch(e){return console.error(e),br(0)}}async function Gp(e){let t=await xr(e),r=[...t.objectStoreNames].reduce((i,s)=>{let c=Jp(t,s);return i.push(c),i},[]),a=await Promise.all(r);return t.close(),a.reduce((i,s)=>i+s,0)}async function Jp(e,t){return await new Promise((n,r)=>{if(e==null)return r();let a=0,o=e.transaction([t]).objectStore(t).openCursor();o.onsuccess=i=>{let s=o.result;if(s){let c=s.value;a+=JSON.stringify(c).length,s.continue()}else n(a)},o.onerror=i=>r("error in "+t+": "+i)})}async function Eu(){try{let t=(await ws()).map(r=>Yp(r));return!!(await Promise.all(t)).every(r=>r)}catch(e){return console.error("deleteAll error",e),!1}}async function Yp(e){return await new Promise(t=>{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>{t(!0)},n.onerror=r=>{t(!1)}})}var Xp=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Qp=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Zp=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,eh=/(\s+)|([\p{P}\p{S}])/gu,th=[["zh-CN",Xp],["ja",Qp],["ko",Zp]];function Cu(e){if(!e)return"auto";let t="auto",n=0,r=0,a=e.match(eh);a&&(r=a.reduce((i,s)=>i+s.length,0));let o=e.length-r;for(let i of th){let s=i[1],c=i[0],u=e.match(s),l=u?u.length:0;l>n&&(n=l,t=c)}return n*2.5/o>.5?t:"auto"}function Tr(){try{return globalThis.self!==globalThis.top}catch{return!0}}var nh=pr(),vr=nh.PROD==="1";function Lu(e,t,n){let r=e.querySelectorAll("footer"),a=e.querySelectorAll("aside"),o=Array.from(r).concat(Array.from(a)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),c=[];for(let l of i)s.length>0&&s[0].contains(l)||c.push(l);for(let l=0;l<t.length;l++){let d=t[l].element;for(let m=l+1;m<t.length;m++){let f=t[m].element;if(d.contains(f))t.splice(m,1),m--;else if(f.contains(d)){t.splice(l,1),l--;break}else d===f&&(t.splice(m,1),m--)}}return t.filter(l=>{let d=l.element;if(l.reserve)return!0;let m=!1,f=!1;for(let p of o)if(d===p||p.contains(d)){m=!0;break}if(m)return!1;for(let p of c){if(d.nodeName==="H1")continue;let T=p.querySelector("h1");if(!(T&&Mu(T.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(d===p||p.contains(d))){f=!0;break}}return!f}).map(l=>l.element)}function Bt(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function ya(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function Es(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function wr(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function tt(e,t){let n=[];for(let r of t){let a=e.querySelectorAll(r);for(let o of a)n.push(o)}return n}function rh(e,t){let n=function(o){return o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE?o.nodeType===Node.ELEMENT_NODE&&nt(o,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),a=!0;for(;r.nextNode();){let o=r.currentNode;if(o.nodeType===Node.ELEMENT_NODE){if(le(o,kt)){if(a===!0)return!0;continue}if(!t.inlineTags.includes(o.nodeName))return!1}}return!0}function ft(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?le(e,en)||e.nodeName==="BR"?!1:le(e,kt)?!0:rh(e,t):le(e,kt):!1}function Au(e,t){for(let n of t)if(n===e)return!0;return!1}function ku(e,t){return!!t.metaTags.includes(e.nodeName)}function nt(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:a}=t,o=[];return n&&a&&a.length>0?o=a||[]:o=a.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&le(e,gt,!0)?!0:e.nodeType===Node.ELEMENT_NODE&&le(e,Xt)?!1:!!o.includes(e.nodeName)}function _u(e,t,n,r){let a=Er(r),o=new RegExp(`^${a[0]}(\\d+)${a[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||As(s)||Cs(s)||Ls(s)||o.test(s)?!1:Mu(i,t,n)}function Mu(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function Cs(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function Ls(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function As(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function Pu(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function le(e,t,n=!1){return ah(e,t,"1",n)}function ah(e,t,n,r=!1){return vr&&!r?e[De]?!!(e[De]&&e[De][t]===n):!1:e.dataset[t]===n}function Ru(e,t,n=!1){return vr&&!n?e[De]?!!(e[De]&&e[De][t]):!1:e.dataset[t]!==void 0}function Sr(e){return(e.innerText||e.textContent||"").trim()}function xa(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ce(e,t,n,r=!1){e.isContentEditable||(e.dataset[os]||(e.dataset[os]="1"),vr&&!r?(e[De]||(e[De]={}),e[De][t]||(e[De][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function Du(e,t,n=!1){if(vr&&!n){if(!e[De]||!e[De][t])return;delete e[De][t]}else delete e.dataset[t]}function $t(e,t,n=!1){return vr&&!n?!e[De]||!e[De][t]?void 0:e[De][t]:e.dataset[t]}function Rn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||le(e,la))&&(n=!0),n}function Iu(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function Er(e){let{config:t}=e,n=au;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function Ta(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function Nu(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function wt(){if(!Tr())return globalThis.location.href;try{let t=globalThis.location.href;if(new URL(t).protocol==="about:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let r="";try{r=globalThis.parent.location.href}catch{}return r||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function ks(e,t){e.head.appendChild(e.createElement("style")).innerHTML=t}function _s(e){return e.getAttribute("src")?!1:!!(e.getAttribute("srcdoc")&&e.contentDocument&&e.contentDocument.body)}function Ms(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:a,additionalInlineSelectors:o,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:c,globalStyles:u,stayOriginalTags:l,stayOriginalSelectors:d,globalAttributes:m}=t,f=Object.keys(u);if(f.length>0)for(let E of f){let _=tt(e,[E]);for(let H of _)if(!le(H,is)){ce(H,is,"1");let D=u[E];H.style.cssText+=D}}let p=Object.keys(m);if(p.length>0)for(let E of p){let _=m[E],H=Object.keys(_),D=tt(e,[E]);for(let A of D)for(let M of H){let $=_[M];A.getAttribute(M)!==$&&($===null?A.removeAttribute(M):A.setAttribute(M,$))}}let T=[...n,...r],x=[...a,...o],h=[...s],b=c.map(E=>E.toLowerCase()),S=i;tt(e,T).forEach(E=>{le(E,gt,!0)||ce(E,gt,"1",!0)});let F=[];if(h.length>0&&(F=tt(e,h).filter(E=>!le(E,st))),b.length>0){let E=l.reduce((D,A)=>{let M=A.toLowerCase();return D.push(`<${M}>`,`</${M}>`,`<${M} />`),D},[]),_=[">http://",">https://"];E.push(..._);let H=tt(e,b).filter(D=>{if(le(D,st))return!1;{let M=D.innerHTML;return!E.some(q=>M.includes(q))}});F.push(...H)}F.forEach(E=>{le(E,st)||ce(E,st,"1")});let w=[];x.length>0&&w.push(...tt(e,x)),w.forEach(E=>{ce(E,kt,"1")});let v=[];S.length>0&&v.push(...tt(e,S)),v.forEach(E=>{ce(E,en,"1")});let P=[];d.length>0&&P.push(...tt(e,d)),P.forEach(E=>{ce(E,la,"1")})}function Ou(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function Fu(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await lt({text:Sr(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Nt(document.documentElement.lang)),e}function Ps(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,a=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let c=e.matches(s),u=[];c?u=[e]:u=e.querySelectorAll(s);for(let l of u)le(l,Xt)||ce(l,Xt,"1");return Array.from(u)}).flat();a.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let d=tt(e,n.additionalSelectors);for(let m of d)le(m,Xt)||ce(m,Xt,"1");a.push(...d.map(m=>({element:m,reserve:!0})))}let i=tt(e,["article"]);a.push(...i.map(d=>({element:d,reserve:!0})));let s;if(a.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let d=Array.from(s);a=a.concat(d.map(m=>({element:m,reserve:!0})))}let c=[],u=d=>{if(d.nodeType===Node.ELEMENT_NODE&&nt(d,t.rule,!1))return NodeFilter.FILTER_REJECT;if(d.nodeType===Node.TEXT_NODE&&(d.textContent?d.textContent.trim():"").length>=n.containerMinTextCount){let f=d.parentNode;f&&f.parentNode&&(f=f.parentNode),f&&f.nodeType===Node.ELEMENT_NODE&&(c.includes(f)||c.push(f))}return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;l.nextNode(););a.push(...c.map(d=>({element:d,reserve:!1})))}let o=Lu(e,a,n);return o.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),o}var Rs=[];function Uu(e){Rs.push(e)}function Ds(){Rs.forEach(e=>e()),Rs=[]}var Bu="auto",va="auto",Hu="auto";function $u(e){Bu=e}function Dn(e){va=e}function Cr(){return va!=="auto"?va:Hu!=="auto"?Hu:Bu}function wa(){return va}function dt(e,t,n,r){let a=[],{rule:o}=r,i=Er(r);if(e.length===0)return null;e=e.map(x=>x.element?x:{element:x});let s="",c=!1;for(let x=0;x<e.length;x++){let b=e[x].element;if(typeof b=="string"){s+=b;continue}let S="";Ta(b,`[${tu}]`)?S=oh(b):S=b.innerText;let L=S.startsWith(" "),F=S.endsWith(" ");b.tagName==="A"&&(L=!0,F=!0);let w=Rn(b,o);if(S===""||w){w&&(L=!0,F=!0);let v={type:"element",value:b};a.push(v);let P=a.length-1,E=`${i[0]}${P}${i[1]}`;s+=(L?" ":"")+E+(F?" ":"");continue}if(!nt(b,o,!0)){{let v=t?S:S.trim().replace(/\n/g," ");if(Cs(v)||Ls(v)||As(v)||Pu(v)){let P={type:"element",value:b};a.push(P);let E=a.length-1,_=`${i[0]}${E}${i[1]}`;s+=(L?" ":"")+_+(F?" ":"")}else c=!0,s+=(L?" ":"")+v+(F?" ":"")}if(typeof b!="string"){let v=wr(b.nextSibling,t);v&&(s+=v)}}}if(!c)return null;let u=!1,l=s.split(" ").length,d=s.split(`
`).length;l<=o.blockMinWordCount&&s.length<=o.blockMinTextCount&&d<2&&(u=!0);let m=e.map(x=>x.element),f=Bt(e),p=!1;if(f){let h=globalThis.getComputedStyle(f).writingMode;p=h?h.includes("vertical"):!1}let T={rootFrame:n,isVertical:p,elements:m,text:s,variables:a,inline:u,preWhitespace:t};return _u(T,r.state.translationArea==="body"?2:o.paragraphMinTextCount,r.state.translationArea==="body"?1:o.paragraphMinWordCount,r)?T:null}function oh(e){let t="",n=a=>a.nodeType===Node.ELEMENT_NODE?le(a,gt,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:a.nodeType===Node.TEXT_NODE?(a.textContent&&a.textContent.trim()!==""&&(t+=a.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var sh=1,nn=new Map;function qu(){return nn}function rn(e){return nn.get(e)}function Lr(e,t){nn.set(e,t)}function Wu(){nn.clear()}function ju(e){if(!le(e,Qt))return!1;if(le(e,Cn))return!0;let t=$t(e,Zt);if(!t)return!1;let n=parseInt(t),r=nn.has(n);if(!r){let a=document.getElementById(`${it}-${n}`);a&&a.remove()}return r}function _t(e,t){let n={...e,id:sh++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(ce(r,Qt,"1"),ce(r,Zt,`${n.id}`))}),t.push(n),nn.set(n.id,{...n,state:"Original",observers:[]})}async function Vu(e,t,n){let r=[],{targetLanguage:a,rule:o}=n;for(let m of t){if(nt(m,o,!1))continue;let f=le(m,Ln),p=[];if(le(m,st)){if(!ju(m)){let b=dt([m],!0,e,n);b&&_t(b,r)}continue}let T=b=>{if(!(b.nodeType===Node.TEXT_NODE||b.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(b.nodeType===Node.ELEMENT_NODE){let S=b;if(S.isContentEditable||ju(b))return NodeFilter.FILTER_REJECT;if(ce(S,Qt,"1"),le(S,st)){if(p.length>0){let F=dt([...p],f,e,n);F&&_t(F,r),p.length=0}p.push(S);let L=dt([...p],f,e,n);return L&&_t(L,r),p.length=0,NodeFilter.FILTER_REJECT}}if(nt(b,o,!0)){if((b.nodeName==="CODE"||b.nodeName==="TT")&&b.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(ft(b,o))return zu(b,p,r,f,e,n),NodeFilter.FILTER_REJECT;if(p.length>0){let S=dt([...p],f,e,n);S&&_t(S,r),p.length=0}return NodeFilter.FILTER_REJECT}return b.nodeName==="PRE"?(b.classList.contains("code"),NodeFilter.FILTER_REJECT):ft(b,o)?(zu(b,p,r,f,e,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},x=document.createTreeWalker(m,NodeFilter.SHOW_ELEMENT,T),h=x.nextNode();for(;h;){if(p.length>0){let b=dt([...p],f,e,n);b&&_t(b,r),p.length=0}h=x.nextNode()}if(p.length>0){let b=dt([...p],f,e,n);b&&_t(b,r),p.length=0}}let i=r.map(m=>{let{text:f}=m;return lt({text:f})}),s=await Promise.all(i),c=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],l="auto";n.state.isDetectParagraphLanguage||(l=wa());let d=Cr();return s.forEach((m,f)=>{let p=m;p==="auto"&&(p=d);let T={...r[f],languageByLocal:p,languageByClient:l||"auto"};if(nn.set(T.id,{...T,state:"Original",observers:[]}),!yr(m,a)){if(u.length>0&&u.some(b=>yr(m,b)))return;c.push(T)}}),c}function ih(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),a=null,o=!1;for(;a=r.nextNode();){let s=a.textContent||"",c=s.trim();if(!o&&s.length>0&&c.length===0){o=!0,n.push(" ");continue}c.length>0&&(n.push(a.parentElement),o=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=wr(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=wr(e.nextSibling,t);s&&n.push(s)}return n}function zu(e,t,n,r,a,o){let i=e.previousElementSibling;if(i&&!ft(i,o.rule)&&t.length>0){let c=dt([...t],r,a,o);c&&_t(c,n),t.length=0}nt(e,o.rule,!1)?ku(e,o.rule)||t.push(e):Rn(e,o.rule)?t.push(e):Ta(e,["code","tt"])?t.push(...ih(e,r)):t.push(e)}async function Yu(e,t,n,r){let a=[],{rule:o}=n;for(let i=0;i<t.length;i++){let s=t[i],c=r[i];if(!c)throw new Error("targetContainer is null");let u=[],l=!0,d=null,m=function(T){let x=T;if(["DIV","BR"].includes(x.nodeName))return l=!0,NodeFilter.FILTER_REJECT;if(x.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(ch(T))return NodeFilter.FILTER_REJECT;if(ce(x,Qt,"1"),ft(x,o)){let h=Bt(u),b=globalThis.getComputedStyle(x);if(!h)u.push(Ju(x,b));else{let S=globalThis.getComputedStyle(h),L=Is(S),F=Is(b),w=Gu(F,L),v=!1;if(l&&d&&Gu(F,d).left>=1.5&&d.left>-3&&(v=!0),!v&&l){let E=(x.innerText||x.textContent||"").trim();(E.startsWith("\u2022")||E.charCodeAt(0)===61623||/^\d+\./.test(E))&&(v=!0)}!v&&l&&Bt(u)&&ya(u).reduce((H,D)=>{let A=Is(globalThis.getComputedStyle(D));return Math.max(H,A.right)},0)-L.right>o.pdfNewParagraphIndentRightIndentPx&&(v=!0),l&&(d=F,l=!1),v||(v=lh(w,o)),v&&Ku(u,a,e,n,c),u.push(Ju(x,b)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,m),p=f.nextNode();for(;p;)p=f.nextNode();Ku(u,a,e,n,c)}return a}function Ku(e,t,n,r,a){if(e.length>0){let o=dt([...e],!1,n,r);o&&(o.isPdf=!0,o.targetContainer=a,o.inline=!1,_t(o,t)),e.length=0}}function Is(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function lh(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<=t.pdfNewParagraphLineHeight*-1}function Gu(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Ju(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function ch(e){if(!le(e,Qt))return!1;if(le(e,Cn))return!0;let t=$t(e,Zt);if(!t)return!1;let n=parseInt(t),a=qu().has(n);if(!a){let o=document.getElementById(`${it}-${n}`);o&&o.remove()}return a}function Xu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ns(e,t,n=[],r,a){let o=["notranslate"];return r&&o.push(lu),e&&(o.push(`${he}-target-translation-theme-${e}`),t?o.push(`${us}-theme-${e}`):o.push(`${cs}-theme-${e}`)),n.length>0&&o.push(...n),t?o.push(us):(o.push(cs),a&&o.push(iu)),o}function Os(e){let t=["notranslate",ou];return e&&t.push(`${he}-target-translation-theme-${e}-inner`),t}function Qu(e,t,n){let{rule:r,translationTheme:a}=n,{variables:o,isVertical:i}=e;o=o||[];let{text:s}=t,{wrapperPrefix:c,wrapperSuffix:u}=r,l=Er(n),d="afterend",m=new RegExp(`${l[0]}(\\d+)${l[1]}`,"g"),f=0,p=Xu(s);o.length>0&&(p=p.replace(m,b=>{let S=p.indexOf(b),L=p[S-1]===" ",F=p[S+b.length]===" ",w=o[Number(f)];if(f++,w.type==="element"){let v=w.value.outerHTML;return L||(v=" "+v),F||(v=v+" "),v}else O.error("variable type not supported",w);return b}));let T=Ns(a,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf);i&&T.push(su);let x=Os(a),h="";return r.translationBlockStyle&&(h=`style="${r.translationBlockStyle}"`),p=`<span ${h} class="${T.join(" ")}"><span class="${x.join(" ")}">${p}</span></span>`,e.inline||(c==="smart"?p=`<br>${p}`:p=`${c}${p}`,u==="smart"?p=`${p}`:p=`${p}${u}`),e.inline&&(p=`<span class="notranslate">&nbsp;</span>${p}`),{html:p,position:d}}function eg(e,t){let n=[];for(let r of e){if(le(r,st))continue;if(ce(r,rs,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let o=s=>s.nodeType===Node.ELEMENT_NODE&&nt(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&Us(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,o);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let o=r.querySelectorAll("pre");for(let i of o)Zu(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(Ru(r,Ln)||(uh(r)?(ce(r,Ln,"1"),t.isTransformPreTagNewLine&&Zu(r)):ce(r,Ln,"0"))),Fs(0,r,t,n)}return{hiddenElements:n}}function Fs(e,t,n,r=[]){if(le(t,st))return;let a=!1;if(e===0){let o=Rn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&ft(t,n)&&!o&&(a=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let o of t.childNodes)if(o.nodeType===Node.ELEMENT_NODE){if(nt(o,n,!1))continue;{let i=globalThis.getComputedStyle(o),s=!1;if(i.display==="none"&&(r.push(o),s=!0),!s){let c=i.clip,u=i.zIndex,l=i.height,d=i.width,m=0;if(u.startsWith("-")){let f=parseInt(u);isNaN(f)||(m=f)}if((c==="rect(1px, 1px, 1px, 1px)"||m<0)&&(s=!0),!s&&o.nodeName!=="BR"){let f=parseInt(l),p=parseInt(d);!isNaN(f)&&!isNaN(p)&&(f>0&&f<8||p>0&&p<=8)&&(s=!0)}}if(s){ce(o,gt,"1",!0);continue}else{if(o.nodeName==="DIV"||Iu(o,n)){if((i.display==="inline"||i.display==="inline-flex")&&!le(o,en)){ce(o,kt,"1");continue}}else if((o.nodeName==="SPAN"||o.nodeName==="A")&&!i.display.startsWith("inline")){le(o,kt)||(ce(o,en,"1"),Fs(e+1,o,n,r));continue}if(ft(o,n)&&!a)continue;Fs(e+1,o,n,r)}}}else if(o.nodeType===Node.TEXT_NODE){let i=o.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");o.after(s),s.appendChild(o)}}}}function uh(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Zu(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function Us(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let c=n.lastIndexOf(s,t);return c>i?c:i},-1);if(o===-1)n.length>t+20&&Us(e,t+20);else{let i=n.slice(o+1);o++,i.startsWith(" ")&&o++;let s=e.splitText(o),c=document.createElement("br");s.parentNode?.insertBefore(c,s),o+1<n.length&&Us(s,t)}}function tg(e,t){let n=[];for(let r of e){let a=0,o=1e5,i=document.createElement("div"),s=l=>{let d=l;if(["DIV","BR"].includes(d.nodeName))return NodeFilter.FILTER_REJECT;if(d.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(d.nodeName==="SPAN"){let m=d.getBoundingClientRect(),f=globalThis.getComputedStyle(d),p=m.right,T=m.left,x=f.top.slice(0,-2),h=f.fontSize.slice(0,-2);return p>a&&(a=p),T<o&&(o=T),ce(d,fr,`${T}`),ce(d,ca,`${p}`),ce(d,nu,x),ce(d,ru,h),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;c.nextNode(););let u=a-o;u<600&&(u=600),n.push(i),i.style.left=a+"px",i.style.width=a+"px",i.classList.add(ga),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var ng=["*://*/*","*","*://*"],ag="immersive-translate-wildcard-placeholder.com";function Hs(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>ng.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let a=r.href,o=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let c=s;if(s===o)return!0;if(ng.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===o:fh(a,s)}catch{}return!1}else{let u,l=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let d=s.replace(/\*/g,ag),m;try{m=new URL(d)}catch{return O.debug("invalid match pattern",d,"raw match value:",l),!1}let f=m.hostname,p=m.pathname;p==="/"&&(l.replace("://","").includes("/")||(p="/*"));let T=gh(u+":",rg(f),rg(p));if(T){let x=new URL(a);return x.port="",T.test(x.href)}else return!1}});if(i)return i}return null}function rg(e){return e.replace(ag,"*")}function gh(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function In(e,t){return Hs(e,t)!==null}function fh(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}var Nn="input is invalid type",Bs=typeof window=="object",jt=Bs?window:{};jt.JS_SHA256_NO_WINDOW&&(Bs=!1);var dh=!Bs&&typeof self=="object",mh=!jt.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;mh?jt=global:dh&&(jt=self);var kw=!jt.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,_w=typeof define=="function"&&define.amd,Ar=!jt.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",B="0123456789abcdef".split(""),ph=[-2147483648,8388608,32768,128],mt=[24,16,8,0],Sa=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],Ea=["hex","array","digest","arrayBuffer"],Oe=[];(jt.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});Ar&&(jt.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var og=function(e,t){return function(n){return new Fe(t,!0).update(n)[e]()}},ig=function(e){var t=og("hex",e);t.create=function(){return new Fe(e)},t.update=function(a){return t.create().update(a)};for(var n=0;n<Ea.length;++n){var r=Ea[n];t[r]=og(r,e)}return t},sg=function(e,t){return function(n,r){return new Ca(n,t,!0).update(r)[e]()}},lg=function(e){var t=sg("hex",e);t.create=function(a){return new Ca(a,e)},t.update=function(a,o){return t.create(a).update(o)};for(var n=0;n<Ea.length;++n){var r=Ea[n];t[r]=sg(r,e)}return t};function Fe(e,t){t?(Oe[0]=Oe[16]=Oe[1]=Oe[2]=Oe[3]=Oe[4]=Oe[5]=Oe[6]=Oe[7]=Oe[8]=Oe[9]=Oe[10]=Oe[11]=Oe[12]=Oe[13]=Oe[14]=Oe[15]=0,this.blocks=Oe):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Fe.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(Nn);if(Ar&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!Ar||!ArrayBuffer.isView(e)))throw new Error(Nn)}else throw new Error(Nn);t=!0}for(var r,a=0,o,i=e.length,s=this.blocks;a<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(o=this.start;a<i&&o<64;++a)s[o>>2]|=e[a]<<mt[o++&3];else for(o=this.start;a<i&&o<64;++a)r=e.charCodeAt(a),r<128?s[o>>2]|=r<<mt[o++&3]:r<2048?(s[o>>2]|=(192|r>>6)<<mt[o++&3],s[o>>2]|=(128|r&63)<<mt[o++&3]):r<55296||r>=57344?(s[o>>2]|=(224|r>>12)<<mt[o++&3],s[o>>2]|=(128|r>>6&63)<<mt[o++&3],s[o>>2]|=(128|r&63)<<mt[o++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++a)&1023),s[o>>2]|=(240|r>>18)<<mt[o++&3],s[o>>2]|=(128|r>>12&63)<<mt[o++&3],s[o>>2]|=(128|r>>6&63)<<mt[o++&3],s[o>>2]|=(128|r&63)<<mt[o++&3]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=s[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Fe.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=ph[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Fe.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=this.blocks,u,l,d,m,f,p,T,x,h,b,S;for(u=16;u<64;++u)f=c[u-15],l=(f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3,f=c[u-2],d=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10,c[u]=c[u-16]+l+c[u-7]+d<<0;for(S=t&n,u=0;u<64;u+=4)this.first?(this.is224?(x=300032,f=c[0]-1413257819,s=f-150054599<<0,r=f+24177077<<0):(x=704751109,f=c[0]-210244248,s=f-1521486534<<0,r=f+143694565<<0),this.first=!1):(l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),d=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),x=e&t,m=x^e&n^S,T=a&o^~a&i,f=s+d+T+Sa[u]+c[u],p=l+m,s=r+f<<0,r=f+p<<0),l=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),d=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),h=r&e,m=h^r&t^x,T=s&a^~s&o,f=i+d+T+Sa[u+1]+c[u+1],p=l+m,i=n+f<<0,n=f+p<<0,l=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),d=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),b=n&r,m=b^n&e^h,T=i&s^~i&a,f=o+d+T+Sa[u+2]+c[u+2],p=l+m,o=t+f<<0,t=f+p<<0,l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),d=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),S=t&n,m=S^t&r^b,T=o&i^~o&s,f=a+d+T+Sa[u+3]+c[u+3],p=l+m,a=e+f<<0,e=f+p<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+a<<0,this.h5=this.h5+o<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};Fe.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=B[e>>28&15]+B[e>>24&15]+B[e>>20&15]+B[e>>16&15]+B[e>>12&15]+B[e>>8&15]+B[e>>4&15]+B[e&15]+B[t>>28&15]+B[t>>24&15]+B[t>>20&15]+B[t>>16&15]+B[t>>12&15]+B[t>>8&15]+B[t>>4&15]+B[t&15]+B[n>>28&15]+B[n>>24&15]+B[n>>20&15]+B[n>>16&15]+B[n>>12&15]+B[n>>8&15]+B[n>>4&15]+B[n&15]+B[r>>28&15]+B[r>>24&15]+B[r>>20&15]+B[r>>16&15]+B[r>>12&15]+B[r>>8&15]+B[r>>4&15]+B[r&15]+B[a>>28&15]+B[a>>24&15]+B[a>>20&15]+B[a>>16&15]+B[a>>12&15]+B[a>>8&15]+B[a>>4&15]+B[a&15]+B[o>>28&15]+B[o>>24&15]+B[o>>20&15]+B[o>>16&15]+B[o>>12&15]+B[o>>8&15]+B[o>>4&15]+B[o&15]+B[i>>28&15]+B[i>>24&15]+B[i>>20&15]+B[i>>16&15]+B[i>>12&15]+B[i>>8&15]+B[i>>4&15]+B[i&15];return this.is224||(c+=B[s>>28&15]+B[s>>24&15]+B[s>>20&15]+B[s>>16&15]+B[s>>12&15]+B[s>>8&15]+B[s>>4&15]+B[s&15]),c};Fe.prototype.toString=Fe.prototype.hex;Fe.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,a=this.h4,o=this.h5,i=this.h6,s=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,a>>24&255,a>>16&255,a>>8&255,a&255,o>>24&255,o>>16&255,o>>8&255,o&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||c.push(s>>24&255,s>>16&255,s>>8&255,s&255),c};Fe.prototype.array=Fe.prototype.digest;Fe.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function Ca(e,t,n){var r,a=typeof e;if(a==="string"){var o=[],i=e.length,s=0,c;for(r=0;r<i;++r)c=e.charCodeAt(r),c<128?o[s++]=c:c<2048?(o[s++]=192|c>>6,o[s++]=128|c&63):c<55296||c>=57344?(o[s++]=224|c>>12,o[s++]=128|c>>6&63,o[s++]=128|c&63):(c=65536+((c&1023)<<10|e.charCodeAt(++r)&1023),o[s++]=240|c>>18,o[s++]=128|c>>12&63,o[s++]=128|c>>6&63,o[s++]=128|c&63);e=o}else if(a==="object"){if(e===null)throw new Error(Nn);if(Ar&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!Ar||!ArrayBuffer.isView(e)))throw new Error(Nn)}else throw new Error(Nn);e.length>64&&(e=new Fe(t,!0).update(e).array());var u=[],l=[];for(r=0;r<64;++r){var d=e[r]||0;u[r]=92^d,l[r]=54^d}Fe.call(this,t,n),this.update(l),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}Ca.prototype=new Fe;Ca.prototype.finalize=function(){if(Fe.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Fe.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Fe.prototype.finalize.call(this)}};var On=ig();On.sha256=On;On.sha224=ig(!0);On.sha256.hmac=lg();On.sha224.hmac=lg(!0);var cg=On;var ug=cg.sha256;function pt(e){return Promise.resolve(ug(e))}function La(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function zt(e,t){let n=ug.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function gg(e,t){let n=await zt(e,t);return La(n)}async function Aa(e,t){let n=hh(t),r=await zt(e,n);return La(r)}function hh(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}async function Mt(e){let{url:t,config:n,state:r}=e,a=new URL(t),o="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:c,translationTheme:u,translationThemePatterns:l,translationUrlPattern:d,targetLanguage:m,sourceLanguageUrlPattern:f,immediateTranslationPattern:p}=n,T=Fn(t,i),x=Fn(t,p),h=s,b=Object.keys(c);for(let N of b){let U=c[N];if(Fn(t,U)){h=N;break}}let S=u,L=Object.keys(l);for(let N of L){let U=l[N];if(Fn(t,U)){S=N;break}}let F=Fn(t,d),w=bh(t,d);w||(w=In(t,gu));let v=Object.keys(f),P={};for(let N of v){let U=f[N];if(U&&U.matches)for(let V of U.matches)P[V]=N}let E=Object.keys(P),_=Hs(t,E);_&&(o=P[_]??"auto",P[_]&&P[_]!=="auto"&&Dn(P[_]));let H=m||"zh-CN",D=a.hostname,A=await pt(D),M=a.pathname+a.search+a.hash,$=await pt(M),q=`https://${A}.com/${$}`,Z=await Ot(),ee=n.translationStartMode;ee==="dynamic"&&x&&(ee="immediate");let te={targetLanguage:H,config:n,translationService:h,translationTheme:S,isTranslateUrl:F,sourceLanguage:o,isTranslateExcludeUrl:w,rule:n.generalRule,url:t,encryptedUrl:q,state:r||{translationArea:n.translationArea,translationStartMode:ee,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:T},localConfig:Z};te.state.translationArea==="body"&&(te.config.generalRule.excludeTags=te.config.generalRule.excludeTags.filter(N=>N!=="BUTTON"&&N!=="LABEL"),te.config.generalRule.additionalExcludeSelectors=te.config.generalRule.additionalExcludeSelectors.filter(N=>N!==".btn")),te.translationService==="d"&&(n.immediateTranslationTextCount=0);let k=n.rules,W;globalThis.PDFViewerApplication?W=k.find(N=>N.isPdf):W=k.find(N=>Fn(t,N));let C=n.generalRule;return W&&(te.rule=pa(C,W)),te.rule.isPdf&&(te.state.translationArea="main"),te.state.translationArea==="body"&&(te.rule.paragraphMinTextCount=1,te.rule.paragraphMinWordCount=1),te}function Fn(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:a,excludeSelectorMatches:o}=t;return r&&r.length>0&&In(e,r)?!1:n&&n.length>0&&In(e,n)?!0:o&&o.length>0&&xa(o)?!1:!!(a&&a.length>0&&xa(a))}function bh(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&In(e,n)||r&&r.length>0&&xa(r))}var _a="Original",ka=[],qs=new Set,$s=[],Ma=[],dg=[],Pa=[],fg=wt().split("#")[0],Ws=0,Me,yh=Ur(Lh,300),xh=Ur(hg,200),Vs=pr(),Th=Vs.PROD==="1",Un,kr=new Map,mg,_r="";async function pg(){St()==="Original"?await qt():(St()==="Translated"||St()==="Error")&&Hn()}function Hn(){Ds();let e=[document.body,...kr.keys()];for(let t of e)zs(t),t.querySelectorAll("."+it).forEach(o=>{o.remove()}),t.querySelectorAll("."+ga).forEach(o=>{o.remove()}),t.querySelectorAll("["+ss+"]").forEach(o=>{if(Th)delete o[De];else{let s=Object.keys(o.dataset).filter(c=>c.startsWith(ge));for(let c of s)delete o.dataset[c]}o.removeAttribute(ss)});wg(),Je("Translating"),_r&&(document.title=_r),Je("Original")}function vh(e,t){let n=!1,r=Es(e.elements),a=Bt(e.elements);qs.add(e.id);let o=[];if(r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Ma.push(s),o.push(s),s.observe(r)}if(a&&a!==r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Ma.push(s),o.push(s),s.observe(a)}let i=rn(e.id);i&&(i.observers=o,Lr(e.id,i))}function wh(e,t){if(e){let n=new ResizeObserver((r,a)=>{for(let o of r)o.contentRect.width>10&&(a.disconnect(),t(o.target))});n.observe(e),dg.push(n)}}async function hg(e){let t=[...Pa];Pa=[];let n=new Map;t.forEach(r=>{n.has(r.rootFrame)||n.set(r.rootFrame,[]),n.get(r.rootFrame)?.push(r.element)});for(let[r,a]of n)try{let o=[];for(let i of a){let s=Ps(i,e);if(s.length===0)continue;let c=s;o.push(...c)}await Gs(o,r,e)}catch(o){O.error(`translateNewDynamicNodes error: ${o.message}`)}}function js(e,t){qs.delete(e.id);let n=rn(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(o=>{o.disconnect()}),n.observers=[],n.state="Translating",Lr(e.id,n));let r=e.id;Ws+=e.text.length;let a=ya(e.elements);if(e.isPdf){let o=Es(e.elements),i=globalThis.getComputedStyle(o),s=i.top,c=i.fontSize,u=parseFloat(c.slice(0,-2));isNaN(u)||u>20&&(c="20px");let l=e.targetContainer,d=document.createElement("span");a.length===1&&(d.style.fontSize=c),d.id=`${it}-${r}`,d.style.top=s;let m=$t(o,fr),f=a.reduce((x,h)=>{let b=$t(h,fr);return b&&b<x?b:x},1e3),T=a.reduce((x,h)=>{let b=$t(h,ca);return b&&b>x?b:x},0)-f;T<30,T>600&&(T=600),m<200&&(m=10),m&&m<0&&(m=0),d.style.left=`${f||10}px`,f<400?d.style.width=T+"px":d.style.width=`calc(100% - ${f}px)`,d.classList.add("notranslate",`${it}`),l.appendChild(d)}else{let o=Bt(e.elements),i="afterend";e.elements.length>0&&o&&(a.length===1?i="beforeend":ft(e.elements[0],t.rule)||(i="beforeend")),t.rule.insertPosition&&(i=t.rule.insertPosition);let s=document.createElement("span");if(s.classList.add("notranslate",it),s.id=`${it}-${r}`,s.innerHTML=Eh(),i==="beforeend"){let c=Nu(o);c?c.appendChild(s):o.appendChild(s)}else if(i==="afterend")o.insertAdjacentElement(i,s);else throw new Error("not support position")}ka.push(r),yh(t)}function Sh(e,t){t.state.translationStartMode==="dynamic"&&Ws>t.config.immediateTranslationTextCount?vh(e,n=>{js(n,t)}):js(e,t)}async function qt(){if(_a==="Translating")return;Je("Translating");let e=await an(wt());if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),o=new URL(e.url).hostname,i=e.localConfig.tempTranslationUrlMatches||[],s=i.findIndex(u=>u.match===o&&u.expiredAt>r),c=!1;s>-1||(i.push({match:o,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),c=!0),c&&await Ft({...e.localConfig,tempTranslationUrlMatches:[...i]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),O.debug("ctx",e),e.state.isNeedClean?Hn():Me.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Uu(()=>{Ws=0,Wu(),Ma.forEach(r=>{r.disconnect()}),dg.forEach(r=>{r.disconnect()}),Ma=[],qs.clear()}),Je("Translating");try{let r=[document.body];document.querySelectorAll("iframe").forEach(i=>{_s(i)&&(r.push(i.contentDocument.body),ks(i.contentDocument,Vs.IMMERSIVE_TRANSLATE_INJECTED_CSS))}),e.rule.shadowRootSelectors&&e.rule.shadowRootSelectors.length>0&&tt(document.body,e.rule.shadowRootSelectors).forEach(s=>{s.shadowRoot&&s.shadowRoot.mode==="open"&&r.push(s.shadowRoot)});let o=0;Je("Translating"),O.debug("allFrames",r);for(let i of r)o+=await bg(i,e);o===0&&Je("Translated"),vg(e).catch(i=>{O.error("translateTitle error:",i.name,i.message,i.details||"")}),kh(e)}catch(r){Je("Error"),O.error(r)}}async function bg(e,t){Ms(e,t.rule);let n=Ps(e,t);O.debug("detect containers",n);let{rule:r}=t;n.length>0&&await Gs(n,e,t);let a=Ah(e,r,t);return e===document.body?mg=a:kr.set(e,a),n.length}async function an(e){let t=await Sg();if(!Me)Me=await Mt({url:e,config:t});else{let n={url:e,config:t,state:Me.state};Me=await Mt(n)}return Me}async function yg(){St()==="Original"?await Ra():(St()==="Translated"||St()==="Error")&&(Me=await an(wt()),Me.state.translationArea!=="main"?await Ra():Hn())}async function Ra(){Me=await an(wt()),Me.state.translationArea="main",await qt()}async function Ks(){Me=await an(wt()),Me.state.translationArea="body",await qt()}async function xg(){St()==="Original"?await Ks():(St()==="Translated"||St()==="Error")&&(Me=await an(wt()),Me.state.translationArea!=="body"?(Me.state.translationArea="body",await qt()):Hn())}async function Tg(){Me=await an(wt()),Me.state.translationArea="body",Me.state.translationStartMode="immediate",await qt(),await hg(Me)}async function vg(e){let t=document.title;if(!t||t.includes(ua))return;_r!==t&&(_r=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=wa()),n==="auto"){let r=await lt({text:t});if(yr(r,e.targetLanguage))return}try{let r=await Lg({id:0,url:e.url,text:t,from:n,to:e.targetLanguage,fromByClient:n},e);r&&r.text&&(document.title=_r+ua+r.text)}catch(r){throw r}}function Eh(){return`&nbsp;<span class="${he}-loading notranslate"></span>`}async function Gs(e,t,n){let{rule:r}=n;for(let i of e)Ms(i,r);let a=[];if(n.rule.isPdf)e.length>0&&(Je("Translating"),a=tg(e,r).targetContainers);else{Je("Translating");let i=eg(e,r),{hiddenElements:s}=i;for(let c of s)wh(c,()=>{Du(c,gt,!0),Gs([c],t,n)});Je("Translating")}let o=[];if(n.rule.isPdf?o=await Yu(t,e,n,a):(e=e.filter(i=>!nt(i,r,!1)),o=await Vu(t,e,n)),Je("Translating"),o.length===0){Je("Translated");return}O.debug("detect paragraphs",o);for(let i of o)Sh(i,n);Je("Translated")}function Ch(e,t,n,r){let a=rn(n.id);if(a&&(e||!t)){e||(O.error("translate error",t),e=new Error("no response from server"));let o=n.id,i=a.rootFrame.querySelector(`#${it}-${o}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),a&&(a.state="Error",Lr(a.id,a));let c=`<span class="${he}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${he}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${he}-clickable-button notranslate" data-${he}-paragraph-id="${o}" data-${he}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=c)}else{let o=rn(n.id);if(o){o.state="Translated",Lr(o.id,o);let i=Qu(o,t,r),s=t.id,c=o.rootFrame.querySelector(`#${it}-${s}`);c&&(c.innerHTML=i.html,o.rootFrame.querySelectorAll(`[${Zt}="${s}"]`).forEach(l=>{ce(l,Cn,"1")}))}else O.error("paragraph not found",n.id)}}async function Lh(e){if(ka.length===0)return Promise.resolve();let t=[...ka];ka=[];let n="auto";e.state.isDetectParagraphLanguage||(n=Cr());let r={sentences:t.filter(o=>rn(o)).map(o=>{let i=rn(o),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){Je("Translating");try{await Js(r,e,(o,i,s)=>{Ch(o,i,s,e)})}catch(o){Je("Error"),O.error("translateCurrentQueue error",o.name,o.message,o.details||" ");return}}Je("Translated")}function Je(e){_a=e,Cg(_a)}function Ah(e,t,n){O.debug("enableMutatinObserver for ",e),zs(e),$s=[],Pa=[];let r=t.inlineTags.concat(t.excludeTags).concat("#text","BR"),a=new MutationObserver(function(o){o.forEach(i=>{if(e===document.body){let s=wt();if(s.split("#")[0]!==fg&&t.observeUrlChange){fg=s.split("#")[0],Ds(),zs(e),wg(),setTimeout(()=>{O.debug("url changed, reinit page"),Mh()},t.urlChangeDelay);let u=new Event(Zc);document.dispatchEvent(u);return}}i.addedNodes.forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let c=s;if(c.nodeName==="IFRAME")_s(c)&&setTimeout(()=>{ks(c.contentDocument,Vs.IMMERSIVE_TRANSLATE_INJECTED_CSS),bg(c.contentDocument.body,n).catch(u=>{O.error("translateFrame error",u.details||" ",u)})},n.rule.urlChangeDelay);else if(_h(t,c)||!r.includes(c.nodeName)){if(c.classList.contains("notranslate"))return;Au(c,$s)||(Pa.push({element:c,rootFrame:e}),$s.push(c),xh(n))}}})})});return a.observe(e,{childList:!0,subtree:!0}),a}function kh(e){let t=document.querySelector("title");t&&(Un=new MutationObserver(function(n){n.length>0&&(n[0].target.text.includes(ua)||vg(e).catch(a=>{O.error("translateTitle error:",a.name,a.message,a.details||"")}))}),Un.observe(t,{subtree:!0,characterData:!0,childList:!0}))}function _h(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Mh(){let e=Tr(),t=await an(wt());t.rule.urlChangeDelay&&await bn(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?(de()?n=await lt({text:Sr(document.body).slice(0,1e3)}):e?n=await lt({text:Sr(document.body).slice(0,1e3)}):n=await Eg(),n==="auto"&&(n=await Fu()),$u(n)):Dn(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(O.debug(`detect page language: ${n}`),Ou(n,t.config.translationLanguagePattern)&&(r=!0,O.debug(`match language pattern ${n}, auto translate`))),r?(Me.state.isAutoTranslate=!0,await qt()):O.debug("do not auto translate",t)}function zs(e){if(kr.has(e)){let t=kr.get(e);t.disconnect(),t.takeRecords(),kr.delete(e)}else if(e===document.body){let t=mg;t&&(t.disconnect(),t.takeRecords())}}function wg(){Un&&(Un.disconnect(),Un.takeRecords(),Un=void 0)}function St(){return _a}var Mr=new Map,Bn=class{constructor(t,n=!1){this.logger=new mr,n&&this.logger.setLevel("debug"),this.fromType=t,Mr.has(t)||(Mr.set(t,new Map),j.runtime.onMessage.addListener((r,a,o)=>{let i=r.from,s=r.to,c,u,l;a.tab&&a.tab.id&&(c=a.tab.id,i=`${i}:${c}`,u=a.tab.url,l=a.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let d=Xs(s),{type:m,name:f}=d;if(m!==t)return!1;let p=Xs(i),x=Mr.get(m).get(f);if(!x)return this.logger.debug(`no message handler for ${m}:${s}, but it's ok`),!1;let{messageHandler:h,sync:b}=x,S={type:t,name:p.name,id:c,url:u,active:l};if(b){try{let L=h(r.payload,S);o({ok:!0,data:L})}catch(L){o({ok:!1,errorName:L.name,errorMessage:L.message,errorDetails:L.details})}return!1}else return h(r.payload,S).then(L=>{o({ok:!0,data:L})}).catch(L=>{o({ok:!1,errorName:L.name,errorMessage:L.message,errorDetails:L.details})}),!0}))}getConnection(t,n,r){let a=!1;r&&r.sync&&(a=!0);let o=this.fromType,i=Mr.get(o);if(i.has(t))return i.get(t).connectionInstance;{let s=new Ys(`${o}:${t}`,this.logger);return Mr.get(o).set(t,{messageHandler:n,sync:a,connectionInstance:s}),s}}},Ys=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=Xs(t),{type:a,id:o}=r;if(a!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await j.runtime.sendMessage(i);return Ag(i,s,this.logger)}catch(s){if(a==="popup"){let c=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(c,n,t,s),Promise.resolve({message:c})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await j.tabs.sendMessage(o,i);return Ag(i,s,this.logger)}}};function Ag(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Ie(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function Xs(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var Ph=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await Ks():n==="translateTheMainPage"?await Ra():n==="translateToThePageEndImmediately"?await Tg():n==="toggleTranslatePage"?await pg():n==="toggleTranslateTheWholePage"?await xg():n==="toggleTranslateTheMainPage"?await yg():n==="translatePage"?await qt():n==="restorePage"?Hn():n==="showTranslationOnly"?void 0:n==="setCurrentPageLanguageByClient"&&Dn(r)};var Da;function Qs(){return Da||(Da=new Bn("content_script",!1).getConnection("main",Ph),Da)}async function on(e){return await Qs().sendMessage("background:main",e)}function oe(e){return de()||hu()?(e.fetchPolyfill=globalThis.GM_fetch,_n(e)):on({method:"fetch",data:e})}function Sg(){return de()?Ce():on({method:"getConfig"})}function lt(e){if(e.text){let t=Cu(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(de()){let t=j.extra.detectLanguage(e.text);return Promise.resolve(t)}return on({method:"detectLanguage",data:e})}function Eg(){return on({method:"detectTabLanguage"})}function Cg(e){if(de()){let n=new CustomEvent(Qc,{detail:e});document.dispatchEvent(n);return}Qs().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function kg(e){return de()?vs(e):on({method:"queryParagraphCache",data:e})}async function _g(e){if(de()){await Ts(e);return}return on({method:"setParagraphCache",data:e})}async function Zs(){if(de())return Promise.resolve();await on({method:"mockRequest"})}var se=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,a=[],o=[],i=0,s=new Set,c=null,u=new Set;for(let m of r)m.from&&m.from!=="auto"&&u.add(m.from);let l=!1;u.size>1&&(l=!0);try{o=xu(r,this.maxTextLength,this.maxTextGroupLength)}catch(m){if(n){s.has(i)&&i++;for(let f=i;f<r.length;f++){let p=r[f];n(m,null,p)}c=m}else c=m}let d=Gr({limit:this.throttleLimit,interval:1e3});O.debug("tempSentenceGroups",o.map(m=>m));for(let m=0;m<o.length;m++){let f=o[m],p=f.url,T=d(async()=>{let b=f.from;if(l&&(b="auto"),f.fromByClient&&f.fromByClient!=="auto"&&(b=f.fromByClient),this.isSupportList)return await this.translateList({text:f.tempSentences.map(L=>L.text),from:b,to:f.to,url:p});{let S=f.tempSentences.map(v=>v.text).join(ls),L=await this.translate({text:S,from:b,to:f.to,url:p}),{text:F}=L;return{text:F.split(ls),from:L.from,to:L.to}}}),x;try{x=await T()}catch(b){if(n){s.has(i)&&i++;for(let S=i;S<r.length;S++){let L=r[S];n(b,null,L)}c=b;continue}else{c=b;continue}}let{text:h}=x;for(let b=0;b<h.length;b++)try{let S=h[b],L=f.tempSentences[b],{index:F,prefix:w,suffix:v}=L;a[F]===void 0?a[F]={...r[F],from:f.from,to:f.to,text:w+S+v}:a[F].text+=w+S+v,F!==i&&n&&(s.add(i),n(null,a[i],r[i])),i=F}catch(S){if(n){s.has(i)&&i++;for(let L=i;L<r.length;L++){let F=r[L];n(S,null,F)}throw S}else throw S}}if(n&&!s.has(i)&&a[i]&&r[i]&&n(null,a[i],r[i]),c)throw c;return{sentences:a}}detectLanguageLocally(t){return lt({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Mg=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],ht=class extends se{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),a=`${n.getUTCMonth()+1}`.padStart(2,"0"),o=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${a}-${o}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:ht.langMap.get(a),SourceText:r,Target:ht.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:ht.langMapReverse.get(s.Response.Source)||a,to:ht.langMapReverse.get(s.Response.Target)||o}}async translateList(n){let{text:r,from:a,to:o}=n,i=JSON.stringify({ProjectId:0,Source:ht.langMap.get(a),SourceTextList:r,Target:ht.langMap.get(o)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:ht.langMapReverse.get(s.Response.Source)||a,to:ht.langMapReverse.get(s.Response.Target)||o}}async signedRequest({secretId:n,secretKey:r,action:a,payload:o,service:i,version:s}){let c=`${i}.tencentcloudapi.com`,u=new Date,l=`${new Date().valueOf()}`.slice(0,10),d=["POST","/","","content-type:application/json; charset=utf-8",`host:${c}`,"","content-type;host",await pt(o)].join(`
`),m=ht.getUTCDate(u),f=["TC3-HMAC-SHA256",l,`${m}/${i}/tc3_request`,await pt(d)].join(`
`),p=await gg(m,`TC3${r}`),T=await Aa(i,p),x=await Aa("tc3_request",T),h=await Aa(f,x),b=await oe({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:c,"X-TC-Action":a,"X-TC-Timestamp":l,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${m}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${h}`},body:o});if(b instanceof Error)throw b;if(b.Response&&b.Response.Error&&b.Response.Error.Message)throw new Error(b.Response.Error.Message);return b}},sn=ht;sn.langMap=new Map(Mg),sn.langMapReverse=new Map(Mg.map(([n,r])=>[r,n]));var Pg=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],Pr=class extends se{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:a,to:o}=n;if(!r)return{...n};let i=Pr.langMap.get(a)||"auto",s=Pr.langMap.get(o)||"zh-CN",c=await this.fetchWithoutToken(r,i,s);if(!c)throw new Error("google translate NETWORK_ERROR");if(!c.data[0]||c.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:c.data[0].map(l=>l[0]).filter(Boolean).join(""),from:Pr.langMapReverse.get(c.data[2])||"auto",to:o}}async fetchWithoutToken(n,r,a){let o=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:a,q:n}),i="https://translate.googleapis.com/translate_a/single?"+o.toString();return{data:await oe({url:i})}}},ln=Pr;ln.langMap=new Map(Pg),ln.langMapReverse=new Map(Pg.map(([n,r])=>[r,n]));function Rg(e){return e.result.texts}function Rh(e,t){return t?e+(t-e%t):e}function Dh(e,t){return e.split(t).length-1}function Dg(e){let t=Date.now(),n=1;for(let r of e)n+=Dh(r,"i");return Rh(t,n)}function Ih(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ei(){return Ih(1e6,1e8)}var ti="https://www2.deepl.com/jsonrpc",Ia="auto",Ig=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],Ng=["formal","informal"];function Fg(e,t=Ia,n=ei()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function Nh(e,t=1){let n=[],r=0;for(let a=0;a<e.length;a++){let o=e[a].chunks;for(let i=0;i<o.length;i++){let s=o[i];n.push({kind:"default",_index:a,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:o.slice(0,r).map(c=>c.sentences[0].text),raw_en_context_after:r+1<o.length?[o[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function Og(e){return e.reduce((t,n)=>{let r=n.chunks;for(let a of r)t.push(a.sentences[0].text);return t},[])}function Oh(e){if(!e)return{};if(!Ng.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function Ug(e,t,n,r=ei(),a=1,o){let i=Og(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:Nh(n,a),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:Oh(o),timestamp:Dg(Og(n))},id:r}}function Fh(e=Ig){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function ni(e){return Fh()[e.toLowerCase()]}var Hg={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function Bg(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function Uh(e,t,n){let r=Fg(e,t,n);return await oe({method:"POST",url:ti+"?method=LMT_split_text",headers:Hg,body:Bg(r)})}async function Hh(e,t,n,r,a,o){let i=await Uh(e,n,r),s=Ug(n==="auto"?i.result.lang.detected:n,t,Rg(i),r,a,o),c=s.params.jobs.map(d=>d._index);s.params.jobs=s.params.jobs.map(d=>{let m={...d};return delete m._index,m});let u=await oe({method:"POST",url:ti+"?method=LMT_handle_jobs",body:Bg(s),headers:Hg}),l={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((d,m)=>{let f=c[m];l.text[f]===void 0&&(l.text[f]="");let p=s.params.jobs[m].sentences[0].prefix,T=s.params.jobs[m].sentences[0].prefix;l.text[f]=l.text[f]+p+d.beams[0].sentences[0].text}),l}async function $g(e,t,n=Ia,r,a,o){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:Hh(e,ni(t),ni(n)??"auto",r,a,o):{text:[],from:n,to:t}}var jg=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],$n=class extends se{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:a,from:o}=n,i=await $g(r,$n.langMap.get(a),$n.langMap.get(o));return{text:i.text,from:$n.langMapReverse.get(i.from),to:$n.langMapReverse.get(i.to)}}},cn=$n;cn.langMap=new Map(jg),cn.langMapReverse=new Map(jg.map(([n,r])=>[r,n]));var zg=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],BE=new Map(zg),$E=new Map(zg.map(([e,t])=>[t,e]));var qg=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],ri="https://transmart.qq.com/api/imt",un=class extends se{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:a}=n,o=await this.detectLanguage(r),i=un.langMap.get(o)||o,s=un.langMap.get(a)||a;if(o===a)return{text:r,from:o,to:a};let c=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await oe({url:ri,body:c,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:o||"auto",to:a}}async translateList(n){let{from:r,text:a,to:o}=n;if(a.length===1){let d=await this.translate({from:r,text:a[0],to:o,url:n.url});return{text:[d.text],from:d.from,to:d.to}}let i=await this.detectLanguage(a.join(`
`));if(i===o)return{text:a,from:i,to:o};let s=un.langMap.get(i)||i,c=un.langMap.get(o)||o,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:a,lang:s,orig_url:n.url},target:{lang:c},type:"plain"}),l=await oe({url:ri,body:u,method:"POST"});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:i||"auto",to:o}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},a=await oe({url:ri,method:"POST",body:JSON.stringify(r)});if(a.header.ret_code!=="succ")throw new Error(a.message||a.header.ret_code);let o=a.language,i=un.langMapReverse.get(o);return i||o}},gn=un;gn.langMap=new Map(qg),gn.langMapReverse=new Map(qg.map(([n,r])=>[r,n]));function Wg(){return Math.random()>=0}var jn=class extends se{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await Zs(),await bn(5e3);let a=r.match(/^\s*/)[0].length;return{text:r.slice(0,a)+"\u6A21\u62DF\uFF1A"+r.slice(a,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:a,to:o}=n;if(await Zs(),!Wg())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:a,to:o,text:[""]}:{from:a,to:o,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var Gg=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],Vg=new Map(Gg),Kg=new Map(Gg.map(([e,t])=>[t,e])),Rr=class extends se{constructor(n,r){super(n,r);this.apikey="";this.codename=Rr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...Rr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:Rr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:a,to:o}=n,i=await oe({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:Vg.get(a)||"auto",target_lang:Vg.get(o)})});if(i.status){let s=i;return{text:s.result,from:Kg.get(s.source_lang),to:Kg.get(s.target_lang)}}else throw new Error(i.msg)}},Na=Rr;Na.DEFAULT_CODENAME="deepl";var Oa=Na;var Yg=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],Jg=new Map(Yg),Bh=new Map(Yg.map(([e,t])=>[t,e])),ai=class extends se{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:a,text:o}=n,i={source_lang:Jg.get(r),target_lang:Jg.get(a)},s=new URLSearchParams(i);o.forEach(f=>{s.append("text",f)});let c=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let l=await oe({url:u,method:"POST",body:c,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:d}=l;return{text:d.map(f=>f.text),from:d[0]&&Bh.get(d[0].detected_source_language)||r,to:a}}},Xg=ai;var $h=[["auto","auto"],["zh-CN","zh"],["zh-TW","cht"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"]],Qg=new Map($h),oi=class extends se{constructor(n,r){super(n,r);this.APIKEY="";this.isSupportList=!1;if(!n||!n.APIKEY)throw new Error("APIKEY are required");this.APIKEY=n.APIKEY}static getAllProps(){return[{name:"APIKEY",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=r,s={url:"https:///api.niutrans.com/NiuTransServer/translation",headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({src_text:i,from:Qg.get(a)||a,to:Qg.get(o)||o,apikey:this.APIKEY})},c=await oe(s);if(c.tgt_text){let u=c.tgt_text;return u.endsWith(`
`)&&(u=u.slice(0,-1)),{text:u,from:a,to:o}}else throw new Error(JSON.stringify(c))}},Zg=oi;var jh=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Le={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},si=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},ii=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=si(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(si).sort().join(`&${r}=`)}`:`${r}=${si(n)}`}).filter(t=>t).join("&"),zn=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let a=t[r];return typeof a<"u"&&a!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],a=this.credentialString(n);return r.push(`${Le.algorithm} Credential=${t.accessKeyId}/${a}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),a={...this.request.params},o=this.request.params,i=this.request.headers;t.sessionToken&&(a[Le.tokenHeader]=t.sessionToken),a[Le.dateHeader]=r,a[Le.notSignBody]="",a[Le.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,a[Le.algorithmKey]=Le.algorithm,a[Le.signHeadersKey]="",a[Le.signQueriesKey]=void 0,a[Le.signatureKey]=void 0,a=this.sortParams(a),this.request.params=a,this.request.headers={};let s=await this.signature(t,r);return this.request.params=o,this.request.headers=i,a[Le.signQueriesKey]=Object.keys(a).sort().join(";"),a[Le.signatureKey]=s,ii(a)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Le.dateHeader]=n,t.sessionToken&&(this.request.headers[Le.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Le.contentSha256Header]=await pt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return La(await zt(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Le.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=ii(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,a)=>r[0].toLowerCase()<a[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let a=r[0].toLowerCase();if(this.isSignableHeader(a)){let o=r[1];if(typeof o>"u"||o===null||typeof o.toString!="function")throw new Error(`Header ${a} contains invalid value`);n.push(`${a}:${this.canonicalHeaderValues(o.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await pt(t)}async hexEncodedBodyHash(){return this.request.headers[Le.contentSha256Header]?this.request.headers[Le.contentSha256Header]:this.request.body?await this.hexEncodedHash(ii(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return jh.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,a){let o=await zt(n,`${Le.kDatePrefix}${t.secretKey}`),i=await zt(r,o),s=await zt(a,i);return zt(Le.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,Le.v4Identifier].join("/")}};var tf=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],ef=new Map(tf),zh=new Map(tf.map(([e,t])=>[t,e])),li=class extends se{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async remoteDetectLanguage(n){let r={TextList:[n]},a={region:"cn-north-1",method:"POST",params:{Action:"LangDetect",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(r)},o=new zn(a,"translate");await o.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let i=new URLSearchParams(a.params),s=await oe({url:"https://open.volcengineapi.com"+a.pathname+"?"+i.toString(),headers:o.request.headers,method:a.method,body:a.body});if(s.DetectedLanguageList&&s.DetectedLanguageList.length>0)return s.DetectedLanguageList[0].Language;if(s.ResponseMetadata&&s.ResponseMetadata.Error){let c=s.ResponseMetadata.Error;throw new Ie(c.Code,c.Message)}else if(s.ResponseMetaData&&s.ResponseMetaData.Error){let c=s.ResponseMetaData.Error;throw new Ie(c.Code,c.Message)}else throw new Error("response: "+JSON.stringify(s))}async translateList(n){let{text:r,from:a,to:o}=n,i=ef.get(a),s={TargetLanguage:ef.get(o)||o,TextList:r};i?s.SourceLanguage=i:s.SourceLanguage=await this.remoteDetectLanguage(r.join(`
`).slice(0,1e3));let c={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new zn(c,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let l=new URLSearchParams(c.params),d=await oe({url:"https://open.volcengineapi.com"+c.pathname+"?"+l.toString(),headers:u.request.headers,method:c.method,body:c.body});if(d.TranslationList){let m=d.TranslationList.map(p=>p.Translation),f=a;return d.TranslationList.length>0&&d.TranslationList[0].DetectedSourceLanguage&&(f=zh.get(d.TranslationList[0].DetectedSourceLanguage)||a),{text:m,from:f,to:o}}else if(d.ResponseMetadata&&d.ResponseMetadata.Error){let m=d.ResponseMetadata.Error;throw new Ie(m.Code,m.Message)}else if(d.ResponseMetaData&&d.ResponseMetaData.Error){let m=d.ResponseMetaData.Error;throw new Ie(m.Code,m.Message)}else throw new Error("response: "+JSON.stringify(d))}},nf=li;var rf=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],qh=new Map(rf),Wh=new Map(rf.map(([e,t])=>[t,e])),Dr=class extends se{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:a,to:o}=n,s={source_language:qh.get(a)||"detect",target_language:"zh",text:r},c=await oe({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(c.base_resp&&c.base_resp.status_code===0){let u=c.translation,l=a;return c.detected_language&&(l=Wh.get(c.detected_language)||a),{text:u,from:l,to:o}}else{let u=c.base_resp;throw new Ie(u.status_code.toString(),u.status_message)}}};var Vh=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],af=new Map(Vh),Ir=class extends se{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:a,to:o}=n,s=await oe({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:af.get(a)||a,target_lang:af.get(o)||o,text:r})});if(s.code===200)return{text:s.data,from:a,to:o};throw new Error(s.message||s.message||"API Error")}};var ci="https://{s}bing.com",uf=ci+"/translator",Kh=ci+"/ttranslatev3",Gh=ci+"/tspellcheckv3",Fa="bingGlobalConfig",gf=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],of=new Map(gf),sf=new Map(gf.map(([e,t])=>[t,e])),lf=1e3,bt,qn;function ui(e,t){return e.replace("{s}",t?t+".":"")}async function Jh(){if(!bt){let n=await j.storage.local.get(Fa);return n&&(bt=n[Fa]),!0}let{tokenTs:e,tokenExpiryInterval:t}=bt;return Date.now()-e>t}async function cf(){let e,t,n,r,a,o,i,s,c,u;try{let l=ui(uf,e),d=await oe({url:l,responseType:"raw"}),{body:m,headers:f,url:p}=d;e=p.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=f["set-cookie"],t=m.match(/IG:"([^"]+)"/)[1],n=m.match(/data-iid="([^"]+)"/)[1],[a,r,o,i,s,c]=JSON.parse(m.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(l){throw console.error("failed to fetch global config",l),l}return bt={subdomain:e,IG:t,IID:n,key:a,token:r,tokenTs:a,tokenExpiryInterval:o,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:c,cookie:u,count:0},await j.storage.local.set({[Fa]:bt}),bt}function Yh(e){let{IG:t,IID:n,subdomain:r,isVertical:a}=bt;return ui(e?Gh:Kh,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+bt.count++:"")}function Xh(e,t,n,r){let{token:a,key:o}=bt,i={fromLang:n,text:t,token:a,key:o};return!e&&r&&(i.to=r),i}async function ff(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>lf)throw new Error(`The supported maximum length of text is ${lf}. Please shorten the text.`);qn||(qn=cf()),await qn,await Jh()&&(qn=cf(),await qn),t=t||"auto",n=n||"zh-CN",t=of.get(t)||t,n=of.get(n)||n;let a=Yh(!1),o=Xh(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:ui(uf,bt.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(o),c=a,u=s.toString(),l=await oe({url:c,headers:i,method:"POST",body:u});if(l.ShowCaptcha||l.StatusCode===401||l.statusCode){if(bt=null,qn=null,await j.storage.local.remove(Fa),l.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${l.StatusCode}.
    `);if(l.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(l.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(l)}.`)}let d=l[0].translations[0],m=l[0].detectedLanguage;return{text:d.text,from:sf.get(m.language),to:sf.get(d.to)}}var Nr=class extends se{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:a,to:o}=n;return r?await ff(r,a,o):{...n}}};var mf=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],df=new Map(mf),Qh=new Map(mf.map(([e,t])=>[t,e])),gi=class extends se{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:a}=this,{appid:o,key:i}=this,{text:s,from:c,to:u}=n,l=new URLSearchParams({from:df.get(c),to:df.get(u),q:s,salt:r,appid:o,sign:Mn(o+s+r+i)}),d=new URL(a);d.search=l.toString();let m=await oe({url:d.toString()});if(m.error_code)throw console.error(new Error("[Baidu service]"+m.error_msg)),new Ie("API_SERVER_ERROR",m.error_msg);let{trans_result:f,from:p}=m,T=f.map(({dst:h})=>h);return{from:Qh.get(p),to:u,text:T.join(`
`)}}},pf=gi;var Zh=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],hf=new Map(Zh),fi=class extends se{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:a,to:o}=n;a==="auto"&&(a=await lt({text:r.join(" ")}));let i=r;return{text:(await oe({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${hf.get(a)}2${hf.get(o)}`})})).target,from:a,to:o}}},bf=fi;var xf=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],yf=new Map(xf),eb=new Map(xf.map(([e,t])=>[t,e]));function tb(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var di=class extends se{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:a,to:o}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),c=this.appId+tb(r)+i+s+this.appSecret,u=await pt(c),l={q:r,appKey:this.appId,salt:i.toString(),from:yf.get(a),to:yf.get(o),sign:u,signType:"v3",curtime:s.toString()},d=new URLSearchParams(l),f=await oe({url:"https://openapi.youdao.com/api",method:"POST",body:d.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p=f.l,[T,x]=p.split("2");return{text:f.translation.join(`
`),from:eb.get(T),to:o}}},Tf=di;var Wn={mock:{class:jn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:jn,name:"Mock2",homepage:"https://www.google.com"},google:{class:ln,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:gn,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:Xg,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:nf,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:Dr,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:Nr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:sn,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:pf,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:bf,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:Oa,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Tf,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:cn,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:Ir,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"},niu:{class:Zg,name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://niutrans.com/documents/contents/beginning_guide/6"}};function mi(e,t){let n=Wn[e],r=t.config.translationServices[e]||{},a=!0,o=n.class.getAllProps();if(o.length>0){let i=o.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){a=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:a,config:r,props:n.class.getProps(),allProps:o}}var nb=Object.keys(Wn),vf=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return nb.filter(a=>{let o=Wn[a];return a.startsWith("mock")?!!r:!o.alpha||n||a===e.translationService}).map(a=>mi(a,e))};async function Lg(e,t){if(!e.text)return e;let n=await Js({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Ie("translateFailed","translate failed")}async function Js(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:a}=t,o=r.translationGeneralConfig,i=r.translationServices,s=a,c=i[s]||{},u=[],l={sentences:Array(e.sentences.length)},d=e.sentences.length,m=-1;if(r.cache)for(let x of e.sentences){m++;let h=s;s==="openl"&&(h=s+"-"+c.codename||Oa.DEFAULT_CODENAME);let b=null;try{b=await Fr(kg({originalText:x.text,from:x.from,to:x.to,service:h}),1e3)}catch(S){O.warn("query cache DB error, but it's ok",S)}if(b){let S={...x,text:b.translatedText};l.sentences[m]=S,n&&n(null,S,x)}else u.push(x)}else u.push(...e.sentences);let f=u.length;if(d-f>0&&O.debug(`use ${d-f} sentences from cache`),!u.length)return l;let p;try{p=new Wn[s].class(c,o),await p.init()}catch(x){if(n)for(let h of u)n(x,null,h);throw x}let T=await p.multipleTranslate({sentences:u},(x,h,b)=>{if(n&&(n(x,h,b),!x&&h&&!s.startsWith("mock")&&r.cache)){let S=s;s==="openl"&&(S=s+"-"+c.codename||Oa.DEFAULT_CODENAME),r.cache&&Fr(_g({translatedText:h.text,from:b.from,to:b.to,detectedFrom:h.from,key:Mn(b.text),service:S}),3e3).catch(L=>{O.warn("set cache DB error",L)})}});for(let x of T.sentences){let h=l.sentences.findIndex(b=>!b);if(h===-1)throw new Ie("translateFailed","can not match the result");l.sentences[h]=x}return l}function wf(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function pi(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let a=t[r],o=rb(r);if(typeof a=="object"||o){let i=a;o&&typeof i=="string"&&(i={tag:"a",href:i});let s=`<${r}>`,c=n.indexOf(s);if(c!==-1){let u=i.tag||"a",l=n.indexOf(`</${r}>`);if(l!==-1){let d=n.substring(c+s.length,l),m=Object.keys(i).filter(f=>f!=="tag").map(f=>`${f}="${i[f]}"`).join(" ");n=n.replace(`${s}${d}</${r}>`,`<${u} ${m}>${d}</${u}>`)}}}else{let i=new RegExp("{"+r+"}","gm");n=n.replace(i,a.toString())}}),n}function Or(e,t,n){let r=e[t];if(!r)return n;let a=n.split("."),o="";do{o+=a.shift();let i=r[o];i!==void 0&&(typeof i=="object"||!a.length)?(r=i,o=""):a.length?o+=".":r=n}while(a.length);return r}function hi(e,t,n,r,a){if(!e.hasOwnProperty(n))return t;let o=Or(e,n,t);return o===t&&n!==r&&(o=Or(e,r,t)),pi(o,a)}function rb(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var Vn={},ab={root:"",lang:"en",fallbackLang:"en"};function bi(e,t){let n=Object.assign({},ab,e);Vn=t||Vn;let[r,a]=z(n.lang),[o,i]=z(Vn),[s,c]=z(!1),u=d=>{if(o.hasOwnProperty(d))return;c(!1);let m=wf(n.root||"",d);n.getUrl&&(m=n.getUrl(n.root||"",d),fetch(m).then(f=>f.json()).then(f=>{Vn[d]=f,i({...Vn}),c(!0)}).catch(f=>{i({...Vn}),c(!0)}))};return ue(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:a,t:(d,m)=>{if(!o.hasOwnProperty(r))return d;let f=Or(o,r,d);return f===d&&r!==n.fallbackLang&&(f=Or(o,n.fallbackLang,d)),pi(f,m)},isReady:s}}var xi=Za(null),yi={root:"assets",lang:"en",fallbackLang:"en"},Sf=e=>{let{t,setLang:n,lang:r,isReady:a}=bi({root:e.root||yi.root,lang:e.lang||yi.lang,fallbackLang:e.fallbackLang||yi.fallbackLang,getUrl:e.getUrl},e.translations);return g(xi.Provider,{value:{t,setLang:n,lang:r,isReady:a},children:e.children})};function ne(){return no(xi)}function xe(e){return g("div",{class:"nav-left",children:[g("div",{class:"title",children:e.title}),g("div",{class:"description",children:e.description})]})}function Ti(e){let{items:t,maxWidth:n}=e;return n=n||128,g("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let a=r.target.value,o=t.find(i=>i.value===a);o&&o.onSelected(o)},children:t.map(r=>g("option",{value:r.value,selected:r.selected,children:r.label}))})}function Ua(e){let{t}=ne();return g("div",{class:"input-row",children:[g("div",{class:"input-left",children:g("label",{for:e.field.name,children:[e.field.label?t(e.field.label):e.field.name,"\uFF1A"]})}),g("div",{class:"input-right",children:g("input",{required:e.field.required,placeholder:e.field.name,class:"input",value:e.value,type:e.type,onChange:n=>{e.onChange(n.target.value)}})})]})}function vi(e){let{field:t,root:n,onChange:r,value:a}=e;a=a||t.default||"";let{t:o}=ne();return t.type==="select"?g("div",{class:"flex justify-end mb-2",children:[g("label",{class:"engine",children:[t.label?o(t.label):t.name,"\uFF1A"]}),g(Ti,{items:t.options.map(i=>({label:`${i.label?o(i.label):i.value}`,value:a??"",selected:a===i.value,onSelected:()=>{r(i.value)}}))})]}):t.type==="text"?g("div",{children:g(Ua,{field:t,value:a,type:t.type,onChange:r})}):t.type==="password"?g("div",{children:g(Ua,{field:t,value:a,type:t.type,onChange:r})}):null}var Ef={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},wi={...Yt,"zh-CN":{...Ef["zh-CN"],...Yt["zh-CN"]},"zh-TW":{...Ef["zh-TW"],...Yt["zh-TW"]}},Ha=wi;function Si(e,t,n){return hi(wi,e,t,fa,n)}var Cf=()=>An.filter(e=>e!=="auto"),Wt=(e,t,n)=>{let r=hi(wi,`languages.${e}`,t,"en");return n?gs[e]||e:r!==`languages.${e}`?r:gs[e]};function Ba(e){let{t,lang:n}=ne();return g("details",{role:"list",class:"nav-right",children:[g("summary",{"aria-haspopup":"listbox",children:t("edit")}),g("ul",{role:"listbox",class:"option-list",children:e.options.map(r=>{let a=Wt(r.value,n);return g("li",{children:g("label",{children:[g("input",{type:"checkbox",onChange:()=>{e.onToggleAlwaysLangs(!r.checked,r.value)},value:r.value,checked:r.checked}),a]})})})})]})}function Kn(e){let{t}=ne();return g("div",{children:e.urls.map((n,r)=>g("div",{class:"url-list",children:[g("div",{class:"url-left",children:[g("div",{class:"url-name height-tight",children:n}),g("div",{class:"description text-1 height-tight",children:n})]}),g("nav",{children:g("ul",{children:g("li",{children:g("details",{role:"list",dir:"rtl",children:[g("summary",{"aria-haspopup":"listbox",role:"link"}),g("ul",{class:"delete",role:"listbox",children:[g("li",{children:g("a",{onClick:a=>{e.onEditUrl(n,e.type,r)},children:t("edit")})}),g("li",{children:g("a",{onClick:a=>{e.onDeleteUrl(n,e.type)},children:t("delete")})})]})]})})})})]},"menu"+r))})}function Gn(e){let{t}=ne(),n=xn(null),{toggleModal:r}=e;return g("dialog",{id:"immersive-translate-overlay",onClick:o=>{o.preventDefault(),o.target&&o.target.id==="immersive-translate-overlay"&&r(o)},open:!0,children:g("article",{class:"add-modal",children:[g("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:e.toggleModal}),g("div",{class:"add-text",children:t("add url")}),g("input",{placeholder:"URL",ref:n,value:e.urlValue}),g("blockquote",{children:g("p",{class:"text-sm",children:t("addUrlDescription")})}),g("div",{class:"flex",children:[g("div",{class:"footer-button",children:g("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:e.toggleModal,children:t("cancel")})}),g("div",{class:"footer-button",children:g("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:o=>{if(o.preventDefault(),n.current&&n.current.value){if(e.onSubmitAddUrl){if(e.urlValue!==""){e.onSubmitAddUrl(n.current.value,e.index,e.type,"edit");return}e.onSubmitAddUrl(n.current.value,e.index,e.type);return}else if(e.onAddInterfaceUrl){if(e.urlValue!==""){e.onAddInterfaceUrl(n.current.value,"edit");return}e.onAddInterfaceUrl(n.current.value)}}},children:t("confirm")})})]})]})})}var Ei=Cf();function $a(){let{t:e}=ne(),[t,n,r,a,o]=et(),[i,s]=z(null),[c,u]=z(null),[l,d]=z(0),[m,f]=z(!1),[p,T]=z(!1),[x,h]=z(""),b=[];c&&(b=vf(c));let S=null,L=null,F=[],w=[];if(i&&c){let{translationService:k,translationServices:W}=i;Wn[k]&&(L=mi(k,c)),W&&W[k]?S=W[k]||{}:S={},F=Ei.map(C=>i.translationLanguagePattern&&i.translationLanguagePattern.matches&&i.translationLanguagePattern.matches.includes(C)?{checked:!0,value:C}:{checked:!1,value:C}),w=Ei.map(C=>i.translationLanguagePattern&&i.translationLanguagePattern.excludeMatches&&i.translationLanguagePattern.excludeMatches.includes(C)?{checked:!0,value:C}:{checked:!1,value:C})}ue(()=>(je("esc",()=>{f(!1),T(!1)}),Ce().then(k=>{s(k),O.debug("current config",k)}),()=>{je.unbind("esc")}),[]),ue(()=>{Ce().then(k=>{s(k)})},[t]),ue(()=>{i&&Mt({url:"http://localhost",config:i}).then(k=>{u(k)})},[i]);let v=k=>{n(W=>({...W,translationService:k}))},P=k=>{n(()=>({...k}))},E=k=>{k.preventDefault(),confirm(e("confirmResetConfig"))&&(o(tn()),j.storage.local.remove(Ye),Ut().catch(W=>{O.error("clean local config error",W)}),ze(e("resetSuccess")))},_=k=>{n(W=>({...W,targetLanguage:k}))},H=(k,W)=>{if(!k){n(U=>{let V={...U.translationLanguagePattern};return{...U,translationLanguagePattern:{...U.translationLanguagePattern,matches:vt(W,V.matches),excludeMatches:vt(W,V.excludeMatches)}}});return}let C=k,N=C==="matches"?"excludeMatches":"matches";W&&n(U=>{let V={...U.translationLanguagePattern};return V[C]=kn(W,V[C]),V[N]=vt(W,V[N]),{...U,translationLanguagePattern:{...U.translationLanguagePattern,...V}}})},D=(k,W)=>{H(k?"matches":void 0,W)},A=(k,W)=>{H(k?"excludeMatches":void 0,W)},M=k=>{k==="matches"?f(!m):T(!p)},$=(k,W,C,N)=>{M(C),n(U=>{let V=t.translationUrlPattern,G=[],Te=[];V&&V.matches&&V.excludeMatches&&(G=V.matches,Te=V.excludeMatches);let we=[...G],Ae=[...Te];return N==="edit"&&(C==="matches"?we[W]=k:Ae[W]=k),C==="matches"?(we=kn(k,we),Ae=vt(k,Te)):(we=vt(k,G),Ae=kn(k,Ae)),{...U,translationUrlPattern:{...U.translationUrlPattern,matches:we,excludeMatches:Ae}}})},q=(k,W)=>{n(C=>{let N=t.translationUrlPattern,U=[];W==="matches"?N&&N.matches&&(U=N.matches):N&&N.excludeMatches&&(U=N.excludeMatches);let V=[...U];return V=vt(k,V),{...C,translationUrlPattern:{...C.translationUrlPattern,[W]:V}}})},Z=(k,W,C)=>{M(W),h(k),d(C)};if(!i)return g("div",{children:"loading"});let ee=[];i&&i.translationLanguagePattern&&i.translationLanguagePattern.matches&&(ee=i.translationLanguagePattern.matches);let te=[];return i&&i.translationLanguagePattern&&i.translationLanguagePattern.excludeMatches&&(te=i.translationLanguagePattern.excludeMatches),g("div",{children:[g("div",{class:"nav",children:[g("strong",{class:"text-lg",children:e("general")}),g("a",{class:"text-sm",href:"#",onClick:E,children:e("reset")})]}),g("div",{class:"nav",children:[g(xe,{title:e("target"),description:e("translate other languages into specific language")}),g("select",{class:"select",onChange:k=>{k.preventDefault(),_(k.target.value)},children:Ei.filter(k=>k!=="auto").map(k=>g("option",{value:k,selected:k===i.targetLanguage,children:Wt(k,i.interfaceLanguage)}))})]}),g("div",{class:"nav",children:[g(xe,{title:e("service"),description:e("select translation service")}),g("select",{class:"select",onChange:k=>{k.preventDefault(),v(k.target.value)},children:b.map(k=>g("option",{value:k.id,selected:k.id===i.translationService,children:`${e("translationServices."+k.id)}${k.ok?"":" "+e("needActionForOptions")}`}))})]}),L&&L.docUrl?g("div",{children:[g("a",{class:"pb-1 docUrl",href:L.homepage,children:e(`translationServices.${L.id}`)}),"\xA0",g("span",{class:"description pb-1",children:e("please refer to")}),"\xA0",g("a",{class:"pb-1 docUrl",href:L.docUrl,children:e("KeyAndConfigurationTutorial")})]}):null,S&&L&&L.allProps.length>0&&L.allProps.map(k=>g(vi,{field:k,value:S[k.name],onChange:W=>{n(C=>{let N=C.translationServices||{},U=N[L.id]||{};return{...C,translationServices:{...N,[L.id]:{...U,[k.name]:W}}}})}})),g("div",{class:"nav",children:[g(xe,{title:e("always languages"),description:e("always translate the following languages")}),g(Ba,{options:F,onToggleAlwaysLangs:D})]}),g("div",{class:"langs-list",children:ee.map((k,W)=>g("div",{class:"lang-card",children:[g("div",{id:`${k}`,children:Wt(k,i.interfaceLanguage)}),g("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${k}`,onClick:C=>{C.preventDefault(),D(!1,ee[W])}})]}))}),g("div",{class:"nav",children:[g(xe,{title:e("neverTranslateLanguagesLabel"),description:e("neverTranslateTheFollowingLanguagesDescription")}),g(Ba,{options:w,onToggleAlwaysLangs:A})]}),g("div",{class:"langs-list",children:te.map((k,W)=>g("div",{class:"lang-card",children:[g("div",{id:`${k}`,children:Wt(k,i.interfaceLanguage)}),g("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${k}`,onClick:C=>{C.preventDefault(),A(!1,te[W])}})]}))}),g("div",{class:"nav",children:[g(xe,{title:e("always sites"),description:e("always translate the following sites")}),g("div",{class:"nav-right",children:g("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:k=>{k.preventDefault(),M("matches")},children:e("add")})}),m?g(Gn,{toggleModal:k=>{k.preventDefault(),M("matches")},onSubmitAddUrl:$,type:"matches",urlValue:x,index:l}):null]}),g(Kn,{urls:i.translationUrlPattern.matches,type:"matches",onDeleteUrl:q,onEditUrl:Z}),g("div",{class:"nav",children:[g(xe,{title:e("never sites"),description:e("never translate the following sites")}),g("div",{class:"nav-right",children:g("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:k=>{k.preventDefault(),M("excludeMatches")},children:e("add")})}),p?g(Gn,{toggleModal:k=>{k.preventDefault(),M("excludeMatches")},onSubmitAddUrl:$,type:"excludeMatches",urlValue:x,index:l}):null]}),g(Kn,{urls:i.translationUrlPattern.excludeMatches,type:"excludeMatches",onDeleteUrl:q,onEditUrl:Z}),g("div",{class:"nav",children:[g(xe,{title:e("advanced"),description:e("advancedDescription")}),g("a",{class:"text-sm",href:"#advanced",children:e("goAdvancedSettings")})]})]})}function Ci(e){let{t}=ne(),{corfirmText:n,fingerCountToToggleTranslagePageWhenTouching:r,onChange:a,onClose:o,shortcuts:i}=e,s={},c=xn(null);for(let l=0;l<i.length;l++)s[i[l].name]=xn(null);let u=l=>{l.preventDefault(),l.target&&l.target.id==="immersive-translate-overlay"&&o()};return ue(()=>{},[]),g("dialog",{id:"immersive-translate-overlay",onClick:u,open:!0,children:g("article",{class:"add-modal",children:[g("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:l=>{l.preventDefault(),o()}}),i.map((l,d)=>{let{name:m,description:f,shortcut:p}=l;return g("div",{class:"flex justify-between items-center",children:[g("label",{class:"mb-2 text-sm",for:m,children:[f,":"]}),g("input",{type:"text",class:"!w-36",ref:s[m],disabled:l.disabled,id:m,name:m,value:p})]},`key-${d}`)}),zc()&&g("div",{class:"flex justify-between items-center",children:[g("label",{for:"switch",class:"text-sm mb-2",children:t("toggleTranslatePageWhenThreeFingersOnTheScreen")}),g("select",{class:"select !w-36",ref:c,onChange:l=>{l.preventDefault()},children:[0,2,3,4,5].map(l=>g("option",{value:l,selected:l===r,children:`${t("fingers."+l)}`}))})]}),e.note&&g(e.note,{}),g("div",{class:"flex",children:[g("div",{class:"footer-button",children:g("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:l=>{l.preventDefault(),o()},children:t("cancel")})}),n&&g("div",{class:"footer-button",children:g("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:l=>{l.preventDefault();let d=[];for(let f=0;f<i.length;f++){let p=i[f],T=s[p.name];if(T.current){let x=T.current.value;d.push({...p,shortcut:x})}}let m={shortcuts:d};if(c.current){let f=c.current.value;m.fingerCountToToggleTranslagePageWhenTouching=parseInt(f)}a(m)},children:n})})]})]})})}var sb="https://www.googleapis.com/oauth2/v3/tokeninfo",Af=Jc;async function kf(e){let t=j?.identity?.getRedirectURL();if(O.debug("REDIRECT_URL",t),typeof j?.runtime?.getBrowserInfo=="function"){let r=await j?.runtime?.getBrowserInfo();r&&r.name==="Firefox"&&(r.version.split(".")[0]||0)>=86&&(t="http://127.0.0.1/mozoauth2/"+t.split(".")[0].replace(/https?:\/\//,""),O.debug("browserInfo",r),O.debug("Firefox detected, using loopback addresses "+t))}if(!t)throw new Error("Redirect URL is not available");let n=["https://www.googleapis.com/auth/drive.appdata"];return`https://accounts.google.com/o/oauth2/auth?client_id=${Af}&response_type=token&redirect_uri=${encodeURIComponent(t)}&scope=${encodeURIComponent(n.join(" "))}&state=${encodeURIComponent(JSON.stringify(e))}`}function ib(e){let t=e.match(/[#?](.*)/);return!t||t.length<1?"":new URLSearchParams(t[1].split("#")[0]).get("access_token")}function Lf(e){if(!e)throw"Authorization failure";let t=`${sb}?access_token=${e}`,n=new Request(t,{method:"GET"});function r(a){return new Promise((o,i)=>{a.status!=200&&i("Token validation error"),a.json().then(s=>{s.aud&&s.aud===Af?o(e):i("Token validation error")})})}return fetch(n).then(r)}async function lb(e){let t=await kf(e);return O.debug("redirect url",t),j.identity.launchWebAuthFlow({interactive:!0,url:t})}async function ja(e){let t=await kf(e);if(hr()){let n=await j.storage.local.get(Ye);if(O.debug("google drive token",n),n[Ye]){let r=n[Ye];return await Lf(r).catch(a=>globalThis.open(t,"_self")),r}return O.debug("AUTH_URL",t),globalThis.open(t,"_self"),null}else return lb(e).then(n=>ib(n)).then(Lf)}var Et=class{constructor(t){this.accessToken=t}wrap(t,n=!0){return new Promise((r,a)=>{if(t.ok)n?t.json().then(o=>r(o)):t.text().then(o=>r(o));else try{t.json().then(o=>{a(new Error(o.error.message))})}catch{t.text().then(i=>a(new Error(i)))}})}async upload(t,n){let r=new FormData;r.append("metadata",new Blob([JSON.stringify(t)],{type:"application/json; charset=UTF-8"})),r.append("file",n);let a=await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",{method:"POST",headers:{Authorization:`Bearer ${this.accessToken}`},body:r});return this.wrap(a)}async list(t,n){let r=new URL("https://www.googleapis.com/drive/v3/files");t&&r.searchParams.append("pageToken",t),n&&r.searchParams.append("q",n),r.searchParams.append("spaces","appDataFolder"),r.searchParams.append("fields","files(id,name,createdTime,modifiedTime,size)"),r.searchParams.append("pageSize","100"),r.searchParams.append("orderBy","createdTime desc");let a=await fetch(r,{headers:{Authorization:`Bearer ${this.accessToken}`}});return this.wrap(a)}async listAll(){let t=[],n="";do{let{nextPageToken:r,files:a}=await this.list(n).catch(o=>{throw o});t.push(...a),n=r||""}while(n);return t}async getConfig(t){let n=await fetch(`https://www.googleapis.com/drive/v3/files/${t}?alt=media`,{headers:{Authorization:`Bearer ${this.accessToken}`}});return this.wrap(n)}async delete(t){let n=await fetch(`https://www.googleapis.com/drive/v3/files/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${this.accessToken}`}});return this.wrap(n,!1)}findByName(t){return this.list(void 0,`name = '${t}'`)}uploadConfig(t){let n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return this.upload({name:ia,parents:["appDataFolder"]},n)}updateConfig(t,n){let r=new Blob([JSON.stringify(n,null,2)],{type:"application/json"});return this.updateContent(t,r)}async updateContent(t,n){let r=await fetch(`https://www.googleapis.com/upload/drive/v3/files/${t}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${this.accessToken}`},body:n});return this.wrap(r)}};function _f(e){let t="https://oauth2.googleapis.com/revoke?token="+e;return fetch(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}})}async function Li(e,t,n,r,a,o,i){let s=new Et(e);try{let u=(await s.findByName(ia)).files[0]?.id,l=null;if(u&&(l=await s.getConfig(u).then(d=>({fileId:u,config:d}))),l){let{config:d,fileId:m}=l,f=d.updatedAt?new Date(d.updatedAt):new Date(0),p=t.updatedAt?new Date(t.updatedAt):new Date(0);if(O.debug("remoteUpdatedAt",f,"localUpdatedAt",p),f>p)O.debug("remote is newer, update local config"),n(d);else if(f.getTime()===p.getTime())O.debug("remote and local are the same, do nothing");else if(f<p)O.debug("local is newer, update remote config"),await s.updateConfig(m,t),o&&o();else{i&&i(": unknown error");return}r(new Date().toISOString())}else l===null?t?(t.updatedAt||(a(new Date().toISOString()),t.updatedAt=new Date().toISOString()),await s.uploadConfig(t),r(new Date().toISOString()),o&&o()):i&&i(": Local Config is empty"):i&&i(": latestConfig is "+l)}catch(c){O.error("syncLatestWithDrive error",c),i&&i(": "+c.message)}}var Ai=$c()?["action"]:["browser_action","page_action"],ki=[{id:"toggleTranslatePage",contexts:["page",...Ai]},{id:Yc,contexts:Ai},{id:Xc,contexts:Ai}];async function Mf(e){O.debug("createContextMenu",ki),await j.contextMenus.removeAll();for(let t of ki)e.isShowContextMenu===!1&&t.id==="toggleTranslatePage"&&(t.contexts=t.contexts.filter(n=>n!=="page")),j.contextMenus.create({id:t.id,title:Si(`browser.${t.id}`,e.interfaceLanguage),contexts:t.contexts},()=>j.runtime.lastError)}async function Pf(){let e=await Ce();O.debug("update ContextMenu",e);for(let t of ki){let n=Si(`browser.${t.id}`,e.interfaceLanguage);j.contextMenus.update(t.id,{title:n})}}var cb=Object.keys(Ha),ub=e=>{let t=e.translationTheme;return e.translationThemePatterns[t]?[...e.translationThemePatterns[t].matches]:[]};function _i(){let[e,t,n,r]=et(),[a,o]=z(!1),[i,s]=z(!1),[c,u]=z(0),[l,d]=z(null),{t:m,setLang:f}=ne(),[p,T]=z(""),x=j.runtime.getManifest();ue(()=>(je("esc",()=>{o(!1),s(!1)}),()=>{je.unbind("esc")}),[]),ue(()=>{Ce().then(E=>{Mt({config:E,url:globalThis.location.href}).then(_=>{d(_)})})},[e]);let h=E=>{t(_=>({..._,translationTheme:E}))},b=E=>{t(_=>({..._,interfaceLanguage:E}))},S=(E,_,H)=>{o(!a),t(D=>{let A=D.translationThemePatterns||{},M=A[_]||{},$=M.matches||[],q=[...$];return H==="edit"&&(q=vt(p,$)),q=kn(E,q),{...D,translationThemePatterns:{...A,[_]:{...M,matches:q}}}})},L=(E,_)=>{t(H=>{let D=H.translationThemePatterns||{},A=D[_]||{},$=[...A.matches||[]];return $=vt(E,$),{...H,translationThemePatterns:{...D,[_]:{...A,matches:$}}}})},F=(E,_,H)=>{o(!a),T(E),u(H)};if(!l)return g("div",{children:"loading"});let w=l.config,v=m("confirm"),P=()=>g("blockquote",{class:"text-sm",children:[m("browserShortcutsSucks")," ",g("kbd",{children:"Ctrl+A"}),"\xA0",g("kbd",{children:"Alt+B"}),"\xA0",g("kbd",{children:"Command+C"}),"\xA0 ",g("kbd",{children:"Ctrl+Shift+D"})," ",g("a",{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values",children:[m("help"),"?"]})]});return de()||(es()?(P=()=>g("blockquote",{class:"text-sm",children:[m("browserShortcutsNoteForFirefox"),"  ",g("a",{href:"https://support.mozilla.org/zh-CN/kb/%E7%AE%A1%E7%90%86Firefox%E7%9A%84%E6%89%A9%E5%B1%95%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F",children:[m("help"),"?"]})," "]}),v=""):(P=()=>g("blockquote",{class:"text-sm",children:m("browserShortcutsNoteForChrome")}),v=m("goSettings"))),g("div",{children:[g("div",{class:"nav",children:g("strong",{class:"text-lg",children:m("interface")})}),g("div",{class:"nav",children:[g(xe,{title:m("interface language")}),g("select",{class:"select",onChange:E=>{f(E.target.value),b(E.target.value),de()||setTimeout(()=>{Pf()},200)},children:cb.map(E=>g("option",{value:E,selected:E===w.interfaceLanguage,children:Wt(E,w.interfaceLanguage,!0)}))})]}),g("div",{class:"nav",children:[g(xe,{title:m("keyboard shortcuts")}),g("div",{class:"nav-right",children:g("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:E=>{E.preventDefault(),s(!i)},children:m("modify")})})]}),g("div",{class:"nav",children:[g(xe,{title:m("enableLineBreak"),description:m("enableLineBreakDescription")}),g("label",{for:"switch",children:g("input",{type:"checkbox",onChange:E=>{let _=E.target.checked;t(H=>{let D=H.generalRule||{};return{...H,generalRule:{...D,lineBreakMaxTextCount:_?280:0}}})},checked:l.rule.lineBreakMaxTextCount>0,id:"switch",name:"switch",role:"switch"})})]}),l.rule.lineBreakMaxTextCount>0&&g("div",{class:"nav",children:[g(xe,{title:m("lineBreakMaxTextCount")}),g("label",{for:"count",children:g("input",{type:"number",id:"count",onChange:E=>{let _=E.target.value;t(H=>{let D=H.generalRule||{};return{...H,generalRule:{...D,lineBreakMaxTextCount:parseInt(_)}}})},name:"count",value:l.rule.lineBreakMaxTextCount,placeholder:"Text Length",required:!0})})]}),(aa().any||de())&&g("div",{class:"nav",children:[g(xe,{title:m("enableUserscriptPagePopup"),description:m("enableUserscriptPagePopupDescription",{touch:m("fingers."+w.generalRule.fingerCountToToggleTranslagePageWhenTouching)})}),g("label",{for:"switch",children:g("input",{type:"checkbox",onChange:E=>{let _=E.target.checked;t(H=>{let D=H.generalRule||{};return{...H,generalRule:{...D,isShowUserscriptPagePopup:_}}})},checked:l.rule.isShowUserscriptPagePopup,id:"switch",name:"switch",role:"switch"})})]}),g("div",{class:"nav",children:[g(xe,{title:m("translation display"),description:m("select diplay style")}),g("select",{class:"select",onChange:E=>{h(E.target.value)},children:cu.map(E=>g("option",{value:E,selected:E===w.translationTheme,children:m(`translationTheme.${E}`)}))})]}),g("div",{class:"pt-2 text-sm",children:g("p",{children:[fu,g("br",{}),g("br",{}),g("span",{class:Ns(w.translationTheme,!1,[],!1,!1).join(" "),children:g("span",{class:Os(w.translationTheme).join(" "),children:du})})]})}),g("div",{class:"nav",children:[g(xe,{title:"",description:m("useAboveStyleForTheseSites",{theme:m(`translationTheme.${w.translationTheme}`)})}),g("div",{class:"nav-right",children:g("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:E=>{E.preventDefault(),o(!a)},children:m("add")})})]}),a?g(Gn,{toggleModal:E=>{E.preventDefault(),o(!a)},onAddInterfaceUrl:(E,_)=>{S(E,w.translationTheme,_)},urlValue:p,index:c}):null,g(Kn,{urls:ub(w),type:"matches",onDeleteUrl:E=>{L(E,w.translationTheme)},onEditUrl:F}),i?g(Ci,{note:P,corfirmText:v,fingerCountToToggleTranslagePageWhenTouching:w.generalRule.fingerCountToToggleTranslagePageWhenTouching,shortcuts:uu.map(E=>({name:E,shortcut:w.shortcuts[E],description:m(`browser.${E}`),disabled:!de()})),onChange:E=>{let{shortcuts:_,fingerCountToToggleTranslagePageWhenTouching:H}=E;de()?t(D=>{let A=_.reduce(($,q)=>($[q.name]=q.shortcut,$),{...D.shortcuts}),M={...D,shortcuts:A};return H!==void 0&&(M.generalRule={...M.generalRule,fingerCountToToggleTranslagePageWhenTouching:H}),M}):j.tabs.create({url:"chrome://extensions/shortcuts"}),s(!1)},onClose:()=>{s(!1)}}):null]})}function Mi(){let[e,t,n,r]=et(),[a,o]=z(null),{t:i}=ne(),[s,c]=z({}),[u,l]=z({});ue(()=>{Ce().then(S=>{o(S)}),j.storage.sync.get(null).then(S=>{c(S),j.storage.local.get(null).then(L=>{l(L)})})},[e]);let d=S=>{t(L=>({...L,debug:S}))},m=S=>{t(()=>({...S}))},f=S=>{try{let L=JSON.parse(S.target.value);if(!Array.isArray(L)){qe("Invalid rules, rules must be an array");return}let F={...e};F.rules=L,m(F),ze(i("saved"))}catch(L){qe(`Invalid JSON ${L.message}`)}},p=S=>{try{let L=JSON.parse(S.target.value);m(L),ze(i("saved"))}catch(L){qe(`Invalid JSON ${L.message}`)}},T=S=>{S.preventDefault()},x=S=>{S.preventDefault(),m(tn()),ze(i("resetSuccess")),setTimeout(()=>{Ut().catch(L=>{O.error("clean local config error",L)})},500)},h=S=>{S.preventDefault();let L={...e};delete L.rules,m(L)},b=`[{
  "matches": "www.google.com",
  "selectors": [".title"]
}, {
  "matches": "*.twitter.com",
  "selectors": [".text"],
  "excludeSelectors": ["footer"]
}]`;return a?g("div",{children:[g("div",{class:"nav",children:g("strong",{class:"text-lg",children:i("developer")})}),g("fieldset",{children:g("label",{for:"switch",children:[g("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{d(!a.debug)},checked:a.debug}),i("toggleDebug")]})}),g("details",{class:"py-2",children:[g("summary",{children:"Edit User Rules"}),g("textarea",{rows:10,onChange:f,placeholder:b,value:e.rules?JSON.stringify(e.rules||[],null,2):""}),g("div",{children:[g("a",{href:"#",class:"mr-3 !py-2",onClick:T,role:"button",children:i("save")}),g("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[i("help"),"?"]}),g("a",{href:"#",onClick:h,class:"text-sm secondary mr-2",children:i("reset")})]})]}),g("details",{class:"py-2",children:[g("summary",{children:"Edit User Config"}),g("textarea",{rows:10,onChange:p,value:JSON.stringify(e,null,2)}),g("div",{children:[g("a",{href:"#",class:"mr-3 !py-2",onClick:T,role:"button",children:i("save")}),g("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[i("help"),"?"]}),g("a",{href:"#",onClick:x,class:"text-sm secondary mr-2",children:i("reset")})]})]}),g("details",{class:"py-2",children:[g("summary",{children:"Click to expand the final config"}),g("pre",{children:g("code",{children:JSON.stringify(a,null,2)})})]}),g("details",{class:"py-2",children:[g("summary",{children:"Click to expand the sync storage object"}),g("pre",{children:g("code",{children:JSON.stringify(s,null,2)})})]}),g("details",{class:"py-2",children:[g("summary",{children:"Click to expand the local storage object"}),g("pre",{children:g("code",{children:JSON.stringify(u,null,2)})})]})]}):g("div",{children:"loading"})}function za(){let e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}_${e.getHours()}-${e.getMinutes()}-${e.getSeconds()}`}function gb(e){let{t}=ne(),{accessToken:n,id:r,listAllFiles:a}=e,[o,i]=z(!1);function s(c,u){c.preventDefault(),i(!0),new Et(n).delete(u).catch(l=>{console.error(l),qe(t("delete"))}).then(()=>a()).finally(()=>i(!1))}return g("a",{href:"#",className:"secondary margin-left text-sm",onClick:c=>s(c,r),"aria-busy":o,children:t("delete")})}function Pi(e){let{onClose:t,accessToken:n,authExpire:r}=e,{t:a}=ne(),[o,i,s,c]=et(),[u,l]=z([]),[d,m]=z(!0),[f,p]=z(!1),[T,x]=z({});ue(()=>{n&&b().then(()=>m(!1))},[n]);let h=v=>{v.preventDefault(),v.target&&v.target.id==="immersive-translate-overlay"&&t()};function b(){return new Et(n).listAll().then(P=>{O.v("listAllFiles",P),l(P)}).catch(P=>r())}function S(v){if(v.preventDefault(),u.length>=10)return qe(a("maxBackupFiles",{count:10}));p(!0);let P="immersive-translate-config-"+za()+".json",E=new Blob([JSON.stringify(o,null,2)],{type:"application/json"});new Et(n).upload({name:P,parents:["appDataFolder"]},E).catch(_=>{console.error(_),qe(a("uploadFail"))}).then(()=>b()).finally(()=>p(!1))}function L(v,P,E){v.preventDefault(),x({[E]:!0}),new Et(n).getConfig(P).then(_=>{i(()=>({..._})),ze(a("importSuccess"))}).catch(_=>{O.error(_),qe(a("importFail"))}).finally(()=>x({}))}function F(v,P){new Et(n).getConfig(v).then(E=>{let _=document.createElement("a");_.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(E,null,2))),_.setAttribute("download",P),_.style.display="none",document.body.appendChild(_),_.click(),document.body.removeChild(_)}).catch(E=>{O.error("download google config file failed",E),qe(a("downloadFail")+": "+E.message)})}function w(v){v.preventDefault(),i({...o,autoSync:!1}),j.storage.local.remove(Ye),_f(n).then(()=>t())}return g("dialog",{id:"immersive-translate-overlay",onClick:h,open:!0,children:g("article",{class:"md:w-[32rem] px-4",children:[g("a",{href:"#",title:a("clickToDownload"),"aria-label":"Close",className:"close","data-target":"modal-example",onClick:v=>{v.preventDefault(),t()}}),g("h4",{children:a("syncTitle")}),g("div",{className:"mb-4",children:u.map((v,P)=>g("div",{class:"flex flex-wrap justify-between",children:[g("div",{class:"mr-2 mb-2",children:[g("div",{children:g("a",{href:"#",onClick:E=>{E.preventDefault(),F(v.id,v.name)},children:v.name.replace("immersive-translate-","")})}),g("div",{class:"text-xs text-gray-500",children:[new Date(v.modifiedTime).toLocaleString(),",\xA0",br(parseInt(v.size))]})]}),g("div",{children:[g("a",{href:"#",role:"button",className:"margin-right secondary","aria-busy":T[P],disabled:T[P],onClick:E=>L(E,v.id,P),children:a("import_hint")}),g(gb,{accessToken:n,id:v.id,listAllFiles:b})]})]}))}),g("div",{className:"flex items-center",children:[g("a",{href:"#",role:"button",className:"mr-4","data-target":"modal-example","aria-busy":f,onClick:S,disabled:d,children:a("create_new_backup")}),g("a",{href:"#",className:"secondary text-sm","data-target":"modal-example",onClick:w,disabled:d,children:a("revokeAuth")})]})]})})}function Ri(){let[e,t,n,r,a]=et(),[o,i]=z(null),[s,c]=z(null),u=A=>{c(A),Ft(A)},{t:l}=ne();ue(()=>{Ce().then(A=>{i(A)}),Ot().then(A=>{u(A)})},[]);let d=A=>{t(()=>({...A}))},m=A=>{A.preventDefault();let M=document.createElement("input");M.setAttribute("type","file"),M.setAttribute("accept","text/plain"),M.style.display="none",document.body.appendChild(M),M.oninput=$=>{let q=$.target,Z=new FileReader;Z.onload=function(){try{let ee=JSON.parse(Z.result);d(ee),ze(l("successImportConfig"))}catch(ee){qe(`Invalid JSON ${ee.message}`)}},Z.readAsText(q.files[0])},M.click(),document.body.removeChild(M)},f=A=>{A.preventDefault(),confirm(l("confirmResetConfig"))&&(a(tn()),ze(l("resetSuccess")),setTimeout(()=>{j.storage.local.remove(Ye),Ut().catch(M=>{O.error("clean local config error",M)})},500))},[p,T]=z(!1),[x,h]=z(!1),[b,S]=z(!1),[L,F]=z("");if(hr()&&globalThis.localStorage.getItem(ts)==="true"){globalThis.localStorage.setItem(ts,"false");let A=globalThis.localStorage.getItem(ns);O.debug("stateStr",A);let M={};if(A){globalThis.localStorage.removeItem(ns);try{M=JSON.parse(A)}catch($){O.error("parse state error",$)}}j.storage.local.get(Ye).then($=>{if(O.debug("import_export","Google OAuth:"+$[Ye]),$[Ye]){let q=$[Ye];M.mode==="auto"?H(q):E(q)}else j.storage.local.remove(Ye)})}function w(){h(!0),ja({source:globalThis.location.href,mode:"auto"}).then(A=>{O.debug("import_export","Google OAuth:"+A),A!==null&&H(A)}).catch(A=>_(A))}function v(){S(!0),T(!1),ja({source:globalThis.location.href,mode:"manual"}).then(A=>{O.debug("import_export","Google OAuth:"+A),A!==null&&E(A)}).catch(A=>{_(A)})}function P(){F(""),hr()&&localStorage.removeItem("token"),w()}function E(A){F(A),S(!1),T(!0)}function _(A){h(!1),S(!1),T(!1),t({...e,autoSync:!1}),O.error("import_export","Google OAuth error:"+A),qe(l("authFail"))}function H(A){F(A),Li(A,e,d,M=>u({...s,lastSyncedAt:M}),M=>t({...e,updatedAt:M}),()=>ze(l("successSyncConfig")),M=>qe(l("syncFail")+M)).finally(()=>{h(!1)})}function D(A){t({...e,autoSync:A.checked}),A.checked&&w()}return o?g("div",{children:[g("div",{class:"nav",children:g("strong",{class:"text-lg",children:l("import_export_title")})}),g("div",{class:"pb-2",children:[g("a",{class:"mr-2 secondary mb-2 !text-sm",onClick:m,href:"#",role:"button",children:[g("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",children:[g("path",{fill:"none",d:"M0 0h24v24H0z"}),g("path",{d:"M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"})]}),l("import")]}),g("a",{href:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),download:"immersive-translate-config-"+za()+".txt",class:"secondary mr-2  mb-2 !text-sm",role:"button",children:[g("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18",children:[g("path",{fill:"none",d:"M0 0h24v24H0z"}),g("path",{d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"})]}),l("export")]}),g("a",{href:"#",onClick:f,class:"secondary text-sm",children:l("reset")})]}),g("details",{class:"mt-4 mb-6",children:[g("summary",{children:l("clickToExpandConfig")}),g("pre",{children:g("code",{children:JSON.stringify(e,null,2)})})]}),g("hgroup",{class:"my-2",children:[g("h5",{children:l("syncToCloud")}),g("h6",{class:"!text-sm",children:l("syncToCloudDescription")})]}),!de()&&g("div",{class:"my-3",children:g("label",{htmlFor:"autoSync",children:[g("input",{type:"checkbox",id:"autoSync",role:"switch",onClick:A=>{A.preventDefault(),D(A.target)},checked:e.autoSync}),l("autoSync")]})}),g("div",{children:[g("a",{className:"mr-4 secondary  mb-2 !text-sm ",onClick:A=>{A.preventDefault(),w()},"aria-busy":x,href:"#",role:"button",children:[x?g(Ze,{}):g("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",children:g("path",{fill:"currentColor",d:"M15.375 19.25q-.525.25-.95-.038q-.425-.287-.425-.937q0-.25.163-.487q.162-.238.412-.363q1.575-.75 2.5-2.225T18 11.95q0-1.125-.425-2.188Q17.15 8.7 16.25 7.8L16 7.55V9q0 .425-.287.712Q15.425 10 15 10t-.712-.288Q14 9.425 14 9V5q0-.425.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6h-1.75l.4.35q1.225 1.225 1.788 2.662Q20 10.45 20 11.95q0 2.4-1.25 4.362q-1.25 1.963-3.375 2.938ZM5 20q-.425 0-.713-.288Q4 19.425 4 19t.287-.712Q4.575 18 5 18h1.75l-.4-.35q-1.225-1.225-1.788-2.662Q4 13.55 4 12.05q0-2.4 1.25-4.363Q6.5 5.725 8.625 4.75q.525-.25.95.037q.425.288.425.938q0 .25-.162.487q-.163.238-.413.363q-1.575.75-2.5 2.225T6 12.05q0 1.125.425 2.187Q6.85 15.3 7.75 16.2l.25.25V15q0-.425.288-.713Q8.575 14 9 14t.713.287Q10 14.575 10 15v4q0 .425-.287.712Q9.425 20 9 20Z"})}),l("syncToGoogleDrive")]}),g("a",{href:"#","aria-busy":b,onClick:A=>{A.preventDefault(),v()},class:"secondary text-sm",children:l("backupToCloud")})]}),g("div",{class:"text-xs text-gray-500",children:s?.lastSyncedAt&&l("lastSyncedAt",{date:new Date(s.lastSyncedAt).toLocaleString()})}),s?.lastSyncErrorMessage&&g("p",{class:"mt-2 text-xs text-red-500"}),p?g(Pi,{onClose:()=>T(!1),authExpire:P,accessToken:L}):null]}):null}function qa(){return j.runtime.getManifest().version}var fb="buildinConfig",db={},Rf=mu(fb,db);function Di(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}function Ii(e,t=2e3){return n=>{let r,a=0;return o=>{++a==e&&(n(o),a=0),clearTimeout(r),r=setTimeout(()=>a=0,t)}}}async function Df(){let e=["bingGlobalConfig","baiduGlobalConfig"];for(let t of e)await j.storage.local.remove(t);de()||await Eu()}function If(){return de()?Promise.resolve("0 B"):Ss()}var mb=({date:e})=>{let{t}=ne();return g("p",{class:"text-sm",children:[t("The local rules are up to date")," ",new Date(e).toLocaleString()]})},pb=({date:e})=>{let{t}=ne();return g("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},hb=()=>{let{t:e}=ne();return g("p",{class:"text-sm","aria-busy":!0,children:[e("Checking for updates"),"..."]})},bb=()=>{let{t:e}=ne();return g("p",{class:"text-sm",children:[e("Rules are being synchronized"),"..."]})},yb=({minVersion:e})=>{let{t}=ne();return g("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},xb=({latestVersion:e})=>{let{t}=ne();return g("p",{class:"text-sm",children:[t("foundNewVersion"),":"," ",g("a",{href:"https://github.com/immersive-translate/immersive-translate/releases",children:e})]})},Tb=()=>{let{t:e}=ne();return g("p",{class:"text-sm",children:e("theLocalExtensionIsUpToUpdate")})},vb=({message:e,handleSyncing:t,date:n})=>{let{t:r}=ne();return g("p",{class:"text-sm",children:[r("failToSyncRules")," ",g("a",{onClick:t,children:r("retry")}),g("br",{}),r("failedReason"),"\uFF1A",e,g("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function Ni(){let[e,t]=z(null),{t:n}=ne(),[r,a]=z(n("calculating")+"..."),[o,i]=z(null),[s,c]=Rf(),[u,l]=z(null),[d,m]=z(""),[f,p]=z(!1),[T,x]=z(!1),[h,b]=z(null),[S,L]=z(null),[F,w,v,P]=et(),[E,_]=z(!1),H=qa(),D=async()=>{m("");let q=o;if(o===null)try{let Z=await _n({url:as});Z?(i(Z),q=Z,p(!0)):(m(n("unknownError")),l(null))}catch(Z){l(null),m(Z.message);return}q!==null?(c(q),l(!1),t(q.buildinConfigUpdatedAt)):(m(n("canNotFetchRemoteRule")),l(null))};ue(()=>{Ce().then(q=>{let Z=q.buildinConfigUpdatedAt;b(q);let ee=new Date(Z);t(Z),_n({url:as}).then(te=>{let k=te.minVersion,W=H;i(te);let C=te.latestVersion;if(C&&(Di(W,C)?L(!0):L(!1)),Di(W,k)){let N=te.buildinConfigUpdatedAt;new Date(N)>ee?(l(!0),D()):l(!1)}else x(!0),l(null)}).catch(te=>{l(null),m(te.message)})}),If().then(q=>{a(q)})},[]),ue(()=>{Ce().then(q=>{b(q)})},[F,e]);let A=q=>{w(Z=>{let ee=!Z.alpha;return ee?ze(n("enableAlphaSuccess")):ze(n("disableAlphaSuccess")),{...Z,alpha:ee}})},M=q=>{q.preventDefault(),q.stopPropagation(),_(!0),bu().catch(Z=>{O.error("clear build config failed:",Z)}),Ut().catch(Z=>{O.error("clear local config failed:",Z)}),Df().then(()=>{_(!1),ze("\u6E05\u7406\u6210\u529F"),a("0 B")}).catch(Z=>{_(!1),qe(Z.message)})},$=q=>{w(Z=>({...Z,cache:q}))};return h?g("div",{class:"text-sm",children:[g("div",{class:"nav",children:g("strong",{onClick:Ii(7)(A),class:"text-lg immersive-translate-no-select",children:n("about")})}),g("p",{onClick:Ii(7)(A),class:"mb-2 immersive-translate-no-select",children:["V",H]}),S===!1&&g(xb,{latestVersion:o?.latestVersion}),S===!0&&g(Tb,{}),g("fieldset",{children:g("label",{for:"switch",children:[g("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{$(!h.cache)},checked:h.cache}),n("allowCacheTranslations")]})}),!de()&&r&&g("p",{class:"text-sm",children:[n("cacheSize"),"\xA0",r," \xA0 ",E?g("span",{children:[n("cleaning"),"..."]}):g("a",{class:"text-sm",href:"#",onClick:M,children:n("cleanCache")})]}),d?g(vb,{handleSyncing:D,message:d,date:e||""}):T?g(yb,{minVersion:o.minVersion}):u===null?g(hb,{}):u===!0?g(bb,{}):f?g(pb,{date:e}):g(mb,{date:e}),g("ul",{class:"text-sm ml-4",children:[g("li",{children:g("a",{class:"secondary",href:"https://github.com/immersive-translate/immersive-translate/issues",children:n("feedback")})}),g("li",{children:g("a",{class:"secondary",href:"https://t.me/+rq848Z09nehlOTgx",children:n("joinTelegramGroup")})}),g("li",{children:g("a",{class:"secondary",href:"https://immersive-translate.owenyoung.com/CHANGELOG.html",children:n("changelog")})}),g("li",{children:g("a",{class:"secondary",href:"https://immersive-translate.owenyoung.com/",children:n("projectHomepage")})}),g("li",{children:g("a",{class:"secondary",href:"https://github.com/immersive-translate/immersive-translate/",children:n("Github")})}),g("li",{children:g("a",{class:"secondary",href:"https://immersive-translate.owenyoung.com/donate.html",children:n("sponsorLabel")})})]}),g("blockquote",{class:"text-sm",dangerouslySetInnerHTML:{__html:n("aboutIntro",{1:"https://immersive-translate.owenyoung.com/thanks",2:"https://immersive-translate.owenyoung.com/donate",3:"https://twitter.com/OwenYoungZh",4:"https://t.me/owenyoungzh"})}})]}):null}function Oi(){let e=hs(),[t,n,r,a]=et(),[o,i]=z(null),{t:s}=ne();ue(()=>{Ce().then(d=>{Mt({config:d,url:globalThis.location.href}).then(m=>{i(m)})})},[t]);let c=d=>{n(m=>({...m,translationTheme:d}))},u=d=>{n(m=>({...m,interfaceLanguage:d}))};if(!o)return g("div",{children:"loading"});let l=o.config;return g("div",{children:[g("div",{class:"nav",children:g("strong",{class:"text-lg",children:s("advanced")})}),g("div",{class:"nav",children:[g(xe,{title:s("translate all areas of the page"),description:s("translationAreaDescription")}),g("label",{for:"switch",children:g("input",{type:"checkbox",id:"switch",name:"switch",role:"switch",onChange:d=>{let m=d.target.checked;n(f=>({...f,translationArea:m?"body":"main"}))},checked:l.translationArea==="body"})})]}),g("div",{class:"nav",children:[g(xe,{title:s("translate to the bottom of the page"),description:s("translateToThePageEndImmediatelyDescription")}),g("label",{for:"switch",children:g("input",{type:"checkbox",onChange:d=>{let m=d.target.checked;n(f=>({...f,translationStartMode:m?"immediate":"dynamic"}))},checked:l.translationStartMode==="immediate",id:"switch",name:"switch",role:"switch"})})]}),!de()&&g("div",{class:"nav",children:[g(xe,{title:s("isShowContextMenu")}),g("label",{for:"switch",children:g("input",{type:"checkbox",onChange:d=>{let m=d.target.checked;Mf({...o.config,isShowContextMenu:m}),n(f=>({...f,isShowContextMenu:m}))},checked:o.config.isShowContextMenu===!0,id:"switch",name:"switch",role:"switch"})})]}),g("div",{class:"nav",children:[g(xe,{title:s("translationLineBreakSettingTitle"),description:s("translationLineBreakSettingDescription",{count:e.generalRule.blockMinTextCount})}),g("select",{class:"select",onChange:d=>{n(m=>{let f=m.generalRule||{};return parseInt(d.target.value)===0?f={...f,blockMinTextCount:0,blockMinWordCount:0}:f={...f,blockMinTextCount:e.generalRule.blockMinTextCount,blockMinWordCount:e.generalRule.blockMinWordCount},{...m,generalRule:f}})},children:[g("option",{value:32,selected:l.generalRule.blockMinTextCount>0,children:s("smartLineBreak")}),g("option",{value:0,selected:l.generalRule.blockMinTextCount===0,children:s("alwaysLineBreak")})]})]}),g("div",{class:"nav",children:[g(xe,{title:s("tempTranslateDomainTitle"),description:s("tempTranslateDomainDescription")}),g("select",{class:"select",onChange:d=>{n(m=>({...m,tempTranslateDomainMinutes:parseInt(d.target.value)}))},children:[g("option",{value:0,selected:l.tempTranslateDomainMinutes===0,children:s("disabled")}),g("option",{value:5,selected:l.tempTranslateDomainMinutes===5,children:s("xMinutes",{count:5})}),g("option",{value:10,selected:l.tempTranslateDomainMinutes===10,children:s("xMinutes",{count:10})}),g("option",{value:30,selected:l.tempTranslateDomainMinutes===30,children:s("xMinutes",{count:30})})]})]}),g("div",{class:"nav",children:[g(xe,{title:s("the number of characters to be translated first")}),g("label",{for:"count",children:g("input",{type:"number",id:"count",onChange:d=>{let m=d.target.value;n(f=>({...f,immediateTranslationTextCount:parseInt(m)}))},name:"count",value:l.immediateTranslationTextCount,placeholder:"Text Length",required:!0})})]})]})}var Nf=ar({presets:[Yr(),ea()]});function Of(){let e=document.getElementById("mount");e&&(async()=>{wo(Nf);let t=await Ce();t.debug&&O.setLevel("debug"),Qa(g(Sf,{lang:t.interfaceLanguage,fallbackLang:"zh-CN",translations:Ha,children:g(wb,{donateUrl:t.donateUrl})}),e)})()}function wb(e){let t=Yo(),{t:n}=ne(),r=qa(),a=[{name:n("general"),props:{href:"#general",className:"secondary"}},{name:n("interface"),props:{href:"#interface",className:"secondary"}},{name:n("import_export"),props:{href:"#import_export",className:"secondary"}},{name:n("about"),props:{href:"#about",className:"secondary"}}];return a.forEach(o=>{t===o.props.href&&(o.props.className="primary",o.props["aria-current"]="page")}),g(Ze,{children:g("main",{class:"container-fluid",children:[g("aside",{children:g("nav",{class:"flex flex-col h-full justify-between",children:[g("div",{children:[g("hgroup",{children:[g("h4",{class:"cursor-pointer p-0 m-0",onClick:()=>{globalThis.location.hash="#general"},children:n("browser.brandName")}),g("h6",{class:"!text-sm",children:r})]}),g("ul",{children:a.map((o,i)=>g("li",{class:"li",children:g("a",{...o.props,children:o.name})},`nav-${i}`))})]}),g("div",{class:"m-0 p-0 flex flex-col",children:[g("a",{class:"py-3 text-xs no-focus secondary",href:e.donateUrl,children:[n("donateCafe"),"\u2615\uFE0F"]}),g("a",{class:"py-3 text-xs no-focus secondary",href:"#about",children:n("feedbackAndJoin")}),g("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/",children:n("document")}),g("a",{class:"py-3 text-xs no-focus secondary",href:"#developer",children:n("developer")})]})]})}),g("div",{role:"main",children:g(Jo,{value:t,defaultCase:g($a,{}),cases:{"#general":g($a,{}),"#interface":g(_i,{}),"#import_export":g(Ri,{}),"#about":g(Ni,{}),"#advanced":g(Oi,{}),"#developer":g(Mi,{})}})})]})})}Of();
