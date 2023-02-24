var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// <define:process.env>
var define_process_env_default = { BUILD_TIME: "2023-02-24T15:05:15.986Z", VERSION: "0.2.68", PROD: "1", REDIRECT_URL: "https://immersive-translate.owenyoung.com/auth-done/", IMMERSIVE_TRANSLATE_INJECTED_CSS: `:root {
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
  opacity: 0.618 !important;
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

// https://esm.sh/v107/webextension-polyfill@0.10.0/deno/webextension-polyfill.development.js
var __create = Object.create, __defProp2 = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
}, __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default")), __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), require_browser_polyfill = __commonJS({
  "esm-build-a564a4cea9152dee9787cea93457ae9e69afe22a-46a4a4a9/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
    (function(global, factory) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], factory);
      else if (typeof exports < "u")
        factory(module);
      else {
        var mod = {
          exports: {}
        };
        factory(mod), global.browser = mod.exports;
      }
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : exports, function(module2) {
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
            let cache = /* @__PURE__ */ Object.create(null), handlers = {
              has(proxyTarget2, prop) {
                return prop in target || prop in cache;
              },
              get(proxyTarget2, prop, receiver) {
                if (prop in cache)
                  return cache[prop];
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
                  return Object.defineProperty(cache, prop, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return target[prop];
                    },
                    set(value2) {
                      target[prop] = value2;
                    }
                  }), value;
                return cache[prop] = value, value;
              },
              set(proxyTarget2, prop, value, receiver) {
                return prop in cache ? cache[prop] = value : target[prop] = value, !0;
              },
              defineProperty(proxyTarget2, prop, desc) {
                return Reflect.defineProperty(cache, prop, desc);
              },
              deleteProperty(proxyTarget2, prop) {
                return Reflect.deleteProperty(cache, prop);
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
        module2.exports = wrapAPIs(chrome);
      } else
        module2.exports = globalThis.browser;
    });
  }
}), esm_build_a564a4cea9152dee9787cea93457ae9e69afe22a_46a4a4a9_exports = {};
__export2(esm_build_a564a4cea9152dee9787cea93457ae9e69afe22a_46a4a4a9_exports, {
  default: () => esm_build_a564a4cea9152dee9787cea93457ae9e69afe22a_46a4a4a9_default
});
var __module = __toESM(require_browser_polyfill());
__reExport(esm_build_a564a4cea9152dee9787cea93457ae9e69afe22a_46a4a4a9_exports, __toESM(require_browser_polyfill()));
var { default: __default, ...__rest } = __module, esm_build_a564a4cea9152dee9787cea93457ae9e69afe22a_46a4a4a9_default = __default !== void 0 ? __default : __rest;

// browser/import_browser_polyfill.ts
globalThis.immersiveTranslateBrowserAPI = esm_build_a564a4cea9152dee9787cea93457ae9e69afe22a_46a4a4a9_default;

// locales/zh-CN.json
var zh_CN_default = {
  lineBreakMaxTextCount: "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "translate-pdf": "\u70B9\u51FB\u7FFB\u8BD1 PDF",
  "translate-firefox-local-pdf": "\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",
  enableLineBreak: "\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  sponsorLabel: "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",
  help: "\u5E2E\u52A9",
  browserShortcutsNoteForFirefox: "Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",
  browserShortcutsNoteForChrome: "\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",
  browserShortcutsSucks: "\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",
  enableLineBreakDescription: "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8BD1",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
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
  isShowContextMenu: "\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",
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
  "translationServices.cai": "\u5F69\u4E91\u5C0F\u8BD1 (Alpha)",
  "translationServices.volcAlpha": "\u706B\u5C71 (Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8BD1",
  "translationServices.transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
  "translationServices.niu": "\u5C0F\u725B\u7FFB\u8BD1",
  "translationServices.papago": "Papago \u7FFB\u8BD1",
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
  useAboveStyleForTheseSites: "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",
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
  resetToDefaultColor: "\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",
  isTranslateTitle: "\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",
  isTranslateTitleDescription: "\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1"
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
  "translationServices.cai": "\u5F69\u96F2\u5C0F\u8B6F (Alpha)",
  "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8B6F(Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8B6F",
  "translationServices.transmart": "\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F",
  "translationServices.niu": "\u5C0F\u725B\u7FFB\u8B6F",
  "translationServices.papago": "Papago\u7FFB\u8B6F",
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
  useAboveStyleForTheseSites: "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",
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
  "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Youdao, etc. it also works on iOS Safari.",
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
  toggleTranslatePageWhenThreeFingersOnTheScreen: "Three-finger touch to show/hide translation display",
  toggleTranslationMaskWhenThreeFingersOnTheScreen: "Multi-finger touch to show/hide the blur effect of the translation",
  addUrlDescription: "The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",
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
  changeToTranslateTheWholePage: "Translate the whole page",
  changeToTranslateTheMainPage: "Translate main only",
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
  "translationServices.cai": "Caiyun Translation (Alpha)",
  "translationServices.volcAlpha": "Volcano Translation (Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "Youdao Translation",
  "translationServices.transmart": "Tencent Smart Translation",
  "translationServices.niu": "Niu Translation",
  "translationServices.papago": "Papago Translation",
  "translationServices.d": "DeeplX (Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translate title": "Translate page title",
  "always languages": "Always translate the following languages",
  neverTranslateLanguagesLabel: "Never Translated Languages",
  neverTranslateTheFollowingLanguagesDescription: "When a paragraph on a page is in one of the following languages, the translation will be skipped",
  enableUserscriptPagePopup: "Always show Popup windows on the page",
  enableUserscriptPagePopupDescription: "Three-finger touch to show the Popup.",
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
var brandName = "Immersive Translate", brandId = "immersive-translate", pdfViewerUrl = "pdf/index.html", brandIdForJs = "immersiveTranslate", GOOGLE_CLIENT_ID = "759003177173-mfm15s5nd77vfmo6e7lanof1emnanf0e.apps.googleusercontent.com", GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow", LATEST_FILE_NAME = "immersive-translate-config-latest.json", AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", iframeMessageRateIdentifier = brandIdForJs + "WaitForRateLimit", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`, buildinConfigStorageKey = "buildinConfig", localConfigStorageKey = "localConfig", contextOpenOptionsMenuId = "openOptionsPage";
var contextTranslateLocalPdfFileMenuId = "translateLocalPdfFile", pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
var elementMarkRootKey = `${brandIdForJs}Root`, sourceElementEffectAttributeName = `data-${brandId}-effect`, sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`, sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`, sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`, sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`, sourceElementExcludeAttributeNameForSelector = `data-${brandId}-exclude-mark`, sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`, sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`, sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`, sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`, sourceElementLeft = `${brandIdForJs}Left`, sourceElementRight = `${brandIdForJs}Right`, sourceElementWidth = `${brandIdForJs}Width`, sourceElementHeight = `${brandIdForJs}Height`, sourceElementTop = `${brandIdForJs}Top`, sourceElementFontSize = `${brandIdForJs}FontSize`;
var sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`;
var translationTargetElementWrapperClass = `${brandId}-target-wrapper`, translationPdfTargetContainerClass = `${brandId}-pdf-target-container`, translationTargetInnerElementWrapperClass = `${brandId}-target-inner`, translationSourceElementsWrapperClass = `${brandId}-source-wrapper`, translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`, translationFrameRootThemeAttributeName = `${brandId}-root-translation-theme`, translationFrameRootThemeAttributeNameForJs = `${brandIdForJs}RootTranslationTheme`, translationTargetTranslationElementVerticalBlockClass = `${brandId}-target-translation-vertical-block-wrapper`, translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`, translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`, translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
var languages = [
  "auto",
  "en",
  "zh-CN",
  "zh-TW",
  "ja",
  "ko",
  "es",
  "de",
  "fr",
  "pt",
  "ru",
  "ar",
  "it",
  "ms",
  "id",
  "vi",
  "af",
  "th",
  "ur",
  "am",
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
  "el",
  "eo",
  "et",
  "eu",
  "fa",
  "fi",
  "fil",
  "fj",
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
  "ig",
  "is",
  "jw",
  "ka",
  "kk",
  "km",
  "kn",
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
  "ro",
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
  "tlh",
  "tlh-Qaak",
  "to",
  "tr",
  "ty",
  "ug",
  "uk",
  "uz",
  "wyw",
  "xh",
  "yi",
  "yo",
  "yua",
  "yue",
  "zu"
];
var fallbackLanguage = "zh-CN";
var openlProps = [{
  type: "select",
  name: "codename",
  label: "translationEngine",
  default: "youdao",
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
  papago: {
    name: "Papago",
    homepage: "https://translate.google.com/"
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
  cai: {
    name: "Cai",
    homepage: "https://fanyi.caiyunapp.com/",
    alpha: !0
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
  },
  azure: {
    name: "azure",
    homepage: "https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",
    docUrl: "https://immersive-translate.owenyoung.com/services/azure",
    allProps: [{
      name: "region",
      required: !0,
      default: "eastasia",
      type: "text"
    }, {
      name: "APIKEY",
      required: !0,
      type: "password"
    }]
  }
}, childFrameToRootFrameIdentifier = { type: brandIdForJs + "ChildFrameToRootFrameIdentifier" };

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

// env.ts
function getEnv() {
  return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : define_process_env_default;
}
var env = getEnv();
function isMonkey() {
  return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
}
function isUserscriptRuntime() {
  if (
    // @ts-ignore: it's ok
    typeof globalThis.immersiveTranslateBrowserAPI < "u" && // @ts-ignore: it's ok
    globalThis.immersiveTranslateBrowserAPI.runtime && // @ts-ignore: it's ok
    globalThis.immersiveTranslateBrowserAPI.runtime.getManifest
  ) {
    let manifest = globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();
    return !!(manifest && manifest._isUserscript);
  } else
    return !1;
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
    papago: {
      placeholderDelimiters: ["{", "}"]
    },
    dpro: {
      apiUrl: "https://api.deepl.com/jsonrpc"
    }
  },
  shortcuts: {
    toggleTranslatePage: "Alt+A",
    toggleTranslateTheWholePage: "Alt+W",
    toggleTranslateToThePageEndImmediately: "",
    toggleTranslationMask: ""
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
    initTranslationServiceAsSoonAsPossible: !0,
    additionalInjectedCss: [],
    isTranslateTitle: !0,
    languageDetectMinTextCount: 50,
    wrapperPrefix: "smart",
    wrapperSuffix: "smart",
    isPdf: !1,
    isTransformPreTagNewLine: !1,
    urlChangeDelay: 20,
    mutationChangeDelay: 10,
    visibleDelay: 0,
    additionalStayOriginalSelectors: ["span.katex"],
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
      "WBR",
      "RELIN-HC",
      "RELIN-HIGHLIGHT",
      "RELIN-ORIGIN",
      "RELIN-TARGET",
      "XQDD_HIGHLIGHT_NEW_WORD"
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
      isTranslateTitle: !1,
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
      matches: [
        "https://www.reddit.com/r/*/comments/*/*",
        "https://www.reddit.com/",
        "https://www.reddit.com/hot/",
        "https://www.reddit.com/new/",
        "https://www.reddit.com/top/"
      ],
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
      waitForSelectors: ["[data-testid=post_author_link]"]
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
      detectParagraphLanguage: !0,
      selectors: [
        "h2[data-thread-perm-id]",
        "span[data-thread-id]",
        "div[data-message-id] div[class='']"
      ]
    },
    {
      matches: "outlook.live.com",
      normalizeBody: "#ReadingPaneContainerId",
      detectParagraphLanguage: !0,
      atomicBlockSelectors: ["div p:has(span)"],
      excludeSelectors: [".jHAG3.XG5Jd", ".OZZZK", ".lDdSm"]
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
        "div[class^='repliedTextContent']",
        "div[class^='repliedTextPreview']",
        "div[class^='messageAttachment']",
        "div[class^='repliedMessage']",
        "div[class^='reactionTooltip']",
        "div[class*='isSystemMessage']",
        "div[class^='avatarWrapper']",
        "div[class^='container'] [class^='topLine']",
        "div[class^='container'] [class^='bottomLine']",
        "div[class^='container'] [class^='children'] button[class^='component']",
        "div[class^='userPopoutOverlayBackground'] [class^='userTagNoNickname']",
        "div[class^='userPopoutOverlayBackgound'] [class^='userTagNoNickname']",
        "span[class^='botTag']",
        "h3[class^='header']",
        "h2[class^='forumPostTitle']",
        "[class^='title'][aria-label='Channel header']",
        "div[class^='unreadPill']",
        "div[class^='sectionHeader']",
        "article[class^=embedWrapper] [class^=anchor]",
        "article[class^=embedWrapper] [class^=embedProvider]",
        "article[class^=embedWrapper] [class^=embedFooter]",
        "[data-list-item-id^='members'] [class^='username']",
        "[data-list-item-id^='forum-channel-list'] div[class^='tagsContainer']",
        "li[class^='containerDefault'] div[class^='channelInfo']",
        "li[class^='card'] div[class^='tags']",
        "li[class^='card'] div[class^='footer']"
      ],
      globalStyles: {
        "div[class^=headerText]": "max-height: unset;",
        "div[class^=message]": "max-height: unset;",
        "div[class^=text]": "max-height: unset;",
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
        ".commentMessage > span",
        "h1.floatLeft",
        ".commentText"
      ],
      detectParagraphLanguage: !0,
      wrapperPrefix: `

`,
      wrapperSuffix: `
`,
      globalStyles: {
        ".title": "height: unset; max-height: unset;",
        ".title > a": "height: unset; max-height: unset;",
        ".thumbnailTitle": "height: unset; max-height: unset;"
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
      matches: ["www.construct.net"],
      excludeMatches: ["preview.construct.net", "editor.construct.net"],
      additionalSelectors: ["aside", "div.manualContent"],
      atomicBlockSelectors: [],
      stayOriginalSelectors: ["a.usernameReference"],
      additionalInlineSelectors: ["a.forumLink"],
      additionalExcludeSelectors: [
        "div.topNav",
        "div.usernameLink",
        "ul.authorDetails",
        "ul.tagViewer",
        "ul.breadCrumbNav",
        "ul.subForumForums",
        "ul.postTools",
        "li.comment ul.controls",
        "div.forumTopNavWrap",
        "div.downloadWrap",
        "div.articleLeftMenu",
        "div.usernameTextWrap",
        "div.favouriteWrap",
        "div.bannerWrapper",
        "div.viewAddonRightMenu",
        "div.extendedMenu.addonsSubMenu",
        "#BottomLinks.bottomLinks",
        "div#LeftSide.leftSide",
        "div#BottomWrap.bottomWrap",
        "div.courseListWrap div.overview",
        "div.conversationControls",
        "div.contentWrapper h1",
        "div.conversationControls",
        "td.location a#LocationLink",
        "#TopLevelComments .topBar",
        "#TopLevelComments .controls",
        ".tagViewWrap",
        ".changeCount",
        ".otherStats",
        ".FilterMenu",
        ".mobileTopicStats",
        ".forumControlsWrapper",
        ".forumsBottomNavWrap",
        ".breadCrumbNav",
        ".favouriteWrap",
        ".usernameLink",
        ".followWrapper",
        ".blogPostStats",
        ".manualContent dl dt"
      ],
      globalStyles: {
        "td.location a#LocationLink": "padding-top: 4px;",
        "div.articleMain .tutCourseWrap": "align-items: flex-start;"
      }
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
      matches: "*.fandom.com",
      urlChangeDelay: 800,
      normalizeBody: "#mw-content-text",
      globalStyles: {
        "#mw-content-text > div > div:nth-child(1)": "height:100%;"
      },
      additionalExcludeSelectors: [
        "header.fandom-community-header",
        "div.ph-registration-buttons"
      ]
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
      matches: "https://steamcommunity.com/app/*",
      globalStyles: {
        ".forum_topic": "height:auto;",
        ".forum_topic_name": "white-space:normal;"
      },
      excludeSelectors: [
        ".forum_paging",
        ".forum_topic_reply_count",
        ".forum_topic_lastpost",
        ".forum_topic_award_count",
        ".discussion_search_pagingcontrols"
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
      extraBlockSelectors: ["[data-test=prompt]"]
    },
    {
      matches: ["https://crates.io/search*"],
      selectors: ["div[class^=_description-box] div[class^=_description]"]
    },
    {
      matches: "www.theverge.com",
      shadowRootSelectors: ["div#coral_thread > div"]
    }
  ]
};

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
function isChrome() {
  return isBrowser(CHROME);
}
function isDeno() {
  return typeof Deno < "u";
}
function isFirefox() {
  return isBrowser(FIREFOX);
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

// utils/array.ts
function arrayOrGenericToArray(arrayOrGeneric) {
  return Array.isArray(arrayOrGeneric) ? arrayOrGeneric : arrayOrGeneric ? [arrayOrGeneric] : [];
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
      )), configKey === "shortcuts" && (isMonkey() ? finalConfig[configKey] = {
        ...finalConfig[configKey],
        ...shortcutsFromBrowser
      } : finalConfig[configKey] = {
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
async function setUserConfig(config) {
  await browserAPI.storage.sync.set({ userConfig: config });
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

// https://deno.land/std@0.171.0/async/delay.ts
function delay(ms, options = {}) {
  let { signal, persistent } = options;
  return signal?.aborted ? Promise.reject(new DOMException("Delay was aborted.", "AbortError")) : new Promise((resolve, reject) => {
    let abort = () => {
      clearTimeout(i2), reject(new DOMException("Delay was aborted.", "AbortError"));
    }, i2 = setTimeout(() => {
      signal?.removeEventListener("abort", abort), resolve();
    }, ms);
    if (signal?.addEventListener("abort", abort, { once: !0 }), persistent === !1)
      try {
        Deno.unrefTimer(i2);
      } catch (error) {
        if (!(error instanceof ReferenceError))
          throw error;
        console.error("`persistent` option is only available in Deno");
      }
  });
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
function k(e3, t4) {
  for (var _3 in t4)
    e3[_3] = t4[_3];
  return e3;
}
function j(e3) {
  var t4 = e3.parentNode;
  t4 && t4.removeChild(e3);
}
function w(e3, t4, _3, r, l2) {
  var o3 = { type: e3, props: t4, key: _3, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l2 ?? ++$ };
  return l2 == null && d.vnode != null && d.vnode(o3), o3;
}
function L(e3) {
  return e3.children;
}
function U(e3, t4) {
  this.props = e3, this.context = t4;
}
function C(e3, t4) {
  if (t4 == null)
    return e3.__ ? C(e3.__, e3.__.__k.indexOf(e3) + 1) : null;
  for (var _3; t4 < e3.__k.length; t4++)
    if ((_3 = e3.__k[t4]) != null && _3.__e != null)
      return _3.__e;
  return typeof e3.type == "function" ? C(e3) : null;
}
function z(e3) {
  var t4, _3;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, t4 = 0; t4 < e3.__k.length; t4++)
      if ((_3 = e3.__k[t4]) != null && _3.__e != null) {
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
    e3 = S.sort(function(t4, _3) {
      return t4.__v.__b - _3.__v.__b;
    }), S = [], e3.some(function(t4) {
      var _3, r, l2, o3, s5, f4;
      t4.__d && (s5 = (o3 = (_3 = t4).__v).__e, (f4 = _3.__P) && (r = [], (l2 = k({}, o3)).__v = o3.__v + 1, W(f4, o3, l2, _3.__n, f4.ownerSVGElement !== void 0, o3.__h != null ? [s5] : null, r, s5 ?? C(o3), o3.__h), K(r, o3), o3.__e != s5 && z(o3)));
    });
}
function G(e3, t4, _3, r, l2, o3, s5, f4, p4, a) {
  var n3, h3, c4, i2, u3, b4, v3, y3 = r && r.__k || V, g5 = y3.length;
  for (_3.__k = [], n3 = 0; n3 < t4.length; n3++)
    if ((i2 = _3.__k[n3] = (i2 = t4[n3]) == null || typeof i2 == "boolean" ? null : typeof i2 == "string" || typeof i2 == "number" || typeof i2 == "bigint" ? w(null, i2, null, null, i2) : Array.isArray(i2) ? w(L, { children: i2 }, null, null, null) : i2.__b > 0 ? w(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) != null) {
      if (i2.__ = _3, i2.__b = _3.__b + 1, (c4 = y3[n3]) === null || c4 && i2.key == c4.key && i2.type === c4.type)
        y3[n3] = void 0;
      else
        for (h3 = 0; h3 < g5; h3++) {
          if ((c4 = y3[h3]) && i2.key == c4.key && i2.type === c4.type) {
            y3[h3] = void 0;
            break;
          }
          c4 = null;
        }
      W(e3, i2, c4 = c4 || T, l2, o3, s5, f4, p4, a), u3 = i2.__e, (h3 = i2.ref) && c4.ref != h3 && (v3 || (v3 = []), c4.ref && v3.push(c4.ref, null, i2), v3.push(h3, i2.__c || u3, i2)), u3 != null ? (b4 == null && (b4 = u3), typeof i2.type == "function" && i2.__k === c4.__k ? i2.__d = p4 = q(i2, p4, e3) : p4 = J(e3, i2, c4, y3, u3, p4), typeof _3.type == "function" && (_3.__d = p4)) : p4 && c4.__e == p4 && p4.parentNode != e3 && (p4 = C(c4));
    }
  for (_3.__e = b4, n3 = g5; n3--; )
    y3[n3] != null && (typeof _3.type == "function" && y3[n3].__e != null && y3[n3].__e == _3.__d && (_3.__d = C(r, n3 + 1)), X(y3[n3], y3[n3]));
  if (v3)
    for (n3 = 0; n3 < v3.length; n3++)
      Q(v3[n3], v3[++n3], v3[++n3]);
}
function q(e3, t4, _3) {
  for (var r, l2 = e3.__k, o3 = 0; l2 && o3 < l2.length; o3++)
    (r = l2[o3]) && (r.__ = e3, t4 = typeof r.type == "function" ? q(r, t4, _3) : J(_3, r, r, l2, r.__e, t4));
  return t4;
}
function J(e3, t4, _3, r, l2, o3) {
  var s5, f4, p4;
  if (t4.__d !== void 0)
    s5 = t4.__d, t4.__d = void 0;
  else if (_3 == null || l2 != o3 || l2.parentNode == null)
    e:
      if (o3 == null || o3.parentNode !== e3)
        e3.appendChild(l2), s5 = null;
      else {
        for (f4 = o3, p4 = 0; (f4 = f4.nextSibling) && p4 < r.length; p4 += 2)
          if (f4 == l2)
            break e;
        e3.insertBefore(l2, o3), s5 = o3;
      }
  return s5 !== void 0 ? s5 : l2.nextSibling;
}
function _e(e3, t4, _3, r, l2) {
  var o3;
  for (o3 in _3)
    o3 === "children" || o3 === "key" || o3 in t4 || N(e3, o3, null, _3[o3], r);
  for (o3 in t4)
    l2 && typeof t4[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || _3[o3] === t4[o3] || N(e3, o3, t4[o3], _3[o3], r);
}
function I(e3, t4, _3) {
  t4[0] === "-" ? e3.setProperty(t4, _3) : e3[t4] = _3 == null ? "" : typeof _3 != "number" || Z.test(t4) ? _3 : _3 + "px";
}
function N(e3, t4, _3, r, l2) {
  var o3;
  e:
    if (t4 === "style")
      if (typeof _3 == "string")
        e3.style.cssText = _3;
      else {
        if (typeof r == "string" && (e3.style.cssText = r = ""), r)
          for (t4 in r)
            _3 && t4 in _3 || I(e3.style, t4, "");
        if (_3)
          for (t4 in _3)
            r && _3[t4] === r[t4] || I(e3.style, t4, _3[t4]);
      }
    else if (t4[0] === "o" && t4[1] === "n")
      o3 = t4 !== (t4 = t4.replace(/Capture$/, "")), t4 = t4.toLowerCase() in e3 ? t4.toLowerCase().slice(2) : t4.slice(2), e3.l || (e3.l = {}), e3.l[t4 + o3] = _3, _3 ? r || e3.addEventListener(t4, o3 ? R : O, o3) : e3.removeEventListener(t4, o3 ? R : O, o3);
    else if (t4 !== "dangerouslySetInnerHTML") {
      if (l2)
        t4 = t4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t4 !== "href" && t4 !== "list" && t4 !== "form" && t4 !== "tabIndex" && t4 !== "download" && t4 in e3)
        try {
          e3[t4] = _3 ?? "";
          break e;
        } catch {
        }
      typeof _3 == "function" || (_3 != null && (_3 !== !1 || t4[0] === "a" && t4[1] === "r") ? e3.setAttribute(t4, _3) : e3.removeAttribute(t4));
    }
}
function O(e3) {
  this.l[e3.type + !1](d.event ? d.event(e3) : e3);
}
function R(e3) {
  this.l[e3.type + !0](d.event ? d.event(e3) : e3);
}
function W(e3, t4, _3, r, l2, o3, s5, f4, p4) {
  var a, n3, h3, c4, i2, u3, b4, v3, y3, g5, x4, H7, E3, m3 = t4.type;
  if (t4.constructor !== void 0)
    return null;
  _3.__h != null && (p4 = _3.__h, f4 = t4.__e = _3.__e, t4.__h = null, o3 = [f4]), (a = d.__b) && a(t4);
  try {
    e:
      if (typeof m3 == "function") {
        if (v3 = t4.props, y3 = (a = m3.contextType) && r[a.__c], g5 = a ? y3 ? y3.props.value : a.__ : r, _3.__c ? b4 = (n3 = t4.__c = _3.__c).__ = n3.__E : ("prototype" in m3 && m3.prototype.render ? t4.__c = n3 = new m3(v3, g5) : (t4.__c = n3 = new U(v3, g5), n3.constructor = m3, n3.render = oe), y3 && y3.sub(n3), n3.props = v3, n3.state || (n3.state = {}), n3.context = g5, n3.__n = r, h3 = n3.__d = !0, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m3.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k({}, n3.__s)), k(n3.__s, m3.getDerivedStateFromProps(v3, n3.__s))), c4 = n3.props, i2 = n3.state, h3)
          m3.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
        else {
          if (m3.getDerivedStateFromProps == null && v3 !== c4 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v3, g5), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v3, n3.__s, g5) === !1 || t4.__v === _3.__v) {
            n3.props = v3, n3.state = n3.__s, t4.__v !== _3.__v && (n3.__d = !1), n3.__v = t4, t4.__e = _3.__e, t4.__k = _3.__k, t4.__k.forEach(function(A4) {
              A4 && (A4.__ = t4);
            }), n3.__h.length && s5.push(n3);
            break e;
          }
          n3.componentWillUpdate != null && n3.componentWillUpdate(v3, n3.__s, g5), n3.componentDidUpdate != null && n3.__h.push(function() {
            n3.componentDidUpdate(c4, i2, u3);
          });
        }
        if (n3.context = g5, n3.props = v3, n3.__v = t4, n3.__P = e3, x4 = d.__r, H7 = 0, "prototype" in m3 && m3.prototype.render)
          n3.state = n3.__s, n3.__d = !1, x4 && x4(t4), a = n3.render(n3.props, n3.state, n3.context);
        else
          do
            n3.__d = !1, x4 && x4(t4), a = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
          while (n3.__d && ++H7 < 25);
        n3.state = n3.__s, n3.getChildContext != null && (r = k(k({}, r), n3.getChildContext())), h3 || n3.getSnapshotBeforeUpdate == null || (u3 = n3.getSnapshotBeforeUpdate(c4, i2)), E3 = a != null && a.type === L && a.key == null ? a.props.children : a, G(e3, Array.isArray(E3) ? E3 : [E3], t4, _3, r, l2, o3, s5, f4, p4), n3.base = t4.__e, t4.__h = null, n3.__h.length && s5.push(n3), b4 && (n3.__E = n3.__ = null), n3.__e = !1;
      } else
        o3 == null && t4.__v === _3.__v ? (t4.__k = _3.__k, t4.__e = _3.__e) : t4.__e = ne(_3.__e, t4, _3, r, l2, o3, s5, p4);
    (a = d.diffed) && a(t4);
  } catch (A4) {
    t4.__v = null, (p4 || o3 != null) && (t4.__e = f4, t4.__h = !!p4, o3[o3.indexOf(f4)] = null), d.__e(A4, t4, _3);
  }
}
function K(e3, t4) {
  d.__c && d.__c(t4, e3), e3.some(function(_3) {
    try {
      e3 = _3.__h, _3.__h = [], e3.some(function(r) {
        r.call(_3);
      });
    } catch (r) {
      d.__e(r, _3.__v);
    }
  });
}
function ne(e3, t4, _3, r, l2, o3, s5, f4) {
  var p4, a, n3, h3 = _3.props, c4 = t4.props, i2 = t4.type, u3 = 0;
  if (i2 === "svg" && (l2 = !0), o3 != null) {
    for (; u3 < o3.length; u3++)
      if ((p4 = o3[u3]) && "setAttribute" in p4 == !!i2 && (i2 ? p4.localName === i2 : p4.nodeType === 3)) {
        e3 = p4, o3[u3] = null;
        break;
      }
  }
  if (e3 == null) {
    if (i2 === null)
      return document.createTextNode(c4);
    e3 = l2 ? document.createElementNS("http://www.w3.org/2000/svg", i2) : document.createElement(i2, c4.is && c4), o3 = null, f4 = !1;
  }
  if (i2 === null)
    h3 === c4 || f4 && e3.data === c4 || (e3.data = c4);
  else {
    if (o3 = o3 && P.call(e3.childNodes), a = (h3 = _3.props || T).dangerouslySetInnerHTML, n3 = c4.dangerouslySetInnerHTML, !f4) {
      if (o3 != null)
        for (h3 = {}, u3 = 0; u3 < e3.attributes.length; u3++)
          h3[e3.attributes[u3].name] = e3.attributes[u3].value;
      (n3 || a) && (n3 && (a && n3.__html == a.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
    }
    if (_e(e3, c4, h3, l2, f4), n3)
      t4.__k = [];
    else if (u3 = t4.props.children, G(e3, Array.isArray(u3) ? u3 : [u3], t4, _3, r, l2 && i2 !== "foreignObject", o3, s5, o3 ? o3[0] : _3.__k && C(_3, 0), f4), o3 != null)
      for (u3 = o3.length; u3--; )
        o3[u3] != null && j(o3[u3]);
    f4 || ("value" in c4 && (u3 = c4.value) !== void 0 && (u3 !== e3.value || i2 === "progress" && !u3 || i2 === "option" && u3 !== h3.value) && N(e3, "value", u3, h3.value, !1), "checked" in c4 && (u3 = c4.checked) !== void 0 && u3 !== e3.checked && N(e3, "checked", u3, h3.checked, !1));
  }
  return e3;
}
function Q(e3, t4, _3) {
  try {
    typeof e3 == "function" ? e3(t4) : e3.current = t4;
  } catch (r) {
    d.__e(r, _3);
  }
}
function X(e3, t4, _3) {
  var r, l2;
  if (d.unmount && d.unmount(e3), (r = e3.ref) && (r.current && r.current !== e3.__e || Q(r, null, t4)), (r = e3.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o3) {
        d.__e(o3, t4);
      }
    r.base = r.__P = null, e3.__c = void 0;
  }
  if (r = e3.__k)
    for (l2 = 0; l2 < r.length; l2++)
      r[l2] && X(r[l2], t4, typeof e3.type != "function");
  _3 || e3.__e == null || j(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function oe(e3, t4, _3) {
  return this.constructor(e3, _3);
}
P = V.slice, d = { __e: function(e3, t4, _3, r) {
  for (var l2, o3, s5; t4 = t4.__; )
    if ((l2 = t4.__c) && !l2.__)
      try {
        if ((o3 = l2.constructor) && o3.getDerivedStateFromError != null && (l2.setState(o3.getDerivedStateFromError(e3)), s5 = l2.__d), l2.componentDidCatch != null && (l2.componentDidCatch(e3, r || {}), s5 = l2.__d), s5)
          return l2.__E = l2;
      } catch (f4) {
        e3 = f4;
      }
  throw e3;
} }, $ = 0, Y = function(e3) {
  return e3 != null && e3.constructor === void 0;
}, U.prototype.setState = function(e3, t4) {
  var _3;
  _3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e3 == "function" && (e3 = e3(k({}, _3), this.props)), e3 && k(_3, e3), e3 != null && this.__v && (t4 && this.__h.push(t4), M(this));
}, U.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = !0, e3 && this.__h.push(e3), M(this));
}, U.prototype.render = L, S = [], D.__r = 0, B = 0;

// https://esm.sh/stable/preact@10.11.0/deno/hooks.js
var i, n, d2, N2;
var q2 = [], l = [], V2 = d.__b, g = d.__r, b = d.diffed, C2 = d.__c, A = d.unmount;
function R2() {
  for (var _3; _3 = q2.shift(); )
    if (_3.__P && _3.__H)
      try {
        _3.__H.__h.forEach(m), _3.__H.__h.forEach(p), _3.__H.__h = [];
      } catch (t4) {
        _3.__H.__h = [], d.__e(t4, _3.__v);
      }
}
d.__b = function(_3) {
  typeof _3.type != "function" || _3.o || _3.type === L ? _3.o || (_3.o = _3.__ && _3.__.o ? _3.__.o : "") : _3.o = (_3.__ && _3.__.o ? _3.__.o : "") + (_3.__ && _3.__.__k ? _3.__.__k.indexOf(_3) : 0), n = null, V2 && V2(_3);
}, d.__r = function(_3) {
  g && g(_3), i = 0;
  var t4 = (n = _3.__c).__H;
  t4 && (d2 === n ? (t4.__h = [], n.__h = [], t4.__.forEach(function(u3) {
    u3.__N && (u3.__ = u3.__N), u3.__V = l, u3.__N = u3.i = void 0;
  })) : (t4.__h.forEach(m), t4.__h.forEach(p), t4.__h = [])), d2 = n;
}, d.diffed = function(_3) {
  b && b(_3);
  var t4 = _3.__c;
  t4 && t4.__H && (t4.__H.__h.length && (q2.push(t4) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t4.__H.__.forEach(function(u3) {
    u3.i && (u3.__H = u3.i), u3.__V !== l && (u3.__ = u3.__V), u3.i = void 0, u3.__V = l;
  })), d2 = n = null;
}, d.__c = function(_3, t4) {
  t4.some(function(u3) {
    try {
      u3.__h.forEach(m), u3.__h = u3.__h.filter(function(o3) {
        return !o3.__ || p(o3);
      });
    } catch (o3) {
      t4.some(function(r) {
        r.__h && (r.__h = []);
      }), t4 = [], d.__e(o3, u3.__v);
    }
  }), C2 && C2(_3, t4);
}, d.unmount = function(_3) {
  A && A(_3);
  var t4, u3 = _3.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(o3) {
    try {
      m(o3);
    } catch (r) {
      t4 = r;
    }
  }), u3.__H = void 0, t4 && d.__e(t4, u3.__v));
};
var F2 = typeof requestAnimationFrame == "function";
function S2(_3) {
  var t4, u3 = function() {
    clearTimeout(o3), F2 && cancelAnimationFrame(t4), setTimeout(_3);
  }, o3 = setTimeout(u3, 100);
  F2 && (t4 = requestAnimationFrame(u3));
}
function m(_3) {
  var t4 = n, u3 = _3.__c;
  typeof u3 == "function" && (_3.__c = void 0, u3()), n = t4;
}
function p(_3) {
  var t4 = n;
  _3.__c = _3.__(), n = t4;
}

// https://esm.sh/v107/memoize-one@6.0.0/deno/memoize-one.js
var s = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};

// https://esm.sh/v107/lodash.throttle@4.1.1/deno/lodash.throttle.js
var __global$ = globalThis || (typeof window < "u" ? window : self), P2 = Object.create, I2 = Object.defineProperty, D2 = Object.getOwnPropertyDescriptor, G2 = Object.getOwnPropertyNames, H = Object.getPrototypeOf, U2 = Object.prototype.hasOwnProperty, X2 = (e3, t4) => () => (t4 || e3((t4 = { exports: {} }).exports, t4), t4.exports), q3 = (e3, t4) => {
  for (var n3 in t4)
    I2(e3, n3, { get: t4[n3], enumerable: !0 });
}, v = (e3, t4, n3, f4) => {
  if (t4 && typeof t4 == "object" || typeof t4 == "function")
    for (let i2 of G2(t4))
      !U2.call(e3, i2) && i2 !== n3 && I2(e3, i2, { get: () => t4[i2], enumerable: !(f4 = D2(t4, i2)) || f4.enumerable });
  return e3;
}, s2 = (e3, t4, n3) => (v(e3, t4, "default"), n3 && v(n3, t4, "default")), L2 = (e3, t4, n3) => (n3 = e3 != null ? P2(H(e3)) : {}, v(t4 || !e3 || !e3.__esModule ? I2(n3, "default", { value: e3, enumerable: !0 }) : n3, e3)), h = X2((ge2, N7) => {
  var M5 = "Expected a function", W6 = NaN, z6 = "[object Symbol]", J4 = /^\s+|\s+$/g, K5 = /^[-+]0x[0-9a-f]+$/i, Q6 = /^0b[01]+$/i, V6 = /^0o[0-7]+$/i, Y6 = parseInt, Z6 = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, w4 = typeof self == "object" && self && self.Object === Object && self, ee4 = Z6 || w4 || Function("return this")(), te2 = Object.prototype, ne4 = te2.toString, re4 = Math.max, ie4 = Math.min, O4 = function() {
    return ee4.Date.now();
  };
  function fe(e3, t4, n3) {
    var f4, i2, b4, l2, a, u3, d4 = 0, S7 = !1, g5 = !1, T6 = !0;
    if (typeof e3 != "function")
      throw new TypeError(M5);
    t4 = C5(t4) || 0, p4(n3) && (S7 = !!n3.leading, g5 = "maxWait" in n3, b4 = g5 ? re4(C5(n3.maxWait) || 0, t4) : b4, T6 = "trailing" in n3 ? !!n3.trailing : T6);
    function j5(r) {
      var o3 = f4, m3 = i2;
      return f4 = i2 = void 0, d4 = r, l2 = e3.apply(m3, o3), l2;
    }
    function A4(r) {
      return d4 = r, a = setTimeout(y3, t4), S7 ? j5(r) : l2;
    }
    function B8(r) {
      var o3 = r - u3, m3 = r - d4, k4 = t4 - o3;
      return g5 ? ie4(k4, b4 - m3) : k4;
    }
    function E3(r) {
      var o3 = r - u3, m3 = r - d4;
      return u3 === void 0 || o3 >= t4 || o3 < 0 || g5 && m3 >= b4;
    }
    function y3() {
      var r = O4();
      if (E3(r))
        return _3(r);
      a = setTimeout(y3, B8(r));
    }
    function _3(r) {
      return a = void 0, T6 && f4 ? j5(r) : (f4 = i2 = void 0, l2);
    }
    function F7() {
      a !== void 0 && clearTimeout(a), d4 = 0, f4 = u3 = i2 = a = void 0;
    }
    function R6() {
      return a === void 0 ? l2 : _3(O4());
    }
    function x4() {
      var r = O4(), o3 = E3(r);
      if (f4 = arguments, i2 = this, u3 = r, o3) {
        if (a === void 0)
          return A4(u3);
        if (g5)
          return a = setTimeout(y3, t4), j5(u3);
      }
      return a === void 0 && (a = setTimeout(y3, t4)), l2;
    }
    return x4.cancel = F7, x4.flush = R6, x4;
  }
  function ae4(e3, t4, n3) {
    var f4 = !0, i2 = !0;
    if (typeof e3 != "function")
      throw new TypeError(M5);
    return p4(n3) && (f4 = "leading" in n3 ? !!n3.leading : f4, i2 = "trailing" in n3 ? !!n3.trailing : i2), fe(e3, t4, { leading: f4, maxWait: t4, trailing: i2 });
  }
  function p4(e3) {
    var t4 = typeof e3;
    return !!e3 && (t4 == "object" || t4 == "function");
  }
  function oe4(e3) {
    return !!e3 && typeof e3 == "object";
  }
  function ue3(e3) {
    return typeof e3 == "symbol" || oe4(e3) && ne4.call(e3) == z6;
  }
  function C5(e3) {
    if (typeof e3 == "number")
      return e3;
    if (ue3(e3))
      return W6;
    if (p4(e3)) {
      var t4 = typeof e3.valueOf == "function" ? e3.valueOf() : e3;
      e3 = p4(t4) ? t4 + "" : t4;
    }
    if (typeof e3 != "string")
      return e3 === 0 ? e3 : +e3;
    e3 = e3.replace(J4, "");
    var n3 = Q6.test(e3);
    return n3 || V6.test(e3) ? Y6(e3.slice(2), n3 ? 2 : 8) : K5.test(e3) ? W6 : +e3;
  }
  N7.exports = ae4;
}), c = {};
q3(c, { default: () => se });
var ce = L2(h());
s2(c, L2(h()));
var { default: $2, ...le } = ce, se = $2 !== void 0 ? $2 : le;

// https://esm.sh/v107/@twind/core@1.0.1/deno/core.js
var F3;
function lt(t4) {
  return [...t4.v, (t4.i ? "!" : "") + t4.n].join(":");
}
function st(t4, e3 = ",") {
  return t4.map(lt).join(e3);
}
var W2 = typeof CSS < "u" && CSS.escape || ((t4) => t4.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function V3(t4) {
  for (var e3 = 9, r = t4.length; r--; )
    e3 = Math.imul(e3 ^ t4.charCodeAt(r), 1597334677);
  return "#" + ((e3 ^ e3 >>> 9) >>> 0).toString(36);
}
function kt(t4, e3 = "@media ") {
  return e3 + x(t4).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((n3) => `(${n3}-width:${r[n3]})`).join(" and "))).join(",");
}
function x(t4 = []) {
  return Array.isArray(t4) ? t4 : t4 == null ? [] : [t4];
}
function D3() {
}
var w2 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function jt(t4) {
  var e3;
  return ((e3 = t4.match(/[-=:;]/g)) == null ? void 0 : e3.length) || 0;
}
function X3(t4) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t4) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t4), 15) << 18;
}
var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function at({ n: t4, i: e3, v: r = [] }, n3, i2, l2) {
  for (let a of (t4 && (t4 = lt({ n: t4, i: e3, v: r })), l2 = [...x(l2)], r)) {
    let s5 = n3.theme("screens", a);
    for (let u3 of x(s5 && kt(s5) || n3.v(a))) {
      var o3;
      l2.push(u3), i2 |= s5 ? 67108864 | X3(u3) : a == "dark" ? 1073741824 : u3[0] == "@" ? X3(u3) : (o3 = u3, 1 << ~(/:([a-z-]+)/.test(o3) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: t4, p: i2, r: l2, i: e3 };
}
var ut = /* @__PURE__ */ new Map();
function tt(t4) {
  if (t4.d) {
    let e3 = [], r = Y2(t4.r.reduce((n3, i2) => i2[0] == "@" ? (e3.push(i2), n3) : i2 ? Y2(n3, (l2) => Y2(i2, (o3) => {
      let a = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o3);
      if (a) {
        let s5 = l2.indexOf(a[1]);
        return ~s5 ? l2.slice(0, s5) + a[0] + l2.slice(s5 + a[1].length) : Z2(l2, o3);
      }
      return Z2(o3, l2);
    })) : n3, "&"), (n3) => Z2(n3, t4.n ? "." + W2(t4.n) : ""));
    return r && e3.push(r.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i2) => i2 + "{" + n3 + "}", t4.d);
  }
}
function Y2(t4, e3) {
  return t4.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, n3, i2) => e3(n3) + i2);
}
function Z2(t4, e3) {
  return t4.replace(/&/g, e3);
}
var Dt = new Intl.Collator("en", { numeric: !0 });
function St(t4, e3) {
  for (var r = 0, n3 = t4.length; r < n3; ) {
    let i2 = n3 + r >> 1;
    0 >= Mt(t4[i2], e3) ? r = i2 + 1 : n3 = i2;
  }
  return n3;
}
function Mt(t4, e3) {
  let r = t4.p & w2.o;
  return r == (e3.p & w2.o) && (r == w2.b || r == w2.o) ? 0 : t4.p - e3.p || t4.o - e3.o || Dt.compare(t4.n, e3.n);
}
function H2(t4, e3) {
  return Math.round(parseInt(t4, 16) * e3);
}
function T2(t4, e3 = {}) {
  if (typeof t4 == "function")
    return t4(e3);
  let { opacityValue: r = "1", opacityVariable: n3 } = e3, i2 = n3 ? `var(${n3})` : r;
  if (t4.includes("<alpha-value>"))
    return t4.replace("<alpha-value>", i2);
  if (t4[0] == "#" && (t4.length == 4 || t4.length == 7)) {
    let l2 = (t4.length - 1) / 3, o3 = [17, 1, 0.062272][l2 - 1];
    return `rgba(${[H2(t4.substr(1, l2), o3), H2(t4.substr(1 + l2, l2), o3), H2(t4.substr(1 + 2 * l2, l2), o3), i2]})`;
  }
  return i2 == "1" ? t4 : i2 == "0" ? "#0000" : t4.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i2})`);
}
function ct(t4, e3, r, n3, i2 = []) {
  return function l2(o3, { n: a, p: s5, r: u3 = [], i: f4 }, c4) {
    let p4 = [], d4 = "", v3 = 0, g5 = 0;
    for (let h3 in o3 || {}) {
      var y3, A4;
      let b4 = o3[h3];
      if (h3[0] == "@") {
        if (!b4)
          continue;
        if (h3[1] == "a") {
          p4.push(...ht(a, s5, N3("" + b4), c4, s5, u3, f4, !0));
          continue;
        }
        if (h3[1] == "l") {
          for (let m3 of x(b4))
            p4.push(...l2(m3, { n: a, p: (y3 = w2[h3[7]], s5 & ~w2.o | y3), r: u3, i: f4 }, c4));
          continue;
        }
        if (h3[1] == "i") {
          p4.push(...x(b4).map((m3) => ({ p: -1, o: 0, r: [], d: h3 + " " + m3 })));
          continue;
        }
        if (h3[1] == "k") {
          p4.push({ p: w2.d, o: 0, r: [h3], d: l2(b4, { p: w2.d }, c4).map(tt).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p4.push(...x(b4).map((m3) => ({ p: w2.d, o: 0, r: [h3], d: l2(m3, { p: w2.d }, c4).map(tt).join("") })));
          continue;
        }
      }
      if (typeof b4 != "object" || Array.isArray(b4))
        h3 == "label" && b4 ? a = b4 + V3(JSON.stringify([s5, f4, o3])) : (b4 || b4 === 0) && (h3 = h3.replace(/[A-Z]/g, (m3) => "-" + m3.toLowerCase()), g5 += 1, v3 = Math.max(v3, (A4 = h3)[0] == "-" ? 0 : jt(A4) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A4) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d4 += (d4 ? ";" : "") + x(b4).map((m3) => c4.s(h3, ft("" + m3, c4.theme) + (f4 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let m3 = s5;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (C5, $5) => {
          let j5 = c4.theme("screens", $5);
          return j5 ? (m3 |= 67108864, kt(j5, "")) : C5;
        }), m3 |= X3(h3)), p4.push(...l2(b4, { n: a, p: m3, r: [...u3, h3], i: f4 }, c4));
      } else
        p4.push(...l2(b4, { p: s5, r: [...u3, h3] }, c4));
    }
    return p4.unshift({ n: a, p: s5, o: Math.max(0, 15 - g5) + 1.5 * Math.min(v3 || 15, 15), r: u3, d: d4 }), p4.sort(Mt);
  }(t4, at(e3, r, n3, i2), r);
}
function ft(t4, e3) {
  return t4.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, n3, i2, l2, o3) => {
    let a = e3(i2, o3);
    return typeof a == "function" && /color|fill|stroke/i.test(i2) ? T2(a) : "" + a;
  });
}
function pt(t4, e3) {
  let r, n3 = [];
  for (let i2 of t4)
    i2.d && i2.n ? r?.p == i2.p && "" + r.r == "" + i2.r ? (r.c = [r.c, i2.c].filter(Boolean).join(" "), r.d = r.d + ";" + i2.d) : n3.push(r = { ...i2, n: i2.n && e3 }) : n3.push({ ...i2, n: i2.n && e3 });
  return n3;
}
function B2(t4, e3, r = w2.u, n3, i2) {
  let l2 = [];
  for (let o3 of t4)
    for (let a of function(s5, u3, f4, c4, p4) {
      var d4;
      s5 = { ...s5, i: s5.i || p4 };
      let v3 = function(g5, y3) {
        let A4 = ut.get(g5.n);
        return A4 ? A4(g5, y3) : y3.r(g5.n, g5.v[0] == "dark");
      }(s5, u3);
      return v3 ? typeof v3 == "string" ? ({ r: c4, p: f4 } = at(s5, u3, f4, c4), pt(B2(N3(v3), u3, f4, c4, s5.i), s5.n)) : Array.isArray(v3) ? v3.map((g5) => {
        var y3, A4;
        return { o: 0, ...g5, r: [...x(c4), ...x(g5.r)], p: (y3 = f4, A4 = (d4 = g5.p) != null ? d4 : f4, y3 & ~w2.o | A4) };
      }) : ct(v3, s5, u3, f4, c4) : [{ c: lt(s5), p: 0, o: 0, r: [] }];
    }(o3, e3, r, n3, i2))
      l2.splice(St(l2, a), 0, a);
  return l2;
}
function ht(t4, e3, r, n3, i2, l2, o3, a) {
  return pt((a ? r.flatMap((s5) => B2([s5], n3, i2, l2, o3)) : B2(r, n3, i2, l2, o3)).map((s5) => s5.p & w2.o && (s5.n || e3 == w2.b) ? { ...s5, p: s5.p & ~w2.o | e3, o: 0 } : s5), t4);
}
function Ot(t4, e3, r, n3) {
  var i2;
  return i2 = (l2, o3) => {
    let { n: a, p: s5, r: u3, i: f4 } = at(l2, o3, e3);
    return r && ht(a, e3, r, o3, s5, u3, f4, n3);
  }, ut.set(t4, i2), t4;
}
function K2(t4, e3) {
  if (t4[t4.length - 1] != "(") {
    let r = [], n3 = !1, i2 = !1, l2 = "";
    for (let o3 of t4)
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
function Jt(t4, e3, r) {
  return r.indexOf(t4) == e3;
}
var yt = /* @__PURE__ */ new Map();
function N3(t4) {
  let e3 = yt.get(t4);
  if (!e3) {
    let r = [], n3 = [[]], i2 = 0, l2 = 0, o3 = null, a = 0, s5 = (u3, f4 = 0) => {
      i2 != a && (r.push(t4.slice(i2, a + f4)), u3 && K2(r, n3)), i2 = a + 1;
    };
    for (; a < t4.length; a++) {
      let u3 = t4[a];
      if (l2)
        t4[a - 1] != "\\" && (l2 += +(u3 == "[") || -(u3 == "]"));
      else if (u3 == "[")
        l2 += 1;
      else if (o3)
        t4[a - 1] != "\\" && o3.test(t4.slice(a)) && (o3 = null, i2 = a + RegExp.lastMatch.length);
      else if (u3 == "/" && t4[a - 1] != "\\" && (t4[a + 1] == "*" || t4[a + 1] == "/"))
        o3 = t4[a + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (u3 == "(")
        s5(), r.push(u3);
      else if (u3 == ":")
        t4[a + 1] != ":" && s5(!1, 1);
      else if (/[\s,)]/.test(u3)) {
        s5(!0);
        let f4 = r.lastIndexOf("(");
        if (u3 == ")") {
          let c4 = r[f4 - 1];
          if (/[~@]$/.test(c4)) {
            let p4 = n3.shift();
            r.length = f4, K2([...r, "#"], n3);
            let { v: d4 } = n3[0].pop();
            for (let v3 of p4)
              v3.v.splice(+(v3.v[0] == "dark") - +(d4[0] == "dark"), d4.length);
            K2([...r, Ot(c4.length > 1 ? c4.slice(0, -1) + V3(JSON.stringify([c4, p4])) : c4 + "(" + st(p4) + ")", w2.a, p4, /@$/.test(c4))], n3);
          }
          f4 = r.lastIndexOf("(", f4 - 1);
        }
        r.length = f4 + 1;
      } else
        /[~@]/.test(u3) && t4[a + 1] == "(" && n3.unshift([]);
    }
    s5(!0), yt.set(t4, e3 = n3[0]);
  }
  return e3;
}
function Ct(t4, e3, r) {
  return e3.reduce((n3, i2, l2) => n3 + r(i2) + t4[l2 + 1], t4[0]);
}
function G3(t4, e3) {
  return Array.isArray(t4) && Array.isArray(t4.raw) ? Ct(t4, e3, (r) => Q2(r).trim()) : e3.filter(Boolean).reduce((r, n3) => r + Q2(n3), t4 ? Q2(t4) : "");
}
function Q2(t4) {
  let e3, r = "";
  if (t4 && typeof t4 == "object")
    if (Array.isArray(t4))
      (e3 = G3(t4[0], t4.slice(1))) && (r += " " + e3);
    else
      for (let n3 in t4)
        t4[n3] && (r += " " + n3);
  else
    t4 != null && typeof t4 != "boolean" && (r += " " + t4);
  return r;
}
var ae = Et("@"), ue = Et("~");
function Et(t4) {
  return new Proxy(function(r, ...n3) {
    return e3("", r, n3);
  }, { get: (r, n3) => n3 in r ? r[n3] : function(i2, ...l2) {
    return e3(n3, i2, l2);
  } });
  function e3(r, n3, i2) {
    return st(N3(r + t4 + "(" + G3(n3, i2) + ")"));
  }
}
function U3(t4, e3) {
  return Array.isArray(t4) ? mt(Ct(t4, e3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof t4 == "string" ? mt(t4) : [t4];
}
var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function mt(t4) {
  let e3;
  t4 = t4.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], n3 = [r[0]], i2 = [];
  for (; e3 = Bt.exec(t4); )
    e3[4] && (r.shift(), i2.shift()), e3[3] ? (i2.unshift(e3[3]), r.unshift({}), n3.push(i2.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))) : e3[4] || (r[0][e3[1]] && (r.unshift({}), n3.push(i2.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))), r[0][e3[1]] = e3[2]);
  return n3;
}
function dt(t4, ...e3) {
  var r, n3;
  let i2 = U3(t4, e3), l2 = (((r = i2.find((o3) => o3.label)) == null ? void 0 : r.label) || "css") + V3(JSON.stringify(i2));
  return n3 = (o3, a) => pt(i2.flatMap((s5) => ct(s5, o3, a, w2.o)), l2), ut.set(l2, n3), l2;
}
var ce2 = new Proxy(function(t4, e3) {
  return bt("animation", t4, e3);
}, { get: (t4, e3) => e3 in t4 ? t4[e3] : function(r, n3) {
  return bt(e3, r, n3);
} });
function bt(t4, e3, r) {
  return { toString: () => dt({ label: t4, "@layer components": { ...typeof e3 == "object" ? e3 : { animation: e3 }, animationName: "" + r } }) };
}
var Ut = Symbol();
var z2 = new Proxy(D3, { apply: (t4, e3, r) => F3(r[0]), get(t4, e3) {
  let r = F3[e3];
  return typeof r == "function" ? function() {
    return r.apply(F3, arguments);
  } : r;
} });
var xe = function t(e3) {
  return new Proxy(function(r, ...n3) {
    return xt(e3, "", r, n3);
  }, { get: (r, n3) => n3 === "bind" ? t : n3 in r ? r[n3] : function(i2, ...l2) {
    return xt(e3, n3, i2, l2);
  } });
}();
function xt(t4, e3, r, n3) {
  return { toString() {
    let i2 = U3(r, n3), l2 = W2(e3 + V3(JSON.stringify([e3, i2])));
    return (typeof t4 == "function" ? t4 : z2)(dt({ [`@keyframes ${l2}`]: U3(r, n3) })), l2;
  } };
}

// https://esm.sh/v107/@twind/core@1.1.3/deno/core.js
var B3;
function ae2(e3) {
  return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
}
function ue2(e3, t4 = ",") {
  return e3.map(ae2).join(t4);
}
var Y3 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function T3(e3) {
  for (var t4 = 9, r = e3.length; r--; )
    t4 = Math.imul(t4 ^ e3.charCodeAt(r), 1597334677);
  return "#" + ((t4 ^ t4 >>> 9) >>> 0).toString(36);
}
function Ce(e3, t4 = "@media ") {
  return t4 + b2(e3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((i2) => `(${i2}-width:${r[i2]})`).join(" and "))).join(",");
}
function b2(e3 = []) {
  return Array.isArray(e3) ? e3 : e3 == null ? [] : [e3];
}
function F4() {
}
var S3 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function Ee(e3) {
  return e3.match(/[-=:;]/g)?.length || 0;
}
function re(e3) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
}
var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function ce3({ n: e3, i: t4, v: r = [] }, i2, n3, l2) {
  e3 && (e3 = ae2({ n: e3, i: t4, v: r })), l2 = [...b2(l2)];
  for (let s5 of r) {
    let f4 = i2.theme("screens", s5);
    for (let a of b2(f4 && Ce(f4) || i2.v(s5))) {
      var o3;
      l2.push(a), n3 |= f4 ? 67108864 | re(a) : s5 == "dark" ? 1073741824 : a[0] == "@" ? re(a) : (o3 = a, 1 << ~(/:([a-z-]+)/.test(o3) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: e3, p: n3, r: l2, i: t4 };
}
var pe = /* @__PURE__ */ new Map();
function ne2(e3) {
  if (e3.d) {
    let t4 = [], r = H3(e3.r.reduce((i2, n3) => n3[0] == "@" ? (t4.push(n3), i2) : n3 ? H3(i2, (l2) => H3(n3, (o3) => {
      let s5 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o3);
      if (s5) {
        let f4 = l2.indexOf(s5[1]);
        return ~f4 ? l2.slice(0, f4) + s5[0] + l2.slice(f4 + s5[1].length) : Q3(l2, o3);
      }
      return Q3(o3, l2);
    })) : i2, "&"), (i2) => Q3(i2, e3.n ? "." + Y3(e3.n) : ""));
    return r && t4.push(r.replace(/:merge\((.+?)\)/g, "$1")), t4.reduceRight((i2, n3) => n3 + "{" + i2 + "}", e3.d);
  }
}
function H3(e3, t4) {
  return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, i2, n3) => t4(i2) + n3);
}
function Q3(e3, t4) {
  return e3.replace(/&/g, t4);
}
var $e = new Intl.Collator("en", { numeric: !0 });
function Me(e3, t4) {
  for (var r = 0, i2 = e3.length; r < i2; ) {
    let n3 = i2 + r >> 1;
    0 >= Ne(e3[n3], t4) ? r = n3 + 1 : i2 = n3;
  }
  return i2;
}
function Ne(e3, t4) {
  let r = e3.p & S3.o;
  return r == (t4.p & S3.o) && (r == S3.b || r == S3.o) ? 0 : e3.p - t4.p || e3.o - t4.o || $e.compare(we(e3.n), we(t4.n)) || $e.compare(Ae(e3.n), Ae(t4.n));
}
function we(e3) {
  return (e3 || "").split(/:/).pop().split("/").pop() || "\0";
}
function Ae(e3) {
  return (e3 || "").replace(/\W/g, (t4) => String.fromCharCode(127 + t4.charCodeAt(0))) + "\0";
}
function X4(e3, t4) {
  return Math.round(parseInt(e3, 16) * t4);
}
function P3(e3, t4 = {}) {
  if (typeof e3 == "function")
    return e3(t4);
  let { opacityValue: r = "1", opacityVariable: i2 } = t4, n3 = i2 ? `var(${i2})` : r;
  if (e3.includes("<alpha-value>"))
    return e3.replace("<alpha-value>", n3);
  if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
    let l2 = (e3.length - 1) / 3, o3 = [17, 1, 0.062272][l2 - 1];
    return `rgba(${[X4(e3.substr(1, l2), o3), X4(e3.substr(1 + l2, l2), o3), X4(e3.substr(1 + 2 * l2, l2), o3), n3]})`;
  }
  return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
}
function de(e3, t4, r, i2, n3 = []) {
  return function l2(o3, { n: s5, p: f4, r: a = [], i: c4 }, u3) {
    let p4 = [], g5 = "", y3 = 0, $5 = 0;
    for (let h3 in o3 || {}) {
      var A4, R6;
      let d4 = o3[h3];
      if (h3[0] == "@") {
        if (!d4)
          continue;
        if (h3[1] == "a") {
          p4.push(...ge(s5, f4, I3("" + d4), u3, f4, a, c4, !0));
          continue;
        }
        if (h3[1] == "l") {
          for (let w4 of b2(d4))
            p4.push(...l2(w4, { n: s5, p: (A4 = S3[h3[7]], f4 & ~S3.o | A4), r: h3[7] == "d" ? [] : a, i: c4 }, u3));
          continue;
        }
        if (h3[1] == "i") {
          p4.push(...b2(d4).map((w4) => ({ p: -1, o: 0, r: [], d: h3 + " " + w4 })));
          continue;
        }
        if (h3[1] == "k") {
          p4.push({ p: S3.d, o: 0, r: [h3], d: l2(d4, { p: S3.d }, u3).map(ne2).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p4.push(...b2(d4).map((w4) => ({ p: S3.d, o: 0, r: [h3], d: l2(w4, { p: S3.d }, u3).map(ne2).join("") })));
          continue;
        }
      }
      if (typeof d4 != "object" || Array.isArray(d4))
        h3 == "label" && d4 ? s5 = d4 + T3(JSON.stringify([f4, c4, o3])) : (d4 || d4 === 0) && (h3 = h3.replace(/[A-Z]/g, (w4) => "-" + w4.toLowerCase()), $5 += 1, y3 = Math.max(y3, (R6 = h3)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g5 += (g5 ? ";" : "") + b2(d4).map((w4) => u3.s(h3, he("" + w4, u3.theme) + (c4 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let w4 = f4;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (j5, M5) => {
          let N7 = u3.theme("screens", M5);
          return N7 ? (w4 |= 67108864, Ce(N7, "")) : j5;
        }), w4 |= re(h3)), p4.push(...l2(d4, { n: s5, p: w4, r: [...a, h3], i: c4 }, u3));
      } else
        p4.push(...l2(d4, { p: f4, r: [...a, h3] }, u3));
    }
    return p4.unshift({ n: s5, p: f4, o: Math.max(0, 15 - $5) + 1.5 * Math.min(y3 || 15, 15), r: a, d: g5 }), p4.sort(Ne);
  }(e3, ce3(t4, r, i2, n3), r);
}
function he(e3, t4) {
  return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, i2, n3, l2, o3 = "") => {
    let s5 = t4(n3, o3);
    return typeof s5 == "function" && /color|fill|stroke/i.test(n3) ? P3(s5) : "" + b2(s5).filter((f4) => Object(f4) !== f4);
  });
}
function ye(e3, t4) {
  let r, i2 = [];
  for (let n3 of e3)
    n3.d && n3.n ? r?.p == n3.p && "" + r.r == "" + n3.r ? (r.c = [r.c, n3.c].filter(Boolean).join(" "), r.d = r.d + ";" + n3.d) : i2.push(r = { ...n3, n: n3.n && t4 }) : i2.push({ ...n3, n: n3.n && t4 });
  return i2;
}
function W3(e3, t4, r = S3.u, i2, n3) {
  let l2 = [];
  for (let o3 of e3)
    for (let s5 of function(f4, a, c4, u3, p4) {
      f4 = { ...f4, i: f4.i || p4 };
      let g5 = function(y3, $5) {
        let A4 = pe.get(y3.n);
        return A4 ? A4(y3, $5) : $5.r(y3.n, y3.v[0] == "dark");
      }(f4, a);
      return g5 ? typeof g5 == "string" ? ({ r: u3, p: c4 } = ce3(f4, a, c4, u3), ye(W3(I3(g5), a, c4, u3, f4.i), f4.n)) : Array.isArray(g5) ? g5.map((y3) => {
        var $5, A4;
        return { o: 0, ...y3, r: [...b2(u3), ...b2(y3.r)], p: ($5 = c4, A4 = y3.p ?? c4, $5 & ~S3.o | A4) };
      }) : de(g5, f4, a, c4, u3) : [{ c: ae2(f4), p: 0, o: 0, r: [] }];
    }(o3, t4, r, i2, n3))
      l2.splice(Me(l2, s5), 0, s5);
  return l2;
}
function ge(e3, t4, r, i2, n3, l2, o3, s5) {
  return ye((s5 ? r.flatMap((f4) => W3([f4], i2, n3, l2, o3)) : W3(r, i2, n3, l2, o3)).map((f4) => f4.p & S3.o && (f4.n || t4 == S3.b) ? { ...f4, p: f4.p & ~S3.o | t4, o: 0 } : f4), e3);
}
function _e2(e3, t4, r, i2) {
  var n3;
  return n3 = (l2, o3) => {
    let { n: s5, p: f4, r: a, i: c4 } = ce3(l2, o3, t4);
    return r && ge(s5, t4, r, o3, f4, a, c4, i2);
  }, pe.set(e3, n3), e3;
}
function K3(e3, t4, r) {
  if (e3[e3.length - 1] != "(") {
    let i2 = [], n3 = !1, l2 = !1, o3 = "";
    for (let s5 of e3)
      if (!(s5 == "(" || /[~@]$/.test(s5))) {
        if (s5[0] == "!" && (s5 = s5.slice(1), n3 = !n3), s5.endsWith(":")) {
          i2[s5 == "dark:" ? "unshift" : "push"](s5.slice(0, -1));
          continue;
        }
        s5[0] == "-" && (s5 = s5.slice(1), l2 = !l2), s5.endsWith("-") && (s5 = s5.slice(0, -1)), s5 && s5 != "&" && (o3 += (o3 && "-") + s5);
      }
    o3 && (l2 && (o3 = "-" + o3), t4[0].push({ n: o3, v: i2.filter(Be), i: n3 }));
  }
}
function Be(e3, t4, r) {
  return r.indexOf(e3) == t4;
}
var Se = /* @__PURE__ */ new Map();
function I3(e3) {
  let t4 = Se.get(e3);
  if (!t4) {
    let r = [], i2 = [[]], n3 = 0, l2 = 0, o3 = null, s5 = 0, f4 = (a, c4 = 0) => {
      n3 != s5 && (r.push(e3.slice(n3, s5 + c4)), a && K3(r, i2)), n3 = s5 + 1;
    };
    for (; s5 < e3.length; s5++) {
      let a = e3[s5];
      if (l2)
        e3[s5 - 1] != "\\" && (l2 += +(a == "[") || -(a == "]"));
      else if (a == "[")
        l2 += 1;
      else if (o3)
        e3[s5 - 1] != "\\" && o3.test(e3.slice(s5)) && (o3 = null, n3 = s5 + RegExp.lastMatch.length);
      else if (a == "/" && e3[s5 - 1] != "\\" && (e3[s5 + 1] == "*" || e3[s5 + 1] == "/"))
        o3 = e3[s5 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (a == "(")
        f4(), r.push(a);
      else if (a == ":")
        e3[s5 + 1] != ":" && f4(!1, 1);
      else if (/[\s,)]/.test(a)) {
        f4(!0);
        let c4 = r.lastIndexOf("(");
        if (a == ")") {
          let u3 = r[c4 - 1];
          if (/[~@]$/.test(u3)) {
            let p4 = i2.shift();
            r.length = c4, K3([...r, "#"], i2);
            let { v: g5 } = i2[0].pop();
            for (let y3 of p4)
              y3.v.splice(+(y3.v[0] == "dark") - +(g5[0] == "dark"), g5.length);
            K3([...r, _e2(u3.length > 1 ? u3.slice(0, -1) + T3(JSON.stringify([u3, p4])) : u3 + "(" + ue2(p4) + ")", S3.a, p4, /@$/.test(u3))], i2);
          }
          c4 = r.lastIndexOf("(", c4 - 1);
        }
        r.length = c4 + 1;
      } else
        /[~@]/.test(a) && e3[s5 + 1] == "(" && i2.unshift([]);
    }
    f4(!0), Se.set(e3, t4 = i2[0]);
  }
  return t4;
}
function Ve(e3, t4, r) {
  return t4.reduce((i2, n3, l2) => i2 + r(n3) + e3[l2 + 1], e3[0]);
}
function Z3(e3, t4) {
  return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve(e3, t4, (r) => ee(r).trim()) : t4.filter(Boolean).reduce((r, i2) => r + ee(i2), e3 ? ee(e3) : "");
}
function ee(e3) {
  let t4, r = "";
  if (e3 && typeof e3 == "object")
    if (Array.isArray(e3))
      (t4 = Z3(e3[0], e3.slice(1))) && (r += " " + t4);
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
    return t4("", i2, n3);
  }, { get(r, i2) {
    return i2 in r ? r[i2] : function(l2, ...o3) {
      return t4(i2, l2, o3);
    };
  } });
  function t4(r, i2, n3) {
    return ue2(I3(r + e3 + "(" + Z3(i2, n3) + ")"));
  }
}
function G4(e3, t4) {
  return Array.isArray(e3) ? ve(Ve(e3, t4, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof e3 == "string" ? ve(e3) : [e3];
}
var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function ve(e3) {
  let t4;
  e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], i2 = [r[0]], n3 = [];
  for (; t4 = We.exec(e3); )
    t4[4] && (r.shift(), n3.shift()), t4[3] ? (n3.unshift(t4[3]), r.unshift({}), i2.push(n3.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))) : t4[4] || (r[0][t4[1]] && (r.unshift({}), i2.push(n3.reduce((l2, o3) => ({ [o3]: l2 }), r[0]))), r[0][t4[1]] = t4[2]);
  return i2;
}
function me(e3, ...t4) {
  var r;
  let i2 = G4(e3, t4), n3 = (i2.find((l2) => l2.label)?.label || "css") + T3(JSON.stringify(i2));
  return r = (l2, o3) => ye(i2.flatMap((s5) => de(s5, l2, o3, S3.o)), n3), pe.set(n3, r), n3;
}
var ht2 = new Proxy(function(e3, t4) {
  return Re("animation", e3, t4);
}, { get(e3, t4) {
  return t4 in e3 ? e3[t4] : function(i2, n3) {
    return Re(t4, i2, n3);
  };
} });
function Re(e3, t4, r) {
  return { toString() {
    return me({ label: e3, "@layer components": { ...typeof t4 == "object" ? t4 : { animation: t4 }, animationName: "" + r } });
  } };
}
function yt2(e3, t4, r) {
  return [e3, ie(t4, r)];
}
function ie(e3, t4) {
  return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r, i2) => ({ [e3]: t4 ? t4(r, i2) : le2(r, 1) }) : (r) => e3 || { [r[1]]: le2(r, 2) };
}
function le2(e3, t4, r = e3.slice(t4).find(Boolean) || e3.$$ || e3.input) {
  return e3.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function gt(e3, t4, r, i2) {
  return [e3, Ge(t4, r, i2)];
}
function Ge(e3, t4, r) {
  let i2 = typeof t4 == "string" ? (n3, l2) => ({ [t4]: r ? r(n3, l2) : n3._ }) : t4 || (({ 1: n3, _: l2 }, o3, s5) => ({ [n3 || s5]: l2 }));
  return (n3, l2) => {
    let o3 = ke(e3 || n3[1]), s5 = l2.theme(o3, n3.$$) ?? oe2(n3.$$, o3, l2);
    if (s5 != null)
      return n3._ = le2(n3, 0, s5), i2(n3, l2, o3);
  };
}
function mt2(e3, t4 = {}, r) {
  return [e3, Ye(t4, r)];
}
function Ye(e3 = {}, t4) {
  return (r, i2) => {
    let { section: n3 = ke(r[0]).replace("-", "") + "Color" } = e3, [l2, o3] = Ze(r.$$);
    if (!l2)
      return;
    let s5 = i2.theme(n3, l2) || oe2(l2, n3, i2);
    if (!s5 || typeof s5 == "object")
      return;
    let { opacityVariable: f4 = `--tw-${r[0].replace(/-$/, "")}-opacity`, opacitySection: a = n3.replace("Color", "Opacity"), property: c4 = n3, selector: u3 } = e3, p4 = i2.theme(a, o3 || "DEFAULT") || o3 && oe2(o3, a, i2), g5 = t4 || (({ _: $5 }) => {
      let A4 = He(c4, $5);
      return u3 ? { [u3]: A4 } : A4;
    });
    r._ = { value: P3(s5, { opacityVariable: f4 || void 0, opacityValue: p4 || void 0 }), color: ($5) => P3(s5, $5), opacityVariable: f4 || void 0, opacityValue: p4 || void 0 };
    let y3 = g5(r, i2);
    if (!r.dark) {
      let $5 = i2.d(n3, l2, s5);
      $5 && $5 !== s5 && (r._ = { value: P3($5, { opacityVariable: f4 || void 0, opacityValue: p4 || "1" }), color: (A4) => P3($5, A4), opacityVariable: f4 || void 0, opacityValue: p4 || void 0 }, y3 = { "&": y3, [i2.v("dark")]: g5(r, i2) });
    }
    return y3;
  };
}
function Ze(e3) {
  return (e3.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function He(e3, t4) {
  let r = {};
  return typeof t4 == "string" ? r[e3] = t4 : (t4.opacityVariable && t4.value.includes(t4.opacityVariable) && (r[t4.opacityVariable] = t4.opacityValue || "1"), r[e3] = t4.value), r;
}
function oe2(e3, t4, r) {
  if (e3[0] == "[" && e3.slice(-1) == "]") {
    if (e3 = se2(he(e3.slice(1, -1), r.theme)), !t4)
      return e3;
    if (!(/color|fill|stroke/i.test(t4) && !(/^color:/.test(e3) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e3)) || /image/i.test(t4) && !(/^image:/.test(e3) || /^[a-z-]+\(/.test(e3)) || /weight/i.test(t4) && !(/^(number|any):/.test(e3) || /^\d+$/.test(e3)) || /position/i.test(t4) && /^(length|size):/.test(e3)))
      return e3.replace(/^[a-z-]+:/, "");
  }
}
function ke(e3) {
  return e3.replace(/-./g, (t4) => t4[1].toUpperCase());
}
function se2(e3) {
  return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t4, r = "", i2, n3 = "") => se2(r) + i2 + se2(n3)) : e3.replace(/(^|[^\\])_+/g, (t4, r) => r + " ".repeat(t4.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t4) => t4.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
}
var Qe = Symbol();
var D4 = new Proxy(F4, { apply(e3, t4, r) {
  return B3(r[0]);
}, get(e3, t4) {
  let r = B3[t4];
  return typeof r == "function" ? function() {
    return r.apply(B3, arguments);
  } : r;
} });
var Rt = function e2(t4) {
  return new Proxy(function(i2, ...n3) {
    return xe2(t4, "", i2, n3);
  }, { get(r, i2) {
    return i2 === "bind" ? e2 : i2 in r ? r[i2] : function(l2, ...o3) {
      return xe2(t4, i2, l2, o3);
    };
  } });
}();
function xe2(e3, t4, r, i2) {
  return { toString() {
    let n3 = G4(r, i2), l2 = Y3(t4 + T3(JSON.stringify([t4, n3])));
    return (typeof e3 == "function" ? e3 : D4)(me({ [`@keyframes ${l2}`]: G4(r, i2) })), l2;
  } };
}

// https://esm.sh/v107/@twind/preset-tailwind@1.0.1/deno/preset-tailwind.js
var L3 = "inherit", U4 = "currentColor", j2 = "transparent", V4 = "#000", B4 = "#fff", H4 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, I4 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, M2 = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, P4 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, N4 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, G5 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, q4 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, Y4 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, X5 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, J2 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, K4 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, Q4 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, Z4 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, ee2 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, te = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, oe3 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, re2 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, ae3 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, ie2 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, ne3 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, le3 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, se3 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, S4 = { __proto__: null, inherit: L3, current: U4, transparent: j2, black: V4, white: B4, slate: H4, gray: I4, zinc: M2, neutral: P4, stone: N4, red: G5, orange: q4, amber: Y4, yellow: X5, lime: J2, green: K4, emerald: Q4, teal: Z4, cyan: ee2, sky: te, blue: oe3, indigo: re2, violet: ae3, purple: ie2, fuchsia: ne3, pink: le3, rose: se3 }, h2 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: S4, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...c2(4, "rem", 4, 0.5, 0.5), ...c2(12, "rem", 4, 5), 14: "3.5rem", ...c2(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: n2("blur"), backdropBrightness: n2("brightness"), backdropContrast: n2("contrast"), backdropGrayscale: n2("grayscale"), backdropHueRotate: n2("hueRotate"), backdropInvert: n2("invert"), backdropOpacity: n2("opacity"), backdropSaturate: n2("saturate"), backdropSepia: n2("sepia"), backgroundColor: n2("colors"), backgroundImage: { none: "none" }, backgroundOpacity: n2("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...c2(200, "", 100, 0, 50), ...c2(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: n2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: n2("spacing"), borderWidth: { DEFAULT: "1px", ...f(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: n2("colors"), caretColor: n2("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...c2(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: n2("borderColor"), divideOpacity: n2("borderOpacity"), divideWidth: n2("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: n2("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...x2(2, 6), ...x2(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: n2("spacing"), gradientColorStops: n2("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...x2(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...x2(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...c2(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: r }) => ({ ...r(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...c2(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: n2("spacing"), placeholderColor: n2("colors"), placeholderOpacity: n2("opacity"), outlineColor: n2("colors"), outlineOffset: f(8, "px"), outlineWidth: f(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: n2("colors"), ringOffsetWidth: f(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...f(8, "px") }, rotate: { ...f(2, "deg"), ...f(12, "deg", 3), ...f(180, "deg", 45) }, saturate: c2(200, "", 100, 0, 50), scale: { ...c2(150, "", 100, 0, 50), ...c2(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: n2("spacing"), scrollPadding: n2("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...f(2, "deg"), ...f(12, "deg", 3) }, space: n2("spacing"), stroke: n2("colors"), strokeWidth: c2(2), textColor: n2("colors"), textDecorationColor: n2("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...f(8, "px") }, textUnderlineOffset: { auto: "auto", ...f(8, "px") }, textIndent: n2("spacing"), textOpacity: n2("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: n2("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...x2(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...c2(50, "", 1, 0, 10), auto: "auto" } };
function x2(e3, r) {
  let a = {};
  do
    for (var i2 = 1; i2 < e3; i2++)
      a[`${i2}/${e3}`] = Number((i2 / e3 * 100).toFixed(6)) + "%";
  while (++e3 <= r);
  return a;
}
function f(e3, r, a = 0) {
  let i2 = {};
  for (; a <= e3; a = 2 * a || 1)
    i2[a] = a + r;
  return i2;
}
function c2(e3, r = "", a = 1, i2 = 0, l2 = 1, d4 = {}) {
  for (; i2 <= e3; i2 += l2)
    d4[i2] = i2 / a + r;
  return d4;
}
function n2(e3) {
  return ({ theme: r }) => r(e3);
}
var C3 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${h2.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${h2.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } }, O2 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: e3, 2: r }, a) => ({ "@layer overrides": { "&": { [e3]: oe2(`[${r}]`, e3, a) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: e3 }, { h: r }) => [{ c: r(e3) }]), gt("aspect-", "aspectRatio"), yt2("container", (e3, { theme: r }) => {
  let { screens: a = r("screens"), center: i2, padding: l2 } = r("container"), d4 = { width: "100%", marginRight: i2 && "auto", marginLeft: i2 && "auto", ...m3("xs") };
  for (let w4 in a) {
    let b4 = a[w4];
    typeof b4 == "string" && (d4[Ce(b4)] = { "&": { maxWidth: b4, ...m3(w4) } });
  }
  return d4;
  function m3(w4) {
    let b4 = l2 && (typeof l2 == "string" ? l2 : l2[w4] || l2.DEFAULT);
    if (b4)
      return { paddingRight: b4, paddingLeft: b4 };
  }
}), gt("content-", "content", ({ _: e3 }) => ({ "--tw-content": e3, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: e3 }) => e3 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", y2), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: e3 = "", 2: r }) => ({ ["overscroll-behavior" + e3]: r })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: e3, _: r }) => ({ top: e3 != "-x" && r, right: e3 != "-y" && r, bottom: e3 != "-x" && r, left: e3 != "-y" && r })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", F5), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", D5), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", W4), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", D5), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", W4), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (e3) => y2(F5(e3))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", T4), yt2("(content|items|self)-", (e3) => ({ ["align-" + e3[1]]: T4(e3) })), yt2("(place-(content|items|self))-", ({ 1: e3, $$: r }) => ({ [e3]: ("wun".includes(r[3]) ? "space-" : "") + r })), gt("p([xytrbl])?(?:$|-)", "padding", u("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", u("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: e3, _: r }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[e3]]: `calc(${r} * calc(1 - var(--tw-space-${e3}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[e3]]: `calc(${r} * var(--tw-space-${e3}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", p2), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: e3, 2: r = "", 3: a }) => r == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a ? "numeric-fraction" : "pt".includes(r[0]) ? "numeric-spacing" : r ? "numeric-figure" : e3)]: e3, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: e3 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": e3 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: e3 }) => typeof e3 == "string" ? { fontSize: e3 } : { fontSize: e3[0], ...typeof e3[1] == "string" ? { lineHeight: e3[1] } : e3[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: !1, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: !1, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: e3 }) => `linear-gradient(to ${g2(e3, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-from": e3.value, "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${e3.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: e3 }) => e3 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: e3 }) => e3 + (e3 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", y2), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: e3, _: r }) => {
  let a = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[e3] || [e3, e3];
  return { [`border-${g2(a[0])}-radius`]: r, [`border-${g2(a[1])}-radius`]: r };
}), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: e3, _: r }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (e3 || "-x")]: r, ["--tw-border-spacing" + (e3 || "-y")]: r, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, u("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", u("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": e3 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: e3 } })), yt2("divide-([xy]-reverse)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + e3]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: e3, _: r }) => {
  let a = { x: "lr", y: "tb" }[e3];
  return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${e3}-reverse`]: "0", [`border-${g2(a[0])}Width`]: `calc(${r} * calc(1 - var(--tw-divide-${e3}-reverse)))`, [`border-${g2(a[1])}Width`]: `calc(${r} * var(--tw-divide-${e3}-reverse))` } };
}), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: !1 }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: e3 }, { theme: r }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P3(r("ringOffsetColor", "", "#fff")), "--tw-ring-color": P3(r("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-shadow-color": e3.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: e3 }) => ({ "--tw-shadow": p2(e3), "--tw-shadow-colored": p2(e3).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...A2(), ...A2("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (e3, { theme: r }) => ({ transitionProperty: p2(e3), transitionTimingFunction: e3._ == "none" ? void 0 : p2(r("transitionTimingFunction", "")), transitionDuration: e3._ == "none" ? void 0 : p2(r("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", p2), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", p2), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", p2), gt("animate(?:$|-)", "animation", (e3, { theme: r, h: a }) => {
  let i2 = p2(e3), l2 = i2.split(" "), d4 = r("keyframes", l2[0]);
  return d4 ? { ["@keyframes " + (l2[0] = a(l2[0]))]: d4, animation: l2.join(" ") } : { animation: i2 };
}), "(transform)-(none)", yt2("transform", $3), yt2("transform-(cpu|gpu)", ({ 1: e3 }) => ({ "--tw-transform": E(e3 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: e3, _: r }) => ({ ["--tw-scale" + (e3 || "-x")]: r, ["--tw-scale" + (e3 || "-y")]: r, ...$3() })), gt("-?(rotate)-", "rotate", k2), gt("-?(translate-[xy])-", "translate", k2), gt("-?(skew-[xy])-", "skew", k2), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", y2), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: e3 }) => ({ "scroll-snap-type": e3 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", u("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", u("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: e3, 2: r, 3: a }) => ({ [`--tw-${r ? "pan-x" : a ? "pan-y" : e3}`]: e3, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: !1, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: e3 }) => ({ x: "horizontal", y: "vertical" })[e3] || e3 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: !1, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: !1, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
function y2(e3) {
  return (typeof e3 == "string" ? e3 : e3[1]).replace(/-/g, " ").trim();
}
function F5(e3) {
  return (typeof e3 == "string" ? e3 : e3[1]).replace("col", "column");
}
function g2(e3, r = "-") {
  let a = [];
  for (let i2 of e3)
    a.push({ t: "top", r: "right", b: "bottom", l: "left" }[i2]);
  return a.join(r);
}
function p2(e3) {
  return e3 && "" + (e3._ || e3);
}
function T4({ $$: e3 }) {
  return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[e3[3] || ""] || "") + e3;
}
function u(e3, r = "") {
  return ({ 1: a, _: i2 }) => {
    let l2 = { x: "lr", y: "tb" }[a] || a + a;
    return l2 ? { ...He(e3 + "-" + g2(l2[0]) + r, i2), ...He(e3 + "-" + g2(l2[1]) + r, i2) } : He(e3 + r, i2);
  };
}
function A2(e3 = "") {
  let r = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", e3 && "opacity", "saturate", "sepia", !e3 && "drop-shadow"].filter(Boolean), a = {};
  for (let i2 of r)
    a[`--tw-${e3}${i2}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return a = { [`${e3}filter`]: r.map((i2) => `var(--tw-${e3}${i2})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a } }, [`(${e3}filter)-(none)`, yt2(`${e3}filter`, a), ...r.map((i2) => gt(`${i2[0] == "h" ? "-?" : ""}(${e3}${i2})(?:$|-)`, i2, ({ 1: l2, _: d4 }) => ({ [`--tw-${l2}`]: b2(d4).map((m3) => `${i2}(${m3})`).join(" "), ...a })))];
}
function k2({ 1: e3, _: r }) {
  return { ["--tw-" + e3]: r, ...$3() };
}
function $3() {
  return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": E() } } };
}
function E(e3) {
  return [e3 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
}
function W4({ 1: e3, 2: r }) {
  return `${e3} ${r} / ${e3} ${r}`;
}
function D5({ 1: e3 }) {
  return `repeat(${e3},minmax(0,1fr))`;
}

// https://esm.sh/v107/notie@4.3.1/deno/notie.js
var Oe = Object.create, ve2 = Object.defineProperty, Ae2 = Object.getOwnPropertyDescriptor, De = Object.getOwnPropertyNames, Ie = Object.getPrototypeOf, je = Object.prototype.hasOwnProperty, Ne2 = (v3, i2) => () => (i2 || v3((i2 = { exports: {} }).exports, i2), i2.exports), Pe = (v3, i2) => {
  for (var l2 in i2)
    ve2(v3, l2, { get: i2[l2], enumerable: !0 });
}, me2 = (v3, i2, l2, x4) => {
  if (i2 && typeof i2 == "object" || typeof i2 == "function")
    for (let b4 of De(i2))
      !je.call(v3, b4) && b4 !== l2 && ve2(v3, b4, { get: () => i2[b4], enumerable: !(x4 = Ae2(i2, b4)) || x4.enumerable });
  return v3;
}, X6 = (v3, i2, l2) => (me2(v3, i2, "default"), l2 && me2(l2, i2, "default")), ke2 = (v3, i2, l2) => (l2 = v3 != null ? Oe(Ie(v3)) : {}, me2(i2 || !v3 || !v3.__esModule ? ve2(l2, "default", { value: v3, enumerable: !0 }) : l2, v3)), xe3 = Ne2((oe4, be) => {
  (function(v3, i2) {
    typeof oe4 == "object" && typeof be == "object" ? be.exports = i2() : typeof define == "function" && define.amd ? define([], i2) : typeof oe4 == "object" ? oe4.notie = i2() : v3.notie = i2();
  })(oe4, function() {
    return function(v3) {
      function i2(x4) {
        if (l2[x4])
          return l2[x4].exports;
        var b4 = l2[x4] = { i: x4, l: !1, exports: {} };
        return v3[x4].call(b4.exports, b4, b4.exports, i2), b4.l = !0, b4.exports;
      }
      var l2 = {};
      return i2.m = v3, i2.c = l2, i2.i = function(x4) {
        return x4;
      }, i2.d = function(x4, b4, re4) {
        i2.o(x4, b4) || Object.defineProperty(x4, b4, { configurable: !1, enumerable: !0, get: re4 });
      }, i2.n = function(x4) {
        var b4 = x4 && x4.__esModule ? function() {
          return x4.default;
        } : function() {
          return x4;
        };
        return i2.d(b4, "a", b4), b4;
      }, i2.o = function(x4, b4) {
        return Object.prototype.hasOwnProperty.call(x4, b4);
      }, i2.p = "", i2(i2.s = 1);
    }([function(v3, i2) {
      v3.exports = function(l2) {
        return l2.webpackPolyfill || (l2.deprecate = function() {
        }, l2.paths = [], l2.children || (l2.children = []), Object.defineProperty(l2, "loaded", { enumerable: !0, get: function() {
          return l2.l;
        } }), Object.defineProperty(l2, "id", { enumerable: !0, get: function() {
          return l2.i;
        } }), l2.webpackPolyfill = 1), l2;
      };
    }, function(v3, i2, l2) {
      "use strict";
      (function(x4) {
        var b4, re4, de2, $5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A4) {
          return typeof A4;
        } : function(A4) {
          return A4 && typeof Symbol == "function" && A4.constructor === Symbol && A4 !== Symbol.prototype ? "symbol" : typeof A4;
        };
        (function(A4, p4) {
          $5(i2) === "object" && $5(x4) === "object" ? x4.exports = p4() : (re4 = [], b4 = p4, de2 = typeof b4 == "function" ? b4.apply(i2, re4) : b4, de2 !== void 0 && (x4.exports = de2));
        })(void 0, function() {
          return function(A4) {
            function p4(g5) {
              if (ee4[g5])
                return ee4[g5].exports;
              var T6 = ee4[g5] = { i: g5, l: !1, exports: {} };
              return A4[g5].call(T6.exports, T6, T6.exports, p4), T6.l = !0, T6.exports;
            }
            var ee4 = {};
            return p4.m = A4, p4.c = ee4, p4.i = function(g5) {
              return g5;
            }, p4.d = function(g5, T6, J4) {
              p4.o(g5, T6) || Object.defineProperty(g5, T6, { configurable: !1, enumerable: !0, get: J4 });
            }, p4.n = function(g5) {
              var T6 = g5 && g5.__esModule ? function() {
                return g5.default;
              } : function() {
                return g5;
              };
              return p4.d(T6, "a", T6), T6;
            }, p4.o = function(g5, T6) {
              return Object.prototype.hasOwnProperty.call(g5, T6);
            }, p4.p = "", p4(p4.s = 0);
          }([function(A4, p4, ee4) {
            function g5(t4, o3) {
              var s5 = {};
              for (var u3 in t4)
                o3.indexOf(u3) >= 0 || Object.prototype.hasOwnProperty.call(t4, u3) && (s5[u3] = t4[u3]);
              return s5;
            }
            Object.defineProperty(p4, "__esModule", { value: !0 });
            var T6 = typeof Symbol == "function" && $5(Symbol.iterator) === "symbol" ? function(t4) {
              return typeof t4 > "u" ? "undefined" : $5(t4);
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4 > "u" ? "undefined" : $5(t4);
            }, J4 = Object.assign || function(t4) {
              for (var o3 = 1; o3 < arguments.length; o3++) {
                var s5 = arguments[o3];
                for (var u3 in s5)
                  Object.prototype.hasOwnProperty.call(s5, u3) && (t4[u3] = s5[u3]);
              }
              return t4;
            }, R6 = { top: "top", bottom: "bottom" }, e3 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: R6.top, force: R6.top, confirm: R6.top, input: R6.top, select: R6.bottom, date: R6.top } }, Ee2 = p4.setOptions = function(t4) {
              e3 = J4({}, e3, t4, { classes: J4({}, e3.classes, t4.classes), ids: J4({}, e3.ids, t4.ids), positions: J4({}, e3.positions, t4.positions) });
            }, ye2 = function() {
              return new Promise(function(t4) {
                return setTimeout(t4, 0);
              });
            }, le4 = function(t4) {
              return new Promise(function(o3) {
                return setTimeout(o3, 1e3 * t4);
              });
            }, W6 = function() {
              document.activeElement && document.activeElement.blur();
            }, K5 = function() {
              var t4 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o3) {
                var s5 = 16 * Math.random() | 0, u3 = o3 === "x" ? s5 : 3 & s5 | 8;
                return u3.toString(16);
              });
              return "notie-" + t4;
            }, ue3 = { 1: e3.classes.backgroundSuccess, success: e3.classes.backgroundSuccess, 2: e3.classes.backgroundWarning, warning: e3.classes.backgroundWarning, 3: e3.classes.backgroundError, error: e3.classes.backgroundError, 4: e3.classes.backgroundInfo, info: e3.classes.backgroundInfo, 5: e3.classes.backgroundNeutral, neutral: e3.classes.backgroundNeutral }, Le = function() {
              return e3.transitionSelector + " " + e3.transitionDuration + "s " + e3.transitionCurve;
            }, te2 = function(t4) {
              return t4.keyCode === 13;
            }, ne4 = function(t4) {
              return t4.keyCode === 27;
            }, Z6 = function(t4, o3) {
              t4.classList.add(e3.classes.container), t4.style[o3] = "-10000px", document.body.appendChild(t4), t4.style[o3] = "-" + t4.offsetHeight + "px", t4.listener && window.addEventListener("keydown", t4.listener), ye2().then(function() {
                t4.style.transition = Le(), t4.style[o3] = 0;
              });
            }, O4 = function(t4, o3) {
              var s5 = document.getElementById(t4);
              s5 && (s5.style[o3] = "-" + s5.offsetHeight + "px", s5.listener && window.removeEventListener("keydown", s5.listener), le4(e3.transitionDuration).then(function() {
                s5.parentNode && s5.parentNode.removeChild(s5);
              }));
            }, se4 = function(t4, o3) {
              var s5 = document.createElement("div");
              s5.id = e3.ids.overlay, s5.classList.add(e3.classes.overlay), s5.classList.add(e3.classes.backgroundOverlay), s5.style.opacity = 0, t4 && e3.overlayClickDismiss && (s5.onclick = function() {
                O4(t4.id, o3), j5();
              }), document.body.appendChild(s5), ye2().then(function() {
                s5.style.transition = Le(), s5.style.opacity = e3.overlayOpacity;
              });
            }, j5 = function() {
              var t4 = document.getElementById(e3.ids.overlay);
              t4.style.opacity = 0, le4(e3.transitionDuration).then(function() {
                t4.parentNode && t4.parentNode.removeChild(t4);
              });
            }, F7 = p4.hideAlerts = function(t4) {
              var o3 = document.getElementsByClassName(e3.classes.alert);
              if (o3.length) {
                for (var s5 = 0; s5 < o3.length; s5++) {
                  var u3 = o3[s5];
                  O4(u3.id, u3.position);
                }
                t4 && le4(e3.transitionDuration).then(function() {
                  return t4();
                });
              }
            }, Te = p4.alert = function(t4) {
              var o3 = t4.type, s5 = o3 === void 0 ? 4 : o3, u3 = t4.text, c4 = t4.time, k4 = c4 === void 0 ? e3.alertTime : c4, H7 = t4.stay, S7 = H7 !== void 0 && H7, h3 = t4.position, f4 = h3 === void 0 ? e3.positions.alert || f4.top : h3;
              W6(), F7();
              var d4 = document.createElement("div"), m3 = K5();
              d4.id = m3, d4.position = f4, d4.classList.add(e3.classes.textbox), d4.classList.add(ue3[s5]), d4.classList.add(e3.classes.alert), d4.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + u3 + "</div>", d4.onclick = function() {
                return O4(m3, f4);
              }, d4.listener = function(n3) {
                (te2(n3) || ne4(n3)) && F7();
              }, Z6(d4, f4), k4 && k4 < 1 && (k4 = 1), !S7 && k4 && le4(k4).then(function() {
                return O4(m3, f4);
              });
            }, Me2 = p4.force = function(t4, o3) {
              var s5 = t4.type, u3 = s5 === void 0 ? 5 : s5, c4 = t4.text, k4 = t4.buttonText, H7 = k4 === void 0 ? "OK" : k4, S7 = t4.callback, h3 = t4.position, f4 = h3 === void 0 ? e3.positions.force || f4.top : h3;
              W6(), F7();
              var d4 = document.createElement("div"), m3 = K5();
              d4.id = m3;
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.textbox), n3.classList.add(e3.classes.backgroundInfo), n3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + c4 + "</div>";
              var r = document.createElement("div");
              r.classList.add(e3.classes.button), r.classList.add(ue3[u3]), r.innerHTML = H7, r.onclick = function() {
                O4(m3, f4), j5(), S7 ? S7() : o3 && o3();
              }, d4.appendChild(n3), d4.appendChild(r), d4.listener = function(C5) {
                te2(C5) && r.click();
              }, Z6(d4, f4), se4();
            }, He2 = p4.confirm = function(t4, o3, s5) {
              var u3 = t4.text, c4 = t4.submitText, k4 = c4 === void 0 ? "Yes" : c4, H7 = t4.cancelText, S7 = H7 === void 0 ? "Cancel" : H7, h3 = t4.submitCallback, f4 = t4.cancelCallback, d4 = t4.position, m3 = d4 === void 0 ? e3.positions.confirm || m3.top : d4;
              W6(), F7();
              var n3 = document.createElement("div"), r = K5();
              n3.id = r;
              var C5 = document.createElement("div");
              C5.classList.add(e3.classes.textbox), C5.classList.add(e3.classes.backgroundInfo), C5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + u3 + "</div>";
              var y3 = document.createElement("div");
              y3.classList.add(e3.classes.button), y3.classList.add(e3.classes.elementHalf), y3.classList.add(e3.classes.backgroundSuccess), y3.innerHTML = k4, y3.onclick = function() {
                O4(r, m3), j5(), h3 ? h3() : o3 && o3();
              };
              var a = document.createElement("div");
              a.classList.add(e3.classes.button), a.classList.add(e3.classes.elementHalf), a.classList.add(e3.classes.backgroundError), a.innerHTML = S7, a.onclick = function() {
                O4(r, m3), j5(), f4 ? f4() : s5 && s5();
              }, n3.appendChild(C5), n3.appendChild(y3), n3.appendChild(a), n3.listener = function(E3) {
                te2(E3) ? y3.click() : ne4(E3) && a.click();
              }, Z6(n3, m3), se4(n3, m3);
            }, ge2 = function(t4, o3, s5) {
              var u3 = t4.text, c4 = t4.submitText, k4 = c4 === void 0 ? "Submit" : c4, H7 = t4.cancelText, S7 = H7 === void 0 ? "Cancel" : H7, h3 = t4.submitCallback, f4 = t4.cancelCallback, d4 = t4.position, m3 = d4 === void 0 ? e3.positions.input || m3.top : d4, n3 = g5(t4, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
              W6(), F7();
              var r = document.createElement("div"), C5 = K5();
              r.id = C5;
              var y3 = document.createElement("div");
              y3.classList.add(e3.classes.textbox), y3.classList.add(e3.classes.backgroundInfo), y3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + u3 + "</div>";
              var a = document.createElement("input");
              a.classList.add(e3.classes.inputField), a.setAttribute("autocapitalize", n3.autocapitalize || "none"), a.setAttribute("autocomplete", n3.autocomplete || "off"), a.setAttribute("autocorrect", n3.autocorrect || "off"), a.setAttribute("autofocus", n3.autofocus || "true"), a.setAttribute("inputmode", n3.inputmode || "verbatim"), a.setAttribute("max", n3.max || ""), a.setAttribute("maxlength", n3.maxlength || ""), a.setAttribute("min", n3.min || ""), a.setAttribute("minlength", n3.minlength || ""), a.setAttribute("placeholder", n3.placeholder || ""), a.setAttribute("spellcheck", n3.spellcheck || "default"), a.setAttribute("step", n3.step || "any"), a.setAttribute("type", n3.type || "text"), a.value = n3.value || "", n3.allowed && (a.oninput = function() {
                var M5 = void 0;
                if (Array.isArray(n3.allowed)) {
                  for (var w4 = "", _3 = n3.allowed, P7 = 0; P7 < _3.length; P7++)
                    _3[P7] === "an" ? w4 += "0-9a-zA-Z" : _3[P7] === "a" ? w4 += "a-zA-Z" : _3[P7] === "n" && (w4 += "0-9"), _3[P7] === "s" && (w4 += " ");
                  M5 = new RegExp("[^" + w4 + "]", "g");
                } else
                  T6(n3.allowed) === "object" && (M5 = n3.allowed);
                a.value = a.value.replace(M5, "");
              });
              var E3 = document.createElement("div");
              E3.classList.add(e3.classes.button), E3.classList.add(e3.classes.elementHalf), E3.classList.add(e3.classes.backgroundSuccess), E3.innerHTML = k4, E3.onclick = function() {
                O4(C5, m3), j5(), h3 ? h3(a.value) : o3 && o3(a.value);
              };
              var D7 = document.createElement("div");
              D7.classList.add(e3.classes.button), D7.classList.add(e3.classes.elementHalf), D7.classList.add(e3.classes.backgroundError), D7.innerHTML = S7, D7.onclick = function() {
                O4(C5, m3), j5(), f4 ? f4(a.value) : s5 && s5(a.value);
              }, r.appendChild(y3), r.appendChild(a), r.appendChild(E3), r.appendChild(D7), r.listener = function(M5) {
                te2(M5) ? E3.click() : ne4(M5) && D7.click();
              }, Z6(r, m3), a.focus(), se4(r, m3);
            };
            p4.input = ge2;
            var Se2 = p4.select = function(t4, o3) {
              var s5 = t4.text, u3 = t4.cancelText, c4 = u3 === void 0 ? "Cancel" : u3, k4 = t4.cancelCallback, H7 = t4.choices, S7 = t4.position, h3 = S7 === void 0 ? e3.positions.select || h3.top : S7;
              W6(), F7();
              var f4 = document.createElement("div"), d4 = K5();
              f4.id = d4;
              var m3 = document.createElement("div");
              m3.classList.add(e3.classes.textbox), m3.classList.add(e3.classes.backgroundInfo), m3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + s5 + "</div>", f4.appendChild(m3), H7.forEach(function(r, C5) {
                var y3 = r.type, a = y3 === void 0 ? 1 : y3, E3 = r.text, D7 = r.handler, M5 = document.createElement("div");
                M5.classList.add(ue3[a]), M5.classList.add(e3.classes.button), M5.classList.add(e3.classes.selectChoice);
                var w4 = H7[C5 + 1];
                w4 && !w4.type && (w4.type = 1), w4 && w4.type === a && M5.classList.add(e3.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                  O4(d4, h3), j5(), D7();
                }, f4.appendChild(M5);
              });
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.backgroundNeutral), n3.classList.add(e3.classes.button), n3.innerHTML = c4, n3.onclick = function() {
                O4(d4, h3), j5(), k4 ? k4() : o3 && o3();
              }, f4.appendChild(n3), f4.listener = function(r) {
                ne4(r) && n3.click();
              }, Z6(f4, h3), se4(f4, h3);
            }, we2 = p4.date = function(t4, o3, s5) {
              var u3 = t4.value, c4 = u3 === void 0 ? /* @__PURE__ */ new Date() : u3, k4 = t4.submitText, H7 = k4 === void 0 ? "OK" : k4, S7 = t4.cancelText, h3 = S7 === void 0 ? "Cancel" : S7, f4 = t4.submitCallback, d4 = t4.cancelCallback, m3 = t4.position, n3 = m3 === void 0 ? e3.positions.date || n3.top : m3;
              W6(), F7();
              var r = "&#9662", C5 = document.createElement("div"), y3 = document.createElement("div"), a = document.createElement("div"), E3 = function(L7) {
                C5.innerHTML = e3.dateMonths[L7.getMonth()], y3.innerHTML = L7.getDate(), a.innerHTML = L7.getFullYear();
              }, D7 = function(L7) {
                var N7 = new Date(c4.getFullYear(), c4.getMonth() + 1, 0).getDate(), V6 = L7.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                Number(V6) > N7 && (V6 = N7.toString()), L7.target.textContent = V6, Number(V6) < 1 && (V6 = "1"), c4.setDate(Number(V6));
              }, M5 = function(L7) {
                var N7 = L7.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                L7.target.textContent = N7, c4.setFullYear(Number(N7));
              }, w4 = function(L7) {
                E3(c4);
              }, _3 = function(L7) {
                var N7 = new Date(c4.getFullYear(), c4.getMonth() + L7 + 1, 0).getDate();
                c4.getDate() > N7 && c4.setDate(N7), c4.setMonth(c4.getMonth() + L7), E3(c4);
              }, P7 = function(L7) {
                c4.setDate(c4.getDate() + L7), E3(c4);
              }, he2 = function(L7) {
                var N7 = c4.getFullYear() + L7;
                N7 < 0 ? c4.setFullYear(0) : c4.setFullYear(c4.getFullYear() + L7), E3(c4);
              }, Y6 = document.createElement("div"), pe2 = K5();
              Y6.id = pe2;
              var fe = document.createElement("div");
              fe.classList.add(e3.classes.backgroundInfo);
              var I6 = document.createElement("div");
              I6.classList.add(e3.classes.dateSelectorInner);
              var q6 = document.createElement("div");
              q6.classList.add(e3.classes.button), q6.classList.add(e3.classes.elementThird), q6.classList.add(e3.classes.dateSelectorUp), q6.innerHTML = r;
              var G8 = document.createElement("div");
              G8.classList.add(e3.classes.button), G8.classList.add(e3.classes.elementThird), G8.classList.add(e3.classes.dateSelectorUp), G8.innerHTML = r;
              var Q6 = document.createElement("div");
              Q6.classList.add(e3.classes.button), Q6.classList.add(e3.classes.elementThird), Q6.classList.add(e3.classes.dateSelectorUp), Q6.innerHTML = r, C5.classList.add(e3.classes.element), C5.classList.add(e3.classes.elementThird), C5.innerHTML = e3.dateMonths[c4.getMonth()], y3.classList.add(e3.classes.element), y3.classList.add(e3.classes.elementThird), y3.setAttribute("contentEditable", !0), y3.addEventListener("input", D7), y3.addEventListener("blur", w4), y3.innerHTML = c4.getDate(), a.classList.add(e3.classes.element), a.classList.add(e3.classes.elementThird), a.setAttribute("contentEditable", !0), a.addEventListener("input", M5), a.addEventListener("blur", w4), a.innerHTML = c4.getFullYear();
              var ae4 = document.createElement("div");
              ae4.classList.add(e3.classes.button), ae4.classList.add(e3.classes.elementThird), ae4.innerHTML = r;
              var ie4 = document.createElement("div");
              ie4.classList.add(e3.classes.button), ie4.classList.add(e3.classes.elementThird), ie4.innerHTML = r;
              var ce5 = document.createElement("div");
              ce5.classList.add(e3.classes.button), ce5.classList.add(e3.classes.elementThird), ce5.innerHTML = r, q6.onclick = function() {
                return _3(1);
              }, G8.onclick = function() {
                return P7(1);
              }, Q6.onclick = function() {
                return he2(1);
              }, ae4.onclick = function() {
                return _3(-1);
              }, ie4.onclick = function() {
                return P7(-1);
              }, ce5.onclick = function() {
                return he2(-1);
              };
              var z6 = document.createElement("div");
              z6.classList.add(e3.classes.button), z6.classList.add(e3.classes.elementHalf), z6.classList.add(e3.classes.backgroundSuccess), z6.innerHTML = H7, z6.onclick = function() {
                O4(pe2, n3), j5(), f4 ? f4(c4) : o3 && o3(c4);
              };
              var U6 = document.createElement("div");
              U6.classList.add(e3.classes.button), U6.classList.add(e3.classes.elementHalf), U6.classList.add(e3.classes.backgroundError), U6.innerHTML = h3, U6.onclick = function() {
                O4(pe2, n3), j5(), d4 ? d4(c4) : s5 && s5(c4);
              }, I6.appendChild(q6), I6.appendChild(G8), I6.appendChild(Q6), I6.appendChild(C5), I6.appendChild(y3), I6.appendChild(a), I6.appendChild(ae4), I6.appendChild(ie4), I6.appendChild(ce5), fe.appendChild(I6), Y6.appendChild(fe), Y6.appendChild(z6), Y6.appendChild(U6), Y6.listener = function(L7) {
                te2(L7) ? z6.click() : ne4(L7) && U6.click();
              }, Z6(Y6, n3), se4(Y6, n3);
            };
            p4.default = { alert: Te, force: Me2, confirm: He2, input: ge2, select: Se2, date: we2, setOptions: Ee2, hideAlerts: F7 };
          }]);
        });
      }).call(i2, l2(0)(v3));
    }]);
  });
}), B5 = {};
Pe(B5, { default: () => Ye2 });
var Fe = ke2(xe3());
X6(B5, ke2(xe3()));
var { default: Ce3, ..._e3 } = Fe, Ye2 = Ce3 !== void 0 ? Ce3 : _e3;

// https://esm.sh/v107/nanostores@0.7.4/deno/nanostores.js
var S5 = Symbol("clean");
var m2 = Symbol();

// https://esm.sh/v107/@nanostores/i18n@0.7.1/deno/i18n.js
function g3(r, n3) {
  if (typeof r == "string")
    return n3(r);
  {
    let e3 = {};
    for (let t4 in r)
      e3[t4] = g3(r[t4], n3);
    return e3;
  }
}
function p3(r) {
  return (n3) => {
    if (n3.transform) {
      let e3 = n3.transform;
      return n3 = n3.input, { input: n3, transform(t4, o3, s5) {
        let f4 = r(t4, o3, ...s5);
        return (...l2) => e3(t4, f4, l2);
      } };
    } else
      return { input: n3, transform(e3, t4, o3) {
        return r(e3, t4, ...o3);
      } };
  };
}
var N5 = p3((r, n3, e3) => g3(n3, (t4) => {
  for (let o3 in e3)
    t4 = t4.replace(new RegExp(`{${o3}}`, "g"), e3[o3]);
  return t4;
})), R3 = p3((r, n3, e3) => {
  let t4 = new Intl.PluralRules(r).select(e3);
  return t4 in n3 || (t4 = "many"), g3(n3[t4], (o3) => o3.replace(/{count}/g, e3));
});

// https://esm.sh/v107/hotkeys-js@3.10.1/deno/hotkeys-js.js
var M3 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function P5(e3, t4, i2, r) {
  e3.addEventListener ? e3.addEventListener(t4, i2, r) : e3.attachEvent && e3.attachEvent("on".concat(t4), function() {
    i2(window.event);
  });
}
function T5(e3, t4) {
  for (var i2 = t4.slice(0, t4.length - 1), r = 0; r < i2.length; r++)
    i2[r] = e3[i2[r].toLowerCase()];
  return i2;
}
function U5(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  for (var t4 = e3.split(","), i2 = t4.lastIndexOf(""); i2 >= 0; )
    t4[i2 - 1] += ",", t4.splice(i2, 1), i2 = t4.lastIndexOf("");
  return t4;
}
function G6(e3, t4) {
  for (var i2 = e3.length >= t4.length ? e3 : t4, r = e3.length >= t4.length ? t4 : e3, n3 = !0, a = 0; a < i2.length; a++)
    r.indexOf(i2[a]) === -1 && (n3 = !1);
  return n3;
}
var b3 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M3 ? 173 : 189, "=": M3 ? 61 : 187, ";": M3 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g4 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L4 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u2 = { 16: !1, 18: !1, 17: !1, 91: !1 }, s4 = {};
for (O3 = 1; O3 < 20; O3++)
  b3["f".concat(O3)] = 111 + O3;
var O3, f2 = [], A3 = !1, D6 = "all", H5 = [], C4 = function(t4) {
  return b3[t4.toLowerCase()] || g4[t4.toLowerCase()] || t4.toUpperCase().charCodeAt(0);
}, R4 = function(t4) {
  return Object.keys(b3).find(function(i2) {
    return b3[i2] === t4;
  });
}, V5 = function(t4) {
  return Object.keys(g4).find(function(i2) {
    return g4[i2] === t4;
  });
};
function F6(e3) {
  D6 = e3 || "all";
}
function E2() {
  return D6 || "all";
}
function X7() {
  return f2.slice(0);
}
function $4() {
  return f2.map(function(e3) {
    return R4(e3) || V5(e3) || String.fromCharCode(e3);
  });
}
function q5(e3) {
  var t4 = e3.target || e3.srcElement, i2 = t4.tagName, r = !0;
  return (t4.isContentEditable || (i2 === "INPUT" || i2 === "TEXTAREA" || i2 === "SELECT") && !t4.readOnly) && (r = !1), r;
}
function z4(e3) {
  return typeof e3 == "string" && (e3 = C4(e3)), f2.indexOf(e3) !== -1;
}
function J3(e3, t4) {
  var i2, r;
  e3 || (e3 = E2());
  for (var n3 in s4)
    if (Object.prototype.hasOwnProperty.call(s4, n3))
      for (i2 = s4[n3], r = 0; r < i2.length; )
        i2[r].scope === e3 ? i2.splice(r, 1) : r++;
  E2() === e3 && F6(t4 || "all");
}
function N6(e3) {
  var t4 = e3.keyCode || e3.which || e3.charCode, i2 = f2.indexOf(t4);
  if (i2 >= 0 && f2.splice(i2, 1), e3.key && e3.key.toLowerCase() === "meta" && f2.splice(0, f2.length), (t4 === 93 || t4 === 224) && (t4 = 91), t4 in u2) {
    u2[t4] = !1;
    for (var r in g4)
      g4[r] === t4 && (v2[r] = !1);
  }
}
function Q5(e3) {
  if (typeof e3 > "u")
    Object.keys(s4).forEach(function(o3) {
      return delete s4[o3];
    });
  else if (Array.isArray(e3))
    e3.forEach(function(o3) {
      o3.key && S6(o3);
    });
  else if (typeof e3 == "object")
    e3.key && S6(e3);
  else if (typeof e3 == "string") {
    for (var t4 = arguments.length, i2 = new Array(t4 > 1 ? t4 - 1 : 0), r = 1; r < t4; r++)
      i2[r - 1] = arguments[r];
    var n3 = i2[0], a = i2[1];
    typeof n3 == "function" && (a = n3, n3 = ""), S6({ key: e3, scope: n3, method: a, splitKey: "+" });
  }
}
var S6 = function(t4) {
  var i2 = t4.key, r = t4.scope, n3 = t4.method, a = t4.splitKey, o3 = a === void 0 ? "+" : a, l2 = U5(i2);
  l2.forEach(function(c4) {
    var p4 = c4.split(o3), m3 = p4.length, y3 = p4[m3 - 1], d4 = y3 === "*" ? "*" : C4(y3);
    if (s4[d4]) {
      r || (r = E2());
      var K5 = m3 > 1 ? T5(g4, p4) : [];
      s4[d4] = s4[d4].filter(function(h3) {
        var w4 = n3 ? h3.method === n3 : !0;
        return !(w4 && h3.scope === r && G6(h3.mods, K5));
      });
    }
  });
};
function _(e3, t4, i2, r) {
  if (t4.element === r) {
    var n3;
    if (t4.scope === i2 || t4.scope === "all") {
      n3 = t4.mods.length > 0;
      for (var a in u2)
        Object.prototype.hasOwnProperty.call(u2, a) && (!u2[a] && t4.mods.indexOf(+a) > -1 || u2[a] && t4.mods.indexOf(+a) === -1) && (n3 = !1);
      (t4.mods.length === 0 && !u2[16] && !u2[18] && !u2[17] && !u2[91] || n3 || t4.shortcut === "*") && t4.method(e3, t4) === !1 && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = !1, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = !0));
    }
  }
}
function k3(e3, t4) {
  var i2 = s4["*"], r = e3.keyCode || e3.which || e3.charCode;
  if (v2.filter.call(this, e3)) {
    if ((r === 93 || r === 224) && (r = 91), f2.indexOf(r) === -1 && r !== 229 && f2.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h3) {
      var w4 = L4[h3];
      e3[h3] && f2.indexOf(w4) === -1 ? f2.push(w4) : !e3[h3] && f2.indexOf(w4) > -1 ? f2.splice(f2.indexOf(w4), 1) : h3 === "metaKey" && e3[h3] && f2.length === 3 && (e3.ctrlKey || e3.shiftKey || e3.altKey || (f2 = f2.slice(f2.indexOf(w4))));
    }), r in u2) {
      u2[r] = !0;
      for (var n3 in g4)
        g4[n3] === r && (v2[n3] = !0);
      if (!i2)
        return;
    }
    for (var a in u2)
      Object.prototype.hasOwnProperty.call(u2, a) && (u2[a] = e3[L4[a]]);
    e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (f2.indexOf(17) === -1 && f2.push(17), f2.indexOf(18) === -1 && f2.push(18), u2[17] = !0, u2[18] = !0);
    var o3 = E2();
    if (i2)
      for (var l2 = 0; l2 < i2.length; l2++)
        i2[l2].scope === o3 && (e3.type === "keydown" && i2[l2].keydown || e3.type === "keyup" && i2[l2].keyup) && _(e3, i2[l2], o3, t4);
    if (r in s4) {
      for (var c4 = 0; c4 < s4[r].length; c4++)
        if ((e3.type === "keydown" && s4[r][c4].keydown || e3.type === "keyup" && s4[r][c4].keyup) && s4[r][c4].key) {
          for (var p4 = s4[r][c4], m3 = p4.splitKey, y3 = p4.key.split(m3), d4 = [], K5 = 0; K5 < y3.length; K5++)
            d4.push(C4(y3[K5]));
          d4.sort().join("") === f2.sort().join("") && _(e3, p4, o3, t4);
        }
    }
  }
}
function W5(e3) {
  return H5.indexOf(e3) > -1;
}
function v2(e3, t4, i2) {
  f2 = [];
  var r = U5(e3), n3 = [], a = "all", o3 = document, l2 = 0, c4 = !1, p4 = !0, m3 = "+", y3 = !1;
  for (i2 === void 0 && typeof t4 == "function" && (i2 = t4), Object.prototype.toString.call(t4) === "[object Object]" && (t4.scope && (a = t4.scope), t4.element && (o3 = t4.element), t4.keyup && (c4 = t4.keyup), t4.keydown !== void 0 && (p4 = t4.keydown), t4.capture !== void 0 && (y3 = t4.capture), typeof t4.splitKey == "string" && (m3 = t4.splitKey)), typeof t4 == "string" && (a = t4); l2 < r.length; l2++)
    e3 = r[l2].split(m3), n3 = [], e3.length > 1 && (n3 = T5(g4, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : C4(e3), e3 in s4 || (s4[e3] = []), s4[e3].push({ keyup: c4, keydown: p4, scope: a, mods: n3, shortcut: r[l2], method: i2, key: r[l2], splitKey: m3, element: o3 });
  typeof o3 < "u" && !W5(o3) && window && (H5.push(o3), P5(o3, "keydown", function(d4) {
    k3(d4, o3);
  }, y3), A3 || (A3 = !0, P5(window, "focus", function() {
    f2 = [];
  }, y3)), P5(o3, "keyup", function(d4) {
    k3(d4, o3), N6(d4);
  }, y3));
}
function Y5(e3) {
  var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(s4).forEach(function(i2) {
    var r = s4[i2].filter(function(n3) {
      return n3.scope === t4 && n3.shortcut === e3;
    });
    r.forEach(function(n3) {
      n3 && n3.method && n3.method();
    });
  });
}
var j3 = { getPressedKeyString: $4, setScope: F6, getScope: E2, deleteScope: J3, getPressedKeyCodes: X7, isPressed: z4, filter: q5, trigger: Y5, unbind: Q5, keyMap: b3, modifier: g4, modifierMap: L4 };
for (x3 in j3)
  Object.prototype.hasOwnProperty.call(j3, x3) && (v2[x3] = j3[x3]);
var x3;
typeof document < "u" && (B7 = window.hotkeys, v2.noConflict = function(e3) {
  return e3 && window.hotkeys === v2 && (window.hotkeys = B7), v2;
}, window.hotkeys = v2);
var B7;

// https://esm.sh/v107/immersive-translate@1.0.5/deno/immersive-translate.js
var R5 = "poegempjloogba", L5 = "ension://";
var I5 = "rome-ext";
var z5 = "ch" + I5 + L5 + "cofdb" + R5 + "gkncekinflcnj";
var f3 = "Immersive Translate", G7 = class {
  #e = performance.now();
  reset() {
    this.#e = performance.now();
  }
  stop(e3) {
    let t4 = performance.now(), n3 = Math.round(t4 - this.#e);
    console.debug(f3 + " TIMING:", e3, "in", n3 + "ms"), this.#e = t4;
  }
}, H6 = class {
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
    this.#e <= 0 && console.log(f3 + " DEBUG:", ...e3);
  }
  v(...e3) {
    this.#e <= 0 && console.log(f3 + " VERBOSE:", ...e3);
  }
  info(...e3) {
    this.#e <= 1 && console.log(f3 + " INFO:", ...e3);
  }
  l(...e3) {
    this.#e <= 1 && console.log(f3 + " TEMP INFO:", ...e3);
  }
  warn(...e3) {
    this.#e <= 2 && console.warn(f3 + " WARN:", ...e3);
  }
  error(...e3) {
    this.#e <= 3 && console.error(f3 + " ERROR:", ...e3);
  }
  fatal(...e3) {
    this.#e <= 4 && console.error(f3 + " FATAL:", ...e3);
  }
  timing() {
    return this.level === 0 ? new G7() : { reset: () => {
    }, stop: () => {
    } };
  }
}, _2 = new H6();

// deps.ts
var toast = Ye2.alert;

// log.ts
var Timing = class {
  #t = performance.now();
  reset() {
    this.#t = performance.now();
  }
  stop(message) {
    let now = performance.now(), d4 = Math.round(now - this.#t), cf = colors_exports.green;
    d4 > 1e4 ? cf = colors_exports.red : d4 > 1e3 && (cf = colors_exports.yellow), console.debug(
      colors_exports.dim(brandName + " TIMING:"),
      message,
      "in",
      cf(d4 + "ms")
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

// utils/get_pdf_viewer_url.ts
function formatToPdfViewerUrl(url) {
  let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl), pdfViewUrlObj = new URL(pdfViewerRuntimeUrl);
  return (url.startsWith("http") || !isFirefox()) && pdfViewUrlObj.searchParams.set(
    "file",
    url
  ), pdfViewUrlObj.href;
}

// utils/is_pdf_url.ts
function isPdfUrl(url) {
  return new URL(url)?.pathname.toLowerCase().endsWith(".pdf");
}

// errors.ts
var CommonError = class extends Error {
  constructor(name, message, details) {
    super(message);
    this.name = name, details && (this.details = details);
  }
};

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
    } catch (_e4) {
      log_default.error("parse response failed", _e4);
    }
    throw details && log_default.error("fail response", details), new CommonError(
      "fetchError",
      response.status + ": " + response.statusText || "",
      details
    );
  }
}

// utils/url_match.ts
var matchAll = ["*://*/*", "*", "*://*"], placeholder = "immersive-translate-wildcard-placeholder.com";
function getMatchedUrl(rawUrl, rawMatches) {
  let matches = [];
  if (!rawMatches || (rawMatches && !Array.isArray(rawMatches) ? matches = [rawMatches] : matches = rawMatches, matches.length === 0))
    return null;
  if (matches.some((m3) => matchAll.includes(m3)))
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

// sync/google_drive_api.ts
var GoogleDriveAPI = class {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }
  async listAll() {
    let result = [], pageToken = "";
    do {
      let { nextPageToken, files } = await this.list(pageToken).catch(
        (error) => {
          throw error;
        }
      );
      result.push(...files), pageToken = nextPageToken || "";
    } while (pageToken);
    return result;
  }
  async getConfig(id) {
    try {
      return await (await fetch(
        `https://www.googleapis.com/drive/v3/files/${id}?alt=media`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        }
      )).json();
    } catch (_e4) {
      return log_default.error("get config error, use default", _e4), {};
    }
  }
  async delete(id) {
    await fetch(`https://www.googleapis.com/drive/v3/files/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    });
  }
  findByName(fileName) {
    return this.list(void 0, `name = '${fileName}'`);
  }
  uploadConfig(settings, filename = LATEST_FILE_NAME) {
    let blob = new Blob([JSON.stringify(settings, null, 2)], {
      type: "application/json"
    });
    return this.upload(
      {
        name: filename,
        parents: ["appDataFolder"],
        mimeType: "application/json"
      },
      blob
    );
  }
  updateConfig(id, settings) {
    let blob = new Blob([JSON.stringify(settings, null, 2)], {
      type: "application/json"
    });
    return this.updateContent(id, blob);
  }
  async upload(metadata, blob) {
    let data = new FormData();
    data.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], {
        type: "application/json; charset=UTF-8"
      })
    ), data.append("file", blob);
    let res = await fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        },
        body: data
      }
    );
    return res.ok ? await res.json() : Promise.reject(res.text());
  }
  async list(pageToken, query) {
    let url = new URL("https://www.googleapis.com/drive/v3/files");
    pageToken && url.searchParams.append("pageToken", pageToken), query && url.searchParams.append("q", query), url.searchParams.append("spaces", "appDataFolder"), url.searchParams.append(
      "fields",
      "files(id,name,createdTime,modifiedTime,size)"
    ), url.searchParams.append("pageSize", "100"), url.searchParams.append("orderBy", "createdTime desc");
    try {
      return log_default.debug("list api:", url.toString(), this.accessToken), await (await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      })).json();
    } catch (e3) {
      throw log_default.error("fetch google ip error", e3), e3;
    }
  }
  async updateContent(id, blob) {
    return await (await fetch(
      `https://www.googleapis.com/upload/drive/v3/files/${id}?uploadType=media`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        },
        body: blob
      }
    )).text();
  }
};

// sync/util.ts
function getAuthUrl(state, redirect_url) {
  let SCOPES = ["https://www.googleapis.com/auth/drive.appdata"];
  return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(redirect_url)}&scope=${encodeURIComponent(SCOPES.join(" "))}&state=${encodeURIComponent(JSON.stringify(state))}`;
}
function extractAccessToken(redirectUri) {
  let m3 = redirectUri.match(/[#?](.*)/);
  return !m3 || m3.length < 1 ? null : {
    access_token: new URLSearchParams(m3[1].split("#")[0]).get("access_token")
  };
}
async function autoSyncStrategy(accessToken, settings, handleChangeValue, handleUpdateLocalConfigLastSyncedAt, handleUpdateSettingUpdateAt, handleSuccess, handleFail) {
  log_default.debug(`autoSyncStrategy accessToken: ${accessToken}`);
  let api = new GoogleDriveAPI(accessToken);
  try {
    let files = (await api.findByName(LATEST_FILE_NAME)).files;
    log_default.debug("files", files);
    let latestFileId = files[0]?.id, latestRemoteConfigResult = null;
    if (latestFileId && (latestRemoteConfigResult = await api.getConfig(latestFileId).then((config) => ({
      fileId: latestFileId,
      config
    }))), latestRemoteConfigResult) {
      let { config: latestRemoteConfig, fileId } = latestRemoteConfigResult, remoteUpdatedAt = latestRemoteConfig.updatedAt ? new Date(latestRemoteConfig.updatedAt) : /* @__PURE__ */ new Date(0), localUpdatedAt = settings.updatedAt ? new Date(settings.updatedAt) : /* @__PURE__ */ new Date(0);
      if (log_default.debug(
        "remoteUpdatedAt",
        remoteUpdatedAt,
        "localUpdatedAt",
        localUpdatedAt
      ), remoteUpdatedAt > localUpdatedAt)
        log_default.debug("remote is newer, update local config", latestRemoteConfig), handleChangeValue(latestRemoteConfig), handleSuccess && handleSuccess(!0);
      else if (remoteUpdatedAt.getTime() === localUpdatedAt.getTime())
        log_default.debug("remote and local are the same, do nothing"), handleSuccess && handleSuccess(!1);
      else if (remoteUpdatedAt < localUpdatedAt)
        log_default.debug("local is newer, update remote config", settings), await api.updateConfig(fileId, settings), handleSuccess && handleSuccess(!0);
      else {
        handleFail && handleFail(": unknown error");
        return;
      }
      handleUpdateLocalConfigLastSyncedAt((/* @__PURE__ */ new Date()).toISOString());
    } else if (latestRemoteConfigResult === null)
      if (settings) {
        if (!settings.updatedAt) {
          let newDate = (/* @__PURE__ */ new Date()).toISOString();
          handleUpdateSettingUpdateAt(newDate), settings.updatedAt = newDate;
        }
        await api.uploadConfig(settings), handleUpdateLocalConfigLastSyncedAt((/* @__PURE__ */ new Date()).toISOString()), handleSuccess && handleSuccess(!0);
      } else
        handleFail && handleFail(": Local Config is empty");
    else
      handleFail && handleFail(": latestConfig is " + latestRemoteConfigResult);
  } catch (e3) {
    log_default.error("syncLatestWithDrive error", e3), handleFail && handleFail(": " + e3.message);
  }
}

// sync/google_auth.ts
var GOOGLE_REVOKE_URL = "https://oauth2.googleapis.com/revoke", GoogleAuth = class {
  constructor(state, redirectUrl) {
    this.CLASSNAME = "GoogleAuth";
    this._state = state, this._redirectUrl = redirectUrl;
  }
  static revoke(token) {
    let url = `${GOOGLE_REVOKE_URL}?token=${token}`;
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(async (res) => (await GoogleAuth.removeAuthInfo(), isUserscriptRuntime() && globalThis.location.reload(), res));
  }
  static async getAuthInfo() {
    let tokenIndex = await browserAPI.storage.local.get(GOOGLE_ACCESS_TOKEN_KEY);
    if (tokenIndex[GOOGLE_ACCESS_TOKEN_KEY])
      return tokenIndex[GOOGLE_ACCESS_TOKEN_KEY];
  }
  static async removeAuthInfo() {
    return await browserAPI.storage.local.remove(GOOGLE_ACCESS_TOKEN_KEY);
  }
  static setAuthInfo(authInfo) {
    return browserAPI.storage.local.set({
      [GOOGLE_ACCESS_TOKEN_KEY]: authInfo
    });
  }
  async auth(userscriptSyncPageStartAuthFlow = !1) {
    let authInfo = await GoogleAuth.getAuthInfo();
    if (log_default.debug(this.CLASSNAME, "token from cache:", authInfo), authInfo && authInfo.access_token && await validate(authInfo.access_token).then((_token) => !0).catch((_err) => !1))
      return Promise.resolve(authInfo);
    let authUrlWithState = getAuthUrl(
      this._state,
      this._redirectUrl
    );
    return log_default.debug(this.CLASSNAME, "auth url: " + authUrlWithState), isUserscriptRuntime() ? this.userscriptAuthWorkflow(
      authUrlWithState,
      userscriptSyncPageStartAuthFlow
    ) : this.extensionAuthWorkflow(authUrlWithState).then((res) => (GoogleAuth.setAuthInfo(res), res));
  }
  async userscriptAuthWorkflow(authUrl, syncPageStartAuthFlow) {
    return syncPageStartAuthFlow && await browserAPI.storage.local.set({ [AUTH_FLOW_FLAG]: !0 }), globalThis.open(authUrl, "_self"), Promise.resolve({});
  }
  extensionAuthWorkflow(authUrl) {
    let _tabId, _success = !1;
    return new Promise((resolve, reject) => {
      let cleanup = () => {
        browserAPI.tabs.onUpdated.removeListener(tabUpdateListener), browserAPI.tabs.onRemoved.removeListener(tabRemovedListener);
      }, tabUpdateListener = (tabId, _changeInfo, tab) => {
        if (log_default.debug(this.CLASSNAME, "create tab onUpdated: " + tab.url), _tabId === tabId) {
          let url = new URL(tab.url || ""), authInfo = extractAccessToken(tab.url);
          url.pathname.startsWith("/auth-done") && authInfo?.access_token && (log_default.debug(this.CLASSNAME, "auth done: " + tab.url), resolve({ access_token: authInfo.access_token }), _success = !0, browserAPI.tabs.remove(tabId), cleanup());
        }
      }, tabRemovedListener = (tabId, _removeInfo) => {
        log_default.debug(this.CLASSNAME, "create tab onRemoved: " + tabId), (tabId === _tabId || !_success) && (cleanup(), reject(new Error("auth failed")));
      }, width = Math.min(500, screen.availWidth), height = Math.min(650, screen.availHeight), newTab;
      browserAPI.windows === void 0 ? newTab = browserAPI.tabs.create({
        url: authUrl
      }).then((tab) => {
        _tabId = tab.id;
      }) : newTab = browserAPI.windows.create({
        url: authUrl,
        type: "popup",
        width,
        height,
        left: Math.round((screen.width - width) / 2),
        top: Math.round((screen.height - height) / 2)
      }).then((window2) => {
        _tabId = window2.tabs[0].id;
      }), newTab.then(() => {
        browserAPI.tabs.onUpdated.addListener(tabUpdateListener), browserAPI.tabs.onRemoved.addListener(tabRemovedListener);
      }).catch((error) => {
        log_default.debug(this.CLASSNAME, "create tab failed: " + error), reject(error);
      });
    });
  }
};

// sync/authorize.ts
var VALIDATION_BASE_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo", CLIENT_ID = GOOGLE_CLIENT_ID, REDIRECT_URL = getEnv().REDIRECT_URL;
function validate(accessToken) {
  if (!accessToken)
    throw "Authorization failure";
  let validationURL = `${VALIDATION_BASE_URL}?access_token=${accessToken}`, validationRequest = new Request(validationURL, {
    method: "GET"
  });
  function checkResponse(response) {
    return new Promise((resolve, reject) => {
      response.status != 200 && reject("Token validation error"), response.json().then((json) => {
        json.aud && json.aud === CLIENT_ID ? resolve(accessToken) : reject("Token validation error");
      });
    });
  }
  return fetch(validationRequest).then(checkResponse);
}
function getAuthInfo(state, userscriptSyncStartAuthFlow = !1) {
  return new GoogleAuth(state, REDIRECT_URL).auth(userscriptSyncStartAuthFlow);
}

// sync/sync_latest_config.ts
async function autoSyncLatestConfig() {
}

// utils/format_headers_by_rule.ts
function formatHeadersByRule(requestHeaders, rules) {
  let ruleMap = /* @__PURE__ */ new Map();
  for (let rule of rules)
    ruleMap.set(rule.header.toLowerCase(), rule);
  let addedHeaders = [], newRequestHeaders = requestHeaders.filter(
    (header) => {
      let rule = ruleMap.get(header.name.toLowerCase());
      if (rule) {
        if (rule.operation === "remove")
          return !1;
        if (rule.operation === "set")
          return !1;
      }
      return !0;
    }
  );
  for (let rule of rules)
    rule.operation === "set" && addedHeaders.push({
      name: rule.header,
      value: rule.value || ""
    });
  return newRequestHeaders.concat(addedHeaders);
}

// static/rules/request_modifier_rule.json
var request_modifier_rule_default = [{
  id: 1,
  priority: 1,
  action: {
    type: "modifyHeaders",
    requestHeaders: [
      {
        header: "Referer",
        operation: "set",
        value: "https://httpstat.us/429"
      },
      {
        header: "origin",
        operation: "set",
        value: "https://httpstat.us/429"
      },
      {
        header: "DNT",
        operation: "set",
        value: "1"
      },
      {
        header: "sec-fetch-site",
        operation: "set",
        value: "same-site"
      }
    ]
  },
  condition: {
    urlFilter: "https://httpstat.us/429",
    resourceTypes: ["xmlhttprequest"],
    domainType: "thirdParty",
    initiatorDomains: [
      "cfhamdkdjgoelclgllcoikbckcfpaklj",
      "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
    ]
  }
}, {
  id: 2,
  priority: 1,
  action: {
    type: "modifyHeaders",
    requestHeaders: [
      {
        header: "Referer",
        operation: "set",
        value: "https://www.deepl.com/"
      },
      {
        header: "origin",
        operation: "set",
        value: "https://www.deepl.com"
      },
      {
        header: "DNT",
        operation: "set",
        value: "1"
      },
      { header: "cookie", operation: "remove" },
      {
        header: "sec-fetch-site",
        operation: "set",
        value: "same-site"
      }
    ]
  },
  condition: {
    urlFilter: "https://www2.deepl.com/jsonrpc*",
    resourceTypes: ["xmlhttprequest"],
    domainType: "thirdParty",
    initiatorDomains: [
      "cfhamdkdjgoelclgllcoikbckcfpaklj",
      "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
    ]
  }
}, {
  id: 200,
  priority: 1,
  action: {
    type: "modifyHeaders",
    requestHeaders: [
      {
        header: "Referer",
        operation: "set",
        value: "https://www.deepl.com/"
      },
      {
        header: "origin",
        operation: "set",
        value: "chrome-extension://cofdbpoegempjloogbagkncekinflcnj"
      },
      {
        header: "DNT",
        operation: "set",
        value: "1"
      },
      {
        header: "sec-fetch-site",
        operation: "set",
        value: "same-site"
      }
    ]
  },
  condition: {
    urlFilter: "https://api.deepl.com/jsonrpc*",
    resourceTypes: ["xmlhttprequest"],
    domainType: "thirdParty",
    initiatorDomains: [
      "cfhamdkdjgoelclgllcoikbckcfpaklj",
      "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
    ]
  }
}, {
  id: 201,
  priority: 1,
  action: {
    type: "modifyHeaders",
    requestHeaders: [
      {
        header: "Referer",
        operation: "set",
        value: "https://www.deepl.com/"
      },
      {
        header: "origin",
        operation: "set",
        value: "chrome-extension://cofdbpoegempjloogbagkncekinflcnj"
      },
      {
        header: "sec-fetch-site",
        operation: "set",
        value: "same-site"
      }
    ]
  },
  condition: {
    urlFilter: "https://w.deepl.com/oidc/token",
    resourceTypes: ["xmlhttprequest"],
    domainType: "thirdParty",
    initiatorDomains: [
      "cfhamdkdjgoelclgllcoikbckcfpaklj",
      "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
    ]
  }
}, {
  id: 3,
  priority: 1,
  action: {
    type: "modifyHeaders",
    requestHeaders: [
      {
        header: "origin",
        operation: "set",
        value: "chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"
      }
    ]
  },
  condition: {
    urlFilter: "https://transmart.qq.com/api/imt",
    resourceTypes: ["xmlhttprequest"],
    domainType: "thirdParty",
    initiatorDomains: [
      "cfhamdkdjgoelclgllcoikbckcfpaklj",
      "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
    ]
  }
}, {
  id: 4,
  priority: 1,
  action: {
    type: "modifyHeaders",
    requestHeaders: [
      {
        header: "origin",
        operation: "set",
        value: "chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"
      }
    ]
  },
  condition: {
    urlFilter: "https://translate.volcengine.com/crx/translate/v1/",
    resourceTypes: ["xmlhttprequest"],
    domainType: "thirdParty",
    initiatorDomains: [
      "cfhamdkdjgoelclgllcoikbckcfpaklj",
      "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
    ]
  }
}];

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
        let { messageHandler: messageHandler2, sync } = connectionInfo, messageAuthor = {
          type: fromType,
          name: parsedMessageFrom.name,
          id: tabId,
          url: tabUrl,
          active: tabActive
        };
        if (sync) {
          try {
            let handlerResult = messageHandler2(
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
          return messageHandler2(
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
  getConnection(name, messageHandler2, options) {
    let sync = !1;
    options && options.sync && (sync = !0);
    let fromType = this.fromType, currentListeners = listeners2.get(fromType);
    if (currentListeners.has(name))
      return currentListeners.get(name).connectionInstance;
    {
      let connection2 = new Connection(`${fromType}:${name}`, this.logger);
      return listeners2.get(fromType).set(name, {
        messageHandler: messageHandler2,
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

// utils/md5.js
function safeAdd(x4, y3) {
  var lsw = (x4 & 65535) + (y3 & 65535), msw = (x4 >> 16) + (y3 >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q6, a, b4, x4, s5, t4) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q6), safeAdd(x4, t4)), s5), b4);
}
function md5ff(a, b4, c4, d4, x4, s5, t4) {
  return md5cmn(b4 & c4 | ~b4 & d4, a, b4, x4, s5, t4);
}
function md5gg(a, b4, c4, d4, x4, s5, t4) {
  return md5cmn(b4 & d4 | c4 & ~d4, a, b4, x4, s5, t4);
}
function md5hh(a, b4, c4, d4, x4, s5, t4) {
  return md5cmn(b4 ^ c4 ^ d4, a, b4, x4, s5, t4);
}
function md5ii(a, b4, c4, d4, x4, s5, t4) {
  return md5cmn(c4 ^ (b4 | ~d4), a, b4, x4, s5, t4);
}
function binlMD5(x4, len) {
  x4[len >> 5] |= 128 << len % 32, x4[(len + 64 >>> 9 << 4) + 14] = len;
  var i2, olda, oldb, oldc, oldd, a = 1732584193, b4 = -271733879, c4 = -1732584194, d4 = 271733878;
  for (i2 = 0; i2 < x4.length; i2 += 16)
    olda = a, oldb = b4, oldc = c4, oldd = d4, a = md5ff(a, b4, c4, d4, x4[i2], 7, -680876936), d4 = md5ff(d4, a, b4, c4, x4[i2 + 1], 12, -389564586), c4 = md5ff(c4, d4, a, b4, x4[i2 + 2], 17, 606105819), b4 = md5ff(b4, c4, d4, a, x4[i2 + 3], 22, -1044525330), a = md5ff(a, b4, c4, d4, x4[i2 + 4], 7, -176418897), d4 = md5ff(d4, a, b4, c4, x4[i2 + 5], 12, 1200080426), c4 = md5ff(c4, d4, a, b4, x4[i2 + 6], 17, -1473231341), b4 = md5ff(b4, c4, d4, a, x4[i2 + 7], 22, -45705983), a = md5ff(a, b4, c4, d4, x4[i2 + 8], 7, 1770035416), d4 = md5ff(d4, a, b4, c4, x4[i2 + 9], 12, -1958414417), c4 = md5ff(c4, d4, a, b4, x4[i2 + 10], 17, -42063), b4 = md5ff(b4, c4, d4, a, x4[i2 + 11], 22, -1990404162), a = md5ff(a, b4, c4, d4, x4[i2 + 12], 7, 1804603682), d4 = md5ff(d4, a, b4, c4, x4[i2 + 13], 12, -40341101), c4 = md5ff(c4, d4, a, b4, x4[i2 + 14], 17, -1502002290), b4 = md5ff(b4, c4, d4, a, x4[i2 + 15], 22, 1236535329), a = md5gg(a, b4, c4, d4, x4[i2 + 1], 5, -165796510), d4 = md5gg(d4, a, b4, c4, x4[i2 + 6], 9, -1069501632), c4 = md5gg(c4, d4, a, b4, x4[i2 + 11], 14, 643717713), b4 = md5gg(b4, c4, d4, a, x4[i2], 20, -373897302), a = md5gg(a, b4, c4, d4, x4[i2 + 5], 5, -701558691), d4 = md5gg(d4, a, b4, c4, x4[i2 + 10], 9, 38016083), c4 = md5gg(c4, d4, a, b4, x4[i2 + 15], 14, -660478335), b4 = md5gg(b4, c4, d4, a, x4[i2 + 4], 20, -405537848), a = md5gg(a, b4, c4, d4, x4[i2 + 9], 5, 568446438), d4 = md5gg(d4, a, b4, c4, x4[i2 + 14], 9, -1019803690), c4 = md5gg(c4, d4, a, b4, x4[i2 + 3], 14, -187363961), b4 = md5gg(b4, c4, d4, a, x4[i2 + 8], 20, 1163531501), a = md5gg(a, b4, c4, d4, x4[i2 + 13], 5, -1444681467), d4 = md5gg(d4, a, b4, c4, x4[i2 + 2], 9, -51403784), c4 = md5gg(c4, d4, a, b4, x4[i2 + 7], 14, 1735328473), b4 = md5gg(b4, c4, d4, a, x4[i2 + 12], 20, -1926607734), a = md5hh(a, b4, c4, d4, x4[i2 + 5], 4, -378558), d4 = md5hh(d4, a, b4, c4, x4[i2 + 8], 11, -2022574463), c4 = md5hh(c4, d4, a, b4, x4[i2 + 11], 16, 1839030562), b4 = md5hh(b4, c4, d4, a, x4[i2 + 14], 23, -35309556), a = md5hh(a, b4, c4, d4, x4[i2 + 1], 4, -1530992060), d4 = md5hh(d4, a, b4, c4, x4[i2 + 4], 11, 1272893353), c4 = md5hh(c4, d4, a, b4, x4[i2 + 7], 16, -155497632), b4 = md5hh(b4, c4, d4, a, x4[i2 + 10], 23, -1094730640), a = md5hh(a, b4, c4, d4, x4[i2 + 13], 4, 681279174), d4 = md5hh(d4, a, b4, c4, x4[i2], 11, -358537222), c4 = md5hh(c4, d4, a, b4, x4[i2 + 3], 16, -722521979), b4 = md5hh(b4, c4, d4, a, x4[i2 + 6], 23, 76029189), a = md5hh(a, b4, c4, d4, x4[i2 + 9], 4, -640364487), d4 = md5hh(d4, a, b4, c4, x4[i2 + 12], 11, -421815835), c4 = md5hh(c4, d4, a, b4, x4[i2 + 15], 16, 530742520), b4 = md5hh(b4, c4, d4, a, x4[i2 + 2], 23, -995338651), a = md5ii(a, b4, c4, d4, x4[i2], 6, -198630844), d4 = md5ii(d4, a, b4, c4, x4[i2 + 7], 10, 1126891415), c4 = md5ii(c4, d4, a, b4, x4[i2 + 14], 15, -1416354905), b4 = md5ii(b4, c4, d4, a, x4[i2 + 5], 21, -57434055), a = md5ii(a, b4, c4, d4, x4[i2 + 12], 6, 1700485571), d4 = md5ii(d4, a, b4, c4, x4[i2 + 3], 10, -1894986606), c4 = md5ii(c4, d4, a, b4, x4[i2 + 10], 15, -1051523), b4 = md5ii(b4, c4, d4, a, x4[i2 + 1], 21, -2054922799), a = md5ii(a, b4, c4, d4, x4[i2 + 8], 6, 1873313359), d4 = md5ii(d4, a, b4, c4, x4[i2 + 15], 10, -30611744), c4 = md5ii(c4, d4, a, b4, x4[i2 + 6], 15, -1560198380), b4 = md5ii(b4, c4, d4, a, x4[i2 + 13], 21, 1309151649), a = md5ii(a, b4, c4, d4, x4[i2 + 4], 6, -145523070), d4 = md5ii(d4, a, b4, c4, x4[i2 + 11], 10, -1120210379), c4 = md5ii(c4, d4, a, b4, x4[i2 + 2], 15, 718787259), b4 = md5ii(b4, c4, d4, a, x4[i2 + 9], 21, -343485551), a = safeAdd(a, olda), b4 = safeAdd(b4, oldb), c4 = safeAdd(c4, oldc), d4 = safeAdd(d4, oldd);
  return [a, b4, c4, d4];
}
function binl2rstr(input) {
  var i2, output = "", length32 = input.length * 32;
  for (i2 = 0; i2 < length32; i2 += 8)
    output += String.fromCharCode(input[i2 >> 5] >>> i2 % 32 & 255);
  return output;
}
function rstr2binl(input) {
  var i2, output = [];
  for (output[(input.length >> 2) - 1] = void 0, i2 = 0; i2 < output.length; i2 += 1)
    output[i2] = 0;
  var length8 = input.length * 8;
  for (i2 = 0; i2 < length8; i2 += 8)
    output[i2 >> 5] |= (input.charCodeAt(i2 / 8) & 255) << i2 % 32;
  return output;
}
function rstrMD5(s5) {
  return binl2rstr(binlMD5(rstr2binl(s5), s5.length * 8));
}
function rstrHMACMD5(key, data) {
  var i2, bkey = rstr2binl(key), ipad = [], opad = [], hash;
  for (ipad[15] = opad[15] = void 0, bkey.length > 16 && (bkey = binlMD5(bkey, key.length * 8)), i2 = 0; i2 < 16; i2 += 1)
    ipad[i2] = bkey[i2] ^ 909522486, opad[i2] = bkey[i2] ^ 1549556828;
  return hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8), binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}
function rstr2hex(input) {
  var hexTab = "0123456789abcdef", output = "", x4, i2;
  for (i2 = 0; i2 < input.length; i2 += 1)
    x4 = input.charCodeAt(i2), output += hexTab.charAt(x4 >>> 4 & 15) + hexTab.charAt(x4 & 15);
  return output;
}
function str2rstrUTF8(input) {
  return unescape(encodeURIComponent(input));
}
function rawMD5(s5) {
  return rstrMD5(str2rstrUTF8(s5));
}
function hexMD5(s5) {
  return rstr2hex(rawMD5(s5));
}
function rawHMACMD5(k4, d4) {
  return rstrHMACMD5(str2rstrUTF8(k4), str2rstrUTF8(d4));
}
function hexHMACMD5(k4, d4) {
  return rstr2hex(rawHMACMD5(k4, d4));
}
function md5(string, key, raw) {
  return key ? raw ? rawHMACMD5(key, string) : hexHMACMD5(key, string) : raw ? rawMD5(string) : hexMD5(string);
}

// services/util.ts
function humanReadableSize(bytes) {
  if (Math.abs(bytes) < 1024)
    return bytes + " Byte";
  let units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], u3 = -1;
  do
    bytes /= 1024, ++u3;
  while (Math.abs(bytes) >= 1024 && u3 < units.length - 1);
  return bytes.toFixed(1) + " " + units[u3];
}

// services/cache.ts
var dbNames = [];
async function openIndexedDB(dbName, _storageName) {
  return await new Promise((resolve, reject) => {
    let name = dbName, version = 1, request2 = indexedDB.open(name, version);
    request2.onsuccess = (_event) => {
      resolve(request2.result);
    }, request2.onerror = (event) => {
      console.error(
        "onerror: Error opening the database, switching to non-database mode",
        event
      ), reject();
    }, request2.onupgradeneeded = (_event) => {
      let db = request2.result, storageName = _storageName || "cache";
      db.createObjectStore(storageName, {
        keyPath: "key"
      });
    };
  });
}
async function setParagraphCache(payload) {
  let storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
  return await addInDB(storageName, payload);
}
async function queryParagraphCache(payload) {
  let payload_hash = md5(payload.originalText), storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
  return await queryInDB(storageName, payload_hash);
}
async function queryInDB(dbName, origTextHash) {
  let db = await openIndexedDB(dbName);
  return await new Promise((resolve, reject) => {
    if (!db)
      return reject();
    let storageName = "cache", request2 = db.transaction([storageName], "readonly").objectStore(storageName).get(origTextHash);
    request2.onsuccess = (_event) => {
      db.close();
      let result = request2.result;
      resolve(result);
    }, request2.onerror = (event) => {
      db.close(), console.error("queryInDB->onerror:", event), reject();
    };
  });
}
async function addInDB(dbName, cacheEntry) {
  let db = await openIndexedDB(dbName);
  return (await getAllDBNames()).includes(dbName) || await addCacheList(dbName), await new Promise((resolve) => {
    if (!db)
      return resolve(!1);
    let storageName = "cache", request2 = db.transaction([storageName], "readwrite").objectStore(storageName).put(cacheEntry);
    request2.onsuccess = (_event) => {
      db.close(), resolve(!0);
    }, request2.onerror = (event) => {
      console.error("addInDB->onerror:", event), db.close(), resolve(!1);
    };
  });
}
async function addCacheList(dbName) {
  let storageName = "cache_list", db = await openIndexedDB(brandId + "-cacheList", storageName), request2 = db.transaction([storageName], "readwrite").objectStore(storageName).put({ key: dbName });
  request2.onsuccess = (_event) => {
    db.close(), dbNames.push(dbName);
  }, request2.onerror = (event) => {
    db.close(), console.error(event);
  };
}
async function getAllDBNames() {
  if (dbNames && dbNames.length > 0)
    return dbNames;
  let db = await openIndexedDB(brandId + "-cacheList", "cache_list");
  return dbNames = await new Promise((resolve) => {
    let storageName = "cache_list", request2 = db.transaction([storageName], "readonly").objectStore(storageName).getAllKeys();
    request2.onsuccess = (_event) => {
      db.close(), resolve(request2.result);
    }, request2.onerror = (event) => {
      db.close(), console.error(event), resolve([]);
    };
  }), dbNames;
}
async function calculateSize() {
  try {
    let promises = [];
    (await getAllDBNames()).forEach((dbName) => {
      promises.push(getDatabaseSize(dbName));
    });
    let results = await Promise.all(promises);
    return humanReadableSize(
      results.reduce((total, size) => total + size, 0)
    );
  } catch (e3) {
    return console.error(e3), humanReadableSize(0);
  }
}
async function getDatabaseSize(dbName) {
  let db = await openIndexedDB(dbName), tableSizeGetters = [...db.objectStoreNames].reduce(
    (acc, tableName) => {
      let tmp = getTableSize(db, tableName);
      return acc.push(tmp), acc;
    },
    []
  ), sizes = await Promise.all(tableSizeGetters);
  return db.close(), sizes.reduce((acc, val) => acc + val, 0);
}
async function getTableSize(db, storageName) {
  return await new Promise((resolve, reject) => {
    if (db == null)
      return reject();
    let size = 0, transaction = db.transaction([storageName]).objectStore(storageName).openCursor();
    transaction.onsuccess = (_event) => {
      let cursor = transaction.result;
      if (cursor) {
        let storedObject = cursor.value, json = JSON.stringify(storedObject);
        size += json.length, cursor.continue();
      } else
        resolve(size);
    }, transaction.onerror = (err) => reject("error in " + storageName + ": " + err);
  });
}

// background_message_listeners.ts
var connection, messageHandler = async function(payload, author) {
  let { method, data } = payload;
  if (log_default.debug("background received message", method, data || " "), method === "mock")
    await delay(150);
  else {
    if (method === "queryParagraphCache")
      return queryParagraphCache(data);
    if (method === "setParagraphCache")
      return setParagraphCache(data);
    if (method === "calculateSize")
      return calculateSize();
    if (method === "fetch")
      return request(data);
    if (method === "getConfig")
      return getConfig();
    if (method === "getLocalConfig")
      return getLocalConfig();
    if (method === "openOptionsPage")
      browserAPI.runtime.openOptionsPage();
    else if (method === "openAboutPage")
      browserAPI.tabs.create({
        url: browserAPI.runtime.getURL("options.html#about")
      });
    else {
      if (method === "setLocalConfig")
        return setLocalConfig(data);
      if (method === "detectLanguage") {
        let { text, minLength } = data;
        if (!minLength && minLength !== 0 && (minLength = 50), text.length <= minLength)
          return "auto";
        try {
          let result = await browserAPI.i18n.detectLanguage(
            text
          );
          return result.languages.length > 0 ? formatLanguage(result.languages[0].language) : "auto";
        } catch (e3) {
          return log_default.debug("detect language error", e3), "auto";
        }
      } else if (method === "detectTabLanguage")
        try {
          let lang = await browserAPI.tabs.detectLanguage(
            author.id
          );
          return formatLanguage(lang);
        } catch (e3) {
          return log_default.debug("detect tab language error, use auto ", e3), "auto";
        }
      else if (method === "autoSyncLatestConfig") {
        try {
          await autoSyncLatestConfig();
        } catch (e3) {
          log_default.debug("auto sync latest config error", e3);
        }
        return "";
      }
    }
  }
};
function steupMessageListeners() {
  getConnection();
  let manifest = browserAPI.runtime.getManifest();
  if (manifest.manifest_version > 2, manifest.manifest_version === 2) {
    let urlsFilter = request_modifier_rule_default.map(
      (item) => item.condition.urlFilter
    ), types = request_modifier_rule_default.reduce((acc, item) => (item.condition.resourceTypes.forEach((type) => {
      acc.includes(type) || acc.push(type);
    }), acc), []);
    browserAPI.webRequest.onBeforeSendHeaders.addListener(
      function(details) {
        if (!(details.originUrl && details.originUrl.startsWith("http")) && details.originUrl && details.requestHeaders)
          for (let i2 = 0; i2 < urlsFilter.length; i2++) {
            let rule = request_modifier_rule_default[i2];
            if (rule.condition.urlFilter && isMatchUrl(details.url, rule.condition.urlFilter))
              return { requestHeaders: formatHeadersByRule(
                details.requestHeaders,
                rule.action.requestHeaders
              ) };
          }
      },
      // @ts-ignore: it's ok
      { urls: urlsFilter, types },
      ["blocking", "requestHeaders"]
    );
  }
}
function getConnection() {
  return connection || (connection = new Messager("background", !1).getConnection("main", messageHandler), connection);
}

// background_command_listeners.ts
function setupCommandListeners() {
  typeof browserAPI.commands < "u" && browserAPI.commands.onCommand.addListener(async (command) => {
    if (log_default.debug(`received command: ${command}`), command === "toggleTranslatePage") {
      let tab = await browserAPI.tabs.query({
        active: !0,
        currentWindow: !0
      });
      if (tab.length === 0 || typeof tab[0].id > "u")
        return;
      let tabUrl = tab[0].url;
      if (isPdfUrl(tabUrl)) {
        browserAPI.tabs.create({
          url: formatToPdfViewerUrl(tabUrl)
        });
        return;
      }
    }
    await sendMessageToContent({
      method: command
    });
  });
}
async function sendMessageToContent(request2) {
  let tabId = (await browserAPI.tabs.query({
    currentWindow: !0,
    active: !0
  }))[0].id;
  getConnection().sendMessage(`content_script:main:${tabId}`, request2).catch((e3) => {
    log_default.error("send content message request failed", request2, e3);
  });
}

// libs/preact-translation/utils.ts
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
    "languages.ru": "\u4FC4\u8BED",
    "languages.wyw": "\u6587\u8A00\u6587",
    "languages.<all>": "\u5168\u90E8"
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
    "languages.ru": "\u4FC4\u8A9E",
    "languages.wyw": "\u6587\u8A00\u6587",
    "languages.<all>": "\u5168\u90E8"
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
};
function t3(key, interfaceLanguage, params) {
  return t2(
    finalTranslations,
    key,
    interfaceLanguage,
    fallbackLanguage,
    params
  );
}

// menu.ts
var actions = isChrome() ? ["action"] : ["browser_action", "page_action"], menus = [
  {
    id: "toggleTranslatePage",
    contexts: ["page", "selection", ...actions]
  },
  {
    id: contextOpenOptionsMenuId,
    contexts: actions
  },
  {
    id: contextTranslateLocalPdfFileMenuId,
    contexts: actions
  }
];
async function createContextMenu(config) {
  log_default.debug("createContextMenu", menus), await browserAPI.contextMenus.removeAll();
  for (let menu of menus) {
    let visible = !0;
    config.isShowContextMenu === !1 && menu.id === "toggleTranslatePage" && (visible = !1), browserAPI.contextMenus.create({
      id: menu.id,
      title: t3(`browser.${menu.id}`, config.interfaceLanguage),
      contexts: menu.contexts,
      visible
    }, () => browserAPI.runtime.lastError);
  }
}
async function setupContextMenuListeners(config) {
  browserAPI.contextMenus.onClicked.addListener(
    (info) => {
      if (info.menuItemId === contextOpenOptionsMenuId)
        browserAPI.runtime.openOptionsPage();
      else if (info.menuItemId === contextTranslateLocalPdfFileMenuId) {
        let pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl);
        browserAPI.tabs.create({
          url: pdfViewerRuntimeUrl
        });
      } else
        sendMessageToContent({
          method: info.menuItemId
        });
    }
  ), await createContextMenu(config);
}

// browser_updated_listeners.ts
function onUpdated() {
  getConfig().then((config) => {
    createContextMenu(config);
  }).catch((e3) => {
    log_default.error("create menu error", e3);
  });
}
function setupOnInstalledListener() {
  browserAPI.runtime.onInstalled.addListener((details) => {
    log_default.debug(`onInstalled reason: ${details.reason}`), details.reason == "install" ? (browserAPI.tabs.create({
      url: "https://immersive-translate.owenyoung.com/usage"
    }), onUpdated()) : (details.reason == "update" && browserAPI.runtime.getManifest().version != details.previousVersion, onUpdated());
  });
}

// background.ts
async function main() {
  setupOnInstalledListener(), setupCommandListeners();
  let config = await getConfig();
  setupContextMenuListeners(config).catch((e3) => {
    log_default.error("setup context menu error", e3);
  }), config.debug ? log_default.setLevel("debug") : log_default.setLevel("info");
}
steupMessageListeners();
main();
