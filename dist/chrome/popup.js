var lg=Object.defineProperty;var cg=(e,t)=>{for(var n in t)lg(e,n,{get:t[n],enumerable:!0})};var y={BUILD_TIME:"2023-02-01T12:19:35.399Z",VERSION:"0.2.38",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
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

.immersive-translate-loading-spinner {
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

.immersive-translate-loading-text:before {
  content: "...";
}

.immersive-translate-loading-none {
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
`,MOCK:"0",DEBUG:"0"};var gg=Object.create,$s=Object.defineProperty,fg=Object.getOwnPropertyDescriptor,js=Object.getOwnPropertyNames,dg=Object.getPrototypeOf,mg=Object.prototype.hasOwnProperty,pg=(e,t)=>function(){return t||(0,e[js(e)[0]])((t={exports:{}}).exports,t),t.exports},hg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of js(t))!mg.call(e,o)&&o!==n&&$s(e,o,{get:()=>t[o],enumerable:!(r=fg(t,o))||r.enumerable});return e},bg=(e,t,n)=>(n=e!=null?gg(dg(e)):{},hg(t||!e||!e.__esModule?$s(n,"default",{value:e,enumerable:!0}):n,e)),yg=pg({"esm-build-3120606719048d5175703f3b3f8812d3453a0d07-9fbf1061/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var o={exports:{}};r(o),n.browser=o.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",o=a=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(x,_=void 0){super(_),this.createItem=x}get(x){return this.has(x)||this.set(x,this.createItem(x)),super.get(x)}}let l=S=>S&&typeof S=="object"&&typeof S.then=="function",u=(S,x)=>(..._)=>{a.runtime.lastError?S.reject(new Error(a.runtime.lastError.message)):x.singleCallbackArg||_.length<=1&&x.singleCallbackArg!==!1?S.resolve(_[0]):S.resolve(_)},c=S=>S==1?"argument":"arguments",f=(S,x)=>function(L,...O){if(O.length<x.minArgs)throw new Error(`Expected at least ${x.minArgs} ${c(x.minArgs)} for ${S}(), got ${O.length}`);if(O.length>x.maxArgs)throw new Error(`Expected at most ${x.maxArgs} ${c(x.maxArgs)} for ${S}(), got ${O.length}`);return new Promise(($,A)=>{if(x.fallbackToNoCallback)try{L[S](...O,u({resolve:$,reject:A},x))}catch(H){console.warn(`${S} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,H),L[S](...O),x.fallbackToNoCallback=!1,x.noCallback=!0,$()}else x.noCallback?(L[S](...O),$()):L[S](...O,u({resolve:$,reject:A},x))})},m=(S,x,_)=>new Proxy(x,{apply(L,O,$){return _.call(O,S,...$)}}),g=Function.call.bind(Object.prototype.hasOwnProperty),d=(S,x={},_={})=>{let L=Object.create(null),O={has(A,H){return H in S||H in L},get(A,H,j){if(H in L)return L[H];if(!(H in S))return;let J=S[H];if(typeof J=="function")if(typeof x[H]=="function")J=m(S,S[H],x[H]);else if(g(_,H)){let Pe=f(H,_[H]);J=m(S,S[H],Pe)}else J=J.bind(S);else if(typeof J=="object"&&J!==null&&(g(x,H)||g(_,H)))J=d(J,x[H],_[H]);else if(g(_,"*"))J=d(J,x[H],_["*"]);else return Object.defineProperty(L,H,{configurable:!0,enumerable:!0,get(){return S[H]},set(Pe){S[H]=Pe}}),J;return L[H]=J,J},set(A,H,j,J){return H in L?L[H]=j:S[H]=j,!0},defineProperty(A,H,j){return Reflect.defineProperty(L,H,j)},deleteProperty(A,H){return Reflect.deleteProperty(L,H)}},$=Object.create(S);return new Proxy($,O)},T=S=>({addListener(x,_,...L){x.addListener(S.get(_),...L)},hasListener(x,_){return x.hasListener(S.get(_))},removeListener(x,_){x.removeListener(S.get(_))}}),b=new s(S=>typeof S!="function"?S:function(_){let L=d(_,{},{getContent:{minArgs:0,maxArgs:0}});S(L)}),p=new s(S=>typeof S!="function"?S:function(_,L,O){let $=!1,A,H=new Promise(Ke=>{A=function(ve){$=!0,Ke(ve)}}),j;try{j=S(_,L,A)}catch(Ke){j=Promise.reject(Ke)}let J=j!==!0&&l(j);if(j!==!0&&!J&&!$)return!1;let Pe=Ke=>{Ke.then(ve=>{O(ve)},ve=>{let fe;ve&&(ve instanceof Error||typeof ve.message=="string")?fe=ve.message:fe="An unexpected error occurred",O({__mozWebExtensionPolyfillReject__:!0,message:fe})}).catch(ve=>{console.error("Failed to send onMessage rejected reply",ve)})};return Pe(J?j:H),!0}),h=({reject:S,resolve:x},_)=>{a.runtime.lastError?a.runtime.lastError.message===r?x():S(new Error(a.runtime.lastError.message)):_&&_.__mozWebExtensionPolyfillReject__?S(new Error(_.message)):x(_)},w=(S,x,_,...L)=>{if(L.length<x.minArgs)throw new Error(`Expected at least ${x.minArgs} ${c(x.minArgs)} for ${S}(), got ${L.length}`);if(L.length>x.maxArgs)throw new Error(`Expected at most ${x.maxArgs} ${c(x.maxArgs)} for ${S}(), got ${L.length}`);return new Promise((O,$)=>{let A=h.bind(null,{resolve:O,reject:$});L.push(A),_.sendMessage(...L)})},E={devtools:{network:{onRequestFinished:T(b)}},runtime:{onMessage:T(p),onMessageExternal:T(p),sendMessage:w.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:w.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},D={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":D},services:{"*":D},websites:{"*":D}},d(a,E,i)};n.exports=o(chrome)}else n.exports=globalThis.browser})}}),Tg=bg(yg()),{default:Us,...xg}=Tg,va=Us!==void 0?Us:xg;globalThis.immersiveTranslateBrowserAPI=va;function sn(){let e,t="pending",n=new Promise((r,o)=>{e={async resolve(a){await a,t="fulfilled",r(a)},reject(a){t="rejected",o(a)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var Sa=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function pr(e,t){let n=sn(),r=setTimeout(()=>n.reject(new Sa),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function Mn(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((o,a)=>{let i=()=>{clearTimeout(l),a(new DOMException("Delay was aborted.","AbortError"))},l=setTimeout(()=>{n?.removeEventListener("abort",i),o()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(l)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var Ws=class{#e=0;#t=[];#n=[];#r=sn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=sn()}}[Symbol.asyncIterator](){return this.iterate()}};var ze={};cg(ze,{bgBlack:()=>Kg,bgBlue:()=>Xg,bgBrightBlack:()=>tf,bgBrightBlue:()=>of,bgBrightCyan:()=>lf,bgBrightGreen:()=>rf,bgBrightMagenta:()=>sf,bgBrightRed:()=>nf,bgBrightWhite:()=>cf,bgBrightYellow:()=>af,bgCyan:()=>Zg,bgGreen:()=>Jg,bgMagenta:()=>Qg,bgRed:()=>Gg,bgRgb24:()=>df,bgRgb8:()=>gf,bgWhite:()=>ef,bgYellow:()=>Yg,black:()=>Mg,blue:()=>Ig,bold:()=>Eg,brightBlack:()=>Vs,brightBlue:()=>Wg,brightCyan:()=>qg,brightGreen:()=>$g,brightMagenta:()=>zg,brightRed:()=>Ug,brightWhite:()=>Vg,brightYellow:()=>jg,cyan:()=>Fg,dim:()=>Ag,getColorEnabled:()=>vg,gray:()=>Bg,green:()=>Dg,hidden:()=>kg,inverse:()=>_g,italic:()=>Lg,magenta:()=>Og,red:()=>Rg,reset:()=>Sg,rgb24:()=>ff,rgb8:()=>uf,setColorEnabled:()=>wg,strikethrough:()=>Pg,stripColor:()=>pf,underline:()=>Cg,white:()=>Hg,yellow:()=>Ng});var{Deno:zs}=globalThis,qs=typeof zs?.noColor=="boolean"?zs.noColor:!0,Ea=!qs;function wg(e){qs||(Ea=e)}function vg(){return Ea}function W(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function z(e,t){return Ea?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function Sg(e){return z(e,W([0],0))}function Eg(e){return z(e,W([1],22))}function Ag(e){return z(e,W([2],22))}function Lg(e){return z(e,W([3],23))}function Cg(e){return z(e,W([4],24))}function _g(e){return z(e,W([7],27))}function kg(e){return z(e,W([8],28))}function Pg(e){return z(e,W([9],29))}function Mg(e){return z(e,W([30],39))}function Rg(e){return z(e,W([31],39))}function Dg(e){return z(e,W([32],39))}function Ng(e){return z(e,W([33],39))}function Ig(e){return z(e,W([34],39))}function Og(e){return z(e,W([35],39))}function Fg(e){return z(e,W([36],39))}function Hg(e){return z(e,W([37],39))}function Bg(e){return Vs(e)}function Vs(e){return z(e,W([90],39))}function Ug(e){return z(e,W([91],39))}function $g(e){return z(e,W([92],39))}function jg(e){return z(e,W([93],39))}function Wg(e){return z(e,W([94],39))}function zg(e){return z(e,W([95],39))}function qg(e){return z(e,W([96],39))}function Vg(e){return z(e,W([97],39))}function Kg(e){return z(e,W([40],49))}function Gg(e){return z(e,W([41],49))}function Jg(e){return z(e,W([42],49))}function Yg(e){return z(e,W([43],49))}function Xg(e){return z(e,W([44],49))}function Qg(e){return z(e,W([45],49))}function Zg(e){return z(e,W([46],49))}function ef(e){return z(e,W([47],49))}function tf(e){return z(e,W([100],49))}function nf(e){return z(e,W([101],49))}function rf(e){return z(e,W([102],49))}function af(e){return z(e,W([103],49))}function of(e){return z(e,W([104],49))}function sf(e){return z(e,W([105],49))}function lf(e){return z(e,W([106],49))}function cf(e){return z(e,W([107],49))}function St(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function uf(e,t){return z(e,W([38,5,St(t)],39))}function gf(e,t){return z(e,W([48,5,St(t)],49))}function ff(e,t){return typeof t=="number"?z(e,W([38,2,t>>16&255,t>>8&255,t&255],39)):z(e,W([38,2,St(t.r),St(t.g),St(t.b)],39))}function df(e,t){return typeof t=="number"?z(e,W([48,2,t>>16&255,t>>8&255,t&255],49)):z(e,W([48,2,St(t.r),St(t.g),St(t.b)],49))}var mf=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function pf(e){return e.replace(mf,"")}function hr(e,t){let n=null,r=null,o=(...a)=>{o.clear(),r=()=>{o.clear(),e.call(o,...a)},n=setTimeout(r,t)};return o.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},o.flush=()=>{r?.()},Object.defineProperty(o,"pending",{get:()=>typeof n=="number"}),o}var vr,V,Xs,hf,Rn,Ks,Qs,Tr={},Zs=[],bf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Et(e,t){for(var n in t)e[n]=t[n];return e}function ei(e){var t=e.parentNode;t&&t.removeChild(e)}function ti(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?vr.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return br(e,i,r,o,null)}function br(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Xs};return o==null&&V.vnode!=null&&V.vnode(a),a}function gt(e){return e.children}function yr(e,t){this.props=e,this.context=t}function ln(e,t){if(t==null)return e.__?ln(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ln(e):null}function ni(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ni(e)}}function Aa(e){(!e.__d&&(e.__d=!0)&&Rn.push(e)&&!xr.__r++||Ks!==V.debounceRendering)&&((Ks=V.debounceRendering)||setTimeout)(xr)}function xr(){for(var e;xr.__r=Rn.length;)e=Rn.sort(function(t,n){return t.__v.__b-n.__v.__b}),Rn=[],e.some(function(t){var n,r,o,a,i,s;t.__d&&(i=(a=(n=t).__v).__e,(s=n.__P)&&(r=[],(o=Et({},a)).__v=a.__v+1,La(s,a,o,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[i]:null,r,i??ln(a),a.__h),si(r,a),a.__e!=i&&ni(a)))})}function ri(e,t,n,r,o,a,i,s,l,u){var c,f,m,g,d,T,b,p=r&&r.__k||Zs,h=p.length;for(n.__k=[],c=0;c<t.length;c++)if((g=n.__k[c]=(g=t[c])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?br(null,g,null,null,g):Array.isArray(g)?br(gt,{children:g},null,null,null):g.__b>0?br(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(m=p[c])===null||m&&g.key==m.key&&g.type===m.type)p[c]=void 0;else for(f=0;f<h;f++){if((m=p[f])&&g.key==m.key&&g.type===m.type){p[f]=void 0;break}m=null}La(e,g,m=m||Tr,o,a,i,s,l,u),d=g.__e,(f=g.ref)&&m.ref!=f&&(b||(b=[]),m.ref&&b.push(m.ref,null,g),b.push(f,g.__c||d,g)),d!=null?(T==null&&(T=d),typeof g.type=="function"&&g.__k===m.__k?g.__d=l=ai(g,l,e):l=oi(e,g,m,p,d,l),typeof n.type=="function"&&(n.__d=l)):l&&m.__e==l&&l.parentNode!=e&&(l=ln(m))}for(n.__e=T,c=h;c--;)p[c]!=null&&(typeof n.type=="function"&&p[c].__e!=null&&p[c].__e==n.__d&&(n.__d=ln(r,c+1)),li(p[c],p[c]));if(b)for(c=0;c<b.length;c++)ii(b[c],b[++c],b[++c])}function ai(e,t,n){for(var r,o=e.__k,a=0;o&&a<o.length;a++)(r=o[a])&&(r.__=e,t=typeof r.type=="function"?ai(r,t,n):oi(n,r,r,o,r.__e,t));return t}function oi(e,t,n,r,o,a){var i,s,l;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),i=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==o)break e;e.insertBefore(o,a),i=a}return i!==void 0?i:o.nextSibling}function yf(e,t,n,r,o){var a;for(a in n)a==="children"||a==="key"||a in t||wr(e,a,null,n[a],r);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||wr(e,a,t[a],n[a],r)}function Gs(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||bf.test(t)?n:n+"px"}function wr(e,t,n,r,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Gs(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Gs(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r||e.addEventListener(t,a?Ys:Js,a):e.removeEventListener(t,a?Ys:Js,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Js(e){this.l[e.type+!1](V.event?V.event(e):e)}function Ys(e){this.l[e.type+!0](V.event?V.event(e):e)}function La(e,t,n,r,o,a,i,s,l){var u,c,f,m,g,d,T,b,p,h,w,E,D,S=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(u=V.__b)&&u(t);try{e:if(typeof S=="function"){if(b=t.props,p=(u=S.contextType)&&r[u.__c],h=u?p?p.props.value:u.__:r,n.__c?T=(c=t.__c=n.__c).__=c.__E:("prototype"in S&&S.prototype.render?t.__c=c=new S(b,h):(t.__c=c=new yr(b,h),c.constructor=S,c.render=xf),p&&p.sub(c),c.props=b,c.state||(c.state={}),c.context=h,c.__n=r,f=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Et({},c.__s)),Et(c.__s,S.getDerivedStateFromProps(b,c.__s))),m=c.props,g=c.state,f)S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(S.getDerivedStateFromProps==null&&b!==m&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(b,h),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(b,c.__s,h)===!1||t.__v===n.__v){c.props=b,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(x){x&&(x.__=t)}),c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(b,c.__s,h),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(m,g,d)})}if(c.context=h,c.props=b,c.__v=t,c.__P=e,w=V.__r,E=0,"prototype"in S&&S.prototype.render)c.state=c.__s,c.__d=!1,w&&w(t),u=c.render(c.props,c.state,c.context);else do c.__d=!1,w&&w(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++E<25);c.state=c.__s,c.getChildContext!=null&&(r=Et(Et({},r),c.getChildContext())),f||c.getSnapshotBeforeUpdate==null||(d=c.getSnapshotBeforeUpdate(m,g)),D=u!=null&&u.type===gt&&u.key==null?u.props.children:u,ri(e,Array.isArray(D)?D:[D],t,n,r,o,a,i,s,l),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),T&&(c.__E=c.__=null),c.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Tf(n.__e,t,n,r,o,a,i,l);(u=V.diffed)&&u(t)}catch(x){t.__v=null,(l||a!=null)&&(t.__e=s,t.__h=!!l,a[a.indexOf(s)]=null),V.__e(x,t,n)}}function si(e,t){V.__c&&V.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){V.__e(r,n.__v)}})}function Tf(e,t,n,r,o,a,i,s){var l,u,c,f=n.props,m=t.props,g=t.type,d=0;if(g==="svg"&&(o=!0),a!=null){for(;d<a.length;d++)if((l=a[d])&&"setAttribute"in l==!!g&&(g?l.localName===g:l.nodeType===3)){e=l,a[d]=null;break}}if(e==null){if(g===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,m.is&&m),a=null,s=!1}if(g===null)f===m||s&&e.data===m||(e.data=m);else{if(a=a&&vr.call(e.childNodes),u=(f=n.props||Tr).dangerouslySetInnerHTML,c=m.dangerouslySetInnerHTML,!s){if(a!=null)for(f={},d=0;d<e.attributes.length;d++)f[e.attributes[d].name]=e.attributes[d].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(yf(e,m,f,o,s),c)t.__k=[];else if(d=t.props.children,ri(e,Array.isArray(d)?d:[d],t,n,r,o&&g!=="foreignObject",a,i,a?a[0]:n.__k&&ln(n,0),s),a!=null)for(d=a.length;d--;)a[d]!=null&&ei(a[d]);s||("value"in m&&(d=m.value)!==void 0&&(d!==e.value||g==="progress"&&!d||g==="option"&&d!==f.value)&&wr(e,"value",d,f.value,!1),"checked"in m&&(d=m.checked)!==void 0&&d!==e.checked&&wr(e,"checked",d,f.checked,!1))}return e}function ii(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){V.__e(r,n)}}function li(e,t,n){var r,o;if(V.unmount&&V.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ii(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){V.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&li(r[o],t,typeof e.type!="function");n||e.__e==null||ei(e.__e),e.__=e.__e=e.__d=void 0}function xf(e,t,n){return this.constructor(e,n)}function Ca(e,t,n){var r,o,a;V.__&&V.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],La(t,e=(!r&&n||t).__k=ti(gt,null,[e]),o||Tr,Tr,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?vr.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r),si(a,e)}function _a(e,t){var n={__c:t="__cC"+Qs++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.some(Aa)},this.sub=function(i){o.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}vr=Zs.slice,V={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(s){e=s}throw e}},Xs=0,hf=function(e){return e!=null&&e.constructor===void 0},yr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Et({},this.state),typeof e=="function"&&(e=e(Et({},n),this.props)),e&&Et(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Aa(this))},yr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Aa(this))},yr.prototype.render=gt,Rn=[],xr.__r=0,Qs=0;var Nn,xe,ka,ci,Dn=0,hi=[],Sr=[],ui=V.__b,gi=V.__r,fi=V.diffed,di=V.__c,mi=V.unmount;function Ar(e,t){V.__h&&V.__h(xe,e,Dn||t),Dn=0;var n=xe.__H||(xe.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Sr}),n.__[e]}function ae(e){return Dn=1,wf(Ti,e)}function wf(e,t,n){var r=Ar(Nn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ti(void 0,t),function(a){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,a);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=xe,!xe.u)){xe.u=!0;var o=xe.shouldComponentUpdate;xe.shouldComponentUpdate=function(a,i,s){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(c){return c.__c});if(l.every(function(c){return!c.__N}))return!o||o.call(this,a,i,s);var u=!1;return l.forEach(function(c){if(c.__N){var f=c.__[0];c.__=c.__N,c.__N=void 0,f!==c.__[0]&&(u=!0)}}),!!u&&(!o||o.call(this,a,i,s))}}return r.__N||r.__}function je(e,t){var n=Ar(Nn++,3);!V.__s&&yi(n.__H,t)&&(n.__=e,n.i=t,xe.__H.__h.push(n))}function Ma(e){return Dn=5,bi(function(){return{current:e}},[])}function bi(e,t){var n=Ar(Nn++,7);return yi(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function In(e,t){return Dn=8,bi(function(){return e},t)}function Ra(e){var t=xe.context[e.__c],n=Ar(Nn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(xe)),t.props.value):e.__}function vf(){for(var e;e=hi.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Er),e.__H.__h.forEach(Pa),e.__H.__h=[]}catch(t){e.__H.__h=[],V.__e(t,e.__v)}}V.__b=function(e){typeof e.type!="function"||e.o||e.type===gt?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),xe=null,ui&&ui(e)},V.__r=function(e){gi&&gi(e),Nn=0;var t=(xe=e.__c).__H;t&&(ka===xe?(t.__h=[],xe.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Sr,n.__N=n.i=void 0})):(t.__h.forEach(Er),t.__h.forEach(Pa),t.__h=[])),ka=xe},V.diffed=function(e){fi&&fi(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(hi.push(t)!==1&&ci===V.requestAnimationFrame||((ci=V.requestAnimationFrame)||Sf)(vf)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Sr&&(n.__=n.__V),n.i=void 0,n.__V=Sr})),ka=xe=null},V.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Er),n.__h=n.__h.filter(function(r){return!r.__||Pa(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],V.__e(r,n.__v)}}),di&&di(e,t)},V.unmount=function(e){mi&&mi(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Er(r)}catch(o){t=o}}),n.__H=void 0,t&&V.__e(t,n.__v))};var pi=typeof requestAnimationFrame=="function";function Sf(e){var t,n=function(){clearTimeout(r),pi&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);pi&&(t=requestAnimationFrame(n))}function Er(e){var t=xe,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),xe=t}function Pa(e){var t=xe;e.__c=e.__(),xe=t}function yi(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ti(e,t){return typeof t=="function"?t(e):t}var Rh=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Af=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function Lr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,o=0,a=0;function i(){let c=Date.now();return c-o>t?(a=1,o=c,0):(a<e?a++:(o+=t,a=1),o-c)}let s=[];function l(){let c=Date.now();if(s.length<e)return s.push(c),0;let f=s.shift()+t;return c>=f?(s.push(c),0):(s.push(f),f-c)}let u=n?l:i;return c=>{let f=function(...m){if(!f.isEnabled)return(async()=>c.apply(this,m))();let g;return new Promise((d,T)=>{g=setTimeout(()=>{d(c.apply(this,m)),r.delete(g)},u()),r.set(g,T)})};return f.abort=()=>{for(let m of r.keys())clearTimeout(m),r.get(m)(new Af);r.clear(),s.splice(0,s.length)},f.isEnabled=!0,f}}var Da;function ja(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Ai(e,t=","){return e.map(ja).join(t)}var Li=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Cr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Ci(e,t="@media "){return t+Tt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function Tt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Lf(){}var Ne={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function _i(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Ba(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(_i(e),15)<<18}var Cf=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Wa({n:e,i:t,v:n=[]},r,o,a){for(let s of(e&&(e=ja({n:e,i:t,v:n})),a=[...Tt(a)],n)){let l=r.theme("screens",s);for(let u of Tt(l&&Ci(l)||r.v(s))){var i;a.push(u),o|=l?67108864|Ba(u):s=="dark"?1073741824:u[0]=="@"?Ba(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Cf.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var za=new Map;function xi(e){if(e.d){let t=[],n=Na(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?Na(r,a=>Na(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):Ia(a,i)}return Ia(i,a)})):r,"&"),r=>Ia(r,e.n?"."+Li(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function Na(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function Ia(e,t){return e.replace(/&/g,t)}var _f=new Intl.Collator("en",{numeric:!0});function kf(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=ki(e[o],t)?n=o+1:r=o}return r}function ki(e,t){let n=e.p&Ne.o;return n==(t.p&Ne.o)&&(n==Ne.b||n==Ne.o)?0:e.p-t.p||e.o-t.o||_f.compare(e.n,t.n)}function Oa(e,t){return Math.round(parseInt(e,16)*t)}function Pf(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[Oa(e.substr(1,a),i),Oa(e.substr(1+a,a),i),Oa(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function Pi(e,t,n,r,o=[]){return function a(i,{n:s,p:l,r:u=[],i:c},f){let m=[],g="",d=0,T=0;for(let h in i||{}){var b,p;let w=i[h];if(h[0]=="@"){if(!w)continue;if(h[1]=="a"){m.push(...Mi(s,l,Va(""+w),f,l,u,c,!0));continue}if(h[1]=="l"){for(let E of Tt(w))m.push(...a(E,{n:s,p:(b=Ne[h[7]],l&~Ne.o|b),r:u,i:c},f));continue}if(h[1]=="i"){m.push(...Tt(w).map(E=>({p:-1,o:0,r:[],d:h+" "+E})));continue}if(h[1]=="k"){m.push({p:Ne.d,o:0,r:[h],d:a(w,{p:Ne.d},f).map(xi).join("")});continue}if(h[1]=="f"){m.push(...Tt(w).map(E=>({p:Ne.d,o:0,r:[h],d:a(E,{p:Ne.d},f).map(xi).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))h=="label"&&w?s=w+Cr(JSON.stringify([l,c,i])):(w||w===0)&&(h=h.replace(/[A-Z]/g,E=>"-"+E.toLowerCase()),T+=1,d=Math.max(d,(p=h)[0]=="-"?0:_i(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+Tt(w).map(E=>f.s(h,Mf(""+E,f.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let E=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(D,S)=>{let x=f.theme("screens",S);return x?(E|=67108864,Ci(x,"")):D}),E|=Ba(h)),m.push(...a(w,{n:s,p:E,r:[...u,h],i:c},f))}else m.push(...a(w,{p:l,r:[...u,h]},f))}return m.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(d||15,15),r:u,d:g}),m.sort(ki)}(e,Wa(t,n,r,o),n)}function Mf(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i)=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?Pf(s):""+s})}function qa(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function Ua(e,t,n=Ne.u,r,o){let a=[];for(let i of e)for(let s of function(l,u,c,f,m){var g;l={...l,i:l.i||m};let d=function(T,b){let p=za.get(T.n);return p?p(T,b):b.r(T.n,T.v[0]=="dark")}(l,u);return d?typeof d=="string"?({r:f,p:c}=Wa(l,u,c,f),qa(Ua(Va(d),u,c,f,l.i),l.n)):Array.isArray(d)?d.map(T=>{var b,p;return{o:0,...T,r:[...Tt(f),...Tt(T.r)],p:(b=c,p=(g=T.p)!=null?g:c,b&~Ne.o|p)}}):Pi(d,l,u,c,f):[{c:ja(l),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(kf(a,s),0,s);return a}function Mi(e,t,n,r,o,a,i,s){return qa((s?n.flatMap(l=>Ua([l],r,o,a,i)):Ua(n,r,o,a,i)).map(l=>l.p&Ne.o&&(l.n||t==Ne.b)?{...l,p:l.p&~Ne.o|t,o:0}:l),e)}function Rf(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:l,r:u,i:c}=Wa(a,i,t);return n&&Mi(s,t,n,i,l,u,c,r)},za.set(e,o),e}function Fa(e,t){if(e[e.length-1]!="("){let n=[],r=!1,o=!1,a="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),o=!o),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(a+=(a&&"-")+i)}a&&(o&&(a="-"+a),t[0].push({n:a,v:n.filter(Df),i:r}))}}function Df(e,t,n){return n.indexOf(e)==t}var wi=new Map;function Va(e){let t=wi.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,l=(u,c=0)=>{o!=s&&(n.push(e.slice(o,s+c)),u&&Fa(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let f=n[c-1];if(/[~@]$/.test(f)){let m=r.shift();n.length=c,Fa([...n,"#"],r);let{v:g}=r[0].pop();for(let d of m)d.v.splice(+(d.v[0]=="dark")-+(g[0]=="dark"),g.length);Fa([...n,Rf(f.length>1?f.slice(0,-1)+Cr(JSON.stringify([f,m])):f+"("+Ai(m)+")",Ne.a,m,/@$/.test(f))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),wi.set(e,t=r[0])}return t}function Ri(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function Di(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Ri(e,t,n=>Ha(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Ha(r),e?Ha(e):"")}function Ha(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Di(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var Vh=Ni("@"),Kh=Ni("~");function Ni(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(o,...a){return t(r,o,a)}});function t(n,r,o){return Ai(Va(n+e+"("+Di(r,o)+")"))}}function $a(e,t){return Array.isArray(e)?vi(Ri(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?vi(e):[e]}var Nf=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function vi(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=Nf.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function Ii(e,...t){var n,r;let o=$a(e,t),a=(((n=o.find(i=>i.label))==null?void 0:n.label)||"css")+Cr(JSON.stringify(o));return r=(i,s)=>qa(o.flatMap(l=>Pi(l,i,s,Ne.o)),a),za.set(a,r),a}var Gh=new Proxy(function(e,t){return Si("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return Si(t,n,r)}});function Si(e,t,n){return{toString:()=>Ii({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var Jh=Symbol();var Oi=new Proxy(Lf,{apply:(e,t,n)=>Da(n[0]),get(e,t){let n=Da[t];return typeof n=="function"?function(){return n.apply(Da,arguments)}:n}});var Yh=function e(t){return new Proxy(function(n,...r){return Ei(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(o,...a){return Ei(t,r,o,a)}})}();function Ei(e,t,n,r){return{toString(){let o=$a(n,r),a=Li(t+Cr(JSON.stringify([t,o])));return(typeof e=="function"?e:Oi)(Ii({[`@keyframes ${a}`]:$a(n,r)})),a}}}var Ka;function ro(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function qi(e,t=","){return e.map(ro).join(t)}var Vi=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function kr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Pr(e,t="@media "){return t+Je(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function Je(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Of(){}var Ie={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Ki(e){return e.match(/[-=:;]/g)?.length||0}function Za(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Ki(e),15)<<18}var Ff=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function ao({n:e,i:t,v:n=[]},r,o,a){e&&(e=ro({n:e,i:t,v:n})),a=[...Je(a)];for(let s of n){let l=r.theme("screens",s);for(let u of Je(l&&Pr(l)||r.v(s))){var i;a.push(u),o|=l?67108864|Za(u):s=="dark"?1073741824:u[0]=="@"?Za(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~Ff.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var oo=new Map;function Fi(e){if(e.d){let t=[],n=Ga(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?Ga(r,a=>Ga(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):Ja(a,i)}return Ja(i,a)})):r,"&"),r=>Ja(r,e.n?"."+Vi(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function Ga(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function Ja(e,t){return e.replace(/&/g,t)}var Hi=new Intl.Collator("en",{numeric:!0});function Hf(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=Gi(e[o],t)?n=o+1:r=o}return r}function Gi(e,t){let n=e.p&Ie.o;return n==(t.p&Ie.o)&&(n==Ie.b||n==Ie.o)?0:e.p-t.p||e.o-t.o||Hi.compare(Bi(e.n),Bi(t.n))||Hi.compare(Ui(e.n),Ui(t.n))}function Bi(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Ui(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Ya(e,t){return Math.round(parseInt(e,16)*t)}function At(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[Ya(e.substr(1,a),i),Ya(e.substr(1+a,a),i),Ya(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function Ji(e,t,n,r,o=[]){return function a(i,{n:s,p:l,r:u=[],i:c},f){let m=[],g="",d=0,T=0;for(let h in i||{}){var b,p;let w=i[h];if(h[0]=="@"){if(!w)continue;if(h[1]=="a"){m.push(...Xi(s,l,io(""+w),f,l,u,c,!0));continue}if(h[1]=="l"){for(let E of Je(w))m.push(...a(E,{n:s,p:(b=Ie[h[7]],l&~Ie.o|b),r:h[7]=="d"?[]:u,i:c},f));continue}if(h[1]=="i"){m.push(...Je(w).map(E=>({p:-1,o:0,r:[],d:h+" "+E})));continue}if(h[1]=="k"){m.push({p:Ie.d,o:0,r:[h],d:a(w,{p:Ie.d},f).map(Fi).join("")});continue}if(h[1]=="f"){m.push(...Je(w).map(E=>({p:Ie.d,o:0,r:[h],d:a(E,{p:Ie.d},f).map(Fi).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))h=="label"&&w?s=w+kr(JSON.stringify([l,c,i])):(w||w===0)&&(h=h.replace(/[A-Z]/g,E=>"-"+E.toLowerCase()),T+=1,d=Math.max(d,(p=h)[0]=="-"?0:Ki(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+Je(w).map(E=>f.s(h,Yi(""+E,f.theme)+(c?" !important":""))).join(";"));else if(h[0]=="@"||h.includes("&")){let E=l;h[0]=="@"&&(h=h.replace(/\bscreen\(([^)]+)\)/g,(D,S)=>{let x=f.theme("screens",S);return x?(E|=67108864,Pr(x,"")):D}),E|=Za(h)),m.push(...a(w,{n:s,p:E,r:[...u,h],i:c},f))}else m.push(...a(w,{p:l,r:[...u,h]},f))}return m.unshift({n:s,p:l,o:Math.max(0,15-T)+1.5*Math.min(d||15,15),r:u,d:g}),m.sort(Gi)}(e,ao(t,n,r,o),n)}function Yi(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i="")=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?At(s):""+Je(s).filter(l=>Object(l)!==l)})}function so(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function eo(e,t,n=Ie.u,r,o){let a=[];for(let i of e)for(let s of function(l,u,c,f,m){l={...l,i:l.i||m};let g=function(d,T){let b=oo.get(d.n);return b?b(d,T):T.r(d.n,d.v[0]=="dark")}(l,u);return g?typeof g=="string"?({r:f,p:c}=ao(l,u,c,f),so(eo(io(g),u,c,f,l.i),l.n)):Array.isArray(g)?g.map(d=>{var T,b;return{o:0,...d,r:[...Je(f),...Je(d.r)],p:(T=c,b=d.p??c,T&~Ie.o|b)}}):Ji(g,l,u,c,f):[{c:ro(l),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(Hf(a,s),0,s);return a}function Xi(e,t,n,r,o,a,i,s){return so((s?n.flatMap(l=>eo([l],r,o,a,i)):eo(n,r,o,a,i)).map(l=>l.p&Ie.o&&(l.n||t==Ie.b)?{...l,p:l.p&~Ie.o|t,o:0}:l),e)}function Bf(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:l,r:u,i:c}=ao(a,i,t);return n&&Xi(s,t,n,i,l,u,c,r)},oo.set(e,o),e}function Xa(e,t,n){if(e[e.length-1]!="("){let r=[],o=!1,a=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),o=!o),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(a&&(i="-"+i),t[0].push({n:i,v:r.filter(Uf),i:o}))}}function Uf(e,t,n){return n.indexOf(e)==t}var $i=new Map;function io(e){let t=$i.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,l=(u,c=0)=>{o!=s&&(n.push(e.slice(o,s+c)),u&&Xa(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let f=n[c-1];if(/[~@]$/.test(f)){let m=r.shift();n.length=c,Xa([...n,"#"],r);let{v:g}=r[0].pop();for(let d of m)d.v.splice(+(d.v[0]=="dark")-+(g[0]=="dark"),g.length);Xa([...n,Bf(f.length>1?f.slice(0,-1)+kr(JSON.stringify([f,m])):f+"("+qi(m)+")",Ie.a,m,/@$/.test(f))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}l(!0),$i.set(e,t=r[0])}return t}function Qi(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function Zi(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Qi(e,t,n=>Qa(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Qa(r),e?Qa(e):"")}function Qa(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Zi(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var m0=el("@"),p0=el("~");function el(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(o,...a){return t(r,o,a)}}});function t(n,r,o){return qi(io(n+e+"("+Zi(r,o)+")"))}}function to(e,t){return Array.isArray(e)?ji(Qi(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?ji(e):[e]}var $f=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function ji(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=$f.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function tl(e,...t){var n;let r=to(e,t),o=(r.find(a=>a.label)?.label||"css")+kr(JSON.stringify(r));return n=(a,i)=>so(r.flatMap(s=>Ji(s,a,i,Ie.o)),o),oo.set(o,n),o}var h0=new Proxy(function(e,t){return Wi("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return Wi(t,n,r)}}});function Wi(e,t,n){return{toString(){return tl({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function C(e,t,n){return[e,jf(t,n)]}function jf(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):no(n,1)}):n=>e||{[n[1]]:no(n,2)}}function no(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function k(e,t,n,r){return[e,Wf(t,n,r)]}function Wf(e,t,n){let r=typeof t=="string"?(o,a)=>({[t]:n?n(o,a):o._}):t||(({1:o,_:a},i,s)=>({[o||s]:a}));return(o,a)=>{let i=nl(e||o[1]),s=a.theme(i,o.$$)??On(o.$$,i,a);if(s!=null)return o._=no(o,0,s),r(o,a,i)}}function Ce(e,t={},n){return[e,zf(t,n)]}function zf(e={},t){return(n,r)=>{let{section:o=nl(n[0]).replace("-","")+"Color"}=e,[a,i]=qf(n.$$);if(!a)return;let s=r.theme(o,a)||On(a,o,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=o.replace("Color","Opacity"),property:c=o,selector:f}=e,m=r.theme(u,i||"DEFAULT")||i&&On(i,u,r),g=t||(({_:T})=>{let b=Fn(c,T);return f?{[f]:b}:b});n._={value:At(s,{opacityVariable:l||void 0,opacityValue:m||void 0}),color:T=>At(s,T),opacityVariable:l||void 0,opacityValue:m||void 0};let d=g(n,r);if(!n.dark){let T=r.d(o,a,s);T&&T!==s&&(n._={value:At(T,{opacityVariable:l||void 0,opacityValue:m||"1"}),color:b=>At(T,b),opacityVariable:l||void 0,opacityValue:m||void 0},d={"&":d,[r.v("dark")]:g(n,r)})}return d}}function qf(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Fn(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function On(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=_r(Yi(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function nl(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function _r(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,o="")=>_r(n)+r+_r(o)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var b0=Symbol();var Vf=new Proxy(Of,{apply(e,t,n){return Ka(n[0])},get(e,t){let n=Ka[t];return typeof n=="function"?function(){return n.apply(Ka,arguments)}:n}});var y0=function e(t){return new Proxy(function(n,...r){return zi(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(o,...a){return zi(t,r,o,a)}}})}();function zi(e,t,n,r){return{toString(){let o=to(n,r),a=Vi(t+kr(JSON.stringify([t,o])));return(typeof e=="function"?e:Vf)(tl({[`@keyframes ${a}`]:to(n,r)})),a}}}var Kf="inherit",Gf="currentColor",Jf="transparent",Yf="#000",Xf="#fff",Qf={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Zf={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},ed={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},td={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},nd={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},rd={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},ad={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},od={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},sd={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},id={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},ld={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},cd={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},ud={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},gd={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},fd={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},dd={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},md={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},pd={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},hd={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},bd={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},yd={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},Td={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},xd={__proto__:null,inherit:Kf,current:Gf,transparent:Jf,black:Yf,white:Xf,slate:Qf,gray:Zf,zinc:ed,neutral:td,stone:nd,red:rd,orange:ad,amber:od,yellow:sd,lime:id,green:ld,emerald:cd,teal:ud,cyan:gd,sky:fd,blue:dd,indigo:md,violet:pd,purple:hd,fuchsia:bd,pink:yd,rose:Td},rl={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:xd,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Ge(4,"rem",4,.5,.5),...Ge(12,"rem",4,5),14:"3.5rem",...Ge(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:Z("blur"),backdropBrightness:Z("brightness"),backdropContrast:Z("contrast"),backdropGrayscale:Z("grayscale"),backdropHueRotate:Z("hueRotate"),backdropInvert:Z("invert"),backdropOpacity:Z("opacity"),backdropSaturate:Z("saturate"),backdropSepia:Z("sepia"),backgroundColor:Z("colors"),backgroundImage:{none:"none"},backgroundOpacity:Z("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Ge(200,"",100,0,50),...Ge(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:Z("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:Z("spacing"),borderWidth:{DEFAULT:"1px",...Ye(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:Z("colors"),caretColor:Z("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Ge(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:Z("borderColor"),divideOpacity:Z("borderOpacity"),divideWidth:Z("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:Z("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Hn(2,6),...Hn(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:Z("spacing"),gradientColorStops:Z("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Hn(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Hn(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Ge(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Ge(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:Z("spacing"),placeholderColor:Z("colors"),placeholderOpacity:Z("opacity"),outlineColor:Z("colors"),outlineOffset:Ye(8,"px"),outlineWidth:Ye(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:Z("colors"),ringOffsetWidth:Ye(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Ye(8,"px")},rotate:{...Ye(2,"deg"),...Ye(12,"deg",3),...Ye(180,"deg",45)},saturate:Ge(200,"",100,0,50),scale:{...Ge(150,"",100,0,50),...Ge(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:Z("spacing"),scrollPadding:Z("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Ye(2,"deg"),...Ye(12,"deg",3)},space:Z("spacing"),stroke:Z("colors"),strokeWidth:Ge(2),textColor:Z("colors"),textDecorationColor:Z("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Ye(8,"px")},textUnderlineOffset:{auto:"auto",...Ye(8,"px")},textIndent:Z("spacing"),textOpacity:Z("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:Z("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Hn(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Ge(50,"",1,0,10),auto:"auto"}};function Hn(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function Ye(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Ge(e,t="",n=1,r=0,o=1,a={}){for(;r<=e;r+=o)a[r]=r/n+t;return a}function Z(e){return({theme:t})=>t(e)}var w0={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${rl.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${rl.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},S0=[C("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:On(`[${t}]`,e,n)}}})),C("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),k("aspect-","aspectRatio"),C("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:o}=t("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[Pr(l)]={"&":{maxWidth:l,...i(s)}})}return a;function i(s){let l=o&&(typeof o=="string"?o:o[s]||o.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),k("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),C("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),C("box-(border|content)","boxSizing",({1:e})=>e+"-box"),C("hidden",{display:"none"}),C("table-(auto|fixed)","tableLayout"),C(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",C("isolate","isolation"),C("object-(contain|cover|fill|none|scale-down)","objectFit"),k("object-","objectPosition"),C("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Mr),C("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),C("(static|fixed|absolute|relative|sticky)","position"),k("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),k("-?(top|bottom|left|right)(?:$|-)","inset"),C("visible","visibility"),C("invisible",{visibility:"hidden"}),k("-?z-","zIndex"),C("flex-((row|col)(-reverse)?)","flexDirection",al),C("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),k("(flex-(?:grow|shrink))(?:$|-)"),k("(flex)-"),k("grow(?:$|-)","flexGrow"),k("shrink(?:$|-)","flexShrink"),k("basis-","flexBasis"),k("-?(order)-"),"-?(order)-(\\d+)",k("grid-cols-","gridTemplateColumns"),C("grid-cols-(\\d+)","gridTemplateColumns",ll),k("col-","gridColumn"),C("col-(span)-(\\d+)","gridColumn",il),k("col-start-","gridColumnStart"),C("col-start-(auto|\\d+)","gridColumnStart"),k("col-end-","gridColumnEnd"),C("col-end-(auto|\\d+)","gridColumnEnd"),k("grid-rows-","gridTemplateRows"),C("grid-rows-(\\d+)","gridTemplateRows",ll),k("row-","gridRow"),C("row-(span)-(\\d+)","gridRow",il),k("row-start-","gridRowStart"),C("row-start-(auto|\\d+)","gridRowStart"),k("row-end-","gridRowEnd"),C("row-end-(auto|\\d+)","gridRowEnd"),C("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Mr(al(e))),C("grid-flow-(dense)","gridAutoFlow"),k("auto-cols-","gridAutoColumns"),k("auto-rows-","gridAutoRows"),k("gap-x(?:$|-)","gap","columnGap"),k("gap-y(?:$|-)","gap","rowGap"),k("gap(?:$|-)","gap"),"(justify-(?:items|self))-",C("justify-","justifyContent",ol),C("(content|items|self)-",e=>({["align-"+e[1]]:ol(e)})),C("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),k("p([xytrbl])?(?:$|-)","padding",cn("padding")),k("-?m([xytrbl])?(?:$|-)","margin",cn("margin")),k("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),C("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),k("w-","width"),k("min-w-","minWidth"),k("max-w-","maxWidth"),k("h-","height"),k("min-h-","minHeight"),k("max-h-","maxHeight"),k("font-","fontWeight"),k("font-","fontFamily","fontFamily",ft),C("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),C("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),C("italic","fontStyle"),C("not-italic",{fontStyle:"normal"}),C("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),k("tracking-","letterSpacing"),k("leading-","lineHeight"),C("list-(inside|outside)","listStylePosition"),k("list-","listStyleType"),C("list-","listStyleType"),k("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Ce("placeholder-",{property:"color",selector:"&::placeholder"}),C("text-(left|center|right|justify|start|end)","textAlign"),C("text-(ellipsis|clip)","textOverflow"),k("text-opacity-","textOpacity","--tw-text-opacity"),Ce("text-",{property:"color"}),k("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),k("indent-","textIndent"),C("(overline|underline|line-through)","textDecorationLine"),C("no-underline",{textDecorationLine:"none"}),k("underline-offset-","textUnderlineOffset"),Ce("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),k("decoration-","textDecorationThickness"),C("decoration-","textDecorationStyle"),C("(uppercase|lowercase|capitalize)","textTransform"),C("normal-case",{textTransform:"none"}),C("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),C("align-","verticalAlign"),C("whitespace-","whiteSpace"),C("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),C("break-words",{overflowWrap:"break-word"}),C("break-all",{wordBreak:"break-all"}),Ce("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Ce("accent-",{opacityVariable:!1,opacitySection:"opacity"}),C("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Ht(e," ")},var(--tw-gradient-stops))`),Ce("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Ce("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Ce("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),C("bg-(fixed|local|scroll)","backgroundAttachment"),C("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),C(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),C("bg-blend-","backgroundBlendMode"),C("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),k("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Ce("bg-",{section:"backgroundColor"}),k("bg-","backgroundImage"),k("bg-","backgroundPosition"),C("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Mr),k("bg-","backgroundSize"),k("rounded(?:$|-)","borderRadius"),k("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Ht(n[0])}-radius`]:t,[`border-${Ht(n[1])}-radius`]:t}}),C("border-(collapse|separate)","borderCollapse"),k("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),C("border-(solid|dashed|dotted|double|none)","borderStyle"),k("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Ce("border-([xytrbl])-",{section:"borderColor"},cn("border","Color")),Ce("border-"),k("border-([xytrbl])(?:$|-)","borderWidth",cn("border","Width")),k("border(?:$|-)","borderWidth"),k("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),C("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),C("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),k("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Ht(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Ht(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Ce("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),k("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Ce("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),k("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),C("ring-inset",{"--tw-ring-inset":"inset"}),Ce("ring-",{property:"--tw-ring-color"}),k("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":At(t("ringOffsetColor","","#fff")),"--tw-ring-color":At(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Ce("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),k("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":ft(e),"--tw-shadow-colored":ft(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),k("(opacity)-"),C("mix-blend-","mixBlendMode"),...sl(),...sl("backdrop-"),k("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:ft(e),transitionTimingFunction:e._=="none"?void 0:ft(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:ft(t("transitionDuration",""))})),k("duration(?:$|-)","transitionDuration","transitionDuration",ft),k("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",ft),k("delay(?:$|-)","transitionDelay","transitionDelay",ft),k("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=ft(e),o=r.split(" "),a=t("keyframes",o[0]);return a?{["@keyframes "+(o[0]=n(o[0]))]:a,animation:o.join(" ")}:{animation:r}}),"(transform)-(none)",C("transform",co),C("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":cl(e=="gpu")})),k("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...co()})),k("-?(rotate)-","rotate",lo),k("-?(translate-[xy])-","translate",lo),k("-?(skew-[xy])-","skew",lo),C("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Mr),"(appearance)-",k("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",k("(cursor)-"),"(cursor)-",C("snap-(none)","scroll-snap-type"),C("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),C("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),C("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),C("snap-(normal|always)","scroll-snap-stop"),C("scroll-(auto|smooth)","scroll-behavior"),k("scroll-p([xytrbl])?(?:$|-)","padding",cn("scroll-padding")),k("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",cn("scroll-margin")),C("touch-(auto|none|manipulation)","touch-action"),C("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),C("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),C("outline",{outlineStyle:"solid"}),C("outline-(dashed|dotted|double|hidden)","outlineStyle"),k("(outline-offset)-"),Ce("outline-",{opacityVariable:!1,opacitySection:"opacity"}),k("outline-","outlineWidth"),"(pointer-events)-",k("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],C("select-(none|text|all|auto)","userSelect"),Ce("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Ce("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),k("stroke-","strokeWidth"),C("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),C("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Mr(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function al(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Ht(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function ft(e){return e&&""+(e._||e)}function ol({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function cn(e,t=""){return({1:n,_:r})=>{let o={x:"lr",y:"tb"}[n]||n+n;return o?{...Fn(e+"-"+Ht(o[0])+t,r),...Fn(e+"-"+Ht(o[1])+t,r)}:Fn(e+t,r)}}function sl(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,C(`${e}filter`,n),...t.map(r=>k(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:o,_:a})=>({[`--tw-${o}`]:Je(a).map(i=>`${r}(${i})`).join(" "),...n})))]}function lo({1:e,_:t}){return{["--tw-"+e]:t,...co()}}function co(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":cl()}}}}function cl(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function il({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function ll({1:e}){return`repeat(${e},minmax(0,1fr))`}var vd=Object.create,gl=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Ed=Object.getOwnPropertyNames,Ad=Object.getPrototypeOf,Ld=Object.prototype.hasOwnProperty,Cd=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),_d=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ed(t))!Ld.call(e,o)&&o!==n&&gl(e,o,{get:()=>t[o],enumerable:!(r=Sd(t,o))||r.enumerable});return e},kd=(e,t,n)=>(n=e!=null?vd(Ad(e)):{},_d(t||!e||!e.__esModule?gl(n,"default",{value:e,enumerable:!0}):n,e)),Pd=Cd((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var o={};return r.m=n,r.c=o,r.i=function(a){return a},r.d=function(a,i,s){r.o(a,i)||Object.defineProperty(a,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(i,"a",i),i},r.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}},function(n,r,o){"use strict";(function(a){var i,s,l,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,f){u(r)==="object"&&u(a)==="object"?a.exports=f():(s=[],i=f,l=typeof i=="function"?i.apply(r,s):i,l!==void 0&&(a.exports=l))})(void 0,function(){return function(c){function f(g){if(m[g])return m[g].exports;var d=m[g]={i:g,l:!1,exports:{}};return c[g].call(d.exports,d,d.exports,f),d.l=!0,d.exports}var m={};return f.m=c,f.c=m,f.i=function(g){return g},f.d=function(g,d,T){f.o(g,d)||Object.defineProperty(g,d,{configurable:!1,enumerable:!0,get:T})},f.n=function(g){var d=g&&g.__esModule?function(){return g.default}:function(){return g};return f.d(d,"a",d),d},f.o=function(g,d){return Object.prototype.hasOwnProperty.call(g,d)},f.p="",f(f.s=0)}([function(c,f,m){function g(v,M){var F={};for(var se in v)M.indexOf(se)>=0||Object.prototype.hasOwnProperty.call(v,se)&&(F[se]=v[se]);return F}Object.defineProperty(f,"__esModule",{value:!0});var d=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(v){return typeof v>"u"?"undefined":u(v)}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v>"u"?"undefined":u(v)},T=Object.assign||function(v){for(var M=1;M<arguments.length;M++){var F=arguments[M];for(var se in F)Object.prototype.hasOwnProperty.call(F,se)&&(v[se]=F[se])}return v},b={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:b.top,force:b.top,confirm:b.top,input:b.top,select:b.bottom,date:b.top}},h=f.setOptions=function(v){p=T({},p,v,{classes:T({},p.classes,v.classes),ids:T({},p.ids,v.ids),positions:T({},p.positions,v.positions)})},w=function(){return new Promise(function(v){return setTimeout(v,0)})},E=function(v){return new Promise(function(M){return setTimeout(M,1e3*v)})},D=function(){document.activeElement&&document.activeElement.blur()},S=function(){var v="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(M){var F=16*Math.random()|0,se=M==="x"?F:3&F|8;return se.toString(16)});return"notie-"+v},x={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},_=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},L=function(v){return v.keyCode===13},O=function(v){return v.keyCode===27},$=function(v,M){v.classList.add(p.classes.container),v.style[M]="-10000px",document.body.appendChild(v),v.style[M]="-"+v.offsetHeight+"px",v.listener&&window.addEventListener("keydown",v.listener),w().then(function(){v.style.transition=_(),v.style[M]=0})},A=function(v,M){var F=document.getElementById(v);F&&(F.style[M]="-"+F.offsetHeight+"px",F.listener&&window.removeEventListener("keydown",F.listener),E(p.transitionDuration).then(function(){F.parentNode&&F.parentNode.removeChild(F)}))},H=function(v,M){var F=document.createElement("div");F.id=p.ids.overlay,F.classList.add(p.classes.overlay),F.classList.add(p.classes.backgroundOverlay),F.style.opacity=0,v&&p.overlayClickDismiss&&(F.onclick=function(){A(v.id,M),j()}),document.body.appendChild(F),w().then(function(){F.style.transition=_(),F.style.opacity=p.overlayOpacity})},j=function(){var v=document.getElementById(p.ids.overlay);v.style.opacity=0,E(p.transitionDuration).then(function(){v.parentNode&&v.parentNode.removeChild(v)})},J=f.hideAlerts=function(v){var M=document.getElementsByClassName(p.classes.alert);if(M.length){for(var F=0;F<M.length;F++){var se=M[F];A(se.id,se.position)}v&&E(p.transitionDuration).then(function(){return v()})}},Pe=f.alert=function(v){var M=v.type,F=M===void 0?4:M,se=v.text,K=v.time,Se=K===void 0?p.alertTime:K,De=v.stay,he=De!==void 0&&De,ye=v.position,ce=ye===void 0?p.positions.alert||ce.top:ye;D(),J();var X=document.createElement("div"),ue=S();X.id=ue,X.position=ce,X.classList.add(p.classes.textbox),X.classList.add(x[F]),X.classList.add(p.classes.alert),X.innerHTML='<div class="'+p.classes.textboxInner+'">'+se+"</div>",X.onclick=function(){return A(ue,ce)},X.listener=function(U){(L(U)||O(U))&&J()},$(X,ce),Se&&Se<1&&(Se=1),!he&&Se&&E(Se).then(function(){return A(ue,ce)})},Ke=f.force=function(v,M){var F=v.type,se=F===void 0?5:F,K=v.text,Se=v.buttonText,De=Se===void 0?"OK":Se,he=v.callback,ye=v.position,ce=ye===void 0?p.positions.force||ce.top:ye;D(),J();var X=document.createElement("div"),ue=S();X.id=ue;var U=document.createElement("div");U.classList.add(p.classes.textbox),U.classList.add(p.classes.backgroundInfo),U.innerHTML='<div class="'+p.classes.textboxInner+'">'+K+"</div>";var ee=document.createElement("div");ee.classList.add(p.classes.button),ee.classList.add(x[se]),ee.innerHTML=De,ee.onclick=function(){A(ue,ce),j(),he?he():M&&M()},X.appendChild(U),X.appendChild(ee),X.listener=function(P){L(P)&&ee.click()},$(X,ce),H()},ve=f.confirm=function(v,M,F){var se=v.text,K=v.submitText,Se=K===void 0?"Yes":K,De=v.cancelText,he=De===void 0?"Cancel":De,ye=v.submitCallback,ce=v.cancelCallback,X=v.position,ue=X===void 0?p.positions.confirm||ue.top:X;D(),J();var U=document.createElement("div"),ee=S();U.id=ee;var P=document.createElement("div");P.classList.add(p.classes.textbox),P.classList.add(p.classes.backgroundInfo),P.innerHTML='<div class="'+p.classes.textboxInner+'">'+se+"</div>";var B=document.createElement("div");B.classList.add(p.classes.button),B.classList.add(p.classes.elementHalf),B.classList.add(p.classes.backgroundSuccess),B.innerHTML=Se,B.onclick=function(){A(ee,ue),j(),ye?ye():M&&M()};var I=document.createElement("div");I.classList.add(p.classes.button),I.classList.add(p.classes.elementHalf),I.classList.add(p.classes.backgroundError),I.innerHTML=he,I.onclick=function(){A(ee,ue),j(),ce?ce():F&&F()},U.appendChild(P),U.appendChild(B),U.appendChild(I),U.listener=function(q){L(q)?B.click():O(q)&&I.click()},$(U,ue),H(U,ue)},fe=function(v,M,F){var se=v.text,K=v.submitText,Se=K===void 0?"Submit":K,De=v.cancelText,he=De===void 0?"Cancel":De,ye=v.submitCallback,ce=v.cancelCallback,X=v.position,ue=X===void 0?p.positions.input||ue.top:X,U=g(v,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);D(),J();var ee=document.createElement("div"),P=S();ee.id=P;var B=document.createElement("div");B.classList.add(p.classes.textbox),B.classList.add(p.classes.backgroundInfo),B.innerHTML='<div class="'+p.classes.textboxInner+'">'+se+"</div>";var I=document.createElement("input");I.classList.add(p.classes.inputField),I.setAttribute("autocapitalize",U.autocapitalize||"none"),I.setAttribute("autocomplete",U.autocomplete||"off"),I.setAttribute("autocorrect",U.autocorrect||"off"),I.setAttribute("autofocus",U.autofocus||"true"),I.setAttribute("inputmode",U.inputmode||"verbatim"),I.setAttribute("max",U.max||""),I.setAttribute("maxlength",U.maxlength||""),I.setAttribute("min",U.min||""),I.setAttribute("minlength",U.minlength||""),I.setAttribute("placeholder",U.placeholder||""),I.setAttribute("spellcheck",U.spellcheck||"default"),I.setAttribute("step",U.step||"any"),I.setAttribute("type",U.type||"text"),I.value=U.value||"",U.allowed&&(I.oninput=function(){var pe=void 0;if(Array.isArray(U.allowed)){for(var be="",Le=U.allowed,tt=0;tt<Le.length;tt++)Le[tt]==="an"?be+="0-9a-zA-Z":Le[tt]==="a"?be+="a-zA-Z":Le[tt]==="n"&&(be+="0-9"),Le[tt]==="s"&&(be+=" ");pe=new RegExp("[^"+be+"]","g")}else d(U.allowed)==="object"&&(pe=U.allowed);I.value=I.value.replace(pe,"")});var q=document.createElement("div");q.classList.add(p.classes.button),q.classList.add(p.classes.elementHalf),q.classList.add(p.classes.backgroundSuccess),q.innerHTML=Se,q.onclick=function(){A(P,ue),j(),ye?ye(I.value):M&&M(I.value)};var Q=document.createElement("div");Q.classList.add(p.classes.button),Q.classList.add(p.classes.elementHalf),Q.classList.add(p.classes.backgroundError),Q.innerHTML=he,Q.onclick=function(){A(P,ue),j(),ce?ce(I.value):F&&F(I.value)},ee.appendChild(B),ee.appendChild(I),ee.appendChild(q),ee.appendChild(Q),ee.listener=function(pe){L(pe)?q.click():O(pe)&&Q.click()},$(ee,ue),I.focus(),H(ee,ue)};f.input=fe;var et=f.select=function(v,M){var F=v.text,se=v.cancelText,K=se===void 0?"Cancel":se,Se=v.cancelCallback,De=v.choices,he=v.position,ye=he===void 0?p.positions.select||ye.top:he;D(),J();var ce=document.createElement("div"),X=S();ce.id=X;var ue=document.createElement("div");ue.classList.add(p.classes.textbox),ue.classList.add(p.classes.backgroundInfo),ue.innerHTML='<div class="'+p.classes.textboxInner+'">'+F+"</div>",ce.appendChild(ue),De.forEach(function(ee,P){var B=ee.type,I=B===void 0?1:B,q=ee.text,Q=ee.handler,pe=document.createElement("div");pe.classList.add(x[I]),pe.classList.add(p.classes.button),pe.classList.add(p.classes.selectChoice);var be=De[P+1];be&&!be.type&&(be.type=1),be&&be.type===I&&pe.classList.add(p.classes.selectChoiceRepeated),pe.innerHTML=q,pe.onclick=function(){A(X,ye),j(),Q()},ce.appendChild(pe)});var U=document.createElement("div");U.classList.add(p.classes.backgroundNeutral),U.classList.add(p.classes.button),U.innerHTML=K,U.onclick=function(){A(X,ye),j(),Se?Se():M&&M()},ce.appendChild(U),ce.listener=function(ee){O(ee)&&U.click()},$(ce,ye),H(ce,ye)},le=f.date=function(v,M,F){var se=v.value,K=se===void 0?new Date:se,Se=v.submitText,De=Se===void 0?"OK":Se,he=v.cancelText,ye=he===void 0?"Cancel":he,ce=v.submitCallback,X=v.cancelCallback,ue=v.position,U=ue===void 0?p.positions.date||U.top:ue;D(),J();var ee="&#9662",P=document.createElement("div"),B=document.createElement("div"),I=document.createElement("div"),q=function(Te){P.innerHTML=p.dateMonths[Te.getMonth()],B.innerHTML=Te.getDate(),I.innerHTML=Te.getFullYear()},Q=function(Te){var ut=new Date(K.getFullYear(),K.getMonth()+1,0).getDate(),on=Te.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(on)>ut&&(on=ut.toString()),Te.target.textContent=on,Number(on)<1&&(on="1"),K.setDate(Number(on))},pe=function(Te){var ut=Te.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);Te.target.textContent=ut,K.setFullYear(Number(ut))},be=function(Te){q(K)},Le=function(Te){var ut=new Date(K.getFullYear(),K.getMonth()+Te+1,0).getDate();K.getDate()>ut&&K.setDate(ut),K.setMonth(K.getMonth()+Te),q(K)},tt=function(Te){K.setDate(K.getDate()+Te),q(K)},Bs=function(Te){var ut=K.getFullYear()+Te;ut<0?K.setFullYear(0):K.setFullYear(K.getFullYear()+Te),q(K)},It=document.createElement("div"),xa=S();It.id=xa;var wa=document.createElement("div");wa.classList.add(p.classes.backgroundInfo);var nt=document.createElement("div");nt.classList.add(p.classes.dateSelectorInner);var nn=document.createElement("div");nn.classList.add(p.classes.button),nn.classList.add(p.classes.elementThird),nn.classList.add(p.classes.dateSelectorUp),nn.innerHTML=ee;var rn=document.createElement("div");rn.classList.add(p.classes.button),rn.classList.add(p.classes.elementThird),rn.classList.add(p.classes.dateSelectorUp),rn.innerHTML=ee;var an=document.createElement("div");an.classList.add(p.classes.button),an.classList.add(p.classes.elementThird),an.classList.add(p.classes.dateSelectorUp),an.innerHTML=ee,P.classList.add(p.classes.element),P.classList.add(p.classes.elementThird),P.innerHTML=p.dateMonths[K.getMonth()],B.classList.add(p.classes.element),B.classList.add(p.classes.elementThird),B.setAttribute("contentEditable",!0),B.addEventListener("input",Q),B.addEventListener("blur",be),B.innerHTML=K.getDate(),I.classList.add(p.classes.element),I.classList.add(p.classes.elementThird),I.setAttribute("contentEditable",!0),I.addEventListener("input",pe),I.addEventListener("blur",be),I.innerHTML=K.getFullYear();var _n=document.createElement("div");_n.classList.add(p.classes.button),_n.classList.add(p.classes.elementThird),_n.innerHTML=ee;var kn=document.createElement("div");kn.classList.add(p.classes.button),kn.classList.add(p.classes.elementThird),kn.innerHTML=ee;var Pn=document.createElement("div");Pn.classList.add(p.classes.button),Pn.classList.add(p.classes.elementThird),Pn.innerHTML=ee,nn.onclick=function(){return Le(1)},rn.onclick=function(){return tt(1)},an.onclick=function(){return Bs(1)},_n.onclick=function(){return Le(-1)},kn.onclick=function(){return tt(-1)},Pn.onclick=function(){return Bs(-1)};var Ot=document.createElement("div");Ot.classList.add(p.classes.button),Ot.classList.add(p.classes.elementHalf),Ot.classList.add(p.classes.backgroundSuccess),Ot.innerHTML=De,Ot.onclick=function(){A(xa,U),j(),ce?ce(K):M&&M(K)};var Ft=document.createElement("div");Ft.classList.add(p.classes.button),Ft.classList.add(p.classes.elementHalf),Ft.classList.add(p.classes.backgroundError),Ft.innerHTML=ye,Ft.onclick=function(){A(xa,U),j(),X?X(K):F&&F(K)},nt.appendChild(nn),nt.appendChild(rn),nt.appendChild(an),nt.appendChild(P),nt.appendChild(B),nt.appendChild(I),nt.appendChild(_n),nt.appendChild(kn),nt.appendChild(Pn),wa.appendChild(nt),It.appendChild(wa),It.appendChild(Ot),It.appendChild(Ft),It.listener=function(Te){L(Te)?Ot.click():O(Te)&&Ft.click()},$(It,U),H(It,U)};f.default={alert:Pe,force:Ke,confirm:ve,input:fe,select:et,date:le,setOptions:h,hideAlerts:J}}])})}).call(r,o(0)(n))}])})}),Md=kd(Pd()),{default:ul,...Rd}=Md,uo=ul!==void 0?ul:Rd;var F0=Symbol("clean");var H0=Symbol();function go(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=go(e[r],t);return n}}function dl(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,o,a){let i=e(r,o,...a);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,o){return e(n,r,...o)}}}}var K0=dl((e,t,n)=>go(t,r=>{for(let o in n)r=r.replace(new RegExp(`{${o}}`,"g"),n[o]);return r})),G0=dl((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),go(t[r],o=>o.replace(/{count}/g,n))});var fo=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function mo(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function yl(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function Tl(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function Id(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,o=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(o=!1);return o}var Un={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":fo?173:189,"=":fo?61:187,";":fo?59:186,"'":222,"[":219,"]":221,"\\":220},mt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},bo={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Oe={16:!1,18:!1,17:!1,91:!1},Ee={};for(Bn=1;Bn<20;Bn++)Un["f".concat(Bn)]=111+Bn;var Bn,me=[],ml=!1,xl="all",wl=[],Dr=function(e){return Un[e.toLowerCase()]||mt[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},Od=function(e){return Object.keys(Un).find(function(t){return Un[t]===e})},Fd=function(e){return Object.keys(mt).find(function(t){return mt[t]===e})};function vl(e){xl=e||"all"}function $n(){return xl||"all"}function Hd(){return me.slice(0)}function Bd(){return me.map(function(e){return Od(e)||Fd(e)||String.fromCharCode(e)})}function Ud(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function $d(e){return typeof e=="string"&&(e=Dr(e)),me.indexOf(e)!==-1}function jd(e,t){var n,r;e||(e=$n());for(var o in Ee)if(Object.prototype.hasOwnProperty.call(Ee,o))for(n=Ee[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;$n()===e&&vl(t||"all")}function Wd(e){var t=e.keyCode||e.which||e.charCode,n=me.indexOf(t);if(n>=0&&me.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&me.splice(0,me.length),(t===93||t===224)&&(t=91),t in Oe){Oe[t]=!1;for(var r in mt)mt[r]===t&&(dt[r]=!1)}}function zd(e){if(typeof e>"u")Object.keys(Ee).forEach(function(i){return delete Ee[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&po(i)});else if(typeof e=="object")e.key&&po(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],a=n[1];typeof o=="function"&&(a=o,o=""),po({key:e,scope:o,method:a,splitKey:"+"})}}var po=function(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,a=o===void 0?"+":o,i=Tl(t);i.forEach(function(s){var l=s.split(a),u=l.length,c=l[u-1],f=c==="*"?"*":Dr(c);if(Ee[f]){n||(n=$n());var m=u>1?yl(mt,l):[];Ee[f]=Ee[f].filter(function(g){var d=r?g.method===r:!0;return!(d&&g.scope===n&&Id(g.mods,m))})}})};function pl(e,t,n,r){if(t.element===r){var o;if(t.scope===n||t.scope==="all"){o=t.mods.length>0;for(var a in Oe)Object.prototype.hasOwnProperty.call(Oe,a)&&(!Oe[a]&&t.mods.indexOf(+a)>-1||Oe[a]&&t.mods.indexOf(+a)===-1)&&(o=!1);(t.mods.length===0&&!Oe[16]&&!Oe[18]&&!Oe[17]&&!Oe[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function hl(e,t){var n=Ee["*"],r=e.keyCode||e.which||e.charCode;if(dt.filter.call(this,e)){if((r===93||r===224)&&(r=91),me.indexOf(r)===-1&&r!==229&&me.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(d){var T=bo[d];e[d]&&me.indexOf(T)===-1?me.push(T):!e[d]&&me.indexOf(T)>-1?me.splice(me.indexOf(T),1):d==="metaKey"&&e[d]&&me.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(me=me.slice(me.indexOf(T))))}),r in Oe){Oe[r]=!0;for(var o in mt)mt[o]===r&&(dt[o]=!0);if(!n)return}for(var a in Oe)Object.prototype.hasOwnProperty.call(Oe,a)&&(Oe[a]=e[bo[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(me.indexOf(17)===-1&&me.push(17),me.indexOf(18)===-1&&me.push(18),Oe[17]=!0,Oe[18]=!0);var i=$n();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&pl(e,n[s],i,t);if(r in Ee){for(var l=0;l<Ee[r].length;l++)if((e.type==="keydown"&&Ee[r][l].keydown||e.type==="keyup"&&Ee[r][l].keyup)&&Ee[r][l].key){for(var u=Ee[r][l],c=u.splitKey,f=u.key.split(c),m=[],g=0;g<f.length;g++)m.push(Dr(f[g]));m.sort().join("")===me.sort().join("")&&pl(e,u,i,t)}}}}function qd(e){return wl.indexOf(e)>-1}function dt(e,t,n){me=[];var r=Tl(e),o=[],a="all",i=document,s=0,l=!1,u=!0,c="+",f=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(i=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(f=t.capture),typeof t.splitKey=="string"&&(c=t.splitKey)),typeof t=="string"&&(a=t);s<r.length;s++)e=r[s].split(c),o=[],e.length>1&&(o=yl(mt,e)),e=e[e.length-1],e=e==="*"?"*":Dr(e),e in Ee||(Ee[e]=[]),Ee[e].push({keyup:l,keydown:u,scope:a,mods:o,shortcut:r[s],method:n,key:r[s],splitKey:c,element:i});typeof i<"u"&&!qd(i)&&window&&(wl.push(i),mo(i,"keydown",function(m){hl(m,i)},f),ml||(ml=!0,mo(window,"focus",function(){me=[]},f)),mo(i,"keyup",function(m){hl(m,i),Wd(m)},f))}function Vd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Ee).forEach(function(n){var r=Ee[n].filter(function(o){return o.scope===t&&o.shortcut===e});r.forEach(function(o){o&&o.method&&o.method()})})}var ho={getPressedKeyString:Bd,setScope:vl,getScope:$n,deleteScope:jd,getPressedKeyCodes:Hd,isPressed:$d,filter:Ud,trigger:Vd,unbind:zd,keyMap:Un,modifier:mt,modifierMap:bo};for(Rr in ho)Object.prototype.hasOwnProperty.call(ho,Rr)&&(dt[Rr]=ho[Rr]);var Rr;typeof document<"u"&&(bl=window.hotkeys,dt.noConflict=function(e){return e&&window.hotkeys===dt&&(window.hotkeys=bl),dt},window.hotkeys=dt);var bl;var ub=uo.alert;function Sl(e,t,n){let r=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),r=t!=="auto"?n[t].matches:[];let o={},a=Object.keys(n);for(let u of a){let f=n[u].matches;for(let m of f)o[m]||(o[m]=[]),o[m].push(u)}let i=o[e];if(i&&i.length>0)for(let u of i)n[u].matches.indexOf(e)>-1&&(n[u]={...n[u],matches:n[u].matches.filter(f=>f!==e)});let s=new Set(r);if(t==="auto")return{...n};s.add(e);let l=Array.from(s);return{...n,[t]:{...n[t],matches:l}}}var yo="DENO",To="CHROME",Nr="FIREFOX";function Kd(e){let t=To;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=Nr:/deno/i.test(n)&&(t=yo)}catch{}return e===To&&t===To||e===Nr&&t===Nr||e===yo&&t===yo}function El(){return typeof Deno<"u"}function Ir(){return Kd(Nr)}function Al(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var Ll={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Cl={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Ll,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Ll,query:()=>{},sendMessage:()=>{}},identity:{getRedirectURL:e=>e||"",launchWebAuthFlow:e=>Promise.resolve(e.url)}};var Y;El()?Y=Cl:Y=globalThis.immersiveTranslateBrowserAPI;var _l={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C(\u66F4\u6574\u9F50)/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",isShowContextMenu:"\u521B\u5EFA\u53F3\u952E\u83DC\u5355",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u5F00\u542F\u540E\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E,\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9",aboutIntro:"\u8BE5\u6269\u5C55\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u9891\u9053</4>\u83B7\u53D6\u6700\u65B0\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B Spinner","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A"};var kl={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8F09\u8A2D\u7F6E\u55CE?",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u65E5\u8A8C",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",saved:"\u6210\u529F\u5132\u5B58",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",needActionForOptions:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA",import_export_title:"\u5C0E\u5165/\u5C0E\u51FA",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u7576\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",isShowContextMenu:"\u5275\u5EFA\u53F3\u9375\u83DC\u55AE",syncToCloud:"\u540C\u6B65\u5230\u96F2\u7AEF",syncToCloudDescription:"\u540C\u6B65\u65F6\u4F1A\u6BD4\u8F83\u672C\u5730\u548C\u4E91\u7AEF\u914D\u7F6E\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u8ACB\u9078\u64C7\u6587\u4EF6\u64CD\u4F5C",import_hint:"\u5C0E\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u5C0E\u5165\u6210\u529F",importFail:"\u5C0E\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE, \u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u6062\u5FA9\u5099\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8A313\u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u64CA\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u53CD\u994B - \u8D0A\u52A9","browser.openAboutPage":"\u95DC\u65BC/\u53CD\u994B/\u8D0A\u52A9",aboutIntro:"\u8A72\u64F4\u5C55\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u4E92\u806F\u7DB2\u4E0A\u5DE8\u5927\u7684\u5916\u8A9E\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002\u5982\u679C\u6709\u9918\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u64CA\u9019\u88E1\u8D0A\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u983B\u9053</4>\u7372\u53D6\u6700\u65B0\u66F4\u65B0\u3002",projectHomepage:"\u9805\u76EE\u4E3B\u9801",joinTelegramGroup:"\u52A0\u5165 Telegram \u7FA4\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",feedbackAndJoin:"\u554F\u984C\u53CD\u994B/\u52A0\u7FA4",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u7F6E\u7B49\u5F85\u8B6F\u6587\u52A0\u8F09\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B Spinner","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A"};var Pl={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",translationLineBreakSettingDescription:"The position of the translation\uFF1AAlways wrap / smart wrap (the translation is displayed only when the paragraph is more than {count} characters)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"The domain name is available and wildcard is supported e.g.\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",document:"Document",resetSuccess:"All settings reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",badUserscriptBrowser:"This browser does not correctly implement the interface of Tampermonkey. Please use other < 1 > browsers that support Tampermonkey < / 1 >, such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"Automatically skip translating the paragraph when languages are the followings",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",isShowContextMenu:"Create right button menu",syncToCloud:"Sync to cloud",syncToCloudDescription:"When syncing it will compare the last modification time of the local and cloud configurations, whichever is the last.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback - Sponsor","browser.openAboutPage":"About / Feedback/Sponsor",aboutIntro:`This extension is completely free. I hope we can get foreign information on the Internet more easily and happily. Thanks to these < 1 > sponsors < / 1 >, more people can use this tool completely free of charge because of their support. 
If you have spare time, you can click here to sponsor < / 2 > my work, and you can follow my < 3 > Twitter < / 3 > and < 4 > Telegram channels < / 4 > for the latest updates.`,projectHomepage:"Project Homepage",joinTelegramGroup:"Join Telegram group for feature discussion",feedbackAndJoin:"Issue feedback/group",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Animate Spinner","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled"};var Gd=[{code:"zh-CN",messages:_l},{code:"zh-TW",messages:kl},{code:"en",messages:Pl}],Bt={};for(let e of Gd)Bt[e.code]=e.messages;var xt="Immersive Translate",de="immersive-translate",Or="pdf/index.html",ge="immersiveTranslate";var Vb=ge+"GoogleAccessToken",Kb=ge+"AuthFlow";var Gb=ge+"AuthState",Jb=ge+"IframeMessage",xo=`${ge}Container`,Ut=`${ge}SpecifiedContainer`,jn="buildinConfig",Wn="localConfig";var Ml=`${ge}PageTranslatedStatus`,Rl=`${ge}PageUrlChanged`,Yb=`${ge}ReceiveCommand`,zn=`${ge}PopupReceiveMessage`,Dl="immersive-translate.owenyoung.com",Xb=`https://${Dl}/`,wo=`https://${Dl}/buildin_config.json`,$t=`${ge}Mark`,vo="immersiveTranslateEffect",_e=`${ge}Root`,So=`data-${de}-effect`,un=`${ge}TranslatedMark`,jt=`${ge}ParagraphId`,Xe=`${ge}AtomicBlockMark`,rt=`${ge}ExcludeMark`,Nl=`data-${de}-exclude-mark`,Fr=`${ge}StayOriginalMark`,gn=`${ge}PreWhitespaceMark`,wt=`${ge}InlineMark`,Wt=`${ge}BlockMark`,qn=`${ge}Left`,Hr=`${ge}Right`,Qb=`${ge}Width`,Zb=`${ge}Height`,Il=`${ge}Top`,Ol=`${ge}FontSize`;var Eo=`${ge}GlobalStyleMark`,Fl=["@","#"],Br=" --- ",Ao=`
`,Qe=`${de}-target-wrapper`,Ur=`${de}-pdf-target-container`,Hl=`${de}-target-inner`,ey=`${de}-source-wrapper`,Lo=`${de}-target-translation-block-wrapper`,Bl=`${de}-target-translation-vertical-block-wrapper`,Ul=`${de}-target-translation-pdf-block-wrapper`,$l=`${de}-target-translation-pre-whitespace`,Co=`${de}-target-translation-inline-wrapper`;var Lt=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],_o={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var jl=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var ko="zh-CN";function Wl(e){let t=Y.runtime.getURL(Or),n=new URL(t);return(e.startsWith("http")||!Ir())&&n.searchParams.set("file",e),n.href}var Po=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),o=ze.green;r>1e4?o=ze.red:r>1e3&&(o=ze.yellow),console.debug(ze.dim(xt+" TIMING:"),t,"in",o(r+"ms")),this.#e=n}},Vn=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(ze.dim(xt+" DEBUG:"),...t)}v(...t){this.#e<=0&&console.log(ze.dim(xt+" VERBOSE:"),...t)}info(...t){this.#e<=1&&console.log(ze.green(xt+" INFO:"),...t)}l(...t){this.#e<=1&&console.log(ze.green(xt+" TEMP INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(ze.yellow(xt+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(ze.red(xt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(ze.red(xt+" FATAL:"),...t)}timing(){return this.level===0?new Po:{reset:()=>{},stop:()=>{}}}},G=new Vn;var zl=["*://*/*","*","*://*"],Vl="immersive-translate-wildcard-placeholder.com";function Mo(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>zl.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let o=r.href,a=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let l=s;if(s===a)return!0;if(zl.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===a:Yd(o,s)}catch{}return!1}else{let u,c=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let f=s.replace(/\*/g,Vl),m;try{m=new URL(f)}catch{return G.debug("invalid match pattern",f,"raw match value:",c),!1}let g=m.hostname,d=m.pathname;d==="/"&&(c.replace("://","").includes("/")||(d="/*"));let T=Jd(u+":",ql(g),ql(d));if(T){let b=new URL(o);return b.port="",T.test(b.href)}else return!1}});if(i)return i}return null}function ql(e){return e.replace(Vl,"*")}function Jd(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function Kn(e,t){return Mo(e,t)!==null}function Yd(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}function Ro(e){return Array.isArray(e)?e:e?[e]:[]}function Do(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function Ct(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function $r(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let o={...e};return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))o[i]=s;else if(i.startsWith("additional")){let l=Ro(s);o[i]=Array.from(new Set([...o[i],...l]))}else o[i]=Ro(s)}),o}var fn="input is invalid type",No=typeof window=="object",_t=No?window:{};_t.JS_SHA256_NO_WINDOW&&(No=!1);var Xd=!No&&typeof self=="object",Qd=!_t.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Qd?_t=global:Xd&&(_t=self);var Ay=!_t.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,Ly=typeof define=="function"&&define.amd,Gn=!_t.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",N="0123456789abcdef".split(""),Zd=[-2147483648,8388608,32768,128],at=[24,16,8,0],jr=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],Wr=["hex","array","digest","arrayBuffer"],Me=[];(_t.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});Gn&&(_t.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Kl=function(e,t){return function(n){return new Re(t,!0).update(n)[e]()}},Jl=function(e){var t=Kl("hex",e);t.create=function(){return new Re(e)},t.update=function(o){return t.create().update(o)};for(var n=0;n<Wr.length;++n){var r=Wr[n];t[r]=Kl(r,e)}return t},Gl=function(e,t){return function(n,r){return new zr(n,t,!0).update(r)[e]()}},Yl=function(e){var t=Gl("hex",e);t.create=function(o){return new zr(o,e)},t.update=function(o,a){return t.create(o).update(a)};for(var n=0;n<Wr.length;++n){var r=Wr[n];t[r]=Gl(r,e)}return t};function Re(e,t){t?(Me[0]=Me[16]=Me[1]=Me[2]=Me[3]=Me[4]=Me[5]=Me[6]=Me[7]=Me[8]=Me[9]=Me[10]=Me[11]=Me[12]=Me[13]=Me[14]=Me[15]=0,this.blocks=Me):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}Re.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(fn);if(Gn&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!Gn||!ArrayBuffer.isView(e)))throw new Error(fn)}else throw new Error(fn);t=!0}for(var r,o=0,a,i=e.length,s=this.blocks;o<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(a=this.start;o<i&&a<64;++o)s[a>>2]|=e[o]<<at[a++&3];else for(a=this.start;o<i&&a<64;++o)r=e.charCodeAt(o),r<128?s[a>>2]|=r<<at[a++&3]:r<2048?(s[a>>2]|=(192|r>>6)<<at[a++&3],s[a>>2]|=(128|r&63)<<at[a++&3]):r<55296||r>=57344?(s[a>>2]|=(224|r>>12)<<at[a++&3],s[a>>2]|=(128|r>>6&63)<<at[a++&3],s[a>>2]|=(128|r&63)<<at[a++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++o)&1023),s[a>>2]|=(240|r>>18)<<at[a++&3],s[a>>2]|=(128|r>>12&63)<<at[a++&3],s[a>>2]|=(128|r>>6&63)<<at[a++&3],s[a>>2]|=(128|r&63)<<at[a++&3]);this.lastByteIndex=a,this.bytes+=a-this.start,a>=64?(this.block=s[16],this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};Re.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=Zd[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};Re.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=this.blocks,u,c,f,m,g,d,T,b,p,h,w;for(u=16;u<64;++u)g=l[u-15],c=(g>>>7|g<<25)^(g>>>18|g<<14)^g>>>3,g=l[u-2],f=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,l[u]=l[u-16]+c+l[u-7]+f<<0;for(w=t&n,u=0;u<64;u+=4)this.first?(this.is224?(b=300032,g=l[0]-1413257819,s=g-150054599<<0,r=g+24177077<<0):(b=704751109,g=l[0]-210244248,s=g-1521486534<<0,r=g+143694565<<0),this.first=!1):(c=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),f=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),b=e&t,m=b^e&n^w,T=o&a^~o&i,g=s+f+T+jr[u]+l[u],d=c+m,s=r+g<<0,r=g+d<<0),c=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),f=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),p=r&e,m=p^r&t^b,T=s&o^~s&a,g=i+f+T+jr[u+1]+l[u+1],d=c+m,i=n+g<<0,n=g+d<<0,c=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),f=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),h=n&r,m=h^n&e^p,T=i&s^~i&o,g=a+f+T+jr[u+2]+l[u+2],d=c+m,a=t+g<<0,t=g+d<<0,c=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),f=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),w=t&n,m=w^t&r^h,T=a&i^~a&s,g=o+f+T+jr[u+3]+l[u+3],d=c+m,o=e+g<<0,e=g+d<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0,this.h5=this.h5+a<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};Re.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=N[e>>28&15]+N[e>>24&15]+N[e>>20&15]+N[e>>16&15]+N[e>>12&15]+N[e>>8&15]+N[e>>4&15]+N[e&15]+N[t>>28&15]+N[t>>24&15]+N[t>>20&15]+N[t>>16&15]+N[t>>12&15]+N[t>>8&15]+N[t>>4&15]+N[t&15]+N[n>>28&15]+N[n>>24&15]+N[n>>20&15]+N[n>>16&15]+N[n>>12&15]+N[n>>8&15]+N[n>>4&15]+N[n&15]+N[r>>28&15]+N[r>>24&15]+N[r>>20&15]+N[r>>16&15]+N[r>>12&15]+N[r>>8&15]+N[r>>4&15]+N[r&15]+N[o>>28&15]+N[o>>24&15]+N[o>>20&15]+N[o>>16&15]+N[o>>12&15]+N[o>>8&15]+N[o>>4&15]+N[o&15]+N[a>>28&15]+N[a>>24&15]+N[a>>20&15]+N[a>>16&15]+N[a>>12&15]+N[a>>8&15]+N[a>>4&15]+N[a&15]+N[i>>28&15]+N[i>>24&15]+N[i>>20&15]+N[i>>16&15]+N[i>>12&15]+N[i>>8&15]+N[i>>4&15]+N[i&15];return this.is224||(l+=N[s>>28&15]+N[s>>24&15]+N[s>>20&15]+N[s>>16&15]+N[s>>12&15]+N[s>>8&15]+N[s>>4&15]+N[s&15]),l};Re.prototype.toString=Re.prototype.hex;Re.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,l=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,o>>24&255,o>>16&255,o>>8&255,o&255,a>>24&255,a>>16&255,a>>8&255,a&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||l.push(s>>24&255,s>>16&255,s>>8&255,s&255),l};Re.prototype.array=Re.prototype.digest;Re.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function zr(e,t,n){var r,o=typeof e;if(o==="string"){var a=[],i=e.length,s=0,l;for(r=0;r<i;++r)l=e.charCodeAt(r),l<128?a[s++]=l:l<2048?(a[s++]=192|l>>6,a[s++]=128|l&63):l<55296||l>=57344?(a[s++]=224|l>>12,a[s++]=128|l>>6&63,a[s++]=128|l&63):(l=65536+((l&1023)<<10|e.charCodeAt(++r)&1023),a[s++]=240|l>>18,a[s++]=128|l>>12&63,a[s++]=128|l>>6&63,a[s++]=128|l&63);e=a}else if(o==="object"){if(e===null)throw new Error(fn);if(Gn&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!Gn||!ArrayBuffer.isView(e)))throw new Error(fn)}else throw new Error(fn);e.length>64&&(e=new Re(t,!0).update(e).array());var u=[],c=[];for(r=0;r<64;++r){var f=e[r]||0;u[r]=92^f,c[r]=54^f}Re.call(this,t,n),this.update(c),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}zr.prototype=new Re;zr.prototype.finalize=function(){if(Re.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Re.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Re.prototype.finalize.call(this)}};var dn=Jl();dn.sha256=dn;dn.sha224=Jl(!0);dn.sha256.hmac=Yl();dn.sha224.hmac=Yl(!0);var Xl=dn;var Ql=Xl.sha256;function ot(e){return Promise.resolve(Ql(e))}function qr(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function kt(e,t){let n=Ql.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Zl(e,t){let n=await kt(e,t);return qr(n)}async function Vr(e,t){let n=em(t),r=await kt(e,n);return qr(r)}function em(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}function Jn(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():y}var te=Jn();function We(){return te.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function ec(){return typeof Deno<"u"}function Yn(){try{return globalThis.self!==globalThis.top}catch{return!0}}var tm=Jn(),Xn=tm.PROD==="1";function tc(e,t,n){let r=e.querySelectorAll("header"),o=e.querySelectorAll("main"),a=[];for(let s of r)o.length>0&&o[0].contains(s)||a.push(s);for(let s=0;s<t.length;s++){let l=t[s].element;for(let u=s+1;u<t.length;u++){let c=t[u].element;if(l.contains(c))t.splice(u,1),u--;else if(c.contains(l)){t.splice(s,1),s--;break}else l===c&&(t.splice(u,1),u--)}}return t.filter(s=>{let l=s.element;if(s.reserve)return!0;let u=!1;for(let c of a){if(l.nodeName==="H1")continue;let f=c.querySelector("h1");if(!(f&&oc(f.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(l===c||c.contains(l))){u=!0;break}}return!u}).map(s=>s.element)}function Pt(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function Kr(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function Io(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function Qn(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function qe(e,t){let n=[];for(let r of t){let o=e.querySelectorAll(r);for(let a of o)n.push(a)}return n}function nm(e,t){let n=function(a){return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE?a.nodeType===Node.ELEMENT_NODE&&Ve(a,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),o=!0;for(;r.nextNode();){let a=r.currentNode;if(a.nodeType===Node.ELEMENT_NODE){if(oe(a,wt)){if(o===!0)return!0;continue}if(!t.inlineTags.includes(a.nodeName))return!1}}return!0}function st(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?oe(e,Wt)||e.nodeName==="BR"?!1:oe(e,wt)?!0:nm(e,t):oe(e,wt):!1}function nc(e,t){for(let n of t)if(n===e)return!0;return!1}function rc(e,t){return!!t.metaTags.includes(e.nodeName)}function Ve(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:o}=t,a=[];return n&&o&&o.length>0?a=o||[]:a=o.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&oe(e,rt,!0)?!0:e.nodeType===Node.ELEMENT_NODE&&oe(e,Ut)?!1:!!a.includes(e.nodeName)}function ac(e,t,n,r){let o=er(r),a=new RegExp(`^${o[0]}(\\d+)${o[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||Ho(s)||Oo(s)||Fo(s)||a.test(s)?!1:oc(i,t,n)}function oc(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function Oo(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function Fo(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function Ho(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function sc(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function oe(e,t,n=!1){return rm(e,t,"1",n)}function rm(e,t,n,r=!1){return Xn&&!r?e[_e]?!!(e[_e]&&e[_e][t]===n):!1:e.dataset[t]===n}function ic(e,t,n=!1){return Xn&&!n?e[_e]?!!(e[_e]&&e[_e][t]):!1:e.dataset[t]!==void 0}function Zn(e){return(e.innerText||e.textContent||"").trim()}function Gr(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function ie(e,t,n,r=!1){e.isContentEditable||(e.dataset[vo]||(e.dataset[vo]="1"),Xn&&!r?(e[_e]||(e[_e]={}),e[_e][t]||(e[_e][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function lc(e,t,n=!1){if(Xn&&!n){if(!e[_e]||!e[_e][t])return;delete e[_e][t]}else delete e.dataset[t]}function Mt(e,t,n=!1){return Xn&&!n?!e[_e]||!e[_e][t]?void 0:e[_e][t]:e.dataset[t]}function mn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||oe(e,Fr))&&(n=!0),n}function cc(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function er(e){let{config:t}=e,n=Fl;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function Jr(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function uc(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function pt(){if(!Yn())return globalThis.location.href;try{let t=globalThis.location.href;if(new URL(t).protocol==="about:"){if(globalThis.location.ancestorOrigins&&globalThis.location.ancestorOrigins.length>0)return globalThis.location.ancestorOrigins[0];let r="";try{r=globalThis.parent.location.href}catch{}return r||(globalThis.location!=globalThis.parent.location?document.referrer:document.location.href)}else return t}catch{}return globalThis.location.href}function Bo(e,t){e.head.appendChild(e.createElement("style")).innerHTML=t}function Uo(e){return e.getAttribute("src")?!1:!!(e.getAttribute("srcdoc")&&e.contentDocument&&e.contentDocument.body)}function zt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=Lt.map(o=>o.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let o=n.indexOf(t);return o===-1?"auto":Lt[o]}else return"auto";else return Lt[r]}var $o={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,loadingTheme:"text",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],excludeSelectors:["[class^='lln-']"],extraBlockSelector:[".ytd-transcript-segment-renderer"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeSelectors:[".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"opennet.ru",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META"]},{matches:"getpocket.com",selectors:["h2.title","div.excerpt p","main > article"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}}]};function am(){if(te.PROD==="1")return{};let e={};if(te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:te.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:te.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(te.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:te.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(te.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:te.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:te.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(te.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&te.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:te.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:te.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(te.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:te.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return te.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=te.IMMERSIVE_TRANSLATE_SERVICE),te.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),te.MOCK==="1"&&(e.translationService="mock"),e}async function Yr(){let e=await Y.storage.local.get(Wn);if(e[Wn]){let t=e[Wn],n=t.tempTranslationUrlMatches||[],r=n.filter(i=>i.expiredAt>Date.now()),o=!1;r.length!==n.length&&(n=r,o=!0);let a={...t,tempTranslationUrlMatches:[...n]};return o&&await pn(a),a}else return{}}async function pn(e){await Y.storage.local.set({[Wn]:e})}async function jo(e){await Y.storage.local.set({[jn]:e})}async function ht(){let e=await Y.storage.local.get(jn),t={...$o,buildinConfigUpdatedAt:te.BUILD_TIME};if(e[jn]){let g=e[jn];if(g&&g.buildinConfigUpdatedAt){let d=new Date(g.buildinConfigUpdatedAt),T=new Date(t.buildinConfigUpdatedAt);d>T&&(t=g)}}let n={};if(!We()&&Y.commands&&Y.commands.getAll){let g=await Y.commands.getAll();for(let d of g)d.name&&d.shortcut&&(n[d.name]=d.shortcut)}let r=im(),o=am(),a=await om(),i=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},s=await Yr(),l=new Date;if(s&&s.tempTranslationUrlMatches&&s.tempTranslationUrlMatches.length>0){let g=s.tempTranslationUrlMatches.filter(d=>new Date(d.expiredAt)>l);if(g.length>0){let d=a.translationUrlPattern?a.translationUrlPattern?.matches||[]:[],T=Array.isArray(d)?d:[d],b=Array.from(new Set(T.concat(g.map(p=>p.match))));a.translationUrlPattern={...a.translationUrlPattern,matches:b}}}let u=Object.assign({},i,o,a);if(!u.interfaceLanguage){let g=await sm();u.interfaceLanguage=g}let c=Object.assign(r,t),f=Object.keys(c),m=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let g of f){let d=g;if(d==="generalRule")typeof u[d]=="object"&&(c[d]=$r(r[d],u[d]));else if(d==="translationServices"){let T=u[d]||{},b=t[d]||{},p=Object.keys(b),h=Object.keys(T),w=[...new Set([...p,...h])],E={};for(let D of w)E[D]={...b[D],...T[D]};c[d]=E}else if(typeof u[d]!="string"&&typeof u[d]!="boolean"&&typeof u[d]!="number"&&m.includes(d))u[d]&&(c[d]=Object.assign(c[d],u[d])),d==="shortcuts"&&(c[d]={...c[d],...n});else if(d==="rules"){if(Array.isArray(u[d])&&(c[d]=[...u[d],...c[d]]),te.PROD==="0"&&te.DEV_RULES){let T=JSON.parse(te.DEV_RULES);c[d]=[...T,...c[d]]}}else u[d]!==void 0&&(c[d]=u[d])}return c.donateUrl=t.donateUrl,c.minVersion=t.minVersion,c.feedbackUrl=t.feedbackUrl,c}async function om(){return(await Y.storage.sync.get("userConfig")||{}).userConfig||{}}var sm=async()=>{let n=(await Y.i18n.getAcceptLanguages()).map(r=>zt(r)).find(r=>Bt[r]);return n||"en"},im=()=>{let e={...$o,buildinConfigUpdatedAt:te.BUILD_TIME};return{...e,targetLanguage:ko,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};var fc="auto",Xr="auto",gc="auto";function dc(e){fc=e}function hn(e){Xr=e}function tr(){return Xr!=="auto"?Xr:gc!=="auto"?gc:fc}function Qr(){return Xr}async function nr(e){let{url:t,config:n,state:r}=e,o=new URL(t),a="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:l,translationTheme:u,translationThemePatterns:c,translationUrlPattern:f,targetLanguage:m,sourceLanguageUrlPattern:g,immediateTranslationPattern:d}=n,T=bn(t,i),b=bn(t,d),p=s,h=Object.keys(l);for(let M of h){let F=l[M];if(bn(t,F)){p=M;break}}let w=u,E=Object.keys(c);for(let M of E){let F=c[M];if(bn(t,F)){w=M;break}}let D=bn(t,f),S=lm(t,f);S||(S=Kn(t,jl));let x=Object.keys(g),_={};for(let M of x){let F=g[M];if(F&&F.matches)for(let se of F.matches)_[se]=M}let L=Object.keys(_),O=Mo(t,L);O&&(a=_[O]??"auto",_[O]&&_[O]!=="auto"&&hn(_[O]));let $=m||"zh-CN",A=o.hostname,H=await ot(A),j=o.pathname+o.search+o.hash,J=await ot(j),Pe=`https://${H}.com/${J}`,Ke=await Yr(),ve=n.translationStartMode;ve==="dynamic"&&b&&(ve="immediate");let fe={targetLanguage:$,config:n,translationService:p,translationTheme:w,isTranslateUrl:D,sourceLanguage:a,isTranslateExcludeUrl:S,rule:n.generalRule,url:t,encryptedUrl:Pe,state:r||{translationArea:n.translationArea,translationStartMode:ve,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:T},localConfig:Ke};fe.state.translationArea==="body"&&(fe.config.generalRule.excludeTags=fe.config.generalRule.excludeTags.filter(M=>M!=="BUTTON"&&M!=="LABEL"),fe.config.generalRule.additionalExcludeSelectors=fe.config.generalRule.additionalExcludeSelectors.filter(M=>M!==".btn")),fe.translationService==="d"&&(n.immediateTranslationTextCount=0);let et=n.rules,le;globalThis.PDFViewerApplication?le=et.find(M=>M.isPdf):le=et.find(M=>bn(t,M)),fe.rule.isPdf&&(fe.state.translationArea="main"),fe.state.translationArea==="body"&&(fe.rule.paragraphMinTextCount=1,fe.rule.paragraphMinWordCount=1);let v=n.generalRule;return le&&(fe.rule=$r(v,le)),fe.state.translationArea==="body"&&fe.rule.excludeTags&&(fe.rule.excludeTags=fe.rule.excludeTags.filter(M=>M!=="LABEL"&&M!=="BUTTON"&&M!=="ASIDE"&&M!=="OPTION")),fe}function bn(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:o,excludeSelectorMatches:a}=t;return r&&r.length>0&&Kn(e,r)?!1:n&&n.length>0&&Kn(e,n)?!0:a&&a.length>0&&Gr(a)?!1:!!(o&&o.length>0&&Gr(o))}function lm(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&Kn(e,n)||r&&r.length>0&&Gr(r))}function Zr(e){let t;try{t=new URL(e)}catch{return!1}let n=t.pathname;return n.endsWith(".html")||n.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}var Wo={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return Y.storage[n].get(r)},set:(e,t,n)=>Y.storage[n].set({[e]:t})};function ea(e,t,n){let[r]=ae(()=>typeof t=="function"?t():t),[o]=ae(n),[a,i]=ae(r),[s,l]=ae(!0),[u,c]=ae("");je(()=>{Wo.get(e,r,o).then(m=>{m[e]&&i(m[e]),l(!0),c("")}).catch(m=>{l(!1),c(m)})},[e,r,o]);let f=In(m=>{let g=typeof m=="function"?m(a):m;G.debug("new settings",g),Wo.set(e,g,o).then(()=>{i(g),l(!0),c("")}).catch(d=>{i(g),l(!1),c(d)})},[o,e,a]);return[a,f,s,u]}function zo(e,t,n){let r=[];return function(){let[a,i,s,l]=ea(e,t,n),u=In(c=>{for(let f of r)f(c)},[]);return je(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[a,u,s,l]}}function mc(e,t){return zo(e,t,"sync")}var cm="userConfig",um={},gm=mc(cm,um);function pc(){let[e,t,n,r]=gm();return[e,function(a){let i=typeof a=="function"?a(e):a;i&&(i.updatedAt=new Date().toISOString()),t(i)},n,r,t]}var ke=class extends Error{constructor(n,r,o){super(r);this.name=n,o&&(this.details=o)}};var rr=new Map,qt=class{constructor(t,n=!1){this.logger=new Vn,n&&this.logger.setLevel("debug"),this.fromType=t,rr.has(t)||(rr.set(t,new Map),Y.runtime.onMessage.addListener((r,o,a)=>{let i=r.from,s=r.to,l,u,c;o.tab&&o.tab.id&&(l=o.tab.id,i=`${i}:${l}`,u=o.tab.url,c=o.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let f=Vo(s),{type:m,name:g}=f;if(m!==t)return!1;let d=Vo(i),b=rr.get(m).get(g);if(!b)return this.logger.debug(`no message handler for ${m}:${s}, but it's ok`),!1;let{messageHandler:p,sync:h}=b,w={type:t,name:d.name,id:l,url:u,active:c};if(h){try{let E=p(r.payload,w);a({ok:!0,data:E})}catch(E){a({ok:!1,errorName:E.name,errorMessage:E.message,errorDetails:E.details})}return!1}else return p(r.payload,w).then(E=>{a({ok:!0,data:E})}).catch(E=>{a({ok:!1,errorName:E.name,errorMessage:E.message,errorDetails:E.details})}),!0}))}getConnection(t,n,r){let o=!1;r&&r.sync&&(o=!0);let a=this.fromType,i=rr.get(a);if(i.has(t))return i.get(t).connectionInstance;{let s=new qo(`${a}:${t}`,this.logger);return rr.get(a).set(t,{messageHandler:n,sync:o,connectionInstance:s}),s}}},qo=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=Vo(t),{type:o,id:a}=r;if(o!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await Y.runtime.sendMessage(i);return hc(i,s,this.logger)}catch(s){if(o==="popup"){let l=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(l,n,t,s),Promise.resolve({message:l})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await Y.tabs.sendMessage(a,i);return hc(i,s,this.logger)}}};function hc(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new ke(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function Vo(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var fm=function(e,t){let{method:n,data:r}=e;G.debug(`popup received message: ${n}`,r||" ");let o;t.active&&(o=t.id,globalThis.document.dispatchEvent(new CustomEvent(zn,{detail:{tabId:o,payload:e}})))},ta;function bc(){ar()}function ar(){return ta||(ta=new qt("popup",!1).getConnection("main_sync",fm),ta)}function yc(e,t=2e3){return n=>{let r,o=0;return a=>{++o==e&&(n(a),o=0),clearTimeout(r),r=setTimeout(()=>o=0,t)}}}function Tc(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function xc(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function na(){return Y.runtime.getManifest().version}var dm=0;function R(e,t,n,r,o){var a,i,s={};for(i in t)i=="ref"?a=t[i]:s[i]=t[i];var l={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--dm,__source:o,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(i in a)s[i]===void 0&&(s[i]=a[i]);return V.vnode&&V.vnode(l),l}function Rt(e){let{items:t,maxWidth:n}=e;return n=n||128,R("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let o=r.target.value,a=t.find(i=>i.value===o);a&&a.onSelected(a)},children:t.map(r=>R("option",{value:r.value,selected:r.selected,children:r.label}))})}var ra="DROP_DOWN_DEFAULT_VALUE";function Ko(e){let{showArrow:t,onSelected:n,className:r,menus:o,maxWidth:a}=e;r=r||"",t=t??!0,a=a||60;let i=Ma(null);return R("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${r||""}`,value:ra,style:{maxWidth:`${a}px`},onChange:s=>{s.preventDefault();let l=s.target.value;if(i.current&&l!==ra){i.current.value=ra,i.current?.dispatchEvent(new Event("change"));let u=o.find(c=>c.value===l);u&&n(u)}},children:[{value:ra,label:e.label}].concat(o).map(s=>R("option",{value:s.value,children:s.label}))})}function wc(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Go(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let o=t[r],a=mm(r);if(typeof o=="object"||a){let i=o;a&&typeof i=="string"&&(i={tag:"a",href:i});let s=`<${r}>`,l=n.indexOf(s);if(l!==-1){let u=i.tag||"a",c=n.indexOf(`</${r}>`);if(c!==-1){let f=n.substring(l+s.length,c),m=Object.keys(i).filter(g=>g!=="tag").map(g=>`${g}="${i[g]}"`).join(" ");n=n.replace(`${s}${f}</${r}>`,`<${u} ${m}>${f}</${u}>`)}}}else{let i=new RegExp("{"+r+"}","gm");n=n.replace(i,o.toString())}}),n}function or(e,t,n){let r=e[t];if(!r)return n;let o=n.split("."),a="";do{a+=o.shift();let i=r[a];i!==void 0&&(typeof i=="object"||!o.length)?(r=i,a=""):o.length?a+=".":r=n}while(o.length);return r}function vc(e,t,n,r,o){if(!e.hasOwnProperty(n))return t;let a=or(e,n,t);return a===t&&n!==r&&(a=or(e,r,t)),Go(a,o)}function mm(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var yn={},pm={root:"",lang:"en",fallbackLang:"en"};function Jo(e,t){let n=Object.assign({},pm,e);yn=t||yn;let[r,o]=ae(n.lang),[a,i]=ae(yn),[s,l]=ae(!1),u=f=>{if(a.hasOwnProperty(f))return;l(!1);let m=wc(n.root||"",f);n.getUrl&&(m=n.getUrl(n.root||"",f),fetch(m).then(g=>g.json()).then(g=>{yn[f]=g,i({...yn}),l(!0)}).catch(g=>{i({...yn}),l(!0)}))};return je(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:o,t:(f,m)=>{if(!a.hasOwnProperty(r))return f;let g=or(a,r,f);return g===f&&r!==n.fallbackLang&&(g=or(a,n.fallbackLang,f)),Go(g,m)},isReady:s}}var Xo=_a(null),Yo={root:"assets",lang:"en",fallbackLang:"en"},Sc=e=>{let{t,setLang:n,lang:r,isReady:o}=Jo({root:e.root||Yo.root,lang:e.lang||Yo.lang,fallbackLang:e.fallbackLang||Yo.fallbackLang,getUrl:e.getUrl},e.translations);return R(Xo.Provider,{value:{t,setLang:n,lang:r,isReady:o},children:e.children})};function bt(){return Ra(Xo)}function Qo(e){let{field:t,onChange:n,value:r}=e;r=r||t.default||"";let{t:o}=bt();return t.type==="select"?R("div",{class:"flex justify-between mb-2",children:[R("label",{class:"inline-block",children:[t.label?o(t.label):t.name,"\uFF1A"]}),R(Rt,{items:t.options.map(a=>({label:`${a.label?o(a.label):a.value}`,value:r,selected:r===a.value,onSelected:()=>{n(a.value)}}))})]}):null}function Ec(e,t,n){let r=hm(e,t),o=[],a={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(a.tempSentences.reduce((l,u)=>l+u.text.length,0)+i.text.length>t||a.tempSentences.length>=n)&&(o.push(a),a={fromByClient:a.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(a.from!==i.from||a.to!==i.to)&&(a.tempSentences.length>0?(o.push(a),a={fromByClient:a.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(a.from=i.from,a.to=i.to)),a.tempSentences.push(i);return a.tempSentences.length>0&&o.push(a),o}function hm(e,t){let n=[];for(let r=0;r<e.length;r++){let o=e[r],{from:a,to:i,text:s,url:l}=o,u=s.split(/\r?\n/),c=[],f="";for(let m=0;m<u.length;m++){let g=u[m];if(g===""){c.length>0?m<u.length-1&&(c[c.length-1].suffix+=`
`):f+=`
`;continue}else if(g.length>t){let d=[];Zo(g,t,d);for(let T=0;T<d.length;T++){let b=d[T],{text:p,prefix:h,suffix:w}=b;c.push({from:a,to:i,text:p,prefix:h,suffix:w,index:r,url:l})}}else c.push({text:g,prefix:f,suffix:"",from:a,to:i,index:r,url:l});c.length>0&&m<u.length-1&&(c[c.length-1].suffix+=`
`)}n.push(...c)}return n}function sr(e,t){let n=zt(e),r=zt(t),o=n===r;return o?!0:(o=n.startsWith("zh")&&r.startsWith("zh"),o)}function Zo(e,t,n){let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((a,i)=>{let s=e.lastIndexOf(i,t);return s>a?s:a},-1);if(o===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&Zo(e.slice(t),t,n);else{let a=e.slice(0,o+1);a.startsWith(" ")?n.push({text:a.slice(1),prefix:" ",suffix:""}):n.push({text:a,prefix:"",suffix:""}),o+1<e.length&&Zo(e.slice(o+1),t,n)}return n}async function aa(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let a=await(e.fetchPolyfill||fetch)(t,r);if(a.ok&&a.status>=200&&a.status<400){if(n==="json")return await a.json();if(n==="text")return await a.text();if(n==="raw"){let i=await a.text(),s=Object.fromEntries([...a.headers.entries()]),l=a.url;return l||(a.headers.get("X-Final-URL")?l=a.headers.get("X-Final-URL"):l=t),{body:i,headers:s,status:a.status,statusText:a.statusText,url:l}}}else{let i;try{i=await a.text()}catch(s){G.error("parse response failed",s)}throw new ke("fetchError",a.status+": "+a.statusText||"",i)}}function Dt(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function bm(e,t){return e<<t|e>>>32-t}function sa(e,t,n,r,o,a){return Dt(bm(Dt(Dt(t,e),Dt(r,a)),o),n)}function Fe(e,t,n,r,o,a,i){return sa(t&n|~t&r,e,t,o,a,i)}function He(e,t,n,r,o,a,i){return sa(t&r|n&~r,e,t,o,a,i)}function Be(e,t,n,r,o,a,i){return sa(t^n^r,e,t,o,a,i)}function Ue(e,t,n,r,o,a,i){return sa(n^(t|~r),e,t,o,a,i)}function oa(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,o,a,i,s=1732584193,l=-271733879,u=-1732584194,c=271733878;for(n=0;n<e.length;n+=16)r=s,o=l,a=u,i=c,s=Fe(s,l,u,c,e[n],7,-680876936),c=Fe(c,s,l,u,e[n+1],12,-389564586),u=Fe(u,c,s,l,e[n+2],17,606105819),l=Fe(l,u,c,s,e[n+3],22,-1044525330),s=Fe(s,l,u,c,e[n+4],7,-176418897),c=Fe(c,s,l,u,e[n+5],12,1200080426),u=Fe(u,c,s,l,e[n+6],17,-1473231341),l=Fe(l,u,c,s,e[n+7],22,-45705983),s=Fe(s,l,u,c,e[n+8],7,1770035416),c=Fe(c,s,l,u,e[n+9],12,-1958414417),u=Fe(u,c,s,l,e[n+10],17,-42063),l=Fe(l,u,c,s,e[n+11],22,-1990404162),s=Fe(s,l,u,c,e[n+12],7,1804603682),c=Fe(c,s,l,u,e[n+13],12,-40341101),u=Fe(u,c,s,l,e[n+14],17,-1502002290),l=Fe(l,u,c,s,e[n+15],22,1236535329),s=He(s,l,u,c,e[n+1],5,-165796510),c=He(c,s,l,u,e[n+6],9,-1069501632),u=He(u,c,s,l,e[n+11],14,643717713),l=He(l,u,c,s,e[n],20,-373897302),s=He(s,l,u,c,e[n+5],5,-701558691),c=He(c,s,l,u,e[n+10],9,38016083),u=He(u,c,s,l,e[n+15],14,-660478335),l=He(l,u,c,s,e[n+4],20,-405537848),s=He(s,l,u,c,e[n+9],5,568446438),c=He(c,s,l,u,e[n+14],9,-1019803690),u=He(u,c,s,l,e[n+3],14,-187363961),l=He(l,u,c,s,e[n+8],20,1163531501),s=He(s,l,u,c,e[n+13],5,-1444681467),c=He(c,s,l,u,e[n+2],9,-51403784),u=He(u,c,s,l,e[n+7],14,1735328473),l=He(l,u,c,s,e[n+12],20,-1926607734),s=Be(s,l,u,c,e[n+5],4,-378558),c=Be(c,s,l,u,e[n+8],11,-2022574463),u=Be(u,c,s,l,e[n+11],16,1839030562),l=Be(l,u,c,s,e[n+14],23,-35309556),s=Be(s,l,u,c,e[n+1],4,-1530992060),c=Be(c,s,l,u,e[n+4],11,1272893353),u=Be(u,c,s,l,e[n+7],16,-155497632),l=Be(l,u,c,s,e[n+10],23,-1094730640),s=Be(s,l,u,c,e[n+13],4,681279174),c=Be(c,s,l,u,e[n],11,-358537222),u=Be(u,c,s,l,e[n+3],16,-722521979),l=Be(l,u,c,s,e[n+6],23,76029189),s=Be(s,l,u,c,e[n+9],4,-640364487),c=Be(c,s,l,u,e[n+12],11,-421815835),u=Be(u,c,s,l,e[n+15],16,530742520),l=Be(l,u,c,s,e[n+2],23,-995338651),s=Ue(s,l,u,c,e[n],6,-198630844),c=Ue(c,s,l,u,e[n+7],10,1126891415),u=Ue(u,c,s,l,e[n+14],15,-1416354905),l=Ue(l,u,c,s,e[n+5],21,-57434055),s=Ue(s,l,u,c,e[n+12],6,1700485571),c=Ue(c,s,l,u,e[n+3],10,-1894986606),u=Ue(u,c,s,l,e[n+10],15,-1051523),l=Ue(l,u,c,s,e[n+1],21,-2054922799),s=Ue(s,l,u,c,e[n+8],6,1873313359),c=Ue(c,s,l,u,e[n+15],10,-30611744),u=Ue(u,c,s,l,e[n+6],15,-1560198380),l=Ue(l,u,c,s,e[n+13],21,1309151649),s=Ue(s,l,u,c,e[n+4],6,-145523070),c=Ue(c,s,l,u,e[n+11],10,-1120210379),u=Ue(u,c,s,l,e[n+2],15,718787259),l=Ue(l,u,c,s,e[n+9],21,-343485551),s=Dt(s,r),l=Dt(l,o),u=Dt(u,a),c=Dt(c,i);return[s,l,u,c]}function Ac(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function es(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function ym(e){return Ac(oa(es(e),e.length*8))}function Tm(e,t){var n,r=es(e),o=[],a=[],i;for(o[15]=a[15]=void 0,r.length>16&&(r=oa(r,e.length*8)),n=0;n<16;n+=1)o[n]=r[n]^909522486,a[n]=r[n]^1549556828;return i=oa(o.concat(es(t)),512+t.length*8),Ac(oa(a.concat(i),512+128))}function Lc(e){var t="0123456789abcdef",n="",r,o;for(o=0;o<e.length;o+=1)r=e.charCodeAt(o),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function ts(e){return unescape(encodeURIComponent(e))}function Cc(e){return ym(ts(e))}function xm(e){return Lc(Cc(e))}function _c(e,t){return Tm(ts(e),ts(t))}function wm(e,t){return Lc(_c(e,t))}function Tn(e,t,n){return t?n?_c(t,e):wm(t,e):n?Cc(e):xm(e)}var xn=[];async function ia(e,t){return await new Promise((n,r)=>{let o=e,a=1,i=indexedDB.open(o,a);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let l=i.result,u=t||"cache";l.createObjectStore(u,{keyPath:"key"})}})}async function kc(e){let t=`${de}-${e.service}@${e.from}->${e.to}`;return await Sm(t,e)}async function Pc(e){let t=Tn(e.originalText),n=`${de}-${e.service}@${e.from}->${e.to}`;return await vm(n,t)}async function vm(e,t){let n=await ia(e);return await new Promise((r,o)=>{if(!n)return o();let a="cache",s=n.transaction([a],"readonly").objectStore(a).get(t);s.onsuccess=l=>{n.close();let u=s.result;r(u)},s.onerror=l=>{n.close(),console.error("queryInDB->onerror:",l),o()}})}async function Sm(e,t){let n=await ia(e);return(await Am()).includes(e)||await Em(e),await new Promise(o=>{if(!n)return o(!1);let a="cache",s=n.transaction([a],"readwrite").objectStore(a).put(t);s.onsuccess=l=>{n.close(),o(!0)},s.onerror=l=>{console.error("addInDB->onerror:",l),n.close(),o(!1)}})}async function Em(e){let t="cache_list",n=await ia(de+"-cacheList",t),o=n.transaction([t],"readwrite").objectStore(t).put({key:e});o.onsuccess=a=>{n.close(),xn.push(e)},o.onerror=a=>{n.close(),console.error(a)}}async function Am(){if(xn&&xn.length>0)return xn;let e=await ia(de+"-cacheList","cache_list");return xn=await new Promise(t=>{let n="cache_list",o=e.transaction([n],"readonly").objectStore(n).getAllKeys();o.onsuccess=a=>{e.close(),t(o.result)},o.onerror=a=>{e.close(),console.error(a),t([])}}),xn}var Lm=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,Cm=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,_m=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,km=/(\s+)|([\p{P}\p{S}])/gu,Pm=[["zh-CN",Lm],["ja",Cm],["ko",_m]];function Mc(e){if(!e)return"auto";let t="auto",n=0,r=0,o=e.match(km);o&&(r=o.reduce((i,s)=>i+s.length,0));let a=e.length-r;for(let i of Pm){let s=i[1],l=i[0],u=e.match(s),c=u?u.length:0;c>n&&(n=c,t=l)}return n*2.5/a>.5?t:"auto"}function ns(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:o,additionalInlineSelectors:a,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:l,globalStyles:u,stayOriginalTags:c,stayOriginalSelectors:f,globalAttributes:m}=t,g=Object.keys(u);if(g.length>0)for(let L of g){let O=qe(e,[L]);for(let $ of O)if(!oe($,Eo)){ie($,Eo,"1");let A=u[L];$.style.cssText+=A}}let d=Object.keys(m);if(d.length>0)for(let L of d){let O=m[L],$=Object.keys(O),A=qe(e,[L]);for(let H of A)for(let j of $){let J=O[j];H.getAttribute(j)!==J&&(J===null?H.removeAttribute(j):H.setAttribute(j,J))}}let T=[...n,...r],b=[...o,...a],p=[...s],h=l.map(L=>L.toLowerCase()),w=i;qe(e,T).forEach(L=>{oe(L,rt,!0)||ie(L,rt,"1",!0)});let D=[];if(p.length>0&&(D=qe(e,p).filter(L=>!oe(L,Xe))),h.length>0){let L=c.reduce((A,H)=>{let j=H.toLowerCase();return A.push(`<${j}>`,`</${j}>`,`<${j} />`),A},[]),O=[">http://",">https://"];L.push(...O);let $=qe(e,h).filter(A=>{if(oe(A,Xe))return!1;{let j=A.innerHTML;return!L.some(Pe=>j.includes(Pe))}});D.push(...$)}D.forEach(L=>{oe(L,Xe)||ie(L,Xe,"1")});let S=[];b.length>0&&S.push(...qe(e,b)),S.forEach(L=>{ie(L,wt,"1")});let x=[];w.length>0&&x.push(...qe(e,w)),x.forEach(L=>{ie(L,Wt,"1")});let _=[];f.length>0&&_.push(...qe(e,f)),_.forEach(L=>{ie(L,Fr,"1")})}function Rc(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function Dc(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await Ze({text:Zn(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=zt(document.documentElement.lang)),e}function rs(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,o=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let l=e.matches(s),u=[];l?u=[e]:u=e.querySelectorAll(s);for(let c of u)oe(c,Ut)||ie(c,Ut,"1");return Array.from(u)}).flat();o.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let f=qe(e,n.additionalSelectors);for(let m of f)oe(m,Ut)||ie(m,Ut,"1");o.push(...f.map(m=>({element:m,reserve:!0})))}let i=qe(e,["article"]);o.push(...i.map(f=>({element:f,reserve:!0})));let s;if(o.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let f=Array.from(s);o=o.concat(f.map(m=>({element:m,reserve:!0})))}let l=[],u=f=>{if(f.nodeType===Node.ELEMENT_NODE&&Ve(f,t.rule,!1))return NodeFilter.FILTER_REJECT;if(f.nodeType===Node.TEXT_NODE&&(f.textContent?f.textContent.trim():"").length>=n.containerMinTextCount){let g=f.parentNode;g&&g.parentNode&&(g=g.parentNode),g&&g.nodeType===Node.ELEMENT_NODE&&(l.includes(g)||l.push(g))}return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;c.nextNode(););o.push(...l.map(f=>({element:f,reserve:!1})))}let a=tc(e,o,n);return a.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),a}var as=[];function Nc(e){as.push(e)}function os(){as.forEach(e=>e()),as=[]}function it(e,t,n,r){let o=[],{rule:a}=r,i=er(r);if(e.length===0)return null;e=e.map(b=>b.element?b:{element:b});let s="",l=!1;for(let b=0;b<e.length;b++){let h=e[b].element;if(typeof h=="string"){s+=h;continue}let w="";Jr(h,`[${Nl}]`)?w=Mm(h):w=h.innerText;let E=w.startsWith(" "),D=w.endsWith(" ");h.tagName==="A"&&(E=!0,D=!0);let S=mn(h,a);if(w===""||S){S&&(E=!0,D=!0);let x={type:"element",value:h};o.push(x);let _=o.length-1,L=`${i[0]}${_}${i[1]}`;s+=(E?" ":"")+L+(D?" ":"");continue}if(!Ve(h,a,!0)){{let x=t?w:w.trim().replace(/\n/g," ");if(Oo(x)||Fo(x)||Ho(x)||sc(x)){let _={type:"element",value:h};o.push(_);let L=o.length-1,O=`${i[0]}${L}${i[1]}`;s+=(E?" ":"")+O+(D?" ":"")}else l=!0,s+=(E?" ":"")+x+(D?" ":"")}if(typeof h!="string"){let x=Qn(h.nextSibling,t);x&&(s+=x)}}}if(!l)return null;let u=!1,c=s.split(" ").length,f=s.split(`
`).length;c<=a.blockMinWordCount&&s.length<=a.blockMinTextCount&&f<2&&(u=!0);let m=e.map(b=>b.element),g=Pt(e),d=!1;if(g){let p=globalThis.getComputedStyle(g).writingMode;d=p?p.includes("vertical"):!1}let T={rootFrame:n,isVertical:d,elements:m,text:s,variables:o,inline:u,preWhitespace:t};return ac(T,r.state.translationArea==="body"?2:a.paragraphMinTextCount,r.state.translationArea==="body"?1:a.paragraphMinWordCount,r)?T:null}function Mm(e){let t="",n=o=>o.nodeType===Node.ELEMENT_NODE?oe(o,rt,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:o.nodeType===Node.TEXT_NODE?(o.textContent&&o.textContent.trim()!==""&&(t+=o.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var Rm=1,Vt=new Map;function Fc(){return Vt}function Kt(e){return Vt.get(e)}function ir(e,t){Vt.set(e,t)}function Hc(){Vt.clear()}function Ic(e){if(!oe(e,$t))return!1;if(oe(e,un))return!0;let t=Mt(e,jt);if(!t)return!1;let n=parseInt(t),r=Vt.has(n);if(!r){let o=document.getElementById(`${Qe}-${n}`);o&&o.remove()}return r}function vt(e,t){let n={...e,id:Rm++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(ie(r,$t,"1"),ie(r,jt,`${n.id}`))}),t.push(n),Vt.set(n.id,{...n,state:"Original",observers:[]})}async function Bc(e,t,n){let r=[],{targetLanguage:o,rule:a}=n;for(let m of t){if(Ve(m,a,!1))continue;let g=oe(m,gn),d=[];if(oe(m,Xe)){if(!Ic(m)){let h=it([m],!0,e,n);h&&vt(h,r)}continue}let T=h=>{if(!(h.nodeType===Node.TEXT_NODE||h.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(h.nodeType===Node.ELEMENT_NODE){let w=h;if(w.isContentEditable||Ic(h))return NodeFilter.FILTER_REJECT;if(ie(w,$t,"1"),oe(w,Xe)){if(d.length>0){let D=it([...d],g,e,n);D&&vt(D,r),d.length=0}d.push(w);let E=it([...d],g,e,n);return E&&vt(E,r),d.length=0,NodeFilter.FILTER_REJECT}}if(Ve(h,a,!0)){if((h.nodeName==="CODE"||h.nodeName==="TT")&&h.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(st(h,a))return Oc(h,d,r,g,e,n),NodeFilter.FILTER_REJECT;if(d.length>0){let w=it([...d],g,e,n);w&&vt(w,r),d.length=0}return NodeFilter.FILTER_REJECT}return h.nodeName==="PRE"?(h.classList.contains("code"),NodeFilter.FILTER_REJECT):st(h,a)?(Oc(h,d,r,g,e,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},b=document.createTreeWalker(m,NodeFilter.SHOW_ELEMENT,T),p=b.nextNode();for(;p;){if(d.length>0){let h=it([...d],g,e,n);h&&vt(h,r),d.length=0}p=b.nextNode()}if(d.length>0){let h=it([...d],g,e,n);h&&vt(h,r),d.length=0}}let i=r.map(m=>{let{text:g}=m;return Ze({text:g})}),s=await Promise.all(i),l=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],c="auto";n.state.isDetectParagraphLanguage||(c=Qr());let f=tr();return s.forEach((m,g)=>{let d=m;d==="auto"&&(d=f);let T={...r[g],languageByLocal:d,languageByClient:c||"auto"};if(Vt.set(T.id,{...T,state:"Original",observers:[]}),!sr(m,o)){if(u.length>0&&u.some(h=>sr(m,h)))return;l.push(T)}}),l}function Dm(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),o=null,a=!1;for(;o=r.nextNode();){let s=o.textContent||"",l=s.trim();if(!a&&s.length>0&&l.length===0){a=!0,n.push(" ");continue}l.length>0&&(n.push(o.parentElement),a=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=Qn(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=Qn(e.nextSibling,t);s&&n.push(s)}return n}function Oc(e,t,n,r,o,a){let i=e.previousElementSibling;if(i&&!st(i,a.rule)&&t.length>0){let l=it([...t],r,o,a);l&&vt(l,n),t.length=0}Ve(e,a.rule,!1)?rc(e,a.rule)||t.push(e):mn(e,a.rule)?t.push(e):Jr(e,["code","tt"])?t.push(...Dm(e,r)):t.push(e)}async function Wc(e,t,n,r){let o=[],{rule:a}=n;for(let i=0;i<t.length;i++){let s=t[i],l=r[i];if(!l)throw new Error("targetContainer is null");let u=[],c=!0,f=null,m=function(T){let b=T;if(["DIV","BR"].includes(b.nodeName))return c=!0,NodeFilter.FILTER_REJECT;if(b.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(Im(T))return NodeFilter.FILTER_REJECT;if(ie(b,$t,"1"),st(b,a)){let p=Pt(u),h=globalThis.getComputedStyle(b);if(!p)u.push(jc(b,h));else{let w=globalThis.getComputedStyle(p),E=ss(w),D=ss(h),S=$c(D,E),x=!1;if(c&&f&&$c(D,f).left>=1.5&&f.left>-3&&(x=!0),!x&&c){let L=(b.innerText||b.textContent||"").trim();(L.startsWith("\u2022")||L.charCodeAt(0)===61623||/^\d+\./.test(L))&&(x=!0)}!x&&c&&Pt(u)&&Kr(u).reduce(($,A)=>{let H=ss(globalThis.getComputedStyle(A));return Math.max($,H.right)},0)-E.right>a.pdfNewParagraphIndentRightIndentPx&&(x=!0),c&&(f=D,c=!1),x||(x=Nm(S,a)),x&&Uc(u,o,e,n,l),u.push(jc(b,h)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},g=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,m),d=g.nextNode();for(;d;)d=g.nextNode();Uc(u,o,e,n,l)}return o}function Uc(e,t,n,r,o){if(e.length>0){let a=it([...e],!1,n,r);a&&(a.isPdf=!0,a.targetContainer=o,a.inline=!1,vt(a,t)),e.length=0}}function ss(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function Nm(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<=t.pdfNewParagraphLineHeight*-1}function $c(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function jc(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function Im(e){if(!oe(e,$t))return!1;if(oe(e,un))return!0;let t=Mt(e,jt);if(!t)return!1;let n=parseInt(t),o=Fc().has(n);if(!o){let a=document.getElementById(`${Qe}-${n}`);a&&a.remove()}return o}function zc(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Om(e,t,n=[],r,o){let a=["notranslate"];return r&&a.push($l),e&&(a.push(`${de}-target-translation-theme-${e}`),t?a.push(`${Co}-theme-${e}`):a.push(`${Lo}-theme-${e}`)),n.length>0&&a.push(...n),t?a.push(Co):(a.push(Lo),o&&a.push(Ul)),a}function Fm(e){let t=["notranslate",Hl];return e&&t.push(`${de}-target-translation-theme-${e}-inner`),t}function qc(e,t,n){let{rule:r,translationTheme:o}=n,{variables:a,isVertical:i}=e;a=a||[];let{text:s}=t,{wrapperPrefix:l,wrapperSuffix:u}=r,c=er(n),f="afterend",m=new RegExp(`${c[0]}(\\d+)${c[1]}`,"g"),g=0,d=zc(s);a.length>0&&(d=d.replace(m,h=>{let w=d.indexOf(h),E=d[w-1]===" ",D=d[w+h.length]===" ",S=a[Number(g)];if(g++,S.type==="element"){let x=S.value.outerHTML;return E||(x=" "+x),D||(x=x+" "),x}else G.error("variable type not supported",S);return h}));let T=Om(o,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf);i&&T.push(Bl);let b=Fm(o),p="";return r.translationBlockStyle&&(p=`style="${r.translationBlockStyle}"`),d=`<span ${p} class="${T.join(" ")}"><span class="${b.join(" ")}">${d}</span></span>`,e.inline||(l==="smart"?d=`<br>${d}`:d=`${l}${d}`,u==="smart"?d=`${d}`:d=`${d}${u}`),e.inline&&(d=`<span class="notranslate">&nbsp;</span>${d}`),{html:d,position:f}}function Kc(e,t){let n=[];for(let r of e){if(oe(r,Xe))continue;if(ie(r,xo,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let a=s=>s.nodeType===Node.ELEMENT_NODE&&Ve(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&ls(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,a);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let a=r.querySelectorAll("pre");for(let i of a)Vc(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(ic(r,gn)||(Hm(r)?(ie(r,gn,"1"),t.isTransformPreTagNewLine&&Vc(r)):ie(r,gn,"0"))),is(0,r,t,n)}return{hiddenElements:n}}function is(e,t,n,r=[]){if(oe(t,Xe))return;let o=!1;if(e===0){let a=mn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&st(t,n)&&!a&&(o=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let a of t.childNodes)if(a.nodeType===Node.ELEMENT_NODE){if(Ve(a,n,!1))continue;{let i=globalThis.getComputedStyle(a),s=!1;if(i.display==="none"&&(r.push(a),s=!0),!s){let l=i.clip,u=i.zIndex,c=i.height,f=i.width,m=0;if(u.startsWith("-")){let g=parseInt(u);isNaN(g)||(m=g)}if((l==="rect(1px, 1px, 1px, 1px)"||m<0)&&(s=!0),!s&&a.nodeName!=="BR"){let g=parseInt(c),d=parseInt(f);!isNaN(g)&&!isNaN(d)&&(g>0&&g<8||d>0&&d<=8)&&(s=!0)}}if(s){ie(a,rt,"1",!0);continue}else{if(a.nodeName==="DIV"||cc(a,n)){if((i.display==="inline"||i.display==="inline-flex")&&!oe(a,Wt)){ie(a,wt,"1");continue}}else if((a.nodeName==="SPAN"||a.nodeName==="A")&&!i.display.startsWith("inline")){oe(a,wt)||(ie(a,Wt,"1"),is(e+1,a,n,r));continue}if(st(a,n)&&!o)continue;is(e+1,a,n,r)}}}else if(a.nodeType===Node.TEXT_NODE){let i=a.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");a.after(s),s.appendChild(a)}}}}function Hm(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Vc(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function ls(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let l=n.lastIndexOf(s,t);return l>i?l:i},-1);if(a===-1)n.length>t+20&&ls(e,t+20);else{let i=n.slice(a+1);a++,i.startsWith(" ")&&a++;let s=e.splitText(a),l=document.createElement("br");s.parentNode?.insertBefore(l,s),a+1<n.length&&ls(s,t)}}function Gc(e,t){let n=[];for(let r of e){let o=0,a=1e5,i=document.createElement("div"),s=c=>{let f=c;if(["DIV","BR"].includes(f.nodeName))return NodeFilter.FILTER_REJECT;if(f.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(f.nodeName==="SPAN"){let m=f.getBoundingClientRect(),g=globalThis.getComputedStyle(f),d=m.right,T=m.left,b=g.top.slice(0,-2),p=g.fontSize.slice(0,-2);return d>o&&(o=d),T<a&&(a=T),ie(f,qn,`${T}`),ie(f,Hr,`${d}`),ie(f,Il,b),ie(f,Ol,p),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;l.nextNode(););let u=o-a;u<600&&(u=600),n.push(i),i.style.left=o+"px",i.style.width=o+"px",i.classList.add(Ur),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var ca="Original",la=[],fs=new Set,cs=[],ua=[],Yc=[],ga=[],Jc=pt().split("#")[0],ds=0,Ae,Bm=hr(Km,300),Um=hr(Zc,200),ms=Jn(),$m=ms.PROD==="1",wn,lr=new Map,Xc,cr="";async function Qc(){yt()==="Original"?await Nt():(yt()==="Translated"||yt()==="Error")&&vn()}function vn(){os();let e=[document.body,...lr.keys()];for(let t of e)gs(t),t.querySelectorAll("."+Qe).forEach(a=>{a.remove()}),t.querySelectorAll("."+Ur).forEach(a=>{a.remove()}),t.querySelectorAll("["+So+"]").forEach(a=>{if($m)delete a[_e];else{let s=Object.keys(a.dataset).filter(l=>l.startsWith(ge));for(let l of s)delete a.dataset[l]}a.removeAttribute(So)});ou(),$e("Translating"),cr&&(document.title=cr),$e("Original")}function jm(e,t){let n=!1,r=Io(e.elements),o=Pt(e.elements);fs.add(e.id);let a=[];if(r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});ua.push(s),a.push(s),s.observe(r)}if(o&&o!==r){let s=new IntersectionObserver((l,u)=>{l.forEach(c=>{c.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});ua.push(s),a.push(s),s.observe(o)}let i=Kt(e.id);i&&(i.observers=a,ir(e.id,i))}function Wm(e,t){if(e){let n=new ResizeObserver((r,o)=>{for(let a of r)a.contentRect.width>10&&(o.disconnect(),t(a.target))});n.observe(e),Yc.push(n)}}async function Zc(e){let t=[...ga];ga=[];let n=new Map;t.forEach(r=>{n.has(r.rootFrame)||n.set(r.rootFrame,[]),n.get(r.rootFrame)?.push(r.element)});for(let[r,o]of n)try{let a=[];for(let i of o){let s=rs(i,e);if(s.length===0)continue;let l=s;a.push(...l)}await hs(a,r,e)}catch(a){G.error(`translateNewDynamicNodes error: ${a.message}`)}}function us(e,t){fs.delete(e.id);let n=Kt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(a=>{a.disconnect()}),n.observers=[],n.state="Translating",ir(e.id,n));let r=e.id;ds+=e.text.length;let o=Kr(e.elements);if(e.isPdf){let a=Io(e.elements),i=globalThis.getComputedStyle(a),s=i.top,l=i.fontSize,u=parseFloat(l.slice(0,-2));isNaN(u)||u>20&&(l="20px");let c=e.targetContainer,f=document.createElement("span");o.length===1&&(f.style.fontSize=l),f.id=`${Qe}-${r}`,f.style.top=s;let m=Mt(a,qn),g=o.reduce((b,p)=>{let h=Mt(p,qn);return h&&h<b?h:b},1e3),T=o.reduce((b,p)=>{let h=Mt(p,Hr);return h&&h>b?h:b},0)-g;T<30,T>600&&(T=600),m<200&&(m=10),m&&m<0&&(m=0),f.style.left=`${g||10}px`,g<400?f.style.width=T+"px":f.style.width=`calc(100% - ${g}px)`,f.classList.add("notranslate",`${Qe}`),c.appendChild(f)}else{let a=Pt(e.elements),i="afterend";e.elements.length>0&&a&&(o.length===1?i="beforeend":st(e.elements[0],t.rule)||(i="beforeend")),t.rule.insertPosition&&(i=t.rule.insertPosition);let s=document.createElement("span");if(s.classList.add("notranslate",Qe),s.id=`${Qe}-${r}`,s.innerHTML=qm(t.config.loadingTheme),i==="beforeend"){let l=uc(a);l?l.appendChild(s):a.appendChild(s)}else if(i==="afterend")a.insertAdjacentElement(i,s);else throw new Error("not support position")}la.push(r),Bm(t)}function zm(e,t){t.state.translationStartMode==="dynamic"&&ds>t.config.immediateTranslationTextCount?jm(e,n=>{us(n,t)}):us(e,t)}async function Nt(){if(ca==="Translating")return;$e("Translating");let e=await Gt(pt());if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),a=new URL(e.url).hostname,i=e.localConfig.tempTranslationUrlMatches||[],s=i.findIndex(u=>u.match===a&&u.expiredAt>r),l=!1;s>-1||(i.push({match:a,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),l=!0),l&&await pn({...e.localConfig,tempTranslationUrlMatches:[...i]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),G.debug("ctx",e),e.state.isNeedClean?vn():Ae.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Nc(()=>{ds=0,Hc(),ua.forEach(r=>{r.disconnect()}),Yc.forEach(r=>{r.disconnect()}),ua=[],fs.clear()}),$e("Translating");try{let r=[document.body];document.querySelectorAll("iframe").forEach(i=>{Uo(i)&&(r.push(i.contentDocument.body),Bo(i.contentDocument,ms.IMMERSIVE_TRANSLATE_INJECTED_CSS))}),e.rule.shadowRootSelectors&&e.rule.shadowRootSelectors.length>0&&qe(document.body,e.rule.shadowRootSelectors).forEach(s=>{s.shadowRoot&&s.shadowRoot.mode==="open"&&r.push(s.shadowRoot)});let a=0;$e("Translating"),G.debug("allFrames",r);for(let i of r)a+=await eu(i,e);a===0&&$e("Translated"),au(e).catch(i=>{G.error("translateTitle error:",i.name,i.message,i.details||"")}),Jm(e)}catch(r){$e("Error"),G.error(r)}}async function eu(e,t){ns(e,t.rule);let n=rs(e,t);G.debug("detect containers",n);let{rule:r}=t;n.length>0&&await hs(n,e,t);let o=Gm(e,r,t);return e===document.body?Xc=o:lr.set(e,o),n.length}async function Gt(e){let t=await su();if(!Ae)Ae=await nr({url:e,config:t});else{let n={url:e,config:t,state:Ae.state};Ae=await nr(n)}return Ae}async function tu(){yt()==="Original"?await fa():(yt()==="Translated"||yt()==="Error")&&(Ae=await Gt(pt()),Ae.state.translationArea!=="main"?await fa():vn())}async function fa(){Ae=await Gt(pt()),Ae.state.translationArea="main",await Nt()}async function ps(){Ae=await Gt(pt()),Ae.state.translationArea="body",await Nt()}async function nu(){yt()==="Original"?await ps():(yt()==="Translated"||yt()==="Error")&&(Ae=await Gt(pt()),Ae.state.translationArea!=="body"?(Ae.state.translationArea="body",await Nt()):vn())}async function ru(){Ae=await Gt(pt()),Ae.state.translationArea="body",Ae.state.translationStartMode="immediate",await Nt(),await Zc(Ae)}async function au(e){let t=document.title;if(!t||t.includes(Br))return;cr!==t&&(cr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=Qr()),n==="auto"){let r=await Ze({text:t});if(sr(r,e.targetLanguage))return}try{let r=await cu({id:0,url:e.url,text:t,from:n,to:e.targetLanguage,fromByClient:n},e);r&&r.text&&(document.title=cr+Br+r.text)}catch(r){throw r}}function qm(e){return`&nbsp;<span class="${de}-loading-${e} notranslate"></span>`}async function hs(e,t,n){let{rule:r}=n;for(let i of e)ns(i,r);let o=[];if(n.rule.isPdf)e.length>0&&($e("Translating"),o=Gc(e,r).targetContainers);else{$e("Translating");let i=Kc(e,r),{hiddenElements:s}=i;for(let l of s)Wm(l,()=>{lc(l,rt,!0),hs([l],t,n)});$e("Translating")}let a=[];if(n.rule.isPdf?a=await Wc(t,e,n,o):(e=e.filter(i=>!Ve(i,r,!1)),a=await Bc(t,e,n)),$e("Translating"),a.length===0){$e("Translated");return}G.debug("detect paragraphs",a);for(let i of a)zm(i,n);$e("Translated")}function Vm(e,t,n,r){let o=Kt(n.id);if(o&&(e||!t)){e||(G.error("translate error",t),e=new Error("no response from server"));let a=n.id,i=o.rootFrame.querySelector(`#${Qe}-${a}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),o&&(o.state="Error",ir(o.id,o));let l=`<span class="${de}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${de}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${de}-clickable-button notranslate" data-${de}-paragraph-id="${a}" data-${de}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=l)}else{let a=Kt(n.id);if(a){a.state="Translated",ir(a.id,a);let i=qc(a,t,r),s=t.id,l=a.rootFrame.querySelector(`#${Qe}-${s}`);l&&(l.innerHTML=i.html,a.rootFrame.querySelectorAll(`[${jt}="${s}"]`).forEach(c=>{ie(c,un,"1")}))}else G.error("paragraph not found",n.id)}}async function Km(e){if(la.length===0)return Promise.resolve();let t=[...la];la=[];let n="auto";e.state.isDetectParagraphLanguage||(n=tr());let r={sentences:t.filter(a=>Kt(a)).map(a=>{let i=Kt(a),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){$e("Translating");try{await bs(r,e,(a,i,s)=>{Vm(a,i,s,e)})}catch(a){$e("Error"),G.error("translateCurrentQueue error",a.name,a.message,a.details||" ");return}}$e("Translated")}function $e(e){ca=e,lu(ca)}function Gm(e,t,n){G.debug("enableMutatinObserver for ",e),gs(e),cs=[],ga=[];let r=t.inlineTags.concat(t.excludeTags).concat("#text","BR"),o=new MutationObserver(function(a){a.forEach(i=>{if(e===document.body){let s=pt();if(s.split("#")[0]!==Jc&&t.observeUrlChange){Jc=s.split("#")[0],os(),gs(e),ou(),setTimeout(()=>{G.debug("url changed, reinit page"),Xm()},t.urlChangeDelay);let u=new Event(Rl);document.dispatchEvent(u);return}}i.addedNodes.forEach(s=>{if(s.nodeType===Node.ELEMENT_NODE){let l=s;if(l.nodeName==="IFRAME")Uo(l)&&setTimeout(()=>{Bo(l.contentDocument,ms.IMMERSIVE_TRANSLATE_INJECTED_CSS),eu(l.contentDocument.body,n).catch(u=>{G.error("translateFrame error",u.details||" ",u)})},n.rule.urlChangeDelay);else if(Ym(t,l)||!r.includes(l.nodeName)){if(l.classList.contains("notranslate"))return;nc(l,cs)||(ga.push({element:l,rootFrame:e}),cs.push(l),Um(n))}}})})});return o.observe(e,{childList:!0,subtree:!0}),o}function Jm(e){let t=document.querySelector("title");t&&(wn=new MutationObserver(function(n){n.length>0&&(n[0].target.text.includes(Br)||au(e).catch(o=>{G.error("translateTitle error:",o.name,o.message,o.details||"")}))}),wn.observe(t,{subtree:!0,characterData:!0,childList:!0}))}function Ym(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Xm(){let e=Yn(),t=await Gt(pt());t.rule.urlChangeDelay&&await Mn(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?(We()?n=await Ze({text:Zn(document.body).slice(0,1e3)}):e?n=await Ze({text:Zn(document.body).slice(0,1e3)}):n=await iu(),n==="auto"&&(n=await Dc()),dc(n)):hn(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(G.debug(`detect page language: ${n}`),Rc(n,t.config.translationLanguagePattern)&&(r=!0,G.debug(`match language pattern ${n}, auto translate`))),r?(Ae.state.isAutoTranslate=!0,await Nt()):G.debug("do not auto translate",t)}function gs(e){if(lr.has(e)){let t=lr.get(e);t.disconnect(),t.takeRecords(),lr.delete(e)}else if(e===document.body){let t=Xc;t&&(t.disconnect(),t.takeRecords())}}function ou(){wn&&(wn.disconnect(),wn.takeRecords(),wn=void 0)}function yt(){return ca}var Qm=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await ps():n==="translateTheMainPage"?await fa():n==="translateToThePageEndImmediately"?await ru():n==="toggleTranslatePage"?await Qc():n==="toggleTranslateTheWholePage"?await nu():n==="toggleTranslateTheMainPage"?await tu():n==="translatePage"?await Nt():n==="restorePage"?vn():n==="showTranslationOnly"?void 0:n==="setCurrentPageLanguageByClient"&&hn(r)};var da;function ys(){return da||(da=new qt("content_script",!1).getConnection("main",Qm),da)}async function Jt(e){return await ys().sendMessage("background:main",e)}function ne(e){return We()||ec()?(e.fetchPolyfill=globalThis.GM_fetch,aa(e)):Jt({method:"fetch",data:e})}function su(){return We()?ht():Jt({method:"getConfig"})}function Ze(e){if(e.text){let t=Mc(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if(We()){let t=Y.extra.detectLanguage(e.text);return Promise.resolve(t)}return Jt({method:"detectLanguage",data:e})}function iu(){return Jt({method:"detectTabLanguage"})}function lu(e){if(We()){let n=new CustomEvent(Ml,{detail:e});document.dispatchEvent(n);return}ys().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function uu(e){return We()?Pc(e):Jt({method:"queryParagraphCache",data:e})}async function gu(e){if(We()){await kc(e);return}return Jt({method:"setParagraphCache",data:e})}async function Ts(){if(We())return Promise.resolve();await Jt({method:"mockRequest"})}var re=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,o=[],a=[],i=0,s=new Set,l=null,u=new Set;for(let m of r)m.from&&m.from!=="auto"&&u.add(m.from);let c=!1;u.size>1&&(c=!0);try{a=Ec(r,this.maxTextLength,this.maxTextGroupLength)}catch(m){if(n){s.has(i)&&i++;for(let g=i;g<r.length;g++){let d=r[g];n(m,null,d)}l=m}else l=m}let f=Lr({limit:this.throttleLimit,interval:1e3});G.debug("tempSentenceGroups",a.map(m=>m));for(let m=0;m<a.length;m++){let g=a[m],d=g.url,T=f(async()=>{let h=g.from;if(c&&(h="auto"),g.fromByClient&&g.fromByClient!=="auto"&&(h=g.fromByClient),this.isSupportList)return await this.translateList({text:g.tempSentences.map(E=>E.text),from:h,to:g.to,url:d});{let w=g.tempSentences.map(x=>x.text).join(Ao),E=await this.translate({text:w,from:h,to:g.to,url:d}),{text:D}=E;return{text:D.split(Ao),from:E.from,to:E.to}}}),b;try{b=await T()}catch(h){if(n){s.has(i)&&i++;for(let w=i;w<r.length;w++){let E=r[w];n(h,null,E)}l=h;continue}else{l=h;continue}}let{text:p}=b;for(let h=0;h<p.length;h++)try{let w=p[h],E=g.tempSentences[h],{index:D,prefix:S,suffix:x}=E;o[D]===void 0?o[D]={...r[D],from:g.from,to:g.to,text:S+w+x}:o[D].text+=S+w+x,D!==i&&n&&(s.add(i),n(null,o[i],r[i])),i=D}catch(w){if(n){s.has(i)&&i++;for(let E=i;E<r.length;E++){let D=r[E];n(w,null,D)}throw w}else throw w}}if(n&&!s.has(i)&&o[i]&&r[i]&&n(null,o[i],r[i]),l)throw l;return{sentences:o}}detectLanguageLocally(t){return Ze({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var fu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],lt=class extends re{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),o=`${n.getUTCMonth()+1}`.padStart(2,"0"),a=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${o}-${a}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:lt.langMap.get(o),SourceText:r,Target:lt.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:lt.langMapReverse.get(s.Response.Source)||o,to:lt.langMapReverse.get(s.Response.Target)||a}}async translateList(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:lt.langMap.get(o),SourceTextList:r,Target:lt.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:lt.langMapReverse.get(s.Response.Source)||o,to:lt.langMapReverse.get(s.Response.Target)||a}}async signedRequest({secretId:n,secretKey:r,action:o,payload:a,service:i,version:s}){let l=`${i}.tencentcloudapi.com`,u=new Date,c=`${new Date().valueOf()}`.slice(0,10),f=["POST","/","","content-type:application/json; charset=utf-8",`host:${l}`,"","content-type;host",await ot(a)].join(`
`),m=lt.getUTCDate(u),g=["TC3-HMAC-SHA256",c,`${m}/${i}/tc3_request`,await ot(f)].join(`
`),d=await Zl(m,`TC3${r}`),T=await Vr(i,d),b=await Vr("tc3_request",T),p=await Vr(g,b),h=await ne({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:l,"X-TC-Action":o,"X-TC-Timestamp":c,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${m}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${p}`},body:a});if(h instanceof Error)throw h;if(h.Response&&h.Response.Error&&h.Response.Error.Message)throw new Error(h.Response.Error.Message);return h}},Yt=lt;Yt.langMap=new Map(fu),Yt.langMapReverse=new Map(fu.map(([n,r])=>[r,n]));var du=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],ur=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:o,to:a}=n;if(!r)return{...n};let i=ur.langMap.get(o)||"auto",s=ur.langMap.get(a)||"zh-CN",l=await this.fetchWithoutToken(r,i,s);if(!l)throw new Error("google translate NETWORK_ERROR");if(!l.data[0]||l.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:l.data[0].map(c=>c[0]).filter(Boolean).join(""),from:ur.langMapReverse.get(l.data[2])||"auto",to:a}}async fetchWithoutToken(n,r,o){let a=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:o,q:n}),i="https://translate.googleapis.com/translate_a/single?"+a.toString();return{data:await ne({url:i})}}},Xt=ur;Xt.langMap=new Map(du),Xt.langMapReverse=new Map(du.map(([n,r])=>[r,n]));function mu(e){return e.result.texts}function Zm(e,t){return t?e+(t-e%t):e}function ep(e,t){return e.split(t).length-1}function pu(e){let t=Date.now(),n=1;for(let r of e)n+=ep(r,"i");return Zm(t,n)}function tp(e,t){return Math.floor(Math.random()*(t-e+1))+e}function xs(){return tp(1e6,1e8)}var ws="https://www2.deepl.com/jsonrpc",ma="auto",hu=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],bu=["formal","informal"];function Tu(e,t=ma,n=xs()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function np(e,t=1){let n=[],r=0;for(let o=0;o<e.length;o++){let a=e[o].chunks;for(let i=0;i<a.length;i++){let s=a[i];n.push({kind:"default",_index:o,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:a.slice(0,r).map(l=>l.sentences[0].text),raw_en_context_after:r+1<a.length?[a[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function yu(e){return e.reduce((t,n)=>{let r=n.chunks;for(let o of r)t.push(o.sentences[0].text);return t},[])}function rp(e){if(!e)return{};if(!bu.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function xu(e,t,n,r=xs(),o=1,a){let i=yu(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:np(n,o),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:rp(a),timestamp:pu(yu(n))},id:r}}function ap(e=hu){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function vs(e){return ap()[e.toLowerCase()]}var wu={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function vu(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function op(e,t,n){let r=Tu(e,t,n);return await ne({method:"POST",url:ws+"?method=LMT_split_text",headers:wu,body:vu(r)})}async function sp(e,t,n,r,o,a){let i=await op(e,n,r),s=xu(n==="auto"?i.result.lang.detected:n,t,mu(i),r,o,a),l=s.params.jobs.map(f=>f._index);s.params.jobs=s.params.jobs.map(f=>{let m={...f};return delete m._index,m});let u=await ne({method:"POST",url:ws+"?method=LMT_handle_jobs",body:vu(s),headers:wu}),c={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((f,m)=>{let g=l[m];c.text[g]===void 0&&(c.text[g]="");let d=s.params.jobs[m].sentences[0].prefix,T=s.params.jobs[m].sentences[0].prefix;c.text[g]=c.text[g]+d+f.beams[0].sentences[0].text}),c}async function Su(e,t,n=ma,r,o,a){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:sp(e,vs(t),vs(n)??"auto",r,o,a):{text:[],from:n,to:t}}var Eu=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Sn=class extends re{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:o,from:a}=n,i=await Su(r,Sn.langMap.get(o),Sn.langMap.get(a));return{text:i.text,from:Sn.langMapReverse.get(i.from),to:Sn.langMapReverse.get(i.to)}}},Qt=Sn;Qt.langMap=new Map(Eu),Qt.langMapReverse=new Map(Eu.map(([n,r])=>[r,n]));var Au=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],WS=new Map(Au),zS=new Map(Au.map(([e,t])=>[t,e]));var Lu=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],Ss="https://transmart.qq.com/api/imt",Zt=class extends re{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:o}=n,a=await this.detectLanguage(r),i=Zt.langMap.get(a)||a,s=Zt.langMap.get(o)||o;if(a===o)return{text:r,from:a,to:o};let l=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await ne({url:Ss,body:l,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:a||"auto",to:o}}async translateList(n){let{from:r,text:o,to:a}=n;if(o.length===1){let f=await this.translate({from:r,text:o[0],to:a,url:n.url});return{text:[f.text],from:f.from,to:f.to}}let i=await this.detectLanguage(o.join(`
`));if(i===a)return{text:o,from:i,to:a};let s=Zt.langMap.get(i)||i,l=Zt.langMap.get(a)||a,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:o,lang:s,orig_url:n.url},target:{lang:l},type:"plain"}),c=await ne({url:Ss,body:u,method:"POST"});if(c.header.ret_code!=="succ")throw new Error(c.message||c.header.ret_code);return{text:c.auto_translation,from:i||"auto",to:a}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},o=await ne({url:Ss,method:"POST",body:JSON.stringify(r)});if(o.header.ret_code!=="succ")throw new Error(o.message||o.header.ret_code);let a=o.language,i=Zt.langMapReverse.get(a);return i||a}},en=Zt;en.langMap=new Map(Lu),en.langMapReverse=new Map(Lu.map(([n,r])=>[r,n]));function Cu(){return Math.random()>=0}var En=class extends re{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await Ts(),await Mn(5e3);let o=r.match(/^\s*/)[0].length;return{text:r.slice(0,o)+"\u6A21\u62DF\uFF1A"+r.slice(o,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:o,to:a}=n;if(await Ts(),!Cu())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:o,to:a,text:[""]}:{from:o,to:a,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var Pu=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],_u=new Map(Pu),ku=new Map(Pu.map(([e,t])=>[t,e])),gr=class extends re{constructor(n,r){super(n,r);this.apikey="";this.codename=gr.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...gr.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:gr.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:o,to:a}=n,i=await ne({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:_u.get(o)||"auto",target_lang:_u.get(a)})});if(i.status){let s=i;return{text:s.result,from:ku.get(s.source_lang),to:ku.get(s.target_lang)}}else throw new Error(i.msg)}},pa=gr;pa.DEFAULT_CODENAME="deepl";var ha=pa;var Ru=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],Mu=new Map(Ru),ip=new Map(Ru.map(([e,t])=>[t,e])),Es=class extends re{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:o,text:a}=n,i={source_lang:Mu.get(r),target_lang:Mu.get(o)},s=new URLSearchParams(i);a.forEach(g=>{s.append("text",g)});let l=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let c=await ne({url:u,method:"POST",body:l,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:f}=c;return{text:f.map(g=>g.text),from:f[0]&&ip.get(f[0].detected_source_language)||r,to:o}}},Du=Es;var lp=[["auto","auto"],["zh-CN","zh"],["zh-TW","cht"],["en","en"],["ja","ja"],["ru","ru"],["es","es"],["de","de"],["ko","ko"],["fr","fr"]],Nu=new Map(lp),As=class extends re{constructor(n,r){super(n,r);this.APIKEY="";this.isSupportList=!1;if(!n||!n.APIKEY)throw new Error("APIKEY are required");this.APIKEY=n.APIKEY}static getAllProps(){return[{name:"APIKEY",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=r,s={url:"https:///api.niutrans.com/NiuTransServer/translation",headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({src_text:i,from:Nu.get(o)||o,to:Nu.get(a)||a,apikey:this.APIKEY})},l=await ne(s);if(l.tgt_text){let u=l.tgt_text;return u.endsWith(`
`)&&(u=u.slice(0,-1)),{text:u,from:o,to:a}}else throw new Error(JSON.stringify(l))}},Iu=As;var cp=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],we={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},Ls=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},Cs=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=Ls(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(Ls).sort().join(`&${r}=`)}`:`${r}=${Ls(n)}`}).filter(t=>t).join("&"),An=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let o=t[r];return typeof o<"u"&&o!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],o=this.credentialString(n);return r.push(`${we.algorithm} Credential=${t.accessKeyId}/${o}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),o={...this.request.params},a=this.request.params,i=this.request.headers;t.sessionToken&&(o[we.tokenHeader]=t.sessionToken),o[we.dateHeader]=r,o[we.notSignBody]="",o[we.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,o[we.algorithmKey]=we.algorithm,o[we.signHeadersKey]="",o[we.signQueriesKey]=void 0,o[we.signatureKey]=void 0,o=this.sortParams(o),this.request.params=o,this.request.headers={};let s=await this.signature(t,r);return this.request.params=a,this.request.headers=i,o[we.signQueriesKey]=Object.keys(o).sort().join(";"),o[we.signatureKey]=s,Cs(o)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[we.dateHeader]=n,t.sessionToken&&(this.request.headers[we.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[we.contentSha256Header]=await ot(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return qr(await kt(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(we.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=Cs(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,o)=>r[0].toLowerCase()<o[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let o=r[0].toLowerCase();if(this.isSignableHeader(o)){let a=r[1];if(typeof a>"u"||a===null||typeof a.toString!="function")throw new Error(`Header ${o} contains invalid value`);n.push(`${o}:${this.canonicalHeaderValues(a.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await ot(t)}async hexEncodedBodyHash(){return this.request.headers[we.contentSha256Header]?this.request.headers[we.contentSha256Header]:this.request.body?await this.hexEncodedHash(Cs(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return cp.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,o){let a=await kt(n,`${we.kDatePrefix}${t.secretKey}`),i=await kt(r,a),s=await kt(o,i);return kt(we.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,we.v4Identifier].join("/")}};var Fu=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Ou=new Map(Fu),up=new Map(Fu.map(([e,t])=>[t,e])),_s=class extends re{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async remoteDetectLanguage(n){let r={TextList:[n]},o={region:"cn-north-1",method:"POST",params:{Action:"LangDetect",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(r)},a=new An(o,"translate");await a.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let i=new URLSearchParams(o.params),s=await ne({url:"https://open.volcengineapi.com"+o.pathname+"?"+i.toString(),headers:a.request.headers,method:o.method,body:o.body});if(s.DetectedLanguageList&&s.DetectedLanguageList.length>0)return s.DetectedLanguageList[0].Language;if(s.ResponseMetadata&&s.ResponseMetadata.Error){let l=s.ResponseMetadata.Error;throw new ke(l.Code,l.Message)}else if(s.ResponseMetaData&&s.ResponseMetaData.Error){let l=s.ResponseMetaData.Error;throw new ke(l.Code,l.Message)}else throw new Error("response: "+JSON.stringify(s))}async translateList(n){let{text:r,from:o,to:a}=n,i=Ou.get(o),s={TargetLanguage:Ou.get(a)||a,TextList:r};i?s.SourceLanguage=i:s.SourceLanguage=await this.remoteDetectLanguage(r.join(`
`).slice(0,1e3));let l={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new An(l,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let c=new URLSearchParams(l.params),f=await ne({url:"https://open.volcengineapi.com"+l.pathname+"?"+c.toString(),headers:u.request.headers,method:l.method,body:l.body});if(f.TranslationList){let m=f.TranslationList.map(d=>d.Translation),g=o;return f.TranslationList.length>0&&f.TranslationList[0].DetectedSourceLanguage&&(g=up.get(f.TranslationList[0].DetectedSourceLanguage)||o),{text:m,from:g,to:a}}else if(f.ResponseMetadata&&f.ResponseMetadata.Error){let m=f.ResponseMetadata.Error;throw new ke(m.Code,m.Message)}else if(f.ResponseMetaData&&f.ResponseMetaData.Error){let m=f.ResponseMetaData.Error;throw new ke(m.Code,m.Message)}else throw new Error("response: "+JSON.stringify(f))}},Hu=_s;var Bu=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],gp=new Map(Bu),fp=new Map(Bu.map(([e,t])=>[t,e])),fr=class extends re{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:o,to:a}=n,s={source_language:gp.get(o)||"detect",target_language:"zh",text:r},l=await ne({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(l.base_resp&&l.base_resp.status_code===0){let u=l.translation,c=o;return l.detected_language&&(c=fp.get(l.detected_language)||o),{text:u,from:c,to:a}}else{let u=l.base_resp;throw new ke(u.status_code.toString(),u.status_message)}}};var dp=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Uu=new Map(dp),dr=class extends re{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:o,to:a}=n,s=await ne({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Uu.get(o)||o,target_lang:Uu.get(a)||a,text:r})});if(s.code===200)return{text:s.data,from:o,to:a};throw new Error(s.message||s.message||"API Error")}};var ks="https://{s}bing.com",qu=ks+"/translator",mp=ks+"/ttranslatev3",pp=ks+"/tspellcheckv3",ba="bingGlobalConfig",Vu=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],$u=new Map(Vu),ju=new Map(Vu.map(([e,t])=>[t,e])),Wu=1e3,ct,Ln;function Ps(e,t){return e.replace("{s}",t?t+".":"")}async function hp(){if(!ct){let n=await Y.storage.local.get(ba);return n&&(ct=n[ba]),!0}let{tokenTs:e,tokenExpiryInterval:t}=ct;return Date.now()-e>t}async function zu(){let e,t,n,r,o,a,i,s,l,u;try{let c=Ps(qu,e),f=await ne({url:c,responseType:"raw"}),{body:m,headers:g,url:d}=f;e=d.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=g["set-cookie"],t=m.match(/IG:"([^"]+)"/)[1],n=m.match(/data-iid="([^"]+)"/)[1],[o,r,a,i,s,l]=JSON.parse(m.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(c){throw console.error("failed to fetch global config",c),c}return ct={subdomain:e,IG:t,IID:n,key:o,token:r,tokenTs:o,tokenExpiryInterval:a,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:l,cookie:u,count:0},await Y.storage.local.set({[ba]:ct}),ct}function bp(e){let{IG:t,IID:n,subdomain:r,isVertical:o}=ct;return Ps(e?pp:mp,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+ct.count++:"")}function yp(e,t,n,r){let{token:o,key:a}=ct,i={fromLang:n,text:t,token:o,key:a};return!e&&r&&(i.to=r),i}async function Ku(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Wu)throw new Error(`The supported maximum length of text is ${Wu}. Please shorten the text.`);Ln||(Ln=zu()),await Ln,await hp()&&(Ln=zu(),await Ln),t=t||"auto",n=n||"zh-CN",t=$u.get(t)||t,n=$u.get(n)||n;let o=bp(!1),a=yp(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:Ps(qu,ct.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(a),l=o,u=s.toString(),c=await ne({url:l,headers:i,method:"POST",body:u});if(c.ShowCaptcha||c.StatusCode===401||c.statusCode){if(ct=null,Ln=null,await Y.storage.local.remove(ba),c.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);if(c.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(c.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)}let f=c[0].translations[0],m=c[0].detectedLanguage;return{text:f.text,from:ju.get(m.language),to:ju.get(f.to)}}var mr=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:o,to:a}=n;return r?await Ku(r,o,a):{...n}}};var Ju=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Gu=new Map(Ju),Tp=new Map(Ju.map(([e,t])=>[t,e])),Ms=class extends re{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:o}=this,{appid:a,key:i}=this,{text:s,from:l,to:u}=n,c=new URLSearchParams({from:Gu.get(l),to:Gu.get(u),q:s,salt:r,appid:a,sign:Tn(a+s+r+i)}),f=new URL(o);f.search=c.toString();let m=await ne({url:f.toString()});if(m.error_code)throw console.error(new Error("[Baidu service]"+m.error_msg)),new ke("API_SERVER_ERROR",m.error_msg);let{trans_result:g,from:d}=m,T=g.map(({dst:p})=>p);return{from:Tp.get(d),to:u,text:T.join(`
`)}}},Yu=Ms;var xp=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Xu=new Map(xp),Rs=class extends re{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n;o==="auto"&&(o=await Ze({text:r.join(" ")}));let i=r;return{text:(await ne({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Xu.get(o)}2${Xu.get(a)}`})})).target,from:o,to:a}}},Qu=Rs;var eg=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Zu=new Map(eg),wp=new Map(eg.map(([e,t])=>[t,e]));function vp(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Ds=class extends re{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),l=this.appId+vp(r)+i+s+this.appSecret,u=await ot(l),c={q:r,appKey:this.appId,salt:i.toString(),from:Zu.get(o),to:Zu.get(a),sign:u,signType:"v3",curtime:s.toString()},f=new URLSearchParams(c),g=await ne({url:"https://openapi.youdao.com/api",method:"POST",body:f.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),d=g.l,[T,b]=d.split("2");return{text:g.translation.join(`
`),from:wp.get(T),to:a}}},tg=Ds;var Cn={mock:{class:En,name:"Mock",homepage:"https://www.google.com"},mock2:{class:En,name:"Mock2",homepage:"https://www.google.com"},google:{class:Xt,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:en,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:Du,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:Hu,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:fr,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:mr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:Yt,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:Yu,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Qu,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:ha,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:tg,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:Qt,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:dr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"},niu:{class:Iu,name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://niutrans.com/documents/contents/beginning_guide/6"}};function Ns(e,t){let n=Cn[e],r=t.config.translationServices[e]||{},o=!0,a=n.class.getAllProps();if(a.length>0){let i=a.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){o=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:o,config:r,props:n.class.getProps(),allProps:a}}var Sp=Object.keys(Cn),ng=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return Sp.filter(o=>{let a=Cn[o];return o.startsWith("mock")?!!r:!a.alpha||n||o===e.translationService}).map(o=>Ns(o,e))};async function cu(e,t){if(!e.text)return e;let n=await bs({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new ke("translateFailed","translate failed")}async function bs(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:o}=t,a=r.translationGeneralConfig,i=r.translationServices,s=o,l=i[s]||{},u=[],c={sentences:Array(e.sentences.length)},f=e.sentences.length,m=-1;if(r.cache)for(let b of e.sentences){m++;let p=s;s==="openl"&&(p=s+"-"+l.codename||ha.DEFAULT_CODENAME);let h=null;try{h=await pr(uu({originalText:b.text,from:b.from,to:b.to,service:p}),1e3)}catch(w){G.warn("query cache DB error, but it's ok",w)}if(h){let w={...b,text:h.translatedText};c.sentences[m]=w,n&&n(null,w,b)}else u.push(b)}else u.push(...e.sentences);let g=u.length;if(f-g>0&&G.debug(`use ${f-g} sentences from cache`),!u.length)return c;let d;try{d=new Cn[s].class(l,a),await d.init()}catch(b){if(n)for(let p of u)n(b,null,p);throw b}let T=await d.multipleTranslate({sentences:u},(b,p,h)=>{if(n&&(n(b,p,h),!b&&p&&!s.startsWith("mock")&&r.cache)){let w=s;s==="openl"&&(w=s+"-"+l.codename||ha.DEFAULT_CODENAME),r.cache&&pr(gu({translatedText:p.text,from:h.from,to:h.to,detectedFrom:p.from,key:Tn(h.text),service:w}),3e3).catch(E=>{G.warn("set cache DB error",E)})}});for(let b of T.sentences){let p=c.sentences.findIndex(h=>!h);if(p===-1)throw new ke("translateFailed","can not match the result");c.sentences[p]=b}return c}var rg={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},ag={...Bt,"zh-CN":{...rg["zh-CN"],...Bt["zh-CN"]},"zh-TW":{...rg["zh-TW"],...Bt["zh-TW"]}},og=ag;var ya=(e,t,n)=>{let r=vc(ag,`languages.${e}`,t,"en");return n?_o[e]||e:r!==`languages.${e}`?r:_o[e]};function Is(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})>=0}var Ep=({date:e})=>{let{t}=bt(),[n,r]=ae(!1);return je(()=>{setTimeout(()=>{r(!0)},5e3)},[]),n?null:R("p",{class:"text-sm",children:[t("Successfully synchronized with the latest official rules:")," ",new Date(e).toLocaleString()]})},Ap=({minVersion:e})=>{let{t}=bt();return R("p",{class:"text-sm",children:t("localVersionIsTooOld",{minVersion:e})})},Lp=()=>{let{t:e}=bt();return R("p",{class:"text-sm",dangerouslySetInnerHTML:{__html:e("badUserscriptBrowser",{1:"https://immersive-translate.owenyoung.com/installation.html"})}})},Cp=({message:e,handleSyncing:t,date:n})=>{let{t:r}=bt();return R("p",{class:"text-sm",children:[r("failToSyncRules")," ",R("a",{onClick:t,children:r("retry")}),R("br",{}),r("failedReason"),"\uFF1A",e,R("br",{}),r("currentRuleVersion"),"\uFF1A",n]})};function Os(e){let{request:t}=e,[n,r]=ae(null),{t:o}=bt(),[a,i]=ae(null),[s,l]=ae(null),[u,c]=ae(""),[f,m]=ae(!1),[g,d]=ae(!1),[T,b]=ae(!1),[p,h]=ae(null),[w,E]=ae(null),D=na(),S=async()=>{c("");let x=a;if(a===null)try{let _=await t({url:wo});_?(i(_),x=_,m(!0)):(c(o("unknownError")),l(null))}catch(_){l(null),c(_.message);return}x!==null?(e.setStorageBuildinConfig(x),l(!1),r(x.buildinConfigUpdatedAt)):(c(o("canNotFetchRemoteRule")),l(null))};return je(()=>{ht().then(x=>{let _=x.buildinConfigUpdatedAt;h(x);let L=new Date(_);if(r(_),D==="0.0.0"){b(!0);return}t({url:wo}).then(O=>{let $=O,A=$.minVersion,H=D;i($);let j=$.latestVersion;if(j&&(Is(H,j)?E(!0):E(!1)),Is(H,A)){let J=$.buildinConfigUpdatedAt;new Date(J)>L?(l(!0),S()):l(!1)}else d(!0),l(null)}).catch(O=>{l(null),c(O.message)})})},[]),je(()=>{ht().then(x=>{h(x)})},[n]),p?R("div",{class:"text-sm mt-2",style:{maxWidth:218},children:T?R(Lp,{}):u?R(Cp,{handleSyncing:S,message:u,date:n||""}):g?R(Ap,{minVersion:a.minVersion}):s===null||s===!0?null:f?R(Ep,{date:n}):null}):null}function Fs(e){let t=na(),{onTranslateTheMainPage:n,onUserConfigChange:r,request:o,onSetBuildinConfig:a,pageStatus:i,config:s,openAboutPage:l,onTranslateTheWholePage:u,openOptionsPage:c,ontranslateToThePageEndImmediately:f,onSetPageLanguage:m,onToggleTranslate:g,onTranslateLocalPdfFile:d,onTranslatePdf:T,onRestorePage:b,ctx:p,currentUrl:h,currentLang:w,onClose:E,onTranslatePage:D,onSetLocalConfig:S}=e,x=r,[_,L]=ae(""),[O,$]=ae(""),{t:A}=bt(),H=null,j=null,J=null,Pe=null,Ke=null,ve=null,fe=null,et=null,le=null,v=null,M=null,F=null;if(s){let{translationService:P,translationServices:B,translationUrlPattern:I}=s;if(Cn[P]&&(et=Ns(P,p)),B&&B[P]?F=B[P]||{}:F={},h&&Zr(h)){le=new URL(h),v=Tc(le.hostname),M=xc(h);let{matches:q,excludeMatches:Q}=I;j=q.includes(v),H=q.includes(le.hostname),Pe=Q.includes(v),J=Q.includes(le.hostname),ve=q.includes(M),fe=Q.includes(M)}}if(s&&w&&w!=="auto"){let{translationLanguagePattern:P}=s,{matches:B}=P;B.includes(w)?Ke=!0:Ke=!1}let se=P=>{P.preventDefault(),c()},K=P=>{x(B=>(B.alpha?L("Success disable alpha!"):L("Success enable alpha!"),{...B,alpha:!B.alpha}))},Se=()=>{x(P=>({...P,translationArea:"body"})),u()},De=()=>{x(P=>({...P,translationArea:"main"})),n()},he=(P,B,I,q)=>{if(P==="default"){x(be=>{let Le={...be.translationUrlPattern};return{...be,translationUrlPattern:{...be.translationUrlPattern,matches:Ct([le?.hostname,v,h],Le.matches),excludeMatches:Ct([le?.hostname,v,h],Le.excludeMatches)}}});return}let Q=P,pe=Q==="matches"?"excludeMatches":"matches";le&&x(be=>{let Le={...be.translationUrlPattern};return Le[Q]=Do(B,Le[Q]),q.length>0&&(Le[Q]=Ct(q,Le[Q])),Le[pe]=Ct(I,Le[pe]),{...be,translationUrlPattern:{...be.translationUrlPattern,...Le}}}),Q==="matches"&&i==="Original"?setTimeout(()=>{D(),E()},100):Q==="excludeMatches"&&i==="Translated"&&setTimeout(()=>{b(),E()},100)},ye=P=>{if(!P){x(q=>{let Q={...q.translationLanguagePattern};return{...q,translationLanguagePattern:{...q.translationLanguagePattern,matches:Ct(w,Q.matches),excludeMatches:Ct(w,Q.excludeMatches)}}});return}let B=P,I=B==="matches"?"excludeMatches":"matches";w&&x(q=>{let Q={...q.translationLanguagePattern};return Q[B]=Do(w,Q[B]),Q[I]=Ct(w,Q[I]),{...q,translationLanguagePattern:{...q.translationLanguagePattern,...Q}}}),B==="matches"&&i==="Original"&&setTimeout(()=>{D(),E()},100)},ce=le?.pathname.toLowerCase().endsWith(".pdf"),X=A("translate");i==="Translated"?X=A("show-original"):i==="Original"?ce?Ir()&&le.protocol==="file:"?X=A("translate-firefox-local-pdf"):X=A("translate-pdf"):X=A("translate"):X=A(i);let ue=A("translateToThePageEndImmediately");(i==="Original"||i==="Translated")&&(s.shortcuts.toggleTranslatePage&&(Al()&&p.rule.fingerCountToToggleTranslagePageWhenTouching>=2?X+=` (${A(`fingers.${p.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:X+=` (${s.shortcuts.toggleTranslatePage})`),s.shortcuts.toggleTranslateToThePageEndImmediately&&(ue+=` (${s.shortcuts.toggleTranslateToThePageEndImmediately})`));let U=[];p&&(U=ng(p));let ee=P=>{P.preventDefault(),E()};return R("div",{class:"p-3",children:[R("div",{class:"text-sm",children:[R("div",{class:"flex justify-between mb-2",children:[R("label",{class:"inline-block",children:[A("popupSourceLanguage"),"\uFF1A"]}),R(Rt,{items:Lt.map(P=>({label:ya(P,s.interfaceLanguage),value:P,selected:P===w,onSelected:B=>{m(B.value)}}))})]}),s&&s.targetLanguage&&R("div",{class:"flex justify-between mb-2",children:[R("label",{class:"inline-block",children:[A("popupTarget"),"\uFF1A"]}),R(Rt,{items:Lt.filter(P=>P!=="auto").map(P=>({label:ya(P,s.interfaceLanguage),value:P,selected:P===s.targetLanguage,onSelected:B=>{x(I=>({...I,targetLanguage:B.value}))}}))})]}),et&&U.length>0&&R(gt,{children:[R("div",{class:"flex justify-between mb-2",children:[R("label",{class:"inline-block",children:[A("popupService"),"\uFF1A"]}),R(Rt,{items:U.map(P=>({label:`${A("translationServices."+P.id)}${P.ok?"":" "+A("needAction")}`,value:P.id,selected:P.selected,onSelected:B=>{let I=U.find(q=>q.id===B.value);I.ok?(x(q=>({...q,translationService:I.id})),I.props.length===0?setTimeout(()=>{D()},1):setTimeout(()=>{b()},1)):(x(q=>({...q,translationService:I.id})),setTimeout(()=>{c()},100))}}))})]}),F&&et.props.length>0&&et.props.map((P,B)=>R("div",{class:"pl-4 text-sm",children:R(Qo,{field:P,value:F[P.name],onChange:I=>{x(q=>{let Q=q.translationServices||{},pe=Q[et.id]||{};return setTimeout(()=>{b()},1),{...q,translationServices:{...Q,[et.id]:{...pe,[P.name]:I}}}})}},"field-"+B)}))]}),le&&R("div",{class:"flex justify-between mb-2",children:[R("label",{class:"inline-block",children:A("forThisSite")}),R(Rt,{items:[{label:A("default"),value:"default",selected:H===!1&&J===!1&&!j&&!Pe&&!ve&&!fe,onSelected:()=>{he("default",le.hostname,[],[]);let P=le.hostname,B=p.localConfig.tempTranslationUrlMatches||[],I=B.filter(Q=>Q.match!==P),q=!1;I.length!==B.length&&(q=!0),q&&S({...p.localConfig,tempTranslationUrlMatches:[...I]})}},M&&{label:A("alwaysTranslateSomeSite",{hostname:A("currentUrl")}),value:"matchesUrl",selected:ve,onSelected:()=>{he("matches",M,[M],[])}},{label:A("alwaysTranslateSomeSite",{hostname:le.hostname}),value:"matches",selected:H,onSelected:P=>{he(P.value,le.hostname,[le.hostname,v,M],[v])}},v&&{label:A("alwaysTranslateSomeSite",{hostname:v}),value:"matchesWild",selected:j,onSelected:()=>{he("matches",v,[M,le.hostname,v],[le.hostname])}},M&&{label:A("neverTranslateSomeSite",{hostname:A("currentUrl")}),value:"excludeMatchesUrl",selected:fe,onSelected:()=>{he("excludeMatches",M,[M],[])}},{label:A("neverTranslateSomeSite",{hostname:le.hostname}),value:"excludeMatches",selected:J,onSelected:P=>{he(P.value,le.hostname,[le.hostname,v,M],[v])}},v&&{label:A("neverTranslateSomeSite",{hostname:v}),value:"excludeMatchesWild",selected:Pe,onSelected:()=>{he("excludeMatches",v,[le.hostname,M,v],[le.hostname])}}].filter(Boolean)})]})]}),R("div",{class:"",children:R("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{ce?T&&T():g()},"aria-busy":i==="Translating",disabled:i==="Translating",children:X})}),R("div",{class:"flex justify-between",children:[w&&w!=="auto"?R("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[R("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!Ke,onChange:P=>{let B=P.target.checked;ye(B?"matches":void 0)}}),A("alwaysTranslateSomeLanguage",{language:ya(w,s.interfaceLanguage)})]}):R("span",{}),R(Ko,{label:A("more"),showArrow:!0,onSelected:P=>{P.value==="translateTheWholePage"?u():P.value==="translateToThePageEndImmediately"?f():P.value==="translateTheMainPage"?n():P.value==="showTranslationOnly"||(P.value==="translateLocalPdfFile"?d&&d():P.value==="donate"?(globalThis.open(s.donateUrl),E()):P.value==="feedback"?(globalThis.open(s.feedbackUrl),E()):P.value==="options"?(c(),E()):P.value==="changeToTranslateTheWholePage"?Se():P.value==="changeToTranslateTheMainPage"?De():P.value==="about"&&l())},menus:[s.translationArea==="main"&&{label:"\u{1F480} "+A("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},s.translationArea==="body"&&{label:"\u{1F4D6} "+A("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:"\u26A1 "+ue,value:"translateToThePageEndImmediately"},!We()&&{label:"\u{1F4C1} "+A("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2764\uFE0F "+A("aboutLabel"),value:"about"}].filter(Boolean)})]}),R("div",{class:"text-sm",children:_}),R("div",{class:"text-sm",children:O}),R("footer",{children:[R(Os,{request:o,setStorageBuildinConfig:a}),R("div",{class:"mt-3 text-sm flex justify-between",children:[R("a",{href:"#",class:"secondary",onClick:se,children:A("options")}),We()&&R("a",{href:"#",class:"secondary",onClick:ee,children:A("close")}),R("span",{class:"immersive-translate-no-select muted",onClick:yc(7)(K),children:["V",t]})]})]})]})}var tn={},sg={};function Ta(e,t){if(sg[e])try{t()}catch(n){G.error("run callback failed",n)}else tn[e]||(tn[e]=[]),tn[e].push(t)}function _p(e){if(tn[e]&&tn[e].length){let t=[...tn[e]];tn[e]=[],t.forEach(n=>n())}}function Hs(){let[e,t]=ae("Original"),[n,r,o,a]=pc(),[i,s]=ae(null),[l,u]=ae(null),[c,f]=ae(null),[m,g]=ae("auto"),[d,T]=ae(null),b=_=>{let{tabId:L,payload:O}=_.detail,{method:$,data:A}=O;G.debug("popup received message",$,A||" "),$==="setPageStatus"&&L&&t(A)};je(()=>{let _=ar();return Y.tabs.query({currentWindow:!0,active:!0}).then(L=>{let O=L[0].id;f(O);let $=L[0].url;Y.tabs.onUpdated.addListener((A,H,j)=>{A===A&&j.url&&l&&j.url!==l&&(u(j.url),window.location.reload())}),globalThis.document.addEventListener(zn,b),$&&u($),$&&Zr($)&&(u($),_.sendMessage(`content_script:main_sync:${O}`,{method:"ping"}).then(A=>{sg[O]=!0,_p(O)}).catch(A=>{G.debug("ping failed, but it is ok. cause maybe content is not injected",A)}),Ta(O,async()=>{let A=await _.sendMessage(`content_script:main_sync:${O}`,{method:"getPageStatus"});t(A)}),Ta(O,async()=>{let A=await ht();s(A)}),Ta(O,async()=>{let A=await _.sendMessage(`content_script:main_sync:${O}`,{method:"getCurrentPageLanguage"});g(A)}))}),()=>{globalThis.document.removeEventListener(zn,b)}},[]),je(()=>{ht().then(_=>{s(_)})},[n]),je(()=>{l&&i&&nr({url:l,config:i}).then(_=>{T(_)})},[l,i]);let p=(_,L=!0)=>async()=>{let O=ar(),A=(await Y.tabs.query({currentWindow:!0,active:!0}))[0].id;O.sendMessage(`content_script:main:${A}`,{method:_}),L&&setTimeout(()=>{globalThis.close()},10)},h=()=>{let _=Y.runtime.getURL(Or);Y.tabs.create({url:_}),globalThis.close()},w=()=>{l&&c&&(Y.tabs.update(c,{url:Wl(l)}),globalThis.close())},E=_=>{let L=ar();if(g(_),c&&l){let O=Sl(l,_,i.sourceLanguageUrlPattern);r($=>({...$,sourceLanguageUrlPattern:O})),Ta(c,()=>{L.sendMessage(`content_script:main:${c}`,{method:"setCurrentPageLanguageByClient",data:_})})}},D=()=>{globalThis.close()},S=()=>{Y.runtime.openOptionsPage(),setTimeout(()=>{globalThis.close()},50)},x=()=>{Y.tabs.create({url:Y.runtime.getURL("options.html#about")}),setTimeout(()=>{globalThis.close()},50)};return!i||!d?null:R(Fs,{onClose:D,onToggleTranslate:p("toggleTranslatePage"),openOptionsPage:S,openAboutPage:x,onTranslatePdf:w,onTranslateLocalPdfFile:h,onTranslateTheMainPage:p("translateTheMainPage"),onTranslateTheWholePage:p("translateTheWholePage"),ontranslateToThePageEndImmediately:p("translateToThePageEndImmediately"),onTranslatePage:p("translatePage"),onRestorePage:p("restorePage",!1),onSetPageLanguage:E,onUserConfigChange:r,config:i,pageStatus:e,ctx:d,currentUrl:l,currentLang:m,onSetLocalConfig:pn,onSetBuildinConfig:jo,request:aa})}var ig=document.getElementById("mount");bc();ig&&(async()=>{let e=await ht();e.debug&&G.setLevel("debug"),Ca(R(Sc,{lang:e.interfaceLanguage,translations:og,fallbackLang:"zh-CN",children:R(Hs,{})}),ig)})();
