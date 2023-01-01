(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // <define:process.env>
  var define_process_env_default = { BUILD_TIME: "2023-01-01T14:00:44.900Z", VERSION: "0.0.24", PROD: "1", IMMERSIVE_TRANSLATE_INJECTED_CSS: ".immersive-translate-target-wrapper {\n  /* position: relative; */\n}\n.immersive-translate-target-translation-block-wrapper {\n  /* position: relative; */\n  /* top: 16px; */\n  white-space: pre-wrap !important;\n}\n\n.immersive-translate-target-translation-inline-wrapper {\n  white-space: pre-wrap !important;\n}\n.immersive-translate-target-translation-theme-underline {\n  border-bottom: 1px solid #72ece9 !important;\n}\n\n.immersive-translate-text {\n  font-size: 15px !important;\n}\n\n.immersive-translate-error {\n  color: red;\n}\n.immersive-translate-clickable-button {\n  align-items: normal;\n  background-color: rgba(0, 0, 0, 0);\n  border-color: rgb(0, 0, 238);\n  border-style: none;\n  box-sizing: content-box;\n  color: rgb(0, 0, 238);\n  cursor: pointer;\n  display: inline;\n  font: inherit;\n  height: auto;\n  padding: 0;\n  perspective-origin: 0 0;\n  text-align: start;\n  transform-origin: 0 0;\n  width: auto;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */\n  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */\n}\n.immersive-translate-loading {\n  margin-left: 6px;\n  top: 3px;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  border: 2px rgba(0, 0, 0, 0.25) solid;\n  border-top: 2px rgba(0, 0, 0, 1) solid;\n  border-radius: 50%;\n  -webkit-animation: spCircRot 0.6s infinite linear;\n  animation: immersive-translate-loading-animation 0.6s infinite linear;\n  position: relative;\n}\n.immersive-translate-tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */\n}\n.immersive-translate-tooltip:before {\n  content: attr(data-immersive-translate-tooltip-text); /* here's the magic */\n  position: absolute;\n  z-index: 100000000000;\n\n  /* vertically center */\n  top: 50%;\n  transform: translateY(-50%);\n\n  /* move to right */\n  left: 100%;\n  margin-left: 15px; /* and add a small left margin */\n\n  /* basic styles */\n  width: max-content;\n  max-width: 250px;\n  word-wrap: break-word;\n  white-space: pre-line;\n  padding: 10px;\n  border-radius: 10px;\n  background: #000;\n  color: #fff;\n  text-align: center;\n\n  display: none; /* hide by default */\n}\n.immersive-translate-tooltip:hover:before {\n  display: block;\n}\n\n@-webkit-keyframes immersive-translate-loading-animation {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@keyframes immersive-translate-loading-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n", IMMERSIVE_TRANSLATE_PICO_CSS: `@charset "UTF-8";
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

  // https://esm.sh/v102/n-gram@2.0.2/deno/n-gram.js
  var c = o(2);
  var f = o(3);
  function o(r14) {
    if (typeof r14 != "number" || Number.isNaN(r14) || r14 < 1 || r14 === Number.POSITIVE_INFINITY)
      throw new Error("`" + r14 + "` is not a valid argument for `n-gram`");
    return s21;
    function s21(t17) {
      let e18 = [];
      if (t17 == null)
        return e18;
      let i21 = typeof t17.slice == "function" ? t17 : String(t17), n21 = i21.length - r14 + 1;
      if (n21 < 1)
        return e18;
      for (; n21--; )
        e18[n21] = i21.slice(n21, n21 + r14);
      return e18;
    }
  }

  // https://esm.sh/v102/collapse-white-space@2.1.0/deno/collapse-white-space.js
  var l = /\s+/g;
  var a = /[\t\n\v\f\r ]+/g;
  function i(r14, e18) {
    e18 ? typeof e18 == "string" && (e18 = { style: e18 }) : e18 = {};
    let n21 = e18.preserveLineEndings ? f2 : u;
    return String(r14).replace(e18.style === "html" ? a : l, e18.trim ? g(n21) : n21);
  }
  function f2(r14) {
    let e18 = /\r?\n|\r/.exec(r14);
    return e18 ? e18[0] : " ";
  }
  function u() {
    return " ";
  }
  function g(r14) {
    return e18;
    function e18(n21, t17, c27) {
      return t17 === 0 || t17 + n21.length === c27.length ? "" : r14(n21);
    }
  }

  // https://esm.sh/v102/trigram-utils@2.0.1/deno/trigram-utils.js
  var o2 = {}.hasOwnProperty;
  function s(t17) {
    return t17 == null ? "" : i(String(t17).replace(/[\u0021-\u0040]+/g, " ")).trim().toLowerCase();
  }
  function l2(t17) {
    return f(" " + s(t17) + " ");
  }
  function u2(t17) {
    let r14 = l2(t17), n21 = {}, e18 = -1;
    for (; ++e18 < r14.length; )
      o2.call(n21, r14[e18]) ? n21[r14[e18]]++ : n21[r14[e18]] = 1;
    return n21;
  }
  function m(t17) {
    let r14 = u2(t17), n21 = [], e18;
    for (e18 in r14)
      o2.call(r14, e18) && n21.push([e18, r14[e18]]);
    return n21.sort(a2), n21;
  }
  function a2(t17, r14) {
    return t17[1] - r14[1];
  }

  // https://esm.sh/v102/franc-min@6.1.0/deno/franc-min.js
  var k = { cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g, Latin: /[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g, Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g, Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g, ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g, Devanagari: /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g, jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g, jav: /[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g, kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g, tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g, tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g, guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g, kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g, mal: /[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g, mya: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g, pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g, amh: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g, tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g, sin: /[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g, ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g };
  var s2 = { Latin: { spa: " de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|a p|cho|ech|en |ent|a l|aci|e d|el |ona|na | co|as |al |da | to|ene|e l| en| el| pe|nte|tod|ho | su|per|ad | ti|a t|ers|tie| se|rso| pr|son|e s|te |oda|cia|n d|o d|dad|ida| in|ne | es|ion|cio|s d|con|est|a e| po|men| li|res|nci|su |to |tra| re|n e| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |nal|ue | qu|e e|a d|ar |nes|ica|a c|sta|ser|or |ter|se |por|cci|io |des|ado|les|one|a a|del|l d|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|e a|imi|o s|e c|ert|o e|dos|las|o p|ant|dic|nto| al|ara|ibe|enc|cas| as|e p|ten|ali|o t|soc|y l|n c|s l|l t|pre|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar| ma|l e| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|ta |y d|nid|e i|n l|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|odo|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern", eng: "the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u", por: "de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun", ind: "an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit", fra: " de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a", deu: "en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e", jav: "ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp", vie: "ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ", ita: " di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v", tur: " ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ", pol: " pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna", swh: "a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i", sun: "an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n", ron: " de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r", hau: "da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i", fuv: "de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga", bos: " pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr", hrv: " pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn", nld: "en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar", srp: " pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu", ckb: " he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew", yor: " n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j", uzn: "ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin", zlm: "an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar", ibo: "a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat", ceb: "sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya", tgl: "ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa", hun: "en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle", azj: " v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131", ces: " pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9", run: "ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c", plt: "ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav", qug: "ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat", mad: "an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil", nya: "ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ", zyb: "bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m", kin: "ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ", zul: "nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez", swe: "ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra", lin: "na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son", som: " ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood", hms: "ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun", hnj: "it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro", ilo: "ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw " }, Cyrillic: { rus: " \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440", ukr: "\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A", bos: " \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u0452\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A", srp: " \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432", uzn: "\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431", azj: " \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B", koi: "\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441", bel: " \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D", bul: " \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u0430 \u043D|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0430\u043D\u0438|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435| \u0431\u044A|\u043F\u0440\u0438|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441|\u0430\u0446\u0438| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0440\u0430\u043D|\u0430\u043B\u043D| \u0434\u0435|\u0431\u0440\u0430|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0430\u0432\u043D|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0442\u044A\u043F|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u0432\u043D\u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u0438\u0430\u043B|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438|\u0430\u043D ", kaz: "\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493" }, Arabic: { arb: " \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631", urd: "\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC", pes: " \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628", zlm: " \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627", skr: "\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1", pbu: " \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646" }, Devanagari: { hin: "\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928", mar: "\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903", mai: "\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930", bho: " \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924", npi: "\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E", mag: " \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E" } };
  var y = 2048;
  var p = 10;
  var m2 = 300;
  var r = {}.hasOwnProperty;
  var t;
  var l3 = {};
  for (t in s2)
    if (r.call(s2, t)) {
      let n21 = s2[t], a21;
      l3[t] = {};
      for (a21 in n21)
        if (r.call(n21, a21)) {
          let e18 = n21[a21].split("|"), o23 = {}, i21 = e18.length;
          for (; i21--; )
            o23[e18[i21]] = i21;
          l3[t][a21] = o23;
        }
    }
  function c2(n21, a21 = {}) {
    let e18 = [...a21.whitelist || [], ...a21.only || []], o23 = [...a21.blacklist || [], ...a21.ignore || []], i21 = a21.minLength !== null && a21.minLength !== void 0 ? a21.minLength : p;
    if (!n21 || n21.length < i21)
      return d();
    n21 = n21.slice(0, y);
    let u16 = z(n21, k);
    return !u16[0] || !(u16[0] in l3) ? !u16[0] || u16[1] === 0 || !g2(u16[0], e18, o23) ? d() : h(u16[0]) : w(n21, j(m(n21), l3[u16[0]], e18, o23));
  }
  function w(n21, a21) {
    let e18 = a21[0][1], o23 = n21.length * m2 - e18, i21 = -1;
    for (; ++i21 < a21.length; )
      a21[i21][1] = 1 - (a21[i21][1] - e18) / o23 || 0;
    return a21;
  }
  function z(n21, a21) {
    let e18 = -1, o23, i21;
    for (i21 in a21)
      if (r.call(a21, i21)) {
        let u16 = D(n21, a21[i21]);
        u16 > e18 && (e18 = u16, o23 = i21);
      }
    return [o23, e18];
  }
  function D(n21, a21) {
    let e18 = n21.match(a21);
    return (e18 ? e18.length : 0) / n21.length || 0;
  }
  function j(n21, a21, e18, o23) {
    a21 = f3(a21, e18, o23);
    let i21 = [], u16;
    if (a21)
      for (u16 in a21)
        r.call(a21, u16) && i21.push([u16, v(n21, a21[u16])]);
    return i21.length === 0 ? d() : i21.sort(F);
  }
  function v(n21, a21) {
    let e18 = 0, o23 = -1;
    for (; ++o23 < n21.length; ) {
      let i21 = n21[o23], u16 = m2;
      i21[0] in a21 && (u16 = i21[1] - a21[i21[0]] - 1, u16 < 0 && (u16 = -u16)), e18 += u16;
    }
    return e18;
  }
  function f3(n21, a21, e18) {
    if (a21.length === 0 && e18.length === 0)
      return n21;
    let o23 = {}, i21;
    for (i21 in n21)
      g2(i21, a21, e18) && (o23[i21] = n21[i21]);
    return o23;
  }
  function g2(n21, a21, e18) {
    return a21.length === 0 && e18.length === 0 ? true : (a21.length === 0 || a21.includes(n21)) && !e18.includes(n21);
  }
  function d() {
    return h("und");
  }
  function h(n21) {
    return [[n21, 1]];
  }
  function F(n21, a21) {
    return n21[1] - a21[1];
  }

  // utils/detect_chinese.ts
  var chineseRegex = /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g;
  var japaneseRegex = /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g;
  var koreanRegex = /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g;
  var punctuationRegex = /(\s+)|([\p{P}\p{S}])/gu;
  var regexGroups = [
    ["zh-CN", chineseRegex],
    [
      "ja",
      japaneseRegex
    ],
    ["ko", koreanRegex]
  ];
  function detectChinese(text) {
    if (!text) {
      return "auto";
    }
    let maxCountLang = "auto";
    let currentMaxCount = 0;
    let punctuationMatchesLength = 0;
    const punctuationMatches = text.match(punctuationRegex);
    if (punctuationMatches) {
      punctuationMatchesLength = punctuationMatches.reduce((sum, item) => {
        return sum + item.length;
      }, 0);
    }
    const allLettersLength = text.length - punctuationMatchesLength;
    for (const group of regexGroups) {
      const regex = group[1];
      const lang = group[0];
      const matches = text.match(regex);
      const langLength = matches ? matches.length : 0;
      if (langLength > currentMaxCount) {
        currentMaxCount = langLength;
        maxCountLang = lang;
      }
    }
    if (currentMaxCount * 2.5 / allLettersLength > 0.5) {
      return maxCountLang;
    }
    return "auto";
  }

  // utils/language_detect.ts
  var langMap = /* @__PURE__ */ new Map([
    ["afr", "af"],
    ["amh", "am"],
    ["arb", "ar"],
    ["azj", "az"],
    ["bel", "be"],
    ["bul", "bg"],
    ["ben", "bn"],
    ["bos", "bs"],
    ["cat", "ca"],
    ["ceb", "ceb"],
    ["ces", "cs"],
    ["dan", "da"],
    ["deu", "de"],
    ["ell", "el"],
    ["eng", "en"],
    ["epo", "eo"],
    ["spa", "es"],
    ["est", "et"],
    ["fas", "fa"],
    ["fin", "fi"],
    ["fra", "fr"],
    ["gax", "ga"],
    ["glg", "gl"],
    ["guj", "gu"],
    ["hau", "ha"],
    ["heb", "he"],
    ["hin", "hi"],
    ["hrv", "hr"],
    ["hun", "hu"],
    ["hye", "hy"],
    ["ind", "id"],
    ["ibo", "ig"],
    ["ita", "it"],
    ["jpn", "ja"],
    ["jav", "jw"],
    ["kat", "ka"],
    ["kaz", "kk"],
    ["khm", "km"],
    ["kan", "kn"],
    ["kor", "ko"],
    ["ckb", "ku"],
    ["lao", "lo"],
    ["lit", "lt"],
    ["lav", "lv"],
    ["min", "mi"],
    ["mkd", "mk"],
    ["mal", "ml"],
    ["mar", "mr"],
    ["mya", "my"],
    ["nep", "ne"],
    ["nld", "nl"],
    ["nob", "no"],
    ["nya", "ny"],
    ["pan", "pa"],
    ["pol", "pl"],
    ["pbu", "ps"],
    ["por", "pt"],
    ["ron", "ro"],
    ["rus", "ru"],
    ["sin", "si"],
    ["slk", "sk"],
    ["slv", "sl"],
    ["sna", "sn"],
    ["som", "so"],
    ["als", "sq"],
    ["srp", "sr"],
    ["sun", "su"],
    ["swe", "sv"],
    ["swh", "sw"],
    ["tam", "ta"],
    ["tel", "te"],
    ["tgk", "tg"],
    ["tha", "th"],
    ["toi", "to"],
    ["tur", "tr"],
    ["ukr", "uk"],
    ["urd", "ur"],
    ["uzn", "uz"],
    ["vie", "vi"],
    ["xho", "xh"],
    ["ydd", "yi"],
    ["yor", "yo"],
    ["cmn", "zh-CN"],
    ["zul", "zu"]
  ]);
  var options = { minLength: 1, whitelist: [...langMap.keys()] };
  function languageDetect(text) {
    if (!text) {
      return "auto";
    }
    const chineseLike = detectChinese(text);
    if (chineseLike !== "auto") {
      return chineseLike;
    }
    const result = c2(text, options);
    if (result && result.length > 0) {
      if (result.length > 1 && result[0][0] !== "eng" && result[1][0] === "eng" && result[1][1] > 0.6) {
        return "en";
      }
      const [lang] = result[0];
      const language = langMap.get(lang);
      if (language) {
        return language;
      }
    }
    return "auto";
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
    return env.IMMERSIVE_TRANSLATE_USERSCRIPT === "1";
  }
  function isDeno() {
    return typeof Deno !== "undefined";
  }

  // browser/userscript_polyfill.ts
  if (!globalThis.GM && globalThis.GM_info && globalThis.GM_getValue) {
    globalThis.GM = {
      info: globalThis.GM_info,
      getValue: globalThis.GM_getValue,
      setValue: globalThis.GM_setValue,
      deleteValue: globalThis.GM_deleteValue,
      listValues: globalThis.GM_listValues,
      xmlHttpRequest: globalThis.GM_xmlhttpRequest,
      registerMenuCommand: globalThis.GM_registerMenuCommand
    };
  }
  var storageApi = {
    get: async (key) => {
      if (key === null) {
        const keys = await GM.listValues();
        const result2 = {};
        for (const key2 of keys) {
          result2[key2] = await GM.getValue(key2);
        }
        return result2;
      }
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
    },
    remove: async (key) => {
      if (typeof key === "string") {
        await GM.deleteValue(key);
      } else if (Array.isArray(key)) {
        for (const k8 of key) {
          await GM.deleteValue(k8);
        }
      }
    }
  };
  function getManifest() {
    return GM.info.script;
  }
  function openOptionsPage() {
    const env2 = getEnv();
    const optionsUrl = env2.OPTIONS_URL;
    if (optionsUrl) {
      window.open(optionsUrl, "_blank");
    } else {
      throw new Error("options url not found");
    }
  }
  var browser = {
    storage: {
      local: storageApi,
      sync: storageApi
    },
    runtime: {
      getManifest,
      lastError: null,
      openOptionsPage
    },
    extra: {
      detectLanguage: languageDetect
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
        } catch (e18) {
          return false;
        }
      }(),
      formData: "FormData" in self
    };
    var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
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
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
    self.GM_fetch = function(input, init) {
      var request3;
      var theFinalBody;
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request3 = input;
      } else {
        if (init.body) {
          theFinalBody = init.body;
        }
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
          var finalUrl = responseURL(
            resp.finalUrl || resp.responseURL,
            rawRespHeaders,
            _parsedRespHeaders
          );
          _parsedRespHeaders.set("X-Final-URL", finalUrl);
          var options2 = {
            status,
            statusText: resp.statusText,
            headers: _parsedRespHeaders,
            url: finalUrl
          };
          var body = resp.responseText;
          const finalResponse = new Response(body, options2);
          resolve(finalResponse);
        };
        xhr_details.onerror = function() {
          reject(new TypeError("Network request failed"));
        };
        xhr_details.headers = {};
        request3.headers.forEach(function(value, name) {
          xhr_details.headers[name] = value;
        });
        if (theFinalBody) {
          xhr_details.data = theFinalBody;
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
  var lastRunTimeStorageKey = "lastRunTime";
  var sourceElementWithGlobalStyleMarkAttributeName = `data-${brandId}-global-style-mark`;
  var delimiters = ["@", "#"];
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
    "zu"
  ];
  var buildinExcludeUrls = [
    "https://immersive-translate.owenyoung.com/options/",
    "http://localhost:8000/dist/userscript/options/",
    "https://www.deepl.com/translator",
    "translate.google.com"
  ];

  // utils/format_language.ts
  function formatLanguage(langCode) {
    if (typeof langCode !== "string")
      return "auto";
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
          return "auto";
        } else {
          return langCode;
        }
      } else {
        return "auto";
      }
    } else {
      return langCode;
    }
  }

  // utils/platform.ts
  function isDeno2() {
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
  if (isDeno2()) {
    browserAPI = mock_browser_default;
  } else {
    browserAPI = globalThis.browser;
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
  var d2;
  var $;
  var Y;
  var S;
  var F2;
  var B;
  var T = {};
  var V = [];
  var Z = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function k2(e18, t17) {
    for (var _2 in t17)
      e18[_2] = t17[_2];
    return e18;
  }
  function j2(e18) {
    var t17 = e18.parentNode;
    t17 && t17.removeChild(e18);
  }
  function ee(e18, t17, _2) {
    var r14, l21, o23, s21 = {};
    for (o23 in t17)
      o23 == "key" ? r14 = t17[o23] : o23 == "ref" ? l21 = t17[o23] : s21[o23] = t17[o23];
    if (arguments.length > 2 && (s21.children = arguments.length > 3 ? P.call(arguments, 2) : _2), typeof e18 == "function" && e18.defaultProps != null)
      for (o23 in e18.defaultProps)
        s21[o23] === void 0 && (s21[o23] = e18.defaultProps[o23]);
    return w2(e18, s21, r14, l21, null);
  }
  function w2(e18, t17, _2, r14, l21) {
    var o23 = { type: e18, props: t17, key: _2, ref: r14, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l21 ?? ++$ };
    return l21 == null && d2.vnode != null && d2.vnode(o23), o23;
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
  function z2(e18) {
    var t17, _2;
    if ((e18 = e18.__) != null && e18.__c != null) {
      for (e18.__e = e18.__c.base = null, t17 = 0; t17 < e18.__k.length; t17++)
        if ((_2 = e18.__k[t17]) != null && _2.__e != null) {
          e18.__e = e18.__c.base = _2.__e;
          break;
        }
      return z2(e18);
    }
  }
  function M(e18) {
    (!e18.__d && (e18.__d = true) && S.push(e18) && !D2.__r++ || F2 !== d2.debounceRendering) && ((F2 = d2.debounceRendering) || setTimeout)(D2);
  }
  function D2() {
    for (var e18; D2.__r = S.length; )
      e18 = S.sort(function(t17, _2) {
        return t17.__v.__b - _2.__v.__b;
      }), S = [], e18.some(function(t17) {
        var _2, r14, l21, o23, s21, f16;
        t17.__d && (s21 = (o23 = (_2 = t17).__v).__e, (f16 = _2.__P) && (r14 = [], (l21 = k2({}, o23)).__v = o23.__v + 1, W(f16, o23, l21, _2.__n, f16.ownerSVGElement !== void 0, o23.__h != null ? [s21] : null, r14, s21 ?? C(o23), o23.__h), K(r14, o23), o23.__e != s21 && z2(o23)));
      });
  }
  function G(e18, t17, _2, r14, l21, o23, s21, f16, p21, a21) {
    var n21, h10, c27, i21, u16, b11, v7, y10 = r14 && r14.__k || V, g9 = y10.length;
    for (_2.__k = [], n21 = 0; n21 < t17.length; n21++)
      if ((i21 = _2.__k[n21] = (i21 = t17[n21]) == null || typeof i21 == "boolean" ? null : typeof i21 == "string" || typeof i21 == "number" || typeof i21 == "bigint" ? w2(null, i21, null, null, i21) : Array.isArray(i21) ? w2(L, { children: i21 }, null, null, null) : i21.__b > 0 ? w2(i21.type, i21.props, i21.key, i21.ref ? i21.ref : null, i21.__v) : i21) != null) {
        if (i21.__ = _2, i21.__b = _2.__b + 1, (c27 = y10[n21]) === null || c27 && i21.key == c27.key && i21.type === c27.type)
          y10[n21] = void 0;
        else
          for (h10 = 0; h10 < g9; h10++) {
            if ((c27 = y10[h10]) && i21.key == c27.key && i21.type === c27.type) {
              y10[h10] = void 0;
              break;
            }
            c27 = null;
          }
        W(e18, i21, c27 = c27 || T, l21, o23, s21, f16, p21, a21), u16 = i21.__e, (h10 = i21.ref) && c27.ref != h10 && (v7 || (v7 = []), c27.ref && v7.push(c27.ref, null, i21), v7.push(h10, i21.__c || u16, i21)), u16 != null ? (b11 == null && (b11 = u16), typeof i21.type == "function" && i21.__k === c27.__k ? i21.__d = p21 = q(i21, p21, e18) : p21 = J(e18, i21, c27, y10, u16, p21), typeof _2.type == "function" && (_2.__d = p21)) : p21 && c27.__e == p21 && p21.parentNode != e18 && (p21 = C(c27));
      }
    for (_2.__e = b11, n21 = g9; n21--; )
      y10[n21] != null && (typeof _2.type == "function" && y10[n21].__e != null && y10[n21].__e == _2.__d && (_2.__d = C(r14, n21 + 1)), X(y10[n21], y10[n21]));
    if (v7)
      for (n21 = 0; n21 < v7.length; n21++)
        Q(v7[n21], v7[++n21], v7[++n21]);
  }
  function q(e18, t17, _2) {
    for (var r14, l21 = e18.__k, o23 = 0; l21 && o23 < l21.length; o23++)
      (r14 = l21[o23]) && (r14.__ = e18, t17 = typeof r14.type == "function" ? q(r14, t17, _2) : J(_2, r14, r14, l21, r14.__e, t17));
    return t17;
  }
  function J(e18, t17, _2, r14, l21, o23) {
    var s21, f16, p21;
    if (t17.__d !== void 0)
      s21 = t17.__d, t17.__d = void 0;
    else if (_2 == null || l21 != o23 || l21.parentNode == null)
      e:
        if (o23 == null || o23.parentNode !== e18)
          e18.appendChild(l21), s21 = null;
        else {
          for (f16 = o23, p21 = 0; (f16 = f16.nextSibling) && p21 < r14.length; p21 += 2)
            if (f16 == l21)
              break e;
          e18.insertBefore(l21, o23), s21 = o23;
        }
    return s21 !== void 0 ? s21 : l21.nextSibling;
  }
  function _e(e18, t17, _2, r14, l21) {
    var o23;
    for (o23 in _2)
      o23 === "children" || o23 === "key" || o23 in t17 || N(e18, o23, null, _2[o23], r14);
    for (o23 in t17)
      l21 && typeof t17[o23] != "function" || o23 === "children" || o23 === "key" || o23 === "value" || o23 === "checked" || _2[o23] === t17[o23] || N(e18, o23, t17[o23], _2[o23], r14);
  }
  function I(e18, t17, _2) {
    t17[0] === "-" ? e18.setProperty(t17, _2) : e18[t17] = _2 == null ? "" : typeof _2 != "number" || Z.test(t17) ? _2 : _2 + "px";
  }
  function N(e18, t17, _2, r14, l21) {
    var o23;
    e:
      if (t17 === "style")
        if (typeof _2 == "string")
          e18.style.cssText = _2;
        else {
          if (typeof r14 == "string" && (e18.style.cssText = r14 = ""), r14)
            for (t17 in r14)
              _2 && t17 in _2 || I(e18.style, t17, "");
          if (_2)
            for (t17 in _2)
              r14 && _2[t17] === r14[t17] || I(e18.style, t17, _2[t17]);
        }
      else if (t17[0] === "o" && t17[1] === "n")
        o23 = t17 !== (t17 = t17.replace(/Capture$/, "")), t17 = t17.toLowerCase() in e18 ? t17.toLowerCase().slice(2) : t17.slice(2), e18.l || (e18.l = {}), e18.l[t17 + o23] = _2, _2 ? r14 || e18.addEventListener(t17, o23 ? R : O, o23) : e18.removeEventListener(t17, o23 ? R : O, o23);
      else if (t17 !== "dangerouslySetInnerHTML") {
        if (l21)
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
    this.l[e18.type + false](d2.event ? d2.event(e18) : e18);
  }
  function R(e18) {
    this.l[e18.type + true](d2.event ? d2.event(e18) : e18);
  }
  function W(e18, t17, _2, r14, l21, o23, s21, f16, p21) {
    var a21, n21, h10, c27, i21, u16, b11, v7, y10, g9, x15, H6, E5, m17 = t17.type;
    if (t17.constructor !== void 0)
      return null;
    _2.__h != null && (p21 = _2.__h, f16 = t17.__e = _2.__e, t17.__h = null, o23 = [f16]), (a21 = d2.__b) && a21(t17);
    try {
      e:
        if (typeof m17 == "function") {
          if (v7 = t17.props, y10 = (a21 = m17.contextType) && r14[a21.__c], g9 = a21 ? y10 ? y10.props.value : a21.__ : r14, _2.__c ? b11 = (n21 = t17.__c = _2.__c).__ = n21.__E : ("prototype" in m17 && m17.prototype.render ? t17.__c = n21 = new m17(v7, g9) : (t17.__c = n21 = new U(v7, g9), n21.constructor = m17, n21.render = oe), y10 && y10.sub(n21), n21.props = v7, n21.state || (n21.state = {}), n21.context = g9, n21.__n = r14, h10 = n21.__d = true, n21.__h = []), n21.__s == null && (n21.__s = n21.state), m17.getDerivedStateFromProps != null && (n21.__s == n21.state && (n21.__s = k2({}, n21.__s)), k2(n21.__s, m17.getDerivedStateFromProps(v7, n21.__s))), c27 = n21.props, i21 = n21.state, h10)
            m17.getDerivedStateFromProps == null && n21.componentWillMount != null && n21.componentWillMount(), n21.componentDidMount != null && n21.__h.push(n21.componentDidMount);
          else {
            if (m17.getDerivedStateFromProps == null && v7 !== c27 && n21.componentWillReceiveProps != null && n21.componentWillReceiveProps(v7, g9), !n21.__e && n21.shouldComponentUpdate != null && n21.shouldComponentUpdate(v7, n21.__s, g9) === false || t17.__v === _2.__v) {
              n21.props = v7, n21.state = n21.__s, t17.__v !== _2.__v && (n21.__d = false), n21.__v = t17, t17.__e = _2.__e, t17.__k = _2.__k, t17.__k.forEach(function(A5) {
                A5 && (A5.__ = t17);
              }), n21.__h.length && s21.push(n21);
              break e;
            }
            n21.componentWillUpdate != null && n21.componentWillUpdate(v7, n21.__s, g9), n21.componentDidUpdate != null && n21.__h.push(function() {
              n21.componentDidUpdate(c27, i21, u16);
            });
          }
          if (n21.context = g9, n21.props = v7, n21.__v = t17, n21.__P = e18, x15 = d2.__r, H6 = 0, "prototype" in m17 && m17.prototype.render)
            n21.state = n21.__s, n21.__d = false, x15 && x15(t17), a21 = n21.render(n21.props, n21.state, n21.context);
          else
            do
              n21.__d = false, x15 && x15(t17), a21 = n21.render(n21.props, n21.state, n21.context), n21.state = n21.__s;
            while (n21.__d && ++H6 < 25);
          n21.state = n21.__s, n21.getChildContext != null && (r14 = k2(k2({}, r14), n21.getChildContext())), h10 || n21.getSnapshotBeforeUpdate == null || (u16 = n21.getSnapshotBeforeUpdate(c27, i21)), E5 = a21 != null && a21.type === L && a21.key == null ? a21.props.children : a21, G(e18, Array.isArray(E5) ? E5 : [E5], t17, _2, r14, l21, o23, s21, f16, p21), n21.base = t17.__e, t17.__h = null, n21.__h.length && s21.push(n21), b11 && (n21.__E = n21.__ = null), n21.__e = false;
        } else
          o23 == null && t17.__v === _2.__v ? (t17.__k = _2.__k, t17.__e = _2.__e) : t17.__e = ne(_2.__e, t17, _2, r14, l21, o23, s21, p21);
      (a21 = d2.diffed) && a21(t17);
    } catch (A5) {
      t17.__v = null, (p21 || o23 != null) && (t17.__e = f16, t17.__h = !!p21, o23[o23.indexOf(f16)] = null), d2.__e(A5, t17, _2);
    }
  }
  function K(e18, t17) {
    d2.__c && d2.__c(t17, e18), e18.some(function(_2) {
      try {
        e18 = _2.__h, _2.__h = [], e18.some(function(r14) {
          r14.call(_2);
        });
      } catch (r14) {
        d2.__e(r14, _2.__v);
      }
    });
  }
  function ne(e18, t17, _2, r14, l21, o23, s21, f16) {
    var p21, a21, n21, h10 = _2.props, c27 = t17.props, i21 = t17.type, u16 = 0;
    if (i21 === "svg" && (l21 = true), o23 != null) {
      for (; u16 < o23.length; u16++)
        if ((p21 = o23[u16]) && "setAttribute" in p21 == !!i21 && (i21 ? p21.localName === i21 : p21.nodeType === 3)) {
          e18 = p21, o23[u16] = null;
          break;
        }
    }
    if (e18 == null) {
      if (i21 === null)
        return document.createTextNode(c27);
      e18 = l21 ? document.createElementNS("http://www.w3.org/2000/svg", i21) : document.createElement(i21, c27.is && c27), o23 = null, f16 = false;
    }
    if (i21 === null)
      h10 === c27 || f16 && e18.data === c27 || (e18.data = c27);
    else {
      if (o23 = o23 && P.call(e18.childNodes), a21 = (h10 = _2.props || T).dangerouslySetInnerHTML, n21 = c27.dangerouslySetInnerHTML, !f16) {
        if (o23 != null)
          for (h10 = {}, u16 = 0; u16 < e18.attributes.length; u16++)
            h10[e18.attributes[u16].name] = e18.attributes[u16].value;
        (n21 || a21) && (n21 && (a21 && n21.__html == a21.__html || n21.__html === e18.innerHTML) || (e18.innerHTML = n21 && n21.__html || ""));
      }
      if (_e(e18, c27, h10, l21, f16), n21)
        t17.__k = [];
      else if (u16 = t17.props.children, G(e18, Array.isArray(u16) ? u16 : [u16], t17, _2, r14, l21 && i21 !== "foreignObject", o23, s21, o23 ? o23[0] : _2.__k && C(_2, 0), f16), o23 != null)
        for (u16 = o23.length; u16--; )
          o23[u16] != null && j2(o23[u16]);
      f16 || ("value" in c27 && (u16 = c27.value) !== void 0 && (u16 !== e18.value || i21 === "progress" && !u16 || i21 === "option" && u16 !== h10.value) && N(e18, "value", u16, h10.value, false), "checked" in c27 && (u16 = c27.checked) !== void 0 && u16 !== e18.checked && N(e18, "checked", u16, h10.checked, false));
    }
    return e18;
  }
  function Q(e18, t17, _2) {
    try {
      typeof e18 == "function" ? e18(t17) : e18.current = t17;
    } catch (r14) {
      d2.__e(r14, _2);
    }
  }
  function X(e18, t17, _2) {
    var r14, l21;
    if (d2.unmount && d2.unmount(e18), (r14 = e18.ref) && (r14.current && r14.current !== e18.__e || Q(r14, null, t17)), (r14 = e18.__c) != null) {
      if (r14.componentWillUnmount)
        try {
          r14.componentWillUnmount();
        } catch (o23) {
          d2.__e(o23, t17);
        }
      r14.base = r14.__P = null, e18.__c = void 0;
    }
    if (r14 = e18.__k)
      for (l21 = 0; l21 < r14.length; l21++)
        r14[l21] && X(r14[l21], t17, typeof e18.type != "function");
    _2 || e18.__e == null || j2(e18.__e), e18.__ = e18.__e = e18.__d = void 0;
  }
  function oe(e18, t17, _2) {
    return this.constructor(e18, _2);
  }
  function re(e18, t17, _2) {
    var r14, l21, o23;
    d2.__ && d2.__(e18, t17), l21 = (r14 = typeof _2 == "function") ? null : _2 && _2.__k || t17.__k, o23 = [], W(t17, e18 = (!r14 && _2 || t17).__k = ee(L, null, [e18]), l21 || T, T, t17.ownerSVGElement !== void 0, !r14 && _2 ? [_2] : l21 ? null : t17.firstChild ? P.call(t17.childNodes) : null, o23, !r14 && _2 ? _2 : l21 ? l21.__e : t17.firstChild, r14), K(o23, e18);
  }
  function ce(e18, t17) {
    var _2 = { __c: t17 = "__cC" + B++, __: e18, Consumer: function(r14, l21) {
      return r14.children(l21);
    }, Provider: function(r14) {
      var l21, o23;
      return this.getChildContext || (l21 = [], (o23 = {})[t17] = this, this.getChildContext = function() {
        return o23;
      }, this.shouldComponentUpdate = function(s21) {
        this.props.value !== s21.value && l21.some(M);
      }, this.sub = function(s21) {
        l21.push(s21);
        var f16 = s21.componentWillUnmount;
        s21.componentWillUnmount = function() {
          l21.splice(l21.indexOf(s21), 1), f16 && f16.call(s21);
        };
      }), r14.children;
    } };
    return _2.Provider.__ = _2.Consumer.contextType = _2;
  }
  P = V.slice, d2 = { __e: function(e18, t17, _2, r14) {
    for (var l21, o23, s21; t17 = t17.__; )
      if ((l21 = t17.__c) && !l21.__)
        try {
          if ((o23 = l21.constructor) && o23.getDerivedStateFromError != null && (l21.setState(o23.getDerivedStateFromError(e18)), s21 = l21.__d), l21.componentDidCatch != null && (l21.componentDidCatch(e18, r14 || {}), s21 = l21.__d), s21)
            return l21.__E = l21;
        } catch (f16) {
          e18 = f16;
        }
    throw e18;
  } }, $ = 0, Y = function(e18) {
    return e18 != null && e18.constructor === void 0;
  }, U.prototype.setState = function(e18, t17) {
    var _2;
    _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k2({}, this.state), typeof e18 == "function" && (e18 = e18(k2({}, _2), this.props)), e18 && k2(_2, e18), e18 != null && this.__v && (t17 && this.__h.push(t17), M(this));
  }, U.prototype.forceUpdate = function(e18) {
    this.__v && (this.__e = true, e18 && this.__h.push(e18), M(this));
  }, U.prototype.render = L, S = [], D2.__r = 0, B = 0;

  // https://esm.sh/stable/preact@10.11.0/deno/hooks.js
  var i2;
  var n;
  var d3;
  var N2;
  var f4 = 0;
  var q2 = [];
  var l4 = [];
  var V2 = d2.__b;
  var g3 = d2.__r;
  var b = d2.diffed;
  var C2 = d2.__c;
  var A = d2.unmount;
  function a3(_2, t17) {
    d2.__h && d2.__h(n, _2, f4 || t17), f4 = 0;
    var u16 = n.__H || (n.__H = { __: [], __h: [] });
    return _2 >= u16.__.length && u16.__.push({ __V: l4 }), u16.__[_2];
  }
  function P2(_2) {
    return f4 = 1, B2(D3, _2);
  }
  function B2(_2, t17, u16) {
    var o23 = a3(i2++, 2);
    if (o23.t = _2, !o23.__c && (o23.__ = [u16 ? u16(t17) : D3(void 0, t17), function(v7) {
      var s21 = o23.__N ? o23.__N[0] : o23.__[0], h10 = o23.t(s21, v7);
      s21 !== h10 && (o23.__N = [h10, o23.__[1]], o23.__c.setState({}));
    }], o23.__c = n, !n.u)) {
      n.u = true;
      var r14 = n.shouldComponentUpdate;
      n.shouldComponentUpdate = function(v7, s21, h10) {
        if (!o23.__c.__H)
          return true;
        var y10 = o23.__c.__H.__.filter(function(c27) {
          return c27.__c;
        });
        if (y10.every(function(c27) {
          return !c27.__N;
        }))
          return !r14 || r14.call(this, v7, s21, h10);
        var E5 = false;
        return y10.forEach(function(c27) {
          if (c27.__N) {
            var k8 = c27.__[0];
            c27.__ = c27.__N, c27.__N = void 0, k8 !== c27.__[0] && (E5 = true);
          }
        }), !!E5 && (!r14 || r14.call(this, v7, s21, h10));
      };
    }
    return o23.__N || o23.__;
  }
  function j3(_2, t17) {
    var u16 = a3(i2++, 3);
    !d2.__s && H(u16.__H, t17) && (u16.__ = _2, u16.i = t17, n.__H.__h.push(u16));
  }
  function w3(_2) {
    return f4 = 5, x(function() {
      return { current: _2 };
    }, []);
  }
  function x(_2, t17) {
    var u16 = a3(i2++, 7);
    return H(u16.__H, t17) ? (u16.__V = _2(), u16.i = t17, u16.__h = _2, u16.__V) : u16.__;
  }
  function L2(_2, t17) {
    return f4 = 8, x(function() {
      return _2;
    }, t17);
  }
  function M2(_2) {
    var t17 = n.context[_2.__c], u16 = a3(i2++, 9);
    return u16.c = _2, t17 ? (u16.__ == null && (u16.__ = true, t17.sub(n)), t17.props.value) : _2.__;
  }
  function R2() {
    for (var _2; _2 = q2.shift(); )
      if (_2.__P && _2.__H)
        try {
          _2.__H.__h.forEach(m3), _2.__H.__h.forEach(p2), _2.__H.__h = [];
        } catch (t17) {
          _2.__H.__h = [], d2.__e(t17, _2.__v);
        }
  }
  d2.__b = function(_2) {
    typeof _2.type != "function" || _2.o || _2.type === L ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n = null, V2 && V2(_2);
  }, d2.__r = function(_2) {
    g3 && g3(_2), i2 = 0;
    var t17 = (n = _2.__c).__H;
    t17 && (d3 === n ? (t17.__h = [], n.__h = [], t17.__.forEach(function(u16) {
      u16.__N && (u16.__ = u16.__N), u16.__V = l4, u16.__N = u16.i = void 0;
    })) : (t17.__h.forEach(m3), t17.__h.forEach(p2), t17.__h = [])), d3 = n;
  }, d2.diffed = function(_2) {
    b && b(_2);
    var t17 = _2.__c;
    t17 && t17.__H && (t17.__H.__h.length && (q2.push(t17) !== 1 && N2 === d2.requestAnimationFrame || ((N2 = d2.requestAnimationFrame) || S2)(R2)), t17.__H.__.forEach(function(u16) {
      u16.i && (u16.__H = u16.i), u16.__V !== l4 && (u16.__ = u16.__V), u16.i = void 0, u16.__V = l4;
    })), d3 = n = null;
  }, d2.__c = function(_2, t17) {
    t17.some(function(u16) {
      try {
        u16.__h.forEach(m3), u16.__h = u16.__h.filter(function(o23) {
          return !o23.__ || p2(o23);
        });
      } catch (o23) {
        t17.some(function(r14) {
          r14.__h && (r14.__h = []);
        }), t17 = [], d2.__e(o23, u16.__v);
      }
    }), C2 && C2(_2, t17);
  }, d2.unmount = function(_2) {
    A && A(_2);
    var t17, u16 = _2.__c;
    u16 && u16.__H && (u16.__H.__.forEach(function(o23) {
      try {
        m3(o23);
      } catch (r14) {
        t17 = r14;
      }
    }), u16.__H = void 0, t17 && d2.__e(t17, u16.__v));
  };
  var F3 = typeof requestAnimationFrame == "function";
  function S2(_2) {
    var t17, u16 = function() {
      clearTimeout(o23), F3 && cancelAnimationFrame(t17), setTimeout(_2);
    }, o23 = setTimeout(u16, 100);
    F3 && (t17 = requestAnimationFrame(u16));
  }
  function m3(_2) {
    var t17 = n, u16 = _2.__c;
    typeof u16 == "function" && (_2.__c = void 0, u16()), n = t17;
  }
  function p2(_2) {
    var t17 = n;
    _2.__c = _2.__(), n = t17;
  }
  function H(_2, t17) {
    return !_2 || _2.length !== t17.length || t17.some(function(u16, o23) {
      return u16 !== _2[o23];
    });
  }
  function D3(_2, t17) {
    return typeof t17 == "function" ? t17(_2) : t17;
  }

  // https://esm.sh/v102/memoize-one@6.0.0/deno/memoize-one.js
  var s3 = Number.isNaN || function(r14) {
    return typeof r14 == "number" && r14 !== r14;
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isFunction.js
  function t2(n21) {
    return typeof n21 == "function";
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/createErrorClass.js
  function e(o23) {
    let r14 = o23((t17) => {
      Error.call(t17), t17.stack = new Error().stack;
    });
    return r14.prototype = Object.create(Error.prototype), r14.prototype.constructor = r14, r14;
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/UnsubscriptionError.js
  var p3 = e((i21) => function(r14) {
    i21(this), this.message = r14 ? `${r14.length} errors occurred during unsubscription:
${r14.map((n21, s21) => `${s21 + 1}) ${n21.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = r14;
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/arrRemove.js
  function o4(e18, n21) {
    if (e18) {
      let i21 = e18.indexOf(n21);
      0 <= i21 && e18.splice(i21, 1);
    }
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Subscription.js
  var e2 = class {
    constructor(i21) {
      this.initialTeardown = i21, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    unsubscribe() {
      let i21;
      if (!this.closed) {
        this.closed = true;
        let { _parentage: s21 } = this;
        if (s21)
          if (this._parentage = null, Array.isArray(s21))
            for (let t17 of s21)
              t17.remove(this);
          else
            s21.remove(this);
        let { initialTeardown: c27 } = this;
        if (t2(c27))
          try {
            c27();
          } catch (t17) {
            i21 = t17 instanceof p3 ? t17.errors : [t17];
          }
        let { _finalizers: f16 } = this;
        if (f16) {
          this._finalizers = null;
          for (let t17 of f16)
            try {
              h2(t17);
            } catch (o23) {
              i21 = i21 ?? [], o23 instanceof p3 ? i21 = [...i21, ...o23.errors] : i21.push(o23);
            }
        }
        if (i21)
          throw new p3(i21);
      }
    }
    add(i21) {
      var s21;
      if (i21 && i21 !== this)
        if (this.closed)
          h2(i21);
        else {
          if (i21 instanceof e2) {
            if (i21.closed || i21._hasParent(this))
              return;
            i21._addParent(this);
          }
          (this._finalizers = (s21 = this._finalizers) !== null && s21 !== void 0 ? s21 : []).push(i21);
        }
    }
    _hasParent(i21) {
      let { _parentage: s21 } = this;
      return s21 === i21 || Array.isArray(s21) && s21.includes(i21);
    }
    _addParent(i21) {
      let { _parentage: s21 } = this;
      this._parentage = Array.isArray(s21) ? (s21.push(i21), s21) : s21 ? [s21, i21] : i21;
    }
    _removeParent(i21) {
      let { _parentage: s21 } = this;
      s21 === i21 ? this._parentage = null : Array.isArray(s21) && o4(s21, i21);
    }
    remove(i21) {
      let { _finalizers: s21 } = this;
      s21 && o4(s21, i21), i21 instanceof e2 && i21._removeParent(this);
    }
  };
  e2.EMPTY = (() => {
    let r14 = new e2();
    return r14.closed = true, r14;
  })();
  var p4 = e2.EMPTY;
  function d4(r14) {
    return r14 instanceof e2 || r14 && "closed" in r14 && t2(r14.remove) && t2(r14.add) && t2(r14.unsubscribe);
  }
  function h2(r14) {
    t2(r14) ? r14() : r14.unsubscribe();
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/config.js
  var e3 = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/timeoutProvider.js
  var u3 = { setTimeout(t17, e18, ...i21) {
    let { delegate: o23 } = u3;
    return o23?.setTimeout ? o23.setTimeout(t17, e18, ...i21) : setTimeout(t17, e18, ...i21);
  }, clearTimeout(t17) {
    let { delegate: e18 } = u3;
    return (e18?.clearTimeout || clearTimeout)(t17);
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/reportUnhandledError.js
  function m4(o23) {
    u3.setTimeout(() => {
      let { onUnhandledError: r14 } = e3;
      if (r14)
        r14(o23);
      else
        throw o23;
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/noop.js
  function o5() {
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/NotificationFactories.js
  var o6 = (() => e4("C", void 0, void 0))();
  function r2(n21) {
    return e4("E", void 0, n21);
  }
  function f5(n21) {
    return e4("N", n21, void 0);
  }
  function e4(n21, t17, i21) {
    return { kind: n21, value: t17, error: i21 };
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/errorContext.js
  var r3 = null;
  function u4(o23) {
    if (e3.useDeprecatedSynchronousErrorHandling) {
      let e18 = !r3;
      if (e18 && (r3 = { errorThrown: false, error: null }), o23(), e18) {
        let { errorThrown: t17, error: i21 } = r3;
        if (r3 = null, t17)
          throw i21;
      }
    } else
      o23();
  }
  function c3(o23) {
    e3.useDeprecatedSynchronousErrorHandling && r3 && (r3.errorThrown = true, r3.error = o23);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Subscriber.js
  var l5 = class extends e2 {
    constructor(t17) {
      super(), this.isStopped = false, t17 ? (this.destination = t17, d4(t17) && t17.add(this)) : this.destination = I2;
    }
    static create(t17, i21, o23) {
      return new u5(t17, i21, o23);
    }
    next(t17) {
      this.isStopped ? p5(f5(t17), this) : this._next(t17);
    }
    error(t17) {
      this.isStopped ? p5(r2(t17), this) : (this.isStopped = true, this._error(t17));
    }
    complete() {
      this.isStopped ? p5(o6, this) : (this.isStopped = true, this._complete());
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
  var w4 = Function.prototype.bind;
  function c4(e18, t17) {
    return w4.call(e18, t17);
  }
  var d5 = class {
    constructor(t17) {
      this.partialObserver = t17;
    }
    next(t17) {
      let { partialObserver: i21 } = this;
      if (i21.next)
        try {
          i21.next(t17);
        } catch (o23) {
          s4(o23);
        }
    }
    error(t17) {
      let { partialObserver: i21 } = this;
      if (i21.error)
        try {
          i21.error(t17);
        } catch (o23) {
          s4(o23);
        }
      else
        s4(t17);
    }
    complete() {
      let { partialObserver: t17 } = this;
      if (t17.complete)
        try {
          t17.complete();
        } catch (i21) {
          s4(i21);
        }
    }
  };
  var u5 = class extends l5 {
    constructor(t17, i21, o23) {
      super();
      let r14;
      if (t2(t17) || !t17)
        r14 = { next: t17 ?? void 0, error: i21 ?? void 0, complete: o23 ?? void 0 };
      else {
        let n21;
        this && e3.useDeprecatedNextContext ? (n21 = Object.create(t17), n21.unsubscribe = () => this.unsubscribe(), r14 = { next: t17.next && c4(t17.next, n21), error: t17.error && c4(t17.error, n21), complete: t17.complete && c4(t17.complete, n21) }) : r14 = t17;
      }
      this.destination = new d5(r14);
    }
  };
  function s4(e18) {
    e3.useDeprecatedSynchronousErrorHandling ? c3(e18) : m4(e18);
  }
  function F4(e18) {
    throw e18;
  }
  function p5(e18, t17) {
    let { onStoppedNotification: i21 } = e3;
    i21 && u3.setTimeout(() => i21(e18, t17));
  }
  var I2 = { closed: true, next: o5, error: F4, complete: o5 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/symbol/observable.js
  var o7 = (() => typeof Symbol == "function" && Symbol.observable || "@@observable")();

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/identity.js
  function n2(t17) {
    return t17;
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/pipe.js
  function p6(r14) {
    return r14.length === 0 ? n2 : r14.length === 1 ? r14[0] : function(e18) {
      return r14.reduce((t17, i21) => i21(t17), e18);
    };
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Observable.js
  var o8 = class {
    constructor(r14) {
      r14 && (this._subscribe = r14);
    }
    lift(r14) {
      let t17 = new o8();
      return t17.source = this, t17.operator = r14, t17;
    }
    subscribe(r14, t17, n21) {
      let s21 = w5(r14) ? r14 : new u5(r14, t17, n21);
      return u4(() => {
        let { operator: e18, source: c27 } = this;
        s21.add(e18 ? e18.call(s21, c27) : c27 ? this._subscribe(s21) : this._trySubscribe(s21));
      }), s21;
    }
    _trySubscribe(r14) {
      try {
        return this._subscribe(r14);
      } catch (t17) {
        r14.error(t17);
      }
    }
    forEach(r14, t17) {
      return t17 = f6(t17), new t17((n21, s21) => {
        let e18 = new u5({ next: (c27) => {
          try {
            r14(c27);
          } catch (m17) {
            s21(m17), e18.unsubscribe();
          }
        }, error: s21, complete: n21 });
        this.subscribe(e18);
      });
    }
    _subscribe(r14) {
      var t17;
      return (t17 = this.source) === null || t17 === void 0 ? void 0 : t17.subscribe(r14);
    }
    [o7]() {
      return this;
    }
    pipe(...r14) {
      return p6(r14)(this);
    }
    toPromise(r14) {
      return r14 = f6(r14), new r14((t17, n21) => {
        let s21;
        this.subscribe((e18) => s21 = e18, (e18) => n21(e18), () => t17(s21));
      });
    }
  };
  o8.create = (i21) => new o8(i21);
  function f6(i21) {
    var r14;
    return (r14 = i21 ?? e3.Promise) !== null && r14 !== void 0 ? r14 : Promise;
  }
  function d6(i21) {
    return i21 && t2(i21.next) && t2(i21.error) && t2(i21.complete);
  }
  function w5(i21) {
    return i21 && i21 instanceof l5 || d6(i21) && d4(i21);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/lift.js
  function o9(t17) {
    return t2(t17?.lift);
  }
  function l6(t17) {
    return (r14) => {
      if (o9(r14))
        return r14.lift(function(n21) {
          try {
            return t17(n21, this);
          } catch (i21) {
            this.error(i21);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/OperatorSubscriber.js
  function a4(n21, r14, s21, i21, c27) {
    return new u6(n21, r14, s21, i21, c27);
  }
  var u6 = class extends l5 {
    constructor(r14, s21, i21, c27, h10, o23) {
      super(r14), this.onFinalize = h10, this.shouldUnsubscribe = o23, this._next = s21 ? function(e18) {
        try {
          s21(e18);
        } catch (t17) {
          r14.error(t17);
        }
      } : super._next, this._error = c27 ? function(e18) {
        try {
          c27(e18);
        } catch (t17) {
          r14.error(t17);
        } finally {
          this.unsubscribe();
        }
      } : super._error, this._complete = i21 ? function() {
        try {
          i21();
        } catch (e18) {
          r14.error(e18);
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

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/performanceTimestampProvider.js
  var e5 = { now() {
    return (e5.delegate || performance).now();
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/animationFrameProvider.js
  var t3 = { schedule(n21) {
    let e18 = requestAnimationFrame, i21 = cancelAnimationFrame, { delegate: a21 } = t3;
    a21 && (e18 = a21.requestAnimationFrame, i21 = a21.cancelAnimationFrame);
    let r14 = e18((o23) => {
      i21 = void 0, n21(o23);
    });
    return new e2(() => i21?.(r14));
  }, requestAnimationFrame(...n21) {
    let { delegate: e18 } = t3;
    return (e18?.requestAnimationFrame || requestAnimationFrame)(...n21);
  }, cancelAnimationFrame(...n21) {
    let { delegate: e18 } = t3;
    return (e18?.cancelAnimationFrame || cancelAnimationFrame)(...n21);
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/dom/animationFrames.js
  function m5(n21) {
    return new o8((r14) => {
      let t17 = n21 || e5, c27 = t17.now(), o23 = 0, e18 = () => {
        r14.closed || (o23 = t3.requestAnimationFrame((s21) => {
          o23 = 0;
          let a21 = t17.now();
          r14.next({ timestamp: n21 ? a21 : s21, elapsed: a21 - c27 }), e18();
        }));
      };
      return e18(), () => {
        o23 && t3.cancelAnimationFrame(o23);
      };
    });
  }
  var p7 = m5();

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/ObjectUnsubscribedError.js
  var t4 = e((r14) => function() {
    r14(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Subject.js
  var i3 = class extends o8 {
    constructor() {
      super(), this.closed = false, this.currentObservers = null, this.observers = [], this.isStopped = false, this.hasError = false, this.thrownError = null;
    }
    lift(r14) {
      let e18 = new o10(this, this);
      return e18.operator = r14, e18;
    }
    _throwIfClosed() {
      if (this.closed)
        throw new t4();
    }
    next(r14) {
      u4(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.currentObservers || (this.currentObservers = Array.from(this.observers));
          for (let e18 of this.currentObservers)
            e18.next(r14);
        }
      });
    }
    error(r14) {
      u4(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.hasError = this.isStopped = true, this.thrownError = r14;
          let { observers: e18 } = this;
          for (; e18.length; )
            e18.shift().error(r14);
        }
      });
    }
    complete() {
      u4(() => {
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
      let { hasError: e18, isStopped: s21, observers: t17 } = this;
      return e18 || s21 ? p4 : (this.currentObservers = null, t17.push(r14), new e2(() => {
        this.currentObservers = null, o4(t17, r14);
      }));
    }
    _checkFinalizedStatuses(r14) {
      let { hasError: e18, thrownError: s21, isStopped: t17 } = this;
      e18 ? r14.error(s21) : t17 && r14.complete();
    }
    asObservable() {
      let r14 = new o8();
      return r14.source = this, r14;
    }
  };
  i3.create = (n21, r14) => new o10(n21, r14);
  var o10 = class extends i3 {
    constructor(r14, e18) {
      super(), this.destination = r14, this.source = e18;
    }
    next(r14) {
      var e18, s21;
      (s21 = (e18 = this.destination) === null || e18 === void 0 ? void 0 : e18.next) === null || s21 === void 0 || s21.call(e18, r14);
    }
    error(r14) {
      var e18, s21;
      (s21 = (e18 = this.destination) === null || e18 === void 0 ? void 0 : e18.error) === null || s21 === void 0 || s21.call(e18, r14);
    }
    complete() {
      var r14, e18;
      (e18 = (r14 = this.destination) === null || r14 === void 0 ? void 0 : r14.complete) === null || e18 === void 0 || e18.call(r14);
    }
    _subscribe(r14) {
      var e18, s21;
      return (s21 = (e18 = this.source) === null || e18 === void 0 ? void 0 : e18.subscribe(r14)) !== null && s21 !== void 0 ? s21 : p4;
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/dateTimestampProvider.js
  var e6 = { now() {
    return (e6.delegate || Date).now();
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/Action.js
  var e7 = class extends e2 {
    constructor(r14, s21) {
      super();
    }
    schedule(r14, s21 = 0) {
      return this;
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/intervalProvider.js
  var n3 = { setInterval(t17, e18, ...l21) {
    let { delegate: r14 } = n3;
    return r14?.setInterval ? r14.setInterval(t17, e18, ...l21) : setInterval(t17, e18, ...l21);
  }, clearInterval(t17) {
    let { delegate: e18 } = n3;
    return (e18?.clearInterval || clearInterval)(t17);
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AsyncAction.js
  var l8 = class extends e7 {
    constructor(t17, e18) {
      super(t17, e18), this.scheduler = t17, this.work = e18, this.pending = false;
    }
    schedule(t17, e18 = 0) {
      var s21;
      if (this.closed)
        return this;
      this.state = t17;
      let i21 = this.id, r14 = this.scheduler;
      return i21 != null && (this.id = this.recycleAsyncId(r14, i21, e18)), this.pending = true, this.delay = e18, this.id = (s21 = this.id) !== null && s21 !== void 0 ? s21 : this.requestAsyncId(r14, this.id, e18), this;
    }
    requestAsyncId(t17, e18, s21 = 0) {
      return n3.setInterval(t17.flush.bind(t17, this), s21);
    }
    recycleAsyncId(t17, e18, s21 = 0) {
      if (s21 != null && this.delay === s21 && this.pending === false)
        return e18;
      e18 != null && n3.clearInterval(e18);
    }
    execute(t17, e18) {
      if (this.closed)
        return new Error("executing a cancelled action");
      this.pending = false;
      let s21 = this._execute(t17, e18);
      if (s21)
        return s21;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(t17, e18) {
      let s21 = false, i21;
      try {
        this.work(t17);
      } catch (r14) {
        s21 = true, i21 = r14 || new Error("Scheduled action threw falsy error");
      }
      if (s21)
        return this.unsubscribe(), i21;
    }
    unsubscribe() {
      if (!this.closed) {
        let { id: t17, scheduler: e18 } = this, { actions: s21 } = e18;
        this.work = this.state = this.scheduler = null, this.pending = false, o4(s21, this), t17 != null && (this.id = this.recycleAsyncId(e18, t17, null)), this.delay = null, super.unsubscribe();
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/Immediate.js
  var s5 = 1;
  var r4;
  var t5 = {};
  function l9(e18) {
    return e18 in t5 ? (delete t5[e18], true) : false;
  }
  var o11 = { setImmediate(e18) {
    let n21 = s5++;
    return t5[n21] = true, r4 || (r4 = Promise.resolve()), r4.then(() => l9(n21) && e18()), n21;
  }, clearImmediate(e18) {
    l9(e18);
  } };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/immediateProvider.js
  var { setImmediate: i4, clearImmediate: a5 } = o11;
  var d7 = { setImmediate(...t17) {
    let { delegate: e18 } = d7;
    return (e18?.setImmediate || i4)(...t17);
  }, clearImmediate(t17) {
    let { delegate: e18 } = d7;
    return (e18?.clearImmediate || a5)(t17);
  }, delegate: void 0 };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AsapAction.js
  var u7 = class extends l8 {
    constructor(n21, t17) {
      super(n21, t17), this.scheduler = n21, this.work = t17;
    }
    requestAsyncId(n21, t17, e18 = 0) {
      return e18 !== null && e18 > 0 ? super.requestAsyncId(n21, t17, e18) : (n21.actions.push(this), n21._scheduled || (n21._scheduled = d7.setImmediate(n21.flush.bind(n21, void 0))));
    }
    recycleAsyncId(n21, t17, e18 = 0) {
      var i21;
      if (e18 != null ? e18 > 0 : this.delay > 0)
        return super.recycleAsyncId(n21, t17, e18);
      let { actions: r14 } = n21;
      t17 != null && ((i21 = r14[r14.length - 1]) === null || i21 === void 0 ? void 0 : i21.id) !== t17 && (d7.clearImmediate(t17), n21._scheduled = void 0);
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Scheduler.js
  var t6 = class {
    constructor(o23, s21 = t6.now) {
      this.schedulerActionCtor = o23, this.now = s21;
    }
    schedule(o23, s21 = 0, r14) {
      return new this.schedulerActionCtor(this, o23).schedule(r14, s21);
    }
  };
  t6.now = e6.now;

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AsyncScheduler.js
  var r5 = class extends t6 {
    constructor(e18, s21 = t6.now) {
      super(e18, s21), this.actions = [], this._active = false;
    }
    flush(e18) {
      let { actions: s21 } = this;
      if (this._active) {
        s21.push(e18);
        return;
      }
      let t17;
      this._active = true;
      do
        if (t17 = e18.execute(e18.state, e18.delay))
          break;
      while (e18 = s21.shift());
      if (this._active = false, t17) {
        for (; e18 = s21.shift(); )
          e18.unsubscribe();
        throw t17;
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AsapScheduler.js
  var d8 = class extends r5 {
    flush(e18) {
      this._active = true;
      let t17 = this._scheduled;
      this._scheduled = void 0;
      let { actions: s21 } = this, h10;
      e18 = e18 || s21.shift();
      do
        if (h10 = e18.execute(e18.state, e18.delay))
          break;
      while ((e18 = s21[0]) && e18.id === t17 && s21.shift());
      if (this._active = false, h10) {
        for (; (e18 = s21[0]) && e18.id === t17 && s21.shift(); )
          e18.unsubscribe();
        throw h10;
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/asap.js
  var r6 = new d8(u7);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/async.js
  var n4 = new r5(l8);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/QueueAction.js
  var r7 = class extends l8 {
    constructor(t17, s21) {
      super(t17, s21), this.scheduler = t17, this.work = s21;
    }
    schedule(t17, s21 = 0) {
      return s21 > 0 ? super.schedule(t17, s21) : (this.delay = s21, this.state = t17, this.scheduler.flush(this), this);
    }
    execute(t17, s21) {
      return s21 > 0 || this.closed ? super.execute(t17, s21) : this._execute(t17, s21);
    }
    requestAsyncId(t17, s21, e18 = 0) {
      return e18 != null && e18 > 0 || e18 == null && this.delay > 0 ? super.requestAsyncId(t17, s21, e18) : (t17.flush(this), 0);
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/QueueScheduler.js
  var s6 = class extends r5 {
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/queue.js
  var o12 = new s6(r7);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AnimationFrameAction.js
  var u8 = class extends l8 {
    constructor(n21, t17) {
      super(n21, t17), this.scheduler = n21, this.work = t17;
    }
    requestAsyncId(n21, t17, e18 = 0) {
      return e18 !== null && e18 > 0 ? super.requestAsyncId(n21, t17, e18) : (n21.actions.push(this), n21._scheduled || (n21._scheduled = t3.requestAnimationFrame(() => n21.flush(void 0))));
    }
    recycleAsyncId(n21, t17, e18 = 0) {
      var r14;
      if (e18 != null ? e18 > 0 : this.delay > 0)
        return super.recycleAsyncId(n21, t17, e18);
      let { actions: s21 } = n21;
      t17 != null && ((r14 = s21[s21.length - 1]) === null || r14 === void 0 ? void 0 : r14.id) !== t17 && (t3.cancelAnimationFrame(t17), n21._scheduled = void 0);
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/AnimationFrameScheduler.js
  var t7 = class extends r5 {
    flush(e18) {
      this._active = true;
      let d17 = this._scheduled;
      this._scheduled = void 0;
      let { actions: s21 } = this, h10;
      e18 = e18 || s21.shift();
      do
        if (h10 = e18.execute(e18.state, e18.delay))
          break;
      while ((e18 = s21[0]) && e18.id === d17 && s21.shift());
      if (this._active = false, h10) {
        for (; (e18 = s21[0]) && e18.id === d17 && s21.shift(); )
          e18.unsubscribe();
        throw h10;
      }
    }
  };

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/animationFrame.js
  var n5 = new t7(u8);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduler/VirtualTimeScheduler.js
  var n6 = class extends r5 {
    constructor(e18 = r8, t17 = 1 / 0) {
      super(e18, () => this.frame), this.maxFrames = t17, this.frame = 0, this.index = -1;
    }
    flush() {
      let { actions: e18, maxFrames: t17 } = this, s21, i21;
      for (; (i21 = e18[0]) && i21.delay <= t17 && (e18.shift(), this.frame = i21.delay, !(s21 = i21.execute(i21.state, i21.delay))); )
        ;
      if (s21) {
        for (; i21 = e18.shift(); )
          i21.unsubscribe();
        throw s21;
      }
    }
  };
  n6.frameTimeFactor = 10;
  var r8 = class extends l8 {
    constructor(e18, t17, s21 = e18.index += 1) {
      super(e18, t17), this.scheduler = e18, this.work = t17, this.index = s21, this.active = true, this.index = e18.index = s21;
    }
    schedule(e18, t17 = 0) {
      if (Number.isFinite(t17)) {
        if (!this.id)
          return super.schedule(e18, t17);
        this.active = false;
        let s21 = new r8(this.scheduler, this.work);
        return this.add(s21), s21.schedule(e18, t17);
      } else
        return e2.EMPTY;
    }
    requestAsyncId(e18, t17, s21 = 0) {
      this.delay = e18.frame + s21;
      let { actions: i21 } = e18;
      return i21.push(this), i21.sort(r8.sortActions), 1;
    }
    recycleAsyncId(e18, t17, s21 = 0) {
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
  var o13 = new o8((e18) => e18.complete());

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isScheduler.js
  function n7(r14) {
    return r14 && t2(r14.schedule);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/args.js
  function n8(e18) {
    return e18[e18.length - 1];
  }
  function f7(e18) {
    return n7(n8(e18)) ? e18.pop() : void 0;
  }
  function c5(e18, o23) {
    return typeof n8(e18) == "number" ? e18.pop() : o23;
  }

  // https://esm.sh/v102/tslib@2.4.1/deno/tslib.js
  function T2(t17, e18, r14, n21) {
    function a21(o23) {
      return o23 instanceof r14 ? o23 : new r14(function(i21) {
        i21(o23);
      });
    }
    return new (r14 || (r14 = Promise))(function(o23, i21) {
      function f16(l21) {
        try {
          u16(n21.next(l21));
        } catch (y10) {
          i21(y10);
        }
      }
      function s21(l21) {
        try {
          u16(n21.throw(l21));
        } catch (y10) {
          i21(y10);
        }
      }
      function u16(l21) {
        l21.done ? o23(l21.value) : a21(l21.value).then(f16, s21);
      }
      u16((n21 = n21.apply(t17, e18 || [])).next());
    });
  }
  function d9(t17) {
    var e18 = typeof Symbol == "function" && Symbol.iterator, r14 = e18 && t17[e18], n21 = 0;
    if (r14)
      return r14.call(t17);
    if (t17 && typeof t17.length == "number")
      return { next: function() {
        return t17 && n21 >= t17.length && (t17 = void 0), { value: t17 && t17[n21++], done: !t17 };
      } };
    throw new TypeError(e18 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function h3(t17) {
    return this instanceof h3 ? (this.v = t17, this) : new h3(t17);
  }
  function M3(t17, e18, r14) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var n21 = r14.apply(t17, e18 || []), a21, o23 = [];
    return a21 = {}, i21("next"), i21("throw"), i21("return"), a21[Symbol.asyncIterator] = function() {
      return this;
    }, a21;
    function i21(c27) {
      n21[c27] && (a21[c27] = function(p21) {
        return new Promise(function(_2, x15) {
          o23.push([c27, p21, _2, x15]) > 1 || f16(c27, p21);
        });
      });
    }
    function f16(c27, p21) {
      try {
        s21(n21[c27](p21));
      } catch (_2) {
        y10(o23[0][3], _2);
      }
    }
    function s21(c27) {
      c27.value instanceof h3 ? Promise.resolve(c27.value.v).then(u16, l21) : y10(o23[0][2], c27);
    }
    function u16(c27) {
      f16("next", c27);
    }
    function l21(c27) {
      f16("throw", c27);
    }
    function y10(c27, p21) {
      c27(p21), o23.shift(), o23.length && f16(o23[0][0], o23[0][1]);
    }
  }
  function G2(t17) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var e18 = t17[Symbol.asyncIterator], r14;
    return e18 ? e18.call(t17) : (t17 = typeof d9 == "function" ? d9(t17) : t17[Symbol.iterator](), r14 = {}, n21("next"), n21("throw"), n21("return"), r14[Symbol.asyncIterator] = function() {
      return this;
    }, r14);
    function n21(o23) {
      r14[o23] = t17[o23] && function(i21) {
        return new Promise(function(f16, s21) {
          i21 = t17[o23](i21), a21(f16, s21, i21.done, i21.value);
        });
      };
    }
    function a21(o23, i21, f16, s21) {
      Promise.resolve(s21).then(function(u16) {
        o23({ value: u16, done: f16 });
      }, i21);
    }
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isArrayLike.js
  var t8 = (e18) => e18 && typeof e18.length == "number" && typeof e18 != "function";

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isPromise.js
  function r9(i21) {
    return t2(i21?.then);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isInteropObservable.js
  function i5(o23) {
    return t2(o23[o7]);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isAsyncIterable.js
  function o14(r14) {
    return Symbol.asyncIterator && t2(r14?.[Symbol.asyncIterator]);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/throwUnobservableError.js
  function r10(e18) {
    return new TypeError(`You provided ${e18 !== null && typeof e18 == "object" ? "an invalid object" : `'${e18}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/symbol/iterator.js
  function t9() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var r11 = t9();

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isIterable.js
  function m6(o23) {
    return t2(o23?.[r11]);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/isReadableStreamLike.js
  function c6(e18) {
    return M3(this, arguments, function* () {
      let t17 = e18.getReader();
      try {
        for (; ; ) {
          let { value: a21, done: i21 } = yield h3(t17.read());
          if (i21)
            return yield h3(void 0);
          yield yield h3(a21);
        }
      } finally {
        t17.releaseLock();
      }
    });
  }
  function s7(e18) {
    return t2(e18?.getReader);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/innerFrom.js
  function B3(r14) {
    if (r14 instanceof o8)
      return r14;
    if (r14 != null) {
      if (i5(r14))
        return I3(r14);
      if (t8(r14))
        return k3(r14);
      if (r9(r14))
        return A2(r14);
      if (o14(r14))
        return m7(r14);
      if (m6(r14))
        return L3(r14);
      if (s7(r14))
        return S3(r14);
    }
    throw r10(r14);
  }
  function I3(r14) {
    return new o8((e18) => {
      let o23 = r14[o7]();
      if (t2(o23.subscribe))
        return o23.subscribe(e18);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function k3(r14) {
    return new o8((e18) => {
      for (let o23 = 0; o23 < r14.length && !e18.closed; o23++)
        e18.next(r14[o23]);
      e18.complete();
    });
  }
  function A2(r14) {
    return new o8((e18) => {
      r14.then((o23) => {
        e18.closed || (e18.next(o23), e18.complete());
      }, (o23) => e18.error(o23)).then(null, m4);
    });
  }
  function L3(r14) {
    return new o8((e18) => {
      for (let o23 of r14)
        if (e18.next(o23), e18.closed)
          return;
      e18.complete();
    });
  }
  function m7(r14) {
    return new o8((e18) => {
      O2(r14, e18).catch((o23) => e18.error(o23));
    });
  }
  function S3(r14) {
    return m7(c6(r14));
  }
  function O2(r14, e18) {
    var o23, n21, f16, a21;
    return T2(this, void 0, void 0, function* () {
      try {
        for (o23 = G2(r14); n21 = yield o23.next(), !n21.done; ) {
          let l21 = n21.value;
          if (e18.next(l21), e18.closed)
            return;
        }
      } catch (l21) {
        f16 = { error: l21 };
      } finally {
        try {
          n21 && !n21.done && (a21 = o23.return) && (yield a21.call(o23));
        } finally {
          if (f16)
            throw f16.error;
        }
      }
      e18.complete();
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/executeSchedule.js
  function l10(e18, d17, i21, u16 = 0, s21 = false) {
    let c27 = d17.schedule(function() {
      i21(), s21 ? e18.add(this.schedule(null, u16)) : this.unsubscribe();
    }, u16);
    if (e18.add(c27), !s21)
      return c27;
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/observeOn.js
  function a6(t17, e18 = 0) {
    return l6((r14, o23) => {
      r14.subscribe(a4(o23, (m17) => l10(o23, t17, () => o23.next(m17), e18), () => l10(o23, t17, () => o23.complete(), e18), (m17) => l10(o23, t17, () => o23.error(m17), e18)));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/subscribeOn.js
  function c7(r14, o23 = 0) {
    return l6((t17, e18) => {
      e18.add(r14.schedule(() => t17.subscribe(e18), o23));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleObservable.js
  function b2(o23, r14) {
    return B3(o23).pipe(c7(r14), a6(r14));
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/schedulePromise.js
  function f8(o23, r14) {
    return B3(o23).pipe(c7(r14), a6(r14));
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleArray.js
  function c8(t17, n21) {
    return new o8((e18) => {
      let l21 = 0;
      return n21.schedule(function() {
        l21 === t17.length ? e18.complete() : (e18.next(t17[l21++]), e18.closed || this.schedule());
      });
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleIterable.js
  function c9(m17, r14) {
    return new o8((t17) => {
      let e18;
      return l10(t17, r14, () => {
        e18 = m17[r11](), l10(t17, r14, () => {
          let o23, n21;
          try {
            ({ value: o23, done: n21 } = e18.next());
          } catch (i21) {
            t17.error(i21);
            return;
          }
          n21 ? t17.complete() : t17.next(o23);
        }, 0, true);
      }), () => t2(e18?.return) && e18.return();
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleAsyncIterable.js
  function f9(t17, o23) {
    if (!t17)
      throw new Error("Iterable cannot be null");
    return new o8((e18) => {
      l10(e18, o23, () => {
        let l21 = t17[Symbol.asyncIterator]();
        l10(e18, o23, () => {
          l21.next().then((n21) => {
            n21.done ? e18.complete() : e18.next(n21.value);
          });
        }, 0, true);
      });
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduleReadableStreamLike.js
  function n9(e18, r14) {
    return f9(c6(e18), r14);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/scheduled/scheduled.js
  function T3(r14, e18) {
    if (r14 != null) {
      if (i5(r14))
        return b2(r14, e18);
      if (t8(r14))
        return c8(r14, e18);
      if (r9(r14))
        return f8(r14, e18);
      if (o14(r14))
        return f9(r14, e18);
      if (m6(r14))
        return c9(r14, e18);
      if (s7(r14))
        return n9(r14, e18);
    }
    throw r10(r14);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/from.js
  function e8(r14, o23) {
    return o23 ? T3(r14, o23) : B3(r14);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/of.js
  function p8(...o23) {
    let r14 = f7(o23);
    return e8(o23, r14);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/throwError.js
  function p9(n21, o23) {
    let e18 = t2(n21) ? n21 : () => n21, i21 = (t17) => t17.error(e18());
    return new o8(o23 ? (t17) => o23.schedule(i21, 0, t17) : i21);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/Notification.js
  var c10;
  (function(e18) {
    e18.NEXT = "N", e18.ERROR = "E", e18.COMPLETE = "C";
  })(c10 || (c10 = {}));
  var n10 = class {
    constructor(t17, o23, i21) {
      this.kind = t17, this.value = o23, this.error = i21, this.hasValue = t17 === "N";
    }
    observe(t17) {
      return E(this, t17);
    }
    do(t17, o23, i21) {
      let { kind: r14, value: l21, error: u16 } = this;
      return r14 === "N" ? t17?.(l21) : r14 === "E" ? o23?.(u16) : i21?.();
    }
    accept(t17, o23, i21) {
      var r14;
      return t2((r14 = t17) === null || r14 === void 0 ? void 0 : r14.next) ? this.observe(t17) : this.do(t17, o23, i21);
    }
    toObservable() {
      let { kind: t17, value: o23, error: i21 } = this, r14 = t17 === "N" ? p8(o23) : t17 === "E" ? p9(() => i21) : t17 === "C" ? o13 : 0;
      if (!r14)
        throw new TypeError(`Unexpected notification kind ${t17}`);
      return r14;
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
    var o23, i21, r14;
    let { kind: l21, value: u16, error: s21 } = e18;
    if (typeof l21 != "string")
      throw new TypeError('Invalid notification, missing "kind"');
    l21 === "N" ? (o23 = t17.next) === null || o23 === void 0 || o23.call(t17, u16) : l21 === "E" ? (i21 = t17.error) === null || i21 === void 0 || i21.call(t17, s21) : (r14 = t17.complete) === null || r14 === void 0 || r14.call(t17);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/EmptyError.js
  var s8 = e((r14) => function() {
    r14(this), this.name = "EmptyError", this.message = "no elements in sequence";
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/ArgumentOutOfRangeError.js
  var o15 = e((r14) => function() {
    r14(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/NotFoundError.js
  var e9 = e((r14) => function(o23) {
    r14(this), this.name = "NotFoundError", this.message = o23;
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/SequenceError.js
  var n11 = e((r14) => function(e18) {
    r14(this), this.name = "SequenceError", this.message = e18;
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/timeout.js
  var x2 = e((e18) => function(t17 = null) {
    e18(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t17;
  });

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/map.js
  function f10(e18, t17) {
    return l6((o23, r14) => {
      let p21 = 0;
      o23.subscribe(a4(r14, (a21) => {
        r14.next(e18.call(t17, a21, p21++));
      }));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/mapOneOrManyArgs.js
  var { isArray: o16 } = Array;
  function p10(n21, r14) {
    return o16(r14) ? n21(...r14) : n21(r14);
  }
  function c11(n21) {
    return f10((r14) => p10(n21, r14));
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/argsArgArrayOrObject.js
  var { isArray: o17 } = Array;
  var { getPrototypeOf: s9, prototype: y2, keys: c12 } = Object;

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/mergeInternals.js
  function S4(v7, t17, x15, c27, m17, p21, h10, r14) {
    let l21 = [], o23 = 0, C7 = 0, i21 = false, s21 = () => {
      i21 && !l21.length && !o23 && t17.complete();
    }, u16 = (f16) => o23 < c27 ? n21(f16) : l21.push(f16), n21 = (f16) => {
      p21 && t17.next(f16), o23++;
      let d17 = false;
      B3(x15(f16, C7++)).subscribe(a4(t17, (e18) => {
        m17?.(e18), p21 ? u16(e18) : t17.next(e18);
      }, () => {
        d17 = true;
      }, void 0, () => {
        if (d17)
          try {
            for (o23--; l21.length && o23 < c27; ) {
              let e18 = l21.shift();
              h10 ? l10(t17, h10, () => n21(e18)) : n21(e18);
            }
            s21();
          } catch (e18) {
            t17.error(e18);
          }
      }));
    };
    return v7.subscribe(a4(t17, u16, () => {
      i21 = true, s21();
    })), () => {
      r14?.();
    };
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/mergeMap.js
  function F5(o23, m17, f16 = 1 / 0) {
    return t2(m17) ? F5((i21, r14) => f10((n21, p21) => m17(i21, n21, r14, p21))(B3(o23(i21, r14))), f16) : (typeof m17 == "number" && (f16 = m17), l6((i21, r14) => S4(i21, r14, o23, f16)));
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/mergeAll.js
  function n12(r14 = 1 / 0) {
    return F5(n2, r14);
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/fromEventPattern.js
  function s10(r14, n21, i21) {
    return i21 ? s10(r14, n21).pipe(c11(i21)) : new o8((f16) => {
      let o23 = (...t17) => f16.next(t17.length === 1 ? t17[0] : t17), p21 = r14(o23);
      return t2(n21) ? () => n21(o23, p21) : void 0;
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/merge.js
  function g4(...o23) {
    let e18 = f7(o23), m17 = c5(o23, 1 / 0), r14 = o23;
    return r14.length ? r14.length === 1 ? B3(r14[0]) : n12(m17)(e8(r14, e18)) : o13;
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/observable/never.js
  var e10 = new o8(o5);

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/util/argsOrArgArray.js
  var { isArray: n13 } = Array;

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/filter.js
  function a7(t17, o23) {
    return l6((i21, r14) => {
      let n21 = 0;
      i21.subscribe(a4(r14, (e18) => t17.call(o23, e18, n21++) && r14.next(e18)));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/defaultIfEmpty.js
  function n14(o23) {
    return l6((r14, e18) => {
      let t17 = false;
      r14.subscribe(a4(e18, (a21) => {
        t17 = true, e18.next(a21);
      }, () => {
        t17 || e18.next(o23), e18.complete();
      }));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/take.js
  function x4(e18) {
    return e18 <= 0 ? () => o13 : l6((o23, r14) => {
      let t17 = 0;
      o23.subscribe(a4(r14, (m17) => {
        ++t17 <= e18 && (r14.next(m17), e18 <= t17 && r14.complete());
      }));
    });
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/throwIfEmpty.js
  function i12(e18 = n16) {
    return l6((o23, r14) => {
      let t17 = false;
      o23.subscribe(a4(r14, (m17) => {
        t17 = true, r14.next(m17);
      }, () => t17 ? r14.complete() : r14.error(e18())));
    });
  }
  function n16() {
    return new s8();
  }

  // https://esm.sh/v102/rxjs@7.8.0/deno/internal/operators/first.js
  function I4(t17, m17) {
    let o23 = arguments.length >= 2;
    return (r14) => r14.pipe(t17 ? a7((f16, i21) => t17(f16, i21, r14)) : n2, x4(1), o23 ? n14(m17) : i12(() => new s8()));
  }

  // https://esm.sh/v102/@extend-chrome/messages@1.2.2/deno/messages.js
  function A3(s21, r14) {
    var e18 = {};
    for (var n21 in s21)
      Object.prototype.hasOwnProperty.call(s21, n21) && r14.indexOf(n21) < 0 && (e18[n21] = s21[n21]);
    if (s21 != null && typeof Object.getOwnPropertySymbols == "function")
      for (var t17 = 0, n21 = Object.getOwnPropertySymbols(s21); t17 < n21.length; t17++)
        r14.indexOf(n21[t17]) < 0 && Object.prototype.propertyIsEnumerable.call(s21, n21[t17]) && (e18[n21[t17]] = s21[n21[t17]]);
    return e18;
  }
  var _ = /* @__PURE__ */ new Map();
  var F7 = (s21, r14) => {
    let e18 = _.get(s21);
    e18 && e18.delete(r14);
  };
  var T6 = (s21, r14) => {
    let e18 = _.get(s21);
    if (e18)
      return e18.get(r14);
  };
  var L4 = (s21, r14, e18) => {
    let n21 = _.get(s21) || /* @__PURE__ */ new Map();
    n21.set(r14, e18), _.has(s21) || _.set(s21, n21);
  };
  var k5 = (s21) => (r14) => {
    let e18 = (n21, t17) => {
      if (n21.async || n21.scope !== s21)
        return false;
      try {
        r14(n21.payload, t17);
      } catch (c27) {
        console.error("Uncaught error in chrome.runtime.onMessage listener"), console.error(c27);
      }
      return false;
    };
    chrome.runtime.onMessage.addListener(e18), L4(s21, r14, e18);
  };
  var q4 = (s21) => (r14) => {
    let e18 = (n21, t17, c27) => {
      if (n21.async && s21 === n21.scope)
        return o23(), true;
      return false;
      async function o23() {
        try {
          let i21 = (l21) => {
            c27({ success: true, payload: l21 });
          };
          await r14(n21.payload, t17, i21);
        } catch (i21) {
          let l21 = { success: false, payload: { greeting: i21.message } };
          console.error(i21), c27(l21);
        }
      }
    };
    chrome.runtime.onMessage.addListener(e18), L4(s21, r14, e18);
  };
  var N3 = (s21) => (r14) => {
    let e18 = T6(s21, r14);
    e18 && (F7(s21, r14), chrome.runtime.onMessage.removeListener(e18));
  };
  var w11 = class extends Error {
    constructor(r14) {
      var e18, n21, { coreMessage: t17 = null, coreResponse: c27 = null, message: o23 = ((n21 = (e18 = chrome.runtime) === null || e18 === void 0 ? void 0 : e18.lastError) === null || n21 === void 0 ? void 0 : n21.message) || c27?.payload.greeting || "chrome.runtime.lastError is undefined" } = r14;
      super(o23), this.coreMessage = t17, this.coreResponse = c27;
    }
  };
  var R3 = (s21) => (r14, { tabId: e18, frameId: n21 } = {}) => new Promise((t17, c27) => {
    let o23 = { async: false, tabId: e18 || null, payload: r14, scope: s21 }, i21 = (l21) => {
      if (chrome.runtime.lastError) {
        let y10 = chrome.runtime.lastError.message, b11 = "The message port closed before a response was received";
        y10 && y10.includes(b11) ? t17() : c27(new w11({ coreMessage: o23 }));
      } else
        l21 && !l21.success ? c27(l21.payload) : t17();
    };
    typeof e18 == "number" && typeof n21 == "number" ? chrome.tabs.sendMessage(e18, o23, { frameId: n21 }, i21) : typeof e18 == "number" ? chrome.tabs.sendMessage(e18, o23, i21) : chrome.runtime.sendMessage(o23, i21);
  });
  var U3 = (s21) => (r14, { tabId: e18, frameId: n21 } = {}) => new Promise((t17, c27) => {
    let o23 = { async: true, tabId: e18 || null, payload: r14, scope: s21 }, i21 = (l21) => {
      chrome.runtime.lastError || l21 === null || !l21.success ? c27(new w11({ coreMessage: o23, coreResponse: l21 })) : t17(l21.payload);
    };
    typeof e18 == "number" && typeof n21 == "number" ? chrome.tabs.sendMessage(e18, o23, { frameId: n21 }, i21) : typeof e18 == "number" ? chrome.tabs.sendMessage(e18, o23, i21) : chrome.runtime.sendMessage(o23, i21);
  });
  var S7 = (s21) => (r14 = () => true) => s21.pipe(I4(r14)).toPromise();
  function W2(s21) {
    let r14 = q4(s21), e18 = U3(s21), n21 = N3(s21), t17 = k5(s21), c27 = R3(s21);
    async function o23(a21, p21) {
      let m17 = p21 || {}, { async: g9 = false } = m17, h10 = A3(m17, ["async"]);
      return g9 ? e18(a21, h10) : c27(a21, h10);
    }
    function i21(a21) {
      p21(a21) ? t17(a21) : r14(a21);
      function p21(m17) {
        return m17.length < 3;
      }
    }
    function l21(a21) {
      return n21(a21);
    }
    let y10 = g4(s10(t17, n21), s10(r14, n21)), b11 = /* @__PURE__ */ new Set();
    function P4(a21, p21) {
      if (b11.has(a21))
        throw new Error("greeting is not unique");
      b11.add(a21);
      let { async: m17 } = p21 || {}, g9 = (u16, f16) => {
        f16 = f16 || {};
        let d17;
        typeof f16.tabId == "number" && (d17 = f16.tabId);
        let M6;
        return typeof f16.frameId == "number" && (M6 = f16.frameId), m17 ? o23({ greeting: a21, data: u16 }, { async: m17, tabId: d17, frameId: M6 }) : o23({ greeting: a21, data: u16 }, { tabId: d17, frameId: M6 });
      };
      if (g9.toTab = ({ tabId: u16 }) => m17 ? o23({ greeting: a21 }, { async: m17, tabId: u16 }) : o23({ greeting: a21 }, { tabId: u16 }), m17) {
        let u16 = y10.pipe(a7(h10), f10(([{ data: f16 }, d17, M6]) => [f16, d17, M6]), a7((f16) => f16.length === 3));
        return [g9, u16, S7(y10)];
      } else {
        let u16 = y10.pipe(a7(h10), f10(([{ data: f16 }, d17]) => [f16, d17]), a7((f16) => f16.length < 3));
        return [g9, u16, S7(u16)];
      }
      function h10([u16]) {
        return u16 && typeof u16 == "object" && u16.greeting === a21;
      }
    }
    return { send: o23, on: i21, off: l21, stream: y10, getMessage: P4 };
  }
  var z3 = "@extend-chrome/messages__root";
  var B5 = W2(z3);
  var { getMessage: H2 } = B5;

  // https://esm.sh/v102/p-throttle@5.0.0/deno/p-throttle.js
  var a18 = class extends Error {
    constructor() {
      super("Throttled function aborted"), this.name = "AbortError";
    }
  };
  function m15({ limit: i21, interval: s21, strict: f16 }) {
    if (!Number.isFinite(i21))
      throw new TypeError("Expected `limit` to be a finite number");
    if (!Number.isFinite(s21))
      throw new TypeError("Expected `interval` to be a finite number");
    let r14 = /* @__PURE__ */ new Map(), u16 = 0, c27 = 0;
    function p21() {
      let e18 = Date.now();
      return e18 - u16 > s21 ? (c27 = 1, u16 = e18, 0) : (c27 < i21 ? c27++ : (u16 += s21, c27 = 1), u16 - e18);
    }
    let n21 = [];
    function h10() {
      let e18 = Date.now();
      if (n21.length < i21)
        return n21.push(e18), 0;
      let t17 = n21.shift() + s21;
      return e18 >= t17 ? (n21.push(e18), 0) : (n21.push(t17), t17 - e18);
    }
    let w15 = f16 ? h10 : p21;
    return (e18) => {
      let t17 = function(...o23) {
        if (!t17.isEnabled)
          return (async () => e18.apply(this, o23))();
        let l21;
        return new Promise((d17, b11) => {
          l21 = setTimeout(() => {
            d17(e18.apply(this, o23)), r14.delete(l21);
          }, w15()), r14.set(l21, b11);
        });
      };
      return t17.abort = () => {
        for (let o23 of r14.keys())
          clearTimeout(o23), r14.get(o23)(new a18());
        r14.clear(), n21.splice(0, n21.length);
      }, t17.isEnabled = true, t17;
    };
  }

  // https://esm.sh/v102/@twind/core@1.0.1/deno/core.js
  var F8;
  function lt(t17) {
    return [...t17.v, (t17.i ? "!" : "") + t17.n].join(":");
  }
  function st(t17, e18 = ",") {
    return t17.map(lt).join(e18);
  }
  var W3 = typeof CSS < "u" && CSS.escape || ((t17) => t17.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  function V4(t17) {
    for (var e18 = 9, r14 = t17.length; r14--; )
      e18 = Math.imul(e18 ^ t17.charCodeAt(r14), 1597334677);
    return "#" + ((e18 ^ e18 >>> 9) >>> 0).toString(36);
  }
  function kt(t17, e18 = "@media ") {
    return e18 + x12(t17).map((r14) => (typeof r14 == "string" && (r14 = { min: r14 }), r14.raw || Object.keys(r14).map((n21) => `(${n21}-width:${r14[n21]})`).join(" and "))).join(",");
  }
  function x12(t17 = []) {
    return Array.isArray(t17) ? t17 : t17 == null ? [] : [t17];
  }
  function D4() {
  }
  var w12 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function jt(t17) {
    var e18;
    return ((e18 = t17.match(/[-=:;]/g)) == null ? void 0 : e18.length) || 0;
  }
  function X2(t17) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t17) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t17), 15) << 18;
  }
  var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function at({ n: t17, i: e18, v: r14 = [] }, n21, i21, l21) {
    for (let a21 of (t17 && (t17 = lt({ n: t17, i: e18, v: r14 })), l21 = [...x12(l21)], r14)) {
      let s21 = n21.theme("screens", a21);
      for (let u16 of x12(s21 && kt(s21) || n21.v(a21))) {
        var o23;
        l21.push(u16), i21 |= s21 ? 67108864 | X2(u16) : a21 == "dark" ? 1073741824 : u16[0] == "@" ? X2(u16) : (o23 = u16, 1 << ~(/:([a-z-]+)/.test(o23) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: t17, p: i21, r: l21, i: e18 };
  }
  var ut = /* @__PURE__ */ new Map();
  function tt(t17) {
    if (t17.d) {
      let e18 = [], r14 = Y2(t17.r.reduce((n21, i21) => i21[0] == "@" ? (e18.push(i21), n21) : i21 ? Y2(n21, (l21) => Y2(i21, (o23) => {
        let a21 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o23);
        if (a21) {
          let s21 = l21.indexOf(a21[1]);
          return ~s21 ? l21.slice(0, s21) + a21[0] + l21.slice(s21 + a21[1].length) : Z2(l21, o23);
        }
        return Z2(o23, l21);
      })) : n21, "&"), (n21) => Z2(n21, t17.n ? "." + W3(t17.n) : ""));
      return r14 && e18.push(r14.replace(/:merge\((.+?)\)/g, "$1")), e18.reduceRight((n21, i21) => i21 + "{" + n21 + "}", t17.d);
    }
  }
  function Y2(t17, e18) {
    return t17.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r14, n21, i21) => e18(n21) + i21);
  }
  function Z2(t17, e18) {
    return t17.replace(/&/g, e18);
  }
  var Dt = new Intl.Collator("en", { numeric: true });
  function St(t17, e18) {
    for (var r14 = 0, n21 = t17.length; r14 < n21; ) {
      let i21 = n21 + r14 >> 1;
      0 >= Mt(t17[i21], e18) ? r14 = i21 + 1 : n21 = i21;
    }
    return n21;
  }
  function Mt(t17, e18) {
    let r14 = t17.p & w12.o;
    return r14 == (e18.p & w12.o) && (r14 == w12.b || r14 == w12.o) ? 0 : t17.p - e18.p || t17.o - e18.o || Dt.compare(t17.n, e18.n);
  }
  function H3(t17, e18) {
    return Math.round(parseInt(t17, 16) * e18);
  }
  function T7(t17, e18 = {}) {
    if (typeof t17 == "function")
      return t17(e18);
    let { opacityValue: r14 = "1", opacityVariable: n21 } = e18, i21 = n21 ? `var(${n21})` : r14;
    if (t17.includes("<alpha-value>"))
      return t17.replace("<alpha-value>", i21);
    if (t17[0] == "#" && (t17.length == 4 || t17.length == 7)) {
      let l21 = (t17.length - 1) / 3, o23 = [17, 1, 0.062272][l21 - 1];
      return `rgba(${[H3(t17.substr(1, l21), o23), H3(t17.substr(1 + l21, l21), o23), H3(t17.substr(1 + 2 * l21, l21), o23), i21]})`;
    }
    return i21 == "1" ? t17 : i21 == "0" ? "#0000" : t17.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i21})`);
  }
  function ct(t17, e18, r14, n21, i21 = []) {
    return function l21(o23, { n: a21, p: s21, r: u16 = [], i: f16 }, c27) {
      let p21 = [], d17 = "", v7 = 0, g9 = 0;
      for (let h10 in o23 || {}) {
        var y10, A5;
        let b11 = o23[h10];
        if (h10[0] == "@") {
          if (!b11)
            continue;
          if (h10[1] == "a") {
            p21.push(...ht(a21, s21, N4("" + b11), c27, s21, u16, f16, true));
            continue;
          }
          if (h10[1] == "l") {
            for (let m17 of x12(b11))
              p21.push(...l21(m17, { n: a21, p: (y10 = w12[h10[7]], s21 & ~w12.o | y10), r: u16, i: f16 }, c27));
            continue;
          }
          if (h10[1] == "i") {
            p21.push(...x12(b11).map((m17) => ({ p: -1, o: 0, r: [], d: h10 + " " + m17 })));
            continue;
          }
          if (h10[1] == "k") {
            p21.push({ p: w12.d, o: 0, r: [h10], d: l21(b11, { p: w12.d }, c27).map(tt).join("") });
            continue;
          }
          if (h10[1] == "f") {
            p21.push(...x12(b11).map((m17) => ({ p: w12.d, o: 0, r: [h10], d: l21(m17, { p: w12.d }, c27).map(tt).join("") })));
            continue;
          }
        }
        if (typeof b11 != "object" || Array.isArray(b11))
          h10 == "label" && b11 ? a21 = b11 + V4(JSON.stringify([s21, f16, o23])) : (b11 || b11 === 0) && (h10 = h10.replace(/[A-Z]/g, (m17) => "-" + m17.toLowerCase()), g9 += 1, v7 = Math.max(v7, (A5 = h10)[0] == "-" ? 0 : jt(A5) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A5) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d17 += (d17 ? ";" : "") + x12(b11).map((m17) => c27.s(h10, ft("" + m17, c27.theme) + (f16 ? " !important" : ""))).join(";"));
        else if (h10[0] == "@" || h10.includes("&")) {
          let m17 = s21;
          h10[0] == "@" && (h10 = h10.replace(/\bscreen\(([^)]+)\)/g, (C7, $3) => {
            let j9 = c27.theme("screens", $3);
            return j9 ? (m17 |= 67108864, kt(j9, "")) : C7;
          }), m17 |= X2(h10)), p21.push(...l21(b11, { n: a21, p: m17, r: [...u16, h10], i: f16 }, c27));
        } else
          p21.push(...l21(b11, { p: s21, r: [...u16, h10] }, c27));
      }
      return p21.unshift({ n: a21, p: s21, o: Math.max(0, 15 - g9) + 1.5 * Math.min(v7 || 15, 15), r: u16, d: d17 }), p21.sort(Mt);
    }(t17, at(e18, r14, n21, i21), r14);
  }
  function ft(t17, e18) {
    return t17.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r14, n21, i21, l21, o23) => {
      let a21 = e18(i21, o23);
      return typeof a21 == "function" && /color|fill|stroke/i.test(i21) ? T7(a21) : "" + a21;
    });
  }
  function pt(t17, e18) {
    let r14, n21 = [];
    for (let i21 of t17)
      i21.d && i21.n ? r14?.p == i21.p && "" + r14.r == "" + i21.r ? (r14.c = [r14.c, i21.c].filter(Boolean).join(" "), r14.d = r14.d + ";" + i21.d) : n21.push(r14 = { ...i21, n: i21.n && e18 }) : n21.push({ ...i21, n: i21.n && e18 });
    return n21;
  }
  function B6(t17, e18, r14 = w12.u, n21, i21) {
    let l21 = [];
    for (let o23 of t17)
      for (let a21 of function(s21, u16, f16, c27, p21) {
        var d17;
        s21 = { ...s21, i: s21.i || p21 };
        let v7 = function(g9, y10) {
          let A5 = ut.get(g9.n);
          return A5 ? A5(g9, y10) : y10.r(g9.n, g9.v[0] == "dark");
        }(s21, u16);
        return v7 ? typeof v7 == "string" ? ({ r: c27, p: f16 } = at(s21, u16, f16, c27), pt(B6(N4(v7), u16, f16, c27, s21.i), s21.n)) : Array.isArray(v7) ? v7.map((g9) => {
          var y10, A5;
          return { o: 0, ...g9, r: [...x12(c27), ...x12(g9.r)], p: (y10 = f16, A5 = (d17 = g9.p) != null ? d17 : f16, y10 & ~w12.o | A5) };
        }) : ct(v7, s21, u16, f16, c27) : [{ c: lt(s21), p: 0, o: 0, r: [] }];
      }(o23, e18, r14, n21, i21))
        l21.splice(St(l21, a21), 0, a21);
    return l21;
  }
  function ht(t17, e18, r14, n21, i21, l21, o23, a21) {
    return pt((a21 ? r14.flatMap((s21) => B6([s21], n21, i21, l21, o23)) : B6(r14, n21, i21, l21, o23)).map((s21) => s21.p & w12.o && (s21.n || e18 == w12.b) ? { ...s21, p: s21.p & ~w12.o | e18, o: 0 } : s21), t17);
  }
  function Ot(t17, e18, r14, n21) {
    var i21;
    return i21 = (l21, o23) => {
      let { n: a21, p: s21, r: u16, i: f16 } = at(l21, o23, e18);
      return r14 && ht(a21, e18, r14, o23, s21, u16, f16, n21);
    }, ut.set(t17, i21), t17;
  }
  function K2(t17, e18) {
    if (t17[t17.length - 1] != "(") {
      let r14 = [], n21 = false, i21 = false, l21 = "";
      for (let o23 of t17)
        if (!(o23 == "(" || /[~@]$/.test(o23))) {
          if (o23[0] == "!" && (o23 = o23.slice(1), n21 = !n21), o23.endsWith(":")) {
            r14[o23 == "dark:" ? "unshift" : "push"](o23.slice(0, -1));
            continue;
          }
          o23[0] == "-" && (o23 = o23.slice(1), i21 = !i21), o23.endsWith("-") && (o23 = o23.slice(0, -1)), o23 && o23 != "&" && (l21 += (l21 && "-") + o23);
        }
      l21 && (i21 && (l21 = "-" + l21), e18[0].push({ n: l21, v: r14.filter(Jt), i: n21 }));
    }
  }
  function Jt(t17, e18, r14) {
    return r14.indexOf(t17) == e18;
  }
  var yt = /* @__PURE__ */ new Map();
  function N4(t17) {
    let e18 = yt.get(t17);
    if (!e18) {
      let r14 = [], n21 = [[]], i21 = 0, l21 = 0, o23 = null, a21 = 0, s21 = (u16, f16 = 0) => {
        i21 != a21 && (r14.push(t17.slice(i21, a21 + f16)), u16 && K2(r14, n21)), i21 = a21 + 1;
      };
      for (; a21 < t17.length; a21++) {
        let u16 = t17[a21];
        if (l21)
          t17[a21 - 1] != "\\" && (l21 += +(u16 == "[") || -(u16 == "]"));
        else if (u16 == "[")
          l21 += 1;
        else if (o23)
          t17[a21 - 1] != "\\" && o23.test(t17.slice(a21)) && (o23 = null, i21 = a21 + RegExp.lastMatch.length);
        else if (u16 == "/" && t17[a21 - 1] != "\\" && (t17[a21 + 1] == "*" || t17[a21 + 1] == "/"))
          o23 = t17[a21 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (u16 == "(")
          s21(), r14.push(u16);
        else if (u16 == ":")
          t17[a21 + 1] != ":" && s21(false, 1);
        else if (/[\s,)]/.test(u16)) {
          s21(true);
          let f16 = r14.lastIndexOf("(");
          if (u16 == ")") {
            let c27 = r14[f16 - 1];
            if (/[~@]$/.test(c27)) {
              let p21 = n21.shift();
              r14.length = f16, K2([...r14, "#"], n21);
              let { v: d17 } = n21[0].pop();
              for (let v7 of p21)
                v7.v.splice(+(v7.v[0] == "dark") - +(d17[0] == "dark"), d17.length);
              K2([...r14, Ot(c27.length > 1 ? c27.slice(0, -1) + V4(JSON.stringify([c27, p21])) : c27 + "(" + st(p21) + ")", w12.a, p21, /@$/.test(c27))], n21);
            }
            f16 = r14.lastIndexOf("(", f16 - 1);
          }
          r14.length = f16 + 1;
        } else
          /[~@]/.test(u16) && t17[a21 + 1] == "(" && n21.unshift([]);
      }
      s21(true), yt.set(t17, e18 = n21[0]);
    }
    return e18;
  }
  function Ct(t17, e18, r14) {
    return e18.reduce((n21, i21, l21) => n21 + r14(i21) + t17[l21 + 1], t17[0]);
  }
  function G3(t17, e18) {
    return Array.isArray(t17) && Array.isArray(t17.raw) ? Ct(t17, e18, (r14) => Q2(r14).trim()) : e18.filter(Boolean).reduce((r14, n21) => r14 + Q2(n21), t17 ? Q2(t17) : "");
  }
  function Q2(t17) {
    let e18, r14 = "";
    if (t17 && typeof t17 == "object")
      if (Array.isArray(t17))
        (e18 = G3(t17[0], t17.slice(1))) && (r14 += " " + e18);
      else
        for (let n21 in t17)
          t17[n21] && (r14 += " " + n21);
    else
      t17 != null && typeof t17 != "boolean" && (r14 += " " + t17);
    return r14;
  }
  var ae = Et("@");
  var ue = Et("~");
  function Et(t17) {
    return new Proxy(function(r14, ...n21) {
      return e18("", r14, n21);
    }, { get: (r14, n21) => n21 in r14 ? r14[n21] : function(i21, ...l21) {
      return e18(n21, i21, l21);
    } });
    function e18(r14, n21, i21) {
      return st(N4(r14 + t17 + "(" + G3(n21, i21) + ")"));
    }
  }
  function U4(t17, e18) {
    return Array.isArray(t17) ? mt(Ct(t17, e18, (r14) => r14 != null && typeof r14 != "boolean" ? r14 : "")) : typeof t17 == "string" ? mt(t17) : [t17];
  }
  var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function mt(t17) {
    let e18;
    t17 = t17.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r14 = [{}], n21 = [r14[0]], i21 = [];
    for (; e18 = Bt.exec(t17); )
      e18[4] && (r14.shift(), i21.shift()), e18[3] ? (i21.unshift(e18[3]), r14.unshift({}), n21.push(i21.reduce((l21, o23) => ({ [o23]: l21 }), r14[0]))) : e18[4] || (r14[0][e18[1]] && (r14.unshift({}), n21.push(i21.reduce((l21, o23) => ({ [o23]: l21 }), r14[0]))), r14[0][e18[1]] = e18[2]);
    return n21;
  }
  function dt(t17, ...e18) {
    var r14, n21;
    let i21 = U4(t17, e18), l21 = (((r14 = i21.find((o23) => o23.label)) == null ? void 0 : r14.label) || "css") + V4(JSON.stringify(i21));
    return n21 = (o23, a21) => pt(i21.flatMap((s21) => ct(s21, o23, a21, w12.o)), l21), ut.set(l21, n21), l21;
  }
  var ce2 = new Proxy(function(t17, e18) {
    return bt("animation", t17, e18);
  }, { get: (t17, e18) => e18 in t17 ? t17[e18] : function(r14, n21) {
    return bt(e18, r14, n21);
  } });
  function bt(t17, e18, r14) {
    return { toString: () => dt({ label: t17, "@layer components": { ...typeof e18 == "object" ? e18 : { animation: e18 }, animationName: "" + r14 } }) };
  }
  var Ut = Symbol();
  var z4 = new Proxy(D4, { apply: (t17, e18, r14) => F8(r14[0]), get(t17, e18) {
    let r14 = F8[e18];
    return typeof r14 == "function" ? function() {
      return r14.apply(F8, arguments);
    } : r14;
  } });
  var xe = function t16(e18) {
    return new Proxy(function(r14, ...n21) {
      return xt(e18, "", r14, n21);
    }, { get: (r14, n21) => n21 === "bind" ? t16 : n21 in r14 ? r14[n21] : function(i21, ...l21) {
      return xt(e18, n21, i21, l21);
    } });
  }();
  function xt(t17, e18, r14, n21) {
    return { toString() {
      let i21 = U4(r14, n21), l21 = W3(e18 + V4(JSON.stringify([e18, i21])));
      return (typeof t17 == "function" ? t17 : z4)(dt({ [`@keyframes ${l21}`]: U4(r14, n21) })), l21;
    } };
  }

  // https://esm.sh/v102/@twind/preset-tailwind@1.0.1/deno/defaultTheme.js
  var s19 = "inherit";
  var d16 = "currentColor";
  var p16 = "transparent";
  var x13 = "#000";
  var b9 = "#fff";
  var u14 = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" };
  var g7 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" };
  var h8 = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" };
  var y8 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" };
  var k6 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" };
  var C5 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" };
  var T8 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" };
  var F9 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" };
  var w13 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" };
  var A4 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" };
  var D5 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" };
  var U5 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" };
  var E4 = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" };
  var L5 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" };
  var S8 = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" };
  var v5 = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" };
  var z5 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" };
  var O5 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" };
  var R4 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" };
  var W4 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" };
  var I6 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" };
  var M5 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" };
  var l19 = { __proto__: null, inherit: s19, current: d16, transparent: p16, black: x13, white: b9, slate: u14, gray: g7, zinc: h8, neutral: y8, stone: k6, red: C5, orange: T8, amber: F9, yellow: w13, lime: A4, green: D5, emerald: U5, teal: E4, cyan: L5, sky: S8, blue: v5, indigo: z5, violet: O5, purple: R4, fuchsia: W4, pink: I6, rose: M5 };
  var H4 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: l19, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...a19(4, "rem", 4, 0.5, 0.5), ...a19(12, "rem", 4, 5), 14: "3.5rem", ...a19(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: o22("blur"), backdropBrightness: o22("brightness"), backdropContrast: o22("contrast"), backdropGrayscale: o22("grayscale"), backdropHueRotate: o22("hueRotate"), backdropInvert: o22("invert"), backdropOpacity: o22("opacity"), backdropSaturate: o22("saturate"), backdropSepia: o22("sepia"), backgroundColor: o22("colors"), backgroundImage: { none: "none" }, backgroundOpacity: o22("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...a19(200, "", 100, 0, 50), ...a19(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e18 }) => ({ DEFAULT: e18("colors.gray.200", "currentColor"), ...e18("colors") }), borderOpacity: o22("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: o22("spacing"), borderWidth: { DEFAULT: "1px", ...n20(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: o22("colors"), caretColor: o22("colors"), accentColor: ({ theme: e18 }) => ({ auto: "auto", ...e18("colors") }), contrast: { ...a19(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: o22("borderColor"), divideOpacity: o22("borderOpacity"), divideWidth: o22("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: o22("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e18 }) => ({ ...e18("spacing"), ...i19(2, 6), ...i19(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: o22("spacing"), gradientColorStops: o22("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e18 }) => ({ ...e18("spacing"), ...i19(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e18 }) => ({ ...e18("spacing"), ...i19(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...a19(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e18 }) => ({ auto: "auto", ...e18("spacing") }), maxHeight: ({ theme: e18 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e18("spacing") }), maxWidth: ({ theme: e18, breakpoints: f16 }) => ({ ...f16(e18("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...a19(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: o22("spacing"), placeholderColor: o22("colors"), placeholderOpacity: o22("opacity"), outlineColor: o22("colors"), outlineOffset: n20(8, "px"), outlineWidth: n20(8, "px"), ringColor: ({ theme: e18 }) => ({ ...e18("colors"), DEFAULT: e18("colors.blue.500", "#3b82f6") }), ringOffsetColor: o22("colors"), ringOffsetWidth: n20(8, "px"), ringOpacity: ({ theme: e18 }) => ({ ...e18("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...n20(8, "px") }, rotate: { ...n20(2, "deg"), ...n20(12, "deg", 3), ...n20(180, "deg", 45) }, saturate: a19(200, "", 100, 0, 50), scale: { ...a19(150, "", 100, 0, 50), ...a19(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: o22("spacing"), scrollPadding: o22("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...n20(2, "deg"), ...n20(12, "deg", 3) }, space: o22("spacing"), stroke: o22("colors"), strokeWidth: a19(2), textColor: o22("colors"), textDecorationColor: o22("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...n20(8, "px") }, textUnderlineOffset: { auto: "auto", ...n20(8, "px") }, textIndent: o22("spacing"), textOpacity: o22("opacity"), transitionDuration: ({ theme: e18 }) => ({ ...e18("durations"), DEFAULT: "150ms" }), transitionDelay: o22("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e18 }) => ({ ...e18("spacing"), ...i19(2, 4), full: "100%" }), width: ({ theme: e18 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e18("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...a19(50, "", 1, 0, 10), auto: "auto" } };
  function i19(e18, f16) {
    let t17 = {};
    do
      for (var r14 = 1; r14 < e18; r14++)
        t17[`${r14}/${e18}`] = Number((r14 / e18 * 100).toFixed(6)) + "%";
    while (++e18 <= f16);
    return t17;
  }
  function n20(e18, f16, t17 = 0) {
    let r14 = {};
    for (; t17 <= e18; t17 = 2 * t17 || 1)
      r14[t17] = t17 + f16;
    return r14;
  }
  function a19(e18, f16 = "", t17 = 1, r14 = 0, m17 = 1, c27 = {}) {
    for (; r14 <= e18; r14 += m17)
      c27[r14] = r14 / t17 + f16;
    return c27;
  }
  function o22(e18) {
    return ({ theme: f16 }) => f16(e18);
  }

  // https://esm.sh/v102/@twind/preset-tailwind@1.0.1/deno/preflight.js
  var i20 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${H4.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${H4.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } };

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
    for (var t17 = 9, r14 = e18.length; r14--; )
      t17 = Math.imul(t17 ^ e18.charCodeAt(r14), 1597334677);
    return "#" + ((t17 ^ t17 >>> 9) >>> 0).toString(36);
  }
  function Ce(e18, t17 = "@media ") {
    return t17 + b10(e18).map((r14) => (typeof r14 == "string" && (r14 = { min: r14 }), r14.raw || Object.keys(r14).map((i21) => `(${i21}-width:${r14[i21]})`).join(" and "))).join(",");
  }
  function b10(e18 = []) {
    return Array.isArray(e18) ? e18 : e18 == null ? [] : [e18];
  }
  function F10() {
  }
  var S9 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
  function Ee(e18) {
    return e18.match(/[-=:;]/g)?.length || 0;
  }
  function re2(e18) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e18) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e18), 15) << 18;
  }
  var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
  function ce3({ n: e18, i: t17, v: r14 = [] }, i21, n21, l21) {
    e18 && (e18 = ae2({ n: e18, i: t17, v: r14 })), l21 = [...b10(l21)];
    for (let s21 of r14) {
      let f16 = i21.theme("screens", s21);
      for (let a21 of b10(f16 && Ce(f16) || i21.v(s21))) {
        var o23;
        l21.push(a21), n21 |= f16 ? 67108864 | re2(a21) : s21 == "dark" ? 1073741824 : a21[0] == "@" ? re2(a21) : (o23 = a21, 1 << ~(/:([a-z-]+)/.test(o23) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
      }
    }
    return { n: e18, p: n21, r: l21, i: t17 };
  }
  var pe = /* @__PURE__ */ new Map();
  function ne2(e18) {
    if (e18.d) {
      let t17 = [], r14 = H5(e18.r.reduce((i21, n21) => n21[0] == "@" ? (t17.push(n21), i21) : n21 ? H5(i21, (l21) => H5(n21, (o23) => {
        let s21 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o23);
        if (s21) {
          let f16 = l21.indexOf(s21[1]);
          return ~f16 ? l21.slice(0, f16) + s21[0] + l21.slice(f16 + s21[1].length) : Q3(l21, o23);
        }
        return Q3(o23, l21);
      })) : i21, "&"), (i21) => Q3(i21, e18.n ? "." + Y3(e18.n) : ""));
      return r14 && t17.push(r14.replace(/:merge\((.+?)\)/g, "$1")), t17.reduceRight((i21, n21) => n21 + "{" + i21 + "}", e18.d);
    }
  }
  function H5(e18, t17) {
    return e18.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r14, i21, n21) => t17(i21) + n21);
  }
  function Q3(e18, t17) {
    return e18.replace(/&/g, t17);
  }
  var $e = new Intl.Collator("en", { numeric: true });
  function Me(e18, t17) {
    for (var r14 = 0, i21 = e18.length; r14 < i21; ) {
      let n21 = i21 + r14 >> 1;
      0 >= Ne(e18[n21], t17) ? r14 = n21 + 1 : i21 = n21;
    }
    return i21;
  }
  function Ne(e18, t17) {
    let r14 = e18.p & S9.o;
    return r14 == (t17.p & S9.o) && (r14 == S9.b || r14 == S9.o) ? 0 : e18.p - t17.p || e18.o - t17.o || $e.compare(we(e18.n), we(t17.n)) || $e.compare(Ae(e18.n), Ae(t17.n));
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
    let { opacityValue: r14 = "1", opacityVariable: i21 } = t17, n21 = i21 ? `var(${i21})` : r14;
    if (e18.includes("<alpha-value>"))
      return e18.replace("<alpha-value>", n21);
    if (e18[0] == "#" && (e18.length == 4 || e18.length == 7)) {
      let l21 = (e18.length - 1) / 3, o23 = [17, 1, 0.062272][l21 - 1];
      return `rgba(${[X3(e18.substr(1, l21), o23), X3(e18.substr(1 + l21, l21), o23), X3(e18.substr(1 + 2 * l21, l21), o23), n21]})`;
    }
    return n21 == "1" ? e18 : n21 == "0" ? "#0000" : e18.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n21})`);
  }
  function de(e18, t17, r14, i21, n21 = []) {
    return function l21(o23, { n: s21, p: f16, r: a21 = [], i: c27 }, u16) {
      let p21 = [], g9 = "", h10 = 0, $3 = 0;
      for (let y10 in o23 || {}) {
        var A5, R6;
        let d17 = o23[y10];
        if (y10[0] == "@") {
          if (!d17)
            continue;
          if (y10[1] == "a") {
            p21.push(...ge(s21, f16, I7("" + d17), u16, f16, a21, c27, true));
            continue;
          }
          if (y10[1] == "l") {
            for (let w15 of b10(d17))
              p21.push(...l21(w15, { n: s21, p: (A5 = S9[y10[7]], f16 & ~S9.o | A5), r: a21, i: c27 }, u16));
            continue;
          }
          if (y10[1] == "i") {
            p21.push(...b10(d17).map((w15) => ({ p: -1, o: 0, r: [], d: y10 + " " + w15 })));
            continue;
          }
          if (y10[1] == "k") {
            p21.push({ p: S9.d, o: 0, r: [y10], d: l21(d17, { p: S9.d }, u16).map(ne2).join("") });
            continue;
          }
          if (y10[1] == "f") {
            p21.push(...b10(d17).map((w15) => ({ p: S9.d, o: 0, r: [y10], d: l21(w15, { p: S9.d }, u16).map(ne2).join("") })));
            continue;
          }
        }
        if (typeof d17 != "object" || Array.isArray(d17))
          y10 == "label" && d17 ? s21 = d17 + T9(JSON.stringify([f16, c27, o23])) : (d17 || d17 === 0) && (y10 = y10.replace(/[A-Z]/g, (w15) => "-" + w15.toLowerCase()), $3 += 1, h10 = Math.max(h10, (R6 = y10)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g9 += (g9 ? ";" : "") + b10(d17).map((w15) => u16.s(y10, he("" + w15, u16.theme) + (c27 ? " !important" : ""))).join(";"));
        else if (y10[0] == "@" || y10.includes("&")) {
          let w15 = f16;
          y10[0] == "@" && (y10 = y10.replace(/\bscreen\(([^)]+)\)/g, (j9, M6) => {
            let N6 = u16.theme("screens", M6);
            return N6 ? (w15 |= 67108864, Ce(N6, "")) : j9;
          }), w15 |= re2(y10)), p21.push(...l21(d17, { n: s21, p: w15, r: [...a21, y10], i: c27 }, u16));
        } else
          p21.push(...l21(d17, { p: f16, r: [...a21, y10] }, u16));
      }
      return p21.unshift({ n: s21, p: f16, o: Math.max(0, 15 - $3) + 1.5 * Math.min(h10 || 15, 15), r: a21, d: g9 }), p21.sort(Ne);
    }(e18, ce3(t17, r14, i21, n21), r14);
  }
  function he(e18, t17) {
    return e18.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r14, i21, n21, l21, o23 = "") => {
      let s21 = t17(n21, o23);
      return typeof s21 == "function" && /color|fill|stroke/i.test(n21) ? P3(s21) : "" + b10(s21).filter((f16) => Object(f16) !== f16);
    });
  }
  function ye(e18, t17) {
    let r14, i21 = [];
    for (let n21 of e18)
      n21.d && n21.n ? r14?.p == n21.p && "" + r14.r == "" + n21.r ? (r14.c = [r14.c, n21.c].filter(Boolean).join(" "), r14.d = r14.d + ";" + n21.d) : i21.push(r14 = { ...n21, n: n21.n && t17 }) : i21.push({ ...n21, n: n21.n && t17 });
    return i21;
  }
  function W5(e18, t17, r14 = S9.u, i21, n21) {
    let l21 = [];
    for (let o23 of e18)
      for (let s21 of function(f16, a21, c27, u16, p21) {
        f16 = { ...f16, i: f16.i || p21 };
        let g9 = function(h10, $3) {
          let A5 = pe.get(h10.n);
          return A5 ? A5(h10, $3) : $3.r(h10.n, h10.v[0] == "dark");
        }(f16, a21);
        return g9 ? typeof g9 == "string" ? ({ r: u16, p: c27 } = ce3(f16, a21, c27, u16), ye(W5(I7(g9), a21, c27, u16, f16.i), f16.n)) : Array.isArray(g9) ? g9.map((h10) => {
          var $3, A5;
          return { o: 0, ...h10, r: [...b10(u16), ...b10(h10.r)], p: ($3 = c27, A5 = h10.p ?? c27, $3 & ~S9.o | A5) };
        }) : de(g9, f16, a21, c27, u16) : [{ c: ae2(f16), p: 0, o: 0, r: [] }];
      }(o23, t17, r14, i21, n21))
        l21.splice(Me(l21, s21), 0, s21);
    return l21;
  }
  function ge(e18, t17, r14, i21, n21, l21, o23, s21) {
    return ye((s21 ? r14.flatMap((f16) => W5([f16], i21, n21, l21, o23)) : W5(r14, i21, n21, l21, o23)).map((f16) => f16.p & S9.o && (f16.n || t17 == S9.b) ? { ...f16, p: f16.p & ~S9.o | t17, o: 0 } : f16), e18);
  }
  function _e2(e18, t17, r14, i21) {
    var n21;
    return n21 = (l21, o23) => {
      let { n: s21, p: f16, r: a21, i: c27 } = ce3(l21, o23, t17);
      return r14 && ge(s21, t17, r14, o23, f16, a21, c27, i21);
    }, pe.set(e18, n21), e18;
  }
  function K3(e18, t17, r14) {
    if (e18[e18.length - 1] != "(") {
      let i21 = [], n21 = false, l21 = false, o23 = "";
      for (let s21 of e18)
        if (!(s21 == "(" || /[~@]$/.test(s21))) {
          if (s21[0] == "!" && (s21 = s21.slice(1), n21 = !n21), s21.endsWith(":")) {
            i21[s21 == "dark:" ? "unshift" : "push"](s21.slice(0, -1));
            continue;
          }
          s21[0] == "-" && (s21 = s21.slice(1), l21 = !l21), s21.endsWith("-") && (s21 = s21.slice(0, -1)), s21 && s21 != "&" && (o23 += (o23 && "-") + s21);
        }
      o23 && (l21 && (o23 = "-" + o23), t17[0].push({ n: o23, v: i21.filter(Be), i: n21 }));
    }
  }
  function Be(e18, t17, r14) {
    return r14.indexOf(e18) == t17;
  }
  var Se = /* @__PURE__ */ new Map();
  function I7(e18) {
    let t17 = Se.get(e18);
    if (!t17) {
      let r14 = [], i21 = [[]], n21 = 0, l21 = 0, o23 = null, s21 = 0, f16 = (a21, c27 = 0) => {
        n21 != s21 && (r14.push(e18.slice(n21, s21 + c27)), a21 && K3(r14, i21)), n21 = s21 + 1;
      };
      for (; s21 < e18.length; s21++) {
        let a21 = e18[s21];
        if (l21)
          e18[s21 - 1] != "\\" && (l21 += +(a21 == "[") || -(a21 == "]"));
        else if (a21 == "[")
          l21 += 1;
        else if (o23)
          e18[s21 - 1] != "\\" && o23.test(e18.slice(s21)) && (o23 = null, n21 = s21 + RegExp.lastMatch.length);
        else if (a21 == "/" && e18[s21 - 1] != "\\" && (e18[s21 + 1] == "*" || e18[s21 + 1] == "/"))
          o23 = e18[s21 + 1] == "*" ? /^\*\// : /^[\r\n]/;
        else if (a21 == "(")
          f16(), r14.push(a21);
        else if (a21 == ":")
          e18[s21 + 1] != ":" && f16(false, 1);
        else if (/[\s,)]/.test(a21)) {
          f16(true);
          let c27 = r14.lastIndexOf("(");
          if (a21 == ")") {
            let u16 = r14[c27 - 1];
            if (/[~@]$/.test(u16)) {
              let p21 = i21.shift();
              r14.length = c27, K3([...r14, "#"], i21);
              let { v: g9 } = i21[0].pop();
              for (let h10 of p21)
                h10.v.splice(+(h10.v[0] == "dark") - +(g9[0] == "dark"), g9.length);
              K3([...r14, _e2(u16.length > 1 ? u16.slice(0, -1) + T9(JSON.stringify([u16, p21])) : u16 + "(" + ue2(p21) + ")", S9.a, p21, /@$/.test(u16))], i21);
            }
            c27 = r14.lastIndexOf("(", c27 - 1);
          }
          r14.length = c27 + 1;
        } else
          /[~@]/.test(a21) && e18[s21 + 1] == "(" && i21.unshift([]);
      }
      f16(true), Se.set(e18, t17 = i21[0]);
    }
    return t17;
  }
  function Ve(e18, t17, r14) {
    return t17.reduce((i21, n21, l21) => i21 + r14(n21) + e18[l21 + 1], e18[0]);
  }
  function Z3(e18, t17) {
    return Array.isArray(e18) && Array.isArray(e18.raw) ? Ve(e18, t17, (r14) => ee2(r14).trim()) : t17.filter(Boolean).reduce((r14, i21) => r14 + ee2(i21), e18 ? ee2(e18) : "");
  }
  function ee2(e18) {
    let t17, r14 = "";
    if (e18 && typeof e18 == "object")
      if (Array.isArray(e18))
        (t17 = Z3(e18[0], e18.slice(1))) && (r14 += " " + t17);
      else
        for (let i21 in e18)
          e18[i21] && (r14 += " " + i21);
    else
      e18 != null && typeof e18 != "boolean" && (r14 += " " + e18);
    return r14;
  }
  var pt2 = ze("@");
  var dt2 = ze("~");
  function ze(e18) {
    return new Proxy(function(i21, ...n21) {
      return t17("", i21, n21);
    }, { get(r14, i21) {
      return i21 in r14 ? r14[i21] : function(l21, ...o23) {
        return t17(i21, l21, o23);
      };
    } });
    function t17(r14, i21, n21) {
      return ue2(I7(r14 + e18 + "(" + Z3(i21, n21) + ")"));
    }
  }
  function G4(e18, t17) {
    return Array.isArray(e18) ? ve(Ve(e18, t17, (r14) => r14 != null && typeof r14 != "boolean" ? r14 : "")) : typeof e18 == "string" ? ve(e18) : [e18];
  }
  var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
  function ve(e18) {
    let t17;
    e18 = e18.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let r14 = [{}], i21 = [r14[0]], n21 = [];
    for (; t17 = We.exec(e18); )
      t17[4] && (r14.shift(), n21.shift()), t17[3] ? (n21.unshift(t17[3]), r14.unshift({}), i21.push(n21.reduce((l21, o23) => ({ [o23]: l21 }), r14[0]))) : t17[4] || (r14[0][t17[1]] && (r14.unshift({}), i21.push(n21.reduce((l21, o23) => ({ [o23]: l21 }), r14[0]))), r14[0][t17[1]] = t17[2]);
    return i21;
  }
  function me(e18, ...t17) {
    var r14;
    let i21 = G4(e18, t17), n21 = (i21.find((l21) => l21.label)?.label || "css") + T9(JSON.stringify(i21));
    return r14 = (l21, o23) => ye(i21.flatMap((s21) => de(s21, l21, o23, S9.o)), n21), pe.set(n21, r14), n21;
  }
  var ht2 = new Proxy(function(e18, t17) {
    return Re("animation", e18, t17);
  }, { get(e18, t17) {
    return t17 in e18 ? e18[t17] : function(i21, n21) {
      return Re(t17, i21, n21);
    };
  } });
  function Re(e18, t17, r14) {
    return { toString() {
      return me({ label: e18, "@layer components": { ...typeof t17 == "object" ? t17 : { animation: t17 }, animationName: "" + r14 } });
    } };
  }
  function yt2(e18, t17, r14) {
    return [e18, ie(t17, r14)];
  }
  function ie(e18, t17) {
    return typeof e18 == "function" ? e18 : typeof e18 == "string" && /^[\w-]+$/.test(e18) ? (r14, i21) => ({ [e18]: t17 ? t17(r14, i21) : le(r14, 1) }) : (r14) => e18 || { [r14[1]]: le(r14, 2) };
  }
  function le(e18, t17, r14 = e18.slice(t17).find(Boolean) || e18.$$ || e18.input) {
    return e18.input[0] == "-" ? `calc(${r14} * -1)` : r14;
  }
  function gt(e18, t17, r14, i21) {
    return [e18, Ge(t17, r14, i21)];
  }
  function Ge(e18, t17, r14) {
    let i21 = typeof t17 == "string" ? (n21, l21) => ({ [t17]: r14 ? r14(n21, l21) : n21._ }) : t17 || (({ 1: n21, _: l21 }, o23, s21) => ({ [n21 || s21]: l21 }));
    return (n21, l21) => {
      let o23 = ke(e18 || n21[1]), s21 = l21.theme(o23, n21.$$) ?? oe2(n21.$$, o23, l21);
      if (s21 != null)
        return n21._ = le(n21, 0, s21), i21(n21, l21, o23);
    };
  }
  function mt2(e18, t17 = {}, r14) {
    return [e18, Ye(t17, r14)];
  }
  function Ye(e18 = {}, t17) {
    return (r14, i21) => {
      let { section: n21 = ke(r14[0]).replace("-", "") + "Color" } = e18, [l21, o23] = Ze(r14.$$);
      if (!l21)
        return;
      let s21 = i21.theme(n21, l21) || oe2(l21, n21, i21);
      if (!s21 || typeof s21 == "object")
        return;
      let { opacityVariable: f16 = `--tw-${r14[0].replace(/-$/, "")}-opacity`, opacitySection: a21 = n21.replace("Color", "Opacity"), property: c27 = n21, selector: u16 } = e18, p21 = i21.theme(a21, o23 || "DEFAULT") || o23 && oe2(o23, a21, i21), g9 = t17 || (({ _: $3 }) => {
        let A5 = He(c27, $3);
        return u16 ? { [u16]: A5 } : A5;
      });
      r14._ = { value: P3(s21, { opacityVariable: f16 || void 0, opacityValue: p21 || void 0 }), color: ($3) => P3(s21, $3), opacityVariable: f16 || void 0, opacityValue: p21 || void 0 };
      let h10 = g9(r14, i21);
      if (!r14.dark) {
        let $3 = i21.d(n21, l21, s21);
        $3 && $3 !== s21 && (r14._ = { value: P3($3, { opacityVariable: f16 || void 0, opacityValue: p21 || "1" }), color: (A5) => P3($3, A5), opacityVariable: f16 || void 0, opacityValue: p21 || void 0 }, h10 = { "&": h10, [i21.v("dark")]: g9(r14, i21) });
      }
      return h10;
    };
  }
  function Ze(e18) {
    return (e18.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
  }
  function He(e18, t17) {
    let r14 = {};
    return typeof t17 == "string" ? r14[e18] = t17 : (t17.opacityVariable && t17.value.includes(t17.opacityVariable) && (r14[t17.opacityVariable] = t17.opacityValue || "1"), r14[e18] = t17.value), r14;
  }
  function oe2(e18, t17, r14) {
    if (e18[0] == "[" && e18.slice(-1) == "]") {
      if (e18 = se(he(e18.slice(1, -1), r14.theme)), !t17)
        return e18;
      if (!(/color|fill|stroke/i.test(t17) && !(/^color:/.test(e18) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e18)) || /image/i.test(t17) && !(/^image:/.test(e18) || /^[a-z-]+\(/.test(e18)) || /weight/i.test(t17) && !(/^(number|any):/.test(e18) || /^\d+$/.test(e18)) || /position/i.test(t17) && /^(length|size):/.test(e18)))
        return e18.replace(/^[a-z-]+:/, "");
    }
  }
  function ke(e18) {
    return e18.replace(/-./g, (t17) => t17[1].toUpperCase());
  }
  function se(e18) {
    return e18.includes("url(") ? e18.replace(/(.*?)(url\(.*?\))(.*?)/g, (t17, r14 = "", i21, n21 = "") => se(r14) + i21 + se(n21)) : e18.replace(/(^|[^\\])_+/g, (t17, r14) => r14 + " ".repeat(t17.length - r14.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t17) => t17.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
  }
  var Qe = Symbol();
  var D6 = new Proxy(F10, { apply(e18, t17, r14) {
    return B7(r14[0]);
  }, get(e18, t17) {
    let r14 = B7[t17];
    return typeof r14 == "function" ? function() {
      return r14.apply(B7, arguments);
    } : r14;
  } });
  var Rt = function e17(t17) {
    return new Proxy(function(i21, ...n21) {
      return xe2(t17, "", i21, n21);
    }, { get(r14, i21) {
      return i21 === "bind" ? e17 : i21 in r14 ? r14[i21] : function(l21, ...o23) {
        return xe2(t17, i21, l21, o23);
      };
    } });
  }();
  function xe2(e18, t17, r14, i21) {
    return { toString() {
      let n21 = G4(r14, i21), l21 = Y3(t17 + T9(JSON.stringify([t17, n21])));
      return (typeof e18 == "function" ? e18 : D6)(me({ [`@keyframes ${l21}`]: G4(r14, i21) })), l21;
    } };
  }

  // https://esm.sh/v102/@twind/preset-tailwind@1.0.1/deno/rules.js
  var j8 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: t17, 2: r14 }, a21) => ({ "@layer overrides": { "&": { [t17]: oe2(`[${r14}]`, t17, a21) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: t17 }, { h: r14 }) => [{ c: r14(t17) }]), gt("aspect-", "aspectRatio"), yt2("container", (t17, { theme: r14 }) => {
    let { screens: a21 = r14("screens"), center: i21, padding: l21 } = r14("container"), d17 = { width: "100%", marginRight: i21 && "auto", marginLeft: i21 && "auto", ...g9("xs") };
    for (let f16 in a21) {
      let c27 = a21[f16];
      typeof c27 == "string" && (d17[Ce(c27)] = { "&": { maxWidth: c27, ...g9(f16) } });
    }
    return d17;
    function g9(f16) {
      let c27 = l21 && (typeof l21 == "string" ? l21 : l21[f16] || l21.DEFAULT);
      if (c27)
        return { paddingRight: c27, paddingLeft: c27 };
    }
  }), gt("content-", "content", ({ _: t17 }) => ({ "--tw-content": t17, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: t17 }) => t17 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", u15), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: t17 = "", 2: r14 }) => ({ ["overscroll-behavior" + t17]: r14 })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: t17, _: r14 }) => ({ top: t17 != "-x" && r14, right: t17 != "-y" && r14, bottom: t17 != "-x" && r14, left: t17 != "-y" && r14 })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", v6), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", $2), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", S10), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", $2), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", S10), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (t17) => u15(v6(t17))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", x14), yt2("(content|items|self)-", (t17) => ({ ["align-" + t17[1]]: x14(t17) })), yt2("(place-(content|items|self))-", ({ 1: t17, $$: r14 }) => ({ [t17]: ("wun".includes(r14[3]) ? "space-" : "") + r14 })), gt("p([xytrbl])?(?:$|-)", "padding", w14("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", w14("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: t17, _: r14 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t17}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[t17]]: `calc(${r14} * calc(1 - var(--tw-space-${t17}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[t17]]: `calc(${r14} * var(--tw-space-${t17}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: t17 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t17}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", s20), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: t17, 2: r14 = "", 3: a21 }) => r14 == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a21 ? "numeric-fraction" : "pt".includes(r14[0]) ? "numeric-spacing" : r14 ? "numeric-figure" : t17)]: t17, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: t17 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": t17 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: t17 }) => typeof t17 == "string" ? { fontSize: t17 } : { fontSize: t17[0], ...typeof t17[1] == "string" ? { lineHeight: t17[1] } : t17[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: false, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: false, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: false, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: t17 }) => `linear-gradient(to ${p17(t17, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t17 }) => ({ "--tw-gradient-from": t17.value, "--tw-gradient-to": t17.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t17 }) => ({ "--tw-gradient-to": t17.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${t17.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: false, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: t17 }) => t17 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: t17 }) => t17 + (t17 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", u15), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: t17, _: r14 }) => {
    let a21 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[t17] || [t17, t17];
    return { [`border-${p17(a21[0])}-radius`]: r14, [`border-${p17(a21[1])}-radius`]: r14 };
  }), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: t17, _: r14 }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (t17 || "-x")]: r14, ["--tw-border-spacing" + (t17 || "-y")]: r14, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, w14("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", w14("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: t17 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": t17 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: t17 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: t17 } })), yt2("divide-([xy]-reverse)", ({ 1: t17 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + t17]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: t17, _: r14 }) => {
    let a21 = { x: "lr", y: "tb" }[t17];
    return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${t17}-reverse`]: "0", [`border-${p17(a21[0])}Width`]: `calc(${r14} * calc(1 - var(--tw-divide-${t17}-reverse)))`, [`border-${p17(a21[1])}Width`]: `calc(${r14} * var(--tw-divide-${t17}-reverse))` } };
  }), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: false }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: t17 }, { theme: r14 }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t17} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r14("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P3(r14("ringOffsetColor", "", "#fff")), "--tw-ring-color": P3(r14("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r14("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: false, opacitySection: "opacity" }, ({ _: t17 }) => ({ "--tw-shadow-color": t17.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: t17 }) => ({ "--tw-shadow": s20(t17), "--tw-shadow-colored": s20(t17).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...k7(), ...k7("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (t17, { theme: r14 }) => ({ transitionProperty: s20(t17), transitionTimingFunction: t17._ == "none" ? void 0 : s20(r14("transitionTimingFunction", "")), transitionDuration: t17._ == "none" ? void 0 : s20(r14("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", s20), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", s20), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", s20), gt("animate(?:$|-)", "animation", (t17, { theme: r14, h: a21 }) => {
    let i21 = s20(t17), l21 = i21.split(" "), d17 = r14("keyframes", l21[0]);
    return d17 ? { ["@keyframes " + (l21[0] = a21(l21[0]))]: d17, animation: l21.join(" ") } : { animation: i21 };
  }), "(transform)-(none)", yt2("transform", h9), yt2("transform-(cpu|gpu)", ({ 1: t17 }) => ({ "--tw-transform": C6(t17 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: t17, _: r14 }) => ({ ["--tw-scale" + (t17 || "-x")]: r14, ["--tw-scale" + (t17 || "-y")]: r14, ...h9() })), gt("-?(rotate)-", "rotate", y9), gt("-?(translate-[xy])-", "translate", y9), gt("-?(skew-[xy])-", "skew", y9), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", u15), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: t17 }) => ({ "scroll-snap-type": t17 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", w14("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", w14("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: t17, 2: r14, 3: a21 }) => ({ [`--tw-${r14 ? "pan-x" : a21 ? "pan-y" : t17}`]: t17, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: false, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: t17 }) => ({ x: "horizontal", y: "vertical" })[t17] || t17 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: false, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: false, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
  function u15(t17) {
    return (typeof t17 == "string" ? t17 : t17[1]).replace(/-/g, " ").trim();
  }
  function v6(t17) {
    return (typeof t17 == "string" ? t17 : t17[1]).replace("col", "column");
  }
  function p17(t17, r14 = "-") {
    let a21 = [];
    for (let i21 of t17)
      a21.push({ t: "top", r: "right", b: "bottom", l: "left" }[i21]);
    return a21.join(r14);
  }
  function s20(t17) {
    return t17 && "" + (t17._ || t17);
  }
  function x14({ $$: t17 }) {
    return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[t17[3] || ""] || "") + t17;
  }
  function w14(t17, r14 = "") {
    return ({ 1: a21, _: i21 }) => {
      let l21 = { x: "lr", y: "tb" }[a21] || a21 + a21;
      return l21 ? { ...He(t17 + "-" + p17(l21[0]) + r14, i21), ...He(t17 + "-" + p17(l21[1]) + r14, i21) } : He(t17 + r14, i21);
    };
  }
  function k7(t17 = "") {
    let r14 = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", t17 && "opacity", "saturate", "sepia", !t17 && "drop-shadow"].filter(Boolean), a21 = {};
    for (let i21 of r14)
      a21[`--tw-${t17}${i21}`] = "var(--tw-empty,/*!*/ /*!*/)";
    return a21 = { [`${t17}filter`]: r14.map((i21) => `var(--tw-${t17}${i21})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a21 } }, [`(${t17}filter)-(none)`, yt2(`${t17}filter`, a21), ...r14.map((i21) => gt(`${i21[0] == "h" ? "-?" : ""}(${t17}${i21})(?:$|-)`, i21, ({ 1: l21, _: d17 }) => ({ [`--tw-${l21}`]: b10(d17).map((g9) => `${i21}(${g9})`).join(" "), ...a21 })))];
  }
  function y9({ 1: t17, _: r14 }) {
    return { ["--tw-" + t17]: r14, ...h9() };
  }
  function h9() {
    return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": C6() } } };
  }
  function C6(t17) {
    return [t17 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
  }
  function S10({ 1: t17, 2: r14 }) {
    return `${t17} ${r14} / ${t17} ${r14}`;
  }
  function $2({ 1: t17 }) {
    return `repeat(${t17},minmax(0,1fr))`;
  }

  // https://esm.sh/v102/notie@4.3.1/deno/notie.js
  var Me2 = Object.create;
  var xe3 = Object.defineProperty;
  var He2 = Object.getOwnPropertyDescriptor;
  var Se2 = Object.getOwnPropertyNames;
  var we2 = Object.getPrototypeOf;
  var Oe = Object.prototype.hasOwnProperty;
  var Ae2 = (y10, o23) => () => (o23 || y10((o23 = { exports: {} }).exports, o23), o23.exports);
  var De = (y10, o23, v7, b11) => {
    if (o23 && typeof o23 == "object" || typeof o23 == "function")
      for (let m17 of Se2(o23))
        !Oe.call(y10, m17) && m17 !== v7 && xe3(y10, m17, { get: () => o23[m17], enumerable: !(b11 = He2(o23, m17)) || b11.enumerable });
    return y10;
  };
  var Ie = (y10, o23, v7) => (v7 = y10 != null ? Me2(we2(y10)) : {}, De(o23 || !y10 || !y10.__esModule ? xe3(v7, "default", { value: y10, enumerable: true }) : v7, y10));
  var ye2 = Ae2((ie3, pe2) => {
    (function(y10, o23) {
      typeof ie3 == "object" && typeof pe2 == "object" ? pe2.exports = o23() : typeof define == "function" && define.amd ? define([], o23) : typeof ie3 == "object" ? ie3.notie = o23() : y10.notie = o23();
    })(ie3, function() {
      return function(y10) {
        function o23(b11) {
          if (v7[b11])
            return v7[b11].exports;
          var m17 = v7[b11] = { i: b11, l: false, exports: {} };
          return y10[b11].call(m17.exports, m17, m17.exports, o23), m17.l = true, m17.exports;
        }
        var v7 = {};
        return o23.m = y10, o23.c = v7, o23.i = function(b11) {
          return b11;
        }, o23.d = function(b11, m17, ce4) {
          o23.o(b11, m17) || Object.defineProperty(b11, m17, { configurable: false, enumerable: true, get: ce4 });
        }, o23.n = function(b11) {
          var m17 = b11 && b11.__esModule ? function() {
            return b11.default;
          } : function() {
            return b11;
          };
          return o23.d(m17, "a", m17), m17;
        }, o23.o = function(b11, m17) {
          return Object.prototype.hasOwnProperty.call(b11, m17);
        }, o23.p = "", o23(o23.s = 1);
      }([function(y10, o23) {
        y10.exports = function(v7) {
          return v7.webpackPolyfill || (v7.deprecate = function() {
          }, v7.paths = [], v7.children || (v7.children = []), Object.defineProperty(v7, "loaded", { enumerable: true, get: function() {
            return v7.l;
          } }), Object.defineProperty(v7, "id", { enumerable: true, get: function() {
            return v7.i;
          } }), v7.webpackPolyfill = 1), v7;
        };
      }, function(y10, o23, v7) {
        "use strict";
        (function(b11) {
          var m17, ce4, re3, V5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A5) {
            return typeof A5;
          } : function(A5) {
            return A5 && typeof Symbol == "function" && A5.constructor === Symbol && A5 !== Symbol.prototype ? "symbol" : typeof A5;
          };
          (function(A5, u16) {
            V5(o23) === "object" && V5(b11) === "object" ? b11.exports = u16() : (ce4 = [], m17 = u16, re3 = typeof m17 == "function" ? m17.apply(o23, ce4) : m17, re3 !== void 0 && (b11.exports = re3));
          })(void 0, function() {
            return function(A5) {
              function u16(g9) {
                if (X4[g9])
                  return X4[g9].exports;
                var T10 = X4[g9] = { i: g9, l: false, exports: {} };
                return A5[g9].call(T10.exports, T10, T10.exports, u16), T10.l = true, T10.exports;
              }
              var X4 = {};
              return u16.m = A5, u16.c = X4, u16.i = function(g9) {
                return g9;
              }, u16.d = function(g9, T10, B8) {
                u16.o(g9, T10) || Object.defineProperty(g9, T10, { configurable: false, enumerable: true, get: B8 });
              }, u16.n = function(g9) {
                var T10 = g9 && g9.__esModule ? function() {
                  return g9.default;
                } : function() {
                  return g9;
                };
                return u16.d(T10, "a", T10), T10;
              }, u16.o = function(g9, T10) {
                return Object.prototype.hasOwnProperty.call(g9, T10);
              }, u16.p = "", u16(u16.s = 0);
            }([function(A5, u16, X4) {
              function g9(t17, c27) {
                var s21 = {};
                for (var d17 in t17)
                  c27.indexOf(d17) >= 0 || Object.prototype.hasOwnProperty.call(t17, d17) && (s21[d17] = t17[d17]);
                return s21;
              }
              Object.defineProperty(u16, "__esModule", { value: true });
              var T10 = typeof Symbol == "function" && V5(Symbol.iterator) === "symbol" ? function(t17) {
                return typeof t17 > "u" ? "undefined" : V5(t17);
              } : function(t17) {
                return t17 && typeof Symbol == "function" && t17.constructor === Symbol && t17 !== Symbol.prototype ? "symbol" : typeof t17 > "u" ? "undefined" : V5(t17);
              }, B8 = Object.assign || function(t17) {
                for (var c27 = 1; c27 < arguments.length; c27++) {
                  var s21 = arguments[c27];
                  for (var d17 in s21)
                    Object.prototype.hasOwnProperty.call(s21, d17) && (t17[d17] = s21[d17]);
                }
                return t17;
              }, J2 = { top: "top", bottom: "bottom" }, e18 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: true, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J2.top, force: J2.top, confirm: J2.top, input: J2.top, select: J2.bottom, date: J2.top } }, ge2 = u16.setOptions = function(t17) {
                e18 = B8({}, e18, t17, { classes: B8({}, e18.classes, t17.classes), ids: B8({}, e18.ids, t17.ids), positions: B8({}, e18.positions, t17.positions) });
              }, fe = function() {
                return new Promise(function(t17) {
                  return setTimeout(t17, 0);
                });
              }, oe3 = function(t17) {
                return new Promise(function(c27) {
                  return setTimeout(c27, 1e3 * t17);
                });
              }, R6 = function() {
                document.activeElement && document.activeElement.blur();
              }, W6 = function() {
                var t17 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c27) {
                  var s21 = 16 * Math.random() | 0, d17 = c27 === "x" ? s21 : 3 & s21 | 8;
                  return d17.toString(16);
                });
                return "notie-" + t17;
              }, le2 = { 1: e18.classes.backgroundSuccess, success: e18.classes.backgroundSuccess, 2: e18.classes.backgroundWarning, warning: e18.classes.backgroundWarning, 3: e18.classes.backgroundError, error: e18.classes.backgroundError, 4: e18.classes.backgroundInfo, info: e18.classes.backgroundInfo, 5: e18.classes.backgroundNeutral, neutral: e18.classes.backgroundNeutral }, me2 = function() {
                return e18.transitionSelector + " " + e18.transitionDuration + "s " + e18.transitionCurve;
              }, $3 = function(t17) {
                return t17.keyCode === 13;
              }, ee3 = function(t17) {
                return t17.keyCode === 27;
              }, K5 = function(t17, c27) {
                t17.classList.add(e18.classes.container), t17.style[c27] = "-10000px", document.body.appendChild(t17), t17.style[c27] = "-" + t17.offsetHeight + "px", t17.listener && window.addEventListener("keydown", t17.listener), fe().then(function() {
                  t17.style.transition = me2(), t17.style[c27] = 0;
                });
              }, O6 = function(t17, c27) {
                var s21 = document.getElementById(t17);
                s21 && (s21.style[c27] = "-" + s21.offsetHeight + "px", s21.listener && window.removeEventListener("keydown", s21.listener), oe3(e18.transitionDuration).then(function() {
                  s21.parentNode && s21.parentNode.removeChild(s21);
                }));
              }, te = function(t17, c27) {
                var s21 = document.createElement("div");
                s21.id = e18.ids.overlay, s21.classList.add(e18.classes.overlay), s21.classList.add(e18.classes.backgroundOverlay), s21.style.opacity = 0, t17 && e18.overlayClickDismiss && (s21.onclick = function() {
                  O6(t17.id, c27), j9();
                }), document.body.appendChild(s21), fe().then(function() {
                  s21.style.transition = me2(), s21.style.opacity = e18.overlayOpacity;
                });
              }, j9 = function() {
                var t17 = document.getElementById(e18.ids.overlay);
                t17.style.opacity = 0, oe3(e18.transitionDuration).then(function() {
                  t17.parentNode && t17.parentNode.removeChild(t17);
                });
              }, F11 = u16.hideAlerts = function(t17) {
                var c27 = document.getElementsByClassName(e18.classes.alert);
                if (c27.length) {
                  for (var s21 = 0; s21 < c27.length; s21++) {
                    var d17 = c27[s21];
                    O6(d17.id, d17.position);
                  }
                  t17 && oe3(e18.transitionDuration).then(function() {
                    return t17();
                  });
                }
              }, he2 = u16.alert = function(t17) {
                var c27 = t17.type, s21 = c27 === void 0 ? 4 : c27, d17 = t17.text, i21 = t17.time, k8 = i21 === void 0 ? e18.alertTime : i21, H6 = t17.stay, S12 = H6 !== void 0 && H6, h10 = t17.position, p21 = h10 === void 0 ? e18.positions.alert || p21.top : h10;
                R6(), F11();
                var l21 = document.createElement("div"), f16 = W6();
                l21.id = f16, l21.position = p21, l21.classList.add(e18.classes.textbox), l21.classList.add(le2[s21]), l21.classList.add(e18.classes.alert), l21.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d17 + "</div>", l21.onclick = function() {
                  return O6(f16, p21);
                }, l21.listener = function(n21) {
                  ($3(n21) || ee3(n21)) && F11();
                }, K5(l21, p21), k8 && k8 < 1 && (k8 = 1), !S12 && k8 && oe3(k8).then(function() {
                  return O6(f16, p21);
                });
              }, ke2 = u16.force = function(t17, c27) {
                var s21 = t17.type, d17 = s21 === void 0 ? 5 : s21, i21 = t17.text, k8 = t17.buttonText, H6 = k8 === void 0 ? "OK" : k8, S12 = t17.callback, h10 = t17.position, p21 = h10 === void 0 ? e18.positions.force || p21.top : h10;
                R6(), F11();
                var l21 = document.createElement("div"), f16 = W6();
                l21.id = f16;
                var n21 = document.createElement("div");
                n21.classList.add(e18.classes.textbox), n21.classList.add(e18.classes.backgroundInfo), n21.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + i21 + "</div>";
                var r14 = document.createElement("div");
                r14.classList.add(e18.classes.button), r14.classList.add(le2[d17]), r14.innerHTML = H6, r14.onclick = function() {
                  O6(f16, p21), j9(), S12 ? S12() : c27 && c27();
                }, l21.appendChild(n21), l21.appendChild(r14), l21.listener = function(C7) {
                  $3(C7) && r14.click();
                }, K5(l21, p21), te();
              }, Ce2 = u16.confirm = function(t17, c27, s21) {
                var d17 = t17.text, i21 = t17.submitText, k8 = i21 === void 0 ? "Yes" : i21, H6 = t17.cancelText, S12 = H6 === void 0 ? "Cancel" : H6, h10 = t17.submitCallback, p21 = t17.cancelCallback, l21 = t17.position, f16 = l21 === void 0 ? e18.positions.confirm || f16.top : l21;
                R6(), F11();
                var n21 = document.createElement("div"), r14 = W6();
                n21.id = r14;
                var C7 = document.createElement("div");
                C7.classList.add(e18.classes.textbox), C7.classList.add(e18.classes.backgroundInfo), C7.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d17 + "</div>";
                var x15 = document.createElement("div");
                x15.classList.add(e18.classes.button), x15.classList.add(e18.classes.elementHalf), x15.classList.add(e18.classes.backgroundSuccess), x15.innerHTML = k8, x15.onclick = function() {
                  O6(r14, f16), j9(), h10 ? h10() : c27 && c27();
                };
                var a21 = document.createElement("div");
                a21.classList.add(e18.classes.button), a21.classList.add(e18.classes.elementHalf), a21.classList.add(e18.classes.backgroundError), a21.innerHTML = S12, a21.onclick = function() {
                  O6(r14, f16), j9(), p21 ? p21() : s21 && s21();
                }, n21.appendChild(C7), n21.appendChild(x15), n21.appendChild(a21), n21.listener = function(E5) {
                  $3(E5) ? x15.click() : ee3(E5) && a21.click();
                }, K5(n21, f16), te(n21, f16);
              }, ve2 = function(t17, c27, s21) {
                var d17 = t17.text, i21 = t17.submitText, k8 = i21 === void 0 ? "Submit" : i21, H6 = t17.cancelText, S12 = H6 === void 0 ? "Cancel" : H6, h10 = t17.submitCallback, p21 = t17.cancelCallback, l21 = t17.position, f16 = l21 === void 0 ? e18.positions.input || f16.top : l21, n21 = g9(t17, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
                R6(), F11();
                var r14 = document.createElement("div"), C7 = W6();
                r14.id = C7;
                var x15 = document.createElement("div");
                x15.classList.add(e18.classes.textbox), x15.classList.add(e18.classes.backgroundInfo), x15.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + d17 + "</div>";
                var a21 = document.createElement("input");
                a21.classList.add(e18.classes.inputField), a21.setAttribute("autocapitalize", n21.autocapitalize || "none"), a21.setAttribute("autocomplete", n21.autocomplete || "off"), a21.setAttribute("autocorrect", n21.autocorrect || "off"), a21.setAttribute("autofocus", n21.autofocus || "true"), a21.setAttribute("inputmode", n21.inputmode || "verbatim"), a21.setAttribute("max", n21.max || ""), a21.setAttribute("maxlength", n21.maxlength || ""), a21.setAttribute("min", n21.min || ""), a21.setAttribute("minlength", n21.minlength || ""), a21.setAttribute("placeholder", n21.placeholder || ""), a21.setAttribute("spellcheck", n21.spellcheck || "default"), a21.setAttribute("step", n21.step || "any"), a21.setAttribute("type", n21.type || "text"), a21.value = n21.value || "", n21.allowed && (a21.oninput = function() {
                  var M6 = void 0;
                  if (Array.isArray(n21.allowed)) {
                    for (var w15 = "", _2 = n21.allowed, P4 = 0; P4 < _2.length; P4++)
                      _2[P4] === "an" ? w15 += "0-9a-zA-Z" : _2[P4] === "a" ? w15 += "a-zA-Z" : _2[P4] === "n" && (w15 += "0-9"), _2[P4] === "s" && (w15 += " ");
                    M6 = new RegExp("[^" + w15 + "]", "g");
                  } else
                    T10(n21.allowed) === "object" && (M6 = n21.allowed);
                  a21.value = a21.value.replace(M6, "");
                });
                var E5 = document.createElement("div");
                E5.classList.add(e18.classes.button), E5.classList.add(e18.classes.elementHalf), E5.classList.add(e18.classes.backgroundSuccess), E5.innerHTML = k8, E5.onclick = function() {
                  O6(C7, f16), j9(), h10 ? h10(a21.value) : c27 && c27(a21.value);
                };
                var D8 = document.createElement("div");
                D8.classList.add(e18.classes.button), D8.classList.add(e18.classes.elementHalf), D8.classList.add(e18.classes.backgroundError), D8.innerHTML = S12, D8.onclick = function() {
                  O6(C7, f16), j9(), p21 ? p21(a21.value) : s21 && s21(a21.value);
                }, r14.appendChild(x15), r14.appendChild(a21), r14.appendChild(E5), r14.appendChild(D8), r14.listener = function(M6) {
                  $3(M6) ? E5.click() : ee3(M6) && D8.click();
                }, K5(r14, f16), a21.focus(), te(r14, f16);
              };
              u16.input = ve2;
              var Ee2 = u16.select = function(t17, c27) {
                var s21 = t17.text, d17 = t17.cancelText, i21 = d17 === void 0 ? "Cancel" : d17, k8 = t17.cancelCallback, H6 = t17.choices, S12 = t17.position, h10 = S12 === void 0 ? e18.positions.select || h10.top : S12;
                R6(), F11();
                var p21 = document.createElement("div"), l21 = W6();
                p21.id = l21;
                var f16 = document.createElement("div");
                f16.classList.add(e18.classes.textbox), f16.classList.add(e18.classes.backgroundInfo), f16.innerHTML = '<div class="' + e18.classes.textboxInner + '">' + s21 + "</div>", p21.appendChild(f16), H6.forEach(function(r14, C7) {
                  var x15 = r14.type, a21 = x15 === void 0 ? 1 : x15, E5 = r14.text, D8 = r14.handler, M6 = document.createElement("div");
                  M6.classList.add(le2[a21]), M6.classList.add(e18.classes.button), M6.classList.add(e18.classes.selectChoice);
                  var w15 = H6[C7 + 1];
                  w15 && !w15.type && (w15.type = 1), w15 && w15.type === a21 && M6.classList.add(e18.classes.selectChoiceRepeated), M6.innerHTML = E5, M6.onclick = function() {
                    O6(l21, h10), j9(), D8();
                  }, p21.appendChild(M6);
                });
                var n21 = document.createElement("div");
                n21.classList.add(e18.classes.backgroundNeutral), n21.classList.add(e18.classes.button), n21.innerHTML = i21, n21.onclick = function() {
                  O6(l21, h10), j9(), k8 ? k8() : c27 && c27();
                }, p21.appendChild(n21), p21.listener = function(r14) {
                  ee3(r14) && n21.click();
                }, K5(p21, h10), te(p21, h10);
              }, Te = u16.date = function(t17, c27, s21) {
                var d17 = t17.value, i21 = d17 === void 0 ? new Date() : d17, k8 = t17.submitText, H6 = k8 === void 0 ? "OK" : k8, S12 = t17.cancelText, h10 = S12 === void 0 ? "Cancel" : S12, p21 = t17.submitCallback, l21 = t17.cancelCallback, f16 = t17.position, n21 = f16 === void 0 ? e18.positions.date || n21.top : f16;
                R6(), F11();
                var r14 = "&#9662", C7 = document.createElement("div"), x15 = document.createElement("div"), a21 = document.createElement("div"), E5 = function(L6) {
                  C7.innerHTML = e18.dateMonths[L6.getMonth()], x15.innerHTML = L6.getDate(), a21.innerHTML = L6.getFullYear();
                }, D8 = function(L6) {
                  var N6 = new Date(i21.getFullYear(), i21.getMonth() + 1, 0).getDate(), Q4 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                  Number(Q4) > N6 && (Q4 = N6.toString()), L6.target.textContent = Q4, Number(Q4) < 1 && (Q4 = "1"), i21.setDate(Number(Q4));
                }, M6 = function(L6) {
                  var N6 = L6.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                  L6.target.textContent = N6, i21.setFullYear(Number(N6));
                }, w15 = function(L6) {
                  E5(i21);
                }, _2 = function(L6) {
                  var N6 = new Date(i21.getFullYear(), i21.getMonth() + L6 + 1, 0).getDate();
                  i21.getDate() > N6 && i21.setDate(N6), i21.setMonth(i21.getMonth() + L6), E5(i21);
                }, P4 = function(L6) {
                  i21.setDate(i21.getDate() + L6), E5(i21);
                }, be = function(L6) {
                  var N6 = i21.getFullYear() + L6;
                  N6 < 0 ? i21.setFullYear(0) : i21.setFullYear(i21.getFullYear() + L6), E5(i21);
                }, Y4 = document.createElement("div"), de2 = W6();
                Y4.id = de2;
                var ue3 = document.createElement("div");
                ue3.classList.add(e18.classes.backgroundInfo);
                var I9 = document.createElement("div");
                I9.classList.add(e18.classes.dateSelectorInner);
                var Z4 = document.createElement("div");
                Z4.classList.add(e18.classes.button), Z4.classList.add(e18.classes.elementThird), Z4.classList.add(e18.classes.dateSelectorUp), Z4.innerHTML = r14;
                var q6 = document.createElement("div");
                q6.classList.add(e18.classes.button), q6.classList.add(e18.classes.elementThird), q6.classList.add(e18.classes.dateSelectorUp), q6.innerHTML = r14;
                var G5 = document.createElement("div");
                G5.classList.add(e18.classes.button), G5.classList.add(e18.classes.elementThird), G5.classList.add(e18.classes.dateSelectorUp), G5.innerHTML = r14, C7.classList.add(e18.classes.element), C7.classList.add(e18.classes.elementThird), C7.innerHTML = e18.dateMonths[i21.getMonth()], x15.classList.add(e18.classes.element), x15.classList.add(e18.classes.elementThird), x15.setAttribute("contentEditable", true), x15.addEventListener("input", D8), x15.addEventListener("blur", w15), x15.innerHTML = i21.getDate(), a21.classList.add(e18.classes.element), a21.classList.add(e18.classes.elementThird), a21.setAttribute("contentEditable", true), a21.addEventListener("input", M6), a21.addEventListener("blur", w15), a21.innerHTML = i21.getFullYear();
                var ne3 = document.createElement("div");
                ne3.classList.add(e18.classes.button), ne3.classList.add(e18.classes.elementThird), ne3.innerHTML = r14;
                var se2 = document.createElement("div");
                se2.classList.add(e18.classes.button), se2.classList.add(e18.classes.elementThird), se2.innerHTML = r14;
                var ae3 = document.createElement("div");
                ae3.classList.add(e18.classes.button), ae3.classList.add(e18.classes.elementThird), ae3.innerHTML = r14, Z4.onclick = function() {
                  return _2(1);
                }, q6.onclick = function() {
                  return P4(1);
                }, G5.onclick = function() {
                  return be(1);
                }, ne3.onclick = function() {
                  return _2(-1);
                }, se2.onclick = function() {
                  return P4(-1);
                }, ae3.onclick = function() {
                  return be(-1);
                };
                var z6 = document.createElement("div");
                z6.classList.add(e18.classes.button), z6.classList.add(e18.classes.elementHalf), z6.classList.add(e18.classes.backgroundSuccess), z6.innerHTML = H6, z6.onclick = function() {
                  O6(de2, n21), j9(), p21 ? p21(i21) : c27 && c27(i21);
                };
                var U6 = document.createElement("div");
                U6.classList.add(e18.classes.button), U6.classList.add(e18.classes.elementHalf), U6.classList.add(e18.classes.backgroundError), U6.innerHTML = h10, U6.onclick = function() {
                  O6(de2, n21), j9(), l21 ? l21(i21) : s21 && s21(i21);
                }, I9.appendChild(Z4), I9.appendChild(q6), I9.appendChild(G5), I9.appendChild(C7), I9.appendChild(x15), I9.appendChild(a21), I9.appendChild(ne3), I9.appendChild(se2), I9.appendChild(ae3), ue3.appendChild(I9), Y4.appendChild(ue3), Y4.appendChild(z6), Y4.appendChild(U6), Y4.listener = function(L6) {
                  $3(L6) ? z6.click() : ee3(L6) && U6.click();
                }, K5(Y4, n21), te(Y4, n21);
              };
              u16.default = { alert: he2, force: ke2, confirm: Ce2, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F11 };
            }]);
          });
        }).call(o23, v7(0)(y10));
      }]);
    });
  });
  var je = Ie(ye2());
  var { default: Le, ...Ne2 } = je;
  var Fe = Le !== void 0 ? Le : Ne2;

  // https://esm.sh/v102/nanostores@0.7.1/deno/nanostores.js
  var S11 = Symbol("clean");
  var c26 = Symbol();

  // https://esm.sh/v102/@nanostores/i18n@0.7.1/deno/i18n.js
  function g8(r14, n21) {
    if (typeof r14 == "string")
      return n21(r14);
    {
      let e18 = {};
      for (let t17 in r14)
        e18[t17] = g8(r14[t17], n21);
      return e18;
    }
  }
  function p19(r14) {
    return (n21) => {
      if (n21.transform) {
        let e18 = n21.transform;
        return n21 = n21.input, { input: n21, transform(t17, o23, s21) {
          let f16 = r14(t17, o23, ...s21);
          return (...l21) => e18(t17, f16, l21);
        } };
      } else
        return { input: n21, transform(e18, t17, o23) {
          return r14(e18, t17, ...o23);
        } };
    };
  }
  var N5 = p19((r14, n21, e18) => g8(n21, (t17) => {
    for (let o23 in e18)
      t17 = t17.replace(new RegExp(`{${o23}}`, "g"), e18[o23]);
    return t17;
  }));
  var R5 = p19((r14, n21, e18) => {
    let t17 = new Intl.PluralRules(r14).select(e18);
    return t17 in n21 || (t17 = "many"), g8(n21[t17], (o23) => o23.replace(/{count}/g, e18));
  });

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
  async function request(options2) {
    if (options2.body) {
    }
    let { url, responseType, ...fetchOptions } = options2;
    if (!responseType) {
      responseType = "json";
    }
    fetchOptions = {
      mode: "cors",
      ...fetchOptions
    };
    const fetchFn = options2.fetchPolyfill || fetch;
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
  var sendFetch = (options2) => {
    if (isDeno2()) {
      return request(options2);
    } else {
      return sendFetchFromChrome(options2);
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

  // buildin_config.json
  var buildin_config_default = {
    "minVersion": "0.0.20",
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
        "web.telegram.org",
        "*.slack.com"
      ]
    },
    "generalRule": {
      "_comment": "",
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
        ".abstract",
        ".titleLink",
        ".summary",
        ".content",
        ".headline"
      ],
      "atomicBlockTags": [
        "P",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "LI"
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
        "HR",
        "PRE",
        "CODE",
        "KBD",
        "WBR",
        "TT",
        "META"
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
        "TIME",
        "META"
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
      },
      {
        "matches": "www.aljazeera.com",
        "addtionalSelectors": [
          "h1",
          ".article__subhead"
        ]
      },
      {
        "matches": [
          "*.pornhub.com",
          "pornhub.com"
        ],
        "selectors": [
          ".title >a",
          ".title > span",
          ".thumbnailTitle",
          ".commentMessage > span"
        ],
        "detectParagraphLanguage": true,
        "wrapperPrefix": "\n\n",
        "wrapperSuffix": "\n",
        "globalStyles": {
          ".title": "height: unset; max-height: unset;"
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
    return array.filter((i21) => i21 !== item);
  }

  // utils/merge_rule.ts
  function mergeRule(generalRule, rule) {
    const arrayKeys = [];
    const allRuleKeys = Object.keys(
      generalRule
    );
    for (const key of allRuleKeys) {
      const value = generalRule[key];
      if (Array.isArray(value)) {
        arrayKeys.push(key);
      }
    }
    const finalRule = generalRule;
    const ruleKeys = Object.keys(rule);
    ruleKeys.forEach((key) => {
      const value = rule[key];
      if (value !== void 0) {
        if (!arrayKeys.includes(key)) {
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
        if (env.PROD === "0") {
          if (env.DEV_RULES) {
            const devRules = JSON.parse(env.DEV_RULES);
            finalConfig[configKey] = [
              ...devRules,
              ...finalConfig[configKey]
            ];
          }
        }
      } else {
        if (mergedUserConfig[configKey] !== void 0) {
          finalConfig[configKey] = mergedUserConfig[configKey];
        }
      }
    }
    return finalConfig;
  }

  // browser_proxy.ts
  async function sendMessage(fn, options2) {
    try {
      const response = await fn(options2);
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
  function request2(options2) {
    if (isMonkey() || isDeno()) {
      options2.fetchPolyfill = globalThis.GM_fetch;
      return request(options2);
    }
    return sendMessage(sendFetch, options2);
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
  function detectLanguage(options2) {
    if (options2.text) {
      const chineseLike = detectChinese(options2.text);
      if (chineseLike !== "auto") {
        return Promise.resolve(chineseLike);
      }
    } else {
      return Promise.resolve("auto");
    }
    if (isMonkey()) {
      const result = browserAPI.extra.detectLanguage(options2.text);
      return Promise.resolve(result);
    }
    return sendMessage(
      sendDetectLanguage,
      options2
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
  var stayInOriginalRegex = new RegExp(
    `^${delimiters[0]}(\\d+)${delimiters[1]}$`
  );
  function duplicatedElements(root2, array) {
    const footers = root2.querySelectorAll("footer");
    const allHeaders = root2.querySelectorAll("header");
    const main3 = root2.querySelectorAll("main");
    const headers2 = [];
    for (const header of allHeaders) {
      const isInMain = main3.length > 0 && main3[0].contains(header);
      if (!isInMain) {
        headers2.push(header);
      }
    }
    for (let i21 = 0; i21 < array.length; i21++) {
      const a21 = array[i21];
      for (let j9 = i21 + 1; j9 < array.length; j9++) {
        const b11 = array[j9];
        if (a21.contains(b11)) {
          array.splice(j9, 1);
          j9--;
        } else if (b11.contains(a21)) {
          array.splice(i21, 1);
          i21--;
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
    for (let i21 = elements.length - 1; i21 >= 0; i21--) {
      const element = elements[i21];
      if (typeof element !== "string") {
        return element;
      }
    }
    return null;
  }
  function getFirstHTMLElement(elements) {
    for (let i21 = 0; i21 < elements.length; i21++) {
      const element = elements[i21];
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
  function getElementsBySelectors(root2, selectors) {
    const elements = [];
    for (const selector of selectors) {
      const nodes = root2.querySelectorAll(selector);
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
        if (element.nodeName === "SPAN") {
          const innerHTML = element.innerHTML;
          if (innerHTML.includes(sourceAtomicBlockElementMarkAttributeName)) {
            return false;
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
    for (const e18 of elements) {
      if (e18 === element) {
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
    if (isAtTag(trimedText)) {
      return false;
    }
    if (isUrl(trimedText)) {
      return false;
    }
    if (isHashTag(trimedText)) {
      return false;
    }
    if (stayInOriginalRegex.test(trimedText)) {
      return false;
    }
    const wordCount = trimedText.split(" ").length;
    if (wordCount <= 2 && trimedText.length <= 20) {
      return false;
    }
    return true;
  }
  function isUrl(text) {
    if (text && text.includes("://")) {
      try {
        new URL(text);
        return true;
      } catch (_e3) {
        return false;
      }
    } else {
      return false;
    }
  }
  function isHashTag(text) {
    if (text && text.startsWith("#")) {
      if (text.indexOf(" ") === -1) {
        return true;
      }
    }
    return false;
  }
  function isAtTag(text) {
    if (text && text.startsWith("@")) {
      if (text.indexOf(" ") === -1) {
        return true;
      }
    }
    return false;
  }
  function isStockTag(text) {
    if (text && text.startsWith("$")) {
      if (text.indexOf(" ") === -1) {
        return true;
      }
    }
    return false;
  }
  function isMarked(element, markedAttribute) {
    return element.hasAttribute(markedAttribute) && element.getAttribute(markedAttribute) === "1";
  }
  function trimText(text) {
    return text.replace(/\s/g, " ");
  }
  function getMainText(root2) {
    const main3 = root2.querySelector("main");
    let text = "";
    if (main3) {
      text = trimText(main3.textContent || "");
    }
    if (text.length >= 10) {
      return text;
    }
    const article = root2.querySelectorAll("article");
    if (article.length > 0) {
      for (const a21 of article) {
        text = trimText(a21.textContent || "");
      }
    }
    if (text.length >= 10) {
      return text;
    }
    text = trimText(root2.textContent || "");
    return text;
  }

  // dom/detect_page_language.ts
  async function detectPageLanguage() {
    let lang = "auto";
    if (document.body && document.body.textContent && document.body.textContent.trim()) {
      lang = await detectLanguage({
        text: getMainText(document.body)
      });
    }
    if (lang === "auto" && document.documentElement && document.documentElement.lang) {
      lang = formatLanguage(document.documentElement.lang);
    }
    return lang;
  }

  // dom/get_containers.ts
  function getContainers(root2, ctx) {
    if (!(root2 && root2.textContent && root2.textContent.trim())) {
      return [];
    }
    const { rule } = ctx;
    let contentContainers = [];
    if (rule && rule.selectors.length > 0) {
      const containers = rule.selectors.map((selector) => {
        const elements = root2.querySelectorAll(selector);
        return Array.from(elements);
      }).flat();
      contentContainers.push(...containers);
    } else {
      if (rule && rule.additionalSelectors.length > 0) {
        const additionalElements = getElementsBySelectors(
          root2,
          rule.additionalSelectors
        );
        contentContainers.push(...additionalElements);
      }
      const articleElements = getElementsBySelectors(root2, ["article"]);
      contentContainers.push(...articleElements);
      const allPTags = root2.querySelectorAll("p");
      if (allPTags.length > 0) {
        allPTags.forEach((p21) => {
          const myInnerText = p21.innerText.match(/\S+/g);
          if (myInnerText && myInnerText.length > 3) {
            if (p21.parentElement) {
              if (!contentContainers.includes(p21.parentElement)) {
                contentContainers.push(p21.parentElement);
              }
            }
          }
        });
      }
      const allBrTags = root2.querySelectorAll("br");
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
        let mains = root2.querySelectorAll("[role=main]");
        if (mains.length === 0) {
          mains = root2.querySelectorAll("main");
        }
        if (mains.length === 0) {
          mains = root2.querySelectorAll(".main");
        }
        if (mains.length > 0) {
          const mainsArray = Array.from(mains);
          contentContainers = contentContainers.concat(mainsArray);
        }
      }
    }
    const finalContainers = duplicatedElements(root2, contentContainers);
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

  // services/util.ts
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
    for (let i21 = 0; i21 < sentences.length; i21++) {
      const currentSentence = sentences[i21];
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
                index: i21,
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
              index: i21,
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

  // dom/current_language.ts
  var currentPageLanguage = "auto";
  var currentPageLanguageByClient = "auto";
  var currentPageLanguageByRemote = "auto";
  function setCurrentPageLanguage(lang) {
    currentPageLanguage = lang;
  }
  function setCurrentPageLanguageByClient(lang) {
    currentPageLanguageByClient = lang;
  }
  function getCurrentPageLanguage() {
    if (currentPageLanguageByClient !== "auto") {
      return currentPageLanguageByClient;
    }
    if (currentPageLanguageByRemote !== "auto") {
      return currentPageLanguageByRemote;
    }
    return currentPageLanguage;
  }
  function getCurrentPageLanguageByClient() {
    return currentPageLanguageByClient;
  }

  // dom/elements_to_paragraph.ts
  function elementsToParagraph(elements, excludeElements, ctx) {
    const variables = [];
    const { rule } = ctx;
    const { stayOriginalTags } = rule;
    let text = "";
    for (let i21 = 0; i21 < elements.length; i21++) {
      const element = elements[i21];
      if (typeof element === "string") {
        text += element;
        continue;
      }
      if (isExcludeElement(element, excludeElements, rule)) {
        if (stayOriginalTags.includes(element.nodeName)) {
          const codeText = element.innerText;
          const variable = {
            type: element.nodeName.toLowerCase(),
            attributes: element.attributes,
            value: codeText
          };
          variables.push(variable);
          const index = variables.length - 1;
          const delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
          text += delimiter;
        } else {
          continue;
        }
      } else {
        const rawText = element.innerText;
        const isStartWithSpace = rawText.startsWith(" ");
        const isEndWithSpace = rawText.endsWith(" ");
        const finalText = rawText.trim();
        if (isUrl(finalText) || isHashTag(finalText) || isAtTag(finalText) || isStockTag(finalText)) {
          const variable = {
            type: element.nodeName.toLowerCase(),
            attributes: element.attributes,
            value: finalText
          };
          variables.push(variable);
          const index = variables.length - 1;
          const delimiter = `${delimiters[0]}${index}${delimiters[1]}`;
          text += (isStartWithSpace ? " " : "") + delimiter + (isEndWithSpace ? " " : "");
        } else {
          text += (isStartWithSpace ? " " : "") + finalText + (isEndWithSpace ? " " : "");
        }
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
    if (wordCount < 4 && text.length < 20) {
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
  function getInlineElementsOfInlineElement(root2) {
    const elements = [];
    const treeWalker = document.createTreeWalker(
      root2,
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
      const whitespace = getWhitespace(root2.nextSibling);
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
  function paragraphToHtml(sourceItem, sentence, ctx) {
    const { rule, translationTheme } = ctx;
    let { variables, text } = sourceItem;
    variables = variables || [];
    const { text: targetText } = sentence;
    const { wrapperPrefix, wrapperSuffix } = rule;
    const position = "afterend";
    const regex = new RegExp(`${delimiters[0]}(\\d+)${delimiters[1]}`, "g");
    let matchIndex = 0;
    let html = targetText;
    if (variables.length > 0) {
      html = html.replace(regex, (match) => {
        const variable = variables[Number(matchIndex)];
        matchIndex++;
        if (variable.type) {
          const { attributes } = variable;
          const attributesString = Array.from(attributes).reduce(
            (acc, { name, value }) => {
              return `${acc} ${name}="${value}"`;
            },
            ""
          );
          return `<${variable.type} ${attributesString}>${escapeHTML(variable.value)}</${variable.type}>`;
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
      const wordCount = text.split(" ").length;
      const textLength = text.length;
      if (wrapperPrefix === "smart") {
        html = `<br>${html}`;
      } else {
        html = `${wrapperPrefix}${html}`;
      }
      if (wrapperPrefix === "smart") {
        if (wordCount >= 20 && textLength >= 80) {
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
  function wrapTextNode(depth, root2, excludeElements, extraInlineElements, extraBlockElements, rule) {
    if (isMarked(root2, sourceAtomicBlockElementMarkAttributeName)) {
      return;
    }
    const { stayOriginalTags } = rule;
    let isSingleInlineElement = false;
    if (depth === 0) {
      if (root2.childNodes && root2.childNodes.length === 1 && root2.nodeType === Node.ELEMENT_NODE && isInlineElement(
        root2,
        extraInlineElements,
        extraBlockElements,
        rule
      ) && !stayOriginalTags.includes(root2.nodeName)) {
        isSingleInlineElement = true;
      }
    }
    if (root2 && root2.childNodes && root2.childNodes.length > 0) {
      for (const node of root2.childNodes) {
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
      this.throttleLimit = 3;
      this.isSupportList = true;
      this.maxTextGroupLength = 50;
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
      const throttle = m15({
        limit: this.throttleLimit,
        interval: 1e3
      });
      let currentSentenceIndex = 0;
      let globalError = null;
      for (let i21 = 0; i21 < tempSentenceGroups.length; i21++) {
        const tempSentenceGroup = tempSentenceGroups[i21];
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
            globalError = e18;
            continue;
          } else {
            globalError = e18;
            continue;
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
      if (globalError) {
        throw globalError;
      }
      return {
        sentences: respondedSentences
      };
    }
    detectLanguageLocally(text) {
      return detectLanguage({
        text
      });
    }
    detectLanguageRemotely(_text) {
      return Promise.resolve("auto");
    }
    detectLanguage(text) {
      if (text.length >= 32) {
        return this.detectLanguageLocally(text);
      } else {
        return this.detectLanguageRemotely(text);
      }
    }
  };

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
    for (var i21 = 0; i21 < OUTPUT_TYPES.length; ++i21) {
      var type = OUTPUT_TYPES[i21];
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
    for (var i21 = 0; i21 < OUTPUT_TYPES.length; ++i21) {
      var type = OUTPUT_TYPES[i21];
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
    var code2, index = 0, i21, length = message.length, blocks2 = this.blocks;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks2[0] = this.block;
        blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
      }
      if (notString) {
        for (i21 = this.start; index < length && i21 < 64; ++index) {
          blocks2[i21 >> 2] |= message[index] << SHIFT[i21++ & 3];
        }
      } else {
        for (i21 = this.start; index < length && i21 < 64; ++index) {
          code2 = message.charCodeAt(index);
          if (code2 < 128) {
            blocks2[i21 >> 2] |= code2 << SHIFT[i21++ & 3];
          } else if (code2 < 2048) {
            blocks2[i21 >> 2] |= (192 | code2 >> 6) << SHIFT[i21++ & 3];
            blocks2[i21 >> 2] |= (128 | code2 & 63) << SHIFT[i21++ & 3];
          } else if (code2 < 55296 || code2 >= 57344) {
            blocks2[i21 >> 2] |= (224 | code2 >> 12) << SHIFT[i21++ & 3];
            blocks2[i21 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i21++ & 3];
            blocks2[i21 >> 2] |= (128 | code2 & 63) << SHIFT[i21++ & 3];
          } else {
            code2 = 65536 + ((code2 & 1023) << 10 | message.charCodeAt(++index) & 1023);
            blocks2[i21 >> 2] |= (240 | code2 >> 18) << SHIFT[i21++ & 3];
            blocks2[i21 >> 2] |= (128 | code2 >> 12 & 63) << SHIFT[i21++ & 3];
            blocks2[i21 >> 2] |= (128 | code2 >> 6 & 63) << SHIFT[i21++ & 3];
            blocks2[i21 >> 2] |= (128 | code2 & 63) << SHIFT[i21++ & 3];
          }
        }
      }
      this.lastByteIndex = i21;
      this.bytes += i21 - this.start;
      if (i21 >= 64) {
        this.block = blocks2[16];
        this.start = i21 - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i21;
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
    var blocks2 = this.blocks, i21 = this.lastByteIndex;
    blocks2[16] = this.block;
    blocks2[i21 >> 2] |= EXTRA[i21 & 3];
    this.block = blocks2[16];
    if (i21 >= 56) {
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
    var a21 = this.h0, b11 = this.h1, c27 = this.h2, d17 = this.h3, e18 = this.h4, f16 = this.h5, g9 = this.h6, h10 = this.h7, blocks2 = this.blocks, j9, s0, s1, maj, t1, t22, ch, ab, da, cd, bc;
    for (j9 = 16; j9 < 64; ++j9) {
      t1 = blocks2[j9 - 15];
      s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
      t1 = blocks2[j9 - 2];
      s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
      blocks2[j9] = blocks2[j9 - 16] + s0 + blocks2[j9 - 7] + s1 << 0;
    }
    bc = b11 & c27;
    for (j9 = 0; j9 < 64; j9 += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks2[0] - 1413257819;
          h10 = t1 - 150054599 << 0;
          d17 = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks2[0] - 210244248;
          h10 = t1 - 1521486534 << 0;
          d17 = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = (a21 >>> 2 | a21 << 30) ^ (a21 >>> 13 | a21 << 19) ^ (a21 >>> 22 | a21 << 10);
        s1 = (e18 >>> 6 | e18 << 26) ^ (e18 >>> 11 | e18 << 21) ^ (e18 >>> 25 | e18 << 7);
        ab = a21 & b11;
        maj = ab ^ a21 & c27 ^ bc;
        ch = e18 & f16 ^ ~e18 & g9;
        t1 = h10 + s1 + ch + K4[j9] + blocks2[j9];
        t22 = s0 + maj;
        h10 = d17 + t1 << 0;
        d17 = t1 + t22 << 0;
      }
      s0 = (d17 >>> 2 | d17 << 30) ^ (d17 >>> 13 | d17 << 19) ^ (d17 >>> 22 | d17 << 10);
      s1 = (h10 >>> 6 | h10 << 26) ^ (h10 >>> 11 | h10 << 21) ^ (h10 >>> 25 | h10 << 7);
      da = d17 & a21;
      maj = da ^ d17 & b11 ^ ab;
      ch = h10 & e18 ^ ~h10 & f16;
      t1 = g9 + s1 + ch + K4[j9 + 1] + blocks2[j9 + 1];
      t22 = s0 + maj;
      g9 = c27 + t1 << 0;
      c27 = t1 + t22 << 0;
      s0 = (c27 >>> 2 | c27 << 30) ^ (c27 >>> 13 | c27 << 19) ^ (c27 >>> 22 | c27 << 10);
      s1 = (g9 >>> 6 | g9 << 26) ^ (g9 >>> 11 | g9 << 21) ^ (g9 >>> 25 | g9 << 7);
      cd = c27 & d17;
      maj = cd ^ c27 & a21 ^ da;
      ch = g9 & h10 ^ ~g9 & e18;
      t1 = f16 + s1 + ch + K4[j9 + 2] + blocks2[j9 + 2];
      t22 = s0 + maj;
      f16 = b11 + t1 << 0;
      b11 = t1 + t22 << 0;
      s0 = (b11 >>> 2 | b11 << 30) ^ (b11 >>> 13 | b11 << 19) ^ (b11 >>> 22 | b11 << 10);
      s1 = (f16 >>> 6 | f16 << 26) ^ (f16 >>> 11 | f16 << 21) ^ (f16 >>> 25 | f16 << 7);
      bc = b11 & c27;
      maj = bc ^ b11 & d17 ^ cd;
      ch = f16 & g9 ^ ~f16 & h10;
      t1 = e18 + s1 + ch + K4[j9 + 3] + blocks2[j9 + 3];
      t22 = s0 + maj;
      e18 = a21 + t1 << 0;
      a21 = t1 + t22 << 0;
    }
    this.h0 = this.h0 + a21 << 0;
    this.h1 = this.h1 + b11 << 0;
    this.h2 = this.h2 + c27 << 0;
    this.h3 = this.h3 + d17 << 0;
    this.h4 = this.h4 + e18 << 0;
    this.h5 = this.h5 + f16 << 0;
    this.h6 = this.h6 + g9 << 0;
    this.h7 = this.h7 + h10 << 0;
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
    var i21, type = typeof key;
    if (type === "string") {
      var bytes = [], length = key.length, index = 0, code2;
      for (i21 = 0; i21 < length; ++i21) {
        code2 = key.charCodeAt(i21);
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
          code2 = 65536 + ((code2 & 1023) << 10 | key.charCodeAt(++i21) & 1023);
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
    for (i21 = 0; i21 < 64; ++i21) {
      var b11 = key[i21] || 0;
      oKeyPad[i21] = 92 ^ b11;
      iKeyPad[i21] = 54 ^ b11;
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
  Tencent.langMap = new Map(langMap2);
  Tencent.langMapReverse = new Map(
    langMap2.map(([translatorLang, lang]) => [lang, translatorLang])
  );

  // services/google.ts
  var langMap3 = [
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
  Google.langMap = new Map(langMap3);
  Google.langMapReverse = new Map(
    langMap3.map(([translatorLang, lang]) => [lang, translatorLang])
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
    for (let i21 = 0; i21 < sentences.length; i21++) {
      const chunks = sentences[i21].chunks;
      for (let j9 = 0; j9 < chunks.length; j9++) {
        const chunk = chunks[j9];
        jobs.push({
          kind: "default",
          _index: i21,
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
  var langMap4 = [
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
  var D7 = _D;
  D7.langMap = new Map(langMap4);
  D7.langMapReverse = new Map(
    langMap4.map(([translatorLang, lang]) => [lang, translatorLang])
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
  var langMap5 = new Map(RAW_LANGUAGES);
  var langMapReverse = new Map(
    RAW_LANGUAGES.map(([translatorLang, lang]) => [lang, translatorLang])
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
      this.maxTextGroupLength = 1;
      this.throttleLimit = 500;
      this.clientKey = btoa(
        "transmart_crx_" + navigator.userAgent
      ).slice(0, 100);
    }
    async translate(payload) {
      const { text, to } = payload;
      const sourceLanguage = await this.detectLanguage(text);
      const remoteSourceLanguage = _Transmart.langMap.get(sourceLanguage) || sourceLanguage;
      const remoteTargetLanguage = _Transmart.langMap.get(to) || to;
      if (sourceLanguage === to) {
        return {
          text,
          from: sourceLanguage,
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
            "lang": remoteSourceLanguage,
            "orig_url": payload.url
          },
          "target": { "lang": remoteTargetLanguage }
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
        from: sourceLanguage || "auto",
        to
      };
    }
    async translateList(payload) {
      const { from, text, to } = payload;
      if (text.length === 1) {
        const result = await this.translate({
          from,
          text: text[0],
          to,
          url: payload.url
        });
        return {
          text: [result.text],
          from: result.from,
          to: result.to
        };
      }
      const sourceLanguage = await this.detectLanguage(text.join("\n"));
      if (sourceLanguage === to) {
        return {
          text,
          from: sourceLanguage,
          to
        };
      }
      const remoteSourceLanguage = _Transmart.langMap.get(sourceLanguage) || sourceLanguage;
      const remoteTargetLanguage = _Transmart.langMap.get(to) || to;
      const requestPayload = JSON.stringify(
        {
          "header": {
            "fn": "auto_translation",
            "client_key": this.clientKey
          },
          "source": {
            "text_list": text,
            "lang": remoteSourceLanguage,
            "orig_url": payload.url
          },
          "target": { "lang": remoteTargetLanguage },
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
        from: sourceLanguage || "auto",
        to
      };
    }
    detectLanguageLocally(text) {
      return this.detectLanguageRemotely(text);
    }
    async detectLanguageRemotely(text) {
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
      const remoteLanguage = response.language;
      const language = _Transmart.langMapReverse.get(remoteLanguage);
      if (language) {
        return language;
      }
      return remoteLanguage;
    }
  };
  var Transmart = _Transmart;
  Transmart.langMap = new Map(langMap6);
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
      if (!getRandomBoolean()) {
        throw new Error("\u6A21\u62DF\u9519\u8BEF");
      }
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
  var langMap7 = new Map(rawLangMap);
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
            source_lang: langMap7.get(from) || "auto",
            target_lang: langMap7.get(to)
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
  var langMap8 = new Map(rawLangMap2);
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
        ["source_lang"]: langMap8.get(from),
        ["target_lang"]: langMap8.get(to)
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
  }).filter((v7) => v7).join("&");
  var Signer = class {
    constructor(request3, serviceName, options2) {
      this.request = request3;
      this.request.headers = request3.headers || {};
      this.serviceName = serviceName;
      options2 = options2 || {};
      this.bodySha256 = options2.bodySha256;
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
      headers2.sort((a21, b11) => a21[0].toLowerCase() < b11[0].toLowerCase() ? -1 : 1);
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
  ];
  var langMap9 = new Map(rawLangMap3);
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
      const remoteFrom = langMap9.get(from);
      const bodyParams = {
        "TargetLanguage": langMap9.get(to) || to,
        "TextList": text
      };
      if (remoteFrom) {
        bodyParams.SourceLanguage = remoteFrom;
      }
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
        body: JSON.stringify(bodyParams)
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
        let remoteFrom2 = from;
        if (response.TranslationList.length > 0) {
          if (response.TranslationList[0].DetectedSourceLanguage) {
            remoteFrom2 = langMapReverse4.get(
              response.TranslationList[0].DetectedSourceLanguage
            ) || from;
          }
        }
        return {
          text: resultText,
          from: remoteFrom2,
          to
        };
      } else {
        const error = response.ResponseMetaData.Error;
        throw new CommonError(error.Code, error.Message);
      }
    }
  };
  var mod_default = Volc;

  // services/volc_alpha.ts
  var rawLangMap4 = [
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
  ];
  var langMap10 = new Map(rawLangMap4);
  var langMapReverse5 = new Map(
    rawLangMap4.map(([translatorLang, lang]) => [lang, translatorLang])
  );
  var VolcAlpha = class extends Translation {
    constructor() {
      super(...arguments);
      this.maxTextGroupLength = 8;
      this.isSupportList = false;
    }
    async translate(payload) {
      const { text, from, to } = payload;
      const remoteFrom = langMap10.get(from) || "detect";
      const bodyParams = {
        "source_language": remoteFrom,
        "target_language": "zh",
        "text": text
      };
      const response = await request2(
        {
          url: "https://translate.volcengine.com/crx/translate/v1/",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(bodyParams)
        }
      );
      if (response.base_resp && response.base_resp.status_code === 0) {
        const resultText = response.translation;
        let remoteFrom2 = from;
        if (response.detected_language) {
          remoteFrom2 = langMapReverse5.get(response.detected_language) || from;
        }
        return {
          text: resultText,
          from: remoteFrom2,
          to
        };
      } else {
        const error = response.ResponseMetaData.Error;
        throw new CommonError(error.Code, error.Message);
      }
    }
  };

  // utils/md5.js
  function safeAdd(x15, y10) {
    var lsw = (x15 & 65535) + (y10 & 65535);
    var msw = (x15 >> 16) + (y10 >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  function md5cmn(q6, a21, b11, x15, s21, t17) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a21, q6), safeAdd(x15, t17)), s21), b11);
  }
  function md5ff(a21, b11, c27, d17, x15, s21, t17) {
    return md5cmn(b11 & c27 | ~b11 & d17, a21, b11, x15, s21, t17);
  }
  function md5gg(a21, b11, c27, d17, x15, s21, t17) {
    return md5cmn(b11 & d17 | c27 & ~d17, a21, b11, x15, s21, t17);
  }
  function md5hh(a21, b11, c27, d17, x15, s21, t17) {
    return md5cmn(b11 ^ c27 ^ d17, a21, b11, x15, s21, t17);
  }
  function md5ii(a21, b11, c27, d17, x15, s21, t17) {
    return md5cmn(c27 ^ (b11 | ~d17), a21, b11, x15, s21, t17);
  }
  function binlMD5(x15, len) {
    x15[len >> 5] |= 128 << len % 32;
    x15[(len + 64 >>> 9 << 4) + 14] = len;
    var i21;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a21 = 1732584193;
    var b11 = -271733879;
    var c27 = -1732584194;
    var d17 = 271733878;
    for (i21 = 0; i21 < x15.length; i21 += 16) {
      olda = a21;
      oldb = b11;
      oldc = c27;
      oldd = d17;
      a21 = md5ff(a21, b11, c27, d17, x15[i21], 7, -680876936);
      d17 = md5ff(d17, a21, b11, c27, x15[i21 + 1], 12, -389564586);
      c27 = md5ff(c27, d17, a21, b11, x15[i21 + 2], 17, 606105819);
      b11 = md5ff(b11, c27, d17, a21, x15[i21 + 3], 22, -1044525330);
      a21 = md5ff(a21, b11, c27, d17, x15[i21 + 4], 7, -176418897);
      d17 = md5ff(d17, a21, b11, c27, x15[i21 + 5], 12, 1200080426);
      c27 = md5ff(c27, d17, a21, b11, x15[i21 + 6], 17, -1473231341);
      b11 = md5ff(b11, c27, d17, a21, x15[i21 + 7], 22, -45705983);
      a21 = md5ff(a21, b11, c27, d17, x15[i21 + 8], 7, 1770035416);
      d17 = md5ff(d17, a21, b11, c27, x15[i21 + 9], 12, -1958414417);
      c27 = md5ff(c27, d17, a21, b11, x15[i21 + 10], 17, -42063);
      b11 = md5ff(b11, c27, d17, a21, x15[i21 + 11], 22, -1990404162);
      a21 = md5ff(a21, b11, c27, d17, x15[i21 + 12], 7, 1804603682);
      d17 = md5ff(d17, a21, b11, c27, x15[i21 + 13], 12, -40341101);
      c27 = md5ff(c27, d17, a21, b11, x15[i21 + 14], 17, -1502002290);
      b11 = md5ff(b11, c27, d17, a21, x15[i21 + 15], 22, 1236535329);
      a21 = md5gg(a21, b11, c27, d17, x15[i21 + 1], 5, -165796510);
      d17 = md5gg(d17, a21, b11, c27, x15[i21 + 6], 9, -1069501632);
      c27 = md5gg(c27, d17, a21, b11, x15[i21 + 11], 14, 643717713);
      b11 = md5gg(b11, c27, d17, a21, x15[i21], 20, -373897302);
      a21 = md5gg(a21, b11, c27, d17, x15[i21 + 5], 5, -701558691);
      d17 = md5gg(d17, a21, b11, c27, x15[i21 + 10], 9, 38016083);
      c27 = md5gg(c27, d17, a21, b11, x15[i21 + 15], 14, -660478335);
      b11 = md5gg(b11, c27, d17, a21, x15[i21 + 4], 20, -405537848);
      a21 = md5gg(a21, b11, c27, d17, x15[i21 + 9], 5, 568446438);
      d17 = md5gg(d17, a21, b11, c27, x15[i21 + 14], 9, -1019803690);
      c27 = md5gg(c27, d17, a21, b11, x15[i21 + 3], 14, -187363961);
      b11 = md5gg(b11, c27, d17, a21, x15[i21 + 8], 20, 1163531501);
      a21 = md5gg(a21, b11, c27, d17, x15[i21 + 13], 5, -1444681467);
      d17 = md5gg(d17, a21, b11, c27, x15[i21 + 2], 9, -51403784);
      c27 = md5gg(c27, d17, a21, b11, x15[i21 + 7], 14, 1735328473);
      b11 = md5gg(b11, c27, d17, a21, x15[i21 + 12], 20, -1926607734);
      a21 = md5hh(a21, b11, c27, d17, x15[i21 + 5], 4, -378558);
      d17 = md5hh(d17, a21, b11, c27, x15[i21 + 8], 11, -2022574463);
      c27 = md5hh(c27, d17, a21, b11, x15[i21 + 11], 16, 1839030562);
      b11 = md5hh(b11, c27, d17, a21, x15[i21 + 14], 23, -35309556);
      a21 = md5hh(a21, b11, c27, d17, x15[i21 + 1], 4, -1530992060);
      d17 = md5hh(d17, a21, b11, c27, x15[i21 + 4], 11, 1272893353);
      c27 = md5hh(c27, d17, a21, b11, x15[i21 + 7], 16, -155497632);
      b11 = md5hh(b11, c27, d17, a21, x15[i21 + 10], 23, -1094730640);
      a21 = md5hh(a21, b11, c27, d17, x15[i21 + 13], 4, 681279174);
      d17 = md5hh(d17, a21, b11, c27, x15[i21], 11, -358537222);
      c27 = md5hh(c27, d17, a21, b11, x15[i21 + 3], 16, -722521979);
      b11 = md5hh(b11, c27, d17, a21, x15[i21 + 6], 23, 76029189);
      a21 = md5hh(a21, b11, c27, d17, x15[i21 + 9], 4, -640364487);
      d17 = md5hh(d17, a21, b11, c27, x15[i21 + 12], 11, -421815835);
      c27 = md5hh(c27, d17, a21, b11, x15[i21 + 15], 16, 530742520);
      b11 = md5hh(b11, c27, d17, a21, x15[i21 + 2], 23, -995338651);
      a21 = md5ii(a21, b11, c27, d17, x15[i21], 6, -198630844);
      d17 = md5ii(d17, a21, b11, c27, x15[i21 + 7], 10, 1126891415);
      c27 = md5ii(c27, d17, a21, b11, x15[i21 + 14], 15, -1416354905);
      b11 = md5ii(b11, c27, d17, a21, x15[i21 + 5], 21, -57434055);
      a21 = md5ii(a21, b11, c27, d17, x15[i21 + 12], 6, 1700485571);
      d17 = md5ii(d17, a21, b11, c27, x15[i21 + 3], 10, -1894986606);
      c27 = md5ii(c27, d17, a21, b11, x15[i21 + 10], 15, -1051523);
      b11 = md5ii(b11, c27, d17, a21, x15[i21 + 1], 21, -2054922799);
      a21 = md5ii(a21, b11, c27, d17, x15[i21 + 8], 6, 1873313359);
      d17 = md5ii(d17, a21, b11, c27, x15[i21 + 15], 10, -30611744);
      c27 = md5ii(c27, d17, a21, b11, x15[i21 + 6], 15, -1560198380);
      b11 = md5ii(b11, c27, d17, a21, x15[i21 + 13], 21, 1309151649);
      a21 = md5ii(a21, b11, c27, d17, x15[i21 + 4], 6, -145523070);
      d17 = md5ii(d17, a21, b11, c27, x15[i21 + 11], 10, -1120210379);
      c27 = md5ii(c27, d17, a21, b11, x15[i21 + 2], 15, 718787259);
      b11 = md5ii(b11, c27, d17, a21, x15[i21 + 9], 21, -343485551);
      a21 = safeAdd(a21, olda);
      b11 = safeAdd(b11, oldb);
      c27 = safeAdd(c27, oldc);
      d17 = safeAdd(d17, oldd);
    }
    return [a21, b11, c27, d17];
  }
  function binl2rstr(input) {
    var i21;
    var output = "";
    var length32 = input.length * 32;
    for (i21 = 0; i21 < length32; i21 += 8) {
      output += String.fromCharCode(input[i21 >> 5] >>> i21 % 32 & 255);
    }
    return output;
  }
  function rstr2binl(input) {
    var i21;
    var output = [];
    output[(input.length >> 2) - 1] = void 0;
    for (i21 = 0; i21 < output.length; i21 += 1) {
      output[i21] = 0;
    }
    var length8 = input.length * 8;
    for (i21 = 0; i21 < length8; i21 += 8) {
      output[i21 >> 5] |= (input.charCodeAt(i21 / 8) & 255) << i21 % 32;
    }
    return output;
  }
  function rstrMD5(s21) {
    return binl2rstr(binlMD5(rstr2binl(s21), s21.length * 8));
  }
  function rstrHMACMD5(key, data) {
    var i21;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = void 0;
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }
    for (i21 = 0; i21 < 16; i21 += 1) {
      ipad[i21] = bkey[i21] ^ 909522486;
      opad[i21] = bkey[i21] ^ 1549556828;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }
  function rstr2hex(input) {
    var hexTab = "0123456789abcdef";
    var output = "";
    var x15;
    var i21;
    for (i21 = 0; i21 < input.length; i21 += 1) {
      x15 = input.charCodeAt(i21);
      output += hexTab.charAt(x15 >>> 4 & 15) + hexTab.charAt(x15 & 15);
    }
    return output;
  }
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }
  function rawMD5(s21) {
    return rstrMD5(str2rstrUTF8(s21));
  }
  function hexMD5(s21) {
    return rstr2hex(rawMD5(s21));
  }
  function rawHMACMD5(k8, d17) {
    return rstrHMACMD5(str2rstrUTF8(k8), str2rstrUTF8(d17));
  }
  function hexHMACMD5(k8, d17) {
    return rstr2hex(rawHMACMD5(k8, d17));
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

  // services/deeplx.ts
  var rawLangMap5 = [
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
  var langMap11 = new Map(rawLangMap5);
  var Deeplx = class extends Translation {
    constructor(serviceConfig, generalConfig) {
      super(serviceConfig, generalConfig);
      this.url = "";
      this.isSupportList = false;
      this.maxTextGroupLength = 1;
      if (!serviceConfig || !serviceConfig.url) {
        throw new Error("url are required");
      }
      this.url = serviceConfig.url;
    }
    static getAllProps() {
      return [{
        name: "url",
        required: true,
        type: "text"
      }];
    }
    async translate(payload) {
      const { text, from, to } = payload;
      const response = await request2(
        {
          url: this.url,
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            source_lang: langMap11.get(from) || from,
            target_lang: langMap11.get(to) || to,
            text
          })
        }
      );
      const result = response;
      if (result.code === 200) {
        return {
          text: result.data,
          from,
          to
        };
      } else {
        throw new Error(result.message || result.message || "API Error");
      }
    }
  };

  // services/bing/api.js
  var TRANSLATE_API_ROOT = "https://{s}bing.com";
  var TRANSLATE_WEBSITE = TRANSLATE_API_ROOT + "/translator";
  var TRANSLATE_API = TRANSLATE_API_ROOT + "/ttranslatev3";
  var TRANSLATE_SPELL_CHECK_API = TRANSLATE_API_ROOT + "/tspellcheckv3";
  var globalConfigStorageKey = "bingGlobalConfig";
  var rawLangMap6 = [
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
  var langMap12 = new Map(rawLangMap6);
  var langMapReverse6 = new Map(
    rawLangMap6.map(([translatorLang, lang]) => [lang, translatorLang])
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
    from = langMap12.get(from) || from;
    to = langMap12.get(to) || to;
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
      from: langMapReverse6.get(detectedLang.language),
      to: langMapReverse6.get(translation.to)
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
  var rawLangMap7 = [
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
  var langMap13 = new Map(rawLangMap7);
  var langMapReverse7 = new Map(
    rawLangMap7.map(([translatorLang, lang]) => [lang, translatorLang])
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
        from: langMap13.get(from),
        to: langMap13.get(to),
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
      const detectedFrom = langMapReverse7.get(langDetected);
      return {
        from: detectedFrom,
        to,
        text: transParagraphs.join("\n")
      };
    }
  };
  var baidu_default = Baidu;

  // services/caiyun.ts
  var rawLangMap8 = [
    ["auto", "auto"],
    ["zh-CN", "zh"],
    ["en", "en"],
    ["ja", "ja"]
  ];
  var langMap14 = new Map(rawLangMap8);
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
            trans_type: `${langMap14.get(from)}2${langMap14.get(to)}`
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
  var rawLangMap9 = [
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
  var langMap15 = new Map(rawLangMap9);
  var langMapReverse8 = new Map(
    rawLangMap9.map(([translatorLang, lang]) => [lang, translatorLang])
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
        from: langMap15.get(from),
        to: langMap15.get(to),
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
      const l21 = result.l;
      const [remoteFrom, _2] = l21.split("2");
      return {
        text: result.translation.join("\n"),
        from: langMapReverse8.get(remoteFrom),
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
    deepl: {
      class: deepl_default,
      name: "DeepL",
      homepage: "https://www.deepl.com/translator"
    },
    volc: {
      class: mod_default,
      name: "Volc",
      homepage: "https://www.volcengine.com/"
    },
    volcAlpha: {
      class: VolcAlpha,
      name: "Volc Alpha",
      alpha: true,
      homepage: "https://www.volcengine.com/"
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
    caiyun: {
      class: caiyun_default,
      name: "Caiyun",
      homepage: "https://fanyi.caiyunapp.com/"
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
      class: D7,
      name: "Deepl(Alpha) ",
      alpha: true,
      homepage: "https://www.deepl.com/translator"
    },
    deeplx: {
      class: Deeplx,
      name: "DeepLX(Alpha)",
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
  async function translateSingleSentence(sentence, ctx) {
    if (!sentence.text) {
      return sentence;
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
      return sentence;
    });
    const noCacheSentences = [];
    const finalResult = {
      sentences: Array(payload.sentences.length)
    };
    const sourceLength = payload.sentences.length;
    let sentenceIndex = -1;
    if (config.cache) {
      for (const sentence of payload.sentences) {
        sentenceIndex++;
        let cacheServiceKey = defaultTranslationEngine;
        if (defaultTranslationEngine === "openl") {
          cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME;
        }
        const res = await queryDb({
          originalText: sentence.text,
          from: sentence.from,
          to: sentence.to,
          service: cacheServiceKey
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
    } else {
      noCacheSentences.push(...payload.sentences);
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
      if (defaultTranslationEngine !== "mock" && config.cache) {
        let cacheServiceKey = defaultTranslationEngine;
        if (defaultTranslationEngine === "openl") {
          cacheServiceKey = defaultTranslationEngine + "-" + serviceConfig.codename || openl_default.DEFAULT_CODENAME;
        }
        await setDbStore(
          {
            translatedText: sentence.text,
            from: noCacheSentences[resultIndex].from,
            to: noCacheSentences[resultIndex].to,
            detectedFrom: sentence.from,
            key: md5(noCacheSentences[resultIndex].text),
            service: cacheServiceKey
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
          const rawMatch = match;
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
          let pathname = validUrlObj.pathname;
          if (pathname === "/") {
            if (!rawMatch.includes("/")) {
              pathname = "/*";
            }
          }
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
  async function getContext(options2) {
    const { url, config } = options2;
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
    clean();
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
    } catch (e18) {
      log_default.error(`translateNewDynamicNodes error: ${e18.message}`);
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
    if (pageStatus === "Translating") {
      return;
    } else if (pageStatus !== "Original") {
      restorePage();
    }
    const options2 = {
      url: globalThis.location.href,
      config: await getConfig2()
    };
    const ctx = await getContext(options2);
    log_default.debug("ctx", ctx);
    pageStatus = "Translating";
    sendPageTranslatedStatus2(pageStatus);
    try {
      const containers = getContainers(document.body, ctx);
      log_default.debug("detect containers", containers);
      const { rule } = ctx;
      if (containers.length > 0) {
        await translateContainers(containers, ctx);
      }
      translateTitle(ctx).catch((e18) => {
        log_default.error(`translateTitle error:`, e18.name, e18.message, e18.details || "");
      });
      enableMutatinObserver(rule, ctx);
      pageStatus = "Translated";
      sendPageTranslatedStatus2(pageStatus);
    } catch (e18) {
      pageStatus = "Error";
      log_default.error(e18);
    }
  }
  async function translateTitle(ctx) {
    const pageTitle = document.title;
    if (!pageTitle) {
      return;
    }
    if (pageTitle.includes(titleDelimiters)) {
      return;
    }
    if (originalPageTitle !== pageTitle) {
      originalPageTitle = pageTitle;
    }
    let currentLang = "auto";
    if (!ctx.isDetectParagraphLanguage) {
      currentLang = getCurrentPageLanguageByClient();
    }
    if (currentLang === "auto") {
      const detectedLang = await detectLanguage({
        text: pageTitle
      });
      if (isSameTargetLanguage(detectedLang, ctx.targetLanguage)) {
        return;
      }
    }
    try {
      const result = await translateSingleSentence({
        text: pageTitle,
        from: currentLang,
        to: ctx.targetLanguage
      }, ctx);
      if (result && result.text) {
        document.title = originalPageTitle + titleDelimiters + result.text;
      }
    } catch (e18) {
      throw e18;
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
      atomicBlockTags,
      globalStyles,
      stayOriginalTags
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
    const allAtomicBlockTagsSelectors = atomicBlockTags.map(
      (item) => item.toLowerCase()
    );
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
    if (allAtomicBlockTagsSelectors.length > 0) {
      const stayOriginalTagsHTMLStringArr = stayOriginalTags.reduce(
        (arr, item) => {
          const tagLower = item.toLowerCase();
          arr.push(`<${tagLower}>`, `</${tagLower}>`, `<${tagLower} />`);
          return arr;
        },
        []
      );
      const httpLinkTags = [">http://", ">https://"];
      stayOriginalTagsHTMLStringArr.push(...httpLinkTags);
      const atomicBlockTagsElements = getElementsBySelectors(
        document.body,
        allAtomicBlockTagsSelectors
      ).filter((element) => {
        const isMark = isMarked(
          element,
          sourceAtomicBlockElementMarkAttributeName
        );
        if (isMark) {
          return false;
        } else {
          const htmlString = element.innerHTML;
          const isStayOriginal = stayOriginalTagsHTMLStringArr.some(
            (item) => htmlString.includes(item)
          );
          return !isStayOriginal;
        }
      });
      atomicBlockElements.push(...atomicBlockTagsElements);
    }
    atomicBlockElements.forEach((element) => {
      if (!isMarked(element, sourceAtomicBlockElementMarkAttributeName)) {
        element.setAttribute(sourceAtomicBlockElementMarkAttributeName, "1");
      }
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
    const options2 = {
      url: globalThis.location.href,
      config: await getConfig2()
    };
    const ctx = await getContext(options2);
    let currentlangByClient = getCurrentPageLanguageByClient();
    if (ctx.isDetectParagraphLanguage) {
      currentlangByClient = "auto";
    }
    const sentence = {
      id: paragraph.id,
      text: paragraph.text,
      from: currentlangByClient,
      to: ctx.targetLanguage,
      url: ctx.encryptedUrl
    };
    try {
      const result = await translateSingleSentence(sentence, ctx);
      onParagraphTranslated(null, result, ctx);
    } catch (e18) {
      onParagraphTranslated(e18, sentence, ctx);
    }
  }
  function onParagraphTranslated(err, translatedSentence, ctx) {
    if (err) {
      const wrapperId = translatedSentence.id;
      const wrapper = document.getElementById(
        `${translationTargetElementWrapperClass}-${wrapperId}`
      );
      let errorMessage = err.message.replaceAll("\n", "");
      errorMessage = errorMessage.replaceAll('"', "&quot;");
      const errorHtml = `<span class="${brandId}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${errorMessage}"><button class="${brandId}-clickable-button notranslate" title="${errorMessage}">\u2757</button></span> <button class="${brandId}-clickable-button notranslate" data-${brandId}-paragraph-id="${wrapperId}" data-${brandId}-action="retry">\u{1F504}</button></span>`;
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
    let currentPageLang = "auto";
    if (!ctx.isDetectParagraphLanguage) {
      currentPageLang = getCurrentPageLanguageByClient();
    }
    const payload = {
      sentences: ids.filter((id) => getParagraph(id)).map((id) => {
        const paragraph = getParagraph(id);
        return {
          id: paragraph.id,
          url: ctx.encryptedUrl,
          text: paragraph.text,
          from: currentPageLang,
          to: ctx.targetLanguage
        };
      })
    };
    const sentenceLength = payload.sentences.length;
    if (sentenceLength > 0) {
      pageStatus = "Translating";
      sendPageTranslatedStatus2(pageStatus);
      try {
        await translateMultipleSentences(
          payload,
          ctx,
          (err, translatedSentence) => {
            onParagraphTranslated(err, translatedSentence, ctx);
          }
        );
      } catch (e18) {
        pageStatus = "Error";
        sendPageTranslatedStatus2(pageStatus);
        log_default.error(
          `translateCurrentQueue error`,
          e18.name,
          e18.message,
          e18.details || ""
        );
        return;
      }
    }
    pageStatus = "Translated";
    sendPageTranslatedStatus2(pageStatus);
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
            translateTitle(ctx).catch((e18) => {
              log_default.error(
                `translateTitle error:`,
                e18.name,
                e18.message,
                e18.details || ""
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
    const options2 = {
      url: globalThis.location.href,
      config: await getConfig2()
    };
    const ctx = await getContext(options2);
    log_default.debug(`context`, ctx);
    addToUnmountQueue(() => {
      cleanParagraphs();
      allIntersectionObserver.forEach((observer) => {
        observer.disconnect();
      });
      allIntersectionObserver = [];
    });
    let lang = "auto";
    if (!isMonkey()) {
      lang = await detectTabLanguage();
    } else {
      lang = await detectLanguage({
        text: getMainText(document.body).slice(0, 1e3)
      });
    }
    if (lang === "auto") {
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
    toggleTranslateStream.subscribe(async ([_2, __, cb]) => {
      log_default.debug(`received toggleTranslate`);
      try {
        await toggleTranslatePage();
        cb({
          ok: true
        });
      } catch (e18) {
        cb({
          ok: false,
          message: e18.message,
          error: e18.name
        });
      }
    });
    pageTranslateStream.subscribe(async ([_2, __, cb]) => {
      log_default.debug(`received pageTranslate`);
      try {
        await translatePage();
        cb({
          ok: true
        });
      } catch (e18) {
        cb({
          ok: false,
          message: e18.message,
          error: e18.name
        });
      }
    });
    pageRestoreStream.subscribe(([_2, __, cb]) => {
      log_default.debug(`received pageRestore`);
      try {
        restorePage();
        cb({
          ok: true
        });
      } catch (e18) {
        cb({
          ok: false,
          message: e18.message,
          error: e18.name
        });
      }
    });
    getPageTranslatedStatusStream.subscribe(([_2, __, cb]) => {
      log_default.debug(`received getPageTranslatedStatus`);
      const pageStatus2 = getPageStatus();
      cb({
        ok: true,
        data: pageStatus2
      });
    });
    setPageLanguageStream.subscribe(([lang, __, cb]) => {
      log_default.debug(`received setPageLanguage`, lang);
      setCurrentPageLanguageByClient(lang);
      cb({
        ok: true,
        data: lang
      });
    });
    getPageLanguageStream.subscribe(([_2, __, cb]) => {
      log_default.debug(`received getPageLanguage`);
      cb({
        ok: true,
        data: getCurrentPageLanguage()
      });
    });
  }

  // content_dom_listeners.ts
  function setupDomListeners() {
    document.addEventListener("click", (e18) => {
      const target = e18.target;
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
    } catch (e18) {
      log_default.error("run cron task failed", e18);
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
    } catch (e18) {
      log_default.error(`sync rules error: `, e18);
    }
  }

  // web-options/is_web_options_page.ts
  function isWebOptionsPage() {
    const optionsHostnames = ["localhost", hostname];
    const optionsPaths = ["/dist/userscript/options/", "/options/", "/options"];
    const url = globalThis.location.href;
    const urlObj = new URL(url);
    const currentHostname = urlObj.hostname;
    const currentPath = urlObj.pathname;
    if (optionsHostnames.includes(currentHostname)) {
      if (optionsPaths.includes(currentPath)) {
        const optionsMetaElement = document.querySelector(
          "meta[name=immersive-translate-options]"
        );
        if (optionsMetaElement && optionsMetaElement.getAttribute("content") === "true") {
          return true;
        }
      }
    }
    return false;
  }

  // web-options/setup_web_options_page.ts
  async function setupWebOptionsPage() {
    const statusElement = document.getElementById(
      "immersive-translate-status"
    );
    if (!statusElement) {
      log_default.error("Could not find status element");
      return;
    }
    await initStorage("local");
    await initStorage("sync");
    initOther();
    const pageReadyElement = document.getElementById(
      "immersive-translate-page-ready"
    );
    if (pageReadyElement) {
      setTimeout(() => {
        pageReadyElement.value = "true";
        pageReadyElement.dispatchEvent(new Event("change"));
      }, 100);
    }
  }
  function initOther() {
    const manifestElement = document.getElementById(
      "immersive-translate-manifest"
    );
    if (!manifestElement) {
      log_default.error(`Could not find manifest element`);
      return;
    }
    manifestElement.value = JSON.stringify(browserAPI.runtime.getManifest());
  }
  async function initStorage(area) {
    const statusElement = document.getElementById(
      "immersive-translate-status"
    );
    const storageInputElement = document.getElementById(
      `immersive-translate-${area}-storage`
    );
    if (!storageInputElement) {
      log_default.error(`Could not find storage ${area} element`);
      statusElement.innerText = "Could not find storage local input element";
      return;
    } else {
      log_default.debug(`init storage`);
      const browserStorageObj = await browserAPI.storage[area].get(null);
      storageInputElement.value = JSON.stringify(browserStorageObj);
      storageInputElement.addEventListener("change", (event) => {
        try {
          const storageObj = JSON.parse(event.target.value);
          browserAPI.storage[area].set(storageObj);
        } catch (e18) {
          log_default.error(`save to storage error`, e18);
        }
      });
    }
  }

  // dom/main.ts
  async function main() {
    const config = await getConfig2();
    const ctx = await getContext({
      config,
      url: globalThis.location.href
    });
    if (ctx.isTranslateExcludeUrl && isWebOptionsPage()) {
      log_default.debug("detect web options page");
      setupWebOptionsPage();
    } else {
      const isUserscript = isMonkey();
      if (!isUserscript) {
        setupMessageListeners();
      }
      setupDomListeners();
      if (!isUserscript) {
        sendReady();
      }
      const isDebug = config.debug;
      if (isDebug) {
        log_default.setLevel("debug");
      } else {
        log_default.setLevel("info");
      }
      if (!ctx.isTranslateExcludeUrl) {
        checkCronAndRunOnce();
        await initPage();
      }
    }
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
    const options2 = Object.assign(
      {},
      defaultOptions,
      rawOptions
    );
    cache = translations2 || cache;
    const [lang, setLang] = P2(options2.lang);
    const [data, setData] = P2(cache);
    const [isReady, setReady] = P2(false);
    const loadData = (langKey) => {
      if (data.hasOwnProperty(langKey)) {
        return;
      }
      setReady(false);
      let url = getResourceUrl(options2.root || "", langKey);
      if (options2.getUrl) {
        url = options2.getUrl(options2.root || "", langKey);
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
    j3(() => {
      loadData(options2.fallbackLang || "en");
      loadData(lang);
    }, [lang]);
    const t17 = (key, params) => {
      if (!data.hasOwnProperty(lang)) {
        return key;
      }
      let value = getValue(data, lang, key);
      if (value === key && lang !== options2.fallbackLang) {
        value = getValue(data, options2.fallbackLang, key);
      }
      return format(value, params);
    };
    return { lang, setLang, t: t17, isReady };
  }

  // https://esm.sh/stable/preact@10.11.0/deno/jsx-runtime.js
  var a20 = 0;
  function p20(n21, s21, t17, f16, u16) {
    var r14, o23, _2 = {};
    for (o23 in s21)
      o23 == "ref" ? r14 = s21[o23] : _2[o23] = s21[o23];
    var e18 = { type: n21, props: _2, key: t17, ref: r14, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --a20, __source: u16, __self: f16 };
    if (typeof n21 == "function" && (r14 = n21.defaultProps))
      for (o23 in r14)
        _2[o23] === void 0 && (_2[o23] = r14[o23]);
    return d2.vnode && d2.vnode(e18), e18;
  }

  // libs/preact-translation/translateProvider.tsx
  var TranslateContext = ce(null);
  var defaultOptions2 = {
    root: "assets",
    lang: "en",
    fallbackLang: "en"
  };
  var TranslateProvider = (props) => {
    const { t: t17, setLang, lang, isReady } = useTranslate(
      {
        root: props.root || defaultOptions2.root,
        lang: props.lang || defaultOptions2.lang,
        fallbackLang: props.fallbackLang || defaultOptions2.fallbackLang,
        getUrl: props.getUrl
      },
      props.translations
    );
    return /* @__PURE__ */ p20(TranslateContext.Provider, {
      value: {
        t: t17,
        setLang,
        lang,
        isReady
      },
      children: props.children
    });
  };

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

  // utils/is_valid_html_url.ts
  function isValidHtmlUrl(url) {
    let urlObj;
    try {
      urlObj = new URL(url);
    } catch (_2) {
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
  function useOutsideAlerter(ref, root2, callback) {
    j3(() => {
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
    const selectRef = w3(null);
    const aRef = w3(null);
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
    return /* @__PURE__ */ p20("nav", {
      class: `inline-block text-${size}`,
      ref: selectRef,
      children: /* @__PURE__ */ p20("li", {
        class: `py-0 select-link text-${size} ${open ? "select-link-active" : ""}`,
        role: "list",
        children: [
          /* @__PURE__ */ p20("a", {
            ref: aRef,
            class: `text-${size}`,
            href: "#",
            onClick: handleToggle,
            children: checkedItem.label
          }),
          /* @__PURE__ */ p20("ul", {
            class: "select-link-ul max-h-30 overflow-y-scroll ",
            role: "listbox",
            children: items.map((item, index) => {
              return /* @__PURE__ */ p20("li", {
                children: /* @__PURE__ */ p20("a", {
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

  // hooks/use_i18n.ts
  function useI18n() {
    return M2(TranslateContext);
  }

  // components/popup_field.tsx
  function PopupField(props) {
    let { size, field, root: root2, onChange, value } = props;
    value = value || field.default || "";
    const { t: t17 } = useI18n();
    if (field.type === "select") {
      return /* @__PURE__ */ p20("div", {
        class: "flex justify-between mb-2",
        children: [
          /* @__PURE__ */ p20("label", {
            class: "inline-block",
            children: [
              field.label ? t17(field.label) : field.name,
              "\uFF1A"
            ]
          }),
          /* @__PURE__ */ p20(SelectLink, {
            root: root2,
            size,
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
    }
    return null;
  }

  // components/popup.tsx
  var version = getVersion();
  function Popup(props) {
    const {
      onUserConfigChange,
      pageStatus: pageStatus2,
      config,
      onSetPageLanguage,
      root: root2,
      onToggleTranslate,
      onRestorePage,
      ctx,
      currentUrl,
      currentLang,
      onClose,
      onTranslatePage
    } = props;
    const setSettings = onUserConfigChange;
    const [message, setMessage] = P2("");
    const { t: t17 } = useI18n();
    let isAlwaysTranslateUrl = null;
    let isNeverTranslateUrl = null;
    let isAlwaysTranslateLang = null;
    let isNeverTranslateLang = null;
    let curentTranslationServiceItem = null;
    let currentUrlObj = null;
    let currentTranslationServiceConfig = null;
    if (config) {
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
    if (config && currentLang !== "auto") {
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
    const handleOpenOptions = (e18) => {
      e18.preventDefault();
      browserAPI.runtime.openOptionsPage();
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
      if (name === "matches" && pageStatus2 === "Original") {
        setTimeout(() => {
          onTranslatePage();
          onClose();
        }, 100);
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
      if (name === "matches" && pageStatus2 === "Original") {
        setTimeout(() => {
          onTranslatePage();
          onClose();
        }, 100);
      }
    };
    let buttonLabel = t17("translate");
    if (pageStatus2 === "Translated") {
      buttonLabel = t17("show-original");
    } else if (pageStatus2 === "Original") {
      buttonLabel = t17("translate");
    } else {
      buttonLabel = t17(pageStatus2);
    }
    let translationServiceItems = [];
    if (ctx) {
      translationServiceItems = getTranslationServices(ctx);
    }
    const handleClosePopup = () => {
      onClose();
    };
    return /* @__PURE__ */ p20("div", {
      className: "p-3",
      children: [
        /* @__PURE__ */ p20("div", {
          class: "text-sm",
          children: [
            /* @__PURE__ */ p20("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p20("label", {
                  class: "inline-block",
                  children: "\u6E90\u8BED\u8A00\uFF1A"
                }),
                /* @__PURE__ */ p20(SelectLink, {
                  root: root2,
                  items: languages.map((code2) => {
                    return {
                      label: t17(`languages.${code2}`),
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
            config && config.targetLanguage && /* @__PURE__ */ p20("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p20("label", {
                  class: "inline-block",
                  children: "\u76EE\u6807\u8BED\u8A00\uFF1A"
                }),
                /* @__PURE__ */ p20(SelectLink, {
                  root: root2,
                  items: languages.map((code2) => {
                    return {
                      label: t17(`languages.${code2}`),
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
            curentTranslationServiceItem && translationServiceItems.length > 0 && /* @__PURE__ */ p20(L, {
              children: [
                /* @__PURE__ */ p20("div", {
                  class: "flex justify-between mb-2",
                  children: [
                    /* @__PURE__ */ p20("label", {
                      class: "inline-block",
                      children: "\u7FFB\u8BD1\u670D\u52A1\uFF1A"
                    }),
                    /* @__PURE__ */ p20(SelectLink, {
                      root: root2,
                      items: translationServiceItems.map(
                        (translationServiceItem) => {
                          return {
                            label: `${t17("translationServices." + translationServiceItem.id)}${translationServiceItem.ok ? "" : " (\u53BB\u8BBE\u7F6E)"}`,
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
                                if (selectedItem.props.length === 0) {
                                  setTimeout(() => {
                                    onTranslatePage();
                                  }, 1);
                                } else {
                                  setTimeout(() => {
                                    onRestorePage();
                                  }, 1);
                                }
                              } else {
                                setSettings((state) => {
                                  return {
                                    ...state,
                                    translationService: selectedItem.id
                                  };
                                });
                                setTimeout(() => {
                                  onRestorePage();
                                }, 1);
                                setTimeout(() => {
                                  browserAPI.runtime.openOptionsPage();
                                  onClose();
                                }, 100);
                              }
                            }
                          };
                        }
                      )
                    })
                  ]
                }),
                currentTranslationServiceConfig && curentTranslationServiceItem.props.length > 0 && curentTranslationServiceItem.props.map((prop, index) => {
                  return /* @__PURE__ */ p20("div", {
                    class: "pl-4 text-sm",
                    children: /* @__PURE__ */ p20(PopupField, {
                      root: root2,
                      size: "sm",
                      field: prop,
                      value: currentTranslationServiceConfig[prop.name],
                      onChange: (value) => {
                        setSettings((state) => {
                          const currentServices = state.translationServices || {};
                          const currentServiceConfig = currentServices[curentTranslationServiceItem.id] || {};
                          setTimeout(() => {
                            onRestorePage();
                          }, 1);
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
                    }, "field-" + index)
                  });
                })
              ]
            }),
            isAlwaysTranslateUrl !== null && isNeverTranslateUrl !== null && /* @__PURE__ */ p20("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p20("label", {
                  class: "inline-block",
                  children: "\u5BF9\u4E8E\u8BE5\u7F51\u7AD9\uFF1A"
                }),
                /* @__PURE__ */ p20(SelectLink, {
                  root: root2,
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
            isAlwaysTranslateLang !== null && isNeverTranslateLang !== null && currentLang !== "auto" && /* @__PURE__ */ p20("div", {
              class: "flex justify-between mb-2",
              children: [
                /* @__PURE__ */ p20("label", {
                  class: "inline-block",
                  children: [
                    "\u5BF9\u4E8E\u300C",
                    t17(`languages.${currentLang}`),
                    "\u300D\uFF1A"
                  ]
                }),
                /* @__PURE__ */ p20(SelectLink, {
                  root: root2,
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
        /* @__PURE__ */ p20("button", {
          class: "py-2 mt-2 mb-2",
          onClick: onToggleTranslate,
          children: buttonLabel
        }),
        /* @__PURE__ */ p20("footer", {
          className: "text-sm flex justify-between",
          children: [
            /* @__PURE__ */ p20("span", {
              onClick: onClickMultipleTimes(7)(handleToggleAlpha),
              children: [
                "V",
                version
              ]
            }),
            isMonkey() && /* @__PURE__ */ p20("a", {
              href: "#",
              class: "secondary",
              onClick: handleClosePopup,
              children: t17("close")
            }),
            /* @__PURE__ */ p20("a", {
              href: "#",
              class: "secondary",
              onClick: handleOpenOptions,
              children: t17("options")
            })
          ]
        }),
        /* @__PURE__ */ p20("div", {
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
    j3(() => {
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
      j3(() => {
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
    const { root: root2, onClose } = props;
    const [pageStatus2, setPageStatus] = P2("Original");
    const [settings, setSettings, _isPersistent, _error] = useUserConfig();
    const [config, setConfig] = P2(null);
    const [currentUrl, setCurrentUrl] = P2(
      globalThis.location.href
    );
    const [currentLang, setCurrentLang] = P2("auto");
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
    j3(() => {
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
    j3(() => {
      getConfig().then((config2) => {
        setConfig(config2);
      });
    }, [settings]);
    j3(() => {
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
    const handleRestorePage = () => {
      restorePage();
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
    return /* @__PURE__ */ p20(Popup, {
      root: root2,
      onClose: handleClose,
      onToggleTranslate: handleToggleTranslatePage,
      onTranslatePage: handleTranslatePage,
      onRestorePage: handleRestorePage,
      onSetPageLanguage,
      onUserConfigChange: setSettings,
      config,
      pageStatus: pageStatus2,
      ctx,
      currentUrl,
      currentLang
    });
  }

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
      "deeplx": "DeeplX(Alpha)",
      "bing": "\u5FC5\u5E94\u7FFB\u8BD1",
      "deepl": "Deepl",
      "wechat": "\u5FAE\u4FE1\u7FFB\u8BD1",
      "azure": "\u5FAE\u8F6F\u7FFB\u8BD1",
      "ibm": "IBM Watson",
      "aws": "\u4E9A\u9A6C\u900A\u7FFB\u8BD1",
      "mock": "\u6A21\u62DF\u7FFB\u8BD1",
      "caiyun": "\u5F69\u4E91\u5C0F\u8BD1",
      "volcAlpha": "\u706B\u5C71\u7FFB\u8BD1(Alpha)",
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
      "tn": "\u672D\u90A3\u8BED",
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

  // userscript/popup_entry.tsx
  function addCSSLegacy(root2, csses) {
    for (const css of csses) {
      root2.appendChild(document.createElement("style")).innerHTML = css;
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
      env2.IMMERSIVE_TRANSLATE_PICO_CSS,
      env2.IMMERSIVE_TRANSLATE_COMMON_CSS,
      env2.IMMERSIVE_TRANSLATE_POPUP_CSS
    ];
    addCSSLegacy(shadow, csses);
    const mountRoot = document.createElement("div");
    mountRoot.innerHTML = env2.IMMERSIVE_TRANSLATE_POPUP_HTML;
    shadow.appendChild(mountRoot);
    const script = document.createElement("script");
    script.textContent = env2.IMMERSIVE_TRANSLATE_POPUP_JS;
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
    document.addEventListener("click", (e18) => {
      if (e18.target.id !== "immersive-translate-popup") {
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
      re(
        /* @__PURE__ */ p20(TranslateProvider, {
          lang: config.interfaceLanguage,
          fallbackLang: "zh-CN",
          translations: locales_default,
          children: /* @__PURE__ */ p20(PopupApp, {
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
    toggleTranslatePage().catch((e18) => {
      console.error(`Translate page error:`, e18);
    });
  }
  if (globalThis.GM && globalThis.GM.registerMenuCommand) {
    globalThis.GM.registerMenuCommand(
      "Toggle Translate",
      toggleTranslatePage2,
      "t"
    );
  }
  var addCSS = (css) => document.head.appendChild(document.createElement("style")).innerHTML = css;
  async function main2() {
    const config = await getConfig();
    const options2 = {
      url: globalThis.location.href,
      config
    };
    const ctx = await getContext(options2);
    if (config.debug) {
      log_default.setLevel("debug");
    }
    if (ctx.isTranslateExcludeUrl) {
      log_default.debug("detect exclude url, do not inject anything.");
    } else {
      const env2 = getEnv();
      const injectedCss = env2.IMMERSIVE_TRANSLATE_INJECTED_CSS;
      if (injectedCss) {
        addCSS(injectedCss);
      }
      initPopup();
    }
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
