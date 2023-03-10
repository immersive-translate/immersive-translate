var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// <define:process.env>
var define_process_env_default = { BUILD_TIME: "2023-03-10T10:14:31.015Z", VERSION: "0.3.1", PROD: "1", REDIRECT_URL: "https://immersive-translate.owenyoung.com/auth-done/", IMMERSIVE_TRANSLATE_INJECTED_CSS: `:root {
  --immersive-translate-theme-underline-borderColor: #72ece9;
  --immersive-translate-theme-nativeUnderline-borderColor: #72ece9;
  --immersive-translate-theme-nativeDashed-borderColor: #72ece9;
  --immersive-translate-theme-nativeDotted-borderColor: #72ece9;
  --immersive-translate-theme-highlight-backgroundColor: #ffff00;
  --immersive-translate-theme-dashed-borderColor: #59c1bd;
  --immersive-translate-theme-blockquote-borderColor: #cc3355;
  --immersive-translate-theme-thinDashed-borderColor: #ff374f;
  --immersive-translate-theme-dashedBorder-borderColor: #94a3b8;
  --immersive-translate-theme-dashedBorder-borderRadius: 0;
  --immersive-translate-theme-solidBorder-borderColor: #94a3b8;
  --immersive-translate-theme-solidBorder-borderRadius: 0;
  --immersive-translate-theme-dotted-borderColor: #94a3b8;
  --immersive-translate-theme-wavy-borderColor: #72ece9;
  --immersive-translate-theme-dividingLine-borderColor: #94a3b8;
  --immersive-translate-theme-grey-textColor: #2f4f4f;
  --immersive-translate-theme-marker2-backgroundColor: #ffff00;
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
.immersive-translate-pdf-target-container .immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container
  .immersive-translate-target-wrapper
  font {
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
.immersive-translate-target-translation-theme-grey-inner {
  color: var(--immersive-translate-theme-grey-textColor);
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
  border-radius: var(
    --immersive-translate-theme-dashedBorder-borderRadius
  ) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-dashedBorder-borderRadius
  ) !important;
  padding: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-solidBorder-borderRadius
  ) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-solidBorder-borderRadius
  ) !important;
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

.immersive-translate-target-translation-theme-marker2-inner {
  font-weight: bold;
  text-shadow: 10px 0px 3px
      var(--immersive-translate-theme-marker2-backgroundColor),
    16px 3px 9px var(--immersive-translate-theme-marker2-backgroundColor),
    2px 0px 6px var(--immersive-translate-theme-marker2-backgroundColor),
    -12px 0px 12px var(--immersive-translate-theme-marker2-backgroundColor) !important;
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

// https://esm.sh/v111/webextension-polyfill@0.10.0/deno/webextension-polyfill.development.js
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
  "esm-build-ea83bb2b09ea0b45e3901ba5c3bf669e28b9d8e1-f220b894/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports2, module2) {
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
}), esm_build_ea83bb2b09ea0b45e3901ba5c3bf669e28b9d8e1_f220b894_exports = {};
__export2(esm_build_ea83bb2b09ea0b45e3901ba5c3bf669e28b9d8e1_f220b894_exports, {
  default: () => esm_build_ea83bb2b09ea0b45e3901ba5c3bf669e28b9d8e1_f220b894_default
});
var __module = __toESM(require_browser_polyfill());
__reExport(esm_build_ea83bb2b09ea0b45e3901ba5c3bf669e28b9d8e1_f220b894_exports, __toESM(require_browser_polyfill()));
var { default: __default, ...__rest } = __module, esm_build_ea83bb2b09ea0b45e3901ba5c3bf669e28b9d8e1_f220b894_default = __default !== void 0 ? __default : __rest;

// browser/import_browser_polyfill.ts
globalThis.immersiveTranslateBrowserAPI = esm_build_ea83bb2b09ea0b45e3901ba5c3bf669e28b9d8e1_f220b894_default;

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
  "browser.openEbookViewer": "\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66",
  "browser.openEbookBuilder": "\u5236\u4F5C\u53CC\u8BED Epub \u7535\u5B50\u4E66",
  "browser.translateLocalHTMLFile": "\u7FFB\u8BD1\u672C\u5730 HTML \u6587\u4EF6",
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
  badUserscriptBrowser: "\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",
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
  "translationTheme.grey": "\u9ED1\u7070\u8272",
  "translationTheme.dashed": "\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.dotted": "\u70B9\u72B6\u4E0B\u5212\u7EBF",
  "translationTheme.dashedBorder": "\u865A\u7EBF\u8FB9\u6846",
  "translationTheme.solidBorder": "\u5B9E\u7EBF\u8FB9\u6846",
  "translationTheme.underline": "\u76F4\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7EB8\u9634\u5F71\u6548\u679C",
  "translationTheme.dividingLine": "\u5206\u5272\u7EBF",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.marker": "\u9A6C\u514B\u7B14",
  "translationTheme.marker2": "\u9A6C\u514B\u7B142",
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
  "translationServices.tenAlpha": "\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)",
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
  "translationServices.you": "\u6709\u9053\u7FFB\u8BD1 (Alpha)",
  "translationServices.transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
  "translationServices.niu": "\u5C0F\u725B\u7FFB\u8BD1",
  "translationServices.papago": "Papago \u7FFB\u8BD1",
  "translationServices.d": "D (Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translationServices.openai": "OpenAI",
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
  "customThemeLabel.borderRadius": "\u8FB9\u6846\u5706\u89D2",
  "customThemeLabel.textColor": "\u6587\u5B57\u989C\u8272",
  "customThemeLabel.backgroundColor": "\u80CC\u666F\u989C\u8272",
  "customThemeLabel.zoom": "\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",
  resetToDefaultColor: "\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",
  isTranslateTitle: "\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",
  isTranslateTitleDescription: "\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",
  verifyService: "\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",
  verified: "\u9A8C\u8BC1\u6210\u529F",
  "field.model": "\u6A21\u578B",
  "field.translationEngine": "\u7FFB\u8BD1\u5F15\u64CE",
  "field.limitPerMinute": "\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570",
  "field.maxTextLengthPerRequest": "\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6",
  "description.limitPerMinute": "\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u88AB\u6682\u65F6\u7981\u7528\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A OpenAI \u8BD5\u7528\u7248\u7684\u8BF7\u6C42\u9650\u5236",
  "description.prompt": "\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00",
  "description.maxTextLengthPerRequest": "\u9ED8\u8BA4\u4F1A\u5408\u5E76\u591A\u4E2A\u6BB5\u843D\uFF0C\u4EE5\u51CF\u5C11\u8BF7\u6C42\u6B21\u6570\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u603B\u957F\u5EA6\u8FC7\u957F\uFF0C\u4E5F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6",
  enabledExtension: "\u542F\u7528\u6269\u5C55",
  clickToDisableExtension: "\u70B9\u51FB\u7981\u7528\u6269\u5C55",
  clickToEnableExtension: "\u70B9\u51FB\u542F\u7528\u6269\u5C55",
  hasBeenDisabled: "\u5DF2\u7981\u7528",
  "show password": "\u663E\u793A\u5BC6\u7801"
};

// locales/zh-TW.json
var zh_TW_default = {
  lineBreakMaxTextCount: "\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF",
  "translate-pdf": "\u9EDE\u9078\u7FFB\u8B6F PDF",
  "translate-firefox-local-pdf": "\u9EDE\u9078\u4E0A\u50B3 PDF",
  enableLineBreak: "\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",
  sponsorLabel: "$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",
  help: "\u8AAA\u660E",
  browserShortcutsNoteForFirefox: "Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",
  browserShortcutsNoteForChrome: "\u985E Chrome \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",
  browserShortcutsSucks: "\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",
  enableLineBreakDescription: "\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8B6F",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u5957\u4EF6\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u63F4 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u63F4 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u958B\u555F\u8A2D\u5B9A\u9801\u9762",
  "browser.toggleTranslationMask": "\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",
  "browser.translateLocalPdfFile": "\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848",
  "browser.openEbookViewer": "\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8",
  "browser.openEbookBuilder": "\u88FD\u4F5C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8",
  "browser.translateLocalHTMLFile": "\u7FFB\u8B6F\u672C\u6A5F HTML \u6A94\u6848",
  confirmResetConfig: "\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",
  translationLineBreakSettingTitle: "\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",
  smartLineBreak: "\u667A\u6167\u63DB\u884C",
  alwaysLineBreak: "\u7E3D\u662F\u63DB\u884C",
  isShowContextMenu: "\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",
  toggleBeta: "\u958B\u555F Beta \u6E2C\u8A66\u5BE6\u9A57\u6027\u529F\u80FD",
  betaDescription: "\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",
  translationLineBreakSettingDescription: "\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",
  tempTranslateDomainTitle: "\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",
  tempTranslateDomainDescription: "\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",
  xMinutes: "{count} \u5206\u9418",
  disabled: "\u505C\u7528",
  changelog: "\u66F4\u65B0\u8A18\u9304",
  toggleTranslatePageWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  toggleTranslationMaskWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",
  addUrlDescription: "\u53EF\u4EE5\u70BA\u57DF\u540D\uFF0C\u540C\u6642\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
  general: "\u57FA\u672C\u8A2D\u5B9A",
  clickToExpandConfig: "\u5C55\u958B\u7576\u524D\u914D\u7F6E",
  import: "\u5F9E\u6A94\u6848\u532F\u5165",
  export: "\u532F\u51FA\u70BA\u6A94\u6848",
  toggleDebug: "\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",
  "fingers.0": "\u95DC\u9589",
  "fingers.2": "\u96D9\u6307\u89F8\u6478",
  "fingers.3": "\u4E09\u6307\u89F8\u6478",
  "fingers.4": "\u56DB\u6307\u89F8\u6478",
  "fingers.5": "\u4E94\u6307\u89F8\u6478",
  document: "\u6587\u4EF6",
  resetSuccess: "\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",
  resetThisSuccess: "\u91CD\u8A2D\u6210\u529F",
  saved: "\u5132\u5B58\u6210\u529F",
  successImportConfig: "\u6210\u529F\u532F\u5165\u8A2D\u5B9A",
  goAdvancedSettings: "\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",
  goAdvancedInterfaceSettings: "\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",
  advanced: "\u9032\u968E\u8A2D\u5B9A",
  advancedDescription: "\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",
  developer: "\u958B\u767C\u8005\u8A2D\u5B9A",
  donateCafe: "\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",
  feedback: "\u554F\u984C\u56DE\u5831",
  toggleTranslatePage: "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  translateToThePageEndImmediatelyDescription: "\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",
  translationAreaDescription: "\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)",
  "the number of characters to be translated first": "\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF",
  "interface language": "\u4ECB\u9762\u8A9E\u8A00",
  "display both the original text and the translation": "\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587",
  "keyboard shortcuts": "\u9375\u76E4\u5FEB\u901F\u9375",
  modify: "\u8B8A\u66F4\u5FEB\u901F\u9375",
  reset: "\u91CD\u8A2D",
  close: "\u95DC\u9589",
  homepage: "\u9996\u9801",
  more: "\u66F4\u591A",
  translateTheWholePage: "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",
  changeToTranslateTheWholePage: "\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",
  changeToTranslateTheMainPage: "\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",
  translateToThePageEndImmediately: "\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",
  translateTheMainPage: "\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",
  "The local rules are up to date": "\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A",
  "Checking for updates": "\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",
  localVersionIsTooOld: "\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",
  badUserscriptBrowser: "\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",
  foundNewVersion: "\u6709\u65B0\u7248\u672C\u53EF\u7528",
  theLocalExtensionIsUpToUpdate: "\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",
  failToSyncRules: "\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",
  retry: "\u9EDE\u6B64\u91CD\u8A66",
  failedReason: "\u5931\u6557\u539F\u56E0",
  currentRuleVersion: "\u76EE\u524D\u898F\u5247\u7248\u672C",
  calculating: "\u6B63\u5728\u8A08\u7B97",
  unknownError: "\u672A\u77E5\u7684\u932F\u8AA4",
  canNotFetchRemoteRule: "\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",
  enableAlphaSuccess: "\u5DF2\u555F\u7528 Alpha \u529F\u80FD",
  disableAlphaSuccess: "\u5DF2\u505C\u7528 Alpha \u529F\u80FD",
  cacheSize: "\u5FEB\u53D6\u5927\u5C0F\uFF1A",
  cleaning: "\u6B63\u5728\u6E05\u7406",
  cleanCache: "\u6E05\u9664\u5FEB\u53D6",
  options: "\u9078\u9805",
  about: "\u95DC\u65BC",
  service: "\u7FFB\u8B6F\u670D\u52D9",
  needAction: "(\u524D\u5F80\u8A2D\u5B9A)",
  goSettings: "\u524D\u5F80\u8A2D\u5B9A",
  needActionForOptions: "(\u9700\u8A2D\u5B9A)",
  translationEngine: "\u5F15\u64CE\u9078\u9805",
  sourceLanguage: "\u539F\u6587\u8A9E\u8A00",
  target: "\u76EE\u6A19\u8A9E\u8A00",
  popupSourceLanguage: "\u539F\u6587\u8A9E\u8A00",
  popupTarget: "\u76EE\u6A19\u8A9E\u8A00",
  popupService: "\u7FFB\u8B6F\u670D\u52D9",
  forThisSite: "\u91DD\u5C0D\u8A72\u7DB2\u7AD9\uFF1A",
  alwaysTranslateSomeLanguage: "\u7E3D\u662F\u7FFB\u8B6F {language}",
  neverTranslateSomeLanguage: "\u6C38\u4E0D\u7FFB\u8B6F {language}",
  alwaysTranslateSomeSite: "\u7E3D\u662F\u7FFB\u8B6F {hostname}",
  neverTranslateSomeSite: "\u6C38\u4E0D\u7FFB\u8B6F {hostname}",
  add: "\u65B0\u589E",
  default: "\u9810\u8A2D",
  forThisLanguage: "\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A",
  "add url": "\u8F38\u5165 URL",
  edit: "\u7DE8\u8F2F",
  "translate other languages into specific language": "\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00",
  "select translation service": "\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",
  language: "\u8A9E\u8A00",
  "show-original": "\u986F\u793A\u539F\u6587",
  translate: "\u7FFB\u8B6F",
  Translated: "\u5DF2\u7FFB\u8B6F",
  Translating: "\u7FFB\u8B6F\u4E2D",
  Error: "\u932F\u8AA4",
  allowCacheTranslations: "\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09",
  "translation display": "\u8B6F\u6587\u986F\u793A\u6A23\u5F0F",
  "select diplay style": "\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",
  interface: "\u4ECB\u9762\u8A2D\u5B9A",
  import_export: "\u532F\u5165/\u532F\u51FA",
  import_export_title: "\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",
  syncToGoogleDrive: "\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",
  previewAllThemes: "\u9810\u89BD\u5168\u90E8\u6A23\u5F0F",
  "translationTheme.none": "\u7121",
  "translationTheme.grey": "\u9ED1\u7070\u8272",
  "translationTheme.dashed": "\u7834\u6298\u865F\u5E95\u7DDA",
  "translationTheme.dotted": "\u9EDE\u72C0\u5E95\u7DDA",
  "translationTheme.dashedBorder": "\u865B\u7DDA\u6846\u7DDA",
  "translationTheme.solidBorder": "\u5BE6\u7DDA\u6846\u7DDA",
  "translationTheme.underline": "\u76F4\u7DDA\u5E95\u7DDA",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7D19\u9670\u5F71\u6548\u679C",
  "translationTheme.dividingLine": "\u5206\u9694\u7DDA",
  "translationTheme.highlight": "\u9192\u76EE\u63D0\u793A",
  "translationTheme.marker": "\u99AC\u514B\u7B46",
  "translationTheme.marker2": "\u99AC\u514B\u7B462",
  "translationTheme.blockquote": "\u5F15\u7528\u6A23\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u9AD4",
  "translationTheme.bold": "\u7C97\u9AD4",
  "translationTheme.thinDashed": "\u7D30\u7834\u6298\u865F\u5E95\u7DDA",
  "translationTheme.nativeDashed": "\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA",
  "translationTheme.nativeDotted": "\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA",
  "translationTheme.nativeUnderline": "\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA",
  "translationTheme.wavy": "\u6CE2\u5F62\u66F2\u7DDA",
  "translationServices.tencent": "\u9A30\u8A0A\u7FFB\u8B6F\u541B",
  "translationServices.tenAlpha": "\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)",
  "translationServices.google": "Google \u7FFB\u8B6F",
  "translationServices.bai": "\u767E\u5EA6(Alpha)",
  "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8B6F",
  "translationServices.aliyun": "\u963F\u91CC\u96F2\u7FFB\u8B6F",
  "translationServices.volc": "\u706B\u5C71\u7FFB\u8B6F",
  "translationServices.deeplx": "DeeplX(Beta)",
  "translationServices.bing": "Bing \u7FFB\u8B6F",
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
  "translationServices.you": "\u6709\u9053\u7FFB\u8B6F (Alpha)",
  "translationServices.transmart": "\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F",
  "translationServices.niu": "\u5C0F\u725B\u7FFB\u8B6F",
  "translationServices.papago": "Papago\u7FFB\u8B6F",
  "translationServices.d": "Deepl(Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translationServices.openai": "OpenAI",
  "translate title": "\u7FFB\u8B6F\u9801\u9762\u6A19\u984C",
  "always languages": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",
  neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",
  neverTranslateTheFollowingLanguagesDescription: "\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",
  enableUserscriptPagePopup: "\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",
  enableUserscriptPagePopupDescription: "\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875",
  "always translate the following languages": "\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "always sites": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "always translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "never translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F",
  "please refer to": "\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",
  KeyAndConfigurationTutorial: "\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",
  useAboveStyleForTheseSites: "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",
  currentUrl: "\u76EE\u524D\u7DB2\u5740",
  confirm: "\u5132\u5B58",
  cancel: "\u53D6\u6D88",
  delete: "\u522A\u9664",
  "languages.auto": "\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",
  syncToCloud: "\u540C\u6B65\u81F3\u96F2\u7AEF",
  syncToCloudDescription: "\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",
  authFail: "\u6388\u6B0A\u5931\u6557",
  syncTitle: "\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",
  import_hint: "\u532F\u5165",
  upload: "\u4E0A\u50B3",
  revokeAuth: "\u64A4\u92B7\u6388\u6B0A",
  uploadFail: "\u4E0A\u50B3\u5931\u6557",
  download: "\u4E0B\u8F09",
  importSuccess: "\u532F\u5165\u6210\u529F",
  importFail: "\u532F\u5165\u5931\u6557",
  deleteFail: "\u522A\u9664\u5931\u6557",
  backupToCloud: "\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",
  create_new_backup: "\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",
  maxBackupFiles: "\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",
  backupToCloudDescription: "\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",
  successSyncConfig: "\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",
  syncFail: "\u540C\u6B65\u5931\u6557",
  updatedAt: "\u66F4\u65B0\u65BC {date}",
  lastSyncedAt: "\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",
  downloadFail: "\u4E0B\u8F09\u5931\u6557",
  clickToDownload: "\u9EDE\u9078\u4E0B\u8F09",
  aboutLabel: "\u95DC\u65BC - \u554F\u984C\u56DE\u5831 - \u8D0A\u52A9",
  "browser.openAboutPage": "\u95DC\u65BC/\u554F\u984C\u56DE\u5831/\u8D0A\u52A9",
  aboutIntro: "\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u63F4\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002\u5982\u679C\u6709\u9918\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u9078\u9019\u88E1\u8D0A\u52A9</2>\u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",
  projectHomepage: "\u5C08\u6848\u9996\u9801",
  joinTelegramGroup: "\u52A0\u5165 Telegram \u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",
  joinTelegramChannel: "\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",
  feedbackAndJoin: "\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",
  autoSync: "\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",
  loadingThemeTitle: "Loading \u6A23\u5F0F",
  loadingThemeDescription: "\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F",
  "loadingTheme.spinner": "\u8F49\u5708\u52D5\u756B",
  "loadingTheme.text": "\u975C\u614B\u6587\u5B57 ... ",
  "loadingTheme.none": "\u4E0D\u986F\u793A",
  developerDescription: "\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6",
  "edit border color": "\u8B8A\u66F4\u908A\u6846\u8272\u5F69",
  successSyncButNoChange: "\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",
  customTheme: "\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F",
  "customThemeLabel.borderColor": "\u908A\u6846\u8272\u5F69",
  "customThemeLabel.borderRadius": "\u908A\u6846\u5713\u89D2",
  "customThemeLabel.textColor": "\u6587\u5B57\u8272\u5F69",
  "customThemeLabel.backgroundColor": "\u80CC\u666F\u8272\u5F69",
  "customThemeLabel.zoom": "\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)",
  resetToDefaultColor: "\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",
  isTranslateTitle: "\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",
  isTranslateTitleDescription: "\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",
  verifyService: "\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",
  verified: "\u9A57\u8B49\u6210\u529F",
  "field.model": "\u6A21\u578B",
  "field.translationEngine": "\u7FFB\u8B6F\u5F15\u64CE",
  "field.limitPerMinute": "\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578",
  "description.limitPerMinute": "\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\uFF0C\u9810\u8A2D\u8A2D\u5B9A\u70BA OpenAI \u8A66\u7528\u7248\u7684\u8981\u6C42\u9650\u5236",
  "description.prompt": "\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00",
  enabledExtension: "\u555F\u7528\u5957\u4EF6",
  clickToDisableExtension: "\u9EDE\u9078\u505C\u7528\u5957\u4EF6",
  clickToEnableExtension: "\u9EDE\u9078\u555F\u7528\u5957\u4EF6",
  hasBeenDisabled: "\u5DF2\u505C\u7528",
  "show password": "\u986F\u793A\u5BC6\u78BC"
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
  "browser.openEbookViewer": "\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66",
  "browser.openEbookBuilder": "\u5236\u4F5C\u53CC\u8BED Epub \u7535\u5B50\u4E66",
  "browser.translateLocalHTMLFile": "\u7FFB\u8BD1\u672C\u5730 HTML \u6587\u4EF6",
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
  "translationTheme.grey": "\u9ED1\u7070\u8272",
  "translationTheme.dashed": "Dashed underline",
  "translationTheme.dotted": "Dotted Underline",
  "translationTheme.dashedBorder": "Dashed Border",
  "translationTheme.solidBorder": "\u5B9E\u7EBF\u8FB9\u6846",
  "translationTheme.underline": "Straight underline",
  "translationTheme.mask": "Blur effect",
  "translationTheme.paper": "White paper shadow effect",
  "translationTheme.dividingLine": "Dividing line",
  "translationTheme.highlight": "Highlight",
  "translationTheme.marker": "Maker",
  "translationTheme.marker2": "\u9A6C\u514B\u7B142",
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
  "translationServices.tenAlpha": "Tencent Translator (Alpha)",
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
  "translationServices.you": "Youdao Translation (Alpha)",
  "translationServices.transmart": "Tencent Smart Translation",
  "translationServices.niu": "Niu Translation",
  "translationServices.papago": "Papago Translation",
  "translationServices.d": "DeeplX (Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translationServices.openai": "OpenAI",
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
  "customThemeLabel.borderRadius": "\u8FB9\u6846\u5706\u89D2",
  "customThemeLabel.textColor": "Text color",
  "customThemeLabel.backgroundColor": "Background color",
  "customThemeLabel.zoom": "Font scale (%)",
  resetToDefaultColor: "Reset to default colors",
  isTranslateTitle: "Enable translate page title",
  isTranslateTitleDescription: "When enabled, the page title will be translated",
  verifyService: "\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",
  verified: "\u9A8C\u8BC1\u6210\u529F",
  "field.model": "\u6A21\u578B",
  "field.translationEngine": "\u7FFB\u8BD1\u5F15\u64CE",
  "field.limitPerMinute": "\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570",
  "description.limitPerMinute": "\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u88AB\u6682\u65F6\u7981\u7528\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A OpenAI \u8BD5\u7528\u7248\u7684\u8BF7\u6C42\u9650\u5236",
  "description.prompt": "\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00",
  enabledExtension: "\u542F\u7528\u6269\u5C55",
  clickToDisableExtension: "\u70B9\u51FB\u7981\u7528\u6269\u5C55",
  clickToEnableExtension: "\u70B9\u51FB\u542F\u7528\u6269\u5C55",
  hasBeenDisabled: "\u5DF2\u7981\u7528",
  "show password": "Show password"
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
], immersiveTranslateGlobalConfigStorageKey = "immersiveTranslateDeeplGlobalState", translations = {};
for (let translation of interfaceTranslations)
  translations[translation.code] = translation.messages;
var brandName = "Immersive Translate", brandId = "immersive-translate";
var brandIdForJs = "immersiveTranslate";
var GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow";
var AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", iframeMessageRateIdentifier = brandIdForJs + "WaitForRateLimit", documentMessageTypeIdentifierForAsk = brandIdForJs + "DocumentMessageAsk", documentMessageTypeIdentifierForHandler = brandIdForJs + "DocumentMessageHandler", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`, buildinConfigStorageKey = "buildinConfig", localConfigStorageKey = "localConfig", contextOpenOptionsMenuId = "openOptionsPage", contextOpenAboutMenuId = "openAboutPage";
var contextOpenLocalEbookViewer = "openEbookViewer", contextOpenLocalEbookBuilder = "openEbookBuilder", pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`, sourceElementEffectAttributeNameForJs = "immersiveTranslateEffect", elementMarkRootKey = `${brandIdForJs}Root`, sourceElementEffectAttributeName = `data-${brandId}-effect`, sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`, sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`, sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`, sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`, sourceElementExcludeAttributeNameForSelector = `data-${brandId}-exclude-mark`, sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`, sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`, sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`, sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`, sourceElementLeft = `${brandIdForJs}Left`, sourceElementRight = `${brandIdForJs}Right`, sourceElementWidth = `${brandIdForJs}Width`, sourceElementHeight = `${brandIdForJs}Height`, sourceElementTop = `${brandIdForJs}Top`, sourceElementFontSize = `${brandIdForJs}FontSize`, lastRunTimeStorageKey = "lastRunTime", sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`, defaultPlaceholderDelimiters = ["@", "#"], titleDelimiters = " --- ", translationTextSeparator = `
`, translationTargetElementWrapperClass = `${brandId}-target-wrapper`, translationPdfTargetContainerClass = `${brandId}-pdf-target-container`, translationTargetInnerElementWrapperClass = `${brandId}-target-inner`, translationSourceElementsWrapperClass = `${brandId}-source-wrapper`, translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`, translationFrameRootThemeAttributeName = `${brandId}-root-translation-theme`, translationFrameRootThemeAttributeNameForJs = `${brandIdForJs}RootTranslationTheme`, translationTargetTranslationElementVerticalBlockClass = `${brandId}-target-translation-vertical-block-wrapper`, translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`, translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`, translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
var themeOptions = {
  underline: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  nativeUnderline: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  nativeDashed: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  nativeDotted: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  dotted: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  dividingLine: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  highlight: [
    {
      name: "backgroundColor",
      required: !1,
      type: "color"
    }
  ],
  dashed: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  blockquote: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  thinDashed: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  dashedBorder: [
    {
      name: "borderRadius",
      required: !1,
      type: "number",
      default: "0"
    },
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  solidBorder: [
    {
      name: "borderRadius",
      required: !1,
      type: "number",
      default: "0"
    },
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ],
  marker2: [
    {
      name: "backgroundColor",
      required: !1,
      type: "color"
    }
  ],
  wavy: [
    {
      name: "borderColor",
      required: !1,
      type: "color"
    }
  ]
}, languages = [
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
  wyw: "\u6587\u8A00\u6587",
  xh: "Bantu",
  yi: "Yiddish",
  yo: "Yoruba",
  yua: "Yucatan Mayan",
  yue: "Cantonese (Traditional)",
  "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
  "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
  zu: "Zulu",
  // @ts-ignore: it's ok
  "<all>": "All Languages"
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
var openlProps = [
  {
    type: "select",
    name: "codename",
    labelKey: "field.translationEngine",
    default: "youdao",
    required: !1,
    options: [
      {
        label: "translationServices.google",
        value: "google"
      },
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
        label: "translationServices.ibm",
        value: "ibm"
      },
      {
        label: "translationServices.azure",
        value: "azure"
      },
      {
        label: "translationServices.aws",
        value: "aws"
      }
    ]
  }
], PureTranslationServices = {
  google: {
    name: "Google",
    homepage: "https://translate.google.com/"
  },
  deepl: {
    name: "DeepL",
    homepage: "https://www.deepl.com/translator",
    docUrl: "https://immersive-translate.owenyoung.com/services/deepL",
    allProps: [
      {
        name: "authKey",
        label: "Auth Key",
        required: !0,
        type: "password"
      }
    ]
  },
  transmart: {
    name: "Transmart",
    homepage: "https://transmart.qq.com/"
  },
  openai: {
    name: "Open AI",
    homepage: "https://openai.com/api/",
    docUrl: "https://immersive-translate.owenyoung.com/services/openai",
    allProps: [
      {
        name: "APIKEY",
        required: !0,
        type: "password"
      },
      {
        name: "model",
        labelKey: "field.model",
        required: !1,
        type: "text",
        default: "gpt-3.5-turbo"
      },
      {
        name: "limit",
        required: !1,
        labelKey: "field.limitPerMinute",
        descriptionKey: "description.limitPerMinute",
        type: "number",
        default: 10
      },
      {
        name: "maxTextLengthPerRequest",
        required: !1,
        labelKey: "field.maxTextLengthPerRequest",
        descriptionKey: "description.maxTextLengthPerRequest",
        type: "number",
        default: 1300
      },
      {
        name: "prompt",
        label: "Prompt",
        required: !1,
        descriptionKey: "description.prompt",
        type: "textarea",
        default: "Translate the following text to {{to}}: ```\n{{text}}\n```"
      }
    ]
  },
  youdao: {
    name: "Youdao",
    homepage: "https://immersive-translate.owenyoung.com/services/youdao",
    docUrl: "https://hcfy.app/docs/services/youdao-api",
    allProps: [
      {
        name: "appId",
        required: !0,
        type: "text"
      },
      {
        name: "appSecret",
        required: !0,
        type: "password"
      }
    ]
  },
  tencent: {
    name: "Tencent",
    homepage: "https://fanyi.qq.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/tencent",
    allProps: [
      {
        name: "secretId",
        required: !0,
        type: "text"
      },
      {
        name: "secretKey",
        required: !0,
        type: "password"
      }
    ]
  },
  azure: {
    name: "azure",
    homepage: "https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",
    docUrl: "https://immersive-translate.owenyoung.com/services/azure",
    allProps: [
      {
        name: "region",
        required: !0,
        default: "eastasia",
        type: "text"
      },
      {
        name: "APIKEY",
        required: !0,
        type: "password"
      }
    ]
  },
  papago: {
    name: "Papago",
    homepage: "https://translate.google.com/"
  },
  baidu: {
    name: "Baidu",
    homepage: "https://fanyi.baidu.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/baidu",
    allProps: [
      {
        name: "appid",
        required: !0,
        type: "text"
      },
      {
        name: "key",
        required: !0,
        type: "password"
      }
    ]
  },
  volc: {
    name: "Volc",
    homepage: "https://www.volcengine.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/volcano",
    allProps: [
      {
        name: "accessKeyId",
        required: !0,
        type: "text"
      },
      {
        name: "secretAccessKey",
        required: !0,
        type: "password"
      }
    ]
  },
  caiyun: {
    name: "Caiyun",
    homepage: "https://fanyi.caiyunapp.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/caiyun",
    allProps: [
      {
        name: "token",
        required: !0,
        type: "password"
      }
    ]
  },
  cai: {
    name: "Cai",
    homepage: "https://fanyi.caiyunapp.com/",
    alpha: !0
  },
  mock: {
    name: "Mock",
    homepage: "https://www.google.com"
  },
  mock2: {
    name: "Mock2",
    homepage: "https://www.google.com"
  },
  tenAlpha: {
    name: "TenAlpha",
    homepage: "https://fanyi.qq.com/",
    alpha: !0
  },
  you: {
    name: "You",
    alpha: !0,
    homepage: "https://immersive-translate.owenyoung.com/services/youdao"
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
  volcAlpha: {
    name: "Volc Alpha",
    alpha: !0,
    homepage: "https://www.volcengine.com/"
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
    allProps: [
      {
        name: "url",
        label: "API URL",
        required: !0,
        type: "text"
      }
    ]
  },
  niu: {
    name: "niutrans",
    homepage: "https://niutrans.com/",
    docUrl: "https://immersive-translate.owenyoung.com/services/niu",
    allProps: [
      {
        name: "APIKEY",
        required: !0,
        type: "password"
      }
    ]
  },
  bing: {
    name: "Bing",
    homepage: "https://www.bing.com/translator"
  }
}, childFrameToRootFrameIdentifier = { type: brandIdForJs + "ChildFrameToRootFrameIdentifier" };

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

// https://deno.land/std@0.171.0/async/deadline.ts
var DeadlineError = class extends Error {
  constructor() {
    super("Deadline"), this.name = "DeadlineError";
  }
};
function deadline(p4, delay2) {
  let d5 = deferred(), t3 = setTimeout(() => d5.reject(new DeadlineError()), delay2);
  return Promise.race([p4, d5]).finally(() => clearTimeout(t3));
}

// https://deno.land/std@0.171.0/async/delay.ts
function delay(ms, options2 = {}) {
  let { signal, persistent } = options2;
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
    } catch (e) {
      this.#throws.push(e);
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
        for (let e of this.#throws)
          throw e;
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
function clampAndTruncate(n2, max = 255, min = 0) {
  return Math.trunc(Math.max(Math.min(n2, max), min));
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

// https://deno.land/std@0.167.0/async/debounce.ts
function debounce(fn, wait) {
  let timeout = null, flush = null, debounced = (...args) => {
    debounced.clear(), flush = () => {
      debounced.clear(), fn.call(debounced, ...args);
    }, timeout = setTimeout(flush, wait);
  };
  return debounced.clear = () => {
    typeof timeout == "number" && (clearTimeout(timeout), timeout = null, flush = null);
  }, debounced.flush = () => {
    flush?.();
  }, Object.defineProperty(debounced, "pending", {
    get: () => typeof timeout == "number"
  }), debounced;
}

// https://deno.land/std@0.170.0/async/retry.ts
var RetryError = class extends Error {
  constructor(cause, count2) {
    super(`Exceeded max retry count (${count2})`), this.name = "RetryError", this.cause = cause;
  }
}, defaultRetryOptions = {
  multiplier: 2,
  maxTimeout: 6e4,
  maxAttempts: 5,
  minTimeout: 1e3
};
async function retry(fn, opts) {
  let options2 = {
    ...defaultRetryOptions,
    ...opts
  };
  if (options2.maxTimeout >= 0 && options2.minTimeout > options2.maxTimeout)
    throw new RangeError("minTimeout is greater than maxTimeout");
  let timeout = options2.minTimeout, error;
  for (let i2 = 0; i2 < options2.maxAttempts; i2++)
    try {
      return await fn();
    } catch (err) {
      await new Promise((r) => setTimeout(r, timeout)), timeout *= options2.multiplier, timeout = Math.max(timeout, options2.minTimeout), options2.maxTimeout >= 0 && (timeout = Math.min(timeout, options2.maxTimeout)), error = err;
    }
  throw new RetryError(error, options2.maxAttempts);
}

// https://esm.sh/v111/memoize-one@6.0.0/deno/memoize-one.js
var s = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};

// https://esm.sh/v111/lodash.throttle@4.1.1/deno/lodash.throttle.js
var __global$ = globalThis || (typeof window < "u" ? window : self), P = Object.create, I = Object.defineProperty, D = Object.getOwnPropertyDescriptor, G = Object.getOwnPropertyNames, H = Object.getPrototypeOf, U = Object.prototype.hasOwnProperty, X = (e, t3) => () => (t3 || e((t3 = { exports: {} }).exports, t3), t3.exports), q = (e, t3) => {
  for (var n2 in t3)
    I(e, n2, { get: t3[n2], enumerable: !0 });
}, v = (e, t3, n2, f3) => {
  if (t3 && typeof t3 == "object" || typeof t3 == "function")
    for (let i2 of G(t3))
      !U.call(e, i2) && i2 !== n2 && I(e, i2, { get: () => t3[i2], enumerable: !(f3 = D(t3, i2)) || f3.enumerable });
  return e;
}, s2 = (e, t3, n2) => (v(e, t3, "default"), n2 && v(n2, t3, "default")), L = (e, t3, n2) => (n2 = e != null ? P(H(e)) : {}, v(t3 || !e || !e.__esModule ? I(n2, "default", { value: e, enumerable: !0 }) : n2, e)), h = X((ge, N6) => {
  var M5 = "Expected a function", W4 = NaN, z5 = "[object Symbol]", J4 = /^\s+|\s+$/g, K4 = /^[-+]0x[0-9a-f]+$/i, Q4 = /^0b[01]+$/i, V5 = /^0o[0-7]+$/i, Y3 = parseInt, Z3 = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, w4 = typeof self == "object" && self && self.Object === Object && self, ee2 = Z3 || w4 || Function("return this")(), te = Object.prototype, ne2 = te.toString, re2 = Math.max, ie = Math.min, O4 = function() {
    return ee2.Date.now();
  };
  function fe(e, t3, n2) {
    var f3, i2, b4, l2, a3, u2, d5 = 0, S6 = !1, g5 = !1, T4 = !0;
    if (typeof e != "function")
      throw new TypeError(M5);
    t3 = C5(t3) || 0, p4(n2) && (S6 = !!n2.leading, g5 = "maxWait" in n2, b4 = g5 ? re2(C5(n2.maxWait) || 0, t3) : b4, T4 = "trailing" in n2 ? !!n2.trailing : T4);
    function j5(r) {
      var o2 = f3, m4 = i2;
      return f3 = i2 = void 0, d5 = r, l2 = e.apply(m4, o2), l2;
    }
    function A4(r) {
      return d5 = r, a3 = setTimeout(y2, t3), S6 ? j5(r) : l2;
    }
    function B7(r) {
      var o2 = r - u2, m4 = r - d5, k3 = t3 - o2;
      return g5 ? ie(k3, b4 - m4) : k3;
    }
    function E3(r) {
      var o2 = r - u2, m4 = r - d5;
      return u2 === void 0 || o2 >= t3 || o2 < 0 || g5 && m4 >= b4;
    }
    function y2() {
      var r = O4();
      if (E3(r))
        return _3(r);
      a3 = setTimeout(y2, B7(r));
    }
    function _3(r) {
      return a3 = void 0, T4 && f3 ? j5(r) : (f3 = i2 = void 0, l2);
    }
    function F5() {
      a3 !== void 0 && clearTimeout(a3), d5 = 0, f3 = u2 = i2 = a3 = void 0;
    }
    function R5() {
      return a3 === void 0 ? l2 : _3(O4());
    }
    function x4() {
      var r = O4(), o2 = E3(r);
      if (f3 = arguments, i2 = this, u2 = r, o2) {
        if (a3 === void 0)
          return A4(u2);
        if (g5)
          return a3 = setTimeout(y2, t3), j5(u2);
      }
      return a3 === void 0 && (a3 = setTimeout(y2, t3)), l2;
    }
    return x4.cancel = F5, x4.flush = R5, x4;
  }
  function ae(e, t3, n2) {
    var f3 = !0, i2 = !0;
    if (typeof e != "function")
      throw new TypeError(M5);
    return p4(n2) && (f3 = "leading" in n2 ? !!n2.leading : f3, i2 = "trailing" in n2 ? !!n2.trailing : i2), fe(e, t3, { leading: f3, maxWait: t3, trailing: i2 });
  }
  function p4(e) {
    var t3 = typeof e;
    return !!e && (t3 == "object" || t3 == "function");
  }
  function oe2(e) {
    return !!e && typeof e == "object";
  }
  function ue(e) {
    return typeof e == "symbol" || oe2(e) && ne2.call(e) == z5;
  }
  function C5(e) {
    if (typeof e == "number")
      return e;
    if (ue(e))
      return W4;
    if (p4(e)) {
      var t3 = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = p4(t3) ? t3 + "" : t3;
    }
    if (typeof e != "string")
      return e === 0 ? e : +e;
    e = e.replace(J4, "");
    var n2 = Q4.test(e);
    return n2 || V5.test(e) ? Y3(e.slice(2), n2 ? 2 : 8) : K4.test(e) ? W4 : +e;
  }
  N6.exports = ae;
}), c = {};
q(c, { default: () => se });
var ce = L(h());
s2(c, L(h()));
var { default: $, ...le } = ce, se = $ !== void 0 ? $ : le;

// https://esm.sh/v111/notie@4.3.1/deno/notie.js
var Oe = Object.create, ve = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, De = Object.getOwnPropertyNames, Ie = Object.getPrototypeOf, je = Object.prototype.hasOwnProperty, Ne = (v4, i2) => () => (i2 || v4((i2 = { exports: {} }).exports, i2), i2.exports), Pe = (v4, i2) => {
  for (var l2 in i2)
    ve(v4, l2, { get: i2[l2], enumerable: !0 });
}, me = (v4, i2, l2, x4) => {
  if (i2 && typeof i2 == "object" || typeof i2 == "function")
    for (let b4 of De(i2))
      !je.call(v4, b4) && b4 !== l2 && ve(v4, b4, { get: () => i2[b4], enumerable: !(x4 = Ae(i2, b4)) || x4.enumerable });
  return v4;
}, X2 = (v4, i2, l2) => (me(v4, i2, "default"), l2 && me(l2, i2, "default")), ke = (v4, i2, l2) => (l2 = v4 != null ? Oe(Ie(v4)) : {}, me(i2 || !v4 || !v4.__esModule ? ve(l2, "default", { value: v4, enumerable: !0 }) : l2, v4)), xe = Ne((oe2, be) => {
  (function(v4, i2) {
    typeof oe2 == "object" && typeof be == "object" ? be.exports = i2() : typeof define == "function" && define.amd ? define([], i2) : typeof oe2 == "object" ? oe2.notie = i2() : v4.notie = i2();
  })(oe2, function() {
    return function(v4) {
      function i2(x4) {
        if (l2[x4])
          return l2[x4].exports;
        var b4 = l2[x4] = { i: x4, l: !1, exports: {} };
        return v4[x4].call(b4.exports, b4, b4.exports, i2), b4.l = !0, b4.exports;
      }
      var l2 = {};
      return i2.m = v4, i2.c = l2, i2.i = function(x4) {
        return x4;
      }, i2.d = function(x4, b4, re2) {
        i2.o(x4, b4) || Object.defineProperty(x4, b4, { configurable: !1, enumerable: !0, get: re2 });
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
    }([function(v4, i2) {
      v4.exports = function(l2) {
        return l2.webpackPolyfill || (l2.deprecate = function() {
        }, l2.paths = [], l2.children || (l2.children = []), Object.defineProperty(l2, "loaded", { enumerable: !0, get: function() {
          return l2.l;
        } }), Object.defineProperty(l2, "id", { enumerable: !0, get: function() {
          return l2.i;
        } }), l2.webpackPolyfill = 1), l2;
      };
    }, function(v4, i2, l2) {
      "use strict";
      (function(x4) {
        var b4, re2, de, $5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A4) {
          return typeof A4;
        } : function(A4) {
          return A4 && typeof Symbol == "function" && A4.constructor === Symbol && A4 !== Symbol.prototype ? "symbol" : typeof A4;
        };
        (function(A4, p4) {
          $5(i2) === "object" && $5(x4) === "object" ? x4.exports = p4() : (re2 = [], b4 = p4, de = typeof b4 == "function" ? b4.apply(i2, re2) : b4, de !== void 0 && (x4.exports = de));
        })(void 0, function() {
          return function(A4) {
            function p4(g5) {
              if (ee2[g5])
                return ee2[g5].exports;
              var T4 = ee2[g5] = { i: g5, l: !1, exports: {} };
              return A4[g5].call(T4.exports, T4, T4.exports, p4), T4.l = !0, T4.exports;
            }
            var ee2 = {};
            return p4.m = A4, p4.c = ee2, p4.i = function(g5) {
              return g5;
            }, p4.d = function(g5, T4, J4) {
              p4.o(g5, T4) || Object.defineProperty(g5, T4, { configurable: !1, enumerable: !0, get: J4 });
            }, p4.n = function(g5) {
              var T4 = g5 && g5.__esModule ? function() {
                return g5.default;
              } : function() {
                return g5;
              };
              return p4.d(T4, "a", T4), T4;
            }, p4.o = function(g5, T4) {
              return Object.prototype.hasOwnProperty.call(g5, T4);
            }, p4.p = "", p4(p4.s = 0);
          }([function(A4, p4, ee2) {
            function g5(t3, o2) {
              var s4 = {};
              for (var u2 in t3)
                o2.indexOf(u2) >= 0 || Object.prototype.hasOwnProperty.call(t3, u2) && (s4[u2] = t3[u2]);
              return s4;
            }
            Object.defineProperty(p4, "__esModule", { value: !0 });
            var T4 = typeof Symbol == "function" && $5(Symbol.iterator) === "symbol" ? function(t3) {
              return typeof t3 > "u" ? "undefined" : $5(t3);
            } : function(t3) {
              return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3 > "u" ? "undefined" : $5(t3);
            }, J4 = Object.assign || function(t3) {
              for (var o2 = 1; o2 < arguments.length; o2++) {
                var s4 = arguments[o2];
                for (var u2 in s4)
                  Object.prototype.hasOwnProperty.call(s4, u2) && (t3[u2] = s4[u2]);
              }
              return t3;
            }, R5 = { top: "top", bottom: "bottom" }, e = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: R5.top, force: R5.top, confirm: R5.top, input: R5.top, select: R5.bottom, date: R5.top } }, Ee = p4.setOptions = function(t3) {
              e = J4({}, e, t3, { classes: J4({}, e.classes, t3.classes), ids: J4({}, e.ids, t3.ids), positions: J4({}, e.positions, t3.positions) });
            }, ye = function() {
              return new Promise(function(t3) {
                return setTimeout(t3, 0);
              });
            }, le2 = function(t3) {
              return new Promise(function(o2) {
                return setTimeout(o2, 1e3 * t3);
              });
            }, W4 = function() {
              document.activeElement && document.activeElement.blur();
            }, K4 = function() {
              var t3 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o2) {
                var s4 = 16 * Math.random() | 0, u2 = o2 === "x" ? s4 : 3 & s4 | 8;
                return u2.toString(16);
              });
              return "notie-" + t3;
            }, ue = { 1: e.classes.backgroundSuccess, success: e.classes.backgroundSuccess, 2: e.classes.backgroundWarning, warning: e.classes.backgroundWarning, 3: e.classes.backgroundError, error: e.classes.backgroundError, 4: e.classes.backgroundInfo, info: e.classes.backgroundInfo, 5: e.classes.backgroundNeutral, neutral: e.classes.backgroundNeutral }, Le = function() {
              return e.transitionSelector + " " + e.transitionDuration + "s " + e.transitionCurve;
            }, te = function(t3) {
              return t3.keyCode === 13;
            }, ne2 = function(t3) {
              return t3.keyCode === 27;
            }, Z3 = function(t3, o2) {
              t3.classList.add(e.classes.container), t3.style[o2] = "-10000px", document.body.appendChild(t3), t3.style[o2] = "-" + t3.offsetHeight + "px", t3.listener && window.addEventListener("keydown", t3.listener), ye().then(function() {
                t3.style.transition = Le(), t3.style[o2] = 0;
              });
            }, O4 = function(t3, o2) {
              var s4 = document.getElementById(t3);
              s4 && (s4.style[o2] = "-" + s4.offsetHeight + "px", s4.listener && window.removeEventListener("keydown", s4.listener), le2(e.transitionDuration).then(function() {
                s4.parentNode && s4.parentNode.removeChild(s4);
              }));
            }, se2 = function(t3, o2) {
              var s4 = document.createElement("div");
              s4.id = e.ids.overlay, s4.classList.add(e.classes.overlay), s4.classList.add(e.classes.backgroundOverlay), s4.style.opacity = 0, t3 && e.overlayClickDismiss && (s4.onclick = function() {
                O4(t3.id, o2), j5();
              }), document.body.appendChild(s4), ye().then(function() {
                s4.style.transition = Le(), s4.style.opacity = e.overlayOpacity;
              });
            }, j5 = function() {
              var t3 = document.getElementById(e.ids.overlay);
              t3.style.opacity = 0, le2(e.transitionDuration).then(function() {
                t3.parentNode && t3.parentNode.removeChild(t3);
              });
            }, F5 = p4.hideAlerts = function(t3) {
              var o2 = document.getElementsByClassName(e.classes.alert);
              if (o2.length) {
                for (var s4 = 0; s4 < o2.length; s4++) {
                  var u2 = o2[s4];
                  O4(u2.id, u2.position);
                }
                t3 && le2(e.transitionDuration).then(function() {
                  return t3();
                });
              }
            }, Te = p4.alert = function(t3) {
              var o2 = t3.type, s4 = o2 === void 0 ? 4 : o2, u2 = t3.text, c3 = t3.time, k3 = c3 === void 0 ? e.alertTime : c3, H5 = t3.stay, S6 = H5 !== void 0 && H5, h2 = t3.position, f3 = h2 === void 0 ? e.positions.alert || f3.top : h2;
              W4(), F5();
              var d5 = document.createElement("div"), m4 = K4();
              d5.id = m4, d5.position = f3, d5.classList.add(e.classes.textbox), d5.classList.add(ue[s4]), d5.classList.add(e.classes.alert), d5.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>", d5.onclick = function() {
                return O4(m4, f3);
              }, d5.listener = function(n2) {
                (te(n2) || ne2(n2)) && F5();
              }, Z3(d5, f3), k3 && k3 < 1 && (k3 = 1), !S6 && k3 && le2(k3).then(function() {
                return O4(m4, f3);
              });
            }, Me = p4.force = function(t3, o2) {
              var s4 = t3.type, u2 = s4 === void 0 ? 5 : s4, c3 = t3.text, k3 = t3.buttonText, H5 = k3 === void 0 ? "OK" : k3, S6 = t3.callback, h2 = t3.position, f3 = h2 === void 0 ? e.positions.force || f3.top : h2;
              W4(), F5();
              var d5 = document.createElement("div"), m4 = K4();
              d5.id = m4;
              var n2 = document.createElement("div");
              n2.classList.add(e.classes.textbox), n2.classList.add(e.classes.backgroundInfo), n2.innerHTML = '<div class="' + e.classes.textboxInner + '">' + c3 + "</div>";
              var r = document.createElement("div");
              r.classList.add(e.classes.button), r.classList.add(ue[u2]), r.innerHTML = H5, r.onclick = function() {
                O4(m4, f3), j5(), S6 ? S6() : o2 && o2();
              }, d5.appendChild(n2), d5.appendChild(r), d5.listener = function(C5) {
                te(C5) && r.click();
              }, Z3(d5, f3), se2();
            }, He = p4.confirm = function(t3, o2, s4) {
              var u2 = t3.text, c3 = t3.submitText, k3 = c3 === void 0 ? "Yes" : c3, H5 = t3.cancelText, S6 = H5 === void 0 ? "Cancel" : H5, h2 = t3.submitCallback, f3 = t3.cancelCallback, d5 = t3.position, m4 = d5 === void 0 ? e.positions.confirm || m4.top : d5;
              W4(), F5();
              var n2 = document.createElement("div"), r = K4();
              n2.id = r;
              var C5 = document.createElement("div");
              C5.classList.add(e.classes.textbox), C5.classList.add(e.classes.backgroundInfo), C5.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>";
              var y2 = document.createElement("div");
              y2.classList.add(e.classes.button), y2.classList.add(e.classes.elementHalf), y2.classList.add(e.classes.backgroundSuccess), y2.innerHTML = k3, y2.onclick = function() {
                O4(r, m4), j5(), h2 ? h2() : o2 && o2();
              };
              var a3 = document.createElement("div");
              a3.classList.add(e.classes.button), a3.classList.add(e.classes.elementHalf), a3.classList.add(e.classes.backgroundError), a3.innerHTML = S6, a3.onclick = function() {
                O4(r, m4), j5(), f3 ? f3() : s4 && s4();
              }, n2.appendChild(C5), n2.appendChild(y2), n2.appendChild(a3), n2.listener = function(E3) {
                te(E3) ? y2.click() : ne2(E3) && a3.click();
              }, Z3(n2, m4), se2(n2, m4);
            }, ge = function(t3, o2, s4) {
              var u2 = t3.text, c3 = t3.submitText, k3 = c3 === void 0 ? "Submit" : c3, H5 = t3.cancelText, S6 = H5 === void 0 ? "Cancel" : H5, h2 = t3.submitCallback, f3 = t3.cancelCallback, d5 = t3.position, m4 = d5 === void 0 ? e.positions.input || m4.top : d5, n2 = g5(t3, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
              W4(), F5();
              var r = document.createElement("div"), C5 = K4();
              r.id = C5;
              var y2 = document.createElement("div");
              y2.classList.add(e.classes.textbox), y2.classList.add(e.classes.backgroundInfo), y2.innerHTML = '<div class="' + e.classes.textboxInner + '">' + u2 + "</div>";
              var a3 = document.createElement("input");
              a3.classList.add(e.classes.inputField), a3.setAttribute("autocapitalize", n2.autocapitalize || "none"), a3.setAttribute("autocomplete", n2.autocomplete || "off"), a3.setAttribute("autocorrect", n2.autocorrect || "off"), a3.setAttribute("autofocus", n2.autofocus || "true"), a3.setAttribute("inputmode", n2.inputmode || "verbatim"), a3.setAttribute("max", n2.max || ""), a3.setAttribute("maxlength", n2.maxlength || ""), a3.setAttribute("min", n2.min || ""), a3.setAttribute("minlength", n2.minlength || ""), a3.setAttribute("placeholder", n2.placeholder || ""), a3.setAttribute("spellcheck", n2.spellcheck || "default"), a3.setAttribute("step", n2.step || "any"), a3.setAttribute("type", n2.type || "text"), a3.value = n2.value || "", n2.allowed && (a3.oninput = function() {
                var M5 = void 0;
                if (Array.isArray(n2.allowed)) {
                  for (var w4 = "", _3 = n2.allowed, P6 = 0; P6 < _3.length; P6++)
                    _3[P6] === "an" ? w4 += "0-9a-zA-Z" : _3[P6] === "a" ? w4 += "a-zA-Z" : _3[P6] === "n" && (w4 += "0-9"), _3[P6] === "s" && (w4 += " ");
                  M5 = new RegExp("[^" + w4 + "]", "g");
                } else
                  T4(n2.allowed) === "object" && (M5 = n2.allowed);
                a3.value = a3.value.replace(M5, "");
              });
              var E3 = document.createElement("div");
              E3.classList.add(e.classes.button), E3.classList.add(e.classes.elementHalf), E3.classList.add(e.classes.backgroundSuccess), E3.innerHTML = k3, E3.onclick = function() {
                O4(C5, m4), j5(), h2 ? h2(a3.value) : o2 && o2(a3.value);
              };
              var D7 = document.createElement("div");
              D7.classList.add(e.classes.button), D7.classList.add(e.classes.elementHalf), D7.classList.add(e.classes.backgroundError), D7.innerHTML = S6, D7.onclick = function() {
                O4(C5, m4), j5(), f3 ? f3(a3.value) : s4 && s4(a3.value);
              }, r.appendChild(y2), r.appendChild(a3), r.appendChild(E3), r.appendChild(D7), r.listener = function(M5) {
                te(M5) ? E3.click() : ne2(M5) && D7.click();
              }, Z3(r, m4), a3.focus(), se2(r, m4);
            };
            p4.input = ge;
            var Se = p4.select = function(t3, o2) {
              var s4 = t3.text, u2 = t3.cancelText, c3 = u2 === void 0 ? "Cancel" : u2, k3 = t3.cancelCallback, H5 = t3.choices, S6 = t3.position, h2 = S6 === void 0 ? e.positions.select || h2.top : S6;
              W4(), F5();
              var f3 = document.createElement("div"), d5 = K4();
              f3.id = d5;
              var m4 = document.createElement("div");
              m4.classList.add(e.classes.textbox), m4.classList.add(e.classes.backgroundInfo), m4.innerHTML = '<div class="' + e.classes.textboxInner + '">' + s4 + "</div>", f3.appendChild(m4), H5.forEach(function(r, C5) {
                var y2 = r.type, a3 = y2 === void 0 ? 1 : y2, E3 = r.text, D7 = r.handler, M5 = document.createElement("div");
                M5.classList.add(ue[a3]), M5.classList.add(e.classes.button), M5.classList.add(e.classes.selectChoice);
                var w4 = H5[C5 + 1];
                w4 && !w4.type && (w4.type = 1), w4 && w4.type === a3 && M5.classList.add(e.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                  O4(d5, h2), j5(), D7();
                }, f3.appendChild(M5);
              });
              var n2 = document.createElement("div");
              n2.classList.add(e.classes.backgroundNeutral), n2.classList.add(e.classes.button), n2.innerHTML = c3, n2.onclick = function() {
                O4(d5, h2), j5(), k3 ? k3() : o2 && o2();
              }, f3.appendChild(n2), f3.listener = function(r) {
                ne2(r) && n2.click();
              }, Z3(f3, h2), se2(f3, h2);
            }, we = p4.date = function(t3, o2, s4) {
              var u2 = t3.value, c3 = u2 === void 0 ? /* @__PURE__ */ new Date() : u2, k3 = t3.submitText, H5 = k3 === void 0 ? "OK" : k3, S6 = t3.cancelText, h2 = S6 === void 0 ? "Cancel" : S6, f3 = t3.submitCallback, d5 = t3.cancelCallback, m4 = t3.position, n2 = m4 === void 0 ? e.positions.date || n2.top : m4;
              W4(), F5();
              var r = "&#9662", C5 = document.createElement("div"), y2 = document.createElement("div"), a3 = document.createElement("div"), E3 = function(L6) {
                C5.innerHTML = e.dateMonths[L6.getMonth()], y2.innerHTML = L6.getDate(), a3.innerHTML = L6.getFullYear();
              }, D7 = function(L6) {
                var N6 = new Date(c3.getFullYear(), c3.getMonth() + 1, 0).getDate(), V5 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                Number(V5) > N6 && (V5 = N6.toString()), L6.target.textContent = V5, Number(V5) < 1 && (V5 = "1"), c3.setDate(Number(V5));
              }, M5 = function(L6) {
                var N6 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                L6.target.textContent = N6, c3.setFullYear(Number(N6));
              }, w4 = function(L6) {
                E3(c3);
              }, _3 = function(L6) {
                var N6 = new Date(c3.getFullYear(), c3.getMonth() + L6 + 1, 0).getDate();
                c3.getDate() > N6 && c3.setDate(N6), c3.setMonth(c3.getMonth() + L6), E3(c3);
              }, P6 = function(L6) {
                c3.setDate(c3.getDate() + L6), E3(c3);
              }, he = function(L6) {
                var N6 = c3.getFullYear() + L6;
                N6 < 0 ? c3.setFullYear(0) : c3.setFullYear(c3.getFullYear() + L6), E3(c3);
              }, Y3 = document.createElement("div"), pe = K4();
              Y3.id = pe;
              var fe = document.createElement("div");
              fe.classList.add(e.classes.backgroundInfo);
              var I4 = document.createElement("div");
              I4.classList.add(e.classes.dateSelectorInner);
              var q6 = document.createElement("div");
              q6.classList.add(e.classes.button), q6.classList.add(e.classes.elementThird), q6.classList.add(e.classes.dateSelectorUp), q6.innerHTML = r;
              var G5 = document.createElement("div");
              G5.classList.add(e.classes.button), G5.classList.add(e.classes.elementThird), G5.classList.add(e.classes.dateSelectorUp), G5.innerHTML = r;
              var Q4 = document.createElement("div");
              Q4.classList.add(e.classes.button), Q4.classList.add(e.classes.elementThird), Q4.classList.add(e.classes.dateSelectorUp), Q4.innerHTML = r, C5.classList.add(e.classes.element), C5.classList.add(e.classes.elementThird), C5.innerHTML = e.dateMonths[c3.getMonth()], y2.classList.add(e.classes.element), y2.classList.add(e.classes.elementThird), y2.setAttribute("contentEditable", !0), y2.addEventListener("input", D7), y2.addEventListener("blur", w4), y2.innerHTML = c3.getDate(), a3.classList.add(e.classes.element), a3.classList.add(e.classes.elementThird), a3.setAttribute("contentEditable", !0), a3.addEventListener("input", M5), a3.addEventListener("blur", w4), a3.innerHTML = c3.getFullYear();
              var ae = document.createElement("div");
              ae.classList.add(e.classes.button), ae.classList.add(e.classes.elementThird), ae.innerHTML = r;
              var ie = document.createElement("div");
              ie.classList.add(e.classes.button), ie.classList.add(e.classes.elementThird), ie.innerHTML = r;
              var ce3 = document.createElement("div");
              ce3.classList.add(e.classes.button), ce3.classList.add(e.classes.elementThird), ce3.innerHTML = r, q6.onclick = function() {
                return _3(1);
              }, G5.onclick = function() {
                return P6(1);
              }, Q4.onclick = function() {
                return he(1);
              }, ae.onclick = function() {
                return _3(-1);
              }, ie.onclick = function() {
                return P6(-1);
              }, ce3.onclick = function() {
                return he(-1);
              };
              var z5 = document.createElement("div");
              z5.classList.add(e.classes.button), z5.classList.add(e.classes.elementHalf), z5.classList.add(e.classes.backgroundSuccess), z5.innerHTML = H5, z5.onclick = function() {
                O4(pe, n2), j5(), f3 ? f3(c3) : o2 && o2(c3);
              };
              var U5 = document.createElement("div");
              U5.classList.add(e.classes.button), U5.classList.add(e.classes.elementHalf), U5.classList.add(e.classes.backgroundError), U5.innerHTML = h2, U5.onclick = function() {
                O4(pe, n2), j5(), d5 ? d5(c3) : s4 && s4(c3);
              }, I4.appendChild(q6), I4.appendChild(G5), I4.appendChild(Q4), I4.appendChild(C5), I4.appendChild(y2), I4.appendChild(a3), I4.appendChild(ae), I4.appendChild(ie), I4.appendChild(ce3), fe.appendChild(I4), Y3.appendChild(fe), Y3.appendChild(z5), Y3.appendChild(U5), Y3.listener = function(L6) {
                te(L6) ? z5.click() : ne2(L6) && U5.click();
              }, Z3(Y3, n2), se2(Y3, n2);
            };
            p4.default = { alert: Te, force: Me, confirm: He, input: ge, select: Se, date: we, setOptions: Ee, hideAlerts: F5 };
          }]);
        });
      }).call(i2, l2(0)(v4));
    }]);
  });
}), B = {};
Pe(B, { default: () => Ye });
var Fe = ke(xe());
X2(B, ke(xe()));
var { default: Ce, ..._e } = Fe, Ye = Ce !== void 0 ? Ce : _e;

// https://esm.sh/v111/nanostores@0.7.4/deno/nanostores.js
var S = Symbol("clean");
var m = Symbol();

// https://esm.sh/v111/@nanostores/i18n@0.7.1/deno/i18n.js
function g(r, n2) {
  if (typeof r == "string")
    return n2(r);
  {
    let e = {};
    for (let t3 in r)
      e[t3] = g(r[t3], n2);
    return e;
  }
}
function p(r) {
  return (n2) => {
    if (n2.transform) {
      let e = n2.transform;
      return n2 = n2.input, { input: n2, transform(t3, o2, s4) {
        let f3 = r(t3, o2, ...s4);
        return (...l2) => e(t3, f3, l2);
      } };
    } else
      return { input: n2, transform(e, t3, o2) {
        return r(e, t3, ...o2);
      } };
  };
}
var N = p((r, n2, e) => g(n2, (t3) => {
  for (let o2 in e)
    t3 = t3.replace(new RegExp(`{${o2}}`, "g"), e[o2]);
  return t3;
})), R = p((r, n2, e) => {
  let t3 = new Intl.PluralRules(r).select(e);
  return t3 in n2 || (t3 = "many"), g(n2[t3], (o2) => o2.replace(/{count}/g, e));
});

// https://esm.sh/v111/hotkeys-js@3.10.1/deno/hotkeys-js.js
var M = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function P2(e, t3, i2, r) {
  e.addEventListener ? e.addEventListener(t3, i2, r) : e.attachEvent && e.attachEvent("on".concat(t3), function() {
    i2(window.event);
  });
}
function T(e, t3) {
  for (var i2 = t3.slice(0, t3.length - 1), r = 0; r < i2.length; r++)
    i2[r] = e[i2[r].toLowerCase()];
  return i2;
}
function U2(e) {
  typeof e != "string" && (e = ""), e = e.replace(/\s/g, "");
  for (var t3 = e.split(","), i2 = t3.lastIndexOf(""); i2 >= 0; )
    t3[i2 - 1] += ",", t3.splice(i2, 1), i2 = t3.lastIndexOf("");
  return t3;
}
function G2(e, t3) {
  for (var i2 = e.length >= t3.length ? e : t3, r = e.length >= t3.length ? t3 : e, n2 = !0, a3 = 0; a3 < i2.length; a3++)
    r.indexOf(i2[a3]) === -1 && (n2 = !1);
  return n2;
}
var b = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M ? 173 : 189, "=": M ? 61 : 187, ";": M ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g2 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L2 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u = { 16: !1, 18: !1, 17: !1, 91: !1 }, s3 = {};
for (O = 1; O < 20; O++)
  b["f".concat(O)] = 111 + O;
var O, f = [], A = !1, D2 = "all", H2 = [], C = function(t3) {
  return b[t3.toLowerCase()] || g2[t3.toLowerCase()] || t3.toUpperCase().charCodeAt(0);
}, R2 = function(t3) {
  return Object.keys(b).find(function(i2) {
    return b[i2] === t3;
  });
}, V = function(t3) {
  return Object.keys(g2).find(function(i2) {
    return g2[i2] === t3;
  });
};
function F(e) {
  D2 = e || "all";
}
function E() {
  return D2 || "all";
}
function X3() {
  return f.slice(0);
}
function $2() {
  return f.map(function(e) {
    return R2(e) || V(e) || String.fromCharCode(e);
  });
}
function q2(e) {
  var t3 = e.target || e.srcElement, i2 = t3.tagName, r = !0;
  return (t3.isContentEditable || (i2 === "INPUT" || i2 === "TEXTAREA" || i2 === "SELECT") && !t3.readOnly) && (r = !1), r;
}
function z2(e) {
  return typeof e == "string" && (e = C(e)), f.indexOf(e) !== -1;
}
function J(e, t3) {
  var i2, r;
  e || (e = E());
  for (var n2 in s3)
    if (Object.prototype.hasOwnProperty.call(s3, n2))
      for (i2 = s3[n2], r = 0; r < i2.length; )
        i2[r].scope === e ? i2.splice(r, 1) : r++;
  E() === e && F(t3 || "all");
}
function N2(e) {
  var t3 = e.keyCode || e.which || e.charCode, i2 = f.indexOf(t3);
  if (i2 >= 0 && f.splice(i2, 1), e.key && e.key.toLowerCase() === "meta" && f.splice(0, f.length), (t3 === 93 || t3 === 224) && (t3 = 91), t3 in u) {
    u[t3] = !1;
    for (var r in g2)
      g2[r] === t3 && (v2[r] = !1);
  }
}
function Q(e) {
  if (typeof e > "u")
    Object.keys(s3).forEach(function(o2) {
      return delete s3[o2];
    });
  else if (Array.isArray(e))
    e.forEach(function(o2) {
      o2.key && S2(o2);
    });
  else if (typeof e == "object")
    e.key && S2(e);
  else if (typeof e == "string") {
    for (var t3 = arguments.length, i2 = new Array(t3 > 1 ? t3 - 1 : 0), r = 1; r < t3; r++)
      i2[r - 1] = arguments[r];
    var n2 = i2[0], a3 = i2[1];
    typeof n2 == "function" && (a3 = n2, n2 = ""), S2({ key: e, scope: n2, method: a3, splitKey: "+" });
  }
}
var S2 = function(t3) {
  var i2 = t3.key, r = t3.scope, n2 = t3.method, a3 = t3.splitKey, o2 = a3 === void 0 ? "+" : a3, l2 = U2(i2);
  l2.forEach(function(c3) {
    var p4 = c3.split(o2), m4 = p4.length, y2 = p4[m4 - 1], d5 = y2 === "*" ? "*" : C(y2);
    if (s3[d5]) {
      r || (r = E());
      var K4 = m4 > 1 ? T(g2, p4) : [];
      s3[d5] = s3[d5].filter(function(h2) {
        var w4 = n2 ? h2.method === n2 : !0;
        return !(w4 && h2.scope === r && G2(h2.mods, K4));
      });
    }
  });
};
function _(e, t3, i2, r) {
  if (t3.element === r) {
    var n2;
    if (t3.scope === i2 || t3.scope === "all") {
      n2 = t3.mods.length > 0;
      for (var a3 in u)
        Object.prototype.hasOwnProperty.call(u, a3) && (!u[a3] && t3.mods.indexOf(+a3) > -1 || u[a3] && t3.mods.indexOf(+a3) === -1) && (n2 = !1);
      (t3.mods.length === 0 && !u[16] && !u[18] && !u[17] && !u[91] || n2 || t3.shortcut === "*") && t3.method(e, t3) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0));
    }
  }
}
function k(e, t3) {
  var i2 = s3["*"], r = e.keyCode || e.which || e.charCode;
  if (v2.filter.call(this, e)) {
    if ((r === 93 || r === 224) && (r = 91), f.indexOf(r) === -1 && r !== 229 && f.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h2) {
      var w4 = L2[h2];
      e[h2] && f.indexOf(w4) === -1 ? f.push(w4) : !e[h2] && f.indexOf(w4) > -1 ? f.splice(f.indexOf(w4), 1) : h2 === "metaKey" && e[h2] && f.length === 3 && (e.ctrlKey || e.shiftKey || e.altKey || (f = f.slice(f.indexOf(w4))));
    }), r in u) {
      u[r] = !0;
      for (var n2 in g2)
        g2[n2] === r && (v2[n2] = !0);
      if (!i2)
        return;
    }
    for (var a3 in u)
      Object.prototype.hasOwnProperty.call(u, a3) && (u[a3] = e[L2[a3]]);
    e.getModifierState && !(e.altKey && !e.ctrlKey) && e.getModifierState("AltGraph") && (f.indexOf(17) === -1 && f.push(17), f.indexOf(18) === -1 && f.push(18), u[17] = !0, u[18] = !0);
    var o2 = E();
    if (i2)
      for (var l2 = 0; l2 < i2.length; l2++)
        i2[l2].scope === o2 && (e.type === "keydown" && i2[l2].keydown || e.type === "keyup" && i2[l2].keyup) && _(e, i2[l2], o2, t3);
    if (r in s3) {
      for (var c3 = 0; c3 < s3[r].length; c3++)
        if ((e.type === "keydown" && s3[r][c3].keydown || e.type === "keyup" && s3[r][c3].keyup) && s3[r][c3].key) {
          for (var p4 = s3[r][c3], m4 = p4.splitKey, y2 = p4.key.split(m4), d5 = [], K4 = 0; K4 < y2.length; K4++)
            d5.push(C(y2[K4]));
          d5.sort().join("") === f.sort().join("") && _(e, p4, o2, t3);
        }
    }
  }
}
function W(e) {
  return H2.indexOf(e) > -1;
}
function v2(e, t3, i2) {
  f = [];
  var r = U2(e), n2 = [], a3 = "all", o2 = document, l2 = 0, c3 = !1, p4 = !0, m4 = "+", y2 = !1;
  for (i2 === void 0 && typeof t3 == "function" && (i2 = t3), Object.prototype.toString.call(t3) === "[object Object]" && (t3.scope && (a3 = t3.scope), t3.element && (o2 = t3.element), t3.keyup && (c3 = t3.keyup), t3.keydown !== void 0 && (p4 = t3.keydown), t3.capture !== void 0 && (y2 = t3.capture), typeof t3.splitKey == "string" && (m4 = t3.splitKey)), typeof t3 == "string" && (a3 = t3); l2 < r.length; l2++)
    e = r[l2].split(m4), n2 = [], e.length > 1 && (n2 = T(g2, e)), e = e[e.length - 1], e = e === "*" ? "*" : C(e), e in s3 || (s3[e] = []), s3[e].push({ keyup: c3, keydown: p4, scope: a3, mods: n2, shortcut: r[l2], method: i2, key: r[l2], splitKey: m4, element: o2 });
  typeof o2 < "u" && !W(o2) && window && (H2.push(o2), P2(o2, "keydown", function(d5) {
    k(d5, o2);
  }, y2), A || (A = !0, P2(window, "focus", function() {
    f = [];
  }, y2)), P2(o2, "keyup", function(d5) {
    k(d5, o2), N2(d5);
  }, y2));
}
function Y(e) {
  var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(s3).forEach(function(i2) {
    var r = s3[i2].filter(function(n2) {
      return n2.scope === t3 && n2.shortcut === e;
    });
    r.forEach(function(n2) {
      n2 && n2.method && n2.method();
    });
  });
}
var j = { getPressedKeyString: $2, setScope: F, getScope: E, deleteScope: J, getPressedKeyCodes: X3, isPressed: z2, filter: q2, trigger: Y, unbind: Q, keyMap: b, modifier: g2, modifierMap: L2 };
for (x in j)
  Object.prototype.hasOwnProperty.call(j, x) && (v2[x] = j[x]);
var x;
typeof document < "u" && (B3 = window.hotkeys, v2.noConflict = function(e) {
  return e && window.hotkeys === v2 && (window.hotkeys = B3), v2;
}, window.hotkeys = v2);
var B3;

// https://esm.sh/v111/immersive-translate@1.0.8/deno/immersive-translate.js
var d2 = "Immersive Translate", v3 = class {
  #e = performance.now();
  reset() {
    this.#e = performance.now();
  }
  stop(e) {
    let t3 = performance.now(), n2 = Math.round(t3 - this.#e);
    console.debug(d2 + " TIMING:", e, "in", n2 + "ms"), this.#e = t3;
  }
}, D3 = class {
  #e = 1;
  get level() {
    return this.#e;
  }
  setLevel(e) {
    switch (e) {
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
  debug(...e) {
    this.#e <= 0 && console.log(d2 + " DEBUG:", ...e);
  }
  v(...e) {
    this.#e <= 0 && console.log(d2 + " VERBOSE:", ...e);
  }
  info(...e) {
    this.#e <= 1 && console.log(d2 + " INFO:", ...e);
  }
  l(...e) {
    this.#e <= 1 && console.log(d2 + " TEMP INFO:", ...e);
  }
  warn(...e) {
    this.#e <= 2 && console.warn(d2 + " WARN:", ...e);
  }
  error(...e) {
    this.#e <= 3 && console.error(d2 + " ERROR:", ...e);
  }
  fatal(...e) {
    this.#e <= 4 && console.error(d2 + " FATAL:", ...e);
  }
  timing() {
    return this.level === 0 ? new v3() : { reset: () => {
    }, stop: () => {
    } };
  }
}, E2 = new D3(), L3 = "poegempjloogba", I2 = "ension://", N3 = "me-";
function T2(e) {
  if (!e)
    return [!1, !0];
  let t3 = new Date(e).getTime(), n2 = (/* @__PURE__ */ new Date()).getTime(), o2 = t3 - n2 < 15e3;
  return [t3 - n2 > 3e3, o2];
}
function b2(e) {
  return e ? e.PROD === "1" : !0;
}
function F2(e) {
  return e ? e.MOCK === "1" : !1;
}
function O2(e) {
  return new Promise((t3, n2) => {
    setTimeout(() => {
      t3();
    }, e);
  });
}
var U3 = "rome-ext";
function $3(e, t3) {
  return t3 ? e + (t3 - e % t3) : e;
}
function j2(e, t3) {
  return e.split(t3).length - 1;
}
function P3(e) {
  let t3 = Date.now(), n2 = 1;
  for (let o2 of e)
    n2 += j2(o2, "i");
  return $3(t3, n2);
}
function K(e, t3) {
  return Math.floor(Math.random() * (t3 - e + 1)) + e;
}
var M2 = "extension", z3 = "chro";
function B4() {
  return K(1e6, 1e8);
}
var S3 = "BrowserExt";
function J2(e) {
  return JSON.stringify(e).replace('"method":"', () => {
    let t3 = e;
    return (t3.id + 3) % 13 === 0 || (t3.id + 5) % 29 === 0 ? '"method" : "' : '"method": "';
  });
}
var y = "DeepL", x2 = "ension", V2 = "ch" + U3 + I2 + "cofdb" + L3 + "gkncekinflcnj";
function C2(e) {
  let { contentType: t3, userAgent: n2, url: o2, authorization: r, clientVersion: s4 } = e, i2 = new URL(o2), a3 = new Headers();
  if (a3.append("authority", i2.hostname), a3.append("accept", "*/*"), a3.append("accept-language", "ja"), r && a3.append("authorization", `Bearer ${r}`), a3.append("cache-control", "no-cache"), t3 ? a3.append("content-type", t3) : a3.append("content-type", "application/json; charset=utf-8"), a3.append("origin", V2), a3.append("pragma", "no-cache"), a3.append("referer", "https://www.deepl.com/"), a3.append("sec-fetch-dest", "empty"), a3.append("sec-fetch-mode", "cors"), a3.append("sec-fetch-site", "none"), n2)
    a3.append("user-agent", n2);
  else if (globalThis && globalThis.navigator && globalThis.navigator.userAgent) {
    let p4 = globalThis.navigator.userAgent;
    a3.append("user-agent", `${y}${S3}${x2}/${s4 || "1.1.1"} ${p4}`);
  } else
    a3.append("user-agent", `${y}${S3}${x2}/${s4 || "1.1.1"} Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78`);
  let c3 = {};
  for (let [p4, f3] of a3.entries())
    c3[p4] = f3;
  return c3;
}
function q3(e) {
  let t3 = "1.1.1", { texts: n2, target_lang: o2, source_lang: r } = e, s4 = { jsonrpc: "2.0", method: "LMT_handle_texts", params: { texts: n2.map((a3) => ({ text: a3 })), splitting: "newlines", lang: { target_lang: o2, source_lang_user_selected: r || "auto", preference: { weight: { BG: 119e-5, CS: 0.04360000000000001, DA: 0.007090000000000001, DE: 0.02142, EL: 287e-5, EN: 4.79277, ES: 0.029710000000000004, ET: 0.007300000000000001, FI: 0.013850000000000001, FR: 0.04227, HU: 0.019000000000000003, ID: 423e-5, IT: 0.03592, JA: 453e-5, LT: 0.031700000000000006, LV: 27e-4, NL: 0.02375, PL: 0.044520000000000004, PT: 0.017320000000000002, RO: 0.009040000000000001, RU: 234e-5, SK: 0.04977, SL: 691e-5, SV: 0.0049700000000000005, TR: 0.01076, UK: 201e-5, ZH: 0.004880000000000001 } } }, timestamp: P3(n2) }, id: B4() }, i2 = C2({ url: "https://api.deepl.com/jsonrpc", clientVersion: t3, authorization: e.authorization });
  return { url: `https://api.deepl.com/jsonrpc?client=${z3 + N3 + M2},${t3}`, headers: i2, body: J2(s4), method: "POST" };
}
function G3(e) {
  let t3 = e.split(".");
  if (t3.length <= 1)
    throw new Error("invlaid token");
  let n2 = t3[1];
  if (!n2)
    throw new Error("invalid base64 url token");
  let o2 = n2.replace(/-/g, "+").replace(/_/g, "/"), r = decodeURIComponent(globalThis.atob(o2).split("").map(function(a3) {
    return "%" + ("00" + a3.charCodeAt(0).toString(16)).slice(-2);
  }).join("")), s4 = JSON.parse(r), i2 = new Date(s4.exp * 1e3);
  return { accessToken: e, accessTokenExpiresAt: i2.toISOString() };
}
var g3 = {}, w = {};
async function _2(e, t3) {
  if (!e)
    throw new Error("auth key is required");
  let { state: n2 } = t3, { refreshToken: o2, refreshTokenExpiresAt: r, refreshTokenChecksAt: s4 } = n2, [i2, a3] = T2(r);
  a3 || (a3 = T2(s4)[1]);
  let c3 = { refreshToken: o2, refreshTokenExpiresAt: r, refreshTokenChecksAt: s4 || (/* @__PURE__ */ new Date()).toISOString() };
  i2 || (c3 = await m2(e, t3));
  let [p4, f3] = T2(c3.refreshTokenExpiresAt);
  a3 = f3, a3 || (a3 = T2(c3.refreshTokenChecksAt)[1]);
  let h2 = c3.refreshToken;
  if (g3[h2])
    return new Promise((u2, l2) => {
      g3[h2].push((k3, R5) => {
        k3 ? l2(k3) : u2(R5);
      });
    });
  g3[h2] = [];
  try {
    let u2 = await H3(h2, t3.onFetch), l2 = { state: { ...n2, ...c3, ...u2 }, shouldUpdateRefreshToken: a3 };
    return g3[h2].forEach((k3) => {
      k3(null, l2);
    }), delete g3[h2], l2;
  } catch (u2) {
    throw g3[h2].forEach((l2) => {
      l2(u2);
    }), delete g3[h2], u2;
  }
}
async function m2(e, t3) {
  if (!e)
    throw new Error("auth key is required");
  let { refreshTokenEndpoint: n2, onFetch: o2 } = t3;
  if (w[e])
    return new Promise((r, s4) => {
      w[e].push((i2, a3) => {
        i2 ? s4(i2) : r(a3);
      });
    });
  try {
    w[e] = [];
    let r = new URLSearchParams({ grant_type: "auth_key", auth_key: e }), s4 = new URL("/refresh_token?" + r.toString(), n2), i2 = await o2(s4.toString()), a3 = (/* @__PURE__ */ new Date()).getTime(), c3 = a3 + i2.refresh_token_expires_in * 1e3, p4 = a3 + i2.refresh_token_checks_in * 1e3, f3 = { refreshToken: i2.refresh_token, refreshTokenExpiresAt: new Date(c3).toISOString(), refreshTokenChecksAt: new Date(p4).toISOString() };
    return w[e].forEach((h2) => {
      h2(null, f3);
    }), delete w[e], f3;
  } catch (r) {
    throw w[e].forEach((s4) => {
      s4(r);
    }), delete w[e], r;
  }
}
async function H3(e, t3) {
  if (!e)
    throw new Error("refreshToken is required");
  let n2 = b2(), o2 = F2();
  if (!n2 && !o2) {
    await O2(400);
    let a3 = /* @__PURE__ */ new Date();
    return { accessToken: "test", accessTokenExpiresAt: new Date(a3.getTime() + 1e3 * 5).toISOString() };
  }
  let r = "https://w.deepl.com/oidc/token", s4 = await t3(r, { headers: C2({ url: r, contentType: "application/x-www-form-urlencoded" }), body: `grant_type=refresh_token&refresh_token=${e}`, method: "POST" }), i2 = G3(s4.access_token);
  if (s4.expires_in) {
    let a3 = /* @__PURE__ */ new Date(), c3 = new Date(a3.getTime() + s4.expires_in * 1e3);
    i2.accessTokenExpiresAt = c3.toISOString();
  }
  return i2;
}
async function A2(e, t3, n2) {
  if (!t3)
    throw new Error("body is required");
  let o2 = new URLSearchParams(t3), r = o2.getAll("text");
  if (r.length < 1)
    throw new Error("No text to translate");
  if (W2(r) > 5e3)
    throw new Error("text too long, the max length is 5000 characters.");
  let s4 = o2.get("target_lang");
  if (!s4)
    throw new Error("No target language");
  let i2 = o2.get("source_lang"), a3 = { ...q3({ texts: r, authorization: e, target_lang: s4, source_lang: i2 }), responseType: "raw" }, c3 = b2(), p4 = F2();
  if (!c3 && !p4)
    return await O2(50), { translations: r.map((l2) => ({ text: "mock: " + l2, detected_source_language: "EN" })) };
  let f3 = await n2(a3.url, a3), h2 = JSON.parse(f3.body), u2 = [];
  if (h2.result && h2.result.texts)
    u2 = h2.result.texts.map((l2) => ({ text: l2.text, detected_source_language: h2.result.lang }));
  else
    throw new Error("No response from deepl api");
  return { translations: u2 };
}
function W2(e) {
  let t3 = 0;
  for (let n2 of e)
    t3 += n2.length;
  return t3;
}
async function X4(e) {
  e.body;
  let { url: t3, responseType: n2, ...o2 } = e;
  n2 || (n2 = "json"), o2 = { redirect: "follow", ...o2 };
  let r = await Z(t3, o2);
  if (r.ok && r.status >= 200 && r.status < 400)
    if (n2 === "json") {
      let s4 = await r.json();
      return E2.debug("response", JSON.stringify(s4, null, 2)), s4;
    } else {
      if (n2 === "text")
        return await r.text();
      if (n2 === "raw") {
        let s4 = await r.text(), i2 = Object.fromEntries([...r.headers.entries()]), a3 = r.url;
        return { body: s4, headers: i2, status: r.status, statusText: r.statusText, url: a3 };
      }
    }
  else {
    let s4;
    try {
      s4 = await r.text();
    } catch (i2) {
      E2.error("parse response failed", i2);
    }
    throw new Error(r.status + ": " + r.statusText || " " + s4 || "");
  }
}
async function Z(e, t3) {
  let n2 = 15e3;
  t3 && t3.timeout && (n2 = t3.timeout);
  let o2 = new AbortController(), r = setTimeout(() => o2.abort(), n2), s4 = await fetch(e, { ...t3, signal: o2.signal });
  return clearTimeout(r), s4;
}
var Q2 = class {
  constructor(e, t3) {
    this.state = {}, this.isStateChanged = !1, this.onFetch = (n2, o2) => X4({ url: n2, ...o2 }), this.refreshTokenEndpoint = "https://api.immersivetranslate.com", this.authKey = e, t3 = t3 || {}, t3.state && (this.state = t3.state), t3.onFetch && (this.onFetch = t3.onFetch), t3.refreshTokenEndpoint && (this.refreshTokenEndpoint = t3.refreshTokenEndpoint), t3.onStateChange && (this.onStateChange = t3.onStateChange);
  }
  getState() {
    return this.state;
  }
  getIsStateChanged() {
    let e = this.isStateChanged;
    return this.isStateChanged = !1, e;
  }
  setState(e) {
    this.state = e, this.isStateChanged = !0, this.onStateChange && this.onStateChange(e);
  }
  async translateText(e, t3, n2) {
    await this.updateToken();
    let o2 = new URLSearchParams();
    (Array.isArray(e) ? e : [e]).forEach((s4, i2) => {
      o2.append("text", s4);
    }), t3 && o2.append("source_lang", t3), n2 && o2.append("target_lang", n2);
    let r = await A2(this.state.accessToken, o2.toString(), this.onFetch);
    if (r && r.translations && r.translations.length > 0)
      return Array.isArray(e) ? r.translations.map((s4) => ({ text: s4.text, detectedSourceLanguage: s4.detected_source_language })) : { text: r.translations[0].text, detectedSourceLanguage: r.translations[0].detected_source_language };
    throw new Error("No translation result");
  }
  async translateApi(e) {
    return await this.updateToken(), await A2(this.state.accessToken, e, this.onFetch);
  }
  async forceUpdateRefreshToken() {
    await m2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((e) => {
      this.setState({ ...this.state, ...e });
    });
  }
  onFetchTokenError(e) {
    throw E2.error("onFetchTokenError", e), e && e.message && e.message.indexOf("401") > -1 && this.setState({}), e;
  }
  async updateToken() {
    let { accessTokenExpiresAt: e } = this.state, [t3, n2] = T2(e);
    if (t3)
      n2 && _2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then(({ state: o2, shouldUpdateRefreshToken: r }) => {
        this.setState({ ...this.state, ...o2 }), r && m2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((s4) => {
          this.setState({ ...this.state, ...s4 });
        });
      }).catch((o2) => {
        this.onFetchTokenError(o2);
      });
    else
      try {
        let { state: o2, shouldUpdateRefreshToken: r } = await _2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint });
        this.setState(o2), r && m2(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((s4) => {
          this.setState({ ...this.state, ...s4 });
        }).catch((s4) => {
          console.warn("fetch refresh token error", s4);
        });
      } catch (o2) {
        this.onFetchTokenError(o2);
      }
  }
};

// deps.ts
var toast = Ye.alert;

// log.ts
var Timing = class {
  #t = performance.now();
  reset() {
    this.#t = performance.now();
  }
  stop(message) {
    let now = performance.now(), d5 = Math.round(now - this.#t), cf = colors_exports.green;
    d5 > 1e4 ? cf = colors_exports.red : d5 > 1e3 && (cf = colors_exports.yellow), console.debug(
      colors_exports.dim(brandName + " TIMING:"),
      message,
      "in",
      cf(d5 + "ms")
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

// env.ts
function getEnv() {
  return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : define_process_env_default;
}
var env = getEnv();
function isMonkey() {
  return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
}
function isDeno() {
  return typeof Deno < "u";
}
function isWebOptionsPage() {
  return (
    // @ts-ignore: ok
    typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__ < "u"
  );
}

// utils/iframe.ts
function getIsInIframe() {
  try {
    return globalThis.self !== globalThis.top;
  } catch {
    return !0;
  }
}

// dom/util.ts
var env2 = getEnv(), isProd = env2.PROD === "1", isInUserscript = isMonkey();
function duplicatedElements(root2, array, rule) {
  let allHeaders = root2.querySelectorAll("header"), main3 = root2.querySelectorAll("main"), headers3 = [];
  for (let header of allHeaders)
    main3.length > 0 && main3[0].contains(header) || headers3.push(header);
  for (let i2 = 0; i2 < array.length; i2++) {
    let a3 = array[i2].element;
    for (let j5 = i2 + 1; j5 < array.length; j5++) {
      let b4 = array[j5].element;
      if (a3.contains(b4))
        array.splice(j5, 1), j5--;
      else if (b4.contains(a3)) {
        array.splice(i2, 1), i2--;
        break;
      } else
        a3 === b4 && (array.splice(j5, 1), j5--);
    }
  }
  return array.filter((container) => {
    let element = container.element;
    if (container.reserve)
      return !0;
    let isHeader = !1;
    for (let header of headers3) {
      if (isMatchTags(element.nodeName, ["H1"]))
        continue;
      let h1Container = header.querySelector("h1");
      if (!(h1Container && isValidTextByCount(
        h1Container.textContent || "",
        rule.paragraphMinTextCount,
        rule.paragraphMinWordCount
      )) && (element === header || header.contains(element))) {
        isHeader = !0;
        break;
      }
    }
    return !isHeader;
  }).map((container) => container.element);
}
function getLastHTMLElement(elements) {
  for (let i2 = elements.length - 1; i2 >= 0; i2--) {
    let element = elements[i2].element || elements[i2];
    if (typeof element != "string")
      return element;
  }
  return null;
}
function getHTMLElements(elements) {
  let result = [];
  for (let i2 = elements.length - 1; i2 >= 0; i2--) {
    let element = elements[i2].element || elements[i2];
    (typeof element != "string" || element !== " ") && result.push(element);
  }
  return result;
}
function getFirstHTMLElement(elements) {
  for (let i2 = 0; i2 < elements.length; i2++) {
    let element = elements[i2];
    if (typeof element != "string")
      return element;
  }
  return null;
}
function getWhitespace(nextNode, isPreWhitespace) {
  return nextNode && nextNode.nodeType === Node.TEXT_NODE && nextNode.textContent && nextNode.textContent?.length > 0 ? isPreWhitespace ? nextNode.textContent : " " : null;
}
function getElementsBySelectors(root2, selectors) {
  let elements = [];
  for (let selector of selectors) {
    let nodes = root2.querySelectorAll(selector);
    for (let node of nodes)
      elements.push(node);
  }
  return elements;
}
function isInlineElementByTreeWalker(element, rule) {
  let filterInlineElement = function(node) {
    return node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE ? node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, rule, !0) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  }, treeWalker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_ELEMENT,
    filterInlineElement
  ), isInline = !0;
  for (; treeWalker.nextNode(); ) {
    let node = treeWalker.currentNode;
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (isMarked(
        node,
        sourceInlineElementMarkAttributeName
      )) {
        if (isInline === !0)
          return !0;
        continue;
      }
      if (isMatchTags(node.nodeName, rule.inlineTags))
        return !0;
      if (!isUnknowTag(node, rule))
        return !1;
    }
  }
  return !0;
}
function isInlineElement(element, rule) {
  let inlineTags = rule.inlineTags;
  if (element.nodeType === Node.ELEMENT_NODE)
    if (isMatchTags(element.nodeName, inlineTags) || isUnknowTag(element, rule)) {
      if (isMarked(
        element,
        sourceBlockElementMarkAttributeName
      ) || isMatchTags(element.nodeName, ["BR"]))
        return !1;
      if (isMarked(element, sourceInlineElementMarkAttributeName))
        return !0;
      if (isUnknowTag(element, rule)) {
        let style = globalThis.getComputedStyle(element);
        if (style.display === "block" || style.display === "flex")
          return !1;
      }
      return isInlineElementByTreeWalker(element, rule);
    } else
      return isMarked(
        element,
        sourceInlineElementMarkAttributeName
      );
  return !1;
}
function isDuplicateElement(element, elements) {
  for (let e of elements)
    if (e === element)
      return !0;
  return !1;
}
function isMetaElement(element, rule) {
  return !!isMatchTags(element.nodeName, rule.metaTags);
}
function isExcludeElement(element, rule, includeStayElements) {
  if (!(element.nodeType === Node.ELEMENT_NODE || element.nodeType === Node.TEXT_NODE) || element.nodeType === Node.ELEMENT_NODE && isMarked(element, sourceElementExcludeAttributeName, !0))
    return !0;
  if (element.nodeType === Node.ELEMENT_NODE && isMarked(
    element,
    specifiedTargetContainerElementAttributeName
  ))
    return !1;
  let { stayOriginalTags, excludeTags } = rule, finalExcludeTags = [];
  return includeStayElements && excludeTags && excludeTags.length > 0 ? finalExcludeTags = excludeTags || [] : finalExcludeTags = excludeTags.filter((tag) => !stayOriginalTags.includes(tag)), !!(element.nodeType === Node.ELEMENT_NODE && element.isContentEditable || element.nodeType === Node.ELEMENT_NODE && (element.getAttribute("translate") === "no" || element.classList.contains("notranslate")) || isMatchTags(element.nodeName, finalExcludeTags));
}
function isNeedToTranslate(item, minTextCount, minWordCount, ctx) {
  let delimiters = getPlaceholderDelimiters(ctx), stayInOriginalRegex = new RegExp(
    `${delimiters[0]}(\\d+)${delimiters[1]}`,
    "gi"
  ), text = item.text, trimedText = text.trim();
  return trimedText = trimedText.replace(stayInOriginalRegex, ""), trimedText = trimedText.trim(), trimedText === "" || trimedText.length === 1 && trimedText.charCodeAt(0) === 8203 || /^\d+(,\d+)*(\.\d+)?$/.test(text) || trimedText.includes("</style>") || trimedText.includes("< styles>") || isAtTag(trimedText) || isUrl(trimedText) || isHashTag(trimedText) || stayInOriginalRegex.test(trimedText) ? !1 : isValidTextByCount(text, minTextCount, minWordCount);
}
function isValidTextByCount(rawText, minTextCount, minWordCount) {
  let text = rawText.trim();
  return text.length >= minTextCount || text.split(" ").length >= minWordCount || !isAllAscii(text) && text.length >= minWordCount;
}
function isAllAscii(text) {
  for (let i2 = 0; i2 < text.length; i2++)
    if (text.charCodeAt(i2) > 127)
      return !1;
  return !0;
}
function isUrl(text) {
  if (text && text.includes("://"))
    try {
      return new URL(text), !0;
    } catch {
      return !1;
    }
  else
    return !1;
}
function isHashTag(text) {
  return !!(text && text.startsWith("#") && text.indexOf(" ") === -1);
}
function isAtTag(text) {
  return !!(text && text.startsWith("@") && text.indexOf(" ") === -1);
}
function isStockTag(text) {
  return !!(text && text.startsWith("$") && text.indexOf(" ") === -1);
}
function isMarked(element, markedAttribute, explicit = !1) {
  return isMarkedWith(element, markedAttribute, "1", explicit);
}
function isMarkedWith(element, markedAttribute, value, explicit = !1) {
  return isProd && !explicit ? element[elementMarkRootKey] ? (
    // @ts-ignore: it's ok
    !!(element[elementMarkRootKey] && // @ts-ignore: it's ok
    element[elementMarkRootKey][markedAttribute] === value)
  ) : !1 : element.dataset[markedAttribute] === value;
}
function hasMark(element, markedAttribute, explicit = !1) {
  return isProd && !explicit ? element[elementMarkRootKey] ? (
    // @ts-ignore: it's ok
    !!(element[elementMarkRootKey] && // @ts-ignore: it's ok
    element[elementMarkRootKey][markedAttribute])
  ) : !1 : element.dataset[markedAttribute] !== void 0;
}
function getMainText(root2) {
  return (root2.innerText || root2.textContent || "").trim();
}
function isMatchSelectors(selectors) {
  return selectors ? typeof selectors == "string" ? document.querySelector(selectors) !== null : selectors.some((selector) => document.querySelector(selector)) : !1;
}
function setAttribute(element, name, value, explicit = !1) {
  element.isContentEditable || (isProd && !explicit ? (element.dataset[sourceElementEffectAttributeNameForJs] || (element.dataset[sourceElementEffectAttributeNameForJs] = "1"), element[elementMarkRootKey] || (element[elementMarkRootKey] = {}), element[elementMarkRootKey][name] || (element[elementMarkRootKey][name] = value)) : (element.dataset[sourceElementEffectAttributeNameForJs] || (element.dataset[sourceElementEffectAttributeNameForJs] = "1"), element.dataset[name] !== value && (element.dataset[name] = value)));
}
function removeAttribute(element, name, explicit = !1) {
  if (isProd && !explicit) {
    if (!element[elementMarkRootKey] || !element[elementMarkRootKey][name])
      return;
    delete element[elementMarkRootKey][name];
  } else
    delete element.dataset[name];
}
function getAttribute(element, name, explicit = !1) {
  return isProd && !explicit ? !element[elementMarkRootKey] || !element[elementMarkRootKey][name] ? void 0 : element[elementMarkRootKey][name] : element.dataset[name];
}
function isStayOriginalElement(element, rule) {
  let isStayOriginal = !1, allTags = [
    ...rule.stayOriginalTags,
    ...rule.additionalStayOriginalTags
  ];
  return (isMatchTags(element.nodeName, allTags) || isMarked(element, sourceElementStayOriginalAttributeName)) && (isStayOriginal = !0), isStayOriginal;
}
function isContainsStayOriginalElement(element, rule) {
  let isStayOriginal = !1, allTags = [
    ...rule.stayOriginalTags,
    ...rule.additionalStayOriginalTags
  ];
  if ((isMatchTags(element.nodeName, allTags) || isMarked(element, sourceElementStayOriginalAttributeName)) && (isStayOriginal = !0), isStayOriginal)
    return !0;
  let allSelectors = allTags.map((tag) => tag.toLowerCase());
  return rule.stayOriginalSelectors && allSelectors.push(...rule.stayOriginalSelectors), rule.additionalStayOriginalSelectors && allSelectors.push(...rule.additionalStayOriginalSelectors), isContainsSelectors(element, allSelectors);
}
function isUnknowTag(element, rule) {
  let allKnowTags = rule.allBlockTags.concat(rule.inlineTags).concat(
    rule.excludeTags
  );
  return !isMatchTags(element.nodeName, allKnowTags);
}
function getPlaceholderDelimiters(ctx) {
  let { config } = ctx, delimiters = defaultPlaceholderDelimiters;
  return config.translationServices[ctx.translationService] && config.translationServices[ctx.translationService].placeholderDelimiters && (delimiters = config.translationServices[ctx.translationService].placeholderDelimiters), delimiters;
}
function isContainsSelectors(element, selectors) {
  if (!selectors)
    return !1;
  Array.isArray(selectors) || (selectors = [selectors]);
  for (let selector of selectors)
    if (element.querySelector(selector))
      return !0;
  return !1;
}
function getTheLastTextNodeParentElement(element) {
  let treeWalker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    (node) => node.textContent && node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  ), lastTextNode = null;
  for (; treeWalker.nextNode(); )
    lastTextNode = treeWalker.currentNode;
  return lastTextNode ? lastTextNode.parentElement : null;
}
function getRealUrl() {
  if (!getIsInIframe())
    return globalThis.location.href;
  try {
    let currentUrl = globalThis.location.href, currentUrlObj = new URL(currentUrl);
    if (currentUrlObj.protocol === "about:" || currentUrlObj.protocol === "blob:") {
      if (globalThis.location.ancestorOrigins && globalThis.location.ancestorOrigins.length > 0)
        return globalThis.location.ancestorOrigins[0];
      let href = "";
      try {
        href = globalThis.parent.location.href;
      } catch {
      }
      return href || (globalThis.location != globalThis.parent.location ? document.referrer : document.location.href);
    } else
      return currentUrl;
  } catch {
  }
  return globalThis.location.href;
}
function injectCSS(rootDocument, css, id) {
  if (rootDocument && rootDocument.head && rootDocument.head.appendChild) {
    let styleElement = rootDocument.createElement("style");
    if (id) {
      let existingStyleElement = rootDocument.querySelector(
        `style[data-id="${id}"]`
      );
      existingStyleElement && existingStyleElement.remove(), styleElement.dataset.id = id;
    }
    rootDocument.head.appendChild(styleElement).innerHTML = css;
  } else
    log_default.warn(
      "injectCSS failed, rootDocument does not have head node",
      rootDocument
    );
}
function isInlineIframe(frame) {
  let src = frame.getAttribute("src");
  if (src) {
    if (isInUserscript) {
      if (src.startsWith("blob:"))
        return !0;
    } else if (src.startsWith("blob:") && !src.startsWith("blob:http"))
      return !0;
    return !1;
  }
  return !!(frame.getAttribute("srcdoc") && frame.contentDocument && frame.contentDocument.body);
}
function isMatchTags(nodeName, tags) {
  if (!nodeName || !tags)
    return !1;
  Array.isArray(tags) || (tags = [tags]), nodeName = nodeName.toUpperCase();
  for (let tag of tags)
    if (nodeName === tag)
      return !0;
  return !1;
}

// dom/mark_containers.ts
function markContainers(container, rule, rootFrame, isDynamic) {
  let {
    excludeSelectors,
    additionalExcludeSelectors,
    extraInlineSelectors,
    additionalInlineSelectors,
    extraBlockSelectors,
    atomicBlockSelectors,
    atomicBlockTags,
    globalStyles,
    stayOriginalTags,
    stayOriginalSelectors,
    additionalStayOriginalSelectors,
    globalAttributes,
    additionalSelectors
  } = rule, globalStyleSelectors = Object.keys(globalStyles);
  if (globalStyleSelectors.length > 0)
    for (let selector of globalStyleSelectors) {
      let elements = getElementsBySelectors(
        isDynamic ? rootFrame : container,
        [selector]
      );
      for (let element of elements)
        if (!isMarked(element, sourceElementWithGlobalStyleMarkAttributeName)) {
          setAttribute(
            element,
            sourceElementWithGlobalStyleMarkAttributeName,
            "1"
          );
          let cssText = globalStyles[selector];
          element.style.cssText += cssText;
        }
    }
  let globalAttributesSelectors = Object.keys(globalAttributes);
  if (globalAttributesSelectors.length > 0)
    for (let selector of globalAttributesSelectors) {
      let attributes = globalAttributes[selector], attributesKeys = Object.keys(attributes), elements = getElementsBySelectors(
        isDynamic ? rootFrame : container,
        [selector]
      );
      for (let element of elements)
        for (let key of attributesKeys) {
          let value = attributes[key];
          element.getAttribute(key) !== value && (value === null ? element.removeAttribute(key) : element.setAttribute(key, value));
        }
    }
  let allExcludeSelectors = [
    ...excludeSelectors,
    ...additionalExcludeSelectors
  ], allInlineSelectors = [
    ...extraInlineSelectors,
    ...additionalInlineSelectors
  ], allAtomicBlockSelectors = [...atomicBlockSelectors], allAtomicBlockTagsSelectors = atomicBlockTags.map(
    (item) => item.toLowerCase()
  ), allBlockSelectos = extraBlockSelectors;
  getElementsBySelectors(
    isDynamic ? rootFrame : container,
    additionalSelectors
  ).forEach((element) => {
    isMarked(element, specifiedTargetContainerElementAttributeName) || setAttribute(
      element,
      specifiedTargetContainerElementAttributeName,
      "1"
    );
  }), getElementsBySelectors(
    isDynamic ? rootFrame : container,
    allExcludeSelectors
  ).forEach((element) => {
    isMarked(element, sourceElementExcludeAttributeName, !0) || setAttribute(element, sourceElementExcludeAttributeName, "1", !0);
  });
  let atomicBlockElements = [];
  if (allAtomicBlockSelectors.length > 0 && (atomicBlockElements = getElementsBySelectors(
    isDynamic ? rootFrame : container,
    allAtomicBlockSelectors
  ).filter((element) => !isMarked(element, sourceAtomicBlockElementMarkAttributeName))), allAtomicBlockTagsSelectors.length > 0) {
    let stayOriginalTagsHTMLStringArr = stayOriginalTags.reduce(
      (arr, item) => {
        let tagLower = item.toLowerCase();
        return arr.push(`<${tagLower}>`, `</${tagLower}>`, `<${tagLower} />`), arr;
      },
      []
    ), httpLinkTags = [">http://", ">https://"];
    stayOriginalTagsHTMLStringArr.push(...httpLinkTags);
    let atomicBlockTagsElements = getElementsBySelectors(
      isDynamic ? rootFrame : container,
      allAtomicBlockTagsSelectors
    ).filter((element) => {
      if (isMarked(
        element,
        sourceAtomicBlockElementMarkAttributeName
      ))
        return !1;
      {
        let htmlString = element.innerHTML;
        return !stayOriginalTagsHTMLStringArr.some(
          (item) => htmlString.includes(item)
        );
      }
    });
    atomicBlockElements.push(...atomicBlockTagsElements);
  }
  atomicBlockElements.forEach((element) => {
    isMarked(element, sourceAtomicBlockElementMarkAttributeName) || setAttribute(element, sourceAtomicBlockElementMarkAttributeName, "1");
  });
  let extraInlineElements = [];
  allInlineSelectors.length > 0 && extraInlineElements.push(
    ...getElementsBySelectors(
      isDynamic ? rootFrame : container,
      allInlineSelectors
    )
  ), extraInlineElements.forEach((element) => {
    setAttribute(element, sourceInlineElementMarkAttributeName, "1");
  });
  let extraBlockElements = [];
  allBlockSelectos.length > 0 && extraBlockElements.push(
    ...getElementsBySelectors(
      isDynamic ? rootFrame : container,
      allBlockSelectos
    )
  ), extraBlockElements.forEach((element) => {
    setAttribute(element, sourceBlockElementMarkAttributeName, "1");
  });
  let stayOriginalElements = [], allStayOriginalSelectors = [
    ...stayOriginalSelectors,
    ...additionalStayOriginalSelectors
  ];
  allStayOriginalSelectors.length > 0 && stayOriginalElements.push(
    ...getElementsBySelectors(
      isDynamic ? rootFrame : container,
      allStayOriginalSelectors
    )
  ), stayOriginalElements.forEach((element) => {
    setAttribute(element, sourceElementStayOriginalAttributeName, "1");
  });
}

// utils/language_match.ts
function isMatchLanguage(lang, matchPattern) {
  let matches = matchPattern.matches || [], excludeMatches = matchPattern.excludeMatches || [];
  if (excludeMatches && !Array.isArray(excludeMatches) && (excludeMatches = [excludeMatches]), matches && !Array.isArray(matches) && (matches = [matches]), excludeMatches.length > 0) {
    if (excludeMatches.includes(lang) || excludeMatches.includes("<all>"))
      return !1;
    for (let match of excludeMatches)
      if (match.includes("*") && new RegExp(match).test(lang))
        return !1;
  }
  if (matches.length === 0)
    return !1;
  if (matches.length > 0) {
    if (matches.includes(lang) || matches.includes("<all>"))
      return !0;
    for (let match of matches)
      if (match.includes("*") && new RegExp(match).test(lang))
        return !0;
  }
  return !1;
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

// utils/is_mobile.ts
var appleIphone = /iPhone/i, appleIpod = /iPod/i, appleTablet = /iPad/i, appleUniversal = /\biOS-universal(?:.+)Mac\b/i, androidPhone = /\bAndroid(?:.+)Mobile\b/i, androidTablet = /Android/i, amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, amazonTablet = /Silk/i, windowsPhone = /Windows Phone/i, windowsTablet = /\bWindows(?:.+)ARM\b/i, otherBlackBerry = /BlackBerry/i, otherBlackBerry10 = /BB10/i, otherOpera = /Opera Mini/i, otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i, otherFirefox = /Mobile(?:.+)Firefox\b/i, isAppleTabletOnIos13 = (navigator2) => typeof navigator2 < "u" && navigator2.platform === "MacIntel" && typeof navigator2.maxTouchPoints == "number" && // @ts-ignore: it's ok
navigator2.maxTouchPoints > 1 && typeof globalThis.MSStream > "u";
function createMatch(userAgent) {
  return (regex) => regex.test(userAgent);
}
function isMobile(param) {
  let nav = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  !param && typeof navigator < "u" ? nav = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints || 0
  } : typeof param == "string" ? nav.userAgent = param : param && param.userAgent && (nav = {
    userAgent: param.userAgent,
    platform: param.platform,
    maxTouchPoints: param.maxTouchPoints || 0
  });
  let userAgent = nav.userAgent, tmp = userAgent.split("[FBAN");
  typeof tmp[1] < "u" && (userAgent = tmp[0]), tmp = userAgent.split("Twitter"), typeof tmp[1] < "u" && (userAgent = tmp[0]);
  let match = createMatch(userAgent), result = {
    apple: {
      phone: match(appleIphone) && !match(windowsPhone),
      ipod: match(appleIpod),
      tablet: !match(appleIphone) && (match(appleTablet) || isAppleTabletOnIos13(nav)) && !match(windowsPhone),
      universal: match(appleUniversal),
      device: (match(appleIphone) || match(appleIpod) || match(appleTablet) || match(appleUniversal) || isAppleTabletOnIos13(nav)) && !match(windowsPhone)
    },
    amazon: {
      phone: match(amazonPhone),
      tablet: !match(amazonPhone) && match(amazonTablet),
      device: match(amazonPhone) || match(amazonTablet)
    },
    android: {
      phone: !match(windowsPhone) && match(amazonPhone) || !match(windowsPhone) && match(androidPhone),
      tablet: !match(windowsPhone) && !match(amazonPhone) && !match(androidPhone) && (match(amazonTablet) || match(androidTablet)),
      device: !match(windowsPhone) && (match(amazonPhone) || match(amazonTablet) || match(androidPhone) || match(androidTablet)) || match(/\bokhttp\b/i)
    },
    windows: {
      phone: match(windowsPhone),
      tablet: match(windowsTablet),
      device: match(windowsPhone) || match(windowsTablet)
    },
    other: {
      blackberry: match(otherBlackBerry),
      blackberry10: match(otherBlackBerry10),
      opera: match(otherOpera),
      firefox: match(otherFirefox),
      chrome: match(otherChrome),
      device: match(otherBlackBerry) || match(otherBlackBerry10) || match(otherOpera) || match(otherFirefox) || match(otherChrome)
    },
    any: !1,
    phone: !1,
    tablet: !1
  };
  return result.any = result.apple.device || result.android.device || result.windows.device || result.other.device, result.phone = result.apple.phone || result.android.phone || result.windows.phone, result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet, result;
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
function isDeno2() {
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
isDeno2() ? browserAPI = mock_browser_default : browserAPI = globalThis.immersiveTranslateBrowserAPI;

// buildin_config.json
var buildin_config_default = {
  minVersion: "0.0.20",
  immediateTranslationTextCount: 5e3,
  interval: 36e5,
  beta: !1,
  cache: !0,
  enabled: !0,
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
    deepl: {
      immediateTranslationTextCountForImmersiveDeepl: 5e4
    },
    bing: {
      maxTextLengthPerRequest: 800
    },
    deeplx: {
      limit: 3
    },
    d: {
      immediateTranslationTextCount: 0
    },
    papago: {
      placeholderDelimiters: ["{", "}"]
    },
    dpro: {
      apiUrl: "https://api.deepl.com/jsonrpc"
    },
    openai: {
      placeholderDelimiters: ["{{", "}}"],
      immediateTranslationTextCount: 1e4,
      translationDebounce: 300,
      newlinePlaceholderDelimiters: [
        `

###`,
        `###

`,
        `
?
?###\\d+###
?
?`
      ]
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
    isEbook: !1,
    isEbookBuilder: !1,
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
    additionalStayOriginalSelectors: ["span.katex", ".notranslate"],
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
      "aside.article-comments",
      "aside.onebox"
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
      "rt",
      "[spellcheck=false]"
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
      "G",
      "TEXT",
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
      "MATH",
      "TTS-SENTENCE"
    ],
    bodyTranslateTags: ["FOOTER", "ASIDE", "BUTTON", "NAV"],
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
      matches: "*://*/*.txt",
      selectors: ["body"],
      isTransformPreTagNewLine: !0,
      excludeTags: [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "G",
        "TEXT",
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
        "MATH",
        "TTS-SENTENCE"
      ]
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
      excludeMatches: [
        "https://www.reddit.com/r/*/wiki/*"
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
      excludeMatches: [
        "https://www.reddit.com/r/*/wiki/*",
        "https://www.reddit.com/settings/*"
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
      observeUrlChange: !0,
      excludeMatches: [
        "https://github.com/settings/profile"
      ],
      selectors: [
        ".markdown-title",
        ".markdown-body",
        ".Layout-sidebar p",
        "div > span.search-match",
        "li.repo-list-item p",
        "#responsive-meta-container p",
        "article p",
        "div.repo-description p",
        "[itemprop=description]"
      ],
      atomicBlockSelectors: ["[itemprop=description]"],
      excludeSelectors: [
        ".css-truncate",
        "[data-test-selector='commit-tease-commit-message']",
        "[data-test-selector='create-branch.developmentForm']",
        "div.js-details-container.Details",
        "div.Box-header.position-relative",
        "div.blob-wrapper-embedded",
        "div.Box.Box--condensed.my-2",
        "div.jp-CodeCell",
        '[aria-label="Account"] .markdown-title'
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
      selectors: [
        ".comment-text",
        ".media-item-headline",
        ".slim-video-information-title"
      ],
      wrapperPrefix: "",
      wrapperSuffix: "",
      observeUrlChange: !0,
      atomicBlockSelectors: [".comment-text"],
      globalStyles: {
        ".comment-text": "max-height:unset;",
        ".media-item-headline": "max-height:unset;-webkit-line-clamp:unset;"
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
      isTranslateTitle: !1,
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
      matches: "marketplace.visualstudio.com",
      additionalExcludeSelectors: [
        ".core-info-second-row",
        ".core-info-third-row",
        ".meta-data-list",
        ".item-title",
        ".breadcrumb",
        ".itemDetails-right",
        ".ux-user-name",
        ".ux-updated-date",
        ".ux-item-second-row-wrapper",
        ".stats-and-offer",
        ".header-container"
      ],
      atomicBlockSelectors: [
        ".core-info-cell > div.name"
      ],
      globalStyles: {
        ".item-details-control-root.ux-item-shortdesc": "height: unset; overflow: visible; max-height:unset;"
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
      matches: "store.steampowered.com/app/*",
      selectors: [
        ".game_description_snippet",
        ".game_area_description",
        "#earlyAccessHeader",
        "[id^='ReviewContent'] .content"
      ],
      excludeSelectors: [
        "#global_actions",
        "#store_controls",
        "#foryou_tab",
        "[class*=persona]",
        "[class*=game_title_area]",
        "a.btn_medium",
        ".persona_name",
        ".hours.ellipsis",
        ".checkcol",
        ".postedDate",
        ".dev_row .summary",
        ".already_in_library",
        ".game_header_image_ctn .grid_content",
        ".ds_flag.ds_wishlist_flag",
        ".early_access_review.tooltip",
        ".communitylink_achievement_images",
        ".user_reviews_summary_row.summary",
        ".review_award_ctn",
        ".add_to_wishlist_area",
        ".next_in_queue_content",
        ".glance_tags.popular_tags",
        ".game_purchase_action",
        ".vote_button_ctn",
        "#VoteUpDownBtnCtn",
        "#footer",
        "#ViewAllReviewssummary"
      ],
      atomicBlockSelectors: [
        ".game_area_sys_req_leftCol",
        ".game_area_sys_req_rightCol"
      ],
      extraInlineSelectors: [
        ".pulldown"
      ],
      additionalSelectors: [
        ".game_page_autocollapse_ctn iframe"
      ],
      globalStyles: {
        ".game_description_snippet": "max-height:unset; overflow: scroll;",
        ".game_purchase_area_friends_want": "height: auto; padding-bottom: 6px;",
        ".div.early_access_banner": "height: 84px",
        ".franchise_notice > *": "height: 84px"
      },
      detectParagraphLanguage: !0
    },
    {
      matches: "https://www.nature.com/articles/*",
      excludeSelectors: [
        ".c-header",
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
    },
    {
      matches: "https://beta.simp.red/trans*",
      mainFrameSelector: ".simpread-read-root"
    },
    {
      matches: "https://www.lookintobitcoin.com/charts/*",
      excludeSelectors: [
        "svg"
      ]
    },
    {
      matches: "https://platform.openai.com/account/api-keys*",
      urlChangeDelay: 1500
    },
    {
      isEbook: !0,
      isTranslateTitle: !1,
      urlChangeDelay: 200,
      selectorMatches: [
        "meta[name='immersive-translate-ebook-viewer'][content='true']"
      ],
      excludeSelectors: [
        "#drop-target",
        "#drop-target h1",
        "#side-bar",
        "h1#side-bar-title"
      ],
      extraInlineSelectors: [
        "span.dropcaps"
      ],
      paragraphMinTextCount: 1,
      paragraphMinWordCount: 1,
      blockMinTextCount: 1,
      blockMinWordCount: 1,
      containerMinTextCount: 1,
      wrapperPrefix: "<p></p>"
    },
    {
      isEbookBuilder: !0,
      isTranslateTitle: !1,
      selectorMatches: [
        "meta[name='immersive-translate-ebook-builder'][content='true']"
      ],
      excludeSelectors: [
        "h1.notranslate",
        "#drop-target",
        "#drop-target h1",
        "#side-bar",
        "h1#side-bar-title",
        "#tool"
      ],
      paragraphMinTextCount: 1,
      paragraphMinWordCount: 1,
      blockMinTextCount: 1,
      blockMinWordCount: 1,
      containerMinTextCount: 1,
      wrapperPrefix: "<br />"
    }
  ]
};

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
  if (env.DEEPL_PROXY_ENDPOINT && (defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl || (defaultUserConfig.translationServices.deepl = {}), defaultUserConfig.translationServices.deepl.immersiveTranslateApiUrl = env.DEEPL_PROXY_ENDPOINT), env.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT && (defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.deepl || (defaultUserConfig.translationServices.deepl = {}), defaultUserConfig.translationServices.deepl.immersiveTranslateDeeplTokenUrl = env.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT), env.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY) {
    let openaiAuthConfig = {
      APIKEY: env.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY
    };
    defaultUserConfig.translationServices || (defaultUserConfig.translationServices = {}), defaultUserConfig.translationServices.openai = openaiAuthConfig;
  }
  return env.DEBUG === "1" && (defaultUserConfig.debug = !0, defaultUserConfig.cache = !1, defaultUserConfig.alpha = !0), env.MOCK === "1" && (defaultUserConfig.translationService = "mock"), env.IMMERSIVE_TRANSLATE_SERVICE && (defaultUserConfig.translationService = env.IMMERSIVE_TRANSLATE_SERVICE), defaultUserConfig;
}
async function getLocalConfig() {
  let localConfig2 = await browserAPI.storage.local.get(localConfigStorageKey);
  if (localConfig2[localConfigStorageKey]) {
    let currentConfig = localConfig2[localConfigStorageKey], currentTempTranslationDomains = currentConfig.tempTranslationUrlMatches || [], newDomains = currentTempTranslationDomains.filter(
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
async function setLocalConfig(localConfig2) {
  await browserAPI.storage.local.set({ [localConfigStorageKey]: localConfig2 });
}
async function setBuildinConfig(buildinConfig) {
  await browserAPI.storage.local.set({ [buildinConfigStorageKey]: buildinConfig });
}
async function getLatestBuildinConfig() {
  let storageBuildInConfig = await browserAPI.storage.local.get(
    buildinConfigStorageKey
  ), finalBuildInConfig = {
    ...getBuildInConfig(),
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
  return finalBuildInConfig;
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
  let defaultConfig = getBuildInConfig(), envUserConfig = getEnvUserConfig(), userConfig = await getUserConfig(), globalUserConfig = globalThis.IMMERSIVE_TRANSLATE_CONFIG || {}, localConfig2 = await getLocalConfig(), now = /* @__PURE__ */ new Date();
  if (localConfig2 && localConfig2.tempTranslationUrlMatches && localConfig2.tempTranslationUrlMatches.length > 0) {
    let validUrlMatches = localConfig2.tempTranslationUrlMatches.filter(
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

// errors.ts
var CommonError = class extends Error {
  constructor(name, message, details) {
    super(message);
    this.name = name, details && (this.details = details);
  }
};

// browser/request.ts
async function request(options2) {
  let response;
  if (options2 && options2.retry && options2.retry > 0)
    try {
      response = await retry(rawRequest.bind(null, options2), {
        multiplier: 2,
        maxAttempts: options2.retry
      });
    } catch (e) {
      throw e && e.name === "RetryError" && e.cause ? e.cause : e;
    }
  else
    response = await rawRequest(options2);
  return response;
}
async function rawRequest(options2) {
  options2.body;
  let { url, responseType, ...fetchOptions } = options2;
  responseType || (responseType = "json"), fetchOptions = {
    mode: "cors",
    ...fetchOptions
  };
  let response = await (options2.fetchPolyfill || fetch)(url, fetchOptions);
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

// utils/md5.js
function safeAdd(x4, y2) {
  var lsw = (x4 & 65535) + (y2 & 65535), msw = (x4 >> 16) + (y2 >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q6, a3, b4, x4, s4, t3) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a3, q6), safeAdd(x4, t3)), s4), b4);
}
function md5ff(a3, b4, c3, d5, x4, s4, t3) {
  return md5cmn(b4 & c3 | ~b4 & d5, a3, b4, x4, s4, t3);
}
function md5gg(a3, b4, c3, d5, x4, s4, t3) {
  return md5cmn(b4 & d5 | c3 & ~d5, a3, b4, x4, s4, t3);
}
function md5hh(a3, b4, c3, d5, x4, s4, t3) {
  return md5cmn(b4 ^ c3 ^ d5, a3, b4, x4, s4, t3);
}
function md5ii(a3, b4, c3, d5, x4, s4, t3) {
  return md5cmn(c3 ^ (b4 | ~d5), a3, b4, x4, s4, t3);
}
function binlMD5(x4, len) {
  x4[len >> 5] |= 128 << len % 32, x4[(len + 64 >>> 9 << 4) + 14] = len;
  var i2, olda, oldb, oldc, oldd, a3 = 1732584193, b4 = -271733879, c3 = -1732584194, d5 = 271733878;
  for (i2 = 0; i2 < x4.length; i2 += 16)
    olda = a3, oldb = b4, oldc = c3, oldd = d5, a3 = md5ff(a3, b4, c3, d5, x4[i2], 7, -680876936), d5 = md5ff(d5, a3, b4, c3, x4[i2 + 1], 12, -389564586), c3 = md5ff(c3, d5, a3, b4, x4[i2 + 2], 17, 606105819), b4 = md5ff(b4, c3, d5, a3, x4[i2 + 3], 22, -1044525330), a3 = md5ff(a3, b4, c3, d5, x4[i2 + 4], 7, -176418897), d5 = md5ff(d5, a3, b4, c3, x4[i2 + 5], 12, 1200080426), c3 = md5ff(c3, d5, a3, b4, x4[i2 + 6], 17, -1473231341), b4 = md5ff(b4, c3, d5, a3, x4[i2 + 7], 22, -45705983), a3 = md5ff(a3, b4, c3, d5, x4[i2 + 8], 7, 1770035416), d5 = md5ff(d5, a3, b4, c3, x4[i2 + 9], 12, -1958414417), c3 = md5ff(c3, d5, a3, b4, x4[i2 + 10], 17, -42063), b4 = md5ff(b4, c3, d5, a3, x4[i2 + 11], 22, -1990404162), a3 = md5ff(a3, b4, c3, d5, x4[i2 + 12], 7, 1804603682), d5 = md5ff(d5, a3, b4, c3, x4[i2 + 13], 12, -40341101), c3 = md5ff(c3, d5, a3, b4, x4[i2 + 14], 17, -1502002290), b4 = md5ff(b4, c3, d5, a3, x4[i2 + 15], 22, 1236535329), a3 = md5gg(a3, b4, c3, d5, x4[i2 + 1], 5, -165796510), d5 = md5gg(d5, a3, b4, c3, x4[i2 + 6], 9, -1069501632), c3 = md5gg(c3, d5, a3, b4, x4[i2 + 11], 14, 643717713), b4 = md5gg(b4, c3, d5, a3, x4[i2], 20, -373897302), a3 = md5gg(a3, b4, c3, d5, x4[i2 + 5], 5, -701558691), d5 = md5gg(d5, a3, b4, c3, x4[i2 + 10], 9, 38016083), c3 = md5gg(c3, d5, a3, b4, x4[i2 + 15], 14, -660478335), b4 = md5gg(b4, c3, d5, a3, x4[i2 + 4], 20, -405537848), a3 = md5gg(a3, b4, c3, d5, x4[i2 + 9], 5, 568446438), d5 = md5gg(d5, a3, b4, c3, x4[i2 + 14], 9, -1019803690), c3 = md5gg(c3, d5, a3, b4, x4[i2 + 3], 14, -187363961), b4 = md5gg(b4, c3, d5, a3, x4[i2 + 8], 20, 1163531501), a3 = md5gg(a3, b4, c3, d5, x4[i2 + 13], 5, -1444681467), d5 = md5gg(d5, a3, b4, c3, x4[i2 + 2], 9, -51403784), c3 = md5gg(c3, d5, a3, b4, x4[i2 + 7], 14, 1735328473), b4 = md5gg(b4, c3, d5, a3, x4[i2 + 12], 20, -1926607734), a3 = md5hh(a3, b4, c3, d5, x4[i2 + 5], 4, -378558), d5 = md5hh(d5, a3, b4, c3, x4[i2 + 8], 11, -2022574463), c3 = md5hh(c3, d5, a3, b4, x4[i2 + 11], 16, 1839030562), b4 = md5hh(b4, c3, d5, a3, x4[i2 + 14], 23, -35309556), a3 = md5hh(a3, b4, c3, d5, x4[i2 + 1], 4, -1530992060), d5 = md5hh(d5, a3, b4, c3, x4[i2 + 4], 11, 1272893353), c3 = md5hh(c3, d5, a3, b4, x4[i2 + 7], 16, -155497632), b4 = md5hh(b4, c3, d5, a3, x4[i2 + 10], 23, -1094730640), a3 = md5hh(a3, b4, c3, d5, x4[i2 + 13], 4, 681279174), d5 = md5hh(d5, a3, b4, c3, x4[i2], 11, -358537222), c3 = md5hh(c3, d5, a3, b4, x4[i2 + 3], 16, -722521979), b4 = md5hh(b4, c3, d5, a3, x4[i2 + 6], 23, 76029189), a3 = md5hh(a3, b4, c3, d5, x4[i2 + 9], 4, -640364487), d5 = md5hh(d5, a3, b4, c3, x4[i2 + 12], 11, -421815835), c3 = md5hh(c3, d5, a3, b4, x4[i2 + 15], 16, 530742520), b4 = md5hh(b4, c3, d5, a3, x4[i2 + 2], 23, -995338651), a3 = md5ii(a3, b4, c3, d5, x4[i2], 6, -198630844), d5 = md5ii(d5, a3, b4, c3, x4[i2 + 7], 10, 1126891415), c3 = md5ii(c3, d5, a3, b4, x4[i2 + 14], 15, -1416354905), b4 = md5ii(b4, c3, d5, a3, x4[i2 + 5], 21, -57434055), a3 = md5ii(a3, b4, c3, d5, x4[i2 + 12], 6, 1700485571), d5 = md5ii(d5, a3, b4, c3, x4[i2 + 3], 10, -1894986606), c3 = md5ii(c3, d5, a3, b4, x4[i2 + 10], 15, -1051523), b4 = md5ii(b4, c3, d5, a3, x4[i2 + 1], 21, -2054922799), a3 = md5ii(a3, b4, c3, d5, x4[i2 + 8], 6, 1873313359), d5 = md5ii(d5, a3, b4, c3, x4[i2 + 15], 10, -30611744), c3 = md5ii(c3, d5, a3, b4, x4[i2 + 6], 15, -1560198380), b4 = md5ii(b4, c3, d5, a3, x4[i2 + 13], 21, 1309151649), a3 = md5ii(a3, b4, c3, d5, x4[i2 + 4], 6, -145523070), d5 = md5ii(d5, a3, b4, c3, x4[i2 + 11], 10, -1120210379), c3 = md5ii(c3, d5, a3, b4, x4[i2 + 2], 15, 718787259), b4 = md5ii(b4, c3, d5, a3, x4[i2 + 9], 21, -343485551), a3 = safeAdd(a3, olda), b4 = safeAdd(b4, oldb), c3 = safeAdd(c3, oldc), d5 = safeAdd(d5, oldd);
  return [a3, b4, c3, d5];
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
function rstrMD5(s4) {
  return binl2rstr(binlMD5(rstr2binl(s4), s4.length * 8));
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
function rawMD5(s4) {
  return rstrMD5(str2rstrUTF8(s4));
}
function hexMD5(s4) {
  return rstr2hex(rawMD5(s4));
}
function rawHMACMD5(k3, d5) {
  return rstrHMACMD5(str2rstrUTF8(k3), str2rstrUTF8(d5));
}
function hexHMACMD5(k3, d5) {
  return rstr2hex(rawHMACMD5(k3, d5));
}
function md5(string, key, raw) {
  return key ? raw ? rawHMACMD5(key, string) : hexHMACMD5(key, string) : raw ? rawMD5(string) : hexMD5(string);
}

// services/util.ts
function splitSentences(sentences, maxLength, maxGroupLength) {
  let tempSentences = splitStentenceWithMaxLength(sentences, maxLength), tempSentenceGroups = [], tempGroup = {
    from: sentences[0].from,
    fromByClient: sentences[0].fromByClient,
    to: sentences[0].to,
    tempSentences: [],
    url: sentences[0].url
  };
  for (let tempSentence of tempSentences)
    (tempGroup.tempSentences.reduce(
      (acc, cur) => acc + cur.text.length,
      0
    ) + tempSentence.text.length > maxLength || tempGroup.tempSentences.length >= maxGroupLength) && (tempSentenceGroups.push(tempGroup), tempGroup = {
      fromByClient: tempGroup.fromByClient,
      from: tempSentence.from,
      to: tempSentence.to,
      tempSentences: [],
      url: tempSentence.url
    }), (tempGroup.from !== tempSentence.from || tempGroup.to !== tempSentence.to) && (tempGroup.tempSentences.length > 0 ? (tempSentenceGroups.push(tempGroup), tempGroup = {
      fromByClient: tempGroup.fromByClient,
      from: tempSentence.from,
      to: tempSentence.to,
      tempSentences: [],
      url: tempSentence.url
    }) : (tempGroup.from = tempSentence.from, tempGroup.to = tempSentence.to)), tempGroup.tempSentences.push(tempSentence);
  return tempGroup.tempSentences.length > 0 && tempSentenceGroups.push(tempGroup), tempSentenceGroups;
}
function splitStentenceWithMaxLength(sentences, maxLength) {
  let allTempSentences = [], sentenceTotalPartsGroups = [];
  for (let i2 = 0; i2 < sentences.length; i2++) {
    let currentSentence = sentences[i2], { from, to, text, url } = currentSentence, sentenceTotalParts = 0, textArrSplitedByNewLine = text.split(/\r?\n/), currentTempSentences = [], currentPrefix = "";
    for (let j5 = 0; j5 < textArrSplitedByNewLine.length; j5++) {
      let currentText = textArrSplitedByNewLine[j5];
      if (currentText.trim() === "") {
        currentTempSentences.length > 0 ? j5 < textArrSplitedByNewLine.length - 1 && (currentTempSentences[currentTempSentences.length - 1].suffix += `
`) : currentPrefix += `
`;
        continue;
      } else if (currentText.length > maxLength) {
        let tempSplitedSentences = [];
        splitSentence(currentText, maxLength, tempSplitedSentences);
        for (let k3 = 0; k3 < tempSplitedSentences.length; k3++) {
          let tempSentence = tempSplitedSentences[k3], { text: text2, prefix, suffix } = tempSentence;
          sentenceTotalParts++, currentTempSentences.push({
            from,
            to,
            text: text2,
            prefix,
            suffix,
            index: i2,
            url,
            sentenceTotalParts,
            partIndex: sentenceTotalParts - 1
          }), sentenceTotalPartsGroups[i2] = sentenceTotalParts;
        }
      } else
        sentenceTotalParts++, currentTempSentences.push({
          text: currentText,
          prefix: currentPrefix,
          suffix: "",
          from,
          to,
          index: i2,
          url,
          sentenceTotalParts,
          partIndex: sentenceTotalParts - 1
        }), sentenceTotalPartsGroups[i2] = sentenceTotalParts;
      currentTempSentences.length > 0 && j5 < textArrSplitedByNewLine.length - 1 && (currentTempSentences[currentTempSentences.length - 1].suffix += `
`);
    }
    allTempSentences.push(...currentTempSentences);
  }
  for (let i2 = 0; i2 < allTempSentences.length; i2++) {
    let currentTempSentence = allTempSentences[i2], { index } = currentTempSentence;
    currentTempSentence.sentenceTotalParts = sentenceTotalPartsGroups[index];
  }
  return allTempSentences;
}
function isSameTargetLanguage(sourceLanguage, targetLanguage) {
  let finalSourceLanguage = formatLanguage(sourceLanguage), finalTargetLanguage = formatLanguage(targetLanguage), isSame = finalSourceLanguage === finalTargetLanguage;
  return isSame ? !0 : (isSame = finalSourceLanguage.startsWith("zh") && finalTargetLanguage.startsWith("zh"), isSame);
}
function splitSentence(text, maxLength, sentences) {
  let boundaryIndex = [".", "?", "!", "\u3002", "\uFF1F", "\uFF01"].reduce((acc, boundary) => {
    let index = text.lastIndexOf(boundary, maxLength);
    return index > acc ? index : acc;
  }, -1);
  if (boundaryIndex === -1)
    sentences.push({
      text: text.slice(0, maxLength),
      prefix: "",
      suffix: ""
    }), text.length > maxLength && splitSentence(text.slice(maxLength), maxLength, sentences);
  else {
    let theText = text.slice(0, boundaryIndex + 1);
    theText.startsWith(" ") ? sentences.push({
      text: theText.slice(1),
      prefix: " ",
      suffix: ""
    }) : sentences.push({
      text: theText,
      prefix: "",
      suffix: ""
    }), boundaryIndex + 1 < text.length && splitSentence(text.slice(boundaryIndex + 1), maxLength, sentences);
  }
  return sentences;
}
function mergeUrl(defaultUrl, customUrl) {
  let defaultUrlObj = new URL(defaultUrl);
  customUrl.startsWith("http") || (customUrl = "https://" + customUrl);
  let customUrlObj = new URL(customUrl);
  return customUrlObj.pathname !== "/" ? customUrlObj.toString() : (defaultUrlObj.host = customUrlObj.host, customUrlObj.port && (defaultUrlObj.port = customUrlObj.port), customUrlObj.protocol && (defaultUrlObj.protocol = customUrlObj.protocol), customUrlObj.username && (defaultUrlObj.username = customUrlObj.username), customUrlObj.password && (defaultUrlObj.password = customUrlObj.password), defaultUrlObj.toString());
}
function formatTranslationService(key, ctx) {
  let service = PureTranslationServices[key], translationConfig = ctx.config.translationServices[key] || {}, ok = !0, allProps = service.allProps || [];
  if (allProps.length > 0) {
    let requiredProps = allProps.filter((prop) => prop.required);
    if (requiredProps.length > 0) {
      for (let prop of requiredProps)
        if (!translationConfig[prop.name] && !prop.default) {
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

// services/cache.ts
var dbNames = [];
async function openIndexedDB(dbName, _storageName) {
  return await new Promise((resolve, reject) => {
    let name = dbName, version = 1, request3 = indexedDB.open(name, version);
    request3.onsuccess = (_event) => {
      resolve(request3.result);
    }, request3.onerror = (event) => {
      console.error(
        "onerror: Error opening the database, switching to non-database mode",
        event
      ), reject();
    }, request3.onupgradeneeded = (_event) => {
      let db = request3.result, storageName = _storageName || "cache";
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
    let storageName = "cache", request3 = db.transaction([storageName], "readonly").objectStore(storageName).get(origTextHash);
    request3.onsuccess = (_event) => {
      db.close();
      let result = request3.result;
      resolve(result);
    }, request3.onerror = (event) => {
      db.close(), console.error("queryInDB->onerror:", event), reject();
    };
  });
}
async function addInDB(dbName, cacheEntry) {
  let db = await openIndexedDB(dbName);
  return (await getAllDBNames()).includes(dbName) || await addCacheList(dbName), await new Promise((resolve) => {
    if (!db)
      return resolve(!1);
    let storageName = "cache", request3 = db.transaction([storageName], "readwrite").objectStore(storageName).put(cacheEntry);
    request3.onsuccess = (_event) => {
      db.close(), resolve(!0);
    }, request3.onerror = (event) => {
      console.error("addInDB->onerror:", event), db.close(), resolve(!1);
    };
  });
}
async function addCacheList(dbName) {
  let storageName = "cache_list", db = await openIndexedDB(brandId + "-cacheList", storageName), request3 = db.transaction([storageName], "readwrite").objectStore(storageName).put({ key: dbName });
  request3.onsuccess = (_event) => {
    db.close(), dbNames.push(dbName);
  }, request3.onerror = (event) => {
    db.close(), console.error(event);
  };
}
async function getAllDBNames() {
  if (dbNames && dbNames.length > 0)
    return dbNames;
  let db = await openIndexedDB(brandId + "-cacheList", "cache_list");
  return dbNames = await new Promise((resolve) => {
    let storageName = "cache_list", request3 = db.transaction([storageName], "readonly").objectStore(storageName).getAllKeys();
    request3.onsuccess = (_event) => {
      db.close(), resolve(request3.result);
    }, request3.onerror = (event) => {
      db.close(), console.error(event), resolve([]);
    };
  }), dbNames;
}

// utils/detect_chinese.ts
var chineseRegex = /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g, japaneseRegex = /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g, koreanRegex = /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g, punctuationRegex = /(\s+)|([\p{P}\p{S}])/gu, regexGroups = [
  ["zh-CN", chineseRegex],
  ["ja", japaneseRegex],
  ["ko", koreanRegex]
];
function detectChinese(text) {
  if (!text)
    return "auto";
  let maxCountLang = "auto", currentMaxCount = 0, punctuationMatchesLength = 0, punctuationMatches = text.match(punctuationRegex);
  punctuationMatches && (punctuationMatchesLength = punctuationMatches.reduce((sum, item) => sum + item.length, 0));
  let allLettersLength = text.length - punctuationMatchesLength;
  for (let group of regexGroups) {
    let regex = group[1], lang = group[0], matches = text.match(regex), langLength = matches ? matches.length : 0;
    langLength > currentMaxCount && (currentMaxCount = langLength, maxCountLang = lang);
  }
  return currentMaxCount * 2.5 / allLettersLength > 0.5 ? maxCountLang : "auto";
}

// dom/current_language.ts
var currentPageLanguage = "auto", currentPageLanguageByClient = "auto", currentPageLanguageByRemote = "auto";
function setCurrentPageLanguage(lang) {
  currentPageLanguage = lang;
}
function setCurrentPageLanguageByClient(lang) {
  currentPageLanguageByClient = lang;
}
function getCurrentPageLanguage() {
  return currentPageLanguageByClient !== "auto" ? currentPageLanguageByClient : currentPageLanguageByRemote !== "auto" ? currentPageLanguageByRemote : currentPageLanguage;
}
function getCurrentPageLanguageByClient() {
  return currentPageLanguageByClient;
}

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
          } catch (e) {
            sendResponse({
              ok: !1,
              errorName: e.name,
              errorMessage: e.message,
              errorDetails: e.details
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
            (e) => {
              sendResponse({
                ok: !1,
                errorName: e.name,
                errorMessage: e.message,
                errorDetails: e.details
              });
            }
          ), !0;
      }
    ));
  }
  getConnection(name, messageHandler, options2) {
    let sync = !1;
    options2 && options2.sync && (sync = !0);
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
      } catch (e) {
        if (type === "popup") {
          let errorMessage = `popup ${to} is not active, so the message does not send, ignore this error, ${JSON.stringify(messagePayload)}`;
          return this.logger.debug(
            errorMessage,
            messagePayload,
            to,
            e
          ), Promise.resolve({
            message: errorMessage
          });
        } else
          throw e;
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

// content_message_listeners.ts
var asyncMessageHandler = async function(payload, _author) {
  let { method, data } = payload;
  method === "translateTheWholePage" ? await translateTheWholePage() : method === "translateTheMainPage" ? await translateTheMainPage() : method === "translateToThePageEndImmediately" ? await translateToThePageEndImmediately() : method === "toggleTranslatePage" ? await toggleTranslatePage() : method === "toggleTranslateTheWholePage" ? await toggleTranslateTheWholePage() : method === "toggleTranslateTheMainPage" ? await toggleTranslateTheMainPage() : method === "translatePage" ? await translatePage() : method === "toggleTranslationMask" ? await toggleTranslationMask() : method === "restorePage" ? restorePage() : method === "showTranslationOnly" ? void 0 : method === "setCurrentPageLanguageByClient" && setCurrentPageLanguageByClient(data);
}, syncMessageHandler = function(payload, _author) {
  let { method, data } = payload;
  if (log_default.debug(
    `content script received sync message: ${method}`,
    data || " "
  ), method === "ping")
    return "pong";
  if (method === "getPageStatus")
    return getPageStatus();
  if (method === "getCurrentPageLanguage")
    return getCurrentPageLanguage();
}, connection, syncConnection;
function setupMessageListeners() {
  let asyncConnection = getConnection();
  getIsInIframe() || getSyncConnection(), asyncConnection.sendMessage("popup:main_sync", { method: "ready" }).catch(
    (_e3) => {
    }
  );
}
function getConnection() {
  return connection || (connection = new Messager("content_script", !1).getConnection("main", asyncMessageHandler), connection);
}
function getSyncConnection() {
  return syncConnection || (syncConnection = new Messager("content_script", !1).getConnection("main_sync", syncMessageHandler, {
    sync: !0
  }), syncConnection);
}

// userscript/document_message_channel.ts
var messageHandlers = /* @__PURE__ */ new Map();
function ask(request3) {
  let id = makeid(64), event = new CustomEvent(documentMessageTypeIdentifierForAsk, {
    detail: JSON.stringify({
      ...request3,
      type: "ask",
      id
    })
  });
  return document.dispatchEvent(event), new Promise((resolve, reject) => {
    messageHandlers.set(id, (e, data) => {
      e ? reject(e) : resolve(data);
    });
  });
}
function makeid(length) {
  let result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length, counter = 0;
  for (; counter < length; )
    result += characters.charAt(Math.floor(Math.random() * charactersLength)), counter += 1;
  return result;
}

// browser_proxy.ts
async function sendMessage(options2) {
  return await getConnection().sendMessage(
    "background:main",
    options2
  );
}
function request2(options2) {
  return isWebOptionsPage() ? ask({
    method: "request",
    data: options2
  }) : isMonkey() || isDeno() ? (options2.fetchPolyfill = globalThis.GM_fetch, request(options2)) : sendMessage({
    method: "fetch",
    data: options2
  });
}
function getConfig2() {
  return isMonkey() ? getConfig() : sendMessage(
    {
      method: "getConfig"
    }
  );
}
function getLocalConfig2() {
  return isMonkey() ? getLocalConfig() : sendMessage(
    {
      method: "getLocalConfig"
    }
  );
}
function setLocalConfig2(config) {
  return isMonkey() ? setLocalConfig(config) : sendMessage(
    {
      method: "setLocalConfig",
      data: config
    }
  );
}
function setBuildinConfig2(config) {
  return isMonkey() ? setBuildinConfig(config) : sendMessage(
    {
      method: "setBuildinConfig",
      data: config
    }
  );
}
function detectLanguage(options2) {
  if (options2.text) {
    let chineseLike = detectChinese(options2.text);
    if (chineseLike !== "auto")
      return Promise.resolve(chineseLike);
  }
  if (isMonkey()) {
    let result = browserAPI.extra.detectLanguage(
      options2.text,
      options2.minLength
    );
    return Promise.resolve(result);
  }
  return sendMessage(
    {
      method: "detectLanguage",
      data: options2
    }
  );
}
function detectTabLanguage() {
  return sendMessage(
    {
      method: "detectTabLanguage"
    }
  );
}
function sendPageTranslatedStatus(status) {
  if (isMonkey()) {
    let event = new CustomEvent(pageTranslatedStatusEventName, {
      detail: status
    });
    document.dispatchEvent(event);
    return;
  }
  getConnection().sendMessage("popup:main_sync", {
    method: "setPageStatus",
    data: status
  }).catch((_e3) => {
  });
}
function queryDb(query) {
  return isMonkey() ? queryParagraphCache(query) : sendMessage(
    {
      method: "queryParagraphCache",
      data: query
    }
  );
}
async function setDbStore(params) {
  if (isMonkey()) {
    await setParagraphCache(params);
    return;
  }
  return sendMessage(
    {
      method: "setParagraphCache",
      data: params
    }
  );
}
async function mockRequest() {
  if (isMonkey())
    return Promise.resolve();
  await sendMessage({
    method: "mockRequest"
  });
}
function openOptionsPage(newTab = !1) {
  return isMonkey() ? (browserAPI.runtime.openOptionsPage(newTab), Promise.resolve()) : sendMessage({
    method: "openOptionsPage"
  });
}
function openAboutPage(newTab = !1) {
  return isMonkey() ? (browserAPI.extra.openAboutPage(newTab), Promise.resolve()) : sendMessage({
    method: "openAboutPage"
  });
}
function openEbookViewerPage(newTab = !1) {
  return isMonkey() ? (browserAPI.extra.openEbookViewerPage(newTab), Promise.resolve()) : sendMessage({
    method: "openEbookViewerPage"
  });
}
function openEbookBuilderPage(newTab = !1) {
  return isMonkey() ? (browserAPI.extra.openEbookBuilderPage(newTab), Promise.resolve()) : sendMessage({
    method: "openEbookBuilderPage"
  });
}
function autoSyncLatestConfig() {
  return isMonkey() ? (log_default.warn("autoSyncLatestConfig is not support in monkey"), Promise.resolve()) : sendMessage({
    method: "autoSyncLatestConfig"
  });
}

// dom/detect_page_language.ts
async function detectPageLanguage() {
  let lang = "auto";
  return document.body && document.body.textContent && document.body.textContent.trim() && (lang = await detectLanguage({
    text: getMainText(document.body)
  })), lang === "auto" && document.documentElement && document.documentElement.lang && (lang = formatLanguage(document.documentElement.lang)), lang;
}

// dom/get_containers.ts
function getContainers(root2, ctx) {
  if (!(root2 && root2.textContent && root2.textContent.trim()))
    return [];
  let { rule, state: { translationArea } } = ctx, contentContainers = [];
  if (translationArea === "body")
    return [root2];
  if (rule && rule.selectors.length > 0) {
    let containers = rule.selectors.map((selector) => {
      let isMatch = root2.matches(selector), elements = [];
      isMatch ? elements = [root2] : elements = root2.querySelectorAll(
        selector
      );
      for (let element of elements)
        isMarked(element, specifiedTargetContainerElementAttributeName) || setAttribute(
          element,
          specifiedTargetContainerElementAttributeName,
          "1"
        );
      return Array.from(elements);
    }).flat();
    contentContainers.push(
      ...containers.map((container) => ({
        element: container,
        reserve: !0
      }))
    );
  } else {
    if (rule && rule.additionalSelectors.length > 0) {
      let additionalElements = getElementsBySelectors(
        root2,
        rule.additionalSelectors
      );
      for (let element of additionalElements)
        isMarked(element, specifiedTargetContainerElementAttributeName) || setAttribute(
          element,
          specifiedTargetContainerElementAttributeName,
          "1"
        );
      contentContainers.push(
        ...additionalElements.map((element) => ({
          element,
          reserve: !0
        }))
      );
    }
    let articleElements = getElementsBySelectors(root2, ["article"]);
    contentContainers.push(
      ...articleElements.map((element) => ({
        element,
        reserve: !0
      }))
    );
    let mains;
    if (contentContainers.length === 0 && (mains = root2.querySelectorAll("[role=main]"), mains.length === 0 && (mains = root2.querySelectorAll("main")), mains.length === 0 && (mains = root2.querySelectorAll(".main")), mains.length > 0)) {
      let mainsArray = Array.from(mains);
      contentContainers = contentContainers.concat(
        mainsArray.map((main3) => ({
          element: main3,
          reserve: !0
        }))
      );
    }
    let detectedContainers = [], treeFilter = (node) => {
      if (node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, ctx.rule, !0))
        return NodeFilter.FILTER_REJECT;
      if (node.nodeType === Node.TEXT_NODE && (node.textContent ? node.textContent.trim() : "").length >= rule.containerMinTextCount) {
        let parentNode = node.parentNode;
        parentNode && parentNode.parentNode && (parentNode = parentNode.parentNode), parentNode && parentNode.nodeType === Node.ELEMENT_NODE && (detectedContainers.includes(parentNode) || detectedContainers.push(parentNode));
      }
      return NodeFilter.FILTER_ACCEPT;
    }, walk = document.createTreeWalker(
      root2,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      treeFilter
    );
    for (; walk.nextNode(); )
      ;
    contentContainers.push(
      ...detectedContainers.map((element) => ({
        element,
        reserve: !1
      }))
    );
  }
  let finalContainers = duplicatedElements(root2, contentContainers, rule);
  return finalContainers.sort(function(a3, b4) {
    return a3.compareDocumentPosition(b4) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  }), finalContainers;
}

// dom/unmount.ts
var cleanQueue = [];
function addToUnmountQueue(fn) {
  cleanQueue.push(fn);
}
function clean() {
  cleanQueue.forEach((fn) => fn()), cleanQueue = [];
}

// dom/apply_user_config_css.ts
function applyUserConfigCss(root2, translationTheme, translationThemePatternConfig, remove) {
  let theme = translationTheme, props = themeOptions[theme] || [], injectedCss = "";
  root2 && props && props.length > 0 && props.forEach((prop) => {
    let { name } = prop;
    if (root2 && translationThemePatternConfig && translationThemePatternConfig[name]) {
      let value = translationThemePatternConfig[name];
      ["borderRadius"].includes(name) && (value += "px"), injectedCss += `--immersive-translate-theme-${theme}-${name}: ${value};
`;
    }
  });
  let otherCss = "";
  if (translationThemePatternConfig && translationThemePatternConfig.textColor) {
    let value = translationThemePatternConfig.textColor;
    otherCss += `
.immersive-translate-target-translation-theme-${theme}-inner{color: ${value};}
`;
  }
  if (translationThemePatternConfig && translationThemePatternConfig.zoom) {
    let value = translationThemePatternConfig.zoom;
    otherCss += `
.immersive-translate-target-translation-theme-${theme}-inner{font-size: max(13px, ${value}%);}
`;
  }
  let finalCss = "";
  injectedCss && (finalCss = `:root {
${injectedCss}}
`), otherCss && (finalCss += otherCss), finalCss ? injectCSS(
    root2,
    finalCss,
    "immersive-translate-user-custom-style"
  ) : remove && injectCSS(
    root2,
    "",
    "immersive-translate-user-custom-style"
  );
}

// dom/inject_css_to_frame.ts
function injectCssToFrame(root2, ctx) {
  let defaultInjectedCss = getEnv().IMMERSIVE_TRANSLATE_INJECTED_CSS;
  injectCSS(
    root2,
    defaultInjectedCss,
    "immersive-translate-default-injected-css"
  );
  let translationThemePattern = ctx.config.translationThemePatterns || {}, translationTheme = ctx.state.translationTheme, translationThemePatternConfig = translationThemePattern[translationTheme] || {};
  applyUserConfigCss(
    root2,
    translationTheme,
    translationThemePatternConfig
  );
  let injectedCss = "";
  (ctx.rule.injectedCss || ctx.rule.additionalInjectedCss) && (ctx.rule.injectedCss && ctx.rule.injectedCss.length > 0 && (injectedCss += ctx.rule.injectedCss.join(`
`)), ctx.rule.additionalInjectedCss && ctx.rule.additionalInjectedCss.length > 0 && (injectedCss += `
` + ctx.rule.additionalInjectedCss.join(`
`))), injectedCss && injectCSS(root2, injectedCss, "immersive-translate-dynamic-injected-css");
}

// dom/elements_to_paragraph.ts
function elementsToParagraph(elements, isPreWhitespace, rootFrame, ctx) {
  let { rule } = ctx, delimiters = getPlaceholderDelimiters(ctx);
  if (elements.length === 0)
    return null;
  elements = elements.map(
    (element) => element.element ? element : {
      element
    }
  );
  let isForceTranslate = elements.some(
    (element) => element.forceTranslate
  ), text = "", variables = [], currentVariableIndex = 0;
  elements && elements.length > 0 && elements[0].currentVariableIndex && (currentVariableIndex = elements[0].currentVariableIndex);
  let isHasMeaningfulText = isForceTranslate;
  for (let i2 = 0; i2 < elements.length; i2++) {
    let elementState = elements[i2], element = elementState.element;
    if (elementState.text) {
      text += elementState.text, elementState.variables && elementState.variables.length > 0 && variables.push(...elementState.variables), isHasMeaningfulText = !0;
      continue;
    }
    if (typeof element == "string") {
      text += element;
      continue;
    }
    let rawText = "";
    isContainsSelectors(
      element,
      `[${sourceElementExcludeAttributeNameForSelector}]`
    ) ? rawText = getTextWithExcludeElement(element) || "" : rawText = element.innerText || "";
    let isStartWithSpace = rawText.startsWith(" "), isEndWithSpace = rawText.endsWith(" ");
    element.tagName === "A" && (isStartWithSpace = !0, isEndWithSpace = !0);
    let isStayOriginal = isStayOriginalElement(element, rule);
    if (rawText === "" || isStayOriginal) {
      if (element && isMatchTags(element.nodeName, ["IMG"])) {
        let style = globalThis.getComputedStyle(element), width = parseInt(style.width, 10), height = parseInt(style.height, 10);
        if (width > 36 || height > 36)
          continue;
      }
      isStayOriginal && (isStartWithSpace = !0, isEndWithSpace = !0);
      let variableElement = element;
      if (isStayOriginal && element.tagName === "IMG") {
        let clonedElement = element.cloneNode(!0), originalStyle = clonedElement.getAttribute("style") || "", rect = element.getBoundingClientRect();
        clonedElement.setAttribute(
          "style",
          `${originalStyle} width: ${rect.width}px; height: ${rect.height}px;`
        ), variableElement = clonedElement;
      }
      let variable = {
        type: "element",
        value: variableElement
      };
      variables.push(variable);
      let index = variables.length - 1 + currentVariableIndex, delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
      text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
      continue;
    }
    if (!isExcludeElement(element, rule, !0)) {
      {
        let finalText = isPreWhitespace ? rawText : rawText.trim().replace(/\n/g, " ");
        if (isUrl(finalText) || isHashTag(finalText) || isAtTag(finalText) || isStockTag(finalText)) {
          let variable = {
            type: "element",
            value: element
          };
          variables.push(variable);
          let index = variables.length - 1, delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
          text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
        } else
          isHasMeaningfulText = !0, text += (isStartWithSpace ? " " : "") + finalText + (isEndWithSpace ? " " : "");
      }
      if (typeof element != "string") {
        let whitespace = getWhitespace(
          element.nextSibling,
          isPreWhitespace
        );
        whitespace && (text += whitespace);
      }
    }
  }
  if (!isHasMeaningfulText)
    return null;
  let inline = !1, wordCount = text.split(" ").length, lineCount = text.split(`
`).length;
  wordCount <= rule.blockMinWordCount && text.length <= rule.blockMinTextCount && lineCount < 2 && (inline = !0);
  let finalElements = elements.map(
    (element) => element.element
  ), lastElement = getLastHTMLElement(elements), isVertical = !1;
  if (lastElement) {
    let writtingMode = globalThis.getComputedStyle(lastElement).writingMode;
    isVertical = writtingMode ? writtingMode.includes("vertical") : !1;
  }
  let paragraph = {
    rootFrame,
    isVertical,
    elements: finalElements,
    text,
    variables,
    inline,
    preWhitespace: isPreWhitespace
  };
  return isForceTranslate || isNeedToTranslate(
    paragraph,
    ctx.state.translationArea === "body" ? 2 : rule.paragraphMinTextCount,
    ctx.state.translationArea === "body" ? 1 : rule.paragraphMinWordCount,
    ctx
  ) ? paragraph : null;
}
function getTextWithExcludeElement(element) {
  let finalText = "", filterExcludeElement = (node) => node.nodeType === Node.ELEMENT_NODE ? isMarked(node, sourceElementExcludeAttributeName, !0) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT : node.nodeType === Node.TEXT_NODE ? (node.textContent && node.textContent.trim() !== "" && (finalText += node.textContent.replace(/\s+/g, " ")), NodeFilter.FILTER_REJECT) : NodeFilter.FILTER_ACCEPT, treeWalker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    filterExcludeElement
  );
  for (; treeWalker.nextNode(); )
    ;
  return finalText;
}

// dom/get_paragraphs.ts
var paragraphAutoIncreaceId = 1, paragraphEntities = /* @__PURE__ */ new Map();
function getParagraphEntities() {
  return paragraphEntities;
}
function getParagraph(id) {
  return paragraphEntities.get(id);
}
function setParagraph(id, paragraph) {
  paragraphEntities.set(id, paragraph);
}
function cleanParagraphs() {
  paragraphEntities.clear();
}
function isMarkedByParagraph(targetElement) {
  if (!isMarked(targetElement, sourceElementMarkAttributeName))
    return !1;
  if (isMarked(targetElement, sourceElementTranslatedMarkAttributeName))
    return !0;
  let markId = getAttribute(
    targetElement,
    sourceElementParagraphAttributeName
  );
  if (!markId)
    return !1;
  let paragraphId = parseInt(markId), isExist = paragraphEntities.has(paragraphId);
  if (!isExist) {
    let maybeTargetElement = document.getElementById(
      `${translationTargetElementWrapperClass}-${paragraphId}`
    );
    maybeTargetElement && maybeTargetElement.remove();
  }
  return isExist;
}
function addToParagraphs(paragraph, allParagraphs) {
  let newParagraph = {
    ...paragraph,
    id: paragraphAutoIncreaceId++,
    languageByClient: "auto",
    languageByLocal: "auto"
  };
  newParagraph.elements.forEach((element) => {
    element instanceof HTMLElement && (setAttribute(element, sourceElementMarkAttributeName, "1"), setAttribute(
      element,
      sourceElementParagraphAttributeName,
      `${newParagraph.id}`
    ));
  }), allParagraphs.push(newParagraph), paragraphEntities.set(newParagraph.id, {
    ...newParagraph,
    state: "Original",
    observers: []
  });
}
async function getParagraphs(rootFrame, containers, ctx) {
  let allParagraphs = [], { targetLanguage, rule } = ctx;
  for (let container of containers) {
    if (isExcludeElement(container, rule, !1))
      continue;
    let isPreWhitespaceContainer = isMarked(
      container,
      sourcePreWhitespaceMarkAttributeName
    ), inlineElementGroups = [];
    if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
      if (!isMarkedByParagraph(container)) {
        let paragraph = elementsToParagraph(
          [container],
          !0,
          rootFrame,
          ctx
        );
        paragraph && addToParagraphs(paragraph, allParagraphs);
      }
      continue;
    }
    let currentVariableIndex = 0, filter = (node2) => {
      if (!(node2.nodeType === Node.TEXT_NODE || node2.nodeType === Node.ELEMENT_NODE))
        return NodeFilter.FILTER_REJECT;
      if (node2.nodeType === Node.ELEMENT_NODE) {
        let element = node2;
        if (element.isContentEditable || isMarkedByParagraph(
          node2
        ))
          return NodeFilter.FILTER_REJECT;
        if (setAttribute(element, sourceElementMarkAttributeName, "1"), isMarked(element, sourceAtomicBlockElementMarkAttributeName)) {
          if (inlineElementGroups.length > 0) {
            let paragraph2 = elementsToParagraph(
              [...inlineElementGroups],
              isPreWhitespaceContainer,
              rootFrame,
              ctx
            );
            currentVariableIndex = 0, paragraph2 && addToParagraphs(paragraph2, allParagraphs), inlineElementGroups.length = 0;
          }
          inlineElementGroups.push(element);
          let paragraph = elementsToParagraph(
            [...inlineElementGroups],
            isPreWhitespaceContainer,
            rootFrame,
            ctx
          );
          return currentVariableIndex = 0, paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0, NodeFilter.FILTER_REJECT;
        }
      }
      if (isExcludeElement(node2, rule, !0)) {
        if (isMatchTags(node2.nodeName, ["CODE", "TT"]) && isMatchTags(node2.parentNode?.nodeName, ["PRE"]))
          return NodeFilter.FILTER_REJECT;
        if (isInlineElement(
          node2,
          rule
        ))
          return currentVariableIndex = handleInlineElement(
            node2,
            inlineElementGroups,
            allParagraphs,
            isPreWhitespaceContainer,
            rootFrame,
            ctx,
            currentVariableIndex
          ).currentVariableIndex, NodeFilter.FILTER_REJECT;
        if (inlineElementGroups.length > 0) {
          let paragraph = elementsToParagraph(
            [...inlineElementGroups],
            isPreWhitespaceContainer,
            rootFrame,
            ctx
          );
          currentVariableIndex = 0, paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
        }
        return NodeFilter.FILTER_REJECT;
      }
      return isMatchTags(node2.nodeName, ["PRE"]) && node2.classList.contains("code") ? NodeFilter.FILTER_REJECT : isInlineElement(
        node2,
        rule
      ) ? (currentVariableIndex = handleInlineElement(
        node2,
        inlineElementGroups,
        allParagraphs,
        isPreWhitespaceContainer,
        rootFrame,
        ctx,
        currentVariableIndex
      ).currentVariableIndex, NodeFilter.FILTER_REJECT) : NodeFilter.FILTER_ACCEPT;
    }, elementIter = document.createTreeWalker(
      container,
      NodeFilter.SHOW_ELEMENT,
      filter
    ), node = elementIter.nextNode();
    for (; node; ) {
      if (inlineElementGroups.length > 0) {
        let paragraph = elementsToParagraph(
          [...inlineElementGroups],
          isPreWhitespaceContainer,
          rootFrame,
          ctx
        );
        currentVariableIndex = 0, paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
      }
      node = elementIter.nextNode();
    }
    if (inlineElementGroups.length > 0) {
      let paragraph = elementsToParagraph(
        [...inlineElementGroups],
        isPreWhitespaceContainer,
        rootFrame,
        ctx
      );
      currentVariableIndex = 0, paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
    }
  }
  let promises = allParagraphs.map((paragraph) => {
    let { text } = paragraph;
    return detectLanguage({
      text,
      minLength: 10
    });
  }), results = await Promise.all(promises), filterdParagraphs = [], excludeLanguages = ctx?.config?.translationLanguagePattern?.excludeMatches || [], currentPageLanguageByClient2 = "auto";
  ctx.state.isDetectParagraphLanguage || (currentPageLanguageByClient2 = getCurrentPageLanguageByClient());
  let currentPageLanguageByLocal = getCurrentPageLanguage();
  return results.forEach((result, index) => {
    let currentLanguageByLocal = result;
    currentLanguageByLocal === "auto" && (currentLanguageByLocal = currentPageLanguageByLocal);
    let newParagraph = {
      ...allParagraphs[index],
      languageByLocal: currentLanguageByLocal,
      languageByClient: currentPageLanguageByClient2 || "auto"
    };
    if (newParagraph.text.length < ctx.rule.languageDetectMinTextCount && (newParagraph.languageByLocal = "auto"), paragraphEntities.set(newParagraph.id, {
      ...newParagraph,
      state: "Original",
      observers: []
    }), !isSameTargetLanguage(result, targetLanguage)) {
      if (excludeLanguages.length > 0 && excludeLanguages.some((language) => isSameTargetLanguage(result, language)))
        return;
      filterdParagraphs.push(newParagraph);
    }
  }), filterdParagraphs;
}
function getInlineElementsOfInlineElement(root2, isPreWhitespaceContainer, rootFrame, ctx, currentVariableIndex) {
  let elementState = {
    element: root2
  }, node = null, isWhiteSpaceNodeOfLastElement = !1, fullText = "", variables = [], elements = [], filter = (node2) => {
    if (node2.nodeType === Node.TEXT_NODE)
      return NodeFilter.FILTER_ACCEPT;
    if (node2.nodeType === Node.ELEMENT_NODE && isStayOriginalElement(node2, ctx.rule)) {
      let parentElementParagraph = elementsToParagraph(
        [{
          element: node2,
          forceTranslate: !0,
          currentVariableIndex
        }],
        isPreWhitespaceContainer,
        rootFrame,
        ctx
      );
      return currentVariableIndex += parentElementParagraph?.variables?.length || 0, parentElementParagraph && (fullText += parentElementParagraph.text, parentElementParagraph && parentElementParagraph.variables && (variables = variables.concat(parentElementParagraph.variables))), NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  }, treeWalker = document.createTreeWalker(
    root2,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    filter
  );
  for (; node = treeWalker.nextNode(); ) {
    if (node.nodeType !== Node.TEXT_NODE)
      continue;
    let rawText = node.textContent || "", textContent = rawText.trim();
    if (!isWhiteSpaceNodeOfLastElement && rawText.length > 0 && textContent.length === 0) {
      isWhiteSpaceNodeOfLastElement = !0, fullText += " ", elements.push(" ");
      continue;
    }
    if (textContent.length > 0) {
      let parent = node.parentElement;
      if (parent === root2) {
        let text = textContent.replace(/\s+/g, " ");
        fullText += text, elements.push(text);
      } else {
        elements.push(parent);
        let parentElementParagraph = elementsToParagraph(
          [{
            element: parent,
            forceTranslate: !0,
            currentVariableIndex
          }],
          isPreWhitespaceContainer,
          rootFrame,
          ctx
        );
        currentVariableIndex += parentElementParagraph?.variables?.length || 0, parentElementParagraph && (fullText += parentElementParagraph.text, parentElementParagraph && parentElementParagraph.variables && (variables = variables.concat(parentElementParagraph.variables)));
      }
      isWhiteSpaceNodeOfLastElement = !1;
    }
  }
  let lastElement = elements[elements.length - 1];
  if (lastElement && typeof lastElement != "string") {
    let whitespace = getWhitespace(
      lastElement.nextSibling,
      isPreWhitespaceContainer
    );
    whitespace && (elements.push(whitespace), fullText += " ");
  }
  if (typeof elements[elements.length - 1] != "string") {
    let whitespace = getWhitespace(
      root2.nextSibling,
      isPreWhitespaceContainer
    );
    whitespace && (elements.push(whitespace), fullText += " ");
  }
  return elementState.text = fullText, elementState.variables = variables, elementState;
}
function handleInlineElement(node, inlineElementGroups, allParagraphs, isPreWhitespaceContainer, rootFrame, ctx, currentVariableIndex) {
  let previouseElement = node.previousElementSibling;
  if (previouseElement && !isInlineElement(
    previouseElement,
    ctx.rule
  ) && inlineElementGroups.length > 0) {
    let paragraph = elementsToParagraph(
      [...inlineElementGroups],
      isPreWhitespaceContainer,
      rootFrame,
      ctx
    );
    paragraph && addToParagraphs(paragraph, allParagraphs), inlineElementGroups.length = 0;
  }
  if (isExcludeElement(
    node,
    ctx.rule,
    !1
  ))
    isMetaElement(node, ctx.rule) || (isStayOriginalElement(node, ctx.rule) && (currentVariableIndex += 1), inlineElementGroups.push(node));
  else if (isStayOriginalElement(node, ctx.rule))
    inlineElementGroups.push(node), currentVariableIndex += 1;
  else if (isContainsStayOriginalElement(node, ctx.rule)) {
    let inlineGroupElementState = getInlineElementsOfInlineElement(
      node,
      isPreWhitespaceContainer,
      rootFrame,
      ctx,
      currentVariableIndex
    );
    inlineGroupElementState && inlineGroupElementState.text && (inlineGroupElementState.variables && (currentVariableIndex += inlineGroupElementState.variables.length), inlineElementGroups.push(
      inlineGroupElementState
    ));
  } else
    inlineElementGroups.push(node);
  return {
    currentVariableIndex
  };
}

// dom/get_pdf_paragraphs.ts
async function getParagraphs2(rootFrame, containers, ctx, targetContainers) {
  let allParagraphs = [], { rule } = ctx;
  for (let i2 = 0; i2 < containers.length; i2++) {
    let container = containers[i2], targetContainer = targetContainers[i2];
    if (!targetContainer)
      throw new Error("targetContainer is null");
    let inlineElementGroups = [], isFirstElementOfParagraph = !0, lastLineFirstElementInfo = null, pdfContainerFilter = function(node2) {
      let element = node2;
      if (isMatchTags(element.nodeName, ["DIV", "BR"]))
        return isFirstElementOfParagraph = !0, NodeFilter.FILTER_REJECT;
      if (element.classList.contains("markedContent"))
        return NodeFilter.FILTER_ACCEPT;
      if (isMarkedByParagraph2(
        node2
      ))
        return NodeFilter.FILTER_REJECT;
      if (setAttribute(element, sourceElementMarkAttributeName, "1"), isInlineElement(element, rule)) {
        let lastElement = getLastHTMLElement(inlineElementGroups), currentElementStyle = globalThis.getComputedStyle(element);
        if (!lastElement)
          inlineElementGroups.push(formatElement(element, currentElementStyle));
        else {
          let lastElementStyle = globalThis.getComputedStyle(lastElement), lastElementInfo = getElementInfoByComputedStyle(
            lastElementStyle
          ), currentElementInfo = getElementInfoByComputedStyle(
            currentElementStyle
          ), distanceInfo = getDistance(currentElementInfo, lastElementInfo), isNewParagraph = !1;
          if (isFirstElementOfParagraph && lastLineFirstElementInfo && getDistance(currentElementInfo, lastLineFirstElementInfo).left >= 1.5 && lastLineFirstElementInfo.left > -3 && (isNewParagraph = !0), !isNewParagraph && isFirstElementOfParagraph) {
            let trimedText = (element.innerText || element.textContent || "").trim();
            (trimedText.startsWith("\u2022") || trimedText.charCodeAt(0) === 61623 || /^\d+\./.test(trimedText)) && (isNewParagraph = !0);
          }
          !isNewParagraph && isFirstElementOfParagraph && getLastHTMLElement(inlineElementGroups) && getHTMLElements(inlineElementGroups).reduce(
            (max, element2) => {
              let elementInfo = getElementInfoByComputedStyle(
                globalThis.getComputedStyle(element2)
              );
              return Math.max(max, elementInfo.right);
            },
            0
          ) - lastElementInfo.right > rule.pdfNewParagraphIndentRightIndentPx && (isNewParagraph = !0), isFirstElementOfParagraph && (lastLineFirstElementInfo = currentElementInfo, isFirstElementOfParagraph = !1), isNewParagraph || (isNewParagraph = getIsNewParagraph(distanceInfo, rule)), isNewParagraph && tryToAddToParagraph(
            inlineElementGroups,
            allParagraphs,
            rootFrame,
            ctx,
            targetContainer
          ), inlineElementGroups.push(formatElement(element, currentElementStyle)), inlineElementGroups.push(" ");
        }
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }, elementIter = document.createTreeWalker(
      container,
      NodeFilter.SHOW_ELEMENT,
      pdfContainerFilter
    ), node = elementIter.nextNode();
    for (; node; )
      node = elementIter.nextNode();
    tryToAddToParagraph(
      inlineElementGroups,
      allParagraphs,
      rootFrame,
      ctx,
      targetContainer
    );
  }
  return allParagraphs;
}
function tryToAddToParagraph(inlineElementGroups, allParagraphs, rootFrame, ctx, targetContainer) {
  if (inlineElementGroups.length > 0) {
    let paragraph = elementsToParagraph(
      [...inlineElementGroups],
      !1,
      rootFrame,
      ctx
    );
    paragraph && (paragraph.isPdf = !0, paragraph.targetContainer = targetContainer, paragraph.inline = !1, addToParagraphs(paragraph, allParagraphs)), inlineElementGroups.length = 0;
  }
}
function getElementInfoByComputedStyle(style) {
  return {
    top: parseFloat(style.top.slice(0, -2)),
    left: parseFloat(style.left.slice(0, -2)),
    right: parseFloat(style.left.slice(0, -2)) + parseFloat(style.width.slice(0, -2)),
    fontSize: parseFloat(style.fontSize.slice(0, -2))
  };
}
function getIsNewParagraph(distance, rule) {
  return distance.fontSize > 2 || distance.fontSize < -2 || distance.top >= rule.pdfNewParagraphLineHeight || distance.top <= rule.pdfNewParagraphLineHeight * -1;
}
function getDistance(elementInfo1, elementInfo2) {
  let elementBasedFontSize = elementInfo2.fontSize, currentElementFontSize = elementInfo1.fontSize;
  return {
    top: (elementInfo1.top - elementInfo2.top) / elementBasedFontSize,
    left: (elementInfo1.left - elementInfo2.left) / elementBasedFontSize,
    fontSize: currentElementFontSize - elementBasedFontSize
  };
}
function formatElement(element, style) {
  return style.fontFamily === "monospace" ? {
    element,
    isStayOriginal: !0,
    targetTagName: "code"
  } : element;
}
function isMarkedByParagraph2(targetElement) {
  if (!isMarked(targetElement, sourceElementMarkAttributeName))
    return !1;
  if (isMarked(targetElement, sourceElementTranslatedMarkAttributeName))
    return !0;
  let markId = getAttribute(
    targetElement,
    sourceElementParagraphAttributeName
  );
  if (!markId)
    return !1;
  let paragraphId = parseInt(markId), isExist = getParagraphEntities().has(paragraphId);
  if (!isExist) {
    let maybeTargetElement = document.getElementById(
      `${translationTargetElementWrapperClass}-${paragraphId}`
    );
    maybeTargetElement && maybeTargetElement.remove();
  }
  return isExist;
}

// utils/escape_html.ts
function escapeHTML(htmlStr) {
  return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// dom/paragraph_to_html.ts
function getTranslationWrapperClassNames(translationTheme, isInline, additonalClassNames = [], isPreWhitespace, isPdf) {
  let classList = ["notranslate"];
  return isPreWhitespace && classList.push(
    translationTargetTranslationElementPreWhitespaceWrapperClass
  ), translationTheme && (classList.push(
    `${brandId}-target-translation-theme-${translationTheme}`
  ), isInline ? classList.push(
    `${translationTargetTranslationElementInlineWrapperClass}-theme-${translationTheme}`
  ) : classList.push(
    `${translationTargetTranslationElementBlockWrapperClass}-theme-${translationTheme}`
  )), additonalClassNames.length > 0 && classList.push(...additonalClassNames), isInline ? classList.push(translationTargetTranslationElementInlineWrapperClass) : (classList.push(translationTargetTranslationElementBlockWrapperClass), isPdf && classList.push(translationTargetTranslationPdfElementBlockWrapperClass)), classList;
}
function getTranslationInnerClassNames(translationTheme) {
  let innerClassList = [
    "notranslate",
    translationTargetInnerElementWrapperClass
  ];
  return translationTheme && innerClassList.push(
    `${brandId}-target-translation-theme-${translationTheme}-inner`
  ), innerClassList;
}
function paragraphToHtml(sourceItem, sentence, ctx) {
  let { rule, state } = ctx, { translationTheme } = state, { variables, isVertical } = sourceItem;
  variables = variables || [];
  let { text: targetText } = sentence, { wrapperPrefix, wrapperSuffix } = rule, delimiters = getPlaceholderDelimiters(ctx), position = "afterend", regex = new RegExp(`${delimiters[0]}(\\d+)${delimiters[1]}`, "g"), html = escapeHTML(targetText);
  variables.length > 0 && (html = html.replace(regex, (match) => {
    let matchPositonAtHtml = html.indexOf(match), isStartWhiteSpace = html[matchPositonAtHtml - 1] === " ", isEndWhiteSpace = html[matchPositonAtHtml + match.length] === " ", matchNumberStr = match.slice(
      delimiters[0].length,
      -delimiters[1].length
    ), matchNumber = Number(matchNumberStr);
    if (isNaN(matchNumber))
      return match;
    let variable = variables[Number(matchNumber)];
    if (variable && variable.type === "element") {
      let variableHtml = variable.value.outerHTML;
      return isStartWhiteSpace || (variableHtml = " " + variableHtml), isEndWhiteSpace || (variableHtml = variableHtml + " "), variableHtml;
    } else
      log_default.error("variable type not supported", variable, match);
    return match;
  }));
  let classList = getTranslationWrapperClassNames(
    translationTheme,
    sourceItem.inline,
    rule.translationClasses || [],
    sourceItem.preWhitespace,
    ctx.rule.isPdf
  );
  isVertical && classList.push(translationTargetTranslationElementVerticalBlockClass);
  let innerClassList = getTranslationInnerClassNames(
    translationTheme
  ), blockStyleStr = "";
  return rule.translationBlockStyle && (blockStyleStr = `style="${rule.translationBlockStyle}"`), html = `<font ${blockStyleStr} class="${classList.join(" ")}"><font class="${innerClassList.join(" ")}">${html}</font></font>`, sourceItem.inline || (wrapperPrefix === "smart" ? html = `<br />${html}` : html = `${wrapperPrefix}${html}`, wrapperSuffix === "smart" ? html = `${html}` : html = `${html}${wrapperSuffix}`), sourceItem.inline && (html = `<font class="notranslate">&#160;</font>${html}`), {
    html,
    position
  };
}

// dom/normalize_container.ts
function normalizeContainer(containers, rule) {
  let hiddenElements = [];
  for (let container of containers) {
    if (isMarked(container, sourceAtomicBlockElementMarkAttributeName))
      continue;
    if (setAttribute(container, targetContainerElementAttributeName, "1"), container.normalize(), rule.lineBreakMaxTextCount > 0) {
      let treeFilter = (node) => node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, rule, !0) ? NodeFilter.FILTER_REJECT : (node.nodeType === Node.TEXT_NODE && (node.textContent ? node.textContent.trim() : "").length >= rule.lineBreakMaxTextCount && addLineBreakToText(node, rule.lineBreakMaxTextCount), NodeFilter.FILTER_ACCEPT), walk = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
        treeFilter
      );
      for (; walk.nextNode(); )
        ;
    }
    if (!(rule.excludeTags.includes("PRE") || rule.additionalExcludeTags.includes("PRE")) && rule.isTransformPreTagNewLine) {
      let preTags = container.querySelectorAll("pre");
      for (let preTag of preTags)
        formatPreHtml(preTag);
    }
    rule.preWhitespaceDetectedTags.includes(container.tagName) && (hasMark(container, sourcePreWhitespaceMarkAttributeName) || (isPreElementByStyle(container) ? (setAttribute(container, sourcePreWhitespaceMarkAttributeName, "1"), rule.isTransformPreTagNewLine && formatPreHtml(container)) : setAttribute(container, sourcePreWhitespaceMarkAttributeName, "0"))), wrapTextNode(
      0,
      container,
      rule,
      hiddenElements
    );
  }
  return {
    hiddenElements
  };
}
function wrapTextNode(depth, root2, rule, displayNoneElements = []) {
  if (isMarked(root2, sourceAtomicBlockElementMarkAttributeName))
    return;
  let isSingleInlineElement = !1;
  if (depth === 0) {
    let isStayOriginal = isStayOriginalElement(root2, rule);
    root2.childNodes && root2.childNodes.length === 1 && root2.nodeType === Node.ELEMENT_NODE && isInlineElement(
      root2,
      rule
    ) && !isStayOriginal && (isSingleInlineElement = !0);
  }
  if (root2 && root2.childNodes && root2.childNodes.length > 0) {
    for (let node of root2.childNodes)
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (isExcludeElement(node, rule, !1))
          continue;
        {
          let computedStyle = globalThis.getComputedStyle(
            node
          ), tempIsExcludeElement = !1;
          if (computedStyle.display === "none" && (displayNoneElements.push(node), tempIsExcludeElement = !0), !tempIsExcludeElement) {
            let clip = computedStyle.clip, zIndex = computedStyle.zIndex, height = computedStyle.height, width = computedStyle.width, formatedZIndex = 0;
            if (zIndex.startsWith("-")) {
              let zIndexNumber = parseInt(zIndex);
              isNaN(zIndexNumber) || (formatedZIndex = zIndexNumber);
            }
            if ((clip === "rect(1px, 1px, 1px, 1px)" || formatedZIndex < 0) && (tempIsExcludeElement = !0), !tempIsExcludeElement && node.nodeName !== "BR") {
              let heightNumber = parseInt(height), widthNumber = parseInt(width);
              !isNaN(heightNumber) && !isNaN(widthNumber) && (heightNumber > 0 && heightNumber < 8 || widthNumber > 0 && widthNumber <= 8) && (tempIsExcludeElement = !0);
            }
          }
          if (tempIsExcludeElement) {
            setAttribute(
              node,
              sourceElementExcludeAttributeName,
              "1",
              !0
            );
            continue;
          } else {
            if (isMatchTags(node.nodeName, ["DIV"])) {
              let nodeElement = node;
              if (node && nodeElement.style && nodeElement.style.display && nodeElement.style.display === "initial")
                continue;
              if (computedStyle.display === "inline" && !isMarked(
                node,
                sourceBlockElementMarkAttributeName
              )) {
                setAttribute(
                  node,
                  sourceInlineElementMarkAttributeName,
                  "1"
                );
                continue;
              }
            } else if (isMatchTags(node.nodeName, ["SPAN", "A"])) {
              if (!computedStyle.display.startsWith("inline")) {
                isMarked(
                  node,
                  sourceInlineElementMarkAttributeName
                ) || (setAttribute(
                  node,
                  sourceBlockElementMarkAttributeName,
                  "1"
                ), wrapTextNode(
                  depth + 1,
                  node,
                  rule,
                  displayNoneElements
                ));
                continue;
              }
            } else if (isUnknowTag(node, rule))
              if (isInlineElement(
                node,
                rule
              )) {
                if (!isMarked(
                  node,
                  sourceBlockElementMarkAttributeName
                ) && !isMarked(
                  node,
                  sourceInlineElementMarkAttributeName
                )) {
                  setAttribute(
                    node,
                    sourceInlineElementMarkAttributeName,
                    "1"
                  );
                  continue;
                }
              } else {
                !isMarked(
                  node,
                  sourceBlockElementMarkAttributeName
                ) && !isMarked(
                  node,
                  sourceInlineElementMarkAttributeName
                ) && setAttribute(
                  node,
                  sourceBlockElementMarkAttributeName,
                  "1"
                ), wrapTextNode(
                  depth + 1,
                  node,
                  rule,
                  displayNoneElements
                );
                continue;
              }
            if (isInlineElement(node, rule) && !isSingleInlineElement)
              continue;
            wrapTextNode(
              depth + 1,
              node,
              rule,
              displayNoneElements
            );
          }
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        if (text && text.trim().length > 0) {
          let span = document.createElement("font");
          node.after(span), span.appendChild(node);
        }
      }
  }
}
function isPreElementByStyle(element) {
  let style = window.getComputedStyle(element);
  return style.whiteSpace.startsWith("pre") || style.whiteSpace === "break-spaces";
}
function formatPreHtml(preElement) {
  let newHtml = preElement.innerHTML.replace(/\n/g, "<br />");
  preElement.innerHTML = newHtml;
}
function addLineBreakToText(textNode, maxLength) {
  let text = textNode.textContent || "";
  if (text.trim().length <= maxLength)
    return;
  let boundaryIndex = [".", "?", "!", "\u3002", "\uFF1F", "\uFF01"].reduce((acc, boundary) => {
    let index = text.lastIndexOf(boundary, maxLength);
    return index > acc ? index : acc;
  }, -1);
  if (boundaryIndex === -1)
    text.length > maxLength + 20 && addLineBreakToText(textNode, maxLength + 20);
  else {
    let theText = text.slice(boundaryIndex + 1);
    boundaryIndex++, theText.startsWith(" ") && boundaryIndex++;
    let theLastTextNode = textNode.splitText(boundaryIndex), br = document.createElement("br");
    theLastTextNode.parentNode?.insertBefore(br, theLastTextNode), boundaryIndex + 1 < text.length && addLineBreakToText(theLastTextNode, maxLength);
  }
}

// dom/normalize_pdf_container.ts
function normalizeContainer2(containers, _rule) {
  let targetContainers = [];
  for (let container of containers) {
    let maxRight = 0, minLeft = 1e5, rightContainer = document.createElement("div"), treeFilter = (node) => {
      let element = node;
      if (isMatchTags(element.nodeName, ["DIV", "BR"]))
        return NodeFilter.FILTER_REJECT;
      if (element.classList.contains("markedContent"))
        return NodeFilter.FILTER_ACCEPT;
      if (isMatchTags(element.nodeName, ["SPAN"])) {
        let rect = element.getBoundingClientRect(), style = globalThis.getComputedStyle(element), right = rect.right, left = rect.left, top = style.top.slice(0, -2), fontsize = style.fontSize.slice(0, -2);
        return right > maxRight && (maxRight = right), left < minLeft && (minLeft = left), setAttribute(element, sourceElementLeft, `${left}`), setAttribute(element, sourceElementRight, `${right}`), setAttribute(element, sourceElementTop, top), setAttribute(element, sourceElementFontSize, fontsize), NodeFilter.FILTER_ACCEPT;
      } else
        return NodeFilter.FILTER_ACCEPT;
    }, walk = document.createTreeWalker(
      container,
      NodeFilter.SHOW_ELEMENT,
      treeFilter
    );
    for (; walk.nextNode(); )
      ;
    let realWidth = maxRight - minLeft;
    realWidth < 600 && (realWidth = 600), targetContainers.push(rightContainer), rightContainer.style.left = maxRight + "px", rightContainer.style.width = maxRight + "px", rightContainer.classList.add(translationPdfTargetContainerClass), container.childNodes.length > 0 && container.insertBefore(rightContainer, container.childNodes[0]);
  }
  return { targetContainers };
}

// utils/rate_limiter.ts
var RateLimiter = class {
  constructor(options2) {
    this.strictTicks = [];
    this.options = options2, this.setOptions(options2);
  }
  setOptions(options2) {
    options2 && (options2.interval && (this.options.interval = Number(options2.interval)), options2.limit && (this.options.limit = Number(options2.limit)));
  }
  wait() {
    return new Promise((resolve, _reject) => {
      setTimeout(resolve, this.getDelay());
    });
  }
  getDelay() {
    let strictTicks = this.strictTicks, limit = this.options.limit, interval = this.options.interval, now = Date.now();
    if (strictTicks.length < limit)
      return strictTicks.push(now), 0;
    let earliestTime = strictTicks.shift() + interval;
    return now >= earliestTime ? (strictTicks.push(now), 0) : (strictTicks.push(earliestTime), earliestTime - now);
  }
};

// libs/protoframe/util.ts
function hasValue(value) {
  return value != null;
}

// libs/protoframe/connector.ts
function mkPayloadType(protocol, action, type) {
  return `${protocol.type}#${action}#${type}`;
}
function mkPayloadBody(protocol, action, type, id, body) {
  return {
    body,
    id,
    type: mkPayloadType(protocol, action, type)
  };
}
function mkPayloadResponse(protocol, type, id, response) {
  return {
    id,
    response,
    type: mkPayloadType(protocol, "ask", type)
  };
}
function isPayloadBodyOfType(protocol, action, type, payload) {
  if (hasValue(payload)) {
    let payloadType = payload.type;
    if (hasValue(payloadType) && hasValue(payload.body)) {
      let [p4, a3, t3] = payloadType.split("#");
      return p4 === protocol.type && a3 === action && t3 === type;
    } else
      return !1;
  } else
    return !1;
}
function isPayloadResponseOfType(protocol, type, payload) {
  if (hasValue(payload)) {
    let payloadType = payload.type;
    if (hasValue(payloadType) && hasValue(payload.response)) {
      let [p4, a3, t3] = payloadType.split("#");
      return p4 === protocol.type && a3 === "ask" && t3 === type;
    } else
      return !1;
  } else
    return !1;
}
function destroyAll(listeners3) {
  listeners3.forEach(([w4, l2]) => w4.removeEventListener("message", l2)), listeners3.length = 0;
}
function awaitResponse(thisWindow, protocol, type, id) {
  return new Promise((accept) => {
    let handle = (ev) => {
      let payload = ev.data;
      isPayloadResponseOfType(protocol, type, payload) && payload.id === id && (thisWindow.removeEventListener("message", handle), accept(payload.response));
    };
    thisWindow.addEventListener("message", handle);
  });
}
function handleTell0(thisWindow, protocol, type, handler) {
  let listener = (ev) => {
    let payload = ev.data;
    isPayloadBodyOfType(protocol, "tell", type, payload) && handler(payload.body);
  };
  return thisWindow.addEventListener("message", listener), [thisWindow, listener];
}
function handleAsk0(thisWindow, targetWindow, protocol, type, targetOrigin, handler) {
  let listener = async (ev) => {
    let payload = ev.data;
    if (isPayloadBodyOfType(protocol, "ask", type, payload)) {
      let response = await handler(payload.body);
      targetWindow = ev.source, targetWindow.postMessage(
        mkPayloadResponse(protocol, type, payload.id, response),
        ev.origin
      );
    }
  };
  return thisWindow.addEventListener("message", listener), [thisWindow, listener];
}
function tell0(targetWindow, protocol, type, body, targetOrigin) {
  let id = Math.random().toString();
  return targetWindow.postMessage(
    mkPayloadBody(protocol, "tell", type, id, body),
    targetOrigin
  );
}
async function ask0(thisWindow, targetWindow, protocol, type, body, targetOrigin, timeout) {
  let id = Math.random().toString(), run2 = new Promise(async (accept, reject) => {
    let timeoutHandler = setTimeout(
      () => reject(new Error(`Failed to get response within ${timeout}ms`)),
      timeout
    ), response = await awaitResponse(thisWindow, protocol, type, id);
    clearTimeout(timeoutHandler), accept(response);
  });
  return targetWindow.postMessage(
    mkPayloadBody(protocol, "ask", type, id, body),
    targetOrigin
  ), run2;
}
var ProtoframePubsub = class {
  constructor(protocol, targetWindow, thisWindow = window, targetOrigin = "*") {
    this.protocol = protocol;
    this.targetWindow = targetWindow;
    this.thisWindow = thisWindow;
    this.targetOrigin = targetOrigin;
    this.listeners = [];
    handleAsk0(
      thisWindow,
      targetWindow,
      this.getSystemProtocol("ping"),
      "ping",
      targetOrigin,
      () => Promise.resolve({})
    );
  }
  /**
   * Connect to the target configured in the supplied pubsub connector by
   * sending ping requests over and over until we get a response.
   *
   * @param pubsub The pubsub connector to wait until is "connected" to its
   *  target
   * @param retries How many times to retry and ping the target. By default,
   *  this will retry 50 times (thus waiting 25 seconds total)
   * @param timeout How long to wait for a response from the target before
   *  retrying. By default the timeout is 500ms (thus waiting 25 seconds total)
   */
  static async connect(pubsub, retries = 10, timeout = 500) {
    for (let i2 = 0; i2 <= retries; i2++)
      try {
        return await pubsub.ping({ timeout }), pubsub;
      } catch {
        continue;
      }
    throw new Error(
      `Could not connect on protocol ${pubsub.protocol.type} after ${retries * timeout}ms`
    );
  }
  /**
   * We are a "parent" page that is embedding an iframe, and we wish to connect
   * to that iframe for communication.
   *
   * @param protocol The protocol this connector will communicate with
   * @param iframe The target iframe HTML element we are connecting to
   * @param targetOrigin The target scheme and host we expect the receiver to be
   * @param thisWindow The parent window (our window). This should normally be
   *  the current `window`
   */
  static parent(protocol, iframe, targetOrigin = "*", thisWindow = window) {
    let targetWindow = iframe.contentWindow;
    if (hasValue(targetWindow))
      return new ProtoframePubsub(
        protocol,
        targetWindow,
        thisWindow,
        targetOrigin
      );
    throw new Error("iframe.contentWindow was null");
  }
  /**
   * We are an "iframe" page that will be embedded, and we wish to connect to a
   * parent page for communication.
   *
   * @param protocol The protocol this connector will communicate with
   * @param targetOrigin The target scheme and host we expect the receiver to be
   * @param thisWindow The window of the current iframe. This should normally be
   *  the current `window`
   * @param targetWindow The window of the parent frame. This should normally be
   *  the `window.parent`
   */
  static iframe(protocol, targetOrigin = "*", {
    thisWindow = window,
    targetWindow = window.parent
  } = {}) {
    return new ProtoframePubsub(
      protocol,
      targetWindow,
      thisWindow,
      targetOrigin
    );
  }
  static rootIframe(protocol, targetOrigin = "*", {
    thisWindow = window
  } = {}) {
    return new ProtoframePubsub(
      protocol,
      null,
      thisWindow,
      targetOrigin
    );
  }
  getSystemProtocol(type) {
    return {
      type: `system|${type}`
    };
  }
  /**
   * Send a 'ping' request to check if there is a listener open at the target
   * window. If this times out, then it means no listener was available *at the
   * time the ping request was sent*. Since requests are not buffered, then this
   * should be retried if we're waiting for some target iframe to start up and
   * load its assets. See `ProtoframePubsub.connect` as an implementation of
   * this functionality.
   *
   * @param timeout How long to wait for the reply before resulting in an error
   */
  async ping({ timeout = 1e4 }) {
    await ask0(
      this.thisWindow,
      this.targetWindow,
      this.getSystemProtocol("ping"),
      "ping",
      {},
      this.targetOrigin,
      timeout
    );
  }
  handleTell(type, handler) {
    this.listeners.push(
      handleTell0(this.thisWindow, this.protocol, type, handler)
    );
  }
  tell(type, body) {
    tell0(this.targetWindow, this.protocol, type, body, this.targetOrigin);
  }
  handleAsk(type, handler) {
    this.listeners.push(
      handleAsk0(
        this.thisWindow,
        this.targetWindow,
        this.protocol,
        type,
        this.targetOrigin,
        handler
      )
    );
  }
  ask(type, body, timeout = 1e4) {
    if (this.targetWindow)
      return ask0(
        this.thisWindow,
        this.targetWindow,
        this.protocol,
        type,
        body,
        this.targetOrigin,
        timeout
      );
    throw new Error("target window is requried");
  }
  destroy() {
    destroyAll(this.listeners);
  }
};

// child_iframe_channel.ts
var theChannel;
async function setupChildIframeChannel() {
  if (getIsInIframe()) {
    let topFrame = globalThis;
    for (; topFrame.top != topFrame.self; )
      topFrame = topFrame.top;
    let topFrameInstance = ProtoframePubsub.iframe(
      childFrameToRootFrameIdentifier,
      "*",
      {
        targetWindow: topFrame
      }
    );
    theChannel = topFrameInstance, await ProtoframePubsub.connect(topFrameInstance).catch((e) => {
      log_default.error("connect with parent frame error", e);
    });
  }
}
function getIframeMessageChannel() {
  return theChannel;
}

// rate_limiter_bus.ts
var defaultLimiter = new RateLimiter({ limit: 7, interval: 1250 }), limiterMap = {
  tencent: new RateLimiter({ limit: 3, interval: 1050 }),
  baidu: new RateLimiter({ limit: 1, interval: 1550 }),
  strict: new RateLimiter({ limit: 1, interval: 1050 }),
  d: new RateLimiter({ limit: 1, interval: 1050 }),
  youdao: new RateLimiter({ limit: 5, interval: 1050 }),
  you: new RateLimiter({ limit: 5, interval: 1050 }),
  cai: new RateLimiter({ limit: 5, interval: 1050 }),
  google: new RateLimiter({ limit: 10, interval: 1050 }),
  deepl: new RateLimiter({ limit: 10, interval: 1050 }),
  transmart: new RateLimiter({ limit: 30, interval: 1050 }),
  papago: new RateLimiter({ limit: 3, interval: 1150 }),
  openai: new RateLimiter({ limit: 10, interval: 65e3 })
};
function getLimiter(key) {
  return limiterMap[key] || defaultLimiter;
}
async function getRateLimiterDelay(key) {
  if (getIsInIframe()) {
    let channel = getIframeMessageChannel();
    if (channel)
      try {
        return (await channel.ask("getRateLimitDelay", {
          key
        })).value;
      } catch (e) {
        return log_default.error("can not comunicate with root frame, use strict limiter", e), getLimiter("strict").getDelay();
      }
    else
      return getLimiter("strict").getDelay();
  } else
    return getLimiter(key).getDelay();
}
async function setRateLimiter(key, options2) {
  if (!getIsInIframe()) {
    let limiter = getLimiter(key);
    options2 && limiter.setOptions(options2);
  }
}
async function onRateLimiterDelayRequest(body) {
  let key = body.key;
  return { value: getLimiter(key).getDelay() };
}

// services/translation.ts
var Translation = class {
  constructor(serviceConfig, generalConfig, options2) {
    this.maxTextLength = 1800;
    this.isSupportList = !0;
    this.maxTextGroupLength = 200;
    this.serviceConfig = serviceConfig, this.generalConfig = generalConfig, this.translationOptions = options2;
  }
  async init() {
  }
  getMaxTextGroupLength() {
    return this.maxTextGroupLength;
  }
  getDefaultRateLimit() {
    return null;
  }
  translate(_payload) {
    throw new Error("Not implemented");
  }
  translateList(_payload) {
    throw new Error("Not implemented");
  }
  async multipleTranslate(payload, options2, everySentenceCallback) {
    if (payload.sentences.length === 0)
      return {
        sentences: []
      };
    let { sentences } = payload, tempSentenceGroups = [], globalError = null, languages2 = /* @__PURE__ */ new Set();
    for (let sentence of sentences)
      sentence.from && sentence.from !== "auto" && languages2.add(sentence.from);
    let isMultipleLanguage = !1;
    languages2.size > 1 && (isMultipleLanguage = !0);
    let maxTextLength = this.maxTextLength;
    this.serviceConfig && this.serviceConfig.maxTextLengthPerRequest && (maxTextLength = this.serviceConfig.maxTextLengthPerRequest);
    let maxTextGroupLength = this.maxTextGroupLength;
    this.serviceConfig && this.serviceConfig.maxTextGroupLengthPerRequest && (maxTextGroupLength = this.serviceConfig.maxTextGroupLengthPerRequest);
    try {
      tempSentenceGroups = splitSentences(
        sentences,
        maxTextLength,
        maxTextGroupLength
      );
    } catch (e) {
      if (everySentenceCallback)
        for (let i2 = 0; i2 < sentences.length; i2++) {
          let sentence = sentences[i2];
          everySentenceCallback(e, null, sentence);
        }
      throw e;
    }
    log_default.debug(
      "tempSentenceGroups",
      tempSentenceGroups.map((item) => item)
    );
    let promises = [], sentenceCallbacks = [], addToSentenceCallback = (index, sentenceCallback, error) => {
      let currentText = sentenceCallback.translatedTexts[0];
      sentenceCallbacks[index] || (sentenceCallbacks[index] = sentenceCallback, sentenceCallbacks[index].translatedTexts = Array(4).fill(null)), sentenceCallbacks[index].translatedTexts[sentenceCallback.partIndex] = currentText;
      let currentSentenceCallback = sentenceCallbacks[index], realLength = 0;
      for (let i2 = 0; i2 < currentSentenceCallback.sentenceTotalParts; i2++)
        currentSentenceCallback.translatedTexts[i2] !== null && (realLength += 1);
      if (realLength === currentSentenceCallback.sentenceTotalParts) {
        let translatedText = currentSentenceCallback.translatedTexts.join(""), translatedSentence = {
          ...currentSentenceCallback.sentence,
          text: translatedText
        };
        sentenceCallback.callback && sentenceCallback.callback(
          null,
          translatedSentence,
          sentenceCallback.sentence
        );
      }
    };
    for (let i2 = 0; i2 < tempSentenceGroups.length; i2++) {
      let tempSentenceGroup = tempSentenceGroups[i2], url = tempSentenceGroup.url, throttled = async () => {
        let nextDelay = await getRateLimiterDelay(
          this.translationOptions.translationService
        );
        await delay(nextDelay || 0);
        let finalFrom = tempSentenceGroup.from;
        if (isMultipleLanguage && (finalFrom = "auto"), tempSentenceGroup.fromByClient && tempSentenceGroup.fromByClient !== "auto" && (finalFrom = tempSentenceGroup.fromByClient), this.isSupportList)
          return {
            ...await this.translateList({
              text: tempSentenceGroup.tempSentences.map((item) => item.text),
              from: finalFrom,
              to: tempSentenceGroup.to,
              url,
              options: options2
            }),
            sourceTempSentences: tempSentenceGroup.tempSentences
          };
        {
          let finalTranslationTextSeparator = translationTextSeparator;
          this.serviceConfig && this.serviceConfig.translationTextSeparator && (finalTranslationTextSeparator = this.serviceConfig.translationTextSeparator);
          let newlinePlaceholderDelimiters = null;
          this.serviceConfig && this.serviceConfig.newlinePlaceholderDelimiters && (newlinePlaceholderDelimiters = this.serviceConfig.newlinePlaceholderDelimiters);
          let mergedText = "";
          newlinePlaceholderDelimiters && newlinePlaceholderDelimiters.length >= 2 ? mergedText = tempSentenceGroup.tempSentences.map((item, index) => index === tempSentenceGroup.tempSentences.length - 1 ? item.text : item.text + newlinePlaceholderDelimiters[0] + (index + 1) + newlinePlaceholderDelimiters[1]).join("") : mergedText = tempSentenceGroup.tempSentences.map(
            (item) => item.text
          ).join(finalTranslationTextSeparator);
          let result = await this.translate({
            text: mergedText,
            from: finalFrom,
            to: tempSentenceGroup.to,
            url,
            options: options2
          }), { text } = result, rawTranslatedTexts = [];
          if (newlinePlaceholderDelimiters && newlinePlaceholderDelimiters.length >= 2) {
            let defaultRegex = `${newlinePlaceholderDelimiters[0]}\\d+${newlinePlaceholderDelimiters[1]}`;
            newlinePlaceholderDelimiters && newlinePlaceholderDelimiters.length >= 3 && (defaultRegex = newlinePlaceholderDelimiters[2]);
            let regex = new RegExp(
              defaultRegex,
              "g"
            );
            rawTranslatedTexts = text.split(regex);
          } else
            rawTranslatedTexts = text.split(
              finalTranslationTextSeparator
            );
          let translatedTexts = [];
          if (rawTranslatedTexts.length > tempSentenceGroup.tempSentences.length) {
            for (let j5 = 0; j5 < tempSentenceGroup.tempSentences.length - 1; j5++)
              translatedTexts[j5] = rawTranslatedTexts[j5];
            translatedTexts[tempSentenceGroup.tempSentences.length - 1] = rawTranslatedTexts.slice(
              tempSentenceGroup.tempSentences.length - 1
            ).join(finalTranslationTextSeparator);
          } else if (rawTranslatedTexts.length < tempSentenceGroup.tempSentences.length)
            for (let j5 = rawTranslatedTexts.length; j5 < tempSentenceGroup.tempSentences.length; j5++)
              rawTranslatedTexts[j5] = "";
          else
            translatedTexts = rawTranslatedTexts;
          return {
            sourceTempSentences: tempSentenceGroup.tempSentences,
            text: translatedTexts,
            from: result.from,
            to: result.to
          };
        }
      };
      promises.push(
        throttled().then((result) => {
          let { text: translatedTexts, sourceTempSentences } = result;
          for (let j5 = 0; j5 < translatedTexts.length; j5++) {
            let translatedText = translatedTexts[j5], tempSentence = sourceTempSentences[j5];
            if (tempSentence) {
              let { index, prefix, suffix } = tempSentence;
              addToSentenceCallback(index, {
                sentence: {
                  ...sentences[index],
                  from: tempSentenceGroup.from,
                  to: tempSentenceGroup.to
                },
                sentenceTotalParts: tempSentence.sentenceTotalParts,
                partIndex: tempSentence.partIndex,
                translatedTexts: [prefix + translatedText + suffix],
                callback: everySentenceCallback
              }, null);
            }
          }
        }).catch((e) => {
          if (everySentenceCallback) {
            for (let j5 = 0; j5 < tempSentenceGroup.tempSentences.length; j5++) {
              let tempSentence = tempSentenceGroup.tempSentences[j5];
              tempSentence.sentenceTotalParts === 1 ? everySentenceCallback(e, null, {
                ...sentences[tempSentence.index],
                from: tempSentenceGroup.from,
                to: tempSentenceGroup.to
              }) : (everySentenceCallback(e, null, {
                ...sentences[tempSentence.index],
                from: tempSentenceGroup.from,
                to: tempSentenceGroup.to
              }), j5 += tempSentence.sentenceTotalParts - 1);
            }
            globalError = e;
          } else
            globalError = e;
        })
      );
    }
    if (await Promise.allSettled(promises), globalError)
      throw globalError;
    return {
      sentences: sentenceCallbacks.map((item) => ({
        ...item.sentence,
        text: item.translatedTexts.join("")
      }))
    };
  }
  detectLanguageLocally(text) {
    return detectLanguage({
      text,
      minLength: 18
    });
  }
  detectLanguageRemotely(_text) {
    return Promise.resolve("auto");
  }
  detectLanguage(text) {
    return text.length >= 50 ? this.detectLanguageLocally(text) : this.detectLanguageRemotely(text);
  }
};

// libs/sha256.js
var ERROR = "input is invalid type", WINDOW = typeof window == "object", root = WINDOW ? window : {};
root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
var WEB_WORKER = !WINDOW && typeof self == "object", NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
NODE_JS ? root = global : WEB_WORKER && (root = self);
var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module == "object" && module.exports, AMD = typeof define == "function" && define.amd, ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [-2147483648, 8388608, 32768, 128], SHIFT = [24, 16, 8, 0], K2 = [
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
  var a3 = this.h0, b4 = this.h1, c3 = this.h2, d5 = this.h3, e = this.h4, f3 = this.h5, g5 = this.h6, h2 = this.h7, blocks2 = this.blocks, j5, s0, s1, maj, t1, t22, ch, ab, da, cd, bc;
  for (j5 = 16; j5 < 64; ++j5)
    t1 = blocks2[j5 - 15], s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3, t1 = blocks2[j5 - 2], s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10, blocks2[j5] = blocks2[j5 - 16] + s0 + blocks2[j5 - 7] + s1 << 0;
  for (bc = b4 & c3, j5 = 0; j5 < 64; j5 += 4)
    this.first ? (this.is224 ? (ab = 300032, t1 = blocks2[0] - 1413257819, h2 = t1 - 150054599 << 0, d5 = t1 + 24177077 << 0) : (ab = 704751109, t1 = blocks2[0] - 210244248, h2 = t1 - 1521486534 << 0, d5 = t1 + 143694565 << 0), this.first = !1) : (s0 = (a3 >>> 2 | a3 << 30) ^ (a3 >>> 13 | a3 << 19) ^ (a3 >>> 22 | a3 << 10), s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7), ab = a3 & b4, maj = ab ^ a3 & c3 ^ bc, ch = e & f3 ^ ~e & g5, t1 = h2 + s1 + ch + K2[j5] + blocks2[j5], t22 = s0 + maj, h2 = d5 + t1 << 0, d5 = t1 + t22 << 0), s0 = (d5 >>> 2 | d5 << 30) ^ (d5 >>> 13 | d5 << 19) ^ (d5 >>> 22 | d5 << 10), s1 = (h2 >>> 6 | h2 << 26) ^ (h2 >>> 11 | h2 << 21) ^ (h2 >>> 25 | h2 << 7), da = d5 & a3, maj = da ^ d5 & b4 ^ ab, ch = h2 & e ^ ~h2 & f3, t1 = g5 + s1 + ch + K2[j5 + 1] + blocks2[j5 + 1], t22 = s0 + maj, g5 = c3 + t1 << 0, c3 = t1 + t22 << 0, s0 = (c3 >>> 2 | c3 << 30) ^ (c3 >>> 13 | c3 << 19) ^ (c3 >>> 22 | c3 << 10), s1 = (g5 >>> 6 | g5 << 26) ^ (g5 >>> 11 | g5 << 21) ^ (g5 >>> 25 | g5 << 7), cd = c3 & d5, maj = cd ^ c3 & a3 ^ da, ch = g5 & h2 ^ ~g5 & e, t1 = f3 + s1 + ch + K2[j5 + 2] + blocks2[j5 + 2], t22 = s0 + maj, f3 = b4 + t1 << 0, b4 = t1 + t22 << 0, s0 = (b4 >>> 2 | b4 << 30) ^ (b4 >>> 13 | b4 << 19) ^ (b4 >>> 22 | b4 << 10), s1 = (f3 >>> 6 | f3 << 26) ^ (f3 >>> 11 | f3 << 21) ^ (f3 >>> 25 | f3 << 7), bc = b4 & c3, maj = bc ^ b4 & d5 ^ cd, ch = f3 & g5 ^ ~f3 & h2, t1 = e + s1 + ch + K2[j5 + 3] + blocks2[j5 + 3], t22 = s0 + maj, e = a3 + t1 << 0, a3 = t1 + t22 << 0;
  this.h0 = this.h0 + a3 << 0, this.h1 = this.h1 + b4 << 0, this.h2 = this.h2 + c3 << 0, this.h3 = this.h3 + d5 << 0, this.h4 = this.h4 + e << 0, this.h5 = this.h5 + f3 << 0, this.h6 = this.h6 + g5 << 0, this.h7 = this.h7 + h2 << 0;
};
Sha256.prototype.hex = function() {
  this.finalize();
  var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, hex2 = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
  return this.is224 || (hex2 += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15]), hex2;
};
Sha256.prototype.toString = Sha256.prototype.hex;
Sha256.prototype.digest = function() {
  this.finalize();
  var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, arr = [
    h0 >> 24 & 255,
    h0 >> 16 & 255,
    h0 >> 8 & 255,
    h0 & 255,
    h1 >> 24 & 255,
    h1 >> 16 & 255,
    h1 >> 8 & 255,
    h1 & 255,
    h2 >> 24 & 255,
    h2 >> 16 & 255,
    h2 >> 8 & 255,
    h2 & 255,
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
function hex(hashBuffer) {
  return Array.from(new Uint8Array(hashBuffer)).map((b4) => b4.toString(16).padStart(2, "0")).join(
    ""
  );
}
function hmacSha256(str, keyString) {
  let hash = sha256Fn.hmac.create(keyString);
  return hash.update(str), Promise.resolve(hash.array());
}
async function hmacSha256ByString(str, keyString) {
  let sig = await hmacSha256(str, keyString);
  return hex(sig);
}
async function hmacSha256ByArrayBuffer(str, keyString) {
  let buffer = decodeHex(keyString), sig = await hmacSha256(str, buffer);
  return hex(sig);
}
function decodeHex(string) {
  let bytes = [];
  return string.replace(/../g, function(pair) {
    return bytes.push(parseInt(pair, 16)), "";
  }), new Uint8Array(bytes).buffer;
}

// services/tencent.ts
var langMap2 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-TW"],
  ["de", "de"],
  ["en", "en"],
  ["es", "es"],
  ["fr", "fr"],
  ["id", "id"],
  ["it", "it"],
  ["ja", "jp"],
  ["ko", "kr"],
  ["ms", "ms"],
  ["pt", "pt"],
  ["ru", "ru"],
  ["th", "th"],
  ["tr", "tr"],
  ["vi", "vi"]
], _Tencent = class extends Translation {
  // throttleLimit = 1;
  // maxTextGroupLength = 1;
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.secretId = "";
    this.secretKey = "";
    this.isSupportList = !0;
    if (!serviceConfig || !serviceConfig.secretId || !serviceConfig.secretKey)
      throw new Error("secretId and secretKey are required");
    this.secretId = serviceConfig.secretId?.trim(), this.secretKey = serviceConfig.secretKey?.trim();
  }
  static getUTCDate(dateObj) {
    let year = dateObj.getUTCFullYear(), month = `${dateObj.getUTCMonth() + 1}`.padStart(2, "0"), date = `${dateObj.getUTCDate()}`.padStart(2, "0");
    return `${year}-${month}-${date}`;
  }
  async translate(payload) {
    let { text, from, to } = payload, RequestPayload = JSON.stringify({
      ProjectId: 0,
      Source: _Tencent.langMap.get(from) || "auto",
      SourceText: text,
      Target: _Tencent.langMap.get(to) || to
    }), data = await this.signedRequest({
      secretId: this.secretId,
      secretKey: this.secretKey,
      action: "TextTranslate",
      payload: RequestPayload,
      service: "tmt",
      version: "2018-03-21"
    });
    return {
      text: data.Response.TargetText,
      from: _Tencent.langMapReverse.get(data.Response.Source) || from,
      to: _Tencent.langMapReverse.get(data.Response.Target) || to
    };
  }
  async translateList(payload) {
    let { text, from, to } = payload, RequestPayload = JSON.stringify({
      ProjectId: 0,
      Source: _Tencent.langMap.get(from) || "auto",
      SourceTextList: text,
      Target: _Tencent.langMap.get(to) || to
    }), data = await this.signedRequest({
      secretId: this.secretId,
      secretKey: this.secretKey,
      action: "TextTranslateBatch",
      payload: RequestPayload,
      service: "tmt",
      version: "2018-03-21"
    });
    return {
      text: data.Response.TargetTextList,
      from: _Tencent.langMapReverse.get(data.Response.Source) || from,
      to: _Tencent.langMapReverse.get(data.Response.Target) || to
    };
  }
  async signedRequest({
    secretId,
    secretKey,
    action,
    payload,
    service,
    version
  }) {
    let host = `${service}.tencentcloudapi.com`, now = /* @__PURE__ */ new Date(), timestamp = `${(/* @__PURE__ */ new Date()).valueOf()}`.slice(0, 10), CanonicalRequest = [
      "POST",
      "/",
      "",
      "content-type:application/json; charset=utf-8",
      `host:${host}`,
      "",
      "content-type;host",
      await sha256(payload)
    ].join(`
`), datestamp = _Tencent.getUTCDate(now), StringToSign = [
      "TC3-HMAC-SHA256",
      timestamp,
      `${datestamp}/${service}/tc3_request`,
      await sha256(CanonicalRequest)
    ].join(`
`), SecretDate = await hmacSha256ByString(datestamp, `TC3${secretKey}`), SecretService = await hmacSha256ByArrayBuffer(
      service,
      SecretDate
    ), SecretSigning = await hmacSha256ByArrayBuffer(
      "tc3_request",
      SecretService
    ), Signature = await hmacSha256ByArrayBuffer(
      StringToSign,
      SecretSigning
    ), response = await request2({
      retry: 1,
      url: `https://${service}.tencentcloudapi.com`,
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Host: host,
        "X-TC-Action": action,
        "X-TC-Timestamp": timestamp,
        "X-TC-Region": "ap-beijing",
        "X-TC-Version": version,
        Authorization: `TC3-HMAC-SHA256 Credential=${secretId}/${datestamp}/${service}/tc3_request, SignedHeaders=content-type;host, Signature=${Signature}`
      },
      body: payload
    });
    if (response instanceof Error)
      throw response;
    if (response.Response && response.Response.Error && response.Response.Error.Message)
      throw new Error(
        response.Response.Error.Message
      );
    return response;
  }
}, Tencent = _Tencent;
/** Translator lang to custom lang */
Tencent.langMap = new Map(langMap2), /** Custom lang to translator lang */
Tencent.langMapReverse = new Map(
  langMap2.map(([translatorLang, lang]) => [lang, translatorLang])
);

// services/ten_alpha.ts
var langMap3 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-TW"],
  ["de", "de"],
  ["en", "en"],
  ["es", "es"],
  ["fr", "fr"],
  ["id", "id"],
  ["it", "it"],
  ["ja", "jp"],
  ["ko", "kr"],
  ["ms", "ms"],
  ["pt", "pt"],
  ["ru", "ru"],
  ["th", "th"],
  ["tr", "tr"],
  ["vi", "vi"]
], headers = {
  "content-type": "application/json",
  Host: "wxapp.translator.qq.com",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.32(0x18002035) NetType/WIFI Language/zh_TW",
  Referer: "https://servicewechat.com/wxb1070eabc6f9107e/117/page-frame.html"
}, _TenAlpha = class extends Translation {
  // throttleLimit = 1;
  // maxTextGroupLength = 1;
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.isSupportList = !1;
  }
  async translate(payload) {
    let { text, from, to } = payload, params = new URLSearchParams({
      source: from,
      target: to,
      sourceText: text,
      platform: "WeChat_APP",
      candidateLangs: "en|zh",
      guid: "oqdgX0SIwhvM0TmqzTHghWBvfk22"
    }).toString(), response = await request2({
      url: `https://wxapp.translator.qq.com/api/translate?${params}`,
      retry: 1,
      method: "GET",
      headers
    });
    return {
      text: response.targetText,
      from: _TenAlpha.langMapReverse.get(response.source) || from,
      to: _TenAlpha.langMapReverse.get(response.target) || to
    };
  }
}, TenAlpha = _TenAlpha;
/** Translator lang to custom lang */
TenAlpha.langMap = new Map(langMap3), /** Custom lang to translator lang */
TenAlpha.langMapReverse = new Map(
  langMap3.map(([translatorLang, lang]) => [lang, translatorLang])
);

// services/google.ts
var langMap4 = [
  ["auto", "auto"],
  ["zh-CN", "zh-CN"],
  ["zh-TW", "zh-TW"],
  ["en", "en"],
  ["af", "af"],
  ["am", "am"],
  ["ar", "ar"],
  ["az", "az"],
  ["be", "be"],
  ["bg", "bg"],
  ["bn", "bn"],
  ["bs", "bs"],
  ["ca", "ca"],
  ["ceb", "ceb"],
  ["co", "co"],
  ["cs", "cs"],
  ["cy", "cy"],
  ["da", "da"],
  ["de", "de"],
  ["el", "el"],
  ["eo", "eo"],
  ["es", "es"],
  ["et", "et"],
  ["eu", "eu"],
  ["fa", "fa"],
  ["fi", "fi"],
  ["fr", "fr"],
  ["fy", "fy"],
  ["ga", "ga"],
  ["gd", "gd"],
  ["gl", "gl"],
  ["gu", "gu"],
  ["ha", "ha"],
  ["haw", "haw"],
  ["he", "he"],
  ["hi", "hi"],
  ["hmn", "hmn"],
  ["hr", "hr"],
  ["ht", "ht"],
  ["hu", "hu"],
  ["hy", "hy"],
  ["id", "id"],
  ["ig", "ig"],
  ["is", "is"],
  ["it", "it"],
  ["ja", "ja"],
  ["jw", "jw"],
  ["ka", "ka"],
  ["kk", "kk"],
  ["km", "km"],
  ["kn", "kn"],
  ["ko", "ko"],
  ["ku", "ku"],
  ["ky", "ky"],
  ["la", "la"],
  ["lb", "lb"],
  ["lo", "lo"],
  ["lt", "lt"],
  ["lv", "lv"],
  ["mg", "mg"],
  ["mi", "mi"],
  ["mk", "mk"],
  ["ml", "ml"],
  ["mn", "mn"],
  ["mr", "mr"],
  ["ms", "ms"],
  ["mt", "mt"],
  ["my", "my"],
  ["ne", "ne"],
  ["nl", "nl"],
  ["no", "no"],
  ["ny", "ny"],
  ["pa", "pa"],
  ["pl", "pl"],
  ["ps", "ps"],
  ["pt", "pt"],
  ["ro", "ro"],
  ["ru", "ru"],
  ["sd", "sd"],
  ["si", "si"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sm", "sm"],
  ["sn", "sn"],
  ["so", "so"],
  ["sq", "sq"],
  ["sr", "sr"],
  ["st", "st"],
  ["su", "su"],
  ["sv", "sv"],
  ["sw", "sw"],
  ["ta", "ta"],
  ["te", "te"],
  ["tg", "tg"],
  ["th", "th"],
  ["fil", "tl"],
  ["tr", "tr"],
  ["ug", "ug"],
  ["uk", "uk"],
  ["ur", "ur"],
  ["uz", "uz"],
  ["vi", "vi"],
  ["xh", "xh"],
  ["yi", "yi"],
  ["yo", "yo"],
  ["zu", "zu"]
], _Google = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.isSupportList = !1;
    this.apiUrl = "https://translate.googleapis.com/translate_a/single";
    serviceConfig && serviceConfig.apiUrl && (this.apiUrl = mergeUrl(this.apiUrl, serviceConfig.apiUrl));
  }
  async translate(payload) {
    let { text, from, to } = payload;
    if (!text)
      return { ...payload };
    let adaptedFrom = _Google.langMap.get(from) || "auto", adaptedTo = _Google.langMap.get(to) || to, result = await this.fetchWithoutToken(text, adaptedFrom, adaptedTo);
    if (!result)
      throw new Error("google translate NETWORK_ERROR");
    if (!result.data[0] || result.data[0].length <= 0)
      throw new Error("google translate API_SERVER_ERROR");
    return {
      text: result.data[0].map((item) => item[0]).filter(Boolean).join(""),
      from: _Google.langMapReverse.get(result.data[2]) || "auto",
      to
    };
  }
  async fetchWithoutToken(text, from, to) {
    let params = new URLSearchParams({
      client: "gtx",
      dt: "t",
      sl: from,
      tl: to,
      q: text
    }), url = this.apiUrl + "?" + params.toString();
    return { data: await request2({
      retry: 2,
      url
    }) };
  }
}, Google = _Google;
Google.langMap = new Map(langMap4), Google.langMapReverse = new Map(
  langMap4.map(([translatorLang, lang]) => [lang, translatorLang])
);

// services/d/hacks.ts
function calculateValidTimestamp(timestamp, iCount) {
  return iCount ? timestamp + (iCount - timestamp % iCount) : timestamp;
}
function count(sentence, part) {
  return sentence.split(part).length - 1;
}
function generateTimestamp(sentences) {
  let now = Date.now(), iCount = 1;
  for (let sentence of sentences)
    iCount += count(sentence, "i");
  return calculateValidTimestamp(now, iCount);
}
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateId() {
  return randRange(1e6, 1e8);
}

// services/d/settings.ts
var API_URL = "https://www2.deepl.com/jsonrpc", AUTO = "auto", SUPPORTED_LANGUAGES = [
  { code: "BG", language: "Bulgarian" },
  { code: "ZH", language: "Chinese" },
  { code: "CS", language: "Czech" },
  { code: "DA", language: "Danish" },
  { code: "NL", language: "Dutch" },
  { code: "EN", language: "English" },
  { code: "ET", language: "Estonian" },
  { code: "FI", language: "Finnish" },
  { code: "FR", language: "French" },
  { code: "DE", language: "German" },
  { code: "EL", language: "Greek" },
  { code: "HU", language: "Hungarian" },
  { code: "IT", language: "Italian" },
  { code: "JA", language: "Japanese" },
  { code: "LV", language: "Latvian" },
  { code: "LT", language: "Lithuanian" },
  { code: "PL", language: "Polish" },
  { code: "PT", language: "Portuguese" },
  { code: "RO", language: "Romanian" },
  { code: "RU", language: "Russian" },
  { code: "SK", language: "Slovak" },
  { code: "SL", language: "Slovenian" },
  { code: "ES", language: "Spanish" },
  { code: "SV", language: "Swedish" }
];

// services/d/utils.ts
function createAbbreviationsDictionary(languages2 = SUPPORTED_LANGUAGES) {
  return languages2.reduce((acc, lang) => (acc[lang.code.toLowerCase()] = lang.code, acc[lang.language.toLowerCase()] = lang.code, acc), {});
}
function abbreviateLanguage(language) {
  return createAbbreviationsDictionary()[language.toLowerCase()];
}

// services/d/api.ts
var headers2 = {
  Accept: "*/*",
  "Accept-Language": "en-US;q=0.8,en;q=0.7",
  "Content-Type": "application/json",
  Origin: "https://www.deepl.com",
  Referer: "https://www.deepl.com/translator",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site"
};
function stringifyJson(object) {
  return JSON.stringify(object).replace('"method":"', () => {
    let self2 = object;
    return (self2.id + 3) % 13 === 0 || (self2.id + 5) % 29 === 0 ? '"method" : "' : '"method": "';
  });
}
function initData(source_lang, target_lang) {
  return {
    id: 1,
    jsonrpc: "2.0",
    method: "LMT_handle_texts",
    params: {
      timestamp: 0,
      texts: [{
        text: "",
        requestAlternatives: 3
      }],
      splitting: "newlines",
      lang: {
        source_lang_user_selected: source_lang,
        target_lang
      }
    }
  };
}
async function requestTranslation2(API_URL2, text, targetLanguage, sourceLanguage, identifier, alternatives, formalityTone) {
  let id = generateId(), postData = initData(sourceLanguage, targetLanguage), textObjList = [];
  text.forEach((t3) => {
    textObjList.push({
      text: t3,
      requestAlternatives: 3
    });
  }), postData.id = id, postData.params.texts = textObjList, postData.params.timestamp = generateTimestamp(text);
  let response = await request2({
    retry: 2,
    method: "POST",
    url: API_URL2,
    body: stringifyJson(postData),
    headers: headers2
  }), finalResult = {
    from: response.result.lang,
    to: targetLanguage,
    text: []
  };
  return response.result.texts.forEach((t3) => {
    finalResult.text.push(t3.text);
  }), finalResult;
}
async function translate(API_URL2, text, targetLanguage, sourceLanguage = AUTO, identifier, alternatives, formalityTone) {
  return text ? text && text.length === 1 && text[0] === "" ? {
    text: [""],
    from: sourceLanguage,
    to: targetLanguage
  } : requestTranslation2(
    API_URL2,
    text,
    abbreviateLanguage(targetLanguage),
    abbreviateLanguage(sourceLanguage) ?? "auto",
    identifier,
    alternatives,
    formalityTone
  ) : {
    text: [],
    from: sourceLanguage,
    to: targetLanguage
  };
}

// services/d/mod.ts
var langMap5 = [
  ["auto", "auto"],
  ["zh-CN", "ZH"],
  ["zh-TW", "ZH"],
  ["de", "DE"],
  ["en", "EN"],
  ["es", "ES"],
  ["fr", "FR"],
  ["it", "IT"],
  ["ja", "JA"],
  ["pt", "PT"],
  ["ru", "RU"],
  ["tr", "tr"]
], _D = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.maxTextGroupLength = 3;
    this.maxTextLength = 800;
    this.isSupportList = !0;
    this.API_URL = API_URL;
    serviceConfig && serviceConfig.apiUrl && (this.API_URL = mergeUrl(API_URL, serviceConfig.apiUrl));
  }
  async translateList(payload) {
    let { text, to, from } = payload, result = await translate(
      this.API_URL,
      text,
      _D.langMap.get(to) || to,
      _D.langMap.get(from) || "auto"
    );
    return {
      text: result.text,
      from: _D.langMapReverse.get(result.from),
      to: _D.langMapReverse.get(result.to)
    };
  }
}, D4 = _D;
/** Translator lang to custom lang */
D4.langMap = new Map(langMap5), /** Custom lang to translator lang */
D4.langMapReverse = new Map(
  langMap5.map(([translatorLang, lang]) => [lang, translatorLang])
);

// services/transmart.ts
var langMap6 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-TW"],
  ["de", "de"],
  ["en", "en"],
  ["es", "es"],
  ["fr", "fr"],
  ["id", "id"],
  ["it", "it"],
  ["ja", "ja"],
  ["ko", "kr"],
  ["ms", "ms"],
  ["pt", "pt"],
  ["ru", "ru"],
  ["th", "th"],
  ["tr", "tr"],
  ["vi", "vi"]
], API = "https://transmart.qq.com/api/imt", _Transmart = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.maxTextGroupLength = 25;
    this.maxTextLength = 1e3;
    this.isSupportList = !1;
    this.clientKey = btoa(
      "transmart_crx_" + navigator.userAgent
    ).slice(0, 100);
  }
  async translate(payload) {
    let { text, to } = payload, sourceLanguage = await this.detectLanguage(text), remoteSourceLanguage = _Transmart.langMap.get(sourceLanguage) || sourceLanguage, remoteTargetLanguage = _Transmart.langMap.get(to) || to;
    if (sourceLanguage === to)
      return {
        text,
        from: sourceLanguage,
        to
      };
    let requestPayload = JSON.stringify(
      {
        header: {
          fn: "auto_translation_block",
          client_key: this.clientKey
        },
        source: {
          text_block: text,
          lang: remoteSourceLanguage,
          orig_url: payload.url
        },
        target: { lang: remoteTargetLanguage }
      }
    ), data = await request2({
      url: API,
      body: requestPayload,
      method: "POST",
      retry: 2
    });
    if (data.header.ret_code !== "succ")
      throw new Error(data.message || data.header.ret_code);
    return {
      text: data.auto_translation,
      from: sourceLanguage || "auto",
      to
    };
  }
  async translateList(payload) {
    let { from, text, to } = payload;
    if (text.length === 1) {
      let result = await this.translate({
        from,
        text: text[0],
        to,
        url: payload.url,
        options: payload.options
      });
      return {
        text: [result.text],
        from: result.from,
        to: result.to
      };
    }
    let sourceLanguage = await this.detectLanguage(text.join(`
`));
    if (sourceLanguage === to)
      return {
        text,
        from: sourceLanguage,
        to
      };
    let remoteSourceLanguage = _Transmart.langMap.get(sourceLanguage) || sourceLanguage, remoteTargetLanguage = _Transmart.langMap.get(to) || to, requestPayload = JSON.stringify(
      {
        header: {
          fn: "auto_translation",
          client_key: this.clientKey
        },
        source: {
          text_list: text,
          lang: remoteSourceLanguage,
          orig_url: payload.url
        },
        target: { lang: remoteTargetLanguage },
        type: "plain"
      }
    ), data = await request2({
      url: API,
      body: requestPayload,
      method: "POST"
    });
    if (data.header.ret_code !== "succ")
      throw new Error(data.message || data.header.ret_code);
    return {
      text: data.auto_translation,
      from: sourceLanguage || "auto",
      to
    };
  }
  detectLanguageLocally(text) {
    return this.detectLanguageRemotely(text);
  }
  async detectLanguageRemotely(text) {
    let payload = {
      header: {
        fn: "text_analysis",
        client_key: this.clientKey
      },
      text: text.slice(0, 280)
    }, response = await request2({
      url: API,
      method: "POST",
      body: JSON.stringify(payload)
    });
    if (response.header.ret_code !== "succ")
      throw new Error(response.message || response.header.ret_code);
    let remoteLanguage = response.language, language = _Transmart.langMapReverse.get(remoteLanguage);
    return language || remoteLanguage;
  }
}, Transmart = _Transmart;
/** Translator lang to custom lang */
Transmart.langMap = new Map(langMap6), /** Custom lang to translator lang */
Transmart.langMapReverse = new Map(
  langMap6.map(([translatorLang, lang]) => [lang, translatorLang])
);

// utils/random.ts
function getRandomBoolean() {
  return Math.random() >= 0;
}

// services/mock.ts
var Mock = class extends Translation {
  constructor() {
    super(...arguments);
    this.isSupportList = !0;
    this.maxTextLength = 1e3;
  }
  async translate(payload) {
    let { text } = payload, startSpaceLength = text.match(/^\s*/)[0].length;
    return {
      text: text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength, -6),
      from: payload.from,
      to: payload.to
    };
  }
  async translateList(payload) {
    let { text: textList, from, to } = payload;
    if (await mockRequest(), !getRandomBoolean())
      throw new Error("\u6A21\u62DF\u9519\u8BEF");
    return textList.length === 0 ? {
      from,
      to,
      text: [""]
    } : {
      from,
      to,
      text: textList.map((text) => {
        let startSpaceLength = text.match(/^\s*/)[0].length;
        return text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength, -6);
      })
    };
  }
};

// services/openl.ts
var rawLangMap = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh"],
  ["en", "en"],
  ["ja", "ja"],
  ["de", "de"],
  ["fr", "fr"],
  ["it", "it"],
  ["es", "es"],
  ["nl", "nl"],
  ["pl", "pl"],
  ["pt", "pt"],
  ["ru", "ru"]
], langMap7 = new Map(rawLangMap), langMapReverse = new Map(
  rawLangMap.map(([translatorLang, lang]) => [lang, translatorLang])
), _Openl = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.apikey = "";
    this.codename = _Openl.DEFAULT_CODENAME;
    this.isSupportList = !1;
    this.maxTextGroupLength = 1;
    if (!serviceConfig || !serviceConfig.apikey)
      throw new Error("apikey are required");
    this.apikey = serviceConfig.apikey?.trim(), serviceConfig.codename && (this.codename = serviceConfig.codename);
  }
  async translate(payload) {
    let { text, from, to } = payload, response = await request2(
      {
        retry: 2,
        url: `https://api.openl.club/services/${this.codename}/translate`,
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          apikey: this.apikey,
          text,
          source_lang: langMap7.get(from) || "auto",
          target_lang: langMap7.get(to) || to
        })
      }
    );
    if (response.status) {
      let result = response;
      return result.result && to == "zh-TW", {
        text: result.result,
        from: langMapReverse.get(result.source_lang),
        to: langMapReverse.get(result.target_lang)
      };
    } else
      throw new Error(response.msg);
  }
}, Openl = _Openl;
Openl.DEFAULT_CODENAME = "deepl";
var openl_default = Openl;

// throttle_request_bus.ts
var throttleRequestMap = /* @__PURE__ */ new Map();
async function rawThrottleRequest(options2) {
  let key = options2.url;
  if (options2.method && (key += options2.method), options2.body && (key += md5(options2.body)), throttleRequestMap.has(key))
    return throttleRequestMap.get(key);
  let promise = request2(options2);
  throttleRequestMap.set(key, promise);
  try {
    return await promise;
  } catch (e) {
    throw e;
  } finally {
    setTimeout(() => {
      throttleRequestMap.delete(key);
    }, 1e4);
  }
}
async function onThrottleRequest(options2) {
  return rawThrottleRequest(options2);
}
async function throttleRequest(options2) {
  if (getIsInIframe()) {
    let channel = getIframeMessageChannel();
    if (channel)
      try {
        return await channel.ask("throttleRequest", options2);
      } catch (e) {
        throw log_default.error("can not comunicate with root frame, use strict limiter", e), e;
      }
    else
      return rawThrottleRequest(options2);
  } else
    return rawThrottleRequest(options2);
}

// services/deepl.ts
var globalState = null, rawLangMap2 = [
  ["auto", ""],
  ["zh-CN", "ZH"],
  ["zh-TW", "ZH"],
  ["en", "EN"],
  ["de", "DE"],
  ["fr", "FR"],
  ["it", "IT"],
  ["ja", "JA"],
  ["es", "ES"],
  ["nl", "NL"],
  ["pl", "PL"],
  ["pt", "PT"],
  ["ru", "RU"]
], langMap8 = new Map(rawLangMap2), langMapReverse2 = new Map(
  rawLangMap2.map(([translatorLang, lang]) => [lang, translatorLang])
), Deepl = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.authKey = "";
    this.maxTextLength = 1800;
    this.freeApiUrl = "https://api-free.deepl.com/v2/translate";
    this.proApiUrl = "https://api.deepl.com/v2/translate";
    this.immersiveTranslateApiUrl = "https://deepl.immersivetranslate.com/v2/translate";
    this.immersiveTranslateDeeplTokenUrl = "https://api.immersivetranslate.com";
    if (!serviceConfig || !serviceConfig.authKey)
      throw new Error("authKey are required");
    serviceConfig && serviceConfig.freeApiUrl && (this.freeApiUrl = mergeUrl(this.freeApiUrl, serviceConfig.freeApiUrl)), serviceConfig && serviceConfig.proApiUrl && (this.proApiUrl = mergeUrl(this.proApiUrl, serviceConfig.proApiUrl)), serviceConfig && serviceConfig.immersiveTranslateApiUrl && (this.immersiveTranslateApiUrl = mergeUrl(
      this.immersiveTranslateApiUrl,
      serviceConfig.immersiveTranslateApiUrl
    )), serviceConfig && serviceConfig.immersiveTranslateDeeplTokenUrl && (this.immersiveTranslateDeeplTokenUrl = mergeUrl(
      this.immersiveTranslateDeeplTokenUrl,
      serviceConfig.immersiveTranslateDeeplTokenUrl
    )), this.authKey = serviceConfig.authKey?.trim();
  }
  static async clearState() {
    globalState = null, await browserAPI.storage.local.remove(
      immersiveTranslateGlobalConfigStorageKey
    );
  }
  async init() {
    if (!globalState) {
      globalState = {};
      let globalStateValue = await browserAPI.storage.local.get(
        immersiveTranslateGlobalConfigStorageKey
      );
      globalStateValue && globalStateValue[immersiveTranslateGlobalConfigStorageKey] && (globalState = globalStateValue[immersiveTranslateGlobalConfigStorageKey]);
    }
    if (this.authKey.startsWith("immersive_")) {
      let deeplInstance = new Q2(
        this.authKey,
        {
          state: globalState,
          onFetch: (url, options2) => {
            let pathname = new URL(url).pathname;
            return pathname === "/refresh_token" || pathname === "/oidc/token" ? throttleRequest({
              url,
              ...options2
            }) : request2({
              url,
              ...options2
            });
          },
          refreshTokenEndpoint: this.immersiveTranslateDeeplTokenUrl,
          onStateChange: (state) => {
            globalState = state, browserAPI.storage.local.set({
              [immersiveTranslateGlobalConfigStorageKey]: globalState
            });
          }
        }
      );
      await deeplInstance.updateToken(), globalState = deeplInstance.getState(), deeplInstance.getIsStateChanged() && await browserAPI.storage.local.set({
        [immersiveTranslateGlobalConfigStorageKey]: globalState
      });
    }
  }
  getDefaultRateLimit() {
    return this.authKey && this.authKey.endsWith(":fx") ? 4 : 10;
  }
  async translateList(payload) {
    let { from, to, text } = payload, bodyParams = {
      source_lang: langMap8.get(from) || "",
      target_lang: langMap8.get(to) || to
    }, bodySearchParams = new URLSearchParams(bodyParams);
    text.forEach((item) => {
      bodySearchParams.append("text", item);
    });
    let body = bodySearchParams.toString(), deeplEndpoint = this.freeApiUrl;
    this.authKey.endsWith(":im") ? deeplEndpoint = this.immersiveTranslateApiUrl : this.authKey.endsWith(":fx") || (deeplEndpoint = this.proApiUrl);
    let response;
    if (this.authKey.startsWith("immersive_")) {
      let deeplInstance = new Q2(
        this.authKey,
        {
          state: globalState,
          onFetch: (url, options2) => {
            let pathname = new URL(url).pathname;
            return pathname === "/refresh_token" || pathname === "/oidc/token" ? throttleRequest({
              url,
              ...options2
            }) : request2({
              url,
              ...options2
            });
          },
          refreshTokenEndpoint: this.immersiveTranslateDeeplTokenUrl,
          onStateChange: (state) => {
            globalState = state, browserAPI.storage.local.set({
              [immersiveTranslateGlobalConfigStorageKey]: globalState
            });
          }
        }
      );
      response = await deeplInstance.translateApi(body), deeplInstance.getIsStateChanged() && (globalState = deeplInstance.getState(), await browserAPI.storage.local.set({
        [immersiveTranslateGlobalConfigStorageKey]: globalState
      }));
    } else
      response = await request2(
        {
          retry: 2,
          url: deeplEndpoint,
          method: "POST",
          body,
          headers: {
            Authorization: "DeepL-Auth-Key " + this.authKey,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          extra: {
            overrideMimeType: "application/json; charset=utf-8"
          }
        }
      );
    let { translations: translations2 } = response, resultText = translations2.map((item) => item.text);
    if (to === "zh-TW") {
      let serviceConfig = this.serviceConfig || {};
      serviceConfig && serviceConfig.googleApiUrl && (serviceConfig.apiUrl = serviceConfig.googleApiUrl);
      let googleResult = await new Google(
        this.serviceConfig,
        this.generalConfig,
        this.translationOptions
      ).translate({
        from: "zh-CN",
        to: "zh-TW",
        text: translations2.map((item) => item.text).join(`
`),
        url: "",
        options: {}
      });
      googleResult && googleResult.text && (resultText = googleResult.text.split(`
`));
    }
    return {
      text: resultText,
      from: translations2[0] && langMapReverse2.get(translations2[0].detected_source_language) || from,
      to
    };
  }
}, deepl_default = Deepl;

// services/niu.ts
var rawLangMap3 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["zh-TW", "cht"],
  ["en", "en"],
  ["ja", "ja"],
  ["ru", "ru"],
  ["es", "es"],
  ["de", "de"],
  ["ko", "ko"],
  ["fr", "fr"]
], langMap9 = new Map(rawLangMap3), Niu = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.APIKEY = "";
    this.isSupportList = !1;
    if (!serviceConfig || !serviceConfig.APIKEY)
      throw new Error("APIKEY are required");
    this.APIKEY = serviceConfig.APIKEY?.trim();
  }
  async translate(payload) {
    let { text, from, to } = payload, options2 = {
      url: "https://api.niutrans.com/NiuTransServer/translation",
      retry: 2,
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        src_text: text,
        from: langMap9.get(from) || from,
        to: langMap9.get(to) || to,
        apikey: this.APIKEY
      })
    }, response = await request2(
      options2
    );
    if (response.tgt_text) {
      let result = response.tgt_text;
      return result.endsWith(`
`) && (result = result.slice(0, -1)), {
        text: result,
        from,
        to
      };
    } else
      throw new Error(JSON.stringify(response));
  }
}, niu_default = Niu;

// services/azure.ts
var rawLangMap4 = [
  ["auto", ""],
  ["ar", "ar"],
  ["ga", "ga"],
  ["et", "et"],
  ["bg", "bg"],
  ["is", "is"],
  ["pl", "pl"],
  ["bs", "bs-Latn"],
  ["fa", "fa"],
  ["da", "da"],
  ["de", "de"],
  ["ru", "ru"],
  ["fr", "fr"],
  ["zh-TW", "zh-Hant"],
  ["fil", "fil"],
  ["fj", "fj"],
  ["fi", "fi"],
  ["gu", "gu"],
  ["kk", "kk"],
  ["ht", "ht"],
  ["ko", "ko"],
  ["nl", "nl"],
  ["ca", "ca"],
  ["zh-CN", "zh-Hans"],
  ["cs", "cs"],
  ["kn", "kn"],
  ["otq", "otq"],
  ["tlh", "tlh"],
  ["hr", "hr"],
  ["lv", "lv"],
  ["lt", "lt"],
  ["ro", "ro"],
  ["mg", "mg"],
  ["mt", "mt"],
  ["mr", "mr"],
  ["ml", "ml"],
  ["ms", "ms"],
  ["mi", "mi"],
  ["bn", "bn-BD"],
  ["hmn", "mww"],
  ["af", "af"],
  ["pa", "pa"],
  ["pt", "pt"],
  ["ps", "ps"],
  ["ja", "ja"],
  ["sv", "sv"],
  ["sm", "sm"],
  ["sr-Latn", "sr-Latn"],
  ["sr-Cyrl", "sr-Cyrl"],
  ["no", "nb"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sw", "sw"],
  ["ty", "ty"],
  ["te", "te"],
  ["ta", "ta"],
  ["th", "th"],
  ["to", "to"],
  ["tr", "tr"],
  ["cy", "cy"],
  ["ur", "ur"],
  ["uk", "uk"],
  ["es", "es"],
  ["he", "iw"],
  ["el", "el"],
  ["hu", "hu"],
  ["it", "it"],
  ["hi", "hi"],
  ["id", "id"],
  ["en", "en"],
  ["yua", "yua"]
], langMap10 = new Map(rawLangMap4), Azure = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.APIKEY = "";
    this.region = "eastasia";
    this.isSupportList = !0;
    if (!serviceConfig || !serviceConfig.APIKEY)
      throw new Error("APIKEY are required");
    this.APIKEY = serviceConfig.APIKEY?.trim(), serviceConfig.region && (this.region = serviceConfig.region);
  }
  async translateList(payload) {
    let { text, from, to } = payload;
    if (text.length === 0)
      return {
        from,
        to,
        text: []
      };
    let paramsObj = {
      "api-version": "3.0",
      to: langMap10.get(to) || to
    };
    from !== "auto" && (paramsObj.from = langMap10.get(from) || from);
    let params = new URLSearchParams(paramsObj), bodyStr = JSON.stringify(text.map((t3) => ({ text: t3 }))), options2 = {
      url: "https://api.cognitive.microsofttranslator.com/translate?" + params.toString(),
      retry: 2,
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": this.APIKEY,
        "Ocp-Apim-Subscription-Region": this.region,
        "content-type": "application/json"
      },
      body: bodyStr
    }, response = await request2(options2);
    if (response.length === 0)
      throw new Error("server response invalid");
    return {
      from,
      to,
      text: response.map((item) => item.translations.map((i2) => i2.text).join(" "))
    };
  }
}, azure_default = Azure;

// services/papago.ts
var rawLangMap5 = [
  ["auto", "auto"],
  ["zh-CN", "zh-CN"],
  ["zh-TW", "zh-TW"],
  ["en", "en"],
  ["ja", "ja"],
  ["ru", "ru"],
  ["es", "es"],
  ["de", "de"],
  ["ko", "ko"],
  ["fr", "fr"],
  ["th", "th"],
  ["vi", "vi"],
  ["id", "id"]
], langMap11 = new Map(rawLangMap5), Papago = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.isSupportList = !0;
    this.maxTextGroupLength = 25;
    this.maxTextLength = 1200;
  }
  async translateList(payload) {
    let { text, from, to } = payload, langCode;
    if (text.length === 0)
      return {
        from,
        to,
        text: []
      };
    let newLineSplitter = `
<br>
`, bodyStr = text.join(newLineSplitter), options2 = {
      url: "https://api.papago-chrome.com/v2/translate/openapi",
      retry: 2,
      method: "POST",
      headers: {
        authority: "api.papago-chrome.com",
        "content-type": "application/json"
      },
      body: ""
    };
    from === "auto" || !langMap11.get(from) ? (langCode = (await request2({
      url: "https://api.papago-chrome.com/v2/translate/detect",
      method: "POST",
      headers: {
        authority: "api.papago-chrome.com",
        "content-type": "application/json"
      },
      body: bodyStr
    })).langCode, options2.body = JSON.stringify({
      text: bodyStr,
      source: langCode || langMap11.get(from) || from,
      target: langMap11.get(to) || to
    })) : options2.body = JSON.stringify({
      text: bodyStr,
      source: langMap11.get(from),
      target: langMap11.get(to) || to
    });
    let response = await request2(options2);
    if (response.translatedText === "")
      throw new Error("server response invalid");
    let texts = response.translatedText.split("<br>").map(
      (item) => item.trim()
    );
    return {
      from,
      to,
      text: texts
    };
  }
}, papago_default = Papago;

// services/openai.ts
var rawLangMap6 = [
  ["auto", "auto"],
  ["zh-CN", "zh-Hans"],
  ["zh-TW", "zh-Hant"],
  ["en", "en"],
  ["yue", "\u7CA4\u8BED"],
  ["wyw", "\u53E4\u6587"],
  ["en", "en"],
  ["ja", "ja"],
  ["ko", "ko"],
  ["fr", "fr"],
  ["de", "de"],
  ["es", "es"],
  ["it", "it"],
  ["ru", "ru"],
  ["pt", "pt"],
  ["nl", "nl"],
  ["pl", "pl"],
  ["ar", "ar"],
  ["af", "af"],
  ["am", "am"],
  ["az", "az"],
  ["be", "be"],
  ["bg", "bg"],
  ["bn", "bn"],
  ["bs", "bs"],
  ["ca", "ca"],
  ["ceb", "ceb"],
  ["co", "co"],
  ["cs", "cs"],
  ["cy", "cy"],
  ["da", "da"],
  ["el", "el"],
  ["eo", "eo"],
  ["et", "et"],
  ["eu", "eu"],
  ["fa", "fa"],
  ["fi", "fi"],
  ["fj", "fj"],
  ["fy", "fy"],
  ["ga", "ga"],
  ["gd", "gd"],
  ["gl", "gl"],
  ["gu", "gu"],
  ["ha", "ha"],
  ["haw", "haw"],
  ["he", "he"],
  ["hi", "hi"],
  ["hmn", "hmn"],
  ["hr", "hr"],
  ["ht", "ht"],
  ["hu", "hu"],
  ["hy", "hy"],
  ["id", "id"],
  ["ig", "ig"],
  ["is", "is"],
  ["jw", "jw"],
  ["ka", "ka"],
  ["kk", "kk"],
  ["km", "km"],
  ["kn", "kn"],
  ["ku", "ku"],
  ["ky", "ky"],
  ["la", "lo"],
  ["lb", "lb"],
  ["lo", "lo"],
  ["lt", "lt"],
  ["lv", "lv"],
  ["mg", "mg"],
  ["mi", "mi"],
  ["mk", "mk"],
  ["ml", "ml"],
  ["mn", "mn"],
  ["mr", "mr"],
  ["ms", "ms"],
  ["mt", "mt"],
  ["my", "my"],
  ["ne", "ne"],
  ["no", "no"],
  ["ny", "ny"],
  ["pa", "pa"],
  ["ps", "ps"],
  ["ro", "ro"],
  ["si", "si"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sm", "sm"],
  ["sn", "sn"],
  ["so", "so"],
  ["sq", "sq"],
  ["sr", "sr"],
  ["sr-Cyrl", "sr"],
  ["sr-Latn", "sr"],
  ["st", "st"],
  ["su", "su"],
  ["sv", "sv"],
  ["sw", "sw"],
  ["ta", "ta"],
  ["te", "te"],
  ["tg", "tg"],
  ["th", "th"],
  ["tr", "tr"],
  ["ug", "ug"],
  ["uk", "uk"],
  ["ur", "ur"],
  ["uz", "uz"],
  ["vi", "vi"],
  ["xh", "xh"],
  ["yi", "yi"],
  ["yo", "yo"],
  ["zu", "zu"]
], langMap12 = new Map(rawLangMap6), OpenAI = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.APIKEY = "";
    // api key list
    this.isSupportList = !1;
    this.maxTextLength = 1300;
    this.maxTextGroupLength = 100;
    this.prompt = "Translate the following text to {{to}}: ```\n{{text}}\n```";
    this.model = "gpt-3.5-turbo";
    if (!serviceConfig || !serviceConfig.APIKEY)
      throw new Error("APIKEY are required");
    this.APIKEY = serviceConfig.APIKEY?.trim(), this.apiKeys = this.APIKEY.split(",").map((key) => key.trim()), serviceConfig.prompt && (this.prompt = serviceConfig.prompt), serviceConfig.model && (this.model = serviceConfig.model);
  }
  translate(payload) {
    return this.model.includes("003") ? (this.maxTextGroupLength = 1, this.translate3(payload)) : this.translate3_5(payload);
  }
  /**
   * get random api key
   * @returns random api key
   */
  getRandomKey() {
    let index = Math.floor(Math.random() * this.apiKeys.length);
    return this.apiKeys[index];
  }
  async translate3_5(payload) {
    let { text, from, to } = payload;
    if (text.length === 0)
      return {
        from,
        to,
        text: ""
      };
    let remoteFrom = langMap12.get(from) || from, remoteTo = langMap12.get(to) || to, prompt = this.prompt.replace(/{{to}}/g, langMap12.get(to) || to).replace(
      /{{text}}/g,
      text
    ).replace(/{{from}}/g, langMap12.get(from) || from), options2 = {
      url: "https://api.openai.com/v1/chat/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.getRandomKey()
      },
      body: JSON.stringify({
        model: this.model,
        temperature: 0,
        max_tokens: 2048,
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that translates ${remoteFrom} to ${remoteTo}.`
          },
          {
            role: "user",
            content: prompt
          }
        ]
      })
    }, response = await request2(options2);
    if (response && response.choices && response.choices.length > 0 && response.choices[0].message && response.choices[0].message.content) {
      let text2 = response.choices[0].message.content.trim();
      return {
        from,
        to,
        text: text2
      };
    } else
      throw new Error("server response invalid: " + JSON.stringify(response));
  }
  async translate3(payload) {
    let { text, from, to } = payload;
    if (text.length === 0)
      return {
        from,
        to,
        text: ""
      };
    let prompt = this.prompt.replace(/{{to}}/g, langMap12.get(to) || to).replace(
      /{{text}}/g,
      text
    ).replace(/{{from}}/g, langMap12.get(from) || from), options2 = {
      url: "https://api.openai.com/v1/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.APIKEY
      },
      body: JSON.stringify({
        model: this.model,
        prompt,
        temperature: 0,
        max_tokens: 2048
      })
    }, response = await request2(options2);
    if (response && response.choices && response.choices.length > 0 && response.choices[0].text) {
      let text2 = response.choices[0].text.trim();
      return {
        from,
        to,
        text: text2
      };
    } else
      throw new Error("server response invalid: " + JSON.stringify(response));
  }
}, openai_default = OpenAI;

// services/volc/sign.ts
var unsignableHeaders = [
  "authorization",
  "content-type",
  "content-length",
  "user-agent",
  "presigned-expires",
  "expect"
], constant = {
  algorithm: "HMAC-SHA256",
  v4Identifier: "request",
  dateHeader: "X-Date",
  tokenHeader: "X-Security-Token",
  contentSha256Header: "X-Content-Sha256",
  notSignBody: "X-NotSignBody",
  kDatePrefix: "",
  credential: "X-Credential",
  algorithmKey: "X-Algorithm",
  signHeadersKey: "X-SignedHeaders",
  signQueriesKey: "X-SignedQueries",
  signatureKey: "X-Signature"
}, uriEscape = (str) => {
  try {
    return encodeURIComponent(str).replace(/[^A-Za-z0-9_.~\-%]+/g, escape).replace(
      /[*]/g,
      (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase()}`
    );
  } catch {
    return "";
  }
}, queryParamsToString = (params) => Object.keys(params).map((key) => {
  let val = params[key];
  if (typeof val > "u" || val === null)
    return;
  let escapedKey = uriEscape(key);
  if (escapedKey)
    return Array.isArray(val) ? `${escapedKey}=${val.map(uriEscape).sort().join(`&${escapedKey}=`)}` : `${escapedKey}=${uriEscape(val)}`;
}).filter((v4) => v4).join("&"), Signer = class {
  constructor(request3, serviceName, options2) {
    this.request = request3, this.request.headers = request3.headers || {}, this.serviceName = serviceName, options2 = options2 || {}, this.bodySha256 = options2.bodySha256, this.request.params = this.sortParams(this.request.params);
  }
  sortParams(params) {
    let newParams = {};
    return params && Object.keys(params).filter((key) => {
      let value = params[key];
      return typeof value < "u" && value !== null;
    }).sort().map((key) => {
      newParams[key] = params[key];
    }), newParams;
  }
  async addAuthorization(credentials, date) {
    let datetime = this.getDateTime(date);
    await this.addHeaders(credentials, datetime), this.request.headers.Authorization = await this.authorization(
      credentials,
      datetime
    );
  }
  async authorization(credentials, datetime) {
    let parts = [], credString = this.credentialString(datetime);
    return parts.push(
      `${constant.algorithm} Credential=${credentials.accessKeyId}/${credString}`
    ), parts.push(`SignedHeaders=${this.signedHeaders()}`), parts.push(`Signature=${await this.signature(credentials, datetime)}`), parts.join(", ");
  }
  async getSignUrl(credentials, date) {
    let datetime = this.getDateTime(date), query = { ...this.request.params }, params = this.request.params, headers3 = this.request.headers;
    credentials.sessionToken && (query[constant.tokenHeader] = credentials.sessionToken), query[constant.dateHeader] = datetime, query[constant.notSignBody] = "", query[constant.credential] = `${credentials.accessKeyId}/${this.credentialString(datetime)}`, query[constant.algorithmKey] = constant.algorithm, query[constant.signHeadersKey] = "", query[constant.signQueriesKey] = void 0, query[constant.signatureKey] = void 0, query = this.sortParams(query), this.request.params = query, this.request.headers = {};
    let sig = await this.signature(credentials, datetime);
    return this.request.params = params, this.request.headers = headers3, query[constant.signQueriesKey] = Object.keys(query).sort().join(";"), query[constant.signatureKey] = sig, queryParamsToString(query);
  }
  getDateTime(date) {
    return this.iso8601(date).replace(/[:\-]|\.\d{3}/g, "");
  }
  async addHeaders(credentials, datetime) {
    if (this.request.headers[constant.dateHeader] = datetime, credentials.sessionToken && (this.request.headers[constant.tokenHeader] = credentials.sessionToken), this.request.body) {
      let body = this.request.body;
      this.request.headers[constant.contentSha256Header] = await sha256(body);
    }
  }
  async signature(credentials, datetime) {
    let signingKey = await this.getSigningKey(
      credentials,
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName
    );
    return hex(await hmacSha256(await this.stringToSign(datetime), signingKey));
  }
  async stringToSign(datetime) {
    let parts = [];
    parts.push(constant.algorithm), parts.push(datetime), parts.push(this.credentialString(datetime));
    let x4 = await this.canonicalString();
    return parts.push(
      await this.hexEncodedHash(x4)
    ), parts.join(`
`);
  }
  async canonicalString() {
    let parts = [], pathname = this.request.pathname || "/";
    parts.push(this.request.method.toUpperCase()), parts.push(pathname);
    let queryString = queryParamsToString(this.request.params) || "";
    return parts.push(queryString), parts.push(`${this.canonicalHeaders()}
`), parts.push(this.signedHeaders()), parts.push(await this.hexEncodedBodyHash()), parts.join(`
`);
  }
  canonicalHeaders() {
    let headers3 = [];
    Object.keys(this.request.headers).forEach((key) => {
      headers3.push([key, this.request.headers[key]]);
    }), headers3.sort((a3, b4) => a3[0].toLowerCase() < b4[0].toLowerCase() ? -1 : 1);
    let parts = [];
    return headers3.forEach((item) => {
      let key = item[0].toLowerCase();
      if (this.isSignableHeader(key)) {
        let value = item[1];
        if (typeof value > "u" || value === null || typeof value.toString != "function")
          throw new Error(`Header ${key} contains invalid value`);
        parts.push(`${key}:${this.canonicalHeaderValues(value.toString())}`);
      }
    }), parts.join(`
`);
  }
  canonicalHeaderValues(values) {
    return values.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
  }
  signedHeaders() {
    let keys = [];
    return Object.keys(this.request.headers).forEach((key) => {
      key = key.toLowerCase(), this.isSignableHeader(key) && keys.push(key);
    }), keys.sort().join(";");
  }
  signedQueries() {
    return Object.keys(this.request.params).join(";");
  }
  credentialString(datetime) {
    return this.createScope(
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName
    );
  }
  async hexEncodedHash(str) {
    return await sha256(str);
  }
  async hexEncodedBodyHash() {
    return this.request.headers[constant.contentSha256Header] ? this.request.headers[constant.contentSha256Header] : this.request.body ? await this.hexEncodedHash(queryParamsToString(this.request.body)) : await this.hexEncodedHash("");
  }
  isSignableHeader(key) {
    return unsignableHeaders.indexOf(key) < 0;
  }
  iso8601(date) {
    return date === void 0 && (date = /* @__PURE__ */ new Date()), date.toISOString().replace(/\.\d{3}Z$/, "Z");
  }
  async getSigningKey(credentials, date, region, service) {
    let kDate = await hmacSha256(
      date,
      `${constant.kDatePrefix}${credentials.secretKey}`
    ), kRegion = await hmacSha256(region, kDate), kService = await hmacSha256(service, kRegion);
    return hmacSha256(constant.v4Identifier, kService);
  }
  createScope(date, region, serviceName) {
    return [date.substr(0, 8), region, serviceName, constant.v4Identifier].join(
      "/"
    );
  }
};

// services/volc/mod.ts
var rawLangMap7 = [
  ["af", "af"],
  ["am", "am"],
  ["ar", "ar"],
  ["az", "az"],
  ["be", "be"],
  ["bg", "bg"],
  ["bn", "bn"],
  ["bs", "bs"],
  ["ca", "ca"],
  ["co", "co"],
  ["cs", "cs"],
  ["cy", "cy"],
  ["da", "da"],
  ["de", "de"],
  ["el", "el"],
  ["en", "en"],
  ["eo", "eo"],
  ["es", "es"],
  ["et", "et"],
  ["eu", "eu"],
  ["fa", "fa"],
  ["fi", "fi"],
  ["fj", "fj"],
  ["fr", "fr"],
  ["fy", "fy"],
  ["ga", "ga"],
  ["gd", "gd"],
  ["gl", "gl"],
  ["gu", "gu"],
  ["ha", "ha"],
  ["he", "he"],
  ["hi", "hi"],
  ["hr", "hr"],
  ["ht", "ht"],
  ["hu", "hu"],
  ["hy", "hy"],
  ["id", "id"],
  ["ig", "ig"],
  ["is", "is"],
  ["it", "it"],
  ["ja", "ja"],
  ["ka", "ka"],
  ["kk", "kk"],
  ["km", "km"],
  ["kn", "kn"],
  ["ko", "ko"],
  ["ku", "ku"],
  ["ky", "ky"],
  ["la", "la"],
  ["lb", "lb"],
  ["lo", "lo"],
  ["lt", "lt"],
  ["lv", "lv"],
  ["mg", "mg"],
  ["mi", "mi"],
  ["mk", "mk"],
  ["ml", "ml"],
  ["mn", "mn"],
  ["mr", "mr"],
  ["ms", "ms"],
  ["mt", "mt"],
  ["my", "my"],
  ["ne", "ne"],
  ["nl", "nl"],
  ["no", "no"],
  ["ny", "ny"],
  ["pa", "pa"],
  ["pl", "pl"],
  ["ps", "ps"],
  ["pt", "pt"],
  ["ro", "ro"],
  ["ru", "ru"],
  ["sd", "sd"],
  ["si", "si"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sm", "sm"],
  ["sn", "sn"],
  ["so", "so"],
  ["sq", "sq"],
  ["sr", "sr"],
  ["st", "st"],
  ["su", "su"],
  ["sv", "sv"],
  ["sw", "sw"],
  ["ta", "ta"],
  ["te", "te"],
  ["tg", "tg"],
  ["th", "th"],
  ["tn", "tn"],
  ["to", "to"],
  ["tr", "tr"],
  ["ty", "ty"],
  ["ug", "ug"],
  ["uk", "uk"],
  ["ur", "ur"],
  ["uz", "uz"],
  ["vi", "vi"],
  ["xh", "xh"],
  ["yi", "yi"],
  ["yo", "yo"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-Hans"],
  ["zu", "zu"]
], langMap13 = new Map(rawLangMap7), langMapReverse3 = new Map(
  rawLangMap7.map(([translatorLang, lang]) => [lang, translatorLang])
), Volc = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.accessKeyId = "";
    this.secretAccessKey = "";
    this.maxTextGroupLength = 8;
    if (!serviceConfig || !serviceConfig.accessKeyId || !serviceConfig.secretAccessKey)
      throw new Error("accessKeyId and secretAccessKey are required");
    this.accessKeyId = serviceConfig.accessKeyId?.trim(), this.secretAccessKey = serviceConfig.secretAccessKey?.trim();
  }
  async remoteDetectLanguage(text) {
    let requestObj = {
      region: "cn-north-1",
      method: "POST",
      params: {
        Action: "LangDetect",
        Version: "2020-06-01"
      },
      pathname: "/",
      headers: {
        "Content-Type": "application/json",
        host: "open.volcengineapi.com"
      },
      body: JSON.stringify({
        TextList: [text]
      })
    }, signer = new Signer(requestObj, "translate");
    await signer.addAuthorization({
      accessKeyId: this.accessKeyId,
      secretKey: this.secretAccessKey
    });
    let urlSearchParams = new URLSearchParams(requestObj.params), response = await request2(
      {
        retry: 2,
        url: "https://open.volcengineapi.com" + requestObj.pathname + "?" + urlSearchParams.toString(),
        headers: signer.request.headers,
        method: requestObj.method,
        body: requestObj.body
      }
    );
    if (response.DetectedLanguageList && response.DetectedLanguageList.length > 0)
      return response.DetectedLanguageList[0].Language;
    if (response.ResponseMetadata && response.ResponseMetadata.Error) {
      let error = response.ResponseMetadata.Error;
      throw new CommonError(error.Code, error.Message);
    } else if (response.ResponseMetaData && response.ResponseMetaData.Error) {
      let error = response.ResponseMetaData.Error;
      throw new CommonError(error.Code, error.Message);
    } else
      throw new Error("response: " + JSON.stringify(response));
  }
  async translateList(payload) {
    let { text, from, to } = payload, remoteFrom = langMap13.get(from), bodyParams = {
      TargetLanguage: langMap13.get(to) || to,
      TextList: text
    };
    remoteFrom ? bodyParams.SourceLanguage = remoteFrom : bodyParams.SourceLanguage = await this.remoteDetectLanguage(
      text.join(`
`).slice(0, 1e3)
    );
    let requestObj = {
      region: "cn-north-1",
      method: "POST",
      params: {
        Action: "TranslateText",
        Version: "2020-06-01"
      },
      pathname: "/",
      headers: {
        "Content-Type": "application/json",
        host: "open.volcengineapi.com"
      },
      body: JSON.stringify(bodyParams)
    }, signer = new Signer(requestObj, "translate");
    await signer.addAuthorization({
      accessKeyId: this.accessKeyId,
      secretKey: this.secretAccessKey
    });
    let urlSearchParams = new URLSearchParams(requestObj.params), response = await request2(
      {
        retry: 2,
        url: "https://open.volcengineapi.com" + requestObj.pathname + "?" + urlSearchParams.toString(),
        headers: signer.request.headers,
        method: requestObj.method,
        body: requestObj.body
      }
    );
    if (response.TranslationList) {
      let resultText = response.TranslationList.map((item) => item.Translation), remoteFrom2 = from;
      return response.TranslationList.length > 0 && response.TranslationList[0].DetectedSourceLanguage && (remoteFrom2 = langMapReverse3.get(
        response.TranslationList[0].DetectedSourceLanguage
      ) || from), {
        text: resultText,
        from: remoteFrom2,
        to
      };
    } else if (response.ResponseMetadata && response.ResponseMetadata.Error) {
      let error = response.ResponseMetadata.Error;
      throw new CommonError(error.Code, error.Message);
    } else if (response.ResponseMetaData && response.ResponseMetaData.Error) {
      let error = response.ResponseMetaData.Error;
      throw new CommonError(error.Code, error.Message);
    } else
      throw new Error("response: " + JSON.stringify(response));
  }
}, mod_default = Volc;

// services/volc_alpha.ts
var rawLangMap8 = [
  ["auto", "detect"],
  ["af", "af"],
  ["am", "am"],
  ["ar", "ar"],
  ["az", "az"],
  ["be", "be"],
  ["bg", "bg"],
  ["bn", "bn"],
  ["bs", "bs"],
  ["ca", "ca"],
  ["co", "co"],
  ["cs", "cs"],
  ["cy", "cy"],
  ["da", "da"],
  ["de", "de"],
  ["el", "el"],
  ["en", "en"],
  ["eo", "eo"],
  ["es", "es"],
  ["et", "et"],
  ["eu", "eu"],
  ["fa", "fa"],
  ["fi", "fi"],
  ["fj", "fj"],
  ["fr", "fr"],
  ["fy", "fy"],
  ["ga", "ga"],
  ["gd", "gd"],
  ["gl", "gl"],
  ["gu", "gu"],
  ["ha", "ha"],
  ["he", "he"],
  ["hi", "hi"],
  ["hr", "hr"],
  ["ht", "ht"],
  ["hu", "hu"],
  ["hy", "hy"],
  ["id", "id"],
  ["ig", "ig"],
  ["is", "is"],
  ["it", "it"],
  ["ja", "ja"],
  ["ka", "ka"],
  ["kk", "kk"],
  ["km", "km"],
  ["kn", "kn"],
  ["ko", "ko"],
  ["ku", "ku"],
  ["ky", "ky"],
  ["la", "la"],
  ["lb", "lb"],
  ["lo", "lo"],
  ["lt", "lt"],
  ["lv", "lv"],
  ["mg", "mg"],
  ["mi", "mi"],
  ["mk", "mk"],
  ["ml", "ml"],
  ["mn", "mn"],
  ["mr", "mr"],
  ["ms", "ms"],
  ["mt", "mt"],
  ["my", "my"],
  ["ne", "ne"],
  ["nl", "nl"],
  ["no", "no"],
  ["ny", "ny"],
  ["pa", "pa"],
  ["pl", "pl"],
  ["ps", "ps"],
  ["pt", "pt"],
  ["ro", "ro"],
  ["ru", "ru"],
  ["sd", "sd"],
  ["si", "si"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sm", "sm"],
  ["sn", "sn"],
  ["so", "so"],
  ["sq", "sq"],
  ["sr", "sr"],
  ["st", "st"],
  ["su", "su"],
  ["sv", "sv"],
  ["sw", "sw"],
  ["ta", "ta"],
  ["te", "te"],
  ["tg", "tg"],
  ["th", "th"],
  ["tn", "tn"],
  ["to", "to"],
  ["tr", "tr"],
  ["ty", "ty"],
  ["ug", "ug"],
  ["uk", "uk"],
  ["ur", "ur"],
  ["uz", "uz"],
  ["vi", "vi"],
  ["xh", "xh"],
  ["yi", "yi"],
  ["yo", "yo"],
  ["zh-CN", "zh"],
  ["zh-TW", "zh-Hans"],
  ["zu", "zu"]
], langMap14 = new Map(rawLangMap8), langMapReverse4 = new Map(
  rawLangMap8.map(([translatorLang, lang]) => [lang, translatorLang])
), VolcAlpha = class extends Translation {
  constructor() {
    super(...arguments);
    this.maxTextGroupLength = 50;
    this.isSupportList = !1;
  }
  async translate(payload) {
    let { text, from, to } = payload, remoteFrom = langMap14.get(from) || "detect", remoteTo = langMap14.get(to) || to, response = await request2(
      {
        url: "https://translate.volcengine.com/crx/translate/v1/",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          source_language: remoteFrom,
          target_language: remoteTo,
          text
        })
      }
    );
    if (response.base_resp && response.base_resp.status_code === 0) {
      let resultText = response.translation, remoteFrom2 = from;
      return response.detected_language && (remoteFrom2 = langMapReverse4.get(response.detected_language) || from), {
        text: resultText,
        from: remoteFrom2,
        to
      };
    } else {
      let error = response.base_resp;
      throw new CommonError(error.status_code.toString(), error.status_message);
    }
  }
};

// services/deeplx.ts
var rawLangMap9 = [
  ["auto", "auto"],
  ["zh-CN", "ZH"],
  ["zh-TW", "ZH"],
  ["de", "DE"],
  ["en", "EN"],
  ["es", "ES"],
  ["fr", "FR"],
  ["it", "IT"],
  ["ja", "JA"],
  ["pt", "PT"],
  ["ru", "RU"],
  ["tr", "tr"]
], langMap15 = new Map(rawLangMap9), Deeplx = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.url = "";
    this.isSupportList = !1;
    this.maxTextGroupLength = 1;
    if (!serviceConfig || !serviceConfig.url)
      throw new Error(
        "deeplx custom url are required, please check your settings."
      );
    this.url = serviceConfig.url;
  }
  async translate(payload) {
    let { text, from, to } = payload, result = await request2(
      {
        retry: 2,
        url: this.url,
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          source_lang: langMap15.get(from) || from,
          target_lang: langMap15.get(to) || to,
          text
        })
      }
    );
    if (result.code === 200)
      return {
        text: result.data,
        from,
        to
      };
    throw new Error(result.message || result.message || "API Error");
  }
};

// services/bing/api.js
var TRANSLATE_API_ROOT = "https://{s}bing.com", TRANSLATE_WEBSITE = TRANSLATE_API_ROOT + "/translator", TRANSLATE_API = TRANSLATE_API_ROOT + "/ttranslatev3", TRANSLATE_SPELL_CHECK_API = TRANSLATE_API_ROOT + "/tspellcheckv3", globalConfigStorageKey = "bingGlobalConfig", rawLangMap10 = [
  ["auto", "auto-detect"],
  ["ar", "ar"],
  ["ga", "ga"],
  ["et", "et"],
  ["bg", "bg"],
  ["is", "is"],
  ["pl", "pl"],
  ["bs", "bs-Latn"],
  ["fa", "fa"],
  ["da", "da"],
  ["de", "de"],
  ["ru", "ru"],
  ["fr", "fr"],
  ["zh-TW", "zh-Hant"],
  ["fil", "fil"],
  ["fj", "fj"],
  ["fi", "fi"],
  ["gu", "gu"],
  ["kk", "kk"],
  ["ht", "ht"],
  ["ko", "ko"],
  ["nl", "nl"],
  ["ca", "ca"],
  ["zh-CN", "zh-Hans"],
  ["cs", "cs"],
  ["kn", "kn"],
  ["otq", "otq"],
  ["tlh", "tlh"],
  ["hr", "hr"],
  ["lv", "lv"],
  ["lt", "lt"],
  ["ro", "ro"],
  ["mg", "mg"],
  ["mt", "mt"],
  ["mr", "mr"],
  ["ml", "ml"],
  ["ms", "ms"],
  ["mi", "mi"],
  ["bn", "bn-BD"],
  ["hmn", "mww"],
  ["af", "af"],
  ["pa", "pa"],
  ["pt", "pt"],
  ["ps", "ps"],
  ["ja", "ja"],
  ["sv", "sv"],
  ["sm", "sm"],
  ["sr-Latn", "sr-Latn"],
  ["sr-Cyrl", "sr-Cyrl"],
  ["no", "nb"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sw", "sw"],
  ["ty", "ty"],
  ["te", "te"],
  ["ta", "ta"],
  ["th", "th"],
  ["to", "to"],
  ["tr", "tr"],
  ["cy", "cy"],
  ["ur", "ur"],
  ["uk", "uk"],
  ["es", "es"],
  ["he", "iw"],
  ["el", "el"],
  ["hu", "hu"],
  ["it", "it"],
  ["hi", "hi"],
  ["id", "id"],
  ["en", "en"],
  ["yua", "yua"],
  ["yue", "yua"],
  ["vi", "vi"],
  ["ku", "ku"],
  ["km", "kmr"]
], langMap16 = new Map(rawLangMap10), langMapReverse5 = new Map(
  rawLangMap10.map(([translatorLang, lang]) => [lang, translatorLang])
), MAX_TEXT_LEN = 1e3, globalConfig, globalConfigPromise;
function replaceSubdomain(url, subdomain) {
  return url.replace("{s}", subdomain ? subdomain + "." : "");
}
async function isTokenExpired() {
  if (!globalConfig) {
    let storageValue = await browserAPI.storage.local.get(
      globalConfigStorageKey
    );
    return storageValue && (globalConfig = storageValue[globalConfigStorageKey]), !0;
  }
  let { tokenTs, tokenExpiryInterval } = globalConfig;
  return Date.now() - tokenTs > tokenExpiryInterval;
}
async function fetchGlobalConfig() {
  let subdomain, IG, IID, token, key, tokenExpiryInterval, isVertical, frontDoorBotClassification, isSignedInOrCorporateUser, cookie;
  try {
    let finalUrl = replaceSubdomain(TRANSLATE_WEBSITE, subdomain), response = await request2({
      retry: 2,
      url: finalUrl,
      responseType: "raw"
    }), { body, headers: headers3, url } = response;
    subdomain = url.match(/^https?:\/\/(\w+)\.bing\.com/)[1], cookie = headers3["set-cookie"], IG = body.match(/IG:"([^"]+)"/)[1], IID = body.match(/data-iid="([^"]+)"/)[1], [
      key,
      token,
      tokenExpiryInterval,
      isVertical,
      frontDoorBotClassification,
      isSignedInOrCorporateUser
    ] = JSON.parse(
      body.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1]
    );
  } catch (e) {
    throw console.error("failed to fetch global config", e), e;
  }
  return globalConfig = {
    subdomain,
    IG,
    IID,
    key,
    token,
    tokenTs: key,
    tokenExpiryInterval,
    isVertical,
    frontDoorBotClassification,
    isSignedInOrCorporateUser,
    cookie,
    // PENDING: reset count if count value is large?
    count: 0
  }, await browserAPI.storage.local.set({
    [globalConfigStorageKey]: globalConfig
  }), globalConfig;
}
function makeRequestURL(isSpellCheck) {
  let { IG, IID, subdomain, isVertical } = globalConfig;
  return replaceSubdomain(
    isSpellCheck ? TRANSLATE_SPELL_CHECK_API : TRANSLATE_API,
    subdomain
  ) + "?isVertical=1" + (IG && IG.length ? "&IG=" + IG : "") + (IID && IID.length ? "&IID=" + IID + "." + globalConfig.count++ : "");
}
function makeRequestBody(isSpellCheck, text, fromLang, toLang) {
  let { token, key } = globalConfig, body = {
    fromLang,
    text,
    token,
    key
  };
  return !isSpellCheck && toLang && (body.to = toLang), body;
}
async function translate2(text, from, to) {
  if (!text || !(text = text.trim()))
    return;
  if (text.length > MAX_TEXT_LEN)
    throw new Error(
      `The supported maximum length of text is ${MAX_TEXT_LEN}. Please shorten the text.`
    );
  globalConfigPromise || (globalConfigPromise = fetchGlobalConfig()), await globalConfigPromise, await isTokenExpired() && (globalConfigPromise = fetchGlobalConfig(), await globalConfigPromise), from = from || "auto", to = to || "zh-CN", from = langMap16.get(from) || from, to = langMap16.get(to) || to;
  let requestURL = makeRequestURL(!1), requestBody = makeRequestBody(
    !1,
    text,
    from,
    to === "auto-detect" ? "zh-Hans" : to
  ), requestHeaders = {
    referer: replaceSubdomain(TRANSLATE_WEBSITE, globalConfig.subdomain),
    // cookie: globalConfig.cookie,
    "content-type": "application/x-www-form-urlencoded"
  }, searchParams = new URLSearchParams(requestBody), finalUrl = requestURL, requestBodyString = searchParams.toString(), body = await request2({
    retry: 2,
    url: finalUrl,
    headers: requestHeaders,
    method: "POST",
    body: requestBodyString
  });
  if (body.ShowCaptcha || body.StatusCode === 401 || body.statusCode) {
    if (globalConfig = null, globalConfigPromise = null, await browserAPI.storage.local.remove(globalConfigStorageKey), body.ShowCaptcha)
      throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${body.StatusCode}.
    `);
    if (body.StatusCode === 401)
      throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);
    if (body.statusCode)
      throw new Error(
        `Something went wrong! The response is ${JSON.stringify(body)}.`
      );
  }
  let translation = body[0].translations[0], detectedLang = body[0].detectedLanguage;
  return {
    text: translation.text,
    from: langMapReverse5.get(detectedLang.language),
    to: langMapReverse5.get(translation.to)
  };
}

// services/bing/mod.ts
var Bing = class extends Translation {
  constructor() {
    super(...arguments);
    this.isSupportList = !1;
    this.maxTextLength = 800;
  }
  async translate(payload) {
    let { text, from, to } = payload;
    return text ? await translate2(text, from, to) : { ...payload };
  }
};

// services/baidu.ts
var rawLangMap11 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["en", "en"],
  ["yue", "yue"],
  ["wyw", "wyw"],
  ["ja", "jp"],
  ["ko", "kor"],
  ["fr", "fra"],
  ["es", "spa"],
  ["th", "th"],
  ["ar", "ara"],
  ["ru", "ru"],
  ["pt", "pt"],
  ["de", "de"],
  ["it", "it"],
  ["el", "el"],
  ["nl", "nl"],
  ["pl", "pl"],
  ["bg", "bul"],
  ["et", "est"],
  ["da", "dan"],
  ["fi", "fin"],
  ["cs", "cs"],
  ["ro", "rom"],
  ["sl", "slo"],
  ["sv", "swe"],
  ["hu", "hu"],
  ["zh-TW", "cht"],
  ["vi", "vie"]
], langMap17 = new Map(rawLangMap11), langMapReverse6 = new Map(
  rawLangMap11.map(([translatorLang, lang]) => [lang, translatorLang])
), Baidu = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.endpoint = "https://api.fanyi.baidu.com/api/trans/vip/translate";
    this.appid = "";
    this.key = "";
    this.isSupportList = !1;
    this.maxTextGroupLength = 20;
    if (!serviceConfig || !serviceConfig.appid || !serviceConfig.key)
      throw new Error("appid and key are required");
    this.appid = serviceConfig.appid?.trim(), this.key = serviceConfig.key?.trim();
  }
  async translate(payload) {
    let salt = Date.now().toString(), { endpoint } = this, { appid, key } = this, { text, from, to } = payload, params = new URLSearchParams({
      from: langMap17.get(from) || "auto",
      to: langMap17.get(to) || to,
      q: text,
      salt,
      appid,
      sign: md5(appid + text + salt + key)
    }), urlObj = new URL(endpoint);
    urlObj.search = params.toString();
    let data = await request2(
      {
        url: urlObj.toString()
      }
    );
    if (data.error_code)
      throw console.error(
        new Error("[Baidu service]" + data.error_msg)
      ), new CommonError(
        "API_SERVER_ERROR",
        data.error_msg
      );
    let {
      trans_result: transResult,
      from: langDetected
    } = data, transParagraphs = transResult.map(({ dst }) => dst);
    return {
      from: langMapReverse6.get(langDetected) || langDetected,
      to,
      text: transParagraphs.join(`
`)
    };
  }
}, baidu_default = Baidu;

// services/caiyun.ts
var rawLangMap12 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["en", "en"],
  ["ja", "ja"]
], langMap18 = new Map(rawLangMap12), Caiyun = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.token = "";
    if (!serviceConfig || !serviceConfig.token)
      throw new Error("token are required");
    this.token = serviceConfig.token?.trim();
  }
  async translateList(payload) {
    let { text, from, to } = payload;
    if (!langMap18.get(to))
      throw new Error(`Unsupported language: ${to}`);
    from === "auto" && (from = await detectLanguage({ text: text.join(" "), minLength: 10 }));
    let source = text;
    return {
      text: (await request2(
        {
          retry: 2,
          url: "https://api.interpreter.caiyunai.com/v1/translator",
          headers: {
            "content-type": "application/json",
            "x-authorization": "token " + this.token
          },
          method: "POST",
          body: JSON.stringify({
            source,
            trans_type: `${langMap18.get(from) || "auto"}2${langMap18.get(to)}`
          })
        }
      )).target,
      from,
      to
    };
  }
}, caiyun_default = Caiyun;

// services/cai.ts
var rawLangMap13 = [
  ["auto", "auto"],
  ["zh-CN", "zh"],
  ["en", "en"],
  ["ja", "ja"]
], langMap19 = new Map(rawLangMap13), Cai = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.token = "ssdj273ksdiwi923bsd9";
  }
  async translateList(payload) {
    let { text, from, to } = payload;
    if (!langMap19.get(to))
      throw new Error(`Unsupported language: ${to}`);
    from === "auto" && (from = await detectLanguage({ text: text.join(" "), minLength: 10 }));
    let source = text;
    return {
      text: (await request2(
        {
          retry: 2,
          url: "https://api.interpreter.caiyunai.com/v1/translator",
          headers: {
            "content-type": "application/json",
            "x-authorization": "token " + this.token
          },
          method: "POST",
          body: JSON.stringify({
            source,
            trans_type: `${langMap19.get(from) || "auto"}2${langMap19.get(to)}`
          })
        }
      )).target,
      from,
      to
    };
  }
}, cai_default = Cai;

// services/youdao.ts
var rawLangMap14 = [
  ["auto", "auto"],
  ["en", "en"],
  ["ru", "ru"],
  ["pt", "pt"],
  ["es", "es"],
  ["zh-CN", "zh-CHS"],
  ["ja", "ja"],
  ["ko", "ko"],
  ["fr", "fr"],
  ["ar", "ar"],
  ["id", "id"],
  ["vi", "vi"],
  ["it", "it"]
], langMap20 = new Map(rawLangMap14), langMapReverse7 = new Map(
  rawLangMap14.map(([translatorLang, lang]) => [lang, translatorLang])
);
function truncate(q6) {
  let len = q6.length;
  return len <= 20 ? q6 : q6.substring(0, 10) + len + q6.substring(len - 10, len);
}
var Youdao = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.isSupportList = !1;
    this.appId = "";
    this.appSecret = "";
    this.throttleLimit = 5;
    if (!serviceConfig || !serviceConfig.appId || !serviceConfig.appSecret)
      throw new Error("appId and appSecret are required");
    this.appId = serviceConfig.appId?.trim(), this.appSecret = serviceConfig.appSecret?.trim();
  }
  async translate(payload) {
    let { text, from, to } = payload, salt = makeid2(32), curTime = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3), str1 = this.appId + truncate(text) + salt + curTime + this.appSecret, sign = await sha256(str1), params = {
      q: text,
      appKey: this.appId,
      salt: salt.toString(),
      from: langMap20.get(from) || "auto",
      to: langMap20.get(to) || to,
      sign,
      signType: "v3",
      curtime: curTime.toString()
    }, urlSearchParams = new URLSearchParams(params), result = await request2(
      {
        url: "https://openapi.youdao.com/api",
        method: "POST",
        body: urlSearchParams.toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    ), l2 = result.l, [remoteFrom, _3] = l2.split("2");
    return {
      text: result.translation.join(`
`),
      from: langMapReverse7.get(remoteFrom),
      to
    };
  }
};
function makeid2(length) {
  let result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length, counter = 0;
  for (; counter < length; )
    result += characters.charAt(Math.floor(Math.random() * charactersLength)), counter += 1;
  return result;
}
var youdao_default = Youdao;

// services/you.ts
var rawLangMap15 = [
  ["auto", "auto"],
  ["en", "en"],
  ["ru", "ru"],
  ["pt", "pt"],
  ["es", "es"],
  ["zh-CN", "zh-CHS"],
  ["ja", "ja"],
  ["ko", "ko"],
  ["fr", "fr"],
  ["ar", "ar"],
  ["id", "id"],
  ["vi", "vi"],
  ["it", "it"]
], langMap21 = new Map(rawLangMap15), langMapReverse8 = new Map(
  rawLangMap15.map(([translatorLang, lang]) => [lang, translatorLang])
);
var You = class extends Translation {
  constructor(serviceConfig, generalConfig, options2) {
    super(serviceConfig, generalConfig, options2);
    this.isSupportList = !1;
    this.appId = "";
    this.appSecret = "";
    this.maxTextLength = 800;
  }
  async translate(payload) {
    let { text, from, to } = payload, params = {
      q: text,
      from: langMap21.get(from) || "auto",
      to: langMap21.get(to) || to
    }, urlSearchParams = new URLSearchParams(params), res = await request2(
      {
        url: "https://aidemo.youdao.com/trans",
        method: "POST",
        body: urlSearchParams.toString(),
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        }
      }
    );
    if (res && res.translation)
      return {
        text: res.translation.join(`
`),
        from,
        to
      };
    throw new Error("Youdao translation failed: " + JSON.stringify(res));
  }
}, you_default = You;

// services/mod.ts
var TranslationServicesClass = {
  mock: Mock,
  mock2: Mock,
  google: Google,
  transmart: Transmart,
  deepl: deepl_default,
  volc: mod_default,
  volcAlpha: VolcAlpha,
  bing: Bing,
  tencent: Tencent,
  tenAlpha: TenAlpha,
  baidu: baidu_default,
  caiyun: caiyun_default,
  cai: cai_default,
  openl: openl_default,
  youdao: youdao_default,
  you: you_default,
  d: D4,
  dpro: D4,
  deeplx: Deeplx,
  niu: niu_default,
  azure: azure_default,
  openai: openai_default,
  papago: papago_default
}, TranslationServices = {};
Object.keys(PureTranslationServices).forEach((key) => {
  TranslationServices[key] = {
    ...PureTranslationServices[key],
    // @ts-ignore: it's ok
    class: TranslationServicesClass[key]
  };
});
async function translateSingleSentence(sentence, ctx) {
  if (!sentence.text)
    return sentence;
  let result = await translateMultipleSentences(
    {
      sentences: [sentence]
    },
    ctx
  );
  if (result.sentences.length > 0)
    return {
      ...sentence,
      ...result.sentences[0]
    };
  throw new CommonError("translateFailed", "translate failed");
}
async function initTranslationEngine(ctx) {
  let { config, translationService } = ctx, generalConfig = config.translationGeneralConfig, services = config.translationServices, defaultTranslationEngine = translationService, serviceConfig = services[defaultTranslationEngine] || {}, translator = new TranslationServices[defaultTranslationEngine].class(
    serviceConfig,
    generalConfig,
    {
      translationService: defaultTranslationEngine
    }
  ), defaultRateLimit = translator.getDefaultRateLimit();
  defaultRateLimit && serviceConfig && !serviceConfig.limit && (serviceConfig.limit = defaultRateLimit), await setRateLimiter(
    defaultTranslationEngine,
    serviceConfig
  ), await translator.init();
}
async function translateMultipleSentences(payload, ctx, everySentenceCallback) {
  if (!payload.sentences.length)
    return {
      ...payload
    };
  let { config, translationService } = ctx, generalConfig = config.translationGeneralConfig, services = config.translationServices, defaultTranslationEngine = translationService, serviceConfig = services[defaultTranslationEngine] || {};
  defaultTranslationEngine === "openai" && (payload.sentences = payload.sentences.map((sentence) => ({
    ...sentence,
    from: "auto"
  })));
  let noCacheSentences = [], finalResult = {
    sentences: Array(payload.sentences.length)
  }, sourceLength = payload.sentences.length, sentenceIndex = -1;
  if (config.cache)
    for (let sentence of payload.sentences) {
      sentenceIndex++;
      let cacheServiceKey = defaultTranslationEngine;
      defaultTranslationEngine === "openl" && (cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME);
      let res = null;
      try {
        res = await deadline(
          queryDb({
            originalText: sentence.text,
            from: sentence.from,
            to: sentence.to,
            service: cacheServiceKey
          }),
          1e3
        );
      } catch (e) {
        log_default.warn("query cache DB error, but it's ok", e);
      }
      if (res) {
        let result = {
          ...sentence,
          text: res.translatedText
        };
        finalResult.sentences[sentenceIndex] = result, everySentenceCallback && everySentenceCallback(null, result, sentence);
      } else
        noCacheSentences.push(sentence);
    }
  else
    noCacheSentences.push(...payload.sentences);
  let resultLength = noCacheSentences.length;
  if (sourceLength - resultLength > 0 && log_default.debug(`use ${sourceLength - resultLength} sentences from cache`), !noCacheSentences.length)
    return finalResult;
  let translator;
  try {
    translator = new TranslationServices[defaultTranslationEngine].class(
      serviceConfig,
      generalConfig,
      {
        translationService: defaultTranslationEngine
      }
    ), await translator.init();
  } catch (e) {
    if (everySentenceCallback)
      for (let sentence of noCacheSentences)
        everySentenceCallback(e, null, sentence);
    throw e;
  }
  let noCacheResult = await translator.multipleTranslate(
    {
      sentences: noCacheSentences
    },
    serviceConfig,
    (err, a3, b4) => {
      if (everySentenceCallback && (everySentenceCallback(err, a3, b4), !err && a3 && !defaultTranslationEngine.startsWith("mock") && config.cache)) {
        let cacheServiceKey = defaultTranslationEngine;
        defaultTranslationEngine === "openl" && (cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME), config.cache && deadline(
          setDbStore({
            translatedText: a3.text,
            from: b4.from,
            to: b4.to,
            detectedFrom: a3.from,
            key: md5(b4.text),
            service: cacheServiceKey
          }),
          3e3
        ).catch((e) => {
          log_default.warn("set cache DB error", e);
        });
      }
    }
  );
  for (let sentence of noCacheResult.sentences) {
    let index = finalResult.sentences.findIndex((s4) => !s4);
    if (index === -1)
      throw new CommonError("translateFailed", "can not match the result");
    finalResult.sentences[index] = sentence;
  }
  return finalResult;
}

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
        if (match.includes("://")) {
          let parts = match.split("://");
          scheme = parts[0], scheme === "*" && parts.length > 1 && (scheme = "*", match = "https://" + parts[1]);
        } else
          scheme = "*", match = "https://" + match;
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

// dom/context.ts
async function getContext(options2) {
  let { url, config, state } = options2, urlObj = new URL(url), sourceLanguage = "auto", {
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
  let defaultTargetLanguage = targetLanguage || "zh-CN", hostname2 = urlObj.hostname, encryptedHostname = await sha256(hostname2), pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash, encryptedPath = await sha256(pathAndQueryAndHash), encryptedUrl = `https://${encryptedHostname}.com/${encryptedPath}`, localConfig2 = await getLocalConfig(), buildinConfig = await getLatestBuildinConfig(), translationStartMode = config.translationStartMode;
  translationStartMode === "dynamic" && isImmediateTranslate && (translationStartMode = "immediate");
  let ctx = {
    targetLanguage: defaultTargetLanguage,
    config,
    translationService: defaultTranslationService,
    isTranslateUrl,
    sourceLanguage,
    mainFrame: document.body,
    isTranslateExcludeUrl,
    rule: config.generalRule,
    url,
    encryptedUrl,
    state: state ? Object.assign({
      translationArea: config.translationArea,
      translationStartMode,
      immediateTranslationTextCount: config.immediateTranslationTextCount,
      isAutoTranslate: !1,
      translationDebounce: 300,
      isNeedClean: !1,
      isDetectParagraphLanguage,
      translationTheme: defaultTheme
    }, state) : {
      translationArea: config.translationArea,
      translationStartMode,
      immediateTranslationTextCount: config.immediateTranslationTextCount,
      isAutoTranslate: !1,
      translationDebounce: 300,
      isNeedClean: !1,
      isDetectParagraphLanguage,
      translationTheme: defaultTheme
    },
    localConfig: localConfig2
  };
  ctx.state.translationArea === "body" && (ctx.config.generalRule.excludeTags = ctx.config.generalRule.excludeTags.filter((tag) => !ctx.config.generalRule.bodyTranslateTags.includes(tag)), ctx.config.generalRule.additionalExcludeSelectors = ctx.config.generalRule.additionalExcludeSelectors.filter(
    (selector) => selector !== ".btn"
  ));
  let translationServiceConfig = config.translationServices[ctx.translationService] || {};
  translationServiceConfig.immediateTranslationTextCount !== void 0 && translationServiceConfig.immediateTranslationTextCount >= 0 && (ctx.state.immediateTranslationTextCount = translationServiceConfig.immediateTranslationTextCount), ctx.translationService === "deepl" && translationServiceConfig && translationServiceConfig.authKey && translationServiceConfig.authKey.startsWith("immersive_") && translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl !== void 0 && translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl >= 0 && (ctx.state.immediateTranslationTextCount = translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl), translationServiceConfig && translationServiceConfig.translationDebounce && typeof translationServiceConfig.translationDebounce == "number" && (ctx.state.translationDebounce = translationServiceConfig.translationDebounce);
  let buildinImmediateTranslationTextCount = buildinConfig.immediateTranslationTextCount;
  config.immediateTranslationTextCount !== buildinImmediateTranslationTextCount && (ctx.state.immediateTranslationTextCount = config.immediateTranslationTextCount);
  let rules = config.rules, rule;
  globalThis.PDFViewerApplication ? rule = rules.find((rule2) => rule2.isPdf) : globalThis.immersiveTranslateEbookViewer ? rule = rules.find((rule2) => rule2.isEbook) : globalThis.immersiveTranslateEbookBuilder ? rule = rules.find((rule2) => rule2.isEbookBuilder) : rule = rules.find((rule2) => isMatched(url, rule2)), ctx.rule.isPdf && (ctx.state.translationArea = "main"), ctx.state.translationArea === "body" && (ctx.rule.paragraphMinTextCount = 1, ctx.rule.paragraphMinWordCount = 1);
  let generalRule = config.generalRule;
  if (rule && (ctx.rule = mergeRule(generalRule, rule)), ctx.state.translationArea === "body" && ctx.rule.excludeTags && (ctx.rule.excludeTags = ctx.rule.excludeTags.filter((tag) => !ctx.rule.bodyTranslateTags.includes(tag) && !ctx.rule.forceTranslateTags.includes(tag))), ctx.rule.mainFrameSelector) {
    let mainFrame = document.querySelector(ctx.rule.mainFrameSelector);
    mainFrame && (ctx.mainFrame = mainFrame);
  }
  return ctx;
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

// dom/translate_page.ts
var pageStatus = "Original", currentParagraphIds = [], waitToTranslateParagraphIds = /* @__PURE__ */ new Set(), allNewDynamicElements = [], allIntersectionObserver = [], allResizebleObserver = [], currentNewDynamicElements = [], oldUrl = getRealUrl().split("#")[0], currentTranslatedTextLength = 0, globalContext, initialTranslationTheme, throttleMap = {
  300: se(
    translateCurrentQueue,
    300
  ),
  1e3: se(
    translateCurrentQueue,
    1e3
  ),
  3e3: se(
    translateCurrentQueue,
    3e3
  )
}, debounceMap = {
  300: debounce(
    translateNewDynamicNodes,
    300
  ),
  1e3: debounce(
    translateNewDynamicNodes,
    1e3
  ),
  3e3: debounce(
    translateNewDynamicNodes,
    3e3
  )
}, env3 = getEnv(), isProd2 = env3.PROD === "1", isInitTranslationService = !1, titleMutationObserver, mutationObserverMap = /* @__PURE__ */ new Map(), mainMutaionObserver, originalPageTitle = "";
async function toggleTranslatePage() {
  if (getPageStatus() === "Original") {
    let ctx = await getGlobalContext(getRealUrl(), {});
    initialTranslationTheme ? ctx = await getGlobalContext(getRealUrl(), {
      translationTheme: initialTranslationTheme
    }) : initialTranslationTheme = ctx.state.translationTheme, await translatePage(globalContext);
  } else
    (getPageStatus() === "Translated" || getPageStatus() === "Error") && restorePage();
}
async function toggleTranslationMask() {
  if (getPageStatus() === "Original")
    globalContext = await getGlobalContext(getRealUrl(), {}), initialTranslationTheme || (initialTranslationTheme = globalContext.state.translationTheme), globalContext = await getGlobalContext(getRealUrl(), {
      translationTheme: "mask"
    }), await translatePage(globalContext);
  else if (getPageStatus() === "Translated") {
    let allFrames = [
      globalContext.mainFrame,
      ...mutationObserverMap.keys()
    ], currentTranslationTheme = globalContext?.state.translationTheme;
    for (let frame of allFrames) {
      let currentRootTheme = getAttribute(
        frame,
        translationFrameRootThemeAttributeNameForJs,
        !0
      );
      currentTranslationTheme === "mask" ? currentRootTheme !== "none" ? setAttribute(
        frame,
        translationFrameRootThemeAttributeNameForJs,
        "none",
        !0
      ) : setAttribute(
        frame,
        translationFrameRootThemeAttributeNameForJs,
        "mask",
        !0
      ) : currentRootTheme !== "mask" ? setAttribute(
        frame,
        translationFrameRootThemeAttributeNameForJs,
        "mask",
        !0
      ) : setAttribute(
        frame,
        translationFrameRootThemeAttributeNameForJs,
        "none",
        !0
      );
    }
  }
}
function restorePage() {
  clean();
  let allFrames = [
    globalContext.mainFrame,
    ...mutationObserverMap.keys()
  ];
  for (let rootFrame of allFrames)
    disableMutatinObserver(rootFrame), rootFrame.querySelectorAll(
      "." + translationTargetElementWrapperClass
    ).forEach((element) => {
      element.remove();
    }), rootFrame.querySelectorAll(
      "." + translationPdfTargetContainerClass
    ).forEach((element) => {
      element.remove();
    }), rootFrame.querySelectorAll(
      "[" + sourceElementEffectAttributeName + "]"
    ).forEach((element) => {
      if (isProd2) {
        delete element[elementMarkRootKey];
        let keys = Object.keys(element.dataset).filter((key) => key.startsWith(brandIdForJs));
        for (let key of keys)
          delete element.dataset[key];
      } else {
        let keys = Object.keys(element.dataset).filter((key) => key.startsWith(brandIdForJs));
        for (let key of keys)
          delete element.dataset[key];
      }
      element.removeAttribute(sourceElementEffectAttributeName);
    });
  disableTitleMutationObserver(), setPageTranslatedStatus("Translating"), originalPageTitle && (document.title = originalPageTitle), setPageTranslatedStatus("Original");
}
function onElementVisible(paragraph, callback) {
  let isCalled = !1, firstElement = getFirstHTMLElement(paragraph.elements), lastElement = getLastHTMLElement(paragraph.elements);
  waitToTranslateParagraphIds.add(paragraph.id);
  let observers = [];
  if (firstElement) {
    let observe = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.intersectionRatio > 0 && (observer.disconnect(), isCalled || (isCalled = !0, callback(paragraph)));
      });
    });
    allIntersectionObserver.push(observe), observers.push(observe), observe.observe(firstElement);
  }
  if (lastElement && lastElement !== firstElement) {
    let observe = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.intersectionRatio > 0 && (observer.disconnect(), isCalled || (isCalled = !0, callback(paragraph)));
      });
    });
    allIntersectionObserver.push(observe), observers.push(observe), observe.observe(lastElement);
  }
  let paragraphEntiry = getParagraph(paragraph.id);
  paragraphEntiry && (paragraphEntiry.observers = observers, setParagraph(paragraph.id, paragraphEntiry));
}
function onHiddenElementVisible(element, callback) {
  if (element) {
    let resizewatcher = new ResizeObserver((entries, observer) => {
      for (let entry of entries)
        entry.contentRect.width > 10 && (observer.disconnect(), callback(entry.target));
    });
    resizewatcher.observe(element), allResizebleObserver.push(resizewatcher);
  }
}
async function translateNewDynamicNodes(ctx) {
  let currentNewDynamicNodes = [...currentNewDynamicElements];
  currentNewDynamicElements = [];
  let frameMap = /* @__PURE__ */ new Map();
  currentNewDynamicNodes.forEach((node) => {
    frameMap.has(node.rootFrame) || frameMap.set(node.rootFrame, []), frameMap.get(node.rootFrame)?.push(node.element);
  });
  for (let [rootFrame, elements] of frameMap)
    try {
      let allContainers = [];
      for (let element of elements) {
        let rawContainers = getContainers(
          element,
          ctx
        );
        if (rawContainers.length === 0)
          continue;
        let containers = rawContainers;
        allContainers.push(...containers);
      }
      await translateContainers(allContainers, rootFrame, ctx, !0);
    } catch (e) {
      log_default.error(`translateNewDynamicNodes error: ${e.message}`);
    }
}
function translationParagraph(visibleParagraph, ctx) {
  waitToTranslateParagraphIds.delete(visibleParagraph.id);
  let paragraphWithState = getParagraph(visibleParagraph.id);
  paragraphWithState && (paragraphWithState.observers && paragraphWithState.observers.length > 0 && paragraphWithState.observers.forEach((observer) => {
    observer.disconnect();
  }), paragraphWithState.observers = [], paragraphWithState.state = "Translating", setParagraph(visibleParagraph.id, paragraphWithState));
  let id = visibleParagraph.id;
  currentTranslatedTextLength += visibleParagraph.text.length;
  let realElements = getHTMLElements(visibleParagraph.elements);
  if (visibleParagraph.isPdf) {
    let firstElement = getFirstHTMLElement(visibleParagraph.elements), elementStyle = globalThis.getComputedStyle(firstElement), top = elementStyle.top, fontSize = elementStyle.fontSize, fontSizeNumber = parseFloat(fontSize.slice(0, -2));
    isNaN(fontSizeNumber) || fontSizeNumber > 20 && (fontSize = "20px");
    let targetContainer = visibleParagraph.targetContainer, paragraphTarget = document.createElement("font");
    realElements.length === 1 && (paragraphTarget.style.fontSize = fontSize), paragraphTarget.id = `${translationTargetElementWrapperClass}-${id}`, paragraphTarget.style.top = top;
    let firstElementLeft = getAttribute(firstElement, sourceElementLeft), minLeft = realElements.reduce((prev, current) => {
      let left = getAttribute(current, sourceElementLeft);
      return left && left < prev ? left : prev;
    }, 1e3), width = realElements.reduce((prev, current) => {
      let right = getAttribute(current, sourceElementRight);
      return right && right > prev ? right : prev;
    }, 0) - minLeft;
    width < 30, width > 600 && (width = 600), firstElementLeft < 200 && (firstElementLeft = 10), firstElementLeft && firstElementLeft < 0 && (firstElementLeft = 0), paragraphTarget.style.left = `${minLeft || 10}px`, minLeft < 400 ? paragraphTarget.style.width = width + "px" : paragraphTarget.style.width = `calc(100% - ${minLeft}px)`, paragraphTarget.classList.add(
      "notranslate",
      `${translationTargetElementWrapperClass}`
    ), targetContainer.appendChild(paragraphTarget);
  } else {
    let lastElement = getLastHTMLElement(visibleParagraph.elements), position = "afterend";
    visibleParagraph.elements.length > 0 && lastElement && (realElements.length === 1 ? position = "beforeend" : isInlineElement(
      visibleParagraph.elements[0],
      ctx.rule
    ) || (position = "beforeend")), ctx.rule.insertPosition && (position = ctx.rule.insertPosition);
    let targetTranslationWrapper = document.createElement("font");
    targetTranslationWrapper.classList.add(
      "notranslate",
      translationTargetElementWrapperClass
    ), targetTranslationWrapper.id = `${translationTargetElementWrapperClass}-${id}`, targetTranslationWrapper.setAttribute("lang", ctx.targetLanguage);
    let loadingHtml = getLoadingHTML(
      ctx.config.loadingTheme
    );
    if (targetTranslationWrapper.innerHTML = loadingHtml, position === "beforeend") {
      let innerElement = getTheLastTextNodeParentElement(lastElement);
      innerElement ? innerElement.appendChild(targetTranslationWrapper) : lastElement.appendChild(targetTranslationWrapper);
    } else if (position === "afterend")
      lastElement.insertAdjacentElement(position, targetTranslationWrapper);
    else
      throw new Error("not support position");
  }
  currentParagraphIds.push(id), throttleMap[ctx.state.translationDebounce](ctx);
}
function addParagraphToQueue(paragraph, ctx) {
  ctx.state.translationStartMode === "dynamic" && !ctx.rule.isEbookBuilder && currentTranslatedTextLength > ctx.state.immediateTranslationTextCount ? onElementVisible(paragraph, (visibleParagraph) => {
    ctx.rule.visibleDelay > 0 ? setTimeout(() => {
      translationParagraph(visibleParagraph, ctx);
    }, ctx.rule.visibleDelay) : translationParagraph(visibleParagraph, ctx);
  }) : translationParagraph(paragraph, ctx);
}
async function translatePage(ctx) {
  if (pageStatus === "Translating")
    return;
  let isInIframe = getIsInIframe();
  if (setPageTranslatedStatus("Translating"), ctx || (ctx = await getGlobalContext(getRealUrl(), {})), document.querySelectorAll("iframe").forEach((frame) => {
    isInlineIframe(frame) && injectCssToFrame(frame.contentDocument, ctx);
  }), !ctx.state.isAutoTranslate && ctx.config.tempTranslateDomainMinutes > 0) {
    let now = Date.now(), currentDomain = new URL(ctx.url).hostname, currentTempTranslationDomains = ctx.localConfig.tempTranslationUrlMatches || [], index = currentTempTranslationDomains.findIndex(
      (item) => item.match === currentDomain && item.expiredAt > now
    ), isChanged = !1;
    index > -1 || (currentTempTranslationDomains.push({
      match: currentDomain,
      expiredAt: now + ctx.config.tempTranslateDomainMinutes * 60 * 1e3
    }), isChanged = !0), isChanged && await setLocalConfig({
      ...ctx.localConfig,
      tempTranslationUrlMatches: [
        ...currentTempTranslationDomains
      ]
    });
  }
  ctx.state.isAutoTranslate = !0;
  let currentScrollOffset = globalThis.scrollY, currentWindowHeight = globalThis.innerHeight;
  currentScrollOffset >= currentWindowHeight && (ctx.state.immediateTranslationTextCount = 0), isInitTranslationService || (isInitTranslationService = !0, isInIframe || initTranslationEngine(ctx).catch((e) => {
    log_default.warn("init translation engine error", e);
  })), log_default.debug("ctx", ctx), ctx.state.isNeedClean ? restorePage() : globalContext.state.isNeedClean = !0, ctx.rule.normalizeBody && document.querySelector(ctx.rule.normalizeBody) && (document.body = document.body.cloneNode(!0)), addToUnmountQueue(() => {
    currentTranslatedTextLength = 0, cleanParagraphs(), allIntersectionObserver.forEach((observer) => {
      observer.disconnect();
    }), allResizebleObserver.forEach((observer) => {
      observer.disconnect();
    }), allIntersectionObserver = [], waitToTranslateParagraphIds.clear();
  }), setPageTranslatedStatus("Translating");
  try {
    let allFrames = [ctx.mainFrame];
    document.querySelectorAll("iframe").forEach((frame) => {
      isInlineIframe(frame) && allFrames.push(frame.contentDocument.body);
    }), ctx.rule.shadowRootSelectors && ctx.rule.shadowRootSelectors.length > 0 && getElementsBySelectors(
      ctx.mainFrame,
      ctx.rule.shadowRootSelectors
    ).forEach((host) => {
      host.shadowRoot && host.shadowRoot.mode === "open" && allFrames.push(host.shadowRoot);
    });
    let containersCount = 0;
    setPageTranslatedStatus("Translating"), log_default.debug("allFrames", allFrames);
    for (let rootFrame of allFrames) {
      let containerCount = await translateFrame(rootFrame, ctx);
      containersCount += containerCount;
    }
    containersCount === 0 && setPageTranslatedStatus("Translated"), ctx.rule.isTranslateTitle && !isInIframe && (translateTitle(ctx).catch((e) => {
      log_default.error(
        "translateTitle error:",
        e.name,
        e.message,
        e.details || ""
      );
    }), enableTitleMutationObserver(ctx));
  } catch (e) {
    setPageTranslatedStatus("Error"), log_default.error(e);
  }
}
async function translateFrame(rootFrame, ctx) {
  markContainers(rootFrame, ctx.rule, rootFrame, !1);
  let containers = getContainers(rootFrame, ctx);
  log_default.debug("detect containers", containers);
  let { rule } = ctx;
  containers.length > 0 && await translateContainers(containers, rootFrame, ctx, !1);
  let observer = enableMutatinObserver(rootFrame, rule, ctx);
  return rootFrame === ctx.mainFrame ? mainMutaionObserver = observer : mutationObserverMap.set(rootFrame, observer), containers.length;
}
async function getGlobalContext(url, state) {
  let config = await getConfig2(), stateKeys = Object.keys(state);
  if (globalContext) {
    let options2 = {
      url,
      config,
      state: { ...globalContext.state, ...state }
    };
    globalContext = await getContext(options2);
  } else {
    let realState = state;
    stateKeys.length === 0 && (realState = void 0), globalContext = await getContext({
      url,
      config,
      state: realState
    });
  }
  return globalContext;
}
async function toggleTranslateTheMainPage() {
  getPageStatus() === "Original" ? await translateTheMainPage() : (getPageStatus() === "Translated" || getPageStatus() === "Error") && (globalContext = await getGlobalContext(getRealUrl(), {}), globalContext.state.translationArea !== "main" ? await translateTheMainPage() : restorePage());
}
async function translateTheMainPage() {
  globalContext = await getGlobalContext(getRealUrl(), {
    translationArea: "main"
  }), await translatePage(globalContext);
}
async function translateTheWholePage() {
  globalContext = await getGlobalContext(getRealUrl(), {
    translationArea: "body"
  }), await translatePage(globalContext);
}
async function toggleTranslateTheWholePage() {
  getPageStatus() === "Original" ? await translateTheWholePage() : (getPageStatus() === "Translated" || getPageStatus() === "Error") && (globalContext = await getGlobalContext(getRealUrl(), {}), globalContext.state.translationArea !== "body" ? (globalContext.state.translationArea = "body", globalContext = await getGlobalContext(getRealUrl(), {}), await translatePage(globalContext)) : restorePage());
}
async function translateToThePageEndImmediately() {
  globalContext = await getGlobalContext(getRealUrl(), {
    translationStartMode: "immediate"
  }), await translatePage(globalContext), await translateNewDynamicNodes(globalContext);
}
async function translateTitle(ctx) {
  let pageTitle = document.title;
  if (!pageTitle || pageTitle.includes(titleDelimiters))
    return;
  originalPageTitle !== pageTitle && (originalPageTitle = pageTitle);
  let currentLang = "auto";
  if (ctx.state.isDetectParagraphLanguage || (currentLang = getCurrentPageLanguageByClient()), currentLang === "auto") {
    let detectedLang = await detectLanguage({
      text: pageTitle,
      minLength: 10
    });
    if (isSameTargetLanguage(detectedLang, ctx.targetLanguage))
      return;
  }
  try {
    let result = await translateSingleSentence({
      id: 0,
      url: ctx.url,
      text: pageTitle,
      from: currentLang,
      to: ctx.targetLanguage,
      fromByClient: currentLang
    }, ctx);
    result && result.text && (document.title = originalPageTitle + titleDelimiters + result.text);
  } catch (e) {
    throw e;
  }
}
function setLoadingToParagraph(rootFrame, id, ctx) {
  let element = rootFrame.querySelector(
    "#" + translationTargetElementWrapperClass + "-" + id
  );
  element && (element.innerHTML = getLoadingHTML(ctx.config.loadingTheme));
}
function getLoadingHTML(theme) {
  return `&#160;<font class="${brandId}-loading-${theme} notranslate"></font>`;
}
async function translateContainers(containers, rootFrame, ctx, isDynamic) {
  let { rule } = ctx;
  for (let container of containers)
    markContainers(container, rule, rootFrame, isDynamic);
  let targetContainers = [];
  if (ctx.rule.isPdf)
    containers.length > 0 && (setPageTranslatedStatus("Translating"), targetContainers = normalizeContainer2(
      containers,
      rule
    ).targetContainers);
  else {
    setPageTranslatedStatus("Translating");
    let normalizeResult = normalizeContainer(
      containers,
      rule
    ), { hiddenElements } = normalizeResult;
    for (let element of hiddenElements)
      onHiddenElementVisible(element, () => {
        removeAttribute(element, sourceElementExcludeAttributeName, !0), translateContainers([element], rootFrame, ctx, !0);
      });
    setPageTranslatedStatus("Translating");
  }
  let paragraphs = [];
  if (ctx.rule.isPdf ? paragraphs = await getParagraphs2(
    rootFrame,
    containers,
    ctx,
    targetContainers
  ) : (containers = containers.filter((container) => !isExcludeElement(container, rule, !1)), paragraphs = await getParagraphs(
    rootFrame,
    containers,
    ctx
  )), setPageTranslatedStatus("Translating"), paragraphs.length === 0) {
    setPageTranslatedStatus("Translated");
    return;
  }
  log_default.debug("detect paragraphs", paragraphs);
  for (let paragraph of paragraphs)
    addParagraphToQueue(paragraph, ctx);
  setPageTranslatedStatus("Translated");
}
async function translateParagraphById(id) {
  let paragraph = getParagraph(id);
  if (!paragraph)
    throw new Error("paragraph not found");
  let ctx = await getGlobalContext(getRealUrl(), {});
  setLoadingToParagraph(paragraph.rootFrame, id, ctx);
  let sentence = {
    id: paragraph.id,
    text: paragraph.text,
    from: paragraph.languageByLocal,
    fromByClient: paragraph.languageByClient,
    to: ctx.targetLanguage,
    url: ctx.encryptedUrl
  };
  try {
    let result = await translateSingleSentence(sentence, ctx);
    onParagraphTranslated(null, result, sentence, ctx);
  } catch (e) {
    onParagraphTranslated(e, null, sentence, ctx);
  }
}
function onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx) {
  let paragraphWithState = getParagraph(sentenceRequest.id);
  if (paragraphWithState && (err || !translatedSentence)) {
    err || (log_default.error("translate error", sentenceRequest, err, translatedSentence), err = new Error("no response from server"));
    let wrapperId = sentenceRequest.id, wrapper = paragraphWithState.rootFrame.querySelector(
      `#${translationTargetElementWrapperClass}-${wrapperId}`
    ), errorMessage = err.message.replaceAll(`
`, "");
    errorMessage = errorMessage.replaceAll('"', "&quot;"), paragraphWithState && (paragraphWithState.state = "Error", setParagraph(paragraphWithState.id, paragraphWithState));
    let errorHtml = `<font class="${brandId}-error notranslate"> <font class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${errorMessage}"><button class="${brandId}-clickable-button notranslate" title="${errorMessage}">\u2757</button></font> <button class="${brandId}-clickable-button notranslate" data-${brandId}-paragraph-id="${wrapperId}" data-${brandId}-action="retry">\u{1F504}</button></font>`;
    wrapper && (wrapper.innerHTML = errorHtml);
  } else {
    let paragraph = getParagraph(sentenceRequest.id);
    if (paragraph) {
      paragraph.state = "Translated", setParagraph(paragraph.id, paragraph);
      let wrapperId = translatedSentence.id, wrapper = paragraph.rootFrame.querySelector(
        `#${translationTargetElementWrapperClass}-${wrapperId}`
      );
      if (wrapper) {
        if (paragraph.text === translatedSentence.text)
          wrapper.innerHTML = "";
        else {
          let targetItem = paragraphToHtml(
            paragraph,
            translatedSentence,
            ctx
          );
          wrapper.innerHTML = targetItem.html;
        }
        paragraph.rootFrame.querySelectorAll(
          `[${sourceElementParagraphAttributeName}="${wrapperId}"]`
        ).forEach((element) => {
          setAttribute(
            element,
            sourceElementTranslatedMarkAttributeName,
            "1"
          );
        });
      }
    } else
      log_default.error("paragraph not found", sentenceRequest.id);
  }
}
async function translateCurrentQueue(ctx) {
  if (currentParagraphIds.length === 0)
    return Promise.resolve();
  let ids = [...currentParagraphIds];
  currentParagraphIds = [];
  let currentParagraphLang = "auto";
  ctx.state.isDetectParagraphLanguage || (currentParagraphLang = getCurrentPageLanguage());
  let payload = {
    sentences: ids.filter((id) => getParagraph(id)).map((id) => {
      let paragraph = getParagraph(id), from = paragraph.languageByLocal;
      return from === "auto" && (from = currentParagraphLang), {
        id: paragraph.id,
        url: ctx.encryptedUrl,
        text: paragraph.text,
        from,
        fromByClient: paragraph.languageByClient,
        to: ctx.targetLanguage
      };
    })
  };
  if (payload.sentences.length > 0) {
    setPageTranslatedStatus("Translating");
    try {
      await translateMultipleSentences(
        payload,
        ctx,
        (err, translatedSentence, sentenceRequest) => {
          onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx);
        }
      );
    } catch (e) {
      setPageTranslatedStatus("Error"), log_default.error(
        "translateCurrentQueue error",
        e.name,
        e.message,
        e.details || " "
      );
      return;
    }
  }
  setPageTranslatedStatus("Translated");
}
function setPageTranslatedStatus(_pageStatus) {
  pageStatus = _pageStatus, sendPageTranslatedStatus(pageStatus);
}
function enableMutatinObserver(rootFrame, rule, ctx) {
  log_default.debug("enableMutatinObserver for ", rootFrame), disableMutatinObserver(rootFrame), allNewDynamicElements = [], currentNewDynamicElements = [];
  let inlineAndIgnoreAndTextTags = rule.inlineTags.concat(rule.excludeTags).concat("#text", "BR"), mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach((mutation) => {
      if (rootFrame === ctx.mainFrame) {
        let currentUrl = getRealUrl();
        if (currentUrl.split("#")[0] !== oldUrl && rule.observeUrlChange) {
          oldUrl = currentUrl.split("#")[0], clean(), disableMutatinObserver(rootFrame), disableTitleMutationObserver(), initPage();
          let event = new Event(pageUrlChangedEventName);
          document.dispatchEvent(event);
          return;
        }
      }
      mutation.addedNodes.forEach((addedNode) => {
        if (addedNode.nodeType === Node.ELEMENT_NODE) {
          let element = addedNode;
          if (element.nodeName === "IFRAME")
            isInlineIframe(element) && setTimeout(() => {
              injectCssToFrame(
                element.contentDocument,
                ctx
              ), translateFrame(
                element.contentDocument.body,
                ctx
              ).catch((e) => {
                log_default.error(
                  "translateFrame error",
                  e.details || " ",
                  e
                );
              });
            }, ctx.rule.urlChangeDelay);
          else if (mutationElementIsBlock(rule, element) || !inlineAndIgnoreAndTextTags.includes(
            element.nodeName
          )) {
            if (element.classList.contains("notranslate") || element.getAttribute("translate") === "no")
              return;
            isDuplicateElement(element, allNewDynamicElements) || (allNewDynamicElements.push(element), setTimeout(() => {
              currentNewDynamicElements.push({
                element,
                rootFrame
              }), debounceMap[ctx.state.translationDebounce](ctx);
            }, rule.mutationChangeDelay || 0)), element && element.querySelectorAll && element.querySelectorAll("iframe").forEach((inlineIframe) => {
              isInlineIframe(inlineIframe) && setTimeout(() => {
                injectCssToFrame(
                  inlineIframe.contentDocument,
                  ctx
                ), translateFrame(
                  inlineIframe.contentDocument.body,
                  ctx
                ).catch((e) => {
                  log_default.error(
                    "translateFrame error",
                    e.details || " ",
                    e
                  );
                });
              }, ctx.rule.urlChangeDelay);
            });
          }
        }
      });
    });
  });
  return mutationObserver.observe(rootFrame, {
    childList: !0,
    subtree: !0
  }), mutationObserver;
}
function enableTitleMutationObserver(ctx) {
  let titleElement = document.querySelector("title");
  titleElement && (titleMutationObserver = new MutationObserver(function(mutations) {
    mutations.length > 0 && (mutations[0].target.text.includes(titleDelimiters) || translateTitle(ctx).catch((e) => {
      log_default.error(
        "translateTitle error:",
        e.name,
        e.message,
        e.details || ""
      );
    }));
  }), titleMutationObserver.observe(titleElement, {
    subtree: !0,
    characterData: !0,
    childList: !0
  }));
}
function mutationElementIsBlock(rule, element) {
  if (rule.extraBlockSelectors) {
    for (let match of rule.extraBlockSelectors)
      if (element.matches(match))
        return !0;
  }
  return !1;
}
async function initPage() {
  let isInIframe = getIsInIframe(), ctx = await getGlobalContext(getRealUrl(), {});
  ctx.rule.urlChangeDelay && await delay(ctx.rule.urlChangeDelay), ctx.rule.waitForSelectors && ctx.rule.waitForSelectors.length > 0 && await waitForSelectors(
    ctx.rule.waitForSelectors,
    ctx.rule.waitForSelectorsTimeout
  );
  let lang = ctx.sourceLanguage;
  lang === "auto" ? (isMonkey() ? lang = await detectLanguage({
    text: getMainText(ctx.mainFrame).slice(0, 1e3)
  }) : isInIframe ? lang = await detectLanguage({
    text: getMainText(ctx.mainFrame).slice(0, 1e3)
  }) : lang = await detectTabLanguage(), lang === "auto" && (lang = await detectPageLanguage()), setCurrentPageLanguage(lang)) : setCurrentPageLanguageByClient(lang);
  let isAutoTranslate = ctx.state.isAutoTranslate || ctx.isTranslateUrl || ctx.rule.isPdf;
  if (!isAutoTranslate && !ctx.isTranslateExcludeUrl && (log_default.debug(`detect page language: ${lang}`), isSameTargetLanguage(lang, ctx.targetLanguage) || lang === "auto" || isMatchLanguage(lang, ctx.config.translationLanguagePattern) && (isAutoTranslate = !0, log_default.debug(`match language pattern ${lang}, auto translate`))), ctx.rule.isEbookBuilder && (isAutoTranslate = !1), isAutoTranslate)
    globalContext.state.isAutoTranslate = !0, await translatePage(globalContext);
  else if (log_default.debug("do not auto translate", ctx), ctx.rule.initTranslationServiceAsSoonAsPossible && ctx.translationService === "deepl") {
    if (isSameTargetLanguage(lang, ctx.targetLanguage) || lang === "auto")
      return;
    ctx.config && ctx.config.translationServices && ctx.config.translationServices.deepl && ctx.config.translationServices.deepl.authKey && typeof ctx.config.translationServices.deepl.authKey == "string" && ctx.config.translationServices.deepl.authKey.startsWith("immersive_") && (isInitTranslationService || (isInitTranslationService = !0, isInIframe || initTranslationEngine(ctx).catch((e) => {
      log_default.warn("init translation engine error", e);
    })));
  }
}
function disableMutatinObserver(rootFrame) {
  if (mutationObserverMap.has(rootFrame)) {
    let mutationObserver = mutationObserverMap.get(rootFrame);
    mutationObserver.disconnect(), mutationObserver.takeRecords(), mutationObserverMap.delete(rootFrame);
  } else if (globalContext && rootFrame === globalContext.mainFrame || rootFrame === document.body) {
    let mutationObserver = mainMutaionObserver;
    mutationObserver && (mutationObserver.disconnect(), mutationObserver.takeRecords());
  }
}
function disableTitleMutationObserver() {
  titleMutationObserver && (titleMutationObserver.disconnect(), titleMutationObserver.takeRecords(), titleMutationObserver = void 0);
}
function getPageStatus() {
  return pageStatus;
}
function waitForSelectors(selectors, timeout = 3e3) {
  return new Promise((resolve, _reject) => {
    let timer2 = timeout ? setTimeout(() => {
      resolve(new Error("timeout"));
    }, timeout) : void 0, interval = setInterval(() => {
      selectors.every((selector) => document.querySelector(selector) !== null) && (clearInterval(interval), timer2 && clearTimeout(timer2), resolve(null));
    }, 50);
  });
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
function t(data, key, lang, fallbackLang, params) {
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
}, locales_default = finalTranslations;
function t2(key, interfaceLanguage, params) {
  return t(
    finalTranslations,
    key,
    interfaceLanguage,
    fallbackLanguage,
    params
  );
}
var getLanguageName = (lang, interfaceLanguage, useOriginal) => {
  let translation = t(
    finalTranslations,
    `languages.${lang}`,
    interfaceLanguage,
    "en"
  );
  return useOriginal ? langMap[lang] || lang : translation !== `languages.${lang}` ? translation : langMap[lang];
};

// content_dom_listeners.ts
var throttleToggleTranslatePage = se(() => {
  toggleTranslatePage();
  let event = new CustomEvent(userscriptCommandEventName, {
    detail: {
      method: "toggleTranslatePage"
    }
  });
  globalThis.document.dispatchEvent(event);
}, 200), throttleToggleTranslationMask = se(() => {
  toggleTranslationMask();
  let event = new CustomEvent(userscriptCommandEventName, {
    detail: {
      method: "toggleTranslationMask"
    }
  });
  globalThis.document.dispatchEvent(event);
}, 200);
async function setupDomListeners(ctx) {
  if (document.addEventListener("click", (e) => {
    let target = e.target, action = target.getAttribute("data-immersive-translate-action");
    if (action && action === "retry") {
      let paragraphId = target.getAttribute(
        "data-immersive-translate-paragraph-id"
      );
      paragraphId && translateParagraphById(Number(paragraphId));
    }
  }), ctx.rule.fingerCountToToggleTranslagePageWhenTouching >= 2 && document.addEventListener("touchstart", (e) => {
    e.touches.length == ctx.rule.fingerCountToToggleTranslagePageWhenTouching ? throttleToggleTranslatePage() : e.touches.length === ctx.rule.fingerCountToToggleTranslationMaskWhenTouching && throttleToggleTranslationMask();
  }), isMonkey() && globalThis.top != globalThis.self && globalThis.addEventListener("message", (event) => {
    event && event.data && event.data.payload && event.data.author === iframeMessageIdentifier && asyncMessageHandler(event.data.payload, {
      // @ts-ignore: it's ok
      tab: {
        id: 1,
        url: "https://www.fake-iframe.com",
        active: !0
      }
    });
  }, !1), globalThis.top === globalThis.self) {
    let channel = ProtoframePubsub.rootIframe(
      childFrameToRootFrameIdentifier
    );
    channel.handleAsk("getRateLimitDelay", onRateLimiterDelayRequest), channel.handleAsk("throttleRequest", onThrottleRequest);
  } else
    await setupChildIframeChannel();
}

// utils/compare_version.ts
function isAVersionGreaterOrEqualWithB(a3, b4) {
  return a3.localeCompare(b4, void 0, {
    numeric: !0,
    sensitivity: "base"
  }) >= 0;
}

// cron.ts
async function runCron(interval) {
  try {
    let now = /* @__PURE__ */ new Date();
    log_default.debug(
      "cron task start, next will run at",
      new Date(now.getTime() + interval).toLocaleString()
    ), await browserAPI.storage.local.set({
      [lastRunTimeStorageKey]: now.toISOString()
    }), await syncRules(), isMonkey() || await autoSyncLatestConfig();
  } catch (e) {
    log_default.error("run cron task failed", e);
  }
}
async function checkCronAndRunOnce() {
  let interval = (await getConfig2()).interval;
  if (interval) {
    let lastRunTimeResult = await browserAPI.storage.local.get(
      lastRunTimeStorageKey
    );
    if (lastRunTimeResult && lastRunTimeResult[lastRunTimeStorageKey]) {
      let lastRunTime = lastRunTimeResult[lastRunTimeStorageKey];
      if (Date.now() - new Date(lastRunTime).getTime() < interval) {
        let nextRunAt = new Date(new Date(lastRunTime).getTime() + interval);
        log_default.debug(`cron task not run, next will run at ${nextRunAt}`);
        return;
      } else
        runCron(interval);
    } else
      runCron(interval);
  }
}
async function syncRules() {
  try {
    let localConfig2 = await getConfig2(), data = await request2({ url: buildinConfigSyncUrl }), localConfigUpdatedAtIsoString = localConfig2.buildinConfigUpdatedAt, localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString), latestIsoTime = data.buildinConfigUpdatedAt, latest = new Date(latestIsoTime), remoteMinVersion = data.minVersion, localVersion = browserAPI.runtime.getManifest().version;
    isAVersionGreaterOrEqualWithB(localVersion, remoteMinVersion) ? latest > localConfigUpdatedAt ? (await browserAPI.storage.local.set({
      buildinConfig: data
    }), log_default.info(
      `sync remote rules success, latest: ${new Date(latestIsoTime).toLocaleString()}`
    )) : log_default.debug(`no need to sync rules, latest: ${localConfigUpdatedAt}`) : log_default.info(
      `local version is too old, please update to ${remoteMinVersion} or later`
    );
  } catch (e) {
    log_default.error("sync rules error: ", e);
  }
}

// web-options/is_web_options_page.ts
function isWebOptionsPage2() {
  let optionsHostnames = ["localhost", hostname], optionsPaths = ["/dist/userscript/options/", "/options/", "/options"], url = getRealUrl(), urlObj = new URL(url), currentHostname = urlObj.hostname, currentPath = urlObj.pathname;
  if ((optionsHostnames.includes(currentHostname) || currentHostname.startsWith("192.168")) && optionsPaths.includes(currentPath)) {
    let optionsMetaElement = document.querySelector(
      "meta[name=immersive-translate-options]"
    );
    if (optionsMetaElement && optionsMetaElement.getAttribute("content") === "true")
      return !0;
  }
  return !1;
}

// web-options/setup_web_options_page.ts
async function setupWebOptionsPage() {
  if (!document.getElementById(
    "immersive-translate-status"
  )) {
    log_default.error("Could not find status element");
    return;
  }
  await initStorage("local"), await initStorage("sync"), initOther();
  let pageReadyElement = document.getElementById(
    "immersive-translate-page-ready"
  );
  pageReadyElement && setTimeout(() => {
    pageReadyElement.value = "true", pageReadyElement.dispatchEvent(new Event("change"));
  }, 100);
}
async function answerMessage(e, fn) {
  let detail;
  try {
    detail = JSON.parse(e.detail);
  } catch (e2) {
    log_default.error("parse detail failed", e2);
    return;
  }
  let id = detail.id || "default";
  try {
    let params = detail.data || {}, response = await fn(params), message = {
      id,
      ok: !0,
      data: response
    };
    document.dispatchEvent(
      new CustomEvent(documentMessageTypeIdentifierForHandler, {
        detail: JSON.stringify({
          ...message,
          type: "answer"
        })
      })
    );
  } catch (e2) {
    let message = {
      ok: !1,
      errorName: e2.name,
      errorMessage: e2.message,
      errorDetails: e2.details || e2.detail
    };
    document.dispatchEvent(
      new CustomEvent(documentMessageTypeIdentifierForHandler, {
        detail: JSON.stringify({
          ...message,
          id,
          type: "answer"
        })
      })
    );
  }
}
function initOther() {
  document.addEventListener(documentMessageTypeIdentifierForAsk, (e) => {
    let event = e;
    if (event && event.detail) {
      let detail;
      try {
        detail = JSON.parse(event.detail);
      } catch (e2) {
        log_default.error("parse detail failed", e2);
        return;
      }
      detail.type === "ask" && detail.method === "request" && answerMessage(event, request2);
    }
  });
  let manifestElement = document.getElementById(
    "immersive-translate-manifest"
  );
  if (!manifestElement) {
    log_default.error("Could not find manifest element");
    return;
  }
  manifestElement.value = JSON.stringify(browserAPI.runtime.getManifest()), manifestElement.dispatchEvent(new Event("change")), document.getElementById(
    "immersive-translate-message"
  ).addEventListener(
    "change",
    (event) => {
      try {
        let messageObj = JSON.parse(
          event.target.value
        );
        messageObj && messageObj.method === "removeStorageKey" && messageObj.data && messageObj.data.area && messageObj.data.keys && browserAPI.storage[messageObj.data.area].remove(
          messageObj.data.keys
        );
      } catch (e) {
        log_default.error("parse message error", e);
      }
    }
  );
}
async function initStorage(area) {
  let statusElement = document.getElementById(
    "immersive-translate-status"
  ), storageInputElement = document.getElementById(
    `immersive-translate-${area}-storage`
  );
  if (storageInputElement) {
    log_default.debug("init storage");
    let browserStorageObj = await browserAPI.storage[area].get(null);
    storageInputElement.value = JSON.stringify(browserStorageObj), storageInputElement.dispatchEvent(new Event("change")), storageInputElement.addEventListener("change", (event) => {
      try {
        let storageObj = JSON.parse(event.target.value);
        browserAPI.storage[area].set(storageObj);
      } catch (e) {
        log_default.error("save to storage error", e);
      }
    });
  } else {
    log_default.error(`Could not find storage ${area} element`), statusElement.innerText = "Could not find storage local input element";
    return;
  }
}

// userscript_message.ts
function sendMessageToContent(request3) {
  asyncMessageHandler(request3, {
    // @ts-ignore: it's ok
    tab: {
      id: 1,
      url: "https://www.fake.com",
      active: !0
    }
  }).catch((e) => {
    log_default.error("send content message request failed", request3, e);
  }), document.querySelectorAll("iframe").forEach((iframe) => {
    iframe.contentWindow && iframe.contentWindow.postMessage(
      {
        author: iframeMessageIdentifier,
        payload: request3
      },
      "*"
    );
  });
  let event = new CustomEvent(userscriptCommandEventName, {
    detail: request3
  });
  globalThis.document.dispatchEvent(event);
}

// userscript_command_listeners.ts
function setupCommandListeners(config) {
  let shortcuts = config.shortcuts || {}, keyMap = Object.keys(shortcuts).reduce((acc, key) => (acc[shortcuts[key]] = key, acc), {}), shortcutsKeys = Object.keys(keyMap);
  for (let key of shortcutsKeys) {
    let realKey = key.replace(/MacCtrl/ig, "Ctrl");
    realKey && v2(realKey, (e) => {
      e.preventDefault(), sendMessageToContent({
        method: keyMap[key]
      });
    });
  }
}

// https://esm.sh/stable/preact@10.11.0/deno/preact.js
var P4, d3, $4, Y2, S4, F3, B5, T3 = {}, V3 = [], Z2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k2(e, t3) {
  for (var _3 in t3)
    e[_3] = t3[_3];
  return e;
}
function j3(e) {
  var t3 = e.parentNode;
  t3 && t3.removeChild(e);
}
function ee(e, t3, _3) {
  var r, l2, o2, s4 = {};
  for (o2 in t3)
    o2 == "key" ? r = t3[o2] : o2 == "ref" ? l2 = t3[o2] : s4[o2] = t3[o2];
  if (arguments.length > 2 && (s4.children = arguments.length > 3 ? P4.call(arguments, 2) : _3), typeof e == "function" && e.defaultProps != null)
    for (o2 in e.defaultProps)
      s4[o2] === void 0 && (s4[o2] = e.defaultProps[o2]);
  return w2(e, s4, r, l2, null);
}
function w2(e, t3, _3, r, l2) {
  var o2 = { type: e, props: t3, key: _3, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l2 ?? ++$4 };
  return l2 == null && d3.vnode != null && d3.vnode(o2), o2;
}
function L4(e) {
  return e.children;
}
function U4(e, t3) {
  this.props = e, this.context = t3;
}
function C3(e, t3) {
  if (t3 == null)
    return e.__ ? C3(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var _3; t3 < e.__k.length; t3++)
    if ((_3 = e.__k[t3]) != null && _3.__e != null)
      return _3.__e;
  return typeof e.type == "function" ? C3(e) : null;
}
function z4(e) {
  var t3, _3;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t3 = 0; t3 < e.__k.length; t3++)
      if ((_3 = e.__k[t3]) != null && _3.__e != null) {
        e.__e = e.__c.base = _3.__e;
        break;
      }
    return z4(e);
  }
}
function M3(e) {
  (!e.__d && (e.__d = !0) && S4.push(e) && !D5.__r++ || F3 !== d3.debounceRendering) && ((F3 = d3.debounceRendering) || setTimeout)(D5);
}
function D5() {
  for (var e; D5.__r = S4.length; )
    e = S4.sort(function(t3, _3) {
      return t3.__v.__b - _3.__v.__b;
    }), S4 = [], e.some(function(t3) {
      var _3, r, l2, o2, s4, f3;
      t3.__d && (s4 = (o2 = (_3 = t3).__v).__e, (f3 = _3.__P) && (r = [], (l2 = k2({}, o2)).__v = o2.__v + 1, W3(f3, o2, l2, _3.__n, f3.ownerSVGElement !== void 0, o2.__h != null ? [s4] : null, r, s4 ?? C3(o2), o2.__h), K3(r, o2), o2.__e != s4 && z4(o2)));
    });
}
function G4(e, t3, _3, r, l2, o2, s4, f3, p4, a3) {
  var n2, h2, c3, i2, u2, b4, v4, y2 = r && r.__k || V3, g5 = y2.length;
  for (_3.__k = [], n2 = 0; n2 < t3.length; n2++)
    if ((i2 = _3.__k[n2] = (i2 = t3[n2]) == null || typeof i2 == "boolean" ? null : typeof i2 == "string" || typeof i2 == "number" || typeof i2 == "bigint" ? w2(null, i2, null, null, i2) : Array.isArray(i2) ? w2(L4, { children: i2 }, null, null, null) : i2.__b > 0 ? w2(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) != null) {
      if (i2.__ = _3, i2.__b = _3.__b + 1, (c3 = y2[n2]) === null || c3 && i2.key == c3.key && i2.type === c3.type)
        y2[n2] = void 0;
      else
        for (h2 = 0; h2 < g5; h2++) {
          if ((c3 = y2[h2]) && i2.key == c3.key && i2.type === c3.type) {
            y2[h2] = void 0;
            break;
          }
          c3 = null;
        }
      W3(e, i2, c3 = c3 || T3, l2, o2, s4, f3, p4, a3), u2 = i2.__e, (h2 = i2.ref) && c3.ref != h2 && (v4 || (v4 = []), c3.ref && v4.push(c3.ref, null, i2), v4.push(h2, i2.__c || u2, i2)), u2 != null ? (b4 == null && (b4 = u2), typeof i2.type == "function" && i2.__k === c3.__k ? i2.__d = p4 = q4(i2, p4, e) : p4 = J3(e, i2, c3, y2, u2, p4), typeof _3.type == "function" && (_3.__d = p4)) : p4 && c3.__e == p4 && p4.parentNode != e && (p4 = C3(c3));
    }
  for (_3.__e = b4, n2 = g5; n2--; )
    y2[n2] != null && (typeof _3.type == "function" && y2[n2].__e != null && y2[n2].__e == _3.__d && (_3.__d = C3(r, n2 + 1)), X5(y2[n2], y2[n2]));
  if (v4)
    for (n2 = 0; n2 < v4.length; n2++)
      Q3(v4[n2], v4[++n2], v4[++n2]);
}
function q4(e, t3, _3) {
  for (var r, l2 = e.__k, o2 = 0; l2 && o2 < l2.length; o2++)
    (r = l2[o2]) && (r.__ = e, t3 = typeof r.type == "function" ? q4(r, t3, _3) : J3(_3, r, r, l2, r.__e, t3));
  return t3;
}
function J3(e, t3, _3, r, l2, o2) {
  var s4, f3, p4;
  if (t3.__d !== void 0)
    s4 = t3.__d, t3.__d = void 0;
  else if (_3 == null || l2 != o2 || l2.parentNode == null)
    e:
      if (o2 == null || o2.parentNode !== e)
        e.appendChild(l2), s4 = null;
      else {
        for (f3 = o2, p4 = 0; (f3 = f3.nextSibling) && p4 < r.length; p4 += 2)
          if (f3 == l2)
            break e;
        e.insertBefore(l2, o2), s4 = o2;
      }
  return s4 !== void 0 ? s4 : l2.nextSibling;
}
function _e2(e, t3, _3, r, l2) {
  var o2;
  for (o2 in _3)
    o2 === "children" || o2 === "key" || o2 in t3 || N4(e, o2, null, _3[o2], r);
  for (o2 in t3)
    l2 && typeof t3[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || _3[o2] === t3[o2] || N4(e, o2, t3[o2], _3[o2], r);
}
function I3(e, t3, _3) {
  t3[0] === "-" ? e.setProperty(t3, _3) : e[t3] = _3 == null ? "" : typeof _3 != "number" || Z2.test(t3) ? _3 : _3 + "px";
}
function N4(e, t3, _3, r, l2) {
  var o2;
  e:
    if (t3 === "style")
      if (typeof _3 == "string")
        e.style.cssText = _3;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t3 in r)
            _3 && t3 in _3 || I3(e.style, t3, "");
        if (_3)
          for (t3 in _3)
            r && _3[t3] === r[t3] || I3(e.style, t3, _3[t3]);
      }
    else if (t3[0] === "o" && t3[1] === "n")
      o2 = t3 !== (t3 = t3.replace(/Capture$/, "")), t3 = t3.toLowerCase() in e ? t3.toLowerCase().slice(2) : t3.slice(2), e.l || (e.l = {}), e.l[t3 + o2] = _3, _3 ? r || e.addEventListener(t3, o2 ? R3 : O3, o2) : e.removeEventListener(t3, o2 ? R3 : O3, o2);
    else if (t3 !== "dangerouslySetInnerHTML") {
      if (l2)
        t3 = t3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t3 !== "href" && t3 !== "list" && t3 !== "form" && t3 !== "tabIndex" && t3 !== "download" && t3 in e)
        try {
          e[t3] = _3 ?? "";
          break e;
        } catch {
        }
      typeof _3 == "function" || (_3 != null && (_3 !== !1 || t3[0] === "a" && t3[1] === "r") ? e.setAttribute(t3, _3) : e.removeAttribute(t3));
    }
}
function O3(e) {
  this.l[e.type + !1](d3.event ? d3.event(e) : e);
}
function R3(e) {
  this.l[e.type + !0](d3.event ? d3.event(e) : e);
}
function W3(e, t3, _3, r, l2, o2, s4, f3, p4) {
  var a3, n2, h2, c3, i2, u2, b4, v4, y2, g5, x4, H5, E3, m4 = t3.type;
  if (t3.constructor !== void 0)
    return null;
  _3.__h != null && (p4 = _3.__h, f3 = t3.__e = _3.__e, t3.__h = null, o2 = [f3]), (a3 = d3.__b) && a3(t3);
  try {
    e:
      if (typeof m4 == "function") {
        if (v4 = t3.props, y2 = (a3 = m4.contextType) && r[a3.__c], g5 = a3 ? y2 ? y2.props.value : a3.__ : r, _3.__c ? b4 = (n2 = t3.__c = _3.__c).__ = n2.__E : ("prototype" in m4 && m4.prototype.render ? t3.__c = n2 = new m4(v4, g5) : (t3.__c = n2 = new U4(v4, g5), n2.constructor = m4, n2.render = oe), y2 && y2.sub(n2), n2.props = v4, n2.state || (n2.state = {}), n2.context = g5, n2.__n = r, h2 = n2.__d = !0, n2.__h = []), n2.__s == null && (n2.__s = n2.state), m4.getDerivedStateFromProps != null && (n2.__s == n2.state && (n2.__s = k2({}, n2.__s)), k2(n2.__s, m4.getDerivedStateFromProps(v4, n2.__s))), c3 = n2.props, i2 = n2.state, h2)
          m4.getDerivedStateFromProps == null && n2.componentWillMount != null && n2.componentWillMount(), n2.componentDidMount != null && n2.__h.push(n2.componentDidMount);
        else {
          if (m4.getDerivedStateFromProps == null && v4 !== c3 && n2.componentWillReceiveProps != null && n2.componentWillReceiveProps(v4, g5), !n2.__e && n2.shouldComponentUpdate != null && n2.shouldComponentUpdate(v4, n2.__s, g5) === !1 || t3.__v === _3.__v) {
            n2.props = v4, n2.state = n2.__s, t3.__v !== _3.__v && (n2.__d = !1), n2.__v = t3, t3.__e = _3.__e, t3.__k = _3.__k, t3.__k.forEach(function(A4) {
              A4 && (A4.__ = t3);
            }), n2.__h.length && s4.push(n2);
            break e;
          }
          n2.componentWillUpdate != null && n2.componentWillUpdate(v4, n2.__s, g5), n2.componentDidUpdate != null && n2.__h.push(function() {
            n2.componentDidUpdate(c3, i2, u2);
          });
        }
        if (n2.context = g5, n2.props = v4, n2.__v = t3, n2.__P = e, x4 = d3.__r, H5 = 0, "prototype" in m4 && m4.prototype.render)
          n2.state = n2.__s, n2.__d = !1, x4 && x4(t3), a3 = n2.render(n2.props, n2.state, n2.context);
        else
          do
            n2.__d = !1, x4 && x4(t3), a3 = n2.render(n2.props, n2.state, n2.context), n2.state = n2.__s;
          while (n2.__d && ++H5 < 25);
        n2.state = n2.__s, n2.getChildContext != null && (r = k2(k2({}, r), n2.getChildContext())), h2 || n2.getSnapshotBeforeUpdate == null || (u2 = n2.getSnapshotBeforeUpdate(c3, i2)), E3 = a3 != null && a3.type === L4 && a3.key == null ? a3.props.children : a3, G4(e, Array.isArray(E3) ? E3 : [E3], t3, _3, r, l2, o2, s4, f3, p4), n2.base = t3.__e, t3.__h = null, n2.__h.length && s4.push(n2), b4 && (n2.__E = n2.__ = null), n2.__e = !1;
      } else
        o2 == null && t3.__v === _3.__v ? (t3.__k = _3.__k, t3.__e = _3.__e) : t3.__e = ne(_3.__e, t3, _3, r, l2, o2, s4, p4);
    (a3 = d3.diffed) && a3(t3);
  } catch (A4) {
    t3.__v = null, (p4 || o2 != null) && (t3.__e = f3, t3.__h = !!p4, o2[o2.indexOf(f3)] = null), d3.__e(A4, t3, _3);
  }
}
function K3(e, t3) {
  d3.__c && d3.__c(t3, e), e.some(function(_3) {
    try {
      e = _3.__h, _3.__h = [], e.some(function(r) {
        r.call(_3);
      });
    } catch (r) {
      d3.__e(r, _3.__v);
    }
  });
}
function ne(e, t3, _3, r, l2, o2, s4, f3) {
  var p4, a3, n2, h2 = _3.props, c3 = t3.props, i2 = t3.type, u2 = 0;
  if (i2 === "svg" && (l2 = !0), o2 != null) {
    for (; u2 < o2.length; u2++)
      if ((p4 = o2[u2]) && "setAttribute" in p4 == !!i2 && (i2 ? p4.localName === i2 : p4.nodeType === 3)) {
        e = p4, o2[u2] = null;
        break;
      }
  }
  if (e == null) {
    if (i2 === null)
      return document.createTextNode(c3);
    e = l2 ? document.createElementNS("http://www.w3.org/2000/svg", i2) : document.createElement(i2, c3.is && c3), o2 = null, f3 = !1;
  }
  if (i2 === null)
    h2 === c3 || f3 && e.data === c3 || (e.data = c3);
  else {
    if (o2 = o2 && P4.call(e.childNodes), a3 = (h2 = _3.props || T3).dangerouslySetInnerHTML, n2 = c3.dangerouslySetInnerHTML, !f3) {
      if (o2 != null)
        for (h2 = {}, u2 = 0; u2 < e.attributes.length; u2++)
          h2[e.attributes[u2].name] = e.attributes[u2].value;
      (n2 || a3) && (n2 && (a3 && n2.__html == a3.__html || n2.__html === e.innerHTML) || (e.innerHTML = n2 && n2.__html || ""));
    }
    if (_e2(e, c3, h2, l2, f3), n2)
      t3.__k = [];
    else if (u2 = t3.props.children, G4(e, Array.isArray(u2) ? u2 : [u2], t3, _3, r, l2 && i2 !== "foreignObject", o2, s4, o2 ? o2[0] : _3.__k && C3(_3, 0), f3), o2 != null)
      for (u2 = o2.length; u2--; )
        o2[u2] != null && j3(o2[u2]);
    f3 || ("value" in c3 && (u2 = c3.value) !== void 0 && (u2 !== e.value || i2 === "progress" && !u2 || i2 === "option" && u2 !== h2.value) && N4(e, "value", u2, h2.value, !1), "checked" in c3 && (u2 = c3.checked) !== void 0 && u2 !== e.checked && N4(e, "checked", u2, h2.checked, !1));
  }
  return e;
}
function Q3(e, t3, _3) {
  try {
    typeof e == "function" ? e(t3) : e.current = t3;
  } catch (r) {
    d3.__e(r, _3);
  }
}
function X5(e, t3, _3) {
  var r, l2;
  if (d3.unmount && d3.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Q3(r, null, t3)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o2) {
        d3.__e(o2, t3);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (l2 = 0; l2 < r.length; l2++)
      r[l2] && X5(r[l2], t3, typeof e.type != "function");
  _3 || e.__e == null || j3(e.__e), e.__ = e.__e = e.__d = void 0;
}
function oe(e, t3, _3) {
  return this.constructor(e, _3);
}
function re(e, t3, _3) {
  var r, l2, o2;
  d3.__ && d3.__(e, t3), l2 = (r = typeof _3 == "function") ? null : _3 && _3.__k || t3.__k, o2 = [], W3(t3, e = (!r && _3 || t3).__k = ee(L4, null, [e]), l2 || T3, T3, t3.ownerSVGElement !== void 0, !r && _3 ? [_3] : l2 ? null : t3.firstChild ? P4.call(t3.childNodes) : null, o2, !r && _3 ? _3 : l2 ? l2.__e : t3.firstChild, r), K3(o2, e);
}
function ce2(e, t3) {
  var _3 = { __c: t3 = "__cC" + B5++, __: e, Consumer: function(r, l2) {
    return r.children(l2);
  }, Provider: function(r) {
    var l2, o2;
    return this.getChildContext || (l2 = [], (o2 = {})[t3] = this, this.getChildContext = function() {
      return o2;
    }, this.shouldComponentUpdate = function(s4) {
      this.props.value !== s4.value && l2.some(M3);
    }, this.sub = function(s4) {
      l2.push(s4);
      var f3 = s4.componentWillUnmount;
      s4.componentWillUnmount = function() {
        l2.splice(l2.indexOf(s4), 1), f3 && f3.call(s4);
      };
    }), r.children;
  } };
  return _3.Provider.__ = _3.Consumer.contextType = _3;
}
P4 = V3.slice, d3 = { __e: function(e, t3, _3, r) {
  for (var l2, o2, s4; t3 = t3.__; )
    if ((l2 = t3.__c) && !l2.__)
      try {
        if ((o2 = l2.constructor) && o2.getDerivedStateFromError != null && (l2.setState(o2.getDerivedStateFromError(e)), s4 = l2.__d), l2.componentDidCatch != null && (l2.componentDidCatch(e, r || {}), s4 = l2.__d), s4)
          return l2.__E = l2;
      } catch (f3) {
        e = f3;
      }
  throw e;
} }, $4 = 0, Y2 = function(e) {
  return e != null && e.constructor === void 0;
}, U4.prototype.setState = function(e, t3) {
  var _3;
  _3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k2({}, this.state), typeof e == "function" && (e = e(k2({}, _3), this.props)), e && k2(_3, e), e != null && this.__v && (t3 && this.__h.push(t3), M3(this));
}, U4.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), M3(this));
}, U4.prototype.render = L4, S4 = [], D5.__r = 0, B5 = 0;

// https://esm.sh/stable/preact@10.11.0/deno/hooks.js
var i, n, d4, N5, f2 = 0, q5 = [], l = [], V4 = d3.__b, g4 = d3.__r, b3 = d3.diffed, C4 = d3.__c, A3 = d3.unmount;
function a(_3, t3) {
  d3.__h && d3.__h(n, _3, f2 || t3), f2 = 0;
  var u2 = n.__H || (n.__H = { __: [], __h: [] });
  return _3 >= u2.__.length && u2.__.push({ __V: l }), u2.__[_3];
}
function P5(_3) {
  return f2 = 1, B6(D6, _3);
}
function B6(_3, t3, u2) {
  var o2 = a(i++, 2);
  if (o2.t = _3, !o2.__c && (o2.__ = [u2 ? u2(t3) : D6(void 0, t3), function(v4) {
    var s4 = o2.__N ? o2.__N[0] : o2.__[0], h2 = o2.t(s4, v4);
    s4 !== h2 && (o2.__N = [h2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = n, !n.u)) {
    n.u = !0;
    var r = n.shouldComponentUpdate;
    n.shouldComponentUpdate = function(v4, s4, h2) {
      if (!o2.__c.__H)
        return !0;
      var y2 = o2.__c.__H.__.filter(function(c3) {
        return c3.__c;
      });
      if (y2.every(function(c3) {
        return !c3.__N;
      }))
        return !r || r.call(this, v4, s4, h2);
      var E3 = !1;
      return y2.forEach(function(c3) {
        if (c3.__N) {
          var k3 = c3.__[0];
          c3.__ = c3.__N, c3.__N = void 0, k3 !== c3.__[0] && (E3 = !0);
        }
      }), !!E3 && (!r || r.call(this, v4, s4, h2));
    };
  }
  return o2.__N || o2.__;
}
function j4(_3, t3) {
  var u2 = a(i++, 3);
  !d3.__s && H4(u2.__H, t3) && (u2.__ = _3, u2.i = t3, n.__H.__h.push(u2));
}
function w3(_3) {
  return f2 = 5, x3(function() {
    return { current: _3 };
  }, []);
}
function x3(_3, t3) {
  var u2 = a(i++, 7);
  return H4(u2.__H, t3) ? (u2.__V = _3(), u2.i = t3, u2.__h = _3, u2.__V) : u2.__;
}
function L5(_3, t3) {
  return f2 = 8, x3(function() {
    return _3;
  }, t3);
}
function M4(_3) {
  var t3 = n.context[_3.__c], u2 = a(i++, 9);
  return u2.c = _3, t3 ? (u2.__ == null && (u2.__ = !0, t3.sub(n)), t3.props.value) : _3.__;
}
function R4() {
  for (var _3; _3 = q5.shift(); )
    if (_3.__P && _3.__H)
      try {
        _3.__H.__h.forEach(m3), _3.__H.__h.forEach(p2), _3.__H.__h = [];
      } catch (t3) {
        _3.__H.__h = [], d3.__e(t3, _3.__v);
      }
}
d3.__b = function(_3) {
  typeof _3.type != "function" || _3.o || _3.type === L4 ? _3.o || (_3.o = _3.__ && _3.__.o ? _3.__.o : "") : _3.o = (_3.__ && _3.__.o ? _3.__.o : "") + (_3.__ && _3.__.__k ? _3.__.__k.indexOf(_3) : 0), n = null, V4 && V4(_3);
}, d3.__r = function(_3) {
  g4 && g4(_3), i = 0;
  var t3 = (n = _3.__c).__H;
  t3 && (d4 === n ? (t3.__h = [], n.__h = [], t3.__.forEach(function(u2) {
    u2.__N && (u2.__ = u2.__N), u2.__V = l, u2.__N = u2.i = void 0;
  })) : (t3.__h.forEach(m3), t3.__h.forEach(p2), t3.__h = [])), d4 = n;
}, d3.diffed = function(_3) {
  b3 && b3(_3);
  var t3 = _3.__c;
  t3 && t3.__H && (t3.__H.__h.length && (q5.push(t3) !== 1 && N5 === d3.requestAnimationFrame || ((N5 = d3.requestAnimationFrame) || S5)(R4)), t3.__H.__.forEach(function(u2) {
    u2.i && (u2.__H = u2.i), u2.__V !== l && (u2.__ = u2.__V), u2.i = void 0, u2.__V = l;
  })), d4 = n = null;
}, d3.__c = function(_3, t3) {
  t3.some(function(u2) {
    try {
      u2.__h.forEach(m3), u2.__h = u2.__h.filter(function(o2) {
        return !o2.__ || p2(o2);
      });
    } catch (o2) {
      t3.some(function(r) {
        r.__h && (r.__h = []);
      }), t3 = [], d3.__e(o2, u2.__v);
    }
  }), C4 && C4(_3, t3);
}, d3.unmount = function(_3) {
  A3 && A3(_3);
  var t3, u2 = _3.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(o2) {
    try {
      m3(o2);
    } catch (r) {
      t3 = r;
    }
  }), u2.__H = void 0, t3 && d3.__e(t3, u2.__v));
};
var F4 = typeof requestAnimationFrame == "function";
function S5(_3) {
  var t3, u2 = function() {
    clearTimeout(o2), F4 && cancelAnimationFrame(t3), setTimeout(_3);
  }, o2 = setTimeout(u2, 100);
  F4 && (t3 = requestAnimationFrame(u2));
}
function m3(_3) {
  var t3 = n, u2 = _3.__c;
  typeof u2 == "function" && (_3.__c = void 0, u2()), n = t3;
}
function p2(_3) {
  var t3 = n;
  _3.__c = _3.__(), n = t3;
}
function H4(_3, t3) {
  return !_3 || _3.length !== t3.length || t3.some(function(u2, o2) {
    return u2 !== _3[o2];
  });
}
function D6(_3, t3) {
  return typeof t3 == "function" ? t3(_3) : t3;
}

// libs/preact-translation/useTranslate.tsx
var cache = {}, defaultOptions = {
  root: "",
  lang: "en",
  fallbackLang: "en"
};
function useTranslate(rawOptions, translations2) {
  let options2 = Object.assign(
    {},
    defaultOptions,
    rawOptions
  );
  cache = translations2 || cache;
  let [lang, setLang] = P5(options2.lang), [data, setData] = P5(cache), [isReady2, setReady] = P5(!1), loadData = (langKey) => {
    if (data.hasOwnProperty(langKey))
      return;
    setReady(!1);
    let url = getResourceUrl(options2.root || "", langKey);
    options2.getUrl && (url = options2.getUrl(options2.root || "", langKey), fetch(url).then((results) => results.json()).then((resource) => {
      cache[langKey] = resource, setData({ ...cache }), setReady(!0);
    }).catch((error) => {
      setData({ ...cache }), setReady(!0);
    }));
  };
  return j4(() => {
    loadData(options2.fallbackLang || "en"), loadData(lang);
  }, [lang]), { lang, setLang, t: (key, params) => {
    if (!data.hasOwnProperty(lang))
      return key;
    let value = getValue(data, lang, key);
    return value === key && lang !== options2.fallbackLang && (value = getValue(data, options2.fallbackLang, key)), format(value, params);
  }, isReady: isReady2 };
}

// https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
var a2 = 0;
function p3(n2, s4, t3, f3, u2) {
  var r, o2, _3 = {};
  for (o2 in s4)
    o2 == "ref" ? r = s4[o2] : _3[o2] = s4[o2];
  var e = { type: n2, props: _3, key: t3, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a2, __source: u2, __self: f3 };
  if (typeof n2 == "function" && (r = n2.defaultProps))
    for (o2 in r)
      _3[o2] === void 0 && (_3[o2] = r[o2]);
  return d3.vnode && d3.vnode(e), e;
}

// libs/preact-translation/translateProvider.tsx
var TranslateContext = ce2(null), defaultOptions2 = {
  root: "assets",
  lang: "en",
  fallbackLang: "en"
}, TranslateProvider = (props) => {
  let { t: t3, setLang, lang, isReady: isReady2 } = useTranslate(
    {
      root: props.root || defaultOptions2.root,
      lang: props.lang || defaultOptions2.lang,
      fallbackLang: props.fallbackLang || defaultOptions2.fallbackLang,
      getUrl: props.getUrl
    },
    props.translations
  );
  return /* @__PURE__ */ p3(
    TranslateContext.Provider,
    {
      value: {
        t: t3,
        setLang,
        lang,
        isReady: isReady2
      },
      children: props.children
    }
  );
};

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

// utils/click-multiple-times.ts
function onClickMultipleTimes(requiredClicks, timeLimit = 2e3) {
  return (cb) => {
    let timer2, clicked = 0;
    return (e) => {
      ++clicked == requiredClicks && (cb(e), clicked = 0), clearTimeout(timer2), timer2 = setTimeout(
        () => clicked = 0,
        // reset the number of clicks after a traditional 300ms duration
        timeLimit
      );
    };
  };
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

// components/select_link.tsx
function SelectLink(props) {
  let { items, maxWidth } = props;
  return maxWidth = maxWidth || 128, /* @__PURE__ */ p3(
    "select",
    {
      autoComplete: "off",
      class: "min-select",
      style: { maxWidth: `${maxWidth}px` },
      value: items.find((item) => item.selected)?.value,
      onChange: (e) => {
        let value = e.target.value, item = items.find((item2) => item2.value === value);
        item && item.onSelected(item);
      },
      children: items.map((item) => /* @__PURE__ */ p3("option", { value: item.value, selected: item.selected, children: item.label }))
    }
  );
}

// components/button_drop_down.tsx
var DEFAULT_VALUE = "DROP_DOWN_DEFAULT_VALUE";
function SelectDropDown(props) {
  let { showArrow, onSelected, className, menus, maxWidth } = props;
  className = className || "", showArrow = showArrow ?? !0, maxWidth = maxWidth || 60;
  let ref = w3(null);
  return /* @__PURE__ */ p3(
    "select",
    {
      ref,
      autoComplete: "off",
      class: `min-select ${showArrow ? "" : "min-select-no-arrow"} ${className || ""}`,
      value: DEFAULT_VALUE,
      style: { maxWidth: `${maxWidth}px` },
      onChange: (e) => {
        e.preventDefault();
        let value = e.target.value;
        if (ref.current && value !== DEFAULT_VALUE) {
          ref.current.value = DEFAULT_VALUE, ref.current?.dispatchEvent(new Event("change"));
          let item = menus.find((item2) => item2.value === value);
          item && onSelected(item);
        }
      },
      children: [
        {
          value: DEFAULT_VALUE,
          label: props.label
        }
      ].concat(menus).map((item) => /* @__PURE__ */ p3("option", { value: item.value, children: item.label }))
    }
  );
}

// hooks/use_i18n.ts
function useI18n() {
  return M4(TranslateContext);
}

// components/popup_field.tsx
function PopupField(props) {
  let { field, onChange, value } = props;
  value = value || field.default || "";
  let { t: t3 } = useI18n(), finalLabel = field.name;
  return field.label && (finalLabel = field.label), field.labelKey && (finalLabel = t3(field.labelKey)), field.type === "select" ? /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
    /* @__PURE__ */ p3("label", { class: "inline-block", children: [
      finalLabel,
      "\uFF1A"
    ] }),
    /* @__PURE__ */ p3(
      SelectLink,
      {
        items: field.options.map(
          (fieldOption) => ({
            label: `${fieldOption.label ? t3(fieldOption.label) : fieldOption.value}`,
            value: fieldOption.value,
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

// components/sync_latest.tsx
var SyncSuccess = ({ date }) => {
  let { t: t3 } = useI18n(), [isHide, setIsHide] = P5(!1);
  return j4(() => {
    setTimeout(() => {
      setIsHide(!0);
    }, 5e3);
  }, []), isHide ? null : /* @__PURE__ */ p3("p", { class: "text-sm", children: [
    t3("Successfully synchronized with the latest official rules:"),
    " ",
    new Date(date).toLocaleString()
  ] });
}, LocalVersionIsTooOld = ({ minVersion }) => {
  let { t: t3 } = useI18n();
  return /* @__PURE__ */ p3("p", { class: "text-sm", children: t3("localVersionIsTooOld", {
    minVersion
  }) });
}, BadUserscriptBrowser = () => {
  let { t: t3 } = useI18n();
  return /* @__PURE__ */ p3(
    "p",
    {
      class: "text-sm",
      dangerouslySetInnerHTML: {
        __html: t3("badUserscriptBrowser", {
          1: "https://immersive-translate.owenyoung.com/installation.html"
        })
      }
    }
  );
}, SyncFailed = ({
  message,
  handleSyncing,
  date
}) => {
  let { t: t3 } = useI18n();
  return /* @__PURE__ */ p3("p", { class: "text-sm", children: [
    t3("failToSyncRules"),
    " ",
    /* @__PURE__ */ p3("a", { onClick: handleSyncing, children: t3("retry") }),
    /* @__PURE__ */ p3("br", {}),
    t3("failedReason"),
    "\uFF1A",
    message,
    /* @__PURE__ */ p3("br", {}),
    t3("currentRuleVersion"),
    "\uFF1A",
    date
  ] });
};
function SyncLatest(props) {
  let { request: request3 } = props, [localBuildinConfigUpdatedAt, setLocalBuildinConfigUpdatedAt] = P5(null), { t: t3 } = useI18n(), [remoteConfig, setRemoteConfig] = P5(null), [isNeedUpdate, setIsNeedUpdate] = P5(null), [syncErrorMessage, setSyncErrorMessage] = P5(""), [isSyncSuccess, setIsSyncSuccess] = P5(!1), [isInvalidLocalVersion, setIsInvalidLocalVersion] = P5(!1), [isBadUserscriptBrowser, setIsBadUserscriptBrowser] = P5(!1), [config, setConfig] = P5(null), [_isLatestVersion, setIsLatestVersion] = P5(null), version = getVersion(), handleSyncing = async () => {
    setSyncErrorMessage("");
    let finalRemoteConfig = remoteConfig;
    if (remoteConfig === null)
      try {
        let response = await request3({
          url: buildinConfigSyncUrl
        });
        response ? (setRemoteConfig(response), finalRemoteConfig = response, setIsSyncSuccess(!0)) : (setSyncErrorMessage(t3("unknownError")), setIsNeedUpdate(null));
      } catch (e) {
        setIsNeedUpdate(null), setSyncErrorMessage(e.message);
        return;
      }
    finalRemoteConfig !== null ? (props.setStorageBuildinConfig(finalRemoteConfig), setIsNeedUpdate(!1), setLocalBuildinConfigUpdatedAt(finalRemoteConfig.buildinConfigUpdatedAt)) : (setSyncErrorMessage(t3("canNotFetchRemoteRule")), setIsNeedUpdate(null));
  };
  return j4(() => {
    getConfig().then((localConfig2) => {
      let localConfigUpdatedAtIsoString = localConfig2.buildinConfigUpdatedAt;
      setConfig(localConfig2);
      let localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString);
      if (setLocalBuildinConfigUpdatedAt(localConfigUpdatedAtIsoString), version === "0.0.0") {
        setIsBadUserscriptBrowser(!0);
        return;
      }
      request3({
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
      }).catch((e) => {
        setIsNeedUpdate(null), setSyncErrorMessage(e.message);
      });
    });
  }, []), j4(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, [localBuildinConfigUpdatedAt]), config ? /* @__PURE__ */ p3("div", { class: "text-sm mt-2", style: { maxWidth: 218 }, children: isBadUserscriptBrowser ? /* @__PURE__ */ p3(BadUserscriptBrowser, {}) : syncErrorMessage ? /* @__PURE__ */ p3(
    SyncFailed,
    {
      handleSyncing,
      message: syncErrorMessage,
      date: localBuildinConfigUpdatedAt || ""
    }
  ) : isInvalidLocalVersion ? /* @__PURE__ */ p3(LocalVersionIsTooOld, { minVersion: remoteConfig.minVersion }) : isNeedUpdate === null || isNeedUpdate === !0 ? null : isSyncSuccess ? /* @__PURE__ */ p3(SyncSuccess, { date: localBuildinConfigUpdatedAt }) : null }) : null;
}

// components/popup.tsx
function Popup(props) {
  let version = getVersion(), {
    onTranslateTheMainPage,
    onUserConfigChange,
    request: request3,
    onSetBuildinConfig,
    pageStatus: pageStatus2,
    openEbookBuilderPage: openEbookBuilderPage2,
    openEbookViewerPage: openEbookViewerPage2,
    config,
    openAboutPage: openAboutPage2,
    onTranslateTheWholePage,
    onToggleEnabled,
    openOptionsPage: openOptionsPage2,
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
  } = props, setSettings = onUserConfigChange, [message, setMessage] = P5(""), [errorMessage, _setErrorMessage] = P5(""), { t: t3 } = useI18n(), isAlwaysTranslateDomain = null, isAlwaysTranslateWildDomain = null, isNeverTranslaateDomain = null, isNeverTranslateWildDomain = null, isAlwaysTranslateLang = null, isAlwaysTranslateUrl = null, isNeverTranslateUrl = null, curentTranslationServiceItem = null, currentUrlObj = null, currentWildHostname = null, currentUrlWithoutHash = null, currentTranslationServiceConfig = null;
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
  let handleOpenOptions = (e) => {
    e.preventDefault(), openOptionsPage2();
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
    }), name === "matches" && pageStatus2 === "Original" ? setTimeout(() => {
      onTranslatePage(), onClose();
    }, 100) : name === "excludeMatches" && pageStatus2 === "Translated" && setTimeout(() => {
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
    }), name === "matches" && pageStatus2 === "Original" && setTimeout(() => {
      onTranslatePage(), onClose();
    }, 100);
  }, isPdfUrl = currentUrlObj?.pathname.toLowerCase().endsWith(".pdf"), buttonLabel = t3("translate");
  pageStatus2 === "Translated" ? buttonLabel = t3("show-original") : pageStatus2 === "Original" ? isPdfUrl ? isFirefox() && currentUrlObj.protocol === "file:" ? buttonLabel = t3("translate-firefox-local-pdf") : buttonLabel = t3("translate-pdf") : buttonLabel = t3("translate") : buttonLabel = t3(pageStatus2);
  let translateToThePageEndImmediatelyLabel = t3(
    "translateToThePageEndImmediately"
  );
  (pageStatus2 === "Original" || pageStatus2 === "Translated") && (config.shortcuts.toggleTranslatePage && (isTouchDevice() && ctx.rule.fingerCountToToggleTranslagePageWhenTouching >= 2 ? buttonLabel += ` (${t3(
    `fingers.${ctx.rule.fingerCountToToggleTranslagePageWhenTouching}`
  )})` : buttonLabel += ` (${config.shortcuts.toggleTranslatePage})`), config.shortcuts.toggleTranslateToThePageEndImmediately && (translateToThePageEndImmediatelyLabel += ` (${config.shortcuts.toggleTranslateToThePageEndImmediately})`));
  let translationServiceItems = [];
  ctx && (translationServiceItems = getTranslationServices(ctx));
  let handleClosePopup = (e) => {
    e.preventDefault(), onClose();
  };
  return /* @__PURE__ */ p3("div", { class: "p-3", children: [
    /* @__PURE__ */ p3("div", { class: "text-sm", children: [
      /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
        /* @__PURE__ */ p3("label", { class: "inline-block", children: [
          t3("popupSourceLanguage"),
          "\uFF1A"
        ] }),
        /* @__PURE__ */ p3(
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
      config && config.targetLanguage && /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
        /* @__PURE__ */ p3("label", { class: "inline-block", children: [
          t3("popupTarget"),
          "\uFF1A"
        ] }),
        /* @__PURE__ */ p3(
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
      curentTranslationServiceItem && translationServiceItems.length > 0 && /* @__PURE__ */ p3(L4, { children: [
        /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
          /* @__PURE__ */ p3("label", { class: "inline-block", children: [
            t3("popupService"),
            "\uFF1A"
          ] }),
          /* @__PURE__ */ p3(
            SelectLink,
            {
              items: translationServiceItems.map((translationServiceItem) => ({
                label: `${t3(
                  "translationServices." + translationServiceItem.id
                )}${translationServiceItem.ok ? "" : " " + t3("needAction")}`,
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
                    openOptionsPage2();
                  }, 100));
                }
              }))
            }
          )
        ] }),
        currentTranslationServiceConfig && curentTranslationServiceItem.props.length > 0 && curentTranslationServiceItem.props.map((prop, index) => /* @__PURE__ */ p3("div", { class: "pl-4 text-sm", children: /* @__PURE__ */ p3(
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
      currentUrlObj && /* @__PURE__ */ p3("div", { class: "flex justify-between mb-2", children: [
        /* @__PURE__ */ p3("label", { class: "inline-block", children: t3("forThisSite") }),
        /* @__PURE__ */ p3(
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
                    tempTranslationUrlMatches: [...filteredDomains]
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
    /* @__PURE__ */ p3("div", { class: "", children: /* @__PURE__ */ p3(
      "button",
      {
        class: "py-2 mt-1 mb-2 main-button ",
        onClick: () => {
          isPdfUrl ? onTranslatePdf && onTranslatePdf() : onToggleTranslate();
        },
        "aria-busy": pageStatus2 === "Translating",
        disabled: pageStatus2 === "Translating",
        children: buttonLabel
      }
    ) }),
    /* @__PURE__ */ p3("div", { class: "flex justify-between", children: [
      currentLang && currentLang !== "auto" ? /* @__PURE__ */ p3("label", { for: "alwaysTranslateThisLanugage", class: "text-sm", children: [
        /* @__PURE__ */ p3(
          "input",
          {
            type: "checkbox",
            id: "alwaysTranslateThisLanugage",
            name: "alwaysTranslateThisLanugage",
            checked: !!isAlwaysTranslateLang,
            onChange: (e) => {
              let checked = e.target.checked;
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
      ] }) : /* @__PURE__ */ p3("span", {}),
      /* @__PURE__ */ p3(
        SelectDropDown,
        {
          label: t3("more"),
          showArrow: !0,
          onSelected: (item) => {
            item.value === "translateTheWholePage" ? onTranslateTheWholePage() : item.value === "translateToThePageEndImmediately" ? ontranslateToThePageEndImmediately() : item.value === "translateTheMainPage" ? onTranslateTheMainPage() : item.value === "showTranslationOnly" || (item.value === "translateLocalPdfFile" ? onTranslateLocalPdfFile && onTranslateLocalPdfFile() : item.value === "donate" ? (globalThis.open(config.donateUrl), onClose()) : item.value === "feedback" ? (globalThis.open(config.feedbackUrl), onClose()) : item.value === "options" ? (openOptionsPage2(), onClose()) : item.value === "changeToTranslateTheWholePage" ? handleChangeToTranslateTheWholePage() : item.value === "changeToTranslateTheMainPage" ? handleChangeToTranslateTheMainPage() : item.value === "about" ? openAboutPage2() : item.value === "toggleEnabled" ? onToggleEnabled() : item.value === "openEbookViewer" ? openEbookViewerPage2() : item.value === "openEbookBuilder" && openEbookBuilderPage2());
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
            {
              label: "\u{1F4D8} " + t3("browser.openEbookViewer"),
              value: "openEbookViewer"
            },
            {
              label: "\u{1F4DA} " + t3("browser.openEbookBuilder"),
              value: "openEbookBuilder"
            },
            !isMonkey() && {
              label: "\u{1F4C1} " + t3("browser.translateLocalPdfFile"),
              value: "translateLocalPdfFile"
            },
            {
              label: (config.enabled ? "\u{1F6AB} " : "\u{1F44B} ") + (config.enabled ? t3("clickToDisableExtension") : t3("clickToEnableExtension")),
              value: "toggleEnabled"
            },
            {
              label: "\u2764\uFE0F " + t3("aboutLabel"),
              value: "about"
            }
          ].filter(Boolean)
        }
      )
    ] }),
    /* @__PURE__ */ p3("div", { class: "text-sm", children: message }),
    /* @__PURE__ */ p3("div", { class: "text-sm", children: errorMessage }),
    /* @__PURE__ */ p3("footer", { children: [
      /* @__PURE__ */ p3(
        SyncLatest,
        {
          request: request3,
          setStorageBuildinConfig: onSetBuildinConfig
        }
      ),
      /* @__PURE__ */ p3("div", { class: "mt-3 text-sm flex justify-between", children: [
        /* @__PURE__ */ p3("a", { href: "#", class: "secondary", onClick: handleOpenOptions, children: t3("options") }),
        isMonkey() && /* @__PURE__ */ p3("a", { href: "#", class: "secondary", onClick: handleClosePopup, children: t3("close") }),
        /* @__PURE__ */ p3(
          "span",
          {
            class: "immersive-translate-no-select muted",
            onClick: onClickMultipleTimes(7)(handleToggleAlpha),
            children: [
              "V",
              version,
              config.enabled ? null : /* @__PURE__ */ p3("a", { href: "#", onClick: onToggleEnabled, children: [
                " ",
                "(",
                t3("hasBeenDisabled"),
                ")"
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
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
  let [INITIAL_VALUE2] = P5(() => typeof initialValue == "function" ? initialValue() : initialValue), [STORAGE_AREA] = P5(storageArea), [state, setState] = P5(INITIAL_VALUE2), [isPersistent, setIsPersistent] = P5(!1), [error, setError] = P5("");
  j4(() => {
    storage.get(key, INITIAL_VALUE2, STORAGE_AREA).then((res) => {
      res[key] && setState(res[key]), setIsPersistent(!0), setError("");
    }).catch((error2) => {
      setIsPersistent(!1), setError(error2);
    });
  }, [key, INITIAL_VALUE2, STORAGE_AREA]);
  let updateValue = L5(
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
    ), setValueAll = L5((newValue) => {
      for (let consumer of consumers)
        consumer(newValue);
    }, []);
    return j4(() => (consumers.push(setValue), () => {
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
  let [value, setValue, isPersistent, error] = rawUseUserConfig(), formatSetValue = L5((newValue) => {
    let toStore = typeof newValue == "function" ? newValue(value) : newValue;
    toStore && (toStore.updatedAt = (/* @__PURE__ */ new Date()).toISOString()), setValue(toStore);
  }, [value]);
  return [value, formatSetValue, isPersistent, error, setValue];
}

// userscript/popup_app.tsx
function PopupApp(props) {
  let { onClose } = props, [pageStatus2, setPageStatus] = P5("Original"), [settings, setSettings, _isPersistent, _error] = useUserConfig(), [config, setConfig] = P5(null), [currentUrl, setCurrentUrl] = P5(
    globalThis.location.href
  ), [currentLang, setCurrentLang] = P5("auto"), [ctx, setContext] = P5(null), onToggleTranslate = (event) => {
    setPageStatus(event.detail);
  }, onSetPageLanguage = (lang) => {
    setCurrentLang(lang);
    let newSourceLanguageUrlPattern = handleSourceLanguageUrlPattern(
      currentUrl,
      lang,
      config.sourceLanguageUrlPattern
    );
    setSettings((state) => ({
      ...state,
      sourceLanguageUrlPattern: newSourceLanguageUrlPattern
    })), setCurrentPageLanguageByClient(lang);
  }, onUrlChange = () => {
    setCurrentUrl(globalThis.location.href);
  };
  j4(() => (document.addEventListener(
    pageTranslatedStatusEventName,
    onToggleTranslate,
    !1
  ), getConfig2().then((result) => {
    setConfig(result);
    let currentLanguage = getCurrentPageLanguage();
    setCurrentLang(currentLanguage);
    let currentPageStatus = getPageStatus();
    setPageStatus(currentPageStatus), runCron(result.interval);
  }), document.addEventListener("urlChange", onUrlChange), () => {
    document.removeEventListener("pageTranslatedStatus", onToggleTranslate), document.removeEventListener("urlChange", onUrlChange);
  }), []), j4(() => {
    getConfig2().then((config2) => {
      setConfig(config2);
    });
  }, [settings]), j4(() => {
    currentUrl && config && getContext({
      url: currentUrl,
      config
    }).then((ctx2) => {
      setContext(ctx2);
    });
  }, [currentUrl, config]);
  let handleSendMessageToContent = (method, isClose) => () => {
    sendMessageToContent({
      method
    }), isClose && onClose();
  }, handleClose = () => {
    onClose();
  }, handleToggleEnabled = () => {
    setSettings((state) => ({
      ...state,
      enabled: !state.enabled
    })), setTimeout(() => {
      handleClose();
    }, 50);
  }, handleTranslatePdf = () => {
    globalThis.alert("Not implemented yet"), onClose();
  }, handleTranslateLocalPdfFile = () => {
    globalThis.alert("Not implemented yet"), onClose();
  }, handleOpenOptionsPage = () => {
    openOptionsPage(!0), setTimeout(() => {
      onClose();
    }, 50);
  }, handleOpenAboutPage = () => {
    openAboutPage(), setTimeout(() => {
      onClose();
    }, 50);
  }, handleOpenEbookViewerPage = () => {
    openEbookViewerPage(), setTimeout(() => {
      onClose();
    }, 50);
  }, handleOpenEbookBuilderPage = () => {
    openEbookBuilderPage(), setTimeout(() => {
      onClose();
    }, 50);
  };
  return !config || !ctx ? null : /* @__PURE__ */ p3(
    Popup,
    {
      openEbookViewerPage: handleOpenEbookViewerPage,
      openEbookBuilderPage: handleOpenEbookBuilderPage,
      request: request2,
      onClose: handleClose,
      onToggleEnabled: handleToggleEnabled,
      onTranslateTheWholePage: handleSendMessageToContent(
        "translateTheWholePage",
        !0
      ),
      openOptionsPage: handleOpenOptionsPage,
      onToggleTranslate: handleSendMessageToContent(
        "toggleTranslatePage",
        !0
      ),
      onTranslateTheMainPage: handleSendMessageToContent(
        "translateTheMainPage",
        !0
      ),
      ontranslateToThePageEndImmediately: handleSendMessageToContent(
        "translateToThePageEndImmediately",
        !0
      ),
      onTranslatePage: handleSendMessageToContent("translatePage", !0),
      onRestorePage: handleSendMessageToContent("restorePage", !1),
      onTranslatePdf: handleTranslatePdf,
      openAboutPage: handleOpenAboutPage,
      onTranslateLocalPdfFile: handleTranslateLocalPdfFile,
      onSetPageLanguage,
      onUserConfigChange: setSettings,
      config,
      pageStatus: pageStatus2,
      ctx,
      currentUrl,
      currentLang,
      onSetLocalConfig: setLocalConfig2,
      onSetBuildinConfig: setBuildinConfig2
    }
  );
}

// userscript/popup_entry.tsx
function addCSSLegacy(root2, csses) {
  for (let css of csses)
    root2.appendChild(document.createElement("style")).innerHTML = css;
}
var currentPagePopupConfig = {
  position: "right",
  right: 0,
  top: 335
}, positionChanged = !1, rootRef = null, btnRef = null, mountPointRef = null, shadowRef = null, timer = null, localConfig = null, delta = 6, startX, startY, lastBtnStyle = null, lastRootStyle = null;
async function initPopup() {
  let env4 = getEnv();
  localConfig = await getLocalConfig2(), currentPagePopupConfig = localConfig.pagePopupConfig || currentPagePopupConfig;
  let popup = document.createElement("div");
  popup.id = "immersive-translate-popup", popup.setAttribute("style", "all: initial"), document.documentElement.appendChild(popup);
  let shadow = popup.attachShadow({ mode: "open" });
  shadowRef = shadow;
  let csses = [
    env4.IMMERSIVE_TRANSLATE_PICO_CSS,
    env4.IMMERSIVE_TRANSLATE_COMMON_CSS,
    env4.IMMERSIVE_TRANSLATE_POPUP_CSS
  ];
  addCSSLegacy(shadow, csses);
  let mountRoot = document.createElement("div");
  mountRoot.innerHTML = env4.IMMERSIVE_TRANSLATE_POPUP_HTML, shadow.appendChild(mountRoot), rootRef = shadow.querySelector(
    "#immersive-translate-popup-container"
  );
  let btn = shadow.querySelector(
    "#immersive-translate-popup-btn"
  );
  btnRef = btn, mountPointRef = shadow.querySelector("#mount"), rootRef.setAttribute(
    "style",
    objToStyle(currentPagePopupConfig)
  ), setBtnTransform(), btn.addEventListener("mousedown", onMouseDown), btn.addEventListener("touchstart", onTouchStart), globalThis.addEventListener("resize", (_e3) => {
    rootRef.setAttribute(
      "style",
      objToStyle(currentPagePopupConfig)
    );
  });
}
function showButton() {
  re(null, mountPointRef), mountPointRef.style.display = "none", btnRef.style.display = "block", timer = setTimeout(() => {
    setBtnTransform(!0);
  }, 2e3);
}
function renderPopup(shadow) {
  let mountPoint = shadow.querySelector("#mount"), handleOnClose = () => {
    showButton();
  }, handleClickOverLay = (e) => {
    e && e.target && e.target.id === "immersive-translate-popup-overlay" && handleOnClose();
  };
  (async () => {
    let config = await getConfig2();
    re(
      /* @__PURE__ */ p3(
        TranslateProvider,
        {
          lang: config.interfaceLanguage,
          fallbackLang: "zh-CN",
          translations: locales_default,
          children: /* @__PURE__ */ p3(
            "div",
            {
              onClick: handleClickOverLay,
              id: "immersive-translate-popup-overlay",
              class: "immersive-translate-popup-overlay",
              children: /* @__PURE__ */ p3(
                "div",
                {
                  class: "immersive-translate-popup-wrapper",
                  style: calculateMountPointPosition(),
                  children: /* @__PURE__ */ p3(PopupApp, { onClose: handleOnClose })
                }
              )
            }
          )
        }
      ),
      mountPoint
    );
  })().then(() => {
    btnRef.style.display = "none", mountPointRef.style.display = "block";
  });
}
function calculateMountPointPosition() {
  let screenSize = getScreenSize(), windowHeight = screenSize.height, { position, top, left } = currentPagePopupConfig, style = {
    position: "fixed"
  }, popupHeight = 300, popupWidth = 300, offset = 100;
  return position === "right" || position === "left" ? (style.top = top - offset, style.top + popupHeight >= windowHeight ? (style.bottom = 30, delete style.top) : style.top <= 10 && (style.top = 10), position === "right" ? style.right = 0 : position === "left" && (style.left = 0)) : (position === "top" || position === "bottom") && (style.left = left - offset, style.left + popupWidth >= screenSize.width ? (style.right = 0, delete style.left) : style.left <= 10 && (style.left = 0), position === "top" ? style.top = 0 : position === "bottom" && (style.bottom = 0)), style;
}
function getScreenSize() {
  return {
    width: Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    ),
    height: Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
  };
}
function onMouseDown(e) {
  lastRootStyle = rootRef.getAttribute("style"), startX = e.pageX, startY = e.pageY, timer && clearTimeout(timer), positionChanged = !1, btnRef.style.opacity = "1", btnRef.style.transform = "none", lastBtnStyle = btnRef.getAttribute("style"), globalThis.addEventListener("mousemove", onMouseMove), globalThis.addEventListener("mouseup", onMouseUp), globalThis.addEventListener("touchmove", onTouchMove), globalThis.addEventListener("touchend", onTouchEnd), globalThis.addEventListener("touchcancel", onTouchEnd);
}
function onTouchStart(e) {
  e.preventDefault && e.preventDefault(), onMouseDown(e.changedTouches[0]);
}
function onTouchMove(e) {
  onMouseMove(e.changedTouches[0]);
}
function onTouchEnd(e) {
  e.preventDefault && e.preventDefault(), onMouseUp(e.changedTouches[0]);
}
function onMouseMove(e) {
  e.preventDefault && e.preventDefault(), positionChanged = !0, rootRef.setAttribute(
    "style",
    `left:${e.clientX}px;top:${e.clientY}px;transform:scale(1.6);`
  );
}
function onMouseUp(e) {
  e.preventDefault && e.preventDefault(), removeListeners(), timer && clearTimeout(timer), startX = startX || 0, startY = startY || 0;
  let diffX = Math.abs(e.pageX - startX), diffY = Math.abs(e.pageY - startY);
  diffX < delta && diffY < delta ? (rootRef.setAttribute("style", lastRootStyle), btnRef.setAttribute("style", lastBtnStyle), renderPopup(shadowRef)) : positionChanged ? snapToSide(e) : renderPopup(shadowRef), positionChanged = !1;
}
function snapToSide(e) {
  let screenSize = getScreenSize(), left = e.clientX, top = e.clientY, toTop = top, toBottom = screenSize.height - top, toLeft = left, toRight = screenSize.width - left;
  toTop < toBottom && toTop < toLeft && toTop < toRight ? currentPagePopupConfig = {
    position: "top",
    left,
    top: 0
  } : toBottom < toTop && toBottom < toLeft && toBottom < toRight ? currentPagePopupConfig = {
    position: "bottom",
    bottom: 0,
    left: e.clientX
  } : toLeft < toTop && toLeft < toBottom && toLeft < toRight ? currentPagePopupConfig = {
    position: "left",
    left: 0,
    top: e.clientY
  } : toRight < toTop && toRight < toBottom && toRight < toLeft && (currentPagePopupConfig = {
    position: "right",
    right: 0,
    top: e.clientY
  });
  let finalStyle = objToStyle(currentPagePopupConfig);
  rootRef.setAttribute(
    "style",
    finalStyle
  ), setLocalConfig2({
    ...localConfig,
    pagePopupConfig: currentPagePopupConfig
  }), timer = setTimeout(() => {
    setBtnTransform(!0);
  }, 2e3);
}
function setBtnTransform(transition = !1) {
  btnRef.style.opacity = "0.4";
  let transform = "";
  currentPagePopupConfig.position === "left" ? transform = "translateX(-40%)" : currentPagePopupConfig.position === "right" ? transform = "translateX(40%)" : currentPagePopupConfig.position === "top" ? transform = "translateY(-40%)" : currentPagePopupConfig.position === "bottom" && (transform = "translateY(40%)"), btnRef.style.transform = transform, transition && (btnRef.style.transition = "transform 0.2s ease-in-out, opacity 0.2s ease-in-out");
}
function removeListeners() {
  globalThis.removeEventListener("mousemove", onMouseMove), globalThis.removeEventListener("mouseup", onMouseUp), globalThis.removeEventListener("touchmove", onTouchMove), globalThis.removeEventListener("touchend", onTouchEnd), globalThis.removeEventListener("touchcancel", onTouchEnd);
}
function objToStyle(rawObj) {
  let obj = getValidStyleObj(rawObj);
  return Object.keys(obj).map((key) => typeof obj[key] == "number" ? `${key}:${obj[key]}px;` : "").join("");
}
function getValidStyleObj(positionConfig) {
  let { position, ...rest } = positionConfig, screenSize = getScreenSize(), styleObj = {};
  return position === "left" ? (styleObj.left = 0, rest.top > screenSize.height ? styleObj.top = screenSize.height - 100 : styleObj.top = rest.top) : position === "right" ? (styleObj.right = 0, rest.top > screenSize.height ? styleObj.top = screenSize.height - 100 : styleObj.top = rest.top) : position === "top" ? (styleObj.top = 0, rest.left > screenSize.width ? styleObj.left = screenSize.width - 100 : styleObj.left = rest.left) : position === "bottom" && (styleObj.bottom = 0, rest.left > screenSize.width ? styleObj.left = screenSize.width - 100 : styleObj.left = rest.left), styleObj;
}

// page_popup.tsx
var isInit = !1;
async function main() {
  let config = await getConfig2(), options2 = {
    url: globalThis.location.href,
    config
  }, ctx = await getContext(options2);
  config.debug && log_default.setLevel("debug"), globalThis.document.addEventListener(
    userscriptCommandEventName,
    // @ts-ignore: hard to type
    (_e3) => {
      isInit || (isInit = !0, initPopup().catch((e) => {
        log_default.error("init popup error", e);
      }));
    }
  ), ctx.isTranslateExcludeUrl ? log_default.debug("detect exclude url, do not inject anything.") : (isMobile().any || isMonkey()) && ctx.rule.isShowUserscriptPagePopup && (isInit || (isInit = !0, initPopup().catch((e) => {
    log_default.error("init popup error", e);
  })));
}

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "__MSG_brandName__",
  description: "__MSG_brandDescription__",
  version: "0.3.1",
  default_locale: "en",
  background: {
    service_worker: "background.js"
  },
  web_accessible_resources: [
    "styles/inject.css",
    "pdf/index.html",
    "ebook/index.html",
    "ebook/make/index.html"
  ],
  content_scripts: [
    {
      matches: [
        "<all_urls>",
        "file:///*",
        "*://*/*"
      ],
      js: [
        "content_script.js"
      ],
      run_at: "document_end",
      all_frames: !0
    }
  ],
  commands: {
    toggleTranslatePage: {
      suggested_key: {
        default: "Alt+A"
      },
      description: "__MSG_toggleTranslatePage__"
    },
    toggleTranslateTheWholePage: {
      suggested_key: {
        default: "Alt+W"
      },
      description: "__MSG_toggleTranslateTheWholePage__"
    },
    toggleTranslateToThePageEndImmediately: {
      description: "__MSG_toggleTranslateToThePageEndImmediately__"
    },
    toggleTranslateTheMainPage: {
      description: "__MSG_toggleTranslateTheMainPage__"
    },
    toggleTranslationMask: {
      description: "__MSG_toggleTranslationMask__"
    }
  },
  options_page: "options.html",
  options_ui: {
    page: "options.html",
    open_in_tab: !0,
    browser_style: !1
  },
  permissions: [
    "storage",
    "activeTab",
    "contextMenus",
    "webRequest",
    "webRequestBlocking",
    "declarativeNetRequestWithHostAccess",
    "declarativeNetRequestFeedback",
    "declarativeNetRequest"
  ],
  host_permissions: [
    "<all_urls>"
  ],
  declarative_net_request: {
    rule_resources: [{
      id: "ruleset_1",
      enabled: !0,
      path: "rules/request_modifier_rule.json"
    }]
  },
  action: {
    default_popup: "popup.html",
    default_icon: {
      "32": "icons/32.png",
      "48": "icons/48.png",
      "64": "icons/64.png",
      "128": "icons/128.png",
      "256": "icons/256.png"
    }
  },
  browser_action: {
    default_icon: "icons/32.png",
    default_popup: "popup.html",
    theme_icons: [{
      dark: "icons/32.png",
      light: "icons/dark-32.png",
      size: 32
    }, {
      dark: "icons/48.png",
      light: "icons/dark-48.png",
      size: 48
    }, {
      dark: "icons/64.png",
      light: "icons/dark-64.png",
      size: 64
    }, {
      dark: "icons/128.png",
      light: "icons/dark-128.png",
      size: 128
    }, {
      dark: "icons/256.png",
      light: "icons/dark-256.png",
      size: 256
    }]
  },
  icons: {
    "32": "icons/32.png",
    "48": "icons/48.png",
    "64": "icons/64.png",
    "128": "icons/128.png",
    "256": "icons/256.png"
  },
  browser_specific_settings: {
    gecko: {
      id: "{5efceaa7-f3a2-4e59-a54b-85319448e305}",
      strict_min_version: "63.0"
    }
  },
  key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"
};

// dom/main.ts
var hardCodeBlackDomains = ["oapi.dingtalk.com", "login.dingtalk.com"];
async function main2() {
  let config = await getConfig2(), ctx = await getContext({
    config,
    url: getRealUrl()
  }), realUrlObj = new URL(ctx.url);
  if (!hardCodeBlackDomains.includes(realUrlObj.hostname))
    if (ctx.isTranslateExcludeUrl && isWebOptionsPage2())
      log_default.debug("detect web options page"), setupWebOptionsPage();
    else {
      if (!ctx.config.enabled)
        return;
      if (await setupDomListeners(ctx), isMonkey() ? (setupCommandListeners(config), registerCommands(config)) : setupMessageListeners(), config.debug ? log_default.setLevel("debug") : log_default.setLevel("info"), globalThis.top != globalThis.self || await main().catch((e) => {
        log_default.error(`init popup page error: ${e}`);
      }), !ctx.isTranslateExcludeUrl) {
        if (ctx.rule.isPdf) {
          let isFirstTextRendered = !1;
          globalThis.PDFViewerApplication && globalThis.PDFViewerApplication.initializedPromise.then(() => {
            let pdfViewer = globalThis.PDFViewerApplication;
            pdfViewer.eventBus.on("pagesdestroy", () => {
              restorePage();
            }), pdfViewer.eventBus.on("textlayerrendered", async () => {
              isFirstTextRendered || (isFirstTextRendered = !0, await initPage());
            }), pdfViewer.eventBus.on("fileinputchange", () => {
              isFirstTextRendered = !1;
            });
          });
        } else
          await initPage();
        checkCronAndRunOnce();
      }
      injectCssToFrame(document, ctx), document.querySelectorAll("iframe").forEach((frame) => {
        isInlineIframe(frame) ? injectCssToFrame(frame.contentDocument, ctx) : ctx.rule.isEbook && injectCssToFrame(frame.contentDocument, ctx);
      });
    }
}
var debounceOpenOptionsPage = se(async () => {
  await openOptionsPage();
}, 50), debounceOpenAboutPage = se(async () => {
  await openAboutPage();
}, 50), deboundOpenEbookBuilder = se(async () => {
  await openEbookBuilderPage();
}, 50), deboundOpenEbookViewer = se(async () => {
  await openEbookViewerPage();
}, 50), debounceToggleTranslatePage = se((id) => {
  sendMessageToContent2({
    method: id
  });
}, 50);
function registerCommands(config) {
  if (isMonkey() && typeof GM < "u" && GM && GM.registerMenuCommand) {
    let commandsMap = manifest_default.commands, menus = [
      ...Object.keys(commandsMap).filter((item) => item === "toggleTranslatePage").map((command) => {
        let titlePlaceholder = commandsMap[command].description, title = titlePlaceholder;
        return titlePlaceholder.startsWith("__MSG_") && titlePlaceholder.endsWith("__") && (title = t2(
          `browser.${titlePlaceholder.slice(6, -2)}`,
          config.interfaceLanguage
        )), {
          id: command,
          title
        };
      }),
      {
        id: contextOpenLocalEbookViewer,
        title: t2("browser.openEbookViewer", config.interfaceLanguage),
        key: "e"
      },
      {
        id: contextOpenLocalEbookBuilder,
        title: t2("browser.openEbookBuilder", config.interfaceLanguage),
        key: "m"
      },
      {
        id: contextOpenOptionsMenuId,
        title: t2("browser.openOptionsPage", config.interfaceLanguage),
        key: "o"
      },
      {
        id: contextOpenAboutMenuId,
        title: t2("browser.openAboutPage", config.interfaceLanguage),
        key: "a"
      }
    ];
    for (let menu of menus)
      GM.registerMenuCommand(
        menu.title,
        () => {
          menu.id === contextOpenOptionsMenuId ? debounceOpenOptionsPage() : menu.id === contextOpenAboutMenuId ? debounceOpenAboutPage() : menu.id === contextOpenLocalEbookBuilder ? deboundOpenEbookBuilder() : menu.id === contextOpenLocalEbookViewer ? deboundOpenEbookViewer() : debounceToggleTranslatePage(menu.id);
        },
        menu.key
      );
  }
}
function sendMessageToContent2(request3) {
  asyncMessageHandler(request3, {
    // @ts-ignore: it's ok
    tab: {
      id: 1,
      url: "https://www.fake.com",
      active: !0
    }
  }).catch((e) => {
    log_default.error("send content message request failed", request3, e);
  });
  let event = new CustomEvent(userscriptCommandEventName, {
    detail: request3
  });
  globalThis.document.dispatchEvent(event);
}

// dom/ready_state.js
var options = {
  capture: !0,
  once: !0,
  passive: !0
}, isReady = () => document.readyState === "interactive" || document.readyState === "complete", isCurrentState = (state) => document.readyState === state, resolveState = (state, fn) => isCurrentState(state) || isReady() ? (fn(state), !0) : !1, loading = () => new Promise((resolve) => {
  resolveState("loading", resolve) || document.addEventListener(
    "readystatechange",
    () => {
      document.readyState === "loading" && resolve("loading");
    },
    options
  );
}), interactive = () => new Promise((resolve) => {
  resolveState("interactive", resolve) || document.addEventListener(
    "readystatechange",
    () => {
      document.readyState === "interactive" && resolve("interactive");
    },
    options
  );
}), complete = () => new Promise((resolve) => {
  resolveState("complete", resolve) || document.addEventListener(
    "readystatechange",
    () => {
      document.readyState === "complete" && resolve("complete");
    },
    options
  );
}), domready = () => new Promise((resolve) => {
  resolveState("domready", resolve) || document.addEventListener(
    "DOMContentLoaded",
    () => {
      resolve("domready");
    },
    options
  );
}), load = () => new Promise((resolve) => {
  resolveState("load", resolve) || window.addEventListener(
    "load",
    () => {
      resolve("load");
    },
    options
  );
}), readyState = {};
Object.defineProperties(readyState, {
  state: {
    get: function() {
      return document.readyState;
    }
  },
  loading: {
    get: function() {
      return loading();
    }
  },
  interactive: {
    get: function() {
      return interactive();
    }
  },
  complete: {
    get: function() {
      return complete();
    }
  },
  window: {
    get: function() {
      return load();
    }
  },
  load: {
    get: function() {
      return load();
    }
  },
  domready: {
    get: function() {
      return domready();
    }
  },
  dom: {
    get: function() {
      return domready();
    }
  },
  ready: {
    get: function() {
      return isReady();
    }
  }
});
var ready_state_default = readyState;

// utils/wait_for.ts
var ERRORS = {
  NOT_FUNCTION: "Your executor is not a function. functions and promises are valid.",
  FAILED_TO_WAIT: "Failed to wait"
};
function promisify(fn) {
  return async () => await fn();
}
function validateExecution(executeFn) {
  if (typeof executeFn != "function")
    throw new Error(ERRORS.NOT_FUNCTION);
}
var PollUntil = class {
  constructor({
    interval = 100,
    timeout = 1e3,
    stopOnFailure = !1,
    verbose = !1,
    backoffFactor = 1,
    backoffMaxInterval,
    message = ""
  } = {}) {
    this._interval = interval, this._timeout = timeout, this._stopOnFailure = stopOnFailure, this._isWaiting = !1, this._isResolved = !1, this._verbose = verbose, this._userMessage = message, this.originalStacktraceError = new Error(), this._Console = console, this._backoffFactor = backoffFactor, this._backoffMaxInterval = backoffMaxInterval || timeout, this.start = +Date.now();
  }
  tryEvery(interval) {
    return this._interval = interval, this;
  }
  stopAfter(timeout) {
    return this._timeout = timeout, this;
  }
  execute(executeFn) {
    return this._applyPromiseHandlers(), validateExecution(executeFn), this._executeFn = promisify(executeFn), this.start = Date.now(), this._isWaiting = !0, this._log("starting to execute"), this._runFunction(), this.promise;
  }
  getPromise() {
    return this.promise;
  }
  isResolved() {
    return this._isResolved;
  }
  isWaiting() {
    return this._isWaiting;
  }
  stopOnFailure(stop) {
    return this._stopOnFailure = stop, this;
  }
  _applyPromiseHandlers() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve, this.reject = reject;
    });
  }
  _timeFromStart() {
    return Date.now() - this.start;
  }
  _shouldStopTrying() {
    return this._timeFromStart() > this._timeout;
  }
  _executeAgain() {
    this._log("executing again");
    let currentInterval = this._interval, nextInterval = currentInterval * this._backoffFactor;
    this._interval = nextInterval > this._backoffMaxInterval ? this._backoffMaxInterval : nextInterval, setTimeout(this._runFunction.bind(this), currentInterval);
  }
  _failedToWait() {
    let waitErrorText = `${ERRORS.FAILED_TO_WAIT} after ${this._timeFromStart()}ms`;
    if (this._userMessage && (waitErrorText = `${waitErrorText}: ${this._userMessage}`), this._lastError) {
      this._lastError.message = `${waitErrorText}
${this._lastError.message}`;
      let originalStack = this.originalStacktraceError.stack;
      originalStack && (this._lastError.stack += originalStack.substring(
        originalStack.indexOf(`
`) + 1
      ));
    } else
      this._lastError = this.originalStacktraceError, this._lastError.message = waitErrorText;
    return this._log(this._lastError), this._lastError;
  }
  _runFunction() {
    if (this._shouldStopTrying()) {
      this._isWaiting = !1, this.reject?.(this._failedToWait());
      return;
    }
    this._executeFn().then((result) => {
      if (result === !1) {
        this._log(`then execute again with result: ${result}`), this._executeAgain();
        return;
      }
      this.resolve?.(result), this._isWaiting = !1, this._isResolved = !0, this._log(`then done waiting with result: ${result}`);
    }).catch((err) => this._stopOnFailure ? (this._log(`stopped on failure with err: ${err}`), this.reject?.(err)) : (this._lastError = err, this._log(`catch with err: ${err}`), this._executeAgain()));
  }
  _log(message) {
    this._verbose && this._Console && this._Console.log && this._Console.log(message);
  }
}, waitFor = (waitForFunction, options2) => new PollUntil(options2).execute(waitForFunction);

// dom/wait_for_dom.ts
async function waitForDomElementReady() {
  try {
    return await waitFor(() => {
      let mainText = getMainText(document.body);
      if (mainText && mainText.length >= 10)
        return !0;
      throw new Error("there is no main text");
    }, { timeout: 1e4 }), !0;
  } catch (e) {
    throw e;
  }
}

// content_main.ts
ready_state_default.domready.then(() => {
  waitForDomElementReady().then(() => {
    main2().catch((e) => {
      e && log_default.error(
        "translate page error",
        e.name,
        e.message,
        e.details || "",
        e
      );
    });
  }).catch((e) => {
    log_default.debug("can not detect a valid body: ", e);
  });
}).catch((e) => {
  e && log_default.error(
    "translate dom ready detect error",
    e
  );
});
