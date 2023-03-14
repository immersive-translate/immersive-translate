var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// <define:process.env>
var define_process_env_default = { BUILD_TIME: "2023-03-14T21:00:13.360Z", VERSION: "0.3.8", PROD: "1", REDIRECT_URL: "https://immersive-translate.owenyoung.com/auth-done/", IMMERSIVE_TRANSLATE_INJECTED_CSS: `:root {
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
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(9, 105, 218, 0.5) solid !important;
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

// libs/foliate-js/epubcfi.js
var findIndices = (arr, f) => arr.map((x2, i, a) => f(x2, i, a) ? i : null).filter((x2) => x2 != null), splitAt = (arr, is2) => [-1, ...is2, arr.length].reduce(({ xs: xs2, a }, b) => ({ xs: xs2?.concat([arr.slice(a + 1, b)]) ?? [], a: b }), {}).xs, concatArrays = (a, b) => a.slice(0, -1).concat([a[a.length - 1].concat(b[0])]).concat(b.slice(1)), isNumber = /\d/, isCFI = /^epubcfi\((.*)\)$/, escapeCFI = (str) => str.replace(/[\^[\](),;=]/g, "^$&"), wrap = (x2) => isCFI.test(x2) ? x2 : `epubcfi(${x2})`, unwrap = (x2) => x2.match(isCFI)?.[1] ?? x2, lift = (f) => (...xs2) => `epubcfi(${f(...xs2.map((x2) => x2.match(isCFI)?.[1] ?? x2))})`, joinIndir = lift((...xs2) => xs2.join("!")), tokenizer = (str) => {
  let tokens = [], state, escape, value = "", push = (x2) => (tokens.push(x2), state = null, value = ""), cat = (x2) => (value += x2, escape = !1);
  for (let char of Array.from(str.trim()).concat("")) {
    if (char === "^" && !escape) {
      escape = !0;
      continue;
    }
    if (state === "!")
      push(["!"]);
    else if (state === ",")
      push([","]);
    else if (state === "/" || state === ":")
      if (isNumber.test(char)) {
        cat(char);
        continue;
      } else
        push([state, parseInt(value)]);
    else if (state === "~")
      if (isNumber.test(char) || char === ".") {
        cat(char);
        continue;
      } else
        push(["~", parseFloat(value)]);
    else if (state === "@") {
      if (char === ":") {
        push(["@", parseFloat(value)]), state = "@";
        continue;
      }
      if (isNumber.test(char) || char === ".") {
        cat(char);
        continue;
      } else
        push(["@", parseFloat(value)]);
    } else if (state === "[") {
      char === ";" && !escape ? (push(["[", value]), state = ";") : char === "," && !escape ? (push(["[", value]), state = "[") : char === "]" && !escape ? push(["[", value]) : cat(char);
      continue;
    } else if (state?.startsWith(";")) {
      char === "=" && !escape ? (state = `;${value}`, value = "") : char === ";" && !escape ? (push([state, value]), state = ";") : char === "]" && !escape ? push([state, value]) : cat(char);
      continue;
    }
    (char === "/" || char === ":" || char === "~" || char === "@" || char === "[" || char === "!" || char === ",") && (state = char);
  }
  return tokens;
}, findTokens = (tokens, x2) => findIndices(tokens, ([t]) => t === x2), parser = (tokens) => {
  let parts = [], state;
  for (let [type, val] of tokens) {
    if (type === "/")
      parts.push({ index: val });
    else {
      let last = parts[parts.length - 1];
      if (type === ":")
        last.offset = val;
      else if (type === "~")
        last.temporal = val;
      else if (type === "@")
        last.spatial = (last.spatial ?? []).concat(val);
      else if (type === ";s")
        last.side = val;
      else if (type === "[")
        if (state === "/" && val)
          last.id = val;
        else {
          last.text = (last.text ?? []).concat(val);
          continue;
        }
    }
    state = type;
  }
  return parts;
}, parserIndir = (tokens) => splitAt(tokens, findTokens(tokens, "!")).map(parser), parse = (cfi) => {
  let tokens = tokenizer(unwrap(cfi)), commas = findTokens(tokens, ",");
  if (!commas.length)
    return parserIndir(tokens);
  let [parent, start, end] = splitAt(tokens, commas).map(parserIndir);
  return { parent, start, end };
}, partToString = ({ index, id, offset, temporal, spatial, text, side }) => {
  let param = side ? `;s=${side}` : "";
  return `/${index}` + (id ? `[${escapeCFI(id)}${param}]` : "") + (offset != null && index % 2 ? `:${offset}` : "") + (temporal ? `~${temporal}` : "") + (spatial ? `@${spatial.join(":")}` : "") + (text || !id && side ? "[" + (text?.map(escapeCFI)?.join(",") ?? "") + param + "]" : "");
}, toInnerString = (parsed) => parsed.parent ? [parsed.parent, parsed.start, parsed.end].map(toInnerString).join(",") : parsed.map((parts) => parts.map(partToString).join("")).join("!"), toString = (parsed) => wrap(toInnerString(parsed)), collapse = (x2, toEnd) => typeof x2 == "string" ? toString(collapse(parse(x2), toEnd)) : x2.parent ? concatArrays(x2.parent, x2[toEnd ? "end" : "start"]) : x2, buildRange = (from, to2) => {
  typeof from == "string" && (from = parse(from)), typeof to2 == "string" && (to2 = parse(to2)), from = collapse(from), to2 = collapse(to2, !0);
  let localFrom = from[from.length - 1], localTo = to2[to2.length - 1], localParent = [], localStart = [], localEnd = [], pushToParent = !0, len = Math.max(localFrom.length, localTo.length);
  for (let i = 0; i < len; i++) {
    let a = localFrom[i], b = localTo[i];
    pushToParent &&= a?.index === b?.index && !a?.offset && !b?.offset, pushToParent ? localParent.push(a) : (a && localStart.push(a), b && localEnd.push(b));
  }
  let parent = from.slice(0, -1).concat([localParent]);
  return toString({ parent, start: [localStart], end: [localEnd] });
}, compare = (a, b) => {
  if (typeof a == "string" && (a = parse(a)), typeof b == "string" && (b = parse(b)), a.start || b.start)
    return compare(collapse(a), collapse(b)) || compare(collapse(a, !0), collapse(b, !0));
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let p2 = a[i], q2 = b[i], maxIndex = Math.max(p2.length, q2.length) - 1;
    for (let i2 = 0; i2 <= maxIndex; i2++) {
      let x2 = p2[i2], y = q2[i2];
      if (!x2)
        return -1;
      if (!y || x2.index > y.index)
        return 1;
      if (x2.index < y.index)
        return -1;
      if (i2 === maxIndex) {
        if (x2.offset > y.offset)
          return 1;
        if (x2.offset < y.offset)
          return -1;
      }
    }
  }
  return 0;
}, isTextNode = ({ nodeType }) => nodeType === 3 || nodeType === 4, isElementNode = ({ nodeType }) => nodeType === 1, indexChildNodes = (node) => {
  let nodes = Array.from(node.childNodes).filter((node2) => isTextNode(node2) || isElementNode(node2)).reduce((arr, node2) => {
    let last = arr[arr.length - 1];
    return last ? isTextNode(node2) ? Array.isArray(last) ? last.push(node2) : isTextNode(last) ? arr[arr.length - 1] = [last, node2] : arr.push(node2) : isElementNode(last) ? arr.push(null, node2) : arr.push(node2) : arr.push(node2), arr;
  }, []);
  return isElementNode(nodes[0]) && nodes.unshift("first"), isElementNode(nodes[nodes.length - 1]) && nodes.push("last"), nodes.unshift("before"), nodes.push("after"), nodes;
}, getNodeByIndex = (node, index) => node ? indexChildNodes(node)[index] : null, partsToNode = (node, parts) => {
  let { id } = parts[parts.length - 1];
  if (id) {
    let el = node.ownerDocument.getElementById(id);
    if (el)
      return { node: el, offset: 0 };
  }
  for (let { index } of parts) {
    let newNode = getNodeByIndex(node, index);
    if (newNode === "first")
      return { node: node.firstChild ?? node };
    if (newNode === "last")
      return { node: node.lastChild ?? node };
    if (newNode === "before")
      return { node, before: !0 };
    if (newNode === "after")
      return { node, after: !0 };
    node = newNode;
  }
  let { offset } = parts[parts.length - 1];
  if (!Array.isArray(node))
    return { node, offset };
  let sum = 0;
  for (let n of node) {
    let { length } = n.nodeValue;
    if (sum + length >= offset)
      return { node: n, offset: offset - sum };
    sum += length;
  }
}, nodeToParts = (node, offset) => {
  let { parentNode, id } = node, indexed = indexChildNodes(parentNode), index = indexed.findIndex((x2) => Array.isArray(x2) ? x2.some((x3) => x3 === node) : x2 === node), chunk = indexed[index];
  if (Array.isArray(chunk)) {
    let sum = 0;
    for (let x2 of chunk)
      if (x2 === node) {
        sum += offset;
        break;
      } else
        sum += x2.nodeValue.length;
    offset = sum;
  }
  let part = { id, index, offset };
  return parentNode !== node.ownerDocument.documentElement ? nodeToParts(parentNode).concat(part) : [part];
}, fromRange = (range) => {
  let { startContainer, startOffset, endContainer, endOffset } = range, start = nodeToParts(startContainer, startOffset);
  if (range.collapsed)
    return toString([start]);
  let end = nodeToParts(endContainer, endOffset);
  return buildRange([start], [end]);
}, toRange = (doc, parts) => {
  let startParts = collapse(parts), endParts = collapse(parts, !0), root = doc.documentElement, start = partsToNode(root, startParts[0]), end = partsToNode(root, endParts[0]), range = doc.createRange();
  return start.before ? range.setStartBefore(start.node) : start.after ? range.setStartAfter(start.node) : range.setStart(start.node, start.offset), end.before ? range.setEndBefore(end.node) : end.after ? range.setEndAfter(end.node) : range.setEnd(end.node, end.offset), range;
}, fromElements = (elements) => {
  let results = [], { parentNode } = elements[0], parts = nodeToParts(parentNode);
  for (let [index, node] of indexChildNodes(parentNode).entries()) {
    let el = elements[results.length];
    node === el && results.push(toString([parts.concat({ id: el.id, index })]));
  }
  return results;
}, toElement = (doc, parts) => partsToNode(doc.documentElement, collapse(parts)).node, fake = {
  fromIndex: (index) => `/6/${(index + 1) * 2}`,
  toIndex: (parts) => parts?.at(-1).index / 2 - 1
};

// libs/foliate-js/progress.js
var assignIDs = (toc) => {
  let id = 0, assignID = (item) => {
    if (item.id = id++, item.subitems)
      for (let subitem of item.subitems)
        assignID(subitem);
  };
  for (let item of toc)
    assignID(item);
  return toc;
}, flatten = (items) => items.map((item) => item.subitems?.length ? [item, flatten(item.subitems)].flat() : item).flat(), TOCProgress = class {
  constructor({ toc, ids, splitHref, getFragment }) {
    assignIDs(toc);
    let items = flatten(toc), grouped = /* @__PURE__ */ new Map();
    for (let [i, item] of items.entries()) {
      let [id, fragment] = splitHref(item?.href) ?? [], value = { fragment, item };
      grouped.has(id) ? grouped.get(id).items.push(value) : grouped.set(id, { prev: items[i - 1], items: [value] });
    }
    let map = /* @__PURE__ */ new Map();
    for (let [i, id] of ids.entries())
      grouped.has(id) ? map.set(id, grouped.get(id)) : map.set(id, map.get(ids[i - 1]));
    this.ids = ids, this.map = map, this.getFragment = getFragment;
  }
  getProgress(index, range) {
    let id = this.ids[index], obj = this.map.get(id);
    if (!obj)
      return null;
    let { prev, items } = obj;
    if (!items)
      return prev;
    if (!range || items.length === 1 && !items[0].fragment)
      return items[0].item;
    let doc = range.startContainer.getRootNode();
    for (let [i, { fragment }] of items.entries()) {
      let el = this.getFragment(doc, fragment);
      if (el && range.comparePoint(el, 0) > 0)
        return items[i - 1]?.item ?? prev;
    }
    return items[items.length - 1].item;
  }
}, SectionProgress = class {
  constructor(sections, sizePerLoc, sizePerTimeUnit) {
    this.sizes = sections.map((s) => s.linear === "no" ? 0 : s.size), this.sizePerLoc = sizePerLoc, this.sizePerTimeUnit = sizePerTimeUnit, this.sizeTotal = this.sizes.reduce((a, b) => a + b, 0);
  }
  // get progress given index of and fractions within a section
  getProgress(index, fractionInSection) {
    let { sizes, sizePerLoc, sizePerTimeUnit, sizeTotal } = this, sizeInSection = sizes[index] ?? 0, size = sizes.slice(0, index).reduce((a, b) => a + b, 0) + fractionInSection * sizeInSection, remainingTotal = sizeTotal - size, remainingSection = (1 - fractionInSection) * sizeInSection;
    return {
      fraction: size / sizeTotal,
      section: {
        current: index,
        total: sizes.length
      },
      location: {
        current: Math.floor(size / sizePerLoc),
        total: Math.ceil(sizeTotal / sizePerLoc)
      },
      time: {
        section: remainingSection / sizePerTimeUnit,
        total: remainingTotal / sizePerTimeUnit
      }
    };
  }
  // the inverse of `getProgress`
  // get index of and fraction in section based on total fraction
  getSection(fraction) {
    let { sizes, sizeTotal } = this, target = fraction * sizeTotal, index = -1, fractionInSection = 0, sum = 0;
    for (let [i, size] of sizes.entries()) {
      let newSum = sum + size;
      if (newSum > target) {
        index = i, fractionInSection = (target - sum) / size;
        break;
      }
      sum = newSum;
    }
    return [index, fractionInSection];
  }
};

// libs/foliate-js/overlayer.js
var createSVGElement = (tag) => document.createElementNS("http://www.w3.org/2000/svg", tag), Overlayer = class {
  #svg = createSVGElement("svg");
  #map = /* @__PURE__ */ new Map();
  constructor() {
    Object.assign(this.#svg.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none"
    });
    let darkMode = matchMedia("(prefers-color-scheme: dark)"), setBlendMode = () => this.#svg.style.mixBlendMode = darkMode.matches ? "normal" : "multiply";
    darkMode.addEventListener("change", setBlendMode), setBlendMode();
  }
  get element() {
    return this.#svg;
  }
  add(key, range, draw, options) {
    this.#map.has(key) && this.remove(key), typeof range == "function" && (range = range(this.#svg.getRootNode()));
    let rects = range.getClientRects(), element = draw(rects, options);
    this.#svg.append(element), this.#map.set(key, { range, draw, options, element, rects });
  }
  remove(key) {
    this.#map.has(key) && (this.#svg.removeChild(this.#map.get(key).element), this.#map.delete(key));
  }
  redraw() {
    for (let obj of this.#map.values()) {
      let { range, draw, options, element } = obj;
      this.#svg.removeChild(element);
      let rects = range.getClientRects(), el = draw(rects, options);
      this.#svg.append(el), obj.element = el, obj.rects = rects;
    }
  }
  hitTest({ x: x2, y }) {
    let arr = Array.from(this.#map.entries());
    for (let i = arr.length - 1; i >= 0; i--) {
      let [key, obj] = arr[i];
      for (let { left, top, right, bottom } of obj.rects)
        if (top <= y && left <= x2 && bottom > y && right > x2)
          return [key, obj.range];
    }
    return [];
  }
  static underline(rects, options = {}) {
    let { color = "red", width: strokeWidth = 2 } = options, g = createSVGElement("g");
    g.setAttribute("fill", color);
    for (let { left, bottom, width } of rects) {
      let el = createSVGElement("rect");
      el.setAttribute("x", left), el.setAttribute("y", bottom - strokeWidth), el.setAttribute("height", strokeWidth), el.setAttribute("width", width), g.append(el);
    }
    return g;
  }
  static highlight(rects, options = {}) {
    let { color = "red" } = options, g = createSVGElement("g");
    g.setAttribute("fill", color), g.setAttribute("fill-opacity", 0.3);
    for (let { left, top, height, width } of rects) {
      let el = createSVGElement("rect");
      el.setAttribute("x", left), el.setAttribute("y", top), el.setAttribute("height", height), el.setAttribute("width", width), g.append(el);
    }
    return g;
  }
  // make an exact copy of an image in the overlay
  // one can then apply filters to the entire element, without affecting them;
  // it's a bit silly and probably better to just invert images twice
  // (though the color will be off in that case if you do heu-rotate)
  static copyImage([rect], options = {}) {
    let { src } = options, image = createSVGElement("image"), { left, top, height, width } = rect;
    return image.setAttribute("href", src), image.setAttribute("x", left), image.setAttribute("y", top), image.setAttribute("height", height), image.setAttribute("width", width), image;
  }
};

// libs/foliate-js/annotations.js
var Annotations = class {
  #annotationsByIndex = /* @__PURE__ */ new Map();
  #byValue = /* @__PURE__ */ new Map();
  #anchorsByValue = /* @__PURE__ */ new Map();
  #indicesByValue = /* @__PURE__ */ new Map();
  constructor({ resolve, compare: compare2, onAdd, onDelete, onUpdate }) {
    this.resolve = resolve, this.compare = compare2, this.onAdd = onAdd, this.onDelete = onDelete, this.onUpdate = onUpdate;
  }
  async add(annotation, sorted) {
    let { value } = annotation;
    if (this.#byValue.has(value))
      return;
    let { index, anchor } = await this.resolve(value);
    if (this.#byValue.set(value, annotation), this.#indicesByValue.set(value, index), this.#anchorsByValue.set(value, anchor), this.#annotationsByIndex.has(index)) {
      let arr = this.#annotationsByIndex.get(index);
      if (sorted)
        arr.push(annotation), this.onAdd?.(annotation, index, arr.length - 1);
      else {
        let position = 0;
        for (let i = 0; i < arr.length; i++) {
          let itemValue = arr[i].value;
          if (this.compare(value, itemValue) <= 0)
            break;
          position = i + 1;
        }
        arr.splice(position, 0, annotation), this.onAdd?.(annotation, index, position);
      }
    } else
      this.#annotationsByIndex.set(index, [annotation]), this.onAdd?.(annotation, index, 0);
  }
  update(annotation) {
    let index = this.#indicesByValue.get(annotation.value), old = this.#byValue.get(annotation.value);
    Object.assign(old, annotation), this.onUpdate?.(annotation, index);
  }
  delete(value) {
    let index = this.#indicesByValue.get(value), arr = this.#annotationsByIndex.get(index), position = arr.findIndex((a) => a.value === value);
    arr.splice(position, 1), this.#byValue.delete(value), this.#indicesByValue.delete(value), this.#anchorsByValue.delete(value), this.onDelete?.(value, index, position);
  }
  getByIndex(index) {
    return this.#annotationsByIndex.get(index) ?? [];
  }
  getAnchor(value) {
    return this.#anchorsByValue.get(value);
  }
};

// libs/foliate-js/paginator.js
var wait = (ms2) => new Promise((resolve) => setTimeout(resolve, ms2)), debounce = (f, wait2, immediate) => {
  let timeout;
  return (...args) => {
    let later = () => {
      timeout = null, immediate || f(...args);
    }, callNow = immediate && !timeout;
    timeout && clearTimeout(timeout), timeout = setTimeout(later, wait2), callNow && f(...args);
  };
}, uncollapse = (range) => {
  if (!range?.collapsed)
    return range;
  let { endOffset, endContainer } = range;
  if (endContainer.nodeType === 1)
    return endContainer;
  if (endOffset + 1 < endContainer.length)
    range.setEnd(endContainer, endOffset + 1);
  else if (endOffset > 1)
    range.setStart(endContainer, endOffset - 1);
  else
    return endContainer.parentNode;
  return range;
}, makeRange = (doc, node, start, end = start) => {
  let range = doc.createRange();
  return range.setStart(node, start), range.setEnd(node, end), range;
}, bisectNode = (doc, node, cb, start = 0, end = node.nodeValue.length) => {
  if (end - start === 1)
    return cb(makeRange(doc, node, start), makeRange(doc, node, end)) < 0 ? start : end;
  let mid = Math.floor(start + (end - start) / 2), result = cb(
    makeRange(doc, node, start, mid),
    makeRange(doc, node, mid, end)
  );
  return result < 0 ? bisectNode(doc, node, cb, start, mid) : result > 0 ? bisectNode(doc, node, cb, mid, end) : mid;
}, {
  SHOW_ELEMENT,
  SHOW_TEXT,
  SHOW_CDATA_SECTION,
  FILTER_ACCEPT,
  FILTER_REJECT,
  FILTER_SKIP
} = NodeFilter, filter = SHOW_ELEMENT | SHOW_TEXT | SHOW_CDATA_SECTION, getVisibleRange = (doc, start, end, mapRect) => {
  let acceptNode = (node) => {
    let name = node.localName?.toLowerCase();
    if (name === "script" || name === "style")
      return FILTER_REJECT;
    if (node.nodeType === 1) {
      let { left, right } = mapRect(node.getBoundingClientRect());
      if (right < start || left > end)
        return FILTER_REJECT;
      if (left >= start && right <= end)
        return FILTER_ACCEPT;
    } else {
      if (!node.nodeValue?.trim())
        return FILTER_SKIP;
      let range2 = doc.createRange();
      range2.selectNodeContents(node);
      let { left, right } = mapRect(range2.getBoundingClientRect());
      if (right >= start && left <= end)
        return FILTER_ACCEPT;
    }
    return FILTER_SKIP;
  }, walker = doc.createTreeWalker(doc.body, filter, { acceptNode }), nodes = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode())
    nodes.push(node);
  let from = nodes[0] ?? doc.body, to2 = nodes[nodes.length - 1] ?? from, startOffset = from.nodeType === 1 ? 0 : bisectNode(doc, from, (a, b) => {
    let p2 = mapRect(a.getBoundingClientRect()), q2 = mapRect(b.getBoundingClientRect());
    return p2.right < start && q2.left > start ? 0 : q2.left > start ? -1 : 1;
  }), endOffset = to2.nodeType === 1 ? 0 : bisectNode(doc, to2, (a, b) => {
    let p2 = mapRect(a.getBoundingClientRect()), q2 = mapRect(b.getBoundingClientRect());
    return p2.right < end && q2.left > end ? 0 : q2.left > end ? -1 : 1;
  }), range = doc.createRange();
  return range.setStart(from, startOffset), range.setEnd(to2, endOffset), range;
}, getDirection = (doc) => {
  let { defaultView } = doc, { writingMode, direction } = defaultView.getComputedStyle(doc.body), vertical = writingMode === "vertical-rl" || writingMode === "vertical-lr", rtl = doc.body.dir === "rtl" || direction === "rtl" || doc.documentElement.dir === "rtl";
  return { vertical, rtl };
}, getBackground = (doc) => {
  let bodyStyle = doc.defaultView.getComputedStyle(doc.body);
  return bodyStyle.backgroundColor === "rgba(0, 0, 0, 0)" && bodyStyle.backgroundImage === "none" ? doc.defaultView.getComputedStyle(doc.documentElement).background : bodyStyle.background;
}, View = class {
  #element = document.createElement("div");
  #iframe = document.createElement("iframe");
  #contentRange = document.createRange();
  #overlayer;
  #vertical = !1;
  #rtl = !1;
  #column = !0;
  #size;
  #layout = {};
  constructor({ container }) {
    this.container = container, this.#iframe.classList.add("filter"), this.#element.append(this.#iframe), Object.assign(this.#element.style, {
      position: "relative",
      overflow: "hidden",
      flex: "0 0 auto",
      width: "100%",
      height: "100%"
    }), Object.assign(this.#iframe.style, {
      overflow: "hidden",
      border: "0",
      display: "none",
      width: "100%",
      height: "100%"
    }), this.#iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.#iframe.setAttribute("scrolling", "no");
  }
  get element() {
    return this.#element;
  }
  get document() {
    return this.#iframe.contentDocument;
  }
  async load(src, afterLoad, beforeRender) {
    if (typeof src != "string")
      throw new Error(`${src} is not string`);
    return new Promise((resolve) => {
      this.#iframe.addEventListener(
        "load",
        () => {
          let doc = this.document;
          afterLoad?.(doc), this.#iframe.style.display = "block";
          let { vertical, rtl } = getDirection(doc), background = getBackground(doc);
          this.#iframe.style.display = "none", this.#vertical = vertical, this.#rtl = rtl, this.#contentRange.selectNodeContents(doc.body);
          let layout = beforeRender?.({ vertical, rtl, background });
          this.#iframe.style.display = "block", this.render(layout), new ResizeObserver(() => this.expand()).observe(doc.body), resolve();
        },
        { once: !0 }
      ), this.#iframe.src = src;
    });
  }
  render(layout) {
    this.#column = layout.flow !== "scrolled", this.#layout = layout, this.#column ? this.columnize(layout) : this.scrolled(layout);
  }
  scrolled({ gap, columnWidth }) {
    let vertical = this.#vertical, doc = this.document;
    Object.assign(doc.documentElement.style, {
      boxSizing: "border-box",
      padding: vertical ? `${gap}px 0` : `0 ${gap}px`,
      columnWidth: "auto",
      height: "auto",
      width: "auto"
    }), Object.assign(doc.body.style, {
      [vertical ? "maxHeight" : "maxWidth"]: `${columnWidth}px`,
      margin: "auto"
    }), this.setImageSize(), this.expand();
  }
  columnize({ width, height, gap, columnWidth }) {
    let vertical = this.#vertical;
    this.#size = vertical ? height : width;
    let doc = this.document;
    Object.assign(doc.documentElement.style, {
      boxSizing: "border-box",
      columnWidth: `${columnWidth}px`,
      columnGap: `${gap}px`,
      columnFill: "auto",
      ...vertical ? { width: `${width}px` } : { height: `${height}px` },
      padding: vertical ? `${gap / 2}px 0` : `0 ${gap / 2}px`,
      overflow: "hidden",
      // force wrap long words
      overflowWrap: "anywhere",
      // reset some potentially problematic props
      position: "static",
      border: "0",
      margin: "0",
      maxHeight: "none",
      maxWidth: "none",
      minHeight: "none",
      minWidth: "none",
      // fix glyph clipping in WebKit
      webkitLineBoxContain: "block glyphs replaced"
    }), Object.assign(doc.body.style, {
      maxHeight: "none",
      maxWidth: "none",
      margin: "0"
    }), this.setImageSize(), this.expand();
  }
  setImageSize() {
    let { width, height, margin } = this.#layout, vertical = this.#vertical, doc = this.document;
    for (let el of doc.body.querySelectorAll("img, svg, video")) {
      let { maxHeight, maxWidth } = doc.defaultView.getComputedStyle(el);
      Object.assign(el.style, {
        maxHeight: vertical ? maxHeight !== "none" && maxHeight !== "0px" ? maxHeight : "100%" : `${height - margin * 2}px`,
        maxWidth: vertical ? `${width - margin * 2}px` : maxWidth !== "none" && maxWidth !== "0px" ? maxWidth : "100%",
        objectFit: "contain",
        pageBreakInside: "avoid",
        breakInside: "avoid",
        boxSizing: "border-box"
      });
    }
  }
  expand() {
    if (this.#column) {
      let side = this.#vertical ? "height" : "width", otherSide = this.#vertical ? "width" : "height", contentSize = this.#contentRange.getBoundingClientRect()[side], expandedSize = Math.ceil(contentSize / this.#size) * this.#size;
      this.#element.style.padding = "0", this.#iframe.style[side] = `${expandedSize}px`, this.#element.style[side] = `${expandedSize}px`, this.#iframe.style[otherSide] = "100%", this.#element.style[otherSide] = "100%", this.document && (this.document.documentElement.style[side] = `${expandedSize}px`), this.#overlayer && (this.#overlayer.element.style.margin = "0", this.#overlayer.element.style[side] = `${expandedSize}px`, this.#overlayer.redraw());
    } else {
      let side = this.#vertical ? "width" : "height", otherSide = this.#vertical ? "height" : "width", expandedSize = this.document?.documentElement?.getBoundingClientRect()?.[side], { margin } = this.#layout, padding = this.#vertical ? `0 ${margin}px` : `${margin}px 0`;
      this.#element.style.padding = padding, this.#iframe.style[side] = `${expandedSize}px`, this.#element.style[side] = `${expandedSize}px`, this.#iframe.style[otherSide] = "100%", this.#element.style[otherSide] = "100%", this.#overlayer && (this.#overlayer.element.style.margin = padding, this.#overlayer.element.style[side] = `${expandedSize}px`, this.#overlayer.redraw());
    }
  }
  set overlayer(overlayer) {
    this.#overlayer = overlayer, this.#element.append(overlayer.element);
  }
  get overlayer() {
    return this.#overlayer;
  }
}, Paginator = class {
  #element = document.createElement("div");
  #container = document.createElement("div");
  #view;
  #vertical = !1;
  #rtl = !1;
  #index = -1;
  #anchor = 0;
  // anchor view to a fraction (0-1), Range, or Element
  #locked = !1;
  // while true, prevent any further navigation
  #styleMap = /* @__PURE__ */ new WeakMap();
  layout = {
    margin: 48,
    gap: 40,
    maxColumnWidth: 700
  };
  constructor({ book, onLoad, onRelocated, createOverlayer }) {
    this.sections = book.sections, this.onLoad = onLoad, this.onRelocated = onRelocated, this.createOverlayer = createOverlayer, Object.assign(this.#element.style, {
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      position: "absolute"
    }), this.#element.append(this.#container), Object.assign(this.#container.style, {
      width: "100%",
      height: "100%"
    }), new ResizeObserver(() => this.render()).observe(this.#element), this.#container.addEventListener(
      "scroll",
      debounce(() => {
        this.scrolled && this.#afterScroll("scroll");
      }, 250)
    );
  }
  get element() {
    return this.#element;
  }
  #createView() {
    return this.#view && this.#container.removeChild(this.#view.element), this.#view = new View({ container: this.#element }), this.#container.append(this.#view.element), this.#view;
  }
  #beforeRender({ vertical, rtl, background }) {
    this.#vertical = vertical, this.#rtl = rtl, this.#element.style.background = background;
    let { flow, margin, gap, maxColumnWidth } = this.layout;
    if (flow === "scrolled") {
      this.#element.setAttribute("dir", vertical ? "rtl" : "ltr"), this.#element.style.padding = "0", this.#container.style.overflow = "scroll";
      let columnWidth2 = this.layout.maxColumnWidth;
      return { flow, margin, gap, columnWidth: columnWidth2 };
    }
    let { width, height } = this.#container.getBoundingClientRect(), size = vertical ? height : width, divisor = Math.ceil(size / maxColumnWidth), columnWidth = size / divisor - gap;
    this.#element.setAttribute("dir", rtl ? "rtl" : "ltr");
    let paddingH = `${vertical ? gap : gap / 2}px`, paddingV = `${vertical ? margin - gap / 2 : margin}px`;
    return this.#element.style.padding = `${paddingV} ${paddingH}`, this.#container.style.overflow = "hidden", { height, width, margin, gap, columnWidth };
  }
  render() {
    this.#view && (this.#view.render(
      this.#beforeRender({
        vertical: this.#vertical,
        rtl: this.#rtl
      })
    ), this.#scrollToAnchor());
  }
  get scrolled() {
    return this.layout.flow === "scrolled";
  }
  get scrollProp() {
    let { scrolled } = this;
    return this.#vertical ? scrolled ? "scrollLeft" : "scrollTop" : scrolled ? "scrollTop" : "scrollLeft";
  }
  get sideProp() {
    let { scrolled } = this;
    return this.#vertical ? scrolled ? "width" : "height" : scrolled ? "height" : "width";
  }
  get size() {
    return this.#container.getBoundingClientRect()[this.sideProp];
  }
  get viewSize() {
    return this.#view.element.getBoundingClientRect()[this.sideProp];
  }
  get start() {
    return Math.abs(this.#container[this.scrollProp]);
  }
  get end() {
    return this.start + this.size;
  }
  get page() {
    return Math.floor((this.start + this.end) / 2 / this.size);
  }
  get pages() {
    return Math.round(this.viewSize / this.size);
  }
  // allows one to process rects as if they were LTR and horizontal
  #getRectMapper() {
    if (this.scrolled) {
      let size = this.viewSize, margin = this.layout.margin;
      return this.#vertical ? ({ left, right }) => ({
        left: size - right - margin,
        right: size - left - margin
      }) : ({ top, bottom }) => ({ left: top + margin, right: bottom + margin });
    }
    let pxSize = this.pages * this.size;
    return this.#rtl ? ({ left, right }) => ({ left: pxSize - right, right: pxSize - left }) : this.#vertical ? ({ top, bottom }) => ({ left: top, right: bottom }) : (f) => f;
  }
  async #scrollToRect(rect, reason) {
    if (this.scrolled) {
      let offset2 = this.#getRectMapper()(rect).left;
      return this.#scrollTo(offset2, reason);
    }
    let offset = this.#getRectMapper()(rect).left + this.layout.margin / 2;
    return this.#scrollToPage(Math.floor(offset / this.size), reason);
  }
  async #scrollTo(offset, reason) {
    let element = this.#container, { scrollProp } = this;
    if (element[scrollProp] === offset) {
      this.#afterScroll(reason);
      return;
    }
    this.scrolled && this.#vertical && (offset = -offset), element[scrollProp] = offset, this.#afterScroll(reason);
  }
  async #scrollToPage(page, reason) {
    let offset = this.size * (this.#rtl ? -page : page);
    return this.#scrollTo(offset, reason);
  }
  async #scrollToAnchor(select) {
    let rect = uncollapse(this.#anchor).getBoundingClientRect?.();
    if (rect) {
      await this.#scrollToRect(rect, "anchor"), select && this.#selectAnchor();
      return;
    }
    if (this.scrolled) {
      await this.#scrollTo(this.#anchor * this.viewSize, "anchor");
      return;
    }
    let { pages } = this;
    if (!pages)
      return;
    let newPage = Math.round(this.#anchor * (pages - 1));
    await this.#scrollToPage(newPage, "anchor");
  }
  #selectAnchor() {
    let { defaultView } = this.#view.document;
    if (this.#anchor instanceof defaultView.Range) {
      let sel = defaultView.getSelection();
      sel.removeAllRanges(), sel.addRange(this.#anchor);
    }
  }
  #getVisibleRange() {
    return getVisibleRange(
      this.#view.document,
      this.start,
      this.end,
      this.#getRectMapper(),
      this.scrolled
    );
  }
  #afterScroll(reason) {
    let range = this.#getVisibleRange();
    reason !== "anchor" && (this.#anchor = range);
    let index = this.#index;
    this.scrolled ? this.onRelocated?.(range, index, this.end / this.viewSize) : this.pages > 0 && this.onRelocated?.(range, index, (this.page + 1) / this.pages);
  }
  async #display(promise) {
    let { index, src, anchor, onLoad, select } = await promise;
    if (this.#index = index, src) {
      let view = this.#createView(), afterLoad = (doc) => {
        if (doc.head) {
          let $style = doc.createElement("style");
          doc.head.append($style), this.#styleMap.set(doc, $style);
        }
        onLoad?.(doc, index);
      }, beforeRender = this.#beforeRender.bind(this);
      await view.load(src, afterLoad, beforeRender);
      let overlayer = this.createOverlayer?.(view.document, index);
      overlayer && (view.overlayer = overlayer), this.#view = view;
    }
    this.#anchor = (typeof anchor == "function" ? anchor(this.#view.document) : anchor) ?? 0, await this.#scrollToAnchor(select);
  }
  #canScrollToPage(page) {
    return page > -1 && page < this.pages;
  }
  scrollPrev() {
    if (!this.#view)
      return null;
    if (this.scrolled)
      return this.start > 0 ? this.#scrollTo(Math.max(0, this.start - this.size)) : null;
    let page = this.page - 1;
    return this.#canScrollToPage(page) ? this.#scrollToPage(page) : null;
  }
  scrollNext() {
    if (!this.#view)
      return null;
    if (this.scrolled)
      return this.viewSize - this.end > 2 ? this.#scrollTo(Math.min(this.viewSize, this.end)) : null;
    let page = this.page + 1;
    return this.#canScrollToPage(page) ? this.#scrollToPage(page) : null;
  }
  #canGoToIndex(index) {
    return index >= 0 && index <= this.sections.length - 1;
  }
  async #goTo(tryScroll, target, lock) {
    if (this.#locked)
      return;
    lock && (this.#locked = !0);
    let scroll = tryScroll?.();
    if (scroll)
      await scroll;
    else {
      let { index, anchor, select } = await target;
      if (!this.#canGoToIndex(index))
        return this.#locked = !1, null;
      if (index === this.#index)
        await this.#display({ index, anchor, select });
      else {
        let oldIndex = this.#index, onLoad = (...args) => {
          this.sections[oldIndex]?.unload?.(), this.onLoad?.(...args);
        };
        await this.#display(
          Promise.resolve(this.sections[index].load()).then((src) => ({ index, src, anchor, onLoad, select })).catch((e) => (console.warn(e), console.warn(new Error(`Failed to load section ${index}`)), {}))
        );
      }
    }
    lock && (await wait(100), this.#locked = !1);
  }
  async goTo(target) {
    return this.#goTo(null, target);
  }
  #adjacentIndex(dir) {
    for (let index = this.#index + dir; this.#canGoToIndex(index); index += dir)
      if (this.sections[index]?.linear !== "no")
        return index;
  }
  prev() {
    let index = this.#adjacentIndex(-1);
    return this.#goTo(
      () => this.scrollPrev(),
      { index, anchor: () => 1 },
      !0
    );
  }
  next() {
    let index = this.#adjacentIndex(1);
    return this.#goTo(() => this.scrollNext(), { index }, !0);
  }
  prevSection() {
    return this.goTo({ index: this.#adjacentIndex(-1) });
  }
  nextSection() {
    return this.goTo({ index: this.#adjacentIndex(1) });
  }
  firstSection() {
    let index = this.sections.findIndex((section) => section.linear !== "no");
    return this.goTo({ index });
  }
  lastSection() {
    let index = this.sections.findLastIndex(
      (section) => section.linear !== "no"
    );
    return this.goTo({ index });
  }
  getOverlayer() {
    if (this.#view)
      return {
        index: this.#index,
        overlayer: this.#view.overlayer,
        doc: this.#view.document
      };
  }
  setStyle(style2) {
    let $style = this.#styleMap.get(this.#view?.document);
    $style && ($style.textContent = style2);
  }
  async #setAnchor(anchor, select) {
    this.#anchor = anchor, await this.#scrollToAnchor(select);
  }
};

// libs/foliate-js/fixed-layout.js
var parseViewport = (str) => str?.split(/[,;\s]/)?.filter((x2) => x2)?.map((x2) => x2.split("=").map((x3) => x3.trim())), getViewport = (doc, viewport) => {
  if (doc.documentElement.nodeName === "svg") {
    let [, , width, height] = doc.documentElement.getAttribute("viewBox")?.split(/\s/) ?? [];
    return { width, height };
  }
  let meta = parseViewport(doc.querySelector('meta[name="viewport"]')?.getAttribute("content"));
  if (meta)
    return Object.fromEntries(meta);
  if (typeof viewport == "string")
    return parseViewport(viewport);
  if (viewport)
    return viewport;
  let img = doc.querySelector("img");
  return img ? { width: img.naturalWidth, height: img.naturalHeight } : (console.warn(new Error("Missing viewport properties")), { width: 1e3, height: 2e3 });
}, Container = class {
  #element = document.createElement("div");
  defaultViewport;
  spread;
  #portrait = !1;
  #left;
  #right;
  #center;
  #side;
  constructor() {
    Object.assign(this.#element.style, {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }), new ResizeObserver(() => this.render()).observe(this.#element);
  }
  get element() {
    return this.#element;
  }
  get side() {
    return this.#side;
  }
  async #createFrame(src) {
    let element = document.createElement("div"), iframe = document.createElement("iframe");
    return element.append(iframe), Object.assign(iframe.style, {
      border: "0",
      display: "none",
      overflow: "hidden"
    }), iframe.setAttribute("scrolling", "no"), iframe.classList.add("filter"), this.#element.append(element), src ? new Promise((resolve) => {
      let onload = () => {
        iframe.removeEventListener("load", onload), this.onLoad?.(iframe);
        let doc = iframe.contentDocument, { width, height } = getViewport(doc, this.defaultViewport);
        resolve({
          element,
          iframe,
          width: parseFloat(width),
          height: parseFloat(height)
        });
      };
      iframe.addEventListener("load", onload), iframe.src = src;
    }) : { blank: !0, element, iframe };
  }
  render(side = this.#side) {
    if (!side)
      return;
    let left = this.#left ?? {}, right = this.#center ?? this.#right, target = side === "left" ? left : right, { width, height } = this.#element.getBoundingClientRect(), portrait = this.spread !== "both" && this.spread !== "portrait" && height > width;
    this.#portrait = portrait;
    let blankWidth = left.width ?? right.width, blankHeight = left.height ?? right.height, scale = portrait ? Math.min(
      width / (target.width ?? blankWidth),
      height / (target.height ?? blankHeight)
    ) : Math.min(
      width / ((left.width ?? blankWidth) + (right.width ?? blankWidth)),
      height / Math.max(
        left.height ?? blankHeight,
        right.height ?? blankHeight
      )
    ), transform = (frame) => {
      let { element, iframe, width: width2, height: height2 } = frame;
      Object.assign(iframe.style, {
        width: `${width2}px`,
        height: `${height2}px`,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        display: "block"
      }), Object.assign(element.style, {
        width: `${(width2 ?? blankWidth) * scale}px`,
        height: `${(height2 ?? blankHeight) * scale}px`,
        overflow: "hidden",
        display: "block"
      }), portrait && frame !== target && (element.style.display = "none");
    };
    this.#center ? transform(this.#center) : (transform(left), transform(right));
  }
  async showSpread({ left, right, center, side }) {
    this.#element.replaceChildren(), this.#left = null, this.#right = null, this.#center = null, center ? (this.#center = await this.#createFrame(center), this.#side = "center", this.render()) : (this.#left = await this.#createFrame(left), this.#right = await this.#createFrame(right), this.#side = side, this.render());
  }
  goLeft() {
    if (!this.#center) {
      if (this.#left?.blank)
        return !0;
      if (this.#portrait && this.#left?.element?.style?.display === "none")
        return this.#right.element.style.display = "none", this.#left.element.style.display = "block", this.#side = "left", !0;
    }
  }
  goRight() {
    if (!this.#center) {
      if (this.#right?.blank)
        return !0;
      if (this.#portrait && this.#right?.element?.style?.display === "none")
        return this.#left.element.style.display = "none", this.#right.element.style.display = "block", this.#side = "right", !0;
    }
  }
}, FixedLayout = class {
  #spreads;
  #index = -1;
  #container = new Container();
  constructor({ book, onLoad, onRelocated }) {
    this.book = book, this.onLoad = onLoad, this.onRelocated = onRelocated;
    let { rendition } = book;
    this.#container.spread = rendition?.spread, this.#container.defaultViewport = rendition?.viewport;
    let rtl = book.dir === "rtl", ltr = !rtl;
    this.rtl = rtl, rendition?.spread === "none" ? this.#spreads = book.sections.map((section) => ({ center: section })) : this.#spreads = book.sections.reduce((arr, section) => {
      let last = arr[arr.length - 1], { linear, pageSpread } = section;
      if (linear === "no")
        return arr;
      let newSpread = () => {
        let spread = {};
        return arr.push(spread), spread;
      };
      if (pageSpread === "center")
        newSpread().center = section;
      else if (pageSpread === "left") {
        let spread = last.center || last.left || ltr ? newSpread() : last;
        spread.left = section;
      } else if (pageSpread === "right") {
        let spread = last.center || last.right || rtl ? newSpread() : last;
        spread.right = section;
      } else
        ltr ? last.center || last.right ? newSpread().left = section : last.left ? last.right = section : last.left = section : last.center || last.left ? newSpread().right = section : last.right ? last.left = section : last.right = section;
      return arr;
    }, [{}]);
  }
  get element() {
    return this.#container.element;
  }
  get index() {
    let spread = this.#spreads[this.#index], section = spread?.center ?? (this.#container.side === "left" ? spread.left ?? spread.right : spread.right ?? spread.left);
    return this.book.sections.indexOf(section);
  }
  getSpreadOf(section) {
    let spreads = this.#spreads;
    for (let index = 0; index < spreads.length; index++) {
      let { left, right, center } = spreads[index];
      if (left === section)
        return { index, side: "left" };
      if (right === section)
        return { index, side: "right" };
      if (center === section)
        return { index, side: "center" };
    }
  }
  async goToSpread(index, side) {
    if (index < 0 || index > this.#spreads.length - 1)
      return;
    if (index === this.#index) {
      this.#container.render(side);
      return;
    }
    this.#index = index;
    let spread = this.#spreads[index];
    if (spread.center) {
      let center = await spread.center?.load?.();
      await this.#container.showSpread({ center });
    } else {
      let left = await spread.left?.load?.(), right = await spread.right?.load?.();
      await this.#container.showSpread({ left, right, side });
    }
    this.onRelocated?.(null, this.index, 0, 1);
  }
  async select(target) {
    await this.goTo(target);
  }
  async goTo(target) {
    let { book } = this, resolved = await target, section = book.sections[resolved.index];
    if (!section)
      return;
    let { index, side } = this.getSpreadOf(section);
    await this.goToSpread(index, side);
  }
  async next() {
    if (this.rtl ? this.#container.goLeft() : this.#container.goRight())
      this.onRelocated?.(null, this.index, 0, 1);
    else
      return this.goToSpread(this.#index + 1, this.rtl ? "right" : "left");
  }
  async prev() {
    if (this.rtl ? this.#container.goRight() : this.#container.goLeft())
      this.onRelocated?.(null, this.index, 0, 1);
    else
      return this.goToSpread(this.#index - 1, this.rtl ? "left" : "right");
  }
};

// libs/foliate-js/search.js
var normalizeWhitespace = (str) => str.replace(/\s+/g, " "), makeExcerpt = (strs, { startIndex, startOffset, endIndex, endOffset }) => {
  let start = strs[startIndex], end = strs[endIndex], match = start === end ? start.slice(startOffset, endOffset) : start.slice(startOffset) + strs.slice(start + 1, end).join("") + end.slice(0, endOffset), trimmedStart = normalizeWhitespace(start.slice(0, startOffset)).trimStart(), trimmedEnd = normalizeWhitespace(end.slice(endOffset)).trimEnd(), ellipsisPre = trimmedStart.length < 50 ? "" : "\u2026", ellipsisPost = trimmedEnd.length < 50 ? "" : "\u2026", pre = `${ellipsisPre}${trimmedStart.slice(-50)}`, post = `${trimmedEnd.slice(0, 50)}${ellipsisPost}`;
  return { pre, match, post };
}, segmenterSearch = function* (strs, query, options = {}) {
  let { locales = "en", granularity = "word", sensitivity = "base" } = options, segmenter, collator;
  try {
    segmenter = new Intl.Segmenter(locales, { usage: "search", granularity }), collator = new Intl.Collator(locales, { sensitivity });
  } catch (e) {
    console.warn(e), segmenter = new Intl.Segmenter("en", { usage: "search", granularity }), collator = new Intl.Collator("en", { sensitivity });
  }
  let queryLength = Array.from(segmenter.segment(query)).length, substrArr = [], strIndex = 0, segments = segmenter.segment(strs[strIndex])[Symbol.iterator]();
  main:
    for (; strIndex < strs.length; ) {
      for (; substrArr.length < queryLength; ) {
        let { done, value } = segments.next();
        if (done)
          if (strIndex++, strIndex < strs.length) {
            segments = segmenter.segment(strs[strIndex])[Symbol.iterator]();
            continue;
          } else
            break main;
        let { index, segment } = value;
        if (/[^\p{Format}]/u.test(segment)) {
          if (/\s/u.test(segment)) {
            /\s/u.test(substrArr[substrArr.length - 1]?.segment) || substrArr.push({ strIndex, index, segment: " " });
            continue;
          }
          value.strIndex = strIndex, substrArr.push(value);
        }
      }
      let substr = substrArr.map((x2) => x2.segment).join("");
      if (collator.compare(query, substr) === 0) {
        let endIndex = strIndex, lastSeg = substrArr[substrArr.length - 1], endOffset = lastSeg.index + lastSeg.segment.length, startIndex = substrArr[0].strIndex, startOffset = substrArr[0].index, range = { startIndex, startOffset, endIndex, endOffset };
        yield { range, excerpt: makeExcerpt(strs, range) };
      }
      substrArr.shift();
    }
}, searchMatcher = (textWalker2, opts) => {
  let { defalutLocale, matchCase, matchDiacritics, matchWholeWords } = opts;
  return function* (doc, query) {
    let iter = textWalker2(doc, function* (strs, makeRange2) {
      for (let result of segmenterSearch(strs, query, {
        locales: doc.body.lang || doc.documentElement.lang || defalutLocale || "en",
        granularity: matchWholeWords ? "word" : "grapheme",
        sensitivity: matchDiacritics && matchCase ? "variant" : matchDiacritics && !matchCase ? "accent" : !matchDiacritics && matchCase ? "case" : "base"
      })) {
        let { startIndex, startOffset, endIndex, endOffset } = result.range;
        result.range = makeRange2(startIndex, startOffset, endIndex, endOffset), yield result;
      }
    });
    for (let result of iter)
      yield result;
  };
};

// libs/foliate-js/view.js
var textWalker = function* (doc, func) {
  let filter2 = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_CDATA_SECTION, { FILTER_ACCEPT: FILTER_ACCEPT2, FILTER_REJECT: FILTER_REJECT2, FILTER_SKIP: FILTER_SKIP2 } = NodeFilter, acceptNode = (node) => {
    let name = node.localName?.toLowerCase();
    return name === "script" || name === "style" ? FILTER_REJECT2 : node.nodeType === 1 ? FILTER_SKIP2 : FILTER_ACCEPT2;
  }, walker = doc.createTreeWalker(doc.body, filter2, { acceptNode }), nodes = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode())
    nodes.push(node);
  let strs = nodes.map((node) => node.nodeValue), makeRange2 = (startIndex, startOffset, endIndex, endOffset) => {
    let range = doc.createRange();
    return range.setStart(nodes[startIndex], startOffset), range.setEnd(nodes[endIndex], endOffset), range;
  };
  for (let match of func(strs, makeRange2))
    yield match;
};
var SSV = Object.fromEntries(
  Array.from(
    Object.entries({
      isRef: ["annoref", "biblioref", "glossref", "noteref"],
      isLink: ["backlink"],
      isNote: ["annotation", "note", "footnote", "endnote", "rearnote"]
    }),
    ([k, v]) => [
      k,
      (el) => el.getAttributeNS("http://www.idpf.org/2007/ops", "type")?.split(/s/)?.some((t) => v.includes(t))
    ]
  )
), View2 = class {
  #sectionProgress;
  #tocProgress;
  #pageProgress;
  #css;
  language = "en";
  textDirection = "";
  isCJK = !1;
  isFixedLayout = !1;
  annotations = new Annotations({
    resolve: (value) => this.resolveCFI(value),
    compare,
    onAdd: (annotation, index, position) => {
      let o = this.#getOverlayer(index);
      o && this.#drawAnnotation(o.doc, o.overlayer, annotation);
      let label = this.#tocProgress.getProgress(index)?.label ?? "";
      this?.emit({
        type: "add-annotation",
        annotation,
        label,
        index,
        position
      });
    },
    onDelete: (key, index, position) => {
      this.#getOverlayer(index)?.overlayer?.remove(key), this?.emit({ type: "delete-annotation", index, position });
    },
    onUpdate: (annotation, index) => {
      let o = this.#getOverlayer(index);
      o && (o.overlayer.remove(annotation.value), this.#drawAnnotation(o.doc, o.overlayer, annotation));
    }
  });
  constructor(book, emit) {
    if (this.book = book, this.emit = emit, book.metadata?.language)
      try {
        let language = book.metadata.language;
        book.metadata.language = Intl.getCanonicalLocales(language)[0];
        let tag = typeof language == "string" ? language : language[0], locale = new Intl.Locale(tag);
        this.isCJK = ["zh", "ja", "kr"].includes(locale.language), locale.textInfo && locale.textInfo.direction && (this.textDirection = locale.textInfo.direction);
      } catch (e) {
        console.warn(e);
      }
    if (book.splitTOCHref && book.getTOCFragment) {
      let ids = book.sections.map((s) => s.id);
      this.#sectionProgress = new SectionProgress(book.sections, 150, 1600);
      let splitHref = book.splitTOCHref.bind(book), getFragment = book.getTOCFragment.bind(book);
      this.#tocProgress = new TOCProgress({
        toc: book.toc ?? [],
        ids,
        splitHref,
        getFragment
      }), this.#pageProgress = new TOCProgress({
        toc: book.pageList ?? [],
        ids,
        splitHref,
        getFragment
      });
    }
  }
  async display() {
    let opts = {
      book: this.book,
      onLoad: this.#onLoad.bind(this),
      onRelocated: this.#onRelocated.bind(this),
      createOverlayer: this.#createOverlayer.bind(this)
    };
    return this.isFixedLayout = this.book.rendition?.layout === "pre-paginated", this.isFixedLayout ? this.renderer = new FixedLayout(opts) : this.renderer = new Paginator(opts), this.renderer.element;
  }
  async init({ lastLocation, annotations }) {
    if (lastLocation) {
      let resolved = this.resolveNavigation(lastLocation);
      resolved ? await this.renderer.goTo(resolved) : await this.renderer.next();
    } else
      await this.renderer.next();
    if (annotations) {
      annotations.sort((a, b) => compare(a.value, b.value));
      for (let annotation of annotations)
        await this.annotations.add(annotation, !0);
    }
  }
  #onRelocated(range, index, fraction) {
    if (!this.#sectionProgress)
      return;
    let progress = this.#sectionProgress.getProgress(index, fraction), tocItem = this.#tocProgress.getProgress(index, range), pageItem = this.#pageProgress.getProgress(index, range), cfi = this.getCFI(index, range);
    this.emit?.({ type: "relocated", ...progress, tocItem, pageItem, cfi });
  }
  #onLoad(doc, index) {
    let { book } = this;
    doc.documentElement.lang ||= this.language, doc.documentElement.dir ||= this.isCJK ? "" : this.textDirection, this.renderer.setStyle(this.#css);
    let section = book.sections[index];
    for (let a of doc.querySelectorAll("a[href]"))
      a.addEventListener("click", (e) => {
        e.preventDefault();
        let href = a.getAttribute("href"), uri = section?.resolveHref?.(href) ?? href;
        if (book?.isExternal?.(uri))
          this.emit?.({ type: "external-link", uri });
        else if (SSV.isRef(a)) {
          let { index: index2, anchor } = book.resolveHref(uri);
          Promise.resolve(book.sections[index2].createDocument()).then((doc2) => [anchor(doc2), doc2.contentType]).then(([el, type]) => [el?.innerHTML, type, SSV.isNote(el)]).then(
            ([content, contentType, isNote]) => content ? this.emit?.({
              type: "reference",
              href: isNote ? null : uri,
              content,
              contentType,
              element: a
            }) : null
          ).catch((e2) => console.error(e2));
          return;
        } else
          this.goTo(uri);
      });
    this.emit?.({ type: "loaded", doc, index });
  }
  #drawAnnotation(doc, overlayer, annotation) {
    let { value } = annotation, anchor = this.annotations.getAnchor(value), range = doc ? anchor(doc) : anchor, [func, opts] = this.emit({ type: "draw-annotation", annotation });
    overlayer.add(value, range, func, opts);
  }
  #getOverlayer(index) {
    let obj = this.renderer.getOverlayer();
    if (obj.index === index)
      return obj;
  }
  #createOverlayer(doc, index) {
    let overlayer = new Overlayer();
    for (let annotation of this.annotations.getByIndex(index))
      this.#drawAnnotation(doc, overlayer, annotation);
    return doc.addEventListener(
      "click",
      (e) => {
        let [value, range] = overlayer.hitTest(e);
        value && this.emit?.({ type: "show-annotation", value, range });
      },
      !1
    ), overlayer;
  }
  async showAnnotation(annotation) {
    let { value } = annotation, { index, anchor } = await this.goTo(value), { doc } = this.#getOverlayer(index), range = anchor(doc);
    this.emit?.({ type: "show-annotation", value, range });
  }
  getCFI(index, range) {
    if (!range)
      return "";
    let baseCFI = this.book.sections[index].cfi ?? fake.fromIndex(index);
    return joinIndir(baseCFI, fromRange(range));
  }
  resolveCFI(cfi) {
    if (this.book.resolveCFI)
      return this.book.resolveCFI(cfi);
    {
      let parts = parse(cfi);
      return { index: fake.toIndex((parts.parent ?? parts).shift()), anchor: (doc) => toRange(doc, parts) };
    }
  }
  resolveNavigation(target) {
    try {
      return typeof target == "number" ? { index: target } : isCFI.test(target) ? this.resolveCFI(target) : this.book.resolveHref(target);
    } catch (e) {
      console.error(e), console.error(`Could not resolve target ${target}`);
    }
  }
  async goTo(target) {
    let resolved = this.resolveNavigation(target);
    try {
      return await this.renderer.goTo(resolved), resolved;
    } catch (e) {
      console.error(e), console.error(`Could not go to ${target}`);
    }
  }
  async goToFraction(frac) {
    let [index, anchor] = this.#sectionProgress.getSection(frac);
    return this.renderer.goTo({ index, anchor });
  }
  async select(target) {
    try {
      let obj = await this.resolveNavigation(target);
      await this.renderer.goTo({ ...obj, select: !0 });
    } catch (e) {
      console.error(e), console.error(`Could not go to ${target}`);
    }
  }
  goLeft() {
    return this.book.dir === "rtl" ? this.renderer.next() : this.renderer.prev();
  }
  goRight() {
    return this.book.dir === "rtl" ? this.renderer.prev() : this.renderer.next();
  }
  setAppearance({ layout, css }) {
    this.isFixedLayout || (Object.assign(this.renderer.layout, layout), this.#css = css, this.renderer.setStyle(css), this.renderer.render());
  }
  async *#searchSection(matcher, query, index) {
    let doc = await this.book.sections[index].createDocument();
    for (let { range, excerpt } of matcher(doc, query))
      yield { cfi: this.getCFI(index, range), excerpt };
  }
  async *#searchBook(matcher, query) {
    let { sections } = this.book;
    for (let [index, { createDocument }] of sections.entries()) {
      if (!createDocument)
        continue;
      let doc = await createDocument(), subitems = Array.from(
        matcher(doc, query),
        ({ range, excerpt }) => ({ cfi: this.getCFI(index, range), excerpt })
      );
      yield { progress: (index + 1) / sections.length }, subitems.length && (yield { index, subitems });
    }
  }
  async *search(opts) {
    let { query, index } = opts, matcher = searchMatcher(textWalker, {
      defaultLocale: this.language,
      ...opts
    }), iter = index != null ? this.#searchSection(matcher, query, index) : this.#searchBook(matcher, query);
    for await (let result of iter)
      yield "subitems" in result ? {
        label: this.#tocProgress.getProgress(result.index)?.label ?? "",
        subitems: result.subitems
      } : result;
  }
};

// libs/foliate-js/ui/menu.js
var createMenuItemRadioGroup = (label, arr, onclick) => {
  let group = document.createElement("ul");
  group.setAttribute("role", "group"), group.setAttribute("aria-label", label);
  let map = /* @__PURE__ */ new Map(), select = (value) => {
    onclick(value);
    let item = map.get(value);
    for (let child of group.children)
      child.setAttribute("aria-checked", child === item ? "true" : "false");
  };
  for (let [label2, value] of arr) {
    let item = document.createElement("li");
    item.setAttribute("role", "menuitemradio"), item.innerText = label2, item.onclick = () => select(value), map.set(value, item), group.append(item);
  }
  return { element: group, select };
}, createMenu = (arr) => {
  let groups = {}, element = document.createElement("ul");
  element.setAttribute("role", "menu");
  let hide = () => element.classList.remove("show"), hideAnd = (f) => (...args) => (hide(), f(...args));
  for (let { name, label, type, items, onclick } of arr) {
    let widget = type === "radio" ? createMenuItemRadioGroup(label, items, hideAnd(onclick)) : null;
    name && (groups[name] = widget), element.append(widget.element);
  }
  return window.addEventListener("blur", () => hide()), window.addEventListener("click", (e) => {
    element.parentNode.contains(e.target) || hide();
  }), { element, groups };
};

// env.ts
function getEnv() {
  return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : define_process_env_default;
}
var env = getEnv();

// libs/foliate-js/comic-book.js
var makeComicBook = ({ entries, loadBlob, getSize }, file) => {
  let cache = /* @__PURE__ */ new Map(), urls = /* @__PURE__ */ new Map(), load = async (name) => {
    if (cache.has(name))
      return cache.get(name);
    let src = URL.createObjectURL(await loadBlob(name)), page = URL.createObjectURL(
      new Blob([`<img src="${src}">`], { type: "text/html" })
    );
    return urls.set(name, [src, page]), cache.set(name, page), page;
  }, unload = (name) => {
    urls.get(name)?.forEach?.((url) => URL.revokeObjectURL(url)), urls.delete(name), cache.delete(name);
  }, exts = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".svg"], files = entries.map((entry) => entry.filename).filter((name) => exts.some((ext) => name.endsWith(ext))).sort(), book = {};
  return book.getCover = () => loadBlob(files[0]), book.metadata = { title: file.name }, book.sections = files.map((name) => ({
    id: name,
    load: () => load(name),
    unload: () => unload(name),
    size: getSize(name)
  })), book.toc = files.map((name) => ({ label: name, href: name })), book.rendition = { layout: "pre-paginated" }, book.resolveHref = (href) => ({ index: book.sections.findIndex((s) => s.id === href) }), book.splitTOCHref = (href) => [href, null], book.getTOCFragment = (doc) => doc.documentElement, book;
};

// libs/foliate-js/fb2.js
var trim = (str) => str?.trim()?.replace(/\s{2,}/g, " "), getElementText = (el) => trim(el?.textContent), NS2 = {
  XLINK: "http://www.w3.org/1999/xlink",
  EPUB: "http://www.idpf.org/2007/ops"
}, MIME = {
  XML: "application/xml",
  XHTML: "application/xhtml+xml"
}, STYLE = {
  strong: ["strong", "self"],
  emphasis: ["em", "self"],
  style: ["span", "self"],
  a: "anchor",
  strikethrough: ["s", "self"],
  sub: ["sub", "self"],
  sup: ["sup", "self"],
  code: ["code", "self"],
  image: "image"
}, TABLE = {
  tr: ["tr", ["align"]],
  th: ["th", ["colspan", "rowspan", "align", "valign"]],
  td: ["td", ["colspan", "rowspan", "align", "valign"]]
}, POEM = {
  epigraph: ["blockquote"],
  subtitle: ["h2", STYLE],
  "text-author": ["p", STYLE],
  date: ["p", STYLE],
  stanza: "stanza"
}, SECTION = {
  title: ["header", {
    p: ["h1", STYLE],
    "empty-line": ["br"]
  }],
  epigraph: ["blockquote", "self"],
  image: "image",
  annotation: ["aside"],
  section: ["section", "self"],
  p: ["p", STYLE],
  poem: ["blockquote", POEM],
  subtitle: ["h2", STYLE],
  cite: ["blockquote", "self"],
  "empty-line": ["br"],
  table: ["table", TABLE],
  "text-author": ["p", STYLE]
};
POEM.epigraph.push(SECTION);
var BODY = {
  image: "image",
  title: ["section", {
    p: ["h1", STYLE],
    "empty-line": ["br"]
  }],
  epigraph: ["section", SECTION],
  section: ["section", SECTION]
}, getImageSrc = (el) => {
  let href = el.getAttributeNS(NS2.XLINK, "href"), [, id] = href.split("#"), bin = el.getRootNode().getElementById(id);
  return bin ? `data:${bin.getAttribute("content-type")};base64,${bin.textContent}` : href;
}, FB2Converter = class {
  constructor(fb2) {
    this.fb2 = fb2, this.doc = document.implementation.createDocument(NS2.XHTML, "html");
  }
  image(node) {
    let el = this.doc.createElement("img");
    return el.alt = node.getAttribute("alt"), el.title = node.getAttribute("title"), el.setAttribute("src", getImageSrc(node)), el;
  }
  anchor(node) {
    let el = this.convert(node, { a: ["a", STYLE] });
    return el.setAttribute("href", node.getAttributeNS(NS2.XLINK, "href")), node.getAttribute("type") === "note" && el.setAttributeNS(NS2.EPUB, "epub:type", "noteref"), el;
  }
  stanza(node) {
    let el = this.convert(node, {
      stanza: ["p", {
        title: ["header", {
          p: ["strong", STYLE],
          "empty-line": ["br"]
        }],
        subtitle: ["p", STYLE]
      }]
    });
    for (let child of node.children)
      child.nodeName === "v" && (el.append(this.doc.createTextNode(child.textContent)), el.append(this.doc.createElement("br")));
    return el;
  }
  convert(node, def) {
    if (node.nodeType === 3)
      return this.doc.createTextNode(node.textContent);
    if (node.nodeType === 4)
      return this.doc.createCDATASection(node.textContent);
    if (node.nodeType === 8)
      return this.doc.createComment(node.textContent);
    let d2 = def?.[node.nodeName];
    if (!d2)
      return null;
    if (typeof d2 == "string")
      return this[d2](node);
    let [name, opts] = d2, el = this.doc.createElement(name);
    if (node.id && (el.id = node.id), el.classList.add(node.nodeName), Array.isArray(opts))
      for (let attr of opts)
        el.setAttribute(attr, node.getAttribute(attr));
    let childDef = opts === "self" ? def : Array.isArray(opts) ? null : opts, child = node.firstChild;
    for (; child; ) {
      let childEl = this.convert(child, childDef);
      childEl && el.append(childEl), child = child.nextSibling;
    }
    return el;
  }
}, parseXML = async (blob) => {
  let buffer = await blob.arrayBuffer(), str = new TextDecoder("utf-8").decode(buffer), parser2 = new DOMParser(), doc = parser2.parseFromString(str, MIME.XML), encoding = doc.xmlEncoding || str.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];
  if (encoding && encoding.toLowerCase() !== "utf-8") {
    let str2 = new TextDecoder(encoding).decode(buffer);
    return parser2.parseFromString(str2, MIME.XML);
  }
  return doc;
}, style = URL.createObjectURL(new Blob([`
@namespace epub "http://www.idpf.org/2007/ops";
body > img, section > img {
    display: block;
    margin: auto;
}
.title {
    text-align: center;
}
body > section > .title, body.notesBodyType > .title {
    margin: 3em 0;
}
body.notesBodyType > section .title {
    text-align: left;
    margin: 1em 0;
}
p {
    text-indent: 1em;
    margin: 0;
}
:not(p) + p, p:first-child {
    text-indent: 0;
}
.poem p {
    text-indent: 0;
    margin: 1em 0;
}
.text-author, .date {
    text-align: end;
}
.text-author:before {
    content: "\u2014";
}
table {
    border-collapse: collapse;
}
td, th {
    padding: .25em;
}
a[epub|type~="noteref"] {
    font-size: .75em;
    vertical-align: super;
}
body:not(.notesBodyType) > .title, body:not(.notesBodyType) > .epigraph {
    margin: 3em 0;
}
`], { type: "text/css" })), template = (html) => `<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${style}" rel="stylesheet" type="text/css"/></head>
    <body>${html}</body>
</html>`, dataID = "data-foliate-id", makeFB2 = async (blob) => {
  let book = {}, doc = await parseXML(blob), converter = new FB2Converter(doc), $4 = (x2) => doc.querySelector(x2), $$ = (x2) => [...doc.querySelectorAll(x2)], getPerson = (el) => {
    let nick = getElementText(el.querySelector("nickname"));
    if (nick)
      return nick;
    let first = getElementText(el.querySelector("first-name")), middle = getElementText(el.querySelector("middle-name")), last = getElementText(el.querySelector("last-name")), name = [first, middle, last].filter((x2) => x2).join(" "), sortAs = last ? [last, [first, middle].filter((x2) => x2).join(" ")].join(", ") : null;
    return { name, sortAs };
  }, getDate = (el) => el?.getAttribute("value") ?? getElementText(el), annotation = $4("title-info annotation");
  book.metadata = {
    title: getElementText($4("title-info book-title")),
    identifier: getElementText($4("document-info id")),
    language: getElementText($4("title-info lang")),
    author: $$("title-info author").map(getPerson),
    translator: $$("title-info translator").map(getPerson),
    producer: $$("document-info author").map(getPerson).concat($$("document-info program-used").map(getElementText)),
    publisher: getElementText($4("publish-info publisher")),
    published: getDate($4("title-info date")),
    modified: getDate($4("document-info date")),
    description: annotation ? converter.convert(
      annotation,
      { annotation: ["div", SECTION] }
    ).innerHTML : null,
    subject: $$("title-info genre").map(getElementText)
  }, book.getCover = () => fetch(getImageSrc($4("coverpage image"))).then((res) => res.blob());
  let bodyData = Array.from(doc.querySelectorAll("body"), (body) => {
    let converted = converter.convert(body, { body: ["body", BODY] });
    return [Array.from(converted.children, (el) => {
      let ids = [el, ...el.querySelectorAll("[id]")].map((el2) => el2.id);
      return { el, ids };
    }), converted];
  }), sectionData = bodyData[0][0].map(({ el, ids }) => {
    let titles = Array.from(
      el.querySelectorAll(":scope > section > .title"),
      (el2, index) => (el2.setAttribute(dataID, index), { title: getElementText(el2), index })
    );
    return { ids, titles, el };
  }).concat(bodyData.slice(1).map(([sections, body]) => {
    let ids = sections.map((s) => s.ids).flat();
    return body.classList.add("notesBodyType"), { ids, el: body, linear: "no" };
  })).map(({ ids, titles, el, linear }) => {
    let str = template(el.outerHTML), blob2 = new Blob([str], { type: MIME.XHTML }), url = URL.createObjectURL(blob2), title = trim(el.querySelector(".title, .subtitle, p")?.textContent ?? (el.classList.contains("title") ? el.textContent : ""));
    return {
      ids,
      title,
      titles,
      load: () => url,
      createDocument: () => new DOMParser().parseFromString(str, MIME.XHTML),
      // doo't count image data as it'd skew the size too much
      size: blob2.size - Array.from(
        el.querySelectorAll("[src]"),
        (el2) => el2.getAttribute("src")?.length ?? 0
      ).reduce((a, b) => a + b, 0),
      linear
    };
  }), idMap = /* @__PURE__ */ new Map();
  return book.sections = sectionData.map((section, index) => {
    let { ids, load, createDocument, size, linear } = section;
    for (let id of ids)
      id && idMap.set(id, index);
    return { id: index, load, createDocument, size, linear };
  }), book.toc = sectionData.map(({ title, titles }, index) => {
    let id = index.toString();
    return {
      label: title,
      href: id,
      subitems: titles?.length ? titles.map(({ title: title2, index: index2 }) => ({
        label: title2,
        href: `${id}#${index2}`
      })) : null
    };
  }).filter((item) => item), book.resolveHref = (href) => {
    let [a, b] = href.split("#");
    return a ? { index: Number(a), anchor: (doc2) => doc2.querySelector(`[${dataID}="${b}"]`) } : { index: idMap.get(b), anchor: (doc2) => doc2.getElementById(b) };
  }, book.splitTOCHref = (href) => href?.split("#")?.map((x2) => Number(x2)) ?? [], book.getTOCFragment = (doc2, id) => doc2.querySelector(`[${dataID}="${id}"]`), book;
};

// libs/foliate-js/mobi.js
var unescapeHTML = (str) => {
  if (!str)
    return "";
  let textarea = document.createElement("textarea");
  return textarea.innerHTML = str, textarea.value;
}, MIME2 = {
  XML: "application/xml",
  XHTML: "application/xhtml+xml",
  HTML: "text/html",
  CSS: "text/css",
  SVG: "image/svg+xml"
}, PDB_HEADER = {
  name: [0, 32, "string"],
  type: [60, 4, "string"],
  creator: [64, 4, "string"],
  numRecords: [76, 2, "uint"]
}, PALMDOC_HEADER = {
  compression: [0, 2, "uint"],
  numTextRecords: [8, 2, "uint"],
  recordSize: [10, 2, "uint"],
  encryption: [12, 2, "uint"]
}, MOBI_HEADER = {
  magic: [16, 4, "string"],
  length: [20, 4, "uint"],
  type: [24, 4, "uint"],
  encoding: [28, 4, "uint"],
  uid: [32, 4, "uint"],
  version: [36, 4, "uint"],
  titleOffset: [84, 4, "uint"],
  titleLength: [88, 4, "uint"],
  localeRegion: [94, 1, "uint"],
  localeLanguage: [95, 1, "uint"],
  resourceStart: [108, 4, "uint"],
  huffcdic: [112, 4, "uint"],
  numHuffcdic: [116, 4, "uint"],
  exthFlag: [128, 4, "uint"],
  trailingFlags: [240, 4, "uint"],
  indx: [244, 4, "uint"]
}, KF8_HEADER = {
  resourceStart: [108, 4, "uint"],
  fdst: [192, 4, "uint"],
  numFdst: [196, 4, "uint"],
  frag: [248, 4, "uint"],
  skel: [252, 4, "uint"],
  guide: [260, 4, "uint"]
}, EXTH_HEADER = {
  magic: [0, 4, "string"],
  length: [4, 4, "uint"],
  count: [8, 4, "uint"]
}, INDX_HEADER = {
  magic: [0, 4, "string"],
  length: [4, 4, "uint"],
  type: [8, 4, "uint"],
  idxt: [20, 4, "uint"],
  numRecords: [24, 4, "uint"],
  encoding: [28, 4, "uint"],
  language: [32, 4, "uint"],
  total: [36, 4, "uint"],
  ordt: [40, 4, "uint"],
  ligt: [44, 4, "uint"],
  numLigt: [48, 4, "uint"],
  numCncx: [52, 4, "uint"]
}, TAGX_HEADER = {
  magic: [0, 4, "string"],
  length: [4, 4, "uint"],
  numControlBytes: [8, 4, "uint"]
}, HUFF_HEADER = {
  magic: [0, 4, "string"],
  offset1: [8, 4, "uint"],
  offset2: [12, 4, "uint"]
}, CDIC_HEADER = {
  magic: [0, 4, "string"],
  length: [4, 4, "uint"],
  numEntries: [8, 4, "uint"],
  codeLength: [12, 4, "uint"]
}, FDST_HEADER = {
  magic: [0, 4, "string"],
  numEntries: [8, 4, "uint"]
}, FONT_HEADER = {
  flags: [8, 4, "uint"],
  dataStart: [12, 4, "uint"],
  keyLength: [16, 4, "uint"],
  keyStart: [20, 4, "uint"]
}, MOBI_ENCODING = {
  1252: "windows-1252",
  65001: "utf-8"
}, EXTH_RECORD_TYPE = {
  100: ["creator", "string", !0],
  101: ["publisher"],
  103: ["description"],
  104: ["isbn"],
  105: ["subject", "string", !0],
  106: ["date"],
  108: ["contributor", "string", !0],
  109: ["rights"],
  110: ["subjectCode", "string", !0],
  112: ["source", "string", !0],
  113: ["asin"],
  121: ["boundary", "uint"],
  122: ["fixedLayout"],
  125: ["numResources", "uint"],
  126: ["originalResolution"],
  127: ["zeroGutter"],
  128: ["zeroMargin"],
  129: ["coverURI"],
  132: ["regionMagnification"],
  201: ["coverOffset", "uint"],
  202: ["thumbnailOffset", "uint"],
  503: ["title"],
  524: ["language", "string", !0],
  527: ["pageProgressionDirection"]
}, MOBI_LANG = {
  1: [
    "ar",
    "ar-SA",
    "ar-IQ",
    "ar-EG",
    "ar-LY",
    "ar-DZ",
    "ar-MA",
    "ar-TN",
    "ar-OM",
    "ar-YE",
    "ar-SY",
    "ar-JO",
    "ar-LB",
    "ar-KW",
    "ar-AE",
    "ar-BH",
    "ar-QA"
  ],
  2: ["bg"],
  3: ["ca"],
  4: ["zh", "zh-TW", "zh-CN", "zh-HK", "zh-SG"],
  5: ["cs"],
  6: ["da"],
  7: ["de", "de-DE", "de-CH", "de-AT", "de-LU", "de-LI"],
  8: ["el"],
  9: [
    "en",
    "en-US",
    "en-GB",
    "en-AU",
    "en-CA",
    "en-NZ",
    "en-IE",
    "en-ZA",
    "en-JM",
    null,
    "en-BZ",
    "en-TT",
    "en-ZW",
    "en-PH"
  ],
  10: [
    "es",
    "es-ES",
    "es-MX",
    null,
    "es-GT",
    "es-CR",
    "es-PA",
    "es-DO",
    "es-VE",
    "es-CO",
    "es-PE",
    "es-AR",
    "es-EC",
    "es-CL",
    "es-UY",
    "es-PY",
    "es-BO",
    "es-SV",
    "es-HN",
    "es-NI",
    "es-PR"
  ],
  11: ["fi"],
  12: ["fr", "fr-FR", "fr-BE", "fr-CA", "fr-CH", "fr-LU", "fr-MC"],
  13: ["he"],
  14: ["hu"],
  15: ["is"],
  16: ["it", "it-IT", "it-CH"],
  17: ["ja"],
  18: ["ko"],
  19: ["nl", "nl-NL", "nl-BE"],
  20: ["no", "nb", "nn"],
  21: ["pl"],
  22: ["pt", "pt-BR", "pt-PT"],
  23: ["rm"],
  24: ["ro"],
  25: ["ru"],
  26: ["hr", null, "sr"],
  27: ["sk"],
  28: ["sq"],
  29: ["sv", "sv-SE", "sv-FI"],
  30: ["th"],
  31: ["tr"],
  32: ["ur"],
  33: ["id"],
  34: ["uk"],
  35: ["be"],
  36: ["sl"],
  37: ["et"],
  38: ["lv"],
  39: ["lt"],
  41: ["fa"],
  42: ["vi"],
  43: ["hy"],
  44: ["az"],
  45: ["eu"],
  46: ["hsb"],
  47: ["mk"],
  48: ["st"],
  49: ["ts"],
  50: ["tn"],
  52: ["xh"],
  53: ["zu"],
  54: ["af"],
  55: ["ka"],
  56: ["fo"],
  57: ["hi"],
  58: ["mt"],
  59: ["se"],
  62: ["ms"],
  63: ["kk"],
  65: ["sw"],
  67: ["uz", null, "uz-UZ"],
  68: ["tt"],
  69: ["bn"],
  70: ["pa"],
  71: ["gu"],
  72: ["or"],
  73: ["ta"],
  74: ["te"],
  75: ["kn"],
  76: ["ml"],
  77: ["as"],
  78: ["mr"],
  79: ["sa"],
  82: ["cy", "cy-GB"],
  83: ["gl", "gl-ES"],
  87: ["kok"],
  97: ["ne"],
  98: ["fy"]
}, concatTypedArray = (a, b) => {
  let result = new a.constructor(a.length + b.length);
  return result.set(a), result.set(b, a.length), result;
}, concatTypedArray3 = (a, b, c) => {
  let result = new a.constructor(a.length + b.length + c.length);
  return result.set(a), result.set(b, a.length), result.set(c, a.length + b.length), result;
}, decoder = new TextDecoder(), getString = (buffer) => decoder.decode(buffer), getUint = (buffer) => {
  if (!buffer)
    return;
  let l = buffer.byteLength, func = l === 4 ? "getUint32" : l === 2 ? "getUint16" : "getUint8";
  return new DataView(buffer)[func](0);
}, getStruct = (def, buffer) => Object.fromEntries(Array.from(Object.entries(def)).map(([key, [start, len, type]]) => [
  key,
  (type === "string" ? getString : getUint)(buffer.slice(start, start + len))
])), getDecoder = (x2) => new TextDecoder(MOBI_ENCODING[x2]), getVarLen = (byteArray, i = 0) => {
  let value = 0, length = 0;
  for (let byte of byteArray.subarray(i, i + 4))
    if (value = value << 7 | (byte & 127) >>> 0, length++, byte & 128)
      break;
  return { value, length };
}, getVarLenFromEnd = (byteArray) => {
  let value = 0;
  for (let byte of byteArray.subarray(-4))
    byte & 128 && (value = 0), value = value << 7 | byte & 127;
  return value;
}, countBitsSet = (x2) => {
  let count = 0;
  for (; x2 > 0; x2 = x2 >> 1)
    (x2 & 1) === 1 && count++;
  return count;
}, countUnsetEnd = (x2) => {
  let count = 0;
  for (; !(x2 & 1); )
    x2 = x2 >> 1, count++;
  return count;
}, decompressPalmDOC = (array) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let byte = array[i];
    if (byte === 0)
      output.push(0);
    else if (byte <= 8)
      for (let x2 of array.subarray(i + 1, (i += byte) + 1))
        output.push(x2);
    else if (byte <= 127)
      output.push(byte);
    else if (byte <= 191) {
      let bytes = byte << 8 | array[i++ + 1], distance = (bytes & 16383) >>> 3, length = (bytes & 7) + 3;
      for (let j2 = 0; j2 < length; j2++)
        output.push(output[output.length - distance]);
    } else
      output.push(32, byte ^ 128);
  }
  return Uint8Array.from(output);
}, read32Bits = (byteArray, from) => {
  let startByte = from >> 3, end = from + 32, endByte = end >> 3, bits = 0n;
  for (let i = startByte; i <= endByte; i++)
    bits = bits << 8n | BigInt(byteArray[i] ?? 0);
  return bits >> 8n - BigInt(end & 7) & 0xffffffffn;
}, huffcdic = async (mobi, loadRecord) => {
  let huffRecord = await loadRecord(mobi.huffcdic), { magic, offset1, offset2 } = getStruct(HUFF_HEADER, huffRecord);
  if (magic !== "HUFF")
    throw new Error("Invalid HUFF record");
  let table1 = Array.from({ length: 256 }, (_, i) => offset1 + i * 4).map((offset) => getUint(huffRecord.slice(offset, offset + 4))).map((x2) => [x2 & 128, x2 & 31, x2 >>> 8]), table2 = [null].concat(Array.from({ length: 32 }, (_, i) => offset2 + i * 8).map((offset) => [
    getUint(huffRecord.slice(offset, offset + 4)),
    getUint(huffRecord.slice(offset + 4, offset + 8))
  ])), dictionary = [];
  for (let i = 1; i < mobi.numHuffcdic; i++) {
    let record = await loadRecord(mobi.huffcdic + i), cdic = getStruct(CDIC_HEADER, record);
    if (cdic.magic !== "CDIC")
      throw new Error("Invalid CDIC record");
    let n = Math.min(1 << cdic.codeLength, cdic.numEntries - dictionary.length), buffer = record.slice(cdic.length);
    for (let i2 = 0; i2 < n; i2++) {
      let offset = getUint(buffer.slice(i2 * 2, i2 * 2 + 2)), x2 = getUint(buffer.slice(offset, offset + 2)), length = x2 & 32767, decompressed = x2 & 32768, value = new Uint8Array(
        buffer.slice(offset + 2, offset + 2 + length)
      );
      dictionary.push([value, decompressed]);
    }
  }
  let decompress = (byteArray) => {
    let output = new Uint8Array(), bitLength = byteArray.byteLength * 8;
    for (let i = 0; i < bitLength; ) {
      let bits = Number(read32Bits(byteArray, i)), [found, codeLength, value] = table1[bits >>> 24];
      if (!found) {
        for (; bits >>> 32 - codeLength < table2[codeLength][0]; )
          codeLength += 1;
        value = table2[codeLength][1];
      }
      if ((i += codeLength) > bitLength)
        break;
      let code = value - (bits >>> 32 - codeLength), [result, decompressed] = dictionary[code];
      decompressed || (result = decompress(result), dictionary[code] = [result, !0]), output = concatTypedArray(output, result);
    }
    return output;
  };
  return decompress;
}, getIndexData = async (indxIndex, loadRecord) => {
  let indxRecord = await loadRecord(indxIndex), indx = getStruct(INDX_HEADER, indxRecord);
  if (indx.magic !== "INDX")
    throw new Error("Invalid INDX record");
  let decoder2 = getDecoder(indx.encoding), tagxBuffer = indxRecord.slice(indx.length), tagx = getStruct(TAGX_HEADER, tagxBuffer);
  if (tagx.magic !== "TAGX")
    throw new Error("Invalid TAGX section");
  let numTags = (tagx.length - 12) / 4, tagTable = Array.from({ length: numTags }, (_, i) => new Uint8Array(tagxBuffer.slice(12 + i * 4, 12 + i * 4 + 4))), cncx = {}, cncxRecordOffset = 0;
  for (let i = 0; i < indx.numCncx; i++) {
    let record = await loadRecord(indxIndex + indx.numRecords + i + 1), array = new Uint8Array(record);
    for (let pos = 0; pos < array.byteLength; ) {
      let index = pos, { value, length } = getVarLen(array, pos);
      pos += length;
      let result = record.slice(pos, pos + value);
      pos += value, cncx[cncxRecordOffset + index] = decoder2.decode(result);
    }
    cncxRecordOffset += 65536;
  }
  let table = [];
  for (let i = 0; i < indx.numRecords; i++) {
    let record = await loadRecord(indxIndex + 1 + i), array = new Uint8Array(record), indx2 = getStruct(INDX_HEADER, record);
    if (indx2.magic !== "INDX")
      throw new Error("Invalid INDX record");
    for (let j2 = 0; j2 < indx2.numRecords; j2++) {
      let offsetOffset = indx2.idxt + 4 + 2 * j2, offset = getUint(record.slice(offsetOffset, offsetOffset + 2)), length = getUint(record.slice(offset, offset + 1)), name = getString(record.slice(offset + 1, offset + 1 + length)), tags = [], startPos = offset + 1 + length, controlByteIndex = 0, pos = startPos + tagx.numControlBytes;
      for (let [tag, numValues, mask, end] of tagTable) {
        if (end & 1) {
          controlByteIndex++;
          continue;
        }
        let offset2 = startPos + controlByteIndex, value = getUint(record.slice(offset2, offset2 + 1)) & mask;
        if (value === mask)
          if (countBitsSet(mask) > 1) {
            let { value: value2, length: length2 } = getVarLen(array, pos);
            tags.push([tag, null, value2, numValues]), pos += length2;
          } else
            tags.push([tag, 1, null, numValues]);
        else
          tags.push([tag, value >> countUnsetEnd(mask), null, numValues]);
      }
      let tagMap = {};
      for (let [tag, valueCount, valueBytes, numValues] of tags) {
        let values = [];
        if (valueCount != null)
          for (let i2 = 0; i2 < valueCount * numValues; i2++) {
            let { value, length: length2 } = getVarLen(array, pos);
            values.push(value), pos += length2;
          }
        else {
          let count = 0;
          for (; count < valueBytes; ) {
            let { value, length: length2 } = getVarLen(array, pos);
            values.push(value), pos += length2, count += length2;
          }
        }
        tagMap[tag] = values;
      }
      table.push({ name, tagMap });
    }
  }
  return { table, cncx };
}, getNCX = async (indxIndex, loadRecord) => {
  let { table, cncx } = await getIndexData(indxIndex, loadRecord), items = table.map(({ tagMap }, index) => ({
    index,
    offset: tagMap[1]?.[0],
    size: tagMap[2]?.[0],
    label: cncx[tagMap[3]] ?? "",
    headingLevel: tagMap[4]?.[0],
    pos: tagMap[6],
    parent: tagMap[21]?.[0],
    firstChild: tagMap[22]?.[0],
    lastChild: tagMap[23]?.[0]
  })), getChildren = (item) => (item.firstChild == null || (item.children = items.filter((x2) => x2.parent === item.index).map(getChildren)), item);
  return items.filter((item) => item.headingLevel === 0).map(getChildren);
}, getEXTH = (buf, encoding) => {
  let { magic, count } = getStruct(EXTH_HEADER, buf);
  if (magic !== "EXTH")
    throw new Error("Invalid EXTH header");
  let decoder2 = getDecoder(encoding), results = {}, offset = 12;
  for (let i = 0; i < count; i++) {
    let type = getUint(buf.slice(offset, offset + 4)), length = getUint(buf.slice(offset + 4, offset + 8));
    if (type in EXTH_RECORD_TYPE) {
      let [name, typ, many] = EXTH_RECORD_TYPE[type], data = buf.slice(offset + 8, offset + length), value = typ === "uint" ? getUint(data) : decoder2.decode(data);
      many ? (results[name] ??= [], results[name].push(value)) : results[name] = value;
    }
    offset += length;
  }
  return results;
}, getFont = async (buf, unzlib) => {
  let { flags, dataStart, keyLength, keyStart } = getStruct(FONT_HEADER, buf), array = new Uint8Array(buf.slice(dataStart));
  if (flags & 2) {
    let bytes = keyLength === 16 ? 1024 : 1040, key = new Uint8Array(buf.slice(keyStart, keyStart + keyLength)), length = Math.min(bytes, array.length);
    for (var i = 0; i < length; i++)
      array[i] = array[i] ^ key[i % key.length];
  }
  if (flags & 1)
    try {
      return await unzlib(array);
    } catch (e) {
      console.warn(e), console.warn("Failed to decompress font");
    }
  return array;
}, isMOBI = async (file) => getString(await file.slice(60, 68).arrayBuffer()) === "BOOKMOBI", PDB = class {
  #file;
  #offsets;
  pdb;
  async open(file) {
    this.#file = file;
    let pdb = getStruct(PDB_HEADER, await file.slice(0, 78).arrayBuffer());
    this.pdb = pdb;
    let buffer = await file.slice(78, 78 + pdb.numRecords * 8).arrayBuffer();
    this.#offsets = Array.from(
      { length: pdb.numRecords },
      (_, i) => getUint(buffer.slice(i * 8, i * 8 + 4))
    ).map((x2, i, a) => [x2, a[i + 1]]);
  }
  loadRecord(index) {
    let offsets = this.#offsets[index];
    if (!offsets)
      throw new RangeError("Record index out of bounds");
    return this.#file.slice(...offsets).arrayBuffer();
  }
  async loadMagic(index) {
    let start = this.#offsets[index][0];
    return getString(await this.#file.slice(start, start + 4).arrayBuffer());
  }
}, MOBI = class extends PDB {
  #start = 0;
  #resourceStart;
  #decoder;
  #encoder;
  #decompress;
  #removeTrailingEntries;
  constructor({ unzlib }) {
    super(), this.unzlib = unzlib;
  }
  async open(file) {
    await super.open(file), this.headers = this.#getHeaders(await super.loadRecord(0)), this.#resourceStart = this.headers.mobi.resourceStart;
    let isKF8 = this.headers.mobi.version >= 8;
    if (!isKF8) {
      let boundary = this.headers.exth?.boundary;
      if (boundary < 4294967295)
        try {
          this.headers = this.#getHeaders(await super.loadRecord(boundary)), this.#start = boundary, isKF8 = !0;
        } catch (e) {
          console.warn(e), console.warn("Failed to open KF8; falling back to MOBI");
        }
    }
    return await this.#setup(), isKF8 ? new KF8(this).init() : new MOBI6(this).init();
  }
  #getHeaders(buf) {
    let palmdoc = getStruct(PALMDOC_HEADER, buf), mobi = getStruct(MOBI_HEADER, buf);
    if (mobi.magic !== "MOBI")
      throw new Error("Missing MOBI header");
    let { titleOffset, titleLength, localeLanguage, localeRegion } = mobi;
    mobi.title = buf.slice(titleOffset, titleOffset + titleLength);
    let lang = MOBI_LANG[localeLanguage];
    mobi.language = lang?.[localeRegion >> 2] ?? lang?.[0];
    let exth = mobi.exthFlag & 64 ? getEXTH(buf.slice(mobi.length + 16), mobi.encoding) : null, kf8 = mobi.version >= 8 ? getStruct(KF8_HEADER, buf) : null;
    return { palmdoc, mobi, exth, kf8 };
  }
  async #setup() {
    let { palmdoc, mobi } = this.headers;
    this.#decoder = getDecoder(mobi.encoding), this.#encoder = new TextEncoder();
    let { compression } = palmdoc;
    if (this.#decompress = compression === 1 ? (f) => f : compression === 2 ? decompressPalmDOC : compression === 17480 ? await huffcdic(mobi, this.loadRecord.bind(this)) : null, !this.#decompress)
      throw new Error("Unknown compression type");
    let { trailingFlags } = mobi, multibyte = trailingFlags & 1, numTrailingEntries = countBitsSet(trailingFlags >>> 1);
    this.#removeTrailingEntries = (array) => {
      for (let i = 0; i < numTrailingEntries; i++) {
        let length = getVarLenFromEnd(array);
        array = array.subarray(0, -length);
      }
      if (multibyte) {
        let length = (array[array.length - 1] & 3) + 1;
        array = array.subarray(0, -length);
      }
      return array;
    };
  }
  decode(...args) {
    return this.#decoder.decode(...args);
  }
  encode(...args) {
    return this.#encoder.encode(...args);
  }
  loadRecord(index) {
    return super.loadRecord(this.#start + index);
  }
  loadMagic(index) {
    return super.loadMagic(this.#start + index);
  }
  loadText(index) {
    return this.loadRecord(index + 1).then((buf) => new Uint8Array(buf)).then(this.#removeTrailingEntries).then(this.#decompress);
  }
  async loadResource(index) {
    let buf = await super.loadRecord(this.#resourceStart + index), magic = getString(buf.slice(0, 4));
    return magic === "FONT" ? getFont(buf, this.unzlib) : magic === "VIDE" || magic === "AUDI" ? buf.slice(12) : buf;
  }
  getNCX() {
    let index = this.headers.mobi.indx;
    if (index < 4294967295)
      return getNCX(index, this.loadRecord.bind(this));
  }
  getMetadata() {
    let { mobi, exth } = this.headers;
    return {
      identifier: mobi.uid.toString(),
      title: unescapeHTML(exth?.title || this.decode(mobi.title)),
      author: exth?.creator?.map(unescapeHTML),
      publisher: unescapeHTML(exth?.publisher),
      language: exth?.language ?? mobi.language,
      published: exth?.date,
      description: unescapeHTML(exth?.description),
      subject: exth?.subject?.map(unescapeHTML),
      rights: unescapeHTML(exth?.rights)
    };
  }
  async getCover() {
    let { exth } = this.headers, offset = exth?.coverOffset < 4294967295 ? exth?.coverOffset : exth?.thumbnailOffset < 4294967295 ? exth?.thumbnailOffset : null;
    if (offset != null) {
      let buf = await this.loadResource(offset);
      return new Blob([buf]);
    }
  }
}, mbpPagebreakRegex = /<\s*(?:mbp:)?pagebreak[^>]*>/gi, fileposRegex = /<[^<>]+filepos=['"]{0,1}(\d+)[^<>]*>/gi, MOBI6 = class {
  parser = new DOMParser();
  serializer = new XMLSerializer();
  #resourceCache = /* @__PURE__ */ new Map();
  #textCache = /* @__PURE__ */ new Map();
  #cache = /* @__PURE__ */ new Map();
  #sections;
  #fileposList = [];
  #type = MIME2.HTML;
  constructor(mobi) {
    this.mobi = mobi;
  }
  async init() {
    let array = new Uint8Array();
    for (let i = 0; i < this.mobi.headers.palmdoc.numTextRecords; i++)
      array = concatTypedArray(array, await this.mobi.loadText(i));
    let str = Array.from(
      new Uint8Array(array),
      (c) => String.fromCharCode(c)
    ).join("");
    this.#sections = [0].concat(Array.from(str.matchAll(mbpPagebreakRegex), (m) => m.index)).map((x2, i, a) => str.slice(x2, a[i + 1])).map((str2) => Uint8Array.from(str2, (x2) => x2.charCodeAt(0))).map((raw) => ({ book: this, raw })).reduce((arr, x2) => {
      let last = arr[arr.length - 1];
      return x2.start = last?.end ?? 0, x2.end = x2.start + x2.raw.byteLength, arr.concat(x2);
    }, []), this.sections = this.#sections.map((section, index) => ({
      id: index,
      load: () => this.loadSection(section),
      createDocument: () => this.createDocument(section),
      size: section.end - section.start
    }));
    let fileposInNCX = [];
    try {
      let ncx = await this.mobi.getNCX(), map = ({ label, offset, children }) => {
        let filepos = offset.toString().padStart(10, "0"), href = `filepos:${filepos}`;
        return fileposInNCX.push(filepos), label = unescapeHTML(label), { label, href, subitems: children?.map(map) };
      };
      if (this.toc = ncx?.map(map), this.landmarks = await this.getGuide(), !this.toc) {
        let tocHref = this.landmarks.find(({ type }) => type?.includes("toc"))?.href;
        if (tocHref) {
          let { index } = this.resolveHref(tocHref), doc = await this.sections[index].createDocument();
          this.toc = Array.from(
            doc.querySelectorAll("a[filepos]"),
            (a) => ({
              label: a.innerText?.trim(),
              href: `filepos:${a.getAttribute("filepos")}`
            })
          );
        }
      }
    } catch (e) {
      console.warn(e);
    }
    return this.#fileposList = [...new Set(fileposInNCX.concat(Array.from(str.matchAll(fileposRegex), (m) => m[1])))].map((filepos) => ({ filepos, number: Number(filepos) })).sort((a, b) => a.number - b.number), this.metadata = this.mobi.getMetadata(), this.getCover = this.mobi.getCover.bind(this.mobi), this;
  }
  async getGuide() {
    let doc = await this.createDocument(this.#sections[0]);
    return Array.from(doc.getElementsByTagName("reference"), (ref) => ({
      label: ref.getAttribute("title"),
      type: ref.getAttribute("type")?.split(/\s/),
      href: `filepos:${ref.getAttribute("filepos")}`
    }));
  }
  async loadResource(index) {
    if (this.#resourceCache.has(index))
      return this.#resourceCache.get(index);
    let raw = await this.mobi.loadResource(index), url = URL.createObjectURL(new Blob([raw]));
    return this.#resourceCache.set(index, url), url;
  }
  async loadRecindex(recindex) {
    return this.loadResource(Number(recindex) - 1);
  }
  async replaceResources(doc) {
    for (let img of doc.querySelectorAll("img[recindex]")) {
      let recindex = img.getAttribute("recindex");
      try {
        img.src = await this.loadRecindex(recindex);
      } catch {
        console.warn(`Failed to load image ${recindex}`);
      }
    }
    for (let media of doc.querySelectorAll("[mediarecindex]")) {
      let mediarecindex = media.getAttribute("mediarecindex"), recindex = media.getAttribute("recindex");
      try {
        media.src = await this.loadRecindex(mediarecindex), recindex && (media.poster = await this.loadRecindex(recindex));
      } catch {
        console.warn(`Failed to load media ${mediarecindex}`);
      }
    }
    for (let a of doc.querySelectorAll("[filepos]")) {
      let filepos = a.getAttribute("filepos");
      a.href = `filepos:${filepos}`;
    }
  }
  async loadText(section) {
    if (this.#textCache.has(section))
      return this.#textCache.get(section);
    let { raw } = section, fileposList = this.#fileposList.filter(({ number }) => number >= section.start && number < section.end).map((obj) => ({ ...obj, offset: obj.number - section.start })), arr = raw;
    fileposList.length && (arr = raw.subarray(0, fileposList[0].offset), fileposList.forEach(({ filepos, offset }, i) => {
      let next = fileposList[i + 1], a = this.mobi.encode(`<a id="filepos${filepos}"></a>`);
      arr = concatTypedArray3(arr, a, raw.subarray(offset, next?.offset));
    }));
    let str = this.mobi.decode(arr).replaceAll(mbpPagebreakRegex, "");
    return this.#textCache.set(section, str), str;
  }
  async createDocument(section) {
    let str = await this.loadText(section);
    return this.parser.parseFromString(str, this.#type);
  }
  async loadSection(section) {
    if (this.#cache.has(section))
      return this.#cache.get(section);
    let doc = await this.createDocument(section), style2 = doc.createElement("style");
    doc.head.append(style2), style2.append(doc.createTextNode(`blockquote {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 1em;
            margin-inline-end: 0;
        }`)), await this.replaceResources(doc);
    let result = this.serializer.serializeToString(doc), url = URL.createObjectURL(new Blob([result], { type: this.#type }));
    return this.#cache.set(section, url), url;
  }
  resolveHref(href) {
    let filepos = href.match(/filepos:(.*)/)[1], number = Number(filepos);
    return { index: this.#sections.findIndex((section) => section.end > number), anchor: (doc) => doc.getElementById(`filepos${filepos}`) };
  }
  splitTOCHref(href) {
    let filepos = href.match(/filepos:(.*)/)[1], number = Number(filepos);
    return [this.#sections.findIndex((section) => section.end > number), `filepos${filepos}`];
  }
  getTOCFragment(doc, id) {
    return doc.getElementById(id);
  }
  isExternal(uri) {
    return /^(?!blob|filepos)\w+:/i.test(uri);
  }
}, kindleResourceRegex = /kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/, kindlePosRegex = /kindle:pos:fid:(\w+):off:(\w+)/, parseResourceURI = (str) => {
  let [resourceType, id, type] = str.match(kindleResourceRegex).slice(1);
  return { resourceType, id: parseInt(id, 32), type };
}, parsePosURI = (str) => {
  let [fid, off] = str.match(kindlePosRegex).slice(1);
  return { fid: parseInt(fid, 32), off: parseInt(off, 32) };
}, makePosURI = (fid = 0, off = 0) => `kindle:pos:fid:${fid.toString(32).toUpperCase().padStart(4, "0")}:off:${off.toString(32).toUpperCase().padStart(10, "0")}`, getFragmentSelector = (str) => {
  let match = str.match(/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i);
  if (!match)
    return;
  let [, attr, value] = match;
  return `[${attr}="${CSS.escape(value)}"]`;
}, replaceSeries = async (str, regex, f) => {
  let matches = [];
  str.replace(regex, (...args) => (matches.push(args), null));
  let results = [];
  for (let args of matches)
    results.push(await f(...args));
  return str.replace(regex, () => results.shift());
}, KF8 = class {
  parser = new DOMParser();
  #cache = /* @__PURE__ */ new Map();
  #fragmentOffsets = /* @__PURE__ */ new Map();
  #fragmentSelectors = /* @__PURE__ */ new Map();
  #tables = {};
  #sections;
  #fullRawLength;
  #rawHead = new Uint8Array();
  #rawTail = new Uint8Array();
  #lastLoadedHead = -1;
  #lastLoadedTail = -1;
  #checkType = !0;
  #type = MIME2.XHTML;
  constructor(mobi) {
    this.mobi = mobi;
  }
  async init() {
    let loadRecord = this.mobi.loadRecord.bind(this.mobi), { kf8 } = this.mobi.headers;
    try {
      let fdstBuffer = await loadRecord(kf8.fdst), fdst = getStruct(FDST_HEADER, fdstBuffer);
      if (fdst.magic !== "FDST")
        throw new Error("Missing FDST record");
      let fdstTable = Array.from(
        { length: fdst.numEntries },
        (_, i) => 12 + i * 8
      ).map((offset) => [
        getUint(fdstBuffer.slice(offset, offset + 4)),
        getUint(fdstBuffer.slice(offset + 4, offset + 8))
      ]);
      this.#tables.fdstTable = fdstTable, this.#fullRawLength = fdstTable[fdstTable.length - 1][1];
    } catch {
    }
    let skelTable = (await getIndexData(kf8.skel, loadRecord)).table.map(({ name, tagMap }, index) => ({
      index,
      name,
      numFrag: tagMap[1][0],
      offset: tagMap[6][0],
      length: tagMap[6][1]
    })), fragData = await getIndexData(kf8.frag, loadRecord), fragTable = fragData.table.map(({ name, tagMap }) => ({
      insertOffset: parseInt(name),
      selector: fragData.cncx[tagMap[2][0]],
      index: tagMap[4][0],
      offset: tagMap[6][0],
      length: tagMap[6][1]
    }));
    this.#tables.skelTable = skelTable, this.#tables.fragTable = fragTable, this.#sections = skelTable.reduce((arr, skel) => {
      let last = arr[arr.length - 1], fragStart = last?.fragEnd ?? 0, fragEnd = fragStart + skel.numFrag, frags = fragTable.slice(fragStart, fragEnd), length = skel.length + frags.map((f) => f.length).reduce((a, b) => a + b), totalLength = (last?.totalLength ?? 0) + length;
      return arr.concat({ skel, frags, fragEnd, length, totalLength });
    }, []), this.#sections.unshift({ frags: [] }), this.sections = this.#sections.map((section, index) => section.frags.length ? {
      id: index,
      load: () => this.loadSection(section),
      createDocument: () => this.createDocument(section),
      size: section.length
    } : { linear: "no" });
    try {
      let ncx = await this.mobi.getNCX(), map = ({ label, pos, children }) => {
        let [fid, off] = pos, href = makePosURI(fid, off), arr = this.#fragmentOffsets.get(fid);
        return arr ? arr.push(off) : this.#fragmentOffsets.set(fid, [off]), { label: unescapeHTML(label), href, subitems: children?.map(map) };
      };
      this.toc = ncx?.map(map), this.landmarks = await this.getGuide();
    } catch (e) {
      console.warn(e);
    }
    let { exth } = this.mobi.headers;
    return this.dir = exth.pageProgressionDirection, this.rendition = {
      layout: exth.fixedLayout === "true" ? "pre-paginated" : "reflowable",
      viewport: Object.fromEntries(exth.originalResolution?.split("x")?.slice(0, 2)?.map((x2, i) => [i ? "height" : "width", x2]) ?? [])
    }, this.metadata = this.mobi.getMetadata(), this.getCover = this.mobi.getCover.bind(this.mobi), this;
  }
  // is this really the only way of getting to RESC, PAGE, etc.?
  async getResourcesByMagic(keys) {
    let results = {}, start = this.mobi.headers.kf8.resourceStart, end = this.mobi.pdb.numRecords;
    for (let i = start; i < end; i++)
      try {
        let magic = await this.mobi.loadMagic(i), match = keys.find((key) => key === magic);
        match && (results[match] = i);
      } catch {
      }
    return results;
  }
  async getGuide() {
    let index = this.mobi.headers.kf8.guide;
    if (index < 4294967295) {
      let loadRecord = this.mobi.loadRecord.bind(this.mobi), { table, cncx } = await getIndexData(index, loadRecord);
      return table.map(({ name, tagMap }) => ({
        label: cncx[tagMap[1][0]] ?? "",
        type: name?.split(/\s/),
        href: makePosURI(tagMap[6]?.[0] ?? tagMap[3]?.[0])
      }));
    }
  }
  async loadResourceBlob(str) {
    let { resourceType, id, type } = parseResourceURI(str), raw = resourceType === "flow" ? await this.loadFlow(id) : await this.mobi.loadResource(id - 1), result = [MIME2.XHTML, MIME2.HTML, MIME2.CSS, MIME2.SVG].includes(type) ? await this.replaceResources(this.mobi.decode(raw)) : raw;
    return new Blob([result], { type });
  }
  async loadResource(str) {
    if (this.#cache.has(str))
      return this.#cache.get(str);
    let blob = await this.loadResourceBlob(str), url = URL.createObjectURL(blob);
    return this.#cache.set(str, url), url;
  }
  replaceResources(str) {
    let regex = new RegExp(kindleResourceRegex, "g");
    return replaceSeries(str, regex, this.loadResource.bind(this));
  }
  // NOTE: there doesn't seem to be a way to access text randomly?
  // how to know the decompressed size of the records without decompressing?
  // 4096 is just the maximum size
  async loadRaw(start, end) {
    let distanceHead = end - this.#rawHead.length, distanceEnd = this.#fullRawLength == null ? 1 / 0 : this.#fullRawLength - this.#rawTail.length - start;
    if (distanceHead < 0 || distanceHead < distanceEnd) {
      for (; this.#rawHead.length < end; ) {
        let index = ++this.#lastLoadedHead, data = await this.mobi.loadText(index);
        this.#rawHead = concatTypedArray(this.#rawHead, data);
      }
      return this.#rawHead.slice(start, end);
    }
    for (; this.#fullRawLength - this.#rawTail.length > start; ) {
      let index = this.mobi.headers.palmdoc.numTextRecords - 1 - ++this.#lastLoadedTail, data = await this.mobi.loadText(index);
      this.#rawTail = concatTypedArray(data, this.#rawTail);
    }
    let rawTailStart = this.#fullRawLength - this.#rawTail.length;
    return this.#rawTail.slice(start - rawTailStart, end - rawTailStart);
  }
  loadFlow(index) {
    if (index < 4294967295)
      return this.loadRaw(...this.#tables.fdstTable[index]);
  }
  async loadText(section) {
    let { skel, frags, length } = section, raw = await this.loadRaw(skel.offset, skel.offset + length), skeleton = raw.slice(0, skel.length);
    for (let frag of frags) {
      let insertOffset = frag.insertOffset - skel.offset, offset = skel.length + frag.offset, fragRaw = raw.slice(offset, offset + frag.length);
      skeleton = concatTypedArray3(
        skeleton.slice(0, insertOffset),
        fragRaw,
        skeleton.slice(insertOffset)
      );
      let offsets = this.#fragmentOffsets.get(frag.index);
      if (offsets)
        for (let offset2 of offsets) {
          let str = this.mobi.decode(fragRaw).slice(offset2), selector = getFragmentSelector(str);
          this.#setFragmentSelector(frag.index, offset2, selector);
        }
    }
    return this.mobi.decode(skeleton);
  }
  async createDocument(section) {
    let str = await this.loadText(section);
    return this.parser.parseFromString(str, this.#type);
  }
  async loadSection(section) {
    if (this.#cache.has(section))
      return this.#cache.get(section);
    let str = await this.loadText(section);
    this.#checkType && this.parser.parseFromString(str, this.#type).querySelector("parsererror") && (this.#type = MIME2.HTML), this.#checkType && (this.#checkType = !1);
    let replaced = await this.replaceResources(str), url = URL.createObjectURL(new Blob([replaced], { type: this.#type }));
    return this.#cache.set(section, url), url;
  }
  getIndexByFID(fid) {
    return this.#sections.findIndex((section) => section.frags.some((frag) => frag.index === fid));
  }
  #setFragmentSelector(id, offset, selector) {
    let map = this.#fragmentSelectors.get(id);
    if (map)
      map.set(offset, selector);
    else {
      let map2 = /* @__PURE__ */ new Map();
      this.#fragmentSelectors.set(id, map2), map2.set(offset, selector);
    }
  }
  async resolveHref(href) {
    let { fid, off } = parsePosURI(href), index = this.getIndexByFID(fid);
    if (index < 0)
      return;
    let saved = this.#fragmentSelectors.get(fid)?.get(off);
    if (saved)
      return { index, anchor: (doc) => doc.querySelector(saved) };
    let { skel, frags } = this.#sections[index], frag = frags.find((frag2) => frag2.index === fid), offset = skel.offset + skel.length + frag.offset, fragRaw = await this.loadRaw(offset, offset + frag.length), str = this.mobi.decode(fragRaw).slice(off), selector = getFragmentSelector(str);
    return this.#setFragmentSelector(fid, off, selector), { index, anchor: (doc) => doc.querySelector(selector) };
  }
  splitTOCHref(href) {
    let pos = parsePosURI(href);
    return [this.getIndexByFID(pos.fid), pos];
  }
  getTOCFragment(doc, { fid, off }) {
    let selector = this.#fragmentSelectors.get(fid)?.get(off);
    return doc.querySelector(selector);
  }
  isExternal(uri) {
    return /^(?!blob|kindle)\w+:/i.test(uri);
  }
};

// libs/foliate-js/epub.js
var NS3 = {
  CONTAINER: "urn:oasis:names:tc:opendocument:xmlns:container",
  XHTML: "http://www.w3.org/1999/xhtml",
  OPF: "http://www.idpf.org/2007/opf",
  EPUB: "http://www.idpf.org/2007/ops",
  DC: "http://purl.org/dc/elements/1.1/",
  DCTERMS: "http://purl.org/dc/terms/",
  ENC: "http://www.w3.org/2001/04/xmlenc#",
  NCX: "http://www.daisy.org/z3986/2005/ncx/",
  XLINK: "http://www.w3.org/1999/xlink",
  SMIL: "http://www.w3.org/ns/SMIL"
}, MIME3 = {
  XML: "application/xml",
  NCX: "application/x-dtbncx+xml",
  XHTML: "application/xhtml+xml",
  HTML: "text/html",
  CSS: "text/css",
  SVG: "image/svg+xml",
  JS: /\/(x-)?(javascript|ecmascript)/
}, camel = (x2) => x2.toLowerCase().replace(/[-:](.)/g, (_, g) => g.toUpperCase()), whitespacePreLine = (str) => str ? str.trim().replace(/\s{2,}/g, " ") : "", filterAttribute = (attr, value, isList) => isList ? (el) => el.getAttribute(attr)?.split(/\s/)?.includes(value) : typeof value == "function" ? (el) => value(el.getAttribute(attr)) : (el) => el.getAttribute(attr) === value, getAttributes = (...xs2) => (el) => el ? Object.fromEntries(xs2.map((x2) => [camel(x2), el.getAttribute(x2)])) : null, getElementText2 = (el) => whitespacePreLine(el?.textContent), childGetter = (doc, ns2) => {
  let useNS = doc.lookupNamespaceURI(null) === ns2 || doc.lookupPrefix(ns2), f = useNS ? (el, name) => (el2) => el2.namespaceURI === ns2 && el2.localName === name : (el, name) => (el2) => el2.localName === name;
  return {
    $: (el, name) => [...el.children].find(f(el, name)),
    $$: (el, name) => [...el.children].filter(f(el, name)),
    $$$: useNS ? (el, name) => [...el.getElementsByTagNameNS(ns2, name)] : (el, name) => [...el.getElementsByTagName(ns2, name)]
  };
}, resolveURL = (url, relativeTo) => {
  try {
    if (relativeTo.includes(":"))
      return new URL(url, relativeTo);
    let root = "file:///";
    return decodeURI(new URL(url, root + relativeTo).href.replace(root, ""));
  } catch (e) {
    return console.warn(e), url;
  }
}, isExternal = (uri) => /^(?!blob)\w+:/i.test(uri), pathRelative = (from, to2) => {
  if (!from)
    return to2;
  let as2 = from.replace(/\/$/, "").split("/"), bs2 = to2.replace(/\/$/, "").split("/"), i = (as2.length > bs2.length ? as2 : bs2).findIndex(
    (_, i2) => as2[i2] !== bs2[i2]
  );
  return i < 0 ? "" : Array(as2.length - i).fill("..").concat(bs2.slice(i)).join("/");
}, pathDirname = (str) => str.slice(0, str.lastIndexOf("/") + 1), replaceSeries2 = async (str, regex, f) => {
  let matches = [];
  str.replace(regex, (...args) => (matches.push(args), null));
  let results = [];
  for (let args of matches)
    results.push(await f(...args));
  return str.replace(regex, () => results.shift());
}, regexEscape = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), LANGS = { attrs: ["dir", "xml:lang"] }, ALTS = {
  name: "alternate-script",
  many: !0,
  ...LANGS,
  props: ["file-as"]
}, CONTRIB = {
  many: !0,
  ...LANGS,
  props: [{ name: "role", many: !0, attrs: ["scheme"] }, "file-as", ALTS]
}, METADATA = [
  {
    name: "title",
    many: !0,
    ...LANGS,
    props: ["title-type", "display-seq", "file-as", ALTS]
  },
  {
    name: "identifier",
    many: !0,
    props: [{ name: "identifier-type", attrs: ["scheme"] }]
  },
  { name: "language", many: !0 },
  { name: "creator", ...CONTRIB },
  { name: "contributor", ...CONTRIB },
  { name: "publisher", ...LANGS, props: ["file-as", ALTS] },
  { name: "description", ...LANGS, props: [ALTS] },
  { name: "rights", ...LANGS, props: [ALTS] },
  { name: "date" },
  { name: "dcterms:modified", type: "meta" },
  { name: "subject", many: !0, ...LANGS, props: ["term", "authority", ALTS] },
  {
    name: "belongs-to-collection",
    type: "meta",
    many: !0,
    ...LANGS,
    props: [
      "collection-type",
      "group-position",
      "dcterms:identifier",
      "file-as",
      ALTS,
      { name: "belongs-to-collection", recursive: !0 }
    ]
  }
], getMetadata = (opf) => {
  let { $: $4, $$ } = childGetter(opf, NS3.OPF), $metadata = $4(opf.documentElement, "metadata"), els = Array.from($metadata.children), getValue = (obj, el) => {
    if (!el)
      return null;
    let { props = [], attrs = [] } = obj, value = getElementText2(el);
    if (!props.length && !attrs.length)
      return value;
    let id = el.getAttribute("id"), refines = id ? els.filter(filterAttribute("refines", "#" + id)) : [];
    return Object.fromEntries(
      [["value", value]].concat(
        props.map((prop) => {
          let { many, recursive } = prop, name = typeof prop == "string" ? prop : prop.name, filter2 = filterAttribute("property", name), subobj = recursive ? obj : prop;
          return [
            camel(name),
            many ? refines.filter(filter2).map((el2) => getValue(subobj, el2)) : getValue(subobj, refines.find(filter2))
          ];
        })
      ).concat(attrs.map((attr) => [camel(attr), el.getAttribute(attr)]))
    );
  }, arr = els.filter(filterAttribute("refines", null)), metadata = Object.fromEntries(
    METADATA.map((obj) => {
      let { type, name, many } = obj, filter2 = type === "meta" ? (el) => el.namespaceURI === NS3.OPF && el.getAttribute("property") === name : (el) => el.namespaceURI === NS3.DC && el.localName === name;
      return [
        camel(name),
        many ? arr.filter(filter2).map((el) => getValue(obj, el)) : getValue(obj, arr.find(filter2))
      ];
    })
  ), getProperties = (prefix) => Object.fromEntries(
    $$($metadata, "meta").filter(filterAttribute("property", (x2) => x2?.startsWith(prefix))).map((el) => [
      el.getAttribute("property").replace(prefix, ""),
      getElementText2(el)
    ])
  ), rendition = getProperties("rendition:"), media = getProperties("media:");
  return { metadata, rendition, media };
}, parseNav = (doc, resolve = (f) => f) => {
  let { $: $4, $$, $$$ } = childGetter(doc, NS3.XHTML), resolveHref = (href) => href ? decodeURI(resolve(href)) : null, parseLI = (getType) => ($li) => {
    let $a2 = $4($li, "a") ?? $4($li, "span"), $ol = $4($li, "ol"), href = resolveHref($a2?.getAttribute("href")), result = { label: getElementText2($a2) || $a2?.getAttribute("title"), href, subitems: parseOL($ol) };
    return getType && (result.type = $a2?.getAttributeNS(NS3.EPUB, "type")?.split(/\s/)), result;
  }, parseOL = ($ol, getType) => $ol ? $$($ol, "li").map(parseLI(getType)) : null, parseNav2 = ($nav, getType) => parseOL($4($nav, "ol"), getType), $$nav = $$$(doc, "nav"), toc = null, pageList = null, landmarks = null, others = [];
  for (let $nav of $$nav) {
    let type = $nav.getAttributeNS(NS3.EPUB, "type")?.split(/\s/) ?? [];
    type.includes("toc") ? toc ??= parseNav2($nav) : type.includes("page-list") ? pageList ??= parseNav2($nav) : type.includes("landmarks") ? landmarks ??= parseNav2($nav, !0) : others.push({
      label: getElementText2($nav.firstElementChild),
      type,
      list: parseNav2($nav)
    });
  }
  return { toc, pageList, landmarks, others };
}, parseNCX = (doc, resolve = (f) => f) => {
  let { $: $4, $$ } = childGetter(doc, NS3.NCX), resolveHref = (href) => href ? decodeURI(resolve(href)) : null, parseItem = (el) => {
    let $label = $4(el, "navLabel"), $content = $4(el, "content"), label = getElementText2($label), href = resolveHref($content.getAttribute("src"));
    if (el.localName === "navPoint") {
      let els = $$(el, "navPoint");
      return { label, href, subitems: els.length ? els.map(parseItem) : null };
    }
    return { label, href };
  }, parseList = (el, itemName) => $$(el, itemName).map(parseItem), getSingle = (container, itemName) => {
    let $container = $4(doc.documentElement, container);
    return $container ? parseList($container, itemName) : null;
  };
  return {
    toc: getSingle("navMap", "navPoint"),
    pageList: getSingle("pageList", "pageTarget"),
    others: $$(doc.documentElement, "navList").map((el) => ({
      label: getElementText2($4(el, "navLabel")),
      list: parseList(el, "navTarget")
    }))
  };
}, parseClock = (str) => {
  if (!str)
    return;
  let parts = str.split(":").map((x3) => parseFloat(x3));
  if (parts.length === 3) {
    let [h, m, s] = parts;
    return h * 60 * 60 + m * 60 + s;
  }
  if (parts.length === 2) {
    let [m, s] = parts;
    return m * 60 + s;
  }
  let [x2, unit] = str.split(/(?=[^\d.])/), n = parseFloat(x2), f = unit === "h" ? 60 * 60 : unit === "min" ? 60 : unit === "ms" ? 1e-3 : 1;
  return n * f;
}, parseSMIL = (doc, resolve = (f) => f) => {
  let { $: $4, $$$ } = childGetter(doc, NS3.SMIL), resolveHref = (href) => href ? decodeURI(resolve(href)) : null;
  return $$$(doc, "par").map(($par) => {
    let id = $4($par, "text")?.getAttribute("src")?.split("#")?.[1], $audio = $4($par, "audio");
    return $audio ? {
      id,
      audio: {
        src: resolveHref($audio.getAttribute("src")),
        clipBegin: parseClock($audio.getAttribute("clipBegin")),
        clipEnd: parseClock($audio.getAttribute("clipEnd"))
      }
    } : { id };
  });
}, isUUID = /([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/, getUUID = (opf) => {
  for (let el of opf.getElementsByTagNameNS(NS3.DC, "identifier")) {
    let [id] = getElementText2(el).split(":").slice(-1);
    if (isUUID.test(id))
      return id;
  }
  return "";
}, getIdentifier = (opf) => getElementText2(
  opf.getElementById(opf.documentElement.getAttribute("unique-identifier")) ?? opf.getElementsByTagNameNS(NS3.DC, "identifier")[0]
), deobfuscate = async (key, length, blob) => {
  let array = new Uint8Array(await blob.slice(0, length).arrayBuffer());
  length = Math.min(length, array.length);
  for (var i = 0; i < length; i++)
    array[i] = array[i] ^ key[i % key.length];
  return new Blob([array, blob.slice(length)], { type: blob.type });
}, WebCryptoSHA1 = async (str) => {
  let data = new TextEncoder().encode(str), buffer = await globalThis.crypto.subtle.digest("SHA-1", data);
  return new Uint8Array(buffer);
}, deobfuscators = (sha1 = WebCryptoSHA1) => ({
  "http://www.idpf.org/2008/embedding": {
    key: (opf) => sha1(
      getIdentifier(opf).replaceAll(/[\u0020\u0009\u000d\u000a]/g, "")
    ),
    decode: (key, blob) => deobfuscate(key, 1040, blob)
  },
  "http://ns.adobe.com/pdf/enc#RC": {
    key: (opf) => {
      let uuid = getUUID(opf).replaceAll("-", "");
      return Uint8Array.from(
        { length: 16 },
        (_, i) => parseInt(uuid.slice(i * 2, i * 2 + 2), 16)
      );
    },
    decode: (key, blob) => deobfuscate(key, 1024, blob)
  }
}), Encryption = class {
  #uris = /* @__PURE__ */ new Map();
  #decoders = /* @__PURE__ */ new Map();
  #algorithms;
  constructor(algorithms) {
    this.#algorithms = algorithms;
  }
  async init(encryption, opf) {
    if (!encryption)
      return;
    let data = Array.from(
      encryption.getElementsByTagNameNS(NS3.ENC, "EncryptedData"),
      (el) => ({
        algorithm: el.getElementsByTagNameNS(NS3.ENC, "EncryptionMethod")[0]?.getAttribute("Algorithm"),
        uri: el.getElementsByTagNameNS(NS3.ENC, "CipherReference")[0]?.getAttribute("URI")
      })
    );
    for (let { algorithm, uri } of data) {
      if (!this.#decoders.has(algorithm)) {
        let algo = this.#algorithms[algorithm];
        if (!algo) {
          console.warn("Unknown encryption algorithm");
          continue;
        }
        let key = await algo.key(opf);
        this.#decoders.set(algorithm, (blob) => algo.decode(key, blob));
      }
      this.#uris.set(uri, algorithm);
    }
  }
  getDecoder(uri) {
    return this.#decoders.get(this.#uris.get(uri)) ?? ((x2) => x2);
  }
}, Resources = class {
  constructor({ opf, resolveHref }) {
    this.opf = opf;
    let { $: $4, $$, $$$ } = childGetter(opf, NS3.OPF), $manifest = $4(opf.documentElement, "manifest"), $spine = $4(opf.documentElement, "spine"), $$itemref = $$($spine, "itemref");
    this.manifest = $$($manifest, "item").map(
      getAttributes("href", "id", "media-type", "properties", "media-overlay")
    ).map((item) => (item.href = resolveHref(item.href), item.properties = item.properties?.split(/\s/), item)), this.spine = $$itemref.map(getAttributes("idref", "id", "linear", "properties")).map((item) => (item.properties = item.properties?.split(/\s/), item)), this.pageProgressionDirection = $spine.getAttribute(
      "page-progression-direction"
    ), this.navPath = this.getItemByProperty("nav")?.href, this.ncxPath = (this.getItemByID($spine.getAttribute("toc")) ?? this.manifest.find((item) => item.mediaType === MIME3.NCX))?.href;
    let $guide = $4(opf.documentElement, "guide");
    $guide && (this.guide = $$($guide, "reference").map(getAttributes("type", "title", "href")).map(({ type, title, href }) => ({
      label: title,
      type: type.split(/\s/),
      href: resolveHref(href)
    }))), this.cover = this.getItemByProperty("cover-image") ?? // EPUB 2 compat
    this.getItemByID(
      $$$(opf, "meta").find(filterAttribute("name", "cover"))?.getAttribute("content")
    ) ?? this.getItemByHref(
      this.guide?.find((ref) => ref.type.includes("cover"))?.href
    ), this.cfis = fromElements($$itemref);
  }
  getItemByID(id) {
    return this.manifest.find((item) => item.id === id);
  }
  getItemByHref(href) {
    return this.manifest.find((item) => item.href === href);
  }
  getItemByProperty(prop) {
    return this.manifest.find((item) => item.properties?.includes(prop));
  }
  resolveCFI(cfi) {
    let parts = parse(cfi), top = (parts.parent ?? parts).shift(), $itemref = toElement(this.opf, top);
    $itemref && $itemref.nodeName !== "idref" && (top.at(-1).id = null, $itemref = toElement(this.opf, top));
    let idref = $itemref?.getAttribute("idref");
    return { index: this.spine.findIndex((item) => item.idref === idref), anchor: (doc) => toRange(doc, parts) };
  }
}, Loader = class {
  #cache = /* @__PURE__ */ new Map();
  #children = /* @__PURE__ */ new Map();
  #refCount = /* @__PURE__ */ new Map();
  allowScript = !1;
  constructor({ loadText, loadBlob, resources }) {
    this.loadText = loadText, this.loadBlob = loadBlob, this.manifest = resources.manifest, this.assets = resources.manifest;
  }
  createURL(href, data, type, parent) {
    if (!data)
      return "";
    let url = URL.createObjectURL(new Blob([data], { type }));
    if (this.#cache.set(href, url), this.#refCount.set(href, 1), parent) {
      let childList = this.#children.get(parent);
      childList ? childList.push(href) : this.#children.set(parent, [href]);
    }
    return url;
  }
  ref(href, parent) {
    let childList = this.#children.get(parent);
    return childList?.includes(href) || (this.#refCount.set(href, this.#refCount.get(href) + 1), childList ? childList.push(href) : this.#children.set(parent, [href])), this.#cache.get(href);
  }
  unref(href) {
    if (!this.#refCount.has(href))
      return;
    let count = this.#refCount.get(href) - 1;
    if (count < 1) {
      URL.revokeObjectURL(this.#cache.get(href)), this.#cache.delete(href), this.#refCount.delete(href);
      let childList = this.#children.get(href);
      if (childList)
        for (; childList.length; )
          this.unref(childList.pop());
      this.#children.delete(href);
    } else
      this.#refCount.set(href, count);
  }
  // load manifest item, recursively loading all resources as needed
  async loadItem(item, parents = []) {
    if (!item)
      return null;
    let { href, mediaType } = item, isScript = MIME3.JS.test(item.mediaType);
    if (isScript && !this.allowScript)
      return null;
    let parent = parents.at(-1);
    return this.#cache.has(href) ? this.ref(href, parent) : (isScript || [MIME3.XHTML, MIME3.HTML, MIME3.CSS, MIME3.SVG].includes(mediaType)) && // prevent circular references
    parents.every((p2) => p2 !== href) ? this.loadReplaced(item, parents) : this.createURL(href, await this.loadBlob(href), mediaType, parent);
  }
  async loadHref(href, base, parents = []) {
    if (isExternal(href))
      return href;
    let path = resolveURL(href, base), item = this.manifest.find((item2) => item2.href === path);
    return item ? this.loadItem(item, parents.concat(base)) : href;
  }
  async loadReplaced(item, parents = []) {
    let { href, mediaType } = item, parent = parents.at(-1), str = await this.loadText(href);
    if (!str)
      return null;
    if ([MIME3.XHTML, MIME3.HTML, MIME3.SVG].includes(mediaType)) {
      let doc = new DOMParser().parseFromString(str, mediaType);
      if (mediaType === MIME3.XHTML && doc.querySelector("parsererror") && (console.warn(doc.querySelector("parsererror").innerText), item.mediaType = MIME3.HTML, doc = new DOMParser().parseFromString(str, item.mediaType)), [MIME3.XHTML, MIME3.SVG].includes(item.mediaType)) {
        let child = doc.firstChild;
        for (; child instanceof ProcessingInstruction; ) {
          if (child.data) {
            let replacedData = await replaceSeries2(
              child.data,
              /(?:^|\s*)(href\s*=\s*['"])([^'"]*)(['"])/i,
              (_, p1, p2, p3) => this.loadHref(p2, href, parents).then((p22) => `${p1}${p22}${p3}`)
            );
            child.replaceWith(
              doc.createProcessingInstruction(child.target, replacedData)
            );
          }
          child = child.nextSibling;
        }
      }
      let replace = async (el, attr) => el.setAttribute(
        attr,
        await this.loadHref(el.getAttribute(attr), href, parents)
      );
      for (let el of doc.querySelectorAll("link[href]"))
        await replace(el, "href");
      for (let el of doc.querySelectorAll("[src]"))
        await replace(el, "src");
      for (let el of doc.querySelectorAll("[poster]"))
        await replace(el, "poster");
      for (let el of doc.querySelectorAll("object[data]"))
        await replace(el, "data");
      for (let el of doc.querySelectorAll("[*|href]:not([href]"))
        el.setAttributeNS(
          NS3.XLINK,
          "href",
          await this.loadHref(
            el.getAttributeNS(NS3.XLINK, "href"),
            href,
            parents
          )
        );
      for (let el of doc.querySelectorAll("style"))
        el.textContent && (el.textContent = await this.replaceCSS(el.textContent, href, parents));
      for (let el of doc.querySelectorAll("[style]"))
        el.setAttribute(
          "style",
          await this.replaceCSS(el.getAttribute("style"), href, parents)
        );
      let result2 = new XMLSerializer().serializeToString(doc);
      return this.createURL(href, result2, item.mediaType, parent);
    }
    let result = mediaType === MIME3.CSS ? await this.replaceCSS(str, href, parents) : await this.replaceString(str, href, parents);
    return this.createURL(href, result, mediaType, parent);
  }
  async replaceCSS(str, href, parents = []) {
    let replacedUrls = await replaceSeries2(
      str,
      /url\(\s*["']?([^'"\n]*?)\s*["']?\s*\)/gi,
      (_, url) => this.loadHref(url, href, parents).then((url2) => `url("${url2}")`)
    ), replacedImports = await replaceSeries2(
      replacedUrls,
      /@import\s*["']([^"'\n]*?)["']/gi,
      (_, url) => this.loadHref(url, href, parents).then((url2) => `@import "${url2}"`)
    ), w = window?.innerWidth ?? 800, h = window?.innerHeight ?? 600;
    return replacedImports.replace(/-epub-/gi, "").replace(/(\d*\.?\d+)vw/gi, (_, d2) => parseFloat(d2) * w / 100 + "px").replace(/(\d*\.?\d+)vh/gi, (_, d2) => parseFloat(d2) * h / 100 + "px").replace(
      /page-break-(after|before|inside)/gi,
      (_, x2) => `-webkit-column-break-${x2}`
    );
  }
  // find & replace all possible relative paths for all assets without parsing
  replaceString(str, href, parents = []) {
    let assetMap = /* @__PURE__ */ new Map(), urls = this.assets.map((asset) => {
      if (asset.href === href)
        return;
      let relative = pathRelative(pathDirname(href), asset.href), relativeEnc = encodeURI(relative), rootRelative = "/" + asset.href, rootRelativeEnc = encodeURI(rootRelative), set = /* @__PURE__ */ new Set([
        relative,
        relativeEnc,
        rootRelative,
        rootRelativeEnc
      ]);
      for (let url of set)
        assetMap.set(url, asset);
      return Array.from(set);
    }).flat().filter((x2) => x2);
    if (!urls.length)
      return str;
    let regex = new RegExp(urls.map(regexEscape).join("|"), "g");
    return replaceSeries2(
      str,
      regex,
      async (match) => this.loadItem(
        assetMap.get(match.replace(/^\//, "")),
        parents.concat(href)
      )
    );
  }
  unloadItem(item) {
    this.unref(item?.href);
  }
}, getHTMLFragment = (doc, id) => doc.getElementById(id) ?? doc.querySelector(`[name="${CSS.escape(id)}"]`), getPageSpread = (properties) => {
  for (let p2 of properties) {
    if (p2 === "page-spread-left" || p2 === "rendition:page-spread-left")
      return "left";
    if (p2 === "page-spread-right" || p2 === "rendition:page-spread-right")
      return "right";
    if (p2 === "rendition:page-spread-center")
      return "center";
  }
}, EPUB = class {
  parser = new DOMParser();
  #encryption;
  constructor({ loadText, loadBlob, getSize, sha1 }) {
    this.loadText = loadText, this.loadBlob = loadBlob, this.getSize = getSize, this.#encryption = new Encryption(deobfuscators(sha1));
  }
  #parseXML(str) {
    return str ? this.parser.parseFromString(str, MIME3.XML) : null;
  }
  async #loadXML(uri) {
    return this.#parseXML(await this.loadText(uri));
  }
  opfPath = null;
  async init() {
    let $container = await this.#loadXML("META-INF/container.xml");
    if (!$container)
      throw new Error("Failed to load container file");
    let opfs = Array.from(
      $container.getElementsByTagNameNS(NS3.CONTAINER, "rootfile"),
      getAttributes("full-path", "media-type")
    ).filter((file) => file.mediaType === "application/oebps-package+xml");
    if (!opfs.length)
      throw new Error("No package document defined in container");
    let opfPath = opfs[0].fullPath;
    this.opfPath = opfPath;
    let opf = await this.#loadXML(opfPath);
    if (!opf)
      throw new Error("Failed to load package document");
    let $encryption = await this.#loadXML("META-INF/encryption.xml");
    await this.#encryption.init($encryption, opf), this.resources = new Resources({
      opf,
      resolveHref: (url) => resolveURL(url, opfPath)
    });
    let loader = new Loader({
      loadText: this.loadText,
      loadBlob: (uri) => Promise.resolve(this.loadBlob(uri)).then(
        this.#encryption.getDecoder(uri)
      ),
      resources: this.resources
    });
    this.sections = this.resources.spine.map((spineItem, index) => {
      let { idref, linear, properties = [] } = spineItem, item = this.resources.getItemByID(idref);
      return item ? {
        id: this.resources.getItemByID(idref)?.href,
        load: () => loader.loadItem(item),
        unload: () => loader.unloadItem(item),
        createDocument: () => this.loadDocument(item),
        size: this.getSize(item.href),
        cfi: this.resources.cfis[index],
        linear,
        pageSpread: getPageSpread(properties),
        resolveHref: (href) => resolveURL(href, item.href),
        loadMediaOverlay: () => this.loadMediaOverlay(item)
      } : (console.warn(`Could not find item with ID "${idref}" in manifest`), null);
    }).filter((s) => s);
    let { navPath, ncxPath } = this.resources;
    if (navPath)
      try {
        let resolve = (url) => resolveURL(url, navPath), nav = parseNav(await this.#loadXML(navPath), resolve);
        this.toc = nav.toc, this.pageList = nav.pageList, this.landmarks = nav.landmarks;
      } catch (e) {
        console.warn(e);
      }
    if (!this.toc && ncxPath)
      try {
        let resolve = (url) => resolveURL(url, ncxPath), ncx = parseNCX(await this.#loadXML(ncxPath), resolve);
        this.toc = ncx.toc, this.pageList = ncx.pageList;
      } catch (e) {
        console.warn(e);
      }
    this.landmarks ??= this.resources.guide;
    let { metadata, rendition, media } = getMetadata(opf);
    this.rendition = rendition, this.media = media, media.duration = parseClock(media.duration), this.dir = this.resources.pageProgressionDirection, this.rawMetadata = metadata;
    let title = metadata?.title?.[0];
    this.metadata = {
      title: title?.value,
      sortAs: title?.fileAs,
      language: metadata?.language,
      identifier: getIdentifier(opf),
      description: metadata?.description?.value,
      publisher: metadata?.publisher?.value,
      published: metadata?.date,
      modified: metadata?.dctermsModified,
      subject: metadata?.subject?.filter(({ value, code }) => value || code)?.map(({ value, code, scheme }) => ({ name: value, code, scheme })),
      rights: metadata?.rights?.value
    };
    let relators = {
      art: "artist",
      aut: "author",
      bkp: "producer",
      clr: "colorist",
      edt: "editor",
      ill: "illustrator",
      trl: "translator",
      pbl: "publisher"
    }, mapContributor = (defaultKey) => (obj) => {
      let keys = [
        ...new Set(
          obj.role?.map(
            ({ value: value2, scheme }) => (!scheme || scheme === "marc:relators" ? relators[value2] : null) ?? defaultKey
          )
        )
      ], value = { name: obj.value, sortAs: obj.fileAs };
      return [keys?.length ? keys : [defaultKey], value];
    };
    return metadata?.creator?.map(mapContributor("author"))?.concat(metadata?.contributor?.map?.(mapContributor("contributor")))?.forEach(
      ([keys, value]) => keys.forEach((key) => {
        this.metadata[key] ? this.metadata[key].push(value) : this.metadata[key] = [value];
      })
    ), this;
  }
  async loadDocument(item) {
    let str = await this.loadText(item.href);
    return this.parser.parseFromString(str, item.mediaType);
  }
  async loadMediaOverlay(item) {
    let id = item.mediaOverlay;
    if (!id)
      return null;
    let media = this.resources.getItemByID(id), doc = await this.#loadXML(media.href);
    return parseSMIL(doc, (url) => resolveURL(url, media.href));
  }
  resolveCFI(cfi) {
    return this.resources.resolveCFI(cfi);
  }
  resolveHref(href) {
    let [path, hash] = href.split("#"), item = this.resources.getItemByHref(decodeURI(path));
    return item ? { index: this.resources.spine.findIndex(
      ({ idref }) => idref === item.id
    ), anchor: hash ? (doc) => getHTMLFragment(doc, hash) : () => 0 } : null;
  }
  splitTOCHref(href) {
    return href?.split("#") ?? [];
  }
  getTOCFragment(doc, id) {
    return doc.getElementById(id) ?? doc.querySelector(`[name="${CSS.escape(id)}"]`);
  }
  isExternal(uri) {
    return isExternal(uri);
  }
  async getCover() {
    let cover = this.resources?.cover;
    return cover?.href ? new Blob([await this.loadBlob(cover.href)], { type: cover.mediaType }) : null;
  }
  async getCalibreBookmarks() {
    let txt = await this.loadText("META-INF/calibre_bookmarks.txt"), magic = "encoding=json+base64:";
    if (txt?.startsWith(magic)) {
      let json = atob(txt.slice(magic.length));
      return JSON.parse(json);
    }
  }
};

// https://esm.sh/@zip.js/zip.js@2.6.75/lib/zip-no-worker.js
var zip_no_worker_exports = {};
__export(zip_no_worker_exports, {
  BlobReader: () => St,
  BlobWriter: () => gt,
  Data64URIReader: () => Zr,
  Data64URIWriter: () => kr,
  ERR_BAD_FORMAT: () => fi,
  ERR_CENTRAL_DIRECTORY_NOT_FOUND: () => Vs,
  ERR_DUPLICATED_NAME: () => so,
  ERR_ENCRYPTED: () => js,
  ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND: () => Gs,
  ERR_EOCDR_NOT_FOUND: () => Bs,
  ERR_EOCDR_ZIP64_NOT_FOUND: () => Hs,
  ERR_EXTRAFIELD_ZIP64_NOT_FOUND: () => Ks,
  ERR_HTTP_RANGE: () => on,
  ERR_INVALID_COMMENT: () => oo,
  ERR_INVALID_ENCRYPTION_STRENGTH: () => _o,
  ERR_INVALID_ENTRY_COMMENT: () => co,
  ERR_INVALID_ENTRY_NAME: () => lo,
  ERR_INVALID_EXTRAFIELD_DATA: () => uo,
  ERR_INVALID_EXTRAFIELD_TYPE: () => fo,
  ERR_INVALID_PASSWORD: () => We,
  ERR_INVALID_SIGNATURE: () => et,
  ERR_INVALID_VERSION: () => Ea,
  ERR_ITERATOR_COMPLETED_TOO_SOON: () => gs,
  ERR_LOCAL_FILE_HEADER_NOT_FOUND: () => Ys,
  ERR_SPLIT_ZIP_FILE: () => aa,
  ERR_UNSUPPORTED_COMPRESSION: () => ra,
  ERR_UNSUPPORTED_ENCRYPTION: () => Ws,
  ERR_UNSUPPORTED_FORMAT: () => Oi,
  HttpRangeReader: () => Yr,
  HttpReader: () => qn,
  Reader: () => Be,
  SplitDataReader: () => sn,
  SplitDataWriter: () => tt,
  SplitZipReader: () => Ec,
  SplitZipWriter: () => hc,
  TextReader: () => vr,
  TextWriter: () => Br,
  Uint8ArrayReader: () => Kr,
  Uint8ArrayWriter: () => jr,
  Writer: () => an,
  ZipReader: () => ca,
  ZipWriter: () => wa,
  configure: () => or,
  getMimeType: () => es,
  initReader: () => cn,
  initStream: () => Ue,
  initWriter: () => ln,
  readUint8Array: () => ue,
  terminateWorkers: () => Ss
});

// https://esm.sh/v111/@zip.js/zip.js@2.6.75/deno/lib/zip-no-worker.js
function kt(t) {
  return vt(t.map(([n, e]) => new Array(n).fill(e, 0, n)));
}
function vt(t) {
  return t.reduce((n, e) => n.concat(Array.isArray(e) ? vt(e) : e), []);
}
var Ci = [0, 1, 2, 3].concat(...kt([[2, 4], [2, 5], [4, 6], [4, 7], [8, 8], [8, 9], [16, 10], [16, 11], [32, 12], [32, 13], [64, 14], [64, 15], [2, 0], [1, 16], [1, 17], [2, 18], [2, 19], [4, 20], [4, 21], [8, 22], [8, 23], [16, 24], [16, 25], [32, 26], [32, 27], [64, 28], [64, 29]]));
function X() {
  let t = this;
  function n(r) {
    let a = t.dyn_tree, o = t.stat_desc.static_tree, l = t.stat_desc.extra_bits, s = t.stat_desc.extra_base, d2 = t.stat_desc.max_length, u, h, R, T2, y, f, c = 0;
    for (T2 = 0; T2 <= 15; T2++)
      r.bl_count[T2] = 0;
    for (a[r.heap[r.heap_max] * 2 + 1] = 0, u = r.heap_max + 1; u < 573; u++)
      h = r.heap[u], T2 = a[a[h * 2 + 1] * 2 + 1] + 1, T2 > d2 && (T2 = d2, c++), a[h * 2 + 1] = T2, !(h > t.max_code) && (r.bl_count[T2]++, y = 0, h >= s && (y = l[h - s]), f = a[h * 2], r.opt_len += f * (T2 + y), o && (r.static_len += f * (o[h * 2 + 1] + y)));
    if (c !== 0) {
      do {
        for (T2 = d2 - 1; r.bl_count[T2] === 0; )
          T2--;
        r.bl_count[T2]--, r.bl_count[T2 + 1] += 2, r.bl_count[d2]--, c -= 2;
      } while (c > 0);
      for (T2 = d2; T2 !== 0; T2--)
        for (h = r.bl_count[T2]; h !== 0; )
          R = r.heap[--u], !(R > t.max_code) && (a[R * 2 + 1] != T2 && (r.opt_len += (T2 - a[R * 2 + 1]) * a[R * 2], a[R * 2 + 1] = T2), h--);
    }
  }
  function e(r, a) {
    let o = 0;
    do
      o |= r & 1, r >>>= 1, o <<= 1;
    while (--a > 0);
    return o >>> 1;
  }
  function i(r, a, o) {
    let l = [], s = 0, d2, u, h;
    for (d2 = 1; d2 <= 15; d2++)
      l[d2] = s = s + o[d2 - 1] << 1;
    for (u = 0; u <= a; u++)
      h = r[u * 2 + 1], h !== 0 && (r[u * 2] = e(l[h]++, h));
  }
  t.build_tree = function(r) {
    let a = t.dyn_tree, o = t.stat_desc.static_tree, l = t.stat_desc.elems, s, d2, u = -1, h;
    for (r.heap_len = 0, r.heap_max = 573, s = 0; s < l; s++)
      a[s * 2] !== 0 ? (r.heap[++r.heap_len] = u = s, r.depth[s] = 0) : a[s * 2 + 1] = 0;
    for (; r.heap_len < 2; )
      h = r.heap[++r.heap_len] = u < 2 ? ++u : 0, a[h * 2] = 1, r.depth[h] = 0, r.opt_len--, o && (r.static_len -= o[h * 2 + 1]);
    for (t.max_code = u, s = Math.floor(r.heap_len / 2); s >= 1; s--)
      r.pqdownheap(a, s);
    h = l;
    do
      s = r.heap[1], r.heap[1] = r.heap[r.heap_len--], r.pqdownheap(a, 1), d2 = r.heap[1], r.heap[--r.heap_max] = s, r.heap[--r.heap_max] = d2, a[h * 2] = a[s * 2] + a[d2 * 2], r.depth[h] = Math.max(r.depth[s], r.depth[d2]) + 1, a[s * 2 + 1] = a[d2 * 2 + 1] = h, r.heap[1] = h++, r.pqdownheap(a, 1);
    while (r.heap_len >= 2);
    r.heap[--r.heap_max] = r.heap[1], n(r), i(a, t.max_code, r.bl_count);
  };
}
X._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...kt([[2, 8], [2, 9], [2, 10], [2, 11], [4, 12], [4, 13], [4, 14], [4, 15], [8, 16], [8, 17], [8, 18], [8, 19], [16, 20], [16, 21], [16, 22], [16, 23], [32, 24], [32, 25], [32, 26], [31, 27], [1, 28]]));
X.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
X.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576];
X.d_code = function(t) {
  return t < 256 ? Ci[t] : Ci[256 + (t >>> 7)];
};
X.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
X.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
X.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
X.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
function _e(t, n, e, i, r) {
  let a = this;
  a.static_tree = t, a.extra_bits = n, a.extra_base = e, a.elems = i, a.max_length = r;
}
var Sa = [12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 19, 275, 147, 403, 83, 339, 211, 467, 51, 307, 179, 435, 115, 371, 243, 499, 11, 267, 139, 395, 75, 331, 203, 459, 43, 299, 171, 427, 107, 363, 235, 491, 27, 283, 155, 411, 91, 347, 219, 475, 59, 315, 187, 443, 123, 379, 251, 507, 7, 263, 135, 391, 71, 327, 199, 455, 39, 295, 167, 423, 103, 359, 231, 487, 23, 279, 151, 407, 87, 343, 215, 471, 55, 311, 183, 439, 119, 375, 247, 503, 15, 271, 143, 399, 79, 335, 207, 463, 47, 303, 175, 431, 111, 367, 239, 495, 31, 287, 159, 415, 95, 351, 223, 479, 63, 319, 191, 447, 127, 383, 255, 511, 0, 64, 32, 96, 16, 80, 48, 112, 8, 72, 40, 104, 24, 88, 56, 120, 4, 68, 36, 100, 20, 84, 52, 116, 3, 131, 67, 195, 35, 163, 99, 227], ga = kt([[144, 8], [112, 9], [24, 7], [8, 8]]);
_e.static_ltree = vt(Sa.map((t, n) => [t, ga[n]]));
var Oa = [0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9, 25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23], Da = kt([[30, 5]]);
_e.static_dtree = vt(Oa.map((t, n) => [t, Da[n]]));
_e.static_l_desc = new _e(_e.static_ltree, X.extra_lbits, 256 + 1, 286, 15);
_e.static_d_desc = new _e(_e.static_dtree, X.extra_dbits, 0, 30, 15);
_e.static_bl_desc = new _e(null, X.extra_blbits, 0, 19, 7);
var ya = 9, Ia = 8;
function Ce(t, n, e, i, r) {
  let a = this;
  a.good_length = t, a.max_lazy = n, a.nice_length = e, a.max_chain = i, a.func = r;
}
var Pi = 0, Ut = 1, $e = 2, Fe = [new Ce(0, 0, 0, 0, Pi), new Ce(4, 4, 8, 4, Ut), new Ce(4, 5, 16, 8, Ut), new Ce(4, 6, 32, 32, Ut), new Ce(4, 4, 16, 16, $e), new Ce(8, 16, 32, 32, $e), new Ce(8, 16, 128, 128, $e), new Ce(8, 32, 128, 256, $e), new Ce(32, 128, 258, 1024, $e), new Ce(32, 258, 258, 4096, $e)], Lt = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""], ge = 0, Ct = 1, ut = 2, Mt = 3, Na = 32, gn = 42, Pt = 113, dt = 666, On = 8, Fa = 0, Dn = 1, La = 2, Q = 3, Zt = 258, be = Zt + Q + 1;
function Mi(t, n, e, i) {
  let r = t[n * 2], a = t[e * 2];
  return r < a || r == a && i[n] <= i[e];
}
function Ca() {
  let t = this, n, e, i, r, a, o, l, s, d2, u, h, R, T2, y, f, c, _, E, w, g, p2, x2, A, m, O, b, D, C2, F2, v, M, U, Z, G = new X(), ce = new X(), k = new X();
  t.depth = [];
  let ne, H, V2, Re, ee, J2;
  t.bl_count = [], t.heap = [], M = [], U = [], Z = [];
  function me() {
    d2 = 2 * a, h[T2 - 1] = 0;
    for (let S = 0; S < T2 - 1; S++)
      h[S] = 0;
    b = Fe[D].max_lazy, F2 = Fe[D].good_length, v = Fe[D].nice_length, O = Fe[D].max_chain, p2 = 0, _ = 0, A = 0, E = m = Q - 1, g = 0, R = 0;
  }
  function Te() {
    let S;
    for (S = 0; S < 286; S++)
      M[S * 2] = 0;
    for (S = 0; S < 30; S++)
      U[S * 2] = 0;
    for (S = 0; S < 19; S++)
      Z[S * 2] = 0;
    M[256 * 2] = 1, t.opt_len = t.static_len = 0, H = V2 = 0;
  }
  function De() {
    G.dyn_tree = M, G.stat_desc = _e.static_l_desc, ce.dyn_tree = U, ce.stat_desc = _e.static_d_desc, k.dyn_tree = Z, k.stat_desc = _e.static_bl_desc, ee = 0, J2 = 0, Re = 8, Te();
  }
  t.pqdownheap = function(S, N) {
    let I = t.heap, L = I[N], P2 = N << 1;
    for (; P2 <= t.heap_len && (P2 < t.heap_len && Mi(S, I[P2 + 1], I[P2], t.depth) && P2++, !Mi(S, L, I[P2], t.depth)); )
      I[N] = I[P2], N = P2, P2 <<= 1;
    I[N] = L;
  };
  function re(S, N) {
    let I = -1, L, P2 = S[0 * 2 + 1], B2 = 0, K = 7, Ee = 4;
    P2 === 0 && (K = 138, Ee = 3), S[(N + 1) * 2 + 1] = 65535;
    for (let Ne = 0; Ne <= N; Ne++)
      L = P2, P2 = S[(Ne + 1) * 2 + 1], !(++B2 < K && L == P2) && (B2 < Ee ? Z[L * 2] += B2 : L !== 0 ? (L != I && Z[L * 2]++, Z[16 * 2]++) : B2 <= 10 ? Z[17 * 2]++ : Z[18 * 2]++, B2 = 0, I = L, P2 === 0 ? (K = 138, Ee = 3) : L == P2 ? (K = 6, Ee = 3) : (K = 7, Ee = 4));
  }
  function we() {
    let S;
    for (re(M, G.max_code), re(U, ce.max_code), k.build_tree(t), S = 19 - 1; S >= 3 && Z[X.bl_order[S] * 2 + 1] === 0; S--)
      ;
    return t.opt_len += 3 * (S + 1) + 5 + 5 + 4, S;
  }
  function de(S) {
    t.pending_buf[t.pending++] = S;
  }
  function Se(S) {
    de(S & 255), de(S >>> 8 & 255);
  }
  function ye(S) {
    de(S >> 8 & 255), de(S & 255 & 255);
  }
  function ae(S, N) {
    let I, L = N;
    J2 > 16 - L ? (I = S, ee |= I << J2 & 65535, Se(ee), ee = I >>> 16 - J2, J2 += L - 16) : (ee |= S << J2 & 65535, J2 += L);
  }
  function le(S, N) {
    let I = S * 2;
    ae(N[I] & 65535, N[I + 1] & 65535);
  }
  function Qe(S, N) {
    let I, L = -1, P2, B2 = S[0 * 2 + 1], K = 0, Ee = 7, Ne = 4;
    for (B2 === 0 && (Ee = 138, Ne = 3), I = 0; I <= N; I++)
      if (P2 = B2, B2 = S[(I + 1) * 2 + 1], !(++K < Ee && P2 == B2)) {
        if (K < Ne)
          do
            le(P2, Z);
          while (--K !== 0);
        else
          P2 !== 0 ? (P2 != L && (le(P2, Z), K--), le(16, Z), ae(K - 3, 2)) : K <= 10 ? (le(17, Z), ae(K - 3, 3)) : (le(18, Z), ae(K - 11, 7));
        K = 0, L = P2, B2 === 0 ? (Ee = 138, Ne = 3) : P2 == B2 ? (Ee = 6, Ne = 3) : (Ee = 7, Ne = 4);
      }
  }
  function Ie(S, N, I) {
    let L;
    for (ae(S - 257, 5), ae(N - 1, 5), ae(I - 4, 4), L = 0; L < I; L++)
      ae(Z[X.bl_order[L] * 2 + 1], 3);
    Qe(M, S - 1), Qe(U, N - 1);
  }
  function Ft() {
    J2 == 16 ? (Se(ee), ee = 0, J2 = 0) : J2 >= 8 && (de(ee & 255), ee >>>= 8, J2 -= 8);
  }
  function pn2() {
    ae(Dn << 1, 3), le(256, _e.static_ltree), Ft(), 1 + Re + 10 - J2 < 9 && (ae(Dn << 1, 3), le(256, _e.static_ltree), Ft()), Re = 7;
  }
  function ke(S, N) {
    let I, L, P2;
    if (t.dist_buf[H] = S, t.lc_buf[H] = N & 255, H++, S === 0 ? M[N * 2]++ : (V2++, S--, M[(X._length_code[N] + 256 + 1) * 2]++, U[X.d_code(S) * 2]++), !(H & 8191) && D > 2) {
      for (I = H * 8, L = p2 - _, P2 = 0; P2 < 30; P2++)
        I += U[P2 * 2] * (5 + X.extra_dbits[P2]);
      if (I >>>= 3, V2 < Math.floor(H / 2) && I < Math.floor(L / 2))
        return !0;
    }
    return H == ne - 1;
  }
  function Di(S, N) {
    let I, L, P2 = 0, B2, K;
    if (H !== 0)
      do
        I = t.dist_buf[P2], L = t.lc_buf[P2], P2++, I === 0 ? le(L, S) : (B2 = X._length_code[L], le(B2 + 256 + 1, S), K = X.extra_lbits[B2], K !== 0 && (L -= X.base_length[B2], ae(L, K)), I--, B2 = X.d_code(I), le(B2, N), K = X.extra_dbits[B2], K !== 0 && (I -= X.base_dist[B2], ae(I, K)));
      while (P2 < H);
    le(256, S), Re = S[256 * 2 + 1];
  }
  function yi() {
    J2 > 8 ? Se(ee) : J2 > 0 && de(ee & 255), ee = 0, J2 = 0;
  }
  function xa(S, N, I) {
    yi(), Re = 8, I && (Se(N), Se(~N)), t.pending_buf.set(s.subarray(S, S + N), t.pending), t.pending += N;
  }
  function Ii(S, N, I) {
    ae((Fa << 1) + (I ? 1 : 0), 3), xa(S, N, !0);
  }
  function Aa(S, N, I) {
    let L, P2, B2 = 0;
    D > 0 ? (G.build_tree(t), ce.build_tree(t), B2 = we(), L = t.opt_len + 3 + 7 >>> 3, P2 = t.static_len + 3 + 7 >>> 3, P2 <= L && (L = P2)) : L = P2 = N + 5, N + 4 <= L && S != -1 ? Ii(S, N, I) : P2 == L ? (ae((Dn << 1) + (I ? 1 : 0), 3), Di(_e.static_ltree, _e.static_dtree)) : (ae((La << 1) + (I ? 1 : 0), 3), Ie(G.max_code + 1, ce.max_code + 1, B2 + 1), Di(M, U)), Te(), I && yi();
  }
  function He(S) {
    Aa(_ >= 0 ? _ : -1, p2 - _, S), _ = p2, n.flush_pending();
  }
  function mn2() {
    let S, N, I, L;
    do {
      if (L = d2 - A - p2, L === 0 && p2 === 0 && A === 0)
        L = a;
      else if (L == -1)
        L--;
      else if (p2 >= a + a - be) {
        s.set(s.subarray(a, a + a), 0), x2 -= a, p2 -= a, _ -= a, S = T2, I = S;
        do
          N = h[--I] & 65535, h[I] = N >= a ? N - a : 0;
        while (--S !== 0);
        S = a, I = S;
        do
          N = u[--I] & 65535, u[I] = N >= a ? N - a : 0;
        while (--S !== 0);
        L += a;
      }
      if (n.avail_in === 0)
        return;
      S = n.read_buf(s, p2 + A, L), A += S, A >= Q && (R = s[p2] & 255, R = (R << c ^ s[p2 + 1] & 255) & f);
    } while (A < be && n.avail_in !== 0);
  }
  function Ta(S) {
    let N = 65535, I;
    for (N > i - 5 && (N = i - 5); ; ) {
      if (A <= 1) {
        if (mn2(), A === 0 && S == 0)
          return ge;
        if (A === 0)
          break;
      }
      if (p2 += A, A = 0, I = _ + N, (p2 === 0 || p2 >= I) && (A = p2 - I, p2 = I, He(!1), n.avail_out === 0) || p2 - _ >= a - be && (He(!1), n.avail_out === 0))
        return ge;
    }
    return He(S == 4), n.avail_out === 0 ? S == 4 ? ut : ge : S == 4 ? Mt : Ct;
  }
  function Ni(S) {
    let N = O, I = p2, L, P2, B2 = m, K = p2 > a - be ? p2 - (a - be) : 0, Ee = v, Ne = l, Sn2 = p2 + Zt, Fi = s[I + B2 - 1], Li = s[I + B2];
    m >= F2 && (N >>= 2), Ee > A && (Ee = A);
    do
      if (L = S, !(s[L + B2] != Li || s[L + B2 - 1] != Fi || s[L] != s[I] || s[++L] != s[I + 1])) {
        I += 2, L++;
        do
          ;
        while (s[++I] == s[++L] && s[++I] == s[++L] && s[++I] == s[++L] && s[++I] == s[++L] && s[++I] == s[++L] && s[++I] == s[++L] && s[++I] == s[++L] && s[++I] == s[++L] && I < Sn2);
        if (P2 = Zt - (Sn2 - I), I = Sn2 - Zt, P2 > B2) {
          if (x2 = S, B2 = P2, P2 >= Ee)
            break;
          Fi = s[I + B2 - 1], Li = s[I + B2];
        }
      }
    while ((S = u[S & Ne] & 65535) > K && --N !== 0);
    return B2 <= A ? B2 : A;
  }
  function ba(S) {
    let N = 0, I;
    for (; ; ) {
      if (A < be) {
        if (mn2(), A < be && S == 0)
          return ge;
        if (A === 0)
          break;
      }
      if (A >= Q && (R = (R << c ^ s[p2 + (Q - 1)] & 255) & f, N = h[R] & 65535, u[p2 & l] = h[R], h[R] = p2), N !== 0 && (p2 - N & 65535) <= a - be && C2 != 2 && (E = Ni(N)), E >= Q)
        if (I = ke(p2 - x2, E - Q), A -= E, E <= b && A >= Q) {
          E--;
          do
            p2++, R = (R << c ^ s[p2 + (Q - 1)] & 255) & f, N = h[R] & 65535, u[p2 & l] = h[R], h[R] = p2;
          while (--E !== 0);
          p2++;
        } else
          p2 += E, E = 0, R = s[p2] & 255, R = (R << c ^ s[p2 + 1] & 255) & f;
      else
        I = ke(0, s[p2] & 255), A--, p2++;
      if (I && (He(!1), n.avail_out === 0))
        return ge;
    }
    return He(S == 4), n.avail_out === 0 ? S == 4 ? ut : ge : S == 4 ? Mt : Ct;
  }
  function pa(S) {
    let N = 0, I, L;
    for (; ; ) {
      if (A < be) {
        if (mn2(), A < be && S == 0)
          return ge;
        if (A === 0)
          break;
      }
      if (A >= Q && (R = (R << c ^ s[p2 + (Q - 1)] & 255) & f, N = h[R] & 65535, u[p2 & l] = h[R], h[R] = p2), m = E, w = x2, E = Q - 1, N !== 0 && m < b && (p2 - N & 65535) <= a - be && (C2 != 2 && (E = Ni(N)), E <= 5 && (C2 == 1 || E == Q && p2 - x2 > 4096) && (E = Q - 1)), m >= Q && E <= m) {
        L = p2 + A - Q, I = ke(p2 - 1 - w, m - Q), A -= m - 1, m -= 2;
        do
          ++p2 <= L && (R = (R << c ^ s[p2 + (Q - 1)] & 255) & f, N = h[R] & 65535, u[p2 & l] = h[R], h[R] = p2);
        while (--m !== 0);
        if (g = 0, E = Q - 1, p2++, I && (He(!1), n.avail_out === 0))
          return ge;
      } else if (g !== 0) {
        if (I = ke(0, s[p2 - 1] & 255), I && He(!1), p2++, A--, n.avail_out === 0)
          return ge;
      } else
        g = 1, p2++, A--;
    }
    return g !== 0 && (I = ke(0, s[p2 - 1] & 255), g = 0), He(S == 4), n.avail_out === 0 ? S == 4 ? ut : ge : S == 4 ? Mt : Ct;
  }
  function ma(S) {
    return S.total_in = S.total_out = 0, S.msg = null, t.pending = 0, t.pending_out = 0, e = Pt, r = 0, De(), me(), 0;
  }
  t.deflateInit = function(S, N, I, L, P2, B2) {
    return L || (L = On), P2 || (P2 = Ia), B2 || (B2 = 0), S.msg = null, N == -1 && (N = 6), P2 < 1 || P2 > ya || L != On || I < 9 || I > 15 || N < 0 || N > 9 || B2 < 0 || B2 > 2 ? -2 : (S.dstate = t, o = I, a = 1 << o, l = a - 1, y = P2 + 7, T2 = 1 << y, f = T2 - 1, c = Math.floor((y + Q - 1) / Q), s = new Uint8Array(a * 2), u = [], h = [], ne = 1 << P2 + 6, t.pending_buf = new Uint8Array(ne * 4), i = ne * 4, t.dist_buf = new Uint16Array(ne), t.lc_buf = new Uint8Array(ne), D = N, C2 = B2, ma(S));
  }, t.deflateEnd = function() {
    return e != gn && e != Pt && e != dt ? -2 : (t.lc_buf = null, t.dist_buf = null, t.pending_buf = null, h = null, u = null, s = null, t.dstate = null, e == Pt ? -3 : 0);
  }, t.deflateParams = function(S, N, I) {
    let L = 0;
    return N == -1 && (N = 6), N < 0 || N > 9 || I < 0 || I > 2 ? -2 : (Fe[D].func != Fe[N].func && S.total_in !== 0 && (L = S.deflate(1)), D != N && (D = N, b = Fe[D].max_lazy, F2 = Fe[D].good_length, v = Fe[D].nice_length, O = Fe[D].max_chain), C2 = I, L);
  }, t.deflateSetDictionary = function(S, N, I) {
    let L = I, P2, B2 = 0;
    if (!N || e != gn)
      return -2;
    if (L < Q)
      return 0;
    for (L > a - be && (L = a - be, B2 = I - L), s.set(N.subarray(B2, B2 + L), 0), p2 = L, _ = L, R = s[0] & 255, R = (R << c ^ s[1] & 255) & f, P2 = 0; P2 <= L - Q; P2++)
      R = (R << c ^ s[P2 + (Q - 1)] & 255) & f, u[P2 & l] = h[R], h[R] = P2;
    return 0;
  }, t.deflate = function(S, N) {
    let I, L, P2, B2, K;
    if (N > 4 || N < 0)
      return -2;
    if (!S.next_out || !S.next_in && S.avail_in !== 0 || e == dt && N != 4)
      return S.msg = Lt[2 - -2], -2;
    if (S.avail_out === 0)
      return S.msg = Lt[2 - -5], -5;
    if (n = S, B2 = r, r = N, e == gn && (L = On + (o - 8 << 4) << 8, P2 = (D - 1 & 255) >> 1, P2 > 3 && (P2 = 3), L |= P2 << 6, p2 !== 0 && (L |= Na), L += 31 - L % 31, e = Pt, ye(L)), t.pending !== 0) {
      if (n.flush_pending(), n.avail_out === 0)
        return r = -1, 0;
    } else if (n.avail_in === 0 && N <= B2 && N != 4)
      return n.msg = Lt[2 - -5], -5;
    if (e == dt && n.avail_in !== 0)
      return S.msg = Lt[2 - -5], -5;
    if (n.avail_in !== 0 || A !== 0 || N != 0 && e != dt) {
      switch (K = -1, Fe[D].func) {
        case Pi:
          K = Ta(N);
          break;
        case Ut:
          K = ba(N);
          break;
        case $e:
          K = pa(N);
          break;
        default:
      }
      if ((K == ut || K == Mt) && (e = dt), K == ge || K == ut)
        return n.avail_out === 0 && (r = -1), 0;
      if (K == Ct) {
        if (N == 1)
          pn2();
        else if (Ii(0, 0, !1), N == 3)
          for (I = 0; I < T2; I++)
            h[I] = 0;
        if (n.flush_pending(), n.avail_out === 0)
          return r = -1, 0;
      }
    }
    return N != 4 ? 0 : 1;
  };
}
function Ui() {
  let t = this;
  t.next_in_index = 0, t.next_out_index = 0, t.avail_in = 0, t.total_in = 0, t.avail_out = 0, t.total_out = 0;
}
Ui.prototype = { deflateInit(t, n) {
  let e = this;
  return e.dstate = new Ca(), n || (n = 15), e.dstate.deflateInit(e, t, n);
}, deflate(t) {
  let n = this;
  return n.dstate ? n.dstate.deflate(n, t) : -2;
}, deflateEnd() {
  let t = this;
  if (!t.dstate)
    return -2;
  let n = t.dstate.deflateEnd();
  return t.dstate = null, n;
}, deflateParams(t, n) {
  let e = this;
  return e.dstate ? e.dstate.deflateParams(e, t, n) : -2;
}, deflateSetDictionary(t, n) {
  let e = this;
  return e.dstate ? e.dstate.deflateSetDictionary(e, t, n) : -2;
}, read_buf(t, n, e) {
  let i = this, r = i.avail_in;
  return r > e && (r = e), r === 0 ? 0 : (i.avail_in -= r, t.set(i.next_in.subarray(i.next_in_index, i.next_in_index + r), n), i.next_in_index += r, i.total_in += r, r);
}, flush_pending() {
  let t = this, n = t.dstate.pending;
  n > t.avail_out && (n = t.avail_out), n !== 0 && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + n), t.next_out_index), t.next_out_index += n, t.dstate.pending_out += n, t.total_out += n, t.avail_out -= n, t.dstate.pending -= n, t.dstate.pending === 0 && (t.dstate.pending_out = 0));
} };
function Zi(t) {
  let n = this, e = new Ui(), i = Ma(t && t.chunkSize ? t.chunkSize : 64 * 1024), r = 0, a = new Uint8Array(i), o = t ? t.level : -1;
  typeof o > "u" && (o = -1), e.deflateInit(o), e.next_out = a, n.append = function(l, s) {
    let d2, u, h = 0, R = 0, T2 = 0, y = [];
    if (l.length) {
      e.next_in_index = 0, e.next_in = l, e.avail_in = l.length;
      do {
        if (e.next_out_index = 0, e.avail_out = i, d2 = e.deflate(r), d2 != 0)
          throw new Error("deflating: " + e.msg);
        e.next_out_index && (e.next_out_index == i ? y.push(new Uint8Array(a)) : y.push(a.slice(0, e.next_out_index))), T2 += e.next_out_index, s && e.next_in_index > 0 && e.next_in_index != h && (s(e.next_in_index), h = e.next_in_index);
      } while (e.avail_in > 0 || e.avail_out === 0);
      return y.length > 1 ? (u = new Uint8Array(T2), y.forEach(function(f) {
        u.set(f, R), R += f.length;
      })) : u = y[0] || new Uint8Array(), u;
    }
  }, n.flush = function() {
    let l, s, d2 = 0, u = 0, h = [];
    do {
      if (e.next_out_index = 0, e.avail_out = i, l = e.deflate(4), l != 1 && l != 0)
        throw new Error("deflating: " + e.msg);
      i - e.avail_out > 0 && h.push(a.slice(0, e.next_out_index)), u += e.next_out_index;
    } while (e.avail_in > 0 || e.avail_out === 0);
    return e.deflateEnd(), s = new Uint8Array(u), h.forEach(function(R) {
      s.set(R, d2), d2 += R.length;
    }), s;
  };
}
function Ma(t) {
  return t + 5 * (Math.floor(t / 16383) + 1);
}
var pe = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], ir = 1440, Pa = 0, Ua = 4, Za = 9, ka = 5, va = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255], Ba = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577], Ha = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], Ga = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112], Va = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], Ya = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], Ge = 15;
function Fn() {
  let t = this, n, e, i, r, a, o;
  function l(d2, u, h, R, T2, y, f, c, _, E, w) {
    let g, p2, x2, A, m, O, b, D, C2, F2, v, M, U, Z, G;
    F2 = 0, m = h;
    do
      i[d2[u + F2]]++, F2++, m--;
    while (m !== 0);
    if (i[0] == h)
      return f[0] = -1, c[0] = 0, 0;
    for (D = c[0], O = 1; O <= Ge && i[O] === 0; O++)
      ;
    for (b = O, D < O && (D = O), m = Ge; m !== 0 && i[m] === 0; m--)
      ;
    for (x2 = m, D > m && (D = m), c[0] = D, Z = 1 << O; O < m; O++, Z <<= 1)
      if ((Z -= i[O]) < 0)
        return -3;
    if ((Z -= i[m]) < 0)
      return -3;
    for (i[m] += Z, o[1] = O = 0, F2 = 1, U = 2; --m !== 0; )
      o[U] = O += i[F2], U++, F2++;
    m = 0, F2 = 0;
    do
      (O = d2[u + F2]) !== 0 && (w[o[O]++] = m), F2++;
    while (++m < h);
    for (h = o[x2], o[0] = m = 0, F2 = 0, A = -1, M = -D, a[0] = 0, v = 0, G = 0; b <= x2; b++)
      for (g = i[b]; g-- !== 0; ) {
        for (; b > M + D; ) {
          if (A++, M += D, G = x2 - M, G = G > D ? D : G, (p2 = 1 << (O = b - M)) > g + 1 && (p2 -= g + 1, U = b, O < G))
            for (; ++O < G && !((p2 <<= 1) <= i[++U]); )
              p2 -= i[U];
          if (G = 1 << O, E[0] + G > ir)
            return -3;
          a[A] = v = E[0], E[0] += G, A !== 0 ? (o[A] = m, r[0] = O, r[1] = D, O = m >>> M - D, r[2] = v - a[A - 1] - O, _.set(r, (a[A - 1] + O) * 3)) : f[0] = v;
        }
        for (r[1] = b - M, F2 >= h ? r[0] = 128 + 64 : w[F2] < R ? (r[0] = w[F2] < 256 ? 0 : 32 + 64, r[2] = w[F2++]) : (r[0] = y[w[F2] - R] + 16 + 64, r[2] = T2[w[F2++] - R]), p2 = 1 << b - M, O = m >>> M; O < G; O += p2)
          _.set(r, (v + O) * 3);
        for (O = 1 << b - 1; m & O; O >>>= 1)
          m ^= O;
        for (m ^= O, C2 = (1 << M) - 1; (m & C2) != o[A]; )
          A--, M -= D, C2 = (1 << M) - 1;
      }
    return Z !== 0 && x2 != 1 ? -5 : 0;
  }
  function s(d2) {
    let u;
    for (n || (n = [], e = [], i = new Int32Array(Ge + 1), r = [], a = new Int32Array(Ge), o = new Int32Array(Ge + 1)), e.length < d2 && (e = []), u = 0; u < d2; u++)
      e[u] = 0;
    for (u = 0; u < Ge + 1; u++)
      i[u] = 0;
    for (u = 0; u < 3; u++)
      r[u] = 0;
    a.set(i.subarray(0, Ge), 0), o.set(i.subarray(0, Ge + 1), 0);
  }
  t.inflate_trees_bits = function(d2, u, h, R, T2) {
    let y;
    return s(19), n[0] = 0, y = l(d2, 0, 19, 19, null, null, h, u, R, n, e), y == -3 ? T2.msg = "oversubscribed dynamic bit lengths tree" : (y == -5 || u[0] === 0) && (T2.msg = "incomplete dynamic bit lengths tree", y = -3), y;
  }, t.inflate_trees_dynamic = function(d2, u, h, R, T2, y, f, c, _) {
    let E;
    return s(288), n[0] = 0, E = l(h, 0, d2, 257, Ha, Ga, y, R, c, n, e), E != 0 || R[0] === 0 ? (E == -3 ? _.msg = "oversubscribed literal/length tree" : E != -4 && (_.msg = "incomplete literal/length tree", E = -3), E) : (s(288), E = l(h, d2, u, 0, Va, Ya, f, T2, c, n, e), E != 0 || T2[0] === 0 && d2 > 257 ? (E == -3 ? _.msg = "oversubscribed distance tree" : E == -5 ? (_.msg = "incomplete distance tree", E = -3) : E != -4 && (_.msg = "empty distance tree with lengths", E = -3), E) : 0);
  };
}
Fn.inflate_trees_fixed = function(t, n, e, i) {
  return t[0] = Za, n[0] = ka, e[0] = va, i[0] = Ba, 0;
};
var Bt = 0, ki = 1, vi = 2, Bi = 3, Hi = 4, Gi = 5, Vi = 6, yn = 7, Yi = 8, Ht = 9;
function Ka() {
  let t = this, n, e = 0, i, r = 0, a = 0, o = 0, l = 0, s = 0, d2 = 0, u = 0, h, R = 0, T2, y = 0;
  function f(c, _, E, w, g, p2, x2, A) {
    let m, O, b, D, C2, F2, v, M, U, Z, G, ce, k, ne, H, V2;
    v = A.next_in_index, M = A.avail_in, C2 = x2.bitb, F2 = x2.bitk, U = x2.write, Z = U < x2.read ? x2.read - U - 1 : x2.end - U, G = pe[c], ce = pe[_];
    do {
      for (; F2 < 20; )
        M--, C2 |= (A.read_byte(v++) & 255) << F2, F2 += 8;
      if (m = C2 & G, O = E, b = w, V2 = (b + m) * 3, (D = O[V2]) === 0) {
        C2 >>= O[V2 + 1], F2 -= O[V2 + 1], x2.win[U++] = O[V2 + 2], Z--;
        continue;
      }
      do {
        if (C2 >>= O[V2 + 1], F2 -= O[V2 + 1], D & 16) {
          for (D &= 15, k = O[V2 + 2] + (C2 & pe[D]), C2 >>= D, F2 -= D; F2 < 15; )
            M--, C2 |= (A.read_byte(v++) & 255) << F2, F2 += 8;
          m = C2 & ce, O = g, b = p2, V2 = (b + m) * 3, D = O[V2];
          do
            if (C2 >>= O[V2 + 1], F2 -= O[V2 + 1], D & 16) {
              for (D &= 15; F2 < D; )
                M--, C2 |= (A.read_byte(v++) & 255) << F2, F2 += 8;
              if (ne = O[V2 + 2] + (C2 & pe[D]), C2 >>= D, F2 -= D, Z -= k, U >= ne)
                H = U - ne, U - H > 0 && 2 > U - H ? (x2.win[U++] = x2.win[H++], x2.win[U++] = x2.win[H++], k -= 2) : (x2.win.set(x2.win.subarray(H, H + 2), U), U += 2, H += 2, k -= 2);
              else {
                H = U - ne;
                do
                  H += x2.end;
                while (H < 0);
                if (D = x2.end - H, k > D) {
                  if (k -= D, U - H > 0 && D > U - H)
                    do
                      x2.win[U++] = x2.win[H++];
                    while (--D !== 0);
                  else
                    x2.win.set(x2.win.subarray(H, H + D), U), U += D, H += D, D = 0;
                  H = 0;
                }
              }
              if (U - H > 0 && k > U - H)
                do
                  x2.win[U++] = x2.win[H++];
                while (--k !== 0);
              else
                x2.win.set(x2.win.subarray(H, H + k), U), U += k, H += k, k = 0;
              break;
            } else if (!(D & 64))
              m += O[V2 + 2], m += C2 & pe[D], V2 = (b + m) * 3, D = O[V2];
            else
              return A.msg = "invalid distance code", k = A.avail_in - M, k = F2 >> 3 < k ? F2 >> 3 : k, M += k, v -= k, F2 -= k << 3, x2.bitb = C2, x2.bitk = F2, A.avail_in = M, A.total_in += v - A.next_in_index, A.next_in_index = v, x2.write = U, -3;
          while (!0);
          break;
        }
        if (D & 64)
          return D & 32 ? (k = A.avail_in - M, k = F2 >> 3 < k ? F2 >> 3 : k, M += k, v -= k, F2 -= k << 3, x2.bitb = C2, x2.bitk = F2, A.avail_in = M, A.total_in += v - A.next_in_index, A.next_in_index = v, x2.write = U, 1) : (A.msg = "invalid literal/length code", k = A.avail_in - M, k = F2 >> 3 < k ? F2 >> 3 : k, M += k, v -= k, F2 -= k << 3, x2.bitb = C2, x2.bitk = F2, A.avail_in = M, A.total_in += v - A.next_in_index, A.next_in_index = v, x2.write = U, -3);
        if (m += O[V2 + 2], m += C2 & pe[D], V2 = (b + m) * 3, (D = O[V2]) === 0) {
          C2 >>= O[V2 + 1], F2 -= O[V2 + 1], x2.win[U++] = O[V2 + 2], Z--;
          break;
        }
      } while (!0);
    } while (Z >= 258 && M >= 10);
    return k = A.avail_in - M, k = F2 >> 3 < k ? F2 >> 3 : k, M += k, v -= k, F2 -= k << 3, x2.bitb = C2, x2.bitk = F2, A.avail_in = M, A.total_in += v - A.next_in_index, A.next_in_index = v, x2.write = U, 0;
  }
  t.init = function(c, _, E, w, g, p2) {
    n = Bt, d2 = c, u = _, h = E, R = w, T2 = g, y = p2, i = null;
  }, t.proc = function(c, _, E) {
    let w, g, p2, x2 = 0, A = 0, m = 0, O, b, D, C2;
    for (m = _.next_in_index, O = _.avail_in, x2 = c.bitb, A = c.bitk, b = c.write, D = b < c.read ? c.read - b - 1 : c.end - b; ; )
      switch (n) {
        case Bt:
          if (D >= 258 && O >= 10 && (c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, E = f(d2, u, h, R, T2, y, c, _), m = _.next_in_index, O = _.avail_in, x2 = c.bitb, A = c.bitk, b = c.write, D = b < c.read ? c.read - b - 1 : c.end - b, E != 0)) {
            n = E == 1 ? yn : Ht;
            break;
          }
          a = d2, i = h, r = R, n = ki;
        case ki:
          for (w = a; A < w; ) {
            if (O !== 0)
              E = 0;
            else
              return c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
            O--, x2 |= (_.read_byte(m++) & 255) << A, A += 8;
          }
          if (g = (r + (x2 & pe[w])) * 3, x2 >>>= i[g + 1], A -= i[g + 1], p2 = i[g], p2 === 0) {
            o = i[g + 2], n = Vi;
            break;
          }
          if (p2 & 16) {
            l = p2 & 15, e = i[g + 2], n = vi;
            break;
          }
          if (!(p2 & 64)) {
            a = p2, r = g / 3 + i[g + 2];
            break;
          }
          if (p2 & 32) {
            n = yn;
            break;
          }
          return n = Ht, _.msg = "invalid literal/length code", E = -3, c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
        case vi:
          for (w = l; A < w; ) {
            if (O !== 0)
              E = 0;
            else
              return c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
            O--, x2 |= (_.read_byte(m++) & 255) << A, A += 8;
          }
          e += x2 & pe[w], x2 >>= w, A -= w, a = u, i = T2, r = y, n = Bi;
        case Bi:
          for (w = a; A < w; ) {
            if (O !== 0)
              E = 0;
            else
              return c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
            O--, x2 |= (_.read_byte(m++) & 255) << A, A += 8;
          }
          if (g = (r + (x2 & pe[w])) * 3, x2 >>= i[g + 1], A -= i[g + 1], p2 = i[g], p2 & 16) {
            l = p2 & 15, s = i[g + 2], n = Hi;
            break;
          }
          if (!(p2 & 64)) {
            a = p2, r = g / 3 + i[g + 2];
            break;
          }
          return n = Ht, _.msg = "invalid distance code", E = -3, c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
        case Hi:
          for (w = l; A < w; ) {
            if (O !== 0)
              E = 0;
            else
              return c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
            O--, x2 |= (_.read_byte(m++) & 255) << A, A += 8;
          }
          s += x2 & pe[w], x2 >>= w, A -= w, n = Gi;
        case Gi:
          for (C2 = b - s; C2 < 0; )
            C2 += c.end;
          for (; e !== 0; ) {
            if (D === 0 && (b == c.end && c.read !== 0 && (b = 0, D = b < c.read ? c.read - b - 1 : c.end - b), D === 0 && (c.write = b, E = c.inflate_flush(_, E), b = c.write, D = b < c.read ? c.read - b - 1 : c.end - b, b == c.end && c.read !== 0 && (b = 0, D = b < c.read ? c.read - b - 1 : c.end - b), D === 0)))
              return c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
            c.win[b++] = c.win[C2++], D--, C2 == c.end && (C2 = 0), e--;
          }
          n = Bt;
          break;
        case Vi:
          if (D === 0 && (b == c.end && c.read !== 0 && (b = 0, D = b < c.read ? c.read - b - 1 : c.end - b), D === 0 && (c.write = b, E = c.inflate_flush(_, E), b = c.write, D = b < c.read ? c.read - b - 1 : c.end - b, b == c.end && c.read !== 0 && (b = 0, D = b < c.read ? c.read - b - 1 : c.end - b), D === 0)))
            return c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
          E = 0, c.win[b++] = o, D--, n = Bt;
          break;
        case yn:
          if (A > 7 && (A -= 8, O++, m--), c.write = b, E = c.inflate_flush(_, E), b = c.write, D = b < c.read ? c.read - b - 1 : c.end - b, c.read != c.write)
            return c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
          n = Yi;
        case Yi:
          return E = 1, c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
        case Ht:
          return E = -3, c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
        default:
          return E = -2, c.bitb = x2, c.bitk = A, _.avail_in = O, _.total_in += m - _.next_in_index, _.next_in_index = m, c.write = b, c.inflate_flush(_, E);
      }
  }, t.free = function() {
  };
}
var Ki = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], it = 0, In = 1, ji = 2, Wi = 3, Xi = 4, qi = 5, Gt = 6, Vt = 7, Ji = 8, ze = 9;
function ja(t, n) {
  let e = this, i = it, r = 0, a = 0, o = 0, l, s = [0], d2 = [0], u = new Ka(), h = 0, R = new Int32Array(ir * 3), T2 = 0, y = new Fn();
  e.bitk = 0, e.bitb = 0, e.win = new Uint8Array(n), e.end = n, e.read = 0, e.write = 0, e.reset = function(f, c) {
    c && (c[0] = T2), i == Gt && u.free(f), i = it, e.bitk = 0, e.bitb = 0, e.read = e.write = 0;
  }, e.reset(t, null), e.inflate_flush = function(f, c) {
    let _, E, w;
    return E = f.next_out_index, w = e.read, _ = (w <= e.write ? e.write : e.end) - w, _ > f.avail_out && (_ = f.avail_out), _ !== 0 && c == -5 && (c = 0), f.avail_out -= _, f.total_out += _, f.next_out.set(e.win.subarray(w, w + _), E), E += _, w += _, w == e.end && (w = 0, e.write == e.end && (e.write = 0), _ = e.write - w, _ > f.avail_out && (_ = f.avail_out), _ !== 0 && c == -5 && (c = 0), f.avail_out -= _, f.total_out += _, f.next_out.set(e.win.subarray(w, w + _), E), E += _, w += _), f.next_out_index = E, e.read = w, c;
  }, e.proc = function(f, c) {
    let _, E, w, g, p2, x2, A, m;
    for (g = f.next_in_index, p2 = f.avail_in, E = e.bitb, w = e.bitk, x2 = e.write, A = x2 < e.read ? e.read - x2 - 1 : e.end - x2; ; ) {
      let O, b, D, C2, F2, v, M, U;
      switch (i) {
        case it:
          for (; w < 3; ) {
            if (p2 !== 0)
              c = 0;
            else
              return e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
            p2--, E |= (f.read_byte(g++) & 255) << w, w += 8;
          }
          switch (_ = E & 7, h = _ & 1, _ >>> 1) {
            case 0:
              E >>>= 3, w -= 3, _ = w & 7, E >>>= _, w -= _, i = In;
              break;
            case 1:
              O = [], b = [], D = [[]], C2 = [[]], Fn.inflate_trees_fixed(O, b, D, C2), u.init(O[0], b[0], D[0], 0, C2[0], 0), E >>>= 3, w -= 3, i = Gt;
              break;
            case 2:
              E >>>= 3, w -= 3, i = Wi;
              break;
            case 3:
              return E >>>= 3, w -= 3, i = ze, f.msg = "invalid block type", c = -3, e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
          }
          break;
        case In:
          for (; w < 32; ) {
            if (p2 !== 0)
              c = 0;
            else
              return e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
            p2--, E |= (f.read_byte(g++) & 255) << w, w += 8;
          }
          if ((~E >>> 16 & 65535) != (E & 65535))
            return i = ze, f.msg = "invalid stored block lengths", c = -3, e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
          r = E & 65535, E = w = 0, i = r !== 0 ? ji : h !== 0 ? Vt : it;
          break;
        case ji:
          if (p2 === 0 || A === 0 && (x2 == e.end && e.read !== 0 && (x2 = 0, A = x2 < e.read ? e.read - x2 - 1 : e.end - x2), A === 0 && (e.write = x2, c = e.inflate_flush(f, c), x2 = e.write, A = x2 < e.read ? e.read - x2 - 1 : e.end - x2, x2 == e.end && e.read !== 0 && (x2 = 0, A = x2 < e.read ? e.read - x2 - 1 : e.end - x2), A === 0)))
            return e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
          if (c = 0, _ = r, _ > p2 && (_ = p2), _ > A && (_ = A), e.win.set(f.read_buf(g, _), x2), g += _, p2 -= _, x2 += _, A -= _, (r -= _) !== 0)
            break;
          i = h !== 0 ? Vt : it;
          break;
        case Wi:
          for (; w < 14; ) {
            if (p2 !== 0)
              c = 0;
            else
              return e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
            p2--, E |= (f.read_byte(g++) & 255) << w, w += 8;
          }
          if (a = _ = E & 16383, (_ & 31) > 29 || (_ >> 5 & 31) > 29)
            return i = ze, f.msg = "too many length or distance symbols", c = -3, e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
          if (_ = 258 + (_ & 31) + (_ >> 5 & 31), !l || l.length < _)
            l = [];
          else
            for (m = 0; m < _; m++)
              l[m] = 0;
          E >>>= 14, w -= 14, o = 0, i = Xi;
        case Xi:
          for (; o < 4 + (a >>> 10); ) {
            for (; w < 3; ) {
              if (p2 !== 0)
                c = 0;
              else
                return e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
              p2--, E |= (f.read_byte(g++) & 255) << w, w += 8;
            }
            l[Ki[o++]] = E & 7, E >>>= 3, w -= 3;
          }
          for (; o < 19; )
            l[Ki[o++]] = 0;
          if (s[0] = 7, _ = y.inflate_trees_bits(l, s, d2, R, f), _ != 0)
            return c = _, c == -3 && (l = null, i = ze), e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
          o = 0, i = qi;
        case qi:
          for (; _ = a, !(o >= 258 + (_ & 31) + (_ >> 5 & 31)); ) {
            let Z, G;
            for (_ = s[0]; w < _; ) {
              if (p2 !== 0)
                c = 0;
              else
                return e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
              p2--, E |= (f.read_byte(g++) & 255) << w, w += 8;
            }
            if (_ = R[(d2[0] + (E & pe[_])) * 3 + 1], G = R[(d2[0] + (E & pe[_])) * 3 + 2], G < 16)
              E >>>= _, w -= _, l[o++] = G;
            else {
              for (m = G == 18 ? 7 : G - 14, Z = G == 18 ? 11 : 3; w < _ + m; ) {
                if (p2 !== 0)
                  c = 0;
                else
                  return e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
                p2--, E |= (f.read_byte(g++) & 255) << w, w += 8;
              }
              if (E >>>= _, w -= _, Z += E & pe[m], E >>>= m, w -= m, m = o, _ = a, m + Z > 258 + (_ & 31) + (_ >> 5 & 31) || G == 16 && m < 1)
                return l = null, i = ze, f.msg = "invalid bit length repeat", c = -3, e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
              G = G == 16 ? l[m - 1] : 0;
              do
                l[m++] = G;
              while (--Z !== 0);
              o = m;
            }
          }
          if (d2[0] = -1, F2 = [], v = [], M = [], U = [], F2[0] = 9, v[0] = 6, _ = a, _ = y.inflate_trees_dynamic(257 + (_ & 31), 1 + (_ >> 5 & 31), l, F2, v, M, U, R, f), _ != 0)
            return _ == -3 && (l = null, i = ze), c = _, e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
          u.init(F2[0], v[0], R, M[0], R, U[0]), i = Gt;
        case Gt:
          if (e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, (c = u.proc(e, f, c)) != 1)
            return e.inflate_flush(f, c);
          if (c = 0, u.free(f), g = f.next_in_index, p2 = f.avail_in, E = e.bitb, w = e.bitk, x2 = e.write, A = x2 < e.read ? e.read - x2 - 1 : e.end - x2, h === 0) {
            i = it;
            break;
          }
          i = Vt;
        case Vt:
          if (e.write = x2, c = e.inflate_flush(f, c), x2 = e.write, A = x2 < e.read ? e.read - x2 - 1 : e.end - x2, e.read != e.write)
            return e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
          i = Ji;
        case Ji:
          return c = 1, e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
        case ze:
          return c = -3, e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
        default:
          return c = -2, e.bitb = E, e.bitk = w, f.avail_in = p2, f.total_in += g - f.next_in_index, f.next_in_index = g, e.write = x2, e.inflate_flush(f, c);
      }
    }
  }, e.free = function(f) {
    e.reset(f, null), e.win = null, R = null;
  }, e.set_dictionary = function(f, c, _) {
    e.win.set(f.subarray(c, c + _), 0), e.read = e.write = _;
  }, e.sync_point = function() {
    return i == In ? 1 : 0;
  };
}
var Wa = 32, Xa = 8, qa = 0, Qi = 1, $i = 2, zi = 3, er = 4, tr = 5, Nn = 6, Et = 7, nr = 12, Ve = 13, Ja = [0, 0, 255, 255];
function Qa() {
  let t = this;
  t.mode = 0, t.method = 0, t.was = [0], t.need = 0, t.marker = 0, t.wbits = 0;
  function n(e) {
    return !e || !e.istate ? -2 : (e.total_in = e.total_out = 0, e.msg = null, e.istate.mode = Et, e.istate.blocks.reset(e, null), 0);
  }
  t.inflateEnd = function(e) {
    return t.blocks && t.blocks.free(e), t.blocks = null, 0;
  }, t.inflateInit = function(e, i) {
    return e.msg = null, t.blocks = null, i < 8 || i > 15 ? (t.inflateEnd(e), -2) : (t.wbits = i, e.istate.blocks = new ja(e, 1 << i), n(e), 0);
  }, t.inflate = function(e, i) {
    let r, a;
    if (!e || !e.istate || !e.next_in)
      return -2;
    let o = e.istate;
    for (i = i == Ua ? -5 : 0, r = -5; ; )
      switch (o.mode) {
        case qa:
          if (e.avail_in === 0)
            return r;
          if (r = i, e.avail_in--, e.total_in++, ((o.method = e.read_byte(e.next_in_index++)) & 15) != Xa) {
            o.mode = Ve, e.msg = "unknown compression method", o.marker = 5;
            break;
          }
          if ((o.method >> 4) + 8 > o.wbits) {
            o.mode = Ve, e.msg = "invalid win size", o.marker = 5;
            break;
          }
          o.mode = Qi;
        case Qi:
          if (e.avail_in === 0)
            return r;
          if (r = i, e.avail_in--, e.total_in++, a = e.read_byte(e.next_in_index++) & 255, ((o.method << 8) + a) % 31 !== 0) {
            o.mode = Ve, e.msg = "incorrect header check", o.marker = 5;
            break;
          }
          if (!(a & Wa)) {
            o.mode = Et;
            break;
          }
          o.mode = $i;
        case $i:
          if (e.avail_in === 0)
            return r;
          r = i, e.avail_in--, e.total_in++, o.need = (e.read_byte(e.next_in_index++) & 255) << 24 & 4278190080, o.mode = zi;
        case zi:
          if (e.avail_in === 0)
            return r;
          r = i, e.avail_in--, e.total_in++, o.need += (e.read_byte(e.next_in_index++) & 255) << 16 & 16711680, o.mode = er;
        case er:
          if (e.avail_in === 0)
            return r;
          r = i, e.avail_in--, e.total_in++, o.need += (e.read_byte(e.next_in_index++) & 255) << 8 & 65280, o.mode = tr;
        case tr:
          return e.avail_in === 0 ? r : (r = i, e.avail_in--, e.total_in++, o.need += e.read_byte(e.next_in_index++) & 255, o.mode = Nn, 2);
        case Nn:
          return o.mode = Ve, e.msg = "need dictionary", o.marker = 0, -2;
        case Et:
          if (r = o.blocks.proc(e, r), r == -3) {
            o.mode = Ve, o.marker = 0;
            break;
          }
          if (r == 0 && (r = i), r != 1)
            return r;
          r = i, o.blocks.reset(e, o.was), o.mode = nr;
        case nr:
          return e.avail_in = 0, 1;
        case Ve:
          return -3;
        default:
          return -2;
      }
  }, t.inflateSetDictionary = function(e, i, r) {
    let a = 0, o = r;
    if (!e || !e.istate || e.istate.mode != Nn)
      return -2;
    let l = e.istate;
    return o >= 1 << l.wbits && (o = (1 << l.wbits) - 1, a = r - o), l.blocks.set_dictionary(i, a, o), l.mode = Et, 0;
  }, t.inflateSync = function(e) {
    let i, r, a, o, l;
    if (!e || !e.istate)
      return -2;
    let s = e.istate;
    if (s.mode != Ve && (s.mode = Ve, s.marker = 0), (i = e.avail_in) === 0)
      return -5;
    for (r = e.next_in_index, a = s.marker; i !== 0 && a < 4; )
      e.read_byte(r) == Ja[a] ? a++ : e.read_byte(r) !== 0 ? a = 0 : a = 4 - a, r++, i--;
    return e.total_in += r - e.next_in_index, e.next_in_index = r, e.avail_in = i, s.marker = a, a != 4 ? -3 : (o = e.total_in, l = e.total_out, n(e), e.total_in = o, e.total_out = l, s.mode = Et, 0);
  }, t.inflateSyncPoint = function(e) {
    return !e || !e.istate || !e.istate.blocks ? -2 : e.istate.blocks.sync_point();
  };
}
function rr() {
}
rr.prototype = { inflateInit(t) {
  let n = this;
  return n.istate = new Qa(), t || (t = 15), n.istate.inflateInit(n, t);
}, inflate(t) {
  let n = this;
  return n.istate ? n.istate.inflate(n, t) : -2;
}, inflateEnd() {
  let t = this;
  if (!t.istate)
    return -2;
  let n = t.istate.inflateEnd(t);
  return t.istate = null, n;
}, inflateSync() {
  let t = this;
  return t.istate ? t.istate.inflateSync(t) : -2;
}, inflateSetDictionary(t, n) {
  let e = this;
  return e.istate ? e.istate.inflateSetDictionary(e, t, n) : -2;
}, read_byte(t) {
  return this.next_in[t];
}, read_buf(t, n) {
  return this.next_in.subarray(t, t + n);
} };
function ar(t) {
  let n = this, e = new rr(), i = t && t.chunkSize ? Math.floor(t.chunkSize * 2) : 128 * 1024, r = Pa, a = new Uint8Array(i), o = !1;
  e.inflateInit(), e.next_out = a, n.append = function(l, s) {
    let d2 = [], u, h, R = 0, T2 = 0, y = 0;
    if (l.length !== 0) {
      e.next_in_index = 0, e.next_in = l, e.avail_in = l.length;
      do {
        if (e.next_out_index = 0, e.avail_out = i, e.avail_in === 0 && !o && (e.next_in_index = 0, o = !0), u = e.inflate(r), o && u === -5) {
          if (e.avail_in !== 0)
            throw new Error("inflating: bad input");
        } else if (u !== 0 && u !== 1)
          throw new Error("inflating: " + e.msg);
        if ((o || u === 1) && e.avail_in === l.length)
          throw new Error("inflating: bad input");
        e.next_out_index && (e.next_out_index === i ? d2.push(new Uint8Array(a)) : d2.push(a.slice(0, e.next_out_index))), y += e.next_out_index, s && e.next_in_index > 0 && e.next_in_index != R && (s(e.next_in_index), R = e.next_in_index);
      } while (e.avail_in > 0 || e.avail_out === 0);
      return d2.length > 1 ? (h = new Uint8Array(y), d2.forEach(function(f) {
        h.set(f, T2), T2 += f.length;
      })) : h = d2[0] || new Uint8Array(), h;
    }
  }, n.flush = function() {
    e.inflateEnd();
  };
}
var rt = "/", Ln = new Date(2107, 11, 31), Cn = new Date(1980, 0, 1), $ = void 0, at = "undefined", Yt = "function", ht = class {
  constructor(n) {
    return class extends TransformStream {
      constructor(e, i) {
        let r = new n(i);
        super({ transform(a, o) {
          o.enqueue(r.append(a));
        }, flush(a) {
          let o = r.flush();
          o && a.enqueue(o);
        } });
      }
    };
  }
}, $a = 64, sr = 2;
try {
  typeof navigator != at && navigator.hardwareConcurrency && (sr = navigator.hardwareConcurrency);
} catch {
}
var za = { chunkSize: 512 * 1024, maxWorkers: sr, terminateWorkerTimeout: 5e3, useWebWorkers: !0, useCompressionStream: !0, workerScripts: $, CompressionStreamNative: typeof CompressionStream != at && CompressionStream, DecompressionStreamNative: typeof DecompressionStream != at && DecompressionStream }, Ke = Object.assign({}, za);
function st() {
  return Ke;
}
function Kt(t) {
  return Math.max(t.chunkSize, $a);
}
function or(t) {
  let { baseURL: n, chunkSize: e, maxWorkers: i, terminateWorkerTimeout: r, useCompressionStream: a, useWebWorkers: o, Deflate: l, Inflate: s, CompressionStream: d2, DecompressionStream: u, workerScripts: h } = t;
  if (Ye("baseURL", n), Ye("chunkSize", e), Ye("maxWorkers", i), Ye("terminateWorkerTimeout", r), Ye("useCompressionStream", a), Ye("useWebWorkers", o), l && (Ke.CompressionStream = new ht(l)), s && (Ke.DecompressionStream = new ht(s)), Ye("CompressionStream", d2), Ye("DecompressionStream", u), h !== $) {
    let { deflate: R, inflate: T2 } = h;
    if ((R || T2) && (Ke.workerScripts || (Ke.workerScripts = {})), R) {
      if (!Array.isArray(R))
        throw new Error("workerScripts.deflate must be an array");
      Ke.workerScripts.deflate = R;
    }
    if (T2) {
      if (!Array.isArray(T2))
        throw new Error("workerScripts.inflate must be an array");
      Ke.workerScripts.inflate = T2;
    }
  }
}
function Ye(t, n) {
  n !== $ && (Ke[t] = n);
}
function es() {
  return "application/octet-stream";
}
var cr = [];
for (let t = 0; t < 256; t++) {
  let n = t;
  for (let e = 0; e < 8; e++)
    n & 1 ? n = n >>> 1 ^ 3988292384 : n = n >>> 1;
  cr[t] = n;
}
var ve = class {
  constructor(n) {
    this.crc = n || -1;
  }
  append(n) {
    let e = this.crc | 0;
    for (let i = 0, r = n.length | 0; i < r; i++)
      e = e >>> 8 ^ cr[(e ^ n[i]) & 255];
    this.crc = e;
  }
  get() {
    return ~this.crc;
  }
}, Rt = class extends TransformStream {
  constructor() {
    let n = new ve();
    super({ transform(e) {
      n.append(e);
    }, flush(e) {
      let i = new Uint8Array(4);
      new DataView(i.buffer).setUint32(0, n.get()), e.enqueue(i);
    } });
  }
};
function wt(t) {
  if (typeof TextEncoder > "u") {
    t = unescape(encodeURIComponent(t));
    let n = new Uint8Array(t.length);
    for (let e = 0; e < n.length; e++)
      n[e] = t.charCodeAt(e);
    return n;
  } else
    return new TextEncoder().encode(t);
}
var he = { concat(t, n) {
  if (t.length === 0 || n.length === 0)
    return t.concat(n);
  let e = t[t.length - 1], i = he.getPartial(e);
  return i === 32 ? t.concat(n) : he._shiftRight(n, i, e | 0, t.slice(0, t.length - 1));
}, bitLength(t) {
  let n = t.length;
  if (n === 0)
    return 0;
  let e = t[n - 1];
  return (n - 1) * 32 + he.getPartial(e);
}, clamp(t, n) {
  if (t.length * 32 < n)
    return t;
  t = t.slice(0, Math.ceil(n / 32));
  let e = t.length;
  return n = n & 31, e > 0 && n && (t[e - 1] = he.partial(n, t[e - 1] & 2147483648 >> n - 1, 1)), t;
}, partial(t, n, e) {
  return t === 32 ? n : (e ? n | 0 : n << 32 - t) + t * 1099511627776;
}, getPartial(t) {
  return Math.round(t / 1099511627776) || 32;
}, _shiftRight(t, n, e, i) {
  for (i === void 0 && (i = []); n >= 32; n -= 32)
    i.push(e), e = 0;
  if (n === 0)
    return i.concat(t);
  for (let o = 0; o < t.length; o++)
    i.push(e | t[o] >>> n), e = t[o] << 32 - n;
  let r = t.length ? t[t.length - 1] : 0, a = he.getPartial(r);
  return i.push(he.partial(n + a & 31, n + a > 32 ? e : i.pop(), 1)), i;
} }, xt = { bytes: { fromBits(t) {
  let e = he.bitLength(t) / 8, i = new Uint8Array(e), r;
  for (let a = 0; a < e; a++)
    a & 3 || (r = t[a / 4]), i[a] = r >>> 24, r <<= 8;
  return i;
}, toBits(t) {
  let n = [], e, i = 0;
  for (e = 0; e < t.length; e++)
    i = i << 8 | t[e], (e & 3) === 3 && (n.push(i), i = 0);
  return e & 3 && n.push(he.partial(8 * (e & 3), i)), n;
} } }, lr = {};
lr.sha1 = class {
  constructor(t) {
    let n = this;
    n.blockSize = 512, n._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], n._key = [1518500249, 1859775393, 2400959708, 3395469782], t ? (n._h = t._h.slice(0), n._buffer = t._buffer.slice(0), n._length = t._length) : n.reset();
  }
  reset() {
    let t = this;
    return t._h = t._init.slice(0), t._buffer = [], t._length = 0, t;
  }
  update(t) {
    let n = this;
    typeof t == "string" && (t = xt.utf8String.toBits(t));
    let e = n._buffer = he.concat(n._buffer, t), i = n._length, r = n._length = i + he.bitLength(t);
    if (r > 9007199254740991)
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    let a = new Uint32Array(e), o = 0;
    for (let l = n.blockSize + i - (n.blockSize + i & n.blockSize - 1); l <= r; l += n.blockSize)
      n._block(a.subarray(16 * o, 16 * (o + 1))), o += 1;
    return e.splice(0, 16 * o), n;
  }
  finalize() {
    let t = this, n = t._buffer, e = t._h;
    n = he.concat(n, [he.partial(1, 1)]);
    for (let i = n.length + 2; i & 15; i++)
      n.push(0);
    for (n.push(Math.floor(t._length / 4294967296)), n.push(t._length | 0); n.length; )
      t._block(n.splice(0, 16));
    return t.reset(), e;
  }
  _f(t, n, e, i) {
    if (t <= 19)
      return n & e | ~n & i;
    if (t <= 39)
      return n ^ e ^ i;
    if (t <= 59)
      return n & e | n & i | e & i;
    if (t <= 79)
      return n ^ e ^ i;
  }
  _S(t, n) {
    return n << t | n >>> 32 - t;
  }
  _block(t) {
    let n = this, e = n._h, i = Array(80);
    for (let d2 = 0; d2 < 16; d2++)
      i[d2] = t[d2];
    let r = e[0], a = e[1], o = e[2], l = e[3], s = e[4];
    for (let d2 = 0; d2 <= 79; d2++) {
      d2 >= 16 && (i[d2] = n._S(1, i[d2 - 3] ^ i[d2 - 8] ^ i[d2 - 14] ^ i[d2 - 16]));
      let u = n._S(5, r) + n._f(d2, a, o, l) + s + i[d2] + n._key[Math.floor(d2 / 20)] | 0;
      s = l, l = o, o = n._S(30, a), a = r, r = u;
    }
    e[0] = e[0] + r | 0, e[1] = e[1] + a | 0, e[2] = e[2] + o | 0, e[3] = e[3] + l | 0, e[4] = e[4] + s | 0;
  }
};
var Mn = {};
Mn.aes = class {
  constructor(t) {
    let n = this;
    n._tables = [[[], [], [], [], []], [[], [], [], [], []]], n._tables[0][0][0] || n._precompute();
    let e = n._tables[0][4], i = n._tables[1], r = t.length, a, o, l, s = 1;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("invalid aes key size");
    for (n._key = [o = t.slice(0), l = []], a = r; a < 4 * r + 28; a++) {
      let d2 = o[a - 1];
      (a % r === 0 || r === 8 && a % r === 4) && (d2 = e[d2 >>> 24] << 24 ^ e[d2 >> 16 & 255] << 16 ^ e[d2 >> 8 & 255] << 8 ^ e[d2 & 255], a % r === 0 && (d2 = d2 << 8 ^ d2 >>> 24 ^ s << 24, s = s << 1 ^ (s >> 7) * 283)), o[a] = o[a - r] ^ d2;
    }
    for (let d2 = 0; a; d2++, a--) {
      let u = o[d2 & 3 ? a : a - 4];
      a <= 4 || d2 < 4 ? l[d2] = u : l[d2] = i[0][e[u >>> 24]] ^ i[1][e[u >> 16 & 255]] ^ i[2][e[u >> 8 & 255]] ^ i[3][e[u & 255]];
    }
  }
  encrypt(t) {
    return this._crypt(t, 0);
  }
  decrypt(t) {
    return this._crypt(t, 1);
  }
  _precompute() {
    let t = this._tables[0], n = this._tables[1], e = t[4], i = n[4], r = [], a = [], o, l, s, d2;
    for (let u = 0; u < 256; u++)
      a[(r[u] = u << 1 ^ (u >> 7) * 283) ^ u] = u;
    for (let u = o = 0; !e[u]; u ^= l || 1, o = a[o] || 1) {
      let h = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
      h = h >> 8 ^ h & 255 ^ 99, e[u] = h, i[h] = u, d2 = r[s = r[l = r[u]]];
      let R = d2 * 16843009 ^ s * 65537 ^ l * 257 ^ u * 16843008, T2 = r[h] * 257 ^ h * 16843008;
      for (let y = 0; y < 4; y++)
        t[y][u] = T2 = T2 << 24 ^ T2 >>> 8, n[y][h] = R = R << 24 ^ R >>> 8;
    }
    for (let u = 0; u < 5; u++)
      t[u] = t[u].slice(0), n[u] = n[u].slice(0);
  }
  _crypt(t, n) {
    if (t.length !== 4)
      throw new Error("invalid aes block size");
    let e = this._key[n], i = e.length / 4 - 2, r = [0, 0, 0, 0], a = this._tables[n], o = a[0], l = a[1], s = a[2], d2 = a[3], u = a[4], h = t[0] ^ e[0], R = t[n ? 3 : 1] ^ e[1], T2 = t[2] ^ e[2], y = t[n ? 1 : 3] ^ e[3], f = 4, c, _, E;
    for (let w = 0; w < i; w++)
      c = o[h >>> 24] ^ l[R >> 16 & 255] ^ s[T2 >> 8 & 255] ^ d2[y & 255] ^ e[f], _ = o[R >>> 24] ^ l[T2 >> 16 & 255] ^ s[y >> 8 & 255] ^ d2[h & 255] ^ e[f + 1], E = o[T2 >>> 24] ^ l[y >> 16 & 255] ^ s[h >> 8 & 255] ^ d2[R & 255] ^ e[f + 2], y = o[y >>> 24] ^ l[h >> 16 & 255] ^ s[R >> 8 & 255] ^ d2[T2 & 255] ^ e[f + 3], f += 4, h = c, R = _, T2 = E;
    for (let w = 0; w < 4; w++)
      r[n ? 3 & -w : w] = u[h >>> 24] << 24 ^ u[R >> 16 & 255] << 16 ^ u[T2 >> 8 & 255] << 8 ^ u[y & 255] ^ e[f++], c = h, h = R, R = T2, T2 = y, y = c;
    return r;
  }
};
var _r = { getRandomValues(t) {
  let n = new Uint32Array(t.buffer), e = (i) => {
    let r = 987654321, a = 4294967295;
    return function() {
      return r = 36969 * (r & 65535) + (r >> 16) & a, i = 18e3 * (i & 65535) + (i >> 16) & a, (((r << 16) + i & a) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
    };
  };
  for (let i = 0, r; i < t.length; i += 4) {
    let a = e((r || Math.random()) * 4294967296);
    r = a() * 987654071, n[i / 4] = a() * 4294967296 | 0;
  }
  return t;
} }, Pn = {};
Pn.ctrGladman = class {
  constructor(t, n) {
    this._prf = t, this._initIv = n, this._iv = n;
  }
  reset() {
    this._iv = this._initIv;
  }
  update(t) {
    return this.calculate(this._prf, t, this._iv);
  }
  incWord(t) {
    if ((t >> 24 & 255) === 255) {
      let n = t >> 16 & 255, e = t >> 8 & 255, i = t & 255;
      n === 255 ? (n = 0, e === 255 ? (e = 0, i === 255 ? i = 0 : ++i) : ++e) : ++n, t = 0, t += n << 16, t += e << 8, t += i;
    } else
      t += 1 << 24;
    return t;
  }
  incCounter(t) {
    (t[0] = this.incWord(t[0])) === 0 && (t[1] = this.incWord(t[1]));
  }
  calculate(t, n, e) {
    let i;
    if (!(i = n.length))
      return [];
    let r = he.bitLength(n);
    for (let a = 0; a < i; a += 4) {
      this.incCounter(e);
      let o = t.encrypt(e);
      n[a] ^= o[0], n[a + 1] ^= o[1], n[a + 2] ^= o[2], n[a + 3] ^= o[3];
    }
    return he.clamp(n, r);
  }
};
var je = { importKey(t) {
  return new je.hmacSha1(xt.bytes.toBits(t));
}, pbkdf2(t, n, e, i) {
  if (e = e || 1e4, i < 0 || e < 0)
    throw new Error("invalid params to pbkdf2");
  let r = (i >> 5) + 1 << 2, a, o, l, s, d2, u = new ArrayBuffer(r), h = new DataView(u), R = 0, T2 = he;
  for (n = xt.bytes.toBits(n), d2 = 1; R < (r || 1); d2++) {
    for (a = o = t.encrypt(T2.concat(n, [d2])), l = 1; l < e; l++)
      for (o = t.encrypt(o), s = 0; s < o.length; s++)
        a[s] ^= o[s];
    for (l = 0; R < (r || 1) && l < a.length; l++)
      h.setInt32(R, a[l]), R += 4;
  }
  return u.slice(0, i / 8);
} };
je.hmacSha1 = class {
  constructor(t) {
    let n = this, e = n._hash = lr.sha1, i = [[], []];
    n._baseHash = [new e(), new e()];
    let r = n._baseHash[0].blockSize / 32;
    t.length > r && (t = new e().update(t).finalize());
    for (let a = 0; a < r; a++)
      i[0][a] = t[a] ^ 909522486, i[1][a] = t[a] ^ 1549556828;
    n._baseHash[0].update(i[0]), n._baseHash[1].update(i[1]), n._resultHash = new e(n._baseHash[0]);
  }
  reset() {
    let t = this;
    t._resultHash = new t._hash(t._baseHash[0]), t._updated = !1;
  }
  update(t) {
    let n = this;
    n._updated = !0, n._resultHash.update(t);
  }
  digest() {
    let t = this, n = t._resultHash.finalize(), e = new t._hash(t._baseHash[1]).update(n).finalize();
    return t.reset(), e;
  }
  encrypt(t) {
    if (this._updated)
      throw new Error("encrypt on already updated hmac called!");
    return this.update(t), this.digest(t);
  }
};
var ts = typeof crypto < "u" && typeof crypto.getRandomValues == "function", We = "Invalid password", et = "Invalid signature";
function jt(t) {
  return ts ? crypto.getRandomValues(t) : _r.getRandomValues(t);
}
var ot = 16, ns = "raw", dr = { name: "PBKDF2" }, is = { name: "HMAC" }, rs = "SHA-1", as = Object.assign({ hash: is }, dr), Un = Object.assign({ iterations: 1e3, hash: { name: rs } }, dr), ss = ["deriveBits"], Tt = [8, 12, 16], At = [16, 24, 32], Xe = 10, os = [0, 0, 0, 0], Er = "undefined", hr = "function", qt = typeof crypto != Er, mt = qt && crypto.subtle, Rr = qt && typeof mt != Er, Me = xt.bytes, cs = Mn.aes, ls = Pn.ctrGladman, _s = je.hmacSha1, fr = qt && Rr && typeof mt.importKey == hr, ur = qt && Rr && typeof mt.deriveBits == hr, Wt = class extends TransformStream {
  constructor({ password: n, signed: e, encryptionStrength: i }) {
    super({ start() {
      Object.assign(this, { ready: new Promise((r) => this.resolveReady = r), password: n, signed: e, strength: i - 1, pending: new Uint8Array() });
    }, async transform(r, a) {
      let o = this, { password: l, strength: s, resolveReady: d2, ready: u } = o;
      l ? (await fs(o, s, l, Oe(r, 0, Tt[s] + 2)), r = Oe(r, Tt[s] + 2), d2()) : await u;
      let h = new Uint8Array(r.length - Xe - (r.length - Xe) % ot);
      a.enqueue(wr(o, r, h, 0, Xe, !0));
    }, async flush(r) {
      let { signed: a, ctr: o, hmac: l, pending: s, ready: d2 } = this;
      await d2;
      let u = Oe(s, 0, s.length - Xe), h = Oe(s, s.length - Xe), R = new Uint8Array();
      if (u.length) {
        let T2 = pt(Me, u);
        l.update(T2);
        let y = o.update(T2);
        R = bt(Me, y);
      }
      if (a) {
        let T2 = Oe(bt(Me, l.digest()), 0, Xe);
        for (let y = 0; y < Xe; y++)
          if (T2[y] != h[y])
            throw new Error(et);
      }
      r.enqueue(R);
    } });
  }
}, Xt = class extends TransformStream {
  constructor({ password: n, encryptionStrength: e }) {
    let i;
    super({ start() {
      Object.assign(this, { ready: new Promise((r) => this.resolveReady = r), password: n, strength: e - 1, pending: new Uint8Array() });
    }, async transform(r, a) {
      let o = this, { password: l, strength: s, resolveReady: d2, ready: u } = o, h = new Uint8Array();
      l ? (h = await us(o, s, l), d2()) : await u;
      let R = new Uint8Array(h.length + r.length - r.length % ot);
      R.set(h, 0), a.enqueue(wr(o, r, R, h.length, 0));
    }, async flush(r) {
      let { ctr: a, hmac: o, pending: l, ready: s } = this;
      await s;
      let d2 = new Uint8Array();
      if (l.length) {
        let u = a.update(pt(Me, l));
        o.update(u), d2 = bt(Me, u);
      }
      i.signature = bt(Me, o.digest()).slice(0, Xe), r.enqueue(Zn(d2, i.signature));
    } }), i = this;
  }
};
function wr(t, n, e, i, r, a) {
  let { ctr: o, hmac: l, pending: s } = t, d2 = n.length - r;
  s.length && (n = Zn(s, n), e = hs(e, d2 - d2 % ot));
  let u;
  for (u = 0; u <= d2 - ot; u += ot) {
    let h = pt(Me, Oe(n, u, u + ot));
    a && l.update(h);
    let R = o.update(h);
    a || l.update(R), e.set(bt(Me, R), u + i);
  }
  return t.pending = Oe(n, u), e;
}
async function fs(t, n, e, i) {
  let r = await xr(t, n, e, Oe(i, 0, Tt[n])), a = Oe(i, Tt[n]);
  if (r[0] != a[0] || r[1] != a[1])
    throw new Error(We);
}
async function us(t, n, e) {
  let i = jt(new Uint8Array(Tt[n])), r = await xr(t, n, e, i);
  return Zn(i, r);
}
async function xr(t, n, e, i) {
  t.password = null;
  let r = wt(e), a = await ds(ns, r, as, !1, ss), o = await Es(Object.assign({ salt: i }, Un), a, 8 * (At[n] * 2 + 2)), l = new Uint8Array(o), s = pt(Me, Oe(l, 0, At[n])), d2 = pt(Me, Oe(l, At[n], At[n] * 2)), u = Oe(l, At[n] * 2);
  return Object.assign(t, { keys: { key: s, authentication: d2, passwordVerification: u }, ctr: new ls(new cs(s), Array.from(os)), hmac: new _s(d2) }), u;
}
async function ds(t, n, e, i, r) {
  if (fr)
    try {
      return await mt.importKey(t, n, e, i, r);
    } catch {
      return fr = !1, je.importKey(n);
    }
  else
    return je.importKey(n);
}
async function Es(t, n, e) {
  if (ur)
    try {
      return await mt.deriveBits(t, n, e);
    } catch {
      return ur = !1, je.pbkdf2(n, t.salt, Un.iterations, e);
    }
  else
    return je.pbkdf2(n, t.salt, Un.iterations, e);
}
function Zn(t, n) {
  let e = t;
  return t.length + n.length && (e = new Uint8Array(t.length + n.length), e.set(t, 0), e.set(n, t.length)), e;
}
function hs(t, n) {
  if (n && n > t.length) {
    let e = t;
    t = new Uint8Array(n), t.set(e, 0);
  }
  return t;
}
function Oe(t, n, e) {
  return t.subarray(n, e);
}
function bt(t, n) {
  return t.fromBits(n);
}
function pt(t, n) {
  return t.toBits(n);
}
var ct = 12, Jt = class extends TransformStream {
  constructor({ password: n, passwordVerification: e }) {
    super({ start() {
      Object.assign(this, { password: n, passwordVerification: e }), pr(this, n);
    }, transform(i, r) {
      let a = this;
      if (a.password) {
        let o = Ar(a, i.subarray(0, ct));
        if (a.password = null, o[ct - 1] != a.passwordVerification)
          throw new Error(We);
        i = i.subarray(ct);
      }
      r.enqueue(Ar(a, i));
    } });
  }
}, Qt = class extends TransformStream {
  constructor({ password: n, passwordVerification: e }) {
    super({ start() {
      Object.assign(this, { password: n, passwordVerification: e }), pr(this, n);
    }, transform(i, r) {
      let a = this, o, l;
      if (a.password) {
        a.password = null;
        let s = jt(new Uint8Array(ct));
        s[ct - 1] = a.passwordVerification, o = new Uint8Array(i.length + s.length), o.set(Tr(a, s), 0), l = ct;
      } else
        o = new Uint8Array(i.length), l = 0;
      o.set(Tr(a, i), l), r.enqueue(o);
    } });
  }
};
function Ar(t, n) {
  let e = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++)
    e[i] = mr(t) ^ n[i], kn(t, e[i]);
  return e;
}
function Tr(t, n) {
  let e = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++)
    e[i] = mr(t) ^ n[i], kn(t, n[i]);
  return e;
}
function pr(t, n) {
  let e = [305419896, 591751049, 878082192];
  Object.assign(t, { keys: e, crcKey0: new ve(e[0]), crcKey2: new ve(e[2]) });
  for (let i = 0; i < n.length; i++)
    kn(t, n.charCodeAt(i));
}
function kn(t, n) {
  let [e, i, r] = t.keys;
  t.crcKey0.append([n]), e = ~t.crcKey0.get(), i = br(Math.imul(br(i + Sr(e)), 134775813) + 1), t.crcKey2.append([i >>> 24]), r = ~t.crcKey2.get(), t.keys = [e, i, r];
}
function mr(t) {
  let n = t.keys[2] | 2;
  return Sr(Math.imul(n, n ^ 1) >>> 8);
}
function Sr(t) {
  return t & 255;
}
function br(t) {
  return t & 4294967295;
}
var gr = "deflate-raw", $t = class extends TransformStream {
  constructor(n, { chunkSize: e, CompressionStream: i, CompressionStreamNative: r }) {
    super({});
    let { compressed: a, encrypted: o, useCompressionStream: l, zipCrypto: s, signed: d2, level: u } = n, h = this, R, T2, y = Or(super.readable);
    (!o || s) && d2 && ([y, R] = y.tee(), R = Pe(R, new Rt())), a && (y = yr(y, l, { level: u, chunkSize: e }, r, i)), o && (s ? y = Pe(y, new Qt(n)) : (T2 = new Xt(n), y = Pe(y, T2))), Dr(h, y, async () => {
      let f;
      o && !s && (f = T2.signature), (!o || s) && d2 && (f = await R.getReader().read(), f = new DataView(f.value.buffer).getUint32(0)), h.signature = f;
    });
  }
}, zt = class extends TransformStream {
  constructor(n, { chunkSize: e, DecompressionStream: i, DecompressionStreamNative: r }) {
    super({});
    let { zipCrypto: a, encrypted: o, signed: l, signature: s, compressed: d2, useCompressionStream: u } = n, h, R, T2 = Or(super.readable);
    o && (a ? T2 = Pe(T2, new Jt(n)) : (R = new Wt(n), T2 = Pe(T2, R))), d2 && (T2 = yr(T2, u, { chunkSize: e }, r, i)), (!o || a) && l && ([T2, h] = T2.tee(), h = Pe(h, new Rt())), Dr(this, T2, async () => {
      if ((!o || a) && l) {
        let y = await h.getReader().read(), f = new DataView(y.value.buffer);
        if (s != f.getUint32(0, !1))
          throw new Error(et);
      }
    });
  }
};
function Or(t) {
  return Pe(t, new TransformStream({ transform(n, e) {
    n && n.length && e.enqueue(n);
  } }));
}
function Dr(t, n, e) {
  n = Pe(n, new TransformStream({ flush: e })), Object.defineProperty(t, "readable", { get() {
    return n;
  } });
}
function yr(t, n, e, i, r) {
  try {
    let a = n && i ? i : r;
    t = Pe(t, new a(gr, e));
  } catch (a) {
    if (n)
      t = Pe(t, new r(gr, e));
    else
      throw a;
  }
  return t;
}
function Pe(t, n) {
  return t.pipeThrough(n);
}
var Ir = "message", Nr = "start", Fr = "pull", vn = "data", Lr = "ack", Cr = "close", tn = "deflate", nn = "inflate", en = class extends TransformStream {
  constructor(n, e) {
    super({});
    let i = this, { codecType: r } = n, a;
    r.startsWith(tn) ? a = $t : r.startsWith(nn) && (a = zt);
    let o = 0, l = new a(n, e), s = super.readable, d2 = new TransformStream({ transform(u, h) {
      u && u.length && (o += u.length, h.enqueue(u));
    }, flush() {
      let { signature: u } = l;
      Object.assign(i, { signature: u, size: o });
    } });
    Object.defineProperty(i, "readable", { get() {
      return s.pipeThrough(l).pipeThrough(d2);
    } });
  }
}, Rs = typeof Worker != at, lt = class {
  constructor(n, { readable: e, writable: i }, { options: r, config: a, streamOptions: o, useWebWorkers: l, transferStreams: s, scripts: d2 }, u) {
    let { signal: h } = o;
    return Object.assign(n, { busy: !0, readable: e.pipeThrough(new Hn(e, o, a), { signal: h }), writable: i, options: Object.assign({}, r), scripts: d2, transferStreams: s, terminate() {
      let { worker: R, busy: T2 } = n;
      R && !T2 && (R.terminate(), n.interface = null);
    }, onTaskFinished() {
      n.busy = !1, u(n);
    } }), (l && Rs ? xs : ws)(n, a);
  }
}, Hn = class extends TransformStream {
  constructor(n, { onstart: e, onprogress: i, size: r, onend: a }, { chunkSize: o }) {
    let l = 0;
    super({ start() {
      e && Bn(e, r);
    }, async transform(s, d2) {
      l += s.length, i && await Bn(i, l, r), d2.enqueue(s);
    }, flush() {
      n.size = l, a && Bn(a, l);
    } }, { highWaterMark: 1, size: () => o });
  }
};
async function Bn(t, ...n) {
  try {
    await t(...n);
  } catch {
  }
}
function ws(t, n) {
  return { run: () => As(t, n) };
}
function xs(t, { baseURL: n, chunkSize: e }) {
  return t.interface || Object.assign(t, { worker: ps(t.scripts[0], n, t), interface: { run: () => Ts(t, { chunkSize: e }) } }), t.interface;
}
async function As({ options: t, readable: n, writable: e, onTaskFinished: i }, r) {
  let a = new en(t, r);
  try {
    await n.pipeThrough(a).pipeTo(e, { preventClose: !0, preventAbort: !0 });
    let { signature: o, size: l } = a;
    return { signature: o, size: l };
  } finally {
    i();
  }
}
async function Ts(t, n) {
  let e, i, r = new Promise((R, T2) => {
    e = R, i = T2;
  });
  Object.assign(t, { reader: null, writer: null, resolveResult: e, rejectResult: i, result: r });
  let { readable: a, options: o, scripts: l } = t, { writable: s, closed: d2 } = bs(t.writable);
  Gn({ type: Nr, scripts: l.slice(1), options: o, config: n, readable: a, writable: s }, t) || Object.assign(t, { reader: a.getReader(), writer: s.getWriter() });
  let h = await r;
  try {
    await s.close();
  } catch {
  }
  return await d2, h;
}
function bs(t) {
  let n = t.getWriter(), e, i = new Promise((a) => e = a);
  return { writable: new WritableStream({ async write(a) {
    await n.ready, await n.write(a);
  }, close() {
    n.releaseLock(), e();
  }, abort(a) {
    return n.abort(a);
  } }), closed: i };
}
var Mr = !0, Pr = !0;
function ps(t, n, e) {
  let i = { type: "module" }, r, a;
  typeof t == Yt && (t = t());
  try {
    r = new URL(t, n);
  } catch {
    r = t;
  }
  if (Mr)
    try {
      a = new Worker(r);
    } catch {
      Mr = !1, a = new Worker(r, i);
    }
  else
    a = new Worker(r, i);
  return a.addEventListener(Ir, (o) => ms(o, e)), a;
}
function Gn(t, { worker: n, writer: e, onTaskFinished: i, transferStreams: r }) {
  try {
    let { value: a, readable: o, writable: l } = t, s = [];
    if (a) {
      let { buffer: d2, length: u } = a;
      u != d2.byteLength && (a = new Uint8Array(a)), t.value = a.buffer, s.push(t.value);
    }
    if (r && Pr ? (o && s.push(o), l && s.push(l)) : t.readable = t.writable = null, s.length)
      try {
        return n.postMessage(t, s), !0;
      } catch {
        Pr = !1, t.readable = t.writable = null, n.postMessage(t);
      }
    else
      n.postMessage(t);
  } catch (a) {
    throw e && e.releaseLock(), i(), a;
  }
}
async function ms({ data: t }, n) {
  let { type: e, value: i, messageId: r, result: a, error: o } = t, { reader: l, writer: s, resolveResult: d2, rejectResult: u, onTaskFinished: h } = n;
  try {
    if (o) {
      let { message: T2, stack: y, code: f, name: c } = o, _ = new Error(T2);
      Object.assign(_, { stack: y, code: f, name: c }), R(_);
    } else {
      if (e == Fr) {
        let { value: T2, done: y } = await l.read();
        Gn({ type: vn, value: T2, done: y, messageId: r }, n);
      }
      e == vn && (await s.ready, await s.write(new Uint8Array(i)), Gn({ type: Lr, messageId: r }, n)), e == Cr && R(null, a);
    }
  } catch (T2) {
    R(T2);
  }
  function R(T2, y) {
    T2 ? u(T2) : d2(y), s && s.releaseLock(), h();
  }
}
var qe = [], Vn = [], Ur = 0;
async function rn(t, n) {
  let { options: e, config: i } = n, { transferStreams: r, useWebWorkers: a, useCompressionStream: o, codecType: l, compressed: s, signed: d2, encrypted: u } = e, { workerScripts: h, maxWorkers: R, terminateWorkerTimeout: T2 } = i;
  n.transferStreams = r || r === $;
  let y = !s && !d2 && !u && !n.transferStreams;
  n.useWebWorkers = !y && (a || a === $ && i.useWebWorkers), n.scripts = n.useWebWorkers && h ? h[l] : [], e.useCompressionStream = o || o === $ && i.useCompressionStream;
  let f, c = qe.find((E) => !E.busy);
  if (c)
    Yn(c), f = new lt(c, t, n, _);
  else if (qe.length < R) {
    let E = { indexWorker: Ur };
    Ur++, qe.push(E), f = new lt(E, t, n, _);
  } else
    f = await new Promise((E) => Vn.push({ resolve: E, stream: t, workerOptions: n }));
  return f.run();
  function _(E) {
    if (Vn.length) {
      let [{ resolve: w, stream: g, workerOptions: p2 }] = Vn.splice(0, 1);
      w(new lt(E, g, p2, _));
    } else
      E.worker ? (Yn(E), Number.isFinite(T2) && T2 >= 0 && (E.terminateTimeout = setTimeout(() => {
        qe = qe.filter((w) => w != E), E.terminate();
      }, T2))) : qe = qe.filter((w) => w != E);
  }
}
function Yn(t) {
  let { terminateTimeout: n } = t;
  n && (clearTimeout(n), t.terminateTimeout = null);
}
function Ss() {
  qe.forEach((t) => {
    Yn(t), t.terminate();
  });
}
var Wr = "HTTP error ", on = "HTTP Range not supported", gs = "Writer iterator completed too soon", Os = "text/plain", Ds = "Content-Length", ys = "Content-Range", Is = "Accept-Ranges", Ns = "Range", Fs = "Content-Type", Ls = "HEAD", Jn = "GET", Xr = "bytes", Cs = 64 * 1024, Qn = "writable", _t = class {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}, Be = class extends _t {
  get readable() {
    let n = this, { chunkSize: e = Cs } = n, i = new ReadableStream({ start() {
      this.chunkOffset = 0;
    }, async pull(r) {
      let { offset: a = 0, size: o, diskNumberStart: l } = i, { chunkOffset: s } = this;
      r.enqueue(await ue(n, a + s, Math.min(e, o - s), l)), s + e > o ? r.close() : this.chunkOffset += e;
    } });
    return i;
  }
}, an = class extends _t {
  constructor() {
    super();
    let n = this, e = new WritableStream({ write(i) {
      return n.writeUint8Array(i);
    } });
    Object.defineProperty(n, Qn, { get() {
      return e;
    } });
  }
  writeUint8Array() {
  }
}, Zr = class extends Be {
  constructor(n) {
    super();
    let e = n.length;
    for (; n.charAt(e - 1) == "="; )
      e--;
    let i = n.indexOf(",") + 1;
    Object.assign(this, { dataURI: n, dataStart: i, size: Math.floor((e - i) * 0.75) });
  }
  readUint8Array(n, e) {
    let { dataStart: i, dataURI: r } = this, a = new Uint8Array(e), o = Math.floor(n / 3) * 4, l = atob(r.substring(o + i, Math.ceil((n + e) / 3) * 4 + i)), s = n - Math.floor(o / 4) * 3;
    for (let d2 = s; d2 < s + e; d2++)
      a[d2 - s] = l.charCodeAt(d2);
    return a;
  }
}, kr = class extends an {
  constructor(n) {
    super(), Object.assign(this, { data: "data:" + (n || "") + ";base64,", pending: [] });
  }
  writeUint8Array(n) {
    let e = this, i = 0, r = e.pending, a = e.pending.length;
    for (e.pending = "", i = 0; i < Math.floor((a + n.length) / 3) * 3 - a; i++)
      r += String.fromCharCode(n[i]);
    for (; i < n.length; i++)
      e.pending += String.fromCharCode(n[i]);
    r.length > 2 ? e.data += btoa(r) : e.pending = r;
  }
  getData() {
    return this.data + btoa(this.pending);
  }
}, St = class extends Be {
  constructor(n) {
    super(), Object.assign(this, { blob: n, size: n.size });
  }
  async readUint8Array(n, e) {
    let i = this, r = n + e, a = n || r < i.size ? i.blob.slice(n, r) : i.blob;
    return new Uint8Array(await a.arrayBuffer());
  }
}, gt = class extends _t {
  constructor(n) {
    super();
    let e = this, i = new TransformStream(), r = [];
    n && r.push([Fs, n]), Object.defineProperty(e, Qn, { get() {
      return i.writable;
    } }), e.blob = new Response(i.readable, { headers: r }).blob();
  }
  getData() {
    return this.blob;
  }
}, vr = class extends St {
  constructor(n) {
    super(new Blob([n], { type: Os }));
  }
}, Br = class extends gt {
  constructor(n) {
    super(n), Object.assign(this, { encoding: n, utf8: !n || n.toLowerCase() == "utf-8" });
  }
  async getData() {
    let { encoding: n, utf8: e } = this, i = await super.getData();
    if (i.text && e)
      return i.text();
    {
      let r = new FileReader();
      return new Promise((a, o) => {
        Object.assign(r, { onload: ({ target: l }) => a(l.result), onerror: () => o(r.error) }), r.readAsText(i, n);
      });
    }
  }
}, Kn = class extends Be {
  constructor(n, e) {
    super(), qr(this, n, e);
  }
  async init() {
    await Jr(this, Wn, Hr), super.init();
  }
  readUint8Array(n, e) {
    return Qr(this, n, e, Wn, Hr);
  }
}, jn = class extends Be {
  constructor(n, e) {
    super(), qr(this, n, e);
  }
  async init() {
    await Jr(this, Xn, Gr), super.init();
  }
  readUint8Array(n, e) {
    return Qr(this, n, e, Xn, Gr);
  }
};
function qr(t, n, e) {
  let { preventHeadRequest: i, useRangeHeader: r, forceRangeRequests: a } = e;
  e = Object.assign({}, e), delete e.preventHeadRequest, delete e.useRangeHeader, delete e.forceRangeRequests, delete e.useXHR, Object.assign(t, { url: n, options: e, preventHeadRequest: i, useRangeHeader: r, forceRangeRequests: a });
}
async function Jr(t, n, e) {
  let { url: i, useRangeHeader: r, forceRangeRequests: a } = t;
  if (Ms(i) && (r || a)) {
    let { headers: o } = await n(Jn, t, $r(t));
    if (!a && o.get(Is) != Xr)
      throw new Error(on);
    {
      let l, s = o.get(ys);
      if (s) {
        let d2 = s.trim().split(/\s*\/\s*/);
        if (d2.length) {
          let u = d2[1];
          u && u != "*" && (l = Number(u));
        }
      }
      l === $ ? await Vr(t, n, e) : t.size = l;
    }
  } else
    await Vr(t, n, e);
}
async function Qr(t, n, e, i, r) {
  let { useRangeHeader: a, forceRangeRequests: o, options: l } = t;
  if (a || o) {
    let s = await i(Jn, t, $r(t, n, e));
    if (s.status != 206)
      throw new Error(on);
    return new Uint8Array(await s.arrayBuffer());
  } else {
    let { data: s } = t;
    return s || await r(t, l), new Uint8Array(t.data.subarray(n, n + e));
  }
}
function $r(t, n = 0, e = 1) {
  return Object.assign({}, $n(t), { [Ns]: Xr + "=" + n + "-" + (n + e - 1) });
}
function $n({ options: t }) {
  let { headers: n } = t;
  if (n)
    return Symbol.iterator in n ? Object.fromEntries(n) : n;
}
async function Hr(t) {
  await zr(t, Wn);
}
async function Gr(t) {
  await zr(t, Xn);
}
async function zr(t, n) {
  let e = await n(Jn, t, $n(t));
  t.data = new Uint8Array(await e.arrayBuffer()), t.size || (t.size = t.data.length);
}
async function Vr(t, n, e) {
  if (t.preventHeadRequest)
    await e(t, t.options);
  else {
    let r = (await n(Ls, t, $n(t))).headers.get(Ds);
    r ? t.size = Number(r) : await e(t, t.options);
  }
}
async function Wn(t, { options: n, url: e }, i) {
  let r = await fetch(e, Object.assign({}, n, { method: t, headers: i }));
  if (r.status < 400)
    return r;
  throw r.status == 416 ? new Error(on) : new Error(Wr + (r.statusText || r.status));
}
function Xn(t, { url: n }, e) {
  return new Promise((i, r) => {
    let a = new XMLHttpRequest();
    if (a.addEventListener("load", () => {
      if (a.status < 400) {
        let o = [];
        a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((l) => {
          let s = l.trim().split(/\s*:\s*/);
          s[0] = s[0].trim().replace(/^[a-z]|-[a-z]/g, (d2) => d2.toUpperCase()), o.push(s);
        }), i({ status: a.status, arrayBuffer: () => a.response, headers: new Map(o) });
      } else
        r(a.status == 416 ? new Error(on) : new Error(Wr + (a.statusText || a.status)));
    }, !1), a.addEventListener("error", (o) => r(o.detail.error), !1), a.open(t, n), e)
      for (let o of Object.entries(e))
        a.setRequestHeader(o[0], o[1]);
    a.responseType = "arraybuffer", a.send();
  });
}
var qn = class extends Be {
  constructor(n, e = {}) {
    super(), Object.assign(this, { url: n, reader: e.useXHR ? new jn(n, e) : new Kn(n, e) });
  }
  set size(n) {
  }
  get size() {
    return this.reader.size;
  }
  async init() {
    await this.reader.init(), super.init();
  }
  readUint8Array(n, e) {
    return this.reader.readUint8Array(n, e);
  }
}, Yr = class extends qn {
  constructor(n, e = {}) {
    e.useRangeHeader = !0, super(n, e);
  }
}, Kr = class extends Be {
  constructor(n) {
    super(), Object.assign(this, { array: n, size: n.length });
  }
  readUint8Array(n, e) {
    return this.array.slice(n, n + e);
  }
}, jr = class extends an {
  init(n = 0) {
    Object.assign(this, { offset: 0, array: new Uint8Array(n) }), super.init();
  }
  writeUint8Array(n) {
    let e = this;
    if (e.offset + n.length > e.array.length) {
      let i = e.array;
      e.array = new Uint8Array(i.length + n.length), e.array.set(i);
    }
    e.array.set(n, e.offset), e.offset += n.length;
  }
  getData() {
    return this.array;
  }
}, sn = class extends Be {
  constructor(n) {
    super(), this.readers = n;
  }
  async init() {
    let n = this, { readers: e } = n;
    n.lastDiskNumber = 0, await Promise.all(e.map(async (i) => {
      await i.init(), n.size += i.size;
    })), super.init();
  }
  async readUint8Array(n, e, i = 0) {
    let r = this, { readers: a } = this, o, l = i;
    l == -1 && (l = a.length - 1);
    let s = n;
    for (; s >= a[l].size; )
      s -= a[l].size, l++;
    let d2 = a[l], u = d2.size;
    if (s + e <= u)
      o = await ue(d2, s, e);
    else {
      let h = u - s;
      o = new Uint8Array(e), o.set(await ue(d2, s, h)), o.set(await r.readUint8Array(n + h, e - h, i), h);
    }
    return r.lastDiskNumber = Math.max(l, r.lastDiskNumber), o;
  }
}, tt = class extends _t {
  constructor(n, e = 4294967295) {
    super();
    let i = this;
    Object.assign(i, { diskNumber: 0, diskOffset: 0, size: 0, maxSize: e, availableSize: e });
    let r, a, o, l = new WritableStream({ async write(u) {
      let { availableSize: h } = i;
      if (o)
        u.length >= h ? (await s(u.slice(0, h)), await d2(), i.diskOffset += r.size, i.diskNumber++, o = null, await this.write(u.slice(h))) : await s(u);
      else {
        let { value: R, done: T2 } = await n.next();
        if (T2 && !R)
          throw new Error(gs);
        r = R, r.size = 0, r.maxSize && (i.maxSize = r.maxSize), i.availableSize = i.maxSize, await Ue(r), a = R.writable, o = a.getWriter(), await this.write(u);
      }
    }, async close() {
      await o.ready, await d2();
    } });
    Object.defineProperty(i, Qn, { get() {
      return l;
    } });
    async function s(u) {
      let h = u.length;
      h && (await o.ready, await o.write(u), r.size += h, i.size += h, i.availableSize -= h);
    }
    async function d2() {
      a.size = r.size, await o.close();
    }
  }
};
function Ms(t) {
  let { baseURL: n } = st(), { protocol: e } = new URL(t, n);
  return e == "http:" || e == "https:";
}
async function Ue(t, n) {
  t.init && !t.initialized && await t.init(n);
}
function cn(t) {
  return Array.isArray(t) && (t = new sn(t)), t instanceof ReadableStream && (t = { readable: t }), t;
}
function ln(t) {
  t.writable === $ && typeof t.next == Yt && (t = new tt(t)), t instanceof WritableStream && (t = { writable: t });
  let { writable: n } = t;
  return n.size === $ && (n.size = 0), t instanceof tt || Object.assign(t, { diskNumber: 0, diskOffset: 0, availableSize: 1 / 0, maxSize: 1 / 0 }), t;
}
function ue(t, n, e, i) {
  return t.readUint8Array(n, e, i);
}
var Ec = sn, hc = tt, ea = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""), Ps = ea.length == 256;
function ta(t) {
  if (Ps) {
    let n = "";
    for (let e = 0; e < t.length; e++)
      n += ea[t[e]];
    return n;
  } else
    return new TextDecoder().decode(t);
}
function _n(t, n) {
  return n && n.trim().toLowerCase() == "cp437" ? ta(t) : new TextDecoder(n).decode(t);
}
var zn = "filename", ei = "rawFilename", ti = "comment", ni = "rawComment", ii = "uncompressedSize", ri = "compressedSize", ai = "offset", fn = "diskNumberStart", Ot = "lastModDate", si = "rawLastModDate", Dt = "lastAccessDate", na = "rawLastAccessDate", yt = "creationDate", ia = "rawCreationDate", oi = "internalFileAttribute", ci = "externalFileAttribute", li = "msDosCompatible", _i = "zip64", Us = [zn, ei, ri, ii, Ot, si, ti, ni, Dt, yt, ai, fn, fn, oi, ci, li, _i, "directory", "bitFlag", "encrypted", "signature", "filenameUTF8", "commentUTF8", "compressionMethod", "version", "versionMadeBy", "extraField", "rawExtraField", "extraFieldZip64", "extraFieldUnicodePath", "extraFieldUnicodeComment", "extraFieldAES", "extraFieldNTFS", "extraFieldExtendedTimestamp"], Je = class {
  constructor(n) {
    Us.forEach((e) => this[e] = n[e]);
  }
}, fi = "File format is not recognized", Bs = "End of central directory not found", Hs = "End of Zip64 central directory not found", Gs = "End of Zip64 central directory locator not found", Vs = "Central directory header not found", Ys = "Local file header not found", Ks = "Zip64 extra field not found", js = "File contains encrypted entry", Ws = "Encryption method not supported", ra = "Compression method not supported", aa = "Split zip file", sa = "utf-8", oa = "cp437", Xs = [[ii, 4294967295], [ri, 4294967295], [ai, 4294967295], [fn, 65535]], qs = { [65535]: { getValue: ie, bytes: 4 }, [4294967295]: { getValue: un, bytes: 8 } }, ca = class {
  constructor(n, e = {}) {
    Object.assign(this, { reader: cn(n), options: e, config: st() });
  }
  async *getEntriesGenerator(n = {}) {
    let e = this, { reader: i } = e, { config: r } = e;
    if (await Ue(i), (i.size === $ || !i.readUint8Array) && (i = new St(await new Response(i.readable).blob()), await Ue(i)), i.size < 22)
      throw new Error(fi);
    i.chunkSize = Kt(r);
    let a = await eo(i, 101010256, i.size, 22, 65535 * 16);
    if (!a) {
      let O = await ue(i, 0, 4), b = fe(O);
      throw ie(b) == 134695760 ? new Error(aa) : new Error(Bs);
    }
    let o = fe(a), l = ie(o, 12), s = ie(o, 16), d2 = a.offset, u = se(o, 20), h = d2 + 22 + u, R = se(o, 4), T2 = i.lastDiskNumber || 0, y = se(o, 6), f = se(o, 8), c = 0, _ = 0;
    if (s == 4294967295 || l == 4294967295 || f == 65535 || y == 65535) {
      let O = await ue(i, a.offset - 20, 20), b = fe(O);
      if (ie(b, 0) != 117853008)
        throw new Error(Hs);
      s = un(b, 8);
      let D = await ue(i, s, 56, -1), C2 = fe(D), F2 = a.offset - 20 - 56;
      if (ie(C2, 0) != 101075792 && s != F2) {
        let v = s;
        s = F2, c = s - v, D = await ue(i, s, 56, -1), C2 = fe(D);
      }
      if (ie(C2, 0) != 101075792)
        throw new Error(Gs);
      R == 65535 && (R = ie(C2, 16)), y == 65535 && (y = ie(C2, 20)), f == 65535 && (f = un(C2, 32)), l == 4294967295 && (l = un(C2, 40)), s -= l;
    }
    if (T2 != R)
      throw new Error(aa);
    if (s < 0 || s >= i.size)
      throw new Error(fi);
    let E = 0, w = await ue(i, s, l, y), g = fe(w);
    if (l) {
      let O = a.offset - l;
      if (ie(g, E) != 33639248 && s != O) {
        let b = s;
        s = O, c = s - b, w = await ue(i, s, l, y), g = fe(w);
      }
    }
    if (s < 0 || s >= i.size)
      throw new Error(fi);
    let p2 = Le(e, n, "filenameEncoding"), x2 = Le(e, n, "commentEncoding");
    for (let O = 0; O < f; O++) {
      let b = new di(i, r, e.options);
      if (ie(g, E) != 33639248)
        throw new Error(Vs);
      _a(b, g, E + 6);
      let D = Boolean(b.bitFlag.languageEncodingFlag), C2 = E + 46, F2 = C2 + b.filenameLength, v = F2 + b.extraFieldLength, M = se(g, E + 4), U = (M & 0) == 0, Z = w.subarray(C2, F2), G = se(g, E + 32), ce = v + G, k = w.subarray(v, ce), ne = D, H = D, V2 = U && (ft(g, E + 38) & 16) == 16, Re = ie(g, E + 42) + c;
      Object.assign(b, { versionMadeBy: M, msDosCompatible: U, compressedSize: 0, uncompressedSize: 0, commentLength: G, directory: V2, offset: Re, diskNumberStart: se(g, E + 34), internalFileAttribute: se(g, E + 36), externalFileAttribute: ie(g, E + 38), rawFilename: Z, filenameUTF8: ne, commentUTF8: H, rawExtraField: w.subarray(F2, v) });
      let [ee, J2] = await Promise.all([_n(Z, ne ? sa : p2 || oa), _n(k, H ? sa : x2 || oa)]);
      Object.assign(b, { rawComment: k, filename: ee, comment: J2, directory: V2 || ee.endsWith(rt) }), _ = Math.max(Re, _), await fa(b, b, g, E + 6);
      let me = new Je(b);
      me.getData = (De, re) => b.getData(De, me, re), E = ce;
      let { onprogress: Te } = n;
      if (Te)
        try {
          await Te(O + 1, f, new Je(b));
        } catch {
        }
      yield me;
    }
    let A = Le(e, n, "extractPrependedData"), m = Le(e, n, "extractAppendedData");
    return A && (e.prependedData = _ > 0 ? await ue(i, 0, _) : new Uint8Array()), e.comment = u ? await ue(i, d2 + 22, u) : new Uint8Array(), m && (e.appendedData = h < i.size ? await ue(i, h, i.size - h) : new Uint8Array()), !0;
  }
  async getEntries(n = {}) {
    let e = [];
    for await (let i of this.getEntriesGenerator(n))
      e.push(i);
    return e;
  }
  async close() {
  }
}, di = class {
  constructor(n, e, i) {
    Object.assign(this, { reader: n, config: e, options: i });
  }
  async getData(n, e, i = {}) {
    let r = this, { reader: a, offset: o, diskNumberStart: l, extraFieldAES: s, compressionMethod: d2, config: u, bitFlag: h, signature: R, rawLastModDate: T2, uncompressedSize: y, compressedSize: f } = r, c = r.localDirectory = {}, _ = await ue(a, o, 30, l), E = fe(_), w = Le(r, i, "password");
    if (w = w && w.length && w, s && s.originalCompressionMethod != 99)
      throw new Error(ra);
    if (d2 != 0 && d2 != 8)
      throw new Error(ra);
    if (ie(E, 0) != 67324752)
      throw new Error(Ys);
    _a(c, E, 4), c.rawExtraField = c.extraFieldLength ? await ue(a, o + 30 + c.filenameLength, c.extraFieldLength, l) : new Uint8Array(), await fa(r, c, E, 4), Object.assign(e, { lastAccessDate: c.lastAccessDate, creationDate: c.creationDate });
    let g = r.encrypted && c.encrypted, p2 = g && !s;
    if (g) {
      if (!p2 && s.strength === $)
        throw new Error(Ws);
      if (!w)
        throw new Error(js);
    }
    let x2 = o + 30 + c.filenameLength + c.extraFieldLength, A = a.readable;
    A.diskNumberStart = l, A.offset = x2;
    let m = A.size = f, O = Le(r, i, "signal");
    n = ln(n), await Ue(n, y);
    let { writable: b } = n, { onstart: D, onprogress: C2, onend: F2 } = i, v = { options: { codecType: nn, password: w, zipCrypto: p2, encryptionStrength: s && s.strength, signed: Le(r, i, "checkSignature"), passwordVerification: p2 && (h.dataDescriptor ? T2 >>> 8 & 255 : R >>> 24 & 255), signature: R, compressed: d2 != 0, encrypted: g, useWebWorkers: Le(r, i, "useWebWorkers"), useCompressionStream: Le(r, i, "useCompressionStream"), transferStreams: Le(r, i, "transferStreams") }, config: u, streamOptions: { signal: O, size: m, onstart: D, onprogress: C2, onend: F2 } };
    return b.size += (await rn({ readable: A, writable: b }, v)).size, Le(r, i, "preventClose") || await b.close(), n.getData ? n.getData() : b;
  }
};
function _a(t, n, e) {
  let i = t.rawBitFlag = se(n, e + 2), r = (i & 1) == 1, a = ie(n, e + 6);
  Object.assign(t, { encrypted: r, version: se(n, e), bitFlag: { level: (i & 6) >> 1, dataDescriptor: (i & 8) == 8, languageEncodingFlag: (i & 2048) == 2048 }, rawLastModDate: a, lastModDate: to(a), filenameLength: se(n, e + 22), extraFieldLength: se(n, e + 24) });
}
async function fa(t, n, e, i) {
  let { rawExtraField: r } = n, a = n.extraField = /* @__PURE__ */ new Map(), o = fe(new Uint8Array(r)), l = 0;
  try {
    for (; l < r.length; ) {
      let f = se(o, l), c = se(o, l + 2);
      a.set(f, { type: f, data: r.slice(l + 4, l + 4 + c) }), l += 4 + c;
    }
  } catch {
  }
  let s = se(e, i + 4);
  Object.assign(n, { signature: ie(e, i + 10), uncompressedSize: ie(e, i + 18), compressedSize: ie(e, i + 14) });
  let d2 = a.get(1);
  d2 && (Js(d2, n), n.extraFieldZip64 = d2);
  let u = a.get(28789);
  u && (await la(u, zn, ei, n, t), n.extraFieldUnicodePath = u);
  let h = a.get(25461);
  h && (await la(h, ti, ni, n, t), n.extraFieldUnicodeComment = h);
  let R = a.get(39169);
  R ? (Qs(R, n, s), n.extraFieldAES = R) : n.compressionMethod = s;
  let T2 = a.get(10);
  T2 && ($s(T2, n), n.extraFieldNTFS = T2);
  let y = a.get(21589);
  y && (zs(y, n), n.extraFieldExtendedTimestamp = y);
}
function Js(t, n) {
  n.zip64 = !0;
  let e = fe(t.data), i = Xs.filter(([r, a]) => n[r] == a);
  for (let r = 0, a = 0; r < i.length; r++) {
    let [o, l] = i[r];
    if (n[o] == l) {
      let s = qs[l];
      n[o] = t[o] = s.getValue(e, a), a += s.bytes;
    } else if (t[o])
      throw new Error(Ks);
  }
}
async function la(t, n, e, i, r) {
  let a = fe(t.data), o = new ve();
  o.append(r[e]);
  let l = fe(new Uint8Array(4));
  l.setUint32(0, o.get(), !0), Object.assign(t, { version: ft(a, 0), signature: ie(a, 1), [n]: await _n(t.data.subarray(5)), valid: !r.bitFlag.languageEncodingFlag && t.signature == ie(l, 0) }), t.valid && (i[n] = t[n], i[n + "UTF8"] = !0);
}
function Qs(t, n, e) {
  let i = fe(t.data), r = ft(i, 4);
  Object.assign(t, { vendorVersion: ft(i, 0), vendorId: ft(i, 2), strength: r, originalCompressionMethod: e, compressionMethod: se(i, 5) }), n.compressionMethod = t.compressionMethod;
}
function $s(t, n) {
  let e = fe(t.data), i = 4, r;
  try {
    for (; i < t.data.length && !r; ) {
      let a = se(e, i), o = se(e, i + 2);
      a == 1 && (r = t.data.slice(i + 4, i + 4 + o)), i += 4 + o;
    }
  } catch {
  }
  try {
    if (r && r.length == 24) {
      let a = fe(r), o = a.getBigUint64(0, !0), l = a.getBigUint64(8, !0), s = a.getBigUint64(16, !0);
      Object.assign(t, { rawLastModDate: o, rawLastAccessDate: l, rawCreationDate: s });
      let d2 = ui(o), u = ui(l), h = ui(s), R = { lastModDate: d2, lastAccessDate: u, creationDate: h };
      Object.assign(t, R), Object.assign(n, R);
    }
  } catch {
  }
}
function zs(t, n) {
  let e = fe(t.data), i = ft(e, 0), r = [], a = [];
  (i & 1) == 1 && (r.push(Ot), a.push(si)), (i & 2) == 2 && (r.push(Dt), a.push(na)), (i & 4) == 4 && (r.push(yt), a.push(ia));
  let o = 1;
  r.forEach((l, s) => {
    if (t.data.length >= o + 4) {
      let d2 = ie(e, o);
      n[l] = t[l] = new Date(d2 * 1e3);
      let u = a[s];
      t[u] = d2;
    }
    o += 4;
  });
}
async function eo(t, n, e, i, r) {
  let a = new Uint8Array(4), o = fe(a);
  no(o, 0, n);
  let l = i + r;
  return await s(i) || await s(Math.min(l, e));
  async function s(d2) {
    let u = e - d2, h = await ue(t, u, d2);
    for (let R = h.length - i; R >= 0; R--)
      if (h[R] == a[0] && h[R + 1] == a[1] && h[R + 2] == a[2] && h[R + 3] == a[3])
        return { offset: u + R, buffer: h.slice(R, R + i).buffer };
  }
}
function Le(t, n, e) {
  return n[e] === $ ? t.options[e] : n[e];
}
function to(t) {
  let n = (t & 4294901760) >> 16, e = t & 65535;
  try {
    return new Date(1980 + ((n & 65024) >> 9), ((n & 480) >> 5) - 1, n & 31, (e & 63488) >> 11, (e & 2016) >> 5, (e & 31) * 2, 0);
  } catch {
  }
}
function ui(t) {
  return new Date(Number(t / BigInt(1e4) - BigInt(116444736e5)));
}
function ft(t, n) {
  return t.getUint8(n);
}
function se(t, n) {
  return t.getUint16(n, !0);
}
function ie(t, n) {
  return t.getUint32(n, !0);
}
function un(t, n) {
  return Number(t.getBigUint64(n, !0));
}
function no(t, n, e) {
  t.setUint32(n, e, !0);
}
function fe(t) {
  return new DataView(t.buffer);
}
var so = "File already exists", oo = "Zip file comment exceeds 64KB", co = "File entry comment exceeds 64KB", lo = "File entry name exceeds 64KB", Ea = "Version exceeds 65535", _o = "The strength must equal 1, 2, or 3", fo = "Extra field type exceeds 65535", uo = "Extra field data exceeds 64KB", Oi = "Zip64 is not supported (make sure 'keepOrder' is set to 'true')", ha = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]), Si = 0, Ra = [], wa = class {
  constructor(n, e = {}) {
    n = ln(n), Object.assign(this, { writer: n, addSplitZipSignature: n instanceof tt, options: e, config: st(), files: /* @__PURE__ */ new Map(), filenames: /* @__PURE__ */ new Set(), offset: n.writable.size, pendingEntriesSize: 0, pendingAddFileCalls: /* @__PURE__ */ new Set(), bufferedWrites: 0 });
  }
  async add(n = "", e, i = {}) {
    let r = this, { pendingAddFileCalls: a, config: o } = r;
    Si < o.maxWorkers ? Si++ : await new Promise((s) => Ra.push(s));
    let l;
    try {
      if (n = n.trim(), r.filenames.has(n))
        throw new Error(so);
      return r.filenames.add(n), l = Eo(r, n, e, i), a.add(l), await l;
    } catch (s) {
      throw r.filenames.delete(n), s;
    } finally {
      a.delete(l);
      let s = Ra.shift();
      s ? s() : Si--;
    }
  }
  async close(n = new Uint8Array(), e = {}) {
    let i = this, { pendingAddFileCalls: r, writer: a } = this, { writable: o } = a;
    for (; r.size; )
      await Promise.all(Array.from(r));
    return await po(this, n, e), q(i, e, "preventClose") || await o.close(), a.getData ? a.getData() : o;
  }
};
async function Eo(t, n, e, i) {
  n = n.trim(), i.directory && !n.endsWith(rt) ? n += rt : i.directory = n.endsWith(rt);
  let r = wt(n);
  if (j(r) > 65535)
    throw new Error(lo);
  let a = i.comment || "", o = wt(a);
  if (j(o) > 65535)
    throw new Error(co);
  let l = q(t, i, "version", 20);
  if (l > 65535)
    throw new Error(Ea);
  let s = q(t, i, "versionMadeBy", 20);
  if (s > 65535)
    throw new Error(Ea);
  let d2 = q(t, i, Ot, /* @__PURE__ */ new Date()), u = q(t, i, Dt), h = q(t, i, yt), R = q(t, i, li, !0), T2 = q(t, i, oi, 0), y = q(t, i, ci, 0), f = q(t, i, "password"), c = q(t, i, "encryptionStrength", 3), _ = q(t, i, "zipCrypto"), E = q(t, i, "extendedTimestamp", !0), w = q(t, i, "keepOrder", !0), g = q(t, i, "level"), p2 = q(t, i, "useWebWorkers"), x2 = q(t, i, "bufferedWrite"), A = q(t, i, "dataDescriptorSignature", !1), m = q(t, i, "signal"), O = q(t, i, "useCompressionStream"), b = q(t, i, "dataDescriptor", !0), D = q(t, i, _i);
  if (f !== $ && c !== $ && (c < 1 || c > 3))
    throw new Error(_o);
  let C2 = new Uint8Array(), { extraField: F2 } = i;
  if (F2) {
    let De = 0, re = 0;
    F2.forEach((we) => De += 4 + j(we)), C2 = new Uint8Array(De), F2.forEach((we, de) => {
      if (de > 65535)
        throw new Error(fo);
      if (j(we) > 65535)
        throw new Error(uo);
      oe(C2, new Uint16Array([de]), re), oe(C2, new Uint16Array([j(we)]), re + 2), oe(C2, we, re + 4), re += 4 + j(we);
    });
  }
  let v = 0, M = 0, U = 0, Z = D === !0;
  e && (e = cn(e), await Ue(e), e.size === $ ? (b = !0, (D || D === $) && (D = !0, v = 4294967295)) : (U = e.size, v = So(U)));
  let { diskOffset: G, diskNumber: ce, maxSize: k } = t.writer, ne = Z || U >= 4294967295, H = Z || v >= 4294967295, V2 = Z || t.offset + t.pendingEntriesSize - G >= 4294967295, ee = q(t, i, "supportZip64SplitFile", !0) && Z || ce + Math.ceil(t.pendingEntriesSize / k) >= 65535;
  if (V2 || ne || H || ee) {
    if (D === !1 || !w)
      throw new Error(Oi);
    D = !0;
  }
  D = D || !1, i = Object.assign({}, i, { rawFilename: r, rawComment: o, version: l, versionMadeBy: s, lastModDate: d2, lastAccessDate: u, creationDate: h, rawExtraField: C2, zip64: D, zip64UncompressedSize: ne, zip64CompressedSize: H, zip64Offset: V2, zip64DiskNumberStart: ee, password: f, level: g, useWebWorkers: p2, encryptionStrength: c, extendedTimestamp: E, zipCrypto: _, bufferedWrite: x2, keepOrder: w, dataDescriptor: b, dataDescriptorSignature: A, signal: m, msDosCompatible: R, internalFileAttribute: T2, externalFileAttribute: y, useCompressionStream: O });
  let J2 = wo(i), me = xo(i);
  M = j(J2.localHeaderArray, me.dataDescriptorArray) + v, t.pendingEntriesSize += M;
  let Te;
  try {
    Te = await ho(t, n, e, { headerInfo: J2, dataDescriptorInfo: me }, i);
  } finally {
    t.pendingEntriesSize -= M;
  }
  return Object.assign(Te, { name: n, comment: a, extraField: F2 }), new Je(Te);
}
async function ho(t, n, e, i, r) {
  let { files: a, writer: o } = t, { keepOrder: l, dataDescriptor: s, signal: d2 } = r, { headerInfo: u } = i, h = Array.from(a.values()).pop(), R = {}, T2, y, f, c, _, E;
  a.set(n, R);
  try {
    let x2;
    l && (x2 = h && h.lock, w()), r.bufferedWrite || t.writerLocked || t.bufferedWrites && l || !s ? (E = new gt(), E.writable.size = 0, T2 = !0, t.bufferedWrites++, await Ue(o)) : (E = o, await g()), await Ue(E);
    let { writable: A } = o, { diskOffset: m } = o;
    if (t.addSplitZipSignature) {
      delete t.addSplitZipSignature;
      let b = new Uint8Array(4), D = Ae(b);
      Y(D, 0, 134695760), await Ze(A, b), t.offset += 4;
    }
    T2 || (await x2, await p2(A));
    let { diskNumber: O } = o;
    if (_ = !0, R.diskNumberStart = O, R = await Ro(e, E, R, i, t.config, r), _ = !1, a.set(n, R), R.filename = n, T2) {
      await E.writable.close();
      let b = await E.getData();
      await x2, await g(), c = !0, s || (b = await To(R, b, A, r)), await p2(A), R.diskNumberStart = o.diskNumber, m = o.diskOffset, await b.stream().pipeTo(A, { preventClose: !0, preventAbort: !0, signal: d2 }), A.size += b.size, c = !1;
    }
    if (R.offset = t.offset - m, R.zip64)
      bo(R, r);
    else if (R.offset >= 4294967295)
      throw new Error(Oi);
    return t.offset += R.length, R;
  } catch (x2) {
    if (T2 && c || !T2 && _) {
      if (t.hasCorruptedEntries = !0, x2)
        try {
          x2.corruptedEntry = !0;
        } catch {
        }
      T2 ? t.offset += E.writable.size : t.offset = E.writable.size;
    }
    throw a.delete(n), x2;
  } finally {
    T2 && t.bufferedWrites--, f && f(), y && y();
  }
  function w() {
    R.lock = new Promise((x2) => f = x2);
  }
  async function g() {
    t.writerLocked = !0;
    let { lockWriter: x2 } = t;
    t.lockWriter = new Promise((A) => y = () => {
      t.writerLocked = !1, A();
    }), await x2;
  }
  async function p2(x2) {
    u.localHeaderArray.length > o.availableSize && (o.availableSize = 0, await Ze(x2, new Uint8Array()));
  }
}
async function Ro(t, n, { diskNumberStart: e, lock: i }, r, a, o) {
  let { headerInfo: l, dataDescriptorInfo: s } = r, { localHeaderArray: d2, headerArray: u, lastModDate: h, rawLastModDate: R, encrypted: T2, compressed: y, version: f, compressionMethod: c, rawExtraFieldExtendedTimestamp: _, rawExtraFieldNTFS: E, rawExtraFieldAES: w } = l, { dataDescriptorArray: g } = s, { rawFilename: p2, lastAccessDate: x2, creationDate: A, password: m, level: O, zip64: b, zip64UncompressedSize: D, zip64CompressedSize: C2, zip64Offset: F2, zip64DiskNumberStart: v, zipCrypto: M, dataDescriptor: U, directory: Z, versionMadeBy: G, rawComment: ce, rawExtraField: k, useWebWorkers: ne, onstart: H, onprogress: V2, onend: Re, signal: ee, encryptionStrength: J2, extendedTimestamp: me, msDosCompatible: Te, internalFileAttribute: De, externalFileAttribute: re, useCompressionStream: we } = o, de = { lock: i, versionMadeBy: G, zip64: b, directory: Boolean(Z), filenameUTF8: !0, rawFilename: p2, commentUTF8: !0, rawComment: ce, rawExtraFieldExtendedTimestamp: _, rawExtraFieldNTFS: E, rawExtraFieldAES: w, rawExtraField: k, extendedTimestamp: me, msDosCompatible: Te, internalFileAttribute: De, externalFileAttribute: re, diskNumberStart: e }, Se = 0, ye = 0, ae, { writable: le } = n;
  if (t) {
    t.chunkSize = Kt(a), await Ze(le, d2);
    let Ie = t.readable, Ft = Ie.size = t.size, pn2 = { options: { codecType: tn, level: O, password: m, encryptionStrength: J2, zipCrypto: T2 && M, passwordVerification: T2 && M && R >> 8 & 255, signed: !0, compressed: y, encrypted: T2, useWebWorkers: ne, useCompressionStream: we, transferStreams: !1 }, config: a, streamOptions: { signal: ee, size: Ft, onstart: H, onprogress: V2, onend: Re } }, ke = await rn({ readable: Ie, writable: le }, pn2);
    le.size += ke.size, ae = ke.signature, ye = t.size = Ie.size, Se = ke.size;
  } else
    await Ze(le, d2);
  let Qe;
  if (b) {
    let Ie = 4;
    D && (Ie += 8), C2 && (Ie += 8), F2 && (Ie += 8), v && (Ie += 4), Qe = new Uint8Array(Ie);
  } else
    Qe = new Uint8Array();
  return t && Ao({ signature: ae, rawExtraFieldZip64: Qe, compressedSize: Se, uncompressedSize: ye, headerInfo: l, dataDescriptorInfo: s }, o), U && await Ze(le, g), Object.assign(de, { uncompressedSize: ye, compressedSize: Se, lastModDate: h, rawLastModDate: R, creationDate: A, lastAccessDate: x2, encrypted: T2, length: j(d2, g) + Se, compressionMethod: c, version: f, headerArray: u, signature: ae, rawExtraFieldZip64: Qe, zip64UncompressedSize: D, zip64CompressedSize: C2, zip64Offset: F2, zip64DiskNumberStart: v }), de;
}
function wo(t) {
  let { rawFilename: n, lastModDate: e, lastAccessDate: i, creationDate: r, password: a, level: o, zip64: l, zipCrypto: s, dataDescriptor: d2, directory: u, rawExtraField: h, encryptionStrength: R, extendedTimestamp: T2 } = t, y = o !== 0 && !u, f = Boolean(a && j(a)), c = t.version, _;
  if (f && !s) {
    _ = new Uint8Array(j(ha) + 2);
    let M = Ae(_);
    W(M, 0, 39169), oe(_, ha, 2), bn(M, 8, R);
  } else
    _ = new Uint8Array();
  let E, w;
  if (T2) {
    w = new Uint8Array(9 + (i ? 4 : 0) + (r ? 4 : 0));
    let M = Ae(w);
    W(M, 0, 21589), W(M, 2, j(w) - 4);
    let U = 1 + (i ? 2 : 0) + (r ? 4 : 0);
    bn(M, 4, U), Y(M, 5, Math.floor(e.getTime() / 1e3)), i && Y(M, 9, Math.floor(i.getTime() / 1e3)), r && Y(M, 13, Math.floor(r.getTime() / 1e3));
    try {
      E = new Uint8Array(36);
      let Z = Ae(E), G = gi(e);
      W(Z, 0, 10), W(Z, 2, 32), W(Z, 8, 1), W(Z, 10, 24), xe(Z, 12, G), xe(Z, 20, gi(i) || G), xe(Z, 28, gi(r) || G);
    } catch {
      E = new Uint8Array();
    }
  } else
    E = w = new Uint8Array();
  let g = 2048;
  d2 && (g = g | 8);
  let p2 = 0;
  y && (p2 = 8), l && (c = c > 45 ? c : 45), f && (g = g | 1, s || (c = c > 51 ? c : 51, p2 = 99, y && (_[9] = 8)));
  let x2 = new Uint8Array(26), A = Ae(x2);
  W(A, 0, c), W(A, 2, g), W(A, 4, p2);
  let m = new Uint32Array(1), O = Ae(m), b;
  e < Cn ? b = Cn : e > Ln ? b = Ln : b = e, W(O, 0, (b.getHours() << 6 | b.getMinutes()) << 5 | b.getSeconds() / 2), W(O, 2, (b.getFullYear() - 1980 << 4 | b.getMonth() + 1) << 5 | b.getDate());
  let D = m[0];
  Y(A, 6, D), W(A, 22, j(n));
  let C2 = j(_, w, E, h);
  W(A, 24, C2);
  let F2 = new Uint8Array(30 + j(n) + C2), v = Ae(F2);
  return Y(v, 0, 67324752), oe(F2, x2, 4), oe(F2, n, 30), oe(F2, _, 30 + j(n)), oe(F2, w, 30 + j(n, _)), oe(F2, E, 30 + j(n, _, w)), oe(F2, h, 30 + j(n, _, w, E)), { localHeaderArray: F2, headerArray: x2, headerView: A, lastModDate: e, rawLastModDate: D, encrypted: f, compressed: y, version: c, compressionMethod: p2, rawExtraFieldExtendedTimestamp: w, rawExtraFieldNTFS: E, rawExtraFieldAES: _ };
}
function xo(t) {
  let { zip64: n, dataDescriptor: e, dataDescriptorSignature: i } = t, r = new Uint8Array(), a, o = 0;
  return e && (r = new Uint8Array(n ? i ? 24 : 20 : i ? 16 : 12), a = Ae(r), i && (o = 4, Y(a, 0, 134695760))), { dataDescriptorArray: r, dataDescriptorView: a, dataDescriptorOffset: o };
}
function Ao(t, n) {
  let { signature: e, rawExtraFieldZip64: i, compressedSize: r, uncompressedSize: a, headerInfo: o, dataDescriptorInfo: l } = t, { headerView: s, encrypted: d2 } = o, { dataDescriptorView: u, dataDescriptorOffset: h } = l, { zip64: R, zip64UncompressedSize: T2, zip64CompressedSize: y, zipCrypto: f, dataDescriptor: c } = n;
  if ((!d2 || f) && e !== $ && (Y(s, 10, e), c && Y(u, h, e)), R) {
    let _ = Ae(i);
    W(_, 0, 1), W(_, 2, i.length - 4);
    let E = 4;
    T2 && (Y(s, 18, 4294967295), xe(_, E, BigInt(a)), E += 8), y && (Y(s, 14, 4294967295), xe(_, E, BigInt(r))), c && (xe(u, h + 4, BigInt(r)), xe(u, h + 12, BigInt(a)));
  } else
    Y(s, 14, r), Y(s, 18, a), c && (Y(u, h + 4, r), Y(u, h + 8, a));
}
async function To(t, n, e, { zipCrypto: i }) {
  let r = await mo(n, 0, 26), a = new DataView(r);
  return (!t.encrypted || i) && Y(a, 14, t.signature), t.zip64 ? (Y(a, 18, 4294967295), Y(a, 22, 4294967295)) : (Y(a, 18, t.compressedSize), Y(a, 22, t.uncompressedSize)), await Ze(e, new Uint8Array(r)), n.slice(r.byteLength);
}
function bo(t, n) {
  let { rawExtraFieldZip64: e, offset: i, diskNumberStart: r } = t, { zip64UncompressedSize: a, zip64CompressedSize: o, zip64Offset: l, zip64DiskNumberStart: s } = n, d2 = Ae(e), u = 4;
  a && (u += 8), o && (u += 8), l && (xe(d2, u, BigInt(i)), u += 8), s && Y(d2, u, r);
}
async function po(t, n, e) {
  let { files: i, writer: r } = t, { diskOffset: a, writable: o } = r, { diskNumber: l } = r, s = 0, d2 = 0, u = t.offset - a, h = i.size;
  for (let [, { rawFilename: p2, rawExtraFieldZip64: x2, rawExtraFieldAES: A, rawExtraField: m, rawComment: O, rawExtraFieldExtendedTimestamp: b, rawExtraFieldNTFS: D }] of i)
    d2 += 46 + j(p2, O, x2, A, b, D, m);
  let R = new Uint8Array(d2), T2 = Ae(R);
  await Ue(r);
  let y = 0;
  for (let [p2, x2] of Array.from(i.values()).entries()) {
    let { offset: A, rawFilename: m, rawExtraFieldZip64: O, rawExtraFieldAES: b, rawExtraFieldNTFS: D, rawExtraField: C2, rawComment: F2, versionMadeBy: v, headerArray: M, directory: U, zip64: Z, zip64UncompressedSize: G, zip64CompressedSize: ce, zip64DiskNumberStart: k, zip64Offset: ne, msDosCompatible: H, internalFileAttribute: V2, externalFileAttribute: Re, extendedTimestamp: ee, lastModDate: J2, diskNumberStart: me, uncompressedSize: Te, compressedSize: De } = x2, re;
    if (ee) {
      re = new Uint8Array(9);
      let ye = Ae(re);
      W(ye, 0, 21589), W(ye, 2, j(re) - 4), bn(ye, 4, 1), Y(ye, 5, Math.floor(J2.getTime() / 1e3));
    } else
      re = new Uint8Array();
    let we = j(O, b, re, D, C2);
    Y(T2, s, 33639248), W(T2, s + 4, v);
    let de = Ae(M);
    G || Y(de, 18, Te), ce || Y(de, 14, De), oe(R, M, s + 6), W(T2, s + 30, we), W(T2, s + 32, j(F2)), W(T2, s + 34, Z && k ? 65535 : me), W(T2, s + 36, V2), Re ? Y(T2, s + 38, Re) : U && H && bn(T2, s + 38, 16), Y(T2, s + 42, Z && ne ? 4294967295 : A), oe(R, m, s + 46), oe(R, O, s + 46 + j(m)), oe(R, b, s + 46 + j(m, O)), oe(R, re, s + 46 + j(m, O, b)), oe(R, D, s + 46 + j(m, O, b, re)), oe(R, C2, s + 46 + j(m, O, b, re, D)), oe(R, F2, s + 46 + j(m) + we);
    let Se = 46 + j(m, F2) + we;
    if (s - y > r.availableSize && (r.availableSize = 0, await Ze(o, R.slice(y, s)), y = s), s += Se, e.onprogress)
      try {
        await e.onprogress(p2 + 1, i.size, new Je(x2));
      } catch {
      }
  }
  await Ze(o, y ? R.slice(y) : R);
  let f = r.diskNumber, { availableSize: c } = r;
  c < 22 && f++;
  let _ = q(t, e, "zip64");
  if (u >= 4294967295 || d2 >= 4294967295 || h >= 65535 || f >= 65535) {
    if (_ === !1)
      throw new Error(Oi);
    _ = !0;
  }
  let E = new Uint8Array(_ ? 98 : 22), w = Ae(E);
  s = 0, _ && (Y(w, 0, 101075792), xe(w, 4, BigInt(44)), W(w, 12, 45), W(w, 14, 45), Y(w, 16, f), Y(w, 20, l), xe(w, 24, BigInt(h)), xe(w, 32, BigInt(h)), xe(w, 40, BigInt(d2)), xe(w, 48, BigInt(u)), Y(w, 56, 117853008), xe(w, 64, BigInt(u) + BigInt(d2)), Y(w, 72, f + 1), q(t, e, "supportZip64SplitFile", !0) && (f = 65535, l = 65535), h = 65535, u = 4294967295, d2 = 4294967295, s += 56 + 20), Y(w, s, 101010256), W(w, s + 4, f), W(w, s + 6, l), W(w, s + 8, h), W(w, s + 10, h), Y(w, s + 12, d2), Y(w, s + 16, u);
  let g = j(n);
  if (g)
    if (g <= 65535)
      W(w, s + 20, g);
    else
      throw new Error(oo);
  await Ze(o, E), g && await Ze(o, n);
}
function mo(t, n, e) {
  return n || e ? t.slice(n, e).arrayBuffer() : t.arrayBuffer();
}
async function Ze(t, n) {
  let e = t.getWriter();
  await e.ready, t.size += j(n), await e.write(n), e.releaseLock();
}
function gi(t) {
  if (t)
    return (BigInt(t.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
}
function q(t, n, e, i) {
  let r = n[e] === $ ? t.options[e] : n[e];
  return r === $ ? i : r;
}
function So(t) {
  return t + 5 * (Math.floor(t / 16383) + 1);
}
function bn(t, n, e) {
  t.setUint8(n, e);
}
function W(t, n, e) {
  t.setUint16(n, e, !0);
}
function Y(t, n, e) {
  t.setUint32(n, e, !0);
}
function xe(t, n, e) {
  t.setBigUint64(n, e, !0);
}
function oe(t, n, e) {
  t.set(n, e);
}
function Ae(t) {
  return new DataView(t.buffer);
}
function j(...t) {
  let n = 0;
  return t.forEach((e) => e && (n += e.length)), n;
}
or({ Deflate: Zi, Inflate: ar });

// https://esm.sh/v111/fflate@0.7.4/deno/fflate.js
var vn2 = {}, Jn2 = function(n, r, t, e, i) {
  var a = new Worker(vn2[r] || (vn2[r] = URL.createObjectURL(new Blob([n + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
  return a.onmessage = function(o) {
    var f = o.data, u = f.$e$;
    if (u) {
      var s = new Error(u[0]);
      s.code = u[1], s.stack = u[2], i(s, null);
    } else
      i(null, f);
  }, a.postMessage(t, e), a;
}, T = Uint8Array, $2 = Uint16Array, pr2 = Uint32Array, gr2 = new T([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), yr2 = new T([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Tr2 = new T([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), wn = function(n, r) {
  for (var t = new $2(31), e = 0; e < 31; ++e)
    t[e] = r += 1 << n[e - 1];
  for (var i = new pr2(t[30]), e = 1; e < 30; ++e)
    for (var a = t[e]; a < t[e + 1]; ++a)
      i[a] = a - t[e] << 5 | e;
  return [t, i];
}, mn = wn(gr2, 2), Xr2 = mn[0], Gr2 = mn[1];
Xr2[28] = 258, Gr2[258] = 28;
var xn = wn(yr2, 0), zn2 = xn[0], Hr2 = xn[1], Ur2 = new $2(32768);
for (C = 0; C < 32768; ++C)
  nr2 = (C & 43690) >>> 1 | (C & 21845) << 1, nr2 = (nr2 & 52428) >>> 2 | (nr2 & 13107) << 2, nr2 = (nr2 & 61680) >>> 4 | (nr2 & 3855) << 4, Ur2[C] = ((nr2 & 65280) >>> 8 | (nr2 & 255) << 8) >>> 1;
var nr2, C, V = function(n, r, t) {
  for (var e = n.length, i = 0, a = new $2(r); i < e; ++i)
    n[i] && ++a[n[i] - 1];
  var o = new $2(r);
  for (i = 0; i < r; ++i)
    o[i] = o[i - 1] + a[i - 1] << 1;
  var f;
  if (t) {
    f = new $2(1 << r);
    var u = 15 - r;
    for (i = 0; i < e; ++i)
      if (n[i])
        for (var s = i << 4 | n[i], v = r - n[i], h = o[n[i] - 1]++ << v, g = h | (1 << v) - 1; h <= g; ++h)
          f[Ur2[h] >>> u] = s;
  } else
    for (f = new $2(e), i = 0; i < e; ++i)
      n[i] && (f[i] = Ur2[o[n[i] - 1]++] >>> 15 - n[i]);
  return f;
}, er2 = new T(288);
for (C = 0; C < 144; ++C)
  er2[C] = 8;
var C;
for (C = 144; C < 256; ++C)
  er2[C] = 9;
var C;
for (C = 256; C < 280; ++C)
  er2[C] = 7;
var C;
for (C = 280; C < 288; ++C)
  er2[C] = 8;
var C, lr2 = new T(32);
for (C = 0; C < 32; ++C)
  lr2[C] = 5;
var C, An = V(er2, 9, 0), Mn2 = V(er2, 9, 1), Tn = V(lr2, 5, 0), Un2 = V(lr2, 5, 1), Br2 = function(n) {
  for (var r = n[0], t = 1; t < n.length; ++t)
    n[t] > r && (r = n[t]);
  return r;
}, Q2 = function(n, r, t) {
  var e = r / 8 | 0;
  return (n[e] | n[e + 1] << 8) >> (r & 7) & t;
}, Zr2 = function(n, r) {
  var t = r / 8 | 0;
  return (n[t] | n[t + 1] << 8 | n[t + 2] << 16) >> (r & 7);
}, Dr2 = function(n) {
  return (n + 7) / 8 | 0;
}, X2 = function(n, r, t) {
  (r == null || r < 0) && (r = 0), (t == null || t > n.length) && (t = n.length);
  var e = new (n.BYTES_PER_ELEMENT == 2 ? $2 : n.BYTES_PER_ELEMENT == 4 ? pr2 : T)(t - r);
  return e.set(n.subarray(r, t)), e;
};
var Dn2 = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], p = function(n, r, t) {
  var e = new Error(r || Dn2[n]);
  if (e.code = n, Error.captureStackTrace && Error.captureStackTrace(e, p), !t)
    throw e;
  return e;
}, Sr2 = function(n, r, t) {
  var e = n.length;
  if (!e || t && t.f && !t.l)
    return r || new T(0);
  var i = !r || t, a = !t || t.i;
  t || (t = {}), r || (r = new T(e * 3));
  var o = function(Fr2) {
    var Mr2 = r.length;
    if (Fr2 > Mr2) {
      var ur2 = new T(Math.max(Mr2 * 2, Fr2));
      ur2.set(r), r = ur2;
    }
  }, f = t.f || 0, u = t.p || 0, s = t.b || 0, v = t.l, h = t.d, g = t.m, x2 = t.n, m = e * 8;
  do {
    if (!v) {
      f = Q2(n, u, 1);
      var z = Q2(n, u + 1, 3);
      if (u += 3, z)
        if (z == 1)
          v = Mn2, h = Un2, g = 9, x2 = 5;
        else if (z == 2) {
          var A = Q2(n, u, 31) + 257, w = Q2(n, u + 10, 15) + 4, I = A + Q2(n, u + 5, 31) + 1;
          u += 14;
          for (var S = new T(I), U = new T(19), l = 0; l < w; ++l)
            U[Tr2[l]] = Q2(n, u + l * 3, 7);
          u += w * 3;
          for (var k = Br2(U), D = (1 << k) - 1, N = V(U, k, 1), l = 0; l < I; ) {
            var B2 = N[Q2(n, u, D)];
            u += B2 & 15;
            var c = B2 >>> 4;
            if (c < 16)
              S[l++] = c;
            else {
              var G = 0, E = 0;
              for (c == 16 ? (E = 3 + Q2(n, u, 3), u += 2, G = S[l - 1]) : c == 17 ? (E = 3 + Q2(n, u, 7), u += 3) : c == 18 && (E = 11 + Q2(n, u, 127), u += 7); E--; )
                S[l++] = G;
            }
          }
          var L = S.subarray(0, A), Z = S.subarray(A);
          g = Br2(L), x2 = Br2(Z), v = V(L, g, 1), h = V(Z, x2, 1);
        } else
          p(1);
      else {
        var c = Dr2(u) + 4, y = n[c - 4] | n[c - 3] << 8, M = c + y;
        if (M > e) {
          a && p(0);
          break;
        }
        i && o(s + y), r.set(n.subarray(c, M), s), t.b = s += y, t.p = u = M * 8, t.f = f;
        continue;
      }
      if (u > m) {
        a && p(0);
        break;
      }
    }
    i && o(s + 131072);
    for (var O = (1 << g) - 1, q2 = (1 << x2) - 1, W2 = u; ; W2 = u) {
      var G = v[Zr2(n, u) & O], K = G >>> 4;
      if (u += G & 15, u > m) {
        a && p(0);
        break;
      }
      if (G || p(2), K < 256)
        r[s++] = K;
      else if (K == 256) {
        W2 = u, v = null;
        break;
      } else {
        var H = K - 254;
        if (K > 264) {
          var l = K - 257, b = gr2[l];
          H = Q2(n, u, (1 << b) - 1) + Xr2[l], u += b;
        }
        var _ = h[Zr2(n, u) & q2], j2 = _ >>> 4;
        _ || p(3), u += _ & 15;
        var Z = zn2[j2];
        if (j2 > 3) {
          var b = yr2[j2];
          Z += Zr2(n, u) & (1 << b) - 1, u += b;
        }
        if (u > m) {
          a && p(0);
          break;
        }
        i && o(s + 131072);
        for (var R = s + H; s < R; s += 4)
          r[s] = r[s - Z], r[s + 1] = r[s + 1 - Z], r[s + 2] = r[s + 2 - Z], r[s + 3] = r[s + 3 - Z];
        s = R;
      }
    }
    t.l = v, t.p = W2, t.b = s, t.f = f, v && (f = 1, t.m = g, t.d = h, t.n = x2);
  } while (!f);
  return s == r.length ? r : X2(r, 0, s);
}, rr2 = function(n, r, t) {
  t <<= r & 7;
  var e = r / 8 | 0;
  n[e] |= t, n[e + 1] |= t >>> 8;
}, vr2 = function(n, r, t) {
  t <<= r & 7;
  var e = r / 8 | 0;
  n[e] |= t, n[e + 1] |= t >>> 8, n[e + 2] |= t >>> 16;
}, kr2 = function(n, r) {
  for (var t = [], e = 0; e < n.length; ++e)
    n[e] && t.push({ s: e, f: n[e] });
  var i = t.length, a = t.slice();
  if (!i)
    return [tr2, 0];
  if (i == 1) {
    var o = new T(t[0].s + 1);
    return o[t[0].s] = 1, [o, 1];
  }
  t.sort(function(I, S) {
    return I.f - S.f;
  }), t.push({ s: -1, f: 25001 });
  var f = t[0], u = t[1], s = 0, v = 1, h = 2;
  for (t[0] = { s: -1, f: f.f + u.f, l: f, r: u }; v != i - 1; )
    f = t[t[s].f < t[h].f ? s++ : h++], u = t[s != v && t[s].f < t[h].f ? s++ : h++], t[v++] = { s: -1, f: f.f + u.f, l: f, r: u };
  for (var g = a[0].s, e = 1; e < i; ++e)
    a[e].s > g && (g = a[e].s);
  var x2 = new $2(g + 1), m = Or2(t[v - 1], x2, 0);
  if (m > r) {
    var e = 0, z = 0, c = m - r, y = 1 << c;
    for (a.sort(function(S, U) {
      return x2[U.s] - x2[S.s] || S.f - U.f;
    }); e < i; ++e) {
      var M = a[e].s;
      if (x2[M] > r)
        z += y - (1 << m - x2[M]), x2[M] = r;
      else
        break;
    }
    for (z >>>= c; z > 0; ) {
      var A = a[e].s;
      x2[A] < r ? z -= 1 << r - x2[A]++ - 1 : ++e;
    }
    for (; e >= 0 && z; --e) {
      var w = a[e].s;
      x2[w] == r && (--x2[w], ++z);
    }
    m = r;
  }
  return [new T(x2), m];
}, Or2 = function(n, r, t) {
  return n.s == -1 ? Math.max(Or2(n.l, r, t + 1), Or2(n.r, r, t + 1)) : r[n.s] = t;
}, Yr2 = function(n) {
  for (var r = n.length; r && !n[--r]; )
    ;
  for (var t = new $2(++r), e = 0, i = n[0], a = 1, o = function(u) {
    t[e++] = u;
  }, f = 1; f <= r; ++f)
    if (n[f] == i && f != r)
      ++a;
    else {
      if (!i && a > 2) {
        for (; a > 138; a -= 138)
          o(32754);
        a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
      } else if (a > 3) {
        for (o(i), --a; a > 6; a -= 6)
          o(8304);
        a > 2 && (o(a - 3 << 5 | 8208), a = 0);
      }
      for (; a--; )
        o(i);
      a = 1, i = n[f];
    }
  return [t.subarray(0, e), r];
}, hr2 = function(n, r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += n[e] * r[e];
  return t;
}, Lr2 = function(n, r, t) {
  var e = t.length, i = Dr2(r + 2);
  n[i] = e & 255, n[i + 1] = e >>> 8, n[i + 2] = n[i] ^ 255, n[i + 3] = n[i + 1] ^ 255;
  for (var a = 0; a < e; ++a)
    n[i + a + 4] = t[a];
  return (i + 4 + e) * 8;
}, Wr2 = function(n, r, t, e, i, a, o, f, u, s, v) {
  rr2(r, v++, t), ++i[256];
  for (var h = kr2(i, 15), g = h[0], x2 = h[1], m = kr2(a, 15), z = m[0], c = m[1], y = Yr2(g), M = y[0], A = y[1], w = Yr2(z), I = w[0], S = w[1], U = new $2(19), l = 0; l < M.length; ++l)
    U[M[l] & 31]++;
  for (var l = 0; l < I.length; ++l)
    U[I[l] & 31]++;
  for (var k = kr2(U, 7), D = k[0], N = k[1], B2 = 19; B2 > 4 && !D[Tr2[B2 - 1]]; --B2)
    ;
  var G = s + 5 << 3, E = hr2(i, er2) + hr2(a, lr2) + o, L = hr2(i, g) + hr2(a, z) + o + 14 + 3 * B2 + hr2(U, D) + (2 * U[16] + 3 * U[17] + 7 * U[18]);
  if (G <= E && G <= L)
    return Lr2(r, v, n.subarray(u, u + s));
  var Z, O, q2, W2;
  if (rr2(r, v, 1 + (L < E)), v += 2, L < E) {
    Z = V(g, x2, 0), O = g, q2 = V(z, c, 0), W2 = z;
    var K = V(D, N, 0);
    rr2(r, v, A - 257), rr2(r, v + 5, S - 1), rr2(r, v + 10, B2 - 4), v += 14;
    for (var l = 0; l < B2; ++l)
      rr2(r, v + 3 * l, D[Tr2[l]]);
    v += 3 * B2;
    for (var H = [M, I], b = 0; b < 2; ++b)
      for (var _ = H[b], l = 0; l < _.length; ++l) {
        var j2 = _[l] & 31;
        rr2(r, v, K[j2]), v += D[j2], j2 > 15 && (rr2(r, v, _[l] >>> 5 & 127), v += _[l] >>> 12);
      }
  } else
    Z = An, O = er2, q2 = Tn, W2 = lr2;
  for (var l = 0; l < f; ++l)
    if (e[l] > 255) {
      var j2 = e[l] >>> 18 & 31;
      vr2(r, v, Z[j2 + 257]), v += O[j2 + 257], j2 > 7 && (rr2(r, v, e[l] >>> 23 & 31), v += gr2[j2]);
      var R = e[l] & 31;
      vr2(r, v, q2[R]), v += W2[R], R > 3 && (vr2(r, v, e[l] >>> 5 & 8191), v += yr2[R]);
    } else
      vr2(r, v, Z[e[l]]), v += O[e[l]];
  return vr2(r, v, Z[256]), v + O[256];
}, Sn = new pr2([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), tr2 = new T(0), Cn2 = function(n, r, t, e, i, a) {
  var o = n.length, f = new T(e + o + 5 * (1 + Math.ceil(o / 7e3)) + i), u = f.subarray(e, f.length - i), s = 0;
  if (!r || o < 8)
    for (var v = 0; v <= o; v += 65535) {
      var h = v + 65535;
      h >= o && (u[s >> 3] = a), s = Lr2(u, s + 1, n.subarray(v, h));
    }
  else {
    for (var g = Sn[r - 1], x2 = g >>> 13, m = g & 8191, z = (1 << t) - 1, c = new $2(32768), y = new $2(z + 1), M = Math.ceil(t / 3), A = 2 * M, w = function($r2) {
      return (n[$r2] ^ n[$r2 + 1] << M ^ n[$r2 + 2] << A) & z;
    }, I = new pr2(25e3), S = new $2(288), U = new $2(32), l = 0, k = 0, v = 0, D = 0, N = 0, B2 = 0; v < o; ++v) {
      var G = w(v), E = v & 32767, L = y[G];
      if (c[E] = L, y[G] = E, N <= v) {
        var Z = o - v;
        if ((l > 7e3 || D > 24576) && Z > 423) {
          s = Wr2(n, u, 0, I, S, U, k, D, B2, v - B2, s), D = l = k = 0, B2 = v;
          for (var O = 0; O < 286; ++O)
            S[O] = 0;
          for (var O = 0; O < 30; ++O)
            U[O] = 0;
        }
        var q2 = 2, W2 = 0, K = m, H = E - L & 32767;
        if (Z > 2 && G == w(v - H))
          for (var b = Math.min(x2, Z) - 1, _ = Math.min(32767, v), j2 = Math.min(258, Z); H <= _ && --K && E != L; ) {
            if (n[v + q2] == n[v + q2 - H]) {
              for (var R = 0; R < j2 && n[v + R] == n[v + R - H]; ++R)
                ;
              if (R > q2) {
                if (q2 = R, W2 = H, R > b)
                  break;
                for (var Fr2 = Math.min(H, R - 2), Mr2 = 0, O = 0; O < Fr2; ++O) {
                  var ur2 = v - H + O + 32768 & 32767, jn2 = c[ur2], fn2 = ur2 - jn2 + 32768 & 32767;
                  fn2 > Mr2 && (Mr2 = fn2, L = ur2);
                }
              }
            }
            E = L, L = c[E], H += E - L + 32768 & 32767;
          }
        if (W2) {
          I[D++] = 268435456 | Gr2[q2] << 18 | Hr2[W2];
          var sn2 = Gr2[q2] & 31, un2 = Hr2[W2] & 31;
          k += gr2[sn2] + yr2[un2], ++S[257 + sn2], ++U[un2], N = v + q2, ++l;
        } else
          I[D++] = n[v], ++S[n[v]];
      }
    }
    s = Wr2(n, u, a, I, S, U, k, D, B2, v - B2, s), !a && s & 7 && (s = Lr2(u, s + 1, tr2));
  }
  return X2(f, 0, e + Dr2(s) + i);
}, En = function() {
  for (var n = new Int32Array(256), r = 0; r < 256; ++r) {
    for (var t = r, e = 9; --e; )
      t = (t & 1 && -306674912) ^ t >>> 1;
    n[r] = t;
  }
  return n;
}(), wr2 = function() {
  var n = -1;
  return { p: function(r) {
    for (var t = n, e = 0; e < r.length; ++e)
      t = En[t & 255 ^ r[e]] ^ t >>> 8;
    n = t;
  }, d: function() {
    return ~n;
  } };
}, dr2 = function() {
  var n = 1, r = 0;
  return { p: function(t) {
    for (var e = n, i = r, a = t.length | 0, o = 0; o != a; ) {
      for (var f = Math.min(o + 2655, a); o < f; ++o)
        i += e += t[o];
      e = (e & 65535) + 15 * (e >> 16), i = (i & 65535) + 15 * (i >> 16);
    }
    n = e, r = i;
  }, d: function() {
    return n %= 65521, r %= 65521, (n & 255) << 24 | n >>> 8 << 16 | (r & 255) << 8 | r >>> 8;
  } };
}, sr2 = function(n, r, t, e, i) {
  return Cn2(n, r.level == null ? 6 : r.level, r.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 12 + r.mem, t, e, !i);
}, Cr2 = function(n, r) {
  var t = {};
  for (var e in n)
    t[e] = n[e];
  for (var e in r)
    t[e] = r[e];
  return t;
}, hn = function(n, r, t) {
  for (var e = n(), i = n.toString(), a = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(","), o = 0; o < e.length; ++o) {
    var f = e[o], u = a[o];
    if (typeof f == "function") {
      r += ";" + u + "=";
      var s = f.toString();
      if (f.prototype)
        if (s.indexOf("[native code]") != -1) {
          var v = s.indexOf(" ", 8) + 1;
          r += s.slice(v, s.indexOf("(", v));
        } else {
          r += s;
          for (var h in f.prototype)
            r += ";" + u + ".prototype." + h + "=" + f.prototype[h].toString();
        }
      else
        r += s;
    } else
      t[u] = f;
  }
  return [r, t];
}, Ir2 = [], Kn2 = function(n) {
  var r = [];
  for (var t in n)
    n[t].buffer && r.push((n[t] = new n[t].constructor(n[t])).buffer);
  return r;
}, Fn2 = function(n, r, t, e) {
  var i;
  if (!Ir2[t]) {
    for (var a = "", o = {}, f = n.length - 1, u = 0; u < f; ++u)
      i = hn(n[u], a, o), a = i[0], o = i[1];
    Ir2[t] = hn(n[f], a, o);
  }
  var s = Cr2({}, Ir2[t][1]);
  return Jn2(Ir2[t][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + r.toString() + "}", t, s, Kn2(s), e);
}, mr2 = function() {
  return [T, $2, pr2, gr2, yr2, Tr2, Xr2, zn2, Mn2, Un2, Ur2, Dn2, V, Br2, Q2, Zr2, Dr2, X2, p, Sr2, Er2, or2, br2];
}, xr2 = function() {
  return [T, $2, pr2, gr2, yr2, Tr2, Gr2, Hr2, An, er2, Tn, lr2, Ur2, Sn, tr2, V, rr2, vr2, kr2, Or2, Yr2, hr2, Lr2, Wr2, Dr2, X2, Cn2, sr2, Rr2, or2];
}, In2 = function() {
  return [_r2, nn2, F, wr2, En];
}, Bn2 = function() {
  return [rn2, Gn2];
}, Zn2 = function() {
  return [tn2, F, dr2];
}, kn2 = function() {
  return [On2];
}, or2 = function(n) {
  return postMessage(n, [n.buffer]);
}, br2 = function(n) {
  return n && n.size && new T(n.size);
};
var d = function(n) {
  return n.ondata = function(r, t) {
    return postMessage([r, t], [r.buffer]);
  }, function(r) {
    return n.push(r.data[0], r.data[1]);
  };
}, Ar2 = function(n, r, t, e, i) {
  var a, o = Fn2(n, e, i, function(f, u) {
    f ? (o.terminate(), r.ondata.call(r, f)) : (u[1] && o.terminate(), r.ondata.call(r, f, u[0], u[1]));
  });
  o.postMessage(t), r.push = function(f, u) {
    r.ondata || p(5), a && r.ondata(p(4, 0, 1), null, !!u), o.postMessage([f, a = u], [f.buffer]);
  }, r.terminate = function() {
    o.terminate();
  };
}, Y2 = function(n, r) {
  return n[r] | n[r + 1] << 8;
}, P = function(n, r) {
  return (n[r] | n[r + 1] << 8 | n[r + 2] << 16 | n[r + 3] << 24) >>> 0;
}, qr2 = function(n, r) {
  return P(n, r) + P(n, r + 4) * 4294967296;
}, F = function(n, r, t) {
  for (; t; ++r)
    n[r] = t, t >>>= 8;
}, _r2 = function(n, r) {
  var t = r.filename;
  if (n[0] = 31, n[1] = 139, n[2] = 8, n[8] = r.level < 2 ? 4 : r.level == 9 ? 2 : 0, n[9] = 3, r.mtime != 0 && F(n, 4, Math.floor(new Date(r.mtime || Date.now()) / 1e3)), t) {
    n[3] = 8;
    for (var e = 0; e <= t.length; ++e)
      n[e + 10] = t.charCodeAt(e);
  }
}, rn2 = function(n) {
  (n[0] != 31 || n[1] != 139 || n[2] != 8) && p(6, "invalid gzip data");
  var r = n[3], t = 10;
  r & 4 && (t += n[10] | (n[11] << 8) + 2);
  for (var e = (r >> 3 & 1) + (r >> 4 & 1); e > 0; e -= !n[t++])
    ;
  return t + (r & 2);
}, Gn2 = function(n) {
  var r = n.length;
  return (n[r - 4] | n[r - 3] << 8 | n[r - 2] << 16 | n[r - 1] << 24) >>> 0;
}, nn2 = function(n) {
  return 10 + (n.filename && n.filename.length + 1 || 0);
}, tn2 = function(n, r) {
  var t = r.level, e = t == 0 ? 0 : t < 6 ? 1 : t == 9 ? 3 : 2;
  n[0] = 120, n[1] = e << 6 | (e ? 32 - 2 * e : 1);
}, On2 = function(n) {
  ((n[0] & 15) != 8 || n[0] >>> 4 > 7 || (n[0] << 8 | n[1]) % 31) && p(6, "invalid zlib data"), n[1] & 32 && p(6, "invalid zlib data: preset dictionaries not supported");
};
function en2(n, r) {
  return !r && typeof n == "function" && (r = n, n = {}), this.ondata = r, n;
}
var ir2 = function() {
  function n(r, t) {
    !t && typeof r == "function" && (t = r, r = {}), this.ondata = t, this.o = r || {};
  }
  return n.prototype.p = function(r, t) {
    this.ondata(sr2(r, this.o, 0, 0, !t), t);
  }, n.prototype.push = function(r, t) {
    this.ondata || p(5), this.d && p(4), this.d = t, this.p(r, t || !1);
  }, n;
}(), Qn2 = function() {
  function n(r, t) {
    Ar2([xr2, function() {
      return [d, ir2];
    }], this, en2.call(this, r, t), function(e) {
      var i = new ir2(e.data);
      onmessage = d(i);
    }, 6);
  }
  return n;
}();
function Rr2(n, r) {
  return sr2(n, r || {}, 0, 0);
}
var J = function() {
  function n(r) {
    this.s = {}, this.p = new T(0), this.ondata = r;
  }
  return n.prototype.e = function(r) {
    this.ondata || p(5), this.d && p(4);
    var t = this.p.length, e = new T(t + r.length);
    e.set(this.p), e.set(r, t), this.p = e;
  }, n.prototype.c = function(r) {
    this.d = this.s.i = r || !1;
    var t = this.s.b, e = Sr2(this.p, this.o, this.s);
    this.ondata(X2(e, t, this.s.b), this.d), this.o = X2(e, this.s.b - 32768), this.s.b = this.o.length, this.p = X2(this.p, this.s.p / 8 | 0), this.s.p &= 7;
  }, n.prototype.push = function(r, t) {
    this.e(r), this.c(t);
  }, n;
}(), Ln2 = function() {
  function n(r) {
    this.ondata = r, Ar2([mr2, function() {
      return [d, J];
    }], this, 0, function() {
      var t = new J();
      onmessage = d(t);
    }, 7);
  }
  return n;
}();
function Er2(n, r) {
  return Sr2(n, r);
}
var ln2 = function() {
  function n(r, t) {
    this.c = wr2(), this.l = 0, this.v = 1, ir2.call(this, r, t);
  }
  return n.prototype.push = function(r, t) {
    ir2.prototype.push.call(this, r, t);
  }, n.prototype.p = function(r, t) {
    this.c.p(r), this.l += r.length;
    var e = sr2(r, this.o, this.v && nn2(this.o), t && 8, !t);
    this.v && (_r2(e, this.o), this.v = 0), t && (F(e, e.length - 8, this.c.d()), F(e, e.length - 4, this.l)), this.ondata(e, t);
  }, n;
}(), et2 = function() {
  function n(r, t) {
    Ar2([xr2, In2, function() {
      return [d, ir2, ln2];
    }], this, en2.call(this, r, t), function(e) {
      var i = new ln2(e.data);
      onmessage = d(i);
    }, 8);
  }
  return n;
}();
var jr2 = function() {
  function n(r) {
    this.v = 1, J.call(this, r);
  }
  return n.prototype.push = function(r, t) {
    if (J.prototype.e.call(this, r), this.v) {
      var e = this.p.length > 3 ? rn2(this.p) : 4;
      if (e >= this.p.length && !t)
        return;
      this.p = this.p.subarray(e), this.v = 0;
    }
    t && (this.p.length < 8 && p(6, "invalid gzip data"), this.p = this.p.subarray(0, -8)), J.prototype.c.call(this, t);
  }, n;
}(), Xn2 = function() {
  function n(r) {
    this.ondata = r, Ar2([mr2, Bn2, function() {
      return [d, J, jr2];
    }], this, 0, function() {
      var t = new jr2();
      onmessage = d(t);
    }, 9);
  }
  return n;
}();
var pn = function() {
  function n(r, t) {
    this.c = dr2(), this.v = 1, ir2.call(this, r, t);
  }
  return n.prototype.push = function(r, t) {
    ir2.prototype.push.call(this, r, t);
  }, n.prototype.p = function(r, t) {
    this.c.p(r);
    var e = sr2(r, this.o, this.v && 2, t && 4, !t);
    this.v && (tn2(e, this.o), this.v = 0), t && F(e, e.length - 4, this.c.d()), this.ondata(e, t);
  }, n;
}(), at2 = function() {
  function n(r, t) {
    Ar2([xr2, Zn2, function() {
      return [d, ir2, pn];
    }], this, en2.call(this, r, t), function(e) {
      var i = new pn(e.data);
      onmessage = d(i);
    }, 10);
  }
  return n;
}();
var Kr2 = function() {
  function n(r) {
    this.v = 1, J.call(this, r);
  }
  return n.prototype.push = function(r, t) {
    if (J.prototype.e.call(this, r), this.v) {
      if (this.p.length < 2 && !t)
        return;
      this.p = this.p.subarray(2), this.v = 0;
    }
    t && (this.p.length < 4 && p(6, "invalid zlib data"), this.p = this.p.subarray(0, -4)), J.prototype.c.call(this, t);
  }, n;
}(), bn2 = function() {
  function n(r) {
    this.ondata = r, Ar2([mr2, kn2, function() {
      return [d, J, Kr2];
    }], this, 0, function() {
      var t = new Kr2();
      onmessage = d(t);
    }, 11);
  }
  return n;
}();
function Qr2(n, r) {
  return Sr2((On2(n), n.subarray(2, -4)), r);
}
var rt2 = function() {
  function n(r) {
    this.G = jr2, this.I = J, this.Z = Kr2, this.ondata = r;
  }
  return n.prototype.push = function(r, t) {
    if (this.ondata || p(5), this.s)
      this.s.push(r, t);
    else {
      if (this.p && this.p.length) {
        var e = new T(this.p.length + r.length);
        e.set(this.p), e.set(r, this.p.length);
      } else
        this.p = r;
      if (this.p.length > 2) {
        var i = this, a = function() {
          i.ondata.apply(i, arguments);
        };
        this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(a) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(a) : new this.Z(a), this.s.push(this.p, t), this.p = null;
      }
    }
  }, n;
}(), ft2 = function() {
  function n(r) {
    this.G = Xn2, this.I = Ln2, this.Z = bn2, this.ondata = r;
  }
  return n.prototype.push = function(r, t) {
    rt2.prototype.push.call(this, r, t);
  }, n;
}();
var yn2 = typeof TextEncoder < "u" && new TextEncoder(), Vr2 = typeof TextDecoder < "u" && new TextDecoder(), Nn2 = 0;
try {
  Vr2.decode(tr2, { stream: !0 }), Nn2 = 1;
} catch {
}
var Rn = function(n) {
  for (var r = "", t = 0; ; ) {
    var e = n[t++], i = (e > 127) + (e > 223) + (e > 239);
    if (t + i > n.length)
      return [r, X2(n, t - 1)];
    i ? i == 3 ? (e = ((e & 15) << 18 | (n[t++] & 63) << 12 | (n[t++] & 63) << 6 | n[t++] & 63) - 65536, r += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : i & 1 ? r += String.fromCharCode((e & 31) << 6 | n[t++] & 63) : r += String.fromCharCode((e & 15) << 12 | (n[t++] & 63) << 6 | n[t++] & 63) : r += String.fromCharCode(e);
  }
}, vt2 = function() {
  function n(r) {
    this.ondata = r, Nn2 ? this.t = new TextDecoder() : this.p = tr2;
  }
  return n.prototype.push = function(r, t) {
    if (this.ondata || p(5), t = !!t, this.t) {
      this.ondata(this.t.decode(r, { stream: !0 }), t), t && (this.t.decode().length && p(8), this.t = null);
      return;
    }
    this.p || p(4);
    var e = new T(this.p.length + r.length);
    e.set(this.p), e.set(r, this.p.length);
    var i = Rn(e), a = i[0], o = i[1];
    t ? (o.length && p(8), this.p = null) : this.p = o, this.ondata(a, t);
  }, n;
}(), ht2 = function() {
  function n(r) {
    this.ondata = r;
  }
  return n.prototype.push = function(r, t) {
    this.ondata || p(5), this.d && p(4), this.ondata(fr2(r), this.d = t || !1);
  }, n;
}();
function fr2(n, r) {
  if (r) {
    for (var t = new T(n.length), e = 0; e < n.length; ++e)
      t[e] = n.charCodeAt(e);
    return t;
  }
  if (yn2)
    return yn2.encode(n);
  for (var i = n.length, a = new T(n.length + (n.length >> 1)), o = 0, f = function(v) {
    a[o++] = v;
  }, e = 0; e < i; ++e) {
    if (o + 5 > a.length) {
      var u = new T(o + 8 + (i - e << 1));
      u.set(a), a = u;
    }
    var s = n.charCodeAt(e);
    s < 128 || r ? f(s) : s < 2048 ? (f(192 | s >> 6), f(128 | s & 63)) : s > 55295 && s < 57344 ? (s = 65536 + (s & 1023 << 10) | n.charCodeAt(++e) & 1023, f(240 | s >> 18), f(128 | s >> 12 & 63), f(128 | s >> 6 & 63), f(128 | s & 63)) : (f(224 | s >> 12), f(128 | s >> 6 & 63), f(128 | s & 63));
  }
  return X2(a, 0, o);
}
function $n2(n, r) {
  if (r) {
    for (var t = "", e = 0; e < n.length; e += 16384)
      t += String.fromCharCode.apply(null, n.subarray(e, e + 16384));
    return t;
  } else {
    if (Vr2)
      return Vr2.decode(n);
    var i = Rn(n), a = i[0], o = i[1];
    return o.length && p(8), a;
  }
}
var qn2 = function(n) {
  return n == 1 ? 3 : n < 6 ? 2 : n == 9 ? 1 : 0;
};
var Wn2 = function(n, r) {
  for (; Y2(n, r) != 1; r += 4 + Y2(n, r + 2))
    ;
  return [qr2(n, r + 12), qr2(n, r + 4), qr2(n, r + 20)];
}, ar2 = function(n) {
  var r = 0;
  if (n)
    for (var t in n) {
      var e = n[t].length;
      e > 65535 && p(9), r += e + 4;
    }
  return r;
}, cr2 = function(n, r, t, e, i, a, o, f) {
  var u = e.length, s = t.extra, v = f && f.length, h = ar2(s);
  F(n, r, o != null ? 33639248 : 67324752), r += 4, o != null && (n[r++] = 20, n[r++] = t.os), n[r] = 20, r += 2, n[r++] = t.flag << 1 | (a < 0 && 8), n[r++] = i && 8, n[r++] = t.compression & 255, n[r++] = t.compression >> 8;
  var g = new Date(t.mtime == null ? Date.now() : t.mtime), x2 = g.getFullYear() - 1980;
  if ((x2 < 0 || x2 > 119) && p(10), F(n, r, x2 << 25 | g.getMonth() + 1 << 21 | g.getDate() << 16 | g.getHours() << 11 | g.getMinutes() << 5 | g.getSeconds() >>> 1), r += 4, a != -1 && (F(n, r, t.crc), F(n, r + 4, a < 0 ? -a - 2 : a), F(n, r + 8, t.size)), F(n, r + 12, u), F(n, r + 14, h), r += 16, o != null && (F(n, r, v), F(n, r + 6, t.attrs), F(n, r + 10, o), r += 14), n.set(e, r), r += u, h)
    for (var m in s) {
      var z = s[m], c = z.length;
      F(n, r, +m), F(n, r + 2, c), n.set(z, r + 4), r += 4 + c;
    }
  return v && (n.set(f, r), r += v), r;
}, on2 = function(n, r, t, e, i) {
  F(n, r, 101010256), F(n, r + 8, t), F(n, r + 10, t), F(n, r + 12, e), F(n, r + 16, i);
}, Pr2 = function() {
  function n(r) {
    this.filename = r, this.c = wr2(), this.size = 0, this.compression = 0;
  }
  return n.prototype.process = function(r, t) {
    this.ondata(null, r, t);
  }, n.prototype.push = function(r, t) {
    this.ondata || p(5), this.c.p(r), this.size += r.length, t && (this.crc = this.c.d()), this.process(r, t || !1);
  }, n;
}(), lt2 = function() {
  function n(r, t) {
    var e = this;
    t || (t = {}), Pr2.call(this, r), this.d = new ir2(t, function(i, a) {
      e.ondata(null, i, a);
    }), this.compression = 8, this.flag = qn2(t.level);
  }
  return n.prototype.process = function(r, t) {
    try {
      this.d.push(r, t);
    } catch (e) {
      this.ondata(e, null, t);
    }
  }, n.prototype.push = function(r, t) {
    Pr2.prototype.push.call(this, r, t);
  }, n;
}(), ct2 = function() {
  function n(r, t) {
    var e = this;
    t || (t = {}), Pr2.call(this, r), this.d = new Qn2(t, function(i, a, o) {
      e.ondata(i, a, o);
    }), this.compression = 8, this.flag = qn2(t.level), this.terminate = this.d.terminate;
  }
  return n.prototype.process = function(r, t) {
    this.d.push(r, t);
  }, n.prototype.push = function(r, t) {
    Pr2.prototype.push.call(this, r, t);
  }, n;
}(), pt2 = function() {
  function n(r) {
    this.ondata = r, this.u = [], this.d = 1;
  }
  return n.prototype.add = function(r) {
    var t = this;
    if (this.ondata || p(5), this.d & 2)
      this.ondata(p(4 + (this.d & 1) * 8, 0, 1), null, !1);
    else {
      var e = fr2(r.filename), i = e.length, a = r.comment, o = a && fr2(a), f = i != r.filename.length || o && a.length != o.length, u = i + ar2(r.extra) + 30;
      i > 65535 && this.ondata(p(11, 0, 1), null, !1);
      var s = new T(u);
      cr2(s, 0, r, e, f, -1);
      var v = [s], h = function() {
        for (var c = 0, y = v; c < y.length; c++) {
          var M = y[c];
          t.ondata(null, M, !1);
        }
        v = [];
      }, g = this.d;
      this.d = 0;
      var x2 = this.u.length, m = Cr2(r, { f: e, u: f, o, t: function() {
        r.terminate && r.terminate();
      }, r: function() {
        if (h(), g) {
          var c = t.u[x2 + 1];
          c ? c.r() : t.d = 1;
        }
        g = 1;
      } }), z = 0;
      r.ondata = function(c, y, M) {
        if (c)
          t.ondata(c, y, M), t.terminate();
        else if (z += y.length, v.push(y), M) {
          var A = new T(16);
          F(A, 0, 134695760), F(A, 4, r.crc), F(A, 8, z), F(A, 12, r.size), v.push(A), m.c = z, m.b = u + z + 16, m.crc = r.crc, m.size = r.size, g && m.r(), g = 1;
        } else
          g && h();
      }, this.u.push(m);
    }
  }, n.prototype.end = function() {
    var r = this;
    if (this.d & 2) {
      this.ondata(p(4 + (this.d & 1) * 8, 0, 1), null, !0);
      return;
    }
    this.d ? this.e() : this.u.push({ r: function() {
      r.d & 1 && (r.u.splice(-1, 1), r.e());
    }, t: function() {
    } }), this.d = 3;
  }, n.prototype.e = function() {
    for (var r = 0, t = 0, e = 0, i = 0, a = this.u; i < a.length; i++) {
      var o = a[i];
      e += 46 + o.f.length + ar2(o.extra) + (o.o ? o.o.length : 0);
    }
    for (var f = new T(e + 22), u = 0, s = this.u; u < s.length; u++) {
      var o = s[u];
      cr2(f, r, o, o.f, o.u, -o.c - 2, t, o.o), r += 46 + o.f.length + ar2(o.extra) + (o.o ? o.o.length : 0), t += o.b;
    }
    on2(f, r, this.u.length, e, t), this.ondata(null, f, !0), this.d = 2;
  }, n.prototype.terminate = function() {
    for (var r = 0, t = this.u; r < t.length; r++) {
      var e = t[r];
      e.t();
    }
    this.d = 2;
  }, n;
}();
var nt = function() {
  function n() {
  }
  return n.prototype.push = function(r, t) {
    this.ondata(null, r, t);
  }, n.compression = 0, n;
}(), wt2 = function() {
  function n() {
    var r = this;
    this.i = new J(function(t, e) {
      r.ondata(null, t, e);
    });
  }
  return n.prototype.push = function(r, t) {
    try {
      this.i.push(r, t);
    } catch (e) {
      this.ondata(e, null, t);
    }
  }, n.compression = 8, n;
}(), mt2 = function() {
  function n(r, t) {
    var e = this;
    t < 32e4 ? this.i = new J(function(i, a) {
      e.ondata(null, i, a);
    }) : (this.i = new Ln2(function(i, a, o) {
      e.ondata(i, a, o);
    }), this.terminate = this.i.terminate);
  }
  return n.prototype.push = function(r, t) {
    this.i.terminate && (r = X2(r, 0)), this.i.push(r, t);
  }, n.compression = 8, n;
}(), xt2 = function() {
  function n(r) {
    this.onfile = r, this.k = [], this.o = { 0: nt }, this.p = tr2;
  }
  return n.prototype.push = function(r, t) {
    var e = this;
    if (this.onfile || p(5), this.p || p(4), this.c > 0) {
      var i = Math.min(this.c, r.length), a = r.subarray(0, i);
      if (this.c -= i, this.d ? this.d.push(a, !this.c) : this.k[0].push(a), r = r.subarray(i), r.length)
        return this.push(r, t);
    } else {
      var o = 0, f = 0, u = void 0, s = void 0;
      this.p.length ? r.length ? (s = new T(this.p.length + r.length), s.set(this.p), s.set(r, this.p.length)) : s = this.p : s = r;
      for (var v = s.length, h = this.c, g = h && this.d, x2 = function() {
        var y, M = P(s, f);
        if (M == 67324752) {
          o = 1, u = f, m.d = null, m.c = 0;
          var A = Y2(s, f + 6), w = Y2(s, f + 8), I = A & 2048, S = A & 8, U = Y2(s, f + 26), l = Y2(s, f + 28);
          if (v > f + 30 + U + l) {
            var k = [];
            m.k.unshift(k), o = 2;
            var D = P(s, f + 18), N = P(s, f + 22), B2 = $n2(s.subarray(f + 30, f += 30 + U), !I);
            D == 4294967295 ? (y = S ? [-2] : Wn2(s, f), D = y[0], N = y[1]) : S && (D = -1), f += l, m.c = D;
            var G, E = { name: B2, compression: w, start: function() {
              if (E.ondata || p(5), !D)
                E.ondata(null, tr2, !0);
              else {
                var L = e.o[w];
                L || E.ondata(p(14, "unknown compression type " + w, 1), null, !1), G = D < 0 ? new L(B2) : new L(B2, D, N), G.ondata = function(W2, K, H) {
                  E.ondata(W2, K, H);
                };
                for (var Z = 0, O = k; Z < O.length; Z++) {
                  var q2 = O[Z];
                  G.push(q2, !1);
                }
                e.k[0] == k && e.c ? e.d = G : G.push(tr2, !0);
              }
            }, terminate: function() {
              G && G.terminate && G.terminate();
            } };
            D >= 0 && (E.size = D, E.originalSize = N), m.onfile(E);
          }
          return "break";
        } else if (h) {
          if (M == 134695760)
            return u = f += 12 + (h == -2 && 8), o = 3, m.c = 0, "break";
          if (M == 33639248)
            return u = f -= 4, o = 3, m.c = 0, "break";
        }
      }, m = this; f < v - 4; ++f) {
        var z = x2();
        if (z === "break")
          break;
      }
      if (this.p = tr2, h < 0) {
        var c = o ? s.subarray(0, u - 12 - (h == -2 && 8) - (P(s, u - 16) == 134695760 && 4)) : s.subarray(0, f);
        g ? g.push(c, !!o) : this.k[+(o == 2)].push(c);
      }
      if (o & 2)
        return this.push(s.subarray(f), t);
      this.p = s.subarray(f);
    }
    t && (this.c && p(13), this.p = null);
  }, n.prototype.register = function(r) {
    this.o[r.compression] = r;
  }, n;
}();

// https://esm.sh/v111/canvas-confetti@1.6.0/deno/canvas-confetti.js
var x = {};
(function B(h, b, R, y) {
  var P2 = !!(h.Worker && h.Blob && h.Promise && h.OffscreenCanvas && h.OffscreenCanvasRenderingContext2D && h.HTMLCanvasElement && h.HTMLCanvasElement.prototype.transferControlToOffscreen && h.URL && h.URL.createObjectURL);
  function N() {
  }
  function C2(r) {
    var e = b.exports.Promise, i = e !== void 0 ? e : h.Promise;
    return typeof i == "function" ? new i(r) : (r(N, N), null);
  }
  var T2 = function() {
    var r = Math.floor(16.666666666666668), e, i, a = {}, l = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (e = function(o) {
      var n = Math.random();
      return a[n] = requestAnimationFrame(function t(u) {
        l === u || l + r - 1 < u ? (l = u, delete a[n], o()) : a[n] = requestAnimationFrame(t);
      }), n;
    }, i = function(o) {
      a[o] && cancelAnimationFrame(a[o]);
    }) : (e = function(o) {
      return setTimeout(o, r);
    }, i = function(o) {
      return clearTimeout(o);
    }), { frame: e, cancel: i };
  }(), U = function() {
    var r, e, i = {};
    function a(l) {
      function o(n, t) {
        l.postMessage({ options: n || {}, callback: t });
      }
      l.init = function(t) {
        var u = t.transferControlToOffscreen();
        l.postMessage({ canvas: u }, [u]);
      }, l.fire = function(t, u, v) {
        if (e)
          return o(t, null), e;
        var c = Math.random().toString(36).slice(2);
        return e = C2(function(m) {
          function f(s) {
            s.data.callback === c && (delete i[c], l.removeEventListener("message", f), e = null, v(), m());
          }
          l.addEventListener("message", f), o(t, c), i[c] = f.bind(null, { data: { callback: c } });
        }), e;
      }, l.reset = function() {
        l.postMessage({ reset: !0 });
        for (var t in i)
          i[t](), delete i[t];
      };
    }
    return function() {
      if (r)
        return r;
      if (!R && P2) {
        var l = ["var CONFETTI, SIZE = {}, module = {};", "(" + B.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
        try {
          r = new Worker(URL.createObjectURL(new Blob([l])));
        } catch (o) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("\u{1F38A} Could not load worker", o), null;
        }
        a(r);
      }
      return r;
    };
  }(), V2 = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
  function Z(r, e) {
    return e ? e(r) : r;
  }
  function _(r) {
    return r != null;
  }
  function d2(r, e, i) {
    return Z(r && _(r[e]) ? r[e] : V2[e], i);
  }
  function X3(r) {
    return r < 0 ? 0 : Math.floor(r);
  }
  function Y3(r, e) {
    return Math.floor(Math.random() * (e - r)) + r;
  }
  function I(r) {
    return parseInt(r, 16);
  }
  function q2(r) {
    return r.map(j2);
  }
  function j2(r) {
    var e = String(r).replace(/[^0-9a-f]/gi, "");
    return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), { r: I(e.substring(0, 2)), g: I(e.substring(2, 4)), b: I(e.substring(4, 6)) };
  }
  function H(r) {
    var e = d2(r, "origin", Object);
    return e.x = d2(e, "x", Number), e.y = d2(e, "y", Number), e;
  }
  function G(r) {
    r.width = document.documentElement.clientWidth, r.height = document.documentElement.clientHeight;
  }
  function J2(r) {
    var e = r.getBoundingClientRect();
    r.width = e.width, r.height = e.height;
  }
  function K(r) {
    var e = document.createElement("canvas");
    return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = r, e;
  }
  function Q3(r, e, i, a, l, o, n, t, u) {
    r.save(), r.translate(e, i), r.rotate(o), r.scale(a, l), r.arc(0, 0, 1, n, t, u), r.restore();
  }
  function $4(r) {
    var e = r.angle * (Math.PI / 180), i = r.spread * (Math.PI / 180);
    return { x: r.x, y: r.y, wobble: Math.random() * 10, wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05), velocity: r.startVelocity * 0.5 + Math.random() * r.startVelocity, angle2D: -e + (0.5 * i - Math.random() * i), tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI, color: r.color, shape: r.shape, tick: 0, totalTicks: r.ticks, decay: r.decay, drift: r.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: r.gravity * 3, ovalScalar: 0.6, scalar: r.scalar };
  }
  function ee(r, e) {
    e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += e.wobbleSpeed, e.velocity *= e.decay, e.tiltAngle += 0.1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble);
    var i = e.tick++ / e.totalTicks, a = e.x + e.random * e.tiltCos, l = e.y + e.random * e.tiltSin, o = e.wobbleX + e.random * e.tiltCos, n = e.wobbleY + e.random * e.tiltSin;
    if (r.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - i) + ")", r.beginPath(), e.shape === "circle")
      r.ellipse ? r.ellipse(e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(n - l) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : Q3(r, e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(n - l) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI);
    else if (e.shape === "star")
      for (var t = Math.PI / 2 * 3, u = 4 * e.scalar, v = 8 * e.scalar, c = e.x, m = e.y, f = 5, s = Math.PI / f; f--; )
        c = e.x + Math.cos(t) * v, m = e.y + Math.sin(t) * v, r.lineTo(c, m), t += s, c = e.x + Math.cos(t) * u, m = e.y + Math.sin(t) * u, r.lineTo(c, m), t += s;
    else
      r.moveTo(Math.floor(e.x), Math.floor(e.y)), r.lineTo(Math.floor(e.wobbleX), Math.floor(l)), r.lineTo(Math.floor(o), Math.floor(n)), r.lineTo(Math.floor(a), Math.floor(e.wobbleY));
    return r.closePath(), r.fill(), e.tick < e.totalTicks;
  }
  function re(r, e, i, a, l) {
    var o = e.slice(), n = r.getContext("2d"), t, u, v = C2(function(c) {
      function m() {
        t = u = null, n.clearRect(0, 0, a.width, a.height), l(), c();
      }
      function f() {
        R && !(a.width === y.width && a.height === y.height) && (a.width = r.width = y.width, a.height = r.height = y.height), !a.width && !a.height && (i(r), a.width = r.width, a.height = r.height), n.clearRect(0, 0, a.width, a.height), o = o.filter(function(s) {
          return ee(n, s);
        }), o.length ? t = T2.frame(f) : m();
      }
      t = T2.frame(f), u = m;
    });
    return { addFettis: function(c) {
      return o = o.concat(c), v;
    }, canvas: r, promise: v, reset: function() {
      t && T2.cancel(t), u && u();
    } };
  }
  function L(r, e) {
    var i = !r, a = !!d2(e || {}, "resize"), l = d2(e, "disableForReducedMotion", Boolean), o = P2 && !!d2(e || {}, "useWorker"), n = o ? U() : null, t = i ? G : J2, u = r && n ? !!r.__confetti_initialized : !1, v = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, c;
    function m(s, E, S) {
      for (var M = d2(s, "particleCount", X3), w = d2(s, "angle", Number), p2 = d2(s, "spread", Number), g = d2(s, "startVelocity", Number), ae = d2(s, "decay", Number), ne = d2(s, "gravity", Number), te = d2(s, "drift", Number), W2 = d2(s, "colors", q2), ie2 = d2(s, "ticks", Number), A = d2(s, "shapes"), oe2 = d2(s, "scalar"), D = H(s), z = M, k = [], le = r.width * D.x, ce = r.height * D.y; z--; )
        k.push($4({ x: le, y: ce, angle: w, spread: p2, startVelocity: g, color: W2[z % W2.length], shape: A[Y3(0, A.length)], ticks: ie2, decay: ae, gravity: ne, drift: te, scalar: oe2 }));
      return c ? c.addFettis(k) : (c = re(r, k, t, E, S), c.promise);
    }
    function f(s) {
      var E = l || d2(s, "disableForReducedMotion", Boolean), S = d2(s, "zIndex", Number);
      if (E && v)
        return C2(function(g) {
          g();
        });
      i && c ? r = c.canvas : i && !r && (r = K(S), document.body.appendChild(r)), a && !u && t(r);
      var M = { width: r.width, height: r.height };
      n && !u && n.init(r), u = !0, n && (r.__confetti_initialized = !0);
      function w() {
        if (n) {
          var g = { getBoundingClientRect: function() {
            if (!i)
              return r.getBoundingClientRect();
          } };
          t(g), n.postMessage({ resize: { width: g.width, height: g.height } });
          return;
        }
        M.width = M.height = null;
      }
      function p2() {
        c = null, a && h.removeEventListener("resize", w), i && r && (document.body.removeChild(r), r = null, u = !1);
      }
      return a && h.addEventListener("resize", w, !1), n ? n.fire(s, M, p2) : m(s, M, p2);
    }
    return f.reset = function() {
      n && n.reset(), c && c.reset();
    }, f;
  }
  var F2;
  function O() {
    return F2 || (F2 = L(null, { useWorker: !0, resize: !0 })), F2;
  }
  b.exports = function() {
    return O().apply(this, arguments);
  }, b.exports.reset = function() {
    O().reset();
  }, b.exports.create = L;
})(function() {
  return typeof document < "u" ? window : typeof self < "u" ? self : this || {};
}(), x, !1);
var se2 = x.exports, ue2 = x.exports.create;

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
  "browser.translateLocalHtmlFile": "\u7FFB\u8BD1\u672C\u5730 HTML \u6587\u4EF6",
  confirmResetConfig: "\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",
  translationLineBreakSettingTitle: "\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",
  smartLineBreak: "\u667A\u80FD\u6362\u884C",
  alwaysLineBreak: "\u603B\u662F\u6362\u884C",
  isShowContextMenu: "\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",
  toggleBeta: "\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",
  betaDescription: "\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",
  translationLineBreakSettingDescription: "\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",
  tempTranslateDomainTitle: "\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",
  tempTranslateDomainDescription: "\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",
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
  "field.apiUrl": "\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740",
  "description.limitPerMinute": "\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A OpenAI \u8BD5\u7528\u7248\u7684\u8BF7\u6C42\u9650\u5236\uFF0C\u4ED8\u8D39\u7248\u53EF\u4EE5\u76F4\u63A5\u6539\u4E3A1000\u4EE5\u4E0A",
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
  "browser.translateLocalHtmlFile": "\u7FFB\u8B6F\u672C\u6A5F HTML \u6A94\u6848",
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
  toggleDebug: "\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304",
  "fingers.0": "\u95DC\u9589",
  "fingers.2": "\u96D9\u6307\u89F8\u6478",
  "fingers.3": "\u4E09\u6307\u89F8\u6478",
  "fingers.4": "\u56DB\u6307\u89F8\u6478",
  "fingers.5": "\u4E94\u6307\u89F8\u6478",
  document: "\u8AAA\u660E\u6587\u4EF6",
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
  "field.maxTextLengthPerRequest": "\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6",
  "description.limitPerMinute": "\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\uFF0C\u9810\u8A2D\u8A2D\u5B9A\u70BA OpenAI \u8A66\u7528\u7248\u7684\u8981\u6C42\u9650\u5236",
  "description.prompt": "\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00",
  "description.maxTextLengthPerRequest": "\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6",
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
  "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.",
  "browser.toggleTranslatePage": "Toggle translate webpage ",
  "browser.toggleTranslateTheWholePage": "Toggle translate the whole page",
  "browser.toggleTranslateToThePageEndImmediately": "Toggle translate to the bottom of the page immediately",
  "browser.toggleTranslateTheMainPage": "Toggle translate the main page",
  "browser.openOptionsPage": "Open Settings Page",
  "browser.toggleTranslationMask": "Toggle translation mask style",
  "browser.translateLocalPdfFile": "Translate local PDF files",
  "browser.openEbookViewer": "Read local e-book",
  "browser.openEbookBuilder": "Make Dual Epub ebook",
  "browser.translateLocalHtmlFile": "Translate local HTML files",
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
  "translationTheme.grey": "Black Gray",
  "translationTheme.dashed": "Dashed underline",
  "translationTheme.dotted": "Dotted Underline",
  "translationTheme.dashedBorder": "Dashed Border",
  "translationTheme.solidBorder": "Dashed Border",
  "translationTheme.underline": "Straight underline",
  "translationTheme.mask": "Blur effect",
  "translationTheme.paper": "White paper shadow effect",
  "translationTheme.dividingLine": "Dividing line",
  "translationTheme.highlight": "Highlight",
  "translationTheme.marker": "Maker",
  "translationTheme.marker2": "Maker2",
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
  "customThemeLabel.borderRadius": "Border Round Corner",
  "customThemeLabel.textColor": "Text color",
  "customThemeLabel.backgroundColor": "Background color",
  "customThemeLabel.zoom": "Font scale (%)",
  resetToDefaultColor: "Reset to default colors",
  isTranslateTitle: "Enable translate page title",
  isTranslateTitleDescription: "When enabled, the page title will be translated",
  verifyService: "Click on this test service",
  verified: "Successful",
  "field.model": "Model",
  "field.translationEngine": "Translation engine",
  "field.limitPerMinute": "Max requests per minute",
  "field.maxTextLengthPerRequest": "Maximum text length per request",
  "description.limitPerMinute": "The number of requests exceeding this limit will be temporarily disabled until the next minute, set as the request limit for the OpenAI trial version by default",
  "description.prompt": "Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language",
  "description.maxTextLengthPerRequest": "By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed",
  enabledExtension: "Enable extensions",
  clickToDisableExtension: "Click to disable extension",
  clickToEnableExtension: "Click to enable the extension",
  hasBeenDisabled: "Disabled",
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
];
var translations = {};
for (let translation of interfaceTranslations)
  translations[translation.code] = translation.messages;
var brandId = "immersive-translate";
var brandIdForJs = "immersiveTranslate";
var GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow";
var AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", iframeMessageRateIdentifier = brandIdForJs + "WaitForRateLimit", documentMessageTypeIdentifierForAsk = brandIdForJs + "DocumentMessageAsk", documentMessageTypeIdentifierForTellThirdParty = brandIdForJs + "DocumentMessageTellThirdParty", documentMessageTypeIdentifierForThirdPartyTell = brandIdForJs + "DocumentMessageThirdPartyTell", documentMessageTypeIdentifierForHandler = brandIdForJs + "DocumentMessageHandler", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`;
var pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
var elementMarkRootKey = `${brandIdForJs}Root`, sourceElementEffectAttributeName = `data-${brandId}-effect`, sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`, sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`, sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`, sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`, sourceElementExcludeAttributeNameForSelector = `data-${brandId}-exclude-mark`, sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`, sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`, sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`, sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`, sourceElementLeft = `${brandIdForJs}Left`, sourceElementRight = `${brandIdForJs}Right`, sourceElementWidth = `${brandIdForJs}Width`, sourceElementHeight = `${brandIdForJs}Height`, sourceElementTop = `${brandIdForJs}Top`, sourceElementFontSize = `${brandIdForJs}FontSize`;
var sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`;
var translationTargetElementWrapperClass = `${brandId}-target-wrapper`, translationPdfTargetContainerClass = `${brandId}-pdf-target-container`, translationTargetInnerElementWrapperClass = `${brandId}-target-inner`, translationSourceElementsWrapperClass = `${brandId}-source-wrapper`, translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`, translationFrameRootThemeAttributeName = `${brandId}-root-translation-theme`, translationFrameRootThemeAttributeNameForJs = `${brandIdForJs}RootTranslationTheme`, translationTargetTranslationElementVerticalBlockClass = `${brandId}-target-translation-vertical-block-wrapper`, translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`, translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`, translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
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
        name: "apiUrl",
        labelKey: "field.apiUrl",
        required: !1,
        type: "text",
        default: "https://api.openai.com/v1/chat/completions"
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

// libs/foliate-js/make.js
var { ZipReader, BlobReader, TextReader, TextWriter, BlobWriter, ZipWriter } = zip_no_worker_exports;
or({ useWebWorkers: !1 });
var isZip = async (file) => {
  let arr = new Uint8Array(await file.slice(0, 4).arrayBuffer());
  return arr[0] === 80 && arr[1] === 75 && arr[2] === 3 && arr[3] === 4;
}, globalLoader = null, totalParagraphsCount = 0, currentTranslatedParagraphsOkCount = 0, currentTranslatedParagraphsErrorCount = 0, isCelebrate = !1, env2 = getEnv(), isProd = env2.PROD === "1", makeZipLoader = async (file) => {
  let entries = await new ZipReader(new BlobReader(file)).getEntries();
  file.name && file.name.endsWith(".zip") && entries.every(
    (entry) => entry.filename.startsWith(file.name.slice(0, -4) + "/")
  ) && (entries = entries.map((entry) => (entry.filename = entry.filename.slice(file.name.length - 3), entry)));
  let map = new Map(
    entries.map((entry) => [entry.filename, entry])
  ), load = (f) => (name, ...args) => map.has(name) ? f(map.get(name), ...args) : null, loadText = load((entry) => entry.getData(new TextWriter())), loadBlob = load((entry, type) => entry.getData(new BlobWriter(type)));
  return { entries, loadText, loadBlob, getSize: (name) => map.get(name)?.uncompressedSize ?? 0 };
}, getFileEntries = async (entry) => entry.isFile ? entry : (await Promise.all(
  Array.from(
    await new Promise(
      (resolve, reject) => entry.createReader().readEntries(
        (entries) => resolve(entries),
        (error) => reject(error)
      )
    ),
    getFileEntries
  )
)).flat(), makeDirectoryLoader = async (entry) => {
  let entries = await getFileEntries(entry);
  entries = entries.map((entry2) => entry2);
  let newEntries = [], files = await Promise.all(
    entries.map(
      (entry2) => new Promise(
        (resolve, reject) => entry2.file(
          (file) => resolve([file, entry2.fullPath]),
          (error) => reject(error)
        )
      )
    )
  ), map = new Map(
    files.map(([file, path]) => {
      let key = path.replace(entry.fullPath + "/", "");
      return newEntries.push({ filename: key, ...file }), [key, file];
    })
  ), decoder2 = new TextDecoder(), decode = (x2) => x2 ? decoder2.decode(x2) : null, getBuffer = (name) => map.get(name)?.arrayBuffer() ?? null;
  return { entries: newEntries, loadText: async (name) => decode(await getBuffer(name)), loadBlob: async (name) => map.get(name), getSize: (name) => map.get(name)?.size ?? 0 };
}, Confettiful = function(el) {
  this.el = el, this.containerEl = null, this.confettiFrequency = 3, this.confettiColors = ["#EF2964", "#00C09D", "#2D87B0", "#48485E", "#EFFF1D"], this.confettiAnimations = ["slow", "medium", "fast"], this._setupElements(), this._renderConfetti();
};
Confettiful.prototype._setupElements = function() {
  let containerEl = document.createElement("div"), elPosition = this.el.style.position;
  (elPosition !== "relative" || elPosition !== "absolute") && (this.el.style.position = "relative"), containerEl.classList.add("confetti-container"), this.el.appendChild(containerEl), this.containerEl = containerEl;
};
Confettiful.prototype._renderConfetti = function() {
  this.confettiInterval = setInterval(() => {
    let confettiEl = document.createElement("div"), confettiSize = Math.floor(Math.random() * 3) + 7 + "px", confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)], confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + "px", confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
    confettiEl.classList.add(
      "confetti",
      "confetti--animation-" + confettiAnimation
    ), confettiEl.style.left = confettiLeft, confettiEl.style.width = confettiSize, confettiEl.style.height = confettiSize, confettiEl.style.backgroundColor = confettiBackground, confettiEl.removeTimeout = setTimeout(function() {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3e3), this.containerEl.appendChild(confettiEl);
  }, 25);
};
Confettiful.prototype.remove = function() {
  clearInterval(this.confettiInterval), this.el.removeChild(this.containerEl);
};
var isCBZ = ({ name, type }) => type === "application/vnd.comicbook+zip" || name.endsWith(".cbz"), isFB2 = ({ name, type }) => type === "application/x-fictionbook+xml" || name.endsWith(".fb2"), isFBZ = ({ name, type }) => type === "application/x-zip-compressed-fb2" || name.endsWith(".fb2.zip") || name.endsWith(".fbz"), getView = async (file, emit) => {
  let book;
  if (file.isDirectory) {
    let loader = await makeDirectoryLoader(file);
    globalLoader = loader, book = await new EPUB(loader).init();
  } else if (file.size)
    if (await isZip(file)) {
      let loader = await makeZipLoader(file);
      if (globalLoader = loader, isCBZ(file))
        book = makeComicBook(loader, file);
      else if (isFBZ(file)) {
        let { entries } = loader, entry = entries.find((entry2) => entry2.filename.endsWith(".fb2")), blob = await loader.loadBlob((entry ?? entries[0]).filename);
        book = await makeFB2(blob);
      } else
        book = await new EPUB(loader).init();
    } else
      await isMOBI(file) ? book = await new MOBI({ unzlib: Qr2 }).open(file) : isFB2(file) && (book = await makeFB2(file));
  else
    throw new Error("File not found");
  if (!book)
    throw new Error("File type not supported");
  let view = new View2(book, emit), element = await view.display();
  return document.body.append(element), view;
}, $3 = document.querySelector.bind(document), isIframeContentediable = !1;
function disableIframeContentediable() {
  let iframes = document.querySelectorAll("iframe");
  for (let i = 0; i < iframes.length; i++) {
    let body = iframes[i].contentDocument.body;
    body && body.setAttribute("contenteditable", !1);
  }
  isIframeContentediable = !1;
  let editButton = document.getElementById("edit");
  editButton && (editButton.innerText = isIframeContentediable ? "Preview (\u9884\u89C8)" : "Edit (\u7F16\u8F91)");
  let editTitleButtons = document.querySelectorAll(
    "[data-type='iframe-title']"
  );
  for (let i = 0; i < editTitleButtons.length; i++) {
    let editTitleButton = editTitleButtons[i];
    editTitleButton.innerText = isIframeContentediable ? " \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09" : "";
  }
}
function enalbeIframeContentediable() {
  let iframes = document.querySelectorAll("iframe");
  for (let i = 0; i < iframes.length; i++) {
    let body = iframes[i].contentDocument.body;
    body && body.setAttribute("contenteditable", !0);
  }
  isIframeContentediable = !0;
  let editButton = document.getElementById("edit");
  editButton && (editButton.innerText = isIframeContentediable ? "Preview (\u9884\u89C8)" : "Edit (\u7F16\u8F91)");
  let editTitleButtons = document.querySelectorAll(
    "[data-type='iframe-title']"
  );
  for (let i = 0; i < editTitleButtons.length; i++) {
    let editTitleButton = editTitleButtons[i];
    editTitleButton.innerText = isIframeContentediable ? " \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09" : "";
  }
}
function toggleIframeContentediable() {
  isIframeContentediable ? disableIframeContentediable() : enalbeIframeContentediable();
}
var Reader = class {
  style = {
    spacing: 1.4,
    justify: !0,
    hyphenate: !0
  };
  layout = {
    margin: 48,
    gap: 48,
    maxColumnWidth: 720
  };
  closeSideBar() {
    $3("#dimming-overlay").classList.remove("show"), $3("#side-bar").classList.remove("show");
  }
  constructor() {
    $3("#side-bar-button").addEventListener("click", () => {
      $3("#dimming-overlay").classList.add("show"), $3("#side-bar").classList.add("show");
    }), $3("#dimming-overlay").addEventListener("click", () => this.closeSideBar());
    let menu = createMenu([
      {
        name: "layout",
        label: "Layout",
        type: "radio",
        items: [
          ["Paginated", "paginated"],
          ["Scrolled", "scrolled"]
        ],
        onclick: (value) => {
          this.layout.flow = value;
        }
      }
    ]);
    menu.element.classList.add("menu"), $3("#menu-button").append(menu.element), $3("#menu-button > button").addEventListener(
      "click",
      () => menu.element.classList.toggle("show")
    ), menu.groups.layout.select("paginated");
  }
  async open(file) {
    try {
      this.view = await getView(file, this.#handleEvent.bind(this));
      let { book } = this.view, bookSections = book.sections, chapters = document.querySelector("#chapters"), bookResources = book.resources, guidesPaths = [];
      if (bookResources && bookResources.guide && bookResources.guide.length)
        for (let guide of bookResources.guide)
          guidesPaths.push(guide.href);
      let progressElement = document.querySelector("#progress-number"), errorElement1 = document.querySelector("#error");
      errorElement1.addEventListener("click", (e) => {
        for (e.preventDefault(); errorElement1.firstChild; )
          errorElement1.removeChild(errorElement1.firstChild);
        currentTranslatedParagraphsErrorCount = 0, document.dispatchEvent(
          new CustomEvent(documentMessageTypeIdentifierForThirdPartyTell, {
            detail: JSON.stringify({
              type: "retryFailedParagraphs"
            })
          })
        );
      }), document.addEventListener(
        documentMessageTypeIdentifierForTellThirdParty,
        (e) => {
          let { detail } = e;
          if (detail)
            try {
              let detailObj = JSON.parse(detail);
              if (detailObj && detailObj.type && detailObj.payload)
                if (detailObj.type === "paragraphTranslated") {
                  let { ok } = detailObj.payload;
                  if (ok ? currentTranslatedParagraphsOkCount++ : currentTranslatedParagraphsErrorCount++, progressElement && totalParagraphsCount) {
                    let translatedCount = currentTranslatedParagraphsOkCount, totalTranslatedCount = currentTranslatedParagraphsOkCount + currentTranslatedParagraphsErrorCount, successProgress = Math.floor(
                      translatedCount / totalParagraphsCount * 100
                    ), totalProgress = Math.floor(
                      totalTranslatedCount / totalParagraphsCount * 100
                    );
                    if (successProgress > 100 && (successProgress = 100), totalProgress > 100 && (totalProgress = 100), progressElement.innerText = `${successProgress}%`, totalProgress === 100 && currentTranslatedParagraphsErrorCount > 0) {
                      let errorElement = document.querySelector("#error");
                      errorElement.innerHTML = `${currentTranslatedParagraphsErrorCount} failed. <span class="link">Retry all</span>`;
                    }
                    successProgress === 100 && (isCelebrate || (isCelebrate = !0, se2({
                      particleCount: 100,
                      spread: 160,
                      useWorker: !0
                    })));
                  }
                } else
                  detailObj.type === "totalParagraphsCount" && detailObj.payload.totalParagraphsCount && (totalParagraphsCount = detailObj.payload.totalParagraphsCount, currentTranslatedParagraphsOkCount = 0, currentTranslatedParagraphsErrorCount = 0);
            } catch (err) {
              console.log("parse detail failed", e, err);
            }
        }
      ), $3("#open").addEventListener("click", () => {
        window.location.reload();
      }), $3("#export").addEventListener("click", async (e) => {
        e.preventDefault(), globalLoader || alert("Load failed"), disableIframeContentediable();
        let entries = globalLoader.entries, zipFileWriter = new BlobWriter(), zipWriter = new ZipWriter(zipFileWriter), mimetypeReader = new TextReader("application/epub+zip");
        await zipWriter.add("mimetype", mimetypeReader, {
          level: 0,
          extendedTimestamp: !1
        });
        for (let i = 0; i < entries.length; i++) {
          let entry = entries[i], entryFilename = entry.filename;
          if (entryFilename === "mimetype" || !entryFilename)
            continue;
          let iframe = document.querySelector(
            "iframe[id='" + entryFilename + "']"
          );
          if (iframe) {
            let iframeDom = iframe.contentDocument.cloneNode(!0);
            iframeDom.querySelectorAll(
              "[" + sourceElementEffectAttributeName + "]"
            ).forEach((element) => {
              if (isProd) {
                delete element[elementMarkRootKey];
                let keys = Object.keys(element.dataset).filter(
                  (key) => key.startsWith(brandIdForJs)
                );
                for (let key of keys)
                  delete element.dataset[key];
              } else {
                let keys = Object.keys(element.dataset).filter(
                  (key) => key.startsWith(brandIdForJs)
                );
                for (let key of keys)
                  delete element.dataset[key];
              }
              element.removeAttribute(sourceElementEffectAttributeName);
            }), iframeDom.querySelectorAll("[data-id]").forEach((element) => {
              element.removeAttribute("data-id");
            }), iframeDom.querySelectorAll("[contenteditable]").forEach((element) => {
              element.removeAttribute("contenteditable");
            }), iframeDom.querySelectorAll("style").forEach((element) => {
              element.getAttribute("type") || element.setAttribute("type", "text/css");
            });
            let xmlString = new XMLSerializer().serializeToString(iframeDom), iframeContentReader = new TextReader(xmlString);
            await zipWriter.add(entry.filename, iframeContentReader);
          } else {
            let metadata2 = book.metadata;
            if (entry.filename === book.opfPath && metadata2 && metadata2.identifier)
              try {
                let opfText = await globalLoader.loadText(entry.filename), opf = new DOMParser().parseFromString(
                  opfText,
                  "text/xml"
                ), opfElement = opf.getElementById(
                  opf.documentElement.getAttribute("unique-identifier")
                ) ?? opf.getElementsByTagNameNS(NS.DC, "identifier")[0], random13digitText = Math.random().toString(10).slice(2, 15);
                opfElement.textContent = random13digitText;
                let newOpfString = new XMLSerializer().serializeToString(opf), newOpfReader = new TextReader(newOpfString);
                await zipWriter.add(entry.filename, newOpfReader);
              } catch (e2) {
                console.warn("change unique number failed", e2);
                let blob = await globalLoader.loadBlob(entry.filename);
                await zipWriter.add(entry.filename, new BlobReader(blob));
              }
            else {
              let blob = await globalLoader.loadBlob(entry.filename);
              await zipWriter.add(entry.filename, new BlobReader(blob));
            }
          }
        }
        await zipWriter.close();
        let zipFileBlob = await zipFileWriter.getData(), elm = document.createElement("a");
        elm.href = URL.createObjectURL(zipFileBlob);
        let newName = file.name;
        file.name.endsWith(".epub.zip") && (newName = newName.replace(".epub.zip", ".epub"));
        let index = newName.lastIndexOf(".");
        newName = newName.substring(0, index) + " (Translated)" + newName.substring(index), elm.setAttribute("download", newName), elm.click();
      }), $3("#edit").addEventListener("click", (e) => {
        e.preventDefault(), globalLoader || alert("Load failed"), toggleIframeContentediable();
      });
      let metadata = book.metadata || {};
      console.log("metadata", metadata);
      let title = metadata.title || "Unknown", bootTitleElement = document.querySelector("#bookTitle");
      bootTitleElement.textContent = title;
      let blockquote = document.createElement("blockquote");
      blockquote.classList.add("notranslate");
      let blockQuoteHtml = `<p class="notranslate">Click on the Immersive Translate extension popup translation button to start translating.<br>\u70B9\u51FB\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6269\u5C55/\u811A\u672C\u6D6E\u7A97\u7684\u7FFB\u8BD1\u6309\u94AE\u5F00\u59CB\u7FFB\u8BD1\u3002<br><br>If the Epub contains images, it's fine for the edit box below not to show the images, the exported Epub will contain the images.<br>\u5982\u679C Epub \u91CC\u5305\u542B\u56FE\u7247\uFF0C\u4E0B\u9762\u7684\u7F16\u8F91\u6846\u4E0D\u663E\u793A\u56FE\u7247\u662F\u6B63\u5E38\u7684\uFF0C\u5BFC\u51FA\u540E\u7684 Epub \u91CC\u4F1A\u5305\u542B\u56FE\u7247\u3002<br><br>When the translation is finished, you can click the Edit button above to modify the translation.<br>\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u7F16\u8F91\u6309\u94AE\u6765\u4FEE\u6539\u8BD1\u6587\u3002</p>`, ebookTipsMeta = document.querySelector(
        "meta[name='immersive-translate-ebook-tips']"
      );
      if (ebookTipsMeta) {
        let content = ebookTipsMeta.getAttribute("content");
        content && (blockQuoteHtml += content);
      }
      blockquote.innerHTML = blockQuoteHtml, document.querySelector("#tips").append(blockquote);
      let isAllLoaded = !1, loadedCount = 0;
      for (let i = 0; i < bookSections.length; i++) {
        let filePath = bookSections[i].id, text = await book.loadText(filePath), doc = new DOMParser().parseFromString(
          text,
          "application/xhtml+xml"
        ), flexDiv = document.createElement("div");
        flexDiv.classList.add("flex"), flexDiv.classList.add("justify-center"), flexDiv.classList.add("items-center"), chapters.append(flexDiv);
        let h2 = document.createElement("h2");
        h2.classList.add("notranslate"), h2.innerText = filePath, flexDiv.append(h2);
        let span = document.createElement("span");
        span.dataset.type = "iframe-title", span.classList.add("notranslate"), span.innerText = "", flexDiv.append(span);
        let iframe = document.createElement("iframe");
        iframe.setAttribute("id", filePath), iframe.setAttribute("width", "80%"), iframe.setAttribute("height", "400px"), iframe.srcdoc = doc.documentElement.outerHTML, chapters.append(iframe), iframe.onload = () => {
          if (loadedCount++, loadedCount === bookSections.length) {
            isAllLoaded = !0, document.dispatchEvent(
              new CustomEvent("immersiveTranslateEbookLoaded")
            );
            let allIframes = document.querySelectorAll("iframe"), totalTextCount = 0;
            allIframes.forEach((iframe2) => {
              let textCount = iframe2.contentDocument.body.innerText.length;
              totalTextCount += textCount;
            });
            let p2 = document.createElement("p");
            p2.classList.add("notranslate"), p2.innerText = `The book is about ${totalTextCount} characters in total (\u672C\u4E66\u5927\u7EA6 ${totalTextCount} \u4E2A\u5B57\u7B26)`, $3("#stats").append(p2);
          }
        };
      }
    } catch (e) {
      console.error(e), alert(e.message), window.location.reload();
    }
  }
  #handleEvent(_obj) {
  }
}, open = async (file) => {
  document.body.removeChild($3("#drop-target"));
  let reader = new Reader();
  globalThis.reader = reader, await reader.open(file), $3("#editor").classList.remove("none");
}, dragOverHandler = (e) => e.preventDefault(), dropHandler = (e) => {
  e.preventDefault();
  let item = Array.from(e.dataTransfer.items).find(
    (item2) => item2.kind === "file"
  );
  if (item) {
    let entry = item.webkitGetAsEntry();
    open(entry.isFile ? item.getAsFile() : entry).catch(
      (e2) => console.error(e2)
    );
  }
}, dropTarget = $3("#drop-target");
dropTarget.addEventListener("drop", dropHandler);
dropTarget.addEventListener("dragover", dragOverHandler);
$3("#file-input").addEventListener(
  "change",
  (e) => open(e.target.files[0]).catch((e2) => console.error(e2))
);
$3("#file-button").addEventListener("click", () => $3("#file-input").click());
