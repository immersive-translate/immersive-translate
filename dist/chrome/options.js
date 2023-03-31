var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// <define:process.env>
var define_process_env_default = { BUILD_TIME: "2023-03-31T22:28:31.197Z", VERSION: "0.3.15", PROD: "1", REDIRECT_URL: "https://immersive-translate.owenyoung.com/auth-done/", IMMERSIVE_TRANSLATE_INJECTED_CSS: `:root {
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
  --immersive-translate-theme-marker-backgroundColor: #fbda41;
  --immersive-translate-theme-marker-backgroundColor-rgb: 251, 218, 65;
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
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.1),
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 3%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 35%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 70%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.8) 95%,
    rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.3)
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

// https://esm.sh/v113/webextension-polyfill@0.10.0/deno/webextension-polyfill.development.mjs
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
  "esm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports2, module2) {
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
              }, (error2) => {
                let message2;
                error2 && (error2 instanceof Error || typeof error2.message == "string") ? message2 = error2.message : message2 = "An unexpected error occurred", sendResponse({
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
}), webextension_polyfill_0_10_exports = {};
__export2(webextension_polyfill_0_10_exports, {
  default: () => webextension_polyfill_0_10_default
});
var __module = __toESM(require_browser_polyfill());
__reExport(webextension_polyfill_0_10_exports, __toESM(require_browser_polyfill()));
var { default: __default, ...__rest } = __module, webextension_polyfill_0_10_default = __default !== void 0 ? __default : __rest;

// browser/import_browser_polyfill.ts
globalThis.immersiveTranslateBrowserAPI = webextension_polyfill_0_10_default;

// https://esm.sh/stable/preact@10.11.0/deno/preact.mjs
var P, d, $, Y, S, F, B, T = {}, V = [], Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(e3, t5) {
  for (var _4 in t5)
    e3[_4] = t5[_4];
  return e3;
}
function j(e3) {
  var t5 = e3.parentNode;
  t5 && t5.removeChild(e3);
}
function ee(e3, t5, _4) {
  var r, l3, o4, s6 = {};
  for (o4 in t5)
    o4 == "key" ? r = t5[o4] : o4 == "ref" ? l3 = t5[o4] : s6[o4] = t5[o4];
  if (arguments.length > 2 && (s6.children = arguments.length > 3 ? P.call(arguments, 2) : _4), typeof e3 == "function" && e3.defaultProps != null)
    for (o4 in e3.defaultProps)
      s6[o4] === void 0 && (s6[o4] = e3.defaultProps[o4]);
  return w(e3, s6, r, l3, null);
}
function w(e3, t5, _4, r, l3) {
  var o4 = { type: e3, props: t5, key: _4, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l3 ?? ++$ };
  return l3 == null && d.vnode != null && d.vnode(o4), o4;
}
function L(e3) {
  return e3.children;
}
function U(e3, t5) {
  this.props = e3, this.context = t5;
}
function C(e3, t5) {
  if (t5 == null)
    return e3.__ ? C(e3.__, e3.__.__k.indexOf(e3) + 1) : null;
  for (var _4; t5 < e3.__k.length; t5++)
    if ((_4 = e3.__k[t5]) != null && _4.__e != null)
      return _4.__e;
  return typeof e3.type == "function" ? C(e3) : null;
}
function z(e3) {
  var t5, _4;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, t5 = 0; t5 < e3.__k.length; t5++)
      if ((_4 = e3.__k[t5]) != null && _4.__e != null) {
        e3.__e = e3.__c.base = _4.__e;
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
    e3 = S.sort(function(t5, _4) {
      return t5.__v.__b - _4.__v.__b;
    }), S = [], e3.some(function(t5) {
      var _4, r, l3, o4, s6, f4;
      t5.__d && (s6 = (o4 = (_4 = t5).__v).__e, (f4 = _4.__P) && (r = [], (l3 = k({}, o4)).__v = o4.__v + 1, W(f4, o4, l3, _4.__n, f4.ownerSVGElement !== void 0, o4.__h != null ? [s6] : null, r, s6 ?? C(o4), o4.__h), K(r, o4), o4.__e != s6 && z(o4)));
    });
}
function G(e3, t5, _4, r, l3, o4, s6, f4, p6, a4) {
  var n3, h4, c5, i2, u3, b6, v5, y5 = r && r.__k || V, g6 = y5.length;
  for (_4.__k = [], n3 = 0; n3 < t5.length; n3++)
    if ((i2 = _4.__k[n3] = (i2 = t5[n3]) == null || typeof i2 == "boolean" ? null : typeof i2 == "string" || typeof i2 == "number" || typeof i2 == "bigint" ? w(null, i2, null, null, i2) : Array.isArray(i2) ? w(L, { children: i2 }, null, null, null) : i2.__b > 0 ? w(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) != null) {
      if (i2.__ = _4, i2.__b = _4.__b + 1, (c5 = y5[n3]) === null || c5 && i2.key == c5.key && i2.type === c5.type)
        y5[n3] = void 0;
      else
        for (h4 = 0; h4 < g6; h4++) {
          if ((c5 = y5[h4]) && i2.key == c5.key && i2.type === c5.type) {
            y5[h4] = void 0;
            break;
          }
          c5 = null;
        }
      W(e3, i2, c5 = c5 || T, l3, o4, s6, f4, p6, a4), u3 = i2.__e, (h4 = i2.ref) && c5.ref != h4 && (v5 || (v5 = []), c5.ref && v5.push(c5.ref, null, i2), v5.push(h4, i2.__c || u3, i2)), u3 != null ? (b6 == null && (b6 = u3), typeof i2.type == "function" && i2.__k === c5.__k ? i2.__d = p6 = q(i2, p6, e3) : p6 = J(e3, i2, c5, y5, u3, p6), typeof _4.type == "function" && (_4.__d = p6)) : p6 && c5.__e == p6 && p6.parentNode != e3 && (p6 = C(c5));
    }
  for (_4.__e = b6, n3 = g6; n3--; )
    y5[n3] != null && (typeof _4.type == "function" && y5[n3].__e != null && y5[n3].__e == _4.__d && (_4.__d = C(r, n3 + 1)), X(y5[n3], y5[n3]));
  if (v5)
    for (n3 = 0; n3 < v5.length; n3++)
      Q(v5[n3], v5[++n3], v5[++n3]);
}
function q(e3, t5, _4) {
  for (var r, l3 = e3.__k, o4 = 0; l3 && o4 < l3.length; o4++)
    (r = l3[o4]) && (r.__ = e3, t5 = typeof r.type == "function" ? q(r, t5, _4) : J(_4, r, r, l3, r.__e, t5));
  return t5;
}
function J(e3, t5, _4, r, l3, o4) {
  var s6, f4, p6;
  if (t5.__d !== void 0)
    s6 = t5.__d, t5.__d = void 0;
  else if (_4 == null || l3 != o4 || l3.parentNode == null)
    e:
      if (o4 == null || o4.parentNode !== e3)
        e3.appendChild(l3), s6 = null;
      else {
        for (f4 = o4, p6 = 0; (f4 = f4.nextSibling) && p6 < r.length; p6 += 2)
          if (f4 == l3)
            break e;
        e3.insertBefore(l3, o4), s6 = o4;
      }
  return s6 !== void 0 ? s6 : l3.nextSibling;
}
function _e(e3, t5, _4, r, l3) {
  var o4;
  for (o4 in _4)
    o4 === "children" || o4 === "key" || o4 in t5 || N(e3, o4, null, _4[o4], r);
  for (o4 in t5)
    l3 && typeof t5[o4] != "function" || o4 === "children" || o4 === "key" || o4 === "value" || o4 === "checked" || _4[o4] === t5[o4] || N(e3, o4, t5[o4], _4[o4], r);
}
function I(e3, t5, _4) {
  t5[0] === "-" ? e3.setProperty(t5, _4) : e3[t5] = _4 == null ? "" : typeof _4 != "number" || Z.test(t5) ? _4 : _4 + "px";
}
function N(e3, t5, _4, r, l3) {
  var o4;
  e:
    if (t5 === "style")
      if (typeof _4 == "string")
        e3.style.cssText = _4;
      else {
        if (typeof r == "string" && (e3.style.cssText = r = ""), r)
          for (t5 in r)
            _4 && t5 in _4 || I(e3.style, t5, "");
        if (_4)
          for (t5 in _4)
            r && _4[t5] === r[t5] || I(e3.style, t5, _4[t5]);
      }
    else if (t5[0] === "o" && t5[1] === "n")
      o4 = t5 !== (t5 = t5.replace(/Capture$/, "")), t5 = t5.toLowerCase() in e3 ? t5.toLowerCase().slice(2) : t5.slice(2), e3.l || (e3.l = {}), e3.l[t5 + o4] = _4, _4 ? r || e3.addEventListener(t5, o4 ? R : O, o4) : e3.removeEventListener(t5, o4 ? R : O, o4);
    else if (t5 !== "dangerouslySetInnerHTML") {
      if (l3)
        t5 = t5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t5 !== "href" && t5 !== "list" && t5 !== "form" && t5 !== "tabIndex" && t5 !== "download" && t5 in e3)
        try {
          e3[t5] = _4 ?? "";
          break e;
        } catch {
        }
      typeof _4 == "function" || (_4 != null && (_4 !== !1 || t5[0] === "a" && t5[1] === "r") ? e3.setAttribute(t5, _4) : e3.removeAttribute(t5));
    }
}
function O(e3) {
  this.l[e3.type + !1](d.event ? d.event(e3) : e3);
}
function R(e3) {
  this.l[e3.type + !0](d.event ? d.event(e3) : e3);
}
function W(e3, t5, _4, r, l3, o4, s6, f4, p6) {
  var a4, n3, h4, c5, i2, u3, b6, v5, y5, g6, x6, H8, E4, m4 = t5.type;
  if (t5.constructor !== void 0)
    return null;
  _4.__h != null && (p6 = _4.__h, f4 = t5.__e = _4.__e, t5.__h = null, o4 = [f4]), (a4 = d.__b) && a4(t5);
  try {
    e:
      if (typeof m4 == "function") {
        if (v5 = t5.props, y5 = (a4 = m4.contextType) && r[a4.__c], g6 = a4 ? y5 ? y5.props.value : a4.__ : r, _4.__c ? b6 = (n3 = t5.__c = _4.__c).__ = n3.__E : ("prototype" in m4 && m4.prototype.render ? t5.__c = n3 = new m4(v5, g6) : (t5.__c = n3 = new U(v5, g6), n3.constructor = m4, n3.render = oe), y5 && y5.sub(n3), n3.props = v5, n3.state || (n3.state = {}), n3.context = g6, n3.__n = r, h4 = n3.__d = !0, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m4.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k({}, n3.__s)), k(n3.__s, m4.getDerivedStateFromProps(v5, n3.__s))), c5 = n3.props, i2 = n3.state, h4)
          m4.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
        else {
          if (m4.getDerivedStateFromProps == null && v5 !== c5 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v5, g6), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v5, n3.__s, g6) === !1 || t5.__v === _4.__v) {
            n3.props = v5, n3.state = n3.__s, t5.__v !== _4.__v && (n3.__d = !1), n3.__v = t5, t5.__e = _4.__e, t5.__k = _4.__k, t5.__k.forEach(function(A5) {
              A5 && (A5.__ = t5);
            }), n3.__h.length && s6.push(n3);
            break e;
          }
          n3.componentWillUpdate != null && n3.componentWillUpdate(v5, n3.__s, g6), n3.componentDidUpdate != null && n3.__h.push(function() {
            n3.componentDidUpdate(c5, i2, u3);
          });
        }
        if (n3.context = g6, n3.props = v5, n3.__v = t5, n3.__P = e3, x6 = d.__r, H8 = 0, "prototype" in m4 && m4.prototype.render)
          n3.state = n3.__s, n3.__d = !1, x6 && x6(t5), a4 = n3.render(n3.props, n3.state, n3.context);
        else
          do
            n3.__d = !1, x6 && x6(t5), a4 = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
          while (n3.__d && ++H8 < 25);
        n3.state = n3.__s, n3.getChildContext != null && (r = k(k({}, r), n3.getChildContext())), h4 || n3.getSnapshotBeforeUpdate == null || (u3 = n3.getSnapshotBeforeUpdate(c5, i2)), E4 = a4 != null && a4.type === L && a4.key == null ? a4.props.children : a4, G(e3, Array.isArray(E4) ? E4 : [E4], t5, _4, r, l3, o4, s6, f4, p6), n3.base = t5.__e, t5.__h = null, n3.__h.length && s6.push(n3), b6 && (n3.__E = n3.__ = null), n3.__e = !1;
      } else
        o4 == null && t5.__v === _4.__v ? (t5.__k = _4.__k, t5.__e = _4.__e) : t5.__e = ne(_4.__e, t5, _4, r, l3, o4, s6, p6);
    (a4 = d.diffed) && a4(t5);
  } catch (A5) {
    t5.__v = null, (p6 || o4 != null) && (t5.__e = f4, t5.__h = !!p6, o4[o4.indexOf(f4)] = null), d.__e(A5, t5, _4);
  }
}
function K(e3, t5) {
  d.__c && d.__c(t5, e3), e3.some(function(_4) {
    try {
      e3 = _4.__h, _4.__h = [], e3.some(function(r) {
        r.call(_4);
      });
    } catch (r) {
      d.__e(r, _4.__v);
    }
  });
}
function ne(e3, t5, _4, r, l3, o4, s6, f4) {
  var p6, a4, n3, h4 = _4.props, c5 = t5.props, i2 = t5.type, u3 = 0;
  if (i2 === "svg" && (l3 = !0), o4 != null) {
    for (; u3 < o4.length; u3++)
      if ((p6 = o4[u3]) && "setAttribute" in p6 == !!i2 && (i2 ? p6.localName === i2 : p6.nodeType === 3)) {
        e3 = p6, o4[u3] = null;
        break;
      }
  }
  if (e3 == null) {
    if (i2 === null)
      return document.createTextNode(c5);
    e3 = l3 ? document.createElementNS("http://www.w3.org/2000/svg", i2) : document.createElement(i2, c5.is && c5), o4 = null, f4 = !1;
  }
  if (i2 === null)
    h4 === c5 || f4 && e3.data === c5 || (e3.data = c5);
  else {
    if (o4 = o4 && P.call(e3.childNodes), a4 = (h4 = _4.props || T).dangerouslySetInnerHTML, n3 = c5.dangerouslySetInnerHTML, !f4) {
      if (o4 != null)
        for (h4 = {}, u3 = 0; u3 < e3.attributes.length; u3++)
          h4[e3.attributes[u3].name] = e3.attributes[u3].value;
      (n3 || a4) && (n3 && (a4 && n3.__html == a4.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
    }
    if (_e(e3, c5, h4, l3, f4), n3)
      t5.__k = [];
    else if (u3 = t5.props.children, G(e3, Array.isArray(u3) ? u3 : [u3], t5, _4, r, l3 && i2 !== "foreignObject", o4, s6, o4 ? o4[0] : _4.__k && C(_4, 0), f4), o4 != null)
      for (u3 = o4.length; u3--; )
        o4[u3] != null && j(o4[u3]);
    f4 || ("value" in c5 && (u3 = c5.value) !== void 0 && (u3 !== e3.value || i2 === "progress" && !u3 || i2 === "option" && u3 !== h4.value) && N(e3, "value", u3, h4.value, !1), "checked" in c5 && (u3 = c5.checked) !== void 0 && u3 !== e3.checked && N(e3, "checked", u3, h4.checked, !1));
  }
  return e3;
}
function Q(e3, t5, _4) {
  try {
    typeof e3 == "function" ? e3(t5) : e3.current = t5;
  } catch (r) {
    d.__e(r, _4);
  }
}
function X(e3, t5, _4) {
  var r, l3;
  if (d.unmount && d.unmount(e3), (r = e3.ref) && (r.current && r.current !== e3.__e || Q(r, null, t5)), (r = e3.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o4) {
        d.__e(o4, t5);
      }
    r.base = r.__P = null, e3.__c = void 0;
  }
  if (r = e3.__k)
    for (l3 = 0; l3 < r.length; l3++)
      r[l3] && X(r[l3], t5, typeof e3.type != "function");
  _4 || e3.__e == null || j(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function oe(e3, t5, _4) {
  return this.constructor(e3, _4);
}
function re(e3, t5, _4) {
  var r, l3, o4;
  d.__ && d.__(e3, t5), l3 = (r = typeof _4 == "function") ? null : _4 && _4.__k || t5.__k, o4 = [], W(t5, e3 = (!r && _4 || t5).__k = ee(L, null, [e3]), l3 || T, T, t5.ownerSVGElement !== void 0, !r && _4 ? [_4] : l3 ? null : t5.firstChild ? P.call(t5.childNodes) : null, o4, !r && _4 ? _4 : l3 ? l3.__e : t5.firstChild, r), K(o4, e3);
}
function ce(e3, t5) {
  var _4 = { __c: t5 = "__cC" + B++, __: e3, Consumer: function(r, l3) {
    return r.children(l3);
  }, Provider: function(r) {
    var l3, o4;
    return this.getChildContext || (l3 = [], (o4 = {})[t5] = this, this.getChildContext = function() {
      return o4;
    }, this.shouldComponentUpdate = function(s6) {
      this.props.value !== s6.value && l3.some(M);
    }, this.sub = function(s6) {
      l3.push(s6);
      var f4 = s6.componentWillUnmount;
      s6.componentWillUnmount = function() {
        l3.splice(l3.indexOf(s6), 1), f4 && f4.call(s6);
      };
    }), r.children;
  } };
  return _4.Provider.__ = _4.Consumer.contextType = _4;
}
P = V.slice, d = { __e: function(e3, t5, _4, r) {
  for (var l3, o4, s6; t5 = t5.__; )
    if ((l3 = t5.__c) && !l3.__)
      try {
        if ((o4 = l3.constructor) && o4.getDerivedStateFromError != null && (l3.setState(o4.getDerivedStateFromError(e3)), s6 = l3.__d), l3.componentDidCatch != null && (l3.componentDidCatch(e3, r || {}), s6 = l3.__d), s6)
          return l3.__E = l3;
      } catch (f4) {
        e3 = f4;
      }
  throw e3;
} }, $ = 0, Y = function(e3) {
  return e3 != null && e3.constructor === void 0;
}, U.prototype.setState = function(e3, t5) {
  var _4;
  _4 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e3 == "function" && (e3 = e3(k({}, _4), this.props)), e3 && k(_4, e3), e3 != null && this.__v && (t5 && this.__h.push(t5), M(this));
}, U.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = !0, e3 && this.__h.push(e3), M(this));
}, U.prototype.render = L, S = [], D.__r = 0, B = 0;

// https://esm.sh/stable/preact@10.11.0/deno/hooks.js
var i, n, d2, N2, f = 0, q2 = [], l = [], V2 = d.__b, g = d.__r, b = d.diffed, C2 = d.__c, A = d.unmount;
function a(_4, t5) {
  d.__h && d.__h(n, _4, f || t5), f = 0;
  var u3 = n.__H || (n.__H = { __: [], __h: [] });
  return _4 >= u3.__.length && u3.__.push({ __V: l }), u3.__[_4];
}
function P2(_4) {
  return f = 1, B2(D2, _4);
}
function B2(_4, t5, u3) {
  var o4 = a(i++, 2);
  if (o4.t = _4, !o4.__c && (o4.__ = [u3 ? u3(t5) : D2(void 0, t5), function(v5) {
    var s6 = o4.__N ? o4.__N[0] : o4.__[0], h4 = o4.t(s6, v5);
    s6 !== h4 && (o4.__N = [h4, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = n, !n.u)) {
    n.u = !0;
    var r = n.shouldComponentUpdate;
    n.shouldComponentUpdate = function(v5, s6, h4) {
      if (!o4.__c.__H)
        return !0;
      var y5 = o4.__c.__H.__.filter(function(c5) {
        return c5.__c;
      });
      if (y5.every(function(c5) {
        return !c5.__N;
      }))
        return !r || r.call(this, v5, s6, h4);
      var E4 = !1;
      return y5.forEach(function(c5) {
        if (c5.__N) {
          var k5 = c5.__[0];
          c5.__ = c5.__N, c5.__N = void 0, k5 !== c5.__[0] && (E4 = !0);
        }
      }), !!E4 && (!r || r.call(this, v5, s6, h4));
    };
  }
  return o4.__N || o4.__;
}
function j2(_4, t5) {
  var u3 = a(i++, 3);
  !d.__s && H(u3.__H, t5) && (u3.__ = _4, u3.i = t5, n.__H.__h.push(u3));
}
function w2(_4) {
  return f = 5, x(function() {
    return { current: _4 };
  }, []);
}
function x(_4, t5) {
  var u3 = a(i++, 7);
  return H(u3.__H, t5) ? (u3.__V = _4(), u3.i = t5, u3.__h = _4, u3.__V) : u3.__;
}
function L2(_4, t5) {
  return f = 8, x(function() {
    return _4;
  }, t5);
}
function M2(_4) {
  var t5 = n.context[_4.__c], u3 = a(i++, 9);
  return u3.c = _4, t5 ? (u3.__ == null && (u3.__ = !0, t5.sub(n)), t5.props.value) : _4.__;
}
function R2() {
  for (var _4; _4 = q2.shift(); )
    if (_4.__P && _4.__H)
      try {
        _4.__H.__h.forEach(m), _4.__H.__h.forEach(p), _4.__H.__h = [];
      } catch (t5) {
        _4.__H.__h = [], d.__e(t5, _4.__v);
      }
}
d.__b = function(_4) {
  typeof _4.type != "function" || _4.o || _4.type === L ? _4.o || (_4.o = _4.__ && _4.__.o ? _4.__.o : "") : _4.o = (_4.__ && _4.__.o ? _4.__.o : "") + (_4.__ && _4.__.__k ? _4.__.__k.indexOf(_4) : 0), n = null, V2 && V2(_4);
}, d.__r = function(_4) {
  g && g(_4), i = 0;
  var t5 = (n = _4.__c).__H;
  t5 && (d2 === n ? (t5.__h = [], n.__h = [], t5.__.forEach(function(u3) {
    u3.__N && (u3.__ = u3.__N), u3.__V = l, u3.__N = u3.i = void 0;
  })) : (t5.__h.forEach(m), t5.__h.forEach(p), t5.__h = [])), d2 = n;
}, d.diffed = function(_4) {
  b && b(_4);
  var t5 = _4.__c;
  t5 && t5.__H && (t5.__H.__h.length && (q2.push(t5) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t5.__H.__.forEach(function(u3) {
    u3.i && (u3.__H = u3.i), u3.__V !== l && (u3.__ = u3.__V), u3.i = void 0, u3.__V = l;
  })), d2 = n = null;
}, d.__c = function(_4, t5) {
  t5.some(function(u3) {
    try {
      u3.__h.forEach(m), u3.__h = u3.__h.filter(function(o4) {
        return !o4.__ || p(o4);
      });
    } catch (o4) {
      t5.some(function(r) {
        r.__h && (r.__h = []);
      }), t5 = [], d.__e(o4, u3.__v);
    }
  }), C2 && C2(_4, t5);
}, d.unmount = function(_4) {
  A && A(_4);
  var t5, u3 = _4.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(o4) {
    try {
      m(o4);
    } catch (r) {
      t5 = r;
    }
  }), u3.__H = void 0, t5 && d.__e(t5, u3.__v));
};
var F2 = typeof requestAnimationFrame == "function";
function S2(_4) {
  var t5, u3 = function() {
    clearTimeout(o4), F2 && cancelAnimationFrame(t5), setTimeout(_4);
  }, o4 = setTimeout(u3, 100);
  F2 && (t5 = requestAnimationFrame(u3));
}
function m(_4) {
  var t5 = n, u3 = _4.__c;
  typeof u3 == "function" && (_4.__c = void 0, u3()), n = t5;
}
function p(_4) {
  var t5 = n;
  _4.__c = _4.__(), n = t5;
}
function H(_4, t5) {
  return !_4 || _4.length !== t5.length || t5.some(function(u3, o4) {
    return u3 !== _4[o4];
  });
}
function D2(_4, t5) {
  return typeof t5 == "function" ? t5(_4) : t5;
}

// https://esm.sh/v113/@twind/core@1.0.1/deno/core.mjs
var F3;
function lt(t5) {
  return [...t5.v, (t5.i ? "!" : "") + t5.n].join(":");
}
function st(t5, e3 = ",") {
  return t5.map(lt).join(e3);
}
var W2 = typeof CSS < "u" && CSS.escape || ((t5) => t5.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function V3(t5) {
  for (var e3 = 9, r = t5.length; r--; )
    e3 = Math.imul(e3 ^ t5.charCodeAt(r), 1597334677);
  return "#" + ((e3 ^ e3 >>> 9) >>> 0).toString(36);
}
function kt(t5, e3 = "@media ") {
  return e3 + x2(t5).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((n3) => `(${n3}-width:${r[n3]})`).join(" and "))).join(",");
}
function x2(t5 = []) {
  return Array.isArray(t5) ? t5 : t5 == null ? [] : [t5];
}
function At(t5) {
  return t5;
}
function D3() {
}
var w3 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function jt(t5) {
  var e3;
  return ((e3 = t5.match(/[-=:;]/g)) == null ? void 0 : e3.length) || 0;
}
function X2(t5) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t5) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t5), 15) << 18;
}
var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function at({ n: t5, i: e3, v: r = [] }, n3, i2, l3) {
  for (let a4 of (t5 && (t5 = lt({ n: t5, i: e3, v: r })), l3 = [...x2(l3)], r)) {
    let s6 = n3.theme("screens", a4);
    for (let u3 of x2(s6 && kt(s6) || n3.v(a4))) {
      var o4;
      l3.push(u3), i2 |= s6 ? 67108864 | X2(u3) : a4 == "dark" ? 1073741824 : u3[0] == "@" ? X2(u3) : (o4 = u3, 1 << ~(/:([a-z-]+)/.test(o4) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: t5, p: i2, r: l3, i: e3 };
}
var ut = /* @__PURE__ */ new Map();
function tt(t5) {
  if (t5.d) {
    let e3 = [], r = Y2(t5.r.reduce((n3, i2) => i2[0] == "@" ? (e3.push(i2), n3) : i2 ? Y2(n3, (l3) => Y2(i2, (o4) => {
      let a4 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o4);
      if (a4) {
        let s6 = l3.indexOf(a4[1]);
        return ~s6 ? l3.slice(0, s6) + a4[0] + l3.slice(s6 + a4[1].length) : Z2(l3, o4);
      }
      return Z2(o4, l3);
    })) : n3, "&"), (n3) => Z2(n3, t5.n ? "." + W2(t5.n) : ""));
    return r && e3.push(r.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i2) => i2 + "{" + n3 + "}", t5.d);
  }
}
function Y2(t5, e3) {
  return t5.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, n3, i2) => e3(n3) + i2);
}
function Z2(t5, e3) {
  return t5.replace(/&/g, e3);
}
var Dt = new Intl.Collator("en", { numeric: !0 });
function St(t5, e3) {
  for (var r = 0, n3 = t5.length; r < n3; ) {
    let i2 = n3 + r >> 1;
    0 >= Mt(t5[i2], e3) ? r = i2 + 1 : n3 = i2;
  }
  return n3;
}
function Mt(t5, e3) {
  let r = t5.p & w3.o;
  return r == (e3.p & w3.o) && (r == w3.b || r == w3.o) ? 0 : t5.p - e3.p || t5.o - e3.o || Dt.compare(t5.n, e3.n);
}
function H2(t5, e3) {
  return Math.round(parseInt(t5, 16) * e3);
}
function T2(t5, e3 = {}) {
  if (typeof t5 == "function")
    return t5(e3);
  let { opacityValue: r = "1", opacityVariable: n3 } = e3, i2 = n3 ? `var(${n3})` : r;
  if (t5.includes("<alpha-value>"))
    return t5.replace("<alpha-value>", i2);
  if (t5[0] == "#" && (t5.length == 4 || t5.length == 7)) {
    let l3 = (t5.length - 1) / 3, o4 = [17, 1, 0.062272][l3 - 1];
    return `rgba(${[H2(t5.substr(1, l3), o4), H2(t5.substr(1 + l3, l3), o4), H2(t5.substr(1 + 2 * l3, l3), o4), i2]})`;
  }
  return i2 == "1" ? t5 : i2 == "0" ? "#0000" : t5.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i2})`);
}
function ct(t5, e3, r, n3, i2 = []) {
  return function l3(o4, { n: a4, p: s6, r: u3 = [], i: f4 }, c5) {
    let p6 = [], d5 = "", v5 = 0, g6 = 0;
    for (let h4 in o4 || {}) {
      var y5, A5;
      let b6 = o4[h4];
      if (h4[0] == "@") {
        if (!b6)
          continue;
        if (h4[1] == "a") {
          p6.push(...ht(a4, s6, N3("" + b6), c5, s6, u3, f4, !0));
          continue;
        }
        if (h4[1] == "l") {
          for (let m4 of x2(b6))
            p6.push(...l3(m4, { n: a4, p: (y5 = w3[h4[7]], s6 & ~w3.o | y5), r: u3, i: f4 }, c5));
          continue;
        }
        if (h4[1] == "i") {
          p6.push(...x2(b6).map((m4) => ({ p: -1, o: 0, r: [], d: h4 + " " + m4 })));
          continue;
        }
        if (h4[1] == "k") {
          p6.push({ p: w3.d, o: 0, r: [h4], d: l3(b6, { p: w3.d }, c5).map(tt).join("") });
          continue;
        }
        if (h4[1] == "f") {
          p6.push(...x2(b6).map((m4) => ({ p: w3.d, o: 0, r: [h4], d: l3(m4, { p: w3.d }, c5).map(tt).join("") })));
          continue;
        }
      }
      if (typeof b6 != "object" || Array.isArray(b6))
        h4 == "label" && b6 ? a4 = b6 + V3(JSON.stringify([s6, f4, o4])) : (b6 || b6 === 0) && (h4 = h4.replace(/[A-Z]/g, (m4) => "-" + m4.toLowerCase()), g6 += 1, v5 = Math.max(v5, (A5 = h4)[0] == "-" ? 0 : jt(A5) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A5) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d5 += (d5 ? ";" : "") + x2(b6).map((m4) => c5.s(h4, ft("" + m4, c5.theme) + (f4 ? " !important" : ""))).join(";"));
      else if (h4[0] == "@" || h4.includes("&")) {
        let m4 = s6;
        h4[0] == "@" && (h4 = h4.replace(/\bscreen\(([^)]+)\)/g, (C6, $6) => {
          let j6 = c5.theme("screens", $6);
          return j6 ? (m4 |= 67108864, kt(j6, "")) : C6;
        }), m4 |= X2(h4)), p6.push(...l3(b6, { n: a4, p: m4, r: [...u3, h4], i: f4 }, c5));
      } else
        p6.push(...l3(b6, { p: s6, r: [...u3, h4] }, c5));
    }
    return p6.unshift({ n: a4, p: s6, o: Math.max(0, 15 - g6) + 1.5 * Math.min(v5 || 15, 15), r: u3, d: d5 }), p6.sort(Mt);
  }(t5, at(e3, r, n3, i2), r);
}
function ft(t5, e3) {
  return t5.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, n3, i2, l3, o4) => {
    let a4 = e3(i2, o4);
    return typeof a4 == "function" && /color|fill|stroke/i.test(i2) ? T2(a4) : "" + a4;
  });
}
function pt(t5, e3) {
  let r, n3 = [];
  for (let i2 of t5)
    i2.d && i2.n ? r?.p == i2.p && "" + r.r == "" + i2.r ? (r.c = [r.c, i2.c].filter(Boolean).join(" "), r.d = r.d + ";" + i2.d) : n3.push(r = { ...i2, n: i2.n && e3 }) : n3.push({ ...i2, n: i2.n && e3 });
  return n3;
}
function B3(t5, e3, r = w3.u, n3, i2) {
  let l3 = [];
  for (let o4 of t5)
    for (let a4 of function(s6, u3, f4, c5, p6) {
      var d5;
      s6 = { ...s6, i: s6.i || p6 };
      let v5 = function(g6, y5) {
        let A5 = ut.get(g6.n);
        return A5 ? A5(g6, y5) : y5.r(g6.n, g6.v[0] == "dark");
      }(s6, u3);
      return v5 ? typeof v5 == "string" ? ({ r: c5, p: f4 } = at(s6, u3, f4, c5), pt(B3(N3(v5), u3, f4, c5, s6.i), s6.n)) : Array.isArray(v5) ? v5.map((g6) => {
        var y5, A5;
        return { o: 0, ...g6, r: [...x2(c5), ...x2(g6.r)], p: (y5 = f4, A5 = (d5 = g6.p) != null ? d5 : f4, y5 & ~w3.o | A5) };
      }) : ct(v5, s6, u3, f4, c5) : [{ c: lt(s6), p: 0, o: 0, r: [] }];
    }(o4, e3, r, n3, i2))
      l3.splice(St(l3, a4), 0, a4);
  return l3;
}
function ht(t5, e3, r, n3, i2, l3, o4, a4) {
  return pt((a4 ? r.flatMap((s6) => B3([s6], n3, i2, l3, o4)) : B3(r, n3, i2, l3, o4)).map((s6) => s6.p & w3.o && (s6.n || e3 == w3.b) ? { ...s6, p: s6.p & ~w3.o | e3, o: 0 } : s6), t5);
}
function Ot(t5, e3, r, n3) {
  var i2;
  return i2 = (l3, o4) => {
    let { n: a4, p: s6, r: u3, i: f4 } = at(l3, o4, e3);
    return r && ht(a4, e3, r, o4, s6, u3, f4, n3);
  }, ut.set(t5, i2), t5;
}
function K2(t5, e3) {
  if (t5[t5.length - 1] != "(") {
    let r = [], n3 = !1, i2 = !1, l3 = "";
    for (let o4 of t5)
      if (!(o4 == "(" || /[~@]$/.test(o4))) {
        if (o4[0] == "!" && (o4 = o4.slice(1), n3 = !n3), o4.endsWith(":")) {
          r[o4 == "dark:" ? "unshift" : "push"](o4.slice(0, -1));
          continue;
        }
        o4[0] == "-" && (o4 = o4.slice(1), i2 = !i2), o4.endsWith("-") && (o4 = o4.slice(0, -1)), o4 && o4 != "&" && (l3 += (l3 && "-") + o4);
      }
    l3 && (i2 && (l3 = "-" + l3), e3[0].push({ n: l3, v: r.filter(Jt), i: n3 }));
  }
}
function Jt(t5, e3, r) {
  return r.indexOf(t5) == e3;
}
var yt = /* @__PURE__ */ new Map();
function N3(t5) {
  let e3 = yt.get(t5);
  if (!e3) {
    let r = [], n3 = [[]], i2 = 0, l3 = 0, o4 = null, a4 = 0, s6 = (u3, f4 = 0) => {
      i2 != a4 && (r.push(t5.slice(i2, a4 + f4)), u3 && K2(r, n3)), i2 = a4 + 1;
    };
    for (; a4 < t5.length; a4++) {
      let u3 = t5[a4];
      if (l3)
        t5[a4 - 1] != "\\" && (l3 += +(u3 == "[") || -(u3 == "]"));
      else if (u3 == "[")
        l3 += 1;
      else if (o4)
        t5[a4 - 1] != "\\" && o4.test(t5.slice(a4)) && (o4 = null, i2 = a4 + RegExp.lastMatch.length);
      else if (u3 == "/" && t5[a4 - 1] != "\\" && (t5[a4 + 1] == "*" || t5[a4 + 1] == "/"))
        o4 = t5[a4 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (u3 == "(")
        s6(), r.push(u3);
      else if (u3 == ":")
        t5[a4 + 1] != ":" && s6(!1, 1);
      else if (/[\s,)]/.test(u3)) {
        s6(!0);
        let f4 = r.lastIndexOf("(");
        if (u3 == ")") {
          let c5 = r[f4 - 1];
          if (/[~@]$/.test(c5)) {
            let p6 = n3.shift();
            r.length = f4, K2([...r, "#"], n3);
            let { v: d5 } = n3[0].pop();
            for (let v5 of p6)
              v5.v.splice(+(v5.v[0] == "dark") - +(d5[0] == "dark"), d5.length);
            K2([...r, Ot(c5.length > 1 ? c5.slice(0, -1) + V3(JSON.stringify([c5, p6])) : c5 + "(" + st(p6) + ")", w3.a, p6, /@$/.test(c5))], n3);
          }
          f4 = r.lastIndexOf("(", f4 - 1);
        }
        r.length = f4 + 1;
      } else
        /[~@]/.test(u3) && t5[a4 + 1] == "(" && n3.unshift([]);
    }
    s6(!0), yt.set(t5, e3 = n3[0]);
  }
  return e3;
}
function Ct(t5, e3, r) {
  return e3.reduce((n3, i2, l3) => n3 + r(i2) + t5[l3 + 1], t5[0]);
}
function G2(t5, e3) {
  return Array.isArray(t5) && Array.isArray(t5.raw) ? Ct(t5, e3, (r) => Q2(r).trim()) : e3.filter(Boolean).reduce((r, n3) => r + Q2(n3), t5 ? Q2(t5) : "");
}
function Q2(t5) {
  let e3, r = "";
  if (t5 && typeof t5 == "object")
    if (Array.isArray(t5))
      (e3 = G2(t5[0], t5.slice(1))) && (r += " " + e3);
    else
      for (let n3 in t5)
        t5[n3] && (r += " " + n3);
  else
    t5 != null && typeof t5 != "boolean" && (r += " " + t5);
  return r;
}
var ae = Et("@"), ue = Et("~");
function Et(t5) {
  return new Proxy(function(r, ...n3) {
    return e3("", r, n3);
  }, { get: (r, n3) => n3 in r ? r[n3] : function(i2, ...l3) {
    return e3(n3, i2, l3);
  } });
  function e3(r, n3, i2) {
    return st(N3(r + t5 + "(" + G2(n3, i2) + ")"));
  }
}
function U2(t5, e3) {
  return Array.isArray(t5) ? mt(Ct(t5, e3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof t5 == "string" ? mt(t5) : [t5];
}
var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function mt(t5) {
  let e3;
  t5 = t5.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], n3 = [r[0]], i2 = [];
  for (; e3 = Bt.exec(t5); )
    e3[4] && (r.shift(), i2.shift()), e3[3] ? (i2.unshift(e3[3]), r.unshift({}), n3.push(i2.reduce((l3, o4) => ({ [o4]: l3 }), r[0]))) : e3[4] || (r[0][e3[1]] && (r.unshift({}), n3.push(i2.reduce((l3, o4) => ({ [o4]: l3 }), r[0]))), r[0][e3[1]] = e3[2]);
  return n3;
}
function dt(t5, ...e3) {
  var r, n3;
  let i2 = U2(t5, e3), l3 = (((r = i2.find((o4) => o4.label)) == null ? void 0 : r.label) || "css") + V3(JSON.stringify(i2));
  return n3 = (o4, a4) => pt(i2.flatMap((s6) => ct(s6, o4, a4, w3.o)), l3), ut.set(l3, n3), l3;
}
var ce2 = new Proxy(function(t5, e3) {
  return bt("animation", t5, e3);
}, { get: (t5, e3) => e3 in t5 ? t5[e3] : function(r, n3) {
  return bt(e3, r, n3);
} });
function bt(t5, e3, r) {
  return { toString: () => dt({ label: t5, "@layer components": { ...typeof e3 == "object" ? e3 : { animation: e3 }, animationName: "" + r } }) };
}
var Ut = Symbol();
function Rt({ presets: t5 = [], ...e3 }) {
  let r = { preflight: e3.preflight !== !1 && [], darkMode: void 0, darkColor: void 0, theme: {}, variants: x2(e3.variants), rules: x2(e3.rules), ignorelist: x2(e3.ignorelist), hash: e3.hash, stringify: e3.stringify || Wt };
  for (let n3 of x2([...t5, { darkMode: e3.darkMode, darkColor: e3.darkColor, preflight: e3.preflight !== !1 && x2(e3.preflight), theme: e3.theme, hash: e3.hash, stringify: e3.stringify }])) {
    let { preflight: i2, darkMode: l3 = r.darkMode, darkColor: o4 = r.darkColor, theme: a4, variants: s6, rules: u3, ignorelist: f4, hash: c5 = r.hash, stringify: p6 = r.stringify } = typeof n3 == "function" ? n3(r) : n3;
    r = { preflight: r.preflight !== !1 && i2 !== !1 && [...r.preflight, ...x2(i2)], darkMode: l3, darkColor: o4, theme: { ...r.theme, ...a4, extend: { ...r.theme.extend, ...a4?.extend } }, variants: [...r.variants, ...x2(s6)], rules: [...r.rules, ...x2(u3)], ignorelist: [...r.ignorelist, ...x2(f4)], hash: c5, stringify: p6 };
  }
  return r;
}
function Wt(t5, e3) {
  return t5 + ":" + e3;
}
function et(t5, e3) {
  return typeof t5 == "function" ? t5 : typeof t5 == "string" && /^[\w-]+$/.test(t5) ? (r, n3) => ({ [t5]: e3 ? e3(r, n3) : rt(r, 1) }) : (r) => t5 || { [r[1]]: rt(r, 2) };
}
function rt(t5, e3, r = t5.slice(e3).find(Boolean) || t5.$$ || t5.input) {
  return t5.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function vt(t5, e3, r, n3, i2, l3) {
  for (let o4 of e3) {
    let a4 = r.get(o4);
    a4 || r.set(o4, a4 = n3(o4));
    let s6 = a4(t5, i2, l3);
    if (s6)
      return s6;
  }
}
function Ht(t5) {
  var e3;
  return ot(t5[0], typeof (e3 = t5[1]) == "function" ? e3 : () => e3);
}
function Kt(t5) {
  var e3, r;
  return Array.isArray(t5) ? ot(t5[0], et(t5[1], t5[2])) : ot(t5, et(e3, r));
}
function ot(t5, e3) {
  return Nt(t5, (r, n3, i2, l3) => {
    let o4 = n3.exec(r);
    if (o4)
      return o4.$$ = r.slice(o4[0].length), o4.dark = l3, e3(o4, i2);
  });
}
function Nt(t5, e3) {
  let r = x2(t5).map(Qt);
  return (n3, i2, l3) => {
    for (let o4 of r) {
      let a4 = e3(n3, o4, i2, l3);
      if (a4)
        return a4;
    }
  };
}
function Qt(t5) {
  return typeof t5 == "string" ? RegExp("^" + t5 + (t5.includes("$") || t5.slice(-1) == "-" ? "" : "$")) : t5;
}
function $t(t5, e3) {
  return t5.replace(/--(tw(?:-[\w-]+)?)\b/g, (r, n3) => "--" + e3(n3).replace("#", ""));
}
function Xt(t5, e3) {
  let r = Rt(t5), n3 = function({ theme: s6, darkMode: u3, darkColor: f4, variants: c5, rules: p6, hash: d5, stringify: v5, ignorelist: g6 }) {
    let y5 = /* @__PURE__ */ new Map(), A5 = /* @__PURE__ */ new Map(), h4 = /* @__PURE__ */ new Map(), b6 = /* @__PURE__ */ new Map(), m4 = Nt(g6, ($6, j6) => j6.test($6));
    c5.push(["dark", Array.isArray(u3) || u3 == "class" ? `${x2(u3)[1] || ".dark"} &` : typeof u3 == "string" && u3 != "media" ? u3 : "@media (prefers-color-scheme:dark)"]);
    let C6 = typeof d5 == "function" ? ($6) => d5($6, V3) : d5 ? V3 : At;
    return { theme: function({ extend: $6 = {}, ...j6 }) {
      let E4 = {}, Ft = { get colors() {
        return I6("colors");
      }, theme: I6, negative: () => ({}), breakpoints(k5) {
        let M6 = {};
        for (let S9 in k5)
          typeof k5[S9] == "string" && (M6["screen-" + S9] = k5[S9]);
        return M6;
      } };
      return I6;
      function I6(k5, M6, S9, L7) {
        if (k5) {
          var q7;
          if ({ 1: k5, 2: L7 } = /^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(k5) || [, k5], /[.[]/.test(k5)) {
            let R5 = [];
            k5.replace(/\[([^\]]+)\]|([^.[]+)/g, (J5, It, Lt = It) => R5.push(Lt)), k5 = R5.shift(), S9 = M6, M6 = R5.join("-");
          }
          let O6 = E4[k5] || Object.assign(Object.assign(E4[k5] = {}, gt2(j6, k5)), gt2($6, k5));
          if (M6 == null)
            return O6;
          let P8 = (q7 = O6[M6 || "DEFAULT"]) != null ? q7 : S9;
          return L7 ? T2(P8, { opacityValue: ft(L7, I6) }) : P8;
        }
        let _4 = {};
        for (let O6 of [...Object.keys(j6), ...Object.keys($6)])
          _4[O6] = I6(O6);
        return _4;
      }
      function gt2(k5, M6) {
        let S9 = k5[M6];
        return typeof S9 == "function" && (S9 = S9(Ft)), S9 && /color|fill|stroke/i.test(M6) ? function L7(q7, _4 = []) {
          let O6 = {};
          for (let P8 in q7) {
            let R5 = q7[P8], J5 = [..._4, P8];
            O6[J5.join("-")] = R5, P8 == "DEFAULT" && (J5 = _4, O6[_4.join("-")] = R5), typeof R5 == "object" && Object.assign(O6, L7(R5, J5));
          }
          return O6;
        }(S9) : S9;
      }
    }(s6), e: W2, h: C6, s($6, j6) {
      return v5($t($6, C6), $t(j6, C6), this);
    }, d($6, j6, E4) {
      return f4?.($6, j6, this, E4);
    }, v($6) {
      return y5.has($6) || y5.set($6, vt($6, c5, A5, Ht, this) || "&:" + $6), y5.get($6);
    }, r($6, j6) {
      let E4 = JSON.stringify([$6, j6]);
      return h4.has(E4) || h4.set(E4, !m4($6, this) && vt($6, p6, b6, Kt, this, j6)), h4.get(E4);
    } };
  }(r), i2 = /* @__PURE__ */ new Map(), l3 = [], o4 = /* @__PURE__ */ new Set();
  function a4(s6) {
    let u3 = s6.n && n3.h(s6.n), f4 = tt(u3 ? { ...s6, n: u3 } : s6);
    if (f4 && !o4.has(f4)) {
      o4.add(f4);
      let c5 = St(l3, s6);
      e3.insert(f4, c5, s6), l3.splice(c5, 0, s6);
    }
    return u3;
  }
  return e3.resume((s6) => i2.set(s6, s6), (s6, u3) => {
    e3.insert(s6, l3.length, u3), l3.push(u3), o4.add(s6);
  }), Object.defineProperties(function(s6) {
    if (!i2.size)
      for (let f4 of x2(r.preflight))
        typeof f4 == "function" && (f4 = f4(n3)), f4 && (typeof f4 == "string" ? ht("", w3.b, N3(f4), n3, w3.b, [], !1, !0) : ct(f4, {}, n3, w3.b)).forEach(a4);
    s6 = "" + s6;
    let u3 = i2.get(s6);
    if (!u3) {
      let f4 = /* @__PURE__ */ new Set();
      for (let c5 of B3(N3(s6), n3))
        f4.add(c5.c).add(a4(c5));
      u3 = [...f4].filter(Boolean).join(" "), i2.set(s6, u3).set(u3, u3);
    }
    return u3;
  }, Object.getOwnPropertyDescriptors({ get target() {
    return e3.target;
  }, theme: n3.theme, config: r, snapshot() {
    let s6 = e3.snapshot(), u3 = new Set(o4), f4 = new Map(i2), c5 = [...l3];
    return () => {
      s6(), o4 = u3, i2 = f4, l3 = c5;
    };
  }, clear() {
    e3.clear(), o4 = /* @__PURE__ */ new Set(), i2 = /* @__PURE__ */ new Map(), l3 = [];
  }, destroy() {
    this.clear(), e3.destroy();
  } }));
}
function zt(t5, e3) {
  return t5 != e3 && "" + t5.split(" ").sort() != "" + e3.split(" ").sort();
}
function te(t5 = z2, e3 = document.documentElement) {
  if (!e3)
    return t5;
  let r = new MutationObserver(i2);
  r.observe(e3, { attributeFilter: ["class"], subtree: !0, childList: !0 }), l3(e3), i2([{ target: e3, type: "" }]);
  let { destroy: n3 } = t5;
  return t5.destroy = () => {
    r.disconnect(), n3.call(t5);
  }, t5;
  function i2(o4) {
    for (let { type: a4, target: s6 } of o4)
      if (a4[0] == "a")
        l3(s6);
      else
        for (let u3 of s6.querySelectorAll("[class]"))
          l3(u3);
    r.takeRecords();
  }
  function l3(o4) {
    let a4, s6 = o4.getAttribute("class");
    s6 && zt(s6, a4 = t5(s6)) && o4.setAttribute("class", a4);
  }
}
function _t(t5) {
  let e3 = document.querySelector(t5 || "style[data-twind]");
  return e3 && e3.tagName == "STYLE" || ((e3 = document.createElement("style")).dataset.twind = "", document.head.prepend(e3)), e3;
}
function ee2(t5) {
  let e3 = t5?.cssRules ? t5 : (t5 && typeof t5 != "string" ? t5 : _t(t5)).sheet;
  return { target: e3, snapshot() {
    let r = Array.from(e3.cssRules, (n3) => n3.cssText);
    return () => {
      this.clear(), r.forEach(this.insert);
    };
  }, clear() {
    for (let r = e3.cssRules.length; r--; )
      e3.deleteRule(r);
  }, destroy() {
    var r;
    (r = e3.ownerNode) == null || r.remove();
  }, insert(r, n3) {
    try {
      e3.insertRule(r, n3);
    } catch {
      e3.insertRule(":root{}", n3), /:-[mwo]/.test(r);
    }
  }, resume: D3 };
}
function re2(t5) {
  let e3 = t5 && typeof t5 != "string" ? t5 : _t(t5);
  return { target: e3, snapshot() {
    let r = Array.from(e3.childNodes, (n3) => n3.textContent);
    return () => {
      this.clear(), r.forEach(this.insert);
    };
  }, clear() {
    e3.textContent = "";
  }, destroy() {
    e3.remove();
  }, insert(r, n3) {
    e3.insertBefore(document.createTextNode(r), e3.childNodes[n3] || null);
  }, resume: D3 };
}
function Pt(t5, e3) {
  let r = t5 ? re2() : ee2();
  return e3 || (r.resume = ne2), r;
}
function Tt(t5) {
  return (t5.ownerNode || t5).textContent || (t5.cssRules ? Array.from(t5.cssRules, (e3) => e3.cssText) : x2(t5)).join("");
}
function ne2(t5, e3) {
  let r = Tt(this.target), n3 = /\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;
  if (n3.test(r)) {
    var i2;
    let l3;
    for (let o4 of (n3.lastIndex = 0, this.clear(), document.querySelectorAll("[class]")))
      t5(o4.getAttribute("class"));
    for (; i2 = n3.exec(r), l3 && e3(r.slice(l3.index + l3[0].length, i2?.index), { p: parseInt(l3[1], 36), o: parseInt(l3[2], 36) / 2, n: l3[3] }), l3 = i2; )
      ;
  }
}
var z2 = new Proxy(D3, { apply: (t5, e3, r) => F3(r[0]), get(t5, e3) {
  let r = F3[e3];
  return typeof r == "function" ? function() {
    return r.apply(F3, arguments);
  } : r;
} });
function ie(t5 = {}, e3 = Pt, r) {
  return F3?.destroy(), F3 = te(Xt(t5, typeof e3 == "function" ? e3() : e3), r);
}
function $e(t5, e3 = !0) {
  var r;
  let n3 = Rt(t5);
  return ie({ ...n3, hash: (r = n3.hash) != null ? r : e3 }, () => Pt(!e3));
}
var xe = function t(e3) {
  return new Proxy(function(r, ...n3) {
    return xt(e3, "", r, n3);
  }, { get: (r, n3) => n3 === "bind" ? t : n3 in r ? r[n3] : function(i2, ...l3) {
    return xt(e3, n3, i2, l3);
  } });
}();
function xt(t5, e3, r, n3) {
  return { toString() {
    let i2 = U2(r, n3), l3 = W2(e3 + V3(JSON.stringify([e3, i2])));
    return (typeof t5 == "function" ? t5 : z2)(dt({ [`@keyframes ${l3}`]: U2(r, n3) })), l3;
  } };
}

// https://esm.sh/v113/style-vendorizer@2.2.3/deno/style-vendorizer.mjs
var t2 = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function e(r) {
  return t2.get(r);
}
function s(r) {
  var i2 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(r);
  return i2 ? i2[1] ? 1 : i2[2] ? 2 : i2[3] ? 3 : 5 : 0;
}
function o(r, i2) {
  var a4 = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(r);
  return a4 ? a4[1] ? /^sti/i.test(i2) ? 1 : 0 : a4[2] ? /^pat/i.test(i2) ? 1 : 0 : a4[3] ? /^image-/i.test(i2) ? 1 : 0 : a4[4] ? i2[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(i2) ? 4 : 0 : 0;
}

// https://esm.sh/v113/@twind/preset-autoprefix@1.0.1/deno/preset-autoprefix.mjs
var c = [["-webkit-", 1], ["-moz-", 2], ["-ms-", 4]];
function y() {
  return ({ stringify: t5 }) => ({ stringify(r, s6, e3) {
    let a4 = "", f4 = e(r);
    f4 && (a4 += t5(f4, s6, e3) + ";");
    let u3 = s(r), i2 = o(r, s6);
    for (let o4 of c)
      u3 & o4[1] && (a4 += t5(o4[0] + r, s6, e3) + ";"), i2 & o4[1] && (a4 += t5(r, o4[0] + s6, e3) + ";");
    return a4 + t5(r, s6, e3);
  } });
}

// https://esm.sh/v113/@twind/core@1.1.3/deno/core.mjs
var B4;
function ae2(e3) {
  return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
}
function ue2(e3, t5 = ",") {
  return e3.map(ae2).join(t5);
}
var Y3 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function T3(e3) {
  for (var t5 = 9, r = e3.length; r--; )
    t5 = Math.imul(t5 ^ e3.charCodeAt(r), 1597334677);
  return "#" + ((t5 ^ t5 >>> 9) >>> 0).toString(36);
}
function Ce(e3, t5 = "@media ") {
  return t5 + b2(e3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((i2) => `(${i2}-width:${r[i2]})`).join(" and "))).join(",");
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
function re3(e3) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
}
var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function ce3({ n: e3, i: t5, v: r = [] }, i2, n3, l3) {
  e3 && (e3 = ae2({ n: e3, i: t5, v: r })), l3 = [...b2(l3)];
  for (let s6 of r) {
    let f4 = i2.theme("screens", s6);
    for (let a4 of b2(f4 && Ce(f4) || i2.v(s6))) {
      var o4;
      l3.push(a4), n3 |= f4 ? 67108864 | re3(a4) : s6 == "dark" ? 1073741824 : a4[0] == "@" ? re3(a4) : (o4 = a4, 1 << ~(/:([a-z-]+)/.test(o4) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: e3, p: n3, r: l3, i: t5 };
}
var pe = /* @__PURE__ */ new Map();
function ne3(e3) {
  if (e3.d) {
    let t5 = [], r = H3(e3.r.reduce((i2, n3) => n3[0] == "@" ? (t5.push(n3), i2) : n3 ? H3(i2, (l3) => H3(n3, (o4) => {
      let s6 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o4);
      if (s6) {
        let f4 = l3.indexOf(s6[1]);
        return ~f4 ? l3.slice(0, f4) + s6[0] + l3.slice(f4 + s6[1].length) : Q3(l3, o4);
      }
      return Q3(o4, l3);
    })) : i2, "&"), (i2) => Q3(i2, e3.n ? "." + Y3(e3.n) : ""));
    return r && t5.push(r.replace(/:merge\((.+?)\)/g, "$1")), t5.reduceRight((i2, n3) => n3 + "{" + i2 + "}", e3.d);
  }
}
function H3(e3, t5) {
  return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, i2, n3) => t5(i2) + n3);
}
function Q3(e3, t5) {
  return e3.replace(/&/g, t5);
}
var $e2 = new Intl.Collator("en", { numeric: !0 });
function Me(e3, t5) {
  for (var r = 0, i2 = e3.length; r < i2; ) {
    let n3 = i2 + r >> 1;
    0 >= Ne(e3[n3], t5) ? r = n3 + 1 : i2 = n3;
  }
  return i2;
}
function Ne(e3, t5) {
  let r = e3.p & S3.o;
  return r == (t5.p & S3.o) && (r == S3.b || r == S3.o) ? 0 : e3.p - t5.p || e3.o - t5.o || $e2.compare(we(e3.n), we(t5.n)) || $e2.compare(Ae(e3.n), Ae(t5.n));
}
function we(e3) {
  return (e3 || "").split(/:/).pop().split("/").pop() || "\0";
}
function Ae(e3) {
  return (e3 || "").replace(/\W/g, (t5) => String.fromCharCode(127 + t5.charCodeAt(0))) + "\0";
}
function X3(e3, t5) {
  return Math.round(parseInt(e3, 16) * t5);
}
function P3(e3, t5 = {}) {
  if (typeof e3 == "function")
    return e3(t5);
  let { opacityValue: r = "1", opacityVariable: i2 } = t5, n3 = i2 ? `var(${i2})` : r;
  if (e3.includes("<alpha-value>"))
    return e3.replace("<alpha-value>", n3);
  if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
    let l3 = (e3.length - 1) / 3, o4 = [17, 1, 0.062272][l3 - 1];
    return `rgba(${[X3(e3.substr(1, l3), o4), X3(e3.substr(1 + l3, l3), o4), X3(e3.substr(1 + 2 * l3, l3), o4), n3]})`;
  }
  return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
}
function de(e3, t5, r, i2, n3 = []) {
  return function l3(o4, { n: s6, p: f4, r: a4 = [], i: c5 }, u3) {
    let p6 = [], g6 = "", y5 = 0, $6 = 0;
    for (let h4 in o4 || {}) {
      var A5, R5;
      let d5 = o4[h4];
      if (h4[0] == "@") {
        if (!d5)
          continue;
        if (h4[1] == "a") {
          p6.push(...ge(s6, f4, I2("" + d5), u3, f4, a4, c5, !0));
          continue;
        }
        if (h4[1] == "l") {
          for (let w6 of b2(d5))
            p6.push(...l3(w6, { n: s6, p: (A5 = S3[h4[7]], f4 & ~S3.o | A5), r: h4[7] == "d" ? [] : a4, i: c5 }, u3));
          continue;
        }
        if (h4[1] == "i") {
          p6.push(...b2(d5).map((w6) => ({ p: -1, o: 0, r: [], d: h4 + " " + w6 })));
          continue;
        }
        if (h4[1] == "k") {
          p6.push({ p: S3.d, o: 0, r: [h4], d: l3(d5, { p: S3.d }, u3).map(ne3).join("") });
          continue;
        }
        if (h4[1] == "f") {
          p6.push(...b2(d5).map((w6) => ({ p: S3.d, o: 0, r: [h4], d: l3(w6, { p: S3.d }, u3).map(ne3).join("") })));
          continue;
        }
      }
      if (typeof d5 != "object" || Array.isArray(d5))
        h4 == "label" && d5 ? s6 = d5 + T3(JSON.stringify([f4, c5, o4])) : (d5 || d5 === 0) && (h4 = h4.replace(/[A-Z]/g, (w6) => "-" + w6.toLowerCase()), $6 += 1, y5 = Math.max(y5, (R5 = h4)[0] == "-" ? 0 : Ee(R5) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R5) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g6 += (g6 ? ";" : "") + b2(d5).map((w6) => u3.s(h4, he("" + w6, u3.theme) + (c5 ? " !important" : ""))).join(";"));
      else if (h4[0] == "@" || h4.includes("&")) {
        let w6 = f4;
        h4[0] == "@" && (h4 = h4.replace(/\bscreen\(([^)]+)\)/g, (x6, M6) => {
          let N8 = u3.theme("screens", M6);
          return N8 ? (w6 |= 67108864, Ce(N8, "")) : x6;
        }), w6 |= re3(h4)), p6.push(...l3(d5, { n: s6, p: w6, r: [...a4, h4], i: c5 }, u3));
      } else
        p6.push(...l3(d5, { p: f4, r: [...a4, h4] }, u3));
    }
    return p6.unshift({ n: s6, p: f4, o: Math.max(0, 15 - $6) + 1.5 * Math.min(y5 || 15, 15), r: a4, d: g6 }), p6.sort(Ne);
  }(e3, ce3(t5, r, i2, n3), r);
}
function he(e3, t5) {
  return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, i2, n3, l3, o4 = "") => {
    let s6 = t5(n3, o4);
    return typeof s6 == "function" && /color|fill|stroke/i.test(n3) ? P3(s6) : "" + b2(s6).filter((f4) => Object(f4) !== f4);
  });
}
function ye(e3, t5) {
  let r, i2 = [];
  for (let n3 of e3)
    n3.d && n3.n ? r?.p == n3.p && "" + r.r == "" + n3.r ? (r.c = [r.c, n3.c].filter(Boolean).join(" "), r.d = r.d + ";" + n3.d) : i2.push(r = { ...n3, n: n3.n && t5 }) : i2.push({ ...n3, n: n3.n && t5 });
  return i2;
}
function W3(e3, t5, r = S3.u, i2, n3) {
  let l3 = [];
  for (let o4 of e3)
    for (let s6 of function(f4, a4, c5, u3, p6) {
      f4 = { ...f4, i: f4.i || p6 };
      let g6 = function(y5, $6) {
        let A5 = pe.get(y5.n);
        return A5 ? A5(y5, $6) : $6.r(y5.n, y5.v[0] == "dark");
      }(f4, a4);
      return g6 ? typeof g6 == "string" ? ({ r: u3, p: c5 } = ce3(f4, a4, c5, u3), ye(W3(I2(g6), a4, c5, u3, f4.i), f4.n)) : Array.isArray(g6) ? g6.map((y5) => {
        var $6, A5;
        return { o: 0, ...y5, r: [...b2(u3), ...b2(y5.r)], p: ($6 = c5, A5 = y5.p ?? c5, $6 & ~S3.o | A5) };
      }) : de(g6, f4, a4, c5, u3) : [{ c: ae2(f4), p: 0, o: 0, r: [] }];
    }(o4, t5, r, i2, n3))
      l3.splice(Me(l3, s6), 0, s6);
  return l3;
}
function ge(e3, t5, r, i2, n3, l3, o4, s6) {
  return ye((s6 ? r.flatMap((f4) => W3([f4], i2, n3, l3, o4)) : W3(r, i2, n3, l3, o4)).map((f4) => f4.p & S3.o && (f4.n || t5 == S3.b) ? { ...f4, p: f4.p & ~S3.o | t5, o: 0 } : f4), e3);
}
function _e2(e3, t5, r, i2) {
  var n3;
  return n3 = (l3, o4) => {
    let { n: s6, p: f4, r: a4, i: c5 } = ce3(l3, o4, t5);
    return r && ge(s6, t5, r, o4, f4, a4, c5, i2);
  }, pe.set(e3, n3), e3;
}
function K3(e3, t5, r) {
  if (e3[e3.length - 1] != "(") {
    let i2 = [], n3 = !1, l3 = !1, o4 = "";
    for (let s6 of e3)
      if (!(s6 == "(" || /[~@]$/.test(s6))) {
        if (s6[0] == "!" && (s6 = s6.slice(1), n3 = !n3), s6.endsWith(":")) {
          i2[s6 == "dark:" ? "unshift" : "push"](s6.slice(0, -1));
          continue;
        }
        s6[0] == "-" && (s6 = s6.slice(1), l3 = !l3), s6.endsWith("-") && (s6 = s6.slice(0, -1)), s6 && s6 != "&" && (o4 += (o4 && "-") + s6);
      }
    o4 && (l3 && (o4 = "-" + o4), t5[0].push({ n: o4, v: i2.filter(Be), i: n3 }));
  }
}
function Be(e3, t5, r) {
  return r.indexOf(e3) == t5;
}
var Se = /* @__PURE__ */ new Map();
function I2(e3) {
  let t5 = Se.get(e3);
  if (!t5) {
    let r = [], i2 = [[]], n3 = 0, l3 = 0, o4 = null, s6 = 0, f4 = (a4, c5 = 0) => {
      n3 != s6 && (r.push(e3.slice(n3, s6 + c5)), a4 && K3(r, i2)), n3 = s6 + 1;
    };
    for (; s6 < e3.length; s6++) {
      let a4 = e3[s6];
      if (l3)
        e3[s6 - 1] != "\\" && (l3 += +(a4 == "[") || -(a4 == "]"));
      else if (a4 == "[")
        l3 += 1;
      else if (o4)
        e3[s6 - 1] != "\\" && o4.test(e3.slice(s6)) && (o4 = null, n3 = s6 + RegExp.lastMatch.length);
      else if (a4 == "/" && e3[s6 - 1] != "\\" && (e3[s6 + 1] == "*" || e3[s6 + 1] == "/"))
        o4 = e3[s6 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (a4 == "(")
        f4(), r.push(a4);
      else if (a4 == ":")
        e3[s6 + 1] != ":" && f4(!1, 1);
      else if (/[\s,)]/.test(a4)) {
        f4(!0);
        let c5 = r.lastIndexOf("(");
        if (a4 == ")") {
          let u3 = r[c5 - 1];
          if (/[~@]$/.test(u3)) {
            let p6 = i2.shift();
            r.length = c5, K3([...r, "#"], i2);
            let { v: g6 } = i2[0].pop();
            for (let y5 of p6)
              y5.v.splice(+(y5.v[0] == "dark") - +(g6[0] == "dark"), g6.length);
            K3([...r, _e2(u3.length > 1 ? u3.slice(0, -1) + T3(JSON.stringify([u3, p6])) : u3 + "(" + ue2(p6) + ")", S3.a, p6, /@$/.test(u3))], i2);
          }
          c5 = r.lastIndexOf("(", c5 - 1);
        }
        r.length = c5 + 1;
      } else
        /[~@]/.test(a4) && e3[s6 + 1] == "(" && i2.unshift([]);
    }
    f4(!0), Se.set(e3, t5 = i2[0]);
  }
  return t5;
}
function Ve(e3, t5, r) {
  return t5.reduce((i2, n3, l3) => i2 + r(n3) + e3[l3 + 1], e3[0]);
}
function Z3(e3, t5) {
  return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve(e3, t5, (r) => ee3(r).trim()) : t5.filter(Boolean).reduce((r, i2) => r + ee3(i2), e3 ? ee3(e3) : "");
}
function ee3(e3) {
  let t5, r = "";
  if (e3 && typeof e3 == "object")
    if (Array.isArray(e3))
      (t5 = Z3(e3[0], e3.slice(1))) && (r += " " + t5);
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
    return t5("", i2, n3);
  }, { get(r, i2) {
    return i2 in r ? r[i2] : function(l3, ...o4) {
      return t5(i2, l3, o4);
    };
  } });
  function t5(r, i2, n3) {
    return ue2(I2(r + e3 + "(" + Z3(i2, n3) + ")"));
  }
}
function G3(e3, t5) {
  return Array.isArray(e3) ? ve(Ve(e3, t5, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof e3 == "string" ? ve(e3) : [e3];
}
var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function ve(e3) {
  let t5;
  e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], i2 = [r[0]], n3 = [];
  for (; t5 = We.exec(e3); )
    t5[4] && (r.shift(), n3.shift()), t5[3] ? (n3.unshift(t5[3]), r.unshift({}), i2.push(n3.reduce((l3, o4) => ({ [o4]: l3 }), r[0]))) : t5[4] || (r[0][t5[1]] && (r.unshift({}), i2.push(n3.reduce((l3, o4) => ({ [o4]: l3 }), r[0]))), r[0][t5[1]] = t5[2]);
  return i2;
}
function me(e3, ...t5) {
  var r;
  let i2 = G3(e3, t5), n3 = (i2.find((l3) => l3.label)?.label || "css") + T3(JSON.stringify(i2));
  return r = (l3, o4) => ye(i2.flatMap((s6) => de(s6, l3, o4, S3.o)), n3), pe.set(n3, r), n3;
}
var ht2 = new Proxy(function(e3, t5) {
  return Re("animation", e3, t5);
}, { get(e3, t5) {
  return t5 in e3 ? e3[t5] : function(i2, n3) {
    return Re(t5, i2, n3);
  };
} });
function Re(e3, t5, r) {
  return { toString() {
    return me({ label: e3, "@layer components": { ...typeof t5 == "object" ? t5 : { animation: t5 }, animationName: "" + r } });
  } };
}
function yt2(e3, t5, r) {
  return [e3, ie2(t5, r)];
}
function ie2(e3, t5) {
  return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r, i2) => ({ [e3]: t5 ? t5(r, i2) : le(r, 1) }) : (r) => e3 || { [r[1]]: le(r, 2) };
}
function le(e3, t5, r = e3.slice(t5).find(Boolean) || e3.$$ || e3.input) {
  return e3.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function gt(e3, t5, r, i2) {
  return [e3, Ge(t5, r, i2)];
}
function Ge(e3, t5, r) {
  let i2 = typeof t5 == "string" ? (n3, l3) => ({ [t5]: r ? r(n3, l3) : n3._ }) : t5 || (({ 1: n3, _: l3 }, o4, s6) => ({ [n3 || s6]: l3 }));
  return (n3, l3) => {
    let o4 = ke(e3 || n3[1]), s6 = l3.theme(o4, n3.$$) ?? oe2(n3.$$, o4, l3);
    if (s6 != null)
      return n3._ = le(n3, 0, s6), i2(n3, l3, o4);
  };
}
function mt2(e3, t5 = {}, r) {
  return [e3, Ye(t5, r)];
}
function Ye(e3 = {}, t5) {
  return (r, i2) => {
    let { section: n3 = ke(r[0]).replace("-", "") + "Color" } = e3, [l3, o4] = Ze(r.$$);
    if (!l3)
      return;
    let s6 = i2.theme(n3, l3) || oe2(l3, n3, i2);
    if (!s6 || typeof s6 == "object")
      return;
    let { opacityVariable: f4 = `--tw-${r[0].replace(/-$/, "")}-opacity`, opacitySection: a4 = n3.replace("Color", "Opacity"), property: c5 = n3, selector: u3 } = e3, p6 = i2.theme(a4, o4 || "DEFAULT") || o4 && oe2(o4, a4, i2), g6 = t5 || (({ _: $6 }) => {
      let A5 = He(c5, $6);
      return u3 ? { [u3]: A5 } : A5;
    });
    r._ = { value: P3(s6, { opacityVariable: f4 || void 0, opacityValue: p6 || void 0 }), color: ($6) => P3(s6, $6), opacityVariable: f4 || void 0, opacityValue: p6 || void 0 };
    let y5 = g6(r, i2);
    if (!r.dark) {
      let $6 = i2.d(n3, l3, s6);
      $6 && $6 !== s6 && (r._ = { value: P3($6, { opacityVariable: f4 || void 0, opacityValue: p6 || "1" }), color: (A5) => P3($6, A5), opacityVariable: f4 || void 0, opacityValue: p6 || void 0 }, y5 = { "&": y5, [i2.v("dark")]: g6(r, i2) });
    }
    return y5;
  };
}
function Ze(e3) {
  return (e3.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function He(e3, t5) {
  let r = {};
  return typeof t5 == "string" ? r[e3] = t5 : (t5.opacityVariable && t5.value.includes(t5.opacityVariable) && (r[t5.opacityVariable] = t5.opacityValue || "1"), r[e3] = t5.value), r;
}
function oe2(e3, t5, r) {
  if (e3[0] == "[" && e3.slice(-1) == "]") {
    if (e3 = se(he(e3.slice(1, -1), r.theme)), !t5)
      return e3;
    if (!(/color|fill|stroke/i.test(t5) && !(/^color:/.test(e3) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e3)) || /image/i.test(t5) && !(/^image:/.test(e3) || /^[a-z-]+\(/.test(e3)) || /weight/i.test(t5) && !(/^(number|any):/.test(e3) || /^\d+$/.test(e3)) || /position/i.test(t5) && /^(length|size):/.test(e3)))
      return e3.replace(/^[a-z-]+:/, "");
  }
}
function ke(e3) {
  return e3.replace(/-./g, (t5) => t5[1].toUpperCase());
}
function se(e3) {
  return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t5, r = "", i2, n3 = "") => se(r) + i2 + se(n3)) : e3.replace(/(^|[^\\])_+/g, (t5, r) => r + " ".repeat(t5.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t5) => t5.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
}
var Qe = Symbol();
var D4 = new Proxy(F4, { apply(e3, t5, r) {
  return B4(r[0]);
}, get(e3, t5) {
  let r = B4[t5];
  return typeof r == "function" ? function() {
    return r.apply(B4, arguments);
  } : r;
} });
var Rt2 = function e2(t5) {
  return new Proxy(function(i2, ...n3) {
    return je(t5, "", i2, n3);
  }, { get(r, i2) {
    return i2 === "bind" ? e2 : i2 in r ? r[i2] : function(l3, ...o4) {
      return je(t5, i2, l3, o4);
    };
  } });
}();
function je(e3, t5, r, i2) {
  return { toString() {
    let n3 = G3(r, i2), l3 = Y3(t5 + T3(JSON.stringify([t5, n3])));
    return (typeof e3 == "function" ? e3 : D4)(me({ [`@keyframes ${l3}`]: G3(r, i2) })), l3;
  } };
}

// https://esm.sh/v113/@twind/preset-tailwind@1.0.1/deno/preset-tailwind.mjs
var L3 = "inherit", U3 = "currentColor", j3 = "transparent", V4 = "#000", B5 = "#fff", H4 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, I3 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, M3 = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, P4 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, N4 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, G4 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, q3 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, Y4 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, X4 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, J2 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, K4 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, Q4 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, Z4 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, ee4 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, te2 = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, oe3 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, re4 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, ae3 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, ie3 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, ne4 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, le2 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, se2 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, S4 = { __proto__: null, inherit: L3, current: U3, transparent: j3, black: V4, white: B5, slate: H4, gray: I3, zinc: M3, neutral: P4, stone: N4, red: G4, orange: q3, amber: Y4, yellow: X4, lime: J2, green: K4, emerald: Q4, teal: Z4, cyan: ee4, sky: te2, blue: oe3, indigo: re4, violet: ae3, purple: ie3, fuchsia: ne4, pink: le2, rose: se2 }, h = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: S4, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...c2(4, "rem", 4, 0.5, 0.5), ...c2(12, "rem", 4, 5), 14: "3.5rem", ...c2(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: n2("blur"), backdropBrightness: n2("brightness"), backdropContrast: n2("contrast"), backdropGrayscale: n2("grayscale"), backdropHueRotate: n2("hueRotate"), backdropInvert: n2("invert"), backdropOpacity: n2("opacity"), backdropSaturate: n2("saturate"), backdropSepia: n2("sepia"), backgroundColor: n2("colors"), backgroundImage: { none: "none" }, backgroundOpacity: n2("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...c2(200, "", 100, 0, 50), ...c2(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: n2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: n2("spacing"), borderWidth: { DEFAULT: "1px", ...f2(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: n2("colors"), caretColor: n2("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...c2(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: n2("borderColor"), divideOpacity: n2("borderOpacity"), divideWidth: n2("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: n2("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 6), ...x3(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: n2("spacing"), gradientColorStops: n2("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...c2(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: r }) => ({ ...r(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...c2(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: n2("spacing"), placeholderColor: n2("colors"), placeholderOpacity: n2("opacity"), outlineColor: n2("colors"), outlineOffset: f2(8, "px"), outlineWidth: f2(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: n2("colors"), ringOffsetWidth: f2(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...f2(8, "px") }, rotate: { ...f2(2, "deg"), ...f2(12, "deg", 3), ...f2(180, "deg", 45) }, saturate: c2(200, "", 100, 0, 50), scale: { ...c2(150, "", 100, 0, 50), ...c2(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: n2("spacing"), scrollPadding: n2("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...f2(2, "deg"), ...f2(12, "deg", 3) }, space: n2("spacing"), stroke: n2("colors"), strokeWidth: c2(2), textColor: n2("colors"), textDecorationColor: n2("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...f2(8, "px") }, textUnderlineOffset: { auto: "auto", ...f2(8, "px") }, textIndent: n2("spacing"), textOpacity: n2("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: n2("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...x3(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...c2(50, "", 1, 0, 10), auto: "auto" } };
function x3(e3, r) {
  let a4 = {};
  do
    for (var i2 = 1; i2 < e3; i2++)
      a4[`${i2}/${e3}`] = Number((i2 / e3 * 100).toFixed(6)) + "%";
  while (++e3 <= r);
  return a4;
}
function f2(e3, r, a4 = 0) {
  let i2 = {};
  for (; a4 <= e3; a4 = 2 * a4 || 1)
    i2[a4] = a4 + r;
  return i2;
}
function c2(e3, r = "", a4 = 1, i2 = 0, l3 = 1, d5 = {}) {
  for (; i2 <= e3; i2 += l3)
    d5[i2] = i2 / a4 + r;
  return d5;
}
function n2(e3) {
  return ({ theme: r }) => r(e3);
}
var C3 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${h.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${h.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } }, O2 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: e3, 2: r }, a4) => ({ "@layer overrides": { "&": { [e3]: oe2(`[${r}]`, e3, a4) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: e3 }, { h: r }) => [{ c: r(e3) }]), gt("aspect-", "aspectRatio"), yt2("container", (e3, { theme: r }) => {
  let { screens: a4 = r("screens"), center: i2, padding: l3 } = r("container"), d5 = { width: "100%", marginRight: i2 && "auto", marginLeft: i2 && "auto", ...m4("xs") };
  for (let w6 in a4) {
    let b6 = a4[w6];
    typeof b6 == "string" && (d5[Ce(b6)] = { "&": { maxWidth: b6, ...m4(w6) } });
  }
  return d5;
  function m4(w6) {
    let b6 = l3 && (typeof l3 == "string" ? l3 : l3[w6] || l3.DEFAULT);
    if (b6)
      return { paddingRight: b6, paddingLeft: b6 };
  }
}), gt("content-", "content", ({ _: e3 }) => ({ "--tw-content": e3, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: e3 }) => e3 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", y2), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: e3 = "", 2: r }) => ({ ["overscroll-behavior" + e3]: r })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: e3, _: r }) => ({ top: e3 != "-x" && r, right: e3 != "-y" && r, bottom: e3 != "-x" && r, left: e3 != "-y" && r })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", F5), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", D5), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", W4), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", D5), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", W4), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (e3) => y2(F5(e3))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", T4), yt2("(content|items|self)-", (e3) => ({ ["align-" + e3[1]]: T4(e3) })), yt2("(place-(content|items|self))-", ({ 1: e3, $$: r }) => ({ [e3]: ("wun".includes(r[3]) ? "space-" : "") + r })), gt("p([xytrbl])?(?:$|-)", "padding", u("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", u("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: e3, _: r }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[e3]]: `calc(${r} * calc(1 - var(--tw-space-${e3}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[e3]]: `calc(${r} * var(--tw-space-${e3}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", p2), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: e3, 2: r = "", 3: a4 }) => r == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a4 ? "numeric-fraction" : "pt".includes(r[0]) ? "numeric-spacing" : r ? "numeric-figure" : e3)]: e3, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: e3 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": e3 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: e3 }) => typeof e3 == "string" ? { fontSize: e3 } : { fontSize: e3[0], ...typeof e3[1] == "string" ? { lineHeight: e3[1] } : e3[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: !1, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: !1, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: e3 }) => `linear-gradient(to ${g2(e3, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-from": e3.value, "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${e3.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: !1, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: e3 }) => e3 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: e3 }) => e3 + (e3 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", y2), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: e3, _: r }) => {
  let a4 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[e3] || [e3, e3];
  return { [`border-${g2(a4[0])}-radius`]: r, [`border-${g2(a4[1])}-radius`]: r };
}), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: e3, _: r }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (e3 || "-x")]: r, ["--tw-border-spacing" + (e3 || "-y")]: r, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, u("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", u("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": e3 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: e3 } })), yt2("divide-([xy]-reverse)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + e3]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: e3, _: r }) => {
  let a4 = { x: "lr", y: "tb" }[e3];
  return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${e3}-reverse`]: "0", [`border-${g2(a4[0])}Width`]: `calc(${r} * calc(1 - var(--tw-divide-${e3}-reverse)))`, [`border-${g2(a4[1])}Width`]: `calc(${r} * var(--tw-divide-${e3}-reverse))` } };
}), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: !1 }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: e3 }, { theme: r }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P3(r("ringOffsetColor", "", "#fff")), "--tw-ring-color": P3(r("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-shadow-color": e3.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: e3 }) => ({ "--tw-shadow": p2(e3), "--tw-shadow-colored": p2(e3).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...A2(), ...A2("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (e3, { theme: r }) => ({ transitionProperty: p2(e3), transitionTimingFunction: e3._ == "none" ? void 0 : p2(r("transitionTimingFunction", "")), transitionDuration: e3._ == "none" ? void 0 : p2(r("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", p2), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", p2), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", p2), gt("animate(?:$|-)", "animation", (e3, { theme: r, h: a4 }) => {
  let i2 = p2(e3), l3 = i2.split(" "), d5 = r("keyframes", l3[0]);
  return d5 ? { ["@keyframes " + (l3[0] = a4(l3[0]))]: d5, animation: l3.join(" ") } : { animation: i2 };
}), "(transform)-(none)", yt2("transform", $2), yt2("transform-(cpu|gpu)", ({ 1: e3 }) => ({ "--tw-transform": E(e3 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: e3, _: r }) => ({ ["--tw-scale" + (e3 || "-x")]: r, ["--tw-scale" + (e3 || "-y")]: r, ...$2() })), gt("-?(rotate)-", "rotate", k2), gt("-?(translate-[xy])-", "translate", k2), gt("-?(skew-[xy])-", "skew", k2), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", y2), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: e3 }) => ({ "scroll-snap-type": e3 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", u("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", u("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: e3, 2: r, 3: a4 }) => ({ [`--tw-${r ? "pan-x" : a4 ? "pan-y" : e3}`]: e3, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: !1, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: e3 }) => ({ x: "horizontal", y: "vertical" })[e3] || e3 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: !1, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: !1, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
function y2(e3) {
  return (typeof e3 == "string" ? e3 : e3[1]).replace(/-/g, " ").trim();
}
function F5(e3) {
  return (typeof e3 == "string" ? e3 : e3[1]).replace("col", "column");
}
function g2(e3, r = "-") {
  let a4 = [];
  for (let i2 of e3)
    a4.push({ t: "top", r: "right", b: "bottom", l: "left" }[i2]);
  return a4.join(r);
}
function p2(e3) {
  return e3 && "" + (e3._ || e3);
}
function T4({ $$: e3 }) {
  return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[e3[3] || ""] || "") + e3;
}
function u(e3, r = "") {
  return ({ 1: a4, _: i2 }) => {
    let l3 = { x: "lr", y: "tb" }[a4] || a4 + a4;
    return l3 ? { ...He(e3 + "-" + g2(l3[0]) + r, i2), ...He(e3 + "-" + g2(l3[1]) + r, i2) } : He(e3 + r, i2);
  };
}
function A2(e3 = "") {
  let r = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", e3 && "opacity", "saturate", "sepia", !e3 && "drop-shadow"].filter(Boolean), a4 = {};
  for (let i2 of r)
    a4[`--tw-${e3}${i2}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return a4 = { [`${e3}filter`]: r.map((i2) => `var(--tw-${e3}${i2})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a4 } }, [`(${e3}filter)-(none)`, yt2(`${e3}filter`, a4), ...r.map((i2) => gt(`${i2[0] == "h" ? "-?" : ""}(${e3}${i2})(?:$|-)`, i2, ({ 1: l3, _: d5 }) => ({ [`--tw-${l3}`]: b2(d5).map((m4) => `${i2}(${m4})`).join(" "), ...a4 })))];
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
function W4({ 1: e3, 2: r }) {
  return `${e3} ${r} / ${e3} ${r}`;
}
function D5({ 1: e3 }) {
  return `repeat(${e3},minmax(0,1fr))`;
}
var _ = [["sticky", "@supports ((position: -webkit-sticky) or (position:sticky))"], ["motion-reduce", "@media (prefers-reduced-motion:reduce)"], ["motion-safe", "@media (prefers-reduced-motion:no-preference)"], ["print", "@media print"], ["portrait", "@media (orientation:portrait)"], ["landscape", "@media (orientation:landscape)"], ["contrast-more", "@media (prefers-contrast:more)"], ["contrast-less", "@media (prefers-contrast:less)"], ["marker", "& *::marker,&::marker"], ["selection", "& *::selection,&::selection"], ["first-letter", "&::first-letter"], ["first-line", "&::first-line"], ["file", "&::file-selector-button"], ["placeholder", "&::placeholder"], ["backdrop", "&::backdrop"], ["first", "&:first-child"], ["last", "&:last-child"], ["even", "&:nth-child(2n)"], ["odd", "&:nth-child(odd)"], ["open", "&[open]"], ["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])", ({ 1: e3, 4: r, 5: a4 }, { e: i2, h: l3, v: d5 }) => {
  let m4 = a4 && se(a4) || (r[0] == "[" ? r : d5(r.slice(1)));
  return `${(m4.includes("&") ? m4 : "&" + m4).replace(/&/g, `:merge(.${i2(l3(e3))})`)}${e3[0] == "p" ? "~" : " "}&`;
}], ["(ltr|rtl)", ({ 1: e3 }) => `[dir="${e3}"] &`], [/^\[(.+)]$/, ({ 1: e3 }) => /[&@]/.test(e3) && se(e3).replace(/[}]+$/, "").split("{")]];
function Ce2({ disablePreflight: e3 } = {}) {
  return { preflight: e3 ? void 0 : C3, theme: h, variants: _, rules: O2 };
}

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
function deadline(p6, delay2) {
  let d5 = deferred(), t5 = setTimeout(() => d5.reject(new DeadlineError()), delay2);
  return Promise.race([p6, d5]).finally(() => clearTimeout(t5));
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
      } catch (error2) {
        if (!(error2 instanceof ReferenceError))
          throw error2;
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
  let options = {
    ...defaultRetryOptions,
    ...opts
  };
  if (options.maxTimeout >= 0 && options.minTimeout > options.maxTimeout)
    throw new RangeError("minTimeout is greater than maxTimeout");
  let timeout = options.minTimeout, error2;
  for (let i2 = 0; i2 < options.maxAttempts; i2++)
    try {
      return await fn();
    } catch (err) {
      await new Promise((r) => setTimeout(r, timeout)), timeout *= options.multiplier, timeout = Math.max(timeout, options.minTimeout), options.maxTimeout >= 0 && (timeout = Math.min(timeout, options.maxTimeout)), error2 = err;
    }
  throw new RetryError(error2, options.maxAttempts);
}

// https://esm.sh/v113/memoize-one@6.0.0/deno/memoize-one.mjs
var s2 = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};

// https://esm.sh/v113/lodash.throttle@4.1.1/deno/lodash.throttle.mjs
var __global$ = globalThis || (typeof window < "u" ? window : self), P5 = Object.create, I4 = Object.defineProperty, D6 = Object.getOwnPropertyDescriptor, G5 = Object.getOwnPropertyNames, H5 = Object.getPrototypeOf, U4 = Object.prototype.hasOwnProperty, X5 = (e3, t5) => () => (t5 || e3((t5 = { exports: {} }).exports, t5), t5.exports), q4 = (e3, t5) => {
  for (var n3 in t5)
    I4(e3, n3, { get: t5[n3], enumerable: !0 });
}, v = (e3, t5, n3, f4) => {
  if (t5 && typeof t5 == "object" || typeof t5 == "function")
    for (let i2 of G5(t5))
      !U4.call(e3, i2) && i2 !== n3 && I4(e3, i2, { get: () => t5[i2], enumerable: !(f4 = D6(t5, i2)) || f4.enumerable });
  return e3;
}, s3 = (e3, t5, n3) => (v(e3, t5, "default"), n3 && v(n3, t5, "default")), L4 = (e3, t5, n3) => (n3 = e3 != null ? P5(H5(e3)) : {}, v(t5 || !e3 || !e3.__esModule ? I4(n3, "default", { value: e3, enumerable: !0 }) : n3, e3)), h2 = X5((ge2, N8) => {
  var M6 = "Expected a function", W7 = NaN, z6 = "[object Symbol]", J5 = /^\s+|\s+$/g, K7 = /^[-+]0x[0-9a-f]+$/i, Q7 = /^0b[01]+$/i, V7 = /^0o[0-7]+$/i, Y6 = parseInt, Z6 = typeof __global$ == "object" && __global$ && __global$.Object === Object && __global$, w6 = typeof self == "object" && self && self.Object === Object && self, ee5 = Z6 || w6 || Function("return this")(), te3 = Object.prototype, ne5 = te3.toString, re5 = Math.max, ie4 = Math.min, O6 = function() {
    return ee5.Date.now();
  };
  function fe(e3, t5, n3) {
    var f4, i2, b6, l3, a4, u3, d5 = 0, S9 = !1, g6 = !1, T7 = !0;
    if (typeof e3 != "function")
      throw new TypeError(M6);
    t5 = C6(t5) || 0, p6(n3) && (S9 = !!n3.leading, g6 = "maxWait" in n3, b6 = g6 ? re5(C6(n3.maxWait) || 0, t5) : b6, T7 = "trailing" in n3 ? !!n3.trailing : T7);
    function j6(r) {
      var o4 = f4, m4 = i2;
      return f4 = i2 = void 0, d5 = r, l3 = e3.apply(m4, o4), l3;
    }
    function A5(r) {
      return d5 = r, a4 = setTimeout(y5, t5), S9 ? j6(r) : l3;
    }
    function B11(r) {
      var o4 = r - u3, m4 = r - d5, k5 = t5 - o4;
      return g6 ? ie4(k5, b6 - m4) : k5;
    }
    function E4(r) {
      var o4 = r - u3, m4 = r - d5;
      return u3 === void 0 || o4 >= t5 || o4 < 0 || g6 && m4 >= b6;
    }
    function y5() {
      var r = O6();
      if (E4(r))
        return _4(r);
      a4 = setTimeout(y5, B11(r));
    }
    function _4(r) {
      return a4 = void 0, T7 && f4 ? j6(r) : (f4 = i2 = void 0, l3);
    }
    function F9() {
      a4 !== void 0 && clearTimeout(a4), d5 = 0, f4 = u3 = i2 = a4 = void 0;
    }
    function R5() {
      return a4 === void 0 ? l3 : _4(O6());
    }
    function x6() {
      var r = O6(), o4 = E4(r);
      if (f4 = arguments, i2 = this, u3 = r, o4) {
        if (a4 === void 0)
          return A5(u3);
        if (g6)
          return a4 = setTimeout(y5, t5), j6(u3);
      }
      return a4 === void 0 && (a4 = setTimeout(y5, t5)), l3;
    }
    return x6.cancel = F9, x6.flush = R5, x6;
  }
  function ae4(e3, t5, n3) {
    var f4 = !0, i2 = !0;
    if (typeof e3 != "function")
      throw new TypeError(M6);
    return p6(n3) && (f4 = "leading" in n3 ? !!n3.leading : f4, i2 = "trailing" in n3 ? !!n3.trailing : i2), fe(e3, t5, { leading: f4, maxWait: t5, trailing: i2 });
  }
  function p6(e3) {
    var t5 = typeof e3;
    return !!e3 && (t5 == "object" || t5 == "function");
  }
  function oe4(e3) {
    return !!e3 && typeof e3 == "object";
  }
  function ue3(e3) {
    return typeof e3 == "symbol" || oe4(e3) && ne5.call(e3) == z6;
  }
  function C6(e3) {
    if (typeof e3 == "number")
      return e3;
    if (ue3(e3))
      return W7;
    if (p6(e3)) {
      var t5 = typeof e3.valueOf == "function" ? e3.valueOf() : e3;
      e3 = p6(t5) ? t5 + "" : t5;
    }
    if (typeof e3 != "string")
      return e3 === 0 ? e3 : +e3;
    e3 = e3.replace(J5, "");
    var n3 = Q7.test(e3);
    return n3 || V7.test(e3) ? Y6(e3.slice(2), n3 ? 2 : 8) : K7.test(e3) ? W7 : +e3;
  }
  N8.exports = ae4;
}), c3 = {};
q4(c3, { default: () => se3 });
var ce4 = L4(h2());
s3(c3, L4(h2()));
var { default: $3, ...le3 } = ce4, se3 = $3 !== void 0 ? $3 : le3;

// https://esm.sh/v113/notie@4.3.1/deno/notie.mjs
var Oe = Object.create, ve2 = Object.defineProperty, Ae3 = Object.getOwnPropertyDescriptor, De = Object.getOwnPropertyNames, Ie = Object.getPrototypeOf, je2 = Object.prototype.hasOwnProperty, Ne2 = (v5, i2) => () => (i2 || v5((i2 = { exports: {} }).exports, i2), i2.exports), Pe = (v5, i2) => {
  for (var l3 in i2)
    ve2(v5, l3, { get: i2[l3], enumerable: !0 });
}, me2 = (v5, i2, l3, x6) => {
  if (i2 && typeof i2 == "object" || typeof i2 == "function")
    for (let b6 of De(i2))
      !je2.call(v5, b6) && b6 !== l3 && ve2(v5, b6, { get: () => i2[b6], enumerable: !(x6 = Ae3(i2, b6)) || x6.enumerable });
  return v5;
}, X6 = (v5, i2, l3) => (me2(v5, i2, "default"), l3 && me2(l3, i2, "default")), ke2 = (v5, i2, l3) => (l3 = v5 != null ? Oe(Ie(v5)) : {}, me2(i2 || !v5 || !v5.__esModule ? ve2(l3, "default", { value: v5, enumerable: !0 }) : l3, v5)), xe2 = Ne2((oe4, be) => {
  (function(v5, i2) {
    typeof oe4 == "object" && typeof be == "object" ? be.exports = i2() : typeof define == "function" && define.amd ? define([], i2) : typeof oe4 == "object" ? oe4.notie = i2() : v5.notie = i2();
  })(oe4, function() {
    return function(v5) {
      function i2(x6) {
        if (l3[x6])
          return l3[x6].exports;
        var b6 = l3[x6] = { i: x6, l: !1, exports: {} };
        return v5[x6].call(b6.exports, b6, b6.exports, i2), b6.l = !0, b6.exports;
      }
      var l3 = {};
      return i2.m = v5, i2.c = l3, i2.i = function(x6) {
        return x6;
      }, i2.d = function(x6, b6, re5) {
        i2.o(x6, b6) || Object.defineProperty(x6, b6, { configurable: !1, enumerable: !0, get: re5 });
      }, i2.n = function(x6) {
        var b6 = x6 && x6.__esModule ? function() {
          return x6.default;
        } : function() {
          return x6;
        };
        return i2.d(b6, "a", b6), b6;
      }, i2.o = function(x6, b6) {
        return Object.prototype.hasOwnProperty.call(x6, b6);
      }, i2.p = "", i2(i2.s = 1);
    }([function(v5, i2) {
      v5.exports = function(l3) {
        return l3.webpackPolyfill || (l3.deprecate = function() {
        }, l3.paths = [], l3.children || (l3.children = []), Object.defineProperty(l3, "loaded", { enumerable: !0, get: function() {
          return l3.l;
        } }), Object.defineProperty(l3, "id", { enumerable: !0, get: function() {
          return l3.i;
        } }), l3.webpackPolyfill = 1), l3;
      };
    }, function(v5, i2, l3) {
      "use strict";
      (function(x6) {
        var b6, re5, de2, $6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A5) {
          return typeof A5;
        } : function(A5) {
          return A5 && typeof Symbol == "function" && A5.constructor === Symbol && A5 !== Symbol.prototype ? "symbol" : typeof A5;
        };
        (function(A5, p6) {
          $6(i2) === "object" && $6(x6) === "object" ? x6.exports = p6() : (re5 = [], b6 = p6, de2 = typeof b6 == "function" ? b6.apply(i2, re5) : b6, de2 !== void 0 && (x6.exports = de2));
        })(void 0, function() {
          return function(A5) {
            function p6(g6) {
              if (ee5[g6])
                return ee5[g6].exports;
              var T7 = ee5[g6] = { i: g6, l: !1, exports: {} };
              return A5[g6].call(T7.exports, T7, T7.exports, p6), T7.l = !0, T7.exports;
            }
            var ee5 = {};
            return p6.m = A5, p6.c = ee5, p6.i = function(g6) {
              return g6;
            }, p6.d = function(g6, T7, J5) {
              p6.o(g6, T7) || Object.defineProperty(g6, T7, { configurable: !1, enumerable: !0, get: J5 });
            }, p6.n = function(g6) {
              var T7 = g6 && g6.__esModule ? function() {
                return g6.default;
              } : function() {
                return g6;
              };
              return p6.d(T7, "a", T7), T7;
            }, p6.o = function(g6, T7) {
              return Object.prototype.hasOwnProperty.call(g6, T7);
            }, p6.p = "", p6(p6.s = 0);
          }([function(A5, p6, ee5) {
            function g6(t5, o4) {
              var s6 = {};
              for (var u3 in t5)
                o4.indexOf(u3) >= 0 || Object.prototype.hasOwnProperty.call(t5, u3) && (s6[u3] = t5[u3]);
              return s6;
            }
            Object.defineProperty(p6, "__esModule", { value: !0 });
            var T7 = typeof Symbol == "function" && $6(Symbol.iterator) === "symbol" ? function(t5) {
              return typeof t5 > "u" ? "undefined" : $6(t5);
            } : function(t5) {
              return t5 && typeof Symbol == "function" && t5.constructor === Symbol && t5 !== Symbol.prototype ? "symbol" : typeof t5 > "u" ? "undefined" : $6(t5);
            }, J5 = Object.assign || function(t5) {
              for (var o4 = 1; o4 < arguments.length; o4++) {
                var s6 = arguments[o4];
                for (var u3 in s6)
                  Object.prototype.hasOwnProperty.call(s6, u3) && (t5[u3] = s6[u3]);
              }
              return t5;
            }, R5 = { top: "top", bottom: "bottom" }, e3 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: !0, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: R5.top, force: R5.top, confirm: R5.top, input: R5.top, select: R5.bottom, date: R5.top } }, Ee2 = p6.setOptions = function(t5) {
              e3 = J5({}, e3, t5, { classes: J5({}, e3.classes, t5.classes), ids: J5({}, e3.ids, t5.ids), positions: J5({}, e3.positions, t5.positions) });
            }, ye2 = function() {
              return new Promise(function(t5) {
                return setTimeout(t5, 0);
              });
            }, le4 = function(t5) {
              return new Promise(function(o4) {
                return setTimeout(o4, 1e3 * t5);
              });
            }, W7 = function() {
              document.activeElement && document.activeElement.blur();
            }, K7 = function() {
              var t5 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o4) {
                var s6 = 16 * Math.random() | 0, u3 = o4 === "x" ? s6 : 3 & s6 | 8;
                return u3.toString(16);
              });
              return "notie-" + t5;
            }, ue3 = { 1: e3.classes.backgroundSuccess, success: e3.classes.backgroundSuccess, 2: e3.classes.backgroundWarning, warning: e3.classes.backgroundWarning, 3: e3.classes.backgroundError, error: e3.classes.backgroundError, 4: e3.classes.backgroundInfo, info: e3.classes.backgroundInfo, 5: e3.classes.backgroundNeutral, neutral: e3.classes.backgroundNeutral }, Le = function() {
              return e3.transitionSelector + " " + e3.transitionDuration + "s " + e3.transitionCurve;
            }, te3 = function(t5) {
              return t5.keyCode === 13;
            }, ne5 = function(t5) {
              return t5.keyCode === 27;
            }, Z6 = function(t5, o4) {
              t5.classList.add(e3.classes.container), t5.style[o4] = "-10000px", document.body.appendChild(t5), t5.style[o4] = "-" + t5.offsetHeight + "px", t5.listener && window.addEventListener("keydown", t5.listener), ye2().then(function() {
                t5.style.transition = Le(), t5.style[o4] = 0;
              });
            }, O6 = function(t5, o4) {
              var s6 = document.getElementById(t5);
              s6 && (s6.style[o4] = "-" + s6.offsetHeight + "px", s6.listener && window.removeEventListener("keydown", s6.listener), le4(e3.transitionDuration).then(function() {
                s6.parentNode && s6.parentNode.removeChild(s6);
              }));
            }, se4 = function(t5, o4) {
              var s6 = document.createElement("div");
              s6.id = e3.ids.overlay, s6.classList.add(e3.classes.overlay), s6.classList.add(e3.classes.backgroundOverlay), s6.style.opacity = 0, t5 && e3.overlayClickDismiss && (s6.onclick = function() {
                O6(t5.id, o4), j6();
              }), document.body.appendChild(s6), ye2().then(function() {
                s6.style.transition = Le(), s6.style.opacity = e3.overlayOpacity;
              });
            }, j6 = function() {
              var t5 = document.getElementById(e3.ids.overlay);
              t5.style.opacity = 0, le4(e3.transitionDuration).then(function() {
                t5.parentNode && t5.parentNode.removeChild(t5);
              });
            }, F9 = p6.hideAlerts = function(t5) {
              var o4 = document.getElementsByClassName(e3.classes.alert);
              if (o4.length) {
                for (var s6 = 0; s6 < o4.length; s6++) {
                  var u3 = o4[s6];
                  O6(u3.id, u3.position);
                }
                t5 && le4(e3.transitionDuration).then(function() {
                  return t5();
                });
              }
            }, Te = p6.alert = function(t5) {
              var o4 = t5.type, s6 = o4 === void 0 ? 4 : o4, u3 = t5.text, c5 = t5.time, k5 = c5 === void 0 ? e3.alertTime : c5, H8 = t5.stay, S9 = H8 !== void 0 && H8, h4 = t5.position, f4 = h4 === void 0 ? e3.positions.alert || f4.top : h4;
              W7(), F9();
              var d5 = document.createElement("div"), m4 = K7();
              d5.id = m4, d5.position = f4, d5.classList.add(e3.classes.textbox), d5.classList.add(ue3[s6]), d5.classList.add(e3.classes.alert), d5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + u3 + "</div>", d5.onclick = function() {
                return O6(m4, f4);
              }, d5.listener = function(n3) {
                (te3(n3) || ne5(n3)) && F9();
              }, Z6(d5, f4), k5 && k5 < 1 && (k5 = 1), !S9 && k5 && le4(k5).then(function() {
                return O6(m4, f4);
              });
            }, Me2 = p6.force = function(t5, o4) {
              var s6 = t5.type, u3 = s6 === void 0 ? 5 : s6, c5 = t5.text, k5 = t5.buttonText, H8 = k5 === void 0 ? "OK" : k5, S9 = t5.callback, h4 = t5.position, f4 = h4 === void 0 ? e3.positions.force || f4.top : h4;
              W7(), F9();
              var d5 = document.createElement("div"), m4 = K7();
              d5.id = m4;
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.textbox), n3.classList.add(e3.classes.backgroundInfo), n3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + c5 + "</div>";
              var r = document.createElement("div");
              r.classList.add(e3.classes.button), r.classList.add(ue3[u3]), r.innerHTML = H8, r.onclick = function() {
                O6(m4, f4), j6(), S9 ? S9() : o4 && o4();
              }, d5.appendChild(n3), d5.appendChild(r), d5.listener = function(C6) {
                te3(C6) && r.click();
              }, Z6(d5, f4), se4();
            }, He2 = p6.confirm = function(t5, o4, s6) {
              var u3 = t5.text, c5 = t5.submitText, k5 = c5 === void 0 ? "Yes" : c5, H8 = t5.cancelText, S9 = H8 === void 0 ? "Cancel" : H8, h4 = t5.submitCallback, f4 = t5.cancelCallback, d5 = t5.position, m4 = d5 === void 0 ? e3.positions.confirm || m4.top : d5;
              W7(), F9();
              var n3 = document.createElement("div"), r = K7();
              n3.id = r;
              var C6 = document.createElement("div");
              C6.classList.add(e3.classes.textbox), C6.classList.add(e3.classes.backgroundInfo), C6.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + u3 + "</div>";
              var y5 = document.createElement("div");
              y5.classList.add(e3.classes.button), y5.classList.add(e3.classes.elementHalf), y5.classList.add(e3.classes.backgroundSuccess), y5.innerHTML = k5, y5.onclick = function() {
                O6(r, m4), j6(), h4 ? h4() : o4 && o4();
              };
              var a4 = document.createElement("div");
              a4.classList.add(e3.classes.button), a4.classList.add(e3.classes.elementHalf), a4.classList.add(e3.classes.backgroundError), a4.innerHTML = S9, a4.onclick = function() {
                O6(r, m4), j6(), f4 ? f4() : s6 && s6();
              }, n3.appendChild(C6), n3.appendChild(y5), n3.appendChild(a4), n3.listener = function(E4) {
                te3(E4) ? y5.click() : ne5(E4) && a4.click();
              }, Z6(n3, m4), se4(n3, m4);
            }, ge2 = function(t5, o4, s6) {
              var u3 = t5.text, c5 = t5.submitText, k5 = c5 === void 0 ? "Submit" : c5, H8 = t5.cancelText, S9 = H8 === void 0 ? "Cancel" : H8, h4 = t5.submitCallback, f4 = t5.cancelCallback, d5 = t5.position, m4 = d5 === void 0 ? e3.positions.input || m4.top : d5, n3 = g6(t5, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
              W7(), F9();
              var r = document.createElement("div"), C6 = K7();
              r.id = C6;
              var y5 = document.createElement("div");
              y5.classList.add(e3.classes.textbox), y5.classList.add(e3.classes.backgroundInfo), y5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + u3 + "</div>";
              var a4 = document.createElement("input");
              a4.classList.add(e3.classes.inputField), a4.setAttribute("autocapitalize", n3.autocapitalize || "none"), a4.setAttribute("autocomplete", n3.autocomplete || "off"), a4.setAttribute("autocorrect", n3.autocorrect || "off"), a4.setAttribute("autofocus", n3.autofocus || "true"), a4.setAttribute("inputmode", n3.inputmode || "verbatim"), a4.setAttribute("max", n3.max || ""), a4.setAttribute("maxlength", n3.maxlength || ""), a4.setAttribute("min", n3.min || ""), a4.setAttribute("minlength", n3.minlength || ""), a4.setAttribute("placeholder", n3.placeholder || ""), a4.setAttribute("spellcheck", n3.spellcheck || "default"), a4.setAttribute("step", n3.step || "any"), a4.setAttribute("type", n3.type || "text"), a4.value = n3.value || "", n3.allowed && (a4.oninput = function() {
                var M6 = void 0;
                if (Array.isArray(n3.allowed)) {
                  for (var w6 = "", _4 = n3.allowed, P8 = 0; P8 < _4.length; P8++)
                    _4[P8] === "an" ? w6 += "0-9a-zA-Z" : _4[P8] === "a" ? w6 += "a-zA-Z" : _4[P8] === "n" && (w6 += "0-9"), _4[P8] === "s" && (w6 += " ");
                  M6 = new RegExp("[^" + w6 + "]", "g");
                } else
                  T7(n3.allowed) === "object" && (M6 = n3.allowed);
                a4.value = a4.value.replace(M6, "");
              });
              var E4 = document.createElement("div");
              E4.classList.add(e3.classes.button), E4.classList.add(e3.classes.elementHalf), E4.classList.add(e3.classes.backgroundSuccess), E4.innerHTML = k5, E4.onclick = function() {
                O6(C6, m4), j6(), h4 ? h4(a4.value) : o4 && o4(a4.value);
              };
              var D10 = document.createElement("div");
              D10.classList.add(e3.classes.button), D10.classList.add(e3.classes.elementHalf), D10.classList.add(e3.classes.backgroundError), D10.innerHTML = S9, D10.onclick = function() {
                O6(C6, m4), j6(), f4 ? f4(a4.value) : s6 && s6(a4.value);
              }, r.appendChild(y5), r.appendChild(a4), r.appendChild(E4), r.appendChild(D10), r.listener = function(M6) {
                te3(M6) ? E4.click() : ne5(M6) && D10.click();
              }, Z6(r, m4), a4.focus(), se4(r, m4);
            };
            p6.input = ge2;
            var Se2 = p6.select = function(t5, o4) {
              var s6 = t5.text, u3 = t5.cancelText, c5 = u3 === void 0 ? "Cancel" : u3, k5 = t5.cancelCallback, H8 = t5.choices, S9 = t5.position, h4 = S9 === void 0 ? e3.positions.select || h4.top : S9;
              W7(), F9();
              var f4 = document.createElement("div"), d5 = K7();
              f4.id = d5;
              var m4 = document.createElement("div");
              m4.classList.add(e3.classes.textbox), m4.classList.add(e3.classes.backgroundInfo), m4.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + s6 + "</div>", f4.appendChild(m4), H8.forEach(function(r, C6) {
                var y5 = r.type, a4 = y5 === void 0 ? 1 : y5, E4 = r.text, D10 = r.handler, M6 = document.createElement("div");
                M6.classList.add(ue3[a4]), M6.classList.add(e3.classes.button), M6.classList.add(e3.classes.selectChoice);
                var w6 = H8[C6 + 1];
                w6 && !w6.type && (w6.type = 1), w6 && w6.type === a4 && M6.classList.add(e3.classes.selectChoiceRepeated), M6.innerHTML = E4, M6.onclick = function() {
                  O6(d5, h4), j6(), D10();
                }, f4.appendChild(M6);
              });
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.backgroundNeutral), n3.classList.add(e3.classes.button), n3.innerHTML = c5, n3.onclick = function() {
                O6(d5, h4), j6(), k5 ? k5() : o4 && o4();
              }, f4.appendChild(n3), f4.listener = function(r) {
                ne5(r) && n3.click();
              }, Z6(f4, h4), se4(f4, h4);
            }, we2 = p6.date = function(t5, o4, s6) {
              var u3 = t5.value, c5 = u3 === void 0 ? /* @__PURE__ */ new Date() : u3, k5 = t5.submitText, H8 = k5 === void 0 ? "OK" : k5, S9 = t5.cancelText, h4 = S9 === void 0 ? "Cancel" : S9, f4 = t5.submitCallback, d5 = t5.cancelCallback, m4 = t5.position, n3 = m4 === void 0 ? e3.positions.date || n3.top : m4;
              W7(), F9();
              var r = "&#9662", C6 = document.createElement("div"), y5 = document.createElement("div"), a4 = document.createElement("div"), E4 = function(L7) {
                C6.innerHTML = e3.dateMonths[L7.getMonth()], y5.innerHTML = L7.getDate(), a4.innerHTML = L7.getFullYear();
              }, D10 = function(L7) {
                var N8 = new Date(c5.getFullYear(), c5.getMonth() + 1, 0).getDate(), V7 = L7.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                Number(V7) > N8 && (V7 = N8.toString()), L7.target.textContent = V7, Number(V7) < 1 && (V7 = "1"), c5.setDate(Number(V7));
              }, M6 = function(L7) {
                var N8 = L7.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                L7.target.textContent = N8, c5.setFullYear(Number(N8));
              }, w6 = function(L7) {
                E4(c5);
              }, _4 = function(L7) {
                var N8 = new Date(c5.getFullYear(), c5.getMonth() + L7 + 1, 0).getDate();
                c5.getDate() > N8 && c5.setDate(N8), c5.setMonth(c5.getMonth() + L7), E4(c5);
              }, P8 = function(L7) {
                c5.setDate(c5.getDate() + L7), E4(c5);
              }, he2 = function(L7) {
                var N8 = c5.getFullYear() + L7;
                N8 < 0 ? c5.setFullYear(0) : c5.setFullYear(c5.getFullYear() + L7), E4(c5);
              }, Y6 = document.createElement("div"), pe2 = K7();
              Y6.id = pe2;
              var fe = document.createElement("div");
              fe.classList.add(e3.classes.backgroundInfo);
              var I6 = document.createElement("div");
              I6.classList.add(e3.classes.dateSelectorInner);
              var q7 = document.createElement("div");
              q7.classList.add(e3.classes.button), q7.classList.add(e3.classes.elementThird), q7.classList.add(e3.classes.dateSelectorUp), q7.innerHTML = r;
              var G8 = document.createElement("div");
              G8.classList.add(e3.classes.button), G8.classList.add(e3.classes.elementThird), G8.classList.add(e3.classes.dateSelectorUp), G8.innerHTML = r;
              var Q7 = document.createElement("div");
              Q7.classList.add(e3.classes.button), Q7.classList.add(e3.classes.elementThird), Q7.classList.add(e3.classes.dateSelectorUp), Q7.innerHTML = r, C6.classList.add(e3.classes.element), C6.classList.add(e3.classes.elementThird), C6.innerHTML = e3.dateMonths[c5.getMonth()], y5.classList.add(e3.classes.element), y5.classList.add(e3.classes.elementThird), y5.setAttribute("contentEditable", !0), y5.addEventListener("input", D10), y5.addEventListener("blur", w6), y5.innerHTML = c5.getDate(), a4.classList.add(e3.classes.element), a4.classList.add(e3.classes.elementThird), a4.setAttribute("contentEditable", !0), a4.addEventListener("input", M6), a4.addEventListener("blur", w6), a4.innerHTML = c5.getFullYear();
              var ae4 = document.createElement("div");
              ae4.classList.add(e3.classes.button), ae4.classList.add(e3.classes.elementThird), ae4.innerHTML = r;
              var ie4 = document.createElement("div");
              ie4.classList.add(e3.classes.button), ie4.classList.add(e3.classes.elementThird), ie4.innerHTML = r;
              var ce5 = document.createElement("div");
              ce5.classList.add(e3.classes.button), ce5.classList.add(e3.classes.elementThird), ce5.innerHTML = r, q7.onclick = function() {
                return _4(1);
              }, G8.onclick = function() {
                return P8(1);
              }, Q7.onclick = function() {
                return he2(1);
              }, ae4.onclick = function() {
                return _4(-1);
              }, ie4.onclick = function() {
                return P8(-1);
              }, ce5.onclick = function() {
                return he2(-1);
              };
              var z6 = document.createElement("div");
              z6.classList.add(e3.classes.button), z6.classList.add(e3.classes.elementHalf), z6.classList.add(e3.classes.backgroundSuccess), z6.innerHTML = H8, z6.onclick = function() {
                O6(pe2, n3), j6(), f4 ? f4(c5) : o4 && o4(c5);
              };
              var U8 = document.createElement("div");
              U8.classList.add(e3.classes.button), U8.classList.add(e3.classes.elementHalf), U8.classList.add(e3.classes.backgroundError), U8.innerHTML = h4, U8.onclick = function() {
                O6(pe2, n3), j6(), d5 ? d5(c5) : s6 && s6(c5);
              }, I6.appendChild(q7), I6.appendChild(G8), I6.appendChild(Q7), I6.appendChild(C6), I6.appendChild(y5), I6.appendChild(a4), I6.appendChild(ae4), I6.appendChild(ie4), I6.appendChild(ce5), fe.appendChild(I6), Y6.appendChild(fe), Y6.appendChild(z6), Y6.appendChild(U8), Y6.listener = function(L7) {
                te3(L7) ? z6.click() : ne5(L7) && U8.click();
              }, Z6(Y6, n3), se4(Y6, n3);
            };
            p6.default = { alert: Te, force: Me2, confirm: He2, input: ge2, select: Se2, date: we2, setOptions: Ee2, hideAlerts: F9 };
          }]);
        });
      }).call(i2, l3(0)(v5));
    }]);
  });
}), B6 = {};
Pe(B6, { default: () => Ye2 });
var Fe = ke2(xe2());
X6(B6, ke2(xe2()));
var { default: Ce3, ..._e3 } = Fe, Ye2 = Ce3 !== void 0 ? Ce3 : _e3;

// https://esm.sh/v113/nanostores@0.7.4/deno/nanostores.mjs
var S5 = Symbol("clean");
var m2 = Symbol();

// https://esm.sh/v113/@nanostores/i18n@0.7.1/deno/i18n.mjs
function g3(r, n3) {
  if (typeof r == "string")
    return n3(r);
  {
    let e3 = {};
    for (let t5 in r)
      e3[t5] = g3(r[t5], n3);
    return e3;
  }
}
function p3(r) {
  return (n3) => {
    if (n3.transform) {
      let e3 = n3.transform;
      return n3 = n3.input, { input: n3, transform(t5, o4, s6) {
        let f4 = r(t5, o4, ...s6);
        return (...l3) => e3(t5, f4, l3);
      } };
    } else
      return { input: n3, transform(e3, t5, o4) {
        return r(e3, t5, ...o4);
      } };
  };
}
var N5 = p3((r, n3, e3) => g3(n3, (t5) => {
  for (let o4 in e3)
    t5 = t5.replace(new RegExp(`{${o4}}`, "g"), e3[o4]);
  return t5;
})), R3 = p3((r, n3, e3) => {
  let t5 = new Intl.PluralRules(r).select(e3);
  return t5 in n3 || (t5 = "many"), g3(n3[t5], (o4) => o4.replace(/{count}/g, e3));
});

// https://esm.sh/v113/hotkeys-js@3.10.1/deno/hotkeys-js.mjs
var M4 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : !1;
function P6(e3, t5, i2, r) {
  e3.addEventListener ? e3.addEventListener(t5, i2, r) : e3.attachEvent && e3.attachEvent("on".concat(t5), function() {
    i2(window.event);
  });
}
function T5(e3, t5) {
  for (var i2 = t5.slice(0, t5.length - 1), r = 0; r < i2.length; r++)
    i2[r] = e3[i2[r].toLowerCase()];
  return i2;
}
function U5(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  for (var t5 = e3.split(","), i2 = t5.lastIndexOf(""); i2 >= 0; )
    t5[i2 - 1] += ",", t5.splice(i2, 1), i2 = t5.lastIndexOf("");
  return t5;
}
function G6(e3, t5) {
  for (var i2 = e3.length >= t5.length ? e3 : t5, r = e3.length >= t5.length ? t5 : e3, n3 = !0, a4 = 0; a4 < i2.length; a4++)
    r.indexOf(i2[a4]) === -1 && (n3 = !1);
  return n3;
}
var b3 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M4 ? 173 : 189, "=": M4 ? 61 : 187, ";": M4 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, g4 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 }, L5 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, u2 = { 16: !1, 18: !1, 17: !1, 91: !1 }, s4 = {};
for (O3 = 1; O3 < 20; O3++)
  b3["f".concat(O3)] = 111 + O3;
var O3, f3 = [], A3 = !1, D7 = "all", H6 = [], C4 = function(t5) {
  return b3[t5.toLowerCase()] || g4[t5.toLowerCase()] || t5.toUpperCase().charCodeAt(0);
}, R4 = function(t5) {
  return Object.keys(b3).find(function(i2) {
    return b3[i2] === t5;
  });
}, V5 = function(t5) {
  return Object.keys(g4).find(function(i2) {
    return g4[i2] === t5;
  });
};
function F6(e3) {
  D7 = e3 || "all";
}
function E2() {
  return D7 || "all";
}
function X7() {
  return f3.slice(0);
}
function $4() {
  return f3.map(function(e3) {
    return R4(e3) || V5(e3) || String.fromCharCode(e3);
  });
}
function q5(e3) {
  var t5 = e3.target || e3.srcElement, i2 = t5.tagName, r = !0;
  return (t5.isContentEditable || (i2 === "INPUT" || i2 === "TEXTAREA" || i2 === "SELECT") && !t5.readOnly) && (r = !1), r;
}
function z4(e3) {
  return typeof e3 == "string" && (e3 = C4(e3)), f3.indexOf(e3) !== -1;
}
function J3(e3, t5) {
  var i2, r;
  e3 || (e3 = E2());
  for (var n3 in s4)
    if (Object.prototype.hasOwnProperty.call(s4, n3))
      for (i2 = s4[n3], r = 0; r < i2.length; )
        i2[r].scope === e3 ? i2.splice(r, 1) : r++;
  E2() === e3 && F6(t5 || "all");
}
function N6(e3) {
  var t5 = e3.keyCode || e3.which || e3.charCode, i2 = f3.indexOf(t5);
  if (i2 >= 0 && f3.splice(i2, 1), e3.key && e3.key.toLowerCase() === "meta" && f3.splice(0, f3.length), (t5 === 93 || t5 === 224) && (t5 = 91), t5 in u2) {
    u2[t5] = !1;
    for (var r in g4)
      g4[r] === t5 && (v2[r] = !1);
  }
}
function Q5(e3) {
  if (typeof e3 > "u")
    Object.keys(s4).forEach(function(o4) {
      return delete s4[o4];
    });
  else if (Array.isArray(e3))
    e3.forEach(function(o4) {
      o4.key && S6(o4);
    });
  else if (typeof e3 == "object")
    e3.key && S6(e3);
  else if (typeof e3 == "string") {
    for (var t5 = arguments.length, i2 = new Array(t5 > 1 ? t5 - 1 : 0), r = 1; r < t5; r++)
      i2[r - 1] = arguments[r];
    var n3 = i2[0], a4 = i2[1];
    typeof n3 == "function" && (a4 = n3, n3 = ""), S6({ key: e3, scope: n3, method: a4, splitKey: "+" });
  }
}
var S6 = function(t5) {
  var i2 = t5.key, r = t5.scope, n3 = t5.method, a4 = t5.splitKey, o4 = a4 === void 0 ? "+" : a4, l3 = U5(i2);
  l3.forEach(function(c5) {
    var p6 = c5.split(o4), m4 = p6.length, y5 = p6[m4 - 1], d5 = y5 === "*" ? "*" : C4(y5);
    if (s4[d5]) {
      r || (r = E2());
      var K7 = m4 > 1 ? T5(g4, p6) : [];
      s4[d5] = s4[d5].filter(function(h4) {
        var w6 = n3 ? h4.method === n3 : !0;
        return !(w6 && h4.scope === r && G6(h4.mods, K7));
      });
    }
  });
};
function _2(e3, t5, i2, r) {
  if (t5.element === r) {
    var n3;
    if (t5.scope === i2 || t5.scope === "all") {
      n3 = t5.mods.length > 0;
      for (var a4 in u2)
        Object.prototype.hasOwnProperty.call(u2, a4) && (!u2[a4] && t5.mods.indexOf(+a4) > -1 || u2[a4] && t5.mods.indexOf(+a4) === -1) && (n3 = !1);
      (t5.mods.length === 0 && !u2[16] && !u2[18] && !u2[17] && !u2[91] || n3 || t5.shortcut === "*") && t5.method(e3, t5) === !1 && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = !1, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = !0));
    }
  }
}
function k3(e3, t5) {
  var i2 = s4["*"], r = e3.keyCode || e3.which || e3.charCode;
  if (v2.filter.call(this, e3)) {
    if ((r === 93 || r === 224) && (r = 91), f3.indexOf(r) === -1 && r !== 229 && f3.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h4) {
      var w6 = L5[h4];
      e3[h4] && f3.indexOf(w6) === -1 ? f3.push(w6) : !e3[h4] && f3.indexOf(w6) > -1 ? f3.splice(f3.indexOf(w6), 1) : h4 === "metaKey" && e3[h4] && f3.length === 3 && (e3.ctrlKey || e3.shiftKey || e3.altKey || (f3 = f3.slice(f3.indexOf(w6))));
    }), r in u2) {
      u2[r] = !0;
      for (var n3 in g4)
        g4[n3] === r && (v2[n3] = !0);
      if (!i2)
        return;
    }
    for (var a4 in u2)
      Object.prototype.hasOwnProperty.call(u2, a4) && (u2[a4] = e3[L5[a4]]);
    e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (f3.indexOf(17) === -1 && f3.push(17), f3.indexOf(18) === -1 && f3.push(18), u2[17] = !0, u2[18] = !0);
    var o4 = E2();
    if (i2)
      for (var l3 = 0; l3 < i2.length; l3++)
        i2[l3].scope === o4 && (e3.type === "keydown" && i2[l3].keydown || e3.type === "keyup" && i2[l3].keyup) && _2(e3, i2[l3], o4, t5);
    if (r in s4) {
      for (var c5 = 0; c5 < s4[r].length; c5++)
        if ((e3.type === "keydown" && s4[r][c5].keydown || e3.type === "keyup" && s4[r][c5].keyup) && s4[r][c5].key) {
          for (var p6 = s4[r][c5], m4 = p6.splitKey, y5 = p6.key.split(m4), d5 = [], K7 = 0; K7 < y5.length; K7++)
            d5.push(C4(y5[K7]));
          d5.sort().join("") === f3.sort().join("") && _2(e3, p6, o4, t5);
        }
    }
  }
}
function W5(e3) {
  return H6.indexOf(e3) > -1;
}
function v2(e3, t5, i2) {
  f3 = [];
  var r = U5(e3), n3 = [], a4 = "all", o4 = document, l3 = 0, c5 = !1, p6 = !0, m4 = "+", y5 = !1;
  for (i2 === void 0 && typeof t5 == "function" && (i2 = t5), Object.prototype.toString.call(t5) === "[object Object]" && (t5.scope && (a4 = t5.scope), t5.element && (o4 = t5.element), t5.keyup && (c5 = t5.keyup), t5.keydown !== void 0 && (p6 = t5.keydown), t5.capture !== void 0 && (y5 = t5.capture), typeof t5.splitKey == "string" && (m4 = t5.splitKey)), typeof t5 == "string" && (a4 = t5); l3 < r.length; l3++)
    e3 = r[l3].split(m4), n3 = [], e3.length > 1 && (n3 = T5(g4, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : C4(e3), e3 in s4 || (s4[e3] = []), s4[e3].push({ keyup: c5, keydown: p6, scope: a4, mods: n3, shortcut: r[l3], method: i2, key: r[l3], splitKey: m4, element: o4 });
  typeof o4 < "u" && !W5(o4) && window && (H6.push(o4), P6(o4, "keydown", function(d5) {
    k3(d5, o4);
  }, y5), A3 || (A3 = !0, P6(window, "focus", function() {
    f3 = [];
  }, y5)), P6(o4, "keyup", function(d5) {
    k3(d5, o4), N6(d5);
  }, y5));
}
function Y5(e3) {
  var t5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(s4).forEach(function(i2) {
    var r = s4[i2].filter(function(n3) {
      return n3.scope === t5 && n3.shortcut === e3;
    });
    r.forEach(function(n3) {
      n3 && n3.method && n3.method();
    });
  });
}
var j4 = { getPressedKeyString: $4, setScope: F6, getScope: E2, deleteScope: J3, getPressedKeyCodes: X7, isPressed: z4, filter: q5, trigger: Y5, unbind: Q5, keyMap: b3, modifier: g4, modifierMap: L5 };
for (x4 in j4)
  Object.prototype.hasOwnProperty.call(j4, x4) && (v2[x4] = j4[x4]);
var x4;
typeof document < "u" && (B8 = window.hotkeys, v2.noConflict = function(e3) {
  return e3 && window.hotkeys === v2 && (window.hotkeys = B8), v2;
}, window.hotkeys = v2);
var B8;

// https://esm.sh/v113/immersive-translate@1.0.9/deno/immersive-translate.mjs
var d4 = "Immersive Translate", v3 = class {
  #e = performance.now();
  reset() {
    this.#e = performance.now();
  }
  stop(e3) {
    let t5 = performance.now(), n3 = Math.round(t5 - this.#e);
    console.debug(d4 + " TIMING:", e3, "in", n3 + "ms"), this.#e = t5;
  }
}, D8 = class {
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
    this.#e <= 0 && console.log(d4 + " DEBUG:", ...e3);
  }
  v(...e3) {
    this.#e <= 0 && console.log(d4 + " VERBOSE:", ...e3);
  }
  info(...e3) {
    this.#e <= 1 && console.log(d4 + " INFO:", ...e3);
  }
  l(...e3) {
    this.#e <= 1 && console.log(d4 + " TEMP INFO:", ...e3);
  }
  warn(...e3) {
    this.#e <= 2 && console.warn(d4 + " WARN:", ...e3);
  }
  error(...e3) {
    this.#e <= 3 && console.error(d4 + " ERROR:", ...e3);
  }
  fatal(...e3) {
    this.#e <= 4 && console.error(d4 + " FATAL:", ...e3);
  }
  timing() {
    return this.level === 0 ? new v3() : { reset: () => {
    }, stop: () => {
    } };
  }
}, E3 = new D8(), L6 = "poegempjloogba", I5 = "ension://", N7 = "me-";
function T6(e3) {
  if (!e3)
    return [!1, !0];
  let t5 = new Date(e3).getTime(), n3 = (/* @__PURE__ */ new Date()).getTime(), o4 = t5 - n3 < 15e3;
  return [t5 - n3 > 3e3, o4];
}
function b4(e3) {
  return e3 ? e3.PROD === "1" : !0;
}
function F7(e3) {
  return e3 ? e3.MOCK === "1" : !1;
}
function O4(e3) {
  return new Promise((t5, n3) => {
    setTimeout(() => {
      t5();
    }, e3);
  });
}
var U6 = "rome-ext";
function $5(e3, t5) {
  return t5 ? e3 + (t5 - e3 % t5) : e3;
}
function j5(e3, t5) {
  return e3.split(t5).length - 1;
}
function P7(e3) {
  let t5 = Date.now(), n3 = 1;
  for (let o4 of e3)
    n3 += j5(o4, "i");
  return $5(t5, n3);
}
function K5(e3, t5) {
  return Math.floor(Math.random() * (t5 - e3 + 1)) + e3;
}
var M5 = "extension", z5 = "chro";
function B9() {
  return K5(1e6, 1e8);
}
var S7 = "BrowserExt";
function J4(e3) {
  return JSON.stringify(e3).replace('"method":"', () => {
    let t5 = e3;
    return (t5.id + 3) % 13 === 0 || (t5.id + 5) % 29 === 0 ? '"method" : "' : '"method": "';
  });
}
var y3 = "DeepL", x5 = "ension", V6 = "ch" + U6 + I5 + "cofdb" + L6 + "gkncekinflcnj";
function C5(e3) {
  let { contentType: t5, userAgent: n3, url: o4, authorization: r, clientVersion: s6 } = e3, i2 = new URL(o4), a4 = new Headers();
  if (a4.append("authority", i2.hostname), a4.append("accept", "*/*"), a4.append("accept-language", "ja"), r && a4.append("authorization", `Bearer ${r}`), a4.append("cache-control", "no-cache"), t5 ? a4.append("content-type", t5) : a4.append("content-type", "application/json; charset=utf-8"), a4.append("origin", V6), a4.append("pragma", "no-cache"), a4.append("referer", "https://www.deepl.com/"), a4.append("sec-fetch-dest", "empty"), a4.append("sec-fetch-mode", "cors"), a4.append("sec-fetch-site", "none"), n3)
    a4.append("user-agent", n3);
  else if (globalThis && globalThis.navigator && globalThis.navigator.userAgent) {
    let p6 = globalThis.navigator.userAgent;
    a4.append("user-agent", `${y3}${S7}${x5}/${s6 || "1.1.1"} ${p6}`);
  } else
    a4.append("user-agent", `${y3}${S7}${x5}/${s6 || "1.1.1"} Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78`);
  let c5 = {};
  for (let [p6, f4] of a4.entries())
    c5[p6] = f4;
  return c5;
}
function q6(e3) {
  let t5 = "1.1.1", { texts: n3, target_lang: o4, source_lang: r } = e3, s6 = { jsonrpc: "2.0", method: "LMT_handle_texts", params: { texts: n3.map((a4) => ({ text: a4 })), splitting: "newlines", lang: { target_lang: o4, source_lang_user_selected: r || "auto", preference: { weight: { BG: 119e-5, CS: 0.04360000000000001, DA: 0.007090000000000001, DE: 0.02142, EL: 287e-5, EN: 4.79277, ES: 0.029710000000000004, ET: 0.007300000000000001, FI: 0.013850000000000001, FR: 0.04227, HU: 0.019000000000000003, ID: 423e-5, IT: 0.03592, JA: 453e-5, LT: 0.031700000000000006, LV: 27e-4, NL: 0.02375, PL: 0.044520000000000004, PT: 0.017320000000000002, RO: 0.009040000000000001, RU: 234e-5, SK: 0.04977, SL: 691e-5, SV: 0.0049700000000000005, TR: 0.01076, UK: 201e-5, ZH: 0.004880000000000001 } } }, timestamp: P7(n3) }, id: B9() }, i2 = C5({ url: "https://api.deepl.com/jsonrpc", clientVersion: t5, authorization: e3.authorization });
  return { url: `https://api.deepl.com/jsonrpc?client=${z5 + N7 + M5},${t5}`, headers: i2, body: J4(s6), method: "POST" };
}
function G7(e3) {
  let t5 = e3.split(".");
  if (t5.length <= 1)
    throw new Error("invlaid token");
  let n3 = t5[1];
  if (!n3)
    throw new Error("invalid base64 url token");
  let o4 = n3.replace(/-/g, "+").replace(/_/g, "/"), r = decodeURIComponent(globalThis.atob(o4).split("").map(function(a4) {
    return "%" + ("00" + a4.charCodeAt(0).toString(16)).slice(-2);
  }).join("")), s6 = JSON.parse(r), i2 = new Date(s6.exp * 1e3);
  return { accessToken: e3, accessTokenExpiresAt: i2.toISOString() };
}
var g5 = {}, w4 = {};
async function _3(e3, t5) {
  if (!e3)
    throw new Error("auth key is required");
  let { state: n3 } = t5, { refreshToken: o4, refreshTokenExpiresAt: r, refreshTokenChecksAt: s6 } = n3, [i2, a4] = T6(r);
  a4 || (a4 = T6(s6)[1]);
  let c5 = { refreshToken: o4, refreshTokenExpiresAt: r, refreshTokenChecksAt: s6 || (/* @__PURE__ */ new Date()).toISOString() };
  i2 || (c5 = await m3(e3, t5));
  let [p6, f4] = T6(c5.refreshTokenExpiresAt);
  a4 = f4, a4 || (a4 = T6(c5.refreshTokenChecksAt)[1]);
  let h4 = c5.refreshToken;
  if (g5[h4])
    return new Promise((u3, l3) => {
      g5[h4].push((k5, R5) => {
        k5 ? l3(k5) : u3(R5);
      });
    });
  g5[h4] = [];
  try {
    let u3 = await H7(h4, t5.onFetch), l3 = { state: { ...n3, ...c5, ...u3 }, shouldUpdateRefreshToken: a4 };
    return g5[h4].forEach((k5) => {
      k5(null, l3);
    }), delete g5[h4], l3;
  } catch (u3) {
    throw g5[h4].forEach((l3) => {
      l3(u3);
    }), delete g5[h4], u3;
  }
}
async function m3(e3, t5) {
  if (!e3)
    throw new Error("auth key is required");
  let { refreshTokenEndpoint: n3, onFetch: o4 } = t5;
  if (w4[e3])
    return new Promise((r, s6) => {
      w4[e3].push((i2, a4) => {
        i2 ? s6(i2) : r(a4);
      });
    });
  try {
    w4[e3] = [];
    let r = new URLSearchParams({ grant_type: "auth_key", auth_key: e3 }), s6 = new URL("/refresh_token?" + r.toString(), n3), i2 = await o4(s6.toString()), a4 = (/* @__PURE__ */ new Date()).getTime(), c5 = a4 + i2.refresh_token_expires_in * 1e3, p6 = a4 + i2.refresh_token_checks_in * 1e3, f4 = { refreshToken: i2.refresh_token, refreshTokenExpiresAt: new Date(c5).toISOString(), refreshTokenChecksAt: new Date(p6).toISOString() };
    return w4[e3].forEach((h4) => {
      h4(null, f4);
    }), delete w4[e3], f4;
  } catch (r) {
    throw w4[e3].forEach((s6) => {
      s6(r);
    }), delete w4[e3], r;
  }
}
async function H7(e3, t5) {
  if (!e3)
    throw new Error("refreshToken is required");
  let n3 = b4(), o4 = F7();
  if (!n3 && !o4) {
    await O4(400);
    let a4 = /* @__PURE__ */ new Date();
    return { accessToken: "test", accessTokenExpiresAt: new Date(a4.getTime() + 1e3 * 5).toISOString() };
  }
  let r = "https://w.deepl.com/oidc/token", s6 = await t5(r, { headers: C5({ url: r, contentType: "application/x-www-form-urlencoded" }), body: `grant_type=refresh_token&refresh_token=${e3}`, method: "POST" }), i2 = G7(s6.access_token);
  if (s6.expires_in) {
    let a4 = /* @__PURE__ */ new Date(), c5 = new Date(a4.getTime() + s6.expires_in * 1e3);
    i2.accessTokenExpiresAt = c5.toISOString();
  }
  return i2;
}
async function A4(e3, t5, n3) {
  if (!t5)
    throw new Error("body is required");
  let o4 = new URLSearchParams(t5), r = o4.getAll("text");
  if (r.length < 1)
    throw new Error("No text to translate");
  if (W6(r) > 5e3)
    throw new Error("text too long, the max length is 5000 characters.");
  let s6 = o4.get("target_lang");
  if (!s6)
    throw new Error("No target language");
  let i2 = o4.get("source_lang"), a4 = { ...q6({ texts: r, authorization: e3, target_lang: s6, source_lang: i2 }), responseType: "raw" }, c5 = b4(), p6 = F7();
  if (!c5 && !p6)
    return await O4(50), { translations: r.map((l3) => ({ text: "mock: " + l3, detected_source_language: "EN" })) };
  let f4 = await n3(a4.url, a4), h4 = JSON.parse(f4.body), u3 = [];
  if (h4.result && h4.result.texts)
    u3 = h4.result.texts.map((l3) => ({ text: l3.text, detected_source_language: h4.result.lang }));
  else
    throw new Error("No response from deepl api");
  return { translations: u3 };
}
function W6(e3) {
  let t5 = 0;
  for (let n3 of e3)
    t5 += n3.length;
  return t5;
}
async function X8(e3) {
  e3.body;
  let { url: t5, responseType: n3, ...o4 } = e3;
  n3 || (n3 = "json"), o4 = { redirect: "follow", ...o4 };
  let r = await Z5(t5, o4);
  if (r.ok && r.status >= 200 && r.status < 400)
    if (n3 === "json") {
      let s6 = await r.json();
      return E3.debug("response", JSON.stringify(s6, null, 2)), s6;
    } else {
      if (n3 === "text")
        return await r.text();
      if (n3 === "raw") {
        let s6 = await r.text(), i2 = Object.fromEntries([...r.headers.entries()]), a4 = r.url;
        return { body: s6, headers: i2, status: r.status, statusText: r.statusText, url: a4 };
      }
    }
  else {
    let s6;
    try {
      s6 = await r.text();
    } catch (i2) {
      E3.error("parse response failed", i2);
    }
    throw new Error(r.status + ": " + r.statusText || " " + s6 || "");
  }
}
async function Z5(e3, t5) {
  let n3 = 15e3;
  t5 && t5.timeout && (n3 = t5.timeout);
  let o4 = new AbortController(), r = setTimeout(() => o4.abort(), n3), s6 = await fetch(e3, { ...t5, signal: o4.signal });
  return clearTimeout(r), s6;
}
var Q6 = class {
  constructor(e3, t5) {
    this.state = {}, this.isStateChanged = !1, this.onFetch = (n3, o4) => X8({ url: n3, ...o4 }), this.refreshTokenEndpoint = "https://api.immersivetranslate.com", this.authKey = e3, t5 = t5 || {}, t5.state && (this.state = t5.state), t5.onFetch && (this.onFetch = t5.onFetch), t5.refreshTokenEndpoint && (this.refreshTokenEndpoint = t5.refreshTokenEndpoint), t5.onStateChange && (this.onStateChange = t5.onStateChange);
  }
  getState() {
    return this.state;
  }
  getIsStateChanged() {
    let e3 = this.isStateChanged;
    return this.isStateChanged = !1, e3;
  }
  setState(e3) {
    this.state = e3, this.isStateChanged = !0, this.onStateChange && this.onStateChange(e3);
  }
  async translateText(e3, t5, n3) {
    await this.updateToken();
    let o4 = new URLSearchParams();
    (Array.isArray(e3) ? e3 : [e3]).forEach((s6, i2) => {
      o4.append("text", s6);
    }), t5 && o4.append("source_lang", t5), n3 && o4.append("target_lang", n3);
    let r = await A4(this.state.accessToken, o4.toString(), this.onFetch);
    if (r && r.translations && r.translations.length > 0)
      return Array.isArray(e3) ? r.translations.map((s6) => ({ text: s6.text, detectedSourceLanguage: s6.detected_source_language })) : { text: r.translations[0].text, detectedSourceLanguage: r.translations[0].detected_source_language };
    throw new Error("No translation result");
  }
  async translateApi(e3) {
    return await this.updateToken(), await A4(this.state.accessToken, e3, this.onFetch);
  }
  async forceUpdateRefreshToken() {
    await m3(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((e3) => {
      this.setState({ ...this.state, ...e3 });
    });
  }
  onFetchTokenError(e3) {
    throw E3.error("onFetchTokenError", e3), e3 && e3.message && (e3.message.indexOf("401") > -1 || e3.message.indexOf("400") > -1) && this.setState({}), e3;
  }
  async updateToken() {
    let { accessTokenExpiresAt: e3 } = this.state, [t5, n3] = T6(e3);
    if (t5)
      n3 && _3(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then(({ state: o4, shouldUpdateRefreshToken: r }) => {
        this.setState({ ...this.state, ...o4 }), r && m3(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((s6) => {
          this.setState({ ...this.state, ...s6 });
        });
      }).catch((o4) => {
        this.onFetchTokenError(o4);
      });
    else
      try {
        let { state: o4, shouldUpdateRefreshToken: r } = await _3(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint });
        this.setState(o4), r && m3(this.authKey, { state: this.state, onFetch: this.onFetch, refreshTokenEndpoint: this.refreshTokenEndpoint }).then((s6) => {
          this.setState({ ...this.state, ...s6 });
        }).catch((s6) => {
          console.warn("fetch refresh token error", s6);
        });
      } catch (o4) {
        this.onFetchTokenError(o4);
      }
  }
};

// https://esm.sh/v113/bowser@2.11.0/deno/bowser.mjs
var S8 = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, p4 = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, a2 = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, l2 = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, h3 = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" }, s5 = class {
  static getFirstMatch(e3, t5) {
    let i2 = t5.match(e3);
    return i2 && i2.length > 0 && i2[1] || "";
  }
  static getSecondMatch(e3, t5) {
    let i2 = t5.match(e3);
    return i2 && i2.length > 1 && i2[2] || "";
  }
  static matchAndReturnConst(e3, t5, i2) {
    if (e3.test(t5))
      return i2;
  }
  static getWindowsVersionName(e3) {
    switch (e3) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(e3) {
    let t5 = e3.split(".").splice(0, 2).map((i2) => parseInt(i2, 10) || 0);
    if (t5.push(0), t5[0] === 10)
      switch (t5[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  static getAndroidVersionName(e3) {
    let t5 = e3.split(".").splice(0, 2).map((i2) => parseInt(i2, 10) || 0);
    if (t5.push(0), !(t5[0] === 1 && t5[1] < 5)) {
      if (t5[0] === 1 && t5[1] < 6)
        return "Cupcake";
      if (t5[0] === 1 && t5[1] >= 6)
        return "Donut";
      if (t5[0] === 2 && t5[1] < 2)
        return "Eclair";
      if (t5[0] === 2 && t5[1] === 2)
        return "Froyo";
      if (t5[0] === 2 && t5[1] > 2)
        return "Gingerbread";
      if (t5[0] === 3)
        return "Honeycomb";
      if (t5[0] === 4 && t5[1] < 1)
        return "Ice Cream Sandwich";
      if (t5[0] === 4 && t5[1] < 4)
        return "Jelly Bean";
      if (t5[0] === 4 && t5[1] >= 4)
        return "KitKat";
      if (t5[0] === 5)
        return "Lollipop";
      if (t5[0] === 6)
        return "Marshmallow";
      if (t5[0] === 7)
        return "Nougat";
      if (t5[0] === 8)
        return "Oreo";
      if (t5[0] === 9)
        return "Pie";
    }
  }
  static getVersionPrecision(e3) {
    return e3.split(".").length;
  }
  static compareVersions(e3, t5, i2 = !1) {
    let n3 = s5.getVersionPrecision(e3), u3 = s5.getVersionPrecision(t5), d5 = Math.max(n3, u3), m4 = 0, c5 = s5.map([e3, t5], (g6) => {
      let f4 = d5 - s5.getVersionPrecision(g6), A5 = g6 + new Array(f4 + 1).join(".0");
      return s5.map(A5.split("."), (M6) => new Array(20 - M6.length).join("0") + M6).reverse();
    });
    for (i2 && (m4 = d5 - Math.min(n3, u3)), d5 -= 1; d5 >= m4; ) {
      if (c5[0][d5] > c5[1][d5])
        return 1;
      if (c5[0][d5] === c5[1][d5]) {
        if (d5 === m4)
          return 0;
        d5 -= 1;
      } else if (c5[0][d5] < c5[1][d5])
        return -1;
    }
  }
  static map(e3, t5) {
    let i2 = [], n3;
    if (Array.prototype.map)
      return Array.prototype.map.call(e3, t5);
    for (n3 = 0; n3 < e3.length; n3 += 1)
      i2.push(t5(e3[n3]));
    return i2;
  }
  static find(e3, t5) {
    let i2, n3;
    if (Array.prototype.find)
      return Array.prototype.find.call(e3, t5);
    for (i2 = 0, n3 = e3.length; i2 < n3; i2 += 1) {
      let u3 = e3[i2];
      if (t5(u3, i2))
        return u3;
    }
  }
  static assign(e3, ...t5) {
    let i2 = e3, n3, u3;
    if (Object.assign)
      return Object.assign(e3, ...t5);
    for (n3 = 0, u3 = t5.length; n3 < u3; n3 += 1) {
      let d5 = t5[n3];
      typeof d5 == "object" && d5 !== null && Object.keys(d5).forEach((c5) => {
        i2[c5] = d5[c5];
      });
    }
    return e3;
  }
  static getBrowserAlias(e3) {
    return S8[e3];
  }
  static getBrowserTypeByAlias(e3) {
    return p4[e3] || "";
  }
}, o3 = /version\/(\d+(\.?_?\d+)+)/i, O5 = [{ test: [/googlebot/i], describe(r) {
  let e3 = { name: "Googlebot" }, t5 = s5.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/opera/i], describe(r) {
  let e3 = { name: "Opera" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/opr\/|opios/i], describe(r) {
  let e3 = { name: "Opera" }, t5 = s5.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/SamsungBrowser/i], describe(r) {
  let e3 = { name: "Samsung Internet for Android" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/Whale/i], describe(r) {
  let e3 = { name: "NAVER Whale Browser" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/MZBrowser/i], describe(r) {
  let e3 = { name: "MZ Browser" }, t5 = s5.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/focus/i], describe(r) {
  let e3 = { name: "Focus" }, t5 = s5.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/swing/i], describe(r) {
  let e3 = { name: "Swing" }, t5 = s5.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/coast/i], describe(r) {
  let e3 = { name: "Opera Coast" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(r) {
  let e3 = { name: "Opera Touch" }, t5 = s5.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/yabrowser/i], describe(r) {
  let e3 = { name: "Yandex Browser" }, t5 = s5.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/ucbrowser/i], describe(r) {
  let e3 = { name: "UC Browser" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/Maxthon|mxios/i], describe(r) {
  let e3 = { name: "Maxthon" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/epiphany/i], describe(r) {
  let e3 = { name: "Epiphany" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/puffin/i], describe(r) {
  let e3 = { name: "Puffin" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/sleipnir/i], describe(r) {
  let e3 = { name: "Sleipnir" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/k-meleon/i], describe(r) {
  let e3 = { name: "K-Meleon" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/micromessenger/i], describe(r) {
  let e3 = { name: "WeChat" }, t5 = s5.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/qqbrowser/i], describe(r) {
  let e3 = { name: /qqbrowserlite/i.test(r) ? "QQ Browser Lite" : "QQ Browser" }, t5 = s5.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/msie|trident/i], describe(r) {
  let e3 = { name: "Internet Explorer" }, t5 = s5.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/\sedg\//i], describe(r) {
  let e3 = { name: "Microsoft Edge" }, t5 = s5.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/edg([ea]|ios)/i], describe(r) {
  let e3 = { name: "Microsoft Edge" }, t5 = s5.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/vivaldi/i], describe(r) {
  let e3 = { name: "Vivaldi" }, t5 = s5.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/seamonkey/i], describe(r) {
  let e3 = { name: "SeaMonkey" }, t5 = s5.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/sailfish/i], describe(r) {
  let e3 = { name: "Sailfish" }, t5 = s5.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/silk/i], describe(r) {
  let e3 = { name: "Amazon Silk" }, t5 = s5.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/phantom/i], describe(r) {
  let e3 = { name: "PhantomJS" }, t5 = s5.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/slimerjs/i], describe(r) {
  let e3 = { name: "SlimerJS" }, t5 = s5.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(r) {
  let e3 = { name: "BlackBerry" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/(web|hpw)[o0]s/i], describe(r) {
  let e3 = { name: "WebOS Browser" }, t5 = s5.getFirstMatch(o3, r) || s5.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/bada/i], describe(r) {
  let e3 = { name: "Bada" }, t5 = s5.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/tizen/i], describe(r) {
  let e3 = { name: "Tizen" }, t5 = s5.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/qupzilla/i], describe(r) {
  let e3 = { name: "QupZilla" }, t5 = s5.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/firefox|iceweasel|fxios/i], describe(r) {
  let e3 = { name: "Firefox" }, t5 = s5.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/electron/i], describe(r) {
  let e3 = { name: "Electron" }, t5 = s5.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/MiuiBrowser/i], describe(r) {
  let e3 = { name: "Miui" }, t5 = s5.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/chromium/i], describe(r) {
  let e3 = { name: "Chromium" }, t5 = s5.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, r) || s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/chrome|crios|crmo/i], describe(r) {
  let e3 = { name: "Chrome" }, t5 = s5.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/GSA/i], describe(r) {
  let e3 = { name: "Google Search" }, t5 = s5.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test(r) {
  let e3 = !r.test(/like android/i), t5 = r.test(/android/i);
  return e3 && t5;
}, describe(r) {
  let e3 = { name: "Android Browser" }, t5 = s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/playstation 4/i], describe(r) {
  let e3 = { name: "PlayStation 4" }, t5 = s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/safari|applewebkit/i], describe(r) {
  let e3 = { name: "Safari" }, t5 = s5.getFirstMatch(o3, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/.*/i], describe(r) {
  let e3 = /^(.*)\/(.*) /, t5 = /^(.*)\/(.*)[ \t]\((.*)/, n3 = r.search("\\(") !== -1 ? t5 : e3;
  return { name: s5.getFirstMatch(n3, r), version: s5.getSecondMatch(n3, r) };
} }], F8 = O5, y4 = [{ test: [/Roku\/DVP/], describe(r) {
  let e3 = s5.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, r);
  return { name: l2.Roku, version: e3 };
} }, { test: [/windows phone/i], describe(r) {
  let e3 = s5.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, r);
  return { name: l2.WindowsPhone, version: e3 };
} }, { test: [/windows /i], describe(r) {
  let e3 = s5.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, r), t5 = s5.getWindowsVersionName(e3);
  return { name: l2.Windows, version: e3, versionName: t5 };
} }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(r) {
  let e3 = { name: l2.iOS }, t5 = s5.getSecondMatch(/(Version\/)(\d[\d.]+)/, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/macintosh/i], describe(r) {
  let e3 = s5.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, r).replace(/[_\s]/g, "."), t5 = s5.getMacOSVersionName(e3), i2 = { name: l2.MacOS, version: e3 };
  return t5 && (i2.versionName = t5), i2;
} }, { test: [/(ipod|iphone|ipad)/i], describe(r) {
  let e3 = s5.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, r).replace(/[_\s]/g, ".");
  return { name: l2.iOS, version: e3 };
} }, { test(r) {
  let e3 = !r.test(/like android/i), t5 = r.test(/android/i);
  return e3 && t5;
}, describe(r) {
  let e3 = s5.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, r), t5 = s5.getAndroidVersionName(e3), i2 = { name: l2.Android, version: e3 };
  return t5 && (i2.versionName = t5), i2;
} }, { test: [/(web|hpw)[o0]s/i], describe(r) {
  let e3 = s5.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, r), t5 = { name: l2.WebOS };
  return e3 && e3.length && (t5.version = e3), t5;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(r) {
  let e3 = s5.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, r) || s5.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, r) || s5.getFirstMatch(/\bbb(\d+)/i, r);
  return { name: l2.BlackBerry, version: e3 };
} }, { test: [/bada/i], describe(r) {
  let e3 = s5.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, r);
  return { name: l2.Bada, version: e3 };
} }, { test: [/tizen/i], describe(r) {
  let e3 = s5.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, r);
  return { name: l2.Tizen, version: e3 };
} }, { test: [/linux/i], describe() {
  return { name: l2.Linux };
} }, { test: [/CrOS/], describe() {
  return { name: l2.ChromeOS };
} }, { test: [/PlayStation 4/], describe(r) {
  let e3 = s5.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, r);
  return { name: l2.PlayStation4, version: e3 };
} }], B10 = [{ test: [/googlebot/i], describe() {
  return { type: "bot", vendor: "Google" };
} }, { test: [/huawei/i], describe(r) {
  let e3 = s5.getFirstMatch(/(can-l01)/i, r) && "Nova", t5 = { type: a2.mobile, vendor: "Huawei" };
  return e3 && (t5.model = e3), t5;
} }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe() {
  return { type: a2.tablet, vendor: "Nexus" };
} }, { test: [/ipad/i], describe() {
  return { type: a2.tablet, vendor: "Apple", model: "iPad" };
} }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe() {
  return { type: a2.tablet, vendor: "Apple", model: "iPad" };
} }, { test: [/kftt build/i], describe() {
  return { type: a2.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
} }, { test: [/silk/i], describe() {
  return { type: a2.tablet, vendor: "Amazon" };
} }, { test: [/tablet(?! pc)/i], describe() {
  return { type: a2.tablet };
} }, { test(r) {
  let e3 = r.test(/ipod|iphone/i), t5 = r.test(/like (ipod|iphone)/i);
  return e3 && !t5;
}, describe(r) {
  let e3 = s5.getFirstMatch(/(ipod|iphone)/i, r);
  return { type: a2.mobile, vendor: "Apple", model: e3 };
} }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe() {
  return { type: a2.mobile, vendor: "Nexus" };
} }, { test: [/[^-]mobi/i], describe() {
  return { type: a2.mobile };
} }, { test(r) {
  return r.getBrowserName(!0) === "blackberry";
}, describe() {
  return { type: a2.mobile, vendor: "BlackBerry" };
} }, { test(r) {
  return r.getBrowserName(!0) === "bada";
}, describe() {
  return { type: a2.mobile };
} }, { test(r) {
  return r.getBrowserName() === "windows phone";
}, describe() {
  return { type: a2.mobile, vendor: "Microsoft" };
} }, { test(r) {
  let e3 = Number(String(r.getOSVersion()).split(".")[0]);
  return r.getOSName(!0) === "android" && e3 >= 3;
}, describe() {
  return { type: a2.tablet };
} }, { test(r) {
  return r.getOSName(!0) === "android";
}, describe() {
  return { type: a2.mobile };
} }, { test(r) {
  return r.getOSName(!0) === "macos";
}, describe() {
  return { type: a2.desktop, vendor: "Apple" };
} }, { test(r) {
  return r.getOSName(!0) === "windows";
}, describe() {
  return { type: a2.desktop };
} }, { test(r) {
  return r.getOSName(!0) === "linux";
}, describe() {
  return { type: a2.desktop };
} }, { test(r) {
  return r.getOSName(!0) === "playstation 4";
}, describe() {
  return { type: a2.tv };
} }, { test(r) {
  return r.getOSName(!0) === "roku";
}, describe() {
  return { type: a2.tv };
} }], k4 = [{ test(r) {
  return r.getBrowserName(!0) === "microsoft edge";
}, describe(r) {
  if (/\sedg\//i.test(r))
    return { name: h3.Blink };
  let t5 = s5.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, r);
  return { name: h3.EdgeHTML, version: t5 };
} }, { test: [/trident/i], describe(r) {
  let e3 = { name: h3.Trident }, t5 = s5.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test(r) {
  return r.test(/presto/i);
}, describe(r) {
  let e3 = { name: h3.Presto }, t5 = s5.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test(r) {
  let e3 = r.test(/gecko/i), t5 = r.test(/like gecko/i);
  return e3 && !t5;
}, describe(r) {
  let e3 = { name: h3.Gecko }, t5 = s5.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }, { test: [/(apple)?webkit\/537\.36/i], describe() {
  return { name: h3.Blink };
} }, { test: [/(apple)?webkit/i], describe(r) {
  let e3 = { name: h3.WebKit }, t5 = s5.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, r);
  return t5 && (e3.version = t5), e3;
} }], b5 = class {
  constructor(e3, t5 = !1) {
    if (e3 == null || e3 === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = e3, this.parsedResult = {}, t5 !== !0 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(e3) {
    return e3.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    let e3 = s5.find(F8, (t5) => {
      if (typeof t5.test == "function")
        return t5.test(this);
      if (t5.test instanceof Array)
        return t5.test.some((i2) => this.test(i2));
      throw new Error("Browser's test function is not valid");
    });
    return e3 && (this.parsedResult.browser = e3.describe(this.getUA())), this.parsedResult.browser;
  }
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  getBrowserName(e3) {
    return e3 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    let e3 = s5.find(y4, (t5) => {
      if (typeof t5.test == "function")
        return t5.test(this);
      if (t5.test instanceof Array)
        return t5.test.some((i2) => this.test(i2));
      throw new Error("Browser's test function is not valid");
    });
    return e3 && (this.parsedResult.os = e3.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(e3) {
    let { name: t5 } = this.getOS();
    return e3 ? String(t5).toLowerCase() || "" : t5 || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(e3 = !1) {
    let { type: t5 } = this.getPlatform();
    return e3 ? String(t5).toLowerCase() || "" : t5 || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    let e3 = s5.find(B10, (t5) => {
      if (typeof t5.test == "function")
        return t5.test(this);
      if (t5.test instanceof Array)
        return t5.test.some((i2) => this.test(i2));
      throw new Error("Browser's test function is not valid");
    });
    return e3 && (this.parsedResult.platform = e3.describe(this.getUA())), this.parsedResult.platform;
  }
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  getEngineName(e3) {
    return e3 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    let e3 = s5.find(k4, (t5) => {
      if (typeof t5.test == "function")
        return t5.test(this);
      if (t5.test instanceof Array)
        return t5.test.some((i2) => this.test(i2));
      throw new Error("Browser's test function is not valid");
    });
    return e3 && (this.parsedResult.engine = e3.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  getResult() {
    return s5.assign({}, this.parsedResult);
  }
  satisfies(e3) {
    let t5 = {}, i2 = 0, n3 = {}, u3 = 0;
    if (Object.keys(e3).forEach((m4) => {
      let c5 = e3[m4];
      typeof c5 == "string" ? (n3[m4] = c5, u3 += 1) : typeof c5 == "object" && (t5[m4] = c5, i2 += 1);
    }), i2 > 0) {
      let m4 = Object.keys(t5), c5 = s5.find(m4, (f4) => this.isOS(f4));
      if (c5) {
        let f4 = this.satisfies(t5[c5]);
        if (f4 !== void 0)
          return f4;
      }
      let g6 = s5.find(m4, (f4) => this.isPlatform(f4));
      if (g6) {
        let f4 = this.satisfies(t5[g6]);
        if (f4 !== void 0)
          return f4;
      }
    }
    if (u3 > 0) {
      let m4 = Object.keys(n3), c5 = s5.find(m4, (g6) => this.isBrowser(g6, !0));
      if (c5 !== void 0)
        return this.compareVersion(n3[c5]);
    }
  }
  isBrowser(e3, t5 = !1) {
    let i2 = this.getBrowserName().toLowerCase(), n3 = e3.toLowerCase(), u3 = s5.getBrowserTypeByAlias(n3);
    return t5 && u3 && (n3 = u3.toLowerCase()), n3 === i2;
  }
  compareVersion(e3) {
    let t5 = [0], i2 = e3, n3 = !1, u3 = this.getBrowserVersion();
    if (typeof u3 == "string")
      return e3[0] === ">" || e3[0] === "<" ? (i2 = e3.substr(1), e3[1] === "=" ? (n3 = !0, i2 = e3.substr(2)) : t5 = [], e3[0] === ">" ? t5.push(1) : t5.push(-1)) : e3[0] === "=" ? i2 = e3.substr(1) : e3[0] === "~" && (n3 = !0, i2 = e3.substr(1)), t5.indexOf(s5.compareVersions(u3, i2, n3)) > -1;
  }
  isOS(e3) {
    return this.getOSName(!0) === String(e3).toLowerCase();
  }
  isPlatform(e3) {
    return this.getPlatformType(!0) === String(e3).toLowerCase();
  }
  isEngine(e3) {
    return this.getEngineName(!0) === String(e3).toLowerCase();
  }
  is(e3, t5 = !1) {
    return this.isBrowser(e3, t5) || this.isOS(e3) || this.isPlatform(e3);
  }
  some(e3 = []) {
    return e3.some((t5) => this.is(t5));
  }
}, w5 = b5, v4 = class {
  static getParser(e3, t5 = !1) {
    if (typeof e3 != "string")
      throw new Error("UserAgent should be a string");
    return new w5(e3, t5);
  }
  static parse(e3) {
    return new w5(e3).getResult();
  }
  static get BROWSER_MAP() {
    return p4;
  }
  static get ENGINE_MAP() {
    return h3;
  }
  static get OS_MAP() {
    return l2;
  }
  static get PLATFORMS_MAP() {
    return a2;
  }
}, U7 = v4;

// deps.ts
var toast = Ye2.alert;

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
  "browser.donateContext": "\u4E86\u89E3\u8D5E\u52A9\u798F\u5229",
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
  donateCafe: "\u4EF7\u683C",
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
  moreOptions: "\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",
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
  aboutLabel: "\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9\u798F\u5229",
  "browser.openAboutPage": "\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9\u798F\u5229",
  aboutIntro: "\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002<br/><br/>\u514D\u8D39\u5DE5\u5177\u4F5C\u8005\u4F3C\u4E4E\u53EF\u4EE5\u548C\u8D5E\u52A9\u8005\u4E4B\u95F4\u5EFA\u7ACB\u4E00\u79CD\u53CC\u8D62\u7684\u5173\u7CFB\uFF01\u6211\u4E3A\u8D5E\u52A9\u8005\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9650\u65F6\u798F\u5229\uFF0C\u6BD4\u5982<6>DeepL\u7FFB\u8BD1\u670D\u52A1</6>\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u4E86\u89E3\u8D5E\u52A9\u65B9\u6848</2>\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",
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
  resetToDefaultSettings: "\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",
  isTranslateTitle: "\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",
  isTranslateTitleDescription: "\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",
  verifyService: "\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",
  verified: "\u9A8C\u8BC1\u6210\u529F",
  "field.model": "\u6A21\u578B",
  "field.translationEngine": "\u7FFB\u8BD1\u5F15\u64CE",
  "field.limitPerMinute": "\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570",
  "field.maxTextLengthPerRequest": "\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6",
  "field.maxTextGroupLengthPerRequest": "\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570",
  "field.apiUrl": "\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740",
  "description.limitPerMinute": "\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\uFF0COpenAI \u8BD5\u7528\u7248\u7684\u8BF7\u6C42\u9650\u5236\u4E3A\u6BCF\u5206\u949F 10 \uFF0C\u4ED8\u8D39\u7248\u53EF\u4EE5\u5EFA\u8BAE\u6539\u4E3A1500\u4EE5\u4E0A",
  "description.prompt": "\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI",
  "description.maxTextLengthPerRequest": "\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6",
  "description.systemPrompt": "\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00",
  "description.model": "OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49",
  "description.maxTextGroupLengthPerRequest": "\u6BCF\u6B21\u53D1\u9001\u7ED9 OpenAI \u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u8BBE\u7F6E\u4E3A 1 \u4E2A\u6BB5\u843D\u65F6\uFF0C\u4F53\u9A8C\u6700\u597D",
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
  browserShortcutsNoteForChrome: "Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",
  browserShortcutsSucks: "\u8B8A\u66F4\u5FEB\u901F\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u70BA\uFF1A",
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
  "browser.donateContext": "\u4E86\u89E3\u8D0A\u52A9\u798F\u5229",
  confirmResetConfig: "\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",
  translationLineBreakSettingTitle: "\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",
  smartLineBreak: "\u667A\u6167\u63DB\u884C",
  alwaysLineBreak: "\u7E3D\u662F\u63DB\u884C",
  isShowContextMenu: "\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",
  toggleBeta: "\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",
  betaDescription: "\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",
  translationLineBreakSettingDescription: "\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",
  tempTranslateDomainTitle: "\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",
  tempTranslateDomainDescription: "\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",
  xMinutes: "{count} \u5206\u9418",
  disabled: "\u505C\u7528",
  changelog: "\u66F4\u65B0\u8A18\u9304",
  toggleTranslatePageWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  toggleTranslationMaskWhenThreeFingersOnTheScreen: "\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",
  addUrlDescription: "\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",
  general: "\u57FA\u672C\u8A2D\u5B9A",
  clickToExpandConfig: "\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",
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
  goAdvancedInterfaceSettings: "\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",
  advanced: "\u9032\u968E\u8A2D\u5B9A",
  advancedDescription: "\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",
  developer: "\u958B\u767C\u8005\u8A2D\u5B9A",
  donateCafe: "\u50F9\u683C",
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
  "select translation service": "\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",
  language: "\u8A9E\u8A00",
  "show-original": "\u986F\u793A\u539F\u6587",
  translate: "\u7FFB\u8B6F",
  Translated: "\u5DF2\u7FFB\u8B6F",
  Translating: "\u6B63\u5728\u7FFB\u8B6F",
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
  "translationServices.papago": "Papago \u7FFB\u8B6F",
  "translationServices.d": "Deepl(Alpha)",
  "translationServices.dpro": "D Pro (Canary)",
  "translationServices.openai": "OpenAI",
  "translate title": "\u7FFB\u8B6F\u9801\u9762\u6A19\u984C",
  "always languages": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",
  neverTranslateLanguagesLabel: "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",
  neverTranslateTheFollowingLanguagesDescription: "\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",
  enableUserscriptPagePopup: "\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",
  enableUserscriptPagePopupDescription: "\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B",
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
  aboutIntro: "\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u63F4\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002<br/><br/>\u514D\u8CBB\u5DE5\u5177\u4F5C\u8005\u4F3C\u4E4E\u53EF\u4EE5\u548C\u8B9A\u52A9\u8005\u4E4B\u9593\u5EFA\u7ACB\u4E00\u7A2E\u96D9\u8D0F\u7684\u95DC\u4FC2\uFF01\u6211\u70BA\u8D0A\u52A9\u8005\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9650\u6642\u798F\u5229\uFF0C\u6BD4\u5982<6>DeepL\u7FFB\u8B6F\u670D\u52D9</6>\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u64CA\u9019\u88E1\u4E86\u89E3\u8D0A\u52A9\u65B9\u6848</2>\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",
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
  "field.apiUrl": "\u81EA\u8A02 API \u4F4D\u5740",
  "description.limitPerMinute": "\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\uFF0C\u9810\u8A2D\u8A2D\u5B9A\u70BA OpenAI \u8A66\u7528\u7248\u7684\u8981\u6C42\u9650\u5236",
  "description.prompt": "\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI",
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
  "browser.donateContext": "Sponsor Benefits",
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
  donateCafe: "Pricing",
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
  moreOptions: "Expand more custom settings",
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
  "translationTheme.marker": "Marker",
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
  "field.apiUrl": "Custom API interface address",
  "description.limitPerMinute": "The number of requests exceeding this limit will be temporarily disabled until the next minute, set as the request limit for the OpenAI trial version by default",
  "description.prompt": "Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message",
  "description.maxTextLengthPerRequest": "By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed",
  enabledExtension: "Enable extensions",
  clickToDisableExtension: "Click to disable extension",
  clickToEnableExtension: "Click to enable the extension",
  hasBeenDisabled: "Disabled",
  "show password": "Show password",
  resetToDefaultSettings: "Reset to default settings"
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
var brandIdForJs = "immersiveTranslate", GOOGLE_CLIENT_ID = "759003177173-mfm15s5nd77vfmo6e7lanof1emnanf0e.apps.googleusercontent.com", GOOGLE_ACCESS_TOKEN_KEY = brandIdForJs + "GoogleAccessToken", AUTH_FLOW_FLAG = brandIdForJs + "AuthFlow", LATEST_FILE_NAME = "immersive-translate-config-latest.json", AUTH_STATE_FLAG = brandIdForJs + "AuthState", iframeMessageIdentifier = brandIdForJs + "IframeMessage", iframeMessageRateIdentifier = brandIdForJs + "WaitForRateLimit", documentMessageTypeIdentifierForAsk = brandIdForJs + "DocumentMessageAsk", documentMessageTypeIdentifierForTellThirdParty = brandIdForJs + "DocumentMessageTellThirdParty", documentMessageTypeIdentifierForThirdPartyTell = brandIdForJs + "DocumentMessageThirdPartyTell", documentMessageTypeIdentifierForHandler = brandIdForJs + "DocumentMessageHandler", targetContainerElementAttributeName = `${brandIdForJs}Container`, specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`, buildinConfigStorageKey = "buildinConfig", localConfigStorageKey = "localConfig", contextOpenOptionsMenuId = "openOptionsPage";
var contextTranslateLocalPdfFileMenuId = "translateLocalPdfFile", contextDonateMenuId = "donateContext", contextOpenLocalEbookViewer = "openEbookViewer", contextOpenLocalEbookBuilder = "openEbookBuilder", pageTranslatedStatusEventName = `${brandIdForJs}PageTranslatedStatus`, pageUrlChangedEventName = `${brandIdForJs}PageUrlChanged`, userscriptCommandEventName = `${brandIdForJs}ReceiveCommand`, popupReceiveMessageEventName = `${brandIdForJs}PopupReceiveMessage`, hostname = "immersive-translate.owenyoung.com", homepage = `https://${hostname}/`, buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`, sourceElementMarkAttributeName = `${brandIdForJs}Mark`, sourceElementEffectAttributeNameForJs = "immersiveTranslateEffect", elementMarkRootKey = `${brandIdForJs}Root`, sourceElementEffectAttributeName = `data-${brandId}-effect`, sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`, sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`, sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`, sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`, sourceElementExcludeAttributeNameForSelector = `data-${brandId}-exclude-mark`, sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`, sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`, sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`, sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`, sourceElementLeft = `${brandIdForJs}Left`, sourceElementRight = `${brandIdForJs}Right`, sourceElementWidth = `${brandIdForJs}Width`, sourceElementHeight = `${brandIdForJs}Height`, sourceElementTop = `${brandIdForJs}Top`, sourceElementFontSize = `${brandIdForJs}FontSize`;
var sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`, defaultPlaceholderDelimiters = ["@", "#"], titleDelimiters = " --- ", translationTextSeparator = `
`, translationTargetElementWrapperClass = `${brandId}-target-wrapper`, translationPdfTargetContainerClass = `${brandId}-pdf-target-container`, translationTargetInnerElementWrapperClass = `${brandId}-target-inner`, translationSourceElementsWrapperClass = `${brandId}-source-wrapper`, translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`, translationFrameRootThemeAttributeName = `${brandId}-root-translation-theme`, translationFrameRootThemeAttributeNameForJs = `${brandIdForJs}RootTranslationTheme`, translationTargetTranslationElementVerticalBlockClass = `${brandId}-target-translation-vertical-block-wrapper`, translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`, translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`, translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`, translationThemes = [
  "none",
  "dashed",
  "underline",
  "dashedBorder",
  "solidBorder",
  "mask",
  "dotted",
  "dividingLine",
  "highlight",
  "marker",
  "marker2",
  "blockquote",
  "weakening",
  "grey",
  "paper",
  "italic",
  "bold",
  "thinDashed",
  "wavy",
  "nativeDotted",
  "nativeDashed",
  "nativeUnderline"
], themeOptions = {
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
  marker: [{
    name: "backgroundColor",
    required: !1,
    type: "color"
  }],
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
var allSupportedShortcuts = [
  "toggleTranslatePage",
  "toggleTranslateTheWholePage",
  "toggleTranslateToThePageEndImmediately",
  "toggleTranslateTheMainPage",
  "toggleTranslationMask"
], buildinExcludeUrls = [
  "https://immersive-translate.owenyoung.com/options/",
  "https://immersive-translate.owenyoung.com/auth-done/",
  "http://localhost:8000/dist/userscript/options/",
  "http://localhost:8000/auth-done/",
  "http://192.168.50.9:8000/dist/userscript/options/",
  "https://www.deepl.com/translator",
  "translate.google.com"
], sampleSourceText = "Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.", sampleTargetText = "\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002", fallbackLanguage = "zh-CN", telegramGroupLink = "https://t.me/+rq848Z09nehlOTgx", openlProps = [
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
        required: !1,
        type: "password"
      },
      {
        name: "model",
        labelKey: "field.model",
        descriptionKey: "description.model",
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
        default: 1500
      },
      {
        name: "maxTextLengthPerRequest",
        required: !1,
        labelKey: "field.maxTextLengthPerRequest",
        descriptionKey: "description.maxTextLengthPerRequest",
        type: "number",
        default: 1200,
        optional: !0
      },
      {
        name: "maxTextGroupLengthPerRequest",
        required: !1,
        labelKey: "field.maxTextGroupLengthPerRequest",
        descriptionKey: "description.maxTextGroupLengthPerRequest",
        type: "number",
        default: 1,
        optional: !0
      },
      {
        name: "apiUrl",
        labelKey: "field.apiUrl",
        required: !1,
        type: "text",
        default: "https://api.openai.com/v1/chat/completions",
        optional: !0
      },
      {
        name: "systemPrompt",
        label: "System Prompt",
        required: !1,
        descriptionKey: "description.systemPrompt",
        type: "text",
        optional: !0,
        default: "You are a translation engine, you can only translate text and cannot interpret it, and do not explain."
      },
      {
        name: "prompt",
        label: "Prompt",
        required: !1,
        descriptionKey: "description.prompt",
        type: "textarea",
        default: "Translate the text below to {{to}}:\n\n```\n{{text}}\n```",
        optional: !0
      }
    ]
  },
  youdao: {
    name: "Youdao",
    homepage: "https://immersive-translate.owenyoung.com/services/youdao",
    docUrl: "https://immersive-translate.owenyoung.com/services/youdao",
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
  let allHeaders = root2.querySelectorAll("header"), main2 = root2.querySelectorAll("main"), headers3 = [];
  for (let header of allHeaders)
    main2.length > 0 && main2[0].contains(header) || headers3.push(header);
  for (let i2 = 0; i2 < array.length; i2++) {
    let a4 = array[i2].element;
    for (let j6 = i2 + 1; j6 < array.length; j6++) {
      let b6 = array[j6].element;
      if (a4.contains(b6))
        array.splice(j6, 1), j6--;
      else if (b6.contains(a4)) {
        array.splice(i2, 1), i2--;
        break;
      } else
        a4 === b6 && (array.splice(j6, 1), j6--);
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
  return nextNode && nextNode.nodeType === Node.TEXT_NODE && nextNode.textContent && nextNode.textContent?.length > 0 ? isPreWhitespace ? nextNode.textContent : " " : nextNode && nextNode.nodeType === Node.ELEMENT_NODE ? " " : null;
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
  for (let e3 of elements)
    if (e3 === element)
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
function getAllIframeMainText(root2) {
  let iframes = root2.querySelectorAll("iframe"), text = "";
  for (let i2 = 0; i2 < iframes.length; i2++) {
    let doc = iframes[i2].contentDocument;
    if (doc && (text += getMainText(doc.body), text.length > 2e3))
      break;
  }
  return text;
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
    styleElement.textContent = css, rootDocument.head.appendChild(styleElement);
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
function hexToRgb(hexValue) {
  let hex2 = hexValue.replace("#", ""), r = parseInt(hex2.substring(0, 2), 16), g6 = parseInt(hex2.substring(2, 4), 16), b6 = parseInt(hex2.substring(4, 6), 16);
  return { r, g: g6, b: b6 };
}

// dom/apply_user_config_css.ts
function applyUserConfigCss(root2, translationTheme, translationThemePatternConfig, remove) {
  let theme = translationTheme, props = themeOptions[theme] || [], injectedCss = "";
  root2 && props && props.length > 0 && props.forEach((prop) => {
    let { name } = prop;
    if (root2 && translationThemePatternConfig && translationThemePatternConfig[name]) {
      let value = translationThemePatternConfig[name];
      if (["borderRadius"].includes(name) && (value += "px"), injectedCss += `--immersive-translate-theme-${theme}-${name}: ${value};
`, translationTheme === "marker" && name === "backgroundColor" && typeof value == "string") {
        let { r, g: g6, b: b6 } = hexToRgb(value);
        injectedCss += `--immersive-translate-theme-${theme}-${name}-rgb: ${r}, ${g6}, ${b6};
`;
      }
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

// https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
var a3 = 0;
function p5(n3, s6, t5, f4, u3) {
  var r, o4, _4 = {};
  for (o4 in s6)
    o4 == "ref" ? r = s6[o4] : _4[o4] = s6[o4];
  var e3 = { type: n3, props: _4, key: t5, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a3, __source: u3, __self: f4 };
  if (typeof n3 == "function" && (r = n3.defaultProps))
    for (o4 in r)
      _4[o4] === void 0 && (_4[o4] = r[o4]);
  return d.vnode && d.vnode(e3), e3;
}

// components/switch.tsx
function Switch({
  value,
  defaultCase = null,
  cases
}) {
  return value == null ? null : /* @__PURE__ */ p5(L, { children: cases[value] != null ? cases[value] : defaultCase });
}

// hooks/use_route.ts
function useRoute() {
  let [route, setRoute] = P2(location.hash);
  return j2(() => {
    let updateRoute = () => setRoute(location.hash);
    return globalThis.addEventListener("hashchange", updateRoute, !1), () => {
      globalThis.removeEventListener("hashchange", updateRoute);
    };
  }, []), route;
}

// dom/toast.ts
function success(text) {
  toast({
    type: "success",
    text
  });
}
function error(text) {
  toast({
    type: "error",
    text
  });
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
function isChrome() {
  return isBrowser(CHROME);
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
  let [INITIAL_VALUE3] = P2(() => typeof initialValue == "function" ? initialValue() : initialValue), [STORAGE_AREA] = P2(storageArea), [state, setState] = P2(INITIAL_VALUE3), [isPersistent, setIsPersistent] = P2(!1), [error2, setError] = P2("");
  j2(() => {
    storage.get(key, INITIAL_VALUE3, STORAGE_AREA).then((res) => {
      res[key] && setState(res[key]), setIsPersistent(!0), setError("");
    }).catch((error3) => {
      setIsPersistent(!1), setError(error3);
    });
  }, [key, INITIAL_VALUE3, STORAGE_AREA]);
  let updateValue = L2(
    // @ts-ignore: npm package is not typed
    (newValue) => {
      let toStore = typeof newValue == "function" ? newValue(state) : newValue;
      log_default.debug("new settings", toStore), storage.set(key, toStore, STORAGE_AREA).then(() => {
        setState(toStore), setIsPersistent(!0), setError("");
      }).catch((error3) => {
        setState(toStore), setIsPersistent(!1), setError(error3);
      });
    },
    [STORAGE_AREA, key, state]
  );
  return [state, updateValue, isPersistent, error2];
}

// libs/use-chrome-storage/createChromeStorageStateHook.ts
function createChromeStorageStateHook(key, initialValue, storageArea) {
  let consumers = [];
  return function() {
    let [value, setValue, isPersistent, error2] = useChromeStorage(
      key,
      initialValue,
      storageArea
    ), setValueAll = L2((newValue) => {
      for (let consumer of consumers)
        consumer(newValue);
    }, []);
    return j2(() => (consumers.push(setValue), () => {
      consumers.splice(consumers.indexOf(setValue), 1);
    }), [setValue]), [value, setValueAll, isPersistent, error2];
  };
}

// libs/use-chrome-storage/mod.ts
function createChromeStorageStateHookLocal(key, initialValue) {
  return createChromeStorageStateHook(key, initialValue, "local");
}
function createChromeStorageStateHookSync(key, initialValue) {
  return createChromeStorageStateHook(key, initialValue, "sync");
}

// hooks/use_user_config.ts
var SETTINGS_KEY = "userConfig", INITIAL_VALUE = {}, rawUseUserConfig = createChromeStorageStateHookSync(
  SETTINGS_KEY,
  INITIAL_VALUE
);
function useUserConfig() {
  let [value, setValue, isPersistent, error2] = rawUseUserConfig(), formatSetValue = L2((newValue) => {
    let toStore = typeof newValue == "function" ? newValue(value) : newValue;
    toStore && (toStore.updatedAt = (/* @__PURE__ */ new Date()).toISOString()), setValue(toStore);
  }, [value]);
  return [value, formatSetValue, isPersistent, error2, setValue];
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
      immediateTranslationTextCountForImmersiveDeepl: 5e4,
      placeholderDelimiters: ["{", "}"]
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
      limit: 1500,
      maxTextGroupLengthPerRequest: 1,
      prompt: "Do not explain, translate the text below to {{to}}:",
      newlinePlaceholderDelimiters: [
        `

-|`,
        `|-

`,
        `
?
?-\\|\\d+\\|-
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
    useIframePostMessage: !0,
    injectedCss: [],
    isEbook: !1,
    isEbookBuilder: !1,
    waitForSelectors: [],
    waitForSelectorsTimeout: 3e3,
    minZIndex: 0,
    initTranslationServiceAsSoonAsPossible: !0,
    targetWrapperTag: "font",
    additionalInjectedCss: [],
    isTranslateTitle: !0,
    languageDetectMinTextCount: 50,
    wrapperPrefix: "smart",
    wrapperSuffix: "smart",
    isPdf: !1,
    isTransformPreTagNewLine: !1,
    urlChangeDelay: 20,
    mutationChangeDelay: 10,
    mainFrameMinTextCount: 50,
    mainFrameMinWordCount: 5,
    visibleDelay: 0,
    additionalStayOriginalSelectors: [
      "span.katex",
      ".notranslate",
      ".MathJax_Preview",
      ".MathJax",
      ".mwe-math-element"
    ],
    translationBlockStyle: "",
    isShowUserscriptPagePopup: !0,
    observeUrlChange: !1,
    paragraphMinTextCount: 18,
    paragraphMinWordCount: 3,
    shadowRootSelectors: [],
    blockMinTextCount: 32,
    blockMinWordCount: 5,
    containerMinTextCount: 18,
    containerMinWordCount: 3,
    lineBreakMaxTextCount: 0,
    globalAttributes: {},
    globalMeta: {},
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
      "[spellcheck=false]",
      ".prism-code",
      "[role=code]",
      "#omni-extension",
      ".omni-item",
      "div[data-paste-markdown-skip]",
      "table.highlight",
      "div[class^=codeBlockContent]",
      "div[class^=codeBlockLines]",
      "div[class^=token-line]"
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
      "XQDD_HIGHLIGHT_NEW_WORD",
      "NOBR"
    ],
    additionalInlineTags: [],
    extraInlineSelectors: [],
    additionalInlineSelectors: [".MathJax_Preview", ".MathJax"],
    extraBlockSelectors: [
      "turbo-frame",
      "readme-toc",
      "#hs_cos_wrapper_post_body",
      "#hs_cos_wrapper_post_body"
    ],
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
      selectorMatches: "div.simpread-read-root.simpread-read-root-show > sr-read",
      mainFrameSelector: "div.simpread-read-root.simpread-read-root-show > sr-read"
    },
    {
      matches: ["moz-extension://*/pdf/index.html*"],
      isPdf: !0,
      isTranslateTitle: !1,
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
      matches: ["*://*/*.txt", "file://*/*.txt"],
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
      matches: [
        "arad.hange.jp",
        "arad.nexon.co.jp",
        "oapi.dingtalk.com",
        "login.dingtalk.com"
      ],
      useIframePostMessage: !1
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
        "p.q-text"
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
      excludeMatches: ["https://www.reddit.com/r/*/wiki/*"],
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
        "https://github.com/settings/profile",
        "https://github.com/*/*/settings"
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
        "yt-formatted-string.ytd-transcript-segment-renderer",
        "#description-inline-expander > yt-attributed-string > span"
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
        "span#video-title",
        "#description-inline-expander > yt-attributed-string > span"
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
      excludeSelectors: [".jHAG3.XG5Jd", ".OZZZK", ".lDdSm"],
      selectors: ["[role=region]"]
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
      isTranslateTitle: !1,
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
      isTranslateTitle: !1,
      selectors: [
        ".text-content",
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
      additionalSelectors: ["span.break-words > span > span[dir=ltr]"]
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
      normalizeBody: "body",
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
      additionalSelectors: ["h1", ".article__subhead"]
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
      atomicBlockSelectors: [".core-info-cell > div.name"],
      globalStyles: {
        ".item-details-control-root.ux-item-shortdesc": "height: unset; overflow: visible; max-height:unset;"
      }
    },
    {
      matches: "www.bloomberg.com",
      urlChangeDelay: 2e3,
      excludeSelectors: [".ticker-bar"]
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
      matches: "te.legra.ph",
      normalizeBody: "div.ql-editor[contenteditable='false']",
      urlChangeDelay: 500
    },
    {
      matches: ["telegra.ph"],
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
      extraInlineSelectors: [".pulldown"],
      additionalSelectors: [".game_page_autocollapse_ctn iframe"],
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
      excludeSelectors: ["svg"]
    },
    {
      matches: "https://platform.openai.com/account/api-keys*",
      urlChangeDelay: 1500
    },
    {
      matches: "https://pkg.go.dev/std",
      selectors: ["td.UnitDirectories-desktopSynopsis"]
    },
    {
      matches: "https://pkg.go.dev/*",
      selectors: ["div.UnitDetails p"]
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
      extraInlineSelectors: ["span.dropcaps"],
      paragraphMinTextCount: 1,
      paragraphMinWordCount: 1,
      blockMinTextCount: 1,
      blockMinWordCount: 1,
      containerMinTextCount: 1,
      wrapperPrefix: "<br />",
      targetWrapperTag: "span"
    },
    {
      isEbookBuilder: !0,
      isTranslateTitle: !1,
      targetWrapperTag: "span",
      selectorMatches: [
        "meta[name='immersive-translate-ebook-builder'][content='true']"
      ],
      globalMeta: {},
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
    },
    {
      matches: ["https://www.explainpaper.com/reader*"],
      isTranslateTitle: !1,
      selectors: [".leading-relaxed", ".chat-messages p", ".text-sm"]
    },
    {
      matches: "https://colab.research.google.com/*",
      excludeSelectors: ["code", "view-line"]
    },
    {
      matches: "www.gatesnotes.com",
      minZIndex: -1
    },
    {
      matches: "page.kakao.com",
      shadowRootSelectors: ["div[style^='visibility: visible'"]
    },
    {
      matches: "coinmarketcap.com",
      extraBlockSelectors: [
        "div[class='sc-3502f6cd-0 JxHqg']"
      ]
    },
    {
      matches: "doc.qt.io",
      additionalStayOriginalSelectors: [
        "[translate=no]"
      ]
    },
    {
      matches: "wandb.ai",
      additionalSelectors: [".report-page-top"],
      additionalStayOriginalSelectors: [
        "span[data-slate-inline=true]"
      ],
      extraInlineSelectors: []
    },
    {
      matches: "paulgraham.com",
      additionalSelectors: [
        "font[face=verdana]"
      ],
      extraBlockSelectors: "font[face=verdana]"
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
async function clearBuildinConfig() {
  await browserAPI.storage.local.set({ [buildinConfigStorageKey]: {} });
}
async function clearLocalConfig() {
  await browserAPI.storage.local.set({ [localConfigStorageKey]: {} });
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
var getBrowserIntefaceLanguage = async () => {
  let languages3 = ["zh-CN"];
  try {
    languages3 = await browserAPI.i18n.getAcceptLanguages();
  } catch (e3) {
    log_default.warn("get browser language error:", e3);
  }
  let defaultInterfaceLanguage = languages3.map((lang) => formatLanguage(lang)).find((lang) => translations[lang]);
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
    for (let j6 = 0; j6 < textArrSplitedByNewLine.length; j6++) {
      let currentText = textArrSplitedByNewLine[j6];
      if (currentText.trim() === "") {
        currentTempSentences.length > 0 ? j6 < textArrSplitedByNewLine.length - 1 && (currentTempSentences[currentTempSentences.length - 1].suffix += `
`) : currentPrefix += `
`;
        continue;
      } else if (currentText.length > maxLength) {
        let tempSplitedSentences = [];
        splitSentence(currentText, maxLength, tempSplitedSentences);
        for (let k5 = 0; k5 < tempSplitedSentences.length; k5++) {
          let tempSentence = tempSplitedSentences[k5], { text: text2, prefix, suffix } = tempSentence;
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
      currentTempSentences.length > 0 && j6 < textArrSplitedByNewLine.length - 1 && (currentTempSentences[currentTempSentences.length - 1].suffix += `
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
  let service = PureTranslationServices[key], translationConfig = ctx.config.translationServices[key] || {}, ok = !0, allProps = service.allProps || [], explicitProps = [], optionalProps = [];
  if (allProps.length > 0) {
    let requiredProps = allProps.filter((prop) => prop.required);
    if (requiredProps.length > 0) {
      for (let prop of requiredProps)
        if (!translationConfig[prop.name] && !prop.default) {
          ok = !1;
          break;
        }
    }
    allProps.forEach((prop) => {
      prop.optional ? optionalProps.push(prop) : explicitProps.push(prop);
    });
  }
  return {
    ...service,
    id: key,
    selected: ctx.translationService === key,
    ok,
    config: translationConfig,
    props: service.props || [],
    allProps,
    optionalProps,
    explicitProps
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
  let isNativeFetch = !0;
  options.fetchPolyfill && (isNativeFetch = !1);
  let fetchFn = options.fetchPolyfill || fetch, timeout = 12e4;
  if (options.timeout && (timeout = options.timeout), isNativeFetch) {
    let controller = new AbortController(), signal = controller.signal;
    setTimeout(() => {
      controller.abort();
    }, timeout), fetchOptions.signal = signal;
  }
  let response = await fetchFn(url, fetchOptions);
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
    details && log_default.error("fail response", details);
    let shortDetail = "";
    throw details && (shortDetail = details.slice(0, 150)), new CommonError(
      "fetchError",
      response.status + ": " + (response.statusText || "") + shortDetail,
      details
    );
  }
}

// utils/md5.js
function safeAdd(x6, y5) {
  var lsw = (x6 & 65535) + (y5 & 65535), msw = (x6 >> 16) + (y5 >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q7, a4, b6, x6, s6, t5) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a4, q7), safeAdd(x6, t5)), s6), b6);
}
function md5ff(a4, b6, c5, d5, x6, s6, t5) {
  return md5cmn(b6 & c5 | ~b6 & d5, a4, b6, x6, s6, t5);
}
function md5gg(a4, b6, c5, d5, x6, s6, t5) {
  return md5cmn(b6 & d5 | c5 & ~d5, a4, b6, x6, s6, t5);
}
function md5hh(a4, b6, c5, d5, x6, s6, t5) {
  return md5cmn(b6 ^ c5 ^ d5, a4, b6, x6, s6, t5);
}
function md5ii(a4, b6, c5, d5, x6, s6, t5) {
  return md5cmn(c5 ^ (b6 | ~d5), a4, b6, x6, s6, t5);
}
function binlMD5(x6, len) {
  x6[len >> 5] |= 128 << len % 32, x6[(len + 64 >>> 9 << 4) + 14] = len;
  var i2, olda, oldb, oldc, oldd, a4 = 1732584193, b6 = -271733879, c5 = -1732584194, d5 = 271733878;
  for (i2 = 0; i2 < x6.length; i2 += 16)
    olda = a4, oldb = b6, oldc = c5, oldd = d5, a4 = md5ff(a4, b6, c5, d5, x6[i2], 7, -680876936), d5 = md5ff(d5, a4, b6, c5, x6[i2 + 1], 12, -389564586), c5 = md5ff(c5, d5, a4, b6, x6[i2 + 2], 17, 606105819), b6 = md5ff(b6, c5, d5, a4, x6[i2 + 3], 22, -1044525330), a4 = md5ff(a4, b6, c5, d5, x6[i2 + 4], 7, -176418897), d5 = md5ff(d5, a4, b6, c5, x6[i2 + 5], 12, 1200080426), c5 = md5ff(c5, d5, a4, b6, x6[i2 + 6], 17, -1473231341), b6 = md5ff(b6, c5, d5, a4, x6[i2 + 7], 22, -45705983), a4 = md5ff(a4, b6, c5, d5, x6[i2 + 8], 7, 1770035416), d5 = md5ff(d5, a4, b6, c5, x6[i2 + 9], 12, -1958414417), c5 = md5ff(c5, d5, a4, b6, x6[i2 + 10], 17, -42063), b6 = md5ff(b6, c5, d5, a4, x6[i2 + 11], 22, -1990404162), a4 = md5ff(a4, b6, c5, d5, x6[i2 + 12], 7, 1804603682), d5 = md5ff(d5, a4, b6, c5, x6[i2 + 13], 12, -40341101), c5 = md5ff(c5, d5, a4, b6, x6[i2 + 14], 17, -1502002290), b6 = md5ff(b6, c5, d5, a4, x6[i2 + 15], 22, 1236535329), a4 = md5gg(a4, b6, c5, d5, x6[i2 + 1], 5, -165796510), d5 = md5gg(d5, a4, b6, c5, x6[i2 + 6], 9, -1069501632), c5 = md5gg(c5, d5, a4, b6, x6[i2 + 11], 14, 643717713), b6 = md5gg(b6, c5, d5, a4, x6[i2], 20, -373897302), a4 = md5gg(a4, b6, c5, d5, x6[i2 + 5], 5, -701558691), d5 = md5gg(d5, a4, b6, c5, x6[i2 + 10], 9, 38016083), c5 = md5gg(c5, d5, a4, b6, x6[i2 + 15], 14, -660478335), b6 = md5gg(b6, c5, d5, a4, x6[i2 + 4], 20, -405537848), a4 = md5gg(a4, b6, c5, d5, x6[i2 + 9], 5, 568446438), d5 = md5gg(d5, a4, b6, c5, x6[i2 + 14], 9, -1019803690), c5 = md5gg(c5, d5, a4, b6, x6[i2 + 3], 14, -187363961), b6 = md5gg(b6, c5, d5, a4, x6[i2 + 8], 20, 1163531501), a4 = md5gg(a4, b6, c5, d5, x6[i2 + 13], 5, -1444681467), d5 = md5gg(d5, a4, b6, c5, x6[i2 + 2], 9, -51403784), c5 = md5gg(c5, d5, a4, b6, x6[i2 + 7], 14, 1735328473), b6 = md5gg(b6, c5, d5, a4, x6[i2 + 12], 20, -1926607734), a4 = md5hh(a4, b6, c5, d5, x6[i2 + 5], 4, -378558), d5 = md5hh(d5, a4, b6, c5, x6[i2 + 8], 11, -2022574463), c5 = md5hh(c5, d5, a4, b6, x6[i2 + 11], 16, 1839030562), b6 = md5hh(b6, c5, d5, a4, x6[i2 + 14], 23, -35309556), a4 = md5hh(a4, b6, c5, d5, x6[i2 + 1], 4, -1530992060), d5 = md5hh(d5, a4, b6, c5, x6[i2 + 4], 11, 1272893353), c5 = md5hh(c5, d5, a4, b6, x6[i2 + 7], 16, -155497632), b6 = md5hh(b6, c5, d5, a4, x6[i2 + 10], 23, -1094730640), a4 = md5hh(a4, b6, c5, d5, x6[i2 + 13], 4, 681279174), d5 = md5hh(d5, a4, b6, c5, x6[i2], 11, -358537222), c5 = md5hh(c5, d5, a4, b6, x6[i2 + 3], 16, -722521979), b6 = md5hh(b6, c5, d5, a4, x6[i2 + 6], 23, 76029189), a4 = md5hh(a4, b6, c5, d5, x6[i2 + 9], 4, -640364487), d5 = md5hh(d5, a4, b6, c5, x6[i2 + 12], 11, -421815835), c5 = md5hh(c5, d5, a4, b6, x6[i2 + 15], 16, 530742520), b6 = md5hh(b6, c5, d5, a4, x6[i2 + 2], 23, -995338651), a4 = md5ii(a4, b6, c5, d5, x6[i2], 6, -198630844), d5 = md5ii(d5, a4, b6, c5, x6[i2 + 7], 10, 1126891415), c5 = md5ii(c5, d5, a4, b6, x6[i2 + 14], 15, -1416354905), b6 = md5ii(b6, c5, d5, a4, x6[i2 + 5], 21, -57434055), a4 = md5ii(a4, b6, c5, d5, x6[i2 + 12], 6, 1700485571), d5 = md5ii(d5, a4, b6, c5, x6[i2 + 3], 10, -1894986606), c5 = md5ii(c5, d5, a4, b6, x6[i2 + 10], 15, -1051523), b6 = md5ii(b6, c5, d5, a4, x6[i2 + 1], 21, -2054922799), a4 = md5ii(a4, b6, c5, d5, x6[i2 + 8], 6, 1873313359), d5 = md5ii(d5, a4, b6, c5, x6[i2 + 15], 10, -30611744), c5 = md5ii(c5, d5, a4, b6, x6[i2 + 6], 15, -1560198380), b6 = md5ii(b6, c5, d5, a4, x6[i2 + 13], 21, 1309151649), a4 = md5ii(a4, b6, c5, d5, x6[i2 + 4], 6, -145523070), d5 = md5ii(d5, a4, b6, c5, x6[i2 + 11], 10, -1120210379), c5 = md5ii(c5, d5, a4, b6, x6[i2 + 2], 15, 718787259), b6 = md5ii(b6, c5, d5, a4, x6[i2 + 9], 21, -343485551), a4 = safeAdd(a4, olda), b6 = safeAdd(b6, oldb), c5 = safeAdd(c5, oldc), d5 = safeAdd(d5, oldd);
  return [a4, b6, c5, d5];
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
function rstrMD5(s6) {
  return binl2rstr(binlMD5(rstr2binl(s6), s6.length * 8));
}
function rstrHMACMD5(key, data) {
  var i2, bkey = rstr2binl(key), ipad = [], opad = [], hash;
  for (ipad[15] = opad[15] = void 0, bkey.length > 16 && (bkey = binlMD5(bkey, key.length * 8)), i2 = 0; i2 < 16; i2 += 1)
    ipad[i2] = bkey[i2] ^ 909522486, opad[i2] = bkey[i2] ^ 1549556828;
  return hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8), binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}
function rstr2hex(input) {
  var hexTab = "0123456789abcdef", output = "", x6, i2;
  for (i2 = 0; i2 < input.length; i2 += 1)
    x6 = input.charCodeAt(i2), output += hexTab.charAt(x6 >>> 4 & 15) + hexTab.charAt(x6 & 15);
  return output;
}
function str2rstrUTF8(input) {
  return unescape(encodeURIComponent(input));
}
function rawMD5(s6) {
  return rstrMD5(str2rstrUTF8(s6));
}
function hexMD5(s6) {
  return rstr2hex(rawMD5(s6));
}
function rawHMACMD5(k5, d5) {
  return rstrHMACMD5(str2rstrUTF8(k5), str2rstrUTF8(d5));
}
function hexHMACMD5(k5, d5) {
  return rstr2hex(rawHMACMD5(k5, d5));
}
function md5(string, key, raw) {
  return key ? raw ? rawHMACMD5(key, string) : hexHMACMD5(key, string) : raw ? rawMD5(string) : hexMD5(string);
}

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
async function deleteAll() {
  try {
    let promises = (await getAllDBNames()).map((dbName) => deleteDatabase(dbName));
    return !!(await Promise.all(promises)).every((ok) => ok);
  } catch (e3) {
    return console.error("deleteAll error", e3), !1;
  }
}
async function deleteDatabase(dbName) {
  return await new Promise((resolve) => {
    let DBDeleteRequest = indexedDB.deleteDatabase(dbName);
    DBDeleteRequest.onsuccess = () => {
      resolve(!0);
    }, DBDeleteRequest.onerror = (err) => {
      resolve(!1);
    };
  });
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
        mainsArray.map((main2) => ({
          element: main2,
          reserve: !0
        }))
      );
    }
    let detectedContainers = [], treeFilter = (node) => {
      if (node.nodeType === Node.ELEMENT_NODE && isExcludeElement(node, ctx.rule, !0))
        return NodeFilter.FILTER_REJECT;
      if (node.nodeType === Node.TEXT_NODE) {
        let trimedText = node.textContent ? node.textContent.trim() : "";
        if (isValidTextByCount(
          trimedText,
          ctx.rule.containerMinTextCount,
          ctx.rule.containerMinWordCount
        )) {
          let parentNode = node.parentNode;
          parentNode && parentNode.parentNode && (parentNode = parentNode.parentNode), parentNode && parentNode.nodeType === Node.ELEMENT_NODE && (detectedContainers.includes(parentNode) || detectedContainers.push(parentNode));
        }
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
  return finalContainers.sort(function(a4, b6) {
    return a4.compareDocumentPosition(b6) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
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
    }), isSameTargetLanguage(result, targetLanguage))
      paragraphEntities.delete(newParagraph.id);
    else {
      if (excludeLanguages.length > 0 && excludeLanguages.some((language) => isSameTargetLanguage(result, language))) {
        paragraphEntities.delete(newParagraph.id);
        return;
      }
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
  return rule.translationBlockStyle && (blockStyleStr = `style="${rule.translationBlockStyle}"`), html = `<${ctx.rule.targetWrapperTag} ${blockStyleStr} class="${classList.join(" ")}"><${rule.targetWrapperTag} class="${innerClassList.join(" ")}">${html}</${rule.targetWrapperTag}></${rule.targetWrapperTag}>`, sourceItem.inline || (wrapperPrefix === "smart" ? html = `<br />${html}` : html = `${wrapperPrefix}${html}`, wrapperSuffix === "smart" ? html = `${html}` : html = `${html}${wrapperSuffix}`), sourceItem.inline && (html = `<${rule.targetWrapperTag} class="notranslate">&#160;</${rule.targetWrapperTag}>${html}`), {
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
            if (clip === "rect(1px, 1px, 1px, 1px)" && (tempIsExcludeElement = !0), formatedZIndex < rule.minZIndex && (tempIsExcludeElement = !0), !tempIsExcludeElement && node.nodeName !== "BR") {
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
          let span = document.createElement(rule.targetWrapperTag);
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
  let boundaryIndex = [". ", "? ", "! ", "\u3002", "\uFF1F", "\uFF01"].reduce((acc, boundary) => {
    let index = text.lastIndexOf(boundary, maxLength);
    return index > acc ? index : acc;
  }, -1);
  if (boundaryIndex > 1) {
    let prevChar = text[boundaryIndex - 1] || "", prevPrevChar = text[boundaryIndex - 2] || "", nextChar = text[boundaryIndex + 1] || "";
    prevChar === "." || nextChar === "." || nextChar === ")" || prevPrevChar === "." && prevChar === "S" || prevPrevChar.toUpperCase() === "M" && (prevChar.toUpperCase() === "R" || prevChar.toUpperCase() === "S") ? boundaryIndex = -1 : isNaN(Number(prevChar)) || (boundaryIndex = -1);
  }
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
      let [p6, a4, t5] = payloadType.split("#");
      return p6 === protocol.type && a4 === action && t5 === type;
    } else
      return !1;
  } else
    return !1;
}
function isPayloadResponseOfType(protocol, type, payload) {
  if (hasValue(payload)) {
    let payloadType = payload.type;
    if (hasValue(payloadType) && hasValue(payload.response)) {
      let [p6, a4, t5] = payloadType.split("#");
      return p6 === protocol.type && a4 === "ask" && t5 === type;
    } else
      return !1;
  } else
    return !1;
}
function destroyAll(listeners3) {
  listeners3.forEach(([w6, l3]) => w6.removeEventListener("message", l3)), listeners3.length = 0;
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
      {
        data: {},
        payload: {}
      },
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
    theChannel = topFrameInstance, await ProtoframePubsub.connect(topFrameInstance).catch((e3) => {
      log_default.error("connect with parent frame error", e3);
    });
  }
}
function getIframeMessageChannel() {
  return theChannel;
}

// store.ts
var CACHE_KEY_PREFIX = brandIdForJs + "StoreKey_";
function get(rawKey, defaultValue) {
  let key = CACHE_KEY_PREFIX + rawKey;
  return browserAPI.storage.local.get(key).then((result) => result[key] === void 0 ? defaultValue : result[key]);
}
function set(rawKey, value) {
  let key = CACHE_KEY_PREFIX + rawKey;
  return browserAPI.storage.local.set({ [key]: value });
}

// browser/version.ts
function getVersion() {
  return browserAPI.runtime.getManifest().version;
}

// report.ts
async function report(key, events, ctx) {
  try {
    let env4 = getEnv(), isUserscript = isMonkey(), isProd3 = env4.PROD === "1", reportKey = `report_${key}`, lastReportTime = await get(reportKey, 0), now = Date.now();
    if (now - lastReportTime < 24 * 60 * 60 * 1e3)
      return;
    await set(reportKey, now);
    let measurement_id = "G-MKMD9LWFTR", api_secret = "sitc4WmvShWYwfU0dANM3Q", userId = await get("fakeUserId", "");
    userId || (userId = makeid(32), await set("fakeUserId", userId));
    let url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`;
    isProd3 || (url = `https://www.google-analytics.com/debug/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`);
    let theBrowserInfo = U7.parse(window.navigator.userAgent), version = getVersion(), formatedEvents = events.map((event) => {
      let currentParam = event.params || {};
      return theBrowserInfo.os && (currentParam.os_name = theBrowserInfo.os.name || "unknown", currentParam.os_version = theBrowserInfo.os.version || "unknown", currentParam.os_version_name = theBrowserInfo.os.versionName || "unknown"), theBrowserInfo.browser && (currentParam.browser_name = theBrowserInfo.browser.name || "unknown", currentParam.browser_version = theBrowserInfo.browser.version || "unknown"), theBrowserInfo.platform && (currentParam.platform_type = theBrowserInfo.platform.type || "unknown"), theBrowserInfo.engine && (currentParam.engine_name = theBrowserInfo.engine.name || "unknown", currentParam.engine_version = theBrowserInfo.engine.version || "unknown"), ctx.translationService && (currentParam.translation_service = ctx.translationService), ctx.targetLanguage && (currentParam.target_language = ctx.targetLanguage), ctx.config.interfaceLanguage && (currentParam.interface_language = ctx.config.interfaceLanguage), version && (currentParam.version = version), ctx.config.translationTheme && (currentParam.translation_theme = ctx.config.translationTheme), ctx.config.alpha && (currentParam.alpha = ctx.config.alpha.toString()), ctx.config.translationArea && (currentParam.translation_area = ctx.config.translationArea), currentParam.userscript = isUserscript.toString(), {
        ...event,
        params: currentParam
      };
    }), _response = await request2(
      {
        responseType: "text",
        url,
        method: "POST",
        body: JSON.stringify({
          client_id: userId,
          user_id: userId,
          events: formatedEvents
        })
      }
    );
  } catch (e3) {
    log_default.debug("report error", e3);
  }
}
function makeid(length) {
  let result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length, counter = 0;
  for (; counter < length; )
    result += characters.charAt(Math.floor(Math.random() * charactersLength)), counter += 1;
  return result;
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

// libs/sha256.js
var ERROR = "input is invalid type", WINDOW = typeof window == "object", root = WINDOW ? window : {};
root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
var WEB_WORKER = !WINDOW && typeof self == "object", NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
NODE_JS ? root = global : WEB_WORKER && (root = self);
var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module == "object" && module.exports, AMD = typeof define == "function" && define.amd, ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [-2147483648, 8388608, 32768, 128], SHIFT = [24, 16, 8, 0], K6 = [
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
  var a4 = this.h0, b6 = this.h1, c5 = this.h2, d5 = this.h3, e3 = this.h4, f4 = this.h5, g6 = this.h6, h4 = this.h7, blocks2 = this.blocks, j6, s0, s1, maj, t1, t22, ch, ab, da, cd, bc;
  for (j6 = 16; j6 < 64; ++j6)
    t1 = blocks2[j6 - 15], s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3, t1 = blocks2[j6 - 2], s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10, blocks2[j6] = blocks2[j6 - 16] + s0 + blocks2[j6 - 7] + s1 << 0;
  for (bc = b6 & c5, j6 = 0; j6 < 64; j6 += 4)
    this.first ? (this.is224 ? (ab = 300032, t1 = blocks2[0] - 1413257819, h4 = t1 - 150054599 << 0, d5 = t1 + 24177077 << 0) : (ab = 704751109, t1 = blocks2[0] - 210244248, h4 = t1 - 1521486534 << 0, d5 = t1 + 143694565 << 0), this.first = !1) : (s0 = (a4 >>> 2 | a4 << 30) ^ (a4 >>> 13 | a4 << 19) ^ (a4 >>> 22 | a4 << 10), s1 = (e3 >>> 6 | e3 << 26) ^ (e3 >>> 11 | e3 << 21) ^ (e3 >>> 25 | e3 << 7), ab = a4 & b6, maj = ab ^ a4 & c5 ^ bc, ch = e3 & f4 ^ ~e3 & g6, t1 = h4 + s1 + ch + K6[j6] + blocks2[j6], t22 = s0 + maj, h4 = d5 + t1 << 0, d5 = t1 + t22 << 0), s0 = (d5 >>> 2 | d5 << 30) ^ (d5 >>> 13 | d5 << 19) ^ (d5 >>> 22 | d5 << 10), s1 = (h4 >>> 6 | h4 << 26) ^ (h4 >>> 11 | h4 << 21) ^ (h4 >>> 25 | h4 << 7), da = d5 & a4, maj = da ^ d5 & b6 ^ ab, ch = h4 & e3 ^ ~h4 & f4, t1 = g6 + s1 + ch + K6[j6 + 1] + blocks2[j6 + 1], t22 = s0 + maj, g6 = c5 + t1 << 0, c5 = t1 + t22 << 0, s0 = (c5 >>> 2 | c5 << 30) ^ (c5 >>> 13 | c5 << 19) ^ (c5 >>> 22 | c5 << 10), s1 = (g6 >>> 6 | g6 << 26) ^ (g6 >>> 11 | g6 << 21) ^ (g6 >>> 25 | g6 << 7), cd = c5 & d5, maj = cd ^ c5 & a4 ^ da, ch = g6 & h4 ^ ~g6 & e3, t1 = f4 + s1 + ch + K6[j6 + 2] + blocks2[j6 + 2], t22 = s0 + maj, f4 = b6 + t1 << 0, b6 = t1 + t22 << 0, s0 = (b6 >>> 2 | b6 << 30) ^ (b6 >>> 13 | b6 << 19) ^ (b6 >>> 22 | b6 << 10), s1 = (f4 >>> 6 | f4 << 26) ^ (f4 >>> 11 | f4 << 21) ^ (f4 >>> 25 | f4 << 7), bc = b6 & c5, maj = bc ^ b6 & d5 ^ cd, ch = f4 & g6 ^ ~f4 & h4, t1 = e3 + s1 + ch + K6[j6 + 3] + blocks2[j6 + 3], t22 = s0 + maj, e3 = a4 + t1 << 0, a4 = t1 + t22 << 0;
  this.h0 = this.h0 + a4 << 0, this.h1 = this.h1 + b6 << 0, this.h2 = this.h2 + c5 << 0, this.h3 = this.h3 + d5 << 0, this.h4 = this.h4 + e3 << 0, this.h5 = this.h5 + f4 << 0, this.h6 = this.h6 + g6 << 0, this.h7 = this.h7 + h4 << 0;
};
Sha256.prototype.hex = function() {
  this.finalize();
  var h0 = this.h0, h1 = this.h1, h22 = this.h2, h32 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, hex2 = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h22 >> 28 & 15] + HEX_CHARS[h22 >> 24 & 15] + HEX_CHARS[h22 >> 20 & 15] + HEX_CHARS[h22 >> 16 & 15] + HEX_CHARS[h22 >> 12 & 15] + HEX_CHARS[h22 >> 8 & 15] + HEX_CHARS[h22 >> 4 & 15] + HEX_CHARS[h22 & 15] + HEX_CHARS[h32 >> 28 & 15] + HEX_CHARS[h32 >> 24 & 15] + HEX_CHARS[h32 >> 20 & 15] + HEX_CHARS[h32 >> 16 & 15] + HEX_CHARS[h32 >> 12 & 15] + HEX_CHARS[h32 >> 8 & 15] + HEX_CHARS[h32 >> 4 & 15] + HEX_CHARS[h32 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
  return this.is224 || (hex2 += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15]), hex2;
};
Sha256.prototype.toString = Sha256.prototype.hex;
Sha256.prototype.digest = function() {
  this.finalize();
  var h0 = this.h0, h1 = this.h1, h22 = this.h2, h32 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7, arr = [
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
    h32 >> 24 & 255,
    h32 >> 16 & 255,
    h32 >> 8 & 255,
    h32 & 255,
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
    var b6 = key[i2] || 0;
    oKeyPad[i2] = 92 ^ b6, iKeyPad[i2] = 54 ^ b6;
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
  return Array.from(new Uint8Array(hashBuffer)).map((b6) => b6.toString(16).padStart(2, "0")).join(
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
  let defaultTargetLanguage = targetLanguage || "zh-CN", hostname2 = urlObj.hostname, encryptedHostname = await sha256(hostname2), pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash, encryptedPath = await sha256(pathAndQueryAndHash), encryptedUrl = `https://${encryptedHostname}.com/${encryptedPath}`, localConfig = await getLocalConfig(), buildinConfig = await getLatestBuildinConfig(), translationStartMode = config.translationStartMode;
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
      cache: config.cache,
      translationTheme: defaultTheme
    }, state) : {
      translationArea: config.translationArea,
      translationStartMode,
      immediateTranslationTextCount: config.immediateTranslationTextCount,
      isAutoTranslate: !1,
      translationDebounce: 300,
      isNeedClean: !1,
      isDetectParagraphLanguage,
      cache: config.cache,
      translationTheme: defaultTheme
    },
    localConfig
  };
  ctx.state.translationArea === "body" && (ctx.config.generalRule.excludeTags = ctx.config.generalRule.excludeTags.filter((tag) => !ctx.config.generalRule.bodyTranslateTags.includes(tag)), ctx.config.generalRule.additionalExcludeSelectors = ctx.config.generalRule.additionalExcludeSelectors.filter(
    (selector) => selector !== ".btn"
  ));
  let translationServiceConfig = config.translationServices[ctx.translationService] || {};
  translationServiceConfig.immediateTranslationTextCount !== void 0 && isNumber(translationServiceConfig.immediateTranslationTextCount) && translationServiceConfig.immediateTranslationTextCount >= 0 && (ctx.state.immediateTranslationTextCount = translationServiceConfig.immediateTranslationTextCount), ctx.translationService === "deepl" && translationServiceConfig && translationServiceConfig.authKey && translationServiceConfig.authKey.startsWith("immersive_") && translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl !== void 0 && translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl >= 0 && (ctx.state.immediateTranslationTextCount = translationServiceConfig.immediateTranslationTextCountForImmersiveDeepl), translationServiceConfig && translationServiceConfig.translationDebounce && typeof translationServiceConfig.translationDebounce == "number" && (ctx.state.translationDebounce = translationServiceConfig.translationDebounce);
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
function isNumber(value) {
  return typeof value == "number";
}

// dom/translate_page.ts
var pageStatus = "Original", currentParagraphIds = [], waitToTranslateParagraphIds = /* @__PURE__ */ new Set(), allNewDynamicElements = [], allIntersectionObserver = [], allResizebleObserver = [], currentNewDynamicElements = [], oldUrl = getRealUrl().split("#")[0], currentTranslatedTextLength = 0, globalContext, initialTranslationTheme, isSetupForOnce = !1, throttleMap = {
  300: se3(
    translateCurrentQueue,
    300
  ),
  1e3: se3(
    translateCurrentQueue,
    1e3
  ),
  3e3: se3(
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
  if (document.dispatchEvent(
    new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
      detail: JSON.stringify({
        type: "restorePage",
        payload: {}
      })
    })
  ), clean(), !globalContext || !globalContext.mainFrame)
    return;
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
    } catch (e3) {
      log_default.error(`translateNewDynamicNodes error: ${e3.message}`);
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
    let targetContainer = visibleParagraph.targetContainer, paragraphTarget = document.createElement(ctx.rule.targetWrapperTag);
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
    let { rule } = ctx, targetTranslationWrapper = document.createElement(
      rule.targetWrapperTag
    );
    targetTranslationWrapper.classList.add(
      "notranslate",
      translationTargetElementWrapperClass
    ), targetTranslationWrapper.id = `${translationTargetElementWrapperClass}-${id}`, targetTranslationWrapper.setAttribute("lang", ctx.targetLanguage);
    let loadingHtml = getLoadingHTML(
      ctx.config.loadingTheme,
      ctx.rule
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
  if (setPageTranslatedStatus("Translating"), ctx || (ctx = await getGlobalContext(getRealUrl(), {})), report("translage_page_daily", [
    {
      name: "translage_page_daily"
    }
  ], ctx), ctx.state.isNeedClean ? restorePage() : globalContext.state.isNeedClean = !0, document.dispatchEvent(
    new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
      detail: JSON.stringify({
        type: "translateStart",
        payload: {}
      })
    })
  ), ctx.rule.normalizeBody && document.querySelector(ctx.rule.normalizeBody)) {
    let boydHtml = document.body.innerHTML;
    document.body.innerHTML = "", document.body.innerHTML = boydHtml;
  }
  if (await setupOnceForInitPage(globalContext), document.querySelectorAll("iframe").forEach((frame) => {
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
  currentScrollOffset >= currentWindowHeight && (ctx.state.immediateTranslationTextCount = 0), isInitTranslationService || (isInitTranslationService = !0, isInIframe || initTranslationEngine(ctx).catch((e3) => {
    log_default.warn("init translation engine error", e3);
  })), log_default.debug("ctx", ctx), addToUnmountQueue(() => {
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
    containersCount === 0 && setPageTranslatedStatus("Translated"), ctx.rule.isTranslateTitle && !isInIframe && (translateTitle(ctx).catch((e3) => {
      log_default.error(
        "translateTitle error:",
        e3.name,
        e3.message,
        e3.details || ""
      );
    }), enableTitleMutationObserver(ctx));
    let paragraphEntities2 = getParagraphEntities();
    document.dispatchEvent(
      new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
        detail: JSON.stringify({
          type: "totalParagraphsCount",
          payload: {
            totalParagraphsCount: paragraphEntities2.size
          }
        })
      })
    );
  } catch (e3) {
    setPageTranslatedStatus("Error"), log_default.error(e3);
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
    let options = {
      url,
      config,
      state: { ...globalContext.state, ...state }
    };
    globalContext = await getContext(options);
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
  } catch (e3) {
    throw e3;
  }
}
function setLoadingToParagraph(rootFrame, id, ctx) {
  let element = rootFrame.querySelector(
    "#" + translationTargetElementWrapperClass + "-" + id
  );
  element && (element.innerHTML = getLoadingHTML(
    ctx.config.loadingTheme,
    ctx.rule
  ));
}
function getLoadingHTML(theme, rule) {
  return `&#160;<${rule.targetWrapperTag} class="${brandId}-loading-${theme} notranslate"></${rule.targetWrapperTag}>`;
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
async function retryFailedParagraphs() {
  let allParagraphEntities = getParagraphEntities(), ids = [];
  for (let [id, paragraph] of allParagraphEntities)
    paragraph.state === "Error" && ids.push(id);
  let currentParagraphLang = "auto", ctx = await getGlobalContext(getRealUrl(), {});
  ctx.state.isDetectParagraphLanguage || (currentParagraphLang = getCurrentPageLanguage());
  let payload = {
    sentences: ids.filter((id) => getParagraph(id)).map((id) => {
      let paragraph = getParagraph(id), from = paragraph.languageByLocal;
      return from === "auto" && (from = currentParagraphLang), setLoadingToParagraph(paragraph.rootFrame, id, ctx), {
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
    } catch (e3) {
      setPageTranslatedStatus("Error"), log_default.error(
        "translateCurrentQueue error",
        e3.name,
        e3.message,
        e3.details || " "
      );
      return;
    }
  }
}
function onParagraphTranslated(err, translatedSentence, sentenceRequest, ctx) {
  let translatedOk = !1, paragraphWithState = getParagraph(sentenceRequest.id);
  if (paragraphWithState && (err || !translatedSentence)) {
    err || (log_default.error("translate error", sentenceRequest, err, translatedSentence), err = new Error("no response from server"));
    let { rule } = ctx, wrapperId = sentenceRequest.id, wrapper = paragraphWithState.rootFrame.querySelector(
      `#${translationTargetElementWrapperClass}-${wrapperId}`
    ), errorMessage = err.message.replaceAll(`
`, "");
    errorMessage = errorMessage.replaceAll('"', "&quot;"), paragraphWithState && (paragraphWithState.state = "Error", setParagraph(paragraphWithState.id, paragraphWithState));
    let errorHtml = `<${rule.targetWrapperTag} class="${brandId}-error notranslate"> <${rule.targetWrapperTag} class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${errorMessage}"><button class="${brandId}-clickable-button notranslate" title="${errorMessage}">\u2757</button></${rule.targetWrapperTag}> <button class="${brandId}-clickable-button notranslate" data-${brandId}-paragraph-id="${wrapperId}" data-${brandId}-action="retry">\u{1F504}</button></${rule.targetWrapperTag}>`;
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
        }), translatedOk = !0;
      }
    } else
      log_default.error("paragraph not found", sentenceRequest.id);
  }
  document.dispatchEvent(
    new CustomEvent(documentMessageTypeIdentifierForTellThirdParty, {
      detail: JSON.stringify({
        type: "paragraphTranslated",
        payload: {
          ok: translatedOk
        }
      })
    })
  );
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
    } catch (e3) {
      setPageTranslatedStatus("Error"), log_default.error(
        "translateCurrentQueue error",
        e3.name,
        e3.message,
        e3.details || " "
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
              ).catch((e3) => {
                log_default.error(
                  "translateFrame error",
                  e3.details || " ",
                  e3
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
                ).catch((e3) => {
                  log_default.error(
                    "translateFrame error",
                    e3.details || " ",
                    e3
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
    mutations.length > 0 && (mutations[0].target.text.includes(titleDelimiters) || translateTitle(ctx).catch((e3) => {
      log_default.error(
        "translateTitle error:",
        e3.name,
        e3.message,
        e3.details || ""
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
  ), ctx.rule.globalMeta && Object.keys(ctx.rule.globalMeta).forEach((key) => {
    let meta = document.createElement("meta");
    meta.name = key, meta.content = ctx.rule.globalMeta[key], document.head.appendChild(meta);
  });
  let lang = ctx.sourceLanguage;
  lang === "auto" ? lang = await detectCurrentPageLanguage(ctx) : setCurrentPageLanguageByClient(lang);
  let isAutoTranslate = ctx.state.isAutoTranslate || ctx.isTranslateUrl || ctx.rule.isPdf;
  if (!isAutoTranslate && !ctx.isTranslateExcludeUrl && (log_default.debug(`detect page language: ${ctx.url} ${lang}`), isSameTargetLanguage(lang, ctx.targetLanguage) || lang === "auto" || isMatchLanguage(lang, ctx.config.translationLanguagePattern) && (isAutoTranslate = !0, log_default.debug(`match language pattern ${lang}, auto translate`))), ctx.rule.isEbookBuilder && (isAutoTranslate = !1), isAutoTranslate)
    globalContext.state.isAutoTranslate = !0, await translatePage(globalContext);
  else if (log_default.debug("do not auto translate", ctx), ctx.rule.initTranslationServiceAsSoonAsPossible && ctx.translationService === "deepl") {
    if (isSameTargetLanguage(lang, ctx.targetLanguage) || lang === "auto")
      return;
    ctx.config && ctx.config.translationServices && ctx.config.translationServices.deepl && ctx.config.translationServices.deepl.authKey && typeof ctx.config.translationServices.deepl.authKey == "string" && ctx.config.translationServices.deepl.authKey.startsWith("immersive_") && (isInitTranslationService || (isInitTranslationService = !0, isInIframe || initTranslationEngine(ctx).catch((e3) => {
      log_default.warn("init translation engine error", e3);
    })));
  }
}
async function setupOnceForInitPage(ctx) {
  isSetupForOnce || (isSetupForOnce = !0, globalThis.top !== globalThis.self && ctx.rule.useIframePostMessage && await setupChildIframeChannel(), injectCssToFrame(document, ctx), document.querySelectorAll("iframe").forEach((frame) => {
    isInlineIframe(frame) ? injectCssToFrame(frame.contentDocument, ctx) : ctx.rule.isEbook && injectCssToFrame(frame.contentDocument, ctx);
  }));
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
async function detectCurrentPageLanguage(ctx) {
  ctx || (globalContext = await getGlobalContext(getRealUrl(), {}), ctx = globalContext);
  let isInIframe = getIsInIframe(), lang = "auto";
  if (isMonkey()) {
    let mainText = "";
    ctx.rule.isEbook || ctx.rule.isEbookBuilder ? mainText = getAllIframeMainText(ctx.mainFrame) : mainText = getMainText(ctx.mainFrame).slice(0, 1e3), lang = await detectLanguage({
      text: mainText
    });
  } else if (isInIframe)
    lang = await detectLanguage({
      text: getMainText(ctx.mainFrame).slice(0, 1e3)
    });
  else if (ctx.rule.isEbook || ctx.rule.isEbookBuilder) {
    let mainText = "";
    mainText = getAllIframeMainText(ctx.mainFrame), lang = await detectLanguage({
      text: mainText
    });
  } else
    lang = await detectTabLanguage();
  return lang === "auto" && (lang = await detectPageLanguage()), setCurrentPageLanguage(lang), lang;
}
function waitForSelectors(selectors, timeout = 3e3) {
  return new Promise((resolve, _reject) => {
    let timer = timeout ? setTimeout(() => {
      resolve(new Error("timeout"));
    }, timeout) : void 0, interval = setInterval(() => {
      selectors.every((selector) => document.querySelector(selector) !== null) && (clearInterval(interval), timer && clearTimeout(timer), resolve(null));
    }, 50);
  });
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

// content_message_listeners.ts
var asyncMessageHandler = async function(payload, _author) {
  let { method, data } = payload;
  method === "translateTheWholePage" ? await translateTheWholePage() : method === "translateTheMainPage" ? await translateTheMainPage() : method === "translateToThePageEndImmediately" ? await translateToThePageEndImmediately() : method === "toggleTranslatePage" ? await toggleTranslatePage() : method === "toggleTranslateTheWholePage" ? await toggleTranslateTheWholePage() : method === "toggleTranslateTheMainPage" ? await toggleTranslateTheMainPage() : method === "translatePage" ? await translatePage() : method === "toggleTranslationMask" ? await toggleTranslationMask() : method === "restorePage" ? restorePage() : method === "showTranslationOnly" ? void 0 : method === "setCurrentPageLanguageByClient" ? setCurrentPageLanguageByClient(data) : method === "retryFailedParagraphs" && retryFailedParagraphs();
};
var connection;
function getConnection() {
  return connection || (connection = new Messager("content_script", !1).getConnection("main", asyncMessageHandler), connection);
}

// userscript/document_message_channel.ts
var messageHandlers = /* @__PURE__ */ new Map();
function ask(request3) {
  let id = makeid2(64), event = new CustomEvent(documentMessageTypeIdentifierForAsk, {
    detail: JSON.stringify({
      ...request3,
      type: "ask",
      id
    })
  });
  return document.dispatchEvent(event), new Promise((resolve, reject) => {
    messageHandlers.set(id, (e3, data) => {
      e3 ? reject(e3) : resolve(data);
    });
  });
}
function makeid2(length) {
  let result = "", characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", charactersLength = characters.length, counter = 0;
  for (; counter < length; )
    result += characters.charAt(Math.floor(Math.random() * charactersLength)), counter += 1;
  return result;
}

// browser_proxy.ts
async function sendMessage(options) {
  return await getConnection().sendMessage(
    "background:main",
    options
  );
}
function request2(options) {
  return isWebOptionsPage() ? ask({
    method: "request",
    data: options
  }) : isMonkey() || isDeno() ? (options.fetchPolyfill = globalThis.GM_fetch, request(options)) : sendMessage({
    method: "fetch",
    data: options
  });
}
function getConfig2() {
  return isMonkey() ? getConfig() : sendMessage(
    {
      method: "getConfig"
    }
  );
}
function detectLanguage(options) {
  if (options.text) {
    let chineseLike = detectChinese(options.text);
    if (chineseLike !== "auto")
      return Promise.resolve(chineseLike);
  }
  if (isMonkey()) {
    let result = browserAPI.extra.detectLanguage(
      options.text,
      options.minLength
    );
    return Promise.resolve(result);
  }
  return sendMessage(
    {
      method: "detectLanguage",
      data: options
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
  }).catch((_e4) => {
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

// utils/rate_limiter.ts
var RateLimiter = class {
  constructor(options) {
    this.strictTicks = [];
    this.options = options, this.setOptions(options);
  }
  setOptions(options) {
    options && (options.interval && (this.options.interval = Number(options.interval)), options.limit && (this.options.limit = Number(options.limit)));
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

// rate_limiter_bus.ts
var defaultLimiter = new RateLimiter({ limit: 7, interval: 1250 }), limiterMap = {
  tencent: new RateLimiter({ limit: 3, interval: 1350 }),
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
      } catch (e3) {
        return log_default.error("can not comunicate with root frame, use strict limiter", e3), getLimiter("strict").getDelay();
      }
    else
      return getLimiter("strict").getDelay();
  } else
    return getLimiter(key).getDelay();
}
async function setRateLimiter(key, options) {
  if (!getIsInIframe()) {
    let limiter = getLimiter(key);
    options && limiter.setOptions(options);
  }
}

// services/translation.ts
var Translation = class {
  constructor(serviceConfig, generalConfig, options) {
    this.maxTextLength = 1800;
    this.isSupportList = !0;
    this.maxTextGroupLength = 200;
    this.serviceConfig = serviceConfig, this.generalConfig = generalConfig, this.translationOptions = options;
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
  async multipleTranslate(payload, options, everySentenceCallback) {
    if (payload.sentences.length === 0)
      return {
        sentences: []
      };
    let { sentences } = payload, tempSentenceGroups = [], globalError = null, languages3 = /* @__PURE__ */ new Set();
    for (let sentence of sentences)
      sentence.from && sentence.from !== "auto" && languages3.add(sentence.from);
    let isMultipleLanguage = !1;
    languages3.size > 1 && (isMultipleLanguage = !0);
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
    } catch (e3) {
      if (everySentenceCallback)
        for (let i2 = 0; i2 < sentences.length; i2++) {
          let sentence = sentences[i2];
          everySentenceCallback(e3, null, sentence);
        }
      throw e3;
    }
    log_default.debug(
      "tempSentenceGroups",
      tempSentenceGroups.map((item) => item)
    );
    let promises = [], sentenceCallbacks = [], addToSentenceCallback = (index, sentenceCallback, error2) => {
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
    }, defaultRateLimiter = { ...this.getDefaultRateLimit() }, serviceConfig = this.serviceConfig;
    serviceConfig && serviceConfig.limit && (defaultRateLimiter.limit = Number(serviceConfig.limit)), serviceConfig.interval && (defaultRateLimiter.interval = Number(serviceConfig.interval));
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
              options
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
            options
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
            for (let j6 = 0; j6 < tempSentenceGroup.tempSentences.length - 1; j6++)
              translatedTexts[j6] = rawTranslatedTexts[j6];
            translatedTexts[tempSentenceGroup.tempSentences.length - 1] = rawTranslatedTexts.slice(
              tempSentenceGroup.tempSentences.length - 1
            ).join(finalTranslationTextSeparator);
          } else if (rawTranslatedTexts.length < tempSentenceGroup.tempSentences.length)
            for (let j6 = rawTranslatedTexts.length; j6 < tempSentenceGroup.tempSentences.length; j6++)
              rawTranslatedTexts[j6] = "";
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
          for (let j6 = 0; j6 < translatedTexts.length; j6++) {
            let translatedText = translatedTexts[j6], tempSentence = sourceTempSentences[j6];
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
        }).catch((e3) => {
          if (everySentenceCallback) {
            for (let j6 = 0; j6 < tempSentenceGroup.tempSentences.length; j6++) {
              let tempSentence = tempSentenceGroup.tempSentences[j6];
              tempSentence.sentenceTotalParts === 1 ? everySentenceCallback(e3, null, {
                ...sentences[tempSentence.index],
                from: tempSentenceGroup.from,
                to: tempSentenceGroup.to
              }) : (everySentenceCallback(e3, null, {
                ...sentences[tempSentence.index],
                from: tempSentenceGroup.from,
                to: tempSentenceGroup.to
              }), j6 += tempSentence.sentenceTotalParts - 1);
            }
            globalError = e3;
          } else
            globalError = e3;
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.isSupportList = !1;
    this.apiUrl = "https://translate.googleapis.com/translate_a/single";
    serviceConfig && serviceConfig.apiUrl && (this.apiUrl = mergeUrl(this.apiUrl, serviceConfig.apiUrl));
  }
  getDefaultRateLimit() {
    return { limit: 10, interval: 1050 };
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
function createAbbreviationsDictionary(languages3 = SUPPORTED_LANGUAGES) {
  return languages3.reduce((acc, lang) => (acc[lang.code.toLowerCase()] = lang.code, acc[lang.language.toLowerCase()] = lang.code, acc), {});
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
  text.forEach((t5) => {
    textObjList.push({
      text: t5,
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
  return response.result.texts.forEach((t5) => {
    finalResult.text.push(t5.text);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.maxTextGroupLength = 3;
    this.maxTextLength = 800;
    this.isSupportList = !0;
    this.API_URL = API_URL;
    serviceConfig && serviceConfig.apiUrl && (this.API_URL = mergeUrl(API_URL, serviceConfig.apiUrl));
  }
  getDefaultRateLimit() {
    return { limit: 1, interval: 1050 };
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
}, D9 = _D;
/** Translator lang to custom lang */
D9.langMap = new Map(langMap5), /** Custom lang to translator lang */
D9.langMapReverse = new Map(
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
  getDefaultRateLimit() {
    return { limit: 30, interval: 1050 };
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
    this.maxTextLength = 5e3;
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
async function rawThrottleRequest(options) {
  let key = options.url;
  if (options.method && (key += options.method), options.body && (key += md5(options.body)), throttleRequestMap.has(key))
    return throttleRequestMap.get(key);
  let promise = request2(options);
  throttleRequestMap.set(key, promise);
  try {
    return await promise;
  } catch (e3) {
    throw e3;
  } finally {
    setTimeout(() => {
      throttleRequestMap.delete(key);
    }, 3e4);
  }
}
async function throttleRequest(options) {
  if (getIsInIframe()) {
    let channel = getIframeMessageChannel();
    if (channel)
      try {
        return await channel.ask("throttleRequest", options);
      } catch (e3) {
        throw log_default.error("can not comunicate with root frame, use strict limiter", e3), e3;
      }
    else
      return rawThrottleRequest(options);
  } else
    return rawThrottleRequest(options);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
      let deeplInstance = new Q6(
        this.authKey,
        {
          state: globalState,
          onFetch: (url, options) => {
            let pathname = new URL(url).pathname;
            return pathname === "/refresh_token" || pathname === "/oidc/token" ? throttleRequest({
              url,
              ...options
            }) : request2({
              url,
              ...options
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
    return { limit: 3, interval: 1050 };
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
      let deeplInstance = new Q6(
        this.authKey,
        {
          state: globalState,
          onFetch: (url, options) => {
            let pathname = new URL(url).pathname;
            return pathname === "/refresh_token" || pathname === "/oidc/token" ? throttleRequest({
              url,
              ...options
            }) : request2({
              url,
              ...options
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.APIKEY = "";
    this.isSupportList = !1;
    if (!serviceConfig || !serviceConfig.APIKEY)
      throw new Error("APIKEY are required");
    this.APIKEY = serviceConfig.APIKEY?.trim();
  }
  async translate(payload) {
    let { text, from, to } = payload, options = {
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
      options
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
    let params = new URLSearchParams(paramsObj), bodyStr = JSON.stringify(text.map((t5) => ({ text: t5 }))), options = {
      url: "https://api.cognitive.microsofttranslator.com/translate?" + params.toString(),
      retry: 2,
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": this.APIKEY,
        "Ocp-Apim-Subscription-Region": this.region,
        "content-type": "application/json"
      },
      body: bodyStr
    }, response = await request2(options);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.isSupportList = !0;
    this.maxTextGroupLength = 25;
    this.maxTextLength = 1200;
  }
  getDefaultRateLimit() {
    return { limit: 3, interval: 1050 };
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
`, bodyStr = text.join(newLineSplitter), options = {
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
    })).langCode, options.body = JSON.stringify({
      text: bodyStr,
      source: langCode || langMap11.get(from) || from,
      target: langMap11.get(to) || to
    })) : options.body = JSON.stringify({
      text: bodyStr,
      source: langMap11.get(from),
      target: langMap11.get(to) || to
    });
    let response = await request2(options);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.APIKEY = "";
    // api key, spit by ',' if you have multiple keys
    this.apiKeys = [];
    // api key list
    this.isSupportList = !1;
    this.maxTextLength = 1200;
    this.maxTextGroupLength = 1;
    this.systemPrompt = "You are a translation engine, you can only translate text and cannot interpret it, and do not explain.";
    this.prompt = "Translate the text below to {{to}}:\n\n```\n{{text}}\n```";
    this.model = "gpt-3.5-turbo";
    this.apiUrl = "https://api.openai.com/v1/chat/completions";
    if (!serviceConfig)
      throw new Error("APIKEY are required");
    serviceConfig.APIKEY && (this.APIKEY = serviceConfig.APIKEY?.trim(), this.apiKeys = this.APIKEY.split(",").map((key) => key.trim())), serviceConfig.prompt && (this.prompt = serviceConfig.prompt), serviceConfig.model && (this.model = serviceConfig.model), serviceConfig && serviceConfig.apiUrl && (this.apiUrl = mergeUrl(this.apiUrl, serviceConfig.apiUrl)), serviceConfig && serviceConfig.systemPrompt && (this.systemPrompt = serviceConfig.systemPrompt);
  }
  getDefaultRateLimit() {
    return { limit: 10, interval: 65e3 };
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
    let remoteFrom = langMap12.get(from) || from, remoteTo = langMap12.get(to) || to, prompt = this.prompt.replace(/{{to}}/g, remoteTo).replace(
      /{{text}}/g,
      text
    ).replace(/{{from}}/g, remoteFrom), messages = [];
    if (this.systemPrompt) {
      let systemPrompt = this.systemPrompt.replace(/{{to}}/g, remoteTo).replace(
        /{{text}}/g,
        text
      ).replace(/{{from}}/g, remoteFrom);
      messages.push({
        role: "system",
        content: systemPrompt
      });
    }
    this.prompt && messages.push({
      role: "user",
      content: prompt
    }), this.prompt.indexOf("{{text}}") === -1 && messages.push({
      role: "user",
      content: text
    });
    let options = {
      url: this.apiUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: this.model,
        temperature: 0,
        max_tokens: 2048,
        messages
      })
    }, randomKey = this.getRandomKey();
    randomKey && (options.headers.Authorization = "Bearer " + randomKey);
    let response = await request2(options);
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
    ).replace(/{{from}}/g, langMap12.get(from) || from), options = {
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
    }, response = await request2(options);
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
}).filter((v5) => v5).join("&"), Signer = class {
  constructor(request3, serviceName, options) {
    this.request = request3, this.request.headers = request3.headers || {}, this.serviceName = serviceName, options = options || {}, this.bodySha256 = options.bodySha256, this.request.params = this.sortParams(this.request.params);
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
    let x6 = await this.canonicalString();
    return parts.push(
      await this.hexEncodedHash(x6)
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
    }), headers3.sort((a4, b6) => a4[0].toLowerCase() < b6[0].toLowerCase() ? -1 : 1);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
      let error2 = response.ResponseMetadata.Error;
      throw new CommonError(error2.Code, error2.Message);
    } else if (response.ResponseMetaData && response.ResponseMetaData.Error) {
      let error2 = response.ResponseMetaData.Error;
      throw new CommonError(error2.Code, error2.Message);
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
      let error2 = response.ResponseMetadata.Error;
      throw new CommonError(error2.Code, error2.Message);
    } else if (response.ResponseMetaData && response.ResponseMetaData.Error) {
      let error2 = response.ResponseMetaData.Error;
      throw new CommonError(error2.Code, error2.Message);
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
      let error2 = response.base_resp;
      throw new CommonError(error2.status_code.toString(), error2.status_message);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
  } catch (e3) {
    throw console.error("failed to fetch global config", e3), e3;
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.endpoint = "https://api.fanyi.baidu.com/api/trans/vip/translate";
    this.appid = "";
    this.key = "";
    this.isSupportList = !1;
    this.maxTextGroupLength = 20;
    if (!serviceConfig || !serviceConfig.appid || !serviceConfig.key)
      throw new Error("appid and key are required");
    this.appid = serviceConfig.appid?.trim(), this.key = serviceConfig.key?.trim();
  }
  getDefaultRateLimit() {
    return { limit: 1, interval: 1550 };
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.token = "ssdj273ksdiwi923bsd9";
  }
  getDefaultRateLimit() {
    return { limit: 5, interval: 1050 };
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
function truncate(q7) {
  let len = q7.length;
  return len <= 20 ? q7 : q7.substring(0, 10) + len + q7.substring(len - 10, len);
}
var Youdao = class extends Translation {
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.isSupportList = !1;
    this.appId = "";
    this.appSecret = "";
    this.throttleLimit = 5;
    if (!serviceConfig || !serviceConfig.appId || !serviceConfig.appSecret)
      throw new Error("appId and appSecret are required");
    this.appId = serviceConfig.appId?.trim(), this.appSecret = serviceConfig.appSecret?.trim();
  }
  getDefaultRateLimit() {
    return { limit: 5, interval: 1050 };
  }
  async translate(payload) {
    let { text, from, to } = payload, salt = makeid3(32), curTime = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3), str1 = this.appId + truncate(text) + salt + curTime + this.appSecret, sign = await sha256(str1), params = {
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
    );
    if (!result.translation)
      throw new Error(JSON.stringify(result));
    let l3 = result.l, [remoteFrom, _4] = l3.split("2");
    return {
      text: result.translation.join(`
`),
      from: langMapReverse7.get(remoteFrom),
      to
    };
  }
};
function makeid3(length) {
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
  constructor(serviceConfig, generalConfig, options) {
    super(serviceConfig, generalConfig, options);
    this.isSupportList = !1;
    this.appId = "";
    this.appSecret = "";
    this.maxTextLength = 800;
  }
  getDefaultRateLimit() {
    return { limit: 5, interval: 1050 };
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
  d: D9,
  dpro: D9,
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
function formatTranslationService2(key, ctx) {
  let service = TranslationServices[key], translationConfig = ctx.config.translationServices[key] || {}, ok = !0, allProps = service.allProps || [], explicitProps = [], optionalProps = [];
  if (allProps.length > 0) {
    let requiredProps = allProps.filter((prop) => prop.required);
    if (requiredProps.length > 0) {
      for (let prop of requiredProps)
        if (!translationConfig[prop.name]) {
          ok = !1;
          break;
        }
    }
    allProps.forEach((prop) => {
      prop.optional ? optionalProps.push(prop) : explicitProps.push(prop);
    });
  }
  return {
    ...service,
    id: key,
    selected: ctx.translationService === key,
    ok,
    config: translationConfig,
    props: service.props || [],
    allProps,
    explicitProps: explicitProps || [],
    optionalProps: optionalProps || []
  };
}
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
  defaultRateLimit && (serviceConfig && !serviceConfig.limit && (serviceConfig.limit = defaultRateLimit.limit), serviceConfig && !serviceConfig.interval && (serviceConfig.interval = defaultRateLimit.interval)), await setRateLimiter(
    defaultTranslationEngine,
    serviceConfig
  ), await translator.init();
}
async function translateMultipleSentences(payload, ctx, everySentenceCallback) {
  if (!payload.sentences.length)
    return {
      ...payload
    };
  let { config, translationService, state } = ctx, generalConfig = config.translationGeneralConfig, services = config.translationServices, defaultTranslationEngine = translationService, serviceConfig = services[defaultTranslationEngine] || {};
  defaultTranslationEngine === "openai" && (payload.sentences = payload.sentences.map((sentence) => ({
    ...sentence,
    from: "auto"
  })));
  let noCacheSentences = [], finalResult = {
    sentences: Array(payload.sentences.length)
  }, sourceLength = payload.sentences.length, sentenceIndex = -1;
  if (state.cache)
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
      } catch (e3) {
        log_default.warn("query cache DB error, but it's ok", e3);
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
  } catch (e3) {
    if (everySentenceCallback)
      for (let sentence of noCacheSentences)
        everySentenceCallback(e3, null, sentence);
    throw e3;
  }
  let noCacheResult = await translator.multipleTranslate(
    {
      sentences: noCacheSentences
    },
    serviceConfig,
    (err, a4, b6) => {
      if (everySentenceCallback && everySentenceCallback(err, a4, b6), !err && a4 && !defaultTranslationEngine.startsWith("mock") && state.cache) {
        let cacheServiceKey = defaultTranslationEngine;
        defaultTranslationEngine === "openl" && (cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME), state.cache && deadline(
          setDbStore({
            translatedText: a4.text,
            from: b6.from,
            to: b6.to,
            detectedFrom: a4.from,
            key: md5(b6.text),
            service: cacheServiceKey
          }),
          3e3
        ).catch((e3) => {
          log_default.warn("set cache DB error", e3);
        });
      }
    }
  );
  for (let sentence of noCacheResult.sentences) {
    let index = finalResult.sentences.findIndex((s6) => !s6);
    if (index === -1)
      throw new CommonError("translateFailed", "can not match the result");
    finalResult.sentences[index] = sentence;
  }
  return finalResult;
}

// libs/preact-translation/utils.ts
function getResourceUrl(root2, lang) {
  return [root2, !root2 || root2.endsWith("/") ? "" : "/", lang, ".json"].join("");
}
function format(str, params) {
  let result = str;
  return params && Object.keys(params).forEach((key) => {
    let rawValue = params[key], keyIsNumber = isNumber2(key);
    if (typeof rawValue == "object" || keyIsNumber) {
      let value = rawValue;
      keyIsNumber && typeof value == "string" && (value = {
        tag: "a",
        href: value,
        target: "_blank"
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
function t3(data, key, lang, fallbackLang, params) {
  if (!data.hasOwnProperty(lang))
    return key;
  let value = getValue(data, lang, key);
  return value === key && lang !== fallbackLang && (value = getValue(data, fallbackLang, key)), format(value, params);
}
function isNumber2(value) {
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
    }).catch((error2) => {
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
  let { t: t5, setLang, lang, isReady } = useTranslate(
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
        t: t5,
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

// components/nav_left.tsx
function NavLeft(props) {
  return /* @__PURE__ */ p5("div", { class: "nav-left", children: [
    /* @__PURE__ */ p5("div", { class: "title", children: props.title }),
    /* @__PURE__ */ p5("div", { class: "description", children: props.description })
  ] });
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
      children: items.map((item, index) => /* @__PURE__ */ p5("option", { value: item.value, selected: item.selected, children: item.label }, "selectlink" + index))
    }
  );
}

// components/input_row.tsx
function InputRow(props) {
  let { t: t5 } = useI18n(), inputStyle = {};
  props.width && (inputStyle = { width: `${props.width}px` });
  let [currentValue, setCurrentValue] = P2(
    props.value
  ), { field, onFinish } = props, finalLabel = field.name;
  return field.label && (finalLabel = field.label), field.labelKey && (finalLabel = t5(field.labelKey)), /* @__PURE__ */ p5("div", { class: "mt-3", children: [
    /* @__PURE__ */ p5("label", { for: props.field.name, class: "mb-[var(--spacing)]", children: [
      finalLabel,
      "\uFF1A"
    ] }),
    props.field.type === "textarea" ? /* @__PURE__ */ p5(L, { children: [
      /* @__PURE__ */ p5(
        "textarea",
        {
          style: inputStyle,
          autoComplete: "off",
          required: props.field.required,
          placeholder: props.field.placeholder || props.field.name,
          class: "input",
          value: currentValue,
          type: props.type,
          onInput: (e3) => {
            setCurrentValue(e3.target.value), props.onChange(e3.target.value);
          },
          onChange: () => {
            onFinish && onFinish();
          }
        }
      ),
      props.field.descriptionKey ? /* @__PURE__ */ p5("small", { children: t5(props.field.descriptionKey) }) : null
    ] }) : /* @__PURE__ */ p5(L, { children: [
      /* @__PURE__ */ p5(
        "input",
        {
          style: inputStyle,
          required: props.field.required,
          placeholder: props.field.placeholder || props.field.name,
          value: currentValue,
          type: props.type,
          name: props.field.name,
          autoComplete: "off",
          onInput: (e3) => {
            setCurrentValue(e3.target.value), props.onChange(e3.target.value);
          },
          onChange: () => {
            (props.type === "text" || props.type === "password") && onFinish && onFinish();
          }
        }
      ),
      props.field.descriptionKey ? /* @__PURE__ */ p5("small", { children: t5(props.field.descriptionKey) }) : null
    ] })
  ] });
}

// components/option_field.tsx
function OptionField(props) {
  let { t: t5 } = useI18n(), [isPassword, setIsPassword] = P2(!0), { onFinish, field, onChange, value } = props;
  value = value === void 0 ? field.default || "" : value;
  let finalLabel = field.name;
  if (field.label && (finalLabel = field.label), field.labelKey && (finalLabel = t5(field.labelKey)), field.type === "select")
    return /* @__PURE__ */ p5("div", { class: "flex justify-end mb-2", children: [
      /* @__PURE__ */ p5("label", { class: "engine", children: [
        finalLabel,
        "\uFF1A"
      ] }),
      /* @__PURE__ */ p5(
        SelectLink,
        {
          items: field.options.map((fieldOption) => ({
            label: `${fieldOption.label ? t5(fieldOption.label) : fieldOption.value}`,
            value: fieldOption.value,
            selected: value === fieldOption.value,
            onSelected: () => {
              onChange(fieldOption.value);
            }
          }))
        }
      )
    ] });
  if (field.type === "text")
    return /* @__PURE__ */ p5("div", { children: /* @__PURE__ */ p5(
      InputRow,
      {
        field,
        value,
        type: field.type,
        onChange,
        onFinish
      }
    ) });
  if (field.type === "textarea")
    return /* @__PURE__ */ p5("div", { children: /* @__PURE__ */ p5(
      InputRow,
      {
        field,
        value,
        type: field.type,
        onChange,
        onFinish
      }
    ) });
  if (field.type === "number")
    return /* @__PURE__ */ p5("div", { children: /* @__PURE__ */ p5(
      InputRow,
      {
        field,
        value,
        type: field.type,
        width: 196,
        onChange
      }
    ) });
  if (field.type === "password")
    return /* @__PURE__ */ p5("div", { children: [
      /* @__PURE__ */ p5(
        InputRow,
        {
          field,
          value,
          type: isPassword ? field.type : "text",
          onChange,
          onFinish
        }
      ),
      /* @__PURE__ */ p5(
        "label",
        {
          for: "translate",
          onClick: () => {
            setIsPassword(!isPassword);
          },
          children: [
            /* @__PURE__ */ p5("input", { type: "checkbox", id: "translate", name: "translate" }),
            t5("show password")
          ]
        }
      )
    ] });
  if (field.type === "color") {
    let theValue = value, defaultPlaceholder = "";
    return theValue || (theValue = "#FFFFFF", defaultPlaceholder = "#FFFFFF"), /* @__PURE__ */ p5("div", { children: /* @__PURE__ */ p5("label", { class: "flex items-center", for: field.name, children: [
      /* @__PURE__ */ p5("span", { class: "mr-2", children: field.label || field.name }),
      /* @__PURE__ */ p5(
        "input",
        {
          type: "text",
          id: field.name,
          class: "border-color-text mr-2",
          placeholder: defaultPlaceholder || "",
          value,
          onInput: (e3) => {
            onChange(e3.target.value);
          }
        }
      ),
      /* @__PURE__ */ p5(
        "input",
        {
          id: field.name,
          type: "color",
          name: field.name,
          value: theValue,
          onInput: (e3) => {
            onChange(e3.target.value);
          }
        }
      )
    ] }) });
  } else
    return null;
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
function t4(key, interfaceLanguage, params) {
  return t3(
    finalTranslations,
    key,
    interfaceLanguage,
    fallbackLanguage,
    params
  );
}
var getLanguages = () => languages.filter((lang) => lang !== "auto"), getLanguageName = (lang, interfaceLanguage, useOriginal) => {
  let translation = t3(
    finalTranslations,
    `languages.${lang}`,
    interfaceLanguage,
    "en"
  );
  return useOriginal ? langMap[lang] || lang : translation !== `languages.${lang}` ? translation : langMap[lang];
};

// components/always_lang.tsx
function AlwaysLang(props) {
  let { t: t5, lang } = useI18n();
  return /* @__PURE__ */ p5("details", { role: "list", class: "nav-right", children: [
    /* @__PURE__ */ p5("summary", { "aria-haspopup": "listbox", children: t5("edit") }),
    /* @__PURE__ */ p5("ul", { role: "listbox", class: "option-list", children: props.options.map((item, index) => {
      let label = getLanguageName(item.value, lang);
      return /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5("label", { children: [
        /* @__PURE__ */ p5(
          "input",
          {
            type: "checkbox",
            onChange: () => {
              props.onToggleAlwaysLangs(!item.checked, item.value);
            },
            value: item.value,
            checked: item.checked
          }
        ),
        label
      ] }) }, "language-" + index);
    }) })
  ] });
}

// components/url_list.tsx
function UrlList(props) {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("div", { children: props.urls.map((item, i2) => /* @__PURE__ */ p5("div", { class: "url-list", children: [
    /* @__PURE__ */ p5("div", { class: "url-left", children: /* @__PURE__ */ p5("div", { class: "url-name height-tight", children: item }) }),
    /* @__PURE__ */ p5("nav", { children: /* @__PURE__ */ p5("ul", { children: /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5("details", { role: "list", dir: "rtl", children: [
      /* @__PURE__ */ p5("summary", { "aria-haspopup": "listbox", role: "link" }),
      /* @__PURE__ */ p5("ul", { class: "delete", role: "listbox", children: [
        /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5(
          "a",
          {
            onClick: (e3) => {
              props.onEditUrl(item, props.type, i2);
            },
            children: t5("edit")
          }
        ) }),
        /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5(
          "a",
          {
            onClick: (e3) => {
              props.onDeleteUrl(item, props.type);
            },
            children: t5("delete")
          }
        ) })
      ] })
    ] }) }) }) })
  ] }, "menu" + i2)) });
}

// components/add_url_modal.tsx
function AddUrlModal(props) {
  let { t: t5 } = useI18n(), textInput = w2(null), { toggleModal } = props;
  return /* @__PURE__ */ p5("dialog", { id: "immersive-translate-overlay", onClick: (e3) => {
    e3.target && e3.target.id === "immersive-translate-overlay" && toggleModal(e3);
  }, open: !0, children: /* @__PURE__ */ p5("article", { class: "add-modal", children: [
    /* @__PURE__ */ p5(
      "a",
      {
        href: "#close",
        "aria-label": "Close",
        class: "close",
        "data-target": "modal-example",
        onClick: props.toggleModal
      }
    ),
    /* @__PURE__ */ p5("div", { class: "add-text", children: t5("add url") }),
    /* @__PURE__ */ p5("input", { placeholder: "URL", ref: textInput, value: props.urlValue }),
    /* @__PURE__ */ p5("blockquote", { children: /* @__PURE__ */ p5("p", { class: "text-sm", children: t5("addUrlDescription") }) }),
    /* @__PURE__ */ p5("div", { class: "flex", children: [
      /* @__PURE__ */ p5("div", { class: "footer-button", children: /* @__PURE__ */ p5(
        "a",
        {
          href: "#cancel",
          role: "button",
          class: "full-button secondary margin-right",
          "data-target": "modal-example",
          onClick: props.toggleModal,
          children: t5("cancel")
        }
      ) }),
      /* @__PURE__ */ p5("div", { class: "footer-button", children: /* @__PURE__ */ p5(
        "a",
        {
          href: "#confirm",
          role: "button",
          class: "full-button margin-left",
          "data-target": "modal-example",
          onClick: (e3) => {
            if (e3.preventDefault(), textInput.current && textInput.current.value) {
              if (props.onSubmitAddUrl) {
                if (props.urlValue !== "") {
                  props.onSubmitAddUrl(
                    textInput.current.value,
                    props.index,
                    props.type,
                    "edit"
                  );
                  return;
                }
                props.onSubmitAddUrl(
                  textInput.current.value,
                  props.index,
                  props.type
                );
                return;
              } else if (props.onAddInterfaceUrl) {
                if (props.urlValue !== "") {
                  props.onAddInterfaceUrl(
                    textInput.current.value,
                    "edit"
                  );
                  return;
                }
                props.onAddInterfaceUrl(
                  textInput.current.value
                );
              }
            }
          },
          children: t5("confirm")
        }
      ) })
    ] })
  ] }) });
}

// cache.ts
var CACHE_KEY_PREFIX2 = brandIdForJs + "CacheKey_";
async function clear() {
  let allObjects = await browserAPI.storage.local.get(null);
  if (allObjects) {
    let cacheKeys = Object.keys(allObjects).filter((key) => key.startsWith(CACHE_KEY_PREFIX2));
    if (cacheKeys.length > 0)
      return browserAPI.storage.local.remove(cacheKeys);
  }
}

// browser/cache_manager.ts
async function cleanCache() {
  let keys = [
    "bingGlobalConfig",
    "baiduGlobalConfig",
    immersiveTranslateGlobalConfigStorageKey,
    GOOGLE_ACCESS_TOKEN_KEY
  ];
  for (let key of keys)
    await browserAPI.storage.local.remove(key);
  isMonkey() || await deleteAll(), await clear();
}
function getCacheSize() {
  return isMonkey() ? Promise.resolve("0 B") : calculateSize();
}

// pages/general.tsx
var languages2 = getLanguages();
function General() {
  let { t: t5 } = useI18n(), [settings, setSettings, _isPersistent, _error, rawSetValue] = useUserConfig(), [config, setConfig] = P2(null), [ctx, setContext] = P2(null), [matchesIndex, setMatchesIndex] = P2(0), [isVerifingService, setIsVerifingService] = P2(!1), [verifiedErrorMessage, setVerifiedErrorMessage] = P2(""), [verifiedSuccessMessage, setVerifiedSuccessMessage] = P2(
    ""
  ), [isShowAddUrlModal, setIsShowAddUrlModal] = P2(!1), [isShowNeverUrlModal, setIsShowNeverUrlModal] = P2(
    !1
  ), [urlValue, setUrlValue] = P2(""), translationServiceItems = [];
  ctx && (translationServiceItems = getTranslationServices(ctx));
  let currentTranslationServiceConfig = null, curentTranslationServiceItem = null, alwaysTranslatedLangs = [], neverTranslatedLangs = [];
  if (config && ctx) {
    let { translationService, translationServices } = config;
    PureTranslationServices[translationService] && (curentTranslationServiceItem = formatTranslationService2(
      translationService,
      ctx
    )), translationServices && translationServices[translationService] ? currentTranslationServiceConfig = Object.assign(
      {},
      translationServices[translationService] || {}
    ) : currentTranslationServiceConfig = {}, alwaysTranslatedLangs = languages2.concat("<all>").map((code2) => config.translationLanguagePattern && config.translationLanguagePattern.matches && config.translationLanguagePattern.matches.includes(code2) ? {
      checked: !0,
      value: code2
    } : {
      checked: !1,
      value: code2
    }), neverTranslatedLangs = languages2.map((code2) => config.translationLanguagePattern && config.translationLanguagePattern.excludeMatches && config.translationLanguagePattern.excludeMatches.includes(code2) ? {
      checked: !0,
      value: code2
    } : {
      checked: !1,
      value: code2
    });
  }
  j2(() => (v2("esc", () => {
    setIsShowAddUrlModal(!1), setIsShowNeverUrlModal(!1);
  }), getConfig().then((config2) => {
    setConfig(config2), log_default.debug("current config", config2);
  }), () => {
    v2.unbind("esc");
  }), []), j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, [settings]), j2(() => {
    config && getContext({
      url: "http://localhost",
      config,
      state: {
        cache: !1
      }
    }).then((ctx2) => {
      setContext(ctx2);
    });
  }, [config]);
  let selectService = (service) => {
    setSettings((state) => ({ ...state, translationService: service }));
  }, handleChangeValue = (value) => {
    setSettings(() => ({
      ...value
    }));
  }, handleReset = (e3) => {
    e3.preventDefault(), confirm(t5("confirmResetConfig")) && (rawSetValue(getEnvUserConfig()), clearLocalConfig().catch((e4) => {
      log_default.error("clean local config error", e4);
    }), clearBuildinConfig().catch((e4) => {
      log_default.error("clean buildin config error", e4);
    }), cleanCache().catch((e4) => {
      log_default.error("clean cache error", e4);
    }), success(t5("resetSuccess")));
  }, selectTargetLanguage = (lang) => {
    setSettings((state) => ({ ...state, targetLanguage: lang }));
  }, handleTranslationLanguagePatternSelected = (value, currentLang) => {
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
    });
  }, onToggleAlwaysLangs = (checked, value) => {
    handleTranslationLanguagePatternSelected(checked ? "matches" : void 0, value);
  }, onToggleNeverLangs = (checked, value) => {
    handleTranslationLanguagePatternSelected(
      checked ? "excludeMatches" : void 0,
      value
    );
  }, toggleAddUrlModal = (type) => {
    type === "matches" ? setIsShowAddUrlModal(!isShowAddUrlModal) : setIsShowNeverUrlModal(!isShowNeverUrlModal);
  }, onSubmitAddUrl = (url, index, type, action) => {
    toggleAddUrlModal(type), setSettings((state) => {
      let pattern = settings.translationUrlPattern, currentMatches = [], currentExcludeMatches = [];
      pattern && pattern.matches && pattern.excludeMatches && (currentMatches = pattern.matches, currentExcludeMatches = pattern.excludeMatches);
      let newMatches = [...currentMatches], newExcludeMatches = [...currentExcludeMatches];
      return action === "edit" && (type === "matches" ? newMatches[index] = url : newExcludeMatches[index] = url), type === "matches" ? (newMatches = addToUniqueArray(url, newMatches), newExcludeMatches = removeFromArray(url, currentExcludeMatches)) : (newMatches = removeFromArray(url, currentMatches), newExcludeMatches = addToUniqueArray(url, newExcludeMatches)), {
        ...state,
        translationUrlPattern: {
          ...state.translationUrlPattern,
          matches: newMatches,
          excludeMatches: newExcludeMatches
        }
      };
    });
  }, onDeleteUrl = (url, type) => {
    setSettings((state) => {
      let pattern = settings.translationUrlPattern, currentMatches = [];
      type === "matches" ? pattern && pattern.matches && (currentMatches = pattern.matches) : pattern && pattern.excludeMatches && (currentMatches = pattern.excludeMatches);
      let newMatches = [...currentMatches];
      return newMatches = removeFromArray(url, newMatches), {
        ...state,
        translationUrlPattern: {
          ...state.translationUrlPattern,
          [type]: newMatches
        }
      };
    });
  }, onEditUrl = (url, type, index) => {
    toggleAddUrlModal(type), setUrlValue(url), setMatchesIndex(index);
  };
  if (!config)
    return /* @__PURE__ */ p5("div", { children: "loading" });
  let langsArr = [];
  config && config.translationLanguagePattern && config.translationLanguagePattern.matches && (langsArr = config.translationLanguagePattern.matches);
  let neverLangArr = [];
  return config && config.translationLanguagePattern && config.translationLanguagePattern.excludeMatches && (neverLangArr = config.translationLanguagePattern.excludeMatches), /* @__PURE__ */ p5("div", { children: [
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5("strong", { class: "text-lg", children: t5("general") }),
      /* @__PURE__ */ p5("a", { class: "text-sm", href: "#", onClick: handleReset, children: t5("reset") })
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("target"),
          description: t5("translate other languages into specific language")
        }
      ),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select",
          onChange: (e3) => {
            e3.preventDefault(), selectTargetLanguage(e3.target.value);
          },
          children: languages2.filter((lang) => lang !== "auto").map((lang, index) => /* @__PURE__ */ p5(
            "option",
            {
              value: lang,
              selected: lang === config.targetLanguage,
              children: getLanguageName(lang, config.interfaceLanguage)
            },
            "language" + index
          ))
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("service"),
          description: t5("select translation service")
        }
      ),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select",
          onChange: (e3) => {
            e3.preventDefault(), setVerifiedErrorMessage(""), setVerifiedSuccessMessage(""), selectService(e3.target.value);
          },
          children: translationServiceItems.map((item, index) => /* @__PURE__ */ p5(
            "option",
            {
              value: item.id,
              selected: item.id === config.translationService,
              children: `${t5("translationServices." + item.id)}${item.ok ? "" : " " + t5("needActionForOptions")}`
            },
            "service-item=" + index
          ))
        }
      )
    ] }),
    curentTranslationServiceItem && curentTranslationServiceItem.docUrl ? /* @__PURE__ */ p5("div", { children: [
      /* @__PURE__ */ p5(
        "a",
        {
          target: "_blank",
          class: "pb-1 docUrl",
          href: curentTranslationServiceItem.homepage,
          children: t5(`translationServices.${curentTranslationServiceItem.id}`)
        }
      ),
      "\xA0",
      /* @__PURE__ */ p5("span", { class: "description pb-1", children: t5("please refer to") }),
      "\xA0",
      /* @__PURE__ */ p5(
        "a",
        {
          target: "_blank",
          class: "pb-1 docUrl",
          href: curentTranslationServiceItem.docUrl,
          children: t5("KeyAndConfigurationTutorial")
        }
      )
    ] }) : null,
    currentTranslationServiceConfig && curentTranslationServiceItem && curentTranslationServiceItem.explicitProps.length > 0 && curentTranslationServiceItem.explicitProps.map((prop, index) => /* @__PURE__ */ p5("div", { class: "mt-2", children: /* @__PURE__ */ p5(
      OptionField,
      {
        field: prop,
        value: currentTranslationServiceConfig[prop.name],
        onChange: (value) => {
          setSettings((state) => {
            let currentServices = state.translationServices || {}, currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
            return {
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
        },
        onFinish: () => {
          success(t5("saved"));
        }
      },
      prop.name + index
    ) }, "service-item-prop-" + prop.name + index)),
    currentTranslationServiceConfig && curentTranslationServiceItem && curentTranslationServiceItem.optionalProps && curentTranslationServiceItem.optionalProps.length > 0 && /* @__PURE__ */ p5("details", { class: "pt-2 border-none", children: [
      /* @__PURE__ */ p5("summary", { style: { textAlign: "right", lineHeight: "1rem" }, children: t5("moreOptions") }),
      /* @__PURE__ */ p5("div", { children: curentTranslationServiceItem.optionalProps.map((prop, index) => /* @__PURE__ */ p5(
        "div",
        {
          class: "mt-2",
          children: /* @__PURE__ */ p5(
            OptionField,
            {
              field: prop,
              value: currentTranslationServiceConfig[prop.name],
              onChange: (value) => {
                setSettings((state) => {
                  let currentServices = state.translationServices || {}, currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
                  return {
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
              },
              onFinish: () => {
                success(t5("saved"));
              }
            },
            prop.name + index
          )
        },
        "service-item-optional-prop-" + prop.name + index
      )) }),
      /* @__PURE__ */ p5(
        "a",
        {
          href: "#",
          class: "secondary",
          onClick: (e3) => {
            e3.preventDefault(), setSettings((state) => {
              let currentServices = state.translationServices || {};
              return {
                ...state,
                translationServices: {
                  ...currentServices,
                  [curentTranslationServiceItem.id]: {}
                }
              };
            }), setTimeout(() => {
              window.location.reload();
            }, 100);
          },
          children: t5("resetToDefaultSettings")
        }
      )
    ] }),
    currentTranslationServiceConfig && curentTranslationServiceItem && /* @__PURE__ */ p5("div", { class: "text-right", children: [
      verifiedSuccessMessage && /* @__PURE__ */ p5("span", { class: "verified text-green-500 mr-2", children: t5("verified") }),
      verifiedErrorMessage && /* @__PURE__ */ p5("span", { class: "verified text-red-500 mr-2", children: verifiedErrorMessage }),
      /* @__PURE__ */ p5(
        "a",
        {
          "aria-busy": isVerifingService,
          href: "#",
          class: "secondary",
          onClick: async (e3) => {
            e3.preventDefault();
            try {
              setVerifiedErrorMessage(""), setVerifiedSuccessMessage(""), setIsVerifingService(!0), await delay(500);
              let translationClass = curentTranslationServiceItem.class;
              translationClass && translationClass.clearState && await translationClass.clearState(), await translateSingleSentence(
                {
                  id: 1e6,
                  text: "Hello world",
                  from: "en",
                  to: "zh-CN",
                  url: "https://google.com",
                  fromByClient: "auto"
                },
                ctx
              ), setVerifiedSuccessMessage("verified");
            } catch (e4) {
              console.error(e4), setVerifiedErrorMessage(e4.message);
            } finally {
              setIsVerifingService(!1);
            }
          },
          children: t5("verifyService")
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("always languages"),
          description: t5("always translate the following languages")
        }
      ),
      /* @__PURE__ */ p5(
        AlwaysLang,
        {
          options: alwaysTranslatedLangs,
          onToggleAlwaysLangs
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "langs-list", children: langsArr.map((item, i2) => /* @__PURE__ */ p5("div", { class: "lang-card", children: [
      /* @__PURE__ */ p5("div", { id: `${item}`, children: getLanguageName(
        item,
        config.interfaceLanguage
      ) }),
      /* @__PURE__ */ p5(
        "a",
        {
          href: "#close",
          class: "close",
          target: "_blank",
          "aria-label": "Close",
          "data-target": `${item}`,
          onClick: (e3) => {
            e3.preventDefault(), onToggleAlwaysLangs(!1, langsArr[i2]);
          }
        }
      )
    ] }, "lang-" + i2)) }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("neverTranslateLanguagesLabel"),
          description: t5("neverTranslateTheFollowingLanguagesDescription")
        }
      ),
      /* @__PURE__ */ p5(
        AlwaysLang,
        {
          options: neverTranslatedLangs,
          onToggleAlwaysLangs: onToggleNeverLangs
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "langs-list", children: neverLangArr.map((item, i2) => /* @__PURE__ */ p5("div", { class: "lang-card", children: [
      /* @__PURE__ */ p5("div", { id: `${item}`, children: getLanguageName(
        item,
        config.interfaceLanguage
      ) }),
      /* @__PURE__ */ p5(
        "a",
        {
          href: "#close",
          class: "close",
          target: "_blank",
          "aria-label": "Close",
          "data-target": `${item}`,
          onClick: (e3) => {
            e3.preventDefault(), onToggleNeverLangs(!1, neverLangArr[i2]);
          }
        }
      )
    ] }, "never-lang-" + i2)) }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("always sites"),
          description: t5("always translate the following sites")
        }
      ),
      /* @__PURE__ */ p5("div", { class: "nav-right", children: /* @__PURE__ */ p5(
        "a",
        {
          href: "#",
          role: "button",
          class: "add-button secondary outline",
          onClick: (e3) => {
            e3.preventDefault(), toggleAddUrlModal("matches");
          },
          children: t5("add")
        }
      ) }),
      isShowAddUrlModal ? /* @__PURE__ */ p5(
        AddUrlModal,
        {
          toggleModal: (e3) => {
            e3.preventDefault(), toggleAddUrlModal("matches");
          },
          onSubmitAddUrl,
          type: "matches",
          urlValue,
          index: matchesIndex
        }
      ) : null
    ] }),
    /* @__PURE__ */ p5(
      UrlList,
      {
        urls: config.translationUrlPattern.matches,
        type: "matches",
        onDeleteUrl,
        onEditUrl
      }
    ),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("never sites"),
          description: t5("never translate the following sites")
        }
      ),
      /* @__PURE__ */ p5("div", { class: "nav-right", children: /* @__PURE__ */ p5(
        "a",
        {
          href: "#",
          role: "button",
          class: "add-button secondary outline",
          onClick: (e3) => {
            e3.preventDefault(), toggleAddUrlModal("excludeMatches");
          },
          children: t5("add")
        }
      ) }),
      isShowNeverUrlModal ? /* @__PURE__ */ p5(
        AddUrlModal,
        {
          toggleModal: (e3) => {
            e3.preventDefault(), toggleAddUrlModal("excludeMatches");
          },
          onSubmitAddUrl,
          type: "excludeMatches",
          urlValue,
          index: matchesIndex
        }
      ) : null
    ] }),
    /* @__PURE__ */ p5(
      UrlList,
      {
        urls: config.translationUrlPattern.excludeMatches,
        type: "excludeMatches",
        onDeleteUrl,
        onEditUrl
      }
    )
  ] });
}

// components/shortcuts.tsx
function ShortcutsModal(props) {
  let { t: t5 } = useI18n(), {
    corfirmText,
    fingerCountToToggleTranslagePageWhenTouching,
    fingerCountToToggleTranslationMaskWhenTouching,
    onChange,
    onClose,
    shortcuts
  } = props, inputRefs = {}, toggleTranslatePageWhenThreeFingersOnTheScreenRef = w2(null);
  for (let i2 = 0; i2 < shortcuts.length; i2++)
    inputRefs[shortcuts[i2].name] = w2(null);
  let handleClickOverlay = (e3) => {
    e3.target && e3.target.id === "immersive-translate-overlay" && onClose();
  };
  return j2(() => {
  }, []), /* @__PURE__ */ p5("dialog", { id: "immersive-translate-overlay", onClick: handleClickOverlay, open: !0, children: /* @__PURE__ */ p5("article", { class: "add-modal", children: [
    /* @__PURE__ */ p5(
      "a",
      {
        href: "#close",
        "aria-label": "Close",
        class: "close",
        "data-target": "modal-example",
        onClick: (e3) => {
          e3.preventDefault(), onClose();
        }
      }
    ),
    shortcuts.map((item, index) => {
      let { name, description, shortcut } = item;
      return /* @__PURE__ */ p5("div", { class: "flex justify-between items-center", children: [
        /* @__PURE__ */ p5("label", { class: "mb-2 text-sm", for: name, children: [
          description,
          ":"
        ] }),
        /* @__PURE__ */ p5(
          "input",
          {
            type: "text",
            class: "!w-36",
            ref: inputRefs[name],
            disabled: item.disabled,
            id: name,
            name,
            value: shortcut
          }
        )
      ] }, `key-${index}`);
    }),
    isTouchDevice() && /* @__PURE__ */ p5("div", { class: "flex justify-between items-center", children: [
      /* @__PURE__ */ p5("label", { for: "switch", class: "text-sm mb-2", children: t5("toggleTranslatePageWhenThreeFingersOnTheScreen") }),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select !w-36",
          ref: toggleTranslatePageWhenThreeFingersOnTheScreenRef,
          onChange: (e3) => {
            e3.preventDefault();
            let value = e3.target.value, finalValue = {
              fingerCountToToggleTranslagePageWhenTouching: parseInt(value)
            };
            onChange(finalValue);
          },
          children: [0, 2, 3, 4, 5].map((item, index) => /* @__PURE__ */ p5(
            "option",
            {
              value: item,
              selected: item === fingerCountToToggleTranslagePageWhenTouching,
              children: `${t5("fingers." + item)}`
            },
            "finger-" + index
          ))
        }
      )
    ] }),
    isTouchDevice() && /* @__PURE__ */ p5("div", { class: "mt-2 flex justify-between items-center", children: [
      /* @__PURE__ */ p5("label", { for: "switch", class: "text-sm mb-2", children: t5("toggleTranslationMaskWhenThreeFingersOnTheScreen") }),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select !w-36",
          onChange: (e3) => {
            e3.preventDefault();
            let value = e3.target.value, finalValue = {
              fingerCountToToggleTranslationMaskWhenTouching: parseInt(value)
            };
            onChange(finalValue);
          },
          children: [0, 2, 3, 4, 5].map((item, index) => /* @__PURE__ */ p5(
            "option",
            {
              value: item,
              selected: item === fingerCountToToggleTranslationMaskWhenTouching,
              children: `${t5("fingers." + item)}`
            },
            "finger-" + index
          ))
        }
      )
    ] }),
    props.note && /* @__PURE__ */ p5(props.note, {}),
    /* @__PURE__ */ p5("div", { class: "flex", children: [
      /* @__PURE__ */ p5("div", { class: "footer-button", children: /* @__PURE__ */ p5(
        "a",
        {
          href: "#cancel",
          role: "button",
          class: "full-button secondary margin-right",
          "data-target": "modal-example",
          onClick: (e3) => {
            e3.preventDefault(), onClose();
          },
          children: t5("cancel")
        }
      ) }),
      corfirmText && /* @__PURE__ */ p5("div", { class: "footer-button", children: /* @__PURE__ */ p5(
        "a",
        {
          href: "#confirm",
          role: "button",
          class: "full-button margin-left",
          "data-target": "modal-example",
          onClick: (e3) => {
            if (e3.preventDefault(), !isMonkey()) {
              onChange(null);
              return;
            }
            let newShortcuts = [];
            for (let i2 = 0; i2 < shortcuts.length; i2++) {
              let item = shortcuts[i2], inputRef = inputRefs[item.name];
              if (inputRef.current) {
                let value = inputRef.current.value;
                newShortcuts.push({
                  ...item,
                  shortcut: value
                });
              }
            }
            let finalValue = {
              shortcuts: newShortcuts
            };
            if (toggleTranslatePageWhenThreeFingersOnTheScreenRef.current) {
              let value = toggleTranslatePageWhenThreeFingersOnTheScreenRef.current.value;
              finalValue.fingerCountToToggleTranslagePageWhenTouching = parseInt(value);
            }
            finalValue.isClose = !0, onChange(finalValue);
          },
          children: corfirmText
        }
      ) })
    ] })
  ] }) });
}

// utils/get_default_value_from_inject_css.ts
function getDefaultValueFromInjectedCss(name, css) {
  let injectedCSS = css;
  injectedCSS || (injectedCSS = getEnv().IMMERSIVE_TRANSLATE_INJECTED_CSS || "");
  let regexStr = `${`--immersive-translate-${name}`}: (.+?);`, regex = new RegExp(regexStr), result = injectedCSS.match(regex);
  return result ? result[1] : "";
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
        (error2) => {
          throw error2;
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
  let m4 = redirectUri.match(/[#?](.*)/);
  return !m4 || m4.length < 1 ? null : {
    access_token: new URLSearchParams(m4[1].split("#")[0]).get("access_token")
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
      }).catch((error2) => {
        log_default.debug(this.CLASSNAME, "create tab failed: " + error2), reject(error2);
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
function getAccessToken(state, userscriptSyncStartAuthFlow = !1) {
  return getAuthInfo(state, userscriptSyncStartAuthFlow).then((authInfo) => authInfo.access_token || null);
}

// menu.ts
var actions = isChrome() ? ["action"] : ["browser_action", "page_action"], menus = [
  {
    id: "toggleTranslatePage",
    contexts: ["page", "selection", "frame", ...actions]
  },
  {
    id: contextOpenOptionsMenuId,
    contexts: actions
  },
  {
    id: contextOpenLocalEbookViewer,
    contexts: actions
  },
  {
    id: contextOpenLocalEbookBuilder,
    contexts: actions
  },
  {
    id: contextTranslateLocalPdfFileMenuId,
    contexts: actions
  },
  {
    id: contextDonateMenuId,
    contexts: actions
  }
];
async function createContextMenu(config) {
  log_default.debug("createContextMenu", menus), await browserAPI.contextMenus.removeAll();
  for (let menu of menus) {
    let visible = !0;
    config.isShowContextMenu === !1 && menu.id === "toggleTranslatePage" && (visible = !1), browserAPI.contextMenus.create({
      id: menu.id,
      title: t4(`browser.${menu.id}`, config.interfaceLanguage),
      contexts: menu.contexts,
      visible
    }, () => browserAPI.runtime.lastError);
  }
}
async function updateContextMenu() {
  let config = await getConfig();
  log_default.debug("update ContextMenu", config);
  for (let menu of menus) {
    let newTitle = t4(`browser.${menu.id}`, config.interfaceLanguage);
    browserAPI.contextMenus.update(
      menu.id,
      {
        title: newTitle
      }
    );
  }
}

// pages/interface.tsx
var allLocales = Object.keys(locales_default), getUrlArr = (config) => {
  let theme = config.translationTheme;
  return !config.translationThemePatterns[theme] || !config.translationThemePatterns[theme].matches ? [] : [...config.translationThemePatterns[theme].matches];
};
function getThemeProps(theme) {
  let props = [];
  return themeOptions[theme] && (props = props.concat(themeOptions[theme])), props.push({
    name: "textColor",
    type: "color",
    required: !1
  }), props.push({
    name: "zoom",
    type: "number",
    default: 100,
    required: !1
  }), props;
}
function Options() {
  let [settings, setSettings, _isPersistent, _error] = useUserConfig(), [isShowAddUrlModal, setIsShowAddUrlModal] = P2(!1), [isShowShortcutsModal, setIsShowShortcutsModal] = P2(
    !1
  ), [matchesIndex, setMatchesIndex] = P2(0), [ctx, setCtx] = P2(null), { t: t5, setLang } = useI18n(), [urlValue, setUrlValue] = P2("");
  j2(() => (v2("esc", () => {
    setIsShowAddUrlModal(!1), setIsShowShortcutsModal(!1);
  }), () => {
    v2.unbind("esc");
  }), []), j2(() => {
    getConfig().then((config2) => {
      getContext({
        config: config2,
        url: globalThis.location.href
      }).then((ctx2) => {
        setCtx(ctx2);
      });
    });
  }, [settings]);
  let selectDisplay = (theme) => {
    setSettings((state) => {
      let currentThemeConfig = {
        matches: [],
        excludeMatches: []
      };
      return state && state.translationThemePatterns && state.translationThemePatterns[theme] && (currentThemeConfig = state.translationThemePatterns[theme]), applyUserConfigCss(document, theme, currentThemeConfig), { ...state, translationTheme: theme };
    });
  }, selectInterfaceLanguage = (lang) => {
    setSettings((state) => ({ ...state, interfaceLanguage: lang }));
  }, onAddInterfaceUrl = (url, theme, action) => {
    setIsShowAddUrlModal(!isShowAddUrlModal), setSettings((state) => {
      let currentPatterns = state.translationThemePatterns || {}, currentThemeObj = currentPatterns[theme] || {}, currentMatches = currentThemeObj.matches || [], newMatches = [...currentMatches];
      return action === "edit" && (newMatches = removeFromArray(urlValue, currentMatches)), newMatches = addToUniqueArray(url, newMatches), {
        ...state,
        translationThemePatterns: {
          ...currentPatterns,
          [theme]: {
            ...currentThemeObj,
            matches: newMatches
          }
        }
      };
    });
  }, onDeleteUrl = (url, theme) => {
    setSettings((state) => {
      let currentPatterns = state.translationThemePatterns || {}, currentThemeObj = currentPatterns[theme] || {}, newMatches = [...currentThemeObj.matches || []];
      return newMatches = removeFromArray(url, newMatches), {
        ...state,
        translationThemePatterns: {
          ...currentPatterns,
          [theme]: {
            ...currentThemeObj,
            matches: newMatches
          }
        }
      };
    });
  }, onEditUrl = (url, _type, index) => {
    setIsShowAddUrlModal(!isShowAddUrlModal), setUrlValue(url), setMatchesIndex(index);
  };
  if (!ctx)
    return /* @__PURE__ */ p5("div", { children: "loading" });
  let config = ctx.config, corfirmText = t5("confirm"), note = () => /* @__PURE__ */ p5("blockquote", { class: "text-sm", children: [
    t5("browserShortcutsSucks"),
    " ",
    /* @__PURE__ */ p5("kbd", { children: "Ctrl+A" }),
    "\xA0",
    /* @__PURE__ */ p5("kbd", { children: "Alt+B" }),
    "\xA0",
    /* @__PURE__ */ p5("kbd", { children: "Command+C" }),
    "\xA0 ",
    /* @__PURE__ */ p5("kbd", { children: "Ctrl+Shift+D" }),
    " ",
    /* @__PURE__ */ p5("a", { href: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values", children: [
      t5("help"),
      "?"
    ] })
  ] });
  return isMonkey() || (isFirefox() ? (note = () => /* @__PURE__ */ p5("blockquote", { class: "text-sm", children: [
    t5("browserShortcutsNoteForFirefox"),
    "  ",
    /* @__PURE__ */ p5(
      "a",
      {
        target: "_blank",
        href: "https://support.mozilla.org/zh-CN/kb/%E7%AE%A1%E7%90%86Firefox%E7%9A%84%E6%89%A9%E5%B1%95%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F",
        children: [
          t5("help"),
          "?"
        ]
      }
    ),
    " "
  ] }), corfirmText = "") : (note = () => /* @__PURE__ */ p5("blockquote", { class: "text-sm", children: t5("browserShortcutsNoteForChrome") }), corfirmText = t5("goSettings"))), /* @__PURE__ */ p5("div", { children: [
    /* @__PURE__ */ p5("div", { class: "nav", children: /* @__PURE__ */ p5("strong", { class: "text-lg", children: t5("interface") }) }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(NavLeft, { title: t5("interface language") }),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select",
          onChange: (e3) => {
            setLang(e3.target.value), selectInterfaceLanguage(e3.target.value), isMonkey() || setTimeout(() => {
              updateContextMenu();
            }, 200);
          },
          children: allLocales.map((item, index) => /* @__PURE__ */ p5(
            "option",
            {
              value: item,
              selected: item === config.interfaceLanguage,
              children: getLanguageName(
                item,
                config.interfaceLanguage,
                !0
              )
            },
            "locale" + index
          ))
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(NavLeft, { title: t5("keyboard shortcuts") }),
      /* @__PURE__ */ p5("div", { class: "nav-right", children: /* @__PURE__ */ p5(
        "a",
        {
          href: "#",
          role: "button",
          class: "add-button secondary outline",
          onClick: (e3) => {
            e3.preventDefault(), setIsShowShortcutsModal(!isShowShortcutsModal);
          },
          children: t5("modify")
        }
      ) })
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("enableLineBreak"),
          description: t5("enableLineBreakDescription")
        }
      ),
      /* @__PURE__ */ p5("label", { for: "switch", children: /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          onChange: (e3) => {
            let checked = e3.target.checked;
            setSettings((state) => {
              let currentGeneralRule = state.generalRule || {};
              return {
                ...state,
                generalRule: {
                  ...currentGeneralRule,
                  lineBreakMaxTextCount: checked ? 280 : 0
                }
              };
            });
          },
          checked: ctx.rule.lineBreakMaxTextCount > 0,
          id: "switch",
          name: "switch",
          role: "switch"
        }
      ) })
    ] }),
    ctx.rule.lineBreakMaxTextCount > 0 && /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(NavLeft, { title: t5("lineBreakMaxTextCount") }),
      /* @__PURE__ */ p5("label", { for: "count", children: /* @__PURE__ */ p5(
        "input",
        {
          type: "number",
          id: "count",
          onChange: (e3) => {
            let count2 = e3.target.value;
            setSettings((state) => {
              let currentGeneralRule = state.generalRule || {};
              return {
                ...state,
                generalRule: {
                  ...currentGeneralRule,
                  lineBreakMaxTextCount: parseInt(count2)
                }
              };
            });
          },
          name: "count",
          value: ctx.rule.lineBreakMaxTextCount,
          placeholder: "Text Length",
          required: !0
        }
      ) })
    ] }),
    // @ts-ignore it's ok
    (isMobile().any || isMonkey()) && /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("enableUserscriptPagePopup"),
          description: t5("enableUserscriptPagePopupDescription", {
            touch: t5(
              "fingers." + config.generalRule.fingerCountToToggleTranslagePageWhenTouching
            )
          })
        }
      ),
      /* @__PURE__ */ p5("label", { for: "switch", children: /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          onChange: (e3) => {
            let checked = e3.target.checked;
            setSettings((state) => {
              let currentGeneralRule = state.generalRule || {};
              return {
                ...state,
                generalRule: {
                  ...currentGeneralRule,
                  isShowUserscriptPagePopup: checked
                }
              };
            });
          },
          checked: ctx.rule.isShowUserscriptPagePopup,
          id: "switch",
          name: "switch",
          role: "switch"
        }
      ) })
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("translation display"),
          description: t5("select diplay style")
        }
      ),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select",
          onChange: (e3) => {
            selectDisplay(e3.target.value);
          },
          children: translationThemes.map((item, index) => /* @__PURE__ */ p5(
            "option",
            {
              value: item,
              selected: item === config.translationTheme,
              children: t5(`translationTheme.${item}`)
            },
            "theme" + index
          ))
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "pt-2 text-sm", children: /* @__PURE__ */ p5("p", { children: [
      sampleSourceText,
      /* @__PURE__ */ p5("div", { class: "pt-2" }),
      /* @__PURE__ */ p5(
        "font",
        {
          class: getTranslationWrapperClassNames(
            config.translationTheme,
            !1,
            [],
            !1,
            !1
          ).join(" "),
          children: /* @__PURE__ */ p5(
            "font",
            {
              class: getTranslationInnerClassNames(
                config.translationTheme
              ).join(" "),
              children: sampleTargetText
            }
          )
        }
      ),
      config.translationTheme && getThemeProps(config.translationTheme).length > 0 ? /* @__PURE__ */ p5("details", { class: "pt-2 border-none", children: [
        /* @__PURE__ */ p5(
          "summary",
          {
            class: "text-sm",
            style: { textAlign: "right", lineHeight: "1rem" },
            children: t5("customTheme")
          }
        ),
        /* @__PURE__ */ p5("div", { class: "flex flex-col items-end", children: [
          getThemeProps(config.translationTheme).map(
            (props, index) => {
              props.label = t5(`customThemeLabel.${props.name}`);
              let pattern = config.translationThemePatterns || {}, translationTheme = config.translationTheme, translationThemeConfig = pattern[translationTheme] || {}, cssVariableName = `theme-${translationTheme}-${props.name}`, initialValue = getDefaultValueFromInjectedCss(cssVariableName) || void 0, currentValue = translationThemeConfig[props.name] || initialValue;
              return /* @__PURE__ */ p5(
                OptionField,
                {
                  field: props,
                  value: currentValue,
                  onChange: (value) => {
                    setSettings((state) => {
                      let currentThemePatterns = state.translationThemePatterns || {}, newThemeConfig = {
                        ...currentThemePatterns[config.translationTheme] || {},
                        [props.name]: value
                      }, newState = {
                        ...state,
                        translationThemePatterns: {
                          ...currentThemePatterns,
                          [config.translationTheme]: newThemeConfig
                        }
                      };
                      return applyUserConfigCss(
                        document,
                        config.translationTheme,
                        newThemeConfig
                      ), newState;
                    });
                  }
                },
                "theme-prop" + index
              );
            }
          ),
          /* @__PURE__ */ p5(
            "a",
            {
              href: "#",
              class: "text-sm secondary",
              onClick: (e3) => {
                e3.preventDefault(), setSettings((state) => {
                  let currentThemePatterns = state.translationThemePatterns || {}, currentThemeConfig = {
                    ...currentThemePatterns[config.translationTheme]
                  };
                  getThemeProps(config.translationTheme).forEach(
                    (props) => {
                      delete currentThemeConfig[props.name];
                    }
                  );
                  let newState = {
                    ...state,
                    translationThemePatterns: {
                      ...currentThemePatterns,
                      [config.translationTheme]: currentThemeConfig
                    }
                  };
                  return applyUserConfigCss(
                    document,
                    config.translationTheme,
                    {
                      matches: [],
                      excludeMatches: []
                    },
                    !0
                  ), newState;
                });
              },
              children: t5("resetToDefaultColor")
            }
          )
        ] })
      ] }) : null,
      /* @__PURE__ */ p5("details", { class: "pt-2 border-none", children: [
        /* @__PURE__ */ p5(
          "summary",
          {
            class: "text-sm",
            style: { textAlign: "right", lineHeight: "1rem" },
            children: t5("previewAllThemes")
          }
        ),
        translationThemes.map((item, index) => /* @__PURE__ */ p5("div", { class: "pt-2", children: /* @__PURE__ */ p5("label", { children: [
          /* @__PURE__ */ p5("div", { class: "flex justify-between", children: /* @__PURE__ */ p5("div", { children: [
            /* @__PURE__ */ p5(
              "input",
              {
                type: "radio",
                name: "theme",
                value: item,
                checked: item === config.translationTheme,
                onChange: (e3) => {
                  selectDisplay(e3.target.value);
                }
              }
            ),
            t5(`translationTheme.${item}`)
          ] }) }),
          /* @__PURE__ */ p5("p", { children: /* @__PURE__ */ p5(
            "font",
            {
              class: getTranslationWrapperClassNames(
                item,
                !1,
                [],
                !1,
                !1
              ).join(" "),
              children: /* @__PURE__ */ p5(
                "font",
                {
                  class: getTranslationInnerClassNames(item).join(" "),
                  children: sampleTargetText
                }
              )
            }
          ) })
        ] }) }, "theme-index-" + index))
      ] })
    ] }) }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: "",
          description: t5("useAboveStyleForTheseSites", {
            theme: t5(`translationTheme.${config.translationTheme}`)
          })
        }
      ),
      /* @__PURE__ */ p5("div", { class: "nav-right", children: /* @__PURE__ */ p5(
        "a",
        {
          href: "#",
          role: "button",
          class: "add-button secondary outline",
          onClick: (e3) => {
            e3.preventDefault(), setIsShowAddUrlModal(!isShowAddUrlModal);
          },
          children: t5("add")
        }
      ) })
    ] }),
    isShowAddUrlModal ? /* @__PURE__ */ p5(
      AddUrlModal,
      {
        toggleModal: (e3) => {
          e3.preventDefault(), setIsShowAddUrlModal(!isShowAddUrlModal);
        },
        onAddInterfaceUrl: (url, action) => {
          onAddInterfaceUrl(url, config.translationTheme, action);
        },
        urlValue,
        index: matchesIndex
      }
    ) : null,
    /* @__PURE__ */ p5(
      UrlList,
      {
        urls: getUrlArr(config),
        type: "matches",
        onDeleteUrl: (url) => {
          onDeleteUrl(url, config.translationTheme);
        },
        onEditUrl
      }
    ),
    isShowShortcutsModal ? /* @__PURE__ */ p5(
      ShortcutsModal,
      {
        note,
        corfirmText,
        fingerCountToToggleTranslagePageWhenTouching: config.generalRule.fingerCountToToggleTranslagePageWhenTouching,
        fingerCountToToggleTranslationMaskWhenTouching: config.generalRule.fingerCountToToggleTranslationMaskWhenTouching,
        shortcuts: allSupportedShortcuts.map((item) => ({
          name: item,
          shortcut: config.shortcuts[item],
          description: t5(`browser.${item}`),
          disabled: !isMonkey()
        })),
        onChange: (changedValue) => {
          if (changedValue) {
            let {
              shortcuts,
              fingerCountToToggleTranslagePageWhenTouching,
              fingerCountToToggleTranslationMaskWhenTouching
            } = changedValue;
            isMonkey() ? setSettings((state) => {
              shortcuts = shortcuts || [];
              let shortcutsMap = shortcuts.reduce(
                (acc, item) => (acc[item.name] = item.shortcut, acc),
                { ...state.shortcuts }
              ), newState = {
                ...state,
                shortcuts: shortcutsMap
              };
              return fingerCountToToggleTranslagePageWhenTouching !== void 0 && (newState.generalRule = {
                ...newState.generalRule,
                fingerCountToToggleTranslagePageWhenTouching
              }), fingerCountToToggleTranslationMaskWhenTouching !== void 0 && (newState.generalRule = {
                ...newState.generalRule,
                fingerCountToToggleTranslationMaskWhenTouching
              }), newState;
            }) : (fingerCountToToggleTranslagePageWhenTouching !== void 0 || fingerCountToToggleTranslationMaskWhenTouching !== void 0) && setSettings((state) => {
              let newState = {
                ...state
              };
              return fingerCountToToggleTranslagePageWhenTouching !== void 0 && (newState.generalRule = {
                ...newState.generalRule,
                fingerCountToToggleTranslagePageWhenTouching
              }), fingerCountToToggleTranslationMaskWhenTouching !== void 0 && (newState.generalRule = {
                ...newState.generalRule,
                fingerCountToToggleTranslationMaskWhenTouching
              }), newState;
            }), changedValue && changedValue.isClose && setIsShowShortcutsModal(!1);
          } else
            setIsShowShortcutsModal(!1), browserAPI.tabs.create({
              url: "chrome://extensions/shortcuts"
            });
        },
        onClose: () => {
          setIsShowShortcutsModal(!1);
        }
      }
    ) : null
  ] });
}

// pages/developer.tsx
function Options2() {
  let [settings, setSettings, _isPersistent, _error] = useUserConfig(), [config, setConfig] = P2(null), { t: t5 } = useI18n(), [allStorageObjects, setAllStorageObjects] = P2({}), [allLocalStorageObjects, setAllLocalStorageObjects] = P2(
    {}
  );
  j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    }), browserAPI.storage.sync.get(null).then((allStorageObjects2) => {
      setAllStorageObjects(allStorageObjects2), browserAPI.storage.local.get(null).then((allLocalStorageObjects2) => {
        setAllLocalStorageObjects(allLocalStorageObjects2);
      });
    });
  }, [settings]);
  let handleToggleDebug = (value) => {
    setSettings((state) => ({
      ...state,
      debug: value
    }));
  }, handleToggleBeta = (value) => {
    setSettings((state) => ({
      ...state,
      beta: value
    }));
  }, handleChangeValue = (value) => {
    setSettings(() => ({
      ...value
    }));
  }, handleChangeRules = (e3) => {
    try {
      let value = e3.target.value, currentSettings = { ...settings };
      if (!value)
        delete currentSettings.rules;
      else {
        let newRules = JSON.parse(value);
        if (!Array.isArray(newRules)) {
          error("Invalid rules, rules must be an array");
          return;
        }
        currentSettings.rules = newRules;
      }
      handleChangeValue(currentSettings), success(t5("saved"));
    } catch (e4) {
      error(`Invalid JSON ${e4.message}`);
    }
  }, handleChangeInjectedCss = (e3) => {
    let currentSettings = { ...settings };
    currentSettings.generalRule || (currentSettings.generalRule = {}), currentSettings.generalRule = {
      ...currentSettings.generalRule,
      injectedCss: e3.target.value || ""
    }, handleChangeValue(currentSettings), success(t5("saved"));
  }, handleChange = (e3) => {
    try {
      let newSettings = JSON.parse(
        e3.target.value
      );
      handleChangeValue(newSettings), success(t5("saved"));
    } catch (e4) {
      error(`Invalid JSON ${e4.message}`);
    }
  }, handleSave = (e3) => {
    e3.preventDefault();
  }, handleReset = (e3) => {
    e3.preventDefault(), confirm(t5("confirmResetConfig")) && (handleChangeValue(getEnvUserConfig()), clearLocalConfig().catch((e4) => {
      log_default.error("clean local config error", e4);
    }), clearBuildinConfig().catch((e4) => {
      log_default.error("clean buildin config error", e4);
    }), cleanCache().catch((e4) => {
      log_default.error("clean cache error", e4);
    }), success(t5("resetSuccess")));
  }, handleResetRules = (e3) => {
    e3.preventDefault();
    let currentSettings = { ...settings };
    delete currentSettings.rules, handleChangeValue(currentSettings), success(t5("resetThisSuccess"));
  }, handleResetInjectCss = (e3) => {
    e3.preventDefault();
    let currentSettings = { ...settings };
    currentSettings.generalRule || (currentSettings.generalRule = {}), currentSettings.generalRule = {
      ...currentSettings.generalRule
    }, delete currentSettings.generalRule.injectedCss, handleChangeValue(currentSettings), success(t5("resetThisSuccess"));
  }, defaultUserRulePlaceholder = `[{
  "matches": "www.google.com",
  "selectors": [".title"]
}, {
  "matches": "*.twitter.com",
  "selectors": [".text"],
  "excludeSelectors": ["footer"]
}]`;
  return config ? /* @__PURE__ */ p5("div", { children: [
    /* @__PURE__ */ p5("div", { class: "nav", children: /* @__PURE__ */ p5("strong", { class: "text-lg", children: t5("developer") }) }),
    /* @__PURE__ */ p5(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: t5("developerDescription", {
            1: "https://immersive-translate.owenyoung.com/advanced"
          })
        },
        class: "secondary text-xs text-gray-500 mb-4"
      }
    ),
    /* @__PURE__ */ p5("fieldset", { children: /* @__PURE__ */ p5("label", { for: "switch", children: [
      /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          id: "cache",
          name: "cache",
          role: "switch",
          onChange: () => {
            handleToggleDebug(!config.debug);
          },
          checked: config.debug
        }
      ),
      t5("toggleDebug")
    ] }) }),
    /* @__PURE__ */ p5("fieldset", { class: "mt-2", children: [
      /* @__PURE__ */ p5("label", { for: "switch", children: [
        /* @__PURE__ */ p5(
          "input",
          {
            type: "checkbox",
            id: "beta",
            name: "beta",
            role: "switch",
            onChange: () => {
              handleToggleBeta(!config.beta);
            },
            checked: !!config.beta
          }
        ),
        t5("toggleBeta")
      ] }),
      /* @__PURE__ */ p5(
        "small",
        {
          class: "text-gray-500",
          dangerouslySetInnerHTML: {
            __html: t5("betaDescription", {
              1: telegramGroupLink
            })
          }
        }
      )
    ] }),
    /* @__PURE__ */ p5("details", { class: "py-2", children: [
      /* @__PURE__ */ p5("summary", { children: "Edit User Rules" }),
      /* @__PURE__ */ p5(
        "textarea",
        {
          rows: 10,
          onChange: handleChangeRules,
          placeholder: defaultUserRulePlaceholder,
          value: settings.rules ? JSON.stringify(settings.rules || [], null, 2) : ""
        }
      ),
      /* @__PURE__ */ p5("div", { children: [
        /* @__PURE__ */ p5("a", { href: "#", class: "mr-3 !py-2", onClick: handleSave, role: "button", children: t5("save") }),
        /* @__PURE__ */ p5(
          "a",
          {
            class: "secondary text-sm mr-3",
            href: "https://immersive-translate.owenyoung.com/advanced",
            children: [
              t5("help"),
              "?"
            ]
          }
        ),
        /* @__PURE__ */ p5("a", { href: "#", onClick: handleResetRules, class: "text-sm secondary mr-2", children: t5("reset") })
      ] })
    ] }),
    /* @__PURE__ */ p5("details", { class: "py-2", children: [
      /* @__PURE__ */ p5("summary", { children: "Edit Injected CSS" }),
      /* @__PURE__ */ p5(
        "textarea",
        {
          rows: 10,
          onChange: handleChangeInjectedCss,
          placeholder: ".title { color: red }",
          value: settings.generalRule && settings.generalRule.injectedCss ? settings.generalRule.injectedCss : ""
        }
      ),
      /* @__PURE__ */ p5("div", { children: [
        /* @__PURE__ */ p5("a", { href: "#", class: "mr-3 !py-2", onClick: handleSave, role: "button", children: t5("save") }),
        /* @__PURE__ */ p5(
          "a",
          {
            class: "secondary text-sm mr-3",
            href: "https://immersive-translate.owenyoung.com/advanced",
            children: [
              t5("help"),
              "?"
            ]
          }
        ),
        /* @__PURE__ */ p5(
          "a",
          {
            href: "#",
            onClick: handleResetInjectCss,
            class: "text-sm secondary mr-2",
            children: t5("reset")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p5("details", { class: "py-2", children: [
      /* @__PURE__ */ p5("summary", { children: "Edit Full User Config" }),
      /* @__PURE__ */ p5(
        "textarea",
        {
          rows: 10,
          onChange: handleChange,
          value: JSON.stringify(settings, null, 2)
        }
      ),
      /* @__PURE__ */ p5("div", { children: [
        /* @__PURE__ */ p5("a", { href: "#", class: "mr-3 !py-2", onClick: handleSave, role: "button", children: t5("save") }),
        /* @__PURE__ */ p5(
          "a",
          {
            class: "secondary text-sm mr-3",
            href: "https://immersive-translate.owenyoung.com/advanced",
            children: [
              t5("help"),
              "?"
            ]
          }
        ),
        /* @__PURE__ */ p5("a", { href: "#", onClick: handleReset, class: "text-sm secondary mr-2", children: t5("reset") })
      ] })
    ] }),
    /* @__PURE__ */ p5("details", { class: "py-2", children: [
      /* @__PURE__ */ p5("summary", { children: "Click to expand the final config" }),
      /* @__PURE__ */ p5("pre", { children: /* @__PURE__ */ p5("code", { children: JSON.stringify(config, null, 2) }) })
    ] }),
    /* @__PURE__ */ p5("details", { class: "py-2", children: [
      /* @__PURE__ */ p5("summary", { children: "Click to expand the sync storage object" }),
      /* @__PURE__ */ p5("pre", { children: /* @__PURE__ */ p5("code", { children: JSON.stringify(allStorageObjects, null, 2) }) })
    ] }),
    /* @__PURE__ */ p5("details", { class: "py-2", children: [
      /* @__PURE__ */ p5("summary", { children: "Click to expand the local storage object" }),
      /* @__PURE__ */ p5("pre", { children: /* @__PURE__ */ p5("code", { children: JSON.stringify(allLocalStorageObjects, null, 2) }) })
    ] })
  ] }) : /* @__PURE__ */ p5("div", { children: "loading" });
}

// utils/date.ts
function formatFileNameDate() {
  let now = /* @__PURE__ */ new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
}

// components/config_sync.tsx
function DeleteButton(prop) {
  let { t: t5 } = useI18n(), { accessToken, id, listAllFiles } = prop, [deleteLoading, setDeleteLoading] = P2(!1);
  function deleteConfig(e3, id2) {
    e3.preventDefault(), setDeleteLoading(!0), new GoogleDriveAPI(accessToken).delete(id2).catch((error2) => {
      console.error(error2), error(t5("delete"));
    }).then(() => listAllFiles()).finally(() => setDeleteLoading(!1));
  }
  return /* @__PURE__ */ p5(
    "a",
    {
      href: "#",
      className: "secondary margin-left text-sm",
      onClick: (e3) => deleteConfig(e3, id),
      "aria-busy": deleteLoading,
      children: t5("delete")
    }
  );
}
function ConfigSyncModal(prop) {
  let { onClose, accessToken, authExpire } = prop, { t: t5 } = useI18n(), [settings, setSettings, _isPersistent, _error] = useUserConfig(), [files, setFiles] = P2([]), [firstLoad, setFirstLoad] = P2(!0), [exportLoading, setExportLoading] = P2(!1), [importLoadings, setImportLoadings] = P2({});
  j2(() => {
    accessToken && listAllFiles().then(() => setFirstLoad(!1));
  }, [accessToken]);
  let handleClickOverlay = (e3) => {
    e3.target && e3.target.id === "immersive-translate-overlay" && onClose();
  };
  function listAllFiles() {
    return new GoogleDriveAPI(accessToken).listAll().then((files2) => {
      setFiles(files2);
    }).catch((_e4) => authExpire());
  }
  function exportConfig(e3) {
    if (e3.preventDefault(), files.length >= 10)
      return error(
        t5("maxBackupFiles", {
          count: 10
        })
      );
    setExportLoading(!0);
    let filename = "immersive-translate-config-" + formatFileNameDate() + ".json";
    new GoogleDriveAPI(accessToken).uploadConfig(settings, filename).catch((error2) => {
      console.error(error2), error(t5("uploadFail"));
    }).then(() => listAllFiles()).finally(() => setExportLoading(!1));
  }
  function importConfig(e3, id, index) {
    e3.preventDefault(), setImportLoadings({
      [index]: !0
    }), new GoogleDriveAPI(accessToken).getConfig(id).then((config) => {
      setSettings(() => ({ ...config })), success(t5("importSuccess"));
    }).catch((error2) => {
      log_default.error(error2), error(t5("importFail"));
    }).finally(() => setImportLoadings({}));
  }
  function downloadConfig(id, name) {
    new GoogleDriveAPI(accessToken).getConfig(id).then((config) => {
      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2))
      ), element.setAttribute("download", name), element.style.display = "none", document.body.appendChild(element), element.click(), document.body.removeChild(element);
    }).catch((error2) => {
      log_default.error("download google config file failed", error2), error(t5("downloadFail") + ": " + error2.message);
    });
  }
  function revoke(e3) {
    e3.preventDefault(), setSettings({
      ...settings,
      autoSync: !1
    }), GoogleAuth.revoke(accessToken).then(() => onClose());
  }
  return /* @__PURE__ */ p5("dialog", { id: "immersive-translate-overlay", onClick: handleClickOverlay, open: !0, children: /* @__PURE__ */ p5("article", { class: "md:w-[32rem] px-4", children: [
    /* @__PURE__ */ p5(
      "a",
      {
        href: "#",
        title: t5("clickToDownload"),
        "aria-label": "Close",
        className: "close",
        "data-target": "modal-example",
        onClick: (e3) => {
          e3.preventDefault(), onClose();
        }
      }
    ),
    /* @__PURE__ */ p5("h4", { children: t5("syncTitle") }),
    /* @__PURE__ */ p5("div", { className: "mb-4", children: files.map((file, index) => /* @__PURE__ */ p5("div", { class: "flex flex-wrap justify-between", children: [
      /* @__PURE__ */ p5("div", { class: "mr-2 mb-2", children: [
        /* @__PURE__ */ p5("div", { children: /* @__PURE__ */ p5(
          "a",
          {
            href: "#",
            onClick: (e3) => {
              e3.preventDefault(), downloadConfig(file.id, file.name);
            },
            class: "block truncate w-40 sm:w-auto",
            children: file.name.replace("immersive-translate-", "")
          }
        ) }),
        /* @__PURE__ */ p5("div", { class: "text-xs text-gray-500", children: [
          new Date(file.modifiedTime).toLocaleString(),
          ",\xA0",
          humanReadableSize(parseInt(file.size))
        ] })
      ] }),
      /* @__PURE__ */ p5("div", { children: [
        /* @__PURE__ */ p5(
          "a",
          {
            href: "#",
            role: "button",
            className: "margin-right secondary",
            "aria-busy": importLoadings[index],
            disabled: importLoadings[index],
            onClick: (e3) => importConfig(e3, file.id, index),
            children: t5("import_hint")
          }
        ),
        /* @__PURE__ */ p5(
          DeleteButton,
          {
            accessToken,
            id: file.id,
            listAllFiles
          }
        )
      ] })
    ] }, "file" + index)) }),
    /* @__PURE__ */ p5("div", { className: "flex items-center", children: [
      /* @__PURE__ */ p5(
        "a",
        {
          href: "#",
          role: "button",
          className: "mr-4",
          "data-target": "modal-example",
          "aria-busy": exportLoading,
          onClick: exportConfig,
          disabled: firstLoad,
          children: t5("create_new_backup")
        }
      ),
      /* @__PURE__ */ p5(
        "a",
        {
          href: "#",
          className: "secondary text-sm",
          "data-target": "modal-example",
          onClick: revoke,
          disabled: firstLoad,
          children: t5("revokeAuth")
        }
      )
    ] })
  ] }) });
}

// pages/import_export.tsx
function ImportExport() {
  let [settings, setSettings, isPersistent, _error, rawSetValue] = useUserConfig(), [config, setConfig] = P2(null), [localConfig, setLocalConfigState] = P2(null), setLocalConfig2 = (localConfig2) => {
    setLocalConfigState(localConfig2), setLocalConfig(localConfig2);
  }, { t: t5, setLang } = useI18n();
  j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    }), getLocalConfig().then((localConfig2) => {
      setLocalConfig2(localConfig2);
    });
  }, []);
  let handleChangeValue = (value) => {
    setSettings(() => ({
      ...value
    }));
  }, handleImportFile = (e3) => {
    e3.preventDefault();
    let element = document.createElement("input");
    element.setAttribute("type", "file"), element.setAttribute("accept", "text/plain"), element.style.display = "none", document.body.appendChild(element), element.oninput = (e4) => {
      let input = e4.target, reader = new FileReader();
      reader.onload = function() {
        try {
          let newSettings = JSON.parse(reader.result);
          handleChangeValue(newSettings), success(t5("successImportConfig"));
        } catch (e5) {
          error(`Invalid JSON ${e5.message}`);
        }
      }, reader.readAsText(input.files[0]);
    }, element.click(), document.body.removeChild(element);
  }, handleReset = (e3) => {
    e3.preventDefault(), confirm(t5("confirmResetConfig")) && (rawSetValue(getEnvUserConfig()), success(t5("resetSuccess")), setTimeout(() => {
      browserAPI.storage.local.remove(GOOGLE_ACCESS_TOKEN_KEY), clearLocalConfig().catch((e4) => {
        log_default.error("clean local config error", e4);
      });
    }, 500));
  }, [showSyncModal, setShowSyncModal] = P2(!1), [authLoading, setAuthLoading] = P2(!1), [manualAuthLoading, setManualAuthLoading] = P2(!1), [accessToken, setAccessToken] = P2("");
  j2(() => {
    if (isUserscriptRuntime() && isPersistent) {
      let check = localStorage.getItem(AUTH_FLOW_FLAG);
      if (localStorage.removeItem(AUTH_FLOW_FLAG), check) {
        let rawAuthInfoStr = globalThis.localStorage.getItem(AUTH_STATE_FLAG);
        log_default.debug("import_export", "rawAuthInfoStr", rawAuthInfoStr);
        let authInfo = {}, state = {}, token = "";
        if (rawAuthInfoStr) {
          globalThis.localStorage.removeItem(AUTH_STATE_FLAG);
          try {
            authInfo = JSON.parse(rawAuthInfoStr), state = authInfo.state || {}, token = authInfo.access_token || "";
          } catch (e3) {
            log_default.error("parse state error", e3);
          }
        }
        if (token && state && (GoogleAuth.setAuthInfo({ access_token: token }), log_default.debug("import_export", "Google OAuth:", authInfo), authInfo)) {
          let state2 = authInfo.state;
          log_default.debug("state", state2), state2?.mode === "auto" ? (setAuthLoading(!0), syncLatestWithDrive(token)) : (setManualAuthLoading(!0), afterAuthSuccess(token));
        }
      }
    }
  }, [isPersistent]);
  function handlerDriveAuth() {
    setAuthLoading(!0), getAccessToken(
      {
        source: globalThis.location.href,
        mode: "auto"
      },
      !0
    ).then((token) => {
      log_default.debug("import_export", "Google OAuth:" + token), token !== null && syncLatestWithDrive(token);
    }).catch((error2) => {
      error2 && error2.message === "tokenValidateErrorRedirectToAuthUrl" ? log_default.debug("tokenValidateErrorRedirectToAuthUrl, ignore") : afterAuthFail(error2);
    });
  }
  function handlerManualDriveAuth() {
    setManualAuthLoading(!0), setShowSyncModal(!1), getAccessToken(
      {
        source: globalThis.location.href,
        mode: "manual"
      },
      !0
    ).then((token) => {
      log_default.debug("import_export", "Google OAuth:" + token), token !== null && afterAuthSuccess(token);
    }).catch((error2) => {
      error2 && error2.message === "tokenValidateErrorRedirectToAuthUrl" ? log_default.debug("tokenValidateErrorRedirectToAuthUrl, ignore") : afterAuthFail(error2);
    });
  }
  function authExpire() {
    setAccessToken(""), handlerDriveAuth();
  }
  function afterAuthSuccess(accessToken2) {
    setAccessToken(accessToken2), setManualAuthLoading(!1), setShowSyncModal(!0);
  }
  function afterAuthFail(error2) {
    setAuthLoading(!1), setManualAuthLoading(!1), setShowSyncModal(!1), setSettings({
      ...settings,
      autoSync: !1
    }), log_default.error("import_export", "Google OAuth error:" + error2), error(t5("authFail"));
  }
  function syncLatestWithDrive(accessToken2) {
    setAuthLoading(!0), log_default.debug("sync latest with drive", accessToken2, settings), setAccessToken(accessToken2), autoSyncStrategy(
      accessToken2,
      settings,
      (newSettings) => {
        newSettings.interfaceLanguage && setLang(newSettings.interfaceLanguage), rawSetValue(newSettings);
      },
      (isoDate) => setLocalConfig2({
        ...localConfig,
        lastSyncedAt: isoDate
      }),
      (isoDate) => setSettings({ ...settings, updatedAt: isoDate }),
      (isChanged) => {
        isChanged ? success(t5("successSyncConfig")) : success(t5("successSyncButNoChange"));
      },
      (reason) => error(t5("syncFail") + reason)
    ).finally(() => {
      setAuthLoading(!1);
    });
  }
  function toggleAutoSync(e3) {
    setSettings({
      ...settings,
      autoSync: e3.checked
    }), e3.checked && handlerDriveAuth();
  }
  return config ? /* @__PURE__ */ p5("div", { class: "pb-4", children: [
    /* @__PURE__ */ p5("div", { class: "nav", children: /* @__PURE__ */ p5("strong", { class: "text-lg", children: t5("import_export_title") }) }),
    /* @__PURE__ */ p5("div", { class: "pb-2", children: [
      /* @__PURE__ */ p5(
        "a",
        {
          class: "mr-2 secondary mb-2 !text-sm",
          onClick: handleImportFile,
          href: "#",
          role: "button",
          children: [
            /* @__PURE__ */ p5(
              "svg",
              {
                class: "inline mr-1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "18",
                height: "18",
                children: [
                  /* @__PURE__ */ p5("path", { fill: "none", d: "M0 0h24v24H0z" }),
                  /* @__PURE__ */ p5("path", { d: "M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z" })
                ]
              }
            ),
            t5("import")
          ]
        }
      ),
      /* @__PURE__ */ p5(
        "a",
        {
          href: "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(settings, null, 2)),
          download: "immersive-translate-config-" + formatFileNameDate() + ".txt",
          class: "secondary mr-2  mb-2 !text-sm",
          role: "button",
          children: [
            /* @__PURE__ */ p5(
              "svg",
              {
                class: "inline mr-1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "18",
                height: "18",
                children: [
                  /* @__PURE__ */ p5("path", { fill: "none", d: "M0 0h24v24H0z" }),
                  /* @__PURE__ */ p5("path", { d: "M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z" })
                ]
              }
            ),
            t5("export")
          ]
        }
      ),
      /* @__PURE__ */ p5("a", { href: "#", onClick: handleReset, class: "secondary text-sm", children: t5("reset") })
    ] }),
    /* @__PURE__ */ p5("details", { class: "mt-4 mb-6", children: [
      /* @__PURE__ */ p5("summary", { children: t5("clickToExpandConfig") }),
      /* @__PURE__ */ p5("pre", { children: /* @__PURE__ */ p5("code", { children: JSON.stringify(settings, null, 2) }) })
    ] }),
    /* @__PURE__ */ p5("hgroup", { class: "my-2", children: [
      /* @__PURE__ */ p5("h5", { children: t5("syncToCloud") }),
      /* @__PURE__ */ p5("h6", { class: "!text-sm", children: t5("syncToCloudDescription") })
    ] }),
    /* @__PURE__ */ p5("div", { children: [
      /* @__PURE__ */ p5(
        "a",
        {
          className: "mr-4 secondary  mb-2 !text-sm ",
          onClick: (e3) => {
            e3.preventDefault(), handlerDriveAuth();
          },
          "aria-busy": authLoading,
          href: "#",
          role: "button",
          children: [
            authLoading ? /* @__PURE__ */ p5(L, {}) : /* @__PURE__ */ p5(
              "svg",
              {
                class: "inline mr-1",
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ p5(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M15.375 19.25q-.525.25-.95-.038q-.425-.287-.425-.937q0-.25.163-.487q.162-.238.412-.363q1.575-.75 2.5-2.225T18 11.95q0-1.125-.425-2.188Q17.15 8.7 16.25 7.8L16 7.55V9q0 .425-.287.712Q15.425 10 15 10t-.712-.288Q14 9.425 14 9V5q0-.425.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6h-1.75l.4.35q1.225 1.225 1.788 2.662Q20 10.45 20 11.95q0 2.4-1.25 4.362q-1.25 1.963-3.375 2.938ZM5 20q-.425 0-.713-.288Q4 19.425 4 19t.287-.712Q4.575 18 5 18h1.75l-.4-.35q-1.225-1.225-1.788-2.662Q4 13.55 4 12.05q0-2.4 1.25-4.363Q6.5 5.725 8.625 4.75q.525-.25.95.037q.425.288.425.938q0 .25-.162.487q-.163.238-.413.363q-1.575.75-2.5 2.225T6 12.05q0 1.125.425 2.187Q6.85 15.3 7.75 16.2l.25.25V15q0-.425.288-.713Q8.575 14 9 14t.713.287Q10 14.575 10 15v4q0 .425-.287.712Q9.425 20 9 20Z"
                  }
                )
              }
            ),
            t5("syncToGoogleDrive")
          ]
        }
      ),
      /* @__PURE__ */ p5(
        "a",
        {
          href: "#",
          "aria-busy": manualAuthLoading,
          onClick: (e3) => {
            e3.preventDefault(), handlerManualDriveAuth();
          },
          class: "secondary text-sm",
          children: t5("backupToCloud")
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "text-xs text-gray-500", children: localConfig?.lastSyncedAt && t5("lastSyncedAt", {
      date: new Date(localConfig.lastSyncedAt).toLocaleString()
    }) }),
    localConfig?.lastSyncErrorMessage && /* @__PURE__ */ p5("p", { class: "mt-2 text-xs text-red-500" }),
    showSyncModal ? /* @__PURE__ */ p5(
      ConfigSyncModal,
      {
        onClose: () => setShowSyncModal(!1),
        authExpire,
        accessToken
      }
    ) : null
  ] }) : null;
}

// hooks/use_buildin_config.ts
var SETTINGS_KEY2 = "buildinConfig", INITIAL_VALUE2 = {}, useBuildinConfig = createChromeStorageStateHookLocal(
  SETTINGS_KEY2,
  INITIAL_VALUE2
);

// utils/compare_version.ts
function isAVersionGreaterOrEqualWithB(a4, b6) {
  return a4.localeCompare(b6, void 0, {
    numeric: !0,
    sensitivity: "base"
  }) >= 0;
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

// pages/about.tsx
var AlreadyLatest = ({ date }) => {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: [
    t5("The local rules are up to date"),
    " ",
    new Date(date).toLocaleString()
  ] });
}, SyncSuccess = ({ date }) => {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: [
    t5("Successfully synchronized with the latest official rules:"),
    " ",
    new Date(date).toLocaleString()
  ] });
}, Checking = () => {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", "aria-busy": !0, children: [
    t5("Checking for updates"),
    "..."
  ] });
}, Syncing = () => {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: [
    t5("Rules are being synchronized"),
    "..."
  ] });
}, LocalVersionIsTooOld = ({ minVersion }) => {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: t5("localVersionIsTooOld", {
    minVersion
  }) });
}, NewVersion = ({ latestVersion }) => {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: [
    t5("foundNewVersion"),
    ":",
    " ",
    /* @__PURE__ */ p5("a", { href: "https://github.com/immersive-translate/immersive-translate/releases", children: latestVersion })
  ] });
}, CurrentLatestVersion = () => {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: t5("theLocalExtensionIsUpToUpdate") });
}, SyncFailed = ({
  message,
  handleSyncing,
  date
}) => {
  let { t: t5 } = useI18n();
  return /* @__PURE__ */ p5("p", { class: "text-sm", children: [
    t5("failToSyncRules"),
    " ",
    /* @__PURE__ */ p5("a", { onClick: handleSyncing, children: t5("retry") }),
    /* @__PURE__ */ p5("br", {}),
    t5("failedReason"),
    "\uFF1A",
    message,
    /* @__PURE__ */ p5("br", {}),
    t5("currentRuleVersion"),
    "\uFF1A",
    date
  ] });
};
function About() {
  let [localBuildinConfigUpdatedAt, setLocalBuildinConfigUpdatedAt] = P2(null), { t: t5 } = useI18n(), [cacheSize, setCacheSize] = P2(t5("calculating") + "..."), [remoteConfig, setRemoteConfig] = P2(null), [_4, setStorageBuildinConfig] = useBuildinConfig(), [isNeedUpdate, setIsNeedUpdate] = P2(null), [syncErrorMessage, setSyncErrorMessage] = P2(""), [isSyncSuccess, setIsSyncSuccess] = P2(!1), [isInvalidLocalVersion, setIsInvalidLocalVersion] = P2(
    !1
  ), [config, setConfig] = P2(null), [isLatestVersion, setIsLatestVersion] = P2(null), [settings, setSettings, _isPersistent, _error] = useUserConfig(), [isCleaning, setIsCleaning] = P2(!1), version = getVersion(), handleSyncing = async () => {
    setSyncErrorMessage("");
    let finalRemoteConfig = remoteConfig;
    if (remoteConfig === null)
      try {
        let response = await request({ url: buildinConfigSyncUrl });
        response ? (setRemoteConfig(response), finalRemoteConfig = response, setIsSyncSuccess(!0)) : (setSyncErrorMessage(t5("unknownError")), setIsNeedUpdate(null));
      } catch (e3) {
        setIsNeedUpdate(null), setSyncErrorMessage(e3.message);
        return;
      }
    finalRemoteConfig !== null ? (setStorageBuildinConfig(finalRemoteConfig), setIsNeedUpdate(!1), setLocalBuildinConfigUpdatedAt(finalRemoteConfig.buildinConfigUpdatedAt)) : (setSyncErrorMessage(t5("canNotFetchRemoteRule")), setIsNeedUpdate(null));
  };
  j2(() => {
    getConfig().then((localConfig) => {
      let localConfigUpdatedAtIsoString = localConfig.buildinConfigUpdatedAt;
      setConfig(localConfig);
      let localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString);
      setLocalBuildinConfigUpdatedAt(localConfigUpdatedAtIsoString), request({
        url: buildinConfigSyncUrl
      }).then((data) => {
        let remoteMinVersion = data.minVersion, localVersion = version;
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
    }), getCacheSize().then((size) => {
      setCacheSize(size);
    });
  }, []), j2(() => {
    getConfig().then((config2) => {
      setConfig(config2);
    });
  }, [settings, localBuildinConfigUpdatedAt]);
  let handleToggleAlpha = (_e4) => {
    setSettings((state) => {
      let action = !state.alpha;
      return action ? success(t5("enableAlphaSuccess")) : success(t5("disableAlphaSuccess")), {
        ...state,
        alpha: action
      };
    });
  }, handleCleanCache = (e3) => {
    e3.preventDefault(), e3.stopPropagation(), setIsCleaning(!0), clearBuildinConfig().catch((e4) => {
      log_default.error("clear build config failed:", e4);
    }), clearLocalConfig().catch((e4) => {
      log_default.error("clear local config failed:", e4);
    }), cleanCache().then(() => {
      setIsCleaning(!1), success("\u6E05\u7406\u6210\u529F"), setCacheSize("0 B");
    }).catch((e4) => {
      setIsCleaning(!1), error(e4.message);
    });
  }, handleCacheOption = (checked) => {
    setSettings((state) => ({
      ...state,
      cache: checked
    }));
  }, handleEnabledOption = (checked) => {
    setSettings((state) => ({
      ...state,
      enabled: checked
    }));
  };
  return config ? /* @__PURE__ */ p5("div", { class: "text-sm", children: [
    /* @__PURE__ */ p5("div", { class: "nav", children: /* @__PURE__ */ p5(
      "strong",
      {
        onClick: onClickMultipleTimes(7)(handleToggleAlpha),
        class: "text-lg immersive-translate-no-select",
        children: t5("about")
      }
    ) }),
    /* @__PURE__ */ p5(
      "p",
      {
        onClick: onClickMultipleTimes(7)(handleToggleAlpha),
        class: "mb-2 immersive-translate-no-select",
        children: [
          "V",
          version
        ]
      }
    ),
    isLatestVersion === !1 && /* @__PURE__ */ p5(NewVersion, { latestVersion: remoteConfig?.latestVersion }),
    isLatestVersion === !0 && /* @__PURE__ */ p5(CurrentLatestVersion, {}),
    /* @__PURE__ */ p5("fieldset", { children: /* @__PURE__ */ p5("label", { for: "switch", children: [
      /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          id: "enabled",
          name: "enabled",
          role: "switch",
          onChange: () => {
            handleEnabledOption(!config.enabled);
          },
          checked: config.enabled
        }
      ),
      t5("enabledExtension")
    ] }) }),
    /* @__PURE__ */ p5("fieldset", { children: /* @__PURE__ */ p5("label", { for: "switch", children: [
      /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          id: "cache",
          name: "cache",
          role: "switch",
          onChange: () => {
            handleCacheOption(!config.cache);
          },
          checked: config.cache
        }
      ),
      t5("allowCacheTranslations")
    ] }) }),
    !isMonkey() && cacheSize && /* @__PURE__ */ p5("p", { class: "text-sm", children: [
      t5("cacheSize"),
      "\xA0",
      cacheSize,
      " \xA0 ",
      isCleaning ? /* @__PURE__ */ p5("span", { children: [
        t5("cleaning"),
        "..."
      ] }) : /* @__PURE__ */ p5("a", { class: "text-sm", href: "#", onClick: handleCleanCache, children: t5("cleanCache") })
    ] }),
    syncErrorMessage ? /* @__PURE__ */ p5(
      SyncFailed,
      {
        handleSyncing,
        message: syncErrorMessage,
        date: localBuildinConfigUpdatedAt || ""
      }
    ) : isInvalidLocalVersion ? /* @__PURE__ */ p5(LocalVersionIsTooOld, { minVersion: remoteConfig.minVersion }) : isNeedUpdate === null ? /* @__PURE__ */ p5(Checking, {}) : isNeedUpdate === !0 ? /* @__PURE__ */ p5(Syncing, {}) : isSyncSuccess ? /* @__PURE__ */ p5(SyncSuccess, { date: localBuildinConfigUpdatedAt }) : /* @__PURE__ */ p5(AlreadyLatest, { date: localBuildinConfigUpdatedAt }),
    /* @__PURE__ */ p5(
      "blockquote",
      {
        class: "text-sm",
        dangerouslySetInnerHTML: {
          __html: t5("aboutIntro", {
            1: "https://immersive-translate.owenyoung.com/thanks",
            2: "https://immersive-translate.owenyoung.com/donate",
            3: "https://twitter.com/OwenYoungZh",
            4: "https://t.me/owenyoungzh",
            5: "https://immersivetranslate.substack.com",
            6: "https://immersive-translate.owenyoung.com/services/deepL.html"
          })
        }
      }
    ),
    /* @__PURE__ */ p5("ul", { class: "text-sm ml-4", children: [
      /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5(
        "a",
        {
          class: "secondary",
          href: "https://github.com/immersive-translate/immersive-translate/issues",
          children: t5("feedback")
        }
      ) }),
      /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5("a", { class: "secondary", href: telegramGroupLink, children: t5("joinTelegramGroup") }) }),
      /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5("a", { class: "secondary", href: "https://t.me/immersivetranslate", children: t5("joinTelegramChannel") }) }),
      /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5(
        "a",
        {
          class: "secondary",
          href: "https://immersive-translate.owenyoung.com/CHANGELOG.html",
          children: t5("changelog")
        }
      ) }),
      /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5(
        "a",
        {
          class: "secondary",
          href: "https://immersive-translate.owenyoung.com/",
          children: t5("projectHomepage")
        }
      ) }),
      /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5(
        "a",
        {
          class: "secondary",
          href: "https://github.com/immersive-translate/immersive-translate/",
          children: t5("Github")
        }
      ) }),
      /* @__PURE__ */ p5("li", { children: /* @__PURE__ */ p5(
        "a",
        {
          class: "secondary",
          href: "https://immersive-translate.owenyoung.com/donate.html",
          children: t5("sponsorLabel")
        }
      ) })
    ] }),
    /* @__PURE__ */ p5("div", { class: "flex justify-center", children: /* @__PURE__ */ p5(
      "iframe",
      {
        src: "https://immersivetranslate.substack.com/embed",
        width: "480",
        height: "320",
        style: "border:1px solid #EEE; background:white;",
        frameBorder: 0,
        scrolling: "no"
      }
    ) })
  ] }) : null;
}

// pages/advanced.tsx
function Options3() {
  let buildInConfig = getBuildInConfig(), [settings, setSettings, _isPersistent, error2] = useUserConfig(), [ctx, setCtx] = P2(null), { t: t5 } = useI18n();
  j2(() => {
    getConfig().then((config2) => {
      getContext({
        config: config2,
        url: globalThis.location.href
      }).then((ctx2) => {
        setCtx(ctx2);
      });
    });
  }, [settings]);
  let selectDisplay = (theme) => {
    setSettings((state) => ({ ...state, translationTheme: theme }));
  }, selectInterfaceLanguage = (lang) => {
    setSettings((state) => ({ ...state, interfaceLanguage: lang }));
  };
  if (!ctx)
    return /* @__PURE__ */ p5("div", { children: "loading" });
  let config = ctx.config;
  return /* @__PURE__ */ p5("div", { children: [
    /* @__PURE__ */ p5("div", { class: "nav", children: /* @__PURE__ */ p5("strong", { class: "text-lg", children: t5("advanced") }) }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("translate all areas of the page"),
          description: t5("translationAreaDescription")
        }
      ),
      /* @__PURE__ */ p5("label", { for: "translationAreaDescription", children: /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          id: "translationAreaDescription",
          name: "switch",
          role: "switch",
          onChange: (e3) => {
            let checked = e3.target.checked;
            setSettings((state) => ({
              ...state,
              translationArea: checked ? "body" : "main"
            }));
          },
          checked: config.translationArea === "body"
        }
      ) })
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("translate to the bottom of the page"),
          description: t5("translateToThePageEndImmediatelyDescription")
        }
      ),
      /* @__PURE__ */ p5("label", { for: "translateToThePageEndImmediatelyDescription", children: /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          onChange: (e3) => {
            let checked = e3.target.checked;
            setSettings((state) => ({
              ...state,
              translationStartMode: checked ? "immediate" : "dynamic"
            }));
          },
          checked: config.translationStartMode === "immediate",
          id: "translateToThePageEndImmediatelyDescription",
          name: "switch",
          role: "switch"
        }
      ) })
    ] }),
    !isMonkey() && /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(NavLeft, { title: t5("isShowContextMenu") }),
      /* @__PURE__ */ p5("label", { for: "isShowContextMenu", children: /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          onChange: (e3) => {
            let checked = e3.target.checked;
            createContextMenu({
              ...ctx.config,
              isShowContextMenu: checked
            }), setSettings((state) => ({
              ...state,
              isShowContextMenu: checked
            }));
          },
          checked: ctx.config.isShowContextMenu === !0,
          id: "isShowContextMenu",
          name: "switch",
          role: "switch"
        }
      ) })
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("isTranslateTitle"),
          description: t5("isTranslateTitleDescription")
        }
      ),
      /* @__PURE__ */ p5("label", { for: "isTranslateTitle", children: /* @__PURE__ */ p5(
        "input",
        {
          type: "checkbox",
          id: "isTranslateTitle",
          name: "isTranslateTitle",
          role: "switch",
          onChange: (e3) => {
            let checked = e3.target.checked;
            setSettings((state) => ({
              ...state,
              generalRule: {
                ...state.generalRule,
                isTranslateTitle: checked
              }
            }));
          },
          checked: config.generalRule.isTranslateTitle
        }
      ) })
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("loadingThemeTitle"),
          description: t5("loadingThemeDescription")
        }
      ),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select",
          onChange: (e3) => {
            setSettings((state) => ({
              ...state,
              loadingTheme: e3.target.value
            }));
          },
          children: [
            /* @__PURE__ */ p5(
              "option",
              {
                value: "spinner",
                selected: config.loadingTheme === "spinner",
                children: t5("loadingTheme.spinner")
              }
            ),
            /* @__PURE__ */ p5("option", { value: "text", selected: config.loadingTheme === "text", children: t5("loadingTheme.text") }),
            /* @__PURE__ */ p5("option", { value: "none", selected: config.loadingTheme === "none", children: t5("loadingTheme.none") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("translationLineBreakSettingTitle"),
          description: t5("translationLineBreakSettingDescription", {
            count: buildInConfig.generalRule.blockMinTextCount
          })
        }
      ),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select",
          onChange: (e3) => {
            setSettings((state) => {
              let currentGeneralRule = state.generalRule || {};
              return parseInt(e3.target.value) === 0 ? currentGeneralRule = {
                ...currentGeneralRule,
                blockMinTextCount: 0,
                blockMinWordCount: 0
              } : currentGeneralRule = {
                ...currentGeneralRule,
                blockMinTextCount: buildInConfig.generalRule.blockMinTextCount,
                blockMinWordCount: buildInConfig.generalRule.blockMinWordCount
              }, {
                ...state,
                generalRule: currentGeneralRule
              };
            });
          },
          children: [
            /* @__PURE__ */ p5(
              "option",
              {
                value: 32,
                selected: config.generalRule.blockMinTextCount > 0,
                children: t5("smartLineBreak")
              }
            ),
            /* @__PURE__ */ p5(
              "option",
              {
                value: 0,
                selected: config.generalRule.blockMinTextCount === 0,
                children: t5("alwaysLineBreak")
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(
        NavLeft,
        {
          title: t5("tempTranslateDomainTitle"),
          description: t5("tempTranslateDomainDescription")
        }
      ),
      /* @__PURE__ */ p5(
        "select",
        {
          class: "select",
          onChange: (e3) => {
            setSettings((state) => ({
              ...state,
              tempTranslateDomainMinutes: parseInt(
                e3.target.value
              )
            }));
          },
          children: [
            /* @__PURE__ */ p5("option", { value: 0, selected: config.tempTranslateDomainMinutes === 0, children: t5("disabled") }),
            /* @__PURE__ */ p5("option", { value: 5, selected: config.tempTranslateDomainMinutes === 5, children: t5("xMinutes", {
              count: 5
            }) }),
            /* @__PURE__ */ p5(
              "option",
              {
                value: 10,
                selected: config.tempTranslateDomainMinutes === 10,
                children: t5("xMinutes", {
                  count: 10
                })
              }
            ),
            /* @__PURE__ */ p5(
              "option",
              {
                value: 15,
                selected: config.tempTranslateDomainMinutes === 15,
                children: t5("xMinutes", {
                  count: 15
                })
              }
            ),
            /* @__PURE__ */ p5(
              "option",
              {
                value: 30,
                selected: config.tempTranslateDomainMinutes === 30,
                children: t5("xMinutes", {
                  count: 30
                })
              }
            ),
            /* @__PURE__ */ p5(
              "option",
              {
                value: 60,
                selected: config.tempTranslateDomainMinutes === 60,
                children: t5("xMinutes", {
                  count: 60
                })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ p5("div", { class: "nav", children: [
      /* @__PURE__ */ p5(NavLeft, { title: t5("the number of characters to be translated first") }),
      /* @__PURE__ */ p5("label", { for: "count", children: /* @__PURE__ */ p5(
        "input",
        {
          type: "number",
          id: "count",
          onChange: (e3) => {
            let count2 = e3.target.value;
            setSettings((state) => ({
              ...state,
              immediateTranslationTextCount: parseInt(count2)
            }));
          },
          name: "count",
          value: config.immediateTranslationTextCount,
          placeholder: "Text Length",
          required: !0
        }
      ) })
    ] })
  ] });
}

// twind_config.ts
var twind_config_default = Rt({
  presets: [y(), Ce2()]
});

// pages/options.tsx
function main() {
  let mountPoint = document.getElementById("mount");
  mountPoint && (async () => {
    $e(twind_config_default);
    let config = await getConfig();
    config.debug && log_default.setLevel("debug"), globalThis.location.hash || (globalThis.location.hash = "#general");
    let ctx = await getContext({
      url: "http://localhost",
      config
    });
    injectCssToFrame(document, ctx), re(
      /* @__PURE__ */ p5(
        TranslateProvider,
        {
          lang: config.interfaceLanguage,
          fallbackLang: "zh-CN",
          translations: locales_default,
          children: /* @__PURE__ */ p5(App, { donateUrl: config.donateUrl })
        }
      ),
      mountPoint
    );
  })();
}
function App(props) {
  let route = useRoute(), { t: t5 } = useI18n(), version = getVersion(), navs = [
    {
      name: t5("general"),
      props: {
        href: "#general",
        className: "secondary"
      }
    },
    {
      name: t5("interface"),
      props: {
        href: "#interface",
        className: "secondary"
      }
    },
    {
      name: t5("advanced"),
      props: {
        href: "#advanced",
        className: "secondary"
      }
    },
    {
      name: t5("import_export"),
      props: {
        href: "#import_export",
        className: "secondary"
      }
    },
    {
      name: t5("about"),
      props: {
        href: "#about",
        className: "secondary"
      }
    }
  ];
  return navs.forEach((nav) => {
    route === nav.props.href && (nav.props.className = "primary", nav.props["aria-current"] = "page");
  }), /* @__PURE__ */ p5(L, { children: /* @__PURE__ */ p5("main", { class: "container-fluid", children: [
    /* @__PURE__ */ p5("aside", { children: /* @__PURE__ */ p5("nav", { class: "flex flex-col h-full justify-between", children: [
      /* @__PURE__ */ p5("div", { children: [
        /* @__PURE__ */ p5("hgroup", { class: "mb-2", children: [
          /* @__PURE__ */ p5(
            "h4",
            {
              class: "cursor-pointer p-0 m-0",
              onClick: () => {
                globalThis.location.hash = "#general";
              },
              children: t5("browser.brandName")
            }
          ),
          /* @__PURE__ */ p5("h6", { class: "!text-sm", children: version })
        ] }),
        /* @__PURE__ */ p5("ul", { class: "flex flex-wrap  justify-between md:block text-sm md:text-base", children: navs.map((nav, index) => /* @__PURE__ */ p5("li", { class: "li", children: /* @__PURE__ */ p5("a", { ...nav.props, children: nav.name }) }, `nav-${index}`)) })
      ] }),
      /* @__PURE__ */ p5("div", { class: "m-0 p-0 flex flex-col", children: [
        /* @__PURE__ */ p5("a", { class: "py-3 text-xs no-focus secondary", href: props.donateUrl, children: t5("donateCafe") }),
        /* @__PURE__ */ p5("a", { class: "py-3 text-xs no-focus secondary", href: "#about", children: t5("feedbackAndJoin") }),
        /* @__PURE__ */ p5(
          "a",
          {
            class: "py-3 text-xs no-focus secondary",
            href: "https://immersive-translate.owenyoung.com/",
            children: t5("document")
          }
        ),
        /* @__PURE__ */ p5("a", { class: "py-3 text-xs no-focus secondary", href: "#developer", children: t5("developer") })
      ] })
    ] }) }),
    /* @__PURE__ */ p5("div", { role: "main", children: /* @__PURE__ */ p5(
      Switch,
      {
        value: route,
        defaultCase: /* @__PURE__ */ p5(General, {}),
        cases: {
          "#general": /* @__PURE__ */ p5(General, {}),
          "#interface": /* @__PURE__ */ p5(Options, {}),
          "#import_export": /* @__PURE__ */ p5(ImportExport, {}),
          "#about": /* @__PURE__ */ p5(About, {}),
          "#advanced": /* @__PURE__ */ p5(Options3, {}),
          "#developer": /* @__PURE__ */ p5(Options2, {})
        }
      }
    ) })
  ] }) });
}

// options.tsx
main();
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
