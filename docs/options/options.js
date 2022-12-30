(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // <define:process.env>
  var define_process_env_default = { BUILD_TIME: "2022-12-30T18:45:11.413Z", VERSION: "0.0.18", IMMERSIVE_TRANSLATE_INJECTED_CSS: ".immersive-translate-target-wrapper {\n  /* position: relative; */\n}\n.immersive-translate-target-translation-block-wrapper {\n  /* position: relative; */\n  /* top: 16px; */\n  white-space: pre-wrap !important;\n}\n\n.immersive-translate-target-translation-inline-wrapper {\n  white-space: pre-wrap !important;\n}\n.immersive-translate-target-translation-theme-underline {\n  border-bottom: 1px solid #72ece9 !important;\n}\n\n.immersive-translate-text {\n  font-size: 15px !important;\n}\n\n.immersive-translate-error {\n  color: red;\n}\n.immersive-translate-clickable-button {\n  align-items: normal;\n  background-color: rgba(0, 0, 0, 0);\n  border-color: rgb(0, 0, 238);\n  border-style: none;\n  box-sizing: content-box;\n  color: rgb(0, 0, 238);\n  cursor: pointer;\n  display: inline;\n  font: inherit;\n  height: auto;\n  padding: 0;\n  perspective-origin: 0 0;\n  text-align: start;\n  transform-origin: 0 0;\n  width: auto;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */\n  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */\n}\n.immersive-translate-loading {\n  margin-left: 6px;\n  top: 3px;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  border: 2px rgba(0, 0, 0, 0.25) solid;\n  border-top: 2px rgba(0, 0, 0, 1) solid;\n  border-radius: 50%;\n  -webkit-animation: spCircRot 0.6s infinite linear;\n  animation: immersive-translate-loading-animation 0.6s infinite linear;\n  position: relative;\n}\n.immersive-translate-tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.immersive-translate-tooltip .immersive-translate-tooltip-text {\n  display: inline-block;\n  visibility: hidden;\n  width: max-content;\n  max-width: 300px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 8px;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 10000000000;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.immersive-translate-tooltip:hover .immersive-translate-tooltip-text {\n  visibility: visible;\n}\n@-webkit-keyframes immersive-translate-loading-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@keyframes immersive-translate-loading-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n", IMMERSIVE_TRANSLATE_PICO_CSS: `@charset "UTF-8";
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
    --font-size: 16px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 16px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 18px;
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
`, IMMERSIVE_TRANSLATE_COMMON_CSS: "li.select-link.select-link:hover > ul {\n  display: none;\n}\nli.select-link.select-link > ul {\n  display: none;\n}\nli.select-link.select-link a:focus ~ ul {\n  display: none;\n}\n\nli.select-link.select-link a:active ~ ul {\n  display: none;\n}\nli.select-link-active.select-link-active > ul {\n  display: flex;\n}\nli.select-link-active.select-link-active:hover > ul {\n  display: flex;\n}\n\nli.select-link-active.select-link-active a:focus ~ ul {\n  display: flex;\n}\n\nli.select-link-active.select-link-active a:active ~ ul {\n  display: flex;\n}\nul.select-link-ul.select-link-ul {\n  right: 0px;\n  left: auto;\n}\n\na.select-link-selected {\n  background-color: var(--primary-focus);\n}\n", IMMERSIVE_TRANSLATE_POPUP_CSS: "#mount {\n  min-width: 250px;\n  height: auto;\n}\n\n.pt-4 {\n  padding-top: 24px;\n}\n.pl-5 {\n  padding-left: 48px;\n}\n.pl-2 {\n  padding-left: 8px;\n}\n.pl-4 {\n  padding-left: 24px;\n}\n.pt-2 {\n  padding-top: 8px;\n}\n\n.pb-2 {\n  padding-bottom: 8px;\n}\n\n.pr-5 {\n  padding-right: 48px;\n}\n.text-sm {\n  font-size: 14px;\n}\n\n.flex {\n  display: flex;\n}\n.justify-between {\n  justify-content: space-between;\n}\n\n.mb-2 {\n  margin-bottom: 8px;\n}\n.inline-block {\n  display: inline-block;\n}\n\n.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.mt-2 {\n  margin-top: 8px;\n}\n.pl-3 {\n  padding-left: 12px;\n}\n.pr-3 {\n  padding-right: 12px;\n}\n.p-3 {\n  padding: 12px;\n}\n.mt-4 {\n  margin-top: 24px;\n}\n.py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.left-auto {\n  left: auto !important;\n}\n\n.max-h-28 {\n  max-height: 112px;\n}\n.max-h-30 {\n  max-height: 120px;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.text-xs {\n  font-size: 12px;\n}\n", IMMERSIVE_TRANSLATE_POPUP_HTML: '<style>\n  html {\n    font-size: 17px;\n  }\n  .immersive-translate-popup-container {\n    position: fixed;\n    top: 100px;\n    right: 8px;\n    padding: 0;\n    z-index: 999999;\n  }\n  .immersive-translate-popup-btn {\n    background-color: #fff;\n    font-size: 18px;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n  }\n  #mount#mount {\n    display: none;\n    min-width: 250px;\n    height: auto;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    --font-size: 17px;\n    font-size: 17px;\n  }\n</style>\n\n<div\n  id="immersive-translate-popup-container"\n  class="immersive-translate-popup-container"\n>\n  <button\n    id="immersive-translate-popup-btn"\n    class="immersive-translate-popup-btn"\n  >\n    \u8BD1\n  </button>\n  <div class="immersive-translate-popup-mount" id="mount"></div>\n</div>\n', IMMERSIVE_TRANSLATE_POPUP_JS: 'const immersivePopupRoot = document.getElementById("immersive-translate-popup");\nconst shadowRoot = immersivePopupRoot.shadowRoot;\n\nconst root = shadowRoot.getElementById("immersive-translate-popup-container");\n\nconst btn = root.querySelector("#immersive-translate-popup-btn");\n\n// btn.addEventListener("click", handleButtonClick);\n\nconst mountContainer = root.querySelector("#mount");\n\nfunction showButton() {\n  // hidden mount container, and show btn\n  mountContainer.style.display = "none";\n  btn.style.display = "block";\n}\n\ndocument.addEventListener("click", (e) => {\n  if (e.target.id !== "immersive-translate-popup") {\n    showButton();\n  }\n});\n', OPTIONS_URL: "https://immersive-translate.owenyoung.com/options/", MOCK: "0", DEBUG: "0", IMMERSIVE_TRANSLATE_USERSCRIPT: "1" };

  // browser/web_polyfill.ts
  (function() {
    function getStorageJson(area) {
      const storageElement = document.getElementById(
        `immersive-translate-${area}-storage`
      );
      if (!storageElement) {
        throw new Error("Storage element not found");
      }
      const storageValue = storageElement.value;
      let storageJson = {};
      if (storageValue) {
        try {
          storageJson = JSON.parse(storageValue);
        } catch (e18) {
          console.error("Error parsing storage value", e18);
          throw e18;
        }
      }
      return storageJson;
    }
    function getStorageApi(area) {
      const storageApi = {
        get: (key) => {
          if (key === null) {
            return Promise.resolve(getStorageJson(area));
          }
          let allKeys = [];
          const storageJson = getStorageJson(area);
          if (typeof key === "string") {
            allKeys = [key];
          } else if (Array.isArray(key)) {
            allKeys = key;
          } else {
            allKeys = Object.keys(key);
          }
          const result = {};
          for (const key2 of allKeys) {
            result[key2] = storageJson[key2];
          }
          return Promise.resolve(result);
        },
        set: (obj) => {
          const storageJson = getStorageJson(area);
          for (const key in obj) {
            storageJson[key] = obj[key];
          }
          const storageElement = document.getElementById(
            `immersive-translate-${area}-storage`
          );
          if (!storageElement) {
            throw new Error("Storage element not found");
          }
          storageElement.value = JSON.stringify(storageJson);
          const event = new Event("change");
          storageElement.dispatchEvent(event);
          return Promise.resolve();
        }
      };
      return storageApi;
    }
    function getManifest() {
      const manifestElement = document.getElementById(
        "immersive-translate-manifest"
      );
      if (!manifestElement) {
        throw new Error("Manifest element not found");
      }
      const manifestValue = manifestElement.value;
      let manifestJson = {};
      if (manifestValue) {
        try {
          manifestJson = JSON.parse(manifestValue);
        } catch (e18) {
          console.error("Error parsing manifest value", e18);
          throw e18;
        }
        return manifestJson;
      } else {
        return {};
      }
    }
    const browser = {
      storage: {
        local: getStorageApi("local"),
        sync: getStorageApi("sync")
      },
      runtime: {
        getManifest,
        lastError: null,
        getURL: (path) => {
          return path;
        }
      }
    };
    globalThis.browser = browser;
  })();

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
  var { Deno: Deno2 } = globalThis;
  var noColor = typeof Deno2?.noColor === "boolean" ? Deno2.noColor : true;
  var enabled = !noColor;
  function setColorEnabled(value) {
    if (noColor) {
      return;
    }
    enabled = value;
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
  function clampAndTruncate(n21, max = 255, min = 0) {
    return Math.trunc(Math.max(Math.min(n21, max), min));
  }
  function rgb8(str, color) {
    return run(str, code([38, 5, clampAndTruncate(color)], 39));
  }
  function bgRgb8(str, color) {
    return run(str, code([48, 5, clampAndTruncate(color)], 49));
  }
  function rgb24(str, color) {
    if (typeof color === "number") {
      return run(
        str,
        code(
          [38, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
          39
        )
      );
    }
    return run(
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
    if (typeof color === "number") {
      return run(
        str,
        code(
          [48, 2, color >> 16 & 255, color >> 8 & 255, color & 255],
          49
        )
      );
    }
    return run(
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

  // https://esm.sh/stable/preact@10.11.0/deno/preact.js
  var P;
  var d;
  var $;
  var Y;
  var S;
  var F;
  var B;
  var T = {};
  var V = [];
  var Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function k(e18, t17) {
    for (var _2 in t17)
      e18[_2] = t17[_2];
    return e18;
  }
  function j(e18) {
    var t17 = e18.parentNode;
    t17 && t17.removeChild(e18);
  }
  function ee(e18, t17, _2) {
    var r13, l18, o21, s19 = {};
    for (o21 in t17)
      o21 == "key" ? r13 = t17[o21] : o21 == "ref" ? l18 = t17[o21] : s19[o21] = t17[o21];
    if (arguments.length > 2 && (s19.children = arguments.length > 3 ? P.call(arguments, 2) : _2), typeof e18 == "function" && e18.defaultProps != null)
      for (o21 in e18.defaultProps)
        s19[o21] === void 0 && (s19[o21] = e18.defaultProps[o21]);
    return w(e18, s19, r13, l18, null);
  }
  function w(e18, t17, _2, r13, l18) {
    var o21 = { type: e18, props: t17, key: _2, ref: r13, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l18 ?? ++$ };
    return l18 == null && d.vnode != null && d.vnode(o21), o21;
  }
  function L(e18) {
    return e18.children;
  }
  function U(e18, t17) {
    this.props = e18, this.context = t17;
  }
  function C(e18, t17) {
    if (t17 == null)
      return e18.__ ? C(e18.__, e18.__.__k.indexOf(e18) + 1) : null;
    for (var _2; t17 < e18.__k.length; t17++)
      if ((_2 = e18.__k[t17]) != null && _2.__e != null)
        return _2.__e;
    return typeof e18.type == "function" ? C(e18) : null;
  }
  function z(e18) {
    var t17, _2;
    if ((e18 = e18.__) != null && e18.__c != null) {
      for (e18.__e = e18.__c.base = null, t17 = 0; t17 < e18.__k.length; t17++)
        if ((_2 = e18.__k[t17]) != null && _2.__e != null) {
          e18.__e = e18.__c.base = _2.__e;
          break;
        }
      return z(e18);
    }
  }
  function M(e18) {
    (!e18.__d && (e18.__d = true) && S.push(e18) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
  }
  function D() {
    for (var e18; D.__r = S.length; )
      e18 = S.sort(function(t17, _2) {
        return t17.__v.__b - _2.__v.__b;
      }), S = [], e18.some(function(t17) {
        var _2, r13, l18, o21, s19, f13;
        t17.__d && (s19 = (o21 = (_2 = t17).__v).__e, (f13 = _2.__P) && (r13 = [], (l18 = k({}, o21)).__v = o21.__v + 1, W(f13, o21, l18, _2.__n, f13.ownerSVGElement !== void 0, o21.__h != null ? [s19] : null, r13, s19 ?? C(o21), o21.__h), K(r13, o21), o21.__e != s19 && z(o21)));
      });
  }
  function G(e18, t17, _2, r13, l18, o21, s19, f13, p20, a19) {
    var n21, h9, c26, i20, u14, b11, v6, y9 = r13 && r13.__k || V, g7 = y9.length;
    for (_2.__k = [], n21 = 0; n21 < t17.length; n21++)
      if ((i20 = _2.__k[n21] = (i20 = t17[n21]) == null || typeof i20 == "boolean" ? null : typeof i20 == "string" || typeof i20 == "number" || typeof i20 == "bigint" ? w(null, i20, null, null, i20) : Array.isArray(i20) ? w(L, { children: i20 }, null, null, null) : i20.__b > 0 ? w(i20.type, i20.props, i20.key, i20.ref ? i20.ref : null, i20.__v) : i20) != null) {
        if (i20.__ = _2, i20.__b = _2.__b + 1, (c26 = y9[n21]) === null || c26 && i20.key == c26.key && i20.type === c26.type)
          y9[n21] = void 0;
        else
          for (h9 = 0; h9 < g7; h9++) {
            if ((c26 = y9[h9]) && i20.key == c26.key && i20.type === c26.type) {
              y9[h9] = void 0;
              break;
            }
            c26 = null;
          }
        W(e18, i20, c26 = c26 || T, l18, o21, s19, f13, p20, a19), u14 = i20.__e, (h9 = i20.ref) && c26.ref != h9 && (v6 || (v6 = []), c26.ref && v6.push(c26.ref, null, i20), v6.push(h9, i20.__c || u14, i20)), u14 != null ? (b11 == null && (b11 = u14), typeof i20.type == "function" && i20.__k === c26.__k ? i20.__d = p20 = q(i20, p20, e18) : p20 = J(e18, i20, c26, y9, u14, p20), typeof _2.type == "function" && (_2.__d = p20)) : p20 && c26.__e == p20 && p20.parentNode != e18 && (p20 = C(c26));
      }
    for (_2.__e = b11, n21 = g7; n21--; )
      y9[n21] != null && (typeof _2.type == "function" && y9[n21].__e != null && y9[n21].__e == _2.__d && (_2.__d = C(r13, n21 + 1)), X(y9[n21], y9[n21]));
    if (v6)
      for (n21 = 0; n21 < v6.length; n21++)
        Q(v6[n21], v6[++n21], v6[++n21]);
  }
  function q(e18, t17, _2) {
    for (var r13, l18 = e18.__k, o21 = 0; l18 && o21 < l18.length; o21++)
      (r13 = l18[o21]) && (r13.__ = e18, t17 = typeof r13.type == "function" ? q(r13, t17, _2) : J(_2, r13, r13, l18, r13.__e, t17));
    return t17;
  }
  function J(e18, t17, _2, r13, l18, o21) {
    var s19, f13, p20;
    if (t17.__d !== void 0)
      s19 = t17.__d, t17.__d = void 0;
    else if (_2 == null || l18 != o21 || l18.parentNode == null)
      e:
        if (o21 == null || o21.parentNode !== e18)
          e18.appendChild(l18), s19 = null;
        else {
          for (f13 = o21, p20 = 0; (f13 = f13.nextSibling) && p20 < r13.length; p20 += 2)
            if (f13 == l18)
              break e;
          e18.insertBefore(l18, o21), s19 = o21;
        }
    return s19 !== void 0 ? s19 : l18.nextSibling;
  }
  function _e(e18, t17, _2, r13, l18) {
    var o21;
    for (o21 in _2)
      o21 === "children" || o21 === "key" || o21 in t17 || N(e18, o21, null, _2[o21], r13);
    for (o21 in t17)
      l18 && typeof t17[o21] != "function" || o21 === "children" || o21 === "key" || o21 === "value" || o21 === "checked" || _2[o21] === t17[o21] || N(e18, o21, t17[o21], _2[o21], r13);
  }
  function I(e18, t17, _2) {
    t17[0] === "-" ? e18.setProperty(t17, _2) : e18[t17] = _2 == null ? "" : typeof _2 != "number" || Z.test(t17) ? _2 : _2 + "px";
  }
  function N(e18, t17, _2, r13, l18) {
    var o21;
    e:
      if (t17 === "style")
        if (typeof _2 == "string")
          e18.style.cssText = _2;
        else {
          if (typeof r13 == "string" && (e18.style.cssText = r13 = ""), r13)
            for (t17 in r13)
              _2 && t17 in _2 || I(e18.style, t17, "");
          if (_2)
            for (t17 in _2)
              r13 && _2[t17] === r13[t17] || I(e18.style, t17, _2[t17]);
        }
      else if (t17[0] === "o" && t17[1] === "n")
        o21 = t17 !== (t17 = t17.replace(/Capture$/, "")), t17 = t17.toLowerCase() in e18 ? t17.toLowerCase().slice(2) : t17.slice(2), e18.l || (e18.l = {}), e18.l[t17 + o21] = _2, _2 ? r13 || e18.addEventListener(t17, o21 ? R : O, o21) : e18.removeEventListener(t17, o21 ? R : O, o21);
      else if (t17 !== "dangerouslySetInnerHTML") {
        if (l18)
          t17 = t17.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t17 !== "href" && t17 !== "list" && t17 !== "form" && t17 !== "tabIndex" && t17 !== "download" && t17 in e18)
          try {
            e18[t17] = _2 ?? "";
            break e;
          } catch {
          }
        typeof _2 == "function" || (_2 != null && (_2 !== false || t17[0] === "a" && t17[1] === "r") ? e18.setAttribute(t17, _2) : e18.removeAttribute(t17));
      }
  }
  function O(e18) {
    this.l[e18.type + false](d.event ? d.event(e18) : e18);
  }
  function R(e18) {
    this.l[e18.type + true](d.event ? d.event(e18) : e18);
  }
  function W(e18, t17, _2, r13, l18, o21, s19, f13, p20) {
    var a19, n21, h9, c26, i20, u14, b11, v6, y9, g7, x15, H6, E5, m15 = t17.type;
    if (t17.constructor !== void 0)
      return null;
    _2.__h != null && (p20 = _2.__h, f13 = t17.__e = _2.__e, t17.__h = null, o21 = [f13]), (a19 = d.__b) && a19(t17);
    try {
      e:
        if (typeof m15 == "function") {
          if (v6 = t17.props, y9 = (a19 = m15.contextType) && r13[a19.__c], g7 = a19 ? y9 ? y9.props.value : a19.__ : r13, _2.__c ? b11 = (n21 = t17.__c = _2.__c).__ = n21.__E : ("prototype" in m15 && m15.prototype.render ? t17.__c = n21 = new m15(v6, g7) : (t17.__c = n21 = new U(v6, g7), n21.constructor = m15, n21.render = oe), y9 && y9.sub(n21), n21.props = v6, n21.state || (n21.state = {}), n21.context = g7, n21.__n = r13, h9 = n21.__d = true, n21.__h = []), n21.__s == null && (n21.__s = n21.state), m15.getDerivedStateFromProps != null && (n21.__s == n21.state && (n21.__s = k({}, n21.__s)), k(n21.__s, m15.getDerivedStateFromProps(v6, n21.__s))), c26 = n21.props, i20 = n21.state, h9)
            m15.getDerivedStateFromProps == null && n21.componentWillMount != null && n21.componentWillMount(), n21.componentDidMount != null && n21.__h.push(n21.componentDidMount);
          else {
            if (m15.getDerivedStateFromProps == null && v6 !== c26 && n21.componentWillReceiveProps != null && n21.componentWillReceiveProps(v6, g7), !n21.__e && n21.shouldComponentUpdate != null && n21.shouldComponentUpdate(v6, n21.__s, g7) === false || t17.__v === _2.__v) {
              n21.props = v6, n21.state = n21.__s, t17.__v !== _2.__v && (n21.__d = false), n21.__v = t17, t17.__e = _2.__e, t17.__k = _2.__k, t17.__k.forEach(function(A5) {
                A5 && (A5.__ = t17);
              }), n21.__h.length && s19.push(n21);
              break e;
            }
            n21.componentWillUpdate != null && n21.componentWillUpdate(v6, n21.__s, g7), n21.componentDidUpdate != null && n21.__h.push(function() {
              n21.componentDidUpdate(c26, i20, u14);
            });
          }
          if (n21.context = g7, n21.props = v6, n21.__v = t17, n21.__P = e18, x15 = d.__r, H6 = 0, "prototype" in m15 && m15.prototype.render)
            n21.state = n21.__s, n21.__d = false, x15 && x15(t17), a19 = n21.render(n21.props, n21.state, n21.context);
          else
            do
              n21.__d = false, x15 && x15(t17), a19 = n21.render(n21.props, n21.state, n21.context), n21.state = n21.__s;
            while (n21.__d && ++H6 < 25);
          n21.state = n21.__s, n21.getChildContext != null && (r13 = k(k({}, r13), n21.getChildContext())), h9 || n21.getSnapshotBeforeUpdate == null || (u14 = n21.getSnapshotBeforeUpdate(c26, i20)), E5 = a19 != null && a19.type === L && a19.key == null ? a19.props.children : a19, G(e18, Array.isArray(E5) ? E5 : [E5], t17, _2, r13, l18, o21, s19, f13, p20), n21.base = t17.__e, t17.__h = null, n21.__h.length && s19.push(n21), b11 && (n21.__E = n21.__ = null), n21.__e = false;
        } else
          o21 == null && t17.__v === _2.__v ? (t17.__k = _2.__k, t17.__e = _2.__e) : t17.__e = ne(_2.__e, t17, _2, r13, l18, o21, s19, p20);
      (a19 = d.diffed) && a19(t17);
    } catch (A5) {
      t17.__v = null, (p20 || o21 != null) && (t17.__e = f13, t17.__h = !!p20, o21[o21.indexOf(f13)] = null), d.__e(A5, t17, _2);
    }
  }
  function K(e18, t17) {
    d.__c && d.__c(t17, e18), e18.some(function(_2) {
      try {
        e18 = _2.__h, _2.__h = [], e18.some(function(r13) {
          r13.call(_2);
        });
      } catch (r13) {
        d.__e(r13, _2.__v);
      }
    });
  }
  function ne(e18, t17, _2, r13, l18, o21, s19, f13) {
    var p20, a19, n21, h9 = _2.props, c26 = t17.props, i20 = t17.type, u14 = 0;
    if (i20 === "svg" && (l18 = true), o21 != null) {
      for (; u14 < o21.length; u14++)
        if ((p20 = o21[u14]) && "setAttribute" in p20 == !!i20 && (i20 ? p20.localName === i20 : p20.nodeType === 3)) {
          e18 = p20, o21[u14] = null;
          break;
        }
    }
    if (e18 == null) {
      if (i20 === null)
        return document.createTextNode(c26);
      e18 = l18 ? document.createElementNS("http://www.w3.org/2000/svg", i20) : document.createElement(i20, c26.is && c26), o21 = null, f13 = false;
    }
    if (i20 === null)
      h9 === c26 || f13 && e18.data === c26 || (e18.data = c26);
    else {
      if (o21 = o21 && P.call(e18.childNodes), a19 = (h9 = _2.props || T).dangerouslySetInnerHTML, n21 = c26.dangerouslySetInnerHTML, !f13) {
        if (o21 != null)
          for (h9 = {}, u14 = 0; u14 < e18.attributes.length; u14++)
            h9[e18.attributes[u14].name] = e18.attributes[u14].value;
        (n21 || a19) && (n21 && (a19 && n21.__html == a19.__html || n21.__html === e18.innerHTML) || (e18.innerHTML = n21 && n21.__html || ""));
      }
      if (_e(e18, c26, h9, l18, f13), n21)
        t17.__k = [];
      else if (u14 = t17.props.children, G(e18, Array.isArray(u14) ? u14 : [u14], t17, _2, r13, l18 && i20 !== "foreignObject", o21, s19, o21 ? o21[0] : _2.__k && C(_2, 0), f13), o21 != null)
        for (u14 = o21.length; u14--; )
          o21[u14] != null && j(o21[u14]);
      f13 || ("value" in c26 && (u14 = c26.value) !== void 0 && (u14 !== e18.value || i20 === "progress" && !u14 || i20 === "option" && u14 !== h9.value) && N(e18, "value", u14, h9.value, false), "checked" in c26 && (u14 = c26.checked) !== void 0 && u14 !== e18.checked && N(e18, "checked", u14, h9.checked, false));
    }
    return e18;
  }
  function Q(e18, t17, _2) {
    try {
      typeof e18 == "function" ? e18(t17) : e18.current = t17;
    } catch (r13) {
      d.__e(r13, _2);
    }
  }
  function X(e18, t17, _2) {
    var r13, l18;
    if (d.unmount && d.unmount(e18), (r13 = e18.ref) && (r13.current && r13.current !== e18.__e || Q(r13, null, t17)), (r13 = e18.__c) != null) {
      if (r13.componentWillUnmount)
        try {
          r13.componentWillUnmount();
        } catch (o21) {
          d.__e(o21, t17);
        }
      r13.base = r13.__P = null, e18.__c = void 0;
    }
    if (r13 = e18.__k)
      for (l18 = 0; l18 < r13.length; l18++)
        r13[l18] && X(r13[l18], t17, typeof e18.type != "function");
    _2 || e18.__e == null || j(e18.__e), e18.__ = e18.__e = e18.__d = void 0;
  }
  function oe(e18, t17, _2) {
    return this.constructor(e18, _2);
  }
  function re(e18, t17, _2) {
    var r13, l18, o21;
    d.__ && d.__(e18, t17), l18 = (r13 = typeof _2 == "function") ? null : _2 && _2.__k || t17.__k, o21 = [], W(t17, e18 = (!r13 && _2 || t17).__k = ee(L, null, [e18]), l18 || T, T, t17.ownerSVGElement !== void 0, !r13 && _2 ? [_2] : l18 ? null : t17.firstChild ? P.call(t17.childNodes) : null, o21, !r13 && _2 ? _2 : l18 ? l18.__e : t17.firstChild, r13), K(o21, e18);
  }
  function ce(e18, t17) {
    var _2 = { __c: t17 = "__cC" + B++, __: e18, Consumer: function(r13, l18) {
      return r13.children(l18);
    }, Provider: function(r13) {
      var l18, o21;
      return this.getChildContext || (l18 = [], (o21 = {})[t17] = this, this.getChildContext = function() {
        return o21;
      }, this.shouldComponentUpdate = function(s19) {
        this.props.value !== s19.value && l18.some(M);
      }, this.sub = function(s19) {
        l18.push(s19);
        var f13 = s19.componentWillUnmount;
        s19.componentWillUnmount = function() {
          l18.splice(l18.indexOf(s19), 1), f13 && f13.call(s19);
        };
      }), r13.children;
    } };
    return _2.Provider.__ = _2.Consumer.contextType = _2;
  }
  P = V.slice, d = { __e: function(e18, t17, _2, r13) {
    for (var l18, o21, s19; t17 = t17.__; )
      if ((l18 = t17.__c) && !l18.__)
        try {
          if ((o21 = l18.constructor) && o21.getDerivedStateFromError != null && (l18.setState(o21.getDerivedStateFromError(e18)), s19 = l18.__d), l18.componentDidCatch != null && (l18.componentDidCatch(e18, r13 || {}), s19 = l18.__d), s19)
            return l18.__E = l18;
        } catch (f13) {
          e18 = f13;
        }
    throw e18;
  } }, $ = 0, Y = function(e18) {
    return e18 != null && e18.constructor === void 0;
  }, U.prototype.setState = function(e18, t17) {
    var _2;
    _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e18 == "function" && (e18 = e18(k({}, _2), this.props)), e18 && k(_2, e18), e18 != null && this.__v && (t17 && this.__h.push(t17), M(this));
  }, U.prototype.forceUpdate = function(e18) {
    this.__v && (this.__e = true, e18 && this.__h.push(e18), M(this));
  }, U.prototype.render = L, S = [], D.__r = 0, B = 0;

  // https://esm.sh/stable/preact@10.11.0/deno/hooks.js
  var i;
  var n;
  var d2;
  var N2;
  var f = 0;
  var q2 = [];
  var l = [];
  var V2 = d.__b;
  var g = d.__r;
  var b = d.diffed;
  var C2 = d.__c;
  var A = d.unmount;
  function a(_2, t17) {
    d.__h && d.__h(n, _2, f || t17), f = 0;
    var u14 = n.__H || (n.__H = { __: [], __h: [] });
    return _2 >= u14.__.length && u14.__.push({ __V: l }), u14.__[_2];
  }
  function P2(_2) {
    return f = 1, B2(D2, _2);
  }
  function B2(_2, t17, u14) {
    var o21 = a(i++, 2);
    if (o21.t = _2, !o21.__c && (o21.__ = [u14 ? u14(t17) : D2(void 0, t17), function(v6) {
      var s19 = o21.__N ? o21.__N[0] : o21.__[0], h9 = o21.t(s19, v6);
      s19 !== h9 && (o21.__N = [h9, o21.__[1]], o21.__c.setState({}));
    }], o21.__c = n, !n.u)) {
      n.u = true;
      var r13 = n.shouldComponentUpdate;
      n.shouldComponentUpdate = function(v6, s19, h9) {
        if (!o21.__c.__H)
          return true;
        var y9 = o21.__c.__H.__.filter(function(c26) {
          return c26.__c;
        });
        if (y9.every(function(c26) {
          return !c26.__N;
        }))
          return !r13 || r13.call(this, v6, s19, h9);
        var E5 = false;
        return y9.forEach(function(c26) {
          if (c26.__N) {
            var k7 = c26.__[0];
            c26.__ = c26.__N, c26.__N = void 0, k7 !== c26.__[0] && (E5 = true);
          }
        }), !!E5 && (!r13 || r13.call(this, v6, s19, h9));
      };
    }
    return o21.__N || o21.__;
  }
  function j2(_2, t17) {
    var u14 = a(i++, 3);
    !d.__s && H(u14.__H, t17) && (u14.__ = _2, u14.i = t17, n.__H.__h.push(u14));
  }
  function w2(_2) {
    return f = 5, x(function() {
      return { current: _2 };
    }, []);
  }
  function x(_2, t17) {
    var u14 = a(i++, 7);
    return H(u14.__H, t17) ? (u14.__V = _2(), u14.i = t17, u14.__h = _2, u14.__V) : u14.__;
  }
  function L2(_2, t17) {
    return f = 8, x(function() {
      return _2;
    }, t17);
  }
  function M2(_2) {
    var t17 = n.context[_2.__c], u14 = a(i++, 9);
    return u14.c = _2, t17 ? (u14.__ == null && (u14.__ = true, t17.sub(n)), t17.props.value) : _2.__;
  }
  function R2() {
    for (var _2; _2 = q2.shift(); )
      if (_2.__P && _2.__H)
        try {
          _2.__H.__h.forEach(m), _2.__H.__h.forEach(p), _2.__H.__h = [];
        } catch (t17) {
          _2.__H.__h = [], d.__e(t17, _2.__v);
        }
  }
  d.__b = function(_2) {
    typeof _2.type != "function" || _2.o || _2.type === L ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n = null, V2 && V2(_2);
  }, d.__r = function(_2) {
    g && g(_2), i = 0;
    var t17 = (n = _2.__c).__H;
    t17 && (d2 === n ? (t17.__h = [], n.__h = [], t17.__.forEach(function(u14) {
      u14.__N && (u14.__ = u14.__N), u14.__V = l, u14.__N = u14.i = void 0;
    })) : (t17.__h.forEach(m), t17.__h.forEach(p), t17.__h = [])), d2 = n;
  }, d.diffed = function(_2) {
    b && b(_2);
    var t17 = _2.__c;
    t17 && t17.__H && (t17.__H.__h.length && (q2.push(t17) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t17.__H.__.forEach(function(u14) {
      u14.i && (u14.__H = u14.i), u14.__V !== l && (u14.__ = u14.__V), u14.i = void 0, u14.__V = l;
    })), d2 = n = null;
  }, d.__c = function(_2, t17) {
    t17.some(function(u14) {
      try {
        u14.__h.forEach(m), u14.__h = u14.__h.filter(function(o21) {
          return !o21.__ || p(o21);
        });
      } catch (o21) {
        t17.some(function(r13) {
          r13.__h && (r13.__h = []);
        }), t17 = [], d.__e(o21, u14.__v);
      }
    }), C2 && C2(_2, t17);
  }, d.unmount = function(_2) {
    A && A(_2);
    var t17, u14 = _2.__c;
    u14 && u14.__H && (u14.__H.__.forEach(function(o21) {
      try {
        m(o21);
      } catch (r13) {
        t17 = r13;
      }
    }), u14.__H = void 0, t17 && d.__e(t17, u14.__v));
  };
  var F2 = typeof requestAnimationFrame == "function";
  function S2(_2) {
    var t17, u14 = function() {
      clearTimeout(o21), F2 && cancelAnimationFrame(t17), setTimeout(_2);
    }, o21 = setTimeout(u14, 100);
    F2 && (t17 = requestAnimationFrame(u14));
  }
  function m(_2) {
    var t17 = n, u14 = _2.__c;
    typeof u14 == "function" && (_2.__c = void 0, u14()), n = t17;
  }
  function p(_2) {
    var t17 = n;
    _2.__c = _2.__(), n = t17;
  }
  function H(_2, t17) {
    return !_2 || _2.length !== t17.length || t17.some(function(u14, o21) {
      return u14 !== _2[o21];
    });
  }
  function D2(_2, t17) {
    return typeof t17 == "function" ? t17(_2) : t17;
  }

  // https://esm.sh/v102/memoize-one@6.0.0/deno/memoize-one.js
  var s = Number.isNaN || function(r13) {
    return typeof r13 == "number" && r13 !== r13;
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isFunction.js
  function t(n21) {
    return typeof n21 == "function";
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/createErrorClass.js
  function e(o21) {
    let r13 = o21((t17) => {
      Error.call(t17), t17.stack = new Error().stack;
    });
    return r13.prototype = Object.create(Error.prototype), r13.prototype.constructor = r13, r13;
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/UnsubscriptionError.js
  var p2 = e((i20) => function(r13) {
    i20(this), this.message = r13 ? `${r13.length} errors occurred during unsubscription:
${r13.map((n21, s19) => `${s19 + 1}) ${n21.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = r13;
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/arrRemove.js
  function o2(e18, n21) {
    if (e18) {
      let i20 = e18.indexOf(n21);
      0 <= i20 && e18.splice(i20, 1);
    }
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Subscription.js
  var e2 = class {
    constructor(i20) {
      this.initialTeardown = i20, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    unsubscribe() {
      let i20;
      if (!this.closed) {
        this.closed = true;
        let { _parentage: s19 } = this;
        if (s19)
          if (this._parentage = null, Array.isArray(s19))
            for (let t17 of s19)
              t17.remove(this);
          else
            s19.remove(this);
        let { initialTeardown: c26 } = this;
        if (t(c26))
          try {
            c26();
          } catch (t17) {
            i20 = t17 instanceof p2 ? t17.errors : [t17];
          }
        let { _finalizers: f13 } = this;
        if (f13) {
          this._finalizers = null;
          for (let t17 of f13)
            try {
              h(t17);
            } catch (o21) {
              i20 = i20 ?? [], o21 instanceof p2 ? i20 = [...i20, ...o21.errors] : i20.push(o21);
            }
        }
        if (i20)
          throw new p2(i20);
      }
    }
    add(i20) {
      var s19;
      if (i20 && i20 !== this)
        if (this.closed)
          h(i20);
        else {
          if (i20 instanceof e2) {
            if (i20.closed || i20._hasParent(this))
              return;
            i20._addParent(this);
          }
          (this._finalizers = (s19 = this._finalizers) !== null && s19 !== void 0 ? s19 : []).push(i20);
        }
    }
    _hasParent(i20) {
      let { _parentage: s19 } = this;
      return s19 === i20 || Array.isArray(s19) && s19.includes(i20);
    }
    _addParent(i20) {
      let { _parentage: s19 } = this;
      this._parentage = Array.isArray(s19) ? (s19.push(i20), s19) : s19 ? [s19, i20] : i20;
    }
    _removeParent(i20) {
      let { _parentage: s19 } = this;
      s19 === i20 ? this._parentage = null : Array.isArray(s19) && o2(s19, i20);
    }
    remove(i20) {
      let { _finalizers: s19 } = this;
      s19 && o2(s19, i20), i20 instanceof e2 && i20._removeParent(this);
    }
  };
  e2.EMPTY = (() => {
    let r13 = new e2();
    return r13.closed = true, r13;
  })();
  var p3 = e2.EMPTY;
  function d3(r13) {
    return r13 instanceof e2 || r13 && "closed" in r13 && t(r13.remove) && t(r13.add) && t(r13.unsubscribe);
  }
  function h(r13) {
    t(r13) ? r13() : r13.unsubscribe();
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/config.js
  var e3 = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/timeoutProvider.js
  var u = { setTimeout(t17, e18, ...i20) {
    let { delegate: o21 } = u;
    return o21?.setTimeout ? o21.setTimeout(t17, e18, ...i20) : setTimeout(t17, e18, ...i20);
  }, clearTimeout(t17) {
    let { delegate: e18 } = u;
    return (e18?.clearTimeout || clearTimeout)(t17);
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/reportUnhandledError.js
  function m2(o21) {
    u.setTimeout(() => {
      let { onUnhandledError: r13 } = e3;
      if (r13)
        r13(o21);
      else
        throw o21;
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/noop.js
  function o3() {
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/NotificationFactories.js
  var o4 = (() => e4("C", void 0, void 0))();
  function r(n21) {
    return e4("E", void 0, n21);
  }
  function f2(n21) {
    return e4("N", n21, void 0);
  }
  function e4(n21, t17, i20) {
    return { kind: n21, value: t17, error: i20 };
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/errorContext.js
  var r2 = null;
  function u2(o21) {
    if (e3.useDeprecatedSynchronousErrorHandling) {
      let e18 = !r2;
      if (e18 && (r2 = { errorThrown: false, error: null }), o21(), e18) {
        let { errorThrown: t17, error: i20 } = r2;
        if (r2 = null, t17)
          throw i20;
      }
    } else
      o21();
  }
  function c(o21) {
    e3.useDeprecatedSynchronousErrorHandling && r2 && (r2.errorThrown = true, r2.error = o21);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Subscriber.js
  var l2 = class extends e2 {
    constructor(t17) {
      super(), this.isStopped = false, t17 ? (this.destination = t17, d3(t17) && t17.add(this)) : this.destination = I2;
    }
    static create(t17, i20, o21) {
      return new u3(t17, i20, o21);
    }
    next(t17) {
      this.isStopped ? p4(f2(t17), this) : this._next(t17);
    }
    error(t17) {
      this.isStopped ? p4(r(t17), this) : (this.isStopped = true, this._error(t17));
    }
    complete() {
      this.isStopped ? p4(o4, this) : (this.isStopped = true, this._complete());
    }
    unsubscribe() {
      this.closed || (this.isStopped = true, super.unsubscribe(), this.destination = null);
    }
    _next(t17) {
      this.destination.next(t17);
    }
    _error(t17) {
      try {
        this.destination.error(t17);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  };
  var w3 = Function.prototype.bind;
  function c2(e18, t17) {
    return w3.call(e18, t17);
  }
  var d4 = class {
    constructor(t17) {
      this.partialObserver = t17;
    }
    next(t17) {
      let { partialObserver: i20 } = this;
      if (i20.next)
        try {
          i20.next(t17);
        } catch (o21) {
          s2(o21);
        }
    }
    error(t17) {
      let { partialObserver: i20 } = this;
      if (i20.error)
        try {
          i20.error(t17);
        } catch (o21) {
          s2(o21);
        }
      else
        s2(t17);
    }
    complete() {
      let { partialObserver: t17 } = this;
      if (t17.complete)
        try {
          t17.complete();
        } catch (i20) {
          s2(i20);
        }
    }
  };
  var u3 = class extends l2 {
    constructor(t17, i20, o21) {
      super();
      let r13;
      if (t(t17) || !t17)
        r13 = { next: t17 ?? void 0, error: i20 ?? void 0, complete: o21 ?? void 0 };
      else {
        let n21;
        this && e3.useDeprecatedNextContext ? (n21 = Object.create(t17), n21.unsubscribe = () => this.unsubscribe(), r13 = { next: t17.next && c2(t17.next, n21), error: t17.error && c2(t17.error, n21), complete: t17.complete && c2(t17.complete, n21) }) : r13 = t17;
      }
      this.destination = new d4(r13);
    }
  };
  function s2(e18) {
    e3.useDeprecatedSynchronousErrorHandling ? c(e18) : m2(e18);
  }
  function F3(e18) {
    throw e18;
  }
  function p4(e18, t17) {
    let { onStoppedNotification: i20 } = e3;
    i20 && u.setTimeout(() => i20(e18, t17));
  }
  var I2 = { closed: true, next: o3, error: F3, complete: o3 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/symbol/observable.js
  var o5 = (() => typeof Symbol == "function" && Symbol.observable || "@@observable")();

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/identity.js
  function n2(t17) {
    return t17;
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/pipe.js
  function p5(r13) {
    return r13.length === 0 ? n2 : r13.length === 1 ? r13[0] : function(e18) {
      return r13.reduce((t17, i20) => i20(t17), e18);
    };
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Observable.js
  var o6 = class {
    constructor(r13) {
      r13 && (this._subscribe = r13);
    }
    lift(r13) {
      let t17 = new o6();
      return t17.source = this, t17.operator = r13, t17;
    }
    subscribe(r13, t17, n21) {
      let s19 = w4(r13) ? r13 : new u3(r13, t17, n21);
      return u2(() => {
        let { operator: e18, source: c26 } = this;
        s19.add(e18 ? e18.call(s19, c26) : c26 ? this._subscribe(s19) : this._trySubscribe(s19));
      }), s19;
    }
    _trySubscribe(r13) {
      try {
        return this._subscribe(r13);
      } catch (t17) {
        r13.error(t17);
      }
    }
    forEach(r13, t17) {
      return t17 = f3(t17), new t17((n21, s19) => {
        let e18 = new u3({ next: (c26) => {
          try {
            r13(c26);
          } catch (m15) {
            s19(m15), e18.unsubscribe();
          }
        }, error: s19, complete: n21 });
        this.subscribe(e18);
      });
    }
    _subscribe(r13) {
      var t17;
      return (t17 = this.source) === null || t17 === void 0 ? void 0 : t17.subscribe(r13);
    }
    [o5]() {
      return this;
    }
    pipe(...r13) {
      return p5(r13)(this);
    }
    toPromise(r13) {
      return r13 = f3(r13), new r13((t17, n21) => {
        let s19;
        this.subscribe((e18) => s19 = e18, (e18) => n21(e18), () => t17(s19));
      });
    }
  };
  o6.create = (i20) => new o6(i20);
  function f3(i20) {
    var r13;
    return (r13 = i20 ?? e3.Promise) !== null && r13 !== void 0 ? r13 : Promise;
  }
  function d5(i20) {
    return i20 && t(i20.next) && t(i20.error) && t(i20.complete);
  }
  function w4(i20) {
    return i20 && i20 instanceof l2 || d5(i20) && d3(i20);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/lift.js
  function o7(t17) {
    return t(t17?.lift);
  }
  function l3(t17) {
    return (r13) => {
      if (o7(r13))
        return r13.lift(function(n21) {
          try {
            return t17(n21, this);
          } catch (i20) {
            this.error(i20);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/OperatorSubscriber.js
  function a2(n21, r13, s19, i20, c26) {
    return new u4(n21, r13, s19, i20, c26);
  }
  var u4 = class extends l2 {
    constructor(r13, s19, i20, c26, h9, o21) {
      super(r13), this.onFinalize = h9, this.shouldUnsubscribe = o21, this._next = s19 ? function(e18) {
        try {
          s19(e18);
        } catch (t17) {
          r13.error(t17);
        }
      } : super._next, this._error = c26 ? function(e18) {
        try {
          c26(e18);
        } catch (t17) {
          r13.error(t17);
        } finally {
          this.unsubscribe();
        }
      } : super._error, this._complete = i20 ? function() {
        try {
          i20();
        } catch (e18) {
          r13.error(e18);
        } finally {
          this.unsubscribe();
        }
      } : super._complete;
    }
    unsubscribe() {
      var r13;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        let { closed: s19 } = this;
        super.unsubscribe(), !s19 && ((r13 = this.onFinalize) === null || r13 === void 0 || r13.call(this));
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/performanceTimestampProvider.js
  var e5 = { now() {
    return (e5.delegate || performance).now();
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/animationFrameProvider.js
  var t2 = { schedule(n21) {
    let e18 = requestAnimationFrame, i20 = cancelAnimationFrame, { delegate: a19 } = t2;
    a19 && (e18 = a19.requestAnimationFrame, i20 = a19.cancelAnimationFrame);
    let r13 = e18((o21) => {
      i20 = void 0, n21(o21);
    });
    return new e2(() => i20?.(r13));
  }, requestAnimationFrame(...n21) {
    let { delegate: e18 } = t2;
    return (e18?.requestAnimationFrame || requestAnimationFrame)(...n21);
  }, cancelAnimationFrame(...n21) {
    let { delegate: e18 } = t2;
    return (e18?.cancelAnimationFrame || cancelAnimationFrame)(...n21);
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/dom/animationFrames.js
  function m3(n21) {
    return new o6((r13) => {
      let t17 = n21 || e5, c26 = t17.now(), o21 = 0, e18 = () => {
        r13.closed || (o21 = t2.requestAnimationFrame((s19) => {
          o21 = 0;
          let a19 = t17.now();
          r13.next({ timestamp: n21 ? a19 : s19, elapsed: a19 - c26 }), e18();
        }));
      };
      return e18(), () => {
        o21 && t2.cancelAnimationFrame(o21);
      };
    });
  }
  var p6 = m3();

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/ObjectUnsubscribedError.js
  var t3 = e((r13) => function() {
    r13(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Subject.js
  var i2 = class extends o6 {
    constructor() {
      super(), this.closed = false, this.currentObservers = null, this.observers = [], this.isStopped = false, this.hasError = false, this.thrownError = null;
    }
    lift(r13) {
      let e18 = new o8(this, this);
      return e18.operator = r13, e18;
    }
    _throwIfClosed() {
      if (this.closed)
        throw new t3();
    }
    next(r13) {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.currentObservers || (this.currentObservers = Array.from(this.observers));
          for (let e18 of this.currentObservers)
            e18.next(r13);
        }
      });
    }
    error(r13) {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.hasError = this.isStopped = true, this.thrownError = r13;
          let { observers: e18 } = this;
          for (; e18.length; )
            e18.shift().error(r13);
        }
      });
    }
    complete() {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.isStopped = true;
          let { observers: r13 } = this;
          for (; r13.length; )
            r13.shift().complete();
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }
    get observed() {
      var r13;
      return ((r13 = this.observers) === null || r13 === void 0 ? void 0 : r13.length) > 0;
    }
    _trySubscribe(r13) {
      return this._throwIfClosed(), super._trySubscribe(r13);
    }
    _subscribe(r13) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(r13), this._innerSubscribe(r13);
    }
    _innerSubscribe(r13) {
      let { hasError: e18, isStopped: s19, observers: t17 } = this;
      return e18 || s19 ? p3 : (this.currentObservers = null, t17.push(r13), new e2(() => {
        this.currentObservers = null, o2(t17, r13);
      }));
    }
    _checkFinalizedStatuses(r13) {
      let { hasError: e18, thrownError: s19, isStopped: t17 } = this;
      e18 ? r13.error(s19) : t17 && r13.complete();
    }
    asObservable() {
      let r13 = new o6();
      return r13.source = this, r13;
    }
  };
  i2.create = (n21, r13) => new o8(n21, r13);
  var o8 = class extends i2 {
    constructor(r13, e18) {
      super(), this.destination = r13, this.source = e18;
    }
    next(r13) {
      var e18, s19;
      (s19 = (e18 = this.destination) === null || e18 === void 0 ? void 0 : e18.next) === null || s19 === void 0 || s19.call(e18, r13);
    }
    error(r13) {
      var e18, s19;
      (s19 = (e18 = this.destination) === null || e18 === void 0 ? void 0 : e18.error) === null || s19 === void 0 || s19.call(e18, r13);
    }
    complete() {
      var r13, e18;
      (e18 = (r13 = this.destination) === null || r13 === void 0 ? void 0 : r13.complete) === null || e18 === void 0 || e18.call(r13);
    }
    _subscribe(r13) {
      var e18, s19;
      return (s19 = (e18 = this.source) === null || e18 === void 0 ? void 0 : e18.subscribe(r13)) !== null && s19 !== void 0 ? s19 : p3;
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/dateTimestampProvider.js
  var e6 = { now() {
    return (e6.delegate || Date).now();
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/Action.js
  var e7 = class extends e2 {
    constructor(r13, s19) {
      super();
    }
    schedule(r13, s19 = 0) {
      return this;
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/intervalProvider.js
  var n3 = { setInterval(t17, e18, ...l18) {
    let { delegate: r13 } = n3;
    return r13?.setInterval ? r13.setInterval(t17, e18, ...l18) : setInterval(t17, e18, ...l18);
  }, clearInterval(t17) {
    let { delegate: e18 } = n3;
    return (e18?.clearInterval || clearInterval)(t17);
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AsyncAction.js
  var l5 = class extends e7 {
    constructor(t17, e18) {
      super(t17, e18), this.scheduler = t17, this.work = e18, this.pending = false;
    }
    schedule(t17, e18 = 0) {
      var s19;
      if (this.closed)
        return this;
      this.state = t17;
      let i20 = this.id, r13 = this.scheduler;
      return i20 != null && (this.id = this.recycleAsyncId(r13, i20, e18)), this.pending = true, this.delay = e18, this.id = (s19 = this.id) !== null && s19 !== void 0 ? s19 : this.requestAsyncId(r13, this.id, e18), this;
    }
    requestAsyncId(t17, e18, s19 = 0) {
      return n3.setInterval(t17.flush.bind(t17, this), s19);
    }
    recycleAsyncId(t17, e18, s19 = 0) {
      if (s19 != null && this.delay === s19 && this.pending === false)
        return e18;
      e18 != null && n3.clearInterval(e18);
    }
    execute(t17, e18) {
      if (this.closed)
        return new Error("executing a cancelled action");
      this.pending = false;
      let s19 = this._execute(t17, e18);
      if (s19)
        return s19;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(t17, e18) {
      let s19 = false, i20;
      try {
        this.work(t17);
      } catch (r13) {
        s19 = true, i20 = r13 || new Error("Scheduled action threw falsy error");
      }
      if (s19)
        return this.unsubscribe(), i20;
    }
    unsubscribe() {
      if (!this.closed) {
        let { id: t17, scheduler: e18 } = this, { actions: s19 } = e18;
        this.work = this.state = this.scheduler = null, this.pending = false, o2(s19, this), t17 != null && (this.id = this.recycleAsyncId(e18, t17, null)), this.delay = null, super.unsubscribe();
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/Immediate.js
  var s3 = 1;
  var r3;
  var t4 = {};
  function l6(e18) {
    return e18 in t4 ? (delete t4[e18], true) : false;
  }
  var o9 = { setImmediate(e18) {
    let n21 = s3++;
    return t4[n21] = true, r3 || (r3 = Promise.resolve()), r3.then(() => l6(n21) && e18()), n21;
  }, clearImmediate(e18) {
    l6(e18);
  } };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/immediateProvider.js
  var { setImmediate: i3, clearImmediate: a3 } = o9;
  var d6 = { setImmediate(...t17) {
    let { delegate: e18 } = d6;
    return (e18?.setImmediate || i3)(...t17);
  }, clearImmediate(t17) {
    let { delegate: e18 } = d6;
    return (e18?.clearImmediate || a3)(t17);
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AsapAction.js
  var u5 = class extends l5 {
    constructor(n21, t17) {
      super(n21, t17), this.scheduler = n21, this.work = t17;
    }
    requestAsyncId(n21, t17, e18 = 0) {
      return e18 !== null && e18 > 0 ? super.requestAsyncId(n21, t17, e18) : (n21.actions.push(this), n21._scheduled || (n21._scheduled = d6.setImmediate(n21.flush.bind(n21, void 0))));
    }
    recycleAsyncId(n21, t17, e18 = 0) {
      var i20;
      if (e18 != null ? e18 > 0 : this.delay > 0)
        return super.recycleAsyncId(n21, t17, e18);
      let { actions: r13 } = n21;
      t17 != null && ((i20 = r13[r13.length - 1]) === null || i20 === void 0 ? void 0 : i20.id) !== t17 && (d6.clearImmediate(t17), n21._scheduled = void 0);
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Scheduler.js
  var t5 = class {
    constructor(o21, s19 = t5.now) {
      this.schedulerActionCtor = o21, this.now = s19;
    }
    schedule(o21, s19 = 0, r13) {
      return new this.schedulerActionCtor(this, o21).schedule(r13, s19);
    }
  };
  t5.now = e6.now;

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AsyncScheduler.js
  var r4 = class extends t5 {
    constructor(e18, s19 = t5.now) {
      super(e18, s19), this.actions = [], this._active = false;
    }
    flush(e18) {
      let { actions: s19 } = this;
      if (this._active) {
        s19.push(e18);
        return;
      }
      let t17;
      this._active = true;
      do
        if (t17 = e18.execute(e18.state, e18.delay))
          break;
      while (e18 = s19.shift());
      if (this._active = false, t17) {
        for (; e18 = s19.shift(); )
          e18.unsubscribe();
        throw t17;
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AsapScheduler.js
  var d7 = class extends r4 {
    flush(e18) {
      this._active = true;
      let t17 = this._scheduled;
      this._scheduled = void 0;
      let { actions: s19 } = this, h9;
      e18 = e18 || s19.shift();
      do
        if (h9 = e18.execute(e18.state, e18.delay))
          break;
      while ((e18 = s19[0]) && e18.id === t17 && s19.shift());
      if (this._active = false, h9) {
        for (; (e18 = s19[0]) && e18.id === t17 && s19.shift(); )
          e18.unsubscribe();
        throw h9;
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/asap.js
  var r5 = new d7(u5);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/async.js
  var n4 = new r4(l5);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/QueueAction.js
  var r6 = class extends l5 {
    constructor(t17, s19) {
      super(t17, s19), this.scheduler = t17, this.work = s19;
    }
    schedule(t17, s19 = 0) {
      return s19 > 0 ? super.schedule(t17, s19) : (this.delay = s19, this.state = t17, this.scheduler.flush(this), this);
    }
    execute(t17, s19) {
      return s19 > 0 || this.closed ? super.execute(t17, s19) : this._execute(t17, s19);
    }
    requestAsyncId(t17, s19, e18 = 0) {
      return e18 != null && e18 > 0 || e18 == null && this.delay > 0 ? super.requestAsyncId(t17, s19, e18) : (t17.flush(this), 0);
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/QueueScheduler.js
  var s4 = class extends r4 {
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/queue.js
  var o10 = new s4(r6);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AnimationFrameAction.js
  var u6 = class extends l5 {
    constructor(n21, t17) {
      super(n21, t17), this.scheduler = n21, this.work = t17;
    }
    requestAsyncId(n21, t17, e18 = 0) {
      return e18 !== null && e18 > 0 ? super.requestAsyncId(n21, t17, e18) : (n21.actions.push(this), n21._scheduled || (n21._scheduled = t2.requestAnimationFrame(() => n21.flush(void 0))));
    }
    recycleAsyncId(n21, t17, e18 = 0) {
      var r13;
      if (e18 != null ? e18 > 0 : this.delay > 0)
        return super.recycleAsyncId(n21, t17, e18);
      let { actions: s19 } = n21;
      t17 != null && ((r13 = s19[s19.length - 1]) === null || r13 === void 0 ? void 0 : r13.id) !== t17 && (t2.cancelAnimationFrame(t17), n21._scheduled = void 0);
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AnimationFrameScheduler.js
  var t6 = class extends r4 {
    flush(e18) {
      this._active = true;
      let d16 = this._scheduled;
      this._scheduled = void 0;
      let { actions: s19 } = this, h9;
      e18 = e18 || s19.shift();
      do
        if (h9 = e18.execute(e18.state, e18.delay))
          break;
      while ((e18 = s19[0]) && e18.id === d16 && s19.shift());
      if (this._active = false, h9) {
        for (; (e18 = s19[0]) && e18.id === d16 && s19.shift(); )
          e18.unsubscribe();
        throw h9;
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/animationFrame.js
  var n5 = new t6(u6);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/VirtualTimeScheduler.js
  var n6 = class extends r4 {
    constructor(e18 = r7, t17 = 1 / 0) {
      super(e18, () => this.frame), this.maxFrames = t17, this.frame = 0, this.index = -1;
    }
    flush() {
      let { actions: e18, maxFrames: t17 } = this, s19, i20;
      for (; (i20 = e18[0]) && i20.delay <= t17 && (e18.shift(), this.frame = i20.delay, !(s19 = i20.execute(i20.state, i20.delay))); )
        ;
      if (s19) {
        for (; i20 = e18.shift(); )
          i20.unsubscribe();
        throw s19;
      }
    }
  };
  n6.frameTimeFactor = 10;
  var r7 = class extends l5 {
    constructor(e18, t17, s19 = e18.index += 1) {
      super(e18, t17), this.scheduler = e18, this.work = t17, this.index = s19, this.active = true, this.index = e18.index = s19;
    }
    schedule(e18, t17 = 0) {
      if (Number.isFinite(t17)) {
        if (!this.id)
          return super.schedule(e18, t17);
        this.active = false;
        let s19 = new r7(this.scheduler, this.work);
        return this.add(s19), s19.schedule(e18, t17);
      } else
        return e2.EMPTY;
    }
    requestAsyncId(e18, t17, s19 = 0) {
      this.delay = e18.frame + s19;
      let { actions: i20 } = e18;
      return i20.push(this), i20.sort(r7.sortActions), 1;
    }
    recycleAsyncId(e18, t17, s19 = 0) {
    }
    _execute(e18, t17) {
      if (this.active === true)
        return super._execute(e18, t17);
    }
    static sortActions(e18, t17) {
      return e18.delay === t17.delay ? e18.index === t17.index ? 0 : e18.index > t17.index ? 1 : -1 : e18.delay > t17.delay ? 1 : -1;
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/empty.js
  var o11 = new o6((e18) => e18.complete());

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isScheduler.js
  function n7(r13) {
    return r13 && t(r13.schedule);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/args.js
  function n8(e18) {
    return e18[e18.length - 1];
  }
  function f4(e18) {
    return n7(n8(e18)) ? e18.pop() : void 0;
  }
  function c3(e18, o21) {
    return typeof n8(e18) == "number" ? e18.pop() : o21;
  }

  // https://esm.sh/v102/tslib@2.4.1/deno/tslib.js
  function T2(t17, e18, r13, n21) {
    function a19(o21) {
      return o21 instanceof r13 ? o21 : new r13(function(i20) {
        i20(o21);
      });
    }
    return new (r13 || (r13 = Promise))(function(o21, i20) {
      function f13(l18) {
        try {
          u14(n21.next(l18));
        } catch (y9) {
          i20(y9);
        }
      }
      function s19(l18) {
        try {
          u14(n21.throw(l18));
        } catch (y9) {
          i20(y9);
        }
      }
      function u14(l18) {
        l18.done ? o21(l18.value) : a19(l18.value).then(f13, s19);
      }
      u14((n21 = n21.apply(t17, e18 || [])).next());
    });
  }
  function d8(t17) {
    var e18 = typeof Symbol == "function" && Symbol.iterator, r13 = e18 && t17[e18], n21 = 0;
    if (r13)
      return r13.call(t17);
    if (t17 && typeof t17.length == "number")
      return { next: function() {
        return t17 && n21 >= t17.length && (t17 = void 0), { value: t17 && t17[n21++], done: !t17 };
      } };
    throw new TypeError(e18 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function h2(t17) {
    return this instanceof h2 ? (this.v = t17, this) : new h2(t17);
  }
  function M3(t17, e18, r13) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var n21 = r13.apply(t17, e18 || []), a19, o21 = [];
    return a19 = {}, i20("next"), i20("throw"), i20("return"), a19[Symbol.asyncIterator] = function() {
      return this;
    }, a19;
    function i20(c26) {
      n21[c26] && (a19[c26] = function(p20) {
        return new Promise(function(_2, x15) {
          o21.push([c26, p20, _2, x15]) > 1 || f13(c26, p20);
        });
      });
    }
    function f13(c26, p20) {
      try {
        s19(n21[c26](p20));
      } catch (_2) {
        y9(o21[0][3], _2);
      }
    }
    function s19(c26) {
      c26.value instanceof h2 ? Promise.resolve(c26.value.v).then(u14, l18) : y9(o21[0][2], c26);
    }
    function u14(c26) {
      f13("next", c26);
    }
    function l18(c26) {
      f13("throw", c26);
    }
    function y9(c26, p20) {
      c26(p20), o21.shift(), o21.length && f13(o21[0][0], o21[0][1]);
    }
  }
  function G2(t17) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var e18 = t17[Symbol.asyncIterator], r13;
    return e18 ? e18.call(t17) : (t17 = typeof d8 == "function" ? d8(t17) : t17[Symbol.iterator](), r13 = {}, n21("next"), n21("throw"), n21("return"), r13[Symbol.asyncIterator] = function() {
      return this;
    }, r13);
    function n21(o21) {
      r13[o21] = t17[o21] && function(i20) {
        return new Promise(function(f13, s19) {
          i20 = t17[o21](i20), a19(f13, s19, i20.done, i20.value);
        });
      };
    }
    function a19(o21, i20, f13, s19) {
      Promise.resolve(s19).then(function(u14) {
        o21({ value: u14, done: f13 });
      }, i20);
    }
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isArrayLike.js
  var t7 = (e18) => e18 && typeof e18.length == "number" && typeof e18 != "function";

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isPromise.js
  function r8(i20) {
    return t(i20?.then);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isInteropObservable.js
  function i4(o21) {
    return t(o21[o5]);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isAsyncIterable.js
  function o12(r13) {
    return Symbol.asyncIterator && t(r13?.[Symbol.asyncIterator]);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/throwUnobservableError.js
  function r9(e18) {
    return new TypeError(`You provided ${e18 !== null && typeof e18 == "object" ? "an invalid object" : `'${e18}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/symbol/iterator.js
  function t8() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var r10 = t8();

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isIterable.js
  function m4(o21) {
    return t(o21?.[r10]);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isReadableStreamLike.js
  function c4(e18) {
    return M3(this, arguments, function* () {
      let t17 = e18.getReader();
      try {
        for (; ; ) {
          let { value: a19, done: i20 } = yield h2(t17.read());
          if (i20)
            return yield h2(void 0);
          yield yield h2(a19);
        }
      } finally {
        t17.releaseLock();
      }
    });
  }
  function s5(e18) {
    return t(e18?.getReader);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/innerFrom.js
  function B3(r13) {
    if (r13 instanceof o6)
      return r13;
    if (r13 != null) {
      if (i4(r13))
        return I3(r13);
      if (t7(r13))
        return k2(r13);
      if (r8(r13))
        return A2(r13);
      if (o12(r13))
        return m5(r13);
      if (m4(r13))
        return L3(r13);
      if (s5(r13))
        return S3(r13);
    }
    throw r9(r13);
  }
  function I3(r13) {
    return new o6((e18) => {
      let o21 = r13[o5]();
      if (t(o21.subscribe))
        return o21.subscribe(e18);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function k2(r13) {
    return new o6((e18) => {
      for (let o21 = 0; o21 < r13.length && !e18.closed; o21++)
        e18.next(r13[o21]);
      e18.complete();
    });
  }
  function A2(r13) {
    return new o6((e18) => {
      r13.then((o21) => {
        e18.closed || (e18.next(o21), e18.complete());
      }, (o21) => e18.error(o21)).then(null, m2);
    });
  }
  function L3(r13) {
    return new o6((e18) => {
      for (let o21 of r13)
        if (e18.next(o21), e18.closed)
          return;
      e18.complete();
    });
  }
  function m5(r13) {
    return new o6((e18) => {
      O2(r13, e18).catch((o21) => e18.error(o21));
    });
  }
  function S3(r13) {
    return m5(c4(r13));
  }
  function O2(r13, e18) {
    var o21, n21, f13, a19;
    return T2(this, void 0, void 0, function* () {
      try {
        for (o21 = G2(r13); n21 = yield o21.next(), !n21.done; ) {
          let l18 = n21.value;
          if (e18.next(l18), e18.closed)
            return;
        }
      } catch (l18) {
        f13 = { error: l18 };
      } finally {
        try {
          n21 && !n21.done && (a19 = o21.return) && (yield a19.call(o21));
        } finally {
          if (f13)
            throw f13.error;
        }
      }
      e18.complete();
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/executeSchedule.js
  function l7(e18, d16, i20, u14 = 0, s19 = false) {
    let c26 = d16.schedule(function() {
      i20(), s19 ? e18.add(this.schedule(null, u14)) : this.unsubscribe();
    }, u14);
    if (e18.add(c26), !s19)
      return c26;
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/observeOn.js
  function a4(t17, e18 = 0) {
    return l3((r13, o21) => {
      r13.subscribe(a2(o21, (m15) => l7(o21, t17, () => o21.next(m15), e18), () => l7(o21, t17, () => o21.complete(), e18), (m15) => l7(o21, t17, () => o21.error(m15), e18)));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/subscribeOn.js
  function c5(r13, o21 = 0) {
    return l3((t17, e18) => {
      e18.add(r13.schedule(() => t17.subscribe(e18), o21));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleObservable.js
  function b2(o21, r13) {
    return B3(o21).pipe(c5(r13), a4(r13));
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/schedulePromise.js
  function f5(o21, r13) {
    return B3(o21).pipe(c5(r13), a4(r13));
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleArray.js
  function c6(t17, n21) {
    return new o6((e18) => {
      let l18 = 0;
      return n21.schedule(function() {
        l18 === t17.length ? e18.complete() : (e18.next(t17[l18++]), e18.closed || this.schedule());
      });
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleIterable.js
  function c7(m15, r13) {
    return new o6((t17) => {
      let e18;
      return l7(t17, r13, () => {
        e18 = m15[r10](), l7(t17, r13, () => {
          let o21, n21;
          try {
            ({ value: o21, done: n21 } = e18.next());
          } catch (i20) {
            t17.error(i20);
            return;
          }
          n21 ? t17.complete() : t17.next(o21);
        }, 0, true);
      }), () => t(e18?.return) && e18.return();
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleAsyncIterable.js
  function f6(t17, o21) {
    if (!t17)
      throw new Error("Iterable cannot be null");
    return new o6((e18) => {
      l7(e18, o21, () => {
        let l18 = t17[Symbol.asyncIterator]();
        l7(e18, o21, () => {
          l18.next().then((n21) => {
            n21.done ? e18.complete() : e18.next(n21.value);
          });
        }, 0, true);
      });
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleReadableStreamLike.js
  function n9(e18, r13) {
    return f6(c4(e18), r13);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduled.js
  function T3(r13, e18) {
    if (r13 != null) {
      if (i4(r13))
        return b2(r13, e18);
      if (t7(r13))
        return c6(r13, e18);
      if (r8(r13))
        return f5(r13, e18);
      if (o12(r13))
        return f6(r13, e18);
      if (m4(r13))
        return c7(r13, e18);
      if (s5(r13))
        return n9(r13, e18);
    }
    throw r9(r13);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/from.js
  function e8(r13, o21) {
    return o21 ? T3(r13, o21) : B3(r13);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/of.js
  function p7(...o21) {
    let r13 = f4(o21);
    return e8(o21, r13);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/throwError.js
  function p8(n21, o21) {
    let e18 = t(n21) ? n21 : () => n21, i20 = (t17) => t17.error(e18());
    return new o6(o21 ? (t17) => o21.schedule(i20, 0, t17) : i20);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Notification.js
  var c8;
  (function(e18) {
    e18.NEXT = "N", e18.ERROR = "E", e18.COMPLETE = "C";
  })(c8 || (c8 = {}));
  var n10 = class {
    constructor(t17, o21, i20) {
      this.kind = t17, this.value = o21, this.error = i20, this.hasValue = t17 === "N";
    }
    observe(t17) {
      return E(this, t17);
    }
    do(t17, o21, i20) {
      let { kind: r13, value: l18, error: u14 } = this;
      return r13 === "N" ? t17?.(l18) : r13 === "E" ? o21?.(u14) : i20?.();
    }
    accept(t17, o21, i20) {
      var r13;
      return t((r13 = t17) === null || r13 === void 0 ? void 0 : r13.next) ? this.observe(t17) : this.do(t17, o21, i20);
    }
    toObservable() {
      let { kind: t17, value: o21, error: i20 } = this, r13 = t17 === "N" ? p7(o21) : t17 === "E" ? p8(() => i20) : t17 === "C" ? o11 : 0;
      if (!r13)
        throw new TypeError(`Unexpected notification kind ${t17}`);
      return r13;
    }
    static createNext(t17) {
      return new n10("N", t17);
    }
    static createError(t17) {
      return new n10("E", void 0, t17);
    }
    static createComplete() {
      return n10.completeNotification;
    }
  };
  n10.completeNotification = new n10("C");
  function E(e18, t17) {
    var o21, i20, r13;
    let { kind: l18, value: u14, error: s19 } = e18;
    if (typeof l18 != "string")
      throw new TypeError('Invalid notification, missing "kind"');
    l18 === "N" ? (o21 = t17.next) === null || o21 === void 0 || o21.call(t17, u14) : l18 === "E" ? (i20 = t17.error) === null || i20 === void 0 || i20.call(t17, s19) : (r13 = t17.complete) === null || r13 === void 0 || r13.call(t17);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/EmptyError.js
  var s6 = e((r13) => function() {
    r13(this), this.name = "EmptyError", this.message = "no elements in sequence";
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/ArgumentOutOfRangeError.js
  var o13 = e((r13) => function() {
    r13(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/NotFoundError.js
  var e9 = e((r13) => function(o21) {
    r13(this), this.name = "NotFoundError", this.message = o21;
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/SequenceError.js
  var n11 = e((r13) => function(e18) {
    r13(this), this.name = "SequenceError", this.message = e18;
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/timeout.js
  var x2 = e((e18) => function(t17 = null) {
    e18(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t17;
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/map.js
  function f7(e18, t17) {
    return l3((o21, r13) => {
      let p20 = 0;
      o21.subscribe(a2(r13, (a19) => {
        r13.next(e18.call(t17, a19, p20++));
      }));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/mapOneOrManyArgs.js
  var { isArray: o14 } = Array;
  function p9(n21, r13) {
    return o14(r13) ? n21(...r13) : n21(r13);
  }
  function c9(n21) {
    return f7((r13) => p9(n21, r13));
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/argsArgArrayOrObject.js
  var { isArray: o15 } = Array;
  var { getPrototypeOf: s7, prototype: y, keys: c10 } = Object;

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/mergeInternals.js
  function S4(v6, t17, x15, c26, m15, p20, h9, r13) {
    let l18 = [], o21 = 0, C7 = 0, i20 = false, s19 = () => {
      i20 && !l18.length && !o21 && t17.complete();
    }, u14 = (f13) => o21 < c26 ? n21(f13) : l18.push(f13), n21 = (f13) => {
      p20 && t17.next(f13), o21++;
      let d16 = false;
      B3(x15(f13, C7++)).subscribe(a2(t17, (e18) => {
        m15?.(e18), p20 ? u14(e18) : t17.next(e18);
      }, () => {
        d16 = true;
      }, void 0, () => {
        if (d16)
          try {
            for (o21--; l18.length && o21 < c26; ) {
              let e18 = l18.shift();
              h9 ? l7(t17, h9, () => n21(e18)) : n21(e18);
            }
            s19();
          } catch (e18) {
            t17.error(e18);
          }
      }));
    };
    return v6.subscribe(a2(t17, u14, () => {
      i20 = true, s19();
    })), () => {
      r13?.();
    };
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/mergeMap.js
  function F4(o21, m15, f13 = 1 / 0) {
    return t(m15) ? F4((i20, r13) => f7((n21, p20) => m15(i20, n21, r13, p20))(B3(o21(i20, r13))), f13) : (typeof m15 == "number" && (f13 = m15), l3((i20, r13) => S4(i20, r13, o21, f13)));
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/mergeAll.js
  function n12(r13 = 1 / 0) {
    return F4(n2, r13);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/fromEventPattern.js
  function s8(r13, n21, i20) {
    return i20 ? s8(r13, n21).pipe(c9(i20)) : new o6((f13) => {
      let o21 = (...t17) => f13.next(t17.length === 1 ? t17[0] : t17), p20 = r13(o21);
      return t(n21) ? () => n21(o21, p20) : void 0;
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/merge.js
  function g2(...o21) {
    let e18 = f4(o21), m15 = c3(o21, 1 / 0), r13 = o21;
    return r13.length ? r13.length === 1 ? B3(r13[0]) : n12(m15)(e8(r13, e18)) : o11;
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/never.js
  var e10 = new o6(o3);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/argsOrArgArray.js
  var { isArray: n13 } = Array;

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/filter.js
  function a5(t17, o21) {
    return l3((i20, r13) => {
      let n21 = 0;
      i20.subscribe(a2(r13, (e18) => t17.call(o21, e18, n21++) && r13.next(e18)));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/defaultIfEmpty.js
  function n14(o21) {
    return l3((r13, e18) => {
      let t17 = false;
      r13.subscribe(a2(e18, (a19) => {
        t17 = true, e18.next(a19);
      }, () => {
        t17 || e18.next(o21), e18.complete();
      }));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/take.js
  function x4(e18) {
    return e18 <= 0 ? () => o11 : l3((o21, r13) => {
      let t17 = 0;
      o21.subscribe(a2(r13, (m15) => {
        ++t17 <= e18 && (r13.next(m15), e18 <= t17 && r13.complete());
      }));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/throwIfEmpty.js
  function i11(e18 = n16) {
    return l3((o21, r13) => {
      let t17 = false;
      o21.subscribe(a2(r13, (m15) => {
        t17 = true, r13.next(m15);
      }, () => t17 ? r13.complete() : r13.error(e18())));
    });
  }
  function n16() {
    return new s6();
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/first.js
  function I4(t17, m15) {
    let o21 = arguments.length >= 2;
    return (r13) => r13.pipe(t17 ? a5((f13, i20) => t17(f13, i20, r13)) : n2, x4(1), o21 ? n14(m15) : i11(() => new s6()));
  }

  // https://esm.sh/v102/@extend-chrome/messages@1.2.2/deno/messages.js
  function A3(s19, r13) {
    var e18 = {};
    for (var n21 in s19)
      Object.prototype.hasOwnProperty.call(s19, n21) && r13.indexOf(n21) < 0 && (e18[n21] = s19[n21]);
    if (s19 != null && typeof Object.getOwnPropertySymbols == "function")
      for (var t17 = 0, n21 = Object.getOwnPropertySymbols(s19); t17 < n21.length; t17++)
        r13.indexOf(n21[t17]) < 0 && Object.prototype.propertyIsEnumerable.call(s19, n21[t17]) && (e18[n21[t17]] = s19[n21[t17]]);
    return e18;
  }
  var _ = /* @__PURE__ */ new Map();
  var F6 = (s19, r13) => {
    let e18 = _.get(s19);
    e18 && e18.delete(r13);
  };
  var T6 = (s19, r13) => {
    let e18 = _.get(s19);
    if (e18)
      return e18.get(r13);
  };
  var L4 = (s19, r13, e18) => {
    let n21 = _.get(s19) || /* @__PURE__ */ new Map();
    n21.set(r13, e18), _.has(s19) || _.set(s19, n21);
  };
  var k4 = (s19) => (r13) => {
    let e18 = (n21, t17) => {
      if (n21.async || n21.scope !== s19)
        return false;
      try {
        r13(n21.payload, t17);
      } catch (c26) {
        console.error("Uncaught error in chrome.runtime.onMessage listener"), console.error(c26);
      }
      return false;
    };
    chrome.runtime.onMessage.addListener(e18), L4(s19, r13, e18);
  };
  var q4 = (s19) => (r13) => {
    let e18 = (n21, t17, c26) => {
      if (n21.async && s19 === n21.scope)
        return o21(), true;
      return false;
      async function o21() {
        try {
          let i20 = (l18) => {
            c26({ success: true, payload: l18 });
          };
          await r13(n21.payload, t17, i20);
        } catch (i20) {
          let l18 = { success: false, payload: { greeting: i20.message } };
          console.error(i20), c26(l18);
        }
      }
    };
    chrome.runtime.onMessage.addListener(e18), L4(s19, r13, e18);
  };
  var N3 = (s19) => (r13) => {
    let e18 = T6(s19, r13);
    e18 && (F6(s19, r13), chrome.runtime.onMessage.removeListener(e18));
  };
  var w10 = class extends Error {
    constructor(r13) {
      var e18, n21, { coreMessage: t17 = null, coreResponse: c26 = null, message: o21 = ((n21 = (e18 = chrome.runtime) === null || e18 === void 0 ? void 0 : e18.lastError) === null || n21 === void 0 ? void 0 : n21.message) || c26?.payload.greeting || "chrome.runtime.lastError is undefined" } = r13;
      super(o21), this.coreMessage = t17, this.coreResponse = c26;
    }
  };
  var R3 = (s19) => (r13, { tabId: e18, frameId: n21 } = {}) => new Promise((t17, c26) => {
    let o21 = { async: false, tabId: e18 || null, payload: r13, scope: s19 }, i20 = (l18) => {
      if (chrome.runtime.lastError) {
        let y9 = chrome.runtime.lastError.message, b11 = "The message port closed before a response was received";
        y9 && y9.includes(b11) ? t17() : c26(new w10({ coreMessage: o21 }));
      } else
        l18 && !l18.success ? c26(l18.payload) : t17();
    };
    typeof e18 == "number" && typeof n21 == "number" ? chrome.tabs.sendMessage(e18, o21, { frameId: n21 }, i20) : typeof e18 == "number" ? chrome.tabs.sendMessage(e18, o21, i20) : chrome.runtime.sendMessage(o21, i20);
  });
  var U3 = (s19) => (r13, { tabId: e18, frameId: n21 } = {}) => new Promise((t17, c26) => {
    let o21 = { async: true, tabId: e18 || null, payload: r13, scope: s19 }, i20 = (l18) => {
      chrome.runtime.lastError || l18 === null || !l18.success ? c26(new w10({ coreMessage: o21, coreResponse: l18 })) : t17(l18.payload);
    };
    typeof e18 == "number" && typeof n21 == "number" ? chrome.tabs.sendMessage(e18, o21, { frameId: n21 }, i20) : typeof e18 == "number" ? chrome.tabs.sendMessage(e18, o21, i20) : chrome.runtime.sendMessage(o21, i20);
  });
  var S7 = (s19) => (r13 = () => true) => s19.pipe(I4(r13)).toPromise();
  function W2(s19) {
    let r13 = q4(s19), e18 = U3(s19), n21 = N3(s19), t17 = k4(s19), c26 = R3(s19);
    async function o21(a19, p20) {
      let m15 = p20 || {}, { async: g7 = false } = m15, h9 = A3(m15, ["async"]);
      return g7 ? e18(a19, h9) : c26(a19, h9);
    }
    function i20(a19) {
      p20(a19) ? t17(a19) : r13(a19);
      function p20(m15) {
        return m15.length < 3;
      }
    }
    function l18(a19) {
      return n21(a19);
    }
    let y9 = g2(s8(t17, n21), s8(r13, n21)), b11 = /* @__PURE__ */ new Set();
    function P4(a19, p20) {
      if (b11.has(a19))
        throw new Error("greeting is not unique");
      b11.add(a19);
      let { async: m15 } = p20 || {}, g7 = (u14, f13) => {
        f13 = f13 || {};
        let d16;
        typeof f13.tabId == "number" && (d16 = f13.tabId);
        let M6;
        return typeof f13.frameId == "number" && (M6 = f13.frameId), m15 ? o21({ greeting: a19, data: u14 }, { async: m15, tabId: d16, frameId: M6 }) : o21({ greeting: a19, data: u14 }, { tabId: d16, frameId: M6 });
      };
      if (g7.toTab = ({ tabId: u14 }) => m15 ? o21({ greeting: a19 }, { async: m15, tabId: u14 }) : o21({ greeting: a19 }, { tabId: u14 }), m15) {
        let u14 = y9.pipe(a5(h9), f7(([{ data: f13 }, d16, M6]) => [f13, d16, M6]), a5((f13) => f13.length === 3));
        return [g7, u14, S7(y9)];
      } else {
        let u14 = y9.pipe(a5(h9), f7(([{ data: f13 }, d16]) => [f13, d16]), a5((f13) => f13.length < 3));
        return [g7, u14, S7(u14)];
      }
      function h9([u14]) {
        return u14 && typeof u14 == "object" && u14.greeting === a19;
      }
    }
    return { send: o21, on: i20, off: l18, stream: y9, getMessage: P4 };
  }
  var z2 = "@extend-chrome/messages__root";
  var B5 = W2(z2);
  var { getMessage: H2 } = B5;

  // https://esm.sh/v102/p-throttle@5.0.0/deno/p-throttle.js
  var a16 = class extends Error {
    constructor() {
      super("Throttled function aborted"), this.name = "AbortError";
    }
  };
  function m13({ limit: i20, interval: s19, strict: f13 }) {
    if (!Number.isFinite(i20))
      throw new TypeError("Expected `limit` to be a finite number");
    if (!Number.isFinite(s19))
      throw new TypeError("Expected `interval` to be a finite number");
    let r13 = /* @__PURE__ */ new Map(), u14 = 0, c26 = 0;
    function p20() {
      let e18 = Date.now();
      return e18 - u14 > s19 ? (c26 = 1, u14 = e18, 0) : (c26 < i20 ? c26++ : (u14 += s19, c26 = 1), u14 - e18);
    }
    let n21 = [];
    function h9() {
      let e18 = Date.now();
      if (n21.length < i20)
        return n21.push(e18), 0;
      let t17 = n21.shift() + s19;
      return e18 >= t17 ? (n21.push(e18), 0) : (n21.push(t17), t17 - e18);
    }
    let w14 = f13 ? h9 : p20;
    return (e18) => {
      let t17 = function(...o21) {
        if (!t17.isEnabled)
          return (async () => e18.apply(this, o21))();
        let l18;
        return new Promise((d16, b11) => {
          l18 = setTimeout(() => {
            d16(e18.apply(this, o21)), r13.delete(l18);
          }, w14()), r13.set(l18, b11);
        });
      };
      return t17.abort = () => {
        for (let o21 of r13.keys())
          clearTimeout(o21), r13.get(o21)(new a16());
        r13.clear(), n21.splice(0, n21.length);
      }, t17.isEnabled = true, t17;
    };
  }

  // https://esm.sh/v102/@twind/core@1.0.1/deno/core.js
  var F7;
  function lt(t17) {
    return [...t17.v, (t17.i ? "!" : "") + t17.n].join(":");
  }
  function st(t17, e18 = ",") {
    return t17.map(lt).join(e18);
  }
  var W3 = typeof CSS < "u" && CSS.escape || ((t17) => t17.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function V4(t17) {
    for (var e18 = 9, r13 = t17.length; r13--; )
      e18 = Math.imul(e18 ^ t17.charCodeAt(r13), 1597334677);
    return "#" + ((e18 ^ e18 >>> 9) >>> 0).toString(36);
  }
  function kt(t17, e18 = "@media ") {
    return e18 + x12(t17).map((r13) => (typeof r13 == "string" && (r13 = { min: r13 }), r13.raw || Object.keys(r13).map((n21) => `(${n21}-width:${r13[n21]})`).join(" and "))).join(",");
  }
  function x12(t17 = []) {
    return Array.isArray(t17) ? t17 : t17 == null ? [] : [t17];
  }
  function At(t17) {
    return t17;
  }
  function D3() {
  }
  var w11 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function jt(t17) {
    var e18;
    return ((e18 = t17.match(/[-=:;]/g)) == null ? void 0 : e18.length) || 0;
  }
  function X2(t17) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t17) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t17), 15) << 18;
  }
  var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function at({ n: t17, i: e18, v: r13 = [] }, n21, i20, l18) {
    for (let a19 of (t17 && (t17 = lt({ n: t17, i: e18, v: r13 })), l18 = [...x12(l18)], r13)) {
      let s19 = n21.theme("screens", a19);
      for (let u14 of x12(s19 && kt(s19) || n21.v(a19))) {
        var o21;
        l18.push(u14), i20 |= s19 ? 67108864 | X2(u14) : a19 == "dark" ? 1073741824 : u14[0] == "@" ? X2(u14) : (o21 = u14, 1 << ~(/:([a-z-]+)/.test(o21) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: t17, p: i20, r: l18, i: e18 };
  }
  var ut = /* @__PURE__ */ new Map();
  function tt(t17) {
    if (t17.d) {
      let e18 = [], r13 = Y2(t17.r.reduce((n21, i20) => i20[0] == "@" ? (e18.push(i20), n21) : i20 ? Y2(n21, (l18) => Y2(i20, (o21) => {
        let a19 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o21);
        if (a19) {
          let s19 = l18.indexOf(a19[1]);
          return ~s19 ? l18.slice(0, s19) + a19[0] + l18.slice(s19 + a19[1].length) : Z2(l18, o21);
        }
        return Z2(o21, l18);
      })) : n21, "&"), (n21) => Z2(n21, t17.n ? "." + W3(t17.n) : ""));
      return r13 && e18.push(r13.replace(/:merge\((.+?)\)/g, "$1")), e18.reduceRight((n21, i20) => i20 + "{" + n21 + "}", t17.d);
    }
  }
  function Y2(t17, e18) {
    return t17.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r13, n21, i20) => e18(n21) + i20);
  }
  function Z2(t17, e18) {
    return t17.replace(/&/g, e18);
  }
  var Dt = new Intl.Collator("en", { numeric: true });
  function St(t17, e18) {
    for (var r13 = 0, n21 = t17.length; r13 < n21; ) {
      let i20 = n21 + r13 >> 1;
      0 >= Mt(t17[i20], e18) ? r13 = i20 + 1 : n21 = i20;
    }
    return n21;
  }
  function Mt(t17, e18) {
    let r13 = t17.p & w11.o;
    return r13 == (e18.p & w11.o) && (r13 == w11.b || r13 == w11.o) ? 0 : t17.p - e18.p || t17.o - e18.o || Dt.compare(t17.n, e18.n);
  }
  function H3(t17, e18) {
    return Math.round(parseInt(t17, 16) * e18);
  }
  function T7(t17, e18 = {}) {
    if (typeof t17 == "function")
      return t17(e18);
    let { opacityValue: r13 = "1", opacityVariable: n21 } = e18, i20 = n21 ? `var(${n21})` : r13;
    if (t17.includes("<alpha-value>"))
      return t17.replace("<alpha-value>", i20);
    if (t17[0] == "#" && (t17.length == 4 || t17.length == 7)) {
      let l18 = (t17.length - 1) / 3, o21 = [17, 1, 0.062272][l18 - 1];
      return `rgba(${[H3(t17.substr(1, l18), o21), H3(t17.substr(1 + l18, l18), o21), H3(t17.substr(1 + 2 * l18, l18), o21), i20]})`;
    }
    return i20 == "1" ? t17 : i20 == "0" ? "#0000" : t17.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i20})`);
  }
  function ct(t17, e18, r13, n21, i20 = []) {
    return function l18(o21, { n: a19, p: s19, r: u14 = [], i: f13 }, c26) {
      let p20 = [], d16 = "", v6 = 0, g7 = 0;
      for (let h9 in o21 || {}) {
        var y9, A5;
        let b11 = o21[h9];
        if (h9[0] == "@") {
          if (!b11)
            continue;
          if (h9[1] == "a") {
            p20.push(...ht(a19, s19, N4("" + b11), c26, s19, u14, f13, true));
            continue;
          }
          if (h9[1] == "l") {
            for (let m15 of x12(b11))
              p20.push(...l18(m15, { n: a19, p: (y9 = w11[h9[7]], s19 & ~w11.o | y9), r: u14, i: f13 }, c26));
            continue;
          }
          if (h9[1] == "i") {
            p20.push(...x12(b11).map((m15) => ({ p: -1, o: 0, r: [], d: h9 + " " + m15 })));
            continue;
          }
          if (h9[1] == "k") {
            p20.push({ p: w11.d, o: 0, r: [h9], d: l18(b11, { p: w11.d }, c26).map(tt).join("") });
            continue;
          }
          if (h9[1] == "f") {
            p20.push(...x12(b11).map((m15) => ({ p: w11.d, o: 0, r: [h9], d: l18(m15, { p: w11.d }, c26).map(tt).join("") })));
            continue;
          }
        }
        if (typeof b11 != "object" || Array.isArray(b11))
          h9 == "label" && b11 ? a19 = b11 + V4(JSON.stringify([s19, f13, o21])) : (b11 || b11 === 0) && (h9 = h9.replace(/[A-Z]/g, (m15) => "-" + m15.toLowerCase()), g7 += 1, v6 = Math.max(v6, (A5 = h9)[0] == "-" ? 0 : jt(A5) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A5) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d16 += (d16 ? ";" : "") + x12(b11).map((m15) => c26.s(h9, ft("" + m15, c26.theme) + (f13 ? " !important" : ""))).join(";"));
        else if (h9[0] == "@" || h9.includes("&")) {
          let m15 = s19;
          h9[0] == "@" && (h9 = h9.replace(/\bscreen\(([^)]+)\)/g, (C7, $3) => {
            let j8 = c26.theme("screens", $3);
            return j8 ? (m15 |= 67108864, kt(j8, "")) : C7;
          }), m15 |= X2(h9)), p20.push(...l18(b11, { n: a19, p: m15, r: [...u14, h9], i: f13 }, c26));
        } else
          p20.push(...l18(b11, { p: s19, r: [...u14, h9] }, c26));
      }
      return p20.unshift({ n: a19, p: s19, o: Math.max(0, 15 - g7) + 1.5 * Math.min(v6 || 15, 15), r: u14, d: d16 }), p20.sort(Mt);
    }(t17, at(e18, r13, n21, i20), r13);
  }
  function ft(t17, e18) {
    return t17.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r13, n21, i20, l18, o21) => {
      let a19 = e18(i20, o21);
      return typeof a19 == "function" && /color|fill|stroke/i.test(i20) ? T7(a19) : "" + a19;
    });
  }
  function pt(t17, e18) {
    let r13, n21 = [];
    for (let i20 of t17)
      i20.d && i20.n ? r13?.p == i20.p && "" + r13.r == "" + i20.r ? (r13.c = [r13.c, i20.c].filter(Boolean).join(" "), r13.d = r13.d + ";" + i20.d) : n21.push(r13 = { ...i20, n: i20.n && e18 }) : n21.push({ ...i20, n: i20.n && e18 });
    return n21;
  }
  function B6(t17, e18, r13 = w11.u, n21, i20) {
    let l18 = [];
    for (let o21 of t17)
      for (let a19 of function(s19, u14, f13, c26, p20) {
        var d16;
        s19 = { ...s19, i: s19.i || p20 };
        let v6 = function(g7, y9) {
          let A5 = ut.get(g7.n);
          return A5 ? A5(g7, y9) : y9.r(g7.n, g7.v[0] == "dark");
        }(s19, u14);
        return v6 ? typeof v6 == "string" ? ({ r: c26, p: f13 } = at(s19, u14, f13, c26), pt(B6(N4(v6), u14, f13, c26, s19.i), s19.n)) : Array.isArray(v6) ? v6.map((g7) => {
          var y9, A5;
          return { o: 0, ...g7, r: [...x12(c26), ...x12(g7.r)], p: (y9 = f13, A5 = (d16 = g7.p) != null ? d16 : f13, y9 & ~w11.o | A5) };
        }) : ct(v6, s19, u14, f13, c26) : [{ c: lt(s19), p: 0, o: 0, r: [] }];
      }(o21, e18, r13, n21, i20))
        l18.splice(St(l18, a19), 0, a19);
    return l18;
  }
  function ht(t17, e18, r13, n21, i20, l18, o21, a19) {
    return pt((a19 ? r13.flatMap((s19) => B6([s19], n21, i20, l18, o21)) : B6(r13, n21, i20, l18, o21)).map((s19) => s19.p & w11.o && (s19.n || e18 == w11.b) ? { ...s19, p: s19.p & ~w11.o | e18, o: 0 } : s19), t17);
  }
  function Ot(t17, e18, r13, n21) {
    var i20;
    return i20 = (l18, o21) => {
      let { n: a19, p: s19, r: u14, i: f13 } = at(l18, o21, e18);
      return r13 && ht(a19, e18, r13, o21, s19, u14, f13, n21);
    }, ut.set(t17, i20), t17;
  }
  function K2(t17, e18) {
    if (t17[t17.length - 1] != "(") {
      let r13 = [], n21 = false, i20 = false, l18 = "";
      for (let o21 of t17)
        if (!(o21 == "(" || /[~@]$/.test(o21))) {
          if (o21[0] == "!" && (o21 = o21.slice(1), n21 = !n21), o21.endsWith(":")) {
            r13[o21 == "dark:" ? "unshift" : "push"](o21.slice(0, -1));
            continue;
          }
          o21[0] == "-" && (o21 = o21.slice(1), i20 = !i20), o21.endsWith("-") && (o21 = o21.slice(0, -1)), o21 && o21 != "&" && (l18 += (l18 && "-") + o21);
        }
      l18 && (i20 && (l18 = "-" + l18), e18[0].push({ n: l18, v: r13.filter(Jt), i: n21 }));
    }
  }
  function Jt(t17, e18, r13) {
    return r13.indexOf(t17) == e18;
  }
  var yt = /* @__PURE__ */ new Map();
  function N4(t17) {
    let e18 = yt.get(t17);
    if (!e18) {
      let r13 = [], n21 = [[]], i20 = 0, l18 = 0, o21 = null, a19 = 0, s19 = (u14, f13 = 0) => {
        i20 != a19 && (r13.push(t17.slice(i20, a19 + f13)), u14 && K2(r13, n21)), i20 = a19 + 1;
      };
      for (; a19 < t17.length; a19++) {
        let u14 = t17[a19];
        if (l18)
          t17[a19 - 1] != "\\" && (l18 += +(u14 == "[") || -(u14 == "]"));
        else if (u14 == "[")
          l18 += 1;
        else if (o21)
          t17[a19 - 1] != "\\" && o21.test(t17.slice(a19)) && (o21 = null, i20 = a19 + RegExp.lastMatch.length);
        else if (u14 == "/" && t17[a19 - 1] != "\\" && (t17[a19 + 1] == "*" || t17[a19 + 1] == "/"))
          o21 = t17[a19 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (u14 == "(")
          s19(), r13.push(u14);
        else if (u14 == ":")
          t17[a19 + 1] != ":" && s19(false, 1);
        else if (/[\s,)]/.test(u14)) {
          s19(true);
          let f13 = r13.lastIndexOf("(");
          if (u14 == ")") {
            let c26 = r13[f13 - 1];
            if (/[~@]$/.test(c26)) {
              let p20 = n21.shift();
              r13.length = f13, K2([...r13, "#"], n21);
              let { v: d16 } = n21[0].pop();
              for (let v6 of p20)
                v6.v.splice(+(v6.v[0] == "dark") - +(d16[0] == "dark"), d16.length);
              K2([...r13, Ot(c26.length > 1 ? c26.slice(0, -1) + V4(JSON.stringify([c26, p20])) : c26 + "(" + st(p20) + ")", w11.a, p20, /@$/.test(c26))], n21);
            }
            f13 = r13.lastIndexOf("(", f13 - 1);
          }
          r13.length = f13 + 1;
        } else
          /[~@]/.test(u14) && t17[a19 + 1] == "(" && n21.unshift([]);
      }
      s19(true), yt.set(t17, e18 = n21[0]);
    }
    return e18;
  }
  function Ct(t17, e18, r13) {
    return e18.reduce((n21, i20, l18) => n21 + r13(i20) + t17[l18 + 1], t17[0]);
  }
  function G3(t17, e18) {
    return Array.isArray(t17) && Array.isArray(t17.raw) ? Ct(t17, e18, (r13) => Q2(r13).trim()) : e18.filter(Boolean).reduce((r13, n21) => r13 + Q2(n21), t17 ? Q2(t17) : "");
  }
  function Q2(t17) {
    let e18, r13 = "";
    if (t17 && typeof t17 == "object")
      if (Array.isArray(t17))
        (e18 = G3(t17[0], t17.slice(1))) && (r13 += " " + e18);
      else
        for (let n21 in t17)
          t17[n21] && (r13 += " " + n21);
    else
      t17 != null && typeof t17 != "boolean" && (r13 += " " + t17);
    return r13;
  }
  var ae = Et("@");
  var ue = Et("~");
  function Et(t17) {
    return new Proxy(function(r13, ...n21) {
      return e18("", r13, n21);
    }, { get: (r13, n21) => n21 in r13 ? r13[n21] : function(i20, ...l18) {
      return e18(n21, i20, l18);
    } });
    function e18(r13, n21, i20) {
      return st(N4(r13 + t17 + "(" + G3(n21, i20) + ")"));
    }
  }
  function U4(t17, e18) {
    return Array.isArray(t17) ? mt(Ct(t17, e18, (r13) => r13 != null && typeof r13 != "boolean" ? r13 : "")) : typeof t17 == "string" ? mt(t17) : [t17];
  }
  var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function mt(t17) {
    let e18;
    t17 = t17.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r13 = [{}], n21 = [r13[0]], i20 = [];
    for (; e18 = Bt.exec(t17); )
      e18[4] && (r13.shift(), i20.shift()), e18[3] ? (i20.unshift(e18[3]), r13.unshift({}), n21.push(i20.reduce((l18, o21) => ({ [o21]: l18 }), r13[0]))) : e18[4] || (r13[0][e18[1]] && (r13.unshift({}), n21.push(i20.reduce((l18, o21) => ({ [o21]: l18 }), r13[0]))), r13[0][e18[1]] = e18[2]);
    return n21;
  }
  function dt(t17, ...e18) {
    var r13, n21;
    let i20 = U4(t17, e18), l18 = (((r13 = i20.find((o21) => o21.label)) == null ? void 0 : r13.label) || "css") + V4(JSON.stringify(i20));
    return n21 = (o21, a19) => pt(i20.flatMap((s19) => ct(s19, o21, a19, w11.o)), l18), ut.set(l18, n21), l18;
  }
  var ce2 = new Proxy(function(t17, e18) {
    return bt("animation", t17, e18);
  }, { get: (t17, e18) => e18 in t17 ? t17[e18] : function(r13, n21) {
    return bt(e18, r13, n21);
  } });
  function bt(t17, e18, r13) {
    return { toString: () => dt({ label: t17, "@layer components": { ...typeof e18 == "object" ? e18 : { animation: e18 }, animationName: "" + r13 } }) };
  }
  var Ut = Symbol();
  function Rt({ presets: t17 = [], ...e18 }) {
    let r13 = { preflight: e18.preflight !== false && [], darkMode: void 0, darkColor: void 0, theme: {}, variants: x12(e18.variants), rules: x12(e18.rules), ignorelist: x12(e18.ignorelist), hash: e18.hash, stringify: e18.stringify || Wt };
    for (let n21 of x12([...t17, { darkMode: e18.darkMode, darkColor: e18.darkColor, preflight: e18.preflight !== false && x12(e18.preflight), theme: e18.theme, hash: e18.hash, stringify: e18.stringify }])) {
      let { preflight: i20, darkMode: l18 = r13.darkMode, darkColor: o21 = r13.darkColor, theme: a19, variants: s19, rules: u14, ignorelist: f13, hash: c26 = r13.hash, stringify: p20 = r13.stringify } = typeof n21 == "function" ? n21(r13) : n21;
      r13 = { preflight: r13.preflight !== false && i20 !== false && [...r13.preflight, ...x12(i20)], darkMode: l18, darkColor: o21, theme: { ...r13.theme, ...a19, extend: { ...r13.theme.extend, ...a19?.extend } }, variants: [...r13.variants, ...x12(s19)], rules: [...r13.rules, ...x12(u14)], ignorelist: [...r13.ignorelist, ...x12(f13)], hash: c26, stringify: p20 };
    }
    return r13;
  }
  function Wt(t17, e18) {
    return t17 + ":" + e18;
  }
  function et(t17, e18) {
    return typeof t17 == "function" ? t17 : typeof t17 == "string" && /^[\w-]+$/.test(t17) ? (r13, n21) => ({ [t17]: e18 ? e18(r13, n21) : rt(r13, 1) }) : (r13) => t17 || { [r13[1]]: rt(r13, 2) };
  }
  function rt(t17, e18, r13 = t17.slice(e18).find(Boolean) || t17.$$ || t17.input) {
    return t17.input[0] == "-" ? `calc(${r13} * -1)` : r13;
  }
  function vt(t17, e18, r13, n21, i20, l18) {
    for (let o21 of e18) {
      let a19 = r13.get(o21);
      a19 || r13.set(o21, a19 = n21(o21));
      let s19 = a19(t17, i20, l18);
      if (s19)
        return s19;
    }
  }
  function Ht(t17) {
    var e18;
    return ot(t17[0], typeof (e18 = t17[1]) == "function" ? e18 : () => e18);
  }
  function Kt(t17) {
    var e18, r13;
    return Array.isArray(t17) ? ot(t17[0], et(t17[1], t17[2])) : ot(t17, et(e18, r13));
  }
  function ot(t17, e18) {
    return Nt(t17, (r13, n21, i20, l18) => {
      let o21 = n21.exec(r13);
      if (o21)
        return o21.$$ = r13.slice(o21[0].length), o21.dark = l18, e18(o21, i20);
    });
  }
  function Nt(t17, e18) {
    let r13 = x12(t17).map(Qt);
    return (n21, i20, l18) => {
      for (let o21 of r13) {
        let a19 = e18(n21, o21, i20, l18);
        if (a19)
          return a19;
      }
    };
  }
  function Qt(t17) {
    return typeof t17 == "string" ? RegExp("^" + t17 + (t17.includes("$") || t17.slice(-1) == "-" ? "" : "$")) : t17;
  }
  function $t(t17, e18) {
    return t17.replace(/--(tw(?:-[\w-]+)?)\b/g, (r13, n21) => "--" + e18(n21).replace("#", ""));
  }
  function Xt(t17, e18) {
    let r13 = Rt(t17), n21 = function({ theme: s19, darkMode: u14, darkColor: f13, variants: c26, rules: p20, hash: d16, stringify: v6, ignorelist: g7 }) {
      let y9 = /* @__PURE__ */ new Map(), A5 = /* @__PURE__ */ new Map(), h9 = /* @__PURE__ */ new Map(), b11 = /* @__PURE__ */ new Map(), m15 = Nt(g7, ($3, j8) => j8.test($3));
      c26.push(["dark", Array.isArray(u14) || u14 == "class" ? `${x12(u14)[1] || ".dark"} &` : typeof u14 == "string" && u14 != "media" ? u14 : "@media (prefers-color-scheme:dark)"]);
      let C7 = typeof d16 == "function" ? ($3) => d16($3, V4) : d16 ? V4 : At;
      return { theme: function({ extend: $3 = {}, ...j8 }) {
        let E5 = {}, Ft = { get colors() {
          return I9("colors");
        }, theme: I9, negative: () => ({}), breakpoints(k7) {
          let M6 = {};
          for (let S12 in k7)
            typeof k7[S12] == "string" && (M6["screen-" + S12] = k7[S12]);
          return M6;
        } };
        return I9;
        function I9(k7, M6, S12, L6) {
          if (k7) {
            var q6;
            if ({ 1: k7, 2: L6 } = /^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(k7) || [, k7], /[.[]/.test(k7)) {
              let R6 = [];
              k7.replace(/\[([^\]]+)\]|([^.[]+)/g, (J2, It, Lt = It) => R6.push(Lt)), k7 = R6.shift(), S12 = M6, M6 = R6.join("-");
            }
            let O6 = E5[k7] || Object.assign(Object.assign(E5[k7] = {}, gt2(j8, k7)), gt2($3, k7));
            if (M6 == null)
              return O6;
            let P4 = (q6 = O6[M6 || "DEFAULT"]) != null ? q6 : S12;
            return L6 ? T7(P4, { opacityValue: ft(L6, I9) }) : P4;
          }
          let _2 = {};
          for (let O6 of [...Object.keys(j8), ...Object.keys($3)])
            _2[O6] = I9(O6);
          return _2;
        }
        function gt2(k7, M6) {
          let S12 = k7[M6];
          return typeof S12 == "function" && (S12 = S12(Ft)), S12 && /color|fill|stroke/i.test(M6) ? function L6(q6, _2 = []) {
            let O6 = {};
            for (let P4 in q6) {
              let R6 = q6[P4], J2 = [..._2, P4];
              O6[J2.join("-")] = R6, P4 == "DEFAULT" && (J2 = _2, O6[_2.join("-")] = R6), typeof R6 == "object" && Object.assign(O6, L6(R6, J2));
            }
            return O6;
          }(S12) : S12;
        }
      }(s19), e: W3, h: C7, s($3, j8) {
        return v6($t($3, C7), $t(j8, C7), this);
      }, d($3, j8, E5) {
        return f13?.($3, j8, this, E5);
      }, v($3) {
        return y9.has($3) || y9.set($3, vt($3, c26, A5, Ht, this) || "&:" + $3), y9.get($3);
      }, r($3, j8) {
        let E5 = JSON.stringify([$3, j8]);
        return h9.has(E5) || h9.set(E5, !m15($3, this) && vt($3, p20, b11, Kt, this, j8)), h9.get(E5);
      } };
    }(r13), i20 = /* @__PURE__ */ new Map(), l18 = [], o21 = /* @__PURE__ */ new Set();
    function a19(s19) {
      let u14 = s19.n && n21.h(s19.n), f13 = tt(u14 ? { ...s19, n: u14 } : s19);
      if (f13 && !o21.has(f13)) {
        o21.add(f13);
        let c26 = St(l18, s19);
        e18.insert(f13, c26, s19), l18.splice(c26, 0, s19);
      }
      return u14;
    }
    return e18.resume((s19) => i20.set(s19, s19), (s19, u14) => {
      e18.insert(s19, l18.length, u14), l18.push(u14), o21.add(s19);
    }), Object.defineProperties(function(s19) {
      if (!i20.size)
        for (let f13 of x12(r13.preflight))
          typeof f13 == "function" && (f13 = f13(n21)), f13 && (typeof f13 == "string" ? ht("", w11.b, N4(f13), n21, w11.b, [], false, true) : ct(f13, {}, n21, w11.b)).forEach(a19);
      s19 = "" + s19;
      let u14 = i20.get(s19);
      if (!u14) {
        let f13 = /* @__PURE__ */ new Set();
        for (let c26 of B6(N4(s19), n21))
          f13.add(c26.c).add(a19(c26));
        u14 = [...f13].filter(Boolean).join(" "), i20.set(s19, u14).set(u14, u14);
      }
      return u14;
    }, Object.getOwnPropertyDescriptors({ get target() {
      return e18.target;
    }, theme: n21.theme, config: r13, snapshot() {
      let s19 = e18.snapshot(), u14 = new Set(o21), f13 = new Map(i20), c26 = [...l18];
      return () => {
        s19(), o21 = u14, i20 = f13, l18 = c26;
      };
    }, clear() {
      e18.clear(), o21 = /* @__PURE__ */ new Set(), i20 = /* @__PURE__ */ new Map(), l18 = [];
    }, destroy() {
      this.clear(), e18.destroy();
    } }));
  }
  function zt(t17, e18) {
    return t17 != e18 && "" + t17.split(" ").sort() != "" + e18.split(" ").sort();
  }
  function te(t17 = z3, e18 = document.documentElement) {
    if (!e18)
      return t17;
    let r13 = new MutationObserver(i20);
    r13.observe(e18, { attributeFilter: ["class"], subtree: true, childList: true }), l18(e18), i20([{ target: e18, type: "" }]);
    let { destroy: n21 } = t17;
    return t17.destroy = () => {
      r13.disconnect(), n21.call(t17);
    }, t17;
    function i20(o21) {
      for (let { type: a19, target: s19 } of o21)
        if (a19[0] == "a")
          l18(s19);
        else
          for (let u14 of s19.querySelectorAll("[class]"))
            l18(u14);
      r13.takeRecords();
    }
    function l18(o21) {
      let a19, s19 = o21.getAttribute("class");
      s19 && zt(s19, a19 = t17(s19)) && o21.setAttribute("class", a19);
    }
  }
  function _t(t17) {
    let e18 = document.querySelector(t17 || "style[data-twind]");
    return e18 && e18.tagName == "STYLE" || ((e18 = document.createElement("style")).dataset.twind = "", document.head.prepend(e18)), e18;
  }
  function ee2(t17) {
    let e18 = t17?.cssRules ? t17 : (t17 && typeof t17 != "string" ? t17 : _t(t17)).sheet;
    return { target: e18, snapshot() {
      let r13 = Array.from(e18.cssRules, (n21) => n21.cssText);
      return () => {
        this.clear(), r13.forEach(this.insert);
      };
    }, clear() {
      for (let r13 = e18.cssRules.length; r13--; )
        e18.deleteRule(r13);
    }, destroy() {
      var r13;
      (r13 = e18.ownerNode) == null || r13.remove();
    }, insert(r13, n21) {
      try {
        e18.insertRule(r13, n21);
      } catch {
        e18.insertRule(":root{}", n21), /:-[mwo]/.test(r13);
      }
    }, resume: D3 };
  }
  function re2(t17) {
    let e18 = t17 && typeof t17 != "string" ? t17 : _t(t17);
    return { target: e18, snapshot() {
      let r13 = Array.from(e18.childNodes, (n21) => n21.textContent);
      return () => {
        this.clear(), r13.forEach(this.insert);
      };
    }, clear() {
      e18.textContent = "";
    }, destroy() {
      e18.remove();
    }, insert(r13, n21) {
      e18.insertBefore(document.createTextNode(r13), e18.childNodes[n21] || null);
    }, resume: D3 };
  }
  function Pt(t17, e18) {
    let r13 = t17 ? re2() : ee2();
    return e18 || (r13.resume = ne2), r13;
  }
  function Tt(t17) {
    return (t17.ownerNode || t17).textContent || (t17.cssRules ? Array.from(t17.cssRules, (e18) => e18.cssText) : x12(t17)).join("");
  }
  function ne2(t17, e18) {
    let r13 = Tt(this.target), n21 = /\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;
    if (n21.test(r13)) {
      var i20;
      let l18;
      for (let o21 of (n21.lastIndex = 0, this.clear(), document.querySelectorAll("[class]")))
        t17(o21.getAttribute("class"));
      for (; i20 = n21.exec(r13), l18 && e18(r13.slice(l18.index + l18[0].length, i20?.index), { p: parseInt(l18[1], 36), o: parseInt(l18[2], 36) / 2, n: l18[3] }), l18 = i20; )
        ;
    }
  }
  var z3 = new Proxy(D3, { apply: (t17, e18, r13) => F7(r13[0]), get(t17, e18) {
    let r13 = F7[e18];
    return typeof r13 == "function" ? function() {
      return r13.apply(F7, arguments);
    } : r13;
  } });
  function ie(t17 = {}, e18 = Pt, r13) {
    return F7?.destroy(), F7 = te(Xt(t17, typeof e18 == "function" ? e18() : e18), r13);
  }
  function $e(t17, e18 = true) {
    var r13;
    let n21 = Rt(t17);
    return ie({ ...n21, hash: (r13 = n21.hash) != null ? r13 : e18 }, () => Pt(!e18));
  }
  var xe = function t15(e18) {
    return new Proxy(function(r13, ...n21) {
      return xt(e18, "", r13, n21);
    }, { get: (r13, n21) => n21 === "bind" ? t15 : n21 in r13 ? r13[n21] : function(i20, ...l18) {
      return xt(e18, n21, i20, l18);
    } });
  }();
  function xt(t17, e18, r13, n21) {
    return { toString() {
      let i20 = U4(r13, n21), l18 = W3(e18 + V4(JSON.stringify([e18, i20])));
      return (typeof t17 == "function" ? t17 : z3)(dt({ [`@keyframes ${l18}`]: U4(r13, n21) })), l18;
    } };
  }

  // https://esm.sh/v102/style-vendorizer@2.2.3/deno/style-vendorizer.js
  var t16 = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
  function e16(r13) {
    return t16.get(r13);
  }
  function s16(r13) {
    var i20 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(r13);
    return i20 ? i20[1] ? 1 : i20[2] ? 2 : i20[3] ? 3 : 5 : 0;
  }
  function o19(r13, i20) {
    var a19 = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(r13);
    return a19 ? a19[1] ? /^sti/i.test(i20) ? 1 : 0 : a19[2] ? /^pat/i.test(i20) ? 1 : 0 : a19[3] ? /^image-/i.test(i20) ? 1 : 0 : a19[4] ? i20[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(i20) ? 4 : 0 : 0;
  }

  // https://esm.sh/v102/@twind/preset-autoprefix@1.0.1/deno/preset-autoprefix.js
  var c23 = [["-webkit-", 1], ["-moz-", 2], ["-ms-", 4]];
  function y6() {
    return ({ stringify: t17 }) => ({ stringify(r13, s19, e18) {
      let a19 = "", f13 = e16(r13);
      f13 && (a19 += t17(f13, s19, e18) + ";");
      let u14 = s16(r13), i20 = o19(r13, s19);
      for (let o21 of c23)
        u14 & o21[1] && (a19 += t17(o21[0] + r13, s19, e18) + ";"), i20 & o21[1] && (a19 += t17(r13, o21[0] + s19, e18) + ";");
      return a19 + t17(r13, s19, e18);
    } });
  }

  // https://esm.sh/v102/@twind/preset-tailwind@1.0.1/deno/defaultTheme.js
  var s17 = "inherit";
  var d15 = "currentColor";
  var p15 = "transparent";
  var x13 = "#000";
  var b9 = "#fff";
  var u12 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" };
  var g5 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" };
  var h7 = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" };
  var y7 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" };
  var k5 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" };
  var C5 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" };
  var T8 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" };
  var F8 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" };
  var w12 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" };
  var A4 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" };
  var D4 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" };
  var U5 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" };
  var E4 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" };
  var L5 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" };
  var S8 = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" };
  var v4 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" };
  var z4 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" };
  var O5 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" };
  var R4 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" };
  var W4 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" };
  var I6 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" };
  var M5 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" };
  var l16 = { __proto__: null, inherit: s17, current: d15, transparent: p15, black: x13, white: b9, slate: u12, gray: g5, zinc: h7, neutral: y7, stone: k5, red: C5, orange: T8, amber: F8, yellow: w12, lime: A4, green: D4, emerald: U5, teal: E4, cyan: L5, sky: S8, blue: v4, indigo: z4, violet: O5, purple: R4, fuchsia: W4, pink: I6, rose: M5 };
  var H4 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: l16, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...a17(4, "rem", 4, 0.5, 0.5), ...a17(12, "rem", 4, 5), 14: "3.5rem", ...a17(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: o20("blur"), backdropBrightness: o20("brightness"), backdropContrast: o20("contrast"), backdropGrayscale: o20("grayscale"), backdropHueRotate: o20("hueRotate"), backdropInvert: o20("invert"), backdropOpacity: o20("opacity"), backdropSaturate: o20("saturate"), backdropSepia: o20("sepia"), backgroundColor: o20("colors"), backgroundImage: { none: "none" }, backgroundOpacity: o20("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...a17(200, "", 100, 0, 50), ...a17(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e18 }) => ({ DEFAULT: e18("colors.gray.200", "currentColor"), ...e18("colors") }), borderOpacity: o20("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: o20("spacing"), borderWidth: { DEFAULT: "1px", ...n20(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: o20("colors"), caretColor: o20("colors"), accentColor: ({ theme: e18 }) => ({ auto: "auto", ...e18("colors") }), contrast: { ...a17(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: o20("borderColor"), divideOpacity: o20("borderOpacity"), divideWidth: o20("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: o20("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e18 }) => ({ ...e18("spacing"), ...i18(2, 6), ...i18(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: o20("spacing"), gradientColorStops: o20("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e18 }) => ({ ...e18("spacing"), ...i18(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e18 }) => ({ ...e18("spacing"), ...i18(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...a17(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e18 }) => ({ auto: "auto", ...e18("spacing") }), maxHeight: ({ theme: e18 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e18("spacing") }), maxWidth: ({ theme: e18, breakpoints: f13 }) => ({ ...f13(e18("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...a17(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: o20("spacing"), placeholderColor: o20("colors"), placeholderOpacity: o20("opacity"), outlineColor: o20("colors"), outlineOffset: n20(8, "px"), outlineWidth: n20(8, "px"), ringColor: ({ theme: e18 }) => ({ ...e18("colors"), DEFAULT: e18("colors.blue.500", "#3b82f6") }), ringOffsetColor: o20("colors"), ringOffsetWidth: n20(8, "px"), ringOpacity: ({ theme: e18 }) => ({ ...e18("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...n20(8, "px") }, rotate: { ...n20(2, "deg"), ...n20(12, "deg", 3), ...n20(180, "deg", 45) }, saturate: a17(200, "", 100, 0, 50), scale: { ...a17(150, "", 100, 0, 50), ...a17(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: o20("spacing"), scrollPadding: o20("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...n20(2, "deg"), ...n20(12, "deg", 3) }, space: o20("spacing"), stroke: o20("colors"), strokeWidth: a17(2), textColor: o20("colors"), textDecorationColor: o20("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...n20(8, "px") }, textUnderlineOffset: { auto: "auto", ...n20(8, "px") }, textIndent: o20("spacing"), textOpacity: o20("opacity"), transitionDuration: ({ theme: e18 }) => ({ ...e18("durations"), DEFAULT: "150ms" }), transitionDelay: o20("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e18 }) => ({ ...e18("spacing"), ...i18(2, 4), full: "100%" }), width: ({ theme: e18 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e18("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...a17(50, "", 1, 0, 10), auto: "auto" } };
  function i18(e18, f13) {
    let t17 = {};
    do
      for (var r13 = 1; r13 < e18; r13++)
        t17[`${r13}/${e18}`] = Number((r13 / e18 * 100).toFixed(6)) + "%";
    while (++e18 <= f13);
    return t17;
  }
  function n20(e18, f13, t17 = 0) {
    let r13 = {};
    for (; t17 <= e18; t17 = 2 * t17 || 1)
      r13[t17] = t17 + f13;
    return r13;
  }
  function a17(e18, f13 = "", t17 = 1, r13 = 0, m15 = 1, c26 = {}) {
    for (; r13 <= e18; r13 += m15)
      c26[r13] = r13 / t17 + f13;
    return c26;
  }
  function o20(e18) {
    return ({ theme: f13 }) => f13(e18);
  }

  // https://esm.sh/v102/@twind/preset-tailwind@1.0.1/deno/preflight.js
  var i19 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${H4.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${H4.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } };

  // https://esm.sh/v102/@twind/core@1.1.2/deno/core.js
  var B7;
  function ae2(e18) {
    return [...e18.v, (e18.i ? "!" : "") + e18.n].join(":");
  }
  function ue2(e18, t17 = ",") {
    return e18.map(ae2).join(t17);
  }
  var Y3 = typeof CSS < "u" && CSS.escape || ((e18) => e18.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function T9(e18) {
    for (var t17 = 9, r13 = e18.length; r13--; )
      t17 = Math.imul(t17 ^ e18.charCodeAt(r13), 1597334677);
    return "#" + ((t17 ^ t17 >>> 9) >>> 0).toString(36);
  }
  function Ce(e18, t17 = "@media ") {
    return t17 + b10(e18).map((r13) => (typeof r13 == "string" && (r13 = { min: r13 }), r13.raw || Object.keys(r13).map((i20) => `(${i20}-width:${r13[i20]})`).join(" and "))).join(",");
  }
  function b10(e18 = []) {
    return Array.isArray(e18) ? e18 : e18 == null ? [] : [e18];
  }
  function F9() {
  }
  var S9 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function Ee(e18) {
    return e18.match(/[-=:;]/g)?.length || 0;
  }
  function re3(e18) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e18) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e18), 15) << 18;
  }
  var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function ce3({ n: e18, i: t17, v: r13 = [] }, i20, n21, l18) {
    e18 && (e18 = ae2({ n: e18, i: t17, v: r13 })), l18 = [...b10(l18)];
    for (let s19 of r13) {
      let f13 = i20.theme("screens", s19);
      for (let a19 of b10(f13 && Ce(f13) || i20.v(s19))) {
        var o21;
        l18.push(a19), n21 |= f13 ? 67108864 | re3(a19) : s19 == "dark" ? 1073741824 : a19[0] == "@" ? re3(a19) : (o21 = a19, 1 << ~(/:([a-z-]+)/.test(o21) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: e18, p: n21, r: l18, i: t17 };
  }
  var pe = /* @__PURE__ */ new Map();
  function ne3(e18) {
    if (e18.d) {
      let t17 = [], r13 = H5(e18.r.reduce((i20, n21) => n21[0] == "@" ? (t17.push(n21), i20) : n21 ? H5(i20, (l18) => H5(n21, (o21) => {
        let s19 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o21);
        if (s19) {
          let f13 = l18.indexOf(s19[1]);
          return ~f13 ? l18.slice(0, f13) + s19[0] + l18.slice(f13 + s19[1].length) : Q3(l18, o21);
        }
        return Q3(o21, l18);
      })) : i20, "&"), (i20) => Q3(i20, e18.n ? "." + Y3(e18.n) : ""));
      return r13 && t17.push(r13.replace(/:merge\((.+?)\)/g, "$1")), t17.reduceRight((i20, n21) => n21 + "{" + i20 + "}", e18.d);
    }
  }
  function H5(e18, t17) {
    return e18.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r13, i20, n21) => t17(i20) + n21);
  }
  function Q3(e18, t17) {
    return e18.replace(/&/g, t17);
  }
  var $e2 = new Intl.Collator("en", { numeric: true });
  function Me(e18, t17) {
    for (var r13 = 0, i20 = e18.length; r13 < i20; ) {
      let n21 = i20 + r13 >> 1;
      0 >= Ne(e18[n21], t17) ? r13 = n21 + 1 : i20 = n21;
    }
    return i20;
  }
  function Ne(e18, t17) {
    let r13 = e18.p & S9.o;
    return r13 == (t17.p & S9.o) && (r13 == S9.b || r13 == S9.o) ? 0 : e18.p - t17.p || e18.o - t17.o || $e2.compare(we(e18.n), we(t17.n)) || $e2.compare(Ae(e18.n), Ae(t17.n));
  }
  function we(e18) {
    return (e18 || "").split(/:/).pop().split("/").pop() || "\0";
  }
  function Ae(e18) {
    return (e18 || "").replace(/\W/g, (t17) => String.fromCharCode(127 + t17.charCodeAt(0))) + "\0";
  }
  function X3(e18, t17) {
    return Math.round(parseInt(e18, 16) * t17);
  }
  function P3(e18, t17 = {}) {
    if (typeof e18 == "function")
      return e18(t17);
    let { opacityValue: r13 = "1", opacityVariable: i20 } = t17, n21 = i20 ? `var(${i20})` : r13;
    if (e18.includes("<alpha-value>"))
      return e18.replace("<alpha-value>", n21);
    if (e18[0] == "#" && (e18.length == 4 || e18.length == 7)) {
      let l18 = (e18.length - 1) / 3, o21 = [17, 1, 0.062272][l18 - 1];
      return `rgba(${[X3(e18.substr(1, l18), o21), X3(e18.substr(1 + l18, l18), o21), X3(e18.substr(1 + 2 * l18, l18), o21), n21]})`;
    }
    return n21 == "1" ? e18 : n21 == "0" ? "#0000" : e18.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n21})`);
  }
  function de(e18, t17, r13, i20, n21 = []) {
    return function l18(o21, { n: s19, p: f13, r: a19 = [], i: c26 }, u14) {
      let p20 = [], g7 = "", h9 = 0, $3 = 0;
      for (let y9 in o21 || {}) {
        var A5, R6;
        let d16 = o21[y9];
        if (y9[0] == "@") {
          if (!d16)
            continue;
          if (y9[1] == "a") {
            p20.push(...ge(s19, f13, I7("" + d16), u14, f13, a19, c26, true));
            continue;
          }
          if (y9[1] == "l") {
            for (let w14 of b10(d16))
              p20.push(...l18(w14, { n: s19, p: (A5 = S9[y9[7]], f13 & ~S9.o | A5), r: a19, i: c26 }, u14));
            continue;
          }
          if (y9[1] == "i") {
            p20.push(...b10(d16).map((w14) => ({ p: -1, o: 0, r: [], d: y9 + " " + w14 })));
            continue;
          }
          if (y9[1] == "k") {
            p20.push({ p: S9.d, o: 0, r: [y9], d: l18(d16, { p: S9.d }, u14).map(ne3).join("") });
            continue;
          }
          if (y9[1] == "f") {
            p20.push(...b10(d16).map((w14) => ({ p: S9.d, o: 0, r: [y9], d: l18(w14, { p: S9.d }, u14).map(ne3).join("") })));
            continue;
          }
        }
        if (typeof d16 != "object" || Array.isArray(d16))
          y9 == "label" && d16 ? s19 = d16 + T9(JSON.stringify([f13, c26, o21])) : (d16 || d16 === 0) && (y9 = y9.replace(/[A-Z]/g, (w14) => "-" + w14.toLowerCase()), $3 += 1, h9 = Math.max(h9, (R6 = y9)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g7 += (g7 ? ";" : "") + b10(d16).map((w14) => u14.s(y9, he("" + w14, u14.theme) + (c26 ? " !important" : ""))).join(";"));
        else if (y9[0] == "@" || y9.includes("&")) {
          let w14 = f13;
          y9[0] == "@" && (y9 = y9.replace(/\bscreen\(([^)]+)\)/g, (j8, M6) => {
            let N6 = u14.theme("screens", M6);
            return N6 ? (w14 |= 67108864, Ce(N6, "")) : j8;
          }), w14 |= re3(y9)), p20.push(...l18(d16, { n: s19, p: w14, r: [...a19, y9], i: c26 }, u14));
        } else
          p20.push(...l18(d16, { p: f13, r: [...a19, y9] }, u14));
      }
      return p20.unshift({ n: s19, p: f13, o: Math.max(0, 15 - $3) + 1.5 * Math.min(h9 || 15, 15), r: a19, d: g7 }), p20.sort(Ne);
    }(e18, ce3(t17, r13, i20, n21), r13);
  }
  function he(e18, t17) {
    return e18.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r13, i20, n21, l18, o21 = "") => {
      let s19 = t17(n21, o21);
      return typeof s19 == "function" && /color|fill|stroke/i.test(n21) ? P3(s19) : "" + b10(s19).filter((f13) => Object(f13) !== f13);
    });
  }
  function ye(e18, t17) {
    let r13, i20 = [];
    for (let n21 of e18)
      n21.d && n21.n ? r13?.p == n21.p && "" + r13.r == "" + n21.r ? (r13.c = [r13.c, n21.c].filter(Boolean).join(" "), r13.d = r13.d + ";" + n21.d) : i20.push(r13 = { ...n21, n: n21.n && t17 }) : i20.push({ ...n21, n: n21.n && t17 });
    return i20;
  }
  function W5(e18, t17, r13 = S9.u, i20, n21) {
    let l18 = [];
    for (let o21 of e18)
      for (let s19 of function(f13, a19, c26, u14, p20) {
        f13 = { ...f13, i: f13.i || p20 };
        let g7 = function(h9, $3) {
          let A5 = pe.get(h9.n);
          return A5 ? A5(h9, $3) : $3.r(h9.n, h9.v[0] == "dark");
        }(f13, a19);
        return g7 ? typeof g7 == "string" ? ({ r: u14, p: c26 } = ce3(f13, a19, c26, u14), ye(W5(I7(g7), a19, c26, u14, f13.i), f13.n)) : Array.isArray(g7) ? g7.map((h9) => {
          var $3, A5;
          return { o: 0, ...h9, r: [...b10(u14), ...b10(h9.r)], p: ($3 = c26, A5 = h9.p ?? c26, $3 & ~S9.o | A5) };
        }) : de(g7, f13, a19, c26, u14) : [{ c: ae2(f13), p: 0, o: 0, r: [] }];
      }(o21, t17, r13, i20, n21))
        l18.splice(Me(l18, s19), 0, s19);
    return l18;
  }
  function ge(e18, t17, r13, i20, n21, l18, o21, s19) {
    return ye((s19 ? r13.flatMap((f13) => W5([f13], i20, n21, l18, o21)) : W5(r13, i20, n21, l18, o21)).map((f13) => f13.p & S9.o && (f13.n || t17 == S9.b) ? { ...f13, p: f13.p & ~S9.o | t17, o: 0 } : f13), e18);
  }
  function _e2(e18, t17, r13, i20) {
    var n21;
    return n21 = (l18, o21) => {
      let { n: s19, p: f13, r: a19, i: c26 } = ce3(l18, o21, t17);
      return r13 && ge(s19, t17, r13, o21, f13, a19, c26, i20);
    }, pe.set(e18, n21), e18;
  }
  function K3(e18, t17, r13) {
    if (e18[e18.length - 1] != "(") {
      let i20 = [], n21 = false, l18 = false, o21 = "";
      for (let s19 of e18)
        if (!(s19 == "(" || /[~@]$/.test(s19))) {
          if (s19[0] == "!" && (s19 = s19.slice(1), n21 = !n21), s19.endsWith(":")) {
            i20[s19 == "dark:" ? "unshift" : "push"](s19.slice(0, -1));
            continue;
          }
          s19[0] == "-" && (s19 = s19.slice(1), l18 = !l18), s19.endsWith("-") && (s19 = s19.slice(0, -1)), s19 && s19 != "&" && (o21 += (o21 && "-") + s19);
        }
      o21 && (l18 && (o21 = "-" + o21), t17[0].push({ n: o21, v: i20.filter(Be), i: n21 }));
    }
  }
  function Be(e18, t17, r13) {
    return r13.indexOf(e18) == t17;
  }
  var Se = /* @__PURE__ */ new Map();
  function I7(e18) {
    let t17 = Se.get(e18);
    if (!t17) {
      let r13 = [], i20 = [[]], n21 = 0, l18 = 0, o21 = null, s19 = 0, f13 = (a19, c26 = 0) => {
        n21 != s19 && (r13.push(e18.slice(n21, s19 + c26)), a19 && K3(r13, i20)), n21 = s19 + 1;
      };
      for (; s19 < e18.length; s19++) {
        let a19 = e18[s19];
        if (l18)
          e18[s19 - 1] != "\\" && (l18 += +(a19 == "[") || -(a19 == "]"));
        else if (a19 == "[")
          l18 += 1;
        else if (o21)
          e18[s19 - 1] != "\\" && o21.test(e18.slice(s19)) && (o21 = null, n21 = s19 + RegExp.lastMatch.length);
        else if (a19 == "/" && e18[s19 - 1] != "\\" && (e18[s19 + 1] == "*" || e18[s19 + 1] == "/"))
          o21 = e18[s19 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (a19 == "(")
          f13(), r13.push(a19);
        else if (a19 == ":")
          e18[s19 + 1] != ":" && f13(false, 1);
        else if (/[\s,)]/.test(a19)) {
          f13(true);
          let c26 = r13.lastIndexOf("(");
          if (a19 == ")") {
            let u14 = r13[c26 - 1];
            if (/[~@]$/.test(u14)) {
              let p20 = i20.shift();
              r13.length = c26, K3([...r13, "#"], i20);
              let { v: g7 } = i20[0].pop();
              for (let h9 of p20)
                h9.v.splice(+(h9.v[0] == "dark") - +(g7[0] == "dark"), g7.length);
              K3([...r13, _e2(u14.length > 1 ? u14.slice(0, -1) + T9(JSON.stringify([u14, p20])) : u14 + "(" + ue2(p20) + ")", S9.a, p20, /@$/.test(u14))], i20);
            }
            c26 = r13.lastIndexOf("(", c26 - 1);
          }
          r13.length = c26 + 1;
        } else
          /[~@]/.test(a19) && e18[s19 + 1] == "(" && i20.unshift([]);
      }
      f13(true), Se.set(e18, t17 = i20[0]);
    }
    return t17;
  }
  function Ve(e18, t17, r13) {
    return t17.reduce((i20, n21, l18) => i20 + r13(n21) + e18[l18 + 1], e18[0]);
  }
  function Z3(e18, t17) {
    return Array.isArray(e18) && Array.isArray(e18.raw) ? Ve(e18, t17, (r13) => ee3(r13).trim()) : t17.filter(Boolean).reduce((r13, i20) => r13 + ee3(i20), e18 ? ee3(e18) : "");
  }
  function ee3(e18) {
    let t17, r13 = "";
    if (e18 && typeof e18 == "object")
      if (Array.isArray(e18))
        (t17 = Z3(e18[0], e18.slice(1))) && (r13 += " " + t17);
      else
        for (let i20 in e18)
          e18[i20] && (r13 += " " + i20);
    else
      e18 != null && typeof e18 != "boolean" && (r13 += " " + e18);
    return r13;
  }
  var pt2 = ze("@");
  var dt2 = ze("~");
  function ze(e18) {
    return new Proxy(function(i20, ...n21) {
      return t17("", i20, n21);
    }, { get(r13, i20) {
      return i20 in r13 ? r13[i20] : function(l18, ...o21) {
        return t17(i20, l18, o21);
      };
    } });
    function t17(r13, i20, n21) {
      return ue2(I7(r13 + e18 + "(" + Z3(i20, n21) + ")"));
    }
  }
  function G4(e18, t17) {
    return Array.isArray(e18) ? ve(Ve(e18, t17, (r13) => r13 != null && typeof r13 != "boolean" ? r13 : "")) : typeof e18 == "string" ? ve(e18) : [e18];
  }
  var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function ve(e18) {
    let t17;
    e18 = e18.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r13 = [{}], i20 = [r13[0]], n21 = [];
    for (; t17 = We.exec(e18); )
      t17[4] && (r13.shift(), n21.shift()), t17[3] ? (n21.unshift(t17[3]), r13.unshift({}), i20.push(n21.reduce((l18, o21) => ({ [o21]: l18 }), r13[0]))) : t17[4] || (r13[0][t17[1]] && (r13.unshift({}), i20.push(n21.reduce((l18, o21) => ({ [o21]: l18 }), r13[0]))), r13[0][t17[1]] = t17[2]);
    return i20;
  }
  function me(e18, ...t17) {
    var r13;
    let i20 = G4(e18, t17), n21 = (i20.find((l18) => l18.label)?.label || "css") + T9(JSON.stringify(i20));
    return r13 = (l18, o21) => ye(i20.flatMap((s19) => de(s19, l18, o21, S9.o)), n21), pe.set(n21, r13), n21;
  }
  var ht2 = new Proxy(function(e18, t17) {
    return Re("animation", e18, t17);
  }, { get(e18, t17) {
    return t17 in e18 ? e18[t17] : function(i20, n21) {
      return Re(t17, i20, n21);
    };
  } });
  function Re(e18, t17, r13) {
    return { toString() {
      return me({ label: e18, "@layer components": { ...typeof t17 == "object" ? t17 : { animation: t17 }, animationName: "" + r13 } });
    } };
  }
  function yt2(e18, t17, r13) {
    return [e18, ie2(t17, r13)];
  }
  function ie2(e18, t17) {
    return typeof e18 == "function" ? e18 : typeof e18 == "string" && /^[\w-]+$/.test(e18) ? (r13, i20) => ({ [e18]: t17 ? t17(r13, i20) : le(r13, 1) }) : (r13) => e18 || { [r13[1]]: le(r13, 2) };
  }
  function le(e18, t17, r13 = e18.slice(t17).find(Boolean) || e18.$$ || e18.input) {
    return e18.input[0] == "-" ? `calc(${r13} * -1)` : r13;
  }
  function gt(e18, t17, r13, i20) {
    return [e18, Ge(t17, r13, i20)];
  }
  function Ge(e18, t17, r13) {
    let i20 = typeof t17 == "string" ? (n21, l18) => ({ [t17]: r13 ? r13(n21, l18) : n21._ }) : t17 || (({ 1: n21, _: l18 }, o21, s19) => ({ [n21 || s19]: l18 }));
    return (n21, l18) => {
      let o21 = ke(e18 || n21[1]), s19 = l18.theme(o21, n21.$$) ?? oe2(n21.$$, o21, l18);
      if (s19 != null)
        return n21._ = le(n21, 0, s19), i20(n21, l18, o21);
    };
  }
  function mt2(e18, t17 = {}, r13) {
    return [e18, Ye(t17, r13)];
  }
  function Ye(e18 = {}, t17) {
    return (r13, i20) => {
      let { section: n21 = ke(r13[0]).replace("-", "") + "Color" } = e18, [l18, o21] = Ze(r13.$$);
      if (!l18)
        return;
      let s19 = i20.theme(n21, l18) || oe2(l18, n21, i20);
      if (!s19 || typeof s19 == "object")
        return;
      let { opacityVariable: f13 = `--tw-${r13[0].replace(/-$/, "")}-opacity`, opacitySection: a19 = n21.replace("Color", "Opacity"), property: c26 = n21, selector: u14 } = e18, p20 = i20.theme(a19, o21 || "DEFAULT") || o21 && oe2(o21, a19, i20), g7 = t17 || (({ _: $3 }) => {
        let A5 = He(c26, $3);
        return u14 ? { [u14]: A5 } : A5;
      });
      r13._ = { value: P3(s19, { opacityVariable: f13 || void 0, opacityValue: p20 || void 0 }), color: ($3) => P3(s19, $3), opacityVariable: f13 || void 0, opacityValue: p20 || void 0 };
      let h9 = g7(r13, i20);
      if (!r13.dark) {
        let $3 = i20.d(n21, l18, s19);
        $3 && $3 !== s19 && (r13._ = { value: P3($3, { opacityVariable: f13 || void 0, opacityValue: p20 || "1" }), color: (A5) => P3($3, A5), opacityVariable: f13 || void 0, opacityValue: p20 || void 0 }, h9 = { "&": h9, [i20.v("dark")]: g7(r13, i20) });
      }
      return h9;
    };
  }
  function Ze(e18) {
    return (e18.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
  }
  function He(e18, t17) {
    let r13 = {};
    return typeof t17 == "string" ? r13[e18] = t17 : (t17.opacityVariable && t17.value.includes(t17.opacityVariable) && (r13[t17.opacityVariable] = t17.opacityValue || "1"), r13[e18] = t17.value), r13;
  }
  function oe2(e18, t17, r13) {
    if (e18[0] == "[" && e18.slice(-1) == "]") {
      if (e18 = se(he(e18.slice(1, -1), r13.theme)), !t17)
        return e18;
      if (!(/color|fill|stroke/i.test(t17) && !(/^color:/.test(e18) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e18)) || /image/i.test(t17) && !(/^image:/.test(e18) || /^[a-z-]+\(/.test(e18)) || /weight/i.test(t17) && !(/^(number|any):/.test(e18) || /^\d+$/.test(e18)) || /position/i.test(t17) && /^(length|size):/.test(e18)))
        return e18.replace(/^[a-z-]+:/, "");
    }
  }
  function ke(e18) {
    return e18.replace(/-./g, (t17) => t17[1].toUpperCase());
  }
  function se(e18) {
    return e18.includes("url(") ? e18.replace(/(.*?)(url\(.*?\))(.*?)/g, (t17, r13 = "", i20, n21 = "") => se(r13) + i20 + se(n21)) : e18.replace(/(^|[^\\])_+/g, (t17, r13) => r13 + " ".repeat(t17.length - r13.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t17) => t17.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
  }
  var Qe = Symbol();
  var D5 = new Proxy(F9, { apply(e18, t17, r13) {
    return B7(r13[0]);
  }, get(e18, t17) {
    let r13 = B7[t17];
    return typeof r13 == "function" ? function() {
      return r13.apply(B7, arguments);
    } : r13;
  } });
  var Rt2 = function e17(t17) {
    return new Proxy(function(i20, ...n21) {
      return xe2(t17, "", i20, n21);
    }, { get(r13, i20) {
      return i20 === "bind" ? e17 : i20 in r13 ? r13[i20] : function(l18, ...o21) {
        return xe2(t17, i20, l18, o21);
      };
    } });
  }();
  function xe2(e18, t17, r13, i20) {
    return { toString() {
      let n21 = G4(r13, i20), l18 = Y3(t17 + T9(JSON.stringify([t17, n21])));
      return (typeof e18 == "function" ? e18 : D5)(me({ [`@keyframes ${l18}`]: G4(r13, i20) })), l18;
    } };
  }

  // https://esm.sh/v102/@twind/preset-tailwind@1.0.1/deno/rules.js
  var j7 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: t17, 2: r13 }, a19) => ({ "@layer overrides": { "&": { [t17]: oe2(`[${r13}]`, t17, a19) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: t17 }, { h: r13 }) => [{ c: r13(t17) }]), gt("aspect-", "aspectRatio"), yt2("container", (t17, { theme: r13 }) => {
    let { screens: a19 = r13("screens"), center: i20, padding: l18 } = r13("container"), d16 = { width: "100%", marginRight: i20 && "auto", marginLeft: i20 && "auto", ...g7("xs") };
    for (let f13 in a19) {
      let c26 = a19[f13];
      typeof c26 == "string" && (d16[Ce(c26)] = { "&": { maxWidth: c26, ...g7(f13) } });
    }
    return d16;
    function g7(f13) {
      let c26 = l18 && (typeof l18 == "string" ? l18 : l18[f13] || l18.DEFAULT);
      if (c26)
        return { paddingRight: c26, paddingLeft: c26 };
    }
  }), gt("content-", "content", ({ _: t17 }) => ({ "--tw-content": t17, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: t17 }) => t17 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", u13), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: t17 = "", 2: r13 }) => ({ ["overscroll-behavior" + t17]: r13 })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: t17, _: r13 }) => ({ top: t17 != "-x" && r13, right: t17 != "-y" && r13, bottom: t17 != "-x" && r13, left: t17 != "-y" && r13 })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", v5), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", $2), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", S10), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", $2), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", S10), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (t17) => u13(v5(t17))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", x14), yt2("(content|items|self)-", (t17) => ({ ["align-" + t17[1]]: x14(t17) })), yt2("(place-(content|items|self))-", ({ 1: t17, $$: r13 }) => ({ [t17]: ("wun".includes(r13[3]) ? "space-" : "") + r13 })), gt("p([xytrbl])?(?:$|-)", "padding", w13("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", w13("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: t17, _: r13 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t17}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[t17]]: `calc(${r13} * calc(1 - var(--tw-space-${t17}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[t17]]: `calc(${r13} * var(--tw-space-${t17}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: t17 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t17}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", s18), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: t17, 2: r13 = "", 3: a19 }) => r13 == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a19 ? "numeric-fraction" : "pt".includes(r13[0]) ? "numeric-spacing" : r13 ? "numeric-figure" : t17)]: t17, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: t17 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": t17 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: t17 }) => typeof t17 == "string" ? { fontSize: t17 } : { fontSize: t17[0], ...typeof t17[1] == "string" ? { lineHeight: t17[1] } : t17[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: false, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: false, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: false, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: t17 }) => `linear-gradient(to ${p16(t17, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t17 }) => ({ "--tw-gradient-from": t17.value, "--tw-gradient-to": t17.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t17 }) => ({ "--tw-gradient-to": t17.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${t17.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: false, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: t17 }) => t17 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: t17 }) => t17 + (t17 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", u13), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: t17, _: r13 }) => {
    let a19 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[t17] || [t17, t17];
    return { [`border-${p16(a19[0])}-radius`]: r13, [`border-${p16(a19[1])}-radius`]: r13 };
  }), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: t17, _: r13 }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (t17 || "-x")]: r13, ["--tw-border-spacing" + (t17 || "-y")]: r13, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, w13("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", w13("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: t17 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": t17 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: t17 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: t17 } })), yt2("divide-([xy]-reverse)", ({ 1: t17 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + t17]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: t17, _: r13 }) => {
    let a19 = { x: "lr", y: "tb" }[t17];
    return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${t17}-reverse`]: "0", [`border-${p16(a19[0])}Width`]: `calc(${r13} * calc(1 - var(--tw-divide-${t17}-reverse)))`, [`border-${p16(a19[1])}Width`]: `calc(${r13} * var(--tw-divide-${t17}-reverse))` } };
  }), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: false }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: t17 }, { theme: r13 }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t17} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r13("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P3(r13("ringOffsetColor", "", "#fff")), "--tw-ring-color": P3(r13("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r13("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: false, opacitySection: "opacity" }, ({ _: t17 }) => ({ "--tw-shadow-color": t17.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: t17 }) => ({ "--tw-shadow": s18(t17), "--tw-shadow-colored": s18(t17).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...k6(), ...k6("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (t17, { theme: r13 }) => ({ transitionProperty: s18(t17), transitionTimingFunction: t17._ == "none" ? void 0 : s18(r13("transitionTimingFunction", "")), transitionDuration: t17._ == "none" ? void 0 : s18(r13("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", s18), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", s18), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", s18), gt("animate(?:$|-)", "animation", (t17, { theme: r13, h: a19 }) => {
    let i20 = s18(t17), l18 = i20.split(" "), d16 = r13("keyframes", l18[0]);
    return d16 ? { ["@keyframes " + (l18[0] = a19(l18[0]))]: d16, animation: l18.join(" ") } : { animation: i20 };
  }), "(transform)-(none)", yt2("transform", h8), yt2("transform-(cpu|gpu)", ({ 1: t17 }) => ({ "--tw-transform": C6(t17 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: t17, _: r13 }) => ({ ["--tw-scale" + (t17 || "-x")]: r13, ["--tw-scale" + (t17 || "-y")]: r13, ...h8() })), gt("-?(rotate)-", "rotate", y8), gt("-?(translate-[xy])-", "translate", y8), gt("-?(skew-[xy])-", "skew", y8), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", u13), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: t17 }) => ({ "scroll-snap-type": t17 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", w13("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", w13("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: t17, 2: r13, 3: a19 }) => ({ [`--tw-${r13 ? "pan-x" : a19 ? "pan-y" : t17}`]: t17, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: false, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: t17 }) => ({ x: "horizontal", y: "vertical" })[t17] || t17 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: false, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: false, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
  function u13(t17) {
    return (typeof t17 == "string" ? t17 : t17[1]).replace(/-/g, " ").trim();
  }
  function v5(t17) {
    return (typeof t17 == "string" ? t17 : t17[1]).replace("col", "column");
  }
  function p16(t17, r13 = "-") {
    let a19 = [];
    for (let i20 of t17)
      a19.push({ t: "top", r: "right", b: "bottom", l: "left" }[i20]);
    return a19.join(r13);
  }
  function s18(t17) {
    return t17 && "" + (t17._ || t17);
  }
  function x14({ $$: t17 }) {
    return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[t17[3] || ""] || "") + t17;
  }
  function w13(t17, r13 = "") {
    return ({ 1: a19, _: i20 }) => {
      let l18 = { x: "lr", y: "tb" }[a19] || a19 + a19;
      return l18 ? { ...He(t17 + "-" + p16(l18[0]) + r13, i20), ...He(t17 + "-" + p16(l18[1]) + r13, i20) } : He(t17 + r13, i20);
    };
  }
  function k6(t17 = "") {
    let r13 = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", t17 && "opacity", "saturate", "sepia", !t17 && "drop-shadow"].filter(Boolean), a19 = {};
    for (let i20 of r13)
      a19[`--tw-${t17}${i20}`] = "var(--tw-empty,/*!*/ /*!*/)";
    return a19 = { [`${t17}filter`]: r13.map((i20) => `var(--tw-${t17}${i20})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a19 } }, [`(${t17}filter)-(none)`, yt2(`${t17}filter`, a19), ...r13.map((i20) => gt(`${i20[0] == "h" ? "-?" : ""}(${t17}${i20})(?:$|-)`, i20, ({ 1: l18, _: d16 }) => ({ [`--tw-${l18}`]: b10(d16).map((g7) => `${i20}(${g7})`).join(" "), ...a19 })))];
  }
  function y8({ 1: t17, _: r13 }) {
    return { ["--tw-" + t17]: r13, ...h8() };
  }
  function h8() {
    return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": C6() } } };
  }
  function C6(t17) {
    return [t17 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
  }
  function S10({ 1: t17, 2: r13 }) {
    return `${t17} ${r13} / ${t17} ${r13}`;
  }
  function $2({ 1: t17 }) {
    return `repeat(${t17},minmax(0,1fr))`;
  }

  // https://esm.sh/v102/@twind/preset-tailwind@1.0.1/deno/variants.js
  var c24 = [["sticky", "@supports ((position: -webkit-sticky) or (position:sticky))"], ["motion-reduce", "@media (prefers-reduced-motion:reduce)"], ["motion-safe", "@media (prefers-reduced-motion:no-preference)"], ["print", "@media print"], ["portrait", "@media (orientation:portrait)"], ["landscape", "@media (orientation:landscape)"], ["contrast-more", "@media (prefers-contrast:more)"], ["contrast-less", "@media (prefers-contrast:less)"], ["marker", "& *::marker,&::marker"], ["selection", "& *::selection,&::selection"], ["first-letter", "&::first-letter"], ["first-line", "&::first-line"], ["file", "&::file-selector-button"], ["placeholder", "&::placeholder"], ["backdrop", "&::backdrop"], ["first", "&:first-child"], ["last", "&:last-child"], ["even", "&:nth-child(2n)"], ["odd", "&:nth-child(odd)"], ["open", "&[open]"], ["((group|peer)(~[^-[]+)?)(-[a-z-]+|-\\[(.+)]|\\[.+])", ({ 1: e18, 4: r13, 5: i20 }, { e: s19, h: a19, v: l18 }) => {
    let t17 = i20 && se(i20) || (r13[0] == "[" ? r13 : l18(r13.slice(1)));
    return `${(t17.includes("&") ? t17 : "&" + t17).replace(/&/g, `:merge(.${s19(a19(e18))})`)}${e18[0] == "p" ? "~" : " "}&`;
  }], ["(ltr|rtl)", ({ 1: e18 }) => `[dir="${e18}"] &`], [/^\[(.+)]$/, ({ 1: e18 }) => /[&@]/.test(e18) && se(e18).replace(/[}]+$/, "").split("{")]];

  // https://esm.sh/v102/@twind/preset-tailwind@1.0.1/deno/preset-tailwind.js
  function l17({ disablePreflight: r13 } = {}) {
    return { preflight: r13 ? void 0 : i19, theme: H4, variants: c24, rules: j7 };
  }

  // https://esm.sh/v102/notie@4.3.1/deno/notie.js
  var Me2 = Object.create;
  var xe3 = Object.defineProperty;
  var He2 = Object.getOwnPropertyDescriptor;
  var Se2 = Object.getOwnPropertyNames;
  var we2 = Object.getPrototypeOf;
  var Oe = Object.prototype.hasOwnProperty;
  var Ae2 = (y9, o21) => () => (o21 || y9((o21 = { exports: {} }).exports, o21), o21.exports);
  var De = (y9, o21, v6, b11) => {
    if (o21 && typeof o21 == "object" || typeof o21 == "function")
      for (let m15 of Se2(o21))
        !Oe.call(y9, m15) && m15 !== v6 && xe3(y9, m15, { get: () => o21[m15], enumerable: !(b11 = He2(o21, m15)) || b11.enumerable });
    return y9;
  };
  var Ie = (y9, o21, v6) => (v6 = y9 != null ? Me2(we2(y9)) : {}, De(o21 || !y9 || !y9.__esModule ? xe3(v6, "default", { value: y9, enumerable: true }) : v6, y9));
  var ye2 = Ae2((ie3, pe2) => {
    (function(y9, o21) {
      typeof ie3 == "object" && typeof pe2 == "object" ? pe2.exports = o21() : typeof define == "function" && define.amd ? define([], o21) : typeof ie3 == "object" ? ie3.notie = o21() : y9.notie = o21();
    })(ie3, function() {
      return function(y9) {
        function o21(b11) {
          if (v6[b11])
            return v6[b11].exports;
          var m15 = v6[b11] = { i: b11, l: false, exports: {} };
          return y9[b11].call(m15.exports, m15, m15.exports, o21), m15.l = true, m15.exports;
        }
        var v6 = {};
        return o21.m = y9, o21.c = v6, o21.i = function(b11) {
          return b11;
        }, o21.d = function(b11, m15, ce4) {
          o21.o(b11, m15) || Object.defineProperty(b11, m15, { configurable: false, enumerable: true, get: ce4 });
        }, o21.n = function(b11) {
          var m15 = b11 && b11.__esModule ? function() {
            return b11.default;
          } : function() {
            return b11;
          };
          return o21.d(m15, "a", m15), m15;
        }, o21.o = function(b11, m15) {
          return Object.prototype.hasOwnProperty.call(b11, m15);
        }, o21.p = "", o21(o21.s = 1);
      }([function(y9, o21) {
        y9.exports = function(v6) {
          return v6.webpackPolyfill || (v6.deprecate = function() {
          }, v6.paths = [], v6.children || (v6.children = []), Object.defineProperty(v6, "loaded", { enumerable: true, get: function() {
            return v6.l;
          } }), Object.defineProperty(v6, "id", { enumerable: true, get: function() {
            return v6.i;
          } }), v6.webpackPolyfill = 1), v6;
        };
      }, function(y9, o21, v6) {
        "use strict";
        (function(b11) {
          var m15, ce4, re4, V5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A5) {
            return typeof A5;
          } : function(A5) {
            return A5 && typeof Symbol == "function" && A5.constructor === Symbol && A5 !== Symbol.prototype ? "symbol" : typeof A5;
          };
          (function(A5, u14) {
            V5(o21) === "object" && V5(b11) === "object" ? b11.exports = u14() : (ce4 = [], m15 = u14, re4 = typeof m15 == "function" ? m15.apply(o21, ce4) : m15, re4 !== void 0 && (b11.exports = re4));
          })(void 0, function() {
            return function(A5) {
              function u14(g7) {
                if (X4[g7])
                  return X4[g7].exports;
                var T10 = X4[g7] = { i: g7, l: false, exports: {} };
                return A5[g7].call(T10.exports, T10, T10.exports, u14), T10.l = true, T10.exports;
              }
              var X4 = {};
              return u14.m = A5, u14.c = X4, u14.i = function(g7) {
                return g7;
              }, u14.d = function(g7, T10, B8) {
                u14.o(g7, T10) || Object.defineProperty(g7, T10, { configurable: false, enumerable: true, get: B8 });
              }, u14.n = function(g7) {
                var T10 = g7 && g7.__esModule ? function() {
                  return g7.default;
                } : function() {
                  return g7;
                };
                return u14.d(T10, "a", T10), T10;
              }, u14.o = function(g7, T10) {
                return Object.prototype.hasOwnProperty.call(g7, T10);
              }, u14.p = "", u14(u14.s = 0);
            }([function(A5, u14, X4) {
              function g7(t17, c26) {
                var s19 = {};
                for (var d16 in t17)
                  c26.indexOf(d16) >= 0 || Object.prototype.hasOwnProperty.call(t17, d16) && (s19[d16] = t17[d16]);
                return s19;
              }
              Object.defineProperty(u14, "__esModule", { value: true });
              var T10 = typeof Symbol == "function" && V5(Symbol.iterator) === "symbol" ? function(t17) {
                return typeof t17 > "u" ? "undefined" : V5(t17);
              } : function(t17) {
                return t17 && typeof Symbol == "function" && t17.constructor === Symbol && t17 !== Symbol.prototype ? "symbol" : typeof t17 > "u" ? "undefined" : V5(t17);
              }, B8 = Object.assign || function(t17) {
                for (var c26 = 1; c26 < arguments.length; c26++) {
                  var s19 = arguments[c26];
                  for (var d16 in s19)
                    Object.prototype.hasOwnProperty.call(s19, d16) && (t17[d16] = s19[d16]);
                }
                return t17;
              }, J2 = { top: "top", bottom: "bottom" }, e18 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: true, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J2.top, force: J2.top, confirm: J2.top, input: J2.top, select: J2.bottom, date: J2.top } }, ge2 = u14.setOptions = function(t17) {
                e18 = B8({}, e18, t17, { classes: B8({}, e18.classes, t17.classes), ids: B8({}, e18.ids, t17.ids), positions: B8({}, e18.positions, t17.positions) });
              }, fe = function() {
                return new Promise(function(t17) {
                  return setTimeout(t17, 0);
                });
              }, oe3 = function(t17) {
                return new Promise(function(c26) {
                  return setTimeout(c26, 1e3 * t17);
                });
              }, R6 = function() {
                document.activeElement && document.activeElement.blur();
              }, W6 = function() {
                var t17 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c26) {
                  var s19 = 16 * Math.random() | 0, d16 = c26 === "x" ? s19 : 3 & s19 | 8;
                  return d16.toString(16);
                });
                return "notie-" + t17;
              }, le2 = { 1: e18.classes.backgroundSuccess, success: e18.classes.backgroundSuccess, 2: e18.classes.backgroundWarning, warning: e18.classes.backgroundWarning, 3: e18.classes.backgroundError, error: e18.classes.backgroundError, 4: e18.classes.backgroundInfo, info: e18.classes.backgroundInfo, 5: e18.classes.backgroundNeutral, neutral: e18.classes.backgroundNeutral }, me2 = function() {
                return e18.transitionSelector + " " + e18.transitionDuration + "s " + e18.transitionCurve;
              }, $3 = function(t17) {
                return t17.keyCode === 13;
              }, ee4 = function(t17) {
                return t17.keyCode === 27;
              }, K5 = function(t17, c26) {
                t17.classList.add(e18.classes.container), t17.style[c26] = "-10000px", document.body.appendChild(t17), t17.style[c26] = "-" + t17.offsetHeight + "px", t17.listener && window.addEventListener("keydown", t17.listener), fe().then(function() {
                  t17.style.transition = me2(), t17.style[c26] = 0;
                });
              }, O6 = function(t17, c26) {
                var s19 = document.getElementById(t17);
                s19 && (s19.style[c26] = "-" + s19.offsetHeight + "px", s19.listener && window.removeEventListener("keydown", s19.listener), oe3(e18.transitionDuration).then(function() {
                  s19.parentNode && s19.parentNode.removeChild(s19);
                }));
              }, te2 = function(t17, c26) {
                var s19 = document.createElement("div");
                s19.id = e18.ids.overlay, s19.classList.add(e18.classes.overlay), s19.classList.add(e18.classes.backgroundOverlay), s19.style.opacity = 0, t17 && e18.overlayClickDismiss && (s19.onclick = function() {
                  O6(t17.id, c26), j8();
                }), document.body.appendChild(s19), fe().then(function() {
                  s19.style.transition = me2(), s19.style.opacity = e18.overlayOpacity;
                });
              }, j8 = function() {
                var t17 = document.getElementById(e18.ids.overlay);
                t17.style.opacity = 0, oe3(e18.transitionDuration).then(function() {
                  t17.parentNode && t17.parentNode.removeChild(t17);
                });
              }, F10 = u14.hideAlerts = function(t17) {
                var c26 = document.getElementsByClassName(e18.classes.alert);
                if (c26.length) {
                  for (var s19 = 0; s19 < c26.length; s19++) {
                    var d16 = c26[s19];
                    O6(d16.id, d16.position);
                  }
                  t17 && oe3(e18.transitionDuration).then(function() {
                    return t17();
                  });
                }
              }, he2 = u14.alert = function(t17) {
                var c26 = t17.type, s19 = c26 === void 0 ? 4 : c26, d16 = t17.text, i20 = t17.time, k7 = i20 === void 0 ? e18.alertTime : i20, H6 = t17.stay, S12 = H6 !== void 0 && H6, h9 = t17.position, p20 = h9 === void 0 ? e18.positions.alert || p20.top : h9;
                R6(), F10();
                var l18 = document.createElement("div"), f13 = W6();
                l18.id = f13, l18.position = p20, l18.classList.add(e18.classes.textbox), l18.classList.add(le2[s19]), l18.classList.add(e18.classes.alert), l18.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d16 + "</div>", l18.onclick = function() {
                  return O6(f13, p20);
                }, l18.listener = function(n21) {
                  ($3(n21) || ee4(n21)) && F10();
                }, K5(l18, p20), k7 && k7 < 1 && (k7 = 1), !S12 && k7 && oe3(k7).then(function() {
                  return O6(f13, p20);
                });
              }, ke2 = u14.force = function(t17, c26) {
                var s19 = t17.type, d16 = s19 === void 0 ? 5 : s19, i20 = t17.text, k7 = t17.buttonText, H6 = k7 === void 0 ? "OK" : k7, S12 = t17.callback, h9 = t17.position, p20 = h9 === void 0 ? e18.positions.force || p20.top : h9;
                R6(), F10();
                var l18 = document.createElement("div"), f13 = W6();
                l18.id = f13;
                var n21 = document.createElement("div");
                n21.classList.add(e18.classes.textbox), n21.classList.add(e18.classes.backgroundInfo), n21.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + i20 + "</div>";
                var r13 = document.createElement("div");
                r13.classList.add(e18.classes.button), r13.classList.add(le2[d16]), r13.innerHTML = H6, r13.onclick = function() {
                  O6(f13, p20), j8(), S12 ? S12() : c26 && c26();
                }, l18.appendChild(n21), l18.appendChild(r13), l18.listener = function(C7) {
                  $3(C7) && r13.click();
                }, K5(l18, p20), te2();
              }, Ce2 = u14.confirm = function(t17, c26, s19) {
                var d16 = t17.text, i20 = t17.submitText, k7 = i20 === void 0 ? "Yes" : i20, H6 = t17.cancelText, S12 = H6 === void 0 ? "Cancel" : H6, h9 = t17.submitCallback, p20 = t17.cancelCallback, l18 = t17.position, f13 = l18 === void 0 ? e18.positions.confirm || f13.top : l18;
                R6(), F10();
                var n21 = document.createElement("div"), r13 = W6();
                n21.id = r13;
                var C7 = document.createElement("div");
                C7.classList.add(e18.classes.textbox), C7.classList.add(e18.classes.backgroundInfo), C7.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d16 + "</div>";
                var x15 = document.createElement("div");
                x15.classList.add(e18.classes.button), x15.classList.add(e18.classes.elementHalf), x15.classList.add(e18.classes.backgroundSuccess), x15.innerHTML = k7, x15.onclick = function() {
                  O6(r13, f13), j8(), h9 ? h9() : c26 && c26();
                };
                var a19 = document.createElement("div");
                a19.classList.add(e18.classes.button), a19.classList.add(e18.classes.elementHalf), a19.classList.add(e18.classes.backgroundError), a19.innerHTML = S12, a19.onclick = function() {
                  O6(r13, f13), j8(), p20 ? p20() : s19 && s19();
                }, n21.appendChild(C7), n21.appendChild(x15), n21.appendChild(a19), n21.listener = function(E5) {
                  $3(E5) ? x15.click() : ee4(E5) && a19.click();
                }, K5(n21, f13), te2(n21, f13);
              }, ve2 = function(t17, c26, s19) {
                var d16 = t17.text, i20 = t17.submitText, k7 = i20 === void 0 ? "Submit" : i20, H6 = t17.cancelText, S12 = H6 === void 0 ? "Cancel" : H6, h9 = t17.submitCallback, p20 = t17.cancelCallback, l18 = t17.position, f13 = l18 === void 0 ? e18.positions.input || f13.top : l18, n21 = g7(t17, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                R6(), F10();
                var r13 = document.createElement("div"), C7 = W6();
                r13.id = C7;
                var x15 = document.createElement("div");
                x15.classList.add(e18.classes.textbox), x15.classList.add(e18.classes.backgroundInfo), x15.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d16 + "</div>";
                var a19 = document.createElement("input");
                a19.classList.add(e18.classes.inputField), a19.setAttribute("autocapitalize", n21.autocapitalize || "none"), a19.setAttribute("autocomplete", n21.autocomplete || "off"), a19.setAttribute("autocorrect", n21.autocorrect || "off"), a19.setAttribute("autofocus", n21.autofocus || "true"), a19.setAttribute("inputmode", n21.inputmode || "verbatim"), a19.setAttribute("max", n21.max || ""), a19.setAttribute("maxlength", n21.maxlength || ""), a19.setAttribute("min", n21.min || ""), a19.setAttribute("minlength", n21.minlength || ""), a19.setAttribute("placeholder", n21.placeholder || ""), a19.setAttribute("spellcheck", n21.spellcheck || "default"), a19.setAttribute("step", n21.step || "any"), a19.setAttribute("type", n21.type || "text"), a19.value = n21.value || "", n21.allowed && (a19.oninput = function() {
                  var M6 = void 0;
                  if (Array.isArray(n21.allowed)) {
                    for (var w14 = "", _2 = n21.allowed, P4 = 0; P4 < _2.length; P4++)
                      _2[P4] === "an" ? w14 += "0-9a-zA-Z" : _2[P4] === "a" ? w14 += "a-zA-Z" : _2[P4] === "n" && (w14 += "0-9"), _2[P4] === "s" && (w14 += " ");
                    M6 = new RegExp("[^" + w14 + "]", "g");
                  } else
                    T10(n21.allowed) === "object" && (M6 = n21.allowed);
                  a19.value = a19.value.replace(M6, "");
                });
                var E5 = document.createElement("div");
                E5.classList.add(e18.classes.button), E5.classList.add(e18.classes.elementHalf), E5.classList.add(e18.classes.backgroundSuccess), E5.innerHTML = k7, E5.onclick = function() {
                  O6(C7, f13), j8(), h9 ? h9(a19.value) : c26 && c26(a19.value);
                };
                var D7 = document.createElement("div");
                D7.classList.add(e18.classes.button), D7.classList.add(e18.classes.elementHalf), D7.classList.add(e18.classes.backgroundError), D7.innerHTML = S12, D7.onclick = function() {
                  O6(C7, f13), j8(), p20 ? p20(a19.value) : s19 && s19(a19.value);
                }, r13.appendChild(x15), r13.appendChild(a19), r13.appendChild(E5), r13.appendChild(D7), r13.listener = function(M6) {
                  $3(M6) ? E5.click() : ee4(M6) && D7.click();
                }, K5(r13, f13), a19.focus(), te2(r13, f13);
              };
              u14.input = ve2;
              var Ee2 = u14.select = function(t17, c26) {
                var s19 = t17.text, d16 = t17.cancelText, i20 = d16 === void 0 ? "Cancel" : d16, k7 = t17.cancelCallback, H6 = t17.choices, S12 = t17.position, h9 = S12 === void 0 ? e18.positions.select || h9.top : S12;
                R6(), F10();
                var p20 = document.createElement("div"), l18 = W6();
                p20.id = l18;
                var f13 = document.createElement("div");
                f13.classList.add(e18.classes.textbox), f13.classList.add(e18.classes.backgroundInfo), f13.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + s19 + "</div>", p20.appendChild(f13), H6.forEach(function(r13, C7) {
                  var x15 = r13.type, a19 = x15 === void 0 ? 1 : x15, E5 = r13.text, D7 = r13.handler, M6 = document.createElement("div");
                  M6.classList.add(le2[a19]), M6.classList.add(e18.classes.button), M6.classList.add(e18.classes.selectChoice);
                  var w14 = H6[C7 + 1];
                  w14 && !w14.type && (w14.type = 1), w14 && w14.type === a19 && M6.classList.add(e18.classes.selectChoiceRepeated), M6.innerHTML = E5, M6.onclick = function() {
                    O6(l18, h9), j8(), D7();
                  }, p20.appendChild(M6);
                });
                var n21 = document.createElement("div");
                n21.classList.add(e18.classes.backgroundNeutral), n21.classList.add(e18.classes.button), n21.innerHTML = i20, n21.onclick = function() {
                  O6(l18, h9), j8(), k7 ? k7() : c26 && c26();
                }, p20.appendChild(n21), p20.listener = function(r13) {
                  ee4(r13) && n21.click();
                }, K5(p20, h9), te2(p20, h9);
              }, Te = u14.date = function(t17, c26, s19) {
                var d16 = t17.value, i20 = d16 === void 0 ? new Date() : d16, k7 = t17.submitText, H6 = k7 === void 0 ? "OK" : k7, S12 = t17.cancelText, h9 = S12 === void 0 ? "Cancel" : S12, p20 = t17.submitCallback, l18 = t17.cancelCallback, f13 = t17.position, n21 = f13 === void 0 ? e18.positions.date || n21.top : f13;
                R6(), F10();
                var r13 = "&#9662", C7 = document.createElement("div"), x15 = document.createElement("div"), a19 = document.createElement("div"), E5 = function(L6) {
                  C7.innerHTML = e18.dateMonths[L6.getMonth()], x15.innerHTML = L6.getDate(), a19.innerHTML = L6.getFullYear();
                }, D7 = function(L6) {
                  var N6 = new Date(i20.getFullYear(), i20.getMonth() + 1, 0).getDate(), Q4 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                  Number(Q4) > N6 && (Q4 = N6.toString()), L6.target.textContent = Q4, Number(Q4) < 1 && (Q4 = "1"), i20.setDate(Number(Q4));
                }, M6 = function(L6) {
                  var N6 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                  L6.target.textContent = N6, i20.setFullYear(Number(N6));
                }, w14 = function(L6) {
                  E5(i20);
                }, _2 = function(L6) {
                  var N6 = new Date(i20.getFullYear(), i20.getMonth() + L6 + 1, 0).getDate();
                  i20.getDate() > N6 && i20.setDate(N6), i20.setMonth(i20.getMonth() + L6), E5(i20);
                }, P4 = function(L6) {
                  i20.setDate(i20.getDate() + L6), E5(i20);
                }, be = function(L6) {
                  var N6 = i20.getFullYear() + L6;
                  N6 < 0 ? i20.setFullYear(0) : i20.setFullYear(i20.getFullYear() + L6), E5(i20);
                }, Y4 = document.createElement("div"), de2 = W6();
                Y4.id = de2;
                var ue3 = document.createElement("div");
                ue3.classList.add(e18.classes.backgroundInfo);
                var I9 = document.createElement("div");
                I9.classList.add(e18.classes.dateSelectorInner);
                var Z4 = document.createElement("div");
                Z4.classList.add(e18.classes.button), Z4.classList.add(e18.classes.elementThird), Z4.classList.add(e18.classes.dateSelectorUp), Z4.innerHTML = r13;
                var q6 = document.createElement("div");
                q6.classList.add(e18.classes.button), q6.classList.add(e18.classes.elementThird), q6.classList.add(e18.classes.dateSelectorUp), q6.innerHTML = r13;
                var G5 = document.createElement("div");
                G5.classList.add(e18.classes.button), G5.classList.add(e18.classes.elementThird), G5.classList.add(e18.classes.dateSelectorUp), G5.innerHTML = r13, C7.classList.add(e18.classes.element), C7.classList.add(e18.classes.elementThird), C7.innerHTML = e18.dateMonths[i20.getMonth()], x15.classList.add(e18.classes.element), x15.classList.add(e18.classes.elementThird), x15.setAttribute("contentEditable", true), x15.addEventListener("input", D7), x15.addEventListener("blur", w14), x15.innerHTML = i20.getDate(), a19.classList.add(e18.classes.element), a19.classList.add(e18.classes.elementThird), a19.setAttribute("contentEditable", true), a19.addEventListener("input", M6), a19.addEventListener("blur", w14), a19.innerHTML = i20.getFullYear();
                var ne4 = document.createElement("div");
                ne4.classList.add(e18.classes.button), ne4.classList.add(e18.classes.elementThird), ne4.innerHTML = r13;
                var se2 = document.createElement("div");
                se2.classList.add(e18.classes.button), se2.classList.add(e18.classes.elementThird), se2.innerHTML = r13;
                var ae3 = document.createElement("div");
                ae3.classList.add(e18.classes.button), ae3.classList.add(e18.classes.elementThird), ae3.innerHTML = r13, Z4.onclick = function() {
                  return _2(1);
                }, q6.onclick = function() {
                  return P4(1);
                }, G5.onclick = function() {
                  return be(1);
                }, ne4.onclick = function() {
                  return _2(-1);
                }, se2.onclick = function() {
                  return P4(-1);
                }, ae3.onclick = function() {
                  return be(-1);
                };
                var z5 = document.createElement("div");
                z5.classList.add(e18.classes.button), z5.classList.add(e18.classes.elementHalf), z5.classList.add(e18.classes.backgroundSuccess), z5.innerHTML = H6, z5.onclick = function() {
                  O6(de2, n21), j8(), p20 ? p20(i20) : c26 && c26(i20);
                };
                var U6 = document.createElement("div");
                U6.classList.add(e18.classes.button), U6.classList.add(e18.classes.elementHalf), U6.classList.add(e18.classes.backgroundError), U6.innerHTML = h9, U6.onclick = function() {
                  O6(de2, n21), j8(), l18 ? l18(i20) : s19 && s19(i20);
                }, I9.appendChild(Z4), I9.appendChild(q6), I9.appendChild(G5), I9.appendChild(C7), I9.appendChild(x15), I9.appendChild(a19), I9.appendChild(ne4), I9.appendChild(se2), I9.appendChild(ae3), ue3.appendChild(I9), Y4.appendChild(ue3), Y4.appendChild(z5), Y4.appendChild(U6), Y4.listener = function(L6) {
                  $3(L6) ? z5.click() : ee4(L6) && U6.click();
                }, K5(Y4, n21), te2(Y4, n21);
              };
              u14.default = { alert: he2, force: ke2, confirm: Ce2, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F10 };
            }]);
          });
        }).call(o21, v6(0)(y9));
      }]);
    });
  });
  var je = Ie(ye2());
  var { default: Le, ...Ne2 } = je;
  var Fe = Le !== void 0 ? Le : Ne2;

  // https://esm.sh/v102/nanostores@0.7.1/deno/nanostores.js
  var S11 = Symbol("clean");
  var c25 = Symbol();

  // https://esm.sh/v102/@nanostores/i18n@0.7.1/deno/i18n.js
  function g6(r13, n21) {
    if (typeof r13 == "string")
      return n21(r13);
    {
      let e18 = {};
      for (let t17 in r13)
        e18[t17] = g6(r13[t17], n21);
      return e18;
    }
  }
  function p18(r13) {
    return (n21) => {
      if (n21.transform) {
        let e18 = n21.transform;
        return n21 = n21.input, { input: n21, transform(t17, o21, s19) {
          let f13 = r13(t17, o21, ...s19);
          return (...l18) => e18(t17, f13, l18);
        } };
      } else
        return { input: n21, transform(e18, t17, o21) {
          return r13(e18, t17, ...o21);
        } };
    };
  }
  var N5 = p18((r13, n21, e18) => g6(n21, (t17) => {
    for (let o21 in e18)
      t17 = t17.replace(new RegExp(`{${o21}}`, "g"), e18[o21]);
    return t17;
  }));
  var R5 = p18((r13, n21, e18) => {
    let t17 = new Intl.PluralRules(r13).select(e18);
    return t17 in n21 || (t17 = "many"), g6(n21[t17], (o21) => o21.replace(/{count}/g, e18));
  });

  // deps.ts
  var toast = Fe.alert;

  // https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
  var a18 = 0;
  function p19(n21, s19, t17, f13, u14) {
    var r13, o21, _2 = {};
    for (o21 in s19)
      o21 == "ref" ? r13 = s19[o21] : _2[o21] = s19[o21];
    var e18 = { type: n21, props: _2, key: t17, ref: r13, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a18, __source: u14, __self: f13 };
    if (typeof n21 == "function" && (r13 = n21.defaultProps))
      for (o21 in r13)
        _2[o21] === void 0 && (_2[o21] = r13[o21]);
    return d.vnode && d.vnode(e18), e18;
  }

  // components/switch.tsx
  function Switch({ value, defaultCase = null, cases }) {
    if (value == null)
      return null;
    return /* @__PURE__ */ p19(L, {
      children: cases[value] != null ? cases[value] : defaultCase
    });
  }

  // hooks/use_route.ts
  function useRoute() {
    const [route, setRoute] = P2(location.hash);
    j2(() => {
      const updateRoute = () => setRoute(location.hash);
      globalThis.addEventListener("hashchange", updateRoute, false);
      return () => {
        globalThis.removeEventListener("hashchange", updateRoute);
      };
    }, []);
    return route;
  }

  // utils/platform.ts
  function isDeno() {
    return typeof Deno !== "undefined";
  }

  // browser/mock_browser.ts
  var listeners = {
    addListener: () => {
    },
    removeListener: () => {
    },
    hasListener: () => {
    }
  };
  var mock_browser_default = {
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
  if (isDeno()) {
    browserAPI = mock_browser_default;
  } else {
    browserAPI = globalThis.browser;
  }

  // libs/use-chrome-storage/storage.ts
  var storage = {
    get: (key, defaultValue, storageArea) => {
      const keyObj = defaultValue === void 0 ? key : { [key]: defaultValue };
      return browserAPI.storage[storageArea].get(
        keyObj
      );
    },
    set: (key, value, storageArea) => {
      return browserAPI.storage[storageArea].set({ [key]: value });
    }
  };

  // constant.ts
  var brandName = "Next Translator";
  var brandId = "immersive-translate";
  var targetContainerElementAttributeName = `data-${brandId}-container`;
  var buildinConfigStorageKey = "buildinConfig";
  var contextMenuId = `${brandId}-context-menu`;
  var contextOpenOptionsMenuId = `${brandId}-open-options-menu`;
  var hostname = "immersive-translate.owenyoung.com";
  var homepage = `https://${hostname}/`;
  var buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`;
  var sourceElementMarkAttributeName = `data-${brandId}-mark`;
  var sourceElementParagraphAttributeName = `data-${brandId}-paragraph-id`;
  var sourceAtomicBlockElementMarkAttributeName = `data-${brandId}-atomic-block-mark`;
  var sourceInlineElementMarkAttributeName = `data-${brandId}-inline-mark`;
  var sourceBlockElementMarkAttributeName = `data-${brandId}-block-mark`;
  var sourceElementWithGlobalStyleMarkAttributeName = `data-${brandId}-global-style-mark`;
  var translationTextSeparator = "\n@\u{1F6A0}\n";
  var translationTargetElementWrapperClass = `${brandId}-target-wrapper`;
  var translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`;
  var translationTargetTranslationElementInlineWrapperClass = `${brandId}-target-translation-inline-wrapper`;
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
  ];
  var buildinExcludeUrls = [
    "https://immersive-translate.owenyoung.com/options/",
    "http://localhost:8000/dist/userscript/options/",
    "https://www.deepl.com/translator",
    "translate.google.com"
  ];

  // log.ts
  var Timing = class {
    #t = performance.now();
    reset() {
      this.#t = performance.now();
    }
    stop(message) {
      const now = performance.now();
      const d16 = Math.round(now - this.#t);
      let cf = colors_exports.green;
      if (d16 > 1e4) {
        cf = colors_exports.red;
      } else if (d16 > 1e3) {
        cf = colors_exports.yellow;
      }
      console.debug(
        colors_exports.dim(brandName + " TIMING:"),
        message,
        "in",
        cf(d16 + "ms")
      );
      this.#t = now;
    }
  };
  var Logger = class {
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
      if (this.#level <= 0 /* Debug */) {
        console.log(colors_exports.dim(brandName + " DEBUG:"), ...args);
      }
    }
    info(...args) {
      if (this.#level <= 1 /* Info */) {
        console.log(colors_exports.green(brandName + " INFO:"), ...args);
      }
    }
    warn(...args) {
      if (this.#level <= 2 /* Warn */) {
        console.warn(colors_exports.yellow(brandName + " WARN:"), ...args);
      }
    }
    error(...args) {
      if (this.#level <= 3 /* Error */) {
        console.error(colors_exports.red(brandName + " ERROR:"), ...args);
      }
    }
    fatal(...args) {
      if (this.#level <= 4 /* Fatal */) {
        console.error(colors_exports.red(brandName + " FATAL:"), ...args);
      }
    }
    timing() {
      if (this.level === 0 /* Debug */) {
        return new Timing();
      }
      return { reset: () => {
      }, stop: () => {
      } };
    }
  };
  var log_default = new Logger();

  // libs/use-chrome-storage/useChromeStorage.ts
  function useChromeStorage(key, initialValue, storageArea) {
    const [INITIAL_VALUE3] = P2(() => {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    });
    const [STORAGE_AREA] = P2(storageArea);
    const [state, setState] = P2(INITIAL_VALUE3);
    const [isPersistent, setIsPersistent] = P2(true);
    const [error2, setError] = P2("");
    j2(() => {
      storage.get(key, INITIAL_VALUE3, STORAGE_AREA).then((res) => {
        if (res[key]) {
          setState(res[key]);
        }
        setIsPersistent(true);
        setError("");
      }).catch((error3) => {
        setIsPersistent(false);
        setError(error3);
      });
    }, [key, INITIAL_VALUE3, STORAGE_AREA]);
    const updateValue = L2(
      (newValue) => {
        const toStore = typeof newValue === "function" ? newValue(state) : newValue;
        log_default.debug(`new settings`, toStore);
        storage.set(key, toStore, STORAGE_AREA).then(() => {
          setState(toStore);
          setIsPersistent(true);
          setError("");
        }).catch((error3) => {
          setState(toStore);
          setIsPersistent(false);
          setError(error3);
        });
      },
      [STORAGE_AREA, key, state]
    );
    return [state, updateValue, isPersistent, error2];
  }

  // libs/use-chrome-storage/createChromeStorageStateHook.ts
  function createChromeStorageStateHook(key, initialValue, storageArea) {
    const consumers = [];
    return function useCreateChromeStorageHook() {
      const [value, setValue, isPersistent, error2] = useChromeStorage(
        key,
        initialValue,
        storageArea
      );
      const setValueAll = L2((newValue) => {
        for (const consumer of consumers) {
          consumer(newValue);
        }
      }, []);
      j2(() => {
        consumers.push(setValue);
        return () => {
          consumers.splice(consumers.indexOf(setValue), 1);
        };
      }, [setValue]);
      return [value, setValueAll, isPersistent, error2];
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
  var SETTINGS_KEY = "userConfig";
  var INITIAL_VALUE = {};
  var useUserConfig = createChromeStorageStateHookSync(
    SETTINGS_KEY,
    INITIAL_VALUE
  );

  // env.ts
  function getEnv() {
    if (typeof process === "undefined") {
      if (typeof Deno !== "undefined") {
        const denoEnv = Deno.env.toObject();
        return denoEnv;
      }
    }
    const injectEnv = define_process_env_default;
    return injectEnv;
  }
  var env = getEnv();
  function isMonkey() {
    return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
  }
  function isDeno2() {
    return typeof Deno !== "undefined";
  }

  // buildin_config.json
  var buildin_config_default = {
    "minVersion": "0.0.4.2",
    "translationParagraphLanguagePattern": {
      "matches": [
        "www.reddit.com",
        "old.reddit.com",
        "twitter.com",
        "*.twitter.com",
        "github.com",
        "gist.github.com",
        "www.facebook.com",
        "www.youtube.com",
        "read.readwise.io",
        "www.inoreader.com",
        "mail.google.com",
        "google.com",
        "discord.com",
        "detectParagraphLanguage",
        "web.telegram.org",
        "*.slack.com"
      ]
    },
    "generalRule": {
      "wrapperPrefix": "smart",
      "wrapperSuffix": "smart",
      "urlChangeDelay": 10,
      "globalStyles": {},
      "selectors": [],
      "additionalSelectors": [
        "h1",
        "section h2",
        "section h3",
        "main h2",
        "main h3",
        ".article-title",
        ".article-subtitle",
        ".article_title",
        ".article_subtitle",
        ".article__title",
        ".articleTitle",
        ".Article__content",
        ".title",
        ".titleLink",
        ".summary",
        ".content",
        ".headline"
      ],
      "excludeSelectors": [],
      "additionalExcludeSelectors": [
        ".social-share",
        ".breadcrumbs",
        ".post__footer",
        ".btn",
        ".reference-citations"
      ],
      "translationClasses": [],
      "atomicBlockSelectors": [],
      "excludeTags": [
        "TITLE",
        "SCRIPT",
        "STYLE",
        "TEXTAREA",
        "SVG",
        "svg",
        "INPUT",
        "BUTTON",
        "LABEL",
        "IMG",
        "SUB",
        "SUP",
        "BR",
        "PRE",
        "CODE",
        "KBD",
        "WBR",
        "TT"
      ],
      "additionalExcludeTags": [],
      "stayOriginalTags": [
        "CODE",
        "TT"
      ],
      "additionalStayOriginalTags": [],
      "inlineTags": [
        "A",
        "ABBR",
        "ACRONYM",
        "B",
        "BDO",
        "BIG",
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
        "TT",
        "VAR",
        "IMG",
        "CODE",
        "SCRIPT",
        "TIME"
      ],
      "additionalInlineTags": [],
      "extraInlineSelectors": [],
      "additionalInlineSelectors": [],
      "extraBlockSelectors": []
    },
    "rules": [
      {
        "matches": [
          "mail.jabber.org",
          "antirez.com"
        ],
        "excludeTags": [
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
        "matches": "*.wikipedia.org",
        "excludeSelectors": [
          ".mw-editsection",
          ".mw-cite-backlink"
        ]
      },
      {
        "matches": [
          "twitter.com",
          "mobile.twitter.com",
          "tweetdeck.twitter.com"
        ],
        "selectors": [
          '[data-testid="tweetText"]',
          ".tweet-text",
          ".js-quoted-tweet-text",
          "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
          "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
          "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"
        ],
        "extraInlineSelectors": [
          '[data-testid="tweetText"] div'
        ]
      },
      {
        "matches": [
          "stackoverflow.com",
          "*.stackexchange.com",
          "superuser.com",
          "askubuntu.com",
          "serverfault.com"
        ],
        "additionalSelectors": [
          ".comment-copy"
        ]
      },
      {
        "matches": "developer.apple.com/documentation/*",
        "selectors": [
          ".container",
          "h3.title"
        ]
      },
      {
        "matches": "news.ycombinator.com",
        "selectors": [
          ".titleline > a",
          ".comment > .commtext",
          ".toptext",
          "a.hn-item-title",
          ".hn-comment-text",
          ".hn-story-title"
        ],
        "excludeSelectors": [
          ".reply"
        ]
      },
      {
        "matches": "www.reddit.com",
        "selectors": [
          "h1",
          "[data-click-id=body] h3",
          "[data-click-id=background] h3",
          "[data-testid=comment]",
          "[data-adclicklocation=media]",
          ".Comment__body",
          "faceplate-batch .md"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": [
          "old.reddit.com/*/.compact",
          "old.reddit.com/.compact"
        ],
        "selectors": [
          ".title > a",
          ".usertext-body"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "old.reddit.com",
        "selectors": [
          "p.title > a",
          "[role=main] .md-container"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "www.reuters.com/",
        "excludeSelectors": [
          "header"
        ]
      },
      {
        "matches": "github.com",
        "selectors": [
          ".markdown-title",
          ".markdown-body"
        ],
        "excludeSelectors": [
          ".css-truncate"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "www.facebook.com",
        "selectors": [
          "div[dir=auto][style]",
          "div[dir=auto][class]",
          "span[lang]"
        ],
        "excludeSelectors": [
          "[role=button]"
        ],
        "translationClasses": "immersive-translate-text",
        "detectParagraphLanguage": true
      },
      {
        "matches": "www.youtube.com",
        "selectors": [
          "yt-formatted-string[slot=content].ytd-comment-renderer",
          "h1 > yt-formatted-string.ytd-watch-metadata",
          "yt-formatted-string#video-title",
          "span#video-title"
        ],
        "wrapperPrefix": "\n",
        "wrapperSuffix": "\n",
        "globalStyles": {
          "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;",
          "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
          "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
          "span#video-title": "-webkit-line-clamp: unset;max-height: unset;"
        },
        "urlChangeDelay": 2e3,
        "atomicBlockSelectors": [
          "yt-formatted-string[slot=content].ytd-comment-renderer",
          "h1 > yt-formatted-string.ytd-watch-metadata",
          "yt-formatted-string#video-title",
          "span#video-title"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "1paragraph.app",
        "selectors": "#book"
      },
      {
        "matches": [
          "*.substack.com",
          "newsletter.rootsofprogress.org"
        ],
        "selectors": [
          ".post-preview-title",
          ".post-preview-description",
          ".post",
          ".comment-body"
        ],
        "excludeSelectors": [
          ".captioned-button-wrap",
          ".subscription-widget-wrap",
          ".tweet-header",
          ".tweet-link-bottom",
          ".expanded-link",
          ".meta-subheader"
        ],
        "extraBlockSelectors": [
          ".tweet-link-top",
          ".tweet-link-bottom",
          ".expanded-link"
        ]
      },
      {
        "matches": [
          "seekingalpha.com/article/*",
          "seekingalpha.com/news/*"
        ],
        "selectors": [
          "[data-test-id=card-container]"
        ],
        "excludeSelectors": [
          "[data-test-id=post-page-meta]",
          "header > div:first-child"
        ]
      },
      {
        "matches": "hn.algolia.com",
        "selectors": [
          ".Story_title > a:first-child",
          ".Story_comment > span"
        ]
      },
      {
        "matches": "read.readwise.io",
        "selectors": [
          'div[class^="_titleRow_"]',
          'div[class^="_description_"]',
          "#document-text-content"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "www.inoreader.com",
        "selectors": [
          ".article_title_link",
          ".article_content"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "mail.google.com",
        "selectors": [
          "h2[data-thread-perm-id]",
          "span[data-thread-id]",
          "div[data-message-id] div[class='']"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "www.producthunt.com",
        "selectors": [
          "h2",
          "div[class^='styles_htmlText__']",
          "[class^='styles_tagline']",
          "a[href^='/discussions/'].fontWeight-600",
          "button[class^='styles_textButton'] > div > span"
        ],
        "excludeTags": [
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
        "matches": "*.gitbook.io",
        "additionalSelectors": [
          "main"
        ],
        "_comment": "https://midjourney.gitbook.io/docs/user-manual"
      },
      {
        "matches": "arxiv.org",
        "additionalSelectors": [
          "h1",
          "blockquote.abstract"
        ]
      },
      {
        "matches": "discord.com",
        "selectors": [
          "li[id^=chat-messages] div[id^=message-content]",
          "h3[data-text-variant='heading-lg/semibold']"
        ],
        "excludeSelectors": [
          "div[class^='repliedTextContent']"
        ],
        "globalStyles": {
          "div[class^=headerText]": "max-height: unset;",
          "h3[data-text-variant='heading-lg/semibold']": "-webkit-line-clamp: none;"
        },
        "detectParagraphLanguage": true,
        "wrapperPrefix": "\n",
        "wrapperSuffix": "\n"
      },
      {
        "matches": "web.telegram.org/z/*",
        "selectors": [
          ".text-content"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": [
          "web.telegram.org/k/*",
          "web.telegram.org/k/"
        ],
        "selectors": [
          ".message"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "gist.github.com",
        "selectors": [
          ".markdown-body",
          ".readme"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "lobste.rs",
        "selectors": [
          ".u-repost-of",
          ".comment_text"
        ]
      },
      {
        "matches": "*.slack.com",
        "selectors": [
          ".p-rich_text_section"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "1paragraph.app",
        "additionalSelectors": [
          "#book"
        ]
      },
      {
        "matches": "www.google.*/search*",
        "selectors": [
          "h2",
          "a h3",
          "div[data-content-feature='1'] > div",
          "a [aria-level='3']",
          "a [aria-level='3'] + div",
          ".Uroaid"
        ],
        "detectParagraphLanguage": true
      },
      {
        "matches": "lowendtalk.com",
        "selectors": [
          "[role=heading]",
          "h1",
          ".userContent"
        ]
      },
      {
        "matches": "www.linkedin.com/jobs/*",
        "selectors": [
          "#job-details > span"
        ]
      },
      {
        "matches": "www.linkedin.com",
        "addtionalSelectors": [
          "span.break-words > span > span[dir=ltr]"
        ]
      },
      {
        "matches": "www.indiehackers.com",
        "selectors": [
          ".content",
          "h1",
          ".feed-item__title-link"
        ]
      },
      {
        "matches": "libreddit.de",
        "selectors": [
          "h2.post_title",
          ".comment_body > .md"
        ]
      },
      {
        "matches": [
          "notion.site",
          "www.notion.so"
        ],
        "selectors": [
          "div[data-block-id]"
        ]
      },
      {
        "matches": "www.newyorker.com",
        "additionalSelectors": [
          "h1",
          "[data-testid=SummaryItemHed]"
        ]
      },
      {
        "matches": "start.me",
        "selectors": [
          ".rss-article__title",
          ".rss-articles-list__article-link",
          ".rss-showcase__title",
          ".rss-showcase__text"
        ]
      },
      {
        "matches": "www.scmp.com",
        "additionalSelectors": [
          ".info__subHeadline",
          ".section-content h2"
        ]
      },
      {
        "matches": "www.lesswrong.com",
        "extraBlockSelectors": [
          "span.commentOnSelection"
        ]
      },
      {
        "matches": [
          "mastodon.social",
          "mastodon.online",
          "kolektiva.social",
          "indieweb.social",
          "mastodon.world",
          "infosec.exchange"
        ],
        "selectors": [
          "div.status__content__text"
        ],
        "detectLanguage": true
      },
      {
        "matches": "www.cnbc.com",
        "additionalSelectors": [
          "div.RenderKeyPoints-list"
        ]
      },
      {
        "matches": "app.daily.dev",
        "selectors": [
          "h1",
          ".typo-body",
          "article h3",
          "[class^=markdown_markdown]"
        ],
        "globalStyles": {
          ".line-clamp-3": "-webkit-line-clamp: unset"
        }
      }
    ]
  };

  // utils/array.ts
  function arrayOrGenericToArray(arrayOrGeneric) {
    if (Array.isArray(arrayOrGeneric)) {
      return arrayOrGeneric;
    } else if (arrayOrGeneric) {
      return [arrayOrGeneric];
    } else {
      return [];
    }
  }

  // utils/merge_rule.ts
  function mergeRule(generalRule, rule) {
    const genericRuleKeys = [
      "_comment",
      "globalStyles",
      "wrapperPrefix",
      "wrapperSuffix",
      "urlChangeDelay"
    ];
    const finalRule = generalRule;
    const ruleKeys = Object.keys(rule);
    ruleKeys.forEach((key) => {
      const value = rule[key];
      if (value !== void 0) {
        if (genericRuleKeys.includes(key)) {
          finalRule[key] = value;
        } else {
          if (key.startsWith("additional")) {
            const userValue = arrayOrGenericToArray(value);
            finalRule[key] = Array.from(
              /* @__PURE__ */ new Set([...finalRule[key], ...userValue])
            );
          } else {
            finalRule[key] = arrayOrGenericToArray(value);
          }
        }
      }
    });
    return finalRule;
  }

  // config.ts
  function getEnvUserConfig() {
    const defaultUserConfig = {};
    if (env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID && env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY) {
      const tencentAuthConfig = {
        secretId: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,
        secretKey: env.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY
      };
      defaultUserConfig.translationServices = {};
      defaultUserConfig.translationServices.tencent = tencentAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID && env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY) {
      const baiduAuthConfig = {
        appid: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,
        key: env.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY
      };
      if (!defaultUserConfig.translationServices) {
        defaultUserConfig.translationServices = {};
      }
      defaultUserConfig.translationServices.baidu = baiduAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN) {
      const caiyunAuthConfig = {
        token: env.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN
      };
      if (!defaultUserConfig.translationServices) {
        defaultUserConfig.translationServices = {};
      }
      defaultUserConfig.translationServices.caiyun = caiyunAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY) {
      const openlAuthConfig = {
        apikey: env.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY
      };
      if (!defaultUserConfig.translationServices) {
        defaultUserConfig.translationServices = {};
      }
      defaultUserConfig.translationServices.openl = openlAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID && env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET) {
      const youdaoAuthConfig = {
        appId: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,
        appSecret: env.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET
      };
      if (!defaultUserConfig.translationServices) {
        defaultUserConfig.translationServices = {};
      }
      defaultUserConfig.translationServices.youdao = youdaoAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID && env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY) {
      const volcAuthConfig = {
        accessKeyId: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,
        secretAccessKey: env.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY
      };
      if (!defaultUserConfig.translationServices) {
        defaultUserConfig.translationServices = {};
      }
      defaultUserConfig.translationServices.volc = volcAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY) {
      const deeplAuthConfig = {
        authKey: env.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY
      };
      if (!defaultUserConfig.translationServices) {
        defaultUserConfig.translationServices = {};
      }
      defaultUserConfig.translationServices.deepl = deeplAuthConfig;
    }
    if (env.IMMERSIVE_TRANSLATE_SERVICE) {
      defaultUserConfig.translationService = env.IMMERSIVE_TRANSLATE_SERVICE;
    }
    if (env.DEBUG === "1") {
      defaultUserConfig.debug = true;
      defaultUserConfig.cache = false;
      defaultUserConfig.alpha = true;
    }
    if (env.MOCK === "1") {
      defaultUserConfig.translationService = "mock";
    }
    return defaultUserConfig;
  }
  async function getConfig() {
    const storageBuildInConfig = await browserAPI.storage.local.get(
      buildinConfigStorageKey
    );
    let finalBuildInConfig = {
      ...buildin_config_default,
      buildinConfigUpdatedAt: env.BUILD_TIME
    };
    if (storageBuildInConfig[buildinConfigStorageKey]) {
      const storageBuildInConfigValue = storageBuildInConfig[buildinConfigStorageKey];
      const storageBuildinConfigUpdatedAt = new Date(
        storageBuildInConfigValue.buildinConfigUpdatedAt
      );
      const buildinConfigUpdatedAt = new Date(
        finalBuildInConfig.buildinConfigUpdatedAt
      );
      if (storageBuildinConfigUpdatedAt > buildinConfigUpdatedAt) {
        finalBuildInConfig = storageBuildInConfigValue;
      }
    }
    const defaultConfig = {
      cache: true,
      buildinConfigUpdatedAt: finalBuildInConfig.buildinConfigUpdatedAt,
      minVersion: finalBuildInConfig.minVersion,
      interval: 1e3 * 60 * 60 * 1,
      debug: false,
      alpha: false,
      targetLanguage: "zh-CN",
      interfaceLanguage: "zh-CN",
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
        excludeMatches: []
      },
      translationTheme: "none",
      translationService: "google",
      translationServices: {},
      generalRule: finalBuildInConfig.generalRule,
      translationGeneralConfig: { engine: "google" },
      rules: []
    };
    const envUserConfig = getEnvUserConfig();
    const userConfigObject = await browserAPI.storage.sync.get("userConfig") || {};
    const userConfig = userConfigObject.userConfig || {};
    const globalUserConfig = globalThis.IMMERSIVE_TRANSLATE_CONFIG || {};
    const mergedUserConfig = Object.assign(
      {},
      globalUserConfig,
      envUserConfig,
      userConfig
    );
    const finalConfig = Object.assign(defaultConfig, finalBuildInConfig);
    const configKeys = Object.keys(finalConfig);
    const assignKeys = [
      "translationUrlPattern",
      "translationLanguagePattern",
      "translationServices",
      "translationParagraphLanguagePattern",
      "translationThemePatterns",
      "translationGeneralConfig"
    ];
    for (const key of configKeys) {
      const configKey = key;
      if (configKey === "generalRule") {
        if (typeof mergedUserConfig[configKey] === "object") {
          finalConfig[configKey] = mergeRule(
            defaultConfig[configKey],
            mergedUserConfig[configKey]
          );
        }
      } else if (typeof mergedUserConfig[configKey] !== "string" && typeof mergedUserConfig[configKey] !== "boolean" && typeof mergedUserConfig[configKey] !== "number" && assignKeys.includes(configKey)) {
        if (mergedUserConfig[configKey]) {
          finalConfig[configKey] = Object.assign(
            finalConfig[configKey],
            mergedUserConfig[configKey]
          );
        }
      } else if (configKey === "rules") {
        if (Array.isArray(mergedUserConfig[configKey])) {
          finalConfig[configKey] = [
            ...mergedUserConfig[configKey],
            ...finalConfig[configKey]
          ];
        }
      } else {
        if (mergedUserConfig[configKey] !== void 0) {
          finalConfig[configKey] = mergedUserConfig[configKey];
        }
      }
    }
    return finalConfig;
  }

  // services/util.ts
  async function humanReadableSize(bytes) {
    const thresh = 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }
    const units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let u14 = -1;
    do {
      bytes /= thresh;
      ++u14;
    } while (Math.abs(bytes) >= thresh && u14 < units.length - 1);
    return bytes.toFixed(1) + " " + units[u14];
  }
  function splitSentences(sentences, maxLength, maxGroupLength) {
    const tempSentences = splitStentenceWithMaxLength(sentences, maxLength);
    const tempSentenceGroups = [];
    let tempGroup = {
      from: sentences[0].from,
      to: sentences[0].to,
      tempSentences: [],
      url: sentences[0].url
    };
    for (const tempSentence of tempSentences) {
      const length = tempGroup.tempSentences.reduce(
        (acc, cur) => acc + cur.text.length,
        0
      );
      if (length + tempSentence.text.length >= maxLength || tempGroup.tempSentences.length >= maxGroupLength) {
        tempSentenceGroups.push(tempGroup);
        tempGroup = {
          from: tempSentence.from,
          to: tempSentence.to,
          tempSentences: [],
          url: tempSentence.url
        };
      }
      if (tempGroup.from !== tempSentence.from || tempGroup.to !== tempSentence.to) {
        if (tempGroup.tempSentences.length > 0) {
          tempSentenceGroups.push(tempGroup);
          tempGroup = {
            from: tempSentence.from,
            to: tempSentence.to,
            tempSentences: [],
            url: tempSentence.url
          };
        } else {
          tempGroup.from = tempSentence.from;
          tempGroup.to = tempSentence.to;
        }
      }
      tempGroup.tempSentences.push(tempSentence);
    }
    if (tempGroup.tempSentences.length > 0) {
      tempSentenceGroups.push(tempGroup);
    }
    return tempSentenceGroups;
  }
  function splitStentenceWithMaxLength(sentences, maxLength) {
    const allTempSentences = [];
    for (let i20 = 0; i20 < sentences.length; i20++) {
      const currentSentence = sentences[i20];
      const { from, to, text, url } = currentSentence;
      const textArrSplitedByNewLine = text.split("\r?\n");
      const currentTempSentences = [];
      let currentPrefix = "";
      for (let j8 = 0; j8 < textArrSplitedByNewLine.length; j8++) {
        const currentText = textArrSplitedByNewLine[j8];
        if (currentText === "") {
          if (currentTempSentences.length > 0) {
            currentTempSentences[currentTempSentences.length - 1].suffix += "\n";
          } else {
            currentPrefix += "\n";
          }
        } else {
          if (currentText.length > maxLength) {
            const tempSplitedSentences = [];
            splitSentence(currentText, maxLength, tempSplitedSentences);
            for (let k7 = 0; k7 < tempSplitedSentences.length; k7++) {
              const tempSentence = tempSplitedSentences[k7];
              const { text: text2, prefix, suffix } = tempSentence;
              currentTempSentences.push({
                from,
                to,
                text: text2,
                prefix,
                suffix,
                index: i20,
                url
              });
            }
          } else {
            currentTempSentences.push({
              text: currentText,
              prefix: currentPrefix,
              suffix: "",
              from,
              to,
              index: i20,
              url
            });
          }
        }
      }
      allTempSentences.push(...currentTempSentences);
    }
    return allTempSentences;
  }
  function splitSentence(text, maxLength, sentences) {
    const boundaries = [".", "?", "!", "\u3002", "\uFF1F", "\uFF01"];
    const boundaryIndex = boundaries.reduce((acc, boundary) => {
      const index = text.lastIndexOf(boundary, maxLength);
      return index > acc ? index : acc;
    }, -1);
    if (boundaryIndex === -1) {
      sentences.push({
        text: text.slice(0, maxLength),
        prefix: "",
        suffix: ""
      });
    } else {
      const theText = text.slice(0, boundaryIndex + 1);
      if (theText.startsWith(" ")) {
        sentences.push({
          text: theText.slice(1),
          prefix: " ",
          suffix: ""
        });
      } else {
        sentences.push({
          text: theText,
          prefix: "",
          suffix: ""
        });
      }
      if (boundaryIndex + 1 < text.length) {
        splitSentence(text.slice(boundaryIndex + 1), maxLength, sentences);
      }
    }
    return sentences;
  }

  // services/translation.ts
  var Translation = class {
    constructor(serviceConfig, generalConfig) {
      this.maxTextLength = 1800;
      this.isSupportList = true;
      this.maxTextGroupLength = 1e3;
      this.serviceConfig = serviceConfig;
      this.generalConfig = generalConfig;
    }
    static getAllProps() {
      return [];
    }
    static getProps() {
      return [];
    }
    async init() {
    }
    getMaxTextGroupLength() {
      return this.maxTextGroupLength;
    }
    translate(_payload) {
      throw new Error("Not implemented");
    }
    translateList(_payload) {
      throw new Error("Not implemented");
    }
    async multipleTranslate(payload, everySentenceCallback) {
      if (payload.sentences.length === 0) {
        return {
          sentences: []
        };
      }
      const { sentences } = payload;
      const respondedSentences = [];
      const tempSentenceGroups = splitSentences(
        sentences,
        this.maxTextLength,
        this.maxTextGroupLength
      );
      log_default.debug(`tempSentenceGroups`, tempSentenceGroups);
      const throttle = m13({
        limit: 3,
        interval: 1e3
      });
      let currentSentenceIndex = 0;
      for (let i20 = 0; i20 < tempSentenceGroups.length; i20++) {
        const tempSentenceGroup = tempSentenceGroups[i20];
        const url = tempSentenceGroup.url;
        const throttled = throttle(async () => {
          if (this.isSupportList) {
            const result2 = await this.translateList({
              text: tempSentenceGroup.tempSentences.map((item) => item.text),
              from: tempSentenceGroup.from,
              to: tempSentenceGroup.to,
              url
            });
            return result2;
          } else {
            const mergedText = tempSentenceGroup.tempSentences.map(
              (item) => item.text
            ).join(translationTextSeparator);
            const result2 = await this.translate({
              text: mergedText,
              from: tempSentenceGroup.from,
              to: tempSentenceGroup.to,
              url
            });
            const { text } = result2;
            const translatedTexts2 = text.split(
              translationTextSeparator
            );
            return {
              text: translatedTexts2,
              from: result2.from,
              to: result2.to
            };
          }
        });
        let result;
        try {
          result = await throttled();
        } catch (e18) {
          if (everySentenceCallback) {
            for (const sentence of sentences) {
              everySentenceCallback(e18, sentence);
            }
            throw e18;
          } else {
            throw e18;
          }
        }
        const { text: translatedTexts, from: detectedFrom } = result;
        for (let j8 = 0; j8 < translatedTexts.length; j8++) {
          const translatedText = translatedTexts[j8];
          const tempSentence = tempSentenceGroup.tempSentences[j8];
          const { index, prefix, suffix } = tempSentence;
          if (respondedSentences[index] === void 0) {
            respondedSentences[index] = {
              ...sentences[index],
              from: tempSentenceGroup.from,
              to: tempSentenceGroup.to,
              text: translatedText
            };
          } else {
            respondedSentences[index].text += prefix + translatedText + suffix;
          }
          if (index !== currentSentenceIndex) {
            if (everySentenceCallback) {
              everySentenceCallback(
                null,
                respondedSentences[currentSentenceIndex]
              );
            }
          }
          currentSentenceIndex = index;
        }
      }
      if (everySentenceCallback) {
        everySentenceCallback(null, respondedSentences[currentSentenceIndex]);
      }
      return {
        sentences: respondedSentences
      };
    }
  };

  // errors.ts
  var CommonError = class extends Error {
    constructor(name, message, details) {
      super(message);
      this.name = name;
      if (details) {
        this.details = details;
      }
    }
  };

  // browser/request.ts
  async function request(options) {
    if (options.body) {
    }
    let { url, responseType, ...fetchOptions } = options;
    if (!responseType) {
      responseType = "json";
    }
    fetchOptions = {
      mode: "cors",
      ...fetchOptions
    };
    const fetchFn = options.fetchPolyfill || fetch;
    const response = await fetchFn(url, fetchOptions);
    if (response.ok && response.status >= 200 && response.status < 400) {
      if (responseType === "json") {
        const data = await response.json();
        return data;
      } else if (responseType === "text") {
        const data = await response.text();
        return data;
      } else if (responseType === "raw") {
        const data = await response.text();
        const responseHeaders = Object.fromEntries([
          ...response.headers.entries()
        ]);
        let finalUrl = response.url;
        if (!finalUrl) {
          if (response.headers.get("X-Final-URL")) {
            finalUrl = response.headers.get("X-Final-URL");
          } else {
            finalUrl = url;
          }
        }
        const result = {
          body: data,
          headers: responseHeaders,
          status: response.status,
          statusText: response.statusText,
          url: finalUrl
        };
        return result;
      }
    } else {
      let details;
      try {
        details = await response.text();
      } catch (_e3) {
      }
      throw new CommonError(
        "fetchError",
        response.status + ": " + response.statusText || "",
        details
      );
    }
  }

  // messages.ts
  var [sendDBStore, storeDBStream, waitDBStore] = H2(
    "db_store",
    {
      async: true
    }
  );
  var [sendDBQuery, queryDBStream, waitDBQuery] = H2(
    "db_query",
    {
      async: true
    }
  );
  var [sendDBGetSize, getDBSizeStream, waitDBGetSize] = H2(
    "db_get_size",
    {
      async: true
    }
  );
  var [sendDBDelete, deleteDBStream, waitDBDelete] = H2(
    "db_delete",
    {
      async: true
    }
  );
  var [sendFetchFromChrome, fetchStream, waitforFetch] = H2(
    "fetch",
    {
      async: true
    }
  );
  var sendFetch = (options) => {
    if (isDeno()) {
      return request(options);
    } else {
      return sendFetchFromChrome(options);
    }
  };
  var [
    sendToggleTranslate,
    toggleTranslateStream,
    waitForToggleTranslate
  ] = H2(
    "toggleTranslate",
    {
      async: true
    }
  );
  var [
    sendTranslatePage,
    pageTranslateStream,
    waitForPageTranslate
  ] = H2(
    "pageTranslate",
    {
      async: true
    }
  );
  var [
    sendRestorePage,
    pageRestoreStream,
    waitForPageRestore
  ] = H2(
    "restorePage",
    {
      async: true
    }
  );
  var [
    sendPageTranslatedStatus,
    pageTranslatedStatusStream,
    waitForPageTranslatedStatus
  ] = H2(
    "pageTranslatedStatus"
  );
  var [
    sendGetPageTranslatedStatus,
    getPageTranslatedStatusStream,
    waitForGetPageTranslatedStatus
  ] = H2(
    "getPageTranslatedStatus",
    { async: true }
  );
  var [
    sendGetPageLanguage,
    getPageLanguageStream,
    waitForGetPageLanguage
  ] = H2(
    "getPageLanguage",
    { async: true }
  );
  var [
    sendSetPageLanguage,
    setPageLanguageStream,
    waitForSetPageLanguage
  ] = H2(
    "setThePageLanguage",
    { async: true }
  );
  var [sendDetectLanguage, detectLanguageStream, waitforDetectLanguage] = H2("detectLanguage", {
    async: true
  });
  var [
    sendDetectTabLanguage,
    detectTabLanguageStream,
    waitforDetectTabLanguage
  ] = H2("detectTabLanguage", {
    async: true
  });
  var [sendGetConfig, configStream, waitforGetConfig] = H2(
    "getConfig",
    {
      async: true
    }
  );
  var [
    sendBrowserApiRequest,
    browserApiRequestStream,
    waitforBrowserApiRequest
  ] = H2("browswerApiRequest", {
    async: true
  });
  var [
    sendUtilsRequest,
    utilsRequestStream,
    waitforUtilsRequest
  ] = H2("utils", {
    async: true
  });
  var [sendReady, readyStream, waitForReady] = H2("READY");
  var [sendUrlChange, urlChangeStream, waitForUrlChange] = H2("urlChange");

  // browser_proxy.ts
  async function sendMessage(fn, options) {
    try {
      const response = await fn(options);
      if (!response.ok) {
        throw new CommonError(
          response.error || "fetchError",
          response.message || "",
          response.details
        );
      } else {
        return response.data;
      }
    } catch (e18) {
      throw e18;
    }
  }
  function request2(options) {
    if (isMonkey() || isDeno2()) {
      options.fetchPolyfill = globalThis.GM_fetch;
      return request(options);
    }
    return sendMessage(sendFetch, options);
  }

  // libs/sha256.js
  var ERROR = "input is invalid type";
  var WINDOW = typeof window === "object";
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === "object";
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === "object" && module.exports;
  var AMD = typeof define === "function" && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var HEX_CHARS = "0123456789abcdef".split("");
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K4 = [
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
  ];
  var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
  var blocks = [];
  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    };
  }
  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function(obj) {
      return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }
  var createOutputMethod = function(outputType, is224) {
    return function(message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };
  var createMethod = function(is224) {
    var method = createOutputMethod("hex", is224);
    method.create = function() {
      return new Sha256(is224);
    };
    method.update = function(message) {
      return method.create().update(message);
    };
    for (var i20 = 0; i20 < OUTPUT_TYPES.length; ++i20) {
      var type = OUTPUT_TYPES[i20];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };
  var createHmacOutputMethod = function(outputType, is224) {
    return function(key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };
  var createHmacMethod = function(is224) {
    var method = createHmacOutputMethod("hex", is224);
    method.create = function(key) {
      return new HmacSha256(key, is224);
    };
    method.update = function(key, message) {
      return method.create(key).update(message);
    };
    for (var i20 = 0; i20 < OUTPUT_TYPES.length; ++i20) {
      var type = OUTPUT_TYPES[i20];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };
  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    if (is224) {
      this.h0 = 3238371032;
      this.h1 = 914150663;
      this.h2 = 812702999;
      this.h3 = 4144912697;
      this.h4 = 4290775857;
      this.h5 = 1750603025;
      this.h6 = 1694076839;
      this.h7 = 3204075428;
    } else {
      this.h0 = 1779033703;
      this.h1 = 3144134277;
      this.h2 = 1013904242;
      this.h3 = 2773480762;
      this.h4 = 1359893119;
      this.h5 = 2600822924;
      this.h6 = 528734635;
      this.h7 = 1541459225;
    }
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }
  Sha256.prototype.update = function(message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== "string") {
      if (type === "object") {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code2, index = 0, i20, length = message.length, blocks2 = this.blocks;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks2[0] = this.block;
        blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
      }
      if (notString) {
        for (i20 = this.start; index < length && i20 < 64; ++index) {
          blocks2[i20 >> 2] |= message[index] << SHIFT[i20++ & 3];
        }
      } else {
        for (i20 = this.start; index < length && i20 < 64; ++index) {
          code2 = message.charCodeAt(index);
          if (code2 < 128) {
            blocks2[i20 >> 2] |= code2 << SHIFT[i20++ & 3];
          } else if (code2 < 2048) {
            blocks2[i20 >> 2] |= (192 | code2 >> 6) << SHIFT[i20++ & 3];
            blocks2[i20 >> 2] |= (128 | code2 & 63) << SHIFT[i20++ & 3];
          } else if (code2 < 55296 || code2 >= 57344) {
            blocks2[i20 >> 2] |= (224 | code2 >> 12) << SHIFT[i20++ & 3];
            blocks2[i20 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i20++ & 3];
            blocks2[i20 >> 2] |= (128 | code2 & 63) << SHIFT[i20++ & 3];
          } else {
            code2 = 65536 + ((code2 & 1023) << 10 | message.charCodeAt(++index) & 1023);
            blocks2[i20 >> 2] |= (240 | code2 >> 18) << SHIFT[i20++ & 3];
            blocks2[i20 >> 2] |= (128 | code2 >> 12 & 63) << SHIFT[i20++ & 3];
            blocks2[i20 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i20++ & 3];
            blocks2[i20 >> 2] |= (128 | code2 & 63) << SHIFT[i20++ & 3];
          }
        }
      }
      this.lastByteIndex = i20;
      this.bytes += i20 - this.start;
      if (i20 >= 64) {
        this.block = blocks2[16];
        this.start = i20 - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i20;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  Sha256.prototype.finalize = function() {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks2 = this.blocks, i20 = this.lastByteIndex;
    blocks2[16] = this.block;
    blocks2[i20 >> 2] |= EXTRA[i20 & 3];
    this.block = blocks2[16];
    if (i20 >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks2[0] = this.block;
      blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
    }
    blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks2[15] = this.bytes << 3;
    this.hash();
  };
  Sha256.prototype.hash = function() {
    var a19 = this.h0, b11 = this.h1, c26 = this.h2, d16 = this.h3, e18 = this.h4, f13 = this.h5, g7 = this.h6, h9 = this.h7, blocks2 = this.blocks, j8, s0, s1, maj, t1, t22, ch, ab, da, cd, bc;
    for (j8 = 16; j8 < 64; ++j8) {
      t1 = blocks2[j8 - 15];
      s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
      t1 = blocks2[j8 - 2];
      s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
      blocks2[j8] = blocks2[j8 - 16] + s0 + blocks2[j8 - 7] + s1 << 0;
    }
    bc = b11 & c26;
    for (j8 = 0; j8 < 64; j8 += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks2[0] - 1413257819;
          h9 = t1 - 150054599 << 0;
          d16 = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks2[0] - 210244248;
          h9 = t1 - 1521486534 << 0;
          d16 = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = (a19 >>> 2 | a19 << 30) ^ (a19 >>> 13 | a19 << 19) ^ (a19 >>> 22 | a19 << 10);
        s1 = (e18 >>> 6 | e18 << 26) ^ (e18 >>> 11 | e18 << 21) ^ (e18 >>> 25 | e18 << 7);
        ab = a19 & b11;
        maj = ab ^ a19 & c26 ^ bc;
        ch = e18 & f13 ^ ~e18 & g7;
        t1 = h9 + s1 + ch + K4[j8] + blocks2[j8];
        t22 = s0 + maj;
        h9 = d16 + t1 << 0;
        d16 = t1 + t22 << 0;
      }
      s0 = (d16 >>> 2 | d16 << 30) ^ (d16 >>> 13 | d16 << 19) ^ (d16 >>> 22 | d16 << 10);
      s1 = (h9 >>> 6 | h9 << 26) ^ (h9 >>> 11 | h9 << 21) ^ (h9 >>> 25 | h9 << 7);
      da = d16 & a19;
      maj = da ^ d16 & b11 ^ ab;
      ch = h9 & e18 ^ ~h9 & f13;
      t1 = g7 + s1 + ch + K4[j8 + 1] + blocks2[j8 + 1];
      t22 = s0 + maj;
      g7 = c26 + t1 << 0;
      c26 = t1 + t22 << 0;
      s0 = (c26 >>> 2 | c26 << 30) ^ (c26 >>> 13 | c26 << 19) ^ (c26 >>> 22 | c26 << 10);
      s1 = (g7 >>> 6 | g7 << 26) ^ (g7 >>> 11 | g7 << 21) ^ (g7 >>> 25 | g7 << 7);
      cd = c26 & d16;
      maj = cd ^ c26 & a19 ^ da;
      ch = g7 & h9 ^ ~g7 & e18;
      t1 = f13 + s1 + ch + K4[j8 + 2] + blocks2[j8 + 2];
      t22 = s0 + maj;
      f13 = b11 + t1 << 0;
      b11 = t1 + t22 << 0;
      s0 = (b11 >>> 2 | b11 << 30) ^ (b11 >>> 13 | b11 << 19) ^ (b11 >>> 22 | b11 << 10);
      s1 = (f13 >>> 6 | f13 << 26) ^ (f13 >>> 11 | f13 << 21) ^ (f13 >>> 25 | f13 << 7);
      bc = b11 & c26;
      maj = bc ^ b11 & d16 ^ cd;
      ch = f13 & g7 ^ ~f13 & h9;
      t1 = e18 + s1 + ch + K4[j8 + 3] + blocks2[j8 + 3];
      t22 = s0 + maj;
      e18 = a19 + t1 << 0;
      a19 = t1 + t22 << 0;
    }
    this.h0 = this.h0 + a19 << 0;
    this.h1 = this.h1 + b11 << 0;
    this.h2 = this.h2 + c26 << 0;
    this.h3 = this.h3 + d16 << 0;
    this.h4 = this.h4 + e18 << 0;
    this.h5 = this.h5 + f13 << 0;
    this.h6 = this.h6 + g7 << 0;
    this.h7 = this.h7 + h9 << 0;
  };
  Sha256.prototype.hex = function() {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h22 = this.h2, h32 = this.h3, h42 = this.h4, h52 = this.h5, h62 = this.h6, h72 = this.h7;
    var hex2 = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h22 >> 28 & 15] + HEX_CHARS[h22 >> 24 & 15] + HEX_CHARS[h22 >> 20 & 15] + HEX_CHARS[h22 >> 16 & 15] + HEX_CHARS[h22 >> 12 & 15] + HEX_CHARS[h22 >> 8 & 15] + HEX_CHARS[h22 >> 4 & 15] + HEX_CHARS[h22 & 15] + HEX_CHARS[h32 >> 28 & 15] + HEX_CHARS[h32 >> 24 & 15] + HEX_CHARS[h32 >> 20 & 15] + HEX_CHARS[h32 >> 16 & 15] + HEX_CHARS[h32 >> 12 & 15] + HEX_CHARS[h32 >> 8 & 15] + HEX_CHARS[h32 >> 4 & 15] + HEX_CHARS[h32 & 15] + HEX_CHARS[h42 >> 28 & 15] + HEX_CHARS[h42 >> 24 & 15] + HEX_CHARS[h42 >> 20 & 15] + HEX_CHARS[h42 >> 16 & 15] + HEX_CHARS[h42 >> 12 & 15] + HEX_CHARS[h42 >> 8 & 15] + HEX_CHARS[h42 >> 4 & 15] + HEX_CHARS[h42 & 15] + HEX_CHARS[h52 >> 28 & 15] + HEX_CHARS[h52 >> 24 & 15] + HEX_CHARS[h52 >> 20 & 15] + HEX_CHARS[h52 >> 16 & 15] + HEX_CHARS[h52 >> 12 & 15] + HEX_CHARS[h52 >> 8 & 15] + HEX_CHARS[h52 >> 4 & 15] + HEX_CHARS[h52 & 15] + HEX_CHARS[h62 >> 28 & 15] + HEX_CHARS[h62 >> 24 & 15] + HEX_CHARS[h62 >> 20 & 15] + HEX_CHARS[h62 >> 16 & 15] + HEX_CHARS[h62 >> 12 & 15] + HEX_CHARS[h62 >> 8 & 15] + HEX_CHARS[h62 >> 4 & 15] + HEX_CHARS[h62 & 15];
    if (!this.is224) {
      hex2 += HEX_CHARS[h72 >> 28 & 15] + HEX_CHARS[h72 >> 24 & 15] + HEX_CHARS[h72 >> 20 & 15] + HEX_CHARS[h72 >> 16 & 15] + HEX_CHARS[h72 >> 12 & 15] + HEX_CHARS[h72 >> 8 & 15] + HEX_CHARS[h72 >> 4 & 15] + HEX_CHARS[h72 & 15];
    }
    return hex2;
  };
  Sha256.prototype.toString = Sha256.prototype.hex;
  Sha256.prototype.digest = function() {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h22 = this.h2, h32 = this.h3, h42 = this.h4, h52 = this.h5, h62 = this.h6, h72 = this.h7;
    var arr = [
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
      h42 >> 24 & 255,
      h42 >> 16 & 255,
      h42 >> 8 & 255,
      h42 & 255,
      h52 >> 24 & 255,
      h52 >> 16 & 255,
      h52 >> 8 & 255,
      h52 & 255,
      h62 >> 24 & 255,
      h62 >> 16 & 255,
      h62 >> 8 & 255,
      h62 & 255
    ];
    if (!this.is224) {
      arr.push(h72 >> 24 & 255, h72 >> 16 & 255, h72 >> 8 & 255, h72 & 255);
    }
    return arr;
  };
  Sha256.prototype.array = Sha256.prototype.digest;
  Sha256.prototype.arrayBuffer = function() {
    this.finalize();
    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };
  function HmacSha256(key, is224, sharedMemory) {
    var i20, type = typeof key;
    if (type === "string") {
      var bytes = [], length = key.length, index = 0, code2;
      for (i20 = 0; i20 < length; ++i20) {
        code2 = key.charCodeAt(i20);
        if (code2 < 128) {
          bytes[index++] = code2;
        } else if (code2 < 2048) {
          bytes[index++] = 192 | code2 >> 6;
          bytes[index++] = 128 | code2 & 63;
        } else if (code2 < 55296 || code2 >= 57344) {
          bytes[index++] = 224 | code2 >> 12;
          bytes[index++] = 128 | code2 >> 6 & 63;
          bytes[index++] = 128 | code2 & 63;
        } else {
          code2 = 65536 + ((code2 & 1023) << 10 | key.charCodeAt(++i20) & 1023);
          bytes[index++] = 240 | code2 >> 18;
          bytes[index++] = 128 | code2 >> 12 & 63;
          bytes[index++] = 128 | code2 >> 6 & 63;
          bytes[index++] = 128 | code2 & 63;
        }
      }
      key = bytes;
    } else {
      if (type === "object") {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }
    if (key.length > 64) {
      key = new Sha256(is224, true).update(key).array();
    }
    var oKeyPad = [], iKeyPad = [];
    for (i20 = 0; i20 < 64; ++i20) {
      var b11 = key[i20] || 0;
      oKeyPad[i20] = 92 ^ b11;
      iKeyPad[i20] = 54 ^ b11;
    }
    Sha256.call(this, is224, sharedMemory);
    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();
  HmacSha256.prototype.finalize = function() {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };
  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);
  var sha256_default = exports;

  // utils/sha256.ts
  var sha256Fn = sha256_default.sha256;
  function sha256(message) {
    return Promise.resolve(sha256Fn(message));
  }
  function hex(hashBuffer) {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b11) => b11.toString(16).padStart(2, "0")).join(
      ""
    );
    return hashHex;
  }
  function hmacSha256(str, keyString) {
    const hash = sha256Fn.hmac.create(keyString);
    hash.update(str);
    return Promise.resolve(hash.array());
  }
  async function hmacSha256ByString(str, keyString) {
    const sig = await hmacSha256(str, keyString);
    return hex(sig);
  }
  async function hmacSha256ByArrayBuffer(str, keyString) {
    const buffer = decodeHex(keyString);
    const sig = await hmacSha256(str, buffer);
    return hex(sig);
  }
  function decodeHex(string) {
    const bytes = [];
    string.replace(/../g, function(pair) {
      bytes.push(parseInt(pair, 16));
      return "";
    });
    return new Uint8Array(bytes).buffer;
  }

  // services/tencent.ts
  var langMap = [
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
  ];
  var _Tencent = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.secretId = "";
      this.secretKey = "";
      this.isSupportList = true;
      if (!serviceConfig || !serviceConfig.secretId || !serviceConfig.secretKey) {
        throw new Error("secretId and secretKey are required");
      }
      this.secretId = serviceConfig.secretId;
      this.secretKey = serviceConfig.secretKey;
    }
    static getUTCDate(dateObj) {
      const year = dateObj.getUTCFullYear();
      const month = `${dateObj.getUTCMonth() + 1}`.padStart(2, "0");
      const date = `${dateObj.getUTCDate()}`.padStart(2, "0");
      return `${year}-${month}-${date}`;
    }
    static getAllProps() {
      return [{
        name: "secretId",
        required: true,
        type: "text"
      }, {
        name: "secretKey",
        required: true,
        type: "password"
      }];
    }
    async translate(payload) {
      const { text, from, to } = payload;
      const RequestPayload = JSON.stringify({
        ProjectId: 0,
        Source: _Tencent.langMap.get(from),
        SourceText: text,
        Target: _Tencent.langMap.get(to)
      });
      const data = await this.signedRequest({
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
      const { text, from, to } = payload;
      const RequestPayload = JSON.stringify({
        ProjectId: 0,
        Source: _Tencent.langMap.get(from),
        SourceTextList: text,
        Target: _Tencent.langMap.get(to)
      });
      const data = await this.signedRequest({
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
      const host = `${service}.tencentcloudapi.com`;
      const now = new Date();
      const timestamp = `${new Date().valueOf()}`.slice(0, 10);
      const CanonicalRequest = [
        "POST",
        "/",
        "",
        "content-type:application/json; charset=utf-8",
        `host:${host}`,
        "",
        "content-type;host",
        await sha256(payload)
      ].join("\n");
      const datestamp = _Tencent.getUTCDate(now);
      const StringToSign = [
        "TC3-HMAC-SHA256",
        timestamp,
        `${datestamp}/${service}/tc3_request`,
        await sha256(CanonicalRequest)
      ].join("\n");
      const SecretDate = await hmacSha256ByString(datestamp, `TC3${secretKey}`);
      const SecretService = await hmacSha256ByArrayBuffer(
        service,
        SecretDate
      );
      const SecretSigning = await hmacSha256ByArrayBuffer(
        "tc3_request",
        SecretService
      );
      const Signature = await hmacSha256ByArrayBuffer(
        StringToSign,
        SecretSigning
      );
      const response = await request2({
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
      if (response instanceof Error) {
        throw response;
      } else {
        if (response.Response && response.Response.Error && response.Response.Error.Message) {
          throw new Error(
            response.Response.Error.Message
          );
        } else {
          return response;
        }
      }
    }
  };
  var Tencent = _Tencent;
  Tencent.langMap = new Map(langMap);
  Tencent.langMapReverse = new Map(
    langMap.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/google.ts
  var langMap2 = [
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
  ];
  var _Google = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.isSupportList = false;
    }
    async translate(payload) {
      const { text, from, to } = payload;
      if (!text)
        return { ...payload };
      const adaptedFrom = _Google.langMap.get(from) || "auto";
      const adaptedTo = _Google.langMap.get(to) || "zh-CN";
      const result = await this.fetchWithoutToken(text, adaptedFrom, adaptedTo);
      if (!result) {
        throw new Error("google translate NETWORK_ERROR");
      }
      if (!result.data[0] || result.data[0].length <= 0) {
        throw new Error("google translate API_SERVER_ERROR");
      }
      const transText = result.data[0].map((item) => item[0]).filter(Boolean).join("");
      return {
        text: transText,
        from: _Google.langMapReverse.get(result.data[2]) || "auto",
        to
      };
    }
    async fetchWithoutToken(text, from, to) {
      const url = `https://translate.googleapis.com/translate_a/single?` + new URLSearchParams({
        client: "gtx",
        dt: "t",
        sl: from,
        tl: to,
        q: text
      });
      const response = await request2({ url });
      return { data: response };
    }
  };
  var Google = _Google;
  Google.langMap = new Map(langMap2);
  Google.langMapReverse = new Map(
    langMap2.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/d/extractors.ts
  function extractSplitSentences(response) {
    return response.result.texts;
  }

  // services/d/hacks.ts
  function calculateValidTimestamp(timestamp, iCount) {
    return iCount ? timestamp + (iCount - timestamp % iCount) : timestamp;
  }
  function count(sentence, part) {
    return sentence.split(part).length - 1;
  }
  function generateTimestamp(sentences) {
    const now = Date.now();
    let iCount = 1;
    for (const sentence of sentences) {
      iCount += count(sentence, "i");
    }
    return calculateValidTimestamp(now, iCount);
  }
  function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function generateId() {
    const MIN = 1e6;
    const MAX = 1e8;
    return randRange(MIN, MAX);
  }

  // services/d/settings.ts
  var API_URL = "https://www2.deepl.com/jsonrpc";
  var AUTO = "auto";
  var SUPPORTED_LANGUAGES = [
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
  var SUPPORTED_FORMALITY_TONES = ["formal", "informal"];

  // services/d/generators.ts
  function generateSplitSentencesRequestData(text, sourceLanguage = AUTO, identifier = generateId()) {
    return {
      jsonrpc: "2.0",
      method: "LMT_split_text",
      params: {
        commonJobParams: { "mode": "translate" },
        lang: {
          lang_user_selected: sourceLanguage,
          user_preferred_langs: []
        },
        texts: text
      },
      id: identifier
    };
  }
  function generateJobs(sentences, beams = 1) {
    const jobs = [];
    let id = 0;
    for (let i20 = 0; i20 < sentences.length; i20++) {
      const chunks = sentences[i20].chunks;
      for (let j8 = 0; j8 < chunks.length; j8++) {
        const chunk = chunks[j8];
        jobs.push({
          kind: "default",
          _index: i20,
          sentences: [{
            id,
            text: chunk.sentences[0].text,
            prefix: chunk.sentences[0].prefix
          }],
          raw_en_context_before: chunks.slice(0, id).map(
            (chunk2) => chunk2.sentences[0].text
          ),
          raw_en_context_after: id + 1 < chunks.length ? [chunks[id + 1].sentences[0].text] : [],
          preferred_num_beams: beams
        });
        id++;
      }
    }
    return jobs;
  }
  function splitedResultToArray(sentences) {
    return sentences.reduce((jobs, sentence) => {
      const chunks = sentence.chunks;
      for (const chunk of chunks) {
        jobs.push(chunk.sentences[0].text);
      }
      return jobs;
    }, []);
  }
  function generateCommonJobParams(formality) {
    if (!formality) {
      return {};
    }
    if (!SUPPORTED_FORMALITY_TONES.includes(formality)) {
      throw new Error("Formality tone '{formality_tone}' not supported.");
    }
    return { formality };
  }
  function generateTranslationRequestData(sourceLanguage, targetLanguage, sentences, identifier = generateId(), alternatives = 1, formality) {
    const allSentences = splitedResultToArray(sentences);
    return {
      jsonrpc: "2.0",
      method: "LMT_handle_jobs",
      params: {
        jobs: generateJobs(sentences, alternatives),
        lang: {
          user_preferred_langs: [targetLanguage, sourceLanguage],
          source_lang_computed: sourceLanguage,
          target_lang: targetLanguage
        },
        priority: 1,
        commonJobParams: generateCommonJobParams(formality),
        timestamp: generateTimestamp(splitedResultToArray(sentences))
      },
      id: identifier
    };
  }

  // services/d/utils.ts
  function createAbbreviationsDictionary(languages3 = SUPPORTED_LANGUAGES) {
    return languages3.reduce((acc, lang) => {
      acc[lang.code.toLowerCase()] = lang.code;
      acc[lang.language.toLowerCase()] = lang.code;
      return acc;
    }, {});
  }
  function abbreviateLanguage(language) {
    return createAbbreviationsDictionary()[language.toLowerCase()];
  }

  // services/d/api.ts
  var headers = {
    Accept: "*/*",
    "Accept-Language": "en-US;q=0.8,en;q=0.7",
    Authority: "www2.deepl.com",
    "Content-Type": "application/json",
    Origin: "https://www.deepl.com",
    Referer: "https://www.deepl.com/translator",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site"
  };
  function stringifyJson(object) {
    return JSON.stringify(object).replace('"method":"', () => {
      const self2 = object;
      if ((self2.id + 3) % 13 === 0 || (self2.id + 5) % 29 === 0) {
        return '"method" : "';
      }
      return '"method": "';
    });
  }
  async function splitSentences2(text, sourceLanguage, identifier) {
    const data = generateSplitSentencesRequestData(
      text,
      sourceLanguage,
      identifier
    );
    return await request2(
      {
        method: "POST",
        url: API_URL + "?method=LMT_split_text",
        headers,
        body: stringifyJson(data)
      }
    );
  }
  async function requestTranslation(text, targetLanguage, sourceLanguage, identifier, alternatives, formalityTone) {
    const splitResult = await splitSentences2(
      text,
      sourceLanguage,
      identifier
    );
    const data = generateTranslationRequestData(
      sourceLanguage === "auto" ? splitResult.result.lang.detected : sourceLanguage,
      targetLanguage,
      extractSplitSentences(splitResult),
      identifier,
      alternatives,
      formalityTone
    );
    const jobsIndexes = data.params.jobs.map((job) => job._index);
    data.params.jobs = data.params.jobs.map((job) => {
      const newJob = { ...job };
      delete newJob._index;
      return newJob;
    });
    const response = await request2({
      method: "POST",
      url: API_URL + "?method=LMT_handle_jobs",
      body: stringifyJson(data),
      headers
    });
    const finalResult = {
      from: splitResult.result.lang.detected,
      to: targetLanguage,
      text: []
    };
    response.result.translations.forEach((translation, index) => {
      const jobIndex = jobsIndexes[index];
      if (finalResult.text[jobIndex] === void 0) {
        finalResult.text[jobIndex] = "";
      }
      const originalSentencePrefix = data.params.jobs[index].sentences[0].prefix;
      const originalSentencePre = data.params.jobs[index].sentences[0].prefix;
      finalResult.text[jobIndex] = finalResult.text[jobIndex] + originalSentencePrefix + translation.beams[0].sentences[0].text;
    });
    return finalResult;
  }
  async function translate(text, targetLanguage, sourceLanguage = AUTO, identifier, alternatives, formalityTone) {
    if (!text) {
      return {
        text: [],
        from: sourceLanguage,
        to: targetLanguage
      };
    }
    if (text && text.length === 1) {
      if (text[0] === "") {
        return {
          text: [""],
          from: sourceLanguage,
          to: targetLanguage
        };
      }
    }
    const response = requestTranslation(
      text,
      abbreviateLanguage(targetLanguage),
      abbreviateLanguage(sourceLanguage) ?? "auto",
      identifier,
      alternatives,
      formalityTone
    );
    return response;
  }

  // services/d/mod.ts
  var langMap3 = [
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
  ];
  var _D = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.maxTextGroupLength = 3;
      this.maxTextLength = 800;
      this.isSupportList = true;
    }
    async translateList(payload) {
      const { text, to, from } = payload;
      const result = await translate(
        text,
        _D.langMap.get(to),
        _D.langMap.get(from)
      );
      return {
        text: result.text,
        from: _D.langMapReverse.get(result.from),
        to: _D.langMapReverse.get(result.to)
      };
    }
  };
  var D6 = _D;
  D6.langMap = new Map(langMap3);
  D6.langMapReverse = new Map(
    langMap3.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/bai.ts
  var RAW_LANGUAGES = [
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
  ];
  var langMap4 = new Map(RAW_LANGUAGES);
  var langMapReverse = new Map(
    RAW_LANGUAGES.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/transmart.ts
  var langMap5 = [
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
  ];
  var API = "https://transmart.qq.com/api/imt";
  var _Transmart = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.maxTextGroupLength = 3;
      this.clientKey = btoa(
        "transmart_crx_" + navigator.userAgent
      ).slice(0, 100);
    }
    async translate(payload) {
      const { from, text, to } = payload;
      const formatedTo = _Transmart.langMap.get(to);
      let sourceLanguage = _Transmart.langMap.get(from);
      if (!(from !== "auto" && sourceLanguage)) {
        sourceLanguage = await this.detectLanguage(text);
      }
      const internalFrom = _Transmart.langMapReverse.get(sourceLanguage);
      if (sourceLanguage === formatedTo) {
        return {
          text,
          from: _Transmart.langMapReverse.get(sourceLanguage),
          to
        };
      }
      const requestPayload = JSON.stringify(
        {
          "header": {
            "fn": "auto_translation_block",
            "client_key": this.clientKey
          },
          "source": {
            "text_block": text,
            "lang": sourceLanguage,
            "orig_url": payload.url
          },
          "target": { "lang": formatedTo }
        }
      );
      const data = await request2({
        url: API,
        body: requestPayload,
        method: "POST"
      });
      if (data.header.ret_code !== "succ") {
        throw new Error(data.message || data.header.ret_code);
      }
      return {
        text: data.auto_translation,
        from: internalFrom || "auto",
        to
      };
    }
    async translateList(payload) {
      const { from, text, to } = payload;
      let sourceLanguage = _Transmart.langMap.get(from);
      if (!(from !== "auto" && sourceLanguage)) {
        sourceLanguage = await this.detectLanguage(text.join("\n"));
      }
      const internalSourceLanguage = _Transmart.langMapReverse.get(
        sourceLanguage
      );
      const targetLanguage = _Transmart.langMap.get(to);
      if (sourceLanguage === targetLanguage) {
        return {
          text,
          from: internalSourceLanguage,
          to
        };
      }
      const requestPayload = JSON.stringify(
        {
          "header": {
            "fn": "auto_translation",
            "client_key": this.clientKey
          },
          "source": {
            "text_list": text,
            "lang": sourceLanguage,
            "orig_url": payload.url
          },
          "target": { "lang": targetLanguage },
          "type": "plain"
        }
      );
      const data = await request2({
        url: API,
        body: requestPayload,
        method: "POST"
      });
      if (data.header.ret_code !== "succ") {
        throw new Error(data.message || data.header.ret_code);
      }
      return {
        text: data.auto_translation,
        from: internalSourceLanguage,
        to
      };
    }
    async detectLanguage(text) {
      const payload = {
        "header": {
          "fn": "text_analysis",
          "client_key": this.clientKey
        },
        text: text.slice(0, 280)
      };
      const response = await request2({
        url: API,
        method: "POST",
        body: JSON.stringify(payload)
      });
      if (response.header.ret_code !== "succ") {
        throw new Error(response.message || response.header.ret_code);
      }
      return response.language;
    }
  };
  var Transmart = _Transmart;
  Transmart.langMap = new Map(langMap5);
  Transmart.langMapReverse = new Map(
    langMap5.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/mock.ts
  var Mock = class extends Translation {
    constructor() {
      super(...arguments);
      this.isSupportList = true;
    }
    async translate(payload) {
      const { text } = payload;
      await new Promise((resolve) => setTimeout(resolve, 10));
      const startSpaceLength = text.match(/^\s*/)[0].length;
      const mockText = text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength);
      return {
        text: mockText,
        from: payload.from,
        to: payload.to
      };
    }
    async translateList(payload) {
      const { text: textList, from, to } = payload;
      await new Promise((resolve) => setTimeout(resolve, 10));
      return {
        from,
        to,
        text: textList.map((text) => {
          const startSpaceLength = text.match(/^\s*/)[0].length;
          const mockText = text.slice(0, startSpaceLength) + "\u6A21\u62DF\uFF1A" + text.slice(startSpaceLength);
          return mockText;
        })
      };
    }
  };

  // services/openl.ts
  var rawLangMap = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
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
  ];
  var langMap6 = new Map(rawLangMap);
  var langMapReverse2 = new Map(
    rawLangMap.map(([translatorLang, lang]) => [lang, translatorLang])
  );
  var _Openl = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.apikey = "";
      this.codename = _Openl.DEFAULT_CODENAME;
      this.isSupportList = false;
      this.maxTextGroupLength = 1;
      if (!serviceConfig || !serviceConfig.apikey) {
        throw new Error("apikey are required");
      }
      this.apikey = serviceConfig.apikey;
      if (serviceConfig.codename) {
        this.codename = serviceConfig.codename;
      }
    }
    static getAllProps() {
      const props = _Openl.getProps();
      return [
        ...props,
        {
          type: "password",
          name: "apikey",
          required: true
        }
      ];
    }
    static getProps() {
      return [{
        type: "select",
        name: "codename",
        label: "translationEngine",
        default: _Openl.DEFAULT_CODENAME,
        required: false,
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
      }];
    }
    async translate(payload) {
      const { text, from, to } = payload;
      const response = await request2(
        {
          url: `https://api.openl.club/services/${this.codename}/translate`,
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            apikey: this.apikey,
            text,
            source_lang: langMap6.get(from) || "auto",
            target_lang: langMap6.get(to)
          })
        }
      );
      if (response.status) {
        const result = response;
        return {
          text: result.result,
          from: langMapReverse2.get(result.source_lang),
          to: langMapReverse2.get(result.target_lang)
        };
      } else {
        throw new Error(response.msg);
      }
    }
  };
  var Openl = _Openl;
  Openl.DEFAULT_CODENAME = "deepl";
  var openl_default = Openl;

  // services/deepl.ts
  var rawLangMap2 = [
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
  ];
  var langMap7 = new Map(rawLangMap2);
  var langMapReverse3 = new Map(
    rawLangMap2.map(([translatorLang, lang]) => [lang, translatorLang])
  );
  var Deepl = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.authKey = "";
      this.maxTextGroupLength = 10;
      this.maxTextLength = 1200;
      if (!serviceConfig || !serviceConfig.authKey) {
        throw new Error("authKey are required");
      }
      this.authKey = serviceConfig.authKey;
    }
    static getAllProps() {
      return [{
        name: "authKey",
        required: true,
        type: "password"
      }];
    }
    async translateList(payload) {
      const { from, to, text } = payload;
      const bodyParams = {
        ["source_lang"]: langMap7.get(from),
        ["target_lang"]: langMap7.get(to)
      };
      const bodySearchParams = new URLSearchParams(bodyParams);
      text.forEach((item) => {
        bodySearchParams.append("text", item);
      });
      const body = bodySearchParams.toString();
      let deeplEndpoint = "https://api-free.deepl.com/v2/translate";
      if (!this.authKey.includes(":fx")) {
        deeplEndpoint = "https://api.deepl.com/v2/translate";
      }
      const response = await request2(
        {
          url: deeplEndpoint,
          method: "POST",
          body,
          headers: {
            Authorization: "DeepL-Auth-Key " + this.authKey,
            "content-type": "application/x-www-form-urlencoded"
          }
        }
      );
      const { translations: translations2 } = response;
      const resultText = translations2.map((t17) => t17.text);
      return {
        text: resultText,
        from: translations2[0] && langMapReverse3.get(translations2[0].detected_source_language) || from,
        to
      };
    }
  };
  var deepl_default = Deepl;

  // services/volc/sign.ts
  var unsignableHeaders = [
    "authorization",
    "content-type",
    "content-length",
    "user-agent",
    "presigned-expires",
    "expect"
  ];
  var constant = {
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
  };
  var uriEscape = (str) => {
    try {
      return encodeURIComponent(str).replace(/[^A-Za-z0-9_.~\-%]+/g, escape).replace(
        /[*]/g,
        (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase()}`
      );
    } catch (e18) {
      return "";
    }
  };
  var queryParamsToString = (params) => Object.keys(params).map((key) => {
    const val = params[key];
    if (typeof val === "undefined" || val === null) {
      return;
    }
    const escapedKey = uriEscape(key);
    if (!escapedKey) {
      return;
    }
    if (Array.isArray(val)) {
      return `${escapedKey}=${val.map(uriEscape).sort().join(`&${escapedKey}=`)}`;
    }
    return `${escapedKey}=${uriEscape(val)}`;
  }).filter((v6) => v6).join("&");
  var Signer = class {
    constructor(request3, serviceName, options) {
      this.request = request3;
      this.request.headers = request3.headers || {};
      this.serviceName = serviceName;
      options = options || {};
      this.bodySha256 = options.bodySha256;
      this.request.params = this.sortParams(this.request.params);
    }
    sortParams(params) {
      const newParams = {};
      if (params) {
        Object.keys(params).filter((key) => {
          const value = params[key];
          return typeof value !== "undefined" && value !== null;
        }).sort().map((key) => {
          newParams[key] = params[key];
        });
      }
      return newParams;
    }
    async addAuthorization(credentials, date) {
      const datetime = this.getDateTime(date);
      await this.addHeaders(credentials, datetime);
      this.request.headers["Authorization"] = await this.authorization(
        credentials,
        datetime
      );
    }
    async authorization(credentials, datetime) {
      const parts = [];
      const credString = this.credentialString(datetime);
      parts.push(
        `${constant.algorithm} Credential=${credentials.accessKeyId}/${credString}`
      );
      parts.push(`SignedHeaders=${this.signedHeaders()}`);
      parts.push(`Signature=${await this.signature(credentials, datetime)}`);
      return parts.join(", ");
    }
    async getSignUrl(credentials, date) {
      const datetime = this.getDateTime(date);
      let query = { ...this.request.params };
      const params = this.request.params;
      const headers2 = this.request.headers;
      if (credentials.sessionToken) {
        query[constant.tokenHeader] = credentials.sessionToken;
      }
      query[constant.dateHeader] = datetime;
      query[constant.notSignBody] = "";
      query[constant.credential] = `${credentials.accessKeyId}/${this.credentialString(datetime)}`;
      query[constant.algorithmKey] = constant.algorithm;
      query[constant.signHeadersKey] = "";
      query[constant.signQueriesKey] = void 0;
      query[constant.signatureKey] = void 0;
      query = this.sortParams(query);
      this.request.params = query;
      this.request.headers = {};
      const sig = await this.signature(credentials, datetime);
      this.request.params = params;
      this.request.headers = headers2;
      query[constant.signQueriesKey] = Object.keys(query).sort().join(";");
      query[constant.signatureKey] = sig;
      return queryParamsToString(query);
    }
    getDateTime(date) {
      return this.iso8601(date).replace(/[:\-]|\.\d{3}/g, "");
    }
    async addHeaders(credentials, datetime) {
      this.request.headers[constant.dateHeader] = datetime;
      if (credentials.sessionToken) {
        this.request.headers[constant.tokenHeader] = credentials.sessionToken;
      }
      if (this.request.body) {
        let body = this.request.body;
        this.request.headers[constant.contentSha256Header] = await sha256(body);
      }
    }
    async signature(credentials, datetime) {
      const signingKey = await this.getSigningKey(
        credentials,
        datetime.substr(0, 8),
        this.request.region,
        this.serviceName
      );
      return hex(await hmacSha256(await this.stringToSign(datetime), signingKey));
    }
    async stringToSign(datetime) {
      const parts = [];
      parts.push(constant.algorithm);
      parts.push(datetime);
      parts.push(this.credentialString(datetime));
      const x15 = await this.canonicalString();
      parts.push(
        await this.hexEncodedHash(x15)
      );
      const result = parts.join("\n");
      return result;
    }
    async canonicalString() {
      const parts = [], pathname = this.request.pathname || "/";
      parts.push(this.request.method.toUpperCase());
      parts.push(pathname);
      const queryString = queryParamsToString(this.request.params) || "";
      parts.push(queryString);
      parts.push(`${this.canonicalHeaders()}
`);
      parts.push(this.signedHeaders());
      parts.push(await this.hexEncodedBodyHash());
      const result = parts.join("\n");
      return result;
    }
    canonicalHeaders() {
      const headers2 = [];
      Object.keys(this.request.headers).forEach((key) => {
        headers2.push([key, this.request.headers[key]]);
      });
      headers2.sort((a19, b11) => a19[0].toLowerCase() < b11[0].toLowerCase() ? -1 : 1);
      const parts = [];
      headers2.forEach((item) => {
        const key = item[0].toLowerCase();
        if (this.isSignableHeader(key)) {
          const value = item[1];
          if (typeof value === "undefined" || value === null || typeof value.toString !== "function") {
            throw new Error(`Header ${key} contains invalid value`);
          }
          parts.push(`${key}:${this.canonicalHeaderValues(value.toString())}`);
        }
      });
      return parts.join("\n");
    }
    canonicalHeaderValues(values) {
      return values.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
    }
    signedHeaders() {
      const keys = [];
      Object.keys(this.request.headers).forEach((key) => {
        key = key.toLowerCase();
        if (this.isSignableHeader(key)) {
          keys.push(key);
        }
      });
      return keys.sort().join(";");
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
      if (this.request.headers[constant.contentSha256Header]) {
        return this.request.headers[constant.contentSha256Header];
      }
      if (this.request.body) {
        return await this.hexEncodedHash(queryParamsToString(this.request.body));
      }
      return await this.hexEncodedHash("");
    }
    isSignableHeader(key) {
      return unsignableHeaders.indexOf(key) < 0;
    }
    iso8601(date) {
      if (date === void 0) {
        date = new Date();
      }
      return date.toISOString().replace(/\.\d{3}Z$/, "Z");
    }
    async getSigningKey(credentials, date, region, service) {
      const kDate = await hmacSha256(
        date,
        `${constant.kDatePrefix}${credentials.secretKey}`
      );
      const kRegion = await hmacSha256(region, kDate);
      const kService = await hmacSha256(service, kRegion);
      return hmacSha256(constant.v4Identifier, kService);
    }
    createScope(date, region, serviceName) {
      return [date.substr(0, 8), region, serviceName, constant.v4Identifier].join(
        "/"
      );
    }
  };

  // services/volc/mod.ts
  var rawLangMap3 = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["en", "en"],
    ["ja", "ja"]
  ];
  var langMap8 = new Map(rawLangMap3);
  var langMapReverse4 = new Map(
    rawLangMap3.map(([translatorLang, lang]) => [lang, translatorLang])
  );
  var Volc = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.accessKeyId = "";
      this.secretAccessKey = "";
      this.maxTextGroupLength = 8;
      if (!serviceConfig || !serviceConfig.accessKeyId || !serviceConfig.secretAccessKey) {
        throw new Error("accessKeyId and secretAccessKey are required");
      }
      this.accessKeyId = serviceConfig.accessKeyId;
      this.secretAccessKey = serviceConfig.secretAccessKey;
    }
    static getAllProps() {
      return [{
        name: "accessKeyId",
        required: true,
        type: "text"
      }, {
        name: "secretAccessKey",
        required: true,
        type: "password"
      }];
    }
    async translateList(payload) {
      const { text, from, to } = payload;
      const source = text;
      const requestObj = {
        region: "cn-north-1",
        method: "POST",
        params: {
          "Action": "TranslateText",
          "Version": "2020-06-01"
        },
        pathname: "/",
        headers: {
          "Content-Type": "application/json",
          "host": "open.volcengineapi.com"
        },
        body: JSON.stringify({
          "SourceLanguage": langMap8.get(from),
          "TargetLanguage": "zh",
          "TextList": text
        })
      };
      const signer = new Signer(requestObj, "translate");
      await signer.addAuthorization({
        accessKeyId: this.accessKeyId,
        secretKey: this.secretAccessKey
      });
      const urlSearchParams = new URLSearchParams(requestObj.params);
      const response = await request2(
        {
          url: "https://open.volcengineapi.com" + requestObj.pathname + "?" + urlSearchParams.toString(),
          headers: signer.request.headers,
          method: requestObj.method,
          body: requestObj.body
        }
      );
      if (response.TranslationList) {
        const resultText = response.TranslationList.map((item) => item.Translation);
        let remoteFrom = from;
        if (response.TranslationList.length > 0) {
          if (response.TranslationList[0].DetectedSourceLanguage) {
            remoteFrom = langMapReverse4.get(
              response.TranslationList[0].DetectedSourceLanguage
            ) || from;
          }
        }
        return {
          text: resultText,
          from: remoteFrom,
          to
        };
      } else {
        const error2 = response.ResponseMetadata.Error;
        throw new CommonError(error2.Code, error2.Message);
      }
    }
  };
  var mod_default = Volc;

  // utils/md5.js
  function safeAdd(x15, y9) {
    var lsw = (x15 & 65535) + (y9 & 65535);
    var msw = (x15 >> 16) + (y9 >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  function md5cmn(q6, a19, b11, x15, s19, t17) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a19, q6), safeAdd(x15, t17)), s19), b11);
  }
  function md5ff(a19, b11, c26, d16, x15, s19, t17) {
    return md5cmn(b11 & c26 | ~b11 & d16, a19, b11, x15, s19, t17);
  }
  function md5gg(a19, b11, c26, d16, x15, s19, t17) {
    return md5cmn(b11 & d16 | c26 & ~d16, a19, b11, x15, s19, t17);
  }
  function md5hh(a19, b11, c26, d16, x15, s19, t17) {
    return md5cmn(b11 ^ c26 ^ d16, a19, b11, x15, s19, t17);
  }
  function md5ii(a19, b11, c26, d16, x15, s19, t17) {
    return md5cmn(c26 ^ (b11 | ~d16), a19, b11, x15, s19, t17);
  }
  function binlMD5(x15, len) {
    x15[len >> 5] |= 128 << len % 32;
    x15[(len + 64 >>> 9 << 4) + 14] = len;
    var i20;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a19 = 1732584193;
    var b11 = -271733879;
    var c26 = -1732584194;
    var d16 = 271733878;
    for (i20 = 0; i20 < x15.length; i20 += 16) {
      olda = a19;
      oldb = b11;
      oldc = c26;
      oldd = d16;
      a19 = md5ff(a19, b11, c26, d16, x15[i20], 7, -680876936);
      d16 = md5ff(d16, a19, b11, c26, x15[i20 + 1], 12, -389564586);
      c26 = md5ff(c26, d16, a19, b11, x15[i20 + 2], 17, 606105819);
      b11 = md5ff(b11, c26, d16, a19, x15[i20 + 3], 22, -1044525330);
      a19 = md5ff(a19, b11, c26, d16, x15[i20 + 4], 7, -176418897);
      d16 = md5ff(d16, a19, b11, c26, x15[i20 + 5], 12, 1200080426);
      c26 = md5ff(c26, d16, a19, b11, x15[i20 + 6], 17, -1473231341);
      b11 = md5ff(b11, c26, d16, a19, x15[i20 + 7], 22, -45705983);
      a19 = md5ff(a19, b11, c26, d16, x15[i20 + 8], 7, 1770035416);
      d16 = md5ff(d16, a19, b11, c26, x15[i20 + 9], 12, -1958414417);
      c26 = md5ff(c26, d16, a19, b11, x15[i20 + 10], 17, -42063);
      b11 = md5ff(b11, c26, d16, a19, x15[i20 + 11], 22, -1990404162);
      a19 = md5ff(a19, b11, c26, d16, x15[i20 + 12], 7, 1804603682);
      d16 = md5ff(d16, a19, b11, c26, x15[i20 + 13], 12, -40341101);
      c26 = md5ff(c26, d16, a19, b11, x15[i20 + 14], 17, -1502002290);
      b11 = md5ff(b11, c26, d16, a19, x15[i20 + 15], 22, 1236535329);
      a19 = md5gg(a19, b11, c26, d16, x15[i20 + 1], 5, -165796510);
      d16 = md5gg(d16, a19, b11, c26, x15[i20 + 6], 9, -1069501632);
      c26 = md5gg(c26, d16, a19, b11, x15[i20 + 11], 14, 643717713);
      b11 = md5gg(b11, c26, d16, a19, x15[i20], 20, -373897302);
      a19 = md5gg(a19, b11, c26, d16, x15[i20 + 5], 5, -701558691);
      d16 = md5gg(d16, a19, b11, c26, x15[i20 + 10], 9, 38016083);
      c26 = md5gg(c26, d16, a19, b11, x15[i20 + 15], 14, -660478335);
      b11 = md5gg(b11, c26, d16, a19, x15[i20 + 4], 20, -405537848);
      a19 = md5gg(a19, b11, c26, d16, x15[i20 + 9], 5, 568446438);
      d16 = md5gg(d16, a19, b11, c26, x15[i20 + 14], 9, -1019803690);
      c26 = md5gg(c26, d16, a19, b11, x15[i20 + 3], 14, -187363961);
      b11 = md5gg(b11, c26, d16, a19, x15[i20 + 8], 20, 1163531501);
      a19 = md5gg(a19, b11, c26, d16, x15[i20 + 13], 5, -1444681467);
      d16 = md5gg(d16, a19, b11, c26, x15[i20 + 2], 9, -51403784);
      c26 = md5gg(c26, d16, a19, b11, x15[i20 + 7], 14, 1735328473);
      b11 = md5gg(b11, c26, d16, a19, x15[i20 + 12], 20, -1926607734);
      a19 = md5hh(a19, b11, c26, d16, x15[i20 + 5], 4, -378558);
      d16 = md5hh(d16, a19, b11, c26, x15[i20 + 8], 11, -2022574463);
      c26 = md5hh(c26, d16, a19, b11, x15[i20 + 11], 16, 1839030562);
      b11 = md5hh(b11, c26, d16, a19, x15[i20 + 14], 23, -35309556);
      a19 = md5hh(a19, b11, c26, d16, x15[i20 + 1], 4, -1530992060);
      d16 = md5hh(d16, a19, b11, c26, x15[i20 + 4], 11, 1272893353);
      c26 = md5hh(c26, d16, a19, b11, x15[i20 + 7], 16, -155497632);
      b11 = md5hh(b11, c26, d16, a19, x15[i20 + 10], 23, -1094730640);
      a19 = md5hh(a19, b11, c26, d16, x15[i20 + 13], 4, 681279174);
      d16 = md5hh(d16, a19, b11, c26, x15[i20], 11, -358537222);
      c26 = md5hh(c26, d16, a19, b11, x15[i20 + 3], 16, -722521979);
      b11 = md5hh(b11, c26, d16, a19, x15[i20 + 6], 23, 76029189);
      a19 = md5hh(a19, b11, c26, d16, x15[i20 + 9], 4, -640364487);
      d16 = md5hh(d16, a19, b11, c26, x15[i20 + 12], 11, -421815835);
      c26 = md5hh(c26, d16, a19, b11, x15[i20 + 15], 16, 530742520);
      b11 = md5hh(b11, c26, d16, a19, x15[i20 + 2], 23, -995338651);
      a19 = md5ii(a19, b11, c26, d16, x15[i20], 6, -198630844);
      d16 = md5ii(d16, a19, b11, c26, x15[i20 + 7], 10, 1126891415);
      c26 = md5ii(c26, d16, a19, b11, x15[i20 + 14], 15, -1416354905);
      b11 = md5ii(b11, c26, d16, a19, x15[i20 + 5], 21, -57434055);
      a19 = md5ii(a19, b11, c26, d16, x15[i20 + 12], 6, 1700485571);
      d16 = md5ii(d16, a19, b11, c26, x15[i20 + 3], 10, -1894986606);
      c26 = md5ii(c26, d16, a19, b11, x15[i20 + 10], 15, -1051523);
      b11 = md5ii(b11, c26, d16, a19, x15[i20 + 1], 21, -2054922799);
      a19 = md5ii(a19, b11, c26, d16, x15[i20 + 8], 6, 1873313359);
      d16 = md5ii(d16, a19, b11, c26, x15[i20 + 15], 10, -30611744);
      c26 = md5ii(c26, d16, a19, b11, x15[i20 + 6], 15, -1560198380);
      b11 = md5ii(b11, c26, d16, a19, x15[i20 + 13], 21, 1309151649);
      a19 = md5ii(a19, b11, c26, d16, x15[i20 + 4], 6, -145523070);
      d16 = md5ii(d16, a19, b11, c26, x15[i20 + 11], 10, -1120210379);
      c26 = md5ii(c26, d16, a19, b11, x15[i20 + 2], 15, 718787259);
      b11 = md5ii(b11, c26, d16, a19, x15[i20 + 9], 21, -343485551);
      a19 = safeAdd(a19, olda);
      b11 = safeAdd(b11, oldb);
      c26 = safeAdd(c26, oldc);
      d16 = safeAdd(d16, oldd);
    }
    return [a19, b11, c26, d16];
  }
  function binl2rstr(input) {
    var i20;
    var output = "";
    var length32 = input.length * 32;
    for (i20 = 0; i20 < length32; i20 += 8) {
      output += String.fromCharCode(input[i20 >> 5] >>> i20 % 32 & 255);
    }
    return output;
  }
  function rstr2binl(input) {
    var i20;
    var output = [];
    output[(input.length >> 2) - 1] = void 0;
    for (i20 = 0; i20 < output.length; i20 += 1) {
      output[i20] = 0;
    }
    var length8 = input.length * 8;
    for (i20 = 0; i20 < length8; i20 += 8) {
      output[i20 >> 5] |= (input.charCodeAt(i20 / 8) & 255) << i20 % 32;
    }
    return output;
  }
  function rstrMD5(s19) {
    return binl2rstr(binlMD5(rstr2binl(s19), s19.length * 8));
  }
  function rstrHMACMD5(key, data) {
    var i20;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = void 0;
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }
    for (i20 = 0; i20 < 16; i20 += 1) {
      ipad[i20] = bkey[i20] ^ 909522486;
      opad[i20] = bkey[i20] ^ 1549556828;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }
  function rstr2hex(input) {
    var hexTab = "0123456789abcdef";
    var output = "";
    var x15;
    var i20;
    for (i20 = 0; i20 < input.length; i20 += 1) {
      x15 = input.charCodeAt(i20);
      output += hexTab.charAt(x15 >>> 4 & 15) + hexTab.charAt(x15 & 15);
    }
    return output;
  }
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }
  function rawMD5(s19) {
    return rstrMD5(str2rstrUTF8(s19));
  }
  function hexMD5(s19) {
    return rstr2hex(rawMD5(s19));
  }
  function rawHMACMD5(k7, d16) {
    return rstrHMACMD5(str2rstrUTF8(k7), str2rstrUTF8(d16));
  }
  function hexHMACMD5(k7, d16) {
    return rstr2hex(rawHMACMD5(k7, d16));
  }
  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }
      return rawMD5(string);
    }
    if (!raw) {
      return hexHMACMD5(key, string);
    }
    return rawHMACMD5(key, string);
  }

  // services/bing/api.js
  var TRANSLATE_API_ROOT = "https://{s}bing.com";
  var TRANSLATE_WEBSITE = TRANSLATE_API_ROOT + "/translator";
  var TRANSLATE_API = TRANSLATE_API_ROOT + "/ttranslatev3";
  var TRANSLATE_SPELL_CHECK_API = TRANSLATE_API_ROOT + "/tspellcheckv3";
  var globalConfigStorageKey = "bingGlobalConfig";
  var rawLangMap4 = [
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
  ];
  var langMap9 = new Map(rawLangMap4);
  var langMapReverse5 = new Map(
    rawLangMap4.map(([translatorLang, lang]) => [lang, translatorLang])
  );
  var MAX_TEXT_LEN = 1e3;
  var globalConfig;
  var globalConfigPromise;
  function replaceSubdomain(url, subdomain) {
    return url.replace("{s}", subdomain ? subdomain + "." : "");
  }
  async function isTokenExpired() {
    if (!globalConfig) {
      const storageValue = await browserAPI.storage.local.get(
        globalConfigStorageKey
      );
      if (storageValue) {
        globalConfig = storageValue[globalConfigStorageKey];
      }
      return true;
    }
    const { tokenTs, tokenExpiryInterval } = globalConfig;
    return Date.now() - tokenTs > tokenExpiryInterval;
  }
  async function fetchGlobalConfig() {
    let subdomain;
    let IG;
    let IID;
    let token;
    let key;
    let tokenExpiryInterval;
    let isVertical;
    let frontDoorBotClassification;
    let isSignedInOrCorporateUser;
    let cookie;
    try {
      const finalUrl = replaceSubdomain(TRANSLATE_WEBSITE, subdomain);
      const response = await request2({
        url: finalUrl,
        responseType: "raw"
      });
      const { body, headers: headers2, url } = response;
      subdomain = url.match(/^https?:\/\/(\w+)\.bing\.com/)[1];
      cookie = headers2["set-cookie"];
      IG = body.match(/IG:"([^"]+)"/)[1];
      IID = body.match(/data-iid="([^"]+)"/)[1];
      [
        key,
        token,
        tokenExpiryInterval,
        isVertical,
        frontDoorBotClassification,
        isSignedInOrCorporateUser
      ] = JSON.parse(
        body.match(/params_RichTranslateHelper\s?=\s?([^\]]+\])/)[1]
      );
    } catch (e18) {
      console.error("failed to fetch global config", e18);
      throw e18;
    }
    globalConfig = {
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
      count: 0
    };
    await browserAPI.storage.local.set({
      [globalConfigStorageKey]: globalConfig
    });
    return globalConfig;
  }
  function makeRequestURL(isSpellCheck) {
    const { IG, IID, subdomain, isVertical } = globalConfig;
    return replaceSubdomain(
      isSpellCheck ? TRANSLATE_SPELL_CHECK_API : TRANSLATE_API,
      subdomain
    ) + "?isVertical=" + +isVertical + (IG && IG.length ? "&IG=" + IG : "") + (IID && IID.length ? "&IID=" + IID + "." + globalConfig.count++ : "");
  }
  function makeRequestBody(isSpellCheck, text, fromLang, toLang) {
    const { token, key } = globalConfig;
    const body = {
      fromLang,
      text,
      token,
      key
    };
    if (!isSpellCheck && toLang) {
      body.to = toLang;
    }
    return body;
  }
  async function translate2(text, from, to) {
    if (!text || !(text = text.trim())) {
      return;
    }
    if (text.length > MAX_TEXT_LEN) {
      throw new Error(
        `The supported maximum length of text is ${MAX_TEXT_LEN}. Please shorten the text.`
      );
    }
    if (!globalConfigPromise) {
      globalConfigPromise = fetchGlobalConfig();
    }
    await globalConfigPromise;
    const isTokenExpiredValue = await isTokenExpired();
    if (isTokenExpiredValue) {
      globalConfigPromise = fetchGlobalConfig();
      await globalConfigPromise;
    }
    from = from || "auto";
    to = to || "zh-CN";
    from = langMap9.get(from) || from;
    to = langMap9.get(to) || to;
    const requestURL = makeRequestURL(false);
    const requestBody = makeRequestBody(
      false,
      text,
      from,
      to === "auto-detect" ? "zh-Hans" : to
    );
    const requestHeaders = {
      referer: replaceSubdomain(TRANSLATE_WEBSITE, globalConfig.subdomain),
      "content-type": "application/x-www-form-urlencoded"
    };
    const searchParams = new URLSearchParams(requestBody);
    const finalUrl = requestURL;
    const requestBodyString = searchParams.toString();
    const body = await request2({
      url: finalUrl,
      headers: requestHeaders,
      method: "POST",
      body: requestBodyString
    });
    if (body.ShowCaptcha || body.StatusCode === 401 || body.statusCode) {
      globalConfig = null;
      globalConfigPromise = null;
      await browserAPI.storage.local.remove(globalConfigStorageKey);
      if (body.ShowCaptcha) {
        throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${body.StatusCode}.
    `);
      }
      if (body.StatusCode === 401) {
        throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);
      }
      if (body.statusCode) {
        throw new Error(
          `Something went wrong! The response is ${JSON.stringify(body)}.`
        );
      }
    }
    const translation = body[0].translations[0];
    const detectedLang = body[0].detectedLanguage;
    const res = {
      text: translation.text,
      from: langMapReverse5.get(detectedLang.language),
      to: langMapReverse5.get(translation.to)
    };
    return res;
  }

  // services/bing/mod.ts
  var Bing = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.isSupportList = false;
      this.maxTextLength = 1e3;
    }
    async translate(payload) {
      const { text, from, to } = payload;
      if (!text)
        return { ...payload };
      const result = await translate2(text, from, to);
      return result;
    }
  };

  // services/baidu.ts
  var rawLangMap5 = [
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
  ];
  var langMap10 = new Map(rawLangMap5);
  var langMapReverse6 = new Map(
    rawLangMap5.map(([translatorLang, lang]) => [lang, translatorLang])
  );
  var Baidu = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.endpoint = "https://api.fanyi.baidu.com/api/trans/vip/translate";
      this.appid = "";
      this.key = "";
      this.isSupportList = false;
      if (!serviceConfig || !serviceConfig.appid || !serviceConfig.key) {
        throw new Error("appid and key are required");
      }
      this.appid = serviceConfig.appid;
      this.key = serviceConfig.key;
    }
    static getAllProps() {
      return [{
        name: "appid",
        required: true,
        type: "text"
      }, {
        name: "key",
        required: true,
        type: "password"
      }];
    }
    async translate(payload) {
      const salt = Date.now().toString();
      const { endpoint } = this;
      const { appid, key } = this;
      const { text, from, to } = payload;
      const params = new URLSearchParams({
        from: langMap10.get(from),
        to: langMap10.get(to),
        q: text,
        salt,
        appid,
        sign: md5(appid + text + salt + key)
      });
      const urlObj = new URL(endpoint);
      urlObj.search = params.toString();
      const data = await request2(
        {
          url: urlObj.toString()
        }
      );
      if (data.error_code) {
        console.error(
          new Error("[Baidu service]" + data.error_msg)
        );
        throw new CommonError("API_SERVER_ERROR", data.error_msg);
      }
      const {
        trans_result: transResult,
        from: langDetected
      } = data;
      const transParagraphs = transResult.map(({ dst }) => dst);
      const detectedFrom = langMapReverse6.get(langDetected);
      return {
        from: detectedFrom,
        to,
        text: transParagraphs.join("\n")
      };
    }
  };
  var baidu_default = Baidu;

  // services/caiyun.ts
  var rawLangMap6 = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["en", "en"],
    ["ja", "ja"]
  ];
  var langMap11 = new Map(rawLangMap6);
  var Caiyun = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.token = "";
      if (!serviceConfig || !serviceConfig.token) {
        throw new Error("token are required");
      }
      this.token = serviceConfig.token;
    }
    static getAllProps() {
      return [{
        name: "token",
        required: true,
        type: "password"
      }];
    }
    async translateList(payload) {
      const { text, from, to } = payload;
      const source = text;
      const response = await request2(
        {
          url: "https://api.interpreter.caiyunai.com/v1/translator",
          headers: {
            "content-type": "application/json",
            "x-authorization": "token " + this.token
          },
          method: "POST",
          body: JSON.stringify({
            source,
            trans_type: `${langMap11.get(from)}2${langMap11.get(to)}`
          })
        }
      );
      const result = response;
      return {
        text: result.target,
        from,
        to
      };
    }
  };
  var caiyun_default = Caiyun;

  // services/youdao.ts
  var rawLangMap7 = [
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
  ];
  var langMap12 = new Map(rawLangMap7);
  var langMapReverse7 = new Map(
    rawLangMap7.map(([translatorLang, lang]) => [lang, translatorLang])
  );
  function truncate(q6) {
    const len = q6.length;
    if (len <= 20)
      return q6;
    return q6.substring(0, 10) + len + q6.substring(len - 10, len);
  }
  var Youdao = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.isSupportList = false;
      this.appId = "";
      this.appSecret = "";
      if (!serviceConfig || !serviceConfig.appId || !serviceConfig.appSecret) {
        throw new Error("appId and appSecret are required");
      }
      this.appId = serviceConfig.appId;
      this.appSecret = serviceConfig.appSecret;
    }
    static getAllProps() {
      return [{
        name: "appId",
        required: true,
        type: "text"
      }, {
        name: "appSecret",
        required: true,
        type: "password"
      }];
    }
    async translate(payload) {
      const { text, from, to } = payload;
      const salt = new Date().getTime();
      const curTime = Math.round(new Date().getTime() / 1e3);
      const str1 = this.appId + truncate(text) + salt + curTime + this.appSecret;
      const sign = await sha256(str1);
      const params = {
        q: text,
        appKey: this.appId,
        salt: salt.toString(),
        from: langMap12.get(from),
        to: langMap12.get(to),
        sign,
        signType: "v3",
        curtime: curTime.toString()
      };
      const urlSearchParams = new URLSearchParams(params);
      const res = await request2(
        {
          url: "https://openapi.youdao.com/api",
          method: "POST",
          body: urlSearchParams.toString(),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      const result = res;
      const l18 = result.l;
      const [remoteFrom, _2] = l18.split("2");
      return {
        text: result.translation.join("\n"),
        from: langMapReverse7.get(remoteFrom),
        to
      };
    }
  };
  var youdao_default = Youdao;

  // services/mod.ts
  var TranslationServices = {
    mock: {
      class: Mock,
      name: "Mock",
      homepage: "https://www.google.com"
    },
    google: {
      class: Google,
      name: "Google",
      homepage: "https://translate.google.com/"
    },
    deepl: {
      class: deepl_default,
      name: "DeepL",
      homepage: "https://www.deepl.com/translator"
    },
    transmart: {
      class: Transmart,
      name: "Transmart",
      homepage: "https://transmart.qq.com/"
    },
    bing: {
      class: Bing,
      name: "Bing",
      homepage: "https://www.bing.com/translator"
    },
    caiyun: {
      class: caiyun_default,
      name: "Caiyun",
      homepage: "https://fanyi.caiyunapp.com/"
    },
    tencent: {
      class: Tencent,
      name: "Tencent",
      homepage: "https://fanyi.qq.com/"
    },
    baidu: {
      class: baidu_default,
      name: "Baidu",
      homepage: "https://fanyi.baidu.com/"
    },
    volc: {
      class: mod_default,
      name: "Volc",
      homepage: "https://www.volcengine.com/"
    },
    openl: {
      class: openl_default,
      name: "Openl",
      homepage: "https://openl.org/"
    },
    youdao: {
      class: youdao_default,
      name: "Youdao",
      homepage: "https://fanyi.youdao.com/"
    },
    d: {
      class: D6,
      name: "Deepl(Alpha) ",
      alpha: true,
      homepage: "https://www.deepl.com/translator"
    }
  };
  function formatTranslationService(key, ctx) {
    const service = TranslationServices[key];
    const translationConfig = ctx.config.translationServices[key] || {};
    let ok = true;
    const allProps = service.class.getAllProps();
    if (allProps.length > 0) {
      const requiredProps = allProps.filter((prop) => prop.required);
      if (requiredProps.length > 0) {
        for (const prop of requiredProps) {
          if (!translationConfig[prop.name]) {
            ok = false;
            break;
          }
        }
      }
    }
    return {
      ...service,
      id: key,
      selected: ctx.translationService === key,
      ok,
      config: translationConfig,
      props: service.class.getProps(),
      allProps
    };
  }
  var allServiceKeys = Object.keys(
    TranslationServices
  );
  var getTranslationServices = (ctx) => {
    const { config } = ctx;
    const alpha = config.alpha;
    const debug = config.debug;
    return allServiceKeys.filter((key) => {
      const service = TranslationServices[key];
      if (key === "mock") {
        if (debug) {
          return true;
        } else {
          return false;
        }
      }
      return !service.alpha || alpha || key === ctx.translationService;
    }).map((key) => {
      return formatTranslationService(key, ctx);
    });
  };

  // utils/url_match.ts
  var matchAll = ["*://*/*", "*", "*://*"];
  var placeholder = "immersive-translate-wildcard-placeholder.com";
  function getMatchedUrl(rawUrl, rawMatches) {
    let matches = [];
    if (!rawMatches) {
      return null;
    }
    if (rawMatches && !Array.isArray(rawMatches)) {
      matches = [rawMatches];
    } else {
      matches = rawMatches;
    }
    if (matches.length === 0) {
      return null;
    }
    const urlObj = new URL(rawUrl);
    urlObj.hash = "";
    urlObj.search = "";
    const url = urlObj.href;
    const hostname2 = urlObj.hostname;
    if (matches && matches.length > 0) {
      const matched = matches.find((match) => {
        if (match === hostname2) {
          return true;
        } else if (matchAll.includes(match)) {
          return true;
        } else if (!match.includes("*")) {
          try {
            const matchUrl = new URL(match);
            if (matchUrl.pathname === "/" && !match.endsWith("/")) {
              return matchUrl.hostname === hostname2;
            } else {
              return match === url;
            }
          } catch (_e3) {
          }
          return false;
        } else {
          let scheme;
          if (match.includes("://")) {
            scheme = match.split("://")[0];
          } else {
            scheme = "*";
            match = "https://" + match;
          }
          const validUrlMatch = match.replace(
            /\*/g,
            placeholder
          );
          const validUrlObj = new URL(validUrlMatch);
          const hostname3 = validUrlObj.hostname;
          const pathname = validUrlObj.pathname;
          const protocol = validUrlObj.protocol;
          const port = validUrlObj.port;
          const regex = makeRegExp(
            scheme + ":",
            restorePlaceholderToWildcard(hostname3),
            restorePlaceholderToWildcard(pathname)
          );
          if (regex) {
            const clonedUrl = new URL(url);
            clonedUrl.port = "";
            return regex.test(clonedUrl.href);
          } else {
            return false;
          }
        }
      });
      if (matched) {
        return matched;
      }
    }
    return null;
  }
  function restorePlaceholderToWildcard(str) {
    return str.replace(placeholder, "*");
  }
  function makeRegExp(scheme, host, path) {
    let regex = "^";
    if (scheme === "*:") {
      regex += "(http:|https:|file:)";
    } else {
      regex += scheme;
    }
    regex += "//";
    if (host) {
      if (host === "*") {
        regex += "[^/]+?";
      } else {
        if (host.match(/^\*\./)) {
          regex += "[^/]*?";
          host = host.substring(2);
        }
        regex += host.replace(/\./g, "\\.").replace(/\*/g, "[^/]*");
      }
    }
    if (path) {
      if (path === "*" || path === "/*") {
        regex += "(/.*)?";
      } else if (path.includes("*")) {
        regex += path.replace(/\*/g, ".*?");
        regex += "/?";
      } else {
        regex += "/?";
      }
    } else {
      regex += "/?";
    }
    regex += "$";
    return new RegExp(regex);
  }
  function isMatchUrl(url, rawMatches) {
    return getMatchedUrl(url, rawMatches) !== null;
  }

  // dom/context.ts
  async function getContext(options) {
    const { url, config } = options;
    const urlObj = new URL(url);
    const {
      translationParagraphLanguagePattern,
      translationService,
      translationServices,
      translationTheme,
      translationThemePatterns,
      translationUrlPattern,
      targetLanguage
    } = config;
    const isDetectParagraphLanguage = isMatchUrl(
      url,
      translationParagraphLanguagePattern.matches
    );
    let defaultTranslationService = translationService;
    const services = Object.keys(translationServices);
    for (const service of services) {
      const serviceConfig = translationServices[service];
      if (isMatchUrl(url, serviceConfig.matches)) {
        defaultTranslationService = service;
        break;
      }
    }
    let defaultTheme = translationTheme;
    const themes = Object.keys(translationThemePatterns);
    for (const theme of themes) {
      const themeConfig = translationThemePatterns[theme];
      if (isMatchUrl(url, themeConfig.matches)) {
        defaultTheme = theme;
        break;
      }
    }
    const isTranslateUrl = isMatchUrl(url, translationUrlPattern.matches);
    let isTranslateExcludeUrl = isMatchUrl(
      url,
      translationUrlPattern.excludeMatches
    );
    if (!isTranslateExcludeUrl) {
      isTranslateExcludeUrl = isMatchUrl(url, buildinExcludeUrls);
    }
    const defaultTargetLanguage = targetLanguage || "zh-CN";
    const hostname2 = urlObj.hostname;
    const encryptedHostname = await sha256(hostname2);
    const pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash;
    const encryptedPath = await sha256(pathAndQueryAndHash);
    const encryptedUrl = `https://${encryptedHostname}.com/${encryptedPath}`;
    const ctx = {
      targetLanguage: defaultTargetLanguage,
      config,
      isDetectParagraphLanguage,
      translationService: defaultTranslationService,
      translationTheme: defaultTheme,
      isTranslateUrl,
      isTranslateExcludeUrl,
      rule: config.generalRule,
      url,
      encryptedUrl
    };
    const rules = config.rules;
    const rule = rules.find((rule2) => {
      return isMatchUrl(url, rule2.matches);
    });
    const generalRule = config.generalRule;
    if (rule) {
      ctx.rule = mergeRule(generalRule, rule);
    }
    return ctx;
  }

  // components/nav_left.tsx
  function NavLeft(props) {
    return /* @__PURE__ */ p19("div", {
      className: "nav-left",
      children: [
        /* @__PURE__ */ p19("div", {
          className: "title",
          children: props.title
        }),
        /* @__PURE__ */ p19("div", {
          className: "description",
          children: props.description
        })
      ]
    });
  }

  // hooks/use_outside_click.tsx
  function useOutsideAlerter(ref, root2, callback) {
    j2(() => {
      function handleClickOutside(event) {
        if (ref && ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }
      root2.addEventListener("mousedown", handleClickOutside);
      return () => {
        root2.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  // components/select_link.tsx
  function SelectLink(props) {
    const items = props.items;
    const root2 = props.root;
    let { size } = props;
    if (!size) {
      size = "sm";
    }
    const [open, setOpen] = P2(false);
    const selectRef = w2(null);
    const aRef = w2(null);
    useOutsideAlerter(selectRef, root2 || document, () => {
      setOpen(false);
      if (aRef.current) {
        aRef.current.blur();
      }
    });
    let checkedItem = items.find((item) => item.selected);
    if (!checkedItem) {
      checkedItem = items[0];
    }
    const handleToggle = (e18) => {
      e18.preventDefault();
      const targetState = !open;
      if (!targetState && aRef.current) {
        aRef.current.blur();
      }
      setOpen(targetState);
    };
    return /* @__PURE__ */ p19("nav", {
      class: `inline-block text-${size}`,
      ref: selectRef,
      children: /* @__PURE__ */ p19("li", {
        class: `py-0 select-link text-${size} ${open ? "select-link-active" : ""}`,
        role: "list",
        children: [
          /* @__PURE__ */ p19("a", {
            ref: aRef,
            class: `text-${size}`,
            href: "#",
            onClick: handleToggle,
            children: checkedItem.label
          }),
          /* @__PURE__ */ p19("ul", {
            class: "select-link-ul max-h-30 overflow-y-scroll ",
            role: "listbox",
            children: items.map((item, index) => {
              return /* @__PURE__ */ p19("li", {
                children: /* @__PURE__ */ p19("a", {
                  class: `text-${size} ${item.selected ? "select-link-selected" : ""}`,
                  href: "#",
                  onClick: (e18) => {
                    e18.preventDefault();
                    setOpen(false);
                    item.onSelected(item);
                  },
                  children: item.label
                })
              }, `item-${index}`);
            })
          })
        ]
      })
    });
  }

  // libs/preact-translation/utils.ts
  function getResourceUrl(root2, lang) {
    return [root2, !root2 || root2.endsWith("/") ? "" : "/", lang, ".json"].join("");
  }
  function format(str, params) {
    let result = str;
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        const template = new RegExp("{" + key + "}", "gm");
        result = result.replace(template, value.toString());
      });
    }
    return result;
  }
  function getValue(languageData, lang, key) {
    let localeData = languageData[lang];
    if (!localeData) {
      return key;
    }
    const keys = key.split(".");
    let propKey = "";
    do {
      propKey += keys.shift();
      const value = localeData[propKey];
      if (value !== void 0 && (typeof value === "object" || !keys.length)) {
        localeData = value;
        propKey = "";
      } else if (!keys.length) {
        localeData = key;
      } else {
        propKey += ".";
      }
    } while (keys.length);
    return localeData;
  }

  // libs/preact-translation/useTranslate.tsx
  var cache = {};
  var defaultOptions = {
    root: "",
    lang: "en",
    fallbackLang: "en"
  };
  function useTranslate(rawOptions, translations2) {
    const options = Object.assign(
      {},
      defaultOptions,
      rawOptions
    );
    cache = translations2 || cache;
    const [lang, setLang] = P2(options.lang);
    const [data, setData] = P2(cache);
    const [isReady2, setReady] = P2(false);
    const loadData = (langKey) => {
      if (data.hasOwnProperty(langKey)) {
        return;
      }
      setReady(false);
      let url = getResourceUrl(options.root || "", langKey);
      if (options.getUrl) {
        url = options.getUrl(options.root || "", langKey);
        fetch(url).then((results) => results.json()).then((resource) => {
          cache[langKey] = resource;
          setData({ ...cache });
          setReady(true);
        }).catch((error2) => {
          setData({ ...cache });
          setReady(true);
        });
      }
    };
    j2(() => {
      loadData(options.fallbackLang || "en");
      loadData(lang);
    }, [lang]);
    const t17 = (key, params) => {
      if (!data.hasOwnProperty(lang)) {
        return key;
      }
      let value = getValue(data, lang, key);
      if (value === key && lang !== options.fallbackLang) {
        value = getValue(data, options.fallbackLang, key);
      }
      return format(value, params);
    };
    return { lang, setLang, t: t17, isReady: isReady2 };
  }

  // libs/preact-translation/translateProvider.tsx
  var TranslateContext = ce(null);
  var defaultOptions2 = {
    root: "assets",
    lang: "en",
    fallbackLang: "en"
  };
  var TranslateProvider = (props) => {
    const { t: t17, setLang, lang, isReady: isReady2 } = useTranslate(
      {
        root: props.root || defaultOptions2.root,
        lang: props.lang || defaultOptions2.lang,
        fallbackLang: props.fallbackLang || defaultOptions2.fallbackLang,
        getUrl: props.getUrl
      },
      props.translations
    );
    return /* @__PURE__ */ p19(TranslateContext.Provider, {
      value: {
        t: t17,
        setLang,
        lang,
        isReady: isReady2
      },
      children: props.children
    });
  };

  // hooks/use_i18n.ts
  function useI18n() {
    return M2(TranslateContext);
  }

  // components/option_field.tsx
  function OptionField(props) {
    let { field, root: root2, onChange, value } = props;
    value = value || field.default || "";
    const { t: t17 } = useI18n();
    if (field.type === "select") {
      return /* @__PURE__ */ p19("div", {
        class: "flex justify-end mb-2",
        children: [
          /* @__PURE__ */ p19("label", {
            class: "engine",
            children: [
              field.label ? t17(field.label) : field.name,
              "\uFF1A"
            ]
          }),
          /* @__PURE__ */ p19(SelectLink, {
            root: root2,
            items: field.options.map(
              (fieldOption) => {
                return {
                  label: `${fieldOption.label ? t17(fieldOption.label) : fieldOption.value}`,
                  value,
                  selected: value === fieldOption.value,
                  onSelected: () => {
                    onChange(fieldOption.value);
                  }
                };
              }
            )
          })
        ]
      });
    } else if (field.type === "text") {
      return /* @__PURE__ */ p19("div", {
        className: "secretInput",
        children: [
          /* @__PURE__ */ p19("div", {
            className: "secretLeft",
            children: /* @__PURE__ */ p19("label", {
              for: field.name,
              children: [
                field.label ? t17(field.label) : field.name,
                "\uFF1A"
              ]
            })
          }),
          /* @__PURE__ */ p19("div", {
            className: "secretRight",
            children: /* @__PURE__ */ p19("input", {
              required: field.required,
              placeholder: field.name,
              className: "input",
              value,
              onChange: (e18) => {
                onChange(e18.target.value);
              }
            })
          })
        ]
      });
    } else if (field.type === "password") {
      return /* @__PURE__ */ p19("div", {
        className: "secretInput",
        children: [
          /* @__PURE__ */ p19("div", {
            className: "secretLeft",
            children: /* @__PURE__ */ p19("label", {
              for: field.name,
              children: [
                field.label ? t17(field.label) : field.name,
                "\uFF1A"
              ]
            })
          }),
          /* @__PURE__ */ p19("div", {
            className: "secretRight",
            children: /* @__PURE__ */ p19("input", {
              required: field.required,
              placeholder: field.name,
              value,
              type: "password",
              className: "input",
              onChange: (e18) => {
                onChange(e18.target.value);
              }
            })
          })
        ]
      });
    } else {
      return null;
    }
  }

  // components/always_lang.tsx
  function AlwaysLang(props) {
    const { t: t17 } = useI18n();
    return /* @__PURE__ */ p19("details", {
      role: "list",
      className: "nav-right",
      children: [
        /* @__PURE__ */ p19("summary", {
          "aria-haspopup": "listbox",
          children: t17("edit")
        }),
        /* @__PURE__ */ p19("ul", {
          role: "listbox",
          className: "option-list",
          children: props.options.map((item) => {
            return /* @__PURE__ */ p19("li", {
              children: /* @__PURE__ */ p19("label", {
                children: [
                  /* @__PURE__ */ p19("input", {
                    type: "checkbox",
                    onChange: () => {
                      props.onSelectAlwaysLangs(item);
                    },
                    value: item.value,
                    checked: item.checked
                  }),
                  t17(`languages.${item.value}`)
                ]
              })
            });
          })
        })
      ]
    });
  }

  // components/always_urls.tsx
  function AlwaysLang2(props) {
    const { t: t17 } = useI18n();
    const onClickDot = (e18) => {
    };
    return /* @__PURE__ */ p19("div", {
      children: props.urls.map((item) => {
        return /* @__PURE__ */ p19("div", {
          className: "url-list",
          children: [
            /* @__PURE__ */ p19("div", {
              className: "url-left",
              children: [
                /* @__PURE__ */ p19("div", {
                  className: "url-name",
                  children: item
                }),
                /* @__PURE__ */ p19("div", {
                  className: "description url-name",
                  children: item
                })
              ]
            }),
            /* @__PURE__ */ p19("div", {
              className: "url-dot",
              onClick: onClickDot,
              children: "..."
            })
          ]
        });
      })
    });
  }

  // utils/languages.ts
  var getLanguages = () => {
    return languages.filter((lang) => {
      return lang !== "auto";
    });
  };

  // pages/general.tsx
  var languages2 = getLanguages();
  function General() {
    const { t: t17 } = useI18n();
    const [settings, setSettings, _isPersistent, error2] = useUserConfig();
    const [config, setConfig] = P2(null);
    const [ctx, setContext] = P2(null);
    const [isShowAlwaysLang, setIsShowAlwaysLang] = P2(
      false
    );
    const [serviceButtonText, setServiceButtonText] = P2("service");
    const [langsArr, setLangsArr] = P2([]);
    let translationServiceItems = [];
    if (ctx) {
      translationServiceItems = getTranslationServices(ctx);
    }
    let currentTranslationServiceConfig = null;
    let curentTranslationServiceItem = null;
    let alwaysTranslatedLangs = [];
    if (config && ctx) {
      const { translationService, translationServices, translationUrlPattern } = config;
      if (TranslationServices[translationService]) {
        curentTranslationServiceItem = formatTranslationService(
          translationService,
          ctx
        );
      }
      if (translationServices && translationServices[translationService]) {
        currentTranslationServiceConfig = translationServices[translationService] || {};
      } else {
        currentTranslationServiceConfig = {};
      }
      alwaysTranslatedLangs = languages2.map((lang) => {
        if (config.translationLanguagePattern.matches.includes(lang)) {
          return {
            checked: true,
            value: lang
          };
        } else {
          return {
            checked: false,
            value: lang
          };
        }
      });
    }
    j2(() => {
      getConfig().then((config2) => {
        setConfig(config2);
        log_default.debug(config2);
        setLangsArr(() => {
          return [...config2.translationLanguagePattern.matches];
        });
        if (config2.translationService) {
          setServiceButtonText(
            t17(`translationServices.${config2.translationService}`)
          );
        }
      });
    }, []);
    j2(() => {
      getConfig().then((config2) => {
        setConfig(config2);
      });
    }, [settings]);
    j2(() => {
      if (config) {
        getContext({
          url: "http://localhost",
          config
        }).then((ctx2) => {
          setContext(ctx2);
        });
      }
    }, [config]);
    const toggleAlwaysLang = (e18) => {
      e18.preventDefault();
      setIsShowAlwaysLang(!isShowAlwaysLang);
    };
    const selectService = (service) => {
      setSettings((state) => {
        return { ...state, translationService: service };
      });
    };
    const handleChangeValue = (value) => {
      setSettings(() => {
        return {
          ...value
        };
      });
    };
    const handleReset = (e18) => {
      e18.preventDefault();
      handleChangeValue(getEnvUserConfig());
    };
    const selectTargetLanguage = (lang) => {
      setSettings((state) => {
        return { ...state, targetLanguage: lang };
      });
    };
    const onSelectAlwaysLangs = (item) => {
      let currentMatches = [];
      if (settings.translationLanguagePattern && settings.translationLanguagePattern.matches) {
        currentMatches = settings.translationLanguagePattern.matches;
      }
      let newMatches = [...currentMatches];
      if (item.checked) {
        const newSet = new Set(newMatches);
        newSet.delete(item.value);
        newMatches = Array.from(newSet);
      } else {
        const newSet = new Set(newMatches);
        newSet.add(item.value);
        newMatches = Array.from(newSet);
      }
      setLangsArr(() => {
        return [...newMatches];
      });
      setSettings((state) => {
        return {
          ...state,
          translationLanguagePattern: {
            ...state.translationLanguagePattern,
            matches: newMatches
          }
        };
      });
    };
    if (!config) {
      return /* @__PURE__ */ p19("div", {
        children: "loading"
      });
    }
    return /* @__PURE__ */ p19("div", {
      children: [
        /* @__PURE__ */ p19("div", {
          className: "nav",
          children: [
            /* @__PURE__ */ p19("strong", {
              className: "text-xl",
              children: t17("general")
            }),
            /* @__PURE__ */ p19("a", {
              onClick: handleReset,
              children: t17("reset")
            })
          ]
        }),
        /* @__PURE__ */ p19("div", {
          className: "nav",
          children: [
            /* @__PURE__ */ p19(NavLeft, {
              title: t17("target"),
              description: t17("translate other languages into specific language")
            }),
            /* @__PURE__ */ p19("select", {
              className: "select",
              onChange: (e18) => {
                selectTargetLanguage(e18.target.value);
              },
              children: languages2.map((item) => {
                return /* @__PURE__ */ p19("option", {
                  value: item,
                  selected: item === config.targetLanguage,
                  children: t17(`languages.${item}`)
                });
              })
            })
          ]
        }),
        /* @__PURE__ */ p19("div", {
          className: "nav",
          children: [
            /* @__PURE__ */ p19(NavLeft, {
              title: t17("service"),
              description: t17("select translation service")
            }),
            /* @__PURE__ */ p19("select", {
              className: "select",
              onChange: (e18) => {
                selectService(e18.target.value);
              },
              children: translationServiceItems.map((item) => {
                return /* @__PURE__ */ p19("option", {
                  value: item.id,
                  selected: item.id === config.translationService,
                  children: `${t17("translationServices." + item.id)}`
                });
              })
            })
          ]
        }),
        currentTranslationServiceConfig && curentTranslationServiceItem && curentTranslationServiceItem.allProps.length > 0 && curentTranslationServiceItem.allProps.map((prop, index) => {
          return /* @__PURE__ */ p19(OptionField, {
            field: prop,
            value: currentTranslationServiceConfig[prop.name],
            onChange: (value) => {
              setSettings((state) => {
                const currentServices = state.translationServices || {};
                const currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
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
            }
          });
        }),
        /* @__PURE__ */ p19("div", {
          className: "nav",
          children: [
            /* @__PURE__ */ p19(NavLeft, {
              title: t17("always translated languages"),
              description: t17(
                "automatically translated to the target language when the language is the following"
              )
            }),
            /* @__PURE__ */ p19(AlwaysLang, {
              options: alwaysTranslatedLangs,
              onSelectAlwaysLangs
            })
          ]
        }),
        /* @__PURE__ */ p19("div", {
          className: "langs-list",
          children: langsArr.map((item) => {
            return /* @__PURE__ */ p19("div", {
              className: "lang-card",
              children: t17(`languages.${item}`)
            });
          })
        }),
        /* @__PURE__ */ p19("div", {
          className: "nav",
          children: [
            /* @__PURE__ */ p19(NavLeft, {
              title: t17("always translated sites"),
              description: t17(
                "automatically translated to the target language when the domain name is the following"
              )
            }),
            /* @__PURE__ */ p19("div", {
              className: "nav-right",
              children: /* @__PURE__ */ p19("a", {
                href: "#",
                role: "button",
                className: "secondary outline",
                children: t17("add")
              })
            })
          ]
        }),
        /* @__PURE__ */ p19(AlwaysLang2, {
          urls: config.translationUrlPattern.matches
        }),
        /* @__PURE__ */ p19("div", {
          className: "nav",
          children: [
            /* @__PURE__ */ p19(NavLeft, {
              title: t17("never translated sites"),
              description: t17(
                "it will not be translated when the site is the following domain name"
              )
            }),
            /* @__PURE__ */ p19("div", {
              className: "nav-right",
              children: /* @__PURE__ */ p19("a", {
                href: "#",
                role: "button",
                className: "secondary outline",
                children: t17("add")
              })
            })
          ]
        })
      ]
    });
  }

  // pages/advanced.tsx
  function Options() {
    return /* @__PURE__ */ p19("div", {
      children: [
        /* @__PURE__ */ p19("h1", {
          children: "Advanced"
        }),
        /* @__PURE__ */ p19("p", {
          children: "Coming soon..."
        })
      ]
    });
  }

  // pages/import_export.tsx
  function ImportExport() {
    const [settings, setSettings, _isPersistent, error2] = useUserConfig();
    const [config, setConfig] = P2(null);
    j2(() => {
      getConfig().then((config2) => {
        setConfig(config2);
      });
    }, []);
    const handleChangeValue = (value) => {
      setSettings(() => {
        return {
          ...value
        };
      });
    };
    const handleChange = (e18) => {
      try {
        const newSettings = JSON.parse(
          e18.target.value
        );
        handleChangeValue(newSettings);
      } catch (e19) {
      }
    };
    const handleSync = (e18) => {
      e18.preventDefault();
    };
    const handleReset = (e18) => {
      e18.preventDefault();
      handleChangeValue(getEnvUserConfig());
    };
    return /* @__PURE__ */ p19("div", {
      children: [
        /* @__PURE__ */ p19("h1", {
          children: "Import/Export"
        }),
        /* @__PURE__ */ p19("p", {
          children: error2
        }),
        /* @__PURE__ */ p19("textarea", {
          rows: 10,
          onChange: handleChange,
          value: JSON.stringify(settings, null, 2)
        }),
        /* @__PURE__ */ p19("a", {
          onClick: handleReset,
          children: "Reset"
        }),
        /* @__PURE__ */ p19("h3", {
          children: "Current Config"
        }),
        /* @__PURE__ */ p19("pre", {
          children: /* @__PURE__ */ p19("code", {
            children: JSON.stringify(config, null, 2)
          })
        })
      ]
    });
  }

  // browser/version.ts
  function getVersion() {
    return browserAPI.runtime.getManifest().version;
  }

  // hooks/use_buildin_config.ts
  var SETTINGS_KEY2 = "buildinConfig";
  var INITIAL_VALUE2 = {};
  var useBuildinConfig = createChromeStorageStateHookLocal(
    SETTINGS_KEY2,
    INITIAL_VALUE2
  );

  // utils/compare_version.ts
  function isAVersionGreaterOrEqualWithB(a19, b11) {
    const result = a19.localeCompare(b11, void 0, {
      numeric: true,
      sensitivity: "base"
    });
    return result >= 0;
  }

  // utils/click-multiple-times.ts
  function onClickMultipleTimes(requiredClicks, timeLimit = 2e3) {
    return (cb) => {
      let timer;
      let clicked = 0;
      return (e18) => {
        if (++clicked == requiredClicks) {
          cb(e18);
          clicked = 0;
        }
        clearTimeout(timer);
        timer = setTimeout(
          () => clicked = 0,
          timeLimit
        );
      };
    };
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

  // services/cache.ts
  var dbNames = [];
  async function openIndexedDB(dbName, _storageName) {
    return await new Promise((resolve, reject) => {
      const name = dbName;
      const version = 1;
      const request3 = indexedDB.open(name, version);
      request3.onsuccess = (_event) => {
        resolve(request3.result);
      };
      request3.onerror = (event) => {
        console.error(
          "onerror: Error opening the database, switching to non-database mode",
          event
        );
        reject();
      };
      request3.onupgradeneeded = (_event) => {
        const db = request3.result;
        const storageName = _storageName ? _storageName : "cache";
        db.createObjectStore(storageName, {
          keyPath: "key"
        });
      };
    });
  }
  async function getAllDBNames() {
    if (dbNames && dbNames.length > 0) {
      return dbNames;
    }
    const db = await openIndexedDB("cacheList", "cache_list");
    dbNames = await new Promise((resolve) => {
      const storageName = "cache_list";
      const objectStore = db.transaction([storageName], "readonly").objectStore(storageName);
      const request3 = objectStore.getAllKeys();
      request3.onsuccess = (_event) => {
        resolve(request3.result);
      };
      request3.onerror = (event) => {
        console.error(event);
        resolve([]);
      };
    });
    return dbNames;
  }
  async function calculateSize() {
    try {
      const promises = [];
      const dbnames = await getAllDBNames();
      dbnames.forEach((dbName) => {
        promises.push(getDatabaseSize(dbName));
      });
      const results = await Promise.all(promises);
      return humanReadableSize(
        results.reduce((total, size) => total + size, 0)
      );
    } catch (e18) {
      console.error(e18);
      return humanReadableSize(0);
    }
  }
  async function getDatabaseSize(dbName) {
    const db = await openIndexedDB(dbName);
    const tableNames = [...db.objectStoreNames];
    const tableSizeGetters = tableNames.reduce(
      (acc, tableName) => {
        const tmp = getTableSize(db, tableName);
        acc.push(tmp);
        return acc;
      },
      []
    );
    const sizes = await Promise.all(tableSizeGetters);
    const total = sizes.reduce((acc, val) => acc + val, 0);
    return total;
  }
  async function getTableSize(db, storageName) {
    return await new Promise((resolve, reject) => {
      if (db == null)
        return reject();
      let size = 0;
      const transaction = db.transaction([storageName]).objectStore(storageName).openCursor();
      transaction.onsuccess = (_event) => {
        const cursor = transaction.result;
        if (cursor) {
          const storedObject = cursor.value;
          const json = JSON.stringify(storedObject);
          size += json.length;
          cursor.continue();
        } else {
          resolve(size);
        }
      };
      transaction.onerror = (err) => reject("error in " + storageName + ": " + err);
    });
  }
  async function deleteAll() {
    try {
      const dbnames = await getAllDBNames();
      const promises = dbnames.map((dbName) => {
        return deleteDatabase(dbName);
      });
      const results = await Promise.all(promises);
      if (results.every((ok) => ok)) {
        return true;
      }
      return false;
    } catch (e18) {
      console.error("deleteAll error", e18);
      return false;
    }
  }
  async function deleteDatabase(dbName) {
    return await new Promise((resolve) => {
      const DBDeleteRequest = indexedDB.deleteDatabase(dbName);
      DBDeleteRequest.onsuccess = () => {
        resolve(true);
      };
      DBDeleteRequest.onerror = (err) => {
        resolve(false);
      };
    });
  }

  // browser/cache_manager.ts
  async function cleanCache() {
    const keys = ["bingGlobalConfig", "baiduGlobalConfig"];
    for (const key of keys) {
      await browserAPI.storage.local.remove(key);
    }
    if (!isMonkey()) {
      await deleteAll();
    }
  }
  function getCacheSize() {
    if (!isMonkey()) {
      return calculateSize();
    } else {
      return Promise.resolve("0 B");
    }
  }

  // pages/about.tsx
  var AlreadyLatest = ({ date }) => {
    return /* @__PURE__ */ p19("p", {
      class: "text-sm",
      children: [
        "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0: ",
        new Date(date).toLocaleString()
      ]
    });
  };
  var SyncSuccess = ({ date }) => {
    return /* @__PURE__ */ p19("p", {
      class: "text-sm",
      children: [
        "\u6210\u529F\u540C\u6B65\u5B98\u65B9\u6700\u65B0\u89C4\u5219: ",
        new Date(date).toLocaleString()
      ]
    });
  };
  var Checking = () => {
    return /* @__PURE__ */ p19("p", {
      class: "text-sm",
      "aria-busy": true,
      children: "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0..."
    });
  };
  var Syncing = () => {
    return /* @__PURE__ */ p19("p", {
      class: "text-sm",
      children: "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219..."
    });
  };
  var LocalVersionIsTooOld = ({ minVersion }) => {
    return /* @__PURE__ */ p19("p", {
      class: "text-sm",
      children: [
        "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 ",
        minVersion,
        " \u6216\u4E4B\u540E\u5230\u7248\u672C\u540E\u518D\u5C1D\u8BD5\u540C\u6B65"
      ]
    });
  };
  var NewVersion = ({ latestVersion }) => {
    return /* @__PURE__ */ p19("p", {
      class: "text-sm",
      children: [
        "\u53D1\u73B0\u65B0\u7248\u672C:",
        " ",
        /* @__PURE__ */ p19("a", {
          href: "https://github.com/immersive-translate/next-immersive-translate/releases",
          children: latestVersion
        })
      ]
    });
  };
  var CurrentLatestVersion = () => {
    return /* @__PURE__ */ p19("p", {
      class: "text-sm",
      children: "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002"
    });
  };
  var SyncFailed = ({ message, handleSyncing, date }) => {
    return /* @__PURE__ */ p19("p", {
      class: "text-sm",
      children: [
        "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25 ",
        /* @__PURE__ */ p19("a", {
          onClick: handleSyncing,
          children: "\u70B9\u6B64\u91CD\u8BD5"
        }),
        /* @__PURE__ */ p19("br", {}),
        "\u5931\u8D25\u539F\u56E0\uFF1A",
        message,
        /* @__PURE__ */ p19("br", {}),
        "\u5F53\u524D\u89C4\u5219\u7248\u672C\uFF1A",
        date
      ]
    });
  };
  function About() {
    const [localBuildinConfigUpdatedAt, setLocalBuildinConfigUpdatedAt] = P2(null);
    const [cacheSize, setCacheSize] = P2("\u8BA1\u7B97\u4E2D...");
    const [remoteConfig, setRemoteConfig] = P2(null);
    const [_2, setStorageBuildinConfig] = useBuildinConfig();
    const [isNeedUpdate, setIsNeedUpdate] = P2(null);
    const [syncErrorMessage, setSyncErrorMessage] = P2("");
    const [isSyncSuccess, setIsSyncSuccess] = P2(false);
    const [isInvalidLocalVersion, setIsInvalidLocalVersion] = P2(
      false
    );
    const [config, setConfig] = P2(null);
    const [isLatestVersion, setIsLatestVersion] = P2(null);
    const [settings, setSettings, _isPersistent, _error] = useUserConfig();
    const { t: t17 } = useI18n();
    const [isCleaning, setIsCleaning] = P2(false);
    const version = getVersion();
    const handleSyncing = async () => {
      setSyncErrorMessage("");
      let finalRemoteConfig = remoteConfig;
      if (remoteConfig === null) {
        try {
          const response = await request({ url: buildinConfigSyncUrl });
          if (response) {
            setRemoteConfig(response);
            finalRemoteConfig = response;
            setIsSyncSuccess(true);
          } else {
            setSyncErrorMessage("\u672A\u77E5\u9519\u8BEF");
            setIsNeedUpdate(null);
          }
        } catch (e18) {
          setIsNeedUpdate(null);
          setSyncErrorMessage(e18.message);
          return;
        }
      }
      if (finalRemoteConfig !== null) {
        setStorageBuildinConfig(finalRemoteConfig);
        setIsNeedUpdate(false);
        setLocalBuildinConfigUpdatedAt(
          finalRemoteConfig.buildinConfigUpdatedAt
        );
      } else {
        setSyncErrorMessage("\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219");
        setIsNeedUpdate(null);
      }
    };
    j2(() => {
      getConfig().then((localConfig) => {
        const localConfigUpdatedAtIsoString = localConfig.buildinConfigUpdatedAt;
        setConfig(localConfig);
        const localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString);
        setLocalBuildinConfigUpdatedAt(localConfigUpdatedAtIsoString);
        request({
          url: buildinConfigSyncUrl
        }).then((data) => {
          const remoteMinVersion = data.minVersion;
          const localVersion = version;
          setRemoteConfig(data);
          const remoteVersion = data.latestVersion;
          if (remoteVersion) {
            if (!isAVersionGreaterOrEqualWithB(localVersion, remoteVersion)) {
              setIsLatestVersion(false);
            } else {
              setIsLatestVersion(true);
            }
          }
          if (isAVersionGreaterOrEqualWithB(localVersion, remoteMinVersion)) {
            const latestIsoTime = data.buildinConfigUpdatedAt;
            const latest = new Date(latestIsoTime);
            if (latest > localConfigUpdatedAt) {
              setIsNeedUpdate(true);
              handleSyncing();
            } else {
              setIsNeedUpdate(false);
            }
          } else {
            setIsInvalidLocalVersion(true);
            setIsNeedUpdate(null);
          }
        }).catch((e18) => {
          setIsNeedUpdate(null);
          setSyncErrorMessage(e18.message);
        });
      });
      getCacheSize().then((size) => {
        setCacheSize(size);
      });
    }, []);
    j2(() => {
      getConfig().then((config2) => {
        setConfig(config2);
      });
    }, [settings, localBuildinConfigUpdatedAt]);
    const handleToggleAlpha = (_e3) => {
      setSettings((state) => {
        const action = !state.alpha;
        if (action) {
          success("\u5DF2\u5F00\u542FAlpha\u529F\u80FD");
        } else {
          success("\u5DF2\u5173\u95EDAlpha\u529F\u80FD");
        }
        return {
          ...state,
          alpha: action
        };
      });
    };
    const handleCleanCache = (e18) => {
      e18.preventDefault();
      e18.stopPropagation();
      setIsCleaning(true);
      cleanCache().then(() => {
        setIsCleaning(false);
        success("\u6E05\u7406\u6210\u529F");
        setCacheSize("0 B");
      }).catch((e19) => {
        setIsCleaning(false);
        error(e19.message);
      });
    };
    const handleCacheOption = (checked) => {
      setSettings((state) => {
        return {
          ...state,
          cache: checked
        };
      });
    };
    if (!config) {
      return null;
    }
    return /* @__PURE__ */ p19("div", {
      class: "text-sm",
      children: [
        /* @__PURE__ */ p19("h1", {
          onClick: onClickMultipleTimes(7)(handleToggleAlpha),
          children: "About"
        }),
        /* @__PURE__ */ p19("p", {
          class: "mb-2",
          children: [
            "V",
            version
          ]
        }),
        isLatestVersion === false && /* @__PURE__ */ p19(NewVersion, {
          latestVersion: remoteConfig?.latestVersion
        }),
        isLatestVersion === true && /* @__PURE__ */ p19(CurrentLatestVersion, {}),
        /* @__PURE__ */ p19("fieldset", {
          children: /* @__PURE__ */ p19("label", {
            for: "switch",
            children: [
              /* @__PURE__ */ p19("input", {
                type: "checkbox",
                id: "cache",
                name: "cache",
                role: "switch",
                onChange: () => {
                  handleCacheOption(!config.cache);
                },
                checked: config.cache
              }),
              t17("allowCacheTranslations")
            ]
          })
        }),
        cacheSize && /* @__PURE__ */ p19("p", {
          class: "text-sm",
          children: [
            "\u7F13\u5B58\u5927\u5C0F\uFF1A",
            cacheSize,
            " \xA0 ",
            isCleaning ? /* @__PURE__ */ p19("span", {
              children: "\u6E05\u7406\u4E2D..."
            }) : /* @__PURE__ */ p19("a", {
              class: "text-sm",
              href: "#",
              onClick: handleCleanCache,
              children: "\u6E05\u9664\u7F13\u5B58"
            })
          ]
        }),
        syncErrorMessage ? /* @__PURE__ */ p19(SyncFailed, {
          handleSyncing,
          message: syncErrorMessage,
          date: localBuildinConfigUpdatedAt || ""
        }) : isInvalidLocalVersion ? /* @__PURE__ */ p19(LocalVersionIsTooOld, {
          minVersion: remoteConfig.minVersion
        }) : isNeedUpdate === null ? /* @__PURE__ */ p19(Checking, {}) : isNeedUpdate === true ? /* @__PURE__ */ p19(Syncing, {}) : isSyncSuccess ? /* @__PURE__ */ p19(SyncSuccess, {
          date: localBuildinConfigUpdatedAt
        }) : /* @__PURE__ */ p19(AlreadyLatest, {
          date: localBuildinConfigUpdatedAt
        })
      ]
    });
  }

  // twind_config.ts
  var twind_config_default = Rt({
    presets: [y6(), l17()]
  });

  // static/locales/zh-CN.json
  var zh_CN_default = {
    "general": "\u57FA\u672C\u8BBE\u7F6E",
    "reset": "\u91CD\u7F6E",
    "close": "\u5173\u95ED",
    "homepage": "\u4E3B\u9875",
    "options": "\u9009\u9879",
    "about": "\u5173\u4E8E",
    "service": "\u7FFB\u8BD1\u670D\u52A1",
    "translationEngine": "\u5F15\u64CE\u9009\u9879",
    "target": "\u76EE\u6807\u8BED\u8A00",
    "add": "\u6DFB\u52A0",
    "edit": "\u7F16\u8F91",
    "translate other languages into specific language": "\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00",
    "select translation service": "\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u4F5C\u4E3A\u7FFB\u8BD1\u670D\u52A1",
    "language": "\u8BED\u8A00",
    "show-original": "\u663E\u793A\u539F\u6587",
    "translate": "\u7FFB\u8BD1",
    "Translated": "\u5DF2\u7FFB\u8BD1",
    "Translating": "\u7FFB\u8BD1\u4E2D",
    "Error": "\u9519\u8BEF",
    "allowCacheTranslations": "\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09",
    "translationServices": {
      "tencent": "\u817E\u8BAF\u7FFB\u8BD1\u541B",
      "google": "\u8C37\u6B4C\u7FFB\u8BD1",
      "bai": "\u767E\u5EA6(Alpha)",
      "baidu": "\u767E\u5EA6\u7FFB\u8BD1",
      "aliyun": "\u963F\u91CC\u4E91\u7FFB\u8BD1",
      "volc": "\u706B\u5C71\u7FFB\u8BD1",
      "bing": "\u5FC5\u5E94\u7FFB\u8BD1",
      "deepl": "Deepl",
      "wechat": "\u5FAE\u4FE1\u7FFB\u8BD1",
      "azure": "\u5FAE\u8F6F\u7FFB\u8BD1",
      "ibm": "IBM Watson",
      "aws": "\u4E9A\u9A6C\u900A\u7FFB\u8BD1",
      "mock": "\u6A21\u62DF\u7FFB\u8BD1",
      "caiyun": "\u5F69\u4E91\u5C0F\u8BD1",
      "openl": "OpenL",
      "youdao": "\u6709\u9053\u7FFB\u8BD1",
      "transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
      "d": "Deepl(Alpha)"
    },
    "translate title": "\u7FFB\u8BD1\u9875\u9762\u6807\u9898",
    "always translated languages": "\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",
    "automatically translated to the target language when the language is the following": "\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
    "always translated sites": "\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740",
    "automatically translated to the target language when the domain name is the following": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
    "never translated sites": "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740",
    "it will not be translated when the site is the following domain name": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1",
    "the third-party translation service needs to fill in the key before it is available, please refer to the 'Key Application and Configuration Tutorial' for details": "\u7B2C\u4E09\u65B9\u7FFB\u8BD1\u670D\u52A1\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
    "confirm": "\u4FDD\u5B58",
    "languages": {
      "af": "\u5357\u975E\u8377\u5170\u8BED",
      "am": "\u963F\u59C6\u54C8\u62C9\u8BED",
      "ar": "\u963F\u62C9\u4F2F\u8BED",
      "auto": "\u68C0\u6D4B\u8BED\u8A00",
      "az": "\u963F\u585E\u62DC\u7586\u8BED",
      "be": "\u767D\u4FC4\u7F57\u65AF\u8BED",
      "bg": "\u4FDD\u52A0\u5229\u4E9A\u8BED",
      "bn": "\u5B5F\u52A0\u62C9\u8BED",
      "bs": "\u6CE2\u65AF\u5C3C\u4E9A\u8BED",
      "ca": "\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED",
      "ceb": "\u5BBF\u52A1\u8BED",
      "co": "\u79D1\u897F\u5609\u8BED",
      "cs": "\u6377\u514B\u8BED",
      "cy": "\u5A01\u5C14\u58EB\u8BED",
      "da": "\u4E39\u9EA6\u8BED",
      "de": "\u5FB7\u8BED",
      "el": "\u5E0C\u814A\u8BED",
      "en": "\u82F1\u8BED",
      "eo": "\u4E16\u754C\u8BED",
      "es": "\u897F\u73ED\u7259\u8BED",
      "et": "\u7231\u6C99\u5C3C\u4E9A\u8BED",
      "eu": "\u5DF4\u65AF\u514B\u8BED",
      "fa": "\u6CE2\u65AF\u8BED",
      "fi": "\u82AC\u5170\u8BED",
      "fil": "\u83F2\u5F8B\u5BBE\u8BED",
      "fj": "\u6590\u6D4E\u8BED",
      "fr": "\u6CD5\u8BED",
      "fy": "\u5F17\u91CC\u65AF\u5170\u8BED",
      "ga": "\u7231\u5C14\u5170\u8BED",
      "gd": "\u82CF\u683C\u5170\u76D6\u5C14\u8BED",
      "gl": "\u52A0\u5229\u897F\u4E9A\u8BED",
      "gu": "\u53E4\u5409\u62C9\u7279\u8BED",
      "ha": "\u8C6A\u8428\u8BED",
      "haw": "\u590F\u5A01\u5937\u8BED",
      "he": "\u5E0C\u4F2F\u6765\u8BED",
      "hi": "\u5370\u5730\u8BED",
      "hmn": "\u82D7\u8BED",
      "hr": "\u514B\u7F57\u5730\u4E9A\u8BED",
      "ht": "\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED",
      "hu": "\u5308\u7259\u5229\u8BED",
      "hy": "\u4E9A\u7F8E\u5C3C\u4E9A\u8BED",
      "id": "\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED",
      "ig": "\u4F0A\u535A\u8BED",
      "is": "\u51B0\u5C9B\u8BED",
      "it": "\u610F\u5927\u5229\u8BED",
      "ja": "\u65E5\u8BED",
      "jw": "\u722A\u54C7\u8BED",
      "ka": "\u683C\u9C81\u5409\u4E9A\u8BED",
      "kk": "\u54C8\u8428\u514B\u8BED",
      "km": "\u9AD8\u68C9\u8BED",
      "kn": "\u5361\u7EB3\u8FBE\u8BED",
      "ko": "\u97E9\u8BED",
      "ku": "\u5E93\u5C14\u5FB7\u8BED",
      "ky": "\u5409\u5C14\u5409\u65AF\u8BED",
      "la": "\u62C9\u4E01\u8BED",
      "lb": "\u5362\u68EE\u5821\u8BED",
      "lo": "\u8001\u631D\u8BED",
      "lt": "\u7ACB\u9676\u5B9B\u8BED",
      "lv": "\u62C9\u8131\u7EF4\u4E9A\u8BED",
      "mg": "\u9A6C\u5C14\u52A0\u4EC0\u8BED",
      "mi": "\u6BDB\u5229\u8BED",
      "mk": "\u9A6C\u5176\u987F\u8BED",
      "ml": "\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED",
      "mn": "\u8499\u53E4\u8BED",
      "mr": "\u9A6C\u62C9\u5730\u8BED",
      "ms": "\u9A6C\u6765\u8BED",
      "mt": "\u9A6C\u8033\u4ED6\u8BED",
      "mww": "\u767D\u82D7\u6587",
      "my": "\u7F05\u7538\u8BED",
      "ne": "\u5C3C\u6CCA\u5C14\u8BED",
      "nl": "\u8377\u5170\u8BED",
      "no": "\u632A\u5A01\u8BED",
      "ny": "\u5C3C\u6768\u624E\u8BED\uFF08\u9F50\u5207\u74E6\u8BED\uFF09",
      "otq": "\u514B\u96F7\u5854\u7F57\u5965\u6258\u7C73\u8BED",
      "pa": "\u65C1\u906E\u666E\u8BED",
      "pl": "\u6CE2\u5170\u8BED",
      "ps": "\u666E\u4EC0\u56FE\u8BED",
      "pt": "\u8461\u8404\u7259\u8BED\uFF08\u8461\u8404\u7259\u3001\u5DF4\u897F\uFF09",
      "ro": "\u7F57\u9A6C\u5C3C\u4E9A\u8BED",
      "ru": "\u4FC4\u8BED",
      "sd": "\u4FE1\u5FB7\u8BED",
      "si": "\u50E7\u4F3D\u7F57\u8BED",
      "sk": "\u65AF\u6D1B\u4F10\u514B\u8BED",
      "sl": "\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED",
      "sm": "\u8428\u6469\u4E9A\u8BED",
      "sn": "\u4FEE\u7EB3\u8BED",
      "so": "\u7D22\u9A6C\u91CC\u8BED",
      "sq": "\u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED",
      "sr": "\u585E\u5C14\u7EF4\u4E9A\u8BED",
      "sr-Cyrl": "\u585E\u5C14\u7EF4\u4E9A\u8BED(\u897F\u91CC\u5C14\u6587)",
      "sr-Latn": "\u585E\u5C14\u7EF4\u4E9A\u8BED(\u62C9\u4E01\u6587)",
      "st": "\u585E\u7D22\u6258\u8BED",
      "su": "\u5DFD\u4ED6\u8BED",
      "sv": "\u745E\u5178\u8BED",
      "sw": "\u65AF\u74E6\u5E0C\u91CC\u8BED",
      "ta": "\u6CF0\u7C73\u5C14\u8BED",
      "te": "\u6CF0\u5362\u56FA\u8BED",
      "tg": "\u5854\u5409\u514B\u8BED",
      "th": "\u6CF0\u8BED",
      "tlh": "\u514B\u6797\u8D21\u8BED",
      "tlh-Qaak": "\u514B\u6797\u8D21\u8BED(piqaD)",
      "to": "\u6C64\u52A0\u8BED",
      "tr": "\u571F\u8033\u5176\u8BED",
      "ty": "\u5854\u5E0C\u63D0\u8BED",
      "ug": "\u7EF4\u543E\u5C14\u8BED",
      "uk": "\u4E4C\u514B\u5170\u8BED",
      "ur": "\u4E4C\u5C14\u90FD\u8BED",
      "uz": "\u4E4C\u5179\u522B\u514B\u8BED",
      "vi": "\u8D8A\u5357\u8BED",
      "wyw": "\u6587\u8A00\u6587",
      "xh": "\u73ED\u56FE\u8BED",
      "yi": "\u610F\u7B2C\u7EEA\u8BED",
      "yo": "\u7EA6\u9C81\u5DF4\u8BED",
      "yua": "\u5C24\u5361\u5766\u739B\u96C5\u8BED",
      "yue": "\u7CA4\u8BED\uFF08\u7E41\u4F53\uFF09",
      "zh-CN": "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
      "zh-TW": "\u4E2D\u6587\uFF08\u7E41\u4F53\uFF09",
      "zu": "\u7956\u9C81\u8BED"
    }
  };

  // locales.ts
  var translations = {
    "zh-CN": zh_CN_default
  };
  var locales_default = translations;

  // pages/options.tsx
  function main() {
    const mountPoint = document.getElementById("mount");
    if (mountPoint) {
      (async () => {
        $e(twind_config_default);
        const config = await getConfig();
        if (config.debug) {
          log_default.setLevel("debug");
        }
        re(
          /* @__PURE__ */ p19(TranslateProvider, {
            lang: config.interfaceLanguage,
            fallbackLang: "zh-CN",
            translations: locales_default,
            children: /* @__PURE__ */ p19(App, {})
          }),
          mountPoint
        );
      })();
    }
  }
  function App() {
    const route = useRoute();
    const { t: t17 } = useI18n();
    const navs = [
      {
        name: t17("general"),
        props: {
          href: "#general",
          className: "secondary"
        }
      },
      {
        name: "Advanced",
        props: {
          href: "#advanced",
          className: "secondary"
        }
      },
      {
        name: "Import/Export",
        props: {
          href: "#import_export",
          className: "secondary"
        }
      },
      {
        name: t17("about"),
        props: {
          href: "#about",
          className: "secondary"
        }
      }
    ];
    navs.forEach((nav) => {
      if (route === nav.props.href) {
        nav.props.className = "primary";
        nav.props["aria-current"] = "page";
      }
    });
    return /* @__PURE__ */ p19(L, {
      children: [
        /* @__PURE__ */ p19("nav", {
          class: "container-fluid",
          children: [
            /* @__PURE__ */ p19("ul", {
              children: /* @__PURE__ */ p19("li", {
                children: /* @__PURE__ */ p19("strong", {
                  children: "Next Immersive Transalte"
                })
              })
            }),
            /* @__PURE__ */ p19("ul", {
              children: [
                /* @__PURE__ */ p19("li", {
                  children: /* @__PURE__ */ p19("a", {
                    href: "#",
                    children: "Link"
                  })
                }),
                /* @__PURE__ */ p19("li", {
                  children: /* @__PURE__ */ p19("a", {
                    href: "#",
                    children: "Link"
                  })
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ p19("main", {
          class: "container-fluid",
          children: [
            /* @__PURE__ */ p19("aside", {
              children: /* @__PURE__ */ p19("nav", {
                children: /* @__PURE__ */ p19("ul", {
                  children: navs.map((nav, index) => /* @__PURE__ */ p19("li", {
                    children: /* @__PURE__ */ p19("a", {
                      ...nav.props,
                      children: nav.name
                    })
                  }, `nav-${index}`))
                })
              })
            }),
            /* @__PURE__ */ p19("div", {
              role: "main",
              children: /* @__PURE__ */ p19(Switch, {
                value: route,
                defaultCase: /* @__PURE__ */ p19(General, {}),
                cases: {
                  "#general": /* @__PURE__ */ p19(General, {}),
                  "#advanced": /* @__PURE__ */ p19(Options, {}),
                  "#import_export": /* @__PURE__ */ p19(ImportExport, {}),
                  "#about": /* @__PURE__ */ p19(About, {})
                }
              })
            })
          ]
        })
      ]
    });
  }

  // userscript/options_entry.ts
  var isReady = false;
  function initPage() {
    if (isReady) {
      return;
    }
    const optionsMetaElement = document.querySelector(
      "meta[name=immersive-translate-options]"
    );
    if (!optionsMetaElement) {
      throw new Error("Options meta element not found");
    }
    const statusElement = document.getElementById("immersive-translate-status");
    if (!statusElement) {
      throw new Error("Status element not found");
    }
    const pageReadyInputElement = document.getElementById(
      "immersive-translate-page-ready"
    );
    if (!pageReadyInputElement) {
      throw new Error("Page ready input element not found");
    }
    function onPageReadyChange(event) {
      const value = event.target.value;
      if (value === "true") {
        isReady = true;
        pageReadyInputElement.removeEventListener("change", onPageReadyChange);
        main();
      } else {
        statusElement.innerText = "Page Status: " + value;
      }
    }
    pageReadyInputElement.addEventListener("change", onPageReadyChange);
    setTimeout(() => {
      if (!isReady) {
        statusElement.innerHTML = `Can not detect <a href="https://immersive-translate.owenyoung.com/">Immersive Translate</a> Extension. Please install it first.`;
      }
    }, 5e3);
  }
  initPage();
})();
/*! Bundled license information:

@extend-chrome/messages/lib/index.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
