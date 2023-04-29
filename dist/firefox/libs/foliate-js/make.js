(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  };

  // <define:process.env>
  var define_process_env_default = { BUILD_TIME: "2023-04-29T17:31:52.369Z", VERSION: "0.4.6", PROD: "1", REDIRECT_URL: "https://immersive-translate.owenyoung.com/auth-done/", IMMERSIVE_TRANSLATE_INJECTED_CSS: `:root {
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
/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(10%) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"]
  .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"]
  .immersive-translate-target-inner {
  filter: opacity(10%)  !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"]
  .immersive-translate-target-inner:hover {
  filter: none !important;
}
/* opacity theme end */

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
`, IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS: `html {
  font-size: 17px;
}
.immersive-translate-popup-container {
  position: fixed;
  padding: 0;
  z-index: 999999;
  top: 335px;
  right: 0;
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
  border: none;
  padding: 0;
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
`, IMMERSIVE_TRANSLATE_POPUP_HTML: `<div
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
  var findIndices = (arr, f3) => arr.map((x3, i2, a) => f3(x3, i2, a) ? i2 : null).filter((x3) => x3 != null), splitAt = (arr, is2) => [-1, ...is2, arr.length].reduce(({ xs: xs2, a }, b4) => ({ xs: xs2?.concat([arr.slice(a + 1, b4)]) ?? [], a: b4 }), {}).xs, concatArrays = (a, b4) => a.slice(0, -1).concat([a[a.length - 1].concat(b4[0])]).concat(b4.slice(1)), isNumber = /\d/, isCFI = /^epubcfi\((.*)\)$/, escapeCFI = (str) => str.replace(/[\^[\](),;=]/g, "^$&"), wrap = (x3) => isCFI.test(x3) ? x3 : `epubcfi(${x3})`, unwrap = (x3) => x3.match(isCFI)?.[1] ?? x3, lift = (f3) => (...xs2) => `epubcfi(${f3(...xs2.map((x3) => x3.match(isCFI)?.[1] ?? x3))})`, joinIndir = lift((...xs2) => xs2.join("!")), tokenizer = (str) => {
    let tokens = [], state, escape, value = "", push = (x3) => (tokens.push(x3), state = null, value = ""), cat = (x3) => (value += x3, escape = !1);
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
  }, findTokens = (tokens, x3) => findIndices(tokens, ([t2]) => t2 === x3), parser = (tokens) => {
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
  }, toInnerString = (parsed) => parsed.parent ? [parsed.parent, parsed.start, parsed.end].map(toInnerString).join(",") : parsed.map((parts) => parts.map(partToString).join("")).join("!"), toString = (parsed) => wrap(toInnerString(parsed)), collapse = (x3, toEnd) => typeof x3 == "string" ? toString(collapse(parse(x3), toEnd)) : x3.parent ? concatArrays(x3.parent, x3[toEnd ? "end" : "start"]) : x3, buildRange = (from, to2) => {
    typeof from == "string" && (from = parse(from)), typeof to2 == "string" && (to2 = parse(to2)), from = collapse(from), to2 = collapse(to2, !0);
    let localFrom = from[from.length - 1], localTo = to2[to2.length - 1], localParent = [], localStart = [], localEnd = [], pushToParent = !0, len = Math.max(localFrom.length, localTo.length);
    for (let i2 = 0; i2 < len; i2++) {
      let a = localFrom[i2], b4 = localTo[i2];
      pushToParent &&= a?.index === b4?.index && !a?.offset && !b4?.offset, pushToParent ? localParent.push(a) : (a && localStart.push(a), b4 && localEnd.push(b4));
    }
    let parent = from.slice(0, -1).concat([localParent]);
    return toString({ parent, start: [localStart], end: [localEnd] });
  }, compare = (a, b4) => {
    if (typeof a == "string" && (a = parse(a)), typeof b4 == "string" && (b4 = parse(b4)), a.start || b4.start)
      return compare(collapse(a), collapse(b4)) || compare(collapse(a, !0), collapse(b4, !0));
    for (let i2 = 0; i2 < Math.max(a.length, b4.length); i2++) {
      let p4 = a[i2], q5 = b4[i2], maxIndex = Math.max(p4.length, q5.length) - 1;
      for (let i3 = 0; i3 <= maxIndex; i3++) {
        let x3 = p4[i3], y4 = q5[i3];
        if (!x3)
          return -1;
        if (!y4 || x3.index > y4.index)
          return 1;
        if (x3.index < y4.index)
          return -1;
        if (i3 === maxIndex) {
          if (x3.offset > y4.offset)
            return 1;
          if (x3.offset < y4.offset)
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
    for (let n3 of node) {
      let { length } = n3.nodeValue;
      if (sum + length >= offset)
        return { node: n3, offset: offset - sum };
      sum += length;
    }
  }, nodeToParts = (node, offset) => {
    let { parentNode, id } = node, indexed = indexChildNodes(parentNode), index = indexed.findIndex((x3) => Array.isArray(x3) ? x3.some((x4) => x4 === node) : x3 === node), chunk = indexed[index];
    if (Array.isArray(chunk)) {
      let sum = 0;
      for (let x3 of chunk)
        if (x3 === node) {
          sum += offset;
          break;
        } else
          sum += x3.nodeValue.length;
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
      for (let [i2, item] of items.entries()) {
        let [id, fragment] = splitHref(item?.href) ?? [], value = { fragment, item };
        grouped.has(id) ? grouped.get(id).items.push(value) : grouped.set(id, { prev: items[i2 - 1], items: [value] });
      }
      let map = /* @__PURE__ */ new Map();
      for (let [i2, id] of ids.entries())
        grouped.has(id) ? map.set(id, grouped.get(id)) : map.set(id, map.get(ids[i2 - 1]));
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
      for (let [i2, { fragment }] of items.entries()) {
        let el = this.getFragment(doc, fragment);
        if (el && range.comparePoint(el, 0) > 0)
          return items[i2 - 1]?.item ?? prev;
      }
      return items[items.length - 1].item;
    }
  }, SectionProgress = class {
    constructor(sections, sizePerLoc, sizePerTimeUnit) {
      this.sizes = sections.map((s2) => s2.linear === "no" ? 0 : s2.size), this.sizePerLoc = sizePerLoc, this.sizePerTimeUnit = sizePerTimeUnit, this.sizeTotal = this.sizes.reduce((a, b4) => a + b4, 0);
    }
    // get progress given index of and fractions within a section
    getProgress(index, fractionInSection) {
      let { sizes, sizePerLoc, sizePerTimeUnit, sizeTotal } = this, sizeInSection = sizes[index] ?? 0, size = sizes.slice(0, index).reduce((a, b4) => a + b4, 0) + fractionInSection * sizeInSection, remainingTotal = sizeTotal - size, remainingSection = (1 - fractionInSection) * sizeInSection;
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
      for (let [i2, size] of sizes.entries()) {
        let newSum = sum + size;
        if (newSum > target) {
          index = i2, fractionInSection = (target - sum) / size;
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
    hitTest({ x: x3, y: y4 }) {
      let arr = Array.from(this.#map.entries());
      for (let i2 = arr.length - 1; i2 >= 0; i2--) {
        let [key, obj] = arr[i2];
        for (let { left, top, right, bottom } of obj.rects)
          if (top <= y4 && left <= x3 && bottom > y4 && right > x3)
            return [key, obj.range];
      }
      return [];
    }
    static underline(rects, options = {}) {
      let { color = "red", width: strokeWidth = 2 } = options, g4 = createSVGElement("g");
      g4.setAttribute("fill", color);
      for (let { left, bottom, width } of rects) {
        let el = createSVGElement("rect");
        el.setAttribute("x", left), el.setAttribute("y", bottom - strokeWidth), el.setAttribute("height", strokeWidth), el.setAttribute("width", width), g4.append(el);
      }
      return g4;
    }
    static highlight(rects, options = {}) {
      let { color = "red" } = options, g4 = createSVGElement("g");
      g4.setAttribute("fill", color), g4.setAttribute("fill-opacity", 0.3);
      for (let { left, top, height, width } of rects) {
        let el = createSVGElement("rect");
        el.setAttribute("x", left), el.setAttribute("y", top), el.setAttribute("height", height), el.setAttribute("width", width), g4.append(el);
      }
      return g4;
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
          for (let i2 = 0; i2 < arr.length; i2++) {
            let itemValue = arr[i2].value;
            if (this.compare(value, itemValue) <= 0)
              break;
            position = i2 + 1;
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
  var wait = (ms2) => new Promise((resolve) => setTimeout(resolve, ms2)), debounce = (f3, wait2, immediate) => {
    let timeout;
    return (...args) => {
      let later = () => {
        timeout = null, immediate || f3(...args);
      }, callNow = immediate && !timeout;
      timeout && clearTimeout(timeout), timeout = setTimeout(later, wait2), callNow && f3(...args);
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
    let from = nodes[0] ?? doc.body, to2 = nodes[nodes.length - 1] ?? from, startOffset = from.nodeType === 1 ? 0 : bisectNode(doc, from, (a, b4) => {
      let p4 = mapRect(a.getBoundingClientRect()), q5 = mapRect(b4.getBoundingClientRect());
      return p4.right < start && q5.left > start ? 0 : q5.left > start ? -1 : 1;
    }), endOffset = to2.nodeType === 1 ? 0 : bisectNode(doc, to2, (a, b4) => {
      let p4 = mapRect(a.getBoundingClientRect()), q5 = mapRect(b4.getBoundingClientRect());
      return p4.right < end && q5.left > end ? 0 : q5.left > end ? -1 : 1;
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
      return this.#rtl ? ({ left, right }) => ({ left: pxSize - right, right: pxSize - left }) : this.#vertical ? ({ top, bottom }) => ({ left: top, right: bottom }) : (f3) => f3;
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
    async #display(promise2) {
      let { index, src, anchor, onLoad, select } = await promise2;
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
            Promise.resolve(this.sections[index].load()).then((src) => ({ index, src, anchor, onLoad, select })).catch((e3) => (console.warn(e3), console.warn(new Error(`Failed to load section ${index}`)), {}))
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
  var parseViewport = (str) => str?.split(/[,;\s]/)?.filter((x3) => x3)?.map((x3) => x3.split("=").map((x4) => x4.trim())), getViewport = (doc, viewport) => {
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
    } catch (e3) {
      console.warn(e3), segmenter = new Intl.Segmenter("en", { usage: "search", granularity }), collator = new Intl.Collator("en", { sensitivity });
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
        let substr = substrArr.map((x3) => x3.segment).join("");
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
      ([k4, v]) => [
        k4,
        (el) => el.getAttributeNS("http://www.idpf.org/2007/ops", "type")?.split(/s/)?.some((t2) => v.includes(t2))
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
        let o2 = this.#getOverlayer(index);
        o2 && this.#drawAnnotation(o2.doc, o2.overlayer, annotation);
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
        let o2 = this.#getOverlayer(index);
        o2 && (o2.overlayer.remove(annotation.value), this.#drawAnnotation(o2.doc, o2.overlayer, annotation));
      }
    });
    constructor(book, emit) {
      if (this.book = book, this.emit = emit, book.metadata?.language)
        try {
          let language = book.metadata.language;
          book.metadata.language = Intl.getCanonicalLocales(language)[0];
          let tag = typeof language == "string" ? language : language[0], locale = new Intl.Locale(tag);
          this.isCJK = ["zh", "ja", "kr"].includes(locale.language), locale.textInfo && locale.textInfo.direction && (this.textDirection = locale.textInfo.direction);
        } catch (e3) {
          console.warn(e3);
        }
      if (book.splitTOCHref && book.getTOCFragment) {
        let ids = book.sections.map((s2) => s2.id);
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
        annotations.sort((a, b4) => compare(a.value, b4.value));
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
        a.addEventListener("click", (e3) => {
          e3.preventDefault();
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
            ).catch((e4) => console.error(e4));
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
        (e3) => {
          let [value, range] = overlayer.hitTest(e3);
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
      } catch (e3) {
        console.error(e3), console.error(`Could not resolve target ${target}`);
      }
    }
    async goTo(target) {
      let resolved = this.resolveNavigation(target);
      try {
        return await this.renderer.goTo(resolved), resolved;
      } catch (e3) {
        console.error(e3), console.error(`Could not go to ${target}`);
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
      } catch (e3) {
        console.error(e3), console.error(`Could not go to ${target}`);
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
    let hide = () => element.classList.remove("show"), hideAnd = (f3) => (...args) => (hide(), f3(...args));
    for (let { name, label, type, items, onclick } of arr) {
      let widget = type === "radio" ? createMenuItemRadioGroup(label, items, hideAnd(onclick)) : null;
      name && (groups[name] = widget), element.append(widget.element);
    }
    return window.addEventListener("blur", () => hide()), window.addEventListener("click", (e3) => {
      element.parentNode.contains(e3.target) || hide();
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
    })), book.toc = files.map((name) => ({ label: name, href: name })), book.rendition = { layout: "pre-paginated" }, book.resolveHref = (href) => ({ index: book.sections.findIndex((s2) => s2.id === href) }), book.splitTOCHref = (href) => [href, null], book.getTOCFragment = (doc) => doc.documentElement, book;
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
      let d5 = def?.[node.nodeName];
      if (!d5)
        return null;
      if (typeof d5 == "string")
        return this[d5](node);
      let [name, opts] = d5, el = this.doc.createElement(name);
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
    let book = {}, doc = await parseXML(blob), converter = new FB2Converter(doc), $6 = (x3) => doc.querySelector(x3), $$ = (x3) => [...doc.querySelectorAll(x3)], getPerson = (el) => {
      let nick = getElementText(el.querySelector("nickname"));
      if (nick)
        return nick;
      let first = getElementText(el.querySelector("first-name")), middle = getElementText(el.querySelector("middle-name")), last = getElementText(el.querySelector("last-name")), name = [first, middle, last].filter((x3) => x3).join(" "), sortAs = last ? [last, [first, middle].filter((x3) => x3).join(" ")].join(", ") : null;
      return { name, sortAs };
    }, getDate = (el) => el?.getAttribute("value") ?? getElementText(el), annotation = $6("title-info annotation");
    book.metadata = {
      title: getElementText($6("title-info book-title")),
      identifier: getElementText($6("document-info id")),
      language: getElementText($6("title-info lang")),
      author: $$("title-info author").map(getPerson),
      translator: $$("title-info translator").map(getPerson),
      producer: $$("document-info author").map(getPerson).concat($$("document-info program-used").map(getElementText)),
      publisher: getElementText($6("publish-info publisher")),
      published: getDate($6("title-info date")),
      modified: getDate($6("document-info date")),
      description: annotation ? converter.convert(
        annotation,
        { annotation: ["div", SECTION] }
      ).innerHTML : null,
      subject: $$("title-info genre").map(getElementText)
    }, book.getCover = () => fetch(getImageSrc($6("coverpage image"))).then((res) => res.blob());
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
      let ids = sections.map((s2) => s2.ids).flat();
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
        ).reduce((a, b4) => a + b4, 0),
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
      let [a, b4] = href.split("#");
      return a ? { index: Number(a), anchor: (doc2) => doc2.querySelector(`[${dataID}="${b4}"]`) } : { index: idMap.get(b4), anchor: (doc2) => doc2.getElementById(b4) };
    }, book.splitTOCHref = (href) => href?.split("#")?.map((x3) => Number(x3)) ?? [], book.getTOCFragment = (doc2, id) => doc2.querySelector(`[${dataID}="${id}"]`), book;
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
  }, concatTypedArray = (a, b4) => {
    let result = new a.constructor(a.length + b4.length);
    return result.set(a), result.set(b4, a.length), result;
  }, concatTypedArray3 = (a, b4, c2) => {
    let result = new a.constructor(a.length + b4.length + c2.length);
    return result.set(a), result.set(b4, a.length), result.set(c2, a.length + b4.length), result;
  }, decoder = new TextDecoder(), getString = (buffer) => decoder.decode(buffer), getUint = (buffer) => {
    if (!buffer)
      return;
    let l2 = buffer.byteLength, func = l2 === 4 ? "getUint32" : l2 === 2 ? "getUint16" : "getUint8";
    return new DataView(buffer)[func](0);
  }, getStruct = (def, buffer) => Object.fromEntries(Array.from(Object.entries(def)).map(([key, [start, len, type]]) => [
    key,
    (type === "string" ? getString : getUint)(buffer.slice(start, start + len))
  ])), getDecoder = (x3) => new TextDecoder(MOBI_ENCODING[x3]), getVarLen = (byteArray, i2 = 0) => {
    let value = 0, length = 0;
    for (let byte of byteArray.subarray(i2, i2 + 4))
      if (value = value << 7 | (byte & 127) >>> 0, length++, byte & 128)
        break;
    return { value, length };
  }, getVarLenFromEnd = (byteArray) => {
    let value = 0;
    for (let byte of byteArray.subarray(-4))
      byte & 128 && (value = 0), value = value << 7 | byte & 127;
    return value;
  }, countBitsSet = (x3) => {
    let count = 0;
    for (; x3 > 0; x3 = x3 >> 1)
      (x3 & 1) === 1 && count++;
    return count;
  }, countUnsetEnd = (x3) => {
    let count = 0;
    for (; !(x3 & 1); )
      x3 = x3 >> 1, count++;
    return count;
  }, decompressPalmDOC = (array) => {
    let output = [];
    for (let i2 = 0; i2 < array.length; i2++) {
      let byte = array[i2];
      if (byte === 0)
        output.push(0);
      else if (byte <= 8)
        for (let x3 of array.subarray(i2 + 1, (i2 += byte) + 1))
          output.push(x3);
      else if (byte <= 127)
        output.push(byte);
      else if (byte <= 191) {
        let bytes = byte << 8 | array[i2++ + 1], distance = (bytes & 16383) >>> 3, length = (bytes & 7) + 3;
        for (let j5 = 0; j5 < length; j5++)
          output.push(output[output.length - distance]);
      } else
        output.push(32, byte ^ 128);
    }
    return Uint8Array.from(output);
  }, read32Bits = (byteArray, from) => {
    let startByte = from >> 3, end = from + 32, endByte = end >> 3, bits = 0n;
    for (let i2 = startByte; i2 <= endByte; i2++)
      bits = bits << 8n | BigInt(byteArray[i2] ?? 0);
    return bits >> 8n - BigInt(end & 7) & 0xffffffffn;
  }, huffcdic = async (mobi, loadRecord) => {
    let huffRecord = await loadRecord(mobi.huffcdic), { magic, offset1, offset2 } = getStruct(HUFF_HEADER, huffRecord);
    if (magic !== "HUFF")
      throw new Error("Invalid HUFF record");
    let table1 = Array.from({ length: 256 }, (_2, i2) => offset1 + i2 * 4).map((offset) => getUint(huffRecord.slice(offset, offset + 4))).map((x3) => [x3 & 128, x3 & 31, x3 >>> 8]), table2 = [null].concat(Array.from({ length: 32 }, (_2, i2) => offset2 + i2 * 8).map((offset) => [
      getUint(huffRecord.slice(offset, offset + 4)),
      getUint(huffRecord.slice(offset + 4, offset + 8))
    ])), dictionary = [];
    for (let i2 = 1; i2 < mobi.numHuffcdic; i2++) {
      let record = await loadRecord(mobi.huffcdic + i2), cdic = getStruct(CDIC_HEADER, record);
      if (cdic.magic !== "CDIC")
        throw new Error("Invalid CDIC record");
      let n3 = Math.min(1 << cdic.codeLength, cdic.numEntries - dictionary.length), buffer = record.slice(cdic.length);
      for (let i3 = 0; i3 < n3; i3++) {
        let offset = getUint(buffer.slice(i3 * 2, i3 * 2 + 2)), x3 = getUint(buffer.slice(offset, offset + 2)), length = x3 & 32767, decompressed = x3 & 32768, value = new Uint8Array(
          buffer.slice(offset + 2, offset + 2 + length)
        );
        dictionary.push([value, decompressed]);
      }
    }
    let decompress = (byteArray) => {
      let output = new Uint8Array(), bitLength = byteArray.byteLength * 8;
      for (let i2 = 0; i2 < bitLength; ) {
        let bits = Number(read32Bits(byteArray, i2)), [found, codeLength, value] = table1[bits >>> 24];
        if (!found) {
          for (; bits >>> 32 - codeLength < table2[codeLength][0]; )
            codeLength += 1;
          value = table2[codeLength][1];
        }
        if ((i2 += codeLength) > bitLength)
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
    let numTags = (tagx.length - 12) / 4, tagTable = Array.from({ length: numTags }, (_2, i2) => new Uint8Array(tagxBuffer.slice(12 + i2 * 4, 12 + i2 * 4 + 4))), cncx = {}, cncxRecordOffset = 0;
    for (let i2 = 0; i2 < indx.numCncx; i2++) {
      let record = await loadRecord(indxIndex + indx.numRecords + i2 + 1), array = new Uint8Array(record);
      for (let pos = 0; pos < array.byteLength; ) {
        let index = pos, { value, length } = getVarLen(array, pos);
        pos += length;
        let result = record.slice(pos, pos + value);
        pos += value, cncx[cncxRecordOffset + index] = decoder2.decode(result);
      }
      cncxRecordOffset += 65536;
    }
    let table = [];
    for (let i2 = 0; i2 < indx.numRecords; i2++) {
      let record = await loadRecord(indxIndex + 1 + i2), array = new Uint8Array(record), indx2 = getStruct(INDX_HEADER, record);
      if (indx2.magic !== "INDX")
        throw new Error("Invalid INDX record");
      for (let j5 = 0; j5 < indx2.numRecords; j5++) {
        let offsetOffset = indx2.idxt + 4 + 2 * j5, offset = getUint(record.slice(offsetOffset, offsetOffset + 2)), length = getUint(record.slice(offset, offset + 1)), name = getString(record.slice(offset + 1, offset + 1 + length)), tags = [], startPos = offset + 1 + length, controlByteIndex = 0, pos = startPos + tagx.numControlBytes;
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
            for (let i3 = 0; i3 < valueCount * numValues; i3++) {
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
    })), getChildren = (item) => (item.firstChild == null || (item.children = items.filter((x3) => x3.parent === item.index).map(getChildren)), item);
    return items.filter((item) => item.headingLevel === 0).map(getChildren);
  }, getEXTH = (buf, encoding) => {
    let { magic, count } = getStruct(EXTH_HEADER, buf);
    if (magic !== "EXTH")
      throw new Error("Invalid EXTH header");
    let decoder2 = getDecoder(encoding), results = {}, offset = 12;
    for (let i2 = 0; i2 < count; i2++) {
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
      for (var i2 = 0; i2 < length; i2++)
        array[i2] = array[i2] ^ key[i2 % key.length];
    }
    if (flags & 1)
      try {
        return await unzlib(array);
      } catch (e3) {
        console.warn(e3), console.warn("Failed to decompress font");
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
        (_2, i2) => getUint(buffer.slice(i2 * 8, i2 * 8 + 4))
      ).map((x3, i2, a) => [x3, a[i2 + 1]]);
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
          } catch (e3) {
            console.warn(e3), console.warn("Failed to open KF8; falling back to MOBI");
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
      if (this.#decompress = compression === 1 ? (f3) => f3 : compression === 2 ? decompressPalmDOC : compression === 17480 ? await huffcdic(mobi, this.loadRecord.bind(this)) : null, !this.#decompress)
        throw new Error("Unknown compression type");
      let { trailingFlags } = mobi, multibyte = trailingFlags & 1, numTrailingEntries = countBitsSet(trailingFlags >>> 1);
      this.#removeTrailingEntries = (array) => {
        for (let i2 = 0; i2 < numTrailingEntries; i2++) {
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
      for (let i2 = 0; i2 < this.mobi.headers.palmdoc.numTextRecords; i2++)
        array = concatTypedArray(array, await this.mobi.loadText(i2));
      let str = Array.from(
        new Uint8Array(array),
        (c2) => String.fromCharCode(c2)
      ).join("");
      this.#sections = [0].concat(Array.from(str.matchAll(mbpPagebreakRegex), (m3) => m3.index)).map((x3, i2, a) => str.slice(x3, a[i2 + 1])).map((str2) => Uint8Array.from(str2, (x3) => x3.charCodeAt(0))).map((raw) => ({ book: this, raw })).reduce((arr, x3) => {
        let last = arr[arr.length - 1];
        return x3.start = last?.end ?? 0, x3.end = x3.start + x3.raw.byteLength, arr.concat(x3);
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
      } catch (e3) {
        console.warn(e3);
      }
      return this.#fileposList = [...new Set(fileposInNCX.concat(Array.from(str.matchAll(fileposRegex), (m3) => m3[1])))].map((filepos) => ({ filepos, number: Number(filepos) })).sort((a, b4) => a.number - b4.number), this.metadata = this.mobi.getMetadata(), this.getCover = this.mobi.getCover.bind(this.mobi), this;
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
      fileposList.length && (arr = raw.subarray(0, fileposList[0].offset), fileposList.forEach(({ filepos, offset }, i2) => {
        let next = fileposList[i2 + 1], a = this.mobi.encode(`<a id="filepos${filepos}"></a>`);
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
  }, replaceSeries = async (str, regex, f3) => {
    let matches = [];
    str.replace(regex, (...args) => (matches.push(args), null));
    let results = [];
    for (let args of matches)
      results.push(await f3(...args));
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
          (_2, i2) => 12 + i2 * 8
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
        let last = arr[arr.length - 1], fragStart = last?.fragEnd ?? 0, fragEnd = fragStart + skel.numFrag, frags = fragTable.slice(fragStart, fragEnd), length = skel.length + frags.map((f3) => f3.length).reduce((a, b4) => a + b4), totalLength = (last?.totalLength ?? 0) + length;
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
      } catch (e3) {
        console.warn(e3);
      }
      let { exth } = this.mobi.headers;
      return this.dir = exth.pageProgressionDirection, this.rendition = {
        layout: exth.fixedLayout === "true" ? "pre-paginated" : "reflowable",
        viewport: Object.fromEntries(exth.originalResolution?.split("x")?.slice(0, 2)?.map((x3, i2) => [i2 ? "height" : "width", x3]) ?? [])
      }, this.metadata = this.mobi.getMetadata(), this.getCover = this.mobi.getCover.bind(this.mobi), this;
    }
    // is this really the only way of getting to RESC, PAGE, etc.?
    async getResourcesByMagic(keys) {
      let results = {}, start = this.mobi.headers.kf8.resourceStart, end = this.mobi.pdb.numRecords;
      for (let i2 = start; i2 < end; i2++)
        try {
          let magic = await this.mobi.loadMagic(i2), match = keys.find((key) => key === magic);
          match && (results[match] = i2);
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
  }, camel = (x3) => x3.toLowerCase().replace(/[-:](.)/g, (_2, g4) => g4.toUpperCase()), whitespacePreLine = (str) => str ? str.trim().replace(/\s{2,}/g, " ") : "", filterAttribute = (attr, value, isList) => isList ? (el) => el.getAttribute(attr)?.split(/\s/)?.includes(value) : typeof value == "function" ? (el) => value(el.getAttribute(attr)) : (el) => el.getAttribute(attr) === value, getAttributes = (...xs2) => (el) => el ? Object.fromEntries(xs2.map((x3) => [camel(x3), el.getAttribute(x3)])) : null, getElementText2 = (el) => whitespacePreLine(el?.textContent), childGetter = (doc, ns2) => {
    let useNS = doc.lookupNamespaceURI(null) === ns2 || doc.lookupPrefix(ns2), f3 = useNS ? (el, name) => (el2) => el2.namespaceURI === ns2 && el2.localName === name : (el, name) => (el2) => el2.localName === name;
    return {
      $: (el, name) => [...el.children].find(f3(el, name)),
      $$: (el, name) => [...el.children].filter(f3(el, name)),
      $$$: useNS ? (el, name) => [...el.getElementsByTagNameNS(ns2, name)] : (el, name) => [...el.getElementsByTagName(ns2, name)]
    };
  }, resolveURL = (url, relativeTo) => {
    try {
      if (relativeTo.includes(":"))
        return new URL(url, relativeTo);
      let root = "file:///";
      return decodeURI(new URL(url, root + relativeTo).href.replace(root, ""));
    } catch (e3) {
      return console.warn(e3), url;
    }
  }, isExternal = (uri) => /^(?!blob)\w+:/i.test(uri), pathRelative = (from, to2) => {
    if (!from)
      return to2;
    let as2 = from.replace(/\/$/, "").split("/"), bs2 = to2.replace(/\/$/, "").split("/"), i2 = (as2.length > bs2.length ? as2 : bs2).findIndex(
      (_2, i3) => as2[i3] !== bs2[i3]
    );
    return i2 < 0 ? "" : Array(as2.length - i2).fill("..").concat(bs2.slice(i2)).join("/");
  }, pathDirname = (str) => str.slice(0, str.lastIndexOf("/") + 1), replaceSeries2 = async (str, regex, f3) => {
    let matches = [];
    str.replace(regex, (...args) => (matches.push(args), null));
    let results = [];
    for (let args of matches)
      results.push(await f3(...args));
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
    let { $: $6, $$ } = childGetter(opf, NS3.OPF), $metadata = $6(opf.documentElement, "metadata"), els = Array.from($metadata.children), getValue = (obj, el) => {
      if (!el)
        return null;
      let { props = [], attrs = [] } = obj, value = getElementText2(el);
      if (!props.length && !attrs.length)
        return value;
      let id = el.getAttribute("id"), refines = id ? els.filter(filterAttribute("refines", "#" + id)) : [];
      return Object.fromEntries(
        [["value", value]].concat(
          props.map((prop2) => {
            let { many, recursive } = prop2, name = typeof prop2 == "string" ? prop2 : prop2.name, filter2 = filterAttribute("property", name), subobj = recursive ? obj : prop2;
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
      $$($metadata, "meta").filter(filterAttribute("property", (x3) => x3?.startsWith(prefix))).map((el) => [
        el.getAttribute("property").replace(prefix, ""),
        getElementText2(el)
      ])
    ), rendition = getProperties("rendition:"), media = getProperties("media:");
    return { metadata, rendition, media };
  }, parseNav = (doc, resolve = (f3) => f3) => {
    let { $: $6, $$, $$$ } = childGetter(doc, NS3.XHTML), resolveHref = (href) => href ? decodeURI(resolve(href)) : null, parseLI = (getType) => ($li) => {
      let $a2 = $6($li, "a") ?? $6($li, "span"), $ol = $6($li, "ol"), href = resolveHref($a2?.getAttribute("href")), result = { label: getElementText2($a2) || $a2?.getAttribute("title"), href, subitems: parseOL($ol) };
      return getType && (result.type = $a2?.getAttributeNS(NS3.EPUB, "type")?.split(/\s/)), result;
    }, parseOL = ($ol, getType) => $ol ? $$($ol, "li").map(parseLI(getType)) : null, parseNav2 = ($nav, getType) => parseOL($6($nav, "ol"), getType), $$nav = $$$(doc, "nav"), toc = null, pageList = null, landmarks = null, others = [];
    for (let $nav of $$nav) {
      let type = $nav.getAttributeNS(NS3.EPUB, "type")?.split(/\s/) ?? [];
      type.includes("toc") ? toc ??= parseNav2($nav) : type.includes("page-list") ? pageList ??= parseNav2($nav) : type.includes("landmarks") ? landmarks ??= parseNav2($nav, !0) : others.push({
        label: getElementText2($nav.firstElementChild),
        type,
        list: parseNav2($nav)
      });
    }
    return { toc, pageList, landmarks, others };
  }, parseNCX = (doc, resolve = (f3) => f3) => {
    let { $: $6, $$ } = childGetter(doc, NS3.NCX), resolveHref = (href) => href ? decodeURI(resolve(href)) : null, parseItem = (el) => {
      let $label = $6(el, "navLabel"), $content = $6(el, "content"), label = getElementText2($label), href = resolveHref($content.getAttribute("src"));
      if (el.localName === "navPoint") {
        let els = $$(el, "navPoint");
        return { label, href, subitems: els.length ? els.map(parseItem) : null };
      }
      return { label, href };
    }, parseList = (el, itemName) => $$(el, itemName).map(parseItem), getSingle = (container, itemName) => {
      let $container = $6(doc.documentElement, container);
      return $container ? parseList($container, itemName) : null;
    };
    return {
      toc: getSingle("navMap", "navPoint"),
      pageList: getSingle("pageList", "pageTarget"),
      others: $$(doc.documentElement, "navList").map((el) => ({
        label: getElementText2($6(el, "navLabel")),
        list: parseList(el, "navTarget")
      }))
    };
  }, parseClock = (str) => {
    if (!str)
      return;
    let parts = str.split(":").map((x4) => parseFloat(x4));
    if (parts.length === 3) {
      let [h2, m3, s2] = parts;
      return h2 * 60 * 60 + m3 * 60 + s2;
    }
    if (parts.length === 2) {
      let [m3, s2] = parts;
      return m3 * 60 + s2;
    }
    let [x3, unit] = str.split(/(?=[^\d.])/), n3 = parseFloat(x3), f3 = unit === "h" ? 60 * 60 : unit === "min" ? 60 : unit === "ms" ? 1e-3 : 1;
    return n3 * f3;
  }, parseSMIL = (doc, resolve = (f3) => f3) => {
    let { $: $6, $$$ } = childGetter(doc, NS3.SMIL), resolveHref = (href) => href ? decodeURI(resolve(href)) : null;
    return $$$(doc, "par").map(($par) => {
      let id = $6($par, "text")?.getAttribute("src")?.split("#")?.[1], $audio = $6($par, "audio");
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
    for (var i2 = 0; i2 < length; i2++)
      array[i2] = array[i2] ^ key[i2 % key.length];
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
          (_2, i2) => parseInt(uuid.slice(i2 * 2, i2 * 2 + 2), 16)
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
      return this.#decoders.get(this.#uris.get(uri)) ?? ((x3) => x3);
    }
  }, Resources = class {
    constructor({ opf, resolveHref }) {
      this.opf = opf;
      let { $: $6, $$, $$$ } = childGetter(opf, NS3.OPF), $manifest = $6(opf.documentElement, "manifest"), $spine = $6(opf.documentElement, "spine"), $$itemref = $$($spine, "itemref");
      this.manifest = $$($manifest, "item").map(
        getAttributes("href", "id", "media-type", "properties", "media-overlay")
      ).map((item) => (item.href = resolveHref(item.href), item.properties = item.properties?.split(/\s/), item)), this.spine = $$itemref.map(getAttributes("idref", "id", "linear", "properties")).map((item) => (item.properties = item.properties?.split(/\s/), item)), this.pageProgressionDirection = $spine.getAttribute(
        "page-progression-direction"
      ), this.navPath = this.getItemByProperty("nav")?.href, this.ncxPath = (this.getItemByID($spine.getAttribute("toc")) ?? this.manifest.find((item) => item.mediaType === MIME3.NCX))?.href;
      let $guide = $6(opf.documentElement, "guide");
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
    getItemByProperty(prop2) {
      return this.manifest.find((item) => item.properties?.includes(prop2));
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
      parents.every((p4) => p4 !== href) ? this.loadReplaced(item, parents) : this.createURL(href, await this.loadBlob(href), mediaType, parent);
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
                (_2, p1, p22, p32) => this.loadHref(p22, href, parents).then((p23) => `${p1}${p23}${p32}`)
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
        (_2, url) => this.loadHref(url, href, parents).then((url2) => `url("${url2}")`)
      ), replacedImports = await replaceSeries2(
        replacedUrls,
        /@import\s*["']([^"'\n]*?)["']/gi,
        (_2, url) => this.loadHref(url, href, parents).then((url2) => `@import "${url2}"`)
      ), w4 = window?.innerWidth ?? 800, h2 = window?.innerHeight ?? 600;
      return replacedImports.replace(/-epub-/gi, "").replace(/(\d*\.?\d+)vw/gi, (_2, d5) => parseFloat(d5) * w4 / 100 + "px").replace(/(\d*\.?\d+)vh/gi, (_2, d5) => parseFloat(d5) * h2 / 100 + "px").replace(
        /page-break-(after|before|inside)/gi,
        (_2, x3) => `-webkit-column-break-${x3}`
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
      }).flat().filter((x3) => x3);
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
    for (let p4 of properties) {
      if (p4 === "page-spread-left" || p4 === "rendition:page-spread-left")
        return "left";
      if (p4 === "page-spread-right" || p4 === "rendition:page-spread-right")
        return "right";
      if (p4 === "rendition:page-spread-center")
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
      }).filter((s2) => s2);
      let { navPath, ncxPath } = this.resources;
      if (navPath)
        try {
          let resolve = (url) => resolveURL(url, navPath), nav = parseNav(await this.#loadXML(navPath), resolve);
          this.toc = nav.toc, this.pageList = nav.pageList, this.landmarks = nav.landmarks;
        } catch (e3) {
          console.warn(e3);
        }
      if (!this.toc && ncxPath)
        try {
          let resolve = (url) => resolveURL(url, ncxPath), ncx = parseNCX(await this.#loadXML(ncxPath), resolve);
          this.toc = ncx.toc, this.pageList = ncx.pageList;
        } catch (e3) {
          console.warn(e3);
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

  // https://esm.sh/v117/@zip.js/zip.js@2.6.75/deno/lib/zip-no-worker.js
  function kt(t2) {
    return vt(t2.map(([n3, e3]) => new Array(n3).fill(e3, 0, n3)));
  }
  function vt(t2) {
    return t2.reduce((n3, e3) => n3.concat(Array.isArray(e3) ? vt(e3) : e3), []);
  }
  var Ci = [0, 1, 2, 3].concat(...kt([[2, 4], [2, 5], [4, 6], [4, 7], [8, 8], [8, 9], [16, 10], [16, 11], [32, 12], [32, 13], [64, 14], [64, 15], [2, 0], [1, 16], [1, 17], [2, 18], [2, 19], [4, 20], [4, 21], [8, 22], [8, 23], [16, 24], [16, 25], [32, 26], [32, 27], [64, 28], [64, 29]]));
  function X() {
    let t2 = this;
    function n3(r) {
      let a = t2.dyn_tree, o2 = t2.stat_desc.static_tree, l2 = t2.stat_desc.extra_bits, s2 = t2.stat_desc.extra_base, d5 = t2.stat_desc.max_length, u2, h2, R3, T7, y4, f3, c2 = 0;
      for (T7 = 0; T7 <= 15; T7++)
        r.bl_count[T7] = 0;
      for (a[r.heap[r.heap_max] * 2 + 1] = 0, u2 = r.heap_max + 1; u2 < 573; u2++)
        h2 = r.heap[u2], T7 = a[a[h2 * 2 + 1] * 2 + 1] + 1, T7 > d5 && (T7 = d5, c2++), a[h2 * 2 + 1] = T7, !(h2 > t2.max_code) && (r.bl_count[T7]++, y4 = 0, h2 >= s2 && (y4 = l2[h2 - s2]), f3 = a[h2 * 2], r.opt_len += f3 * (T7 + y4), o2 && (r.static_len += f3 * (o2[h2 * 2 + 1] + y4)));
      if (c2 !== 0) {
        do {
          for (T7 = d5 - 1; r.bl_count[T7] === 0; )
            T7--;
          r.bl_count[T7]--, r.bl_count[T7 + 1] += 2, r.bl_count[d5]--, c2 -= 2;
        } while (c2 > 0);
        for (T7 = d5; T7 !== 0; T7--)
          for (h2 = r.bl_count[T7]; h2 !== 0; )
            R3 = r.heap[--u2], !(R3 > t2.max_code) && (a[R3 * 2 + 1] != T7 && (r.opt_len += (T7 - a[R3 * 2 + 1]) * a[R3 * 2], a[R3 * 2 + 1] = T7), h2--);
      }
    }
    function e3(r, a) {
      let o2 = 0;
      do
        o2 |= r & 1, r >>>= 1, o2 <<= 1;
      while (--a > 0);
      return o2 >>> 1;
    }
    function i2(r, a, o2) {
      let l2 = [], s2 = 0, d5, u2, h2;
      for (d5 = 1; d5 <= 15; d5++)
        l2[d5] = s2 = s2 + o2[d5 - 1] << 1;
      for (u2 = 0; u2 <= a; u2++)
        h2 = r[u2 * 2 + 1], h2 !== 0 && (r[u2 * 2] = e3(l2[h2]++, h2));
    }
    t2.build_tree = function(r) {
      let a = t2.dyn_tree, o2 = t2.stat_desc.static_tree, l2 = t2.stat_desc.elems, s2, d5, u2 = -1, h2;
      for (r.heap_len = 0, r.heap_max = 573, s2 = 0; s2 < l2; s2++)
        a[s2 * 2] !== 0 ? (r.heap[++r.heap_len] = u2 = s2, r.depth[s2] = 0) : a[s2 * 2 + 1] = 0;
      for (; r.heap_len < 2; )
        h2 = r.heap[++r.heap_len] = u2 < 2 ? ++u2 : 0, a[h2 * 2] = 1, r.depth[h2] = 0, r.opt_len--, o2 && (r.static_len -= o2[h2 * 2 + 1]);
      for (t2.max_code = u2, s2 = Math.floor(r.heap_len / 2); s2 >= 1; s2--)
        r.pqdownheap(a, s2);
      h2 = l2;
      do
        s2 = r.heap[1], r.heap[1] = r.heap[r.heap_len--], r.pqdownheap(a, 1), d5 = r.heap[1], r.heap[--r.heap_max] = s2, r.heap[--r.heap_max] = d5, a[h2 * 2] = a[s2 * 2] + a[d5 * 2], r.depth[h2] = Math.max(r.depth[s2], r.depth[d5]) + 1, a[s2 * 2 + 1] = a[d5 * 2 + 1] = h2, r.heap[1] = h2++, r.pqdownheap(a, 1);
      while (r.heap_len >= 2);
      r.heap[--r.heap_max] = r.heap[1], n3(r), i2(a, t2.max_code, r.bl_count);
    };
  }
  X._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...kt([[2, 8], [2, 9], [2, 10], [2, 11], [4, 12], [4, 13], [4, 14], [4, 15], [8, 16], [8, 17], [8, 18], [8, 19], [16, 20], [16, 21], [16, 22], [16, 23], [32, 24], [32, 25], [32, 26], [31, 27], [1, 28]]));
  X.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
  X.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576];
  X.d_code = function(t2) {
    return t2 < 256 ? Ci[t2] : Ci[256 + (t2 >>> 7)];
  };
  X.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  X.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  X.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  X.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  function _e(t2, n3, e3, i2, r) {
    let a = this;
    a.static_tree = t2, a.extra_bits = n3, a.extra_base = e3, a.elems = i2, a.max_length = r;
  }
  var Sa = [12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 19, 275, 147, 403, 83, 339, 211, 467, 51, 307, 179, 435, 115, 371, 243, 499, 11, 267, 139, 395, 75, 331, 203, 459, 43, 299, 171, 427, 107, 363, 235, 491, 27, 283, 155, 411, 91, 347, 219, 475, 59, 315, 187, 443, 123, 379, 251, 507, 7, 263, 135, 391, 71, 327, 199, 455, 39, 295, 167, 423, 103, 359, 231, 487, 23, 279, 151, 407, 87, 343, 215, 471, 55, 311, 183, 439, 119, 375, 247, 503, 15, 271, 143, 399, 79, 335, 207, 463, 47, 303, 175, 431, 111, 367, 239, 495, 31, 287, 159, 415, 95, 351, 223, 479, 63, 319, 191, 447, 127, 383, 255, 511, 0, 64, 32, 96, 16, 80, 48, 112, 8, 72, 40, 104, 24, 88, 56, 120, 4, 68, 36, 100, 20, 84, 52, 116, 3, 131, 67, 195, 35, 163, 99, 227], ga = kt([[144, 8], [112, 9], [24, 7], [8, 8]]);
  _e.static_ltree = vt(Sa.map((t2, n3) => [t2, ga[n3]]));
  var Oa = [0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9, 25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23], Da = kt([[30, 5]]);
  _e.static_dtree = vt(Oa.map((t2, n3) => [t2, Da[n3]]));
  _e.static_l_desc = new _e(_e.static_ltree, X.extra_lbits, 256 + 1, 286, 15);
  _e.static_d_desc = new _e(_e.static_dtree, X.extra_dbits, 0, 30, 15);
  _e.static_bl_desc = new _e(null, X.extra_blbits, 0, 19, 7);
  var ya = 9, Ia = 8;
  function Ce(t2, n3, e3, i2, r) {
    let a = this;
    a.good_length = t2, a.max_lazy = n3, a.nice_length = e3, a.max_chain = i2, a.func = r;
  }
  var Pi = 0, Ut = 1, $e = 2, Fe = [new Ce(0, 0, 0, 0, Pi), new Ce(4, 4, 8, 4, Ut), new Ce(4, 5, 16, 8, Ut), new Ce(4, 6, 32, 32, Ut), new Ce(4, 4, 16, 16, $e), new Ce(8, 16, 32, 32, $e), new Ce(8, 16, 128, 128, $e), new Ce(8, 32, 128, 256, $e), new Ce(32, 128, 258, 1024, $e), new Ce(32, 258, 258, 4096, $e)], Lt = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""], ge = 0, Ct = 1, ut = 2, Mt = 3, Na = 32, gn = 42, Pt = 113, dt = 666, On = 8, Fa = 0, Dn = 1, La = 2, Q = 3, Zt = 258, be = Zt + Q + 1;
  function Mi(t2, n3, e3, i2) {
    let r = t2[n3 * 2], a = t2[e3 * 2];
    return r < a || r == a && i2[n3] <= i2[e3];
  }
  function Ca() {
    let t2 = this, n3, e3, i2, r, a, o2, l2, s2, d5, u2, h2, R3, T7, y4, f3, c2, _2, E2, w4, g4, p4, x3, A4, m3, O4, b4, D5, C5, F8, v, M5, U5, Z5, G5 = new X(), ce4 = new X(), k4 = new X();
    t2.depth = [];
    let ne4, H5, V6, Re2, ee4, J4;
    t2.bl_count = [], t2.heap = [], M5 = [], U5 = [], Z5 = [];
    function me2() {
      d5 = 2 * a, h2[T7 - 1] = 0;
      for (let S6 = 0; S6 < T7 - 1; S6++)
        h2[S6] = 0;
      b4 = Fe[D5].max_lazy, F8 = Fe[D5].good_length, v = Fe[D5].nice_length, O4 = Fe[D5].max_chain, p4 = 0, _2 = 0, A4 = 0, E2 = m3 = Q - 1, g4 = 0, R3 = 0;
    }
    function Te() {
      let S6;
      for (S6 = 0; S6 < 286; S6++)
        M5[S6 * 2] = 0;
      for (S6 = 0; S6 < 30; S6++)
        U5[S6 * 2] = 0;
      for (S6 = 0; S6 < 19; S6++)
        Z5[S6 * 2] = 0;
      M5[256 * 2] = 1, t2.opt_len = t2.static_len = 0, H5 = V6 = 0;
    }
    function De() {
      G5.dyn_tree = M5, G5.stat_desc = _e.static_l_desc, ce4.dyn_tree = U5, ce4.stat_desc = _e.static_d_desc, k4.dyn_tree = Z5, k4.stat_desc = _e.static_bl_desc, ee4 = 0, J4 = 0, Re2 = 8, Te();
    }
    t2.pqdownheap = function(S6, N5) {
      let I4 = t2.heap, L4 = I4[N5], P6 = N5 << 1;
      for (; P6 <= t2.heap_len && (P6 < t2.heap_len && Mi(S6, I4[P6 + 1], I4[P6], t2.depth) && P6++, !Mi(S6, L4, I4[P6], t2.depth)); )
        I4[N5] = I4[P6], N5 = P6, P6 <<= 1;
      I4[N5] = L4;
    };
    function re4(S6, N5) {
      let I4 = -1, L4, P6 = S6[0 * 2 + 1], B6 = 0, K5 = 7, Ee2 = 4;
      P6 === 0 && (K5 = 138, Ee2 = 3), S6[(N5 + 1) * 2 + 1] = 65535;
      for (let Ne2 = 0; Ne2 <= N5; Ne2++)
        L4 = P6, P6 = S6[(Ne2 + 1) * 2 + 1], !(++B6 < K5 && L4 == P6) && (B6 < Ee2 ? Z5[L4 * 2] += B6 : L4 !== 0 ? (L4 != I4 && Z5[L4 * 2]++, Z5[16 * 2]++) : B6 <= 10 ? Z5[17 * 2]++ : Z5[18 * 2]++, B6 = 0, I4 = L4, P6 === 0 ? (K5 = 138, Ee2 = 3) : L4 == P6 ? (K5 = 6, Ee2 = 3) : (K5 = 7, Ee2 = 4));
    }
    function we2() {
      let S6;
      for (re4(M5, G5.max_code), re4(U5, ce4.max_code), k4.build_tree(t2), S6 = 19 - 1; S6 >= 3 && Z5[X.bl_order[S6] * 2 + 1] === 0; S6--)
        ;
      return t2.opt_len += 3 * (S6 + 1) + 5 + 5 + 4, S6;
    }
    function de2(S6) {
      t2.pending_buf[t2.pending++] = S6;
    }
    function Se2(S6) {
      de2(S6 & 255), de2(S6 >>> 8 & 255);
    }
    function ye2(S6) {
      de2(S6 >> 8 & 255), de2(S6 & 255 & 255);
    }
    function ae4(S6, N5) {
      let I4, L4 = N5;
      J4 > 16 - L4 ? (I4 = S6, ee4 |= I4 << J4 & 65535, Se2(ee4), ee4 = I4 >>> 16 - J4, J4 += L4 - 16) : (ee4 |= S6 << J4 & 65535, J4 += L4);
    }
    function le3(S6, N5) {
      let I4 = S6 * 2;
      ae4(N5[I4] & 65535, N5[I4 + 1] & 65535);
    }
    function Qe2(S6, N5) {
      let I4, L4 = -1, P6, B6 = S6[0 * 2 + 1], K5 = 0, Ee2 = 7, Ne2 = 4;
      for (B6 === 0 && (Ee2 = 138, Ne2 = 3), I4 = 0; I4 <= N5; I4++)
        if (P6 = B6, B6 = S6[(I4 + 1) * 2 + 1], !(++K5 < Ee2 && P6 == B6)) {
          if (K5 < Ne2)
            do
              le3(P6, Z5);
            while (--K5 !== 0);
          else
            P6 !== 0 ? (P6 != L4 && (le3(P6, Z5), K5--), le3(16, Z5), ae4(K5 - 3, 2)) : K5 <= 10 ? (le3(17, Z5), ae4(K5 - 3, 3)) : (le3(18, Z5), ae4(K5 - 11, 7));
          K5 = 0, L4 = P6, B6 === 0 ? (Ee2 = 138, Ne2 = 3) : P6 == B6 ? (Ee2 = 6, Ne2 = 3) : (Ee2 = 7, Ne2 = 4);
        }
    }
    function Ie(S6, N5, I4) {
      let L4;
      for (ae4(S6 - 257, 5), ae4(N5 - 1, 5), ae4(I4 - 4, 4), L4 = 0; L4 < I4; L4++)
        ae4(Z5[X.bl_order[L4] * 2 + 1], 3);
      Qe2(M5, S6 - 1), Qe2(U5, N5 - 1);
    }
    function Ft() {
      J4 == 16 ? (Se2(ee4), ee4 = 0, J4 = 0) : J4 >= 8 && (de2(ee4 & 255), ee4 >>>= 8, J4 -= 8);
    }
    function pn2() {
      ae4(Dn << 1, 3), le3(256, _e.static_ltree), Ft(), 1 + Re2 + 10 - J4 < 9 && (ae4(Dn << 1, 3), le3(256, _e.static_ltree), Ft()), Re2 = 7;
    }
    function ke2(S6, N5) {
      let I4, L4, P6;
      if (t2.dist_buf[H5] = S6, t2.lc_buf[H5] = N5 & 255, H5++, S6 === 0 ? M5[N5 * 2]++ : (V6++, S6--, M5[(X._length_code[N5] + 256 + 1) * 2]++, U5[X.d_code(S6) * 2]++), !(H5 & 8191) && D5 > 2) {
        for (I4 = H5 * 8, L4 = p4 - _2, P6 = 0; P6 < 30; P6++)
          I4 += U5[P6 * 2] * (5 + X.extra_dbits[P6]);
        if (I4 >>>= 3, V6 < Math.floor(H5 / 2) && I4 < Math.floor(L4 / 2))
          return !0;
      }
      return H5 == ne4 - 1;
    }
    function Di(S6, N5) {
      let I4, L4, P6 = 0, B6, K5;
      if (H5 !== 0)
        do
          I4 = t2.dist_buf[P6], L4 = t2.lc_buf[P6], P6++, I4 === 0 ? le3(L4, S6) : (B6 = X._length_code[L4], le3(B6 + 256 + 1, S6), K5 = X.extra_lbits[B6], K5 !== 0 && (L4 -= X.base_length[B6], ae4(L4, K5)), I4--, B6 = X.d_code(I4), le3(B6, N5), K5 = X.extra_dbits[B6], K5 !== 0 && (I4 -= X.base_dist[B6], ae4(I4, K5)));
        while (P6 < H5);
      le3(256, S6), Re2 = S6[256 * 2 + 1];
    }
    function yi() {
      J4 > 8 ? Se2(ee4) : J4 > 0 && de2(ee4 & 255), ee4 = 0, J4 = 0;
    }
    function xa(S6, N5, I4) {
      yi(), Re2 = 8, I4 && (Se2(N5), Se2(~N5)), t2.pending_buf.set(s2.subarray(S6, S6 + N5), t2.pending), t2.pending += N5;
    }
    function Ii(S6, N5, I4) {
      ae4((Fa << 1) + (I4 ? 1 : 0), 3), xa(S6, N5, !0);
    }
    function Aa(S6, N5, I4) {
      let L4, P6, B6 = 0;
      D5 > 0 ? (G5.build_tree(t2), ce4.build_tree(t2), B6 = we2(), L4 = t2.opt_len + 3 + 7 >>> 3, P6 = t2.static_len + 3 + 7 >>> 3, P6 <= L4 && (L4 = P6)) : L4 = P6 = N5 + 5, N5 + 4 <= L4 && S6 != -1 ? Ii(S6, N5, I4) : P6 == L4 ? (ae4((Dn << 1) + (I4 ? 1 : 0), 3), Di(_e.static_ltree, _e.static_dtree)) : (ae4((La << 1) + (I4 ? 1 : 0), 3), Ie(G5.max_code + 1, ce4.max_code + 1, B6 + 1), Di(M5, U5)), Te(), I4 && yi();
    }
    function He2(S6) {
      Aa(_2 >= 0 ? _2 : -1, p4 - _2, S6), _2 = p4, n3.flush_pending();
    }
    function mn2() {
      let S6, N5, I4, L4;
      do {
        if (L4 = d5 - A4 - p4, L4 === 0 && p4 === 0 && A4 === 0)
          L4 = a;
        else if (L4 == -1)
          L4--;
        else if (p4 >= a + a - be) {
          s2.set(s2.subarray(a, a + a), 0), x3 -= a, p4 -= a, _2 -= a, S6 = T7, I4 = S6;
          do
            N5 = h2[--I4] & 65535, h2[I4] = N5 >= a ? N5 - a : 0;
          while (--S6 !== 0);
          S6 = a, I4 = S6;
          do
            N5 = u2[--I4] & 65535, u2[I4] = N5 >= a ? N5 - a : 0;
          while (--S6 !== 0);
          L4 += a;
        }
        if (n3.avail_in === 0)
          return;
        S6 = n3.read_buf(s2, p4 + A4, L4), A4 += S6, A4 >= Q && (R3 = s2[p4] & 255, R3 = (R3 << c2 ^ s2[p4 + 1] & 255) & f3);
      } while (A4 < be && n3.avail_in !== 0);
    }
    function Ta(S6) {
      let N5 = 65535, I4;
      for (N5 > i2 - 5 && (N5 = i2 - 5); ; ) {
        if (A4 <= 1) {
          if (mn2(), A4 === 0 && S6 == 0)
            return ge;
          if (A4 === 0)
            break;
        }
        if (p4 += A4, A4 = 0, I4 = _2 + N5, (p4 === 0 || p4 >= I4) && (A4 = p4 - I4, p4 = I4, He2(!1), n3.avail_out === 0) || p4 - _2 >= a - be && (He2(!1), n3.avail_out === 0))
          return ge;
      }
      return He2(S6 == 4), n3.avail_out === 0 ? S6 == 4 ? ut : ge : S6 == 4 ? Mt : Ct;
    }
    function Ni(S6) {
      let N5 = O4, I4 = p4, L4, P6, B6 = m3, K5 = p4 > a - be ? p4 - (a - be) : 0, Ee2 = v, Ne2 = l2, Sn2 = p4 + Zt, Fi = s2[I4 + B6 - 1], Li = s2[I4 + B6];
      m3 >= F8 && (N5 >>= 2), Ee2 > A4 && (Ee2 = A4);
      do
        if (L4 = S6, !(s2[L4 + B6] != Li || s2[L4 + B6 - 1] != Fi || s2[L4] != s2[I4] || s2[++L4] != s2[I4 + 1])) {
          I4 += 2, L4++;
          do
            ;
          while (s2[++I4] == s2[++L4] && s2[++I4] == s2[++L4] && s2[++I4] == s2[++L4] && s2[++I4] == s2[++L4] && s2[++I4] == s2[++L4] && s2[++I4] == s2[++L4] && s2[++I4] == s2[++L4] && s2[++I4] == s2[++L4] && I4 < Sn2);
          if (P6 = Zt - (Sn2 - I4), I4 = Sn2 - Zt, P6 > B6) {
            if (x3 = S6, B6 = P6, P6 >= Ee2)
              break;
            Fi = s2[I4 + B6 - 1], Li = s2[I4 + B6];
          }
        }
      while ((S6 = u2[S6 & Ne2] & 65535) > K5 && --N5 !== 0);
      return B6 <= A4 ? B6 : A4;
    }
    function ba(S6) {
      let N5 = 0, I4;
      for (; ; ) {
        if (A4 < be) {
          if (mn2(), A4 < be && S6 == 0)
            return ge;
          if (A4 === 0)
            break;
        }
        if (A4 >= Q && (R3 = (R3 << c2 ^ s2[p4 + (Q - 1)] & 255) & f3, N5 = h2[R3] & 65535, u2[p4 & l2] = h2[R3], h2[R3] = p4), N5 !== 0 && (p4 - N5 & 65535) <= a - be && C5 != 2 && (E2 = Ni(N5)), E2 >= Q)
          if (I4 = ke2(p4 - x3, E2 - Q), A4 -= E2, E2 <= b4 && A4 >= Q) {
            E2--;
            do
              p4++, R3 = (R3 << c2 ^ s2[p4 + (Q - 1)] & 255) & f3, N5 = h2[R3] & 65535, u2[p4 & l2] = h2[R3], h2[R3] = p4;
            while (--E2 !== 0);
            p4++;
          } else
            p4 += E2, E2 = 0, R3 = s2[p4] & 255, R3 = (R3 << c2 ^ s2[p4 + 1] & 255) & f3;
        else
          I4 = ke2(0, s2[p4] & 255), A4--, p4++;
        if (I4 && (He2(!1), n3.avail_out === 0))
          return ge;
      }
      return He2(S6 == 4), n3.avail_out === 0 ? S6 == 4 ? ut : ge : S6 == 4 ? Mt : Ct;
    }
    function pa(S6) {
      let N5 = 0, I4, L4;
      for (; ; ) {
        if (A4 < be) {
          if (mn2(), A4 < be && S6 == 0)
            return ge;
          if (A4 === 0)
            break;
        }
        if (A4 >= Q && (R3 = (R3 << c2 ^ s2[p4 + (Q - 1)] & 255) & f3, N5 = h2[R3] & 65535, u2[p4 & l2] = h2[R3], h2[R3] = p4), m3 = E2, w4 = x3, E2 = Q - 1, N5 !== 0 && m3 < b4 && (p4 - N5 & 65535) <= a - be && (C5 != 2 && (E2 = Ni(N5)), E2 <= 5 && (C5 == 1 || E2 == Q && p4 - x3 > 4096) && (E2 = Q - 1)), m3 >= Q && E2 <= m3) {
          L4 = p4 + A4 - Q, I4 = ke2(p4 - 1 - w4, m3 - Q), A4 -= m3 - 1, m3 -= 2;
          do
            ++p4 <= L4 && (R3 = (R3 << c2 ^ s2[p4 + (Q - 1)] & 255) & f3, N5 = h2[R3] & 65535, u2[p4 & l2] = h2[R3], h2[R3] = p4);
          while (--m3 !== 0);
          if (g4 = 0, E2 = Q - 1, p4++, I4 && (He2(!1), n3.avail_out === 0))
            return ge;
        } else if (g4 !== 0) {
          if (I4 = ke2(0, s2[p4 - 1] & 255), I4 && He2(!1), p4++, A4--, n3.avail_out === 0)
            return ge;
        } else
          g4 = 1, p4++, A4--;
      }
      return g4 !== 0 && (I4 = ke2(0, s2[p4 - 1] & 255), g4 = 0), He2(S6 == 4), n3.avail_out === 0 ? S6 == 4 ? ut : ge : S6 == 4 ? Mt : Ct;
    }
    function ma(S6) {
      return S6.total_in = S6.total_out = 0, S6.msg = null, t2.pending = 0, t2.pending_out = 0, e3 = Pt, r = 0, De(), me2(), 0;
    }
    t2.deflateInit = function(S6, N5, I4, L4, P6, B6) {
      return L4 || (L4 = On), P6 || (P6 = Ia), B6 || (B6 = 0), S6.msg = null, N5 == -1 && (N5 = 6), P6 < 1 || P6 > ya || L4 != On || I4 < 9 || I4 > 15 || N5 < 0 || N5 > 9 || B6 < 0 || B6 > 2 ? -2 : (S6.dstate = t2, o2 = I4, a = 1 << o2, l2 = a - 1, y4 = P6 + 7, T7 = 1 << y4, f3 = T7 - 1, c2 = Math.floor((y4 + Q - 1) / Q), s2 = new Uint8Array(a * 2), u2 = [], h2 = [], ne4 = 1 << P6 + 6, t2.pending_buf = new Uint8Array(ne4 * 4), i2 = ne4 * 4, t2.dist_buf = new Uint16Array(ne4), t2.lc_buf = new Uint8Array(ne4), D5 = N5, C5 = B6, ma(S6));
    }, t2.deflateEnd = function() {
      return e3 != gn && e3 != Pt && e3 != dt ? -2 : (t2.lc_buf = null, t2.dist_buf = null, t2.pending_buf = null, h2 = null, u2 = null, s2 = null, t2.dstate = null, e3 == Pt ? -3 : 0);
    }, t2.deflateParams = function(S6, N5, I4) {
      let L4 = 0;
      return N5 == -1 && (N5 = 6), N5 < 0 || N5 > 9 || I4 < 0 || I4 > 2 ? -2 : (Fe[D5].func != Fe[N5].func && S6.total_in !== 0 && (L4 = S6.deflate(1)), D5 != N5 && (D5 = N5, b4 = Fe[D5].max_lazy, F8 = Fe[D5].good_length, v = Fe[D5].nice_length, O4 = Fe[D5].max_chain), C5 = I4, L4);
    }, t2.deflateSetDictionary = function(S6, N5, I4) {
      let L4 = I4, P6, B6 = 0;
      if (!N5 || e3 != gn)
        return -2;
      if (L4 < Q)
        return 0;
      for (L4 > a - be && (L4 = a - be, B6 = I4 - L4), s2.set(N5.subarray(B6, B6 + L4), 0), p4 = L4, _2 = L4, R3 = s2[0] & 255, R3 = (R3 << c2 ^ s2[1] & 255) & f3, P6 = 0; P6 <= L4 - Q; P6++)
        R3 = (R3 << c2 ^ s2[P6 + (Q - 1)] & 255) & f3, u2[P6 & l2] = h2[R3], h2[R3] = P6;
      return 0;
    }, t2.deflate = function(S6, N5) {
      let I4, L4, P6, B6, K5;
      if (N5 > 4 || N5 < 0)
        return -2;
      if (!S6.next_out || !S6.next_in && S6.avail_in !== 0 || e3 == dt && N5 != 4)
        return S6.msg = Lt[2 - -2], -2;
      if (S6.avail_out === 0)
        return S6.msg = Lt[2 - -5], -5;
      if (n3 = S6, B6 = r, r = N5, e3 == gn && (L4 = On + (o2 - 8 << 4) << 8, P6 = (D5 - 1 & 255) >> 1, P6 > 3 && (P6 = 3), L4 |= P6 << 6, p4 !== 0 && (L4 |= Na), L4 += 31 - L4 % 31, e3 = Pt, ye2(L4)), t2.pending !== 0) {
        if (n3.flush_pending(), n3.avail_out === 0)
          return r = -1, 0;
      } else if (n3.avail_in === 0 && N5 <= B6 && N5 != 4)
        return n3.msg = Lt[2 - -5], -5;
      if (e3 == dt && n3.avail_in !== 0)
        return S6.msg = Lt[2 - -5], -5;
      if (n3.avail_in !== 0 || A4 !== 0 || N5 != 0 && e3 != dt) {
        switch (K5 = -1, Fe[D5].func) {
          case Pi:
            K5 = Ta(N5);
            break;
          case Ut:
            K5 = ba(N5);
            break;
          case $e:
            K5 = pa(N5);
            break;
          default:
        }
        if ((K5 == ut || K5 == Mt) && (e3 = dt), K5 == ge || K5 == ut)
          return n3.avail_out === 0 && (r = -1), 0;
        if (K5 == Ct) {
          if (N5 == 1)
            pn2();
          else if (Ii(0, 0, !1), N5 == 3)
            for (I4 = 0; I4 < T7; I4++)
              h2[I4] = 0;
          if (n3.flush_pending(), n3.avail_out === 0)
            return r = -1, 0;
        }
      }
      return N5 != 4 ? 0 : 1;
    };
  }
  function Ui() {
    let t2 = this;
    t2.next_in_index = 0, t2.next_out_index = 0, t2.avail_in = 0, t2.total_in = 0, t2.avail_out = 0, t2.total_out = 0;
  }
  Ui.prototype = { deflateInit(t2, n3) {
    let e3 = this;
    return e3.dstate = new Ca(), n3 || (n3 = 15), e3.dstate.deflateInit(e3, t2, n3);
  }, deflate(t2) {
    let n3 = this;
    return n3.dstate ? n3.dstate.deflate(n3, t2) : -2;
  }, deflateEnd() {
    let t2 = this;
    if (!t2.dstate)
      return -2;
    let n3 = t2.dstate.deflateEnd();
    return t2.dstate = null, n3;
  }, deflateParams(t2, n3) {
    let e3 = this;
    return e3.dstate ? e3.dstate.deflateParams(e3, t2, n3) : -2;
  }, deflateSetDictionary(t2, n3) {
    let e3 = this;
    return e3.dstate ? e3.dstate.deflateSetDictionary(e3, t2, n3) : -2;
  }, read_buf(t2, n3, e3) {
    let i2 = this, r = i2.avail_in;
    return r > e3 && (r = e3), r === 0 ? 0 : (i2.avail_in -= r, t2.set(i2.next_in.subarray(i2.next_in_index, i2.next_in_index + r), n3), i2.next_in_index += r, i2.total_in += r, r);
  }, flush_pending() {
    let t2 = this, n3 = t2.dstate.pending;
    n3 > t2.avail_out && (n3 = t2.avail_out), n3 !== 0 && (t2.next_out.set(t2.dstate.pending_buf.subarray(t2.dstate.pending_out, t2.dstate.pending_out + n3), t2.next_out_index), t2.next_out_index += n3, t2.dstate.pending_out += n3, t2.total_out += n3, t2.avail_out -= n3, t2.dstate.pending -= n3, t2.dstate.pending === 0 && (t2.dstate.pending_out = 0));
  } };
  function Zi(t2) {
    let n3 = this, e3 = new Ui(), i2 = Ma(t2 && t2.chunkSize ? t2.chunkSize : 64 * 1024), r = 0, a = new Uint8Array(i2), o2 = t2 ? t2.level : -1;
    typeof o2 > "u" && (o2 = -1), e3.deflateInit(o2), e3.next_out = a, n3.append = function(l2, s2) {
      let d5, u2, h2 = 0, R3 = 0, T7 = 0, y4 = [];
      if (l2.length) {
        e3.next_in_index = 0, e3.next_in = l2, e3.avail_in = l2.length;
        do {
          if (e3.next_out_index = 0, e3.avail_out = i2, d5 = e3.deflate(r), d5 != 0)
            throw new Error("deflating: " + e3.msg);
          e3.next_out_index && (e3.next_out_index == i2 ? y4.push(new Uint8Array(a)) : y4.push(a.slice(0, e3.next_out_index))), T7 += e3.next_out_index, s2 && e3.next_in_index > 0 && e3.next_in_index != h2 && (s2(e3.next_in_index), h2 = e3.next_in_index);
        } while (e3.avail_in > 0 || e3.avail_out === 0);
        return y4.length > 1 ? (u2 = new Uint8Array(T7), y4.forEach(function(f3) {
          u2.set(f3, R3), R3 += f3.length;
        })) : u2 = y4[0] || new Uint8Array(), u2;
      }
    }, n3.flush = function() {
      let l2, s2, d5 = 0, u2 = 0, h2 = [];
      do {
        if (e3.next_out_index = 0, e3.avail_out = i2, l2 = e3.deflate(4), l2 != 1 && l2 != 0)
          throw new Error("deflating: " + e3.msg);
        i2 - e3.avail_out > 0 && h2.push(a.slice(0, e3.next_out_index)), u2 += e3.next_out_index;
      } while (e3.avail_in > 0 || e3.avail_out === 0);
      return e3.deflateEnd(), s2 = new Uint8Array(u2), h2.forEach(function(R3) {
        s2.set(R3, d5), d5 += R3.length;
      }), s2;
    };
  }
  function Ma(t2) {
    return t2 + 5 * (Math.floor(t2 / 16383) + 1);
  }
  var pe = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], ir = 1440, Pa = 0, Ua = 4, Za = 9, ka = 5, va = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255], Ba = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577], Ha = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], Ga = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112], Va = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], Ya = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], Ge = 15;
  function Fn() {
    let t2 = this, n3, e3, i2, r, a, o2;
    function l2(d5, u2, h2, R3, T7, y4, f3, c2, _2, E2, w4) {
      let g4, p4, x3, A4, m3, O4, b4, D5, C5, F8, v, M5, U5, Z5, G5;
      F8 = 0, m3 = h2;
      do
        i2[d5[u2 + F8]]++, F8++, m3--;
      while (m3 !== 0);
      if (i2[0] == h2)
        return f3[0] = -1, c2[0] = 0, 0;
      for (D5 = c2[0], O4 = 1; O4 <= Ge && i2[O4] === 0; O4++)
        ;
      for (b4 = O4, D5 < O4 && (D5 = O4), m3 = Ge; m3 !== 0 && i2[m3] === 0; m3--)
        ;
      for (x3 = m3, D5 > m3 && (D5 = m3), c2[0] = D5, Z5 = 1 << O4; O4 < m3; O4++, Z5 <<= 1)
        if ((Z5 -= i2[O4]) < 0)
          return -3;
      if ((Z5 -= i2[m3]) < 0)
        return -3;
      for (i2[m3] += Z5, o2[1] = O4 = 0, F8 = 1, U5 = 2; --m3 !== 0; )
        o2[U5] = O4 += i2[F8], U5++, F8++;
      m3 = 0, F8 = 0;
      do
        (O4 = d5[u2 + F8]) !== 0 && (w4[o2[O4]++] = m3), F8++;
      while (++m3 < h2);
      for (h2 = o2[x3], o2[0] = m3 = 0, F8 = 0, A4 = -1, M5 = -D5, a[0] = 0, v = 0, G5 = 0; b4 <= x3; b4++)
        for (g4 = i2[b4]; g4-- !== 0; ) {
          for (; b4 > M5 + D5; ) {
            if (A4++, M5 += D5, G5 = x3 - M5, G5 = G5 > D5 ? D5 : G5, (p4 = 1 << (O4 = b4 - M5)) > g4 + 1 && (p4 -= g4 + 1, U5 = b4, O4 < G5))
              for (; ++O4 < G5 && !((p4 <<= 1) <= i2[++U5]); )
                p4 -= i2[U5];
            if (G5 = 1 << O4, E2[0] + G5 > ir)
              return -3;
            a[A4] = v = E2[0], E2[0] += G5, A4 !== 0 ? (o2[A4] = m3, r[0] = O4, r[1] = D5, O4 = m3 >>> M5 - D5, r[2] = v - a[A4 - 1] - O4, _2.set(r, (a[A4 - 1] + O4) * 3)) : f3[0] = v;
          }
          for (r[1] = b4 - M5, F8 >= h2 ? r[0] = 128 + 64 : w4[F8] < R3 ? (r[0] = w4[F8] < 256 ? 0 : 32 + 64, r[2] = w4[F8++]) : (r[0] = y4[w4[F8] - R3] + 16 + 64, r[2] = T7[w4[F8++] - R3]), p4 = 1 << b4 - M5, O4 = m3 >>> M5; O4 < G5; O4 += p4)
            _2.set(r, (v + O4) * 3);
          for (O4 = 1 << b4 - 1; m3 & O4; O4 >>>= 1)
            m3 ^= O4;
          for (m3 ^= O4, C5 = (1 << M5) - 1; (m3 & C5) != o2[A4]; )
            A4--, M5 -= D5, C5 = (1 << M5) - 1;
        }
      return Z5 !== 0 && x3 != 1 ? -5 : 0;
    }
    function s2(d5) {
      let u2;
      for (n3 || (n3 = [], e3 = [], i2 = new Int32Array(Ge + 1), r = [], a = new Int32Array(Ge), o2 = new Int32Array(Ge + 1)), e3.length < d5 && (e3 = []), u2 = 0; u2 < d5; u2++)
        e3[u2] = 0;
      for (u2 = 0; u2 < Ge + 1; u2++)
        i2[u2] = 0;
      for (u2 = 0; u2 < 3; u2++)
        r[u2] = 0;
      a.set(i2.subarray(0, Ge), 0), o2.set(i2.subarray(0, Ge + 1), 0);
    }
    t2.inflate_trees_bits = function(d5, u2, h2, R3, T7) {
      let y4;
      return s2(19), n3[0] = 0, y4 = l2(d5, 0, 19, 19, null, null, h2, u2, R3, n3, e3), y4 == -3 ? T7.msg = "oversubscribed dynamic bit lengths tree" : (y4 == -5 || u2[0] === 0) && (T7.msg = "incomplete dynamic bit lengths tree", y4 = -3), y4;
    }, t2.inflate_trees_dynamic = function(d5, u2, h2, R3, T7, y4, f3, c2, _2) {
      let E2;
      return s2(288), n3[0] = 0, E2 = l2(h2, 0, d5, 257, Ha, Ga, y4, R3, c2, n3, e3), E2 != 0 || R3[0] === 0 ? (E2 == -3 ? _2.msg = "oversubscribed literal/length tree" : E2 != -4 && (_2.msg = "incomplete literal/length tree", E2 = -3), E2) : (s2(288), E2 = l2(h2, d5, u2, 0, Va, Ya, f3, T7, c2, n3, e3), E2 != 0 || T7[0] === 0 && d5 > 257 ? (E2 == -3 ? _2.msg = "oversubscribed distance tree" : E2 == -5 ? (_2.msg = "incomplete distance tree", E2 = -3) : E2 != -4 && (_2.msg = "empty distance tree with lengths", E2 = -3), E2) : 0);
    };
  }
  Fn.inflate_trees_fixed = function(t2, n3, e3, i2) {
    return t2[0] = Za, n3[0] = ka, e3[0] = va, i2[0] = Ba, 0;
  };
  var Bt = 0, ki = 1, vi = 2, Bi = 3, Hi = 4, Gi = 5, Vi = 6, yn = 7, Yi = 8, Ht = 9;
  function Ka() {
    let t2 = this, n3, e3 = 0, i2, r = 0, a = 0, o2 = 0, l2 = 0, s2 = 0, d5 = 0, u2 = 0, h2, R3 = 0, T7, y4 = 0;
    function f3(c2, _2, E2, w4, g4, p4, x3, A4) {
      let m3, O4, b4, D5, C5, F8, v, M5, U5, Z5, G5, ce4, k4, ne4, H5, V6;
      v = A4.next_in_index, M5 = A4.avail_in, C5 = x3.bitb, F8 = x3.bitk, U5 = x3.write, Z5 = U5 < x3.read ? x3.read - U5 - 1 : x3.end - U5, G5 = pe[c2], ce4 = pe[_2];
      do {
        for (; F8 < 20; )
          M5--, C5 |= (A4.read_byte(v++) & 255) << F8, F8 += 8;
        if (m3 = C5 & G5, O4 = E2, b4 = w4, V6 = (b4 + m3) * 3, (D5 = O4[V6]) === 0) {
          C5 >>= O4[V6 + 1], F8 -= O4[V6 + 1], x3.win[U5++] = O4[V6 + 2], Z5--;
          continue;
        }
        do {
          if (C5 >>= O4[V6 + 1], F8 -= O4[V6 + 1], D5 & 16) {
            for (D5 &= 15, k4 = O4[V6 + 2] + (C5 & pe[D5]), C5 >>= D5, F8 -= D5; F8 < 15; )
              M5--, C5 |= (A4.read_byte(v++) & 255) << F8, F8 += 8;
            m3 = C5 & ce4, O4 = g4, b4 = p4, V6 = (b4 + m3) * 3, D5 = O4[V6];
            do
              if (C5 >>= O4[V6 + 1], F8 -= O4[V6 + 1], D5 & 16) {
                for (D5 &= 15; F8 < D5; )
                  M5--, C5 |= (A4.read_byte(v++) & 255) << F8, F8 += 8;
                if (ne4 = O4[V6 + 2] + (C5 & pe[D5]), C5 >>= D5, F8 -= D5, Z5 -= k4, U5 >= ne4)
                  H5 = U5 - ne4, U5 - H5 > 0 && 2 > U5 - H5 ? (x3.win[U5++] = x3.win[H5++], x3.win[U5++] = x3.win[H5++], k4 -= 2) : (x3.win.set(x3.win.subarray(H5, H5 + 2), U5), U5 += 2, H5 += 2, k4 -= 2);
                else {
                  H5 = U5 - ne4;
                  do
                    H5 += x3.end;
                  while (H5 < 0);
                  if (D5 = x3.end - H5, k4 > D5) {
                    if (k4 -= D5, U5 - H5 > 0 && D5 > U5 - H5)
                      do
                        x3.win[U5++] = x3.win[H5++];
                      while (--D5 !== 0);
                    else
                      x3.win.set(x3.win.subarray(H5, H5 + D5), U5), U5 += D5, H5 += D5, D5 = 0;
                    H5 = 0;
                  }
                }
                if (U5 - H5 > 0 && k4 > U5 - H5)
                  do
                    x3.win[U5++] = x3.win[H5++];
                  while (--k4 !== 0);
                else
                  x3.win.set(x3.win.subarray(H5, H5 + k4), U5), U5 += k4, H5 += k4, k4 = 0;
                break;
              } else if (!(D5 & 64))
                m3 += O4[V6 + 2], m3 += C5 & pe[D5], V6 = (b4 + m3) * 3, D5 = O4[V6];
              else
                return A4.msg = "invalid distance code", k4 = A4.avail_in - M5, k4 = F8 >> 3 < k4 ? F8 >> 3 : k4, M5 += k4, v -= k4, F8 -= k4 << 3, x3.bitb = C5, x3.bitk = F8, A4.avail_in = M5, A4.total_in += v - A4.next_in_index, A4.next_in_index = v, x3.write = U5, -3;
            while (!0);
            break;
          }
          if (D5 & 64)
            return D5 & 32 ? (k4 = A4.avail_in - M5, k4 = F8 >> 3 < k4 ? F8 >> 3 : k4, M5 += k4, v -= k4, F8 -= k4 << 3, x3.bitb = C5, x3.bitk = F8, A4.avail_in = M5, A4.total_in += v - A4.next_in_index, A4.next_in_index = v, x3.write = U5, 1) : (A4.msg = "invalid literal/length code", k4 = A4.avail_in - M5, k4 = F8 >> 3 < k4 ? F8 >> 3 : k4, M5 += k4, v -= k4, F8 -= k4 << 3, x3.bitb = C5, x3.bitk = F8, A4.avail_in = M5, A4.total_in += v - A4.next_in_index, A4.next_in_index = v, x3.write = U5, -3);
          if (m3 += O4[V6 + 2], m3 += C5 & pe[D5], V6 = (b4 + m3) * 3, (D5 = O4[V6]) === 0) {
            C5 >>= O4[V6 + 1], F8 -= O4[V6 + 1], x3.win[U5++] = O4[V6 + 2], Z5--;
            break;
          }
        } while (!0);
      } while (Z5 >= 258 && M5 >= 10);
      return k4 = A4.avail_in - M5, k4 = F8 >> 3 < k4 ? F8 >> 3 : k4, M5 += k4, v -= k4, F8 -= k4 << 3, x3.bitb = C5, x3.bitk = F8, A4.avail_in = M5, A4.total_in += v - A4.next_in_index, A4.next_in_index = v, x3.write = U5, 0;
    }
    t2.init = function(c2, _2, E2, w4, g4, p4) {
      n3 = Bt, d5 = c2, u2 = _2, h2 = E2, R3 = w4, T7 = g4, y4 = p4, i2 = null;
    }, t2.proc = function(c2, _2, E2) {
      let w4, g4, p4, x3 = 0, A4 = 0, m3 = 0, O4, b4, D5, C5;
      for (m3 = _2.next_in_index, O4 = _2.avail_in, x3 = c2.bitb, A4 = c2.bitk, b4 = c2.write, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4; ; )
        switch (n3) {
          case Bt:
            if (D5 >= 258 && O4 >= 10 && (c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, E2 = f3(d5, u2, h2, R3, T7, y4, c2, _2), m3 = _2.next_in_index, O4 = _2.avail_in, x3 = c2.bitb, A4 = c2.bitk, b4 = c2.write, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4, E2 != 0)) {
              n3 = E2 == 1 ? yn : Ht;
              break;
            }
            a = d5, i2 = h2, r = R3, n3 = ki;
          case ki:
            for (w4 = a; A4 < w4; ) {
              if (O4 !== 0)
                E2 = 0;
              else
                return c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
              O4--, x3 |= (_2.read_byte(m3++) & 255) << A4, A4 += 8;
            }
            if (g4 = (r + (x3 & pe[w4])) * 3, x3 >>>= i2[g4 + 1], A4 -= i2[g4 + 1], p4 = i2[g4], p4 === 0) {
              o2 = i2[g4 + 2], n3 = Vi;
              break;
            }
            if (p4 & 16) {
              l2 = p4 & 15, e3 = i2[g4 + 2], n3 = vi;
              break;
            }
            if (!(p4 & 64)) {
              a = p4, r = g4 / 3 + i2[g4 + 2];
              break;
            }
            if (p4 & 32) {
              n3 = yn;
              break;
            }
            return n3 = Ht, _2.msg = "invalid literal/length code", E2 = -3, c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
          case vi:
            for (w4 = l2; A4 < w4; ) {
              if (O4 !== 0)
                E2 = 0;
              else
                return c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
              O4--, x3 |= (_2.read_byte(m3++) & 255) << A4, A4 += 8;
            }
            e3 += x3 & pe[w4], x3 >>= w4, A4 -= w4, a = u2, i2 = T7, r = y4, n3 = Bi;
          case Bi:
            for (w4 = a; A4 < w4; ) {
              if (O4 !== 0)
                E2 = 0;
              else
                return c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
              O4--, x3 |= (_2.read_byte(m3++) & 255) << A4, A4 += 8;
            }
            if (g4 = (r + (x3 & pe[w4])) * 3, x3 >>= i2[g4 + 1], A4 -= i2[g4 + 1], p4 = i2[g4], p4 & 16) {
              l2 = p4 & 15, s2 = i2[g4 + 2], n3 = Hi;
              break;
            }
            if (!(p4 & 64)) {
              a = p4, r = g4 / 3 + i2[g4 + 2];
              break;
            }
            return n3 = Ht, _2.msg = "invalid distance code", E2 = -3, c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
          case Hi:
            for (w4 = l2; A4 < w4; ) {
              if (O4 !== 0)
                E2 = 0;
              else
                return c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
              O4--, x3 |= (_2.read_byte(m3++) & 255) << A4, A4 += 8;
            }
            s2 += x3 & pe[w4], x3 >>= w4, A4 -= w4, n3 = Gi;
          case Gi:
            for (C5 = b4 - s2; C5 < 0; )
              C5 += c2.end;
            for (; e3 !== 0; ) {
              if (D5 === 0 && (b4 == c2.end && c2.read !== 0 && (b4 = 0, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4), D5 === 0 && (c2.write = b4, E2 = c2.inflate_flush(_2, E2), b4 = c2.write, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4, b4 == c2.end && c2.read !== 0 && (b4 = 0, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4), D5 === 0)))
                return c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
              c2.win[b4++] = c2.win[C5++], D5--, C5 == c2.end && (C5 = 0), e3--;
            }
            n3 = Bt;
            break;
          case Vi:
            if (D5 === 0 && (b4 == c2.end && c2.read !== 0 && (b4 = 0, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4), D5 === 0 && (c2.write = b4, E2 = c2.inflate_flush(_2, E2), b4 = c2.write, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4, b4 == c2.end && c2.read !== 0 && (b4 = 0, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4), D5 === 0)))
              return c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
            E2 = 0, c2.win[b4++] = o2, D5--, n3 = Bt;
            break;
          case yn:
            if (A4 > 7 && (A4 -= 8, O4++, m3--), c2.write = b4, E2 = c2.inflate_flush(_2, E2), b4 = c2.write, D5 = b4 < c2.read ? c2.read - b4 - 1 : c2.end - b4, c2.read != c2.write)
              return c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
            n3 = Yi;
          case Yi:
            return E2 = 1, c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
          case Ht:
            return E2 = -3, c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
          default:
            return E2 = -2, c2.bitb = x3, c2.bitk = A4, _2.avail_in = O4, _2.total_in += m3 - _2.next_in_index, _2.next_in_index = m3, c2.write = b4, c2.inflate_flush(_2, E2);
        }
    }, t2.free = function() {
    };
  }
  var Ki = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], it = 0, In = 1, ji = 2, Wi = 3, Xi = 4, qi = 5, Gt = 6, Vt = 7, Ji = 8, ze = 9;
  function ja(t2, n3) {
    let e3 = this, i2 = it, r = 0, a = 0, o2 = 0, l2, s2 = [0], d5 = [0], u2 = new Ka(), h2 = 0, R3 = new Int32Array(ir * 3), T7 = 0, y4 = new Fn();
    e3.bitk = 0, e3.bitb = 0, e3.win = new Uint8Array(n3), e3.end = n3, e3.read = 0, e3.write = 0, e3.reset = function(f3, c2) {
      c2 && (c2[0] = T7), i2 == Gt && u2.free(f3), i2 = it, e3.bitk = 0, e3.bitb = 0, e3.read = e3.write = 0;
    }, e3.reset(t2, null), e3.inflate_flush = function(f3, c2) {
      let _2, E2, w4;
      return E2 = f3.next_out_index, w4 = e3.read, _2 = (w4 <= e3.write ? e3.write : e3.end) - w4, _2 > f3.avail_out && (_2 = f3.avail_out), _2 !== 0 && c2 == -5 && (c2 = 0), f3.avail_out -= _2, f3.total_out += _2, f3.next_out.set(e3.win.subarray(w4, w4 + _2), E2), E2 += _2, w4 += _2, w4 == e3.end && (w4 = 0, e3.write == e3.end && (e3.write = 0), _2 = e3.write - w4, _2 > f3.avail_out && (_2 = f3.avail_out), _2 !== 0 && c2 == -5 && (c2 = 0), f3.avail_out -= _2, f3.total_out += _2, f3.next_out.set(e3.win.subarray(w4, w4 + _2), E2), E2 += _2, w4 += _2), f3.next_out_index = E2, e3.read = w4, c2;
    }, e3.proc = function(f3, c2) {
      let _2, E2, w4, g4, p4, x3, A4, m3;
      for (g4 = f3.next_in_index, p4 = f3.avail_in, E2 = e3.bitb, w4 = e3.bitk, x3 = e3.write, A4 = x3 < e3.read ? e3.read - x3 - 1 : e3.end - x3; ; ) {
        let O4, b4, D5, C5, F8, v, M5, U5;
        switch (i2) {
          case it:
            for (; w4 < 3; ) {
              if (p4 !== 0)
                c2 = 0;
              else
                return e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
              p4--, E2 |= (f3.read_byte(g4++) & 255) << w4, w4 += 8;
            }
            switch (_2 = E2 & 7, h2 = _2 & 1, _2 >>> 1) {
              case 0:
                E2 >>>= 3, w4 -= 3, _2 = w4 & 7, E2 >>>= _2, w4 -= _2, i2 = In;
                break;
              case 1:
                O4 = [], b4 = [], D5 = [[]], C5 = [[]], Fn.inflate_trees_fixed(O4, b4, D5, C5), u2.init(O4[0], b4[0], D5[0], 0, C5[0], 0), E2 >>>= 3, w4 -= 3, i2 = Gt;
                break;
              case 2:
                E2 >>>= 3, w4 -= 3, i2 = Wi;
                break;
              case 3:
                return E2 >>>= 3, w4 -= 3, i2 = ze, f3.msg = "invalid block type", c2 = -3, e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
            }
            break;
          case In:
            for (; w4 < 32; ) {
              if (p4 !== 0)
                c2 = 0;
              else
                return e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
              p4--, E2 |= (f3.read_byte(g4++) & 255) << w4, w4 += 8;
            }
            if ((~E2 >>> 16 & 65535) != (E2 & 65535))
              return i2 = ze, f3.msg = "invalid stored block lengths", c2 = -3, e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
            r = E2 & 65535, E2 = w4 = 0, i2 = r !== 0 ? ji : h2 !== 0 ? Vt : it;
            break;
          case ji:
            if (p4 === 0 || A4 === 0 && (x3 == e3.end && e3.read !== 0 && (x3 = 0, A4 = x3 < e3.read ? e3.read - x3 - 1 : e3.end - x3), A4 === 0 && (e3.write = x3, c2 = e3.inflate_flush(f3, c2), x3 = e3.write, A4 = x3 < e3.read ? e3.read - x3 - 1 : e3.end - x3, x3 == e3.end && e3.read !== 0 && (x3 = 0, A4 = x3 < e3.read ? e3.read - x3 - 1 : e3.end - x3), A4 === 0)))
              return e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
            if (c2 = 0, _2 = r, _2 > p4 && (_2 = p4), _2 > A4 && (_2 = A4), e3.win.set(f3.read_buf(g4, _2), x3), g4 += _2, p4 -= _2, x3 += _2, A4 -= _2, (r -= _2) !== 0)
              break;
            i2 = h2 !== 0 ? Vt : it;
            break;
          case Wi:
            for (; w4 < 14; ) {
              if (p4 !== 0)
                c2 = 0;
              else
                return e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
              p4--, E2 |= (f3.read_byte(g4++) & 255) << w4, w4 += 8;
            }
            if (a = _2 = E2 & 16383, (_2 & 31) > 29 || (_2 >> 5 & 31) > 29)
              return i2 = ze, f3.msg = "too many length or distance symbols", c2 = -3, e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
            if (_2 = 258 + (_2 & 31) + (_2 >> 5 & 31), !l2 || l2.length < _2)
              l2 = [];
            else
              for (m3 = 0; m3 < _2; m3++)
                l2[m3] = 0;
            E2 >>>= 14, w4 -= 14, o2 = 0, i2 = Xi;
          case Xi:
            for (; o2 < 4 + (a >>> 10); ) {
              for (; w4 < 3; ) {
                if (p4 !== 0)
                  c2 = 0;
                else
                  return e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
                p4--, E2 |= (f3.read_byte(g4++) & 255) << w4, w4 += 8;
              }
              l2[Ki[o2++]] = E2 & 7, E2 >>>= 3, w4 -= 3;
            }
            for (; o2 < 19; )
              l2[Ki[o2++]] = 0;
            if (s2[0] = 7, _2 = y4.inflate_trees_bits(l2, s2, d5, R3, f3), _2 != 0)
              return c2 = _2, c2 == -3 && (l2 = null, i2 = ze), e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
            o2 = 0, i2 = qi;
          case qi:
            for (; _2 = a, !(o2 >= 258 + (_2 & 31) + (_2 >> 5 & 31)); ) {
              let Z5, G5;
              for (_2 = s2[0]; w4 < _2; ) {
                if (p4 !== 0)
                  c2 = 0;
                else
                  return e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
                p4--, E2 |= (f3.read_byte(g4++) & 255) << w4, w4 += 8;
              }
              if (_2 = R3[(d5[0] + (E2 & pe[_2])) * 3 + 1], G5 = R3[(d5[0] + (E2 & pe[_2])) * 3 + 2], G5 < 16)
                E2 >>>= _2, w4 -= _2, l2[o2++] = G5;
              else {
                for (m3 = G5 == 18 ? 7 : G5 - 14, Z5 = G5 == 18 ? 11 : 3; w4 < _2 + m3; ) {
                  if (p4 !== 0)
                    c2 = 0;
                  else
                    return e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
                  p4--, E2 |= (f3.read_byte(g4++) & 255) << w4, w4 += 8;
                }
                if (E2 >>>= _2, w4 -= _2, Z5 += E2 & pe[m3], E2 >>>= m3, w4 -= m3, m3 = o2, _2 = a, m3 + Z5 > 258 + (_2 & 31) + (_2 >> 5 & 31) || G5 == 16 && m3 < 1)
                  return l2 = null, i2 = ze, f3.msg = "invalid bit length repeat", c2 = -3, e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
                G5 = G5 == 16 ? l2[m3 - 1] : 0;
                do
                  l2[m3++] = G5;
                while (--Z5 !== 0);
                o2 = m3;
              }
            }
            if (d5[0] = -1, F8 = [], v = [], M5 = [], U5 = [], F8[0] = 9, v[0] = 6, _2 = a, _2 = y4.inflate_trees_dynamic(257 + (_2 & 31), 1 + (_2 >> 5 & 31), l2, F8, v, M5, U5, R3, f3), _2 != 0)
              return _2 == -3 && (l2 = null, i2 = ze), c2 = _2, e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
            u2.init(F8[0], v[0], R3, M5[0], R3, U5[0]), i2 = Gt;
          case Gt:
            if (e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, (c2 = u2.proc(e3, f3, c2)) != 1)
              return e3.inflate_flush(f3, c2);
            if (c2 = 0, u2.free(f3), g4 = f3.next_in_index, p4 = f3.avail_in, E2 = e3.bitb, w4 = e3.bitk, x3 = e3.write, A4 = x3 < e3.read ? e3.read - x3 - 1 : e3.end - x3, h2 === 0) {
              i2 = it;
              break;
            }
            i2 = Vt;
          case Vt:
            if (e3.write = x3, c2 = e3.inflate_flush(f3, c2), x3 = e3.write, A4 = x3 < e3.read ? e3.read - x3 - 1 : e3.end - x3, e3.read != e3.write)
              return e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
            i2 = Ji;
          case Ji:
            return c2 = 1, e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
          case ze:
            return c2 = -3, e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
          default:
            return c2 = -2, e3.bitb = E2, e3.bitk = w4, f3.avail_in = p4, f3.total_in += g4 - f3.next_in_index, f3.next_in_index = g4, e3.write = x3, e3.inflate_flush(f3, c2);
        }
      }
    }, e3.free = function(f3) {
      e3.reset(f3, null), e3.win = null, R3 = null;
    }, e3.set_dictionary = function(f3, c2, _2) {
      e3.win.set(f3.subarray(c2, c2 + _2), 0), e3.read = e3.write = _2;
    }, e3.sync_point = function() {
      return i2 == In ? 1 : 0;
    };
  }
  var Wa = 32, Xa = 8, qa = 0, Qi = 1, $i = 2, zi = 3, er = 4, tr = 5, Nn = 6, Et = 7, nr = 12, Ve = 13, Ja = [0, 0, 255, 255];
  function Qa() {
    let t2 = this;
    t2.mode = 0, t2.method = 0, t2.was = [0], t2.need = 0, t2.marker = 0, t2.wbits = 0;
    function n3(e3) {
      return !e3 || !e3.istate ? -2 : (e3.total_in = e3.total_out = 0, e3.msg = null, e3.istate.mode = Et, e3.istate.blocks.reset(e3, null), 0);
    }
    t2.inflateEnd = function(e3) {
      return t2.blocks && t2.blocks.free(e3), t2.blocks = null, 0;
    }, t2.inflateInit = function(e3, i2) {
      return e3.msg = null, t2.blocks = null, i2 < 8 || i2 > 15 ? (t2.inflateEnd(e3), -2) : (t2.wbits = i2, e3.istate.blocks = new ja(e3, 1 << i2), n3(e3), 0);
    }, t2.inflate = function(e3, i2) {
      let r, a;
      if (!e3 || !e3.istate || !e3.next_in)
        return -2;
      let o2 = e3.istate;
      for (i2 = i2 == Ua ? -5 : 0, r = -5; ; )
        switch (o2.mode) {
          case qa:
            if (e3.avail_in === 0)
              return r;
            if (r = i2, e3.avail_in--, e3.total_in++, ((o2.method = e3.read_byte(e3.next_in_index++)) & 15) != Xa) {
              o2.mode = Ve, e3.msg = "unknown compression method", o2.marker = 5;
              break;
            }
            if ((o2.method >> 4) + 8 > o2.wbits) {
              o2.mode = Ve, e3.msg = "invalid win size", o2.marker = 5;
              break;
            }
            o2.mode = Qi;
          case Qi:
            if (e3.avail_in === 0)
              return r;
            if (r = i2, e3.avail_in--, e3.total_in++, a = e3.read_byte(e3.next_in_index++) & 255, ((o2.method << 8) + a) % 31 !== 0) {
              o2.mode = Ve, e3.msg = "incorrect header check", o2.marker = 5;
              break;
            }
            if (!(a & Wa)) {
              o2.mode = Et;
              break;
            }
            o2.mode = $i;
          case $i:
            if (e3.avail_in === 0)
              return r;
            r = i2, e3.avail_in--, e3.total_in++, o2.need = (e3.read_byte(e3.next_in_index++) & 255) << 24 & 4278190080, o2.mode = zi;
          case zi:
            if (e3.avail_in === 0)
              return r;
            r = i2, e3.avail_in--, e3.total_in++, o2.need += (e3.read_byte(e3.next_in_index++) & 255) << 16 & 16711680, o2.mode = er;
          case er:
            if (e3.avail_in === 0)
              return r;
            r = i2, e3.avail_in--, e3.total_in++, o2.need += (e3.read_byte(e3.next_in_index++) & 255) << 8 & 65280, o2.mode = tr;
          case tr:
            return e3.avail_in === 0 ? r : (r = i2, e3.avail_in--, e3.total_in++, o2.need += e3.read_byte(e3.next_in_index++) & 255, o2.mode = Nn, 2);
          case Nn:
            return o2.mode = Ve, e3.msg = "need dictionary", o2.marker = 0, -2;
          case Et:
            if (r = o2.blocks.proc(e3, r), r == -3) {
              o2.mode = Ve, o2.marker = 0;
              break;
            }
            if (r == 0 && (r = i2), r != 1)
              return r;
            r = i2, o2.blocks.reset(e3, o2.was), o2.mode = nr;
          case nr:
            return e3.avail_in = 0, 1;
          case Ve:
            return -3;
          default:
            return -2;
        }
    }, t2.inflateSetDictionary = function(e3, i2, r) {
      let a = 0, o2 = r;
      if (!e3 || !e3.istate || e3.istate.mode != Nn)
        return -2;
      let l2 = e3.istate;
      return o2 >= 1 << l2.wbits && (o2 = (1 << l2.wbits) - 1, a = r - o2), l2.blocks.set_dictionary(i2, a, o2), l2.mode = Et, 0;
    }, t2.inflateSync = function(e3) {
      let i2, r, a, o2, l2;
      if (!e3 || !e3.istate)
        return -2;
      let s2 = e3.istate;
      if (s2.mode != Ve && (s2.mode = Ve, s2.marker = 0), (i2 = e3.avail_in) === 0)
        return -5;
      for (r = e3.next_in_index, a = s2.marker; i2 !== 0 && a < 4; )
        e3.read_byte(r) == Ja[a] ? a++ : e3.read_byte(r) !== 0 ? a = 0 : a = 4 - a, r++, i2--;
      return e3.total_in += r - e3.next_in_index, e3.next_in_index = r, e3.avail_in = i2, s2.marker = a, a != 4 ? -3 : (o2 = e3.total_in, l2 = e3.total_out, n3(e3), e3.total_in = o2, e3.total_out = l2, s2.mode = Et, 0);
    }, t2.inflateSyncPoint = function(e3) {
      return !e3 || !e3.istate || !e3.istate.blocks ? -2 : e3.istate.blocks.sync_point();
    };
  }
  function rr() {
  }
  rr.prototype = { inflateInit(t2) {
    let n3 = this;
    return n3.istate = new Qa(), t2 || (t2 = 15), n3.istate.inflateInit(n3, t2);
  }, inflate(t2) {
    let n3 = this;
    return n3.istate ? n3.istate.inflate(n3, t2) : -2;
  }, inflateEnd() {
    let t2 = this;
    if (!t2.istate)
      return -2;
    let n3 = t2.istate.inflateEnd(t2);
    return t2.istate = null, n3;
  }, inflateSync() {
    let t2 = this;
    return t2.istate ? t2.istate.inflateSync(t2) : -2;
  }, inflateSetDictionary(t2, n3) {
    let e3 = this;
    return e3.istate ? e3.istate.inflateSetDictionary(e3, t2, n3) : -2;
  }, read_byte(t2) {
    return this.next_in[t2];
  }, read_buf(t2, n3) {
    return this.next_in.subarray(t2, t2 + n3);
  } };
  function ar(t2) {
    let n3 = this, e3 = new rr(), i2 = t2 && t2.chunkSize ? Math.floor(t2.chunkSize * 2) : 128 * 1024, r = Pa, a = new Uint8Array(i2), o2 = !1;
    e3.inflateInit(), e3.next_out = a, n3.append = function(l2, s2) {
      let d5 = [], u2, h2, R3 = 0, T7 = 0, y4 = 0;
      if (l2.length !== 0) {
        e3.next_in_index = 0, e3.next_in = l2, e3.avail_in = l2.length;
        do {
          if (e3.next_out_index = 0, e3.avail_out = i2, e3.avail_in === 0 && !o2 && (e3.next_in_index = 0, o2 = !0), u2 = e3.inflate(r), o2 && u2 === -5) {
            if (e3.avail_in !== 0)
              throw new Error("inflating: bad input");
          } else if (u2 !== 0 && u2 !== 1)
            throw new Error("inflating: " + e3.msg);
          if ((o2 || u2 === 1) && e3.avail_in === l2.length)
            throw new Error("inflating: bad input");
          e3.next_out_index && (e3.next_out_index === i2 ? d5.push(new Uint8Array(a)) : d5.push(a.slice(0, e3.next_out_index))), y4 += e3.next_out_index, s2 && e3.next_in_index > 0 && e3.next_in_index != R3 && (s2(e3.next_in_index), R3 = e3.next_in_index);
        } while (e3.avail_in > 0 || e3.avail_out === 0);
        return d5.length > 1 ? (h2 = new Uint8Array(y4), d5.forEach(function(f3) {
          h2.set(f3, T7), T7 += f3.length;
        })) : h2 = d5[0] || new Uint8Array(), h2;
      }
    }, n3.flush = function() {
      e3.inflateEnd();
    };
  }
  var rt = "/", Ln = new Date(2107, 11, 31), Cn = new Date(1980, 0, 1), $ = void 0, at = "undefined", Yt = "function", ht = class {
    constructor(n3) {
      return class extends TransformStream {
        constructor(e3, i2) {
          let r = new n3(i2);
          super({ transform(a, o2) {
            o2.enqueue(r.append(a));
          }, flush(a) {
            let o2 = r.flush();
            o2 && a.enqueue(o2);
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
  function Kt(t2) {
    return Math.max(t2.chunkSize, $a);
  }
  function or(t2) {
    let { baseURL: n3, chunkSize: e3, maxWorkers: i2, terminateWorkerTimeout: r, useCompressionStream: a, useWebWorkers: o2, Deflate: l2, Inflate: s2, CompressionStream: d5, DecompressionStream: u2, workerScripts: h2 } = t2;
    if (Ye("baseURL", n3), Ye("chunkSize", e3), Ye("maxWorkers", i2), Ye("terminateWorkerTimeout", r), Ye("useCompressionStream", a), Ye("useWebWorkers", o2), l2 && (Ke.CompressionStream = new ht(l2)), s2 && (Ke.DecompressionStream = new ht(s2)), Ye("CompressionStream", d5), Ye("DecompressionStream", u2), h2 !== $) {
      let { deflate: R3, inflate: T7 } = h2;
      if ((R3 || T7) && (Ke.workerScripts || (Ke.workerScripts = {})), R3) {
        if (!Array.isArray(R3))
          throw new Error("workerScripts.deflate must be an array");
        Ke.workerScripts.deflate = R3;
      }
      if (T7) {
        if (!Array.isArray(T7))
          throw new Error("workerScripts.inflate must be an array");
        Ke.workerScripts.inflate = T7;
      }
    }
  }
  function Ye(t2, n3) {
    n3 !== $ && (Ke[t2] = n3);
  }
  function es() {
    return "application/octet-stream";
  }
  var cr = [];
  for (let t2 = 0; t2 < 256; t2++) {
    let n3 = t2;
    for (let e3 = 0; e3 < 8; e3++)
      n3 & 1 ? n3 = n3 >>> 1 ^ 3988292384 : n3 = n3 >>> 1;
    cr[t2] = n3;
  }
  var ve = class {
    constructor(n3) {
      this.crc = n3 || -1;
    }
    append(n3) {
      let e3 = this.crc | 0;
      for (let i2 = 0, r = n3.length | 0; i2 < r; i2++)
        e3 = e3 >>> 8 ^ cr[(e3 ^ n3[i2]) & 255];
      this.crc = e3;
    }
    get() {
      return ~this.crc;
    }
  }, Rt = class extends TransformStream {
    constructor() {
      let n3 = new ve();
      super({ transform(e3) {
        n3.append(e3);
      }, flush(e3) {
        let i2 = new Uint8Array(4);
        new DataView(i2.buffer).setUint32(0, n3.get()), e3.enqueue(i2);
      } });
    }
  };
  function wt(t2) {
    if (typeof TextEncoder > "u") {
      t2 = unescape(encodeURIComponent(t2));
      let n3 = new Uint8Array(t2.length);
      for (let e3 = 0; e3 < n3.length; e3++)
        n3[e3] = t2.charCodeAt(e3);
      return n3;
    } else
      return new TextEncoder().encode(t2);
  }
  var he = { concat(t2, n3) {
    if (t2.length === 0 || n3.length === 0)
      return t2.concat(n3);
    let e3 = t2[t2.length - 1], i2 = he.getPartial(e3);
    return i2 === 32 ? t2.concat(n3) : he._shiftRight(n3, i2, e3 | 0, t2.slice(0, t2.length - 1));
  }, bitLength(t2) {
    let n3 = t2.length;
    if (n3 === 0)
      return 0;
    let e3 = t2[n3 - 1];
    return (n3 - 1) * 32 + he.getPartial(e3);
  }, clamp(t2, n3) {
    if (t2.length * 32 < n3)
      return t2;
    t2 = t2.slice(0, Math.ceil(n3 / 32));
    let e3 = t2.length;
    return n3 = n3 & 31, e3 > 0 && n3 && (t2[e3 - 1] = he.partial(n3, t2[e3 - 1] & 2147483648 >> n3 - 1, 1)), t2;
  }, partial(t2, n3, e3) {
    return t2 === 32 ? n3 : (e3 ? n3 | 0 : n3 << 32 - t2) + t2 * 1099511627776;
  }, getPartial(t2) {
    return Math.round(t2 / 1099511627776) || 32;
  }, _shiftRight(t2, n3, e3, i2) {
    for (i2 === void 0 && (i2 = []); n3 >= 32; n3 -= 32)
      i2.push(e3), e3 = 0;
    if (n3 === 0)
      return i2.concat(t2);
    for (let o2 = 0; o2 < t2.length; o2++)
      i2.push(e3 | t2[o2] >>> n3), e3 = t2[o2] << 32 - n3;
    let r = t2.length ? t2[t2.length - 1] : 0, a = he.getPartial(r);
    return i2.push(he.partial(n3 + a & 31, n3 + a > 32 ? e3 : i2.pop(), 1)), i2;
  } }, xt = { bytes: { fromBits(t2) {
    let e3 = he.bitLength(t2) / 8, i2 = new Uint8Array(e3), r;
    for (let a = 0; a < e3; a++)
      a & 3 || (r = t2[a / 4]), i2[a] = r >>> 24, r <<= 8;
    return i2;
  }, toBits(t2) {
    let n3 = [], e3, i2 = 0;
    for (e3 = 0; e3 < t2.length; e3++)
      i2 = i2 << 8 | t2[e3], (e3 & 3) === 3 && (n3.push(i2), i2 = 0);
    return e3 & 3 && n3.push(he.partial(8 * (e3 & 3), i2)), n3;
  } } }, lr = {};
  lr.sha1 = class {
    constructor(t2) {
      let n3 = this;
      n3.blockSize = 512, n3._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], n3._key = [1518500249, 1859775393, 2400959708, 3395469782], t2 ? (n3._h = t2._h.slice(0), n3._buffer = t2._buffer.slice(0), n3._length = t2._length) : n3.reset();
    }
    reset() {
      let t2 = this;
      return t2._h = t2._init.slice(0), t2._buffer = [], t2._length = 0, t2;
    }
    update(t2) {
      let n3 = this;
      typeof t2 == "string" && (t2 = xt.utf8String.toBits(t2));
      let e3 = n3._buffer = he.concat(n3._buffer, t2), i2 = n3._length, r = n3._length = i2 + he.bitLength(t2);
      if (r > 9007199254740991)
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      let a = new Uint32Array(e3), o2 = 0;
      for (let l2 = n3.blockSize + i2 - (n3.blockSize + i2 & n3.blockSize - 1); l2 <= r; l2 += n3.blockSize)
        n3._block(a.subarray(16 * o2, 16 * (o2 + 1))), o2 += 1;
      return e3.splice(0, 16 * o2), n3;
    }
    finalize() {
      let t2 = this, n3 = t2._buffer, e3 = t2._h;
      n3 = he.concat(n3, [he.partial(1, 1)]);
      for (let i2 = n3.length + 2; i2 & 15; i2++)
        n3.push(0);
      for (n3.push(Math.floor(t2._length / 4294967296)), n3.push(t2._length | 0); n3.length; )
        t2._block(n3.splice(0, 16));
      return t2.reset(), e3;
    }
    _f(t2, n3, e3, i2) {
      if (t2 <= 19)
        return n3 & e3 | ~n3 & i2;
      if (t2 <= 39)
        return n3 ^ e3 ^ i2;
      if (t2 <= 59)
        return n3 & e3 | n3 & i2 | e3 & i2;
      if (t2 <= 79)
        return n3 ^ e3 ^ i2;
    }
    _S(t2, n3) {
      return n3 << t2 | n3 >>> 32 - t2;
    }
    _block(t2) {
      let n3 = this, e3 = n3._h, i2 = Array(80);
      for (let d5 = 0; d5 < 16; d5++)
        i2[d5] = t2[d5];
      let r = e3[0], a = e3[1], o2 = e3[2], l2 = e3[3], s2 = e3[4];
      for (let d5 = 0; d5 <= 79; d5++) {
        d5 >= 16 && (i2[d5] = n3._S(1, i2[d5 - 3] ^ i2[d5 - 8] ^ i2[d5 - 14] ^ i2[d5 - 16]));
        let u2 = n3._S(5, r) + n3._f(d5, a, o2, l2) + s2 + i2[d5] + n3._key[Math.floor(d5 / 20)] | 0;
        s2 = l2, l2 = o2, o2 = n3._S(30, a), a = r, r = u2;
      }
      e3[0] = e3[0] + r | 0, e3[1] = e3[1] + a | 0, e3[2] = e3[2] + o2 | 0, e3[3] = e3[3] + l2 | 0, e3[4] = e3[4] + s2 | 0;
    }
  };
  var Mn = {};
  Mn.aes = class {
    constructor(t2) {
      let n3 = this;
      n3._tables = [[[], [], [], [], []], [[], [], [], [], []]], n3._tables[0][0][0] || n3._precompute();
      let e3 = n3._tables[0][4], i2 = n3._tables[1], r = t2.length, a, o2, l2, s2 = 1;
      if (r !== 4 && r !== 6 && r !== 8)
        throw new Error("invalid aes key size");
      for (n3._key = [o2 = t2.slice(0), l2 = []], a = r; a < 4 * r + 28; a++) {
        let d5 = o2[a - 1];
        (a % r === 0 || r === 8 && a % r === 4) && (d5 = e3[d5 >>> 24] << 24 ^ e3[d5 >> 16 & 255] << 16 ^ e3[d5 >> 8 & 255] << 8 ^ e3[d5 & 255], a % r === 0 && (d5 = d5 << 8 ^ d5 >>> 24 ^ s2 << 24, s2 = s2 << 1 ^ (s2 >> 7) * 283)), o2[a] = o2[a - r] ^ d5;
      }
      for (let d5 = 0; a; d5++, a--) {
        let u2 = o2[d5 & 3 ? a : a - 4];
        a <= 4 || d5 < 4 ? l2[d5] = u2 : l2[d5] = i2[0][e3[u2 >>> 24]] ^ i2[1][e3[u2 >> 16 & 255]] ^ i2[2][e3[u2 >> 8 & 255]] ^ i2[3][e3[u2 & 255]];
      }
    }
    encrypt(t2) {
      return this._crypt(t2, 0);
    }
    decrypt(t2) {
      return this._crypt(t2, 1);
    }
    _precompute() {
      let t2 = this._tables[0], n3 = this._tables[1], e3 = t2[4], i2 = n3[4], r = [], a = [], o2, l2, s2, d5;
      for (let u2 = 0; u2 < 256; u2++)
        a[(r[u2] = u2 << 1 ^ (u2 >> 7) * 283) ^ u2] = u2;
      for (let u2 = o2 = 0; !e3[u2]; u2 ^= l2 || 1, o2 = a[o2] || 1) {
        let h2 = o2 ^ o2 << 1 ^ o2 << 2 ^ o2 << 3 ^ o2 << 4;
        h2 = h2 >> 8 ^ h2 & 255 ^ 99, e3[u2] = h2, i2[h2] = u2, d5 = r[s2 = r[l2 = r[u2]]];
        let R3 = d5 * 16843009 ^ s2 * 65537 ^ l2 * 257 ^ u2 * 16843008, T7 = r[h2] * 257 ^ h2 * 16843008;
        for (let y4 = 0; y4 < 4; y4++)
          t2[y4][u2] = T7 = T7 << 24 ^ T7 >>> 8, n3[y4][h2] = R3 = R3 << 24 ^ R3 >>> 8;
      }
      for (let u2 = 0; u2 < 5; u2++)
        t2[u2] = t2[u2].slice(0), n3[u2] = n3[u2].slice(0);
    }
    _crypt(t2, n3) {
      if (t2.length !== 4)
        throw new Error("invalid aes block size");
      let e3 = this._key[n3], i2 = e3.length / 4 - 2, r = [0, 0, 0, 0], a = this._tables[n3], o2 = a[0], l2 = a[1], s2 = a[2], d5 = a[3], u2 = a[4], h2 = t2[0] ^ e3[0], R3 = t2[n3 ? 3 : 1] ^ e3[1], T7 = t2[2] ^ e3[2], y4 = t2[n3 ? 1 : 3] ^ e3[3], f3 = 4, c2, _2, E2;
      for (let w4 = 0; w4 < i2; w4++)
        c2 = o2[h2 >>> 24] ^ l2[R3 >> 16 & 255] ^ s2[T7 >> 8 & 255] ^ d5[y4 & 255] ^ e3[f3], _2 = o2[R3 >>> 24] ^ l2[T7 >> 16 & 255] ^ s2[y4 >> 8 & 255] ^ d5[h2 & 255] ^ e3[f3 + 1], E2 = o2[T7 >>> 24] ^ l2[y4 >> 16 & 255] ^ s2[h2 >> 8 & 255] ^ d5[R3 & 255] ^ e3[f3 + 2], y4 = o2[y4 >>> 24] ^ l2[h2 >> 16 & 255] ^ s2[R3 >> 8 & 255] ^ d5[T7 & 255] ^ e3[f3 + 3], f3 += 4, h2 = c2, R3 = _2, T7 = E2;
      for (let w4 = 0; w4 < 4; w4++)
        r[n3 ? 3 & -w4 : w4] = u2[h2 >>> 24] << 24 ^ u2[R3 >> 16 & 255] << 16 ^ u2[T7 >> 8 & 255] << 8 ^ u2[y4 & 255] ^ e3[f3++], c2 = h2, h2 = R3, R3 = T7, T7 = y4, y4 = c2;
      return r;
    }
  };
  var _r = { getRandomValues(t2) {
    let n3 = new Uint32Array(t2.buffer), e3 = (i2) => {
      let r = 987654321, a = 4294967295;
      return function() {
        return r = 36969 * (r & 65535) + (r >> 16) & a, i2 = 18e3 * (i2 & 65535) + (i2 >> 16) & a, (((r << 16) + i2 & a) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let i2 = 0, r; i2 < t2.length; i2 += 4) {
      let a = e3((r || Math.random()) * 4294967296);
      r = a() * 987654071, n3[i2 / 4] = a() * 4294967296 | 0;
    }
    return t2;
  } }, Pn = {};
  Pn.ctrGladman = class {
    constructor(t2, n3) {
      this._prf = t2, this._initIv = n3, this._iv = n3;
    }
    reset() {
      this._iv = this._initIv;
    }
    update(t2) {
      return this.calculate(this._prf, t2, this._iv);
    }
    incWord(t2) {
      if ((t2 >> 24 & 255) === 255) {
        let n3 = t2 >> 16 & 255, e3 = t2 >> 8 & 255, i2 = t2 & 255;
        n3 === 255 ? (n3 = 0, e3 === 255 ? (e3 = 0, i2 === 255 ? i2 = 0 : ++i2) : ++e3) : ++n3, t2 = 0, t2 += n3 << 16, t2 += e3 << 8, t2 += i2;
      } else
        t2 += 1 << 24;
      return t2;
    }
    incCounter(t2) {
      (t2[0] = this.incWord(t2[0])) === 0 && (t2[1] = this.incWord(t2[1]));
    }
    calculate(t2, n3, e3) {
      let i2;
      if (!(i2 = n3.length))
        return [];
      let r = he.bitLength(n3);
      for (let a = 0; a < i2; a += 4) {
        this.incCounter(e3);
        let o2 = t2.encrypt(e3);
        n3[a] ^= o2[0], n3[a + 1] ^= o2[1], n3[a + 2] ^= o2[2], n3[a + 3] ^= o2[3];
      }
      return he.clamp(n3, r);
    }
  };
  var je = { importKey(t2) {
    return new je.hmacSha1(xt.bytes.toBits(t2));
  }, pbkdf2(t2, n3, e3, i2) {
    if (e3 = e3 || 1e4, i2 < 0 || e3 < 0)
      throw new Error("invalid params to pbkdf2");
    let r = (i2 >> 5) + 1 << 2, a, o2, l2, s2, d5, u2 = new ArrayBuffer(r), h2 = new DataView(u2), R3 = 0, T7 = he;
    for (n3 = xt.bytes.toBits(n3), d5 = 1; R3 < (r || 1); d5++) {
      for (a = o2 = t2.encrypt(T7.concat(n3, [d5])), l2 = 1; l2 < e3; l2++)
        for (o2 = t2.encrypt(o2), s2 = 0; s2 < o2.length; s2++)
          a[s2] ^= o2[s2];
      for (l2 = 0; R3 < (r || 1) && l2 < a.length; l2++)
        h2.setInt32(R3, a[l2]), R3 += 4;
    }
    return u2.slice(0, i2 / 8);
  } };
  je.hmacSha1 = class {
    constructor(t2) {
      let n3 = this, e3 = n3._hash = lr.sha1, i2 = [[], []];
      n3._baseHash = [new e3(), new e3()];
      let r = n3._baseHash[0].blockSize / 32;
      t2.length > r && (t2 = new e3().update(t2).finalize());
      for (let a = 0; a < r; a++)
        i2[0][a] = t2[a] ^ 909522486, i2[1][a] = t2[a] ^ 1549556828;
      n3._baseHash[0].update(i2[0]), n3._baseHash[1].update(i2[1]), n3._resultHash = new e3(n3._baseHash[0]);
    }
    reset() {
      let t2 = this;
      t2._resultHash = new t2._hash(t2._baseHash[0]), t2._updated = !1;
    }
    update(t2) {
      let n3 = this;
      n3._updated = !0, n3._resultHash.update(t2);
    }
    digest() {
      let t2 = this, n3 = t2._resultHash.finalize(), e3 = new t2._hash(t2._baseHash[1]).update(n3).finalize();
      return t2.reset(), e3;
    }
    encrypt(t2) {
      if (this._updated)
        throw new Error("encrypt on already updated hmac called!");
      return this.update(t2), this.digest(t2);
    }
  };
  var ts = typeof crypto < "u" && typeof crypto.getRandomValues == "function", We = "Invalid password", et = "Invalid signature";
  function jt(t2) {
    return ts ? crypto.getRandomValues(t2) : _r.getRandomValues(t2);
  }
  var ot = 16, ns = "raw", dr = { name: "PBKDF2" }, is = { name: "HMAC" }, rs = "SHA-1", as = Object.assign({ hash: is }, dr), Un = Object.assign({ iterations: 1e3, hash: { name: rs } }, dr), ss = ["deriveBits"], Tt = [8, 12, 16], At = [16, 24, 32], Xe = 10, os = [0, 0, 0, 0], Er = "undefined", hr = "function", qt = typeof crypto != Er, mt = qt && crypto.subtle, Rr = qt && typeof mt != Er, Me = xt.bytes, cs = Mn.aes, ls = Pn.ctrGladman, _s = je.hmacSha1, fr = qt && Rr && typeof mt.importKey == hr, ur = qt && Rr && typeof mt.deriveBits == hr, Wt = class extends TransformStream {
    constructor({ password: n3, signed: e3, encryptionStrength: i2 }) {
      super({ start() {
        Object.assign(this, { ready: new Promise((r) => this.resolveReady = r), password: n3, signed: e3, strength: i2 - 1, pending: new Uint8Array() });
      }, async transform(r, a) {
        let o2 = this, { password: l2, strength: s2, resolveReady: d5, ready: u2 } = o2;
        l2 ? (await fs(o2, s2, l2, Oe(r, 0, Tt[s2] + 2)), r = Oe(r, Tt[s2] + 2), d5()) : await u2;
        let h2 = new Uint8Array(r.length - Xe - (r.length - Xe) % ot);
        a.enqueue(wr(o2, r, h2, 0, Xe, !0));
      }, async flush(r) {
        let { signed: a, ctr: o2, hmac: l2, pending: s2, ready: d5 } = this;
        await d5;
        let u2 = Oe(s2, 0, s2.length - Xe), h2 = Oe(s2, s2.length - Xe), R3 = new Uint8Array();
        if (u2.length) {
          let T7 = pt(Me, u2);
          l2.update(T7);
          let y4 = o2.update(T7);
          R3 = bt(Me, y4);
        }
        if (a) {
          let T7 = Oe(bt(Me, l2.digest()), 0, Xe);
          for (let y4 = 0; y4 < Xe; y4++)
            if (T7[y4] != h2[y4])
              throw new Error(et);
        }
        r.enqueue(R3);
      } });
    }
  }, Xt = class extends TransformStream {
    constructor({ password: n3, encryptionStrength: e3 }) {
      let i2;
      super({ start() {
        Object.assign(this, { ready: new Promise((r) => this.resolveReady = r), password: n3, strength: e3 - 1, pending: new Uint8Array() });
      }, async transform(r, a) {
        let o2 = this, { password: l2, strength: s2, resolveReady: d5, ready: u2 } = o2, h2 = new Uint8Array();
        l2 ? (h2 = await us(o2, s2, l2), d5()) : await u2;
        let R3 = new Uint8Array(h2.length + r.length - r.length % ot);
        R3.set(h2, 0), a.enqueue(wr(o2, r, R3, h2.length, 0));
      }, async flush(r) {
        let { ctr: a, hmac: o2, pending: l2, ready: s2 } = this;
        await s2;
        let d5 = new Uint8Array();
        if (l2.length) {
          let u2 = a.update(pt(Me, l2));
          o2.update(u2), d5 = bt(Me, u2);
        }
        i2.signature = bt(Me, o2.digest()).slice(0, Xe), r.enqueue(Zn(d5, i2.signature));
      } }), i2 = this;
    }
  };
  function wr(t2, n3, e3, i2, r, a) {
    let { ctr: o2, hmac: l2, pending: s2 } = t2, d5 = n3.length - r;
    s2.length && (n3 = Zn(s2, n3), e3 = hs(e3, d5 - d5 % ot));
    let u2;
    for (u2 = 0; u2 <= d5 - ot; u2 += ot) {
      let h2 = pt(Me, Oe(n3, u2, u2 + ot));
      a && l2.update(h2);
      let R3 = o2.update(h2);
      a || l2.update(R3), e3.set(bt(Me, R3), u2 + i2);
    }
    return t2.pending = Oe(n3, u2), e3;
  }
  async function fs(t2, n3, e3, i2) {
    let r = await xr(t2, n3, e3, Oe(i2, 0, Tt[n3])), a = Oe(i2, Tt[n3]);
    if (r[0] != a[0] || r[1] != a[1])
      throw new Error(We);
  }
  async function us(t2, n3, e3) {
    let i2 = jt(new Uint8Array(Tt[n3])), r = await xr(t2, n3, e3, i2);
    return Zn(i2, r);
  }
  async function xr(t2, n3, e3, i2) {
    t2.password = null;
    let r = wt(e3), a = await ds(ns, r, as, !1, ss), o2 = await Es(Object.assign({ salt: i2 }, Un), a, 8 * (At[n3] * 2 + 2)), l2 = new Uint8Array(o2), s2 = pt(Me, Oe(l2, 0, At[n3])), d5 = pt(Me, Oe(l2, At[n3], At[n3] * 2)), u2 = Oe(l2, At[n3] * 2);
    return Object.assign(t2, { keys: { key: s2, authentication: d5, passwordVerification: u2 }, ctr: new ls(new cs(s2), Array.from(os)), hmac: new _s(d5) }), u2;
  }
  async function ds(t2, n3, e3, i2, r) {
    if (fr)
      try {
        return await mt.importKey(t2, n3, e3, i2, r);
      } catch {
        return fr = !1, je.importKey(n3);
      }
    else
      return je.importKey(n3);
  }
  async function Es(t2, n3, e3) {
    if (ur)
      try {
        return await mt.deriveBits(t2, n3, e3);
      } catch {
        return ur = !1, je.pbkdf2(n3, t2.salt, Un.iterations, e3);
      }
    else
      return je.pbkdf2(n3, t2.salt, Un.iterations, e3);
  }
  function Zn(t2, n3) {
    let e3 = t2;
    return t2.length + n3.length && (e3 = new Uint8Array(t2.length + n3.length), e3.set(t2, 0), e3.set(n3, t2.length)), e3;
  }
  function hs(t2, n3) {
    if (n3 && n3 > t2.length) {
      let e3 = t2;
      t2 = new Uint8Array(n3), t2.set(e3, 0);
    }
    return t2;
  }
  function Oe(t2, n3, e3) {
    return t2.subarray(n3, e3);
  }
  function bt(t2, n3) {
    return t2.fromBits(n3);
  }
  function pt(t2, n3) {
    return t2.toBits(n3);
  }
  var ct = 12, Jt = class extends TransformStream {
    constructor({ password: n3, passwordVerification: e3 }) {
      super({ start() {
        Object.assign(this, { password: n3, passwordVerification: e3 }), pr(this, n3);
      }, transform(i2, r) {
        let a = this;
        if (a.password) {
          let o2 = Ar(a, i2.subarray(0, ct));
          if (a.password = null, o2[ct - 1] != a.passwordVerification)
            throw new Error(We);
          i2 = i2.subarray(ct);
        }
        r.enqueue(Ar(a, i2));
      } });
    }
  }, Qt = class extends TransformStream {
    constructor({ password: n3, passwordVerification: e3 }) {
      super({ start() {
        Object.assign(this, { password: n3, passwordVerification: e3 }), pr(this, n3);
      }, transform(i2, r) {
        let a = this, o2, l2;
        if (a.password) {
          a.password = null;
          let s2 = jt(new Uint8Array(ct));
          s2[ct - 1] = a.passwordVerification, o2 = new Uint8Array(i2.length + s2.length), o2.set(Tr(a, s2), 0), l2 = ct;
        } else
          o2 = new Uint8Array(i2.length), l2 = 0;
        o2.set(Tr(a, i2), l2), r.enqueue(o2);
      } });
    }
  };
  function Ar(t2, n3) {
    let e3 = new Uint8Array(n3.length);
    for (let i2 = 0; i2 < n3.length; i2++)
      e3[i2] = mr(t2) ^ n3[i2], kn(t2, e3[i2]);
    return e3;
  }
  function Tr(t2, n3) {
    let e3 = new Uint8Array(n3.length);
    for (let i2 = 0; i2 < n3.length; i2++)
      e3[i2] = mr(t2) ^ n3[i2], kn(t2, n3[i2]);
    return e3;
  }
  function pr(t2, n3) {
    let e3 = [305419896, 591751049, 878082192];
    Object.assign(t2, { keys: e3, crcKey0: new ve(e3[0]), crcKey2: new ve(e3[2]) });
    for (let i2 = 0; i2 < n3.length; i2++)
      kn(t2, n3.charCodeAt(i2));
  }
  function kn(t2, n3) {
    let [e3, i2, r] = t2.keys;
    t2.crcKey0.append([n3]), e3 = ~t2.crcKey0.get(), i2 = br(Math.imul(br(i2 + Sr(e3)), 134775813) + 1), t2.crcKey2.append([i2 >>> 24]), r = ~t2.crcKey2.get(), t2.keys = [e3, i2, r];
  }
  function mr(t2) {
    let n3 = t2.keys[2] | 2;
    return Sr(Math.imul(n3, n3 ^ 1) >>> 8);
  }
  function Sr(t2) {
    return t2 & 255;
  }
  function br(t2) {
    return t2 & 4294967295;
  }
  var gr = "deflate-raw", $t = class extends TransformStream {
    constructor(n3, { chunkSize: e3, CompressionStream: i2, CompressionStreamNative: r }) {
      super({});
      let { compressed: a, encrypted: o2, useCompressionStream: l2, zipCrypto: s2, signed: d5, level: u2 } = n3, h2 = this, R3, T7, y4 = Or(super.readable);
      (!o2 || s2) && d5 && ([y4, R3] = y4.tee(), R3 = Pe(R3, new Rt())), a && (y4 = yr(y4, l2, { level: u2, chunkSize: e3 }, r, i2)), o2 && (s2 ? y4 = Pe(y4, new Qt(n3)) : (T7 = new Xt(n3), y4 = Pe(y4, T7))), Dr(h2, y4, async () => {
        let f3;
        o2 && !s2 && (f3 = T7.signature), (!o2 || s2) && d5 && (f3 = await R3.getReader().read(), f3 = new DataView(f3.value.buffer).getUint32(0)), h2.signature = f3;
      });
    }
  }, zt = class extends TransformStream {
    constructor(n3, { chunkSize: e3, DecompressionStream: i2, DecompressionStreamNative: r }) {
      super({});
      let { zipCrypto: a, encrypted: o2, signed: l2, signature: s2, compressed: d5, useCompressionStream: u2 } = n3, h2, R3, T7 = Or(super.readable);
      o2 && (a ? T7 = Pe(T7, new Jt(n3)) : (R3 = new Wt(n3), T7 = Pe(T7, R3))), d5 && (T7 = yr(T7, u2, { chunkSize: e3 }, r, i2)), (!o2 || a) && l2 && ([T7, h2] = T7.tee(), h2 = Pe(h2, new Rt())), Dr(this, T7, async () => {
        if ((!o2 || a) && l2) {
          let y4 = await h2.getReader().read(), f3 = new DataView(y4.value.buffer);
          if (s2 != f3.getUint32(0, !1))
            throw new Error(et);
        }
      });
    }
  };
  function Or(t2) {
    return Pe(t2, new TransformStream({ transform(n3, e3) {
      n3 && n3.length && e3.enqueue(n3);
    } }));
  }
  function Dr(t2, n3, e3) {
    n3 = Pe(n3, new TransformStream({ flush: e3 })), Object.defineProperty(t2, "readable", { get() {
      return n3;
    } });
  }
  function yr(t2, n3, e3, i2, r) {
    try {
      let a = n3 && i2 ? i2 : r;
      t2 = Pe(t2, new a(gr, e3));
    } catch (a) {
      if (n3)
        t2 = Pe(t2, new r(gr, e3));
      else
        throw a;
    }
    return t2;
  }
  function Pe(t2, n3) {
    return t2.pipeThrough(n3);
  }
  var Ir = "message", Nr = "start", Fr = "pull", vn = "data", Lr = "ack", Cr = "close", tn = "deflate", nn = "inflate", en = class extends TransformStream {
    constructor(n3, e3) {
      super({});
      let i2 = this, { codecType: r } = n3, a;
      r.startsWith(tn) ? a = $t : r.startsWith(nn) && (a = zt);
      let o2 = 0, l2 = new a(n3, e3), s2 = super.readable, d5 = new TransformStream({ transform(u2, h2) {
        u2 && u2.length && (o2 += u2.length, h2.enqueue(u2));
      }, flush() {
        let { signature: u2 } = l2;
        Object.assign(i2, { signature: u2, size: o2 });
      } });
      Object.defineProperty(i2, "readable", { get() {
        return s2.pipeThrough(l2).pipeThrough(d5);
      } });
    }
  }, Rs = typeof Worker != at, lt = class {
    constructor(n3, { readable: e3, writable: i2 }, { options: r, config: a, streamOptions: o2, useWebWorkers: l2, transferStreams: s2, scripts: d5 }, u2) {
      let { signal: h2 } = o2;
      return Object.assign(n3, { busy: !0, readable: e3.pipeThrough(new Hn(e3, o2, a), { signal: h2 }), writable: i2, options: Object.assign({}, r), scripts: d5, transferStreams: s2, terminate() {
        let { worker: R3, busy: T7 } = n3;
        R3 && !T7 && (R3.terminate(), n3.interface = null);
      }, onTaskFinished() {
        n3.busy = !1, u2(n3);
      } }), (l2 && Rs ? xs : ws)(n3, a);
    }
  }, Hn = class extends TransformStream {
    constructor(n3, { onstart: e3, onprogress: i2, size: r, onend: a }, { chunkSize: o2 }) {
      let l2 = 0;
      super({ start() {
        e3 && Bn(e3, r);
      }, async transform(s2, d5) {
        l2 += s2.length, i2 && await Bn(i2, l2, r), d5.enqueue(s2);
      }, flush() {
        n3.size = l2, a && Bn(a, l2);
      } }, { highWaterMark: 1, size: () => o2 });
    }
  };
  async function Bn(t2, ...n3) {
    try {
      await t2(...n3);
    } catch {
    }
  }
  function ws(t2, n3) {
    return { run: () => As(t2, n3) };
  }
  function xs(t2, { baseURL: n3, chunkSize: e3 }) {
    return t2.interface || Object.assign(t2, { worker: ps(t2.scripts[0], n3, t2), interface: { run: () => Ts(t2, { chunkSize: e3 }) } }), t2.interface;
  }
  async function As({ options: t2, readable: n3, writable: e3, onTaskFinished: i2 }, r) {
    let a = new en(t2, r);
    try {
      await n3.pipeThrough(a).pipeTo(e3, { preventClose: !0, preventAbort: !0 });
      let { signature: o2, size: l2 } = a;
      return { signature: o2, size: l2 };
    } finally {
      i2();
    }
  }
  async function Ts(t2, n3) {
    let e3, i2, r = new Promise((R3, T7) => {
      e3 = R3, i2 = T7;
    });
    Object.assign(t2, { reader: null, writer: null, resolveResult: e3, rejectResult: i2, result: r });
    let { readable: a, options: o2, scripts: l2 } = t2, { writable: s2, closed: d5 } = bs(t2.writable);
    Gn({ type: Nr, scripts: l2.slice(1), options: o2, config: n3, readable: a, writable: s2 }, t2) || Object.assign(t2, { reader: a.getReader(), writer: s2.getWriter() });
    let h2 = await r;
    try {
      await s2.close();
    } catch {
    }
    return await d5, h2;
  }
  function bs(t2) {
    let n3 = t2.getWriter(), e3, i2 = new Promise((a) => e3 = a);
    return { writable: new WritableStream({ async write(a) {
      await n3.ready, await n3.write(a);
    }, close() {
      n3.releaseLock(), e3();
    }, abort(a) {
      return n3.abort(a);
    } }), closed: i2 };
  }
  var Mr = !0, Pr = !0;
  function ps(t2, n3, e3) {
    let i2 = { type: "module" }, r, a;
    typeof t2 == Yt && (t2 = t2());
    try {
      r = new URL(t2, n3);
    } catch {
      r = t2;
    }
    if (Mr)
      try {
        a = new Worker(r);
      } catch {
        Mr = !1, a = new Worker(r, i2);
      }
    else
      a = new Worker(r, i2);
    return a.addEventListener(Ir, (o2) => ms(o2, e3)), a;
  }
  function Gn(t2, { worker: n3, writer: e3, onTaskFinished: i2, transferStreams: r }) {
    try {
      let { value: a, readable: o2, writable: l2 } = t2, s2 = [];
      if (a) {
        let { buffer: d5, length: u2 } = a;
        u2 != d5.byteLength && (a = new Uint8Array(a)), t2.value = a.buffer, s2.push(t2.value);
      }
      if (r && Pr ? (o2 && s2.push(o2), l2 && s2.push(l2)) : t2.readable = t2.writable = null, s2.length)
        try {
          return n3.postMessage(t2, s2), !0;
        } catch {
          Pr = !1, t2.readable = t2.writable = null, n3.postMessage(t2);
        }
      else
        n3.postMessage(t2);
    } catch (a) {
      throw e3 && e3.releaseLock(), i2(), a;
    }
  }
  async function ms({ data: t2 }, n3) {
    let { type: e3, value: i2, messageId: r, result: a, error: o2 } = t2, { reader: l2, writer: s2, resolveResult: d5, rejectResult: u2, onTaskFinished: h2 } = n3;
    try {
      if (o2) {
        let { message: T7, stack: y4, code: f3, name: c2 } = o2, _2 = new Error(T7);
        Object.assign(_2, { stack: y4, code: f3, name: c2 }), R3(_2);
      } else {
        if (e3 == Fr) {
          let { value: T7, done: y4 } = await l2.read();
          Gn({ type: vn, value: T7, done: y4, messageId: r }, n3);
        }
        e3 == vn && (await s2.ready, await s2.write(new Uint8Array(i2)), Gn({ type: Lr, messageId: r }, n3)), e3 == Cr && R3(null, a);
      }
    } catch (T7) {
      R3(T7);
    }
    function R3(T7, y4) {
      T7 ? u2(T7) : d5(y4), s2 && s2.releaseLock(), h2();
    }
  }
  var qe = [], Vn = [], Ur = 0;
  async function rn(t2, n3) {
    let { options: e3, config: i2 } = n3, { transferStreams: r, useWebWorkers: a, useCompressionStream: o2, codecType: l2, compressed: s2, signed: d5, encrypted: u2 } = e3, { workerScripts: h2, maxWorkers: R3, terminateWorkerTimeout: T7 } = i2;
    n3.transferStreams = r || r === $;
    let y4 = !s2 && !d5 && !u2 && !n3.transferStreams;
    n3.useWebWorkers = !y4 && (a || a === $ && i2.useWebWorkers), n3.scripts = n3.useWebWorkers && h2 ? h2[l2] : [], e3.useCompressionStream = o2 || o2 === $ && i2.useCompressionStream;
    let f3, c2 = qe.find((E2) => !E2.busy);
    if (c2)
      Yn(c2), f3 = new lt(c2, t2, n3, _2);
    else if (qe.length < R3) {
      let E2 = { indexWorker: Ur };
      Ur++, qe.push(E2), f3 = new lt(E2, t2, n3, _2);
    } else
      f3 = await new Promise((E2) => Vn.push({ resolve: E2, stream: t2, workerOptions: n3 }));
    return f3.run();
    function _2(E2) {
      if (Vn.length) {
        let [{ resolve: w4, stream: g4, workerOptions: p4 }] = Vn.splice(0, 1);
        w4(new lt(E2, g4, p4, _2));
      } else
        E2.worker ? (Yn(E2), Number.isFinite(T7) && T7 >= 0 && (E2.terminateTimeout = setTimeout(() => {
          qe = qe.filter((w4) => w4 != E2), E2.terminate();
        }, T7))) : qe = qe.filter((w4) => w4 != E2);
    }
  }
  function Yn(t2) {
    let { terminateTimeout: n3 } = t2;
    n3 && (clearTimeout(n3), t2.terminateTimeout = null);
  }
  function Ss() {
    qe.forEach((t2) => {
      Yn(t2), t2.terminate();
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
      let n3 = this, { chunkSize: e3 = Cs } = n3, i2 = new ReadableStream({ start() {
        this.chunkOffset = 0;
      }, async pull(r) {
        let { offset: a = 0, size: o2, diskNumberStart: l2 } = i2, { chunkOffset: s2 } = this;
        r.enqueue(await ue(n3, a + s2, Math.min(e3, o2 - s2), l2)), s2 + e3 > o2 ? r.close() : this.chunkOffset += e3;
      } });
      return i2;
    }
  }, an = class extends _t {
    constructor() {
      super();
      let n3 = this, e3 = new WritableStream({ write(i2) {
        return n3.writeUint8Array(i2);
      } });
      Object.defineProperty(n3, Qn, { get() {
        return e3;
      } });
    }
    writeUint8Array() {
    }
  }, Zr = class extends Be {
    constructor(n3) {
      super();
      let e3 = n3.length;
      for (; n3.charAt(e3 - 1) == "="; )
        e3--;
      let i2 = n3.indexOf(",") + 1;
      Object.assign(this, { dataURI: n3, dataStart: i2, size: Math.floor((e3 - i2) * 0.75) });
    }
    readUint8Array(n3, e3) {
      let { dataStart: i2, dataURI: r } = this, a = new Uint8Array(e3), o2 = Math.floor(n3 / 3) * 4, l2 = atob(r.substring(o2 + i2, Math.ceil((n3 + e3) / 3) * 4 + i2)), s2 = n3 - Math.floor(o2 / 4) * 3;
      for (let d5 = s2; d5 < s2 + e3; d5++)
        a[d5 - s2] = l2.charCodeAt(d5);
      return a;
    }
  }, kr = class extends an {
    constructor(n3) {
      super(), Object.assign(this, { data: "data:" + (n3 || "") + ";base64,", pending: [] });
    }
    writeUint8Array(n3) {
      let e3 = this, i2 = 0, r = e3.pending, a = e3.pending.length;
      for (e3.pending = "", i2 = 0; i2 < Math.floor((a + n3.length) / 3) * 3 - a; i2++)
        r += String.fromCharCode(n3[i2]);
      for (; i2 < n3.length; i2++)
        e3.pending += String.fromCharCode(n3[i2]);
      r.length > 2 ? e3.data += btoa(r) : e3.pending = r;
    }
    getData() {
      return this.data + btoa(this.pending);
    }
  }, St = class extends Be {
    constructor(n3) {
      super(), Object.assign(this, { blob: n3, size: n3.size });
    }
    async readUint8Array(n3, e3) {
      let i2 = this, r = n3 + e3, a = n3 || r < i2.size ? i2.blob.slice(n3, r) : i2.blob;
      return new Uint8Array(await a.arrayBuffer());
    }
  }, gt = class extends _t {
    constructor(n3) {
      super();
      let e3 = this, i2 = new TransformStream(), r = [];
      n3 && r.push([Fs, n3]), Object.defineProperty(e3, Qn, { get() {
        return i2.writable;
      } }), e3.blob = new Response(i2.readable, { headers: r }).blob();
    }
    getData() {
      return this.blob;
    }
  }, vr = class extends St {
    constructor(n3) {
      super(new Blob([n3], { type: Os }));
    }
  }, Br = class extends gt {
    constructor(n3) {
      super(n3), Object.assign(this, { encoding: n3, utf8: !n3 || n3.toLowerCase() == "utf-8" });
    }
    async getData() {
      let { encoding: n3, utf8: e3 } = this, i2 = await super.getData();
      if (i2.text && e3)
        return i2.text();
      {
        let r = new FileReader();
        return new Promise((a, o2) => {
          Object.assign(r, { onload: ({ target: l2 }) => a(l2.result), onerror: () => o2(r.error) }), r.readAsText(i2, n3);
        });
      }
    }
  }, Kn = class extends Be {
    constructor(n3, e3) {
      super(), qr(this, n3, e3);
    }
    async init() {
      await Jr(this, Wn, Hr), super.init();
    }
    readUint8Array(n3, e3) {
      return Qr(this, n3, e3, Wn, Hr);
    }
  }, jn = class extends Be {
    constructor(n3, e3) {
      super(), qr(this, n3, e3);
    }
    async init() {
      await Jr(this, Xn, Gr), super.init();
    }
    readUint8Array(n3, e3) {
      return Qr(this, n3, e3, Xn, Gr);
    }
  };
  function qr(t2, n3, e3) {
    let { preventHeadRequest: i2, useRangeHeader: r, forceRangeRequests: a } = e3;
    e3 = Object.assign({}, e3), delete e3.preventHeadRequest, delete e3.useRangeHeader, delete e3.forceRangeRequests, delete e3.useXHR, Object.assign(t2, { url: n3, options: e3, preventHeadRequest: i2, useRangeHeader: r, forceRangeRequests: a });
  }
  async function Jr(t2, n3, e3) {
    let { url: i2, useRangeHeader: r, forceRangeRequests: a } = t2;
    if (Ms(i2) && (r || a)) {
      let { headers: o2 } = await n3(Jn, t2, $r(t2));
      if (!a && o2.get(Is) != Xr)
        throw new Error(on);
      {
        let l2, s2 = o2.get(ys);
        if (s2) {
          let d5 = s2.trim().split(/\s*\/\s*/);
          if (d5.length) {
            let u2 = d5[1];
            u2 && u2 != "*" && (l2 = Number(u2));
          }
        }
        l2 === $ ? await Vr(t2, n3, e3) : t2.size = l2;
      }
    } else
      await Vr(t2, n3, e3);
  }
  async function Qr(t2, n3, e3, i2, r) {
    let { useRangeHeader: a, forceRangeRequests: o2, options: l2 } = t2;
    if (a || o2) {
      let s2 = await i2(Jn, t2, $r(t2, n3, e3));
      if (s2.status != 206)
        throw new Error(on);
      return new Uint8Array(await s2.arrayBuffer());
    } else {
      let { data: s2 } = t2;
      return s2 || await r(t2, l2), new Uint8Array(t2.data.subarray(n3, n3 + e3));
    }
  }
  function $r(t2, n3 = 0, e3 = 1) {
    return Object.assign({}, $n(t2), { [Ns]: Xr + "=" + n3 + "-" + (n3 + e3 - 1) });
  }
  function $n({ options: t2 }) {
    let { headers: n3 } = t2;
    if (n3)
      return Symbol.iterator in n3 ? Object.fromEntries(n3) : n3;
  }
  async function Hr(t2) {
    await zr(t2, Wn);
  }
  async function Gr(t2) {
    await zr(t2, Xn);
  }
  async function zr(t2, n3) {
    let e3 = await n3(Jn, t2, $n(t2));
    t2.data = new Uint8Array(await e3.arrayBuffer()), t2.size || (t2.size = t2.data.length);
  }
  async function Vr(t2, n3, e3) {
    if (t2.preventHeadRequest)
      await e3(t2, t2.options);
    else {
      let r = (await n3(Ls, t2, $n(t2))).headers.get(Ds);
      r ? t2.size = Number(r) : await e3(t2, t2.options);
    }
  }
  async function Wn(t2, { options: n3, url: e3 }, i2) {
    let r = await fetch(e3, Object.assign({}, n3, { method: t2, headers: i2 }));
    if (r.status < 400)
      return r;
    throw r.status == 416 ? new Error(on) : new Error(Wr + (r.statusText || r.status));
  }
  function Xn(t2, { url: n3 }, e3) {
    return new Promise((i2, r) => {
      let a = new XMLHttpRequest();
      if (a.addEventListener("load", () => {
        if (a.status < 400) {
          let o2 = [];
          a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((l2) => {
            let s2 = l2.trim().split(/\s*:\s*/);
            s2[0] = s2[0].trim().replace(/^[a-z]|-[a-z]/g, (d5) => d5.toUpperCase()), o2.push(s2);
          }), i2({ status: a.status, arrayBuffer: () => a.response, headers: new Map(o2) });
        } else
          r(a.status == 416 ? new Error(on) : new Error(Wr + (a.statusText || a.status)));
      }, !1), a.addEventListener("error", (o2) => r(o2.detail.error), !1), a.open(t2, n3), e3)
        for (let o2 of Object.entries(e3))
          a.setRequestHeader(o2[0], o2[1]);
      a.responseType = "arraybuffer", a.send();
    });
  }
  var qn = class extends Be {
    constructor(n3, e3 = {}) {
      super(), Object.assign(this, { url: n3, reader: e3.useXHR ? new jn(n3, e3) : new Kn(n3, e3) });
    }
    set size(n3) {
    }
    get size() {
      return this.reader.size;
    }
    async init() {
      await this.reader.init(), super.init();
    }
    readUint8Array(n3, e3) {
      return this.reader.readUint8Array(n3, e3);
    }
  }, Yr = class extends qn {
    constructor(n3, e3 = {}) {
      e3.useRangeHeader = !0, super(n3, e3);
    }
  }, Kr = class extends Be {
    constructor(n3) {
      super(), Object.assign(this, { array: n3, size: n3.length });
    }
    readUint8Array(n3, e3) {
      return this.array.slice(n3, n3 + e3);
    }
  }, jr = class extends an {
    init(n3 = 0) {
      Object.assign(this, { offset: 0, array: new Uint8Array(n3) }), super.init();
    }
    writeUint8Array(n3) {
      let e3 = this;
      if (e3.offset + n3.length > e3.array.length) {
        let i2 = e3.array;
        e3.array = new Uint8Array(i2.length + n3.length), e3.array.set(i2);
      }
      e3.array.set(n3, e3.offset), e3.offset += n3.length;
    }
    getData() {
      return this.array;
    }
  }, sn = class extends Be {
    constructor(n3) {
      super(), this.readers = n3;
    }
    async init() {
      let n3 = this, { readers: e3 } = n3;
      n3.lastDiskNumber = 0, await Promise.all(e3.map(async (i2) => {
        await i2.init(), n3.size += i2.size;
      })), super.init();
    }
    async readUint8Array(n3, e3, i2 = 0) {
      let r = this, { readers: a } = this, o2, l2 = i2;
      l2 == -1 && (l2 = a.length - 1);
      let s2 = n3;
      for (; s2 >= a[l2].size; )
        s2 -= a[l2].size, l2++;
      let d5 = a[l2], u2 = d5.size;
      if (s2 + e3 <= u2)
        o2 = await ue(d5, s2, e3);
      else {
        let h2 = u2 - s2;
        o2 = new Uint8Array(e3), o2.set(await ue(d5, s2, h2)), o2.set(await r.readUint8Array(n3 + h2, e3 - h2, i2), h2);
      }
      return r.lastDiskNumber = Math.max(l2, r.lastDiskNumber), o2;
    }
  }, tt = class extends _t {
    constructor(n3, e3 = 4294967295) {
      super();
      let i2 = this;
      Object.assign(i2, { diskNumber: 0, diskOffset: 0, size: 0, maxSize: e3, availableSize: e3 });
      let r, a, o2, l2 = new WritableStream({ async write(u2) {
        let { availableSize: h2 } = i2;
        if (o2)
          u2.length >= h2 ? (await s2(u2.slice(0, h2)), await d5(), i2.diskOffset += r.size, i2.diskNumber++, o2 = null, await this.write(u2.slice(h2))) : await s2(u2);
        else {
          let { value: R3, done: T7 } = await n3.next();
          if (T7 && !R3)
            throw new Error(gs);
          r = R3, r.size = 0, r.maxSize && (i2.maxSize = r.maxSize), i2.availableSize = i2.maxSize, await Ue(r), a = R3.writable, o2 = a.getWriter(), await this.write(u2);
        }
      }, async close() {
        await o2.ready, await d5();
      } });
      Object.defineProperty(i2, Qn, { get() {
        return l2;
      } });
      async function s2(u2) {
        let h2 = u2.length;
        h2 && (await o2.ready, await o2.write(u2), r.size += h2, i2.size += h2, i2.availableSize -= h2);
      }
      async function d5() {
        a.size = r.size, await o2.close();
      }
    }
  };
  function Ms(t2) {
    let { baseURL: n3 } = st(), { protocol: e3 } = new URL(t2, n3);
    return e3 == "http:" || e3 == "https:";
  }
  async function Ue(t2, n3) {
    t2.init && !t2.initialized && await t2.init(n3);
  }
  function cn(t2) {
    return Array.isArray(t2) && (t2 = new sn(t2)), t2 instanceof ReadableStream && (t2 = { readable: t2 }), t2;
  }
  function ln(t2) {
    t2.writable === $ && typeof t2.next == Yt && (t2 = new tt(t2)), t2 instanceof WritableStream && (t2 = { writable: t2 });
    let { writable: n3 } = t2;
    return n3.size === $ && (n3.size = 0), t2 instanceof tt || Object.assign(t2, { diskNumber: 0, diskOffset: 0, availableSize: 1 / 0, maxSize: 1 / 0 }), t2;
  }
  function ue(t2, n3, e3, i2) {
    return t2.readUint8Array(n3, e3, i2);
  }
  var Ec = sn, hc = tt, ea = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""), Ps = ea.length == 256;
  function ta(t2) {
    if (Ps) {
      let n3 = "";
      for (let e3 = 0; e3 < t2.length; e3++)
        n3 += ea[t2[e3]];
      return n3;
    } else
      return new TextDecoder().decode(t2);
  }
  function _n(t2, n3) {
    return n3 && n3.trim().toLowerCase() == "cp437" ? ta(t2) : new TextDecoder(n3).decode(t2);
  }
  var zn = "filename", ei = "rawFilename", ti = "comment", ni = "rawComment", ii = "uncompressedSize", ri = "compressedSize", ai = "offset", fn = "diskNumberStart", Ot = "lastModDate", si = "rawLastModDate", Dt = "lastAccessDate", na = "rawLastAccessDate", yt = "creationDate", ia = "rawCreationDate", oi = "internalFileAttribute", ci = "externalFileAttribute", li = "msDosCompatible", _i = "zip64", Us = [zn, ei, ri, ii, Ot, si, ti, ni, Dt, yt, ai, fn, fn, oi, ci, li, _i, "directory", "bitFlag", "encrypted", "signature", "filenameUTF8", "commentUTF8", "compressionMethod", "version", "versionMadeBy", "extraField", "rawExtraField", "extraFieldZip64", "extraFieldUnicodePath", "extraFieldUnicodeComment", "extraFieldAES", "extraFieldNTFS", "extraFieldExtendedTimestamp"], Je = class {
    constructor(n3) {
      Us.forEach((e3) => this[e3] = n3[e3]);
    }
  }, fi = "File format is not recognized", Bs = "End of central directory not found", Hs = "End of Zip64 central directory not found", Gs = "End of Zip64 central directory locator not found", Vs = "Central directory header not found", Ys = "Local file header not found", Ks = "Zip64 extra field not found", js = "File contains encrypted entry", Ws = "Encryption method not supported", ra = "Compression method not supported", aa = "Split zip file", sa = "utf-8", oa = "cp437", Xs = [[ii, 4294967295], [ri, 4294967295], [ai, 4294967295], [fn, 65535]], qs = { [65535]: { getValue: ie, bytes: 4 }, [4294967295]: { getValue: un, bytes: 8 } }, ca = class {
    constructor(n3, e3 = {}) {
      Object.assign(this, { reader: cn(n3), options: e3, config: st() });
    }
    async *getEntriesGenerator(n3 = {}) {
      let e3 = this, { reader: i2 } = e3, { config: r } = e3;
      if (await Ue(i2), (i2.size === $ || !i2.readUint8Array) && (i2 = new St(await new Response(i2.readable).blob()), await Ue(i2)), i2.size < 22)
        throw new Error(fi);
      i2.chunkSize = Kt(r);
      let a = await eo(i2, 101010256, i2.size, 22, 65535 * 16);
      if (!a) {
        let O4 = await ue(i2, 0, 4), b4 = fe(O4);
        throw ie(b4) == 134695760 ? new Error(aa) : new Error(Bs);
      }
      let o2 = fe(a), l2 = ie(o2, 12), s2 = ie(o2, 16), d5 = a.offset, u2 = se(o2, 20), h2 = d5 + 22 + u2, R3 = se(o2, 4), T7 = i2.lastDiskNumber || 0, y4 = se(o2, 6), f3 = se(o2, 8), c2 = 0, _2 = 0;
      if (s2 == 4294967295 || l2 == 4294967295 || f3 == 65535 || y4 == 65535) {
        let O4 = await ue(i2, a.offset - 20, 20), b4 = fe(O4);
        if (ie(b4, 0) != 117853008)
          throw new Error(Hs);
        s2 = un(b4, 8);
        let D5 = await ue(i2, s2, 56, -1), C5 = fe(D5), F8 = a.offset - 20 - 56;
        if (ie(C5, 0) != 101075792 && s2 != F8) {
          let v = s2;
          s2 = F8, c2 = s2 - v, D5 = await ue(i2, s2, 56, -1), C5 = fe(D5);
        }
        if (ie(C5, 0) != 101075792)
          throw new Error(Gs);
        R3 == 65535 && (R3 = ie(C5, 16)), y4 == 65535 && (y4 = ie(C5, 20)), f3 == 65535 && (f3 = un(C5, 32)), l2 == 4294967295 && (l2 = un(C5, 40)), s2 -= l2;
      }
      if (T7 != R3)
        throw new Error(aa);
      if (s2 < 0 || s2 >= i2.size)
        throw new Error(fi);
      let E2 = 0, w4 = await ue(i2, s2, l2, y4), g4 = fe(w4);
      if (l2) {
        let O4 = a.offset - l2;
        if (ie(g4, E2) != 33639248 && s2 != O4) {
          let b4 = s2;
          s2 = O4, c2 = s2 - b4, w4 = await ue(i2, s2, l2, y4), g4 = fe(w4);
        }
      }
      if (s2 < 0 || s2 >= i2.size)
        throw new Error(fi);
      let p4 = Le(e3, n3, "filenameEncoding"), x3 = Le(e3, n3, "commentEncoding");
      for (let O4 = 0; O4 < f3; O4++) {
        let b4 = new di(i2, r, e3.options);
        if (ie(g4, E2) != 33639248)
          throw new Error(Vs);
        _a(b4, g4, E2 + 6);
        let D5 = !!b4.bitFlag.languageEncodingFlag, C5 = E2 + 46, F8 = C5 + b4.filenameLength, v = F8 + b4.extraFieldLength, M5 = se(g4, E2 + 4), U5 = (M5 & 0) == 0, Z5 = w4.subarray(C5, F8), G5 = se(g4, E2 + 32), ce4 = v + G5, k4 = w4.subarray(v, ce4), ne4 = D5, H5 = D5, V6 = U5 && (ft(g4, E2 + 38) & 16) == 16, Re2 = ie(g4, E2 + 42) + c2;
        Object.assign(b4, { versionMadeBy: M5, msDosCompatible: U5, compressedSize: 0, uncompressedSize: 0, commentLength: G5, directory: V6, offset: Re2, diskNumberStart: se(g4, E2 + 34), internalFileAttribute: se(g4, E2 + 36), externalFileAttribute: ie(g4, E2 + 38), rawFilename: Z5, filenameUTF8: ne4, commentUTF8: H5, rawExtraField: w4.subarray(F8, v) });
        let [ee4, J4] = await Promise.all([_n(Z5, ne4 ? sa : p4 || oa), _n(k4, H5 ? sa : x3 || oa)]);
        Object.assign(b4, { rawComment: k4, filename: ee4, comment: J4, directory: V6 || ee4.endsWith(rt) }), _2 = Math.max(Re2, _2), await fa(b4, b4, g4, E2 + 6);
        let me2 = new Je(b4);
        me2.getData = (De, re4) => b4.getData(De, me2, re4), E2 = ce4;
        let { onprogress: Te } = n3;
        if (Te)
          try {
            await Te(O4 + 1, f3, new Je(b4));
          } catch {
          }
        yield me2;
      }
      let A4 = Le(e3, n3, "extractPrependedData"), m3 = Le(e3, n3, "extractAppendedData");
      return A4 && (e3.prependedData = _2 > 0 ? await ue(i2, 0, _2) : new Uint8Array()), e3.comment = u2 ? await ue(i2, d5 + 22, u2) : new Uint8Array(), m3 && (e3.appendedData = h2 < i2.size ? await ue(i2, h2, i2.size - h2) : new Uint8Array()), !0;
    }
    async getEntries(n3 = {}) {
      let e3 = [];
      for await (let i2 of this.getEntriesGenerator(n3))
        e3.push(i2);
      return e3;
    }
    async close() {
    }
  }, di = class {
    constructor(n3, e3, i2) {
      Object.assign(this, { reader: n3, config: e3, options: i2 });
    }
    async getData(n3, e3, i2 = {}) {
      let r = this, { reader: a, offset: o2, diskNumberStart: l2, extraFieldAES: s2, compressionMethod: d5, config: u2, bitFlag: h2, signature: R3, rawLastModDate: T7, uncompressedSize: y4, compressedSize: f3 } = r, c2 = r.localDirectory = {}, _2 = await ue(a, o2, 30, l2), E2 = fe(_2), w4 = Le(r, i2, "password");
      if (w4 = w4 && w4.length && w4, s2 && s2.originalCompressionMethod != 99)
        throw new Error(ra);
      if (d5 != 0 && d5 != 8)
        throw new Error(ra);
      if (ie(E2, 0) != 67324752)
        throw new Error(Ys);
      _a(c2, E2, 4), c2.rawExtraField = c2.extraFieldLength ? await ue(a, o2 + 30 + c2.filenameLength, c2.extraFieldLength, l2) : new Uint8Array(), await fa(r, c2, E2, 4), Object.assign(e3, { lastAccessDate: c2.lastAccessDate, creationDate: c2.creationDate });
      let g4 = r.encrypted && c2.encrypted, p4 = g4 && !s2;
      if (g4) {
        if (!p4 && s2.strength === $)
          throw new Error(Ws);
        if (!w4)
          throw new Error(js);
      }
      let x3 = o2 + 30 + c2.filenameLength + c2.extraFieldLength, A4 = a.readable;
      A4.diskNumberStart = l2, A4.offset = x3;
      let m3 = A4.size = f3, O4 = Le(r, i2, "signal");
      n3 = ln(n3), await Ue(n3, y4);
      let { writable: b4 } = n3, { onstart: D5, onprogress: C5, onend: F8 } = i2, v = { options: { codecType: nn, password: w4, zipCrypto: p4, encryptionStrength: s2 && s2.strength, signed: Le(r, i2, "checkSignature"), passwordVerification: p4 && (h2.dataDescriptor ? T7 >>> 8 & 255 : R3 >>> 24 & 255), signature: R3, compressed: d5 != 0, encrypted: g4, useWebWorkers: Le(r, i2, "useWebWorkers"), useCompressionStream: Le(r, i2, "useCompressionStream"), transferStreams: Le(r, i2, "transferStreams") }, config: u2, streamOptions: { signal: O4, size: m3, onstart: D5, onprogress: C5, onend: F8 } };
      return b4.size += (await rn({ readable: A4, writable: b4 }, v)).size, Le(r, i2, "preventClose") || await b4.close(), n3.getData ? n3.getData() : b4;
    }
  };
  function _a(t2, n3, e3) {
    let i2 = t2.rawBitFlag = se(n3, e3 + 2), r = (i2 & 1) == 1, a = ie(n3, e3 + 6);
    Object.assign(t2, { encrypted: r, version: se(n3, e3), bitFlag: { level: (i2 & 6) >> 1, dataDescriptor: (i2 & 8) == 8, languageEncodingFlag: (i2 & 2048) == 2048 }, rawLastModDate: a, lastModDate: to(a), filenameLength: se(n3, e3 + 22), extraFieldLength: se(n3, e3 + 24) });
  }
  async function fa(t2, n3, e3, i2) {
    let { rawExtraField: r } = n3, a = n3.extraField = /* @__PURE__ */ new Map(), o2 = fe(new Uint8Array(r)), l2 = 0;
    try {
      for (; l2 < r.length; ) {
        let f3 = se(o2, l2), c2 = se(o2, l2 + 2);
        a.set(f3, { type: f3, data: r.slice(l2 + 4, l2 + 4 + c2) }), l2 += 4 + c2;
      }
    } catch {
    }
    let s2 = se(e3, i2 + 4);
    Object.assign(n3, { signature: ie(e3, i2 + 10), uncompressedSize: ie(e3, i2 + 18), compressedSize: ie(e3, i2 + 14) });
    let d5 = a.get(1);
    d5 && (Js(d5, n3), n3.extraFieldZip64 = d5);
    let u2 = a.get(28789);
    u2 && (await la(u2, zn, ei, n3, t2), n3.extraFieldUnicodePath = u2);
    let h2 = a.get(25461);
    h2 && (await la(h2, ti, ni, n3, t2), n3.extraFieldUnicodeComment = h2);
    let R3 = a.get(39169);
    R3 ? (Qs(R3, n3, s2), n3.extraFieldAES = R3) : n3.compressionMethod = s2;
    let T7 = a.get(10);
    T7 && ($s(T7, n3), n3.extraFieldNTFS = T7);
    let y4 = a.get(21589);
    y4 && (zs(y4, n3), n3.extraFieldExtendedTimestamp = y4);
  }
  function Js(t2, n3) {
    n3.zip64 = !0;
    let e3 = fe(t2.data), i2 = Xs.filter(([r, a]) => n3[r] == a);
    for (let r = 0, a = 0; r < i2.length; r++) {
      let [o2, l2] = i2[r];
      if (n3[o2] == l2) {
        let s2 = qs[l2];
        n3[o2] = t2[o2] = s2.getValue(e3, a), a += s2.bytes;
      } else if (t2[o2])
        throw new Error(Ks);
    }
  }
  async function la(t2, n3, e3, i2, r) {
    let a = fe(t2.data), o2 = new ve();
    o2.append(r[e3]);
    let l2 = fe(new Uint8Array(4));
    l2.setUint32(0, o2.get(), !0), Object.assign(t2, { version: ft(a, 0), signature: ie(a, 1), [n3]: await _n(t2.data.subarray(5)), valid: !r.bitFlag.languageEncodingFlag && t2.signature == ie(l2, 0) }), t2.valid && (i2[n3] = t2[n3], i2[n3 + "UTF8"] = !0);
  }
  function Qs(t2, n3, e3) {
    let i2 = fe(t2.data), r = ft(i2, 4);
    Object.assign(t2, { vendorVersion: ft(i2, 0), vendorId: ft(i2, 2), strength: r, originalCompressionMethod: e3, compressionMethod: se(i2, 5) }), n3.compressionMethod = t2.compressionMethod;
  }
  function $s(t2, n3) {
    let e3 = fe(t2.data), i2 = 4, r;
    try {
      for (; i2 < t2.data.length && !r; ) {
        let a = se(e3, i2), o2 = se(e3, i2 + 2);
        a == 1 && (r = t2.data.slice(i2 + 4, i2 + 4 + o2)), i2 += 4 + o2;
      }
    } catch {
    }
    try {
      if (r && r.length == 24) {
        let a = fe(r), o2 = a.getBigUint64(0, !0), l2 = a.getBigUint64(8, !0), s2 = a.getBigUint64(16, !0);
        Object.assign(t2, { rawLastModDate: o2, rawLastAccessDate: l2, rawCreationDate: s2 });
        let d5 = ui(o2), u2 = ui(l2), h2 = ui(s2), R3 = { lastModDate: d5, lastAccessDate: u2, creationDate: h2 };
        Object.assign(t2, R3), Object.assign(n3, R3);
      }
    } catch {
    }
  }
  function zs(t2, n3) {
    let e3 = fe(t2.data), i2 = ft(e3, 0), r = [], a = [];
    (i2 & 1) == 1 && (r.push(Ot), a.push(si)), (i2 & 2) == 2 && (r.push(Dt), a.push(na)), (i2 & 4) == 4 && (r.push(yt), a.push(ia));
    let o2 = 1;
    r.forEach((l2, s2) => {
      if (t2.data.length >= o2 + 4) {
        let d5 = ie(e3, o2);
        n3[l2] = t2[l2] = new Date(d5 * 1e3);
        let u2 = a[s2];
        t2[u2] = d5;
      }
      o2 += 4;
    });
  }
  async function eo(t2, n3, e3, i2, r) {
    let a = new Uint8Array(4), o2 = fe(a);
    no(o2, 0, n3);
    let l2 = i2 + r;
    return await s2(i2) || await s2(Math.min(l2, e3));
    async function s2(d5) {
      let u2 = e3 - d5, h2 = await ue(t2, u2, d5);
      for (let R3 = h2.length - i2; R3 >= 0; R3--)
        if (h2[R3] == a[0] && h2[R3 + 1] == a[1] && h2[R3 + 2] == a[2] && h2[R3 + 3] == a[3])
          return { offset: u2 + R3, buffer: h2.slice(R3, R3 + i2).buffer };
    }
  }
  function Le(t2, n3, e3) {
    return n3[e3] === $ ? t2.options[e3] : n3[e3];
  }
  function to(t2) {
    let n3 = (t2 & 4294901760) >> 16, e3 = t2 & 65535;
    try {
      return new Date(1980 + ((n3 & 65024) >> 9), ((n3 & 480) >> 5) - 1, n3 & 31, (e3 & 63488) >> 11, (e3 & 2016) >> 5, (e3 & 31) * 2, 0);
    } catch {
    }
  }
  function ui(t2) {
    return new Date(Number(t2 / BigInt(1e4) - BigInt(116444736e5)));
  }
  function ft(t2, n3) {
    return t2.getUint8(n3);
  }
  function se(t2, n3) {
    return t2.getUint16(n3, !0);
  }
  function ie(t2, n3) {
    return t2.getUint32(n3, !0);
  }
  function un(t2, n3) {
    return Number(t2.getBigUint64(n3, !0));
  }
  function no(t2, n3, e3) {
    t2.setUint32(n3, e3, !0);
  }
  function fe(t2) {
    return new DataView(t2.buffer);
  }
  var so = "File already exists", oo = "Zip file comment exceeds 64KB", co = "File entry comment exceeds 64KB", lo = "File entry name exceeds 64KB", Ea = "Version exceeds 65535", _o = "The strength must equal 1, 2, or 3", fo = "Extra field type exceeds 65535", uo = "Extra field data exceeds 64KB", Oi = "Zip64 is not supported (make sure 'keepOrder' is set to 'true')", ha = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]), Si = 0, Ra = [], wa = class {
    constructor(n3, e3 = {}) {
      n3 = ln(n3), Object.assign(this, { writer: n3, addSplitZipSignature: n3 instanceof tt, options: e3, config: st(), files: /* @__PURE__ */ new Map(), filenames: /* @__PURE__ */ new Set(), offset: n3.writable.size, pendingEntriesSize: 0, pendingAddFileCalls: /* @__PURE__ */ new Set(), bufferedWrites: 0 });
    }
    async add(n3 = "", e3, i2 = {}) {
      let r = this, { pendingAddFileCalls: a, config: o2 } = r;
      Si < o2.maxWorkers ? Si++ : await new Promise((s2) => Ra.push(s2));
      let l2;
      try {
        if (n3 = n3.trim(), r.filenames.has(n3))
          throw new Error(so);
        return r.filenames.add(n3), l2 = Eo(r, n3, e3, i2), a.add(l2), await l2;
      } catch (s2) {
        throw r.filenames.delete(n3), s2;
      } finally {
        a.delete(l2);
        let s2 = Ra.shift();
        s2 ? s2() : Si--;
      }
    }
    async close(n3 = new Uint8Array(), e3 = {}) {
      let i2 = this, { pendingAddFileCalls: r, writer: a } = this, { writable: o2 } = a;
      for (; r.size; )
        await Promise.all(Array.from(r));
      return await po(this, n3, e3), q(i2, e3, "preventClose") || await o2.close(), a.getData ? a.getData() : o2;
    }
  };
  async function Eo(t2, n3, e3, i2) {
    n3 = n3.trim(), i2.directory && !n3.endsWith(rt) ? n3 += rt : i2.directory = n3.endsWith(rt);
    let r = wt(n3);
    if (j(r) > 65535)
      throw new Error(lo);
    let a = i2.comment || "", o2 = wt(a);
    if (j(o2) > 65535)
      throw new Error(co);
    let l2 = q(t2, i2, "version", 20);
    if (l2 > 65535)
      throw new Error(Ea);
    let s2 = q(t2, i2, "versionMadeBy", 20);
    if (s2 > 65535)
      throw new Error(Ea);
    let d5 = q(t2, i2, Ot, /* @__PURE__ */ new Date()), u2 = q(t2, i2, Dt), h2 = q(t2, i2, yt), R3 = q(t2, i2, li, !0), T7 = q(t2, i2, oi, 0), y4 = q(t2, i2, ci, 0), f3 = q(t2, i2, "password"), c2 = q(t2, i2, "encryptionStrength", 3), _2 = q(t2, i2, "zipCrypto"), E2 = q(t2, i2, "extendedTimestamp", !0), w4 = q(t2, i2, "keepOrder", !0), g4 = q(t2, i2, "level"), p4 = q(t2, i2, "useWebWorkers"), x3 = q(t2, i2, "bufferedWrite"), A4 = q(t2, i2, "dataDescriptorSignature", !1), m3 = q(t2, i2, "signal"), O4 = q(t2, i2, "useCompressionStream"), b4 = q(t2, i2, "dataDescriptor", !0), D5 = q(t2, i2, _i);
    if (f3 !== $ && c2 !== $ && (c2 < 1 || c2 > 3))
      throw new Error(_o);
    let C5 = new Uint8Array(), { extraField: F8 } = i2;
    if (F8) {
      let De = 0, re4 = 0;
      F8.forEach((we2) => De += 4 + j(we2)), C5 = new Uint8Array(De), F8.forEach((we2, de2) => {
        if (de2 > 65535)
          throw new Error(fo);
        if (j(we2) > 65535)
          throw new Error(uo);
        oe(C5, new Uint16Array([de2]), re4), oe(C5, new Uint16Array([j(we2)]), re4 + 2), oe(C5, we2, re4 + 4), re4 += 4 + j(we2);
      });
    }
    let v = 0, M5 = 0, U5 = 0, Z5 = D5 === !0;
    e3 && (e3 = cn(e3), await Ue(e3), e3.size === $ ? (b4 = !0, (D5 || D5 === $) && (D5 = !0, v = 4294967295)) : (U5 = e3.size, v = So(U5)));
    let { diskOffset: G5, diskNumber: ce4, maxSize: k4 } = t2.writer, ne4 = Z5 || U5 >= 4294967295, H5 = Z5 || v >= 4294967295, V6 = Z5 || t2.offset + t2.pendingEntriesSize - G5 >= 4294967295, ee4 = q(t2, i2, "supportZip64SplitFile", !0) && Z5 || ce4 + Math.ceil(t2.pendingEntriesSize / k4) >= 65535;
    if (V6 || ne4 || H5 || ee4) {
      if (D5 === !1 || !w4)
        throw new Error(Oi);
      D5 = !0;
    }
    D5 = D5 || !1, i2 = Object.assign({}, i2, { rawFilename: r, rawComment: o2, version: l2, versionMadeBy: s2, lastModDate: d5, lastAccessDate: u2, creationDate: h2, rawExtraField: C5, zip64: D5, zip64UncompressedSize: ne4, zip64CompressedSize: H5, zip64Offset: V6, zip64DiskNumberStart: ee4, password: f3, level: g4, useWebWorkers: p4, encryptionStrength: c2, extendedTimestamp: E2, zipCrypto: _2, bufferedWrite: x3, keepOrder: w4, dataDescriptor: b4, dataDescriptorSignature: A4, signal: m3, msDosCompatible: R3, internalFileAttribute: T7, externalFileAttribute: y4, useCompressionStream: O4 });
    let J4 = wo(i2), me2 = xo(i2);
    M5 = j(J4.localHeaderArray, me2.dataDescriptorArray) + v, t2.pendingEntriesSize += M5;
    let Te;
    try {
      Te = await ho(t2, n3, e3, { headerInfo: J4, dataDescriptorInfo: me2 }, i2);
    } finally {
      t2.pendingEntriesSize -= M5;
    }
    return Object.assign(Te, { name: n3, comment: a, extraField: F8 }), new Je(Te);
  }
  async function ho(t2, n3, e3, i2, r) {
    let { files: a, writer: o2 } = t2, { keepOrder: l2, dataDescriptor: s2, signal: d5 } = r, { headerInfo: u2 } = i2, h2 = Array.from(a.values()).pop(), R3 = {}, T7, y4, f3, c2, _2, E2;
    a.set(n3, R3);
    try {
      let x3;
      l2 && (x3 = h2 && h2.lock, w4()), r.bufferedWrite || t2.writerLocked || t2.bufferedWrites && l2 || !s2 ? (E2 = new gt(), E2.writable.size = 0, T7 = !0, t2.bufferedWrites++, await Ue(o2)) : (E2 = o2, await g4()), await Ue(E2);
      let { writable: A4 } = o2, { diskOffset: m3 } = o2;
      if (t2.addSplitZipSignature) {
        delete t2.addSplitZipSignature;
        let b4 = new Uint8Array(4), D5 = Ae(b4);
        Y(D5, 0, 134695760), await Ze(A4, b4), t2.offset += 4;
      }
      T7 || (await x3, await p4(A4));
      let { diskNumber: O4 } = o2;
      if (_2 = !0, R3.diskNumberStart = O4, R3 = await Ro(e3, E2, R3, i2, t2.config, r), _2 = !1, a.set(n3, R3), R3.filename = n3, T7) {
        await E2.writable.close();
        let b4 = await E2.getData();
        await x3, await g4(), c2 = !0, s2 || (b4 = await To(R3, b4, A4, r)), await p4(A4), R3.diskNumberStart = o2.diskNumber, m3 = o2.diskOffset, await b4.stream().pipeTo(A4, { preventClose: !0, preventAbort: !0, signal: d5 }), A4.size += b4.size, c2 = !1;
      }
      if (R3.offset = t2.offset - m3, R3.zip64)
        bo(R3, r);
      else if (R3.offset >= 4294967295)
        throw new Error(Oi);
      return t2.offset += R3.length, R3;
    } catch (x3) {
      if (T7 && c2 || !T7 && _2) {
        if (t2.hasCorruptedEntries = !0, x3)
          try {
            x3.corruptedEntry = !0;
          } catch {
          }
        T7 ? t2.offset += E2.writable.size : t2.offset = E2.writable.size;
      }
      throw a.delete(n3), x3;
    } finally {
      T7 && t2.bufferedWrites--, f3 && f3(), y4 && y4();
    }
    function w4() {
      R3.lock = new Promise((x3) => f3 = x3);
    }
    async function g4() {
      t2.writerLocked = !0;
      let { lockWriter: x3 } = t2;
      t2.lockWriter = new Promise((A4) => y4 = () => {
        t2.writerLocked = !1, A4();
      }), await x3;
    }
    async function p4(x3) {
      u2.localHeaderArray.length > o2.availableSize && (o2.availableSize = 0, await Ze(x3, new Uint8Array()));
    }
  }
  async function Ro(t2, n3, { diskNumberStart: e3, lock: i2 }, r, a, o2) {
    let { headerInfo: l2, dataDescriptorInfo: s2 } = r, { localHeaderArray: d5, headerArray: u2, lastModDate: h2, rawLastModDate: R3, encrypted: T7, compressed: y4, version: f3, compressionMethod: c2, rawExtraFieldExtendedTimestamp: _2, rawExtraFieldNTFS: E2, rawExtraFieldAES: w4 } = l2, { dataDescriptorArray: g4 } = s2, { rawFilename: p4, lastAccessDate: x3, creationDate: A4, password: m3, level: O4, zip64: b4, zip64UncompressedSize: D5, zip64CompressedSize: C5, zip64Offset: F8, zip64DiskNumberStart: v, zipCrypto: M5, dataDescriptor: U5, directory: Z5, versionMadeBy: G5, rawComment: ce4, rawExtraField: k4, useWebWorkers: ne4, onstart: H5, onprogress: V6, onend: Re2, signal: ee4, encryptionStrength: J4, extendedTimestamp: me2, msDosCompatible: Te, internalFileAttribute: De, externalFileAttribute: re4, useCompressionStream: we2 } = o2, de2 = { lock: i2, versionMadeBy: G5, zip64: b4, directory: !!Z5, filenameUTF8: !0, rawFilename: p4, commentUTF8: !0, rawComment: ce4, rawExtraFieldExtendedTimestamp: _2, rawExtraFieldNTFS: E2, rawExtraFieldAES: w4, rawExtraField: k4, extendedTimestamp: me2, msDosCompatible: Te, internalFileAttribute: De, externalFileAttribute: re4, diskNumberStart: e3 }, Se2 = 0, ye2 = 0, ae4, { writable: le3 } = n3;
    if (t2) {
      t2.chunkSize = Kt(a), await Ze(le3, d5);
      let Ie = t2.readable, Ft = Ie.size = t2.size, pn2 = { options: { codecType: tn, level: O4, password: m3, encryptionStrength: J4, zipCrypto: T7 && M5, passwordVerification: T7 && M5 && R3 >> 8 & 255, signed: !0, compressed: y4, encrypted: T7, useWebWorkers: ne4, useCompressionStream: we2, transferStreams: !1 }, config: a, streamOptions: { signal: ee4, size: Ft, onstart: H5, onprogress: V6, onend: Re2 } }, ke2 = await rn({ readable: Ie, writable: le3 }, pn2);
      le3.size += ke2.size, ae4 = ke2.signature, ye2 = t2.size = Ie.size, Se2 = ke2.size;
    } else
      await Ze(le3, d5);
    let Qe2;
    if (b4) {
      let Ie = 4;
      D5 && (Ie += 8), C5 && (Ie += 8), F8 && (Ie += 8), v && (Ie += 4), Qe2 = new Uint8Array(Ie);
    } else
      Qe2 = new Uint8Array();
    return t2 && Ao({ signature: ae4, rawExtraFieldZip64: Qe2, compressedSize: Se2, uncompressedSize: ye2, headerInfo: l2, dataDescriptorInfo: s2 }, o2), U5 && await Ze(le3, g4), Object.assign(de2, { uncompressedSize: ye2, compressedSize: Se2, lastModDate: h2, rawLastModDate: R3, creationDate: A4, lastAccessDate: x3, encrypted: T7, length: j(d5, g4) + Se2, compressionMethod: c2, version: f3, headerArray: u2, signature: ae4, rawExtraFieldZip64: Qe2, zip64UncompressedSize: D5, zip64CompressedSize: C5, zip64Offset: F8, zip64DiskNumberStart: v }), de2;
  }
  function wo(t2) {
    let { rawFilename: n3, lastModDate: e3, lastAccessDate: i2, creationDate: r, password: a, level: o2, zip64: l2, zipCrypto: s2, dataDescriptor: d5, directory: u2, rawExtraField: h2, encryptionStrength: R3, extendedTimestamp: T7 } = t2, y4 = o2 !== 0 && !u2, f3 = !!(a && j(a)), c2 = t2.version, _2;
    if (f3 && !s2) {
      _2 = new Uint8Array(j(ha) + 2);
      let M5 = Ae(_2);
      W(M5, 0, 39169), oe(_2, ha, 2), bn(M5, 8, R3);
    } else
      _2 = new Uint8Array();
    let E2, w4;
    if (T7) {
      w4 = new Uint8Array(9 + (i2 ? 4 : 0) + (r ? 4 : 0));
      let M5 = Ae(w4);
      W(M5, 0, 21589), W(M5, 2, j(w4) - 4);
      let U5 = 1 + (i2 ? 2 : 0) + (r ? 4 : 0);
      bn(M5, 4, U5), Y(M5, 5, Math.floor(e3.getTime() / 1e3)), i2 && Y(M5, 9, Math.floor(i2.getTime() / 1e3)), r && Y(M5, 13, Math.floor(r.getTime() / 1e3));
      try {
        E2 = new Uint8Array(36);
        let Z5 = Ae(E2), G5 = gi(e3);
        W(Z5, 0, 10), W(Z5, 2, 32), W(Z5, 8, 1), W(Z5, 10, 24), xe(Z5, 12, G5), xe(Z5, 20, gi(i2) || G5), xe(Z5, 28, gi(r) || G5);
      } catch {
        E2 = new Uint8Array();
      }
    } else
      E2 = w4 = new Uint8Array();
    let g4 = 2048;
    d5 && (g4 = g4 | 8);
    let p4 = 0;
    y4 && (p4 = 8), l2 && (c2 = c2 > 45 ? c2 : 45), f3 && (g4 = g4 | 1, s2 || (c2 = c2 > 51 ? c2 : 51, p4 = 99, y4 && (_2[9] = 8)));
    let x3 = new Uint8Array(26), A4 = Ae(x3);
    W(A4, 0, c2), W(A4, 2, g4), W(A4, 4, p4);
    let m3 = new Uint32Array(1), O4 = Ae(m3), b4;
    e3 < Cn ? b4 = Cn : e3 > Ln ? b4 = Ln : b4 = e3, W(O4, 0, (b4.getHours() << 6 | b4.getMinutes()) << 5 | b4.getSeconds() / 2), W(O4, 2, (b4.getFullYear() - 1980 << 4 | b4.getMonth() + 1) << 5 | b4.getDate());
    let D5 = m3[0];
    Y(A4, 6, D5), W(A4, 22, j(n3));
    let C5 = j(_2, w4, E2, h2);
    W(A4, 24, C5);
    let F8 = new Uint8Array(30 + j(n3) + C5), v = Ae(F8);
    return Y(v, 0, 67324752), oe(F8, x3, 4), oe(F8, n3, 30), oe(F8, _2, 30 + j(n3)), oe(F8, w4, 30 + j(n3, _2)), oe(F8, E2, 30 + j(n3, _2, w4)), oe(F8, h2, 30 + j(n3, _2, w4, E2)), { localHeaderArray: F8, headerArray: x3, headerView: A4, lastModDate: e3, rawLastModDate: D5, encrypted: f3, compressed: y4, version: c2, compressionMethod: p4, rawExtraFieldExtendedTimestamp: w4, rawExtraFieldNTFS: E2, rawExtraFieldAES: _2 };
  }
  function xo(t2) {
    let { zip64: n3, dataDescriptor: e3, dataDescriptorSignature: i2 } = t2, r = new Uint8Array(), a, o2 = 0;
    return e3 && (r = new Uint8Array(n3 ? i2 ? 24 : 20 : i2 ? 16 : 12), a = Ae(r), i2 && (o2 = 4, Y(a, 0, 134695760))), { dataDescriptorArray: r, dataDescriptorView: a, dataDescriptorOffset: o2 };
  }
  function Ao(t2, n3) {
    let { signature: e3, rawExtraFieldZip64: i2, compressedSize: r, uncompressedSize: a, headerInfo: o2, dataDescriptorInfo: l2 } = t2, { headerView: s2, encrypted: d5 } = o2, { dataDescriptorView: u2, dataDescriptorOffset: h2 } = l2, { zip64: R3, zip64UncompressedSize: T7, zip64CompressedSize: y4, zipCrypto: f3, dataDescriptor: c2 } = n3;
    if ((!d5 || f3) && e3 !== $ && (Y(s2, 10, e3), c2 && Y(u2, h2, e3)), R3) {
      let _2 = Ae(i2);
      W(_2, 0, 1), W(_2, 2, i2.length - 4);
      let E2 = 4;
      T7 && (Y(s2, 18, 4294967295), xe(_2, E2, BigInt(a)), E2 += 8), y4 && (Y(s2, 14, 4294967295), xe(_2, E2, BigInt(r))), c2 && (xe(u2, h2 + 4, BigInt(r)), xe(u2, h2 + 12, BigInt(a)));
    } else
      Y(s2, 14, r), Y(s2, 18, a), c2 && (Y(u2, h2 + 4, r), Y(u2, h2 + 8, a));
  }
  async function To(t2, n3, e3, { zipCrypto: i2 }) {
    let r = await mo(n3, 0, 26), a = new DataView(r);
    return (!t2.encrypted || i2) && Y(a, 14, t2.signature), t2.zip64 ? (Y(a, 18, 4294967295), Y(a, 22, 4294967295)) : (Y(a, 18, t2.compressedSize), Y(a, 22, t2.uncompressedSize)), await Ze(e3, new Uint8Array(r)), n3.slice(r.byteLength);
  }
  function bo(t2, n3) {
    let { rawExtraFieldZip64: e3, offset: i2, diskNumberStart: r } = t2, { zip64UncompressedSize: a, zip64CompressedSize: o2, zip64Offset: l2, zip64DiskNumberStart: s2 } = n3, d5 = Ae(e3), u2 = 4;
    a && (u2 += 8), o2 && (u2 += 8), l2 && (xe(d5, u2, BigInt(i2)), u2 += 8), s2 && Y(d5, u2, r);
  }
  async function po(t2, n3, e3) {
    let { files: i2, writer: r } = t2, { diskOffset: a, writable: o2 } = r, { diskNumber: l2 } = r, s2 = 0, d5 = 0, u2 = t2.offset - a, h2 = i2.size;
    for (let [, { rawFilename: p4, rawExtraFieldZip64: x3, rawExtraFieldAES: A4, rawExtraField: m3, rawComment: O4, rawExtraFieldExtendedTimestamp: b4, rawExtraFieldNTFS: D5 }] of i2)
      d5 += 46 + j(p4, O4, x3, A4, b4, D5, m3);
    let R3 = new Uint8Array(d5), T7 = Ae(R3);
    await Ue(r);
    let y4 = 0;
    for (let [p4, x3] of Array.from(i2.values()).entries()) {
      let { offset: A4, rawFilename: m3, rawExtraFieldZip64: O4, rawExtraFieldAES: b4, rawExtraFieldNTFS: D5, rawExtraField: C5, rawComment: F8, versionMadeBy: v, headerArray: M5, directory: U5, zip64: Z5, zip64UncompressedSize: G5, zip64CompressedSize: ce4, zip64DiskNumberStart: k4, zip64Offset: ne4, msDosCompatible: H5, internalFileAttribute: V6, externalFileAttribute: Re2, extendedTimestamp: ee4, lastModDate: J4, diskNumberStart: me2, uncompressedSize: Te, compressedSize: De } = x3, re4;
      if (ee4) {
        re4 = new Uint8Array(9);
        let ye2 = Ae(re4);
        W(ye2, 0, 21589), W(ye2, 2, j(re4) - 4), bn(ye2, 4, 1), Y(ye2, 5, Math.floor(J4.getTime() / 1e3));
      } else
        re4 = new Uint8Array();
      let we2 = j(O4, b4, re4, D5, C5);
      Y(T7, s2, 33639248), W(T7, s2 + 4, v);
      let de2 = Ae(M5);
      G5 || Y(de2, 18, Te), ce4 || Y(de2, 14, De), oe(R3, M5, s2 + 6), W(T7, s2 + 30, we2), W(T7, s2 + 32, j(F8)), W(T7, s2 + 34, Z5 && k4 ? 65535 : me2), W(T7, s2 + 36, V6), Re2 ? Y(T7, s2 + 38, Re2) : U5 && H5 && bn(T7, s2 + 38, 16), Y(T7, s2 + 42, Z5 && ne4 ? 4294967295 : A4), oe(R3, m3, s2 + 46), oe(R3, O4, s2 + 46 + j(m3)), oe(R3, b4, s2 + 46 + j(m3, O4)), oe(R3, re4, s2 + 46 + j(m3, O4, b4)), oe(R3, D5, s2 + 46 + j(m3, O4, b4, re4)), oe(R3, C5, s2 + 46 + j(m3, O4, b4, re4, D5)), oe(R3, F8, s2 + 46 + j(m3) + we2);
      let Se2 = 46 + j(m3, F8) + we2;
      if (s2 - y4 > r.availableSize && (r.availableSize = 0, await Ze(o2, R3.slice(y4, s2)), y4 = s2), s2 += Se2, e3.onprogress)
        try {
          await e3.onprogress(p4 + 1, i2.size, new Je(x3));
        } catch {
        }
    }
    await Ze(o2, y4 ? R3.slice(y4) : R3);
    let f3 = r.diskNumber, { availableSize: c2 } = r;
    c2 < 22 && f3++;
    let _2 = q(t2, e3, "zip64");
    if (u2 >= 4294967295 || d5 >= 4294967295 || h2 >= 65535 || f3 >= 65535) {
      if (_2 === !1)
        throw new Error(Oi);
      _2 = !0;
    }
    let E2 = new Uint8Array(_2 ? 98 : 22), w4 = Ae(E2);
    s2 = 0, _2 && (Y(w4, 0, 101075792), xe(w4, 4, BigInt(44)), W(w4, 12, 45), W(w4, 14, 45), Y(w4, 16, f3), Y(w4, 20, l2), xe(w4, 24, BigInt(h2)), xe(w4, 32, BigInt(h2)), xe(w4, 40, BigInt(d5)), xe(w4, 48, BigInt(u2)), Y(w4, 56, 117853008), xe(w4, 64, BigInt(u2) + BigInt(d5)), Y(w4, 72, f3 + 1), q(t2, e3, "supportZip64SplitFile", !0) && (f3 = 65535, l2 = 65535), h2 = 65535, u2 = 4294967295, d5 = 4294967295, s2 += 56 + 20), Y(w4, s2, 101010256), W(w4, s2 + 4, f3), W(w4, s2 + 6, l2), W(w4, s2 + 8, h2), W(w4, s2 + 10, h2), Y(w4, s2 + 12, d5), Y(w4, s2 + 16, u2);
    let g4 = j(n3);
    if (g4)
      if (g4 <= 65535)
        W(w4, s2 + 20, g4);
      else
        throw new Error(oo);
    await Ze(o2, E2), g4 && await Ze(o2, n3);
  }
  function mo(t2, n3, e3) {
    return n3 || e3 ? t2.slice(n3, e3).arrayBuffer() : t2.arrayBuffer();
  }
  async function Ze(t2, n3) {
    let e3 = t2.getWriter();
    await e3.ready, t2.size += j(n3), await e3.write(n3), e3.releaseLock();
  }
  function gi(t2) {
    if (t2)
      return (BigInt(t2.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
  }
  function q(t2, n3, e3, i2) {
    let r = n3[e3] === $ ? t2.options[e3] : n3[e3];
    return r === $ ? i2 : r;
  }
  function So(t2) {
    return t2 + 5 * (Math.floor(t2 / 16383) + 1);
  }
  function bn(t2, n3, e3) {
    t2.setUint8(n3, e3);
  }
  function W(t2, n3, e3) {
    t2.setUint16(n3, e3, !0);
  }
  function Y(t2, n3, e3) {
    t2.setUint32(n3, e3, !0);
  }
  function xe(t2, n3, e3) {
    t2.setBigUint64(n3, e3, !0);
  }
  function oe(t2, n3, e3) {
    t2.set(n3, e3);
  }
  function Ae(t2) {
    return new DataView(t2.buffer);
  }
  function j(...t2) {
    let n3 = 0;
    return t2.forEach((e3) => e3 && (n3 += e3.length)), n3;
  }
  or({ Deflate: Zi, Inflate: ar });

  // https://esm.sh/v117/fflate@0.7.4/deno/fflate.mjs
  var vn2 = {}, Jn2 = function(n3, r, t2, e3, i2) {
    var a = new Worker(vn2[r] || (vn2[r] = URL.createObjectURL(new Blob([n3 + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], { type: "text/javascript" }))));
    return a.onmessage = function(o2) {
      var f3 = o2.data, u2 = f3.$e$;
      if (u2) {
        var s2 = new Error(u2[0]);
        s2.code = u2[1], s2.stack = u2[2], i2(s2, null);
      } else
        i2(null, f3);
    }, a.postMessage(t2, e3), a;
  }, T = Uint8Array, $2 = Uint16Array, pr2 = Uint32Array, gr2 = new T([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), yr2 = new T([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Tr2 = new T([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), wn = function(n3, r) {
    for (var t2 = new $2(31), e3 = 0; e3 < 31; ++e3)
      t2[e3] = r += 1 << n3[e3 - 1];
    for (var i2 = new pr2(t2[30]), e3 = 1; e3 < 30; ++e3)
      for (var a = t2[e3]; a < t2[e3 + 1]; ++a)
        i2[a] = a - t2[e3] << 5 | e3;
    return [t2, i2];
  }, mn = wn(gr2, 2), Xr2 = mn[0], Gr2 = mn[1];
  Xr2[28] = 258, Gr2[258] = 28;
  var xn = wn(yr2, 0), zn2 = xn[0], Hr2 = xn[1], Ur2 = new $2(32768);
  for (C = 0; C < 32768; ++C)
    nr2 = (C & 43690) >>> 1 | (C & 21845) << 1, nr2 = (nr2 & 52428) >>> 2 | (nr2 & 13107) << 2, nr2 = (nr2 & 61680) >>> 4 | (nr2 & 3855) << 4, Ur2[C] = ((nr2 & 65280) >>> 8 | (nr2 & 255) << 8) >>> 1;
  var nr2, C, V = function(n3, r, t2) {
    for (var e3 = n3.length, i2 = 0, a = new $2(r); i2 < e3; ++i2)
      n3[i2] && ++a[n3[i2] - 1];
    var o2 = new $2(r);
    for (i2 = 0; i2 < r; ++i2)
      o2[i2] = o2[i2 - 1] + a[i2 - 1] << 1;
    var f3;
    if (t2) {
      f3 = new $2(1 << r);
      var u2 = 15 - r;
      for (i2 = 0; i2 < e3; ++i2)
        if (n3[i2])
          for (var s2 = i2 << 4 | n3[i2], v = r - n3[i2], h2 = o2[n3[i2] - 1]++ << v, g4 = h2 | (1 << v) - 1; h2 <= g4; ++h2)
            f3[Ur2[h2] >>> u2] = s2;
    } else
      for (f3 = new $2(e3), i2 = 0; i2 < e3; ++i2)
        n3[i2] && (f3[i2] = Ur2[o2[n3[i2] - 1]++] >>> 15 - n3[i2]);
    return f3;
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
  var C, An = V(er2, 9, 0), Mn2 = V(er2, 9, 1), Tn = V(lr2, 5, 0), Un2 = V(lr2, 5, 1), Br2 = function(n3) {
    for (var r = n3[0], t2 = 1; t2 < n3.length; ++t2)
      n3[t2] > r && (r = n3[t2]);
    return r;
  }, Q2 = function(n3, r, t2) {
    var e3 = r / 8 | 0;
    return (n3[e3] | n3[e3 + 1] << 8) >> (r & 7) & t2;
  }, Zr2 = function(n3, r) {
    var t2 = r / 8 | 0;
    return (n3[t2] | n3[t2 + 1] << 8 | n3[t2 + 2] << 16) >> (r & 7);
  }, Dr2 = function(n3) {
    return (n3 + 7) / 8 | 0;
  }, X2 = function(n3, r, t2) {
    (r == null || r < 0) && (r = 0), (t2 == null || t2 > n3.length) && (t2 = n3.length);
    var e3 = new (n3.BYTES_PER_ELEMENT == 2 ? $2 : n3.BYTES_PER_ELEMENT == 4 ? pr2 : T)(t2 - r);
    return e3.set(n3.subarray(r, t2)), e3;
  };
  var Dn2 = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], p = function(n3, r, t2) {
    var e3 = new Error(r || Dn2[n3]);
    if (e3.code = n3, Error.captureStackTrace && Error.captureStackTrace(e3, p), !t2)
      throw e3;
    return e3;
  }, Sr2 = function(n3, r, t2) {
    var e3 = n3.length;
    if (!e3 || t2 && t2.f && !t2.l)
      return r || new T(0);
    var i2 = !r || t2, a = !t2 || t2.i;
    t2 || (t2 = {}), r || (r = new T(e3 * 3));
    var o2 = function(Fr2) {
      var Mr2 = r.length;
      if (Fr2 > Mr2) {
        var ur2 = new T(Math.max(Mr2 * 2, Fr2));
        ur2.set(r), r = ur2;
      }
    }, f3 = t2.f || 0, u2 = t2.p || 0, s2 = t2.b || 0, v = t2.l, h2 = t2.d, g4 = t2.m, x3 = t2.n, m3 = e3 * 8;
    do {
      if (!v) {
        f3 = Q2(n3, u2, 1);
        var z3 = Q2(n3, u2 + 1, 3);
        if (u2 += 3, z3)
          if (z3 == 1)
            v = Mn2, h2 = Un2, g4 = 9, x3 = 5;
          else if (z3 == 2) {
            var A4 = Q2(n3, u2, 31) + 257, w4 = Q2(n3, u2 + 10, 15) + 4, I4 = A4 + Q2(n3, u2 + 5, 31) + 1;
            u2 += 14;
            for (var S6 = new T(I4), U5 = new T(19), l2 = 0; l2 < w4; ++l2)
              U5[Tr2[l2]] = Q2(n3, u2 + l2 * 3, 7);
            u2 += w4 * 3;
            for (var k4 = Br2(U5), D5 = (1 << k4) - 1, N5 = V(U5, k4, 1), l2 = 0; l2 < I4; ) {
              var B6 = N5[Q2(n3, u2, D5)];
              u2 += B6 & 15;
              var c2 = B6 >>> 4;
              if (c2 < 16)
                S6[l2++] = c2;
              else {
                var G5 = 0, E2 = 0;
                for (c2 == 16 ? (E2 = 3 + Q2(n3, u2, 3), u2 += 2, G5 = S6[l2 - 1]) : c2 == 17 ? (E2 = 3 + Q2(n3, u2, 7), u2 += 3) : c2 == 18 && (E2 = 11 + Q2(n3, u2, 127), u2 += 7); E2--; )
                  S6[l2++] = G5;
              }
            }
            var L4 = S6.subarray(0, A4), Z5 = S6.subarray(A4);
            g4 = Br2(L4), x3 = Br2(Z5), v = V(L4, g4, 1), h2 = V(Z5, x3, 1);
          } else
            p(1);
        else {
          var c2 = Dr2(u2) + 4, y4 = n3[c2 - 4] | n3[c2 - 3] << 8, M5 = c2 + y4;
          if (M5 > e3) {
            a && p(0);
            break;
          }
          i2 && o2(s2 + y4), r.set(n3.subarray(c2, M5), s2), t2.b = s2 += y4, t2.p = u2 = M5 * 8, t2.f = f3;
          continue;
        }
        if (u2 > m3) {
          a && p(0);
          break;
        }
      }
      i2 && o2(s2 + 131072);
      for (var O4 = (1 << g4) - 1, q5 = (1 << x3) - 1, W6 = u2; ; W6 = u2) {
        var G5 = v[Zr2(n3, u2) & O4], K5 = G5 >>> 4;
        if (u2 += G5 & 15, u2 > m3) {
          a && p(0);
          break;
        }
        if (G5 || p(2), K5 < 256)
          r[s2++] = K5;
        else if (K5 == 256) {
          W6 = u2, v = null;
          break;
        } else {
          var H5 = K5 - 254;
          if (K5 > 264) {
            var l2 = K5 - 257, b4 = gr2[l2];
            H5 = Q2(n3, u2, (1 << b4) - 1) + Xr2[l2], u2 += b4;
          }
          var _2 = h2[Zr2(n3, u2) & q5], j5 = _2 >>> 4;
          _2 || p(3), u2 += _2 & 15;
          var Z5 = zn2[j5];
          if (j5 > 3) {
            var b4 = yr2[j5];
            Z5 += Zr2(n3, u2) & (1 << b4) - 1, u2 += b4;
          }
          if (u2 > m3) {
            a && p(0);
            break;
          }
          i2 && o2(s2 + 131072);
          for (var R3 = s2 + H5; s2 < R3; s2 += 4)
            r[s2] = r[s2 - Z5], r[s2 + 1] = r[s2 + 1 - Z5], r[s2 + 2] = r[s2 + 2 - Z5], r[s2 + 3] = r[s2 + 3 - Z5];
          s2 = R3;
        }
      }
      t2.l = v, t2.p = W6, t2.b = s2, t2.f = f3, v && (f3 = 1, t2.m = g4, t2.d = h2, t2.n = x3);
    } while (!f3);
    return s2 == r.length ? r : X2(r, 0, s2);
  }, rr2 = function(n3, r, t2) {
    t2 <<= r & 7;
    var e3 = r / 8 | 0;
    n3[e3] |= t2, n3[e3 + 1] |= t2 >>> 8;
  }, vr2 = function(n3, r, t2) {
    t2 <<= r & 7;
    var e3 = r / 8 | 0;
    n3[e3] |= t2, n3[e3 + 1] |= t2 >>> 8, n3[e3 + 2] |= t2 >>> 16;
  }, kr2 = function(n3, r) {
    for (var t2 = [], e3 = 0; e3 < n3.length; ++e3)
      n3[e3] && t2.push({ s: e3, f: n3[e3] });
    var i2 = t2.length, a = t2.slice();
    if (!i2)
      return [tr2, 0];
    if (i2 == 1) {
      var o2 = new T(t2[0].s + 1);
      return o2[t2[0].s] = 1, [o2, 1];
    }
    t2.sort(function(I4, S6) {
      return I4.f - S6.f;
    }), t2.push({ s: -1, f: 25001 });
    var f3 = t2[0], u2 = t2[1], s2 = 0, v = 1, h2 = 2;
    for (t2[0] = { s: -1, f: f3.f + u2.f, l: f3, r: u2 }; v != i2 - 1; )
      f3 = t2[t2[s2].f < t2[h2].f ? s2++ : h2++], u2 = t2[s2 != v && t2[s2].f < t2[h2].f ? s2++ : h2++], t2[v++] = { s: -1, f: f3.f + u2.f, l: f3, r: u2 };
    for (var g4 = a[0].s, e3 = 1; e3 < i2; ++e3)
      a[e3].s > g4 && (g4 = a[e3].s);
    var x3 = new $2(g4 + 1), m3 = Or2(t2[v - 1], x3, 0);
    if (m3 > r) {
      var e3 = 0, z3 = 0, c2 = m3 - r, y4 = 1 << c2;
      for (a.sort(function(S6, U5) {
        return x3[U5.s] - x3[S6.s] || S6.f - U5.f;
      }); e3 < i2; ++e3) {
        var M5 = a[e3].s;
        if (x3[M5] > r)
          z3 += y4 - (1 << m3 - x3[M5]), x3[M5] = r;
        else
          break;
      }
      for (z3 >>>= c2; z3 > 0; ) {
        var A4 = a[e3].s;
        x3[A4] < r ? z3 -= 1 << r - x3[A4]++ - 1 : ++e3;
      }
      for (; e3 >= 0 && z3; --e3) {
        var w4 = a[e3].s;
        x3[w4] == r && (--x3[w4], ++z3);
      }
      m3 = r;
    }
    return [new T(x3), m3];
  }, Or2 = function(n3, r, t2) {
    return n3.s == -1 ? Math.max(Or2(n3.l, r, t2 + 1), Or2(n3.r, r, t2 + 1)) : r[n3.s] = t2;
  }, Yr2 = function(n3) {
    for (var r = n3.length; r && !n3[--r]; )
      ;
    for (var t2 = new $2(++r), e3 = 0, i2 = n3[0], a = 1, o2 = function(u2) {
      t2[e3++] = u2;
    }, f3 = 1; f3 <= r; ++f3)
      if (n3[f3] == i2 && f3 != r)
        ++a;
      else {
        if (!i2 && a > 2) {
          for (; a > 138; a -= 138)
            o2(32754);
          a > 2 && (o2(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
        } else if (a > 3) {
          for (o2(i2), --a; a > 6; a -= 6)
            o2(8304);
          a > 2 && (o2(a - 3 << 5 | 8208), a = 0);
        }
        for (; a--; )
          o2(i2);
        a = 1, i2 = n3[f3];
      }
    return [t2.subarray(0, e3), r];
  }, hr2 = function(n3, r) {
    for (var t2 = 0, e3 = 0; e3 < r.length; ++e3)
      t2 += n3[e3] * r[e3];
    return t2;
  }, Lr2 = function(n3, r, t2) {
    var e3 = t2.length, i2 = Dr2(r + 2);
    n3[i2] = e3 & 255, n3[i2 + 1] = e3 >>> 8, n3[i2 + 2] = n3[i2] ^ 255, n3[i2 + 3] = n3[i2 + 1] ^ 255;
    for (var a = 0; a < e3; ++a)
      n3[i2 + a + 4] = t2[a];
    return (i2 + 4 + e3) * 8;
  }, Wr2 = function(n3, r, t2, e3, i2, a, o2, f3, u2, s2, v) {
    rr2(r, v++, t2), ++i2[256];
    for (var h2 = kr2(i2, 15), g4 = h2[0], x3 = h2[1], m3 = kr2(a, 15), z3 = m3[0], c2 = m3[1], y4 = Yr2(g4), M5 = y4[0], A4 = y4[1], w4 = Yr2(z3), I4 = w4[0], S6 = w4[1], U5 = new $2(19), l2 = 0; l2 < M5.length; ++l2)
      U5[M5[l2] & 31]++;
    for (var l2 = 0; l2 < I4.length; ++l2)
      U5[I4[l2] & 31]++;
    for (var k4 = kr2(U5, 7), D5 = k4[0], N5 = k4[1], B6 = 19; B6 > 4 && !D5[Tr2[B6 - 1]]; --B6)
      ;
    var G5 = s2 + 5 << 3, E2 = hr2(i2, er2) + hr2(a, lr2) + o2, L4 = hr2(i2, g4) + hr2(a, z3) + o2 + 14 + 3 * B6 + hr2(U5, D5) + (2 * U5[16] + 3 * U5[17] + 7 * U5[18]);
    if (G5 <= E2 && G5 <= L4)
      return Lr2(r, v, n3.subarray(u2, u2 + s2));
    var Z5, O4, q5, W6;
    if (rr2(r, v, 1 + (L4 < E2)), v += 2, L4 < E2) {
      Z5 = V(g4, x3, 0), O4 = g4, q5 = V(z3, c2, 0), W6 = z3;
      var K5 = V(D5, N5, 0);
      rr2(r, v, A4 - 257), rr2(r, v + 5, S6 - 1), rr2(r, v + 10, B6 - 4), v += 14;
      for (var l2 = 0; l2 < B6; ++l2)
        rr2(r, v + 3 * l2, D5[Tr2[l2]]);
      v += 3 * B6;
      for (var H5 = [M5, I4], b4 = 0; b4 < 2; ++b4)
        for (var _2 = H5[b4], l2 = 0; l2 < _2.length; ++l2) {
          var j5 = _2[l2] & 31;
          rr2(r, v, K5[j5]), v += D5[j5], j5 > 15 && (rr2(r, v, _2[l2] >>> 5 & 127), v += _2[l2] >>> 12);
        }
    } else
      Z5 = An, O4 = er2, q5 = Tn, W6 = lr2;
    for (var l2 = 0; l2 < f3; ++l2)
      if (e3[l2] > 255) {
        var j5 = e3[l2] >>> 18 & 31;
        vr2(r, v, Z5[j5 + 257]), v += O4[j5 + 257], j5 > 7 && (rr2(r, v, e3[l2] >>> 23 & 31), v += gr2[j5]);
        var R3 = e3[l2] & 31;
        vr2(r, v, q5[R3]), v += W6[R3], R3 > 3 && (vr2(r, v, e3[l2] >>> 5 & 8191), v += yr2[R3]);
      } else
        vr2(r, v, Z5[e3[l2]]), v += O4[e3[l2]];
    return vr2(r, v, Z5[256]), v + O4[256];
  }, Sn = new pr2([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), tr2 = new T(0), Cn2 = function(n3, r, t2, e3, i2, a) {
    var o2 = n3.length, f3 = new T(e3 + o2 + 5 * (1 + Math.ceil(o2 / 7e3)) + i2), u2 = f3.subarray(e3, f3.length - i2), s2 = 0;
    if (!r || o2 < 8)
      for (var v = 0; v <= o2; v += 65535) {
        var h2 = v + 65535;
        h2 >= o2 && (u2[s2 >> 3] = a), s2 = Lr2(u2, s2 + 1, n3.subarray(v, h2));
      }
    else {
      for (var g4 = Sn[r - 1], x3 = g4 >>> 13, m3 = g4 & 8191, z3 = (1 << t2) - 1, c2 = new $2(32768), y4 = new $2(z3 + 1), M5 = Math.ceil(t2 / 3), A4 = 2 * M5, w4 = function($r2) {
        return (n3[$r2] ^ n3[$r2 + 1] << M5 ^ n3[$r2 + 2] << A4) & z3;
      }, I4 = new pr2(25e3), S6 = new $2(288), U5 = new $2(32), l2 = 0, k4 = 0, v = 0, D5 = 0, N5 = 0, B6 = 0; v < o2; ++v) {
        var G5 = w4(v), E2 = v & 32767, L4 = y4[G5];
        if (c2[E2] = L4, y4[G5] = E2, N5 <= v) {
          var Z5 = o2 - v;
          if ((l2 > 7e3 || D5 > 24576) && Z5 > 423) {
            s2 = Wr2(n3, u2, 0, I4, S6, U5, k4, D5, B6, v - B6, s2), D5 = l2 = k4 = 0, B6 = v;
            for (var O4 = 0; O4 < 286; ++O4)
              S6[O4] = 0;
            for (var O4 = 0; O4 < 30; ++O4)
              U5[O4] = 0;
          }
          var q5 = 2, W6 = 0, K5 = m3, H5 = E2 - L4 & 32767;
          if (Z5 > 2 && G5 == w4(v - H5))
            for (var b4 = Math.min(x3, Z5) - 1, _2 = Math.min(32767, v), j5 = Math.min(258, Z5); H5 <= _2 && --K5 && E2 != L4; ) {
              if (n3[v + q5] == n3[v + q5 - H5]) {
                for (var R3 = 0; R3 < j5 && n3[v + R3] == n3[v + R3 - H5]; ++R3)
                  ;
                if (R3 > q5) {
                  if (q5 = R3, W6 = H5, R3 > b4)
                    break;
                  for (var Fr2 = Math.min(H5, R3 - 2), Mr2 = 0, O4 = 0; O4 < Fr2; ++O4) {
                    var ur2 = v - H5 + O4 + 32768 & 32767, jn2 = c2[ur2], fn2 = ur2 - jn2 + 32768 & 32767;
                    fn2 > Mr2 && (Mr2 = fn2, L4 = ur2);
                  }
                }
              }
              E2 = L4, L4 = c2[E2], H5 += E2 - L4 + 32768 & 32767;
            }
          if (W6) {
            I4[D5++] = 268435456 | Gr2[q5] << 18 | Hr2[W6];
            var sn2 = Gr2[q5] & 31, un2 = Hr2[W6] & 31;
            k4 += gr2[sn2] + yr2[un2], ++S6[257 + sn2], ++U5[un2], N5 = v + q5, ++l2;
          } else
            I4[D5++] = n3[v], ++S6[n3[v]];
        }
      }
      s2 = Wr2(n3, u2, a, I4, S6, U5, k4, D5, B6, v - B6, s2), !a && s2 & 7 && (s2 = Lr2(u2, s2 + 1, tr2));
    }
    return X2(f3, 0, e3 + Dr2(s2) + i2);
  }, En = function() {
    for (var n3 = new Int32Array(256), r = 0; r < 256; ++r) {
      for (var t2 = r, e3 = 9; --e3; )
        t2 = (t2 & 1 && -306674912) ^ t2 >>> 1;
      n3[r] = t2;
    }
    return n3;
  }(), wr2 = function() {
    var n3 = -1;
    return { p: function(r) {
      for (var t2 = n3, e3 = 0; e3 < r.length; ++e3)
        t2 = En[t2 & 255 ^ r[e3]] ^ t2 >>> 8;
      n3 = t2;
    }, d: function() {
      return ~n3;
    } };
  }, dr2 = function() {
    var n3 = 1, r = 0;
    return { p: function(t2) {
      for (var e3 = n3, i2 = r, a = t2.length | 0, o2 = 0; o2 != a; ) {
        for (var f3 = Math.min(o2 + 2655, a); o2 < f3; ++o2)
          i2 += e3 += t2[o2];
        e3 = (e3 & 65535) + 15 * (e3 >> 16), i2 = (i2 & 65535) + 15 * (i2 >> 16);
      }
      n3 = e3, r = i2;
    }, d: function() {
      return n3 %= 65521, r %= 65521, (n3 & 255) << 24 | n3 >>> 8 << 16 | (r & 255) << 8 | r >>> 8;
    } };
  }, sr2 = function(n3, r, t2, e3, i2) {
    return Cn2(n3, r.level == null ? 6 : r.level, r.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(n3.length))) * 1.5) : 12 + r.mem, t2, e3, !i2);
  }, Cr2 = function(n3, r) {
    var t2 = {};
    for (var e3 in n3)
      t2[e3] = n3[e3];
    for (var e3 in r)
      t2[e3] = r[e3];
    return t2;
  }, hn = function(n3, r, t2) {
    for (var e3 = n3(), i2 = n3.toString(), a = i2.slice(i2.indexOf("[") + 1, i2.lastIndexOf("]")).replace(/\s+/g, "").split(","), o2 = 0; o2 < e3.length; ++o2) {
      var f3 = e3[o2], u2 = a[o2];
      if (typeof f3 == "function") {
        r += ";" + u2 + "=";
        var s2 = f3.toString();
        if (f3.prototype)
          if (s2.indexOf("[native code]") != -1) {
            var v = s2.indexOf(" ", 8) + 1;
            r += s2.slice(v, s2.indexOf("(", v));
          } else {
            r += s2;
            for (var h2 in f3.prototype)
              r += ";" + u2 + ".prototype." + h2 + "=" + f3.prototype[h2].toString();
          }
        else
          r += s2;
      } else
        t2[u2] = f3;
    }
    return [r, t2];
  }, Ir2 = [], Kn2 = function(n3) {
    var r = [];
    for (var t2 in n3)
      n3[t2].buffer && r.push((n3[t2] = new n3[t2].constructor(n3[t2])).buffer);
    return r;
  }, Fn2 = function(n3, r, t2, e3) {
    var i2;
    if (!Ir2[t2]) {
      for (var a = "", o2 = {}, f3 = n3.length - 1, u2 = 0; u2 < f3; ++u2)
        i2 = hn(n3[u2], a, o2), a = i2[0], o2 = i2[1];
      Ir2[t2] = hn(n3[f3], a, o2);
    }
    var s2 = Cr2({}, Ir2[t2][1]);
    return Jn2(Ir2[t2][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + r.toString() + "}", t2, s2, Kn2(s2), e3);
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
  }, or2 = function(n3) {
    return postMessage(n3, [n3.buffer]);
  }, br2 = function(n3) {
    return n3 && n3.size && new T(n3.size);
  };
  var d = function(n3) {
    return n3.ondata = function(r, t2) {
      return postMessage([r, t2], [r.buffer]);
    }, function(r) {
      return n3.push(r.data[0], r.data[1]);
    };
  }, Ar2 = function(n3, r, t2, e3, i2) {
    var a, o2 = Fn2(n3, e3, i2, function(f3, u2) {
      f3 ? (o2.terminate(), r.ondata.call(r, f3)) : (u2[1] && o2.terminate(), r.ondata.call(r, f3, u2[0], u2[1]));
    });
    o2.postMessage(t2), r.push = function(f3, u2) {
      r.ondata || p(5), a && r.ondata(p(4, 0, 1), null, !!u2), o2.postMessage([f3, a = u2], [f3.buffer]);
    }, r.terminate = function() {
      o2.terminate();
    };
  }, Y2 = function(n3, r) {
    return n3[r] | n3[r + 1] << 8;
  }, P = function(n3, r) {
    return (n3[r] | n3[r + 1] << 8 | n3[r + 2] << 16 | n3[r + 3] << 24) >>> 0;
  }, qr2 = function(n3, r) {
    return P(n3, r) + P(n3, r + 4) * 4294967296;
  }, F = function(n3, r, t2) {
    for (; t2; ++r)
      n3[r] = t2, t2 >>>= 8;
  }, _r2 = function(n3, r) {
    var t2 = r.filename;
    if (n3[0] = 31, n3[1] = 139, n3[2] = 8, n3[8] = r.level < 2 ? 4 : r.level == 9 ? 2 : 0, n3[9] = 3, r.mtime != 0 && F(n3, 4, Math.floor(new Date(r.mtime || Date.now()) / 1e3)), t2) {
      n3[3] = 8;
      for (var e3 = 0; e3 <= t2.length; ++e3)
        n3[e3 + 10] = t2.charCodeAt(e3);
    }
  }, rn2 = function(n3) {
    (n3[0] != 31 || n3[1] != 139 || n3[2] != 8) && p(6, "invalid gzip data");
    var r = n3[3], t2 = 10;
    r & 4 && (t2 += n3[10] | (n3[11] << 8) + 2);
    for (var e3 = (r >> 3 & 1) + (r >> 4 & 1); e3 > 0; e3 -= !n3[t2++])
      ;
    return t2 + (r & 2);
  }, Gn2 = function(n3) {
    var r = n3.length;
    return (n3[r - 4] | n3[r - 3] << 8 | n3[r - 2] << 16 | n3[r - 1] << 24) >>> 0;
  }, nn2 = function(n3) {
    return 10 + (n3.filename && n3.filename.length + 1 || 0);
  }, tn2 = function(n3, r) {
    var t2 = r.level, e3 = t2 == 0 ? 0 : t2 < 6 ? 1 : t2 == 9 ? 3 : 2;
    n3[0] = 120, n3[1] = e3 << 6 | (e3 ? 32 - 2 * e3 : 1);
  }, On2 = function(n3) {
    ((n3[0] & 15) != 8 || n3[0] >>> 4 > 7 || (n3[0] << 8 | n3[1]) % 31) && p(6, "invalid zlib data"), n3[1] & 32 && p(6, "invalid zlib data: preset dictionaries not supported");
  };
  function en2(n3, r) {
    return !r && typeof n3 == "function" && (r = n3, n3 = {}), this.ondata = r, n3;
  }
  var ir2 = function() {
    function n3(r, t2) {
      !t2 && typeof r == "function" && (t2 = r, r = {}), this.ondata = t2, this.o = r || {};
    }
    return n3.prototype.p = function(r, t2) {
      this.ondata(sr2(r, this.o, 0, 0, !t2), t2);
    }, n3.prototype.push = function(r, t2) {
      this.ondata || p(5), this.d && p(4), this.d = t2, this.p(r, t2 || !1);
    }, n3;
  }(), Qn2 = function() {
    function n3(r, t2) {
      Ar2([xr2, function() {
        return [d, ir2];
      }], this, en2.call(this, r, t2), function(e3) {
        var i2 = new ir2(e3.data);
        onmessage = d(i2);
      }, 6);
    }
    return n3;
  }();
  function Rr2(n3, r) {
    return sr2(n3, r || {}, 0, 0);
  }
  var J = function() {
    function n3(r) {
      this.s = {}, this.p = new T(0), this.ondata = r;
    }
    return n3.prototype.e = function(r) {
      this.ondata || p(5), this.d && p(4);
      var t2 = this.p.length, e3 = new T(t2 + r.length);
      e3.set(this.p), e3.set(r, t2), this.p = e3;
    }, n3.prototype.c = function(r) {
      this.d = this.s.i = r || !1;
      var t2 = this.s.b, e3 = Sr2(this.p, this.o, this.s);
      this.ondata(X2(e3, t2, this.s.b), this.d), this.o = X2(e3, this.s.b - 32768), this.s.b = this.o.length, this.p = X2(this.p, this.s.p / 8 | 0), this.s.p &= 7;
    }, n3.prototype.push = function(r, t2) {
      this.e(r), this.c(t2);
    }, n3;
  }(), Ln2 = function() {
    function n3(r) {
      this.ondata = r, Ar2([mr2, function() {
        return [d, J];
      }], this, 0, function() {
        var t2 = new J();
        onmessage = d(t2);
      }, 7);
    }
    return n3;
  }();
  function Er2(n3, r) {
    return Sr2(n3, r);
  }
  var ln2 = function() {
    function n3(r, t2) {
      this.c = wr2(), this.l = 0, this.v = 1, ir2.call(this, r, t2);
    }
    return n3.prototype.push = function(r, t2) {
      ir2.prototype.push.call(this, r, t2);
    }, n3.prototype.p = function(r, t2) {
      this.c.p(r), this.l += r.length;
      var e3 = sr2(r, this.o, this.v && nn2(this.o), t2 && 8, !t2);
      this.v && (_r2(e3, this.o), this.v = 0), t2 && (F(e3, e3.length - 8, this.c.d()), F(e3, e3.length - 4, this.l)), this.ondata(e3, t2);
    }, n3;
  }(), et2 = function() {
    function n3(r, t2) {
      Ar2([xr2, In2, function() {
        return [d, ir2, ln2];
      }], this, en2.call(this, r, t2), function(e3) {
        var i2 = new ln2(e3.data);
        onmessage = d(i2);
      }, 8);
    }
    return n3;
  }();
  var jr2 = function() {
    function n3(r) {
      this.v = 1, J.call(this, r);
    }
    return n3.prototype.push = function(r, t2) {
      if (J.prototype.e.call(this, r), this.v) {
        var e3 = this.p.length > 3 ? rn2(this.p) : 4;
        if (e3 >= this.p.length && !t2)
          return;
        this.p = this.p.subarray(e3), this.v = 0;
      }
      t2 && (this.p.length < 8 && p(6, "invalid gzip data"), this.p = this.p.subarray(0, -8)), J.prototype.c.call(this, t2);
    }, n3;
  }(), Xn2 = function() {
    function n3(r) {
      this.ondata = r, Ar2([mr2, Bn2, function() {
        return [d, J, jr2];
      }], this, 0, function() {
        var t2 = new jr2();
        onmessage = d(t2);
      }, 9);
    }
    return n3;
  }();
  var pn = function() {
    function n3(r, t2) {
      this.c = dr2(), this.v = 1, ir2.call(this, r, t2);
    }
    return n3.prototype.push = function(r, t2) {
      ir2.prototype.push.call(this, r, t2);
    }, n3.prototype.p = function(r, t2) {
      this.c.p(r);
      var e3 = sr2(r, this.o, this.v && 2, t2 && 4, !t2);
      this.v && (tn2(e3, this.o), this.v = 0), t2 && F(e3, e3.length - 4, this.c.d()), this.ondata(e3, t2);
    }, n3;
  }(), at2 = function() {
    function n3(r, t2) {
      Ar2([xr2, Zn2, function() {
        return [d, ir2, pn];
      }], this, en2.call(this, r, t2), function(e3) {
        var i2 = new pn(e3.data);
        onmessage = d(i2);
      }, 10);
    }
    return n3;
  }();
  var Kr2 = function() {
    function n3(r) {
      this.v = 1, J.call(this, r);
    }
    return n3.prototype.push = function(r, t2) {
      if (J.prototype.e.call(this, r), this.v) {
        if (this.p.length < 2 && !t2)
          return;
        this.p = this.p.subarray(2), this.v = 0;
      }
      t2 && (this.p.length < 4 && p(6, "invalid zlib data"), this.p = this.p.subarray(0, -4)), J.prototype.c.call(this, t2);
    }, n3;
  }(), bn2 = function() {
    function n3(r) {
      this.ondata = r, Ar2([mr2, kn2, function() {
        return [d, J, Kr2];
      }], this, 0, function() {
        var t2 = new Kr2();
        onmessage = d(t2);
      }, 11);
    }
    return n3;
  }();
  function Qr2(n3, r) {
    return Sr2((On2(n3), n3.subarray(2, -4)), r);
  }
  var rt2 = function() {
    function n3(r) {
      this.G = jr2, this.I = J, this.Z = Kr2, this.ondata = r;
    }
    return n3.prototype.push = function(r, t2) {
      if (this.ondata || p(5), this.s)
        this.s.push(r, t2);
      else {
        if (this.p && this.p.length) {
          var e3 = new T(this.p.length + r.length);
          e3.set(this.p), e3.set(r, this.p.length);
        } else
          this.p = r;
        if (this.p.length > 2) {
          var i2 = this, a = function() {
            i2.ondata.apply(i2, arguments);
          };
          this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(a) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(a) : new this.Z(a), this.s.push(this.p, t2), this.p = null;
        }
      }
    }, n3;
  }(), ft2 = function() {
    function n3(r) {
      this.G = Xn2, this.I = Ln2, this.Z = bn2, this.ondata = r;
    }
    return n3.prototype.push = function(r, t2) {
      rt2.prototype.push.call(this, r, t2);
    }, n3;
  }();
  var yn2 = typeof TextEncoder < "u" && new TextEncoder(), Vr2 = typeof TextDecoder < "u" && new TextDecoder(), Nn2 = 0;
  try {
    Vr2.decode(tr2, { stream: !0 }), Nn2 = 1;
  } catch {
  }
  var Rn = function(n3) {
    for (var r = "", t2 = 0; ; ) {
      var e3 = n3[t2++], i2 = (e3 > 127) + (e3 > 223) + (e3 > 239);
      if (t2 + i2 > n3.length)
        return [r, X2(n3, t2 - 1)];
      i2 ? i2 == 3 ? (e3 = ((e3 & 15) << 18 | (n3[t2++] & 63) << 12 | (n3[t2++] & 63) << 6 | n3[t2++] & 63) - 65536, r += String.fromCharCode(55296 | e3 >> 10, 56320 | e3 & 1023)) : i2 & 1 ? r += String.fromCharCode((e3 & 31) << 6 | n3[t2++] & 63) : r += String.fromCharCode((e3 & 15) << 12 | (n3[t2++] & 63) << 6 | n3[t2++] & 63) : r += String.fromCharCode(e3);
    }
  }, vt2 = function() {
    function n3(r) {
      this.ondata = r, Nn2 ? this.t = new TextDecoder() : this.p = tr2;
    }
    return n3.prototype.push = function(r, t2) {
      if (this.ondata || p(5), t2 = !!t2, this.t) {
        this.ondata(this.t.decode(r, { stream: !0 }), t2), t2 && (this.t.decode().length && p(8), this.t = null);
        return;
      }
      this.p || p(4);
      var e3 = new T(this.p.length + r.length);
      e3.set(this.p), e3.set(r, this.p.length);
      var i2 = Rn(e3), a = i2[0], o2 = i2[1];
      t2 ? (o2.length && p(8), this.p = null) : this.p = o2, this.ondata(a, t2);
    }, n3;
  }(), ht2 = function() {
    function n3(r) {
      this.ondata = r;
    }
    return n3.prototype.push = function(r, t2) {
      this.ondata || p(5), this.d && p(4), this.ondata(fr2(r), this.d = t2 || !1);
    }, n3;
  }();
  function fr2(n3, r) {
    if (r) {
      for (var t2 = new T(n3.length), e3 = 0; e3 < n3.length; ++e3)
        t2[e3] = n3.charCodeAt(e3);
      return t2;
    }
    if (yn2)
      return yn2.encode(n3);
    for (var i2 = n3.length, a = new T(n3.length + (n3.length >> 1)), o2 = 0, f3 = function(v) {
      a[o2++] = v;
    }, e3 = 0; e3 < i2; ++e3) {
      if (o2 + 5 > a.length) {
        var u2 = new T(o2 + 8 + (i2 - e3 << 1));
        u2.set(a), a = u2;
      }
      var s2 = n3.charCodeAt(e3);
      s2 < 128 || r ? f3(s2) : s2 < 2048 ? (f3(192 | s2 >> 6), f3(128 | s2 & 63)) : s2 > 55295 && s2 < 57344 ? (s2 = 65536 + (s2 & 1023 << 10) | n3.charCodeAt(++e3) & 1023, f3(240 | s2 >> 18), f3(128 | s2 >> 12 & 63), f3(128 | s2 >> 6 & 63), f3(128 | s2 & 63)) : (f3(224 | s2 >> 12), f3(128 | s2 >> 6 & 63), f3(128 | s2 & 63));
    }
    return X2(a, 0, o2);
  }
  function $n2(n3, r) {
    if (r) {
      for (var t2 = "", e3 = 0; e3 < n3.length; e3 += 16384)
        t2 += String.fromCharCode.apply(null, n3.subarray(e3, e3 + 16384));
      return t2;
    } else {
      if (Vr2)
        return Vr2.decode(n3);
      var i2 = Rn(n3), a = i2[0], o2 = i2[1];
      return o2.length && p(8), a;
    }
  }
  var qn2 = function(n3) {
    return n3 == 1 ? 3 : n3 < 6 ? 2 : n3 == 9 ? 1 : 0;
  };
  var Wn2 = function(n3, r) {
    for (; Y2(n3, r) != 1; r += 4 + Y2(n3, r + 2))
      ;
    return [qr2(n3, r + 12), qr2(n3, r + 4), qr2(n3, r + 20)];
  }, ar2 = function(n3) {
    var r = 0;
    if (n3)
      for (var t2 in n3) {
        var e3 = n3[t2].length;
        e3 > 65535 && p(9), r += e3 + 4;
      }
    return r;
  }, cr2 = function(n3, r, t2, e3, i2, a, o2, f3) {
    var u2 = e3.length, s2 = t2.extra, v = f3 && f3.length, h2 = ar2(s2);
    F(n3, r, o2 != null ? 33639248 : 67324752), r += 4, o2 != null && (n3[r++] = 20, n3[r++] = t2.os), n3[r] = 20, r += 2, n3[r++] = t2.flag << 1 | (a < 0 && 8), n3[r++] = i2 && 8, n3[r++] = t2.compression & 255, n3[r++] = t2.compression >> 8;
    var g4 = new Date(t2.mtime == null ? Date.now() : t2.mtime), x3 = g4.getFullYear() - 1980;
    if ((x3 < 0 || x3 > 119) && p(10), F(n3, r, x3 << 25 | g4.getMonth() + 1 << 21 | g4.getDate() << 16 | g4.getHours() << 11 | g4.getMinutes() << 5 | g4.getSeconds() >>> 1), r += 4, a != -1 && (F(n3, r, t2.crc), F(n3, r + 4, a < 0 ? -a - 2 : a), F(n3, r + 8, t2.size)), F(n3, r + 12, u2), F(n3, r + 14, h2), r += 16, o2 != null && (F(n3, r, v), F(n3, r + 6, t2.attrs), F(n3, r + 10, o2), r += 14), n3.set(e3, r), r += u2, h2)
      for (var m3 in s2) {
        var z3 = s2[m3], c2 = z3.length;
        F(n3, r, +m3), F(n3, r + 2, c2), n3.set(z3, r + 4), r += 4 + c2;
      }
    return v && (n3.set(f3, r), r += v), r;
  }, on2 = function(n3, r, t2, e3, i2) {
    F(n3, r, 101010256), F(n3, r + 8, t2), F(n3, r + 10, t2), F(n3, r + 12, e3), F(n3, r + 16, i2);
  }, Pr2 = function() {
    function n3(r) {
      this.filename = r, this.c = wr2(), this.size = 0, this.compression = 0;
    }
    return n3.prototype.process = function(r, t2) {
      this.ondata(null, r, t2);
    }, n3.prototype.push = function(r, t2) {
      this.ondata || p(5), this.c.p(r), this.size += r.length, t2 && (this.crc = this.c.d()), this.process(r, t2 || !1);
    }, n3;
  }(), lt2 = function() {
    function n3(r, t2) {
      var e3 = this;
      t2 || (t2 = {}), Pr2.call(this, r), this.d = new ir2(t2, function(i2, a) {
        e3.ondata(null, i2, a);
      }), this.compression = 8, this.flag = qn2(t2.level);
    }
    return n3.prototype.process = function(r, t2) {
      try {
        this.d.push(r, t2);
      } catch (e3) {
        this.ondata(e3, null, t2);
      }
    }, n3.prototype.push = function(r, t2) {
      Pr2.prototype.push.call(this, r, t2);
    }, n3;
  }(), ct2 = function() {
    function n3(r, t2) {
      var e3 = this;
      t2 || (t2 = {}), Pr2.call(this, r), this.d = new Qn2(t2, function(i2, a, o2) {
        e3.ondata(i2, a, o2);
      }), this.compression = 8, this.flag = qn2(t2.level), this.terminate = this.d.terminate;
    }
    return n3.prototype.process = function(r, t2) {
      this.d.push(r, t2);
    }, n3.prototype.push = function(r, t2) {
      Pr2.prototype.push.call(this, r, t2);
    }, n3;
  }(), pt2 = function() {
    function n3(r) {
      this.ondata = r, this.u = [], this.d = 1;
    }
    return n3.prototype.add = function(r) {
      var t2 = this;
      if (this.ondata || p(5), this.d & 2)
        this.ondata(p(4 + (this.d & 1) * 8, 0, 1), null, !1);
      else {
        var e3 = fr2(r.filename), i2 = e3.length, a = r.comment, o2 = a && fr2(a), f3 = i2 != r.filename.length || o2 && a.length != o2.length, u2 = i2 + ar2(r.extra) + 30;
        i2 > 65535 && this.ondata(p(11, 0, 1), null, !1);
        var s2 = new T(u2);
        cr2(s2, 0, r, e3, f3, -1);
        var v = [s2], h2 = function() {
          for (var c2 = 0, y4 = v; c2 < y4.length; c2++) {
            var M5 = y4[c2];
            t2.ondata(null, M5, !1);
          }
          v = [];
        }, g4 = this.d;
        this.d = 0;
        var x3 = this.u.length, m3 = Cr2(r, { f: e3, u: f3, o: o2, t: function() {
          r.terminate && r.terminate();
        }, r: function() {
          if (h2(), g4) {
            var c2 = t2.u[x3 + 1];
            c2 ? c2.r() : t2.d = 1;
          }
          g4 = 1;
        } }), z3 = 0;
        r.ondata = function(c2, y4, M5) {
          if (c2)
            t2.ondata(c2, y4, M5), t2.terminate();
          else if (z3 += y4.length, v.push(y4), M5) {
            var A4 = new T(16);
            F(A4, 0, 134695760), F(A4, 4, r.crc), F(A4, 8, z3), F(A4, 12, r.size), v.push(A4), m3.c = z3, m3.b = u2 + z3 + 16, m3.crc = r.crc, m3.size = r.size, g4 && m3.r(), g4 = 1;
          } else
            g4 && h2();
        }, this.u.push(m3);
      }
    }, n3.prototype.end = function() {
      var r = this;
      if (this.d & 2) {
        this.ondata(p(4 + (this.d & 1) * 8, 0, 1), null, !0);
        return;
      }
      this.d ? this.e() : this.u.push({ r: function() {
        r.d & 1 && (r.u.splice(-1, 1), r.e());
      }, t: function() {
      } }), this.d = 3;
    }, n3.prototype.e = function() {
      for (var r = 0, t2 = 0, e3 = 0, i2 = 0, a = this.u; i2 < a.length; i2++) {
        var o2 = a[i2];
        e3 += 46 + o2.f.length + ar2(o2.extra) + (o2.o ? o2.o.length : 0);
      }
      for (var f3 = new T(e3 + 22), u2 = 0, s2 = this.u; u2 < s2.length; u2++) {
        var o2 = s2[u2];
        cr2(f3, r, o2, o2.f, o2.u, -o2.c - 2, t2, o2.o), r += 46 + o2.f.length + ar2(o2.extra) + (o2.o ? o2.o.length : 0), t2 += o2.b;
      }
      on2(f3, r, this.u.length, e3, t2), this.ondata(null, f3, !0), this.d = 2;
    }, n3.prototype.terminate = function() {
      for (var r = 0, t2 = this.u; r < t2.length; r++) {
        var e3 = t2[r];
        e3.t();
      }
      this.d = 2;
    }, n3;
  }();
  var nt = function() {
    function n3() {
    }
    return n3.prototype.push = function(r, t2) {
      this.ondata(null, r, t2);
    }, n3.compression = 0, n3;
  }(), wt2 = function() {
    function n3() {
      var r = this;
      this.i = new J(function(t2, e3) {
        r.ondata(null, t2, e3);
      });
    }
    return n3.prototype.push = function(r, t2) {
      try {
        this.i.push(r, t2);
      } catch (e3) {
        this.ondata(e3, null, t2);
      }
    }, n3.compression = 8, n3;
  }(), mt2 = function() {
    function n3(r, t2) {
      var e3 = this;
      t2 < 32e4 ? this.i = new J(function(i2, a) {
        e3.ondata(null, i2, a);
      }) : (this.i = new Ln2(function(i2, a, o2) {
        e3.ondata(i2, a, o2);
      }), this.terminate = this.i.terminate);
    }
    return n3.prototype.push = function(r, t2) {
      this.i.terminate && (r = X2(r, 0)), this.i.push(r, t2);
    }, n3.compression = 8, n3;
  }(), xt2 = function() {
    function n3(r) {
      this.onfile = r, this.k = [], this.o = { 0: nt }, this.p = tr2;
    }
    return n3.prototype.push = function(r, t2) {
      var e3 = this;
      if (this.onfile || p(5), this.p || p(4), this.c > 0) {
        var i2 = Math.min(this.c, r.length), a = r.subarray(0, i2);
        if (this.c -= i2, this.d ? this.d.push(a, !this.c) : this.k[0].push(a), r = r.subarray(i2), r.length)
          return this.push(r, t2);
      } else {
        var o2 = 0, f3 = 0, u2 = void 0, s2 = void 0;
        this.p.length ? r.length ? (s2 = new T(this.p.length + r.length), s2.set(this.p), s2.set(r, this.p.length)) : s2 = this.p : s2 = r;
        for (var v = s2.length, h2 = this.c, g4 = h2 && this.d, x3 = function() {
          var y4, M5 = P(s2, f3);
          if (M5 == 67324752) {
            o2 = 1, u2 = f3, m3.d = null, m3.c = 0;
            var A4 = Y2(s2, f3 + 6), w4 = Y2(s2, f3 + 8), I4 = A4 & 2048, S6 = A4 & 8, U5 = Y2(s2, f3 + 26), l2 = Y2(s2, f3 + 28);
            if (v > f3 + 30 + U5 + l2) {
              var k4 = [];
              m3.k.unshift(k4), o2 = 2;
              var D5 = P(s2, f3 + 18), N5 = P(s2, f3 + 22), B6 = $n2(s2.subarray(f3 + 30, f3 += 30 + U5), !I4);
              D5 == 4294967295 ? (y4 = S6 ? [-2] : Wn2(s2, f3), D5 = y4[0], N5 = y4[1]) : S6 && (D5 = -1), f3 += l2, m3.c = D5;
              var G5, E2 = { name: B6, compression: w4, start: function() {
                if (E2.ondata || p(5), !D5)
                  E2.ondata(null, tr2, !0);
                else {
                  var L4 = e3.o[w4];
                  L4 || E2.ondata(p(14, "unknown compression type " + w4, 1), null, !1), G5 = D5 < 0 ? new L4(B6) : new L4(B6, D5, N5), G5.ondata = function(W6, K5, H5) {
                    E2.ondata(W6, K5, H5);
                  };
                  for (var Z5 = 0, O4 = k4; Z5 < O4.length; Z5++) {
                    var q5 = O4[Z5];
                    G5.push(q5, !1);
                  }
                  e3.k[0] == k4 && e3.c ? e3.d = G5 : G5.push(tr2, !0);
                }
              }, terminate: function() {
                G5 && G5.terminate && G5.terminate();
              } };
              D5 >= 0 && (E2.size = D5, E2.originalSize = N5), m3.onfile(E2);
            }
            return "break";
          } else if (h2) {
            if (M5 == 134695760)
              return u2 = f3 += 12 + (h2 == -2 && 8), o2 = 3, m3.c = 0, "break";
            if (M5 == 33639248)
              return u2 = f3 -= 4, o2 = 3, m3.c = 0, "break";
          }
        }, m3 = this; f3 < v - 4; ++f3) {
          var z3 = x3();
          if (z3 === "break")
            break;
        }
        if (this.p = tr2, h2 < 0) {
          var c2 = o2 ? s2.subarray(0, u2 - 12 - (h2 == -2 && 8) - (P(s2, u2 - 16) == 134695760 && 4)) : s2.subarray(0, f3);
          g4 ? g4.push(c2, !!o2) : this.k[+(o2 == 2)].push(c2);
        }
        if (o2 & 2)
          return this.push(s2.subarray(f3), t2);
        this.p = s2.subarray(f3);
      }
      t2 && (this.c && p(13), this.p = null);
    }, n3.prototype.register = function(r) {
      this.o[r.compression] = r;
    }, n3;
  }();

  // https://esm.sh/v117/@twind/core@1.0.1/deno/core.mjs
  var F2;
  function lt3(t2) {
    return [...t2.v, (t2.i ? "!" : "") + t2.n].join(":");
  }
  function st2(t2, e3 = ",") {
    return t2.map(lt3).join(e3);
  }
  var W2 = typeof CSS < "u" && CSS.escape || ((t2) => t2.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function V2(t2) {
    for (var e3 = 9, r = t2.length; r--; )
      e3 = Math.imul(e3 ^ t2.charCodeAt(r), 1597334677);
    return "#" + ((e3 ^ e3 >>> 9) >>> 0).toString(36);
  }
  function kt2(t2, e3 = "@media ") {
    return e3 + x(t2).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((n3) => `(${n3}-width:${r[n3]})`).join(" and "))).join(",");
  }
  function x(t2 = []) {
    return Array.isArray(t2) ? t2 : t2 == null ? [] : [t2];
  }
  function D() {
  }
  var w = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function jt2(t2) {
    var e3;
    return ((e3 = t2.match(/[-=:;]/g)) == null ? void 0 : e3.length) || 0;
  }
  function X3(t2) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t2) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt2(t2), 15) << 18;
  }
  var qt2 = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function at3({ n: t2, i: e3, v: r = [] }, n3, i2, l2) {
    for (let a of (t2 && (t2 = lt3({ n: t2, i: e3, v: r })), l2 = [...x(l2)], r)) {
      let s2 = n3.theme("screens", a);
      for (let u2 of x(s2 && kt2(s2) || n3.v(a))) {
        var o2;
        l2.push(u2), i2 |= s2 ? 67108864 | X3(u2) : a == "dark" ? 1073741824 : u2[0] == "@" ? X3(u2) : (o2 = u2, 1 << ~(/:([a-z-]+)/.test(o2) && ~qt2.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: t2, p: i2, r: l2, i: e3 };
  }
  var ut2 = /* @__PURE__ */ new Map();
  function tt2(t2) {
    if (t2.d) {
      let e3 = [], r = Y3(t2.r.reduce((n3, i2) => i2[0] == "@" ? (e3.push(i2), n3) : i2 ? Y3(n3, (l2) => Y3(i2, (o2) => {
        let a = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o2);
        if (a) {
          let s2 = l2.indexOf(a[1]);
          return ~s2 ? l2.slice(0, s2) + a[0] + l2.slice(s2 + a[1].length) : Z(l2, o2);
        }
        return Z(o2, l2);
      })) : n3, "&"), (n3) => Z(n3, t2.n ? "." + W2(t2.n) : ""));
      return r && e3.push(r.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i2) => i2 + "{" + n3 + "}", t2.d);
    }
  }
  function Y3(t2, e3) {
    return t2.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, n3, i2) => e3(n3) + i2);
  }
  function Z(t2, e3) {
    return t2.replace(/&/g, e3);
  }
  var Dt2 = new Intl.Collator("en", { numeric: !0 });
  function St2(t2, e3) {
    for (var r = 0, n3 = t2.length; r < n3; ) {
      let i2 = n3 + r >> 1;
      0 >= Mt2(t2[i2], e3) ? r = i2 + 1 : n3 = i2;
    }
    return n3;
  }
  function Mt2(t2, e3) {
    let r = t2.p & w.o;
    return r == (e3.p & w.o) && (r == w.b || r == w.o) ? 0 : t2.p - e3.p || t2.o - e3.o || Dt2.compare(t2.n, e3.n);
  }
  function H(t2, e3) {
    return Math.round(parseInt(t2, 16) * e3);
  }
  function T2(t2, e3 = {}) {
    if (typeof t2 == "function")
      return t2(e3);
    let { opacityValue: r = "1", opacityVariable: n3 } = e3, i2 = n3 ? `var(${n3})` : r;
    if (t2.includes("<alpha-value>"))
      return t2.replace("<alpha-value>", i2);
    if (t2[0] == "#" && (t2.length == 4 || t2.length == 7)) {
      let l2 = (t2.length - 1) / 3, o2 = [17, 1, 0.062272][l2 - 1];
      return `rgba(${[H(t2.substr(1, l2), o2), H(t2.substr(1 + l2, l2), o2), H(t2.substr(1 + 2 * l2, l2), o2), i2]})`;
    }
    return i2 == "1" ? t2 : i2 == "0" ? "#0000" : t2.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i2})`);
  }
  function ct3(t2, e3, r, n3, i2 = []) {
    return function l2(o2, { n: a, p: s2, r: u2 = [], i: f3 }, c2) {
      let p4 = [], d5 = "", v = 0, g4 = 0;
      for (let h2 in o2 || {}) {
        var y4, A4;
        let b4 = o2[h2];
        if (h2[0] == "@") {
          if (!b4)
            continue;
          if (h2[1] == "a") {
            p4.push(...ht3(a, s2, N("" + b4), c2, s2, u2, f3, !0));
            continue;
          }
          if (h2[1] == "l") {
            for (let m3 of x(b4))
              p4.push(...l2(m3, { n: a, p: (y4 = w[h2[7]], s2 & ~w.o | y4), r: u2, i: f3 }, c2));
            continue;
          }
          if (h2[1] == "i") {
            p4.push(...x(b4).map((m3) => ({ p: -1, o: 0, r: [], d: h2 + " " + m3 })));
            continue;
          }
          if (h2[1] == "k") {
            p4.push({ p: w.d, o: 0, r: [h2], d: l2(b4, { p: w.d }, c2).map(tt2).join("") });
            continue;
          }
          if (h2[1] == "f") {
            p4.push(...x(b4).map((m3) => ({ p: w.d, o: 0, r: [h2], d: l2(m3, { p: w.d }, c2).map(tt2).join("") })));
            continue;
          }
        }
        if (typeof b4 != "object" || Array.isArray(b4))
          h2 == "label" && b4 ? a = b4 + V2(JSON.stringify([s2, f3, o2])) : (b4 || b4 === 0) && (h2 = h2.replace(/[A-Z]/g, (m3) => "-" + m3.toLowerCase()), g4 += 1, v = Math.max(v, (A4 = h2)[0] == "-" ? 0 : jt2(A4) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A4) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d5 += (d5 ? ";" : "") + x(b4).map((m3) => c2.s(h2, ft3("" + m3, c2.theme) + (f3 ? " !important" : ""))).join(";"));
        else if (h2[0] == "@" || h2.includes("&")) {
          let m3 = s2;
          h2[0] == "@" && (h2 = h2.replace(/\bscreen\(([^)]+)\)/g, (C5, $6) => {
            let j5 = c2.theme("screens", $6);
            return j5 ? (m3 |= 67108864, kt2(j5, "")) : C5;
          }), m3 |= X3(h2)), p4.push(...l2(b4, { n: a, p: m3, r: [...u2, h2], i: f3 }, c2));
        } else
          p4.push(...l2(b4, { p: s2, r: [...u2, h2] }, c2));
      }
      return p4.unshift({ n: a, p: s2, o: Math.max(0, 15 - g4) + 1.5 * Math.min(v || 15, 15), r: u2, d: d5 }), p4.sort(Mt2);
    }(t2, at3(e3, r, n3, i2), r);
  }
  function ft3(t2, e3) {
    return t2.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, n3, i2, l2, o2) => {
      let a = e3(i2, o2);
      return typeof a == "function" && /color|fill|stroke/i.test(i2) ? T2(a) : "" + a;
    });
  }
  function pt3(t2, e3) {
    let r, n3 = [];
    for (let i2 of t2)
      i2.d && i2.n ? r?.p == i2.p && "" + r.r == "" + i2.r ? (r.c = [r.c, i2.c].filter(Boolean).join(" "), r.d = r.d + ";" + i2.d) : n3.push(r = { ...i2, n: i2.n && e3 }) : n3.push({ ...i2, n: i2.n && e3 });
    return n3;
  }
  function B(t2, e3, r = w.u, n3, i2) {
    let l2 = [];
    for (let o2 of t2)
      for (let a of function(s2, u2, f3, c2, p4) {
        var d5;
        s2 = { ...s2, i: s2.i || p4 };
        let v = function(g4, y4) {
          let A4 = ut2.get(g4.n);
          return A4 ? A4(g4, y4) : y4.r(g4.n, g4.v[0] == "dark");
        }(s2, u2);
        return v ? typeof v == "string" ? ({ r: c2, p: f3 } = at3(s2, u2, f3, c2), pt3(B(N(v), u2, f3, c2, s2.i), s2.n)) : Array.isArray(v) ? v.map((g4) => {
          var y4, A4;
          return { o: 0, ...g4, r: [...x(c2), ...x(g4.r)], p: (y4 = f3, A4 = (d5 = g4.p) != null ? d5 : f3, y4 & ~w.o | A4) };
        }) : ct3(v, s2, u2, f3, c2) : [{ c: lt3(s2), p: 0, o: 0, r: [] }];
      }(o2, e3, r, n3, i2))
        l2.splice(St2(l2, a), 0, a);
    return l2;
  }
  function ht3(t2, e3, r, n3, i2, l2, o2, a) {
    return pt3((a ? r.flatMap((s2) => B([s2], n3, i2, l2, o2)) : B(r, n3, i2, l2, o2)).map((s2) => s2.p & w.o && (s2.n || e3 == w.b) ? { ...s2, p: s2.p & ~w.o | e3, o: 0 } : s2), t2);
  }
  function Ot2(t2, e3, r, n3) {
    var i2;
    return i2 = (l2, o2) => {
      let { n: a, p: s2, r: u2, i: f3 } = at3(l2, o2, e3);
      return r && ht3(a, e3, r, o2, s2, u2, f3, n3);
    }, ut2.set(t2, i2), t2;
  }
  function K(t2, e3) {
    if (t2[t2.length - 1] != "(") {
      let r = [], n3 = !1, i2 = !1, l2 = "";
      for (let o2 of t2)
        if (!(o2 == "(" || /[~@]$/.test(o2))) {
          if (o2[0] == "!" && (o2 = o2.slice(1), n3 = !n3), o2.endsWith(":")) {
            r[o2 == "dark:" ? "unshift" : "push"](o2.slice(0, -1));
            continue;
          }
          o2[0] == "-" && (o2 = o2.slice(1), i2 = !i2), o2.endsWith("-") && (o2 = o2.slice(0, -1)), o2 && o2 != "&" && (l2 += (l2 && "-") + o2);
        }
      l2 && (i2 && (l2 = "-" + l2), e3[0].push({ n: l2, v: r.filter(Jt2), i: n3 }));
    }
  }
  function Jt2(t2, e3, r) {
    return r.indexOf(t2) == e3;
  }
  var yt2 = /* @__PURE__ */ new Map();
  function N(t2) {
    let e3 = yt2.get(t2);
    if (!e3) {
      let r = [], n3 = [[]], i2 = 0, l2 = 0, o2 = null, a = 0, s2 = (u2, f3 = 0) => {
        i2 != a && (r.push(t2.slice(i2, a + f3)), u2 && K(r, n3)), i2 = a + 1;
      };
      for (; a < t2.length; a++) {
        let u2 = t2[a];
        if (l2)
          t2[a - 1] != "\\" && (l2 += +(u2 == "[") || -(u2 == "]"));
        else if (u2 == "[")
          l2 += 1;
        else if (o2)
          t2[a - 1] != "\\" && o2.test(t2.slice(a)) && (o2 = null, i2 = a + RegExp.lastMatch.length);
        else if (u2 == "/" && t2[a - 1] != "\\" && (t2[a + 1] == "*" || t2[a + 1] == "/"))
          o2 = t2[a + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (u2 == "(")
          s2(), r.push(u2);
        else if (u2 == ":")
          t2[a + 1] != ":" && s2(!1, 1);
        else if (/[\s,)]/.test(u2)) {
          s2(!0);
          let f3 = r.lastIndexOf("(");
          if (u2 == ")") {
            let c2 = r[f3 - 1];
            if (/[~@]$/.test(c2)) {
              let p4 = n3.shift();
              r.length = f3, K([...r, "#"], n3);
              let { v: d5 } = n3[0].pop();
              for (let v of p4)
                v.v.splice(+(v.v[0] == "dark") - +(d5[0] == "dark"), d5.length);
              K([...r, Ot2(c2.length > 1 ? c2.slice(0, -1) + V2(JSON.stringify([c2, p4])) : c2 + "(" + st2(p4) + ")", w.a, p4, /@$/.test(c2))], n3);
            }
            f3 = r.lastIndexOf("(", f3 - 1);
          }
          r.length = f3 + 1;
        } else
          /[~@]/.test(u2) && t2[a + 1] == "(" && n3.unshift([]);
      }
      s2(!0), yt2.set(t2, e3 = n3[0]);
    }
    return e3;
  }
  function Ct2(t2, e3, r) {
    return e3.reduce((n3, i2, l2) => n3 + r(i2) + t2[l2 + 1], t2[0]);
  }
  function G(t2, e3) {
    return Array.isArray(t2) && Array.isArray(t2.raw) ? Ct2(t2, e3, (r) => Q3(r).trim()) : e3.filter(Boolean).reduce((r, n3) => r + Q3(n3), t2 ? Q3(t2) : "");
  }
  function Q3(t2) {
    let e3, r = "";
    if (t2 && typeof t2 == "object")
      if (Array.isArray(t2))
        (e3 = G(t2[0], t2.slice(1))) && (r += " " + e3);
      else
        for (let n3 in t2)
          t2[n3] && (r += " " + n3);
    else
      t2 != null && typeof t2 != "boolean" && (r += " " + t2);
    return r;
  }
  var ae = Et2("@"), ue2 = Et2("~");
  function Et2(t2) {
    return new Proxy(function(r, ...n3) {
      return e3("", r, n3);
    }, { get: (r, n3) => n3 in r ? r[n3] : function(i2, ...l2) {
      return e3(n3, i2, l2);
    } });
    function e3(r, n3, i2) {
      return st2(N(r + t2 + "(" + G(n3, i2) + ")"));
    }
  }
  function U(t2, e3) {
    return Array.isArray(t2) ? mt3(Ct2(t2, e3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof t2 == "string" ? mt3(t2) : [t2];
  }
  var Bt2 = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function mt3(t2) {
    let e3;
    t2 = t2.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r = [{}], n3 = [r[0]], i2 = [];
    for (; e3 = Bt2.exec(t2); )
      e3[4] && (r.shift(), i2.shift()), e3[3] ? (i2.unshift(e3[3]), r.unshift({}), n3.push(i2.reduce((l2, o2) => ({ [o2]: l2 }), r[0]))) : e3[4] || (r[0][e3[1]] && (r.unshift({}), n3.push(i2.reduce((l2, o2) => ({ [o2]: l2 }), r[0]))), r[0][e3[1]] = e3[2]);
    return n3;
  }
  function dt2(t2, ...e3) {
    var r, n3;
    let i2 = U(t2, e3), l2 = (((r = i2.find((o2) => o2.label)) == null ? void 0 : r.label) || "css") + V2(JSON.stringify(i2));
    return n3 = (o2, a) => pt3(i2.flatMap((s2) => ct3(s2, o2, a, w.o)), l2), ut2.set(l2, n3), l2;
  }
  var ce = new Proxy(function(t2, e3) {
    return bt2("animation", t2, e3);
  }, { get: (t2, e3) => e3 in t2 ? t2[e3] : function(r, n3) {
    return bt2(e3, r, n3);
  } });
  function bt2(t2, e3, r) {
    return { toString: () => dt2({ label: t2, "@layer components": { ...typeof e3 == "object" ? e3 : { animation: e3 }, animationName: "" + r } }) };
  }
  var Ut2 = Symbol();
  var z = new Proxy(D, { apply: (t2, e3, r) => F2(r[0]), get(t2, e3) {
    let r = F2[e3];
    return typeof r == "function" ? function() {
      return r.apply(F2, arguments);
    } : r;
  } });
  var xe2 = function t(e3) {
    return new Proxy(function(r, ...n3) {
      return xt3(e3, "", r, n3);
    }, { get: (r, n3) => n3 === "bind" ? t : n3 in r ? r[n3] : function(i2, ...l2) {
      return xt3(e3, n3, i2, l2);
    } });
  }();
  function xt3(t2, e3, r, n3) {
    return { toString() {
      let i2 = U(r, n3), l2 = W2(e3 + V2(JSON.stringify([e3, i2])));
      return (typeof t2 == "function" ? t2 : z)(dt2({ [`@keyframes ${l2}`]: U(r, n3) })), l2;
    } };
  }

  // https://esm.sh/v117/@twind/core@1.1.3/deno/core.mjs
  var B2;
  function ae2(e3) {
    return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
  }
  function ue3(e3, t2 = ",") {
    return e3.map(ae2).join(t2);
  }
  var Y4 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function T3(e3) {
    for (var t2 = 9, r = e3.length; r--; )
      t2 = Math.imul(t2 ^ e3.charCodeAt(r), 1597334677);
    return "#" + ((t2 ^ t2 >>> 9) >>> 0).toString(36);
  }
  function Ce2(e3, t2 = "@media ") {
    return t2 + b(e3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((i2) => `(${i2}-width:${r[i2]})`).join(" and "))).join(",");
  }
  function b(e3 = []) {
    return Array.isArray(e3) ? e3 : e3 == null ? [] : [e3];
  }
  function F3() {
  }
  var S = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function Ee(e3) {
    return e3.match(/[-=:;]/g)?.length || 0;
  }
  function re(e3) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
  }
  var Ue2 = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function ce2({ n: e3, i: t2, v: r = [] }, i2, n3, l2) {
    e3 && (e3 = ae2({ n: e3, i: t2, v: r })), l2 = [...b(l2)];
    for (let s2 of r) {
      let f3 = i2.theme("screens", s2);
      for (let a of b(f3 && Ce2(f3) || i2.v(s2))) {
        var o2;
        l2.push(a), n3 |= f3 ? 67108864 | re(a) : s2 == "dark" ? 1073741824 : a[0] == "@" ? re(a) : (o2 = a, 1 << ~(/:([a-z-]+)/.test(o2) && ~Ue2.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: e3, p: n3, r: l2, i: t2 };
  }
  var pe2 = /* @__PURE__ */ new Map();
  function ne(e3) {
    if (e3.d) {
      let t2 = [], r = H2(e3.r.reduce((i2, n3) => n3[0] == "@" ? (t2.push(n3), i2) : n3 ? H2(i2, (l2) => H2(n3, (o2) => {
        let s2 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o2);
        if (s2) {
          let f3 = l2.indexOf(s2[1]);
          return ~f3 ? l2.slice(0, f3) + s2[0] + l2.slice(f3 + s2[1].length) : Q4(l2, o2);
        }
        return Q4(o2, l2);
      })) : i2, "&"), (i2) => Q4(i2, e3.n ? "." + Y4(e3.n) : ""));
      return r && t2.push(r.replace(/:merge\((.+?)\)/g, "$1")), t2.reduceRight((i2, n3) => n3 + "{" + i2 + "}", e3.d);
    }
  }
  function H2(e3, t2) {
    return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, i2, n3) => t2(i2) + n3);
  }
  function Q4(e3, t2) {
    return e3.replace(/&/g, t2);
  }
  var $e2 = new Intl.Collator("en", { numeric: !0 });
  function Me2(e3, t2) {
    for (var r = 0, i2 = e3.length; r < i2; ) {
      let n3 = i2 + r >> 1;
      0 >= Ne(e3[n3], t2) ? r = n3 + 1 : i2 = n3;
    }
    return i2;
  }
  function Ne(e3, t2) {
    let r = e3.p & S.o;
    return r == (t2.p & S.o) && (r == S.b || r == S.o) ? 0 : e3.p - t2.p || e3.o - t2.o || $e2.compare(we(e3.n), we(t2.n)) || $e2.compare(Ae2(e3.n), Ae2(t2.n));
  }
  function we(e3) {
    return (e3 || "").split(/:/).pop().split("/").pop() || "\0";
  }
  function Ae2(e3) {
    return (e3 || "").replace(/\W/g, (t2) => String.fromCharCode(127 + t2.charCodeAt(0))) + "\0";
  }
  function X4(e3, t2) {
    return Math.round(parseInt(e3, 16) * t2);
  }
  function P2(e3, t2 = {}) {
    if (typeof e3 == "function")
      return e3(t2);
    let { opacityValue: r = "1", opacityVariable: i2 } = t2, n3 = i2 ? `var(${i2})` : r;
    if (e3.includes("<alpha-value>"))
      return e3.replace("<alpha-value>", n3);
    if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
      let l2 = (e3.length - 1) / 3, o2 = [17, 1, 0.062272][l2 - 1];
      return `rgba(${[X4(e3.substr(1, l2), o2), X4(e3.substr(1 + l2, l2), o2), X4(e3.substr(1 + 2 * l2, l2), o2), n3]})`;
    }
    return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
  }
  function de(e3, t2, r, i2, n3 = []) {
    return function l2(o2, { n: s2, p: f3, r: a = [], i: c2 }, u2) {
      let p4 = [], g4 = "", y4 = 0, $6 = 0;
      for (let h2 in o2 || {}) {
        var A4, R3;
        let d5 = o2[h2];
        if (h2[0] == "@") {
          if (!d5)
            continue;
          if (h2[1] == "a") {
            p4.push(...ge2(s2, f3, I("" + d5), u2, f3, a, c2, !0));
            continue;
          }
          if (h2[1] == "l") {
            for (let w4 of b(d5))
              p4.push(...l2(w4, { n: s2, p: (A4 = S[h2[7]], f3 & ~S.o | A4), r: h2[7] == "d" ? [] : a, i: c2 }, u2));
            continue;
          }
          if (h2[1] == "i") {
            p4.push(...b(d5).map((w4) => ({ p: -1, o: 0, r: [], d: h2 + " " + w4 })));
            continue;
          }
          if (h2[1] == "k") {
            p4.push({ p: S.d, o: 0, r: [h2], d: l2(d5, { p: S.d }, u2).map(ne).join("") });
            continue;
          }
          if (h2[1] == "f") {
            p4.push(...b(d5).map((w4) => ({ p: S.d, o: 0, r: [h2], d: l2(w4, { p: S.d }, u2).map(ne).join("") })));
            continue;
          }
        }
        if (typeof d5 != "object" || Array.isArray(d5))
          h2 == "label" && d5 ? s2 = d5 + T3(JSON.stringify([f3, c2, o2])) : (d5 || d5 === 0) && (h2 = h2.replace(/[A-Z]/g, (w4) => "-" + w4.toLowerCase()), $6 += 1, y4 = Math.max(y4, (R3 = h2)[0] == "-" ? 0 : Ee(R3) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R3) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g4 += (g4 ? ";" : "") + b(d5).map((w4) => u2.s(h2, he2("" + w4, u2.theme) + (c2 ? " !important" : ""))).join(";"));
        else if (h2[0] == "@" || h2.includes("&")) {
          let w4 = f3;
          h2[0] == "@" && (h2 = h2.replace(/\bscreen\(([^)]+)\)/g, (x3, M5) => {
            let N5 = u2.theme("screens", M5);
            return N5 ? (w4 |= 67108864, Ce2(N5, "")) : x3;
          }), w4 |= re(h2)), p4.push(...l2(d5, { n: s2, p: w4, r: [...a, h2], i: c2 }, u2));
        } else
          p4.push(...l2(d5, { p: f3, r: [...a, h2] }, u2));
      }
      return p4.unshift({ n: s2, p: f3, o: Math.max(0, 15 - $6) + 1.5 * Math.min(y4 || 15, 15), r: a, d: g4 }), p4.sort(Ne);
    }(e3, ce2(t2, r, i2, n3), r);
  }
  function he2(e3, t2) {
    return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, i2, n3, l2, o2 = "") => {
      let s2 = t2(n3, o2);
      return typeof s2 == "function" && /color|fill|stroke/i.test(n3) ? P2(s2) : "" + b(s2).filter((f3) => Object(f3) !== f3);
    });
  }
  function ye(e3, t2) {
    let r, i2 = [];
    for (let n3 of e3)
      n3.d && n3.n ? r?.p == n3.p && "" + r.r == "" + n3.r ? (r.c = [r.c, n3.c].filter(Boolean).join(" "), r.d = r.d + ";" + n3.d) : i2.push(r = { ...n3, n: n3.n && t2 }) : i2.push({ ...n3, n: n3.n && t2 });
    return i2;
  }
  function W3(e3, t2, r = S.u, i2, n3) {
    let l2 = [];
    for (let o2 of e3)
      for (let s2 of function(f3, a, c2, u2, p4) {
        f3 = { ...f3, i: f3.i || p4 };
        let g4 = function(y4, $6) {
          let A4 = pe2.get(y4.n);
          return A4 ? A4(y4, $6) : $6.r(y4.n, y4.v[0] == "dark");
        }(f3, a);
        return g4 ? typeof g4 == "string" ? ({ r: u2, p: c2 } = ce2(f3, a, c2, u2), ye(W3(I(g4), a, c2, u2, f3.i), f3.n)) : Array.isArray(g4) ? g4.map((y4) => {
          var $6, A4;
          return { o: 0, ...y4, r: [...b(u2), ...b(y4.r)], p: ($6 = c2, A4 = y4.p ?? c2, $6 & ~S.o | A4) };
        }) : de(g4, f3, a, c2, u2) : [{ c: ae2(f3), p: 0, o: 0, r: [] }];
      }(o2, t2, r, i2, n3))
        l2.splice(Me2(l2, s2), 0, s2);
    return l2;
  }
  function ge2(e3, t2, r, i2, n3, l2, o2, s2) {
    return ye((s2 ? r.flatMap((f3) => W3([f3], i2, n3, l2, o2)) : W3(r, i2, n3, l2, o2)).map((f3) => f3.p & S.o && (f3.n || t2 == S.b) ? { ...f3, p: f3.p & ~S.o | t2, o: 0 } : f3), e3);
  }
  function _e2(e3, t2, r, i2) {
    var n3;
    return n3 = (l2, o2) => {
      let { n: s2, p: f3, r: a, i: c2 } = ce2(l2, o2, t2);
      return r && ge2(s2, t2, r, o2, f3, a, c2, i2);
    }, pe2.set(e3, n3), e3;
  }
  function K2(e3, t2, r) {
    if (e3[e3.length - 1] != "(") {
      let i2 = [], n3 = !1, l2 = !1, o2 = "";
      for (let s2 of e3)
        if (!(s2 == "(" || /[~@]$/.test(s2))) {
          if (s2[0] == "!" && (s2 = s2.slice(1), n3 = !n3), s2.endsWith(":")) {
            i2[s2 == "dark:" ? "unshift" : "push"](s2.slice(0, -1));
            continue;
          }
          s2[0] == "-" && (s2 = s2.slice(1), l2 = !l2), s2.endsWith("-") && (s2 = s2.slice(0, -1)), s2 && s2 != "&" && (o2 += (o2 && "-") + s2);
        }
      o2 && (l2 && (o2 = "-" + o2), t2[0].push({ n: o2, v: i2.filter(Be2), i: n3 }));
    }
  }
  function Be2(e3, t2, r) {
    return r.indexOf(e3) == t2;
  }
  var Se = /* @__PURE__ */ new Map();
  function I(e3) {
    let t2 = Se.get(e3);
    if (!t2) {
      let r = [], i2 = [[]], n3 = 0, l2 = 0, o2 = null, s2 = 0, f3 = (a, c2 = 0) => {
        n3 != s2 && (r.push(e3.slice(n3, s2 + c2)), a && K2(r, i2)), n3 = s2 + 1;
      };
      for (; s2 < e3.length; s2++) {
        let a = e3[s2];
        if (l2)
          e3[s2 - 1] != "\\" && (l2 += +(a == "[") || -(a == "]"));
        else if (a == "[")
          l2 += 1;
        else if (o2)
          e3[s2 - 1] != "\\" && o2.test(e3.slice(s2)) && (o2 = null, n3 = s2 + RegExp.lastMatch.length);
        else if (a == "/" && e3[s2 - 1] != "\\" && (e3[s2 + 1] == "*" || e3[s2 + 1] == "/"))
          o2 = e3[s2 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (a == "(")
          f3(), r.push(a);
        else if (a == ":")
          e3[s2 + 1] != ":" && f3(!1, 1);
        else if (/[\s,)]/.test(a)) {
          f3(!0);
          let c2 = r.lastIndexOf("(");
          if (a == ")") {
            let u2 = r[c2 - 1];
            if (/[~@]$/.test(u2)) {
              let p4 = i2.shift();
              r.length = c2, K2([...r, "#"], i2);
              let { v: g4 } = i2[0].pop();
              for (let y4 of p4)
                y4.v.splice(+(y4.v[0] == "dark") - +(g4[0] == "dark"), g4.length);
              K2([...r, _e2(u2.length > 1 ? u2.slice(0, -1) + T3(JSON.stringify([u2, p4])) : u2 + "(" + ue3(p4) + ")", S.a, p4, /@$/.test(u2))], i2);
            }
            c2 = r.lastIndexOf("(", c2 - 1);
          }
          r.length = c2 + 1;
        } else
          /[~@]/.test(a) && e3[s2 + 1] == "(" && i2.unshift([]);
      }
      f3(!0), Se.set(e3, t2 = i2[0]);
    }
    return t2;
  }
  function Ve2(e3, t2, r) {
    return t2.reduce((i2, n3, l2) => i2 + r(n3) + e3[l2 + 1], e3[0]);
  }
  function Z2(e3, t2) {
    return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve2(e3, t2, (r) => ee(r).trim()) : t2.filter(Boolean).reduce((r, i2) => r + ee(i2), e3 ? ee(e3) : "");
  }
  function ee(e3) {
    let t2, r = "";
    if (e3 && typeof e3 == "object")
      if (Array.isArray(e3))
        (t2 = Z2(e3[0], e3.slice(1))) && (r += " " + t2);
      else
        for (let i2 in e3)
          e3[i2] && (r += " " + i2);
    else
      e3 != null && typeof e3 != "boolean" && (r += " " + e3);
    return r;
  }
  var pt4 = ze2("@"), dt3 = ze2("~");
  function ze2(e3) {
    return new Proxy(function(i2, ...n3) {
      return t2("", i2, n3);
    }, { get(r, i2) {
      return i2 in r ? r[i2] : function(l2, ...o2) {
        return t2(i2, l2, o2);
      };
    } });
    function t2(r, i2, n3) {
      return ue3(I(r + e3 + "(" + Z2(i2, n3) + ")"));
    }
  }
  function G2(e3, t2) {
    return Array.isArray(e3) ? ve2(Ve2(e3, t2, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof e3 == "string" ? ve2(e3) : [e3];
  }
  var We2 = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function ve2(e3) {
    let t2;
    e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r = [{}], i2 = [r[0]], n3 = [];
    for (; t2 = We2.exec(e3); )
      t2[4] && (r.shift(), n3.shift()), t2[3] ? (n3.unshift(t2[3]), r.unshift({}), i2.push(n3.reduce((l2, o2) => ({ [o2]: l2 }), r[0]))) : t2[4] || (r[0][t2[1]] && (r.unshift({}), i2.push(n3.reduce((l2, o2) => ({ [o2]: l2 }), r[0]))), r[0][t2[1]] = t2[2]);
    return i2;
  }
  function me(e3, ...t2) {
    var r;
    let i2 = G2(e3, t2), n3 = (i2.find((l2) => l2.label)?.label || "css") + T3(JSON.stringify(i2));
    return r = (l2, o2) => ye(i2.flatMap((s2) => de(s2, l2, o2, S.o)), n3), pe2.set(n3, r), n3;
  }
  var ht4 = new Proxy(function(e3, t2) {
    return Re("animation", e3, t2);
  }, { get(e3, t2) {
    return t2 in e3 ? e3[t2] : function(i2, n3) {
      return Re(t2, i2, n3);
    };
  } });
  function Re(e3, t2, r) {
    return { toString() {
      return me({ label: e3, "@layer components": { ...typeof t2 == "object" ? t2 : { animation: t2 }, animationName: "" + r } });
    } };
  }
  function yt3(e3, t2, r) {
    return [e3, ie2(t2, r)];
  }
  function ie2(e3, t2) {
    return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r, i2) => ({ [e3]: t2 ? t2(r, i2) : le(r, 1) }) : (r) => e3 || { [r[1]]: le(r, 2) };
  }
  function le(e3, t2, r = e3.slice(t2).find(Boolean) || e3.$$ || e3.input) {
    return e3.input[0] == "-" ? `calc(${r} * -1)` : r;
  }
  function gt2(e3, t2, r, i2) {
    return [e3, Ge2(t2, r, i2)];
  }
  function Ge2(e3, t2, r) {
    let i2 = typeof t2 == "string" ? (n3, l2) => ({ [t2]: r ? r(n3, l2) : n3._ }) : t2 || (({ 1: n3, _: l2 }, o2, s2) => ({ [n3 || s2]: l2 }));
    return (n3, l2) => {
      let o2 = ke(e3 || n3[1]), s2 = l2.theme(o2, n3.$$) ?? oe2(n3.$$, o2, l2);
      if (s2 != null)
        return n3._ = le(n3, 0, s2), i2(n3, l2, o2);
    };
  }
  function mt4(e3, t2 = {}, r) {
    return [e3, Ye2(t2, r)];
  }
  function Ye2(e3 = {}, t2) {
    return (r, i2) => {
      let { section: n3 = ke(r[0]).replace("-", "") + "Color" } = e3, [l2, o2] = Ze2(r.$$);
      if (!l2)
        return;
      let s2 = i2.theme(n3, l2) || oe2(l2, n3, i2);
      if (!s2 || typeof s2 == "object")
        return;
      let { opacityVariable: f3 = `--tw-${r[0].replace(/-$/, "")}-opacity`, opacitySection: a = n3.replace("Color", "Opacity"), property: c2 = n3, selector: u2 } = e3, p4 = i2.theme(a, o2 || "DEFAULT") || o2 && oe2(o2, a, i2), g4 = t2 || (({ _: $6 }) => {
        let A4 = He(c2, $6);
        return u2 ? { [u2]: A4 } : A4;
      });
      r._ = { value: P2(s2, { opacityVariable: f3 || void 0, opacityValue: p4 || void 0 }), color: ($6) => P2(s2, $6), opacityVariable: f3 || void 0, opacityValue: p4 || void 0 };
      let y4 = g4(r, i2);
      if (!r.dark) {
        let $6 = i2.d(n3, l2, s2);
        $6 && $6 !== s2 && (r._ = { value: P2($6, { opacityVariable: f3 || void 0, opacityValue: p4 || "1" }), color: (A4) => P2($6, A4), opacityVariable: f3 || void 0, opacityValue: p4 || void 0 }, y4 = { "&": y4, [i2.v("dark")]: g4(r, i2) });
      }
      return y4;
    };
  }
  function Ze2(e3) {
    return (e3.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
  }
  function He(e3, t2) {
    let r = {};
    return typeof t2 == "string" ? r[e3] = t2 : (t2.opacityVariable && t2.value.includes(t2.opacityVariable) && (r[t2.opacityVariable] = t2.opacityValue || "1"), r[e3] = t2.value), r;
  }
  function oe2(e3, t2, r) {
    if (e3[0] == "[" && e3.slice(-1) == "]") {
      if (e3 = se2(he2(e3.slice(1, -1), r.theme)), !t2)
        return e3;
      if (!(/color|fill|stroke/i.test(t2) && !(/^color:/.test(e3) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e3)) || /image/i.test(t2) && !(/^image:/.test(e3) || /^[a-z-]+\(/.test(e3)) || /weight/i.test(t2) && !(/^(number|any):/.test(e3) || /^\d+$/.test(e3)) || /position/i.test(t2) && /^(length|size):/.test(e3)))
        return e3.replace(/^[a-z-]+:/, "");
    }
  }
  function ke(e3) {
    return e3.replace(/-./g, (t2) => t2[1].toUpperCase());
  }
  function se2(e3) {
    return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t2, r = "", i2, n3 = "") => se2(r) + i2 + se2(n3)) : e3.replace(/(^|[^\\])_+/g, (t2, r) => r + " ".repeat(t2.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t2) => t2.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
  }
  var Qe = Symbol();
  var D2 = new Proxy(F3, { apply(e3, t2, r) {
    return B2(r[0]);
  }, get(e3, t2) {
    let r = B2[t2];
    return typeof r == "function" ? function() {
      return r.apply(B2, arguments);
    } : r;
  } });
  var Rt2 = function e2(t2) {
    return new Proxy(function(i2, ...n3) {
      return je2(t2, "", i2, n3);
    }, { get(r, i2) {
      return i2 === "bind" ? e2 : i2 in r ? r[i2] : function(l2, ...o2) {
        return je2(t2, i2, l2, o2);
      };
    } });
  }();
  function je2(e3, t2, r, i2) {
    return { toString() {
      let n3 = G2(r, i2), l2 = Y4(t2 + T3(JSON.stringify([t2, n3])));
      return (typeof e3 == "function" ? e3 : D2)(me({ [`@keyframes ${l2}`]: G2(r, i2) })), l2;
    } };
  }

  // https://esm.sh/v117/@twind/preset-tailwind@1.0.1/deno/preset-tailwind.mjs
  var L = "inherit", U2 = "currentColor", j2 = "transparent", V3 = "#000", B3 = "#fff", H3 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, I2 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, M = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, P3 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, N2 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, G3 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, q2 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, Y5 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, X5 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, J2 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, K3 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, Q5 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, Z3 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, ee2 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, te = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, oe3 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, re2 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, ae3 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, ie3 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, ne2 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, le2 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, se3 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, S2 = { __proto__: null, inherit: L, current: U2, transparent: j2, black: V3, white: B3, slate: H3, gray: I2, zinc: M, neutral: P3, stone: N2, red: G3, orange: q2, amber: Y5, yellow: X5, lime: J2, green: K3, emerald: Q5, teal: Z3, cyan: ee2, sky: te, blue: oe3, indigo: re2, violet: ae3, purple: ie3, fuchsia: ne2, pink: le2, rose: se3 }, h = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: S2, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...c(4, "rem", 4, 0.5, 0.5), ...c(12, "rem", 4, 5), 14: "3.5rem", ...c(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: n("blur"), backdropBrightness: n("brightness"), backdropContrast: n("contrast"), backdropGrayscale: n("grayscale"), backdropHueRotate: n("hueRotate"), backdropInvert: n("invert"), backdropOpacity: n("opacity"), backdropSaturate: n("saturate"), backdropSepia: n("sepia"), backgroundColor: n("colors"), backgroundImage: { none: "none" }, backgroundOpacity: n("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...c(200, "", 100, 0, 50), ...c(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: n("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: n("spacing"), borderWidth: { DEFAULT: "1px", ...f(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: n("colors"), caretColor: n("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...c(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: n("borderColor"), divideOpacity: n("borderOpacity"), divideWidth: n("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: n("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...x2(2, 6), ...x2(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: n("spacing"), gradientColorStops: n("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...x2(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...x2(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...c(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: r }) => ({ ...r(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...c(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: n("spacing"), placeholderColor: n("colors"), placeholderOpacity: n("opacity"), outlineColor: n("colors"), outlineOffset: f(8, "px"), outlineWidth: f(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: n("colors"), ringOffsetWidth: f(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...f(8, "px") }, rotate: { ...f(2, "deg"), ...f(12, "deg", 3), ...f(180, "deg", 45) }, saturate: c(200, "", 100, 0, 50), scale: { ...c(150, "", 100, 0, 50), ...c(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: n("spacing"), scrollPadding: n("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...f(2, "deg"), ...f(12, "deg", 3) }, space: n("spacing"), stroke: n("colors"), strokeWidth: c(2), textColor: n("colors"), textDecorationColor: n("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...f(8, "px") }, textUnderlineOffset: { auto: "auto", ...f(8, "px") }, textIndent: n("spacing"), textOpacity: n("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: n("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...x2(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...c(50, "", 1, 0, 10), auto: "auto" } };
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
  function c(e3, r = "", a = 1, i2 = 0, l2 = 1, d5 = {}) {
    for (; i2 <= e3; i2 += l2)
      d5[i2] = i2 / a + r;
    return d5;
  }
  function n(e3) {
    return ({ theme: r }) => r(e3);
  }
  var C2 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${h.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${h.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } }, O = [yt3("\\[([-\\w]+):(.+)]", ({ 1: e3, 2: r }, a) => ({ "@layer overrides": { "&": { [e3]: oe2(`[${r}]`, e3, a) } } })), yt3("(group|peer)(~[^-[]+)?", ({ input: e3 }, { h: r }) => [{ c: r(e3) }]), gt2("aspect-", "aspectRatio"), yt3("container", (e3, { theme: r }) => {
    let { screens: a = r("screens"), center: i2, padding: l2 } = r("container"), d5 = { width: "100%", marginRight: i2 && "auto", marginLeft: i2 && "auto", ...m3("xs") };
    for (let w4 in a) {
      let b4 = a[w4];
      typeof b4 == "string" && (d5[Ce2(b4)] = { "&": { maxWidth: b4, ...m3(w4) } });
    }
    return d5;
    function m3(w4) {
      let b4 = l2 && (typeof l2 == "string" ? l2 : l2[w4] || l2.DEFAULT);
      if (b4)
        return { paddingRight: b4, paddingLeft: b4 };
    }
  }), gt2("content-", "content", ({ _: e3 }) => ({ "--tw-content": e3, content: "var(--tw-content)" })), yt3("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt3("box-(border|content)", "boxSizing", ({ 1: e3 }) => e3 + "-box"), yt3("hidden", { display: "none" }), yt3("table-(auto|fixed)", "tableLayout"), yt3(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt3("isolate", "isolation"), yt3("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt2("object-", "objectPosition"), yt3("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", y2), yt3("overscroll(-[xy])?-(auto|contain|none)", ({ 1: e3 = "", 2: r }) => ({ ["overscroll-behavior" + e3]: r })), yt3("(static|fixed|absolute|relative|sticky)", "position"), gt2("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: e3, _: r }) => ({ top: e3 != "-x" && r, right: e3 != "-y" && r, bottom: e3 != "-x" && r, left: e3 != "-y" && r })), gt2("-?(top|bottom|left|right)(?:$|-)", "inset"), yt3("visible", "visibility"), yt3("invisible", { visibility: "hidden" }), gt2("-?z-", "zIndex"), yt3("flex-((row|col)(-reverse)?)", "flexDirection", F4), yt3("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt2("(flex-(?:grow|shrink))(?:$|-)"), gt2("(flex)-"), gt2("grow(?:$|-)", "flexGrow"), gt2("shrink(?:$|-)", "flexShrink"), gt2("basis-", "flexBasis"), gt2("-?(order)-"), "-?(order)-(\\d+)", gt2("grid-cols-", "gridTemplateColumns"), yt3("grid-cols-(\\d+)", "gridTemplateColumns", D3), gt2("col-", "gridColumn"), yt3("col-(span)-(\\d+)", "gridColumn", W4), gt2("col-start-", "gridColumnStart"), yt3("col-start-(auto|\\d+)", "gridColumnStart"), gt2("col-end-", "gridColumnEnd"), yt3("col-end-(auto|\\d+)", "gridColumnEnd"), gt2("grid-rows-", "gridTemplateRows"), yt3("grid-rows-(\\d+)", "gridTemplateRows", D3), gt2("row-", "gridRow"), yt3("row-(span)-(\\d+)", "gridRow", W4), gt2("row-start-", "gridRowStart"), yt3("row-start-(auto|\\d+)", "gridRowStart"), gt2("row-end-", "gridRowEnd"), yt3("row-end-(auto|\\d+)", "gridRowEnd"), yt3("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (e3) => y2(F4(e3))), yt3("grid-flow-(dense)", "gridAutoFlow"), gt2("auto-cols-", "gridAutoColumns"), gt2("auto-rows-", "gridAutoRows"), gt2("gap-x(?:$|-)", "gap", "columnGap"), gt2("gap-y(?:$|-)", "gap", "rowGap"), gt2("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt3("justify-", "justifyContent", T4), yt3("(content|items|self)-", (e3) => ({ ["align-" + e3[1]]: T4(e3) })), yt3("(place-(content|items|self))-", ({ 1: e3, $$: r }) => ({ [e3]: ("wun".includes(r[3]) ? "space-" : "") + r })), gt2("p([xytrbl])?(?:$|-)", "padding", u("padding")), gt2("-?m([xytrbl])?(?:$|-)", "margin", u("margin")), gt2("-?space-(x|y)(?:$|-)", "space", ({ 1: e3, _: r }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[e3]]: `calc(${r} * calc(1 - var(--tw-space-${e3}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[e3]]: `calc(${r} * var(--tw-space-${e3}-reverse))` } })), yt3("space-(x|y)-reverse", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e3}-reverse`]: "1" } })), gt2("w-", "width"), gt2("min-w-", "minWidth"), gt2("max-w-", "maxWidth"), gt2("h-", "height"), gt2("min-h-", "minHeight"), gt2("max-h-", "maxHeight"), gt2("font-", "fontWeight"), gt2("font-", "fontFamily", "fontFamily", p2), yt3("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt3("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt3("italic", "fontStyle"), yt3("not-italic", { fontStyle: "normal" }), yt3("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: e3, 2: r = "", 3: a }) => r == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a ? "numeric-fraction" : "pt".includes(r[0]) ? "numeric-spacing" : r ? "numeric-figure" : e3)]: e3, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt2("tracking-", "letterSpacing"), gt2("leading-", "lineHeight"), yt3("list-(inside|outside)", "listStylePosition"), gt2("list-", "listStyleType"), yt3("list-", "listStyleType"), gt2("placeholder-opacity-", "placeholderOpacity", ({ _: e3 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": e3 } })), mt4("placeholder-", { property: "color", selector: "&::placeholder" }), yt3("text-(left|center|right|justify|start|end)", "textAlign"), yt3("text-(ellipsis|clip)", "textOverflow"), gt2("text-opacity-", "textOpacity", "--tw-text-opacity"), mt4("text-", { property: "color" }), gt2("text-", "fontSize", ({ _: e3 }) => typeof e3 == "string" ? { fontSize: e3 } : { fontSize: e3[0], ...typeof e3[1] == "string" ? { lineHeight: e3[1] } : e3[1] }), gt2("indent-", "textIndent"), yt3("(overline|underline|line-through)", "textDecorationLine"), yt3("no-underline", { textDecorationLine: "none" }), gt2("underline-offset-", "textUnderlineOffset"), mt4("decoration-", { section: "textDecorationColor", opacityVariable: !1, opacitySection: "opacity" }), gt2("decoration-", "textDecorationThickness"), yt3("decoration-", "textDecorationStyle"), yt3("(uppercase|lowercase|capitalize)", "textTransform"), yt3("normal-case", { textTransform: "none" }), yt3("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt3("align-", "verticalAlign"), yt3("whitespace-", "whiteSpace"), yt3("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt3("break-words", { overflowWrap: "break-word" }), yt3("break-all", { wordBreak: "break-all" }), mt4("caret-", { opacityVariable: !1, opacitySection: "opacity" }), mt4("accent-", { opacityVariable: !1, opacitySection: "opacity" }), yt3("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: e3 }) => `linear-gradient(to ${g(e3, " ")},var(--tw-gradient-stops))`), mt4("from-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-from": e3.value, "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt4("via-", { section: "gradientColorStops", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-gradient-to": e3.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${e3.value},var(--tw-gradient-to)` })), mt4("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: !1, opacitySection: "opacity" }), yt3("bg-(fixed|local|scroll)", "backgroundAttachment"), yt3("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: e3 }) => e3 + "-box"), yt3(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt3("bg-blend-", "backgroundBlendMode"), yt3("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: e3 }) => e3 + (e3 == "text" ? "" : "-box")), gt2("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt4("bg-", { section: "backgroundColor" }), gt2("bg-", "backgroundImage"), gt2("bg-", "backgroundPosition"), yt3("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", y2), gt2("bg-", "backgroundSize"), gt2("rounded(?:$|-)", "borderRadius"), gt2("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: e3, _: r }) => {
    let a = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[e3] || [e3, e3];
    return { [`border-${g(a[0])}-radius`]: r, [`border-${g(a[1])}-radius`]: r };
  }), yt3("border-(collapse|separate)", "borderCollapse"), gt2("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt3("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt2("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: e3, _: r }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (e3 || "-x")]: r, ["--tw-border-spacing" + (e3 || "-y")]: r, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt4("border-([xytrbl])-", { section: "borderColor" }, u("border", "Color")), mt4("border-"), gt2("border-([xytrbl])(?:$|-)", "borderWidth", u("border", "Width")), gt2("border(?:$|-)", "borderWidth"), gt2("divide-opacity(?:$|-)", "divideOpacity", ({ _: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": e3 } })), yt3("divide-(solid|dashed|dotted|double|none)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: e3 } })), yt3("divide-([xy]-reverse)", ({ 1: e3 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + e3]: "1" } })), gt2("divide-([xy])(?:$|-)", "divideWidth", ({ 1: e3, _: r }) => {
    let a = { x: "lr", y: "tb" }[e3];
    return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${e3}-reverse`]: "0", [`border-${g(a[0])}Width`]: `calc(${r} * calc(1 - var(--tw-divide-${e3}-reverse)))`, [`border-${g(a[1])}Width`]: `calc(${r} * var(--tw-divide-${e3}-reverse))` } };
  }), mt4("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt2("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt4("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: !1 }), gt2("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt3("ring-inset", { "--tw-ring-inset": "inset" }), mt4("ring-", { property: "--tw-ring-color" }), gt2("ring(?:$|-)", "ringWidth", ({ _: e3 }, { theme: r }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e3} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P2(r("ringOffsetColor", "", "#fff")), "--tw-ring-color": P2(r("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r("ringOpacity", "", "0.5") } } } })), mt4("shadow-", { section: "boxShadowColor", opacityVariable: !1, opacitySection: "opacity" }, ({ _: e3 }) => ({ "--tw-shadow-color": e3.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt2("shadow(?:$|-)", "boxShadow", ({ _: e3 }) => ({ "--tw-shadow": p2(e3), "--tw-shadow-colored": p2(e3).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt2("(opacity)-"), yt3("mix-blend-", "mixBlendMode"), ...A(), ...A("backdrop-"), gt2("transition(?:$|-)", "transitionProperty", (e3, { theme: r }) => ({ transitionProperty: p2(e3), transitionTimingFunction: e3._ == "none" ? void 0 : p2(r("transitionTimingFunction", "")), transitionDuration: e3._ == "none" ? void 0 : p2(r("transitionDuration", "")) })), gt2("duration(?:$|-)", "transitionDuration", "transitionDuration", p2), gt2("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", p2), gt2("delay(?:$|-)", "transitionDelay", "transitionDelay", p2), gt2("animate(?:$|-)", "animation", (e3, { theme: r, h: a }) => {
    let i2 = p2(e3), l2 = i2.split(" "), d5 = r("keyframes", l2[0]);
    return d5 ? { ["@keyframes " + (l2[0] = a(l2[0]))]: d5, animation: l2.join(" ") } : { animation: i2 };
  }), "(transform)-(none)", yt3("transform", $3), yt3("transform-(cpu|gpu)", ({ 1: e3 }) => ({ "--tw-transform": E(e3 == "gpu") })), gt2("scale(-[xy])?-", "scale", ({ 1: e3, _: r }) => ({ ["--tw-scale" + (e3 || "-x")]: r, ["--tw-scale" + (e3 || "-y")]: r, ...$3() })), gt2("-?(rotate)-", "rotate", k), gt2("-?(translate-[xy])-", "translate", k), gt2("-?(skew-[xy])-", "skew", k), yt3("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", y2), "(appearance)-", gt2("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt2("(cursor)-"), "(cursor)-", yt3("snap-(none)", "scroll-snap-type"), yt3("snap-(x|y|both)", ({ 1: e3 }) => ({ "scroll-snap-type": e3 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt3("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt3("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt3("snap-(normal|always)", "scroll-snap-stop"), yt3("scroll-(auto|smooth)", "scroll-behavior"), gt2("scroll-p([xytrbl])?(?:$|-)", "padding", u("scroll-padding")), gt2("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", u("scroll-margin")), yt3("touch-(auto|none|manipulation)", "touch-action"), yt3("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: e3, 2: r, 3: a }) => ({ [`--tw-${r ? "pan-x" : a ? "pan-y" : e3}`]: e3, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt3("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt3("outline", { outlineStyle: "solid" }), yt3("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt2("(outline-offset)-"), mt4("outline-", { opacityVariable: !1, opacitySection: "opacity" }), gt2("outline-", "outlineWidth"), "(pointer-events)-", gt2("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: e3 }) => ({ x: "horizontal", y: "vertical" })[e3] || e3 || "both"], yt3("select-(none|text|all|auto)", "userSelect"), mt4("fill-", { section: "fill", opacityVariable: !1, opacitySection: "opacity" }), mt4("stroke-", { section: "stroke", opacityVariable: !1, opacitySection: "opacity" }), gt2("stroke-", "strokeWidth"), yt3("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt3("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
  function y2(e3) {
    return (typeof e3 == "string" ? e3 : e3[1]).replace(/-/g, " ").trim();
  }
  function F4(e3) {
    return (typeof e3 == "string" ? e3 : e3[1]).replace("col", "column");
  }
  function g(e3, r = "-") {
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
      return l2 ? { ...He(e3 + "-" + g(l2[0]) + r, i2), ...He(e3 + "-" + g(l2[1]) + r, i2) } : He(e3 + r, i2);
    };
  }
  function A(e3 = "") {
    let r = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", e3 && "opacity", "saturate", "sepia", !e3 && "drop-shadow"].filter(Boolean), a = {};
    for (let i2 of r)
      a[`--tw-${e3}${i2}`] = "var(--tw-empty,/*!*/ /*!*/)";
    return a = { [`${e3}filter`]: r.map((i2) => `var(--tw-${e3}${i2})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a } }, [`(${e3}filter)-(none)`, yt3(`${e3}filter`, a), ...r.map((i2) => gt2(`${i2[0] == "h" ? "-?" : ""}(${e3}${i2})(?:$|-)`, i2, ({ 1: l2, _: d5 }) => ({ [`--tw-${l2}`]: b(d5).map((m3) => `${i2}(${m3})`).join(" "), ...a })))];
  }
  function k({ 1: e3, _: r }) {
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
  function D3({ 1: e3 }) {
    return `repeat(${e3},minmax(0,1fr))`;
  }

  // https://esm.sh/stable/preact@10.11.0/deno/preact.mjs
  var P4, d2, $4, Y6, S3, F5, B4, T5 = {}, V4 = [], Z4 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function k2(e3, t2) {
    for (var _2 in t2)
      e3[_2] = t2[_2];
    return e3;
  }
  function j3(e3) {
    var t2 = e3.parentNode;
    t2 && t2.removeChild(e3);
  }
  function w2(e3, t2, _2, r, l2) {
    var o2 = { type: e3, props: t2, key: _2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l2 ?? ++$4 };
    return l2 == null && d2.vnode != null && d2.vnode(o2), o2;
  }
  function L2(e3) {
    return e3.children;
  }
  function U3(e3, t2) {
    this.props = e3, this.context = t2;
  }
  function C3(e3, t2) {
    if (t2 == null)
      return e3.__ ? C3(e3.__, e3.__.__k.indexOf(e3) + 1) : null;
    for (var _2; t2 < e3.__k.length; t2++)
      if ((_2 = e3.__k[t2]) != null && _2.__e != null)
        return _2.__e;
    return typeof e3.type == "function" ? C3(e3) : null;
  }
  function z2(e3) {
    var t2, _2;
    if ((e3 = e3.__) != null && e3.__c != null) {
      for (e3.__e = e3.__c.base = null, t2 = 0; t2 < e3.__k.length; t2++)
        if ((_2 = e3.__k[t2]) != null && _2.__e != null) {
          e3.__e = e3.__c.base = _2.__e;
          break;
        }
      return z2(e3);
    }
  }
  function M2(e3) {
    (!e3.__d && (e3.__d = !0) && S3.push(e3) && !D4.__r++ || F5 !== d2.debounceRendering) && ((F5 = d2.debounceRendering) || setTimeout)(D4);
  }
  function D4() {
    for (var e3; D4.__r = S3.length; )
      e3 = S3.sort(function(t2, _2) {
        return t2.__v.__b - _2.__v.__b;
      }), S3 = [], e3.some(function(t2) {
        var _2, r, l2, o2, s2, f3;
        t2.__d && (s2 = (o2 = (_2 = t2).__v).__e, (f3 = _2.__P) && (r = [], (l2 = k2({}, o2)).__v = o2.__v + 1, W5(f3, o2, l2, _2.__n, f3.ownerSVGElement !== void 0, o2.__h != null ? [s2] : null, r, s2 ?? C3(o2), o2.__h), K4(r, o2), o2.__e != s2 && z2(o2)));
      });
  }
  function G4(e3, t2, _2, r, l2, o2, s2, f3, p4, a) {
    var n3, h2, c2, i2, u2, b4, v, y4 = r && r.__k || V4, g4 = y4.length;
    for (_2.__k = [], n3 = 0; n3 < t2.length; n3++)
      if ((i2 = _2.__k[n3] = (i2 = t2[n3]) == null || typeof i2 == "boolean" ? null : typeof i2 == "string" || typeof i2 == "number" || typeof i2 == "bigint" ? w2(null, i2, null, null, i2) : Array.isArray(i2) ? w2(L2, { children: i2 }, null, null, null) : i2.__b > 0 ? w2(i2.type, i2.props, i2.key, i2.ref ? i2.ref : null, i2.__v) : i2) != null) {
        if (i2.__ = _2, i2.__b = _2.__b + 1, (c2 = y4[n3]) === null || c2 && i2.key == c2.key && i2.type === c2.type)
          y4[n3] = void 0;
        else
          for (h2 = 0; h2 < g4; h2++) {
            if ((c2 = y4[h2]) && i2.key == c2.key && i2.type === c2.type) {
              y4[h2] = void 0;
              break;
            }
            c2 = null;
          }
        W5(e3, i2, c2 = c2 || T5, l2, o2, s2, f3, p4, a), u2 = i2.__e, (h2 = i2.ref) && c2.ref != h2 && (v || (v = []), c2.ref && v.push(c2.ref, null, i2), v.push(h2, i2.__c || u2, i2)), u2 != null ? (b4 == null && (b4 = u2), typeof i2.type == "function" && i2.__k === c2.__k ? i2.__d = p4 = q3(i2, p4, e3) : p4 = J3(e3, i2, c2, y4, u2, p4), typeof _2.type == "function" && (_2.__d = p4)) : p4 && c2.__e == p4 && p4.parentNode != e3 && (p4 = C3(c2));
      }
    for (_2.__e = b4, n3 = g4; n3--; )
      y4[n3] != null && (typeof _2.type == "function" && y4[n3].__e != null && y4[n3].__e == _2.__d && (_2.__d = C3(r, n3 + 1)), X6(y4[n3], y4[n3]));
    if (v)
      for (n3 = 0; n3 < v.length; n3++)
        Q6(v[n3], v[++n3], v[++n3]);
  }
  function q3(e3, t2, _2) {
    for (var r, l2 = e3.__k, o2 = 0; l2 && o2 < l2.length; o2++)
      (r = l2[o2]) && (r.__ = e3, t2 = typeof r.type == "function" ? q3(r, t2, _2) : J3(_2, r, r, l2, r.__e, t2));
    return t2;
  }
  function J3(e3, t2, _2, r, l2, o2) {
    var s2, f3, p4;
    if (t2.__d !== void 0)
      s2 = t2.__d, t2.__d = void 0;
    else if (_2 == null || l2 != o2 || l2.parentNode == null)
      e:
        if (o2 == null || o2.parentNode !== e3)
          e3.appendChild(l2), s2 = null;
        else {
          for (f3 = o2, p4 = 0; (f3 = f3.nextSibling) && p4 < r.length; p4 += 2)
            if (f3 == l2)
              break e;
          e3.insertBefore(l2, o2), s2 = o2;
        }
    return s2 !== void 0 ? s2 : l2.nextSibling;
  }
  function _e3(e3, t2, _2, r, l2) {
    var o2;
    for (o2 in _2)
      o2 === "children" || o2 === "key" || o2 in t2 || N3(e3, o2, null, _2[o2], r);
    for (o2 in t2)
      l2 && typeof t2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || _2[o2] === t2[o2] || N3(e3, o2, t2[o2], _2[o2], r);
  }
  function I3(e3, t2, _2) {
    t2[0] === "-" ? e3.setProperty(t2, _2) : e3[t2] = _2 == null ? "" : typeof _2 != "number" || Z4.test(t2) ? _2 : _2 + "px";
  }
  function N3(e3, t2, _2, r, l2) {
    var o2;
    e:
      if (t2 === "style")
        if (typeof _2 == "string")
          e3.style.cssText = _2;
        else {
          if (typeof r == "string" && (e3.style.cssText = r = ""), r)
            for (t2 in r)
              _2 && t2 in _2 || I3(e3.style, t2, "");
          if (_2)
            for (t2 in _2)
              r && _2[t2] === r[t2] || I3(e3.style, t2, _2[t2]);
        }
      else if (t2[0] === "o" && t2[1] === "n")
        o2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e3 ? t2.toLowerCase().slice(2) : t2.slice(2), e3.l || (e3.l = {}), e3.l[t2 + o2] = _2, _2 ? r || e3.addEventListener(t2, o2 ? R : O2, o2) : e3.removeEventListener(t2, o2 ? R : O2, o2);
      else if (t2 !== "dangerouslySetInnerHTML") {
        if (l2)
          t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t2 !== "href" && t2 !== "list" && t2 !== "form" && t2 !== "tabIndex" && t2 !== "download" && t2 in e3)
          try {
            e3[t2] = _2 ?? "";
            break e;
          } catch {
          }
        typeof _2 == "function" || (_2 != null && (_2 !== !1 || t2[0] === "a" && t2[1] === "r") ? e3.setAttribute(t2, _2) : e3.removeAttribute(t2));
      }
  }
  function O2(e3) {
    this.l[e3.type + !1](d2.event ? d2.event(e3) : e3);
  }
  function R(e3) {
    this.l[e3.type + !0](d2.event ? d2.event(e3) : e3);
  }
  function W5(e3, t2, _2, r, l2, o2, s2, f3, p4) {
    var a, n3, h2, c2, i2, u2, b4, v, y4, g4, x3, H5, E2, m3 = t2.type;
    if (t2.constructor !== void 0)
      return null;
    _2.__h != null && (p4 = _2.__h, f3 = t2.__e = _2.__e, t2.__h = null, o2 = [f3]), (a = d2.__b) && a(t2);
    try {
      e:
        if (typeof m3 == "function") {
          if (v = t2.props, y4 = (a = m3.contextType) && r[a.__c], g4 = a ? y4 ? y4.props.value : a.__ : r, _2.__c ? b4 = (n3 = t2.__c = _2.__c).__ = n3.__E : ("prototype" in m3 && m3.prototype.render ? t2.__c = n3 = new m3(v, g4) : (t2.__c = n3 = new U3(v, g4), n3.constructor = m3, n3.render = oe4), y4 && y4.sub(n3), n3.props = v, n3.state || (n3.state = {}), n3.context = g4, n3.__n = r, h2 = n3.__d = !0, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m3.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k2({}, n3.__s)), k2(n3.__s, m3.getDerivedStateFromProps(v, n3.__s))), c2 = n3.props, i2 = n3.state, h2)
            m3.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
          else {
            if (m3.getDerivedStateFromProps == null && v !== c2 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v, g4), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v, n3.__s, g4) === !1 || t2.__v === _2.__v) {
              n3.props = v, n3.state = n3.__s, t2.__v !== _2.__v && (n3.__d = !1), n3.__v = t2, t2.__e = _2.__e, t2.__k = _2.__k, t2.__k.forEach(function(A4) {
                A4 && (A4.__ = t2);
              }), n3.__h.length && s2.push(n3);
              break e;
            }
            n3.componentWillUpdate != null && n3.componentWillUpdate(v, n3.__s, g4), n3.componentDidUpdate != null && n3.__h.push(function() {
              n3.componentDidUpdate(c2, i2, u2);
            });
          }
          if (n3.context = g4, n3.props = v, n3.__v = t2, n3.__P = e3, x3 = d2.__r, H5 = 0, "prototype" in m3 && m3.prototype.render)
            n3.state = n3.__s, n3.__d = !1, x3 && x3(t2), a = n3.render(n3.props, n3.state, n3.context);
          else
            do
              n3.__d = !1, x3 && x3(t2), a = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
            while (n3.__d && ++H5 < 25);
          n3.state = n3.__s, n3.getChildContext != null && (r = k2(k2({}, r), n3.getChildContext())), h2 || n3.getSnapshotBeforeUpdate == null || (u2 = n3.getSnapshotBeforeUpdate(c2, i2)), E2 = a != null && a.type === L2 && a.key == null ? a.props.children : a, G4(e3, Array.isArray(E2) ? E2 : [E2], t2, _2, r, l2, o2, s2, f3, p4), n3.base = t2.__e, t2.__h = null, n3.__h.length && s2.push(n3), b4 && (n3.__E = n3.__ = null), n3.__e = !1;
        } else
          o2 == null && t2.__v === _2.__v ? (t2.__k = _2.__k, t2.__e = _2.__e) : t2.__e = ne3(_2.__e, t2, _2, r, l2, o2, s2, p4);
      (a = d2.diffed) && a(t2);
    } catch (A4) {
      t2.__v = null, (p4 || o2 != null) && (t2.__e = f3, t2.__h = !!p4, o2[o2.indexOf(f3)] = null), d2.__e(A4, t2, _2);
    }
  }
  function K4(e3, t2) {
    d2.__c && d2.__c(t2, e3), e3.some(function(_2) {
      try {
        e3 = _2.__h, _2.__h = [], e3.some(function(r) {
          r.call(_2);
        });
      } catch (r) {
        d2.__e(r, _2.__v);
      }
    });
  }
  function ne3(e3, t2, _2, r, l2, o2, s2, f3) {
    var p4, a, n3, h2 = _2.props, c2 = t2.props, i2 = t2.type, u2 = 0;
    if (i2 === "svg" && (l2 = !0), o2 != null) {
      for (; u2 < o2.length; u2++)
        if ((p4 = o2[u2]) && "setAttribute" in p4 == !!i2 && (i2 ? p4.localName === i2 : p4.nodeType === 3)) {
          e3 = p4, o2[u2] = null;
          break;
        }
    }
    if (e3 == null) {
      if (i2 === null)
        return document.createTextNode(c2);
      e3 = l2 ? document.createElementNS("http://www.w3.org/2000/svg", i2) : document.createElement(i2, c2.is && c2), o2 = null, f3 = !1;
    }
    if (i2 === null)
      h2 === c2 || f3 && e3.data === c2 || (e3.data = c2);
    else {
      if (o2 = o2 && P4.call(e3.childNodes), a = (h2 = _2.props || T5).dangerouslySetInnerHTML, n3 = c2.dangerouslySetInnerHTML, !f3) {
        if (o2 != null)
          for (h2 = {}, u2 = 0; u2 < e3.attributes.length; u2++)
            h2[e3.attributes[u2].name] = e3.attributes[u2].value;
        (n3 || a) && (n3 && (a && n3.__html == a.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
      }
      if (_e3(e3, c2, h2, l2, f3), n3)
        t2.__k = [];
      else if (u2 = t2.props.children, G4(e3, Array.isArray(u2) ? u2 : [u2], t2, _2, r, l2 && i2 !== "foreignObject", o2, s2, o2 ? o2[0] : _2.__k && C3(_2, 0), f3), o2 != null)
        for (u2 = o2.length; u2--; )
          o2[u2] != null && j3(o2[u2]);
      f3 || ("value" in c2 && (u2 = c2.value) !== void 0 && (u2 !== e3.value || i2 === "progress" && !u2 || i2 === "option" && u2 !== h2.value) && N3(e3, "value", u2, h2.value, !1), "checked" in c2 && (u2 = c2.checked) !== void 0 && u2 !== e3.checked && N3(e3, "checked", u2, h2.checked, !1));
    }
    return e3;
  }
  function Q6(e3, t2, _2) {
    try {
      typeof e3 == "function" ? e3(t2) : e3.current = t2;
    } catch (r) {
      d2.__e(r, _2);
    }
  }
  function X6(e3, t2, _2) {
    var r, l2;
    if (d2.unmount && d2.unmount(e3), (r = e3.ref) && (r.current && r.current !== e3.__e || Q6(r, null, t2)), (r = e3.__c) != null) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (o2) {
          d2.__e(o2, t2);
        }
      r.base = r.__P = null, e3.__c = void 0;
    }
    if (r = e3.__k)
      for (l2 = 0; l2 < r.length; l2++)
        r[l2] && X6(r[l2], t2, typeof e3.type != "function");
    _2 || e3.__e == null || j3(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
  }
  function oe4(e3, t2, _2) {
    return this.constructor(e3, _2);
  }
  P4 = V4.slice, d2 = { __e: function(e3, t2, _2, r) {
    for (var l2, o2, s2; t2 = t2.__; )
      if ((l2 = t2.__c) && !l2.__)
        try {
          if ((o2 = l2.constructor) && o2.getDerivedStateFromError != null && (l2.setState(o2.getDerivedStateFromError(e3)), s2 = l2.__d), l2.componentDidCatch != null && (l2.componentDidCatch(e3, r || {}), s2 = l2.__d), s2)
            return l2.__E = l2;
        } catch (f3) {
          e3 = f3;
        }
    throw e3;
  } }, $4 = 0, Y6 = function(e3) {
    return e3 != null && e3.constructor === void 0;
  }, U3.prototype.setState = function(e3, t2) {
    var _2;
    _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k2({}, this.state), typeof e3 == "function" && (e3 = e3(k2({}, _2), this.props)), e3 && k2(_2, e3), e3 != null && this.__v && (t2 && this.__h.push(t2), M2(this));
  }, U3.prototype.forceUpdate = function(e3) {
    this.__v && (this.__e = !0, e3 && this.__h.push(e3), M2(this));
  }, U3.prototype.render = L2, S3 = [], D4.__r = 0, B4 = 0;

  // https://esm.sh/stable/preact@10.11.0/deno/hooks.js
  var i, n2, d3, N4;
  var q4 = [], l = [], V5 = d2.__b, g2 = d2.__r, b2 = d2.diffed, C4 = d2.__c, A2 = d2.unmount;
  function R2() {
    for (var _2; _2 = q4.shift(); )
      if (_2.__P && _2.__H)
        try {
          _2.__H.__h.forEach(m), _2.__H.__h.forEach(p3), _2.__H.__h = [];
        } catch (t2) {
          _2.__H.__h = [], d2.__e(t2, _2.__v);
        }
  }
  d2.__b = function(_2) {
    typeof _2.type != "function" || _2.o || _2.type === L2 ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n2 = null, V5 && V5(_2);
  }, d2.__r = function(_2) {
    g2 && g2(_2), i = 0;
    var t2 = (n2 = _2.__c).__H;
    t2 && (d3 === n2 ? (t2.__h = [], n2.__h = [], t2.__.forEach(function(u2) {
      u2.__N && (u2.__ = u2.__N), u2.__V = l, u2.__N = u2.i = void 0;
    })) : (t2.__h.forEach(m), t2.__h.forEach(p3), t2.__h = [])), d3 = n2;
  }, d2.diffed = function(_2) {
    b2 && b2(_2);
    var t2 = _2.__c;
    t2 && t2.__H && (t2.__H.__h.length && (q4.push(t2) !== 1 && N4 === d2.requestAnimationFrame || ((N4 = d2.requestAnimationFrame) || S4)(R2)), t2.__H.__.forEach(function(u2) {
      u2.i && (u2.__H = u2.i), u2.__V !== l && (u2.__ = u2.__V), u2.i = void 0, u2.__V = l;
    })), d3 = n2 = null;
  }, d2.__c = function(_2, t2) {
    t2.some(function(u2) {
      try {
        u2.__h.forEach(m), u2.__h = u2.__h.filter(function(o2) {
          return !o2.__ || p3(o2);
        });
      } catch (o2) {
        t2.some(function(r) {
          r.__h && (r.__h = []);
        }), t2 = [], d2.__e(o2, u2.__v);
      }
    }), C4 && C4(_2, t2);
  }, d2.unmount = function(_2) {
    A2 && A2(_2);
    var t2, u2 = _2.__c;
    u2 && u2.__H && (u2.__H.__.forEach(function(o2) {
      try {
        m(o2);
      } catch (r) {
        t2 = r;
      }
    }), u2.__H = void 0, t2 && d2.__e(t2, u2.__v));
  };
  var F6 = typeof requestAnimationFrame == "function";
  function S4(_2) {
    var t2, u2 = function() {
      clearTimeout(o2), F6 && cancelAnimationFrame(t2), setTimeout(_2);
    }, o2 = setTimeout(u2, 100);
    F6 && (t2 = requestAnimationFrame(u2));
  }
  function m(_2) {
    var t2 = n2, u2 = _2.__c;
    typeof u2 == "function" && (_2.__c = void 0, u2()), n2 = t2;
  }
  function p3(_2) {
    var t2 = n2;
    _2.__c = _2.__(), n2 = t2;
  }

  // https://esm.sh/v117/file-saver@2.0.5/deno/file-saver.mjs
  var __global$ = globalThis || (typeof window < "u" ? window : self), O3 = Object.create, y3 = Object.defineProperty, T6 = Object.getOwnPropertyDescriptor, U4 = Object.getOwnPropertyNames, _ = Object.getPrototypeOf, M3 = Object.prototype.hasOwnProperty, S5 = (a, n3) => () => (n3 || a((n3 = { exports: {} }).exports, n3), n3.exports), k3 = (a, n3) => {
    for (var r in n3)
      y3(a, r, { get: n3[r], enumerable: !0 });
  }, m2 = (a, n3, r, l2) => {
    if (n3 && typeof n3 == "object" || typeof n3 == "function")
      for (let i2 of U4(n3))
        !M3.call(a, i2) && i2 !== r && y3(a, i2, { get: () => n3[i2], enumerable: !(l2 = T6(n3, i2)) || l2.enumerable });
    return a;
  }, f2 = (a, n3, r) => (m2(a, n3, "default"), r && m2(r, n3, "default")), A3 = (a, n3, r) => (r = a != null ? O3(_(a)) : {}, m2(n3 || !a || !a.__esModule ? y3(r, "default", { value: a, enumerable: !0 }) : r, a)), b3 = S5((h2, E2) => {
    (function(a, n3) {
      typeof define == "function" && define.amd ? define([], n3) : typeof h2 < "u" ? n3() : (n3(), a.FileSaver = {});
    })(h2, function() {
      "use strict";
      function a(e3, t2) {
        return typeof t2 > "u" ? t2 = { autoBom: !1 } : typeof t2 != "object" && (console.warn("Deprecated: Expected third argument to be a object"), t2 = { autoBom: !t2 }), t2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e3.type) ? new Blob(["\uFEFF", e3], { type: e3.type }) : e3;
      }
      function n3(e3, t2, c2) {
        var o2 = new XMLHttpRequest();
        o2.open("GET", e3), o2.responseType = "blob", o2.onload = function() {
          p4(o2.response, t2, c2);
        }, o2.onerror = function() {
          console.error("could not download file");
        }, o2.send();
      }
      function r(e3) {
        var t2 = new XMLHttpRequest();
        t2.open("HEAD", e3, !1);
        try {
          t2.send();
        } catch {
        }
        return 200 <= t2.status && 299 >= t2.status;
      }
      function l2(e3) {
        try {
          e3.dispatchEvent(new MouseEvent("click"));
        } catch {
          var t2 = document.createEvent("MouseEvents");
          t2.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e3.dispatchEvent(t2);
        }
      }
      var i2 = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof __global$ == "object" && __global$.global === __global$ ? __global$ : void 0, L4 = i2.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), p4 = i2.saveAs || (typeof window != "object" || window !== i2 ? function() {
      } : "download" in HTMLAnchorElement.prototype && !L4 ? function(e3, t2, c2) {
        var o2 = i2.URL || i2.webkitURL, s2 = document.createElement("a");
        t2 = t2 || e3.name || "download", s2.download = t2, s2.rel = "noopener", typeof e3 == "string" ? (s2.href = e3, s2.origin === location.origin ? l2(s2) : r(s2.href) ? n3(e3, t2, c2) : l2(s2, s2.target = "_blank")) : (s2.href = o2.createObjectURL(e3), setTimeout(function() {
          o2.revokeObjectURL(s2.href);
        }, 4e4), setTimeout(function() {
          l2(s2);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(e3, t2, c2) {
        if (t2 = t2 || e3.name || "download", typeof e3 != "string")
          navigator.msSaveOrOpenBlob(a(e3, c2), t2);
        else if (r(e3))
          n3(e3, t2, c2);
        else {
          var o2 = document.createElement("a");
          o2.href = e3, o2.target = "_blank", setTimeout(function() {
            l2(o2);
          });
        }
      } : function(e3, t2, c2, o2) {
        if (o2 = o2 || open("", "_blank"), o2 && (o2.document.title = o2.document.body.innerText = "downloading..."), typeof e3 == "string")
          return n3(e3, t2, c2);
        var s2 = e3.type === "application/octet-stream", x3 = /constructor/i.test(i2.HTMLElement) || i2.safari, R3 = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((R3 || s2 && x3 || L4) && typeof FileReader < "u") {
          var v = new FileReader();
          v.onloadend = function() {
            var u2 = v.result;
            u2 = R3 ? u2 : u2.replace(/^data:[^;]*;/, "data:attachment/file;"), o2 ? o2.location.href = u2 : location = u2, o2 = null;
          }, v.readAsDataURL(e3);
        } else {
          var j5 = i2.URL || i2.webkitURL, w4 = j5.createObjectURL(e3);
          o2 ? o2.location = w4 : location.href = w4, o2 = null, setTimeout(function() {
            j5.revokeObjectURL(w4);
          }, 4e4);
        }
      });
      i2.saveAs = p4.saveAs = p4, typeof E2 < "u" && (E2.exports = p4);
    });
  }), d4 = {};
  k3(d4, { default: () => H4 });
  var B5 = A3(b3());
  f2(d4, A3(b3()));
  var { default: g3, ...F7 } = B5, H4 = g3 !== void 0 ? g3 : F7;

  // libs/confetti.js
  var global = window, isWorker = !1, canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
  function noop() {
  }
  function promise(func) {
    var ModulePromise = global.Promise, Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
    return typeof Prom == "function" ? new Prom(func) : (func(noop, noop), null);
  }
  var raf = function() {
    var TIME = Math.floor(16.666666666666668), frame, cancel, frames = {}, lastFrameTime = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (frame = function(cb) {
      var id = Math.random();
      return frames[id] = requestAnimationFrame(function onFrame(time) {
        lastFrameTime === time || lastFrameTime + TIME - 1 < time ? (lastFrameTime = time, delete frames[id], cb()) : frames[id] = requestAnimationFrame(onFrame);
      }), id;
    }, cancel = function(id) {
      frames[id] && cancelAnimationFrame(frames[id]);
    }) : (frame = function(cb) {
      return setTimeout(cb, TIME);
    }, cancel = function(timer) {
      return clearTimeout(timer);
    }), { frame, cancel };
  }(), getWorker = function() {
    var worker, prom, resolves = {};
    function decorate(worker2) {
      function execute(options, callback) {
        worker2.postMessage({ options: options || {}, callback });
      }
      worker2.init = function(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker2.postMessage({ canvas: offscreen }, [offscreen]);
      }, worker2.fire = function(options, size, done) {
        if (prom)
          return execute(options, null), prom;
        var id = Math.random().toString(36).slice(2);
        return prom = promise(function(resolve) {
          function workerDone(msg) {
            msg.data.callback === id && (delete resolves[id], worker2.removeEventListener("message", workerDone), prom = null, done(), resolve());
          }
          worker2.addEventListener("message", workerDone), execute(options, id), resolves[id] = workerDone.bind(null, { data: { callback: id } });
        }), prom;
      }, worker2.reset = function() {
        worker2.postMessage({ reset: !0 });
        for (var id in resolves)
          resolves[id](), delete resolves[id];
      };
    }
    return function() {
      if (worker)
        return worker;
      if (!isWorker && canUseWorker) {
        var code = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + main.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join(`
`);
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e3) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("\u{1F38A} Could not load worker", e3), null;
        }
        decorate(worker);
      }
      return worker;
    };
  }(), defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: !1,
    scalar: 1
  };
  function convert(val, transform) {
    return transform ? transform(val) : val;
  }
  function isOk(val) {
    return val != null;
  }
  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }
  function onlyPositiveInt(number) {
    return number < 0 ? 0 : Math.floor(number);
  }
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function toDecimal(str) {
    return parseInt(str, 16);
  }
  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }
  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, "");
    return val.length < 6 && (val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2]), {
      r: toDecimal(val.substring(0, 2)),
      g: toDecimal(val.substring(2, 4)),
      b: toDecimal(val.substring(4, 6))
    };
  }
  function getOrigin(options) {
    var origin = prop(options, "origin", Object);
    return origin.x = prop(origin, "x", Number), origin.y = prop(origin, "y", Number), origin;
  }
  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth, canvas.height = document.documentElement.clientHeight;
  }
  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width, canvas.height = rect.height;
  }
  function getCanvas(zIndex) {
    var canvas = document.createElement("canvas");
    return canvas.style.position = "fixed", canvas.style.top = "0px", canvas.style.left = "0px", canvas.style.pointerEvents = "none", canvas.style.zIndex = zIndex, canvas;
  }
  function ellipse(context, x3, y4, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save(), context.translate(x3, y4), context.rotate(rotation), context.scale(radiusX, radiusY), context.arc(0, 0, 1, startAngle, endAngle, antiClockwise), context.restore();
  }
  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180), radSpread = opts.spread * (Math.PI / 180);
    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
      angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar
    };
  }
  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift, fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity, fetti.wobble += fetti.wobbleSpeed, fetti.velocity *= fetti.decay, fetti.tiltAngle += 0.1, fetti.tiltSin = Math.sin(fetti.tiltAngle), fetti.tiltCos = Math.cos(fetti.tiltAngle), fetti.random = Math.random() + 2, fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble), fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
    var progress = fetti.tick++ / fetti.totalTicks, x1 = fetti.x + fetti.random * fetti.tiltCos, y1 = fetti.y + fetti.random * fetti.tiltSin, x22 = fetti.wobbleX + fetti.random * fetti.tiltCos, y22 = fetti.wobbleY + fetti.random * fetti.tiltSin;
    if (context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")", context.beginPath(), fetti.shape === "circle")
      context.ellipse ? context.ellipse(
        fetti.x,
        fetti.y,
        Math.abs(x22 - x1) * fetti.ovalScalar,
        Math.abs(y22 - y1) * fetti.ovalScalar,
        Math.PI / 10 * fetti.wobble,
        0,
        2 * Math.PI
      ) : ellipse(
        context,
        fetti.x,
        fetti.y,
        Math.abs(x22 - x1) * fetti.ovalScalar,
        Math.abs(y22 - y1) * fetti.ovalScalar,
        Math.PI / 10 * fetti.wobble,
        0,
        2 * Math.PI
      );
    else if (fetti.shape === "star")
      for (var rot = Math.PI / 2 * 3, innerRadius = 4 * fetti.scalar, outerRadius = 8 * fetti.scalar, x3 = fetti.x, y4 = fetti.y, spikes = 5, step = Math.PI / spikes; spikes--; )
        x3 = fetti.x + Math.cos(rot) * outerRadius, y4 = fetti.y + Math.sin(rot) * outerRadius, context.lineTo(x3, y4), rot += step, x3 = fetti.x + Math.cos(rot) * innerRadius, y4 = fetti.y + Math.sin(rot) * innerRadius, context.lineTo(x3, y4), rot += step;
    else
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y)), context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1)), context.lineTo(Math.floor(x22), Math.floor(y22)), context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    return context.closePath(), context.fill(), fetti.tick < fetti.totalTicks;
  }
  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice(), context = canvas.getContext("2d"), animationFrame, destroy, prom = promise(function(resolve) {
      function onDone() {
        animationFrame = destroy = null, context.clearRect(0, 0, size.width, size.height), done(), resolve();
      }
      function update() {
        isWorker && !(size.width === workerSize.width && size.height === workerSize.height) && (size.width = canvas.width = workerSize.width, size.height = canvas.height = workerSize.height), !size.width && !size.height && (resizer(canvas), size.width = canvas.width, size.height = canvas.height), context.clearRect(0, 0, size.width, size.height), animatingFettis = animatingFettis.filter(function(fetti) {
          return updateFetti(context, fetti);
        }), animatingFettis.length ? animationFrame = raf.frame(update) : onDone();
      }
      animationFrame = raf.frame(update), destroy = onDone;
    });
    return {
      addFettis: function(fettis2) {
        return animatingFettis = animatingFettis.concat(fettis2), prom;
      },
      canvas,
      promise: prom,
      reset: function() {
        animationFrame && raf.cancel(animationFrame), destroy && destroy();
      }
    };
  }
  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas, allowResize = !!prop(globalOpts || {}, "resize"), globalDisableForReducedMotion = prop(
      globalOpts,
      "disableForReducedMotion",
      Boolean
    ), shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker"), worker = shouldUseWorker ? getWorker() : null, resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize, initialized = canvas && worker ? !!canvas.__confetti_initialized : !1, preferLessMotion = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, animationObj;
    function fireLocal(options, size, done) {
      for (var particleCount = prop(options, "particleCount", onlyPositiveInt), angle = prop(options, "angle", Number), spread = prop(options, "spread", Number), startVelocity = prop(options, "startVelocity", Number), decay = prop(options, "decay", Number), gravity = prop(options, "gravity", Number), drift = prop(options, "drift", Number), colors = prop(options, "colors", colorsToRgb), ticks = prop(options, "ticks", Number), shapes = prop(options, "shapes"), scalar = prop(options, "scalar"), origin = getOrigin(options), temp = particleCount, fettis = [], startX = canvas.width * origin.x, startY = canvas.height * origin.y; temp--; )
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle,
            spread,
            startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks,
            decay,
            gravity,
            drift,
            scalar
          })
        );
      return animationObj ? animationObj.addFettis(fettis) : (animationObj = animate(canvas, fettis, resizer, size, done), animationObj.promise);
    }
    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, "disableForReducedMotion", Boolean), zIndex = prop(options, "zIndex", Number);
      if (disableForReducedMotion && preferLessMotion)
        return promise(function(resolve) {
          resolve();
        });
      isLibCanvas && animationObj ? canvas = animationObj.canvas : isLibCanvas && !canvas && (canvas = getCanvas(zIndex), document.body.appendChild(canvas)), allowResize && !initialized && resizer(canvas);
      var size = {
        width: canvas.width,
        height: canvas.height
      };
      worker && !initialized && worker.init(canvas), initialized = !0, worker && (canvas.__confetti_initialized = !0);
      function onResize() {
        if (worker) {
          var obj = {
            getBoundingClientRect: function() {
              if (!isLibCanvas)
                return canvas.getBoundingClientRect();
            }
          };
          resizer(obj), worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }
        size.width = size.height = null;
      }
      function done() {
        animationObj = null, allowResize && global.removeEventListener("resize", onResize), isLibCanvas && canvas && (document.body.removeChild(canvas), canvas = null, initialized = !1);
      }
      return allowResize && global.addEventListener("resize", onResize, !1), worker ? worker.fire(options, size, done) : fireLocal(options, size, done);
    }
    return fire.reset = function() {
      worker && worker.reset(), animationObj && animationObj.reset();
    }, fire;
  }
  var defaultFire;
  function getDefaultFire() {
    return defaultFire || (defaultFire = confettiCannon(null, { useWorker: !1, resize: !0 })), defaultFire;
  }
  function confetti() {
    return getDefaultFire().apply(this, arguments);
  }

  // locales/zh-CN.json
  var zh_CN_default = {
    lineBreakMaxTextCount: "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
    "translate-pdf": "\u70B9\u51FB\u7FFB\u8BD1 PDF",
    "noSupportTranslate-pdf": "\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6",
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
    "browser.translateLocalHtmlFile": "\u7FFB\u8BD1 HTML/txt \u6587\u4EF6",
    "browser.donateContext": "\u4E86\u89E3\u8D5E\u52A9\u798F\u5229",
    "browser.translateLocalSubtitleFile": "\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",
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
    "translationTheme.opacity": "\u900F\u660E\u6548\u679C",
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
    "translationServices.chatgpt": "ChatGPT Plus",
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
    "browser.openAboutPage": "\u5173\u4E8E/\u53CD\u9988",
    aboutLabelWithoutSponsor: "\u5173\u4E8E - \u53CD\u9988",
    aboutIntro: "\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002<br/><br/>\u514D\u8D39\u5DE5\u5177\u4F5C\u8005\u4F3C\u4E4E\u53EF\u4EE5\u548C\u8D5E\u52A9\u8005\u4E4B\u95F4\u5EFA\u7ACB\u4E00\u79CD\u53CC\u8D62\u7684\u5173\u7CFB\uFF01\u6211\u4E3A\u8D5E\u52A9\u8005\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9650\u65F6\u798F\u5229\uFF0C\u6BD4\u5982<6>DeepL\u7FFB\u8BD1\u670D\u52A1</6>\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u4E86\u89E3\u8D5E\u52A9\u65B9\u6848</2>\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",
    aboutIntroWithoutSponsor: "\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F ",
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
    "show password": "\u663E\u793A\u5BC6\u7801",
    customContent: "\u8F93\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9"
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
    "browser.translateLocalHtmlFile": "\u7FFB\u8B6F HTML/txt \u6A94\u6848",
    "browser.translateLocalSubtitleFile": "\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",
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
    "translationTheme.opacity": "\u900F\u660E\u6548\u679C",
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
    "translationServices.chatgpt": "ChatGPT Plus",
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
    aboutLabelWithoutSponsor: "\u95DC\u65BC - \u554F\u984C\u56DE\u5831",
    "browser.openAboutPage": "\u95DC\u65BC/\u554F\u984C\u56DE\u5831/\u8D0A\u52A9",
    aboutIntro: "\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u63F4\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002<br/><br/>\u514D\u8CBB\u5DE5\u5177\u4F5C\u8005\u4F3C\u4E4E\u53EF\u4EE5\u548C\u8B9A\u52A9\u8005\u4E4B\u9593\u5EFA\u7ACB\u4E00\u7A2E\u96D9\u8D0F\u7684\u95DC\u4FC2\uFF01\u6211\u70BA\u8D0A\u52A9\u8005\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9650\u6642\u798F\u5229\uFF0C\u6BD4\u5982<6>DeepL\u7FFB\u8B6F\u670D\u52D9</6>\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u64CA\u9019\u88E1\u4E86\u89E3\u8D0A\u52A9\u65B9\u6848</2>\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",
    aboutIntroWithoutSponsor: "\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",
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
    "show password": "\u986F\u793A\u5BC6\u78BC",
    customContent: "\u8F38\u5165\u81EA\u5B9A\u7FA9\u5167\u5BB9"
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
    "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc.",
    "browser.toggleTranslatePage": "Toggle translate webpage ",
    "browser.toggleTranslateTheWholePage": "Toggle translate the whole page",
    "browser.toggleTranslateToThePageEndImmediately": "Toggle translate to the bottom of the page immediately",
    "browser.toggleTranslateTheMainPage": "Toggle translate the main page",
    "browser.openOptionsPage": "Open Settings Page",
    "browser.toggleTranslationMask": "Toggle translation mask style",
    "browser.translateLocalPdfFile": "Translate local PDF File",
    "browser.openEbookViewer": "Read local e-book",
    "browser.openEbookBuilder": "Make Dual Epub ebook",
    "browser.translateLocalHtmlFile": "Translate HTML/txt File",
    "browser.donateContext": "Sponsor Benefits",
    "browser.translateLocalSubtitleFile": "Translate Subtitle File",
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
    "translationTheme.opacity": "Opacity effect",
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
    "translationServices.chatgpt": "ChatGPT Plus",
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
    aboutLabelWithoutSponsor: "About - Feedback",
    "browser.openAboutPage": "About / Feedback",
    aboutIntro: "The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. <br/><br/>Thanks to these <1>sponsors</1>, thanks to his/her support, more people can use this tool for free. You can <2>sponsor</2> my work by clicking here, and you can also follow my <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates.",
    aboutIntroWithoutSponsor: "The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",
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
    resetToDefaultSettings: "Reset to default settings",
    customContent: "Enter customization content"
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
    chatgpt: {
      name: "ChatGPT Plus",
      homepage: "https://chat.openai.com",
      beta: !0
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
          descriptionKey: "description.model",
          required: !1,
          type: "select",
          default: "gpt-3.5-turbo",
          options: [
            {
              label: "gpt-3.5-turbo",
              value: "gpt-3.5-turbo"
            },
            {
              label: "gpt-4",
              value: "gpt-4"
            }
          ]
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
          default: `Translate the text below to {{to}}:

{{text}}`,
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
      homepage: "https://translate.google.com/",
      canary: !0
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
    ), load = (f3) => (name, ...args) => map.has(name) ? f3(map.get(name), ...args) : null, loadText = load((entry) => entry.getData(new TextWriter())), loadBlob = load((entry, type) => entry.getData(new BlobWriter(type)));
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
    ), decoder2 = new TextDecoder(), decode = (x3) => x3 ? decoder2.decode(x3) : null, getBuffer = (name) => map.get(name)?.arrayBuffer() ?? null;
    return { entries: newEntries, loadText: async (name) => decode(await getBuffer(name)), loadBlob: async (name) => map.get(name), getSize: (name) => map.get(name)?.size ?? 0 };
  }, isCBZ = ({ name, type }) => type === "application/vnd.comicbook+zip" || name.endsWith(".cbz"), isFB2 = ({ name, type }) => type === "application/x-fictionbook+xml" || name.endsWith(".fb2"), isFBZ = ({ name, type }) => type === "application/x-zip-compressed-fb2" || name.endsWith(".fb2.zip") || name.endsWith(".fbz"), getView = async (file, emit) => {
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
  }, $5 = document.querySelector.bind(document), isIframeContentediable = !1;
  function disableIframeContentediable() {
    let iframes = document.querySelectorAll("iframe");
    for (let i2 = 0; i2 < iframes.length; i2++) {
      let body = iframes[i2].contentDocument.body;
      body && body.setAttribute("contenteditable", !1);
    }
    isIframeContentediable = !1;
    let editButton = document.getElementById("edit");
    editButton && (editButton.innerText = isIframeContentediable ? "Preview (\u9884\u89C8)" : "Edit (\u7F16\u8F91)");
    let editTitleButtons = document.querySelectorAll(
      "[data-type='iframe-title']"
    );
    for (let i2 = 0; i2 < editTitleButtons.length; i2++) {
      let editTitleButton = editTitleButtons[i2];
      editTitleButton.innerText = isIframeContentediable ? " \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09" : "";
    }
  }
  function enalbeIframeContentediable() {
    let iframes = document.querySelectorAll("iframe");
    for (let i2 = 0; i2 < iframes.length; i2++) {
      let body = iframes[i2].contentDocument.body;
      body && body.setAttribute("contenteditable", !0);
    }
    isIframeContentediable = !0;
    let editButton = document.getElementById("edit");
    editButton && (editButton.innerText = isIframeContentediable ? "Preview (\u9884\u89C8)" : "Edit (\u7F16\u8F91)");
    let editTitleButtons = document.querySelectorAll(
      "[data-type='iframe-title']"
    );
    for (let i2 = 0; i2 < editTitleButtons.length; i2++) {
      let editTitleButton = editTitleButtons[i2];
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
      $5("#dimming-overlay").classList.remove("show"), $5("#side-bar").classList.remove("show");
    }
    constructor() {
      $5("#side-bar-button").addEventListener("click", () => {
        $5("#dimming-overlay").classList.add("show"), $5("#side-bar").classList.add("show");
      }), $5("#dimming-overlay").addEventListener("click", () => this.closeSideBar());
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
      menu.element.classList.add("menu"), $5("#menu-button").append(menu.element), $5("#menu-button > button").addEventListener(
        "click",
        () => menu.element.classList.toggle("show")
      ), menu.groups.layout.select("paginated");
    }
    async open(file) {
      try {
        document.addEventListener(
          documentMessageTypeIdentifierForTellThirdParty,
          (e3) => {
            let { detail } = e3;
            if (detail)
              try {
                let detailObj = JSON.parse(detail);
                if (detailObj && detailObj.type && detailObj.payload) {
                  if (detailObj.type === "paragraphTranslated") {
                    let { ok } = detailObj.payload;
                    if (ok ? currentTranslatedParagraphsOkCount++ : currentTranslatedParagraphsErrorCount++, progressElement && totalParagraphsCount) {
                      let translatedCount = currentTranslatedParagraphsOkCount, totalTranslatedCount = currentTranslatedParagraphsOkCount + currentTranslatedParagraphsErrorCount, accuracy = translatedCount / totalParagraphsCount * 100, successProgress = Math.floor(accuracy), totalProgress = Math.floor(
                        totalTranslatedCount / totalParagraphsCount * 100
                      );
                      if (successProgress > 100 && (successProgress = 100), totalProgress > 100 && (totalProgress = 100), progressElement.innerText = `${successProgress}%`, totalProgress === 100 && currentTranslatedParagraphsErrorCount > 0) {
                        let errorElement = document.querySelector("#error");
                        errorElement.innerHTML = `${currentTranslatedParagraphsErrorCount} failed(\u5931\u8D25). <span class="link">Retry all (\u70B9\u6B64\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D)</span>`;
                      }
                      successProgress === 100 && (isCelebrate || (isCelebrate = !0, confetti({
                        particleCount: 100,
                        spread: 160
                      })));
                    }
                  } else if (detailObj.type === "totalParagraphsCount")
                    detailObj.payload.totalParagraphsCount && (totalParagraphsCount = detailObj.payload.totalParagraphsCount);
                  else if (detailObj.type === "translateStart")
                    currentTranslatedParagraphsOkCount = 0, currentTranslatedParagraphsErrorCount = 0;
                  else if (detailObj.type === "restorePage") {
                    let errorElement = document.querySelector("#error"), progressElement2 = document.querySelector("#progress-number");
                    errorElement && (errorElement.innerHTML = ""), progressElement2 && (progressElement2.innerText = "");
                  }
                }
              } catch (err) {
                console.log("parse detail failed", e3, err);
              }
          }
        ), this.view = await getView(file, this.#handleEvent.bind(this));
        let { book } = this.view, bookSections = book.sections, chapters = document.querySelector("#chapters"), bookResources = book.resources, guidesPaths = [];
        if (bookResources && bookResources.guide && bookResources.guide.length)
          for (let guide of bookResources.guide)
            guidesPaths.push(guide.href);
        let progressElement = document.querySelector("#progress-number"), errorElement1 = document.querySelector("#error");
        errorElement1.addEventListener("click", (e3) => {
          for (e3.preventDefault(); errorElement1.firstChild; )
            errorElement1.removeChild(errorElement1.firstChild);
          currentTranslatedParagraphsErrorCount = 0, document.dispatchEvent(
            new CustomEvent(documentMessageTypeIdentifierForThirdPartyTell, {
              detail: JSON.stringify({
                type: "retryFailedParagraphs"
              })
            })
          );
        }), $5("#open").addEventListener("click", () => {
          window.location.reload();
        }), $5("#export").addEventListener("click", async (e3) => {
          e3.preventDefault(), globalLoader || alert("Load failed");
          let exportButton = document.querySelector("#export");
          exportButton.classList.add("disabled");
          let exportAction = document.querySelector("#exportAction");
          exportAction && exportAction.classList.add("none");
          let exportStatus = document.querySelector("#exportStatus");
          exportStatus && (exportStatus.innerText = "Exporting..."), disableIframeContentediable();
          let entries = globalLoader.entries, zipFileWriter = new BlobWriter(), zipWriter = new ZipWriter(zipFileWriter), mimetypeReader = new TextReader("application/epub+zip");
          await zipWriter.add("mimetype", mimetypeReader, {
            level: 0,
            extendedTimestamp: !1
          });
          for (let i2 = 0; i2 < entries.length; i2++) {
            let entry = entries[i2], entryFilename = entry.filename;
            if (entryFilename === "mimetype" || !entryFilename)
              continue;
            let encodedEntryFileName = entryFilename.replace(/\'/g, "\\'"), iframe = document.querySelector(
              "iframe[id='" + encodedEntryFileName + "']"
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
                } catch (e4) {
                  console.warn("change unique number failed", e4);
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
          let zipFileBlob = await zipFileWriter.getData(), newName = file.name;
          file.name.endsWith(".epub.zip") && (newName = newName.replace(".epub.zip", ".epub"));
          let index = newName.lastIndexOf(".");
          newName = newName.substring(0, index) + " (Translated)" + newName.substring(index), await H4.saveAs(zipFileBlob, newName), exportButton && exportButton.classList.remove("disabled"), exportAction && exportAction.classList.remove("none"), exportStatus && (exportStatus.textContent = "");
        }), $5("#edit").addEventListener("click", (e3) => {
          e3.preventDefault(), globalLoader || alert("Load failed"), toggleIframeContentediable();
        });
        let metadata = book.metadata || {};
        console.log("metadata", metadata);
        let title = metadata.title || "Unknown", bootTitleElement = document.querySelector("#bookTitle");
        bootTitleElement.textContent = title;
        let isAllLoaded = !1, loadedCount = 0;
        for (let i2 = 0; i2 < bookSections.length; i2++) {
          let filePath = bookSections[i2].id, text = await book.loadText(filePath), doc = new DOMParser().parseFromString(
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
              isAllLoaded = !0, setTimeout(() => {
                let blockquote = document.createElement("blockquote");
                blockquote.classList.add("notranslate");
                let blockQuoteHtml = `<p class="notranslate">1. Click on the Immersive Translate extension popup translation button to start translating.<br>\u9700\u8981\u624B\u52A8\u70B9\u51FB\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6269\u5C55/\u811A\u672C\u6D6E\u7A97\u7684\u7FFB\u8BD1\u6309\u94AE\u5F00\u59CB\u7FFB\u8BD1\u3002<br><br>2. If the Epub contains images, it's fine for the edit box below not to show the images, the exported Epub will contain the images.<br>\u5982\u679C Epub \u91CC\u5305\u542B\u56FE\u7247\uFF0C\u4E0B\u9762\u7684\u7F16\u8F91\u6846\u4E0D\u663E\u793A\u56FE\u7247\u662F\u6B63\u5E38\u7684\uFF0C\u5BFC\u51FA\u540E\u7684 Epub \u91CC\u4F1A\u5305\u542B\u56FE\u7247\u3002<br><br>3. When the translation is finished, you can click the Edit button above to modify the translation.<br>\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u7F16\u8F91\u6309\u94AE\u6765\u4FEE\u6539\u8BD1\u6587\u3002<br><br>4. When there is a translation error, you can click Retry All above, or click Show Original and translate again. Or the whole page can be refreshed and started again, because the translated part is always cached and no further requests will be sent.<br>\u5F53\u51FA\u73B0\u7FFB\u8BD1\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u91CD\u8BD5\u5168\u90E8\uFF0C\u6216\u8005\u70B9\u51FB\u6D4F\u89C8\u5668\u6269\u5C55\u56FE\u6807\u5148\u663E\u793A\u539F\u6587\uFF0C\u518D\u7FFB\u8BD1\u3002\u6216\u8005\u6574\u4E2A\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6765\u8FC7\u4E5F\u884C\uFF0C\u56E0\u4E3A\u5DF2\u7FFB\u8BD1\u7684\u90E8\u5206\u603B\u662F\u6709\u7F13\u5B58\u7684\uFF0C\u4E0D\u4F1A\u518D\u53D1\u51FA\u8BF7\u6C42\u3002</p>`, ebookTipsMeta = document.querySelector(
                  "meta[name='immersive-translate-ebook-tips']"
                );
                if (ebookTipsMeta) {
                  let content = ebookTipsMeta.getAttribute("content");
                  content && (blockQuoteHtml += content);
                }
                blockquote.innerHTML = blockQuoteHtml, document.querySelector("#tips").append(blockquote);
              }, 1e3), document.dispatchEvent(
                new CustomEvent("immersiveTranslateEbookLoaded")
              );
              let allIframes = document.querySelectorAll("iframe"), totalTextCount = 0;
              allIframes.forEach((iframe2) => {
                let textCount = iframe2.contentDocument.body.innerText.length;
                totalTextCount += textCount;
              });
              let p4 = document.createElement("p");
              p4.classList.add("notranslate"), p4.innerText = `The book is about ${totalTextCount} characters in total (\u672C\u4E66\u5927\u7EA6 ${totalTextCount} \u4E2A\u5B57\u7B26)`, $5("#stats").append(p4);
            }
          };
        }
      } catch (e3) {
        console.error(e3), alert(e3.message), window.location.reload();
      }
    }
    #handleEvent(_obj) {
    }
  }, open2 = async (file) => {
    document.body.removeChild($5("#drop-target"));
    let reader = new Reader();
    globalThis.reader = reader, await reader.open(file), $5("#editor").classList.remove("none");
  }, dragOverHandler = (e3) => e3.preventDefault(), dropHandler = (e3) => {
    e3.preventDefault();
    let item = Array.from(e3.dataTransfer.items).find(
      (item2) => item2.kind === "file"
    );
    if (item) {
      let entry = item.webkitGetAsEntry();
      open2(entry.isFile ? item.getAsFile() : entry).catch(
        (e4) => console.error(e4)
      );
    }
  }, dropTarget = $5("#drop-target");
  dropTarget.addEventListener("drop", dropHandler);
  dropTarget.addEventListener("dragover", dragOverHandler);
  $5("#file-input").addEventListener(
    "change",
    (e3) => open2(e3.target.files[0]).catch((e4) => console.error(e4))
  );
  $5("#file-button").addEventListener("click", () => $5("#file-input").click());
})();
