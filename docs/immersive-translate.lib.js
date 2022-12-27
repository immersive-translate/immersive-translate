(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // <define:process.env>
  var define_process_env_default = { BUILD_TIME: "1970-01-01T00:00:00.000Z", TRANSLATE_INJECTED_CSS: ".immersive-translate-target-wrapper {\n  /* position: relative; */\n}\n.immersive-translate-target-translation-block-wrapper {\n  /* position: relative; */\n  /* top: 16px; */\n  white-space: pre-wrap !important;\n}\n\n.immersive-translate-target-translation-inline-wrapper {\n  white-space: pre-wrap !important;\n}\n.immersive-translate-target-translation-theme-underline {\n  border-bottom: 1px solid #72ece9 !important;\n}\n\n.immersive-translate-text {\n  font-size: 15px !important;\n}\n\n.immersive-translate-error {\n  color: red;\n}\n.immersive-translate-clickable-button {\n  align-items: normal;\n  background-color: rgba(0, 0, 0, 0);\n  border-color: rgb(0, 0, 238);\n  border-style: none;\n  box-sizing: content-box;\n  color: rgb(0, 0, 238);\n  cursor: pointer;\n  display: inline;\n  font: inherit;\n  height: auto;\n  padding: 0;\n  perspective-origin: 0 0;\n  text-align: start;\n  transform-origin: 0 0;\n  width: auto;\n  -moz-appearance: none;\n  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */\n  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */\n}\n.immersive-translate-loading {\n  margin-left: 6px;\n  top: 3px;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  border: 2px rgba(0, 0, 0, 0.25) solid;\n  border-top: 2px rgba(0, 0, 0, 1) solid;\n  border-radius: 50%;\n  -webkit-animation: spCircRot 0.6s infinite linear;\n  animation: immersive-translate-loading-animation 0.6s infinite linear;\n  position: relative;\n}\n@-webkit-keyframes immersive-translate-loading-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@keyframes immersive-translate-loading-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n", TRANSLATE_PICO_CSS: `@charset "UTF-8";
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
`, TRANSLATE_COMMON_CSS: "li.select-link.select-link:hover > ul {\n  display: none;\n}\nli.select-link.select-link > ul {\n  display: none;\n}\nli.select-link.select-link a:focus ~ ul {\n  display: none;\n}\n\nli.select-link.select-link a:active ~ ul {\n  display: none;\n}\nli.select-link-active.select-link-active > ul {\n  display: flex;\n}\nli.select-link-active.select-link-active:hover > ul {\n  display: flex;\n}\n\nli.select-link-active.select-link-active a:focus ~ ul {\n  display: flex;\n}\n\nli.select-link-active.select-link-active a:active ~ ul {\n  display: flex;\n}\nul.select-link-ul.select-link-ul {\n  right: 0px;\n  left: auto;\n}\n", TRANSLATE_POPUP_CSS: "#mount {\n  min-width: 250px;\n  height: auto;\n}\n\n.pt-4 {\n  padding-top: 24px;\n}\n.pl-5 {\n  padding-left: 48px;\n}\n.pl-2 {\n  padding-left: 8px;\n}\n.pt-2 {\n  padding-top: 8px;\n}\n\n.pb-2 {\n  padding-bottom: 8px;\n}\n\n.pr-5 {\n  padding-right: 48px;\n}\n.text-sm {\n  font-size: 14px;\n}\n\n.flex {\n  display: flex;\n}\n.justify-between {\n  justify-content: space-between;\n}\n\n.mb-2 {\n  margin-bottom: 8px;\n}\n.inline-block {\n  display: inline-block;\n}\n\n.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.mt-2 {\n  margin-top: 8px;\n}\n.pl-3 {\n  padding-left: 12px;\n}\n.pr-3 {\n  padding-right: 12px;\n}\n.p-3 {\n  padding: 12px;\n}\n.mt-4 {\n  margin-top: 24px;\n}\n.py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.left-auto {\n  left: auto !important;\n}\n\n.max-h-28 {\n  max-height: 112px;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n", TRANSLATE_POPUP_HTML: '<style>\n  html {\n    font-size: 17px;\n  }\n  .immersive-translate-popup-container {\n    position: fixed;\n    top: 100px;\n    right: 8px;\n    padding: 0;\n    z-index: 999999;\n  }\n  .immersive-translate-popup-btn {\n    background-color: #fff;\n    font-size: 18px;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n  }\n  #mount#mount {\n    display: none;\n    min-width: 250px;\n    height: auto;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    --font-size: 17px;\n    font-size: 17px;\n  }\n</style>\n\n<div\n  id="immersive-translate-popup-container"\n  class="immersive-translate-popup-container"\n>\n  <button\n    id="immersive-translate-popup-btn"\n    class="immersive-translate-popup-btn"\n  >\n    \u8BD1\n  </button>\n  <div class="immersive-translate-popup-mount" id="mount"></div>\n</div>\n', TRANSLATE_POPUP_JS: 'const immersivePopupRoot = document.getElementById("immersive-translate-popup");\nconst shadowRoot = immersivePopupRoot.shadowRoot;\n\nconst root = shadowRoot.getElementById("immersive-translate-popup-container");\n\nconst btn = root.querySelector("#immersive-translate-popup-btn");\n\n// btn.addEventListener("click", handleButtonClick);\n\nconst mountContainer = root.querySelector("#mount");\n\nfunction showButton() {\n  // hidden mount container, and show btn\n  mountContainer.style.display = "none";\n  btn.style.display = "block";\n}\n\ndocument.addEventListener("click", (e) => {\n  if (e.target.id !== "immersive-translate-popup") {\n    showButton();\n  }\n});\n', MOCK: "0", DEBUG: "0", TRANSLATE_USERSCRIPT: "1" };

  // browser/userscript_polyfill.ts
  var storageApi = {
    get: async (key) => {
      let allKeys = [];
      if (typeof key === "string") {
        allKeys = [key];
      } else if (Array.isArray(key)) {
        allKeys = key;
      } else {
        allKeys = Object.keys(key);
      }
      const result = {};
      for (const key2 of allKeys) {
        result[key2] = await GM.getValue(key2);
      }
      return result;
    },
    set: async (obj) => {
      for (const key in obj) {
        await GM.setValue(key, obj[key]);
      }
    }
  };
  function getManifest() {
    return GM.info.script;
  }
  var browser = {
    storage: {
      local: storageApi,
      sync: storageApi
    },
    runtime: {
      getManifest,
      lastError: null
    }
  };
  globalThis.browser = browser;

  // browser/userscript_fetch_polifill.js
  (function() {
    "use strict";
    var Promise2 = window.Bluebird || window.Promise;
    if (self.GM_fetch) {
      return;
    }
    function normalizeName(name) {
      if (typeof name !== "string") {
        name = name.toString();
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError("Invalid character in header field name");
      }
      return name.toLowerCase();
    }
    function normalizeValue(value) {
      if (typeof value !== "string") {
        value = value.toString();
      }
      return value;
    }
    function Headers(headers3) {
      this.map = {};
      if (headers3 instanceof Headers) {
        headers3.forEach(function(value, name) {
          this.append(name, value);
        }, this);
      } else if (headers3) {
        Object.getOwnPropertyNames(headers3).forEach(function(name) {
          this.append(name, headers3[name]);
        }, this);
      }
    }
    Headers.prototype.append = function(name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var list = this.map[name];
      if (!list) {
        list = [];
        this.map[name] = list;
      }
      list.push(value);
    };
    Headers.prototype["delete"] = function(name) {
      delete this.map[normalizeName(name)];
    };
    Headers.prototype.get = function(name) {
      var values = this.map[normalizeName(name)];
      return values ? values[0] : null;
    };
    Headers.prototype.getAll = function(name) {
      return this.map[normalizeName(name)] || [];
    };
    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers.prototype.set = function(name, value) {
      this.map[normalizeName(name)] = [normalizeValue(value)];
    };
    Headers.prototype.forEach = function(callback, thisArg) {
      Object.getOwnPropertyNames(this.map).forEach(function(name) {
        this.map[name].forEach(function(value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    };
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise2.reject(new TypeError("Already read"));
      }
      body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
      return new Promise2(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      });
    }
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return fileReaderReady(reader);
    }
    function readBlobAsText(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      return fileReaderReady(reader);
    }
    var support = {
      blob: "FileReader" in self && "Blob" in self && function() {
        try {
          new Blob();
          return true;
        } catch (e19) {
          return false;
        }
      }(),
      formData: "FormData" in self
    };
    function Body() {
      this.bodyUsed = false;
      this._initBody = function(body) {
        this._bodyInit = body;
        if (typeof body === "string") {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (!body) {
          this._bodyText = "";
        } else {
          throw new Error("unsupported BodyInit type");
        }
      };
      if (support.blob) {
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return Promise2.resolve(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as blob");
          } else {
            return Promise2.resolve(new Blob([this._bodyText]));
          }
        };
        this.arrayBuffer = function() {
          return this.blob().then(readBlobAsArrayBuffer);
        };
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise2.resolve(this._bodyText);
          }
        };
      } else {
        this.text = function() {
          var rejected = consumed(this);
          return rejected ? rejected : Promise2.resolve(this._bodyText);
        };
      }
      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode);
        };
      }
      this.json = function() {
        return this.text().then(JSON.parse);
      };
      return this;
    }
    var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }
    function Request(url, options) {
      options = options || {};
      this.url = url;
      this.credentials = options.credentials || "omit";
      this.headers = new Headers(options.headers);
      this.method = normalizeMethod(options.method || "GET");
      this.mode = options.mode || null;
      this.referrer = null;
      if ((this.method === "GET" || this.method === "HEAD") && options.body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      this._initBody(options.body);
    }
    function decode(body) {
      var form = new FormData();
      body.trim().split("&").forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split("=");
          var name = split.shift().replace(/\+/g, " ");
          var value = split.join("=").replace(/\+/g, " ");
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }
    function headers2(responseHeaders) {
      var head = new Headers();
      var pairs = responseHeaders.trim().split("\n");
      pairs.forEach(function(header) {
        var split = header.trim().split(":");
        var key = split.shift().trim();
        var value = split.join(":").trim();
        head.append(key, value);
      });
      return head;
    }
    Body.call(Request.prototype);
    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }
      this._initBody(bodyInit);
      this.type = "default";
      this.url = null;
      this.status = options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText;
      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      this.url = options.url || "";
    }
    Body.call(Response.prototype);
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
    self.GM_fetch = function(input, init) {
      var request3;
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request3 = input;
      } else {
        request3 = new Request(input, init);
      }
      return new Promise2(function(resolve, reject) {
        var xhr_details = {};
        var _parsedRespHeaders;
        function responseURL(finalUrl, rawRespHeaders, respHeaders) {
          if (finalUrl) {
            return finalUrl;
          }
          if (/^X-Request-URL:/m.test(rawRespHeaders)) {
            return respHeaders.get("X-Request-URL");
          }
          return;
        }
        xhr_details.method = request3.method;
        xhr_details.url = request3.url;
        xhr_details.synchronous = false;
        xhr_details.onload = function(resp) {
          var status = resp.status;
          if (status < 100 || status > 599) {
            reject(new TypeError("Network request failed"));
            return;
          }
          var rawRespHeaders = resp.responseHeaders;
          _parsedRespHeaders = headers2(rawRespHeaders);
          var options = {
            status,
            statusText: resp.statusText,
            headers: _parsedRespHeaders,
            url: responseURL(resp.finalUrl, rawRespHeaders, _parsedRespHeaders)
          };
          var body = resp.responseText;
          resolve(new Response(body, options));
        };
        xhr_details.onerror = function() {
          reject(new TypeError("Network request failed"));
        };
        xhr_details.headers = {};
        request3.headers.forEach(function(value, name) {
          xhr_details.headers[name] = value;
        });
        if (typeof request3._bodyInit !== "undefined") {
          xhr_details.data = request3._bodyInit;
        }
        GM.xmlHttpRequest(xhr_details);
      });
    };
    self.GM_fetch.polyfill = true;
  })();

  // utils/language_match.ts
  function isMatchLanguage(lang, matchPattern) {
    let matches = matchPattern.matches || [];
    if (matches && !Array.isArray(matches)) {
      matches = [matches];
    }
    if (matches.length === 0) {
      return false;
    }
    if (matches.length > 0) {
      if (matches.includes(lang)) {
        return true;
      } else {
        for (const match of matches) {
          if (match.includes("*")) {
            const reg = new RegExp(match);
            if (reg.test(lang)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

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
    return env.TRANSLATE_USERSCRIPT === "1";
  }

  // constant.ts
  var brandName = "Next Translator";
  var brandId = "immersive-translate";
  var targetContainerElementAttributeName = `data-${brandId}-container`;
  var buildinConfigStorageKey = "buildinConfig";
  var contextMenuId = `${brandId}-context-menu`;
  var contextOpenOptionsMenuId = `${brandId}-open-options-menu`;
  var homepage = "https://immersive-translate.owenyoung.com/";
  var buildinConfigSyncUrl = "https://immersive-translate.owenyoung.com/buildin_config.json";
  var sourceElementMarkAttributeName = `data-${brandId}-mark`;
  var sourceElementParagraphAttributeName = `data-${brandId}-paragraph-id`;
  var sourceAtomicBlockElementMarkAttributeName = `data-${brandId}-atomic-block-mark`;
  var sourceInlineElementMarkAttributeName = `data-${brandId}-inline-mark`;
  var sourceBlockElementMarkAttributeName = `data-${brandId}-block-mark`;
  var lastRunTimeStorageKey = "lastRunTime";
  var sourceElementWithGlobalStyleMarkAttributeName = `data-${brandId}-global-style-mark`;
  var delimiters = ["\u{1F6A0}\u{1F6A0}", "\u{1F69E}"];
  var titleDelimiters = " --- ";
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
    "zu",
    "und"
  ];

  // utils/format_language.ts
  function formatLanguage(langCode) {
    if (typeof langCode !== "string")
      return "und";
    if (langCode === "zh" || langCode === "zh-Hans") {
      return "zh-CN";
    } else if (langCode === "zh-Hant" || langCode === "zh-HK") {
      return "zh-TW";
    } else if (langCode === "iw") {
      return "he";
    } else if (langCode === "jv") {
      return "jw";
    }
    if (languages.indexOf(langCode) === -1) {
      if (langCode.indexOf("-") !== -1) {
        langCode = langCode.split("-")[0];
        if (languages.indexOf(langCode) === -1) {
          return "und";
        } else {
          return langCode;
        }
      } else {
        return "und";
      }
    } else {
      return langCode;
    }
  }

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
  function clampAndTruncate(n22, max = 255, min = 0) {
    return Math.trunc(Math.max(Math.min(n22, max), min));
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

  // https://deno.land/std@0.167.0/async/debounce.ts
  function debounce(fn, wait) {
    let timeout = null;
    let flush = null;
    const debounced = (...args) => {
      debounced.clear();
      flush = () => {
        debounced.clear();
        fn.call(debounced, ...args);
      };
      timeout = setTimeout(flush, wait);
    };
    debounced.clear = () => {
      if (typeof timeout === "number") {
        clearTimeout(timeout);
        timeout = null;
        flush = null;
      }
    };
    debounced.flush = () => {
      flush?.();
    };
    Object.defineProperty(debounced, "pending", {
      get: () => typeof timeout === "number"
    });
    return debounced;
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
  function k(e19, t18) {
    for (var _3 in t18)
      e19[_3] = t18[_3];
    return e19;
  }
  function j(e19) {
    var t18 = e19.parentNode;
    t18 && t18.removeChild(e19);
  }
  function ee(e19, t18, _3) {
    var r14, l22, o24, s21 = {};
    for (o24 in t18)
      o24 == "key" ? r14 = t18[o24] : o24 == "ref" ? l22 = t18[o24] : s21[o24] = t18[o24];
    if (arguments.length > 2 && (s21.children = arguments.length > 3 ? P.call(arguments, 2) : _3), typeof e19 == "function" && e19.defaultProps != null)
      for (o24 in e19.defaultProps)
        s21[o24] === void 0 && (s21[o24] = e19.defaultProps[o24]);
    return w(e19, s21, r14, l22, null);
  }
  function w(e19, t18, _3, r14, l22) {
    var o24 = { type: e19, props: t18, key: _3, ref: r14, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l22 ?? ++$ };
    return l22 == null && d.vnode != null && d.vnode(o24), o24;
  }
  function L(e19) {
    return e19.children;
  }
  function U(e19, t18) {
    this.props = e19, this.context = t18;
  }
  function C(e19, t18) {
    if (t18 == null)
      return e19.__ ? C(e19.__, e19.__.__k.indexOf(e19) + 1) : null;
    for (var _3; t18 < e19.__k.length; t18++)
      if ((_3 = e19.__k[t18]) != null && _3.__e != null)
        return _3.__e;
    return typeof e19.type == "function" ? C(e19) : null;
  }
  function z(e19) {
    var t18, _3;
    if ((e19 = e19.__) != null && e19.__c != null) {
      for (e19.__e = e19.__c.base = null, t18 = 0; t18 < e19.__k.length; t18++)
        if ((_3 = e19.__k[t18]) != null && _3.__e != null) {
          e19.__e = e19.__c.base = _3.__e;
          break;
        }
      return z(e19);
    }
  }
  function M(e19) {
    (!e19.__d && (e19.__d = true) && S.push(e19) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
  }
  function D() {
    for (var e19; D.__r = S.length; )
      e19 = S.sort(function(t18, _3) {
        return t18.__v.__b - _3.__v.__b;
      }), S = [], e19.some(function(t18) {
        var _3, r14, l22, o24, s21, f17;
        t18.__d && (s21 = (o24 = (_3 = t18).__v).__e, (f17 = _3.__P) && (r14 = [], (l22 = k({}, o24)).__v = o24.__v + 1, W(f17, o24, l22, _3.__n, f17.ownerSVGElement !== void 0, o24.__h != null ? [s21] : null, r14, s21 ?? C(o24), o24.__h), K(r14, o24), o24.__e != s21 && z(o24)));
      });
  }
  function G(e19, t18, _3, r14, l22, o24, s21, f17, p22, a21) {
    var n22, h11, c28, i22, u16, b11, v7, y11 = r14 && r14.__k || V, g10 = y11.length;
    for (_3.__k = [], n22 = 0; n22 < t18.length; n22++)
      if ((i22 = _3.__k[n22] = (i22 = t18[n22]) == null || typeof i22 == "boolean" ? null : typeof i22 == "string" || typeof i22 == "number" || typeof i22 == "bigint" ? w(null, i22, null, null, i22) : Array.isArray(i22) ? w(L, { children: i22 }, null, null, null) : i22.__b > 0 ? w(i22.type, i22.props, i22.key, i22.ref ? i22.ref : null, i22.__v) : i22) != null) {
        if (i22.__ = _3, i22.__b = _3.__b + 1, (c28 = y11[n22]) === null || c28 && i22.key == c28.key && i22.type === c28.type)
          y11[n22] = void 0;
        else
          for (h11 = 0; h11 < g10; h11++) {
            if ((c28 = y11[h11]) && i22.key == c28.key && i22.type === c28.type) {
              y11[h11] = void 0;
              break;
            }
            c28 = null;
          }
        W(e19, i22, c28 = c28 || T, l22, o24, s21, f17, p22, a21), u16 = i22.__e, (h11 = i22.ref) && c28.ref != h11 && (v7 || (v7 = []), c28.ref && v7.push(c28.ref, null, i22), v7.push(h11, i22.__c || u16, i22)), u16 != null ? (b11 == null && (b11 = u16), typeof i22.type == "function" && i22.__k === c28.__k ? i22.__d = p22 = q(i22, p22, e19) : p22 = J(e19, i22, c28, y11, u16, p22), typeof _3.type == "function" && (_3.__d = p22)) : p22 && c28.__e == p22 && p22.parentNode != e19 && (p22 = C(c28));
      }
    for (_3.__e = b11, n22 = g10; n22--; )
      y11[n22] != null && (typeof _3.type == "function" && y11[n22].__e != null && y11[n22].__e == _3.__d && (_3.__d = C(r14, n22 + 1)), X(y11[n22], y11[n22]));
    if (v7)
      for (n22 = 0; n22 < v7.length; n22++)
        Q(v7[n22], v7[++n22], v7[++n22]);
  }
  function q(e19, t18, _3) {
    for (var r14, l22 = e19.__k, o24 = 0; l22 && o24 < l22.length; o24++)
      (r14 = l22[o24]) && (r14.__ = e19, t18 = typeof r14.type == "function" ? q(r14, t18, _3) : J(_3, r14, r14, l22, r14.__e, t18));
    return t18;
  }
  function J(e19, t18, _3, r14, l22, o24) {
    var s21, f17, p22;
    if (t18.__d !== void 0)
      s21 = t18.__d, t18.__d = void 0;
    else if (_3 == null || l22 != o24 || l22.parentNode == null)
      e:
        if (o24 == null || o24.parentNode !== e19)
          e19.appendChild(l22), s21 = null;
        else {
          for (f17 = o24, p22 = 0; (f17 = f17.nextSibling) && p22 < r14.length; p22 += 2)
            if (f17 == l22)
              break e;
          e19.insertBefore(l22, o24), s21 = o24;
        }
    return s21 !== void 0 ? s21 : l22.nextSibling;
  }
  function _e(e19, t18, _3, r14, l22) {
    var o24;
    for (o24 in _3)
      o24 === "children" || o24 === "key" || o24 in t18 || N(e19, o24, null, _3[o24], r14);
    for (o24 in t18)
      l22 && typeof t18[o24] != "function" || o24 === "children" || o24 === "key" || o24 === "value" || o24 === "checked" || _3[o24] === t18[o24] || N(e19, o24, t18[o24], _3[o24], r14);
  }
  function I(e19, t18, _3) {
    t18[0] === "-" ? e19.setProperty(t18, _3) : e19[t18] = _3 == null ? "" : typeof _3 != "number" || Z.test(t18) ? _3 : _3 + "px";
  }
  function N(e19, t18, _3, r14, l22) {
    var o24;
    e:
      if (t18 === "style")
        if (typeof _3 == "string")
          e19.style.cssText = _3;
        else {
          if (typeof r14 == "string" && (e19.style.cssText = r14 = ""), r14)
            for (t18 in r14)
              _3 && t18 in _3 || I(e19.style, t18, "");
          if (_3)
            for (t18 in _3)
              r14 && _3[t18] === r14[t18] || I(e19.style, t18, _3[t18]);
        }
      else if (t18[0] === "o" && t18[1] === "n")
        o24 = t18 !== (t18 = t18.replace(/Capture$/, "")), t18 = t18.toLowerCase() in e19 ? t18.toLowerCase().slice(2) : t18.slice(2), e19.l || (e19.l = {}), e19.l[t18 + o24] = _3, _3 ? r14 || e19.addEventListener(t18, o24 ? R : O, o24) : e19.removeEventListener(t18, o24 ? R : O, o24);
      else if (t18 !== "dangerouslySetInnerHTML") {
        if (l22)
          t18 = t18.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t18 !== "href" && t18 !== "list" && t18 !== "form" && t18 !== "tabIndex" && t18 !== "download" && t18 in e19)
          try {
            e19[t18] = _3 ?? "";
            break e;
          } catch {
          }
        typeof _3 == "function" || (_3 != null && (_3 !== false || t18[0] === "a" && t18[1] === "r") ? e19.setAttribute(t18, _3) : e19.removeAttribute(t18));
      }
  }
  function O(e19) {
    this.l[e19.type + false](d.event ? d.event(e19) : e19);
  }
  function R(e19) {
    this.l[e19.type + true](d.event ? d.event(e19) : e19);
  }
  function W(e19, t18, _3, r14, l22, o24, s21, f17, p22) {
    var a21, n22, h11, c28, i22, u16, b11, v7, y11, g10, x15, H6, E5, m17 = t18.type;
    if (t18.constructor !== void 0)
      return null;
    _3.__h != null && (p22 = _3.__h, f17 = t18.__e = _3.__e, t18.__h = null, o24 = [f17]), (a21 = d.__b) && a21(t18);
    try {
      e:
        if (typeof m17 == "function") {
          if (v7 = t18.props, y11 = (a21 = m17.contextType) && r14[a21.__c], g10 = a21 ? y11 ? y11.props.value : a21.__ : r14, _3.__c ? b11 = (n22 = t18.__c = _3.__c).__ = n22.__E : ("prototype" in m17 && m17.prototype.render ? t18.__c = n22 = new m17(v7, g10) : (t18.__c = n22 = new U(v7, g10), n22.constructor = m17, n22.render = oe), y11 && y11.sub(n22), n22.props = v7, n22.state || (n22.state = {}), n22.context = g10, n22.__n = r14, h11 = n22.__d = true, n22.__h = []), n22.__s == null && (n22.__s = n22.state), m17.getDerivedStateFromProps != null && (n22.__s == n22.state && (n22.__s = k({}, n22.__s)), k(n22.__s, m17.getDerivedStateFromProps(v7, n22.__s))), c28 = n22.props, i22 = n22.state, h11)
            m17.getDerivedStateFromProps == null && n22.componentWillMount != null && n22.componentWillMount(), n22.componentDidMount != null && n22.__h.push(n22.componentDidMount);
          else {
            if (m17.getDerivedStateFromProps == null && v7 !== c28 && n22.componentWillReceiveProps != null && n22.componentWillReceiveProps(v7, g10), !n22.__e && n22.shouldComponentUpdate != null && n22.shouldComponentUpdate(v7, n22.__s, g10) === false || t18.__v === _3.__v) {
              n22.props = v7, n22.state = n22.__s, t18.__v !== _3.__v && (n22.__d = false), n22.__v = t18, t18.__e = _3.__e, t18.__k = _3.__k, t18.__k.forEach(function(A5) {
                A5 && (A5.__ = t18);
              }), n22.__h.length && s21.push(n22);
              break e;
            }
            n22.componentWillUpdate != null && n22.componentWillUpdate(v7, n22.__s, g10), n22.componentDidUpdate != null && n22.__h.push(function() {
              n22.componentDidUpdate(c28, i22, u16);
            });
          }
          if (n22.context = g10, n22.props = v7, n22.__v = t18, n22.__P = e19, x15 = d.__r, H6 = 0, "prototype" in m17 && m17.prototype.render)
            n22.state = n22.__s, n22.__d = false, x15 && x15(t18), a21 = n22.render(n22.props, n22.state, n22.context);
          else
            do
              n22.__d = false, x15 && x15(t18), a21 = n22.render(n22.props, n22.state, n22.context), n22.state = n22.__s;
            while (n22.__d && ++H6 < 25);
          n22.state = n22.__s, n22.getChildContext != null && (r14 = k(k({}, r14), n22.getChildContext())), h11 || n22.getSnapshotBeforeUpdate == null || (u16 = n22.getSnapshotBeforeUpdate(c28, i22)), E5 = a21 != null && a21.type === L && a21.key == null ? a21.props.children : a21, G(e19, Array.isArray(E5) ? E5 : [E5], t18, _3, r14, l22, o24, s21, f17, p22), n22.base = t18.__e, t18.__h = null, n22.__h.length && s21.push(n22), b11 && (n22.__E = n22.__ = null), n22.__e = false;
        } else
          o24 == null && t18.__v === _3.__v ? (t18.__k = _3.__k, t18.__e = _3.__e) : t18.__e = ne(_3.__e, t18, _3, r14, l22, o24, s21, p22);
      (a21 = d.diffed) && a21(t18);
    } catch (A5) {
      t18.__v = null, (p22 || o24 != null) && (t18.__e = f17, t18.__h = !!p22, o24[o24.indexOf(f17)] = null), d.__e(A5, t18, _3);
    }
  }
  function K(e19, t18) {
    d.__c && d.__c(t18, e19), e19.some(function(_3) {
      try {
        e19 = _3.__h, _3.__h = [], e19.some(function(r14) {
          r14.call(_3);
        });
      } catch (r14) {
        d.__e(r14, _3.__v);
      }
    });
  }
  function ne(e19, t18, _3, r14, l22, o24, s21, f17) {
    var p22, a21, n22, h11 = _3.props, c28 = t18.props, i22 = t18.type, u16 = 0;
    if (i22 === "svg" && (l22 = true), o24 != null) {
      for (; u16 < o24.length; u16++)
        if ((p22 = o24[u16]) && "setAttribute" in p22 == !!i22 && (i22 ? p22.localName === i22 : p22.nodeType === 3)) {
          e19 = p22, o24[u16] = null;
          break;
        }
    }
    if (e19 == null) {
      if (i22 === null)
        return document.createTextNode(c28);
      e19 = l22 ? document.createElementNS("http://www.w3.org/2000/svg", i22) : document.createElement(i22, c28.is && c28), o24 = null, f17 = false;
    }
    if (i22 === null)
      h11 === c28 || f17 && e19.data === c28 || (e19.data = c28);
    else {
      if (o24 = o24 && P.call(e19.childNodes), a21 = (h11 = _3.props || T).dangerouslySetInnerHTML, n22 = c28.dangerouslySetInnerHTML, !f17) {
        if (o24 != null)
          for (h11 = {}, u16 = 0; u16 < e19.attributes.length; u16++)
            h11[e19.attributes[u16].name] = e19.attributes[u16].value;
        (n22 || a21) && (n22 && (a21 && n22.__html == a21.__html || n22.__html === e19.innerHTML) || (e19.innerHTML = n22 && n22.__html || ""));
      }
      if (_e(e19, c28, h11, l22, f17), n22)
        t18.__k = [];
      else if (u16 = t18.props.children, G(e19, Array.isArray(u16) ? u16 : [u16], t18, _3, r14, l22 && i22 !== "foreignObject", o24, s21, o24 ? o24[0] : _3.__k && C(_3, 0), f17), o24 != null)
        for (u16 = o24.length; u16--; )
          o24[u16] != null && j(o24[u16]);
      f17 || ("value" in c28 && (u16 = c28.value) !== void 0 && (u16 !== e19.value || i22 === "progress" && !u16 || i22 === "option" && u16 !== h11.value) && N(e19, "value", u16, h11.value, false), "checked" in c28 && (u16 = c28.checked) !== void 0 && u16 !== e19.checked && N(e19, "checked", u16, h11.checked, false));
    }
    return e19;
  }
  function Q(e19, t18, _3) {
    try {
      typeof e19 == "function" ? e19(t18) : e19.current = t18;
    } catch (r14) {
      d.__e(r14, _3);
    }
  }
  function X(e19, t18, _3) {
    var r14, l22;
    if (d.unmount && d.unmount(e19), (r14 = e19.ref) && (r14.current && r14.current !== e19.__e || Q(r14, null, t18)), (r14 = e19.__c) != null) {
      if (r14.componentWillUnmount)
        try {
          r14.componentWillUnmount();
        } catch (o24) {
          d.__e(o24, t18);
        }
      r14.base = r14.__P = null, e19.__c = void 0;
    }
    if (r14 = e19.__k)
      for (l22 = 0; l22 < r14.length; l22++)
        r14[l22] && X(r14[l22], t18, typeof e19.type != "function");
    _3 || e19.__e == null || j(e19.__e), e19.__ = e19.__e = e19.__d = void 0;
  }
  function oe(e19, t18, _3) {
    return this.constructor(e19, _3);
  }
  function re(e19, t18, _3) {
    var r14, l22, o24;
    d.__ && d.__(e19, t18), l22 = (r14 = typeof _3 == "function") ? null : _3 && _3.__k || t18.__k, o24 = [], W(t18, e19 = (!r14 && _3 || t18).__k = ee(L, null, [e19]), l22 || T, T, t18.ownerSVGElement !== void 0, !r14 && _3 ? [_3] : l22 ? null : t18.firstChild ? P.call(t18.childNodes) : null, o24, !r14 && _3 ? _3 : l22 ? l22.__e : t18.firstChild, r14), K(o24, e19);
  }
  function ce(e19, t18) {
    var _3 = { __c: t18 = "__cC" + B++, __: e19, Consumer: function(r14, l22) {
      return r14.children(l22);
    }, Provider: function(r14) {
      var l22, o24;
      return this.getChildContext || (l22 = [], (o24 = {})[t18] = this, this.getChildContext = function() {
        return o24;
      }, this.shouldComponentUpdate = function(s21) {
        this.props.value !== s21.value && l22.some(M);
      }, this.sub = function(s21) {
        l22.push(s21);
        var f17 = s21.componentWillUnmount;
        s21.componentWillUnmount = function() {
          l22.splice(l22.indexOf(s21), 1), f17 && f17.call(s21);
        };
      }), r14.children;
    } };
    return _3.Provider.__ = _3.Consumer.contextType = _3;
  }
  P = V.slice, d = { __e: function(e19, t18, _3, r14) {
    for (var l22, o24, s21; t18 = t18.__; )
      if ((l22 = t18.__c) && !l22.__)
        try {
          if ((o24 = l22.constructor) && o24.getDerivedStateFromError != null && (l22.setState(o24.getDerivedStateFromError(e19)), s21 = l22.__d), l22.componentDidCatch != null && (l22.componentDidCatch(e19, r14 || {}), s21 = l22.__d), s21)
            return l22.__E = l22;
        } catch (f17) {
          e19 = f17;
        }
    throw e19;
  } }, $ = 0, Y = function(e19) {
    return e19 != null && e19.constructor === void 0;
  }, U.prototype.setState = function(e19, t18) {
    var _3;
    _3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e19 == "function" && (e19 = e19(k({}, _3), this.props)), e19 && k(_3, e19), e19 != null && this.__v && (t18 && this.__h.push(t18), M(this));
  }, U.prototype.forceUpdate = function(e19) {
    this.__v && (this.__e = true, e19 && this.__h.push(e19), M(this));
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
  function a(_3, t18) {
    d.__h && d.__h(n, _3, f || t18), f = 0;
    var u16 = n.__H || (n.__H = { __: [], __h: [] });
    return _3 >= u16.__.length && u16.__.push({ __V: l }), u16.__[_3];
  }
  function P2(_3) {
    return f = 1, B2(D2, _3);
  }
  function B2(_3, t18, u16) {
    var o24 = a(i++, 2);
    if (o24.t = _3, !o24.__c && (o24.__ = [u16 ? u16(t18) : D2(void 0, t18), function(v7) {
      var s21 = o24.__N ? o24.__N[0] : o24.__[0], h11 = o24.t(s21, v7);
      s21 !== h11 && (o24.__N = [h11, o24.__[1]], o24.__c.setState({}));
    }], o24.__c = n, !n.u)) {
      n.u = true;
      var r14 = n.shouldComponentUpdate;
      n.shouldComponentUpdate = function(v7, s21, h11) {
        if (!o24.__c.__H)
          return true;
        var y11 = o24.__c.__H.__.filter(function(c28) {
          return c28.__c;
        });
        if (y11.every(function(c28) {
          return !c28.__N;
        }))
          return !r14 || r14.call(this, v7, s21, h11);
        var E5 = false;
        return y11.forEach(function(c28) {
          if (c28.__N) {
            var k8 = c28.__[0];
            c28.__ = c28.__N, c28.__N = void 0, k8 !== c28.__[0] && (E5 = true);
          }
        }), !!E5 && (!r14 || r14.call(this, v7, s21, h11));
      };
    }
    return o24.__N || o24.__;
  }
  function j2(_3, t18) {
    var u16 = a(i++, 3);
    !d.__s && H(u16.__H, t18) && (u16.__ = _3, u16.i = t18, n.__H.__h.push(u16));
  }
  function w2(_3) {
    return f = 5, x(function() {
      return { current: _3 };
    }, []);
  }
  function x(_3, t18) {
    var u16 = a(i++, 7);
    return H(u16.__H, t18) ? (u16.__V = _3(), u16.i = t18, u16.__h = _3, u16.__V) : u16.__;
  }
  function L2(_3, t18) {
    return f = 8, x(function() {
      return _3;
    }, t18);
  }
  function M2(_3) {
    var t18 = n.context[_3.__c], u16 = a(i++, 9);
    return u16.c = _3, t18 ? (u16.__ == null && (u16.__ = true, t18.sub(n)), t18.props.value) : _3.__;
  }
  function R2() {
    for (var _3; _3 = q2.shift(); )
      if (_3.__P && _3.__H)
        try {
          _3.__H.__h.forEach(m), _3.__H.__h.forEach(p), _3.__H.__h = [];
        } catch (t18) {
          _3.__H.__h = [], d.__e(t18, _3.__v);
        }
  }
  d.__b = function(_3) {
    typeof _3.type != "function" || _3.o || _3.type === L ? _3.o || (_3.o = _3.__ && _3.__.o ? _3.__.o : "") : _3.o = (_3.__ && _3.__.o ? _3.__.o : "") + (_3.__ && _3.__.__k ? _3.__.__k.indexOf(_3) : 0), n = null, V2 && V2(_3);
  }, d.__r = function(_3) {
    g && g(_3), i = 0;
    var t18 = (n = _3.__c).__H;
    t18 && (d2 === n ? (t18.__h = [], n.__h = [], t18.__.forEach(function(u16) {
      u16.__N && (u16.__ = u16.__N), u16.__V = l, u16.__N = u16.i = void 0;
    })) : (t18.__h.forEach(m), t18.__h.forEach(p), t18.__h = [])), d2 = n;
  }, d.diffed = function(_3) {
    b && b(_3);
    var t18 = _3.__c;
    t18 && t18.__H && (t18.__H.__h.length && (q2.push(t18) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t18.__H.__.forEach(function(u16) {
      u16.i && (u16.__H = u16.i), u16.__V !== l && (u16.__ = u16.__V), u16.i = void 0, u16.__V = l;
    })), d2 = n = null;
  }, d.__c = function(_3, t18) {
    t18.some(function(u16) {
      try {
        u16.__h.forEach(m), u16.__h = u16.__h.filter(function(o24) {
          return !o24.__ || p(o24);
        });
      } catch (o24) {
        t18.some(function(r14) {
          r14.__h && (r14.__h = []);
        }), t18 = [], d.__e(o24, u16.__v);
      }
    }), C2 && C2(_3, t18);
  }, d.unmount = function(_3) {
    A && A(_3);
    var t18, u16 = _3.__c;
    u16 && u16.__H && (u16.__H.__.forEach(function(o24) {
      try {
        m(o24);
      } catch (r14) {
        t18 = r14;
      }
    }), u16.__H = void 0, t18 && d.__e(t18, u16.__v));
  };
  var F2 = typeof requestAnimationFrame == "function";
  function S2(_3) {
    var t18, u16 = function() {
      clearTimeout(o24), F2 && cancelAnimationFrame(t18), setTimeout(_3);
    }, o24 = setTimeout(u16, 100);
    F2 && (t18 = requestAnimationFrame(u16));
  }
  function m(_3) {
    var t18 = n, u16 = _3.__c;
    typeof u16 == "function" && (_3.__c = void 0, u16()), n = t18;
  }
  function p(_3) {
    var t18 = n;
    _3.__c = _3.__(), n = t18;
  }
  function H(_3, t18) {
    return !_3 || _3.length !== t18.length || t18.some(function(u16, o24) {
      return u16 !== _3[o24];
    });
  }
  function D2(_3, t18) {
    return typeof t18 == "function" ? t18(_3) : t18;
  }

  // https://esm.sh/v101/memoize-one@6.0.0/deno/memoize-one.js
  var s = Number.isNaN || function(r14) {
    return typeof r14 == "number" && r14 !== r14;
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/isFunction.js
  function t(n22) {
    return typeof n22 == "function";
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/createErrorClass.js
  function e(o24) {
    let r14 = o24((t18) => {
      Error.call(t18), t18.stack = new Error().stack;
    });
    return r14.prototype = Object.create(Error.prototype), r14.prototype.constructor = r14, r14;
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/UnsubscriptionError.js
  var p2 = e((i22) => function(r14) {
    i22(this), this.message = r14 ? `${r14.length} errors occurred during unsubscription:
${r14.map((n22, s21) => `${s21 + 1}) ${n22.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = r14;
  });

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/arrRemove.js
  function o2(e19, n22) {
    if (e19) {
      let i22 = e19.indexOf(n22);
      0 <= i22 && e19.splice(i22, 1);
    }
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/Subscription.js
  var e2 = class {
    constructor(i22) {
      this.initialTeardown = i22, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    unsubscribe() {
      let i22;
      if (!this.closed) {
        this.closed = true;
        let { _parentage: s21 } = this;
        if (s21)
          if (this._parentage = null, Array.isArray(s21))
            for (let t18 of s21)
              t18.remove(this);
          else
            s21.remove(this);
        let { initialTeardown: c28 } = this;
        if (t(c28))
          try {
            c28();
          } catch (t18) {
            i22 = t18 instanceof p2 ? t18.errors : [t18];
          }
        let { _finalizers: f17 } = this;
        if (f17) {
          this._finalizers = null;
          for (let t18 of f17)
            try {
              h(t18);
            } catch (o24) {
              i22 = i22 ?? [], o24 instanceof p2 ? i22 = [...i22, ...o24.errors] : i22.push(o24);
            }
        }
        if (i22)
          throw new p2(i22);
      }
    }
    add(i22) {
      var s21;
      if (i22 && i22 !== this)
        if (this.closed)
          h(i22);
        else {
          if (i22 instanceof e2) {
            if (i22.closed || i22._hasParent(this))
              return;
            i22._addParent(this);
          }
          (this._finalizers = (s21 = this._finalizers) !== null && s21 !== void 0 ? s21 : []).push(i22);
        }
    }
    _hasParent(i22) {
      let { _parentage: s21 } = this;
      return s21 === i22 || Array.isArray(s21) && s21.includes(i22);
    }
    _addParent(i22) {
      let { _parentage: s21 } = this;
      this._parentage = Array.isArray(s21) ? (s21.push(i22), s21) : s21 ? [s21, i22] : i22;
    }
    _removeParent(i22) {
      let { _parentage: s21 } = this;
      s21 === i22 ? this._parentage = null : Array.isArray(s21) && o2(s21, i22);
    }
    remove(i22) {
      let { _finalizers: s21 } = this;
      s21 && o2(s21, i22), i22 instanceof e2 && i22._removeParent(this);
    }
  };
  e2.EMPTY = (() => {
    let r14 = new e2();
    return r14.closed = true, r14;
  })();
  var p3 = e2.EMPTY;
  function d3(r14) {
    return r14 instanceof e2 || r14 && "closed" in r14 && t(r14.remove) && t(r14.add) && t(r14.unsubscribe);
  }
  function h(r14) {
    t(r14) ? r14() : r14.unsubscribe();
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/config.js
  var e3 = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/timeoutProvider.js
  var u = { setTimeout(t18, e19, ...i22) {
    let { delegate: o24 } = u;
    return o24?.setTimeout ? o24.setTimeout(t18, e19, ...i22) : setTimeout(t18, e19, ...i22);
  }, clearTimeout(t18) {
    let { delegate: e19 } = u;
    return (e19?.clearTimeout || clearTimeout)(t18);
  }, delegate: void 0 };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/reportUnhandledError.js
  function m2(o24) {
    u.setTimeout(() => {
      let { onUnhandledError: r14 } = e3;
      if (r14)
        r14(o24);
      else
        throw o24;
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/noop.js
  function o3() {
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/NotificationFactories.js
  var o4 = (() => e4("C", void 0, void 0))();
  function r(n22) {
    return e4("E", void 0, n22);
  }
  function f2(n22) {
    return e4("N", n22, void 0);
  }
  function e4(n22, t18, i22) {
    return { kind: n22, value: t18, error: i22 };
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/errorContext.js
  var r2 = null;
  function u2(o24) {
    if (e3.useDeprecatedSynchronousErrorHandling) {
      let e19 = !r2;
      if (e19 && (r2 = { errorThrown: false, error: null }), o24(), e19) {
        let { errorThrown: t18, error: i22 } = r2;
        if (r2 = null, t18)
          throw i22;
      }
    } else
      o24();
  }
  function c(o24) {
    e3.useDeprecatedSynchronousErrorHandling && r2 && (r2.errorThrown = true, r2.error = o24);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/Subscriber.js
  var l2 = class extends e2 {
    constructor(t18) {
      super(), this.isStopped = false, t18 ? (this.destination = t18, d3(t18) && t18.add(this)) : this.destination = I2;
    }
    static create(t18, i22, o24) {
      return new u3(t18, i22, o24);
    }
    next(t18) {
      this.isStopped ? p4(f2(t18), this) : this._next(t18);
    }
    error(t18) {
      this.isStopped ? p4(r(t18), this) : (this.isStopped = true, this._error(t18));
    }
    complete() {
      this.isStopped ? p4(o4, this) : (this.isStopped = true, this._complete());
    }
    unsubscribe() {
      this.closed || (this.isStopped = true, super.unsubscribe(), this.destination = null);
    }
    _next(t18) {
      this.destination.next(t18);
    }
    _error(t18) {
      try {
        this.destination.error(t18);
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
  function c2(e19, t18) {
    return w3.call(e19, t18);
  }
  var d4 = class {
    constructor(t18) {
      this.partialObserver = t18;
    }
    next(t18) {
      let { partialObserver: i22 } = this;
      if (i22.next)
        try {
          i22.next(t18);
        } catch (o24) {
          s2(o24);
        }
    }
    error(t18) {
      let { partialObserver: i22 } = this;
      if (i22.error)
        try {
          i22.error(t18);
        } catch (o24) {
          s2(o24);
        }
      else
        s2(t18);
    }
    complete() {
      let { partialObserver: t18 } = this;
      if (t18.complete)
        try {
          t18.complete();
        } catch (i22) {
          s2(i22);
        }
    }
  };
  var u3 = class extends l2 {
    constructor(t18, i22, o24) {
      super();
      let r14;
      if (t(t18) || !t18)
        r14 = { next: t18 ?? void 0, error: i22 ?? void 0, complete: o24 ?? void 0 };
      else {
        let n22;
        this && e3.useDeprecatedNextContext ? (n22 = Object.create(t18), n22.unsubscribe = () => this.unsubscribe(), r14 = { next: t18.next && c2(t18.next, n22), error: t18.error && c2(t18.error, n22), complete: t18.complete && c2(t18.complete, n22) }) : r14 = t18;
      }
      this.destination = new d4(r14);
    }
  };
  function s2(e19) {
    e3.useDeprecatedSynchronousErrorHandling ? c(e19) : m2(e19);
  }
  function F3(e19) {
    throw e19;
  }
  function p4(e19, t18) {
    let { onStoppedNotification: i22 } = e3;
    i22 && u.setTimeout(() => i22(e19, t18));
  }
  var I2 = { closed: true, next: o3, error: F3, complete: o3 };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/symbol/observable.js
  var o5 = (() => typeof Symbol == "function" && Symbol.observable || "@@observable")();

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/identity.js
  function n2(t18) {
    return t18;
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/pipe.js
  function p5(r14) {
    return r14.length === 0 ? n2 : r14.length === 1 ? r14[0] : function(e19) {
      return r14.reduce((t18, i22) => i22(t18), e19);
    };
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/Observable.js
  var o6 = class {
    constructor(r14) {
      r14 && (this._subscribe = r14);
    }
    lift(r14) {
      let t18 = new o6();
      return t18.source = this, t18.operator = r14, t18;
    }
    subscribe(r14, t18, n22) {
      let s21 = w4(r14) ? r14 : new u3(r14, t18, n22);
      return u2(() => {
        let { operator: e19, source: c28 } = this;
        s21.add(e19 ? e19.call(s21, c28) : c28 ? this._subscribe(s21) : this._trySubscribe(s21));
      }), s21;
    }
    _trySubscribe(r14) {
      try {
        return this._subscribe(r14);
      } catch (t18) {
        r14.error(t18);
      }
    }
    forEach(r14, t18) {
      return t18 = f3(t18), new t18((n22, s21) => {
        let e19 = new u3({ next: (c28) => {
          try {
            r14(c28);
          } catch (m17) {
            s21(m17), e19.unsubscribe();
          }
        }, error: s21, complete: n22 });
        this.subscribe(e19);
      });
    }
    _subscribe(r14) {
      var t18;
      return (t18 = this.source) === null || t18 === void 0 ? void 0 : t18.subscribe(r14);
    }
    [o5]() {
      return this;
    }
    pipe(...r14) {
      return p5(r14)(this);
    }
    toPromise(r14) {
      return r14 = f3(r14), new r14((t18, n22) => {
        let s21;
        this.subscribe((e19) => s21 = e19, (e19) => n22(e19), () => t18(s21));
      });
    }
  };
  o6.create = (i22) => new o6(i22);
  function f3(i22) {
    var r14;
    return (r14 = i22 ?? e3.Promise) !== null && r14 !== void 0 ? r14 : Promise;
  }
  function d5(i22) {
    return i22 && t(i22.next) && t(i22.error) && t(i22.complete);
  }
  function w4(i22) {
    return i22 && i22 instanceof l2 || d5(i22) && d3(i22);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/lift.js
  function o7(t18) {
    return t(t18?.lift);
  }
  function l3(t18) {
    return (r14) => {
      if (o7(r14))
        return r14.lift(function(n22) {
          try {
            return t18(n22, this);
          } catch (i22) {
            this.error(i22);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/OperatorSubscriber.js
  function a2(n22, r14, s21, i22, c28) {
    return new u4(n22, r14, s21, i22, c28);
  }
  var u4 = class extends l2 {
    constructor(r14, s21, i22, c28, h11, o24) {
      super(r14), this.onFinalize = h11, this.shouldUnsubscribe = o24, this._next = s21 ? function(e19) {
        try {
          s21(e19);
        } catch (t18) {
          r14.error(t18);
        }
      } : super._next, this._error = c28 ? function(e19) {
        try {
          c28(e19);
        } catch (t18) {
          r14.error(t18);
        } finally {
          this.unsubscribe();
        }
      } : super._error, this._complete = i22 ? function() {
        try {
          i22();
        } catch (e19) {
          r14.error(e19);
        } finally {
          this.unsubscribe();
        }
      } : super._complete;
    }
    unsubscribe() {
      var r14;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        let { closed: s21 } = this;
        super.unsubscribe(), !s21 && ((r14 = this.onFinalize) === null || r14 === void 0 || r14.call(this));
      }
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/performanceTimestampProvider.js
  var e5 = { now() {
    return (e5.delegate || performance).now();
  }, delegate: void 0 };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/animationFrameProvider.js
  var t2 = { schedule(n22) {
    let e19 = requestAnimationFrame, i22 = cancelAnimationFrame, { delegate: a21 } = t2;
    a21 && (e19 = a21.requestAnimationFrame, i22 = a21.cancelAnimationFrame);
    let r14 = e19((o24) => {
      i22 = void 0, n22(o24);
    });
    return new e2(() => i22?.(r14));
  }, requestAnimationFrame(...n22) {
    let { delegate: e19 } = t2;
    return (e19?.requestAnimationFrame || requestAnimationFrame)(...n22);
  }, cancelAnimationFrame(...n22) {
    let { delegate: e19 } = t2;
    return (e19?.cancelAnimationFrame || cancelAnimationFrame)(...n22);
  }, delegate: void 0 };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/dom/animationFrames.js
  function m3(n22) {
    return new o6((r14) => {
      let t18 = n22 || e5, c28 = t18.now(), o24 = 0, e19 = () => {
        r14.closed || (o24 = t2.requestAnimationFrame((s21) => {
          o24 = 0;
          let a21 = t18.now();
          r14.next({ timestamp: n22 ? a21 : s21, elapsed: a21 - c28 }), e19();
        }));
      };
      return e19(), () => {
        o24 && t2.cancelAnimationFrame(o24);
      };
    });
  }
  var p6 = m3();

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/ObjectUnsubscribedError.js
  var t3 = e((r14) => function() {
    r14(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  });

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/Subject.js
  var i2 = class extends o6 {
    constructor() {
      super(), this.closed = false, this.currentObservers = null, this.observers = [], this.isStopped = false, this.hasError = false, this.thrownError = null;
    }
    lift(r14) {
      let e19 = new o8(this, this);
      return e19.operator = r14, e19;
    }
    _throwIfClosed() {
      if (this.closed)
        throw new t3();
    }
    next(r14) {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.currentObservers || (this.currentObservers = Array.from(this.observers));
          for (let e19 of this.currentObservers)
            e19.next(r14);
        }
      });
    }
    error(r14) {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.hasError = this.isStopped = true, this.thrownError = r14;
          let { observers: e19 } = this;
          for (; e19.length; )
            e19.shift().error(r14);
        }
      });
    }
    complete() {
      u2(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.isStopped = true;
          let { observers: r14 } = this;
          for (; r14.length; )
            r14.shift().complete();
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
    }
    get observed() {
      var r14;
      return ((r14 = this.observers) === null || r14 === void 0 ? void 0 : r14.length) > 0;
    }
    _trySubscribe(r14) {
      return this._throwIfClosed(), super._trySubscribe(r14);
    }
    _subscribe(r14) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(r14), this._innerSubscribe(r14);
    }
    _innerSubscribe(r14) {
      let { hasError: e19, isStopped: s21, observers: t18 } = this;
      return e19 || s21 ? p3 : (this.currentObservers = null, t18.push(r14), new e2(() => {
        this.currentObservers = null, o2(t18, r14);
      }));
    }
    _checkFinalizedStatuses(r14) {
      let { hasError: e19, thrownError: s21, isStopped: t18 } = this;
      e19 ? r14.error(s21) : t18 && r14.complete();
    }
    asObservable() {
      let r14 = new o6();
      return r14.source = this, r14;
    }
  };
  i2.create = (n22, r14) => new o8(n22, r14);
  var o8 = class extends i2 {
    constructor(r14, e19) {
      super(), this.destination = r14, this.source = e19;
    }
    next(r14) {
      var e19, s21;
      (s21 = (e19 = this.destination) === null || e19 === void 0 ? void 0 : e19.next) === null || s21 === void 0 || s21.call(e19, r14);
    }
    error(r14) {
      var e19, s21;
      (s21 = (e19 = this.destination) === null || e19 === void 0 ? void 0 : e19.error) === null || s21 === void 0 || s21.call(e19, r14);
    }
    complete() {
      var r14, e19;
      (e19 = (r14 = this.destination) === null || r14 === void 0 ? void 0 : r14.complete) === null || e19 === void 0 || e19.call(r14);
    }
    _subscribe(r14) {
      var e19, s21;
      return (s21 = (e19 = this.source) === null || e19 === void 0 ? void 0 : e19.subscribe(r14)) !== null && s21 !== void 0 ? s21 : p3;
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/dateTimestampProvider.js
  var e6 = { now() {
    return (e6.delegate || Date).now();
  }, delegate: void 0 };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/Action.js
  var e7 = class extends e2 {
    constructor(r14, s21) {
      super();
    }
    schedule(r14, s21 = 0) {
      return this;
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/intervalProvider.js
  var n3 = { setInterval(t18, e19, ...l22) {
    let { delegate: r14 } = n3;
    return r14?.setInterval ? r14.setInterval(t18, e19, ...l22) : setInterval(t18, e19, ...l22);
  }, clearInterval(t18) {
    let { delegate: e19 } = n3;
    return (e19?.clearInterval || clearInterval)(t18);
  }, delegate: void 0 };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/AsyncAction.js
  var l5 = class extends e7 {
    constructor(t18, e19) {
      super(t18, e19), this.scheduler = t18, this.work = e19, this.pending = false;
    }
    schedule(t18, e19 = 0) {
      var s21;
      if (this.closed)
        return this;
      this.state = t18;
      let i22 = this.id, r14 = this.scheduler;
      return i22 != null && (this.id = this.recycleAsyncId(r14, i22, e19)), this.pending = true, this.delay = e19, this.id = (s21 = this.id) !== null && s21 !== void 0 ? s21 : this.requestAsyncId(r14, this.id, e19), this;
    }
    requestAsyncId(t18, e19, s21 = 0) {
      return n3.setInterval(t18.flush.bind(t18, this), s21);
    }
    recycleAsyncId(t18, e19, s21 = 0) {
      if (s21 != null && this.delay === s21 && this.pending === false)
        return e19;
      e19 != null && n3.clearInterval(e19);
    }
    execute(t18, e19) {
      if (this.closed)
        return new Error("executing a cancelled action");
      this.pending = false;
      let s21 = this._execute(t18, e19);
      if (s21)
        return s21;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(t18, e19) {
      let s21 = false, i22;
      try {
        this.work(t18);
      } catch (r14) {
        s21 = true, i22 = r14 || new Error("Scheduled action threw falsy error");
      }
      if (s21)
        return this.unsubscribe(), i22;
    }
    unsubscribe() {
      if (!this.closed) {
        let { id: t18, scheduler: e19 } = this, { actions: s21 } = e19;
        this.work = this.state = this.scheduler = null, this.pending = false, o2(s21, this), t18 != null && (this.id = this.recycleAsyncId(e19, t18, null)), this.delay = null, super.unsubscribe();
      }
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/Immediate.js
  var s3 = 1;
  var r3;
  var t4 = {};
  function l6(e19) {
    return e19 in t4 ? (delete t4[e19], true) : false;
  }
  var o9 = { setImmediate(e19) {
    let n22 = s3++;
    return t4[n22] = true, r3 || (r3 = Promise.resolve()), r3.then(() => l6(n22) && e19()), n22;
  }, clearImmediate(e19) {
    l6(e19);
  } };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/immediateProvider.js
  var { setImmediate: i3, clearImmediate: a3 } = o9;
  var d6 = { setImmediate(...t18) {
    let { delegate: e19 } = d6;
    return (e19?.setImmediate || i3)(...t18);
  }, clearImmediate(t18) {
    let { delegate: e19 } = d6;
    return (e19?.clearImmediate || a3)(t18);
  }, delegate: void 0 };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/AsapAction.js
  var u5 = class extends l5 {
    constructor(n22, t18) {
      super(n22, t18), this.scheduler = n22, this.work = t18;
    }
    requestAsyncId(n22, t18, e19 = 0) {
      return e19 !== null && e19 > 0 ? super.requestAsyncId(n22, t18, e19) : (n22.actions.push(this), n22._scheduled || (n22._scheduled = d6.setImmediate(n22.flush.bind(n22, void 0))));
    }
    recycleAsyncId(n22, t18, e19 = 0) {
      var i22;
      if (e19 != null ? e19 > 0 : this.delay > 0)
        return super.recycleAsyncId(n22, t18, e19);
      let { actions: r14 } = n22;
      t18 != null && ((i22 = r14[r14.length - 1]) === null || i22 === void 0 ? void 0 : i22.id) !== t18 && (d6.clearImmediate(t18), n22._scheduled = void 0);
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/Scheduler.js
  var t5 = class {
    constructor(o24, s21 = t5.now) {
      this.schedulerActionCtor = o24, this.now = s21;
    }
    schedule(o24, s21 = 0, r14) {
      return new this.schedulerActionCtor(this, o24).schedule(r14, s21);
    }
  };
  t5.now = e6.now;

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/AsyncScheduler.js
  var r4 = class extends t5 {
    constructor(e19, s21 = t5.now) {
      super(e19, s21), this.actions = [], this._active = false;
    }
    flush(e19) {
      let { actions: s21 } = this;
      if (this._active) {
        s21.push(e19);
        return;
      }
      let t18;
      this._active = true;
      do
        if (t18 = e19.execute(e19.state, e19.delay))
          break;
      while (e19 = s21.shift());
      if (this._active = false, t18) {
        for (; e19 = s21.shift(); )
          e19.unsubscribe();
        throw t18;
      }
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/AsapScheduler.js
  var d7 = class extends r4 {
    flush(e19) {
      this._active = true;
      let t18 = this._scheduled;
      this._scheduled = void 0;
      let { actions: s21 } = this, h11;
      e19 = e19 || s21.shift();
      do
        if (h11 = e19.execute(e19.state, e19.delay))
          break;
      while ((e19 = s21[0]) && e19.id === t18 && s21.shift());
      if (this._active = false, h11) {
        for (; (e19 = s21[0]) && e19.id === t18 && s21.shift(); )
          e19.unsubscribe();
        throw h11;
      }
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/asap.js
  var r5 = new d7(u5);

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/async.js
  var n4 = new r4(l5);

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/QueueAction.js
  var r6 = class extends l5 {
    constructor(t18, s21) {
      super(t18, s21), this.scheduler = t18, this.work = s21;
    }
    schedule(t18, s21 = 0) {
      return s21 > 0 ? super.schedule(t18, s21) : (this.delay = s21, this.state = t18, this.scheduler.flush(this), this);
    }
    execute(t18, s21) {
      return s21 > 0 || this.closed ? super.execute(t18, s21) : this._execute(t18, s21);
    }
    requestAsyncId(t18, s21, e19 = 0) {
      return e19 != null && e19 > 0 || e19 == null && this.delay > 0 ? super.requestAsyncId(t18, s21, e19) : (t18.flush(this), 0);
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/QueueScheduler.js
  var s4 = class extends r4 {
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/queue.js
  var o10 = new s4(r6);

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/AnimationFrameAction.js
  var u6 = class extends l5 {
    constructor(n22, t18) {
      super(n22, t18), this.scheduler = n22, this.work = t18;
    }
    requestAsyncId(n22, t18, e19 = 0) {
      return e19 !== null && e19 > 0 ? super.requestAsyncId(n22, t18, e19) : (n22.actions.push(this), n22._scheduled || (n22._scheduled = t2.requestAnimationFrame(() => n22.flush(void 0))));
    }
    recycleAsyncId(n22, t18, e19 = 0) {
      var r14;
      if (e19 != null ? e19 > 0 : this.delay > 0)
        return super.recycleAsyncId(n22, t18, e19);
      let { actions: s21 } = n22;
      t18 != null && ((r14 = s21[s21.length - 1]) === null || r14 === void 0 ? void 0 : r14.id) !== t18 && (t2.cancelAnimationFrame(t18), n22._scheduled = void 0);
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/AnimationFrameScheduler.js
  var t6 = class extends r4 {
    flush(e19) {
      this._active = true;
      let d17 = this._scheduled;
      this._scheduled = void 0;
      let { actions: s21 } = this, h11;
      e19 = e19 || s21.shift();
      do
        if (h11 = e19.execute(e19.state, e19.delay))
          break;
      while ((e19 = s21[0]) && e19.id === d17 && s21.shift());
      if (this._active = false, h11) {
        for (; (e19 = s21[0]) && e19.id === d17 && s21.shift(); )
          e19.unsubscribe();
        throw h11;
      }
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/animationFrame.js
  var n5 = new t6(u6);

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduler/VirtualTimeScheduler.js
  var n6 = class extends r4 {
    constructor(e19 = r7, t18 = 1 / 0) {
      super(e19, () => this.frame), this.maxFrames = t18, this.frame = 0, this.index = -1;
    }
    flush() {
      let { actions: e19, maxFrames: t18 } = this, s21, i22;
      for (; (i22 = e19[0]) && i22.delay <= t18 && (e19.shift(), this.frame = i22.delay, !(s21 = i22.execute(i22.state, i22.delay))); )
        ;
      if (s21) {
        for (; i22 = e19.shift(); )
          i22.unsubscribe();
        throw s21;
      }
    }
  };
  n6.frameTimeFactor = 10;
  var r7 = class extends l5 {
    constructor(e19, t18, s21 = e19.index += 1) {
      super(e19, t18), this.scheduler = e19, this.work = t18, this.index = s21, this.active = true, this.index = e19.index = s21;
    }
    schedule(e19, t18 = 0) {
      if (Number.isFinite(t18)) {
        if (!this.id)
          return super.schedule(e19, t18);
        this.active = false;
        let s21 = new r7(this.scheduler, this.work);
        return this.add(s21), s21.schedule(e19, t18);
      } else
        return e2.EMPTY;
    }
    requestAsyncId(e19, t18, s21 = 0) {
      this.delay = e19.frame + s21;
      let { actions: i22 } = e19;
      return i22.push(this), i22.sort(r7.sortActions), 1;
    }
    recycleAsyncId(e19, t18, s21 = 0) {
    }
    _execute(e19, t18) {
      if (this.active === true)
        return super._execute(e19, t18);
    }
    static sortActions(e19, t18) {
      return e19.delay === t18.delay ? e19.index === t18.index ? 0 : e19.index > t18.index ? 1 : -1 : e19.delay > t18.delay ? 1 : -1;
    }
  };

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/empty.js
  var o11 = new o6((e19) => e19.complete());

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/isScheduler.js
  function n7(r14) {
    return r14 && t(r14.schedule);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/args.js
  function n8(e19) {
    return e19[e19.length - 1];
  }
  function f4(e19) {
    return n7(n8(e19)) ? e19.pop() : void 0;
  }
  function c3(e19, o24) {
    return typeof n8(e19) == "number" ? e19.pop() : o24;
  }

  // https://esm.sh/v101/tslib@2.4.1/deno/tslib.js
  function T2(t18, e19, r14, n22) {
    function a21(o24) {
      return o24 instanceof r14 ? o24 : new r14(function(i22) {
        i22(o24);
      });
    }
    return new (r14 || (r14 = Promise))(function(o24, i22) {
      function f17(l22) {
        try {
          u16(n22.next(l22));
        } catch (y11) {
          i22(y11);
        }
      }
      function s21(l22) {
        try {
          u16(n22.throw(l22));
        } catch (y11) {
          i22(y11);
        }
      }
      function u16(l22) {
        l22.done ? o24(l22.value) : a21(l22.value).then(f17, s21);
      }
      u16((n22 = n22.apply(t18, e19 || [])).next());
    });
  }
  function d8(t18) {
    var e19 = typeof Symbol == "function" && Symbol.iterator, r14 = e19 && t18[e19], n22 = 0;
    if (r14)
      return r14.call(t18);
    if (t18 && typeof t18.length == "number")
      return { next: function() {
        return t18 && n22 >= t18.length && (t18 = void 0), { value: t18 && t18[n22++], done: !t18 };
      } };
    throw new TypeError(e19 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function h2(t18) {
    return this instanceof h2 ? (this.v = t18, this) : new h2(t18);
  }
  function M3(t18, e19, r14) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var n22 = r14.apply(t18, e19 || []), a21, o24 = [];
    return a21 = {}, i22("next"), i22("throw"), i22("return"), a21[Symbol.asyncIterator] = function() {
      return this;
    }, a21;
    function i22(c28) {
      n22[c28] && (a21[c28] = function(p22) {
        return new Promise(function(_3, x15) {
          o24.push([c28, p22, _3, x15]) > 1 || f17(c28, p22);
        });
      });
    }
    function f17(c28, p22) {
      try {
        s21(n22[c28](p22));
      } catch (_3) {
        y11(o24[0][3], _3);
      }
    }
    function s21(c28) {
      c28.value instanceof h2 ? Promise.resolve(c28.value.v).then(u16, l22) : y11(o24[0][2], c28);
    }
    function u16(c28) {
      f17("next", c28);
    }
    function l22(c28) {
      f17("throw", c28);
    }
    function y11(c28, p22) {
      c28(p22), o24.shift(), o24.length && f17(o24[0][0], o24[0][1]);
    }
  }
  function G2(t18) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var e19 = t18[Symbol.asyncIterator], r14;
    return e19 ? e19.call(t18) : (t18 = typeof d8 == "function" ? d8(t18) : t18[Symbol.iterator](), r14 = {}, n22("next"), n22("throw"), n22("return"), r14[Symbol.asyncIterator] = function() {
      return this;
    }, r14);
    function n22(o24) {
      r14[o24] = t18[o24] && function(i22) {
        return new Promise(function(f17, s21) {
          i22 = t18[o24](i22), a21(f17, s21, i22.done, i22.value);
        });
      };
    }
    function a21(o24, i22, f17, s21) {
      Promise.resolve(s21).then(function(u16) {
        o24({ value: u16, done: f17 });
      }, i22);
    }
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/isArrayLike.js
  var t7 = (e19) => e19 && typeof e19.length == "number" && typeof e19 != "function";

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/isPromise.js
  function r8(i22) {
    return t(i22?.then);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/isInteropObservable.js
  function i4(o24) {
    return t(o24[o5]);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/isAsyncIterable.js
  function o12(r14) {
    return Symbol.asyncIterator && t(r14?.[Symbol.asyncIterator]);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/throwUnobservableError.js
  function r9(e19) {
    return new TypeError(`You provided ${e19 !== null && typeof e19 == "object" ? "an invalid object" : `'${e19}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/symbol/iterator.js
  function t8() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var r10 = t8();

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/isIterable.js
  function m4(o24) {
    return t(o24?.[r10]);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/isReadableStreamLike.js
  function c4(e19) {
    return M3(this, arguments, function* () {
      let t18 = e19.getReader();
      try {
        for (; ; ) {
          let { value: a21, done: i22 } = yield h2(t18.read());
          if (i22)
            return yield h2(void 0);
          yield yield h2(a21);
        }
      } finally {
        t18.releaseLock();
      }
    });
  }
  function s5(e19) {
    return t(e19?.getReader);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/innerFrom.js
  function B3(r14) {
    if (r14 instanceof o6)
      return r14;
    if (r14 != null) {
      if (i4(r14))
        return I3(r14);
      if (t7(r14))
        return k2(r14);
      if (r8(r14))
        return A2(r14);
      if (o12(r14))
        return m5(r14);
      if (m4(r14))
        return L3(r14);
      if (s5(r14))
        return S3(r14);
    }
    throw r9(r14);
  }
  function I3(r14) {
    return new o6((e19) => {
      let o24 = r14[o5]();
      if (t(o24.subscribe))
        return o24.subscribe(e19);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function k2(r14) {
    return new o6((e19) => {
      for (let o24 = 0; o24 < r14.length && !e19.closed; o24++)
        e19.next(r14[o24]);
      e19.complete();
    });
  }
  function A2(r14) {
    return new o6((e19) => {
      r14.then((o24) => {
        e19.closed || (e19.next(o24), e19.complete());
      }, (o24) => e19.error(o24)).then(null, m2);
    });
  }
  function L3(r14) {
    return new o6((e19) => {
      for (let o24 of r14)
        if (e19.next(o24), e19.closed)
          return;
      e19.complete();
    });
  }
  function m5(r14) {
    return new o6((e19) => {
      O2(r14, e19).catch((o24) => e19.error(o24));
    });
  }
  function S3(r14) {
    return m5(c4(r14));
  }
  function O2(r14, e19) {
    var o24, n22, f17, a21;
    return T2(this, void 0, void 0, function* () {
      try {
        for (o24 = G2(r14); n22 = yield o24.next(), !n22.done; ) {
          let l22 = n22.value;
          if (e19.next(l22), e19.closed)
            return;
        }
      } catch (l22) {
        f17 = { error: l22 };
      } finally {
        try {
          n22 && !n22.done && (a21 = o24.return) && (yield a21.call(o24));
        } finally {
          if (f17)
            throw f17.error;
        }
      }
      e19.complete();
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/executeSchedule.js
  function l7(e19, d17, i22, u16 = 0, s21 = false) {
    let c28 = d17.schedule(function() {
      i22(), s21 ? e19.add(this.schedule(null, u16)) : this.unsubscribe();
    }, u16);
    if (e19.add(c28), !s21)
      return c28;
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/observeOn.js
  function a4(t18, e19 = 0) {
    return l3((r14, o24) => {
      r14.subscribe(a2(o24, (m17) => l7(o24, t18, () => o24.next(m17), e19), () => l7(o24, t18, () => o24.complete(), e19), (m17) => l7(o24, t18, () => o24.error(m17), e19)));
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/subscribeOn.js
  function c5(r14, o24 = 0) {
    return l3((t18, e19) => {
      e19.add(r14.schedule(() => t18.subscribe(e19), o24));
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduled/scheduleObservable.js
  function b2(o24, r14) {
    return B3(o24).pipe(c5(r14), a4(r14));
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduled/schedulePromise.js
  function f5(o24, r14) {
    return B3(o24).pipe(c5(r14), a4(r14));
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduled/scheduleArray.js
  function c6(t18, n22) {
    return new o6((e19) => {
      let l22 = 0;
      return n22.schedule(function() {
        l22 === t18.length ? e19.complete() : (e19.next(t18[l22++]), e19.closed || this.schedule());
      });
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduled/scheduleIterable.js
  function c7(m17, r14) {
    return new o6((t18) => {
      let e19;
      return l7(t18, r14, () => {
        e19 = m17[r10](), l7(t18, r14, () => {
          let o24, n22;
          try {
            ({ value: o24, done: n22 } = e19.next());
          } catch (i22) {
            t18.error(i22);
            return;
          }
          n22 ? t18.complete() : t18.next(o24);
        }, 0, true);
      }), () => t(e19?.return) && e19.return();
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduled/scheduleAsyncIterable.js
  function f6(t18, o24) {
    if (!t18)
      throw new Error("Iterable cannot be null");
    return new o6((e19) => {
      l7(e19, o24, () => {
        let l22 = t18[Symbol.asyncIterator]();
        l7(e19, o24, () => {
          l22.next().then((n22) => {
            n22.done ? e19.complete() : e19.next(n22.value);
          });
        }, 0, true);
      });
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduled/scheduleReadableStreamLike.js
  function n9(e19, r14) {
    return f6(c4(e19), r14);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/scheduled/scheduled.js
  function T3(r14, e19) {
    if (r14 != null) {
      if (i4(r14))
        return b2(r14, e19);
      if (t7(r14))
        return c6(r14, e19);
      if (r8(r14))
        return f5(r14, e19);
      if (o12(r14))
        return f6(r14, e19);
      if (m4(r14))
        return c7(r14, e19);
      if (s5(r14))
        return n9(r14, e19);
    }
    throw r9(r14);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/from.js
  function e8(r14, o24) {
    return o24 ? T3(r14, o24) : B3(r14);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/of.js
  function p7(...o24) {
    let r14 = f4(o24);
    return e8(o24, r14);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/throwError.js
  function p8(n22, o24) {
    let e19 = t(n22) ? n22 : () => n22, i22 = (t18) => t18.error(e19());
    return new o6(o24 ? (t18) => o24.schedule(i22, 0, t18) : i22);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/Notification.js
  var c8;
  (function(e19) {
    e19.NEXT = "N", e19.ERROR = "E", e19.COMPLETE = "C";
  })(c8 || (c8 = {}));
  var n10 = class {
    constructor(t18, o24, i22) {
      this.kind = t18, this.value = o24, this.error = i22, this.hasValue = t18 === "N";
    }
    observe(t18) {
      return E(this, t18);
    }
    do(t18, o24, i22) {
      let { kind: r14, value: l22, error: u16 } = this;
      return r14 === "N" ? t18?.(l22) : r14 === "E" ? o24?.(u16) : i22?.();
    }
    accept(t18, o24, i22) {
      var r14;
      return t((r14 = t18) === null || r14 === void 0 ? void 0 : r14.next) ? this.observe(t18) : this.do(t18, o24, i22);
    }
    toObservable() {
      let { kind: t18, value: o24, error: i22 } = this, r14 = t18 === "N" ? p7(o24) : t18 === "E" ? p8(() => i22) : t18 === "C" ? o11 : 0;
      if (!r14)
        throw new TypeError(`Unexpected notification kind ${t18}`);
      return r14;
    }
    static createNext(t18) {
      return new n10("N", t18);
    }
    static createError(t18) {
      return new n10("E", void 0, t18);
    }
    static createComplete() {
      return n10.completeNotification;
    }
  };
  n10.completeNotification = new n10("C");
  function E(e19, t18) {
    var o24, i22, r14;
    let { kind: l22, value: u16, error: s21 } = e19;
    if (typeof l22 != "string")
      throw new TypeError('Invalid notification, missing "kind"');
    l22 === "N" ? (o24 = t18.next) === null || o24 === void 0 || o24.call(t18, u16) : l22 === "E" ? (i22 = t18.error) === null || i22 === void 0 || i22.call(t18, s21) : (r14 = t18.complete) === null || r14 === void 0 || r14.call(t18);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/EmptyError.js
  var s6 = e((r14) => function() {
    r14(this), this.name = "EmptyError", this.message = "no elements in sequence";
  });

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/ArgumentOutOfRangeError.js
  var o13 = e((r14) => function() {
    r14(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  });

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/NotFoundError.js
  var e9 = e((r14) => function(o24) {
    r14(this), this.name = "NotFoundError", this.message = o24;
  });

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/SequenceError.js
  var n11 = e((r14) => function(e19) {
    r14(this), this.name = "SequenceError", this.message = e19;
  });

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/timeout.js
  var x2 = e((e19) => function(t18 = null) {
    e19(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t18;
  });

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/map.js
  function f7(e19, t18) {
    return l3((o24, r14) => {
      let p22 = 0;
      o24.subscribe(a2(r14, (a21) => {
        r14.next(e19.call(t18, a21, p22++));
      }));
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/mapOneOrManyArgs.js
  var { isArray: o14 } = Array;
  function p9(n22, r14) {
    return o14(r14) ? n22(...r14) : n22(r14);
  }
  function c9(n22) {
    return f7((r14) => p9(n22, r14));
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/argsArgArrayOrObject.js
  var { isArray: o15 } = Array;
  var { getPrototypeOf: s7, prototype: y, keys: c10 } = Object;

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/mergeInternals.js
  function S4(v7, t18, x15, c28, m17, p22, h11, r14) {
    let l22 = [], o24 = 0, C7 = 0, i22 = false, s21 = () => {
      i22 && !l22.length && !o24 && t18.complete();
    }, u16 = (f17) => o24 < c28 ? n22(f17) : l22.push(f17), n22 = (f17) => {
      p22 && t18.next(f17), o24++;
      let d17 = false;
      B3(x15(f17, C7++)).subscribe(a2(t18, (e19) => {
        m17?.(e19), p22 ? u16(e19) : t18.next(e19);
      }, () => {
        d17 = true;
      }, void 0, () => {
        if (d17)
          try {
            for (o24--; l22.length && o24 < c28; ) {
              let e19 = l22.shift();
              h11 ? l7(t18, h11, () => n22(e19)) : n22(e19);
            }
            s21();
          } catch (e19) {
            t18.error(e19);
          }
      }));
    };
    return v7.subscribe(a2(t18, u16, () => {
      i22 = true, s21();
    })), () => {
      r14?.();
    };
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/mergeMap.js
  function F4(o24, m17, f17 = 1 / 0) {
    return t(m17) ? F4((i22, r14) => f7((n22, p22) => m17(i22, n22, r14, p22))(B3(o24(i22, r14))), f17) : (typeof m17 == "number" && (f17 = m17), l3((i22, r14) => S4(i22, r14, o24, f17)));
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/mergeAll.js
  function n12(r14 = 1 / 0) {
    return F4(n2, r14);
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/fromEventPattern.js
  function s8(r14, n22, i22) {
    return i22 ? s8(r14, n22).pipe(c9(i22)) : new o6((f17) => {
      let o24 = (...t18) => f17.next(t18.length === 1 ? t18[0] : t18), p22 = r14(o24);
      return t(n22) ? () => n22(o24, p22) : void 0;
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/merge.js
  function g2(...o24) {
    let e19 = f4(o24), m17 = c3(o24, 1 / 0), r14 = o24;
    return r14.length ? r14.length === 1 ? B3(r14[0]) : n12(m17)(e8(r14, e19)) : o11;
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/observable/never.js
  var e10 = new o6(o3);

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/util/argsOrArgArray.js
  var { isArray: n13 } = Array;

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/filter.js
  function a5(t18, o24) {
    return l3((i22, r14) => {
      let n22 = 0;
      i22.subscribe(a2(r14, (e19) => t18.call(o24, e19, n22++) && r14.next(e19)));
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/defaultIfEmpty.js
  function n14(o24) {
    return l3((r14, e19) => {
      let t18 = false;
      r14.subscribe(a2(e19, (a21) => {
        t18 = true, e19.next(a21);
      }, () => {
        t18 || e19.next(o24), e19.complete();
      }));
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/take.js
  function x4(e19) {
    return e19 <= 0 ? () => o11 : l3((o24, r14) => {
      let t18 = 0;
      o24.subscribe(a2(r14, (m17) => {
        ++t18 <= e19 && (r14.next(m17), e19 <= t18 && r14.complete());
      }));
    });
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/throwIfEmpty.js
  function i11(e19 = n16) {
    return l3((o24, r14) => {
      let t18 = false;
      o24.subscribe(a2(r14, (m17) => {
        t18 = true, r14.next(m17);
      }, () => t18 ? r14.complete() : r14.error(e19())));
    });
  }
  function n16() {
    return new s6();
  }

  // https://esm.sh/v101/rxjs@7.8.0/deno/internal/operators/first.js
  function I4(t18, m17) {
    let o24 = arguments.length >= 2;
    return (r14) => r14.pipe(t18 ? a5((f17, i22) => t18(f17, i22, r14)) : n2, x4(1), o24 ? n14(m17) : i11(() => new s6()));
  }

  // https://esm.sh/v101/@extend-chrome/messages@1.2.2/deno/messages.js
  function A3(s21, r14) {
    var e19 = {};
    for (var n22 in s21)
      Object.prototype.hasOwnProperty.call(s21, n22) && r14.indexOf(n22) < 0 && (e19[n22] = s21[n22]);
    if (s21 != null && typeof Object.getOwnPropertySymbols == "function")
      for (var t18 = 0, n22 = Object.getOwnPropertySymbols(s21); t18 < n22.length; t18++)
        r14.indexOf(n22[t18]) < 0 && Object.prototype.propertyIsEnumerable.call(s21, n22[t18]) && (e19[n22[t18]] = s21[n22[t18]]);
    return e19;
  }
  var _ = /* @__PURE__ */ new Map();
  var F6 = (s21, r14) => {
    let e19 = _.get(s21);
    e19 && e19.delete(r14);
  };
  var T6 = (s21, r14) => {
    let e19 = _.get(s21);
    if (e19)
      return e19.get(r14);
  };
  var L4 = (s21, r14, e19) => {
    let n22 = _.get(s21) || /* @__PURE__ */ new Map();
    n22.set(r14, e19), _.has(s21) || _.set(s21, n22);
  };
  var k4 = (s21) => (r14) => {
    let e19 = (n22, t18) => {
      if (n22.async || n22.scope !== s21)
        return false;
      try {
        r14(n22.payload, t18);
      } catch (c28) {
        console.error("Uncaught error in chrome.runtime.onMessage listener"), console.error(c28);
      }
      return false;
    };
    chrome.runtime.onMessage.addListener(e19), L4(s21, r14, e19);
  };
  var q4 = (s21) => (r14) => {
    let e19 = (n22, t18, c28) => {
      if (n22.async && s21 === n22.scope)
        return o24(), true;
      return false;
      async function o24() {
        try {
          let i22 = (l22) => {
            c28({ success: true, payload: l22 });
          };
          await r14(n22.payload, t18, i22);
        } catch (i22) {
          let l22 = { success: false, payload: { greeting: i22.message } };
          console.error(i22), c28(l22);
        }
      }
    };
    chrome.runtime.onMessage.addListener(e19), L4(s21, r14, e19);
  };
  var N3 = (s21) => (r14) => {
    let e19 = T6(s21, r14);
    e19 && (F6(s21, r14), chrome.runtime.onMessage.removeListener(e19));
  };
  var w10 = class extends Error {
    constructor(r14) {
      var e19, n22, { coreMessage: t18 = null, coreResponse: c28 = null, message: o24 = ((n22 = (e19 = chrome.runtime) === null || e19 === void 0 ? void 0 : e19.lastError) === null || n22 === void 0 ? void 0 : n22.message) || c28?.payload.greeting || "chrome.runtime.lastError is undefined" } = r14;
      super(o24), this.coreMessage = t18, this.coreResponse = c28;
    }
  };
  var R3 = (s21) => (r14, { tabId: e19, frameId: n22 } = {}) => new Promise((t18, c28) => {
    let o24 = { async: false, tabId: e19 || null, payload: r14, scope: s21 }, i22 = (l22) => {
      if (chrome.runtime.lastError) {
        let y11 = chrome.runtime.lastError.message, b11 = "The message port closed before a response was received";
        y11 && y11.includes(b11) ? t18() : c28(new w10({ coreMessage: o24 }));
      } else
        l22 && !l22.success ? c28(l22.payload) : t18();
    };
    typeof e19 == "number" && typeof n22 == "number" ? chrome.tabs.sendMessage(e19, o24, { frameId: n22 }, i22) : typeof e19 == "number" ? chrome.tabs.sendMessage(e19, o24, i22) : chrome.runtime.sendMessage(o24, i22);
  });
  var U3 = (s21) => (r14, { tabId: e19, frameId: n22 } = {}) => new Promise((t18, c28) => {
    let o24 = { async: true, tabId: e19 || null, payload: r14, scope: s21 }, i22 = (l22) => {
      chrome.runtime.lastError || l22 === null || !l22.success ? c28(new w10({ coreMessage: o24, coreResponse: l22 })) : t18(l22.payload);
    };
    typeof e19 == "number" && typeof n22 == "number" ? chrome.tabs.sendMessage(e19, o24, { frameId: n22 }, i22) : typeof e19 == "number" ? chrome.tabs.sendMessage(e19, o24, i22) : chrome.runtime.sendMessage(o24, i22);
  });
  var S7 = (s21) => (r14 = () => true) => s21.pipe(I4(r14)).toPromise();
  function W2(s21) {
    let r14 = q4(s21), e19 = U3(s21), n22 = N3(s21), t18 = k4(s21), c28 = R3(s21);
    async function o24(a21, p22) {
      let m17 = p22 || {}, { async: g10 = false } = m17, h11 = A3(m17, ["async"]);
      return g10 ? e19(a21, h11) : c28(a21, h11);
    }
    function i22(a21) {
      p22(a21) ? t18(a21) : r14(a21);
      function p22(m17) {
        return m17.length < 3;
      }
    }
    function l22(a21) {
      return n22(a21);
    }
    let y11 = g2(s8(t18, n22), s8(r14, n22)), b11 = /* @__PURE__ */ new Set();
    function P4(a21, p22) {
      if (b11.has(a21))
        throw new Error("greeting is not unique");
      b11.add(a21);
      let { async: m17 } = p22 || {}, g10 = (u16, f17) => {
        f17 = f17 || {};
        let d17;
        typeof f17.tabId == "number" && (d17 = f17.tabId);
        let M6;
        return typeof f17.frameId == "number" && (M6 = f17.frameId), m17 ? o24({ greeting: a21, data: u16 }, { async: m17, tabId: d17, frameId: M6 }) : o24({ greeting: a21, data: u16 }, { tabId: d17, frameId: M6 });
      };
      if (g10.toTab = ({ tabId: u16 }) => m17 ? o24({ greeting: a21 }, { async: m17, tabId: u16 }) : o24({ greeting: a21 }, { tabId: u16 }), m17) {
        let u16 = y11.pipe(a5(h11), f7(([{ data: f17 }, d17, M6]) => [f17, d17, M6]), a5((f17) => f17.length === 3));
        return [g10, u16, S7(y11)];
      } else {
        let u16 = y11.pipe(a5(h11), f7(([{ data: f17 }, d17]) => [f17, d17]), a5((f17) => f17.length < 3));
        return [g10, u16, S7(u16)];
      }
      function h11([u16]) {
        return u16 && typeof u16 == "object" && u16.greeting === a21;
      }
    }
    return { send: o24, on: i22, off: l22, stream: y11, getMessage: P4 };
  }
  var z2 = "@extend-chrome/messages__root";
  var B5 = W2(z2);
  var { getMessage: H2 } = B5;

  // https://esm.sh/v101/p-throttle@5.0.0/deno/p-throttle.js
  var a16 = class extends Error {
    constructor() {
      super("Throttled function aborted"), this.name = "AbortError";
    }
  };
  function m13({ limit: i22, interval: s21, strict: f17 }) {
    if (!Number.isFinite(i22))
      throw new TypeError("Expected `limit` to be a finite number");
    if (!Number.isFinite(s21))
      throw new TypeError("Expected `interval` to be a finite number");
    let r14 = /* @__PURE__ */ new Map(), u16 = 0, c28 = 0;
    function p22() {
      let e19 = Date.now();
      return e19 - u16 > s21 ? (c28 = 1, u16 = e19, 0) : (c28 < i22 ? c28++ : (u16 += s21, c28 = 1), u16 - e19);
    }
    let n22 = [];
    function h11() {
      let e19 = Date.now();
      if (n22.length < i22)
        return n22.push(e19), 0;
      let t18 = n22.shift() + s21;
      return e19 >= t18 ? (n22.push(e19), 0) : (n22.push(t18), t18 - e19);
    }
    let w15 = f17 ? h11 : p22;
    return (e19) => {
      let t18 = function(...o24) {
        if (!t18.isEnabled)
          return (async () => e19.apply(this, o24))();
        let l22;
        return new Promise((d17, b11) => {
          l22 = setTimeout(() => {
            d17(e19.apply(this, o24)), r14.delete(l22);
          }, w15()), r14.set(l22, b11);
        });
      };
      return t18.abort = () => {
        for (let o24 of r14.keys())
          clearTimeout(o24), r14.get(o24)(new a16());
        r14.clear(), n22.splice(0, n22.length);
      }, t18.isEnabled = true, t18;
    };
  }

  // https://esm.sh/v101/@twind/core@1.0.1/deno/core.js
  var F7;
  function lt(t18) {
    return [...t18.v, (t18.i ? "!" : "") + t18.n].join(":");
  }
  function st(t18, e19 = ",") {
    return t18.map(lt).join(e19);
  }
  var W3 = typeof CSS < "u" && CSS.escape || ((t18) => t18.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function V4(t18) {
    for (var e19 = 9, r14 = t18.length; r14--; )
      e19 = Math.imul(e19 ^ t18.charCodeAt(r14), 1597334677);
    return "#" + ((e19 ^ e19 >>> 9) >>> 0).toString(36);
  }
  function kt(t18, e19 = "@media ") {
    return e19 + x12(t18).map((r14) => (typeof r14 == "string" && (r14 = { min: r14 }), r14.raw || Object.keys(r14).map((n22) => `(${n22}-width:${r14[n22]})`).join(" and "))).join(",");
  }
  function x12(t18 = []) {
    return Array.isArray(t18) ? t18 : t18 == null ? [] : [t18];
  }
  function D3() {
  }
  var w11 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function jt(t18) {
    var e19;
    return ((e19 = t18.match(/[-=:;]/g)) == null ? void 0 : e19.length) || 0;
  }
  function X2(t18) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t18) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t18), 15) << 18;
  }
  var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function at({ n: t18, i: e19, v: r14 = [] }, n22, i22, l22) {
    for (let a21 of (t18 && (t18 = lt({ n: t18, i: e19, v: r14 })), l22 = [...x12(l22)], r14)) {
      let s21 = n22.theme("screens", a21);
      for (let u16 of x12(s21 && kt(s21) || n22.v(a21))) {
        var o24;
        l22.push(u16), i22 |= s21 ? 67108864 | X2(u16) : a21 == "dark" ? 1073741824 : u16[0] == "@" ? X2(u16) : (o24 = u16, 1 << ~(/:([a-z-]+)/.test(o24) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: t18, p: i22, r: l22, i: e19 };
  }
  var ut = /* @__PURE__ */ new Map();
  function tt(t18) {
    if (t18.d) {
      let e19 = [], r14 = Y2(t18.r.reduce((n22, i22) => i22[0] == "@" ? (e19.push(i22), n22) : i22 ? Y2(n22, (l22) => Y2(i22, (o24) => {
        let a21 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o24);
        if (a21) {
          let s21 = l22.indexOf(a21[1]);
          return ~s21 ? l22.slice(0, s21) + a21[0] + l22.slice(s21 + a21[1].length) : Z2(l22, o24);
        }
        return Z2(o24, l22);
      })) : n22, "&"), (n22) => Z2(n22, t18.n ? "." + W3(t18.n) : ""));
      return r14 && e19.push(r14.replace(/:merge\((.+?)\)/g, "$1")), e19.reduceRight((n22, i22) => i22 + "{" + n22 + "}", t18.d);
    }
  }
  function Y2(t18, e19) {
    return t18.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r14, n22, i22) => e19(n22) + i22);
  }
  function Z2(t18, e19) {
    return t18.replace(/&/g, e19);
  }
  var Dt = new Intl.Collator("en", { numeric: true });
  function St(t18, e19) {
    for (var r14 = 0, n22 = t18.length; r14 < n22; ) {
      let i22 = n22 + r14 >> 1;
      0 >= Mt(t18[i22], e19) ? r14 = i22 + 1 : n22 = i22;
    }
    return n22;
  }
  function Mt(t18, e19) {
    let r14 = t18.p & w11.o;
    return r14 == (e19.p & w11.o) && (r14 == w11.b || r14 == w11.o) ? 0 : t18.p - e19.p || t18.o - e19.o || Dt.compare(t18.n, e19.n);
  }
  function H3(t18, e19) {
    return Math.round(parseInt(t18, 16) * e19);
  }
  function T7(t18, e19 = {}) {
    if (typeof t18 == "function")
      return t18(e19);
    let { opacityValue: r14 = "1", opacityVariable: n22 } = e19, i22 = n22 ? `var(${n22})` : r14;
    if (t18.includes("<alpha-value>"))
      return t18.replace("<alpha-value>", i22);
    if (t18[0] == "#" && (t18.length == 4 || t18.length == 7)) {
      let l22 = (t18.length - 1) / 3, o24 = [17, 1, 0.062272][l22 - 1];
      return `rgba(${[H3(t18.substr(1, l22), o24), H3(t18.substr(1 + l22, l22), o24), H3(t18.substr(1 + 2 * l22, l22), o24), i22]})`;
    }
    return i22 == "1" ? t18 : i22 == "0" ? "#0000" : t18.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i22})`);
  }
  function ct(t18, e19, r14, n22, i22 = []) {
    return function l22(o24, { n: a21, p: s21, r: u16 = [], i: f17 }, c28) {
      let p22 = [], d17 = "", v7 = 0, g10 = 0;
      for (let h11 in o24 || {}) {
        var y11, A5;
        let b11 = o24[h11];
        if (h11[0] == "@") {
          if (!b11)
            continue;
          if (h11[1] == "a") {
            p22.push(...ht(a21, s21, N4("" + b11), c28, s21, u16, f17, true));
            continue;
          }
          if (h11[1] == "l") {
            for (let m17 of x12(b11))
              p22.push(...l22(m17, { n: a21, p: (y11 = w11[h11[7]], s21 & ~w11.o | y11), r: u16, i: f17 }, c28));
            continue;
          }
          if (h11[1] == "i") {
            p22.push(...x12(b11).map((m17) => ({ p: -1, o: 0, r: [], d: h11 + " " + m17 })));
            continue;
          }
          if (h11[1] == "k") {
            p22.push({ p: w11.d, o: 0, r: [h11], d: l22(b11, { p: w11.d }, c28).map(tt).join("") });
            continue;
          }
          if (h11[1] == "f") {
            p22.push(...x12(b11).map((m17) => ({ p: w11.d, o: 0, r: [h11], d: l22(m17, { p: w11.d }, c28).map(tt).join("") })));
            continue;
          }
        }
        if (typeof b11 != "object" || Array.isArray(b11))
          h11 == "label" && b11 ? a21 = b11 + V4(JSON.stringify([s21, f17, o24])) : (b11 || b11 === 0) && (h11 = h11.replace(/[A-Z]/g, (m17) => "-" + m17.toLowerCase()), g10 += 1, v7 = Math.max(v7, (A5 = h11)[0] == "-" ? 0 : jt(A5) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A5) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d17 += (d17 ? ";" : "") + x12(b11).map((m17) => c28.s(h11, ft("" + m17, c28.theme) + (f17 ? " !important" : ""))).join(";"));
        else if (h11[0] == "@" || h11.includes("&")) {
          let m17 = s21;
          h11[0] == "@" && (h11 = h11.replace(/\bscreen\(([^)]+)\)/g, (C7, $3) => {
            let j9 = c28.theme("screens", $3);
            return j9 ? (m17 |= 67108864, kt(j9, "")) : C7;
          }), m17 |= X2(h11)), p22.push(...l22(b11, { n: a21, p: m17, r: [...u16, h11], i: f17 }, c28));
        } else
          p22.push(...l22(b11, { p: s21, r: [...u16, h11] }, c28));
      }
      return p22.unshift({ n: a21, p: s21, o: Math.max(0, 15 - g10) + 1.5 * Math.min(v7 || 15, 15), r: u16, d: d17 }), p22.sort(Mt);
    }(t18, at(e19, r14, n22, i22), r14);
  }
  function ft(t18, e19) {
    return t18.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r14, n22, i22, l22, o24) => {
      let a21 = e19(i22, o24);
      return typeof a21 == "function" && /color|fill|stroke/i.test(i22) ? T7(a21) : "" + a21;
    });
  }
  function pt(t18, e19) {
    let r14, n22 = [];
    for (let i22 of t18)
      i22.d && i22.n ? r14?.p == i22.p && "" + r14.r == "" + i22.r ? (r14.c = [r14.c, i22.c].filter(Boolean).join(" "), r14.d = r14.d + ";" + i22.d) : n22.push(r14 = { ...i22, n: i22.n && e19 }) : n22.push({ ...i22, n: i22.n && e19 });
    return n22;
  }
  function B6(t18, e19, r14 = w11.u, n22, i22) {
    let l22 = [];
    for (let o24 of t18)
      for (let a21 of function(s21, u16, f17, c28, p22) {
        var d17;
        s21 = { ...s21, i: s21.i || p22 };
        let v7 = function(g10, y11) {
          let A5 = ut.get(g10.n);
          return A5 ? A5(g10, y11) : y11.r(g10.n, g10.v[0] == "dark");
        }(s21, u16);
        return v7 ? typeof v7 == "string" ? ({ r: c28, p: f17 } = at(s21, u16, f17, c28), pt(B6(N4(v7), u16, f17, c28, s21.i), s21.n)) : Array.isArray(v7) ? v7.map((g10) => {
          var y11, A5;
          return { o: 0, ...g10, r: [...x12(c28), ...x12(g10.r)], p: (y11 = f17, A5 = (d17 = g10.p) != null ? d17 : f17, y11 & ~w11.o | A5) };
        }) : ct(v7, s21, u16, f17, c28) : [{ c: lt(s21), p: 0, o: 0, r: [] }];
      }(o24, e19, r14, n22, i22))
        l22.splice(St(l22, a21), 0, a21);
    return l22;
  }
  function ht(t18, e19, r14, n22, i22, l22, o24, a21) {
    return pt((a21 ? r14.flatMap((s21) => B6([s21], n22, i22, l22, o24)) : B6(r14, n22, i22, l22, o24)).map((s21) => s21.p & w11.o && (s21.n || e19 == w11.b) ? { ...s21, p: s21.p & ~w11.o | e19, o: 0 } : s21), t18);
  }
  function Ot(t18, e19, r14, n22) {
    var i22;
    return i22 = (l22, o24) => {
      let { n: a21, p: s21, r: u16, i: f17 } = at(l22, o24, e19);
      return r14 && ht(a21, e19, r14, o24, s21, u16, f17, n22);
    }, ut.set(t18, i22), t18;
  }
  function K2(t18, e19) {
    if (t18[t18.length - 1] != "(") {
      let r14 = [], n22 = false, i22 = false, l22 = "";
      for (let o24 of t18)
        if (!(o24 == "(" || /[~@]$/.test(o24))) {
          if (o24[0] == "!" && (o24 = o24.slice(1), n22 = !n22), o24.endsWith(":")) {
            r14[o24 == "dark:" ? "unshift" : "push"](o24.slice(0, -1));
            continue;
          }
          o24[0] == "-" && (o24 = o24.slice(1), i22 = !i22), o24.endsWith("-") && (o24 = o24.slice(0, -1)), o24 && o24 != "&" && (l22 += (l22 && "-") + o24);
        }
      l22 && (i22 && (l22 = "-" + l22), e19[0].push({ n: l22, v: r14.filter(Jt), i: n22 }));
    }
  }
  function Jt(t18, e19, r14) {
    return r14.indexOf(t18) == e19;
  }
  var yt = /* @__PURE__ */ new Map();
  function N4(t18) {
    let e19 = yt.get(t18);
    if (!e19) {
      let r14 = [], n22 = [[]], i22 = 0, l22 = 0, o24 = null, a21 = 0, s21 = (u16, f17 = 0) => {
        i22 != a21 && (r14.push(t18.slice(i22, a21 + f17)), u16 && K2(r14, n22)), i22 = a21 + 1;
      };
      for (; a21 < t18.length; a21++) {
        let u16 = t18[a21];
        if (l22)
          t18[a21 - 1] != "\\" && (l22 += +(u16 == "[") || -(u16 == "]"));
        else if (u16 == "[")
          l22 += 1;
        else if (o24)
          t18[a21 - 1] != "\\" && o24.test(t18.slice(a21)) && (o24 = null, i22 = a21 + RegExp.lastMatch.length);
        else if (u16 == "/" && t18[a21 - 1] != "\\" && (t18[a21 + 1] == "*" || t18[a21 + 1] == "/"))
          o24 = t18[a21 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (u16 == "(")
          s21(), r14.push(u16);
        else if (u16 == ":")
          t18[a21 + 1] != ":" && s21(false, 1);
        else if (/[\s,)]/.test(u16)) {
          s21(true);
          let f17 = r14.lastIndexOf("(");
          if (u16 == ")") {
            let c28 = r14[f17 - 1];
            if (/[~@]$/.test(c28)) {
              let p22 = n22.shift();
              r14.length = f17, K2([...r14, "#"], n22);
              let { v: d17 } = n22[0].pop();
              for (let v7 of p22)
                v7.v.splice(+(v7.v[0] == "dark") - +(d17[0] == "dark"), d17.length);
              K2([...r14, Ot(c28.length > 1 ? c28.slice(0, -1) + V4(JSON.stringify([c28, p22])) : c28 + "(" + st(p22) + ")", w11.a, p22, /@$/.test(c28))], n22);
            }
            f17 = r14.lastIndexOf("(", f17 - 1);
          }
          r14.length = f17 + 1;
        } else
          /[~@]/.test(u16) && t18[a21 + 1] == "(" && n22.unshift([]);
      }
      s21(true), yt.set(t18, e19 = n22[0]);
    }
    return e19;
  }
  function Ct(t18, e19, r14) {
    return e19.reduce((n22, i22, l22) => n22 + r14(i22) + t18[l22 + 1], t18[0]);
  }
  function G3(t18, e19) {
    return Array.isArray(t18) && Array.isArray(t18.raw) ? Ct(t18, e19, (r14) => Q2(r14).trim()) : e19.filter(Boolean).reduce((r14, n22) => r14 + Q2(n22), t18 ? Q2(t18) : "");
  }
  function Q2(t18) {
    let e19, r14 = "";
    if (t18 && typeof t18 == "object")
      if (Array.isArray(t18))
        (e19 = G3(t18[0], t18.slice(1))) && (r14 += " " + e19);
      else
        for (let n22 in t18)
          t18[n22] && (r14 += " " + n22);
    else
      t18 != null && typeof t18 != "boolean" && (r14 += " " + t18);
    return r14;
  }
  var ae = Et("@");
  var ue = Et("~");
  function Et(t18) {
    return new Proxy(function(r14, ...n22) {
      return e19("", r14, n22);
    }, { get: (r14, n22) => n22 in r14 ? r14[n22] : function(i22, ...l22) {
      return e19(n22, i22, l22);
    } });
    function e19(r14, n22, i22) {
      return st(N4(r14 + t18 + "(" + G3(n22, i22) + ")"));
    }
  }
  function U4(t18, e19) {
    return Array.isArray(t18) ? mt(Ct(t18, e19, (r14) => r14 != null && typeof r14 != "boolean" ? r14 : "")) : typeof t18 == "string" ? mt(t18) : [t18];
  }
  var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function mt(t18) {
    let e19;
    t18 = t18.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r14 = [{}], n22 = [r14[0]], i22 = [];
    for (; e19 = Bt.exec(t18); )
      e19[4] && (r14.shift(), i22.shift()), e19[3] ? (i22.unshift(e19[3]), r14.unshift({}), n22.push(i22.reduce((l22, o24) => ({ [o24]: l22 }), r14[0]))) : e19[4] || (r14[0][e19[1]] && (r14.unshift({}), n22.push(i22.reduce((l22, o24) => ({ [o24]: l22 }), r14[0]))), r14[0][e19[1]] = e19[2]);
    return n22;
  }
  function dt(t18, ...e19) {
    var r14, n22;
    let i22 = U4(t18, e19), l22 = (((r14 = i22.find((o24) => o24.label)) == null ? void 0 : r14.label) || "css") + V4(JSON.stringify(i22));
    return n22 = (o24, a21) => pt(i22.flatMap((s21) => ct(s21, o24, a21, w11.o)), l22), ut.set(l22, n22), l22;
  }
  var ce2 = new Proxy(function(t18, e19) {
    return bt("animation", t18, e19);
  }, { get: (t18, e19) => e19 in t18 ? t18[e19] : function(r14, n22) {
    return bt(e19, r14, n22);
  } });
  function bt(t18, e19, r14) {
    return { toString: () => dt({ label: t18, "@layer components": { ...typeof e19 == "object" ? e19 : { animation: e19 }, animationName: "" + r14 } }) };
  }
  var Ut = Symbol();
  var z3 = new Proxy(D3, { apply: (t18, e19, r14) => F7(r14[0]), get(t18, e19) {
    let r14 = F7[e19];
    return typeof r14 == "function" ? function() {
      return r14.apply(F7, arguments);
    } : r14;
  } });
  var xe = function t15(e19) {
    return new Proxy(function(r14, ...n22) {
      return xt(e19, "", r14, n22);
    }, { get: (r14, n22) => n22 === "bind" ? t15 : n22 in r14 ? r14[n22] : function(i22, ...l22) {
      return xt(e19, n22, i22, l22);
    } });
  }();
  function xt(t18, e19, r14, n22) {
    return { toString() {
      let i22 = U4(r14, n22), l22 = W3(e19 + V4(JSON.stringify([e19, i22])));
      return (typeof t18 == "function" ? t18 : z3)(dt({ [`@keyframes ${l22}`]: U4(r14, n22) })), l22;
    } };
  }

  // https://esm.sh/v101/@twind/preset-tailwind@1.0.1/deno/defaultTheme.js
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
  var H4 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: l16, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...a17(4, "rem", 4, 0.5, 0.5), ...a17(12, "rem", 4, 5), 14: "3.5rem", ...a17(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: o20("blur"), backdropBrightness: o20("brightness"), backdropContrast: o20("contrast"), backdropGrayscale: o20("grayscale"), backdropHueRotate: o20("hueRotate"), backdropInvert: o20("invert"), backdropOpacity: o20("opacity"), backdropSaturate: o20("saturate"), backdropSepia: o20("sepia"), backgroundColor: o20("colors"), backgroundImage: { none: "none" }, backgroundOpacity: o20("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...a17(200, "", 100, 0, 50), ...a17(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e19 }) => ({ DEFAULT: e19("colors.gray.200", "currentColor"), ...e19("colors") }), borderOpacity: o20("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: o20("spacing"), borderWidth: { DEFAULT: "1px", ...n20(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: o20("colors"), caretColor: o20("colors"), accentColor: ({ theme: e19 }) => ({ auto: "auto", ...e19("colors") }), contrast: { ...a17(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: o20("borderColor"), divideOpacity: o20("borderOpacity"), divideWidth: o20("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: o20("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e19 }) => ({ ...e19("spacing"), ...i18(2, 6), ...i18(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: o20("spacing"), gradientColorStops: o20("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e19 }) => ({ ...e19("spacing"), ...i18(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e19 }) => ({ ...e19("spacing"), ...i18(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...a17(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e19 }) => ({ auto: "auto", ...e19("spacing") }), maxHeight: ({ theme: e19 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e19("spacing") }), maxWidth: ({ theme: e19, breakpoints: f17 }) => ({ ...f17(e19("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...a17(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: o20("spacing"), placeholderColor: o20("colors"), placeholderOpacity: o20("opacity"), outlineColor: o20("colors"), outlineOffset: n20(8, "px"), outlineWidth: n20(8, "px"), ringColor: ({ theme: e19 }) => ({ ...e19("colors"), DEFAULT: e19("colors.blue.500", "#3b82f6") }), ringOffsetColor: o20("colors"), ringOffsetWidth: n20(8, "px"), ringOpacity: ({ theme: e19 }) => ({ ...e19("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...n20(8, "px") }, rotate: { ...n20(2, "deg"), ...n20(12, "deg", 3), ...n20(180, "deg", 45) }, saturate: a17(200, "", 100, 0, 50), scale: { ...a17(150, "", 100, 0, 50), ...a17(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: o20("spacing"), scrollPadding: o20("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...n20(2, "deg"), ...n20(12, "deg", 3) }, space: o20("spacing"), stroke: o20("colors"), strokeWidth: a17(2), textColor: o20("colors"), textDecorationColor: o20("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...n20(8, "px") }, textUnderlineOffset: { auto: "auto", ...n20(8, "px") }, textIndent: o20("spacing"), textOpacity: o20("opacity"), transitionDuration: ({ theme: e19 }) => ({ ...e19("durations"), DEFAULT: "150ms" }), transitionDelay: o20("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e19 }) => ({ ...e19("spacing"), ...i18(2, 4), full: "100%" }), width: ({ theme: e19 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e19("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...a17(50, "", 1, 0, 10), auto: "auto" } };
  function i18(e19, f17) {
    let t18 = {};
    do
      for (var r14 = 1; r14 < e19; r14++)
        t18[`${r14}/${e19}`] = Number((r14 / e19 * 100).toFixed(6)) + "%";
    while (++e19 <= f17);
    return t18;
  }
  function n20(e19, f17, t18 = 0) {
    let r14 = {};
    for (; t18 <= e19; t18 = 2 * t18 || 1)
      r14[t18] = t18 + f17;
    return r14;
  }
  function a17(e19, f17 = "", t18 = 1, r14 = 0, m17 = 1, c28 = {}) {
    for (; r14 <= e19; r14 += m17)
      c28[r14] = r14 / t18 + f17;
    return c28;
  }
  function o20(e19) {
    return ({ theme: f17 }) => f17(e19);
  }

  // https://esm.sh/v101/@twind/preset-tailwind@1.0.1/deno/preflight.js
  var i19 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${H4.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${H4.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } };

  // https://esm.sh/v101/@twind/core@1.1.2/deno/core.js
  var B7;
  function ae2(e19) {
    return [...e19.v, (e19.i ? "!" : "") + e19.n].join(":");
  }
  function ue2(e19, t18 = ",") {
    return e19.map(ae2).join(t18);
  }
  var Y3 = typeof CSS < "u" && CSS.escape || ((e19) => e19.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function T9(e19) {
    for (var t18 = 9, r14 = e19.length; r14--; )
      t18 = Math.imul(t18 ^ e19.charCodeAt(r14), 1597334677);
    return "#" + ((t18 ^ t18 >>> 9) >>> 0).toString(36);
  }
  function Ce(e19, t18 = "@media ") {
    return t18 + b10(e19).map((r14) => (typeof r14 == "string" && (r14 = { min: r14 }), r14.raw || Object.keys(r14).map((i22) => `(${i22}-width:${r14[i22]})`).join(" and "))).join(",");
  }
  function b10(e19 = []) {
    return Array.isArray(e19) ? e19 : e19 == null ? [] : [e19];
  }
  function F9() {
  }
  var S9 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function Ee(e19) {
    return e19.match(/[-=:;]/g)?.length || 0;
  }
  function re2(e19) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e19) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e19), 15) << 18;
  }
  var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function ce3({ n: e19, i: t18, v: r14 = [] }, i22, n22, l22) {
    e19 && (e19 = ae2({ n: e19, i: t18, v: r14 })), l22 = [...b10(l22)];
    for (let s21 of r14) {
      let f17 = i22.theme("screens", s21);
      for (let a21 of b10(f17 && Ce(f17) || i22.v(s21))) {
        var o24;
        l22.push(a21), n22 |= f17 ? 67108864 | re2(a21) : s21 == "dark" ? 1073741824 : a21[0] == "@" ? re2(a21) : (o24 = a21, 1 << ~(/:([a-z-]+)/.test(o24) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: e19, p: n22, r: l22, i: t18 };
  }
  var pe = /* @__PURE__ */ new Map();
  function ne2(e19) {
    if (e19.d) {
      let t18 = [], r14 = H5(e19.r.reduce((i22, n22) => n22[0] == "@" ? (t18.push(n22), i22) : n22 ? H5(i22, (l22) => H5(n22, (o24) => {
        let s21 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o24);
        if (s21) {
          let f17 = l22.indexOf(s21[1]);
          return ~f17 ? l22.slice(0, f17) + s21[0] + l22.slice(f17 + s21[1].length) : Q3(l22, o24);
        }
        return Q3(o24, l22);
      })) : i22, "&"), (i22) => Q3(i22, e19.n ? "." + Y3(e19.n) : ""));
      return r14 && t18.push(r14.replace(/:merge\((.+?)\)/g, "$1")), t18.reduceRight((i22, n22) => n22 + "{" + i22 + "}", e19.d);
    }
  }
  function H5(e19, t18) {
    return e19.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r14, i22, n22) => t18(i22) + n22);
  }
  function Q3(e19, t18) {
    return e19.replace(/&/g, t18);
  }
  var $e = new Intl.Collator("en", { numeric: true });
  function Me(e19, t18) {
    for (var r14 = 0, i22 = e19.length; r14 < i22; ) {
      let n22 = i22 + r14 >> 1;
      0 >= Ne(e19[n22], t18) ? r14 = n22 + 1 : i22 = n22;
    }
    return i22;
  }
  function Ne(e19, t18) {
    let r14 = e19.p & S9.o;
    return r14 == (t18.p & S9.o) && (r14 == S9.b || r14 == S9.o) ? 0 : e19.p - t18.p || e19.o - t18.o || $e.compare(we(e19.n), we(t18.n)) || $e.compare(Ae(e19.n), Ae(t18.n));
  }
  function we(e19) {
    return (e19 || "").split(/:/).pop().split("/").pop() || "\0";
  }
  function Ae(e19) {
    return (e19 || "").replace(/\W/g, (t18) => String.fromCharCode(127 + t18.charCodeAt(0))) + "\0";
  }
  function X3(e19, t18) {
    return Math.round(parseInt(e19, 16) * t18);
  }
  function P3(e19, t18 = {}) {
    if (typeof e19 == "function")
      return e19(t18);
    let { opacityValue: r14 = "1", opacityVariable: i22 } = t18, n22 = i22 ? `var(${i22})` : r14;
    if (e19.includes("<alpha-value>"))
      return e19.replace("<alpha-value>", n22);
    if (e19[0] == "#" && (e19.length == 4 || e19.length == 7)) {
      let l22 = (e19.length - 1) / 3, o24 = [17, 1, 0.062272][l22 - 1];
      return `rgba(${[X3(e19.substr(1, l22), o24), X3(e19.substr(1 + l22, l22), o24), X3(e19.substr(1 + 2 * l22, l22), o24), n22]})`;
    }
    return n22 == "1" ? e19 : n22 == "0" ? "#0000" : e19.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n22})`);
  }
  function de(e19, t18, r14, i22, n22 = []) {
    return function l22(o24, { n: s21, p: f17, r: a21 = [], i: c28 }, u16) {
      let p22 = [], g10 = "", h11 = 0, $3 = 0;
      for (let y11 in o24 || {}) {
        var A5, R6;
        let d17 = o24[y11];
        if (y11[0] == "@") {
          if (!d17)
            continue;
          if (y11[1] == "a") {
            p22.push(...ge(s21, f17, I7("" + d17), u16, f17, a21, c28, true));
            continue;
          }
          if (y11[1] == "l") {
            for (let w15 of b10(d17))
              p22.push(...l22(w15, { n: s21, p: (A5 = S9[y11[7]], f17 & ~S9.o | A5), r: a21, i: c28 }, u16));
            continue;
          }
          if (y11[1] == "i") {
            p22.push(...b10(d17).map((w15) => ({ p: -1, o: 0, r: [], d: y11 + " " + w15 })));
            continue;
          }
          if (y11[1] == "k") {
            p22.push({ p: S9.d, o: 0, r: [y11], d: l22(d17, { p: S9.d }, u16).map(ne2).join("") });
            continue;
          }
          if (y11[1] == "f") {
            p22.push(...b10(d17).map((w15) => ({ p: S9.d, o: 0, r: [y11], d: l22(w15, { p: S9.d }, u16).map(ne2).join("") })));
            continue;
          }
        }
        if (typeof d17 != "object" || Array.isArray(d17))
          y11 == "label" && d17 ? s21 = d17 + T9(JSON.stringify([f17, c28, o24])) : (d17 || d17 === 0) && (y11 = y11.replace(/[A-Z]/g, (w15) => "-" + w15.toLowerCase()), $3 += 1, h11 = Math.max(h11, (R6 = y11)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g10 += (g10 ? ";" : "") + b10(d17).map((w15) => u16.s(y11, he("" + w15, u16.theme) + (c28 ? " !important" : ""))).join(";"));
        else if (y11[0] == "@" || y11.includes("&")) {
          let w15 = f17;
          y11[0] == "@" && (y11 = y11.replace(/\bscreen\(([^)]+)\)/g, (j9, M6) => {
            let N6 = u16.theme("screens", M6);
            return N6 ? (w15 |= 67108864, Ce(N6, "")) : j9;
          }), w15 |= re2(y11)), p22.push(...l22(d17, { n: s21, p: w15, r: [...a21, y11], i: c28 }, u16));
        } else
          p22.push(...l22(d17, { p: f17, r: [...a21, y11] }, u16));
      }
      return p22.unshift({ n: s21, p: f17, o: Math.max(0, 15 - $3) + 1.5 * Math.min(h11 || 15, 15), r: a21, d: g10 }), p22.sort(Ne);
    }(e19, ce3(t18, r14, i22, n22), r14);
  }
  function he(e19, t18) {
    return e19.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r14, i22, n22, l22, o24 = "") => {
      let s21 = t18(n22, o24);
      return typeof s21 == "function" && /color|fill|stroke/i.test(n22) ? P3(s21) : "" + b10(s21).filter((f17) => Object(f17) !== f17);
    });
  }
  function ye(e19, t18) {
    let r14, i22 = [];
    for (let n22 of e19)
      n22.d && n22.n ? r14?.p == n22.p && "" + r14.r == "" + n22.r ? (r14.c = [r14.c, n22.c].filter(Boolean).join(" "), r14.d = r14.d + ";" + n22.d) : i22.push(r14 = { ...n22, n: n22.n && t18 }) : i22.push({ ...n22, n: n22.n && t18 });
    return i22;
  }
  function W5(e19, t18, r14 = S9.u, i22, n22) {
    let l22 = [];
    for (let o24 of e19)
      for (let s21 of function(f17, a21, c28, u16, p22) {
        f17 = { ...f17, i: f17.i || p22 };
        let g10 = function(h11, $3) {
          let A5 = pe.get(h11.n);
          return A5 ? A5(h11, $3) : $3.r(h11.n, h11.v[0] == "dark");
        }(f17, a21);
        return g10 ? typeof g10 == "string" ? ({ r: u16, p: c28 } = ce3(f17, a21, c28, u16), ye(W5(I7(g10), a21, c28, u16, f17.i), f17.n)) : Array.isArray(g10) ? g10.map((h11) => {
          var $3, A5;
          return { o: 0, ...h11, r: [...b10(u16), ...b10(h11.r)], p: ($3 = c28, A5 = h11.p ?? c28, $3 & ~S9.o | A5) };
        }) : de(g10, f17, a21, c28, u16) : [{ c: ae2(f17), p: 0, o: 0, r: [] }];
      }(o24, t18, r14, i22, n22))
        l22.splice(Me(l22, s21), 0, s21);
    return l22;
  }
  function ge(e19, t18, r14, i22, n22, l22, o24, s21) {
    return ye((s21 ? r14.flatMap((f17) => W5([f17], i22, n22, l22, o24)) : W5(r14, i22, n22, l22, o24)).map((f17) => f17.p & S9.o && (f17.n || t18 == S9.b) ? { ...f17, p: f17.p & ~S9.o | t18, o: 0 } : f17), e19);
  }
  function _e2(e19, t18, r14, i22) {
    var n22;
    return n22 = (l22, o24) => {
      let { n: s21, p: f17, r: a21, i: c28 } = ce3(l22, o24, t18);
      return r14 && ge(s21, t18, r14, o24, f17, a21, c28, i22);
    }, pe.set(e19, n22), e19;
  }
  function K3(e19, t18, r14) {
    if (e19[e19.length - 1] != "(") {
      let i22 = [], n22 = false, l22 = false, o24 = "";
      for (let s21 of e19)
        if (!(s21 == "(" || /[~@]$/.test(s21))) {
          if (s21[0] == "!" && (s21 = s21.slice(1), n22 = !n22), s21.endsWith(":")) {
            i22[s21 == "dark:" ? "unshift" : "push"](s21.slice(0, -1));
            continue;
          }
          s21[0] == "-" && (s21 = s21.slice(1), l22 = !l22), s21.endsWith("-") && (s21 = s21.slice(0, -1)), s21 && s21 != "&" && (o24 += (o24 && "-") + s21);
        }
      o24 && (l22 && (o24 = "-" + o24), t18[0].push({ n: o24, v: i22.filter(Be), i: n22 }));
    }
  }
  function Be(e19, t18, r14) {
    return r14.indexOf(e19) == t18;
  }
  var Se = /* @__PURE__ */ new Map();
  function I7(e19) {
    let t18 = Se.get(e19);
    if (!t18) {
      let r14 = [], i22 = [[]], n22 = 0, l22 = 0, o24 = null, s21 = 0, f17 = (a21, c28 = 0) => {
        n22 != s21 && (r14.push(e19.slice(n22, s21 + c28)), a21 && K3(r14, i22)), n22 = s21 + 1;
      };
      for (; s21 < e19.length; s21++) {
        let a21 = e19[s21];
        if (l22)
          e19[s21 - 1] != "\\" && (l22 += +(a21 == "[") || -(a21 == "]"));
        else if (a21 == "[")
          l22 += 1;
        else if (o24)
          e19[s21 - 1] != "\\" && o24.test(e19.slice(s21)) && (o24 = null, n22 = s21 + RegExp.lastMatch.length);
        else if (a21 == "/" && e19[s21 - 1] != "\\" && (e19[s21 + 1] == "*" || e19[s21 + 1] == "/"))
          o24 = e19[s21 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (a21 == "(")
          f17(), r14.push(a21);
        else if (a21 == ":")
          e19[s21 + 1] != ":" && f17(false, 1);
        else if (/[\s,)]/.test(a21)) {
          f17(true);
          let c28 = r14.lastIndexOf("(");
          if (a21 == ")") {
            let u16 = r14[c28 - 1];
            if (/[~@]$/.test(u16)) {
              let p22 = i22.shift();
              r14.length = c28, K3([...r14, "#"], i22);
              let { v: g10 } = i22[0].pop();
              for (let h11 of p22)
                h11.v.splice(+(h11.v[0] == "dark") - +(g10[0] == "dark"), g10.length);
              K3([...r14, _e2(u16.length > 1 ? u16.slice(0, -1) + T9(JSON.stringify([u16, p22])) : u16 + "(" + ue2(p22) + ")", S9.a, p22, /@$/.test(u16))], i22);
            }
            c28 = r14.lastIndexOf("(", c28 - 1);
          }
          r14.length = c28 + 1;
        } else
          /[~@]/.test(a21) && e19[s21 + 1] == "(" && i22.unshift([]);
      }
      f17(true), Se.set(e19, t18 = i22[0]);
    }
    return t18;
  }
  function Ve(e19, t18, r14) {
    return t18.reduce((i22, n22, l22) => i22 + r14(n22) + e19[l22 + 1], e19[0]);
  }
  function Z3(e19, t18) {
    return Array.isArray(e19) && Array.isArray(e19.raw) ? Ve(e19, t18, (r14) => ee2(r14).trim()) : t18.filter(Boolean).reduce((r14, i22) => r14 + ee2(i22), e19 ? ee2(e19) : "");
  }
  function ee2(e19) {
    let t18, r14 = "";
    if (e19 && typeof e19 == "object")
      if (Array.isArray(e19))
        (t18 = Z3(e19[0], e19.slice(1))) && (r14 += " " + t18);
      else
        for (let i22 in e19)
          e19[i22] && (r14 += " " + i22);
    else
      e19 != null && typeof e19 != "boolean" && (r14 += " " + e19);
    return r14;
  }
  var pt2 = ze("@");
  var dt2 = ze("~");
  function ze(e19) {
    return new Proxy(function(i22, ...n22) {
      return t18("", i22, n22);
    }, { get(r14, i22) {
      return i22 in r14 ? r14[i22] : function(l22, ...o24) {
        return t18(i22, l22, o24);
      };
    } });
    function t18(r14, i22, n22) {
      return ue2(I7(r14 + e19 + "(" + Z3(i22, n22) + ")"));
    }
  }
  function G4(e19, t18) {
    return Array.isArray(e19) ? ve(Ve(e19, t18, (r14) => r14 != null && typeof r14 != "boolean" ? r14 : "")) : typeof e19 == "string" ? ve(e19) : [e19];
  }
  var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function ve(e19) {
    let t18;
    e19 = e19.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r14 = [{}], i22 = [r14[0]], n22 = [];
    for (; t18 = We.exec(e19); )
      t18[4] && (r14.shift(), n22.shift()), t18[3] ? (n22.unshift(t18[3]), r14.unshift({}), i22.push(n22.reduce((l22, o24) => ({ [o24]: l22 }), r14[0]))) : t18[4] || (r14[0][t18[1]] && (r14.unshift({}), i22.push(n22.reduce((l22, o24) => ({ [o24]: l22 }), r14[0]))), r14[0][t18[1]] = t18[2]);
    return i22;
  }
  function me(e19, ...t18) {
    var r14;
    let i22 = G4(e19, t18), n22 = (i22.find((l22) => l22.label)?.label || "css") + T9(JSON.stringify(i22));
    return r14 = (l22, o24) => ye(i22.flatMap((s21) => de(s21, l22, o24, S9.o)), n22), pe.set(n22, r14), n22;
  }
  var ht2 = new Proxy(function(e19, t18) {
    return Re("animation", e19, t18);
  }, { get(e19, t18) {
    return t18 in e19 ? e19[t18] : function(i22, n22) {
      return Re(t18, i22, n22);
    };
  } });
  function Re(e19, t18, r14) {
    return { toString() {
      return me({ label: e19, "@layer components": { ...typeof t18 == "object" ? t18 : { animation: t18 }, animationName: "" + r14 } });
    } };
  }
  function yt2(e19, t18, r14) {
    return [e19, ie(t18, r14)];
  }
  function ie(e19, t18) {
    return typeof e19 == "function" ? e19 : typeof e19 == "string" && /^[\w-]+$/.test(e19) ? (r14, i22) => ({ [e19]: t18 ? t18(r14, i22) : le(r14, 1) }) : (r14) => e19 || { [r14[1]]: le(r14, 2) };
  }
  function le(e19, t18, r14 = e19.slice(t18).find(Boolean) || e19.$$ || e19.input) {
    return e19.input[0] == "-" ? `calc(${r14} * -1)` : r14;
  }
  function gt(e19, t18, r14, i22) {
    return [e19, Ge(t18, r14, i22)];
  }
  function Ge(e19, t18, r14) {
    let i22 = typeof t18 == "string" ? (n22, l22) => ({ [t18]: r14 ? r14(n22, l22) : n22._ }) : t18 || (({ 1: n22, _: l22 }, o24, s21) => ({ [n22 || s21]: l22 }));
    return (n22, l22) => {
      let o24 = ke(e19 || n22[1]), s21 = l22.theme(o24, n22.$$) ?? oe2(n22.$$, o24, l22);
      if (s21 != null)
        return n22._ = le(n22, 0, s21), i22(n22, l22, o24);
    };
  }
  function mt2(e19, t18 = {}, r14) {
    return [e19, Ye(t18, r14)];
  }
  function Ye(e19 = {}, t18) {
    return (r14, i22) => {
      let { section: n22 = ke(r14[0]).replace("-", "") + "Color" } = e19, [l22, o24] = Ze(r14.$$);
      if (!l22)
        return;
      let s21 = i22.theme(n22, l22) || oe2(l22, n22, i22);
      if (!s21 || typeof s21 == "object")
        return;
      let { opacityVariable: f17 = `--tw-${r14[0].replace(/-$/, "")}-opacity`, opacitySection: a21 = n22.replace("Color", "Opacity"), property: c28 = n22, selector: u16 } = e19, p22 = i22.theme(a21, o24 || "DEFAULT") || o24 && oe2(o24, a21, i22), g10 = t18 || (({ _: $3 }) => {
        let A5 = He(c28, $3);
        return u16 ? { [u16]: A5 } : A5;
      });
      r14._ = { value: P3(s21, { opacityVariable: f17 || void 0, opacityValue: p22 || void 0 }), color: ($3) => P3(s21, $3), opacityVariable: f17 || void 0, opacityValue: p22 || void 0 };
      let h11 = g10(r14, i22);
      if (!r14.dark) {
        let $3 = i22.d(n22, l22, s21);
        $3 && $3 !== s21 && (r14._ = { value: P3($3, { opacityVariable: f17 || void 0, opacityValue: p22 || "1" }), color: (A5) => P3($3, A5), opacityVariable: f17 || void 0, opacityValue: p22 || void 0 }, h11 = { "&": h11, [i22.v("dark")]: g10(r14, i22) });
      }
      return h11;
    };
  }
  function Ze(e19) {
    return (e19.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
  }
  function He(e19, t18) {
    let r14 = {};
    return typeof t18 == "string" ? r14[e19] = t18 : (t18.opacityVariable && t18.value.includes(t18.opacityVariable) && (r14[t18.opacityVariable] = t18.opacityValue || "1"), r14[e19] = t18.value), r14;
  }
  function oe2(e19, t18, r14) {
    if (e19[0] == "[" && e19.slice(-1) == "]") {
      if (e19 = se(he(e19.slice(1, -1), r14.theme)), !t18)
        return e19;
      if (!(/color|fill|stroke/i.test(t18) && !(/^color:/.test(e19) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e19)) || /image/i.test(t18) && !(/^image:/.test(e19) || /^[a-z-]+\(/.test(e19)) || /weight/i.test(t18) && !(/^(number|any):/.test(e19) || /^\d+$/.test(e19)) || /position/i.test(t18) && /^(length|size):/.test(e19)))
        return e19.replace(/^[a-z-]+:/, "");
    }
  }
  function ke(e19) {
    return e19.replace(/-./g, (t18) => t18[1].toUpperCase());
  }
  function se(e19) {
    return e19.includes("url(") ? e19.replace(/(.*?)(url\(.*?\))(.*?)/g, (t18, r14 = "", i22, n22 = "") => se(r14) + i22 + se(n22)) : e19.replace(/(^|[^\\])_+/g, (t18, r14) => r14 + " ".repeat(t18.length - r14.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t18) => t18.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
  }
  var Qe = Symbol();
  var D5 = new Proxy(F9, { apply(e19, t18, r14) {
    return B7(r14[0]);
  }, get(e19, t18) {
    let r14 = B7[t18];
    return typeof r14 == "function" ? function() {
      return r14.apply(B7, arguments);
    } : r14;
  } });
  var Rt = function e17(t18) {
    return new Proxy(function(i22, ...n22) {
      return xe2(t18, "", i22, n22);
    }, { get(r14, i22) {
      return i22 === "bind" ? e17 : i22 in r14 ? r14[i22] : function(l22, ...o24) {
        return xe2(t18, i22, l22, o24);
      };
    } });
  }();
  function xe2(e19, t18, r14, i22) {
    return { toString() {
      let n22 = G4(r14, i22), l22 = Y3(t18 + T9(JSON.stringify([t18, n22])));
      return (typeof e19 == "function" ? e19 : D5)(me({ [`@keyframes ${l22}`]: G4(r14, i22) })), l22;
    } };
  }

  // https://esm.sh/v101/@twind/preset-tailwind@1.0.1/deno/rules.js
  var j7 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: t18, 2: r14 }, a21) => ({ "@layer overrides": { "&": { [t18]: oe2(`[${r14}]`, t18, a21) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: t18 }, { h: r14 }) => [{ c: r14(t18) }]), gt("aspect-", "aspectRatio"), yt2("container", (t18, { theme: r14 }) => {
    let { screens: a21 = r14("screens"), center: i22, padding: l22 } = r14("container"), d17 = { width: "100%", marginRight: i22 && "auto", marginLeft: i22 && "auto", ...g10("xs") };
    for (let f17 in a21) {
      let c28 = a21[f17];
      typeof c28 == "string" && (d17[Ce(c28)] = { "&": { maxWidth: c28, ...g10(f17) } });
    }
    return d17;
    function g10(f17) {
      let c28 = l22 && (typeof l22 == "string" ? l22 : l22[f17] || l22.DEFAULT);
      if (c28)
        return { paddingRight: c28, paddingLeft: c28 };
    }
  }), gt("content-", "content", ({ _: t18 }) => ({ "--tw-content": t18, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: t18 }) => t18 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", u13), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: t18 = "", 2: r14 }) => ({ ["overscroll-behavior" + t18]: r14 })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: t18, _: r14 }) => ({ top: t18 != "-x" && r14, right: t18 != "-y" && r14, bottom: t18 != "-x" && r14, left: t18 != "-y" && r14 })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", v5), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", $2), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", S10), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", $2), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", S10), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (t18) => u13(v5(t18))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", x14), yt2("(content|items|self)-", (t18) => ({ ["align-" + t18[1]]: x14(t18) })), yt2("(place-(content|items|self))-", ({ 1: t18, $$: r14 }) => ({ [t18]: ("wun".includes(r14[3]) ? "space-" : "") + r14 })), gt("p([xytrbl])?(?:$|-)", "padding", w13("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", w13("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: t18, _: r14 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t18}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[t18]]: `calc(${r14} * calc(1 - var(--tw-space-${t18}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[t18]]: `calc(${r14} * var(--tw-space-${t18}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: t18 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t18}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", s18), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: t18, 2: r14 = "", 3: a21 }) => r14 == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a21 ? "numeric-fraction" : "pt".includes(r14[0]) ? "numeric-spacing" : r14 ? "numeric-figure" : t18)]: t18, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: t18 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": t18 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: t18 }) => typeof t18 == "string" ? { fontSize: t18 } : { fontSize: t18[0], ...typeof t18[1] == "string" ? { lineHeight: t18[1] } : t18[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: false, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: false, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: false, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: t18 }) => `linear-gradient(to ${p16(t18, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t18 }) => ({ "--tw-gradient-from": t18.value, "--tw-gradient-to": t18.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t18 }) => ({ "--tw-gradient-to": t18.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${t18.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: false, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: t18 }) => t18 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: t18 }) => t18 + (t18 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", u13), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: t18, _: r14 }) => {
    let a21 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[t18] || [t18, t18];
    return { [`border-${p16(a21[0])}-radius`]: r14, [`border-${p16(a21[1])}-radius`]: r14 };
  }), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: t18, _: r14 }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (t18 || "-x")]: r14, ["--tw-border-spacing" + (t18 || "-y")]: r14, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, w13("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", w13("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: t18 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": t18 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: t18 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: t18 } })), yt2("divide-([xy]-reverse)", ({ 1: t18 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + t18]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: t18, _: r14 }) => {
    let a21 = { x: "lr", y: "tb" }[t18];
    return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${t18}-reverse`]: "0", [`border-${p16(a21[0])}Width`]: `calc(${r14} * calc(1 - var(--tw-divide-${t18}-reverse)))`, [`border-${p16(a21[1])}Width`]: `calc(${r14} * var(--tw-divide-${t18}-reverse))` } };
  }), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: false }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: t18 }, { theme: r14 }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t18} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r14("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P3(r14("ringOffsetColor", "", "#fff")), "--tw-ring-color": P3(r14("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r14("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: false, opacitySection: "opacity" }, ({ _: t18 }) => ({ "--tw-shadow-color": t18.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: t18 }) => ({ "--tw-shadow": s18(t18), "--tw-shadow-colored": s18(t18).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...k6(), ...k6("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (t18, { theme: r14 }) => ({ transitionProperty: s18(t18), transitionTimingFunction: t18._ == "none" ? void 0 : s18(r14("transitionTimingFunction", "")), transitionDuration: t18._ == "none" ? void 0 : s18(r14("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", s18), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", s18), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", s18), gt("animate(?:$|-)", "animation", (t18, { theme: r14, h: a21 }) => {
    let i22 = s18(t18), l22 = i22.split(" "), d17 = r14("keyframes", l22[0]);
    return d17 ? { ["@keyframes " + (l22[0] = a21(l22[0]))]: d17, animation: l22.join(" ") } : { animation: i22 };
  }), "(transform)-(none)", yt2("transform", h8), yt2("transform-(cpu|gpu)", ({ 1: t18 }) => ({ "--tw-transform": C6(t18 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: t18, _: r14 }) => ({ ["--tw-scale" + (t18 || "-x")]: r14, ["--tw-scale" + (t18 || "-y")]: r14, ...h8() })), gt("-?(rotate)-", "rotate", y8), gt("-?(translate-[xy])-", "translate", y8), gt("-?(skew-[xy])-", "skew", y8), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", u13), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: t18 }) => ({ "scroll-snap-type": t18 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", w13("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", w13("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: t18, 2: r14, 3: a21 }) => ({ [`--tw-${r14 ? "pan-x" : a21 ? "pan-y" : t18}`]: t18, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: false, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: t18 }) => ({ x: "horizontal", y: "vertical" })[t18] || t18 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: false, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: false, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
  function u13(t18) {
    return (typeof t18 == "string" ? t18 : t18[1]).replace(/-/g, " ").trim();
  }
  function v5(t18) {
    return (typeof t18 == "string" ? t18 : t18[1]).replace("col", "column");
  }
  function p16(t18, r14 = "-") {
    let a21 = [];
    for (let i22 of t18)
      a21.push({ t: "top", r: "right", b: "bottom", l: "left" }[i22]);
    return a21.join(r14);
  }
  function s18(t18) {
    return t18 && "" + (t18._ || t18);
  }
  function x14({ $$: t18 }) {
    return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[t18[3] || ""] || "") + t18;
  }
  function w13(t18, r14 = "") {
    return ({ 1: a21, _: i22 }) => {
      let l22 = { x: "lr", y: "tb" }[a21] || a21 + a21;
      return l22 ? { ...He(t18 + "-" + p16(l22[0]) + r14, i22), ...He(t18 + "-" + p16(l22[1]) + r14, i22) } : He(t18 + r14, i22);
    };
  }
  function k6(t18 = "") {
    let r14 = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", t18 && "opacity", "saturate", "sepia", !t18 && "drop-shadow"].filter(Boolean), a21 = {};
    for (let i22 of r14)
      a21[`--tw-${t18}${i22}`] = "var(--tw-empty,/*!*/ /*!*/)";
    return a21 = { [`${t18}filter`]: r14.map((i22) => `var(--tw-${t18}${i22})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a21 } }, [`(${t18}filter)-(none)`, yt2(`${t18}filter`, a21), ...r14.map((i22) => gt(`${i22[0] == "h" ? "-?" : ""}(${t18}${i22})(?:$|-)`, i22, ({ 1: l22, _: d17 }) => ({ [`--tw-${l22}`]: b10(d17).map((g10) => `${i22}(${g10})`).join(" "), ...a21 })))];
  }
  function y8({ 1: t18, _: r14 }) {
    return { ["--tw-" + t18]: r14, ...h8() };
  }
  function h8() {
    return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": C6() } } };
  }
  function C6(t18) {
    return [t18 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
  }
  function S10({ 1: t18, 2: r14 }) {
    return `${t18} ${r14} / ${t18} ${r14}`;
  }
  function $2({ 1: t18 }) {
    return `repeat(${t18},minmax(0,1fr))`;
  }

  // https://esm.sh/v101/notie@4.3.1/deno/notie.js
  var Me2 = Object.create;
  var xe3 = Object.defineProperty;
  var He2 = Object.getOwnPropertyDescriptor;
  var Se2 = Object.getOwnPropertyNames;
  var we2 = Object.getPrototypeOf;
  var Oe = Object.prototype.hasOwnProperty;
  var Ae2 = (y11, o24) => () => (o24 || y11((o24 = { exports: {} }).exports, o24), o24.exports);
  var De = (y11, o24, v7, b11) => {
    if (o24 && typeof o24 == "object" || typeof o24 == "function")
      for (let m17 of Se2(o24))
        !Oe.call(y11, m17) && m17 !== v7 && xe3(y11, m17, { get: () => o24[m17], enumerable: !(b11 = He2(o24, m17)) || b11.enumerable });
    return y11;
  };
  var Ie = (y11, o24, v7) => (v7 = y11 != null ? Me2(we2(y11)) : {}, De(o24 || !y11 || !y11.__esModule ? xe3(v7, "default", { value: y11, enumerable: true }) : v7, y11));
  var ye2 = Ae2((ie3, pe2) => {
    (function(y11, o24) {
      typeof ie3 == "object" && typeof pe2 == "object" ? pe2.exports = o24() : typeof define == "function" && define.amd ? define([], o24) : typeof ie3 == "object" ? ie3.notie = o24() : y11.notie = o24();
    })(ie3, function() {
      return function(y11) {
        function o24(b11) {
          if (v7[b11])
            return v7[b11].exports;
          var m17 = v7[b11] = { i: b11, l: false, exports: {} };
          return y11[b11].call(m17.exports, m17, m17.exports, o24), m17.l = true, m17.exports;
        }
        var v7 = {};
        return o24.m = y11, o24.c = v7, o24.i = function(b11) {
          return b11;
        }, o24.d = function(b11, m17, ce4) {
          o24.o(b11, m17) || Object.defineProperty(b11, m17, { configurable: false, enumerable: true, get: ce4 });
        }, o24.n = function(b11) {
          var m17 = b11 && b11.__esModule ? function() {
            return b11.default;
          } : function() {
            return b11;
          };
          return o24.d(m17, "a", m17), m17;
        }, o24.o = function(b11, m17) {
          return Object.prototype.hasOwnProperty.call(b11, m17);
        }, o24.p = "", o24(o24.s = 1);
      }([function(y11, o24) {
        y11.exports = function(v7) {
          return v7.webpackPolyfill || (v7.deprecate = function() {
          }, v7.paths = [], v7.children || (v7.children = []), Object.defineProperty(v7, "loaded", { enumerable: true, get: function() {
            return v7.l;
          } }), Object.defineProperty(v7, "id", { enumerable: true, get: function() {
            return v7.i;
          } }), v7.webpackPolyfill = 1), v7;
        };
      }, function(y11, o24, v7) {
        "use strict";
        (function(b11) {
          var m17, ce4, re3, V5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A5) {
            return typeof A5;
          } : function(A5) {
            return A5 && typeof Symbol == "function" && A5.constructor === Symbol && A5 !== Symbol.prototype ? "symbol" : typeof A5;
          };
          (function(A5, u16) {
            V5(o24) === "object" && V5(b11) === "object" ? b11.exports = u16() : (ce4 = [], m17 = u16, re3 = typeof m17 == "function" ? m17.apply(o24, ce4) : m17, re3 !== void 0 && (b11.exports = re3));
          })(void 0, function() {
            return function(A5) {
              function u16(g10) {
                if (X4[g10])
                  return X4[g10].exports;
                var T10 = X4[g10] = { i: g10, l: false, exports: {} };
                return A5[g10].call(T10.exports, T10, T10.exports, u16), T10.l = true, T10.exports;
              }
              var X4 = {};
              return u16.m = A5, u16.c = X4, u16.i = function(g10) {
                return g10;
              }, u16.d = function(g10, T10, B9) {
                u16.o(g10, T10) || Object.defineProperty(g10, T10, { configurable: false, enumerable: true, get: B9 });
              }, u16.n = function(g10) {
                var T10 = g10 && g10.__esModule ? function() {
                  return g10.default;
                } : function() {
                  return g10;
                };
                return u16.d(T10, "a", T10), T10;
              }, u16.o = function(g10, T10) {
                return Object.prototype.hasOwnProperty.call(g10, T10);
              }, u16.p = "", u16(u16.s = 0);
            }([function(A5, u16, X4) {
              function g10(t18, c28) {
                var s21 = {};
                for (var d17 in t18)
                  c28.indexOf(d17) >= 0 || Object.prototype.hasOwnProperty.call(t18, d17) && (s21[d17] = t18[d17]);
                return s21;
              }
              Object.defineProperty(u16, "__esModule", { value: true });
              var T10 = typeof Symbol == "function" && V5(Symbol.iterator) === "symbol" ? function(t18) {
                return typeof t18 > "u" ? "undefined" : V5(t18);
              } : function(t18) {
                return t18 && typeof Symbol == "function" && t18.constructor === Symbol && t18 !== Symbol.prototype ? "symbol" : typeof t18 > "u" ? "undefined" : V5(t18);
              }, B9 = Object.assign || function(t18) {
                for (var c28 = 1; c28 < arguments.length; c28++) {
                  var s21 = arguments[c28];
                  for (var d17 in s21)
                    Object.prototype.hasOwnProperty.call(s21, d17) && (t18[d17] = s21[d17]);
                }
                return t18;
              }, J2 = { top: "top", bottom: "bottom" }, e19 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: true, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J2.top, force: J2.top, confirm: J2.top, input: J2.top, select: J2.bottom, date: J2.top } }, ge2 = u16.setOptions = function(t18) {
                e19 = B9({}, e19, t18, { classes: B9({}, e19.classes, t18.classes), ids: B9({}, e19.ids, t18.ids), positions: B9({}, e19.positions, t18.positions) });
              }, fe = function() {
                return new Promise(function(t18) {
                  return setTimeout(t18, 0);
                });
              }, oe3 = function(t18) {
                return new Promise(function(c28) {
                  return setTimeout(c28, 1e3 * t18);
                });
              }, R6 = function() {
                document.activeElement && document.activeElement.blur();
              }, W6 = function() {
                var t18 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c28) {
                  var s21 = 16 * Math.random() | 0, d17 = c28 === "x" ? s21 : 3 & s21 | 8;
                  return d17.toString(16);
                });
                return "notie-" + t18;
              }, le2 = { 1: e19.classes.backgroundSuccess, success: e19.classes.backgroundSuccess, 2: e19.classes.backgroundWarning, warning: e19.classes.backgroundWarning, 3: e19.classes.backgroundError, error: e19.classes.backgroundError, 4: e19.classes.backgroundInfo, info: e19.classes.backgroundInfo, 5: e19.classes.backgroundNeutral, neutral: e19.classes.backgroundNeutral }, me2 = function() {
                return e19.transitionSelector + " " + e19.transitionDuration + "s " + e19.transitionCurve;
              }, $3 = function(t18) {
                return t18.keyCode === 13;
              }, ee3 = function(t18) {
                return t18.keyCode === 27;
              }, K4 = function(t18, c28) {
                t18.classList.add(e19.classes.container), t18.style[c28] = "-10000px", document.body.appendChild(t18), t18.style[c28] = "-" + t18.offsetHeight + "px", t18.listener && window.addEventListener("keydown", t18.listener), fe().then(function() {
                  t18.style.transition = me2(), t18.style[c28] = 0;
                });
              }, O6 = function(t18, c28) {
                var s21 = document.getElementById(t18);
                s21 && (s21.style[c28] = "-" + s21.offsetHeight + "px", s21.listener && window.removeEventListener("keydown", s21.listener), oe3(e19.transitionDuration).then(function() {
                  s21.parentNode && s21.parentNode.removeChild(s21);
                }));
              }, te = function(t18, c28) {
                var s21 = document.createElement("div");
                s21.id = e19.ids.overlay, s21.classList.add(e19.classes.overlay), s21.classList.add(e19.classes.backgroundOverlay), s21.style.opacity = 0, t18 && e19.overlayClickDismiss && (s21.onclick = function() {
                  O6(t18.id, c28), j9();
                }), document.body.appendChild(s21), fe().then(function() {
                  s21.style.transition = me2(), s21.style.opacity = e19.overlayOpacity;
                });
              }, j9 = function() {
                var t18 = document.getElementById(e19.ids.overlay);
                t18.style.opacity = 0, oe3(e19.transitionDuration).then(function() {
                  t18.parentNode && t18.parentNode.removeChild(t18);
                });
              }, F11 = u16.hideAlerts = function(t18) {
                var c28 = document.getElementsByClassName(e19.classes.alert);
                if (c28.length) {
                  for (var s21 = 0; s21 < c28.length; s21++) {
                    var d17 = c28[s21];
                    O6(d17.id, d17.position);
                  }
                  t18 && oe3(e19.transitionDuration).then(function() {
                    return t18();
                  });
                }
              }, he2 = u16.alert = function(t18) {
                var c28 = t18.type, s21 = c28 === void 0 ? 4 : c28, d17 = t18.text, i22 = t18.time, k8 = i22 === void 0 ? e19.alertTime : i22, H6 = t18.stay, S12 = H6 !== void 0 && H6, h11 = t18.position, p22 = h11 === void 0 ? e19.positions.alert || p22.top : h11;
                R6(), F11();
                var l22 = document.createElement("div"), f17 = W6();
                l22.id = f17, l22.position = p22, l22.classList.add(e19.classes.textbox), l22.classList.add(le2[s21]), l22.classList.add(e19.classes.alert), l22.innerHTML = '<div class="' + e19.classes.textboxInner + '">' + d17 + "</div>", l22.onclick = function() {
                  return O6(f17, p22);
                }, l22.listener = function(n22) {
                  ($3(n22) || ee3(n22)) && F11();
                }, K4(l22, p22), k8 && k8 < 1 && (k8 = 1), !S12 && k8 && oe3(k8).then(function() {
                  return O6(f17, p22);
                });
              }, ke2 = u16.force = function(t18, c28) {
                var s21 = t18.type, d17 = s21 === void 0 ? 5 : s21, i22 = t18.text, k8 = t18.buttonText, H6 = k8 === void 0 ? "OK" : k8, S12 = t18.callback, h11 = t18.position, p22 = h11 === void 0 ? e19.positions.force || p22.top : h11;
                R6(), F11();
                var l22 = document.createElement("div"), f17 = W6();
                l22.id = f17;
                var n22 = document.createElement("div");
                n22.classList.add(e19.classes.textbox), n22.classList.add(e19.classes.backgroundInfo), n22.innerHTML = '<div class="' + e19.classes.textboxInner + '">' + i22 + "</div>";
                var r14 = document.createElement("div");
                r14.classList.add(e19.classes.button), r14.classList.add(le2[d17]), r14.innerHTML = H6, r14.onclick = function() {
                  O6(f17, p22), j9(), S12 ? S12() : c28 && c28();
                }, l22.appendChild(n22), l22.appendChild(r14), l22.listener = function(C7) {
                  $3(C7) && r14.click();
                }, K4(l22, p22), te();
              }, Ce2 = u16.confirm = function(t18, c28, s21) {
                var d17 = t18.text, i22 = t18.submitText, k8 = i22 === void 0 ? "Yes" : i22, H6 = t18.cancelText, S12 = H6 === void 0 ? "Cancel" : H6, h11 = t18.submitCallback, p22 = t18.cancelCallback, l22 = t18.position, f17 = l22 === void 0 ? e19.positions.confirm || f17.top : l22;
                R6(), F11();
                var n22 = document.createElement("div"), r14 = W6();
                n22.id = r14;
                var C7 = document.createElement("div");
                C7.classList.add(e19.classes.textbox), C7.classList.add(e19.classes.backgroundInfo), C7.innerHTML = '<div class="' + e19.classes.textboxInner + '">' + d17 + "</div>";
                var x15 = document.createElement("div");
                x15.classList.add(e19.classes.button), x15.classList.add(e19.classes.elementHalf), x15.classList.add(e19.classes.backgroundSuccess), x15.innerHTML = k8, x15.onclick = function() {
                  O6(r14, f17), j9(), h11 ? h11() : c28 && c28();
                };
                var a21 = document.createElement("div");
                a21.classList.add(e19.classes.button), a21.classList.add(e19.classes.elementHalf), a21.classList.add(e19.classes.backgroundError), a21.innerHTML = S12, a21.onclick = function() {
                  O6(r14, f17), j9(), p22 ? p22() : s21 && s21();
                }, n22.appendChild(C7), n22.appendChild(x15), n22.appendChild(a21), n22.listener = function(E5) {
                  $3(E5) ? x15.click() : ee3(E5) && a21.click();
                }, K4(n22, f17), te(n22, f17);
              }, ve2 = function(t18, c28, s21) {
                var d17 = t18.text, i22 = t18.submitText, k8 = i22 === void 0 ? "Submit" : i22, H6 = t18.cancelText, S12 = H6 === void 0 ? "Cancel" : H6, h11 = t18.submitCallback, p22 = t18.cancelCallback, l22 = t18.position, f17 = l22 === void 0 ? e19.positions.input || f17.top : l22, n22 = g10(t18, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                R6(), F11();
                var r14 = document.createElement("div"), C7 = W6();
                r14.id = C7;
                var x15 = document.createElement("div");
                x15.classList.add(e19.classes.textbox), x15.classList.add(e19.classes.backgroundInfo), x15.innerHTML = '<div class="' + e19.classes.textboxInner + '">' + d17 + "</div>";
                var a21 = document.createElement("input");
                a21.classList.add(e19.classes.inputField), a21.setAttribute("autocapitalize", n22.autocapitalize || "none"), a21.setAttribute("autocomplete", n22.autocomplete || "off"), a21.setAttribute("autocorrect", n22.autocorrect || "off"), a21.setAttribute("autofocus", n22.autofocus || "true"), a21.setAttribute("inputmode", n22.inputmode || "verbatim"), a21.setAttribute("max", n22.max || ""), a21.setAttribute("maxlength", n22.maxlength || ""), a21.setAttribute("min", n22.min || ""), a21.setAttribute("minlength", n22.minlength || ""), a21.setAttribute("placeholder", n22.placeholder || ""), a21.setAttribute("spellcheck", n22.spellcheck || "default"), a21.setAttribute("step", n22.step || "any"), a21.setAttribute("type", n22.type || "text"), a21.value = n22.value || "", n22.allowed && (a21.oninput = function() {
                  var M6 = void 0;
                  if (Array.isArray(n22.allowed)) {
                    for (var w15 = "", _3 = n22.allowed, P4 = 0; P4 < _3.length; P4++)
                      _3[P4] === "an" ? w15 += "0-9a-zA-Z" : _3[P4] === "a" ? w15 += "a-zA-Z" : _3[P4] === "n" && (w15 += "0-9"), _3[P4] === "s" && (w15 += " ");
                    M6 = new RegExp("[^" + w15 + "]", "g");
                  } else
                    T10(n22.allowed) === "object" && (M6 = n22.allowed);
                  a21.value = a21.value.replace(M6, "");
                });
                var E5 = document.createElement("div");
                E5.classList.add(e19.classes.button), E5.classList.add(e19.classes.elementHalf), E5.classList.add(e19.classes.backgroundSuccess), E5.innerHTML = k8, E5.onclick = function() {
                  O6(C7, f17), j9(), h11 ? h11(a21.value) : c28 && c28(a21.value);
                };
                var D8 = document.createElement("div");
                D8.classList.add(e19.classes.button), D8.classList.add(e19.classes.elementHalf), D8.classList.add(e19.classes.backgroundError), D8.innerHTML = S12, D8.onclick = function() {
                  O6(C7, f17), j9(), p22 ? p22(a21.value) : s21 && s21(a21.value);
                }, r14.appendChild(x15), r14.appendChild(a21), r14.appendChild(E5), r14.appendChild(D8), r14.listener = function(M6) {
                  $3(M6) ? E5.click() : ee3(M6) && D8.click();
                }, K4(r14, f17), a21.focus(), te(r14, f17);
              };
              u16.input = ve2;
              var Ee2 = u16.select = function(t18, c28) {
                var s21 = t18.text, d17 = t18.cancelText, i22 = d17 === void 0 ? "Cancel" : d17, k8 = t18.cancelCallback, H6 = t18.choices, S12 = t18.position, h11 = S12 === void 0 ? e19.positions.select || h11.top : S12;
                R6(), F11();
                var p22 = document.createElement("div"), l22 = W6();
                p22.id = l22;
                var f17 = document.createElement("div");
                f17.classList.add(e19.classes.textbox), f17.classList.add(e19.classes.backgroundInfo), f17.innerHTML = '<div class="' + e19.classes.textboxInner + '">' + s21 + "</div>", p22.appendChild(f17), H6.forEach(function(r14, C7) {
                  var x15 = r14.type, a21 = x15 === void 0 ? 1 : x15, E5 = r14.text, D8 = r14.handler, M6 = document.createElement("div");
                  M6.classList.add(le2[a21]), M6.classList.add(e19.classes.button), M6.classList.add(e19.classes.selectChoice);
                  var w15 = H6[C7 + 1];
                  w15 && !w15.type && (w15.type = 1), w15 && w15.type === a21 && M6.classList.add(e19.classes.selectChoiceRepeated), M6.innerHTML = E5, M6.onclick = function() {
                    O6(l22, h11), j9(), D8();
                  }, p22.appendChild(M6);
                });
                var n22 = document.createElement("div");
                n22.classList.add(e19.classes.backgroundNeutral), n22.classList.add(e19.classes.button), n22.innerHTML = i22, n22.onclick = function() {
                  O6(l22, h11), j9(), k8 ? k8() : c28 && c28();
                }, p22.appendChild(n22), p22.listener = function(r14) {
                  ee3(r14) && n22.click();
                }, K4(p22, h11), te(p22, h11);
              }, Te = u16.date = function(t18, c28, s21) {
                var d17 = t18.value, i22 = d17 === void 0 ? new Date() : d17, k8 = t18.submitText, H6 = k8 === void 0 ? "OK" : k8, S12 = t18.cancelText, h11 = S12 === void 0 ? "Cancel" : S12, p22 = t18.submitCallback, l22 = t18.cancelCallback, f17 = t18.position, n22 = f17 === void 0 ? e19.positions.date || n22.top : f17;
                R6(), F11();
                var r14 = "&#9662", C7 = document.createElement("div"), x15 = document.createElement("div"), a21 = document.createElement("div"), E5 = function(L6) {
                  C7.innerHTML = e19.dateMonths[L6.getMonth()], x15.innerHTML = L6.getDate(), a21.innerHTML = L6.getFullYear();
                }, D8 = function(L6) {
                  var N6 = new Date(i22.getFullYear(), i22.getMonth() + 1, 0).getDate(), Q4 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                  Number(Q4) > N6 && (Q4 = N6.toString()), L6.target.textContent = Q4, Number(Q4) < 1 && (Q4 = "1"), i22.setDate(Number(Q4));
                }, M6 = function(L6) {
                  var N6 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                  L6.target.textContent = N6, i22.setFullYear(Number(N6));
                }, w15 = function(L6) {
                  E5(i22);
                }, _3 = function(L6) {
                  var N6 = new Date(i22.getFullYear(), i22.getMonth() + L6 + 1, 0).getDate();
                  i22.getDate() > N6 && i22.setDate(N6), i22.setMonth(i22.getMonth() + L6), E5(i22);
                }, P4 = function(L6) {
                  i22.setDate(i22.getDate() + L6), E5(i22);
                }, be = function(L6) {
                  var N6 = i22.getFullYear() + L6;
                  N6 < 0 ? i22.setFullYear(0) : i22.setFullYear(i22.getFullYear() + L6), E5(i22);
                }, Y4 = document.createElement("div"), de2 = W6();
                Y4.id = de2;
                var ue3 = document.createElement("div");
                ue3.classList.add(e19.classes.backgroundInfo);
                var I9 = document.createElement("div");
                I9.classList.add(e19.classes.dateSelectorInner);
                var Z4 = document.createElement("div");
                Z4.classList.add(e19.classes.button), Z4.classList.add(e19.classes.elementThird), Z4.classList.add(e19.classes.dateSelectorUp), Z4.innerHTML = r14;
                var q7 = document.createElement("div");
                q7.classList.add(e19.classes.button), q7.classList.add(e19.classes.elementThird), q7.classList.add(e19.classes.dateSelectorUp), q7.innerHTML = r14;
                var G5 = document.createElement("div");
                G5.classList.add(e19.classes.button), G5.classList.add(e19.classes.elementThird), G5.classList.add(e19.classes.dateSelectorUp), G5.innerHTML = r14, C7.classList.add(e19.classes.element), C7.classList.add(e19.classes.elementThird), C7.innerHTML = e19.dateMonths[i22.getMonth()], x15.classList.add(e19.classes.element), x15.classList.add(e19.classes.elementThird), x15.setAttribute("contentEditable", true), x15.addEventListener("input", D8), x15.addEventListener("blur", w15), x15.innerHTML = i22.getDate(), a21.classList.add(e19.classes.element), a21.classList.add(e19.classes.elementThird), a21.setAttribute("contentEditable", true), a21.addEventListener("input", M6), a21.addEventListener("blur", w15), a21.innerHTML = i22.getFullYear();
                var ne3 = document.createElement("div");
                ne3.classList.add(e19.classes.button), ne3.classList.add(e19.classes.elementThird), ne3.innerHTML = r14;
                var se2 = document.createElement("div");
                se2.classList.add(e19.classes.button), se2.classList.add(e19.classes.elementThird), se2.innerHTML = r14;
                var ae3 = document.createElement("div");
                ae3.classList.add(e19.classes.button), ae3.classList.add(e19.classes.elementThird), ae3.innerHTML = r14, Z4.onclick = function() {
                  return _3(1);
                }, q7.onclick = function() {
                  return P4(1);
                }, G5.onclick = function() {
                  return be(1);
                }, ne3.onclick = function() {
                  return _3(-1);
                }, se2.onclick = function() {
                  return P4(-1);
                }, ae3.onclick = function() {
                  return be(-1);
                };
                var z7 = document.createElement("div");
                z7.classList.add(e19.classes.button), z7.classList.add(e19.classes.elementHalf), z7.classList.add(e19.classes.backgroundSuccess), z7.innerHTML = H6, z7.onclick = function() {
                  O6(de2, n22), j9(), p22 ? p22(i22) : c28 && c28(i22);
                };
                var U6 = document.createElement("div");
                U6.classList.add(e19.classes.button), U6.classList.add(e19.classes.elementHalf), U6.classList.add(e19.classes.backgroundError), U6.innerHTML = h11, U6.onclick = function() {
                  O6(de2, n22), j9(), l22 ? l22(i22) : s21 && s21(i22);
                }, I9.appendChild(Z4), I9.appendChild(q7), I9.appendChild(G5), I9.appendChild(C7), I9.appendChild(x15), I9.appendChild(a21), I9.appendChild(ne3), I9.appendChild(se2), I9.appendChild(ae3), ue3.appendChild(I9), Y4.appendChild(ue3), Y4.appendChild(z7), Y4.appendChild(U6), Y4.listener = function(L6) {
                  $3(L6) ? z7.click() : ee3(L6) && U6.click();
                }, K4(Y4, n22), te(Y4, n22);
              };
              u16.default = { alert: he2, force: ke2, confirm: Ce2, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F11 };
            }]);
          });
        }).call(o24, v7(0)(y11));
      }]);
    });
  });
  var je = Ie(ye2());
  var { default: Le, ...Ne2 } = je;
  var Fe = Le !== void 0 ? Le : Ne2;

  // https://esm.sh/v101/nanostores@0.7.1/deno/nanostores.js
  var S11 = Symbol("clean");
  var c24 = Symbol();

  // https://esm.sh/v101/@nanostores/i18n@0.7.1/deno/i18n.js
  function g6(r14, n22) {
    if (typeof r14 == "string")
      return n22(r14);
    {
      let e19 = {};
      for (let t18 in r14)
        e19[t18] = g6(r14[t18], n22);
      return e19;
    }
  }
  function p18(r14) {
    return (n22) => {
      if (n22.transform) {
        let e19 = n22.transform;
        return n22 = n22.input, { input: n22, transform(t18, o24, s21) {
          let f17 = r14(t18, o24, ...s21);
          return (...l22) => e19(t18, f17, l22);
        } };
      } else
        return { input: n22, transform(e19, t18, o24) {
          return r14(e19, t18, ...o24);
        } };
    };
  }
  var N5 = p18((r14, n22, e19) => g6(n22, (t18) => {
    for (let o24 in e19)
      t18 = t18.replace(new RegExp(`{${o24}}`, "g"), e19[o24]);
    return t18;
  }));
  var R5 = p18((r14, n22, e19) => {
    let t18 = new Intl.PluralRules(r14).select(e19);
    return t18 in n22 || (t18 = "many"), g6(n22[t18], (o24) => o24.replace(/{count}/g, e19));
  });

  // https://esm.sh/v101/n-gram@2.0.2/deno/n-gram.js
  var c25 = o21(2);
  var f13 = o21(3);
  function o21(r14) {
    if (typeof r14 != "number" || Number.isNaN(r14) || r14 < 1 || r14 === Number.POSITIVE_INFINITY)
      throw new Error("`" + r14 + "` is not a valid argument for `n-gram`");
    return s21;
    function s21(t18) {
      let e19 = [];
      if (t18 == null)
        return e19;
      let i22 = typeof t18.slice == "function" ? t18 : String(t18), n22 = i22.length - r14 + 1;
      if (n22 < 1)
        return e19;
      for (; n22--; )
        e19[n22] = i22.slice(n22, n22 + r14);
      return e19;
    }
  }

  // https://esm.sh/v101/collapse-white-space@2.1.0/deno/collapse-white-space.js
  var l18 = /\s+/g;
  var a18 = /[\t\n\v\f\r ]+/g;
  function i20(r14, e19) {
    e19 ? typeof e19 == "string" && (e19 = { style: e19 }) : e19 = {};
    let n22 = e19.preserveLineEndings ? f14 : u14;
    return String(r14).replace(e19.style === "html" ? a18 : l18, e19.trim ? g7(n22) : n22);
  }
  function f14(r14) {
    let e19 = /\r?\n|\r/.exec(r14);
    return e19 ? e19[0] : " ";
  }
  function u14() {
    return " ";
  }
  function g7(r14) {
    return e19;
    function e19(n22, t18, c28) {
      return t18 === 0 || t18 + n22.length === c28.length ? "" : r14(n22);
    }
  }

  // https://esm.sh/v101/trigram-utils@2.0.1/deno/trigram-utils.js
  var o22 = {}.hasOwnProperty;
  function s19(t18) {
    return t18 == null ? "" : i20(String(t18).replace(/[\u0021-\u0040]+/g, " ")).trim().toLowerCase();
  }
  function l19(t18) {
    return f13(" " + s19(t18) + " ");
  }
  function u15(t18) {
    let r14 = l19(t18), n22 = {}, e19 = -1;
    for (; ++e19 < r14.length; )
      o22.call(n22, r14[e19]) ? n22[r14[e19]]++ : n22[r14[e19]] = 1;
    return n22;
  }
  function m15(t18) {
    let r14 = u15(t18), n22 = [], e19;
    for (e19 in r14)
      o22.call(r14, e19) && n22.push([e19, r14[e19]]);
    return n22.sort(a19), n22;
  }
  function a19(t18, r14) {
    return t18[1] - r14[1];
  }

  // https://esm.sh/v101/franc@6.1.0/deno/franc.js
  var r13 = { cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g, Latin: /[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g, Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g, Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g, ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g, Devanagari: /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g, jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g, jav: /[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g, kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g, tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g, tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g, guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g, kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g, mal: /[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g, Myanmar: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g, pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g, Ethiopic: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g, tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g, sin: /[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g, ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g, khm: /[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF]/g, hye: /[\u0531-\u0556\u0559-\u058A\u058D-\u058F\uFB13-\uFB17]/g, sat: /[\u1C50-\u1C7F]/g, bod: /[\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA]/g, Hebrew: /[\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/g, kat: /[\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u1C90-\u1CBA\u1CBD-\u1CBF\u2D00-\u2D25\u2D27\u2D2D]/g, lao: /[\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF]/g, zgh: /[\u2D30-\u2D67\u2D6F\u2D70\u2D7F]/g, iii: /[\uA000-\uA48C\uA490-\uA4C6]/g, aii: /[\u0700-\u070D\u070F-\u074A\u074D-\u074F\u0860-\u086A]/g };
  var l20 = { Latin: { spa: " de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|a p|cho|ech|en |ent|a l|aci|e d|el |ona|na | co|as |al |da | to|ene|e l| en| el| pe|nte|tod|ho | su|per|ad | ti|a t|ers|tie| se|rso| pr|son|e s|te |oda|cia|n d|o d|dad|ida| in|ne | es|ion|cio|s d|con|est|a e| po|men| li|res|nci|su |to |tra| re|n e| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |nal|ue | qu|e e|a d|ar |nes|ica|a c|sta|ser|or |ter|se |por|cci|io |des|ado|les|one|a a|del|l d|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|e a|imi|o s|e c|ert|o e|dos|las|o p|ant|dic|nto| al|ara|ibe|enc|cas| as|e p|ten|ali|o t|soc|y l|n c|s l|l t|pre|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar| ma|l e| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|ta |y d|nid|e i|n l|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|odo|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern", eng: "the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u", por: "de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun", ind: "an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit", fra: " de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a", deu: "en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e", jav: "ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp", vie: "ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ", ita: " di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v", tur: " ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ", pol: " pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna", swh: "a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i", sun: "an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n", ron: " de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r", hau: "da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i", fuv: "de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga", bos: " pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr", hrv: " pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn", nld: "en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar", srp: " pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu", ckb: " he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew", yor: " n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j", uzn: "ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin", zlm: "an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar", ibo: "a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat", ceb: "sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya", tgl: "ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa", hun: "en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle", azj: " v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131", ces: " pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9", run: "ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c", plt: "ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav", qug: "ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat", mad: "an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil", nya: "ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ", zyb: "bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m", kin: "ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ", zul: "nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez", swe: "ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra", lin: "na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son", som: " ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood", hms: "ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun", hnj: "it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro", ilo: "ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw ", uig: "ish| he|ini|gha|in |ili| bo|sh |bol| we|ing|nin|we |shq|quq|oqu|hoq| ho|ush|ng |qa |ni |qil|hqa|en |lis|n b|dem|shi| ad|lik|ade|hem| qi|nda|ki |em |e a|iy |din|qan|igh|uq |ge |et |han|and| bi|ige|her|tin|olu|aq |ash|idi|luq|daq|erq|ha | te|let| ya|iti|liq|kin|me |mme|emm|rqa|lus|iki| qa|de | ba|aki|yak|uql|a h|men|rim|an | er|qlu| be|shk|du |d\xF6l| d\xF6|hri|ile|lgh|esh|q h|rki|erk|i w|uqi| me|\xF6le|ime|ehr|nli|iq |ara|ar |lar|a b| \xF6z|da |ik |i b|beh|hi |len|h h|ila|ayd|may|ke | ar|che|shl|nis|ydu|lin| k\xE9|bil| mu|e q| ig|er |olm|\xE9li|inl|tni|yet|lma|q a|ek |asi|hli|e b| as| sh|u h|hke|ali|ari|siy|shu|a i|e h| qo|rli|bir|emd| tu|ler|iye| is|ett|qi |i k|mde|he |bar|\xF6zi|etl|lid|tur|e t| al|nun|kil|tis|mni|qig|uru| je|ima|bas| ji|rek|\xE9re|k\xE9r|r b|raw|awa| ma|a a|anu|\xE9ti|ida|emn| bu|iqi|i y|jin| sa|e e| xi|mus|k h|iri|tes|ayi|nay|ina|dil|adi|i h|zin| \xE9l|she|i q|n h|hek|n w|min|n q|tti|ti | ch|ip |iya|\xE9ri|tid|his|alg|pal|apa|les|sas|asa|e m|p q|uch|niy|qti|siz|isi|n a|il |rni|uni|chi|tim| ij|ris|i s| xa|ir |ghu|met|n i|m i| ta|atn| pa|tle|lim|gen| de|ich|kap| ka|g h|q b|i a|\xFCn |h\xFCn|ch\xFC|\xFCch|q q|und|sht|sit|rus|lig| to| iy|ale|y m|e d|aiy|mai|jti|ijt|eli|i d|i t|si |rqi|e i|arl|hu |ami|rin| h\xF6|etn", hat: " li|ou |an |wa |li |on | po|pou|yon|te | yo|oun| mo|un |mou|en |ak | na|n p|nan| dw|dwa| ki| f\xE8|tou| pa| to| ak|ki |syo|se |yo |i p| ko|gen| ge|\xE8t | sa| la| se|out|n d|ut |pa |u l|n s|ite|n n| ch|n k| de|t p|n l|cha|kon|e l|e d| re|asy|nn |f\xE8 |a a|i s|ans|f\xE8t| a |a p|sa |swa|ni | ka|\xF2t |n y|t m|n a|i k|hak|pi |n m|ote|men| me| so|i l|a l|lit|epi| pe| si|enn|e p|e s| ep|nm |i t|yen|k m|t l|eyi| an| ni|e n| l\xF2|a f| ap|yi |pey|i a|son|l\xF2t|ns |san|e k|n e|ay |n t|man|ali| os|a s|e a| pr|al |e m|osw|n f|enm|sou| ma|ap |e y| ba|ran|a k| tr|lwa|n g|aso|lib|i d| p\xE8|ant|i g|la | ta|sos|i m|i n|ka |a c|a y|nal|anm| di|pwo| pw|ye |e t|je |k l|de | vi|ksy|t k|nen|ons|a t|alw|lal|ete| le|ta |res|ava|he |che|ati| fa|ken|oke| ok|tan|osy| pi|bli|le |tis|a g|kal|nas|a d|sye|l\xE8 |lek|a m|a n|u y|eks|re |\xE8 l|o p|tra|i f|onn|aye|way| en|ik |ze |kla|kou| sw|a r| za|ide|di |a b|vay|rav|p\xE8s|wot|ont|kot|k k|jan|o t|ona|ras|isy|sya|van|ib |\xE8 a| t\xE8|k a|p\xF2t| ne|pre|esp|\xF2l |\xE8so|ach|i o|it |ist|e r|is |s k|n o|\xE8te|u f|nsa|t a|dev|las|u t|nte| l\xE8|i r|l k| k\xF2|sip|tek|ri |pas|pra|k p|nt | ja| te|ond|yal|pan|fas|iti|fan|si | ra|u d|ife|dek|b\xE8t|ib\xE8|u k|ret|k\xF2l|ek\xF2|lon|wen|s a|vle| vl|ent| aj|ibl|ini|np\xF2|enp| as|\xE8 s", hil: "nga|ang| ka|ng | sa|ga |an |sa | ng| pa| ma|ag |on |pag| an|a p|san|n s|ata|a k|ung|kag|n n|a m|kat| ta|gan|ags|ay |tar|gsa|tag|g p|run|aru|a s|ala|g k|kon|g m|man|a t|ing|agp|n k| si|may|y k|g t|mga| mg|g s|a i|a n|mag|ya |gpa|sin|n a|uko|yon|la |hil| uk|od |gin|ina|ahi|g i|kas|syo|ili|g a|iya| gi|pan|ban|way|ana|tan| pu| in|lwa|ilw|in |asa|lin|n p|gka|aya|nan|han| iy|at |g n|wal|aha|apa|o m|al |a g|lan|aba|gba| wa|kah| na|o s|a a|kab|agk|pat|ong|no |ano|ngs|pun|yan|aki|isa|o n|ali|ini|agb|nag|aga|a d|a h|ngk|i s|asy|abu|dap| hi| da|aho|agt|n m|di |n u|sal|til|sod|gso|ni |uga|mat|bah|bat|asu|a b|ato|ati| la|iba|sil|ngo|uha| su|nah|ulo|na | ba|pas| pr|ida| di|ngb|aka| ko|gay|lal|paa|o a|d s|ton|agh|pro|y n|uan|bis|ot |asi|i m|ka | is|ksy|atu|him|ila|y s|tao|gi |agi|aag|aan|o k|non|k s|ula|sul|tek|sug|gua| bi|gon|yo |n d| ib|uli| du|duk|ho |iko|hin| ed|a e|bot|ind|do |ron|aro|i a|abi|lab|eks|ote|rot|ugu|to |mak|as |s n|n b| o |n o|ad |m s|gal|una| hu| tu|but|kal|ika|a l|yag|hay|pah|nta|int|ama|pam|hat| al|uka|edu|ko |g e|ghi|lik|ami|ndi|sta|ok |tok|tra|os |abo|om |alo|dal|kin|n t|hi |a w|i n|da |kda|akd|tak|lig|inu|t n|d k|ao |kaa|par|aay|rab|awa|kau|mo |gla|gko|d a|ado|g o|lo |lon", sna: "wa |a k|ana|na | mu|ro | ku|a m| zv|nhu|mun|hu |dze|oku|a n|aka|che|zer|unh| ch|chi|ero|kan|ka |odz|kod| ne|zvi|rwa| pa| an|se |ra |e a|nek|va |ane|o y| we|kut| ka|ke |ake|iri|dzi|eko| yo|cha|ese|ach|ika| no|zva|ngu|ano|yok|ri |wes|u w|ang|yik|nyi|eku|ung|idz|ech|uva| dz|ipi|a z|irw|van| va|nge|iro|wan|o i|ani|nga|ich|wo |eng|ti |udz|o n|tan|ira|a y|a c|dza|sun|vak|nok| ya|a p|kwa|i p|e k|ita|rir|ko |ga |hip|unu|hec|edz| ma|ara|bat|guk|nun|sha|zwa|dzw|hen|o m|zve|o c|mo |kuv|a d|eny|ema|uta|uti| rw|ta |ino|twa|o a|pac|dzo|yak|wak| kw|i z|kus|zir|kur|rus|ere|nem|e z|emo|tem|gar| ha| ak|o k|rwo|uko|mwe|ata|e n|we |o r|and|za |zo |a i|yo |da |pan|erw|ezv|pi |asi|rud|usu|hak|uka|han| ic|guv|pir|a a|ari|isi|emu|aan|uch|re |hur|kwe|ura| in|uru|oru|kub|fan|anh|ush|hek| ye|ute|ran| ac| iy|ong|mut|i m|a r|ina|sin|pas|ait|nor|uye| uy|a u|sa |asa|i i|era|nen|omu|uit|kui|u a| ny|kud|kuc|e m|aru|uwa|uba|nir|a s|cho|enz|ndi|aga|kun|i a|sva|ge |vin|get|hap|o z| wa|sar|o p|no |muk|itw|uri|mat|ama| ko|kuw|usa|ofa|nof|kuz|vo |a v|uma|mag|wen|e p|yor|pam|emh|swa| hu|ne |ye |ete|vic|uzv|ava|ose|si |ayo|mir|apa|ton|vem|nez|do |i h|adz|azv|zan|nza|zid|mum|imb|bas|mba|mus|iki|e c|osv|hos|mho|vis|ngo|ite", xho: "lo |nge|lun|oku|elo|ye |ung|nye| ng|nga|e n|la |tu |ntu| ku|a n|o l|ele|e u|lek|yo |gel|o n|nel|ho | na|ke |wa |a k| um| lo|ko |ulu|o e| ne|nke|onk|elu|any|mnt|we |ama|lul| kw|umn| wo|kub|ngo|une| no|eko|won|enz|ule| un|a u|ela|le |kun|kan|ba |a i| ok|ang|lwa|eyo|oka|alu|uba|lok|lel|ukh|kuk|aku|ala|aph|akh|kwe|ley|eth|the|u u|khe|het|nok|pha|ezi|ile|uny|use|ath|eki|khu|zwe|kul|kho|e k|wen|gok|na |o y|sel|a e| ez| uk|o o|ane|ana|hul|e a|tho| in|enk|o k|nam|o w|uku|kil|he | yo|unt|ent|ni |obu|nku|esi|ing|o z|ayo|ya |hi |lwe|phi|ban|fun|ben|elw|o a|uhl|ndl|nzi|gan|eli|olu|eni|hus|kwa|aba|ha |und|gen|uth|lal|ntl|e o|ink|hla|ise|iph|seb|ebe|isw|thi| zo|ume|kut|a a|isa|kel|izw|e i|za | ba| ab|sha|tya|een|yal|mth|i k|uph|sa | lw|alo|lan|dle|tha|lin|zi |ase|nay|i n|pho| ak|man|mal|wak|zo |bel| im|mfu|int|swa|ngu|do |nee|ene|ulo|o u|a o|tla|ezo|ga |wan|han|sen|kuh|kus|ety| es| ya| le|eng| el|kup|azi|ka |e e|olo|ubu|bal|and| se|o s|fan|okw|ant|o i|tsh|li |lis|sis|ale| en|phu| ol|ham|iso|lak|bo |mny|okh|nte|mel|ziz|sek| am|zin| ul| ub|nen|e w|ong|zel|emf|nan|ndo|yok|ube|nya|yen|len|gal|ili|e l|be |abe|ali| ph|a y|wam|aka|amn|men|lum|rhu|urh|eka|dla|u k|oli|iba| ko|thw|imf| wa|nda| is|nza| be", min: "an |ak |ang| ma| ka| da|yo |ara|nyo| sa| ha|ran|ng |nan|hak| pa| ba|dan| di|ata| pu|ura|pun|kan| na|man|ok |nda|ala|o h|uak|asa|k m|ntu|k u| ti|uny|ah | ur|n k| un|tua|n d|n b|and|n s|unt|ek |g p|iok|tio|jo |n p|tau| at|dak| ta|aka|pan|au |ind|ama|pek|dap|aan|ape|nga|k d|n m|uan|tan|lia|sua|gan|amo|bas|kat|gar|o p| in|n n| jo|mo |at |mar|ado|o t|ari|di |k s|n a|am |lam| su|o d|iah|par|ban|tu |sam|adi|o s|ika|lak|ian|ko |dal|um |san| la|ai |ega|neg| ne|k k|uka|al |asi|ant|aga|bat|dek|o m|mas|eba|beb|asu|mal|n u|tar|aku|ri |kal|ana|in |atu|ti |ato|sar|ngg|lan|alu|rad|aro|ali|un |ami|o u|k h|ro |car|o b|amp|mam| bu|dok|dia|aha|n t|to |rat|ka |ila|a d|sia|anu|yar|sya|i d|sur|sas|kum|as |pam|aca|k t|ati|kar|eka|dil|any|lo |i m|h d|iba|k b|u d|kab|u p|o a|o k|kam|lai|aba|ard|dua|ndu|lin|k p|ajo|raj|han|bai|ra |n i|uku|huk|itu|dar|aya|uli|mpa|amb|i k|ain|rde|abe|did|ili| li|sac|sti| mu|bul|n h|i p|nny|k a| ko|ras|bad|k n|ndi|rga|arg|iko|tam|a n|kaw|i j|ga | an|nta|k l|apa|ida|jam|alo|sal|l d|u k| hu|das|tik|mat|dik|ia |idi|uju|lua|pul|kuk| pi|ann|il |iny|i t|bak|ust|mus|uah|pri|aja| ja|n j|h p|sio|ar |ada|oka|ngk|sa |gam|min|ik |mbe| ad|si |m d|kaa|sat|i n|i a|usi|rak|asy|aki|rik|kny|ulo", afr: "ie |die|en | di| en|an |ing|ng |van| re| va|reg|te |e r|et |e v|een|e e| ge| be| te|eg |n d|le |ens|n h| he|het|ver|t d|lke|nie| in|ke |lik|of | el|e o|nde| ve|al | to|elk| op| ni| of|g t|der|id |and|eid|aan|kee|ge |ot |tot|de |hei|e b| vr| we|om | sa| aa|ord|er |e w|ige|g v|n v|ers|in |sal|nd |erk|e s| vo|dig|vry|wor|n s|asi|eni| wa| om| de|bes|rd | wo|\u2019n | \u2019n| on|ond|at |ska|ede|esk|sy |nig|e t|oor|ns |men|g o|aak|eli|kap| me|lle|vol|n a|edi|din|g e|uit|op |e g|gte|rdi|aar|ik |erd|el |ak |sta| st|ap |egt|se | sy|ele|gin|sie|min|ker|ere|is | so|yhe|ryh|es |ike|wat|e n|e d|del|wer|end|ale|n o|ur |eur|s o|per| hu|re |gel|ten|deu|e k| as|it |ema|gem|nas|ger|d s| is|rin|ewe|eme|ite|ter|as |n e|soo|oed|s v|ees|wet|red|e h|d v| al|ies| ma|nsk|ig |e i|ier|hie| hi|r d|t e|man|kin|nal|ona|d o|ske|ien|e a|eri|wee|ir |vir| vi| na|n w|iem|t v|s e|r e|ion|sio|nte|tel|eke| da|taa| gr|oon|rso| pe|tee|ort|n b|d e|lyk|ely|ese|e m|sia|ont|ans| ty|rde|ind|d t|nge|d d|g s|voe|n t|ndi|rmi|erm| sl|ren|maa|d w|lan|l g|hed|t a|n g|hul|n r|waa|t g|all|pvo|opv|ang|dee|nli|osi|sos|mee|wel|k o|kan| ka|raa|spr|nsp|nse|den|aat|gen|t s|g a|ste|est|str|lin|l v|sek|d n|ern|arb|daa|s d|ods|r m|t i|yke|met|rs |n i", lua: "wa |ne | mu| ne|a m|a k| ku|di | di| bu|e b|bwa|tu |udi| bw|a d|a b|ntu|e m|nga|i b|i n|shi|la |mun|yi | ba|adi|unt|u b| dy|nde|ung|ons|ya |mu |na |ga |end|nsu|a n|buk|e k| ma|any|u m|nyi|esh|de |lu |idi|ika|u n|su |ku |yon|i m| ka| mw| yo|u y|we | ud|wen|ken|dya|ji | kw|u d|mwa| an| bi|dik|sha|tun| ci|ha |hi |kes|oke|kok|bwe|kwa|dit|nji|kan|ka |mwe|ibw|yen|itu|ba |u u|ena|ang|le |ban|ala|enj|a a|e n|uko|uke|ans|u a|ana|bul| wa|nda|did|umw|ish| a |ila|bad|e d|mbu|kal|du |ndu|hin|kum|aka|nso|nan|a c|ele|ela|kwi|bu |nsh|ind|i k|sun|i d|i a|ula|ye | na|dye|u w|mba|alu|mak|ant| pa|lon| by|kus| mi|amb|gan|dil|dim|mud| cy| ns|kub|lel|u k|da |bud|enz|ond|ako|ile|e c|umb|diy|mus|abu|ja |dis|aku|bid|mal|umu|kad|dib|imu|cya|kuk|kud|so | me|ilu|ulu|ngu|ta |bak|akw|u c|iba|ush| ke|wik|eng|uba|wil|elu|und|kwe| mo|a p|omb|nza|iye|pa |mum|man|bya|kup|wu |muk|aci|a u|som|atu|ukw|upe|uka|e a|bis|kak|ngi|nge|pet|ilo|ama|iko|iku|mik|utu|ong|ulo|iki|and| um|mat|kul|uja|isu|gil|ale|nka|ata| mb|san|dif|ifu|ole|lwi|ulw|za |cik|lam|bel|awu| ya|wab|lum|ubi|sam|isa|aa | aa|fun|kon|bum| lu|eta|mbe|wel|kol| be|ane|ame| ad| tu|men|upa|tup|uku|omu|mom| my|mul|ing|ma |o u|pik|kab|cil|aji|me |uyi|kuy|o b|bon| bo", fin: "en |ise|on |ais|ja |ta |an | ja|sta|n o|ist|keu|ike|oik|ell|lla|een| oi|n t| on| va|n j|aan|kai|la | ta|lis| jo|sen|lli|a o|uks|sel|tai|a j| ka|us |in |n k|a t|eus|sa |ksi|n s|\xE4\xE4n|\xE4n |kse|nen|jok|see|oka|ai |tta|ssa|taa|mis|aa |nsa|ses|apa|t\xE4 | se|ans|den|est|tt\xE4|all|kan|t\xE4\xE4| yh|lai|sia|ill|\xE4 o|a v|itt|ett|vap|aik|ia |h\xE4n| h\xE4|ast|a k| tu|n e|ust|kun|eis|ess|ti |sti|per|\xE4 j|n v|ain|n y|k\xE4 |n p|n m| t\xE4|ine|isi|\xE4ne|yks|ude|\xE4 t|a m| pe|tei|tee| mi|a s|a p|val|unn|tuk|s\xE4 |a h|sek|utt|ll\xE4|ste|yht|ava|lta|ien| sa|l\xE4 |oll| ei|ss\xE4|n a|n h|st\xE4| ke|alt|suu|isu|sal|tet|ois|tav|a a|ikk|sty|ek\xE4|a y|etu| ku|vaa| te|hte| mu|pau|stu|iin|toi| to|lle| he| ri|muk| la|n l|\xE4\xE4 | ra| ol|nno| ma|ei |uut|iit| su|oma|ami|tam|ten|att|dis|tur|aut|m\xE4\xE4|n r|\xE4m\xE4|maa|oon|jul| ju|ute|iaa|et |kki|tie|ide|\xE4 m|kaa|suo| si|saa|i s|rva|urv|v\xE4l|lin|tus|rus|eru|nna|sku|isk|lii|oli|uol|a r|sii|ite|a e|hen| ko|sil|euk| sy| ty|ty\xF6|pet|ope|ali|avi|paa|si |iss|voi|tyk|\xE4 v|oja|vat|vas| yk|joi|vai|t\xE4m|kil|enk|mai|mie|tti|iel|rii|nk\xE4|min|hmi|yhd|lit|ens| pu|uka|ita|ka |omi|aas|kka|jaa|uoj| ed|ala|oit|t\xE4y|i t|int|il\xF6|nki|eel|\xE4 s| al|eli|lee|un |k\xE4\xE4|oht|koh|va |eid|tun|ttu|le |na |ihm| ih|aal| av|aat|i v|non|tte|ytt|yyt|ulk|eud|van", slk: " pr| a |pr\xE1|r\xE1v| po|ho |vo |na | na|ost| ro| ne|ie |nos|ch |\xE1vo|kto|ebo|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka|bo |leb|ale| al|o n|ani|d\xFD |\u017Ed\xFD|ia |ne |om |ti |\xE9ho| v | je|ova| za|\xE1 p|\xFD m|mi |eni|to |n\xE9 | sl|tor|van|a p|sti|voj|o v| kt|nia|lob|slo| sv|mu |rov|rod|\xFDch|svo| z\xE1| by|o p| n\xE1|a\u0165 | ma|nie| sp|e s|ej |nu |je |n\xE9h|o a|\xE1va|bod|obo|a s|e a|by |a n|oci| vy|o s|odn|a z|n\xFD |en\xFD|mie|\xE1ro|roz|ovn|spo|u p|eho|nes|u a|n\xE1r|kla|a v|i a| sa|jeh|y\u0165 |by\u0165|e v|stn|va |a m|sa |n\xFDc|n\xFDm| k |ran|och|pre|a o|\xE9mu|a k|i\u0165 |aj\xFA| do| v\u0161|ov |\u010Din|hra|z\xE1k|tre| ni|s\u0165 |u s|pr\xED|stv|pod| ob| s\xFA|a r|v\u0161e|\xFDmi|oje|\xFDm |pri|kon|i p|vna|est|e b|smi|esm|os\u0165| \u010Di|or\xE9|lad| in|pol|\u017Een|bez|\xE1ci|a a|u k|maj|\u0161et| vo|e z|\u0165 s|t\xE1t|i k|pro|chr| oc|nak|bol| bo| tr|i s|iu |\u010Den|ny |du | ho|\u0165 v|j\xFA |del|ami|dov|va\u0165|ko | vz|rav|pra|lne|r\xE9 |\u0161t\xE1| ta|anu|nom|aby| ab|res|vo\u013E|ikt|n\xFA |niu|slu|kra|edz|e p|odu|\xE1ln| so|o\u017Ee| de|\xE9 v|etk|n\xED |ok | pl|k\xFDm|ako| \u0161t|vin|str|ou |\xE9 p|m p|inn|r\xEDs|kej|stu|nik|med|tvo|por| to| kr|de |sta|pov|i\xE1l|ens|ak\xE9|hoc|r\xE1c|o d|en\xE9|m a|lan|ela|zde|vzd|o\u010Dn|olo| ak|lo\u010D| st|in\xFD|\xEDm |ast|dne|ju |oju| od|an\xED|tup|i n|rej| ve|pln|adn|tak|\xFA p|j\xFAc| s |o\u013En|\u010Dno|ivo|obe|lu\u0161|sob|oso| os|jin|aji|raj|in\xE1|ade| \u017Ei|ven|vod|ci\xE1|soc|dno|bo\u017E|\xE1bo|n\xE1b|o r|k\xE9h", tuk: "lar| bi| we|we |da | he|ada| ha|dyr|er |an |r b|ir |ydy| \xFDa|bir|y\u0148 |yna|na |yr | ad|ary|dam|lyd|de |kly|yny| \xF6z|lan|r a|her|hak|akl|aga|kla|i\u0148 |am |ara|mag|ili|r h|ga |ala|ler|dan|en |a h|\xF6z |ar |ny\u0148|gyn|ini|ne |bil|li |len|atl|nda| ed| ga|\u2010da|ygy|a\u2010d|ine| de|uku|huk|e h|lyg|edi|a g|\xFDa\u2010|dil| bo|kuk|lma|eri|tly|ryn|asy|a d|eti|ny |ly |ni\u0148|dir| hu|\u2010de|aza|ge |\xFDan|ile|a\xFDy|e d|zat| az|hem| g\xF6|ama|lyk|\xFDet|den|nde|any|ynd|ykl|ukl|\xE4ge|m\xE4g|im | du|a w|a \xFD|gin|m\u2010d|em\u2010|in | je|n e|bol| hi| di|e a| be|p b|ra |e \xF6|mak| go|ni |mez|ilm|aly|ril|n b|sy |syn|rla|esi|ry\u0148|gal| ma|etm|nma|ede| sa|lme|i\xE7 |hi\xE7|e g|a b|lin|igi|ele|rin|iri|de\u0148| do|ak |lik|anm|dal| ka|mal|n h|kan| ba| \xFDe|i\xFDa|gat| ge|al |y b|y\xFDe|ti\u0148|let|ard|tle|n \xFD|ere|agy|ora|gor|nme|inm| gu| ki|sas|esa| es|r e|bu | bu|gar|tla|ill|\xFDle|lig|sin|\u0148 \xFD|mel|e b|end|n a|\xFDar|\u0148 h|rda|y w| et|tyn| d\xF6| i\u015F|\xE7in| ar|z h|r d|\xFDda|\u0148 g|nun|\xFCnd|yly|\u0148 w|ez |yp |kim|\xFDa\u015F|olm| \xE7\xE4|g\xF6r|dur| \xE4h|si\xFD|and|da\xFD|eli|mil|e\xFDl|be\xFD|erk| er|a\xFDa|kin|ek |ndi| yn|ola|ry |r w|lim|a\xFDl|gy\xFD|et |e m|i \xFD|agt|wag| se|dol|a \xF6|n w|i b|e\u0148 |n p|anu|z\xFCn|\xF6z\xFC|m \xF6|i g|\xE7 k|a\u015Fa|rma|ana|ldi|my |hal|\xE4hl|asi|ram|kda|\xFDyn|gda|agd|\u015Fyn|ip |lip|gel| mi|din|rle| me|at |j\xFCn|pj\xFC|\xFCpj| \xFCp|\xFDla|mgy|emg|jem|gur", dan: "er |og | og|til|et | ti|der|en | de|for|il | re| fo|ret|ing| ha|lig|de |nde| en|lle|hed|els|ver|ar |und|ed |har|ell|den|ge |ler|lse|and|r h|t t|se |ng |hve| el|enh| fr|at |e e|e o|ig |nhv| i |gen|ede|ska|ige| at|es |le |ghe|r r| in|e f|fri| me|nge|al |igh|nne|nin|l a| be| sk| af|r e|ion|af |re |han| st|om | so|r s|e s| an|eli|ne |r o| p\xE5|tig|esk|or |del|ati|p\xE5 |r f| er|enn| al|ens| un| he|tio|ndl|med| si|end|kal|nat|g f|ske|ns |tte|ent|ter|det|ke |lin|som|e r| ud|ett|g o|sky|e a| ve|nte|n s|r d|tti|sni|t s|lde|vil|ale|ind|ans|r a|kel| hv|dig| li|men|ren|old|hol| na| gr|ihe|rih|sam|v\xE6r|e i|e m|s f|age| vi|d d|g h|str|\xE6re|te |ilk|g t|r i|nal|ona|e n|rel|run|gru|d e|nd |ers| sa|r u|ere|ger|e t|tel|bes| m\xE5|t i|per|lan|isk|dli|ors|rin|e d|kab| mo| v\xE6|all|ejd|bej|rbe|arb|gte|mme|ved|e h|m\xE5 |n m|igt|res|kke|l h|sig|ld |l e| fa| ar|n f|r k|ets|rsk|t o|t f|it |t d|t v|g i|ytt|kyt|ven|ove|g e|ste|r t|eri|tet|lke| om|\xF8re|e g|fun|orm|d a|oge|nog| no|g a|erk|kra| kr|d h|od |mod|g d|g s|ie |erv|ene|em |sta|nst| ku|isn|vis|rvi|g m|t a|ner|tes|r\xE6n|s s|n h|int| la|ikk|el | op|lit|n a|g u|av |rav|ts |dre|t m|e u|s o|ore|l f|rit|ndi|lag|l t|ffe|rli|n e| fu|yld|dan|n o|rke|ive|raf|tra|dom| tr|i s|l l", nob: "er |og | og|en |til| ha| ti| re|ett| de|ing|ret|il |tt |et |lle|for|ar | en|ver|ell|om | fo|ng |har|r h|het|ler|lig| so|hve|t t| el|ter|nne|som|enh|and|de |av |nhv|ska| \xE5 | i |le |r r|den|e e| fr|ig |r s|nde|els|se |e o| er|enn| me| st|lse|al |re |fri|tte| sk|han|or | be| in|ke | av| ut|ghe|r e|esk|nge|te |es | p\xE5|ete|der|nin|ten|p\xE5 |igh|ed |l \xE5|kal|ge |unn| sa|ent|e s|eli|n s|rin|ne |g f|itt|sam|lik|gen|t s|end|jon|sjo|asj| an|r o|g s|t o|men| al| si|lin|mme|med|g o|ner|dig|n m|ren|nte|ige|inn|e f| gr|e r|r f| ve|sni|sky|g e|del|ens|und|res|det|isk|gru|ihe|rih|tig|tti|kte|ans|g t|tel| li| un|lan|nas|t i|m e|r u|ske|e m|ns |ekt|str|t e|ers|per|ale|kke| he|rel|run| ar|kap|mot| mo|all|eid|bei|rbe|arb|e t| vi|bes|g r|ven|s f|eri| m\xE5|n e|e g| na|nn |e d|kra| kr|ot |ndl|ere|erd|rit|\xE6re|vis|ger|ffe|id |e a|ytt|kyt|g h| et|tes| sl|i s|m\xE5 | la|dom|l e|n o| fa|rav|r k|t f|nes|v\xE6r|ta |sta|ste|\xE5 d|ndi|g d|bar|l f|isn|rvi|g a|vil|nnl|r m|t d|jen|dli|e b|gre|e h|ikk|el |l o|nal|ona|opp|r a|on |n a|noe| no|ute|erk|v p|ts |e i|dre|g m|ie |gan|erv|org|ser|tat|ang|at |t v|s o|tli|fen|an |e n|ik |g i|\xE5 s|lov| lo|r l|t a|lt |ove|aff|rdi|m s|l l|nse|r t|n h| pe|sli| gj| ik|d d|old|hol|ial|sia|osi|sos", suk: "na | mu| bu|we | na|hu |a n|ya | gu|a b|nhu|wa |a g|a m|unh| ya|mun|li |ili|ali|bul|i m|ilw| ba| bo|uli|han|mu |lil| al|e n|u a|bo |la |ose|kwe|ang|ulu|lwe|kil| wi|i b| se|ga |ina|le |ge |kge|ekg|sek|bi |e b|e y|lo |and|i n|yo |ila|se |lu |a s|lin|gil|ngi|akw|aki|abi| gw|si |nsi| ns|dak| nu|ng\u2019|gan|u b|o g|ilo|nul|e g|ka |nga|ile|a w|ada|u m|gwi| ka| ad|ubi|lwa|ani|ban|o a| ly|ndi|a l| ng|jo |g\u2019w|a i|ho |ayo|ika|dik|e k| ma|anh|gul|u n|o b| ji|o n|yab|iya|wiy|lag|ula|yak|o l|ma |ing|gi |gub|biz|lan|shi|iwa|ja | li|iha|mo |o j|wen|o s|lya|a a|ola| ku|jil|win| ga| sh|agi|ha |iga|uga|a k|iti|oma| nd|uyo|iza|za |i a|a y|yos| ha| mi| lu|iko|ndu|pan|ji |nil|ala|bos|ene|a u|ele|nhy|u g|nik|o w|iki| mh|nda|uhu|duh|hay|aji|ana| ja|gwa|nay|i y|ong|aya|mil|o m|da |lug|man|e i|abo|aga|okw| ab|nek|ngh|dul|e m|aha|uma|ubu|bus|sol|wig|ki |nya|ung|iji| gi|wit|iso|som|twa|udu|imo|eki|\u2019we|hya|gut|iku|e u|uso|u l| il|but|mha|any| um|bal|ujo|kuj|aka|tum|waj| we|ko |ugu|bud|lon|a h|utu| uy| is|jiw|ale|e a|a j|sha|ita|lit|ibi|lyo|u w|g\u2019h| ij|upa|tog|ida|omb|yom|ajo|atw|mat|bok|ulo|gup|lik| ul|ize| at|uto|ze |kan|ulw|u u|sho|ish|hil|ike|kal|mah|umu|je |ule|mbi| ih|kaj| lo|ti |wik|\u2019ha|eni|yiw|umo|ito|ba ", als: "t\xEB | t\xEB|dhe|he | dh|\xEB d|n\xEB |et |\xEB t|imi|p\xEBr|ejt|rej|dre|e t| dr|it | e | p\xEB| n\xEB|gji|\xEB p|sht|jit| gj|jt\xEB|\xEBr |het|ith|ve | ve| li|ush| sh| ka| i |t t|a t|kus|hku|j\xEB |sh | ku|e p|ka |se | pa|me |e n|mit|s\xEB | nj|\xEB n|thk|\xEBn |\xEB k|e d|\xEB s|in |ose|lir|h k|et\xEB| os| si|ara|n e|nj\xEB|t d|tet| ba|jer|ohe|jet|\xEB m|rim| nd|\xEB b|e k|e s|eve|eti| du|nd\xEB|r\xEB |\xEB g|t\xEBn|vet|eri|ra | me| q\xEB|t n|do |es |iri|e l|duh|d\xEBr|shk|und|si | as|re |end| ng|uhe|ndi|\xEBsi|ga |nga|min|q\xEB |hte|ime|ash|mi |tje|i n|jes|ris|\xEB v|ri | ar|nje|r n| pe|\xEB i|ur |uk |nuk| nu|tar|i p|at |en |an\xEB|ta |jta|e m| pu|e v|ar |sim|is\xEB|gje|art|\xEB l| ma|\xEB r| s\xEB|ht |ish|i d|or | mb| je|lim|e a| ko|uar|\xEB e|cil|bar|mar|t\xEBs|edh|\xEBm |sh\xEB|ave|shm|nal|t a|\xEB j|ari|ht\xEB| ci|k d|im |snj|asn|kom|igj|t p|\xEBs |\xEBrk| de| k\xEB|a n|\xEB a|ir\xEB|bas|es\xEB| pr|tim|hme|ke |per|pri|vep|mun|roh|t s|oj\xEB|\xEB c|tit|lli|omb|lit|par|i s| tj|s s|ij |tij|shi| fa|le |ale| ti|roj|bro|mbr|ali|\xEB q|nim| mu| t |n k|ti |t i|ven|uri|q\xEBr|in\xEB|ik |esi| ra|at\xEB|ras|t m|\xEBri|je |h\xEB |pun|i i|e b|nd |jen|mev|a g|\xEB f|n p|ona|son|rso|ers|epr|tes|\xEBsh| \xEBs|ft\xEB|oft|ore|ror|oq\xEB|hoq|sho|\xEBta|zim|ar\xEB|kur|rat|k\xEBt|\xEBzo|i t|ill|ars|ite|ind|r d|rin| pl|ie |\xEBrf|\xEB z|a p|rte|h\xEBm|r p|tyr|bli|res|ike|te |kun|m t|lig|a d|ia ", sag: "t\xEE | t\xEE|na | na| ng|ngb|a n|lo | lo|nga|g\xF6 |ng\xF6|gbi|bi |n\xEE |zo |ang|la |\xEE l| wa| s\xF4|s\xF4 |gan| zo|a t|\xEEng|o n|i t|l\xEEn| al|g\xFC |ng\xFC|wal|ala|\xF6 t|al\xEE|a l| k\xFB| nd|\xEE k|\xF4 a| l\xEA|\xE2 t|\xEE n|\xEB t|\xFB\xEA |k\xFB\xEA|\xEA t| mb|\xEE m|\xE4ng|ko | te|o k|\xF6r\xF6|e n|o a|g\xEB |l\xEAg|g\xE2 |ng\xE2|\xEE b|\xEBp\xEB|p\xEBp| p\xEB|\xF4ko|a \xE2|\xEE \xE2|\xEAg\xEB|m\xFB |\xEE s|d\xF6r|\xF6d\xF6|k\xF6d|\xEF n|a k|\xEBe |p\xEBe|\xFC t| k\xF6| \xF4k|ter|a z|kua|ke |eke|yek| ay|\xEE t|\xEA n|ua |b\xEAn|o t|t\xEF |ra | am|aye|\xEE d|\xFB n|\xEA a|r\xEA |er\xEA|\xE2 n|\xEAn\xEE|mb\xEA|r\xF6 |\xE2ng|am\xFB|a y|a m|ga | du| ku|\xEE g| y\xE2|a s|ro |oro|dut| \xE2l|y\xE2 |ng\xF4|\xE4 t| n\xEE| \xE2m|ut\xEF|r\xE4 |ar\xE4|\xE2la|b\xEA |\xF6 n|l\xEF |\xF6ng|o s|a p|\xEE z|\xF6n\xEE|ten|i n|gba|ne |ene| s\xEA|ba |e t| gb|ndo|i\xE4 |di\xE4|ndi|\xF6 k|nd\xF6| g\xEF|ara|\xEFng|\xEE w|l\xEB |do |\xEF t|a w|\xFBng|war| \xE2n|a a|y\xEA | \xE2k| da|\xEE a|ban|o w|t\xEBn| t\xEB|\xE2ra|s\xE2r|n\xEB |d\xF6 |\xEE p|o \xF4|z\xF6n|nz\xF6| m\xE4|\xF4ng|se |da |nd\xE2|s\xEAn|t\xF6n| t\xF6|e a|\xEBn\xEB|\xEB s|\xFCng| nz|o p|k\xE2n| k\xE2|a g|b\xE2 | ko|o l|r\xF6s| b\xEA|\xF4i |g\xF4i|\xEEr\xEE|\xEAnd|ana|ta |\xEE f| po| s\xE2|mb\xE2|\xE2mb| s\xEF|\xEBng|mba|zar| za|ib\xEA| m\xFB|\xEBt\xEF|b\xEBt|mb\xEB|i p| as|fa |t\xE4n|e z|l\xEA |sor|mar| ma|s\xEF |i s|a b|amb|od\xEB|kod|b\xFBn|\xEB n|\xEAse|s\xEAs|\xF6s\xEA|o m|du | af|d\xEB |bor| bo|\xEA s|g\xEA |ng\xEA|\xF4 n|\xE4 s|\xE4t\xE4|b\xE4t|\xFC n|\xEB \xF4|ata|bat|\xE4l\xEB|p\xE4l|kp\xE4| kp|\xF6 w|p\xEB |r\xE4n|\xE4r\xE4|s\xE4r| s\xE4|g\xEF | \xE2z| ad|\xF6 m|g\xEE |\xEFg\xEE|b\xEEr|mb\xEE|afa|r\xEB |er\xEB|\xFBe |k\xFBe| \xE2s|\xF6n |gb\xE2|e l| mo|\xE2l\xEF|w\xE2l|\xEA w|\xE4 w|i \xF4|\xE4 a|p\xE4 |\xFC s|yam| ya|\xE2zo| \xE2b", nno: " de| og|og | ha|er |lle|en |ar |til| ti|il | re|ett|et |ret|om |le |har|tt | al|all|re |ing| \xE5 |ell|and| sk|ska| i |det| fr|t t|an | ei| so|enn|ne |ler| el|den|e s|ver| me|l \xE5|leg|e h| ve| p\xE5|al | fo|dom|for|p\xE5 |av |ein| sa|ten|n s|som|sam|fri|nne|r r|ei |ere|men|gje| st|de |e o| gj|je |nde|kal|dei|st |eg |tte| in|han|i s|ast|r s|ski|t o|med|rid|or |lan|ter|t e| an|ed |r f|te |t s|kje|ge | sl| av|r k|ido|e t| er|ke |jon|sjo|asj|nas|unn| ut|g f|g s|n o|g o|nga|\xE5 f|e a|der|ng |e f| gr|kil| f\xE5|r d|ske|esk| si|lik|e i|n m|ste|at |ern|ona|n e|lag|kra| kr|e n|in |t a|ren| la|nte|e d|nin|e k|nn |tan|na |seg|v p|rav|nsk|ins|me |ame|nes|e m|bei|\xE5 v|itt|eid|a s|ege|f\xE5 |e r|\xE5r |e v|lov|r a| fa|gru|sla|ld |rbe|arb|ome|kap|jen|n t|jel| mo|r l|sta|ane| tr| li| m\xE5| at|kkj|ikk| ik|kan| ka| lo| na|n a|dre|ndr|ha |g g| ar|n d|eld| se|id |ot |mot|\xE5 s|va |t i|gen|nle|t d|n i|ale|ige|nal|rel|run|ag |oko|nok| no|d a|nad|fr\xE5|l d|\xE5 a|ild|var| kv|ve |erd|e e|inn|e u|g i|r h|kte|dig|gar|lin|god| vi|str|i e|l h|nge|end|t h|r o|r g|bli| bl|int|eig|nna|on |se |uta|t f|l f|e g|nom|amf|sin|pet|k\xE5r|vil|ga |m\xE5l|ene|ent|ig |fer|are|d d|g a|rn |ova|ele|g e|ik |g t|per|ens|gre| om|rt |und| un|rna|\xF8ve|h\xF8v|l e|ial|sia", mos: " n | a |e\u0303n| se|a t| ne|a s|\u0303n |se\u0303| ye|e n| ta| pa|n t| t\u0269| so|t\u0269 | la|nin| ni|\xE3a |f\xE3a| f\xE3| t\xF5| bu|ng |t\xF5e| b |ye |a n|or | te|a a|la |\xF5e |tar|e\u0303 | ya|ne |pa | to|ed |ned|sor|e t|te\u0303|aan|uud|buu|g n|r n| ma|maa|n y|ud |a y|n m|ra |\xE3 n|paa|n p|ara|em |a b| wa|d f|n b|n d|\u0303ng|s\xE3 | t\u028A|eng|b\xE3 |n w|an |g\xE3 |og |me |ins| na|e b|b\u0269 | b\u0269| ka|\u0269 b|am |g a|d b|aam|ge\u0303|taa|mb |ore|\u0269 n|yel|\u028A\u028Am|\xE3mb|ab |a m|t\u028A\u028A|wa |a l| b\xE3| ba|tog|ga |m n|re |ba |ng\xE3|nd |aab|aa |yaa| s\xE3|na | t\u0169| s\xF5| da|aoo|n n| y\u0269|\xE3 y|ame| me|aal|dat|n s|b s|ing|\xE3ng|d n|\u0269 y|\xE3 t|\xE3 s| k\xE3|lg |m t|oor|r s|d s|\u0303nd|nge|el |neb|b y|nga|ar |gr |kao| b\u028A|d\xE3 |to |v\u0269\u0269| v\u0269|egd|seg|men|saa|nsa| le|a k|at |ngr|n k|w\xE3 | w\xE3|g t|oog|b\u0169m| b\u0169|a p|d\u0269 |\u028Am |ren|\u0269\u0269m|\xE3ad|\u028Amd|da |b t|\u0169mb|y\u0269 |b\xE3m|b n|d a|ya |g s|eb |l s| yi|ke\u0303| ke|r\xE3 | s\u0269|m s| ti| y\xE3| we|oab|soa| f | z\u0129|b k|m b|oga|go |gd\u0269|a z|\xF5ng|s\xF5n|aor|t\u0169 |\u0269m |b p|\xE3 p|ilg| mi|in | ko|al |ka | no|\u0269 s|p\u028Ag| p\u028A|gam|\u0303 n|lem|\u0129nd|b b|\xE3 f|le |te |iid|uii|bui|ell|wil| wi|s a|oa |r t|e y|a g|aas|e s|\u0269 t|ik |we\u0303| ra|g b|t\u0169u|e p| y\xF5|oy |noy|a r| z\xE3|aba|ull|\u0169 n|m\xE3 |k\xE3a|eem|kat|aka|wak|s n|nda|ll |gre|kog|loa|alo|lal|\xE3 k|mb\xE3|md |e\u0303e|k n|ag |r b|o t|eg | g\xE3|n g|seb|\u028Age|eb\xE3|o a|b\xE3n|sul| su|m y|bao|n z|ate|\xE3 w|kam|mik", cat: " de| i | a |la | la|es | se|de | pe|per|tat|i\xF3 |ent|ret|dre|at |a p| dr|a l|ona|nt |men|ci\xF3|ts |na |aci|al |en |t a|ls | el| to|et |tot|a s|el | co|s d|ers|er |a t|que| en|s i|ta |e l| pr|t d|rso| qu| o | ll|son|ion|t\xE9 | t\xE9|ns |\xE9 d|sev|ita|als|ota| in| l\u2019|est|cio| re| al| un|cia|ons|ame|del|res|ar |ual|lli|s e|va |nal|ia |con|ser|les|i a|r\xE0 | no|pro|els|eva|nac|a c|s p|i l|nci| le|ue |no | so| ca|a d|sta|r a|s l|l\u2019e|ert|s a|a i|re | d\u2019|l d|una|ues|ter|rta|e c|ats|t i|n d|s n|a u|cci|s o| pa| es| na|l p|vol|sen|ber|ibe|lib|s t|t e|ure|l i|lit|er\xE0|ant|da |ici|oci|soc|ra |tra|ens| di|gua|igu| ma|nta|ali|ene|tes| ni|a a|nte|a e|\xE9s |o s|tre|alt|r s|com|ets|i e|par|cti|ect|ten|cte|ote|us |eta|mit|ial|om |se |i d|s s|e d|i p|pre|un |ntr|r l|ecc| tr|seg|l t|ada|dic|eme|qua|ica|eli|\xF3 d|aqu| aq|\xE8nc| ig|ir |iva|ssi|lic|t t|des|o p| ac|ont|act|ing|egu|ria| te|int|ndi| fo|a m| po|lig|lle|inc|ist|nse|cla|hom|ltr|i i|cie|ess|ura|ass|a f|e t|bli|seu|tal|tec|rot|\xFA n|g\xFA |ng\xFA|nin|tac|pen|nde|t s|ic |s f|\xF3 a|ol |evo|lse|tic|dis|cap|rac|mat|iur|liu|man|ll |itj| mi|olu|e i|art|uni|rti|esp|l s|le |ble|eri|os |sos|ies| as| ob|e p|n e|s q|tri|tiu|i c| ar|ni |tur|t n|gur|vid| vi|a v|ran|\xE0ri|ind| si|\u2019es| fa", sot: " le|le |ng |ho | mo| e | ho|a l|e m|ya | bo|a h|lo | ya|ong|ba | ba| ka|na | ts|e t|tho|a b|mon|o y|o e|a m|elo|la |ets|olo|sa |oth|g l|oke|eng|kel|a k|ka | na| di|ang|mot|tla|a t|tsa|tok| se| ha|e b|o t| o |wa | tl|o l|e e|o b| to|pa |e k|lok|ha |aba|apa| a |e h|o n|so |tse|a e|hab|jha|tjh|tso|tsh|kap|se |ana|oko|ela|g o|a s|o m|let|loh|a d|e l|kol|set| ma|a a|bol|ohi|tsw|ele|hi |dit|eth| ke|lan| kg|o s|o h|eo |bo |g m|ke |ala|phe| me|etj|ola|o k| ph|aha| mm|ohl|ebe|lwa|a n|g k|swa|e d|bot| th|di | sa|atl|ena|hle|mol|tlo|ae |hae|abe|g y|ats|lat|i b|seb|to |otl|ane|g b|moh|mel|edi|lek|a f|the|wan|efe|nan|g t|e s|o a|han|ito|me |hlo| hl|shi|rel|ire|lao|kgo|hel|g h| en|g e|nah|ona|bet|man| fu|ell|kga|eha|a p|its|get|kge|mme|swe|si |thu|mat|uma|fum| ef|bel|len|ume|lal|hat|ban|kan|we |bat|tsi|ing|ato|e n|ao |o f|lel|hir|hla|sen| eo|she|pha|ano|eka|ile|fen|i k|tlh|lap|ots|fet|hal|din| ko|hen| fe|heo|got|hwa|elw|a y|i m|o o|bon|hol|son|dis|o p|alo| lo|boh|uto|hut|ben|nya|tha|abo|ita|aka|ama|ose|mab|iso|shw|e y|i l|het|oho|o d|tum| tu|llo|oll| wa|hil|ath|mos|oka|mmo|ikg|mo |uso|hah|emo|adi|boi|llw|dik|nts|lle|non|sel|all| yo|tle|e i|ike|rab|wen|meh|ame|lho|mee|ken| si|eny|oph|yal|pan|g s", bcl: "an | sa|in | na|ng |sa |na | pa|nin|ang| ni| ka| ma|pag| an|n s|ion|sin|asi| as|on |cio|n n|a m| de|n a|ban|a n|a p|kan|rec|ere|der|aro|cho|ech|aci|ga |a s|n d|o n| la|mga| mg|g s|n p|o s|man|sar| o |ho |n l|asa|n k|ay |n m|wa |gwa|igw|al | ig|mba|amb|kat|o i|sai|ong|lam|ata|ro |os |iya|a a|ara|o a|agk|apa|kas|tal|a k|yan|aiy|gka|nac|ali|may|g p|san|ina|aba|a d|lin| ba| da|ag |nka|ink|o m|yo |a i|iba|aka| in|ad |ing| ga|ent|no |ayo|nta|par| pr|ano|ini|hay|aha|iri|dap|ida|abo|han|sta|nal|kai|og |agt|at |pat| co|a g|ant|pro|g n|nte|n i|t n|ia |cia|con| si|dad|do |o k|a b|tan|ron|l n|s a|mag|ran|g m|aki|s n|men|es |g d|y n|tra| so|ona|a l|ra |min|agp|uha|n b|g o|a o|n o|a c|g k|mak|aya|hos|as |ado|o p|ter|bas|ags|i n|lan|ba |g i|bos|gab|bah|li |ico|l a|kap|cci|ecc|tec|ami|isa|imi|ton|ial| re|en |g a|tay|pin|n e|ili|rab|bal|hon|ote|rot|rim|cri|ast|gpa|y m|say|iis|sii|pan|sad|nag| se|ala|gan|bil|n c|nda|d a| di|nga|taw|gta|i a|ios| es|pak|bo |aan|res| pu|a e|sab|ey |ley| le|atu|buh|mit|om |abi|e s|kab|ika|rin|ici|gsa|ale|ica|ni |ipa|nci|ind|nan| ip|cac|waa|nwa|anw| ed|lid|nes|ura|le |ibo|uli| hu|sal| gi|awe|gaw|agi|y p|to |air| bu|rar|int|ito|ndi|kam|dir|agh|oci|soc|lig| li|aen|lar| bi", glg: " de|de |os |i\xF3n| a | e |to |da |en |ci\xF3|\xF3n |der|n d|ere|ito| se|a p|eit|rei|ent|as | co|ade| pe|dad|aci|per| te|do |o d|nte|e a|ten|men| to|e d|al | pr|rso|ers|s e|a t|tod|que|soa| ou|ida| da|te | in| po|s d|oa |cia|es |o a|est| \xE1 |ra |oda| do| li|a e| es|a s|ou |con|e e|res|tra| re|nci| o |s\xFAa| s\xFA|pro|a d|o e| pa|ar |e c|tos|lib|ue | qu|r\xE1 | na|ser|a a|er |\xFAa | ca|ter|ia |dos| en|er\xE1|e s|ica|a c|sta|s p|ber|nac|s n|s s| no|e o|a o| ni|ns | un|ado|e p|o \xE1|io |cci|era|nin|des|nal|is |\xF3ns|ame|nto| so|or |se |com|pre|par|no |o t|o p|ona|e n|sen|s t|por|ais|das| as|cto|\xE1 s|eme|cio|ha |nha|unh|ara|rda|erd|ant|ici|n p|n s|ibe|n e| di|cas|nta| ac|ont|n t|dic|ndi|oci|soc|ion|ing|s o|enc|tiv|so |ali| ma|o s|a u|ngu|tad|e i|ese| me|lic|seu|ect|n c|lid|vid|ria| tr|e t|eli|e l|gua|igu| ig|l e|o m|r a|re |cti|act|ntr|ecc|ual|rec|a l|ido|nde|ind|o n|a n|cal|dis|ta | os|o \xF3|r d|iva|ada|mat|ste|fun| fu|tri| \xF3 |\xE1 p|tor|nda|pen|na |on |n a|o o|ori|uer|lqu|alq|ca |rac|n o|tar|nid|bre|ibr|lo |aso|esp|a v|a i|ode|pod|und|s a|tec|ote|rot|tes|ena|ura|\xEDn |u\xEDn|gu\xED|egu|seg|ita|ome|ari|s i|ase| fa|ond|ial|tic|ixi|inc|sti|ist|cla|cie|e r|omo|s c|man|bal|spe|ati|edi|med|uni|ios|isf| sa|ias|ren| mo|lle|co |ico", lit: "as |ir | ir|eis|tei| te|uri|ti |s t|iek|is |os | ki|us |vie|ri |tur|ai | tu| pa|ien| vi|ali|i t|\u017Emo|s\u0119 |is\u0119| \u017Em|mog|kie|ena|ais| ne|ini|kvi|ekv| la|gus|lai|ogu|nas|\u0117s |m\u0105 | \u012F | jo| b\u016B|s \u017E|vis| ar|b\u016Bt| su|ant|mo |i\u0173 | ka|s i| pr|s s|mas|pri|isv|\u016Bti|oki|s k|s a|ar | sa|sav| ti| ap| ta|tin|kai|\u0119 \u012F|ama|i b|s v|in\u0117|isi|im\u0105|s n|val|imo|jo |aci|gal| nu|s p|rin|men|i p| ku|dar|cij|sta|kur|nim|je |li |i k|tas|ms |i i|arb|ina|sin|jos| na|mis|lyg|i v|i s|asi|tik|ijo|oti|vo |mok|tie| mo| va|t\u0173 |i\u0161k|aik|iam|tai|aut|s b|lin|kit|eik|r t| ly|ntu|jim| i\u0161|tuo|sty|\u0105 i|r p|ega|neg|ma | \u012Fs| re| be|i n|s j|is\u0117|n\u0117s|si |yb\u0117|din|\u012Fst|tat|aus|es |nti|kia|i a|m\u0173 |ara|oje|aud| ga|iai| at|tis|avo|r l|suo|isu|ek |tyb|\u0105 k|am |mos|pag|aug|aty|ie\u0161|rie|int|nt |sva| ve|gyv|ava|tar|\u0161al| da|o n|ima|kal| sk|kla|omi|ip |aip|o a|ito|r j|avi|\u0173 i|ven|yve|als|j\u0173 |kim|alt|ika|agr|nuo|sau|ymo|kio|tym|tu |\u0161ka|nam|eka|uti|lie| \u0161a|oma|nac|kin|iki|tok| \u0161i| ji|s g|s l|ksl|ink|vai|ome|pat|o l|rei|o p|o t|ios|psa|aps|io |san|ni\u0173|uo |min|nie| ni| as|v\u0119 |ver|o k|ikl|cia|oci|soc|r k|eli|yti| to|\u0173 t|irt|ki\u0173|s \u0161|pas|udo|u k| or|uom|uok|eny|eno|im\u0173|sla|i \u012F|ati|t\u0105 |a t|lst|vei|ran|\u0117ji|ary|tim|usi|a k|lti|gas|uot|tos|ist|ndi|\u0117ms|j\u0105 |o v|g\u0105 ", umb: "kwe| om|e o|oku| ok|a o|a k|nda| kw|ko | ly|da |wen|la |end|nu |unu|mun|omu|wa |oko|ka |o l| ko|kwa|omo|mok|iwa|le |we |o y|i o|okw|te |eka|mwe|olo| vy|a v|osi|o k|ali|ete| ey|lyo|wet|si |yok| yo|lo |vo |ang|ong|kut|sok|iso|u e|u o|a e|a l|ye |oci|gi |eye|oka|fek|ofe|nde|i\xF1g|nga|o o|ata|\xF1gi| li|eci| nd|i k|ngi|wat|kal|ilo|ovo|vyo| va|pan| oc|li |so |a y|owi|ci |kuk|e k|nge|wi\xF1| al|avo|kul|lon|ga |ing|ili|e l|ale|lom|ala|ge |ovi|ta |ngo|ati| ya|imw|go |eli|vya|a a|uli| ol|he |ahe|iha|ele|ika| wo| ku|lil|isa|a u|ti |yo |alo|kol|o v| ov|lis|i v|lya|lin|cih|uti| yi|yal|ako|ukw| lo|wav|ung|akw|ikw|yos|val|tiw|upa| ye|onj|i l|lim|and|uka| vo| el|gol|sa |su |kok|aka|e y|lyu|\xF1go| ka|yov|vik|e v|eko|yah|gis|omw| wa| la|lik|e u|ava|tav|olw|ila|e e|vak|kov|omb|aso|a c|tis| ce|tat|iyo|epa|dec|a n|va |u c|eso|ela|ama|kat| ek|kup| ha|o e|co |ekw|asu|has|yon|asi|yow| ke|i c|upi| ci|wil|cit|ole|eyo| co|liw| yu| ca|kas| ec|uta|yim|wal|yol|kiy|e w|yuk|lye| of|o w|o c|i a|ita|ola|lwi|uva|lit|iti|njo| on|apo|ipa|sil| um|lof|wam|kun|i e|anj|cel|del|han| ak|u y|a\xF1g| up|o a|tun|atu|kak|yik|yof|iki|eti|fet|o\xF1g|lo\xF1|ulo|koc|yi |wiw|kwi| ow| os|kuv|ndu| es|vos|yel|uyu|mak|san|mbo|jon|i w|ngu|oco|lok|yas|e n", tsn: " le|le | mo|ng |go | ts|we |gwe| go|ya |ong| ya|lo |ngw| bo| e | di|a l|tsh|sa |e t|elo|a g|tlh|tsa|e m|olo|a b|wa |na |e l|o y|o t|a t|wan| kg|eng|kgo|o n| tl|a k|mon|la | na|ets|ane|mo | o |hwa|shw|tse| ba|e e|nel|a m|ka | ga|tla|ots|o m| ka|ele|o l|ba |e d|dit|e g|got|di | a |se | se|ang|a d|otl|bot|e o|lho|o e|ga |lol|e b| nn|a n|lha|so |lel|tso|o b|seg|ose|let|ola|ego|gol|o o|g l|kan|eka|nng|e k| ma|aka|atl|mol|sen|o g|aba|ela|its|los|tho|ano|gat|oth|yo |agi|tsw|e n|e y|len| yo|hab|o k|to | th|o s| nt|lhe|ho |agw|gag|g y|kga|mel|rel|ire|tlo|o a|ana|lek|iwa|aga|bon|g m|tir|edi|\u0161ha|t\u0161h|lao|g k|i k|tle|ntl| te|dir|ao |e s|lwa|hir|shi|a e|pe |o d|any|a a|i l|a s|ale|alo|a y|g t|jwa| jw|hol|mot|gi |kwa|dik|lon|etl|tet| wa|mai|swe|set|thu|ko |non|ats| me|han|ume|ala| mm|nya|iti|he |bat|hut|nna|ira|itl|no | ne|ro |iro|nan|elw|she|ona|i b|hot|oag|log|a p|wen|i t|ikg|adi| ti|o i|lat|g g|ame|mog|bo |okg|hel|tha| sa|nag|bod|emo|nyo|isi|ile|hok|ogo|uto|si |pa | it| ko|the|diw|ope| op|tek|it\u0161|odi|rwa|sep| ph| kw|pol|gis|bok|me |o j|aag|baa|hop|yal|opa|are|kar|ing|oke|ato|lam|bak|leb|ke | ke|amo|eny|gwa|mok|g n|nye|swa|boa|tum| ja|gan|g a|hag|gon|lan|net|mme| la|ban| fe|ika|rag|ne |g e|nen", vec: " de|de | \u0142a|\u0142a |el | el|ion|ar | e |sio|on |to |e \u0142|o d|rit| in|par| pa| co|a \u0142|eri|\u0142e |ga |der|t\xE0 |a d| ga|un | a |a s|asi|n e| i |ito|e i|a e| on|te |onj|e d|ti |\u2019l |ent|con|int|l d| re|nte|s\xF3 | s\xF3|l g|o a|he | da|a p|e a| \u0142e| pr|jun|nju|da |che| o |e c|sar|e e| ch|a\u0142e|n c|na |e o|it\xE0| na|e\u2019l|art|ta |ens|\xE8sa| \xE8s|e p|men| po| se|tar|a c|sa |bar|a\u0142i|o e|ona|e n| so| \u0142i|i d|i e|pro|dar|e s|\xE0 d|nas|na\u0142|sta|i i|sia|r\xE0 |ars|osi|ze |rso|n d|a n|eze|nji|se |ro |esi|nta|ara|iba|\u0142ib|nsa|tut| l\u2019|tri|ame|o o|ar\xE0|ist|a g|usi|i s| cu|io |ita|nes| ne|rt\xE0| tu|r \u0142| un|nto| ma| si|l p|ond|sos|tra|so |nsi|sun|esu|\xE0 p|e r|iti|ji |onp|ren|ont|tes|ste|in |ia |de\u2019|l s|rio|isi|ra |dis|ras|ghe|\u0142i |e f|sie|r d|i p|man|r e|nda|res|ca |nca|anc|a a|str|a i|o i|go | st| fa|n o|ia\u0142|sen|\u2019st| \u2019s|i c|ntr|ien| di|o c|ver|est|r a|o p|nti|l m|pie|nde|son|ego|ega|ari|r i|var| an|rim|a\u2019l|i o|e m|pod|imi| al|n p|pre|o s|co |ani|ri |uti|rus|tru|l\u2019i|et\xE0|e l| ca|ato| fo|\xF3 d|\u0142it| a\u2019|ant|dez| cr| me|ten|\xE0 \xE8|oda|\xF3 p|\xE0 o|den|en | vi|a v|o n|ne |rte|ltr|teg|nio|ini|or |sti|una|e\u0142i|i g| ze|\xE0 e|npa|ni |ers|a r|a \xE8| su|com| vo|ans|ja |\xE0 i| ar|fon|esp|tro|ote|rot|ura|re |o \u0142|cia|r t|\xE0 c|min|ene|alt|opi|eso|o\u0142o|n s|ute|e t|rse|anj", nso: "go | le|le | go|a g|lo |ba |o y|ng | ma|ka | di|ya | ya| ka| mo|a m|et\u0161|a l|elo| t\u0161|a k|ang|e m|o l|na |e t|man|wa |o t| bo|tok| a |e g|la |a b| ga|a t|we |oke| se|gwe|kel| ba|\u0161a |o a|o m|t\u0161a| na|e l|o k|t\u0161e|a s| to| o |ele|a d|o b|ago|ego|dit|t\u0161h|o g|oba|gob|e d|tho| e |\u0161o |ngw| ye|ong|g l|di |o n| tl|ga |swa|let|olo|tla|t\u0161w|mo |ane|ho |\u0161e |oko|aba|\u0161ha| kg|t\u0161o|wan|ela|hab| sw| th|g o|ola|ye |e b|a n|kgo|\u0161wa|eo |set|ito|e s|ona|log|mol| wa|se |oth|ao |eth|ogo|thu|to |eng|a y|o d|hut|e k|o s|net|kol|lok|a a|gag|rel|ire|e e|nag|agw| wo|ana|o w| yo|hlo|lel| bj|\u0161we|alo|aga|leg|wag| ph|yo |lwa|mel|pha|wo |get|kge|ano|aka|ato|lat|din|o o|hir|\u0161eg|o e|ala|mok|\u0161om| la|mog|nya|e y|lao| ts|mot|i g|ke | ke|kan|iti| me|kar|g y|gwa|eba|ohl|\u0161hi|hel|phe|oph|bo |bot|ume|pol|a w|sa | sa|gon| lo| am|are|gel|ale|a p|len|e n|at\u0161|it\u0161|rwa|o f|emo|edi|bon|bja|ta |tle|ban|no |u\u0161o|tlh|amo|wel|i\u0161o|ing|ge | ge|the|leb|o \u0161|ko |hla|bop|dir|e a|ahl|aem|mae|ntl|\u0161on| mm|mon| fi|lek|oka|uto|omo|i b|ret|ape|oge|lal| nn|o\u0161o|pel|okg|abo|gab|lon|lag|yeo|a f|ile|mo\u0161|kga|dik|\u0161i |yal|i l|tlo|a e|tsh|otl|elw|odi|i t| fe|med|dum|mal|ora|oll|hol| nt|jo |boi|lwe|i s|bat|hom|lho|ikg|tha|nel|mu\u0161|mmu|ha |apa|ne |adi|eny|iri|\u0161al", ban: "ng |an | sa|ang|ing|san| ma|rin|ane| pa|ne |n s|ak | ka| ke| ha|hak| ri|nga|ma | ng| ja|in |sal|lan| pe|n k|uwe|iri|g s|ara|alu|lui|gan|uir|duw|adu|mad|adi|yan|nma|anm|jan|asa|n p|we |g p|g j|pun|a s|a m|man|e h|nge|tan|n m|awi| la|kan|nin|ra |uta| ne|pan|ur | tu|ih |ala|aya|n n|wan|eng|nte|un |ngg|tur|ah | da|en | ut|ana|bas|beb|nan|lih| wi|apa| ta|are|aha|ent|iad|wia|eba|han|ian|ani|ten|din|wi |taw|aan|a n|gar|asi|n w|pen|ebe|da |ika|ngk|a p|keb|ama|ata|aje|n r|aka|ipu|kal|e s|saj|g n|nen|g k|ado|oni|ron|ero|jer|ela|dan|ate|ka |anu|dos|dad|nya|al |aki|i k|a t| wa|ami|ren|ksa|ega|sak|gka|nay|ewa|mar|nik|ep |e p|aks|ndi|sar|iwa|upa|era|neg|oli|ina|uni| pu| se|h s|pat|ban|lak|h p|rep|os |ran|a k|ali|ngs|aga|sa |ar |e m|ung|atu|arg|n l|usa|sam|ngu|ewe|tat|nip|swa| sw|n t| pi|n d|i n|a u|kat|osa|eda| mu|ena|e k| me|r n|lah|k r|nda|ayo|ida|um |uku|k p|gsa|kew| ba|ras|r p|wen|par|pak|k h|eka| ny|i m|end|ari|yom|gay|kab|uan|pa |gi |kin|kum|huk| hu|n u|h r|war|dik|mal|g t|ta |ti |sti|sap| su|s k|per| in|ntu|pol| po|car|rga|pin|eh |r m|tah|ant|nus|mi |idi|did|rya|ary| pr|ngi|kar|pag|gew|ha |k k|min|uru|ut |tut|ita|eta|dil|oma|ri |ust|mus|ira|g d|sio|gam| ag|as |abi|i p|g h|g r|il |awa|lar", bug: "na |ng | na|eng| ri|ang|nge|nna|ngn|gng|ge |sen| ma|app| si| ta|nap|ase|a r| pa|ddi|a n|ri |tau|a t|ale|edd|au |ega|ria| ha|ai |hak|len|e n|ias|ak |ga |a a|pun|inn|ing|ass|a s|nai|pa |nin|sin|ppu|ini|are|gen| ru|ngi|upa|g r|una|rup|ana|ye | ye|gi |ama|i h|lal|man|asa|enn|ara|le |i r|ila| de| ke|ssa|g n|ae | as|e a|san|a m|din|a p|di |sed|ane| se|e r|u n|ada|ann|ala|ren|e p| la|da |lan| we|nas|aga|ipa|i a|e s|pan| ad|wed|reg| ar|sal|pad|ole|i n|g a|lai|asi|pas|a k|i s|ung|rip|g s|ena|jam|ola| pe|ran|ppa|e m|i l|akk|gan|ngk|ong|map|ril|aji|ttu|kan|gar|neg| ne|gka|att|g m|ain| ja|nar|ett| e |k r|i p|nan|i t|ra |e d|ban|gag|bas|eba|beb|ata|sib|nen|i m|unn|iba| mo| wa|ebe|keb|uwe|de | te| sa|par|kel|g p| ba|kun|ura|a d|uru|mas|aka|bol| al|u r|ko |we |kol|tu |add|o r|e y| hu|pol| po|mak|deg| at|bbi|ian|elo|kko|ell|auw|nga|cen|iga|nat|g t|dan| di| tu|apa|uku|huk|ro |tte|ma |ngs|atu|leb|iko|sik|ssi|rga|arg|ekk|rel|uan|la |an |ece|pat|gau| to|ele|a w|e w|a y|lu |a b|gsa|sil|rus|ie |ire|ebb|oe |wet|rek|llu|ppi|tun|dec|wa |awa|baw|u w|ten|ter|ka |per|mat|g y|pak| an|lua|sse|pig|dde|nre|anr|ton|olo| ia|caj|nca|ona|nro|onr|sa |tur|k n|e h|u p|bir|lin|a e|eri|mae|e k|si |elu|a l|tam|ru |ntu|ade", knc: "nz\u0259|ro | a |be |ye | k\u0259|z\u0259 |mbe| ka|a k| ha|akk|abe|kki|hak|ndu| nd|a n|a a| ya| la|ad\u0259|ben|aye|en |inz|kin|yay|\u0259be|ji | mb|lan|ma |d\u0259 |eji|bej|\u0259 a|o a|aro|\u0259la|du |e m|k\u0259l|\u0259na|k\u0259n| ba| ga|ga |lar|e a|u y|an |rd\u0259| ad|anz|shi| sh|ard|\u0259ga| ku|au | au|e h|n k|a s|uro|wa | na| ye|so |obe| sa|ara|iya|kal|ama| n\u0259| su|amb|n n|in |\u0259nd|ndo|kur|inb|d\u0259g|u a|kam|na | fa| nz|and|ida|ba |\u0259 k|awa|la |nyi|a b| fu|d\u0259b|a l|n\u0259m|sur|e s|aso|ana|gan| ci| ab|a d|t\u0259 |a g|kar|d\u0259n|uru|a y|baa|\u0259 n|ru | da|wo |\u0259ra|ndi|ya | s\u0259|t\u0259n|ade|gad|asa|ta |aar|aa |al | as|aya|i k| du|e n| ta|uwu|din| t\u0259|nam|ata|e k|o k|am |a f|o n|t\u0259g|i a|\u0259mk|\u0259 s|nba|awu|iga|nga|wu |ala|utu|o w|da |nza|z\u0259g|\u0259li|gin|ima|z\u0259n|u k|adi|owu|cid|\u0259wa| wa|san|\u0259gi|laa|awo|de |bem|fut|n a|wan|rad|do |ali|i n|mka|e l|u s|z\u0259b|o s|ayi|wur|n y|ibe|iwa|\u0259g\u0259|za |mar|a t|wal|m\u0259r| m\u0259|tu |nd\u0259|az\u0259|wum|fuw|kun|g\u0259n|uma| ng|o g|ema|yir|gay|o h|on |tam|kat|ada|lmu|ilm| il|jam| ja|dob| ny|d\u0259w|yaw| ay|\u0259n |hir|i s|liw|ela|bel|how| ho|at\u0259|nat|iro|aid|z\u0259l|lt\u0259|hi |tin|dum|nbe|o t|\u0259 f|irt|rta|n d|kiw|a h| wo|mu |sad|\u0259 h|\u0259d\u0259|taw|lil|dal|sha|n f|iwo|o f|enz|diy|\u0259di|s\u0259d|yi |\u0259ny|ang|nab|nya|wob|unz| aw| ra| ji|lam| al|nad|wow|ram|\u0259 y|dar|a i|ut\u0259| yi|u n|di |kas|fan|\u0259nz|t\u0259b", kng: " ya|na |ya |a k| na|a y|a m| ku|a n|u y|and|a b| mu|wan| ba| lu|yin|tu |ve |yan| ki|ka | yi|nda| mp|a l|di |ndi|la |ana|ntu|si |so |da |ons|e n|mpe|nso|aka| ke|pe |mun|unt|lu |i y|alu|sal| ma|o m|luv|ta |ina|nza|ke |u m|e y|uve|ndu|ala|u n|i m|za |ban|amb|u k|isa|fwa| ko|to |kon|ayi|ma |du |kim|ulu|o y|kan| me|wa |usa|kus|anz|ama|ang|end| ve|yon|nyo| ny|a v|a d| to|i k|nsi|ins|i n|sa |mos| mo|mbu|e k|und| bi|osi| fw|ika|kuz|len|uti|imp|mab|uka|ata| le|ind|vwa|tin|pwa|mpw|kuk|ba | at|kis|adi|mba|olo|ngu|bu | di|uta|mut|lo |sam| sa|sik|isi|e m|su |ila|ula|e l|mu |usu|abu|nga| nz|lus|yi |yay|ngi|but|o n|ni | nt| ka|dya|kak|dil|esa|amu|ti |imv|o k| bu|bal|e b|wu |awu|kul|ant|gu |ngo|inz|bun|a t|mpa|utu|dis| dy|nka|ank|mvu|kin|u f|iku|ong|uzi|zwa|i l|bim|sad| mb|vuk|dik|uzw|lam|tan|mef|idi|kat|lwa|fun|kuv|ga |ken|bak|ing|luz|baw|bis|yal|uya|luy|bay|nsa|mak|usi|mus|nta|ibu|kub|a a|atu|ufu|uvw|i a|ani|swa|uza| ni|ela|tuk|kol|lak|uso|ola| ns|twa|uko|pam|kut|bam|i s|eng|ku |umb|don|ndo|yak|i t|iti|mbi|eta| nk|iki|gi |uku|a s|luk|sol|nzo|te |nak|oko|mam|tal|efw|pes|dib|u b|ati|gid|uke|nu | nd|umu| vw|ilw|dus|luf|zo |u t|mvw|met|bum| ng|sul|ima|wel|kwe|ukw|zol|yam|ota|kot|lan|zit|i b|i v|kun", ibb: " nd|ke |e u| mm|ndi| ke|me |de |e n| em|o e|en |nye|mme|owo| en| ow|wo |yen|ene|mi |emi|ye |i e|e e|eny| un|nen|eke|une|edi| ek|e o| uk|et |n n|ne |e i|n e|e m| ed|e k| ye| es|ana|em | id|ede|esi| mb|un |di | nk|iet|kpo|na |ukp|sie|kem|kpu| in|kie|eme|did|ie |idu| nt|nam|am |ndo|o u|o o|mo |o n|mmo|yun|t e|din|dib|kpe| uf|o m|ked|nyu|no |ded|o k|an |on |nkp|e a|du |m e|iny|kpa|po |ho | kp|ade|om |ina|dut|ono| ub|m u|uke|bo |ikp|i o| ki|ini|bet|mbe|ida|t m|ode|in |oho|wem|uwe| uw|bio|ut | ot|ru |uru|pur|uto|ni |i m|do |fen|omo|dom|u u|ok | us|to |dik|iso| ut|mde|tom|ibo| is|n i|ri |o i|oki|mok|edu|ide| et|a n| on| ak|diy|ak |nek|a e|n o|i u|man|u o|puk|akp|pan|idi|m n| ob|ara| or|a m|op |a k|t k| ny|ema| as|io |kar|pon|nwa| ik|oto|boh|ubo|n k|ufo| an|i k|m k|k n|pem|uka|o a|i n|uk |ed |wed|nwe| nw|usu|uan|te |mad|ti |e y|a u|asa| mi|obi| ef|n m|m m|dud|sun|n y|ka |o y| ey|t i|ro |oro|ond| of|ra |aba|tod|fin|re |nte|nde|ko |efe| ab|k u|dis|n u| eb|ony|pa |nti|pe |med|da |ndu|mbo|eye|dem|aha|ban|ena|nka|san|i a|sop|ibi|sin|ion|eko|se |he |ruk|oru|eto|sua|d e|odu| od|a o|mba|ama|fok|iok|a a|anw|mek|so |ufe|m o|kon|k m|ha | se|si |asi|bas|ufi|ito|dit|ere|ike|son|ori|pep|fon|u n|a y|bon", lug: "a o| ok| mu|wa |oku|nga|mu |ga | ob|a e|tu |ntu|bwa|na |a a|ba |ang|ra |a m| ng|wan|aba| n |a n|li |oba|a k|unt|la | ab|era|a b|ibw|mun|u n|ka |ali|tee|ate|i m|uli|bul|obu|eek|u a| bu|dde|za | ku|ana|ban|sa |edd|ala| eb|mbe|iri|ye |gwa|emb|omu| om| ek|u b|ant|ira|e o|n o|be |amu| en|eki|kwa| er|dem| ed| ki|nna|okw|ama|kuk|eer| ye|eri|kus| ba|ggw|kol| wa| em|usa|ula| am|inz| ly|eka|any|ola|i e|ina|kwe|o e| eg| ky|ekw|u m|mus| bw|kir|ere|ebi|u e|ri |n e|uyi|a y|y o|a l|onn|uso|u k|ger|e e|bal|egg|o o|mat|zib|izi|aan| at|awa|no |ko |yo |bwe|yin|kul|bir|zes|wal|aga|nge|ako|gan|ebw|nza|lin|esa|e m|oze| ma|riz| te|nyi|kut|ya |ufu|kub|sin|we |ngi|obo|kan|nka|yen|eby|y e|gir|eta|una|aka|lye|tuu|wo |bee|u o|ku |i y|ino|kin|e b|a w|isa|o b|sob|zi |e n|wam|imu|e l|uku|bon|de |san| by|ata|wat|iko|kuy| ag|boz| al|ngo|lwa|umu|ulu|utu|uki|ewa|taa|o n|ong|si |nsi|by |e k|muk|usi|rwa|ne |i o|i n|enk|bye|rir|ma |kug|mbi|iza|lal|uko|kis|enn| og|ole|kye|a g|asa|add|ani|nya|sib|ens|ni |ini|uka|i k| aw|uga|gi |yam|n a|tab|uma|umb|kyo|wen|uwa|bib|wee|ing|a z| ey|ze |emu|ete| et|tew|a t|yiz|mul|awo|u g|nzi| kw|tal|o a|o k|fun|afu|and|i b|ibi|ung|ro |amb|igi|aku|saa|baa|nyu|yig|ayi|gya|wet|kik|go |a s|ti ", ace: "an |ng |eun| ha|ang|oe |peu|ak |on |ngo|gon|ah |nya| ta|na | ny|ung| ng|reu|yan| na| pe|ure|meu|roe| ke|eut|hak|keu| me| ba| ur|at |teu|ee |han|a h|dro|ban| di|ara| be|ata|g n|iep|tie|am |eur| sa|nan|jeu|ut |n n|ep |eug|tap|seu| la| te| ti|uga|e n|euk| da|ala| at|a n|eba|beb|awa|ong|ra |tan|n t|eum|eh |n b|p u|ih | se|nda|h n|a t|a b|h t|ape|eu | pi|oh |eub|e p|lam|e t|ai | ma|um | si|dan|eul|asa|t n|und|neu|ana|n p| wa|n a|bah|lah|and|lan|wa |euh|n k|nyo|n h|eus|ula| bu|k t| je| dr|anj| pa|ma |g s|n m|h p|eng|nga|ran|n d|om |hai|a s|yoe|e b|mas|san|ngg| ra|ta |beu|g d|nje|taw|uka|ek |a k|una|a m|ura|yar|sya|gan|soe|n s| li|sid|ya |sab|aka|k n|ka |dum|ndu|har|ot |di |idr|aya| ka|kat|e u|e d|ok |a p|bat|aba|euj|gah|adi|lak|pat|et |n j| ja|kom|uko|kan|en |asi|ari|t t|aan|un |h d|sa |ame|ate|ama|sia|oih|usa|h h|g k|i n|sal|ila|bue|dee|lin|h b|ieh|g p|bak|aja|huk|ade|k m|dip| in|lee|uny|uh |rak|dar|uta| so|gar| ne|nto|ant|rat|uja|h s|aro| le|g h|nta|ep\u2010|ina|k a|uma|t b| ji|don|gro| hu|k h|ile|t h|t s|ngs|gam|aga| ag|m p|n l|heu|e s|ahe|a l|ane|e a|ggr|\u2010ti|p\u2010t|g b|ue |toe|jam|oe\u2010|eud|k k|ngk|ika|ino|ute|ie |wah|ham|n u|taa|yat|k b|tam|sam|a d|ia |man|use|t l|uk | an|aso|ga |g m| ya|ri ", bam: " ka|ka |ni |a k|an | ni|kan| b\u025B| la|i k|la |ya |n k|ye | ye|\u0254g\u0254|na |li |\u025B\u025B |b\u025B\u025B|\u025B k|ali| ma| i |man|sir|ra | da|en |ama|g\u0254 |wal| wa|ira|n n| k\u025B|m\u0254g| ja|a n|a b| mi|ma |a d|ana| m\u0254| ba|\u2019i |\u0254r\u0254|min| o |iya| si| sa|in |ara| na| k\u0254|i m|i j|dan| k\u2019|i d|a s|len| jo|b\u025B |jam|a m|\u025Br\u025B|i n| n\u2019|a l|a y|k\u0254n| f\u025B|k\u025B | t\u025B|iri|ari|\u2019a |aw |\u025B s|a i|\u0254n\u0254|i t|\u025B b|n b|ani| an|riy|sar|\u025B m|t\u025B |r\u0254 |ko |a w|i b|si |asi|a t|k\u2019i|\u025Bn |o j|a f|a j| fa|den|aya|n\u0254 |n y|i s|ale| de|ang|aar|baa|ila|ala|kal| di|inn|tig|o b|\u025B j|\u0272a |i f|olo|nu |nnu|osi|jos|raw|kun|ati|e k|w n|\u025B n|aga| se|\u0254 m|n\u025B |in\u025B|nti| ta|lan|b\u0254 |i y|\u0254 b|don|ga |ugu|a a|f\u025Bn|da | j\u025B|ig\u025B|\u0254n |\u0272\u0254g| \u0272\u0254|n\u0272a|u k|ada|bil|abi|r\u025B |n\u2019i|o l|\u0254 k| fo| a | ti|aba|nw |jo |n i|a \u0272|go |\u0254 s|i\u0272\u025B|o m|y\u0254r|n o|n\u2019a|ri |h\u0254r|i h|g\u0254n|afa|kab|un | ko|i l|aka|lak|on |e m|igi|a o| b\u0254|o f| s\u0254|n f| fi|ant| h\u0254| c\u025B|\u025B l|dam| ha|aay|maa|fur| fu| ku| t\u0254|ti |ile|gu |m\u025Bn|riw|e b|\u2019o |e f|iwa|\u025B y|uya|nna|n m| do|ago|nga|kar|nka| du|o k|\u0272\u025B |n w| j\u0254|iir|n d|fan|oma|lom|wol|nin|n j|c\u025B |u b|ili|a h|nen|\u0272\u025Bn|ade|\u025B\u025Br|u d|nba|ru |uru|t\u0254n|\u025Bku|j\u025B |dil|gan|i i|sug| su|w l|\u025Bm\u025B|w k|uma|ew |f\u025B |aju|\u0254 o|di\u0272|\u025B i|\u0254 n|s\u0254r|isi|\u025Bya|ank| t\u2019|\u0254n\u0272|r\u0254n|i \u0272|wa | b\u2019|taa|anb|mad|had|lu |yir| yi|amu|aam|lad|\u025Bna| \u0272\u025B|sag", tzm: "en | ye| d |an | n |ur | s |ad | ad|h\u0323e|lh\u0323| lh| gh|agh|n i| i |\u0323eq|d y|n t|eqq| ta|ett|qq |s l|dan| is|gh |la |hur|ell|ra |d t|r s|ghu|is | na| am|nag|i t|mda|ll |n g|a y|yet|t i| te| ti|di |n a|l a| di|akk|in |ara|a d|n d| ar|ma |ghe|n l|ull|it |edd|dd |kul| ku|amd| ur| id| wa| we| ma|a n|q a|li |rt | yi| ak|d a|as |a t|lla|men|es |d i|a i| le|sen|lli|lel|a a|n s|t t|ar |na |n n|eg | tm|n y| dd|tta|t a| as|r a|ken|kw |kkw|twa|i w|n u|d u|deg|mur|t n| tu|s d| ag|at |wen|gar|i l|win|ttu|wak|n w| tl| de|s t|d\u0323e|i n|hel|d l|tam| se|rfa|wan|w d|urt|er |h d|iya|gi |sse|yes|erf|zer| tt| ik|ddu|q i|h\u0323u| in|tle|nt |hed|r i|wa |arw|mga|idd|sef|fan|ize|n m| im|ya |udd|ttw|i u|uh\u0323|mad|tim|s n|i d|emd|wem|tmu|ef |ame|rwa|i g|\u0323en|id\u0323|ddi|ih\u0323|ili|ess| u |el |t d|awa|msa|lan|a l|kke|tte|ikh|em |wad|way|\u0323ud|s y|mma|s k|i i|ant| ya|siy|\u0323r\u0323|un |agi|dda|til|khe|med|tes|ana|taw|l n|d n|chu|all|yek|am |g w|ah\u0323|r d| iz| ne|nun|anu|qan|lqa| lq|t l|iwi| ss|den|gha|ert|der|nes|man|tag|s u|hwa|ehw|yeh|ala|ila|lna|eln| la|r\u0323r|ray|s\u0323e|yed|iwe|n k| l\xE2|yen|ile| il|ha |ski|esk|lt |hul|ekh|del|i a|kra| kr|yn |ayn|a s|h a|ir |ezm|net|eh\u0323|awi|ki |u a|leq|fel| fe|ssi|use|ine|il |r t|tem|edm|hef|ail|aw |naw|yas|asi", kmb: "a k|la | ku|ya |ala| mu| ki|a m|kal| o |u k|o k|ni | ni| ky|mu | dy|dya|a o|lu |ang| ya|tok|kya|nga|na |so |oso|a n|oka|nge|mba|i k|a d|kut|xi | wa|kwa| ka|mut|hu |elu|thu|ba |uth| kw|uka|gel|ka |a i|wal|wa |uto|ene|ban|ga |i m|kuk|ku | mb|e k|u m|ne |ana|kik|u n|a y|ngu|iji| ng|u y|ela|u w|i y|ixi| mw|kit|kel|ye |ika|wen|isa|nda|ji |oke|u i| ji|ena|and|und|kil|ilu|ung|ke |iba|ila|aka|a w|o w|yos|ten|kus|ulu|kub|e m|ta |alu|sa |oxi|mox|amb|olo|kum|gu |wos| wo|wat|ate|muk|gan|lo |tun|du |ndu| it|mwe|kan|san|kis|ita|o m|luk|imo|ong| ph|kye|a t|i d| ye|di |ato|nji|kij|sok|idi| ix|u d|kud|u u|ula|tes|we |e o| ke|a s|o i| di|uku|da |udi|ma |lun|lak|eng|ele|wij|yat| we|nu |wan|uba|e n|hal|pha| se|e y|yen|kib|a j|uke|ki |o n| yo|ito|itu|a u|i n|jin|kwe| im|lon|u o|uta|su |i w|ja | ja|utu|kat|iki|fol|ute| ut|kul|i u| en|kim|adi|ikw|tal|esa|nde|dal|yan|ngo|fun| ko|jil|eny|i o|uki|nen| ik|umu|lel|atu| uf|ing|uso|vwa|o y|esu|u j|ge |ufu|lan|o d|nyo|jya|uma|i j|jix|ukw|usa|unj|ite|o a|kuz|sak|dib|kyo|mun| os|mbo|imb|go |kos|u p|ijy| ib| tu|te |i i| a |han|xil|exi| il|kam|dit| un|a a|ilo|gam|kwi|tul|ivw|ubu|lul|a p| so|iku|uni|se |oko|o o|mwi|ote| to|kex| uk| bh|ufo|e a|ind|bul|sen|inu|ngh|kiv", lun: "ng | mu|la | ku|a k|di |aku|tu |chi|g a| a |ntu|mun|ma | ch|a n|unt|a m|ndi|ela| we| na|aka|ima|ind|jim|eji| ni|i m| in|u w|a i|wu |i k|a w|shi|awu|hi |lon|u m|wej|sha|ing|kul|wa |nak|i n|ala| ja|na |ung| kw|muk|ulo|kum|ka |a c|hak|cha|iku|ewa|wen|a h| wa|g o|u j|kut| ha|ana|vu |ovu| ov|yi |idi|u c|him|nik|ong|adi|mbi|kwa|jak|kuk| an|ang|tun|bi |nsh|tel|ha |esh|amu|han|kus|kwi|ate|ila| he|uch|ula|imb|ilu|a a|kew|enk|uku|mu |u a|hin|a y|zat|nke|u n|kal|hel|ond|i a|ham|eka|eng|mwi|a d|itu|and|del|nde|wak|ins|nin|i c| ya|ona|mon|ina|nji|i h|ach| yi|ama| ak|nat| mw|nyi|kin|umo|lu |ata|uma|sak|ku |udi|ta |ati|uza|kuz|mul|wes|ich|i y|awa|u k|uta|muc|i j|wal|uka|kuy|uke|wit| di|yid|naw|kam|bul|ayi|wan| ko|i i|kad|waw|akw|ni |ken|ji |uki|iha|dik|u y|g e|ush|mbu|si |osi|kos|ahi|ika|ish|kud|ash|twe|atw|any|dil|hih| ye|da |eni|kwe|wil|imu|dim|li |ya |kun|yin|g i|nan|yan|win|iwa|din|tam|etu|ant|amb|mwe|his|nda|hik|til|ule|umu|was|inj|jin|hu |nam|mpi|iki|wah|hiw|kuh|jil| da|eyi|ney| ne|isa|hid|usa|jaw|wat|wun|tan|umb| ma|uya|una|end|lun|pin| ji|ahu|nka|omw| om| ny| i |hen|che|yej|wik|u h|eta|tal|kuc|ulu|sem|wet|fwe|twa|utw|uyi| hi|iji|iwu|mpe|omp|ilo|yil|nic| en|a e|iyi| at|haw|lek|mba|emb| ew", war: "an |nga|ga | ng| pa| ha| ka|han|pag| hi|in | ma| an|ata|mga|hin| mg|kat|ay |ya |a m|a p|gan|on |da |n n|n h|ug |n p|n k|ung| ug|iya|a h|a k|ha |n i|adu|n m|dun|tad|ada| iy|sa | o |ara|may|a n| ta| di|a t|n a| na|y k|o h|pan|kad|tag|n u|yon|ags|ud |o n|ang|al |a s|ana|gsa|gad|a u|o p|man|syo|asa|ala| ba|ag | in|a i|g h|n b|agp|asy|awo|ray|war| wa|to |a d|wo |a a|usa| us|g a|nas|ina|was|taw|nal|ing|gpa|ali|iri|dir|agt|i h|ra |ng |aha|ri |bal|san|ad |kas|aka|g p|o a|a b|ida|awa|hat|no |g m|ini|uga|ahi|y h|o m|tan|ili| bu|uha|buh|gka|agi|bah|aba|i n| su|tal|him|at |pin| pi|hiy|kan|int|mo |n t|did|a o|aya|sya| ko| tu|nah|nan|iba| bi|n o|od |agb|la |kon|lwa|alw|gba|aho|tra|uro|o u|l n|ona|yo |ho |pam|o k|agk|ano|d a|sud|asu|gin|ngo|ni | la|hi |as |rab|uma|ton|os |par| sa|sal|ati|ko |iko|upa|lin|ami|gar|ban|n d|ern|gi |aag|abu|a g|kal|d h|aga|yan|n e|yal|d m|gtu|ak |mil|rin|ba |lip|mah|aud|lau|ka | so| ig|lig|ama| ki|ihi|tik|ras|aso|mag|gud|g i|tun|g k|duk|osy|sos|kau|uka| un|hon|n s| pu| ib|ro |imo|tub|mak|pak|ila|n w|yer|bye|ent|ito|ika|amo|it |sug|n g|dad|ira|edu| ed|tum|aup|ngb|til|non|anu|pod|upo|sak|sam|ari| pr|agh|alu|ato|ta |nta|gon|lik|bli|s h|d i|k h|uyo|ig |uli|bul|dto|adt|isa", dyu: "a\u2019 | k\xE1| k\xE0|ye | ye|k\xE0 | \xE0 |ni |la | b\u025B|\xE1n |k\xE1n| la| ni|ya\u2019| i |\u0254g\u0254|ya |k\xE1 |m\u0254g|a k| m\u0254|b\u025B\u025B|\xE1 k|\u025B\u025B |na |\u0254r\u0254|n k| m\xED|\u2019 y|m\xEDn|\xEDn |i y|\u2019 k| be|\u2019 l|be | ya| k\u025B|te |ma |\xE0 k|\u2019 m| te| j\xE0| w\xE1|n n|nya|\u025B k|\u025Br\u025B|i\u2019 |a b|w\xE1l|ra |\xE0ma|\xE1li| \xF2 |ima| n\xED|j\xE0m|\u025Bn |g\u0254 | m\xE0|e k|\xE0 l|\u0254\u2019 |lim|n\xED |n\u2019 | l\xE1|iya| k\u0254|\xE0 \xE0|o\u2019 |e \xE0|e b| h\xE1|r\u025B |ana|man|r\u0254 |n b|i k| s\xE0|\u025B y|\xE0 m|e s|\xE0 b|li\u2019|\u0254n\u0254|k\u0254n|h\xE1k| d\xED|gb\u025B| b\xE1|n y|ara|b\u025Bn|\u2019 s|k\u025B |m\xE0 | b\u0254|\u2019 n| k\xF3|aw |\u2019 b| s\u0254|riy|\xE0 y|a m|n\u0254 |e m|s\xE0r|a j| s\xED| f\xE0|\u0254 k|\xE0ni|\xE0 s| gb|k\u025Br|s\u0254r|y\u025Br| y\u025B| f\u025B|g\u0254\u2019|n m|b\xE1a| s\xEC| t\xE1|\xE0ri|na\u2019|e w|y\u0254r|a d|i m|a s|a n|\xE1k\u025B| l\xE0|l\xE1 |\xE1ar|d\xED |\xE0 i|ali|a f|en | c\u025B|b\u0254 |an\u2019| d\xE0|yaw|\xF3lo|\u2019 t|d\xE9n|\xECgi|s\xECg| \xE0n|\u2019 f| s\xE9|\u0254 s|\xE1na|\u025Bra|\xF3go|b\u025Br| \xF3 |a t|w n|\u0254n |ra\u2019|e i|\xE0 t|i \xE0|\xE0 d|si |se | se|\u2019 d| a |aya| \u0272\xE1| t\u0254|c\xF3g| c\xF3|s\xED |f\u025Bn|i b|\xE0ra| m\xE1|\u025Bya|lan|k\xE0l|\xE1 d|\u025B l|\u0254 \xE0|nga|n s|a w|\xE0ng|li |a \xE0|\u025B\u2019 |\xE0 n|ko | \xED | d\u0254|g\u0254n|e \xF2|a y|t\xE1 |\xED i|i t|\xE0la| na| d\xF2|so\u2019|u\u2019 |e\u2019 |r\u0254\u2019|a i|a g|ina|kan|nin|\u0254ny|a h|k\xF3 | \xF9 |ili|\u0254 b|w l|k\u025By|e n|den|ama| d\xE9|f\xFAr| f\xFA|i n|i \u0272|\xFAny|d\xFAn| d\xFA|ma\u2019|k\xF9n| k\xF9|\xF2n |d\xF2n|i l|e d|ga |nna|go |\xF2 k|i s|len|k\xE9l| k\xE9|\xED t| n\xE0|\u025B n|a c|i f|\u025Bnn|d\xE0n|\xED \xE0| l\u0254|d\u0254 |tig|\xE1ki|r\u0254n|h\u0254r| w\xF3|da\u2019|gid|\u0272\u0254g| \u0272\u0254|la\u2019|\xFAru|\xF2 b|ow | b\xE8| f\xE1|\u025B t| y\u0254|\u0254 y|j\u0254n|\xECna|m\xECn| m\xEC|\u0272\xE1n|\u025B b|e j|in |\xED y|\xE9le|b\xF3l|\xE0ga|\xEDin|d\xEDi", wol: "am | ci|ci | sa|sa\xF1|a\xF1 | na|it | ak| am| mb|lu |ak |aa |\xF1 s|mu |na |m n|ne | ko|al | ku|baa|mba|te | mu|ko | wa|a s|\xF1u | ni|u n| te| ne|nit|u a|e a| lu|t k|i a|oo |u m|ar |ku |ay | it|pp | do|u k|gu |u y|\xE9ew|r\xE9e| r\xE9|war| ta| \xF1u|i w| bu|xal|llu|\xE9pp|oom| li|u c|on | xa|ul |\xE0ll|w\xE0l| w\xE0|loo| yo| di|kk | ya| aa|u d| gu|yoo|oon|i d|i b|m\xEBn| m\xEB|fee|doo|bu |nn | bo|ew |e m|o c|r n| xe|eex|i m|boo| yi|nam|aay|m a| nj|ara| du|ju |xee|yu |en |een|naa|uy |ana|enn|aar|aju| bi|taa|ama|igg|oot| l\xE9|yi | pa|di | aj|ti |\xEBn |okk|k s|taw|lig|g\xE9e|ral|ee |u l|i l|m m|und|dun| de|li |u j|n w|an |w m|ala| me|eet| se|axa|ata| ba| so|n t|a a| d\xEB|m c|yam|mi |\xE9ey|gg\xE9|ota| gi|ir |ewa| an|a m|aam| ja| ke|ngu|om | su|a d|see|amu| ay|ax |ex |wfe|awf|dam| mi| ng|ey |p l|i n|o n|u t|a n|ool|jaa|ken|une| ye|la |n m|k l|kan|a l|et | yu|bok|mbo|u x|i t|\xE0ng|j\xE0n| s\xEB|k i|nee|i j|e b|men|ok |em |ndi|i k|\xF1 \xF1| lo|m g|nda|\xF1oo|kun|opp|ali| ti|laa|j a|l x|n n|lee|nd | da|ada|aad|are|nj\xE0|eem|y d| fe| jo|y a|l\xE9p|tee|aw |l c|wam|k c|n a|l l|nja|\xEBng|le |a b| mo|aan| fa|e n|m r|oxa|dox|n c|l a|ska|ask| as|aat|a c|mul|l b|aax|u s|y t|eg | j\xEB|k n|ng |g m|gi |gir|k t|\xEBy |s\xEBy|\xEBra|g\xF3o|kku|u\xF1u| b\xE9|tax|ba |e s|m s|i r|i c|k b|a\xF1u|t a|u w", nds: "en |at |un | da|n d| de|een|dat| un|de |t d| ee| he|cht|n s|n e|sch|ht |er |ech| wa|rec|tt | si| to|vun| vu|ett|ten| re| ge|n h|ver|nne|k u|elk| el|t w|ien|lk |sie|to |het|gen|n u|t u|n w|orr| an|n v|r d| in| ve|ch |war|ann| or|\xF6r |t r|rn | f\xF6|it |rer|ner|f\xF6r| st|rre|den|t g|n f|up | up|eit|t a|t e|rie| fr|aar|nd |ich| sc|chu|wat|n g|fri|nn |ege|on |oon|rrn|daa|t h| bi|is | is|rt |ell| se|hte|len|n o|n k| ma|kee|in |ik |lt |e s| mi|n i|aat| we| na|ven|hei|t s|t t|hn |lle|n t|n m| dr|ok | ok|doo|ers| ke|se |lie| s\xFC|nsc|ken|n a|arr|sta|\xFCnn|gel|r s|ren|rd |che|ll |ill|he |e a|nen|ene|men|ie |ins|ahn| gr| wi|ede|kt |\xF6ff|r\xF6f|dr\xF6|raa|sik|llt|n b|an |kan|ard|und|e g|gru|dee|ff |s d|sse|s\xFCn|all| ka|run| d\xF6|eke|st | do|ere| \xFCn|ehe|ebb|heb| gl|min|e e|ens|taa|rch|\xF6rc|d\xF6r|ig |nee|maa| so|al |aal|cho|tsc|e f|ieh|e v|t v|\xFCnd|iet|t m|enn|p s|el |h\xF6r| wo|t o|t n| fa|iht|eih|hen| al| ar|bei|rbe|arb|pp |upp|hup|e w|ehr| eh|utt| be| ut|na |inn|nre|lan|nst|ats|huu|as |weg|t f|e r|\xF6ve|eel|et | ni|mut| mu|pen|t b|a d|wen|ul |uul|e d| ah|str|eve|lic|ert|aak|hee|t k|ste|erk|\xFCss|d\xFCs| d\xFC|t i|der|iek|e m|mit|d d|nic|ent|gt |anr|set| as|aaf|tra|art|oot|r t| eg|ach|t l|l s|ter|akt|and|ame|hon|nat|n \xFC|r e|ite", fuf: " e | ka| ha|ndi|al |de |di |and| no|han|no | ma|o h|nde|e d|aa |e n|dyi|he |i e|un |a n|ala|dhi|yi |la |gol|re |dho|ka |eed|ho | wo|kal| dy|maa|dhe|o k| bh| ne|ko |ann|ni |hi | dh|bhe| nd|edd|won|ol |e e|ddh| mu|haa|ned|mun|e m| le| sa|i m| go|nnd|taa|aan|e h| fo|ede|eyd|ley|dan|e k|gal|aad|ii |i k|o n|sar|ond| fa|en |dya| ko|e b|tta|a k| he|ow |ana|uud|adh|iya|riy|yaa|bha|aak|ani|ett|het|ngu|aar|ydi|ari|i d|e f|i n|tal|le |ral|ira|ita|oni|ya |oo |na |nga|goo|dir|ndh|nda|ee |ydh| ta|e l|are|e g|ina|n n| wa|faa|fow| hu|i w| fi|akk|naa|ree|e w|udh|yan|ugo|i h|to |oto|nan| ng|oot|dyo|udy|oll|ore|fii|kko|mak|e s| da|a d|l m|on |dhu|dii|iid|ude|aam|i f|a e|o f|ady|den|n m|yee| on|e t|laa| la| na|l d|e a|idy|l n|l e|fot|ke |awt|lle|oor|in |o e| do|ubh|n k|a h|a b|a o|tan| ya|yng|att| ho|an |ake|nya|hen|a l|ewa|hun|i s|i t|mo |amu|te |n e|huu|taw|tor| o | ad|lli|onn|bon| bo|dee|bhu| an|ere|hoo|n h| ny|woo|iin|o w| mo|ku |er |der|ota|n f|dha|ant|l h|wti|tin| ke|tit|l l|yam|o b|aal|l s|a f|guu|ell|edy| se|und|n d| ga|ago|a t|eyn| ku|l g|gur|ama|a w|a m|oon|ndu|rew|waa|u m|nee|mu |tii|ri |nta|hin|wal|kaw|bhi| de|tug|dud|ure|uur|hey| fe|wad|do | si|too|o s|ing| te|tay|eta|o t|adu|ang|rda|urd", vmw: "tth|la |thu|a e|na |a m|ana|we |hu |kha| mu|a o|awe|ela|wa | ed|to |ire|ala|hal|dir|edi|ito|eit|rei|ni |mut|aan| wa|a w|u o|akh| on|a n|haa|ya | ni|o y|a a| yo|wak|utt|nla| ot| oh|iwa|ka |okh|att|oha| n\u2019|the|oth|mwa|mul|ari|ne | si|iya|aku|apo|lap|unl|kun|aka| el| wi|tha|ott| ok|ha |oni|e m|e a| at|ale|le | sa|e n| va|ene|ihi| aw|owa|o o|ett|e s|ele|hen|hav|oot|lel|ta |moo|ula|amu|iha| kh| en|e o|han|o n| ak|o a|ota| mo|i a|e w|po | mw|row|nro|ara|\u2019we|anl|i m|e e|de |ade|aya|a s|waw|ihe|ra |hel|eli|dad|a i|o s|ina|vo |a\u2019w|nak| ah|lan|i e|i o|ika|sin| et|wi |eri|n\u2019a|onr| ya|ri |var|ona|liw|hiy|nna|aa |wal|u a|a v|kan|oli| so|ko |huk|her|hiw|riw|avo|u e|wan|thi|aha|kel| an|eko|tek|hwa|sa |yot|itt|e k|uku|laa|riy|una|hun|ntt|yar|khw|ane|ath|pon|e y|o e|iwe|lei|ali|kho|wih| ep|n\u2019e| es|ida|ani| a |nih|n\u2019h|vih|avi|him|ei |lo | ma|aki|kum|i n|i w|nkh|uth| nn|a y|ahi|ile|rda|erd|ber|ibe|lib|i v|ia |ute|ole| it|som|i s|yok| na|ola|nuw|nnu| eh| yi|va |mih|saa|lih|hop|\u2019at|man|hik|a k|ikh|iri|nin|mu |elo|\u2019el|yaw|tte|mur|ont|ila|lik|hol|u s|uma|ma |uwi|inn|ehi|u y|nal|kin|saw|enk|in\u2019|nan| wo|tti|ena|mak| ek|pel|ope|oma|sik|epo|ulu|ro |ira|wir|nli|pwe|mpw|emp|lem|sil|pot|tel| oo|iko|esi|n\u2019o|era", ewe: "me |le |ame|e a|wo |kp\u0254|\u0192e | am| si|\u0256e | me| wo| le|si |sia|e d|a\u0256e|esi|be |p\u0254 |e l|la |e w| \u0256e| la| \u0192e| kp|na |e e| m\u0254| du| be|a a| a\u0256|nye| dz|e s| \u014Bu|uk\u0254|duk| na|e n|ome|ye |dzi|e m|kpl|e b|nya|\u0254kp|p\u0254k|\u0254 a|ple|ke |\u0254 l|\u0254nu|woa| o |iwo| nu|\u0254 m| al|evi|u a|awo|mes|\u0256ek|nu |\u014Bu |o a|\u0254w\u0254|e \u0256|n\u0254 |ekp|gbe|m\u0254n|k\u0254 |\u0254me|e\u0192e|eke|lo |alo| e\u0192|i n| ny|o n|o m|ya |dze| ab|ia |e \u014B|e k|siw|iam|o d|ubu|bub| bu|o k|zi |ukp|li |a m|w\u0254 |nuk|mek| ha|i s|kpe|e \u0192|eny|any|\u0254 s| go|e g| li|mev|\u014But|eme|akp|a\u0303 |an\u0254|gom| ey|bl\u0254|d\u0254w|m\u0254 | w\xF2|en\u0254|tso|iny|\u0254\u0256e|b\u0254 |oma|\u0254na|a k| ta|e t|to |n\u0254n| gb|ia\u0256|\u0256es|\u0254e |bu |egb|a s|vi | \u0192o| d\u0254| he| to|a \u0192|o e|\u0256o | \u0256o|ele|w\u0254w|aw\u0254|i l| an|l\u0254\u0256|abl|\u0192om|e h|i w|a n|w\u0254n|i d|ene|oto|yen|\u0254 \u0256|meg|i a|\u0254 \u0192|x\u0254 |ti | ts|afi|wom|agb| ag|nan|so |uwo|o g|\u0254n\u0254| vo|e\u0256o|t\u0254 |a l|et\u0254| at|o \u0192| ad|ee |se | se|ne | x\u0254|gb\u0254|uti| ma|ovo|vov|vin|\u0254wo|w\xF2a|i b|i t|a \u014B|a d| af|ats|e\u014Bu|e x|\u0256ok|o l| ne|ado|e v|de |\u0254 b|ta |eye| ka|g\u0254m| g\u0254|te |a e|ben| es|ana|a t|i \u0256|r\u0254\u0303|mee|o t| ak|ewo|\u0254 k|s\u0254 |i o|\u0254 e|i m|ema|ded|e\u0303 |man| el|yi |\u0256ev|ata|odz|e\u0256e|u s|k\u0254m|ate|da | xe|ax\u0254| en| aw|edz|ui |buw|heh|uny|pe\u0256|o s|ze |i e| s\u0254|bet|a g|ud\u0254|ehe|ada|o \u014B|o h|abe|he |o w|ts\u0254|u \u0256|ku |isi|kui|oku|\u0254 n| ke|ma |e o| t\u0254|men|ade|dz\u0254|o\u0256o", slv: " pr|in |rav| in|do |pra|ti |avi|anj| do|nje|vic|je |o d|no |li |ih |a p|ega| vs|o i|ost| za|ne | po|ga |ja | dr|co |ico|ako|vsa| v |kdo|sak| ka|ali|ima| im|e s|sti| na|van|i s| ne|akd|svo| sv| al|nja|nih|ma |pri|i d|stv|nos|o p|dru|i p|o s|pre|e n|jo | iz|red|iti| de|i i|neg|o v|ki |avn|vo |ni |em |i v|oli|a v|a i| so| nj|jan|obo|vob|ova|na | ki|ati| bi| ob|ko |ego|i z|tva|gov|r\u017Ea|dr\u017E|i n|kol|i k|e v|kak| ra|bod|se |eva|ru\u017E|jeg|e i|vlj| sk|\u017Een| mo|e p|sto|nak|ena| se|del|n p|ter|\u017Eav|jem|kon|sme|a d|voj|lja| ni|enj|pol| en|ovo| te| ta|va |imi|zak| st|bit| sm|var|a n|i o| z |mi |ve |kat|di |pos|lov|nsk|me |kr\u0161|aro| sp|o k|n s|en | je|tvo|odn|vat|ate|a z|vol|ri |ed |ju |sta|a s| va|ji |sam|a k|o a| s |ene|u\u017Ei|rug|ora|mor|jen|ans|elo|avl|itv|e m|eja|dej|rst|vne|nan|ove|e b| me|lje|r\u0161n|akr|nar|\u010Din|\u017Eiv|\u010Den|i m|o z|so |eni|rod|pno|za |oln|dol|h i|olj|tak|ars|nju|ebn|mu |o o|i\u010Dn|cij|aci|\u0161\u010Di|h p|vi\u010D| ve|raz|nst|ajo|ode|kup|sku|e d|v n|u s|otr|nim|jav|\u0161ne|vi |vni|rim|kaz|ta |ovi|ski|n n|\u010De |ose|v s|o t|da |ev |nik|rem| ko|ara|n d|bra|e o|ijo|si |i u|ra |\u017Eev|ra\u017E|vez|dov|ons|zni|obr| ja| sa|ljn|elj|dst|dis|bre|i b|m v|zna|sod|nem|\u0161ni|ina|an |seb|pro|ere|oji|mej|amo|skr| bo|edn|med|iko|ust|mo\u017E", ayr: "apa|nak| ja|aka|ata| ma|aki|asi|a\xF1a|ana|aqe|\xF1ap|cha|aw |mar|ti |jha|iw |paw|pat|spa|ark|tak|ama| ch|ani| ta|una|jh |hat|kap|kan|a j|jaq|rka| uk|a m|aru|ki |kis|jan|taq| ar|pa |qe | wa|na |a a|niw|may|kas|iti|ach|i j| kh|ayn|ina|pan| mu| ya|ati|a u|yni|ha | am|amp|w k|as |uka|i\xF1a|sa |mun|at |hit|isp|t a|is |ch |ka |khi|\xF1an|e m|an |isi|oqa|ru |asp|si\xF1|ejh|ta |qha|kam|h a|ajh|pjh|at\xE4| u\xF1|han|mpi|sis|sti| in|ita|qen|ham|\xF1at|\xE4\xF1a|t\xE4\xF1|sin|rus| sa|ma |iri|ara|sit|yas|\xF1ja|ska| ut|yat| ku|arj|qat|tis|tap|kha|pas| ji|ura|u\xF1j|jam|a y|nin|nch|ka\xF1| ju|ha\xF1|ukh|na\xF1|kat|qas|i t|noq|rjh|lir|ili|\xF1a |kun|tas| ka|ans|tha|kak|utj|w m|aya|pi | as|i u|nka|us |aqa|kiw|a t|has|jil| lu|tat|sna|tan|tay|w u|ino|i m|in |w j|rak|s a|apj|jas|nsa|asn|pis|i a|mas|wak| ay|w t|i c|njh|ipa| a |s j|s m|chi|kaj|sip|ra\xF1|lur|mp |ta\xF1|a k|uki|rin|upa|iru|hac|ena|uya|muy|amu|wa |a i|llu|yll|ayl|api|hap|nip|ak |aqh|yaq|n m|a c|tja|eqa|uch|ayk|isa|ank|asa|sap|k a|anq|awa|s u|lan|h j|pam|i y| pa|ask|h u|a w|ap |juc|anc|run|nap|ri |ali|auk|inc|nir| aj|tir|ast|ink|anj|isk|kar|jac|ist|ni |usk|khu|yan|mat|a s| ap|pka|en |\xF1as|sir|qer|i k|kit|heq|che|m\xE4 | m\xE4|s k|e j|yt |ayt|way|qa\xF1|naq|nas|n j|sar|war|s w|s c|ika|hik|a l|t u|hus|h k", bem: " uk|uku|la |wa |a i|kwa|a u|ali|ta | mu|a n| na|ya |amb| ya| in|ata|sam|shi|ula|nsa|nga|ang| ku|bu |mbu|wat|se |nse| pa|ins|ons|kul| ba|li | no|aku|lo |ngu|nan|a m|gu | al|ala|mo |a a|fya|a k|ntu|yak| ca|ikw|ing|u u|lik|na |e a|ili|alo|nok| on|u y| um|tu |a p|ga |o n|mu |lwa|lin|sha|i n|ka |ila| ci|ku |uli|oku|ika|and|ulu|ukw|ana|kup|akw|ko |ama|we |cal|a c|amo|umu|aka|a b|aba|kus|lil|o u|cit|kan|yal|mbi|ndu|mul|pa |o a|ish|le |ile|o b|hi |u m|bal|kub|u c|kal|u a|uci|ba |ne |unt|e u|any|ton|kwe| sh|po |ha |yo |bul| fi| if|nsh| ab|du |kuc| fy|e n|abu|ung|u n|cil|nka| ne|kum|a l|fwa|o c|lan|o i|i u|a f|kut| am|und|ush|nda|kuk|afw|no |gan|pan|upo|a o|win|aya|ale|bi | ta|ify|utu| ng| ka|tun| bu|int|wil|fwi|u b|pam|lam|apo|way|ako| ic|bil|ans|uko|apa|wab|mun|ma |nya|cin|ban|tan|wal|ela|o y|ine| af|imi|lul|kap|ngw| li|ubu|e b|mas|nta| ma|ilw|ti |iti|gil|ngi|eka|imb| im|twa|e k|uma|umw|i k|tul|pat| ak|gwa|u k|ita|onk|ant|bom|usa|a s|but|eng|e p|iwa|umo|ici|o f|afu|sa |da |atu| ns| is| wa|mut|o m|nto|ont|uka|baf|ilo|min|mba|kuf|ini|u s|pok|ye |ily|men|kwi|hiw|pal|ind|ute|cak|mak|tak| at|ash|u i|lel|ina|alw|lu |asa|asu|kat|o o|aik|ubo|suk|ule|ufy|upe|e i|til|lya|pak|nam|mwi|efw|lef|ate|tek", emk: " ka|a k|ka | a |an |la | la| ma|kan|na |a l|a a|n k|ya |ni |ama|a m|ma |\u025B\u025B | di|lu | ja| b\u025B|ana|aka|man|di |a b|b\u025B\u025B|iya|d\u0254 |a d|ara|jam| si|a s|m\u0254\u0254| m\u0254| sa| d\u0254|en |\u0254\u0254 | t\u025B|alu|i s|da |t\u025B |sar|den|a j|riy|ila| ye|ani| k\u025B| i |i a|ye |ari| ni|n d|kak|\u025B k|\u025Bn |a t| ba| al|i d|ra |nna|len|\u0272a |aar|n m| se| bo|olo|\u0254n |sil|ele|\u0254d\u0254|n n| k\u0254|i k|ank|\u0254 a|baa|e k|a \u0272|se |bol|\u025B d|lo |u d|kel| s\u0254| na| da|n s| ke|\u0254n\u0254|fan|a f| fa| de|nda|a i|\u025B s|ade|ada|m\u025Bn|ala|i b| mi|and|\u0254 s|lak|\u025B m|\u025B y|li | ha|d\u0254n|s\u0254d|nu | ko|\u0254 b|k\u0254n|ina| su|\u025Bda|k\u025Bd| wo|han| m\u025B|kar|ko |aya|a n|\u0254 m|i m|n\u0254 |\u0254 k|\u0272\u0254\u0254|n a|ata|\u0254ya|n\u0272a|nnu| wa|n b|in |nka|k\u025B |olu|a h|i l|dan| an|mad|le | le|ran| gb|a g|u l|e m|i j|si |kun| ku|u m|\u025Bn\u025B|ii |suu|lat|enn|nad|nin|on |don| \u0272a|\u025B l|aji|\u025B b|mak|u k|yan|a w|u s|\u025Bnn|i t|sii|n t| \u0272\u0254|wo |dam| ad|awa|law|u t|\u0254nn|\u025Bd\u025B|nba|enb|b\u0254 |ibi|jib|waj|gb\u025B|\u0272in| \u0272i|o m|nan| l\u0254|f\u025B | f\u025B|b\u025Bn|din|kol|f\u025Bn|af\u025B|maf|su |usu|uus|taa|u y|e a|ta | ta|aba|\u0254r\u0254| d\u025B|d\u025B\u025B|asa|iri|mir|ba |udu|fud| fu|ini|b\u025Bd|aha|dah|du | b\u0254|\u0254 j|tan|dal|te |ida|lan|biy|ant| do| te|i w|k\u0254d|\u0272\u025B |l\u0254n|\u0254\u0254y|min|\u025B j|nal|n\u025Bn|\u0254\u0254n|aam|e b|ili|kil|nki|en\u0272| du|nni|wan|tii|was|d\u025B |a y|o s|\u025Bb\u025B|bay|ali|l\u0254 |f\u0254l| f\u0254|\u025B a|\u0254 n| t\u0254|bil| bi|e i|nfa|anf|iil|e f|\u0254 l|san|\u0254 d", bci: "an | \u0254 |be | be|un | i |wla|ran|kwl|la |sra| sr|in |n b| kw|n s|k\u025B | k\u025B|n k|le |a k|n n| nu| ng|l\u025B |nun| a |n i|man|n \u0254|\u025B n|n m|kun|a b|e k|i s| ku|\u025Bn |nga| su|mun| n | ti| fa| mu|su |ga |ti | ni|e n|e a|\u0254 f| li|\u025B \u0254|nin|a n|e s|a s|i n|\u0254 n|a \u0254| le|tin| at|\u0254 k|wa |ati|\u0254 l|\u025B i| s\u0254|ta |ata|fat|\u025B b| ma| m\u0254| sa|m\u0254 |s\u0254 |a a|i\u025B |akw|di | s\u025B|vle|nvl| nv|lak| kl|\u025B m|i b|i k|li\u025B|d\u025B |nd\u025B| nd|s\u025B | wu| yo|lik|\u0254 \u0254|n a| ka|\u0254 t|\u025B s| mm|e w|yo | di|i a|ba |ngb|ke | an|und|sa |a m|m\u025Bn|e t|uma| fi|ike| ju|e y| m\u025B|mla|mml|\u0254 b| ny|i i| bo| ye| si| aw| y\u025B|e m|bo |e b|fa |n f|ndi|\u0254 i|i f|e i|o n| tr|jum|\u025B a|a w|kan|i w|wie|wun|a y|n l|y\u025B |awa|\u0254 y|ge |nge|ing|u\u025B |ie |ka | f\u0254|b a| b | fl| o | wl| wi|fin|tra|klu|i m|lo | uf|a i|ang|\u0254un|f\u0254u|n t|gba| wa|ua |uwa|luw|flu|o i|b\u0254 |wuk|uan|fl\u025B|e l|ye |n y|nan|n w| ba|\u0254b\u0254|b\u0254b|\u0254 d|o \u0254|ufl|nz\u025B|anz|kpa| kp|\u025B k|al\u025B|dan| ak|e \u0254|sie|te | af| b\u0254|lun|nyi|kle|nua|u m|lu | na|u i|il\u025B|i t|z\u025B |fu\u025B|\u025B w|a t|ika|u b|\u0254 s|anm|b\u025Bn|gb\u025B| bl|ci |aci|i \u0254|n u|o m|wl\u025B|i l| bu|se | se|e f|i\u025Bn|wo | wo|bu |el\u025B| yi|afi|uka|a j|i j|ian|nma|san|u n|aka|anu|u s|a l|unm|\u0254 w|nda|ote|vot| vo|fi\u025B|e j|wan| k\u0254| ja|o b|usu|\u0254n |n j|anw|\u0254l\u025B| j\u0254|w a| w |kac|o s| ya|i y|ngu| e |u \u0254|dil|tua|yi |yan|nya|ja ", bum: "e a|od |an | mo|e n|mod|ne |am |se | ab|e m| me| os|ai | ai| ng| ak|ose| y | an|e e|y a| nn|le |d o|nna|a a| be| en| dz|nam|ele|ane|i n|nde|i a|n a|de |a m|i\xF1 |end| a |ie |na | na|a n|bel|abe|e d| as|nyi|ki |a b|ngu| ya| ay|ven|mve|ge |m a|ul |gul|da |li |ya | ki|asu|be | bo| e |su | et|oe |l y|i m|yi\xF1|dzi|ebe|yia|eny|ene| mv|i e|ian|ala|e b|nge|en |og | mb|ili|e y| mi|ege|bod|tob| ma|nda|ayi| at|e k|la |abo|\xF1 m|ban|bog|\xF1 a|ve |om |eti| to|bo | ny|fe | bi|e v|o a|g a|d m|fil| fi|dzo|mem|ben| se|abi| si|beb| nd|n e|woe| wo| fe| ek|zie|aye|oan| nt|emv|ia |bia|ato|e f| ad| da|ga |nga|n m|u m| ve|mbo|a e| te|ial|sie|me |ond|ug |lug|m e|obo| al|do |n b|uan|ae |n k|di |k m|e s|e\xF1 |zia|e t|d b|to | ba|alu|ako|o m|si |a s| di|oba|ma |edz|man|ama|n y|m w| vo|n n|d a|bi |aka|m y|min|\u014Dk |k\u014Dk|ak\u014D|zen|em | nk|\xF1 d|mis|tie|i b|ali|kom| es|eku| ze|ii |mam|zi\xF1| zi|ndo|o e|s a|i d|ye |a\xF1 |ake|vom|a f| ev| eb|m m|fam| fa|men|lu |ulu|\xF1 e| mf|dze|boa|gan|sog|tso|s m|is |sal|esa|ses|teg|ese|yeg|mon|u a|kua|any|ela|ad |lad|ete|und|kun|nku|uma|aku|o n|e o|bon|ui |dza|\xF3 m|\xF1 n|adi|e z|die|tii|us |ebo|meb|a d|zo |u n|med|nye|kam|l a|voe|deg|da\xF1|ol |ke |l n|yae|kya|aky|m s|eki|d e|kal|m o|te |oga|nts|i s|omo", epo: "aj | la|la |kaj| ka|oj |on | de|iu |raj| ra|as |ajt|de | \u0109i|a\u016D | li|j k|eco|\u0109iu|ia |jn | pr|o k|e l| al|est| a\u016D| ki| es|jto|co |kon| ko|en |tas|n k|an | en|pro| po|a p|ta |io |ere|ber|ibe|lib|j p|n a| ne| se|o d|to |aci|kiu| in|o e|a k|ajn|j l|ton| pe|do |o a|cio|j e|jta|iaj|eni|ro | ha|taj|ita|rec|lia|toj|ado|vas|hav|per| re|a a|o \u0109|sta|iuj| si|a l|stu|cia|j r|ala|n p| ri|ekt|je | je|ter|tu |nac|al |j d| di|tra|sia|ava|nta|a s| so| aj|sen| ti|ali|uj |a r|nec|int|n d|s r|ent|kto|oci|soc|por|ega|j a|n l|rim|ojn|u h|e s|s l|or |a e|u a|j \u0109|pri|ntr|ont|evi|u r|n j|re |nte|ata| fa| pl| na|ika|igi|tiu|laj|gal| eg|ra\u016D|cev|ice|ric|ne | ku|\u011Di |lan| ju|nen|j s|n s|no |era|pre| el|ian|bla|ebl|vi |tek|e a| pu|don|u s|u e|ers|art| su|i\u011Do|j n|o p|igo|ren|e p|ons|li |j i|ena|er |len|ple|n r|ote|rot|sti|s e|for|n \u0109|niu|imi|son|tat|o n|o r|u l|con|ili|duk|bor|abo|lab|edu| ed|tan|i\u011Di|ioj|is |ni |uzi|lo | ek|res|men|un |dis|e e|el | ma|erv|i e|ern|ato|\u011Do |a d|lig|go |\u0109i |coj|unu|ti |la\u016D|moj|hom| ho|kad|kun|edz| ce|\u015Dta| \u015Dt|i k|zo | ar|n i|u k|ra |kri| ag| kr|j f| vi|ura|nda|ono|rso|par|ndo|and|jur|far|ven|\u016D s|ka |eli|sek|\u0109u | \u0109u|kia|kla|ini|uka|r l|ele|rto| pa|i l|ora|edo|le | ge|l l|opr|ive|ziv|luz", pam: "ng |ing|ang|an | ka| pa|g k| at|ala|at | ma|g p| ki|apa|kin|lan|g m|ata|yan|pam|kar|ara|pat|tan| in| ba|pan|n a|aya|ung| a |g a|g b|rap|ama|man| ni|nin|n k|tin|ati|n i|tun|a a|iya|bal| me|ami| la| di| iy|asa| o |etu|nga|mag|met|ban|in |din|a k|nan|a i|ya |mak| na|ari| mi|kay|aka|yun|ipa| sa|sa | al|rin|a m|na |kal|ant|g s|par|ana|al |ali|ika| da|t k|san|gan|ran|lay|u m|nu |g l|un |a n|atu|kat|awa|a p|t m|ti |iti|syu|mip|ila|aba|n n|la |kas|as |ili|nsa|wa |kap|mal|ra |n d|aki|g n|t p|g i|anu|t a|tas|ans|ita|iwa|uli|i a|mil|a d|bat|sal|ira|li |una|lal| it| pr|dap|ral|ad |usa|o p|kab| an|mik|tul|e p|nte|iba|tau|be |ag |s a|aga| e |lit|mas|wan|lir| ta|abe|g e|abi|n o|n p|lip| li|lam|pro|n l|te |au |kan|g g|ap | ar|ani|alu|e k|it |sab|ale|a b|t i|eng|tek|uri|lab|ail|l a|nti|mam|i i|gaw| tu|ily|ian|liw|inu|da |g d|g t|bra|obr|u i|mba|ina|aru|abu|ie |bie|mit|am |o k|lya|pun|o a|a o|asy|gga|lub|pag|gal|bla|abl|en |len|lat| bi|pak|tur|lin|ksy|eks|ote|rot|e m|ril|sar|u a|u n|tu |gpa|agp|n m| ke| pi|ipu|ka |wal| re|ta |tik|ngg|nap|rti|art|ema|gam|ko |kia|kai|aun|d a|tad|nta|amb|a l|rus|g o| ya|lak|bus| ga|gob|dan|sas|ags|nun| nu|sak| ag|e d|a e|agl|are|bil|ndi|and| pe|iyu|rel|kul|i k|upa|isa", tiv: "an | u | na|nan| sh|en | a |shi|ha | i |sha|a i|or | er|er | ma|u n|n i|han|ar |n s|gh |r n|n u|a m|in |y\xF4 |n a|na |n n|hin| ha|u a|a u|a k|mba|n m|a n|nge| lu|kwa|man|n k|ana| ke| ve|r u| kw| mb| ga|ren|lu |a t|agh|ir |ga |aor|mao| y\xF4|a s|nma|anm|ang|wag| ia|gen|a a|ba |ma | ci| ng| gb|i n|ken|ere|ian| or|aa | kp|e u| ta|ve |r i|ii |gu |ngu| la|ity| he|om |a h|hen|n g|ge |la | ts|n t|e n|oo |gba|kpa|u i|ese|se |aha|cii|r m|tar|r s| ka|ol | ne|tom|u k|ugh|ish| ku|ev | it|doo|ior|n e|on |ene|u s|hi | de|n h| te|yol|oug|a v| to|igh|u t|ty\xF4|ind|i u|i d|ima|iyo|h u|paa|a l|ua |ndi|o u|him| is|r k|i m|ie |hie|tes|u e|yan|hir|ker|di |e s|uma|r a|a e| do|m u|nen|era| io|e a| ya|un | as|ne |tin|ee |mak|u h|tse|n y| za|a g| in|bar| mi|ka |i a|ron|\xF4ro| iy|men|ase|e e|de |\xF4 i|a o|nah|ave| zu|gbe|ran| ti|i v|io |u l| ik|r t|n l| ig| mk|nja|inj|eng|ant| wa|e h|mi |a d|ra |kur| ij|a y|end|hio|lun|l i|r l|av | fa|u z|h s|e i|do |ndo|i k|i i|ta |nta|ake|ash|uan|zua|u m|e m|i l|a w|ura|\xF4m |m\xF4m|vou| vo|i e|iji|e k| hi|da |nda|ghi|kig|iky|see|v s|a f|n c|was|ce |ace|mac|soo| so|r c| mt|vir|ivi|civ|zou|mzo| mz|a c|nev|ves|emb|sen|jir| m\xF4|e l|e g|i y|een|uer|lue|alu| al|u u|\xF4 u|zan| im|\xF4nd|n z|e y|em ", tpi: "ng |ong|lon| lo|im | ol| na|la |ela|pel| ma| yu|at |ait|gat|ri | ra|na | bi|ol |t l|it |rai| ka| o |mi |umi|bil|yum|ilo|man|t r| i |eri|ing|iga| ig|mer|ara| wa|i o|rap|tin|ta |eta|get|lge|olg| sa|wan|ap |ain|ape|nar|in |a m|ini|ant| no|i i|em |m o|g k|n o|sim|an |as |mas|i n| wo|yu |nme|anm|wok|g y| me|kai| ga|ok |tri| pa| ha|ntr|kan|g o|m n|a l| st|g s|i b|a i|g w|a k|g l|i m|g n|gut|ama|isi|o m|l n|sam|kim| in|lo |pim|aim|kam|p l|sin|amt|a s| gu|i l|tai|mti| ko|t w| la| ki|m l|en |g b|tpe|no |nog|m k|a t|utp|tap|sta|m y|nim|nap|api|g p|tu |ts |a p|nem|i y| tu|kis|lai|oga|tim|spe|isp|its|a o|a n|nka|map|nta|l i|usi|g g|o i|s b|sem|lse|ols| sk|n s|t n|m s|g t| ti|luk| lu|ni |iki|o b|sen|o l|os |et |iti|kin|dis| di|a y|asi|pas|ane|ari| pi|ili|ina|o k|aus|s i|ot |a h| ba|npe|anp|nin|aun|yet| ye|ik |lim|gti|ngt|m g|i g|pik|aik|u y|sai|kot|ut |k b|uti|aut|kau|pos|sap|un |a g|s o| ta|am |ve |ave|sav|i s|s n|t o|ank|a w| fr|ul |kul|sku|ti |m b|go | go|u n|g h|n i|ese|i w| ne|ati|vim|ivi|ali|t m|n b|gav|o n|apo|rau|n m|l m|hap|o w|oli|s l|es |les|ple|m m| em|l s|a r|m i|fri|liv|hal| si|bun|pai|dau|nsa|ins|upe| hu|g r|kom|ana|san|n r|nis|gar|aga|bag|n n| pe|m p|m w|s s|avm|uka| as|g m|g e", ven: "na | na| mu|a m| vh| u |ha |we |a n|wa |tsh|hu |a u|\u1E45we| ts| ya|lo |ya |ana|nga|vha|ho |o y|u\u1E45w|a v|thu|ane|mu\u1E45|shi|e n| dz|vhu| pf|elo| kh|nel|ga |a p|a t|fan|ne | zw| ng|pfa|sha|u n|uth|aho| a |a k|mut| ka| hu|a h|ele|kan|kha|o n|edz|wo |dza|zwa|la |u m|a z| mb|e u|dzi|hum|si |i n| wa|a d|mul|e a|zwi|u t|fho|ang|\u1E13o | ha|u s|o v|gan|olo|vho|ela| \u1E13o|lwa|o d|hol| i |ula|aka|o m|no |za |o k|hi |he |shu|han|o t|zo |ofh|lel|led|rel|low|u v|awe|tsi|hak| sh| ma|ka |mbo|ano|e k|yo |elw|a i|a s|bof|ngo|o i| te|nah|owo|i\u1E45w|hil|its|o h|dzo|zi |dzw|mba|lan|e m|i k|sa | mi| si|ing|one|hon|and|ush|go |isa|li |het|e v|a l|swa|ire|sir|i h|i t|a \u1E13| nd| lu|eth|umb|hat| fh|dzh| it|ine|wi |avh|khe|u k|ea |tea|unz|ni |\u1E71he|ath|ndu|hen|ila|u a|mo |wah|kon|ulo|vhe|wan|o w|u w|mis|a a|a y|i \u1E13|isw| an|iwa|hus|hel|e y| sa|alo|mbu| \u1E3Da|o\u1E71h|le |du |mus|o a|uts|ayo|tel|nda|amb|uvh| ho|vel|fun|i v|zan| ny|a w|zwo|o \u1E3D|pfu|u i|adz|hut| bv|kat|lay|hav|hit|afh| \u1E13i|evh|i m| ko| li|umi|a\u1E45w|so |fha|ene|nyi|she| o |mal| i\u1E45|n\u1E13a|mel|zhe|ivh|zit|hii|san|lis|ili|eli|ala|hul|u h|o u|ura|bul|nzo|umo|i i|mbi|haw|hin|o z|u \u1E13| th|o f|oni|lus| yo|alu|lwo|\u1E13a |an\u1E13|fhe|zhi|u d|eah|usi|a \u1E71| re|une|ite|ere|rer|hur|mbe|hal|lul|ule|thi", ssw: "nge|ntf|e n| le|tfu|eku| ng|a n|o l|la |lo |fu |khe| ku|nga|tsi| ne|le |unt| lo|he |mun|a l|nkh|ma |si |ele|elo|ung|nom|oma| no| um|wa |ni |ent|lel|lek|eli|lun|kut|ko |nel|gel|eni|pha| ba|onk| la|e l| em|ats|tfo|a k|e u|o n|e k|nye|hla|ela|umu|ban|oku|ulu|aka|akh|lil|won|ema|lok|lul|hul|a e|eti|ala|tse|khu|uts|ilu|i l| wo|ane|ye |nti|ndl|ang| na|ule|ve |we |esi|nek|na |ke |any|aph|ana|fo |set| li| ye| un|ale|lan|u u|hat|une|te |e b|eko|aba| ka|kwe|and|gan|lwa|ka |gen|tin|nem|phi|fan|wen|ben|mph|nal|kan|i n|ile|lal| ek|i k|gek|kel|o y|lab|ant|seb|u l|len|ahl|\u2010ke|let|e e|ako|ebe|lom|ive|be |ing|a b|kha|etf|uhl|ba |isw|kus|kho|ukh|yel|wo | kw|ikh|o k| im|uma|kat|kub|ne |ndz|sit|alo|ise|ini|omu|uph|abe|ngu|e i|alu|mal|nak|a i|kuv|sen|tis|kun|elw|lwe|e w|iph| in|fun|enk|sek|eke|dle|ti |lin|ase|a a|sa |use|hak|gab|a\u2010k|e a|les|kul|nen|kuh|ta |cal| ti|isa|tfw|ona|swa|ene|ma\u2010|hol|jen|ali|eki|bon| se|to |fol|utf|yen|ula|o e|lon|kuk|ike|liv|sel|ute|sik|lak|eng|hi |ume|kuf|alw|int|sha|nhl| ya|its|i e|fut|i a|und| bu|i u| ab|ebu|emb|dza|ndv|kil|emp|had|yak|ets|ifa|vik|emt|phe|emi|ite| si|tsa|kwa|u n|dla|a u|olo|imi|o m|han|gap|nan|ufa|ata|wem|mts|end|uvi|i w|ekh|owo|low|ind|i i|uba|mel|vum|dvo", nyn: "omu| om|a o| ku|tu |ntu|wa |ari| ob|ra |a k|obu|mun|uri|mu |unt|a n| mu|nga|ri | na|ho |e o|bwa|aba|rik|a e|gye|han|ga |ang|oku|a a|bur| bu|iku|re |ush|aha|iri|uga|ka |i m|ndi|sho|ain|kur|u a|we |ere|ira|ibw|ire|na |e n|ne |ine|iha|aho|ung|and|e k|ye | eb|a b|ban|eki|ing|bug| ni| ab|ba |kut|ura|uba|be |ro |u b|sa | kw|bir|ebi|u n|kwe|e b|gir| ok|i n|kir|zi |abe| bw| ah|o o|kub|i k|gab|ish|sha|era|o e| no| ai|u o|ate|tee| ek|di |rwa|ha |kuk|rin|mer|wah|kwa|i b|bwe| ba|ant|zib|u m|end|ngo|i a|ngi|bus|nib|ama|baa|kuh|iro|iki|eka|eek|i o|nar|o g|go |kug|ya |kan| ka|ngy|ana| ar|o b|agi| ti| or|hi |shi| gw|eme|ash|gan|bwo|o k|rag|uru|ute|ris|ja |mur|ora|tar| nk|she|o a|i e|oro|iba|yes|wee|tek|ara| en|bya|ija|mus| ha|kus|mwe|eir|hem| ne|obw| n |eih|rir|za | we|ekw|naa|yen|o n|uta|iho|rih|har| by|egy| er|e e|amb|da |nda|rei|gi |wen|kwi|aar|eby|rer|yam|a y|isa|yaa|nko| bi|aka|sib|aab|ind|riz|uku|irw|si |nsi|ens|iin|aij|mub|a r|ugi|oon|ata|ki |dii|nka|utu|bas|hob|aga|kor|uko|n o|eri|bye| am|amu|ika|ham|mut|umu|nok|aat|izi|uzi|o m|ebw|oba|emi| em|rim|azi|uka|rye|ona|okw|u k|e a|kum|tuu|ibi|ahu|gwa|bor|mo |aas| ya|ent|ete|u e|ori| ei|bo |ani|amw|aah| ky|uma|eer|der|nde|ugy|a z|ikw|tih|ong|yob", yao: "ndu|chi| wa|du |akw|aku|a m|kwe| ch|und|ni | mu|wak|mun|la |e m| ak|wa |wan|amb| ku|ulu|mbo|ali|u w|we |ila|kut|lu |bo | ma|kwa|a n|ful|ufu|le |se |a k| ni|hil|nga|ose|ete|e u|ang|jwa| jw| ga|na |kul| uf|lam|ne |amu|aka|son| na|e a| pa|oni|u j| so|ngo|wal|and|go |mwa| yi|te |wet|ana|uti|nda|yak|che|lij|gan|i a|a c|ele|cha|o s|e n|jos| ya|o c|ijo|i m|ti |pa |ga | mw|kam|ya |ula|asa|ala|ind|yin|e k|isy|ich|kas|ile|li | ka|ili|o m|ani|si |ach|u a|nam|ela|jil|ikw|a w|mul|yo |uch|aga|a u|hak|asi|kap|gal|kus|mbi|mba|mal|ma |ule|ape|o a|lan|i w|imb|pe |his| al|e w|end|a p|usi|ika|uli| ng|ope|sye|a j|aji|kum|ase|i k|ine|pen| ja|lem|him|u y|e c|mas|ka |och|ena|ekw|sya|ako|kup|a y|any|man|ane|ten|kol|hel|i y|ola|i u|wo |wam|e y| ul|kwi| kw|awo|gam|cho|gak|o n|eng|sen|pel| mp|iwa|da |gwa|sop|jo | ji|mch|ite|ama| li|ngw|hik|syo|u g|mpe|je |oso|ye |emw|ujo|duj|uwa|kuw|bom|ja |i g|mus|waj| mc|iga|tam|upi|jak|ong|dan|a s|sa |was|ole|nde|nji|ene|oma|nya|poc|ons|lo |apo|a l|i n|alo|mka|ale|one|o k|lil|uma|lic|ung|i j|ban| bo|mag|ata|usa|win|lik|hos|o g|sik|lig|lek|kan|anj|iku|pan|ing|u m|wu | aw| mm|eje|uku| yo|omb|pak|a a|he |hin|e s|esy|nag|muc|iji|lwa|mma|kal|ba |nil|uta| nd|awa|i p|ipa|no |ano", lvs: "as |\u012Bba|ies|tie|bas|ai |un | un| ti|s\u012Bb|es\u012B|ien|ir | ir|vie| vi| va|bu |am |\u012Bbu|iem|m i|em | ne|s u|r t|vai| uz| pa|uz |ena|\u0101s |pie| pi| iz| sa|nam|dz\u012B|\u0161an|isk|ar | ar|kvi|ikv| ik|vi\u0146|br\u012B| br|es |r\u012Bv| ka| at|u u| ci|i i|s p|cij| no|edr|in\u0101|\u0101ci|s v|i\u0146a|dr\u012B|dar|s t|u p|u a|p\u0101r| pr|i a|ot |nu |s s| la|z\u012Bb|ska| ie|aiz|jas|ija|v\u012Bb| j\u0101| ap|\u012Bb\u0101|\u012Bgi|vis|arb|t\u012Bb|gu | st|k\u0101 |s i|val|\u012Bv\u012B|\u0101m |\u012Bdz|st |ied|bai|\u012Bgu|s b|\u0146a |t p|ar\u012B|lst|als|ana|s n|gi |l\u012Bd|s l|mu |umu|kas|jum|ju |iju|kum|u i|ba |u n|izs|n p| ai|\u0101 v| da|n\u012Bg|ama|u k|u v|i v|rdz|son| t\u0101|kst|\u012Bks|r\u012Bk|ned| so|iec|s k|aj\u0101|cit|sav|l\u012Bt|st\u012B|pil|u d|t v|per| pe|b\u0101 |n\u012Bb|i n|not|st\u0101| dz|s d|m u|ras|tu |cie|n v|kat|\u0101 a|mat|en\u0101| li|evi|nev| k\u0101|kur|aut|nas| p\u0101|sk\u0101| re|a a|a v|k\u0101d|ebk|jeb| je|bez| be|j\u0101 |l\u012Bb|i u|i p|bie|tik| ta|n i|pam|mie|ard|sar|zsa|n\u0101c|iku|lik|iet|r j|b\u016Bt|rso|ers|du |ikt|sta|ci\u0101|oci|soc|c\u012Bb|tis|r\u012Bb|\u0101da|t\u012Bt|\u012Bt\u012B|gl\u012B|zgl|izg|abi|ul\u012B|aul|lau|tra|atr| l\u012B|ais|tot|atv|umi|nod|anu|t s|a u|ram|ier| ku|a p|t\u0101s|kt |kl\u0101|a s|ta |ant|i\u0101l|ma | ve|n b|n\u0101t|ekl|ret|pre|\u0101 u|lv\u0113|ilv|cil|j\u0101b|sab|eja|o\u0161i|m\u0113r|\u0101ti|ro\u0161|dro|pat|m k|kri|rie|\u016Bt |m v|\u0113t |t t|z\u012Bv|\u012Bga|a i|kar|atk|nea|ts |\u0101du|\u0101t |s m|l\u0101s|n\u0101l| na|ec\u012B|tas|i\u0123i|li\u0123|eli|rel|uma|sas| ga|s g|et |m p", quz: "una|an |nan|as |pas|apa|ana|cha| ka|lla|man| ru| ll|sqa|run|qa |aq | ma|ach|ta |pa |paq|npa|mi |taq|na | ch|a r|kun|hay|anp|tin|nta|nch|yta|chu|asq|chi|aku|lap|ant|qan|kuy|in |ama|aqm| wa|qmi|a a|ay | ya|ata|nap|ati|ipa|wan| ju|ina|a k|aqa| at|may| ja|a l|aqt|ayt|a m|kan|ima| pi|n k|s m|nin|ank|tap|anc|qta|his|hu |pip| mu|n j|all|a c|spa|uku|ypa|qpa|iku|yac|pi | pa|ion|uch|naq|pan|n m|a p|kam|un |han|ayp|a j|aci|nac|awa|n r|laq|s k|nma|anm|usa|aus|kau|isq|k a|n l|cio|asp|lan|n c|ayk|yan|nak|oq |yoq|ayn|inc|nat|uy |n p|yku| im|mun|jin| ji| yu|i k|has|q j|tan|inp|tuk| tu|n y|ura|kay|uyt|kus|\xF1a | na| sa|is |nmi|s t|s w| qa|mac|tun|atu|jat|asi|yni|uya|api|pac|nk | ay|kaq|tiy|waw|inm|ech| de|n t| ri|q k|a y|ma |hik|nti|sin|kas|lin|lli| al|ari|nku|juc|was|nal| aj|i m|pay|rmi|arm|war|a q|yay|yuy|q y|say|i p| ti|usq| an| as|qti|n a|npi|pap|hur|a w|rec|ere|der|ita|q c|rim|s p|aqp|s y|yqa|iyo|niy|ani|i l|unt|s j|juj|kin|iya|q a|huy|a s|ywa|nka|sap|u l|ras|int|sta|uma|kuk|piq|iqp|hak|tay| ta|qas|q r|ypi|maq| su|ash|y r|uj |qsi|lak|heq|che|min|a t| ni|yma|t a|s a| ki|uyp|q q| re|muc|nqa|cho|unc|yas|s l|ayo|y l|qha| qh|ist|pur| pu|la |ill|mas|nam|pis|isp|hap|q w|lat| si|mik|y k|y s|ayq|pat|ali", src: " de|de |e s| sa|os |tu | a | su|tzi|one|sa |ne |ent| in|ion| e |a s|su |der|zio|u d|ret|e d|as |ess|ere|es |men| pr| pe|et |ten|ade|etu|nte| cu|ale|er |re | so|s i|atz| te|in | un| s |ene|a p|zi |ida|e e| on|sos| es|e t|nzi|onz|are|chi| si|le |te |s d| is|dad|u s|a d|net|u a|e c|tad|sse|ame|sso|t d| ch| o |son|at |pro|e i|i p|e a|pes|e p|nt |ntu| co|na |a c|du |hi |u e| li|e o|s e|int|s a| at|sas|un |cun|nu |per| po|ter|n s|ber|ser|nes|tra|zia| di|res|ro |s c|si |adu|sta|nat|s p|unu|era|ia |t s|tos|t a|da |nal|pod|u c| re|s s|sua|ona|ica|ist|ibe|lib|rar|egu|ntr|s o|ua |a a|o s|pre|ntz|ant| ne|ust| da|ndi|una|rta| fa|ode|u p|a e| to|est|nta|a l| pa|u o|und|ra |ada|ert|iss| na|otu|con| ma|a u|ae |dae|o a|otz|dis|eru|cus|les|a i|pet|lid|ali|i s|iat|sia|u t|sot|rat|epe|s n|tot|ssi|t e|ime|unt| ca| as|a n|ind|sti|eto|st |etz|lic|ont|a b|a t|iu |fun|ta |ine|a o| se|nen|nid|suo|s f| tr|ass|e u|nda| fu|ial|ena|sen|das|ghe|e f|pen|ual|gua| eg|pri| fi|par|a f|ria|u i|for|t p|emo|seg|ner|icu|tut| no|eli|run|det|itu|dep|inn|man|tar|lu |dos|r p|art| pu| bo|cum|ina|i d|ura|u n|tes|mos|nem|gur| bi|idu|nde|cu |ata|us |o d|tic|e l|e r|cam|des|\xE8nt|din|ral|cas|uni|ios|com|u l|ado|sio|fin|nsi|n a|ire", rup: "ri | sh|ari|i s|hi |shi| a | ca|ti |ea |i a|tsi|rea|i c|tu | s |ndr|dre|i n|a a|ptu|ept|rep|c\xE2 | nd| un| di|la | la|i l|i u|a s| tu|ear|di |ui |lui| li|are|a l| ar|un |\xE2 s|li |caf|ati|tat|afi|lje|fi | lu|ats|ic\xE2|\xE2 t|ei |r\xE2 |b\xE2 |n\xE2 |ib\xE2|car|i t|jei|si |ali| c\xE2|tul|hib| hi|s h|t\xE2 |or |u c|n a|\xE2 c| in| cu|ul |i d|ilj| ti|\xE2 a|a p|a c|a n|lor|tea|u s| al|int| co|u a|cu |tur|ber|ibe|lib| ic|lu |i p|eas|ts\xE2|i i|u p|sea|lji|min|u l| nu|\xE2 n|nal| pi| pr|ii |url|rar|nu |sta|ots|al\xE2|ji | po|\xE2 p|sti| ts|sii| si|al |oat|can|til|ura|\xE2 l|an\xE2|its|i f|l\xE2 |nat|ina|ist|ert|s\xE2 |i m| st|sia| so|pri|\xE2 d|poa|ips| fa|sht|tut|tse| ac| ap|\xE2nd|t c|ita|nts|gur|a d|sot|ent|sh |lip| su| as|ate| lj|ur\xE2|pur| \xE2n|at |ili|uni|a i|ona|\xE2 i| de|\xE2ts|ash|zea|i e|ucr|luc|it\xE2|un\xE2| ma|act|bli| pu|nit| sc|con|tar|alt| mi|nde|ind|t\xE2t|hti|ntu|rli|ilo|ntr|par|r s|a t|apu|imi|rim|mlu| ni|com|igu|sig|rta|i b|ial| na|tic|l l|ica|est|tsl|\xE2lj|art|pse|chi|iti|unt|sun| ea|r a|adz|l s|tlu|at\xE2|ter|sit|asi|pi |apt|ia |rlo|\xE2r\xE2|f\xE2r| f\xE2|oml|uts|scu| ba|na |lit|ndu|pis|dit|gal|ega| eg|fac|s f|ru |ac\xE2|c\xE2r|ead|atl|ra | ta|ar\xE2|cul|rti|nte| cr|iil|i v|lic|ubl|pub|vre| vr|s l|cri|nom|sc\xE2|asc|nji|ire|ion|aes| ae| du|rt\xE2|idi|ini|sin|eal|uti|cru|vit", sco: " th|the|he |nd | an|and|al | o |ae | in|es |in |t t| ta|cht|or |tae|ich|ric| ri|ion| aw| be|is |s t|tio|ht |bod|dy |ody|s a|e a| he|e r|ent|on | co|his|hes| or| na|ati|wbo|awb|ty | fr| hi|be |e t|n t| sh|ts |sha|er |hal|nal| on|y h|ng |l b|ree|fre|ing|l a|e o|y a| pe|o t|it | ti|e s|ter|s o|air| ma|nat|for|n a|nt |il |til|aw | fo|ona|e c|ny |ony|tit|nti| a |men|ity|e w|at |d t|t o| wi|her|e f|dom|edo|eed|d f|d a|ce |con|an |e i|e e|r t|nte|ar |lit|oun| re|ic |n o|nae|t i| it|ont|sta|oci|soc| as|y i|r i|ith|ne |ane|ons|ed | di| so|ly | wa| fa| pr|y s|ers| ha| se|int|und|e g| st| de| fu| en|nce|hts|d o|o h|res|com| no|le |e h|nin|r a|ie |e p|ear|ial|r o| la|inc|ite|wi |re |ual|qua|equ| eq|ns | le|ess|ali| pu|en |per|e m|cia|as |thi|lt |elt|rit| is|d i| we|imi|din|ild|eil|nor|r h|t n|e b|tri|ntr|ir |iou|eli|ge |lan|s r|s f|ms |tel|cie| me|lea|fai|y t|hat|tha|l t|law|g a|om |y o|sec|e l|ver| tr|ds |r b|l o|iti|un |cti|dis|e d|s d|id |hei|ld |are|rou| un|omm|s c| at|ssi|war|n h|me | ac|ten|bei|t a|uni|eme|tho|rt | ga|s n|m o|hau| li|tie|g o|rni| wh|s w|rie|ern| gr|mai|tat|n n|ica|igi|age|n w|oms|s e|d s| ar|nit|ee |n f|man|arn|rk |ark|eri|ral|e u|k a|el |te |ose|pos|ak |ces|s h| ch|lic", tso: " ku|ku |ni |a k|hi |i n| ni|a n| a |ka |i k|wa | ya|na |ya |fan| ma|la | ti| hi|nel|iwa|a m|ane|hu |a t| sv|ela| na| ka|lo |svi|u n|mbe|nhu| \xE0 | mu|u k|a w|eli|ndz|li |vi |be |kum|ihi|umb|i l|wu |ele|elo|mun| wu|a h|a l|nfa|u l| fa|liw| va|aka|wih| wi|unh|nga|lan| nf|a s| wa|u y|u h|iku|tik| ng|i m|u t| xi|va |o y|le |i a|nu |yel|amb|e k| le|anu|han| ha|isa|ana|eni|a x|lel|ma | kh|a a| la|ga |ndl|i h| li| nt|irh| ko| \xE8 |a y|ti |ani|ta |sa |in |kwe|u a|i w|any|lek|u v|pfu| ye|van|yen|u w|i s|yi |tir|\xE0 n|and| nd|mel|e y|eke|i t|a v|n k| lo|\xE0 k|isi| kw|hin|we |ang|\xE8 k|wan|aye|ko |a f|mah|rhu|i y|end|ham|mba|u f|lul|ulu|hul|khu|kwa|nti|hla|ngo|kel| si|eka|dle|dzi|may|ule|aha|u s|u m|i \xE0|ati|thx| th|dze|nth|anh|eki|oko|eyi|u \xE0| l\xE8|mat|n w|xi |fum|vu |nye|zis|i f|thl|lok|rhi|ava|a \xE8|lak|o n|mbi|t\xE0 |mu |ke |tin|ond|o l|ngu|e n| dj|ong| mi|siw|a \xE0|vik|lwe| ts|uma|naw| t\xE0|hak|\xE8li|\xE0 m| l\xE0|xa |ume|u p|sik|gan|e a|wak|xiw|ind|u d|esv|les|ike|wey| lw|e h|awu|mha| h\xE0| ta|za |dza|i x|nyi|ths|fun|avu|wav|kot|ki |jon|djo|rha|umu|ba |sin|ha |xih|kar|lon|hxu|\xE0wu| nh|to |ung|a u|ola|kol|ali|fu |int|akw|nan|\xE0kw|gul|sun|wen|ikw|gom|kon|sva|kho|hel|sem|tse|sek| y |zen|\xEChi|l\xE0 |mi |e w|hlo|e m|exi|lex|nya", men: " ng|\u0254\u0254 |a n|i n|ti | gb| ti| i |i l|ngi| ma|gi |aa | nu| k\u0254|a k|ia |ma | na| ye| ta|k\u0254\u0254|\u025B\u025B |ei | a |hu |bi |gbi|a m|na | hu|a t|i y| l\u0254|u g|ya | nd|ii |i h|a h|i m|\u0254ny| k\u025B|\u025B n|nya|l\u0254n|mia| mi|\u0254 t|uu |ng\u0254|\u0254 i|ee |nga|l\u0254 |la |ao |tao| kp|i t|ye |nge|\u0254 n|i g|gaa|g\u0254 |i k| le|hou|a y|ung|ni |ind| y\u025B|e n|nuu|a l|nda| hi|umu|num|hin|mu |ugb|hug|oun|k\u025B\u025B|eng|gba|a a|maa|a i| \u0254\u0254|da |\u0254l\u0254|ahu|le |i i| sa|nd\u0254| ji|a w|\u0254ma|mah|y\u025B |e t| lo|saw|o k| va|ta |gb\u0254|u n|i w|li |va |u k|bat| ho| ya|sia|lei|ahi|e a|i j|nde|e m| ki|yei|isi| wo|kpa|d\u0254l|gbu|\u0254 k|ge |awa| gu|wei|awe|e k|ila|ani| wa| ii|ji |aho|ale|ndu|kp\u025B| ha|k\u0254l|a g|gb\u025B|wa |nah|i b|yek|ein|yil|bua|at\u025B| la| ny|t\u025B |\u025B t|kp\u0254|taa| \u025B\u025B|\u0254 s|ie |\u025B k| we|b\u0254m|kpe|ekp|hei|nun|uni|\u025Bi |u t|\u025B y|\u025Bl\u025B|gen|te |ote|wot|\u0254 g|ama|i \u025B|ul\u0254|gul|lee|k\u025B |eke|pe |tii|\u0254 y|p\u025Bl|yen|b\u025B\u025B|e y|\u025B g|\u0254le|ga |a b| t\u0254|u w|aah|baa|lek|o g|a v|bu | he|ili|kia|uvu|aal|j\u0254\u0254|aj\u0254|maj|nye| b\u025B| s\u0254|l\u0254l|ka |\u025Bmb| wi| ka|e h|iti|akp|ang|b\u025Bm| ba|u m|u \u0254| yi|\u025B i|e g|lii|uah|nuv|l\u025B\u025B|gua|y\u025Bn|s\u0254\u0254|ui | l\u025B|dei| pe|i p|mbo|uam|ong|lon|ngo|oko|lok|a p|a s|haa|i v|ula|hii|yee|yan|u a|ati|wat|hi |ke |wee|e i|u i|ew\u0254|\u0254 h|wu |ny\u025B|oi |\u0254hu|\u025B h|u y|vuu|boi|paw|\u025Bng|wie|\u025B w| ga|l\u025B |\u0254\u0254h|bla|\u025B a|\u0254li|ua |m\u025Bi|am\u025B|oma", fon: " e |na | na| \u0256o|\u0254n |\u0256o |nu |o n|kpo| nu| \u0254 | kp|m\u025B | m\u025B| gb| \xE9 |t\u0254n|po |do |yi | si| t\u0254| al| to|gb\u025B|w\u025B |bo |e n|\u0256e |l\u025B | l\u025B| do|lo |in | bo|e \u0256|\u025Bn |o a| w\u025B|\u025Bt\u0254|to |t\u0254 |\u0254 e|sin|o e|a n|\u025B b|ac\u025B| ac|o t|nyi| ny|\u0254 \u0256|okp|n\u0254 |ee |b\u025Bt|\u0256ok|c\u025B |\u025B \u0254|b\u0254 |an |\u025B n|a \u0256| \u0256e|\u025B \u0256|o \u0254|n e|ji |\u0254 n| b\u0254| \u01CE | en|m\u0254 | m\u0254|n b| hw|i \u0256|alo|lin|n n|\u0254 \xE9|n a|n\u025B |\u025B e|un |o \u0256|bi | bi|m\u025B\u0256| yi|i n| ye|kpl| jl| wa|\u025B\u0256e|en\u025B| ji|u e|i e| \u0256\u0254|al\u0254|a d|n m|\u0254 b|\xE9 n|nun|h\u025Bn| h\u025B|e m|e e|\u0254 m|e k|\u0256\u0254 | n\u0254|l\u0254 |\u025B \xE9|\xE9 \u0256|odo|gb\u0254|wa |n k|a y|kpa|s\u025Bn|a s|\u0256ee|\u025B k|a t|jlo|\u0254 w|\u0254 t| s\u025B|e j|k\u0254n|\u0254 g|nnu|inu|pod|b\u0254n|o g|e s|\u0254 s|un\u0254|n \u0256|\u0254 a|o s|a b|n t|hw\u025B|o j|e w|o m|i t|b\u025B |xu |ixu|six|e\u0256e|et\u0254|\u0254 k|l\u0254n|b\u01D0 | b\u01D0| we| ka|nuk|o h|n \u0254|ba |z\u0254n|uk\u0254|a m|\u025B a|n d|ma |o l|hwe|si |u k|az\u0254| az|ema|wem|ogu|tog|nm\u025B|o y|s\u0254 | s\u0254|ali|\u025B l|j\u025B |n l|ayi| ay|\u025B s|pl\u0254| z\u0254|a z|\u0256\xE8 |i k|onu|n w|u w|u a|u m|a e|hun|o b| lo|gun|n s|e \u0254|ka |dan|o d|gan| i |a g|i w|\u0256\xF3 | \u0256\xF3|n g|wu |u t|yet|\u025B g|su | su|oko|a j|\u025B w| hu|\u025Bnn|obo|u l|kw\u025B| ga|a w|i s| fi|a l| ee|pan|lee| le|\u025B t| \u025B |e b|evo|\u0256ev| wu|u g|i a| ma|\u0256i | \u0256i|ye |o w|isi|sis|z\u0254 |\u01D0 \u0256|o k|n\xFA | n\xFA| vi|ple|em\u025B|we | \u0256 |w\u025Bn| ba|o \xE9|nya| da|\u0254 h|gba|\u025B m|fi |ya |kan| j\u025B|e g|i m|jij|m\u025Bt|\u0254nu|u n|nu\u0256| e\u0256|e t|xo |\u0254 y| li|enu|wen|\u0254m\u025B", nhn: "aj |tla| ti| tl|ej |j t| ma|li |a t|tij|an |i t|sej|kaj|eki|uan| to| no| te|ij |j m| ua|chi| se|noj| ki|ma |ika|laj|j k|j u|pa |tle|man|aka|oj |ka |lis|ech|tek|se |uaj|ano|ise|iaj|tec|amp|iua|ali|pia|j n|och| mo|pan|mpa|a k|kua| pa|n t|is |ya | am|uel| ue|eli|ual|ili|en |len|kit|ajt|a m|jto|j s|kin|ijp|amo|ia |jki|tim| ke|mo |hi |ant|ama|ani|noc|opa|oli|aua|j i|ase|tli|nek|itl| ik|ijk|tok|nij|imo|ati|kam|jpi|tik|ipa|one|tis| o |oua|tit|ra |ara|par|nop|tl |jya|a s|iti|lal|cht|ok |ojk| ku|o t|kiu| ka|maj|kej|lak|leu|alt|ijt|mej|lau|kia|ana|ki |kij| ak|jka|n n|lam|i m|mon|e t|til|s t|nti|j a|k t|ita|kip|kem|j p|lan|jtl|tep|lti|lat|ema|uat|ose|iki| ip|ats| ni|ntl|ajy|e a|stl|ach|tou|eua|tot|kat|uam|atl|eui|toj|ni |nau|nka|ist|epa|ite|ale|pal|oka|tia|ajk|ini|j o|tsa|n m|ipi|kui|eyi|uey|jua|a i|n k|mat|nit|i n|oju|a a|onk| on|o o|uik|uil|n s|ken|ijn|ank|a n|ote|i u|i k|otl| sa|kon|as |ino|hiu|xtl|tos|its|tsi|n a|oyo|eka|chp|san|mpo|uak|ko |a u|tol|oke|yek|yol| ya|uas|pam|nok|tin|aui|htl|o k|sij|yok| me|nem|las|jke|ejy|hti|jne|nko|jti| ax|mac|emi| in|i i|mot|oui|ame|yi |lit|i a|kol|jku|sek|epe|lte|pil|nan|axt|ami|ejk|ine|int|ojt|ate|ias|ela|mel|aku|ina|uis|etl|kis|mik|ito|ui |ak | ye|ona", dip: " ku|en |ic | bi|bi |ku | yi| ke|yic|an | ci|aan|raa| th|c b| ka|n e|n a| eb|ci | ra|c k|\u014B y|kua|i l|i k|ka |in |th |ben|ny |ebe|kem| ek| al|eme|men| ye|k e|h\xF6m|nh\xF6| nh|\xF6m |ai |al\u025B|l\u025B\u0308|i y| lo|n k|t k|c e|thi| la| er|\u025B\u0308\u014B|\u0254c |\u0308\u014B |k\u0254c|ek |yen|ua |m k|de |t e|\u014B k|a l|ok |aci| te|n b|at |u l|ith|n t| ep| ac|k k|it |i r| lu| e |uat|ke |u k|aai|o\u014B |te |cin|ken|e y|e\u014B |ui |epi|baa|ath| l\u025B|tho|\u025B\u014B |hin|era|n c|e w| mi|a c|hii|lau|h k|ek\u0254|n y|el | ti|u t|l k|au |kek|nde|l\u025B\u014B| pa|n r|n l| et|h e|a k|u b|nhi|a t|th\xF6|pio|la |c t|e k|ot |rot| k\u0254|iny|pin|\u014B e|ak |loo| le| pi|i e|eba|\xEBk |ik |im |iim|\u014B n|oi | ro| ny| tu|kak| el|i m| k\xF6|hok|y k|pan| we| ba|i t|iic|m e|u n|ye |oc |ioc|loi|k a|lui|wic| wi|e c|and|e l|eu |pir|i p|wen|\u025Bt | l\xF6| li|mit|\xEB\u014B |eth|yit| ey|\xF6\u014B |u m|nyo| aw|e e|i b| ew|i d|den|any|iit|iek| aa|k t|uc |k\xF6u| ko|leu|ir |r e|t t|e r| dh|\xF6k |uee|tue|y b|e t|eny|uny|oo\u014B|i c|cit|u c|n w| ya|l e| ec|kic|h\xF6\u014B|ee\u014B|dhi|a p|uan|m b|ut | ak|yii|y e|ewe|wuc|awu| m\u025B|pat|i n|ien| ed|h t|uk |tii|\xF6un|lie|\u025B\u0308n|elo|am |cii|r k|t c|wel|l\xF6i| w\u025B|bai|th\xEB|u y|tha|eku| en|k c|th\u025B|h\xF6k|\u025B\u025Bt|il |hil| c\u0254|ie\u014B|cie|\xF6ny|k\xF6n|aku|m r|tic|oui|lou|ale|t a|war| wa|eka|ynh|nyn|kue|eke|eri|oth|yoo|lo\u014B|p k|up |k y|m a|y r|die", kde: "na | na|la |nu | va| wa|a k| ku|ila|wa |a w|unu| mu|a v|chi|mun|e n|a m|a n|van|ya |ele|ana|le | ch|amb|ave|sa |lam|asa| vi|ohe|mbo|aka|u a|was|e v|bo | n\u2019|ne |e m|ke |u v|vel| pa|ala|a u|ake| av|hil|ika|ng\u2019|ing|ngo|he |a l|ve |ile|anu|ela|vak|any| ma|vil| li|a a|go |a i|wun|uku|ili|lan|bel|mbe|ene| mw|nda|kuw|ama|nya|ola|ali|kol|kan| di|g\u2019a|au | au|emb|den|eng|lik|uni|wak|a d|\u2019an|e a|lem|ong|o v|ulu|kuk|an\u2019| ak|ach|a p|kal|ma |dya|n\u2019n|lew|mad|aya|and|mwa|uwu|kum|ye |a c| vy|apa|va |ava|ane|hel|mbi|kut|o m|hi |we |ula|ole|u m|umi|din|ton|ji |nji|nil|ewa| il|voh|ade|und|ni |kul|dye|dan|kay|uko|idy|kav|tuk|nan|kam|ka |ia |lia|eli| dy| in|ndo|ond|hin| la|uva| ul|ani|vya|i n|o n|wen|mwe|da |e k|e u|o c|lel|pal|nje|yik|aha|uwa|lil|n\u2019t|nga|ata| ka|she|pan|cho|ang|no |u i|lon|ulo|lim|uli|\u2019ch|dil|hev|i w|u l|e w|mba|niw|mil|ba |yoh|uma| um| kw|u n|wal|vin|vyo| an|bi |a s| ya|dol|hoh|u c|awa|lin| al|ilo|\u2019ni|e p|ale|n\u2019c|mu |imu|lun|kup|yak|yac|\u2019ma|n\u2019m|mah|atu|wav|kuv|hon| lu|i v|hih|jel|utu|hap|uka|o l|u w|itu|ga |o a|i d|umb|a y|inj|taw|ita|lit|lek|val|e c|oko|aku|me |bu |paw|kuy|mak|e i|yen|iho|amw|woh| ih|iku|pil|kun|onj|tul|nah|awu|ahe|i a|kat|mat| wu|pac|ina|olo|uto|ech|kwa|i c|li |ngi", kbp: "aa | pa|se | se|na |n\u025B | n\u025B| wa| y\u0254|y\u028A |\u0256\u025B |a\u0256\u025B|a w|\u025Bw\u025B|\u025Bna|\u025B s|\u0269 \u025B|paa|a \u025B| \u025By| \u025Bw| \u025B |\u025B p|e \u025B|wa\u0256|\u025B \u025B|e p|a p|w\u025Bn| p\u0269|y\u0254 |y\u0269 |a\u0263 |\u025By\u028A|\u0254\u0254 |\u028A\u028A | ta|ala|y\u0254\u0254|y\u025B |\u0254 p|a n| \u0269 |yaa|taa|\u028A n|a a|\u028A \u025B| t\u0254|\u028A w|z\u0269 |la |w\u025B\u025B|n\u0269 | an|\u025B t| k\u0269|an\u0269|\u025B y|ma\u0263|\u025B n|n\u0254\u0254| n\u0254|\u025By\u0269|\u0254m |t\u0254m|\u0269 t| we| p\u028A|\u0269 p|\u025B \u0256|\u0269\u0263 | \u014Bg|ama|kpa|a t|\u0269y\u025B|ay\u0269|a k| t\u028A| k\u028A| p\u0254|daa| w\u025B|pa |\u028A t|\u028A p|t\u028A |\u028A y| \u025Bs|wal| p\u025B| na|\u0254\u0254y| ya|f\u025By| \u0256\u0269|\u0256\u0269 |\u0254\u0256\u0254|\u0254 \u025B| \u025Bl|i \u025B|\u0269 \u0256|w\u025B |\u025B k|\u025B\u025B | t\u0269|\u0269 n|pa\u0263|\u0269 s|\u025Bja| \u025Bj|\u0256\u0254 | \u0256\u0254|\u0254 s|\u025Bla| \u025Bk|a s| mb|\u0269 y|\u025Bya|pal|a y|\u028Ama|\u0254y\u028A|a \u0269|ja\u0256|\u0256\u0254\u0256|kpe|\u0269z\u0269|\u0269na| \xF1\u0269|yi |eyi|k\u025B |b\u028A |mb\u028A|\u028A k|m\u0269y|t\u028Am|al\u0269|\u014Bgb|\u025Bz\u0269| fa|\u028Ay\u028A|\u0269 \u0269|\u0269f\u025B| \u025Bt|k\u0269 |wey|ma |l\u0269 |\u0254\u0254l|nda|\u0269ma|gb\u025B|sam| sa|li | l\u025B|\u0269s\u0269|akp|pak|\u0263t\u028A|ya |lab|s\u0269 |\u014B p|p\u0269f|day|and|kan|\u0263 \u025B|s\u0254\u0254| ye|\u0269m |k\u0269m| kp|uli|kul|\u025By\u025B|\u028Am\u0269|laa|iya|\u0269 k|e e| \u0256o|\u028A s| ha|a\u028A |ma\u028A| \u0256e|a\u0263t|\u0254 k|\u0254 y|a l| ke|p\u0269z|\u014Bg\u028A|\u0263 p| k\u025B|eki|\u0254\u014B |a\u014B |t\u0269 |\u025Bh\u025B|b\u025By|\u028A \u014B|p\u028A |ba | s\u0254| \u025Bd|n\u028Am| n\u028A| pe|\u0256\u028A |ada|pad|\u0263na|le | le|\u028A \u0256|\xF1\u0269n|pe |z\u0269\u0263|\u025Bp\u0269|naa|g\u028A |\xF1\u0269m|\u0263 t|a \xF1| la|hal|\u025Bda| \u025B\u0256|nd\u028A|m n|z\u028A\u028A|\u0256e |ana|ak\u0269|b\u0269 |ab\u0269|l\u025B |\u025B\u025Bn|m t|\u0254y\u0254|ekp| \u025Bp|d\u028A |t\u0269\u014B|\u025Bk\u025B|\u0256am| \u0256a|ina|ma\u014B|al\u028A|uku|suk| su|k\u028A |\u025Bs\u0254|\u025Bt\u0269|lal|\u025B l|t\u025B |e l|l\u028A | k\u0254|\u0269l\u0269|\u025B\u025Bk|i p|pan| t\u025B|\u014B\u014B |aka|p\u0269w|b\u028Ay|ab\u028A|nab|lak|ee |yee|e w|\u028Ana|m p|e t|ye |iye|uu |a \u0256|n\u0256\u0269| n\u0256|d\u0269 |eek|pee|ga |\u014Bga|ya\u0263|a m", tem: "a \u028C|uni| \u0254 |ni |wun| wu| t\u0259|yi | ka| yi| \u028C\u014B|ka | k\u0259| k\u028C|t\u0259k|k\u0259 |\u0254\u014B |\u0259k\u0259| a\u014B|mar|n\u025B | \u028Cm|ma |i t| th|ri | \u0254w| a |i k|a k| ma|i m|ari| ba|wa |tha| k\u0254| m\u028C|\u0254wa|th\u0254|ba |\u0254m | o |l\u0254m|\u028Cma|k\u0254 |i \u0254|a y|\u2010e |o w|\u014B k|a a|al\u0254|te |i o|hal|\u0254 b|a\u014B |\u0254 y|a m|\u014Bth|\u014B y| r\u028C| \u028Ct| m\u0259|kom|ema|yem|m\u028C |\u0254 k|om | ye|h\u0254f|\u0254f | m\u0254|th |e \u0254|\u025B t|\u028Cn\u025B| \u014Ba| s\u0254| gb| ro|\u028C\u014Bt|\u0254 t|\u028Cth|a \u0254|ar |y\u025B |\u028Cte|m k|\u028C\u014B |m \u028C|h\u0254 |ank|wan|\u014Ba |an\u025B|\u014B \u0254|\u014B\u0254\u014B| \u014B\u0254|nko|r\u028Cw|k\u028Cm|ki |k\u0259t| y\u025B| te|a t|\u028Cwa|\u0254 \u028C|\u028Cm\u028C|e a|k\u028Ct|thi|i r|\u0259m |ra |k\u0259l|a w|\u0259 k| y\u0254|\u028Cme|me |a r|m\u0254 |k\u0259p|a\u014Bf|\u0259\u014B |e t|pa |\u0259th|f\u0259m|a\u2010e|\u0259l\u0259|l\u0259\u014B|\u025B k|\u028C k|\u014Be |y\u0254 |ro |r\u028C |\u0254 m|gba|th\u0259|\u014Bf\u0259|li |\u0259 b| \u028Ck|\u0259 t| r\u0259|m r|\u025B \u028C|i \u028C|\u028C\u014Be|ta | ta|e m|bot|\u0259pa|n\u028Cn|m a|ma\u2010|s\u0254\u014B|k\u0259s|e w| ra|t\u0259m|\u014B t| t\u028C|ath|gb\u0259|\u028Ck\u0259|\u0259 s|\u025Bth|\u0254 a| bo|i a|\u014B a|\u014B b|\u025B \u014B| b\u025B|\u028Cr\u028C|nth|ant|\u0259li|b\u0259l|o \u0254|\u0254k\u0254| p\u0259| t\u0254|\u0259s |e y|kar|nka|ran|r k|\u028Cl\u0259|\u0259yi|m t|\u0259 y|s\u0254 |\u0254 \u0254|\u014Bgb|t\u028C\u014B|\u0254th|s\u0254t|m\u028Cy|t k|ot |ith|\u025B m|t\u0254\u014B|t\u0259t|l\u0259s|m\u0254\u014B|r\u0259k|\u0254 r|th\u025B| po|t\u0259 |wop| wo|gb\u028C|f \u028C|\u028Cyi|\u028C \u028C|e k|\u025B a|m\u028Cs|\u0259 g|\u0259n\u028C|h\u0259n|b\u025B |ara|pan|hit| \u028Cr|k\u0254\u014B|a \u025B| wa|iki|\u0254 g|to | to|l\u0254k|o t|\u025B r|e\u014B |m\u028Cl|gb\u025B|\u028Cgb|hi |pi |tho|m\u0259 |\u014B\u028Cn|\u0259r |o\u014B |ro\u014B|m \u014B|h\u025B |po |i\u2010e|m\u028Ct|\u028C t|\u028Cy |ti |\u2010o |f \u014B|op |\u0254 w|na |sh\u0254|nsh|ekr|sek|\u028Cse|a\u014Bk|bas|m\u0259t|ra\u014B|k\u028Cr|\u028Ct\u028C|wat| \u025Bm|h k|i y|han|\u0259k | ya|k\u0259b|k\u0254n|yik|ayi|yir|p\u0259y|\u028C \u0254|\u025B\u014B |\u0259te", toi: " ku|a k|wa |a m| mu|la |e k|a a|ula|ali|ya |i a|de |ang|aku|tu |kwa|aan|ntu|na |lim| al|ulu|lwa|mun|ngu|luk|ele|gul|mwi|wi |gwa|kub|imw|ons| oo|oon|se |nse|ant|zyi|unt|ela|si | ak| ba| an|and|a b|ala| ci|uki|isi|nyi|ide|kid|zya| lw|ba | kw|uny|eel|laa| ul|cis|yin|kun|uli| zy| ka|tel|nte|ina|kul|kuk| ma|ili|waa|uba|wee|kwe|ede|led|nda|we |mul|nga|kus|da |izy|kut|wab|ana|i m| ya|ukw|o k|amb|yan|ka |e a|lil| bu| am|uci|a l|ilw|a c|li |sal|ban|e m|e u|u o|ila|bwa|aka|bo |bul|akw|wak|ale|kal|o a|i k|amu|bil|umi|bel|mbu|lan|usa|egw|abi|lo |awo|kuy|kup|igw|ko |uko|kak|wo |law|aci|i b|u b|ati|o l|yig|asy|ubu|wii|ika| bw|le | mb|ga |ung|kum|kka|ku |ndi|aam|muk|cit|mal|bun|yo |ukk|ind| wa|i c|bi |aya|ne |ene|len|mo | ab|upe|a n|mbi|eya|kuc| lu|ndu|a y|syi|u z|uta|ile|abo|u a|a z|ita|uka|aba|bal|imo|ley|iin|yi |ti |u u|lik|du |asi|yak|o y|u k|ube|iko|cik|zum|muc|ani|ule|mil| mi|mbo|twa|e b|umu|was|di |o n|ngw|lwe|nzy|peg|zye|abu|buk|kwi|liz| nk|i n|bam|ta |kab|alw|eka|mas|u m|imb|onz|kon|sya|miz|gan|tal| we|uum|no |yil|int|lem|del|nde|end|mbe|uya|oba|azy|iyo|i z|lek| ng|o o|cii|i o|a u|mba|mu |a o|ako|yik|yeg|ezy|a w|mi |ni |omb|kom|o b|syo|iya|usi|min| ca|e c|aul|lau|uku| aa|yee|ama|yal|kam", ekk: "sel|le |se |ja | ja|use|ise|mis|\xF5ig| va|ele|ste|ust|gus|us |igu|st | v\xF5| \xF5i|dus| on|on |el |te |ma |al |iga|v\xF5i|a v| in|nim|ini|da |e j| te|ist| ig|ime|l o|lik|mes|e k|\xF5i |est| ko|l i| ka|end|iku|ese|adu|gal| se|e v|tus|lt |ami|n \xF5|ema|aba|vab|a k| ra|lis|val|a i|atu| ku|tsi|ud | mi|ada|ali|e t| ta|ta |stu|ast|ks |ole|tam|sta|nda|es |ell|tes| pe|e s|ik |a t|is |i v|ahe|rah|t v|ava|bad|kul|ine|ne |t k|vah|ei | ei|e e|ga | ol|lus|kon|s v|ida|s t|gi |a r|mat|ioo|tud|tel|kus|oma| om|dse|k\xF5i|teg|ees|i t|aal|ndu|a s|a j|ing|a a|iel|s k|vas|tse| ee|tem|ul |igi|lle|s s|i s|ili|vus|uta|elt| sa|aja|e a|eks|min|its|asu|a p|s o|sus|sli|i m|oni|oon|sio|ses|e o|ete|abi|\xFChi|ega| ki|ari|emi|si |i e| ke|uma| ri|usl|ahv|ats|eva|lev|ab |pea|eis|nis|rds|\xF5rd|v\xF5r|sed| k\xF5|t\xF6\xF6| ni| ab| \xFCh|rid|nna|saa|teo|sek|ni |kor|ale|imi|ait|t i|sik|isi|eli|e \xF5|dis|ots| so|ata|lem|eab|\xFCks|tum|dam| m\xF5|a o|\xF5ik|idu|har| t\xF6|e h|nin|alt|onn|ite|ult|e m|mal|isk|kai|ead|sea|koh|d k|as |jal|p\xF5h| p\xF5|aks|rit|hvu|dum|een|e p| \xFCk|s j|set|ed |ng |bie|a \xFC|uri|s a|kin|ald|e r|t m|eri|i k| al|eel|lli|eta|dad|ule|elu|s p|i p|rii|hel| to|ndi|lse|als|iaa|sia|sot|rat|ara| k\xE4| ve|and|umi| su|de |etu| v\xE4|na | s\xFC| ha|a m|e i|lit|lu |per|nud", snk: "an | a |na | na|re |a n| su| ga|a k|ga | ka|a a|en |su | se|a s|ta |ma |e s| ta|ser|ere|ama| i |aan| ra|un |nta| ma|n s|do | ki| ja|a g|jam|ne |nan| do| nt|ana| da| ya|ane|wa |\u014Ba |n \u014B|ri |e k|u k|a d| \u014Ba|ndi|ni |ra |raa| ku|taq|maa| si| ba|a r|tan| ke|aaw| sa|ren|gan|and|a b| be|a i|awa|di |i s|oxo|aqu|oro|kit|me |lli| go|tta|ini|ya |a j|ari|a m| xa|iri|aar|oll|gol|a t|e m|i a|i k|xo |sir|n d|aax|lle|a y|be |on |baa|n g|ran|din|ara|u r|e d|u n|qu | so|axu|are|o a|a f|ke | wa| ko| an|man|xar|dan|kan|ron|sor|li |de |nu |fo | fo| no|kuu|n t|pa |nde|n k|i g|len| \xF1a| du|n n|nme|aad|u b|ang|axa|e y| fa| mo|ppa|app|kap|o k|o s| fe|ell|a x|att|kat|ure|i x|xun|e n|aba|mox|ti |i t|n y|yan|enm|ada|n f| bo|n b|a \xF1| yi|i m|u t| di|da |iti|qun|nga|u a|xu |itt| ha|le |i d|sel|i n| me|ill|e t|riy|o b|ro |u d|du |saa| re|dam|haa|ind|xa |n x|ono|i i|nen|lla| mu|ond| ro|o n|udo|uud|ant|aga|ku |la | wu|nma|eye| tu|edd|fed|nox|no |o d|uur|sar|gu |e g|kil|\xF1aa|ire| bi|inm|ken|e b|tey|ite|ira|yu |a w|ina|iin|yi | xo|n w|o t|taa|ka |u s|an\u014B|uga|und|i r|ore|bur|i b|fan|iba|xib| xi|een|u m|ogu|bog|bag|oqu|noq|oor|e r|bir| ti|i j|ban|ye |dii|o m|anm|ene|kka| ye|\xF1a |rey| le|i\xF1a|ita|mun|ura|kaf|ank|e i|li\u014B| li", cjk: " ku|a k|yi |nyi| ny|la | ci|a n|a c|wa |we | mu| ha|nga|i k|ga |ana|uli|kul|a m|esw|ela|ze |mwe| ka|ha |sa |tel|a h|swe|ung|ci |a u|ate|ma | wa|u m|kwa|han|e m|kut| mw|uci|mbu|mut|nji|nat|ya |uth|e k|na |pwa|kup|thu| ma|wes| ca|ji |kan| ya|lit|hu |i m|aku|asa|i n|mu | ul|ca |ang|e a|ina|anj|ali|imb|cip|amb|mba|i c|li |e n|i u|ka |muk|a i|awa|naw| na|fuc|ifu|uta|upw|ing|ize|ula|lin| xi|ukw|lim|ong| kw| an|ite|xim|ta |ita|umw|ulo|umu|has|kuh|kha|u c|ala|nge| mb|wo |ila| ce|cif|a a|kus|ama|tam|mwi|ili|te |imw|bu |o k| ng|ba |ipw|lo |bun|ikh|wik|ulu|mo |ufu| ak|o m|utu|ngu|imo|mil| mi|ko |a w|kun|ciz|i y|a y|kuk|eny|aze|aci|pwe|aka|o n|yum|uha|uka|e w|o y|lon|kum|e u|cim|ku |swa|e h|e c|mbi|emu|no |nal|a x|was|fun| un|uma| ja|usa| li|wil|uze| ye|o w|isa|o c|nda|ngi| es|kat|e y| in|aha|waz|yul|esa|yes|una|wen|aco|i h|cik|ema|pem|nyu|ika|kal|bi | ik|mah|zan|aso|so | uf|ata| iz|apw|tum|tal|o l|wam|iku|sak|ja | up|kwo|umb|oze|yoz|uni|ges|cen|kuz|wak|mul|wan|ulw|o u|cyu| cy|u i|e i|tan|mun| um|kuc|ngw|cin|co |go |ngo|da |ipe|ge |lem| uk| yo|lwi|nin|ikw|u k|kuf|uso|i w|upi|lum|gwe|uki|upu|and|pha|ces|ond|i j|man|ile|ule|uku|gik|akw|ino|ele| if|hac|tha|cil|eka|za |vul|uvu|hel|lu | it|ke |lya", ada: "mi | e |n\u025B | n\u0254| n\u025B|n\u0254 | he|he |\u0254 n| a | ng|e n|a n|k\u025B | k\u025B|aa |\u025B e|bl\u0254| bl|i k|i n|g\u025B |ng\u025B|\u025B n|l\u0254 |e b| mi| ma| ko|\u025B h| ts|ko |\u025B a|e h| ni|hi |\u025B\u025B |\u0254 k|a m|i h| \u0254 |tsu|ma |ami|a k| ny|\u0254 f|oo |loo|i a| be|ya |e m|be |ni | kp|o n| si|si |nya|emi|\u025B m|f\u025B\u025B| f\u025B|laa|a h|a b|e j|a t| hi|e k|umi| ka|kpa| je|\u0254 h|e s| lo| ye|\u0254 e|i t|pee|omi|m\u025B | pe|mla|i m| wo|je | ha|\u0254mi|\u0254 m|maa|sum|ke |i b|o e|\u025B k|\u0254 t|alo| ml|ee | sa|\u025B \u0254|\u0254\u0254 |ha | na|l\u025B | l\u025B|a a|i l|\u0254\u0301 |a s|\u025B s| h\u025B| gb| su|n\u0254\u0301|e p| al|e\u0254 |\u025B b|ne |i s|\u025Bmi| fa|uaa|sua| b\u0254|\u0254 a| to| ji|o k|kaa|b\u0254 |a e|ihi|u n|e \u0254|o a|yem|ane|e w|su\u0254|imi|e y| ke|\u025B y|\u025B t| hu|san| we| j\u0254|\u0254hi|l\u0254h|e e|ahi|i j| bu|\u025B j|pa | ja| ku|wom|ng\u0254|a j|him| bi|ue |e a| ya|tom|\u0254 b|gba|o m|jam|\u0301 k|fa |ake|\u025B p|uu |ba |hla| hl|sa |\u0254 s|hu |e f|h\u025B\u025B|u\u0254 | tu|e t|ji |ts\u0254|j\u0254m|i \u0254|kuu|kak|\u025B g|a l|wo | s\u0254|tue|o h| gu|isi|\u0254 y|s\u025B |o b|s\u0254\u0254|g\u0254 |ia | ju| k\u0254|eem|e l|akp|pak|li |e g|s\u0254s|a p|u\u025B | yi|ti |sis| s\u025B|to |\u0254 l|\u0254 w|\u025B w|y\u025Bm|na |hia| nu|\u0254s\u0254|ye | m\u025B|sem|ase|kas|hi\u0254|naa|\xEDhi|n\xEDh| n\xED|kpe|usu|uam|on\u025B|kon|nih|ee\u0254|mah|o l|a w|lam|\u0254\u025B |s\u0254\u025B| pu|h\u025B | ba|gu |a g|a y|\u025Bti|p\u025Bt|kp\u025B|o s| f\u0254|bi |nyu|o j|we |se |uo |suo|ade| ad|bua|su |ngm| fi|i\u0254 |u k|haa|o\u0254 |koj| am|\u0254 \u0254|\u025Bp\u025B|i p|i e|gu\u025B| wa|io |jio|bam|\u0254 j|yo ", quy: "chi|nch|hik|anc| ka|una|man|aq |pas|ana|kun|as |paq|nan|kan|ikp|cha|sqa|qa |ik |apa|aku|ech|kpa| de|cho|rec|ere|der|spa| ma|asq|am |an |taq|pa |nam| ru| ch|yoq|ta |na |a k|ina|mi |qan|ima| ll|aqa|lli|oyo|hoy|ant|ach|run|nap| im|pi |nak|hay|asp|ayn|wan|q k|ipa|nta|hin|oq |cio| hi|iw |liw|inc|ion|aci|chu|lla|pip|nas|npa|nin|qmi|kay|kas|ota|a m|anp| hu|all|nac| na|yna| ya|ari|api|i k|w r|nku|iku|in |a c|ama| pi|may|hu |kuy|ay |nma|has|onc|hon| ot| wa|aqm|anm|a p|n h|ata| li|ikm|hwa|chw|ma |awa|a d|qta|ara|pan|m d|pap|yku|yni|a l|kma|q l|ich|kin|huk|a r| ha|yan|uwa| ca|nqa|kta|ikt|q m|a i|n k|kpi|mun| sa|cas|usp|q h|wsa|aws|kaw|bre|ibr|lib|lin| al|k c| mu|ask|kus|a h|s l|ank|q d|yta|e k|tap|q c|mpa|pak|ski|qaq|ien|i c| qa|tin|re |nni|uch|isq|a s|was|ern|s m|a a|ayk|onn|s y|oqm|aqt|ruw|qpa|aqp|par|amp| am|nmi|ley| le|ayp|nat|i h|yma|onk|law|ier|map|a f|war|ita| ni|naq|yac|tar|naw|ayt|sak|n a|anq| pa|a q|aya|val| va|ypi|sti|ast|ura|n c|m p|s o|w n|rno|bie|obi|gob| go|rma|qar|nit|m i| ta|say|haw|s i|k l|asa|k h|rur|pun|wac|onm|tan| fa|tam|kap|oqt|i d|s c|ici| ju|a t|ras|ran|uy |uku| tu|qay|k k|ku |q i|arm|uk |a y|nti|awk|um |igu|esq|k m|sap|ati|aw |a o|asi|n p|sic|isp|aru|ukl|ten|pti|qku", rmn: "aj | te|te |en | sa| le|el | si|si |aka|sar|pen|les|kaj|es |ipe|sav|qe |j t| ha| th|ja |hak| e |and| o |ave|i l|ar |ta |esq| an|a s|sqe| ma| ja|ia |nas| ta|imn|e t|as |mna|kas|e s|haj|tha|s s|ark|asq|e a|nd |i t|s h|rka| na| i | pe|mes|isa|vel|cia| bi|ne |bar|kan| aj| me|avo|utn|the|e k|lo |o s|est|qo |e p|n s|ard|hem|a a| av| so| ba| pr|\xF5l |a t|mat|ima|l p|e r|e m|e o| ka|man|orr|e d| di|o t|rel|sqo|re | ov|ika| re|qi | ak|enq|ere|vor|e b|res|ove|avi|ve |ver|o a|n t|o m|akh|rak|rim|a p|no |ana| ra|sti|d o|len|aja|rre|but| va|sqi|ker|r s|de |ata|ren|ali|ara|ste|ti |e l|r t|vip| ke|na |i s|ang|\xE0ci|tim|nqe|kon| ph|n a|nip| de|j b|\xE0lo|al | pa| bu|are|vi |d\xF5l| ni|tar| ko|na\u015B| pu|o k|n n|l a| po|\u015Baj| \u015Ba|on |lim|er |ari|i a|ven|pe |\u015Bti|a\u015Bt|a l|o p|e n|dik|rd\xF5|nik|l s|tis|ast|tne|a m|a e|erd|ndi|ni |pes|rin|j s|e h|aba|rab|khe|tni|eme|uti|rip|uj |amu|ano|\u0107ar|a j|\u0107a |la |khl|l t|e z|do |o z|ri |mut|kri|alo|soc|i p|so |ran|del|kar|nu\u015B|anu|pra|din|nge|nis|ut\u0103|rde|vo |muj|mam|i d|n\u0107a|en\u0107|ate|uni| as|iko| zi|rdo|l o|j p|eri|emu|ane|i b|o j|oci|i r|a d|ing| je|i\xE0l|e e|l l|\u0275ar| za|tes|\u0107ha|pal| vi|l b|\u0275e |l e|a\u0107a|one|kin|to |ziv|imi|a n|per|ter|ris| kr|s a| st|o b| \u0107h|a i|kla|da |nda|e j|ekh|jek", bin: "e o|ne | ne|an |en |be | o |e e|wan|mwa|n n|vbe|mwe|emw|evb|na |omw|e n| em|in | na|ie |gha|n e| gh|re | om|wen|e a|ha | ke|e i|n o|gie|bo | vb|wee| kh|win| ir|vbo| ev|o n|gbe|he |hia|nmw|o r|a r|o k| no|ogi|nog|kev|tin|eti| et| mw|e u|mwi|a g|ra | ya|een|ee |a n|a o|ke | re| we|rri|ghe|ogh| og|a e|n k| a |ia |ya |o g|ien| uh| rr|ye |khi|ran|ira|ere|a m|a k|ian| ot|ro |n i|ovb|o m| ye|egb| ra|hi |de |kpa| eg| hi|n y|o e|hae| ok|a y|eke|mie| mi| gb|o y|ba |oto|rhi|n m| iw| ru| er|arr| ar|unm|rro| ov|e k|okp|aen|n a|hek|khe|nna|inn|ugi|hie|a u|ru |ae |to |wun|mwu|hun|otu|i k|i n|a v|nde|and| do| or|uem|rue|dom|n w|oba|iob|rio|e r|tu |ze |ehe|pa |e v| ma|aya|iru|iwi|ma | rh|un |uhu|yan|mo |gba|e y|o h| la|a i|rie|irr|ai |uhi|ho |u o|ren|yi | ni|egh|u e|u a| ug|ugh| al| iy|beh|aan|a d|n g|gho|ue |onm|ghi|anm|iko| ai|ene|i r|a a|aze| az|khu|i e|bi |vbi| i |yaa| yi| ek|hin|bie|on | ay|emo| od|aro|obo|e d|rov|o w|e g|ii |nii|se |kom| ow|ron|kha|o v| se|a s|rre| de|lug|alu|owa|wu |a w|aa |e w| bi|a b|n h|dia|fue|ifu| if|ebe| eb|ode|sa | os|nug|anu|wa |oo |gue|uwu| uw|ese|bug|vbu| en|n r| lo|n l|ugb|kug|la |uyi| uy|i v|o o|i g|rra|aku| ab| es|abe|aik|oro|enr| eh|eha|o a|a l|we |n u|i o|okh", gaa: "m\u0254 | ni|ni |k\u025B | ak|l\u025B |\u025B a|\u025B m| m\u0254|ak\u025B| ko| he|gb\u025B|i a|\u025B\u025B | l\u025B|\u0254 n|\u025B e|ko |aa |b\u025B |y\u025B |i e| k\u025B|\u0254 k| y\u025B|li |\u025B h| ml|egb|oo |f\u025B\u025B| f\u025B|shi|a\u014B |heg|mli|\u0254\u0254 |a a| es| gb|i n|loo|\u025B n|ma\u014B| ma|\u025B k|i k| n\u0254|\u0254 y|n\u0254 |\u0254 f| al|he |esa| sh|alo| ek|\u0254 m|ii |am\u0254| eh| en|em\u0254|ji |naa|b\u0254 |e n|fee|o a|oni|kon|o n|ee | hu|o e| b\u0254|i m|hi | am|\u0254 l|hu |tsu|um\u0254|\u025Bi |aaa|na |nii|sum|sa |\u0254m\u0254|ena|i y|\u025Bji|n\u025B\u025B| n\u025B|\u025B g|baa|eem|\u0254 e|a l|kw\u025B|y\u0254\u0254|e\u0254 |am\u025B|ts\u0254| sa|ana| ts|saa|k\u025Bj|\u0254 a|ehe|a m|toi|eli|yel|aji|i l| ah|m\u025Bi| at|e e|gba|a n| an|ane|hi\u025B| na|eko|eye| ey|o h|kom|mla| kr| ej| as|\u014B n|san| ay|i s|nit|ash|ek\u025B|ha |e k|ne | hi|i h|\u025B t|esh|efe|i\u0254 |its|ia\u014B|ku |o k|ats|kpa| kp|ome|gb\u0254|ets| ab|\u0254 b|\u025B b|ye | et|a e|shw|oko|a k| b\u025B|\u0254 h|\u025B y| af| ku|s\u025B |ts\u025B|\u014B h|u\u0254 |\u014B\u014B | to|\u014Bm\u025B|\u025B s| m\u025B|oi |m\u0254\u0254|aye|hwe| ef|la |ehi|rok|kro| ji|\u014B k|o m|aka|akw|o y| lo|o s|j\u025B | ny|e a|\u014Bm\u0254| ba|bii|aan|\u014Bts|\u025B\u014Bt|i\u025B\u014B|di\u025B| di|ai |u k|o l|\u014B m| eb|\u0254 s|aha|ny\u0254|i j|a h|\u025B l|w\u025B |usu| aw| ja|su\u0254|eni|i f|agb| ag|b\u0254m|sem|bua|any|\u025B d|i b|maj|m\u025Bb|a s|e\u014Bm|awo|e b|afe|hik| yi|u e|e s|ish|nak|an\u0254|hey|\u014B a|o g|jam|u m|o b|a\u014Bm| y\u0254|b\u025Bi|ye\u0254| su|ny\u025B|hew|me |\u0254 g|\u0254se| ee|il\u025B|hil|ihi|hih|las|\u0303la|a\u0303l|ba\u0303| \u014Bm|nyo|te |esu|kai|ate|\u014Bma|eee|\u025Bm\u0254|\u025Bia| eg|al\u025B|jia|\u0254\u014B |ala|wal|hi\u0254|\u025B f|his", ndo: "na |oku| na|wa |a o|a n| om| uu| ok|e o|ong|ka |uth|mba| ne|ntu|ba |tu |omu|nge|he |a u|the|uut|emb|hem|o o|o n|ehe|unt|e n|a w|nga|kal| wo| ke|ang| iy|lon|mun|no |lo |la |o i|ku | no|oka|keh|ulu|u n|we |shi|a m|ala|ko |ga |a k|ge |eng|nen|u k|ilo|osh|ngo|han|a y|elo|gwa|ngu|ye |li |ano|hil| mo|gul|ana|luk|a e|tha|dhi|uka| pa|lwa|go |ath|ho |man|kwa|ta |oma| sh|a p|wan|thi|uko| ko|wok| ta|ha |mwe|ya |wo |e p| yo|gel|a i|e m| os|nka|ika|uun|hi | ka|o g|sho|ema| li|kuk|iya|o w|i n|ith|and|men|ame|gam|ele|pan|opa|ash|ndj|po |hik|yom| po|le |ing|alo| el|olo|sha|kul|nok|ilw|kug|o k|a a|adh|aka|lat|aa |pam| ye|kan|iyo|mbo| we|kut|nin|e e|umb|onk|ndu| go|ike|ond|non|gan|omo|una|a s| e |mon| ga|ela|und|waa| ng|yok|ne |ulo|amw|oye| oy|aan|a l|iil|okw|eta| a |wen| ku|i k| gw|aku|igw|ila|a t| nd|ina|yuu|ene|ke | on| dh|iye|mo |pau|bo |him|lyo|o s|ula|wat|ota|yon|e t|eko|yaa|o e| me|a g|yop|e g|lun|alu|ngw|omb|ane| th|yi |o y| ii|nom|ili|dho|ono|mok|uga|vet|eho|ome|kun|iyu|i m|ali|epa| ni|lwe|opo|lok|oko|hok|i o|lol|djo|ung|oon|i t| yi|alw| ot|ukw|uuk|uki|egu|mii|o m| wu| mb|awa|naw|edh|ani|kat|nwa|enw|e k|taa|ont|a h|u t|lel|uni|ndo|wom| mw|she|ola|pwa|dyo|ndy|nem|ndi|yeh|aye|fut|nek|udh|omi" }, Cyrillic: { rus: " \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440", ukr: "\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A", bos: " \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u0452\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A", srp: " \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432", uzn: "\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431", azj: " \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B", koi: "\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441", bel: " \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D", bul: " \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u0430 \u043D|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0430\u043D\u0438|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435| \u0431\u044A|\u043F\u0440\u0438|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441|\u0430\u0446\u0438| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0440\u0430\u043D|\u0430\u043B\u043D| \u0434\u0435|\u0431\u0440\u0430|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0430\u0432\u043D|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0442\u044A\u043F|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u0432\u043D\u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u0438\u0430\u043B|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438|\u0430\u043D ", kaz: "\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493", tat: " \u04BB\u04D9|\u043B\u0430\u0440|\u0433\u0430 |\u043A\u0443\u043A|\u043E\u043A\u0443|\u0445\u043E\u043A| \u0445\u043E|\u04D9\u043C |\u0440\u0433\u0430|\u04BB\u04D9\u043C| \u043A\u0435| \u0431\u0435|\u0430\u0440 |\u0435\u0448\u0435|\u04D9\u0440 |\u0430\u043D |\u043A\u0435\u0448|\u043B\u04D9\u0440|\u0433\u04D9 | \u0431\u0430|\u0435\u04A3 |\u043D\u0435\u04A3| \u0431\u0443|\u043A\u043B\u0430|\u0440\u0433\u04D9|\u044B\u0440\u0433|\u04BB\u04D9\u0440| \u0442\u0438| \u0442\u043E|\u0440 \u043A|\u0434\u0430 |\u0435\u043D\u0435|\u0431\u0435\u0440|\u04D9\u043D |\u0434\u04D9 | \u04AF\u0437|\u0430 \u0442|\u0442\u043E\u0440|\u0435\u043D | \u043A\u0430|\u043D\u04D9 | \u0430\u043B|\u044B \u0431|\u043D\u0430 |\u0433\u0430\u043D|\u0430\u0440\u0430|\u0438\u0440\u0435|\u0431\u0443\u043B| \u0434\u04D9|\u0431\u0430\u0440|\u0435\u043D\u04D9|\u0443\u043A\u043B|\u0442\u0438\u0435|\u0430 \u0445| \u0438\u0442|\u0438\u0435\u0448|\u0430\u0440\u044B|\u043A\u044B |\u043A\u0430 |\u04D9 \u0442|\u043D \u0431|\u0443\u043A\u044B| \u0438\u0440|\u0435\u043A\u043B|\u0435\u043B\u0435|\u044B\u043D\u0430|\u0448\u0435 |\u0430\u043B\u0430|\u043D \u0442|\u043B\u044B\u043A|\u043B\u0435 |\u0448\u0435\u043D|\u0435\u0448 |\u043A\u0430\u0440|\u043B\u044B |\u043B\u0430\u043D|\u043B\u04D9\u043D|\u0440\u044B\u043D|\u04D9 \u043A|\u0435\u043B\u04D9|\u0435\u0440\u0433|\u043D\u0434\u0430|\u0440\u0435\u043A|\u0442\u0435\u043B|\u0435\u0437 |\u0438\u0442\u0435|\u0430 \u043A|\u0431\u0435\u043B| \u0442\u0430|\u043B\u044B\u0440|\u04D9 \u0431|\u044B\u043D | \u0433\u0430|\u0435\u043B |\u0441\u04D9 | \u044F\u043A|\u0430\u043B\u044B|\u04D9\u0440\u0433|\u0430 \u0431|\u044F\u0438\u0441| \u044F\u0438|\u0442\u04D9 |\u0434\u0430\u043D|\u0430 \u0430|\u04AF\u0437 |\u04D9 \u0445|\u0448 \u0442|\u0435 \u0431|\u044B\u043D\u0434|\u0441\u0435\u0437|\u043A\u043B\u04D9|\u0438\u0441\u04D9|\u0440 \u0431|\u0443\u043B\u044B| \u044D\u0448|\u0447\u0435\u043D|\u0430 \u04BB|\u0435\u043C | \u0441\u0430|\u043D \u0438|\u0448\u043A\u0430|\u0442\u0435\u043D|\u04AF\u0437\u0435|\u044B \u04BB|\u04D9\u0442 |\u044F\u0442\u044C|\u0433\u0435\u0437|\u0438\u0433\u0435|\u0430\u043D\u044B|\u04D9 \u04BB|\u043E\u0440\u043C| \u0442\u04AF| \u0445\u0430| \u0442\u04D9| \u043D\u0438|\u0440 \u04BB| \u0442\u0443|\u043C\u04D9\u0442|\u043A\u043B\u0435|\u04AF\u043B\u04D9|\u043B\u0443 |\u0442\u044C |\u043C \u0430|\u043B\u0433\u0430|\u0448\u0442\u04D9| \u043A\u0438|\u043C \u0438| \u043C\u04D9|\u043D\u0435 |\u043B\u0435\u043A|\u043C\u044B\u0448|\u0440\u043C\u044B|\u0433\u0435\u043B|\u0442\u04AF\u0433|\u043B\u0435\u0440|\u0434\u0438 |\u0437\u0435\u043D|\u0443\u0433\u0430|\u0441\u0435\u043D|\u0433\u04D9\u043D|\u0430\u043A\u044B|\u043A\u043B\u044B|\u043B\u04D9\u0442|\u0430\u043B\u0443|\u043D\u044B |\u0435\u0448\u0442|\u0432\u0435\u0448|\u04D9\u0432\u0435|\u0440\u04D9\u0432| \u0440\u04D9|\u0442\u04D9\u0440|\u0440\u043B\u04D9|\u04AF\u0433\u0435|\u0430 \u044F|\u043B\u044C |\u0440\u0435\u043D|\u0431\u0430\u0448|\u04D9 \u0434|\u04D9 \u0438|\u0438\u043B\u043B|\u0435\u0440 |\u0440 \u0430|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0430\u0439\u043B|\u0440\u0434\u04D9| \u0430\u0448|\u0440\u0430\u043A|\u0440\u0434\u0430|\u0430\u0440\u0434|\u0440\u043D\u0435|\u04D9\u0440\u043D|\u044F\u043A\u043B|\u043B\u04D9 | \u0497\u04D9|\u043D \u043C|\u044B\u04A3 |\u043D\u044B\u04A3|\u043A\u043A\u0430|\u04D9\u0440\u0435|\u043E\u0440\u0433|\u0442\u0430\u043D|\u043C\u0430\u0441|\u0441\u044B\u043D|\u043D\u0434\u0438|\u0438\u043D\u0434|\u043D\u0438\u043D|\u0440\u0435\u043B| \u0431\u0438|\u044B\u043A |\u043B\u0435\u043C|\u0430\u043B\u044C|\u043D\u0438 |\u0438\u043D |\u043A\u0435\u0440|\u043C \u0442|\u04D9\u04AF\u043B|\u0448\u043B\u0430|\u043D \u044F|\u0442\u044B\u043D|\u043D\u0434\u04D9| \u043E\u0447|\u0431\u0443 |\u043A\u043E\u043D|\u0430 \u0434|\u0430\u0440\u0442|\u043A\u0435\u043C|\u0440\u043A\u0435|\u044B\u043B\u044B|\u043A\u0442\u0430|\u043A\u04D9 | \u0438\u043B|\u0440 \u0438|\u0435\u0440\u04D9| \u0497\u0438|\u04A3 \u0442|\u0446\u0438\u044F|\u0430 \u0438|\u0430\u0448\u043A| \u0441\u04D9| \u0434\u0438|\u0430\u0441\u044B|\u044B\u0439 |\u043C\u0438\u043B| \u043C\u0438| \u043C\u04E9|\u0442\u0430 |\u043B \u04BB|\u043D\u043D\u0430|\u0433\u044B\u043D|\u0438\u0430\u043B| \u0441\u043E|\u0437\u043C\u04D9|\u0435\u0437\u043C|\u0445\u0435\u0437| \u0445\u0435|\u044B\u044F\u0442|\u0433\u044B\u044F|\u043C\u0433\u044B|\u0448\u044B\u0440|\u04D9 \u044F|\u0435\u0440\u043B|\u043D\u043B\u044B|\u0435\u0440\u0435| \u043A\u044B|\u0435\u043A |\u0443\u0440\u044B|\u0442\u044B\u0440|\u043D \u0445|\u0435\u043B\u04AF|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u0438\u0442\u04D9| \u0434\u0430|\u0447\u0430\u0440|\u043D\u044B\u0440| \u043A\u043E| \u0430\u043D|\u0438\u043B\u0435|\u04D9\u0441\u0435|\u044B\u0448 |\u0430\u0446\u0438| \u0434\u0435|\u0430\u0435\u0440| \u0430\u0435|\u0430\u043D\u0443|\u0438\u043D\u0430|\u04D9 \u0441| \u0442\u04E9|\u04D9\u0442\u0435|\u0430\u043D\u0430|\u043D \u04BB|\u0431\u0438\u0440|\u043D\u0430\u043D|\u0440\u044B |\u0439\u043B\u0430|\u04D9 \u0430|\u04D9\u043B\u04D9", tuk: " \u0431\u0438| \u0432\u0435|\u0432\u0435 |\u0434\u0430 |\u043B\u0430\u0440|\u0438\u0440 |\u0431\u0438\u0440| \u0445\u0435|\u0430\u0434\u0430|\u0440 \u0431| \u0445\u0430|\u0435\u0440 | \u0430\u0434|\u0433\u0430 |\u0438\u043B\u0438|\u0434\u044B\u0440|\u0434\u0430\u043C|\u0435\u043D |\u044B\u0440 |\u0430\u0440\u0430|\u0430\u0440\u044B|\u0445\u0435\u0440|\u043B\u0430\u043D|\u0440 \u0430|\u044B\u0434\u044B|\u0440 \u0445|\u0430\u043C |\u043A\u043B\u0430|\u0430\u0433\u0430|\u0430\u043B\u0430|\u043D\u0434\u0430|\u0431\u0438\u043B|\u0445\u0430\u043A|\u043A\u043B\u044B|\u0430\u043A\u043B|\u043B\u044B\u0434|\u043B\u044B | \u0431\u043E| \u04E9\u0437|\u044B\u04A3 |\u0430\u043D |\u2010\u0434\u0430|\u043B\u0435\u043D|\u044B\u043D\u044B|\u043C\u0430\u0433|\u043D\u0435 |\u043B\u0435\u0440|\u0438\u043D |\u044F\u2010\u0434| \u044F\u2010|\u0438\u043D\u0435|\u043D\u0430 | \u044D\u0434|\u0430 \u0445|\u044B\u043D\u0430|\u044B\u043D\u0434|\u0434\u0430\u043D|\u0443\u043A\u0443|\u0445\u0443\u043A| \u0445\u0443|\u043D\u044B |\u043B\u043C\u0430|\u0435 \u0445|\u0438\u043B\u0435|\u0435\u0440\u0438| \u0434\u0435|\u0433\u0435 |\u0438\u04A3 |\u043B\u0438 |\u0430\u0442\u043B|\u0430\u043B\u044B|\u0430\u0440 |\u0434\u0435\u043D|\u0435\u0440\u0435| \u0431\u0430|\u0434\u0438\u043B|\u043B\u0438\u0433| \u0433\u0430|\u0430\u0441\u044B|\u043B\u0438\u043A|\u043B\u044B\u0433|\u0430 \u0433|\u043A\u0438\u043D|\u0431\u043E\u043B|\u043A\u0443\u043A|\u04E9\u0437 |\u0435 \u0430|\u0430\u043C\u0430|\u0434\u0435 |\u044D\u0440\u043A|\u0440\u044B\u043D| \u044D\u0440| \u0445\u0438|\u0438\u043D\u0438|\u0433\u044B\u043D|\u0438\u0433\u0438|\u0430\u0439\u044B|\u0430 \u0434| \u043C\u0430|\u043C\u0430\u043A|\u043F \u0431|\u0430\u043D\u044B|\u044D\u0434\u0438|\u043D\u0438 |\u044B\u0433\u044B|\u0431\u0430\u0448|\u043B\u044B\u043A|\u0439\u0434\u0430|\u0440\u043A\u0438|\u04D9\u0433\u0435|\u0435\u0442\u0438|\u0438\u0447 |\u0445\u0438\u0447| \u0442\u0430|\u0430\u043A |\u0448\u0433\u0430|\u0430\u0448\u0433|\u0441\u044B\u043D|\u043C\u0430\u043B| \u0434\u043E|\u0433\u0434\u0430|\u044B \u0431|\u0440\u044B |\u0433\u0438 |\u043C\u04D9\u0433| \u0497\u0435|\u044B\u0435\u0442|\u0441\u0430\u0441|\u044D\u0441\u0430| \u044D\u0441|\u043B\u043C\u0435|\u0438\u043B\u043C|\u043C\u0435\u0437|\u0438\u043F |\u044B\u043A\u043B|\u0442\u043B\u044B|\u043D \u044D|\u0434\u0430\u043A|\u0434\u0430\u0439|\u044F\u0433\u0434| \u044F\u0433|\u0443\u043A\u043B|\u0445\u0435\u043C|\u0433\u0430\u043B|\u044B \u0432|\u0447\u0438\u043D|\u0438\u043C |\u043C\u0435\u043A|\u0440\u0438\u043B|\u044F\u043D |\u0440\u0438\u043D| \u0441\u0435|\u0430\u043B |\u04D9\u043D |\u0439\u04D9\u043D|\u043D\u044B\u04A3|\u0430 \u0431|\u0434\u0438\u0440|\u043E\u043B\u0430| \u043A\u0430|\u043D\u0434\u0435|\u044B \u0434|\u0441\u044B |\u043B\u0438\u043D|\u0435 \u0434|\u0433\u0438\u043D|\u0437\u0430\u0442|\u0430 \u0432|\u0435\u043A\u043B|\u043A\u044B |\u0430\u043A\u044B|\u043D \u043C|\u043A\u0430\u043D|\u044B\u043B\u044B| \u0441\u0430| \u0434\u04D9|\u0445\u0430\u043B|\u0434\u043E\u043B|\u0447\u0438\u043B| \u0433\u04E9|\u0442\u043C\u0435| \u0433\u0435|\u043D \u0445|\u0430 \u0430|\u0430\u0439\u0434|\u0434\u0435\u04A3| \u0430\u043B|\u043B\u0435\u0442| \u0434\u04E9| \u0438\u0448|\u043D \u0433|\u0435 \u0431|\u0443\u04A3 | \u0433\u0443|\u0434\u04D9\u043B| \u0433\u043E|\u0438\u0440\u0438|\u0438\u043A | \u043E\u043D|\u04A3 \u0434|\u0441\u0435\u0440|\u043B\u0438\u043F|\u0435\u043B\u0438| \u0441\u043E|\u0438\u043B\u043B| \u0434\u0438|\u0430\u0437\u0430| \u0430\u0437|\u0433\u0430\u0440|\u0438 \u0432|\u043B\u0438\u043C|\u043D\u0438\u043A|\u0435 \u0432|\u0435\u043B\u0435|\u043D\u043B\u0438|\u04AF\u0447\u0438| \u04AF\u0447|\u043D\u043C\u0435|\u0437 \u0445|\u0440\u0430\u043F|\u0442\u0430\u0440|\u043D\u0443\u04A3|\u043E\u043D\u0443|\u043C\u0435\u043B|\u0435 \u0433|\u043A\u0434\u0430|\u0441\u0438\u0437|\u043A\u043B\u0435|\u044B\u0437 |\u0441\u044B\u0437|\u043D\u0438\u04A3|\u0434\u0430\u043B|\u0430 \u044F|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0430 \u0441|\u043C\u0438\u043B| \u043C\u0438|\u043A\u043B\u0438|\u043E\u043B\u043C|\u0438 \u0431| \u0431\u0435|\u043D \u0431|\u0440\u0430 | \u0434\u04AF|\u0435\u04A3 |\u0435\u0441\u0438|\u044D\u0442\u043C| \u044D\u0442|\u044B \u04E9|\u0438\u043A\u0430| \u043D\u0438| \u0430\u0440|\u0435 \u043C|\u0434\u04E9\u0432|\u0435\u0442 |\u043A \u044D|\u0442\u0430\u043B|\u043D \u0430|\u0433\u044B |\u0435\u0437 |\u0438\u043D\u043C|\u044B\u043F |\u043E\u043B\u044B|\u043E\u0440\u0430|\u0433\u043E\u0440|\u0447 \u0431|\u043D\u0443\u043D|\u0430\u043D\u0443|\u043C \u0445|\u0430\u043B\u043C|\u043B\u0439\u04D9| \u043A\u0438|\u0435\u043A |\u043D \u044F|\u0430\u043D\u0434|\u04AF\u043D\u0438|\u0440\u0435\u0442|\u0442\u043B\u0430|\u0433\u0430\u0442|\u0430\u0439\u043B|\u0446\u0438\u044F|\u043D \u0434|\u04A3 \u0445| \u043C\u0435|\u0433\u044B\u0435|\u043C\u0433\u044B|\u0435\u043C\u0433|\u0497\u0435\u043C|\u0435\u0442\u0435|\u0430\u0445\u0430|\u043C\u0430\u0445|\u0442\u043B\u0435|\u0442\u0438\u04A3|\u0430 \u044D|\u04A3 \u044D|\u043B\u0430\u043C|\u043F\u043B\u0430|\u043D \u0432", tgk: "\u0430\u0440 | \u04B3\u0430| \u0431\u0430|\u0430\u0434 | \u0434\u0430| \u0432\u0430|\u043E\u043D | \u0442\u0430|\u0432\u0430 | \u0438\u043D|\u0431\u0430 | \u0434\u043E|\u0434\u0430\u0440|\u0442\u0438 |\u0430\u0440\u043E|\u0434\u043E\u0440| \u043A\u0438|\u043E\u0438 | \u044F\u043A|\u0434 \u04B3| \u0431\u043E|\u0431\u0430\u0440|\u04B3\u0430\u0440|\u044F\u043A |\u043E\u0440\u0430|\u043A\u0438 | \u043D\u0430|\u043D\u0441\u043E|\u0438\u043D\u0441| \u043C\u0430|\u0441\u043E\u043D|\u0438 \u043C|\u0440 \u044F|\u0438 \u043E|\u04B3\u0430\u049B|\u0440\u0430\u0434|\u0430\u0438 |\u043A \u0438|\u0443\u049B\u0443|\u0430\u0440\u0434|\u0438 \u04B3|\u049B \u0434|\u0438\u043D |\u043D\u0438 | \u043C\u0443| \u0430\u0437|\u0438\u0438 | \u04B3\u0443| \u0448\u0430|\u0430\u0437 |\u04B3\u043E\u0438|\u0430\u049B |\u044F\u0434 |\u043E\u043D\u0430| \u043A\u0430|\u0438 \u0434| \u0451 |\u0438 \u0431|\u043E\u044F\u0434|\u0434\u0430\u043D|\u0430\u043D\u0434|\u049B\u0443\u049B|\u04B3\u0443\u049B|\u0437\u043E\u0434|\u043E\u0437\u043E| \u043E\u0437|\u0438\u044F\u0442|\u0434 \u0431|\u0430 \u0431|\u043D\u0434 |\u0434\u0430 |\u0434\u0438 |\u043D \u0431|\u0430\u043C\u043E| \u0445\u0443|\u0443\u0434\u0430|\u043E\u0434\u0438|\u0433\u0430\u0440|\u0434\u043E\u043D|\u0438 \u0438|\u0430\u0442 |\u043C\u043E\u044F|\u043D\u0430\u043C|\u0438 \u0441|\u0441\u0442 |\u04B3\u0430\u043C|\u043D \u04B3|\u0440\u0434\u0430|\u0445\u0443\u0434|\u0430\u043D |\u0431\u043E\u044F|\u043E\u0434\u0430|\u0430\u0432\u0430|\u0438 \u0442|\u043E\u0448\u0430|\u0431\u043E\u0448|\u049B\u0438 |\u0438 \u0445|\u0430 \u0448|\u0430\u0441\u0442|\u04E3 \u0432|\u043C\u0438\u043B| \u0434\u0438| \u043E\u043D| \u043C\u0435|\u0448\u0430\u0432|\u043E\u043D\u0438|\u0435 \u043A|\u0438\u043B\u0430|\u0448\u0430\u0434|\u0438\u043C\u043E|\u0438 \u043D|\u043E\u0431\u0430|\u043E\u043C\u0438|\u043A\u043E\u0440|\u0434 \u043A|\u043A\u0430\u0440|\u0440\u043E\u0438|\u0440\u0438 |\u0432\u0430\u0434|\u0443\u0434 |\u0440\u043E |\u04E3 \u0451|\u043E\u0442\u0438| \u0431\u0435|\u0430\u043D\u0438|\u044F\u0442\u0438|\u0442\u0430\u04B3|\u043C\u0438\u043D|\u043D \u0434|\u044F\u0442 |\u0442\u0430 |\u043D\u0430 |\u0430\u0442\u0438|\u043E\u0441\u0438|\u0431\u043E |\u0438 \u0430|\u0440\u043E\u0431|\u0430 \u04B3|\u0442\u0430\u044A|\u0438 \u04B7|\u0430 \u043C|\u0434 \u0430|\u0440 \u043A|\u0438 \u04EF|\u0430 \u0432|\u043B\u0430\u0442|\u0438\u0441\u0442| \u0444\u0430|\u0438 \u043A|\u0448\u0443\u0434|\u0440 \u04B3| \u0430\u0441|\u0438\u0434\u0430|\u0438\u0433\u0430| \u0441\u043E|\u0430 \u0434|\u0430\u0440\u0430|\u0438\u04B3\u043E|\u0434 \u0432|\u043E\u0434\u043E|\u043D \u043C|\u0442 \u0431| \u04EF |\u0442 \u04B3|\u0430\u043C\u0430|\u0442\u0430\u0440|\u043E\u0440 |\u0444\u0438 | \u0441\u0430|\u0432\u0430\u0440| \u0448\u0443|\u043B\u04E3 | \u043C\u0438|\u043B\u0438 |\u0440\u043E\u043D|\u0434\u0438\u0433|\u04B3\u043E |\u0438 \u0448|\u0434\u0430\u0432|\u0431\u043E\u0442| \u04B3\u0438|\u0438\u0440\u043E|\u0443\u043D\u0430| \u043D\u0438|\u043A\u0430\u0441|\u0435\u04B7 |\u0430 \u0442|\u0430\u0431\u043E| \u0430\u049B|\u043D\u04B3\u043E|\u0440\u0430\u0444|\u043C\u043E\u043D|\u043D \u0432|\u0430\u0432\u0440|\u0438\u043D\u043E| \u043A\u043E| \u0441\u0443| \u04B7\u0430|\u043E\u04B3 | \u04B3\u0435|\u0434 \u0442|\u043C\u0430\u04B3|\u0441\u0442\u0438|\u0441\u0430\u0440|\u0430 \u043E|\u0434 \u0434|\u0434\u0438\u04B3|\u0440 \u0430|\u0443\u043D\u0438|\u0440 \u0431|\u0443\u049B |\u0430 \u0430|\u043C\u0438 | \u0432\u043E|\u043D \u0438|\u0440 \u0432|\u0442\u0430\u0432|\u043E\u0440\u0438|\u043D \u043D|\u043C\u0443\u043C|\u0430\u0440\u0438|\u044F\u0438 |\u043E\u044F\u0438| \u049B\u043E| \u044D\u044A|\u04B3\u0435\u04B7|\u0440\u0438\u0438|\u0434\u04E3 |\u0440\u0434\u043E|\u043E\u043B\u0438| \u0438\u0441|\u0443\u0434\u0438|\u0440 \u0434|\u0430\u0441\u043E|\u0444\u0430\u0440|\u043A\u0438\u0448|\u04E3 \u04B3|\u043D\u0430\u0438|\u0434\u0430\u0430|\u043B\u043E\u043C| \u0438\u04B7|\u0440\u0430\u043D|\u0430\u0445\u0441|\u0448\u0442\u0430|\u0440 \u043C|\u04E3 \u0431|\u0438\u0442\u0430|\u0441\u0438\u0442|\u0432\u043E\u0441|\u0443 \u043E|\u043E \u0434|\u0430\u04B3\u0440|\u043D\u0442\u0438|\u0438\u043D\u0442|\u0438\u0444\u043E|\u0442\u0438\u0444|\u0438\u0431\u043E|\u0442\u04B3\u043E|\u049B\u0443 |\u0430 \u043A|\u0438\u0440 |\u0440\u0440\u0430|\u0440\u0430\u0442|\u04B3\u0438\u043C|\u043E\u043D\u0443|\u049B\u043E\u043D|\u0437\u0434\u0438|\u0443\u043D |\u043E\u0444\u0438|\u0438 \u049B|\u043D\u0434\u0430|\u043B\u0430 | \u0433\u0443|\u043D\u0430\u0431|\u0433\u043E\u043D|\u0430 \u043D|\u049B\u0430\u0440|\u043E\u044F\u0442|\u0448\u0432\u0430|\u0438\u0448\u0432|\u043B\u0430\u043B|\u0438\u044F |\u043C\u0438\u044F|\u0430\u043C\u0438|\u0442\u0438\u043C|\u04B7\u0442\u0438|\u0438\u04B7\u0442|\u0441\u04E3 | \u0437\u0430|\u043E\u0448\u0442|\u044F\u043D\u0434|\u043E\u044F\u043D|\u0430\u0442\u04B3|\u0430 \u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u049B\u049B\u0438|\u0430\u049B\u049B|\u0438\u0445\u043E", kir: " \u0436\u0430|\u043D\u0430 |\u0430\u043D\u0430| \u0431\u0438|\u0436\u0430\u043D|\u0431\u0438\u0440|\u0443\u043A\u0443|\u0433\u0430 | \u0443\u043A|\u0430\u0440 |\u0443\u0443 | \u043A\u0430|\u043A\u0443\u043A|\u0443\u043A\u0442|\u043B\u0443\u0443|\u0443\u0443\u0433|\u0442\u0430\u0440|\u0443\u0433\u0430| \u0430\u0434|\u0430\u043D |\u0435\u043D |\u044B\u043A | \u0430\u0440|\u0430\u0434\u0430|\u0438\u0440 |\u0434\u0430\u043C|\u043E\u043B\u0443|\u0433\u0430\u043D| \u0431\u043E|\u0430\u043C |\u0440 \u0431| \u0436\u0435| \u043C\u0435|\u0442\u0443\u0443|\u044B\u043D |\u0430\u0440\u0430|\u0431\u043E\u043B|\u043C\u0435\u043D|\u043A\u0442\u0443| \u0431\u0430|\u0430\u043D\u0434|\u043D\u0435\u043D|\u0435\u043D\u0435|\u0430\u0440\u044B|\u044B\u043D\u0430|\u0440 \u0430|\u043D\u0434\u0430|\u043D \u043A|\u0438\u043D |\u04AF\u043D |\u043D \u0431| \u04E9\u0437|\u044D\u0440\u043A| \u043A\u043E|\u0430 \u0436| \u0430\u043B| \u044D\u0440|\u0434\u0430 |\u043A\u0442\u0430|\u0436\u0435 | \u0442\u0430|\u0430\u043D\u044B|\u0430 \u0442|\u0440\u043A\u0438|\u0430 \u0443|\u0434\u044B\u043A|\u0430\u0440\u0434|\u0430 \u043A|\u043A\u0438\u043D|\u0438\u043D\u0434|\u0438\u0448 |\u0442\u0438\u0439| \u0442\u0438|\u0438\u0439\u0438|\u043D \u0436|\u04AF\u04AF |\u0433\u04E9 |\u043D \u0430|\u0430\u043B\u0430|\u043D \u044D|\u0430\u043B\u044B|\u0443\u043A |\u0438\u043B\u0438|\u043D \u0442|\u0439\u0438\u0448|\u043A\u044B\u043B|\u043B\u0430\u0440|\u0440\u0434\u044B|\u0430\u043B\u0443|\u043D\u0434\u0438|\u0442\u0435\u0440| \u043C\u0430|\u04AF\u0433\u04E9|\u0443 \u0430|\u043A\u0430\u0440|\u043D\u044B\u043D| \u043A\u044B|\u0430 \u0430|\u0431\u0430\u0448|\u0431\u0430\u0440|\u043B\u0433\u0430|\u0438\u043C |\u0443\u043D | \u044D\u043C| \u044D\u044D|\u043B\u044B\u043A| \u0442\u0443|\u0430 \u0431|\u0430 \u044D| \u0430\u043D|\u043D\u0430\u043D|\u04E9\u0437 |\u0442\u0443\u0440|\u0440\u04AF\u04AF|\u0434\u0430\u0439|\u0430\u043B\u0434|\u0443\u043B\u0443| \u0441\u0430|\u0440\u044B\u043D|\u0434\u0430\u0440|\u0442\u0442\u0430|\u04AF\u04AF\u0433|\u0435\u0442\u0442|\u0440\u0433\u0430| \u043A\u0438|\u043A\u0430\u043D|\u0438\u0433\u0438|\u043D \u0443|\u043A\u04AF\u043D|\u043A\u0430 |\u043D\u0434\u044B|\u0443 \u0431| \u0431\u0435|\u043C \u0430|\u04AF\u0447\u04AF|\u043C\u0435\u0441|\u044D\u043C\u0435|\u0440\u044B |\u0434\u0438\u043A|\u0440 \u043C|\u0443\u0448\u0443| \u043C\u04AF| \u0441\u043E|\u043A \u0436|\u0442\u0443\u043A|\u04AF\u043D\u04E9|\u043D\u0435 |\u0438\u043D\u0435|\u0430\u043B\u0433|\u043A\u0430\u043C|\u0442\u04AF\u04AF|\u04AF\u043D\u04AF|\u044D\u0447 |\u0435\u043A\u0435|\u043A\u0435 |\u0435\u0441 | \u044D\u0447|\u04E9\u0437\u04AF|\u0433\u0438\u043D|\u0438\u043A\u0442|\u0435\u0433\u0438|\u043B\u0434\u044B|\u04E9 \u0436|\u0435\u0440\u0438|\u043A \u043C|\u0443\u043F |\u043B\u0438\u043C|\u0431\u0438\u043B|\u0430\u0442\u0442|\u043A\u0435\u0442|\u0443 \u043C|\u0447\u04AF\u043D|\u0442\u0430\u043B|\u0443\u0433\u0443| \u043A\u0435|\u0440\u0443\u0443|\u043A \u0442|\u043B\u0443\u043A|\u0447 \u043A|\u0435 \u043A|\u044D\u044D |\u043A\u0442\u0435|\u0443 \u0436| \u0434\u0435|\u0443\u043B | \u043D\u0435|\u0448\u043A\u0430|\u0434\u0438\u043D| \u0434\u0438| \u0442\u04AF|\u043C\u0434\u0430|\u0430\u043C\u0434|\u0433\u043E\u043D| \u0438\u0448|\u044B \u043C|\u043A\u0430\u043B|\u043A \u043A| \u0442\u043E|\u043A\u043E\u0440|\u0440\u0434\u0435|\u044B\u0437 |\u0441\u044B\u0437|\u0440\u0433\u043E|\u043E\u0440\u0433|\u0430\u0439 |\u0443\u043D\u0443| \u044D\u043B|\u0435 \u0430|\u043D\u04AF\u043D|\u0430\u0439\u0434|\u0437\u04AF\u043D|\u044B\u0433\u044B|\u0433\u0435 |\u0446\u0438\u044F|\u0440\u0430\u0431|\u044B\u043A\u0442|\u0433\u0438\u0437|\u043D\u0435\u0433|\u0430\u0448\u043A|\u044B\u043B\u0443|\u0435 \u0431|\u0440\u0438\u043D| \u0442\u0435|\u0438\u043A |\u043E\u043D |\u043C\u043A\u04AF|\u04AF \u0436|\u04AF \u04AF|\u043E\u043E |\u043D \u043C|\u043D\u0443\u0443|\u0442\u044B\u043A|\u0430\u0448\u0442|\u0443\u043D\u0430|\u0435\u0439 |\u0434\u0435\u0439|\u0438\u0440\u0434|\u0430\u0431\u044B| \u043C\u044B|\u043C \u04E9|\u0435\u0440\u0434|\u043B\u043E\u043E|\u043C\u0441\u044B|\u043D \u043D|\u0435\u043A\u0442|\u0434\u044B\u0440|\u0434\u0438\u0433|\u0430\u043A\u0442|\u043C\u0430\u043A|\u0430\u0433\u0430|\u0435 \u044D|\u043B\u0430\u043D|\u0430\u0446\u0438|\u0442\u0430\u043D|\u0430\u0439\u044B|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043B\u0435|\u0440\u0430\u043B|\u044B\u043D\u0434|\u0434\u0435 |\u043A\u043E\u043E|\u043D\u0438\u043A|\u0430\u0442\u044B| \u04E9\u043B|\u043B\u0433\u043E|\u043E\u043B\u0433|\u0440\u0434\u0438|\u0430\u043C\u0441|\u04AF\u043C\u043A|\u043C\u04AF\u043C|\u04E9\u0441\u04AF|\u043C\u0434\u0443|\u043D \u0438|\u0448 \u0436| \u04AF\u0447|\u0448\u0442\u044B|\u0433\u0443\u043D|\u0437\u0433\u0438|\u0431\u0435\u0440|\u04E9\u043D | \u0431\u0443|\u0431\u044B\u043D|\u0441\u0430\u043B|\u043A\u0438\u043C|\u0443 \u044D|\u043D \u0441|\u04E9\u043D\u04AF|\u043A\u0442\u04E9|\u0430 \u04E9|\u0434\u044B\u0433|\u0434\u044B |\u0437 \u043A| \u043A\u04E9|\u0434\u0430\u043D|\u044B\u043B\u044B|\u0440\u043C\u0430| \u0430\u0439|\u0438\u0430\u043B", mkd: " \u043D\u0430|\u043D\u0430 | \u043F\u0440| \u0438 |\u0432\u043E | \u0441\u0435|\u0440\u0430\u0432|\u043F\u0440\u0430|\u0442\u0430 |\u0430 \u0441| \u043D\u0435|\u0442\u043E |\u0434\u0430 | \u0434\u0430|\u0430 \u043F|\u0443\u0432\u0430|\u0438\u0442\u0435|\u0442\u0435 |\u043E \u043D|\u0432\u0430 |\u0430 \u043D|\u043E\u0458 |\u043A\u043E\u0458|\u0438 \u0441|\u043D\u043E |\u0430 \u0438|\u0430\u0442\u0430|\u0430\u0432\u043E| \u0438\u043C|\u0435\u043A\u043E|\u043C\u0430 | \u0437\u0430| \u0441\u043E|\u0441\u0442\u0432|\u043D\u0438 |\u0438\u043C\u0430|\u043E\u0442 |\u045A\u0435 | \u0432\u043E| \u043F\u043E|\u043B\u0438 |\u0458\u0430 |\u0430 \u0434|\u043E\u0441\u0442|\u0441\u0435\u043A|\u0435 \u043D|\u043E\u0432\u0430|\u0441\u0435 |\u0438\u043B\u0438| \u0438\u043B|\u043E \u0441|\u0435 \u043F|\u0430 \u043E|\u0430\u045A\u0435|\u0438 \u043F| \u0441\u043B|\u0430\u0442 |\u0435 \u0438|\u0432\u0430\u045A|\u0438\u0458\u0430|\u043E \u0434|\u043E\u0442\u043E|\u0435\u043D |\u043E \u0438|\u0441\u043B\u043E|\u0440\u0435\u0434|\u0438 \u0434|\u043E\u0431\u043E|\u043F\u0440\u0438| \u043E\u0434|\u0431\u043E\u0434|\u043B\u043E\u0431|\u0458 \u0438|\u0438 \u043D|\u0432\u043E\u0442|\u0441\u0442\u0430|\u0441\u0442 |\u0438 \u0438|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0431\u0438|\u0430 \u0432|\u043D\u043E\u0441| \u0440\u0430| \u045C\u0435|\u0433\u043E\u0432|\u043F\u0440\u0435| \u043D\u0438| \u043A\u043E|\u0442 \u0438| \u043E\u0431|\u0435 \u0441|\u0430\u0432\u0430|\u0430\u043A\u0432|\u045C\u0435 |\u0431\u0438\u0434| \u0434\u0435| \u0434\u0440|\u0441\u043E |\u0442\u0432\u043E|\u0432\u0430\u0442|\u0430\u043A\u043E|\u0430\u0446\u0438|\u0448\u0442\u043E|\u0440\u0430\u0437|\u0435\u0434\u043D|\u0430\u0430\u0442|\u043F\u0440\u043E|\u0431\u0440\u0430|\u0438\u0434\u0435|\u0430\u043D\u0438|\u0430 \u0437|\u0430 \u0431|\u043A\u0430\u043A|\u0446\u0438\u0458|\u0435\u0441\u0442|\u0434\u0435 | \u0435 |\u0430 \u0435| \u0448\u0442| \u043A\u0430|\u0435 \u0431|\u043E\u0434\u043D|\u043E\u0434 |\u0438 \u043E|\u043D\u0438\u0442|\u0442 \u0441|\u0458 \u043D|\u0440\u0430\u043D|\u0435 \u0434|\u0438 \u0437|\u0435\u043D\u043E|\u0434\u0438 |\u043A\u043E\u043D|\u0435\u043D\u0438| \u0435\u0434| \u0441\u0438|\u0435\u043C\u0435|\u0441\u043D\u043E|\u043E\u0441\u043D| \u043E\u0441|\u0442\u0438\u0442|\u043E\u0432\u0438|\u0458\u0430\u0442|\u043E \u043F|\u0432\u0435\u043D|\u043B\u043D\u043E|\u0430\u043B\u043D| \u0458\u0430|\u0435\u0434 |\u0434\u0440\u0443|\u0432\u0430\u0430|\u0441\u0442\u043E|\u0434\u043D\u0430|\u0437\u0430 |\u043D\u043E\u0442|\u0434\u043D\u043E|\u0435 \u043E| \u0434\u043E|\u0432\u0438 |\u043E\u0432\u0435|\u0435\u0434\u0438|\u0434\u0440\u0436|\u043E \u0432|\u043D\u0438\u0435|\u043D\u043E\u0432|\u0447\u043D\u043E|\u043D\u0438\u043A|\u0436\u0438\u0432|\u0435\u0442\u043E|\u0430 \u043A|\u0438\u043E\u0442| \u0441\u0442|\u043D\u0430\u0446|\u0435\u043B\u0438|\u0432\u043D\u0438|\u0434 \u043D|\u0431\u0435\u0437|\u0430\u0440\u0430|\u043E \u043E|\u0438 \u0432|\u0442 \u043D|\u0440\u0443\u0433|\u0434\u0435\u043D|\u0434\u043D\u0438|\u0441\u0438\u0442|\u043E\u0431\u0440|\u0430 \u0440|\u043B\u0443\u0447|\u0430 \u0433| \u0432\u0440|\u043D\u0435 |\u043F\u043E\u0440|\u0448\u0442\u0438|\u0438\u0447\u043D|\u0447\u0443\u0432|\u043A\u0430 |\u0430\u0432\u043D|\u0442\u0432\u0435|\u043A\u043E | \u0431\u0435| \u043E\u043F|\u0431\u043E\u0442|\u0430\u0431\u043E|\u0440\u0430\u0431|\u0430 \u043C|\u0446\u0435\u043B| \u0446\u0435|\u0442\u0435\u043D|\u0435\u043B\u043E|\u043E\u043B\u043D|\u0434\u0435\u043B|\u043D\u0443\u0432|\u0435 \u0432|\u0438\u0442\u0430|\u0430\u0448\u0442|\u0437\u0430\u0448|\u043A\u0440\u0438|\u0440\u043E\u0434|\u043D\u0438\u043E|\u0442 \u043F|\u0437\u0435\u043C|\u0435\u043C\u0430|\u043D\u0435\u043C|\u043E\u0458\u0430|\u0435\u0437 |\u0438\u043C | \u043E\u0432|\u043E\u0434\u0438|\u043F\u0448\u0442|\u043E\u043F\u0448|\u043E\u043D |\u0438\u0435 |\u043D\u0441\u0442|\u043D\u0430\u043A|\u0430\u0453\u0430|\u0448\u0442\u0435|\u0447\u043E\u0432| \u0447\u043E|\u0432\u0430\u043D|\u0437\u043E\u0432|\u0430\u0437\u043E|\u043A\u043E\u0442|\u0441\u043B\u0443|\u0436\u0430\u0432|\u0440\u0436\u0430| \u0438\u0437|\u043E \u043A|\u0440\u0435\u043C|\u0438\u0441\u0442|\u0435\u045A\u0435|\u0432\u043E\u043B|\u043E\u0440\u0435|\u0433\u0438 |\u043D \u0438| \u0442\u043E|\u0442\u0438 |\u0438\u043A\u043E|\u043E\u0434\u0430| \u0436\u0438|\u043B\u0430\u0441|\u0430\u0440\u043E| \u043C\u0435| \u0437\u0435|\u043B\u043E |\u0431\u0435\u0434|\u043B\u0438\u0442| \u0440\u0435|\u0438\u043F\u0430|\u0440\u0438\u043F|\u0435\u0434\u0435|\u043E \u045C|\u043E\u0432\u043E| \u043C\u043E|\u043D\u0430\u043F|\u0442 \u0434|\u0432\u0440\u0435|\u0458\u0441\u0442|\u0435\u0458\u0441|\u043E\u0440\u0430|\u0438\u0432\u0438|\u0440\u0438\u0432|\u0440\u0438 |\u0437\u0432\u043E|\u0432\u0435\u043A|\u043B\u043D\u0438|\u043A\u0432\u043E|\u0432\u043D\u043E| \u0441\u043F|\u043E \u0435|\u043A\u0432\u0430|\u043D \u043D|\u0436\u0435\u043D|\u0434\u0430\u0442|\u043D\u0435\u0442|\u0438\u043D\u0435|\u0438\u0432\u043E|\u043F\u043E\u0434|\u0430\u043B\u0438|\u0438\u043A\u0430", khk: " \u044D\u0440|\u044D\u0440\u0445| \u0445\u04AF|\u043D \u0431|\u044D\u0439 |\u0442\u044D\u0439|\u0445 \u044D| \u0431\u043E|\u0430\u0445 | \u0431\u04AF|\u043D\u0438\u0439|\u0430\u043D |\u0438\u0439\u0433|\u0439\u043D |\u0445\u04AF\u043D|\u0431\u043E\u043B| \u0431\u0430|\u044D\u043D |\u043E\u043B\u043E|\u0438\u0439\u043D|\u0443\u0443\u043B|\u0439 \u0445| \u0445\u0430|\u0431\u04AF\u0440|\u044D\u0445 |\u0431\u0430\u0439| \u0431\u0443|\u0433\u0430\u0430|\u0440\u0445\u0442|\u0445\u0442\u044D|\u0433\u04AF\u0439|\u0440\u0445 |\u04AF\u0440 |\u04AF\u043D |\u0430\u0430\u0440|\u0439\u0433 |\u0430\u0440 |\u043B\u0430\u0445|\u043E\u043D | \u0445\u044D|\u0438\u0439 |\u0430\u0430 | \u0437\u0430|\u043D \u0445|\u0439 \u0431| \u043E\u0440|\u04E9\u043B\u04E9|\u043B\u044D\u0445|\u04AF\u0439 |\u043B\u04E9\u04E9|\u0443\u043B\u0430| \u0445\u0443|\u044B\u043D |\u04AF\u043D\u0434|\u044D\u043B |\u044D\u0440 | \u0443\u043B| \u0447 | \u0451\u0441|\u043D \u044D| \u043D\u0438|\u043B\u043E\u043D|\u0445\u0438\u0439| \u0442\u0443|\u0440 \u0445|\u04E9\u04E9\u0440| \u0433\u044D|\u0441\u0430\u043D|\u0447\u04E9\u043B| \u0447\u04E9|\u0443\u043B\u0441| \u04AF\u043D|\u0433\u044D\u044D|\u043E\u0440\u043E|\u043D\u044B |\u043D \u0442|\u044E\u0443 |\u0443\u044E\u0443|\u0431\u0443\u044E| \u0448\u0430|\u0445\u0430\u043D|\u044D\u0434 |\u043E\u0445 |\u044D\u044D |\u043D\u044C | \u043D\u044C| \u0442\u044D|\u0441\u044D\u043D|\u043D \u0430|\u0440 \u044D|\u0430\u0439 |\u043B \u0445|\u0445\u0430\u043C|\u043B\u0430\u0433| \u0442\u043E|\u0445 \u0451| \u044D\u0434|\u043D\u0434\u044D|\u043B\u0433\u0430| \u0442\u04E9|\u0440\u043E\u043B|\u0436 \u0431| \u0430\u043B|\u04AF\u043B\u044D|\u0445 \u0431|\u043B\u0438\u0439| \u0445\u04E9|\u043E\u043B |\u043B \u0431|\u043B\u0441 |\u044D\u0433 |\u044D\u044D\u0440|\u0439\u0433\u044D|\u0430\u0432\u0430|\u0442\u0430\u0439|\u0433\u044D\u043C|\u0433\u0443\u0443|\u0434 \u0445|\u0431\u0443\u0441| \u04E9\u04E9|\u04E9\u0442\u044D|\u04E9\u04E9\u0442|\u0442\u04E9\u0440|\u044B\u0433 |\u043B\u0433\u043E|\u043B\u0443\u0443|\u0445\u0443\u0443|\u04AF\u04AF\u043B|\u043D\u0434 |\u0445\u044D\u043D|\u0441\u043E\u043D|\u0434\u044D\u0441| \u044F\u043B|\u043B\u0434 |\u0430\u043B\u0434|\u0445\u0430\u0440|\u0433\u0438\u0439| \u043D\u044D|\u043B\u043E\u0432|\u0433 \u0431|\u0440\u044D\u0433|\u044D\u0440\u044D|\u04AF\u0439\u043B|\u0430\u0430\u043B|\u043D \u0437|\u0433 \u0445|\u0445 \u0442|\u044D\u043D\u0438| \u0430\u043C|\u0440\u043B\u0430|\u0433\u044D\u0440|\u04AF\u043D\u0438|\u043E\u0439 |\u0442\u043E\u0439|\u0430\u043B | \u0433\u0430|\u0430\u0434 |\u0440\u0438\u0439|\u0430\u0430\u043D|\u0439 \u0430| \u0430\u0436|\u0432\u0441\u0440| \u0437\u043E|\u0443\u0440\u0430|\u043B\u043B\u0430| \u0430\u0432| \u0445\u0438|\u044D\u0434\u044D|\u0434\u0441\u044D| \u04AF\u0439|\u043C\u0433\u0430|\u0430\u043C\u0433|\u0439\u0445 |\u0430\u0439\u0445|\u0447 \u0431| \u043E\u043B|\u0440\u0433\u0430|\u04E9\u0440\u04E9|\u044D\u0441 |\u0430\u0433\u0430| \u0441\u0430|\u043D \u0434|\u043E\u043E |\u0430\u043D\u0430|\u0438\u043D |\u0430\u0433 |\u043D \u043D|\u043E\u0432\u0441| \u0441\u043E|\u043E\u043B\u0446|\u044D\u0433\u0442|\u0434\u044D\u043B|\u0430\u043B\u0438|\u0433\u04E9\u04E9|\u0442\u044D\u0433|\u0445\u044D\u044D|\u0445\u044D\u0440|\u0432\u0430\u0445|\u0430\u0440\u043B|\u04AF\u04AF |\u0445\u04AF\u04AF|\u043B\u0430\u0430| \u0434\u044D|\u0441 \u043E| \u0442\u04AF|\u043C\u0438\u0439|\u0439\u0433\u043C| \u0448\u04AF|\u043D \u0448|\u0430\u0440\u0433|\u0440 \u0447|\u04E9\u0440 |\u0430\u0441\u0430|\u0434\u0438\u043B|\u0430\u0434\u0438| \u0430\u0434| \u043C\u044D|\u0441\u0440\u043E| \u0431\u0438|\u0430 \u0445|\u0438\u043B\u0433|\u0440\u0430\u0430|\u0439 \u0442|\u0445\u04AF\u0440| \u0442\u0430|\u04E9\u0445 |\u0430\u0440\u0434|\u0434\u044D\u044D|\u043B\u043E\u0445|\u043B\u0430\u043D|\u0432\u0430\u0430|\u0438\u0432\u0430|\u043B\u0438\u0432|\u0430\u043B\u0443|\u0442\u0433\u044D|\u043E\u0440\u0438|\u043B\u044B\u043D| \u0434\u0430| \u044F\u0432|\u043B \u043D|\u04AF\u0440\u044D|\u0430\u0439\u0433|\u0434 \u0431|\u043E\u0433\u0442|\u0442\u043E\u0433|\u0430\u0439\u043B|\u04E9\u0440\u0438|\u0430\u0448\u0438|\u044F\u043B\u0433|\u043C\u0430\u0440|\u043B\u0430\u043B|\u0433\u043B\u0430| \u044D\u043D|\u043D \u04AF|\u0440\u043E\u043D| \u0445\u043E|\u043D \u0433|\u043D \u0443|\u0430\u0439\u0434|\u0445 \u0447|\u0434\u043B\u044D|\u0440 \u0442|\u0430\u0442\u0430|\u0431\u0438\u0435|\u0430\u043D\u0433|\u0439 \u044D|\u043D\u044D\u0433| \u0441\u0443|\u043B\u0446\u043E|\u0431\u04AF\u043B|\u043B\u0436 |\u0434 \u043D|\u043B\u04E9\u0445|\u0434\u0430\u0445|\u0440\u0445\u0438|\u043B\u044D\u043B|\u0433 \u04AF| \u0434\u0443|\u0433\u043E\u0445|\u0442\u043E\u043E|\u044D\u0440\u0433|\u043E\u043B\u0433|\u0430\u0441 |\u044D\u0436 |\u0439\u043B\u0434|\u0445 \u0430|\u0433\u0448 |\u044D\u0433\u0448|\u0443\u043B\u0438| \u0448\u0438|\u0445 \u0448|\u0433 \u043D|\u0438\u0433\u043B|\u0441\u0433\u04AF|\u0451\u0441\u0433|\u0434\u0430\u0440|\u0445 \u0445|\u0430\u043C\u044C|\u0440 \u0430|\u043E \u0445", kbd: "\u0433\u044A\u044D|\u044B\u0433\u044A| \u043A\u044A| \u0445\u0443|\u044B\u0445\u0443|\u043D\u044B\u0433| \u0437\u044B|\u043D\u0443 |\u0445\u0443\u0438|\u044D\u043C |\u044A\u044D |\u0445\u0443\u044D| \u0438 |\u0443\u0438\u0442|\u0442\u044B\u043D|\u0433\u044A\u0443|\u044D \u0437|\u043A\u044A\u044B|\u044D\u0445\u044D|\u04CF\u044B\u0445|\u044D \u0438|\u044D\u0440 | \u0437\u044D|\u044A\u044D\u0440|\u044B\u043C |\u0445\u044C\u044D|\u044A\u0443\u044D|\u0446\u04CF\u044B| \u0446\u04CF|\u044D\u0445\u0443|\u044B\u043D\u044B|\u0438\u0442\u044B|\u0437\u044B |\u043D\u044D |\u0445\u044D\u043C|\u0430\u0433\u044A|\u0443\u044D |\u043A\u044A\u044D|\u044D\u043D\u0443| \u0434\u044D|\u044D\u0443 |\u044D\u0433\u044A|\u043C \u0438|\u044D\u043D\u044D|\u0445\u044A\u0443|\u044D\u0449 |\u0440\u0430\u043B|\u0442\u0445\u044D|\u044D\u0442\u0445|\u044D\u0440\u0430|\u0445\u044D\u043D|\u0434\u044D\u0442|\u043C \u0445|\u0438\u0433\u044A|\u044D \u0445|\u04CF\u044D |\u0449\u0445\u044C|\u044B \u0446|\u044B\u043D\u0443|\u044D\u043D\u044B|\u0443 \u0445| \u0445\u044D|\u0443 \u0437| \u0433\u044A|\u0437\u044D\u0445|\u043A\u04CF\u044D|\u044A\u044D\u0445|\u0443\u043C |\u0445\u0443\u043C|\u0456\u044D |\u044D\u0434\u044D|\u0440\u044D | \u0438\u043A|\u044A\u0443\u043D| \u0449\u044B|\u0449\u04CF\u044D|\u0443\u044D\u0434|\u0438 \u0445|\u0443\u044D\u043D|\u044D \u043A|\u0445\u044D\u0442|\u0443\u044D\u0444|\u0438\u0456\u044D| \u0438\u0456|\u0445\u044D\u0440|\u044D \u0449| \u0435 |\u043C\u0438 |\u043B\u044A\u044B|\u044D\u043A\u04CF|\u0456\u044D\u0449|\u044D\u0442\u0438|\u0442\u0438 |\u0445\u0443\u0430|\u043C \u043A|\u044D\u0440\u044B|\u0443 \u0434|\u0449\u0456\u044D|\u043A\u044A\u0443|\u0440 \u0437|\u0437\u044D\u0440|\u043C\u0440\u044D|\u044D\u043A\u0456|\u043A\u0456\u044D|\u044A\u044B\u043C|\u0443\u043D\u0443| \u0445\u044A|\u04CF\u0438 |\u0430\u0443\u044D| \u043D\u044D|\u044A\u044D\u043C|\u043B\u044A\u044D|\u044D\u043C\u0440|\u044D \u0433|\u0443\u044D\u0445|\u0435\u0437\u044B|\u043D\u0448\u044D|\u044A\u044D\u043F|\u0437\u044B\u0445|\u0430\u043B\u044A|\u0443 \u043A|\u0430\u0449\u044D|\u0444\u0430\u0449|\u043A\u04CF\u0438|\u0438\u043A\u04CF|\u044A\u044B\u0445|\u0443\u043A\u044A|\u0430\u043B\u044B|\u0430\u043B |\u0443 \u0438|\u0431\u0437\u044D|\u044A\u044D\u0449| \u043C\u044B|\u044D\u0444\u0430| \u043F\u0441|\u0456\u0443\u044D|\u0430\u0431\u0437| \u0445\u0430|\u04CF\u0443\u044D| \u0433\u0443| \u043B\u044A|\u0437\u044B\u043C| \u0449\u04CF| \u0449\u0445|\u043F\u0441\u043E|\u0443\u043C\u044D|\u044A\u0443\u043C|\u0445\u0430\u0431|\u043D\u0443\u043A|\u0438\u04CF\u044D| \u0438\u04CF|\u0449\u044B\u0442|\u04CF\u044D\u0449| \u044F |\u0440\u0438 |\u0445\u0443 | \u0435\u0437|\u0440\u0438\u0433|\u0438 \u043A|\u043C \u0449|\u0443 \u0449|\u0438 \u0446|\u043B\u044B\u043C|\u0448\u044D\u0443|\u044A\u044B\u0449|\u044B\u0445\u044D|\u044D\u043F\u044D|\u044D\u0449\u04CF|\u0449\u044D\u0445|\u044B\u0445\u044C|\u044D\u043D |\u0445\u044A\u044D| \u0443\u043D|\u044A\u044D\u043A|\u044A\u044D\u0436|\u044A\u044B\u0442|\u043C \u0435|\u0443\u0443 |\u044D\u043F\u0441|\u0449\u04CF\u044B|\u0443 \u043F|\u0441\u044D\u043D|\u043C\u0430\u043B|\u0430\u043C\u0430| \u0430\u043C|\u043F\u0445\u044A| \u0449\u0456|\u0449\u0456\u0430|\u043C\u044D\u043D|\u044D\u0445\u044A|\u044C\u044D |\u044D\u0436\u044B|\u044B\u043B\u044A|\u044D \u0435|\u044D\u0449\u0445|\u0456\u044B\u0445|\u0446\u0456\u044B| \u0446\u0456|\u043C \u0437|\u0442\u0443 |\u044C\u044D\u0445|\u044D\u0441\u044D|\u044C\u044D\u043D|\u0430\u043F\u0449|\u044D\u0440\u0438|\u0436\u044C\u044D|\u044A\u044D\u0437|\u044A\u044D\u0443|\u0434\u044D |\u043F\u0449\u04CF|\u043F\u0441\u044D|\u0438 \u043D|\u044B\u043D\u0448|\u0436\u044B\u043D|\u0443\u044D\u0449|\u043D\u044D\u0433|\u044C\u044D\u043F|\u043D \u0445|\u044A\u0443\u0430|\u044B\u043A\u04CF|\u0445\u0443\u0440|\u043B\u044A\u0445|\u0434\u044D\u0443|\u044D \u044F|\u044A\u044D\u0441|\u043F\u0441\u044B|\u044D \u043F|\u044D\u0442\u044B|\u044D \u0434| \u0438\u0440|\u0440 \u0438|\u044D\u0449\u0456|\u043D\u044D\u0445|\u0437\u044D\u0433|\u044B\u0437\u044D|\u0438 \u043B|\u0438 \u0438|\u043D\u0435\u0439|\u0443\u043D\u0435|\u044B\u0442 | \u0437\u0438|\u0443\u043D\u0430|\u044D\u043D\u0448|\u0445\u044D\u0433|\u0433\u0443\u043F|\u044B\u0449\u044B|\u0445\u0443\u0435|\u044B\u0440 |\u0438\u0442\u0443|\u0438 \u0449|\u0441\u043E\u043C|\u0441\u044D\u0445|\u044D\u0437\u044D|\u044B\u043A\u044A|\u044D\u0433\u0443| \u0442\u0435|\u0430\u043F\u0445|\u043A\u044A\u0435| \u0437\u0430|\u043B\u0445\u044D|\u0430\u043B\u0445|\u0438 \u0434|\u044D \u043B|\u0438 \u0443|\u0443\u044D\u0442|\u0430\u043C |\u043C\u044B |\u044B\u043D |\u0438 \u0437|\u044D\u0436\u044C|\u0436\u044C\u044B|\u0449 \u0435|\u0443\u044D\u043C|\u043C \u0434|\u0437\u044D |\u044A\u044D\u0433|\u0435\u0433\u044A| \u0456\u0443|\u0449 \u0437|\u043B \u0445|\u0431\u0433\u044A|\u044B\u0442\u044D| \u043F\u0449|\u043D\u0430\u0433|\u0440 \u0449|\u0441\u044D\u0443|\u043C \u044F|\u043A\u044D |\u0442 \u0445|\u0438\u043C\u044B|\u043E\u043C\u0438|\u044D \u0430|\u044D\u043C\u044B|\u0442\u044D\u043D|\u043C\u044B\u043B|\u0445\u044D\u043A|\u0443 \u0435|\u0445\u0443\u0431|\u0443\u0438\u0433|\u0443\u0435\u0439" }, Arabic: { arb: " \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631", urd: "\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC", pes: " \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628", zlm: " \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627", skr: "\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1", pbu: " \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646", uig: " \u0626\u0627| \u06BE\u06D5|\u06D5 \u0626|\u0649\u0646\u0649| \u0628\u0648|\u0649\u0644\u0649| \u0626\u0649|\u0628\u0648\u0644| \u06CB\u06D5|\u06CB\u06D5 |\u0649\u0646 |\u0646\u0649\u06AD|\u0642\u06C7\u0642|\u0648\u0642\u06C7|\u06BE\u0648\u0642| \u06BE\u0648|\u0634\u0642\u0627|\u0642\u0649\u0644|\u0649\u06AD |\u0646\u0649 |\u0642\u0627 |\u0644\u0649\u0634|\u0646 \u0628|\u06D5\u0646 |\u0626\u0627\u062F|\u06BE\u06D5\u0645|\u0644\u0649\u0643|\u062F\u06D5\u0645| \u0642\u0649|\u0627\u062F\u06D5| \u0626\u06D5|\u0643\u0649 |\u0646\u062F\u0627|\u062F\u0649\u0646|\u0642\u0627\u0646|\u0649 \u0626|\u06AF\u06D5 |\u06D5\u0645 |\u0649\u0634 |\u0649\u064A |\u06C7\u0642 | \u0628\u0649|\u063A\u0627\u0646|\u0649\u063A\u0627|\u0627\u0646\u062F|\u062A\u0649\u0646|\u0649\u06AF\u06D5|\u0648\u0644\u06C7|\u06D5\u062A |\u06BE\u06D5\u0631|\u0649\u0634\u0649|\u0643\u0649\u0646|\u0649\u062F\u0649|\u0627\u0642 |\u0649\u062A\u0649|\u0644\u06C7\u0642|\u06D5\u0631\u0642|\u0649\u0643\u0649|\u0645\u06D5 |\u0644\u06D5\u062A| \u064A\u0627|\u0644\u06C7\u0634|\u0644\u0649\u0642|\u0645\u0645\u06D5|\u06D5\u0645\u0645| \u0626\u06C6|\u062F\u0627\u0642|\u0631\u0642\u0627| \u062A\u06D5| \u0642\u0627| \u0628\u0627|\u0649\u0634\u0642|\u0627\u0643\u0649|\u063A\u0627 |\u06C7\u0642\u0644|\u0627 \u06BE|\u064A\u0627\u0643|\u0645\u06D5\u0646|\u0631\u0649\u0645| \u0628\u06D5|\u0627 \u0626|\u062F\u06D5 |\u0626\u06D5\u0631|\u0642\u0644\u06C7|\u062F\u06C7 |\u062F\u06C6\u0644| \u062F\u06C6|\u0649\u0644\u06D5|\u0627\u0646 |\u0642 \u06BE|\u0631\u0643\u0649|\u06D5\u0631\u0643|\u06C7\u0642\u0649| \u0645\u06D5|\u0649 \u0628|\u0649\u0645\u06D5|\u06D5\u06BE\u0631|\u0646\u0644\u0649|\u0649\u0642 |\u0646 \u0626|\u0627\u0631\u0627|\u0626\u06C6\u0632|\u0649 \u06CB|\u06C6\u0644\u06D5|\u06BE\u0631\u0649|\u0627\u0631 |\u0644\u0627\u0631| \u0626\u06D0|\u0628\u06D5\u06BE|\u0644\u06D5\u0646|\u0644\u063A\u0627|\u0634 \u06BE|\u0649\u0644\u0627|\u06C7\u0634\u0642|\u0634\u0649 |\u0646\u0649\u0634|\u0642 \u0626|\u0626\u0627\u0631|\u0644\u0649\u0646|\u0628\u0649\u0644| \u0626\u06C7|\u0627 \u0628|\u0627\u064A\u062F|\u0645\u0627\u064A|\u0643\u06D5 |\u0648\u0644\u0645|\u064A\u062F\u06C7|\u0626\u0649\u064A| \u0643\u06D0|\u0627\u0633\u0649| \u0645\u06C7|\u06D5 \u0642|\u06D5\u0631 |\u060C \u0626|\u0649\u0646\u0644|\u064A\u06D5\u062A|\u0649\u0643 |\u0644\u0645\u0627| \u0626\u0648|\u0645 \u0626|\u06D0\u0644\u0649|\u0645\u0627\u0626|\u06D5 \u0628|\u0626\u0649\u06AF|\u062A\u0646\u0649|\u0627\u060C |\u0634 \u0626|\u06C7 \u06BE|\u0634\u0643\u06D5|\u0627\u0644\u0649|\u06AD \u0626|\u0627\u0631\u0649|\u06D5\u0643 | \u0642\u0648|\u0633\u0649\u064A|\u0631\u0644\u0649|\u0649 \u0643|\u0628\u0649\u0631|\u06D5\u0645\u062F|\u06D5 \u06BE|\u0644\u06D5\u0631|\u06C6\u0632\u0649|\u0626\u0627\u0644|\u0649\u064A\u06D5|\u0645\u0646\u0649|\u06D5\u062A\u062A|\u0627\u0626\u0649|\u0634\u0644\u0649|\u0645\u062F\u06D5| \u062A\u06C7|\u0628\u0627\u0631|\u06D5\u0634\u0643|\u06D5\u062A\u0644|\u0644\u0649\u062F|\u0643\u0649\u0644|\u0626\u0649\u0634|\u0642\u0649\u063A|\u0686\u06D5 |\u06C7\u0634\u0649|\u0649\u0645\u0627|\u0627\u0634\u0642| \u062C\u0649|\u0631\u06D5\u0643|\u06D0\u0631\u06D5|\u0643\u06D0\u0631|\u0631 \u0626|\u0631 \u0628|\u0631\u0627\u06CB|\u0646\u060C |\u0627\u06CB\u0627| \u0645\u0627|\u0627\u064A\u0649|\u0627\u062F\u0649|\u062A\u06C7\u0631|\u0646\u06C7\u0646|\u0627\u0646\u06C7|\u06D0\u062A\u0649|\u062A\u0649\u0634|\u0649\u0634\u0644|\u062F\u0627 |\u0649\u062F\u0627|\u06C7\u0631\u06C7|\u0642\u0649 | \u062C\u06D5|\u0628\u0627\u0634|\u062C\u0649\u0646|\u0649\u060C | \u0633\u0627| \u062E\u0649|\u06D0\u0631\u0649|\u0646\u0627\u064A|\u0649\u0646\u0627|\u0649 \u06BE|\u0632\u0649\u0646|\u06D5 \u062A|\u0649 \u0642|\u06D5\u0645\u0646| \u0628\u06C7|\u0631\u0646\u0649|\u0646 \u0642|\u062A\u062A\u0649|\u062A\u0649 |\u0649\u0642\u0649|\u0649 \u064A|\u0643 \u06BE|\u0649\u0631\u0649|\u0627\u0626\u0627|\u064A \u0626|\u062A\u06D5\u0634|\u0634\u0649\u0634|\u0644\u06D5\u0634|\u062F\u0649\u0644|\u062A\u0649\u062F|\u062F\u0627\u060C|\u0633\u0627\u0633|\u0627\u0633\u0627|\u06D5 \u0645|\u0633\u0649\u062A|\u067E \u0642|\u0626\u06D0\u0644|\u0646\u0649\u064A|\u0646 \u06CB|\u0633\u0649\u0632|\u0649\u0633\u0649|\u0649\u0644 |\u0627\u0634 |\u064A\u060C |\u0645\u0649\u0646|\u06C7\u0646\u0649|\u0649\u067E |\u062A\u0649\u0645|\u06D5\u0644\u0649|\u0631\u0649\u0634|\u0649\u064A\u0627|\u06C7\u0634 |\u0645\u06C7\u0634| \u062E\u0627|\u0649\u0631 |\u0645\u06D5\u062A| \u062A\u0627| \u067E\u0627|\u062A\u0644\u06D5|\u0627\u0644\u063A|\u0644\u0649\u0645|\u067E\u0627\u0644|\u0627\u067E\u0627|\u0643\u0627\u067E| \u0643\u0627|\u0627\u0646\u0644|\u06AD \u06BE|\u06C7\u0646\u062F| \u062A\u0648|\u0642\u062A\u0649|\u0627\u0644\u06D5|\u0646 \u06BE|\u06D5 \u062F|\u062C\u062A\u0649|\u0649\u062C\u062A|\u0626\u0649\u062C|\u0631\u0642\u0649|\u0649\u064A\u0649|\u0627\u0631\u0644|\u0627\u0645\u0649| \u06BE\u06C6| \u0628\u06D0|\u06D5\u062A\u0646|\u0627\u062A\u0646|\u0649\u0643\u0627|\u064A \u0645|\u0627\u062A\u0649|\u0634\u0643\u0649|\u0633\u0649 | \u0626\u06C8|\u06D5\u060C |\u062A \u0626|\u06AF\u06D5\u0646| \u062F\u06D5|\u0642 \u0642|\u0648\u0644\u063A|\u0642 \u0628", prs: " \u0648 | \u062D\u0642|\u0631\u062F | \u0628\u0627|\u0646\u062F |\u062F\u0627\u0631| \u062F\u0627| \u062F\u0631|\u0647\u0631 |\u06A9\u0647 | \u0647\u0631|\u062F\u0631 | \u06A9\u0647|\u062F \u0647| \u0628\u0647|\u062D\u0642 |\u0631 \u06A9| \u0627\u0632|\u0627\u0632 |\u06CC\u062A |\u0628\u0647 |\u06A9\u0633 |\u0648\u062F | \u06A9\u0633|\u06CC\u0627 |\u0627\u0631\u062F| \u06CC\u0627| \u0628\u0631|\u062F \u0648|\u0642 \u062F|\u062F \u06A9| \u0631\u0627|\u0627\u0631 |\u0627\u06CC | \u062E\u0648| \u0627\u0633|\u0647 \u0628|\u0628\u0627\u0634|\u06CC\u062F |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u06CC\u0646 |\u0627\u0646 |\u0647 \u062F|\u0632\u0627\u062F|\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u0627\u06CC\u062F|\u0633 \u062D|\u062F\u0647 |\u062F \u0628|\u06CC \u0628|\u0627\u0633\u062A|\u062E\u0648\u062F| \u0622\u0646|\u0634\u062F |\u0648\u0631 | \u0647\u0645|\u062A\u0645\u0627|\u06CC \u0627|\u0627\u062A |\u0631 \u0627|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u06CC |\u0631\u0627\u06CC|\u0648 \u0627|\u0648 \u0645| \u0646\u0645|\u06CC \u06A9| \u0645\u0648| \u0627\u062C|\u062F\u060C |\u0645\u0627\u06CC|\u0648\u0646 |\u0628\u0631\u0627|\u0642\u0648\u0642|\u062D\u0642\u0648| \u0634\u0648| \u0627\u0646|\u0627\u0646\u0647| \u0645\u0633|\u0647 \u0645|\u0631 \u0628|\u0648\u0642 |\u0627\u06CC\u062A|\u0622\u0646 |\u0647\u0627\u06CC|\u0631 \u0645|\u0647\u06CC\u0686| \u0647\u06CC| \u062A\u0627|\u0647 \u0648|\u0648\u0631\u062F|\u0634\u0648\u062F|\u0627\u0646\u0648|\u0633\u062A | \u0628\u06CC|\u0627\u0645 |\u0648\u0627\u0646|\u06CC\u06AF\u0631|\u0628\u0627 | \u0645\u0631|\u0646 \u0627|\u06CC \u062F|\u062F\u06CC |\u06CC \u0645|\u062F \u0622|\u0631 \u0634|\u0645\u0627\u0639|\u062C\u062A\u0645|\u0627\u062C\u062A|\u06CC \u06CC|\u0633\u06CC | \u06A9\u0646|\u062F\u06CC\u06AF|\u0628\u0627\u06CC|\u062A \u0648|\u0639\u06CC |\u06A9\u0646\u062F|\u062A \u0645|\u062A \u0627| \u0645\u0646|\u0645\u0648\u0631| \u0639\u0645|\u0648 \u062F|\u0631 \u062E|\u0627\u0647 |\u0644\u06CC |\u0627 \u0628|\u0628\u0631 |\u0646\u06CC | \u0634\u062F|\u06CC\u060C |\u0627\u0639\u06CC| \u062F\u06CC|\u062A\u0648\u0627|\u062A \u0628|\u062F\u0627\u0646|\u06A9\u0627\u0631|\u062F \u0627|\u0646 \u0648| \u0634\u0631|\u0645\u06CC | \u06A9\u0627|\u0648 \u0622| \u062D\u0645|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646| \u0627\u0648| \u0632\u0646|\u062F \u0634| \u0645\u062D|\u0646 \u0628|\u0647 \u0634|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0627\u0631\u06CC|\u0645\u0644 |\u0628\u0639\u06CC|\u0645\u0646\u062F|\u06CC\u06CC | \u0645\u0644|\u06CC \u0631|\u0648 \u0628|\u062F \u0645|\u0648\u06CC |\u0642\u0627\u0646| \u0642\u0627| \u0645\u0642|\u0627\u0648 |\u0627\u0646\u06CC|\u06AF\u06CC |\u0627\u06CC\u0646| \u0627\u06CC|\u0645\u06CC\u0646|\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0647 \u062D|\u060C \u0627|\u0632 \u062D|\u0645\u06CC\u062A|\u0631\u0646\u062F|\u0627 \u0647|\u06CC\u0644 |\u0627\u062F\u0647|\u0646\u0645\u0627|\u0642 \u0645|\u062A \u06A9|\u0631\u0627\u0646|\u0646 \u062D|\u062F \u062F|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0627\u0648\u06CC|\u0627\u0646\u062A|\u0634\u062F\u060C|\u0686\u06A9\u0633|\u06CC\u0686\u06A9|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0645\u0644\u0644|\u0647\u062F |\u0648\u0627\u0647|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0628\u0647\u0631|\u060C \u0628|\u06CC\u0647 | \u0627\u0639|\u062F\u06CC\u0647|\u0642 \u0648|\u0639\u06CC\u062A|\u0647\u0654 |\u0627 \u0631| \u0639\u0642|\u0647\u0645\u0647|\u0627\u0628\u0631|\u0631\u0627\u0628| \u0645\u06CC|\u0627 \u0645|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627 \u062F|\u062F\u0648\u0627|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648| \u0645\u062A| \u0648\u0633| \u0641\u0631|\u0642 \u0627|\u0631 \u062A|\u0645\u0642\u0627|\u06CC\u06A9 |\u0646\u0648\u0627|\u0631\u0627\u0631|\u0646\u0645\u06CC|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u0627\u06CC\u06CC|\u062A\u060C |\u0648 \u0647|\u0627\u0633\u06CC|\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627\u064B | \u0628\u062F|\u06CC\u062A\u0648|\u0645\u0647 | \u062A\u0645|\u0631\u0634 |\u0637\u0648\u0631|\u0627\u0632\u062F|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u062A\u062E\u0627|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0627\u0628 |\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u200C\u0647\u0627|\u06CC\u0631\u062F|\u0648 \u06CC|\u0627\u0645\u0644|\u0644\u0647 |\u0627\u0633\u0627|\u0631\u062F\u0627|\u062E\u0648\u0631|\u0627 \u0627|\u0633\u0627\u0646|\u0642\u0631\u0627| \u0645\u062C|\u06CC \u0646|\u0627 \u0646|\u06A9\u0633\u06CC|\u062E\u0635\u06CC| \u0627\u0645|\u0646\u062F\u06AF|\u062F\u0648\u062F" }, Devanagari: { hin: "\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928", mar: "\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903", mai: "\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930", bho: " \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924", npi: "\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E", mag: " \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E" }, Myanmar: { mya: "\u1004\u1037\u103A|\u1004\u103A\u1038|\u102D\u102F\u1004|\u102F\u1004\u103A|\u101E\u100A\u103A|\u1037\u103A |\u103D\u1004\u1037|\u1001\u103D\u1004|\u1000\u102D\u102F|\u100A\u103A\u1038|\u1031\u102C\u1004|\u101E\u1031\u102C|\u102C\u1004\u103A|\u103C\u1005\u103A|\u1010\u102D\u102F|\u1014\u102D\u102F|\u103A\u1038\u1000|\u102D\u102F |\u1004\u103A | \u1021\u1001|\u103C\u1004\u103A|\u1016\u103C\u1005|\u101C\u100A\u103A| \u101C\u1030|\u103A \u1021|\u101B\u103E\u102D|\u103B\u102C\u1038|\u1019\u103B\u102C|\u103A\u1001\u103D|\u103A\u104B |\u100A\u103A\u104B|\u1000\u1031\u102C|\u1038\u1000\u1031|\u1014\u103E\u1004|\u103E\u1004\u1037|\u102D\u102F\u1037|\u101B\u1031\u1038|\u103A\u1038 |\u1004\u103A\u1001|\u1038\u104A |\u103A \u101C|\u1031\u102C |\u1001\u103C\u1004|\u103D\u1004\u103A|\u1019\u103E\u102F|\u103A\u1005\u1031|\u1010\u103D\u1004|\u103A\u1038\u104A|\u103E\u102D\u101E|\u1031\u102C\u1000|\u102D\u101E\u100A|\u1038\u1000\u102D|\u100A\u103A\u1037|\u1031\u102C\u103A|\u102C\u1000\u103A|\u1010\u103A\u101C|\u1005\u103A\u1005|\u101C\u1015\u103A|\u103D\u1010\u103A|\u101C\u103D\u1010| \u1019\u102D|\u101C\u1030\u1010|\u103A\u101C\u1015|\u1030\u1010\u102D|\u103A\u101C\u100A|\u103A\u1038\u1019| \u1016\u103C|\u1005\u103D\u102C| \u101C\u103D|\u1004\u103A\u101B|\u103D\u102C |\u102F\u1015\u103A|\u103A\u104A |\u103A\u1037 |\u1011\u102D\u102F|\u103A\u101E\u1031|\u1038\u1010\u103D|\u104B \u101C|\u103C\u102C\u1038|\u1021\u101B\u1031|\u1037\u103A\u1021|\u1021\u1001\u103D|\u102D\u1019\u102D|\u103D\u1000\u103A|\u102C\u103A\u101C|\u1031\u104A |\u102C\u1038 |\u1019\u100A\u103A| \u101E\u1031|\u1000\u103A |\u102D\u102F\u1038|\u103A\u101B\u103E|\u100A\u103A |\u1019\u102D\u1019|\u103A\u1005\u103D|\u1005\u1031\u104A|\u1037\u103A\u101B| \u1011\u102D|\u103A\u1021\u101B|\u103C\u1004\u1037|\u1014\u103A |\u1038\u1014\u103E|\u103A\u1038\u1010|\u1019\u103A\u1038|\u1016\u103C\u1004|\u103A \u1019|\u1021\u102C\u1038|\u103A\u101E\u100A| \u1015\u103C|\u1014\u103A\u1038|\u1021\u1001\u103C|\u103A\u1004\u1036|\u1004\u103A\u1004|\u1015\u102D\u102F|\u102C \u1021|\u103A\u1019\u103E|\u1015\u103A\u1005|\u101B\u1014\u103A| \u1014\u102D|\u1006\u102D\u102F|\u1038\u1019\u103B|\u102C\u1038\u1000| \u101B\u103E|\u1005\u1031\u101B|\u103D\u101A\u103A|\u1038\u101E\u100A|\u101C\u102F\u1015|\u103A \u1015|\u1010\u1005\u103A|\u104A \u1021|\u1038 \u1021|\u103A \u1016|\u102F\u1036\u1038|\u1001\u103C\u102C|\u101D\u1004\u103A|\u101B\u1019\u100A|\u103A \u101B|\u103C\u100A\u103A|\u102F\u1010\u103A|\u101E\u102D\u102F|\u1038\u1001\u103C|\u1038\u1016\u103C|\u1038\u1019\u103E|\u1021\u1015\u103C|\u103A\u1001\u103C|\u1005\u102C\u1038| \u101C\u100A|\u103A\u1038\u101E|\u103A\u1014\u102D|\u1021\u1010\u103D|\u1015\u103C\u102F|\u1015\u103C\u100A|\u103A\u1038\u1015|\u1001\u1036\u1005| \u1001\u1036|\u1038 \u1019|\u1031\u1038\u1019|\u1015\u103C\u1004|\u1004\u103A\u101E|\u101F\u102F\u1010|\u1019\u101F\u102F|\u1015\u103A\u1001|\u1037 \u1021|\u102C\u1038\u101E|\u1000\u103C\u1031|\u1010\u103A |\u1000\u103A\u1019|\u1010\u103D\u1000|\u102C\u1038\u1014|\u1015\u1012\u1031|\u1025\u1015\u1012|\u102F \u1021|\u101E\u102C\u1038|\u103A \u101E|\u103A\u1038\u1001|\u104A \u1019|\u1015\u100A\u102C|\u102D\u102F\u1000|\u1019\u103E |\u1019\u103B\u103E|\u100A\u103A\u101E|\u103C\u1031\u102C|\u101B\u104B |\u1005\u100A\u103A|\u103A\u1016\u103C|\u1010\u100A\u103A|\u103B\u1000\u103A|\u1000\u103D\u101A| \u1021\u102C|\u1031\u1038 | \u101E\u102D|\u102C\u1038\u1016| \u1021\u101C|\u103A\u1019\u103B|\u101E\u1004\u103A|\u103D\u1032\u1037|\u1016\u103D\u1032|\u101B\u102C\u1038|\u1010\u101B\u102C|\u103A\u1000\u102D| \u1025\u1015|\u1031\u1038\u1001|\u1015\u103C\u1005|\u1010\u103A\u1001|\u103A\u101B\u1014|\u1000\u103A\u101E|\u103A\u1001\u103B|\u102F\u1037\u1010|\u104A \u101C|\u102C\u1038\u101C|\u103A\u101B\u103D|\u1019\u102D\u104F|\u102F \u101E|\u102F\u1000\u103A|\u101E\u1000\u103A| \u1021\u1000|\u102C\u1038\u101B|\u1001\u103C\u1031|\u103A \u1014|\u103A\u1019\u103C|\u1005\u103A\u1019|\u103A\u1038\u1014|\u104A \u1014| \u1000\u102D|\u104A \u101E|\u103B\u102D\u102F|\u101C\u1030\u1019|\u1038\u1001\u103B|\u103A\u1014\u103E|\u1030\u1019\u103B|\u1030\u100A\u102E|\u1010\u1030\u100A| \u1010\u1030|\u101C\u102D\u102F|\u102C\u1038\u1005| \u1021\u1010|\u1038\u101E\u1031|\u1006\u1031\u102C|\u1004\u103A\u104A|\u1012\u1031\u1021|\u1015\u1031\u1038|\u103E\u102F |\u102C \u101C|\u103A\u101E\u1030|\u103E\u1031\u102C|\u102D\u1019\u103A|\u102C\u1038\u1001|\u1036\u1005\u102C|\u103A \u1001|\u103B\u1004\u103A|\u103D\u1031\u1038|\u1021\u101C\u102F|\u102B\u101D\u1004|\u1015\u102B\u101D| \u1014\u103E|\u102C\u1038\u1010|\u1015\u103A |\u1038 \u1014|\u1038\u1005\u103D|\u102F \u101C|\u1031\u1021\u101B| \u1021\u1015|\u102C\u1038\u1019|\u103A\u101B\u1031|\u102C \u101E|\u1031\u1038\u1000|\u104B \u1019| \u101C\u102F|\u103A \u1011|\u103A\u101B\u102C|\u1031\u101B\u104B| \u1021\u1006|\u1038\u1019\u101F|\u1037\u1010\u100A|\u104A \u1000|\u1011\u102C\u1038|\u103A \u1000|\u102D\u102F\u101E|\u1015\u103A\u101E|\u103A \u1010| \u1015\u102B|\u1021\u1016\u103D|\u101B\u103D\u1000|\u1021\u1001\u102B|\u1031\u1038\u101B|\u103A \u1005|\u1001\u1036\u101B|\u104F \u1021|\u1000\u103A\u1001|\u103A\u1038\u1021|\u1038\u1021\u1016|\u1021\u1016\u103C|\u103D\u1014\u103A|\u103B\u103E |\u102F\u1019\u103B|\u103E\u1004\u103A|\u102F\u101A\u103A|\u102D\u102F\u101A|\u102C\u1004\u1037| \u1010\u102D", shn: "\u1004\u103A\u1088|\u107C\u103A\u1038|\u101C\u1086\u1088|\u1004\u103A\u1038|\u103A\u1038 |\u1030\u107C\u103A|\u102F\u107C\u103A|\u107C\u103A\u1089|\u1030\u1004\u103A|\u101D\u103A\u1038|\u103D\u1004\u103A|\u107C\u107C\u103A|\u102D\u1030\u1004|\u103A\u1087\u101C|\u1019\u103A\u1087|\u1030\u101D\u103A|\u103A\u1088\u101C|\u107C\u103A\u1087|\u1087\u101C\u1086|\u103A\u1038\u1075|\u1010\u1083\u1087|\u1019\u102D\u1030|\u1022\u1019\u103A|\u1075\u1030\u107C|\u1019\u102E\u1038|\u1010\u103A\u1088|\u1010\u103A\u1038|\u101E\u102F\u107C|\u101D\u103A\u1088|\u101C\u103D\u1004|\u101C\u1084\u1088|\u1004\u103A\u1087|\u102F\u1004\u103A|\u107C\u1086\u1089|\u1062\u1004\u103A|\u1022\u107C\u103A|\u1075\u1031\u1083|\u103A\u1088 | \u101C\u103D|\u1086\u1089 |\u1088 \u1010|\u102D\u1030\u101D|\u1019\u103A\u1038|\u1086\u1088 | \u1010\u1083|\u1084\u1088 |\u107C\u103A |\u103D\u1010\u103A|\u103A\u1038\u107C| \u1075\u1030|\u102D\u102F\u1004|\u1038\u101E\u102F|\u101A\u1030\u1087|\u103A\u1038\u101C|\u1062\u107C\u103A|\u1035\u107C\u103A|\u102E\u1038\u101E|\u1075\u103A\u1038|\u1085\u101D\u103A|\u101C\u1085\u101D|\u101C\u103D\u1010|\u102F\u1075\u103A| \u1019\u102E|\u1031\u1083\u1089| \u1022\u107C|\u1075\u103A\u1087| \u101C\u1084|\u1035\u1004\u103A|\u1088 \u101C|\u1075\u107C\u103A|\u103A\u1088\u1075|\u1015\u102D\u1030|\u1075\u1030\u108A|\u103A\u1038\u1015|\u103D\u107C\u103A|\u103A\u1038\u1010|\u103A\u1088\u1010|\u1083\u1089\u107C|\u103A\u1089 |\u103A\u1088\u1019|\u104B \u1075|\u103A\u1038\u101E|\u1087\u104B | \u1010\u1031|\u1078\u1082\u103A|\u103A\u1038\u1019|\u1030\u1087\u104B|\u1075\u103A\u1088|\u101E\u1031 |\u103A\u1087 |\u1089\u107C\u1086|\u108A\u1075\u1031|\u1030\u108A\u1075|\u1038\u1075\u1030|\u1089 \u1019|\u1088\u101C\u1085|\u103A\u1088\u1015|\u103A\u1087\u107C|\u1015\u1035\u107C|\u1010\u102E\u1088|\u1088\u1019\u102D|\u1075\u1062\u107C|\u1031\u1022\u1019|\u101D\u103A\u1087|\u102D\u102F\u107C|\u1076\u101D\u103A|\u1035\u1010\u103A|\u1081\u1035\u1010|\u101C\u1082\u103A|\u102F\u1019\u103A|\u1038\u107C\u107C|\u1078\u102D\u102F|\u102D\u1004\u103A|\u1082\u103A\u1088|\u107C\u103A\u1088|\u1015\u103A\u1089|\u1019\u103A\u1088|\u102D\u1030\u107C|\u1062\u1086\u1038|\u103A\u104A |\u103A\u1038\u1076|\u1088\u101C\u103D|\u1004\u103A |\u103A \u101C|\u103A\u1087\u1019|\u103A\u1038\u1078|\u103A\u1038\u101A|\u1083\u1088 |\u1010\u1004\u103A|\u1010\u1031\u1083|\u102F\u101D\u103A|\u102D\u102F\u101D|\u107C\u103A\u101C|\u103A\u1087\u1075|\u1015\u107C\u103A|\u1038 \u101C|\u103A\u1089\u101C|\u107E\u102D\u1004|\u103A\u1087\u1015|\u1010\u103A\u1087|\u1038\u1015\u102D|\u1081\u1082\u103A|\u1019\u107C\u103A|\u1083\u1087 |\u1031\u1083\u1088|\u107C\u1083\u1088|\u103A\u107C\u107C|\u103A\u1038\u1081|\u1088\u1010\u1083|\u1011\u102F\u1075|\u103A\u1088\u107C| \u1022\u1019|\u103A\u1089\u1010|\u103A\u1088\u1081|\u1010\u1062\u1004|\u1010\u1031\u1022|\u1031\u1083\u1087|\u1030\u107A\u103A|\u107C\u103A\u1075|\u1075\u101D\u103A|\u1089 \u1010|\u1087\u107C\u107C|\u1038\u1019\u102D|\u1062\u1019\u103A|\u1062\u1086\u1087|\u1038 \u1022|\u1015\u1062\u1086|\u103A\u1088\u1078|\u1088 \u1022|\u1083\u1087\u1076|\u1086\u1088\u1010|\u103D\u1019\u103A|\u1031\u101C\u1086|\u1010\u1031\u101C|\u1030\u1019\u103A|\u103A\u1088\u1022|\u1062\u101D\u103A|\u107C\u103A\u1015|\u101E\u1062\u1004|\u107C\u103A\u107C|\u103A\u1088\u101A|\u101C\u102D\u1030|\u101D\u103A |\u103A\u101E\u1031|\u107D\u1035\u1004|\u107C\u103A\u1022|\u1078\u103D\u1019|\u1015\u103A\u1038|\u1088\u101C\u1086|\u1022\u101D\u103A|\u101E\u1004\u103A|\u1089\u101A\u1030|\u103A\u1089\u101A|\u103A\u1089\u1075|\u103A\u1038\u1022| \u1019\u102D|\u103A \u1022|\u1011\u102D\u102F|\u1076\u103D\u1004|\u107C\u103A\u1010|\u107E\u1062\u1086|\u1081\u1015\u103A|\u1082\u103A\u1038|\u107C\u1082\u103A|\u103A\u1089\u1081|\u107A\u103A\u1088|\u1038\u101C\u1085|\u1038\u101E\u1031|\u103A\u1087\u1076|\u107C\u1004\u103A|\u1082\u103A\u1089|\u103A\u1087\u107D|\u1015\u102D\u102F|\u103D\u1075\u103A|\u107C\u103A\u1019|\u103A\u107C\u1086|\u1015\u1035\u1004|\u101C\u1030\u107A| \u1015\u102D|\u1030\u1015\u103A|\u101C\u102F\u1075|\u1087 \u101C|\u1088\u101E\u1004|\u1010\u1030\u101D|\u1088 \u1015|\u1085\u1004\u103A|\u103A \u1010|\u1081\u1030\u1019|\u103A\u1087\u1081|\u1083\u1087\u101C|\u1087\u1076\u101D| \u107E\u1062|\u103A\u1087\u1078|\u103A\u1087\u1010|\u1038\u101C\u103D|\u1086\u1088\u1019|\u107C\u103A\u107D|\u1083\u1087\u1075|\u1010\u102D\u102F|\u1038\u101E\u1062|\u101D\u103A\u107C|\u1087\u1015\u1035|\u1030\u1075\u103A|\u1075\u103A\u1089|\u1084\u1088\u101E|\u101A\u1035\u107C|\u1088\u1011\u102F|\u1086\u1088\u1011|\u1038\u1075\u1062|\u1015\u1075\u103A|\u1086\u1088\u1015|\u1085\u1010\u103A|\u1089 \u101C|\u107D\u1030\u1088|\u101D\u1083\u1088|\u103A\u1075\u1030|\u1004\u103A\u1078|\u1089\u104B |\u1038\u107C\u1086|\u1088 \u1019|\u1088\u1019\u102E|\u1081\u107C\u103A|\u1038\u1010\u1031|\u107C\u103A\u101E|\u101D\u1086\u1089| \u101E\u102F|\u1030\u1010\u103A|\u1075\u102D\u1030|\u103A\u1022\u107C|\u1019\u103A\u1089|\u1078\u102F\u1019| \u1010\u102E|\u1083\u1087\u1081|\u1089\u107C\u107C|\u107A\u103A\u1038|\u103A\u1089\u101E|\u1038\u1075\u1031|\u103A\u1078\u102D|\u101D\u103A\u1089|\u104A \u101C|\u107C\u103A\u108A|\u1038\u104A |\u102D\u1075\u103A| \u107C\u1082|\u1089\u1081\u107C|\u102D\u1010\u103A|\u1087\u1075\u107C|\u103A\u104B |\u1083\u1087\u1078|\u1004\u103A\u101E|\u104B \u1015|\u101E\u103D\u107C|\u1075\u1010\u103A|\u1078\u101D\u103A|\u103A\u1078\u1082|\u1004\u103A\u1015|\u1082\u103A\u104A|\u1085\u107C\u103A|\u101E\u1031\u1022|\u103A\u1022\u1019" }, Ethiopic: { amh: "\u1361\u1218\u1265|\u1230\u12CD\u1361|\u1275\u1361\u12A0|\u1265\u1275\u1361|\u1361\u1230\u12CD|\u1218\u1265\u1275|\u1361\u12A0\u1208|\u12ED\u121D\u1361|\u12C8\u12ED\u121D|\u1361\u12C8\u12ED|\u1290\u1275\u1361|\u1208\u12CD\u1362|\u12A0\u1208\u12CD|\u1295\u12F1\u1361|\u12F3\u1295\u12F1|\u1295\u12F3\u1295|\u12EB\u1295\u12F3|\u12A5\u12EB\u1295|\u12F1\u1361\u1230|\u1361\u12A5\u1295|\u1275\u1361\u1218|\u12CD\u1362 | \u12A5\u12EB|\u1361\u12E8\u1218|\u1362 \u12A5|\u12A5\u1295\u12F2|\u1361\u1290\u133B|\u1361\u12E8\u1270|\u121D\u1361\u1260|\u12CD\u1361\u12E8|\u121D\u1361\u12E8|\u1361\u12E8\u121A|\u1295\u1361\u12E8|\u1293\u1361\u1260|\u1293\u1361\u12E8|\u1361\u12A0\u12ED|\u1361\u12E8\u121B|\u1290\u133B\u1290|\u12CD\u1361\u1260|\u1206\u1290\u1361|\u1276\u127D\u1361|\u1275\u1361\u12E8|\u12CD\u1362\u1361|\u1361\u1260\u121A|\u1275\u1293\u1361|\u1280\u1265\u1228|\u1361\u1218\u1295|\u1275\u1295\u1361|\u12CD\u121D\u1361|\u1265\u127B\u1361|\u1361\u1208\u1218|\u121D\u1361\u1230|\u121D\u1362 |\u129B\u12CD\u121D|\u1295\u129B\u12CD|\u121B\u1295\u129B|\u1295\u121D\u1361|\u1361\u12A0\u1308|\u1218\u1265\u1276|\u1361\u12EB\u1208|\u12A5\u12A9\u120D|\u1228\u1275\u1361|\u1218\u1295\u130D|\u1361\u1208\u121B|\u1275\u1361\u1260|\u1206\u1295\u1361|\u1260\u1275\u1361|\u1361\u1260\u1270|\u1208\u1275\u1361|\u1361\u12A5\u12A9|\u130B\u1265\u127B|\u12CE\u127D\u1361|\u12C8\u1295\u1300|\u1205\u1295\u1290|\u12F0\u1205\u1295|\u12A9\u120D\u1361|\u121B\u1295\u121D| \u121B\u1295|\u1362 \u121B|\u1320\u1260\u1245|\u133B\u1290\u1275|\u1265\u1276\u127D|\u1361\u120D\u12E9|\u122B\u12CA\u1361|\u1230\u1265\u1361|\u121D\u1361\u12A5|\u130D\u1298\u1275|\u121B\u130D\u1298|\u127D\u1361\u1260|\u1225\u122B\u1361|\u1290\u133B\u1361|\u122D\u12F5\u1361|\u134D\u122D\u12F5|\u1361\u1260\u1206|\u1361\u12F5\u122D|\u120D\u1361\u1218|\u1361\u12F0\u1205|\u1270\u130D\u1263|\u1361\u12E8\u1206|\u1275\u1361\u12C8|\u1260\u1275\u121D|\u1348\u1338\u121D|\u122D\u1361\u12C8|\u12ED\u1290\u1275|\u1275\u121D\u1361|\u1361\u1260\u1218|\u1361\u1201\u1209|\u1278\u12CD\u1361|\u1298\u1275\u1361|\u121B\u1280\u1260|\u12E8\u121B\u130D|\u1260\u122D\u1361|\u121D\u1361\u1218|\u1260\u1280\u1265|\u1361\u1260\u1280|\u127D\u1293\u1361|\u1361\u1291\u122E|\u1361\u1225\u122B|\u1361\u130A\u12DC|\u1361\u12C8\u1295|\u1218\u1220\u1228|\u1361\u1218\u1220|\u1271\u1295\u1361|\u1215\u130D\u1361|\u1263\u122D\u1361|\u130D\u1263\u122D|\u1290\u1275\u1293|\u1290\u1276\u127D|\u133B\u1290\u1276|\u1295\u1293\u1361|\u12E9\u1290\u1275|\u120D\u12E9\u1290|\u12F0\u1228\u1303|\u1361\u12F0\u1228|\u1265\u1361\u12E8|\u12D3\u12ED\u1290|\u1361\u12D3\u12ED|\u12ED\u121B\u1296|\u1203\u12ED\u121B|\u120D\u1362 |\u1290\u12CD\u1362|\u1361\u1290\u12CD|\u1201\u1209\u1361|\u122D\u1275\u1361|\u1205\u122D\u1275|\u121D\u1205\u122D|\u1275\u121D\u1205|\u1295\u1290\u1275|\u1293\u1361\u1208|\u1260\u1275\u1362|\u1208\u1260\u1275|\u12A0\u1208\u1260|\u1218\u1206\u1295|\u1295\u1361\u12A0|\u1295\u1361\u12C8|\u1361\u1218\u1230|\u1265\u1228\u1361|\u1361\u1265\u127B|\u1361\u12A0\u120B|\u122D\u1305\u1275|\u12F5\u122D\u1305|\u1295\u130D\u1225|\u1270\u1263\u1260|\u120E\u127D\u1361|\u120C\u120E\u127D|\u12E8\u121A\u12EB|\u1264\u1270\u1230|\u12A5\u1295\u12F0|\u1275\u1361\u12F5|\u1361\u1218\u1206|\u127D\u1361\u12E8|\u1275\u12AD\u12AD|\u1361\u121B\u1295|\u1260\u1206\u1290|\u1206\u1291\u1361|\u1295\u1361\u1218|\u1362\u1361 |\u1275\u1361\u1208|\u1228\u130D\u1361|\u1361\u12ED\u1205|\u12F2\u1320\u1260|\u1295\u12F2\u1320|\u1275\u1361\u12A5|\u1290\u1271\u1361|\u1361\u1260\u1215|\u12E8\u1206\u1290|\u1338\u121D\u1361|\u1260\u1245\u1361|\u12E8\u1218\u1296|\u1275\u121D\u1362|\u1308\u122D\u1361|\u1361\u12A8\u121A|\u12CD\u1361\u12A8|\u1229\u1275\u1361|\u12E8\u1280\u1265|\u1361\u12E8\u1280|\u1214\u122B\u12CA|\u1265\u1214\u122B|\u1361\u12A0\u1235|\u122D\u1361\u12E8|\u12ED\u1308\u1263|\u12CD\u1295\u1361|\u1325\u1361\u12E8|\u1295\u1235\u1361|\u1361\u1275\u121D|\u1291\u122E\u1361|\u1295\u1361\u1208|\u127D\u1361\u12A5|\u1201\u1294\u1273|\u1361\u1201\u1294|\u1235\u1275\u1361|\u1361\u1260\u12A0|\u1361\u121B\u1280|\u1265\u1228\u1230|\u1218\u1230\u1228|\u1228\u1361\u1230|\u12E8\u121A\u1348|\u120B\u1278\u12CD|\u12A0\u120B\u1278|\u1218\u1348\u1338|\u1361\u130B\u1265|\u122D\u1361\u1260|\u12DC\u130D\u1290|\u127D\u1295\u1361|\u1305\u1275\u1361|\u12E8\u1270\u1263|\u1290\u1275\u1295|\u12DA\u1205\u1361|\u1265\u1290\u1275|\u1308\u1265\u1290|\u1361\u1308\u1265|\u1235\u1325\u1361|\u12CD\u1235\u1325|\u1361\u12CD\u1235|\u1230\u1261\u1361|\u1218\u12CD\u1361|\u1348\u1338\u1218|\u130A\u12DC\u1361|\u1275\u1361\u130A|\u1206\u1296\u1361|\u1361\u1206\u1296|\u1348\u120B\u130A|\u12CD\u1361\u1208|\u1219\u1209\u1361|\u12AD\u1208\u129B|\u12AD\u12AD\u1208|\u1300\u120D\u1361|\u1295\u1300\u120D|\u1201\u121D\u1361|\u12F2\u1201\u121D|\u1295\u12F2\u1201|\u1361\u1260\u130D|\u12CD\u1361\u12EB|\u1273\u12CA\u1361|\u1228\u1273\u12CA|\u1295\u130D\u1235|\u1361 \u12A5|\u12F0\u1228\u130D|\u1362\u1361\u12ED|\u1290\u1361\u1218|\u1290\u1271\u1295|\u1295\u1290\u1271|\u1209\u1361\u1260|\u1260\u1215\u130D|\u1361\u1270\u130D|\u12D3\u12CA\u1361|\u1265\u12D3\u12CA|\u1230\u1265\u12D3|\u121D\u1361\u12A8|\u1245\u1361\u1218|\u1218\u1320\u1260|\u1361\u1218\u1320|\u1260\u1290\u133B|\u1361\u1260\u1290|\u1218\u1296\u122D|\u121D\u1260\u1275|\u12A0\u12ED\u1348|\u121D\u1361\u12D3|\u1361\u1260\u121B|\u1262\u1206\u1295|\u1361\u1262\u1206|\u122D\u1361\u12A0|\u1308\u1229\u1361|\u12A0\u1308\u1229|\u1293\u120D\u1361|\u123D\u1293\u120D|\u1293\u123D\u1293|\u122D\u1293\u123D|\u1270\u122D\u1293|\u1295\u1270\u122D|\u12A2\u1295\u1270|\u1361\u12E8\u12A0|\u12A0\u1308\u122D|\u1295\u12F5\u1361|\u12A0\u1295\u12F5|\u1205\u121D\u1361|\u1293\u1361\u1290|\u1361\u12CD\u1233|\u1228\u1303\u1361|\u1296\u1275\u1361", tir: "\u1361\u1361 | \u1218\u1230|\u1230\u1265 | \u1230\u1265| \u12A6\u1208|\u12A6\u1208\u12CE|\u1293\u12ED | \u1293\u12ED|\u12CE\u1361\u1361|\u1208\u12CE\u1361|\u1218\u1230\u120D|\u1230\u120D |\u1215\u12F5\u1215|\u1215\u12F5 |\u12F5\u1215\u12F5| \u1215\u12F5|\u12ED \u121D|\u120D \u12A6| \u12A6\u1265|\u12F5 \u1230|\u1275\u1295 |\u12CD\u1295 |\u1361 \u1215|\u12AB\u1265 |\u12A6\u1265 |\u12C8\u12ED | \u12C8\u12ED|\u1295 \u1218|\u1265 \u12DD| \u12AB\u1265| \u1218\u1295| \u1290\u1343|\u1290\u1275 |\u1265 \u1218|\u12DD\u12BE\u1290|\u1265 \u1265| \u12A5\u1295|\u12BE\u1290 | \u12DD\u12BE|\u1295 \u1290| \u121D\u122D|\u1295\u1361\u1361|\u12B9\u1295 | \u12A5\u12DA|\u122D\u12AB\u1265|\u121D\u122D\u12AB| \u12A6\u12ED|\u12ED\u12B9\u1295| \u12ED\u12B9|\u1273\u1275\u1295|\u1290\u1343\u1290|\u12A5\u12DA |\u1295 \u12A6|\u1215\u130A |\u1290 \u12ED|\u1273\u1275 |\u1275 \u12A6|\u12ED \u1265|\u1295 \u121D| \u12A8\u121D|\u1265 \u12A6| \u1265\u1215| \u1363 |\u1295\u130D\u1235|\u1218\u1295\u130D| \u1203\u1308|\u1363 \u1265|\u12CA \u1218|\u121B\u12D5\u122A|\u1235\u122B\u1215|\u1295 \u1295| \u1295\u121D|\u12D5\u122A | \u1295\u12AD|\u12A6\u12CA |\u1295 \u1265|\u2019\u12CD\u1295|\u1218\u1230\u120B|\u122B\u12CA |\u121B\u1215\u1260|\u12A6\u1275 | \u12DD\u1270| \u121B\u12D5|\u120E\u121D |\u122D\u1295 | \u1235\u122B|\u1270\u1230\u1265|\u12D3\u1275 |\u1290\u1271 |\u1265\u12A6\u12CA|\u1230\u1265\u12A6|\u1275 \u12C8|\u1290\u1273\u1275|\u120B\u1275\u1295|\u1215\u1260\u122B|\u120D\u12A6\u1275|\u12AB\u120D\u12A6| \u1265\u12D8|\u1295 \u12DD|\u121D\u1361\u1361|\u122D\u1272 |\u1205\u122D\u1272|\u121D\u1205\u122D|\u1275\u121D\u1205| \u1275\u121D|\u122B\u1215 | \u121B\u1215|\u12B8\u12CD\u1295| \u1308\u1260|\u1265\u1215\u130A|\u1271 \u1295| \u1265\u12DD|\u1343\u1290\u1273|\u1230\u120B\u1275|\u12DA \u12F5| \u12A6\u12F5|\u12CE\u121D\u1361|\u1208\u12CE\u121D|\u1273\u12CA |\u12A5\u1295\u1275|\u122A\u1270\u1230|\u1265\u122A\u1270|\u1215\u1265\u122A| \u1215\u1265|\u1265\u1295 |\u122B\u1275 |\u1295 \u1230|\u12CB\u1295 |\u12A1\u2019\u12CD|\u121D\u12A1\u2019|\u12A8\u121D\u12A1|\u1363 \u12A6|\u122D\u12D3\u1275|\u1235\u122D\u12D3| \u1235\u122D|\u12D5\u120A |\u1295 \u1293|\u1290\u1275\u1295|\u1275 \u1293|\u12ED \u12A6|\u1290\u1343 |\u1308\u1229 |\u1203\u1308\u1229|\u121D \u1218|\u1295\u130B\u1308|\u12F5\u1295\u130B| \u12F5\u1295|\u12A5\u1295\u1270|\u1260\u122B\u12CA| \u1265\u121B|\u12ED\u121B\u1296|\u1203\u12ED\u121B|\u12A9\u120E\u121D| \u12A9\u120E|\u120D\u1295 |\u12AD\u12B8\u12CD| \u12AD\u12B8|\u1275 \u1235|\u1295 \u1213| \u1203\u12ED|\u1275 \u1218|\u1361 \u12A5| \u12AB\u120D|\u12A5\u1295 |\u1264\u1270\u1230| \u1264\u1270|\u12A5\u12CB\u1295| \u12A5\u12CB|\u1260\u1295 |\u1295 \u12D8|\u1270\u12F0\u1295|\u1218\u1230\u122A|\u130D\u1235\u1272|\u1295 \u12AB|\u1213\u1208\u12CB| \u1213\u1208|\u1265\u12D8\u12ED| \u121D\u12C3| \u1215\u130A|\u1295\u1363 |\u12CA \u12C8|\u1343\u1290\u1275| \u12D8\u12ED|\u1213\u12F0 |\u1295 \u1270|\u1275\u1363 |\u1293\u1295 | \u121D\u1235|\u1343\u1295 |\u1290\u1343\u1295| \u12AD\u1265|\u1361 \u1275|\u1265\u121B\u12D5|\u1275 \u1265|\u1273\u12CD\u1295|\u1265\u1290\u1343| \u1265\u1290|\u1265 \u1293|\u12DC\u130D\u1290| \u12DC\u130D|\u1235\u1273\u1275|\u130D\u1235\u1273|\u1265 \u1215|\u12CA \u12A6|\u1265 \u1295|\u1263\u122D\u1295|\u1361 \u12DD| \u1265\u1213|\u1290\u1272 | \u1290\u1272|\u122A\u130B\u1308|\u1308\u1260\u1295|\u134D\u1275\u1213|\u120B\u12CD\u1295|\u1363 \u12A8|\u1343\u12A2 |\u12C8\u1343\u12A2| \u12C8\u1343|\u1308 \u1235|\u1308\u1308 |\u1295\u1308\u1308|\u12F0\u1295\u1308|\u12DD\u1270\u12F0|\u130A \u12AB|\u1203\u1308\u122B|\u1230\u122A\u1273|\u1209 \u1218|\u1235\u1272 |\u12DA \u1265|\u1208\u12CB |\u12D8\u12ED |\u120D\u12D5\u120A| \u120D\u12D5|\u12F5 \u12A6|\u12AD\u1265\u1229|\u12CA \u12AD|\u120D \u12A5|\u1275 \u12AD| \u12F5\u1215| \u121D\u1295|\u1205\u12ED\u12C8|\u12ED\u134D\u1340|\u12D3\u1208\u121D|\u1363 \u1215|\u1265 \u12A5| \u121D\u121D|\u122D\u1363 | \u1213\u12F0|\u1361 \u1265|\u1308 \u12A5|\u130B\u1308 |\u120D\u12CE |\u12F5\u120D\u12CE|\u12A6\u12F5\u120D| \u1265\u1203| \u1265\u121D|\u121D \u1265|\u1275 \u12A5|\u1263\u1275 |\u1263\u1208 |\u12D5\u1263\u1208|\u121D\u12D5\u1263| \u121D\u12D5| \u1265\u122D|\u12F5\u1215\u1290|\u1265 \u1230|\u122A \u12AD|\u1295 \u1235|\u1271\u1295 |\u1272 \u1265|\u12CA \u12CD| \u121D\u1325| \u1218\u122A|\u1363 \u121D| \u121D\u130D|\u1271 \u12C8| \u1295\u1265|\u122D \u1295|\u1263\u122D |\u121D\u1235 |\u1309\u1305\u1208| \u1309\u1305|\u1215\u1295 | \u134D\u1275|\u1295 \u134D|\u1213\u12F3\u122D| \u1213\u12F3|\u1295\u1295 |\u1271 \u12AD|\u1308\u120D\u130D|\u1270\u130D\u1263| \u1270\u130D|\u1261\u122B\u1275|\u1215\u1261\u122B| \u1215\u1261|\u12F5\u1265 |\u12CD\u12F5\u1265| \u12CD\u12F5|\u12DA \u1218|\u1215\u1273\u1275" }, Hebrew: { heb: "\u05D5\u05EA |\u05D9\u05DD |\u05DB\u05DC | \u05DB\u05DC|\u05D3\u05DD |\u05D0\u05D3\u05DD| \u05D6\u05DB|\u05DC \u05D0|\u05D9\u05D5\u05EA| \u05D0\u05D3|\u05EA \u05D4|\u05D9 \u05DC|\u05DB\u05D0\u05D9|\u05D0\u05D9 |\u05D6\u05DB\u05D0| \u05E9\u05DC|\u05DC\u05D0 | \u05D5\u05DC|\u05DC \u05D4|\u05D9\u05EA |\u05E9\u05DC |\u05E8\u05D5\u05EA|\u05D0\u05D5 | \u05D0\u05D5|\u05EA \u05D5|\u05DD \u05D6| \u05DC\u05D0|\u05D5\u05D9\u05D5|\u05D9\u05DF |\u05D9\u05E8\u05D5|\u05D6\u05DB\u05D5|\u05E8\u05D4 | \u05DC\u05D4|\u05EA \u05DC|\u05EA \u05E9|\u05DD \u05DC| \u05D4\u05DE|\u05D5\u05DF |\u05D5 \u05D1| \u05D5\u05D4|\u05D4 \u05E9| \u05D4\u05D7|\u05D5 \u05DC|\u05D5\u05EA\u05D9|\u05D7\u05D9\u05E8|\u05EA\u05D5 |\u05D9\u05D9\u05DD|\u05EA \u05D1|\u05E0\u05D4 |\u05D0\u05EA |\u05EA \u05D0| \u05D5\u05D1| \u05D1\u05DE|\u05D5\u05DA |\u05EA \u05DB|\u05D4 \u05D4|\u05E2\u05DC |\u05D0 \u05D9|\u05DC\u05D4 |\u05D4 \u05D0|\u05D9\u05D4 | \u05D0\u05EA|\u05D3\u05D4 | \u05E2\u05DC|\u05DD \u05D5|\u05DD \u05D1|\u05E0\u05D9 |\u05D5 \u05DB| \u05E9\u05D5| \u05E9\u05D4|\u05DB\u05D5\u05EA|\u05DB\u05D5\u05D9| \u05DC\u05D1|\u05D1\u05D5\u05D3|\u05D1\u05D5\u05EA|\u05DD \u05D4|\u05D1\u05D7\u05D9| \u05D1\u05D9|\u05E0\u05D5\u05EA|\u05D4 \u05DC| \u05D4\u05D0|\u05D0\u05D5\u05DE|\u05D4 \u05D1|\u05D4 \u05DB|\u05D4 \u05D5|\u05D4\u05D7\u05D9|\u05DC\u05D9\u05EA|\u05D9\u05E8\u05D4|\u05EA \u05DE|\u05D9\u05E0\u05D5| \u05DC\u05E2|\u05DF \u05E9|\u05D4 \u05DE|\u05DC\u05D0\u05D5|\u05DE\u05D9 |\u05E4\u05DC\u05D9|\u05D5\u05D4 |\u05E9\u05D5\u05D5|\u05DF \u05D5|\u05D7\u05D9\u05E0|\u05D5 \u05D0|\u05D5 \u05D5| \u05D4\u05DB|\u05D7\u05D5\u05E7|\u05D4\u05D7\u05D5|\u05D9 \u05D4|\u05DD \u05D0|\u05D3\u05D5\u05EA|\u05DC\u05D5 |\u05D1\u05D9\u05DF|\u05E2\u05D4 | \u05D0\u05D7|\u05DC\u05D9\u05D4| \u05DC\u05E4|\u05DF \u05DC| \u05D7\u05D5| \u05D1\u05E0|\u05E0\u05D5\u05DA|\u05D5\u05E4\u05E9|\u05D7\u05D5\u05E4|\u05D5\u05E8 |\u05D5\u05D3 |\u05D4\u05D2\u05E0|\u05D5\u05E7 | \u05D1\u05DB|\u05D9\u05DC\u05D9| \u05D9\u05D4| \u05D4\u05D6|\u05D9 \u05D5| \u05D4\u05D9|\u05D5\u05D0 |\u05D0\u05DC\u05D9|\u05D5 \u05D4|\u05E4\u05D9 |\u05D5\u05DC\u05D4|\u05D5\u05DE\u05D9|\u05DC \u05DE| \u05D4\u05E4|\u05D5\u05E6\u05D9|\u05DA \u05D4|\u05DF \u05D1|\u05D5\u05D0\u05D9|\u05E8\u05DA |\u05D7\u05D5\u05EA|\u05D0\u05D9\u05DF|\u05E8\u05E6\u05D5|\u05E8\u05D1\u05D5|\u05DD \u05E9|\u05DC\u05D9\u05DC|\u05D9\u05D5 |\u05E9\u05D5\u05D0| \u05DC\u05DE|\u05E8 \u05D0|\u05DF \u05D4| \u05D4\u05D3| \u05D1\u05D7|\u05D5\u05D5\u05D4|\u05DC\u05D4\u05D2|\u05E4\u05E0\u05D9|\u05D4\u05D9\u05D4| \u05DC\u05D7| \u05DC\u05D5|\u05D9\u05D1\u05D5|\u05DC\u05EA |\u05E0\u05EA\u05D5| \u05D4\u05D5|\u05DE\u05D3\u05D9|\u05DC\u05DC |\u05D0\u05D7\u05E8|\u05D4 \u05E4|\u05D9\u05D0 |\u05D4\u05D9\u05D0|\u05DC\u05DC\u05D0|\u05D6\u05D5 | \u05D1\u05D4|\u05E8\u05D5\u05D9| \u05D0\u05D9|\u05E0\u05D5 |\u05EA\u05D9\u05D4|\u05D3\u05D5 |\u05D1\u05E0\u05D9|\u05DC \u05D1|\u05E2\u05D1\u05D5|\u05D9\u05D0\u05DC|\u05E6\u05D9\u05D0|\u05E1\u05D5\u05E6| \u05E1\u05D5|\u05D5\u05D3\u05D4| \u05D7\u05D9|\u05E9\u05D9\u05EA|\u05E4\u05E9\u05D9|\u05D3\u05E8\u05DA| \u05D3\u05E8|\u05D4\u05DF | \u05D4\u05E2|\u05D7\u05D4 | \u05D1\u05E9|\u05D5\u05D9 |\u05EA\u05D5\u05DA|\u05DE\u05E2\u05E9|\u05D2\u05E0\u05D4|\u05D4\u05DB\u05DC|\u05E9\u05D9\u05D5|\u05DE\u05E9\u05E4| \u05E2\u05D1|\u05D9\u05D4\u05D9|\u05DC\u05D7\u05D9|\u05D2\u05D1\u05DC|\u05E9\u05E8\u05D9| \u05E9\u05E8|\u05DE\u05E0\u05D5|\u05D9 \u05E9|\u05D3\u05D9\u05E0| \u05D9\u05D5| \u05DE\u05E2|\u05D7\u05D1\u05E8|\u05E9\u05D4\u05D9| \u05D6\u05D5|\u05D6\u05E9 |\u05D4\u05DB\u05E8|\u05D0\u05D9\u05E9|\u05DC\u05E4\u05D9|\u05D4\u05DD |\u05DD \u05E0|\u05D9 \u05D0|\u05DB\u05DC\u05DC|\u05E2\u05D5\u05EA|\u05E0\u05E9\u05D5|\u05D5\u05EA\u05D5|\u05D9\u05D4\u05DF|\u05D2\u05D5\u05D3|\u05D9\u05E4\u05D5|\u05D0 \u05D1|\u05D0\u05E8\u05E6| \u05D0\u05E8|\u05DB\u05D1\u05D5| \u05D1\u05D6|\u05E9\u05D4 |\u05E9\u05D5\u05EA|\u05E7 \u05D1| \u05E4\u05DC|\u05EA\u05D9\u05D5|\u05E8\u05D9\u05E8|\u05D5\u05D4\u05D7|\u05E1\u05D5\u05D3|\u05D9\u05E1\u05D5|\u05EA \u05D6|\u05E8\u05D9\u05DD|\u05E2\u05DD |\u05DC \u05D6|\u05D0\u05D9\u05DD|\u05D5\u05DD |\u05D5\u05DC\u05D0| \u05DC\u05DB|\u05D9\u05E9\u05D9|\u05DF \u05D0|\u05D4\u05D6\u05DB|\u05DD \u05D9|\u05D4\u05D2\u05D1| \u05D4\u05D2|\u05D5\u05E0\u05D5|\u05D5\u05D1\u05D9|\u05D4\u05D5\u05D0|\u05EA\u05D4 |\u05D4\u05DE\u05D3|\u05D3 \u05D0|\u05D9\u05D3\u05D4| \u05DC\u05D9|\u05EA\u05D9 |\u05D0 \u05DC|\u05E4\u05D5\u05DC| \u05DC\u05E9|\u05D4\u05E4\u05DC|\u05D0 \u05D4| \u05DC\u05DC| \u05E9\u05E0|\u05D7\u05E8\u05D5| \u05D1\u05EA|\u05DD \u05DB| \u05D1\u05E2| \u05D5\u05E9|\u05E9\u05E8 |\u05D5\u05D1\u05D7|\u05D4\u05E9\u05EA|\u05D9\u05D3\u05D9| \u05D4\u05E8|\u05D1\u05D5\u05E8|\u05E6\u05D9\u05D1| \u05D0\u05DE|\u05D1\u05E8\u05D4|\u05E2\u05D9\u05EA|\u05D4 \u05D7|\u05D4\u05E0\u05E9| \u05D4\u05E0|\u05E8\u05D7\u05D5|\u05D6\u05E8\u05D7|\u05D0\u05D6\u05E8|\u05D5\u05D7\u05D3|\u05DE\u05D5\u05EA|\u05D3 \u05DC", ydd: " \u05E4\u05BF|\u05E2\u05E8 |\u05D5\u05DF |\u05D8 \u05D0|\u05D3\u05E2\u05E8| \u05D0\u05B7|\u05DF \u05D0| \u05D0\u05D5|\u05D0\u05B7\u05E8|\u05D0\u05D5\u05DF| \u05D0\u05F1|\u05E2\u05DF |\u05DF \u05E4| \u05D0\u05D9|\u05E4\u05BF\u05D5|\u05E8\u05E2\u05DB| \u05E8\u05E2|\u05E2\u05DB\u05D8|\u05BF\u05D5\u05DF|\u05F1\u05E3 |\u05D0\u05F1\u05E3|\u05E4\u05BF\u05D0| \u05D3\u05E2|\u05DB\u05D8 |\u05D0\u05B7 | \u05D6\u05F2|\u05D6\u05F2\u05B7| \u05D2\u05E2|\u05D0\u05B8\u05E1|\u05D5\u05E0\u05D2|\u05BF\u05D0\u05B7| \u05D4\u05D0|\u05D4\u05D0\u05B8|\u05DF \u05D3| \u05D0\u05B8|\u05B7\u05DF | \u05D3\u05D9|\u05D0\u05B7\u05DC|\u05F0\u05D0\u05B8| \u05F0\u05D0|\u05E0\u05D2 |\u05D0\u05B7\u05E0|\u05E0\u05D9\u05D8|\u05D0\u05B8\u05D8|\u05D3\u05D9 |\u05F2\u05B7\u05DF|\u05B8\u05D8 |\u05D0\u05B8\u05DC|\u05D9\u05D8 |\u05E2\u05D3\u05E2|\u05D9\u05E2\u05D3| \u05D9\u05E2|\u05DF \u05D6|\u05D0\u05B8\u05E8|\u05E8\u05F2\u05B7|\u05B8\u05E1 |\u05DE\u05E2\u05DF|\u05D1\u05D0\u05B7| \u05DE\u05E2| \u05D1\u05D0|\u05E0\u05D0\u05B7|\u05D8\u05DF |\u05D6\u05D0\u05B8|\u05B7 \u05E8|\u05D0\u05B8\u05D3|\u05E8 \u05D0|\u05D9\u05DF |\u05D0\u05D9\u05DF|\u05E4\u05BF\u05E8|\u05DF \u05D2|\u05E8 \u05D4|\u05DF \u05F0|\u05BF\u05E8\u05F2|\u05B8\u05D3\u05E2|\u05D9\u05D6 | \u05D6\u05D0| \u05E6\u05D5|\u05E2 \u05D0|\u05D0\u05B7\u05E6|\u05D0\u05D9\u05D6|\u05B7\u05E6\u05D9|\u05B7\u05E0\u05D3|\u05F2\u05B7\u05E0|\u05DC\u05E2\u05DB| \u05E4\u05BC|\u05B7\u05E4\u05BF|\u05D0\u05B7\u05E4| \u05E0\u05D9| \u05F0\u05E2|\u05F2\u05D8 |\u05E2\u05D6\u05E2|\u05D2\u05E2\u05D6|\u05D8\u05E2\u05E8|\u05E8\u05D0\u05B7|\u05B8\u05DC |\u05D0\u05B8\u05E0|\u05DC\u05D0\u05B7|\u05E4\u05BF\u05D8|\u05DE\u05D9\u05D8|\u05E8\u05DF |\u05D3\u05D9\u05E7|\u05DC\u05DF |\u05DF \u05E0|\u05D8 \u05D3|\u05D1\u05DF |\u05B7\u05DC\u05E2|\u05E7\u05D8 |\u05D8\u05D9\u05E7|\u05E9\u05D0\u05B7| \u05DE\u05D9|\u05E2\u05E0\u05D8|\u05E8 \u05DE|\u05D8\u05DC\u05E2|\u05D0\u05B7\u05E7|\u05E0\u05E2\u05DF|\u05E3 \u05D0|\u05DB\u05E2\u05E8|\u05D8\u05D0\u05B8|\u05E2\u05E8\u05E2|\u05D9\u05E2 |\u05B7\u05E0\u05E2|\u05E8\u05D5\u05E0|\u05E2\u05DB\u05E2|\u05D9\u05E7 | \u05D3\u05D0|\u05D9\u05E7\u05E2|\u05B7\u05E8\u05D1|\u05D9\u05D8\u05BE|\u05E1\u05E2\u05E8|\u05D4\u05F2\u05D8|\u05B7\u05D4\u05F2|\u05F2\u05B7\u05D4|\u05DC\u05E2 |\u05DF \u05D1| \u05D6\u05D9|\u05DF \u05DE|\u05E4\u05BC\u05E8|\u05D2\u05DF |\u05E2\u05DD |\u05E8 \u05D2| \u05E7\u05F2|\u05B8\u05E8 | \u05D8\u05D0|\u05D9\u05D0\u05B8|\u05E6\u05D9\u05D0|\u05D9\u05E9\u05E2|\u05E2 \u05E4|\u05BE\u05D0\u05D9|\u05D8\u05BE\u05D0|\u05BE\u05E0\u05D9|\u05D8\u05D0\u05B7|\u05DE\u05E2\u05E0|\u05E0\u05D2\u05E2|\u05D0\u05F1\u05E1|\u05E4\u05BF\u05E2|\u05D3\u05D0\u05B8|\u05DF \u05E7|\u05E8 \u05E4|\u05E2\u05D8 |\u05B8\u05E0\u05D0|\u05E8\u05BE\u05E0|\u05E2\u05E8\u05BE|\u05B8\u05E1\u05E2|\u05E6\u05D9\u05E2|\u05D8 \u05E4|\u05E6\u05D5 |\u05D2 \u05D0|\u05D8 \u05E6|\u05D9\u05E7\u05D8|\u05D9\u05DA |\u05D6\u05D9\u05DA|\u05E0\u05D3 |\u05E7\u05DF |\u05DC\u05F2\u05B7| \u05D2\u05DC|\u05F0\u05E2\u05E8|\u05D6\u05E2\u05DC|\u05E7\u05F2\u05D8|\u05D0\u05B8\u05D1|\u05E7\u05E2 |\u05DB\u05E2 |\u05D9\u05E7\u05DF| \u05E6\u05D9|\u05F2\u05E0\u05E2|\u05E2\u05E0\u05E2|\u05E2\u05E8\u05DF| \u05E0\u05D0|\u05E0\u05D3\u05E2|\u05E0\u05D8\u05E2|\u05E8 \u05D3|\u05BF\u05D8 |\u05DF \u05D9|\u05E3 \u05E4|\u05D2\u05E2\u05DF|\u05D3\u05D5\u05E8|\u05E1 \u05D0|\u05DF \u05DC|\u05DF \u05D4|\u05D8 \u05F0| \u05E9\u05D5|\u05E2\u05E1 |\u05E1 \u05D6|\u05E4\u05BC\u05E2| \u05DC\u05D0|\u05E7\u05E2\u05E8|\u05D0\u05B7\u05D8|\u05D9\u05D8\u05E2|\u05E8\u05E2 |\u05E9\u05E2 |\u05D5\u05E0\u05D8|\u05B7\u05E8\u05D0|\u05DC \u05D6|\u05D2\u05DC\u05F2|\u05DC\u05E9\u05D0|\u05E2\u05DC\u05E9|\u05D1\u05E2\u05D8| \u05D3\u05D5|\u05E2\u05E4\u05BF|\u05DB\u05DF |\u05E9\u05DF |\u05D9\u05DD |\u05E9\u05D8\u05E2|\u05DF \u05E9|\u05E0\u05E2\u05DD|\u05E7\u05F2\u05E0|\u05D0\u05B8\u05E4|\u05E0\u05D8 |\u05D8\u05E2\u05D8|\u05DC\u05D9\u05D8| \u05E9\u05D8|\u05F2\u05D8\u05DF|\u05E8 \u05F0|\u05E0\u05D8\u05E9|\u05E8\u05D1\u05E2|\u05D9\u05D5\u05E0|\u05E8\u05DA |\u05D5\u05E8\u05DA|\u05E2\u05E8\u05E6|\u05D9 \u05E4|\u05E8\u05E2\u05E1| \u05D2\u05E8|\u05F2\u05B7\u05DB|\u05E8\u05D0\u05B8|\u05D2 \u05E4|\u05E6\u05D9 |\u05DD \u05D8|\u05E8\u05E2\u05E0|\u05E7 \u05D0|\u05B8\u05E4\u05BC|\u05DC\u05E2\u05E8|\u05D0\u05D9\u05E0|\u05E8\u05E2\u05DC|\u05BF\u05D0\u05B8|\u05E2 \u05E8|\u05D9 \u05D0|\u05B7\u05E8\u05E2|\u05E8 \u05D6| \u05DB\u05BC|\u05DA \u05D0|\u05E6\u05D9\u05D5|\u05E8\u05E6\u05D9|\u05D2 \u05D6|\u05E8 \u05D1| \u05DE\u05D0|\u05E2\u05DE\u05E2|\u05E6\u05DF |\u05E0\u05E2\u05DE|\u05E9\u05E4\u05BC|\u05D0\u05B7\u05DF|\u05E0\u05D8\u05DC|\u05B8\u05D1\u05DF|\u05B7\u05E7\u05D8|\u05DF \u05E6|\u05D2\u05E2\u05E8|\u05E2\u05E8\u05D9| \u05E7\u05E2|\u05DF \u05E2|\u05E2\u05E5 |\u05D6\u05E2\u05E5|\u05DC\u05F1\u05D8| \u05DC\u05F1| \u05F0\u05D9|\u05DD \u05D0|\u05D0\u05D9\u05DD|\u05D5\u05DD |\u05D8\u05E8\u05D0|\u05E4\u05BF\u05DF|\u05B7\u05E8\u05D6|\u05D0\u05D5\u05DE|\u05DE\u05D0\u05B8| \u05E7\u05D5|\u05B7\u05DC\u05D9|\u05E4\u05BC\u05D0|\u05DC\u05D9\u05D2|\u05D6 \u05D0|\u05E7\u05DC\u05D0|\u05E3 \u05D3|\u05E2\u05E8\u05E9|\u05E4\u05BF\u05D9|\u05D0\u05B7\u05E9" } };
  var y9 = 2048;
  var w14 = 10;
  var d16 = 300;
  var s20 = {}.hasOwnProperty;
  var t16;
  var k7 = {};
  for (t16 in l20)
    if (s20.call(l20, t16)) {
      let i22 = l20[t16], a21;
      k7[t16] = {};
      for (a21 in i22)
        if (s20.call(i22, a21)) {
          let e19 = i22[a21].split("|"), o24 = {}, n22 = e19.length;
          for (; n22--; )
            o24[e19[n22]] = n22;
          k7[t16][a21] = o24;
        }
    }
  function B8(i22, a21) {
    return p19(i22, a21)[0][0];
  }
  function p19(i22, a21 = {}) {
    let e19 = [...a21.whitelist || [], ...a21.only || []], o24 = [...a21.blacklist || [], ...a21.ignore || []], n22 = a21.minLength !== null && a21.minLength !== void 0 ? a21.minLength : w14;
    if (!i22 || i22.length < n22)
      return m16();
    i22 = i22.slice(0, y9);
    let u16 = j8(i22, r13);
    return !u16[0] || !(u16[0] in k7) ? !u16[0] || u16[1] === 0 || !g8(u16[0], e19, o24) ? m16() : h9(u16[0]) : c26(i22, z5(m15(i22), k7[u16[0]], e19, o24));
  }
  function c26(i22, a21) {
    let e19 = a21[0][1], o24 = i22.length * d16 - e19, n22 = -1;
    for (; ++n22 < a21.length; )
      a21[n22][1] = 1 - (a21[n22][1] - e19) / o24 || 0;
    return a21;
  }
  function j8(i22, a21) {
    let e19 = -1, o24, n22;
    for (n22 in a21)
      if (s20.call(a21, n22)) {
        let u16 = v6(i22, a21[n22]);
        u16 > e19 && (e19 = u16, o24 = n22);
      }
    return [o24, e19];
  }
  function v6(i22, a21) {
    let e19 = i22.match(a21);
    return (e19 ? e19.length : 0) / i22.length || 0;
  }
  function z5(i22, a21, e19, o24) {
    a21 = D6(a21, e19, o24);
    let n22 = [], u16;
    if (a21)
      for (u16 in a21)
        s20.call(a21, u16) && n22.push([u16, f15(i22, a21[u16])]);
    return n22.length === 0 ? m16() : n22.sort(F10);
  }
  function f15(i22, a21) {
    let e19 = 0, o24 = -1;
    for (; ++o24 < i22.length; ) {
      let n22 = i22[o24], u16 = d16;
      n22[0] in a21 && (u16 = n22[1] - a21[n22[0]] - 1, u16 < 0 && (u16 = -u16)), e19 += u16;
    }
    return e19;
  }
  function D6(i22, a21, e19) {
    if (a21.length === 0 && e19.length === 0)
      return i22;
    let o24 = {}, n22;
    for (n22 in i22)
      g8(n22, a21, e19) && (o24[n22] = i22[n22]);
    return o24;
  }
  function g8(i22, a21, e19) {
    return a21.length === 0 && e19.length === 0 ? true : (a21.length === 0 || a21.includes(i22)) && !e19.includes(i22);
  }
  function m16() {
    return h9("und");
  }
  function h9(i22) {
    return [[i22, 1]];
  }
  function F10(i22, a21) {
    return i22[1] - a21[1];
  }

  // https://esm.sh/v101/iso-639-3-to-1@1.0.0/deno/iso-639-3-to-1.js
  var i21 = Object.create;
  var n21 = Object.defineProperty;
  var h10 = Object.getOwnPropertyDescriptor;
  var l21 = Object.getOwnPropertyNames;
  var t17 = Object.getPrototypeOf;
  var c27 = Object.prototype.hasOwnProperty;
  var o23 = (a21, s21) => () => (s21 || a21((s21 = { exports: {} }).exports, s21), s21.exports);
  var g9 = (a21, s21, u16, r14) => {
    if (s21 && typeof s21 == "object" || typeof s21 == "function")
      for (let m17 of l21(s21))
        !c27.call(a21, m17) && m17 !== u16 && n21(a21, m17, { get: () => s21[m17], enumerable: !(r14 = h10(s21, m17)) || r14.enumerable });
    return a21;
  };
  var f16 = (a21, s21, u16) => (u16 = a21 != null ? i21(t17(a21)) : {}, g9(s21 || !a21 || !a21.__esModule ? n21(u16, "default", { value: a21, enumerable: true }) : u16, a21));
  var q6 = o23((w15, v7) => {
    v7.exports = { aae: "sq", aao: "ar", aar: "aa", aat: "sq", abh: "ar", abk: "ab", abv: "ar", acm: "ar", acq: "ar", acw: "ar", acx: "ar", acy: "ar", adf: "ar", aeb: "ar", aec: "ar", afb: "ar", afr: "af", ajp: "ar", aka: "ak", aln: "sq", als: "sq", amh: "am", apc: "ar", apd: "ar", ara: "ar", arb: "ar", arg: "an", arq: "ar", ars: "ar", ary: "ar", arz: "ar", asm: "as", auz: "ar", ava: "av", ave: "ae", avl: "ar", ayc: "ar", ayh: "ar", ayl: "ar", aym: "ay", ayn: "ar", ayp: "ar", ayr: "ay", azb: "az", aze: "az", azj: "az", bak: "ba", bam: "bm", bbz: "ar", bel: "be", ben: "bn", bhr: "mg", bis: "bi", bjn: "ms", bmm: "mg", bod: "bo", bos: "sh", bre: "br", btj: "ms", bul: "bg", bve: "ms", bvu: "ms", bzc: "mg", cat: "ca", cdo: "zh", ces: "cs", cha: "ch", che: "ce", chu: "cu", chv: "cv", cjy: "zh", ckb: "ku", cmn: "zh", coa: "ms", cor: "kw", cos: "co", cpx: "zh", cre: "cr", crj: "cr", crk: "cr", crl: "cr", crm: "cr", csw: "cr", cwd: "cr", cym: "cy", czh: "zh", czo: "zh", dan: "da", deu: "de", div: "dv", dty: "ne", dup: "ms", dzo: "dz", ekk: "et", ell: "el", eng: "en", epo: "eo", esi: "ik", esk: "ik", est: "et", eus: "eu", ewe: "ee", fao: "fo", fas: "fa", fat: "ak", ffm: "ff", fij: "fj", fin: "fi", fra: "fr", fry: "fy", fub: "ff", fuc: "ff", fue: "ff", fuf: "ff", fuh: "ff", fui: "ff", ful: "ff", fuq: "ff", fuv: "ff", gan: "zh", gax: "om", gaz: "om", gla: "gd", gle: "ga", glg: "gl", glv: "gv", gnw: "gn", grn: "gn", gug: "gn", gui: "gn", guj: "gu", gun: "gn", hae: "om", hak: "zh", hat: "ht", hau: "ha", hbs: "sh", heb: "he", her: "hz", hin: "hi", hji: "ms", hmo: "ho", hrv: "sh", hsn: "zh", hun: "hu", hye: "hy", ibo: "ig", ido: "io", iii: "ii", ike: "iu", ikt: "iu", iku: "iu", ile: "ie", ina: "ia", ind: "ms", ipk: "ik", isl: "is", ita: "it", jak: "ms", jav: "jv", jax: "ms", jpn: "ja", kal: "kl", kan: "kn", kas: "ks", kat: "ka", kau: "kr", kaz: "kk", kby: "kr", khk: "mn", khm: "km", kik: "ki", kin: "rw", kir: "ky", kmr: "ku", knc: "kr", kng: "kg", koi: "kv", kom: "kv", kon: "kg", kor: "ko", kpv: "kv", krt: "kr", kua: "kj", kur: "ku", kvb: "ms", kvr: "ms", kwy: "kg", kxd: "ms", lao: "lo", lat: "la", lav: "lv", lce: "ms", lcf: "ms", ldi: "kg", lim: "li", lin: "ln", lit: "lt", liw: "ms", ltg: "lv", ltz: "lb", lub: "lu", lug: "lg", lvs: "lv", lzh: "zh", mah: "mh", mal: "ml", mar: "mr", max: "ms", meo: "ms", mfa: "ms", mfb: "ms", min: "ms", mkd: "mk", mlg: "mg", mlt: "mt", mnp: "zh", mon: "mn", mqg: "ms", mri: "mi", msa: "ms", msh: "mg", msi: "ms", mui: "ms", mvf: "mn", mya: "my", nan: "zh", nau: "na", nav: "nv", nbl: "nr", nde: "nd", ndo: "ng", nep: "ne", nhd: "gn", nld: "nl", nno: "no", nob: "no", nor: "no", npi: "ne", nya: "ny", oci: "oc", ojb: "oj", ojc: "oj", ojg: "oj", oji: "oj", ojs: "oj", ojw: "oj", orc: "om", ori: "or", orm: "om", orn: "ms", ors: "ms", ory: "or", oss: "os", otw: "oj", pan: "pa", pbt: "ps", pbu: "ps", pel: "ms", pes: "fa", pga: "ar", pli: "pi", plt: "mg", pol: "pl", por: "pt", prs: "fa", pse: "ms", pst: "ps", pus: "ps", qub: "qu", qud: "qu", que: "qu", quf: "qu", qug: "qu", quh: "qu", quk: "qu", qul: "qu", qup: "qu", qur: "qu", qus: "qu", quw: "qu", qux: "qu", quy: "qu", quz: "qu", qva: "qu", qvc: "qu", qve: "qu", qvh: "qu", qvi: "qu", qvj: "qu", qvl: "qu", qvm: "qu", qvn: "qu", qvo: "qu", qvp: "qu", qvs: "qu", qvw: "qu", qvz: "qu", qwa: "qu", qwc: "qu", qwh: "qu", qws: "qu", qxa: "qu", qxc: "qu", qxh: "qu", qxl: "qu", qxn: "qu", qxo: "qu", qxp: "qu", qxr: "qu", qxt: "qu", qxu: "qu", qxw: "qu", roh: "rm", ron: "ro", run: "rn", rus: "ru", sag: "sg", san: "sa", sdc: "sc", sdh: "ku", sdn: "sc", shu: "ar", sin: "si", skg: "mg", slk: "sk", slv: "sl", sme: "se", smo: "sm", sna: "sn", snd: "sd", som: "so", sot: "st", spa: "es", spv: "or", sqi: "sq", src: "sc", srd: "sc", sro: "sc", srp: "sh", ssh: "ar", ssw: "ss", sun: "su", swa: "sw", swc: "sw", swe: "sv", swh: "sw", tah: "ty", tam: "ta", tat: "tt", tdx: "mg", tel: "te", tgk: "tg", tgl: "tl", tha: "th", tir: "ti", tkg: "mg", tmw: "ms", ton: "to", tsn: "tn", tso: "ts", tuk: "tk", tur: "tr", twi: "ak", txy: "mg", uig: "ug", ukr: "uk", urd: "ur", urk: "ms", uzb: "uz", uzn: "uz", uzs: "uz", ven: "ve", vie: "vi", vkk: "ms", vkt: "ms", vol: "vo", vro: "et", wln: "wa", wol: "wo", wuu: "zh", xho: "xh", xmm: "ms", xmv: "mg", xmw: "mg", ydd: "yi", yid: "yi", yih: "yi", yor: "yo", yue: "zh", zch: "za", zeh: "za", zgb: "za", zgm: "za", zgn: "za", zha: "za", zhd: "za", zhn: "za", zho: "zh", zlj: "za", zlm: "ms", zln: "za", zlq: "za", zmi: "ms", zqe: "za", zsm: "ms", zul: "zu", zyb: "za", zyg: "za", zyj: "za", zyn: "za", zzj: "za" };
  });
  var e18 = o23((x15, k8) => {
    var b11 = q6();
    function d17(a21 = "") {
      return b11[a21];
    }
    k8.exports = d17;
  });
  var p20 = f16(e18());
  var { default: z6, ...y10 } = p20;
  var _2 = z6 !== void 0 ? z6 : y10;

  // deps.ts
  var toast = Fe.alert;

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
    let { url, ...fetchOptions } = options;
    fetchOptions = {
      mode: "cors",
      ...fetchOptions
    };
    const fetchFn = options.fetchPolyfill || fetch;
    const response = await fetchFn(url, fetchOptions);
    if (response.ok && response.status >= 200 && response.status < 300) {
      const data = await response.json();
      return data;
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

  // utils/platform.ts
  function isDeno() {
    return typeof Deno !== "undefined";
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
          "yt-formatted-string[slot=content].ytd-comment-renderer"
        ],
        "globalStyles": {
          "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;"
        },
        "urlChangeDelay": 2e3,
        "atomicBlockSelectors": [
          "yt-formatted-string[slot=content].ytd-comment-renderer"
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
  function addToUniqueArray(item, array) {
    if (!array) {
      return [item];
    }
    if (!Array.isArray(array)) {
      array = [array];
    }
    return Array.from(/* @__PURE__ */ new Set([...array, item]));
  }
  function removeFromArray(item, array) {
    if (!array) {
      return [];
    }
    if (!Array.isArray(array)) {
      array = [array];
    }
    return array.filter((i22) => i22 !== item);
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
    if (env.TRANSLATE_SECRET_TENCENT_SECRET_ID && env.TRANSLATE_SECRET_TENCENT_SECRET_KEY) {
      const tencentAuthConfig = {
        secretId: env.TRANSLATE_SECRET_TENCENT_SECRET_ID,
        secretKey: env.TRANSLATE_SECRET_TENCENT_SECRET_KEY
      };
      defaultUserConfig.translationServices = {};
      defaultUserConfig.translationServices.tencent = tencentAuthConfig;
    }
    if (env.TRANSLATE_SERVICE) {
      defaultUserConfig.translationService = env.TRANSLATE_SERVICE;
    }
    if (env.DEBUG === "1") {
      defaultUserConfig.debug = true;
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

  // utils/sha256.ts
  async function sha256(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const result = hex(hashBuffer);
    return result;
  }
  function hex(hashBuffer) {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b11) => b11.toString(16).padStart(2, "0")).join(
      ""
    );
    return hashHex;
  }

  // utils/language_detect.ts
  function languageDetect(text) {
    const result = B8(text);
    if (result) {
      const iso1 = _2(result);
      if (iso1) {
        return iso1;
      } else {
        return "und";
      }
    }
    return "und";
  }

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
    } catch (e19) {
      throw e19;
    }
  }
  function request2(options) {
    if (isMonkey()) {
      options.fetchPolyfill = globalThis.GM_fetch;
      return request(options);
    }
    return sendMessage(sendFetch, options);
  }
  function getConfig2() {
    if (isMonkey()) {
      return getConfig();
    }
    return sendMessage(
      sendGetConfig,
      null
    );
  }
  function detectLanguage(options) {
    if (isMonkey()) {
      const result = languageDetect(options.text);
      return Promise.resolve(result);
    }
    return sendMessage(
      sendDetectLanguage,
      options
    );
  }
  function detectTabLanguage() {
    return sendMessage(
      sendDetectTabLanguage,
      null
    );
  }
  function sendPageTranslatedStatus2(status) {
    if (isMonkey()) {
      const event = new CustomEvent("pageTranslatedStatus", {
        detail: status
      });
      globalThis.dispatchEvent(event);
      return;
    }
    sendPageTranslatedStatus(status);
  }
  function sha2562(message) {
    if (isMonkey()) {
      return sha256(message);
    }
    return sendMessage(
      sendUtilsRequest,
      {
        method: "sha256",
        options: message
      }
    );
  }
  function hmacSha256ByArrayBuffer(message, key) {
    return sendMessage(
      sendUtilsRequest,
      {
        method: "hmacSha256ByArrayBuffer",
        options: {
          message,
          key
        }
      }
    );
  }
  function hmacSha256ByString(message, key) {
    return sendMessage(
      sendUtilsRequest,
      {
        method: "hmacSha256ByString",
        options: {
          message,
          key
        }
      }
    );
  }
  function queryDb(query) {
    if (isMonkey()) {
      return Promise.resolve(null);
    }
    return sendMessage(
      sendDBQuery,
      query
    );
  }
  async function setDbStore(params) {
    if (isMonkey()) {
      return;
    }
    await sendMessage(
      sendDBStore,
      params
    );
    return;
  }

  // dom/util.ts
  function duplicatedElements(root, array) {
    const footers = root.querySelectorAll("footer");
    const headers2 = root.querySelectorAll("header");
    for (let i22 = 0; i22 < array.length; i22++) {
      const a21 = array[i22];
      for (let j9 = i22 + 1; j9 < array.length; j9++) {
        const b11 = array[j9];
        if (a21.contains(b11)) {
          array.splice(j9, 1);
          j9--;
        } else if (b11.contains(a21)) {
          array.splice(i22, 1);
          i22--;
          break;
        } else if (a21 === b11) {
          array.splice(j9, 1);
          j9--;
        }
      }
    }
    const finalArray = array.filter((element) => {
      let isFooter = false;
      let isHeader = false;
      for (const footer of footers) {
        if (element === footer || footer.contains(element)) {
          isFooter = true;
          break;
        }
      }
      if (isFooter) {
        return false;
      }
      for (const header of headers2) {
        if (element.nodeName !== "H1" && (element === header || header.contains(element))) {
          isHeader = true;
          break;
        }
      }
      if (isHeader) {
        return false;
      }
      return true;
    });
    return finalArray;
  }
  function getLastHTMLElement(elements) {
    for (let i22 = elements.length - 1; i22 >= 0; i22--) {
      const element = elements[i22];
      if (typeof element !== "string") {
        return element;
      }
    }
    return null;
  }
  function getFirstHTMLElement(elements) {
    for (let i22 = 0; i22 < elements.length; i22++) {
      const element = elements[i22];
      if (typeof element !== "string") {
        return element;
      }
    }
    return null;
  }
  function getWhitespace(nextNode) {
    if (nextNode && nextNode.nodeType === Node.TEXT_NODE && nextNode.textContent && nextNode.textContent?.length > 0) {
      return " ";
    } else {
      return null;
    }
  }
  function getElementsBySelectors(root, selectors) {
    const elements = [];
    for (const selector of selectors) {
      const nodes = root.querySelectorAll(selector);
      for (const node of nodes) {
        elements.push(node);
      }
    }
    return elements;
  }
  function isInlineElement(element, extraInlineElements, extraBlockElements, rule) {
    const inlineTags = rule.inlineTags;
    if (element.nodeType === Node.ELEMENT_NODE) {
      if (inlineTags.includes(element.nodeName)) {
        if (extraBlockElements.length > 0) {
          for (const blockElement of extraBlockElements) {
            if (element.contains(blockElement) || element.hasAttribute(
              sourceBlockElementMarkAttributeName
            )) {
              return false;
            }
          }
        }
        return true;
      } else if (extraInlineElements.length > 0) {
        for (const extraInlineElement of extraInlineElements) {
          if (extraInlineElement.contains(element) || element.hasAttribute(
            sourceInlineElementMarkAttributeName
          )) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function isDuplicateElement(element, elements) {
    for (const e19 of elements) {
      if (e19 === element) {
        return true;
      }
    }
    return false;
  }
  function isExcludeElement(element, excludeElements, rule) {
    const { excludeTags } = rule;
    if (excludeTags.includes(element.nodeName)) {
      return true;
    }
    if (element.nodeType === Node.ELEMENT_NODE) {
      if (excludeElements.includes(element)) {
        return true;
      }
      for (const excludeElement of excludeElements) {
        if (excludeElement.contains(element)) {
          return true;
        }
      }
    }
    return false;
  }
  function isNeedToTranslate(item) {
    const text = item.text;
    const trimedText = text.trim();
    if (trimedText === "" || trimedText.length === 1 && trimedText.charCodeAt(0) === 8203 || /^\d+(,\d+)*(\.\d+)?$/.test(text)) {
      return false;
    }
    return true;
  }
  function isMarked(element, markedAttribute) {
    return element.hasAttribute(markedAttribute) && element.getAttribute(markedAttribute) === "1";
  }
  function trimText(text) {
    return text.replace(/\s/g, " ");
  }
  function getMainText(root) {
    const main3 = root.querySelector("main");
    let text = "";
    if (main3) {
      text = trimText(main3.innerText);
    }
    if (text.length >= 10) {
      return text;
    }
    const article = root.querySelectorAll("article");
    if (article.length > 0) {
      for (const a21 of article) {
        text = trimText(a21.innerText);
      }
    }
    if (text.length >= 10) {
      return text;
    }
    text = trimText(root.innerText);
    return text;
  }

  // dom/detect_page_language.ts
  async function detectPageLanguage() {
    let lang = "und";
    if (document.body && document.body.innerText) {
      lang = await detectLanguage({
        text: getMainText(document.body)
      });
    }
    if (lang === "und" && document.documentElement && document.documentElement.lang) {
      lang = formatLanguage(document.documentElement.lang);
    }
    return lang;
  }

  // dom/get_containers.ts
  function getContainers(root, ctx) {
    if (!(root && root.innerText)) {
      return [];
    }
    const { rule } = ctx;
    let contentContainers = [];
    if (rule && rule.selectors.length > 0) {
      const containers = rule.selectors.map((selector) => {
        const elements = root.querySelectorAll(selector);
        return Array.from(elements);
      }).flat();
      contentContainers.push(...containers);
    } else {
      if (rule && rule.additionalSelectors.length > 0) {
        const additionalElements = getElementsBySelectors(
          root,
          rule.additionalSelectors
        );
        contentContainers.push(...additionalElements);
      }
      const articleElements = getElementsBySelectors(root, ["article"]);
      contentContainers.push(...articleElements);
      const allPTags = root.querySelectorAll("p");
      if (allPTags.length > 0) {
        allPTags.forEach((p22) => {
          const myInnerText = p22.innerText.match(/\S+/g);
          if (myInnerText && myInnerText.length > 3) {
            if (p22.parentElement) {
              if (!contentContainers.includes(p22.parentElement)) {
                contentContainers.push(p22.parentElement);
              }
            }
          }
        });
      }
      const allBrTags = root.querySelectorAll("br");
      if (allBrTags.length > 0) {
        allBrTags.forEach((br) => {
          if (br.parentElement) {
            const parent = br.parentElement;
            const myInnerText = parent.innerText.match(/\S+/g);
            if (myInnerText && myInnerText.length > 3) {
              if (!contentContainers.includes(parent)) {
                contentContainers.push(parent);
              }
            }
          }
        });
      }
      if (contentContainers.length === 0) {
        let mains = root.querySelectorAll("[role=main]");
        if (mains.length === 0) {
          mains = root.querySelectorAll("main");
        }
        if (mains.length === 0) {
          mains = root.querySelectorAll(".main");
        }
        if (mains.length > 0) {
          const mainsArray = Array.from(mains);
          contentContainers = contentContainers.concat(mainsArray);
        }
      }
    }
    const finalContainers = duplicatedElements(root, contentContainers);
    finalContainers.sort(function(a21, b11) {
      return a21.compareDocumentPosition(b11) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
    return finalContainers;
  }

  // dom/unmount.ts
  var cleanQueue = [];
  function addToUnmountQueue(fn) {
    cleanQueue.push(fn);
  }
  function clean() {
    cleanQueue.forEach((fn) => fn());
    cleanQueue = [];
  }

  // dom/current_language.ts
  var currentPageLanguage = "und";
  function setCurrentPageLanguage(lang) {
    currentPageLanguage = lang;
  }
  function getCurrentPageLanguage() {
    return currentPageLanguage;
  }

  // dom/elements_to_paragraph.ts
  function elementsToParagraph(elements, excludeElements, ctx) {
    const variables = [];
    const { rule } = ctx;
    const { stayOriginalTags } = rule;
    let text = "";
    for (let i22 = 0; i22 < elements.length; i22++) {
      const element = elements[i22];
      if (typeof element === "string") {
        text += element;
        continue;
      }
      if (isExcludeElement(element, excludeElements, rule)) {
        if (stayOriginalTags.includes(element.nodeName)) {
          const codeText = element.innerText;
          const variable = {
            type: element.nodeName.toLowerCase(),
            value: codeText
          };
          variables.push(variable);
          const delimiter = `${delimiters[0]}`;
          text += delimiter;
        } else {
          continue;
        }
      } else {
        const rawText = element.innerText;
        const isStartWithSpace = rawText.startsWith(" ");
        const isEndWithSpace = rawText.endsWith(" ");
        text += (isStartWithSpace ? " " : "") + rawText.trim() + (isEndWithSpace ? " " : "");
      }
      if (typeof element !== "string") {
        const whitespace = getWhitespace(element.nextSibling);
        if (whitespace) {
          text += whitespace;
        }
      }
    }
    let inline = false;
    const wordCount = text.split(" ").length;
    if (wordCount < 4 && text.length < 12) {
      inline = true;
    }
    const paragraph = {
      elements,
      text,
      variables,
      inline
    };
    if (isNeedToTranslate(paragraph)) {
      return paragraph;
    }
    return null;
  }

  // services/util.ts
  async function stringToSHA1String(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-1", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b11) => b11.toString(16).padStart(2, "0")).join("");
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
    for (let i22 = 0; i22 < sentences.length; i22++) {
      const currentSentence = sentences[i22];
      const { from, to, text, url } = currentSentence;
      const textArrSplitedByNewLine = text.split("\r?\n");
      const currentTempSentences = [];
      let currentPrefix = "";
      for (let j9 = 0; j9 < textArrSplitedByNewLine.length; j9++) {
        const currentText = textArrSplitedByNewLine[j9];
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
            for (let k8 = 0; k8 < tempSplitedSentences.length; k8++) {
              const tempSentence = tempSplitedSentences[k8];
              const { text: text2, prefix, suffix } = tempSentence;
              currentTempSentences.push({
                from,
                to,
                text: text2,
                prefix,
                suffix,
                index: i22,
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
              index: i22,
              url
            });
          }
        }
      }
      allTempSentences.push(...currentTempSentences);
    }
    return allTempSentences;
  }
  function isSameTargetLanguage(sourceLanguage, targetLanguage) {
    const finalSourceLanguage = formatLanguage(sourceLanguage);
    const finalTargetLanguage = formatLanguage(targetLanguage);
    let isSame = finalSourceLanguage === finalTargetLanguage;
    if (isSame) {
      return true;
    }
    isSame = finalSourceLanguage.startsWith("zh") && finalTargetLanguage.startsWith("zh");
    return isSame;
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

  // dom/get_paragraphs.ts
  var paragraphAutoIncreaceId = 1;
  var paragraphEntities = /* @__PURE__ */ new Map();
  function getParagraph(id) {
    return paragraphEntities.get(id);
  }
  function cleanParagraphs() {
    paragraphEntities.clear();
  }
  function isMarkedByParagraph(targetElement) {
    if (!isMarked(targetElement, sourceElementMarkAttributeName)) {
      return false;
    }
    const markId = targetElement.getAttribute(
      sourceElementParagraphAttributeName
    );
    if (!markId) {
      return false;
    }
    const paragraphId = parseInt(markId);
    const isExist = paragraphEntities.has(paragraphId);
    if (!isExist) {
      const maybeTargetElement = document.getElementById(
        `${translationTargetElementWrapperClass}-${paragraphId}`
      );
      if (maybeTargetElement) {
        maybeTargetElement.remove();
      }
    }
    return isExist;
  }
  async function getParagraphs(_root, containers, excludeElements, extraInlineElements, extraBlockElements, ctx) {
    let allParagraphs = [];
    function addToParagraphs(paragraph) {
      const newParagraph = {
        ...paragraph,
        id: paragraphAutoIncreaceId++
      };
      newParagraph.elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.setAttribute(sourceElementMarkAttributeName, "1");
          element.setAttribute(
            sourceElementParagraphAttributeName,
            `${newParagraph.id}`
          );
        }
      });
      allParagraphs.push(newParagraph);
      paragraphEntities.set(newParagraph.id, {
        ...newParagraph,
        state: "Original"
      });
    }
    const { targetLanguage, rule, isDetectParagraphLanguage } = ctx;
    const { stayOriginalTags } = rule;
    for (const container of containers) {
      let inlineElementGroups = [];
      if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
        if (!isMarkedByParagraph(container)) {
          const paragraph = elementsToParagraph(
            [container],
            excludeElements,
            ctx
          );
          if (paragraph) {
            addToParagraphs(paragraph);
          }
        }
        continue;
      }
      const filter = (node2) => {
        if (node2.nodeType === Node.ELEMENT_NODE) {
          const element = node2;
          if (isMarkedByParagraph(
            node2
          )) {
            return NodeFilter.FILTER_REJECT;
          } else {
            element.setAttribute(sourceElementMarkAttributeName, "1");
          }
          if (isMarked(element, sourceAtomicBlockElementMarkAttributeName)) {
            if (inlineElementGroups.length > 0) {
              const paragraph2 = elementsToParagraph(
                inlineElementGroups,
                excludeElements,
                ctx
              );
              if (paragraph2) {
                addToParagraphs(paragraph2);
              }
              inlineElementGroups = [];
            }
            inlineElementGroups.push(element);
            const paragraph = elementsToParagraph(
              inlineElementGroups,
              excludeElements,
              ctx
            );
            if (paragraph) {
              addToParagraphs(paragraph);
            }
            inlineElementGroups = [];
            return NodeFilter.FILTER_REJECT;
          }
        }
        if (isExcludeElement(node2, excludeElements, rule)) {
          if ((node2.nodeName === "CODE" || node2.nodeName === "TT") && node2.parentNode?.nodeName === "PRE") {
            return NodeFilter.FILTER_REJECT;
          }
          if (isInlineElement(
            node2,
            extraInlineElements,
            extraBlockElements,
            rule
          )) {
            inlineElementGroups.push(node2);
          } else {
            if (inlineElementGroups.length > 0) {
              const paragraph = elementsToParagraph(
                inlineElementGroups,
                excludeElements,
                ctx
              );
              if (paragraph) {
                addToParagraphs(paragraph);
              }
              inlineElementGroups = [];
            }
          }
          return NodeFilter.FILTER_REJECT;
        }
        if (node2.nodeName === "PRE") {
          if (node2.classList.contains("code")) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
        if (isInlineElement(
          node2,
          extraInlineElements,
          extraBlockElements,
          rule
        )) {
          const previouseElement = node2.previousElementSibling;
          if (previouseElement && !isInlineElement(
            previouseElement,
            extraInlineElements,
            extraBlockElements,
            rule
          )) {
            if (inlineElementGroups.length > 0) {
              const paragraph = elementsToParagraph(
                inlineElementGroups,
                excludeElements,
                ctx
              );
              if (paragraph) {
                addToParagraphs(paragraph);
              }
              inlineElementGroups = [];
            }
          }
          if (!stayOriginalTags.includes(node2.nodeName)) {
            const innerHTML = node2.innerHTML;
            if (innerHTML.includes("<code>") || innerHTML.includes("<tt>")) {
              inlineElementGroups.push(
                ...getInlineElementsOfInlineElement(node2)
              );
              return NodeFilter.FILTER_REJECT;
            } else {
              inlineElementGroups.push(node2);
            }
          } else {
            inlineElementGroups.push(node2);
          }
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      };
      const elementIter = document.createTreeWalker(
        container,
        NodeFilter.SHOW_ELEMENT,
        filter
      );
      let node = elementIter.nextNode();
      while (node) {
        if (inlineElementGroups.length > 0) {
          const paragraph = elementsToParagraph(
            inlineElementGroups,
            excludeElements,
            ctx
          );
          if (paragraph) {
            addToParagraphs(paragraph);
          }
          inlineElementGroups = [];
        }
        node = elementIter.nextNode();
      }
      if (inlineElementGroups.length > 0) {
        const paragraph = elementsToParagraph(
          inlineElementGroups,
          excludeElements,
          ctx
        );
        if (paragraph) {
          addToParagraphs(paragraph);
        }
        inlineElementGroups = [];
      }
    }
    if (isDetectParagraphLanguage) {
      const promises = allParagraphs.map((paragraph) => {
        const { text } = paragraph;
        return detectLanguage({
          text
        });
      });
      const results = await Promise.all(promises);
      const filterdParagraphs = [];
      results.forEach((result, index) => {
        const isSame = isSameTargetLanguage(result, targetLanguage);
        if (!isSame) {
          filterdParagraphs.push(allParagraphs[index]);
        }
      });
      allParagraphs = filterdParagraphs;
    }
    return allParagraphs;
  }
  function getInlineElementsOfInlineElement(root) {
    const elements = [];
    const treeWalker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      null
    );
    let node = null;
    let isWhiteSpaceNodeOfLastElement = false;
    while (node = treeWalker.nextNode()) {
      const rawText = node.textContent || "";
      const textContent = rawText.trim();
      if (!isWhiteSpaceNodeOfLastElement && rawText.length > 0 && textContent.length === 0) {
        isWhiteSpaceNodeOfLastElement = true;
        elements.push(" ");
        continue;
      }
      if (textContent.length > 0) {
        elements.push(node.parentElement);
        isWhiteSpaceNodeOfLastElement = false;
      }
    }
    const lastElement = elements[elements.length - 1];
    if (lastElement && typeof lastElement !== "string") {
      const whitespace = getWhitespace(lastElement.nextSibling);
      if (whitespace) {
        elements.push(whitespace);
      }
    }
    if (typeof elements[elements.length - 1] !== "string") {
      const whitespace = getWhitespace(root.nextSibling);
      if (whitespace) {
        elements.push(whitespace);
      }
    }
    return elements;
  }

  // utils/escape_html.ts
  function escapeHTML(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // dom/paragraph_to_html.ts
  var regex = new RegExp(`${delimiters[0]}`, "g");
  function paragraphToHtml(sourceItem, sentence, ctx) {
    const { rule, translationTheme } = ctx;
    let { variables, text } = sourceItem;
    variables = variables || [];
    const { text: targetText } = sentence;
    const { wrapperPrefix, wrapperSuffix } = rule;
    const position = "afterend";
    let matchIndex = 0;
    let html = targetText;
    if (variables.length > 0) {
      html = html.replace(regex, (match) => {
        const variable = variables[Number(matchIndex)];
        matchIndex++;
        if (variable.type) {
          return `<${variable.type}>${escapeHTML(variable.value)}</${variable.type}>`;
        }
        return match;
      });
    }
    const classList = ["notranslate"];
    if (translationTheme) {
      classList.push(
        `${brandId}-target-translation-theme-${translationTheme}`
      );
    }
    if (rule) {
      if (rule.translationClasses.length > 0) {
        classList.push(...rule.translationClasses);
      }
    }
    if (!sourceItem.inline) {
      classList.push(translationTargetTranslationElementBlockWrapperClass);
      if (wrapperPrefix === "smart") {
        html = `<br>${html}`;
      } else {
        html = `${wrapperPrefix}${html}`;
      }
      if (wrapperPrefix === "smart") {
        if (text.length >= 70) {
          html = `<br>${html}`;
        }
      }
      if (wrapperSuffix === "smart") {
        html = `${html}<br>`;
      } else {
        html = `${html}${wrapperSuffix}`;
      }
    } else {
      classList.push(translationTargetTranslationElementInlineWrapperClass);
    }
    html = `<span class="${classList.join(" ")}">${html}</span>`;
    if (sourceItem.inline) {
      html = `<span class="notranslate">&nbsp;<span>${html}`;
    }
    return {
      html,
      position
    };
  }

  // dom/normalize_container.ts
  function normalizeContainer(containers, excludeElements, extraInlineElements, extraBlockElements, rule) {
    for (const container of containers) {
      if (isMarked(container, sourceAtomicBlockElementMarkAttributeName)) {
        return;
      }
      container.setAttribute(targetContainerElementAttributeName, "1");
      const isExcludePre = rule.excludeTags.includes("PRE") || rule.additionalExcludeTags.includes("PRE");
      if (!isExcludePre) {
        const preTags = container.querySelectorAll("pre");
        for (const preTag of preTags) {
          const html = preTag.innerHTML;
          preTag.innerHTML = html.replace(/\n/g, "<br>");
        }
      }
      if (container.tagName !== "PRE") {
        if (isPreElementByStyle(container)) {
          const html = container.innerHTML;
          container.innerHTML = html.replace(/\n/g, "<br>");
        }
      }
      wrapTextNode(
        0,
        container,
        excludeElements,
        extraInlineElements,
        extraBlockElements,
        rule
      );
    }
  }
  function wrapTextNode(depth, root, excludeElements, extraInlineElements, extraBlockElements, rule) {
    if (isMarked(root, sourceAtomicBlockElementMarkAttributeName)) {
      return;
    }
    const { stayOriginalTags } = rule;
    let isSingleInlineElement = false;
    if (depth === 0) {
      if (root.childNodes && root.childNodes.length === 1 && root.nodeType === Node.ELEMENT_NODE && isInlineElement(
        root,
        extraInlineElements,
        extraBlockElements,
        rule
      ) && !stayOriginalTags.includes(root.nodeName)) {
        isSingleInlineElement = true;
      }
    }
    if (root && root.childNodes && root.childNodes.length > 0) {
      for (const node of root.childNodes) {
        if ((isInlineElement(node, extraInlineElements, extraBlockElements, rule) || isExcludeElement(node, excludeElements, rule)) && !isSingleInlineElement) {
          continue;
        }
        if (node.nodeType === Node.ELEMENT_NODE) {
          wrapTextNode(
            depth + 1,
            node,
            excludeElements,
            extraInlineElements,
            extraBlockElements,
            rule
          );
        } else if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent;
          if (text && text.trim().length > 0) {
            const span = document.createElement("span");
            node.after(span);
            span.appendChild(node);
          }
        }
      }
    }
  }
  function isPreElementByStyle(element) {
    const style = window.getComputedStyle(element);
    return style.whiteSpace.startsWith("pre") || style.whiteSpace === "break-spaces";
  }

  // log.ts
  var Timing = class {
    #t = performance.now();
    reset() {
      this.#t = performance.now();
    }
    stop(message) {
      const now = performance.now();
      const d17 = Math.round(now - this.#t);
      let cf = colors_exports.green;
      if (d17 > 1e4) {
        cf = colors_exports.red;
      } else if (d17 > 1e3) {
        cf = colors_exports.yellow;
      }
      console.debug(
        colors_exports.dim(brandName + " TIMING:"),
        message,
        "in",
        cf(d17 + "ms")
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

  // services/translation.ts
  var Translation = class {
    constructor(serviceConfig, generalConfig) {
      this.maxTextLength = 1800;
      this.isSupportList = true;
      this.maxTextGroupLength = 1e3;
      this.serviceConfig = serviceConfig;
      this.generalConfig = generalConfig;
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
      for (let i22 = 0; i22 < tempSentenceGroups.length; i22++) {
        const tempSentenceGroup = tempSentenceGroups[i22];
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
        } catch (e19) {
          if (everySentenceCallback) {
            for (const sentence of sentences) {
              everySentenceCallback(e19, sentence);
            }
            throw e19;
          } else {
            throw e19;
          }
        }
        const { text: translatedTexts, from: detectedFrom } = result;
        for (let j9 = 0; j9 < translatedTexts.length; j9++) {
          const translatedText = translatedTexts[j9];
          const tempSentence = tempSentenceGroup.tempSentences[j9];
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
      version: version2
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
        await sha2562(payload)
      ].join("\n");
      const datestamp = _Tencent.getUTCDate(now);
      const StringToSign = [
        "TC3-HMAC-SHA256",
        timestamp,
        `${datestamp}/${service}/tc3_request`,
        await sha2562(CanonicalRequest)
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
          "X-TC-Version": version2,
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
    for (let i22 = 0; i22 < sentences.length; i22++) {
      const chunks = sentences[i22].chunks;
      for (let j9 = 0; j9 < chunks.length; j9++) {
        const chunk = chunks[j9];
        jobs.push({
          kind: "default",
          _index: i22,
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
  function createAbbreviationsDictionary(languages2 = SUPPORTED_LANGUAGES) {
    return languages2.reduce((acc, lang) => {
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
        url: API_URL,
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
      url: API_URL,
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
      this.maxTextGroupLength = 1e4;
      this.maxTextLength = 1200;
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
  var D7 = _D;
  D7.langMap = new Map(langMap3);
  D7.langMapReverse = new Map(
    langMap3.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/transmart.ts
  var langMap4 = [
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
      this.maxTextGroupLength = 5;
      this.clientKey = btoa(
        "transmart_crx_" + navigator.userAgent
      ).slice(0, 100);
    }
    async translate(payload) {
      const { text, to } = payload;
      const formatedTo = _Transmart.langMap.get(to);
      const sourceLanguage = await this.detectLanguage(text);
      const internalFrom = _Transmart.langMapReverse.get(sourceLanguage);
      if (sourceLanguage === formatedTo) {
        return {
          text,
          from: sourceLanguage,
          to: formatedTo
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
      const { text, to } = payload;
      const sourceLanguage = await this.detectLanguage(text.join("\n"));
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
  Transmart.langMap = new Map(langMap4);
  Transmart.langMapReverse = new Map(
    langMap4.map(([translatorLang, lang]) => [lang, translatorLang])
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

  // services/mod.ts
  var TranslationServices = {
    mock: {
      class: Mock,
      name: "Mock",
      homepage: "https://www.google.com"
    },
    tencent: {
      class: Tencent,
      name: "Tencent",
      homepage: "https://fanyi.qq.com/"
    },
    google: {
      class: Google,
      name: "Google",
      homepage: "https://translate.google.com/"
    },
    transmart: {
      class: Transmart,
      name: "Transmart",
      homepage: "https://transmart.qq.com/"
    },
    d: {
      class: D7,
      name: "Deepl(Alpha) ",
      alpha: true,
      homepage: "https://www.deepl.com/translator"
    }
  };
  function formatTranslationService(key, ctx) {
    const service = TranslationServices[key];
    const translationConfig = ctx.config.translationServices[key] || {};
    let ok = true;
    if (key === "tencent") {
      if (!translationConfig.secretId || !translationConfig.secretKey) {
        ok = false;
      }
    }
    return {
      ...service,
      id: key,
      selected: ctx.translationService === key,
      ok,
      config: translationConfig
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
  async function translateSingleSentence(sentence, ctx) {
    if (!sentence.text) {
      return sentence;
    }
    if (sentence.from === "und") {
      sentence.from = "auto";
    }
    const result = await translateMultipleSentences(
      {
        sentences: [sentence]
      },
      ctx
    );
    if (result.sentences.length > 0) {
      return {
        ...sentence,
        ...result.sentences[0]
      };
    }
    throw new CommonError("translateFailed", "translate failed");
  }
  async function translateMultipleSentences(payload, ctx, everySentenceCallback) {
    if (!payload.sentences.length) {
      return {
        ...payload
      };
    }
    const { config, translationService } = ctx;
    const generalConfig = config.translationGeneralConfig;
    const services = config.translationServices;
    const defaultTranslationEngine = translationService;
    const serviceConfig = services[defaultTranslationEngine] || {};
    payload.sentences = payload.sentences.map((sentence) => {
      if (sentence.from === "und") {
        sentence.from = "auto";
      }
      return sentence;
    });
    const noCacheSentences = [];
    const finalResult = {
      sentences: Array(payload.sentences.length)
    };
    const sourceLength = payload.sentences.length;
    let sentenceIndex = -1;
    for (const sentence of payload.sentences) {
      sentenceIndex++;
      const res = await queryDb({
        originalText: sentence.text,
        from: sentence.from,
        to: sentence.to,
        service: defaultTranslationEngine
      });
      if (res) {
        const result = {
          ...sentence,
          text: res.translatedText
        };
        finalResult.sentences[sentenceIndex] = result;
        if (everySentenceCallback) {
          everySentenceCallback(null, result);
        }
      } else {
        noCacheSentences.push(sentence);
      }
    }
    const resultLength = noCacheSentences.length;
    if (sourceLength - resultLength > 0) {
      log_default.debug(`use ${sourceLength - resultLength} sentences from cache`);
    }
    if (!noCacheSentences.length) {
      return finalResult;
    }
    const translator = new TranslationServices[defaultTranslationEngine].class(
      serviceConfig,
      generalConfig
    );
    await translator.init();
    const noCacheResult = await translator.multipleTranslate(
      {
        sentences: noCacheSentences
      },
      everySentenceCallback
    );
    let resultIndex = -1;
    for (const sentence of noCacheResult.sentences) {
      resultIndex++;
      if (defaultTranslationEngine !== "mock") {
        await setDbStore(
          {
            translatedText: sentence.text,
            from: noCacheSentences[resultIndex].from,
            to: noCacheSentences[resultIndex].to,
            detectedFrom: sentence.from,
            key: await stringToSHA1String(noCacheSentences[resultIndex].text),
            service: defaultTranslationEngine
          }
        );
      }
      const index = finalResult.sentences.findIndex((s21) => !s21);
      if (index === -1) {
        throw new CommonError("translateFailed", "can not match the result");
      }
      finalResult.sentences[index] = sentence;
    }
    return finalResult;
  }

  // utils/url_match.ts
  var matchAll = ["*://*/*", "*", "*://*"];
  var placeholder = "immersive-translate-wildcard-placeholder.com";
  function getMatchedUrl(url, rawMatches) {
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
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    if (matches && matches.length > 0) {
      const matched = matches.find((match) => {
        if (match === hostname) {
          return true;
        } else if (matchAll.includes(match)) {
          return true;
        } else if (!match.includes("*")) {
          try {
            const matchUrl = new URL(match);
            if (matchUrl.pathname === "/" && !match.endsWith("/")) {
              return matchUrl.hostname === hostname;
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
          const hostname2 = validUrlObj.hostname;
          const pathname = validUrlObj.pathname;
          const protocol = validUrlObj.protocol;
          const port = validUrlObj.port;
          const regex2 = makeRegExp(
            scheme + ":",
            restorePlaceholderToWildcard(hostname2),
            restorePlaceholderToWildcard(pathname)
          );
          if (regex2) {
            const clonedUrl = new URL(url);
            clonedUrl.port = "";
            return regex2.test(clonedUrl.href);
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
    let regex2 = "^";
    if (scheme === "*:") {
      regex2 += "(http:|https:|file:)";
    } else {
      regex2 += scheme;
    }
    regex2 += "//";
    if (host) {
      if (host === "*") {
        regex2 += "[^/]+?";
      } else {
        if (host.match(/^\*\./)) {
          regex2 += "[^/]*?";
          host = host.substring(2);
        }
        regex2 += host.replace(/\./g, "\\.").replace(/\*/g, "[^/]*");
      }
    }
    if (path) {
      if (path === "*" || path === "/*") {
        regex2 += "(/.*)?";
      } else if (path.includes("*")) {
        regex2 += path.replace(/\*/g, ".*?");
        regex2 += "/?";
      } else {
        regex2 += "/?";
      }
    } else {
      regex2 += "/?";
    }
    regex2 += "$";
    return new RegExp(regex2);
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
    const isTranslateExcludeUrl = isMatchUrl(
      url,
      translationUrlPattern.excludeMatches
    );
    const defaultTargetLanguage = targetLanguage || "zh-CN";
    const hostname = urlObj.hostname;
    const encryptedHostname = await sha2562(hostname);
    const pathAndQueryAndHash = urlObj.pathname + urlObj.search + urlObj.hash;
    const encryptedPath = await sha2562(pathAndQueryAndHash);
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

  // dom/translate_page.ts
  var pageStatus = "Original";
  var currentParagraphIds = [];
  var allNewDynamicElements = [];
  var allIntersectionObserver = [];
  var currentNewDynamicElements = [];
  var oldUrl = globalThis.location.href;
  var debounceTranslateCurrentQueue = debounce(translateCurrentQueue, 300);
  var debounceTranslateNewDynamicNodes = debounce(
    translateNewDynamicNodes,
    300
  );
  var mutationObserver;
  var titleMutationObserver;
  var originalPageTitle = "";
  async function toggleTranslatePage() {
    if (pageStatus === "Original") {
      await translatePage();
    } else if (pageStatus === "Translated") {
      restorePage();
    }
  }
  function restorePage() {
    disableMutatinObserver();
    pageStatus = "Translating";
    sendPageTranslatedStatus2(pageStatus);
    if (originalPageTitle) {
      document.title = originalPageTitle;
    }
    const elements = document.querySelectorAll(
      "." + translationTargetElementWrapperClass
    );
    elements.forEach((element) => {
      element.remove();
    });
    const containers = document.querySelectorAll(
      `[${targetContainerElementAttributeName}="1"]`
    );
    containers.forEach((container) => {
      container.removeAttribute(targetContainerElementAttributeName);
    });
    const scanedElements = document.querySelectorAll(
      `[${sourceElementMarkAttributeName}]`
    );
    scanedElements.forEach((element) => {
      element.removeAttribute(sourceElementMarkAttributeName);
    });
    const paragraphElements = document.querySelectorAll(
      `[${sourceElementParagraphAttributeName}]`
    );
    paragraphElements.forEach((element) => {
      element.removeAttribute(sourceElementParagraphAttributeName);
    });
    const sourceAtomicBlockElementMarkAttributeNameElements = document.querySelectorAll(`[${sourceAtomicBlockElementMarkAttributeName}]`);
    sourceAtomicBlockElementMarkAttributeNameElements.forEach((element) => {
      element.removeAttribute(sourceAtomicBlockElementMarkAttributeName);
    });
    pageStatus = "Original";
    sendPageTranslatedStatus2(pageStatus);
  }
  function onElementVisible(paragraph, callback) {
    let isCalled = false;
    const firstElement = getFirstHTMLElement(paragraph.elements);
    const lastElement = getLastHTMLElement(paragraph.elements);
    if (firstElement) {
      const observe = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            observer.disconnect();
            if (!isCalled) {
              isCalled = true;
              callback(paragraph);
            }
          }
        });
      });
      allIntersectionObserver.push(observe);
      observe.observe(firstElement);
    }
    if (lastElement && lastElement !== firstElement) {
      const observe = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            observer.disconnect();
            if (!isCalled) {
              isCalled = true;
              callback(paragraph);
            }
          }
        });
      });
      allIntersectionObserver.push(observe);
      observe.observe(lastElement);
    }
  }
  async function translateNewDynamicNodes(ctx) {
    const currentNewDynamicNodes = [...currentNewDynamicElements];
    currentNewDynamicElements = [];
    try {
      const allContainers = [];
      for (const element of currentNewDynamicNodes) {
        const rawContainers = getContainers(element, ctx);
        if (rawContainers.length === 0) {
          continue;
        }
        const containers = rawContainers;
        allContainers.push(...containers);
      }
      await translateContainers(allContainers, ctx);
    } catch (e19) {
      log_default.error(`translateNewDynamicNodes error: ${e19.message}`);
    }
  }
  function addParagraphToQueue(paragraph, ctx) {
    onElementVisible(paragraph, (visibleParagraph) => {
      const id = visibleParagraph.id;
      const lastElement = getLastHTMLElement(visibleParagraph.elements);
      let position = "afterend";
      if (visibleParagraph.elements.length === 1 && lastElement) {
        position = "beforeend";
      }
      lastElement.insertAdjacentHTML(
        position,
        `<span id="${translationTargetElementWrapperClass}-${id}" class="notranslate ${translationTargetElementWrapperClass}"><span class="${brandId}-loading notranslate"></span></span>`
      );
      currentParagraphIds.push(id);
      debounceTranslateCurrentQueue(ctx);
    });
  }
  async function translatePage() {
    if (pageStatus === "Translated") {
      restorePage();
    } else if (pageStatus === "Translating") {
      return;
    }
    const options = {
      url: globalThis.location.href,
      config: await getConfig2()
    };
    const ctx = await getContext(options);
    log_default.debug("ctx", ctx);
    pageStatus = "Translating";
    sendPageTranslatedStatus2(pageStatus);
    try {
      const containers = getContainers(document.body, ctx);
      log_default.debug("detect containers", containers);
      const { rule } = ctx;
      if (containers.length > 0) {
        await translateContainers(containers, ctx);
      } else {
        pageStatus = "Original";
        sendPageTranslatedStatus2(pageStatus);
      }
      translateTitle(ctx).catch((e19) => {
        log_default.error(`translateTitle error:`, e19.name, e19.message, e19.details || "");
      });
      enableMutatinObserver(rule, ctx);
    } catch (e19) {
      pageStatus = "Error";
      log_default.error(e19);
    }
  }
  async function translateTitle(ctx) {
    const pageTitle = document.title;
    if (originalPageTitle !== pageTitle) {
      originalPageTitle = pageTitle;
    }
    if (!pageTitle) {
      return;
    }
    const currentLang = getCurrentPageLanguage();
    try {
      const result = await translateSingleSentence({
        text: pageTitle,
        from: currentLang,
        to: ctx.targetLanguage
      }, ctx);
      if (result && result.text) {
        document.title = originalPageTitle + titleDelimiters + result.text;
      }
    } catch (e19) {
      throw e19;
    }
  }
  function setLoadingToParagraph(id) {
    const element = document.getElementById(
      translationTargetElementWrapperClass + "-" + id
    );
    if (element) {
      element.innerHTML = `<span class="${brandId}-loading notranslate"></span>`;
    }
  }
  async function translateContainers(containers, ctx) {
    const { rule } = ctx;
    const {
      excludeSelectors,
      additionalExcludeSelectors,
      extraInlineSelectors,
      additionalInlineSelectors,
      extraBlockSelectors,
      atomicBlockSelectors,
      globalStyles
    } = rule;
    const globalStyleSelectors = Object.keys(globalStyles);
    if (globalStyleSelectors.length > 0) {
      for (const selector of globalStyleSelectors) {
        const elements = getElementsBySelectors(document.body, [selector]);
        for (const element of elements) {
          if (!isMarked(element, sourceElementWithGlobalStyleMarkAttributeName)) {
            element.setAttribute(
              sourceElementWithGlobalStyleMarkAttributeName,
              "1"
            );
            const cssText = globalStyles[selector];
            element.style.cssText += cssText;
          }
        }
      }
    }
    const allExcludeSelectors = [
      ...excludeSelectors,
      ...additionalExcludeSelectors
    ];
    const allInlineSelectors = [
      ...extraInlineSelectors,
      ...additionalInlineSelectors
    ];
    const allAtomicBlockSelectors = [...atomicBlockSelectors];
    const allBlockSelectos = extraBlockSelectors;
    const excludeElements = getElementsBySelectors(
      document.body,
      allExcludeSelectors
    );
    let atomicBlockElements = [];
    if (allAtomicBlockSelectors.length > 0) {
      atomicBlockElements = getElementsBySelectors(
        document.body,
        allAtomicBlockSelectors
      ).filter((element) => !isMarked(element, sourceAtomicBlockElementMarkAttributeName));
    }
    atomicBlockElements.forEach((element) => {
      element.setAttribute(sourceAtomicBlockElementMarkAttributeName, "1");
    });
    const extraInlineElements = [];
    if (allInlineSelectors.length > 0) {
      for (const container of containers) {
        extraInlineElements.push(
          ...getElementsBySelectors(container, allInlineSelectors)
        );
      }
    }
    extraInlineElements.forEach((element) => {
      element.setAttribute(sourceInlineElementMarkAttributeName, "1");
    });
    const extraBlockElements = [];
    if (allBlockSelectos.length > 0) {
      for (const container of containers) {
        extraBlockElements.push(
          ...getElementsBySelectors(container, allBlockSelectos)
        );
      }
    }
    extraBlockElements.forEach((element) => {
      element.setAttribute(sourceBlockElementMarkAttributeName, "1");
    });
    normalizeContainer(
      containers,
      excludeElements,
      extraInlineElements,
      extraBlockElements,
      rule
    );
    const paragraphs = await getParagraphs(
      document.body,
      containers,
      excludeElements,
      extraInlineElements,
      extraBlockElements,
      ctx
    );
    if (paragraphs.length === 0) {
      pageStatus = "Original";
      sendPageTranslatedStatus2(pageStatus);
      return;
    }
    log_default.debug("detect paragraphs", paragraphs);
    for (const paragraph of paragraphs) {
      addParagraphToQueue(paragraph, ctx);
    }
  }
  async function translateParagraphById(id) {
    const paragraph = getParagraph(id);
    if (!paragraph) {
      throw new Error(`paragraph not found`);
    }
    setLoadingToParagraph(id);
    const options = {
      url: globalThis.location.href,
      config: await getConfig2()
    };
    const ctx = await getContext(options);
    const currentLang = getCurrentPageLanguage();
    const sentence = {
      id: paragraph.id,
      text: paragraph.text,
      from: currentLang,
      to: ctx.targetLanguage,
      url: ctx.encryptedUrl
    };
    try {
      const result = await translateSingleSentence(sentence, ctx);
      onParagraphTranslated(null, result, ctx);
    } catch (e19) {
      onParagraphTranslated(e19, sentence, ctx);
    }
  }
  function onParagraphTranslated(err, translatedSentence, ctx) {
    if (err) {
      const wrapperId = translatedSentence.id;
      const wrapper = document.getElementById(
        `${translationTargetElementWrapperClass}-${wrapperId}`
      );
      const errorHtml = `<span class="${brandId}-error notranslate"> <button class="${brandId}-clickable-button notranslate" title="${err.message}">\u2757</button> <button class="${brandId}-clickable-button notranslate" data-${brandId}-paragraph-id="${wrapperId}" data-${brandId}-action="retry">\u{1F504}</button></span>`;
      if (wrapper) {
        wrapper.innerHTML = errorHtml;
      }
    } else {
      const paragraph = getParagraph(translatedSentence.id);
      if (paragraph) {
        const targetItem = paragraphToHtml(
          paragraph,
          translatedSentence,
          ctx
        );
        const wrapperId = translatedSentence.id;
        const wrapper = document.getElementById(
          `${translationTargetElementWrapperClass}-${wrapperId}`
        );
        if (wrapper) {
          wrapper.innerHTML = targetItem.html;
        }
      }
    }
  }
  async function translateCurrentQueue(ctx) {
    if (currentParagraphIds.length === 0) {
      return Promise.resolve();
    }
    const ids = [...currentParagraphIds];
    currentParagraphIds = [];
    const currentLang = getCurrentPageLanguage();
    const payload = {
      sentences: ids.filter((id) => getParagraph(id)).map((id) => {
        const paragraph = getParagraph(id);
        return {
          id: paragraph.id,
          url: ctx.encryptedUrl,
          text: paragraph.text,
          from: currentLang,
          to: ctx.targetLanguage
        };
      })
    };
    const sentenceLength = payload.sentences.length;
    if (sentenceLength > 0) {
      pageStatus = "Translating";
      sendPageTranslatedStatus2(pageStatus);
      let index = -1;
      try {
        await new Promise((resolve, reject) => {
          translateMultipleSentences(
            payload,
            ctx,
            (err, translatedSentence) => {
              index++;
              onParagraphTranslated(err, translatedSentence, ctx);
              if (index === sentenceLength - 1) {
                resolve(null);
              }
            }
          ).catch((e19) => {
            payload.sentences.forEach((sentence) => {
              onParagraphTranslated(e19, sentence, ctx);
            });
            reject(e19);
          });
        });
        pageStatus = "Translated";
        sendPageTranslatedStatus2(pageStatus);
      } catch (e19) {
        pageStatus = "Error";
        sendPageTranslatedStatus2(pageStatus);
        log_default.error(
          `translateCurrentQueue error`,
          e19.name,
          e19.message,
          e19.details || ""
        );
      }
      return Promise.resolve();
    }
    pageStatus = "Translated";
    sendPageTranslatedStatus2(pageStatus);
    return Promise.resolve();
  }
  function enableMutatinObserver(rule, ctx) {
    disableMutatinObserver();
    allNewDynamicElements = [];
    currentNewDynamicElements = [];
    const inlineAndIgnoreAndTextTags = rule.inlineTags.concat(rule.excludeTags).concat("#text");
    mutationObserver = new MutationObserver(function(mutations) {
      mutations.forEach((mutation) => {
        const currentUrl = globalThis.location.href;
        if (currentUrl !== oldUrl) {
          oldUrl = currentUrl;
          clean();
          disableMutatinObserver();
          setTimeout(() => {
            initPage();
          }, rule.urlChangeDelay);
          const event = new Event("urlChange");
          globalThis.dispatchEvent(event);
          return;
        }
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            const element = addedNode;
            if (!inlineAndIgnoreAndTextTags.includes(
              element.nodeName
            )) {
              if (element.classList.contains("notranslate")) {
              } else {
                if (!isDuplicateElement(element, allNewDynamicElements)) {
                  currentNewDynamicElements.push(element);
                  allNewDynamicElements.push(element);
                  debounceTranslateNewDynamicNodes(ctx);
                }
              }
            }
          }
        });
      });
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
    const titleElement = document.querySelector("title");
    if (titleElement) {
      titleMutationObserver = new MutationObserver(function(mutations) {
        if (mutations.length > 0) {
          const title = mutations[0].target.text;
          if (!title.includes(titleDelimiters)) {
            translateTitle(ctx).catch((e19) => {
              log_default.error(
                `translateTitle error:`,
                e19.name,
                e19.message,
                e19.details || ""
              );
            });
          }
        }
      });
      titleMutationObserver.observe(titleElement, {
        subtree: true,
        characterData: true,
        childList: true
      });
    }
  }
  async function initPage() {
    clean();
    restorePage();
    const options = {
      url: globalThis.location.href,
      config: await getConfig2()
    };
    const ctx = await getContext(options);
    const { config } = ctx;
    log_default.debug(`context`, ctx);
    addToUnmountQueue(() => {
      cleanParagraphs();
      allIntersectionObserver.forEach((observer) => {
        observer.disconnect();
      });
      allIntersectionObserver = [];
    });
    let lang = "und";
    if (!isMonkey()) {
      lang = await detectTabLanguage();
    } else {
      lang = languageDetect(getMainText(document.body).slice(0, 1e3));
    }
    if (lang === "und") {
      lang = await detectPageLanguage();
    }
    setCurrentPageLanguage(lang);
    let isAutoTranslate = ctx.isTranslateUrl;
    if (!isAutoTranslate && !ctx.isTranslateExcludeUrl) {
      log_default.debug(`detect page language: ${lang}`);
      if (isMatchLanguage(lang, ctx.config.translationLanguagePattern)) {
        isAutoTranslate = true;
        log_default.debug(`match language pattern ${lang}, auto translate`);
      }
    }
    if (isAutoTranslate) {
      await translatePage();
    } else {
      log_default.debug(`do not auto translate`);
    }
  }
  function disableMutatinObserver() {
    if (mutationObserver) {
      mutationObserver.disconnect();
      mutationObserver.takeRecords();
    }
    if (titleMutationObserver) {
      titleMutationObserver.disconnect();
      titleMutationObserver.takeRecords();
    }
  }
  function getPageStatus() {
    return pageStatus;
  }

  // content_message_listeners.ts
  function setupMessageListeners() {
    toggleTranslateStream.subscribe(async () => {
      log_default.debug(`received toggleTranslate`);
      await toggleTranslatePage();
    });
    pageTranslateStream.subscribe(async () => {
      log_default.debug(`received pageTranslate`);
      await translatePage();
    });
    getPageTranslatedStatusStream.subscribe(([_3, __, cb]) => {
      log_default.debug(`received getPageTranslatedStatus`);
      const pageStatus2 = getPageStatus();
      cb({
        ok: true,
        data: pageStatus2
      });
    });
    setPageLanguageStream.subscribe(([lang, __, cb]) => {
      log_default.debug(`received setPageLanguage`, lang);
      setCurrentPageLanguage(lang);
      cb({
        ok: true,
        data: lang
      });
    });
    getPageLanguageStream.subscribe(([_3, __, cb]) => {
      log_default.debug(`received getPageLanguage`);
      cb({
        ok: true,
        data: getCurrentPageLanguage()
      });
    });
  }

  // content_dom_listeners.ts
  function setupDomListeners() {
    document.addEventListener("click", (e19) => {
      const target = e19.target;
      const action = target.getAttribute("data-immersive-translate-action");
      if (action) {
        if (action === "retry") {
          const paragraphId = target.getAttribute(
            "data-immersive-translate-paragraph-id"
          );
          if (paragraphId) {
            translateParagraphById(Number(paragraphId));
          }
        }
      }
    });
  }

  // utils/compare_version.ts
  function isAVersionGreaterOrEqualWithB(a21, b11) {
    const result = a21.localeCompare(b11, void 0, {
      numeric: true,
      sensitivity: "base"
    });
    return result >= 0;
  }

  // cron.ts
  async function runCron(interval) {
    try {
      const now = new Date();
      log_default.debug(
        `cron task start, next will run at`,
        new Date(now.getTime() + interval).toLocaleString()
      );
      await browserAPI.storage.local.set({
        [lastRunTimeStorageKey]: now.toISOString()
      });
      await syncRules();
    } catch (e19) {
      log_default.error("run cron task failed", e19);
    }
  }
  async function checkCronAndRunOnce() {
    const config = await getConfig2();
    const interval = config.interval;
    if (interval) {
      const lastRunTimeResult = await browserAPI.storage.local.get(
        lastRunTimeStorageKey
      );
      if (lastRunTimeResult && lastRunTimeResult[lastRunTimeStorageKey]) {
        const lastRunTime = lastRunTimeResult[lastRunTimeStorageKey];
        if (Date.now() - new Date(lastRunTime).getTime() < interval) {
          const nextRunAt = new Date(new Date(lastRunTime).getTime() + interval);
          log_default.debug(`cron task not run, next will run at ${nextRunAt}`);
          return;
        } else {
          runCron(interval);
        }
      } else {
        runCron(interval);
      }
    }
  }
  async function syncRules() {
    try {
      const localConfig = await getConfig2();
      const data = await request2({ url: buildinConfigSyncUrl });
      const localConfigUpdatedAtIsoString = localConfig.buildinConfigUpdatedAt;
      const localConfigUpdatedAt = new Date(localConfigUpdatedAtIsoString);
      const latestIsoTime = data.buildinConfigUpdatedAt;
      const latest = new Date(latestIsoTime);
      const remoteMinVersion = data.minVersion;
      const localVersion = browserAPI.runtime.getManifest().version;
      if (isAVersionGreaterOrEqualWithB(localVersion, remoteMinVersion)) {
        if (latest > localConfigUpdatedAt) {
          await browserAPI.storage.local.set({
            buildinConfig: data
          });
          log_default.info(
            `sync remote rules success, latest: ${new Date(latestIsoTime).toLocaleString()}`
          );
        } else {
          log_default.debug(`no need to sync rules, latest: ${localConfigUpdatedAt}`);
        }
      } else {
        log_default.info(
          `local version is too old, please update to ${remoteMinVersion} or later`
        );
      }
    } catch (e19) {
      log_default.error(`sync rules error: `, e19);
    }
  }

  // dom/main.ts
  async function main() {
    const isUserscript = isMonkey();
    if (!isUserscript) {
      setupMessageListeners();
    }
    setupDomListeners();
    if (!isUserscript) {
      sendReady();
    }
    const config = await getConfig2();
    const isDebug = config.debug;
    if (isDebug) {
      log_default.setLevel("debug");
    } else {
      log_default.setLevel("info");
    }
    checkCronAndRunOnce();
    await initPage();
  }

  // libs/preact-translation/utils.ts
  function getResourceUrl(root, lang) {
    return [root, !root || root.endsWith("/") ? "" : "/", lang, ".json"].join("");
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
    const [isReady, setReady] = P2(false);
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
        }).catch((error) => {
          setData({ ...cache });
          setReady(true);
        });
      }
    };
    j2(() => {
      loadData(options.fallbackLang || "en");
      loadData(lang);
    }, [lang]);
    const t18 = (key, params) => {
      if (!data.hasOwnProperty(lang)) {
        return key;
      }
      let value = getValue(data, lang, key);
      if (value === key && lang !== options.fallbackLang) {
        value = getValue(data, options.fallbackLang, key);
      }
      return format(value, params);
    };
    return { lang, setLang, t: t18, isReady };
  }

  // https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
  var a20 = 0;
  function p21(n22, s21, t18, f17, u16) {
    var r14, o24, _3 = {};
    for (o24 in s21)
      o24 == "ref" ? r14 = s21[o24] : _3[o24] = s21[o24];
    var e19 = { type: n22, props: _3, key: t18, ref: r14, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a20, __source: u16, __self: f17 };
    if (typeof n22 == "function" && (r14 = n22.defaultProps))
      for (o24 in r14)
        _3[o24] === void 0 && (_3[o24] = r14[o24]);
    return d.vnode && d.vnode(e19), e19;
  }

  // libs/preact-translation/translateProvider.tsx
  var TranslateContext = ce(null);
  var defaultOptions2 = {
    root: "assets",
    lang: "en",
    fallbackLang: "en"
  };
  var TranslateProvider = (props) => {
    const { t: t18, setLang, lang, isReady } = useTranslate(
      {
        root: props.root || defaultOptions2.root,
        lang: props.lang || defaultOptions2.lang,
        fallbackLang: props.fallbackLang || defaultOptions2.fallbackLang,
        getUrl: props.getUrl
      },
      props.translations
    );
    return /* @__PURE__ */ p21(TranslateContext.Provider, {
      value: {
        t: t18,
        setLang,
        lang,
        isReady
      },
      children: props.children
    });
  };

  // static/locales/zh-CN.json
  var zh_CN_default = {
    "general": "\u57FA\u672C\u8BBE\u7F6E",
    "reset": "\u91CD\u7F6E",
    "close": "\u5173\u95ED",
    "homepage": "\u4E3B\u9875",
    "options": "\u9009\u9879",
    "about": "\u5173\u4E8E",
    "service": "\u7FFB\u8BD1\u670D\u52A1",
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
    "translationServices": {
      "tencent": "\u817E\u8BAF\u7FFB\u8BD1\u541B",
      "google": "\u8C37\u6B4C\u7FFB\u8BD1",
      "mock": "\u6A21\u62DF\u7FFB\u8BD1",
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
      "und": "\u672A\u77E5\u8BED\u8A00",
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

  // utils/click-multiple-times.ts
  function onClickMultipleTimes(requiredClicks, timeLimit = 2e3) {
    return (cb) => {
      let timer;
      let clicked = 0;
      return (e19) => {
        if (++clicked == requiredClicks) {
          cb(e19);
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

  // utils/is_valid_html_url.ts
  function isValidHtmlUrl(url) {
    let urlObj;
    try {
      urlObj = new URL(url);
    } catch (_3) {
      return false;
    }
    if (urlObj.protocol !== "http:" && urlObj.protocol !== "https:" && urlObj.protocol !== "file:" && urlObj.protocol !== "data:") {
      return false;
    }
    return true;
  }

  // browser/version.ts
  function getVersion() {
    return browserAPI.runtime.getManifest().version;
  }

  // hooks/use_outside_click.tsx
  function useOutsideAlerter(ref, root, callback) {
    j2(() => {
      function handleClickOutside(event) {
        if (ref && ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }
      root.addEventListener("mousedown", handleClickOutside);
      return () => {
        root.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  // components/select_link.tsx
  function SelectLink(props) {
    const items = props.items;
    const root = props.root;
    const [open, setOpen] = P2(false);
    const selectRef = w2(null);
    const aRef = w2(null);
    useOutsideAlerter(selectRef, root || document, () => {
      setOpen(false);
      if (aRef.current) {
        aRef.current.blur();
      }
    });
    let checkedItem = items.find((item) => item.selected);
    if (!checkedItem) {
      checkedItem = items[0];
    }
    const handleToggle = (e19) => {
      e19.preventDefault();
      const targetState = !open;
      if (!targetState && aRef.current) {
        aRef.current.blur();
      }
      setOpen(targetState);
    };
    return /* @__PURE__ */ p21("nav", {
      class: "inline-block text-sm",
      ref: selectRef,
      children: /* @__PURE__ */ p21("li", {
        class: `py-0 select-link ${open ? "select-link-active" : ""}`,
        role: "list",
        children: [
          /* @__PURE__ */ p21("a", {
            ref: aRef,
            href: "#",
            onClick: handleToggle,
            children: checkedItem.label
          }),
          /* @__PURE__ */ p21("ul", {
            class: "select-link-ul max-h-28 overflow-y-scroll ",
            role: "listbox",
            children: items.filter((item) => {
              return !item.selected;
            }).map((item, index) => {
              return /* @__PURE__ */ p21("li", {
                children: /* @__PURE__ */ p21("a", {
                  class: "text-sm",
                  href: "#",
                  onClick: (e19) => {
                    e19.preventDefault();
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

  // hooks/use_i18n.ts
  function useI18n() {
    return M2(TranslateContext);
  }

  // components/popup.tsx
  var version = getVersion();
  function Popup(props) {
    const {
      onUserConfigChange,
      pageStatus: pageStatus2,
      config,
      onSetPageLanguage,
      root,
      onToggleTranslate,
      ctx,
      currentUrl,
      currentLang,
      onClose,
      onTranslatePage
    } = props;
    const setSettings = onUserConfigChange;
    const [message, setMessage] = P2("");
    const { t: t18 } = useI18n();
    let isAlwaysTranslateUrl = null;
    let isNeverTranslateUrl = null;
    let isAlwaysTranslateLang = null;
    let isNeverTranslateLang = null;
    let curentTranslationService = null;
    let currentUrlObj = null;
    if (config) {
      const { translationService, translationUrlPattern } = config;
      if (TranslationServices[translationService]) {
        curentTranslationService = TranslationServices[translationService];
      }
      if (currentUrl && isValidHtmlUrl(currentUrl)) {
        currentUrlObj = new URL(currentUrl);
        const { matches, excludeMatches } = translationUrlPattern;
        if (isMatchUrl(currentUrl, matches)) {
          isAlwaysTranslateUrl = true;
        } else {
          isAlwaysTranslateUrl = false;
        }
        if (isMatchUrl(currentUrl, excludeMatches)) {
          isNeverTranslateUrl = true;
        } else {
          isNeverTranslateUrl = false;
        }
      }
    }
    if (config && currentLang !== "und") {
      const { translationLanguagePattern } = config;
      const { matches, excludeMatches } = translationLanguagePattern;
      if (matches.includes(currentLang)) {
        isAlwaysTranslateLang = true;
      } else {
        isAlwaysTranslateLang = false;
      }
      if (excludeMatches.includes(currentLang)) {
        isNeverTranslateLang = true;
      } else {
        isNeverTranslateLang = false;
      }
    }
    const handleOpenOptions = (e19) => {
      e19.preventDefault();
      browserAPI.runtime.openOptionsPage();
      onClose();
    };
    const handleOpenHomepage = (e19) => {
      e19.preventDefault();
      globalThis.open(homepage, "_blank");
      onClose();
    };
    const handleToggleAlpha = (_e3) => {
      setSettings((settings) => {
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        if (!settings.alpha) {
          setMessage("Success enable alpha!");
        } else {
          setMessage("Success disable alpha!");
        }
        return {
          ...settings,
          alpha: !settings.alpha
        };
      });
    };
    const handleTranslationUrlPatternSelected = (item) => {
      const value = item.value;
      if (!value) {
        setSettings((state) => {
          const translationUrlPattern = { ...state.translationUrlPattern };
          const newState = {
            ...state,
            translationUrlPattern: {
              ...state.translationUrlPattern,
              matches: removeFromArray(
                currentUrlObj.hostname,
                translationUrlPattern.matches
              ),
              excludeMatches: removeFromArray(
                currentUrlObj.hostname,
                translationUrlPattern.excludeMatches
              )
            }
          };
          return newState;
        });
        return;
      }
      const name = value;
      const reverseName = name === "matches" ? "excludeMatches" : "matches";
      if (currentUrlObj) {
        setSettings((state) => {
          const translationUrlPattern = { ...state.translationUrlPattern };
          translationUrlPattern[name] = addToUniqueArray(
            currentUrlObj.hostname,
            translationUrlPattern[name]
          );
          translationUrlPattern[reverseName] = removeFromArray(
            currentUrlObj.hostname,
            translationUrlPattern[reverseName]
          );
          const newState = {
            ...state,
            translationUrlPattern: {
              ...state.translationUrlPattern,
              ...translationUrlPattern
            }
          };
          return newState;
        });
      }
    };
    const handleTranslationLanguagePatternSelected = (item) => {
      const value = item.value;
      if (!value) {
        setSettings((state) => {
          const translationLanguagePattern = {
            ...state.translationLanguagePattern
          };
          const newState = {
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
          return newState;
        });
        return;
      }
      const name = value;
      const reverseName = name === "matches" ? "excludeMatches" : "matches";
      if (currentLang) {
        setSettings((state) => {
          const translationLanguagePattern = {
            ...state.translationLanguagePattern
          };
          translationLanguagePattern[name] = addToUniqueArray(
            currentLang,
            translationLanguagePattern[name]
          );
          translationLanguagePattern[reverseName] = removeFromArray(
            currentLang,
            translationLanguagePattern[reverseName]
          );
          const newState = {
            ...state,
            translationLanguagePattern: {
              ...state.translationLanguagePattern,
              ...translationLanguagePattern
            }
          };
          return newState;
        });
      }
    };
    let buttonLabel = t18("translate");
    if (pageStatus2 === "Translated") {
      buttonLabel = t18("show-original");
    } else if (pageStatus2 === "Original") {
      buttonLabel = t18("translate");
    } else {
      buttonLabel = t18(pageStatus2);
    }
    let translationServiceItems = [];
    if (ctx) {
      translationServiceItems = getTranslationServices(ctx).filter(
        (item) => item.ok
      );
    }
    const handleClosePopup = () => {
      onClose();
    };
    return /* @__PURE__ */ p21("div", {
      className: "p-3",
      children: [
        /* @__PURE__ */ p21("div", {
          class: "text-sm",
          children: [
            /* @__PURE__ */ p21("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p21("label", {
                  class: "inline-block",
                  children: "\u6E90\u8BED\u8A00\uFF1A"
                }),
                /* @__PURE__ */ p21(SelectLink, {
                  root,
                  items: languages.map((code2) => {
                    return {
                      label: t18(`languages.${code2}`),
                      value: code2,
                      selected: code2 === currentLang,
                      onSelected: (item) => {
                        onSetPageLanguage(item.value);
                      }
                    };
                  })
                })
              ]
            }),
            config && config.targetLanguage && /* @__PURE__ */ p21("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p21("label", {
                  class: "inline-block",
                  children: "\u76EE\u6807\u8BED\u8A00\uFF1A"
                }),
                /* @__PURE__ */ p21(SelectLink, {
                  root,
                  items: languages.map((code2) => {
                    return {
                      label: t18(`languages.${code2}`),
                      value: code2,
                      selected: code2 === config.targetLanguage,
                      onSelected: (item) => {
                        setSettings((state) => {
                          return {
                            ...state,
                            targetLanguage: item.value
                          };
                        });
                      }
                    };
                  })
                })
              ]
            }),
            curentTranslationService && translationServiceItems.length > 0 && /* @__PURE__ */ p21("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p21("label", {
                  class: "inline-block",
                  children: "\u7FFB\u8BD1\u670D\u52A1\uFF1A"
                }),
                /* @__PURE__ */ p21(SelectLink, {
                  root,
                  items: translationServiceItems.map(
                    (translationServiceItem) => {
                      return {
                        label: `${t18("translationServices." + translationServiceItem.id)}${translationServiceItem.ok ? "" : "(\u53BB\u8BBE\u7F6E)"}`,
                        value: translationServiceItem.id,
                        selected: translationServiceItem.selected,
                        onSelected: (option) => {
                          const selectedItem = translationServiceItems.find(
                            (item) => item.id === option.value
                          );
                          if (selectedItem.ok) {
                            setSettings((state) => {
                              return {
                                ...state,
                                translationService: selectedItem.id
                              };
                            });
                            setTimeout(() => {
                              onTranslatePage();
                            }, 1);
                          }
                        }
                      };
                    }
                  )
                })
              ]
            }),
            isAlwaysTranslateUrl !== null && isNeverTranslateUrl !== null && /* @__PURE__ */ p21("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p21("label", {
                  class: "inline-block",
                  children: "\u5BF9\u4E8E\u8BE5\u7F51\u7AD9\uFF1A"
                }),
                /* @__PURE__ */ p21(SelectLink, {
                  root,
                  items: [{
                    label: "\u9ED8\u8BA4",
                    value: null,
                    selected: isAlwaysTranslateUrl === false && isNeverTranslateUrl === false,
                    onSelected: handleTranslationUrlPatternSelected
                  }, {
                    label: "\u603B\u662F\u7FFB\u8BD1",
                    value: "matches",
                    selected: isAlwaysTranslateUrl,
                    onSelected: handleTranslationUrlPatternSelected
                  }, {
                    label: "\u6C38\u4E0D\u7FFB\u8BD1",
                    value: "excludeMatches",
                    selected: isNeverTranslateUrl,
                    onSelected: handleTranslationUrlPatternSelected
                  }]
                })
              ]
            }),
            isAlwaysTranslateLang !== null && isNeverTranslateLang !== null && currentLang !== "und" && currentLang !== "auto" && /* @__PURE__ */ p21("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p21("label", {
                  class: "inline-block",
                  children: [
                    "\u5BF9\u4E8E\u300C",
                    t18(`languages.${currentLang}`),
                    "\u300D\uFF1A"
                  ]
                }),
                /* @__PURE__ */ p21(SelectLink, {
                  root,
                  items: [{
                    label: "\u9ED8\u8BA4",
                    value: null,
                    selected: isAlwaysTranslateLang === false && isNeverTranslateLang === false,
                    onSelected: handleTranslationLanguagePatternSelected
                  }, {
                    label: "\u603B\u662F\u7FFB\u8BD1",
                    value: "matches",
                    selected: isAlwaysTranslateLang,
                    onSelected: handleTranslationLanguagePatternSelected
                  }, {
                    label: "\u6C38\u4E0D\u7FFB\u8BD1",
                    value: "excludeMatches",
                    selected: isNeverTranslateLang,
                    onSelected: handleTranslationLanguagePatternSelected
                  }]
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ p21("button", {
          class: "py-2 mt-2 mb-2",
          onClick: onToggleTranslate,
          children: buttonLabel
        }),
        /* @__PURE__ */ p21("footer", {
          className: "text-sm flex justify-between",
          children: [
            /* @__PURE__ */ p21("span", {
              onClick: onClickMultipleTimes(7)(handleToggleAlpha),
              children: [
                "V",
                version
              ]
            }),
            isMonkey() && /* @__PURE__ */ p21("a", {
              href: "#",
              class: "secondary",
              onClick: handleClosePopup,
              children: t18("close")
            }),
            isMonkey() ? /* @__PURE__ */ p21("a", {
              href: "#",
              class: "secondary",
              onClick: handleOpenHomepage,
              children: t18("homepage")
            }) : /* @__PURE__ */ p21("a", {
              href: "#",
              class: "secondary",
              onClick: handleOpenOptions,
              children: t18("options")
            })
          ]
        }),
        /* @__PURE__ */ p21("div", {
          class: "text-sm",
          children: message
        })
      ]
    });
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

  // libs/use-chrome-storage/useChromeStorage.ts
  function useChromeStorage(key, initialValue, storageArea) {
    const [INITIAL_VALUE2] = P2(() => {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    });
    const [STORAGE_AREA] = P2(storageArea);
    const [state, setState] = P2(INITIAL_VALUE2);
    const [isPersistent, setIsPersistent] = P2(true);
    const [error, setError] = P2("");
    j2(() => {
      storage.get(key, INITIAL_VALUE2, STORAGE_AREA).then((res) => {
        if (res[key]) {
          setState(res[key]);
        }
        setIsPersistent(true);
        setError("");
      }).catch((error2) => {
        setIsPersistent(false);
        setError(error2);
      });
    }, [key, INITIAL_VALUE2, STORAGE_AREA]);
    const updateValue = L2(
      (newValue) => {
        const toStore = typeof newValue === "function" ? newValue(state) : newValue;
        log_default.debug(`new settings`, toStore);
        storage.set(key, toStore, STORAGE_AREA).then(() => {
          setState(toStore);
          setIsPersistent(true);
          setError("");
        }).catch((error2) => {
          setState(toStore);
          setIsPersistent(false);
          setError(error2);
        });
      },
      [STORAGE_AREA, key, state]
    );
    return [state, updateValue, isPersistent, error];
  }

  // libs/use-chrome-storage/createChromeStorageStateHook.ts
  function createChromeStorageStateHook(key, initialValue, storageArea) {
    const consumers = [];
    return function useCreateChromeStorageHook() {
      const [value, setValue, isPersistent, error] = useChromeStorage(
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
      return [value, setValueAll, isPersistent, error];
    };
  }

  // libs/use-chrome-storage/mod.ts
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

  // userscript/popup_app.tsx
  function PopupApp(props) {
    const { root, onClose } = props;
    const [pageStatus2, setPageStatus] = P2("Original");
    const [settings, setSettings, _isPersistent, _error] = useUserConfig();
    const [config, setConfig] = P2(null);
    const [currentUrl, setCurrentUrl] = P2(
      globalThis.location.href
    );
    const [currentLang, setCurrentLang] = P2("und");
    const [ctx, setContext] = P2(null);
    const onToggleTranslate = (event) => {
      setPageStatus(event.detail);
    };
    const onSetPageLanguage = (lang) => {
      setCurrentLang(lang);
    };
    const onUrlChange = () => {
      setCurrentUrl(globalThis.location.href);
    };
    j2(() => {
      globalThis.addEventListener(
        "pageTranslatedStatus",
        onToggleTranslate,
        false
      );
      getConfig().then((result) => {
        setConfig(result);
        const currentLanguage = getCurrentPageLanguage();
        setCurrentLang(currentLanguage);
        const currentPageStatus = getPageStatus();
        setPageStatus(currentPageStatus);
        runCron(result.interval);
      });
      globalThis.addEventListener("urlChange", onUrlChange);
      return () => {
        document.removeEventListener("pageTranslatedStatus", onToggleTranslate);
        globalThis.removeEventListener("urlChange", onUrlChange);
      };
    }, []);
    j2(() => {
      getConfig().then((config2) => {
        setConfig(config2);
      });
    }, [settings]);
    j2(() => {
      if (currentUrl && config) {
        getContext({
          url: currentUrl,
          config
        }).then((ctx2) => {
          setContext(ctx2);
        });
      }
    }, [currentUrl, config]);
    const handleTranslatePage = () => {
      translatePage();
      onClose();
    };
    const handleToggleTranslatePage = () => {
      toggleTranslatePage();
      onClose();
    };
    const handleClose = () => {
      onClose();
    };
    if (!config || !ctx) {
      return null;
    }
    return /* @__PURE__ */ p21(Popup, {
      root,
      onClose: handleClose,
      onToggleTranslate: handleToggleTranslatePage,
      onTranslatePage: handleTranslatePage,
      onSetPageLanguage,
      onUserConfigChange: setSettings,
      config,
      pageStatus: pageStatus2,
      ctx,
      currentUrl,
      currentLang
    });
  }

  // userscript/popup_entry.tsx
  var translations = {
    "zh-CN": zh_CN_default
  };
  function addCSSLegacy(root, csses) {
    for (const css of csses) {
      root.appendChild(document.createElement("style")).innerHTML = css;
    }
  }
  function initPopup() {
    const env2 = getEnv();
    const popup = document.createElement("div");
    popup.id = "immersive-translate-popup";
    popup.setAttribute("style", "all: initial");
    document.body.appendChild(popup);
    const shadow = popup.attachShadow({ mode: "open" });
    const csses = [
      env2.TRANSLATE_PICO_CSS,
      env2.TRANSLATE_COMMON_CSS,
      env2.TRANSLATE_POPUP_CSS
    ];
    addCSSLegacy(shadow, csses);
    const mountRoot = document.createElement("div");
    mountRoot.innerHTML = env2.TRANSLATE_POPUP_HTML;
    shadow.appendChild(mountRoot);
    const script = document.createElement("script");
    script.textContent = env2.TRANSLATE_POPUP_JS;
    shadow.appendChild(script);
    const btn = shadow.querySelector(
      "#immersive-translate-popup-btn"
    );
    btn.addEventListener("click", () => {
      renderPopup(shadow);
    });
    const mountPoint = shadow.querySelector("#mount");
    function showButton() {
      re(null, mountPoint);
      mountPoint.style.display = "none";
      btn.style.display = "block";
    }
    document.addEventListener("click", (e19) => {
      if (e19.target.id !== "immersive-translate-popup") {
        showButton();
      }
    });
  }
  function renderPopup(shadow) {
    const mountPoint = shadow.querySelector("#mount");
    const btn = shadow.querySelector(
      "#immersive-translate-popup-btn"
    );
    function showButton() {
      re(null, mountPoint);
      mountPoint.style.display = "none";
      btn.style.display = "block";
    }
    const handleOnClose = () => {
      showButton();
    };
    (async () => {
      const config = await getConfig();
      if (config.debug) {
        log_default.setLevel("debug");
      }
      re(
        /* @__PURE__ */ p21(TranslateProvider, {
          lang: config.interfaceLanguage,
          fallbackLang: "zh-CN",
          translations,
          children: /* @__PURE__ */ p21(PopupApp, {
            onClose: handleOnClose,
            root: mountPoint
          })
        }),
        mountPoint
      );
    })().then(() => {
      btn.style.display = "none";
      mountPoint.style.display = "block";
    });
  }

  // immersive-translate.lib.tsx
  function toggleTranslatePage2() {
    toggleTranslatePage().catch((e19) => {
      console.error(`Translate page error:`, e19);
    });
  }
  if (GM && GM.registerMenuCommand) {
    GM.registerMenuCommand("Toggle Translate", toggleTranslatePage2, "t");
  }
  var addCSS = (css) => document.head.appendChild(document.createElement("style")).innerHTML = css;
  async function main2() {
    const env2 = getEnv();
    const injectedCss = env2.TRANSLATE_INJECTED_CSS;
    if (injectedCss) {
      addCSS(injectedCss);
    }
    initPopup();
    await main();
  }
  globalThis.IMMERSIVE_TRANSLATE_ENTRY = main2;
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
