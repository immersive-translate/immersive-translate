(()=>{var Gu=Object.defineProperty;var Ku=(t,e)=>{for(var n in e)Gu(t,n,{get:e[n],enumerable:!0})};var J={BUILD_TIME:"2023-06-05T04:19:39.619Z",VERSION:"0.5.16",PROD:"1",REDIRECT_URL:"https://immersive-translate.owenyoung.com/auth-done/",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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
.immersive-translate-state-dual > br {
  display: none;
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

.immersive-translate-target-translation-inline-wrapper-theme-dividingLine::before {
  content: "";
  border-left: 1px dashed
    var(--immersive-translate-theme-dividingLine-borderColor);
  max-height: 16px;
  height: 16px;
  padding-left: 8px;
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
  filter: opacity(10%) !important;
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
  margin-bottom: 4px;
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
`,IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS:`html {
  font-size: 17px;
}
.immersive-translate-popup-container {
  position: fixed;
  padding: 0;
  z-index: 2147483647;
  right: 0;
  top: 335px;
  width: 36px;
}
.immersive-translate-popup-btn {
  display: inline-block;
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
  --font-size: 17px;
  font-size: 17px;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<div
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
`,MOCK:"0",DEBUG:"0",INSTALL_FROM:"chrome_zip"};var Zu=(t,e)=>t.map((n,r,i)=>e(n,r,i)?r:null).filter(n=>n!=null),lo=(t,e)=>[-1,...e,t.length].reduce(({xs:n,a:r},i)=>({xs:n?.concat([t.slice(r+1,i)])??[],a:i}),{}).xs,Yu=(t,e)=>t.slice(0,-1).concat([t[t.length-1].concat(e[0])]).concat(e.slice(1)),ni=/\d/,pn=/^epubcfi\((.*)\)$/,oo=t=>t.replace(/[\^[\](),;=]/g,"^$&"),Ju=t=>pn.test(t)?t:`epubcfi(${t})`,Qu=t=>t.match(pn)?.[1]??t,ed=t=>(...e)=>`epubcfi(${t(...e.map(n=>n.match(pn)?.[1]??n))})`,co=ed((...t)=>t.join("!")),td=t=>{let e=[],n,r,i="",a=s=>(e.push(s),n=null,i=""),o=s=>(i+=s,r=!1);for(let s of Array.from(t.trim()).concat("")){if(s==="^"&&!r){r=!0;continue}if(n==="!")a(["!"]);else if(n===",")a([","]);else if(n==="/"||n===":")if(ni.test(s)){o(s);continue}else a([n,parseInt(i)]);else if(n==="~")if(ni.test(s)||s==="."){o(s);continue}else a(["~",parseFloat(i)]);else if(n==="@"){if(s===":"){a(["@",parseFloat(i)]),n="@";continue}if(ni.test(s)||s==="."){o(s);continue}else a(["@",parseFloat(i)])}else if(n==="["){s===";"&&!r?(a(["[",i]),n=";"):s===","&&!r?(a(["[",i]),n="["):s==="]"&&!r?a(["[",i]):o(s);continue}else if(n?.startsWith(";")){s==="="&&!r?(n=`;${i}`,i=""):s===";"&&!r?(a([n,i]),n=";"):s==="]"&&!r?a([n,i]):o(s);continue}(s==="/"||s===":"||s==="~"||s==="@"||s==="["||s==="!"||s===",")&&(n=s)}return e},uo=(t,e)=>Zu(t,([n])=>n===e),nd=t=>{let e=[],n;for(let[r,i]of t){if(r==="/")e.push({index:i});else{let a=e[e.length-1];if(r===":")a.offset=i;else if(r==="~")a.temporal=i;else if(r==="@")a.spatial=(a.spatial??[]).concat(i);else if(r===";s")a.side=i;else if(r==="[")if(n==="/"&&i)a.id=i;else{a.text=(a.text??[]).concat(i);continue}}n=r}return e},so=t=>lo(t,uo(t,"!")).map(nd),bt=t=>{let e=td(Qu(t)),n=uo(e,",");if(!n.length)return so(e);let[r,i,a]=lo(e,n).map(so);return{parent:r,start:i,end:a}},rd=({index:t,id:e,offset:n,temporal:r,spatial:i,text:a,side:o})=>{let s=o?`;s=${o}`:"";return`/${t}`+(e?`[${oo(e)}${s}]`:"")+(n!=null&&t%2?`:${n}`:"")+(r?`~${r}`:"")+(i?`@${i.join(":")}`:"")+(a||!e&&o?"["+(a?.map(oo)?.join(",")??"")+s+"]":"")},fo=t=>t.parent?[t.parent,t.start,t.end].map(fo).join(","):t.map(e=>e.map(rd).join("")).join("!"),Wn=t=>Ju(fo(t)),lt=(t,e)=>typeof t=="string"?Wn(lt(bt(t),e)):t.parent?Yu(t.parent,t[e?"end":"start"]):t,id=(t,e)=>{typeof t=="string"&&(t=bt(t)),typeof e=="string"&&(e=bt(e)),t=lt(t),e=lt(e,!0);let n=t[t.length-1],r=e[e.length-1],i=[],a=[],o=[],s=!0,l=Math.max(n.length,r.length);for(let c=0;c<l;c++){let f=n[c],d=r[c];s&&=f?.index===d?.index&&!f?.offset&&!d?.offset,s?i.push(f):(f&&a.push(f),d&&o.push(d))}let u=t.slice(0,-1).concat([i]);return Wn({parent:u,start:[a],end:[o]})},hn=(t,e)=>{if(typeof t=="string"&&(t=bt(t)),typeof e=="string"&&(e=bt(e)),t.start||e.start)return hn(lt(t),lt(e))||hn(lt(t,!0),lt(e,!0));for(let n=0;n<Math.max(t.length,e.length);n++){let r=t[n],i=e[n],a=Math.max(r.length,i.length)-1;for(let o=0;o<=a;o++){let s=r[o],l=i[o];if(!s)return-1;if(!l||s.index>l.index)return 1;if(s.index<l.index)return-1;if(o===a){if(s.offset>l.offset)return 1;if(s.offset<l.offset)return-1}}}return 0},ri=({nodeType:t})=>t===3||t===4,$n=({nodeType:t})=>t===1,ai=t=>{let e=Array.from(t.childNodes).filter(n=>ri(n)||$n(n)).reduce((n,r)=>{let i=n[n.length-1];return i?ri(r)?Array.isArray(i)?i.push(r):ri(i)?n[n.length-1]=[i,r]:n.push(r):$n(i)?n.push(null,r):n.push(r):n.push(r),n},[]);return $n(e[0])&&e.unshift("first"),$n(e[e.length-1])&&e.push("last"),e.unshift("before"),e.push("after"),e},ad=(t,e)=>t?ai(t)[e]:null,ii=(t,e)=>{let{id:n}=e[e.length-1];if(n){let a=t.ownerDocument.getElementById(n);if(a)return{node:a,offset:0}}for(let{index:a}of e){let o=ad(t,a);if(o==="first")return{node:t.firstChild??t};if(o==="last")return{node:t.lastChild??t};if(o==="before")return{node:t,before:!0};if(o==="after")return{node:t,after:!0};t=o}let{offset:r}=e[e.length-1];if(!Array.isArray(t))return{node:t,offset:r};let i=0;for(let a of t){let{length:o}=a.nodeValue;if(i+o>=r)return{node:a,offset:r-i};i+=o}},Nn=(t,e)=>{let{parentNode:n,id:r}=t,i=ai(n),a=i.findIndex(l=>Array.isArray(l)?l.some(u=>u===t):l===t),o=i[a];if(Array.isArray(o)){let l=0;for(let u of o)if(u===t){l+=e;break}else l+=u.nodeValue.length;e=l}let s={id:r,index:a,offset:e};return n!==t.ownerDocument.documentElement?Nn(n).concat(s):[s]},ho=t=>{let{startContainer:e,startOffset:n,endContainer:r,endOffset:i}=t,a=Nn(e,n);if(t.collapsed)return Wn([a]);let o=Nn(r,i);return id([a],[o])},Hn=(t,e)=>{let n=lt(e),r=lt(e,!0),i=t.documentElement,a=ii(i,n[0]),o=ii(i,r[0]),s=t.createRange();return a.before?s.setStartBefore(a.node):a.after?s.setStartAfter(a.node):s.setStart(a.node,a.offset),o.before?s.setEndBefore(o.node):o.after?s.setEndAfter(o.node):s.setEnd(o.node,o.offset),s},po=t=>{let e=[],{parentNode:n}=t[0],r=Nn(n);for(let[i,a]of ai(n).entries()){let o=t[e.length];a===o&&e.push(Wn([r.concat({id:o.id,index:i})]))}return e},oi=(t,e)=>ii(t.documentElement,lt(e)).node,si={fromIndex:t=>`/6/${(t+1)*2}`,toIndex:t=>t?.at(-1).index/2-1};var od=t=>{let e=0,n=r=>{if(r.id=e++,r.subitems)for(let i of r.subitems)n(i)};for(let r of t)n(r);return t},go=t=>t.map(e=>e.subitems?.length?[e,go(e.subitems)].flat():e).flat(),mn=class{constructor({toc:e,ids:n,splitHref:r,getFragment:i}){od(e);let a=go(e),o=new Map;for(let[l,u]of a.entries()){let[c,f]=r(u?.href)??[],d={fragment:f,item:u};o.has(c)?o.get(c).items.push(d):o.set(c,{prev:a[l-1],items:[d]})}let s=new Map;for(let[l,u]of n.entries())o.has(u)?s.set(u,o.get(u)):s.set(u,s.get(n[l-1]));this.ids=n,this.map=s,this.getFragment=i}getProgress(e,n){let r=this.ids[e],i=this.map.get(r);if(!i)return null;let{prev:a,items:o}=i;if(!o)return a;if(!n||o.length===1&&!o[0].fragment)return o[0].item;let s=n.startContainer.getRootNode();for(let[l,{fragment:u}]of o.entries()){let c=this.getFragment(s,u);if(c&&n.comparePoint(c,0)>0)return o[l-1]?.item??a}return o[o.length-1].item}},jn=class{constructor(e,n,r){this.sizes=e.map(i=>i.linear==="no"?0:i.size),this.sizePerLoc=n,this.sizePerTimeUnit=r,this.sizeTotal=this.sizes.reduce((i,a)=>i+a,0)}getProgress(e,n){let{sizes:r,sizePerLoc:i,sizePerTimeUnit:a,sizeTotal:o}=this,s=r[e]??0,u=r.slice(0,e).reduce((d,p)=>d+p,0)+n*s,c=o-u,f=(1-n)*s;return{fraction:u/o,section:{current:e,total:r.length},location:{current:Math.floor(u/i),total:Math.ceil(o/i)},time:{section:f/a,total:c/a}}}getSection(e){let{sizes:n,sizeTotal:r}=this,i=e*r,a=-1,o=0,s=0;for(let[l,u]of n.entries()){let c=s+u;if(c>i){a=l,o=(i-s)/u;break}s=c}return[a,o]}};var Vt=t=>document.createElementNS("http://www.w3.org/2000/svg",t),qn=class{#e=Vt("svg");#t=new Map;constructor(){Object.assign(this.#e.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none"});let e=matchMedia("(prefers-color-scheme: dark)"),n=()=>this.#e.style.mixBlendMode=e.matches?"normal":"multiply";e.addEventListener("change",n),n()}get element(){return this.#e}add(e,n,r,i){this.#t.has(e)&&this.remove(e),typeof n=="function"&&(n=n(this.#e.getRootNode()));let a=n.getClientRects(),o=r(a,i);this.#e.append(o),this.#t.set(e,{range:n,draw:r,options:i,element:o,rects:a})}remove(e){this.#t.has(e)&&(this.#e.removeChild(this.#t.get(e).element),this.#t.delete(e))}redraw(){for(let e of this.#t.values()){let{range:n,draw:r,options:i,element:a}=e;this.#e.removeChild(a);let o=n.getClientRects(),s=r(o,i);this.#e.append(s),e.element=s,e.rects=o}}hitTest({x:e,y:n}){let r=Array.from(this.#t.entries());for(let i=r.length-1;i>=0;i--){let[a,o]=r[i];for(let{left:s,top:l,right:u,bottom:c}of o.rects)if(l<=n&&s<=e&&c>n&&u>e)return[a,o.range]}return[]}static underline(e,n={}){let{color:r="red",width:i=2}=n,a=Vt("g");a.setAttribute("fill",r);for(let{left:o,bottom:s,width:l}of e){let u=Vt("rect");u.setAttribute("x",o),u.setAttribute("y",s-i),u.setAttribute("height",i),u.setAttribute("width",l),a.append(u)}return a}static highlight(e,n={}){let{color:r="red"}=n,i=Vt("g");i.setAttribute("fill",r),i.setAttribute("fill-opacity",.3);for(let{left:a,top:o,height:s,width:l}of e){let u=Vt("rect");u.setAttribute("x",a),u.setAttribute("y",o),u.setAttribute("height",s),u.setAttribute("width",l),i.append(u)}return i}static copyImage([e],n={}){let{src:r}=n,i=Vt("image"),{left:a,top:o,height:s,width:l}=e;return i.setAttribute("href",r),i.setAttribute("x",a),i.setAttribute("y",o),i.setAttribute("height",s),i.setAttribute("width",l),i}};var Vn=class{#e=new Map;#t=new Map;#n=new Map;#r=new Map;constructor({resolve:e,compare:n,onAdd:r,onDelete:i,onUpdate:a}){this.resolve=e,this.compare=n,this.onAdd=r,this.onDelete=i,this.onUpdate=a}async add(e,n){let{value:r}=e;if(this.#t.has(r))return;let{index:i,anchor:a}=await this.resolve(r);if(this.#t.set(r,e),this.#r.set(r,i),this.#n.set(r,a),this.#e.has(i)){let o=this.#e.get(i);if(n)o.push(e),this.onAdd?.(e,i,o.length-1);else{let s=0;for(let l=0;l<o.length;l++){let u=o[l].value;if(this.compare(r,u)<=0)break;s=l+1}o.splice(s,0,e),this.onAdd?.(e,i,s)}}else this.#e.set(i,[e]),this.onAdd?.(e,i,0)}update(e){let n=this.#r.get(e.value),r=this.#t.get(e.value);Object.assign(r,e),this.onUpdate?.(e,n)}delete(e){let n=this.#r.get(e),r=this.#e.get(n),i=r.findIndex(a=>a.value===e);r.splice(i,1),this.#t.delete(e),this.#r.delete(e),this.#n.delete(e),this.onDelete?.(e,n,i)}getByIndex(e){return this.#e.get(e)??[]}getAnchor(e){return this.#n.get(e)}};var sd=t=>new Promise(e=>setTimeout(e,t)),ld=(t,e,n)=>{let r;return(...i)=>{let a=()=>{r=null,n||t(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,e),o&&t(...i)}},cd=t=>{if(!t?.collapsed)return t;let{endOffset:e,endContainer:n}=t;if(n.nodeType===1)return n;if(e+1<n.length)t.setEnd(n,e+1);else if(e>1)t.setStart(n,e-1);else return n.parentNode;return t},Gn=(t,e,n,r=n)=>{let i=t.createRange();return i.setStart(e,n),i.setEnd(e,r),i},Kn=(t,e,n,r=0,i=e.nodeValue.length)=>{if(i-r===1)return n(Gn(t,e,r),Gn(t,e,i))<0?r:i;let a=Math.floor(r+(i-r)/2),o=n(Gn(t,e,r,a),Gn(t,e,a,i));return o<0?Kn(t,e,n,r,a):o>0?Kn(t,e,n,a,i):a},{SHOW_ELEMENT:ud,SHOW_TEXT:dd,SHOW_CDATA_SECTION:fd,FILTER_ACCEPT:bo,FILTER_REJECT:yo,FILTER_SKIP:wo}=NodeFilter,hd=ud|dd|fd,pd=(t,e,n,r)=>{let i=d=>{let p=d.localName?.toLowerCase();if(p==="script"||p==="style")return yo;if(d.nodeType===1){let{left:b,right:m}=r(d.getBoundingClientRect());if(m<e||b>n)return yo;if(b>=e&&m<=n)return bo}else{if(!d.nodeValue?.trim())return wo;let b=t.createRange();b.selectNodeContents(d);let{left:m,right:h}=r(b.getBoundingClientRect());if(h>=e&&m<=n)return bo}return wo},a=t.createTreeWalker(t.body,hd,{acceptNode:i}),o=[];for(let d=a.nextNode();d;d=a.nextNode())o.push(d);let s=o[0]??t.body,l=o[o.length-1]??s,u=s.nodeType===1?0:Kn(t,s,(d,p)=>{let b=r(d.getBoundingClientRect()),m=r(p.getBoundingClientRect());return b.right<e&&m.left>e?0:m.left>e?-1:1}),c=l.nodeType===1?0:Kn(t,l,(d,p)=>{let b=r(d.getBoundingClientRect()),m=r(p.getBoundingClientRect());return b.right<n&&m.left>n?0:m.left>n?-1:1}),f=t.createRange();return f.setStart(s,u),f.setEnd(l,c),f},md=t=>{let{defaultView:e}=t,{writingMode:n,direction:r}=e.getComputedStyle(t.body),i=n==="vertical-rl"||n==="vertical-lr",a=t.body.dir==="rtl"||r==="rtl"||t.documentElement.dir==="rtl";return{vertical:i,rtl:a}},gd=t=>{let e=t.defaultView.getComputedStyle(t.body);return e.backgroundColor==="rgba(0, 0, 0, 0)"&&e.backgroundImage==="none"?t.defaultView.getComputedStyle(t.documentElement).background:e.background},li=class{#e=document.createElement("div");#t=document.createElement("iframe");#n=document.createRange();#r;#i=!1;#a=!1;#o=!0;#s;#l={};constructor({container:e}){this.container=e,this.#t.classList.add("filter"),this.#e.append(this.#t),Object.assign(this.#e.style,{position:"relative",overflow:"hidden",flex:"0 0 auto",width:"100%",height:"100%"}),Object.assign(this.#t.style,{overflow:"hidden",border:"0",display:"none",width:"100%",height:"100%"}),this.#t.setAttribute("sandbox","allow-same-origin allow-scripts"),this.#t.setAttribute("scrolling","no")}get element(){return this.#e}get document(){return this.#t.contentDocument}async load(e,n,r){if(typeof e!="string")throw new Error(`${e} is not string`);return new Promise(i=>{this.#t.addEventListener("load",()=>{let a=this.document;n?.(a),this.#t.style.display="block";let{vertical:o,rtl:s}=md(a),l=gd(a);this.#t.style.display="none",this.#i=o,this.#a=s,this.#n.selectNodeContents(a.body);let u=r?.({vertical:o,rtl:s,background:l});this.#t.style.display="block",this.render(u),new ResizeObserver(()=>this.expand()).observe(a.body),i()},{once:!0}),this.#t.src=e})}render(e){this.#o=e.flow!=="scrolled",this.#l=e,this.#o?this.columnize(e):this.scrolled(e)}scrolled({gap:e,columnWidth:n}){let r=this.#i,i=this.document;Object.assign(i.documentElement.style,{boxSizing:"border-box",padding:r?`${e}px 0`:`0 ${e}px`,columnWidth:"auto",height:"auto",width:"auto"}),Object.assign(i.body.style,{[r?"maxHeight":"maxWidth"]:`${n}px`,margin:"auto"}),this.setImageSize(),this.expand()}columnize({width:e,height:n,gap:r,columnWidth:i}){let a=this.#i;this.#s=a?n:e;let o=this.document;Object.assign(o.documentElement.style,{boxSizing:"border-box",columnWidth:`${i}px`,columnGap:`${r}px`,columnFill:"auto",...a?{width:`${e}px`}:{height:`${n}px`},padding:a?`${r/2}px 0`:`0 ${r/2}px`,overflow:"hidden",overflowWrap:"anywhere",position:"static",border:"0",margin:"0",maxHeight:"none",maxWidth:"none",minHeight:"none",minWidth:"none",webkitLineBoxContain:"block glyphs replaced"}),Object.assign(o.body.style,{maxHeight:"none",maxWidth:"none",margin:"0"}),this.setImageSize(),this.expand()}setImageSize(){let{width:e,height:n,margin:r}=this.#l,i=this.#i,a=this.document;for(let o of a.body.querySelectorAll("img, svg, video")){let{maxHeight:s,maxWidth:l}=a.defaultView.getComputedStyle(o);Object.assign(o.style,{maxHeight:i?s!=="none"&&s!=="0px"?s:"100%":`${n-r*2}px`,maxWidth:i?`${e-r*2}px`:l!=="none"&&l!=="0px"?l:"100%",objectFit:"contain",pageBreakInside:"avoid",breakInside:"avoid",boxSizing:"border-box"})}}expand(){if(this.#o){let e=this.#i?"height":"width",n=this.#i?"width":"height",r=this.#n.getBoundingClientRect()[e],a=Math.ceil(r/this.#s)*this.#s;this.#e.style.padding="0",this.#t.style[e]=`${a}px`,this.#e.style[e]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.document&&(this.document.documentElement.style[e]=`${a}px`),this.#r&&(this.#r.element.style.margin="0",this.#r.element.style[e]=`${a}px`,this.#r.redraw())}else{let e=this.#i?"width":"height",n=this.#i?"height":"width",a=this.document?.documentElement?.getBoundingClientRect()?.[e],{margin:o}=this.#l,s=this.#i?`0 ${o}px`:`${o}px 0`;this.#e.style.padding=s,this.#t.style[e]=`${a}px`,this.#e.style[e]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.#r&&(this.#r.element.style.margin=s,this.#r.element.style[e]=`${a}px`,this.#r.redraw())}}set overlayer(e){this.#r=e,this.#e.append(e.element)}get overlayer(){return this.#r}},Xn=class{#e=document.createElement("div");#t=document.createElement("div");#n;#r=!1;#i=!1;#a=-1;#o=0;#s=!1;#l=new WeakMap;layout={margin:48,gap:40,maxColumnWidth:700};constructor({book:e,onLoad:n,onRelocated:r,createOverlayer:i}){this.sections=e.sections,this.onLoad=n,this.onRelocated=r,this.createOverlayer=i,Object.assign(this.#e.style,{boxSizing:"border-box",width:"100%",height:"100%",position:"absolute"}),this.#e.append(this.#t),Object.assign(this.#t.style,{width:"100%",height:"100%"}),new ResizeObserver(()=>this.render()).observe(this.#e),this.#t.addEventListener("scroll",ld(()=>{this.scrolled&&this.#b("scroll")},250))}get element(){return this.#e}#d(){return this.#n&&this.#t.removeChild(this.#n.element),this.#n=new li({container:this.#e}),this.#t.append(this.#n.element),this.#n}#c({vertical:e,rtl:n,background:r}){this.#r=e,this.#i=n,this.#e.style.background=r;let{flow:i,margin:a,gap:o,maxColumnWidth:s}=this.layout;if(i==="scrolled"){this.#e.setAttribute("dir",e?"rtl":"ltr"),this.#e.style.padding="0",this.#t.style.overflow="scroll";let m=this.layout.maxColumnWidth;return{flow:i,margin:a,gap:o,columnWidth:m}}let{width:l,height:u}=this.#t.getBoundingClientRect(),c=e?u:l,f=Math.ceil(c/s),d=c/f-o;this.#e.setAttribute("dir",n?"rtl":"ltr");let p=`${e?o:o/2}px`,b=`${e?a-o/2:a}px`;return this.#e.style.padding=`${b} ${p}`,this.#t.style.overflow="hidden",{height:u,width:l,margin:a,gap:o,columnWidth:d}}render(){this.#n&&(this.#n.render(this.#c({vertical:this.#r,rtl:this.#i})),this.#g())}get scrolled(){return this.layout.flow==="scrolled"}get scrollProp(){let{scrolled:e}=this;return this.#r?e?"scrollLeft":"scrollTop":e?"scrollTop":"scrollLeft"}get sideProp(){let{scrolled:e}=this;return this.#r?e?"width":"height":e?"height":"width"}get size(){return this.#t.getBoundingClientRect()[this.sideProp]}get viewSize(){return this.#n.element.getBoundingClientRect()[this.sideProp]}get start(){return Math.abs(this.#t[this.scrollProp])}get end(){return this.start+this.size}get page(){return Math.floor((this.start+this.end)/2/this.size)}get pages(){return Math.round(this.viewSize/this.size)}#u(){if(this.scrolled){let n=this.viewSize,r=this.layout.margin;return this.#r?({left:i,right:a})=>({left:n-a-r,right:n-i-r}):({top:i,bottom:a})=>({left:i+r,right:a+r})}let e=this.pages*this.size;return this.#i?({left:n,right:r})=>({left:e-r,right:e-n}):this.#r?({top:n,bottom:r})=>({left:n,right:r}):n=>n}async#h(e,n){if(this.scrolled){let i=this.#u()(e).left;return this.#f(i,n)}let r=this.#u()(e).left+this.layout.margin/2;return this.#p(Math.floor(r/this.size),n)}async#f(e,n){let r=this.#t,{scrollProp:i}=this;if(r[i]===e){this.#b(n);return}this.scrolled&&this.#r&&(e=-e),r[i]=e,this.#b(n)}async#p(e,n){let r=this.size*(this.#i?-e:e);return this.#f(r,n)}async#g(e){let n=cd(this.#o).getBoundingClientRect?.();if(n){await this.#h(n,"anchor"),e&&this.#_();return}if(this.scrolled){await this.#f(this.#o*this.viewSize,"anchor");return}let{pages:r}=this;if(!r)return;let i=Math.round(this.#o*(r-1));await this.#p(i,"anchor")}#_(){let{defaultView:e}=this.#n.document;if(this.#o instanceof e.Range){let n=e.getSelection();n.removeAllRanges(),n.addRange(this.#o)}}#T(){return pd(this.#n.document,this.start,this.end,this.#u(),this.scrolled)}#b(e){let n=this.#T();e!=="anchor"&&(this.#o=n);let r=this.#a;this.scrolled?this.onRelocated?.(n,r,this.end/this.viewSize):this.pages>0&&this.onRelocated?.(n,r,(this.page+1)/this.pages)}async#w(e){let{index:n,src:r,anchor:i,onLoad:a,select:o}=await e;if(this.#a=n,r){let s=this.#d(),l=f=>{if(f.head){let d=f.createElement("style");f.head.append(d),this.#l.set(f,d)}a?.(f,n)},u=this.#c.bind(this);await s.load(r,l,u);let c=this.createOverlayer?.(s.document,n);c&&(s.overlayer=c),this.#n=s}this.#o=(typeof i=="function"?i(this.#n.document):i)??0,await this.#g(o)}#v(e){return e>-1&&e<this.pages}scrollPrev(){if(!this.#n)return null;if(this.scrolled)return this.start>0?this.#f(Math.max(0,this.start-this.size)):null;let e=this.page-1;return this.#v(e)?this.#p(e):null}scrollNext(){if(!this.#n)return null;if(this.scrolled)return this.viewSize-this.end>2?this.#f(Math.min(this.viewSize,this.end)):null;let e=this.page+1;return this.#v(e)?this.#p(e):null}#x(e){return e>=0&&e<=this.sections.length-1}async#y(e,n,r){if(this.#s)return;r&&(this.#s=!0);let i=e?.();if(i)await i;else{let{index:a,anchor:o,select:s}=await n;if(!this.#x(a))return this.#s=!1,null;if(a===this.#a)await this.#w({index:a,anchor:o,select:s});else{let l=this.#a,u=(...c)=>{this.sections[l]?.unload?.(),this.onLoad?.(...c)};await this.#w(Promise.resolve(this.sections[a].load()).then(c=>({index:a,src:c,anchor:o,onLoad:u,select:s})).catch(c=>({})))}}r&&(await sd(100),this.#s=!1)}async goTo(e){return this.#y(null,e)}#m(e){for(let n=this.#a+e;this.#x(n);n+=e)if(this.sections[n]?.linear!=="no")return n}prev(){let e=this.#m(-1);return this.#y(()=>this.scrollPrev(),{index:e,anchor:()=>1},!0)}next(){let e=this.#m(1);return this.#y(()=>this.scrollNext(),{index:e},!0)}prevSection(){return this.goTo({index:this.#m(-1)})}nextSection(){return this.goTo({index:this.#m(1)})}firstSection(){let e=this.sections.findIndex(n=>n.linear!=="no");return this.goTo({index:e})}lastSection(){let e=this.sections.findLastIndex(n=>n.linear!=="no");return this.goTo({index:e})}getOverlayer(){if(this.#n)return{index:this.#a,overlayer:this.#n.overlayer,doc:this.#n.document}}setStyle(e){let n=this.#l.get(this.#n?.document);n&&(n.textContent=e)}async#S(e,n){this.#o=e,await this.#g(n)}};var vo=t=>t?.split(/[,;\s]/)?.filter(e=>e)?.map(e=>e.split("=").map(n=>n.trim())),bd=(t,e)=>{if(t.documentElement.nodeName==="svg"){let[,,i,a]=t.documentElement.getAttribute("viewBox")?.split(/\s/)??[];return{width:i,height:a}}let n=vo(t.querySelector('meta[name="viewport"]')?.getAttribute("content"));if(n)return Object.fromEntries(n);if(typeof e=="string")return vo(e);if(e)return e;let r=t.querySelector("img");return r?{width:r.naturalWidth,height:r.naturalHeight}:{width:1e3,height:2e3}},ci=class{#e=document.createElement("div");defaultViewport;spread;#t=!1;#n;#r;#i;#a;constructor(){Object.assign(this.#e.style,{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}),new ResizeObserver(()=>this.render()).observe(this.#e)}get element(){return this.#e}get side(){return this.#a}async#o(e){let n=document.createElement("div"),r=document.createElement("iframe");return n.append(r),Object.assign(r.style,{border:"0",display:"none",overflow:"hidden"}),r.setAttribute("scrolling","no"),r.classList.add("filter"),this.#e.append(n),e?new Promise(i=>{let a=()=>{r.removeEventListener("load",a),this.onLoad?.(r);let o=r.contentDocument,{width:s,height:l}=bd(o,this.defaultViewport);i({element:n,iframe:r,width:parseFloat(s),height:parseFloat(l)})};r.addEventListener("load",a),r.src=e}):{blank:!0,element:n,iframe:r}}render(e=this.#a){if(!e)return;let n=this.#n??{},r=this.#i??this.#r,i=e==="left"?n:r,{width:a,height:o}=this.#e.getBoundingClientRect(),s=this.spread!=="both"&&this.spread!=="portrait"&&o>a;this.#t=s;let l=n.width??r.width,u=n.height??r.height,c=s?Math.min(a/(i.width??l),o/(i.height??u)):Math.min(a/((n.width??l)+(r.width??l)),o/Math.max(n.height??u,r.height??u)),f=d=>{let{element:p,iframe:b,width:m,height:h}=d;Object.assign(b.style,{width:`${m}px`,height:`${h}px`,transform:`scale(${c})`,transformOrigin:"top left",display:"block"}),Object.assign(p.style,{width:`${(m??l)*c}px`,height:`${(h??u)*c}px`,overflow:"hidden",display:"block"}),s&&d!==i&&(p.style.display="none")};this.#i?f(this.#i):(f(n),f(r))}async showSpread({left:e,right:n,center:r,side:i}){this.#e.replaceChildren(),this.#n=null,this.#r=null,this.#i=null,r?(this.#i=await this.#o(r),this.#a="center",this.render()):(this.#n=await this.#o(e),this.#r=await this.#o(n),this.#a=i,this.render())}goLeft(){if(!this.#i){if(this.#n?.blank)return!0;if(this.#t&&this.#n?.element?.style?.display==="none")return this.#r.element.style.display="none",this.#n.element.style.display="block",this.#a="left",!0}}goRight(){if(!this.#i){if(this.#r?.blank)return!0;if(this.#t&&this.#r?.element?.style?.display==="none")return this.#n.element.style.display="none",this.#r.element.style.display="block",this.#a="right",!0}}},Zn=class{#e;#t=-1;#n=new ci;constructor({book:e,onLoad:n,onRelocated:r}){this.book=e,this.onLoad=n,this.onRelocated=r;let{rendition:i}=e;this.#n.spread=i?.spread,this.#n.defaultViewport=i?.viewport;let a=e.dir==="rtl",o=!a;this.rtl=a,i?.spread==="none"?this.#e=e.sections.map(s=>({center:s})):this.#e=e.sections.reduce((s,l)=>{let u=s[s.length-1],{linear:c,pageSpread:f}=l;if(c==="no")return s;let d=()=>{let p={};return s.push(p),p};if(f==="center")d().center=l;else if(f==="left"){let p=u.center||u.left||o?d():u;p.left=l}else if(f==="right"){let p=u.center||u.right||a?d():u;p.right=l}else o?u.center||u.right?d().left=l:u.left?u.right=l:u.left=l:u.center||u.left?d().right=l:u.right?u.left=l:u.right=l;return s},[{}])}get element(){return this.#n.element}get index(){let e=this.#e[this.#t],n=e?.center??(this.#n.side==="left"?e.left??e.right:e.right??e.left);return this.book.sections.indexOf(n)}getSpreadOf(e){let n=this.#e;for(let r=0;r<n.length;r++){let{left:i,right:a,center:o}=n[r];if(i===e)return{index:r,side:"left"};if(a===e)return{index:r,side:"right"};if(o===e)return{index:r,side:"center"}}}async goToSpread(e,n){if(e<0||e>this.#e.length-1)return;if(e===this.#t){this.#n.render(n);return}this.#t=e;let r=this.#e[e];if(r.center){let i=await r.center?.load?.();await this.#n.showSpread({center:i})}else{let i=await r.left?.load?.(),a=await r.right?.load?.();await this.#n.showSpread({left:i,right:a,side:n})}this.onRelocated?.(null,this.index,0,1)}async select(e){await this.goTo(e)}async goTo(e){let{book:n}=this,r=await e,i=n.sections[r.index];if(!i)return;let{index:a,side:o}=this.getSpreadOf(i);await this.goToSpread(a,o)}async next(){if(this.rtl?this.#n.goLeft():this.#n.goRight())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t+1,this.rtl?"right":"left")}async prev(){if(this.rtl?this.#n.goRight():this.#n.goLeft())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t-1,this.rtl?"left":"right")}};var xo=t=>t.replace(/\s+/g," "),yd=(t,{startIndex:e,startOffset:n,endIndex:r,endOffset:i})=>{let a=t[e],o=t[r],s=a===o?a.slice(n,i):a.slice(n)+t.slice(a+1,o).join("")+o.slice(0,i),l=xo(a.slice(0,n)).trimStart(),u=xo(o.slice(i)).trimEnd(),c=l.length<50?"":"\u2026",f=u.length<50?"":"\u2026",d=`${c}${l.slice(-50)}`,p=`${u.slice(0,50)}${f}`;return{pre:d,match:s,post:p}},wd=function*(t,e,n={}){let{locales:r="en",granularity:i="word",sensitivity:a="base"}=n,o,s;try{o=new Intl.Segmenter(r,{usage:"search",granularity:i}),s=new Intl.Collator(r,{sensitivity:a})}catch{o=new Intl.Segmenter("en",{usage:"search",granularity:i}),s=new Intl.Collator("en",{sensitivity:a})}let l=Array.from(o.segment(e)).length,u=[],c=0,f=o.segment(t[c])[Symbol.iterator]();e:for(;c<t.length;){for(;u.length<l;){let{done:p,value:b}=f.next();if(p)if(c++,c<t.length){f=o.segment(t[c])[Symbol.iterator]();continue}else break e;let{index:m,segment:h}=b;if(/[^\p{Format}]/u.test(h)){if(/\s/u.test(h)){/\s/u.test(u[u.length-1]?.segment)||u.push({strIndex:c,index:m,segment:" "});continue}b.strIndex=c,u.push(b)}}let d=u.map(p=>p.segment).join("");if(s.compare(e,d)===0){let p=c,b=u[u.length-1],m=b.index+b.segment.length,h=u[0].strIndex,g=u[0].index,y={startIndex:h,startOffset:g,endIndex:p,endOffset:m};yield{range:y,excerpt:yd(t,y)}}u.shift()}},_o=(t,e)=>{let{defalutLocale:n,matchCase:r,matchDiacritics:i,matchWholeWords:a}=e;return function*(o,s){let l=t(o,function*(u,c){for(let f of wd(u,s,{locales:o.body.lang||o.documentElement.lang||n||"en",granularity:a?"word":"grapheme",sensitivity:i&&r?"variant":i&&!r?"accent":!i&&r?"case":"base"})){let{startIndex:d,startOffset:p,endIndex:b,endOffset:m}=f.range;f.range=c(d,p,b,m),yield f}});for(let u of l)yield u}};var vd=function*(t,e){let n=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT|NodeFilter.SHOW_CDATA_SECTION,{FILTER_ACCEPT:r,FILTER_REJECT:i,FILTER_SKIP:a}=NodeFilter,o=f=>{let d=f.localName?.toLowerCase();return d==="script"||d==="style"?i:f.nodeType===1?a:r},s=t.createTreeWalker(t.body,n,{acceptNode:o}),l=[];for(let f=s.nextNode();f;f=s.nextNode())l.push(f);let u=l.map(f=>f.nodeValue),c=(f,d,p,b)=>{let m=t.createRange();return m.setStart(l[f],d),m.setEnd(l[p],b),m};for(let f of e(u,c))yield f};var To=Object.fromEntries(Array.from(Object.entries({isRef:["annoref","biblioref","glossref","noteref"],isLink:["backlink"],isNote:["annotation","note","footnote","endnote","rearnote"]}),([t,e])=>[t,n=>n.getAttributeNS("http://www.idpf.org/2007/ops","type")?.split(/s/)?.some(r=>e.includes(r))])),Yn=class{#e;#t;#n;#r;language="en";textDirection="";isCJK=!1;isFixedLayout=!1;annotations=new Vn({resolve:e=>this.resolveCFI(e),compare:hn,onAdd:(e,n,r)=>{let i=this.#s(n);i&&this.#o(i.doc,i.overlayer,e);let a=this.#t.getProgress(n)?.label??"";this?.emit({type:"add-annotation",annotation:e,label:a,index:n,position:r})},onDelete:(e,n,r)=>{this.#s(n)?.overlayer?.remove(e),this?.emit({type:"delete-annotation",index:n,position:r})},onUpdate:(e,n)=>{let r=this.#s(n);r&&(r.overlayer.remove(e.value),this.#o(r.doc,r.overlayer,e))}});constructor(e,n){if(this.book=e,this.emit=n,e.metadata?.language)try{let r=e.metadata.language;e.metadata.language=Intl.getCanonicalLocales(r)[0];let i=typeof r=="string"?r:r[0],a=new Intl.Locale(i);this.isCJK=["zh","ja","kr"].includes(a.language),a.textInfo&&a.textInfo.direction&&(this.textDirection=a.textInfo.direction)}catch{}if(e.splitTOCHref&&e.getTOCFragment){let r=e.sections.map(o=>o.id);this.#e=new jn(e.sections,150,1600);let i=e.splitTOCHref.bind(e),a=e.getTOCFragment.bind(e);this.#t=new mn({toc:e.toc??[],ids:r,splitHref:i,getFragment:a}),this.#n=new mn({toc:e.pageList??[],ids:r,splitHref:i,getFragment:a})}}async display(){let e={book:this.book,onLoad:this.#a.bind(this),onRelocated:this.#i.bind(this),createOverlayer:this.#l.bind(this)};return this.isFixedLayout=this.book.rendition?.layout==="pre-paginated",this.isFixedLayout?this.renderer=new Zn(e):this.renderer=new Xn(e),this.renderer.element}async init({lastLocation:e,annotations:n}){if(e){let r=this.resolveNavigation(e);r?await this.renderer.goTo(r):await this.renderer.next()}else await this.renderer.next();if(n){n.sort((r,i)=>hn(r.value,i.value));for(let r of n)await this.annotations.add(r,!0)}}#i(e,n,r){if(!this.#e)return;let i=this.#e.getProgress(n,r),a=this.#t.getProgress(n,e),o=this.#n.getProgress(n,e),s=this.getCFI(n,e);this.emit?.({type:"relocated",...i,tocItem:a,pageItem:o,cfi:s})}#a(e,n){let{book:r}=this;e.documentElement.lang||=this.language,e.documentElement.dir||=this.isCJK?"":this.textDirection,this.renderer.setStyle(this.#r);let i=r.sections[n];for(let a of e.querySelectorAll("a[href]"))a.addEventListener("click",o=>{o.preventDefault();let s=a.getAttribute("href"),l=i?.resolveHref?.(s)??s;if(r?.isExternal?.(l))this.emit?.({type:"external-link",uri:l});else if(To.isRef(a)){let{index:u,anchor:c}=r.resolveHref(l);Promise.resolve(r.sections[u].createDocument()).then(f=>[c(f),f.contentType]).then(([f,d])=>[f?.innerHTML,d,To.isNote(f)]).then(([f,d,p])=>f?this.emit?.({type:"reference",href:p?null:l,content:f,contentType:d,element:a}):null).catch(f=>{});return}else this.goTo(l)});this.emit?.({type:"loaded",doc:e,index:n})}#o(e,n,r){let{value:i}=r,a=this.annotations.getAnchor(i),o=e?a(e):a,[s,l]=this.emit({type:"draw-annotation",annotation:r});n.add(i,o,s,l)}#s(e){let n=this.renderer.getOverlayer();if(n.index===e)return n}#l(e,n){let r=new qn;for(let i of this.annotations.getByIndex(n))this.#o(e,r,i);return e.addEventListener("click",i=>{let[a,o]=r.hitTest(i);a&&this.emit?.({type:"show-annotation",value:a,range:o})},!1),r}async showAnnotation(e){let{value:n}=e,{index:r,anchor:i}=await this.goTo(n),{doc:a}=this.#s(r),o=i(a);this.emit?.({type:"show-annotation",value:n,range:o})}getCFI(e,n){if(!n)return"";let r=this.book.sections[e].cfi??si.fromIndex(e);return co(r,ho(n))}resolveCFI(e){if(this.book.resolveCFI)return this.book.resolveCFI(e);{let n=bt(e);return{index:si.toIndex((n.parent??n).shift()),anchor:a=>Hn(a,n)}}}resolveNavigation(e){try{return typeof e=="number"?{index:e}:pn.test(e)?this.resolveCFI(e):this.book.resolveHref(e)}catch{}}async goTo(e){let n=this.resolveNavigation(e);try{return await this.renderer.goTo(n),n}catch{}}async goToFraction(e){let[n,r]=this.#e.getSection(e);return this.renderer.goTo({index:n,anchor:r})}async select(e){try{let n=await this.resolveNavigation(e);await this.renderer.goTo({...n,select:!0})}catch{}}goLeft(){return this.book.dir==="rtl"?this.renderer.next():this.renderer.prev()}goRight(){return this.book.dir==="rtl"?this.renderer.prev():this.renderer.next()}setAppearance({layout:e,css:n}){this.isFixedLayout||(Object.assign(this.renderer.layout,e),this.#r=n,this.renderer.setStyle(n),this.renderer.render())}async*#d(e,n,r){let i=await this.book.sections[r].createDocument();for(let{range:a,excerpt:o}of e(i,n))yield{cfi:this.getCFI(r,a),excerpt:o}}async*#c(e,n){let{sections:r}=this.book;for(let[i,{createDocument:a}]of r.entries()){if(!a)continue;let o=await a(),s=Array.from(e(o,n),({range:u,excerpt:c})=>({cfi:this.getCFI(i,u),excerpt:c}));yield{progress:(i+1)/r.length},s.length&&(yield{index:i,subitems:s})}}async*search(e){let{query:n,index:r}=e,i=_o(vd,{defaultLocale:this.language,...e}),a=r!=null?this.#d(i,n,r):this.#c(i,n);for await(let o of a)yield"subitems"in o?{label:this.#t.getProgress(o.index)?.label??"",subitems:o.subitems}:o}};var xd=(t,e,n)=>{let r=document.createElement("ul");r.setAttribute("role","group"),r.setAttribute("aria-label",t);let i=new Map,a=o=>{n(o);let s=i.get(o);for(let l of r.children)l.setAttribute("aria-checked",l===s?"true":"false")};for(let[o,s]of e){let l=document.createElement("li");l.setAttribute("role","menuitemradio"),l.innerText=o,l.onclick=()=>a(s),i.set(s,l),r.append(l)}return{element:r,select:a}},So=t=>{let e={},n=document.createElement("ul");n.setAttribute("role","menu");let r=()=>n.classList.remove("show"),i=a=>(...o)=>(r(),a(...o));for(let{name:a,label:o,type:s,items:l,onclick:u}of t){let c=s==="radio"?xd(o,l,i(u)):null;a&&(e[a]=c),n.append(c.element)}return window.addEventListener("blur",()=>r()),window.addEventListener("click",a=>{n.parentNode.contains(a.target)||r()}),{element:n,groups:e}};function gn(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():J}var Ig=gn();var Mg=gn().PROD==="1",Og=gn().PROD!=="1";var ko=({entries:t,loadBlob:e,getSize:n},r)=>{let i=new Map,a=new Map,o=async f=>{if(i.has(f))return i.get(f);let d=URL.createObjectURL(await e(f)),p=URL.createObjectURL(new Blob([`<img src="${d}">`],{type:"text/html"}));return a.set(f,[d,p]),i.set(f,p),p},s=f=>{a.get(f)?.forEach?.(d=>URL.revokeObjectURL(d)),a.delete(f),i.delete(f)},l=[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg"],u=t.map(f=>f.filename).filter(f=>l.some(d=>f.endsWith(d))).sort(),c={};return c.getCover=()=>e(u[0]),c.metadata={title:r.name},c.sections=u.map(f=>({id:f,load:()=>o(f),unload:()=>s(f),size:n(f)})),c.toc=u.map(f=>({label:f,href:f})),c.rendition={layout:"pre-paginated"},c.resolveHref=f=>({index:c.sections.findIndex(d=>d.id===f)}),c.splitTOCHref=f=>[f,null],c.getTOCFragment=f=>f.documentElement,c};var Ao=t=>t?.trim()?.replace(/\s{2,}/g," "),Ke=t=>Ao(t?.textContent),Jn={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},Qn={XML:"application/xml",XHTML:"application/xhtml+xml"},rt={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},_d={tr:["tr",["align"]],th:["th",["colspan","rowspan","align","valign"]],td:["td",["colspan","rowspan","align","valign"]]},Eo={epigraph:["blockquote"],subtitle:["h2",rt],"text-author":["p",rt],date:["p",rt],stanza:"stanza"},er={title:["header",{p:["h1",rt],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",rt],poem:["blockquote",Eo],subtitle:["h2",rt],cite:["blockquote","self"],"empty-line":["br"],table:["table",_d],"text-author":["p",rt]};Eo.epigraph.push(er);var Td={image:"image",title:["section",{p:["h1",rt],"empty-line":["br"]}],epigraph:["section",er],section:["section",er]},Co=t=>{let e=t.getAttributeNS(Jn.XLINK,"href"),[,n]=e.split("#"),r=t.getRootNode().getElementById(n);return r?`data:${r.getAttribute("content-type")};base64,${r.textContent}`:e},di=class{constructor(e){this.fb2=e,this.doc=document.implementation.createDocument(Jn.XHTML,"html")}image(e){let n=this.doc.createElement("img");return n.alt=e.getAttribute("alt"),n.title=e.getAttribute("title"),n.setAttribute("src",Co(e)),n}anchor(e){let n=this.convert(e,{a:["a",rt]});return n.setAttribute("href",e.getAttributeNS(Jn.XLINK,"href")),e.getAttribute("type")==="note"&&n.setAttributeNS(Jn.EPUB,"epub:type","noteref"),n}stanza(e){let n=this.convert(e,{stanza:["p",{title:["header",{p:["strong",rt],"empty-line":["br"]}],subtitle:["p",rt]}]});for(let r of e.children)r.nodeName==="v"&&(n.append(this.doc.createTextNode(r.textContent)),n.append(this.doc.createElement("br")));return n}convert(e,n){if(e.nodeType===3)return this.doc.createTextNode(e.textContent);if(e.nodeType===4)return this.doc.createCDATASection(e.textContent);if(e.nodeType===8)return this.doc.createComment(e.textContent);let r=n?.[e.nodeName];if(!r)return null;if(typeof r=="string")return this[r](e);let[i,a]=r,o=this.doc.createElement(i);if(e.id&&(o.id=e.id),o.classList.add(e.nodeName),Array.isArray(a))for(let u of a)o.setAttribute(u,e.getAttribute(u));let s=a==="self"?n:Array.isArray(a)?null:a,l=e.firstChild;for(;l;){let u=this.convert(l,s);u&&o.append(u),l=l.nextSibling}return o}},Sd=async t=>{let e=await t.arrayBuffer(),n=new TextDecoder("utf-8").decode(e),r=new DOMParser,i=r.parseFromString(n,Qn.XML),a=i.xmlEncoding||n.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];if(a&&a.toLowerCase()!=="utf-8"){let o=new TextDecoder(a).decode(e);return r.parseFromString(o,Qn.XML)}return i},kd=URL.createObjectURL(new Blob([`
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
`],{type:"text/css"})),Ad=t=>`<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${kd}" rel="stylesheet" type="text/css"/></head>
    <body>${t}</body>
</html>`,ui="data-foliate-id",fi=async t=>{let e={},n=await Sd(t),r=new di(n),i=d=>n.querySelector(d),a=d=>[...n.querySelectorAll(d)],o=d=>{let p=Ke(d.querySelector("nickname"));if(p)return p;let b=Ke(d.querySelector("first-name")),m=Ke(d.querySelector("middle-name")),h=Ke(d.querySelector("last-name")),g=[b,m,h].filter(w=>w).join(" "),y=h?[h,[b,m].filter(w=>w).join(" ")].join(", "):null;return{name:g,sortAs:y}},s=d=>d?.getAttribute("value")??Ke(d),l=i("title-info annotation");e.metadata={title:Ke(i("title-info book-title")),identifier:Ke(i("document-info id")),language:Ke(i("title-info lang")),author:a("title-info author").map(o),translator:a("title-info translator").map(o),producer:a("document-info author").map(o).concat(a("document-info program-used").map(Ke)),publisher:Ke(i("publish-info publisher")),published:s(i("title-info date")),modified:s(i("document-info date")),description:l?r.convert(l,{annotation:["div",er]}).innerHTML:null,subject:a("title-info genre").map(Ke)},e.getCover=()=>fetch(Co(i("coverpage image"))).then(d=>d.blob());let u=Array.from(n.querySelectorAll("body"),d=>{let p=r.convert(d,{body:["body",Td]});return[Array.from(p.children,b=>{let m=[b,...b.querySelectorAll("[id]")].map(h=>h.id);return{el:b,ids:m}}),p]}),c=u[0][0].map(({el:d,ids:p})=>{let b=Array.from(d.querySelectorAll(":scope > section > .title"),(m,h)=>(m.setAttribute(ui,h),{title:Ke(m),index:h}));return{ids:p,titles:b,el:d}}).concat(u.slice(1).map(([d,p])=>{let b=d.map(m=>m.ids).flat();return p.classList.add("notesBodyType"),{ids:b,el:p,linear:"no"}})).map(({ids:d,titles:p,el:b,linear:m})=>{let h=Ad(b.outerHTML),g=new Blob([h],{type:Qn.XHTML}),y=URL.createObjectURL(g),w=Ao(b.querySelector(".title, .subtitle, p")?.textContent??(b.classList.contains("title")?b.textContent:""));return{ids:d,title:w,titles:p,load:()=>y,createDocument:()=>new DOMParser().parseFromString(h,Qn.XHTML),size:g.size-Array.from(b.querySelectorAll("[src]"),S=>S.getAttribute("src")?.length??0).reduce((S,_)=>S+_,0),linear:m}}),f=new Map;return e.sections=c.map((d,p)=>{let{ids:b,load:m,createDocument:h,size:g,linear:y}=d;for(let w of b)w&&f.set(w,p);return{id:p,load:m,createDocument:h,size:g,linear:y}}),e.toc=c.map(({title:d,titles:p},b)=>{let m=b.toString();return{label:d,href:m,subitems:p?.length?p.map(({title:h,index:g})=>({label:h,href:`${m}#${g}`})):null}}).filter(d=>d),e.resolveHref=d=>{let[p,b]=d.split("#");return p?{index:Number(p),anchor:m=>m.querySelector(`[${ui}="${b}"]`)}:{index:f.get(b),anchor:m=>m.getElementById(b)}},e.splitTOCHref=d=>d?.split("#")?.map(p=>Number(p))??[],e.getTOCFragment=(d,p)=>d.querySelector(`[${ui}="${p}"]`),e};var St=t=>{if(!t)return"";let e=document.createElement("textarea");return e.innerHTML=t,e.value},Bt={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},Ed={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Cd={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},Dd={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},Rd={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},Fd={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Do={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},Ld={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},Id={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},Md={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},Od={magic:[0,4,"string"],numEntries:[8,4,"uint"]},zd={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]},Pd={1252:"windows-1252",65001:"utf-8"},Ro={100:["creator","string",!0],101:["publisher"],103:["description"],104:["isbn"],105:["subject","string",!0],106:["date"],108:["contributor","string",!0],109:["rights"],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin"],121:["boundary","uint"],122:["fixedLayout"],125:["numResources","uint"],126:["originalResolution"],127:["zeroGutter"],128:["zeroMargin"],129:["coverURI"],132:["regionMagnification"],201:["coverOffset","uint"],202:["thumbnailOffset","uint"],503:["title"],524:["language","string",!0],527:["pageProgressionDirection"]},Ud={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},rr=(t,e)=>{let n=new t.constructor(t.length+e.length);return n.set(t),n.set(e,t.length),n},Oo=(t,e,n)=>{let r=new t.constructor(t.length+e.length+n.length);return r.set(t),r.set(e,t.length),r.set(n,t.length+e.length),r},Bd=new TextDecoder,bn=t=>Bd.decode(t),Le=t=>{if(!t)return;let e=t.byteLength,n=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[n](0)},Xe=(t,e)=>Object.fromEntries(Array.from(Object.entries(t)).map(([n,[r,i,a]])=>[n,(a==="string"?bn:Le)(e.slice(r,r+i))])),gi=t=>new TextDecoder(Pd[t]),tr=(t,e=0)=>{let n=0,r=0;for(let i of t.subarray(e,e+4))if(n=n<<7|(i&127)>>>0,r++,i&128)break;return{value:n,length:r}},$d=t=>{let e=0;for(let n of t.subarray(-4))n&128&&(e=0),e=e<<7|n&127;return e},zo=t=>{let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e},Nd=t=>{let e=0;for(;!(t&1);)t=t>>1,e++;return e},Wd=t=>{let e=[];for(let n=0;n<t.length;n++){let r=t[n];if(r===0)e.push(0);else if(r<=8)for(let i of t.subarray(n+1,(n+=r)+1))e.push(i);else if(r<=127)e.push(r);else if(r<=191){let i=r<<8|t[n+++1],a=(i&16383)>>>3,o=(i&7)+3;for(let s=0;s<o;s++)e.push(e[e.length-a])}else e.push(32,r^128)}return Uint8Array.from(e)},Hd=(t,e)=>{let n=e>>3,r=e+32,i=r>>3,a=0n;for(let o=n;o<=i;o++)a=a<<8n|BigInt(t[o]??0);return a>>8n-BigInt(r&7)&0xffffffffn},jd=async(t,e)=>{let n=await e(t.huffcdic),{magic:r,offset1:i,offset2:a}=Xe(Id,n);if(r!=="HUFF")throw new Error("Invalid HUFF record");let o=Array.from({length:256},(c,f)=>i+f*4).map(c=>Le(n.slice(c,c+4))).map(c=>[c&128,c&31,c>>>8]),s=[null].concat(Array.from({length:32},(c,f)=>a+f*8).map(c=>[Le(n.slice(c,c+4)),Le(n.slice(c+4,c+8))])),l=[];for(let c=1;c<t.numHuffcdic;c++){let f=await e(t.huffcdic+c),d=Xe(Md,f);if(d.magic!=="CDIC")throw new Error("Invalid CDIC record");let p=Math.min(1<<d.codeLength,d.numEntries-l.length),b=f.slice(d.length);for(let m=0;m<p;m++){let h=Le(b.slice(m*2,m*2+2)),g=Le(b.slice(h,h+2)),y=g&32767,w=g&32768,S=new Uint8Array(b.slice(h+2,h+2+y));l.push([S,w])}}let u=c=>{let f=new Uint8Array,d=c.byteLength*8;for(let p=0;p<d;){let b=Number(Hd(c,p)),[m,h,g]=o[b>>>24];if(!m){for(;b>>>32-h<s[h][0];)h+=1;g=s[h][1]}if((p+=h)>d)break;let y=g-(b>>>32-h),[w,S]=l[y];S||(w=u(w),l[y]=[w,!0]),f=rr(f,w)}return f};return u},nr=async(t,e)=>{let n=await e(t),r=Xe(Do,n);if(r.magic!=="INDX")throw new Error("Invalid INDX record");let i=gi(r.encoding),a=n.slice(r.length),o=Xe(Ld,a);if(o.magic!=="TAGX")throw new Error("Invalid TAGX section");let s=(o.length-12)/4,l=Array.from({length:s},(d,p)=>new Uint8Array(a.slice(12+p*4,12+p*4+4))),u={},c=0;for(let d=0;d<r.numCncx;d++){let p=await e(t+r.numRecords+d+1),b=new Uint8Array(p);for(let m=0;m<b.byteLength;){let h=m,{value:g,length:y}=tr(b,m);m+=y;let w=p.slice(m,m+g);m+=g,u[c+h]=i.decode(w)}c+=65536}let f=[];for(let d=0;d<r.numRecords;d++){let p=await e(t+1+d),b=new Uint8Array(p),m=Xe(Do,p);if(m.magic!=="INDX")throw new Error("Invalid INDX record");for(let h=0;h<m.numRecords;h++){let g=m.idxt+4+2*h,y=Le(p.slice(g,g+2)),w=Le(p.slice(y,y+1)),S=bn(p.slice(y+1,y+1+w)),_=[],v=y+1+w,x=0,T=v+o.numControlBytes;for(let[k,E,F,C]of l){if(C&1){x++;continue}let I=v+x,R=Le(p.slice(I,I+1))&F;if(R===F)if(zo(F)>1){let{value:M,length:P}=tr(b,T);_.push([k,null,M,E]),T+=P}else _.push([k,1,null,E]);else _.push([k,R>>Nd(F),null,E])}let A={};for(let[k,E,F,C]of _){let I=[];if(E!=null)for(let R=0;R<E*C;R++){let{value:M,length:P}=tr(b,T);I.push(M),T+=P}else{let R=0;for(;R<F;){let{value:M,length:P}=tr(b,T);I.push(M),T+=P,R+=P}}A[k]=I}f.push({name:S,tagMap:A})}}return{table:f,cncx:u}},qd=async(t,e)=>{let{table:n,cncx:r}=await nr(t,e),i=n.map(({tagMap:o},s)=>({index:s,offset:o[1]?.[0],size:o[2]?.[0],label:r[o[3]]??"",headingLevel:o[4]?.[0],pos:o[6],parent:o[21]?.[0],firstChild:o[22]?.[0],lastChild:o[23]?.[0]})),a=o=>(o.firstChild==null||(o.children=i.filter(s=>s.parent===o.index).map(a)),o);return i.filter(o=>o.headingLevel===0).map(a)},Vd=(t,e)=>{let{magic:n,count:r}=Xe(Fd,t);if(n!=="EXTH")throw new Error("Invalid EXTH header");let i=gi(e),a={},o=12;for(let s=0;s<r;s++){let l=Le(t.slice(o,o+4)),u=Le(t.slice(o+4,o+8));if(l in Ro){let[c,f,d]=Ro[l],p=t.slice(o+8,o+u),b=f==="uint"?Le(p):i.decode(p);d?(a[c]??=[],a[c].push(b)):a[c]=b}o+=u}return a},Gd=async(t,e)=>{let{flags:n,dataStart:r,keyLength:i,keyStart:a}=Xe(zd,t),o=new Uint8Array(t.slice(r));if(n&2){let l=i===16?1024:1040,u=new Uint8Array(t.slice(a,a+i)),c=Math.min(l,o.length);for(var s=0;s<c;s++)o[s]=o[s]^u[s%u.length]}if(n&1)try{return await e(o)}catch{}return o},Po=async t=>bn(await t.slice(60,68).arrayBuffer())==="BOOKMOBI",hi=class{#e;#t;pdb;async open(e){this.#e=e;let n=Xe(Ed,await e.slice(0,78).arrayBuffer());this.pdb=n;let r=await e.slice(78,78+n.numRecords*8).arrayBuffer();this.#t=Array.from({length:n.numRecords},(i,a)=>Le(r.slice(a*8,a*8+4))).map((i,a,o)=>[i,o[a+1]])}loadRecord(e){let n=this.#t[e];if(!n)throw new RangeError("Record index out of bounds");return this.#e.slice(...n).arrayBuffer()}async loadMagic(e){let n=this.#t[e][0];return bn(await this.#e.slice(n,n+4).arrayBuffer())}},ir=class extends hi{#e=0;#t;#n;#r;#i;#a;constructor({unzlib:e}){super(),this.unzlib=e}async open(e){await super.open(e),this.headers=this.#o(await super.loadRecord(0)),this.#t=this.headers.mobi.resourceStart;let n=this.headers.mobi.version>=8;if(!n){let r=this.headers.exth?.boundary;if(r<4294967295)try{this.headers=this.#o(await super.loadRecord(r)),this.#e=r,n=!0}catch{}}return await this.#s(),n?new mi(this).init():new pi(this).init()}#o(e){let n=Xe(Cd,e),r=Xe(Dd,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:i,titleLength:a,localeLanguage:o,localeRegion:s}=r;r.title=e.slice(i,i+a);let l=Ud[o];r.language=l?.[s>>2]??l?.[0];let u=r.exthFlag&64?Vd(e.slice(r.length+16),r.encoding):null,c=r.version>=8?Xe(Rd,e):null;return{palmdoc:n,mobi:r,exth:u,kf8:c}}async#s(){let{palmdoc:e,mobi:n}=this.headers;this.#n=gi(n.encoding),this.#r=new TextEncoder;let{compression:r}=e;if(this.#i=r===1?s=>s:r===2?Wd:r===17480?await jd(n,this.loadRecord.bind(this)):null,!this.#i)throw new Error("Unknown compression type");let{trailingFlags:i}=n,a=i&1,o=zo(i>>>1);this.#a=s=>{for(let l=0;l<o;l++){let u=$d(s);s=s.subarray(0,-u)}if(a){let l=(s[s.length-1]&3)+1;s=s.subarray(0,-l)}return s}}decode(...e){return this.#n.decode(...e)}encode(...e){return this.#r.encode(...e)}loadRecord(e){return super.loadRecord(this.#e+e)}loadMagic(e){return super.loadMagic(this.#e+e)}loadText(e){return this.loadRecord(e+1).then(n=>new Uint8Array(n)).then(this.#a).then(this.#i)}async loadResource(e){let n=await super.loadRecord(this.#t+e),r=bn(n.slice(0,4));return r==="FONT"?Gd(n,this.unzlib):r==="VIDE"||r==="AUDI"?n.slice(12):n}getNCX(){let e=this.headers.mobi.indx;if(e<4294967295)return qd(e,this.loadRecord.bind(this))}getMetadata(){let{mobi:e,exth:n}=this.headers;return{identifier:e.uid.toString(),title:St(n?.title||this.decode(e.title)),author:n?.creator?.map(St),publisher:St(n?.publisher),language:n?.language??e.language,published:n?.date,description:St(n?.description),subject:n?.subject?.map(St),rights:St(n?.rights)}}async getCover(){let{exth:e}=this.headers,n=e?.coverOffset<4294967295?e?.coverOffset:e?.thumbnailOffset<4294967295?e?.thumbnailOffset:null;if(n!=null){let r=await this.loadResource(n);return new Blob([r])}}},Fo=/<\s*(?:mbp:)?pagebreak[^>]*>/gi,Kd=/<[^<>]+filepos=['"]{0,1}(\d+)[^<>]*>/gi,pi=class{parser=new DOMParser;serializer=new XMLSerializer;#e=new Map;#t=new Map;#n=new Map;#r;#i=[];#a=Bt.HTML;constructor(e){this.mobi=e}async init(){let e=new Uint8Array;for(let i=0;i<this.mobi.headers.palmdoc.numTextRecords;i++)e=rr(e,await this.mobi.loadText(i));let n=Array.from(new Uint8Array(e),i=>String.fromCharCode(i)).join("");this.#r=[0].concat(Array.from(n.matchAll(Fo),i=>i.index)).map((i,a,o)=>n.slice(i,o[a+1])).map(i=>Uint8Array.from(i,a=>a.charCodeAt(0))).map(i=>({book:this,raw:i})).reduce((i,a)=>{let o=i[i.length-1];return a.start=o?.end??0,a.end=a.start+a.raw.byteLength,i.concat(a)},[]),this.sections=this.#r.map((i,a)=>({id:a,load:()=>this.loadSection(i),createDocument:()=>this.createDocument(i),size:i.end-i.start}));let r=[];try{let i=await this.mobi.getNCX(),a=({label:o,offset:s,children:l})=>{let u=s.toString().padStart(10,"0"),c=`filepos:${u}`;return r.push(u),o=St(o),{label:o,href:c,subitems:l?.map(a)}};if(this.toc=i?.map(a),this.landmarks=await this.getGuide(),!this.toc){let o=this.landmarks.find(({type:s})=>s?.includes("toc"))?.href;if(o){let{index:s}=this.resolveHref(o),l=await this.sections[s].createDocument();this.toc=Array.from(l.querySelectorAll("a[filepos]"),u=>({label:u.innerText?.trim(),href:`filepos:${u.getAttribute("filepos")}`}))}}}catch{}return this.#i=[...new Set(r.concat(Array.from(n.matchAll(Kd),i=>i[1])))].map(i=>({filepos:i,number:Number(i)})).sort((i,a)=>i.number-a.number),this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getGuide(){let e=await this.createDocument(this.#r[0]);return Array.from(e.getElementsByTagName("reference"),n=>({label:n.getAttribute("title"),type:n.getAttribute("type")?.split(/\s/),href:`filepos:${n.getAttribute("filepos")}`}))}async loadResource(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.mobi.loadResource(e),r=URL.createObjectURL(new Blob([n]));return this.#e.set(e,r),r}async loadRecindex(e){return this.loadResource(Number(e)-1)}async replaceResources(e){for(let n of e.querySelectorAll("img[recindex]")){let r=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r)}catch{}}for(let n of e.querySelectorAll("[mediarecindex]")){let r=n.getAttribute("mediarecindex"),i=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r),i&&(n.poster=await this.loadRecindex(i))}catch{}}for(let n of e.querySelectorAll("[filepos]")){let r=n.getAttribute("filepos");n.href=`filepos:${r}`}}async loadText(e){if(this.#t.has(e))return this.#t.get(e);let{raw:n}=e,r=this.#i.filter(({number:o})=>o>=e.start&&o<e.end).map(o=>({...o,offset:o.number-e.start})),i=n;r.length&&(i=n.subarray(0,r[0].offset),r.forEach(({filepos:o,offset:s},l)=>{let u=r[l+1],c=this.mobi.encode(`<a id="filepos${o}"></a>`);i=Oo(i,c,n.subarray(s,u?.offset))}));let a=this.mobi.decode(i).replaceAll(Fo,"");return this.#t.set(e,a),a}async createDocument(e){let n=await this.loadText(e);return this.parser.parseFromString(n,this.#a)}async loadSection(e){if(this.#n.has(e))return this.#n.get(e);let n=await this.createDocument(e),r=n.createElement("style");n.head.append(r),r.append(n.createTextNode(`blockquote {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 1em;
            margin-inline-end: 0;
        }`)),await this.replaceResources(n);let i=this.serializer.serializeToString(n),a=URL.createObjectURL(new Blob([i],{type:this.#a}));return this.#n.set(e,a),a}resolveHref(e){let n=e.match(/filepos:(.*)/)[1],r=Number(n);return{index:this.#r.findIndex(o=>o.end>r),anchor:o=>o.getElementById(`filepos${n}`)}}splitTOCHref(e){let n=e.match(/filepos:(.*)/)[1],r=Number(n);return[this.#r.findIndex(a=>a.end>r),`filepos${n}`]}getTOCFragment(e,n){return e.getElementById(n)}isExternal(e){return/^(?!blob|filepos)\w+:/i.test(e)}},Uo=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,Xd=/kindle:pos:fid:(\w+):off:(\w+)/,Zd=t=>{let[e,n,r]=t.match(Uo).slice(1);return{resourceType:e,id:parseInt(n,32),type:r}},Lo=t=>{let[e,n]=t.match(Xd).slice(1);return{fid:parseInt(e,32),off:parseInt(n,32)}},Io=(t=0,e=0)=>`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`,Mo=t=>{let e=t.match(/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i);if(!e)return;let[,n,r]=e;return`[${n}="${CSS.escape(r)}"]`},Yd=async(t,e,n)=>{let r=[];t.replace(e,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return t.replace(e,()=>i.shift())},mi=class{parser=new DOMParser;#e=new Map;#t=new Map;#n=new Map;#r={};#i;#a;#o=new Uint8Array;#s=new Uint8Array;#l=-1;#d=-1;#c=!0;#u=Bt.XHTML;constructor(e){this.mobi=e}async init(){let e=this.mobi.loadRecord.bind(this.mobi),{kf8:n}=this.mobi.headers;try{let s=await e(n.fdst),l=Xe(Od,s);if(l.magic!=="FDST")throw new Error("Missing FDST record");let u=Array.from({length:l.numEntries},(c,f)=>12+f*8).map(c=>[Le(s.slice(c,c+4)),Le(s.slice(c+4,c+8))]);this.#r.fdstTable=u,this.#a=u[u.length-1][1]}catch{}let r=(await nr(n.skel,e)).table.map(({name:s,tagMap:l},u)=>({index:u,name:s,numFrag:l[1][0],offset:l[6][0],length:l[6][1]})),i=await nr(n.frag,e),a=i.table.map(({name:s,tagMap:l})=>({insertOffset:parseInt(s),selector:i.cncx[l[2][0]],index:l[4][0],offset:l[6][0],length:l[6][1]}));this.#r.skelTable=r,this.#r.fragTable=a,this.#i=r.reduce((s,l)=>{let u=s[s.length-1],c=u?.fragEnd??0,f=c+l.numFrag,d=a.slice(c,f),p=l.length+d.map(m=>m.length).reduce((m,h)=>m+h),b=(u?.totalLength??0)+p;return s.concat({skel:l,frags:d,fragEnd:f,length:p,totalLength:b})},[]),this.#i.unshift({frags:[]}),this.sections=this.#i.map((s,l)=>s.frags.length?{id:l,load:()=>this.loadSection(s),createDocument:()=>this.createDocument(s),size:s.length}:{linear:"no"});try{let s=await this.mobi.getNCX(),l=({label:u,pos:c,children:f})=>{let[d,p]=c,b=Io(d,p),m=this.#t.get(d);return m?m.push(p):this.#t.set(d,[p]),{label:St(u),href:b,subitems:f?.map(l)}};this.toc=s?.map(l),this.landmarks=await this.getGuide()}catch{}let{exth:o}=this.mobi.headers;return this.dir=o.pageProgressionDirection,this.rendition={layout:o.fixedLayout==="true"?"pre-paginated":"reflowable",viewport:Object.fromEntries(o.originalResolution?.split("x")?.slice(0,2)?.map((s,l)=>[l?"height":"width",s])??[])},this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getResourcesByMagic(e){let n={},r=this.mobi.headers.kf8.resourceStart,i=this.mobi.pdb.numRecords;for(let a=r;a<i;a++)try{let o=await this.mobi.loadMagic(a),s=e.find(l=>l===o);s&&(n[s]=a)}catch{}return n}async getGuide(){let e=this.mobi.headers.kf8.guide;if(e<4294967295){let n=this.mobi.loadRecord.bind(this.mobi),{table:r,cncx:i}=await nr(e,n);return r.map(({name:a,tagMap:o})=>({label:i[o[1][0]]??"",type:a?.split(/\s/),href:Io(o[6]?.[0]??o[3]?.[0])}))}}async loadResourceBlob(e){let{resourceType:n,id:r,type:i}=Zd(e),a=n==="flow"?await this.loadFlow(r):await this.mobi.loadResource(r-1),o=[Bt.XHTML,Bt.HTML,Bt.CSS,Bt.SVG].includes(i)?await this.replaceResources(this.mobi.decode(a)):a;return new Blob([o],{type:i})}async loadResource(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.loadResourceBlob(e),r=URL.createObjectURL(n);return this.#e.set(e,r),r}replaceResources(e){let n=new RegExp(Uo,"g");return Yd(e,n,this.loadResource.bind(this))}async loadRaw(e,n){let r=n-this.#o.length,i=this.#a==null?1/0:this.#a-this.#s.length-e;if(r<0||r<i){for(;this.#o.length<n;){let o=++this.#l,s=await this.mobi.loadText(o);this.#o=rr(this.#o,s)}return this.#o.slice(e,n)}for(;this.#a-this.#s.length>e;){let o=this.mobi.headers.palmdoc.numTextRecords-1-++this.#d,s=await this.mobi.loadText(o);this.#s=rr(s,this.#s)}let a=this.#a-this.#s.length;return this.#s.slice(e-a,n-a)}loadFlow(e){if(e<4294967295)return this.loadRaw(...this.#r.fdstTable[e])}async loadText(e){let{skel:n,frags:r,length:i}=e,a=await this.loadRaw(n.offset,n.offset+i),o=a.slice(0,n.length);for(let s of r){let l=s.insertOffset-n.offset,u=n.length+s.offset,c=a.slice(u,u+s.length);o=Oo(o.slice(0,l),c,o.slice(l));let f=this.#t.get(s.index);if(f)for(let d of f){let p=this.mobi.decode(c).slice(d),b=Mo(p);this.#h(s.index,d,b)}}return this.mobi.decode(o)}async createDocument(e){let n=await this.loadText(e);return this.parser.parseFromString(n,this.#u)}async loadSection(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.loadText(e);this.#c&&this.parser.parseFromString(n,this.#u).querySelector("parsererror")&&(this.#u=Bt.HTML),this.#c&&(this.#c=!1);let r=await this.replaceResources(n),i=URL.createObjectURL(new Blob([r],{type:this.#u}));return this.#e.set(e,i),i}getIndexByFID(e){return this.#i.findIndex(n=>n.frags.some(r=>r.index===e))}#h(e,n,r){let i=this.#n.get(e);if(i)i.set(n,r);else{let a=new Map;this.#n.set(e,a),a.set(n,r)}}async resolveHref(e){let{fid:n,off:r}=Lo(e),i=this.getIndexByFID(n);if(i<0)return;let a=this.#n.get(n)?.get(r);if(a)return{index:i,anchor:b=>b.querySelector(a)};let{skel:o,frags:s}=this.#i[i],l=s.find(b=>b.index===n),u=o.offset+o.length+l.offset,c=await this.loadRaw(u,u+l.length),f=this.mobi.decode(c).slice(r),d=Mo(f);return this.#h(n,r,d),{index:i,anchor:b=>b.querySelector(d)}}splitTOCHref(e){let n=Lo(e);return[this.getIndexByFID(n.fid),n]}getTOCFragment(e,{fid:n,off:r}){let i=this.#n.get(n)?.get(r);return e.querySelector(i)}isExternal(e){return/^(?!blob|kindle)\w+:/i.test(e)}};var Se={CONTAINER:"urn:oasis:names:tc:opendocument:xmlns:container",XHTML:"http://www.w3.org/1999/xhtml",OPF:"http://www.idpf.org/2007/opf",EPUB:"http://www.idpf.org/2007/ops",DC:"http://purl.org/dc/elements/1.1/",DCTERMS:"http://purl.org/dc/terms/",ENC:"http://www.w3.org/2001/04/xmlenc#",NCX:"http://www.daisy.org/z3986/2005/ncx/",XLINK:"http://www.w3.org/1999/xlink",SMIL:"http://www.w3.org/ns/SMIL"},Ie={XML:"application/xml",NCX:"application/x-dtbncx+xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml",JS:/\/(x-)?(javascript|ecmascript)/},or=t=>t.toLowerCase().replace(/[-:](.)/g,(e,n)=>n.toUpperCase()),Jd=t=>t?t.trim().replace(/\s{2,}/g," "):"",yn=(t,e,n)=>n?r=>r.getAttribute(t)?.split(/\s/)?.includes(e):typeof e=="function"?r=>e(r.getAttribute(t)):r=>r.getAttribute(t)===e,sr=(...t)=>e=>e?Object.fromEntries(t.map(n=>[or(n),e.getAttribute(n)])):null,At=t=>Jd(t?.textContent),vn=(t,e)=>{let n=t.lookupNamespaceURI(null)===e||t.lookupPrefix(e),r=n?(i,a)=>o=>o.namespaceURI===e&&o.localName===a:(i,a)=>o=>o.localName===a;return{$:(i,a)=>[...i.children].find(r(i,a)),$$:(i,a)=>[...i.children].filter(r(i,a)),$$$:n?(i,a)=>[...i.getElementsByTagNameNS(e,a)]:(i,a)=>[...i.getElementsByTagName(e,a)]}},Gt=(t,e)=>{try{if(e.includes(":"))return new URL(t,e);let n="file:///";return decodeURI(new URL(t,n+e).href.replace(n,""))}catch{return t}},No=t=>/^(?!blob)\w+:/i.test(t),Qd=(t,e)=>{if(!t)return e;let n=t.replace(/\/$/,"").split("/"),r=e.replace(/\/$/,"").split("/"),i=(n.length>r.length?n:r).findIndex((a,o)=>n[o]!==r[o]);return i<0?"":Array(n.length-i).fill("..").concat(r.slice(i)).join("/")},ef=t=>t.slice(0,t.lastIndexOf("/")+1),ar=async(t,e,n)=>{let r=[];t.replace(e,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return t.replace(e,()=>i.shift())},tf=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),kt={attrs:["dir","xml:lang"]},$t={name:"alternate-script",many:!0,...kt,props:["file-as"]},Bo={many:!0,...kt,props:[{name:"role",many:!0,attrs:["scheme"]},"file-as",$t]},nf=[{name:"title",many:!0,...kt,props:["title-type","display-seq","file-as",$t]},{name:"identifier",many:!0,props:[{name:"identifier-type",attrs:["scheme"]}]},{name:"language",many:!0},{name:"creator",...Bo},{name:"contributor",...Bo},{name:"publisher",...kt,props:["file-as",$t]},{name:"description",...kt,props:[$t]},{name:"rights",...kt,props:[$t]},{name:"date"},{name:"dcterms:modified",type:"meta"},{name:"subject",many:!0,...kt,props:["term","authority",$t]},{name:"belongs-to-collection",type:"meta",many:!0,...kt,props:["collection-type","group-position","dcterms:identifier","file-as",$t,{name:"belongs-to-collection",recursive:!0}]}],rf=t=>{let{$:e,$$:n}=vn(t,Se.OPF),r=e(t.documentElement,"metadata"),i=Array.from(r.children),a=(f,d)=>{if(!d)return null;let{props:p=[],attrs:b=[]}=f,m=At(d);if(!p.length&&!b.length)return m;let h=d.getAttribute("id"),g=h?i.filter(yn("refines","#"+h)):[];return Object.fromEntries([["value",m]].concat(p.map(y=>{let{many:w,recursive:S}=y,_=typeof y=="string"?y:y.name,v=yn("property",_),x=S?f:y;return[or(_),w?g.filter(v).map(T=>a(x,T)):a(x,g.find(v))]})).concat(b.map(y=>[or(y),d.getAttribute(y)])))},o=i.filter(yn("refines",null)),s=Object.fromEntries(nf.map(f=>{let{type:d,name:p,many:b}=f,m=d==="meta"?h=>h.namespaceURI===Se.OPF&&h.getAttribute("property")===p:h=>h.namespaceURI===Se.DC&&h.localName===p;return[or(p),b?o.filter(m).map(h=>a(f,h)):a(f,o.find(m))]})),l=f=>Object.fromEntries(n(r,"meta").filter(yn("property",d=>d?.startsWith(f))).map(d=>[d.getAttribute("property").replace(f,""),At(d)])),u=l("rendition:"),c=l("media:");return{metadata:s,rendition:u,media:c}},af=(t,e=n=>n)=>{let{$:n,$$:r,$$$:i}=vn(t,Se.XHTML),a=b=>b?decodeURI(e(b)):null,o=b=>m=>{let h=n(m,"a")??n(m,"span"),g=n(m,"ol"),y=a(h?.getAttribute("href")),S={label:At(h)||h?.getAttribute("title"),href:y,subitems:s(g)};return b&&(S.type=h?.getAttributeNS(Se.EPUB,"type")?.split(/\s/)),S},s=(b,m)=>b?r(b,"li").map(o(m)):null,l=(b,m)=>s(n(b,"ol"),m),u=i(t,"nav"),c=null,f=null,d=null,p=[];for(let b of u){let m=b.getAttributeNS(Se.EPUB,"type")?.split(/\s/)??[];m.includes("toc")?c??=l(b):m.includes("page-list")?f??=l(b):m.includes("landmarks")?d??=l(b,!0):p.push({label:At(b.firstElementChild),type:m,list:l(b)})}return{toc:c,pageList:f,landmarks:d,others:p}},of=(t,e=n=>n)=>{let{$:n,$$:r}=vn(t,Se.NCX),i=l=>l?decodeURI(e(l)):null,a=l=>{let u=n(l,"navLabel"),c=n(l,"content"),f=At(u),d=i(c.getAttribute("src"));if(l.localName==="navPoint"){let p=r(l,"navPoint");return{label:f,href:d,subitems:p.length?p.map(a):null}}return{label:f,href:d}},o=(l,u)=>r(l,u).map(a),s=(l,u)=>{let c=n(t.documentElement,l);return c?o(c,u):null};return{toc:s("navMap","navPoint"),pageList:s("pageList","pageTarget"),others:r(t.documentElement,"navList").map(l=>({label:At(n(l,"navLabel")),list:o(l,"navTarget")}))}},bi=t=>{if(!t)return;let e=t.split(":").map(o=>parseFloat(o));if(e.length===3){let[o,s,l]=e;return o*60*60+s*60+l}if(e.length===2){let[o,s]=e;return o*60+s}let[n,r]=t.split(/(?=[^\d.])/),i=parseFloat(n),a=r==="h"?60*60:r==="min"?60:r==="ms"?.001:1;return i*a},sf=(t,e=n=>n)=>{let{$:n,$$$:r}=vn(t,Se.SMIL),i=a=>a?decodeURI(e(a)):null;return r(t,"par").map(a=>{let o=n(a,"text")?.getAttribute("src")?.split("#")?.[1],s=n(a,"audio");return s?{id:o,audio:{src:i(s.getAttribute("src")),clipBegin:bi(s.getAttribute("clipBegin")),clipEnd:bi(s.getAttribute("clipEnd"))}}:{id:o}})},lf=/([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/,cf=t=>{for(let e of t.getElementsByTagNameNS(Se.DC,"identifier")){let[n]=At(e).split(":").slice(-1);if(lf.test(n))return n}return""},Wo=t=>At(t.getElementById(t.documentElement.getAttribute("unique-identifier"))??t.getElementsByTagNameNS(Se.DC,"identifier")[0]),$o=async(t,e,n)=>{let r=new Uint8Array(await n.slice(0,e).arrayBuffer());e=Math.min(e,r.length);for(var i=0;i<e;i++)r[i]=r[i]^t[i%t.length];return new Blob([r,n.slice(e)],{type:n.type})},uf=async t=>{let e=new TextEncoder().encode(t),n=await globalThis.crypto.subtle.digest("SHA-1",e);return new Uint8Array(n)},df=(t=uf)=>({"http://www.idpf.org/2008/embedding":{key:e=>t(Wo(e).replaceAll(/[\u0020\u0009\u000d\u000a]/g,"")),decode:(e,n)=>$o(e,1040,n)},"http://ns.adobe.com/pdf/enc#RC":{key:e=>{let n=cf(e).replaceAll("-","");return Uint8Array.from({length:16},(r,i)=>parseInt(n.slice(i*2,i*2+2),16))},decode:(e,n)=>$o(e,1024,n)}}),yi=class{#e=new Map;#t=new Map;#n;constructor(e){this.#n=e}async init(e,n){if(!e)return;let r=Array.from(e.getElementsByTagNameNS(Se.ENC,"EncryptedData"),i=>({algorithm:i.getElementsByTagNameNS(Se.ENC,"EncryptionMethod")[0]?.getAttribute("Algorithm"),uri:i.getElementsByTagNameNS(Se.ENC,"CipherReference")[0]?.getAttribute("URI")}));for(let{algorithm:i,uri:a}of r){if(!this.#t.has(i)){let o=this.#n[i];if(!o)continue;let s=await o.key(n);this.#t.set(i,l=>o.decode(s,l))}this.#e.set(a,i)}}getDecoder(e){return this.#t.get(this.#e.get(e))??(n=>n)}},wi=class{constructor({opf:e,resolveHref:n}){this.opf=e;let{$:r,$$:i,$$$:a}=vn(e,Se.OPF),o=r(e.documentElement,"manifest"),s=r(e.documentElement,"spine"),l=i(s,"itemref");this.manifest=i(o,"item").map(sr("href","id","media-type","properties","media-overlay")).map(c=>(c.href=n(c.href),c.properties=c.properties?.split(/\s/),c)),this.spine=l.map(sr("idref","id","linear","properties")).map(c=>(c.properties=c.properties?.split(/\s/),c)),this.pageProgressionDirection=s.getAttribute("page-progression-direction"),this.navPath=this.getItemByProperty("nav")?.href,this.ncxPath=(this.getItemByID(s.getAttribute("toc"))??this.manifest.find(c=>c.mediaType===Ie.NCX))?.href;let u=r(e.documentElement,"guide");u&&(this.guide=i(u,"reference").map(sr("type","title","href")).map(({type:c,title:f,href:d})=>({label:f,type:c.split(/\s/),href:n(d)}))),this.cover=this.getItemByProperty("cover-image")??this.getItemByID(a(e,"meta").find(yn("name","cover"))?.getAttribute("content"))??this.getItemByHref(this.guide?.find(c=>c.type.includes("cover"))?.href),this.cfis=po(l)}getItemByID(e){return this.manifest.find(n=>n.id===e)}getItemByHref(e){return this.manifest.find(n=>n.href===e)}getItemByProperty(e){return this.manifest.find(n=>n.properties?.includes(e))}resolveCFI(e){let n=bt(e),r=(n.parent??n).shift(),i=oi(this.opf,r);i&&i.nodeName!=="idref"&&(r.at(-1).id=null,i=oi(this.opf,r));let a=i?.getAttribute("idref");return{index:this.spine.findIndex(l=>l.idref===a),anchor:l=>Hn(l,n)}}},vi=class{#e=new Map;#t=new Map;#n=new Map;allowScript=!1;constructor({loadText:e,loadBlob:n,resources:r}){this.loadText=e,this.loadBlob=n,this.manifest=r.manifest,this.assets=r.manifest}createURL(e,n,r,i){if(!n)return"";let a=URL.createObjectURL(new Blob([n],{type:r}));if(this.#e.set(e,a),this.#n.set(e,1),i){let o=this.#t.get(i);o?o.push(e):this.#t.set(i,[e])}return a}ref(e,n){let r=this.#t.get(n);return r?.includes(e)||(this.#n.set(e,this.#n.get(e)+1),r?r.push(e):this.#t.set(n,[e])),this.#e.get(e)}unref(e){if(!this.#n.has(e))return;let n=this.#n.get(e)-1;if(n<1){URL.revokeObjectURL(this.#e.get(e)),this.#e.delete(e),this.#n.delete(e);let r=this.#t.get(e);if(r)for(;r.length;)this.unref(r.pop());this.#t.delete(e)}else this.#n.set(e,n)}async loadItem(e,n=[]){if(!e)return null;let{href:r,mediaType:i}=e,a=Ie.JS.test(e.mediaType);if(a&&!this.allowScript)return null;let o=n.at(-1);return this.#e.has(r)?this.ref(r,o):(a||[Ie.XHTML,Ie.HTML,Ie.CSS,Ie.SVG].includes(i))&&n.every(l=>l!==r)?this.loadReplaced(e,n):this.createURL(r,await this.loadBlob(r),i,o)}async loadHref(e,n,r=[]){if(No(e))return e;let i=Gt(e,n),a=this.manifest.find(o=>o.href===i);return a?this.loadItem(a,r.concat(n)):e}async loadReplaced(e,n=[]){let{href:r,mediaType:i}=e,a=n.at(-1),o=await this.loadText(r);if(!o)return null;if([Ie.XHTML,Ie.HTML,Ie.SVG].includes(i)){let l=new DOMParser().parseFromString(o,i);if(i===Ie.XHTML&&l.querySelector("parsererror")&&(e.mediaType=Ie.HTML,l=new DOMParser().parseFromString(o,e.mediaType)),[Ie.XHTML,Ie.SVG].includes(e.mediaType)){let f=l.firstChild;for(;f instanceof ProcessingInstruction;){if(f.data){let d=await ar(f.data,/(?:^|\s*)(href\s*=\s*['"])([^'"]*)(['"])/i,(p,b,m,h)=>this.loadHref(m,r,n).then(g=>`${b}${g}${h}`));f.replaceWith(l.createProcessingInstruction(f.target,d))}f=f.nextSibling}}let u=async(f,d)=>f.setAttribute(d,await this.loadHref(f.getAttribute(d),r,n));for(let f of l.querySelectorAll("link[href]"))await u(f,"href");for(let f of l.querySelectorAll("[src]"))await u(f,"src");for(let f of l.querySelectorAll("[poster]"))await u(f,"poster");for(let f of l.querySelectorAll("object[data]"))await u(f,"data");for(let f of l.querySelectorAll("[*|href]:not([href]"))f.setAttributeNS(Se.XLINK,"href",await this.loadHref(f.getAttributeNS(Se.XLINK,"href"),r,n));for(let f of l.querySelectorAll("style"))f.textContent&&(f.textContent=await this.replaceCSS(f.textContent,r,n));for(let f of l.querySelectorAll("[style]"))f.setAttribute("style",await this.replaceCSS(f.getAttribute("style"),r,n));let c=new XMLSerializer().serializeToString(l);return this.createURL(r,c,e.mediaType,a)}let s=i===Ie.CSS?await this.replaceCSS(o,r,n):await this.replaceString(o,r,n);return this.createURL(r,s,i,a)}async replaceCSS(e,n,r=[]){let i=await ar(e,/url\(\s*["']?([^'"\n]*?)\s*["']?\s*\)/gi,(l,u)=>this.loadHref(u,n,r).then(c=>`url("${c}")`)),a=await ar(i,/@import\s*["']([^"'\n]*?)["']/gi,(l,u)=>this.loadHref(u,n,r).then(c=>`@import "${c}"`)),o=window?.innerWidth??800,s=window?.innerHeight??600;return a.replace(/-epub-/gi,"").replace(/(\d*\.?\d+)vw/gi,(l,u)=>parseFloat(u)*o/100+"px").replace(/(\d*\.?\d+)vh/gi,(l,u)=>parseFloat(u)*s/100+"px").replace(/page-break-(after|before|inside)/gi,(l,u)=>`-webkit-column-break-${u}`)}replaceString(e,n,r=[]){let i=new Map,a=this.assets.map(s=>{if(s.href===n)return;let l=Qd(ef(n),s.href),u=encodeURI(l),c="/"+s.href,f=encodeURI(c),d=new Set([l,u,c,f]);for(let p of d)i.set(p,s);return Array.from(d)}).flat().filter(s=>s);if(!a.length)return e;let o=new RegExp(a.map(tf).join("|"),"g");return ar(e,o,async s=>this.loadItem(i.get(s.replace(/^\//,"")),r.concat(n)))}unloadItem(e){this.unref(e?.href)}},ff=(t,e)=>t.getElementById(e)??t.querySelector(`[name="${CSS.escape(e)}"]`),hf=t=>{for(let e of t){if(e==="page-spread-left"||e==="rendition:page-spread-left")return"left";if(e==="page-spread-right"||e==="rendition:page-spread-right")return"right";if(e==="rendition:page-spread-center")return"center"}},wn=class{parser=new DOMParser;#e;constructor({loadText:e,loadBlob:n,getSize:r,sha1:i}){this.loadText=e,this.loadBlob=n,this.getSize=r,this.#e=new yi(df(i))}#t(e){return e?this.parser.parseFromString(e,Ie.XML):null}async#n(e){return this.#t(await this.loadText(e))}opfPath=null;async init(){let e=await this.#n("META-INF/container.xml");if(!e)throw new Error("Failed to load container file");let n=Array.from(e.getElementsByTagNameNS(Se.CONTAINER,"rootfile"),sr("full-path","media-type")).filter(m=>m.mediaType==="application/oebps-package+xml");if(!n.length)throw new Error("No package document defined in container");let r=n[0].fullPath;this.opfPath=r;let i=await this.#n(r);if(!i)throw new Error("Failed to load package document");let a=await this.#n("META-INF/encryption.xml");await this.#e.init(a,i),this.resources=new wi({opf:i,resolveHref:m=>Gt(m,r)});let o=new vi({loadText:this.loadText,loadBlob:m=>Promise.resolve(this.loadBlob(m)).then(this.#e.getDecoder(m)),resources:this.resources});this.sections=this.resources.spine.map((m,h)=>{let{idref:g,linear:y,properties:w=[]}=m,S=this.resources.getItemByID(g);return S?{id:this.resources.getItemByID(g)?.href,load:()=>o.loadItem(S),unload:()=>o.unloadItem(S),createDocument:()=>this.loadDocument(S),size:this.getSize(S.href),cfi:this.resources.cfis[h],linear:y,pageSpread:hf(w),resolveHref:_=>Gt(_,S.href),loadMediaOverlay:()=>this.loadMediaOverlay(S)}:null}).filter(m=>m);let{navPath:s,ncxPath:l}=this.resources;if(s)try{let m=g=>Gt(g,s),h=af(await this.#n(s),m);this.toc=h.toc,this.pageList=h.pageList,this.landmarks=h.landmarks}catch{}if(!this.toc&&l)try{let m=g=>Gt(g,l),h=of(await this.#n(l),m);this.toc=h.toc,this.pageList=h.pageList}catch{}this.landmarks??=this.resources.guide;let{metadata:u,rendition:c,media:f}=rf(i);this.rendition=c,this.media=f,f.duration=bi(f.duration),this.dir=this.resources.pageProgressionDirection,this.rawMetadata=u;let d=u?.title?.[0];this.metadata={title:d?.value,sortAs:d?.fileAs,language:u?.language,identifier:Wo(i),description:u?.description?.value,publisher:u?.publisher?.value,published:u?.date,modified:u?.dctermsModified,subject:u?.subject?.filter(({value:m,code:h})=>m||h)?.map(({value:m,code:h,scheme:g})=>({name:m,code:h,scheme:g})),rights:u?.rights?.value};let p={art:"artist",aut:"author",bkp:"producer",clr:"colorist",edt:"editor",ill:"illustrator",trl:"translator",pbl:"publisher"},b=m=>h=>{let g=[...new Set(h.role?.map(({value:w,scheme:S})=>(!S||S==="marc:relators"?p[w]:null)??m))],y={name:h.value,sortAs:h.fileAs};return[g?.length?g:[m],y]};return u?.creator?.map(b("author"))?.concat(u?.contributor?.map?.(b("contributor")))?.forEach(([m,h])=>m.forEach(g=>{this.metadata[g]?this.metadata[g].push(h):this.metadata[g]=[h]})),this}async loadDocument(e){let n=await this.loadText(e.href);return this.parser.parseFromString(n,e.mediaType)}async loadMediaOverlay(e){let n=e.mediaOverlay;if(!n)return null;let r=this.resources.getItemByID(n),i=await this.#n(r.href);return sf(i,o=>Gt(o,r.href))}resolveCFI(e){return this.resources.resolveCFI(e)}resolveHref(e){let[n,r]=e.split("#"),i=this.resources.getItemByHref(decodeURI(n));return i?{index:this.resources.spine.findIndex(({idref:s})=>s===i.id),anchor:r?s=>ff(s,r):()=>0}:null}splitTOCHref(e){return e?.split("#")??[]}getTOCFragment(e,n){return e.getElementById(n)??e.querySelector(`[name="${CSS.escape(n)}"]`)}isExternal(e){return No(e)}async getCover(){let e=this.resources?.cover;return e?.href?new Blob([await this.loadBlob(e.href)],{type:e.mediaType}):null}async getCalibreBookmarks(){let e=await this.loadText("META-INF/calibre_bookmarks.txt"),n="encoding=json+base64:";if(e?.startsWith(n)){let r=atob(e.slice(n.length));return JSON.parse(r)}}};var la={};Ku(la,{BlobReader:()=>Qi,BlobWriter:()=>ea,Data64URIReader:()=>Bh,Data64URIWriter:()=>$h,ERR_BAD_FORMAT:()=>wr,ERR_CENTRAL_DIRECTORY_NOT_FOUND:()=>Rl,ERR_DUPLICATED_NAME:()=>Pl,ERR_ENCRYPTED:()=>Il,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:()=>Dl,ERR_EOCDR_NOT_FOUND:()=>El,ERR_EOCDR_ZIP64_NOT_FOUND:()=>Cl,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:()=>Ll,ERR_HTTP_RANGE:()=>Rn,ERR_INVALID_COMMENT:()=>Ul,ERR_INVALID_ENCRYPTION_STRENGTH:()=>Nl,ERR_INVALID_ENTRY_COMMENT:()=>Bl,ERR_INVALID_ENTRY_NAME:()=>$l,ERR_INVALID_EXTRAFIELD_DATA:()=>Hl,ERR_INVALID_EXTRAFIELD_TYPE:()=>Wl,ERR_INVALID_PASSWORD:()=>Vi,ERR_INVALID_SIGNATURE:()=>Gi,ERR_INVALID_VERSION:()=>ji,ERR_ITERATOR_COMPLETED_TOO_SOON:()=>ol,ERR_LOCAL_FILE_HEADER_NOT_FOUND:()=>Fl,ERR_SPLIT_ZIP_FILE:()=>Hi,ERR_UNSUPPORTED_COMPRESSION:()=>Wi,ERR_UNSUPPORTED_ENCRYPTION:()=>Ml,ERR_UNSUPPORTED_FORMAT:()=>Fr,HttpRangeReader:()=>qh,HttpReader:()=>hl,Reader:()=>It,SplitDataReader:()=>na,SplitDataWriter:()=>Cn,SplitZipReader:()=>Xh,SplitZipWriter:()=>Zh,TextReader:()=>Nh,TextWriter:()=>Wh,Uint8ArrayReader:()=>Vh,Uint8ArrayWriter:()=>Gh,Writer:()=>Ji,ZipReader:()=>ip,ZipWriter:()=>hp,configure:()=>Cr,getMimeType:()=>Vf,initReader:()=>ra,initStream:()=>yt,initWriter:()=>ia,readUint8Array:()=>Ce,terminateWorkers:()=>Rh});function Ar(t){return Er(t.map(([e,n])=>new Array(e).fill(n,0,e)))}function Er(t){return t.reduce((e,n)=>e.concat(Array.isArray(n)?Er(n):n),[])}var Ho=[0,1,2,3].concat(...Ar([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function ue(){let t=this;function e(i){let a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.extra_bits,l=t.stat_desc.extra_base,u=t.stat_desc.max_length,c,f,d,p,b,m,h=0;for(p=0;p<=15;p++)i.bl_count[p]=0;for(a[i.heap[i.heap_max]*2+1]=0,c=i.heap_max+1;c<573;c++)f=i.heap[c],p=a[a[f*2+1]*2+1]+1,p>u&&(p=u,h++),a[f*2+1]=p,!(f>t.max_code)&&(i.bl_count[p]++,b=0,f>=l&&(b=s[f-l]),m=a[f*2],i.opt_len+=m*(p+b),o&&(i.static_len+=m*(o[f*2+1]+b)));if(h!==0){do{for(p=u-1;i.bl_count[p]===0;)p--;i.bl_count[p]--,i.bl_count[p+1]+=2,i.bl_count[u]--,h-=2}while(h>0);for(p=u;p!==0;p--)for(f=i.bl_count[p];f!==0;)d=i.heap[--c],!(d>t.max_code)&&(a[d*2+1]!=p&&(i.opt_len+=(p-a[d*2+1])*a[d*2],a[d*2+1]=p),f--)}}function n(i,a){let o=0;do o|=i&1,i>>>=1,o<<=1;while(--a>0);return o>>>1}function r(i,a,o){let s=[],l=0,u,c,f;for(u=1;u<=15;u++)s[u]=l=l+o[u-1]<<1;for(c=0;c<=a;c++)f=i[c*2+1],f!==0&&(i[c*2]=n(s[f]++,f))}t.build_tree=function(i){let a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.elems,l,u,c=-1,f;for(i.heap_len=0,i.heap_max=573,l=0;l<s;l++)a[l*2]!==0?(i.heap[++i.heap_len]=c=l,i.depth[l]=0):a[l*2+1]=0;for(;i.heap_len<2;)f=i.heap[++i.heap_len]=c<2?++c:0,a[f*2]=1,i.depth[f]=0,i.opt_len--,o&&(i.static_len-=o[f*2+1]);for(t.max_code=c,l=Math.floor(i.heap_len/2);l>=1;l--)i.pqdownheap(a,l);f=s;do l=i.heap[1],i.heap[1]=i.heap[i.heap_len--],i.pqdownheap(a,1),u=i.heap[1],i.heap[--i.heap_max]=l,i.heap[--i.heap_max]=u,a[f*2]=a[l*2]+a[u*2],i.depth[f]=Math.max(i.depth[l],i.depth[u])+1,a[l*2+1]=a[u*2+1]=f,i.heap[1]=f++,i.pqdownheap(a,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],e(i),r(a,t.max_code,i.bl_count)}}ue._length_code=[0,1,2,3,4,5,6,7].concat(...Ar([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]]));ue.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];ue.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];ue.d_code=function(t){return t<256?Ho[t]:Ho[256+(t>>>7)]};ue.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];ue.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];ue.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];ue.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function ke(t,e,n,r,i){let a=this;a.static_tree=t,a.extra_bits=e,a.extra_base=n,a.elems=r,a.max_length=i}var pf=[12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227],mf=Ar([[144,8],[112,9],[24,7],[8,8]]);ke.static_ltree=Er(pf.map((t,e)=>[t,mf[e]]));var gf=[0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23],bf=Ar([[30,5]]);ke.static_dtree=Er(gf.map((t,e)=>[t,bf[e]]));ke.static_l_desc=new ke(ke.static_ltree,ue.extra_lbits,256+1,286,15);ke.static_d_desc=new ke(ke.static_dtree,ue.extra_dbits,0,30,15);ke.static_bl_desc=new ke(null,ue.extra_blbits,0,19,7);var yf=9,wf=8;function ct(t,e,n,r,i){let a=this;a.good_length=t,a.max_lazy=e,a.nice_length=n,a.max_chain=r,a.func=i}var Fs=0,gr=1,Wt=2,it=[new ct(0,0,0,0,Fs),new ct(4,4,8,4,gr),new ct(4,5,16,8,gr),new ct(4,6,32,32,gr),new ct(4,4,16,16,Wt),new ct(8,16,32,32,Wt),new ct(8,16,128,128,Wt),new ct(8,32,128,256,Wt),new ct(32,128,258,1024,Wt),new ct(32,258,258,4096,Wt)],lr=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],at=0,cr=1,xn=2,ur=3,vf=32,xi=42,dr=113,_n=666,_i=8,xf=0,Ti=1,_f=2,de=3,br=258,Ne=br+de+1;function jo(t,e,n,r){let i=t[e*2],a=t[n*2];return i<a||i==a&&r[e]<=r[n]}function Tf(){let t=this,e,n,r,i,a,o,s,l,u,c,f,d,p,b,m,h,g,y,w,S,_,v,x,T,A,k,E,F,C,I,R,M,P,W=new ue,Y=new ue,$=new ue;t.depth=[];let j,H,q,K,Z,re;t.bl_count=[],t.heap=[],R=[],M=[],P=[];function ye(){u=2*a,f[p-1]=0;for(let D=0;D<p-1;D++)f[D]=0;k=it[E].max_lazy,C=it[E].good_length,I=it[E].nice_length,A=it[E].max_chain,_=0,g=0,x=0,y=T=de-1,S=0,d=0}function we(){let D;for(D=0;D<286;D++)R[D*2]=0;for(D=0;D<30;D++)M[D*2]=0;for(D=0;D<19;D++)P[D*2]=0;R[256*2]=1,t.opt_len=t.static_len=0,H=q=0}function Oe(){W.dyn_tree=R,W.stat_desc=ke.static_l_desc,Y.dyn_tree=M,Y.stat_desc=ke.static_d_desc,$.dyn_tree=P,$.stat_desc=ke.static_bl_desc,Z=0,re=0,K=8,we()}t.pqdownheap=function(D,O){let L=t.heap,z=L[O],N=O<<1;for(;N<=t.heap_len&&(N<t.heap_len&&jo(D,L[N+1],L[N],t.depth)&&N++,!jo(D,z,L[N],t.depth));)L[O]=L[N],O=N,N<<=1;L[O]=z};function fe(D,O){let L=-1,z,N=D[0*2+1],V=0,te=7,Fe=4;N===0&&(te=138,Fe=3),D[(O+1)*2+1]=65535;for(let nt=0;nt<=O;nt++)z=N,N=D[(nt+1)*2+1],!(++V<te&&z==N)&&(V<Fe?P[z*2]+=V:z!==0?(z!=L&&P[z*2]++,P[16*2]++):V<=10?P[17*2]++:P[18*2]++,V=0,L=z,N===0?(te=138,Fe=3):z==N?(te=6,Fe=3):(te=7,Fe=4))}function $e(){let D;for(fe(R,W.max_code),fe(M,Y.max_code),$.build_tree(t),D=19-1;D>=3&&P[ue.bl_order[D]*2+1]===0;D--);return t.opt_len+=3*(D+1)+5+5+4,D}function Re(D){t.pending_buf[t.pending++]=D}function Ge(D){Re(D&255),Re(D>>>8&255)}function ze(D){Re(D>>8&255),Re(D&255&255)}function pe(D,O){let L,z=O;re>16-z?(L=D,Z|=L<<re&65535,Ge(Z),Z=L>>>16-re,re+=z-16):(Z|=D<<re&65535,re+=z)}function Te(D,O){let L=D*2;pe(O[L]&65535,O[L+1]&65535)}function Ut(D,O){let L,z=-1,N,V=D[0*2+1],te=0,Fe=7,nt=4;for(V===0&&(Fe=138,nt=3),L=0;L<=O;L++)if(N=V,V=D[(L+1)*2+1],!(++te<Fe&&N==V)){if(te<nt)do Te(N,P);while(--te!==0);else N!==0?(N!=z&&(Te(N,P),te--),Te(16,P),pe(te-3,2)):te<=10?(Te(17,P),pe(te-3,3)):(Te(18,P),pe(te-11,7));te=0,z=N,V===0?(Fe=138,nt=3):N==V?(Fe=6,nt=3):(Fe=7,nt=4)}}function tt(D,O,L){let z;for(pe(D-257,5),pe(O-1,5),pe(L-4,4),z=0;z<L;z++)pe(P[ue.bl_order[z]*2+1],3);Ut(R,D-1),Ut(M,O-1)}function Bn(){re==16?(Ge(Z),Z=0,re=0):re>=8&&(Re(Z&255),Z>>>=8,re-=8)}function Qr(){pe(Ti<<1,3),Te(256,ke.static_ltree),Bn(),1+K+10-re<9&&(pe(Ti<<1,3),Te(256,ke.static_ltree),Bn()),K=7}function gt(D,O){let L,z,N;if(t.dist_buf[H]=D,t.lc_buf[H]=O&255,H++,D===0?R[O*2]++:(q++,D--,R[(ue._length_code[O]+256+1)*2]++,M[ue.d_code(D)*2]++),!(H&8191)&&E>2){for(L=H*8,z=_-g,N=0;N<30;N++)L+=M[N*2]*(5+ue.extra_dbits[N]);if(L>>>=3,q<Math.floor(H/2)&&L<Math.floor(z/2))return!0}return H==j-1}function eo(D,O){let L,z,N=0,V,te;if(H!==0)do L=t.dist_buf[N],z=t.lc_buf[N],N++,L===0?Te(z,D):(V=ue._length_code[z],Te(V+256+1,D),te=ue.extra_lbits[V],te!==0&&(z-=ue.base_length[V],pe(z,te)),L--,V=ue.d_code(L),Te(V,O),te=ue.extra_dbits[V],te!==0&&(L-=ue.base_dist[V],pe(L,te)));while(N<H);Te(256,D),K=D[256*2+1]}function to(){re>8?Ge(Z):re>0&&Re(Z&255),Z=0,re=0}function Nu(D,O,L){to(),K=8,L&&(Ge(O),Ge(~O)),t.pending_buf.set(l.subarray(D,D+O),t.pending),t.pending+=O}function no(D,O,L){pe((xf<<1)+(L?1:0),3),Nu(D,O,!0)}function Wu(D,O,L){let z,N,V=0;E>0?(W.build_tree(t),Y.build_tree(t),V=$e(),z=t.opt_len+3+7>>>3,N=t.static_len+3+7>>>3,N<=z&&(z=N)):z=N=O+5,O+4<=z&&D!=-1?no(D,O,L):N==z?(pe((Ti<<1)+(L?1:0),3),eo(ke.static_ltree,ke.static_dtree)):(pe((_f<<1)+(L?1:0),3),tt(W.max_code+1,Y.max_code+1,V+1),eo(R,M)),we(),L&&to()}function Tt(D){Wu(g>=0?g:-1,_-g,D),g=_,e.flush_pending()}function ei(){let D,O,L,z;do{if(z=u-x-_,z===0&&_===0&&x===0)z=a;else if(z==-1)z--;else if(_>=a+a-Ne){l.set(l.subarray(a,a+a),0),v-=a,_-=a,g-=a,D=p,L=D;do O=f[--L]&65535,f[L]=O>=a?O-a:0;while(--D!==0);D=a,L=D;do O=c[--L]&65535,c[L]=O>=a?O-a:0;while(--D!==0);z+=a}if(e.avail_in===0)return;D=e.read_buf(l,_+x,z),x+=D,x>=de&&(d=l[_]&255,d=(d<<h^l[_+1]&255)&m)}while(x<Ne&&e.avail_in!==0)}function Hu(D){let O=65535,L;for(O>r-5&&(O=r-5);;){if(x<=1){if(ei(),x===0&&D==0)return at;if(x===0)break}if(_+=x,x=0,L=g+O,(_===0||_>=L)&&(x=_-L,_=L,Tt(!1),e.avail_out===0)||_-g>=a-Ne&&(Tt(!1),e.avail_out===0))return at}return Tt(D==4),e.avail_out===0?D==4?xn:at:D==4?ur:cr}function ro(D){let O=A,L=_,z,N,V=T,te=_>a-Ne?_-(a-Ne):0,Fe=I,nt=s,ti=_+br,io=l[L+V-1],ao=l[L+V];T>=C&&(O>>=2),Fe>x&&(Fe=x);do if(z=D,!(l[z+V]!=ao||l[z+V-1]!=io||l[z]!=l[L]||l[++z]!=l[L+1])){L+=2,z++;do;while(l[++L]==l[++z]&&l[++L]==l[++z]&&l[++L]==l[++z]&&l[++L]==l[++z]&&l[++L]==l[++z]&&l[++L]==l[++z]&&l[++L]==l[++z]&&l[++L]==l[++z]&&L<ti);if(N=br-(ti-L),L=ti-br,N>V){if(v=D,V=N,N>=Fe)break;io=l[L+V-1],ao=l[L+V]}}while((D=c[D&nt]&65535)>te&&--O!==0);return V<=x?V:x}function ju(D){let O=0,L;for(;;){if(x<Ne){if(ei(),x<Ne&&D==0)return at;if(x===0)break}if(x>=de&&(d=(d<<h^l[_+(de-1)]&255)&m,O=f[d]&65535,c[_&s]=f[d],f[d]=_),O!==0&&(_-O&65535)<=a-Ne&&F!=2&&(y=ro(O)),y>=de)if(L=gt(_-v,y-de),x-=y,y<=k&&x>=de){y--;do _++,d=(d<<h^l[_+(de-1)]&255)&m,O=f[d]&65535,c[_&s]=f[d],f[d]=_;while(--y!==0);_++}else _+=y,y=0,d=l[_]&255,d=(d<<h^l[_+1]&255)&m;else L=gt(0,l[_]&255),x--,_++;if(L&&(Tt(!1),e.avail_out===0))return at}return Tt(D==4),e.avail_out===0?D==4?xn:at:D==4?ur:cr}function qu(D){let O=0,L,z;for(;;){if(x<Ne){if(ei(),x<Ne&&D==0)return at;if(x===0)break}if(x>=de&&(d=(d<<h^l[_+(de-1)]&255)&m,O=f[d]&65535,c[_&s]=f[d],f[d]=_),T=y,w=v,y=de-1,O!==0&&T<k&&(_-O&65535)<=a-Ne&&(F!=2&&(y=ro(O)),y<=5&&(F==1||y==de&&_-v>4096)&&(y=de-1)),T>=de&&y<=T){z=_+x-de,L=gt(_-1-w,T-de),x-=T-1,T-=2;do++_<=z&&(d=(d<<h^l[_+(de-1)]&255)&m,O=f[d]&65535,c[_&s]=f[d],f[d]=_);while(--T!==0);if(S=0,y=de-1,_++,L&&(Tt(!1),e.avail_out===0))return at}else if(S!==0){if(L=gt(0,l[_-1]&255),L&&Tt(!1),_++,x--,e.avail_out===0)return at}else S=1,_++,x--}return S!==0&&(L=gt(0,l[_-1]&255),S=0),Tt(D==4),e.avail_out===0?D==4?xn:at:D==4?ur:cr}function Vu(D){return D.total_in=D.total_out=0,D.msg=null,t.pending=0,t.pending_out=0,n=dr,i=0,Oe(),ye(),0}t.deflateInit=function(D,O,L,z,N,V){return z||(z=_i),N||(N=wf),V||(V=0),D.msg=null,O==-1&&(O=6),N<1||N>yf||z!=_i||L<9||L>15||O<0||O>9||V<0||V>2?-2:(D.dstate=t,o=L,a=1<<o,s=a-1,b=N+7,p=1<<b,m=p-1,h=Math.floor((b+de-1)/de),l=new Uint8Array(a*2),c=[],f=[],j=1<<N+6,t.pending_buf=new Uint8Array(j*4),r=j*4,t.dist_buf=new Uint16Array(j),t.lc_buf=new Uint8Array(j),E=O,F=V,Vu(D))},t.deflateEnd=function(){return n!=xi&&n!=dr&&n!=_n?-2:(t.lc_buf=null,t.dist_buf=null,t.pending_buf=null,f=null,c=null,l=null,t.dstate=null,n==dr?-3:0)},t.deflateParams=function(D,O,L){let z=0;return O==-1&&(O=6),O<0||O>9||L<0||L>2?-2:(it[E].func!=it[O].func&&D.total_in!==0&&(z=D.deflate(1)),E!=O&&(E=O,k=it[E].max_lazy,C=it[E].good_length,I=it[E].nice_length,A=it[E].max_chain),F=L,z)},t.deflateSetDictionary=function(D,O,L){let z=L,N,V=0;if(!O||n!=xi)return-2;if(z<de)return 0;for(z>a-Ne&&(z=a-Ne,V=L-z),l.set(O.subarray(V,V+z),0),_=z,g=z,d=l[0]&255,d=(d<<h^l[1]&255)&m,N=0;N<=z-de;N++)d=(d<<h^l[N+(de-1)]&255)&m,c[N&s]=f[d],f[d]=N;return 0},t.deflate=function(D,O){let L,z,N,V,te;if(O>4||O<0)return-2;if(!D.next_out||!D.next_in&&D.avail_in!==0||n==_n&&O!=4)return D.msg=lr[2- -2],-2;if(D.avail_out===0)return D.msg=lr[2- -5],-5;if(e=D,V=i,i=O,n==xi&&(z=_i+(o-8<<4)<<8,N=(E-1&255)>>1,N>3&&(N=3),z|=N<<6,_!==0&&(z|=vf),z+=31-z%31,n=dr,ze(z)),t.pending!==0){if(e.flush_pending(),e.avail_out===0)return i=-1,0}else if(e.avail_in===0&&O<=V&&O!=4)return e.msg=lr[2- -5],-5;if(n==_n&&e.avail_in!==0)return D.msg=lr[2- -5],-5;if(e.avail_in!==0||x!==0||O!=0&&n!=_n){switch(te=-1,it[E].func){case Fs:te=Hu(O);break;case gr:te=ju(O);break;case Wt:te=qu(O);break;default:}if((te==xn||te==ur)&&(n=_n),te==at||te==xn)return e.avail_out===0&&(i=-1),0;if(te==cr){if(O==1)Qr();else if(no(0,0,!1),O==3)for(L=0;L<p;L++)f[L]=0;if(e.flush_pending(),e.avail_out===0)return i=-1,0}}return O!=4?0:1}}function Ls(){let t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}Ls.prototype={deflateInit(t,e){let n=this;return n.dstate=new Tf,e||(e=15),n.dstate.deflateInit(n,t,e)},deflate(t){let e=this;return e.dstate?e.dstate.deflate(e,t):-2},deflateEnd(){let t=this;if(!t.dstate)return-2;let e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams(t,e){let n=this;return n.dstate?n.dstate.deflateParams(n,t,e):-2},deflateSetDictionary(t,e){let n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):-2},read_buf(t,e,n){let r=this,i=r.avail_in;return i>n&&(i=n),i===0?0:(r.avail_in-=i,t.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),e),r.next_in_index+=i,r.total_in+=i,i)},flush_pending(){let t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),e!==0&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,t.dstate.pending===0&&(t.dstate.pending_out=0))}};function Sf(t){let e=this,n=new Ls,r=kf(t&&t.chunkSize?t.chunkSize:64*1024),i=0,a=new Uint8Array(r),o=t?t.level:-1;typeof o>"u"&&(o=-1),n.deflateInit(o),n.next_out=a,e.append=function(s,l){let u,c,f=0,d=0,p=0,b=[];if(s.length){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,u=n.deflate(i),u!=0)throw new Error("deflating: "+n.msg);n.next_out_index&&(n.next_out_index==r?b.push(new Uint8Array(a)):b.push(a.slice(0,n.next_out_index))),p+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=f&&(l(n.next_in_index),f=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return b.length>1?(c=new Uint8Array(p),b.forEach(function(m){c.set(m,d),d+=m.length})):c=b[0]||new Uint8Array,c}},e.flush=function(){let s,l,u=0,c=0,f=[];do{if(n.next_out_index=0,n.avail_out=r,s=n.deflate(4),s!=1&&s!=0)throw new Error("deflating: "+n.msg);r-n.avail_out>0&&f.push(a.slice(0,n.next_out_index)),c+=n.next_out_index}while(n.avail_in>0||n.avail_out===0);return n.deflateEnd(),l=new Uint8Array(c),f.forEach(function(d){l.set(d,u),u+=d.length}),l}}function kf(t){return t+5*(Math.floor(t/16383)+1)}var We=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Is=1440,Af=0,Ef=4,Cf=9,Df=5,Rf=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],Ff=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],Lf=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],If=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],Mf=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],Of=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Et=15;function Ii(){let t=this,e,n,r,i,a,o;function s(u,c,f,d,p,b,m,h,g,y,w){let S,_,v,x,T,A,k,E,F,C,I,R,M,P,W;C=0,T=f;do r[u[c+C]]++,C++,T--;while(T!==0);if(r[0]==f)return m[0]=-1,h[0]=0,0;for(E=h[0],A=1;A<=Et&&r[A]===0;A++);for(k=A,E<A&&(E=A),T=Et;T!==0&&r[T]===0;T--);for(v=T,E>T&&(E=T),h[0]=E,P=1<<A;A<T;A++,P<<=1)if((P-=r[A])<0)return-3;if((P-=r[T])<0)return-3;for(r[T]+=P,o[1]=A=0,C=1,M=2;--T!==0;)o[M]=A+=r[C],M++,C++;T=0,C=0;do(A=u[c+C])!==0&&(w[o[A]++]=T),C++;while(++T<f);for(f=o[v],o[0]=T=0,C=0,x=-1,R=-E,a[0]=0,I=0,W=0;k<=v;k++)for(S=r[k];S--!==0;){for(;k>R+E;){if(x++,R+=E,W=v-R,W=W>E?E:W,(_=1<<(A=k-R))>S+1&&(_-=S+1,M=k,A<W))for(;++A<W&&!((_<<=1)<=r[++M]);)_-=r[M];if(W=1<<A,y[0]+W>Is)return-3;a[x]=I=y[0],y[0]+=W,x!==0?(o[x]=T,i[0]=A,i[1]=E,A=T>>>R-E,i[2]=I-a[x-1]-A,g.set(i,(a[x-1]+A)*3)):m[0]=I}for(i[1]=k-R,C>=f?i[0]=128+64:w[C]<d?(i[0]=w[C]<256?0:32+64,i[2]=w[C++]):(i[0]=b[w[C]-d]+16+64,i[2]=p[w[C++]-d]),_=1<<k-R,A=T>>>R;A<W;A+=_)g.set(i,(I+A)*3);for(A=1<<k-1;T&A;A>>>=1)T^=A;for(T^=A,F=(1<<R)-1;(T&F)!=o[x];)x--,R-=E,F=(1<<R)-1}return P!==0&&v!=1?-5:0}function l(u){let c;for(e||(e=[],n=[],r=new Int32Array(Et+1),i=[],a=new Int32Array(Et),o=new Int32Array(Et+1)),n.length<u&&(n=[]),c=0;c<u;c++)n[c]=0;for(c=0;c<Et+1;c++)r[c]=0;for(c=0;c<3;c++)i[c]=0;a.set(r.subarray(0,Et),0),o.set(r.subarray(0,Et+1),0)}t.inflate_trees_bits=function(u,c,f,d,p){let b;return l(19),e[0]=0,b=s(u,0,19,19,null,null,f,c,d,e,n),b==-3?p.msg="oversubscribed dynamic bit lengths tree":(b==-5||c[0]===0)&&(p.msg="incomplete dynamic bit lengths tree",b=-3),b},t.inflate_trees_dynamic=function(u,c,f,d,p,b,m,h,g){let y;return l(288),e[0]=0,y=s(f,0,u,257,Lf,If,b,d,h,e,n),y!=0||d[0]===0?(y==-3?g.msg="oversubscribed literal/length tree":y!=-4&&(g.msg="incomplete literal/length tree",y=-3),y):(l(288),y=s(f,u,c,0,Mf,Of,m,p,h,e,n),y!=0||p[0]===0&&u>257?(y==-3?g.msg="oversubscribed distance tree":y==-5?(g.msg="incomplete distance tree",y=-3):y!=-4&&(g.msg="empty distance tree with lengths",y=-3),y):0)}}Ii.inflate_trees_fixed=function(t,e,n,r){return t[0]=Cf,e[0]=Df,n[0]=Rf,r[0]=Ff,0};var fr=0,qo=1,Vo=2,Go=3,Ko=4,Xo=5,Zo=6,Si=7,Yo=8,hr=9;function zf(){let t=this,e,n=0,r,i=0,a=0,o=0,s=0,l=0,u=0,c=0,f,d=0,p,b=0;function m(h,g,y,w,S,_,v,x){let T,A,k,E,F,C,I,R,M,P,W,Y,$,j,H,q;I=x.next_in_index,R=x.avail_in,F=v.bitb,C=v.bitk,M=v.write,P=M<v.read?v.read-M-1:v.end-M,W=We[h],Y=We[g];do{for(;C<20;)R--,F|=(x.read_byte(I++)&255)<<C,C+=8;if(T=F&W,A=y,k=w,q=(k+T)*3,(E=A[q])===0){F>>=A[q+1],C-=A[q+1],v.win[M++]=A[q+2],P--;continue}do{if(F>>=A[q+1],C-=A[q+1],E&16){for(E&=15,$=A[q+2]+(F&We[E]),F>>=E,C-=E;C<15;)R--,F|=(x.read_byte(I++)&255)<<C,C+=8;T=F&Y,A=S,k=_,q=(k+T)*3,E=A[q];do if(F>>=A[q+1],C-=A[q+1],E&16){for(E&=15;C<E;)R--,F|=(x.read_byte(I++)&255)<<C,C+=8;if(j=A[q+2]+(F&We[E]),F>>=E,C-=E,P-=$,M>=j)H=M-j,M-H>0&&2>M-H?(v.win[M++]=v.win[H++],v.win[M++]=v.win[H++],$-=2):(v.win.set(v.win.subarray(H,H+2),M),M+=2,H+=2,$-=2);else{H=M-j;do H+=v.end;while(H<0);if(E=v.end-H,$>E){if($-=E,M-H>0&&E>M-H)do v.win[M++]=v.win[H++];while(--E!==0);else v.win.set(v.win.subarray(H,H+E),M),M+=E,H+=E,E=0;H=0}}if(M-H>0&&$>M-H)do v.win[M++]=v.win[H++];while(--$!==0);else v.win.set(v.win.subarray(H,H+$),M),M+=$,H+=$,$=0;break}else if(!(E&64))T+=A[q+2],T+=F&We[E],q=(k+T)*3,E=A[q];else return x.msg="invalid distance code",$=x.avail_in-R,$=C>>3<$?C>>3:$,R+=$,I-=$,C-=$<<3,v.bitb=F,v.bitk=C,x.avail_in=R,x.total_in+=I-x.next_in_index,x.next_in_index=I,v.write=M,-3;while(!0);break}if(E&64)return E&32?($=x.avail_in-R,$=C>>3<$?C>>3:$,R+=$,I-=$,C-=$<<3,v.bitb=F,v.bitk=C,x.avail_in=R,x.total_in+=I-x.next_in_index,x.next_in_index=I,v.write=M,1):(x.msg="invalid literal/length code",$=x.avail_in-R,$=C>>3<$?C>>3:$,R+=$,I-=$,C-=$<<3,v.bitb=F,v.bitk=C,x.avail_in=R,x.total_in+=I-x.next_in_index,x.next_in_index=I,v.write=M,-3);if(T+=A[q+2],T+=F&We[E],q=(k+T)*3,(E=A[q])===0){F>>=A[q+1],C-=A[q+1],v.win[M++]=A[q+2],P--;break}}while(!0)}while(P>=258&&R>=10);return $=x.avail_in-R,$=C>>3<$?C>>3:$,R+=$,I-=$,C-=$<<3,v.bitb=F,v.bitk=C,x.avail_in=R,x.total_in+=I-x.next_in_index,x.next_in_index=I,v.write=M,0}t.init=function(h,g,y,w,S,_){e=fr,u=h,c=g,f=y,d=w,p=S,b=_,r=null},t.proc=function(h,g,y){let w,S,_,v=0,x=0,T=0,A,k,E,F;for(T=g.next_in_index,A=g.avail_in,v=h.bitb,x=h.bitk,k=h.write,E=k<h.read?h.read-k-1:h.end-k;;)switch(e){case fr:if(E>=258&&A>=10&&(h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,y=m(u,c,f,d,p,b,h,g),T=g.next_in_index,A=g.avail_in,v=h.bitb,x=h.bitk,k=h.write,E=k<h.read?h.read-k-1:h.end-k,y!=0)){e=y==1?Si:hr;break}a=u,r=f,i=d,e=qo;case qo:for(w=a;x<w;){if(A!==0)y=0;else return h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);A--,v|=(g.read_byte(T++)&255)<<x,x+=8}if(S=(i+(v&We[w]))*3,v>>>=r[S+1],x-=r[S+1],_=r[S],_===0){o=r[S+2],e=Zo;break}if(_&16){s=_&15,n=r[S+2],e=Vo;break}if(!(_&64)){a=_,i=S/3+r[S+2];break}if(_&32){e=Si;break}return e=hr,g.msg="invalid literal/length code",y=-3,h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);case Vo:for(w=s;x<w;){if(A!==0)y=0;else return h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);A--,v|=(g.read_byte(T++)&255)<<x,x+=8}n+=v&We[w],v>>=w,x-=w,a=c,r=p,i=b,e=Go;case Go:for(w=a;x<w;){if(A!==0)y=0;else return h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);A--,v|=(g.read_byte(T++)&255)<<x,x+=8}if(S=(i+(v&We[w]))*3,v>>=r[S+1],x-=r[S+1],_=r[S],_&16){s=_&15,l=r[S+2],e=Ko;break}if(!(_&64)){a=_,i=S/3+r[S+2];break}return e=hr,g.msg="invalid distance code",y=-3,h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);case Ko:for(w=s;x<w;){if(A!==0)y=0;else return h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);A--,v|=(g.read_byte(T++)&255)<<x,x+=8}l+=v&We[w],v>>=w,x-=w,e=Xo;case Xo:for(F=k-l;F<0;)F+=h.end;for(;n!==0;){if(E===0&&(k==h.end&&h.read!==0&&(k=0,E=k<h.read?h.read-k-1:h.end-k),E===0&&(h.write=k,y=h.inflate_flush(g,y),k=h.write,E=k<h.read?h.read-k-1:h.end-k,k==h.end&&h.read!==0&&(k=0,E=k<h.read?h.read-k-1:h.end-k),E===0)))return h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);h.win[k++]=h.win[F++],E--,F==h.end&&(F=0),n--}e=fr;break;case Zo:if(E===0&&(k==h.end&&h.read!==0&&(k=0,E=k<h.read?h.read-k-1:h.end-k),E===0&&(h.write=k,y=h.inflate_flush(g,y),k=h.write,E=k<h.read?h.read-k-1:h.end-k,k==h.end&&h.read!==0&&(k=0,E=k<h.read?h.read-k-1:h.end-k),E===0)))return h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);y=0,h.win[k++]=o,E--,e=fr;break;case Si:if(x>7&&(x-=8,A++,T--),h.write=k,y=h.inflate_flush(g,y),k=h.write,E=k<h.read?h.read-k-1:h.end-k,h.read!=h.write)return h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);e=Yo;case Yo:return y=1,h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);case hr:return y=-3,h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y);default:return y=-2,h.bitb=v,h.bitk=x,g.avail_in=A,g.total_in+=T-g.next_in_index,g.next_in_index=T,h.write=k,h.inflate_flush(g,y)}},t.free=function(){}}var Jo=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Kt=0,ki=1,Qo=2,es=3,ts=4,ns=5,pr=6,mr=7,rs=8,Nt=9;function Pf(t,e){let n=this,r=Kt,i=0,a=0,o=0,s,l=[0],u=[0],c=new zf,f=0,d=new Int32Array(Is*3),p=0,b=new Ii;n.bitk=0,n.bitb=0,n.win=new Uint8Array(e),n.end=e,n.read=0,n.write=0,n.reset=function(m,h){h&&(h[0]=p),r==pr&&c.free(m),r=Kt,n.bitk=0,n.bitb=0,n.read=n.write=0},n.reset(t,null),n.inflate_flush=function(m,h){let g,y,w;return y=m.next_out_index,w=n.read,g=(w<=n.write?n.write:n.end)-w,g>m.avail_out&&(g=m.avail_out),g!==0&&h==-5&&(h=0),m.avail_out-=g,m.total_out+=g,m.next_out.set(n.win.subarray(w,w+g),y),y+=g,w+=g,w==n.end&&(w=0,n.write==n.end&&(n.write=0),g=n.write-w,g>m.avail_out&&(g=m.avail_out),g!==0&&h==-5&&(h=0),m.avail_out-=g,m.total_out+=g,m.next_out.set(n.win.subarray(w,w+g),y),y+=g,w+=g),m.next_out_index=y,n.read=w,h},n.proc=function(m,h){let g,y,w,S,_,v,x,T;for(S=m.next_in_index,_=m.avail_in,y=n.bitb,w=n.bitk,v=n.write,x=v<n.read?n.read-v-1:n.end-v;;){let A,k,E,F,C,I,R,M;switch(r){case Kt:for(;w<3;){if(_!==0)h=0;else return n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);_--,y|=(m.read_byte(S++)&255)<<w,w+=8}switch(g=y&7,f=g&1,g>>>1){case 0:y>>>=3,w-=3,g=w&7,y>>>=g,w-=g,r=ki;break;case 1:A=[],k=[],E=[[]],F=[[]],Ii.inflate_trees_fixed(A,k,E,F),c.init(A[0],k[0],E[0],0,F[0],0),y>>>=3,w-=3,r=pr;break;case 2:y>>>=3,w-=3,r=es;break;case 3:return y>>>=3,w-=3,r=Nt,m.msg="invalid block type",h=-3,n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h)}break;case ki:for(;w<32;){if(_!==0)h=0;else return n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);_--,y|=(m.read_byte(S++)&255)<<w,w+=8}if((~y>>>16&65535)!=(y&65535))return r=Nt,m.msg="invalid stored block lengths",h=-3,n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);i=y&65535,y=w=0,r=i!==0?Qo:f!==0?mr:Kt;break;case Qo:if(_===0||x===0&&(v==n.end&&n.read!==0&&(v=0,x=v<n.read?n.read-v-1:n.end-v),x===0&&(n.write=v,h=n.inflate_flush(m,h),v=n.write,x=v<n.read?n.read-v-1:n.end-v,v==n.end&&n.read!==0&&(v=0,x=v<n.read?n.read-v-1:n.end-v),x===0)))return n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);if(h=0,g=i,g>_&&(g=_),g>x&&(g=x),n.win.set(m.read_buf(S,g),v),S+=g,_-=g,v+=g,x-=g,(i-=g)!==0)break;r=f!==0?mr:Kt;break;case es:for(;w<14;){if(_!==0)h=0;else return n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);_--,y|=(m.read_byte(S++)&255)<<w,w+=8}if(a=g=y&16383,(g&31)>29||(g>>5&31)>29)return r=Nt,m.msg="too many length or distance symbols",h=-3,n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);if(g=258+(g&31)+(g>>5&31),!s||s.length<g)s=[];else for(T=0;T<g;T++)s[T]=0;y>>>=14,w-=14,o=0,r=ts;case ts:for(;o<4+(a>>>10);){for(;w<3;){if(_!==0)h=0;else return n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);_--,y|=(m.read_byte(S++)&255)<<w,w+=8}s[Jo[o++]]=y&7,y>>>=3,w-=3}for(;o<19;)s[Jo[o++]]=0;if(l[0]=7,g=b.inflate_trees_bits(s,l,u,d,m),g!=0)return h=g,h==-3&&(s=null,r=Nt),n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);o=0,r=ns;case ns:for(;g=a,!(o>=258+(g&31)+(g>>5&31));){let P,W;for(g=l[0];w<g;){if(_!==0)h=0;else return n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);_--,y|=(m.read_byte(S++)&255)<<w,w+=8}if(g=d[(u[0]+(y&We[g]))*3+1],W=d[(u[0]+(y&We[g]))*3+2],W<16)y>>>=g,w-=g,s[o++]=W;else{for(T=W==18?7:W-14,P=W==18?11:3;w<g+T;){if(_!==0)h=0;else return n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);_--,y|=(m.read_byte(S++)&255)<<w,w+=8}if(y>>>=g,w-=g,P+=y&We[T],y>>>=T,w-=T,T=o,g=a,T+P>258+(g&31)+(g>>5&31)||W==16&&T<1)return s=null,r=Nt,m.msg="invalid bit length repeat",h=-3,n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);W=W==16?s[T-1]:0;do s[T++]=W;while(--P!==0);o=T}}if(u[0]=-1,C=[],I=[],R=[],M=[],C[0]=9,I[0]=6,g=a,g=b.inflate_trees_dynamic(257+(g&31),1+(g>>5&31),s,C,I,R,M,d,m),g!=0)return g==-3&&(s=null,r=Nt),h=g,n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);c.init(C[0],I[0],d,R[0],d,M[0]),r=pr;case pr:if(n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,(h=c.proc(n,m,h))!=1)return n.inflate_flush(m,h);if(h=0,c.free(m),S=m.next_in_index,_=m.avail_in,y=n.bitb,w=n.bitk,v=n.write,x=v<n.read?n.read-v-1:n.end-v,f===0){r=Kt;break}r=mr;case mr:if(n.write=v,h=n.inflate_flush(m,h),v=n.write,x=v<n.read?n.read-v-1:n.end-v,n.read!=n.write)return n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);r=rs;case rs:return h=1,n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);case Nt:return h=-3,n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h);default:return h=-2,n.bitb=y,n.bitk=w,m.avail_in=_,m.total_in+=S-m.next_in_index,m.next_in_index=S,n.write=v,n.inflate_flush(m,h)}}},n.free=function(m){n.reset(m,null),n.win=null,d=null},n.set_dictionary=function(m,h,g){n.win.set(m.subarray(h,h+g),0),n.read=n.write=g},n.sync_point=function(){return r==ki?1:0}}var Uf=32,Bf=8,$f=0,is=1,as=2,os=3,ss=4,ls=5,Ai=6,Tn=7,cs=12,Ct=13,Nf=[0,0,255,255];function Wf(){let t=this;t.mode=0,t.method=0,t.was=[0],t.need=0,t.marker=0,t.wbits=0;function e(n){return!n||!n.istate?-2:(n.total_in=n.total_out=0,n.msg=null,n.istate.mode=Tn,n.istate.blocks.reset(n,null),0)}t.inflateEnd=function(n){return t.blocks&&t.blocks.free(n),t.blocks=null,0},t.inflateInit=function(n,r){return n.msg=null,t.blocks=null,r<8||r>15?(t.inflateEnd(n),-2):(t.wbits=r,n.istate.blocks=new Pf(n,1<<r),e(n),0)},t.inflate=function(n,r){let i,a;if(!n||!n.istate||!n.next_in)return-2;let o=n.istate;for(r=r==Ef?-5:0,i=-5;;)switch(o.mode){case $f:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,((o.method=n.read_byte(n.next_in_index++))&15)!=Bf){o.mode=Ct,n.msg="unknown compression method",o.marker=5;break}if((o.method>>4)+8>o.wbits){o.mode=Ct,n.msg="invalid win size",o.marker=5;break}o.mode=is;case is:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,a=n.read_byte(n.next_in_index++)&255,((o.method<<8)+a)%31!==0){o.mode=Ct,n.msg="incorrect header check",o.marker=5;break}if(!(a&Uf)){o.mode=Tn;break}o.mode=as;case as:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need=(n.read_byte(n.next_in_index++)&255)<<24&4278190080,o.mode=os;case os:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<16&16711680,o.mode=ss;case ss:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<8&65280,o.mode=ls;case ls:return n.avail_in===0?i:(i=r,n.avail_in--,n.total_in++,o.need+=n.read_byte(n.next_in_index++)&255,o.mode=Ai,2);case Ai:return o.mode=Ct,n.msg="need dictionary",o.marker=0,-2;case Tn:if(i=o.blocks.proc(n,i),i==-3){o.mode=Ct,o.marker=0;break}if(i==0&&(i=r),i!=1)return i;i=r,o.blocks.reset(n,o.was),o.mode=cs;case cs:return n.avail_in=0,1;case Ct:return-3;default:return-2}},t.inflateSetDictionary=function(n,r,i){let a=0,o=i;if(!n||!n.istate||n.istate.mode!=Ai)return-2;let s=n.istate;return o>=1<<s.wbits&&(o=(1<<s.wbits)-1,a=i-o),s.blocks.set_dictionary(r,a,o),s.mode=Tn,0},t.inflateSync=function(n){let r,i,a,o,s;if(!n||!n.istate)return-2;let l=n.istate;if(l.mode!=Ct&&(l.mode=Ct,l.marker=0),(r=n.avail_in)===0)return-5;for(i=n.next_in_index,a=l.marker;r!==0&&a<4;)n.read_byte(i)==Nf[a]?a++:n.read_byte(i)!==0?a=0:a=4-a,i++,r--;return n.total_in+=i-n.next_in_index,n.next_in_index=i,n.avail_in=r,l.marker=a,a!=4?-3:(o=n.total_in,s=n.total_out,e(n),n.total_in=o,n.total_out=s,l.mode=Tn,0)},t.inflateSyncPoint=function(n){return!n||!n.istate||!n.istate.blocks?-2:n.istate.blocks.sync_point()}}function Ms(){}Ms.prototype={inflateInit(t){let e=this;return e.istate=new Wf,t||(t=15),e.istate.inflateInit(e,t)},inflate(t){let e=this;return e.istate?e.istate.inflate(e,t):-2},inflateEnd(){let t=this;if(!t.istate)return-2;let e=t.istate.inflateEnd(t);return t.istate=null,e},inflateSync(){let t=this;return t.istate?t.istate.inflateSync(t):-2},inflateSetDictionary(t,e){let n=this;return n.istate?n.istate.inflateSetDictionary(n,t,e):-2},read_byte(t){return this.next_in[t]},read_buf(t,e){return this.next_in.subarray(t,t+e)}};function Hf(t){let e=this,n=new Ms,r=t&&t.chunkSize?Math.floor(t.chunkSize*2):128*1024,i=Af,a=new Uint8Array(r),o=!1;n.inflateInit(),n.next_out=a,e.append=function(s,l){let u=[],c,f,d=0,p=0,b=0;if(s.length!==0){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,n.avail_in===0&&!o&&(n.next_in_index=0,o=!0),c=n.inflate(i),o&&c===-5){if(n.avail_in!==0)throw new Error("inflating: bad input")}else if(c!==0&&c!==1)throw new Error("inflating: "+n.msg);if((o||c===1)&&n.avail_in===s.length)throw new Error("inflating: bad input");n.next_out_index&&(n.next_out_index===r?u.push(new Uint8Array(a)):u.push(a.slice(0,n.next_out_index))),b+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=d&&(l(n.next_in_index),d=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return u.length>1?(f=new Uint8Array(b),u.forEach(function(m){f.set(m,p),p+=m.length})):f=u[0]||new Uint8Array,f}},e.flush=function(){n.inflateEnd()}}var yr="/",us=new Date(2107,11,31),ds=new Date(1980,0,1),me=void 0,xr="undefined",Os="function",fs=class{constructor(t){return class extends TransformStream{constructor(e,n){let r=new t(n);super({transform(i,a){a.enqueue(r.append(i))},flush(i){let a=r.flush();a&&i.enqueue(a)}})}}}},jf=64,zs=2;try{typeof navigator!=xr&&navigator.hardwareConcurrency&&(zs=navigator.hardwareConcurrency)}catch{}var qf={chunkSize:512*1024,maxWorkers:zs,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:me,CompressionStreamNative:typeof CompressionStream!=xr&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=xr&&DecompressionStream},Lt=Object.assign({},qf);function qi(){return Lt}function Ps(t){return Math.max(t.chunkSize,jf)}function Cr(t){let{baseURL:e,chunkSize:n,maxWorkers:r,terminateWorkerTimeout:i,useCompressionStream:a,useWebWorkers:o,Deflate:s,Inflate:l,CompressionStream:u,DecompressionStream:c,workerScripts:f}=t;if(Dt("baseURL",e),Dt("chunkSize",n),Dt("maxWorkers",r),Dt("terminateWorkerTimeout",i),Dt("useCompressionStream",a),Dt("useWebWorkers",o),s&&(Lt.CompressionStream=new fs(s)),l&&(Lt.DecompressionStream=new fs(l)),Dt("CompressionStream",u),Dt("DecompressionStream",c),f!==me){let{deflate:d,inflate:p}=f;if((d||p)&&(Lt.workerScripts||(Lt.workerScripts={})),d){if(!Array.isArray(d))throw new Error("workerScripts.deflate must be an array");Lt.workerScripts.deflate=d}if(p){if(!Array.isArray(p))throw new Error("workerScripts.inflate must be an array");Lt.workerScripts.inflate=p}}}function Dt(t,e){e!==me&&(Lt[t]=e)}function Vf(){return"application/octet-stream"}var Us=[];for(let t=0;t<256;t++){let e=t;for(let n=0;n<8;n++)e&1?e=e>>>1^3988292384:e=e>>>1;Us[t]=e}var _r=class{constructor(t){this.crc=t||-1}append(t){let e=this.crc|0;for(let n=0,r=t.length|0;n<r;n++)e=e>>>8^Us[(e^t[n])&255];this.crc=e}get(){return~this.crc}},Bs=class extends TransformStream{constructor(){let t=new _r;super({transform(e){t.append(e)},flush(e){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,t.get()),e.enqueue(n)}})}};function Mi(t){if(typeof TextEncoder>"u"){t=unescape(encodeURIComponent(t));let e=new Uint8Array(t.length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}else return new TextEncoder().encode(t)}var Me={concat(t,e){if(t.length===0||e.length===0)return t.concat(e);let n=t[t.length-1],r=Me.getPartial(n);return r===32?t.concat(e):Me._shiftRight(e,r,n|0,t.slice(0,t.length-1))},bitLength(t){let e=t.length;if(e===0)return 0;let n=t[e-1];return(e-1)*32+Me.getPartial(n)},clamp(t,e){if(t.length*32<e)return t;t=t.slice(0,Math.ceil(e/32));let n=t.length;return e=e&31,n>0&&e&&(t[n-1]=Me.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial(t,e,n){return t===32?e:(n?e|0:e<<32-t)+t*1099511627776},getPartial(t){return Math.round(t/1099511627776)||32},_shiftRight(t,e,n,r){for(r===void 0&&(r=[]);e>=32;e-=32)r.push(n),n=0;if(e===0)return r.concat(t);for(let o=0;o<t.length;o++)r.push(n|t[o]>>>e),n=t[o]<<32-e;let i=t.length?t[t.length-1]:0,a=Me.getPartial(i);return r.push(Me.partial(e+a&31,e+a>32?n:r.pop(),1)),r}},Tr={bytes:{fromBits(t){let e=Me.bitLength(t)/8,n=new Uint8Array(e),r;for(let i=0;i<e;i++)i&3||(r=t[i/4]),n[i]=r>>>24,r<<=8;return n},toBits(t){let e=[],n,r=0;for(n=0;n<t.length;n++)r=r<<8|t[n],(n&3)===3&&(e.push(r),r=0);return n&3&&e.push(Me.partial(8*(n&3),r)),e}}},$s={};$s.sha1=class{constructor(t){let e=this;e.blockSize=512,e._init=[1732584193,4023233417,2562383102,271733878,3285377520],e._key=[1518500249,1859775393,2400959708,3395469782],t?(e._h=t._h.slice(0),e._buffer=t._buffer.slice(0),e._length=t._length):e.reset()}reset(){let t=this;return t._h=t._init.slice(0),t._buffer=[],t._length=0,t}update(t){let e=this;typeof t=="string"&&(t=Tr.utf8String.toBits(t));let n=e._buffer=Me.concat(e._buffer,t),r=e._length,i=e._length=r+Me.bitLength(t);if(i>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");let a=new Uint32Array(n),o=0;for(let s=e.blockSize+r-(e.blockSize+r&e.blockSize-1);s<=i;s+=e.blockSize)e._block(a.subarray(16*o,16*(o+1))),o+=1;return n.splice(0,16*o),e}finalize(){let t=this,e=t._buffer,n=t._h;e=Me.concat(e,[Me.partial(1,1)]);for(let r=e.length+2;r&15;r++)e.push(0);for(e.push(Math.floor(t._length/4294967296)),e.push(t._length|0);e.length;)t._block(e.splice(0,16));return t.reset(),n}_f(t,e,n,r){if(t<=19)return e&n|~e&r;if(t<=39)return e^n^r;if(t<=59)return e&n|e&r|n&r;if(t<=79)return e^n^r}_S(t,e){return e<<t|e>>>32-t}_block(t){let e=this,n=e._h,r=Array(80);for(let u=0;u<16;u++)r[u]=t[u];let i=n[0],a=n[1],o=n[2],s=n[3],l=n[4];for(let u=0;u<=79;u++){u>=16&&(r[u]=e._S(1,r[u-3]^r[u-8]^r[u-14]^r[u-16]));let c=e._S(5,i)+e._f(u,a,o,s)+l+r[u]+e._key[Math.floor(u/20)]|0;l=s,s=o,o=e._S(30,a),a=i,i=c}n[0]=n[0]+i|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+l|0}};var Ns={};Ns.aes=class{constructor(t){let e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();let n=e._tables[0][4],r=e._tables[1],i=t.length,a,o,s,l=1;if(i!==4&&i!==6&&i!==8)throw new Error("invalid aes key size");for(e._key=[o=t.slice(0),s=[]],a=i;a<4*i+28;a++){let u=o[a-1];(a%i===0||i===8&&a%i===4)&&(u=n[u>>>24]<<24^n[u>>16&255]<<16^n[u>>8&255]<<8^n[u&255],a%i===0&&(u=u<<8^u>>>24^l<<24,l=l<<1^(l>>7)*283)),o[a]=o[a-i]^u}for(let u=0;a;u++,a--){let c=o[u&3?a:a-4];a<=4||u<4?s[u]=c:s[u]=r[0][n[c>>>24]]^r[1][n[c>>16&255]]^r[2][n[c>>8&255]]^r[3][n[c&255]]}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){let t=this._tables[0],e=this._tables[1],n=t[4],r=e[4],i=[],a=[],o,s,l,u;for(let c=0;c<256;c++)a[(i[c]=c<<1^(c>>7)*283)^c]=c;for(let c=o=0;!n[c];c^=s||1,o=a[o]||1){let f=o^o<<1^o<<2^o<<3^o<<4;f=f>>8^f&255^99,n[c]=f,r[f]=c,u=i[l=i[s=i[c]]];let d=u*16843009^l*65537^s*257^c*16843008,p=i[f]*257^f*16843008;for(let b=0;b<4;b++)t[b][c]=p=p<<24^p>>>8,e[b][f]=d=d<<24^d>>>8}for(let c=0;c<5;c++)t[c]=t[c].slice(0),e[c]=e[c].slice(0)}_crypt(t,e){if(t.length!==4)throw new Error("invalid aes block size");let n=this._key[e],r=n.length/4-2,i=[0,0,0,0],a=this._tables[e],o=a[0],s=a[1],l=a[2],u=a[3],c=a[4],f=t[0]^n[0],d=t[e?3:1]^n[1],p=t[2]^n[2],b=t[e?1:3]^n[3],m=4,h,g,y;for(let w=0;w<r;w++)h=o[f>>>24]^s[d>>16&255]^l[p>>8&255]^u[b&255]^n[m],g=o[d>>>24]^s[p>>16&255]^l[b>>8&255]^u[f&255]^n[m+1],y=o[p>>>24]^s[b>>16&255]^l[f>>8&255]^u[d&255]^n[m+2],b=o[b>>>24]^s[f>>16&255]^l[d>>8&255]^u[p&255]^n[m+3],m+=4,f=h,d=g,p=y;for(let w=0;w<4;w++)i[e?3&-w:w]=c[f>>>24]<<24^c[d>>16&255]<<16^c[p>>8&255]<<8^c[b&255]^n[m++],h=f,f=d,d=p,p=b,b=h;return i}};var Gf={getRandomValues(t){let e=new Uint32Array(t.buffer),n=r=>{let i=987654321,a=4294967295;return function(){return i=36969*(i&65535)+(i>>16)&a,r=18e3*(r&65535)+(r>>16)&a,(((i<<16)+r&a)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let r=0,i;r<t.length;r+=4){let a=n((i||Math.random())*4294967296);i=a()*987654071,e[r/4]=a()*4294967296|0}return t}},Ws={};Ws.ctrGladman=class{constructor(t,e){this._prf=t,this._initIv=e,this._iv=e}reset(){this._iv=this._initIv}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if((t>>24&255)===255){let e=t>>16&255,n=t>>8&255,r=t&255;e===255?(e=0,n===255?(n=0,r===255?r=0:++r):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=r}else t+=1<<24;return t}incCounter(t){(t[0]=this.incWord(t[0]))===0&&(t[1]=this.incWord(t[1]))}calculate(t,e,n){let r;if(!(r=e.length))return[];let i=Me.bitLength(e);for(let a=0;a<r;a+=4){this.incCounter(n);let o=t.encrypt(n);e[a]^=o[0],e[a+1]^=o[1],e[a+2]^=o[2],e[a+3]^=o[3]}return Me.clamp(e,i)}};var Ht={importKey(t){return new Ht.hmacSha1(Tr.bytes.toBits(t))},pbkdf2(t,e,n,r){if(n=n||1e4,r<0||n<0)throw new Error("invalid params to pbkdf2");let i=(r>>5)+1<<2,a,o,s,l,u,c=new ArrayBuffer(i),f=new DataView(c),d=0,p=Me;for(e=Tr.bytes.toBits(e),u=1;d<(i||1);u++){for(a=o=t.encrypt(p.concat(e,[u])),s=1;s<n;s++)for(o=t.encrypt(o),l=0;l<o.length;l++)a[l]^=o[l];for(s=0;d<(i||1)&&s<a.length;s++)f.setInt32(d,a[s]),d+=4}return c.slice(0,r/8)}};Ht.hmacSha1=class{constructor(t){let e=this,n=e._hash=$s.sha1,r=[[],[]];e._baseHash=[new n,new n];let i=e._baseHash[0].blockSize/32;t.length>i&&(t=new n().update(t).finalize());for(let a=0;a<i;a++)r[0][a]=t[a]^909522486,r[1][a]=t[a]^1549556828;e._baseHash[0].update(r[0]),e._baseHash[1].update(r[1]),e._resultHash=new n(e._baseHash[0])}reset(){let t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1}update(t){let e=this;e._updated=!0,e._resultHash.update(t)}digest(){let t=this,e=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(e).finalize();return t.reset(),n}encrypt(t){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}};var Kf=typeof crypto<"u"&&typeof crypto.getRandomValues=="function",Vi="Invalid password",Gi="Invalid signature";function Hs(t){return Kf?crypto.getRandomValues(t):Gf.getRandomValues(t)}var Xt=16,Xf="raw",js={name:"PBKDF2"},Zf={name:"HMAC"},Yf="SHA-1",Jf=Object.assign({hash:Zf},js),Oi=Object.assign({iterations:1e3,hash:{name:Yf}},js),Qf=["deriveBits"],kn=[8,12,16],Sn=[16,24,32],Rt=10,eh=[0,0,0,0],qs="undefined",Vs="function",Dr=typeof crypto!=qs,Dn=Dr&&crypto.subtle,Gs=Dr&&typeof Dn!=qs,dt=Tr.bytes,th=Ns.aes,nh=Ws.ctrGladman,rh=Ht.hmacSha1,hs=Dr&&Gs&&typeof Dn.importKey==Vs,ps=Dr&&Gs&&typeof Dn.deriveBits==Vs,ih=class extends TransformStream{constructor({password:t,signed:e,encryptionStrength:n}){super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:t,signed:e,strength:n-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:u}=a;o?(await oh(a,s,o,Ze(r,0,kn[s]+2)),r=Ze(r,kn[s]+2),l()):await u;let c=new Uint8Array(r.length-Rt-(r.length-Rt)%Xt);i.enqueue(Ks(a,r,c,0,Rt,!0))},async flush(r){let{signed:i,ctr:a,hmac:o,pending:s,ready:l}=this;await l;let u=Ze(s,0,s.length-Rt),c=Ze(s,s.length-Rt),f=new Uint8Array;if(u.length){let d=En(dt,u);o.update(d);let p=a.update(d);f=An(dt,p)}if(i){let d=Ze(An(dt,o.digest()),0,Rt);for(let p=0;p<Rt;p++)if(d[p]!=c[p])throw new Error(Gi)}r.enqueue(f)}})}},ah=class extends TransformStream{constructor({password:t,encryptionStrength:e}){let n;super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:t,strength:e-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:u}=a,c=new Uint8Array;o?(c=await sh(a,s,o),l()):await u;let f=new Uint8Array(c.length+r.length-r.length%Xt);f.set(c,0),i.enqueue(Ks(a,r,f,c.length,0))},async flush(r){let{ctr:i,hmac:a,pending:o,ready:s}=this;await s;let l=new Uint8Array;if(o.length){let u=i.update(En(dt,o));a.update(u),l=An(dt,u)}n.signature=An(dt,a.digest()).slice(0,Rt),r.enqueue(Ki(l,n.signature))}}),n=this}};function Ks(t,e,n,r,i,a){let{ctr:o,hmac:s,pending:l}=t,u=e.length-i;l.length&&(e=Ki(l,e),n=uh(n,u-u%Xt));let c;for(c=0;c<=u-Xt;c+=Xt){let f=En(dt,Ze(e,c,c+Xt));a&&s.update(f);let d=o.update(f);a||s.update(d),n.set(An(dt,d),c+r)}return t.pending=Ze(e,c),n}async function oh(t,e,n,r){let i=await Xs(t,e,n,Ze(r,0,kn[e])),a=Ze(r,kn[e]);if(i[0]!=a[0]||i[1]!=a[1])throw new Error(Vi)}async function sh(t,e,n){let r=Hs(new Uint8Array(kn[e])),i=await Xs(t,e,n,r);return Ki(r,i)}async function Xs(t,e,n,r){t.password=null;let i=Mi(n),a=await lh(Xf,i,Jf,!1,Qf),o=await ch(Object.assign({salt:r},Oi),a,8*(Sn[e]*2+2)),s=new Uint8Array(o),l=En(dt,Ze(s,0,Sn[e])),u=En(dt,Ze(s,Sn[e],Sn[e]*2)),c=Ze(s,Sn[e]*2);return Object.assign(t,{keys:{key:l,authentication:u,passwordVerification:c},ctr:new nh(new th(l),Array.from(eh)),hmac:new rh(u)}),c}async function lh(t,e,n,r,i){if(hs)try{return await Dn.importKey(t,e,n,r,i)}catch{return hs=!1,Ht.importKey(e)}else return Ht.importKey(e)}async function ch(t,e,n){if(ps)try{return await Dn.deriveBits(t,e,n)}catch{return ps=!1,Ht.pbkdf2(e,t.salt,Oi.iterations,n)}else return Ht.pbkdf2(e,t.salt,Oi.iterations,n)}function Ki(t,e){let n=t;return t.length+e.length&&(n=new Uint8Array(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function uh(t,e){if(e&&e>t.length){let n=t;t=new Uint8Array(e),t.set(n,0)}return t}function Ze(t,e,n){return t.subarray(e,n)}function An(t,e){return t.fromBits(e)}function En(t,e){return t.toBits(e)}var Zt=12,dh=class extends TransformStream{constructor({password:t,passwordVerification:e}){super({start(){Object.assign(this,{password:t,passwordVerification:e}),Zs(this,t)},transform(n,r){let i=this;if(i.password){let a=ms(i,n.subarray(0,Zt));if(i.password=null,a[Zt-1]!=i.passwordVerification)throw new Error(Vi);n=n.subarray(Zt)}r.enqueue(ms(i,n))}})}},fh=class extends TransformStream{constructor({password:t,passwordVerification:e}){super({start(){Object.assign(this,{password:t,passwordVerification:e}),Zs(this,t)},transform(n,r){let i=this,a,o;if(i.password){i.password=null;let s=Hs(new Uint8Array(Zt));s[Zt-1]=i.passwordVerification,a=new Uint8Array(n.length+s.length),a.set(gs(i,s),0),o=Zt}else a=new Uint8Array(n.length),o=0;a.set(gs(i,n),o),r.enqueue(a)}})}};function ms(t,e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=Ys(t)^e[r],Xi(t,n[r]);return n}function gs(t,e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=Ys(t)^e[r],Xi(t,e[r]);return n}function Zs(t,e){let n=[305419896,591751049,878082192];Object.assign(t,{keys:n,crcKey0:new _r(n[0]),crcKey2:new _r(n[2])});for(let r=0;r<e.length;r++)Xi(t,e.charCodeAt(r))}function Xi(t,e){let[n,r,i]=t.keys;t.crcKey0.append([e]),n=~t.crcKey0.get(),r=bs(Math.imul(bs(r+Js(n)),134775813)+1),t.crcKey2.append([r>>>24]),i=~t.crcKey2.get(),t.keys=[n,r,i]}function Ys(t){let e=t.keys[2]|2;return Js(Math.imul(e,e^1)>>>8)}function Js(t){return t&255}function bs(t){return t&4294967295}var ys="deflate-raw",hh=class extends TransformStream{constructor(t,{chunkSize:e,CompressionStream:n,CompressionStreamNative:r}){super({});let{compressed:i,encrypted:a,useCompressionStream:o,zipCrypto:s,signed:l,level:u}=t,c=this,f,d,p=Qs(super.readable);(!a||s)&&l&&([p,f]=p.tee(),f=ft(f,new Bs)),i&&(p=tl(p,o,{level:u,chunkSize:e},r,n)),a&&(s?p=ft(p,new fh(t)):(d=new ah(t),p=ft(p,d))),el(c,p,async()=>{let b;a&&!s&&(b=d.signature),(!a||s)&&l&&(b=await f.getReader().read(),b=new DataView(b.value.buffer).getUint32(0)),c.signature=b})}},ph=class extends TransformStream{constructor(t,{chunkSize:e,DecompressionStream:n,DecompressionStreamNative:r}){super({});let{zipCrypto:i,encrypted:a,signed:o,signature:s,compressed:l,useCompressionStream:u}=t,c,f,d=Qs(super.readable);a&&(i?d=ft(d,new dh(t)):(f=new ih(t),d=ft(d,f))),l&&(d=tl(d,u,{chunkSize:e},r,n)),(!a||i)&&o&&([d,c]=d.tee(),c=ft(c,new Bs)),el(this,d,async()=>{if((!a||i)&&o){let p=await c.getReader().read(),b=new DataView(p.value.buffer);if(s!=b.getUint32(0,!1))throw new Error(Gi)}})}};function Qs(t){return ft(t,new TransformStream({transform(e,n){e&&e.length&&n.enqueue(e)}}))}function el(t,e,n){e=ft(e,new TransformStream({flush:n})),Object.defineProperty(t,"readable",{get(){return e}})}function tl(t,e,n,r,i){try{let a=e&&r?r:i;t=ft(t,new a(ys,n))}catch(a){if(e)t=ft(t,new i(ys,n));else throw a}return t}function ft(t,e){return t.pipeThrough(e)}var mh="message",gh="start",bh="pull",ws="data",yh="ack",wh="close",nl="deflate",rl="inflate",vh=class extends TransformStream{constructor(t,e){super({});let n=this,{codecType:r}=t,i;r.startsWith(nl)?i=hh:r.startsWith(rl)&&(i=ph);let a=0,o=new i(t,e),s=super.readable,l=new TransformStream({transform(u,c){u&&u.length&&(a+=u.length,c.enqueue(u))},flush(){let{signature:u}=o;Object.assign(n,{signature:u,size:a})}});Object.defineProperty(n,"readable",{get(){return s.pipeThrough(o).pipeThrough(l)}})}},xh=typeof Worker!=xr,Ei=class{constructor(t,{readable:e,writable:n},{options:r,config:i,streamOptions:a,useWebWorkers:o,transferStreams:s,scripts:l},u){let{signal:c}=a;return Object.assign(t,{busy:!0,readable:e.pipeThrough(new _h(e,a,i),{signal:c}),writable:n,options:Object.assign({},r),scripts:l,transferStreams:s,terminate(){let{worker:f,busy:d}=t;f&&!d&&(f.terminate(),t.interface=null)},onTaskFinished(){t.busy=!1,u(t)}}),(o&&xh?Sh:Th)(t,i)}},_h=class extends TransformStream{constructor(t,{onstart:e,onprogress:n,size:r,onend:i},{chunkSize:a}){let o=0;super({start(){e&&Ci(e,r)},async transform(s,l){o+=s.length,n&&await Ci(n,o,r),l.enqueue(s)},flush(){t.size=o,i&&Ci(i,o)}},{highWaterMark:1,size:()=>a})}};async function Ci(t,...e){try{await t(...e)}catch{}}function Th(t,e){return{run:()=>kh(t,e)}}function Sh(t,{baseURL:e,chunkSize:n}){return t.interface||Object.assign(t,{worker:Ch(t.scripts[0],e,t),interface:{run:()=>Ah(t,{chunkSize:n})}}),t.interface}async function kh({options:t,readable:e,writable:n,onTaskFinished:r},i){let a=new vh(t,i);try{await e.pipeThrough(a).pipeTo(n,{preventClose:!0,preventAbort:!0});let{signature:o,size:s}=a;return{signature:o,size:s}}finally{r()}}async function Ah(t,e){let n,r,i=new Promise((f,d)=>{n=f,r=d});Object.assign(t,{reader:null,writer:null,resolveResult:n,rejectResult:r,result:i});let{readable:a,options:o,scripts:s}=t,{writable:l,closed:u}=Eh(t.writable);zi({type:gh,scripts:s.slice(1),options:o,config:e,readable:a,writable:l},t)||Object.assign(t,{reader:a.getReader(),writer:l.getWriter()});let c=await i;try{await l.close()}catch{}return await u,c}function Eh(t){let e=t.getWriter(),n,r=new Promise(i=>n=i);return{writable:new WritableStream({async write(i){await e.ready,await e.write(i)},close(){e.releaseLock(),n()},abort(i){return e.abort(i)}}),closed:r}}var vs=!0,xs=!0;function Ch(t,e,n){let r={type:"module"},i,a;typeof t==Os&&(t=t());try{i=new URL(t,e)}catch{i=t}if(vs)try{a=new Worker(i)}catch{vs=!1,a=new Worker(i,r)}else a=new Worker(i,r);return a.addEventListener(mh,o=>Dh(o,n)),a}function zi(t,{worker:e,writer:n,onTaskFinished:r,transferStreams:i}){try{let{value:a,readable:o,writable:s}=t,l=[];if(a){let{buffer:u,length:c}=a;c!=u.byteLength&&(a=new Uint8Array(a)),t.value=a.buffer,l.push(t.value)}if(i&&xs?(o&&l.push(o),s&&l.push(s)):t.readable=t.writable=null,l.length)try{return e.postMessage(t,l),!0}catch{xs=!1,t.readable=t.writable=null,e.postMessage(t)}else e.postMessage(t)}catch(a){throw n&&n.releaseLock(),r(),a}}async function Dh({data:t},e){let{type:n,value:r,messageId:i,result:a,error:o}=t,{reader:s,writer:l,resolveResult:u,rejectResult:c,onTaskFinished:f}=e;try{if(o){let{message:p,stack:b,code:m,name:h}=o,g=new Error(p);Object.assign(g,{stack:b,code:m,name:h}),d(g)}else{if(n==bh){let{value:p,done:b}=await s.read();zi({type:ws,value:p,done:b,messageId:i},e)}n==ws&&(await l.ready,await l.write(new Uint8Array(r)),zi({type:yh,messageId:i},e)),n==wh&&d(null,a)}}catch(p){d(p)}function d(p,b){p?c(p):u(b),l&&l.releaseLock(),f()}}var Ft=[],Di=[],_s=0;async function il(t,e){let{options:n,config:r}=e,{transferStreams:i,useWebWorkers:a,useCompressionStream:o,codecType:s,compressed:l,signed:u,encrypted:c}=n,{workerScripts:f,maxWorkers:d,terminateWorkerTimeout:p}=r;e.transferStreams=i||i===me;let b=!l&&!u&&!c&&!e.transferStreams;e.useWebWorkers=!b&&(a||a===me&&r.useWebWorkers),e.scripts=e.useWebWorkers&&f?f[s]:[],n.useCompressionStream=o||o===me&&r.useCompressionStream;let m,h=Ft.find(y=>!y.busy);if(h)Pi(h),m=new Ei(h,t,e,g);else if(Ft.length<d){let y={indexWorker:_s};_s++,Ft.push(y),m=new Ei(y,t,e,g)}else m=await new Promise(y=>Di.push({resolve:y,stream:t,workerOptions:e}));return m.run();function g(y){if(Di.length){let[{resolve:w,stream:S,workerOptions:_}]=Di.splice(0,1);w(new Ei(y,S,_,g))}else y.worker?(Pi(y),Number.isFinite(p)&&p>=0&&(y.terminateTimeout=setTimeout(()=>{Ft=Ft.filter(w=>w!=y),y.terminate()},p))):Ft=Ft.filter(w=>w!=y)}}function Pi(t){let{terminateTimeout:e}=t;e&&(clearTimeout(e),t.terminateTimeout=null)}function Rh(){Ft.forEach(t=>{Pi(t),t.terminate()})}var al="HTTP error ",Rn="HTTP Range not supported",ol="Writer iterator completed too soon",Fh="text/plain",Lh="Content-Length",Ih="Content-Range",Mh="Accept-Ranges",Oh="Range",zh="Content-Type",Ph="HEAD",Zi="GET",sl="bytes",Uh=64*1024,Yi="writable",Rr=class{constructor(){this.size=0}init(){this.initialized=!0}},It=class extends Rr{get readable(){let t=this,{chunkSize:e=Uh}=t,n=new ReadableStream({start(){this.chunkOffset=0},async pull(r){let{offset:i=0,size:a,diskNumberStart:o}=n,{chunkOffset:s}=this;r.enqueue(await Ce(t,i+s,Math.min(e,a-s),o)),s+e>a?r.close():this.chunkOffset+=e}});return n}},Ji=class extends Rr{constructor(){super();let t=this,e=new WritableStream({write(n){return t.writeUint8Array(n)}});Object.defineProperty(t,Yi,{get(){return e}})}writeUint8Array(){}},Bh=class extends It{constructor(t){super();let e=t.length;for(;t.charAt(e-1)=="=";)e--;let n=t.indexOf(",")+1;Object.assign(this,{dataURI:t,dataStart:n,size:Math.floor((e-n)*.75)})}readUint8Array(t,e){let{dataStart:n,dataURI:r}=this,i=new Uint8Array(e),a=Math.floor(t/3)*4,o=atob(r.substring(a+n,Math.ceil((t+e)/3)*4+n)),s=t-Math.floor(a/4)*3;for(let l=s;l<s+e;l++)i[l-s]=o.charCodeAt(l);return i}},$h=class extends Ji{constructor(t){super(),Object.assign(this,{data:"data:"+(t||"")+";base64,",pending:[]})}writeUint8Array(t){let e=this,n=0,r=e.pending,i=e.pending.length;for(e.pending="",n=0;n<Math.floor((i+t.length)/3)*3-i;n++)r+=String.fromCharCode(t[n]);for(;n<t.length;n++)e.pending+=String.fromCharCode(t[n]);r.length>2?e.data+=btoa(r):e.pending=r}getData(){return this.data+btoa(this.pending)}},Qi=class extends It{constructor(t){super(),Object.assign(this,{blob:t,size:t.size})}async readUint8Array(t,e){let n=this,r=t+e,i=t||r<n.size?n.blob.slice(t,r):n.blob;return new Uint8Array(await i.arrayBuffer())}},ea=class extends Rr{constructor(t){super();let e=this,n=new TransformStream,r=[];t&&r.push([zh,t]),Object.defineProperty(e,Yi,{get(){return n.writable}}),e.blob=new Response(n.readable,{headers:r}).blob()}getData(){return this.blob}},Nh=class extends Qi{constructor(t){super(new Blob([t],{type:Fh}))}},Wh=class extends ea{constructor(t){super(t),Object.assign(this,{encoding:t,utf8:!t||t.toLowerCase()=="utf-8"})}async getData(){let{encoding:t,utf8:e}=this,n=await super.getData();if(n.text&&e)return n.text();{let r=new FileReader;return new Promise((i,a)=>{Object.assign(r,{onload:({target:o})=>i(o.result),onerror:()=>a(r.error)}),r.readAsText(n,t)})}}},Hh=class extends It{constructor(t,e){super(),ll(this,t,e)}async init(){await cl(this,Ui,Ts),super.init()}readUint8Array(t,e){return ul(this,t,e,Ui,Ts)}},jh=class extends It{constructor(t,e){super(),ll(this,t,e)}async init(){await cl(this,Bi,Ss),super.init()}readUint8Array(t,e){return ul(this,t,e,Bi,Ss)}};function ll(t,e,n){let{preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a}=n;n=Object.assign({},n),delete n.preventHeadRequest,delete n.useRangeHeader,delete n.forceRangeRequests,delete n.useXHR,Object.assign(t,{url:e,options:n,preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a})}async function cl(t,e,n){let{url:r,useRangeHeader:i,forceRangeRequests:a}=t;if(Kh(r)&&(i||a)){let{headers:o}=await e(Zi,t,dl(t));if(!a&&o.get(Mh)!=sl)throw new Error(Rn);{let s,l=o.get(Ih);if(l){let u=l.trim().split(/\s*\/\s*/);if(u.length){let c=u[1];c&&c!="*"&&(s=Number(c))}}s===me?await ks(t,e,n):t.size=s}}else await ks(t,e,n)}async function ul(t,e,n,r,i){let{useRangeHeader:a,forceRangeRequests:o,options:s}=t;if(a||o){let l=await r(Zi,t,dl(t,e,n));if(l.status!=206)throw new Error(Rn);return new Uint8Array(await l.arrayBuffer())}else{let{data:l}=t;return l||await i(t,s),new Uint8Array(t.data.subarray(e,e+n))}}function dl(t,e=0,n=1){return Object.assign({},ta(t),{[Oh]:sl+"="+e+"-"+(e+n-1)})}function ta({options:t}){let{headers:e}=t;if(e)return Symbol.iterator in e?Object.fromEntries(e):e}async function Ts(t){await fl(t,Ui)}async function Ss(t){await fl(t,Bi)}async function fl(t,e){let n=await e(Zi,t,ta(t));t.data=new Uint8Array(await n.arrayBuffer()),t.size||(t.size=t.data.length)}async function ks(t,e,n){if(t.preventHeadRequest)await n(t,t.options);else{let r=(await e(Ph,t,ta(t))).headers.get(Lh);r?t.size=Number(r):await n(t,t.options)}}async function Ui(t,{options:e,url:n},r){let i=await fetch(n,Object.assign({},e,{method:t,headers:r}));if(i.status<400)return i;throw i.status==416?new Error(Rn):new Error(al+(i.statusText||i.status))}function Bi(t,{url:e},n){return new Promise((r,i)=>{let a=new XMLHttpRequest;if(a.addEventListener("load",()=>{if(a.status<400){let o=[];a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(s=>{let l=s.trim().split(/\s*:\s*/);l[0]=l[0].trim().replace(/^[a-z]|-[a-z]/g,u=>u.toUpperCase()),o.push(l)}),r({status:a.status,arrayBuffer:()=>a.response,headers:new Map(o)})}else i(a.status==416?new Error(Rn):new Error(al+(a.statusText||a.status)))},!1),a.addEventListener("error",o=>i(o.detail.error),!1),a.open(t,e),n)for(let o of Object.entries(n))a.setRequestHeader(o[0],o[1]);a.responseType="arraybuffer",a.send()})}var hl=class extends It{constructor(t,e={}){super(),Object.assign(this,{url:t,reader:e.useXHR?new jh(t,e):new Hh(t,e)})}set size(t){}get size(){return this.reader.size}async init(){await this.reader.init(),super.init()}readUint8Array(t,e){return this.reader.readUint8Array(t,e)}},qh=class extends hl{constructor(t,e={}){e.useRangeHeader=!0,super(t,e)}},Vh=class extends It{constructor(t){super(),Object.assign(this,{array:t,size:t.length})}readUint8Array(t,e){return this.array.slice(t,t+e)}},Gh=class extends Ji{init(t=0){Object.assign(this,{offset:0,array:new Uint8Array(t)}),super.init()}writeUint8Array(t){let e=this;if(e.offset+t.length>e.array.length){let n=e.array;e.array=new Uint8Array(n.length+t.length),e.array.set(n)}e.array.set(t,e.offset),e.offset+=t.length}getData(){return this.array}},na=class extends It{constructor(t){super(),this.readers=t}async init(){let t=this,{readers:e}=t;t.lastDiskNumber=0,await Promise.all(e.map(async n=>{await n.init(),t.size+=n.size})),super.init()}async readUint8Array(t,e,n=0){let r=this,{readers:i}=this,a,o=n;o==-1&&(o=i.length-1);let s=t;for(;s>=i[o].size;)s-=i[o].size,o++;let l=i[o],u=l.size;if(s+e<=u)a=await Ce(l,s,e);else{let c=u-s;a=new Uint8Array(e),a.set(await Ce(l,s,c)),a.set(await r.readUint8Array(t+c,e-c,n),c)}return r.lastDiskNumber=Math.max(o,r.lastDiskNumber),a}},Cn=class extends Rr{constructor(t,e=4294967295){super();let n=this;Object.assign(n,{diskNumber:0,diskOffset:0,size:0,maxSize:e,availableSize:e});let r,i,a,o=new WritableStream({async write(u){let{availableSize:c}=n;if(a)u.length>=c?(await s(u.slice(0,c)),await l(),n.diskOffset+=r.size,n.diskNumber++,a=null,await this.write(u.slice(c))):await s(u);else{let{value:f,done:d}=await t.next();if(d&&!f)throw new Error(ol);r=f,r.size=0,r.maxSize&&(n.maxSize=r.maxSize),n.availableSize=n.maxSize,await yt(r),i=f.writable,a=i.getWriter(),await this.write(u)}},async close(){await a.ready,await l()}});Object.defineProperty(n,Yi,{get(){return o}});async function s(u){let c=u.length;c&&(await a.ready,await a.write(u),r.size+=c,n.size+=c,n.availableSize-=c)}async function l(){i.size=r.size,await a.close()}}};function Kh(t){let{baseURL:e}=qi(),{protocol:n}=new URL(t,e);return n=="http:"||n=="https:"}async function yt(t,e){t.init&&!t.initialized&&await t.init(e)}function ra(t){return Array.isArray(t)&&(t=new na(t)),t instanceof ReadableStream&&(t={readable:t}),t}function ia(t){t.writable===me&&typeof t.next==Os&&(t=new Cn(t)),t instanceof WritableStream&&(t={writable:t});let{writable:e}=t;return e.size===me&&(e.size=0),t instanceof Cn||Object.assign(t,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),t}function Ce(t,e,n,r){return t.readUint8Array(e,n,r)}var Xh=na,Zh=Cn,pl="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""),Yh=pl.length==256;function Jh(t){if(Yh){let e="";for(let n=0;n<t.length;n++)e+=pl[t[n]];return e}else return new TextDecoder().decode(t)}function $i(t,e){return e&&e.trim().toLowerCase()=="cp437"?Jh(t):new TextDecoder(e).decode(t)}var ml="filename",gl="rawFilename",bl="comment",yl="rawComment",wl="uncompressedSize",vl="compressedSize",xl="offset",Ni="diskNumberStart",aa="lastModDate",_l="rawLastModDate",oa="lastAccessDate",Qh="rawLastAccessDate",sa="creationDate",ep="rawCreationDate",Tl="internalFileAttribute",Sl="externalFileAttribute",kl="msDosCompatible",Al="zip64",tp=[ml,gl,vl,wl,aa,_l,bl,yl,oa,sa,xl,Ni,Ni,Tl,Sl,kl,Al,"directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"],Sr=class{constructor(t){tp.forEach(e=>this[e]=t[e])}},wr="File format is not recognized",El="End of central directory not found",Cl="End of Zip64 central directory not found",Dl="End of Zip64 central directory locator not found",Rl="Central directory header not found",Fl="Local file header not found",Ll="Zip64 extra field not found",Il="File contains encrypted entry",Ml="Encryption method not supported",Wi="Compression method not supported",Hi="Split zip file",As="utf-8",Es="cp437",np=[[wl,4294967295],[vl,4294967295],[xl,4294967295],[Ni,65535]],rp={[65535]:{getValue:he,bytes:4},[4294967295]:{getValue:vr,bytes:8}},ip=class{constructor(t,e={}){Object.assign(this,{reader:ra(t),options:e,config:qi()})}async*getEntriesGenerator(t={}){let e=this,{reader:n}=e,{config:r}=e;if(await yt(n),(n.size===me||!n.readUint8Array)&&(n=new Qi(await new Response(n.readable).blob()),await yt(n)),n.size<22)throw new Error(wr);n.chunkSize=Ps(r);let i=await up(n,101010256,n.size,22,65535*16);if(!i){let T=await Ce(n,0,4),A=Ae(T);throw he(A)==134695760?new Error(Hi):new Error(El)}let a=Ae(i),o=he(a,12),s=he(a,16),l=i.offset,u=ve(a,20),c=l+22+u,f=ve(a,4),d=n.lastDiskNumber||0,p=ve(a,6),b=ve(a,8),m=0,h=0;if(s==4294967295||o==4294967295||b==65535||p==65535){let T=await Ce(n,i.offset-20,20),A=Ae(T);if(he(A,0)!=117853008)throw new Error(Cl);s=vr(A,8);let k=await Ce(n,s,56,-1),E=Ae(k),F=i.offset-20-56;if(he(E,0)!=101075792&&s!=F){let C=s;s=F,m=s-C,k=await Ce(n,s,56,-1),E=Ae(k)}if(he(E,0)!=101075792)throw new Error(Dl);f==65535&&(f=he(E,16)),p==65535&&(p=he(E,20)),b==65535&&(b=vr(E,32)),o==4294967295&&(o=vr(E,40)),s-=o}if(d!=f)throw new Error(Hi);if(s<0||s>=n.size)throw new Error(wr);let g=0,y=await Ce(n,s,o,p),w=Ae(y);if(o){let T=i.offset-o;if(he(w,g)!=33639248&&s!=T){let A=s;s=T,m=s-A,y=await Ce(n,s,o,p),w=Ae(y)}}if(s<0||s>=n.size)throw new Error(wr);let S=ot(e,t,"filenameEncoding"),_=ot(e,t,"commentEncoding");for(let T=0;T<b;T++){let A=new ap(n,r,e.options);if(he(w,g)!=33639248)throw new Error(Rl);Ol(A,w,g+6);let k=!!A.bitFlag.languageEncodingFlag,E=g+46,F=E+A.filenameLength,C=F+A.extraFieldLength,I=ve(w,g+4),R=(I&0)==0,M=y.subarray(E,F),P=ve(w,g+32),W=C+P,Y=y.subarray(C,W),$=k,j=k,H=R&&(Yt(w,g+38)&16)==16,q=he(w,g+42)+m;Object.assign(A,{versionMadeBy:I,msDosCompatible:R,compressedSize:0,uncompressedSize:0,commentLength:P,directory:H,offset:q,diskNumberStart:ve(w,g+34),internalFileAttribute:ve(w,g+36),externalFileAttribute:he(w,g+38),rawFilename:M,filenameUTF8:$,commentUTF8:j,rawExtraField:y.subarray(F,C)});let[K,Z]=await Promise.all([$i(M,$?As:S||Es),$i(Y,j?As:_||Es)]);Object.assign(A,{rawComment:Y,filename:K,comment:Z,directory:H||K.endsWith(yr)}),h=Math.max(q,h),await zl(A,A,w,g+6);let re=new Sr(A);re.getData=(we,Oe)=>A.getData(we,re,Oe),g=W;let{onprogress:ye}=t;if(ye)try{await ye(T+1,b,new Sr(A))}catch{}yield re}let v=ot(e,t,"extractPrependedData"),x=ot(e,t,"extractAppendedData");return v&&(e.prependedData=h>0?await Ce(n,0,h):new Uint8Array),e.comment=u?await Ce(n,l+22,u):new Uint8Array,x&&(e.appendedData=c<n.size?await Ce(n,c,n.size-c):new Uint8Array),!0}async getEntries(t={}){let e=[];for await(let n of this.getEntriesGenerator(t))e.push(n);return e}async close(){}},ap=class{constructor(t,e,n){Object.assign(this,{reader:t,config:e,options:n})}async getData(t,e,n={}){let r=this,{reader:i,offset:a,diskNumberStart:o,extraFieldAES:s,compressionMethod:l,config:u,bitFlag:c,signature:f,rawLastModDate:d,uncompressedSize:p,compressedSize:b}=r,m=r.localDirectory={},h=await Ce(i,a,30,o),g=Ae(h),y=ot(r,n,"password");if(y=y&&y.length&&y,s&&s.originalCompressionMethod!=99)throw new Error(Wi);if(l!=0&&l!=8)throw new Error(Wi);if(he(g,0)!=67324752)throw new Error(Fl);Ol(m,g,4),m.rawExtraField=m.extraFieldLength?await Ce(i,a+30+m.filenameLength,m.extraFieldLength,o):new Uint8Array,await zl(r,m,g,4),Object.assign(e,{lastAccessDate:m.lastAccessDate,creationDate:m.creationDate});let w=r.encrypted&&m.encrypted,S=w&&!s;if(w){if(!S&&s.strength===me)throw new Error(Ml);if(!y)throw new Error(Il)}let _=a+30+m.filenameLength+m.extraFieldLength,v=i.readable;v.diskNumberStart=o,v.offset=_;let x=v.size=b,T=ot(r,n,"signal");t=ia(t),await yt(t,p);let{writable:A}=t,{onstart:k,onprogress:E,onend:F}=n,C={options:{codecType:rl,password:y,zipCrypto:S,encryptionStrength:s&&s.strength,signed:ot(r,n,"checkSignature"),passwordVerification:S&&(c.dataDescriptor?d>>>8&255:f>>>24&255),signature:f,compressed:l!=0,encrypted:w,useWebWorkers:ot(r,n,"useWebWorkers"),useCompressionStream:ot(r,n,"useCompressionStream"),transferStreams:ot(r,n,"transferStreams")},config:u,streamOptions:{signal:T,size:x,onstart:k,onprogress:E,onend:F}};return A.size+=(await il({readable:v,writable:A},C)).size,ot(r,n,"preventClose")||await A.close(),t.getData?t.getData():A}};function Ol(t,e,n){let r=t.rawBitFlag=ve(e,n+2),i=(r&1)==1,a=he(e,n+6);Object.assign(t,{encrypted:i,version:ve(e,n),bitFlag:{level:(r&6)>>1,dataDescriptor:(r&8)==8,languageEncodingFlag:(r&2048)==2048},rawLastModDate:a,lastModDate:dp(a),filenameLength:ve(e,n+22),extraFieldLength:ve(e,n+24)})}async function zl(t,e,n,r){let{rawExtraField:i}=e,a=e.extraField=new Map,o=Ae(new Uint8Array(i)),s=0;try{for(;s<i.length;){let m=ve(o,s),h=ve(o,s+2);a.set(m,{type:m,data:i.slice(s+4,s+4+h)}),s+=4+h}}catch{}let l=ve(n,r+4);Object.assign(e,{signature:he(n,r+10),uncompressedSize:he(n,r+18),compressedSize:he(n,r+14)});let u=a.get(1);u&&(op(u,e),e.extraFieldZip64=u);let c=a.get(28789);c&&(await Cs(c,ml,gl,e,t),e.extraFieldUnicodePath=c);let f=a.get(25461);f&&(await Cs(f,bl,yl,e,t),e.extraFieldUnicodeComment=f);let d=a.get(39169);d?(sp(d,e,l),e.extraFieldAES=d):e.compressionMethod=l;let p=a.get(10);p&&(lp(p,e),e.extraFieldNTFS=p);let b=a.get(21589);b&&(cp(b,e),e.extraFieldExtendedTimestamp=b)}function op(t,e){e.zip64=!0;let n=Ae(t.data),r=np.filter(([i,a])=>e[i]==a);for(let i=0,a=0;i<r.length;i++){let[o,s]=r[i];if(e[o]==s){let l=rp[s];e[o]=t[o]=l.getValue(n,a),a+=l.bytes}else if(t[o])throw new Error(Ll)}}async function Cs(t,e,n,r,i){let a=Ae(t.data),o=new _r;o.append(i[n]);let s=Ae(new Uint8Array(4));s.setUint32(0,o.get(),!0),Object.assign(t,{version:Yt(a,0),signature:he(a,1),[e]:await $i(t.data.subarray(5)),valid:!i.bitFlag.languageEncodingFlag&&t.signature==he(s,0)}),t.valid&&(r[e]=t[e],r[e+"UTF8"]=!0)}function sp(t,e,n){let r=Ae(t.data),i=Yt(r,4);Object.assign(t,{vendorVersion:Yt(r,0),vendorId:Yt(r,2),strength:i,originalCompressionMethod:n,compressionMethod:ve(r,5)}),e.compressionMethod=t.compressionMethod}function lp(t,e){let n=Ae(t.data),r=4,i;try{for(;r<t.data.length&&!i;){let a=ve(n,r),o=ve(n,r+2);a==1&&(i=t.data.slice(r+4,r+4+o)),r+=4+o}}catch{}try{if(i&&i.length==24){let a=Ae(i),o=a.getBigUint64(0,!0),s=a.getBigUint64(8,!0),l=a.getBigUint64(16,!0);Object.assign(t,{rawLastModDate:o,rawLastAccessDate:s,rawCreationDate:l});let u=Ri(o),c=Ri(s),f=Ri(l),d={lastModDate:u,lastAccessDate:c,creationDate:f};Object.assign(t,d),Object.assign(e,d)}}catch{}}function cp(t,e){let n=Ae(t.data),r=Yt(n,0),i=[],a=[];(r&1)==1&&(i.push(aa),a.push(_l)),(r&2)==2&&(i.push(oa),a.push(Qh)),(r&4)==4&&(i.push(sa),a.push(ep));let o=1;i.forEach((s,l)=>{if(t.data.length>=o+4){let u=he(n,o);e[s]=t[s]=new Date(u*1e3);let c=a[l];t[c]=u}o+=4})}async function up(t,e,n,r,i){let a=new Uint8Array(4),o=Ae(a);fp(o,0,e);let s=r+i;return await l(r)||await l(Math.min(s,n));async function l(u){let c=n-u,f=await Ce(t,c,u);for(let d=f.length-r;d>=0;d--)if(f[d]==a[0]&&f[d+1]==a[1]&&f[d+2]==a[2]&&f[d+3]==a[3])return{offset:c+d,buffer:f.slice(d,d+r).buffer}}}function ot(t,e,n){return e[n]===me?t.options[n]:e[n]}function dp(t){let e=(t&4294901760)>>16,n=t&65535;try{return new Date(1980+((e&65024)>>9),((e&480)>>5)-1,e&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch{}}function Ri(t){return new Date(Number(t/BigInt(1e4)-BigInt(116444736e5)))}function Yt(t,e){return t.getUint8(e)}function ve(t,e){return t.getUint16(e,!0)}function he(t,e){return t.getUint32(e,!0)}function vr(t,e){return Number(t.getBigUint64(e,!0))}function fp(t,e,n){t.setUint32(e,n,!0)}function Ae(t){return new DataView(t.buffer)}var Pl="File already exists",Ul="Zip file comment exceeds 64KB",Bl="File entry comment exceeds 64KB",$l="File entry name exceeds 64KB",ji="Version exceeds 65535",Nl="The strength must equal 1, 2, or 3",Wl="Extra field type exceeds 65535",Hl="Extra field data exceeds 64KB",Fr="Zip64 is not supported (make sure 'keepOrder' is set to 'true')",Ds=new Uint8Array([7,0,2,0,65,69,3,0,0]),Fi=0,Rs=[],hp=class{constructor(t,e={}){t=ia(t),Object.assign(this,{writer:t,addSplitZipSignature:t instanceof Cn,options:e,config:qi(),files:new Map,filenames:new Set,offset:t.writable.size,pendingEntriesSize:0,pendingAddFileCalls:new Set,bufferedWrites:0})}async add(t="",e,n={}){let r=this,{pendingAddFileCalls:i,config:a}=r;Fi<a.maxWorkers?Fi++:await new Promise(s=>Rs.push(s));let o;try{if(t=t.trim(),r.filenames.has(t))throw new Error(Pl);return r.filenames.add(t),o=pp(r,t,e,n),i.add(o),await o}catch(s){throw r.filenames.delete(t),s}finally{i.delete(o);let s=Rs.shift();s?s():Fi--}}async close(t=new Uint8Array,e={}){let n=this,{pendingAddFileCalls:r,writer:i}=this,{writable:a}=i;for(;r.size;)await Promise.all(Array.from(r));return await _p(this,t,e),ce(n,e,"preventClose")||await a.close(),i.getData?i.getData():a}};async function pp(t,e,n,r){e=e.trim(),r.directory&&!e.endsWith(yr)?e+=yr:r.directory=e.endsWith(yr);let i=Mi(e);if(ie(i)>65535)throw new Error($l);let a=r.comment||"",o=Mi(a);if(ie(o)>65535)throw new Error(Bl);let s=ce(t,r,"version",20);if(s>65535)throw new Error(ji);let l=ce(t,r,"versionMadeBy",20);if(l>65535)throw new Error(ji);let u=ce(t,r,aa,new Date),c=ce(t,r,oa),f=ce(t,r,sa),d=ce(t,r,kl,!0),p=ce(t,r,Tl,0),b=ce(t,r,Sl,0),m=ce(t,r,"password"),h=ce(t,r,"encryptionStrength",3),g=ce(t,r,"zipCrypto"),y=ce(t,r,"extendedTimestamp",!0),w=ce(t,r,"keepOrder",!0),S=ce(t,r,"level"),_=ce(t,r,"useWebWorkers"),v=ce(t,r,"bufferedWrite"),x=ce(t,r,"dataDescriptorSignature",!1),T=ce(t,r,"signal"),A=ce(t,r,"useCompressionStream"),k=ce(t,r,"dataDescriptor",!0),E=ce(t,r,Al);if(m!==me&&h!==me&&(h<1||h>3))throw new Error(Nl);let F=new Uint8Array,{extraField:C}=r;if(C){let we=0,Oe=0;C.forEach(fe=>we+=4+ie(fe)),F=new Uint8Array(we),C.forEach((fe,$e)=>{if($e>65535)throw new Error(Wl);if(ie(fe)>65535)throw new Error(Hl);xe(F,new Uint16Array([$e]),Oe),xe(F,new Uint16Array([ie(fe)]),Oe+2),xe(F,fe,Oe+4),Oe+=4+ie(fe)})}let I=0,R=0,M=0,P=E===!0;n&&(n=ra(n),await yt(n),n.size===me?(k=!0,(E||E===me)&&(E=!0,I=4294967295)):(M=n.size,I=Sp(M)));let{diskOffset:W,diskNumber:Y,maxSize:$}=t.writer,j=P||M>=4294967295,H=P||I>=4294967295,q=P||t.offset+t.pendingEntriesSize-W>=4294967295,K=ce(t,r,"supportZip64SplitFile",!0)&&P||Y+Math.ceil(t.pendingEntriesSize/$)>=65535;if(q||j||H||K){if(E===!1||!w)throw new Error(Fr);E=!0}E=E||!1,r=Object.assign({},r,{rawFilename:i,rawComment:o,version:s,versionMadeBy:l,lastModDate:u,lastAccessDate:c,creationDate:f,rawExtraField:F,zip64:E,zip64UncompressedSize:j,zip64CompressedSize:H,zip64Offset:q,zip64DiskNumberStart:K,password:m,level:S,useWebWorkers:_,encryptionStrength:h,extendedTimestamp:y,zipCrypto:g,bufferedWrite:v,keepOrder:w,dataDescriptor:k,dataDescriptorSignature:x,signal:T,msDosCompatible:d,internalFileAttribute:p,externalFileAttribute:b,useCompressionStream:A});let Z=bp(r),re=yp(r);R=ie(Z.localHeaderArray,re.dataDescriptorArray)+I,t.pendingEntriesSize+=R;let ye;try{ye=await mp(t,e,n,{headerInfo:Z,dataDescriptorInfo:re},r)}finally{t.pendingEntriesSize-=R}return Object.assign(ye,{name:e,comment:a,extraField:C}),new Sr(ye)}async function mp(t,e,n,r,i){let{files:a,writer:o}=t,{keepOrder:s,dataDescriptor:l,signal:u}=i,{headerInfo:c}=r,f=Array.from(a.values()).pop(),d={},p,b,m,h,g,y;a.set(e,d);try{let v;s&&(v=f&&f.lock,w()),i.bufferedWrite||t.writerLocked||t.bufferedWrites&&s||!l?(y=new ea,y.writable.size=0,p=!0,t.bufferedWrites++,await yt(o)):(y=o,await S()),await yt(y);let{writable:x}=o,{diskOffset:T}=o;if(t.addSplitZipSignature){delete t.addSplitZipSignature;let k=new Uint8Array(4),E=Ue(k);ee(E,0,134695760),await ut(x,k),t.offset+=4}p||(await v,await _(x));let{diskNumber:A}=o;if(g=!0,d.diskNumberStart=A,d=await gp(n,y,d,r,t.config,i),g=!1,a.set(e,d),d.filename=e,p){await y.writable.close();let k=await y.getData();await v,await S(),h=!0,l||(k=await vp(d,k,x,i)),await _(x),d.diskNumberStart=o.diskNumber,T=o.diskOffset,await k.stream().pipeTo(x,{preventClose:!0,preventAbort:!0,signal:u}),x.size+=k.size,h=!1}if(d.offset=t.offset-T,d.zip64)xp(d,i);else if(d.offset>=4294967295)throw new Error(Fr);return t.offset+=d.length,d}catch(v){if(p&&h||!p&&g){if(t.hasCorruptedEntries=!0,v)try{v.corruptedEntry=!0}catch{}p?t.offset+=y.writable.size:t.offset=y.writable.size}throw a.delete(e),v}finally{p&&t.bufferedWrites--,m&&m(),b&&b()}function w(){d.lock=new Promise(v=>m=v)}async function S(){t.writerLocked=!0;let{lockWriter:v}=t;t.lockWriter=new Promise(x=>b=()=>{t.writerLocked=!1,x()}),await v}async function _(v){c.localHeaderArray.length>o.availableSize&&(o.availableSize=0,await ut(v,new Uint8Array))}}async function gp(t,e,{diskNumberStart:n,lock:r},i,a,o){let{headerInfo:s,dataDescriptorInfo:l}=i,{localHeaderArray:u,headerArray:c,lastModDate:f,rawLastModDate:d,encrypted:p,compressed:b,version:m,compressionMethod:h,rawExtraFieldExtendedTimestamp:g,rawExtraFieldNTFS:y,rawExtraFieldAES:w}=s,{dataDescriptorArray:S}=l,{rawFilename:_,lastAccessDate:v,creationDate:x,password:T,level:A,zip64:k,zip64UncompressedSize:E,zip64CompressedSize:F,zip64Offset:C,zip64DiskNumberStart:I,zipCrypto:R,dataDescriptor:M,directory:P,versionMadeBy:W,rawComment:Y,rawExtraField:$,useWebWorkers:j,onstart:H,onprogress:q,onend:K,signal:Z,encryptionStrength:re,extendedTimestamp:ye,msDosCompatible:we,internalFileAttribute:Oe,externalFileAttribute:fe,useCompressionStream:$e}=o,Re={lock:r,versionMadeBy:W,zip64:k,directory:!!P,filenameUTF8:!0,rawFilename:_,commentUTF8:!0,rawComment:Y,rawExtraFieldExtendedTimestamp:g,rawExtraFieldNTFS:y,rawExtraFieldAES:w,rawExtraField:$,extendedTimestamp:ye,msDosCompatible:we,internalFileAttribute:Oe,externalFileAttribute:fe,diskNumberStart:n},Ge=0,ze=0,pe,{writable:Te}=e;if(t){t.chunkSize=Ps(a),await ut(Te,u);let tt=t.readable,Bn=tt.size=t.size,Qr={options:{codecType:nl,level:A,password:T,encryptionStrength:re,zipCrypto:p&&R,passwordVerification:p&&R&&d>>8&255,signed:!0,compressed:b,encrypted:p,useWebWorkers:j,useCompressionStream:$e,transferStreams:!1},config:a,streamOptions:{signal:Z,size:Bn,onstart:H,onprogress:q,onend:K}},gt=await il({readable:tt,writable:Te},Qr);Te.size+=gt.size,pe=gt.signature,ze=t.size=tt.size,Ge=gt.size}else await ut(Te,u);let Ut;if(k){let tt=4;E&&(tt+=8),F&&(tt+=8),C&&(tt+=8),I&&(tt+=4),Ut=new Uint8Array(tt)}else Ut=new Uint8Array;return t&&wp({signature:pe,rawExtraFieldZip64:Ut,compressedSize:Ge,uncompressedSize:ze,headerInfo:s,dataDescriptorInfo:l},o),M&&await ut(Te,S),Object.assign(Re,{uncompressedSize:ze,compressedSize:Ge,lastModDate:f,rawLastModDate:d,creationDate:x,lastAccessDate:v,encrypted:p,length:ie(u,S)+Ge,compressionMethod:h,version:m,headerArray:c,signature:pe,rawExtraFieldZip64:Ut,zip64UncompressedSize:E,zip64CompressedSize:F,zip64Offset:C,zip64DiskNumberStart:I}),Re}function bp(t){let{rawFilename:e,lastModDate:n,lastAccessDate:r,creationDate:i,password:a,level:o,zip64:s,zipCrypto:l,dataDescriptor:u,directory:c,rawExtraField:f,encryptionStrength:d,extendedTimestamp:p}=t,b=o!==0&&!c,m=!!(a&&ie(a)),h=t.version,g;if(m&&!l){g=new Uint8Array(ie(Ds)+2);let R=Ue(g);oe(R,0,39169),xe(g,Ds,2),kr(R,8,d)}else g=new Uint8Array;let y,w;if(p){w=new Uint8Array(9+(r?4:0)+(i?4:0));let R=Ue(w);oe(R,0,21589),oe(R,2,ie(w)-4);let M=1+(r?2:0)+(i?4:0);kr(R,4,M),ee(R,5,Math.floor(n.getTime()/1e3)),r&&ee(R,9,Math.floor(r.getTime()/1e3)),i&&ee(R,13,Math.floor(i.getTime()/1e3));try{y=new Uint8Array(36);let P=Ue(y),W=Li(n);oe(P,0,10),oe(P,2,32),oe(P,8,1),oe(P,10,24),Pe(P,12,W),Pe(P,20,Li(r)||W),Pe(P,28,Li(i)||W)}catch{y=new Uint8Array}}else y=w=new Uint8Array;let S=2048;u&&(S=S|8);let _=0;b&&(_=8),s&&(h=h>45?h:45),m&&(S=S|1,l||(h=h>51?h:51,_=99,b&&(g[9]=8)));let v=new Uint8Array(26),x=Ue(v);oe(x,0,h),oe(x,2,S),oe(x,4,_);let T=new Uint32Array(1),A=Ue(T),k;n<ds?k=ds:n>us?k=us:k=n,oe(A,0,(k.getHours()<<6|k.getMinutes())<<5|k.getSeconds()/2),oe(A,2,(k.getFullYear()-1980<<4|k.getMonth()+1)<<5|k.getDate());let E=T[0];ee(x,6,E),oe(x,22,ie(e));let F=ie(g,w,y,f);oe(x,24,F);let C=new Uint8Array(30+ie(e)+F),I=Ue(C);return ee(I,0,67324752),xe(C,v,4),xe(C,e,30),xe(C,g,30+ie(e)),xe(C,w,30+ie(e,g)),xe(C,y,30+ie(e,g,w)),xe(C,f,30+ie(e,g,w,y)),{localHeaderArray:C,headerArray:v,headerView:x,lastModDate:n,rawLastModDate:E,encrypted:m,compressed:b,version:h,compressionMethod:_,rawExtraFieldExtendedTimestamp:w,rawExtraFieldNTFS:y,rawExtraFieldAES:g}}function yp(t){let{zip64:e,dataDescriptor:n,dataDescriptorSignature:r}=t,i=new Uint8Array,a,o=0;return n&&(i=new Uint8Array(e?r?24:20:r?16:12),a=Ue(i),r&&(o=4,ee(a,0,134695760))),{dataDescriptorArray:i,dataDescriptorView:a,dataDescriptorOffset:o}}function wp(t,e){let{signature:n,rawExtraFieldZip64:r,compressedSize:i,uncompressedSize:a,headerInfo:o,dataDescriptorInfo:s}=t,{headerView:l,encrypted:u}=o,{dataDescriptorView:c,dataDescriptorOffset:f}=s,{zip64:d,zip64UncompressedSize:p,zip64CompressedSize:b,zipCrypto:m,dataDescriptor:h}=e;if((!u||m)&&n!==me&&(ee(l,10,n),h&&ee(c,f,n)),d){let g=Ue(r);oe(g,0,1),oe(g,2,r.length-4);let y=4;p&&(ee(l,18,4294967295),Pe(g,y,BigInt(a)),y+=8),b&&(ee(l,14,4294967295),Pe(g,y,BigInt(i))),h&&(Pe(c,f+4,BigInt(i)),Pe(c,f+12,BigInt(a)))}else ee(l,14,i),ee(l,18,a),h&&(ee(c,f+4,i),ee(c,f+8,a))}async function vp(t,e,n,{zipCrypto:r}){let i=await Tp(e,0,26),a=new DataView(i);return(!t.encrypted||r)&&ee(a,14,t.signature),t.zip64?(ee(a,18,4294967295),ee(a,22,4294967295)):(ee(a,18,t.compressedSize),ee(a,22,t.uncompressedSize)),await ut(n,new Uint8Array(i)),e.slice(i.byteLength)}function xp(t,e){let{rawExtraFieldZip64:n,offset:r,diskNumberStart:i}=t,{zip64UncompressedSize:a,zip64CompressedSize:o,zip64Offset:s,zip64DiskNumberStart:l}=e,u=Ue(n),c=4;a&&(c+=8),o&&(c+=8),s&&(Pe(u,c,BigInt(r)),c+=8),l&&ee(u,c,i)}async function _p(t,e,n){let{files:r,writer:i}=t,{diskOffset:a,writable:o}=i,{diskNumber:s}=i,l=0,u=0,c=t.offset-a,f=r.size;for(let[,{rawFilename:_,rawExtraFieldZip64:v,rawExtraFieldAES:x,rawExtraField:T,rawComment:A,rawExtraFieldExtendedTimestamp:k,rawExtraFieldNTFS:E}]of r)u+=46+ie(_,A,v,x,k,E,T);let d=new Uint8Array(u),p=Ue(d);await yt(i);let b=0;for(let[_,v]of Array.from(r.values()).entries()){let{offset:x,rawFilename:T,rawExtraFieldZip64:A,rawExtraFieldAES:k,rawExtraFieldNTFS:E,rawExtraField:F,rawComment:C,versionMadeBy:I,headerArray:R,directory:M,zip64:P,zip64UncompressedSize:W,zip64CompressedSize:Y,zip64DiskNumberStart:$,zip64Offset:j,msDosCompatible:H,internalFileAttribute:q,externalFileAttribute:K,extendedTimestamp:Z,lastModDate:re,diskNumberStart:ye,uncompressedSize:we,compressedSize:Oe}=v,fe;if(Z){fe=new Uint8Array(9);let ze=Ue(fe);oe(ze,0,21589),oe(ze,2,ie(fe)-4),kr(ze,4,1),ee(ze,5,Math.floor(re.getTime()/1e3))}else fe=new Uint8Array;let $e=ie(A,k,fe,E,F);ee(p,l,33639248),oe(p,l+4,I);let Re=Ue(R);W||ee(Re,18,we),Y||ee(Re,14,Oe),xe(d,R,l+6),oe(p,l+30,$e),oe(p,l+32,ie(C)),oe(p,l+34,P&&$?65535:ye),oe(p,l+36,q),K?ee(p,l+38,K):M&&H&&kr(p,l+38,16),ee(p,l+42,P&&j?4294967295:x),xe(d,T,l+46),xe(d,A,l+46+ie(T)),xe(d,k,l+46+ie(T,A)),xe(d,fe,l+46+ie(T,A,k)),xe(d,E,l+46+ie(T,A,k,fe)),xe(d,F,l+46+ie(T,A,k,fe,E)),xe(d,C,l+46+ie(T)+$e);let Ge=46+ie(T,C)+$e;if(l-b>i.availableSize&&(i.availableSize=0,await ut(o,d.slice(b,l)),b=l),l+=Ge,n.onprogress)try{await n.onprogress(_+1,r.size,new Sr(v))}catch{}}await ut(o,b?d.slice(b):d);let m=i.diskNumber,{availableSize:h}=i;h<22&&m++;let g=ce(t,n,"zip64");if(c>=4294967295||u>=4294967295||f>=65535||m>=65535){if(g===!1)throw new Error(Fr);g=!0}let y=new Uint8Array(g?98:22),w=Ue(y);l=0,g&&(ee(w,0,101075792),Pe(w,4,BigInt(44)),oe(w,12,45),oe(w,14,45),ee(w,16,m),ee(w,20,s),Pe(w,24,BigInt(f)),Pe(w,32,BigInt(f)),Pe(w,40,BigInt(u)),Pe(w,48,BigInt(c)),ee(w,56,117853008),Pe(w,64,BigInt(c)+BigInt(u)),ee(w,72,m+1),ce(t,n,"supportZip64SplitFile",!0)&&(m=65535,s=65535),f=65535,c=4294967295,u=4294967295,l+=56+20),ee(w,l,101010256),oe(w,l+4,m),oe(w,l+6,s),oe(w,l+8,f),oe(w,l+10,f),ee(w,l+12,u),ee(w,l+16,c);let S=ie(e);if(S)if(S<=65535)oe(w,l+20,S);else throw new Error(Ul);await ut(o,y),S&&await ut(o,e)}function Tp(t,e,n){return e||n?t.slice(e,n).arrayBuffer():t.arrayBuffer()}async function ut(t,e){let n=t.getWriter();await n.ready,t.size+=ie(e),await n.write(e),n.releaseLock()}function Li(t){if(t)return(BigInt(t.getTime())+BigInt(116444736e5))*BigInt(1e4)}function ce(t,e,n,r){let i=e[n]===me?t.options[n]:e[n];return i===me?r:i}function Sp(t){return t+5*(Math.floor(t/16383)+1)}function kr(t,e,n){t.setUint8(e,n)}function oe(t,e,n){t.setUint16(e,n,!0)}function ee(t,e,n){t.setUint32(e,n,!0)}function Pe(t,e,n){t.setBigUint64(e,n,!0)}function xe(t,e,n){t.set(e,n)}function Ue(t){return new DataView(t.buffer)}function ie(...t){let e=0;return t.forEach(n=>n&&(e+=n.length)),e}Cr({Deflate:Sf,Inflate:Hf});var jl={},kp=function(t,e,n,r,i){var a=new Worker(jl[e]||(jl[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return a.onmessage=function(o){var s=o.data,l=s.$e$;if(l){var u=new Error(l[0]);u.code=l[1],u.stack=l[2],i(u,null)}else i(null,s)},a.postMessage(n,r),a},se=Uint8Array,De=Uint16Array,rn=Uint32Array,an=new se([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),on=new se([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fn=new se([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zl=function(t,e){for(var n=new De(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var i=new rn(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},Yl=Zl(an,2),ba=Yl[0],Pr=Yl[1];ba[28]=258,Pr[258]=28;var Jl=Zl(on,0),Ql=Jl[0],ua=Jl[1],Ln=new De(32768);for(ae=0;ae<32768;++ae)wt=(ae&43690)>>>1|(ae&21845)<<1,wt=(wt&52428)>>>2|(wt&13107)<<2,wt=(wt&61680)>>>4|(wt&3855)<<4,Ln[ae]=((wt&65280)>>>8|(wt&255)<<8)>>>1;var wt,ae,Je=function(t,e,n){for(var r=t.length,i=0,a=new De(e);i<r;++i)t[i]&&++a[t[i]-1];var o=new De(e);for(i=0;i<e;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new De(1<<e);var l=15-e;for(i=0;i<r;++i)if(t[i])for(var u=i<<4|t[i],c=e-t[i],f=o[t[i]-1]++<<c,d=f|(1<<c)-1;f<=d;++f)s[Ln[f]>>>l]=u}else for(s=new De(r),i=0;i<r;++i)t[i]&&(s[i]=Ln[o[t[i]-1]++]>>>15-t[i]);return s},xt=new se(288);for(ae=0;ae<144;++ae)xt[ae]=8;var ae;for(ae=144;ae<256;++ae)xt[ae]=9;var ae;for(ae=256;ae<280;++ae)xt[ae]=7;var ae;for(ae=280;ae<288;++ae)xt[ae]=8;var ae,nn=new se(32);for(ae=0;ae<32;++ae)nn[ae]=5;var ae,ec=Je(xt,9,0),tc=Je(xt,9,1),nc=Je(nn,5,0),rc=Je(nn,5,1),Ir=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},Ye=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},Mr=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},In=function(t){return(t+7)/8|0},pt=function(t,e,n){(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length);var r=new(t.BYTES_PER_ELEMENT==2?De:t.BYTES_PER_ELEMENT==4?rn:se)(n-e);return r.set(t.subarray(e,n)),r};var ic=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],G=function(t,e,n){var r=new Error(e||ic[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,G),!n)throw r;return r},Nr=function(t,e,n){var r=t.length;if(!r||n&&n.f&&!n.l)return e||new se(0);var i=!e||n,a=!n||n.i;n||(n={}),e||(e=new se(r*3));var o=function(re){var ye=e.length;if(re>ye){var we=new se(Math.max(ye*2,re));we.set(e),e=we}},s=n.f||0,l=n.p||0,u=n.b||0,c=n.l,f=n.d,d=n.m,p=n.n,b=r*8;do{if(!c){s=Ye(t,l,1);var m=Ye(t,l+1,3);if(l+=3,m)if(m==1)c=tc,f=rc,d=9,p=5;else if(m==2){var h=Ye(t,l,31)+257,g=Ye(t,l+10,15)+4,y=h+Ye(t,l+5,31)+1;l+=14;for(var w=new se(y),S=new se(19),_=0;_<g;++_)S[Fn[_]]=Ye(t,l+_*3,7);l+=g*3;for(var v=Ir(S),x=(1<<v)-1,T=Je(S,v,1),_=0;_<y;){var A=T[Ye(t,l,x)];l+=A&15;var k=A>>>4;if(k<16)w[_++]=k;else{var E=0,F=0;for(k==16?(F=3+Ye(t,l,3),l+=2,E=w[_-1]):k==17?(F=3+Ye(t,l,7),l+=3):k==18&&(F=11+Ye(t,l,127),l+=7);F--;)w[_++]=E}}var C=w.subarray(0,h),I=w.subarray(h);d=Ir(C),p=Ir(I),c=Je(C,d,1),f=Je(I,p,1)}else G(1);else{var k=In(l)+4,R=t[k-4]|t[k-3]<<8,M=k+R;if(M>r){a&&G(0);break}i&&o(u+R),e.set(t.subarray(k,M),u),n.b=u+=R,n.p=l=M*8,n.f=s;continue}if(l>b){a&&G(0);break}}i&&o(u+131072);for(var P=(1<<d)-1,W=(1<<p)-1,Y=l;;Y=l){var E=c[Mr(t,l)&P],$=E>>>4;if(l+=E&15,l>b){a&&G(0);break}if(E||G(2),$<256)e[u++]=$;else if($==256){Y=l,c=null;break}else{var j=$-254;if($>264){var _=$-257,H=an[_];j=Ye(t,l,(1<<H)-1)+ba[_],l+=H}var q=f[Mr(t,l)&W],K=q>>>4;q||G(3),l+=q&15;var I=Ql[K];if(K>3){var H=on[K];I+=Mr(t,l)&(1<<H)-1,l+=H}if(l>b){a&&G(0);break}i&&o(u+131072);for(var Z=u+j;u<Z;u+=4)e[u]=e[u-I],e[u+1]=e[u+1-I],e[u+2]=e[u+2-I],e[u+3]=e[u+3-I];u=Z}}n.l=c,n.p=Y,n.b=u,n.f=s,c&&(s=1,n.m=d,n.d=f,n.n=p)}while(!s);return u==e.length?e:pt(e,0,u)},ht=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>>8},Jt=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},Or=function(t,e){for(var n=[],r=0;r<t.length;++r)t[r]&&n.push({s:r,f:t[r]});var i=n.length,a=n.slice();if(!i)return[vt,0];if(i==1){var o=new se(n[0].s+1);return o[n[0].s]=1,[o,1]}n.sort(function(_,v){return _.f-v.f}),n.push({s:-1,f:25001});var s=n[0],l=n[1],u=0,c=1,f=2;for(n[0]={s:-1,f:s.f+l.f,l:s,r:l};c!=i-1;)s=n[n[u].f<n[f].f?u++:f++],l=n[u!=c&&n[u].f<n[f].f?u++:f++],n[c++]={s:-1,f:s.f+l.f,l:s,r:l};for(var d=a[0].s,r=1;r<i;++r)a[r].s>d&&(d=a[r].s);var p=new De(d+1),b=Ur(n[c-1],p,0);if(b>e){var r=0,m=0,h=b-e,g=1<<h;for(a.sort(function(v,x){return p[x.s]-p[v.s]||v.f-x.f});r<i;++r){var y=a[r].s;if(p[y]>e)m+=g-(1<<b-p[y]),p[y]=e;else break}for(m>>>=h;m>0;){var w=a[r].s;p[w]<e?m-=1<<e-p[w]++-1:++r}for(;r>=0&&m;--r){var S=a[r].s;p[S]==e&&(--p[S],++m)}b=e}return[new se(p),b]},Ur=function(t,e,n){return t.s==-1?Math.max(Ur(t.l,e,n+1),Ur(t.r,e,n+1)):e[t.s]=n},da=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new De(++e),r=0,i=t[0],a=1,o=function(l){n[r++]=l},s=1;s<=e;++s)if(t[s]==i&&s!=e)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=t[s]}return[n.subarray(0,r),e]},Qt=function(t,e){for(var n=0,r=0;r<e.length;++r)n+=t[r]*e[r];return n},Br=function(t,e,n){var r=n.length,i=In(e+2);t[i]=r&255,t[i+1]=r>>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var a=0;a<r;++a)t[i+a+4]=n[a];return(i+4+r)*8},fa=function(t,e,n,r,i,a,o,s,l,u,c){ht(e,c++,n),++i[256];for(var f=Or(i,15),d=f[0],p=f[1],b=Or(a,15),m=b[0],h=b[1],g=da(d),y=g[0],w=g[1],S=da(m),_=S[0],v=S[1],x=new De(19),T=0;T<y.length;++T)x[y[T]&31]++;for(var T=0;T<_.length;++T)x[_[T]&31]++;for(var A=Or(x,7),k=A[0],E=A[1],F=19;F>4&&!k[Fn[F-1]];--F);var C=u+5<<3,I=Qt(i,xt)+Qt(a,nn)+o,R=Qt(i,d)+Qt(a,m)+o+14+3*F+Qt(x,k)+(2*x[16]+3*x[17]+7*x[18]);if(C<=I&&C<=R)return Br(e,c,t.subarray(l,l+u));var M,P,W,Y;if(ht(e,c,1+(R<I)),c+=2,R<I){M=Je(d,p,0),P=d,W=Je(m,h,0),Y=m;var $=Je(k,E,0);ht(e,c,w-257),ht(e,c+5,v-1),ht(e,c+10,F-4),c+=14;for(var T=0;T<F;++T)ht(e,c+3*T,k[Fn[T]]);c+=3*F;for(var j=[y,_],H=0;H<2;++H)for(var q=j[H],T=0;T<q.length;++T){var K=q[T]&31;ht(e,c,$[K]),c+=k[K],K>15&&(ht(e,c,q[T]>>>5&127),c+=q[T]>>>12)}}else M=ec,P=xt,W=nc,Y=nn;for(var T=0;T<s;++T)if(r[T]>255){var K=r[T]>>>18&31;Jt(e,c,M[K+257]),c+=P[K+257],K>7&&(ht(e,c,r[T]>>>23&31),c+=an[K]);var Z=r[T]&31;Jt(e,c,W[Z]),c+=Y[Z],Z>3&&(Jt(e,c,r[T]>>>5&8191),c+=on[Z])}else Jt(e,c,M[r[T]]),c+=P[r[T]];return Jt(e,c,M[256]),c+P[256]},ac=new rn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),vt=new se(0),oc=function(t,e,n,r,i,a){var o=t.length,s=new se(r+o+5*(1+Math.ceil(o/7e3))+i),l=s.subarray(r,s.length-i),u=0;if(!e||o<8)for(var c=0;c<=o;c+=65535){var f=c+65535;f>=o&&(l[u>>3]=a),u=Br(l,u+1,t.subarray(c,f))}else{for(var d=ac[e-1],p=d>>>13,b=d&8191,m=(1<<n)-1,h=new De(32768),g=new De(m+1),y=Math.ceil(n/3),w=2*y,S=function(ze){return(t[ze]^t[ze+1]<<y^t[ze+2]<<w)&m},_=new rn(25e3),v=new De(288),x=new De(32),T=0,A=0,c=0,k=0,E=0,F=0;c<o;++c){var C=S(c),I=c&32767,R=g[C];if(h[I]=R,g[C]=I,E<=c){var M=o-c;if((T>7e3||k>24576)&&M>423){u=fa(t,l,0,_,v,x,A,k,F,c-F,u),k=T=A=0,F=c;for(var P=0;P<286;++P)v[P]=0;for(var P=0;P<30;++P)x[P]=0}var W=2,Y=0,$=b,j=I-R&32767;if(M>2&&C==S(c-j))for(var H=Math.min(p,M)-1,q=Math.min(32767,c),K=Math.min(258,M);j<=q&&--$&&I!=R;){if(t[c+W]==t[c+W-j]){for(var Z=0;Z<K&&t[c+Z]==t[c+Z-j];++Z);if(Z>W){if(W=Z,Y=j,Z>H)break;for(var re=Math.min(j,Z-2),ye=0,P=0;P<re;++P){var we=c-j+P+32768&32767,Oe=h[we],fe=we-Oe+32768&32767;fe>ye&&(ye=fe,R=we)}}}I=R,R=h[I],j+=I-R+32768&32767}if(Y){_[k++]=268435456|Pr[W]<<18|ua[Y];var $e=Pr[W]&31,Re=ua[Y]&31;A+=an[$e]+on[Re],++v[257+$e],++x[Re],E=c+W,++T}else _[k++]=t[c],++v[t[c]]}}u=fa(t,l,a,_,v,x,A,k,F,c-F,u),!a&&u&7&&(u=Br(l,u+1,vt))}return pt(s,0,r+In(u)+i)},sc=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,r=9;--r;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),ya=function(){var t=-1;return{p:function(e){for(var n=t,r=0;r<e.length;++r)n=sc[n&255^e[r]]^n>>>8;t=n},d:function(){return~t}}},lc=function(){var t=1,e=0;return{p:function(n){for(var r=t,i=e,a=n.length|0,o=0;o!=a;){for(var s=Math.min(o+2655,a);o<s;++o)i+=r+=n[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}t=r,e=i},d:function(){return t%=65521,e%=65521,(t&255)<<24|t>>>8<<16|(e&255)<<8|e>>>8}}},Mn=function(t,e,n,r,i){return oc(t,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):12+e.mem,n,r,!i)},cc=function(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n},ql=function(t,e,n){for(var r=t(),i=t.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<r.length;++o){var s=r[o],l=a[o];if(typeof s=="function"){e+=";"+l+"=";var u=s.toString();if(s.prototype)if(u.indexOf("[native code]")!=-1){var c=u.indexOf(" ",8)+1;e+=u.slice(c,u.indexOf("(",c))}else{e+=u;for(var f in s.prototype)e+=";"+l+".prototype."+f+"="+s.prototype[f].toString()}else e+=u}else n[l]=s}return[e,n]},Lr=[],Ap=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},Ep=function(t,e,n,r){var i;if(!Lr[n]){for(var a="",o={},s=t.length-1,l=0;l<s;++l)i=ql(t[l],a,o),a=i[0],o=i[1];Lr[n]=ql(t[s],a,o)}var u=cc({},Lr[n][1]);return kp(Lr[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,u,Ap(u),r)},wa=function(){return[se,De,rn,an,on,Fn,ba,Ql,tc,rc,Ln,ic,Je,Ir,Ye,Mr,In,pt,G,Nr,zp,uc,Lp]},va=function(){return[se,De,rn,an,on,Fn,Pr,ua,ec,xt,nc,nn,Ln,ac,vt,Je,ht,Jt,Or,Ur,da,Qt,Br,fa,In,pt,oc,Mn,Op,uc]},Cp=function(){return[dc,hc,le,ya,sc]},Dp=function(){return[fc,Ip]},Rp=function(){return[pc,le,lc]},Fp=function(){return[mc]},uc=function(t){return postMessage(t,[t.buffer])},Lp=function(t){return t&&t.size&&new se(t.size)};var Qe=function(t){return t.ondata=function(e,n){return postMessage([e,n],[e.buffer])},function(e){return t.push(e.data[0],e.data[1])}},sn=function(t,e,n,r,i){var a,o=Ep(t,r,i,function(s,l){s?(o.terminate(),e.ondata.call(e,s)):(l[1]&&o.terminate(),e.ondata.call(e,s,l[0],l[1]))});o.postMessage(n),e.push=function(s,l){e.ondata||G(5),a&&e.ondata(G(4,0,1),null,!!l),o.postMessage([s,a=l],[s.buffer])},e.terminate=function(){o.terminate()}},en=function(t,e){return t[e]|t[e+1]<<8},tn=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},ca=function(t,e){return tn(t,e)+tn(t,e+4)*4294967296},le=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8},dc=function(t,e){var n=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:e.level==9?2:0,t[9]=3,e.mtime!=0&&le(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),n){t[3]=8;for(var r=0;r<=n.length;++r)t[r+10]=n.charCodeAt(r)}},fc=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&G(6,"invalid gzip data");var e=t[3],n=10;e&4&&(n+=t[10]|(t[11]<<8)+2);for(var r=(e>>3&1)+(e>>4&1);r>0;r-=!t[n++]);return n+(e&2)},Ip=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},hc=function(t){return 10+(t.filename&&t.filename.length+1||0)},pc=function(t,e){var n=e.level,r=n==0?0:n<6?1:n==9?3:2;t[0]=120,t[1]=r<<6|(r?32-2*r:1)},mc=function(t){((t[0]&15)!=8||t[0]>>>4>7||(t[0]<<8|t[1])%31)&&G(6,"invalid zlib data"),t[1]&32&&G(6,"invalid zlib data: preset dictionaries not supported")};function xa(t,e){return!e&&typeof t=="function"&&(e=t,t={}),this.ondata=e,t}var _t=function(){function t(e,n){!n&&typeof e=="function"&&(n=e,e={}),this.ondata=n,this.o=e||{}}return t.prototype.p=function(e,n){this.ondata(Mn(e,this.o,0,0,!n),n)},t.prototype.push=function(e,n){this.ondata||G(5),this.d&&G(4),this.d=n,this.p(e,n||!1)},t}(),Mp=function(){function t(e,n){sn([va,function(){return[Qe,_t]}],this,xa.call(this,e,n),function(r){var i=new _t(r.data);onmessage=Qe(i)},6)}return t}();function Op(t,e){return Mn(t,e||{},0,0)}var He=function(){function t(e){this.s={},this.p=new se(0),this.ondata=e}return t.prototype.e=function(e){this.ondata||G(5),this.d&&G(4);var n=this.p.length,r=new se(n+e.length);r.set(this.p),r.set(e,n),this.p=r},t.prototype.c=function(e){this.d=this.s.i=e||!1;var n=this.s.b,r=Nr(this.p,this.o,this.s);this.ondata(pt(r,n,this.s.b),this.d),this.o=pt(r,this.s.b-32768),this.s.b=this.o.length,this.p=pt(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(e,n){this.e(e),this.c(n)},t}(),gc=function(){function t(e){this.ondata=e,sn([wa,function(){return[Qe,He]}],this,0,function(){var n=new He;onmessage=Qe(n)},7)}return t}();function zp(t,e){return Nr(t,e)}var Vl=function(){function t(e,n){this.c=ya(),this.l=0,this.v=1,_t.call(this,e,n)}return t.prototype.push=function(e,n){_t.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e),this.l+=e.length;var r=Mn(e,this.o,this.v&&hc(this.o),n&&8,!n);this.v&&(dc(r,this.o),this.v=0),n&&(le(r,r.length-8,this.c.d()),le(r,r.length-4,this.l)),this.ondata(r,n)},t}(),M0=function(){function t(e,n){sn([va,Cp,function(){return[Qe,_t,Vl]}],this,xa.call(this,e,n),function(r){var i=new Vl(r.data);onmessage=Qe(i)},8)}return t}();var ha=function(){function t(e){this.v=1,He.call(this,e)}return t.prototype.push=function(e,n){if(He.prototype.e.call(this,e),this.v){var r=this.p.length>3?fc(this.p):4;if(r>=this.p.length&&!n)return;this.p=this.p.subarray(r),this.v=0}n&&(this.p.length<8&&G(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),He.prototype.c.call(this,n)},t}(),Pp=function(){function t(e){this.ondata=e,sn([wa,Dp,function(){return[Qe,He,ha]}],this,0,function(){var n=new ha;onmessage=Qe(n)},9)}return t}();var Gl=function(){function t(e,n){this.c=lc(),this.v=1,_t.call(this,e,n)}return t.prototype.push=function(e,n){_t.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e);var r=Mn(e,this.o,this.v&&2,n&&4,!n);this.v&&(pc(r,this.o),this.v=0),n&&le(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),O0=function(){function t(e,n){sn([va,Rp,function(){return[Qe,_t,Gl]}],this,xa.call(this,e,n),function(r){var i=new Gl(r.data);onmessage=Qe(i)},10)}return t}();var pa=function(){function t(e){this.v=1,He.call(this,e)}return t.prototype.push=function(e,n){if(He.prototype.e.call(this,e),this.v){if(this.p.length<2&&!n)return;this.p=this.p.subarray(2),this.v=0}n&&(this.p.length<4&&G(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),He.prototype.c.call(this,n)},t}(),Up=function(){function t(e){this.ondata=e,sn([wa,Fp,function(){return[Qe,He,pa]}],this,0,function(){var n=new pa;onmessage=Qe(n)},11)}return t}();function bc(t,e){return Nr((mc(t),t.subarray(2,-4)),e)}var Bp=function(){function t(e){this.G=ha,this.I=He,this.Z=pa,this.ondata=e}return t.prototype.push=function(e,n){if(this.ondata||G(5),this.s)this.s.push(e,n);else{if(this.p&&this.p.length){var r=new se(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,a=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(a):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(a):new this.Z(a),this.s.push(this.p,n),this.p=null}}},t}(),z0=function(){function t(e){this.G=Pp,this.I=gc,this.Z=Up,this.ondata=e}return t.prototype.push=function(e,n){Bp.prototype.push.call(this,e,n)},t}();var Kl=typeof TextEncoder<"u"&&new TextEncoder,ma=typeof TextDecoder<"u"&&new TextDecoder,yc=0;try{ma.decode(vt,{stream:!0}),yc=1}catch{}var wc=function(t){for(var e="",n=0;;){var r=t[n++],i=(r>127)+(r>223)+(r>239);if(n+i>t.length)return[e,pt(t,n-1)];i?i==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}},P0=function(){function t(e){this.ondata=e,yc?this.t=new TextDecoder:this.p=vt}return t.prototype.push=function(e,n){if(this.ondata||G(5),n=!!n,this.t){this.ondata(this.t.decode(e,{stream:!0}),n),n&&(this.t.decode().length&&G(8),this.t=null);return}this.p||G(4);var r=new se(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length);var i=wc(r),a=i[0],o=i[1];n?(o.length&&G(8),this.p=null):this.p=o,this.ondata(a,n)},t}(),U0=function(){function t(e){this.ondata=e}return t.prototype.push=function(e,n){this.ondata||G(5),this.d&&G(4),this.ondata(ga(e),this.d=n||!1)},t}();function ga(t,e){if(e){for(var n=new se(t.length),r=0;r<t.length;++r)n[r]=t.charCodeAt(r);return n}if(Kl)return Kl.encode(t);for(var i=t.length,a=new se(t.length+(t.length>>1)),o=0,s=function(f){a[o++]=f},r=0;r<i;++r){if(o+5>a.length){var l=new se(o+8+(i-r<<1));l.set(a),a=l}var u=t.charCodeAt(r);u<128||e?s(u):u<2048?(s(192|u>>6),s(128|u&63)):u>55295&&u<57344?(u=65536+(u&1023<<10)|t.charCodeAt(++r)&1023,s(240|u>>18),s(128|u>>12&63),s(128|u>>6&63),s(128|u&63)):(s(224|u>>12),s(128|u>>6&63),s(128|u&63))}return pt(a,0,o)}function $p(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(ma)return ma.decode(t);var i=wc(t),a=i[0],o=i[1];return o.length&&G(8),a}}var vc=function(t){return t==1?3:t<6?2:t==9?1:0};var Np=function(t,e){for(;en(t,e)!=1;e+=4+en(t,e+2));return[ca(t,e+12),ca(t,e+4),ca(t,e+20)]},zr=function(t){var e=0;if(t)for(var n in t){var r=t[n].length;r>65535&&G(9),e+=r+4}return e},Xl=function(t,e,n,r,i,a,o,s){var l=r.length,u=n.extra,c=s&&s.length,f=zr(u);le(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(a<0&&8),t[e++]=i&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var d=new Date(n.mtime==null?Date.now():n.mtime),p=d.getFullYear()-1980;if((p<0||p>119)&&G(10),le(t,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,a!=-1&&(le(t,e,n.crc),le(t,e+4,a<0?-a-2:a),le(t,e+8,n.size)),le(t,e+12,l),le(t,e+14,f),e+=16,o!=null&&(le(t,e,c),le(t,e+6,n.attrs),le(t,e+10,o),e+=14),t.set(r,e),e+=l,f)for(var b in u){var m=u[b],h=m.length;le(t,e,+b),le(t,e+2,h),t.set(m,e+4),e+=4+h}return c&&(t.set(s,e),e+=c),e},Wp=function(t,e,n,r,i){le(t,e,101010256),le(t,e+8,n),le(t,e+10,n),le(t,e+12,r),le(t,e+16,i)},$r=function(){function t(e){this.filename=e,this.c=ya(),this.size=0,this.compression=0}return t.prototype.process=function(e,n){this.ondata(null,e,n)},t.prototype.push=function(e,n){this.ondata||G(5),this.c.p(e),this.size+=e.length,n&&(this.crc=this.c.d()),this.process(e,n||!1)},t}(),B0=function(){function t(e,n){var r=this;n||(n={}),$r.call(this,e),this.d=new _t(n,function(i,a){r.ondata(null,i,a)}),this.compression=8,this.flag=vc(n.level)}return t.prototype.process=function(e,n){try{this.d.push(e,n)}catch(r){this.ondata(r,null,n)}},t.prototype.push=function(e,n){$r.prototype.push.call(this,e,n)},t}(),$0=function(){function t(e,n){var r=this;n||(n={}),$r.call(this,e),this.d=new Mp(n,function(i,a,o){r.ondata(i,a,o)}),this.compression=8,this.flag=vc(n.level),this.terminate=this.d.terminate}return t.prototype.process=function(e,n){this.d.push(e,n)},t.prototype.push=function(e,n){$r.prototype.push.call(this,e,n)},t}(),N0=function(){function t(e){this.ondata=e,this.u=[],this.d=1}return t.prototype.add=function(e){var n=this;if(this.ondata||G(5),this.d&2)this.ondata(G(4+(this.d&1)*8,0,1),null,!1);else{var r=ga(e.filename),i=r.length,a=e.comment,o=a&&ga(a),s=i!=e.filename.length||o&&a.length!=o.length,l=i+zr(e.extra)+30;i>65535&&this.ondata(G(11,0,1),null,!1);var u=new se(l);Xl(u,0,e,r,s,-1);var c=[u],f=function(){for(var h=0,g=c;h<g.length;h++){var y=g[h];n.ondata(null,y,!1)}c=[]},d=this.d;this.d=0;var p=this.u.length,b=cc(e,{f:r,u:s,o,t:function(){e.terminate&&e.terminate()},r:function(){if(f(),d){var h=n.u[p+1];h?h.r():n.d=1}d=1}}),m=0;e.ondata=function(h,g,y){if(h)n.ondata(h,g,y),n.terminate();else if(m+=g.length,c.push(g),y){var w=new se(16);le(w,0,134695760),le(w,4,e.crc),le(w,8,m),le(w,12,e.size),c.push(w),b.c=m,b.b=l+m+16,b.crc=e.crc,b.size=e.size,d&&b.r(),d=1}else d&&f()},this.u.push(b)}},t.prototype.end=function(){var e=this;if(this.d&2){this.ondata(G(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var e=0,n=0,r=0,i=0,a=this.u;i<a.length;i++){var o=a[i];r+=46+o.f.length+zr(o.extra)+(o.o?o.o.length:0)}for(var s=new se(r+22),l=0,u=this.u;l<u.length;l++){var o=u[l];Xl(s,e,o,o.f,o.u,-o.c-2,n,o.o),e+=46+o.f.length+zr(o.extra)+(o.o?o.o.length:0),n+=o.b}Wp(s,e,this.u.length,r,n),this.ondata(null,s,!0),this.d=2},t.prototype.terminate=function(){for(var e=0,n=this.u;e<n.length;e++){var r=n[e];r.t()}this.d=2},t}();var Hp=function(){function t(){}return t.prototype.push=function(e,n){this.ondata(null,e,n)},t.compression=0,t}(),W0=function(){function t(){var e=this;this.i=new He(function(n,r){e.ondata(null,n,r)})}return t.prototype.push=function(e,n){try{this.i.push(e,n)}catch(r){this.ondata(r,null,n)}},t.compression=8,t}(),H0=function(){function t(e,n){var r=this;n<32e4?this.i=new He(function(i,a){r.ondata(null,i,a)}):(this.i=new gc(function(i,a,o){r.ondata(i,a,o)}),this.terminate=this.i.terminate)}return t.prototype.push=function(e,n){this.i.terminate&&(e=pt(e,0)),this.i.push(e,n)},t.compression=8,t}(),j0=function(){function t(e){this.onfile=e,this.k=[],this.o={0:Hp},this.p=vt}return t.prototype.push=function(e,n){var r=this;if(this.onfile||G(5),this.p||G(4),this.c>0){var i=Math.min(this.c,e.length),a=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(a,!this.c):this.k[0].push(a),e=e.subarray(i),e.length)return this.push(e,n)}else{var o=0,s=0,l=void 0,u=void 0;this.p.length?e.length?(u=new se(this.p.length+e.length),u.set(this.p),u.set(e,this.p.length)):u=this.p:u=e;for(var c=u.length,f=this.c,d=f&&this.d,p=function(){var g,y=tn(u,s);if(y==67324752){o=1,l=s,b.d=null,b.c=0;var w=en(u,s+6),S=en(u,s+8),_=w&2048,v=w&8,x=en(u,s+26),T=en(u,s+28);if(c>s+30+x+T){var A=[];b.k.unshift(A),o=2;var k=tn(u,s+18),E=tn(u,s+22),F=$p(u.subarray(s+30,s+=30+x),!_);k==4294967295?(g=v?[-2]:Np(u,s),k=g[0],E=g[1]):v&&(k=-1),s+=T,b.c=k;var C,I={name:F,compression:S,start:function(){if(I.ondata||G(5),!k)I.ondata(null,vt,!0);else{var R=r.o[S];R||I.ondata(G(14,"unknown compression type "+S,1),null,!1),C=k<0?new R(F):new R(F,k,E),C.ondata=function(Y,$,j){I.ondata(Y,$,j)};for(var M=0,P=A;M<P.length;M++){var W=P[M];C.push(W,!1)}r.k[0]==A&&r.c?r.d=C:C.push(vt,!0)}},terminate:function(){C&&C.terminate&&C.terminate()}};k>=0&&(I.size=k,I.originalSize=E),b.onfile(I)}return"break"}else if(f){if(y==134695760)return l=s+=12+(f==-2&&8),o=3,b.c=0,"break";if(y==33639248)return l=s-=4,o=3,b.c=0,"break"}},b=this;s<c-4;++s){var m=p();if(m==="break")break}if(this.p=vt,f<0){var h=o?u.subarray(0,l-12-(f==-2&&8)-(tn(u,l-16)==134695760&&4)):u.subarray(0,s);d?d.push(h,!!o):this.k[+(o==2)].push(h)}if(o&2)return this.push(u.subarray(s),n);this.p=u.subarray(s)}n&&(this.c&&G(13),this.p=null)},t.prototype.register=function(e){this.o[e.compression]=e},t}();var _a;function La(t){return[...t.v,(t.i?"!":"")+t.n].join(":")}function Dc(t,e=","){return t.map(La).join(e)}var Rc=typeof CSS<"u"&&CSS.escape||(t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Hr(t){for(var e=9,n=t.length;n--;)e=Math.imul(e^t.charCodeAt(n),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function jr(t,e="@media "){return e+je(t).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function je(t=[]){return Array.isArray(t)?t:t==null?[]:[t]}function qp(){}var Ee={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Fc(t){return t.match(/[-=:;]/g)?.length||0}function Ca(t){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Fc(t),15)<<18}var Vp=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Ia({n:t,i:e,v:n=[]},r,i,a){t&&(t=La({n:t,i:e,v:n})),a=[...je(a)];for(let s of n){let l=r.theme("screens",s);for(let u of je(l&&jr(l)||r.v(s))){var o;a.push(u),i|=l?67108864|Ca(u):s=="dark"?1073741824:u[0]=="@"?Ca(u):(o=u,1<<~(/:([a-z-]+)/.test(o)&&~Vp.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:t,p:i,r:a,i:e}}var Ma=new Map;function xc(t){if(t.d){let e=[],n=Ta(t.r.reduce((r,i)=>i[0]=="@"?(e.push(i),r):i?Ta(r,a=>Ta(i,o=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):Sa(a,o)}return Sa(o,a)})):r,"&"),r=>Sa(r,t.n?"."+Rc(t.n):""));return n&&e.push(n.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((r,i)=>i+"{"+r+"}",t.d)}}function Ta(t,e){return t.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,i)=>e(r)+i)}function Sa(t,e){return t.replace(/&/g,e)}var _c=new Intl.Collator("en",{numeric:!0});function Gp(t,e){for(var n=0,r=t.length;n<r;){let i=r+n>>1;0>=Lc(t[i],e)?n=i+1:r=i}return r}function Lc(t,e){let n=t.p&Ee.o;return n==(e.p&Ee.o)&&(n==Ee.b||n==Ee.o)?0:t.p-e.p||t.o-e.o||_c.compare(Tc(t.n),Tc(e.n))||_c.compare(Sc(t.n),Sc(e.n))}function Tc(t){return(t||"").split(/:/).pop().split("/").pop()||"\0"}function Sc(t){return(t||"").replace(/\W/g,e=>String.fromCharCode(127+e.charCodeAt(0)))+"\0"}function ka(t,e){return Math.round(parseInt(t,16)*e)}function Mt(t,e={}){if(typeof t=="function")return t(e);let{opacityValue:n="1",opacityVariable:r}=e,i=r?`var(${r})`:n;if(t.includes("<alpha-value>"))return t.replace("<alpha-value>",i);if(t[0]=="#"&&(t.length==4||t.length==7)){let a=(t.length-1)/3,o=[17,1,.062272][a-1];return`rgba(${[ka(t.substr(1,a),o),ka(t.substr(1+a,a),o),ka(t.substr(1+2*a,a),o),i]})`}return i=="1"?t:i=="0"?"#0000":t.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function Ic(t,e,n,r,i=[]){return function a(o,{n:s,p:l,r:u=[],i:c},f){let d=[],p="",b=0,m=0;for(let y in o||{}){var h,g;let w=o[y];if(y[0]=="@"){if(!w)continue;if(y[1]=="a"){d.push(...Oc(s,l,za(""+w),f,l,u,c,!0));continue}if(y[1]=="l"){for(let S of je(w))d.push(...a(S,{n:s,p:(h=Ee[y[7]],l&~Ee.o|h),r:y[7]=="d"?[]:u,i:c},f));continue}if(y[1]=="i"){d.push(...je(w).map(S=>({p:-1,o:0,r:[],d:y+" "+S})));continue}if(y[1]=="k"){d.push({p:Ee.d,o:0,r:[y],d:a(w,{p:Ee.d},f).map(xc).join("")});continue}if(y[1]=="f"){d.push(...je(w).map(S=>({p:Ee.d,o:0,r:[y],d:a(S,{p:Ee.d},f).map(xc).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))y=="label"&&w?s=w+Hr(JSON.stringify([l,c,o])):(w||w===0)&&(y=y.replace(/[A-Z]/g,S=>"-"+S.toLowerCase()),m+=1,b=Math.max(b,(g=y)[0]=="-"?0:Fc(g)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(g)?+!!RegExp.$1||-!!RegExp.$2:0)+1),p+=(p?";":"")+je(w).map(S=>f.s(y,Mc(""+S,f.theme)+(c?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let S=l;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(_,v)=>{let x=f.theme("screens",v);return x?(S|=67108864,jr(x,"")):_}),S|=Ca(y)),d.push(...a(w,{n:s,p:S,r:[...u,y],i:c},f))}else d.push(...a(w,{p:l,r:[...u,y]},f))}return d.unshift({n:s,p:l,o:Math.max(0,15-m)+1.5*Math.min(b||15,15),r:u,d:p}),d.sort(Lc)}(t,Ia(e,n,r,i),n)}function Mc(t,e){return t.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,i,a,o="")=>{let s=e(i,o);return typeof s=="function"&&/color|fill|stroke/i.test(i)?Mt(s):""+je(s).filter(l=>Object(l)!==l)})}function Oa(t,e){let n,r=[];for(let i of t)i.d&&i.n?n?.p==i.p&&""+n.r==""+i.r?(n.c=[n.c,i.c].filter(Boolean).join(" "),n.d=n.d+";"+i.d):r.push(n={...i,n:i.n&&e}):r.push({...i,n:i.n&&e});return r}function Da(t,e,n=Ee.u,r,i){let a=[];for(let o of t)for(let s of function(l,u,c,f,d){l={...l,i:l.i||d};let p=function(b,m){let h=Ma.get(b.n);return h?h(b,m):m.r(b.n,b.v[0]=="dark")}(l,u);return p?typeof p=="string"?({r:f,p:c}=Ia(l,u,c,f),Oa(Da(za(p),u,c,f,l.i),l.n)):Array.isArray(p)?p.map(b=>{var m,h;return{o:0,...b,r:[...je(f),...je(b.r)],p:(m=c,h=b.p??c,m&~Ee.o|h)}}):Ic(p,l,u,c,f):[{c:La(l),p:0,o:0,r:[]}]}(o,e,n,r,i))a.splice(Gp(a,s),0,s);return a}function Oc(t,e,n,r,i,a,o,s){return Oa((s?n.flatMap(l=>Da([l],r,i,a,o)):Da(n,r,i,a,o)).map(l=>l.p&Ee.o&&(l.n||e==Ee.b)?{...l,p:l.p&~Ee.o|e,o:0}:l),t)}function Kp(t,e,n,r){var i;return i=(a,o)=>{let{n:s,p:l,r:u,i:c}=Ia(a,o,e);return n&&Oc(s,e,n,o,l,u,c,r)},Ma.set(t,i),t}function Aa(t,e,n){if(t[t.length-1]!="("){let r=[],i=!1,a=!1,o="";for(let s of t)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),i=!i),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(o+=(o&&"-")+s)}o&&(a&&(o="-"+o),e[0].push({n:o,v:r.filter(Xp),i}))}}function Xp(t,e,n){return n.indexOf(t)==e}var kc=new Map;function za(t){let e=kc.get(t);if(!e){let n=[],r=[[]],i=0,a=0,o=null,s=0,l=(u,c=0)=>{i!=s&&(n.push(t.slice(i,s+c)),u&&Aa(n,r)),i=s+1};for(;s<t.length;s++){let u=t[s];if(a)t[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(o)t[s-1]!="\\"&&o.test(t.slice(s))&&(o=null,i=s+RegExp.lastMatch.length);else if(u=="/"&&t[s-1]!="\\"&&(t[s+1]=="*"||t[s+1]=="/"))o=t[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")l(),n.push(u);else if(u==":")t[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(u)){l(!0);let c=n.lastIndexOf("(");if(u==")"){let f=n[c-1];if(/[~@]$/.test(f)){let d=r.shift();n.length=c,Aa([...n,"#"],r);let{v:p}=r[0].pop();for(let b of d)b.v.splice(+(b.v[0]=="dark")-+(p[0]=="dark"),p.length);Aa([...n,Kp(f.length>1?f.slice(0,-1)+Hr(JSON.stringify([f,d])):f+"("+Dc(d)+")",Ee.a,d,/@$/.test(f))],r)}c=n.lastIndexOf("(",c-1)}n.length=c+1}else/[~@]/.test(u)&&t[s+1]=="("&&r.unshift([])}l(!0),kc.set(t,e=r[0])}return e}function zc(t,e,n){return e.reduce((r,i,a)=>r+n(i)+t[a+1],t[0])}function Pc(t,e){return Array.isArray(t)&&Array.isArray(t.raw)?zc(t,e,n=>Ea(n).trim()):e.filter(Boolean).reduce((n,r)=>n+Ea(r),t?Ea(t):"")}function Ea(t){let e,n="";if(t&&typeof t=="object")if(Array.isArray(t))(e=Pc(t[0],t.slice(1)))&&(n+=" "+e);else for(let r in t)t[r]&&(n+=" "+r);else t!=null&&typeof t!="boolean"&&(n+=" "+t);return n}var X0=Uc("@"),Z0=Uc("~");function Uc(t){return new Proxy(function(n,...r){return e("",n,r)},{get(n,r){return r in n?n[r]:function(i,...a){return e(r,i,a)}}});function e(n,r,i){return Dc(za(n+t+"("+Pc(r,i)+")"))}}function Ra(t,e){return Array.isArray(t)?Ac(zc(t,e,n=>n!=null&&typeof n!="boolean"?n:"")):typeof t=="string"?Ac(t):[t]}var Zp=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Ac(t){let e;t=t.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],i=[];for(;e=Zp.exec(t);)e[4]&&(n.shift(),i.shift()),e[3]?(i.unshift(e[3]),n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))):e[4]||(n[0][e[1]]&&(n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))),n[0][e[1]]=e[2]);return r}function Bc(t,...e){var n;let r=Ra(t,e),i=(r.find(a=>a.label)?.label||"css")+Hr(JSON.stringify(r));return n=(a,o)=>Oa(r.flatMap(s=>Ic(s,a,o,Ee.o)),i),Ma.set(i,n),i}var Y0=new Proxy(function(t,e){return Ec("animation",t,e)},{get(t,e){return e in t?t[e]:function(n,r){return Ec(e,n,r)}}});function Ec(t,e,n){return{toString(){return Bc({label:t,"@layer components":{...typeof e=="object"?e:{animation:e},animationName:""+n}})}}}function U(t,e,n){return[t,Yp(e,n)]}function Yp(t,e){return typeof t=="function"?t:typeof t=="string"&&/^[\w-]+$/.test(t)?(n,r)=>({[t]:e?e(n,r):Fa(n,1)}):n=>t||{[n[1]]:Fa(n,2)}}function Fa(t,e,n=t.slice(e).find(Boolean)||t.$$||t.input){return t.input[0]=="-"?`calc(${n} * -1)`:n}function B(t,e,n,r){return[t,Jp(e,n,r)]}function Jp(t,e,n){let r=typeof e=="string"?(i,a)=>({[e]:n?n(i,a):i._}):e||(({1:i,_:a},o,s)=>({[i||s]:a}));return(i,a)=>{let o=$c(t||i[1]),s=a.theme(o,i.$$)??ln(i.$$,o,a);if(s!=null)return i._=Fa(i,0,s),r(i,a,o)}}function ge(t,e={},n){return[t,Qp(e,n)]}function Qp(t={},e){return(n,r)=>{let{section:i=$c(n[0]).replace("-","")+"Color"}=t,[a,o]=em(n.$$);if(!a)return;let s=r.theme(i,a)||ln(a,i,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=i.replace("Color","Opacity"),property:c=i,selector:f}=t,d=r.theme(u,o||"DEFAULT")||o&&ln(o,u,r),p=e||(({_:m})=>{let h=On(c,m);return f?{[f]:h}:h});n._={value:Mt(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:m=>Mt(s,m),opacityVariable:l||void 0,opacityValue:d||void 0};let b=p(n,r);if(!n.dark){let m=r.d(i,a,s);m&&m!==s&&(n._={value:Mt(m,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:h=>Mt(m,h),opacityVariable:l||void 0,opacityValue:d||void 0},b={"&":b,[r.v("dark")]:p(n,r)})}return b}}function em(t){return(t.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function On(t,e){let n={};return typeof e=="string"?n[t]=e:(e.opacityVariable&&e.value.includes(e.opacityVariable)&&(n[e.opacityVariable]=e.opacityValue||"1"),n[t]=e.value),n}function ln(t,e,n){if(t[0]=="["&&t.slice(-1)=="]"){if(t=Wr(Mc(t.slice(1,-1),n.theme)),!e)return t;if(!(/color|fill|stroke/i.test(e)&&!(/^color:/.test(t)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(t))||/image/i.test(e)&&!(/^image:/.test(t)||/^[a-z-]+\(/.test(t))||/weight/i.test(e)&&!(/^(number|any):/.test(t)||/^\d+$/.test(t))||/position/i.test(e)&&/^(length|size):/.test(t)))return t.replace(/^[a-z-]+:/,"")}}function $c(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function Wr(t){return t.includes("url(")?t.replace(/(.*?)(url\(.*?\))(.*?)/g,(e,n="",r,i="")=>Wr(n)+r+Wr(i)):t.replace(/(^|[^\\])_+/g,(e,n)=>n+" ".repeat(e.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var J0=Symbol();var Nc=new Proxy(qp,{apply(t,e,n){return _a(n[0])},get(t,e){let n=_a[e];return typeof n=="function"?function(){return n.apply(_a,arguments)}:n}});var Q0=function t(e){return new Proxy(function(n,...r){return Cc(e,"",n,r)},{get(n,r){return r==="bind"?t:r in n?n[r]:function(i,...a){return Cc(e,r,i,a)}}})}();function Cc(t,e,n,r){return{toString(){let i=Ra(n,r),a=Rc(e+Hr(JSON.stringify([e,i])));return(typeof t=="function"?t:Nc)(Bc({[`@keyframes ${a}`]:Ra(n,r)})),a}}}var Wc={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...qe(4,"rem",4,.5,.5),...qe(12,"rem",4,5),14:"3.5rem",...qe(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:ne("blur"),backdropBrightness:ne("brightness"),backdropContrast:ne("contrast"),backdropGrayscale:ne("grayscale"),backdropHueRotate:ne("hueRotate"),backdropInvert:ne("invert"),backdropOpacity:ne("opacity"),backdropSaturate:ne("saturate"),backdropSepia:ne("sepia"),backgroundColor:ne("colors"),backgroundImage:{none:"none"},backgroundOpacity:ne("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...qe(200,"",100,0,50),...qe(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:t})=>({DEFAULT:t("colors.gray.200","currentColor"),...t("colors")}),borderOpacity:ne("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:ne("spacing"),borderWidth:{DEFAULT:"1px",...et(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:ne("colors"),caretColor:ne("colors"),accentColor:({theme:t})=>({auto:"auto",...t("colors")}),contrast:{...qe(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:ne("borderColor"),divideOpacity:ne("borderOpacity"),divideWidth:ne("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:t})=>({...t("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:t})=>({...t("spacing"),...zn(2,6),...zn(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:ne("spacing"),gradientColorStops:ne("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:t})=>({...t("spacing"),...zn(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:t})=>({...t("spacing"),...zn(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...qe(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:t})=>({auto:"auto",...t("spacing")}),maxHeight:({theme:t})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...t("spacing")}),maxWidth:({theme:t,breakpoints:e})=>({...e(t("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...qe(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:ne("spacing"),placeholderColor:ne("colors"),placeholderOpacity:ne("opacity"),outlineColor:ne("colors"),outlineOffset:et(8,"px"),outlineWidth:et(8,"px"),ringColor:({theme:t})=>({...t("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:ne("colors"),ringOffsetWidth:et(8,"px"),ringOpacity:({theme:t})=>({...t("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...et(8,"px")},rotate:{...et(2,"deg"),...et(12,"deg",3),...et(180,"deg",45)},saturate:qe(200,"",100,0,50),scale:{...qe(150,"",100,0,50),...qe(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:ne("spacing"),scrollPadding:ne("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...et(2,"deg"),...et(12,"deg",3)},space:ne("spacing"),stroke:({theme:t})=>({...t("colors"),none:"none"}),strokeWidth:qe(2),textColor:ne("colors"),textDecorationColor:ne("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...et(8,"px")},textUnderlineOffset:{auto:"auto",...et(8,"px")},textIndent:ne("spacing"),textOpacity:ne("opacity"),transitionDuration:({theme:t})=>({...t("durations"),DEFAULT:"150ms"}),transitionDelay:ne("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:t})=>({...t("spacing"),...zn(2,4),full:"100%"}),width:({theme:t})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...t("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...qe(50,"",1,0,10),auto:"auto"}};function zn(t,e){let n={};do for(var r=1;r<t;r++)n[`${r}/${t}`]=Number((r/t*100).toFixed(6))+"%";while(++t<=e);return n}function et(t,e,n=0){let r={};for(;n<=t;n=2*n||1)r[n]=n+e;return r}function qe(t,e="",n=1,r=0,i=1,a={}){for(;r<=t;r+=i)a[r]=r/n+e;return a}function ne(t){return({theme:e})=>e(t)}var b1={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Wc.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Wc.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},w1=[U("\\[([-\\w]+):(.+)]",({1:t,2:e},n)=>({"@layer overrides":{"&":{[t]:ln(`[${e}]`,"",n)}}})),U("(group|peer)([~/][^-[]+)?",({input:t},{h:e})=>[{c:e(t)}]),B("aspect-","aspectRatio"),U("container",(t,{theme:e})=>{let{screens:n=e("screens"),center:r,padding:i}=e("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...o("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[jr(l)]={"&":{maxWidth:l,...o(s)}})}return a;function o(s){let l=i&&(typeof i=="string"?i:i[s]||i.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),B("content-","content",({_:t})=>({"--tw-content":t,content:"var(--tw-content)"})),U("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),U("box-(border|content)","boxSizing",({1:t})=>t+"-box"),U("hidden",{display:"none"}),U("table-(auto|fixed)","tableLayout"),U(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",U("isolate","isolation"),U("object-(contain|cover|fill|none|scale-down)","objectFit"),B("object-","objectPosition"),U("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",qr),U("overscroll(-[xy])?-(auto|contain|none)",({1:t="",2:e})=>({["overscroll-behavior"+t]:e})),U("(static|fixed|absolute|relative|sticky)","position"),B("-?inset(-[xy])?(?:$|-)","inset",({1:t,_:e})=>({top:t!="-x"&&e,right:t!="-y"&&e,bottom:t!="-x"&&e,left:t!="-y"&&e})),B("-?(top|bottom|left|right)(?:$|-)","inset"),U("(visible|collapse)","visibility"),U("invisible",{visibility:"hidden"}),B("-?z-","zIndex"),U("flex-((row|col)(-reverse)?)","flexDirection",Hc),U("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),B("(flex-(?:grow|shrink))(?:$|-)"),B("(flex)-"),B("grow(?:$|-)","flexGrow"),B("shrink(?:$|-)","flexShrink"),B("basis-","flexBasis"),B("-?(order)-"),"-?(order)-(\\d+)",B("grid-cols-","gridTemplateColumns"),U("grid-cols-(\\d+)","gridTemplateColumns",Gc),B("col-","gridColumn"),U("col-(span)-(\\d+)","gridColumn",Vc),B("col-start-","gridColumnStart"),U("col-start-(auto|\\d+)","gridColumnStart"),B("col-end-","gridColumnEnd"),U("col-end-(auto|\\d+)","gridColumnEnd"),B("grid-rows-","gridTemplateRows"),U("grid-rows-(\\d+)","gridTemplateRows",Gc),B("row-","gridRow"),U("row-(span)-(\\d+)","gridRow",Vc),B("row-start-","gridRowStart"),U("row-start-(auto|\\d+)","gridRowStart"),B("row-end-","gridRowEnd"),U("row-end-(auto|\\d+)","gridRowEnd"),U("grid-flow-((row|col)(-dense)?)","gridAutoFlow",t=>qr(Hc(t))),U("grid-flow-(dense)","gridAutoFlow"),B("auto-cols-","gridAutoColumns"),B("auto-rows-","gridAutoRows"),B("gap-x(?:$|-)","gap","columnGap"),B("gap-y(?:$|-)","gap","rowGap"),B("gap(?:$|-)","gap"),"(justify-(?:items|self))-",U("justify-","justifyContent",jc),U("(content|items|self)-",t=>({["align-"+t[1]]:jc(t)})),U("(place-(content|items|self))-",({1:t,$$:e})=>({[t]:("wun".includes(e[3])?"space-":"")+e})),B("p([xytrbl])?(?:$|-)","padding",cn("padding")),B("-?m([xytrbl])?(?:$|-)","margin",cn("margin")),B("-?space-(x|y)(?:$|-)","space",({1:t,_:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[t]]:`calc(${e} * calc(1 - var(--tw-space-${t}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[t]]:`calc(${e} * var(--tw-space-${t}-reverse))`}})),U("space-(x|y)-reverse",({1:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"1"}})),B("w-","width"),B("min-w-","minWidth"),B("max-w-","maxWidth"),B("h-","height"),B("min-h-","minHeight"),B("max-h-","maxHeight"),B("font-","fontWeight"),B("font-","fontFamily",({_:t})=>typeof(t=je(t))[1]=="string"?{fontFamily:st(t)}:{fontFamily:st(t[0]),...t[1]}),U("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),U("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),U("italic","fontStyle"),U("not-italic",{fontStyle:"normal"}),U("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:t,2:e="",3:n})=>e=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(e[0])?"numeric-spacing":e?"numeric-figure":t)]:t,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...Ot({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),B("tracking-","letterSpacing"),B("leading-","lineHeight"),U("list-(inside|outside)","listStylePosition"),B("list-","listStyleType"),U("list-","listStyleType"),B("placeholder-opacity-","placeholderOpacity",({_:t})=>({"&::placeholder":{"--tw-placeholder-opacity":t}})),ge("placeholder-",{property:"color",selector:"&::placeholder"}),U("text-(left|center|right|justify|start|end)","textAlign"),U("text-(ellipsis|clip)","textOverflow"),B("text-opacity-","textOpacity","--tw-text-opacity"),ge("text-",{property:"color"}),B("text-","fontSize",({_:t})=>typeof t=="string"?{fontSize:t}:{fontSize:t[0],...typeof t[1]=="string"?{lineHeight:t[1]}:t[1]}),B("indent-","textIndent"),U("(overline|underline|line-through)","textDecorationLine"),U("no-underline",{textDecorationLine:"none"}),B("underline-offset-","textUnderlineOffset"),ge("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),B("decoration-","textDecorationThickness"),U("decoration-","textDecorationStyle"),U("(uppercase|lowercase|capitalize)","textTransform"),U("normal-case",{textTransform:"none"}),U("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),U("align-","verticalAlign"),U("whitespace-","whiteSpace"),U("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),U("break-words",{overflowWrap:"break-word"}),U("break-all",{wordBreak:"break-all"}),U("break-keep",{wordBreak:"keep-all"}),ge("caret-",{opacityVariable:!1,opacitySection:"opacity"}),ge("accent-",{opacityVariable:!1,opacitySection:"opacity"}),U("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:t})=>`linear-gradient(to ${jt(t," ")},var(--tw-gradient-stops))`),ge("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-from":t.value,"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),ge("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${t.value},var(--tw-gradient-to)`})),ge("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),U("bg-(fixed|local|scroll)","backgroundAttachment"),U("bg-origin-(border|padding|content)","backgroundOrigin",({1:t})=>t+"-box"),U(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),U("bg-blend-","backgroundBlendMode"),U("bg-clip-(border|padding|content|text)","backgroundClip",({1:t})=>t+(t=="text"?"":"-box")),B("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),ge("bg-",{section:"backgroundColor"}),B("bg-","backgroundImage"),B("bg-","backgroundPosition"),U("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",qr),B("bg-","backgroundSize"),B("rounded(?:$|-)","borderRadius"),B("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:t,_:e})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[t]||[t,t];return{[`border-${jt(n[0])}-radius`]:e,[`border-${jt(n[1])}-radius`]:e}}),U("border-(collapse|separate)","borderCollapse"),B("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),U("border-(solid|dashed|dotted|double|none)","borderStyle"),B("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:t,_:e})=>({...Ot({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(t||"-x")]:e,["--tw-border-spacing"+(t||"-y")]:e,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),ge("border-([xytrbl])-",{section:"borderColor"},cn("border","Color")),ge("border-"),B("border-([xytrbl])(?:$|-)","borderWidth",cn("border","Width")),B("border(?:$|-)","borderWidth"),B("divide-opacity(?:$|-)","divideOpacity",({_:t})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":t}})),U("divide-(solid|dashed|dotted|double|none)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:t}})),U("divide-([xy]-reverse)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+t]:"1"}})),B("divide-([xy])(?:$|-)","divideWidth",({1:t,_:e})=>{let n={x:"lr",y:"tb"}[t];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${t}-reverse`]:"0",[`border-${jt(n[0])}Width`]:`calc(${e} * calc(1 - var(--tw-divide-${t}-reverse)))`,[`border-${jt(n[1])}Width`]:`calc(${e} * var(--tw-divide-${t}-reverse))`}}}),ge("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),B("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),ge("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),B("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),U("ring-inset",{"--tw-ring-inset":"inset"}),ge("ring-",{property:"--tw-ring-color"}),B("ring(?:$|-)","ringWidth",({_:t},{theme:e})=>({...Ot({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Mt(e("ringOffsetColor","","#fff")),"--tw-ring-color":Mt(e("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":e("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${t} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),ge("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-shadow-color":t.value,"--tw-shadow":"var(--tw-shadow-colored)"})),B("shadow(?:$|-)","boxShadow",({_:t})=>({...Ot({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":st(t),"--tw-shadow-colored":st(t).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),B("(opacity)-"),U("mix-blend-","mixBlendMode"),...qc(),...qc("backdrop-"),B("transition(?:$|-)","transitionProperty",(t,{theme:e})=>({transitionProperty:st(t),transitionTimingFunction:t._=="none"?void 0:st(e("transitionTimingFunction","")),transitionDuration:t._=="none"?void 0:st(e("transitionDuration",""))})),B("duration(?:$|-)","transitionDuration","transitionDuration",st),B("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",st),B("delay(?:$|-)","transitionDelay","transitionDelay",st),B("animate(?:$|-)","animation",(t,{theme:e,h:n,e:r})=>{let i=st(t),a=i.split(" "),o=e("keyframes",a[0]);return o?{["@keyframes "+(a[0]=r(n(a[0])))]:o,animation:a.join(" ")}:{animation:i}}),"(transform)-(none)",U("transform",Ua),U("transform-(cpu|gpu)",({1:t})=>({"--tw-transform":Kc(t=="gpu")})),B("scale(-[xy])?-","scale",({1:t,_:e})=>({["--tw-scale"+(t||"-x")]:e,["--tw-scale"+(t||"-y")]:e,...Ua()})),B("-?(rotate)-","rotate",Pa),B("-?(translate-[xy])-","translate",Pa),B("-?(skew-[xy])-","skew",Pa),U("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",qr),"(appearance)-",B("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",B("(cursor)-"),"(cursor)-",U("snap-(none)","scroll-snap-type"),U("snap-(x|y|both)",({1:t})=>({...Ot({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":t+" var(--tw-scroll-snap-strictness)"})),U("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),U("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),U("snap-(normal|always)","scroll-snap-stop"),U("scroll-(auto|smooth)","scroll-behavior"),B("scroll-p([xytrbl])?(?:$|-)","padding",cn("scroll-padding")),B("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",cn("scroll-margin")),U("touch-(auto|none|manipulation)","touch-action"),U("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:t,2:e,3:n})=>({...Ot({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${e?"pan-x":n?"pan-y":t}`]:t,"touch-action":"var(--tw-touch-action)"})),U("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),U("outline",{outlineStyle:"solid"}),U("outline-(dashed|dotted|double)","outlineStyle"),B("-?(outline-offset)-"),ge("outline-",{opacityVariable:!1,opacitySection:"opacity"}),B("outline-","outlineWidth"),"(pointer-events)-",B("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:t})=>({x:"horizontal",y:"vertical"})[t]||t||"both"],U("select-(none|text|all|auto)","userSelect"),ge("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),ge("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),B("stroke-","strokeWidth"),U("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),U("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function qr(t){return(typeof t=="string"?t:t[1]).replace(/-/g," ").trim()}function Hc(t){return(typeof t=="string"?t:t[1]).replace("col","column")}function jt(t,e="-"){let n=[];for(let r of t)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(e)}function st(t){return t&&""+(t._||t)}function jc({$$:t}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[t[3]||""]||"")+t}function cn(t,e=""){return({1:n,_:r})=>{let i={x:"lr",y:"tb"}[n]||n+n;return i?{...On(t+"-"+jt(i[0])+e,r),...On(t+"-"+jt(i[1])+e,r)}:On(t+e,r)}}function qc(t=""){let e=["blur","brightness","contrast","grayscale","hue-rotate","invert",t&&"opacity","saturate","sepia",!t&&"drop-shadow"].filter(Boolean),n={};for(let r of e)n[`--tw-${t}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={...Ot(n),[`${t}filter`]:e.map(r=>`var(--tw-${t}${r})`).join(" ")},[`(${t}filter)-(none)`,U(`${t}filter`,n),...e.map(r=>B(`${r[0]=="h"?"-?":""}(${t}${r})(?:$|-)`,r,({1:i,_:a})=>({[`--tw-${i}`]:je(a).map(o=>`${r}(${o})`).join(" "),...n})))]}function Pa({1:t,_:e}){return{["--tw-"+t]:e,...Ua()}}function Ua(){return{...Ot({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Kc()}),transform:"var(--tw-transform)"}}function Kc(t){return[t?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Vc({1:t,2:e}){return`${t} ${e} / ${t} ${e}`}function Gc({1:t}){return`repeat(${t},minmax(0,1fr))`}function Ot(t){return{"@layer defaults":{"*,::before,::after":t,"::backdrop":t}}}var eu,Q,tu,rm,Pn,Xc,im,nu={},ru=[],am=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function zt(t,e){for(var n in e)t[n]=e[n];return t}function iu(t){var e=t.parentNode;e&&e.removeChild(t)}function Ba(t,e,n,r,i){var a={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++tu};return i==null&&Q.vnode!=null&&Q.vnode(a),a}function dn(t){return t.children}function Vr(t,e){this.props=t,this.context=e}function un(t,e){if(e==null)return t.__?un(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?un(t):null}function au(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return au(t)}}function Zc(t){(!t.__d&&(t.__d=!0)&&Pn.push(t)&&!Gr.__r++||Xc!==Q.debounceRendering)&&((Xc=Q.debounceRendering)||setTimeout)(Gr)}function Gr(){for(var t;Gr.__r=Pn.length;)t=Pn.sort(function(e,n){return e.__v.__b-n.__v.__b}),Pn=[],t.some(function(e){var n,r,i,a,o,s;e.__d&&(o=(a=(n=e).__v).__e,(s=n.__P)&&(r=[],(i=zt({},a)).__v=a.__v+1,cu(s,a,i,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[o]:null,r,o??un(a),a.__h),sm(r,a),a.__e!=o&&au(a)))})}function ou(t,e,n,r,i,a,o,s,l,u){var c,f,d,p,b,m,h,g=r&&r.__k||ru,y=g.length;for(n.__k=[],c=0;c<e.length;c++)if((p=n.__k[c]=(p=e[c])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Ba(null,p,null,null,p):Array.isArray(p)?Ba(dn,{children:p},null,null,null):p.__b>0?Ba(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(d=g[c])===null||d&&p.key==d.key&&p.type===d.type)g[c]=void 0;else for(f=0;f<y;f++){if((d=g[f])&&p.key==d.key&&p.type===d.type){g[f]=void 0;break}d=null}cu(t,p,d=d||nu,i,a,o,s,l,u),b=p.__e,(f=p.ref)&&d.ref!=f&&(h||(h=[]),d.ref&&h.push(d.ref,null,p),h.push(f,p.__c||b,p)),b!=null?(m==null&&(m=b),typeof p.type=="function"&&p.__k===d.__k?p.__d=l=su(p,l,t):l=lu(t,p,d,g,b,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=t&&(l=un(d))}for(n.__e=m,c=y;c--;)g[c]!=null&&(typeof n.type=="function"&&g[c].__e!=null&&g[c].__e==n.__d&&(n.__d=un(r,c+1)),du(g[c],g[c]));if(h)for(c=0;c<h.length;c++)uu(h[c],h[++c],h[++c])}function su(t,e,n){for(var r,i=t.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=t,e=typeof r.type=="function"?su(r,e,n):lu(n,r,r,i,r.__e,e));return e}function lu(t,e,n,r,i,a){var o,s,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(i),o=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==i)break e;t.insertBefore(i,a),o=a}return o!==void 0?o:i.nextSibling}function om(t,e,n,r,i){var a;for(a in n)a==="children"||a==="key"||a in e||Kr(t,a,null,n[a],r);for(a in e)i&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||Kr(t,a,e[a],n[a],r)}function Yc(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||am.test(e)?n:n+"px"}function Kr(t,e,n,r,i){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Yc(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Yc(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?r||t.addEventListener(e,a?Qc:Jc,a):t.removeEventListener(e,a?Qc:Jc,a);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function Jc(t){this.l[t.type+!1](Q.event?Q.event(t):t)}function Qc(t){this.l[t.type+!0](Q.event?Q.event(t):t)}function cu(t,e,n,r,i,a,o,s,l){var u,c,f,d,p,b,m,h,g,y,w,S,_,v=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=e.__e=n.__e,e.__h=null,a=[s]),(u=Q.__b)&&u(e);try{e:if(typeof v=="function"){if(h=e.props,g=(u=v.contextType)&&r[u.__c],y=u?g?g.props.value:u.__:r,n.__c?m=(c=e.__c=n.__c).__=c.__E:("prototype"in v&&v.prototype.render?e.__c=c=new v(h,y):(e.__c=c=new Vr(h,y),c.constructor=v,c.render=cm),g&&g.sub(c),c.props=h,c.state||(c.state={}),c.context=y,c.__n=r,f=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),v.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=zt({},c.__s)),zt(c.__s,v.getDerivedStateFromProps(h,c.__s))),d=c.props,p=c.state,f)v.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(v.getDerivedStateFromProps==null&&h!==d&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(h,y),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(h,c.__s,y)===!1||e.__v===n.__v){c.props=h,c.state=c.__s,e.__v!==n.__v&&(c.__d=!1),c.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(x){x&&(x.__=e)}),c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(h,c.__s,y),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(d,p,b)})}if(c.context=y,c.props=h,c.__v=e,c.__P=t,w=Q.__r,S=0,"prototype"in v&&v.prototype.render)c.state=c.__s,c.__d=!1,w&&w(e),u=c.render(c.props,c.state,c.context);else do c.__d=!1,w&&w(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++S<25);c.state=c.__s,c.getChildContext!=null&&(r=zt(zt({},r),c.getChildContext())),f||c.getSnapshotBeforeUpdate==null||(b=c.getSnapshotBeforeUpdate(d,p)),_=u!=null&&u.type===dn&&u.key==null?u.props.children:u,ou(t,Array.isArray(_)?_:[_],e,n,r,i,a,o,s,l),c.base=e.__e,e.__h=null,c.__h.length&&o.push(c),m&&(c.__E=c.__=null),c.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=lm(n.__e,e,n,r,i,a,o,l);(u=Q.diffed)&&u(e)}catch(x){e.__v=null,(l||a!=null)&&(e.__e=s,e.__h=!!l,a[a.indexOf(s)]=null),Q.__e(x,e,n)}}function sm(t,e){Q.__c&&Q.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){Q.__e(r,n.__v)}})}function lm(t,e,n,r,i,a,o,s){var l,u,c,f=n.props,d=e.props,p=e.type,b=0;if(p==="svg"&&(i=!0),a!=null){for(;b<a.length;b++)if((l=a[b])&&"setAttribute"in l==!!p&&(p?l.localName===p:l.nodeType===3)){t=l,a[b]=null;break}}if(t==null){if(p===null)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,d.is&&d),a=null,s=!1}if(p===null)f===d||s&&t.data===d||(t.data=d);else{if(a=a&&eu.call(t.childNodes),u=(f=n.props||nu).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!s){if(a!=null)for(f={},b=0;b<t.attributes.length;b++)f[t.attributes[b].name]=t.attributes[b].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===t.innerHTML)||(t.innerHTML=c&&c.__html||""))}if(om(t,d,f,i,s),c)e.__k=[];else if(b=e.props.children,ou(t,Array.isArray(b)?b:[b],e,n,r,i&&p!=="foreignObject",a,o,a?a[0]:n.__k&&un(n,0),s),a!=null)for(b=a.length;b--;)a[b]!=null&&iu(a[b]);s||("value"in d&&(b=d.value)!==void 0&&(b!==t.value||p==="progress"&&!b||p==="option"&&b!==f.value)&&Kr(t,"value",b,f.value,!1),"checked"in d&&(b=d.checked)!==void 0&&b!==t.checked&&Kr(t,"checked",b,f.checked,!1))}return t}function uu(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){Q.__e(r,n)}}function du(t,e,n){var r,i;if(Q.unmount&&Q.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||uu(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){Q.__e(a,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&du(r[i],e,typeof t.type!="function");n||t.__e==null||iu(t.__e),t.__=t.__e=t.__d=void 0}function cm(t,e,n){return this.constructor(t,n)}eu=ru.slice,Q={__e:function(t,e,n,r){for(var i,a,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(s){t=s}throw t}},tu=0,rm=function(t){return t!=null&&t.constructor===void 0},Vr.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=zt({},this.state),typeof t=="function"&&(t=t(zt({},n),this.props)),t&&zt(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),Zc(this))},Vr.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Zc(this))},Vr.prototype.render=dn,Pn=[],Gr.__r=0,im=0;var um,mt,$a,fu;var wu=[],Na=[],hu=Q.__b,pu=Q.__r,mu=Q.diffed,gu=Q.__c,bu=Q.unmount;function dm(){for(var t;t=wu.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Xr),t.__H.__h.forEach(Wa),t.__H.__h=[]}catch(e){t.__H.__h=[],Q.__e(e,t.__v)}}Q.__b=function(t){typeof t.type!="function"||t.o||t.type===dn?t.o||(t.o=t.__&&t.__.o?t.__.o:""):t.o=(t.__&&t.__.o?t.__.o:"")+(t.__&&t.__.__k?t.__.__k.indexOf(t):0),mt=null,hu&&hu(t)},Q.__r=function(t){pu&&pu(t),um=0;var e=(mt=t.__c).__H;e&&($a===mt?(e.__h=[],mt.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Na,n.__N=n.i=void 0})):(e.__h.forEach(Xr),e.__h.forEach(Wa),e.__h=[])),$a=mt},Q.diffed=function(t){mu&&mu(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(wu.push(e)!==1&&fu===Q.requestAnimationFrame||((fu=Q.requestAnimationFrame)||fm)(dm)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Na&&(n.__=n.__V),n.i=void 0,n.__V=Na})),$a=mt=null},Q.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Xr),n.__h=n.__h.filter(function(r){return!r.__||Wa(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],Q.__e(r,n.__v)}}),gu&&gu(t,e)},Q.unmount=function(t){bu&&bu(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Xr(r)}catch(i){e=i}}),n.__H=void 0,e&&Q.__e(e,n.__v))};var yu=typeof requestAnimationFrame=="function";function fm(t){var e,n=function(){clearTimeout(r),yu&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);yu&&(e=requestAnimationFrame(n))}function Xr(t){var e=mt,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),mt=e}function Wa(t){var e=mt;t.__c=t.__(),mt=e}var Zr=globalThis||(typeof window<"u"?window:self),hm=Object.create,ja=Object.defineProperty,pm=Object.getOwnPropertyDescriptor,mm=Object.getOwnPropertyNames,gm=Object.getPrototypeOf,bm=Object.prototype.hasOwnProperty,ym=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),wm=(t,e)=>{for(var n in e)ja(t,n,{get:e[n],enumerable:!0})},Ha=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of mm(e))!bm.call(t,i)&&i!==n&&ja(t,i,{get:()=>e[i],enumerable:!(r=pm(e,i))||r.enumerable});return t},vm=(t,e,n)=>(Ha(t,e,"default"),n&&Ha(n,e,"default")),xu=(t,e,n)=>(n=t!=null?hm(gm(t)):{},Ha(e||!t||!t.__esModule?ja(n,"default",{value:t,enumerable:!0}):n,t)),_u=ym((t,e)=>{(function(n,r){typeof define=="function"&&define.amd?define([],r):typeof t<"u"?r():(r(),n.FileSaver={})})(t,function(){"use strict";function n(u,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function r(u,c,f){var d=new XMLHttpRequest;d.open("GET",u),d.responseType="blob",d.onload=function(){l(d.response,c,f)},d.onerror=function(){},d.send()}function i(u){var c=new XMLHttpRequest;c.open("HEAD",u,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function a(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(c)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Zr=="object"&&Zr.global===Zr?Zr:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(u,c,f){var d=o.URL||o.webkitURL,p=document.createElement("a");c=c||u.name||"download",p.download=c,p.rel="noopener",typeof u=="string"?(p.href=u,p.origin===location.origin?a(p):i(p.href)?r(u,c,f):a(p,p.target="_blank")):(p.href=d.createObjectURL(u),setTimeout(function(){d.revokeObjectURL(p.href)},4e4),setTimeout(function(){a(p)},0))}:"msSaveOrOpenBlob"in navigator?function(u,c,f){if(c=c||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(n(u,f),c);else if(i(u))r(u,c,f);else{var d=document.createElement("a");d.href=u,d.target="_blank",setTimeout(function(){a(d)})}}:function(u,c,f,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof u=="string")return r(u,c,f);var p=u.type==="application/octet-stream",b=/constructor/i.test(o.HTMLElement)||o.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||p&&b||s)&&typeof FileReader<"u"){var h=new FileReader;h.onloadend=function(){var w=h.result;w=m?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=w:location=w,d=null},h.readAsDataURL(u)}else{var g=o.URL||o.webkitURL,y=g.createObjectURL(u);d?d.location=y:location.href=y,d=null,setTimeout(function(){g.revokeObjectURL(y)},4e4)}});o.saveAs=l.saveAs=l,typeof e<"u"&&(e.exports=l)})}),Tu={};wm(Tu,{default:()=>Un});var xm=xu(_u());vm(Tu,xu(_u()));var{default:vu,..._m}=xm,Un=vu!==void 0?vu:_m;var Ve=window,ku=!1,Au=!!(Ve.Worker&&Ve.Blob&&Ve.Promise&&Ve.OffscreenCanvas&&Ve.OffscreenCanvasRenderingContext2D&&Ve.HTMLCanvasElement&&Ve.HTMLCanvasElement.prototype.transferControlToOffscreen&&Ve.URL&&Ve.URL.createObjectURL);function Su(){}function Ka(t){var e=Ve.Promise,n=e!==void 0?e:Ve.Promise;return typeof n=="function"?new n(t):(t(Su,Su),null)}var qa=function(){var t=Math.floor(16.666666666666668),e,n,r={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(a){var o=Math.random();return r[o]=requestAnimationFrame(function s(l){i===l||i+t-1<l?(i=l,delete r[o],a()):r[o]=requestAnimationFrame(s)}),o},n=function(a){r[a]&&cancelAnimationFrame(r[a])}):(e=function(a){return setTimeout(a,t)},n=function(a){return clearTimeout(a)}),{frame:e,cancel:n}}(),Tm=function(){var t,e,n={};function r(i){function a(o,s){i.postMessage({options:o||{},callback:s})}i.init=function(s){var l=s.transferControlToOffscreen();i.postMessage({canvas:l},[l])},i.fire=function(s,l,u){if(e)return a(s,null),e;var c=Math.random().toString(36).slice(2);return e=Ka(function(f){function d(p){p.data.callback===c&&(delete n[c],i.removeEventListener("message",d),e=null,u(),f())}i.addEventListener("message",d),a(s,c),n[c]=d.bind(null,{data:{callback:c}})}),e},i.reset=function(){i.postMessage({reset:!0});for(var s in n)n[s](),delete n[s]}}return function(){if(t)return t;if(!ku&&Au){var i=["var CONFETTI, SIZE = {}, module = {};","("+main.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch{return null}r(t)}return t}}(),Sm={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function km(t,e){return e?e(t):t}function Am(t){return t!=null}function be(t,e,n){return km(t&&Am(t[e])?t[e]:Sm[e],n)}function Em(t){return t<0?0:Math.floor(t)}function Cm(t,e){return Math.floor(Math.random()*(e-t))+t}function Va(t){return parseInt(t,16)}function Dm(t){return t.map(Rm)}function Rm(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:Va(e.substring(0,2)),g:Va(e.substring(2,4)),b:Va(e.substring(4,6))}}function Fm(t){var e=be(t,"origin",Object);return e.x=be(e,"x",Number),e.y=be(e,"y",Number),e}function Lm(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function Im(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function Mm(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function Om(t,e,n,r,i,a,o,s,l){t.save(),t.translate(e,n),t.rotate(a),t.scale(r,i),t.arc(0,0,1,o,s,l),t.restore()}function zm(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar}}function Pm(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,a=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(a-r)*e.ovalScalar,Math.abs(o-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):Om(t,e.x,e.y,Math.abs(a-r)*e.ovalScalar,Math.abs(o-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var s=Math.PI/2*3,l=4*e.scalar,u=8*e.scalar,c=e.x,f=e.y,d=5,p=Math.PI/d;d--;)c=e.x+Math.cos(s)*u,f=e.y+Math.sin(s)*u,t.lineTo(c,f),s+=p,c=e.x+Math.cos(s)*l,f=e.y+Math.sin(s)*l,t.lineTo(c,f),s+=p;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(a),Math.floor(o)),t.lineTo(Math.floor(r),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function Um(t,e,n,r,i){var a=e.slice(),o=t.getContext("2d"),s,l,u=Ka(function(c){function f(){s=l=null,o.clearRect(0,0,r.width,r.height),i(),c()}function d(){ku&&!(r.width===workerSize.width&&r.height===workerSize.height)&&(r.width=t.width=workerSize.width,r.height=t.height=workerSize.height),!r.width&&!r.height&&(n(t),r.width=t.width,r.height=t.height),o.clearRect(0,0,r.width,r.height),a=a.filter(function(p){return Pm(o,p)}),a.length?s=qa.frame(d):f()}s=qa.frame(d),l=f});return{addFettis:function(c){return a=a.concat(c),u},canvas:t,promise:u,reset:function(){s&&qa.cancel(s),l&&l()}}}function Bm(t,e){var n=!t,r=!!be(e||{},"resize"),i=be(e,"disableForReducedMotion",Boolean),a=Au&&!!be(e||{},"useWorker"),o=a?Tm():null,s=n?Lm:Im,l=t&&o?!!t.__confetti_initialized:!1,u=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,c;function f(p,b,m){for(var h=be(p,"particleCount",Em),g=be(p,"angle",Number),y=be(p,"spread",Number),w=be(p,"startVelocity",Number),S=be(p,"decay",Number),_=be(p,"gravity",Number),v=be(p,"drift",Number),x=be(p,"colors",Dm),T=be(p,"ticks",Number),A=be(p,"shapes"),k=be(p,"scalar"),E=Fm(p),F=h,C=[],I=t.width*E.x,R=t.height*E.y;F--;)C.push(zm({x:I,y:R,angle:g,spread:y,startVelocity:w,color:x[F%x.length],shape:A[Cm(0,A.length)],ticks:T,decay:S,gravity:_,drift:v,scalar:k}));return c?c.addFettis(C):(c=Um(t,C,s,b,m),c.promise)}function d(p){var b=i||be(p,"disableForReducedMotion",Boolean),m=be(p,"zIndex",Number);if(b&&u)return Ka(function(w){w()});n&&c?t=c.canvas:n&&!t&&(t=Mm(m),document.body.appendChild(t)),r&&!l&&s(t);var h={width:t.width,height:t.height};o&&!l&&o.init(t),l=!0,o&&(t.__confetti_initialized=!0);function g(){if(o){var w={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};s(w),o.postMessage({resize:{width:w.width,height:w.height}});return}h.width=h.height=null}function y(){c=null,r&&Ve.removeEventListener("resize",g),n&&t&&(document.body.removeChild(t),t=null,l=!1)}return r&&Ve.addEventListener("resize",g,!1),o?o.fire(p,h,y):f(p,h,y)}return d.reset=function(){o&&o.reset(),c&&c.reset()},d}var Ga;function $m(){return Ga||(Ga=Bm(null,{useWorker:!1,resize:!0})),Ga}function Xa(){return $m().apply(this,arguments)}var Eu={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED Epub \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u5F53\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u8BE5\u6269\u5C55\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F ",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9 OpenAI \u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u8BBE\u7F6E\u4E3A 1 \u4E2A\u6BB5\u843D\u65F6\uFF0C\u4F53\u9A8C\u6700\u597D","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0"};var Cu={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","translate-firefox-local-pdf":"\u9EDE\u9078\u4E0A\u50B3 PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u5957\u4EF6\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u63F4 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u63F4 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","mouse-translate":"\u7576\u9F20\u6A19\u6ED1\u904E",mouseHoldKey:"+ {key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u91DD\u5C0D\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831/\u8D0A\u52A9",aboutIntro:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002",aboutIntroWithoutSponsor:"\u672C\u5957\u4EF6\u70BA\u514D\u8CBB\u5957\u4EF6\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B"};var Du={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc.","browser.toggleTranslatePage":"Toggle Translate Page ","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual Epub ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate","mouse-translate":"Mouse Hover",mouseHoldKey:"+ {key} translate this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area (different from only the main area)",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ",aboutLabelWithoutSponsor:"About - Feedback","browser.openAboutPage":"About / Feedback",aboutIntro:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. <br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Issue feedback/group",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)",resetToDefaultColor:"Reset to default colors",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",verifyService:"Click on this test service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.apiUrl":"Custom API interface address","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",resetToDefaultSettings:"Reset to default settings",customContent:"Enter customization content"};var jm=[{code:"zh-CN",messages:Eu},{code:"zh-TW",messages:Cu},{code:"en",messages:Du}];var qm={};for(let t of jm)qm[t.code]=t.messages;var Be="immersive-translate";var X="immersiveTranslate";var yb=X+"GoogleAccessToken",wb=X+"AuthFlow";var vb=X+"AuthState",xb=X+"IframeMessage",_b=X+"WaitForRateLimit",Tb=X+"DocumentMessageAsk",Fu=X+"DocumentMessageTellThirdParty",Lu=X+"DocumentMessageThirdPartyTell",Sb=X+"DocumentMessageHandler",kb=`${X}Container`,Ab=`${X}SpecifiedContainer`;var Eb=`${X}PageTranslatedStatus`,Cb=`${X}PageUrlChanged`,Db=`${X}ReceiveCommand`,Rb=`${X}PopupReceiveMessage`,Iu="immersive-translate.owenyoung.com",Fb=`https://${Iu}/`,Lb=`https://${Iu}/default_config.json`,Ib=`${X}Mark`;var Mu=`${X}Root`,Za=`data-${Be}-effect`,Mb=`${X}TranslatedMark`,Ob=`${X}ParagraphId`,zb=`${X}LoadingId`,Pb=`data-${Be}-loading-id`,Ub=`${X}ErrorId`,Bb=`data-${Be}-error-id`,$b=`${X}AtomicBlockMark`,Nb=`${X}ExcludeMark`,Wb=`data-${Be}-exclude-mark`,Hb=`${X}StayOriginalMark`,jb=`${X}PreWhitespaceMark`,qb=`${X}InlineMark`,Vb=`${X}BlockMark`,Gb=`${X}Left`,Kb=`${X}Right`,Xb=`${X}Width`,Zb=`${X}Height`,Yb=`${X}Top`,Jb=`${X}FontSize`;var Qb=`${X}GlobalStyleMark`;var ey=`${Be}-target-wrapper`,ty=`${Be}-pdf-target-container`,ny=`${Be}-target-inner`,ry=`${Be}-source-wrapper`,iy=`${Be}-target-translation-block-wrapper`,ay=`${Be}-root-translation-theme`,oy=`${X}RootTranslationTheme`,sy=`${Be}-target-translation-vertical-block-wrapper`,ly=`${Be}-target-translation-pdf-block-wrapper`,cy=`${Be}-target-translation-pre-whitespace`,uy=`${Be}-target-translation-inline-wrapper`;var Ru=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],dy={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersive-translate.owenyoung.com/services/deepL",allProps:[{name:"authKey",label:"Auth Key",required:!0,type:"password"}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersive-translate.owenyoung.com/services/openai",allProps:[{name:"APIKEY",required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"select",default:"gpt-3.5-turbo",options:[{label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersive-translate.owenyoung.com/services/openai",type:"number",default:5},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"text",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text below to {{to}}:

{{text}}`,optional:!0}]},chatgpt:{name:"ChatGPT Web(3.5 mobile)",homepage:"https://chat.openai.com",beta:!0},youdao:{name:"Youdao",homepage:"https://immersive-translate.owenyoung.com/services/youdao",docUrl:"https://immersive-translate.owenyoung.com/services/youdao",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersive-translate.owenyoung.com/services/tencent",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersive-translate.owenyoung.com/services/azure",allProps:[{name:"region",required:!0,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersive-translate.owenyoung.com/services/baidu",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersive-translate.owenyoung.com/services/volcano",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersive-translate.owenyoung.com/services/caiyun",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://immersive-translate.owenyoung.com/services/youdao"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersive-translate.owenyoung.com/services/openL",allProps:[...Ru,{type:"password",name:"apikey",required:!0}],props:Ru},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",alpha:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersive-translate.owenyoung.com/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},fy={type:X+"ChildFrameToRootFrameIdentifier"};var{ZipReader:Vm,BlobReader:Ja,TextReader:Ya,TextWriter:Gm,BlobWriter:zu,ZipWriter:Km}=la;Cr({useWebWorkers:!1});var Xm=async t=>{let e=new Uint8Array(await t.slice(0,4).arrayBuffer());return e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4},Pt=null,Yr=0,Jr=0,fn=0,Ou=!1,Zm=gn(),Ym=Zm.PROD==="1",Jm=async t=>{let n=await new Vm(new Ja(t)).getEntries();t.name&&t.name.endsWith(".zip")&&n.every(u=>u.filename.startsWith(t.name.slice(0,-4)+"/"))&&(n=n.map(u=>(u.filename=u.filename.slice(t.name.length-3),u)));let r=new Map(n.map(l=>[l.filename,l])),i=l=>(u,...c)=>r.has(u)?l(r.get(u),...c):null,a=i(l=>l.getData(new Gm)),o=i((l,u)=>l.getData(new zu(u)));return{entries:n,loadText:a,loadBlob:o,getSize:l=>r.get(l)?.uncompressedSize??0}},Pu=async t=>t.isFile?t:(await Promise.all(Array.from(await new Promise((e,n)=>t.createReader().readEntries(r=>e(r),r=>n(r))),Pu))).flat(),Qm=async t=>{let e=await Pu(t);e=e.map(f=>f);let n=[],r=await Promise.all(e.map(f=>new Promise((d,p)=>f.file(b=>d([b,f.fullPath]),b=>p(b))))),i=new Map(r.map(([f,d])=>{let p=d.replace(t.fullPath+"/","");return n.push({filename:p,...f}),[p,f]})),a=new TextDecoder,o=f=>f?a.decode(f):null,s=f=>i.get(f)?.arrayBuffer()??null;return{entries:n,loadText:async f=>o(await s(f)),loadBlob:async f=>i.get(f),getSize:f=>i.get(f)?.size??0}},eg=({name:t,type:e})=>e==="application/vnd.comicbook+zip"||t.endsWith(".cbz"),tg=({name:t,type:e})=>e==="application/x-fictionbook+xml"||t.endsWith(".fb2"),ng=({name:t,type:e})=>e==="application/x-zip-compressed-fb2"||t.endsWith(".fb2.zip")||t.endsWith(".fbz"),rg=async(t,e)=>{let n;if(t.isDirectory){let a=await Qm(t);Pt=a,n=await new wn(a).init()}else if(t.size)if(await Xm(t)){let a=await Jm(t);if(Pt=a,eg(t))n=ko(a,t);else if(ng(t)){let{entries:o}=a,s=o.find(u=>u.filename.endsWith(".fb2")),l=await a.loadBlob((s??o[0]).filename);n=await fi(l)}else n=await new wn(a).init()}else await Po(t)?n=await new ir({unzlib:bc}).open(t):tg(t)&&(n=await fi(t));else throw new Error("File not found");if(!n)throw new Error("File type not supported");let r=new Yn(n,e),i=await r.display();return document.body.append(i),r},_e=document.querySelector.bind(document),qt=!1;function Uu(){let t=document.querySelectorAll("iframe");for(let r=0;r<t.length;r++){let o=t[r].contentDocument.body;o&&o.setAttribute("contenteditable",!1)}qt=!1;let e=document.getElementById("edit");e&&(e.innerText=qt?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=qt?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function ig(){let t=document.querySelectorAll("iframe");for(let r=0;r<t.length;r++){let o=t[r].contentDocument.body;o&&o.setAttribute("contenteditable",!0)}qt=!0;let e=document.getElementById("edit");e&&(e.innerText=qt?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=qt?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function ag(){qt?Uu():ig()}var Qa=class{style={spacing:1.4,justify:!0,hyphenate:!0};layout={margin:48,gap:48,maxColumnWidth:720};closeSideBar(){_e("#dimming-overlay").classList.remove("show"),_e("#side-bar").classList.remove("show")}constructor(){_e("#side-bar-button").addEventListener("click",()=>{_e("#dimming-overlay").classList.add("show"),_e("#side-bar").classList.add("show")}),_e("#dimming-overlay").addEventListener("click",()=>this.closeSideBar());let e=So([{name:"layout",label:"Layout",type:"radio",items:[["Paginated","paginated"],["Scrolled","scrolled"]],onclick:n=>{this.layout.flow=n}}]);e.element.classList.add("menu"),_e("#menu-button").append(e.element),_e("#menu-button > button").addEventListener("click",()=>e.element.classList.toggle("show")),e.groups.layout.select("paginated")}async open(e){try{document.addEventListener(Fu,b=>{let{detail:m}=b;if(m)try{let h=JSON.parse(m);if(h&&h.type&&h.payload){if(h.type==="paragraphTranslated"){let{ok:g}=h.payload;if(g?Jr++:fn++,s&&Yr){let y=Jr,w=Jr+fn,S=y/Yr*100,_=Math.floor(S),v=Math.floor(w/Yr*100);if(_>100&&(_=100),v>100&&(v=100),s.innerText=`${_}%`,v===100&&fn>0){let x=document.querySelector("#error");x.innerHTML=`${fn} failed(\u5931\u8D25). <span class="link">Retry all (\u70B9\u6B64\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D)</span>`}_===100&&(Ou||(Ou=!0,Xa({particleCount:100,spread:160})))}}else if(h.type==="totalParagraphsCount")h.payload.totalParagraphsCount&&(Yr=h.payload.totalParagraphsCount);else if(h.type==="translateStart")Jr=0,fn=0;else if(h.type==="restorePage"){let g=document.querySelector("#error"),y=document.querySelector("#progress-number");g&&(g.innerHTML=""),y&&(y.innerText="")}}}catch{}}),this.view=await rg(e,this.#e.bind(this));let{book:n}=this.view,r=n.sections,i=document.querySelector("#chapters"),a=n.resources,o=[];if(a&&a.guide&&a.guide.length)for(let b of a.guide)o.push(b.href);let s=document.querySelector("#progress-number"),l=document.querySelector("#error");l.addEventListener("click",b=>{for(b.preventDefault();l.firstChild;)l.removeChild(l.firstChild);fn=0,document.dispatchEvent(new CustomEvent(Lu,{detail:JSON.stringify({type:"retryFailedParagraphs"})}))}),_e("#open").addEventListener("click",()=>{window.location.reload()}),_e("#export").addEventListener("click",async b=>{b.preventDefault(),Pt||alert("Load failed");let m=document.querySelector("#export");m.classList.add("disabled");let h=document.querySelector("#exportAction");h&&h.classList.add("none");let g=document.querySelector("#exportStatus");g&&(g.innerText="Exporting..."),Uu();let y=Pt.entries,w=new zu,S=new Km(w),_=new Ya("application/epub+zip");await S.add("mimetype",_,{level:0,extendedTimestamp:!1});for(let A=0;A<y.length;A++){let k=y[A],E=k.filename;if(E==="mimetype"||!E)continue;let F=E.replace(/\'/g,"\\'"),C=document.querySelector("iframe[id='"+F+"']");if(C){let I=C.contentDocument.cloneNode(!0);I.querySelectorAll("["+Za+"]").forEach(j=>{if(Ym){delete j[Mu];let q=Object.keys(j.dataset).filter(K=>K.startsWith(X));for(let K of q)delete j.dataset[K]}else{let q=Object.keys(j.dataset).filter(K=>K.startsWith(X));for(let K of q)delete j.dataset[K]}j.removeAttribute(Za)}),I.querySelectorAll("[data-id]").forEach(j=>{j.removeAttribute("data-id")}),I.querySelectorAll("[contenteditable]").forEach(j=>{j.removeAttribute("contenteditable")}),I.querySelectorAll("style").forEach(j=>{j.getAttribute("type")||j.setAttribute("type","text/css")});let Y=new XMLSerializer().serializeToString(I),$=new Ya(Y);await S.add(k.filename,$)}else{let I=n.metadata;if(k.filename===n.opfPath&&I&&I.identifier)try{let R=await Pt.loadText(k.filename),M=new DOMParser().parseFromString(R,"text/xml"),P=M.getElementById(M.documentElement.getAttribute("unique-identifier"))??M.getElementsByTagNameNS(NS.DC,"identifier")[0],W=Math.random().toString(10).slice(2,15);P.textContent=W;let Y=new XMLSerializer().serializeToString(M),$=new Ya(Y);await S.add(k.filename,$)}catch{let M=await Pt.loadBlob(k.filename);await S.add(k.filename,new Ja(M))}else{let R=await Pt.loadBlob(k.filename);await S.add(k.filename,new Ja(R))}}}await S.close();let v=await w.getData(),x=e.name;e.name.endsWith(".epub.zip")&&(x=x.replace(".epub.zip",".epub"));let T=x.lastIndexOf(".");x=x.substring(0,T)+" (Translated)"+x.substring(T),await Un.saveAs(v,x),m&&m.classList.remove("disabled"),h&&h.classList.remove("none"),g&&(g.textContent="")}),_e("#edit").addEventListener("click",b=>{b.preventDefault(),Pt||alert("Load failed"),ag()});let c=(n.metadata||{}).title||"Unknown",f=document.querySelector("#bookTitle");f.textContent=c;let d=!1,p=0;for(let b=0;b<r.length;b++){let h=r[b].id,g=await n.loadText(h),y=new DOMParser().parseFromString(g,"application/xhtml+xml"),w=document.createElement("div");w.classList.add("flex"),w.classList.add("justify-center"),w.classList.add("items-center"),i.append(w);let S=document.createElement("h2");S.classList.add("notranslate"),S.innerText=h,w.append(S);let _=document.createElement("span");_.dataset.type="iframe-title",_.classList.add("notranslate"),_.innerText="",w.append(_);let v=document.createElement("iframe");v.setAttribute("id",h),v.setAttribute("width","80%"),v.setAttribute("height","400px"),v.srcdoc=y.documentElement.outerHTML,i.append(v),v.onload=()=>{if(p++,p===r.length){d=!0,setTimeout(()=>{let E=document.createElement("blockquote");E.classList.add("notranslate");let F=`<p class="notranslate">1. Click on the Immersive Translate extension popup translation button to start translating.<br>\u9700\u8981\u624B\u52A8\u70B9\u51FB\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6269\u5C55/\u811A\u672C\u6D6E\u7A97\u7684\u7FFB\u8BD1\u6309\u94AE\u5F00\u59CB\u7FFB\u8BD1\u3002<br><br>2. If the Epub contains images, it's fine for the edit box below not to show the images, the exported Epub will contain the images.<br>\u5982\u679C Epub \u91CC\u5305\u542B\u56FE\u7247\uFF0C\u4E0B\u9762\u7684\u7F16\u8F91\u6846\u4E0D\u663E\u793A\u56FE\u7247\u662F\u6B63\u5E38\u7684\uFF0C\u5BFC\u51FA\u540E\u7684 Epub \u91CC\u4F1A\u5305\u542B\u56FE\u7247\u3002<br><br>3. When the translation is finished, you can click the Edit button above to modify the translation.<br>\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u7F16\u8F91\u6309\u94AE\u6765\u4FEE\u6539\u8BD1\u6587\u3002<br><br>4. When there is a translation error, you can click Retry All above, or click Show Original and translate again. Or the whole page can be refreshed and started again, because the translated part is always cached and no further requests will be sent.<br>\u5F53\u51FA\u73B0\u7FFB\u8BD1\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u91CD\u8BD5\u5168\u90E8\uFF0C\u6216\u8005\u70B9\u51FB\u6D4F\u89C8\u5668\u6269\u5C55\u56FE\u6807\u5148\u663E\u793A\u539F\u6587\uFF0C\u518D\u7FFB\u8BD1\u3002\u6216\u8005\u6574\u4E2A\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6765\u8FC7\u4E5F\u884C\uFF0C\u56E0\u4E3A\u5DF2\u7FFB\u8BD1\u7684\u90E8\u5206\u603B\u662F\u6709\u7F13\u5B58\u7684\uFF0C\u4E0D\u4F1A\u518D\u53D1\u51FA\u8BF7\u6C42\u3002</p>`,C=document.querySelector("meta[name='immersive-translate-ebook-tips']");if(C){let R=C.getAttribute("content");R&&(F+=R)}E.innerHTML=F,document.querySelector("#tips").append(E)},1e3),document.dispatchEvent(new CustomEvent("immersiveTranslateEbookLoaded"));let x=document.querySelectorAll("iframe"),T=0;x.forEach(E=>{let I=E.contentDocument.body.innerText.length;T+=I});let A=document.createElement("p");A.classList.add("notranslate"),A.innerText=`The book is about ${T} characters in total (\u672C\u4E66\u5927\u7EA6 ${T} \u4E2A\u5B57\u7B26)`,_e("#stats").append(A)}}}}catch(n){alert(n.message),window.location.reload()}}#e(e){}},Bu=async t=>{document.body.removeChild(_e("#drop-target"));let e=new Qa;globalThis.reader=e,await e.open(t),_e("#editor").classList.remove("none")},og=t=>t.preventDefault(),sg=t=>{t.preventDefault();let e=Array.from(t.dataTransfer.items).find(n=>n.kind==="file");if(e){let n=e.webkitGetAsEntry();Bu(n.isFile?e.getAsFile():n).catch(r=>{})}},$u=_e("#drop-target");$u.addEventListener("drop",sg);$u.addEventListener("dragover",og);_e("#file-input").addEventListener("change",t=>Bu(t.target.files[0]).catch(e=>{}));_e("#file-button").addEventListener("click",()=>_e("#file-input").click());})();
