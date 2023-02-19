var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// <define:process.env>
var define_process_env_default = { BUILD_TIME: "2023-02-19T04:48:00.702Z", VERSION: "0.2.62", PROD: "1", REDIRECT_URL: "https://immersive-translate.owenyoung.com/auth-done/", IMMERSIVE_TRANSLATE_INJECTED_CSS: `:root {
  --immersive-translate-theme-underline-borderColor: #72ece9;
  --immersive-translate-theme-nativeUnderline-borderColor: #72ece9;
  --immersive-translate-theme-nativeDashed-borderColor: #72ece9;
  --immersive-translate-theme-nativeDotted-borderColor: #72ece9;
  --immersive-translate-theme-highlight-backgroundColor: #ffff00;
  --immersive-translate-theme-dashed-borderColor: #59c1bd;
  --immersive-translate-theme-blockquote-borderColor: #cc3355;
  --immersive-translate-theme-thinDashed-borderColor: #ff374f;
  --immersive-translate-theme-dashedBorder-borderColor: #94a3b8;
  --immersive-translate-theme-dotted-borderColor: #94a3b8;
  --immersive-translate-theme-wavy-borderColor: #72ece9;
  --immersive-translate-theme-dividingLine-borderColor: #94a3b8;
}

.immersive-translate-target-translation-pre-whitespace {
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
  border-bottom: 1px solid
    var(--immersive-translate-theme-underline-borderColor) !important;
}

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline
    var(--immersive-translate-theme-nativeUnderline-borderColor) !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline
    var(--immersive-translate-theme-nativeDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed
    var(--immersive-translate-theme-thinDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    var(--immersive-translate-theme-dotted-borderColor) 30%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}
.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline
    var(--immersive-translate-theme-nativeDotted-borderColor) !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline
    var(--immersive-translate-theme-wavy-borderColor) !important;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(
      to right,
      var(--immersive-translate-theme-dashed-borderColor) 0%,
      var(--immersive-translate-theme-dashed-borderColor) 50%,
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
  border-top: 1px dashed
    var(--immersive-translate-theme-dividingLine-borderColor);
  padding-top: 8px;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: var(--immersive-translate-theme-highlight-backgroundColor);
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
  border-left: 4px solid var(--immersive-translate-theme-blockquote-borderColor) !important;
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

[data-immersive-translate-root-translation-theme="none"]
  .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner:hover {
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
`, IMMERSIVE_TRANSLATE_PICO_CSS: `@charset "UTF-8";
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
`, IMMERSIVE_TRANSLATE_COMMON_CSS: `#mount#mount {
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
`, IMMERSIVE_TRANSLATE_POPUP_CSS: `html {
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
`, IMMERSIVE_TRANSLATE_POPUP_HTML: `<style>
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
    border-radius: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform ease-out 250ms;
    transition: -webkit-transform ease-out 250ms;
    transition: transform ease-out 250ms;
    transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
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
`, MOCK: "0", DEBUG: "0" };

// https://esm.sh/v106/webextension-polyfill@0.10.0/deno/webextension-polyfill.development.js
var __create = Object.create, __defProp2 = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
}, __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), require_browser_polyfill = __commonJS({
  "esm-build-3120606719048d5175703f3b3f8812d3453a0d07-9fbf1061/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports2, module2) {
    (function(global2, factory) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], factory);
      else if (typeof exports2 < "u")
        factory(module2);
      else {
        var mod = {
          exports: {}
        };
        factory(mod), global2.browser = mod.exports;
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : exports2, function(module22) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id)
        throw new Error("This script should only be loaded in a browser extension.");
      if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        let CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.", wrapAPIs = (extensionAPIs) => {
          let apiMetadata = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(apiMetadata).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class DefaultWeakMap extends WeakMap {
            constructor(createItem, items = void 0) {
              super(items), this.createItem = createItem;
            }
            get(key) {
              return this.has(key) || this.set(key, this.createItem(key)), super.get(key);
            }
          }
          let isThenable = (value) => value && typeof value == "object" && typeof value.then == "function", makeCallback = (promise, metadata) => (...callbackArgs) => {
            extensionAPIs.runtime.lastError ? promise.reject(new Error(extensionAPIs.runtime.lastError.message)) : metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== !1 ? promise.resolve(callbackArgs[0]) : promise.resolve(callbackArgs);
          }, pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments", wrapAsyncFunction = (name, metadata) => function(target, ...args) {
            if (args.length < metadata.minArgs)
              throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
            if (args.length > metadata.maxArgs)
              throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
            return new Promise((resolve, reject) => {
              if (metadata.fallbackToNoCallback)
                try {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                } catch (cbError) {
                  console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError), target[name](...args), metadata.fallbackToNoCallback = !1, metadata.noCallback = !0, resolve();
                }
              else
                metadata.noCallback ? (target[name](...args), resolve()) : target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
            });
          }, wrapMethod = (target, method, wrapper) => new Proxy(method, {
            apply(targetMethod, thisObj, args) {
              return wrapper.call(thisObj, target, ...args);
            }
          }), hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty), wrapObject = (target, wrappers = {}, metadata = {}) => {
            let cache2 = /* @__PURE__ */ Object.create(null), handlers = {
              has(proxyTarget2, prop) {
                return prop in target || prop in cache2;
              },
              get(proxyTarget2, prop, receiver) {
                if (prop in cache2)
                  return cache2[prop];
                if (!(prop in target))
                  return;
                let value = target[prop];
                if (typeof value == "function")
                  if (typeof wrappers[prop] == "function")
                    value = wrapMethod(target, target[prop], wrappers[prop]);
                  else if (hasOwnProperty(metadata, prop)) {
                    let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                    value = wrapMethod(target, target[prop], wrapper);
                  } else
                    value = value.bind(target);
                else if (typeof value == "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop)))
                  value = wrapObject(value, wrappers[prop], metadata[prop]);
                else if (hasOwnProperty(metadata, "*"))
                  value = wrapObject(value, wrappers[prop], metadata["*"]);
                else
                  return Object.defineProperty(cache2, prop, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return target[prop];
                    },
                    set(value2) {
                      target[prop] = value2;
                    }
                  }), value;
                return cache2[prop] = value, value;
              },
              set(proxyTarget2, prop, value, receiver) {
                return prop in cache2 ? cache2[prop] = value : target[prop] = value, !0;
              },
              defineProperty(proxyTarget2, prop, desc) {
                return Reflect.defineProperty(cache2, prop, desc);
              },
              deleteProperty(proxyTarget2, prop) {
                return Reflect.deleteProperty(cache2, prop);
              }
            }, proxyTarget = Object.create(target);
            return new Proxy(proxyTarget, handlers);
          }, wrapEvent = (wrapperMap) => ({
            addListener(target, listener, ...args) {
              target.addListener(wrapperMap.get(listener), ...args);
            },
            hasListener(target, listener) {
              return target.hasListener(wrapperMap.get(listener));
            },
            removeListener(target, listener) {
              target.removeListener(wrapperMap.get(listener));
            }
          }), onRequestFinishedWrappers = new DefaultWeakMap((listener) => typeof listener != "function" ? listener : function(req) {
            let wrappedReq = wrapObject(
              req,
              {},
              {
                getContent: {
                  minArgs: 0,
                  maxArgs: 0
                }
              }
            );
            listener(wrappedReq);
          }), onMessageWrappers = new DefaultWeakMap((listener) => typeof listener != "function" ? listener : function(message, sender, sendResponse) {
            let didCallSendResponse = !1, wrappedSendResponse, sendResponsePromise = new Promise((resolve) => {
              wrappedSendResponse = function(response) {
                didCallSendResponse = !0, resolve(response);
              };
            }), result;
            try {
              result = listener(message, sender, wrappedSendResponse);
            } catch (err) {
              result = Promise.reject(err);
            }
            let isResultThenable = result !== !0 && isThenable(result);
            if (result !== !0 && !isResultThenable && !didCallSendResponse)
              return !1;
            let sendPromisedResult = (promise) => {
              promise.then((msg) => {
                sendResponse(msg);
              }, (error) => {
                let message2;
                error && (error instanceof Error || typeof error.message == "string") ? message2 = error.message : message2 = "An unexpected error occurred", sendResponse({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: message2
                });
              }).catch((err) => {
                console.error("Failed to send onMessage rejected reply", err);
              });
            };
            return sendPromisedResult(isResultThenable ? result : sendResponsePromise), !0;
          }), wrappedSendMessageCallback = ({
            reject,
            resolve
          }, reply) => {
            extensionAPIs.runtime.lastError ? extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE ? resolve() : reject(new Error(extensionAPIs.runtime.lastError.message)) : reply && reply.__mozWebExtensionPolyfillReject__ ? reject(new Error(reply.message)) : resolve(reply);
          }, wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
            if (args.length < metadata.minArgs)
              throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
            if (args.length > metadata.maxArgs)
              throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
            return new Promise((resolve, reject) => {
              let wrappedCb = wrappedSendMessageCallback.bind(null, {
                resolve,
                reject
              });
              args.push(wrappedCb), apiNamespaceObj.sendMessage(...args);
            });
          }, staticWrappers = {
            devtools: {
              network: {
                onRequestFinished: wrapEvent(onRequestFinishedWrappers)
              }
            },
            runtime: {
              onMessage: wrapEvent(onMessageWrappers),
              onMessageExternal: wrapEvent(onMessageWrappers),
              sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, settingMetadata = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return apiMetadata.privacy = {
            network: {
              "*": settingMetadata
            },
            services: {
              "*": settingMetadata
            },
            websites: {
              "*": settingMetadata
            }
          }, wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        module22.exports = wrapAPIs(chrome);
      } else
        module22.exports = globalThis.browser;
    });
  }
}), __module = __toESM(require_browser_polyfill()), { default: __default, ...__rest } = __module, mod_default = __default !== void 0 ? __default : __rest;

// browser/import_browser_polyfill.ts
globalThis.immersiveTranslateBrowserAPI = mod_default;

// https://deno.land/std@0.171.0/async/deferred.ts
function deferred() {
  let methods, state = "pending", promise = new Promise((resolve, reject) => {
    methods = {
      async resolve(value) {
        await value, state = "fulfilled", resolve(value);
      },
      // deno-lint-ignore no-explicit-any
      reject(reason) {
        state = "rejected", reject(reason);
      }
    };
  });
  return Object.defineProperty(promise, "state", { get: () => state }), Object.assign(promise, methods);
}

// https://deno.land/std@0.171.0/async/mux_async_iterator.ts
var MuxAsyncIterator = class {
  #iteratorCount = 0;
  #yields = [];
  // deno-lint-ignore no-explicit-any
  #throws = [];
  #signal = deferred();
  add(iterable) {
    ++this.#iteratorCount, this.#callIteratorNext(iterable[Symbol.asyncIterator]());
  }
  async #callIteratorNext(iterator) {
    try {
      let { value, done } = await iterator.next();
      done ? --this.#iteratorCount : this.#yields.push({ iterator, value });
    } catch (e3) {
      this.#throws.push(e3);
    }
    this.#signal.resolve();
  }
  async *iterate() {
    for (; this.#iteratorCount > 0; ) {
      await this.#signal;
      for (let i2 = 0; i2 < this.#yields.length; i2++) {
        let { iterator, value } = this.#yields[i2];
        yield value, this.#callIteratorNext(iterator);
      }
      if (this.#throws.length) {
        for (let e3 of this.#throws)
          throw e3;
        this.#throws.length = 0;
      }
      this.#yields.length = 0, this.#signal = deferred();
    }
  }
  [Symbol.asyncIterator]() {
    return this.iterate();
  }
};

// https://deno.land/std@0.167.0/fmt/colors.ts
var colors_exports = {};
__export(colors_exports, {
  bgBlack: () => bgBlack,
  bgBlue: () => bgBlue,
  bgBrightBlack: () => bgBrightBlack,
  bgBrightBlue: () => bgBrightBlue,
  bgBrightCyan: () => bgBrightCyan,
  bgBrightGreen: () => bgBrightGreen,
  bgBrightMagenta: () => bgBrightMagenta,
  bgBrightRed: () => bgBrightRed,
  bgBrightWhite: () => bgBrightWhite,
  bgBrightYellow: () => bgBrightYellow,
  bgCyan: () => bgCyan,
  bgGreen: () => bgGreen,
  bgMagenta: () => bgMagenta,
  bgRed: () => bgRed,
  bgRgb24: () => bgRgb24,
  bgRgb8: () => bgRgb8,
  bgWhite: () => bgWhite,
  bgYellow: () => bgYellow,
  black: () => black,
  blue: () => blue,
  bold: () => bold,
  brightBlack: () => brightBlack,
  brightBlue: () => brightBlue,
  brightCyan: () => brightCyan,
  brightGreen: () => brightGreen,
  brightMagenta: () => brightMagenta,
  brightRed: () => brightRed,
  brightWhite: () => brightWhite,
  brightYellow: () => brightYellow,
  cyan: () => cyan,
  dim: () => dim,
  getColorEnabled: () => getColorEnabled,
  gray: () => gray,
  green: () => green,
  hidden: () => hidden,
  inverse: () => inverse,
  italic: () => italic,
  magenta: () => magenta,
  red: () => red,
  reset: () => reset,
  rgb24: () => rgb24,
  rgb8: () => rgb8,
  setColorEnabled: () => setColorEnabled,
  strikethrough: () => strikethrough,
  stripColor: () => stripColor,
  underline: () => underline,
  white: () => white,
  yellow: () => yellow
});
var { Deno: Deno2 } = globalThis, noColor = typeof Deno2?.noColor == "boolean" ? Deno2.noColor : !0, enabled = !noColor;
function setColorEnabled(value) {
  noColor || (enabled = value);
}
function getColorEnabled() {
  return enabled;
}
function code(open, close) {
  return {
    open: `\x1B[${open.join(";")}m`,
    close: `\x1B[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, "g")
  };
}
function run(str, code2) {
  return enabled ? `${code2.open}${str.replace(code2.regexp, code2.open)}${code2.close}` : str;
}
function reset(str) {
  return run(str, code([0], 0));
}
function bold(str) {
  return run(str, code([1], 22));
}
function dim(str) {
  return run(str, code([2], 22));
}
function italic(str) {
  return run(str, code([3], 23));
}
function underline(str) {
  return run(str, code([4], 24));
}
function inverse(str) {
  return run(str, code([7], 27));
}
function hidden(str) {
  return run(str, code([8], 28));
}
function strikethrough(str) {
  return run(str, code([9], 29));
}
function black(str) {
  return run(str, code([30], 39));
}
function red(str) {
  return run(str, code([31], 39));
}
function green(str) {
  return run(str, code([32], 39));
}
function yellow(str) {
  return run(str, code([33], 39));
}
function blue(str) {
  return run(str, code([34], 39));
}
function magenta(str) {
  return run(str, code([35], 39));
}
function cyan(str) {
  return run(str, code([36], 39));
}
function white(str) {
  return run(str, code([37], 39));
}
function gray(str) {
  return brightBlack(str);
}
function brightBlack(str) {
  return run(str, code([90], 39));
}
function brightRed(str) {
  return run(str, code([91], 39));
}
function brightGreen(str) {
  return run(str, code([92], 39));
}
function brightYellow(str) {
  return run(str, code([93], 39));
}
function brightBlue(str) {
  return run(str, code([94], 39));
}
function brightMagenta(str) {
  return run(str, code([95], 39));
}
function brightCyan(str) {
  return run(str, code([96], 39));
}
function brightWhite(str) {
  return run(str, code([97], 39));
}
function bgBlack(str) {
  return run(str, code([40], 49));
}
function bgRed(str) {
  return run(str, code([41], 49));
}
function bgGreen(str) {
  return run(str, code([42], 49));
}
function bgYellow(str) {
  return run(str, code([43], 49));
}
function bgBlue(str) {
  return run(str, code([44], 49));
}
function bgMagenta(str) {
  return run(str, code([45], 49));
}
function bgCyan(str) {
  return run(str, code([46], 49));
}
function bgWhite(str) {
  return run(str, code([47], 49));
}
function bgBrightBlack(str) {
  return run(str, code([100], 49));
}
function bgBrightRed(str) {
  return run(str, code([101], 49));
}
function bgBrightGreen(str) {
  return run(str, code([102], 49));
}
function bgBrightYellow(str) {
  return run(str, code([103], 49));
}
function bgBrightBlue(str) {
  return run(str, code([104], 49));
}
function bgBrightMagenta(str) {
  return run(str, code([105], 49));
}
function bgBrightCyan(str) {
  return run(str, code([106], 49));
}
function bgBrightWhite(str) {
  return run(str, code([107], 49));
}
function clampAndTruncate(n3, max = 255, min = 0) {
  return Math.trunc(Math.max(Math.min(n3, max), min));
}
function rgb8(str, color) {
  return run(str, code([38, 5, clampAndTruncate(color)], 39));
}
function bgRgb8(str, color) {
  return run(str, code([48, 5, clampAndTruncate(color)], 49));
}
function rgb24(str, color) {
  return typeof color == "number" ? run(
    str,
    code(
      [38, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
      39
    )
  ) : run(
    str,
    code(
      [
        38,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b)
      ],
      39
    )
  );
}
function bgRgb24(str, color) {
  return typeof color == "number" ? run(
    str,
    code(
      [48, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
      49
    )
  ) : run(
    str,
    code(
      [
        48,
        2,
        clampAndTruncate(color.r),
        clampAndTruncate(color.g),
        clampAndTruncate(color.b)
      ],
      49
    )
  );
}
var ANSI_PATTERN = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|"),
  "g"
);
function stripColor(string) {
  return string.replace(ANSI_PATTERN, "");
}

// https://deno.land/std@0.170.0/async/retry.ts
var RetryError = class extends Error {
  constructor(cause, count) {
    super(`Exceeded max retry count (${count})`), this.name = "RetryError", this.cause = cause;
  }
}, defaultRetryOptions = {
  multiplier: 2,
  maxTimeout: 6e4,
  maxAttempts: 5,
  minTimeout: 1e3
};
async function retry(fn, opts) {
  let options = {
    ...defaultRetryOptions,
    ...opts
  };
  if (options.maxTimeout >= 0 && options.minTimeout > options.maxTimeout)
    throw new RangeError("minTimeout is greater than maxTimeout");
  let timeout = options.minTimeout, error;
  for (let i2 = 0; i2 < options.maxAttempts; i2++)
    try {
      return await fn();
    } catch (err) {
      await new Promise((r) => setTimeout(r, timeout)), timeout *= options.multiplier, timeout = Math.max(timeout, options.minTimeout), options.maxTimeout >= 0 && (timeout = Math.min(timeout, options.maxTimeout)), error = err;
    }
  throw new RetryError(error, options.maxAttempts);
}

// https://esm.sh/stable/preact@10.11.0/deno/preact.js
var P, d, $, Y, S, F, B, T = {}, V = [], Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(e3, t3) {
  for (var _3 in t3)
    e3[_3] = t3[_3];
  return e3;
}
function j(e3) {
  var t3 = e3.parentNode;
  t3 && t3.removeChild(e3);
}
function ee(e3, t3, _3) {
  var r, l2, o3, s4 = {};
  for (o3 in t3)
    o3 == "key" ? r = t3[o3] : o3 == "ref" ? l2 = t3[o3] : s4[o3] = t3[o3];
  if (arguments.length > 2 && (s4.children = arguments.length > 3 ? P.call(arguments, 2) : _3), typeof e3 == "function" && e3.defaultProps != null)
    for (o3 in e3.defaultProps)
      s4[o3] === void 0 && (s4[o3] = e3.defaultProps[o3]);
  return w(e3, s4, r, l2, null);
}
function w(e3, t3, _3, r, l2) {
  var o3 = { type: e3, props: t3, key: _3, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l2 ?? ++$ };
  return l2 == null && d.vnode != null && d.vnode(o3), o3;
}
function L(e3) {
  return e3.children;
}
function U(e3, t3) {
  this.props = e3, this.context = t3;
}
function C(e3, t3) {
  if (t3 == null)
    return e3.__ ? C(e3.__, e3.__.__k.indexOf(e3) + 1) : null;
  for (var _3; t3 < e3.__k.length; t3++)
    if ((_3 = e3.__k[t3]) != null && _3.__e != null)
      return _3.__e;
  return typeof e3.type == "function" ? C(e3) : null;
}
function z(e3) {
  var t3, _3;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, t3 = 0; t3 < e3.__k.length; t3++)
      if ((_3 = e3.__k[t3]) != null && _3.__e != null) {
        e3.__e = e3.__c.base = _3.__e;
        break;
      }
    return z(e3);
  }
}
function M(e3) {
  (!e3.__d && (e3.__d = !0) && S.push(e3) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
}
function D() {
  for (var e3; D.__r = S.length; )
    e3 = S.sort(function(t3, _3) {
      return t3.__v.__b - _3.__v.__b;
    }), S = [], e3.some(function(t3) {
      var _3, r, l2, o3, s4, f5;
      t3.__d && (s4 = (o3 = (_3 = t3).__v).__e, (f5 = _3.__P) && (r = [], (l2 = k({}, o3)).__v = o3.__v + 1, W(f5, o3, l2, _3.__n, f5.ownerSVGElement !== void 0, o3.__h != null ? [s4] : null, r, s4 ?? C(o3), o3.__h), K(r, o3), o3.__e != s4 && z(o3)));
    });
}
function G(e3, t3, _3, r, l2, o3, s4, f5, p6, a3) {
  var n3, h3, c3, i2, u3, b4, v2, y3 = r && r.__k || V, g5 = y3.length;
  for (_3.__k = [], n3 = 0; n3 < t3.length; n3++)
    if ((i2 = _3.__k[n3] = (i2 = t3[n3]) == null || typeof i2 == "boolean" ? null : typeof i2 == "string" || typeof i2 == "number" || typeof i2 == "bigint" ? w(null, i2, null, null, i2) : Array.isArray(i2) ? w(L, { children: i2 }, null, null, null) : i2.__b > 0 ? w(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) != null) {
      if (i2.__ = _3, i2.__b = _3.__b + 1, (c3 = y3[n3]) === null || c3 && i2.key == c3.key && i2.type === c3.type)
        y3[n3] = void 0;
      else
        for (h3 = 0; h3 < g5; h3++) {
          if ((c3 = y3[h3]) && i2.key == c3.key && i2.type === c3.type) {
            y3[h3] = void 0;
            break;
          }
          c3 = null;
        }
      W(e3, i2, c3 = c3 || T, l2, o3, s4, f5, p6, a3), u3 = i2.__e, (h3 = i2.ref) && c3.ref != h3 && (v2 || (v2 = []), c3.ref && v2.push(c3.ref, null, i2), v2.push(h3, i2.__c || u3, i2)), u3 != null ? (b4 == null && (b4 = u3), typeof i2.type == "function" && i2.__k === c3.__k ? i2.__d = p6 = q(i2, p6, e3) : p6 = J(e3, i2, c3, y3, u3, p6), typeof _3.type == "function" && (_3.__d = p6)) : p6 && c3.__e == p6 && p6.parentNode != e3 && (p6 = C(c3));
    }
  for (_3.__e = b4, n3 = g5; n3--; )
    y3[n3] != null && (typeof _3.type == "function" && y3[n3].__e != null && y3[n3].__e == _3.__d && (_3.__d = C(r, n3 + 1)), X(y3[n3], y3[n3]));
  if (v2)
    for (n3 = 0; n3 < v2.length; n3++)
      Q(v2[n3], v2[++n3], v2[++n3]);
}
function q(e3, t3, _3) {
  for (var r, l2 = e3.__k, o3 = 0; l2 && o3 < l2.length; o3++)
    (r = l2[o3]) && (r.__ = e3, t3 = typeof r.type == "function" ? q(r, t3, _3) : J(_3, r, r, l2, r.__e, t3));
  return t3;
}
function J(e3, t3, _3, r, l2, o3) {
  var s4, f5, p6;
  if (t3.__d !== void 0)
    s4 = t3.__d, t3.__d = void 0;
  else if (_3 == null || l2 != o3 || l2.parentNode == null)
    e:
      if (o3 == null || o3.parentNode !== e3)
        e3.appendChild(l2), s4 = null;
      else {
        for (f5 = o3, p6 = 0; (f5 = f5.nextSibling) && p6 < r.length; p6 += 2)
          if (f5 == l2)
            break e;
        e3.insertBefore(l2, o3), s4 = o3;
      }
  return s4 !== void 0 ? s4 : l2.nextSibling;
}
function _e(e3, t3, _3, r, l2) {
  var o3;
  for (o3 in _3)
    o3 === "children" || o3 === "key" || o3 in t3 || N(e3, o3, null, _3[o3], r);
  for (o3 in t3)
    l2 && typeof t3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || _3[o3] === t3[o3] || N(e3, o3, t3[o3], _3[o3], r);
}
function I(e3, t3, _3) {
  t3[0] === "-" ? e3.setProperty(t3, _3) : e3[t3] = _3 == null ? "" : typeof _3 != "number" || Z.test(t3) ? _3 : _3 + "px";
}
function N(e3, t3, _3, r, l2) {
  var o3;
  e:
    if (t3 === "style")
      if (typeof _3 == "string")
        e3.style.cssText = _3;
      else {
        if (typeof r == "string" && (e3.style.cssText = r = ""), r)
          for (t3 in r)
            _3 && t3 in _3 || I(e3.style, t3, "");
        if (_3)
          for (t3 in _3)
            r && _3[t3] === r[t3] || I(e3.style, t3, _3[t3]);
      }
    else if (t3[0] === "o" && t3[1] === "n")
      o3 = t3 !== (t3 = t3.replace(/Capture$/, "")), t3 = t3.toLowerCase() in e3 ? t3.toLowerCase().slice(2) : t3.slice(2), e3.l || (e3.l = {}), e3.l[t3 + o3] = _3, _3 ? r || e3.addEventListener(t3, o3 ? R : O, o3) : e3.removeEventListener(t3, o3 ? R : O, o3);
    else if (t3 !== "dangerouslySetInnerHTML") {
      if (l2)
        t3 = t3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t3 !== "href" && t3 !== "list" && t3 !== "form" && t3 !== "tabIndex" && t3 !== "download" && t3 in e3)
        try {
          e3[t3] = _3 ?? "";
          break e;
        } catch {
        }
      typeof _3 == "function" || (_3 != null && (_3 !== !1 || t3[0] === "a" && t3[1] === "r") ? e3.setAttribute(t3, _3) : e3.removeAttribute(t3));
    }
}
function O(e3) {
  this.l[e3.type + !1](d.event ? d.event(e3) : e3);
}
function R(e3) {
  this.l[e3.type + !0](d.event ? d.event(e3) : e3);
}
function W(e3, t3, _3, r, l2, o3, s4, f5, p6) {
  var a3, n3, h3, c3, i2, u3, b4, v2, y3, g5, x5, H8, E3, m4 = t3.type;
  if (t3.constructor !== void 0)
    return null;
  _3.__h != null && (p6 = _3.__h, f5 = t3.__e = _3.__e, t3.__h = null, o3 = [f5]), (a3 = d.__b) && a3(t3);
  try {
    e:
      if (typeof m4 == "function") {
        if (v2 = t3.props, y3 = (a3 = m4.contextType) && r[a3.__c], g5 = a3 ? y3 ? y3.props.value : a3.__ : r, _3.__c ? b4 = (n3 = t3.__c = _3.__c).__ = n3.__E : ("prototype" in m4 && m4.prototype.render ? t3.__c = n3 = new m4(v2, g5) : (t3.__c = n3 = new U(v2, g5), n3.constructor = m4, n3.render = oe), y3 && y3.sub(n3), n3.props = v2, n3.state || (n3.state = {}), n3.context = g5, n3.__n = r, h3 = n3.__d = !0, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m4.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k({}, n3.__s)), k(n3.__s, m4.getDerivedStateFromProps(v2, n3.__s))), c3 = n3.props, i2 = n3.state, h3)
          m4.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
        else {
          if (m4.getDerivedStateFromProps == null && v2 !== c3 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v2, g5), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v2, n3.__s, g5) === !1 || t3.__v === _3.__v) {
            n3.props = v2, n3.state = n3.__s, t3.__v !== _3.__v && (n3.__d = !1), n3.__v = t3, t3.__e = _3.__e, t3.__k = _3.__k, t3.__k.forEach(function(A5) {
              A5 && (A5.__ = t3);
            }), n3.__h.length && s4.push(n3);
            break e;
          }
          n3.componentWillUpdate != null && n3.componentWillUpdate(v2, n3.__s, g5), n3.componentDidUpdate != null && n3.__h.push(function() {
            n3.componentDidUpdate(c3, i2, u3);
          });
        }
        if (n3.context = g5, n3.props = v2, n3.__v = t3, n3.__P = e3, x5 = d.__r, H8 = 0, "prototype" in m4 && m4.prototype.render)
          n3.state = n3.__s, n3.__d = !1, x5 && x5(t3), a3 = n3.render(n3.props, n3.state, n3.context);
        else
          do
            n3.__d = !1, x5 && x5(t3), a3 = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
          while (n3.__d && ++H8 < 25);
        n3.state = n3.__s, n3.getChildContext != null && (r = k(k({}, r), n3.getChildContext())), h3 || n3.getSnapshotBeforeUpdate == null || (u3 = n3.getSnapshotBeforeUpdate(c3, i2)), E3 = a3 != null && a3.type === L && a3.key == null ? a3.props.children : a3, G(e3, Array.isArray(E3) ? E3 : [E3], t3, _3, r, l2, o3, s4, f5, p6), n3.base = t3.__e, t3.__h = null, n3.__h.length && s4.push(n3), b4 && (n3.__E = n3.__ = null), n3.__e = !1;
      } else
        o3 == null && t3.__v === _3.__v ? (t3.__k = _3.__k, t3.__e = _3.__e) : t3.__e = ne(_3.__e, t3, _3, r, l2, o3, s4, p6);
    (a3 = d.diffed) && a3(t3);
  } catch (A5) {
    t3.__v = null, (p6 || o3 != null) && (t3.__e = f5, t3.__h = !!p6, o3[o3.indexOf(f5)] = null), d.__e(A5, t3, _3);
  }
}
function K(e3, t3) {
  d.__c && d.__c(t3, e3), e3.some(function(_3) {
    try {
      e3 = _3.__h, _3.__h = [], e3.some(function(r) {
        r.call(_3);
      });
    } catch (r) {
      d.__e(r, _3.__v);
    }
  });
}
function ne(e3, t3, _3, r, l2, o3, s4, f5) {
  var p6, a3, n3, h3 = _3.props, c3 = t3.props, i2 = t3.type, u3 = 0;
  if (i2 === "svg" && (l2 = !0), o3 != null) {
    for (; u3 < o3.length; u3++)
      if ((p6 = o3[u3]) && "setAttribute" in p6 == !!i2 && (i2 ? p6.localName === i2 : p6.nodeType === 3)) {
        e3 = p6, o3[u3] = null;
        break;
      }
  }
  if (e3 == null) {
    if (i2 === null)
      return document.createTextNode(c3);
    e3 = l2 ? document.createElementNS("http://www.w3.org/2000/svg", i2) : document.createElement(i2, c3.is && c3), o3 = null, f5 = !1;
  }
  if (i2 === null)
    h3 === c3 || f5 && e3.data === c3 || (e3.data = c3);
  else {
    if (o3 = o3 && P.call(e3.childNodes), a3 = (h3 = _3.props || T).dangerouslySetInnerHTML, n3 = c3.dangerouslySetInnerHTML, !f5) {
      if (o3 != null)
        for (h3 = {}, u3 = 0; u3 < e3.attributes.length; u3++)
          h3[e3.attributes[u3].name] = e3.attributes[u3].value;
      (n3 || a3) && (n3 && (a3 && n3.__html == a3.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
    }
    if (_e(e3, c3, h3, l2, f5), n3)
      t3.__k = [];
    else if (u3 = t3.props.children, G(e3, Array.isArray(u3) ? u3 : [u3], t3, _3, r, l2 && i2 !== "foreignObject", o3, s4, o3 ? o3[0] : _3.__k && C(_3, 0), f5), o3 != null)
      for (u3 = o3.length; u3--; )
        o3[u3] != null && j(o3[u3]);
    f5 || ("value" in c3 && (u3 = c3.value) !== void 0 && (u3 !== e3.value || i2 === "progress" && !u3 || i2 === "option" && u3 !== h3.value) && N(e3, "value", u3, h3.value, !1), "checked" in c3 && (u3 = c3.checked) !== void 0 && u3 !== e3.checked && N(e3, "checked", u3, h3.checked, !1));
  }
  return e3;
}
function Q(e3, t3, _3) {
  try {
    typeof e3 == "function" ? e3(t3) : e3.current = t3;
  } catch (r) {
    d.__e(r, _3);
  }
}
function X(e3, t3, _3) {
  var r, l2;
  if (d.unmount && d.unmount(e3), (r = e3.ref) && (r.current && r.current !== e3.__e || Q(r, null, t3)), (r = e3.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o3) {
        d.__e(o3, t3);
      }
    r.base = r.__P = null, e3.__c = void 0;
  }
  if (r = e3.__k)
    for (l2 = 0; l2 < r.length; l2++)
      r[l2] && X(r[l2], t3, typeof e3.type != "function");
  _3 || e3.__e == null || j(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function oe(e3, t3, _3) {
  return this.constructor(e3, _3);
}
function re(e3, t3, _3) {
  var r, l2, o3;
  d.__ && d.__(e3, t3), l2 = (r = typeof _3 == "function") ? null : _3 && _3.__k || t3.__k, o3 = [], W(t3, e3 = (!r && _3 || t3).__k = ee(L, null, [e3]), l2 || T, T, t3.ownerSVGElement !== void 0, !r && _3 ? [_3] : l2 ? null : t3.firstChild ? P.call(t3.childNodes) : null, o3, !r && _3 ? _3 : l2 ? l2.__e : t3.firstChild, r), K(o3, e3);
}
function ce(e3, t3) {
  var _3 = { __c: t3 = "__cC" + B++, __: e3, Consumer: function(r, l2) {
    return r.children(l2);
  }, Provider: function(r) {
    var l2, o3;
    return this.getChildContext || (l2 = [], (o3 = {})[t3] = this, this.getChildContext = function() {
      return o3;
    }, this.shouldComponentUpdate = function(s4) {
      this.props.value !== s4.value && l2.some(M);
    }, this.sub = function(s4) {
      l2.push(s4);
      var f5 = s4.componentWillUnmount;
      s4.componentWillUnmount = function() {
        l2.splice(l2.indexOf(s4), 1), f5 && f5.call(s4);
      };
    }), r.children;
  } };
  return _3.Provider.__ = _3.Consumer.contextType = _3;
}
P = V.slice, d = { __e: function(e3, t3, _3, r) {
  for (var l2, o3, s4; t3 = t3.__; )
    if ((l2 = t3.__c) && !l2.__)
      try {
        if ((o3 = l2.constructor) && o3.getDerivedStateFromError != null && (l2.setState(o3.getDerivedStateFromError(e3)), s4 = l2.__d), l2.componentDidCatch != null && (l2.componentDidCatch(e3, r || {}), s4 = l2.__d), s4)
          return l2.__E = l2;
      } catch (f5) {
        e3 = f5;
      }
  throw e3;
} }, $ = 0, Y = function(e3) {
  return e3 != null && e3.constructor === void 0;
}, U.prototype.setState = function(e3, t3) {
  var _3;
  _3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e3 == "function" && (e3 = e3(k({}, _3), this.props)), e3 && k(_3, e3), e3 != null && this.__v && (t3 && this.__h.push(t3), M(this));
}, U.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = !0, e3 && this.__h.push(e3), M(this));
}, U.prototype.render = L, S = [], D.__r = 0, B = 0;

// https://esm.sh/stable/preact@10.11.0/deno/hooks.js
var i, n, d2, N2, f = 0, q2 = [], l = [], V2 = d.__b, g = d.__r, b = d.diffed, C2 = d.__c, A = d.unmount;
function a(_3, t3) {
  d.__h && d.__h(n, _3, f || t3), f = 0;
  var u3 = n.__H || (n.__H = { __: [], __h: [] });
  return _3 >= u3.__.length && u3.__.push({ __V: l }), u3.__[_3];
}
function P2(_3) {
  return f = 1, B2(D2, _3);
}
function B2(_3, t3, u3) {
  var o3 = a(i++, 2);
  if (o3.t = _3, !o3.__c && (o3.__ = [u3 ? u3(t3) : D2(void 0, t3), function(v2) {
    var s4 = o3.__N ? o3.__N[0] : o3.__[0], h3 = o3.t(s4, v2);
    s4 !== h3 && (o3.__N = [h3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = n, !n.u)) {
    n.u = !0;
    var r = n.shouldComponentUpdate;
    n.shouldComponentUpdate = function(v2, s4, h3) {
      if (!o3.__c.__H)
        return !0;
      var y3 = o3.__c.__H.__.filter(function(c3) {
        return c3.__c;
      });
      if (y3.every(function(c3) {
        return !c3.__N;
      }))
        return !r || r.call(this, v2, s4, h3);
      var E3 = !1;
      return y3.forEach(function(c3) {
        if (c3.__N) {
          var k4 = c3.__[0];
          c3.__ = c3.__N, c3.__N = void 0, k4 !== c3.__[0] && (E3 = !0);
        }
      }), !!E3 && (!r || r.call(this, v2, s4, h3));
    };
  }
  return o3.__N || o3.__;
}
function j2(_3, t3) {
  var u3 = a(i++, 3);
  !d.__s && H(u3.__H, t3) && (u3.__ = _3, u3.i = t3, n.__H.__h.push(u3));
}
function w2(_3) {
  return f = 5, x(function() {
    return { current: _3 };
  }, []);
}
function x(_3, t3) {
  var u3 = a(i++, 7);
  return H(u3.__H, t3) ? (u3.__V = _3(), u3.i = t3, u3.__h = _3, u3.__V) : u3.__;
}
function L2(_3, t3) {
  return f = 8, x(function() {
    return _3;
  }, t3);
}
function M2(_3) {
  var t3 = n.context[_3.__c], u3 = a(i++, 9);
  return u3.c = _3, t3 ? (u3.__ == null && (u3.__ = !0, t3.sub(n)), t3.props.value) : _3.__;
}
function R2() {
  for (var _3; _3 = q2.shift(); )
    if (_3.__P && _3.__H)
      try {
        _3.__H.__h.forEach(m), _3.__H.__h.forEach(p), _3.__H.__h = [];
      } catch (t3) {
        _3.__H.__h = [], d.__e(t3, _3.__v);
      }
}
d.__b = function(_3) {
  typeof _3.type != "function" || _3.o || _3.type === L ? _3.o || (_3.o = _3.__ && _3.__.o ? _3.__.o : "") : _3.o = (_3.__ && _3.__.o ? _3.__.o : "") + (_3.__ && _3.__.__k ? _3.__.__k.indexOf(_3) : 0), n = null, V2 && V2(_3);
}, d.__r = function(_3) {
  g && g(_3), i = 0;
  var t3 = (n = _3.__c).__H;
  t3 && (d2 === n ? (t3.__h = [], n.__h = [], t3.__.forEach(function(u3) {
    u3.__N && (u3.__ = u3.__N), u3.__V = l, u3.__N = u3.i = void 0;
  })) : (t3.__h.forEach(m), t3.__h.forEach(p), t3.__h = [])), d2 = n;
}, d.diffed = function(_3) {
  b && b(_3);
  var t3 = _3.__c;
  t3 && t3.__H && (t3.__H.__h.length && (q2.push(t3) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t3.__H.__.forEach(function(u3) {
    u3.i && (u3.__H = u3.i), u3.__V !== l && (u3.__ = u3.__V), u3.i = void 0, u3.__V = l;
  })), d2 = n = null;
}, d.__c = function(_3, t3) {
  t3.some(function(u3) {
    try {
      u3.__h.forEach(m), u3.__h = u3.__h.filter(function(o3) {
        return !o3.__ || p(o3);
      });
    } catch (o3) {
      t3.some(function(r) {
        r.__h && (r.__h = []);
      }), t3 = [], d.__e(o3, u3.__v);
    }
  }), C2 && C2(_3, t3);
}, d.unmount = function(_3) {
  A && A(_3);
  var t3, u3 = _3.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(o3) {
    try {
      m(o3);
    } catch (r) {
      t3 = r;
    }
  }), u3.__H = void 0, t3 && d.__e(t3, u3.__v));
};
var F2 = typeof requestAnimationFrame == "function";
function S2(_3) {
  var t3, u3 = function() {
    clearTimeout(o3), F2 && cancelAnimationFrame(t3), setTimeout(_3);
  }, o3 = setTimeout(u3, 100);
  F2 && (t3 = requestAnimationFrame(u3));
}
function m(_3) {
  var t3 = n, u3 = _3.__c;
  typeof u3 == "function" && (_3.__c = void 0, u3()), n = t3;
}
function p(_3) {
  var t3 = n;
  _3.__c = _3.__(), n = t3;
}
function H(_3, t3) {
  return !_3 || _3.length !== t3.length || t3.some(function(u3, o3) {
    return u3 !== _3[o3];
  });
}
function D2(_3, t3) {
  return typeof t3 == "function" ? t3(_3) : t3;
}

// https://esm.sh/v106/memoize-one@6.0.0/deno/memoize-one.js
var s = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};

// https://esm.sh/v106/lodash.throttle@4.1.1/deno/lodash.throttle.js
var __global$ = globalThis || (typeof window < "u" ? window : self), A2 = Object.create, h = Object.defineProperty, B3 = Object.getOwnPropertyDescriptor, F3 = Object.getOwnPropertyNames, R3 = Object.getPrototypeOf, P3 = Object.prototype.hasOwnProperty, D3 = (e3, n3) => () => (n3 || e3((n3 = { exports: {} }).exports, n3), n3.exports), G2 = (e3, n3, t3, f5) => {
  if (n3 && typeof n3 == "object" || typeof n3 == "function")
    for (let i2 of F3(n3))
      !P3.call(e3, i2) && i2 !== t3 && h(e3, i2, { get: () => n3[i2], enumerable: !(f5 = B3(n3, i2)) || f5.enumerable });
  return e3;
}, H2 = (e3, n3, t3) => (t3 = e3 != null ? A2(R3(e3)) : {}, G2(n3 || !e3 || !e3.__esModule ? h(t3, "default", { value: e3, enumerable: !0 }) : t3, e3)), L3 = D3((ce4, k4) => {
  var _3 = "Expected a function", S7 = NaN, U5 = "[object Symbol]", X6 = /^\s+|\s+$/g, q6 = /^[-+]0x[0-9a-f]+$/i, z5 = /^0b[01]+$/i, J4 = /^0o[0-7]+$/i, K6 = parseInt, Q6 = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, V6 = typeof self == "object" && self && self.Object === Object && self, Y6 = Q6 || V6 || Function("return this")(), Z6 = Object.prototype, w4 = Z6.toString, ee4 = Math.max, ne4 = Math.min, j5 = function() {
    return Y6.Date.now();
  };
  function te2(e3, n3, t3) {
    var f5, i2, g5, c3, a3, u3, l2 = 0, v2 = !1, s4 = !1, y3 = !0;
    if (typeof e3 != "function")
      throw new TypeError(_3);
    n3 = E3(n3) || 0, b4(t3) && (v2 = !!t3.leading, s4 = "maxWait" in t3, g5 = s4 ? ee4(E3(t3.maxWait) || 0, n3) : g5, y3 = "trailing" in t3 ? !!t3.trailing : y3);
    function p6(r) {
      var o3 = f5, d3 = i2;
      return f5 = i2 = void 0, l2 = r, c3 = e3.apply(d3, o3), c3;
    }
    function C5(r) {
      return l2 = r, a3 = setTimeout(m4, n3), v2 ? p6(r) : c3;
    }
    function M5(r) {
      var o3 = r - u3, d3 = r - l2, O4 = n3 - o3;
      return s4 ? ne4(O4, g5 - d3) : O4;
    }
    function x5(r) {
      var o3 = r - u3, d3 = r - l2;
      return u3 === void 0 || o3 >= n3 || o3 < 0 || s4 && d3 >= g5;
    }
    function m4() {
      var r = j5();
      if (x5(r))
        return I6(r);
      a3 = setTimeout(m4, M5(r));
    }
    function I6(r) {
      return a3 = void 0, y3 && f5 ? p6(r) : (f5 = i2 = void 0, c3);
    }
    function N7() {
      a3 !== void 0 && clearTimeout(a3), l2 = 0, f5 = u3 = i2 = a3 = void 0;
    }
    function $4() {
      return a3 === void 0 ? c3 : I6(j5());
    }
    function T6() {
      var r = j5(), o3 = x5(r);
      if (f5 = arguments, i2 = this, u3 = r, o3) {
        if (a3 === void 0)
          return C5(u3);
        if (s4)
          return a3 = setTimeout(m4, n3), p6(u3);
      }
      return a3 === void 0 && (a3 = setTimeout(m4, n3)), c3;
    }
    return T6.cancel = N7, T6.flush = $4, T6;
  }
  function re4(e3, n3, t3) {
    var f5 = !0, i2 = !0;
    if (typeof e3 != "function")
      throw new TypeError(_3);
    return b4(t3) && (f5 = "leading" in t3 ? !!t3.leading : f5, i2 = "trailing" in t3 ? !!t3.trailing : i2), te2(e3, n3, { leading: f5, maxWait: n3, trailing: i2 });
  }
  function b4(e3) {
    var n3 = typeof e3;
    return !!e3 && (n3 == "object" || n3 == "function");
  }
  function ie4(e3) {
    return !!e3 && typeof e3 == "object";
  }
  function fe(e3) {
    return typeof e3 == "symbol" || ie4(e3) && w4.call(e3) == U5;
  }
  function E3(e3) {
    if (typeof e3 == "number")
      return e3;
    if (fe(e3))
      return S7;
    if (b4(e3)) {
      var n3 = typeof e3.valueOf == "function" ? e3.valueOf() : e3;
      e3 = b4(n3) ? n3 + "" : n3;
    }
    if (typeof e3 != "string")
      return e3 === 0 ? e3 : +e3;
    e3 = e3.replace(X6, "");
    var t3 = z5.test(e3);
    return t3 || J4.test(e3) ? K6(e3.slice(2), t3 ? 2 : 8) : q6.test(e3) ? S7 : +e3;
  }
  k4.exports = re4;
}), ae = H2(L3()), { default: W2, ...oe2 } = ae;

// https://esm.sh/v106/@twind/core@1.0.1/deno/core.js
var F4;
function lt(t3) {
  return [...t3.v, (t3.i ? "!" : "") + t3.n].join(":");
}
function st(t3, e3 = ",") {
  return t3.map(lt).join(e3);
}
var W3 = typeof CSS < "u" && CSS.escape || ((t3) => t3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function V3(t3) {
  for (var e3 = 9, r = t3.length; r--; )
    e3 = Math.imul(e3 ^ t3.charCodeAt(r), 1597334677);
  return "#" + ((e3 ^ e3 >>> 9) >>> 0).toString(36);
}
function kt(t3, e3 = "@media ") {
  return e3 + x2(t3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((n3) => `(${n3}-width:${r[n3]})`).join(" and "))).join(",");
}
function x2(t3 = []) {
  return Array.isArray(t3) ? t3 : t3 == null ? [] : [t3];
}
function D4() {
}
var w3 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function jt(t3) {
  var e3;
  return ((e3 = t3.match(/[-=:;]/g)) == null ? void 0 : e3.length) || 0;
}
function X2(t3) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t3) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t3), 15) << 18;
}
var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function at({ n: t3, i: e3, v: r = [] }, n3, i2, l2) {
  for (let a3 of (t3 && (t3 = lt({ n: t3, i: e3, v: r })), l2 = [...x2(l2)], r)) {
    let s4 = n3.theme("screens", a3);
    for (let u3 of x2(s4 && kt(s4) || n3.v(a3))) {
      var o3;
      l2.push(u3), i2 |= s4 ? 67108864 | X2(u3) : a3 == "dark" ? 1073741824 : u3[0] == "@" ? X2(u3) : (o3 = u3, 1 << ~(/:([a-z-]+)/.test(o3) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: t3, p: i2, r: l2, i: e3 };
}
var ut = /* @__PURE__ */ new Map();
function tt(t3) {
  if (t3.d) {
    let e3 = [], r = Y2(t3.r.reduce((n3, i2) => i2[0] == "@" ? (e3.push(i2), n3) : i2 ? Y2(n3, (l2) => Y2(i2, (o3) => {
      let a3 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o3);
      if (a3) {
        let s4 = l2.indexOf(a3[1]);
        return ~s4 ? l2.slice(0, s4) + a3[0] + l2.slice(s4 + a3[1].length) : Z2(l2, o3);
      }
      return Z2(o3, l2);
    })) : n3, "&"), (n3) => Z2(n3, t3.n ? "." + W3(t3.n) : ""));
    return r && e3.push(r.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i2) => i2 + "{" + n3 + "}", t3.d);
  }
}
function Y2(t3, e3) {
  return t3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, n3, i2) => e3(n3) + i2);
}
function Z2(t3, e3) {
  return t3.replace(/&/g, e3);
}
var Dt = new Intl.Collator("en", { numeric: !0 });
function St(t3, e3) {
  for (var r = 0, n3 = t3.length; r < n3; ) {
    let i2 = n3 + r >> 1;
    0 >= Mt(t3[i2], e3) ? r = i2 + 1 : n3 = i2;
  }
  return n3;
}
function Mt(t3, e3) {
  let r = t3.p & w3.o;
  return r == (e3.p & w3.o) && (r == w3.b || r == w3.o) ? 0 : t3.p - e3.p || t3.o - e3.o || Dt.compare(t3.n, e3.n);
}
function H3(t3, e3) {
  return Math.round(parseInt(t3, 16) * e3);
}
function T2(t3, e3 = {}) {
  if (typeof t3 == "function")
    return t3(e3);
  let { opacityValue: r = "1", opacityVariable: n3 } = e3, i2 = n3 ? `var(${n3})` : r;
  if (t3.includes("<alpha-value>"))
    return t3.replace("<alpha-value>", i2);
  if (t3[0] == "#" && (t3.length == 4 || t3.length == 7)) {
    let l2 = (t3.length - 1) / 3, o3 = [17, 1, 0.062272][l2 - 1];
    return `rgba(${[H3(t3.substr(1, l2), o3), H3(t3.substr(1 + l2, l2), o3), H3(t3.substr(1 + 2 * l2, l2), o3), i2]})`;
  }
  return i2 == "1" ? t3 : i2 == "0" ? "#0000" : t3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i2})`);
}
function ct(t3, e3, r, n3, i2 = []) {
  return function l2(o3, { n: a3, p: s4, r: u3 = [], i: f5 }, c3) {
    let p6 = [], d3 = "", v2 = 0, g5 = 0;
    for (let h3 in o3 || {}) {
      var y3, A5;
      let b4 = o3[h3];
      if (h3[0] == "@") {
        if (!b4)
          continue;
        if (h3[1] == "a") {
          p6.push(...ht(a3, s4, N3("" + b4), c3, s4, u3, f5, !0));
          continue;
        }
        if (h3[1] == "l") {
          for (let m4 of x2(b4))
            p6.push(...l2(m4, { n: a3, p: (y3 = w3[h3[7]], s4 & ~w3.o | y3), r: u3, i: f5 }, c3));
          continue;
        }
        if (h3[1] == "i") {
          p6.push(...x2(b4).map((m4) => ({ p: -1, o: 0, r: [], d: h3 + " " + m4 })));
          continue;
        }
        if (h3[1] == "k") {
          p6.push({ p: w3.d, o: 0, r: [h3], d: l2(b4, { p: w3.d }, c3).map(tt).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p6.push(...x2(b4).map((m4) => ({ p: w3.d, o: 0, r: [h3], d: l2(m4, { p: w3.d }, c3).map(tt).join("") })));
          continue;
        }
      }
      if (typeof b4 != "object" || Array.isArray(b4))
        h3 == "label" && b4 ? a3 = b4 + V3(JSON.stringify([s4, f5, o3])) : (b4 || b4 === 0) && (h3 = h3.replace(/[A-Z]/g, (m4) => "-" + m4.toLowerCase()), g5 += 1, v2 = Math.max(v2, (A5 = h3)[0] == "-" ? 0 : jt(A5) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A5) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d3 += (d3 ? ";" : "") + x2(b4).map((m4) => c3.s(h3, ft("" + m4, c3.theme) + (f5 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let m4 = s4;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (C5, $4) => {
          let j5 = c3.theme("screens", $4);
          return j5 ? (m4 |= 67108864, kt(j5, "")) : C5;
        }), m4 |= X2(h3)), p6.push(...l2(b4, { n: a3, p: m4, r: [...u3, h3], i: f5 }, c3));
      } else
        p6.push(...l2(b4, { p: s4, r: [...u3, h3] }, c3));
    }
    return p6.unshift({ n: a3, p: s4, o: Math.max(0, 15 - g5) + 1.5 * Math.min(v2 || 15, 15), r: u3, d: d3 }), p6.sort(Mt);
  }(t3, at(e3, r, n3, i2), r);
}
function ft(t3, e3) {
  return t3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, n3, i2, l2, o3) => {
    let a3 = e3(i2, o3);
    return typeof a3 == "function" && /color|fill|stroke/i.test(i2) ? T2(a3) : "" + a3;
  });
}
function pt(t3, e3) {
  let r, n3 = [];
  for (let i2 of t3)
    i2.d && i2.n ? r?.p == i2.p && "" + r.r == "" + i2.r ? (r.c = [r.c, i2.c].filter(Boolean).join(" "), r.d = r.d + ";" + i2.d) : n3.push(r = { ...i2, n: i2.n && e3 }) : n3.push({ ...i2, n: i2.n && e3 });
  return n3;
}
function B4(t3, e3, r = w3.u, n3, i2) {
  let l2 = [];
  for (let o3 of t3)
    for (let a3 of function(s4, u3, f5, c3, p6) {
      var d3;
      s4 = { ...s4, i: s4.i || p6 };
      let v2 = function(g5, y3) {
        let A5 = ut.get(g5.n);
        return A5 ? A5(g5, y3) : y3.r(g5.n, g5.v[0] == "dark");
      }(s4, u3);
      return v2 ? typeof v2 == "string" ? ({ r: c3, p: f5 } = at(s4, u3, f5, c3), pt(B4(N3(v2), u3, f5, c3, s4.i), s4.n)) : Array.isArray(v2) ? v2.map((g5) => {
        var y3, A5;
        return { o: 0, ...g5, r: [...x2(c3), ...x2(g5.r)], p: (y3 = f5, A5 = (d3 = g5.p) != null ? d3 : f5, y3 & ~w3.o | A5) };
      }) : ct(v2, s4, u3, f5, c3) : [{ c: lt(s4), p: 0, o: 0, r: [] }];
    }(o3, e3, r, n3, i2))
      l2.splice(St(l2, a3), 0, a3);
  return l2;
}
function ht(t3, e3, r, n3, i2, l2, o3, a3) {
  return pt((a3 ? r.flatMap((s4) => B4([s4], n3, i2, l2, o3)) : B4(r, n3, i2, l2, o3)).map((s4) => s4.p & w3.o && (s4.n || e3 == w3.b) ? { ...s4, p: s4.p & ~w3.o | e3, o: 0 } : s4), t3);
}
function Ot(t3, e3, r, n3) {
  var i2;
  return i2 = (l2, o3) => {
    let { n: a3, p: s4, r: u3, i: f5 } = at(l2, o3, e3);
    return r && ht(a3, e3, r, o3, s4, u3, f5, n3);
  }, ut.set(t3, i2), t3;
}
function K2(t3, e3) {
  if (t3[t3.length - 1] != "(") {
    let r = [], n3 = !1, i2 = !1, l2 = "";
    for (let o3 of t3)
      if (!(o3 == "(" || /[~@]$/.test(o3))) {
        if (o3[0] == "!" && (o3 = o3.slice(1), n3 = !n3), o3.endsWith(":")) {
          r[o3 == "dark:" ? "unshift" : "push"](o3.slice(0, -1));
          continue;
        }
        o3[0] == "-" && (o3 = o3.slice(1), i2 = !i2), o3.endsWith("-") && (o3 = o3.slice(0, -1)), o3 && o3 != "&" && (l2 += (l2 && "-") + o3);
      }
    l2 && (i2 && (l2 = "-" + l2), e3[0].push({ n: l2, v: r.filter(Jt), i: n3 }));
  }
}
function Jt(t3, e3, r) {
  return r.indexOf(t3) == e3;
}
var yt = /* @__PURE__ */ new Map();
function N3(t3) {
  let e3 = yt.get(t3);
  if (!e3) {
    let r = [], n3 = [[]], i2 = 0, l2 = 0, o3 = null, a3 = 0, s4 = (u3, f5 = 0) => {
      i2 != a3 && (r.push(t3.slice(i2, a3 + f5)), u3 && K2(r, n3)), i2 = a3 + 1;
    };
    for (; a3 < t3.length; a3++) {
      let u3 = t3[a3];
      if (l2)
        t3[a3 - 1] != "\\" && (l2 += +(u3 == "[") || -(u3 == "]"));
      else if (u3 == "[")
        l2 += 1;
      else if (o3)
        t3[a3 - 1] != "\\" && o3.test(t3.slice(a3)) && (o3 = null, i2 = a3 + RegExp.lastMatch.length);
      else if (u3 == "/" && t3[a3 - 1] != "\\" && (t3[a3 + 1] == "*" || t3[a3 + 1] == "/"))
        o3 = t3[a3 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (u3 == "(")
        s4(), r.push(u3);
      else if (u3 == ":")
        t3[a3 + 1] != ":" && s4(!1, 1);
      else if (/[\s,)]/.test(u3)) {
        s4(!0);
        let f5 = r.lastIndexOf("(");
        if (u3 == ")") {
          let c3 = r[f5 - 1];
          if (/[~@]$/.test(c3)) {
            let p6 = n3.shift();
            r.length = f5, K2([...r, "#"], n3);
            let { v: d3 } = n3[0].pop();
            for (let v2 of p6)
              v2.v.splice(+(v2.v[0] == "dark") - +(d3[0] == "dark"), d3.length);
            K2([...r, Ot(c3.length > 1 ? c3.slice(0, -1) + V3(JSON.stringify([c3, p6])) : c3 + "(" + st(p6) + ")", w3.a, p6, /@$/.test(c3))], n3);
          }
          f5 = r.lastIndexOf("(", f5 - 1);
        }
        r.length = f5 + 1;
      } else
        /[~@]/.test(u3) && t3[a3 + 1] == "(" && n3.unshift([]);
    }
    s4(!0), yt.set(t3, e3 = n3[0]);
  }
  return e3;
}
function Ct(t3, e3, r) {
  return e3.reduce((n3, i2, l2) => n3 + r(i2) + t3[l2 + 1], t3[0]);
}
function G3(t3, e3) {
  return Array.isArray(t3) && Array.isArray(t3.raw) ? Ct(t3, e3, (r) => Q2(r).trim()) : e3.filter(Boolean).reduce((r, n3) => r + Q2(n3), t3 ? Q2(t3) : "");
}
function Q2(t3) {
  let e3, r = "";
  if (t3 && typeof t3 == "object")
    if (Array.isArray(t3))
      (e3 = G3(t3[0], t3.slice(1))) && (r += " " + e3);
    else
      for (let n3 in t3)
        t3[n3] && (r += " " + n3);
  else
    t3 != null && typeof t3 != "boolean" && (r += " " + t3);
  return r;
}
var ae2 = Et("@"), ue = Et("~");
function Et(t3) {
  return new Proxy(function(r, ...n3) {
    return e3("", r, n3);
  }, { get: (r, n3) => n3 in r ? r[n3] : function(i2, ...l2) {
    return e3(n3, i2, l2);
  } });
  function e3(r, n3, i2) {
    return st(N3(r + t3 + "(" + G3(n3, i2) + ")"));
  }
}
function U2(t3, e3) {
  return Array.isArray(t3) ? mt(Ct(t3, e3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof t3 == "string" ? mt(t3) : [t3];
}
var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function mt(t3) {
  let e3;
  t3 = t3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], n3 = [r[0]], i2 = [];
  for (; e3 = Bt.exec(t3); )
    e3[4] && (r.shift(), i2.shift()), e3[3] ? (i2.unshift(e3[3]), r.unshift({}), n3.push(i2.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))) : e3[4] || (r[0][e3[1]] && (r.unshift({}), n3.push(i2.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))), r[0][e3[1]] = e3[2]);
  return n3;
}
function dt(t3, ...e3) {
  var r, n3;
  let i2 = U2(t3, e3), l2 = (((r = i2.find((o3) => o3.label)) == null ? void 0 : r.label) || "css") + V3(JSON.stringify(i2));
  return n3 = (o3, a3) => pt(i2.flatMap((s4) => ct(s4, o3, a3, w3.o)), l2), ut.set(l2, n3), l2;
}
var ce2 = new Proxy(function(t3, e3) {
  return bt("animation", t3, e3);
}, { get: (t3, e3) => e3 in t3 ? t3[e3] : function(r, n3) {
  return bt(e3, r, n3);
} });
function bt(t3, e3, r) {
  return { toString: () => dt({ label: t3, "@layer components": { ...typeof e3 == "object" ? e3 : { animation: e3 }, animationName: "" + r } }) };
}
var Ut = Symbol();
var z2 = new Proxy(D4, { apply: (t3, e3, r) => F4(r[0]), get(t3, e3) {
  let r = F4[e3];
  return typeof r == "function" ? function() {
    return r.apply(F4, arguments);
  } : r;
} });
var xe = function t(e3) {
  return new Proxy(function(r, ...n3) {
    return xt(e3, "", r, n3);
  }, { get: (r, n3) => n3 === "bind" ? t : n3 in r ? r[n3] : function(i2, ...l2) {
    return xt(e3, n3, i2, l2);
  } });
}();
function xt(t3, e3, r, n3) {
  return { toString() {
    let i2 = U2(r, n3), l2 = W3(e3 + V3(JSON.stringify([e3, i2])));
    return (typeof t3 == "function" ? t3 : z2)(dt({ [`@keyframes ${l2}`]: U2(r, n3) })), l2;
  } };
}

// https://esm.sh/v106/@twind/core@1.1.3/deno/core.js
var B5;
function ae3(e3) {
  return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
}
function ue2(e3, t3 = ",") {
  return e3.map(ae3).join(t3);
}
var Y3 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function T3(e3) {
  for (var t3 = 9, r = e3.length; r--; )
    t3 = Math.imul(t3 ^ e3.charCodeAt(r), 1597334677);
  return "#" + ((t3 ^ t3 >>> 9) >>> 0).toString(36);
}
function Ce(e3, t3 = "@media ") {
  return t3 + b2(e3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((i2) => `(${i2}-width:${r[i2]})`).join(" and "))).join(",");
}
function b2(e3 = []) {
  return Array.isArray(e3) ? e3 : e3 == null ? [] : [e3];
}
function F5() {
}
var S3 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function Ee(e3) {
  return e3.match(/[-=:;]/g)?.length || 0;
}
function re2(e3) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
}
var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function ce3({ n: e3, i: t3, v: r = [] }, i2, n3, l2) {
  e3 && (e3 = ae3({ n: e3, i: t3, v: r })), l2 = [...b2(l2)];
  for (let s4 of r) {
    let f5 = i2.theme("screens", s4);
    for (let a3 of b2(f5 && Ce(f5) || i2.v(s4))) {
      var o3;
      l2.push(a3), n3 |= f5 ? 67108864 | re2(a3) : s4 == "dark" ? 1073741824 : a3[0] == "@" ? re2(a3) : (o3 = a3, 1 << ~(/:([a-z-]+)/.test(o3) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: e3, p: n3, r: l2, i: t3 };
}
var pe = /* @__PURE__ */ new Map();
function ne2(e3) {
  if (e3.d) {
    let t3 = [], r = H4(e3.r.reduce((i2, n3) => n3[0] == "@" ? (t3.push(n3), i2) : n3 ? H4(i2, (l2) => H4(n3, (o3) => {
      let s4 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o3);
      if (s4) {
        let f5 = l2.indexOf(s4[1]);
        return ~f5 ? l2.slice(0, f5) + s4[0] + l2.slice(f5 + s4[1].length) : Q3(l2, o3);
      }
      return Q3(o3, l2);
    })) : i2, "&"), (i2) => Q3(i2, e3.n ? "." + Y3(e3.n) : ""));
    return r && t3.push(r.replace(/:merge\((.+?)\)/g, "$1")), t3.reduceRight((i2, n3) => n3 + "{" + i2 + "}", e3.d);
  }
}
function H4(e3, t3) {
  return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, i2, n3) => t3(i2) + n3);
}
function Q3(e3, t3) {
  return e3.replace(/&/g, t3);
}
var $e = new Intl.Collator("en", { numeric: !0 });
function Me(e3, t3) {
  for (var r = 0, i2 = e3.length; r < i2; ) {
    let n3 = i2 + r >> 1;
    0 >= Ne(e3[n3], t3) ? r = n3 + 1 : i2 = n3;
  }
  return i2;
}
function Ne(e3, t3) {
  let r = e3.p & S3.o;
  return r == (t3.p & S3.o) && (r == S3.b || r == S3.o) ? 0 : e3.p - t3.p || e3.o - t3.o || $e.compare(we(e3.n), we(t3.n)) || $e.compare(Ae(e3.n), Ae(t3.n));
}
function we(e3) {
  return (e3 || "").split(/:/).pop().split("/").pop() || "\0";
}
function Ae(e3) {
  return (e3 || "").replace(/\W/g, (t3) => String.fromCharCode(127 + t3.charCodeAt(0))) + "\0";
}
function X3(e3, t3) {
  return Math.round(parseInt(e3, 16) * t3);
}
function P4(e3, t3 = {}) {
  if (typeof e3 == "function")
    return e3(t3);
  let { opacityValue: r = "1", opacityVariable: i2 } = t3, n3 = i2 ? `var(${i2})` : r;
  if (e3.includes("<alpha-value>"))
    return e3.replace("<alpha-value>", n3);
  if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
    let l2 = (e3.length - 1) / 3, o3 = [17, 1, 0.062272][l2 - 1];
    return `rgba(${[X3(e3.substr(1, l2), o3), X3(e3.substr(1 + l2, l2), o3), X3(e3.substr(1 + 2 * l2, l2), o3), n3]})`;
  }
  return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
}
function de(e3, t3, r, i2, n3 = []) {
  return function l2(o3, { n: s4, p: f5, r: a3 = [], i: c3 }, u3) {
    let p6 = [], g5 = "", y3 = 0, $4 = 0;
    for (let h3 in o3 || {}) {
      var A5, R7;
      let d3 = o3[h3];
      if (h3[0] == "@") {
        if (!d3)
          continue;
        if (h3[1] == "a") {
          p6.push(...ge(s4, f5, I2("" + d3), u3, f5, a3, c3, !0));
          continue;
        }
        if (h3[1] == "l") {
          for (let w4 of b2(d3))
            p6.push(...l2(w4, { n: s4, p: (A5 = S3[h3[7]], f5 & ~S3.o | A5), r: h3[7] == "d" ? [] : a3, i: c3 }, u3));
          continue;
        }
        if (h3[1] == "i") {
          p6.push(...b2(d3).map((w4) => ({ p: -1, o: 0, r: [], d: h3 + " " + w4 })));
          continue;
        }
        if (h3[1] == "k") {
          p6.push({ p: S3.d, o: 0, r: [h3], d: l2(d3, { p: S3.d }, u3).map(ne2).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p6.push(...b2(d3).map((w4) => ({ p: S3.d, o: 0, r: [h3], d: l2(w4, { p: S3.d }, u3).map(ne2).join("") })));
          continue;
        }
      }
      if (typeof d3 != "object" || Array.isArray(d3))
        h3 == "label" && d3 ? s4 = d3 + T3(JSON.stringify([f5, c3, o3])) : (d3 || d3 === 0) && (h3 = h3.replace(/[A-Z]/g, (w4) => "-" + w4.toLowerCase()), $4 += 1, y3 = Math.max(y3, (R7 = h3)[0] == "-" ? 0 : Ee(R7) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R7) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g5 += (g5 ? ";" : "") + b2(d3).map((w4) => u3.s(h3, he("" + w4, u3.theme) + (c3 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let w4 = f5;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (j5, M5) => {
          let N7 = u3.theme("screens", M5);
          return N7 ? (w4 |= 67108864, Ce(N7, "")) : j5;
        }), w4 |= re2(h3)), p6.push(...l2(d3, { n: s4, p: w4, r: [...a3, h3], i: c3 }, u3));
      } else
        p6.push(...l2(d3, { p: f5, r: [...a3, h3] }, u3));
    }
    return p6.unshift({ n: s4, p: f5, o: Math.max(0, 15 - $4) + 1.5 * Math.min(y3 || 15, 15), r: a3, d: g5 }), p6.sort(Ne);
  }(e3, ce3(t3, r, i2, n3), r);
}
function he(e3, t3) {
  return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, i2, n3, l2, o3 = "") => {
    let s4 = t3(n3, o3);
    return typeof s4 == "function" && /color|fill|stroke/i.test(n3) ? P4(s4) : "" + b2(s4).filter((f5) => Object(f5) !== f5);
  });
}
function ye(e3, t3) {
  let r, i2 = [];
  for (let n3 of e3)
    n3.d && n3.n ? r?.p == n3.p && "" + r.r == "" + n3.r ? (r.c = [r.c, n3.c].filter(Boolean).join(" "), r.d = r.d + ";" + n3.d) : i2.push(r = { ...n3, n: n3.n && t3 }) : i2.push({ ...n3, n: n3.n && t3 });
  return i2;
}
function W4(e3, t3, r = S3.u, i2, n3) {
  let l2 = [];
  for (let o3 of e3)
    for (let s4 of function(f5, a3, c3, u3, p6) {
      f5 = { ...f5, i: f5.i || p6 };
      let g5 = function(y3, $4) {
        let A5 = pe.get(y3.n);
        return A5 ? A5(y3, $4) : $4.r(y3.n, y3.v[0] == "dark");
      }(f5, a3);
      return g5 ? typeof g5 == "string" ? ({ r: u3, p: c3 } = ce3(f5, a3, c3, u3), ye(W4(I2(g5), a3, c3, u3, f5.i), f5.n)) : Array.isArray(g5) ? g5.map((y3) => {
        var $4, A5;
        return { o: 0, ...y3, r: [...b2(u3), ...b2(y3.r)], p: ($4 = c3, A5 = y3.p ?? c3, $4 & ~S3.o | A5) };
      }) : de(g5, f5, a3, c3, u3) : [{ c: ae3(f5), p: 0, o: 0, r: [] }];
    }(o3, t3, r, i2, n3))
      l2.splice(Me(l2, s4), 0, s4);
  return l2;
}
function ge(e3, t3, r, i2, n3, l2, o3, s4) {
  return ye((s4 ? r.flatMap((f5) => W4([f5], i2, n3, l2, o3)) : W4(r, i2, n3, l2, o3)).map((f5) => f5.p & S3.o && (f5.n || t3 == S3.b) ? { ...f5, p: f5.p & ~S3.o | t3, o: 0 } : f5), e3);
}
function _e2(e3, t3, r, i2) {
  var n3;
  return n3 = (l2, o3) => {
    let { n: s4, p: f5, r: a3, i: c3 } = ce3(l2, o3, t3);
    return r && ge(s4, t3, r, o3, f5, a3, c3, i2);
  }, pe.set(e3, n3), e3;
}
function K3(e3, t3, r) {
  if (e3[e3.length - 1] != "(") {
    let i2 = [], n3 = !1, l2 = !1, o3 = "";
    for (let s4 of e3)
      if (!(s4 == "(" || /[~@]$/.test(s4))) {
        if (s4[0] == "!" && (s4 = s4.slice(1), n3 = !n3), s4.endsWith(":")) {
          i2[s4 == "dark:" ? "unshift" : "push"](s4.slice(0, -1));
          continue;
        }
        s4[0] == "-" && (s4 = s4.slice(1), l2 = !l2), s4.endsWith("-") && (s4 = s4.slice(0, -1)), s4 && s4 != "&" && (o3 += (o3 && "-") + s4);
      }
    o3 && (l2 && (o3 = "-" + o3), t3[0].push({ n: o3, v: i2.filter(Be), i: n3 }));
  }
}
function Be(e3, t3, r) {
  return r.indexOf(e3) == t3;
}
var Se = /* @__PURE__ */ new Map();
function I2(e3) {
  let t3 = Se.get(e3);
  if (!t3) {
    let r = [], i2 = [[]], n3 = 0, l2 = 0, o3 = null, s4 = 0, f5 = (a3, c3 = 0) => {
      n3 != s4 && (r.push(e3.slice(n3, s4 + c3)), a3 && K3(r, i2)), n3 = s4 + 1;
    };
    for (; s4 < e3.length; s4++) {
      let a3 = e3[s4];
      if (l2)
        e3[s4 - 1] != "\\" && (l2 += +(a3 == "[") || -(a3 == "]"));
      else if (a3 == "[")
        l2 += 1;
      else if (o3)
        e3[s4 - 1] != "\\" && o3.test(e3.slice(s4)) && (o3 = null, n3 = s4 + RegExp.lastMatch.length);
      else if (a3 == "/" && e3[s4 - 1] != "\\" && (e3[s4 + 1] == "*" || e3[s4 + 1] == "/"))
        o3 = e3[s4 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (a3 == "(")
        f5(), r.push(a3);
      else if (a3 == ":")
        e3[s4 + 1] != ":" && f5(!1, 1);
      else if (/[\s,)]/.test(a3)) {
        f5(!0);
        let c3 = r.lastIndexOf("(");
        if (a3 == ")") {
          let u3 = r[c3 - 1];
          if (/[~@]$/.test(u3)) {
            let p6 = i2.shift();
            r.length = c3, K3([...r, "#"], i2);
            let { v: g5 } = i2[0].pop();
            for (let y3 of p6)
              y3.v.splice(+(y3.v[0] == "dark") - +(g5[0] == "dark"), g5.length);
            K3([...r, _e2(u3.length > 1 ? u3.slice(0, -1) + T3(JSON.stringify([u3, p6])) : u3 + "(" + ue2(p6) + ")", S3.a, p6, /@$/.test(u3))], i2);
          }
          c3 = r.lastIndexOf("(", c3 - 1);
        }
        r.length = c3 + 1;
      } else
        /[~@]/.test(a3) && e3[s4 + 1] == "(" && i2.unshift([]);
    }
    f5(!0), Se.set(e3, t3 = i2[0]);
  }
  return t3;
}
function Ve(e3, t3, r) {
  return t3.reduce((i2, n3, l2) => i2 + r(n3) + e3[l2 + 1], e3[0]);
}
function Z3(e3, t3) {
  return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve(e3, t3, (r) => ee2(r).trim()) : t3.filter(Boolean).reduce((r, i2) => r + ee2(i2), e3 ? ee2(e3) : "");
}
function ee2(e3) {
  let t3, r = "";
  if (e3 && typeof e3 == "object")
    if (Array.isArray(e3))
      (t3 = Z3(e3[0], e3.slice(1))) && (r += " " + t3);
    else
      for (let i2 in e3)
        e3[i2] && (r += " " + i2);
  else
    e3 != null && typeof e3 != "boolean" && (r += " " + e3);
  return r;
}
var pt2 = ze("@"), dt2 = ze("~");
function ze(e3) {
  return new Proxy(function(i2, ...n3) {
    return t3("", i2, n3);
  }, { get(r, i2) {
    return i2 in r ? r[i2] : function(l2, ...o3) {
      return t3(i2, l2, o3);
    };
  } });
  function t3(r, i2, n3) {
    return ue2(I2(r + e3 + "(" + Z3(i2, n3) + ")"));
  }
}
function G4(e3, t3) {
  return Array.isArray(e3) ? ve(Ve(e3, t3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof e3 == "string" ? ve(e3) : [e3];
}
var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function ve(e3) {
  let t3;
  e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], i2 = [r[0]], n3 = [];
  for (; t3 = We.exec(e3); )
    t3[4] && (r.shift(), n3.shift()), t3[3] ? (n3.unshift(t3[3]), r.unshift({}), i2.push(n3.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))) : t3[4] || (r[0][t3[1]] && (r.unshift({}), i2.push(n3.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))), r[0][t3[1]] = t3[2]);
  return i2;
}
function me(e3, ...t3) {
  var r;
  let i2 = G4(e3, t3), n3 = (i2.find((l2) => l2.label)?.label || "css") + T3(JSON.stringify(i2));
  return r = (l2, o3) => ye(i2.flatMap((s4) => de(s4, l2, o3, S3.o)), n3), pe.set(n3, r), n3;
}
var ht2 = new Proxy(function(e3, t3) {
  return Re("animation", e3, t3);
}, { get(e3, t3) {
  return t3 in e3 ? e3[t3] : function(i2, n3) {
    return Re(t3, i2, n3);
  };
} });
function Re(e3, t3, r) {
  return { toString() {
    return me({ label: e3, "@layer components": { ...typeof t3 == "object" ? t3 : { animation: t3 }, animationName: "" + r } });
  } };
}
function yt2(e3, t3, r) {
  return [e3, ie(t3, r)];
}
function ie(e3, t3) {
  return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r, i2) => ({ [e3]: t3 ? t3(r, i2) : le2(r, 1) }) : (r) => e3 || { [r[1]]: le2(r, 2) };
}
function le2(e3, t3, r = e3.slice(t3).find(Boolean) || e3.$$ || e3.input) {
  return e3.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function gt(e3, t3, r, i2) {
  return [e3, Ge(t3, r, i2)];
}
function Ge(e3, t3, r) {
  let i2 = typeof t3 == "string" ? (n3, l2) => ({ [t3]: r ? r(n3, l2) : n3._ }) : t3 || (({ 1: n3, _: l2 }, o3, s4) => ({ [n3 || s4]: l2 }));
  return (n3, l2) => {
    let o3 = ke(e3 || n3[1]), s4 = l2.theme(o3, n3.$$) ?? oe3(n3.$$, o3, l2);
    if (s4 != null)
      return n3._ = le2(n3, 0, s4), i2(n3, l2, o3);
  };
}
function mt2(e3, t3 = {}, r) {
  return [e3, Ye(t3, r)];
}
function Ye(e3 = {}, t3) {
  return (r, i2) => {
    let { section: n3 = ke(r[0]).replace("-", "") + "Color" } = e3, [l2, o3] = Ze(r.$$);
    if (!l2)
      return;
    let s4 = i2.theme(n3, l2) || oe3(l2, n3, i2);
    if (!s4 || typeof s4 == "object")
      return;
    let { opacityVariable: f5 = `--tw-${r[0].replace(/-$/, "")}-opacity`, opacitySection: a3 = n3.replace("Color", "Opacity"), property: c3 = n3, selector: u3 } = e3, p6 = i2.theme(a3, o3 || "DEFAULT") || o3 && oe3(o3, a3, i2), g5 = t3 || (({ _: $4 }) => {
      let A5 = He(c3, $4);
      return u3 ? { [u3]: A5 } : A5;
    });
    r._ = { value: P4(s4, { opacityVariable: f5 || void 0, opacityValue: p6 || void 0 }), color: ($4) => P4(s4, $4), opacityVariable: f5 || void 0, opacityValue: p6 || void 0 };
    let y3 = g5(r, i2);
    if (!r.dark) {
      let $4 = i2.d(n3, l2, s4);
      $4 && $4 !== s4 && (r._ = { value: P4($4, { opacityVariable: f5 || void 0, opacityValue: p6 || "1" }), color: (A5) => P4($4, A5), opacityVariable: f5 || void 0, opacityValue: p6 || void 0 }, y3 = { "&": y3, [i2.v("dark")]: g5(r, i2) });
    }
    return y3;
  };
}
function Ze(e3) {
  return (e3.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function He(e3, t3) {
  let r = {};
  return typeof t3 == "string" ? r[e3] = t3 : (t3.opacityVariable && t3.value.includes(t3.opacityVariable) && (r[t3.opacityVariable] = t3.opacityValue || "1"), r[e3] = t3.value), r;
}
function oe3(e3, t3, r) {
  if (e3[0] == "[" && e3.slice(-1) == "]") {
    if (e3 = se(he(e3.slice(1, -1), r.theme)), !t3)
      return e3;
    if (!(/color|fill|stroke/i.test(t3) && !(/^color:/.test(e3) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e3)) || /image/i.test(t3) && !(/^image:/.test(e3) || /^[a-z-]+\(/.test(e3)) || /weight/i.test(t3) && !(/^(number|any):/.test(e3) || /^\d+$/.test(e3)) || /position/i.test(t3) && /^(length|size):/.test(e3)))
      return e3.replace(/^[a-z-]+:/, "");
  }
}
function ke(e3) {
  return e3.replace(/-./g, (t3) => t3[1].toUpperCase());
}
function se(e3) {
  return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t3, r = "", i2, n3 = "") => se(r) + i2 + se(n3)) : e3.replace(/(^|[^\\])_+/g, (t3, r) => r + " ".repeat(t3.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t3) => t3.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
}
var Qe = Symbol();
var D5 = new Proxy(F5, { apply(e3, t3, r) {
  return B5(r[0]);
}, get(e3, t3) {
  let r = B5[t3];
  return typeof r == "function" ? function() {
    return r.apply(B5, arguments);
  } : r;
} });
var Rt = function e2(t3) {
  return new Proxy(function(i2, ...n3) {
    return xe2(t3, "", i2, n3);
  }, { get(r, i2) {
    return i2 === "bind" ? e2 : i2 in r ? r[i2] : function(l2, ...o3) {
      return xe2(t3, i2, l2, o3);
    };
  } });
}();
function xe2(e3, t3, r, i2) {
  return { toString() {
    let n3 = G4(r, i2), l2 = Y3(t3 + T3(JSON.stringify([t3, n3])));
    return (typeof e3 == "function" ? e3 : D5)(me({ [`@keyframes ${l2}`]: G4(r, i2) })), l2;
  } };
}

// https://esm.sh/v106/@twind/preset-tailwind@1.0.1/deno/preset-tailwind.js
var L4 = "inherit", U3 = "currentColor", j3 = "transparent", V4 = "#000", B6 = "#fff", H5 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, I3 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, M3 = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, P5 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, N4 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, G5 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, q3 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, Y4 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, X4 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, J2 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, K4 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, Q4 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, Z4 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, ee3 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, te = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, oe4 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, re3 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, ae4 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, ie2 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, ne3 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, le3 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, se2 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, S4 = { __proto__: null, inherit: L4, current: U3, transparent: j3, black: V4, white: B6, slate: H5, gray: I3, zinc: M3, neutral: P5, stone: N4, red: G5, orange: q3, amber: Y4, yellow: X4, lime: J2, green: K4, emerald: Q4, teal: Z4, cyan: ee3, sky: te, blue: oe4, indigo: re3, violet: ae4, purple: ie2, fuchsia: ne3, pink: le3, rose: se2 }, h2 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: S4, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...c(4, "rem", 4, 0.5, 0.5), ...c(12, "rem", 4, 5), 14: "3.5rem", ...c(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: n2("blur"), backdropBrightness: n2("brightness"), backdropContrast: n2("contrast"), backdropGrayscale: n2("grayscale"), backdropHueRotate: n2("hueRotate"), backdropInvert: n2("invert"), backdropOpacity: n2("opacity"), backdropSaturate: n2("saturate"), backdropSepia: n2("sepia"), backgroundColor: n2("colors"), backgroundImage: { none: "none" }, backgroundOpacity: n2("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...c(200, "", 100, 0, 50), ...c(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: n2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: n2("spacing"), borderWidth: { DEFAULT: "1px", ...f2(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: n2("colors"), caretColor: n2("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...c(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: n2("borderColor"), divideOpacity: n2("borderOpacity"), divideWidth: n2("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: n2("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 6), ...x3(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: n2("spacing"), gradientColorStops: n2("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...c(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: r }) => ({ ...r(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...c(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: n2("spacing"), placeholderColor: n2("colors"), placeholderOpacity: n2("opacity"), outlineColor: n2("colors"), outlineOffset: f2(8, "px"), outlineWidth: f2(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: n2("colors"), ringOffsetWidth: f2(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...f2(8, "px") }, rotate: { ...f2(2, "deg"), ...f2(12, "deg", 3), ...f2(180, "deg", 45) }, saturate: c(200, "", 100, 0, 50), scale: { ...c(150, "", 100, 0, 50), ...c(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: n2("spacing"), scrollPadding: n2("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...f2(2, "deg"), ...f2(12, "deg", 3) }, space: n2("spacing"), stroke: n2("colors"), strokeWidth: c(2), textColor: n2("colors"), textDecorationColor: n2("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...f2(8, "px") }, textUnderlineOffset: { auto: "auto", ...f2(8, "px") }, textIndent: n2("spacing"), textOpacity: n2("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: n2("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...c(50, "", 1, 0, 10), auto: "auto" } };
function x3(e3, r) {
  let a3 = {};
  do
    for (var i2 = 1; i2 < e3; i2++)
      a3[`${i2}/${e3}`] = Number((i2 / e3 * 100).toFixed(6)) + "%";
  while (++e3 <= r);
  return a3;
}
function f2(e3, r, a3 = 0) {
  let i2 = {};
  for (; a3 <= e3; a3 = 2 * a3 || 1)
    i2[a3] = a3 + r;
  return i2;
}
function c(e3, r = "", a3 = 1, i2 = 0, l2 = 1, d3 = {}) {
  for (; i2 <= e3; i2 += l2)
    d3[i2] = i2 / a3 + r;
  return d3;
}
function n2(e3) {
  return ({ theme: r }) => r(e3);
}
var C3 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${h2.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${h2.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } }, O2 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: e3, 2: r }, a3) => ({ "@layer overrides": { "&": { [e3]: oe3(`[${r}]`, e3, a3) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: e3 }, { h: r }) => [{ c: r(e3) }]), gt("aspect-", "aspectRatio"), yt2("container", (e3, { theme: r }) => {
  let { screens: a3 = r("screens"), center: i2, padding: l2 } = r("container"), d3 = { width: "100%", marginRight: i2 && "auto", marginLeft: i2 && "auto", ...m4("xs") };
  for (let w4 in a3) {
    let b4 = a3[w4];
    typeof b4 == "string" && (d3[Ce(b4)] = { "&": { maxWidth: b4, ...m4(w4) } });
  }
  return d3;
  function m4(w4) {
    let b4 = l2 && (typeof l2 == "string" ? l2 : l2[w4] || l2.DEFAULT);
    if (b4)
      return { paddingRight: b4, paddingLeft: b4 };
  }
}), gt("content-", "content", ({ _: e3 }) => ({ "--tw-content": e3, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: e3 }) => e3 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", y2), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: e3 = "", 2: r }) => ({ ["overscroll-behavior" + e3]: r })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: e3, _: r }) => ({ top: e3 != "-x" && r, right: e3 != "-y" && r, bottom: e3 != "-x" && r, left: e3 != "-y" && r })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", F6), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", D6), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", W5), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", D6), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", W5), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (e3) => y2(F6(e3))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", T4), yt2("(content|items|self)-", (e3) => ({ ["align-" + e3[1]]: T4(e3) })), yt2("(place-(content|items|self))-", ({ 1: e3, $$: r }) => ({ [e3]: ("wun".includes(r[3]) ? "space-" : "") + r })), gt("p([xytrbl])?(?:$|-)", "padding", u("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", u("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: e3, _: r }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[e3]]: `calc(${r} * calc(1 - var(--tw-space-${e3}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[e3]]: `calc(${r} * var(--tw-space-${e3}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", p2), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: e3, 2: r = "", 3: a3 }) => r == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a3 ? "numeric-fraction" : "pt".includes(r[0]) ? "numeric-spacing" : r ? "numeric-figure" : e3)]: e3, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: e3 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": e3 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: e3 }) => typeof e3 == "string" ? { fontSize: e3 } : { fontSize: e3[0], ...typeof e3[1] == "string" ? { lineHeight: e3[1] } : e3[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: !1, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: !1, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: e3 }) => `linear-gradient(to ${g2(e3, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-from": e3.value, "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${e3.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: e3 }) => e3 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: e3 }) => e3 + (e3 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", y2), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: e3, _: r }) => {
  let a3 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[e3] || [e3, e3];
  return { [`border-${g2(a3[0])}-radius`]: r, [`border-${g2(a3[1])}-radius`]: r };
}), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: e3, _: r }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (e3 || "-x")]: r, ["--tw-border-spacing" + (e3 || "-y")]: r, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, u("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", u("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": e3 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: e3 } })), yt2("divide-([xy]-reverse)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + e3]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: e3, _: r }) => {
  let a3 = { x: "lr", y: "tb" }[e3];
  return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${e3}-reverse`]: "0", [`border-${g2(a3[0])}Width`]: `calc(${r} * calc(1 - var(--tw-divide-${e3}-reverse)))`, [`border-${g2(a3[1])}Width`]: `calc(${r} * var(--tw-divide-${e3}-reverse))` } };
}), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: !1 }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: e3 }, { theme: r }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P4(r("ringOffsetColor", "", "#fff")), "--tw-ring-color": P4(r("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-shadow-color": e3.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: e3 }) => ({ "--tw-shadow": p2(e3), "--tw-shadow-colored": p2(e3).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...A3(), ...A3("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (e3, { theme: r }) => ({ transitionProperty: p2(e3), transitionTimingFunction: e3._ == "none" ? void 0 : p2(r("transitionTimingFunction", "")), transitionDuration: e3._ == "none" ? void 0 : p2(r("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", p2), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", p2), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", p2), gt("animate(?:$|-)", "animation", (e3, { theme: r, h: a3 }) => {
  let i2 = p2(e3), l2 = i2.split(" "), d3 = r("keyframes", l2[0]);
  return d3 ? { ["@keyframes " + (l2[0] = a3(l2[0]))]: d3, animation: l2.join(" ") } : { animation: i2 };
}), "(transform)-(none)", yt2("transform", $2), yt2("transform-(cpu|gpu)", ({ 1: e3 }) => ({ "--tw-transform": E(e3 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: e3, _: r }) => ({ ["--tw-scale" + (e3 || "-x")]: r, ["--tw-scale" + (e3 || "-y")]: r, ...$2() })), gt("-?(rotate)-", "rotate", k2), gt("-?(translate-[xy])-", "translate", k2), gt("-?(skew-[xy])-", "skew", k2), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", y2), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: e3 }) => ({ "scroll-snap-type": e3 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", u("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", u("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: e3, 2: r, 3: a3 }) => ({ [`--tw-${r ? "pan-x" : a3 ? "pan-y" : e3}`]: e3, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: !1, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: e3 }) => ({ x: "horizontal", y: "vertical" })[e3] || e3 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: !1, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: !1, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
function y2(e3) {
  return (typeof e3 == "string" ? e3 : e3[1]).replace(/-/g, " ").trim();
}
function F6(e3) {
  return (typeof e3 == "string" ? e3 : e3[1]).replace("col", "column");
}
function g2(e3, r = "-") {
  let a3 = [];
  for (let i2 of e3)
    a3.push({ t: "top", r: "right", b: "bottom", l: "left" }[i2]);
  return a3.join(r);
}
function p2(e3) {
  return e3 && "" + (e3._ || e3);
}
function T4({ $$: e3 }) {
  return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[e3[3] || ""] || "") + e3;
}
function u(e3, r = "") {
  return ({ 1: a3, _: i2 }) => {
    let l2 = { x: "lr", y: "tb" }[a3] || a3 + a3;
    return l2 ? { ...He(e3 + "-" + g2(l2[0]) + r, i2), ...He(e3 + "-" + g2(l2[1]) + r, i2) } : He(e3 + r, i2);
  };
}
function A3(e3 = "") {
  let r = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", e3 && "opacity", "saturate", "sepia", !e3 && "drop-shadow"].filter(Boolean), a3 = {};
  for (let i2 of r)
    a3[`--tw-${e3}${i2}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return a3 = { [`${e3}filter`]: r.map((i2) => `var(--tw-${e3}${i2})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a3 } }, [`(${e3}filter)-(none)`, yt2(`${e3}filter`, a3), ...r.map((i2) => gt(`${i2[0] == "h" ? "-?" : ""}(${e3}${i2})(?:$|-)`, i2, ({ 1: l2, _: d3 }) => ({ [`--tw-${l2}`]: b2(d3).map((m4) => `${i2}(${m4})`).join(" "), ...a3 })))];
}
function k2({ 1: e3, _: r }) {
  return { ["--tw-" + e3]: r, ...$2() };
}
function $2() {
  return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": E() } } };
}
function E(e3) {
  return [e3 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
}
function W5({ 1: e3, 2: r }) {
  return `${e3} ${r} / ${e3} ${r}`;
}
function D6({ 1: e3 }) {
  return `repeat(${e3},minmax(0,1fr))`;
}

// https://esm.sh/v106/notie@4.3.1/deno/notie.js
var Me2 = Object.create, xe3 = Object.defineProperty, He2 = Object.getOwnPropertyDescriptor, Se2 = Object.getOwnPropertyNames, we2 = Object.getPrototypeOf, Oe = Object.prototype.hasOwnProperty, Ae2 = (y3, o3) => () => (o3 || y3((o3 = { exports: {} }).exports, o3), o3.exports), De = (y3, o3, v2, b4) => {
  if (o3 && typeof o3 == "object" || typeof o3 == "function")
    for (let m4 of Se2(o3))
      !Oe.call(y3, m4) && m4 !== v2 && xe3(y3, m4, { get: () => o3[m4], enumerable: !(b4 = He2(o3, m4)) || b4.enumerable });
  return y3;
}, Ie = (y3, o3, v2) => (v2 = y3 != null ? Me2(we2(y3)) : {}, De(o3 || !y3 || !y3.__esModule ? xe3(v2, "default", { value: y3, enumerable: !0 }) : v2, y3)), ye2 = Ae2((ie4, pe2) => {
  (function(y3, o3) {
    typeof ie4 == "object" && typeof pe2 == "object" ? pe2.exports = o3() : typeof define == "function" && define.amd ? define([], o3) : typeof ie4 == "object" ? ie4.notie = o3() : y3.notie = o3();
  })(ie4, function() {
    return function(y3) {
      function o3(b4) {
        if (v2[b4])
          return v2[b4].exports;
        var m4 = v2[b4] = { i: b4, l: !1, exports: {} };
        return y3[b4].call(m4.exports, m4, m4.exports, o3), m4.l = !0, m4.exports;
      }
      var v2 = {};
      return o3.m = y3, o3.c = v2, o3.i = function(b4) {
        return b4;
      }, o3.d = function(b4, m4, ce4) {
        o3.o(b4, m4) || Object.defineProperty(b4, m4, { configurable: !1, enumerable: !0, get: ce4 });
      }, o3.n = function(b4) {
        var m4 = b4 && b4.__esModule ? function() {
          return b4.default;
        } : function() {
          return b4;
        };
        return o3.d(m4, "a", m4), m4;
      }, o3.o = function(b4, m4) {
        return Object.prototype.hasOwnProperty.call(b4, m4);
      }, o3.p = "", o3(o3.s = 1);
    }([function(y3, o3) {
      y3.exports = function(v2) {
        return v2.webpackPolyfill || (v2.deprecate = function() {
        }, v2.paths = [], v2.children || (v2.children = []), Object.defineProperty(v2, "loaded", { enumerable: !0, get: function() {
          return v2.l;
        } }), Object.defineProperty(v2, "id", { enumerable: !0, get: function() {
          return v2.i;
        } }), v2.webpackPolyfill = 1), v2;
      };
    }, function(y3, o3, v2) {
      "use strict";
      (function(b4) {
        var m4, ce4, re4, V6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A5) {
          return typeof A5;
        } : function(A5) {
          return A5 && typeof Symbol == "function" && A5.constructor === Symbol && A5 !== Symbol.prototype ? "symbol" : typeof A5;
        };
        (function(A5, u3) {
          V6(o3) === "object" && V6(b4) === "object" ? b4.exports = u3() : (ce4 = [], m4 = u3, re4 = typeof m4 == "function" ? m4.apply(o3, ce4) : m4, re4 !== void 0 && (b4.exports = re4));
        })(void 0, function() {
          return function(A5) {
            function u3(g5) {
              if (X6[g5])
                return X6[g5].exports;
              var T6 = X6[g5] = { i: g5, l: !1, exports: {} };
              return A5[g5].call(T6.exports, T6, T6.exports, u3), T6.l = !0, T6.exports;
            }
            var X6 = {};
            return u3.m = A5, u3.c = X6, u3.i = function(g5) {
              return g5;
            }, u3.d = function(g5, T6, B8) {
              u3.o(g5, T6) || Object.defineProperty(g5, T6, { configurable: !1, enumerable: !0, get: B8 });
            }, u3.n = function(g5) {
              var T6 = g5 && g5.__esModule ? function() {
                return g5.default;
              } : function() {
                return g5;
              };
              return u3.d(T6, "a", T6), T6;
            }, u3.o = function(g5, T6) {
              return Object.prototype.hasOwnProperty.call(g5, T6);
            }, u3.p = "", u3(u3.s = 0);
          }([function(A5, u3, X6) {
            function g5(t3, c3) {
              var s4 = {};
              for (var d3 in t3)
                c3.indexOf(d3) >= 0 || Object.prototype.hasOwnProperty.call(t3, d3) && (s4[d3] = t3[d3]);
              return s4;
            }
            Object.defineProperty(u3, "__esModule", { value: !0 });
            var T6 = typeof Symbol == "function" && V6(Symbol.iterator) === "symbol" ? function(t3) {
              return typeof t3 > "u" ? "undefined" : V6(t3);
            } : function(t3) {
              return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3 > "u" ? "undefined" : V6(t3);
            }, B8 = Object.assign || function(t3) {
              for (var c3 = 1; c3 < arguments.length; c3++) {
                var s4 = arguments[c3];
                for (var d3 in s4)
                  Object.prototype.hasOwnProperty.call(s4, d3) && (t3[d3] = s4[d3]);
              }
              return t3;
            }, J4 = { top: "top", bottom: "bottom" }, e3 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J4.top, force: J4.top, confirm: J4.top, input: J4.top, select: J4.bottom, date: J4.top } }, ge2 = u3.setOptions = function(t3) {
              e3 = B8({}, e3, t3, { classes: B8({}, e3.classes, t3.classes), ids: B8({}, e3.ids, t3.ids), positions: B8({}, e3.positions, t3.positions) });
            }, fe = function() {
              return new Promise(function(t3) {
                return setTimeout(t3, 0);
              });
            }, oe5 = function(t3) {
              return new Promise(function(c3) {
                return setTimeout(c3, 1e3 * t3);
              });
            }, R7 = function() {
              document.activeElement && document.activeElement.blur();
            }, W7 = function() {
              var t3 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c3) {
                var s4 = 16 * Math.random() | 0, d3 = c3 === "x" ? s4 : 3 & s4 | 8;
                return d3.toString(16);
              });
              return "notie-" + t3;
            }, le4 = { 1: e3.classes.backgroundSuccess, success: e3.classes.backgroundSuccess, 2: e3.classes.backgroundWarning, warning: e3.classes.backgroundWarning, 3: e3.classes.backgroundError, error: e3.classes.backgroundError, 4: e3.classes.backgroundInfo, info: e3.classes.backgroundInfo, 5: e3.classes.backgroundNeutral, neutral: e3.classes.backgroundNeutral }, me2 = function() {
              return e3.transitionSelector + " " + e3.transitionDuration + "s " + e3.transitionCurve;
            }, $4 = function(t3) {
              return t3.keyCode === 13;
            }, ee4 = function(t3) {
              return t3.keyCode === 27;
            }, K6 = function(t3, c3) {
              t3.classList.add(e3.classes.container), t3.style[c3] = "-10000px", document.body.appendChild(t3), t3.style[c3] = "-" + t3.offsetHeight + "px", t3.listener && window.addEventListener("keydown", t3.listener), fe().then(function() {
                t3.style.transition = me2(), t3.style[c3] = 0;
              });
            }, O4 = function(t3, c3) {
              var s4 = document.getElementById(t3);
              s4 && (s4.style[c3] = "-" + s4.offsetHeight + "px", s4.listener && window.removeEventListener("keydown", s4.listener), oe5(e3.transitionDuration).then(function() {
                s4.parentNode && s4.parentNode.removeChild(s4);
              }));
            }, te2 = function(t3, c3) {
              var s4 = document.createElement("div");
              s4.id = e3.ids.overlay, s4.classList.add(e3.classes.overlay), s4.classList.add(e3.classes.backgroundOverlay), s4.style.opacity = 0, t3 && e3.overlayClickDismiss && (s4.onclick = function() {
                O4(t3.id, c3), j5();
              }), document.body.appendChild(s4), fe().then(function() {
                s4.style.transition = me2(), s4.style.opacity = e3.overlayOpacity;
              });
            }, j5 = function() {
              var t3 = document.getElementById(e3.ids.overlay);
              t3.style.opacity = 0, oe5(e3.transitionDuration).then(function() {
                t3.parentNode && t3.parentNode.removeChild(t3);
              });
            }, F8 = u3.hideAlerts = function(t3) {
              var c3 = document.getElementsByClassName(e3.classes.alert);
              if (c3.length) {
                for (var s4 = 0; s4 < c3.length; s4++) {
                  var d3 = c3[s4];
                  O4(d3.id, d3.position);
                }
                t3 && oe5(e3.transitionDuration).then(function() {
                  return t3();
                });
              }
            }, he2 = u3.alert = function(t3) {
              var c3 = t3.type, s4 = c3 === void 0 ? 4 : c3, d3 = t3.text, i2 = t3.time, k4 = i2 === void 0 ? e3.alertTime : i2, H8 = t3.stay, S7 = H8 !== void 0 && H8, h3 = t3.position, p6 = h3 === void 0 ? e3.positions.alert || p6.top : h3;
              R7(), F8();
              var l2 = document.createElement("div"), f5 = W7();
              l2.id = f5, l2.position = p6, l2.classList.add(e3.classes.textbox), l2.classList.add(le4[s4]), l2.classList.add(e3.classes.alert), l2.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d3 + "</div>", l2.onclick = function() {
                return O4(f5, p6);
              }, l2.listener = function(n3) {
                ($4(n3) || ee4(n3)) && F8();
              }, K6(l2, p6), k4 && k4 < 1 && (k4 = 1), !S7 && k4 && oe5(k4).then(function() {
                return O4(f5, p6);
              });
            }, ke2 = u3.force = function(t3, c3) {
              var s4 = t3.type, d3 = s4 === void 0 ? 5 : s4, i2 = t3.text, k4 = t3.buttonText, H8 = k4 === void 0 ? "OK" : k4, S7 = t3.callback, h3 = t3.position, p6 = h3 === void 0 ? e3.positions.force || p6.top : h3;
              R7(), F8();
              var l2 = document.createElement("div"), f5 = W7();
              l2.id = f5;
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.textbox), n3.classList.add(e3.classes.backgroundInfo), n3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + i2 + "</div>";
              var r = document.createElement("div");
              r.classList.add(e3.classes.button), r.classList.add(le4[d3]), r.innerHTML = H8, r.onclick = function() {
                O4(f5, p6), j5(), S7 ? S7() : c3 && c3();
              }, l2.appendChild(n3), l2.appendChild(r), l2.listener = function(C5) {
                $4(C5) && r.click();
              }, K6(l2, p6), te2();
            }, Ce3 = u3.confirm = function(t3, c3, s4) {
              var d3 = t3.text, i2 = t3.submitText, k4 = i2 === void 0 ? "Yes" : i2, H8 = t3.cancelText, S7 = H8 === void 0 ? "Cancel" : H8, h3 = t3.submitCallback, p6 = t3.cancelCallback, l2 = t3.position, f5 = l2 === void 0 ? e3.positions.confirm || f5.top : l2;
              R7(), F8();
              var n3 = document.createElement("div"), r = W7();
              n3.id = r;
              var C5 = document.createElement("div");
              C5.classList.add(e3.classes.textbox), C5.classList.add(e3.classes.backgroundInfo), C5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d3 + "</div>";
              var x5 = document.createElement("div");
              x5.classList.add(e3.classes.button), x5.classList.add(e3.classes.elementHalf), x5.classList.add(e3.classes.backgroundSuccess), x5.innerHTML = k4, x5.onclick = function() {
                O4(r, f5), j5(), h3 ? h3() : c3 && c3();
              };
              var a3 = document.createElement("div");
              a3.classList.add(e3.classes.button), a3.classList.add(e3.classes.elementHalf), a3.classList.add(e3.classes.backgroundError), a3.innerHTML = S7, a3.onclick = function() {
                O4(r, f5), j5(), p6 ? p6() : s4 && s4();
              }, n3.appendChild(C5), n3.appendChild(x5), n3.appendChild(a3), n3.listener = function(E3) {
                $4(E3) ? x5.click() : ee4(E3) && a3.click();
              }, K6(n3, f5), te2(n3, f5);
            }, ve2 = function(t3, c3, s4) {
              var d3 = t3.text, i2 = t3.submitText, k4 = i2 === void 0 ? "Submit" : i2, H8 = t3.cancelText, S7 = H8 === void 0 ? "Cancel" : H8, h3 = t3.submitCallback, p6 = t3.cancelCallback, l2 = t3.position, f5 = l2 === void 0 ? e3.positions.input || f5.top : l2, n3 = g5(t3, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
              R7(), F8();
              var r = document.createElement("div"), C5 = W7();
              r.id = C5;
              var x5 = document.createElement("div");
              x5.classList.add(e3.classes.textbox), x5.classList.add(e3.classes.backgroundInfo), x5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d3 + "</div>";
              var a3 = document.createElement("input");
              a3.classList.add(e3.classes.inputField), a3.setAttribute("autocapitalize", n3.autocapitalize || "none"), a3.setAttribute("autocomplete", n3.autocomplete || "off"), a3.setAttribute("autocorrect", n3.autocorrect || "off"), a3.setAttribute("autofocus", n3.autofocus || "true"), a3.setAttribute("inputmode", n3.inputmode || "verbatim"), a3.setAttribute("max", n3.max || ""), a3.setAttribute("maxlength", n3.maxlength || ""), a3.setAttribute("min", n3.min || ""), a3.setAttribute("minlength", n3.minlength || ""), a3.setAttribute("placeholder", n3.placeholder || ""), a3.setAttribute("spellcheck", n3.spellcheck || "default"), a3.setAttribute("step", n3.step || "any"), a3.setAttribute("type", n3.type || "text"), a3.value = n3.value || "", n3.allowed && (a3.oninput = function() {
                var M5 = void 0;
                if (Array.isArray(n3.allowed)) {
                  for (var w4 = "", _3 = n3.allowed, P7 = 0; P7 < _3.length; P7++)
                    _3[P7] === "an" ? w4 += "0-9a-zA-Z" : _3[P7] === "a" ? w4 += "a-zA-Z" : _3[P7] === "n" && (w4 += "0-9"), _3[P7] === "s" && (w4 += " ");
                  M5 = new RegExp("[^" + w4 + "]", "g");
                } else
                  T6(n3.allowed) === "object" && (M5 = n3.allowed);
                a3.value = a3.value.replace(M5, "");
              });
              var E3 = document.createElement("div");
              E3.classList.add(e3.classes.button), E3.classList.add(e3.classes.elementHalf), E3.classList.add(e3.classes.backgroundSuccess), E3.innerHTML = k4, E3.onclick = function() {
                O4(C5, f5), j5(), h3 ? h3(a3.value) : c3 && c3(a3.value);
              };
              var D8 = document.createElement("div");
              D8.classList.add(e3.classes.button), D8.classList.add(e3.classes.elementHalf), D8.classList.add(e3.classes.backgroundError), D8.innerHTML = S7, D8.onclick = function() {
                O4(C5, f5), j5(), p6 ? p6(a3.value) : s4 && s4(a3.value);
              }, r.appendChild(x5), r.appendChild(a3), r.appendChild(E3), r.appendChild(D8), r.listener = function(M5) {
                $4(M5) ? E3.click() : ee4(M5) && D8.click();
              }, K6(r, f5), a3.focus(), te2(r, f5);
            };
            u3.input = ve2;
            var Ee2 = u3.select = function(t3, c3) {
              var s4 = t3.text, d3 = t3.cancelText, i2 = d3 === void 0 ? "Cancel" : d3, k4 = t3.cancelCallback, H8 = t3.choices, S7 = t3.position, h3 = S7 === void 0 ? e3.positions.select || h3.top : S7;
              R7(), F8();
              var p6 = document.createElement("div"), l2 = W7();
              p6.id = l2;
              var f5 = document.createElement("div");
              f5.classList.add(e3.classes.textbox), f5.classList.add(e3.classes.backgroundInfo), f5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + s4 + "</div>", p6.appendChild(f5), H8.forEach(function(r, C5) {
                var x5 = r.type, a3 = x5 === void 0 ? 1 : x5, E3 = r.text, D8 = r.handler, M5 = document.createElement("div");
                M5.classList.add(le4[a3]), M5.classList.add(e3.classes.button), M5.classList.add(e3.classes.selectChoice);
                var w4 = H8[C5 + 1];
                w4 && !w4.type && (w4.type = 1), w4 && w4.type === a3 && M5.classList.add(e3.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                  O4(l2, h3), j5(), D8();
                }, p6.appendChild(M5);
              });
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.backgroundNeutral), n3.classList.add(e3.classes.button), n3.innerHTML = i2, n3.onclick = function() {
                O4(l2, h3), j5(), k4 ? k4() : c3 && c3();
              }, p6.appendChild(n3), p6.listener = function(r) {
                ee4(r) && n3.click();
              }, K6(p6, h3), te2(p6, h3);
            }, Te = u3.date = function(t3, c3, s4) {
              var d3 = t3.value, i2 = d3 === void 0 ? /* @__PURE__ */ new Date() : d3, k4 = t3.submitText, H8 = k4 === void 0 ? "OK" : k4, S7 = t3.cancelText, h3 = S7 === void 0 ? "Cancel" : S7, p6 = t3.submitCallback, l2 = t3.cancelCallback, f5 = t3.position, n3 = f5 === void 0 ? e3.positions.date || n3.top : f5;
              R7(), F8();
              var r = "&#9662", C5 = document.createElement("div"), x5 = document.createElement("div"), a3 = document.createElement("div"), E3 = function(L7) {
                C5.innerHTML = e3.dateMonths[L7.getMonth()], x5.innerHTML = L7.getDate(), a3.innerHTML = L7.getFullYear();
              }, D8 = function(L7) {
                var N7 = new Date(i2.getFullYear(), i2.getMonth() + 1, 0).getDate(), Q6 = L7.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                Number(Q6) > N7 && (Q6 = N7.toString()), L7.target.textContent = Q6, Number(Q6) < 1 && (Q6 = "1"), i2.setDate(Number(Q6));
              }, M5 = function(L7) {
                var N7 = L7.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                L7.target.textContent = N7, i2.setFullYear(Number(N7));
              }, w4 = function(L7) {
                E3(i2);
              }, _3 = function(L7) {
                var N7 = new Date(i2.getFullYear(), i2.getMonth() + L7 + 1, 0).getDate();
                i2.getDate() > N7 && i2.setDate(N7), i2.setMonth(i2.getMonth() + L7), E3(i2);
              }, P7 = function(L7) {
                i2.setDate(i2.getDate() + L7), E3(i2);
              }, be = function(L7) {
                var N7 = i2.getFullYear() + L7;
                N7 < 0 ? i2.setFullYear(0) : i2.setFullYear(i2.getFullYear() + L7), E3(i2);
              }, Y6 = document.createElement("div"), de2 = W7();
              Y6.id = de2;
              var ue3 = document.createElement("div");
              ue3.classList.add(e3.classes.backgroundInfo);
              var I6 = document.createElement("div");
              I6.classList.add(e3.classes.dateSelectorInner);
              var Z6 = document.createElement("div");
              Z6.classList.add(e3.classes.button), Z6.classList.add(e3.classes.elementThird), Z6.classList.add(e3.classes.dateSelectorUp), Z6.innerHTML = r;
              var q6 = document.createElement("div");
              q6.classList.add(e3.classes.button), q6.classList.add(e3.classes.elementThird), q6.classList.add(e3.classes.dateSelectorUp), q6.innerHTML = r;
              var G8 = document.createElement("div");
              G8.classList.add(e3.classes.button), G8.classList.add(e3.classes.elementThird), G8.classList.add(e3.classes.dateSelectorUp), G8.innerHTML = r, C5.classList.add(e3.classes.element), C5.classList.add(e3.classes.elementThird), C5.innerHTML = e3.dateMonths[i2.getMonth()], x5.classList.add(e3.classes.element), x5.classList.add(e3.classes.elementThird), x5.setAttribute("contentEditable", !0), x5.addEventListener("input", D8), x5.addEventListener("blur", w4), x5.innerHTML = i2.getDate(), a3.classList.add(e3.classes.element), a3.classList.add(e3.classes.elementThird), a3.setAttribute("contentEditable", !0), a3.addEventListener("input", M5), a3.addEventListener("blur", w4), a3.innerHTML = i2.getFullYear();
              var ne4 = document.createElement("div");
              ne4.classList.add(e3.classes.button), ne4.classList.add(e3.classes.elementThird), ne4.innerHTML = r;
              var se3 = document.createElement("div");
              se3.classList.add(e3.classes.button), se3.classList.add(e3.classes.elementThird), se3.innerHTML = r;
              var ae5 = document.createElement("div");
              ae5.classList.add(e3.classes.button), ae5.classList.add(e3.classes.elementThird), ae5.innerHTML = r, Z6.onclick = function() {
                return _3(1);
              }, q6.onclick = function() {
                return P7(1);
              }, G8.onclick = function() {
                return be(1);
              }, ne4.onclick = function() {
                return _3(-1);
              }, se3.onclick = function() {
                return P7(-1);
              }, ae5.onclick = function() {
                return be(-1);
              };
              var z5 = document.createElement("div");
              z5.classList.add(e3.classes.button), z5.classList.add(e3.classes.elementHalf), z5.classList.add(e3.classes.backgroundSuccess), z5.innerHTML = H8, z5.onclick = function() {
                O4(de2, n3), j5(), p6 ? p6(i2) : c3 && c3(i2);
              };
              var U5 = document.createElement("div");
              U5.classList.add(e3.classes.button), U5.classList.add(e3.classes.elementHalf), U5.classList.add(e3.classes.backgroundError), U5.innerHTML = h3, U5.onclick = function() {
                O4(de2, n3), j5(), l2 ? l2(i2) : s4 && s4(i2);
              }, I6.appendChild(Z6), I6.appendChild(q6), I6.appendChild(G8), I6.appendChild(C5), I6.appendChild(x5), I6.appendChild(a3), I6.appendChild(ne4), I6.appendChild(se3), I6.appendChild(ae5), ue3.appendChild(I6), Y6.appendChild(ue3), Y6.appendChild(z5), Y6.appendChild(U5), Y6.listener = function(L7) {
                $4(L7) ? z5.click() : ee4(L7) && U5.click();
              }, K6(Y6, n3), te2(Y6, n3);
            };
            u3.default = { alert: he2, force: ke2, confirm: Ce3, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F8 };
          }]);
        });
      }).call(o3, v2(0)(y3));
    }]);
  });
}), je = Ie(ye2()), { default: Le, ...Ne2 } = je, Fe = Le !== void 0 ? Le : Ne2;

// https://esm.sh/v106/nanostores@0.7.1/deno/nanostores.js
var S5 = Symbol("clean");
var c2 = Symbol();

// https://esm.sh/v106/@nanostores/i18n@0.7.1/deno/i18n.js
function g3(r, n3) {
  if (typeof r == "string")
    return n3(r);
  {
    let e3 = {};
    for (let t3 in r)
      e3[t3] = g3(r[t3], n3);
    return e3;
  }
}
function p4(r) {
  return (n3) => {
    if (n3.transform) {
      let e3 = n3.transform;
      return n3 = n3.input, { input: n3, transform(t3, o3, s4) {
        let f5 = r(t3, o3, ...s4);
        return (...l2) => e3(t3, f5, l2);
      } };
    } else
      return { input: n3, transform(e3, t3, o3) {
        return r(e3, t3, ...o3);
      } };
  };
}
var N5 = p4((r, n3, e3) => g3(n3, (t3) => {
  for (let o3 in e3)
    t3 = t3.replace(new RegExp(`{${o3}}`, "g"), e3[o3]);
  return t3;
})), R4 = p4((r, n3, e3) => {
  let t3 = new Intl.PluralRules(r).select(e3);
  return t3 in n3 || (t3 = "many"), g3(n3[t3], (o3) => o3.replace(/{count}/g, e3));
});

// https://esm.sh/v106/hotkeys-js@3.10.1/deno/hotkeys-js.js
var M4 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function P6(e3, t3, i2, r) {
  e3.addEventListener ? e3.addEventListener(t3, i2, r) : e3.attachEvent && e3.attachEvent("on".concat(t3), function() {
    i2(window.event);
  });
}
function T5(e3, t3) {
  for (var i2 = t3.slice(0, t3.length - 1), r = 0; r < i2.length; r++)
    i2[r] = e3[i2[r].toLowerCase()];
  return i2;
}
function U4(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  for (var t3 = e3.split(","), i2 = t3.lastIndexOf(""); i2 >= 0; )
    t3[i2 - 1] += ",", t3.splice(i2, 1), i2 = t3.lastIndexOf("");
  return t3;
}
function G6(e3, t3) {
  for (var i2 = e3.length >= t3.length ? e3 : t3, r = e3.length >= t3.length ? t3 : e3, n3 = !0, a3 = 0; a3 < i2.length; a3++)
    r.indexOf(i2[a3]) === -1 && (n3 = !1);
  return n3;
}
var b3 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M4 ? 173 : 189, "=": M4 ? 61 : 187, ";": M4 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g4 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L5 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u2 = { 16: !1, 18: !1, 17: !1, 91: !1 }, s3 = {};
for (O3 = 1; O3 < 20; O3++)
  b3["f".concat(O3)] = 111 + O3;
var O3, f3 = [], A4 = !1, D7 = "all", H6 = [], C4 = function(t3) {
  return b3[t3.toLowerCase()] || g4[t3.toLowerCase()] || t3.toUpperCase().charCodeAt(0);
}, R5 = function(t3) {
  return Object.keys(b3).find(function(i2) {
    return b3[i2] === t3;
  });
}, V5 = function(t3) {
  return Object.keys(g4).find(function(i2) {
    return g4[i2] === t3;
  });
};
function F7(e3) {
  D7 = e3 || "all";
}
function E2() {
  return D7 || "all";
}
function X5() {
  return f3.slice(0);
}
function $3() {
  return f3.map(function(e3) {
    return R5(e3) || V5(e3) || String.fromCharCode(e3);
  });
}
function q5(e3) {
  var t3 = e3.target || e3.srcElement, i2 = t3.tagName, r = !0;
  return (t3.isContentEditable || (i2 === "INPUT" || i2 === "TEXTAREA" || i2 === "SELECT") && !t3.readOnly) && (r = !1), r;
}
function z3(e3) {
  return typeof e3 == "string" && (e3 = C4(e3)), f3.indexOf(e3) !== -1;
}
function J3(e3, t3) {
  var i2, r;
  e3 || (e3 = E2());
  for (var n3 in s3)
    if (Object.prototype.hasOwnProperty.call(s3, n3))
      for (i2 = s3[n3], r = 0; r < i2.length; )
        i2[r].scope === e3 ? i2.splice(r, 1) : r++;
  E2() === e3 && F7(t3 || "all");
}
function N6(e3) {
  var t3 = e3.keyCode || e3.which || e3.charCode, i2 = f3.indexOf(t3);
  if (i2 >= 0 && f3.splice(i2, 1), e3.key && e3.key.toLowerCase() === "meta" && f3.splice(0, f3.length), (t3 === 93 || t3 === 224) && (t3 = 91), t3 in u2) {
    u2[t3] = !1;
    for (var r in g4)
      g4[r] === t3 && (v[r] = !1);
  }
}
function Q5(e3) {
  if (typeof e3 > "u")
    Object.keys(s3).forEach(function(o3) {
      return delete s3[o3];
    });
  else if (Array.isArray(e3))
    e3.forEach(function(o3) {
      o3.key && S6(o3);
    });
  else if (typeof e3 == "object")
    e3.key && S6(e3);
  else if (typeof e3 == "string") {
    for (var t3 = arguments.length, i2 = new Array(t3 > 1 ? t3 - 1 : 0), r = 1; r < t3; r++)
      i2[r - 1] = arguments[r];
    var n3 = i2[0], a3 = i2[1];
    typeof n3 == "function" && (a3 = n3, n3 = ""), S6({ key: e3, scope: n3, method: a3, splitKey: "+" });
  }
}
var S6 = function(t3) {
  var i2 = t3.key, r = t3.scope, n3 = t3.method, a3 = t3.splitKey, o3 = a3 === void 0 ? "+" : a3, l2 = U4(i2);
  l2.forEach(function(c3) {
    var p6 = c3.split(o3), m4 = p6.length, y3 = p6[m4 - 1], d3 = y3 === "*" ? "*" : C4(y3);
    if (s3[d3]) {
      r || (r = E2());
      var K6 = m4 > 1 ? T5(g4, p6) : [];
      s3[d3] = s3[d3].filter(function(h3) {
        var w4 = n3 ? h3.method === n3 : !0;
        return !(w4 && h3.scope === r && G6(h3.mods, K6));
      });
    }
  });
};
function _(e3, t3, i2, r) {
  if (t3.element === r) {
    var n3;
    if (t3.scope === i2 || t3.scope === "all") {
      n3 = t3.mods.length > 0;
      for (var a3 in u2)
        Object.prototype.hasOwnProperty.call(u2, a3) && (!u2[a3] && t3.mods.indexOf(+a3) > -1 || u2[a3] && t3.mods.indexOf(+a3) === -1) && (n3 = !1);
      (t3.mods.length === 0 && !u2[16] && !u2[18] && !u2[17] && !u2[91] || n3 || t3.shortcut === "*") && t3.method(e3, t3) === !1 && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = !1, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = !0));
    }
  }
}
function k3(e3, t3) {
  var i2 = s3["*"], r = e3.keyCode || e3.which || e3.charCode;
  if (v.filter.call(this, e3)) {
    if ((r === 93 || r === 224) && (r = 91), f3.indexOf(r) === -1 && r !== 229 && f3.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h3) {
      var w4 = L5[h3];
      e3[h3] && f3.indexOf(w4) === -1 ? f3.push(w4) : !e3[h3] && f3.indexOf(w4) > -1 ? f3.splice(f3.indexOf(w4), 1) : h3 === "metaKey" && e3[h3] && f3.length === 3 && (e3.ctrlKey || e3.shiftKey || e3.altKey || (f3 = f3.slice(f3.indexOf(w4))));
    }), r in u2) {
      u2[r] = !0;
      for (var n3 in g4)
        g4[n3] === r && (v[n3] = !0);
      if (!i2)
        return;
    }
    for (var a3 in u2)
      Object.prototype.hasOwnProperty.call(u2, a3) && (u2[a3] = e3[L5[a3]]);
    e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (f3.indexOf(17) === -1 && f3.push(17), f3.indexOf(18) === -1 && f3.push(18), u2[17] = !0, u2[18] = !0);
    var o3 = E2();
    if (i2)
      for (var l2 = 0; l2 < i2.length; l2++)
        i2[l2].scope === o3 && (e3.type === "keydown" && i2[l2].keydown || e3.type === "keyup" && i2[l2].keyup) && _(e3, i2[l2], o3, t3);
    if (r in s3) {
      for (var c3 = 0; c3 < s3[r].length; c3++)
        if ((e3.type === "keydown" && s3[r][c3].keydown || e3.type === "keyup" && s3[r][c3].keyup) && s3[r][c3].key) {
          for (var p6 = s3[r][c3], m4 = p6.splitKey, y3 = p6.key.split(m4), d3 = [], K6 = 0; K6 < y3.length; K6++)
            d3.push(C4(y3[K6]));
          d3.sort().join("") === f3.sort().join("") && _(e3, p6, o3, t3);
        }
    }
  }
}
function W6(e3) {
  return H6.indexOf(e3) > -1;
}
function v(e3, t3, i2) {
  f3 = [];
  var r = U4(e3), n3 = [], a3 = "all", o3 = document, l2 = 0, c3 = !1, p6 = !0, m4 = "+", y3 = !1;
  for (i2 === void 0 && typeof t3 == "function" && (i2 = t3), Object.prototype.toString.call(t3) === "[object Object]" && (t3.scope && (a3 = t3.scope), t3.element && (o3 = t3.element), t3.keyup && (c3 = t3.keyup), t3.keydown !== void 0 && (p6 = t3.keydown), t3.capture !== void 0 && (y3 = t3.capture), typeof t3.splitKey == "string" && (m4 = t3.splitKey)), typeof t3 == "string" && (a3 = t3); l2 < r.length; l2++)
    e3 = r[l2].split(m4), n3 = [], e3.length > 1 && (n3 = T5(g4, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : C4(e3), e3 in s3 || (s3[e3] = []), s3[e3].push({ keyup: c3, keydown: p6, scope: a3, mods: n3, shortcut: r[l2], method: i2, key: r[l2], splitKey: m4, element: o3 });
  typeof o3 < "u" && !W6(o3) && window && (H6.push(o3), P6(o3, "keydown", function(d3) {
    k3(d3, o3);
  }, y3), A4 || (A4 = !0, P6(window, "focus", function() {
    f3 = [];
  }, y3)), P6(o3, "keyup", function(d3) {
    k3(d3, o3), N6(d3);
  }, y3));
}
function Y5(e3) {
  var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(s3).forEach(function(i2) {
    var r = s3[i2].filter(function(n3) {
      return n3.scope === t3 && n3.shortcut === e3;
    });
    r.forEach(function(n3) {
      n3 && n3.method && n3.method();
    });
  });
}
var j4 = { getPressedKeyString: $3, setScope: F7, getScope: E2, deleteScope: J3, getPressedKeyCodes: X5, isPressed: z3, filter: q5, trigger: Y5, unbind: Q5, keyMap: b3, modifier: g4, modifierMap: L5 };
for (x4 in j4)
  Object.prototype.hasOwnProperty.call(j4, x4) && (v[x4] = j4[x4]);
var x4;
typeof document < "u" && (B7 = window.hotkeys, v.noConflict = function(e3) {
  return e3 && window.hotkeys === v && (window.hotkeys = B7), v;
}, window.hotkeys = v);
var B7;

// https://esm.sh/v106/immersive-translate@1.0.5/deno/immersive-translate.js
var R6 = "poegempjloogba", L6 = "ension://";
var I5 = "rome-ext";
var z4 = "ch" + I5 + L6 + "cofdb" + R6 + "gkncekinflcnj";
var f4 = "Immersive Translate", G7 = class {
  #e = performance.now();
  reset() {
    this.#e = performance.now();
  }
  stop(e3) {
    let t3 = performance.now(), n3 = Math.round(t3 - this.#e);
    console.debug(f4 + " TIMING:", e3, "in", n3 + "ms"), this.#e = t3;
  }
}, H7 = class {
  #e = 1;
  get level() {
    return this.#e;
  }
  setLevel(e3) {
    switch (e3) {
      case "debug":
        this.#e = 0;
        break;
      case "info":
        this.#e = 1;
        break;
      case "warn":
        this.#e = 2;
        break;
      case "error":
        this.#e = 3;
        break;
      case "fatal":
        this.#e = 4;
        break;
    }
  }
  debug(...e3) {
    this.#e <= 0 && console.log(f4 + " DEBUG:", ...e3);
  }
  v(...e3) {
    this.#e <= 0 && console.log(f4 + " VERBOSE:", ...e3);
  }
  info(...e3) {
    this.#e <= 1 && console.log(f4 + " INFO:", ...e3);
  }
  l(...e3) {
    this.#e <= 1 && console.log(f4 + " TEMP INFO:", ...e3);
  }
  warn(...e3) {
    this.#e <= 2 && console.warn(f4 + " WARN:", ...e3);
  }
  error(...e3) {
    this.#e <= 3 && console.error(f4 + " ERROR:", ...e3);
  }
  fatal(...e3) {
    this.#e <= 4 && console.error(f4 + " FATAL:", ...e3);
  }
  timing() {
    return this.level === 0 ? new G7() : { reset: () => {
    }, stop: () => {
    } };
  }
}, _2 = new H7();

// deps.ts
var toast = Fe.alert;

// utils/source_language_url_pattern.ts
function handleSourceLanguageUrlPattern(url, language, currentSourceLanguageUrlPattern) {
  let currentMatches = [];
  currentSourceLanguageUrlPattern || (currentSourceLanguageUrlPattern = {}), language !== "auto" && !currentSourceLanguageUrlPattern[language] && (currentSourceLanguageUrlPattern[language] = {
    matches: [],
    excludeMatches: []
  }), currentMatches = language !== "auto" ? currentSourceLanguageUrlPattern[language].matches : [];
  let urlToLanguage = {}, allKeys = Object.keys(currentSourceLanguageUrlPattern);
  for (let key of allKeys) {
    let urlKeys = currentSourceLanguageUrlPattern[key].matches;
    for (let urlKey of urlKeys)
      urlToLanguage[urlKey] || (urlToLanguage[urlKey] = []), urlToLanguage[urlKey].push(key);
  }
  let currentMatchedlanguages = urlToLanguage[url];
  if (currentMatchedlanguages && currentMatchedlanguages.length > 0)
    for (let currentMatchedlanguage of currentMatchedlanguages)
      currentSourceLanguageUrlPattern[currentMatchedlanguage].matches.indexOf(url) > -1 && (currentSourceLanguageUrlPattern[currentMatchedlanguage] = {
        ...currentSourceLanguageUrlPattern[currentMatchedlanguage],
        matches: currentSourceLanguageUrlPattern[currentMatchedlanguage].matches.filter(
          (item) => item !== url
        )
      });
  let currentMatchSet = new Set(currentMatches);
  if (language === "auto")
    return {
      ...currentSourceLanguageUrlPattern
    };
  currentMatchSet.add(url);
  let newMatches = Array.from(currentMatchSet);
  return {
    ...currentSourceLanguageUrlPattern,
    [language]: {
      ...currentSourceLanguageUrlPattern[language],
      matches: newMatches
    }
  };
}

// utils/platform.ts
var DENO = "DENO", CHROME = "CHROME", FIREFOX = "FIREFOX";
function isBrowser(toCheck) {
  let currentBrowser = CHROME;
  try {
    let userAgent = navigator?.userAgent || "";
    /firefox/i.test(userAgent) ? currentBrowser = FIREFOX : /deno/i.test(userAgent) && (currentBrowser = DENO);
  } catch {
  }
  return toCheck === CHROME && currentBrowser === CHROME || toCheck === FIREFOX && currentBrowser === FIREFOX || toCheck === DENO && currentBrowser === DENO;
}
function isDeno() {
  return typeof Deno < "u";
}
function isFirefox() {
  return isBrowser(FIREFOX);
}
function isTouchDevice() {
  return !!navigator.maxTouchPoints || "ontouchstart" in document.documentElement;
}

// browser/mock_browser.ts
var listeners = {
  addListener: () => {
  },
  removeListener: () => {
  },
  hasListener: () => {
  }
}, mock_browser_default = {
  permissions: {
    contains: () => {
    },
    request: () => {
    }
  },
  runtime: {
    onMessage: listeners,
    openOptionsPage: () => {
    },
    lastError: {
      message: ""
    }
  },
  storage: {
    sync: {
      get: () => {
      },
      set: () => {
      }
    }
  },
  tabs: {
    onUpdated: listeners,
    query: () => {
    },
    sendMessage: () => {
    }
  }
};

// browser/browser.ts
var browserAPI;
isDeno() ? browserAPI = mock_browser_default : browserAPI = globalThis.immersiveTranslateBrowserAPI;

// locales/zh-CN.json
var zh_CN_default = {
  lineBreakMaxTextCount: "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "translate-pdf": "\u70B9\u51FB\u7FFB\u8BD1 PDF",
  "translate-firefox-local-pdf": "\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",
  enableLineBreak: "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  sponsorLabel: "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",
  help: "\u5E2E\u52A9",
  browserShortcutsNoteForFirefox: "Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",
  browserShortcutsNoteForChrome: "\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",
  browserShortcutsSucks: "\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",
  enableLineBreakDescription: "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8BD1",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u6253\u5F00\u8BBE\u7F6E\u9875",
  "browser.toggleTranslationMask": "\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
  "browser.translateLocalPdfFile": "\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",
  confirmResetConfig: "\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",
  translationLineBreakSettingTitle: "\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",
  smartLineBreak: "\u667A\u80FD\u6362\u884C",
  alwaysLineBreak: "\u603B\u662F\u6362\u884C",
  isShowContextMenu: "\u662F\u5426\u663E\u793A\u53F3\u952E\u83DC\u5355",
  toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
  betaDescription: "\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",
  translationLineBreakSettingDescription: "\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",
  tempTranslateDomainTitle: "\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",
  tempTranslateDomainDescription: "\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",
  xMinutes: "{count} \u5206\u949F",
  disabled: "\u7981\u7528",
  changelog: "\u66F4\u65B0\u65E5\u5FD7",
  toggleTranslatePageWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  toggleTranslationMaskWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",
  addUrlDescription: "\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
  general: "\u57FA\u672C\u8BBE\u7F6E",
  clickToExpandConfig: "\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",
  import: "\u4ECE\u6587\u4EF6\u5BFC\u5165",
  export: "\u5BFC\u51FA\u5230\u6587\u4EF6",
  toggleDebug: "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
  "fingers.0": "\u5173\u95ED",
  "fingers.2": "\u53CC\u6307\u89E6\u6478",
  "fingers.3": "\u4E09\u6307\u89E6\u6478",
  "fingers.4": "\u56DB\u6307\u89E6\u6478",
  "fingers.5": "\u4E94\u6307\u89E6\u6478",
  document: "\u6587\u6863",
  resetSuccess: "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
  resetThisSuccess: "\u91CD\u7F6E\u6210\u529F",
  saved: "\u4FDD\u5B58\u6210\u529F",
  successImportConfig: "\u6210\u529F\u5BFC\u5165\u914D\u7F6E",
  goAdvancedSettings: "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
  goAdvancedInterfaceSettings: "\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",
  advanced: "\u8FDB\u9636\u8BBE\u7F6E",
  advancedDescription: "\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",
  developer: "\u5F00\u53D1\u8005\u8BBE\u7F6E",
  donateCafe: "\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",
  feedback: "\u95EE\u9898\u53CD\u9988",
  toggleTranslatePage: "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  translateToThePageEndImmediatelyDescription: "\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",
  translationAreaDescription: "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "the number of characters to be translated first": "\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF",
  "interface language": "\u754C\u9762\u8BED\u8A00",
  "display both the original text and the translation": "\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587",
  "keyboard shortcuts": "\u952E\u76D8\u5FEB\u6377\u952E",
  modify: "\u4FEE\u6539\u5FEB\u6377\u952E",
  reset: "\u91CD\u7F6E",
  close: "\u5173\u95ED",
  homepage: "\u4E3B\u9875",
  more: "\u66F4\u591A",
  translateTheWholePage: "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",
  changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",
  changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",
  translateTheMainPage: "\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  "The local rules are up to date": "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:",
  "Checking for updates": "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",
  localVersionIsTooOld: "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",
  badUserscriptBrowser: "\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",
  foundNewVersion: "\u53D1\u73B0\u65B0\u7248\u672C",
  theLocalExtensionIsUpToUpdate: "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",
  failToSyncRules: "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",
  retry: "\u70B9\u6B64\u91CD\u8BD5",
  failedReason: "\u5931\u8D25\u539F\u56E0",
  currentRuleVersion: "\u5F53\u524D\u89C4\u5219\u7248\u672C",
  calculating: "\u8BA1\u7B97\u4E2D",
  unknownError: "\u672A\u77E5\u9519\u8BEF",
  canNotFetchRemoteRule: "\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",
  enableAlphaSuccess: "\u5DF2\u5F00\u542FAlpha\u529F\u80FD",
  disableAlphaSuccess: "\u5DF2\u5173\u95EDAlpha\u529F\u80FD",
  cacheSize: "\u7F13\u5B58\u5927\u5C0F\uFF1A",
  cleaning: "\u6E05\u7406\u4E2D",
  cleanCache: "\u6E05\u9664\u7F13\u5B58",
  options: "\u8BBE\u7F6E",
  about: "\u5173\u4E8E",
  service: "\u7FFB\u8BD1\u670D\u52A1",
  needAction: "(\u53BB\u8BBE\u7F6E)",
  goSettings: "\u53BB\u8BBE\u7F6E",
  needActionForOptions: "(\u9700\u8BBE\u7F6E)",
  translationEngine: "\u5F15\u64CE\u9009\u9879",
  sourceLanguage: "\u539F\u6587\u8BED\u8A00",
  target: "\u76EE\u6807\u8BED\u8A00",
  popupSourceLanguage: "\u539F\u6587\u8BED\u8A00",
  popupTarget: "\u76EE\u6807\u8BED\u8A00",
  popupService: "\u7FFB\u8BD1\u670D\u52A1",
  forThisSite: "\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",
  alwaysTranslateSomeLanguage: "\u603B\u662F\u7FFB\u8BD1 {language}",
  neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8BD1 {language}",
  alwaysTranslateSomeSite: "\u603B\u662F\u7FFB\u8BD1 {hostname}",
  neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",
  add: "\u6DFB\u52A0",
  default: "\u9ED8\u8BA4",
  forThisLanguage: "\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A",
  "add url": "\u8F93\u5165URL",
  edit: "\u7F16\u8F91",
  "translate other languages into specific language": "\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00",
  "select translation service": "\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",
  language: "\u8BED\u8A00",
  "show-original": "\u663E\u793A\u539F\u6587",
  translate: "\u7FFB\u8BD1",
  Translated: "\u5DF2\u7FFB\u8BD1",
  Translating: "\u7FFB\u8BD1\u4E2D",
  Error: "\u9519\u8BEF",
  allowCacheTranslations: "\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09",
  "translation display": "\u8BD1\u6587\u663E\u793A\u6837\u5F0F",
  "select diplay style": "\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",
  interface: "\u754C\u9762\u8BBE\u7F6E",
  import_export: "\u5BFC\u5165/\u5BFC\u51FA",
  import_export_title: "\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",
  syncToGoogleDrive: "\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",
  previewAllThemes: "\u9884\u89C8\u5168\u90E8\u6837\u5F0F",
  "translationTheme.none": "\u65E0",
  "translationTheme.dashed": "\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.dotted": "\u70B9\u72B6\u4E0B\u5212\u7EBF",
  "translationTheme.dashedBorder": "\u865A\u7EBF\u8FB9\u6846",
  "translationTheme.underline": "\u76F4\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7EB8\u9634\u5F71\u6548\u679C",
  "translationTheme.dividingLine": "\u5206\u5272\u7EBF",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.marker": "\u9A6C\u514B\u7B14",
  "translationTheme.blockquote": "\u5F15\u7528\u6837\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u4F53",
  "translationTheme.bold": "\u52A0\u7C97",
  "translationTheme.thinDashed": "\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.nativeDashed": "\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.nativeDotted": "\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF",
  "translationTheme.nativeUnderline": "\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.wavy": "\u6CE2\u6D6A\u7EBF",
  "translationServices.tencent": "\u817E\u8BAF\u7FFB\u8BD1\u541B",
  "translationServices.google": "\u8C37\u6B4C\u7FFB\u8BD1",
  "translationServices.bai": "\u767E\u5EA6(Alpha)",
  "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8BD1",
  "translationServices.aliyun": "\u963F\u91CC\u4E91\u7FFB\u8BD1",
  "translationServices.volc": "\u706B\u5C71\u7FFB\u8BD1",
  "translationServices.deeplx": "DeeplX(Beta)",
  "translationServices.bing": "\u5FC5\u5E94\u7FFB\u8BD1",
  "translationServices.deepl": "Deepl",
  "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8BD1",
  "translationServices.azure": "\u5FAE\u8F6F\u7FFB\u8BD1",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "\u4E9A\u9A6C\u900A\u7FFB\u8BD1",
  "translationServices.mock": "\u6A21\u62DF\u7FFB\u8BD1",
  "translationServices.mock2": "\u6A21\u62DF\u7FFB\u8BD12",
  "translationServices.caiyun": "\u5F69\u4E91\u5C0F\u8BD1",
  "translationServices.volcAlpha": "\u706B\u5C71 (Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8BD1",
  "translationServices.transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
  "translationServices.niu": "\u5C0F\u725B\u7FFB\u8BD1",
  "translationServices.d": "D (Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translate title": "\u7FFB\u8BD1\u9875\u9762\u6807\u9898",
  "always languages": "\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",
  neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",
  neverTranslateTheFollowingLanguagesDescription: "\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",
  enableUserscriptPagePopup: "\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",
  enableUserscriptPagePopupDescription: "\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
  "always translate the following languages": "\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
  "always sites": "\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740",
  "always translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740",
  "never translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1",
  "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
  KeyAndConfigurationTutorial: "\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
  useAboveStyleForTheseSites: "\u603B\u662F\u4F7F\u7528 {theme} \u8BD1\u6587\u6837\u5F0F\u7684\u7F51\u7AD9",
  currentUrl: "\u5F53\u524D\u7F51\u5740",
  confirm: "\u4FDD\u5B58",
  cancel: "\u53D6\u6D88",
  delete: "\u5220\u9664",
  "languages.auto": "\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",
  syncToCloud: "\u540C\u6B65\u5230\u4E91\u7AEF",
  syncToCloudDescription: "\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",
  authFail: "\u6388\u6743\u5931\u8D25",
  syncTitle: "\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",
  import_hint: "\u5BFC\u5165",
  upload: "\u4E0A\u4F20",
  revokeAuth: "\u64A4\u9500\u6388\u6743",
  uploadFail: "\u4E0A\u4F20\u5931\u8D25",
  download: "\u4E0B\u8F7D",
  importSuccess: "\u5BFC\u5165\u6210\u529F",
  importFail: "\u5BFC\u5165\u5931\u8D25",
  deleteFail: "\u5220\u9664\u5931\u8D25",
  backupToCloud: "\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",
  create_new_backup: "\u65B0\u589E\u5907\u4EFD\u8282\u70B9",
  maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",
  backupToCloudDescription: "\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",
  successSyncConfig: "\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",
  syncFail: "\u540C\u6B65\u5931\u8D25",
  updatedAt: "\u66F4\u65B0\u4E8E {date}",
  lastSyncedAt: "\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",
  downloadFail: "\u4E0B\u8F7D\u5931\u8D25",
  clickToDownload: "\u70B9\u51FB\u4E0B\u8F7D",
  aboutLabel: "\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9",
  "browser.openAboutPage": "\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9",
  aboutIntro: "\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2>\u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",
  projectHomepage: "\u9879\u76EE\u4E3B\u9875",
  joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",
  joinTelegramChannel: "\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",
  feedbackAndJoin: "\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",
  autoSync: "\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",
  loadingThemeTitle: "Loading \u6837\u5F0F",
  loadingThemeDescription: "\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F",
  "loadingTheme.spinner": "\u8F6C\u5708\u52A8\u753B",
  "loadingTheme.text": "\u9759\u6001\u6587\u5B57 ... ",
  "loadingTheme.none": "\u4E0D\u663E\u793A",
  developerDescription: "\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863",
  "edit border color": "\u4FEE\u6539\u8FB9\u6846\u989C\u8272",
  successSyncButNoChange: "\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",
  customTheme: "\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F",
  "customThemeLabel.borderColor": "\u8FB9\u6846\u989C\u8272",
  "customThemeLabel.backgroundColor": "\u80CC\u666F\u989C\u8272",
  "customThemeLabel.textColor": "\u6587\u5B57\u989C\u8272",
  "customThemeLabel.zoom": "\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",
  resetToDefaultColor: "\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272"
};

// locales/zh-TW.json
var zh_TW_default = {
  lineBreakMaxTextCount: "\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF",
  "translate-pdf": "\u9EDE\u64CA\u7FFB\u8B6F PDF",
  "translate-firefox-local-pdf": "\u9EDE\u64CA\u4E0A\u50B3 PDF",
  enableLineBreak: "\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",
  sponsorLabel: "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",
  help: "\u5E6B\u52A9",
  browserShortcutsNoteForFirefox: "Firefox \u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762 `about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",
  browserShortcutsNoteForChrome: "\u985E Chrome \u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5145\u529F\u80FD\u9801\u9762\uFF0C\u5728\u2019\u64F4\u5145\u529F\u80FD\u2018\u9762\u677F(\u2019chrome://extensions/shortcuts\u2018)\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",
  browserShortcutsSucks: "\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",
  enableLineBreakDescription: "\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8B6F",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u6253\u958B\u8A2D\u7F6E\u9801",
  "browser.toggleTranslationMask": "\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",
  "browser.translateLocalPdfFile": "\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",
  confirmResetConfig: "\u4F60\u78BA\u5B9A\u8981\u91CD\u7F6E\u8A2D\u7F6E\u55CE\uFF1F",
  translationLineBreakSettingTitle: "\u8B6F\u6587\u63DB\u884C\u8A2D\u7F6E",
  smartLineBreak: "\u667A\u80FD\u63DB\u884C",
  alwaysLineBreak: "\u7E3D\u662F\u63DB\u884C",
  isShowContextMenu: "\u5275\u5EFA\u53F3\u9375\u83DC\u55AE",
  toggleBeta: "\u958B\u555F Beta \u6E2C\u8A66\u7279\u6027",
  betaDescription: "\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",
  translationLineBreakSettingDescription: "\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",
  tempTranslateDomainTitle: "\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",
  tempTranslateDomainDescription: "\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",
  xMinutes: "{count} \u5206\u9418",
  disabled: "\u505C\u7528",
  changelog: "\u66F4\u65B0\u65E5\u8A8C",
  toggleTranslatePageWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  toggleTranslationMaskWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",
  addUrlDescription: "\u53EF\u4EE5\u70BA\u57DF\u540D\uFF0C\u540C\u6642\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
  general: "\u57FA\u672C\u8A2D\u7F6E",
  clickToExpandConfig: "\u5C55\u958B\u7576\u524D\u914D\u7F6E",
  import: "\u5F9E\u6587\u4EF6\u532F\u5165",
  export: "\u5C0E\u51FA\u5230\u6587\u4EF6",
  toggleDebug: "\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",
  "fingers.0": "\u95DC\u9589",
  "fingers.2": "\u96D9\u6307\u89F8\u6478",
  "fingers.3": "\u4E09\u6307\u89F8\u6478",
  "fingers.4": "\u56DB\u6307\u89F8\u6478",
  "fingers.5": "\u4E94\u6307\u89F8\u6478",
  document: "\u6587\u6A94",
  resetSuccess: "\u91CD\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",
  resetThisSuccess: "\u91CD\u7F6E\u6210\u529F",
  saved: "\u6210\u529F\u5132\u5B58",
  successImportConfig: "\u6210\u529F\u532F\u5165\u8A2D\u5B9A",
  goAdvancedSettings: "\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",
  goAdvancedInterfaceSettings: "\u53BB\u9AD8\u7D1A\u81EA\u5B9A\u7FA9\u8A2D\u7F6E\u9801\u9762",
  advanced: "\u9032\u968E\u8A2D\u7F6E",
  advancedDescription: "\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",
  developer: "\u958B\u767C\u8005\u8A2D\u7F6E",
  donateCafe: "\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",
  feedback: "\u554F\u984C\u53CD\u994B",
  toggleTranslatePage: "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  translateToThePageEndImmediatelyDescription: "\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",
  translationAreaDescription: "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "the number of characters to be translated first": "\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF",
  "interface language": "\u754C\u9762\u8A9E\u8A00",
  "display both the original text and the translation": "\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587",
  "keyboard shortcuts": "\u9375\u76E4\u5FEB\u6377\u9375",
  modify: "\u4FEE\u6539\u5FEB\u6377\u9375",
  reset: "\u91CD\u8A2D",
  close: "\u95DC\u9589",
  homepage: "\u4E3B\u9801",
  more: "\u66F4\u591A",
  translateTheWholePage: "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",
  changeToTranslateTheWholePage: "\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",
  changeToTranslateTheMainPage: "\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",
  translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",
  translateTheMainPage: "\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",
  "The local rules are up to date": "\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A",
  "Checking for updates": "\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",
  localVersionIsTooOld: "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",
  badUserscriptBrowser: "\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",
  foundNewVersion: "\u767C\u73FE\u65B0\u7248\u672C",
  theLocalExtensionIsUpToUpdate: "\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",
  failToSyncRules: "\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",
  retry: "\u9EDE\u6B64\u91CD\u8A66",
  failedReason: "\u5931\u6557\u539F\u56E0",
  currentRuleVersion: "\u7576\u524D\u898F\u5247\u7248\u672C",
  calculating: "\u8A08\u7B97\u4E2D",
  unknownError: "\u672A\u77E5\u932F\u8AA4",
  canNotFetchRemoteRule: "\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",
  enableAlphaSuccess: "\u5DF2\u958B\u5553Alpha\u529F\u80FD",
  disableAlphaSuccess: "\u5DF2\u95DC\u9589Alpha\u529F\u80FD",
  cacheSize: "\u7DE9\u5B58\u5927\u5C0F\uFF1A",
  cleaning: "\u6E05\u7406\u4E2D",
  cleanCache: "\u6E05\u9664\u7DE9\u5B58",
  options: "\u9078\u9805",
  about: "\u95DC\u65BC",
  service: "\u7FFB\u8B6F\u670D\u52D9",
  needAction: "\uFF08\u53BB\u8A2D\u7F6E\uFF09",
  goSettings: "\u53BB\u8A2D\u7F6E",
  needActionForOptions: "(\u9700\u8A2D\u7F6E)",
  translationEngine: "\u5F15\u64CE\u9078\u9805",
  sourceLanguage: "\u539F\u6587\u8A9E\u8A00",
  target: "\u76EE\u6A19\u8A9E\u8A00",
  popupSourceLanguage: "\u539F\u6587\u8A9E\u8A00",
  popupTarget: "\u76EE\u6A19\u8A9E\u8A00",
  popupService: "\u7FFB\u8B6F\u670D\u52D9",
  forThisSite: "\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",
  alwaysTranslateSomeLanguage: "\u603B\u662F\u7FFB\u8BD1 {language}",
  neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8BD1 {language}",
  alwaysTranslateSomeSite: "\u7E3D\u662F\u7FFB\u8B6F {hostname}",
  neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8B6F {hostname}",
  add: "\u589E\u52A0",
  default: "\u9ED8\u8A8D",
  forThisLanguage: "\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A",
  "add url": "\u8F38\u5165URL",
  edit: "\u7DE8\u8F2F",
  "translate other languages into specific language": "\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00",
  "select translation service": "\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",
  language: "\u8A9E\u8A00",
  "show-original": "\u986F\u793A\u539F\u6587",
  translate: "\u7FFB\u8B6F",
  Translated: "\u5DF2\u7FFB\u8B6F",
  Translating: "\u7FFB\u8B6F\u4E2D",
  Error: "\u932F\u8AA4",
  allowCacheTranslations: "\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09",
  "translation display": "\u8B6F\u6587\u986F\u793A\u6A23\u5F0F",
  "select diplay style": "\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",
  interface: "\u754C\u9762\u8A2D\u7F6E",
  import_export: "\u5C0E\u5165/\u5C0E\u51FA",
  import_export_title: "\u5C0E\u5165/\u5C0E\u51FA\u914D\u7F6E",
  syncToGoogleDrive: "\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",
  previewAllThemes: "\u9810\u89BD\u5168\u90E8\u6A23\u5F0F",
  "translationTheme.none": "\u7121",
  "translationTheme.dashed": "\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.dotted": "\u9EDE\u72C0\u4E0B\u5283\u7DDA",
  "translationTheme.dashedBorder": "\u865B\u7DDA\u908A\u6846",
  "translationTheme.underline": "\u76F4\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7D19\u9670\u5F71\u6548\u679C",
  "translationTheme.dividingLine": "\u5206\u5272\u7DDA",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.marker": "\u99AC\u514B\u7B46",
  "translationTheme.blockquote": "\u5F15\u7528\u6A23\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u9AD4",
  "translationTheme.bold": "\u7C97\u9AD4",
  "translationTheme.thinDashed": "\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.nativeDashed": "\u7CFB\u7D71\u81EA\u5E36\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.nativeDotted": "\u7CFB\u7D71\u81EA\u5E36\u9EDE\u72C0\u4E0B\u5283\u7DDA",
  "translationTheme.nativeUnderline": "\u7CFB\u7D71\u81EA\u5E36\u76F4\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.wavy": "\u6CE2\u6D6A\u7DDA",
  "translationServices.tencent": "\u9A30\u8A0A\u7FFB\u8B6F\u541B",
  "translationServices.google": "\u8C37\u6B4C\u7FFB\u8B6F",
  "translationServices.bai": "\u767E\u5EA6(Alpha)",
  "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8B6F",
  "translationServices.aliyun": "\u963F\u91CC\u96F2\u7FFB\u8B6F",
  "translationServices.volc": "\u706B\u5C71\u7FFB\u8B6F",
  "translationServices.deeplx": "DeeplX(Beta)",
  "translationServices.bing": "\u5FC5\u61C9\u7FFB\u8B6F",
  "translationServices.deepl": "Deepl",
  "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8B6F",
  "translationServices.azure": "\u5FAE\u8EDF\u7FFB\u8B6F",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "\u4E9E\u99AC\u905C\u7FFB\u8B6F",
  "translationServices.mock": "\u6A21\u64EC\u7FFB\u8B6F",
  "translationServices.mock2": "\u6A21\u64EC\u7FFB\u8B6F2",
  "translationServices.caiyun": "\u5F69\u96F2\u5C0F\u8B6F",
  "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8B6F(Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8B6F",
  "translationServices.transmart": "\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F",
  "translationServices.niu": "\u5C0F\u725B\u7FFB\u8B6F",
  "translationServices.d": "Deepl(Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translate title": "\u7FFB\u8B6F\u9801\u9762\u6A19\u984C",
  "always languages": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",
  neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
  neverTranslateTheFollowingLanguagesDescription: "\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",
  enableUserscriptPagePopup: "\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",
  enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
  "always translate the following languages": "\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "always sites": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "always translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "never translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F",
  "please refer to": "\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",
  KeyAndConfigurationTutorial: "\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
  useAboveStyleForTheseSites: "\u603B\u662F\u4F7F\u7528 {theme} \u8BD1\u6587\u6837\u5F0F\u7684\u7F51\u7AD9",
  currentUrl: "\u7576\u524D\u7DB2\u5740",
  confirm: "\u5132\u5B58",
  cancel: "\u53D6\u6D88",
  delete: "\u522A\u9664",
  "languages.auto": "\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",
  syncToCloud: "\u540C\u6B65\u5230\u96F2\u7AEF",
  syncToCloudDescription: "\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",
  authFail: "\u6388\u6B0A\u5931\u6557",
  syncTitle: "\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",
  import_hint: "\u5C0E\u5165",
  upload: "\u4E0A\u50B3",
  revokeAuth: "\u64A4\u92B7\u6388\u6B0A",
  uploadFail: "\u4E0A\u50B3\u5931\u6557",
  download: "\u4E0B\u8F09",
  importSuccess: "\u5C0E\u5165\u6210\u529F",
  importFail: "\u5C0E\u5165\u5931\u6557",
  deleteFail: "\u522A\u9664\u5931\u6557",
  backupToCloud: "\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6587\u4EF6",
  create_new_backup: "\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",
  maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE, \u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",
  backupToCloudDescription: "\u624B\u52D5\u4E0A\u50B3\u6216\u6062\u5FA9\u5099\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8A313\u500B\u4E0D\u540C\u7684\u5099\u4EFD",
  successSyncConfig: "\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",
  syncFail: "\u540C\u6B65\u5931\u6557",
  updatedAt: "\u66F4\u65B0\u65BC {date}",
  lastSyncedAt: "\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",
  downloadFail: "\u4E0B\u8F09\u5931\u6557",
  clickToDownload: "\u9EDE\u64CA\u4E0B\u8F09",
  aboutLabel: "\u95DC\u65BC - \u53CD\u994B - \u8D0A\u52A9",
  "browser.openAboutPage": "\u95DC\u65BC/\u53CD\u994B/\u8D0A\u52A9",
  aboutIntro: "\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2>\u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",
  projectHomepage: "\u9805\u76EE\u4E3B\u9801",
  joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",
  joinTelegramChannel: "\u95DC\u6CE8 Telegram \u983B\u9053\u7372\u53D6\u6700\u65B0\u66F4\u65B0",
  feedbackAndJoin: "\u554F\u984C\u53CD\u994B/\u52A0\u7FA4",
  autoSync: "\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",
  loadingThemeTitle: "Loading \u6A23\u5F0F",
  loadingThemeDescription: "\u8A2D\u7F6E\u7B49\u5F85\u8B6F\u6587\u52A0\u8F09\u6642\u7684\u6A23\u5F0F",
  "loadingTheme.spinner": "\u8F6C\u5708\u52A8\u753B",
  "loadingTheme.text": "\u975C\u614B\u6587\u5B57 ... ",
  "loadingTheme.none": "\u4E0D\u986F\u793A",
  developerDescription: "\u53EF\u4EE5\u9EDE\u64CA<1>\u9019\u88E1</1>\u67E5\u770B\u9AD8\u7D1A\u81EA\u5B9A\u7FA9\u76F8\u95DC\u7684\u6587\u6A94",
  "edit border color": "\u4FEE\u6539\u908A\u6846\u984F\u8272",
  successSyncButNoChange: "\u7576\u524D\u914D\u7F6E\u8207\u96F2\u7AEF\u4E00\u81F4",
  customTheme: "\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F",
  "customThemeLabel.borderColor": "\u8FB9\u6846\u989C\u8272",
  "customThemeLabel.backgroundColor": "\u80CC\u666F\u989C\u8272",
  "customThemeLabel.textColor": "\u6587\u5B57\u989C\u8272",
  "customThemeLabel.zoom": "\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",
  resetToDefaultColor: "\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272"
};

// locales/en.json
var en_default = {
  lineBreakMaxTextCount: "Maximum number of characters allowed per sentence after line break",
  "translate-pdf": "Click to translate PDF",
  "translate-firefox-local-pdf": "Click to upload Pdf",
  enableLineBreak: "Whether to turn on automatic line wrapping for long paragraphs",
  sponsorLabel: "Sponsoring developers from $1 (monthly or one-time)",
  help: "Help",
  browserShortcutsNoteForFirefox: `To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,
  browserShortcutsNoteForChrome: "To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",
  browserShortcutsSucks: "Please enter the shortcut key manually in the format:",
  enableLineBreakDescription: "After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading",
  "browser.brandName": "Immersive Translate",
  "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.",
  "browser.toggleTranslatePage": "Toggle translate webpage ",
  "browser.toggleTranslateTheWholePage": "Toggle translate the whole page",
  "browser.toggleTranslateToThePageEndImmediately": "Toggle translate to the bottom of the page immediately",
  "browser.toggleTranslateTheMainPage": "Toggle translate the main page",
  "browser.openOptionsPage": "Open Settings Page",
  "browser.toggleTranslationMask": "Toggle translation mask style",
  "browser.translateLocalPdfFile": "Translate local PDF files",
  confirmResetConfig: "Are you sure you want to reset the settings?",
  translationLineBreakSettingTitle: "Line break setting",
  smartLineBreak: "Smart Wrap",
  alwaysLineBreak: "Always Wrap",
  isShowContextMenu: "Create right button menu",
  toggleBeta: "Enable Beta experimental features",
  betaDescription: "Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",
  translationLineBreakSettingDescription: "The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",
  tempTranslateDomainTitle: "Open the translation time temporarily",
  tempTranslateDomainDescription: "When a page is translated manually, turn it temporarily on as automatic translation",
  xMinutes: "{count} minutes",
  disabled: "Disable",
  changelog: "Change Log",
  toggleTranslatePageWhenThreeFingersOnTheScreen: "\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  toggleTranslationMaskWhenThreeFingersOnTheScreen: "Multi-finger simultaneous touch to show/hide the blur effect of the translation",
  addUrlDescription: "The domain name is available and wildcard is supported e.g.\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
  general: "General",
  clickToExpandConfig: "Expand current configuration",
  import: "Import configuration from file",
  export: "Export to file",
  toggleDebug: "Print debug logs on the console",
  "fingers.0": "Close",
  "fingers.2": "Two-finger touch",
  "fingers.3": "Three-finger touch",
  "fingers.4": "Four-finger touch",
  "fingers.5": "Five-finger touch",
  document: "Document",
  resetSuccess: "All settings reset successful",
  resetThisSuccess: "Reset successful",
  saved: "Saved successfully",
  successImportConfig: "Configuration imported successfully",
  goAdvancedSettings: "Go to Advanced Settings Page",
  goAdvancedInterfaceSettings: "Go to Advanced Custom Settings Page",
  advanced: "Advanced",
  advancedDescription: "Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",
  developer: "Developer settings",
  donateCafe: "Buy Me a Coffee",
  "translate to the bottom of the page": "Translate to the bottom of the page immediately after opening the page?",
  feedback: "Feedback",
  toggleTranslatePage: "Toggle Translate",
  translateToThePageEndImmediatelyDescription: "Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)",
  "translate all areas of the page": "Whether to translate all areas of the web page",
  translationAreaDescription: "When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)",
  "the number of characters to be translated first": "Directly translate the number of characters in front of the page without waiting to scroll to the visible area",
  "interface language": "Interface language",
  "display both the original text and the translation": "Display both the original text and the translation",
  "keyboard shortcuts": "Keyboard shortcuts",
  modify: "Edit",
  reset: "Reset",
  close: "Close",
  homepage: "Home Page",
  more: "More",
  translateTheWholePage: "Translate the whole page area (different from only the main area)",
  changeToTranslateTheWholePage: "\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",
  changeToTranslateTheMainPage: "\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  translateToThePageEndImmediately: "Immediately translate to the bottom (different from translating the current visible area)",
  translateTheMainPage: "Main areas of intelligent translation",
  "The local rules are up to date": "Local  rules are up to date:",
  "Successfully synchronized with the latest official rules:": "Successfully synced latest official rules:",
  "Checking for updates": "Checking for update",
  "Rules are being synchronized": "Syncing official rules",
  localVersionIsTooOld: "The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",
  badUserscriptBrowser: "The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",
  foundNewVersion: "New version available",
  theLocalExtensionIsUpToUpdate: "The current extension version is up to date.",
  failToSyncRules: "Failed to sync latest adaptive rules",
  retry: "Retry",
  failedReason: "Failure reason",
  currentRuleVersion: "Current Rule Version",
  calculating: "Calculating",
  unknownError: "Unknown Error",
  canNotFetchRemoteRule: "Unable to fetch remote rule",
  enableAlphaSuccess: "Alpha enabled successfully",
  disableAlphaSuccess: "Alpha has been disabled",
  cacheSize: "Cache size:",
  cleaning: "Cleaning",
  cleanCache: "Clear cache",
  options: "Options",
  about: "About",
  service: "Translation Service",
  needAction: "(to set up)",
  goSettings: "to set up",
  needActionForOptions: "(need to set)",
  translationEngine: "Engine Options",
  sourceLanguage: "Original language",
  target: "Target Language",
  popupSourceLanguage: "Source",
  popupTarget: "Target",
  popupService: "Service",
  forThisSite: "For This Site:",
  alwaysTranslateSomeLanguage: "Always translate {language}",
  neverTranslateSomeLanguage: "Never translate {language}",
  alwaysTranslateSomeSite: "Always translate {hostname}",
  neverTranslateSomeSite: "Never translate {hostname}",
  add: "Add",
  default: "Default",
  forThisLanguage: "For This Language:",
  "add url": "Add URL",
  edit: "Edit",
  "translate other languages into specific language": "Translate other languages into the language you set",
  "select translation service": "Select a translation service",
  language: "Language",
  "show-original": "Show Original",
  translate: "Translate",
  Translated: "Translated",
  Translating: "Translating",
  Error: "Error",
  allowCacheTranslations: "Enable local translation caching (reduce translation requests for duplicate paragraphs)",
  "translation display": "Translation display style",
  "select diplay style": "Please refer to the following examples",
  interface: "Interface Settings",
  import_export: "Import/Export",
  import_export_title: "Import/Export Configuration",
  syncToGoogleDrive: "Sync Now with Google Drive",
  previewAllThemes: "Preview all themes",
  "translationTheme.none": "None",
  "translationTheme.dashed": "Dashed underline",
  "translationTheme.dotted": "Dotted Underline",
  "translationTheme.dashedBorder": "Dashed Border",
  "translationTheme.underline": "Straight underline",
  "translationTheme.mask": "Blur effect",
  "translationTheme.paper": "White paper shadow effect",
  "translationTheme.dividingLine": "Dividing line",
  "translationTheme.highlight": "Highlight",
  "translationTheme.marker": "Maker",
  "translationTheme.blockquote": "quote style",
  "translationTheme.weakening": "Weakening",
  "translationTheme.italic": "Italic",
  "translationTheme.bold": "Bold",
  "translationTheme.thinDashed": "Thin dashed underline",
  "translationTheme.nativeDashed": "System Dash Underline",
  "translationTheme.nativeDotted": "System Dotted Underline",
  "translationTheme.nativeUnderline": "System Straight Line Underline",
  "translationTheme.wavy": "Squiggle",
  "translationServices.tencent": "Tencent Translator",
  "translationServices.google": "Google Translate",
  "translationServices.bai": "Baidu (Alpha)",
  "translationServices.baidu": "Baidu translation",
  "translationServices.aliyun": "Aliyun Translator",
  "translationServices.volc": "Volcano Translation",
  "translationServices.deeplx": "DeeplX (Alpha)",
  "translationServices.bing": "Bing translate",
  "translationServices.deepl": "DeepL",
  "translationServices.wechat": "Wechat translation",
  "translationServices.azure": "Microsoft Translator",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "Amazon Translate",
  "translationServices.mock": "Mock translation",
  "translationServices.mock2": "Mock Translation2",
  "translationServices.caiyun": "Caiyun Translation",
  "translationServices.volcAlpha": "Volcano Translation (Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "Youdao Translation",
  "translationServices.transmart": "Tencent Smart Translation",
  "translationServices.niu": "Niu Translation",
  "translationServices.d": "DeeplX (Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translate title": "Translate page title",
  "always languages": "Always translate the following languages",
  neverTranslateLanguagesLabel: "Never Translated Languages",
  neverTranslateTheFollowingLanguagesDescription: "When a paragraph on a page is in one of the following languages, the translation will be skipped",
  enableUserscriptPagePopup: "Always show Popup windows on the page",
  enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
  "always translate the following languages": "The following languages will always be translated",
  "always sites": "Always translate the following sites",
  "always translate the following sites": "The following sites will always be translated",
  "never sites": "Never translate the following sites",
  "never translate the following sites": "The following sites will never be translated",
  "please refer to": "It can only be used after filling in the key. For details, please refer to",
  KeyAndConfigurationTutorial: "Key Application and Configuration Tutorial",
  useAboveStyleForTheseSites: "Sites that always use the {theme} translation style",
  currentUrl: "Current URL",
  confirm: "Save",
  cancel: "Cancel",
  delete: "Delete",
  "languages.auto": "Detect Language",
  syncToCloud: "Sync to cloud",
  syncToCloudDescription: "Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",
  authFail: "Authorization Failed",
  syncTitle: "Please select a file operation",
  import_hint: "Import",
  upload: "Upload",
  revokeAuth: "Revoke Authorization",
  uploadFail: "Upload Failed",
  download: "Download",
  importSuccess: "Upload Success",
  importFail: "Import Failed",
  deleteFail: "Delete Failed",
  backupToCloud: "Manage backup files manually",
  create_new_backup: "Add backup node",
  maxBackupFiles: "Up to{count}different nodes can be backed up. Please delete unneeded nodes",
  backupToCloudDescription: "Upload or restore backup files manually, up to 3 different backups",
  successSyncConfig: "Successfully synced with cloud",
  syncFail: "Synchronization failed",
  updatedAt: "Updated at {date}",
  lastSyncedAt: "Last checked at {date}",
  downloadFail: "Download failed",
  clickToDownload: "Click to download",
  aboutLabel: "About - Feedback - Sponsor",
  "browser.openAboutPage": "About / Feedback/Sponsor",
  aboutIntro: "The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. <br/><br/>Thanks to these <1>sponsors</1>, thanks to his/her support, more people can use this tool for free. You can <2>sponsor</2> my work by clicking here, and you can also follow my <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates.",
  projectHomepage: "Project Homepage",
  joinTelegramGroup: "Join Telegram group for feature discussion",
  joinTelegramChannel: "Subscribe to our Telegram channel to get the latest updates",
  feedbackAndJoin: "Issue feedback/group",
  autoSync: "Auto-Time Sync",
  loadingThemeTitle: "Loading Style",
  loadingThemeDescription: "Set the style of waiting for the translation to load",
  "loadingTheme.spinner": "Spinning icon",
  "loadingTheme.text": "Static Text... ",
  "loadingTheme.none": "Disabled",
  developerDescription: "You can click <1>here</1> to see the documentation related to advanced customization",
  "edit border color": "Edit border color",
  successSyncButNoChange: "The current configuration is consistent with that in the cloud server",
  customTheme: "Customize colors and sizes",
  "customThemeLabel.borderColor": "Border color",
  "customThemeLabel.backgroundColor": "Background color",
  "customThemeLabel.textColor": "Text color",
  "customThemeLabel.zoom": "Font scale (%)",
  resetToDefaultColor: "Reset to default colors"
};

// constant.ts
var interfaceTranslations = [
  {
    code: "zh-CN",
    messages: zh_CN_default
  },
  {
    code: "zh-TW",
    messages: zh_TW_default
  },
  {
    code: "en",
    messages: en_default
  }
];
var translations = {};
for (let translation of interfaceTranslations)
  translations[translation.code] = translation.messages;
var brandName = "Immersive Translate", brandId = "immersive-translate", pdfViewerUrl = "pdf/index.html", brandIdForJs = "immersiveTranslate";
var GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow";
var AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`, buildinConfigStorageKey = "buildinConfig", localConfigStorageKey = "localConfig";
var pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
var elementMarkRootKey = `${brandIdForJs}Root`, sourceElementEffectAttributeName = `data-${brandId}-effect`, sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`, sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`, sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`, sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`, sourceElementExcludeAttributeNameForSelector = `data-${brandId}-exclude-mark`, sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`, sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`, sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`, sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`, sourceElementLeft = `${brandIdForJs}Left`, sourceElementRight = `${brandIdForJs}Right`, sourceElementWidth = `${brandIdForJs}Width`, sourceElementHeight = `${brandIdForJs}Height`, sourceElementTop = `${brandIdForJs}Top`, sourceElementFontSize = `${brandIdForJs}FontSize`;
var sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`;
var translationTargetElementWrapperClass = `${brandId}-target-wrapper`, translationPdfTargetContainerClass = `${brandId}-pdf-target-container`, translationTargetInnerElementWrapperClass = `${brandId}-target-inner`, translationSourceElementsWrapperClass = `${brandId}-source-wrapper`, translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`, translationFrameRootThemeAttributeName = `${brandId}-root-translation-theme`, translationFrameRootThemeAttributeNameForJs = `${brandIdForJs}RootTranslationTheme`, translationTargetTranslationElementVerticalBlockClass = `${brandId}-target-translation-vertical-block-wrapper`, translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`, translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`, translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
var languages = [
  "auto",
  "en",
  "zh-CN",
  "zh-TW",
  "ja",
  "af",
  "am",
  "ar",
  "az",
  "be",
  "bg",
  "bn",
  "bs",
  "ca",
  "ceb",
  "co",
  "cs",
  "cy",
  "da",
  "de",
  "el",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "fi",
  "fil",
  "fj",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "gu",
  "ha",
  "haw",
  "he",
  "hi",
  "hmn",
  "hr",
  "ht",
  "hu",
  "hy",
  "id",
  "ig",
  "is",
  "it",
  "jw",
  "ka",
  "kk",
  "km",
  "kn",
  "ko",
  "ku",
  "ky",
  "la",
  "lb",
  "lo",
  "lt",
  "lv",
  "mg",
  "mi",
  "mk",
  "ml",
  "mn",
  "mr",
  "ms",
  "mt",
  "mww",
  "my",
  "ne",
  "nl",
  "no",
  "ny",
  "otq",
  "pa",
  "pl",
  "ps",
  "pt",
  "ro",
  "ru",
  "sd",
  "si",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sq",
  "sr",
  "sr-Cyrl",
  "sr-Latn",
  "st",
  "su",
  "sv",
  "sw",
  "ta",
  "te",
  "tg",
  "th",
  "tlh",
  "tlh-Qaak",
  "to",
  "tr",
  "ty",
  "ug",
  "uk",
  "ur",
  "uz",
  "vi",
  "wyw",
  "xh",
  "yi",
  "yo",
  "yua",
  "yue",
  "zu"
], langMap = {
  af: "Afrikaans",
  am: "Amharic",
  ar: "Arabic",
  auto: "Detect Language",
  az: "Azerbaijani",
  be: "Belarusian",
  bg: "Bulgarian",
  tn: "Zana",
  bn: "Bengali",
  bs: "Bosnian",
  ca: "Catalan",
  ceb: "Cebuano",
  co: "Corsican",
  cs: "Czech",
  cy: "Welsh",
  da: "Danish",
  de: "German",
  el: "Greek",
  en: "English",
  eo: "Esperanto",
  es: "Spanish",
  et: "Estonian",
  eu: "Basque",
  fa: "Farsi",
  fi: "Finnish",
  fil: "Filipino",
  fj: "Fijian",
  fr: "French",
  fy: "Frisian",
  ga: "Irish",
  gd: "Scottish Gaelic",
  gl: "Galician",
  gu: "Gujarati",
  ha: "Hausa",
  haw: "Hawaiian",
  he: "Hebrew",
  hi: "Hindi",
  hmn: "Hmong",
  hr: "Croatian",
  ht: "Haitian Creole",
  hu: "Hungarian",
  hy: "Armenian",
  id: "Indonesian",
  ig: "Igbo",
  is: "Icelandic",
  it: "Italian",
  ja: "\u65E5\u672C\u8A9E",
  jw: "Javanese",
  ka: "Georgian",
  kk: "Kazakh",
  km: "Khmer",
  kn: "Kannada",
  ko: "Korean",
  ku: "Kurdish",
  ky: "Kyrgyz",
  la: "Latin",
  lb: "Luxembourgish",
  lo: "Lao",
  lt: "Lithuanian",
  lv: "Latvian",
  mg: "Malagash",
  mi: "Maori",
  mk: "Macedonian",
  ml: "Malayalam",
  mn: "Mongolian",
  mr: "Marathi",
  ms: "Malay",
  mt: "Maltese",
  mww: "Bai Miao",
  my: "Burmese",
  ne: "Nepali",
  nl: "Dutch",
  no: "Norwegian",
  ny: "Nyanza (Chichewa)",
  otq: "Quer\xE9taro Otomi",
  pa: "Punjabi",
  pl: "Polish",
  ps: "Pashto",
  pt: "Portuguese (Portugal, Brazil)",
  ro: "Romanian",
  ru: "Russian",
  sd: "Sindhi",
  si: "Sinhala",
  sk: "Slovak",
  sl: "Slovenian",
  sm: "Samoan",
  sn: "Shona",
  so: "Somali",
  sq: "Albanian",
  sr: "Serbian",
  "sr-Cyrl": "Serbian (Cyrillic)",
  "sr-Latn": "Serbian (Latin)",
  st: "Sesotho",
  su: "Sundanese",
  sv: "Swedish",
  sw: "Swahili",
  ta: "Tamil",
  te: "Telugu",
  tg: "Tajik",
  th: "Thai",
  tlh: "Klingon",
  "tlh-Qaak": "Klingon (piqaD)",
  to: "Tongan",
  tr: "Turkish",
  ty: "Tahiti",
  ug: "Uyghur",
  uk: "Ukrainian",
  ur: "Urdu",
  uz: "Uzbek",
  vi: "Vietnamese",
  wyw: "Classical Chinese",
  xh: "Bantu",
  yi: "Yiddish",
  yo: "Yoruba",
  yua: "Yucatan Mayan",
  yue: "Cantonese (Traditional)",
  "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
  "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
  zu: "Zulu"
};
var buildinExcludeUrls = [
  "https://immersive-translate.owenyoung.com/options/",
  "https://immersive-translate.owenyoung.com/auth-done/",
  "http://localhost:8000/dist/userscript/options/",
  "http://localhost:8000/auth-done/",
  "http://192.168.50.9:8000/dist/userscript/options/",
  "https://www.deepl.com/translator",
  "translate.google.com"
];
var fallbackLanguage = "zh-CN";
var openlProps = [{
  type: "select",
  name: "codename",
  label: "translationEngine",
  default: "deepl",
  required: !1,
  options: [
    {
      label: "translationServices.deepl",
      value: "deepl"
    },
    {
      label: "translationServices.youdao",
      value: "youdao"
    },
    {
      label: "translationServices.tencent",
      value: "tencent"
    },
    {
      label: "translationServices.aliyun",
      value: "aliyun"
    },
    {
      label: "translationServices.baidu",
      value: "baidu"
    },
    {
      label: "translationServices.caiyun",
      value: "caiyun"
    },
    {
      label: "translationServices.wechat",
      value: "wechat"
    },
    {
      label: "translationServices.azure",
      value: "azure"
    },
    {
      label: "translationServices.ibm",
      value: "ibm"
    },
    {
      label: "translationServices.aws",
      value: "aws"
    },
    {
      label: "translationServices.google",
      value: "google"
    }
  ]
}], PureTranslationServices = {
  mock: {
    name: "Mock",
    homepage: "https://www.google.com"
  },
  mock2: {
    name: "Mock2",
    homepage: "https://www.google.com"
  },
  google: {
    name: "Google",
    homepage: "https://translate.google.com/"
  },
  transmart: {
    name: "Transmart",
    homepage: "https://transmart.qq.com/"
  },
  deepl: {
    name: "DeepL",
    homepage: "https://www.deepl.com/translator",
    docUrl: "https://immersive-translate.owenyoung.com/services/deepL",
    allProps: [{
      name: "authKey",
      required: !0,
      type: "password"
    }]
  },
  volc: {
    name: "Volc",
    homepage: "https://www.volcengine.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/volcano",
    allProps: [{
      name: "accessKeyId",
      required: !0,
      type: "text"
    }, {
      name: "secretAccessKey",
      required: !0,
      type: "password"
    }]
  },
  volcAlpha: {
    name: "Volc Alpha",
    alpha: !0,
    homepage: "https://www.volcengine.com/"
  },
  bing: {
    name: "Bing",
    homepage: "https://www.bing.com/translator"
  },
  tencent: {
    name: "Tencent",
    homepage: "https://fanyi.qq.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/tencent",
    allProps: [{
      name: "secretId",
      required: !0,
      type: "text"
    }, {
      name: "secretKey",
      required: !0,
      type: "password"
    }]
  },
  baidu: {
    name: "Baidu",
    homepage: "https://fanyi.baidu.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/baidu",
    allProps: [{
      name: "appid",
      required: !0,
      type: "text"
    }, {
      name: "key",
      required: !0,
      type: "password"
    }]
  },
  caiyun: {
    name: "Caiyun",
    homepage: "https://fanyi.caiyunapp.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/caiyun",
    allProps: [{
      name: "token",
      required: !0,
      type: "password"
    }]
  },
  openl: {
    name: "Openl",
    homepage: "https://openl.club/",
    docUrl: "https://immersive-translate.owenyoung.com/services/openL",
    allProps: [
      ...openlProps,
      {
        type: "password",
        name: "apikey",
        required: !0
      }
    ],
    props: openlProps
  },
  youdao: {
    name: "Youdao",
    homepage: "https://immersive-translate.owenyoung.com/services/youdao",
    docUrl: "https://hcfy.app/docs/services/youdao-api",
    allProps: [{
      name: "appId",
      required: !0,
      type: "text"
    }, {
      name: "appSecret",
      required: !0,
      type: "password"
    }]
  },
  d: {
    name: "D () ",
    alpha: !0,
    homepage: "https://www.deepl.com/translator"
  },
  dpro: {
    name: "DPro (Canary) ",
    canary: !0,
    homepage: "https://www.deepl.com/translator"
  },
  deeplx: {
    name: "DeepLX (Beta)",
    beta: !0,
    homepage: "https://www.deepl.com/translator",
    allProps: [{
      name: "url",
      required: !0,
      type: "text"
    }]
  },
  niu: {
    name: "niutrans",
    homepage: "https://niutrans.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/niu",
    allProps: [{
      name: "APIKEY",
      required: !0,
      type: "password"
    }]
  }
};

// utils/get_pdf_viewer_url.ts
function formatToPdfViewerUrl(url) {
  let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl), pdfViewUrlObj = new URL(pdfViewerRuntimeUrl);
  return (url.startsWith("http") || !isFirefox()) && pdfViewUrlObj.searchParams.set(
    "file",
    url
  ), pdfViewUrlObj.href;
}

// log.ts
var Timing = class {
  #t = performance.now();
  reset() {
    this.#t = performance.now();
  }
  stop(message) {
    let now = performance.now(), d3 = Math.round(now - this.#t), cf = colors_exports.green;
    d3 > 1e4 ? cf = colors_exports.red : d3 > 1e3 && (cf = colors_exports.yellow), console.debug(
      colors_exports.dim(brandName + " TIMING:"),
      message,
      "in",
      cf(d3 + "ms")
    ), this.#t = now;
  }
}, Logger = class {
  #level = 1 /* Info */;
  get level() {
    return this.#level;
  }
  setLevel(level) {
    switch (level) {
      case "debug":
        this.#level = 0 /* Debug */;
        break;
      case "info":
        this.#level = 1 /* Info */;
        break;
      case "warn":
        this.#level = 2 /* Warn */;
        break;
      case "error":
        this.#level = 3 /* Error */;
        break;
      case "fatal":
        this.#level = 4 /* Fatal */;
        break;
    }
  }
  debug(...args) {
    this.#level <= 0 /* Debug */ && console.log(colors_exports.dim(brandName + " DEBUG:"), ...args);
  }
  v(...args) {
    this.#level <= 0 /* Debug */ && console.log(colors_exports.dim(brandName + " VERBOSE:"), ...args);
  }
  info(...args) {
    this.#level <= 1 /* Info */ && console.log(colors_exports.green(brandName + " INFO:"), ...args);
  }
  l(...args) {
    this.#level <= 1 /* Info */ && console.log(colors_exports.green(brandName + " TEMP INFO:"), ...args);
  }
  warn(...args) {
    this.#level <= 2 /* Warn */ && console.warn(colors_exports.yellow(brandName + " WARN:"), ...args);
  }
  error(...args) {
    this.#level <= 3 /* Error */ && console.error(colors_exports.red(brandName + " ERROR:"), ...args);
  }
  fatal(...args) {
    this.#level <= 4 /* Fatal */ && console.error(colors_exports.red(brandName + " FATAL:"), ...args);
  }
  timing() {
    return this.level === 0 /* Debug */ ? new Timing() : { reset: () => {
    }, stop: () => {
    } };
  }
}, log_default = new Logger();

// utils/url_match.ts
var matchAll = ["*://*/*", "*", "*://*"], placeholder = "immersive-translate-wildcard-placeholder.com";
function getMatchedUrl(rawUrl, rawMatches) {
  let matches = [];
  if (!rawMatches || (rawMatches && !Array.isArray(rawMatches) ? matches = [rawMatches] : matches = rawMatches, matches.length === 0))
    return null;
  if (matches.some((m4) => matchAll.includes(m4)))
    return rawUrl;
  let urlObj = new URL(rawUrl);
  urlObj.hash = "", urlObj.search = "";
  let url = urlObj.href, hostname2 = urlObj.hostname;
  if (matches && matches.length > 0) {
    let matched = matches.find((match) => {
      let rawMatch = match;
      if (match === hostname2)
        return !0;
      if (matchAll.includes(match))
        return !0;
      if (!match.includes("*") && match.includes("://")) {
        try {
          let matchUrl = new URL(match);
          return matchUrl.pathname === "/" && !match.endsWith("/") ? matchUrl.hostname === hostname2 : isTwoUrlMatched(url, match);
        } catch {
        }
        return !1;
      } else {
        let scheme, rawMatch2 = match;
        match.includes("://") ? scheme = match.split("://")[0] : (scheme = "*", match = "https://" + match);
        let validUrlMatch = match.replace(
          /\*/g,
          placeholder
        ), validUrlObj;
        try {
          validUrlObj = new URL(validUrlMatch);
        } catch {
          return log_default.debug(
            "invalid match pattern",
            validUrlMatch,
            "raw match value:",
            rawMatch2
          ), !1;
        }
        let hostname3 = validUrlObj.hostname, pathname = validUrlObj.pathname;
        pathname === "/" && (rawMatch2.replace("://", "").includes("/") || (pathname = "/*"));
        let regex = makeRegExp(
          scheme + ":",
          restorePlaceholderToWildcard(hostname3),
          restorePlaceholderToWildcard(pathname)
        );
        if (regex) {
          let clonedUrl = new URL(url);
          return clonedUrl.port = "", regex.test(clonedUrl.href);
        } else
          return !1;
      }
    });
    if (matched)
      return matched;
  }
  return null;
}
function restorePlaceholderToWildcard(str) {
  return str.replaceAll(placeholder, "*");
}
function makeRegExp(scheme, host, path) {
  let regex = "^";
  return scheme === "*:" ? regex += "(http:|https:|file:)" : regex += scheme, regex += "//", host && (scheme === "file:" || (host === "*" ? regex += "[^/]+?" : (host.match(/^\*\./) && (regex += "[^/]*?", host = host.substring(2)), regex += host.replace(/\./g, "\\.").replace(/\*/g, "[^/]*")))), path ? path === "*" || path === "/*" ? regex += "(/.*)?" : path.includes("*") ? (regex += path.replace(/\*/g, ".*?"), regex += "/?") : regex += path.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : regex += "/?", regex += "$", new RegExp(regex);
}
function isMatchUrl(url, rawMatches) {
  return getMatchedUrl(url, rawMatches) !== null;
}
function isTwoUrlMatched(url1, url2) {
  let urlObj1 = new URL(url1), urlObj2 = new URL(url2);
  return urlObj1.hostname === urlObj2.hostname && urlObj1.pathname === urlObj2.pathname && urlObj1.protocol === urlObj2.protocol && urlObj1.port === urlObj2.port;
}

// utils/array.ts
function arrayOrGenericToArray(arrayOrGeneric) {
  return Array.isArray(arrayOrGeneric) ? arrayOrGeneric : arrayOrGeneric ? [arrayOrGeneric] : [];
}
function addToUniqueArray(item, array) {
  return array ? (Array.isArray(array) || (array = [array]), Array.from(/* @__PURE__ */ new Set([...array, item]))) : [item];
}
function removeFromArray(item, array) {
  return array ? (Array.isArray(item) || (item = [item]), Array.isArray(array) || (array = [array]), array.filter((i2) => !item.includes(i2))) : [];
}

// utils/merge_rule.ts
function mergeRule(generalRule, rule) {
  let arrayKeys = [], allRuleKeys = Object.keys(
    generalRule
  );
  for (let key of allRuleKeys) {
    let value = generalRule[key];
    Array.isArray(value) && arrayKeys.push(key);
  }
  let finalRule = {
    ...generalRule
  };
  return Object.keys(rule).forEach((key) => {
    let value = rule[key];
    if (value !== void 0)
      if (!arrayKeys.includes(key))
        finalRule[key] = value;
      else if (key.startsWith("additional")) {
        let userValue = arrayOrGenericToArray(value);
        finalRule[key] = Array.from(
          // @ts-ignore: ignore type error
          /* @__PURE__ */ new Set([...finalRule[key], ...userValue])
        );
      } else
        finalRule[key] = arrayOrGenericToArray(value);
  }), finalRule;
}

// libs/sha256.js
var ERROR = "input is invalid type", WINDOW = typeof window == "object", root = WINDOW ? window : {};
root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
var WEB_WORKER = !WINDOW && typeof self == "object", NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
NODE_JS ? root = global : WEB_WORKER && (root = self);
var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module == "object" && module.exports, AMD = typeof define == "function" && define.amd, ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [-2147483648, 8388608, 32768, 128], SHIFT = [24, 16, 8, 0], K5 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
], OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"], blocks = [];
(root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
});
ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(obj) {
  return typeof obj == "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
});
var createOutputMethod = function(outputType, is224) {
  return function(message) {
    return new Sha256(is224, !0).update(message)[outputType]();
  };
}, createMethod = function(is224) {
  var method = createOutputMethod("hex", is224);
  method.create = function() {
    return new Sha256(is224);
  }, method.update = function(message) {
    return method.create().update(message);
  };
  for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
    var type = OUTPUT_TYPES[i2];
    method[type] = createOutputMethod(type, is224);
  }
  return method;
}, createHmacOutputMethod = function(outputType, is224) {
  return function(key, message) {
    return new HmacSha256(key, is224, !0).update(message)[outputType]();
  };
}, createHmacMethod = function(is224) {
  var method = createHmacOutputMethod("hex", is224);
  method.create = function(key) {
    return new HmacSha256(key, is224);
  }, method.update = function(key, message) {
    return method.create(key).update(message);
  };
  for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
    var type = OUTPUT_TYPES[i2];
    method[type] = createHmacOutputMethod(type, is224);
  }
  return method;
};
function Sha256(is224, sharedMemory) {
  sharedMemory ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], is224 ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = is224;
}
Sha256.prototype.update = function(message) {
  if (!this.finalized) {
    var notString, type = typeof message;
    if (type !== "string") {
      if (type === "object") {
        if (message === null)
          throw new Error(ERROR);
        if (ARRAY_BUFFER && message.constructor === ArrayBuffer)
          message = new Uint8Array(message);
        else if (!Array.isArray(message) && (!ARRAY_BUFFER || !ArrayBuffer.isView(message)))
          throw new Error(ERROR);
      } else
        throw new Error(ERROR);
      notString = !0;
    }
    for (var code2, index = 0, i2, length = message.length, blocks2 = this.blocks; index < length; ) {
      if (this.hashed && (this.hashed = !1, blocks2[0] = this.block, blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0), notString)
        for (i2 = this.start; index < length && i2 < 64; ++index)
          blocks2[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
      else
        for (i2 = this.start; index < length && i2 < 64; ++index)
          code2 = message.charCodeAt(index), code2 < 128 ? blocks2[i2 >> 2] |= code2 << SHIFT[i2++ & 3] : code2 < 2048 ? (blocks2[i2 >> 2] |= (192 | code2 >> 6) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 & 63) << SHIFT[i2++ & 3]) : code2 < 55296 || code2 >= 57344 ? (blocks2[i2 >> 2] |= (224 | code2 >> 12) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 & 63) << SHIFT[i2++ & 3]) : (code2 = 65536 + ((code2 & 1023) << 10 | message.charCodeAt(++index) & 1023), blocks2[i2 >> 2] |= (240 | code2 >> 18) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 >> 12 & 63) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i2++ & 3], blocks2[i2 >> 2] |= (128 | code2 & 63) << SHIFT[i2++ & 3]);
      this.lastByteIndex = i2, this.bytes += i2 - this.start, i2 >= 64 ? (this.block = blocks2[16], this.start = i2 - 64, this.hash(), this.hashed = !0) : this.start = i2;
    }
    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
  }
};
Sha256.prototype.finalize = function() {
  if (!this.finalized) {
    this.finalized = !0;
    var blocks2 = this.blocks, i2 = this.lastByteIndex;
    blocks2[16] = this.block, blocks2[i2 >> 2] |= EXTRA[i2 & 3], this.block = blocks2[16], i2 >= 56 && (this.hashed || this.hash(), blocks2[0] = this.block, blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0), blocks2[14] = this.hBytes << 3 | this.bytes >>> 29, blocks2[15] = this.bytes << 3, this.hash();
  }
};
Sha256.prototype.hash = function() {
  var a3 = this.h0, b4 = this.h1, c3 = this.h2, d3 = this.h3, e3 = this.h4, f5 = this.h5, g5 = this.h6, h3 = this.h7, blocks2 = this.blocks, j5, s0, s1, maj, t1, t22, ch, ab, da, cd, bc;
  for (j5 = 16; j5 < 64; ++j5)
    t1 = blocks2[j5 - 15], s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3, t1 = blocks2[j5 - 2], s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10, blocks2[j5] = blocks2[j5 - 16] + s0 + blocks2[j5 - 7] + s1 << 0;
  for (bc = b4 & c3, j5 = 0; j5 < 64; j5 += 4)
    this.first ? (this.is224 ? (ab = 300032, t1 = blocks2[0] - 1413257819, h3 = t1 - 150054599 << 0, d3 = t1 + 24177077 << 0) : (ab = 704751109, t1 = blocks2[0] - 210244248, h3 = t1 - 1521486534 << 0, d3 = t1 + 143694565 << 0), this.first = !1) : (s0 = (a3 >>> 2 | a3 << 30) ^ (a3 >>> 13 | a3 << 19) ^ (a3 >>> 22 | a3 << 10), s1 = (e3 >>> 6 | e3 << 26) ^ (e3 >>> 11 | e3 << 21) ^ (e3 >>> 25 | e3 << 7), ab = a3 & b4, maj = ab ^ a3 & c3 ^ bc, ch = e3 & f5 ^ ~e3 & g5, t1 = h3 + s1 + ch + K5[j5] + blocks2[j5], t22 = s0 + maj, h3 = d3 + t1 << 0, d3 = t1 + t22 << 0), s0 = (d3 >>> 2 | d3 << 30) ^ (d3 >>> 13 | d3 << 19) ^ (d3 >>> 22 | d3 << 10), s1 = (h3 >>> 6 | h3 << 26) ^ (h3 >>> 11 | h3 << 21) ^ (h3 >>> 25 | h3 << 7), da = d3 & a3, maj = da ^ d3 & b4 ^ ab, ch = h3 & e3 ^ ~h3 & f5, t1 = g5 + s1 + ch + K5[j5 + 1] + blocks2[j5 + 1], t22 = s0 + maj, g5 = c3 + t1 << 0, c3 = t1 + t22 << 0, s0 = (c3 >>> 2 | c3 << 30) ^ (c3 >>> 13 | c3 << 19) ^ (c3 >>> 22 | c3 << 10), s1 = (g5 >>> 6 | g5 << 26) ^ (g5 >>> 11 | g5 << 21) ^ (g5 >>> 25 | g5 << 7), cd = c3 & d3, maj = cd ^ c3 & a3 ^ da, ch = g5 & h3 ^ ~g5 & e3, t1 = f5 + s1 + ch + K5[j5 + 2] + blocks2[j5 + 2], t22 = s0 + maj, f5 = b4 + t1 << 0, b4 = t1 + t22 << 0, s0 = (b4 >>> 2 | b4 << 30) ^ (b4 >>> 13 | b4 << 19) ^ (b4 >>> 22 | b4 << 10), s1 = (f5 >>> 6 | f5 << 26) ^ (f5 >>> 11 | f5 << 21) ^ (f5 >>> 25 | f5 << 7), bc = b4 & c3, maj = bc ^ b4 & d3 ^ cd, ch = f5 & g5 ^ ~f5 & h3, t1 = e3 + s1 + ch + K5[j5 + 3] + blocks2[j5 + 3], t22 = s0 + maj, e3 = a3 + t1 << 0, a3 = t1 + t22 << 0;
  this.h0 = this.h0 + a3 << 0, this.h1 = this.h1 + b4 << 0, this.h2 = this.h2 + c3 << 0, this.h3 = this.h3 + d3 << 0, this.h4 = this.h4 + e3 << 0, this.h5 = this.h5 + f5 << 0, this.h6 = this.h6 + g5 << 0, this.h7 = this.h7 + h3 << 0;
};
Sha256.prototype.hex = function() {
  this.finalize();
  var h0 = this.h0, h1 = this.h1, h22 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, hex = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h22 >> 28 & 15] + HEX_CHARS[h22 >> 24 & 15] + HEX_CHARS[h22 >> 20 & 15] + HEX_CHARS[h22 >> 16 & 15] + HEX_CHARS[h22 >> 12 & 15] + HEX_CHARS[h22 >> 8 & 15] + HEX_CHARS[h22 >> 4 & 15] + HEX_CHARS[h22 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
  return this.is224 || (hex += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15]), hex;
};
Sha256.prototype.toString = Sha256.prototype.hex;
Sha256.prototype.digest = function() {
  this.finalize();
  var h0 = this.h0, h1 = this.h1, h22 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, arr = [
    h0 >> 24 & 255,
    h0 >> 16 & 255,
    h0 >> 8 & 255,
    h0 & 255,
    h1 >> 24 & 255,
    h1 >> 16 & 255,
    h1 >> 8 & 255,
    h1 & 255,
    h22 >> 24 & 255,
    h22 >> 16 & 255,
    h22 >> 8 & 255,
    h22 & 255,
    h3 >> 24 & 255,
    h3 >> 16 & 255,
    h3 >> 8 & 255,
    h3 & 255,
    h4 >> 24 & 255,
    h4 >> 16 & 255,
    h4 >> 8 & 255,
    h4 & 255,
    h5 >> 24 & 255,
    h5 >> 16 & 255,
    h5 >> 8 & 255,
    h5 & 255,
    h6 >> 24 & 255,
    h6 >> 16 & 255,
    h6 >> 8 & 255,
    h6 & 255
  ];
  return this.is224 || arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255), arr;
};
Sha256.prototype.array = Sha256.prototype.digest;
Sha256.prototype.arrayBuffer = function() {
  this.finalize();
  var buffer = new ArrayBuffer(this.is224 ? 28 : 32), dataView = new DataView(buffer);
  return dataView.setUint32(0, this.h0), dataView.setUint32(4, this.h1), dataView.setUint32(8, this.h2), dataView.setUint32(12, this.h3), dataView.setUint32(16, this.h4), dataView.setUint32(20, this.h5), dataView.setUint32(24, this.h6), this.is224 || dataView.setUint32(28, this.h7), buffer;
};
function HmacSha256(key, is224, sharedMemory) {
  var i2, type = typeof key;
  if (type === "string") {
    var bytes = [], length = key.length, index = 0, code2;
    for (i2 = 0; i2 < length; ++i2)
      code2 = key.charCodeAt(i2), code2 < 128 ? bytes[index++] = code2 : code2 < 2048 ? (bytes[index++] = 192 | code2 >> 6, bytes[index++] = 128 | code2 & 63) : code2 < 55296 || code2 >= 57344 ? (bytes[index++] = 224 | code2 >> 12, bytes[index++] = 128 | code2 >> 6 & 63, bytes[index++] = 128 | code2 & 63) : (code2 = 65536 + ((code2 & 1023) << 10 | key.charCodeAt(++i2) & 1023), bytes[index++] = 240 | code2 >> 18, bytes[index++] = 128 | code2 >> 12 & 63, bytes[index++] = 128 | code2 >> 6 & 63, bytes[index++] = 128 | code2 & 63);
    key = bytes;
  } else if (type === "object") {
    if (key === null)
      throw new Error(ERROR);
    if (ARRAY_BUFFER && key.constructor === ArrayBuffer)
      key = new Uint8Array(key);
    else if (!Array.isArray(key) && (!ARRAY_BUFFER || !ArrayBuffer.isView(key)))
      throw new Error(ERROR);
  } else
    throw new Error(ERROR);
  key.length > 64 && (key = new Sha256(is224, !0).update(key).array());
  var oKeyPad = [], iKeyPad = [];
  for (i2 = 0; i2 < 64; ++i2) {
    var b4 = key[i2] || 0;
    oKeyPad[i2] = 92 ^ b4, iKeyPad[i2] = 54 ^ b4;
  }
  Sha256.call(this, is224, sharedMemory), this.update(iKeyPad), this.oKeyPad = oKeyPad, this.inner = !0, this.sharedMemory = sharedMemory;
}
HmacSha256.prototype = new Sha256();
HmacSha256.prototype.finalize = function() {
  if (Sha256.prototype.finalize.call(this), this.inner) {
    this.inner = !1;
    var innerHash = this.array();
    Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(innerHash), Sha256.prototype.finalize.call(this);
  }
};
var exports = createMethod();
exports.sha256 = exports;
exports.sha224 = createMethod(!0);
exports.sha256.hmac = createHmacMethod();
exports.sha224.hmac = createHmacMethod(!0);
var sha256_default = exports;

// utils/sha256.ts
var sha256Fn = sha256_default.sha256;
function sha256(message) {
  return Promise.resolve(sha256Fn(message));
}

// env.ts
function getEnv() {
  return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : define_process_env_default;
}
var env = getEnv();
function isMonkey() {
  return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
}

// dom/util.ts
var env2 = getEnv(), isProd = env2.PROD === "1";
function isMatchSelectors(selectors) {
  return selectors ? typeof selectors == "string" ? document.querySelector(selectors) !== null : selectors.some((selector) => document.querySelector(selector)) : !1;
}

// utils/format_language.ts
function formatLanguage(rawLangCode) {
  if (typeof rawLangCode != "string")
    return "auto";
  let lowerCaseLangCode = rawLangCode.toLowerCase();
  if (lowerCaseLangCode === "zh" || lowerCaseLangCode === "zh-hans")
    return "zh-CN";
  if (lowerCaseLangCode === "zh-hant" || lowerCaseLangCode === "zh-hk")
    return "zh-TW";
  if (lowerCaseLangCode === "iw")
    return "he";
  if (lowerCaseLangCode === "jv")
    return "jw";
  let lowerCaseLanguages = languages.map((lang) => lang.toLowerCase()), indexOfLanguages = lowerCaseLanguages.indexOf(
    lowerCaseLangCode
  );
  if (indexOfLanguages === -1)
    if (lowerCaseLangCode.indexOf("-") >= 0) {
      lowerCaseLangCode = lowerCaseLangCode.split("-")[0];
      let firstPartIndex = lowerCaseLanguages.indexOf(lowerCaseLangCode);
      return firstPartIndex === -1 ? "auto" : languages[firstPartIndex];
    } else
      return "auto";
  else
    return languages[indexOfLanguages];
}

// buildin_config.json
var buildin_config_default = {
  minVersion: "0.0.20",
  immediateTranslationTextCount: 5e3,
  interval: 36e5,
  beta: !1,
  cache: !0,
  donateUrl: "https://immersive-translate.owenyoung.com/donate.html",
  feedbackUrl: "https://github.com/immersive-translate/immersive-translate/issues",
  isShowContextMenu: !0,
  loadingTheme: "spinner",
  canary: !1,
  translationServices: {
    volcAlpha: {
      placeholderDelimiters: ["{", "}"]
    },
    volc: {
      placeholderDelimiters: ["{", "}"]
    },
    tencent: {
      placeholderDelimiters: ["{", "}"]
    },
    transmart: {
      placeholderDelimiters: ["#", "#"]
    },
    baidu: {
      placeholderDelimiters: ["#", "#"]
    },
    caiyun: {
      placeholderDelimiters: ["{", "}"]
    },
    youdao: {
      placeholderDelimiters: ["\u{1F6A0}", "\u{1F6A0}"]
    },
    deepl: {},
    dpro: {
      apiUrl: "https://api.deepl.com/jsonrpc"
    }
  },
  shortcuts: {
    toggleTranslatePage: "Alt+A",
    toggleTranslateTheWholePage: "Alt+W",
    toggleTranslateToThePageEndImmediately: "Alt+S",
    toggleTranslationMask: "Alt+D"
  },
  tempTranslateDomainMinutes: 0,
  immediateTranslationPattern: {
    matches: [
      "www.tumblr.com",
      "twitter.com",
      "*.twitter.com",
      "medium.com",
      "*.medium.com",
      "github.com",
      "gist.github.com",
      "www.facebook.com",
      "www.youtube.com",
      "m.youtube.com",
      "gitlab.com",
      "mail.google.com",
      "discord.com",
      "web.telegram.org",
      "instagram.com",
      "*.slack.com",
      "https://old.reddit.com/",
      "https://www.reddit.com/r/popular/",
      "https://www.reddit.com/",
      "https://www.reddit.com/hot/",
      "https://www.reddit.com/new/",
      "https://www.reddit.com/top/",
      "https://www.reddit.com/.compact"
    ],
    excludeMatches: [],
    selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
    selectorExcludeMatches: []
  },
  translationParagraphLanguagePattern: {
    matches: [
      "www.reddit.com",
      "old.reddit.com",
      "twitter.com",
      "www.tumblr.com",
      "*.twitter.com",
      "medium.com",
      "*.medium.com",
      "github.com",
      "gist.github.com",
      "www.facebook.com",
      "www.youtube.com",
      "m.youtube.com",
      "read.readwise.io",
      "www.inoreader.com",
      "mail.google.com",
      "google.com",
      "discord.com",
      "instagram.com",
      "web.telegram.org",
      "*.slack.com"
    ],
    excludeMatches: [],
    selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
    selectorExcludeMatches: []
  },
  sourceLanguageUrlPattern: {},
  generalRule: {
    _comment: "",
    normalizeBody: "",
    injectedCss: [],
    waitForSelectors: [],
    waitForSelectorsTimeout: 3e3,
    additionalInjectedCss: [],
    languageDetectMinTextCount: 50,
    wrapperPrefix: "smart",
    wrapperSuffix: "smart",
    isPdf: !1,
    isTransformPreTagNewLine: !1,
    urlChangeDelay: 20,
    mutationChangeDelay: 10,
    visibleDelay: 0,
    additionalStayOriginalSelectors: [
      "span.katex"
    ],
    translationBlockStyle: "",
    isShowUserscriptPagePopup: !0,
    observeUrlChange: !1,
    paragraphMinTextCount: 8,
    paragraphMinWordCount: 2,
    shadowRootSelectors: [],
    blockMinTextCount: 32,
    blockMinWordCount: 5,
    containerMinTextCount: 18,
    lineBreakMaxTextCount: 0,
    globalAttributes: {},
    globalStyles: {
      ".sr-only": "display:none"
    },
    selectors: [],
    preWhitespaceDetectedTags: ["DIV", "SPAN"],
    stayOriginalSelectors: [],
    additionalSelectors: [
      "h1",
      "section h2",
      "section h3",
      "section h4",
      "main h2",
      "main h3",
      "main h4",
      ".article-title",
      ".article-subtitle",
      ".article_title",
      ".article_subtitle",
      ".article__title",
      ".articleTitle",
      ".Article__content",
      ".titleLink",
      ".summary",
      ".content",
      ".headline",
      ".page-content",
      "aside.note",
      "aside.article-comments"
    ],
    atomicBlockTags: [],
    excludeSelectors: [],
    additionalExcludeSelectors: [
      ".social-share",
      ".breadcrumbs",
      ".post__footer",
      ".btn",
      ".reference-citations",
      ".share-nav",
      ".o-share",
      "[data-toolbar=share]",
      "rp",
      "rt"
    ],
    translationClasses: [],
    atomicBlockSelectors: [],
    excludeTags: [
      "TITLE",
      "SCRIPT",
      "STYLE",
      "TEXTAREA",
      "SVG",
      "svg",
      "NOSCRIPT",
      "INPUT",
      "BUTTON",
      "BASE",
      "SELECT",
      "OPTION",
      "IMG",
      "SUB",
      "SUP",
      "HR",
      "PRE",
      "CODE",
      "KBD",
      "WBR",
      "TT",
      "RT",
      "RP",
      "META",
      "ASIDE",
      "FOOTER",
      "MATH"
    ],
    bodyTranslateTags: ["FOOTER", "ADIDE", "BUTTON", "NAV"],
    forceTranslateTags: [],
    metaTags: ["META", "SCRIPT", "STYLE", "NOSCRIPT"],
    additionalExcludeTags: [],
    stayOriginalTags: ["CODE", "TT", "IMG", "SUP", "SUB"],
    additionalStayOriginalTags: [],
    inlineTags: [
      "A",
      "ABBR",
      "FONT",
      "ACRONYM",
      "B",
      "INS",
      "DEL",
      "RUBY",
      "RP",
      "RB",
      "BDO",
      "MARK",
      "BIG",
      "RT",
      "NOBR",
      "CITE",
      "DFN",
      "EM",
      "I",
      "LABEL",
      "Q",
      "S",
      "SMALL",
      "SPAN",
      "STRONG",
      "SUB",
      "SUP",
      "U",
      "KBD",
      "TT",
      "VAR",
      "IMG",
      "CODE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "TIME",
      "META",
      "WBR"
    ],
    additionalInlineTags: [],
    extraInlineSelectors: [],
    additionalInlineSelectors: [],
    extraBlockSelectors: ["turbo-frame", "readme-toc"],
    allBlockTags: [
      "HGROUP",
      "CONTENT",
      "ADDRESS",
      "ARTICLE",
      "ASIDE",
      "DETAILS",
      "BLOCKQUOTE",
      "CANVAS",
      "DD",
      "DL",
      "DT",
      "FIELDSET",
      "FIGCAPTION",
      "FIGURE",
      "FOOTER",
      "HEADER",
      "FORM",
      "HR",
      "MAIN",
      "SUMMARY",
      "NAV",
      "OL",
      "NOSCRIPT",
      "PRE",
      "SECTION",
      "TABLE",
      "TFOOT",
      "UL",
      "VIDEO",
      "P",
      "DIV",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "UL",
      "LI",
      "OL",
      "BR",
      "PICTURE",
      "TBODY",
      "TR",
      "TD",
      "TH",
      "SOURCE",
      "C-WIZ",
      "BUTTON",
      "TURBO-FRAME",
      "README-TOC"
    ],
    pdfNewParagraphLineHeight: 2.4,
    pdfNewParagraphIndent: 1.2,
    pdfNewParagraphIndentRightIndentPx: 130,
    fingerCountToToggleTranslagePageWhenTouching: 4,
    fingerCountToToggleTranslationMaskWhenTouching: 0
  },
  rules: [
    {
      matches: ["moz-extension://*/pdf/index.html*"],
      isPdf: !0,
      wrapperPrefix: "",
      wrapperSuffix: "",
      urlChangeDelay: 0,
      selectors: [".textLayer"],
      excludeSelectors: [".annotationLayer"],
      globalStyles: {
        "div.page": "width: 98%;",
        ".textLayer": "overflow:visible;opacity: 1;"
      }
    },
    {
      matches: ["mail.jabber.org", "antirez.com"],
      excludeTags: [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "INPUT",
        "LABEL",
        "IMG",
        "SUB",
        "SUP",
        "BR",
        "CODE",
        "KBD",
        "WBR",
        "TT"
      ]
    },
    {
      matches: "*.wikipedia.org",
      excludeSelectors: [
        ".mw-editsection",
        ".mw-cite-backlink",
        "#mw-panel-toc"
      ],
      stayOriginalSelectors: [
        ".chemf",
        ".mwe-math-element",
        "[role=math]",
        ".nowrap"
      ],
      extraInlineSelectors: [
        ".chemf",
        ".mwe-math-element",
        "[role=math]",
        ".nowrap"
      ]
    },
    {
      matches: [
        "twitter.com",
        "mobile.twitter.com",
        "tweetdeck.twitter.com",
        "https://platform.twitter.com/embed*"
      ],
      selectors: [
        '[data-testid="tweetText"]',
        ".tweet-text",
        ".js-quoted-tweet-text",
        "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
        "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
        "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)",
        "[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)"
      ],
      observeUrlChange: !1,
      extraInlineSelectors: ['[data-testid="tweetText"] div']
    },
    {
      matches: [
        "stackoverflow.com",
        "*.stackexchange.com",
        "superuser.com",
        "askubuntu.com",
        "serverfault.com"
      ],
      extraBlockSelectors: ["span.comment-copy"],
      excludeSelectors: [
        "a.comment-user",
        "span.comment-date",
        "div.s-prose.js-post-body + div",
        ".bottom-notice",
        "div[data-campaign-name=stk]"
      ]
    },
    {
      matches: "developer.apple.com/documentation/*",
      selectors: [".container", "h3.title", "div.content"]
    },
    {
      matches: "news.ycombinator.com",
      selectors: [
        ".titleline > a",
        ".comment > .commtext",
        ".toptext",
        "a.hn-item-title",
        ".hn-comment-text",
        ".hn-story-title"
      ],
      excludeSelectors: [".reply"]
    },
    {
      matches: ["*.quora.com", "quora.com"],
      additionalSelectors: [
        ".puppeteer_test_question_title",
        ".puppeteer_test_answer_content",
        ".q-text"
      ],
      globalStyles: {
        ".qu-truncateLines--3": "-webkit-line-clamp: unset;"
      }
    },
    {
      matches: [
        "old.reddit.com/*/.compact",
        "old.reddit.com/.compact",
        "www.reddit.com/*/.compact",
        "www.reddit.com/.compact"
      ],
      selectors: [".title > a", ".usertext-body"],
      detectParagraphLanguage: !0
    },
    {
      matches: "old.reddit.com",
      selectors: ["p.title > a", "[role=main] .md-container"],
      detectParagraphLanguage: !0
    },
    {
      matches: "https://www.reddit.com/r/*/comments/*/*",
      selectors: [
        "h1",
        ".PostHeader__post-title-line",
        "[data-click-id=body] h3",
        "[data-click-id=background] h3",
        "[data-testid=comment]",
        "[data-adclicklocation='title']",
        "[data-adclicklocation=media]",
        ".PostContent",
        ".post-content",
        ".Comment__body",
        "faceplate-batch .md"
      ],
      detectParagraphLanguage: !0,
      globalStyles: {
        "div.XPromoBottomBar": "display:none"
      },
      waitForSelectors: [
        "[data-testid=post_author_link]"
      ]
    },
    {
      matches: "www.reddit.com",
      selectors: [
        "h1",
        ".PostHeader__post-title-line",
        "[data-click-id=body] h3",
        "[data-click-id=background] h3",
        "[data-testid=comment]",
        "[data-adclicklocation='title']",
        "[data-adclicklocation=media]",
        ".PostContent",
        ".post-content",
        ".Comment__body",
        "faceplate-batch .md"
      ],
      detectParagraphLanguage: !0,
      globalStyles: {
        "div.XPromoBottomBar": "display:none"
      }
    },
    {
      matches: "www.reuters.com/",
      excludeSelectors: ["header"]
    },
    {
      matches: "github.com",
      selectors: [
        ".markdown-title",
        ".markdown-body",
        ".Layout-sidebar p",
        "div > span.search-match",
        "li.repo-list-item p",
        "#responsive-meta-container p"
      ],
      excludeSelectors: [
        ".css-truncate",
        "[data-test-selector='commit-tease-commit-message']",
        "div.js-details-container.Details",
        "div.Box-header.position-relative",
        "div.blob-wrapper-embedded",
        "div.Box.Box--condensed.my-2",
        "div.jp-CodeCell"
      ],
      extraBlockSelectors: [],
      extraInlineSelectors: ["g-emoji"],
      stayOriginalTags: ["CODE", "TT", "G-EMOJI", "IMG", "SUP", "SUB"],
      detectParagraphLanguage: !0
    },
    {
      matches: "notebooks.githubusercontent.com",
      excludeSelectors: ["div.jp-CodeCell"]
    },
    {
      matches: "www.facebook.com",
      selectors: [
        "div[dir=auto][style]",
        "div[dir=auto][class]",
        "span[lang]"
      ],
      atomicBlockSelectors: [
        "div[dir=auto][style]",
        "div[dir=auto][class]",
        "span[lang]"
      ],
      insertPosition: "afterend",
      preWhitespaceDetectedTags: ["DIV", "SPAN"],
      extraBlockSelectors: ["span.x1vvkbs"],
      excludeSelectors: ["[role=button]"],
      translationClasses: ["immersive-translate-text"],
      detectParagraphLanguage: !0
    },
    {
      matches: "m.youtube.com",
      selectors: [".comment-text"],
      observeUrlChange: !0,
      atomicBlockSelectors: [".comment-text"],
      globalStyles: {
        ".comment-text": "max-height:unset;"
      },
      injectedCss: [
        ".immersive-translate-target-wrapper img { width: 16px; height: 16px }"
      ]
    },
    {
      matches: "www.youtube.com",
      observeUrlChange: !0,
      selectors: [
        "yt-formatted-string[slot=content].ytd-comment-renderer",
        "yt-formatted-string.ytd-video-renderer",
        "h1 > yt-formatted-string.ytd-watch-metadata",
        "yt-formatted-string#video-title",
        "span#video-title",
        "a#video-title",
        "yt-formatted-string.ytd-transcript-segment-renderer"
      ],
      wrapperPrefix: "",
      wrapperSuffix: "",
      globalStyles: {
        "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;",
        "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
        "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
        "#video-title": "-webkit-line-clamp: unset;max-height: unset;"
      },
      urlChangeDelay: 2e3,
      atomicBlockSelectors: [
        "yt-formatted-string[slot=content].ytd-comment-renderer",
        "h1 > yt-formatted-string.ytd-watch-metadata",
        "yt-formatted-string#video-title",
        "span#video-title"
      ],
      excludeSelectors: ["[class^='lln-']"],
      extraBlockSelectors: [
        "yt-formatted-string.ytd-transcript-segment-renderer"
      ],
      detectParagraphLanguage: !0,
      injectedCss: [
        ".immersive-translate-target-wrapper img { width: 16px; height: 16px }"
      ]
    },
    {
      matches: "https://www.instagram.com/*",
      globalStyles: {
        "._ab05": "min-height:150px"
      },
      wrapperPrefix: "",
      wrapperSuffix: "",
      selectors: [
        "div._aa_c h1",
        "div._a9zs h1",
        "div._a9zr > div._a9zs > span",
        "div._ab5z._ab5_",
        'div._ac72 div[role="button"] > div:last-child',
        'li._acaz div[role="menuitem"]'
      ],
      atomicBlockSelectors: [
        "div._aa_c h1",
        'li._acaz div[role="menuitem"]'
      ]
    },
    {
      matches: "1paragraph.app",
      selectors: "#book"
    },
    {
      matches: "https://poeditor.com/projects/*",
      selectors: [".comment-body", ".reference_language .source-string"]
    },
    {
      matches: ["*.substack.com", "newsletter.rootsofprogress.org"],
      selectors: [
        ".post-preview-title",
        ".post-preview-description",
        ".post",
        ".comment-body"
      ],
      excludeSelectors: [
        ".captioned-button-wrap",
        ".subscription-widget-wrap",
        ".tweet-header",
        ".tweet-link-bottom",
        ".expanded-link",
        ".meta-subheader"
      ],
      extraBlockSelectors: [
        ".tweet-link-top",
        ".tweet-link-bottom",
        ".expanded-link"
      ]
    },
    {
      matches: ["seekingalpha.com/article/*", "seekingalpha.com/news/*"],
      selectors: ["[data-test-id=card-container]"],
      excludeSelectors: [
        "[data-test-id=post-page-meta]",
        "header > div:first-child"
      ]
    },
    {
      matches: "hn.algolia.com",
      selectors: [".Story_title > a:first-child", ".Story_comment > span"]
    },
    {
      matches: "read.readwise.io",
      selectors: [
        "div[class^='_titleRow_']",
        "div[class^='_description_']",
        "#document-text-content"
      ],
      detectParagraphLanguage: !0
    },
    {
      matches: ["www.inoreader.com", "*.inoreader.com"],
      selectors: [
        ".article_header_title",
        ".article_title_link",
        ".article_content",
        ".article_magazine_title_link"
      ],
      observeUrlChange: !1,
      globalStyles: {
        ".article_title_link": "-webkit-line-clamp: unset;max-height: unset;"
      }
    },
    {
      matches: "*.ideas.aha.io",
      excludeSelectors: [
        ".comment-header",
        ".vote-status",
        ".idea-meta",
        ".filters-title",
        ".ideas-showing-count",
        ".my-ideas-filters-wrapper",
        ".statuses-filters-wrapper",
        ".categories-filters-wrapper",
        "[class^='attachment']",
        "span[class^='attachment-name']"
      ]
    },
    {
      matches: ["scholar.google.com"],
      wrapperPrefix: `
`,
      selectors: ["h3 a[data-clk]", "div.gs_rs"],
      atomicBlockSelectors: [".gs_rs", "h3 a[data-clk]"]
    },
    {
      matches: "mail.google.com",
      selectors: [
        "h2[data-thread-perm-id]",
        "span[data-thread-id]",
        "div[data-message-id] div[class='']"
      ],
      detectParagraphLanguage: !0
    },
    {
      matches: "www.producthunt.com",
      excludeMatches: "https://www.producthunt.com/stories/*",
      selectors: [
        "h2",
        "div[class^='styles_htmlText__']",
        "[class^='styles_tagline']",
        "a[href^='/discussions/'].fontWeight-600",
        "button[class^='styles_textButton'] > div > span",
        "h5 + p"
      ],
      globalStyles: {
        "h5 + p": "height:unset;"
      },
      excludeTags: [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "INPUT",
        "LABEL",
        "IMG",
        "SUB",
        "SUP",
        "BR",
        "CODE",
        "KBD",
        "WBR",
        "TT"
      ]
    },
    {
      matches: "*.gitbook.io",
      additionalSelectors: ["main"],
      _comment: "https://midjourney.gitbook.io/docs/user-manual"
    },
    {
      matches: "https://codeforces.com/*",
      stayOriginalTags: ["[class^='MathJax']"]
    },
    {
      matches: "arxiv.org",
      additionalSelectors: ["h1", "blockquote.abstract"]
    },
    {
      matches: "https://discord.com/channels/*",
      selectors: [
        "li[id^=chat-messages] div[id^=message-content]",
        "h3[data-text-variant='heading-lg/semibold']",
        "section[aria-label='Search Results'] div[id^=message-content]"
      ],
      extraBlockSelectors: [
        "[class^='embedFieldValue']",
        "li[class^='card'] div[class^='message']",
        "[data-list-item-id^='forum-channel-list'] div[class^='headerText']"
      ],
      atomicBlockSelectors: [
        "[class^='embedFieldValue']",
        "li[class^='card'] div[class^='message']",
        "[data-list-item-id^='forum-channel-list'] div[class^='headerText']"
      ],
      excludeSelectors: [
        "#channels",
        "[data-list-id^='members']",
        "div[class^='repliedTextContent']",
        "div[class^='repliedTextPreview']",
        "div[class^='messageAttachment']",
        "div[class^='repliedMessage']",
        "div[class*='isSystemMessage']",
        "div[class^='avatarWrapper']",
        "div[class^='container'] [class^='topLine']",
        "div[class^='container'] [class^='bottomLine']",
        "h3[class^='header']",
        "h2[class^='forumPostTitle']",
        "[class^='title'][aria-label='Channel header']",
        "div[class^='sectionHeader']",
        "article[class^=embedWrapper] [class^=anchor]",
        "article[class^=embedWrapper] [class^=embedProvider]",
        "article[class^=embedWrapper] [class^=embedFooter]",
        "[data-list-item-id^='forum-channel-list'] div[class^='tagsContainer']",
        "li[class^='card'] div[class^='tags']",
        "li[class^='card'] div[class^='footer']"
      ],
      globalStyles: {
        "div[class^=headerText]": "max-height: unset;",
        "div[class^=message]": "max-height: unset;",
        "h3[data-text-variant='heading-lg/semibold']": "-webkit-line-clamp: none;"
      },
      detectParagraphLanguage: !0,
      wrapperPrefix: "<br />",
      wrapperSuffix: ""
    },
    {
      matches: "web.telegram.org/z/*",
      selectors: [
        ".message",
        ".reply-markup-button-text",
        ".bot-commands-list-element-description"
      ],
      detectParagraphLanguage: !0
    },
    {
      matches: ["web.telegram.org/k/*", "web.telegram.org/k/"],
      selectors: [
        ".message",
        ".reply-markup-button-text",
        ".bot-commands-list-element-description"
      ],
      detectParagraphLanguage: !0
    },
    {
      matches: "gist.github.com",
      selectors: [".markdown-body", ".readme"],
      detectParagraphLanguage: !0
    },
    {
      matches: "lobste.rs",
      excludeMatches: ["https://lobste.rs/about", "https://lobste.rs/chat"],
      selectors: [".u-repost-of", ".comment_text"]
    },
    {
      matches: "*.slack.com",
      selectors: [".p-rich_text_block"],
      detectParagraphLanguage: !0
    },
    {
      matches: "1paragraph.app",
      additionalSelectors: ["#book"]
    },
    {
      matches: "www.artstation.com/artwork/*",
      excludeSelectors: ".project-description a",
      selectors: [".project-description", "div.project-comment-text"],
      atomicBlockSelectors: "div.project-comment-text",
      detectParagraphLanguage: !0
    },
    {
      matches: "www.artstation.com/learning/courses/*",
      additionalSelectors: [
        "footer.learning-course-description.ng-star-inserted > span"
      ],
      excludeSelectors: ".learning-card-meta"
    },
    {
      matches: [
        "https://www.artstation.com/blogs",
        "https://www.artstation.com/blogs/*"
      ],
      detectParagraphLanguage: !0,
      additionalSelectors: [".comment-item-body"],
      atomicBlockSelectors: [".author-headline", ".author-location"],
      excludeSelectors: [
        "blog-card-thumbnail",
        "blog-card-header",
        ".blog-card-author",
        ".blog-card-meta",
        ".blog-view-header",
        ".blog-grid-title",
        ".post-meta-header"
      ]
    },
    {
      matches: "www.figma.com/community/*",
      normalizeBody: "div.ql-editor[contenteditable='false']",
      excludeSelectors: [
        "div[class*='metadataRight']",
        "div[class*='commentMetaAndOptions']"
      ],
      globalStyles: {
        "div[class*='mini_cardBottomRowSizing']": "height: 3em;"
      },
      additionalSelectors: "div[class*='mini_cardBottomRow_Metadata']",
      atomicBlockSelectors: "div[class*='mini_cardBottomRow_Metadata']",
      stayOriginalSelectors: "[data-tooltip='tooltip-user-info']"
    },
    {
      matches: "www.google.*/search*",
      detectParagraphLanguage: !0,
      excludeSelectors: ["a h3 + div", "div#sfooter"],
      wrapperSuffix: "",
      globalStyles: {
        "div[data-content-feature='1'] > div": "-webkit-line-clamp: unset;max-height: unset;",
        "div[style='-webkit-line-clamp:2']": "-webkit-line-clamp: unset;max-height: unset;"
      },
      extraBlockSelectors: [".MUFPAc"]
    },
    {
      matches: "lowendtalk.com",
      selectors: ["[role=heading]", "h1", ".userContent"]
    },
    {
      matches: "www.linkedin.com/jobs/*",
      selectors: ["#job-details > span"]
    },
    {
      matches: "www.linkedin.com",
      addtionalSelectors: ["span.break-words > span > span[dir=ltr]"]
    },
    {
      matches: "www.indiehackers.com",
      selectors: [".content", "h1", ".feed-item__title-link"]
    },
    {
      matches: "libreddit.de",
      selectors: ["h2.post_title", ".comment_body > .md"]
    },
    {
      matches: ["notion.site", "www.notion.so"],
      selectors: ["div[data-block-id]"]
    },
    {
      matches: "www.newyorker.com",
      additionalSelectors: ["h1", "[data-testid=SummaryItemHed]"]
    },
    {
      matches: "start.me",
      selectors: [
        ".rss-article__title",
        ".rss-articles-list__article-link",
        ".rss-showcase__title",
        ".rss-showcase__text"
      ]
    },
    {
      matches: "www.scmp.com",
      additionalSelectors: [".info__subHeadline", ".section-content h2"]
    },
    {
      matches: "www.lesswrong.com",
      extraBlockSelectors: ["span.commentOnSelection"]
    },
    {
      matches: [
        "mastodon.social",
        "mastodon.online",
        "kolektiva.social",
        "indieweb.social",
        "mastodon.world",
        "infosec.exchange"
      ],
      selectorMatches: ["div#mastodon"],
      selectors: ["div.status__content__text"],
      detectLanguage: !0
    },
    {
      matches: "www.cnbc.com",
      additionalSelectors: ["div.RenderKeyPoints-list"],
      urlChangeDelay: 1e3,
      globalStyles: {
        "div.Card-titleContainer > div": "-webkit-line-clamp: unset;max-height: unset;"
      }
    },
    {
      matches: "app.daily.dev",
      selectors: [
        "h1",
        ".typo-body",
        "article h3",
        "[class^=markdown_markdown]"
      ],
      globalStyles: {
        ".line-clamp-3": "-webkit-line-clamp: unset"
      }
    },
    {
      matches: "www.aljazeera.com",
      addtionalSelectors: ["h1", ".article__subhead"]
    },
    {
      matches: ["*.pornhub.com", "pornhub.com"],
      selectors: [
        ".title >a",
        ".title > span",
        ".thumbnailTitle",
        ".commentMessage > span"
      ],
      detectParagraphLanguage: !0,
      wrapperPrefix: `

`,
      wrapperSuffix: `
`,
      globalStyles: {
        ".title": "height: unset; max-height: unset;"
      }
    },
    {
      matches: ["weibo.com"],
      selectors: ["div[class^='detail_wbtext']"]
    },
    {
      matches: ["medium.com", "*.medium.com"],
      selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
      urlChangeDelay: 2e3,
      selectors: [
        "article section",
        "h2",
        "[aria-hidden='false'] pre",
        "article p"
      ],
      excludeSelectors: ["[aria-label='Post Preview Reading Time']"],
      globalStyles: {
        h2: "-webkit-line-clamp: unset;max-height:unset;",
        "article p": "-webkit-line-clamp: unset;max-height:unset;"
      }
    },
    {
      selectorMatches: ["meta[property='og:site_name'][content='Nitter']"],
      selectors: [".tweet-content", ".quote-text"]
    },
    {
      matches: "*.fandom.com",
      additionalSelectors: [".mcf-card-article__title"]
    },
    {
      matches: ["www.washingtonpost.com"],
      additionalSelectors: ["[data-qa='article-body']"]
    },
    {
      matches: "www.economist.com",
      extraInlineSelectors: "span[data-caps='initial']"
    },
    {
      matches: "www.healthline.com",
      excludeSelectors: ".icon-hl-trusted-source-after"
    },
    {
      matches: "www.amazon.com",
      selectors: [
        "h1",
        "h2 > a > span",
        "[data-a-expander-name='book_description_expander'] > div",
        "[data-feature-name='editorialReviews']",
        '[data-a-expander-name="review_text_read_more"] > div > span',
        '[data-feature-name="featurebullets"]',
        '[data-feature-name="aplus"'
      ],
      excludeBlockSelectors: ["div.reviewText > span"],
      globalStyles: {
        ".s-line-clamp-2": "-webkit-line-clamp: unset;max-height: unset;",
        "[data-a-expander-name='review_text_read_more']": " max-height: unset;"
      }
    },
    {
      matches: "www.bloomberg.com",
      urlChangeDelay: 2e3
    },
    {
      matches: "xueshu.baidu.com",
      globalStyles: {
        ".abstract_wr": "height: unset; overflow: visible; max-height:unset;"
      }
    },
    {
      matches: "www.sciencedirect.com",
      urlChangeDelay: 2e3,
      stayOriginalSelectors: ["span.display"]
    },
    {
      matches: "www.thehighestofthemountains.com",
      extraBlockSelectors: "div"
    },
    {
      matches: "telegra.ph",
      normalizeBody: "div.ql-editor[contenteditable='false']"
    },
    {
      matches: ["*.annas-archive.org", "annas-archive.org"],
      selectors: ["h3.text-xl.font-bold", "div[class='truncate text-sm']"],
      globalStyles: {
        "div[id^='link-index-']": "height: unset; max-height: unset;"
      },
      normalizeBody: "body",
      extraBlockSelectors: ["a.custom-a"]
    },
    {
      matches: ["explainshell.com"],
      selectors: ["[class='help-box']"]
    },
    {
      matches: ["apnews.com"],
      urlChangeDelay: 2e3
    },
    {
      matches: "play.google.com",
      additionalSelectors: ["header[data-review-id] + div"]
    },
    {
      matches: ["www.tumblr.com"],
      selectors: [
        "article h1",
        "article > header + div",
        "[data-testid=notes-root] p",
        "div.k31gt",
        "p",
        "article ul",
        "article h2",
        "article h3",
        "article h4",
        "article h5",
        "article h6",
        "article blockquote",
        "article ol"
      ],
      excludeSelectors: ["div.fAAi8", "div.wvu3V"],
      preWhitespaceDetectedTags: ["DIV", "SPAN", "P"]
    },
    {
      matches: ["mail.qq.com/cgi-bin/frame_html"],
      selectors: ["#thisiddoesnotexists"]
    },
    {
      matches: "https://www.tinytask.net",
      globalStyles: {
        "table > tbody > tr > td > center > table > tbody > tr > td > ul > li": "height: 100%"
      }
    },
    {
      matches: "www.foxnews.com",
      shadowRootSelectors: [
        "[data-spot-im-module-default-area='conversation'] > div"
      ],
      excludeSelectors: [
        ".components-MessageDetails-index__message-details-wrapper",
        "div[class^=SlideDown__container]",
        ".components-MessageActions-index__messageActionsWrapper",
        "span[data-openweb-allow-amp]",
        "div.spcv_typing-users"
      ]
    },
    {
      matches: "www.afreecatv.com",
      globalStyles: {
        "a.title": "max-height:unset;-webkit-line-clamp:unset;"
      }
    },
    {
      matches: "opennet.ru",
      excludeTags: [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "NOSCRIPT",
        "INPUT",
        "BUTTON",
        "BASE",
        "LABEL",
        "SELECT",
        "OPTION",
        "IMG",
        "SUB",
        "SUP",
        "HR",
        "PRE",
        "CODE",
        "KBD",
        "WBR",
        "TT",
        "RT",
        "RP",
        "META"
      ]
    },
    {
      matches: [
        "construct.net"
      ],
      excludeMatches: [
        "preview.construct.net"
      ],
      additionalSelectors: ["aside", "div.manualContent"],
      atomicBlockSelectors: [],
      stayOriginalSelectors: ["a.usernameReference"],
      additionalInlineSelectors: ["a.forumLink"],
      additionalExcludeSelectors: [
        "div.topNav",
        ".breadCrumbNav",
        "div.usernameLink",
        "ul.authorDetails",
        "ul.tagViewer",
        "ul.subForumForums",
        "ul.postTools",
        "li.comment ul.controls",
        "div.forumTopNavWrap",
        "div.downloadWrap",
        "div.articleLeftMenu",
        "div.usernameTextWrap",
        "div#FilterMenu.FilterMenu",
        "div.viewAddonRightMenu",
        "div.extendedMenu.addonsSubMenu",
        "#BottomLinks.bottomLinks",
        "span.tagViewWrap",
        "div#LeftSide.leftSide",
        "div#BottomWrap.bottomWrap",
        "div.courseListWrap div.overview",
        "div.conversationControls",
        "div.contentWrapper h1",
        "div.conversationControls",
        ".forumControlsWrapper",
        ".forumsBottomNavWrap",
        "td.location a#LocationLink",
        "#TopLevelComments .topBar",
        "#TopLevelComments .controls",
        ".manualContentWrap .menuWrap",
        ".manualContent dl dt"
      ],
      globalStyles: {
        "td.location a#LocationLink": "padding-top: 4px;",
        "div.articleMain .tutCourseWrap": "align-items: flex-start;"
      }
    },
    {
      matches: "www.construct.net/en/blogs/*",
      excludeSelectors: [
        ".breadCrumbNav",
        ".favouriteWrap",
        ".usernameLink",
        ".followWrapper",
        ".blogPostStats"
      ]
    },
    {
      matches: "getpocket.com",
      selectors: ["h2.title", "div.excerpt p", "main > article"],
      globalStyles: {
        "h2.title": "max-height:unset;-webkit-line-clamp:unset;",
        "div.excerpt p": "max-height:unset;-webkit-line-clamp:unset;"
      }
    },
    {
      matches: "huggingface.co",
      globalStyles: {
        ".line-clamp-2": "-webkit-line-clamp:unset;max-height:unset;"
      }
    },
    {
      matches: "www.statista.com",
      globalStyles: {
        ".itemContent__text": "height:unset;max-height:unset;",
        ".itemContent__subline": "height:unset;max-height:unset;"
      }
    },
    {
      matches: "epub-reader.online",
      globalStyles: {
        "span.slide-contents-item-label": "overflow:visible;max-height:unset;white-space:normal;"
      },
      atomicBlockSelectors: "div.slide-contents-item"
    },
    {
      matches: "https://you.com/search",
      globalStyles: {
        h3: "max-height:unset;-webkit-line-clamp:unset;",
        ".caKYaC": "max-height:unset;-webkit-line-clamp:unset;",
        ".dDwDsu": "max-height:unset;-webkit-line-clamp:unset;"
      },
      excludeSelectors: "div.hpIWZO"
    },
    {
      matches: "auth0.openai.com",
      excludeSelectors: ["form", "header > h1"]
    },
    {
      matches: "chat.openai.com",
      excludeSelectors: [
        "div.absolute.bottom-0.left-0.w-full",
        "h1",
        "div#headlessui-portal-root"
      ]
    },
    {
      matches: "glasp.co",
      excludeSelectors: [".home_overview_list_content_wrapper"]
    },
    {
      matches: "developer.chrome.com",
      excludeSelectors: ["web-tabs", "ul.code-sections--summary"]
    },
    {
      matches: "https://rarbg.to/*",
      wrapperPrefix: "",
      wrapperSuffix: "",
      globalStyles: {
        ".lista2 h2": "line-height: 14px;"
      },
      selectors: [
        "#news_content",
        "#top_news > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td",
        "#top_news > table > tbody > tr > td > table > tbody > tr > td > h2",
        "body > table > tbody > tr > td > div > table > tbody > tr > td > b",
        "#newsRight > table> tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td",
        "#newsRight > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > span > b"
      ]
    },
    {
      matches: ["developer.android.google.cn", "developer.android.com"],
      observeUrlChange: !0,
      additionalSelectors: ["aside", "google-codelab-step"]
    },
    {
      matches: "https://apps.microsoft.com/store/detail/*",
      additionalSelectors: ["pre"],
      globalStyles: {
        ".line-clamp": "-webkit-line-clamp:unset;max-height:unset;"
      },
      isTransformPreTagNewLine: !0
    },
    {
      matches: "gitlab.com",
      excludeSelectors: [
        ".tree-content-holder",
        "nav",
        ".home-panel-metadata",
        "div[data-testid=project_topic_list]",
        ".commit"
      ]
    },
    {
      matches: "www.newthingsunderthesun.com",
      additionalSelectors: ["[translate=no]"]
    },
    {
      matches: "https://www.tiktok.com/*/video/*",
      selectors: [
        "[data-e2e^=comment-level]",
        "[data-e2e=browse-video-desc] > span"
      ]
    },
    {
      matches: "www.rfc-editor.org",
      isTransformPreTagNewLine: !0,
      excludeTags: [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "NOSCRIPT",
        "INPUT",
        "BUTTON",
        "BASE",
        "SELECT",
        "OPTION",
        "IMG",
        "SUB",
        "SUP",
        "HR",
        "CODE",
        "KBD",
        "WBR",
        "TT",
        "RT",
        "RP",
        "META",
        "ASIDE",
        "FOOTER",
        "MATH"
      ]
    },
    {
      matches: "https://steamcommunity.com/app/*/discussions/",
      globalStyles: {
        ".forum_topic": "height:auto;",
        ".forum_topic_name": "white-space:normal;"
      },
      excludeSelectors: [
        ".forum_paging",
        ".forum_topic_reply_count",
        ".forum_topic_lastpost",
        ".forum_topic_award_count"
      ],
      observeUrlChange: !0
    },
    {
      matches: "https://www.nature.com/articles/*",
      excludeSelectors: [
        ".c-header",
        ".u-container",
        ".c-recommendations-header",
        ".c-recommendations-list-container",
        ".c-article-references__links",
        ".c-article-identifiers",
        ".c-article-author-list",
        ".c-article-metrics-bar__wrapper",
        ".c-article__pill-button",
        "#author-information-content",
        "#article-info-section"
      ]
    },
    {
      matches: "https://www.webofscience.com/wos/woscc/summary/*",
      globalStyles: {
        ".abstract": "height:auto !important;",
        ".show-more-lines": "height:unset !important;"
      },
      excludeSelectors: [
        ".summary-left-panel",
        ".authors",
        "app-summary-authors + div"
      ],
      observeUrlChange: !0,
      mutationChangeDelay: 600
    },
    {
      matches: ["appleinsider.com"],
      excludeSelectors: ["#topic-nav"]
    },
    {
      matches: "https://www.jetbrains.com/help/*",
      extraBlockSelectors: [
        "[data-test=prompt]"
      ]
    },
    {
      matches: ["https://crates.io/search*"],
      selectors: [
        "div[class^=_description-box] div[class^=_description]"
      ]
    }
  ]
};

// config.ts
function getEnvUserConfig() {
  if (env.PROD === "1")
    return {};
  let defaultUserConfig = {};
  if (env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID && env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY) {
    let tencentAuthConfig = {
      secretId: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,
      secretKey: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY
    };
    defaultUserConfig.translationServices = {}, defaultUserConfig.translationServices.tencent = tencentAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID && env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY) {
    let baiduAuthConfig = {
      appid: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,
      key: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY
    };
    defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.baidu = baiduAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN) {
    let caiyunAuthConfig = {
      token: env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN
    };
    defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.caiyun = caiyunAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY) {
    let openlAuthConfig = {
      apikey: env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY
    };
    defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.openl = openlAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID && env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET) {
    let youdaoAuthConfig = {
      appId: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,
      appSecret: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET
    };
    defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.youdao = youdaoAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID && env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY) {
    let volcAuthConfig = {
      accessKeyId: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,
      secretAccessKey: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY
    };
    defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.volc = volcAuthConfig;
  }
  if (env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY) {
    let deeplAuthConfig = {
      authKey: env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY
    };
    defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl = deeplAuthConfig;
  }
  return env.DEEPL_PROXY_ENDPOINT && (defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl || (defaultUserConfig.translationServices.deepl = {}), defaultUserConfig.translationServices.deepl.immersiveTranslateApiUrl = env.DEEPL_PROXY_ENDPOINT), env.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT && (defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl || (defaultUserConfig.translationServices.deepl = {}), defaultUserConfig.translationServices.deepl.immersiveTranslateDeeplTokenUrl = env.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT), env.DEBUG === "1" && (defaultUserConfig.debug = !0, defaultUserConfig.cache = !1, defaultUserConfig.alpha = !0), env.MOCK === "1" && (defaultUserConfig.translationService = "mock"), env.IMMERSIVE_TRANSLATE_SERVICE && (defaultUserConfig.translationService = env.IMMERSIVE_TRANSLATE_SERVICE), defaultUserConfig;
}
async function getLocalConfig() {
  let localConfig = await browserAPI.storage.local.get(localConfigStorageKey);
  if (localConfig[localConfigStorageKey]) {
    let currentConfig = localConfig[localConfigStorageKey], currentTempTranslationDomains = currentConfig.tempTranslationUrlMatches || [], newDomains = currentTempTranslationDomains.filter(
      (item) => item.expiredAt > Date.now()
    ), isChanged = !1;
    newDomains.length !== currentTempTranslationDomains.length && (currentTempTranslationDomains = newDomains, isChanged = !0);
    let newLocalConfig = {
      ...currentConfig,
      tempTranslationUrlMatches: [
        ...currentTempTranslationDomains
      ]
    };
    return isChanged && await setLocalConfig(newLocalConfig), newLocalConfig;
  } else
    return {};
}
async function setLocalConfig(localConfig) {
  await browserAPI.storage.local.set({ [localConfigStorageKey]: localConfig });
}
async function setBuildinConfig(buildinConfig) {
  await browserAPI.storage.local.set({ [buildinConfigStorageKey]: buildinConfig });
}
async function getConfig() {
  let storageBuildInConfig = await browserAPI.storage.local.get(
    buildinConfigStorageKey
  ), finalBuildInConfig = {
    ...buildin_config_default,
    buildinConfigUpdatedAt: env.BUILD_TIME
  };
  if (storageBuildInConfig[buildinConfigStorageKey]) {
    let storageBuildInConfigValue = storageBuildInConfig[buildinConfigStorageKey];
    if (storageBuildInConfigValue && storageBuildInConfigValue.buildinConfigUpdatedAt) {
      let storageBuildinConfigUpdatedAt = new Date(
        storageBuildInConfigValue.buildinConfigUpdatedAt
      ), buildinConfigUpdatedAt = new Date(
        finalBuildInConfig.buildinConfigUpdatedAt
      );
      storageBuildinConfigUpdatedAt > buildinConfigUpdatedAt && (finalBuildInConfig = storageBuildInConfigValue);
    }
  }
  let shortcutsFromBrowser = {};
  if (!isMonkey() && browserAPI.commands && browserAPI.commands.getAll) {
    let commandResult = await browserAPI.commands.getAll();
    for (let command of commandResult)
      command.name && command.shortcut && (shortcutsFromBrowser[command.name] = command.shortcut);
  }
  let defaultConfig = getBuildInConfig(), envUserConfig = getEnvUserConfig(), userConfig = await getUserConfig(), globalUserConfig = globalThis.IMMERSIVE_TRANSLATE_CONFIG || {}, localConfig = await getLocalConfig(), now = /* @__PURE__ */ new Date();
  if (localConfig && localConfig.tempTranslationUrlMatches && localConfig.tempTranslationUrlMatches.length > 0) {
    let validUrlMatches = localConfig.tempTranslationUrlMatches.filter(
      (urlMatch) => new Date(urlMatch.expiredAt) > now
    );
    if (validUrlMatches.length > 0) {
      let currentMatches = userConfig.translationUrlPattern ? userConfig.translationUrlPattern?.matches || [] : [], currentMatchesArray = Array.isArray(currentMatches) ? currentMatches : [currentMatches], finalMatches = Array.from(
        new Set(
          currentMatchesArray.concat(
            validUrlMatches.map((urlMatch) => urlMatch.match)
          )
        )
      );
      userConfig.translationUrlPattern = {
        ...userConfig.translationUrlPattern,
        matches: finalMatches
      };
    }
  }
  let mergedUserConfig = Object.assign(
    {},
    globalUserConfig,
    envUserConfig,
    userConfig
  );
  if (!mergedUserConfig.interfaceLanguage) {
    let defaultInterfaceLanguage = await getBrowserIntefaceLanguage();
    mergedUserConfig.interfaceLanguage = defaultInterfaceLanguage;
  }
  let finalConfig = Object.assign(defaultConfig, finalBuildInConfig), configKeys = Object.keys(finalConfig), assignKeys = [
    "translationUrlPattern",
    "translationLanguagePattern",
    "immediateTranslationPattern",
    "translationBodyAreaPattern",
    "translationParagraphLanguagePattern",
    "translationThemePatterns",
    "translationGeneralConfig",
    "shortcuts"
  ];
  for (let key of configKeys) {
    let configKey = key;
    if (configKey === "generalRule")
      typeof mergedUserConfig[configKey] == "object" && (finalConfig[configKey] = mergeRule(
        defaultConfig[configKey],
        mergedUserConfig[configKey]
      ));
    else if (configKey === "translationServices") {
      let userConfigValue = mergedUserConfig[configKey] || {}, buildInConfigValue = finalBuildInConfig[configKey] || {}, buildInConfigKeys = Object.keys(buildInConfigValue), userConfigKeys = Object.keys(userConfigValue), allUniqueKeys = [
        .../* @__PURE__ */ new Set([...buildInConfigKeys, ...userConfigKeys])
      ], finalConfigValue = {};
      for (let key2 of allUniqueKeys)
        finalConfigValue[key2] = {
          // @ts-ignore: it's ok
          ...buildInConfigValue[key2],
          ...userConfigValue[key2]
        };
      finalConfig[configKey] = finalConfigValue;
    } else if (typeof mergedUserConfig[configKey] != "string" && typeof mergedUserConfig[configKey] != "boolean" && typeof mergedUserConfig[configKey] != "number" && assignKeys.includes(configKey))
      mergedUserConfig[configKey] && (finalConfig[configKey] = Object.assign(
        // @ts-ignore: ignore type error
        finalConfig[configKey],
        mergedUserConfig[configKey]
      )), configKey === "shortcuts" && (finalConfig[configKey] = {
        ...finalConfig[configKey],
        ...shortcutsFromBrowser
      });
    else if (configKey === "rules") {
      if (Array.isArray(mergedUserConfig[configKey]) && (finalConfig[configKey] = [
        ...mergedUserConfig[configKey],
        ...finalConfig[configKey]
      ]), env.PROD === "0" && env.DEV_RULES) {
        let devRules = JSON.parse(env.DEV_RULES);
        finalConfig[configKey] = [
          ...devRules,
          ...finalConfig[configKey]
        ];
      }
    } else
      mergedUserConfig[configKey] !== void 0 && (finalConfig[configKey] = mergedUserConfig[configKey]);
  }
  return finalConfig.donateUrl = finalBuildInConfig.donateUrl, finalConfig.minVersion = finalBuildInConfig.minVersion, finalConfig.feedbackUrl = finalBuildInConfig.feedbackUrl, finalConfig;
}
async function getUserConfig() {
  return (await browserAPI.storage.sync.get("userConfig") || {}).userConfig || {};
}
var getBrowserIntefaceLanguage = async () => {
  let defaultInterfaceLanguage = (await browserAPI.i18n.getAcceptLanguages()).map((lang) => formatLanguage(lang)).find((lang) => translations[lang]);
  return defaultInterfaceLanguage || "en";
}, getBuildInConfig = () => {
  let finalBuildInConfig = {
    ...buildin_config_default,
    buildinConfigUpdatedAt: env.BUILD_TIME
  };
  return {
    ...finalBuildInConfig,
    targetLanguage: fallbackLanguage,
    interfaceLanguage: "en",
    debug: !1,
    alpha: !1,
    translationUrlPattern: {
      matches: [],
      excludeMatches: []
    },
    translationLanguagePattern: {
      matches: [],
      excludeMatches: []
    },
    translationThemePatterns: {},
    translationParagraphLanguagePattern: {
      matches: [],
      excludeMatches: [],
      selectorMatches: [],
      excludeSelectorMatches: []
    },
    translationBodyAreaPattern: {
      matches: [],
      excludeMatches: [],
      selectorMatches: [],
      excludeSelectorMatches: []
    },
    translationTheme: "none",
    translationService: "google",
    translationArea: "main",
    translationStartMode: "dynamic",
    translationServices: {},
    generalRule: {
      ...finalBuildInConfig.generalRule
    },
    translationGeneralConfig: { engine: "google" },
    rules: []
  };
};

// dom/current_language.ts
var currentPageLanguageByClient = "auto";
function setCurrentPageLanguageByClient(lang) {
  currentPageLanguageByClient = lang;
}

// dom/context.ts
async function getContext(options) {
  let { url, config, state } = options, urlObj = new URL(url), sourceLanguage = "auto", {
    translationParagraphLanguagePattern,
    translationService,
    translationServices,
    translationTheme,
    translationThemePatterns,
    translationUrlPattern,
    targetLanguage,
    sourceLanguageUrlPattern,
    immediateTranslationPattern
  } = config, isDetectParagraphLanguage = isMatched(
    url,
    translationParagraphLanguagePattern
  ), isImmediateTranslate = isMatched(url, immediateTranslationPattern), defaultTranslationService = translationService, services = Object.keys(translationServices);
  for (let service of services) {
    let serviceConfig = translationServices[service];
    if (isMatched(url, serviceConfig)) {
      defaultTranslationService = service;
      break;
    }
  }
  let defaultTheme = translationTheme, themes = Object.keys(translationThemePatterns);
  for (let theme of themes) {
    let themeConfig = translationThemePatterns[theme];
    if (themeConfig && isMatched(url, themeConfig)) {
      defaultTheme = theme;
      break;
    }
  }
  let isTranslateUrl = isMatched(url, translationUrlPattern), isTranslateExcludeUrl = isMatchedExclude(
    url,
    translationUrlPattern
  );
  isTranslateExcludeUrl || (isTranslateExcludeUrl = isMatchUrl(url, buildinExcludeUrls));
  let sourceConfigLanguages = Object.keys(sourceLanguageUrlPattern), sourceLanguageReverseMap = {};
  for (let language of sourceConfigLanguages) {
    let matchPattern = sourceLanguageUrlPattern[language];
    if (matchPattern && matchPattern.matches)
      for (let match of matchPattern.matches)
        sourceLanguageReverseMap[match] = language;
  }
  let sourceUrlMatches = Object.keys(sourceLanguageReverseMap), sourceUrlMatched = getMatchedUrl(url, sourceUrlMatches);
  sourceUrlMatched && (sourceLanguage = sourceLanguageReverseMap[sourceUrlMatched] ?? "auto", sourceLanguageReverseMap[sourceUrlMatched] && sourceLanguageReverseMap[sourceUrlMatched] !== "auto" && setCurrentPageLanguageByClient(
    sourceLanguageReverseMap[sourceUrlMatched]
  ));
  let defaultTargetLanguage = targetLanguage || "zh-CN", hostname2 = urlObj.hostname, encryptedHostname = await sha256(hostname2), pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash, encryptedPath = await sha256(pathAndQueryAndHash), encryptedUrl = `https://${encryptedHostname}.com/${encryptedPath}`, localConfig = await getLocalConfig(), translationStartMode = config.translationStartMode;
  translationStartMode === "dynamic" && isImmediateTranslate && (translationStartMode = "immediate");
  let ctx = {
    targetLanguage: defaultTargetLanguage,
    config,
    translationService: defaultTranslationService,
    isTranslateUrl,
    sourceLanguage,
    isTranslateExcludeUrl,
    rule: config.generalRule,
    url,
    encryptedUrl,
    state: state ? Object.assign({
      translationArea: config.translationArea,
      translationStartMode,
      isAutoTranslate: !1,
      isNeedClean: !1,
      isDetectParagraphLanguage,
      translationTheme: defaultTheme
    }, state) : {
      translationArea: config.translationArea,
      translationStartMode,
      isAutoTranslate: !1,
      isNeedClean: !1,
      isDetectParagraphLanguage,
      translationTheme: defaultTheme
    },
    localConfig
  };
  ctx.state.translationArea === "body" && (ctx.config.generalRule.excludeTags = ctx.config.generalRule.excludeTags.filter((tag) => !ctx.config.generalRule.bodyTranslateTags.includes(tag)), ctx.config.generalRule.additionalExcludeSelectors = ctx.config.generalRule.additionalExcludeSelectors.filter(
    (selector) => selector !== ".btn"
  )), ctx.translationService === "d" && (config.immediateTranslationTextCount = 0);
  let rules = config.rules, rule;
  globalThis.PDFViewerApplication ? rule = rules.find((rule2) => rule2.isPdf) : rule = rules.find((rule2) => isMatched(url, rule2)), ctx.rule.isPdf && (ctx.state.translationArea = "main"), ctx.state.translationArea === "body" && (ctx.rule.paragraphMinTextCount = 1, ctx.rule.paragraphMinWordCount = 1);
  let generalRule = config.generalRule;
  return rule && (ctx.rule = mergeRule(generalRule, rule)), ctx.state.translationArea === "body" && ctx.rule.excludeTags && (ctx.rule.excludeTags = ctx.rule.excludeTags.filter((tag) => !ctx.rule.bodyTranslateTags.includes(tag) && !ctx.rule.forceTranslateTags.includes(tag))), ctx;
}
function isMatched(url, matchPattern) {
  if (!matchPattern)
    return !1;
  let { matches, excludeMatches, selectorMatches, excludeSelectorMatches } = matchPattern;
  return excludeMatches && excludeMatches.length > 0 && isMatchUrl(url, excludeMatches) ? !1 : matches && matches.length > 0 && isMatchUrl(url, matches) ? !0 : excludeSelectorMatches && excludeSelectorMatches.length > 0 && isMatchSelectors(excludeSelectorMatches) ? !1 : !!(selectorMatches && selectorMatches.length > 0 && isMatchSelectors(selectorMatches));
}
function isMatchedExclude(url, matchPattern) {
  if (!matchPattern)
    return !1;
  let { excludeMatches, excludeSelectorMatches } = matchPattern;
  return !!(excludeMatches && excludeMatches.length > 0 && isMatchUrl(url, excludeMatches) || excludeSelectorMatches && excludeSelectorMatches.length > 0 && isMatchSelectors(excludeSelectorMatches));
}

// utils/is_valid_html_url.ts
function isValidHtmlUrl(url) {
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch {
    return !1;
  }
  let pathname = urlObj.pathname;
  return pathname.endsWith(".html") || pathname.endsWith(".htm") ? !0 : !(urlObj.protocol !== "http:" && urlObj.protocol !== "https:" && urlObj.protocol !== "file:" && urlObj.protocol !== "data:");
}

// libs/use-chrome-storage/storage.ts
var storage = {
  get: (key, defaultValue, storageArea) => {
    let keyObj = defaultValue === void 0 ? key : { [key]: defaultValue };
    return browserAPI.storage[storageArea].get(
      keyObj
    );
  },
  set: (key, value, storageArea) => browserAPI.storage[storageArea].set({ [key]: value })
};

// libs/use-chrome-storage/useChromeStorage.ts
function useChromeStorage(key, initialValue, storageArea) {
  let [INITIAL_VALUE2] = P2(() => typeof initialValue == "function" ? initialValue() : initialValue), [STORAGE_AREA] = P2(storageArea), [state, setState] = P2(INITIAL_VALUE2), [isPersistent, setIsPersistent] = P2(!1), [error, setError] = P2("");
  j2(() => {
    storage.get(key, INITIAL_VALUE2, STORAGE_AREA).then((res) => {
      res[key] && setState(res[key]), setIsPersistent(!0), setError("");
    }).catch((error2) => {
      setIsPersistent(!1), setError(error2);
    });
  }, [key, INITIAL_VALUE2, STORAGE_AREA]);
  let updateValue = L2(
    // @ts-ignore: npm package is not typed
    (newValue) => {
      let toStore = typeof newValue == "function" ? newValue(state) : newValue;
      log_default.debug("new settings", toStore), storage.set(key, toStore, STORAGE_AREA).then(() => {
        setState(toStore), setIsPersistent(!0), setError("");
      }).catch((error2) => {
        setState(toStore), setIsPersistent(!1), setError(error2);
      });
    },
    [STORAGE_AREA, key, state]
  );
  return [state, updateValue, isPersistent, error];
}

// libs/use-chrome-storage/createChromeStorageStateHook.ts
function createChromeStorageStateHook(key, initialValue, storageArea) {
  let consumers = [];
  return function() {
    let [value, setValue, isPersistent, error] = useChromeStorage(
      key,
      initialValue,
      storageArea
    ), setValueAll = L2((newValue) => {
      for (let consumer of consumers)
        consumer(newValue);
    }, []);
    return j2(() => (consumers.push(setValue), () => {
      consumers.splice(consumers.indexOf(setValue), 1);
    }), [setValue]), [value, setValueAll, isPersistent, error];
  };
}

// libs/use-chrome-storage/mod.ts
function createChromeStorageStateHookSync(key, initialValue) {
  return createChromeStorageStateHook(key, initialValue, "sync");
}

// hooks/use_user_config.ts
var SETTINGS_KEY = "userConfig", INITIAL_VALUE = {}, rawUseUserConfig = createChromeStorageStateHookSync(
  SETTINGS_KEY,
  INITIAL_VALUE
);
function useUserConfig() {
  let [value, setValue, isPersistent, error] = rawUseUserConfig(), formatSetValue = L2((newValue) => {
    let toStore = typeof newValue == "function" ? newValue(value) : newValue;
    toStore && (toStore.updatedAt = (/* @__PURE__ */ new Date()).toISOString()), setValue(toStore);
  }, [value]);
  return [value, formatSetValue, isPersistent, error, setValue];
}

// errors.ts
var CommonError = class extends Error {
  constructor(name, message, details) {
    super(message);
    this.name = name, details && (this.details = details);
  }
};

// messager.ts
var listeners2 = /* @__PURE__ */ new Map(), Messager = class {
  constructor(fromType, debug = !1) {
    this.logger = new Logger(), debug && this.logger.setLevel("debug"), this.fromType = fromType, listeners2.has(fromType) || (listeners2.set(fromType, /* @__PURE__ */ new Map()), browserAPI.runtime.onMessage.addListener(
      // @ts-ignore: it's ok
      (message, sender, sendResponse) => {
        let from = message.from, to = message.to, tabId, tabUrl, tabActive;
        sender.tab && sender.tab.id && (tabId = sender.tab.id, from = `${from}:${tabId}`, tabUrl = sender.tab.url, tabActive = sender.tab.active), this.logger.debug(
          `${message.to} received message [${message.payload.method}] from ${message.from}`,
          message.payload.data ? message.payload.data : " "
        );
        let parsedTo = parseType(to), { type: toType, name: toName } = parsedTo;
        if (toType !== fromType)
          return !1;
        let parsedMessageFrom = parseType(from), connectionInfo = listeners2.get(toType).get(toName);
        if (!connectionInfo)
          return this.logger.debug(
            `no message handler for ${toType}:${to}, but it's ok`
          ), !1;
        let { messageHandler, sync } = connectionInfo, messageAuthor = {
          type: fromType,
          name: parsedMessageFrom.name,
          id: tabId,
          url: tabUrl,
          active: tabActive
        };
        if (sync) {
          try {
            let handlerResult = messageHandler(
              message.payload,
              messageAuthor
            );
            sendResponse({
              ok: !0,
              data: handlerResult
            });
          } catch (e3) {
            sendResponse({
              ok: !1,
              errorName: e3.name,
              errorMessage: e3.message,
              errorDetails: e3.details
            });
          }
          return !1;
        } else
          return messageHandler(
            message.payload,
            messageAuthor
          ).then((data) => {
            sendResponse({
              ok: !0,
              data
            });
          }).catch(
            (e3) => {
              sendResponse({
                ok: !1,
                errorName: e3.name,
                errorMessage: e3.message,
                errorDetails: e3.details
              });
            }
          ), !0;
      }
    ));
  }
  getConnection(name, messageHandler, options) {
    let sync = !1;
    options && options.sync && (sync = !0);
    let fromType = this.fromType, currentListeners = listeners2.get(fromType);
    if (currentListeners.has(name))
      return currentListeners.get(name).connectionInstance;
    {
      let connection2 = new Connection(`${fromType}:${name}`, this.logger);
      return listeners2.get(fromType).set(name, {
        messageHandler,
        sync,
        connectionInstance: connection2
      }), connection2;
    }
  }
}, Connection = class {
  constructor(from, logger) {
    this.from = from, this.logger = logger;
  }
  async sendMessage(to, messagePayload) {
    let parsedTo = parseType(to), { type, id } = parsedTo;
    if (type !== "content_script") {
      let message = {
        to,
        from: this.from,
        payload: messagePayload
      };
      this.logger.debug(
        `${message.from} send message [${message.payload.method}] to ${message.to}`,
        message.payload.data ? message.payload.data : " "
      );
      try {
        let response = await browserAPI.runtime.sendMessage(message);
        return handleResponse(message, response, this.logger);
      } catch (e3) {
        if (type === "popup") {
          let errorMessage = `popup ${to} is not active, so the message does not send, ignore this error, ${JSON.stringify(messagePayload)}`;
          return this.logger.debug(
            errorMessage,
            messagePayload,
            to,
            e3
          ), Promise.resolve({
            message: errorMessage
          });
        } else
          throw e3;
      }
    } else {
      let message = {
        from: this.from,
        to,
        payload: messagePayload
      };
      this.logger.debug(
        `${message.from} send message [${message.payload.method}] to ${message.to}`,
        message.payload.data ? message.payload.data : " "
      );
      let response = await browserAPI.tabs.sendMessage(id, message);
      return handleResponse(message, response, this.logger);
    }
  }
};
function handleResponse(message, response, logger) {
  if (response.ok)
    return logger.debug(
      `${message.from} received response from ${message.to}:`,
      response.data ? response.data : " "
    ), response.data;
  throw new CommonError(
    response.errorName || "UnknownError",
    response.errorMessage || "Unknown error",
    response.errorDetails
  );
}
function parseType(str) {
  let parts = str.split(":");
  if (parts.length < 2)
    throw new Error("not a valid to string");
  let messageTo = {
    type: parts[0],
    name: parts[1]
  };
  if (parts[0] === "content_script") {
    let tabId = parseInt(parts[2]);
    if (!isNaN(tabId))
      messageTo.id = tabId;
    else
      throw new Error("tab id not a valid number");
  }
  return messageTo;
}

// popup_message_listener.ts
var syncMessageHandler = function(payload, author) {
  let { method, data } = payload;
  log_default.debug(`popup received message: ${method}`, data || " ");
  let tabId;
  author.active && (tabId = author.id, globalThis.document.dispatchEvent(
    new CustomEvent(popupReceiveMessageEventName, {
      detail: {
        tabId,
        payload
      }
    })
  ));
}, connection;
function setupMessageListeners() {
  getConnection();
}
function getConnection() {
  return connection || (connection = new Messager("popup", !1).getConnection("main_sync", syncMessageHandler), connection);
}

// utils/click-multiple-times.ts
function onClickMultipleTimes(requiredClicks, timeLimit = 2e3) {
  return (cb) => {
    let timer, clicked = 0;
    return (e3) => {
      ++clicked == requiredClicks && (cb(e3), clicked = 0), clearTimeout(timer), timer = setTimeout(
        () => clicked = 0,
        // reset the number of clicks after a traditional 300ms duration
        timeLimit
      );
    };
  };
}

// utils/hostname_to_wild_hostname.ts
function hostnameToWildHostname(hostname2) {
  let parts = hostname2.split(".");
  return parts.length > 2 ? (parts[0] = "*", parts.join(".")) : null;
}

// utils/url_without_hash.ts
function getUrlWithoutHash(url) {
  let hashIndex = url.indexOf("#");
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

// browser/version.ts
function getVersion() {
  return browserAPI.runtime.getManifest().version;
}

// https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
var a2 = 0;
function p5(n3, s4, t3, f5, u3) {
  var r, o3, _3 = {};
  for (o3 in s4)
    o3 == "ref" ? r = s4[o3] : _3[o3] = s4[o3];
  var e3 = { type: n3, props: _3, key: t3, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a2, __source: u3, __self: f5 };
  if (typeof n3 == "function" && (r = n3.defaultProps))
    for (o3 in r)
      _3[o3] === void 0 && (_3[o3] = r[o3]);
  return d.vnode && d.vnode(e3), e3;
}

// components/select_link.tsx
function SelectLink(props) {
  let { items, maxWidth } = props;
  return maxWidth = maxWidth || 128, /* @__PURE__ */ p5(
    "select",
    {
      autoComplete: "off",
      class: "min-select",
      style: { maxWidth: `${maxWidth}px` },
      value: items.find((item) => item.selected)?.value,
      onChange: (e3) => {
        let value = e3.target.value, item = items.find((item2) => item2.value === value);
        item && item.onSelected(item);
      },
      children: items.map((item) => /* @__PURE__ */ p5("option", { value: item.value, selected: item.selected, children: item.label }))
    }
  );
}

// components/button_drop_down.tsx
var DEFAULT_VALUE = "DROP_DOWN_DEFAULT_VALUE";
function SelectDropDown(props) {
  let { showArrow, onSelected, className, menus, maxWidth } = props;
  className = className || "", showArrow = showArrow ?? !0, maxWidth = maxWidth || 60;
  let ref = w2(null);
  return /* @__PURE__ */ p5(
    "select",
    {
      ref,
      autoComplete: "off",
      class: `min-select ${showArrow ? "" : "min-select-no-arrow"} ${className || ""}`,
      value: DEFAULT_VALUE,
      style: { maxWidth: `${maxWidth}px` },
      onChange: (e3) => {
        e3.preventDefault();
        let value = e3.target.value;
        if (ref.current && value !== DEFAULT_VALUE) {
          ref.current.value = DEFAULT_VALUE, ref.current?.dispatchEvent(new Event("change"));
          let item = menus.find((item2) => item2.value === value);
          item && onSelected(item);
        }
      },
      children: [{
        value: DEFAULT_VALUE,
        label: props.label
      }].concat(menus).map((item) => /* @__PURE__ */ p5("option", { value: item.value, children: item.label }))
    }
  );
}

// libs/preact-translation/utils.ts
function getResourceUrl(root2, lang) {
  return [root2, !root2 || root2.endsWith("/") ? "" : "/", lang, ".json"].join("");
}
function format(str, params) {
  let result = str;
  return params && Object.keys(params).forEach((key) => {
    let rawValue = params[key], keyIsNumber = isNumber(key);
    if (typeof rawValue == "object" || keyIsNumber) {
      let value = rawValue;
      keyIsNumber && typeof value == "string" && (value = {
        tag: "a",
        href: value
      });
      let tag = `<${key}>`, tagIndex = result.indexOf(tag);
      if (tagIndex !== -1) {
        let actualTag = value.tag || "a", endIndex = result.indexOf(`</${key}>`);
        if (endIndex !== -1) {
          let html = result.substring(tagIndex + tag.length, endIndex), attrs = Object.keys(value).filter((attr) => attr !== "tag").map((attr) => `${attr}="${value[attr]}"`).join(" ");
          result = result.replace(
            `${tag}${html}</${key}>`,
            `<${actualTag} ${attrs}>${html}</${actualTag}>`
          );
        }
      }
    } else {
      let template = new RegExp("{" + key + "}", "gm");
      result = result.replace(template, rawValue.toString());
    }
  }), result;
}
function getValue(languageData, lang, key) {
  let localeData = languageData[lang];
  if (!localeData)
    return key;
  let keys = key.split("."), propKey = "";
  do {
    propKey += keys.shift();
    let value = localeData[propKey];
    value !== void 0 && (typeof value == "object" || !keys.length) ? (localeData = value, propKey = "") : keys.length ? propKey += "." : localeData = key;
  } while (keys.length);
  return localeData;
}
function t2(data, key, lang, fallbackLang, params) {
  if (!data.hasOwnProperty(lang))
    return key;
  let value = getValue(data, lang, key);
  return value === key && lang !== fallbackLang && (value = getValue(data, fallbackLang, key)), format(value, params);
}
function isNumber(value) {
  if (typeof value == "number")
    return !0;
  if (value) {
    let num = parseInt(value);
    return !isNaN(num);
  } else
    return !1;
}

// libs/preact-translation/useTranslate.tsx
var cache = {}, defaultOptions = {
  root: "",
  lang: "en",
  fallbackLang: "en"
};
function useTranslate(rawOptions, translations2) {
  let options = Object.assign(
    {},
    defaultOptions,
    rawOptions
  );
  cache = translations2 || cache;
  let [lang, setLang] = P2(options.lang), [data, setData] = P2(cache), [isReady, setReady] = P2(!1), loadData = (langKey) => {
    if (data.hasOwnProperty(langKey))
      return;
    setReady(!1);
    let url = getResourceUrl(options.root || "", langKey);
    options.getUrl && (url = options.getUrl(options.root || "", langKey), fetch(url).then((results) => results.json()).then((resource) => {
      cache[langKey] = resource, setData({ ...cache }), setReady(!0);
    }).catch((error) => {
      setData({ ...cache }), setReady(!0);
    }));
  };
  return j2(() => {
    loadData(options.fallbackLang || "en"), loadData(lang);
  }, [lang]), { lang, setLang, t: (key, params) => {
    if (!data.hasOwnProperty(lang))
      return key;
    let value = getValue(data, lang, key);
    return value === key && lang !== options.fallbackLang && (value = getValue(data, options.fallbackLang, key)), format(value, params);
  }, isReady };
}

// libs/preact-translation/translateProvider.tsx
var TranslateContext = ce(null), defaultOptions2 = {
  root: "assets",
  lang: "en",
  fallbackLang: "en"
}, TranslateProvider = (props) => {
  let { t: t3, setLang, lang, isReady } = useTranslate(
    {
      root: props.root || defaultOptions2.root,
      lang: props.lang || defaultOptions2.lang,
      fallbackLang: props.fallbackLang || defaultOptions2.fallbackLang,
      getUrl: props.getUrl
    },
    props.translations
  );
  return /* @__PURE__ */ p5(
    TranslateContext.Provider,
    {
      value: {
        t: t3,
        setLang,
        lang,
        isReady
      },
      children: props.children
    }
  );
};

// hooks/use_i18n.ts
function useI18n() {
  return M2(TranslateContext);
}

// components/popup_field.tsx
function PopupField(props) {
  let { field, onChange, value } = props;
  value = value || field.default || "";
  let { t: t3 } = useI18n();
  return field.type === "select" ? /* @__PURE__ */ p5("div", { class: "flex justify-between mb-2", children: [
    /* @__PURE__ */ p5("label", { class: "inline-block", children: [
      field.label ? t3(field.label) : field.name,
      "\uFF1A"
    ] }),
    /* @__PURE__ */ p5(
      SelectLink,
      {
        items: field.options.map(
          (fieldOption) => ({
            label: `${fieldOption.label ? t3(fieldOption.label) : fieldOption.value}`,
            value,
            selected: value === fieldOption.value,
            onSelected: () => {
              onChange(fieldOption.value);
            }
          })
        )
      }
    )
  ] }) : null;
}

// services/util.ts
function formatTranslationService(key, ctx) {
  let service = PureTranslationServices[key], translationConfig = ctx.config.translationServices[key] || {}, ok = !0, allProps = service.allProps || [];
  if (allProps.length > 0) {
    let requiredProps = allProps.filter((prop) => prop.required);
    if (requiredProps.length > 0) {
      for (let prop of requiredProps)
        if (!translationConfig[prop.name]) {
          ok = !1;
          break;
        }
    }
  }
  return {
    ...service,
    id: key,
    selected: ctx.translationService === key,
    ok,
    config: translationConfig,
    props: service.props || [],
    allProps
  };
}
var getTranslationServices = (ctx) => {
  let { config } = ctx, alpha = config.alpha, beta = config.beta, canary = config.canary, debug = config.debug;
  return Object.keys(
    PureTranslationServices
  ).filter((key) => {
    let service = PureTranslationServices[key];
    if (key.startsWith("mock"))
      return debug ? !0 : key === ctx.config.translationService;
    if (key === ctx.config.translationService)
      return !0;
    let isCanaryFeature = !!service.canary, isAlphaFeature = !!service.alpha, isBetaFeature = !!service.beta;
    return isCanaryFeature && canary || isAlphaFeature && (alpha || canary) || isBetaFeature && (beta || alpha || canary) || key === ctx.translationService ? !0 : !isAlphaFeature && !isBetaFeature && !isCanaryFeature;
  }).map((key) => formatTranslationService(key, ctx));
};

// locales.ts
var internalLocaleMap = {
  "zh-CN": {
    "languages.en": "\u82F1\u8BED",
    "languages.ja": "\u65E5\u8BED",
    "languages.ko": "\u97E9\u8BED",
    "languages.es": "\u897F\u73ED\u7259\u8BED",
    "languages.fr": "\u6CD5\u8BED",
    "languages.de": "\u5FB7\u8BED",
    "languages.it": "\u610F\u5927\u5229\u8BED",
    "languages.pt": "\u8461\u8404\u7259\u8BED",
    "languages.ru": "\u4FC4\u8BED"
  },
  "zh-TW": {
    "languages.en": "\u82F1\u8A9E",
    "languages.ja": "\u65E5\u8A9E",
    "languages.ko": "\u97D3\u8A9E",
    "languages.es": "\u897F\u73ED\u7259\u8A9E",
    "languages.fr": "\u6CD5\u8A9E",
    "languages.de": "\u5FB7\u8A9E",
    "languages.it": "\u610F\u5927\u5229\u8A9E",
    "languages.pt": "\u8461\u8404\u7259\u8A9E",
    "languages.ru": "\u4FC4\u8A9E"
  }
}, finalTranslations = {
  ...translations,
  "zh-CN": {
    ...internalLocaleMap["zh-CN"],
    ...translations["zh-CN"]
  },
  "zh-TW": {
    ...internalLocaleMap["zh-TW"],
    ...translations["zh-TW"]
  }
}, locales_default = finalTranslations;
var getLanguageName = (lang, interfaceLanguage, useOriginal) => {
  let translation = t2(
    finalTranslations,
    `languages.${lang}`,
    interfaceLanguage,
    "en"
  );
  return useOriginal ? langMap[lang] || lang : translation !== `languages.${lang}` ? translation : langMap[lang];
};

// utils/compare_version.ts
function isAVersionGreaterOrEqualWithB(a3, b4) {
  return a3.localeCompare(b4, void 0, {
    numeric: !0,
    sensitivity: "base"
  }) >= 0;
}

// components/sync_latest.tsx
var SyncSuccess = ({ date }) => {
  let { t: t3 } = useI18n(), [isHide, setIsHide] = P2(!1);
  return j2(() => {
    setTimeout(() => {
      setIsHide(!0);
    }, 5e3);
  }, []), isHide ? null : /* @__PURE__ */ p5("p", { class: "text-sm", children: [
    t3("Successfully synchronized with the latest official rules:"),
    " ",
    new Date(date).toLocaleString()
  ] });
}, LocalVersionIsTooOld = ({ minVersion }) => {
  let { t: t3 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: t3(
    "localVersionIsTooOld",
    {
      minVersion
    }
  ) });
}, BadUserscriptBrowser = () => {
  let { t: t3 } = useI18n();
  return /* @__PURE__ */ p5(
    "p",
    {
      class: "text-sm",
      dangerouslySetInnerHTML: {
        __html: t3(
          "badUserscriptBrowser",
          {
            1: "https://immersive-translate.owenyoung.com/installation.html"
          }
        )
      }
    }
  );
}, SyncFailed = ({ message, handleSyncing, date }) => {
  let { t: t3 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: [
    t3("failToSyncRules"),
    " ",
    /* @__PURE__ */ p5("a", { onClick: handleSyncing, children: t3("retry") }),
    /* @__PURE__ */ p5("br", {}),
    t3("failedReason"),
    "\uFF1A",
    message,
    /* @__PURE__ */ p5("br", {}),
    t3("currentRuleVersion"),
    "\uFF1A",
    date
  ] });
};
function SyncLatest(props) {
  let { request: request2 } = props, [localBuildinConfigUpdatedAt, setLocalBuildinConfigUpdatedAt] = P2(null), { t: t3 } = useI18n(), [remoteConfig, setRemoteConfig] = P2(null), [isNeedUpdate, setIsNeedUpdate] = P2(null), [syncErrorMessage, setSyncErrorMessage] = P2(""), [isSyncSuccess, setIsSyncSuccess] = P2(!1), [isInvalidLocalVersion, setIsInvalidLocalVersion] = P2(
    !1
  ), [isBadUserscriptBrowser, setIsBadUserscriptBrowser] = P2(
    !1
  ), [config, setConfig] = P2(null), [_isLatestVersion, setIsLatestVersion] = P2(null), version = getVersion(), handleSyncing = async () => {
    setSyncErrorMessage("");
    let finalRemoteConfig = remoteConfig;
    if (remoteConfig === null)
      try {
        let response = await request2({ url: buildinConfigSyncUrl });
        response ? (setRemoteConfig(response), finalRemoteConfig = response, setIsSyncSuccess(!0)) : (setSyncErrorMessage(t3("unknownError")), setIsNeedUpdate(null));
      } catch (e3) {
        setIsNeedUpdate(null), setSyncErrorMessage(e3.message);
        return;
      }
    finalRemoteConfig !== null ? (props.setStorageBuildinConfig(finalRemoteConfig), setIsNeedUpdate(!1), setLocalBuildinConfigUpdatedAt(
      finalRemoteConfig.buildinConfigUpdatedAt
    )) : (setSyncErrorMessage(t3("canNotFetchRemoteRule")), setIsNeedUpdate(null));
  };
  return j2(() => {
    getConfig().then((localConfig) => {
      let localConfigUpdatedAtIsoString = localConfig.buildinConfigUpdatedAt;
      setConfig(localConfig);
      let localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString);
      if (setLocalBuildinConfigUpdatedAt(localConfigUpdatedAtIsoString), version === "0.0.0") {
        setIsBadUserscriptBrowser(!0);
        return;
      }
      request2({
        url: buildinConfigSyncUrl
      }).then((response) => {
        let data = response, remoteMinVersion = data.minVersion, localVersion = version;
        setRemoteConfig(data);
        let remoteVersion = data.latestVersion;
        if (remoteVersion && (isAVersionGreaterOrEqualWithB(localVersion, remoteVersion) ? setIsLatestVersion(!0) : setIsLatestVersion(!1)), isAVersionGreaterOrEqualWithB(localVersion, remoteMinVersion)) {
          let latestIsoTime = data.buildinConfigUpdatedAt;
          new Date(latestIsoTime) > localConfigUpdatedAt ? (setIsNeedUpdate(!0), handleSyncing()) : setIsNeedUpdate(!1);
        } else
          setIsInvalidLocalVersion(!0), setIsNeedUpdate(null);
      }).catch((e3) => {
        setIsNeedUpdate(null), setSyncErrorMessage(e3.message);
      });
    });
  }, []), j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, [localBuildinConfigUpdatedAt]), config ? /* @__PURE__ */ p5("div", { class: "text-sm mt-2", style: { maxWidth: 218 }, children: isBadUserscriptBrowser ? /* @__PURE__ */ p5(BadUserscriptBrowser, {}) : syncErrorMessage ? /* @__PURE__ */ p5(
    SyncFailed,
    {
      handleSyncing,
      message: syncErrorMessage,
      date: localBuildinConfigUpdatedAt || ""
    }
  ) : isInvalidLocalVersion ? /* @__PURE__ */ p5(LocalVersionIsTooOld, { minVersion: remoteConfig.minVersion }) : isNeedUpdate === null || isNeedUpdate === !0 ? null : isSyncSuccess ? /* @__PURE__ */ p5(SyncSuccess, { date: localBuildinConfigUpdatedAt }) : null }) : null;
}

// components/popup.tsx
function Popup(props) {
  let version = getVersion(), {
    onTranslateTheMainPage,
    onUserConfigChange,
    request: request2,
    onSetBuildinConfig,
    pageStatus,
    config,
    openAboutPage,
    onTranslateTheWholePage,
    openOptionsPage,
    ontranslateToThePageEndImmediately,
    onSetPageLanguage,
    onToggleTranslate,
    onTranslateLocalPdfFile,
    onTranslatePdf,
    onRestorePage,
    ctx,
    currentUrl,
    currentLang,
    onClose,
    onTranslatePage,
    onSetLocalConfig
  } = props, setSettings = onUserConfigChange, [message, setMessage] = P2(""), [errorMessage, _setErrorMessage] = P2(""), { t: t3 } = useI18n(), isAlwaysTranslateDomain = null, isAlwaysTranslateWildDomain = null, isNeverTranslaateDomain = null, isNeverTranslateWildDomain = null, isAlwaysTranslateLang = null, isAlwaysTranslateUrl = null, isNeverTranslateUrl = null, curentTranslationServiceItem = null, currentUrlObj = null, currentWildHostname = null, currentUrlWithoutHash = null, currentTranslationServiceConfig = null;
  if (config) {
    let { translationService, translationServices, translationUrlPattern } = config;
    if (PureTranslationServices[translationService] && (curentTranslationServiceItem = formatTranslationService(
      translationService,
      ctx
    )), translationServices && translationServices[translationService] ? currentTranslationServiceConfig = translationServices[translationService] || {} : currentTranslationServiceConfig = {}, currentUrl && isValidHtmlUrl(currentUrl)) {
      currentUrlObj = new URL(currentUrl), currentWildHostname = hostnameToWildHostname(currentUrlObj.hostname), currentUrlWithoutHash = getUrlWithoutHash(currentUrl);
      let { matches, excludeMatches } = translationUrlPattern;
      isAlwaysTranslateWildDomain = matches.includes(currentWildHostname), isAlwaysTranslateDomain = matches.includes(currentUrlObj.hostname), isNeverTranslateWildDomain = excludeMatches.includes(
        currentWildHostname
      ), isNeverTranslaateDomain = excludeMatches.includes(
        currentUrlObj.hostname
      ), isAlwaysTranslateUrl = matches.includes(currentUrlWithoutHash), isNeverTranslateUrl = excludeMatches.includes(currentUrlWithoutHash);
    }
  }
  if (config && currentLang && currentLang !== "auto") {
    let { translationLanguagePattern } = config, { matches } = translationLanguagePattern;
    matches.includes(currentLang) ? isAlwaysTranslateLang = !0 : isAlwaysTranslateLang = !1;
  }
  let handleOpenOptions = (e3) => {
    e3.preventDefault(), openOptionsPage();
  }, handleToggleAlpha = (_e3) => {
    setSettings((settings) => (settings.alpha ? setMessage("Success disable alpha!") : setMessage("Success enable alpha!"), {
      ...settings,
      alpha: !settings.alpha
    }));
  }, handleChangeToTranslateTheWholePage = () => {
    setSettings((state) => ({
      ...state,
      translationArea: "body"
    })), onTranslateTheWholePage();
  }, handleChangeToTranslateTheMainPage = () => {
    setSettings((state) => ({
      ...state,
      translationArea: "main"
    })), onTranslateTheMainPage();
  }, handleTranslationUrlPatternSelected = (value, matchString, reverseRemoveStrings, removeStrings) => {
    if (value === "default") {
      setSettings((state) => {
        let translationUrlPattern = { ...state.translationUrlPattern };
        return {
          ...state,
          translationUrlPattern: {
            ...state.translationUrlPattern,
            matches: removeFromArray(
              [currentUrlObj?.hostname, currentWildHostname, currentUrl],
              translationUrlPattern.matches
            ),
            excludeMatches: removeFromArray(
              [currentUrlObj?.hostname, currentWildHostname, currentUrl],
              translationUrlPattern.excludeMatches
            )
          }
        };
      });
      return;
    }
    let name = value, reverseName = name === "matches" ? "excludeMatches" : "matches";
    currentUrlObj && setSettings((state) => {
      let translationUrlPattern = { ...state.translationUrlPattern };
      return translationUrlPattern[name] = addToUniqueArray(
        matchString,
        translationUrlPattern[name]
      ), removeStrings.length > 0 && (translationUrlPattern[name] = removeFromArray(
        removeStrings,
        translationUrlPattern[name]
      )), translationUrlPattern[reverseName] = removeFromArray(
        reverseRemoveStrings,
        translationUrlPattern[reverseName]
      ), {
        ...state,
        translationUrlPattern: {
          ...state.translationUrlPattern,
          ...translationUrlPattern
        }
      };
    }), name === "matches" && pageStatus === "Original" ? setTimeout(() => {
      onTranslatePage(), onClose();
    }, 100) : name === "excludeMatches" && pageStatus === "Translated" && setTimeout(() => {
      onRestorePage(), onClose();
    }, 100);
  }, handleTranslationLanguagePatternSelected = (value) => {
    if (!value) {
      setSettings((state) => {
        let translationLanguagePattern = {
          ...state.translationLanguagePattern
        };
        return {
          ...state,
          translationLanguagePattern: {
            ...state.translationLanguagePattern,
            matches: removeFromArray(
              currentLang,
              translationLanguagePattern.matches
            ),
            excludeMatches: removeFromArray(
              currentLang,
              translationLanguagePattern.excludeMatches
            )
          }
        };
      });
      return;
    }
    let name = value, reverseName = name === "matches" ? "excludeMatches" : "matches";
    currentLang && setSettings((state) => {
      let translationLanguagePattern = {
        ...state.translationLanguagePattern
      };
      return translationLanguagePattern[name] = addToUniqueArray(
        currentLang,
        translationLanguagePattern[name]
      ), translationLanguagePattern[reverseName] = removeFromArray(
        currentLang,
        translationLanguagePattern[reverseName]
      ), {
        ...state,
        translationLanguagePattern: {
          ...state.translationLanguagePattern,
          ...translationLanguagePattern
        }
      };
    }), name === "matches" && pageStatus === "Original" && setTimeout(() => {
      onTranslatePage(), onClose();
    }, 100);
  }, isPdfUrl = currentUrlObj?.pathname.toLowerCase().endsWith(".pdf"), buttonLabel = t3("translate");
  pageStatus === "Translated" ? buttonLabel = t3("show-original") : pageStatus === "Original" ? isPdfUrl ? isFirefox() && currentUrlObj.protocol === "file:" ? buttonLabel = t3("translate-firefox-local-pdf") : buttonLabel = t3("translate-pdf") : buttonLabel = t3("translate") : buttonLabel = t3(pageStatus);
  let translateToThePageEndImmediatelyLabel = t3(
    "translateToThePageEndImmediately"
  );
  (pageStatus === "Original" || pageStatus === "Translated") && (config.shortcuts.toggleTranslatePage && (isTouchDevice() && ctx.rule.fingerCountToToggleTranslagePageWhenTouching >= 2 ? buttonLabel += ` (${t3(`fingers.${ctx.rule.fingerCountToToggleTranslagePageWhenTouching}`)})` : buttonLabel += ` (${config.shortcuts.toggleTranslatePage})`), config.shortcuts.toggleTranslateToThePageEndImmediately && (translateToThePageEndImmediatelyLabel += ` (${config.shortcuts.toggleTranslateToThePageEndImmediately})`));
  let translationServiceItems = [];
  ctx && (translationServiceItems = getTranslationServices(ctx));
  let handleClosePopup = (e3) => {
    e3.preventDefault(), onClose();
  };
  return /* @__PURE__ */ p5("div", { class: "p-3", children: [
    /* @__PURE__ */ p5("div", { class: "text-sm", children: [
      /* @__PURE__ */ p5("div", { class: "flex justify-between mb-2", children: [
        /* @__PURE__ */ p5("label", { class: "inline-block", children: [
          t3("popupSourceLanguage"),
          "\uFF1A"
        ] }),
        /* @__PURE__ */ p5(
          SelectLink,
          {
            items: languages.map((code2) => ({
              label: getLanguageName(code2, config.interfaceLanguage),
              value: code2,
              selected: code2 === currentLang,
              onSelected: (item) => {
                onSetPageLanguage(item.value);
              }
            }))
          }
        )
      ] }),
      config && config.targetLanguage && /* @__PURE__ */ p5("div", { class: "flex justify-between mb-2", children: [
        /* @__PURE__ */ p5("label", { class: "inline-block", children: [
          t3("popupTarget"),
          "\uFF1A"
        ] }),
        /* @__PURE__ */ p5(
          SelectLink,
          {
            items: languages.filter((code2) => code2 !== "auto").map((code2) => ({
              label: getLanguageName(code2, config.interfaceLanguage),
              value: code2,
              selected: code2 === config.targetLanguage,
              onSelected: (item) => {
                setSettings((state) => ({
                  ...state,
                  targetLanguage: item.value
                }));
              }
            }))
          }
        )
      ] }),
      curentTranslationServiceItem && translationServiceItems.length > 0 && /* @__PURE__ */ p5(L, { children: [
        /* @__PURE__ */ p5("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p5("label", { class: "inline-block", children: [
            t3("popupService"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p5(
            SelectLink,
            {
              items: translationServiceItems.map(
                (translationServiceItem) => ({
                  label: `${t3("translationServices." + translationServiceItem.id)}${translationServiceItem.ok ? "" : " " + t3("needAction")}`,
                  value: translationServiceItem.id,
                  selected: translationServiceItem.selected,
                  onSelected: (option) => {
                    let selectedItem = translationServiceItems.find(
                      (item) => item.id === option.value
                    );
                    selectedItem.ok ? (setSettings((state) => ({
                      ...state,
                      translationService: selectedItem.id
                    })), selectedItem.props.length === 0 ? setTimeout(() => {
                      onTranslatePage();
                    }, 1) : setTimeout(() => {
                      onRestorePage();
                    }, 1)) : (setSettings((state) => ({
                      ...state,
                      translationService: selectedItem.id
                    })), setTimeout(() => {
                      openOptionsPage();
                    }, 100));
                  }
                })
              )
            }
          )
        ] }),
        currentTranslationServiceConfig && curentTranslationServiceItem.props.length > 0 && curentTranslationServiceItem.props.map((prop, index) => /* @__PURE__ */ p5("div", { class: "pl-4 text-sm", children: /* @__PURE__ */ p5(
          PopupField,
          {
            field: prop,
            value: currentTranslationServiceConfig[prop.name],
            onChange: (value) => {
              setSettings((state) => {
                let currentServices = state.translationServices || {}, currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
                return setTimeout(() => {
                  onRestorePage();
                }, 1), {
                  ...state,
                  translationServices: {
                    ...currentServices,
                    [curentTranslationServiceItem.id]: {
                      ...currentServiceConfig,
                      [prop.name]: value
                    }
                  }
                };
              });
            }
          },
          "field-" + index
        ) }))
      ] }),
      currentUrlObj && /* @__PURE__ */ p5("div", { class: "flex justify-between mb-2", children: [
        /* @__PURE__ */ p5("label", { class: "inline-block", children: t3("forThisSite") }),
        /* @__PURE__ */ p5(
          SelectLink,
          {
            items: [
              {
                label: t3("default"),
                value: "default",
                selected: isAlwaysTranslateDomain === !1 && isNeverTranslaateDomain === !1 && !isAlwaysTranslateWildDomain && !isNeverTranslateWildDomain && !isAlwaysTranslateUrl && !isNeverTranslateUrl,
                onSelected: () => {
                  handleTranslationUrlPatternSelected(
                    "default",
                    currentUrlObj.hostname,
                    [],
                    []
                  );
                  let currentDomain = currentUrlObj.hostname, currentTempTranslationDomains = ctx.localConfig.tempTranslationUrlMatches || [], filteredDomains = currentTempTranslationDomains.filter(
                    (item) => item.match !== currentDomain
                  ), isChanged = !1;
                  filteredDomains.length !== currentTempTranslationDomains.length && (isChanged = !0), isChanged && onSetLocalConfig({
                    ...ctx.localConfig,
                    tempTranslationUrlMatches: [
                      ...filteredDomains
                    ]
                  });
                }
              },
              currentUrlWithoutHash && {
                label: t3("alwaysTranslateSomeSite", {
                  hostname: t3("currentUrl")
                }),
                value: "matchesUrl",
                selected: isAlwaysTranslateUrl,
                onSelected: () => {
                  handleTranslationUrlPatternSelected(
                    "matches",
                    currentUrlWithoutHash,
                    [currentUrlWithoutHash],
                    []
                  );
                }
              },
              {
                label: t3("alwaysTranslateSomeSite", {
                  hostname: currentUrlObj.hostname
                }),
                value: "matches",
                selected: isAlwaysTranslateDomain,
                onSelected: (item) => {
                  handleTranslationUrlPatternSelected(
                    item.value,
                    currentUrlObj.hostname,
                    [
                      currentUrlObj.hostname,
                      currentWildHostname,
                      currentUrlWithoutHash
                    ],
                    [currentWildHostname]
                  );
                }
              },
              currentWildHostname && {
                label: t3("alwaysTranslateSomeSite", {
                  hostname: currentWildHostname
                }),
                value: "matchesWild",
                selected: isAlwaysTranslateWildDomain,
                onSelected: () => {
                  handleTranslationUrlPatternSelected(
                    "matches",
                    currentWildHostname,
                    [
                      currentUrlWithoutHash,
                      currentUrlObj.hostname,
                      currentWildHostname
                    ],
                    [currentUrlObj.hostname]
                  );
                }
              },
              currentUrlWithoutHash && {
                label: t3("neverTranslateSomeSite", {
                  hostname: t3("currentUrl")
                }),
                value: "excludeMatchesUrl",
                selected: isNeverTranslateUrl,
                onSelected: () => {
                  handleTranslationUrlPatternSelected(
                    "excludeMatches",
                    currentUrlWithoutHash,
                    [currentUrlWithoutHash],
                    []
                  );
                }
              },
              {
                label: t3("neverTranslateSomeSite", {
                  hostname: currentUrlObj.hostname
                }),
                value: "excludeMatches",
                selected: isNeverTranslaateDomain,
                onSelected: (item) => {
                  handleTranslationUrlPatternSelected(
                    item.value,
                    currentUrlObj.hostname,
                    [
                      currentUrlObj.hostname,
                      currentWildHostname,
                      currentUrlWithoutHash
                    ],
                    [currentWildHostname]
                  );
                }
              },
              currentWildHostname && {
                label: t3("neverTranslateSomeSite", {
                  hostname: currentWildHostname
                }),
                value: "excludeMatchesWild",
                selected: isNeverTranslateWildDomain,
                onSelected: () => {
                  handleTranslationUrlPatternSelected(
                    "excludeMatches",
                    currentWildHostname,
                    [
                      currentUrlObj.hostname,
                      currentUrlWithoutHash,
                      currentWildHostname
                    ],
                    [currentUrlObj.hostname]
                  );
                }
              }
            ].filter(Boolean)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p5("div", { class: "", children: /* @__PURE__ */ p5(
      "button",
      {
        class: "py-2 mt-1 mb-2 main-button ",
        onClick: () => {
          isPdfUrl ? onTranslatePdf && onTranslatePdf() : onToggleTranslate();
        },
        "aria-busy": pageStatus === "Translating",
        disabled: pageStatus === "Translating",
        children: buttonLabel
      }
    ) }),
    /* @__PURE__ */ p5("div", { class: "flex justify-between", children: [
      currentLang && currentLang !== "auto" ? /* @__PURE__ */ p5("label", { for: "alwaysTranslateThisLanugage", class: "text-sm", children: [
        /* @__PURE__ */ p5(
          "input",
          {
            type: "checkbox",
            id: "alwaysTranslateThisLanugage",
            name: "alwaysTranslateThisLanugage",
            checked: !!isAlwaysTranslateLang,
            onChange: (e3) => {
              let checked = e3.target.checked;
              handleTranslationLanguagePatternSelected(
                checked ? "matches" : void 0
              );
            }
          }
        ),
        t3("alwaysTranslateSomeLanguage", {
          language: getLanguageName(
            currentLang,
            config.interfaceLanguage
          )
        })
      ] }) : /* @__PURE__ */ p5("span", {}),
      /* @__PURE__ */ p5(
        SelectDropDown,
        {
          label: t3("more"),
          showArrow: !0,
          onSelected: (item) => {
            item.value === "translateTheWholePage" ? onTranslateTheWholePage() : item.value === "translateToThePageEndImmediately" ? ontranslateToThePageEndImmediately() : item.value === "translateTheMainPage" ? onTranslateTheMainPage() : item.value === "showTranslationOnly" || (item.value === "translateLocalPdfFile" ? onTranslateLocalPdfFile && onTranslateLocalPdfFile() : item.value === "donate" ? (globalThis.open(config.donateUrl), onClose()) : item.value === "feedback" ? (globalThis.open(config.feedbackUrl), onClose()) : item.value === "options" ? (openOptionsPage(), onClose()) : item.value === "changeToTranslateTheWholePage" ? handleChangeToTranslateTheWholePage() : item.value === "changeToTranslateTheMainPage" ? handleChangeToTranslateTheMainPage() : item.value === "about" && openAboutPage());
          },
          menus: [
            config.translationArea === "main" && {
              label: "\u{1F480} " + t3("changeToTranslateTheWholePage"),
              value: "changeToTranslateTheWholePage"
            },
            config.translationArea === "body" && {
              label: "\u{1F4D6} " + t3("changeToTranslateTheMainPage"),
              value: "changeToTranslateTheMainPage"
            },
            {
              label: "\u26A1 " + translateToThePageEndImmediatelyLabel,
              value: "translateToThePageEndImmediately"
            },
            !isMonkey() && {
              label: "\u{1F4C1} " + t3("browser.translateLocalPdfFile"),
              value: "translateLocalPdfFile"
            },
            {
              label: "\u2764\uFE0F " + t3("aboutLabel"),
              value: "about"
            }
          ].filter(Boolean)
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "text-sm", children: message }),
    /* @__PURE__ */ p5("div", { class: "text-sm", children: errorMessage }),
    /* @__PURE__ */ p5("footer", { children: [
      /* @__PURE__ */ p5(
        SyncLatest,
        {
          request: request2,
          setStorageBuildinConfig: onSetBuildinConfig
        }
      ),
      /* @__PURE__ */ p5("div", { class: "mt-3 text-sm flex justify-between", children: [
        /* @__PURE__ */ p5("a", { href: "#", class: "secondary", onClick: handleOpenOptions, children: t3("options") }),
        isMonkey() && /* @__PURE__ */ p5("a", { href: "#", class: "secondary", onClick: handleClosePopup, children: t3("close") }),
        /* @__PURE__ */ p5(
          "span",
          {
            class: "immersive-translate-no-select muted",
            onClick: onClickMultipleTimes(7)(handleToggleAlpha),
            children: [
              "V",
              version
            ]
          }
        )
      ] })
    ] })
  ] });
}

// browser/request.ts
async function request(options) {
  let response;
  if (options && options.retry && options.retry > 0)
    try {
      response = await retry(rawRequest.bind(null, options), {
        multiplier: 2,
        maxAttempts: options.retry
      });
    } catch (e3) {
      throw e3 && e3.name === "RetryError" && e3.cause ? e3.cause : e3;
    }
  else
    response = await rawRequest(options);
  return response;
}
async function rawRequest(options) {
  options.body;
  let { url, responseType, ...fetchOptions } = options;
  responseType || (responseType = "json"), fetchOptions = {
    mode: "cors",
    ...fetchOptions
  };
  let response = await (options.fetchPolyfill || fetch)(url, fetchOptions);
  if (response.ok && response.status >= 200 && response.status < 400) {
    if (responseType === "json")
      return await response.json();
    if (responseType === "text")
      return await response.text();
    if (responseType === "raw") {
      let data = await response.text(), responseHeaders = Object.fromEntries([
        ...response.headers.entries()
      ]), finalUrl = response.url;
      return finalUrl || (response.headers.get("X-Final-URL") ? finalUrl = response.headers.get("X-Final-URL") : finalUrl = url), {
        body: data,
        headers: responseHeaders,
        status: response.status,
        statusText: response.statusText,
        url: finalUrl
      };
    }
  } else {
    let details;
    try {
      details = await response.text();
    } catch (_e3) {
      log_default.error("parse response failed", _e3);
    }
    throw details && log_default.error("fail response", details), new CommonError(
      "fetchError",
      response.status + ": " + response.statusText || "",
      details
    );
  }
}

// pages/popup.tsx
var callbacksWhenReady = {}, readyTabs = {};
function callWhenReady(tabId, callback) {
  if (readyTabs[tabId])
    try {
      callback();
    } catch (e3) {
      log_default.error("run callback failed", e3);
    }
  else
    callbacksWhenReady[tabId] || (callbacksWhenReady[tabId] = []), callbacksWhenReady[tabId].push(callback);
}
function runCallbacksWhenReady(tabId) {
  if (callbacksWhenReady[tabId] && callbacksWhenReady[tabId].length) {
    let callbacks = [...callbacksWhenReady[tabId]];
    callbacksWhenReady[tabId] = [], callbacks.forEach((cb) => cb());
  }
}
function Popup2() {
  let [pageStatus, setPageStatus] = P2("Original"), [settings, setSettings, _isPersistent, _error] = useUserConfig(), [config, setConfig] = P2(null), [currentUrl, setCurrentUrl] = P2(null), [currentTabId, setCurrentTabId] = P2(null), [currentLang, setCurrentLang] = P2("auto"), [ctx, setContext] = P2(null), messageHandler = (e3) => {
    let { tabId, payload } = e3.detail, { method, data } = payload;
    log_default.debug("popup received message", method, data || " "), method === "setPageStatus" && tabId && setPageStatus(data);
  };
  j2(() => {
    let c3 = getConnection();
    return browserAPI.tabs.query({
      currentWindow: !0,
      active: !0
    }).then((tabs) => {
      let tabId = tabs[0].id;
      setCurrentTabId(tabId);
      let tabUrl = tabs[0].url;
      browserAPI.tabs.onUpdated.addListener((tabId2, _changeInfo, tab) => {
        tabId2 === tabId2 && tab.url && currentUrl && tab.url !== currentUrl && (setCurrentUrl(tab.url), window.location.reload());
      }), globalThis.document.addEventListener(
        popupReceiveMessageEventName,
        messageHandler
      ), tabUrl && setCurrentUrl(tabUrl), tabUrl && isValidHtmlUrl(tabUrl) && (setCurrentUrl(tabUrl), c3.sendMessage(`content_script:main_sync:${tabId}`, {
        method: "ping"
      }).then((_response) => {
        readyTabs[tabId] = !0, runCallbacksWhenReady(tabId);
      }).catch((_e3) => {
        log_default.debug(
          "ping failed, but it is ok. cause maybe content is not injected",
          _e3
        );
      }), callWhenReady(tabId, async () => {
        let result = await c3.sendMessage(
          `content_script:main_sync:${tabId}`,
          {
            method: "getPageStatus"
          }
        );
        setPageStatus(result);
      }), callWhenReady(tabId, async () => {
        let result = await getConfig();
        setConfig(result);
      }), callWhenReady(tabId, async () => {
        let lang = await c3.sendMessage(
          `content_script:main_sync:${tabId}`,
          {
            method: "getCurrentPageLanguage"
          }
        );
        setCurrentLang(lang);
      }));
    }), () => {
      globalThis.document.removeEventListener(
        popupReceiveMessageEventName,
        messageHandler
      );
    };
  }, []), j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, [settings]), j2(() => {
    currentUrl && config && getContext({
      url: currentUrl,
      config
    }).then((ctx2) => {
      setContext(ctx2);
    });
  }, [currentUrl, config]);
  let handleSendMessageToContent = (method, isClose = !0) => async () => {
    let c3 = getConnection(), tabId = (await browserAPI.tabs.query({
      currentWindow: !0,
      active: !0
    }))[0].id;
    c3.sendMessage(`content_script:main:${tabId}`, {
      method
    }), isClose && setTimeout(() => {
      globalThis.close();
    }, 10);
  }, handleTranslateLocalPdfFile = () => {
    let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl);
    browserAPI.tabs.create({
      url: pdfViewerRuntimeUrl
    }), globalThis.close();
  }, handleTranslatePdf = () => {
    currentUrl && currentTabId && (browserAPI.tabs.update(currentTabId, {
      url: formatToPdfViewerUrl(currentUrl)
    }), globalThis.close());
  }, handleSetPageLanguage = (lang) => {
    let c3 = getConnection();
    if (setCurrentLang(lang), currentTabId && currentUrl) {
      let newSourceLanguageUrlPattern = handleSourceLanguageUrlPattern(
        currentUrl,
        lang,
        config.sourceLanguageUrlPattern
      );
      setSettings((state) => ({
        ...state,
        sourceLanguageUrlPattern: newSourceLanguageUrlPattern
      })), callWhenReady(currentTabId, () => {
        c3.sendMessage(`content_script:main:${currentTabId}`, {
          method: "setCurrentPageLanguageByClient",
          data: lang
        });
      });
    }
  }, handleClose = () => {
    globalThis.close();
  }, handleOpenOptionsPage = () => {
    browserAPI.runtime.openOptionsPage(), setTimeout(() => {
      globalThis.close();
    }, 50);
  }, handleOpenAboutPage = () => {
    browserAPI.tabs.create({
      url: browserAPI.runtime.getURL("options.html#about")
    }), setTimeout(() => {
      globalThis.close();
    }, 50);
  };
  return !config || !ctx ? null : /* @__PURE__ */ p5(
    Popup,
    {
      onClose: handleClose,
      onToggleTranslate: handleSendMessageToContent("toggleTranslatePage"),
      openOptionsPage: handleOpenOptionsPage,
      openAboutPage: handleOpenAboutPage,
      onTranslatePdf: handleTranslatePdf,
      onTranslateLocalPdfFile: handleTranslateLocalPdfFile,
      onTranslateTheMainPage: handleSendMessageToContent(
        "translateTheMainPage"
      ),
      onTranslateTheWholePage: handleSendMessageToContent(
        "translateTheWholePage"
      ),
      ontranslateToThePageEndImmediately: handleSendMessageToContent(
        "translateToThePageEndImmediately"
      ),
      onTranslatePage: handleSendMessageToContent("translatePage"),
      onRestorePage: handleSendMessageToContent("restorePage", !1),
      onSetPageLanguage: handleSetPageLanguage,
      onUserConfigChange: setSettings,
      config,
      pageStatus,
      ctx,
      currentUrl,
      currentLang,
      onSetLocalConfig: setLocalConfig,
      onSetBuildinConfig: setBuildinConfig,
      request
    }
  );
}

// popup.tsx
var mountPoint = document.getElementById("mount");
setupMessageListeners();
mountPoint && (async () => {
  let config = await getConfig();
  config.debug && log_default.setLevel("debug"), re(
    /* @__PURE__ */ p5(
      TranslateProvider,
      {
        lang: config.interfaceLanguage,
        translations: locales_default,
        fallbackLang: "zh-CN",
        children: /* @__PURE__ */ p5(Popup2, {})
      }
    ),
    mountPoint
  );
})();
