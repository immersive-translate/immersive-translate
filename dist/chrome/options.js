var Tf=Object.defineProperty;var vf=(e,t)=>{for(var n in t)Tf(e,n,{get:t[n],enumerable:!0})};var T={BUILD_TIME:"2023-01-29T20:30:34.617Z",VERSION:"0.2.33",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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
`,MOCK:"0",DEBUG:"0"};var Sf=Object.create,_i=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,Mi=Object.getOwnPropertyNames,Cf=Object.getPrototypeOf,Lf=Object.prototype.hasOwnProperty,Af=(e,t)=>function(){return t||(0,e[Mi(e)[0]])((t={exports:{}}).exports,t),t.exports},kf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Mi(t))!Lf.call(e,o)&&o!==n&&_i(e,o,{get:()=>t[o],enumerable:!(r=Ef(t,o))||r.enumerable});return e},_f=(e,t,n)=>(n=e!=null?Sf(Cf(e)):{},kf(t||!e||!e.__esModule?_i(n,"default",{value:e,enumerable:!0}):n,e)),Mf=Af({"esm-build-3120606719048d5175703f3b3f8812d3453a0d07-9fbf1061/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var o={exports:{}};r(o),n.browser=o.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",o=a=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(E,N=void 0){super(N),this.createItem=E}get(E){return this.has(E)||this.set(E,this.createItem(E)),super.get(E)}}let c=v=>v&&typeof v=="object"&&typeof v.then=="function",u=(v,E)=>(...N)=>{a.runtime.lastError?v.reject(new Error(a.runtime.lastError.message)):E.singleCallbackArg||N.length<=1&&E.singleCallbackArg!==!1?v.resolve(N[0]):v.resolve(N)},l=v=>v==1?"argument":"arguments",g=(v,E)=>function(w,...P){if(P.length<E.minArgs)throw new Error(`Expected at least ${E.minArgs} ${l(E.minArgs)} for ${v}(), got ${P.length}`);if(P.length>E.maxArgs)throw new Error(`Expected at most ${E.maxArgs} ${l(E.maxArgs)} for ${v}(), got ${P.length}`);return new Promise((U,R)=>{if(E.fallbackToNoCallback)try{w[v](...P,u({resolve:U,reject:R},E))}catch(_){console.warn(`${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,_),w[v](...P),E.fallbackToNoCallback=!1,E.noCallback=!0,U()}else E.noCallback?(w[v](...P),U()):w[v](...P,u({resolve:U,reject:R},E))})},d=(v,E,N)=>new Proxy(E,{apply(w,P,U){return N.call(P,v,...U)}}),m=Function.call.bind(Object.prototype.hasOwnProperty),p=(v,E={},N={})=>{let w=Object.create(null),P={has(R,_){return _ in v||_ in w},get(R,_,H){if(_ in w)return w[_];if(!(_ in v))return;let B=v[_];if(typeof B=="function")if(typeof E[_]=="function")B=d(v,v[_],E[_]);else if(m(N,_)){let z=g(_,N[_]);B=d(v,v[_],z)}else B=B.bind(v);else if(typeof B=="object"&&B!==null&&(m(E,_)||m(N,_)))B=p(B,E[_],N[_]);else if(m(N,"*"))B=p(B,E[_],N["*"]);else return Object.defineProperty(w,_,{configurable:!0,enumerable:!0,get(){return v[_]},set(z){v[_]=z}}),B;return w[_]=B,B},set(R,_,H,B){return _ in w?w[_]=H:v[_]=H,!0},defineProperty(R,_,H){return Reflect.defineProperty(w,_,H)},deleteProperty(R,_){return Reflect.deleteProperty(w,_)}},U=Object.create(v);return new Proxy(U,P)},b=v=>({addListener(E,N,...w){E.addListener(v.get(N),...w)},hasListener(E,N){return E.hasListener(v.get(N))},removeListener(E,N){E.removeListener(v.get(N))}}),x=new s(v=>typeof v!="function"?v:function(N){let w=p(N,{},{getContent:{minArgs:0,maxArgs:0}});v(w)}),h=new s(v=>typeof v!="function"?v:function(N,w,P){let U=!1,R,_=new Promise(Z=>{R=function(ee){U=!0,Z(ee)}}),H;try{H=v(N,w,R)}catch(Z){H=Promise.reject(Z)}let B=H!==!0&&c(H);if(H!==!0&&!B&&!U)return!1;let z=Z=>{Z.then(ee=>{P(ee)},ee=>{let L;ee&&(ee instanceof Error||typeof ee.message=="string")?L=ee.message:L="An unexpected error occurred",P({__mozWebExtensionPolyfillReject__:!0,message:L})}).catch(ee=>{console.error("Failed to send onMessage rejected reply",ee)})};return z(B?H:_),!0}),y=({reject:v,resolve:E},N)=>{a.runtime.lastError?a.runtime.lastError.message===r?E():v(new Error(a.runtime.lastError.message)):N&&N.__mozWebExtensionPolyfillReject__?v(new Error(N.message)):E(N)},S=(v,E,N,...w)=>{if(w.length<E.minArgs)throw new Error(`Expected at least ${E.minArgs} ${l(E.minArgs)} for ${v}(), got ${w.length}`);if(w.length>E.maxArgs)throw new Error(`Expected at most ${E.maxArgs} ${l(E.maxArgs)} for ${v}(), got ${w.length}`);return new Promise((P,U)=>{let R=y.bind(null,{resolve:P,reject:U});w.push(R),N.sendMessage(...w)})},A={devtools:{network:{onRequestFinished:b(x)}},runtime:{onMessage:b(h),onMessageExternal:b(h),sendMessage:S.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:S.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},O={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":O},services:{"*":O},websites:{"*":O}},p(a,A,i)};n.exports=o(chrome)}else n.exports=globalThis.browser})}}),Pf=_f(Mf()),{default:ki,...Rf}=Pf,Ba=ki!==void 0?ki:Rf;globalThis.immersiveTranslateBrowserAPI=Ba;function fn(){let e,t="pending",n=new Promise((r,o)=>{e={async resolve(a){await a,t="fulfilled",r(a)},reject(a){t="rejected",o(a)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var $a=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function Rr(e,t){let n=fn(),r=setTimeout(()=>n.reject(new $a),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function dn(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((o,a)=>{let i=()=>{clearTimeout(c),a(new DOMException("Delay was aborted.","AbortError"))},c=setTimeout(()=>{n?.removeEventListener("abort",i),o()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(c)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var Pi=class{#e=0;#t=[];#n=[];#r=fn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=fn()}}[Symbol.asyncIterator](){return this.iterate()}};var Je={};vf(Je,{bgBlack:()=>od,bgBlue:()=>cd,bgBrightBlack:()=>dd,bgBrightBlue:()=>bd,bgBrightCyan:()=>xd,bgBrightGreen:()=>pd,bgBrightMagenta:()=>yd,bgBrightRed:()=>md,bgBrightWhite:()=>Td,bgBrightYellow:()=>hd,bgCyan:()=>gd,bgGreen:()=>id,bgMagenta:()=>ud,bgRed:()=>sd,bgRgb24:()=>Ed,bgRgb8:()=>wd,bgWhite:()=>fd,bgYellow:()=>ld,black:()=>zf,blue:()=>Kf,bold:()=>Of,brightBlack:()=>Di,brightBlue:()=>td,brightCyan:()=>rd,brightGreen:()=>Zf,brightMagenta:()=>nd,brightRed:()=>Qf,brightWhite:()=>ad,brightYellow:()=>ed,cyan:()=>Jf,dim:()=>Ff,getColorEnabled:()=>Df,gray:()=>Xf,green:()=>qf,hidden:()=>$f,inverse:()=>Bf,italic:()=>Hf,magenta:()=>Gf,red:()=>Wf,reset:()=>Nf,rgb24:()=>Sd,rgb8:()=>vd,setColorEnabled:()=>If,strikethrough:()=>jf,stripColor:()=>Ld,underline:()=>Uf,white:()=>Yf,yellow:()=>Vf});var{Deno:Ri}=globalThis,Ii=typeof Ri?.noColor=="boolean"?Ri.noColor:!0,ja=!Ii;function If(e){Ii||(ja=e)}function Df(){return ja}function q(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function V(e,t){return ja?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Nf(e){return V(e,q([0],0))}function Of(e){return V(e,q([1],22))}function Ff(e){return V(e,q([2],22))}function Hf(e){return V(e,q([3],23))}function Uf(e){return V(e,q([4],24))}function Bf(e){return V(e,q([7],27))}function $f(e){return V(e,q([8],28))}function jf(e){return V(e,q([9],29))}function zf(e){return V(e,q([30],39))}function Wf(e){return V(e,q([31],39))}function qf(e){return V(e,q([32],39))}function Vf(e){return V(e,q([33],39))}function Kf(e){return V(e,q([34],39))}function Gf(e){return V(e,q([35],39))}function Jf(e){return V(e,q([36],39))}function Yf(e){return V(e,q([37],39))}function Xf(e){return Di(e)}function Di(e){return V(e,q([90],39))}function Qf(e){return V(e,q([91],39))}function Zf(e){return V(e,q([92],39))}function ed(e){return V(e,q([93],39))}function td(e){return V(e,q([94],39))}function nd(e){return V(e,q([95],39))}function rd(e){return V(e,q([96],39))}function ad(e){return V(e,q([97],39))}function od(e){return V(e,q([40],49))}function sd(e){return V(e,q([41],49))}function id(e){return V(e,q([42],49))}function ld(e){return V(e,q([43],49))}function cd(e){return V(e,q([44],49))}function ud(e){return V(e,q([45],49))}function gd(e){return V(e,q([46],49))}function fd(e){return V(e,q([47],49))}function dd(e){return V(e,q([100],49))}function md(e){return V(e,q([101],49))}function pd(e){return V(e,q([102],49))}function hd(e){return V(e,q([103],49))}function bd(e){return V(e,q([104],49))}function yd(e){return V(e,q([105],49))}function xd(e){return V(e,q([106],49))}function Td(e){return V(e,q([107],49))}function Mt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function vd(e,t){return V(e,q([38,5,Mt(t)],39))}function wd(e,t){return V(e,q([48,5,Mt(t)],49))}function Sd(e,t){return typeof t=="number"?V(e,q([38,2,t>>16&255,t>>8&255,t&255],39)):V(e,q([38,2,Mt(t.r),Mt(t.g),Mt(t.b)],39))}function Ed(e,t){return typeof t=="number"?V(e,q([48,2,t>>16&255,t>>8&255,t&255],49)):V(e,q([48,2,Mt(t.r),Mt(t.g),Mt(t.b)],49))}var Cd=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Ld(e){return e.replace(Cd,"")}function Ir(e,t){let n=null,r=null,o=(...a)=>{o.clear(),r=()=>{o.clear(),e.call(o,...a)},n=setTimeout(r,t)};return o.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},o.flush=()=>{r?.()},Object.defineProperty(o,"pending",{get:()=>typeof n=="number"}),o}var Ur,J,Ui,Ad,Kn,Ni,Bi,Or={},$i=[],kd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Pt(e,t){for(var n in t)e[n]=t[n];return e}function ji(e){var t=e.parentNode;t&&t.removeChild(e)}function zi(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?Ur.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return Dr(e,i,r,o,null)}function Dr(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Ui};return o==null&&J.vnode!=null&&J.vnode(a),a}function et(e){return e.children}function Nr(e,t){this.props=e,this.context=t}function mn(e,t){if(t==null)return e.__?mn(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?mn(e):null}function Wi(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Wi(e)}}function za(e){(!e.__d&&(e.__d=!0)&&Kn.push(e)&&!Fr.__r++||Ni!==J.debounceRendering)&&((Ni=J.debounceRendering)||setTimeout)(Fr)}function Fr(){for(var e;Fr.__r=Kn.length;)e=Kn.sort(function(t,n){return t.__v.__b-n.__v.__b}),Kn=[],e.some(function(t){var n,r,o,a,i,s;t.__d&&(i=(a=(n=t).__v).__e,(s=n.__P)&&(r=[],(o=Pt({},a)).__v=a.__v+1,Wa(s,a,o,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[i]:null,r,i??mn(a),a.__h),Gi(r,a),a.__e!=i&&Wi(a)))})}function qi(e,t,n,r,o,a,i,s,c,u){var l,g,d,m,p,b,x,h=r&&r.__k||$i,y=h.length;for(n.__k=[],l=0;l<t.length;l++)if((m=n.__k[l]=(m=t[l])==null||typeof m=="boolean"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?Dr(null,m,null,null,m):Array.isArray(m)?Dr(et,{children:m},null,null,null):m.__b>0?Dr(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null){if(m.__=n,m.__b=n.__b+1,(d=h[l])===null||d&&m.key==d.key&&m.type===d.type)h[l]=void 0;else for(g=0;g<y;g++){if((d=h[g])&&m.key==d.key&&m.type===d.type){h[g]=void 0;break}d=null}Wa(e,m,d=d||Or,o,a,i,s,c,u),p=m.__e,(g=m.ref)&&d.ref!=g&&(x||(x=[]),d.ref&&x.push(d.ref,null,m),x.push(g,m.__c||p,m)),p!=null?(b==null&&(b=p),typeof m.type=="function"&&m.__k===d.__k?m.__d=c=Vi(m,c,e):c=Ki(e,m,d,h,p,c),typeof n.type=="function"&&(n.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=mn(d))}for(n.__e=b,l=y;l--;)h[l]!=null&&(typeof n.type=="function"&&h[l].__e!=null&&h[l].__e==n.__d&&(n.__d=mn(r,l+1)),Yi(h[l],h[l]));if(x)for(l=0;l<x.length;l++)Ji(x[l],x[++l],x[++l])}function Vi(e,t,n){for(var r,o=e.__k,a=0;o&&a<o.length;a++)(r=o[a])&&(r.__=e,t=typeof r.type=="function"?Vi(r,t,n):Ki(n,r,r,o,r.__e,t));return t}function Ki(e,t,n,r,o,a){var i,s,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),i=null;else{for(s=a,c=0;(s=s.nextSibling)&&c<r.length;c+=2)if(s==o)break e;e.insertBefore(o,a),i=a}return i!==void 0?i:o.nextSibling}function _d(e,t,n,r,o){var a;for(a in n)a==="children"||a==="key"||a in t||Hr(e,a,null,n[a],r);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Hr(e,a,t[a],n[a],r)}function Oi(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||kd.test(t)?n:n+"px"}function Hr(e,t,n,r,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Oi(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Oi(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r||e.addEventListener(t,a?Hi:Fi,a):e.removeEventListener(t,a?Hi:Fi,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Fi(e){this.l[e.type+!1](J.event?J.event(e):e)}function Hi(e){this.l[e.type+!0](J.event?J.event(e):e)}function Wa(e,t,n,r,o,a,i,s,c){var u,l,g,d,m,p,b,x,h,y,S,A,O,v=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(u=J.__b)&&u(t);try{e:if(typeof v=="function"){if(x=t.props,h=(u=v.contextType)&&r[u.__c],y=u?h?h.props.value:u.__:r,n.__c?b=(l=t.__c=n.__c).__=l.__E:("prototype"in v&&v.prototype.render?t.__c=l=new v(x,y):(t.__c=l=new Nr(x,y),l.constructor=v,l.render=Pd),h&&h.sub(l),l.props=x,l.state||(l.state={}),l.context=y,l.__n=r,g=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),v.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Pt({},l.__s)),Pt(l.__s,v.getDerivedStateFromProps(x,l.__s))),d=l.props,m=l.state,g)v.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v.getDerivedStateFromProps==null&&x!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(x,y),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(x,l.__s,y)===!1||t.__v===n.__v){l.props=x,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(E){E&&(E.__=t)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(x,l.__s,y),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,m,p)})}if(l.context=y,l.props=x,l.__v=t,l.__P=e,S=J.__r,A=0,"prototype"in v&&v.prototype.render)l.state=l.__s,l.__d=!1,S&&S(t),u=l.render(l.props,l.state,l.context);else do l.__d=!1,S&&S(t),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++A<25);l.state=l.__s,l.getChildContext!=null&&(r=Pt(Pt({},r),l.getChildContext())),g||l.getSnapshotBeforeUpdate==null||(p=l.getSnapshotBeforeUpdate(d,m)),O=u!=null&&u.type===et&&u.key==null?u.props.children:u,qi(e,Array.isArray(O)?O:[O],t,n,r,o,a,i,s,c),l.base=t.__e,t.__h=null,l.__h.length&&i.push(l),b&&(l.__E=l.__=null),l.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Md(n.__e,t,n,r,o,a,i,c);(u=J.diffed)&&u(t)}catch(E){t.__v=null,(c||a!=null)&&(t.__e=s,t.__h=!!c,a[a.indexOf(s)]=null),J.__e(E,t,n)}}function Gi(e,t){J.__c&&J.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){J.__e(r,n.__v)}})}function Md(e,t,n,r,o,a,i,s){var c,u,l,g=n.props,d=t.props,m=t.type,p=0;if(m==="svg"&&(o=!0),a!=null){for(;p<a.length;p++)if((c=a[p])&&"setAttribute"in c==!!m&&(m?c.localName===m:c.nodeType===3)){e=c,a[p]=null;break}}if(e==null){if(m===null)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,d.is&&d),a=null,s=!1}if(m===null)g===d||s&&e.data===d||(e.data=d);else{if(a=a&&Ur.call(e.childNodes),u=(g=n.props||Or).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!s){if(a!=null)for(g={},p=0;p<e.attributes.length;p++)g[e.attributes[p].name]=e.attributes[p].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(_d(e,d,g,o,s),l)t.__k=[];else if(p=t.props.children,qi(e,Array.isArray(p)?p:[p],t,n,r,o&&m!=="foreignObject",a,i,a?a[0]:n.__k&&mn(n,0),s),a!=null)for(p=a.length;p--;)a[p]!=null&&ji(a[p]);s||("value"in d&&(p=d.value)!==void 0&&(p!==e.value||m==="progress"&&!p||m==="option"&&p!==g.value)&&Hr(e,"value",p,g.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==e.checked&&Hr(e,"checked",p,g.checked,!1))}return e}function Ji(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){J.__e(r,n)}}function Yi(e,t,n){var r,o;if(J.unmount&&J.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ji(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){J.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Yi(r[o],t,typeof e.type!="function");n||e.__e==null||ji(e.__e),e.__=e.__e=e.__d=void 0}function Pd(e,t,n){return this.constructor(e,n)}function qa(e,t,n){var r,o,a;J.__&&J.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Wa(t,e=(!r&&n||t).__k=zi(et,null,[e]),o||Or,Or,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Ur.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r),Gi(a,e)}function Va(e,t){var n={__c:t="__cC"+Bi++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.some(za)},this.sub=function(i){o.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Ur=$i.slice,J={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(s){e=s}throw e}},Ui=0,Ad=function(e){return e!=null&&e.constructor===void 0},Nr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Pt({},this.state),typeof e=="function"&&(e=e(Pt({},n),this.props)),e&&Pt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),za(this))},Nr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),za(this))},Nr.prototype.render=et,Kn=[],Fr.__r=0,Bi=0;var Jn,Ee,Ka,Xi,Gn=0,al=[],Br=[],Qi=J.__b,Zi=J.__r,el=J.diffed,tl=J.__c,nl=J.unmount;function jr(e,t){J.__h&&J.__h(Ee,e,Gn||t),Gn=0;var n=Ee.__H||(Ee.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Br}),n.__[e]}function Y(e){return Gn=1,Rd(il,e)}function Rd(e,t,n){var r=jr(Jn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):il(void 0,t),function(a){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,a);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=Ee,!Ee.u)){Ee.u=!0;var o=Ee.shouldComponentUpdate;Ee.shouldComponentUpdate=function(a,i,s){if(!r.__c.__H)return!0;var c=r.__c.__H.__.filter(function(l){return l.__c});if(c.every(function(l){return!l.__N}))return!o||o.call(this,a,i,s);var u=!1;return c.forEach(function(l){if(l.__N){var g=l.__[0];l.__=l.__N,l.__N=void 0,g!==l.__[0]&&(u=!0)}}),!!u&&(!o||o.call(this,a,i,s))}}return r.__N||r.__}function ge(e,t){var n=jr(Jn++,3);!J.__s&&sl(n.__H,t)&&(n.__=e,n.i=t,Ee.__H.__h.push(n))}function pn(e){return Gn=5,ol(function(){return{current:e}},[])}function ol(e,t){var n=jr(Jn++,7);return sl(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Yn(e,t){return Gn=8,ol(function(){return e},t)}function Ja(e){var t=Ee.context[e.__c],n=jr(Jn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Ee)),t.props.value):e.__}function Id(){for(var e;e=al.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($r),e.__H.__h.forEach(Ga),e.__H.__h=[]}catch(t){e.__H.__h=[],J.__e(t,e.__v)}}J.__b=function(e){typeof e.type!="function"||e.o||e.type===et?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Ee=null,Qi&&Qi(e)},J.__r=function(e){Zi&&Zi(e),Jn=0;var t=(Ee=e.__c).__H;t&&(Ka===Ee?(t.__h=[],Ee.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Br,n.__N=n.i=void 0})):(t.__h.forEach($r),t.__h.forEach(Ga),t.__h=[])),Ka=Ee},J.diffed=function(e){el&&el(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(al.push(t)!==1&&Xi===J.requestAnimationFrame||((Xi=J.requestAnimationFrame)||Dd)(Id)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Br&&(n.__=n.__V),n.i=void 0,n.__V=Br})),Ka=Ee=null},J.__c=function(e,t){t.some(function(n){try{n.__h.forEach($r),n.__h=n.__h.filter(function(r){return!r.__||Ga(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],J.__e(r,n.__v)}}),tl&&tl(e,t)},J.unmount=function(e){nl&&nl(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{$r(r)}catch(o){t=o}}),n.__H=void 0,t&&J.__e(t,n.__v))};var rl=typeof requestAnimationFrame=="function";function Dd(e){var t,n=function(){clearTimeout(r),rl&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);rl&&(t=requestAnimationFrame(n))}function $r(e){var t=Ee,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Ee=t}function Ga(e){var t=Ee;e.__c=e.__(),Ee=t}function sl(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function il(e,t){return typeof t=="function"?t(e):t}var r0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Od=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function zr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,o=0,a=0;function i(){let l=Date.now();return l-o>t?(a=1,o=l,0):(a<e?a++:(o+=t,a=1),o-l)}let s=[];function c(){let l=Date.now();if(s.length<e)return s.push(l),0;let g=s.shift()+t;return l>=g?(s.push(l),0):(s.push(g),g-l)}let u=n?c:i;return l=>{let g=function(...d){if(!g.isEnabled)return(async()=>l.apply(this,d))();let m;return new Promise((p,b)=>{m=setTimeout(()=>{p(l.apply(this,d)),r.delete(m)},u()),r.set(m,b)})};return g.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new Od);r.clear(),s.splice(0,s.length)},g.isEnabled=!0,g}}var Xn;function oo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function hl(e,t=","){return e.map(oo).join(t)}var so=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function hn(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function bl(e,t="@media "){return t+ve(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function ve(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Fd(e){return e}function io(){}var Ae={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function yl(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function to(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(yl(e),15)<<18}var Hd=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function lo({n:e,i:t,v:n=[]},r,o,a){for(let s of(e&&(e=oo({n:e,i:t,v:n})),a=[...ve(a)],n)){let c=r.theme("screens",s);for(let u of ve(c&&bl(c)||r.v(s))){var i;a.push(u),o|=c?67108864|to(u):s=="dark"?1073741824:u[0]=="@"?to(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Hd.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var co=new Map;function no(e){if(e.d){let t=[],n=Ya(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?Ya(r,a=>Ya(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=a.indexOf(s[1]);return~c?a.slice(0,c)+s[0]+a.slice(c+s[1].length):Xa(a,i)}return Xa(i,a)})):r,"&"),r=>Xa(r,e.n?"."+so(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function Ya(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function Xa(e,t){return e.replace(/&/g,t)}var Ud=new Intl.Collator("en",{numeric:!0});function xl(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=Tl(e[o],t)?n=o+1:r=o}return r}function Tl(e,t){let n=e.p&Ae.o;return n==(t.p&Ae.o)&&(n==Ae.b||n==Ae.o)?0:e.p-t.p||e.o-t.o||Ud.compare(e.n,t.n)}function Qa(e,t){return Math.round(parseInt(e,16)*t)}function vl(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[Qa(e.substr(1,a),i),Qa(e.substr(1+a,a),i),Qa(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function uo(e,t,n,r,o=[]){return function a(i,{n:s,p:c,r:u=[],i:l},g){let d=[],m="",p=0,b=0;for(let y in i||{}){var x,h;let S=i[y];if(y[0]=="@"){if(!S)continue;if(y[1]=="a"){d.push(...fo(s,c,Qn(""+S),g,c,u,l,!0));continue}if(y[1]=="l"){for(let A of ve(S))d.push(...a(A,{n:s,p:(x=Ae[y[7]],c&~Ae.o|x),r:u,i:l},g));continue}if(y[1]=="i"){d.push(...ve(S).map(A=>({p:-1,o:0,r:[],d:y+" "+A})));continue}if(y[1]=="k"){d.push({p:Ae.d,o:0,r:[y],d:a(S,{p:Ae.d},g).map(no).join("")});continue}if(y[1]=="f"){d.push(...ve(S).map(A=>({p:Ae.d,o:0,r:[y],d:a(A,{p:Ae.d},g).map(no).join("")})));continue}}if(typeof S!="object"||Array.isArray(S))y=="label"&&S?s=S+hn(JSON.stringify([c,l,i])):(S||S===0)&&(y=y.replace(/[A-Z]/g,A=>"-"+A.toLowerCase()),b+=1,p=Math.max(p,(h=y)[0]=="-"?0:yl(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),m+=(m?";":"")+ve(S).map(A=>g.s(y,wl(""+A,g.theme)+(l?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let A=c;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(O,v)=>{let E=g.theme("screens",v);return E?(A|=67108864,bl(E,"")):O}),A|=to(y)),d.push(...a(S,{n:s,p:A,r:[...u,y],i:l},g))}else d.push(...a(S,{p:c,r:[...u,y]},g))}return d.unshift({n:s,p:c,o:Math.max(0,15-b)+1.5*Math.min(p||15,15),r:u,d:m}),d.sort(Tl)}(e,lo(t,n,r,o),n)}function wl(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i)=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?vl(s):""+s})}function go(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function Wr(e,t,n=Ae.u,r,o){let a=[];for(let i of e)for(let s of function(c,u,l,g,d){var m;c={...c,i:c.i||d};let p=function(b,x){let h=co.get(b.n);return h?h(b,x):x.r(b.n,b.v[0]=="dark")}(c,u);return p?typeof p=="string"?({r:g,p:l}=lo(c,u,l,g),go(Wr(Qn(p),u,l,g,c.i),c.n)):Array.isArray(p)?p.map(b=>{var x,h;return{o:0,...b,r:[...ve(g),...ve(b.r)],p:(x=l,h=(m=b.p)!=null?m:l,x&~Ae.o|h)}}):uo(p,c,u,l,g):[{c:oo(c),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(xl(a,s),0,s);return a}function fo(e,t,n,r,o,a,i,s){return go((s?n.flatMap(c=>Wr([c],r,o,a,i)):Wr(n,r,o,a,i)).map(c=>c.p&Ae.o&&(c.n||t==Ae.b)?{...c,p:c.p&~Ae.o|t,o:0}:c),e)}function Bd(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:c,r:u,i:l}=lo(a,i,t);return n&&fo(s,t,n,i,c,u,l,r)},co.set(e,o),e}function Za(e,t){if(e[e.length-1]!="("){let n=[],r=!1,o=!1,a="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),o=!o),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(a+=(a&&"-")+i)}a&&(o&&(a="-"+a),t[0].push({n:a,v:n.filter($d),i:r}))}}function $d(e,t,n){return n.indexOf(e)==t}var ll=new Map;function Qn(e){let t=ll.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,c=(u,l=0)=>{o!=s&&(n.push(e.slice(o,s+l)),u&&Za(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let g=n[l-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=l,Za([...n,"#"],r);let{v:m}=r[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(m[0]=="dark"),m.length);Za([...n,Bd(g.length>1?g.slice(0,-1)+hn(JSON.stringify([g,d])):g+"("+hl(d)+")",Ae.a,d,/@$/.test(g))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),ll.set(e,t=r[0])}return t}function Sl(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function El(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Sl(e,t,n=>eo(n).trim()):t.filter(Boolean).reduce((n,r)=>n+eo(r),e?eo(e):"")}function eo(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=El(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var b0=Cl("@"),y0=Cl("~");function Cl(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(o,...a){return t(r,o,a)}});function t(n,r,o){return hl(Qn(n+e+"("+El(r,o)+")"))}}function ro(e,t){return Array.isArray(e)?cl(Sl(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?cl(e):[e]}var jd=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function cl(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=jd.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function Ll(e,...t){var n,r;let o=ro(e,t),a=(((n=o.find(i=>i.label))==null?void 0:n.label)||"css")+hn(JSON.stringify(o));return r=(i,s)=>go(o.flatMap(c=>uo(c,i,s,Ae.o)),a),co.set(a,r),a}var x0=new Proxy(function(e,t){return ul("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return ul(t,n,r)}});function ul(e,t,n){return{toString:()=>Ll({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var T0=Symbol();function Zn({presets:e=[],...t}){let n={preflight:t.preflight!==!1&&[],darkMode:void 0,darkColor:void 0,theme:{},variants:ve(t.variants),rules:ve(t.rules),ignorelist:ve(t.ignorelist),hash:t.hash,stringify:t.stringify||zd};for(let r of ve([...e,{darkMode:t.darkMode,darkColor:t.darkColor,preflight:t.preflight!==!1&&ve(t.preflight),theme:t.theme,hash:t.hash,stringify:t.stringify}])){let{preflight:o,darkMode:a=n.darkMode,darkColor:i=n.darkColor,theme:s,variants:c,rules:u,ignorelist:l,hash:g=n.hash,stringify:d=n.stringify}=typeof r=="function"?r(n):r;n={preflight:n.preflight!==!1&&o!==!1&&[...n.preflight,...ve(o)],darkMode:a,darkColor:i,theme:{...n.theme,...s,extend:{...n.theme.extend,...s?.extend}},variants:[...n.variants,...ve(c)],rules:[...n.rules,...ve(u)],ignorelist:[...n.ignorelist,...ve(l)],hash:g,stringify:d}}return n}function zd(e,t){return e+":"+t}function gl(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):fl(n,1)}):n=>e||{[n[1]]:fl(n,2)}}function fl(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function dl(e,t,n,r,o,a){for(let i of t){let s=n.get(i);s||n.set(i,s=r(i));let c=s(e,o,a);if(c)return c}}function Wd(e){var t;return ao(e[0],typeof(t=e[1])=="function"?t:()=>t)}function qd(e){var t,n;return Array.isArray(e)?ao(e[0],gl(e[1],e[2])):ao(e,gl(t,n))}function ao(e,t){return Al(e,(n,r,o,a)=>{let i=r.exec(n);if(i)return i.$$=n.slice(i[0].length),i.dark=a,t(i,o)})}function Al(e,t){let n=ve(e).map(Vd);return(r,o,a)=>{for(let i of n){let s=t(r,i,o,a);if(s)return s}}}function Vd(e){return typeof e=="string"?RegExp("^"+e+(e.includes("$")||e.slice(-1)=="-"?"":"$")):e}function ml(e,t){return e.replace(/--(tw(?:-[\w-]+)?)\b/g,(n,r)=>"--"+t(r).replace("#",""))}function Kd(e,t){let n=Zn(e),r=function({theme:c,darkMode:u,darkColor:l,variants:g,rules:d,hash:m,stringify:p,ignorelist:b}){let x=new Map,h=new Map,y=new Map,S=new Map,A=Al(b,(v,E)=>E.test(v));g.push(["dark",Array.isArray(u)||u=="class"?`${ve(u)[1]||".dark"} &`:typeof u=="string"&&u!="media"?u:"@media (prefers-color-scheme:dark)"]);let O=typeof m=="function"?v=>m(v,hn):m?hn:Fd;return{theme:function({extend:v={},...E}){let N={},w={get colors(){return P("colors")},theme:P,negative:()=>({}),breakpoints(R){let _={};for(let H in R)typeof R[H]=="string"&&(_["screen-"+H]=R[H]);return _}};return P;function P(R,_,H,B){if(R){var z;if({1:R,2:B}=/^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(R)||[,R],/[.[]/.test(R)){let $=[];R.replace(/\[([^\]]+)\]|([^.[]+)/g,(Q,C,I=C)=>$.push(I)),R=$.shift(),H=_,_=$.join("-")}let ee=N[R]||Object.assign(Object.assign(N[R]={},U(E,R)),U(v,R));if(_==null)return ee;let L=(z=ee[_||"DEFAULT"])!=null?z:H;return B?vl(L,{opacityValue:wl(B,P)}):L}let Z={};for(let ee of[...Object.keys(E),...Object.keys(v)])Z[ee]=P(ee);return Z}function U(R,_){let H=R[_];return typeof H=="function"&&(H=H(w)),H&&/color|fill|stroke/i.test(_)?function B(z,Z=[]){let ee={};for(let L in z){let $=z[L],Q=[...Z,L];ee[Q.join("-")]=$,L=="DEFAULT"&&(Q=Z,ee[Z.join("-")]=$),typeof $=="object"&&Object.assign(ee,B($,Q))}return ee}(H):H}}(c),e:so,h:O,s(v,E){return p(ml(v,O),ml(E,O),this)},d(v,E,N){return l?.(v,E,this,N)},v(v){return x.has(v)||x.set(v,dl(v,g,h,Wd,this)||"&:"+v),x.get(v)},r(v,E){let N=JSON.stringify([v,E]);return y.has(N)||y.set(N,!A(v,this)&&dl(v,d,S,qd,this,E)),y.get(N)}}}(n),o=new Map,a=[],i=new Set;function s(c){let u=c.n&&r.h(c.n),l=no(u?{...c,n:u}:c);if(l&&!i.has(l)){i.add(l);let g=xl(a,c);t.insert(l,g,c),a.splice(g,0,c)}return u}return t.resume(c=>o.set(c,c),(c,u)=>{t.insert(c,a.length,u),a.push(u),i.add(c)}),Object.defineProperties(function(c){if(!o.size)for(let l of ve(n.preflight))typeof l=="function"&&(l=l(r)),l&&(typeof l=="string"?fo("",Ae.b,Qn(l),r,Ae.b,[],!1,!0):uo(l,{},r,Ae.b)).forEach(s);c=""+c;let u=o.get(c);if(!u){let l=new Set;for(let g of Wr(Qn(c),r))l.add(g.c).add(s(g));u=[...l].filter(Boolean).join(" "),o.set(c,u).set(u,u)}return u},Object.getOwnPropertyDescriptors({get target(){return t.target},theme:r.theme,config:n,snapshot(){let c=t.snapshot(),u=new Set(i),l=new Map(o),g=[...a];return()=>{c(),i=u,o=l,a=g}},clear(){t.clear(),i=new Set,o=new Map,a=[]},destroy(){this.clear(),t.destroy()}}))}function Gd(e,t){return e!=t&&""+e.split(" ").sort()!=""+t.split(" ").sort()}function Jd(e=mo,t=document.documentElement){if(!t)return e;let n=new MutationObserver(o);n.observe(t,{attributeFilter:["class"],subtree:!0,childList:!0}),a(t),o([{target:t,type:""}]);let{destroy:r}=e;return e.destroy=()=>{n.disconnect(),r.call(e)},e;function o(i){for(let{type:s,target:c}of i)if(s[0]=="a")a(c);else for(let u of c.querySelectorAll("[class]"))a(u);n.takeRecords()}function a(i){let s,c=i.getAttribute("class");c&&Gd(c,s=e(c))&&i.setAttribute("class",s)}}function kl(e){let t=document.querySelector(e||"style[data-twind]");return t&&t.tagName=="STYLE"||((t=document.createElement("style")).dataset.twind="",document.head.prepend(t)),t}function Yd(e){let t=e?.cssRules?e:(e&&typeof e!="string"?e:kl(e)).sheet;return{target:t,snapshot(){let n=Array.from(t.cssRules,r=>r.cssText);return()=>{this.clear(),n.forEach(this.insert)}},clear(){for(let n=t.cssRules.length;n--;)t.deleteRule(n)},destroy(){var n;(n=t.ownerNode)==null||n.remove()},insert(n,r){try{t.insertRule(n,r)}catch{t.insertRule(":root{}",r),/:-[mwo]/.test(n)}},resume:io}}function Xd(e){let t=e&&typeof e!="string"?e:kl(e);return{target:t,snapshot(){let n=Array.from(t.childNodes,r=>r.textContent);return()=>{this.clear(),n.forEach(this.insert)}},clear(){t.textContent=""},destroy(){t.remove()},insert(n,r){t.insertBefore(document.createTextNode(n),t.childNodes[r]||null)},resume:io}}function _l(e,t){let n=e?Xd():Yd();return t||(n.resume=Zd),n}function Qd(e){return(e.ownerNode||e).textContent||(e.cssRules?Array.from(e.cssRules,t=>t.cssText):ve(e)).join("")}function Zd(e,t){let n=Qd(this.target),r=/\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;if(r.test(n)){var o;let a;for(let i of(r.lastIndex=0,this.clear(),document.querySelectorAll("[class]")))e(i.getAttribute("class"));for(;o=r.exec(n),a&&t(n.slice(a.index+a[0].length,o?.index),{p:parseInt(a[1],36),o:parseInt(a[2],36)/2,n:a[3]}),a=o;);}}var mo=new Proxy(io,{apply:(e,t,n)=>Xn(n[0]),get(e,t){let n=Xn[t];return typeof n=="function"?function(){return n.apply(Xn,arguments)}:n}});function Ml(e={},t=_l,n){return Xn?.destroy(),Xn=Jd(Kd(e,typeof t=="function"?t():t),n)}function po(e,t=!0){var n;let r=Zn(e);return Ml({...r,hash:(n=r.hash)!=null?n:t},()=>_l(!t))}var v0=function e(t){return new Proxy(function(n,...r){return pl(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(o,...a){return pl(t,r,o,a)}})}();function pl(e,t,n,r){return{toString(){let o=ro(n,r),a=so(t+hn(JSON.stringify([t,o])));return(typeof e=="function"?e:mo)(Ll({[`@keyframes ${a}`]:ro(n,r)})),a}}}var em=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["print-color-adjust","color-adjust"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function Pl(e){return em.get(e)}function Rl(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}function Il(e,t){var n=/^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(e);return n?n[1]?/^sti/i.test(t)?1:0:n[2]?/^pat/i.test(t)?1:0:n[3]?/^image-/i.test(t)?1:0:n[4]?t[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(t)?4:0:0}var tm=[["-webkit-",1],["-moz-",2],["-ms-",4]];function qr(){return({stringify:e})=>({stringify(t,n,r){let o="",a=Pl(t);a&&(o+=e(a,n,r)+";");let i=Rl(t),s=Il(t,n);for(let c of tm)i&c[1]&&(o+=e(c[0]+t,n,r)+";"),s&c[1]&&(o+=e(t,c[0]+n,r)+";");return o+e(t,n,r)}})}var ho;function Lo(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function jl(e,t=","){return e.map(Lo).join(t)}var zl=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Vr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Kr(e,t="@media "){return t+tt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function tt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function nm(){}var Fe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Wl(e){return e.match(/[-=:;]/g)?.length||0}function wo(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Wl(e),15)<<18}var rm=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Ao({n:e,i:t,v:n=[]},r,o,a){e&&(e=Lo({n:e,i:t,v:n})),a=[...tt(a)];for(let s of n){let c=r.theme("screens",s);for(let u of tt(c&&Kr(c)||r.v(s))){var i;a.push(u),o|=c?67108864|wo(u):s=="dark"?1073741824:u[0]=="@"?wo(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~rm.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var ko=new Map;function Dl(e){if(e.d){let t=[],n=bo(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?bo(r,a=>bo(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=a.indexOf(s[1]);return~c?a.slice(0,c)+s[0]+a.slice(c+s[1].length):yo(a,i)}return yo(i,a)})):r,"&"),r=>yo(r,e.n?"."+zl(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function bo(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function yo(e,t){return e.replace(/&/g,t)}var Nl=new Intl.Collator("en",{numeric:!0});function am(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=ql(e[o],t)?n=o+1:r=o}return r}function ql(e,t){let n=e.p&Fe.o;return n==(t.p&Fe.o)&&(n==Fe.b||n==Fe.o)?0:e.p-t.p||e.o-t.o||Nl.compare(Ol(e.n),Ol(t.n))||Nl.compare(Fl(e.n),Fl(t.n))}function Ol(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Fl(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function xo(e,t){return Math.round(parseInt(e,16)*t)}function Rt(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[xo(e.substr(1,a),i),xo(e.substr(1+a,a),i),xo(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function Vl(e,t,n,r,o=[]){return function a(i,{n:s,p:c,r:u=[],i:l},g){let d=[],m="",p=0,b=0;for(let y in i||{}){var x,h;let S=i[y];if(y[0]=="@"){if(!S)continue;if(y[1]=="a"){d.push(...Gl(s,c,Mo(""+S),g,c,u,l,!0));continue}if(y[1]=="l"){for(let A of tt(S))d.push(...a(A,{n:s,p:(x=Fe[y[7]],c&~Fe.o|x),r:y[7]=="d"?[]:u,i:l},g));continue}if(y[1]=="i"){d.push(...tt(S).map(A=>({p:-1,o:0,r:[],d:y+" "+A})));continue}if(y[1]=="k"){d.push({p:Fe.d,o:0,r:[y],d:a(S,{p:Fe.d},g).map(Dl).join("")});continue}if(y[1]=="f"){d.push(...tt(S).map(A=>({p:Fe.d,o:0,r:[y],d:a(A,{p:Fe.d},g).map(Dl).join("")})));continue}}if(typeof S!="object"||Array.isArray(S))y=="label"&&S?s=S+Vr(JSON.stringify([c,l,i])):(S||S===0)&&(y=y.replace(/[A-Z]/g,A=>"-"+A.toLowerCase()),b+=1,p=Math.max(p,(h=y)[0]=="-"?0:Wl(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),m+=(m?";":"")+tt(S).map(A=>g.s(y,Kl(""+A,g.theme)+(l?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let A=c;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(O,v)=>{let E=g.theme("screens",v);return E?(A|=67108864,Kr(E,"")):O}),A|=wo(y)),d.push(...a(S,{n:s,p:A,r:[...u,y],i:l},g))}else d.push(...a(S,{p:c,r:[...u,y]},g))}return d.unshift({n:s,p:c,o:Math.max(0,15-b)+1.5*Math.min(p||15,15),r:u,d:m}),d.sort(ql)}(e,Ao(t,n,r,o),n)}function Kl(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i="")=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?Rt(s):""+tt(s).filter(c=>Object(c)!==c)})}function _o(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function So(e,t,n=Fe.u,r,o){let a=[];for(let i of e)for(let s of function(c,u,l,g,d){c={...c,i:c.i||d};let m=function(p,b){let x=ko.get(p.n);return x?x(p,b):b.r(p.n,p.v[0]=="dark")}(c,u);return m?typeof m=="string"?({r:g,p:l}=Ao(c,u,l,g),_o(So(Mo(m),u,l,g,c.i),c.n)):Array.isArray(m)?m.map(p=>{var b,x;return{o:0,...p,r:[...tt(g),...tt(p.r)],p:(b=l,x=p.p??l,b&~Fe.o|x)}}):Vl(m,c,u,l,g):[{c:Lo(c),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(am(a,s),0,s);return a}function Gl(e,t,n,r,o,a,i,s){return _o((s?n.flatMap(c=>So([c],r,o,a,i)):So(n,r,o,a,i)).map(c=>c.p&Fe.o&&(c.n||t==Fe.b)?{...c,p:c.p&~Fe.o|t,o:0}:c),e)}function om(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:c,r:u,i:l}=Ao(a,i,t);return n&&Gl(s,t,n,i,c,u,l,r)},ko.set(e,o),e}function To(e,t,n){if(e[e.length-1]!="("){let r=[],o=!1,a=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),o=!o),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(a&&(i="-"+i),t[0].push({n:i,v:r.filter(sm),i:o}))}}function sm(e,t,n){return n.indexOf(e)==t}var Hl=new Map;function Mo(e){let t=Hl.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,c=(u,l=0)=>{o!=s&&(n.push(e.slice(o,s+l)),u&&To(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let g=n[l-1];if(/[~@]$/.test(g)){let d=r.shift();n.length=l,To([...n,"#"],r);let{v:m}=r[0].pop();for(let p of d)p.v.splice(+(p.v[0]=="dark")-+(m[0]=="dark"),m.length);To([...n,om(g.length>1?g.slice(0,-1)+Vr(JSON.stringify([g,d])):g+"("+jl(d)+")",Fe.a,d,/@$/.test(g))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),Hl.set(e,t=r[0])}return t}function Jl(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function Yl(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Jl(e,t,n=>vo(n).trim()):t.filter(Boolean).reduce((n,r)=>n+vo(r),e?vo(e):"")}function vo(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Yl(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var O0=Xl("@"),F0=Xl("~");function Xl(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(o,...a){return t(r,o,a)}}});function t(n,r,o){return jl(Mo(n+e+"("+Yl(r,o)+")"))}}function Eo(e,t){return Array.isArray(e)?Ul(Jl(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Ul(e):[e]}var im=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Ul(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=im.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function Ql(e,...t){var n;let r=Eo(e,t),o=(r.find(a=>a.label)?.label||"css")+Vr(JSON.stringify(r));return n=(a,i)=>_o(r.flatMap(s=>Vl(s,a,i,Fe.o)),o),ko.set(o,n),o}var H0=new Proxy(function(e,t){return Bl("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return Bl(t,n,r)}}});function Bl(e,t,n){return{toString(){return Ql({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function k(e,t,n){return[e,lm(t,n)]}function lm(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Co(n,1)}):n=>e||{[n[1]]:Co(n,2)}}function Co(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function M(e,t,n,r){return[e,cm(t,n,r)]}function cm(e,t,n){let r=typeof t=="string"?(o,a)=>({[t]:n?n(o,a):o._}):t||(({1:o,_:a},i,s)=>({[o||s]:a}));return(o,a)=>{let i=Zl(e||o[1]),s=a.theme(i,o.$$)??er(o.$$,i,a);if(s!=null)return o._=Co(o,0,s),r(o,a,i)}}function Pe(e,t={},n){return[e,um(t,n)]}function um(e={},t){return(n,r)=>{let{section:o=Zl(n[0]).replace("-","")+"Color"}=e,[a,i]=gm(n.$$);if(!a)return;let s=r.theme(o,a)||er(a,o,r);if(!s||typeof s=="object")return;let{opacityVariable:c=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=o.replace("Color","Opacity"),property:l=o,selector:g}=e,d=r.theme(u,i||"DEFAULT")||i&&er(i,u,r),m=t||(({_:b})=>{let x=tr(l,b);return g?{[g]:x}:x});n._={value:Rt(s,{opacityVariable:c||void 0,opacityValue:d||void 0}),color:b=>Rt(s,b),opacityVariable:c||void 0,opacityValue:d||void 0};let p=m(n,r);if(!n.dark){let b=r.d(o,a,s);b&&b!==s&&(n._={value:Rt(b,{opacityVariable:c||void 0,opacityValue:d||"1"}),color:x=>Rt(b,x),opacityVariable:c||void 0,opacityValue:d||void 0},p={"&":p,[r.v("dark")]:m(n,r)})}return p}}function gm(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function tr(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function er(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=bn(Kl(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Zl(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function bn(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,o="")=>bn(n)+r+bn(o)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var U0=Symbol();var fm=new Proxy(nm,{apply(e,t,n){return ho(n[0])},get(e,t){let n=ho[t];return typeof n=="function"?function(){return n.apply(ho,arguments)}:n}});var B0=function e(t){return new Proxy(function(n,...r){return $l(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(o,...a){return $l(t,r,o,a)}}})}();function $l(e,t,n,r){return{toString(){let o=Eo(n,r),a=zl(t+Vr(JSON.stringify([t,o])));return(typeof e=="function"?e:fm)(Ql({[`@keyframes ${a}`]:Eo(n,r)})),a}}}var dm="inherit",mm="currentColor",pm="transparent",hm="#000",bm="#fff",ym={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},xm={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},Tm={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},vm={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},wm={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},Sm={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Em={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},Cm={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},Lm={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Am={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},km={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},_m={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Mm={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Pm={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Rm={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Im={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Dm={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},Nm={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},Om={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},Fm={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},Hm={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},Um={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},Bm={__proto__:null,inherit:dm,current:mm,transparent:pm,black:hm,white:bm,slate:ym,gray:xm,zinc:Tm,neutral:vm,stone:wm,red:Sm,orange:Em,amber:Cm,yellow:Lm,lime:Am,green:km,emerald:_m,teal:Mm,cyan:Pm,sky:Rm,blue:Im,indigo:Dm,violet:Nm,purple:Om,fuchsia:Fm,pink:Hm,rose:Um},Ro={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:Bm,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Qe(4,"rem",4,.5,.5),...Qe(12,"rem",4,5),14:"3.5rem",...Qe(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:ne("blur"),backdropBrightness:ne("brightness"),backdropContrast:ne("contrast"),backdropGrayscale:ne("grayscale"),backdropHueRotate:ne("hueRotate"),backdropInvert:ne("invert"),backdropOpacity:ne("opacity"),backdropSaturate:ne("saturate"),backdropSepia:ne("sepia"),backgroundColor:ne("colors"),backgroundImage:{none:"none"},backgroundOpacity:ne("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Qe(200,"",100,0,50),...Qe(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:ne("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:ne("spacing"),borderWidth:{DEFAULT:"1px",...nt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:ne("colors"),caretColor:ne("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Qe(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:ne("borderColor"),divideOpacity:ne("borderOpacity"),divideWidth:ne("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:ne("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...nr(2,6),...nr(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:ne("spacing"),gradientColorStops:ne("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...nr(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...nr(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Qe(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Qe(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:ne("spacing"),placeholderColor:ne("colors"),placeholderOpacity:ne("opacity"),outlineColor:ne("colors"),outlineOffset:nt(8,"px"),outlineWidth:nt(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:ne("colors"),ringOffsetWidth:nt(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...nt(8,"px")},rotate:{...nt(2,"deg"),...nt(12,"deg",3),...nt(180,"deg",45)},saturate:Qe(200,"",100,0,50),scale:{...Qe(150,"",100,0,50),...Qe(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:ne("spacing"),scrollPadding:ne("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...nt(2,"deg"),...nt(12,"deg",3)},space:ne("spacing"),stroke:ne("colors"),strokeWidth:Qe(2),textColor:ne("colors"),textDecorationColor:ne("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...nt(8,"px")},textUnderlineOffset:{auto:"auto",...nt(8,"px")},textIndent:ne("spacing"),textOpacity:ne("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:ne("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...nr(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Qe(50,"",1,0,10),auto:"auto"}};function nr(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function nt(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Qe(e,t="",n=1,r=0,o=1,a={}){for(;r<=e;r+=o)a[r]=r/n+t;return a}function ne(e){return({theme:t})=>t(e)}var $m={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Ro.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Ro.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},jm=[k("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:er(`[${t}]`,e,n)}}})),k("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),M("aspect-","aspectRatio"),k("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:o}=t("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let c=n[s];typeof c=="string"&&(a[Kr(c)]={"&":{maxWidth:c,...i(s)}})}return a;function i(s){let c=o&&(typeof o=="string"?o:o[s]||o.DEFAULT);if(c)return{paddingRight:c,paddingLeft:c}}}),M("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),k("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),k("box-(border|content)","boxSizing",({1:e})=>e+"-box"),k("hidden",{display:"none"}),k("table-(auto|fixed)","tableLayout"),k(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",k("isolate","isolation"),k("object-(contain|cover|fill|none|scale-down)","objectFit"),M("object-","objectPosition"),k("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Gr),k("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),k("(static|fixed|absolute|relative|sticky)","position"),M("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),M("-?(top|bottom|left|right)(?:$|-)","inset"),k("visible","visibility"),k("invisible",{visibility:"hidden"}),M("-?z-","zIndex"),k("flex-((row|col)(-reverse)?)","flexDirection",ec),k("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),M("(flex-(?:grow|shrink))(?:$|-)"),M("(flex)-"),M("grow(?:$|-)","flexGrow"),M("shrink(?:$|-)","flexShrink"),M("basis-","flexBasis"),M("-?(order)-"),"-?(order)-(\\d+)",M("grid-cols-","gridTemplateColumns"),k("grid-cols-(\\d+)","gridTemplateColumns",ac),M("col-","gridColumn"),k("col-(span)-(\\d+)","gridColumn",rc),M("col-start-","gridColumnStart"),k("col-start-(auto|\\d+)","gridColumnStart"),M("col-end-","gridColumnEnd"),k("col-end-(auto|\\d+)","gridColumnEnd"),M("grid-rows-","gridTemplateRows"),k("grid-rows-(\\d+)","gridTemplateRows",ac),M("row-","gridRow"),k("row-(span)-(\\d+)","gridRow",rc),M("row-start-","gridRowStart"),k("row-start-(auto|\\d+)","gridRowStart"),M("row-end-","gridRowEnd"),k("row-end-(auto|\\d+)","gridRowEnd"),k("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Gr(ec(e))),k("grid-flow-(dense)","gridAutoFlow"),M("auto-cols-","gridAutoColumns"),M("auto-rows-","gridAutoRows"),M("gap-x(?:$|-)","gap","columnGap"),M("gap-y(?:$|-)","gap","rowGap"),M("gap(?:$|-)","gap"),"(justify-(?:items|self))-",k("justify-","justifyContent",tc),k("(content|items|self)-",e=>({["align-"+e[1]]:tc(e)})),k("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),M("p([xytrbl])?(?:$|-)","padding",yn("padding")),M("-?m([xytrbl])?(?:$|-)","margin",yn("margin")),M("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),k("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),M("w-","width"),M("min-w-","minWidth"),M("max-w-","maxWidth"),M("h-","height"),M("min-h-","minHeight"),M("max-h-","maxHeight"),M("font-","fontWeight"),M("font-","fontFamily","fontFamily",bt),k("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),k("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),k("italic","fontStyle"),k("not-italic",{fontStyle:"normal"}),k("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),M("tracking-","letterSpacing"),M("leading-","lineHeight"),k("list-(inside|outside)","listStylePosition"),M("list-","listStyleType"),k("list-","listStyleType"),M("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Pe("placeholder-",{property:"color",selector:"&::placeholder"}),k("text-(left|center|right|justify|start|end)","textAlign"),k("text-(ellipsis|clip)","textOverflow"),M("text-opacity-","textOpacity","--tw-text-opacity"),Pe("text-",{property:"color"}),M("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),M("indent-","textIndent"),k("(overline|underline|line-through)","textDecorationLine"),k("no-underline",{textDecorationLine:"none"}),M("underline-offset-","textUnderlineOffset"),Pe("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),M("decoration-","textDecorationThickness"),k("decoration-","textDecorationStyle"),k("(uppercase|lowercase|capitalize)","textTransform"),k("normal-case",{textTransform:"none"}),k("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),k("align-","verticalAlign"),k("whitespace-","whiteSpace"),k("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),k("break-words",{overflowWrap:"break-word"}),k("break-all",{wordBreak:"break-all"}),Pe("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Pe("accent-",{opacityVariable:!1,opacitySection:"opacity"}),k("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${qt(e," ")},var(--tw-gradient-stops))`),Pe("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Pe("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Pe("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),k("bg-(fixed|local|scroll)","backgroundAttachment"),k("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),k(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),k("bg-blend-","backgroundBlendMode"),k("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),M("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Pe("bg-",{section:"backgroundColor"}),M("bg-","backgroundImage"),M("bg-","backgroundPosition"),k("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Gr),M("bg-","backgroundSize"),M("rounded(?:$|-)","borderRadius"),M("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${qt(n[0])}-radius`]:t,[`border-${qt(n[1])}-radius`]:t}}),k("border-(collapse|separate)","borderCollapse"),M("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),k("border-(solid|dashed|dotted|double|none)","borderStyle"),M("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Pe("border-([xytrbl])-",{section:"borderColor"},yn("border","Color")),Pe("border-"),M("border-([xytrbl])(?:$|-)","borderWidth",yn("border","Width")),M("border(?:$|-)","borderWidth"),M("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),k("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),k("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),M("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${qt(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${qt(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Pe("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),M("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Pe("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),M("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),k("ring-inset",{"--tw-ring-inset":"inset"}),Pe("ring-",{property:"--tw-ring-color"}),M("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Rt(t("ringOffsetColor","","#fff")),"--tw-ring-color":Rt(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Pe("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),M("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":bt(e),"--tw-shadow-colored":bt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),M("(opacity)-"),k("mix-blend-","mixBlendMode"),...nc(),...nc("backdrop-"),M("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:bt(e),transitionTimingFunction:e._=="none"?void 0:bt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:bt(t("transitionDuration",""))})),M("duration(?:$|-)","transitionDuration","transitionDuration",bt),M("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",bt),M("delay(?:$|-)","transitionDelay","transitionDelay",bt),M("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=bt(e),o=r.split(" "),a=t("keyframes",o[0]);return a?{["@keyframes "+(o[0]=n(o[0]))]:a,animation:o.join(" ")}:{animation:r}}),"(transform)-(none)",k("transform",Io),k("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":oc(e=="gpu")})),M("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Io()})),M("-?(rotate)-","rotate",Po),M("-?(translate-[xy])-","translate",Po),M("-?(skew-[xy])-","skew",Po),k("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Gr),"(appearance)-",M("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",M("(cursor)-"),"(cursor)-",k("snap-(none)","scroll-snap-type"),k("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),k("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),k("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),k("snap-(normal|always)","scroll-snap-stop"),k("scroll-(auto|smooth)","scroll-behavior"),M("scroll-p([xytrbl])?(?:$|-)","padding",yn("scroll-padding")),M("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",yn("scroll-margin")),k("touch-(auto|none|manipulation)","touch-action"),k("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),k("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),k("outline",{outlineStyle:"solid"}),k("outline-(dashed|dotted|double|hidden)","outlineStyle"),M("(outline-offset)-"),Pe("outline-",{opacityVariable:!1,opacitySection:"opacity"}),M("outline-","outlineWidth"),"(pointer-events)-",M("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],k("select-(none|text|all|auto)","userSelect"),Pe("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Pe("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),M("stroke-","strokeWidth"),k("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),k("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Gr(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function ec(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function qt(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function bt(e){return e&&""+(e._||e)}function tc({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function yn(e,t=""){return({1:n,_:r})=>{let o={x:"lr",y:"tb"}[n]||n+n;return o?{...tr(e+"-"+qt(o[0])+t,r),...tr(e+"-"+qt(o[1])+t,r)}:tr(e+t,r)}}function nc(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,k(`${e}filter`,n),...t.map(r=>M(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:o,_:a})=>({[`--tw-${o}`]:tt(a).map(i=>`${r}(${i})`).join(" "),...n})))]}function Po({1:e,_:t}){return{["--tw-"+e]:t,...Io()}}function Io(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":oc()}}}}function oc(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function rc({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function ac({1:e}){return`repeat(${e},minmax(0,1fr))`}var zm=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["portrait","@media (orientation:portrait)"],["landscape","@media (orientation:landscape)"],["contrast-more","@media (prefers-contrast:more)"],["contrast-less","@media (prefers-contrast:less)"],["marker","& *::marker,&::marker"],["selection","& *::selection,&::selection"],["first-letter","&::first-letter"],["first-line","&::first-line"],["file","&::file-selector-button"],["placeholder","&::placeholder"],["backdrop","&::backdrop"],["first","&:first-child"],["last","&:last-child"],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])",({1:e,4:t,5:n},{e:r,h:o,v:a})=>{let i=n&&bn(n)||(t[0]=="["?t:a(t.slice(1)));return`${(i.includes("&")?i:"&"+i).replace(/&/g,`:merge(.${r(o(e))})`)}${e[0]=="p"?"~":" "}&`}],["(ltr|rtl)",({1:e})=>`[dir="${e}"] &`],[/^\[(.+)]$/,({1:e})=>/[&@]/.test(e)&&bn(e).replace(/[}]+$/,"").split("{")]];function Jr({disablePreflight:e}={}){return{preflight:e?void 0:$m,theme:Ro,variants:zm,rules:jm}}var Wm=Object.create,ic=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,Vm=Object.getOwnPropertyNames,Km=Object.getPrototypeOf,Gm=Object.prototype.hasOwnProperty,Jm=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ym=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Vm(t))!Gm.call(e,o)&&o!==n&&ic(e,o,{get:()=>t[o],enumerable:!(r=qm(t,o))||r.enumerable});return e},Xm=(e,t,n)=>(n=e!=null?Wm(Km(e)):{},Ym(t||!e||!e.__esModule?ic(n,"default",{value:e,enumerable:!0}):n,e)),Qm=Jm((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var o={};return r.m=n,r.c=o,r.i=function(a){return a},r.d=function(a,i,s){r.o(a,i)||Object.defineProperty(a,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(i,"a",i),i},r.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}},function(n,r,o){"use strict";(function(a){var i,s,c,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,g){u(r)==="object"&&u(a)==="object"?a.exports=g():(s=[],i=g,c=typeof i=="function"?i.apply(r,s):i,c!==void 0&&(a.exports=c))})(void 0,function(){return function(l){function g(m){if(d[m])return d[m].exports;var p=d[m]={i:m,l:!1,exports:{}};return l[m].call(p.exports,p,p.exports,g),p.l=!0,p.exports}var d={};return g.m=l,g.c=d,g.i=function(m){return m},g.d=function(m,p,b){g.o(m,p)||Object.defineProperty(m,p,{configurable:!1,enumerable:!0,get:b})},g.n=function(m){var p=m&&m.__esModule?function(){return m.default}:function(){return m};return g.d(p,"a",p),p},g.o=function(m,p){return Object.prototype.hasOwnProperty.call(m,p)},g.p="",g(g.s=0)}([function(l,g,d){function m(C,I){var D={};for(var te in C)I.indexOf(te)>=0||Object.prototype.hasOwnProperty.call(C,te)&&(D[te]=C[te]);return D}Object.defineProperty(g,"__esModule",{value:!0});var p=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(C){return typeof C>"u"?"undefined":u(C)}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C>"u"?"undefined":u(C)},b=Object.assign||function(C){for(var I=1;I<arguments.length;I++){var D=arguments[I];for(var te in D)Object.prototype.hasOwnProperty.call(D,te)&&(C[te]=D[te])}return C},x={top:"top",bottom:"bottom"},h={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:x.top,force:x.top,confirm:x.top,input:x.top,select:x.bottom,date:x.top}},y=g.setOptions=function(C){h=b({},h,C,{classes:b({},h.classes,C.classes),ids:b({},h.ids,C.ids),positions:b({},h.positions,C.positions)})},S=function(){return new Promise(function(C){return setTimeout(C,0)})},A=function(C){return new Promise(function(I){return setTimeout(I,1e3*C)})},O=function(){document.activeElement&&document.activeElement.blur()},v=function(){var C="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(I){var D=16*Math.random()|0,te=I==="x"?D:3&D|8;return te.toString(16)});return"notie-"+C},E={1:h.classes.backgroundSuccess,success:h.classes.backgroundSuccess,2:h.classes.backgroundWarning,warning:h.classes.backgroundWarning,3:h.classes.backgroundError,error:h.classes.backgroundError,4:h.classes.backgroundInfo,info:h.classes.backgroundInfo,5:h.classes.backgroundNeutral,neutral:h.classes.backgroundNeutral},N=function(){return h.transitionSelector+" "+h.transitionDuration+"s "+h.transitionCurve},w=function(C){return C.keyCode===13},P=function(C){return C.keyCode===27},U=function(C,I){C.classList.add(h.classes.container),C.style[I]="-10000px",document.body.appendChild(C),C.style[I]="-"+C.offsetHeight+"px",C.listener&&window.addEventListener("keydown",C.listener),S().then(function(){C.style.transition=N(),C.style[I]=0})},R=function(C,I){var D=document.getElementById(C);D&&(D.style[I]="-"+D.offsetHeight+"px",D.listener&&window.removeEventListener("keydown",D.listener),A(h.transitionDuration).then(function(){D.parentNode&&D.parentNode.removeChild(D)}))},_=function(C,I){var D=document.createElement("div");D.id=h.ids.overlay,D.classList.add(h.classes.overlay),D.classList.add(h.classes.backgroundOverlay),D.style.opacity=0,C&&h.overlayClickDismiss&&(D.onclick=function(){R(C.id,I),H()}),document.body.appendChild(D),S().then(function(){D.style.transition=N(),D.style.opacity=h.overlayOpacity})},H=function(){var C=document.getElementById(h.ids.overlay);C.style.opacity=0,A(h.transitionDuration).then(function(){C.parentNode&&C.parentNode.removeChild(C)})},B=g.hideAlerts=function(C){var I=document.getElementsByClassName(h.classes.alert);if(I.length){for(var D=0;D<I.length;D++){var te=I[D];R(te.id,te.position)}C&&A(h.transitionDuration).then(function(){return C()})}},z=g.alert=function(C){var I=C.type,D=I===void 0?4:I,te=C.text,K=C.time,be=K===void 0?h.alertTime:K,we=C.stay,Ke=we!==void 0&&we,Me=C.position,fe=Me===void 0?h.positions.alert||fe.top:Me;O(),B();var ue=document.createElement("div"),de=v();ue.id=de,ue.position=fe,ue.classList.add(h.classes.textbox),ue.classList.add(E[D]),ue.classList.add(h.classes.alert),ue.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>",ue.onclick=function(){return R(de,fe)},ue.listener=function(W){(w(W)||P(W))&&B()},U(ue,fe),be&&be<1&&(be=1),!Ke&&be&&A(be).then(function(){return R(de,fe)})},Z=g.force=function(C,I){var D=C.type,te=D===void 0?5:D,K=C.text,be=C.buttonText,we=be===void 0?"OK":be,Ke=C.callback,Me=C.position,fe=Me===void 0?h.positions.force||fe.top:Me;O(),B();var ue=document.createElement("div"),de=v();ue.id=de;var W=document.createElement("div");W.classList.add(h.classes.textbox),W.classList.add(h.classes.backgroundInfo),W.innerHTML='<div class="'+h.classes.textboxInner+'">'+K+"</div>";var ie=document.createElement("div");ie.classList.add(h.classes.button),ie.classList.add(E[te]),ie.innerHTML=we,ie.onclick=function(){R(de,fe),H(),Ke?Ke():I&&I()},ue.appendChild(W),ue.appendChild(ie),ue.listener=function(Ie){w(Ie)&&ie.click()},U(ue,fe),_()},ee=g.confirm=function(C,I,D){var te=C.text,K=C.submitText,be=K===void 0?"Yes":K,we=C.cancelText,Ke=we===void 0?"Cancel":we,Me=C.submitCallback,fe=C.cancelCallback,ue=C.position,de=ue===void 0?h.positions.confirm||de.top:ue;O(),B();var W=document.createElement("div"),ie=v();W.id=ie;var Ie=document.createElement("div");Ie.classList.add(h.classes.textbox),Ie.classList.add(h.classes.backgroundInfo),Ie.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>";var ye=document.createElement("div");ye.classList.add(h.classes.button),ye.classList.add(h.classes.elementHalf),ye.classList.add(h.classes.backgroundSuccess),ye.innerHTML=be,ye.onclick=function(){R(ie,de),H(),Me?Me():I&&I()};var G=document.createElement("div");G.classList.add(h.classes.button),G.classList.add(h.classes.elementHalf),G.classList.add(h.classes.backgroundError),G.innerHTML=Ke,G.onclick=function(){R(ie,de),H(),fe?fe():D&&D()},W.appendChild(Ie),W.appendChild(ye),W.appendChild(G),W.listener=function(Oe){w(Oe)?ye.click():P(Oe)&&G.click()},U(W,de),_(W,de)},L=function(C,I,D){var te=C.text,K=C.submitText,be=K===void 0?"Submit":K,we=C.cancelText,Ke=we===void 0?"Cancel":we,Me=C.submitCallback,fe=C.cancelCallback,ue=C.position,de=ue===void 0?h.positions.input||de.top:ue,W=m(C,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);O(),B();var ie=document.createElement("div"),Ie=v();ie.id=Ie;var ye=document.createElement("div");ye.classList.add(h.classes.textbox),ye.classList.add(h.classes.backgroundInfo),ye.innerHTML='<div class="'+h.classes.textboxInner+'">'+te+"</div>";var G=document.createElement("input");G.classList.add(h.classes.inputField),G.setAttribute("autocapitalize",W.autocapitalize||"none"),G.setAttribute("autocomplete",W.autocomplete||"off"),G.setAttribute("autocorrect",W.autocorrect||"off"),G.setAttribute("autofocus",W.autofocus||"true"),G.setAttribute("inputmode",W.inputmode||"verbatim"),G.setAttribute("max",W.max||""),G.setAttribute("maxlength",W.maxlength||""),G.setAttribute("min",W.min||""),G.setAttribute("minlength",W.minlength||""),G.setAttribute("placeholder",W.placeholder||""),G.setAttribute("spellcheck",W.spellcheck||"default"),G.setAttribute("step",W.step||"any"),G.setAttribute("type",W.type||"text"),G.value=W.value||"",W.allowed&&(G.oninput=function(){var Ue=void 0;if(Array.isArray(W.allowed)){for(var Ge="",_t=W.allowed,wt=0;wt<_t.length;wt++)_t[wt]==="an"?Ge+="0-9a-zA-Z":_t[wt]==="a"?Ge+="a-zA-Z":_t[wt]==="n"&&(Ge+="0-9"),_t[wt]==="s"&&(Ge+=" ");Ue=new RegExp("[^"+Ge+"]","g")}else p(W.allowed)==="object"&&(Ue=W.allowed);G.value=G.value.replace(Ue,"")});var Oe=document.createElement("div");Oe.classList.add(h.classes.button),Oe.classList.add(h.classes.elementHalf),Oe.classList.add(h.classes.backgroundSuccess),Oe.innerHTML=be,Oe.onclick=function(){R(Ie,de),H(),Me?Me(G.value):I&&I(G.value)};var lt=document.createElement("div");lt.classList.add(h.classes.button),lt.classList.add(h.classes.elementHalf),lt.classList.add(h.classes.backgroundError),lt.innerHTML=Ke,lt.onclick=function(){R(Ie,de),H(),fe?fe(G.value):D&&D(G.value)},ie.appendChild(ye),ie.appendChild(G),ie.appendChild(Oe),ie.appendChild(lt),ie.listener=function(Ue){w(Ue)?Oe.click():P(Ue)&&lt.click()},U(ie,de),G.focus(),_(ie,de)};g.input=L;var $=g.select=function(C,I){var D=C.text,te=C.cancelText,K=te===void 0?"Cancel":te,be=C.cancelCallback,we=C.choices,Ke=C.position,Me=Ke===void 0?h.positions.select||Me.top:Ke;O(),B();var fe=document.createElement("div"),ue=v();fe.id=ue;var de=document.createElement("div");de.classList.add(h.classes.textbox),de.classList.add(h.classes.backgroundInfo),de.innerHTML='<div class="'+h.classes.textboxInner+'">'+D+"</div>",fe.appendChild(de),we.forEach(function(ie,Ie){var ye=ie.type,G=ye===void 0?1:ye,Oe=ie.text,lt=ie.handler,Ue=document.createElement("div");Ue.classList.add(E[G]),Ue.classList.add(h.classes.button),Ue.classList.add(h.classes.selectChoice);var Ge=we[Ie+1];Ge&&!Ge.type&&(Ge.type=1),Ge&&Ge.type===G&&Ue.classList.add(h.classes.selectChoiceRepeated),Ue.innerHTML=Oe,Ue.onclick=function(){R(ue,Me),H(),lt()},fe.appendChild(Ue)});var W=document.createElement("div");W.classList.add(h.classes.backgroundNeutral),W.classList.add(h.classes.button),W.innerHTML=K,W.onclick=function(){R(ue,Me),H(),be?be():I&&I()},fe.appendChild(W),fe.listener=function(ie){P(ie)&&W.click()},U(fe,Me),_(fe,Me)},Q=g.date=function(C,I,D){var te=C.value,K=te===void 0?new Date:te,be=C.submitText,we=be===void 0?"OK":be,Ke=C.cancelText,Me=Ke===void 0?"Cancel":Ke,fe=C.submitCallback,ue=C.cancelCallback,de=C.position,W=de===void 0?h.positions.date||W.top:de;O(),B();var ie="&#9662",Ie=document.createElement("div"),ye=document.createElement("div"),G=document.createElement("div"),Oe=function(Se){Ie.innerHTML=h.dateMonths[Se.getMonth()],ye.innerHTML=Se.getDate(),G.innerHTML=Se.getFullYear()},lt=function(Se){var ht=new Date(K.getFullYear(),K.getMonth()+1,0).getDate(),gn=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(gn)>ht&&(gn=ht.toString()),Se.target.textContent=gn,Number(gn)<1&&(gn="1"),K.setDate(Number(gn))},Ue=function(Se){var ht=Se.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Se.target.textContent=ht,K.setFullYear(Number(ht))},Ge=function(Se){Oe(K)},_t=function(Se){var ht=new Date(K.getFullYear(),K.getMonth()+Se+1,0).getDate();K.getDate()>ht&&K.setDate(ht),K.setMonth(K.getMonth()+Se),Oe(K)},wt=function(Se){K.setDate(K.getDate()+Se),Oe(K)},Ai=function(Se){var ht=K.getFullYear()+Se;ht<0?K.setFullYear(0):K.setFullYear(K.getFullYear()+Se),Oe(K)},jt=document.createElement("div"),Ha=v();jt.id=Ha;var Ua=document.createElement("div");Ua.classList.add(h.classes.backgroundInfo);var ct=document.createElement("div");ct.classList.add(h.classes.dateSelectorInner);var ln=document.createElement("div");ln.classList.add(h.classes.button),ln.classList.add(h.classes.elementThird),ln.classList.add(h.classes.dateSelectorUp),ln.innerHTML=ie;var cn=document.createElement("div");cn.classList.add(h.classes.button),cn.classList.add(h.classes.elementThird),cn.classList.add(h.classes.dateSelectorUp),cn.innerHTML=ie;var un=document.createElement("div");un.classList.add(h.classes.button),un.classList.add(h.classes.elementThird),un.classList.add(h.classes.dateSelectorUp),un.innerHTML=ie,Ie.classList.add(h.classes.element),Ie.classList.add(h.classes.elementThird),Ie.innerHTML=h.dateMonths[K.getMonth()],ye.classList.add(h.classes.element),ye.classList.add(h.classes.elementThird),ye.setAttribute("contentEditable",!0),ye.addEventListener("input",lt),ye.addEventListener("blur",Ge),ye.innerHTML=K.getDate(),G.classList.add(h.classes.element),G.classList.add(h.classes.elementThird),G.setAttribute("contentEditable",!0),G.addEventListener("input",Ue),G.addEventListener("blur",Ge),G.innerHTML=K.getFullYear();var Wn=document.createElement("div");Wn.classList.add(h.classes.button),Wn.classList.add(h.classes.elementThird),Wn.innerHTML=ie;var qn=document.createElement("div");qn.classList.add(h.classes.button),qn.classList.add(h.classes.elementThird),qn.innerHTML=ie;var Vn=document.createElement("div");Vn.classList.add(h.classes.button),Vn.classList.add(h.classes.elementThird),Vn.innerHTML=ie,ln.onclick=function(){return _t(1)},cn.onclick=function(){return wt(1)},un.onclick=function(){return Ai(1)},Wn.onclick=function(){return _t(-1)},qn.onclick=function(){return wt(-1)},Vn.onclick=function(){return Ai(-1)};var zt=document.createElement("div");zt.classList.add(h.classes.button),zt.classList.add(h.classes.elementHalf),zt.classList.add(h.classes.backgroundSuccess),zt.innerHTML=we,zt.onclick=function(){R(Ha,W),H(),fe?fe(K):I&&I(K)};var Wt=document.createElement("div");Wt.classList.add(h.classes.button),Wt.classList.add(h.classes.elementHalf),Wt.classList.add(h.classes.backgroundError),Wt.innerHTML=Me,Wt.onclick=function(){R(Ha,W),H(),ue?ue(K):D&&D(K)},ct.appendChild(ln),ct.appendChild(cn),ct.appendChild(un),ct.appendChild(Ie),ct.appendChild(ye),ct.appendChild(G),ct.appendChild(Wn),ct.appendChild(qn),ct.appendChild(Vn),Ua.appendChild(ct),jt.appendChild(Ua),jt.appendChild(zt),jt.appendChild(Wt),jt.listener=function(Se){w(Se)?zt.click():P(Se)&&Wt.click()},U(jt,W),_(jt,W)};g.default={alert:z,force:Z,confirm:ee,input:L,select:$,date:Q,setOptions:y,hideAlerts:B}}])})}).call(r,o(0)(n))}])})}),Zm=Xm(Qm()),{default:sc,...ep}=Zm,Do=sc!==void 0?sc:ep;var ry=Symbol("clean");var ay=Symbol();function No(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=No(e[r],t);return n}}function cc(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,o,a){let i=e(r,o,...a);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,o){return e(n,r,...o)}}}}var dy=cc((e,t,n)=>No(t,r=>{for(let o in n)r=r.replace(new RegExp(`{${o}}`,"g"),n[o]);return r})),my=cc((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),No(t[r],o=>o.replace(/{count}/g,n))});var Oo=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Fo(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function mc(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function pc(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function rp(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,o=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(o=!1);return o}var ar={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Oo?173:189,"=":Oo?61:187,";":Oo?59:186,"'":222,"[":219,"]":221,"\\":220},yt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Bo={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},He={16:!1,18:!1,17:!1,91:!1},ke={};for(rr=1;rr<20;rr++)ar["f".concat(rr)]=111+rr;var rr,pe=[],uc=!1,hc="all",bc=[],Xr=function(e){return ar[e.toLowerCase()]||yt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},ap=function(e){return Object.keys(ar).find(function(t){return ar[t]===e})},op=function(e){return Object.keys(yt).find(function(t){return yt[t]===e})};function yc(e){hc=e||"all"}function or(){return hc||"all"}function sp(){return pe.slice(0)}function ip(){return pe.map(function(e){return ap(e)||op(e)||String.fromCharCode(e)})}function lp(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function cp(e){return typeof e=="string"&&(e=Xr(e)),pe.indexOf(e)!==-1}function up(e,t){var n,r;e||(e=or());for(var o in ke)if(Object.prototype.hasOwnProperty.call(ke,o))for(n=ke[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;or()===e&&yc(t||"all")}function gp(e){var t=e.keyCode||e.which||e.charCode,n=pe.indexOf(t);if(n>=0&&pe.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&pe.splice(0,pe.length),(t===93||t===224)&&(t=91),t in He){He[t]=!1;for(var r in yt)yt[r]===t&&(Be[r]=!1)}}function fp(e){if(typeof e>"u")Object.keys(ke).forEach(function(i){return delete ke[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&Ho(i)});else if(typeof e=="object")e.key&&Ho(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],a=n[1];typeof o=="function"&&(a=o,o=""),Ho({key:e,scope:o,method:a,splitKey:"+"})}}var Ho=function(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,a=o===void 0?"+":o,i=pc(t);i.forEach(function(s){var c=s.split(a),u=c.length,l=c[u-1],g=l==="*"?"*":Xr(l);if(ke[g]){n||(n=or());var d=u>1?mc(yt,c):[];ke[g]=ke[g].filter(function(m){var p=r?m.method===r:!0;return!(p&&m.scope===n&&rp(m.mods,d))})}})};function gc(e,t,n,r){if(t.element===r){var o;if(t.scope===n||t.scope==="all"){o=t.mods.length>0;for(var a in He)Object.prototype.hasOwnProperty.call(He,a)&&(!He[a]&&t.mods.indexOf(+a)>-1||He[a]&&t.mods.indexOf(+a)===-1)&&(o=!1);(t.mods.length===0&&!He[16]&&!He[18]&&!He[17]&&!He[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function fc(e,t){var n=ke["*"],r=e.keyCode||e.which||e.charCode;if(Be.filter.call(this,e)){if((r===93||r===224)&&(r=91),pe.indexOf(r)===-1&&r!==229&&pe.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var b=Bo[p];e[p]&&pe.indexOf(b)===-1?pe.push(b):!e[p]&&pe.indexOf(b)>-1?pe.splice(pe.indexOf(b),1):p==="metaKey"&&e[p]&&pe.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(pe=pe.slice(pe.indexOf(b))))}),r in He){He[r]=!0;for(var o in yt)yt[o]===r&&(Be[o]=!0);if(!n)return}for(var a in He)Object.prototype.hasOwnProperty.call(He,a)&&(He[a]=e[Bo[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(pe.indexOf(17)===-1&&pe.push(17),pe.indexOf(18)===-1&&pe.push(18),He[17]=!0,He[18]=!0);var i=or();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&gc(e,n[s],i,t);if(r in ke){for(var c=0;c<ke[r].length;c++)if((e.type==="keydown"&&ke[r][c].keydown||e.type==="keyup"&&ke[r][c].keyup)&&ke[r][c].key){for(var u=ke[r][c],l=u.splitKey,g=u.key.split(l),d=[],m=0;m<g.length;m++)d.push(Xr(g[m]));d.sort().join("")===pe.sort().join("")&&gc(e,u,i,t)}}}}function dp(e){return bc.indexOf(e)>-1}function Be(e,t,n){pe=[];var r=pc(e),o=[],a="all",i=document,s=0,c=!1,u=!0,l="+",g=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(i=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(g=t.capture),typeof t.splitKey=="string"&&(l=t.splitKey)),typeof t=="string"&&(a=t);s<r.length;s++)e=r[s].split(l),o=[],e.length>1&&(o=mc(yt,e)),e=e[e.length-1],e=e==="*"?"*":Xr(e),e in ke||(ke[e]=[]),ke[e].push({keyup:c,keydown:u,scope:a,mods:o,shortcut:r[s],method:n,key:r[s],splitKey:l,element:i});typeof i<"u"&&!dp(i)&&window&&(bc.push(i),Fo(i,"keydown",function(d){fc(d,i)},g),uc||(uc=!0,Fo(window,"focus",function(){pe=[]},g)),Fo(i,"keyup",function(d){fc(d,i),gp(d)},g))}function mp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(ke).forEach(function(n){var r=ke[n].filter(function(o){return o.scope===t&&o.shortcut===e});r.forEach(function(o){o&&o.method&&o.method()})})}var Uo={getPressedKeyString:ip,setScope:yc,getScope:or,deleteScope:up,getPressedKeyCodes:sp,isPressed:cp,filter:lp,trigger:mp,unbind:fp,keyMap:ar,modifier:yt,modifierMap:Bo};for(Yr in Uo)Object.prototype.hasOwnProperty.call(Uo,Yr)&&(Be[Yr]=Uo[Yr]);var Yr;typeof document<"u"&&(dc=window.hotkeys,Be.noConflict=function(e){return e&&window.hotkeys===Be&&(window.hotkeys=dc),Be},window.hotkeys=Be);var dc;var $o=Do.alert;var pp=0;function f(e,t,n,r,o){var a,i,s={};for(i in t)i=="ref"?a=t[i]:s[i]=t[i];var c={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--pp,__source:o,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(i in a)s[i]===void 0&&(s[i]=a[i]);return J.vnode&&J.vnode(c),c}function jo({value:e,defaultCase:t=null,cases:n}){return e==null?null:f(et,{children:n[e]!=null?n[e]:t})}function zo(){let[e,t]=Y(location.hash);return ge(()=>{let n=()=>t(location.hash);return globalThis.addEventListener("hashchange",n,!1),()=>{globalThis.removeEventListener("hashchange",n)}},[]),e}function Ze(e){$o({type:"success",text:e})}function St(e){$o({type:"error",text:e})}var xc={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",isShowContextMenu:"\u521B\u5EFA\u53F3\u952E\u83DC\u5355"};var Tc={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var vc={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translationServices.niu":"Niu Translation","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var hp=[{code:"zh-CN",messages:xc},{code:"zh-TW",messages:Tc},{code:"en",messages:vc}],Vt={};for(let e of hp)Vt[e.code]=e.messages;var Et="Immersive Translate",he="immersive-translate";var me="immersiveTranslate",dx=me+"IframeMessage",Wo=`${me}Container`,Kt=`${me}SpecifiedContainer`,sr="buildinConfig",xn="localConfig",wc="openOptionsPage",Sc="translateLocalPdfFile",Ec=`${me}PageTranslatedStatus`,Cc=`${me}PageUrlChanged`,mx=`${me}ReceiveCommand`,px=`${me}PopupReceiveMessage`,Lc="immersive-translate.owenyoung.com",hx=`https://${Lc}/`,qo=`https://${Lc}/buildin_config.json`,Gt=`${me}Mark`,Vo="immersiveTranslateEffect",Re=`${me}Root`,Ko=`data-${he}-effect`,Tn=`${me}TranslatedMark`,Jt=`${me}ParagraphId`,rt=`${me}AtomicBlockMark`,at=`${me}ExcludeMark`,Zr=`${me}StayOriginalMark`,vn=`${me}PreWhitespaceMark`,Ct=`${me}InlineMark`,Yt=`${me}BlockMark`,ir=`${me}Left`,ea=`${me}Right`,bx=`${me}Width`,yx=`${me}Height`,Ac=`${me}Top`,kc=`${me}FontSize`;var Go=`${me}GlobalStyleMark`,_c=["@","#"],ta=" --- ",Jo=`
`,ot=`${he}-target-wrapper`,na=`${he}-pdf-target-container`,Mc=`${he}-target-inner`,xx=`${he}-source-wrapper`,Yo=`${he}-target-translation-block-wrapper`,Pc=`${he}-target-translation-vertical-block-wrapper`,Rc=`${he}-target-translation-pdf-block-wrapper`,Ic=`${he}-target-translation-pre-whitespace`,Xo=`${he}-target-translation-inline-wrapper`,Dc=["none","dashed","underline","dashedBorder","mask","dotted","dividingLine","highlight","marker","blockquote","weakening","paper","italic","bold","thinDashed","wavy","nativeDotted","nativeDashed","nativeUnderline"],wn=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],Qo={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var Nc=["toggleTranslatePage","toggleTranslateTheWholePage","toggleTranslateToThePageEndImmediately","toggleTranslateTheMainPage"],Oc=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"],Fc="Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.",Hc="\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",ra="zh-CN";var Zo=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),o=Je.green;r>1e4?o=Je.red:r>1e3&&(o=Je.yellow),console.debug(Je.dim(Et+" TIMING:"),t,"in",o(r+"ms")),this.#e=n}},lr=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Je.dim(Et+" DEBUG:"),...t)}v(...t){this.#e<=0&&console.log(Je.dim(Et+" VERBOSE:"),...t)}info(...t){this.#e<=1&&console.log(Je.green(Et+" INFO:"),...t)}l(...t){this.#e<=1&&console.log(Je.green(Et+" TEMP INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Je.yellow(Et+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Je.red(Et+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Je.red(Et+" FATAL:"),...t)}timing(){return this.level===0?new Zo:{reset:()=>{},stop:()=>{}}}},j=new lr;var es=/iPhone/i,Uc=/iPod/i,Bc=/iPad/i,$c=/\biOS-universal(?:.+)Mac\b/i,ts=/\bAndroid(?:.+)Mobile\b/i,jc=/Android/i,Sn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,aa=/Silk/i,Lt=/Windows Phone/i,zc=/\bWindows(?:.+)ARM\b/i,Wc=/BlackBerry/i,qc=/BB10/i,Vc=/Opera Mini/i,Kc=/\b(CriOS|Chrome)(?:.+)Mobile/i,Gc=/Mobile(?:.+)Firefox\b/i,Jc=e=>typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof globalThis.MSStream>"u";function bp(e){return t=>t.test(e)}function oa(e){let t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});let n=t.userAgent,r=n.split("[FBAN");typeof r[1]<"u"&&(n=r[0]),r=n.split("Twitter"),typeof r[1]<"u"&&(n=r[0]);let o=bp(n),a={apple:{phone:o(es)&&!o(Lt),ipod:o(Uc),tablet:!o(es)&&(o(Bc)||Jc(t))&&!o(Lt),universal:o($c),device:(o(es)||o(Uc)||o(Bc)||o($c)||Jc(t))&&!o(Lt)},amazon:{phone:o(Sn),tablet:!o(Sn)&&o(aa),device:o(Sn)||o(aa)},android:{phone:!o(Lt)&&o(Sn)||!o(Lt)&&o(ts),tablet:!o(Lt)&&!o(Sn)&&!o(ts)&&(o(aa)||o(jc)),device:!o(Lt)&&(o(Sn)||o(aa)||o(ts)||o(jc))||o(/\bokhttp\b/i)},windows:{phone:o(Lt),tablet:o(zc),device:o(Lt)||o(zc)},other:{blackberry:o(Wc),blackberry10:o(qc),opera:o(Vc),firefox:o(Gc),chrome:o(Kc),device:o(Wc)||o(qc)||o(Vc)||o(Gc)||o(Kc)},any:!1,phone:!1,tablet:!1};return a.any=a.apple.device||a.android.device||a.windows.device||a.other.device,a.phone=a.apple.phone||a.android.phone||a.windows.phone,a.tablet=a.apple.tablet||a.android.tablet||a.windows.tablet,a}var ns="DENO",sa="CHROME",ia="FIREFOX";function Yc(e){let t=sa;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=ia:/deno/i.test(n)&&(t=ns)}catch{}return e===sa&&t===sa||e===ia&&t===ia||e===ns&&t===ns}function Xc(){return Yc(sa)}function Qc(){return typeof Deno<"u"}function rs(){return Yc(ia)}function Zc(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var eu={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},tu={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:eu,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:eu,query:()=>{},sendMessage:()=>{}}};var X;Qc()?X=tu:X=globalThis.immersiveTranslateBrowserAPI;var as={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return X.storage[n].get(r)},set:(e,t,n)=>X.storage[n].set({[e]:t})};function la(e,t,n){let[r]=Y(()=>typeof t=="function"?t():t),[o]=Y(n),[a,i]=Y(r),[s,c]=Y(!0),[u,l]=Y("");ge(()=>{as.get(e,r,o).then(d=>{d[e]&&i(d[e]),c(!0),l("")}).catch(d=>{c(!1),l(d)})},[e,r,o]);let g=Yn(d=>{let m=typeof d=="function"?d(a):d;j.debug("new settings",m),as.set(e,m,o).then(()=>{i(m),c(!0),l("")}).catch(p=>{i(m),c(!1),l(p)})},[o,e,a]);return[a,g,s,u]}function ca(e,t,n){let r=[];return function(){let[a,i,s,c]=la(e,t,n),u=Yn(l=>{for(let g of r)g(l)},[]);return ge(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[a,u,s,c]}}function nu(e,t){return ca(e,t,"local")}function ru(e,t){return ca(e,t,"sync")}var yp="userConfig",xp={},st=ru(yp,xp);function It(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=wn.map(o=>o.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let o=n.indexOf(t);return o===-1?"auto":wn[o]}else return"auto";else return wn[r]}function cr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():T}var re=cr();function xe(){return re.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function au(){return typeof Deno<"u"}var os={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],excludeSelectors:["[class^='lln-']"],extraBlockSelector:[".ytd-transcript-segment-renderer"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeSelectors:[".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]}]};function ss(e){return Array.isArray(e)?e:e?[e]:[]}function En(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function xt(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function ua(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let o={...e};return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))o[i]=s;else if(i.startsWith("additional")){let c=ss(s);o[i]=Array.from(new Set([...o[i],...c]))}else o[i]=ss(s)}),o}function Xt(){if(re.PROD==="1")return{};let e={};if(re.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&re.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:re.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:re.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(re.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&re.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:re.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:re.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(re.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:re.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(re.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:re.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(re.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&re.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:re.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:re.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(re.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&re.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:re.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:re.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(re.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:re.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return re.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=re.IMMERSIVE_TRANSLATE_SERVICE),re.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),re.MOCK==="1"&&(e.translationService="mock"),e}async function ur(){let e=await X.storage.local.get(xn);if(e[xn]){let t=e[xn],n=t.tempTranslationUrlMatches||[],r=n.filter(i=>i.expiredAt>Date.now()),o=!1;r.length!==n.length&&(n=r,o=!0);let a={...t,tempTranslationUrlMatches:[...n]};return o&&await gr(a),a}else return{}}async function gr(e){await X.storage.local.set({[xn]:e})}async function ou(){await X.storage.local.set({[sr]:{}})}async function Dt(){await X.storage.local.set({[xn]:{}})}async function Ce(){let e=await X.storage.local.get(sr),t={...os,buildinConfigUpdatedAt:re.BUILD_TIME};if(e[sr]){let p=e[sr];if(p&&p.buildinConfigUpdatedAt){let b=new Date(p.buildinConfigUpdatedAt),x=new Date(t.buildinConfigUpdatedAt);b>x&&(t=p)}}let n={};if(!xe()&&X.commands&&X.commands.getAll){let p=await X.commands.getAll();for(let b of p)b.name&&b.shortcut&&(n[b.name]=b.shortcut)}let r=is(),o=Xt(),i=(await X.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},c=await ur(),u=new Date;if(c&&c.tempTranslationUrlMatches&&c.tempTranslationUrlMatches.length>0){let p=c.tempTranslationUrlMatches.filter(b=>new Date(b.expiredAt)>u);if(p.length>0){let b=i.translationUrlPattern?i.translationUrlPattern?.matches||[]:[],x=Array.isArray(b)?b:[b],h=Array.from(new Set(x.concat(p.map(y=>y.match))));i.translationUrlPattern={...i.translationUrlPattern,matches:h}}}let l=Object.assign({},s,o,i);if(!l.interfaceLanguage){let p=await Tp();l.interfaceLanguage=p}let g=Object.assign(r,t),d=Object.keys(g),m=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let p of d){let b=p;if(b==="generalRule")typeof l[b]=="object"&&(g[b]=ua(r[b],l[b]));else if(b==="translationServices"){let x=l[b]||{},h=t[b]||{},y=Object.keys(h),S=Object.keys(x),A=[...new Set([...y,...S])],O={};for(let v of A)O[v]={...h[v],...x[v]};g[b]=O}else if(typeof l[b]!="string"&&typeof l[b]!="boolean"&&typeof l[b]!="number"&&m.includes(b))l[b]&&(g[b]=Object.assign(g[b],l[b])),b==="shortcuts"&&(g[b]={...g[b],...n});else if(b==="rules"){if(Array.isArray(l[b])&&(g[b]=[...l[b],...g[b]]),re.PROD==="0"&&re.DEV_RULES){let x=JSON.parse(re.DEV_RULES);g[b]=[...x,...g[b]]}}else l[b]!==void 0&&(g[b]=l[b])}return g.donateUrl=t.donateUrl,g.minVersion=t.minVersion,g.feedbackUrl=t.feedbackUrl,g}var Tp=async()=>{let n=(await X.i18n.getAcceptLanguages()).map(r=>It(r)).find(r=>Vt[r]);return n||"en"},is=()=>{let e={...os,buildinConfigUpdatedAt:re.BUILD_TIME};return{...e,targetLanguage:ra,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};async function cs(e){if(Math.abs(e)<1024)return e+" B";let n=["KB","MB","GB","TB","PB","EB","ZB","YB"],r=-1;do e/=1024,++r;while(Math.abs(e)>=1024&&r<n.length-1);return e.toFixed(1)+" "+n[r]}function su(e,t,n){let r=vp(e,t),o=[],a={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(a.tempSentences.reduce((c,u)=>c+u.text.length,0)+i.text.length>t||a.tempSentences.length>=n)&&(o.push(a),a={fromByClient:a.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(a.from!==i.from||a.to!==i.to)&&(a.tempSentences.length>0?(o.push(a),a={fromByClient:a.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(a.from=i.from,a.to=i.to)),a.tempSentences.push(i);return a.tempSentences.length>0&&o.push(a),o}function vp(e,t){let n=[];for(let r=0;r<e.length;r++){let o=e[r],{from:a,to:i,text:s,url:c}=o,u=s.split(/\r?\n/),l=[],g="";for(let d=0;d<u.length;d++){let m=u[d];if(m===""){l.length>0?d<u.length-1&&(l[l.length-1].suffix+=`
`):g+=`
`;continue}else if(m.length>t){let p=[];ls(m,t,p);for(let b=0;b<p.length;b++){let x=p[b],{text:h,prefix:y,suffix:S}=x;l.push({from:a,to:i,text:h,prefix:y,suffix:S,index:r,url:c})}}else l.push({text:m,prefix:g,suffix:"",from:a,to:i,index:r,url:c});l.length>0&&d<u.length-1&&(l[l.length-1].suffix+=`
`)}n.push(...l)}return n}function fr(e,t){let n=It(e),r=It(t),o=n===r;return o?!0:(o=n.startsWith("zh")&&r.startsWith("zh"),o)}function ls(e,t,n){let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((a,i)=>{let s=e.lastIndexOf(i,t);return s>a?s:a},-1);if(o===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&ls(e.slice(t),t,n);else{let a=e.slice(0,o+1);a.startsWith(" ")?n.push({text:a.slice(1),prefix:" ",suffix:""}):n.push({text:a,prefix:"",suffix:""}),o+1<e.length&&ls(e.slice(o+1),t,n)}return n}var $e=class extends Error{constructor(n,r,o){super(r);this.name=n,o&&(this.details=o)}};async function Cn(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let a=await(e.fetchPolyfill||fetch)(t,r);if(a.ok&&a.status>=200&&a.status<400){if(n==="json")return await a.json();if(n==="text")return await a.text();if(n==="raw"){let i=await a.text(),s=Object.fromEntries([...a.headers.entries()]),c=a.url;return c||(a.headers.get("X-Final-URL")?c=a.headers.get("X-Final-URL"):c=t),{body:i,headers:s,status:a.status,statusText:a.statusText,url:c}}}else{let i;try{i=await a.text()}catch(s){j.error("parse response failed",s)}throw new $e("fetchError",a.status+": "+a.statusText||"",i)}}function Nt(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function wp(e,t){return e<<t|e>>>32-t}function fa(e,t,n,r,o,a){return Nt(wp(Nt(Nt(t,e),Nt(r,a)),o),n)}function je(e,t,n,r,o,a,i){return fa(t&n|~t&r,e,t,o,a,i)}function ze(e,t,n,r,o,a,i){return fa(t&r|n&~r,e,t,o,a,i)}function We(e,t,n,r,o,a,i){return fa(t^n^r,e,t,o,a,i)}function qe(e,t,n,r,o,a,i){return fa(n^(t|~r),e,t,o,a,i)}function ga(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,o,a,i,s=1732584193,c=-271733879,u=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)r=s,o=c,a=u,i=l,s=je(s,c,u,l,e[n],7,-680876936),l=je(l,s,c,u,e[n+1],12,-389564586),u=je(u,l,s,c,e[n+2],17,606105819),c=je(c,u,l,s,e[n+3],22,-1044525330),s=je(s,c,u,l,e[n+4],7,-176418897),l=je(l,s,c,u,e[n+5],12,1200080426),u=je(u,l,s,c,e[n+6],17,-1473231341),c=je(c,u,l,s,e[n+7],22,-45705983),s=je(s,c,u,l,e[n+8],7,1770035416),l=je(l,s,c,u,e[n+9],12,-1958414417),u=je(u,l,s,c,e[n+10],17,-42063),c=je(c,u,l,s,e[n+11],22,-1990404162),s=je(s,c,u,l,e[n+12],7,1804603682),l=je(l,s,c,u,e[n+13],12,-40341101),u=je(u,l,s,c,e[n+14],17,-1502002290),c=je(c,u,l,s,e[n+15],22,1236535329),s=ze(s,c,u,l,e[n+1],5,-165796510),l=ze(l,s,c,u,e[n+6],9,-1069501632),u=ze(u,l,s,c,e[n+11],14,643717713),c=ze(c,u,l,s,e[n],20,-373897302),s=ze(s,c,u,l,e[n+5],5,-701558691),l=ze(l,s,c,u,e[n+10],9,38016083),u=ze(u,l,s,c,e[n+15],14,-660478335),c=ze(c,u,l,s,e[n+4],20,-405537848),s=ze(s,c,u,l,e[n+9],5,568446438),l=ze(l,s,c,u,e[n+14],9,-1019803690),u=ze(u,l,s,c,e[n+3],14,-187363961),c=ze(c,u,l,s,e[n+8],20,1163531501),s=ze(s,c,u,l,e[n+13],5,-1444681467),l=ze(l,s,c,u,e[n+2],9,-51403784),u=ze(u,l,s,c,e[n+7],14,1735328473),c=ze(c,u,l,s,e[n+12],20,-1926607734),s=We(s,c,u,l,e[n+5],4,-378558),l=We(l,s,c,u,e[n+8],11,-2022574463),u=We(u,l,s,c,e[n+11],16,1839030562),c=We(c,u,l,s,e[n+14],23,-35309556),s=We(s,c,u,l,e[n+1],4,-1530992060),l=We(l,s,c,u,e[n+4],11,1272893353),u=We(u,l,s,c,e[n+7],16,-155497632),c=We(c,u,l,s,e[n+10],23,-1094730640),s=We(s,c,u,l,e[n+13],4,681279174),l=We(l,s,c,u,e[n],11,-358537222),u=We(u,l,s,c,e[n+3],16,-722521979),c=We(c,u,l,s,e[n+6],23,76029189),s=We(s,c,u,l,e[n+9],4,-640364487),l=We(l,s,c,u,e[n+12],11,-421815835),u=We(u,l,s,c,e[n+15],16,530742520),c=We(c,u,l,s,e[n+2],23,-995338651),s=qe(s,c,u,l,e[n],6,-198630844),l=qe(l,s,c,u,e[n+7],10,1126891415),u=qe(u,l,s,c,e[n+14],15,-1416354905),c=qe(c,u,l,s,e[n+5],21,-57434055),s=qe(s,c,u,l,e[n+12],6,1700485571),l=qe(l,s,c,u,e[n+3],10,-1894986606),u=qe(u,l,s,c,e[n+10],15,-1051523),c=qe(c,u,l,s,e[n+1],21,-2054922799),s=qe(s,c,u,l,e[n+8],6,1873313359),l=qe(l,s,c,u,e[n+15],10,-30611744),u=qe(u,l,s,c,e[n+6],15,-1560198380),c=qe(c,u,l,s,e[n+13],21,1309151649),s=qe(s,c,u,l,e[n+4],6,-145523070),l=qe(l,s,c,u,e[n+11],10,-1120210379),u=qe(u,l,s,c,e[n+2],15,718787259),c=qe(c,u,l,s,e[n+9],21,-343485551),s=Nt(s,r),c=Nt(c,o),u=Nt(u,a),l=Nt(l,i);return[s,c,u,l]}function iu(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function us(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function Sp(e){return iu(ga(us(e),e.length*8))}function Ep(e,t){var n,r=us(e),o=[],a=[],i;for(o[15]=a[15]=void 0,r.length>16&&(r=ga(r,e.length*8)),n=0;n<16;n+=1)o[n]=r[n]^909522486,a[n]=r[n]^1549556828;return i=ga(o.concat(us(t)),512+t.length*8),iu(ga(a.concat(i),512+128))}function lu(e){var t="0123456789abcdef",n="",r,o;for(o=0;o<e.length;o+=1)r=e.charCodeAt(o),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function gs(e){return unescape(encodeURIComponent(e))}function cu(e){return Sp(gs(e))}function Cp(e){return lu(cu(e))}function uu(e,t){return Ep(gs(e),gs(t))}function Lp(e,t){return lu(uu(e,t))}function Ln(e,t,n){return t?n?uu(t,e):Lp(t,e):n?cu(e):Cp(e)}var An=[];async function dr(e,t){return await new Promise((n,r)=>{let o=e,a=1,i=indexedDB.open(o,a);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let c=i.result,u=t||"cache";c.createObjectStore(u,{keyPath:"key"})}})}async function fs(e){let t=`${he}-${e.service}@${e.from}->${e.to}`;return await kp(t,e)}async function ds(e){let t=Ln(e.originalText),n=`${he}-${e.service}@${e.from}->${e.to}`;return await Ap(n,t)}async function Ap(e,t){let n=await dr(e);return await new Promise((r,o)=>{if(!n)return o();let a="cache",s=n.transaction([a],"readonly").objectStore(a).get(t);s.onsuccess=c=>{n.close();let u=s.result;r(u)},s.onerror=c=>{n.close(),console.error("queryInDB->onerror:",c),o()}})}async function kp(e,t){let n=await dr(e);return(await ms()).includes(e)||await _p(e),await new Promise(o=>{if(!n)return o(!1);let a="cache",s=n.transaction([a],"readwrite").objectStore(a).put(t);s.onsuccess=c=>{n.close(),o(!0)},s.onerror=c=>{console.error("addInDB->onerror:",c),n.close(),o(!1)}})}async function _p(e){let t="cache_list",n=await dr(he+"-cacheList",t),o=n.transaction([t],"readwrite").objectStore(t).put({key:e});o.onsuccess=a=>{n.close(),An.push(e)},o.onerror=a=>{n.close(),console.error(a)}}async function ms(){if(An&&An.length>0)return An;let e=await dr(he+"-cacheList","cache_list");return An=await new Promise(t=>{let n="cache_list",o=e.transaction([n],"readonly").objectStore(n).getAllKeys();o.onsuccess=a=>{e.close(),t(o.result)},o.onerror=a=>{e.close(),console.error(a),t([])}}),An}async function ps(){try{let e=[];(await ms()).forEach(r=>{e.push(Mp(r))});let n=await Promise.all(e);return cs(n.reduce((r,o)=>r+o,0))}catch(e){return console.error(e),cs(0)}}async function Mp(e){let t=await dr(e),r=[...t.objectStoreNames].reduce((i,s)=>{let c=Pp(t,s);return i.push(c),i},[]),o=await Promise.all(r);return t.close(),o.reduce((i,s)=>i+s,0)}async function Pp(e,t){return await new Promise((n,r)=>{if(e==null)return r();let o=0,a=e.transaction([t]).objectStore(t).openCursor();a.onsuccess=i=>{let s=a.result;if(s){let c=s.value;o+=JSON.stringify(c).length,s.continue()}else n(o)},a.onerror=i=>r("error in "+t+": "+i)})}async function gu(){try{let t=(await ms()).map(r=>Rp(r));return!!(await Promise.all(t)).every(r=>r)}catch(e){return console.error("deleteAll error",e),!1}}async function Rp(e){return await new Promise(t=>{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>{t(!0)},n.onerror=r=>{t(!1)}})}var Ip=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Dp=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,Np=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,Op=/(\s+)|([\p{P}\p{S}])/gu,Fp=[["zh-CN",Ip],["ja",Dp],["ko",Np]];function fu(e){if(!e)return"auto";let t="auto",n=0,r=0,o=e.match(Op);o&&(r=o.reduce((i,s)=>i+s.length,0));let a=e.length-r;for(let i of Fp){let s=i[1],c=i[0],u=e.match(s),l=u?u.length:0;l>n&&(n=l,t=c)}return n*2.5/a>.5?t:"auto"}function mr(){try{return globalThis.self!==globalThis.top}catch{return!0}}var Hp=cr(),pr=Hp.PROD==="1";function du(e,t,n){let r=e.querySelectorAll("footer"),o=e.querySelectorAll("aside"),a=Array.from(r).concat(Array.from(o)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),c=[];for(let l of i)s.length>0&&s[0].contains(l)||c.push(l);for(let l=0;l<t.length;l++){let g=t[l].element;for(let d=l+1;d<t.length;d++){let m=t[d].element;if(g.contains(m))t.splice(d,1),d--;else if(m.contains(g)){t.splice(l,1),l--;break}else g===m&&(t.splice(d,1),d--)}}return t.filter(l=>{let g=l.element;if(l.reserve)return!0;let d=!1,m=!1;for(let p of a)if(g===p||p.contains(g)){d=!0;break}if(d)return!1;for(let p of c){if(g.nodeName==="H1")continue;let b=p.querySelector("h1");if(!(b&&bu(b.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(g===p||p.contains(g))){m=!0;break}}return!m}).map(l=>l.element)}function Ot(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function da(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function hs(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function hr(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function Ye(e,t){let n=[];for(let r of t){let o=e.querySelectorAll(r);for(let a of o)n.push(a)}return n}function Up(e,t){let n=function(a){return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE?a.nodeType===Node.ELEMENT_NODE&&Xe(a,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),o=!0;for(;r.nextNode();){let a=r.currentNode;if(a.nodeType===Node.ELEMENT_NODE){if(le(a,Ct)){if(o===!0)return!0;continue}if(!t.inlineTags.includes(a.nodeName))return!1}}return!0}function ut(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?le(e,Yt)||e.nodeName==="BR"?!1:le(e,Ct)?!0:Up(e,t):le(e,Ct):!1}function mu(e,t){for(let n of t)if(n===e)return!0;return!1}function pu(e,t){return!!t.metaTags.includes(e.nodeName)}function Xe(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:o}=t,a=[];return n&&o&&o.length>0?a=o||[]:a=o.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&le(e,at)?!0:e.nodeType===Node.ELEMENT_NODE&&le(e,Kt)?!1:!!a.includes(e.nodeName)}function hu(e,t,n,r){let o=yr(r),a=new RegExp(`^${o[0]}(\\d+)${o[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||xs(s)||bs(s)||ys(s)||a.test(s)?!1:bu(i,t,n)}function bu(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function bs(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function ys(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function xs(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function yu(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function le(e,t){return Bp(e,t,"1")}function Bp(e,t,n){return pr?e[Re]?!!(e[Re]&&e[Re][t]===n):!1:e.dataset[t]===n}function xu(e,t){return pr?e[Re]?!!(e[Re]&&e[Re][t]):!1:e.dataset[t]!==void 0}function br(e){return(e.innerText||e.textContent||"").trim()}function ma(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ce(e,t,n){e.isContentEditable||(e.dataset[Vo]||(e.dataset[Vo]="1"),pr?(e[Re]||(e[Re]={}),e[Re][t]||(e[Re][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function Tu(e,t){if(pr){if(!e[Re]||!e[Re][t])return;delete e[Re][t]}else delete e.dataset[t]}function Ft(e,t){return pr?!e[Re]||!e[Re][t]?void 0:e[Re][t]:e.dataset[t]}function kn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||le(e,Zr))&&(n=!0),n}function vu(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function yr(e){let{config:t}=e,n=_c;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function pa(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function wu(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function Tt(){if(!mr())return globalThis.location.href;try{let t=globalThis.location.href;if(new URL(t).protocol==="about:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let r="";try{r=globalThis.parent.location.href}catch{}return r||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function Ts(e,t){e.head.appendChild(e.createElement("style")).innerHTML=t}function vs(e){return e.getAttribute("src")?!1:!!(e.getAttribute("srcdoc")&&e.contentDocument&&e.contentDocument.body)}function ws(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:o,additionalInlineSelectors:a,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:c,globalStyles:u,stayOriginalTags:l,stayOriginalSelectors:g,globalAttributes:d}=t,m=Object.keys(u);if(m.length>0)for(let w of m){let P=Ye(document.body,[w]);for(let U of P)if(!le(U,Go)){ce(U,Go,"1");let R=u[w];U.style.cssText+=R}}let p=Object.keys(d);if(p.length>0)for(let w of p){let P=d[w],U=Object.keys(P),R=Ye(document.body,[w]);for(let _ of R)for(let H of U){let B=P[H];_.getAttribute(H)!==B&&(B===null?_.removeAttribute(H):_.setAttribute(H,B))}}let b=[...n,...r],x=[...o,...a],h=[...s],y=c.map(w=>w.toLowerCase()),S=i;Ye(document.body,b).forEach(w=>{le(w,at)||ce(w,at,"1")});let O=[];if(h.length>0&&(O=Ye(document.body,h).filter(w=>!le(w,rt))),y.length>0){let w=l.reduce((R,_)=>{let H=_.toLowerCase();return R.push(`<${H}>`,`</${H}>`,`<${H} />`),R},[]),P=[">http://",">https://"];w.push(...P);let U=Ye(document.body,y).filter(R=>{if(le(R,rt))return!1;{let H=R.innerHTML;return!w.some(z=>H.includes(z))}});O.push(...U)}O.forEach(w=>{le(w,rt)||ce(w,rt,"1")});let v=[];if(x.length>0)for(let w of e)v.push(...Ye(w,x));v.forEach(w=>{ce(w,Ct,"1")});let E=[];if(S.length>0)for(let w of e)E.push(...Ye(w,S));E.forEach(w=>{ce(w,Yt,"1")});let N=[];if(g.length>0)for(let w of e)N.push(...Ye(w,g));N.forEach(w=>{ce(w,Zr,"1")})}function Su(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function Eu(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await it({text:br(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=It(document.documentElement.lang)),e}function Ss(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,o=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let c=e.matches(s),u=[];c?u=[e]:u=e.querySelectorAll(s);for(let l of u)le(l,Kt)||ce(l,Kt,"1");return Array.from(u)}).flat();o.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let g=Ye(e,n.additionalSelectors);for(let d of g)le(d,Kt)||ce(d,Kt,"1");o.push(...g.map(d=>({element:d,reserve:!0})))}let i=Ye(e,["article"]);o.push(...i.map(g=>({element:g,reserve:!0})));let s;if(o.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let g=Array.from(s);o=o.concat(g.map(d=>({element:d,reserve:!0})))}let c=[],u=g=>{if(g.nodeType===Node.ELEMENT_NODE&&Xe(g,t.rule,!1))return NodeFilter.FILTER_REJECT;if(g.nodeType===Node.TEXT_NODE&&(g.textContent?g.textContent.trim():"").length>=n.containerMinTextCount){let m=g.parentNode;m&&m.parentNode&&(m=m.parentNode),m&&m.nodeType===Node.ELEMENT_NODE&&(c.includes(m)||c.push(m))}return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;l.nextNode(););o.push(...c.map(g=>({element:g,reserve:!1})))}let a=du(e,o,n);return a.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),a}var Es=[];function Cu(e){Es.push(e)}function Cs(){Es.forEach(e=>e()),Es=[]}var Au="auto",ha="auto",Lu="auto";function ku(e){Au=e}function _n(e){ha=e}function xr(){return ha!=="auto"?ha:Lu!=="auto"?Lu:Au}function ba(){return ha}function gt(e,t,n,r){let o=[],{rule:a}=r,i=yr(r);if(e.length===0)return null;e=e.map(x=>x.element?x:{element:x});let s="",c=!1;for(let x=0;x<e.length;x++){let y=e[x].element;if(typeof y=="string"){s+=y;continue}let S="";pa(y,`[${at}]`)?S=$p(y):S=y.innerText;let A=S.startsWith(" "),O=S.endsWith(" ");y.tagName==="A"&&(A=!0,O=!0);let v=kn(y,a);if(S===""||v){v&&(A=!0,O=!0);let E={type:"element",value:y};o.push(E);let N=o.length-1,w=`${i[0]}${N}${i[1]}`;s+=(A?" ":"")+w+(O?" ":"");continue}if(!Xe(y,a,!0)){{let E=t?S:S.trim().replace(/\n/g," ");if(bs(E)||ys(E)||xs(E)||yu(E)){let N={type:"element",value:y};o.push(N);let w=o.length-1,P=`${i[0]}${w}${i[1]}`;s+=(A?" ":"")+P+(O?" ":"")}else c=!0,s+=(A?" ":"")+E+(O?" ":"")}if(typeof y!="string"){let E=hr(y.nextSibling,t);E&&(s+=E)}}}if(!c)return null;let u=!1,l=s.split(" ").length,g=s.split(`
`).length;l<=a.blockMinWordCount&&s.length<=a.blockMinTextCount&&g<2&&(u=!0);let d=e.map(x=>x.element),m=Ot(e),p=!1;if(m){let h=globalThis.getComputedStyle(m).writingMode;p=h?h.includes("vertical"):!1}let b={rootFrame:n,isVertical:p,elements:d,text:s,variables:o,inline:u,preWhitespace:t};return hu(b,r.state.translationArea==="body"?2:a.paragraphMinTextCount,r.state.translationArea==="body"?1:a.paragraphMinWordCount,r)?b:null}function $p(e){let t="",n=o=>o.nodeType===Node.ELEMENT_NODE?le(o,at)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:o.nodeType===Node.TEXT_NODE?(o.textContent&&o.textContent.trim()!==""&&(t+=o.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var jp=1,Qt=new Map;function Pu(){return Qt}function Zt(e){return Qt.get(e)}function Tr(e,t){Qt.set(e,t)}function Ru(){Qt.clear()}function _u(e){if(!le(e,Gt))return!1;if(le(e,Tn))return!0;let t=Ft(e,Jt);if(!t)return!1;let n=parseInt(t),r=Qt.has(n);if(!r){let o=document.getElementById(`${ot}-${n}`);o&&o.remove()}return r}function At(e,t){let n={...e,id:jp++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(ce(r,Gt,"1"),ce(r,Jt,`${n.id}`))}),t.push(n),Qt.set(n.id,{...n,state:"Original",observers:[]})}async function Iu(e,t,n){let r=[],{targetLanguage:o,rule:a}=n;for(let d of t){if(Xe(d,a,!1))continue;let m=le(d,vn),p=[];if(le(d,rt)){if(!_u(d)){let y=gt([d],!0,e,n);y&&At(y,r)}continue}let b=y=>{if(!(y.nodeType===Node.TEXT_NODE||y.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(y.nodeType===Node.ELEMENT_NODE){let S=y;if(S.isContentEditable||_u(y))return NodeFilter.FILTER_REJECT;if(ce(S,Gt,"1"),le(S,rt)){if(p.length>0){let O=gt([...p],m,e,n);O&&At(O,r),p.length=0}p.push(S);let A=gt([...p],m,e,n);return A&&At(A,r),p.length=0,NodeFilter.FILTER_REJECT}}if(Xe(y,a,!0)){if((y.nodeName==="CODE"||y.nodeName==="TT")&&y.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(ut(y,a))return Mu(y,p,r,m,e,n),NodeFilter.FILTER_REJECT;if(p.length>0){let S=gt([...p],m,e,n);S&&At(S,r),p.length=0}return NodeFilter.FILTER_REJECT}return y.nodeName==="PRE"?(y.classList.contains("code"),NodeFilter.FILTER_REJECT):ut(y,a)?(Mu(y,p,r,m,e,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},x=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,b),h=x.nextNode();for(;h;){if(p.length>0){let y=gt([...p],m,e,n);y&&At(y,r),p.length=0}h=x.nextNode()}if(p.length>0){let y=gt([...p],m,e,n);y&&At(y,r),p.length=0}}let i=r.map(d=>{let{text:m}=d;return it({text:m})}),s=await Promise.all(i),c=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],l="auto";n.state.isDetectParagraphLanguage||(l=ba());let g=xr();return s.forEach((d,m)=>{let p=d;p==="auto"&&(p=g);let b={...r[m],languageByLocal:p,languageByClient:l||"auto"};if(Qt.set(b.id,{...b,state:"Original",observers:[]}),!fr(d,o)){if(u.length>0&&u.some(y=>fr(d,y)))return;c.push(b)}}),c}function zp(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),o=null,a=!1;for(;o=r.nextNode();){let s=o.textContent||"",c=s.trim();if(!a&&s.length>0&&c.length===0){a=!0,n.push(" ");continue}c.length>0&&(n.push(o.parentElement),a=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=hr(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=hr(e.nextSibling,t);s&&n.push(s)}return n}function Mu(e,t,n,r,o,a){let i=e.previousElementSibling;if(i&&!ut(i,a.rule)&&t.length>0){let c=gt([...t],r,o,a);c&&At(c,n),t.length=0}Xe(e,a.rule,!1)?pu(e,a.rule)||t.push(e):kn(e,a.rule)?t.push(e):pa(e,["code","tt"])?t.push(...zp(e,r)):t.push(e)}async function Fu(e,t,n,r){let o=[],{rule:a}=n;for(let i=0;i<t.length;i++){let s=t[i],c=r[i];if(!c)throw new Error("targetContainer is null");let u=[],l=!0,g=null,d=function(b){let x=b;if(["DIV","BR"].includes(x.nodeName))return l=!0,NodeFilter.FILTER_REJECT;if(x.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(qp(b))return NodeFilter.FILTER_REJECT;if(ce(x,Gt,"1"),ut(x,a)){let h=Ot(u),y=globalThis.getComputedStyle(x);if(!h)u.push(Ou(x,y));else{let S=globalThis.getComputedStyle(h),A=Ls(S),O=Ls(y),v=Nu(O,A),E=!1;if(l&&g&&Nu(O,g).left>=1.5&&g.left>-3&&(E=!0),!E&&l){let w=(x.innerText||x.textContent||"").trim();(w.startsWith("\u2022")||w.charCodeAt(0)===61623||/^\d+\./.test(w))&&(E=!0)}!E&&l&&Ot(u)&&da(u).reduce((U,R)=>{let _=Ls(globalThis.getComputedStyle(R));return Math.max(U,_.right)},0)-A.right>a.pdfNewParagraphIndentRightIndentPx&&(E=!0),l&&(g=O,l=!1),E||(E=Wp(v,a)),E&&Du(u,o,e,n,c),u.push(Ou(x,y)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},m=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,d),p=m.nextNode();for(;p;)p=m.nextNode();Du(u,o,e,n,c)}return o}function Du(e,t,n,r,o){if(e.length>0){let a=gt([...e],!1,n,r);a&&(a.isPdf=!0,a.targetContainer=o,a.inline=!1,At(a,t)),e.length=0}}function Ls(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function Wp(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<=t.pdfNewParagraphLineHeight*-1}function Nu(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Ou(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function qp(e){if(!le(e,Gt))return!1;if(le(e,Tn))return!0;let t=Ft(e,Jt);if(!t)return!1;let n=parseInt(t),o=Pu().has(n);if(!o){let a=document.getElementById(`${ot}-${n}`);a&&a.remove()}return o}function Hu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function As(e,t,n=[],r,o){let a=["notranslate"];return r&&a.push(Ic),e&&(a.push(`${he}-target-translation-theme-${e}`),t?a.push(`${Xo}-theme-${e}`):a.push(`${Yo}-theme-${e}`)),n.length>0&&a.push(...n),t?a.push(Xo):(a.push(Yo),o&&a.push(Rc)),a}function ks(e){let t=["notranslate",Mc];return e&&t.push(`${he}-target-translation-theme-${e}-inner`),t}function Uu(e,t,n){let{rule:r,translationTheme:o}=n,{variables:a,isVertical:i}=e;a=a||[];let{text:s}=t,{wrapperPrefix:c,wrapperSuffix:u}=r,l=yr(n),g="afterend",d=new RegExp(`${l[0]}(\\d+)${l[1]}`,"g"),m=0,p=Hu(s);a.length>0&&(p=p.replace(d,y=>{let S=p.indexOf(y),A=p[S-1]===" ",O=p[S+y.length]===" ",v=a[Number(m)];if(m++,v.type==="element"){let E=v.value.outerHTML;return A||(E=" "+E),O||(E=E+" "),E}else j.error("variable type not supported",v);return y}));let b=As(o,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf);i&&b.push(Pc);let x=ks(o),h="";return r.translationBlockStyle&&(h=`style="${r.translationBlockStyle}"`),p=`<span ${h} class="${b.join(" ")}"><span class="${x.join(" ")}">${p}</span></span>`,e.inline||(c==="smart"?p=`<br>${p}`:p=`${c}${p}`,u==="smart"?p=`${p}`:p=`${p}${u}`),e.inline&&(p=`<span class="notranslate">&nbsp;</span>${p}`),{html:p,position:g}}function $u(e,t){let n=[];for(let r of e){if(le(r,rt))continue;if(ce(r,Wo,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let a=s=>s.nodeType===Node.ELEMENT_NODE&&Xe(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&Ms(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,a);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let a=r.querySelectorAll("pre");for(let i of a)Bu(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(xu(r,vn)||(Vp(r)?(ce(r,vn,"1"),t.isTransformPreTagNewLine&&Bu(r)):ce(r,vn,"0"))),_s(0,r,t,n)}return{hiddenElements:n}}function _s(e,t,n,r=[]){if(le(t,rt))return;let o=!1;if(e===0){let a=kn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&ut(t,n)&&!a&&(o=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let a of t.childNodes)if(a.nodeType===Node.ELEMENT_NODE){if(Xe(a,n,!1))continue;{let i=globalThis.getComputedStyle(a),s=!1;if(i.display==="none"&&(r.push(a),s=!0),!s){let c=i.clip,u=i.zIndex,l=i.height,g=i.width,d=0;if(u.startsWith("-")){let m=parseInt(u);isNaN(m)||(d=m)}if((c==="rect(1px, 1px, 1px, 1px)"||d<0)&&(s=!0),!s&&a.nodeName!=="BR"){let m=parseInt(l),p=parseInt(g);!isNaN(m)&&!isNaN(p)&&(m>0&&m<8||p>0&&p<=8)&&(s=!0)}}if(s){ce(a,at,"1");continue}else{if(a.nodeName==="DIV"||vu(a,n)){if((i.display==="inline"||i.display==="inline-flex")&&!le(a,Yt)){ce(a,Ct,"1");continue}}else if((a.nodeName==="SPAN"||a.nodeName==="A")&&!i.display.startsWith("inline")){le(a,Ct)||(ce(a,Yt,"1"),_s(e+1,a,n,r));continue}if(ut(a,n)&&!o)continue;_s(e+1,a,n,r)}}}else if(a.nodeType===Node.TEXT_NODE){let i=a.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");a.after(s),s.appendChild(a)}}}}function Vp(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Bu(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function Ms(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let c=n.lastIndexOf(s,t);return c>i?c:i},-1);if(a===-1)n.length>t+20&&Ms(e,t+20);else{let i=n.slice(a+1);a++,i.startsWith(" ")&&a++;let s=e.splitText(a),c=document.createElement("br");s.parentNode?.insertBefore(c,s),a+1<n.length&&Ms(s,t)}}function ju(e,t){let n=[];for(let r of e){let o=0,a=1e5,i=document.createElement("div"),s=l=>{let g=l;if(["DIV","BR"].includes(g.nodeName))return NodeFilter.FILTER_REJECT;if(g.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(g.nodeName==="SPAN"){let d=g.getBoundingClientRect(),m=globalThis.getComputedStyle(g),p=d.right,b=d.left,x=m.top.slice(0,-2),h=m.fontSize.slice(0,-2);return p>o&&(o=p),b<a&&(a=b),ce(g,ir,`${b}`),ce(g,ea,`${p}`),ce(g,Ac,x),ce(g,kc,h),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;c.nextNode(););let u=o-a;u<600&&(u=600),n.push(i),i.style.left=o+"px",i.style.width=o+"px",i.classList.add(na),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var zu=["*://*/*","*","*://*"],qu="immersive-translate-wildcard-placeholder.com";function Ps(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>zu.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let o=r.href,a=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let c=s;if(s===a)return!0;if(zu.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===a:Gp(o,s)}catch{}return!1}else{let u,l=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let g=s.replace(/\*/g,qu),d;try{d=new URL(g)}catch{return j.debug("invalid match pattern",g,"raw match value:",l),!1}let m=d.hostname,p=d.pathname;p==="/"&&(l.replace("://","").includes("/")||(p="/*"));let b=Kp(u+":",Wu(m),Wu(p));if(b){let x=new URL(o);return x.port="",b.test(x.href)}else return!1}});if(i)return i}return null}function Wu(e){return e.replace(qu,"*")}function Kp(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function Mn(e,t){return Ps(e,t)!==null}function Gp(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}var Pn="input is invalid type",Rs=typeof window=="object",Ht=Rs?window:{};Ht.JS_SHA256_NO_WINDOW&&(Rs=!1);var Jp=!Rs&&typeof self=="object",Yp=!Ht.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Yp?Ht=global:Jp&&(Ht=self);var nw=!Ht.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,rw=typeof define=="function"&&define.amd,vr=!Ht.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",F="0123456789abcdef".split(""),Xp=[-2147483648,8388608,32768,128],ft=[24,16,8,0],ya=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],xa=["hex","array","digest","arrayBuffer"],De=[];(Ht.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});vr&&(Ht.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Vu=function(e,t){return function(n){return new Ne(t,!0).update(n)[e]()}},Gu=function(e){var t=Vu("hex",e);t.create=function(){return new Ne(e)},t.update=function(o){return t.create().update(o)};for(var n=0;n<xa.length;++n){var r=xa[n];t[r]=Vu(r,e)}return t},Ku=function(e,t){return function(n,r){return new Ta(n,t,!0).update(r)[e]()}},Ju=function(e){var t=Ku("hex",e);t.create=function(o){return new Ta(o,e)},t.update=function(o,a){return t.create(o).update(a)};for(var n=0;n<xa.length;++n){var r=xa[n];t[r]=Ku(r,e)}return t};function Ne(e,t){t?(De[0]=De[16]=De[1]=De[2]=De[3]=De[4]=De[5]=De[6]=De[7]=De[8]=De[9]=De[10]=De[11]=De[12]=De[13]=De[14]=De[15]=0,this.blocks=De):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Ne.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(Pn);if(vr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!vr||!ArrayBuffer.isView(e)))throw new Error(Pn)}else throw new Error(Pn);t=!0}for(var r,o=0,a,i=e.length,s=this.blocks;o<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(a=this.start;o<i&&a<64;++o)s[a>>2]|=e[o]<<ft[a++&3];else for(a=this.start;o<i&&a<64;++o)r=e.charCodeAt(o),r<128?s[a>>2]|=r<<ft[a++&3]:r<2048?(s[a>>2]|=(192|r>>6)<<ft[a++&3],s[a>>2]|=(128|r&63)<<ft[a++&3]):r<55296||r>=57344?(s[a>>2]|=(224|r>>12)<<ft[a++&3],s[a>>2]|=(128|r>>6&63)<<ft[a++&3],s[a>>2]|=(128|r&63)<<ft[a++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++o)&1023),s[a>>2]|=(240|r>>18)<<ft[a++&3],s[a>>2]|=(128|r>>12&63)<<ft[a++&3],s[a>>2]|=(128|r>>6&63)<<ft[a++&3],s[a>>2]|=(128|r&63)<<ft[a++&3]);this.lastByteIndex=a,this.bytes+=a-this.start,a>=64?(this.block=s[16],this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Ne.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=Xp[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Ne.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,c=this.blocks,u,l,g,d,m,p,b,x,h,y,S;for(u=16;u<64;++u)m=c[u-15],l=(m>>>7|m<<25)^(m>>>18|m<<14)^m>>>3,m=c[u-2],g=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,c[u]=c[u-16]+l+c[u-7]+g<<0;for(S=t&n,u=0;u<64;u+=4)this.first?(this.is224?(x=300032,m=c[0]-1413257819,s=m-150054599<<0,r=m+24177077<<0):(x=704751109,m=c[0]-210244248,s=m-1521486534<<0,r=m+143694565<<0),this.first=!1):(l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),g=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),x=e&t,d=x^e&n^S,b=o&a^~o&i,m=s+g+b+ya[u]+c[u],p=l+d,s=r+m<<0,r=m+p<<0),l=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),g=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),h=r&e,d=h^r&t^x,b=s&o^~s&a,m=i+g+b+ya[u+1]+c[u+1],p=l+d,i=n+m<<0,n=m+p<<0,l=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),g=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),y=n&r,d=y^n&e^h,b=i&s^~i&o,m=a+g+b+ya[u+2]+c[u+2],p=l+d,a=t+m<<0,t=m+p<<0,l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),g=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),S=t&n,d=S^t&r^y,b=a&i^~a&s,m=o+g+b+ya[u+3]+c[u+3],p=l+d,o=e+m<<0,e=m+p<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0,this.h5=this.h5+a<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};Ne.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,c=F[e>>28&15]+F[e>>24&15]+F[e>>20&15]+F[e>>16&15]+F[e>>12&15]+F[e>>8&15]+F[e>>4&15]+F[e&15]+F[t>>28&15]+F[t>>24&15]+F[t>>20&15]+F[t>>16&15]+F[t>>12&15]+F[t>>8&15]+F[t>>4&15]+F[t&15]+F[n>>28&15]+F[n>>24&15]+F[n>>20&15]+F[n>>16&15]+F[n>>12&15]+F[n>>8&15]+F[n>>4&15]+F[n&15]+F[r>>28&15]+F[r>>24&15]+F[r>>20&15]+F[r>>16&15]+F[r>>12&15]+F[r>>8&15]+F[r>>4&15]+F[r&15]+F[o>>28&15]+F[o>>24&15]+F[o>>20&15]+F[o>>16&15]+F[o>>12&15]+F[o>>8&15]+F[o>>4&15]+F[o&15]+F[a>>28&15]+F[a>>24&15]+F[a>>20&15]+F[a>>16&15]+F[a>>12&15]+F[a>>8&15]+F[a>>4&15]+F[a&15]+F[i>>28&15]+F[i>>24&15]+F[i>>20&15]+F[i>>16&15]+F[i>>12&15]+F[i>>8&15]+F[i>>4&15]+F[i&15];return this.is224||(c+=F[s>>28&15]+F[s>>24&15]+F[s>>20&15]+F[s>>16&15]+F[s>>12&15]+F[s>>8&15]+F[s>>4&15]+F[s&15]),c};Ne.prototype.toString=Ne.prototype.hex;Ne.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,o>>24&255,o>>16&255,o>>8&255,o&255,a>>24&255,a>>16&255,a>>8&255,a&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||c.push(s>>24&255,s>>16&255,s>>8&255,s&255),c};Ne.prototype.array=Ne.prototype.digest;Ne.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function Ta(e,t,n){var r,o=typeof e;if(o==="string"){var a=[],i=e.length,s=0,c;for(r=0;r<i;++r)c=e.charCodeAt(r),c<128?a[s++]=c:c<2048?(a[s++]=192|c>>6,a[s++]=128|c&63):c<55296||c>=57344?(a[s++]=224|c>>12,a[s++]=128|c>>6&63,a[s++]=128|c&63):(c=65536+((c&1023)<<10|e.charCodeAt(++r)&1023),a[s++]=240|c>>18,a[s++]=128|c>>12&63,a[s++]=128|c>>6&63,a[s++]=128|c&63);e=a}else if(o==="object"){if(e===null)throw new Error(Pn);if(vr&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!vr||!ArrayBuffer.isView(e)))throw new Error(Pn)}else throw new Error(Pn);e.length>64&&(e=new Ne(t,!0).update(e).array());var u=[],l=[];for(r=0;r<64;++r){var g=e[r]||0;u[r]=92^g,l[r]=54^g}Ne.call(this,t,n),this.update(l),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}Ta.prototype=new Ne;Ta.prototype.finalize=function(){if(Ne.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Ne.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Ne.prototype.finalize.call(this)}};var Rn=Gu();Rn.sha256=Rn;Rn.sha224=Gu(!0);Rn.sha256.hmac=Ju();Rn.sha224.hmac=Ju(!0);var Yu=Rn;var Xu=Yu.sha256;function dt(e){return Promise.resolve(Xu(e))}function va(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function Ut(e,t){let n=Xu.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Qu(e,t){let n=await Ut(e,t);return va(n)}async function wa(e,t){let n=Qp(t),r=await Ut(e,n);return va(r)}function Qp(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}async function kt(e){let{url:t,config:n,state:r}=e,o=new URL(t),a="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:c,translationTheme:u,translationThemePatterns:l,translationUrlPattern:g,targetLanguage:d,sourceLanguageUrlPattern:m,immediateTranslationPattern:p}=n,b=In(t,i),x=In(t,p),h=s,y=Object.keys(c);for(let I of y){let D=c[I];if(In(t,D)){h=I;break}}let S=u,A=Object.keys(l);for(let I of A){let D=l[I];if(In(t,D)){S=I;break}}let O=In(t,g),v=Zp(t,g);v||(v=Mn(t,Oc));let E=Object.keys(m),N={};for(let I of E){let D=m[I];if(D&&D.matches)for(let te of D.matches)N[te]=I}let w=Object.keys(N),P=Ps(t,w);P&&(a=N[P]??"auto",N[P]&&N[P]!=="auto"&&_n(N[P]));let U=d||"zh-CN",R=o.hostname,_=await dt(R),H=o.pathname+o.search+o.hash,B=await dt(H),z=`https://${_}.com/${B}`,Z=await ur(),ee=n.translationStartMode;ee==="dynamic"&&x&&(ee="immediate");let L={targetLanguage:U,config:n,translationService:h,translationTheme:S,isTranslateUrl:O,sourceLanguage:a,isTranslateExcludeUrl:v,rule:n.generalRule,url:t,encryptedUrl:z,state:r||{translationArea:n.translationArea,translationStartMode:ee,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:b},localConfig:Z};L.state.translationArea==="body"&&(L.config.generalRule.excludeTags=L.config.generalRule.excludeTags.filter(I=>I!=="BUTTON"&&I!=="LABEL"),L.config.generalRule.additionalExcludeSelectors=L.config.generalRule.additionalExcludeSelectors.filter(I=>I!==".btn")),L.translationService==="d"&&(n.immediateTranslationTextCount=0);let $=n.rules,Q;globalThis.PDFViewerApplication?Q=$.find(I=>I.isPdf):Q=$.find(I=>In(t,I));let C=n.generalRule;return Q&&(L.rule=ua(C,Q)),L.rule.isPdf&&(L.state.translationArea="main"),L.state.translationArea==="body"&&(L.rule.paragraphMinTextCount=1,L.rule.paragraphMinWordCount=1),L}function In(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:o,excludeSelectorMatches:a}=t;return r&&r.length>0&&Mn(e,r)?!1:n&&n.length>0&&Mn(e,n)?!0:a&&a.length>0&&ma(a)?!1:!!(o&&o.length>0&&ma(o))}function Zp(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&Mn(e,n)||r&&r.length>0&&ma(r))}var Ea="Original",Sa=[],Os=new Set,Is=[],Ca=[],eg=[],La=[],Zu=Tt().split("#")[0],Fs=0,_e,eh=Ir(lh,300),th=Ir(rg,200),Hs=cr(),nh=Hs.PROD==="1",Dn,wr=new Map,tg,Sr="";async function ng(){vt()==="Original"?await Bt():(vt()==="Translated"||vt()==="Error")&&Nn()}function Nn(){Cs();let e=[document.body,...wr.keys()];for(let t of e)Ns(t),t.querySelectorAll("."+ot).forEach(a=>{a.remove()}),t.querySelectorAll("."+na).forEach(a=>{a.remove()}),t.querySelectorAll("["+Ko+"]").forEach(a=>{if(nh)delete a[Re];else{let s=Object.keys(a.dataset).filter(c=>c.startsWith(me));for(let c of s)delete a.dataset[c]}a.removeAttribute(Ko)});cg(),Ve("Translating"),Sr&&(document.title=Sr),Ve("Original")}function rh(e,t){let n=!1,r=hs(e.elements),o=Ot(e.elements);Os.add(e.id);let a=[];if(r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Ca.push(s),a.push(s),s.observe(r)}if(o&&o!==r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});Ca.push(s),a.push(s),s.observe(o)}let i=Zt(e.id);i&&(i.observers=a,Tr(e.id,i))}function ah(e,t){if(e){let n=new ResizeObserver((r,o)=>{for(let a of r)a.contentRect.width>10&&(o.disconnect(),t(a.target))});n.observe(e),eg.push(n)}}async function rg(e){let t=[...La];La=[];let n=new Map;t.forEach(r=>{n.has(r.rootFrame)||n.set(r.rootFrame,[]),n.get(r.rootFrame)?.push(r.element)});for(let[r,o]of n)try{let a=[];for(let i of o){let s=Ss(i,e);if(s.length===0)continue;let c=s;a.push(...c)}await Bs(a,r,e)}catch(a){j.error(`translateNewDynamicNodes error: ${a.message}`)}}function Ds(e,t){Os.delete(e.id);let n=Zt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(a=>{a.disconnect()}),n.observers=[],n.state="Translating",Tr(e.id,n));let r=e.id;Fs+=e.text.length;let o=da(e.elements);if(e.isPdf){let a=hs(e.elements),i=globalThis.getComputedStyle(a),s=i.top,c=i.fontSize,u=parseFloat(c.slice(0,-2));isNaN(u)||u>20&&(c="20px");let l=e.targetContainer,g=document.createElement("span");o.length===1&&(g.style.fontSize=c),g.id=`${ot}-${r}`,g.style.top=s;let d=Ft(a,ir),m=o.reduce((x,h)=>{let y=Ft(h,ir);return y&&y<x?y:x},1e3),b=o.reduce((x,h)=>{let y=Ft(h,ea);return y&&y>x?y:x},0)-m;b<30,b>600&&(b=600),d<200&&(d=10),d&&d<0&&(d=0),g.style.left=`${m||10}px`,m<400?g.style.width=b+"px":g.style.width=`calc(100% - ${m}px)`,g.classList.add("notranslate",`${ot}`),l.appendChild(g)}else{let a=Ot(e.elements),i="afterend";e.elements.length>0&&a&&(o.length===1?i="beforeend":ut(e.elements[0],t.rule)||(i="beforeend")),t.rule.insertPosition&&(i=t.rule.insertPosition);let s=document.createElement("span");if(s.classList.add("notranslate",ot),s.id=`${ot}-${r}`,s.innerHTML=sh(),i==="beforeend"){let c=wu(a);c?c.appendChild(s):a.appendChild(s)}else if(i==="afterend")a.insertAdjacentElement(i,s);else throw new Error("not support position")}Sa.push(r),eh(t)}function oh(e,t){t.state.translationStartMode==="dynamic"&&Fs>t.config.immediateTranslationTextCount?rh(e,n=>{Ds(n,t)}):Ds(e,t)}async function Bt(){if(Ea==="Translating")return;Ve("Translating");let e=await en(Tt());if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),a=new URL(e.url).hostname,i=e.localConfig.tempTranslationUrlMatches||[],s=i.findIndex(u=>u.match===a&&u.expiredAt>r),c=!1;s>-1||(i.push({match:a,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),c=!0),c&&await gr({...e.localConfig,tempTranslationUrlMatches:[...i]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),j.debug("ctx",e),e.state.isNeedClean?Nn():_e.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Cu(()=>{Fs=0,Ru(),Ca.forEach(r=>{r.disconnect()}),eg.forEach(r=>{r.disconnect()}),Ca=[],Os.clear()}),Ve("Translating");try{let r=[document.body];document.querySelectorAll("iframe").forEach(i=>{vs(i)&&(r.push(i.contentDocument.body),Ts(i.contentDocument,Hs.IMMERSIVE_TRANSLATE_INJECTED_CSS))}),e.rule.shadowRootSelectors&&e.rule.shadowRootSelectors.length>0&&Ye(document.body,e.rule.shadowRootSelectors).forEach(s=>{s.shadowRoot&&s.shadowRoot.mode==="open"&&r.push(s.shadowRoot)});let a=0;Ve("Translating"),j.debug("allFrames",r);for(let i of r)a+=await ag(i,e);a===0&&Ve("Translated"),lg(e).catch(i=>{j.error("translateTitle error:",i.name,i.message,i.details||"")}),uh(e)}catch(r){Ve("Error"),j.error(r)}}async function ag(e,t){ws([e],t.rule);let n=Ss(e,t);j.debug("detect containers",n);let{rule:r}=t;n.length>0&&await Bs(n,e,t);let o=ch(e,r,t);return e===document.body?tg=o:wr.set(e,o),n.length}async function en(e){let t=await ug();if(!_e)_e=await kt({url:e,config:t});else{let n={url:e,config:t,state:_e.state};_e=await kt(n)}return _e}async function og(){vt()==="Original"?await Aa():(vt()==="Translated"||vt()==="Error")&&(_e=await en(Tt()),_e.state.translationArea!=="main"?await Aa():Nn())}async function Aa(){_e=await en(Tt()),_e.state.translationArea="main",await Bt()}async function Us(){_e=await en(Tt()),_e.state.translationArea="body",await Bt()}async function sg(){vt()==="Original"?await Us():(vt()==="Translated"||vt()==="Error")&&(_e=await en(Tt()),_e.state.translationArea!=="body"?(_e.state.translationArea="body",await Bt()):Nn())}async function ig(){_e=await en(Tt()),_e.state.translationArea="body",_e.state.translationStartMode="immediate",await Bt(),await rg(_e)}async function lg(e){let t=document.title;if(!t||t.includes(ta))return;Sr!==t&&(Sr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=ba()),n==="auto"){let r=await it({text:t});if(fr(r,e.targetLanguage))return}try{let r=await dg({id:0,url:e.url,text:t,from:n,to:e.targetLanguage,fromByClient:n},e);r&&r.text&&(document.title=Sr+ta+r.text)}catch(r){throw r}}function sh(){return`&nbsp;<span class="${he}-loading notranslate"></span>`}async function Bs(e,t,n){let{rule:r}=n;ws(e,r);let o=[];if(n.rule.isPdf)e.length>0&&(Ve("Translating"),o=ju(e,r).targetContainers);else{Ve("Translating");let i=$u(e,r),{hiddenElements:s}=i;for(let c of s)ah(c,()=>{Tu(c,at),Bs([c],t,n)});Ve("Translating")}let a=[];if(n.rule.isPdf?a=await Fu(t,e,n,o):(e=e.filter(i=>!Xe(i,r,!1)),a=await Iu(t,e,n)),Ve("Translating"),a.length===0){Ve("Translated");return}j.debug("detect paragraphs",a);for(let i of a)oh(i,n);Ve("Translated")}function ih(e,t,n,r){let o=Zt(n.id);if(o&&(e||!t)){e||(j.error("translate error",t),e=new Error("no response from server"));let a=n.id,i=o.rootFrame.querySelector(`#${ot}-${a}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),o&&(o.state="Error",Tr(o.id,o));let c=`<span class="${he}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${he}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${he}-clickable-button notranslate" data-${he}-paragraph-id="${a}" data-${he}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=c)}else{let a=Zt(n.id);if(a){a.state="Translated",Tr(a.id,a);let i=Uu(a,t,r),s=t.id,c=a.rootFrame.querySelector(`#${ot}-${s}`);c&&(c.innerHTML=i.html,a.rootFrame.querySelectorAll(`[${Jt}="${s}"]`).forEach(l=>{ce(l,Tn,"1")}))}else j.error("paragraph not found",n.id)}}async function lh(e){if(Sa.length===0)return Promise.resolve();let t=[...Sa];Sa=[];let n="auto";e.state.isDetectParagraphLanguage||(n=xr());let r={sentences:t.filter(a=>Zt(a)).map(a=>{let i=Zt(a),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){Ve("Translating");try{await $s(r,e,(a,i,s)=>{ih(a,i,s,e)})}catch(a){Ve("Error"),j.error("translateCurrentQueue error",a.name,a.message,a.details||" ");return}}Ve("Translated")}function Ve(e){Ea=e,fg(Ea)}function ch(e,t,n){j.debug("enableMutatinObserver for ",e),Ns(e),Is=[],La=[];let r=t.inlineTags.concat(t.excludeTags).concat("#text","BR"),o=new MutationObserver(function(a){a.forEach(i=>{if(e===document.body){let s=Tt();if(s.split("#")[0]!==Zu&&t.observeUrlChange){Zu=s.split("#")[0],Cs(),Ns(e),cg(),setTimeout(()=>{j.debug("url changed, reinit page"),fh()},t.urlChangeDelay);let u=new Event(Cc);document.dispatchEvent(u);return}}i.addedNodes.forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let c=s;if(c.nodeName==="IFRAME")vs(c)&&setTimeout(()=>{Ts(c.contentDocument,Hs.IMMERSIVE_TRANSLATE_INJECTED_CSS),ag(c.contentDocument.body,n).catch(u=>{j.error("translateFrame error",u.details||" ",u)})},n.rule.urlChangeDelay);else if(gh(t,c)||!r.includes(c.nodeName)){if(c.classList.contains("notranslate"))return;mu(c,Is)||(La.push({element:c,rootFrame:e}),Is.push(c),th(n))}}})})});return o.observe(e,{childList:!0,subtree:!0}),o}function uh(e){let t=document.querySelector("title");t&&(Dn=new MutationObserver(function(n){n.length>0&&(n[0].target.text.includes(ta)||lg(e).catch(o=>{j.error("translateTitle error:",o.name,o.message,o.details||"")}))}),Dn.observe(t,{subtree:!0,characterData:!0,childList:!0}))}function gh(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function fh(){let e=mr(),t=await en(Tt());t.rule.urlChangeDelay&&await dn(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?(xe()?n=await it({text:br(document.body).slice(0,1e3)}):e?n=await it({text:br(document.body).slice(0,1e3)}):n=await gg(),n==="auto"&&(n=await Eu()),ku(n)):_n(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(j.debug(`detect page language: ${n}`),Su(n,t.config.translationLanguagePattern)&&(r=!0,j.debug(`match language pattern ${n}, auto translate`))),r?(_e.state.isAutoTranslate=!0,await Bt()):j.debug("do not auto translate",t)}function Ns(e){if(wr.has(e)){let t=wr.get(e);t.disconnect(),t.takeRecords(),wr.delete(e)}else if(e===document.body){let t=tg;t&&(t.disconnect(),t.takeRecords())}}function cg(){Dn&&(Dn.disconnect(),Dn.takeRecords(),Dn=void 0)}function vt(){return Ea}var Er=new Map,On=class{constructor(t,n=!1){this.logger=new lr,n&&this.logger.setLevel("debug"),this.fromType=t,Er.has(t)||(Er.set(t,new Map),X.runtime.onMessage.addListener((r,o,a)=>{let i=r.from,s=r.to,c,u,l;o.tab&&o.tab.id&&(c=o.tab.id,i=`${i}:${c}`,u=o.tab.url,l=o.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let g=zs(s),{type:d,name:m}=g;if(d!==t)return!1;let p=zs(i),x=Er.get(d).get(m);if(!x)return this.logger.debug(`no message handler for ${d}:${s}, but it's ok`),!1;let{messageHandler:h,sync:y}=x,S={type:t,name:p.name,id:c,url:u,active:l};if(y){try{let A=h(r.payload,S);a({ok:!0,data:A})}catch(A){a({ok:!1,errorName:A.name,errorMessage:A.message,errorDetails:A.details})}return!1}else return h(r.payload,S).then(A=>{a({ok:!0,data:A})}).catch(A=>{a({ok:!1,errorName:A.name,errorMessage:A.message,errorDetails:A.details})}),!0}))}getConnection(t,n,r){let o=!1;r&&r.sync&&(o=!0);let a=this.fromType,i=Er.get(a);if(i.has(t))return i.get(t).connectionInstance;{let s=new js(`${a}:${t}`,this.logger);return Er.get(a).set(t,{messageHandler:n,sync:o,connectionInstance:s}),s}}},js=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=zs(t),{type:o,id:a}=r;if(o!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await X.runtime.sendMessage(i);return mg(i,s,this.logger)}catch(s){if(o==="popup"){let c=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(c,n,t,s),Promise.resolve({message:c})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await X.tabs.sendMessage(a,i);return mg(i,s,this.logger)}}};function mg(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new $e(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function zs(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var dh=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await Us():n==="translateTheMainPage"?await Aa():n==="translateToThePageEndImmediately"?await ig():n==="toggleTranslatePage"?await ng():n==="toggleTranslateTheWholePage"?await sg():n==="toggleTranslateTheMainPage"?await og():n==="translatePage"?await Bt():n==="restorePage"?Nn():n==="showTranslationOnly"?void 0:n==="setCurrentPageLanguageByClient"&&_n(r)};var ka;function Ws(){return ka||(ka=new On("content_script",!1).getConnection("main",dh),ka)}async function tn(e){return await Ws().sendMessage("background:main",e)}function se(e){return xe()||au()?(e.fetchPolyfill=globalThis.GM_fetch,Cn(e)):tn({method:"fetch",data:e})}function ug(){return xe()?Ce():tn({method:"getConfig"})}function it(e){if(e.text){let t=fu(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(xe()){let t=X.extra.detectLanguage(e.text);return Promise.resolve(t)}return tn({method:"detectLanguage",data:e})}function gg(){return tn({method:"detectTabLanguage"})}function fg(e){if(xe()){let n=new CustomEvent(Ec,{detail:e});document.dispatchEvent(n);return}Ws().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function pg(e){return xe()?ds(e):tn({method:"queryParagraphCache",data:e})}async function hg(e){if(xe()){await fs(e);return}return tn({method:"setParagraphCache",data:e})}async function qs(){if(xe())return Promise.resolve();await tn({method:"mockRequest"})}var ae=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,o=[],a=[],i=0,s=new Set,c=null,u=new Set;for(let d of r)d.from&&d.from!=="auto"&&u.add(d.from);let l=!1;u.size>1&&(l=!0);try{a=su(r,this.maxTextLength,this.maxTextGroupLength)}catch(d){if(n){s.has(i)&&i++;for(let m=i;m<r.length;m++){let p=r[m];n(d,null,p)}c=d}else c=d}let g=zr({limit:this.throttleLimit,interval:1e3});j.debug("tempSentenceGroups",a.map(d=>d));for(let d=0;d<a.length;d++){let m=a[d],p=m.url,b=g(async()=>{let y=m.from;if(l&&(y="auto"),m.fromByClient&&m.fromByClient!=="auto"&&(y=m.fromByClient),this.isSupportList)return await this.translateList({text:m.tempSentences.map(A=>A.text),from:y,to:m.to,url:p});{let S=m.tempSentences.map(E=>E.text).join(Jo),A=await this.translate({text:S,from:y,to:m.to,url:p}),{text:O}=A;return{text:O.split(Jo),from:A.from,to:A.to}}}),x;try{x=await b()}catch(y){if(n){s.has(i)&&i++;for(let S=i;S<r.length;S++){let A=r[S];n(y,null,A)}c=y;continue}else{c=y;continue}}let{text:h}=x;for(let y=0;y<h.length;y++)try{let S=h[y],A=m.tempSentences[y],{index:O,prefix:v,suffix:E}=A;o[O]===void 0?o[O]={...r[O],from:m.from,to:m.to,text:v+S+E}:o[O].text+=v+S+E,O!==i&&n&&(s.add(i),n(null,o[i],r[i])),i=O}catch(S){if(n){s.has(i)&&i++;for(let A=i;A<r.length;A++){let O=r[A];n(S,null,O)}throw S}else throw S}}if(n&&!s.has(i)&&o[i]&&r[i]&&n(null,o[i],r[i]),c)throw c;return{sentences:o}}detectLanguageLocally(t){return it({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var bg=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],mt=class extends ae{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),o=`${n.getUTCMonth()+1}`.padStart(2,"0"),a=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${o}-${a}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:mt.langMap.get(o),SourceText:r,Target:mt.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:mt.langMapReverse.get(s.Response.Source)||o,to:mt.langMapReverse.get(s.Response.Target)||a}}async translateList(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:mt.langMap.get(o),SourceTextList:r,Target:mt.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:mt.langMapReverse.get(s.Response.Source)||o,to:mt.langMapReverse.get(s.Response.Target)||a}}async signedRequest({secretId:n,secretKey:r,action:o,payload:a,service:i,version:s}){let c=`${i}.tencentcloudapi.com`,u=new Date,l=`${new Date().valueOf()}`.slice(0,10),g=["POST","/","","content-type:application/json; charset=utf-8",`host:${c}`,"","content-type;host",await dt(a)].join(`
`),d=mt.getUTCDate(u),m=["TC3-HMAC-SHA256",l,`${d}/${i}/tc3_request`,await dt(g)].join(`
`),p=await Qu(d,`TC3${r}`),b=await wa(i,p),x=await wa("tc3_request",b),h=await wa(m,x),y=await se({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:c,"X-TC-Action":o,"X-TC-Timestamp":l,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${h}`},body:a});if(y instanceof Error)throw y;if(y.Response&&y.Response.Error&&y.Response.Error.Message)throw new Error(y.Response.Error.Message);return y}},nn=mt;nn.langMap=new Map(bg),nn.langMapReverse=new Map(bg.map(([n,r])=>[r,n]));var yg=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],Cr=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:o,to:a}=n;if(!r)return{...n};let i=Cr.langMap.get(o)||"auto",s=Cr.langMap.get(a)||"zh-CN",c=await this.fetchWithoutToken(r,i,s);if(!c)throw new Error("google translate NETWORK_ERROR");if(!c.data[0]||c.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:c.data[0].map(l=>l[0]).filter(Boolean).join(""),from:Cr.langMapReverse.get(c.data[2])||"auto",to:a}}async fetchWithoutToken(n,r,o){let a=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:o,q:n}),i="https://translate.googleapis.com/translate_a/single?"+a.toString();return{data:await se({url:i})}}},rn=Cr;rn.langMap=new Map(yg),rn.langMapReverse=new Map(yg.map(([n,r])=>[r,n]));function xg(e){return e.result.texts}function mh(e,t){return t?e+(t-e%t):e}function ph(e,t){return e.split(t).length-1}function Tg(e){let t=Date.now(),n=1;for(let r of e)n+=ph(r,"i");return mh(t,n)}function hh(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Vs(){return hh(1e6,1e8)}var Ks="https://www2.deepl.com/jsonrpc",_a="auto",vg=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],wg=["formal","informal"];function Eg(e,t=_a,n=Vs()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function bh(e,t=1){let n=[],r=0;for(let o=0;o<e.length;o++){let a=e[o].chunks;for(let i=0;i<a.length;i++){let s=a[i];n.push({kind:"default",_index:o,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:a.slice(0,r).map(c=>c.sentences[0].text),raw_en_context_after:r+1<a.length?[a[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function Sg(e){return e.reduce((t,n)=>{let r=n.chunks;for(let o of r)t.push(o.sentences[0].text);return t},[])}function yh(e){if(!e)return{};if(!wg.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function Cg(e,t,n,r=Vs(),o=1,a){let i=Sg(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:bh(n,o),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:yh(a),timestamp:Tg(Sg(n))},id:r}}function xh(e=vg){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function Gs(e){return xh()[e.toLowerCase()]}var Lg={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function Ag(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function Th(e,t,n){let r=Eg(e,t,n);return await se({method:"POST",url:Ks+"?method=LMT_split_text",headers:Lg,body:Ag(r)})}async function vh(e,t,n,r,o,a){let i=await Th(e,n,r),s=Cg(n==="auto"?i.result.lang.detected:n,t,xg(i),r,o,a),c=s.params.jobs.map(g=>g._index);s.params.jobs=s.params.jobs.map(g=>{let d={...g};return delete d._index,d});let u=await se({method:"POST",url:Ks+"?method=LMT_handle_jobs",body:Ag(s),headers:Lg}),l={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((g,d)=>{let m=c[d];l.text[m]===void 0&&(l.text[m]="");let p=s.params.jobs[d].sentences[0].prefix,b=s.params.jobs[d].sentences[0].prefix;l.text[m]=l.text[m]+p+g.beams[0].sentences[0].text}),l}async function kg(e,t,n=_a,r,o,a){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:vh(e,Gs(t),Gs(n)??"auto",r,o,a):{text:[],from:n,to:t}}var _g=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Fn=class extends ae{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:o,from:a}=n,i=await kg(r,Fn.langMap.get(o),Fn.langMap.get(a));return{text:i.text,from:Fn.langMapReverse.get(i.from),to:Fn.langMapReverse.get(i.to)}}},an=Fn;an.langMap=new Map(_g),an.langMapReverse=new Map(_g.map(([n,r])=>[r,n]));var Mg=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],dE=new Map(Mg),mE=new Map(Mg.map(([e,t])=>[t,e]));var Pg=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Js="https://transmart.qq.com/api/imt",on=class extends ae{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:o}=n,a=await this.detectLanguage(r),i=on.langMap.get(a)||a,s=on.langMap.get(o)||o;if(a===o)return{text:r,from:a,to:o};let c=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await se({url:Js,body:c,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:a||"auto",to:o}}async translateList(n){let{from:r,text:o,to:a}=n;if(o.length===1){let g=await this.translate({from:r,text:o[0],to:a,url:n.url});return{text:[g.text],from:g.from,to:g.to}}let i=await this.detectLanguage(o.join(`
`));if(i===a)return{text:o,from:i,to:a};let s=on.langMap.get(i)||i,c=on.langMap.get(a)||a,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:o,lang:s,orig_url:n.url},target:{lang:c},type:"plain"}),l=await se({url:Js,body:u,method:"POST"});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:i||"auto",to:a}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},o=await se({url:Js,method:"POST",body:JSON.stringify(r)});if(o.header.ret_code!=="succ")throw new Error(o.message||o.header.ret_code);let a=o.language,i=on.langMapReverse.get(a);return i||a}},sn=on;sn.langMap=new Map(Pg),sn.langMapReverse=new Map(Pg.map(([n,r])=>[r,n]));function Rg(){return Math.random()>=0}var Hn=class extends ae{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await qs(),await dn(5e3);let o=r.match(/^\s*/)[0].length;return{text:r.slice(0,o)+"\u6A21\u62DF\uFF1A"+r.slice(o,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:o,to:a}=n;if(await qs(),!Rg())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:o,to:a,text:[""]}:{from:o,to:a,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var Ng=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],Ig=new Map(Ng),Dg=new Map(Ng.map(([e,t])=>[t,e])),Lr=class extends ae{constructor(n,r){super(n,r);this.apikey="";this.codename=Lr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...Lr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:Lr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:o,to:a}=n,i=await se({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:Ig.get(o)||"auto",target_lang:Ig.get(a)})});if(i.status){let s=i;return{text:s.result,from:Dg.get(s.source_lang),to:Dg.get(s.target_lang)}}else throw new Error(i.msg)}},Ma=Lr;Ma.DEFAULT_CODENAME="deepl";var Pa=Ma;var Fg=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],Og=new Map(Fg),wh=new Map(Fg.map(([e,t])=>[t,e])),Ys=class extends ae{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:o,text:a}=n,i={source_lang:Og.get(r),target_lang:Og.get(o)},s=new URLSearchParams(i);a.forEach(m=>{s.append("text",m)});let c=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let l=await se({url:u,method:"POST",body:c,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:g}=l;return{text:g.map(m=>m.text),from:g[0]&&wh.get(g[0].detected_source_language)||r,to:o}}},Hg=Ys;var Sh=[["auto","auto"],["zh-CN","zh"],["zh-TW","cht"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"]],Ug=new Map(Sh),Xs=class extends ae{constructor(n,r){super(n,r);this.APIKEY="";this.isSupportList=!1;if(!n||!n.APIKEY)throw new Error("APIKEY are required");this.APIKEY=n.APIKEY}static getAllProps(){return[{name:"APIKEY",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=r,s={url:"https:///api.niutrans.com/NiuTransServer/translation",headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({src_text:i,from:Ug.get(o)||o,to:Ug.get(a)||a,apikey:this.APIKEY})},c=await se(s);if(c.tgt_text){let u=c.tgt_text;return u.endsWith(`
`)&&(u=u.slice(0,-1)),{text:u,from:o,to:a}}else throw new Error(JSON.stringify(c))}},Bg=Xs;var Eh=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Le={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},Qs=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Zs=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=Qs(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(Qs).sort().join(`&${r}=`)}`:`${r}=${Qs(n)}`}).filter(t=>t).join("&"),Ar=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let o=t[r];return typeof o<"u"&&o!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],o=this.credentialString(n);return r.push(`${Le.algorithm} Credential=${t.accessKeyId}/${o}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),o={...this.request.params},a=this.request.params,i=this.request.headers;t.sessionToken&&(o[Le.tokenHeader]=t.sessionToken),o[Le.dateHeader]=r,o[Le.notSignBody]="",o[Le.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,o[Le.algorithmKey]=Le.algorithm,o[Le.signHeadersKey]="",o[Le.signQueriesKey]=void 0,o[Le.signatureKey]=void 0,o=this.sortParams(o),this.request.params=o,this.request.headers={};let s=await this.signature(t,r);return this.request.params=a,this.request.headers=i,o[Le.signQueriesKey]=Object.keys(o).sort().join(";"),o[Le.signatureKey]=s,Zs(o)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Le.dateHeader]=n,t.sessionToken&&(this.request.headers[Le.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Le.contentSha256Header]=await dt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return va(await Ut(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Le.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=Zs(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,o)=>r[0].toLowerCase()<o[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let o=r[0].toLowerCase();if(this.isSignableHeader(o)){let a=r[1];if(typeof a>"u"||a===null||typeof a.toString!="function")throw new Error(`Header ${o} contains invalid value`);n.push(`${o}:${this.canonicalHeaderValues(a.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await dt(t)}async hexEncodedBodyHash(){return this.request.headers[Le.contentSha256Header]?this.request.headers[Le.contentSha256Header]:this.request.body?await this.hexEncodedHash(Zs(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return Eh.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,o){let a=await Ut(n,`${Le.kDatePrefix}${t.secretKey}`),i=await Ut(r,a),s=await Ut(o,i);return Ut(Le.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,Le.v4Identifier].join("/")}};var jg=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],$g=new Map(jg),Ch=new Map(jg.map(([e,t])=>[t,e])),ei=class extends ae{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n,i=$g.get(o),s={TargetLanguage:$g.get(a)||a,TextList:r};i&&(s.SourceLanguage=i);let c={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new Ar(c,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let l=new URLSearchParams(c.params),g=await se({url:"https://open.volcengineapi.com"+c.pathname+"?"+l.toString(),headers:u.request.headers,method:c.method,body:c.body});if(g.TranslationList){let d=g.TranslationList.map(p=>p.Translation),m=o;return g.TranslationList.length>0&&g.TranslationList[0].DetectedSourceLanguage&&(m=Ch.get(g.TranslationList[0].DetectedSourceLanguage)||o),{text:d,from:m,to:a}}else{let d=g.ResponseMetaData.Error;throw new $e(d.Code,d.Message)}}},zg=ei;var Wg=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Lh=new Map(Wg),Ah=new Map(Wg.map(([e,t])=>[t,e])),kr=class extends ae{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:o,to:a}=n,s={source_language:Lh.get(o)||"detect",target_language:"zh",text:r},c=await se({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(c.base_resp&&c.base_resp.status_code===0){let u=c.translation,l=o;return c.detected_language&&(l=Ah.get(c.detected_language)||o),{text:u,from:l,to:a}}else{let u=c.base_resp;throw new $e(u.status_code.toString(),u.status_message)}}};var kh=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],qg=new Map(kh),_r=class extends ae{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:o,to:a}=n,s=await se({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:qg.get(o)||o,target_lang:qg.get(a)||a,text:r})});if(s.code===200)return{text:s.data,from:o,to:a};throw new Error(s.message||s.message||"API Error")}};var ti="https://{s}bing.com",Yg=ti+"/translator",_h=ti+"/ttranslatev3",Mh=ti+"/tspellcheckv3",Ra="bingGlobalConfig",Xg=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],Vg=new Map(Xg),Kg=new Map(Xg.map(([e,t])=>[t,e])),Gg=1e3,pt,Un;function ni(e,t){return e.replace("{s}",t?t+".":"")}async function Ph(){if(!pt){let n=await X.storage.local.get(Ra);return n&&(pt=n[Ra]),!0}let{tokenTs:e,tokenExpiryInterval:t}=pt;return Date.now()-e>t}async function Jg(){let e,t,n,r,o,a,i,s,c,u;try{let l=ni(Yg,e),g=await se({url:l,responseType:"raw"}),{body:d,headers:m,url:p}=g;e=p.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=m["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[o,r,a,i,s,c]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(l){throw console.error("failed to fetch global config",l),l}return pt={subdomain:e,IG:t,IID:n,key:o,token:r,tokenTs:o,tokenExpiryInterval:a,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:c,cookie:u,count:0},await X.storage.local.set({[Ra]:pt}),pt}function Rh(e){let{IG:t,IID:n,subdomain:r,isVertical:o}=pt;return ni(e?Mh:_h,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+pt.count++:"")}function Ih(e,t,n,r){let{token:o,key:a}=pt,i={fromLang:n,text:t,token:o,key:a};return!e&&r&&(i.to=r),i}async function Qg(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Gg)throw new Error(`The supported maximum length of text is ${Gg}. Please shorten the text.`);Un||(Un=Jg()),await Un,await Ph()&&(Un=Jg(),await Un),t=t||"auto",n=n||"zh-CN",t=Vg.get(t)||t,n=Vg.get(n)||n;let o=Rh(!1),a=Ih(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:ni(Yg,pt.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(a),c=o,u=s.toString(),l=await se({url:c,headers:i,method:"POST",body:u});if(l.ShowCaptcha||l.StatusCode===401||l.statusCode){if(pt=null,Un=null,await X.storage.local.remove(Ra),l.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${l.StatusCode}.
    `);if(l.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(l.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(l)}.`)}let g=l[0].translations[0],d=l[0].detectedLanguage;return{text:g.text,from:Kg.get(d.language),to:Kg.get(g.to)}}var Mr=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:o,to:a}=n;return r?await Qg(r,o,a):{...n}}};var ef=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Zg=new Map(ef),Dh=new Map(ef.map(([e,t])=>[t,e])),ri=class extends ae{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:o}=this,{appid:a,key:i}=this,{text:s,from:c,to:u}=n,l=new URLSearchParams({from:Zg.get(c),to:Zg.get(u),q:s,salt:r,appid:a,sign:Ln(a+s+r+i)}),g=new URL(o);g.search=l.toString();let d=await se({url:g.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new $e("API_SERVER_ERROR",d.error_msg);let{trans_result:m,from:p}=d,b=m.map(({dst:h})=>h);return{from:Dh.get(p),to:u,text:b.join(`
`)}}},tf=ri;var Nh=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],nf=new Map(Nh),ai=class extends ae{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n;o==="auto"&&(o=await it({text:r.join(" ")}));let i=r;return{text:(await se({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${nf.get(o)}2${nf.get(a)}`})})).target,from:o,to:a}}},rf=ai;var of=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],af=new Map(of),Oh=new Map(of.map(([e,t])=>[t,e]));function Fh(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var oi=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),c=this.appId+Fh(r)+i+s+this.appSecret,u=await dt(c),l={q:r,appKey:this.appId,salt:i.toString(),from:af.get(o),to:af.get(a),sign:u,signType:"v3",curtime:s.toString()},g=new URLSearchParams(l),m=await se({url:"https://openapi.youdao.com/api",method:"POST",body:g.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),p=m.l,[b,x]=p.split("2");return{text:m.translation.join(`
`),from:Oh.get(b),to:a}}},sf=oi;var Bn={mock:{class:Hn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:Hn,name:"Mock2",homepage:"https://www.google.com"},google:{class:rn,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:sn,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:Hg,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:zg,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:kr,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:Mr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:nn,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:tf,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:rf,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:Pa,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:sf,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:an,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:_r,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"},niu:{class:Bg,name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://niutrans.com/documents/contents/beginning_guide/6"}};function si(e,t){let n=Bn[e],r=t.config.translationServices[e]||{},o=!0,a=n.class.getAllProps();if(a.length>0){let i=a.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){o=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:o,config:r,props:n.class.getProps(),allProps:a}}var Hh=Object.keys(Bn),lf=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return Hh.filter(o=>{let a=Bn[o];return o.startsWith("mock")?!!r:!a.alpha||n||o===e.translationService}).map(o=>si(o,e))};async function dg(e,t){if(!e.text)return e;let n=await $s({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new $e("translateFailed","translate failed")}async function $s(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:o}=t,a=r.translationGeneralConfig,i=r.translationServices,s=o,c=i[s]||{},u=[],l={sentences:Array(e.sentences.length)},g=e.sentences.length,d=-1;if(r.cache)for(let x of e.sentences){d++;let h=s;s==="openl"&&(h=s+"-"+c.codename||Pa.DEFAULT_CODENAME);let y=null;try{y=await Rr(pg({originalText:x.text,from:x.from,to:x.to,service:h}),1e3)}catch(S){j.warn("query cache DB error, but it's ok",S)}if(y){let S={...x,text:y.translatedText};l.sentences[d]=S,n&&n(null,S,x)}else u.push(x)}else u.push(...e.sentences);let m=u.length;if(g-m>0&&j.debug(`use ${g-m} sentences from cache`),!u.length)return l;let p;try{p=new Bn[s].class(c,a),await p.init()}catch(x){if(n)for(let h of u)n(x,null,h);throw x}let b=await p.multipleTranslate({sentences:u},(x,h,y)=>{if(n&&(n(x,h,y),!x&&h&&!s.startsWith("mock")&&r.cache)){let S=s;s==="openl"&&(S=s+"-"+c.codename||Pa.DEFAULT_CODENAME),r.cache&&Rr(hg({translatedText:h.text,from:y.from,to:y.to,detectedFrom:h.from,key:Ln(y.text),service:S}),3e3).catch(A=>{j.warn("set cache DB error",A)})}});for(let x of b.sentences){let h=l.sentences.findIndex(y=>!y);if(h===-1)throw new $e("translateFailed","can not match the result");l.sentences[h]=x}return l}function cf(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function ii(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let o=t[r],a=new RegExp("{"+r+"}","gm");n=n.replace(a,o.toString())}),n}function Pr(e,t,n){let r=e[t];if(!r)return n;let o=n.split("."),a="";do{a+=o.shift();let i=r[a];i!==void 0&&(typeof i=="object"||!o.length)?(r=i,a=""):o.length?a+=".":r=n}while(o.length);return r}function li(e,t,n,r,o){if(!e.hasOwnProperty(n))return t;let a=Pr(e,n,t);return a===t&&n!==r&&(a=Pr(e,r,t)),ii(a,o)}var $n={},Uh={root:"",lang:"en",fallbackLang:"en"};function ci(e,t){let n=Object.assign({},Uh,e);$n=t||$n;let[r,o]=Y(n.lang),[a,i]=Y($n),[s,c]=Y(!1),u=g=>{if(a.hasOwnProperty(g))return;c(!1);let d=cf(n.root||"",g);n.getUrl&&(d=n.getUrl(n.root||"",g),fetch(d).then(m=>m.json()).then(m=>{$n[g]=m,i({...$n}),c(!0)}).catch(m=>{i({...$n}),c(!0)}))};return ge(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:o,t:(g,d)=>{if(!a.hasOwnProperty(r))return g;let m=Pr(a,r,g);return m===g&&r!==n.fallbackLang&&(m=Pr(a,n.fallbackLang,g)),ii(m,d)},isReady:s}}var gi=Va(null),ui={root:"assets",lang:"en",fallbackLang:"en"},uf=e=>{let{t,setLang:n,lang:r,isReady:o}=ci({root:e.root||ui.root,lang:e.lang||ui.lang,fallbackLang:e.fallbackLang||ui.fallbackLang,getUrl:e.getUrl},e.translations);return f(gi.Provider,{value:{t,setLang:n,lang:r,isReady:o},children:e.children})};function oe(){return Ja(gi)}function Te(e){return f("div",{class:"nav-left",children:[f("div",{class:"title",children:e.title}),f("div",{class:"description",children:e.description})]})}function fi(e){let{items:t,maxWidth:n}=e;return n=n||128,f("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let o=r.target.value,a=t.find(i=>i.value===o);a&&a.onSelected(a)},children:t.map(r=>f("option",{value:r.value,selected:r.selected,children:r.label}))})}function Ia(e){let{t}=oe();return f("div",{class:"input-row",children:[f("div",{class:"input-left",children:f("label",{for:e.field.name,children:[e.field.label?t(e.field.label):e.field.name,"\uFF1A"]})}),f("div",{class:"input-right",children:f("input",{required:e.field.required,placeholder:e.field.name,class:"input",value:e.value,type:e.type,onChange:n=>{e.onChange(n.target.value)}})})]})}function di(e){let{field:t,root:n,onChange:r,value:o}=e;o=o||t.default||"";let{t:a}=oe();return t.type==="select"?f("div",{class:"flex justify-end mb-2",children:[f("label",{class:"engine",children:[t.label?a(t.label):t.name,"\uFF1A"]}),f(fi,{items:t.options.map(i=>({label:`${i.label?a(i.label):i.value}`,value:o??"",selected:o===i.value,onSelected:()=>{r(i.value)}}))})]}):t.type==="text"?f("div",{children:f(Ia,{field:t,value:o,type:t.type,onChange:r})}):t.type==="password"?f("div",{children:f(Ia,{field:t,value:o,type:t.type,onChange:r})}):null}var gf={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},mi={...Vt,"zh-CN":{...gf["zh-CN"],...Vt["zh-CN"]},"zh-TW":{...gf["zh-TW"],...Vt["zh-TW"]}},Da=mi;function pi(e,t,n){return li(mi,e,t,ra,n)}var ff=()=>wn.filter(e=>e!=="auto"),$t=(e,t,n)=>{let r=li(mi,`languages.${e}`,t,"en");return n?Qo[e]||e:r!==`languages.${e}`?r:Qo[e]};function Na(e){let{t,lang:n}=oe();return f("details",{role:"list",class:"nav-right",children:[f("summary",{"aria-haspopup":"listbox",children:t("edit")}),f("ul",{role:"listbox",class:"option-list",children:e.options.map(r=>{let o=$t(r.value,n);return f("li",{children:f("label",{children:[f("input",{type:"checkbox",onChange:()=>{e.onToggleAlwaysLangs(!r.checked,r.value)},value:r.value,checked:r.checked}),o]})})})})]})}function jn(e){let{t}=oe();return f("div",{children:e.urls.map((n,r)=>f("div",{class:"url-list",children:[f("div",{class:"url-left",children:[f("div",{class:"url-name height-tight",children:n}),f("div",{class:"description text-1 height-tight",children:n})]}),f("nav",{children:f("ul",{children:f("li",{children:f("details",{role:"list",dir:"rtl",children:[f("summary",{"aria-haspopup":"listbox",role:"link"}),f("ul",{class:"delete",role:"listbox",children:[f("li",{children:f("a",{onClick:o=>{e.onEditUrl(n,e.type,r)},children:t("edit")})}),f("li",{children:f("a",{onClick:o=>{e.onDeleteUrl(n,e.type)},children:t("delete")})})]})]})})})})]},"menu"+r))})}function zn(e){let{t}=oe(),n=pn(null),{toggleModal:r}=e;return f("dialog",{id:"immersive-translate-overlay",onClick:a=>{a.preventDefault(),a.target&&a.target.id==="immersive-translate-overlay"&&r(a)},open:!0,children:f("article",{class:"add-modal",children:[f("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:e.toggleModal}),f("div",{class:"add-text",children:t("add url")}),f("input",{placeholder:"URL",ref:n,value:e.urlValue}),f("blockquote",{children:f("p",{class:"text-sm",children:t("addUrlDescription")})}),f("div",{class:"flex",children:[f("div",{class:"footer-button",children:f("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:e.toggleModal,children:t("cancel")})}),f("div",{class:"footer-button",children:f("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:a=>{if(a.preventDefault(),n.current&&n.current.value){if(e.onSubmitAddUrl){if(e.urlValue!==""){e.onSubmitAddUrl(n.current.value,e.index,e.type,"edit");return}e.onSubmitAddUrl(n.current.value,e.index,e.type);return}else if(e.onAddInterfaceUrl){if(e.urlValue!==""){e.onAddInterfaceUrl(n.current.value,"edit");return}e.onAddInterfaceUrl(n.current.value)}}},children:t("confirm")})})]})]})})}var hi=ff();function Oa(){let{t:e}=oe(),[t,n,r,o]=st(),[a,i]=Y(null),[s,c]=Y(null),[u,l]=Y(0),[g,d]=Y(!1),[m,p]=Y(!1),[b,x]=Y(""),h=[];s&&(h=lf(s));let y=null,S=null,A=[],O=[];if(a&&s){let{translationService:L,translationServices:$}=a;Bn[L]&&(S=si(L,s)),$&&$[L]?y=$[L]||{}:y={},A=hi.map(Q=>a.translationLanguagePattern&&a.translationLanguagePattern.matches&&a.translationLanguagePattern.matches.includes(Q)?{checked:!0,value:Q}:{checked:!1,value:Q}),O=hi.map(Q=>a.translationLanguagePattern&&a.translationLanguagePattern.excludeMatches&&a.translationLanguagePattern.excludeMatches.includes(Q)?{checked:!0,value:Q}:{checked:!1,value:Q})}ge(()=>(Be("esc",()=>{d(!1),p(!1)}),Ce().then(L=>{i(L),j.debug(L)}),()=>{Be.unbind("esc")}),[]),ge(()=>{Ce().then(L=>{i(L)})},[t]),ge(()=>{a&&kt({url:"http://localhost",config:a}).then(L=>{c(L)})},[a]);let v=L=>{n($=>({...$,translationService:L}))},E=L=>{n(()=>({...L}))},N=L=>{L.preventDefault(),confirm(e("confirmResetConfig"))&&(E(Xt()),Dt().catch($=>{j.error("clean local config error",$)}),Ze(e("resetSuccess")))},w=L=>{n($=>({...$,targetLanguage:L}))},P=(L,$)=>{if(!L){n(I=>{let D={...I.translationLanguagePattern};return{...I,translationLanguagePattern:{...I.translationLanguagePattern,matches:xt($,D.matches),excludeMatches:xt($,D.excludeMatches)}}});return}let Q=L,C=Q==="matches"?"excludeMatches":"matches";$&&n(I=>{let D={...I.translationLanguagePattern};return D[Q]=En($,D[Q]),D[C]=xt($,D[C]),{...I,translationLanguagePattern:{...I.translationLanguagePattern,...D}}})},U=(L,$)=>{P(L?"matches":void 0,$)},R=(L,$)=>{P(L?"excludeMatches":void 0,$)},_=L=>{L==="matches"?d(!g):p(!m)},H=(L,$,Q,C)=>{_(Q),n(I=>{let D=t.translationUrlPattern,te=[],K=[];D&&D.matches&&D.excludeMatches&&(te=D.matches,K=D.excludeMatches);let be=[...te],we=[...K];return C==="edit"&&(Q==="matches"?be[$]=L:we[$]=L),Q==="matches"?(be=En(L,be),we=xt(L,K)):(be=xt(L,te),we=En(L,we)),{...I,translationUrlPattern:{...I.translationUrlPattern,matches:be,excludeMatches:we}}})},B=(L,$)=>{n(Q=>{let C=t.translationUrlPattern,I=[];$==="matches"?C&&C.matches&&(I=C.matches):C&&C.excludeMatches&&(I=C.excludeMatches);let D=[...I];return D=xt(L,D),{...Q,translationUrlPattern:{...Q.translationUrlPattern,[$]:D}}})},z=(L,$,Q)=>{_($),x(L),l(Q)};if(!a)return f("div",{children:"loading"});let Z=[];a&&a.translationLanguagePattern&&a.translationLanguagePattern.matches&&(Z=a.translationLanguagePattern.matches);let ee=[];return a&&a.translationLanguagePattern&&a.translationLanguagePattern.excludeMatches&&(ee=a.translationLanguagePattern.excludeMatches),f("div",{children:[f("div",{class:"nav",children:[f("strong",{class:"text-lg",children:e("general")}),f("a",{class:"text-sm",href:"#",onClick:N,children:e("reset")})]}),f("div",{class:"nav",children:[f(Te,{title:e("target"),description:e("translate other languages into specific language")}),f("select",{class:"select",onChange:L=>{L.preventDefault(),w(L.target.value)},children:hi.filter(L=>L!=="auto").map(L=>f("option",{value:L,selected:L===a.targetLanguage,children:$t(L,a.interfaceLanguage)}))})]}),f("div",{class:"nav",children:[f(Te,{title:e("service"),description:e("select translation service")}),f("select",{class:"select",onChange:L=>{L.preventDefault(),v(L.target.value)},children:h.map(L=>f("option",{value:L.id,selected:L.id===a.translationService,children:`${e("translationServices."+L.id)}`}))})]}),S&&S.docUrl?f("div",{children:[f("a",{class:"pb-1 docUrl",href:S.homepage,children:e(`translationServices.${S.id}`)}),"\xA0",f("span",{class:"description pb-1",children:e("please refer to")}),"\xA0",f("a",{class:"pb-1 docUrl",href:S.docUrl,children:e("KeyAndConfigurationTutorial")})]}):null,y&&S&&S.allProps.length>0&&S.allProps.map(L=>f(di,{field:L,value:y[L.name],onChange:$=>{n(Q=>{let C=Q.translationServices||{},I=C[S.id]||{};return{...Q,translationServices:{...C,[S.id]:{...I,[L.name]:$}}}})}})),f("div",{class:"nav",children:[f(Te,{title:e("always languages"),description:e("always translate the following languages")}),f(Na,{options:A,onToggleAlwaysLangs:U})]}),f("div",{class:"langs-list",children:Z.map((L,$)=>f("div",{class:"lang-card",children:[f("div",{id:`${L}`,children:$t(L,a.interfaceLanguage)}),f("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${L}`,onClick:Q=>{Q.preventDefault(),U(!1,Z[$])}})]}))}),f("div",{class:"nav",children:[f(Te,{title:e("neverTranslateLanguagesLabel"),description:e("neverTranslateTheFollowingLanguagesDescription")}),f(Na,{options:O,onToggleAlwaysLangs:R})]}),f("div",{class:"langs-list",children:ee.map((L,$)=>f("div",{class:"lang-card",children:[f("div",{id:`${L}`,children:$t(L,a.interfaceLanguage)}),f("a",{href:"#close",class:"close",target:"_blank","aria-label":"Close","data-target":`${L}`,onClick:Q=>{Q.preventDefault(),R(!1,ee[$])}})]}))}),f("div",{class:"nav",children:[f(Te,{title:e("always sites"),description:e("always translate the following sites")}),f("div",{class:"nav-right",children:f("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:L=>{L.preventDefault(),_("matches")},children:e("add")})}),g?f(zn,{toggleModal:L=>{L.preventDefault(),_("matches")},onSubmitAddUrl:H,type:"matches",urlValue:b,index:u}):null]}),f(jn,{urls:a.translationUrlPattern.matches,type:"matches",onDeleteUrl:B,onEditUrl:z}),f("div",{class:"nav",children:[f(Te,{title:e("never sites"),description:e("never translate the following sites")}),f("div",{class:"nav-right",children:f("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:L=>{L.preventDefault(),_("excludeMatches")},children:e("add")})}),m?f(zn,{toggleModal:L=>{L.preventDefault(),_("excludeMatches")},onSubmitAddUrl:H,type:"excludeMatches",urlValue:b,index:u}):null]}),f(jn,{urls:a.translationUrlPattern.excludeMatches,type:"excludeMatches",onDeleteUrl:B,onEditUrl:z}),f("div",{class:"nav",children:[f(Te,{title:e("advanced"),description:e("advancedDescription")}),f("a",{class:"text-sm",href:"#advanced",children:e("goAdvancedSettings")})]})]})}var bi=Xc()?["action"]:["browser_action","page_action"],yi=[{id:"toggleTranslatePage",contexts:["page",...bi]},{id:wc,contexts:bi},{id:Sc,contexts:bi}];async function df(e){j.debug("createContextMenu",yi),await X.contextMenus.removeAll();for(let t of yi)e.isShowContextMenu===!1&&t.id==="toggleTranslatePage"&&(t.contexts=t.contexts.filter(n=>n!=="page")),X.contextMenus.create({id:t.id,title:pi(`browser.${t.id}`,e.interfaceLanguage),contexts:t.contexts},()=>X.runtime.lastError)}async function mf(){let e=await Ce();j.debug("update ContextMenu",e);for(let t of yi){let n=pi(`browser.${t.id}`,e.interfaceLanguage);X.contextMenus.update(t.id,{title:n})}}function xi(e){let{t}=oe(),{corfirmText:n,fingerCountToToggleTranslagePageWhenTouching:r,onChange:o,onClose:a,shortcuts:i}=e,s={},c=pn(null);for(let l=0;l<i.length;l++)s[i[l].name]=pn(null);let u=l=>{l.preventDefault(),l.target&&l.target.id==="immersive-translate-overlay"&&a()};return ge(()=>{},[]),f("dialog",{id:"immersive-translate-overlay",onClick:u,open:!0,children:f("article",{class:"add-modal",children:[f("a",{href:"#close","aria-label":"Close",class:"close","data-target":"modal-example",onClick:l=>{l.preventDefault(),a()}}),i.map((l,g)=>{let{name:d,description:m,shortcut:p}=l;return f("div",{class:"flex justify-between items-center",children:[f("label",{class:"mb-2 text-sm",for:d,children:[m,":"]}),f("input",{type:"text",class:"!w-36",ref:s[d],disabled:l.disabled,id:d,name:d,value:p})]},`key-${g}`)}),Zc()&&f("div",{class:"flex justify-between items-center",children:[f("label",{for:"switch",class:"text-sm mb-2",children:t("toggleTranslatePageWhenThreeFingersOnTheScreen")}),f("select",{class:"select !w-36",ref:c,onChange:l=>{l.preventDefault()},children:[0,2,3,4,5].map(l=>f("option",{value:l,selected:l===r,children:`${t("fingers."+l)}`}))})]}),e.note&&f(e.note,{}),f("div",{class:"flex",children:[f("div",{class:"footer-button",children:f("a",{href:"#cancel",role:"button",class:"full-button secondary margin-right","data-target":"modal-example",onClick:l=>{l.preventDefault(),a()},children:t("cancel")})}),n&&f("div",{class:"footer-button",children:f("a",{href:"#confirm",role:"button",class:"full-button margin-left","data-target":"modal-example",onClick:l=>{l.preventDefault();let g=[];for(let m=0;m<i.length;m++){let p=i[m],b=s[p.name];if(b.current){let x=b.current.value;g.push({...p,shortcut:x})}}let d={shortcuts:g};if(c.current){let m=c.current.value;d.fingerCountToToggleTranslagePageWhenTouching=parseInt(m)}o(d)},children:n})})]})]})})}var $h=Object.keys(Da),jh=e=>{let t=e.translationTheme;return e.translationThemePatterns[t]?[...e.translationThemePatterns[t].matches]:[]};function Ti(){let[e,t,n,r]=st(),[o,a]=Y(!1),[i,s]=Y(!1),[c,u]=Y(0),[l,g]=Y(null),{t:d,setLang:m}=oe(),[p,b]=Y(""),x=X.runtime.getManifest();ge(()=>(Be("esc",()=>{a(!1),s(!1)}),()=>{Be.unbind("esc")}),[]),ge(()=>{Ce().then(w=>{kt({config:w,url:globalThis.location.href}).then(P=>{g(P)})})},[e]);let h=w=>{t(P=>({...P,translationTheme:w}))},y=w=>{t(P=>({...P,interfaceLanguage:w}))},S=(w,P,U)=>{a(!o),t(R=>{let _=R.translationThemePatterns||{},H=_[P]||{},B=H.matches||[],z=[...B];return U==="edit"&&(z=xt(p,B)),z=En(w,z),{...R,translationThemePatterns:{..._,[P]:{...H,matches:z}}}})},A=(w,P)=>{t(U=>{let R=U.translationThemePatterns||{},_=R[P]||{},B=[..._.matches||[]];return B=xt(w,B),{...U,translationThemePatterns:{...R,[P]:{..._,matches:B}}}})},O=(w,P,U)=>{a(!o),b(w),u(U)};if(!l)return f("div",{children:"loading"});let v=l.config,E=d("confirm"),N=()=>f("blockquote",{class:"text-sm",children:[d("browserShortcutsSucks")," ",f("kbd",{children:"Ctrl+A"}),"\xA0",f("kbd",{children:"Alt+B"}),"\xA0",f("kbd",{children:"Command+C"}),"\xA0 ",f("kbd",{children:"Ctrl+Shift+D"})," ",f("a",{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values",children:[d("help"),"?"]})]});return xe()||(rs()?(N=()=>f("blockquote",{class:"text-sm",children:[d("browserShortcutsNoteForFirefox"),"  ",f("a",{href:"https://support.mozilla.org/zh-CN/kb/%E7%AE%A1%E7%90%86Firefox%E7%9A%84%E6%89%A9%E5%B1%95%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F",children:[d("help"),"?"]})," "]}),E=""):(N=()=>f("blockquote",{class:"text-sm",children:d("browserShortcutsNoteForChrome")}),E=d("goSettings"))),f("div",{children:[f("div",{class:"nav",children:f("strong",{class:"text-lg",children:d("interface")})}),f("div",{class:"nav",children:[f(Te,{title:d("interface language")}),f("select",{class:"select",onChange:w=>{m(w.target.value),y(w.target.value),xe()||setTimeout(()=>{mf()},200)},children:$h.map(w=>f("option",{value:w,selected:w===v.interfaceLanguage,children:$t(w,v.interfaceLanguage,!0)}))})]}),f("div",{class:"nav",children:[f(Te,{title:d("keyboard shortcuts")}),f("div",{class:"nav-right",children:f("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:w=>{w.preventDefault(),s(!i)},children:d("modify")})})]}),!xe()&&f("div",{class:"nav",children:[f(Te,{title:d("isShowContextMenu")}),f("label",{for:"switch",children:f("input",{type:"checkbox",onChange:w=>{let P=w.target.checked;df({...l.config,isShowContextMenu:P}),t(U=>({...U,isShowContextMenu:P}))},checked:l.config.isShowContextMenu===!0,id:"switch",name:"switch",role:"switch"})})]}),f("div",{class:"nav",children:[f(Te,{title:d("enableLineBreak"),description:d("enableLineBreakDescription")}),f("label",{for:"switch",children:f("input",{type:"checkbox",onChange:w=>{let P=w.target.checked;t(U=>{let R=U.generalRule||{};return{...U,generalRule:{...R,lineBreakMaxTextCount:P?280:0}}})},checked:l.rule.lineBreakMaxTextCount>0,id:"switch",name:"switch",role:"switch"})})]}),l.rule.lineBreakMaxTextCount>0&&f("div",{class:"nav",children:[f(Te,{title:d("lineBreakMaxTextCount")}),f("label",{for:"count",children:f("input",{type:"number",id:"count",onChange:w=>{let P=w.target.value;t(U=>{let R=U.generalRule||{};return{...U,generalRule:{...R,lineBreakMaxTextCount:parseInt(P)}}})},name:"count",value:l.rule.lineBreakMaxTextCount,placeholder:"Text Length",required:!0})})]}),(oa().any||xe())&&f("div",{class:"nav",children:[f(Te,{title:d("enableUserscriptPagePopup"),description:d("enableUserscriptPagePopupDescription",{touch:d("fingers."+v.generalRule.fingerCountToToggleTranslagePageWhenTouching)})}),f("label",{for:"switch",children:f("input",{type:"checkbox",onChange:w=>{let P=w.target.checked;t(U=>{let R=U.generalRule||{};return{...U,generalRule:{...R,isShowUserscriptPagePopup:P}}})},checked:l.rule.isShowUserscriptPagePopup,id:"switch",name:"switch",role:"switch"})})]}),f("div",{class:"nav",children:[f(Te,{title:d("translation display"),description:d("select diplay style")}),f("select",{class:"select",onChange:w=>{h(w.target.value)},children:Dc.map(w=>f("option",{value:w,selected:w===v.translationTheme,children:d(`translationTheme.${w}`)}))})]}),f("div",{class:"pt-2 text-sm",children:f("p",{children:[Fc,f("br",{}),f("br",{}),f("span",{class:As(v.translationTheme,!1,[],!1,!1).join(" "),children:f("span",{class:ks(v.translationTheme).join(" "),children:Hc})})]})}),f("div",{class:"nav",children:[f(Te,{title:"",description:d("useAboveStyleForTheseSites",{theme:d(`translationTheme.${v.translationTheme}`)})}),f("div",{class:"nav-right",children:f("a",{href:"#",role:"button",class:"add-button secondary outline",onClick:w=>{w.preventDefault(),a(!o)},children:d("add")})})]}),o?f(zn,{toggleModal:w=>{w.preventDefault(),a(!o)},onAddInterfaceUrl:(w,P)=>{S(w,v.translationTheme,P)},urlValue:p,index:c}):null,f(jn,{urls:jh(v),type:"matches",onDeleteUrl:w=>{A(w,v.translationTheme)},onEditUrl:O}),i?f(xi,{note:N,corfirmText:E,fingerCountToToggleTranslagePageWhenTouching:v.generalRule.fingerCountToToggleTranslagePageWhenTouching,shortcuts:Nc.map(w=>({name:w,shortcut:v.shortcuts[w],description:d(`browser.${w}`),disabled:!xe()})),onChange:w=>{let{shortcuts:P,fingerCountToToggleTranslagePageWhenTouching:U}=w;xe()?t(R=>{let _=P.reduce((B,z)=>(B[z.name]=z.shortcut,B),{...R.shortcuts}),H={...R,shortcuts:_};return U!==void 0&&(H.generalRule={...H.generalRule,fingerCountToToggleTranslagePageWhenTouching:U}),H}):X.tabs.create({url:"chrome://extensions/shortcuts"}),s(!1)},onClose:()=>{s(!1)}}):null]})}function vi(){let[e,t,n,r]=st(),[o,a]=Y(null),{t:i}=oe();ge(()=>{Ce().then(b=>{a(b)})},[e]);let s=b=>{t(x=>({...x,debug:b}))},c=b=>{t(()=>({...b}))},u=b=>{try{let x=JSON.parse(b.target.value);if(!Array.isArray(x)){St("Invalid rules, rules must be an array");return}let h={...e};h.rules=x,c(h),Ze(i("saved"))}catch(x){St(`Invalid JSON ${x.message}`)}},l=b=>{try{let x=JSON.parse(b.target.value);c(x),Ze(i("saved"))}catch(x){St(`Invalid JSON ${x.message}`)}},g=b=>{b.preventDefault()},d=b=>{b.preventDefault(),c(Xt()),Ze(i("resetSuccess")),setTimeout(()=>{Dt().catch(x=>{j.error("clean local config error",x)})},500)},m=b=>{b.preventDefault();let x={...e};delete x.rules,c(x)},p=`[{
  "matches": "www.google.com",
  "selectors": [".title"]
}, {
  "matches": "*.twitter.com",
  "selectors": [".text"],
  "excludeSelectors": ["footer"]
}]`;return o?f("div",{children:[f("div",{class:"nav",children:f("strong",{class:"text-lg",children:i("developer")})}),f("fieldset",{children:f("label",{for:"switch",children:[f("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{s(!o.debug)},checked:o.debug}),i("toggleDebug")]})}),f("details",{class:"py-2",children:[f("summary",{children:"Edit User Rules"}),f("textarea",{rows:10,onChange:u,placeholder:p,value:e.rules?JSON.stringify(e.rules||[],null,2):""}),f("div",{children:[f("a",{href:"#",class:"mr-3 !py-2",onClick:g,role:"button",children:i("save")}),f("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[i("help"),"?"]}),f("a",{href:"#",onClick:m,class:"text-sm secondary mr-2",children:i("reset")})]})]}),f("details",{class:"py-2",children:[f("summary",{children:"Edit User Config"}),f("textarea",{rows:10,onChange:l,value:JSON.stringify(e,null,2)}),f("div",{children:[f("a",{href:"#",class:"mr-3 !py-2",onClick:g,role:"button",children:i("save")}),f("a",{class:"secondary text-sm mr-3",href:"https://immersive-translate.owenyoung.com/advanced",children:[i("help"),"?"]}),f("a",{href:"#",onClick:d,class:"text-sm secondary mr-2",children:i("reset")})]})]}),f("details",{class:"py-2",children:[f("summary",{children:"Click to expand the final config"}),f("pre",{children:f("code",{children:JSON.stringify(o,null,2)})})]})]}):f("div",{children:"loading"})}function wi(){let[e,t,n,r]=st(),[o,a]=Y(null),{t:i}=oe();ge(()=>{Ce().then(g=>{a(g)})},[]);let s=g=>{t(()=>({...g}))},c=g=>{try{let d=JSON.parse(g.target.value);s(d)}catch(d){St(`Invalid JSON ${d.message}`)}},u=g=>{g.preventDefault();let d=document.createElement("input");d.setAttribute("type","file"),d.setAttribute("accept","text/plain"),d.style.display="none",document.body.appendChild(d),d.oninput=m=>{let p=m.target,b=new FileReader;b.onload=function(){try{let x=JSON.parse(b.result);s(x),Ze(i("successImportConfig"))}catch(x){St(`Invalid JSON ${x.message}`)}},b.readAsText(p.files[0])},d.click(),document.body.removeChild(d)},l=g=>{g.preventDefault(),confirm(i("confirmResetConfig"))&&(s(Xt()),Ze(i("resetSuccess")),setTimeout(()=>{Dt().catch(d=>{j.error("clean local config error",d)})},500))};return f("div",{children:[f("div",{class:"nav",children:f("strong",{class:"text-lg",children:i("import_export")})}),f("div",{class:"pb-2",children:[f("a",{class:"mr-2 secondary",onClick:u,href:"#",role:"button",children:[f("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[f("path",{fill:"none",d:"M0 0h24v24H0z"}),f("path",{d:"M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"})]}),i("import")]}),f("a",{href:"data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),download:"immersive-translate-backup-"+new Date().toISOString().replace(/T/,"_").replace(/\..+/,"").replace(/\:/g,".")+".txt",class:"secondary mr-4",role:"button",children:[f("svg",{class:"inline mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[f("path",{fill:"none",d:"M0 0h24v24H0z"}),f("path",{d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"})]}),i("export")]}),f("a",{href:"#",onClick:l,class:"secondary text-sm",children:i("reset")})]}),f("details",{class:"pt-4",children:[f("summary",{children:i("clickToExpandConfig")}),f("pre",{children:f("code",{children:JSON.stringify(e,null,2)})})]})]})}function Fa(){return X.runtime.getManifest().version}var zh="buildinConfig",Wh={},pf=nu(zh,Wh);function Si(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}function Ei(e,t=2e3){return n=>{let r,o=0;return a=>{++o==e&&(n(a),o=0),clearTimeout(r),r=setTimeout(()=>o=0,t)}}}async function hf(){let e=["bingGlobalConfig","baiduGlobalConfig"];for(let t of e)await X.storage.local.remove(t);xe()||await gu()}function bf(){return xe()?Promise.resolve("0 B"):ps()}var qh=({date:e})=>{let{t}=oe();return f("p",{class:"text-sm",children:[t("The local rules are up to date")," ",new Date(e).toLocaleString()]})},Vh=({date:e})=>{let{t}=oe();return f("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},Kh=()=>{let{t:e}=oe();return f("p",{class:"text-sm","aria-busy":!0,children:[e("Checking for updates"),"..."]})},Gh=()=>{let{t:e}=oe();return f("p",{class:"text-sm",children:[e("Rules are being synchronized"),"..."]})},Jh=({minVersion:e})=>{let{t}=oe();return f("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},Yh=({latestVersion:e})=>{let{t}=oe();return f("p",{class:"text-sm",children:[t("foundNewVersion"),":"," ",f("a",{href:"https://github.com/immersive-translate/immersive-translate/releases",children:e})]})},Xh=()=>{let{t:e}=oe();return f("p",{class:"text-sm",children:e("theLocalExtensionIsUpToUpdate")})},Qh=({message:e,handleSyncing:t,date:n})=>{let{t:r}=oe();return f("p",{class:"text-sm",children:[r("failToSyncRules")," ",f("a",{onClick:t,children:r("retry")}),f("br",{}),r("failedReason"),"\uFF1A",e,f("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function Ci(){let[e,t]=Y(null),{t:n}=oe(),[r,o]=Y(n("calculating")+"..."),[a,i]=Y(null),[s,c]=pf(),[u,l]=Y(null),[g,d]=Y(""),[m,p]=Y(!1),[b,x]=Y(!1),[h,y]=Y(null),[S,A]=Y(null),[O,v,E,N]=st(),[w,P]=Y(!1),U=Fa(),R=async()=>{d("");let z=a;if(a===null)try{let Z=await Cn({url:qo});Z?(i(Z),z=Z,p(!0)):(d(n("unknownError")),l(null))}catch(Z){l(null),d(Z.message);return}z!==null?(c(z),l(!1),t(z.buildinConfigUpdatedAt)):(d(n("canNotFetchRemoteRule")),l(null))};ge(()=>{Ce().then(z=>{let Z=z.buildinConfigUpdatedAt;y(z);let ee=new Date(Z);t(Z),Cn({url:qo}).then(L=>{let $=L.minVersion,Q=U;i(L);let C=L.latestVersion;if(C&&(Si(Q,C)?A(!0):A(!1)),Si(Q,$)){let I=L.buildinConfigUpdatedAt;new Date(I)>ee?(l(!0),R()):l(!1)}else x(!0),l(null)}).catch(L=>{l(null),d(L.message)})}),bf().then(z=>{o(z)})},[]),ge(()=>{Ce().then(z=>{y(z)})},[O,e]);let _=z=>{v(Z=>{let ee=!Z.alpha;return ee?Ze(n("enableAlphaSuccess")):Ze(n("disableAlphaSuccess")),{...Z,alpha:ee}})},H=z=>{z.preventDefault(),z.stopPropagation(),P(!0),ou().catch(Z=>{j.error("clear build config failed:",Z)}),Dt().catch(Z=>{j.error("clear local config failed:",Z)}),hf().then(()=>{P(!1),Ze("\u6E05\u7406\u6210\u529F"),o("0 B")}).catch(Z=>{P(!1),St(Z.message)})},B=z=>{v(Z=>({...Z,cache:z}))};return h?f("div",{class:"text-sm",children:[f("div",{class:"nav",children:f("strong",{onClick:Ei(7)(_),class:"text-lg immersive-translate-no-select",children:n("about")})}),f("p",{onClick:Ei(7)(_),class:"mb-2 immersive-translate-no-select",children:["V",U]}),S===!1&&f(Yh,{latestVersion:a?.latestVersion}),S===!0&&f(Xh,{}),f("fieldset",{children:f("label",{for:"switch",children:[f("input",{type:"checkbox",id:"cache",name:"cache",role:"switch",onChange:()=>{B(!h.cache)},checked:h.cache}),n("allowCacheTranslations")]})}),!xe()&&r&&f("p",{class:"text-sm",children:[n("cacheSize"),"\xA0",r," \xA0 ",w?f("span",{children:[n("cleaning"),"..."]}):f("a",{class:"text-sm",href:"#",onClick:H,children:n("cleanCache")})]}),g?f(Qh,{handleSyncing:R,message:g,date:e||""}):b?f(Jh,{minVersion:a.minVersion}):u===null?f(Kh,{}):u===!0?f(Gh,{}):m?f(Vh,{date:e}):f(qh,{date:e})]}):null}function Li(){let e=is(),[t,n,r,o]=st(),[a,i]=Y(null),{t:s}=oe();ge(()=>{Ce().then(g=>{kt({config:g,url:globalThis.location.href}).then(d=>{i(d)})})},[t]);let c=g=>{n(d=>({...d,translationTheme:g}))},u=g=>{n(d=>({...d,interfaceLanguage:g}))};if(!a)return f("div",{children:"loading"});let l=a.config;return f("div",{children:[f("div",{class:"nav",children:f("strong",{class:"text-lg",children:s("advanced")})}),f("div",{class:"nav",children:[f(Te,{title:s("translate all areas of the page"),description:s("translationAreaDescription")}),f("label",{for:"switch",children:f("input",{type:"checkbox",id:"switch",name:"switch",role:"switch",onChange:g=>{let d=g.target.checked;n(m=>({...m,translationArea:d?"body":"main"}))},checked:l.translationArea==="body"})})]}),f("div",{class:"nav",children:[f(Te,{title:s("translate to the bottom of the page"),description:s("translateToThePageEndImmediatelyDescription")}),f("label",{for:"switch",children:f("input",{type:"checkbox",onChange:g=>{let d=g.target.checked;n(m=>({...m,translationStartMode:d?"immediate":"dynamic"}))},checked:l.translationStartMode==="immediate",id:"switch",name:"switch",role:"switch"})})]}),f("div",{class:"nav",children:[f(Te,{title:s("translationLineBreakSettingTitle"),description:s("translationLineBreakSettingDescription",{count:e.generalRule.blockMinTextCount})}),f("select",{class:"select",onChange:g=>{n(d=>{let m=d.generalRule||{};return parseInt(g.target.value)===0?m={...m,blockMinTextCount:0,blockMinWordCount:0}:m={...m,blockMinTextCount:e.generalRule.blockMinTextCount,blockMinWordCount:e.generalRule.blockMinWordCount},{...d,generalRule:m}})},children:[f("option",{value:32,selected:l.generalRule.blockMinTextCount>0,children:s("smartLineBreak")}),f("option",{value:0,selected:l.generalRule.blockMinTextCount===0,children:s("alwaysLineBreak")})]})]}),f("div",{class:"nav",children:[f(Te,{title:s("tempTranslateDomainTitle"),description:s("tempTranslateDomainDescription")}),f("select",{class:"select",onChange:g=>{n(d=>({...d,tempTranslateDomainMinutes:parseInt(g.target.value)}))},children:[f("option",{value:0,selected:l.tempTranslateDomainMinutes===0,children:s("disabled")}),f("option",{value:5,selected:l.tempTranslateDomainMinutes===5,children:s("xMinutes",{count:5})}),f("option",{value:10,selected:l.tempTranslateDomainMinutes===10,children:s("xMinutes",{count:10})}),f("option",{value:30,selected:l.tempTranslateDomainMinutes===30,children:s("xMinutes",{count:30})})]})]}),f("div",{class:"nav",children:[f(Te,{title:s("the number of characters to be translated first")}),f("label",{for:"count",children:f("input",{type:"number",id:"count",onChange:g=>{let d=g.target.value;n(m=>({...m,immediateTranslationTextCount:parseInt(d)}))},name:"count",value:l.immediateTranslationTextCount,placeholder:"Text Length",required:!0})})]})]})}var yf=Zn({presets:[qr(),Jr()]});function xf(){let e=document.getElementById("mount");e&&(async()=>{po(yf);let t=await Ce();t.debug&&j.setLevel("debug"),qa(f(uf,{lang:t.interfaceLanguage,fallbackLang:"zh-CN",translations:Da,children:f(Zh,{donateUrl:t.donateUrl})}),e)})()}function Zh(e){let t=zo(),{t:n}=oe(),r=Fa(),o=[{name:n("general"),props:{href:"#general",className:"secondary"}},{name:n("interface"),props:{href:"#interface",className:"secondary"}},{name:n("import_export"),props:{href:"#import_export",className:"secondary"}},{name:n("about"),props:{href:"#about",className:"secondary"}}];return o.forEach(a=>{t===a.props.href&&(a.props.className="primary",a.props["aria-current"]="page")}),f(et,{children:f("main",{class:"container-fluid",children:[f("aside",{children:f("nav",{class:"flex flex-col h-full justify-between",children:[f("div",{children:[f("hgroup",{children:[f("h4",{class:"cursor-pointer p-0 m-0",onClick:()=>{globalThis.location.hash="#general"},children:n("browser.brandName")}),f("h6",{class:"!text-sm",children:r})]}),f("ul",{children:o.map((a,i)=>f("li",{class:"li",children:f("a",{...a.props,children:a.name})},`nav-${i}`))})]}),f("div",{class:"m-0 p-0 flex flex-col",children:[f("a",{class:"py-3 text-xs no-focus secondary",href:e.donateUrl,children:[n("donateCafe"),"\u2615\uFE0F"]}),f("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/CHANGELOG.html",children:n("changelog")}),f("a",{class:"py-3 text-xs no-focus secondary",href:"https://immersive-translate.owenyoung.com/",children:n("document")}),f("a",{class:"py-3 text-xs no-focus secondary",href:"#developer",children:n("developer")})]})]})}),f("div",{role:"main",children:f(jo,{value:t,defaultCase:f(Oa,{}),cases:{"#general":f(Oa,{}),"#interface":f(Ti,{}),"#import_export":f(wi,{}),"#about":f(Ci,{}),"#advanced":f(Li,{}),"#developer":f(vi,{})}})})]})})}xf();
