(()=>{var Sm=Object.create;var li=Object.defineProperty;var Pm=Object.getOwnPropertyDescriptor;var Cm=Object.getOwnPropertyNames;var Om=Object.getPrototypeOf,Im=Object.prototype.hasOwnProperty;var Or=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,o)=>(typeof require<"u"?require:r)[o]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Fm=(e,r)=>()=>(e&&(r=e(e=0)),r);var Lm=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),km=(e,r)=>{for(var o in r)li(e,o,{get:r[o],enumerable:!0})},Nm=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of Cm(r))!Im.call(e,l)&&l!==o&&li(e,l,{get:()=>r[l],enumerable:!(n=Pm(r,l))||n.enumerable});return e};var Rm=(e,r,o)=>(o=e!=null?Sm(Om(e)):{},Nm(r||!e||!e.__esModule?li(o,"default",{value:e,enumerable:!0}):o,e));var xe,Y=Fm(()=>{xe={BUILD_TIME:"2025-01-26T12:05:46.418Z",VERSION:"1.13.8",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_FIREFOX:"1",INSTALL_FROM:"dev",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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
  --immersive-translate-theme-background-backgroundColor: #DBAFAF;
  --immersive-translate-theme-background-backgroundColor-rgb: 219, 175, 175;
  --immersive-translate-theme-background-backgroundOpacity: 12;
  --immersive-translate-theme-opacity-opacity: 10;
}

[imt-state="dual"] .immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

[imt-state="dual"] .immersive-translate-pdf-target-container {
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
[imt-state="dual"] .immersive-translate-target-wrapper[dir="rtl"] {
  text-align: right;
}

[imt-state="dual"]
  .immersive-translate-pdf-target-container
  .immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

[imt-state="dual"]
  .immersive-translate-pdf-target-container
  .immersive-translate-target-wrapper
  font {
  color: inherit;
  white-space: inherit;
  position: unset;
}

[imt-state="translation"] .immersive-translate-target-wrapper > br {
  display: none;
}

[imt-state="translation"]
  .immersive-translate-target-translation-block-wrapper {
  margin: 0 !important;
}

[imt-state="dual"] .immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: inline-block;
}

[imt-trans-position="before"]
  .immersive-translate-target-translation-block-wrapper {
  display: block;
}

[imt-trans-position="before"]
  .immersive-translate-target-translation-block-wrapper {
  margin-top: 0 !important;
}

[imt-state="dual"] .immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-grey-inner {
  color: var(--immersive-translate-theme-grey-textColor);
}

[imt-state="dual"]
  .immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid
    var(--immersive-translate-theme-underline-borderColor) !important;
}

[imt-state="dual"]
  .immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline !important;
  text-decoration-color: var(
    --immersive-translate-theme-nativeUnderline-borderColor
  ) !important;
}

[imt-state="dual"]
  .immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-dashedBorder-borderRadius
  ) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

[imt-state="dual"]
  .immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-dashedBorder-borderRadius
  ) !important;
  padding: 2px;
}

[imt-state="dual"]
  .immersive-translate-target-translation-block-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-solidBorder-borderRadius
  ) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

[imt-state="dual"]
  .immersive-translate-target-translation-inline-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(
    --immersive-translate-theme-solidBorder-borderRadius
  ) !important;
  padding: 2px;
}

[imt-state="dual"]
  .immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: underline !important;
  text-decoration-color: var(
    --immersive-translate-theme-nativeDashed-borderColor
  ) !important;
  text-decoration-style: dashed !important;
}

[imt-state="dual"]
  .immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed
    var(--immersive-translate-theme-thinDashed-borderColor) !important;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-dotted-inner {
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

[imt-state="dual"]
  .immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: underline !important;
  text-decoration-color: var(
    --immersive-translate-theme-nativeDotted-borderColor
  ) !important;
  text-decoration-style: dotted !important;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: underline !important;
  text-decoration-color: var(
    --immersive-translate-theme-wavy-borderColor
  ) !important;
  text-decoration-style: wavy !important;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-dashed-inner {
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

[imt-state="dual"]
  .immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed
    var(--immersive-translate-theme-dividingLine-borderColor);
  padding-top: 8px;
}

[imt-state="dual"]
  .immersive-translate-target-translation-inline-wrapper-theme-dividingLine::before {
  content: "";
  border-left: 1px dashed
    var(--immersive-translate-theme-dividingLine-borderColor);
  max-height: 16px;
  height: 16px;
  padding-left: 8px;
}

[imt-state="dual"]
  .immersive-translate-target-translation-theme-highlight-inner {
  background: var(--immersive-translate-theme-highlight-backgroundColor);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

[imt-state="dual"]
  .immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-marker2-inner {
  font-weight: bold;
  text-shadow: 10px 0px 3px
      var(--immersive-translate-theme-marker2-backgroundColor),
    16px 3px 9px var(--immersive-translate-theme-marker2-backgroundColor),
    2px 0px 6px var(--immersive-translate-theme-marker2-backgroundColor),
    -12px 0px 12px var(--immersive-translate-theme-marker2-backgroundColor) !important;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-marker-inner {
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

[imt-state="dual"] .immersive-translate-target-translation-theme-weakening {
  opacity: 0.618 !important;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

[imt-state="dual"]
  .immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

[imt-state="dual"]
  .immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid var(--immersive-translate-theme-blockquote-borderColor) !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

[imt-state="dual"] .immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
  display: inline-block;
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
  display: inline-block;
}

/* opacity theme start */

[imt-state="dual"] .immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(
    calc(var(--immersive-translate-theme-opacity-opacity) * 1%)
  ) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
  display: inline-block;
}

[data-immersive-translate-root-translation-theme="none"]
  .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"]
  .immersive-translate-target-inner,
[imt-state="dual"]
  .immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: opacity(
    calc(var(--immersive-translate-theme-opacity-opacity) * 1%)
  ) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
  display: inline-block;
}

[imt-state="dual"]
  .immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}

[imt-state="dual"]
  .immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"]
  .immersive-translate-target-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* opacity theme end */


/* background theme start */
[imt-state="dual"]
.immersive-translate-target-translation-block-wrapper-theme-background {
  margin: 8px 0;
  background: rgba(var(--immersive-translate-theme-background-backgroundColor-rgb), calc(var(--immersive-translate-theme-background-backgroundOpacity) * 1%)); 
  border-radius: 4px;
  box-shadow: unset !important;
  padding: 12px;
  display: block;
}
[imt-state="dual"]
.immersive-translate-target-translation-theme-background-inner {
  background: rgba(var(--immersive-translate-theme-background-backgroundColor-rgb), calc(var(--immersive-translate-theme-background-backgroundOpacity) * 1%)); 
  padding-left: 6px;
  padding-right: 6px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
[imt-state="dual"] .immersive-translate-target-translation-block-wrapper .immersive-translate-target-translation-theme-background-inner {
  background: unset;
  padding-left: unset;
  padding-right: unset;
}
/* background theme end */

/* vertical css , please remain it in the last one. */
.immersive-translate-target-translation-vertical-block-wrapper {
  margin: 0px 8px !important;
}

.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error-toast {
  position: fixed;
  top: 5%;
  z-index: 99999999;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 300px;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media all and (min-width: 750px) {
  .immersive-translate-error-toast {
    max-width: 400px;
  }
}

.immersive-translate-clickable-button {
  cursor: pointer;
}

.immersive-translate-help-button {
  cursor: pointer;
}

.immersive-translate-loading-text:before {
  content: "...";
}

/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }
}

.immersive-translate-error-wrapper {
  position: relative;
  display: inline-flex;
  padding: 6px;
  margin: 0 12px;
  white-space: nowrap;
  font-size: 0.9em;
}
[lang="zh-CN"] .immersive-translate-error-wrapper {
  font-size: 0.75em;
}
[lang="zh-TW"] .immersive-translate-error-wrapper {
  font-size: 0.75em;
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-flex;
  /* little indicater to indicate it's hoverable */
}

.immersive-translate-tooltip-content {
  /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  left: 50%;
  bottom: 0;
  transform: translate(-50%, 110%);
  line-height: 1;
  /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000c;
  color: #fff;
  text-align: center;
  font-size: 14px;
  display: none;
  /* hide by default */
}

.immersive-translate-tooltip:hover .immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip:hover + .immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip-content-table {
  left: unset !important;
  bottom: unset !important;
  transform: translate(-10%, 50%) !important;
}

.immersive-translate-tooltip:hover:before {
  display: block;
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-left: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
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


.imt-image-status {
  background-color: rgba(0, 0, 0, 0.50);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--bg-2, #FFF);
  font-size: 14px;
}
`,IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS:`.immersive-translate-input {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2147483647;
  display: flex;
  justify-content: center;
  align-items: center;
}
.immersive-translate-attach-loading::after {
  content: " ";

  --loading-color: #f78fb6;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: block;
  margin: 12px auto;
  position: relative;
  color: white;
  left: -100px;
  box-sizing: border-box;
  animation: immersiveTranslateShadowRolling 1.5s linear infinite;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-2000%, -50%);
  z-index: 100;
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-left: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
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

.immersive-translate-input-loading {
  --loading-color: #f78fb6;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: block;
  margin: 12px auto;
  position: relative;
  color: white;
  left: -100px;
  box-sizing: border-box;
  animation: immersiveTranslateShadowRolling 1.5s linear infinite;
}

@keyframes immersiveTranslateShadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),
      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  12% {
    box-shadow: 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0),
      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  25% {
    box-shadow: 110px 0 var(--loading-color), 100px 0 var(--loading-color),
      0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  36% {
    box-shadow: 120px 0 var(--loading-color), 110px 0 var(--loading-color),
      100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0);
  }

  50% {
    box-shadow: 130px 0 var(--loading-color), 120px 0 var(--loading-color),
      110px 0 var(--loading-color), 100px 0 var(--loading-color);
  }

  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color),
      120px 0 var(--loading-color), 110px 0 var(--loading-color);
  }

  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
      130px 0 var(--loading-color), 120px 0 var(--loading-color);
  }

  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
      200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color);
  }

  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
      200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}

.immersive-translate-toast {
  display: flex;
  position: fixed;
  z-index: 2147483647;
  left: 0;
  right: 0;
  top: 1%;
  width: fit-content;
  padding: 12px 20px;
  margin: auto;
  overflow: auto;
  background: #fef6f9;
  box-shadow: 0px 4px 10px 0px rgba(0, 10, 30, 0.06);
  font-size: 15px;
  border-radius: 8px;
  color: #333;
}

.immersive-translate-toast-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.immersive-translate-toast-hidden {
  margin: 0 20px 0 72px;
  text-decoration: underline;
  cursor: pointer;
}

.immersive-translate-toast-close {
  color: #666666;
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .immersive-translate-toast {
    top: 0;
    padding: 12px 0px 0 10px;
  }
  .immersive-translate-toast-content {
    flex-direction: column;
    text-align: center;
  }
  .immersive-translate-toast-hidden {
    margin: 10px auto;
  }
}

.immersive-translate-modal {
  display: none;
  position: fixed;
  z-index: 2147483647;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 15px;
}

.immersive-translate-modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 40px 24px 24px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
  max-width: 270px;
  font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  position: relative;
}

@media screen and (max-width: 768px) {
  .immersive-translate-modal-content {
    margin: 50% auto !important;
  }
}

.immersive-translate-modal .immersive-translate-modal-content-in-input {
  max-width: 500px;
}
.immersive-translate-modal-content-in-input .immersive-translate-modal-body {
  text-align: left;
  max-height: unset;
}

.immersive-translate-modal-title {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #333333;
}

.immersive-translate-modal-body {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  word-break: break-all;
  margin-top: 24px;
}

@media screen and (max-width: 768px) {
  .immersive-translate-modal-body {
    max-height: 250px;
    overflow-y: auto;
  }
}

.immersive-translate-close {
  color: #666666;
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 20px;
  font-weight: bold;
}

.immersive-translate-close:hover,
.immersive-translate-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.immersive-translate-modal-footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
}

.immersive-translate-btn {
  width: fit-content;
  color: #fff;
  background-color: #ea4c89;
  border: none;
  font-size: 16px;
  margin: 0 8px;
  padding: 9px 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.immersive-translate-btn:hover {
  background-color: #f082ac;
}
.immersive-translate-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.immersive-translate-btn:disabled:hover {
  background-color: #ea4c89;
}

.immersive-translate-cancel-btn {
  /* gray color */
  background-color: rgb(89, 107, 120);
}

.immersive-translate-cancel-btn:hover {
  background-color: hsl(205, 20%, 32%);
}

.immersive-translate-action-btn {
  background-color: transparent;
  color: #ea4c89;
  border: 1px solid #ea4c89;
}

.immersive-translate-btn svg {
  margin-right: 5px;
}

.immersive-translate-link {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: #007bff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
}

.immersive-translate-primary-link {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: #ea4c89;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
}

.immersive-translate-modal input[type="radio"] {
  margin: 0 6px;
  cursor: pointer;
}

.immersive-translate-modal label {
  cursor: pointer;
}

.immersive-translate-close-action {
  position: absolute;
  top: 2px;
  right: 0px;
  cursor: pointer;
}

.imt-image-status {
  background-color: rgba(0, 0, 0, 0.5) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 16px !important;
}
.imt-image-status img,
.imt-image-status svg,
.imt-img-loading {
  width: 28px !important;
  height: 28px !important;
  margin: 0 0 8px 0 !important;
  min-height: 28px !important;
  min-width: 28px !important;
  position: relative !important;
}
.imt-img-loading {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAPHRSTlMABBMIDyQXHwyBfFdDMSw+OjXCb+5RG51IvV/k0rOqlGRM6KKMhdvNyZBz9MaupmxpWyj437iYd/yJVNZeuUC7AAACt0lEQVRIx53T2XKiUBCA4QYOiyCbiAsuuGBcYtxiYtT3f6/pbqoYHVFO5r+iivpo6DpAWYpqeoFfr9f90DsYAuRSWkFnPO50OgR9PwiCUFcl2GEcx+N/YBh6pvKaefHlUgZd1zVe0NbYcQjGBfzrPE8Xz8aF+71D8gG6DHFPpc4a7xFiCDuhaWgKgGIJQ3d5IMGDrpS4S5KgpIm+en9f6PlAhKby4JwEIxlYJV9h5k5nee9GoxHJ2IDSNB0dwdad1NAxDJ/uXDHYmebdk4PdbkS58CIVHdYSUHTYYRWOJblWSyu2lmy3KNFVJNBhxcuGW4YBVCbYGRZwIooipHsNqjM4FbgOQqQqSKQQU9V8xmi1QlgHqQQ6DDBvRUVCDirs+EzGDGOQTCATgtYTnbCVLgsVgRE0T1QE0qHCFAht2z6dLvJQs3Lo2FQoDxWNUiBhaP4eRgwNkI+dAjVOA/kUrIDwf3CG8NfNOE0eiFotSuo+rBiq8tD9oY4Qzc6YJw99hl1wzpQvD7ef2M8QgnOGJfJw+EltQc+oX2yn907QB22WZcvlUpd143dqQu+8pCJZuGE4xCuPXJqqcs5sNpsI93Rmzym1k4Npk+oD1SH3/a3LOK/JpUBpWfqNySxWzCfNCUITuDG5dtuphrUJ1myeIE9bIsPiKrfqTai5WZxbhtNphYx6GEIHihyGFTI69lje/rxajdh0s0msZ0zYxyPLhYCb1CyHm9Qsd2H37Y3lugVwL9kNh8Ot8cha6fUNQ8nuXi5z9/ExsAO4zQrb/ev1yrCB7lGyQzgYDGuxq1toDN/JGvN+HyWNHKB7zEoK+PX11e12G431erGYzwmytAWU56fkMHY5JJnDRR2eZji3AwtIcrEV8Cojat/BdQ7XOwGV1e1hDjGGjXbdArm8uJZtCH5MbcctVX8A1WpqumJHwckAAAAASUVORK5CYII=");
  background-size: 28px 28px;
  animation: image-loading-rotate 1s linear infinite !important;
}

.imt-image-status span {
  color: var(--bg-2, #fff) !important;
  font-size: 14px !important;
  line-height: 14px !important;
  font-weight: 500 !important;
  font-family: "PingFang SC", Arial, sans-serif !important;
}

@keyframes image-loading-rotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
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
  --background-light-green: #F5F7F9;
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
  --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTguOTM0OCA4LjY0ODQ0QzIwLjg5NDEgOC42NDg0NCAyMi40ODU1IDcuMDU0NjkgMjIuNDg1NSA1LjA5NzY2QzIyLjQ4NTUgMy4xNDA2MiAyMC44OTE4IDEuNTQ2ODggMTguOTM0OCAxLjU0Njg4QzE2Ljk3NTQgMS41NDY4OCAxNS4zODQgMy4xNDA2MiAxNS4zODQgNS4wOTc2NkMxNS4zODQgNS4yOTkyMiAxNS40MDA0IDUuNDkzNzUgMTUuNDMzMiA1LjY4NTk0TDcuMzIzODMgOS4zNTM5MUM2LjcwOTc3IDguODQ1MzEgNS45MjIyNyA4LjU0MDYyIDUuMDY0NDUgOC41NDA2MkMzLjEwNTA4IDguNTQwNjIgMS41MTM2NyAxMC4xMzQ0IDEuNTEzNjcgMTIuMDkxNEMxLjUxMzY3IDE0LjA0ODQgMy4xMDc0MiAxNS42NDIyIDUuMDY0NDUgMTUuNjQyMkM1LjgzMzIgMTUuNjQyMiA2LjU0NTcgMTUuMzk2MSA3LjEyNjk1IDE0Ljk4MTNMMTIuNDk0MSAxNy45OTUzQzEyLjQxNjggMTguMjg1OSAxMi4zNzcgMTguNTg4MyAxMi4zNzcgMTguOTAyM0MxMi4zNzcgMjAuODYxNyAxMy45NzA3IDIyLjQ1MzEgMTUuOTI3NyAyMi40NTMxQzE3Ljg4NzEgMjIuNDUzMSAxOS40Nzg1IDIwLjg1OTQgMTkuNDc4NSAxOC45MDIzQzE5LjQ3ODUgMTYuOTQzIDE3Ljg4NDggMTUuMzUxNiAxNS45Mjc3IDE1LjM1MTZDMTQuOTU3NCAxNS4zNTE2IDE0LjA3ODUgMTUuNzQzIDEzLjQzNjMgMTYuMzczNEw4LjMyMjI3IDEzLjUwNDdDOC41MDk3NyAxMy4wNzExIDguNjE1MjMgMTIuNTk1MyA4LjYxNTIzIDEyLjA5MzhDOC42MTUyMyAxMS42ODEyIDguNTQ0OTIgMTEuMjg3NSA4LjQxNjAyIDEwLjkxOTVMMTYuMjIzIDcuMzg3NUMxNi44NzQ2IDguMTU2MjUgMTcuODQ5NiA4LjY0ODQ0IDE4LjkzNDggOC42NDg0NFpNNS4wNjQ0NSAxMy43Njk1QzQuMTQxMDIgMTMuNzY5NSAzLjM4ODY3IDEzLjAxNzIgMy4zODg2NyAxMi4wOTM4QzMuMzg4NjcgMTEuMTcwMyA0LjE0MTAyIDEwLjQxOCA1LjA2NDQ1IDEwLjQxOEM1Ljk4Nzg5IDEwLjQxOCA2Ljc0MDIzIDExLjE3MDMgNi43NDAyMyAxMi4wOTM4QzYuNzQwMjMgMTMuMDE3MiA1Ljk4Nzg5IDEzLjc2OTUgNS4wNjQ0NSAxMy43Njk1Wk0xNS45Mjc3IDE3LjIyNjZDMTYuODUxMiAxNy4yMjY2IDE3LjYwMzUgMTcuOTc4OSAxNy42MDM1IDE4LjkwMjNDMTcuNjAzNSAxOS44MjU4IDE2Ljg1MTIgMjAuNTc4MSAxNS45Mjc3IDIwLjU3ODFDMTUuMDA0MyAyMC41NzgxIDE0LjI1MiAxOS44MjU4IDE0LjI1MiAxOC45MDIzQzE0LjI1MiAxNy45Nzg5IDE1LjAwMiAxNy4yMjY2IDE1LjkyNzcgMTcuMjI2NlpNMTguOTM0OCAzLjQxOTUzQzE5Ljg1ODIgMy40MTk1MyAyMC42MTA1IDQuMTcxODcgMjAuNjEwNSA1LjA5NTMxQzIwLjYxMDUgNi4wMTg3NSAxOS44NTgyIDYuNzcxMDkgMTguOTM0OCA2Ljc3MTA5QzE4LjAxMTMgNi43NzEwOSAxNy4yNTkgNi4wMTg3NSAxNy4yNTkgNS4wOTUzMUMxNy4yNTkgNC4xNzE4NyAxOC4wMTEzIDMuNDE5NTMgMTguOTM0OCAzLjQxOTUzWicgZmlsbD0nIzgzODM4MycvPjwvc3ZnPiA=");
  --float-ball-more-button-border-color: #F6F6F6;
  --float-ball-more-button-background-color: #FCFCFC;
  --float-ball-more-button-svg-color: #6C6F73;
  color-scheme: light;
  --service-bg-hover:#F7FAFF;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --background-light-green: #141e26;
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
    --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjInIGhlaWdodD0nMjInIHZpZXdCb3g9JzAgMCAyMiAyMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTcuOTM0OCA3LjY0ODQ0QzE5Ljg5NDEgNy42NDg0NCAyMS40ODU1IDYuMDU0NjkgMjEuNDg1NSA0LjA5NzY2QzIxLjQ4NTUgMi4xNDA2MiAxOS44OTE4IDAuNTQ2ODc1IDE3LjkzNDggMC41NDY4NzVDMTUuOTc1NCAwLjU0Njg3NSAxNC4zODQgMi4xNDA2MiAxNC4zODQgNC4wOTc2NkMxNC4zODQgNC4yOTkyMiAxNC40MDA0IDQuNDkzNzUgMTQuNDMzMiA0LjY4NTk0TDYuMzIzODMgOC4zNTM5MUM1LjcwOTc3IDcuODQ1MzEgNC45MjIyNyA3LjU0MDYyIDQuMDY0NDUgNy41NDA2MkMyLjEwNTA4IDcuNTQwNjIgMC41MTM2NzIgOS4xMzQzOCAwLjUxMzY3MiAxMS4wOTE0QzAuNTEzNjcyIDEzLjA0ODQgMi4xMDc0MiAxNC42NDIyIDQuMDY0NDUgMTQuNjQyMkM0LjgzMzIgMTQuNjQyMiA1LjU0NTcgMTQuMzk2MSA2LjEyNjk1IDEzLjk4MTNMMTEuNDk0MSAxNi45OTUzQzExLjQxNjggMTcuMjg1OSAxMS4zNzcgMTcuNTg4MyAxMS4zNzcgMTcuOTAyM0MxMS4zNzcgMTkuODYxNyAxMi45NzA3IDIxLjQ1MzEgMTQuOTI3NyAyMS40NTMxQzE2Ljg4NzEgMjEuNDUzMSAxOC40Nzg1IDE5Ljg1OTQgMTguNDc4NSAxNy45MDIzQzE4LjQ3ODUgMTUuOTQzIDE2Ljg4NDggMTQuMzUxNiAxNC45Mjc3IDE0LjM1MTZDMTMuOTU3NCAxNC4zNTE2IDEzLjA3ODUgMTQuNzQzIDEyLjQzNjMgMTUuMzczNEw3LjMyMjI3IDEyLjUwNDdDNy41MDk3NyAxMi4wNzExIDcuNjE1MjMgMTEuNTk1MyA3LjYxNTIzIDExLjA5MzhDNy42MTUyMyAxMC42ODEyIDcuNTQ0OTIgMTAuMjg3NSA3LjQxNjAyIDkuOTE5NTNMMTUuMjIzIDYuMzg3NUMxNS44NzQ2IDcuMTU2MjUgMTYuODQ5NiA3LjY0ODQ0IDE3LjkzNDggNy42NDg0NFpNNC4wNjQ0NSAxMi43Njk1QzMuMTQxMDIgMTIuNzY5NSAyLjM4ODY3IDEyLjAxNzIgMi4zODg2NyAxMS4wOTM4QzIuMzg4NjcgMTAuMTcwMyAzLjE0MTAyIDkuNDE3OTcgNC4wNjQ0NSA5LjQxNzk3QzQuOTg3ODkgOS40MTc5NyA1Ljc0MDIzIDEwLjE3MDMgNS43NDAyMyAxMS4wOTM4QzUuNzQwMjMgMTIuMDE3MiA0Ljk4Nzg5IDEyLjc2OTUgNC4wNjQ0NSAxMi43Njk1Wk0xNC45Mjc3IDE2LjIyNjZDMTUuODUxMiAxNi4yMjY2IDE2LjYwMzUgMTYuOTc4OSAxNi42MDM1IDE3LjkwMjNDMTYuNjAzNSAxOC44MjU4IDE1Ljg1MTIgMTkuNTc4MSAxNC45Mjc3IDE5LjU3ODFDMTQuMDA0MyAxOS41NzgxIDEzLjI1MiAxOC44MjU4IDEzLjI1MiAxNy45MDIzQzEzLjI1MiAxNi45Nzg5IDE0LjAwMiAxNi4yMjY2IDE0LjkyNzcgMTYuMjI2NlpNMTcuOTM0OCAyLjQxOTUzQzE4Ljg1ODIgMi40MTk1MyAxOS42MTA1IDMuMTcxODcgMTkuNjEwNSA0LjA5NTMxQzE5LjYxMDUgNS4wMTg3NSAxOC44NTgyIDUuNzcxMDkgMTcuOTM0OCA1Ljc3MTA5QzE3LjAxMTMgNS43NzEwOSAxNi4yNTkgNS4wMTg3NSAxNi4yNTkgNC4wOTUzMUMxNi4yNTkgMy4xNzE4NyAxNy4wMTEzIDIuNDE5NTMgMTcuOTM0OCAyLjQxOTUzWicgZmlsbD0nI0I2QjZCNicvPjwvc3ZnPiA=");
    color-scheme: dark;
    --service-bg-hover:#22292F;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --background-light-green: #141e26;
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
  --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjInIGhlaWdodD0nMjInIHZpZXdCb3g9JzAgMCAyMiAyMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTcuOTM0OCA3LjY0ODQ0QzE5Ljg5NDEgNy42NDg0NCAyMS40ODU1IDYuMDU0NjkgMjEuNDg1NSA0LjA5NzY2QzIxLjQ4NTUgMi4xNDA2MiAxOS44OTE4IDAuNTQ2ODc1IDE3LjkzNDggMC41NDY4NzVDMTUuOTc1NCAwLjU0Njg3NSAxNC4zODQgMi4xNDA2MiAxNC4zODQgNC4wOTc2NkMxNC4zODQgNC4yOTkyMiAxNC40MDA0IDQuNDkzNzUgMTQuNDMzMiA0LjY4NTk0TDYuMzIzODMgOC4zNTM5MUM1LjcwOTc3IDcuODQ1MzEgNC45MjIyNyA3LjU0MDYyIDQuMDY0NDUgNy41NDA2MkMyLjEwNTA4IDcuNTQwNjIgMC41MTM2NzIgOS4xMzQzOCAwLjUxMzY3MiAxMS4wOTE0QzAuNTEzNjcyIDEzLjA0ODQgMi4xMDc0MiAxNC42NDIyIDQuMDY0NDUgMTQuNjQyMkM0LjgzMzIgMTQuNjQyMiA1LjU0NTcgMTQuMzk2MSA2LjEyNjk1IDEzLjk4MTNMMTEuNDk0MSAxNi45OTUzQzExLjQxNjggMTcuMjg1OSAxMS4zNzcgMTcuNTg4MyAxMS4zNzcgMTcuOTAyM0MxMS4zNzcgMTkuODYxNyAxMi45NzA3IDIxLjQ1MzEgMTQuOTI3NyAyMS40NTMxQzE2Ljg4NzEgMjEuNDUzMSAxOC40Nzg1IDE5Ljg1OTQgMTguNDc4NSAxNy45MDIzQzE4LjQ3ODUgMTUuOTQzIDE2Ljg4NDggMTQuMzUxNiAxNC45Mjc3IDE0LjM1MTZDMTMuOTU3NCAxNC4zNTE2IDEzLjA3ODUgMTQuNzQzIDEyLjQzNjMgMTUuMzczNEw3LjMyMjI3IDEyLjUwNDdDNy41MDk3NyAxMi4wNzExIDcuNjE1MjMgMTEuNTk1MyA3LjYxNTIzIDExLjA5MzhDNy42MTUyMyAxMC42ODEyIDcuNTQ0OTIgMTAuMjg3NSA3LjQxNjAyIDkuOTE5NTNMMTUuMjIzIDYuMzg3NUMxNS44NzQ2IDcuMTU2MjUgMTYuODQ5NiA3LjY0ODQ0IDE3LjkzNDggNy42NDg0NFpNNC4wNjQ0NSAxMi43Njk1QzMuMTQxMDIgMTIuNzY5NSAyLjM4ODY3IDEyLjAxNzIgMi4zODg2NyAxMS4wOTM4QzIuMzg4NjcgMTAuMTcwMyAzLjE0MTAyIDkuNDE3OTcgNC4wNjQ0NSA5LjQxNzk3QzQuOTg3ODkgOS40MTc5NyA1Ljc0MDIzIDEwLjE3MDMgNS43NDAyMyAxMS4wOTM4QzUuNzQwMjMgMTIuMDE3MiA0Ljk4Nzg5IDEyLjc2OTUgNC4wNjQ0NSAxMi43Njk1Wk0xNC45Mjc3IDE2LjIyNjZDMTUuODUxMiAxNi4yMjY2IDE2LjYwMzUgMTYuOTc4OSAxNi42MDM1IDE3LjkwMjNDMTYuNjAzNSAxOC44MjU4IDE1Ljg1MTIgMTkuNTc4MSAxNC45Mjc3IDE5LjU3ODFDMTQuMDA0MyAxOS41NzgxIDEzLjI1MiAxOC44MjU4IDEzLjI1MiAxNy45MDIzQzEzLjI1MiAxNi45Nzg5IDE0LjAwMiAxNi4yMjY2IDE0LjkyNzcgMTYuMjI2NlpNMTcuOTM0OCAyLjQxOTUzQzE4Ljg1ODIgMi40MTk1MyAxOS42MTA1IDMuMTcxODcgMTkuNjEwNSA0LjA5NTMxQzE5LjYxMDUgNS4wMTg3NSAxOC44NTgyIDUuNzcxMDkgMTcuOTM0OCA1Ljc3MTA5QzE3LjAxMTMgNS43NzEwOSAxNi4yNTkgNS4wMTg3NSAxNi4yNTkgNC4wOTUzMUMxNi4yNTkgMy4xNzE4NyAxNy4wMTEzIDIuNDE5NTMgMTcuOTM0OCAyLjQxOTUzWicgZmlsbD0nI0I2QjZCNicvPjwvc3ZnPiA=");
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
  --icon-xia: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkZyYW1lIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTguMDAyOTEgOS42Nzk4M0wzLjgzMzM5IDUuNTEyMjFMMy4wMjUzOSA2LjMxOTgzTDguMDAzMjkgMTEuMjk1MUwxMi45NzYyIDYuMzE5ODNMMTIuMTY3OSA1LjUxMjIxTDguMDAyOTEgOS42Nzk4M1oiIGZpbGw9IiM4MzgzODMiLz4KPC9nPgo8L3N2Zz4K");
  --switch-checked-background-color: var(--primary);
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
  overflow: hidden;
  color: var(--primary);
  font-size: 13px;
  border: none;
  padding: 0;
  padding-right: 20px;
  padding-left: 8px;
  text-overflow: ellipsis;
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
  font-size: 16px;
  --font-size: 16px;
}

body {
  padding: 0;
  margin: 0 auto;
  min-width: 268px;
  border-radius: 10px;
}

.popup-container {
  color: #666;
  background-color: var(--popup-footer-background-color);
  width: 316px;
  min-width: 316px;
}

.popup-content {
  background-color: var(--popup-content-background-color);
  border-radius: 0px 0px 12px 12px;
  padding: 16px 20px;
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

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --popup-footer-background-color: #e8eaeb;
  --popup-content-background-color: #ffffff;
  --popup-item-background-color: #f3f5f6;
  --popup-item-hover-background-color: #eaeced;
  --popup-trial-pro-background-color: #F9FBFC;
  --text-black-2: #222222;
  --text-gray-2: #222222;
  --text-gray-6: #666666;
  --text-gray-9: #999999;
  --text-gray-c2: #c2c2c2;
  --service-select-content-shadow: 0px 2px 12px 0px rgba(75, 76, 77, 0.20);
  --service-select-border-color: #FAFAFA;
  --service-select-selected-background-color: #F3F5F6;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --popup-footer-background-color: #0d0d0d;
    --popup-content-background-color: #191919;
    --popup-item-background-color: #272727;
    --popup-item-hover-background-color: #333333;
    --popup-trial-pro-background-color: #222222;
    --text-black-2: #ffffff;
    --text-gray-2: #dbdbdb;
    --text-gray-6: #b3b3b3;
    --text-gray-9: #777777;
    --text-gray-c2: #5b5b5b;
    --service-select-content-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.90);
    --service-select-border-color: #2C2C2C;
    --service-select-selected-background-color: #333333;
  }
}

[data-theme="dark"] {
  --popup-footer-background-color: #0d0d0d;
  --popup-content-background-color: #191919;
  --popup-item-background-color: #272727;
  --popup-item-hover-background-color: #333333;
  --popup-trial-pro-background-color: #222222;
  --text-black-2: #ffffff;
  --text-gray-2: #dbdbdb;
  --text-gray-6: #b3b3b3;
  --text-gray-9: #777777;
  --text-gray-c2: #5b5b5b;
  --service-select-content-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.90);
  --service-select-border-color: #2C2C2C;
  --service-select-selected-background-color: #333333;
}

.text-balck {
  color: var(--text-black-2);
}

.text-gray-2 {
  color: var(--text-gray-2);
}

.text-gray-6 {
  color: var(--text-gray-6);
}

.text-gray-9 {
  color: var(--text-gray-9);
}

.text-gray-c2 {
  color: var(--text-gray-c2);
}

#mount {
  min-width: 268px;
}

.main-button {
  font-size: 15px;
  vertical-align: middle;
  border-radius: 12px;
  padding: unset;
  height: 44px;
  line-height: 44px;
}

.pt-4 {
  padding-top: 16px;
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

.pb-4 {
  padding-bottom: 16px;
}

.pb-5 {
  padding-bottom: 20px;
}

.pr-5 {
  padding-right: 48px;
}

.text-sm {
  font-size: 13px;
}

.text-base {
  font-size: 16px;
}

.w-full {
  width: 100%;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-end {
  justify-content: flex-end;
}

.flex-grow {
  flex-grow: 1;
}

.justify-between {
  justify-content: space-between;
}

.mb-0 {
  margin-bottom: 0px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-3 {
  margin-bottom: 12px;
}

.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.py-2-5 {
  padding-top: 6px;
  padding-bottom: 6px;
}

.mt-0 {
  margin-top: 0;
}

.mt-2 {
  margin-top: 8px;
}

.mt-3 {
  margin-top: 12px;
}

.mt-4 {
  margin-top: 16px;
}

.mt-5 {
  margin-top: 20px;
}

.mt-6 {
  margin-top: 24px;
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

.ml-1 {
  margin-left: 4px;
}

.mr-1 {
  margin-right: 4px;
}

.mr-2 {
  margin-right: 8px;
}

.mr-3 {
  margin-right: 16px;
}

.mx-2 {
  margin-left: 8px;
  margin-right: 8px;
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

.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}

.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}

.pt-3 {
  padding-top: 12px;
}

.px-6 {
  padding-left: 18px;
  padding-right: 18px;
}

.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}

.pt-6 {
  padding-top: 20px;
}

.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
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

.items-center {
  align-items: center;
}

.max-content {
  width: max-content;
}

.justify-center {
  justify-content: center;
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

.shrink-0 {
  flex-shrink: 0;
}

select.language-select,
select.translate-service,
select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0px;
  max-width: unset;
  flex: 1;
  overflow: hidden;
  font-size: 13px;
  border: none;
  border-radius: 8px;
  padding-right: 30px;
  padding-left: 0px;
  background-position: center right 12px;
  background-size: 16px auto;
  background-image: var(--icon-xia);
  text-overflow: ellipsis;
  color: var(--text-gray-2);
  background-color: transparent;
  box-shadow: unset !important;
  cursor: pointer;
}

select.more {
  background-position: center right;
  padding-right: 20px;
}

select.transform-padding-left {
  padding-left: 12px;
  transform: translateX(-12px);
  background-position: center right 0px;
}

select.translate-service {
  color: var(--text-black-2);
}

/* dark use black, for windows */
@media (prefers-color-scheme: dark) {

  select.language-select option,
  select.translate-service option,
  select.min-select option {
    background-color: #666666;
  }
}

.text-overflow-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.max-w-20 {
  max-width: 180px;
  white-space: nowrap;
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

.popup-footer {
  background-color: var(--popup-footer-background-color);
  height: 40px;
}

.text-right {
  text-align: right;
}

.clickable {
  cursor: pointer;
}

.close {
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}

.padding-two-column {
  padding-left: 40px;
  padding-right: 40px;
}

.muted {
  color: #999;
}

.text-label {
  color: #666;
}

.display-none {
  display: none;
}

/* dark use #18232c */
@media (prefers-color-scheme: dark) {
  .text-label {
    color: #9ca3af;
  }
}

.text-decoration-none {
  text-decoration: none;
}

.text-decoration-none:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --text-decoration: none !important;
  background-color: transparent !important;
}

.language-select-container {
  position: relative;
  width: 100%;
  background-color: var(--popup-item-background-color);
  height: 55px;
  border-radius: 12px;
}

select.language-select {
  color: var(--text-black-2);
  font-size: 14px;
  padding: 8px 24px 24px 16px;
  position: absolute;
  border-radius: 12px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

select.text-gray-6 {
  color: var(--text-gray-6);
}

.language-select-container label {
  position: absolute;
  bottom: 10px;
  left: 16px;
  font-size: 12px;
  color: var(--text-gray-9);
  line-height: 12px;
  margin: 0;
}

.translation-service-container {
  background-color: var(--popup-item-background-color);
  border-radius: 12px;
}

.min-select-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  background-color: var(--popup-item-background-color);
  padding-left: 16px;
}

.min-select-container:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.min-select-container:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.min-select-container:only-child {
  border-radius: 10px;
}

.translate-mode {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: var(--popup-item-background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
}

.translate-mode svg {
  fill: var(--text-gray-2);
}

.widgets-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.widgets-container> :not(:last-child) {
  margin-right: 8px;
}

.widget-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--popup-item-background-color);
  font-size: 12px;
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
}

.widget-item svg {
  fill: var(--text-gray-2);
}

.setting svg {
  fill: var(--text-gray-6);
}

.share-button-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px 3px 0 8px;
}

.share-button-container svg {
  fill: var(--text-gray-9);
}

.min-select-container:hover,
.language-select-container:hover,
.widget-item:hover,
.translate-mode:hover {
  background-color: var(--popup-item-hover-background-color);
}

.main-button:hover {
  background-color: #f5508f;
}

.share-button-container:hover {
  background-color: var(--popup-item-background-color);
  border-radius: 6px;
}

.error-boundary {
  background: #fff2f0;
  border: 1px solid #ffccc7;
  display: flex;
  padding: 12px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.88);
  word-break: break-all;
  margin: 12px;
  border-radius: 12px;
  flex-direction: column;
}


.upgrade-pro {
  border-radius: 11px;
  background: linear-gradient(57deg, #272727 19.8%, #696969 82.2%);
  padding: 2px 8px;
  transform: scale(0.85);
}

.upgrade-pro span {
  background: linear-gradient(180deg, #FFEAB4 17.65%, #F8C235 85.29%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 12px;
  margin-left: 4px;
}


.upgrade-pro svg {
  margin-top: -2px;
}

.upgrade-pro:hover {
  background: linear-gradient(57deg, #3D3D3D 19.8%, #949494 82.2%);
}

.border-bottom-radius-0 {
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.trial-pro-container {
  border-radius: 0px 0px 12px 12px;
  background: var(--popup-trial-pro-background-color);
  display: flex;
  align-items: center;
  height: 44px;
  padding-left: 16px;
  padding-right: 12px;
  font-size: 12px;
}

.trial-pro-container label {
  line-height: 13px;
  color: var(--text-black-2);
}

.trial-pro-container img {
  margin-left: 5px;
}

.cursor-pointer {
  cursor: pointer;
}

.upgrade-pro-discount-act {
  height: 25px;
  display: flex;
  padding: 0 4px;
  align-items: center;
  border-radius: 15px;
  background: linear-gradient(90deg, #CEFBFA 11.33%, #D7F56F 63.75%, #FCCD5E 100%);
  transform: scale(0.9);
  box-shadow: 0px 1.8px 3.6px 0px rgba(0, 0, 0, 0.10);
  cursor: pointer;
}

.upgrade-pro-discount-act span {
  font-size: 12px;
  font-weight: 700;
  margin-left: 4px;
  color: #222222;
}

.upgrade-pro-discount-act:hover {
  text-decoration: unset;
  background: linear-gradient(90deg, #E2FFFE 11.33%, #E6FF91 63.75%, #FFDF93 100%);
}


.custom-select-container {
  width: 200px;
  position: relative;
  flex: 1;
}

.custom-select-content {
  border-radius: 12px;
  background: var(--popup-content-background-color);
  box-shadow: var(--service-select-content-shadow);
  border: 1px solid var(--service-select-border-color);
  padding: 4px 5px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 100;
  overflow-y: auto;
}

.custom-select-item {
  font-size: 13px;
  padding: 5px 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--text-black-2);
  width: 100%;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
}

.custom-select-item-img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}

@media (prefers-color-scheme: dark) {
  .custom-select-item-img {
    margin-right: 6px;
  }
}


.custom-select-content .custom-select-item.selected, .custom-select-content .custom-select-item:hover {
  background: var(--service-select-selected-background-color);
}

.custom-select-item > span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.custom-select-item-pro {
  font-size: 12px;
  margin-left: 6px;
}

.custom-select-item-pro img {
  margin:  0 3px;
  width: 20px;
}

`,IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS:`html {
  font-size: 17px;
}

@media print {
  .imt-fb-container {
    display: none !important;
  }
}

#mount#mount {
  position: absolute;
  display: none;
  min-width: 250px;
  height: auto;
  --font-size: 17px;
  font-size: 17px;
}

/* float-ball */
.imt-fb-container {
  position: fixed;
  padding: 0;
  z-index: 2147483647;
  top: 335px;
  width: 56px;
  display: flex;
  flex-direction: column;
  display: none;
}

.imt-fb-container.left {
  align-items: flex-start;
  left: 0;
}

.imt-fb-container.right {
  align-items: flex-end;
  right: 0;
}

.imt-fb-btn {
  cursor: pointer;
  background: linear-gradient(320.9deg, #db3b7b 26.47%, #ffcee2 88.86%);
  height: 36px;
  width: 56px;
  box-shadow: 2px 6px 10px 0px #0e121629;
}

.imt-fb-btn.left {
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
}

.imt-fb-btn.right {
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
}

.imt-fb-btn div {
  background: linear-gradient(140.91deg, #ff87b7 12.61%, #ec4c8c 76.89%);
  height: 34px;
  width: 54px;
  margin: 1px;
  display: flex;
  align-items: center;
}

.imt-fb-btn.left div {
  border-top-right-radius: 34px;
  border-bottom-right-radius: 34px;
  justify-content: flex-end;
}

.imt-fb-btn.right div {
  border-top-left-radius: 34px;
  border-bottom-left-radius: 34px;
}

.imt-fb-logo-img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}

.imt-float-ball-translated {
  position: absolute;
  width: 11px;
  height: 11px;
  bottom: 4px;
  right: 20px;
}

.btn-animate {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 250ms;
  transition: -webkit-transform ease-out 250ms;
  transition: transform ease-out 250ms;
  transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
}

.imt-fb-setting-btn {
  margin-right: 18px;
  width: 28px;
  height: 28px;
}

.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 20px;
  box-shadow: 2px 10px 24px 0px #0e121614;
  border: none;
}

.popup-container {
  border-radius: 20px;
}

.popup-content {
  border-radius: 20px 20px 12px 12px;
}
.popup-footer {
  border-radius: 20px;
}

.imt-fb-close-content {
  padding: 22px;
  width: 320px;
}

.imt-fb-close-title {
  font-weight: 500;
  color: var(--h2-color);
}

.imt-fb-close-radio-content {
  background-color: var(--background-light-green);
  padding: 8px 20px;
}

.imt-fb-radio-sel,
.imt-fb-radio-nor {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  flex-shrink: 0;
}

.imt-fb-radio-sel {
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.imt-fb-radio-sel div {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: var(--primary);
}

.imt-fb-radio-nor {
  border: 2px solid #d3d4d6;
}

.imt-fb-primary-btn {
  background-color: var(--primary);
  width: 72px;
  height: 32px;
  color: white;
  border-radius: 8px;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
  cursor: pointer;
}

.imt-fb-default-btn {
  border: 1px solid var(--primary);
  width: 72px;
  height: 32px;
  border-radius: 8px;
  color: var(--primary);
  line-height: 32px;
  text-align: center;
  font-size: 16px;
}

.imt-fb-guide-container {
  width: 312px;
  transform: translateY(-50%);
}

.imt-fb-guide-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
}

.imt-fb-guide-bg.left {
  transform: scaleX(-1);
}

.imt-fb-guide-content {
  margin: 16px 32px 60px 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imt-fb-guide-content.left {
  margin: 16px 21px 60px 32px;
}

.imt-fb-guide-img {
  width: 235px;
  height: 171px;
  margin-top: 16px;
}

.imt-fb-guide-message {
  font-size: 16px;
  line-height: 28px;
  color: #333333;
  white-space: pre-wrap;
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
}

.imt-fb-guide-button {
  margin-top: 16px;
  line-height: 40px;
  height: 40px;
  padding: 0 20px;
  width: unset;
}

.imt-fb-more-buttons {
  box-shadow: 0px 2px 10px 0px #00000014;
  border: 1px solid var(--float-ball-more-button-border-color);
  background: var(--float-ball-more-button-background-color);
  width: 36px;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  margin-right: 8px;
}

.imt-fb-more-button {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Sheet.css */
.immersive-translate-sheet {
  position: fixed;
  transform: translateY(100%);
  /* Start off screen */
  left: 0;
  right: 0;
  background-color: white;
  transition: transform 0.3s ease-out;
  /* Smooth slide transition */
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  /* Ensure it's above other content */
  bottom: 0;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
}

.immersive-translate-sheet.visible {
  transform: translateY(0);
}

.immersive-translate-sheet-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.immersive-translate-sheet-backdrop.visible {
  opacity: 1;
}

.popup-container-sheet {
  max-width: 100vw;
  width: 100vw;
}

.imt-no-events svg * {
  pointer-events: none !important;
}

.imt-manga-button {
  width: 36px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: all;
  margin: 12px 0 0 0;
  background-color: white;
  border-radius: 18px;
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.08));
  opacity: 0.5;
  right: 8px;
}

.imt-manga-feedback {
  cursor: pointer;
  margin: 10px 9px 12px 9px;
}

.imt-manga-button:hover {
  opacity: 1;
}

.imt-manga-translated {
  position: absolute;
  left: 24px;
  top: 20px;
}

.imt-float-ball-loading {
  animation: imt-loading-animation 0.6s infinite linear !important;
}

.imt-manga-guide-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  width: 372px;
  transform: translateY(-50%);
}
.imt-manga-guide-content {
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  margin: 0 40px 0;
}

.img-manga-guide-button {
  width: fit-content;
  margin: 16px auto;
}

.img-manga-close {
  position: absolute;
  bottom: -200px;
  width: 32px;
  height: 32px;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
}

@-webkit-keyframes imt-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(359deg);
  }
}

@keyframes imt-loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
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
`,IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_INJECT:'(()=>{var f="imt-subtitle-inject",g=class{from;to;constructor(e,s){this.from=e,this.to=s}sendMessages(e){globalThis.postMessage({type:f,to:this.to,from:this.from,action:e.action,data:e.data,id:e.id||new Date().getTime(),isAsync:!1})}getRandomId(){return(new Date().getTime()+Math.random())*Math.random()}sendAsyncMessages({action:e,data:s}){return new Promise(t=>{let n=this.getRandomId();globalThis.postMessage({type:f,to:this.to,from:this.from,action:e,data:s,id:n,isAsync:!0});let a=({data:o})=>{f===o.type&&o.id===n&&o.to===this.from&&(t(o.data),globalThis.removeEventListener("message",a))};globalThis.addEventListener("message",a)})}handleMessageOnce(e){return new Promise(s=>{let t=({data:n})=>{f===n.type&&n.action===e&&n.to===this.from&&(s(n.data),globalThis.removeEventListener("message",t))};globalThis.addEventListener("message",t)})}handleMessage(e,s){let t=({data:n})=>{f===n.type&&n.action===e&&n.to===this.from&&s(n)};return globalThis.addEventListener("message",t),()=>{globalThis.removeEventListener("message",t)}}handleMessages(e){let s=({data:t})=>{f===t.type&&t.to===this.from&&e(t)};return globalThis.addEventListener("message",s),()=>{globalThis.removeEventListener("message",s)}}},q=new g("content-script","inject"),c=new g("inject","content-script"),v={get(r,e,s){return e in r?(...t)=>{let n=r[e];return typeof n=="function"?n.apply(r,t):Reflect.get(r,e,s)}:t=>r.sendAsyncMessages({action:e,data:t})}},x=new Proxy(c,v),I=new Proxy(q,v);function d(r){if(!r)return null;try{let e=r;return r.startsWith("//")?e=globalThis.location.protocol+r:r.startsWith("/")?e=`${globalThis.location.protocol}//${globalThis.location.host}${r}`:r.startsWith("http")||(e=`${globalThis.location.protocol}//${r}`),new URL(e).toString()}catch(e){return console.error(e),r}}var i=class{content=x;config;constructor(e){this.config=e,c.handleMessages(async({action:s,id:t,data:n})=>{let a=this[s];if(!a)return;let o=a.apply(this,[n]);o instanceof Promise&&(o=await o),c.sendMessages({id:t,data:o})})}triggerSubtitle(e){}async translateSubtitle(e){let s=await this.content.requestSubtitle({url:d(e._url)});if(s){if(this.config.responseType=="document"){let n=new DOMParser().parseFromString(s,"text/xml");Object.defineProperty(e,"responseXML",{value:n,writable:!1}),Object.defineProperty(e,"response",{value:n,writable:!1});return}let t=s;(e.responseType=="arraybuffer"||this.config.responseType=="arraybuffer")&&typeof s=="string"&&(t=new TextEncoder().encode(s).buffer),Object.defineProperty(e,"responseText",{value:t,writable:!1}),Object.defineProperty(e,"response",{value:t,writable:!1})}}async translateSubtitleWithResponse(e,s){return await this.content.requestSubtitle({url:d(e),responseText:s})}startRequestSubtitle(e){this.content.startRequestSubtitle({url:d(e)})}async isOnlyResponse(){return this.config.hookType.includes("xhr_response")}async translateSubtitleWithFetch(e,s){let t={...s},n;return typeof e=="string"?n={url:e,method:"GET",headers:{}}:n=await P(e),t?.body&&(t.body=T(t.body)),this.content.requestSubtitle({fetchInfo:JSON.stringify({input:n,options:t})})}async getVideoMeta(e){}isSubtitleRequest(e){return!this.config||!this.config.subtitleUrlRegExp||!e?!1:new RegExp(this.config.subtitleUrlRegExp).test(e||"")}};function P(r){if(r instanceof URL)return{url:r.href,method:"GET",headers:{}};let e=r.clone(),s={url:r.url,method:r.method,headers:Object.fromEntries(r.headers.entries())};if(e.body){let t=T(e.body);if(e.body!==t)return e.text().then(n=>(s.body=n,s));s.body=t}return Promise.resolve(s)}function T(r){if(!r)return r;if(r instanceof FormData||r instanceof URLSearchParams){let e={};for(let[s,t]of r.entries())e[s]=t;return e._formatBodyType="FormData",e}return r}var m=class extends i{timer=null;triggerSubtitle({force:e}){setTimeout(()=>{if(this.config?.subtitleButtonSelector){let s=document.querySelector(this.config.subtitleButtonSelector);if(s){let t=s.getAttribute("aria-pressed")==="true";t&&e?(s.click(),setTimeout(()=>{s.click()},100)):t||s.click();return}}if(this.config?.videoPlayerSelector){let s=document.querySelector(this.config.videoPlayerSelector);s?.toggleSubtitles(),setTimeout(()=>{s?.toggleSubtitles()},100)}},1e3)}async getVideoMeta(){if(!this.config.videoPlayerSelector)return null;try{return await this.sleep(100),document.querySelector(this.config.videoPlayerSelector)?.getPlayerResponse()}catch{return null}}async isOnlyResponse(){let e=await super.isOnlyResponse();return!e||(await this.getVideoMeta())?.videoDetails?.isLive?!1:e}getCurrentTime(){try{return this.config.videoPlayerSelector?document.querySelector(this.config.videoPlayerSelector)?.getCurrentTime():null}catch{return null}}sleep(e){return new Promise(s=>{setTimeout(()=>{s(null)},e)})}};var y=class extends i{timer=null;videoMeta={};lastVideoMeta=null;constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);try{t&&t.result&&t.result.timedtexttracks&&t.result.movieId&&(this.videoMeta[t.result.movieId]=t.result,this.lastVideoMeta=t.result)}catch(n){console.log(n)}return t}}getVideoMeta(e){return this.lastVideoMeta}};var p=class extends i{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);try{t?.asset?.captions?.length?this.videoMeta[t.id]=t?.asset:t?.previews&&t?.course&&t?.previews?.forEach(n=>{this.videoMeta[n.id]=n})}catch(n){console.error(n)}return t}}getVideoMeta(e){return this.videoMeta[e]}};var b=class extends i{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);try{if(t?.stream?.sources?.length&&t?.stream?.sources[0]?.complete?.url){let n=window.location.pathname.split("/");n.length>2&&n[n.length-2]==="video"&&(this.videoMeta[n[n.length-1]]=t.stream.sources[0].complete.url)}}catch(n){console.error(n)}return t}}getVideoMeta(e){return this.videoMeta[e]}};var S=class extends i{constructor(e){super(e)}async translateSubtitleWithFetch(e,s){this.main(e,s)}async main(e,s){let t=globalThis.__originalFetch;if(!t)return;let n=e;e instanceof Request&&(n=e.clone());let a=await t(n,s);if(!a.ok)return;let o=await a.json();o.transcripts_urls&&this.requestSubtitle(o.transcripts_urls)}async requestSubtitle(e){await u(),await this.content.requestSubtitle(e)}};var R=class extends i{constructor(e){super(e)}lang="";async translateSubtitleWithFetch(e,s){this.main(e,s)}async main(e,s){let t=globalThis.__originalFetch;if(!t)return;let n=this.getUrl(e);return/textstream_/.test(n)?this.parseLang(n):this.parseAllSubs(e,s,t)}getUrl(e){return e.toString()}async parseLang(e){let t=e.match(/textstream_(\\w+)=/)?.[1];return!t||t==this.lang||(this.lang=t,await u(),this.content.changeLang(t)),null}async parseAllSubs(e,s,t){if(!t)return;let n=e;e instanceof Request&&(n=e.clone());let a=await t(n,s);if(!a.ok)return;let o=await a.json();o.text_track_urls&&this.requestSubtitle(o.text_track_urls)}async requestSubtitle(e){await u(),await this.content.requestSubtitle(e)}};var w={hookRequest:()=>{}};async function L(){let r=await c.sendAsyncMessages({action:"getConfig"});if(!r)return;let s={youtube:m,netflix:y,webvtt:i,khanacademy:i,udemy:p,general:i,ebutt:i,hulu:S,mubi:R,disneyplus:b,"fmp4.xml":i,multi_attach_vtt:i,twitter:i,subsrt:i,xml:i,text_track_dynamic:i,av:i}[r.type||""];if(!s)return;let t=new s(r);w.hookRequest(t,r)}w.hookRequest=(r,e)=>{if(e.hookType.includes("xhr")){let s=XMLHttpRequest.prototype.open,t=XMLHttpRequest.prototype.send,n=function(){return this._url=arguments[1],s.apply(this,arguments)},a=async function(){let o=this._url,h=r.isSubtitleRequest(o);return!o||!h?t.apply(this,arguments):(await u(),await r.isOnlyResponse()?(r.startRequestSubtitle(o),this.onreadystatechange=()=>{this.readyState===XMLHttpRequest.DONE&&this.status===200&&r.translateSubtitleWithResponse(o,this.responseText)}):await r.translateSubtitle(this),t.apply(this,arguments))};Object.defineProperty(XMLHttpRequest.prototype,"open",{value:n,writable:!0}),Object.defineProperty(XMLHttpRequest.prototype,"send",{value:a,writable:!0})}if(e.hookType.includes("fetch")){let s=globalThis.fetch;globalThis.__originalFetch=s,globalThis.fetch=async function(t,n){let a=typeof t=="string"?t:t.url||t.href;if(!r.isSubtitleRequest(a))return s(t,n);await u();let h=await r.translateSubtitleWithFetch(t,n);return h?new Response(h):s(t,n)}}};var M=!1;async function u(){return M||(await c.handleMessageOnce("contentReady"),M=!0),M}u();L();})();\n',IMMERSIVE_TRANSLATE_IMAGE_INJECT:`(()=>{URL.revokeObjectURL=function(t){return!0};var o=CanvasRenderingContext2D.prototype.drawImage,s={};CanvasRenderingContext2D.prototype.drawImage=function(...t){if(t[1]+t[2]+t[3]+t[4]==0)return null;let a=this.canvas.args||[];a.push(t.slice(1)),this.canvas.args=a;let n=t[0].src;return this.canvas.url=n,clearTimeout(s[n]),s[n]=setTimeout(()=>{let e=this.canvas.args,r=this.canvas.url;if(e.length<2)return null;let i={url:r,args:e};this.canvas.setAttribute("data",btoa(JSON.stringify(i)))},1e3),o.apply(this,t)};})();
`,IMMERSIVE_TRANSLATE_IMAGE_TOOLS_CSS:`.imt-image-tools {
  display: block;
  position: fixed;
  z-index: 2147483647;
}

.imt-image-translate-button {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background-color: #00000099;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
}

.imt-fb-logo-img {
  width: 14px;
  height: 14px;
  margin: 0;
}

.close-button {
  position: absolute;
  top: -18px;
  right: -18px;
  width: 24px;
  height: 24px;
  padding: 5px;
  line-height: 0;
  display: none;
  cursor: pointer;
}

.imt-image-tools:hover .close-button {
  display: block;
}

.translated-icon {
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 8px;
  height: 8px;
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-left: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
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
}`,OPTIONS_URL:"https://dash.immersivetranslate.com/",SHARE_DRAFT_URL:"https://immersivetranslate.com/preview",ASSETS_BASE_URL:"https://s.immersivetranslate.com/static/extension/",AI_BASE_URL:"https://ai.immersivetranslate.com",EBOOK_VIEWER_URL:"https://app.immersivetranslate.com/ebook/",EBOOK_BUILDER_URL:"https://app.immersivetranslate.com/ebook/make/",SUBTITLE_BUILDER_URL:"https://app.immersivetranslate.com/subtitle/",HTML_VIEWER_URL:"https://app.immersivetranslate.com/html/",PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/",PDF_PRO_URL:"https://app.immersivetranslate.com/pdf-pro/",TEXT_TRANSLATE_URL:"https://app.immersivetranslate.com/text/",TRANSLATE_FILE_URL:"https://app.immersivetranslate.com/"}});var Wg=Lm((ei,Ms)=>{Y();(function(e,r){typeof ei=="object"&&typeof Ms=="object"?Ms.exports=r():typeof define=="function"&&define.amd?define([],r):typeof ei=="object"?ei.Tesseract=r():e.Tesseract=r()})(self,()=>(()=>{var e={670:n=>{function l(u){return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},l(u)}n.exports=function(){return typeof window<"u"&&l(window.process)==="object"&&window.process.type==="renderer"||!(typeof process>"u"||l(process.versions)!=="object"||!process.versions.electron)||(typeof navigator>"u"?"undefined":l(navigator))==="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0}},760:(n,l,u)=>{function p(a){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(a)}var i=function(a){"use strict";var t,c=Object.prototype,s=c.hasOwnProperty,d=Object.defineProperty||function(w,x,S){w[x]=S.value},f=typeof Symbol=="function"?Symbol:{},g=f.iterator||"@@iterator",b=f.asyncIterator||"@@asyncIterator",y=f.toStringTag||"@@toStringTag";function m(w,x,S){return Object.defineProperty(w,x,{value:S,enumerable:!0,configurable:!0,writable:!0}),w[x]}try{m({},"")}catch{m=function(x,S,D){return x[S]=D}}function v(w,x,S,D){var A=x&&x.prototype instanceof z?x:z,P=Object.create(A.prototype),B=new T(D||[]);return d(P,"_invoke",{value:ae(w,S,B)}),P}function C(w,x,S){try{return{type:"normal",arg:w.call(x,S)}}catch(D){return{type:"throw",arg:D}}}a.wrap=v;var M="suspendedStart",q="suspendedYield",Z="executing",N="completed",k={};function z(){}function J(){}function oe(){}var ue={};m(ue,g,function(){return this});var se=Object.getPrototypeOf,W=se&&se(se(_([])));W&&W!==c&&s.call(W,g)&&(ue=W);var K=oe.prototype=z.prototype=Object.create(ue);function H(w){["next","throw","return"].forEach(function(x){m(w,x,function(S){return this._invoke(x,S)})})}function ie(w,x){function S(A,P,B,G){var ne=C(w[A],w,P);if(ne.type!=="throw"){var Q=ne.arg,fe=Q.value;return fe&&p(fe)==="object"&&s.call(fe,"__await")?x.resolve(fe.__await).then(function(ye){S("next",ye,B,G)},function(ye){S("throw",ye,B,G)}):x.resolve(fe).then(function(ye){Q.value=ye,B(Q)},function(ye){return S("throw",ye,B,G)})}G(ne.arg)}var D;d(this,"_invoke",{value:function(A,P){function B(){return new x(function(G,ne){S(A,P,G,ne)})}return D=D?D.then(B,B):B()}})}function ae(w,x,S){var D=M;return function(A,P){if(D===Z)throw new Error("Generator is already running");if(D===N){if(A==="throw")throw P;return L()}for(S.method=A,S.arg=P;;){var B=S.delegate;if(B){var G=F(B,S);if(G){if(G===k)continue;return G}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(D===M)throw D=N,S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);D=Z;var ne=C(w,x,S);if(ne.type==="normal"){if(D=S.done?N:q,ne.arg===k)continue;return{value:ne.arg,done:S.done}}ne.type==="throw"&&(D=N,S.method="throw",S.arg=ne.arg)}}}function F(w,x){var S=x.method,D=w.iterator[S];if(D===t)return x.delegate=null,S==="throw"&&w.iterator.return&&(x.method="return",x.arg=t,F(w,x),x.method==="throw")||S!=="return"&&(x.method="throw",x.arg=new TypeError("The iterator does not provide a '"+S+"' method")),k;var A=C(D,w.iterator,x.arg);if(A.type==="throw")return x.method="throw",x.arg=A.arg,x.delegate=null,k;var P=A.arg;return P?P.done?(x[w.resultName]=P.value,x.next=w.nextLoc,x.method!=="return"&&(x.method="next",x.arg=t),x.delegate=null,k):P:(x.method="throw",x.arg=new TypeError("iterator result is not an object"),x.delegate=null,k)}function U(w){var x={tryLoc:w[0]};1 in w&&(x.catchLoc=w[1]),2 in w&&(x.finallyLoc=w[2],x.afterLoc=w[3]),this.tryEntries.push(x)}function R(w){var x=w.completion||{};x.type="normal",delete x.arg,w.completion=x}function T(w){this.tryEntries=[{tryLoc:"root"}],w.forEach(U,this),this.reset(!0)}function _(w){if(w){var x=w[g];if(x)return x.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var S=-1,D=function A(){for(;++S<w.length;)if(s.call(w,S))return A.value=w[S],A.done=!1,A;return A.value=t,A.done=!0,A};return D.next=D}}return{next:L}}function L(){return{value:t,done:!0}}return J.prototype=oe,d(K,"constructor",{value:oe,configurable:!0}),d(oe,"constructor",{value:J,configurable:!0}),J.displayName=m(oe,y,"GeneratorFunction"),a.isGeneratorFunction=function(w){var x=typeof w=="function"&&w.constructor;return!!x&&(x===J||(x.displayName||x.name)==="GeneratorFunction")},a.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,oe):(w.__proto__=oe,m(w,y,"GeneratorFunction")),w.prototype=Object.create(K),w},a.awrap=function(w){return{__await:w}},H(ie.prototype),m(ie.prototype,b,function(){return this}),a.AsyncIterator=ie,a.async=function(w,x,S,D,A){A===void 0&&(A=Promise);var P=new ie(v(w,x,S,D),A);return a.isGeneratorFunction(x)?P:P.next().then(function(B){return B.done?B.value:P.next()})},H(K),m(K,y,"Generator"),m(K,g,function(){return this}),m(K,"toString",function(){return"[object Generator]"}),a.keys=function(w){var x=Object(w),S=[];for(var D in x)S.push(D);return S.reverse(),function A(){for(;S.length;){var P=S.pop();if(P in x)return A.value=P,A.done=!1,A}return A.done=!0,A}},a.values=_,T.prototype={constructor:T,reset:function(w){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!w)for(var x in this)x.charAt(0)==="t"&&s.call(this,x)&&!isNaN(+x.slice(1))&&(this[x]=t)},stop:function(){this.done=!0;var w=this.tryEntries[0].completion;if(w.type==="throw")throw w.arg;return this.rval},dispatchException:function(w){if(this.done)throw w;var x=this;function S(ne,Q){return P.type="throw",P.arg=w,x.next=ne,Q&&(x.method="next",x.arg=t),!!Q}for(var D=this.tryEntries.length-1;D>=0;--D){var A=this.tryEntries[D],P=A.completion;if(A.tryLoc==="root")return S("end");if(A.tryLoc<=this.prev){var B=s.call(A,"catchLoc"),G=s.call(A,"finallyLoc");if(B&&G){if(this.prev<A.catchLoc)return S(A.catchLoc,!0);if(this.prev<A.finallyLoc)return S(A.finallyLoc)}else if(B){if(this.prev<A.catchLoc)return S(A.catchLoc,!0)}else{if(!G)throw new Error("try statement without catch or finally");if(this.prev<A.finallyLoc)return S(A.finallyLoc)}}}},abrupt:function(w,x){for(var S=this.tryEntries.length-1;S>=0;--S){var D=this.tryEntries[S];if(D.tryLoc<=this.prev&&s.call(D,"finallyLoc")&&this.prev<D.finallyLoc){var A=D;break}}A&&(w==="break"||w==="continue")&&A.tryLoc<=x&&x<=A.finallyLoc&&(A=null);var P=A?A.completion:{};return P.type=w,P.arg=x,A?(this.method="next",this.next=A.finallyLoc,k):this.complete(P)},complete:function(w,x){if(w.type==="throw")throw w.arg;return w.type==="break"||w.type==="continue"?this.next=w.arg:w.type==="return"?(this.rval=this.arg=w.arg,this.method="return",this.next="end"):w.type==="normal"&&x&&(this.next=x),k},finish:function(w){for(var x=this.tryEntries.length-1;x>=0;--x){var S=this.tryEntries[x];if(S.finallyLoc===w)return this.complete(S.completion,S.afterLoc),R(S),k}},catch:function(w){for(var x=this.tryEntries.length-1;x>=0;--x){var S=this.tryEntries[x];if(S.tryLoc===w){var D=S.completion;if(D.type==="throw"){var A=D.arg;R(S)}return A}}throw new Error("illegal catch attempt")},delegateYield:function(w,x,S){return this.delegate={iterator:_(w),resultName:x,nextLoc:S},this.method==="next"&&(this.arg=t),k}},a}(p(n=u.nmd(n))==="object"?n.exports:{});try{regeneratorRuntime=i}catch{(typeof globalThis>"u"?"undefined":p(globalThis))==="object"?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}},793:(n,l,u)=>{function p(f){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},p(f)}function i(){"use strict";i=function(){return f};var f={},g=Object.prototype,b=g.hasOwnProperty,y=Object.defineProperty||function(w,x,S){w[x]=S.value},m=typeof Symbol=="function"?Symbol:{},v=m.iterator||"@@iterator",C=m.asyncIterator||"@@asyncIterator",M=m.toStringTag||"@@toStringTag";function q(w,x,S){return Object.defineProperty(w,x,{value:S,enumerable:!0,configurable:!0,writable:!0}),w[x]}try{q({},"")}catch{q=function(x,S,D){return x[S]=D}}function Z(w,x,S,D){var A=x&&x.prototype instanceof z?x:z,P=Object.create(A.prototype),B=new T(D||[]);return y(P,"_invoke",{value:ae(w,S,B)}),P}function N(w,x,S){try{return{type:"normal",arg:w.call(x,S)}}catch(D){return{type:"throw",arg:D}}}f.wrap=Z;var k={};function z(){}function J(){}function oe(){}var ue={};q(ue,v,function(){return this});var se=Object.getPrototypeOf,W=se&&se(se(_([])));W&&W!==g&&b.call(W,v)&&(ue=W);var K=oe.prototype=z.prototype=Object.create(ue);function H(w){["next","throw","return"].forEach(function(x){q(w,x,function(S){return this._invoke(x,S)})})}function ie(w,x){function S(A,P,B,G){var ne=N(w[A],w,P);if(ne.type!=="throw"){var Q=ne.arg,fe=Q.value;return fe&&p(fe)=="object"&&b.call(fe,"__await")?x.resolve(fe.__await).then(function(ye){S("next",ye,B,G)},function(ye){S("throw",ye,B,G)}):x.resolve(fe).then(function(ye){Q.value=ye,B(Q)},function(ye){return S("throw",ye,B,G)})}G(ne.arg)}var D;y(this,"_invoke",{value:function(A,P){function B(){return new x(function(G,ne){S(A,P,G,ne)})}return D=D?D.then(B,B):B()}})}function ae(w,x,S){var D="suspendedStart";return function(A,P){if(D==="executing")throw new Error("Generator is already running");if(D==="completed"){if(A==="throw")throw P;return{value:void 0,done:!0}}for(S.method=A,S.arg=P;;){var B=S.delegate;if(B){var G=F(B,S);if(G){if(G===k)continue;return G}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(D==="suspendedStart")throw D="completed",S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);D="executing";var ne=N(w,x,S);if(ne.type==="normal"){if(D=S.done?"completed":"suspendedYield",ne.arg===k)continue;return{value:ne.arg,done:S.done}}ne.type==="throw"&&(D="completed",S.method="throw",S.arg=ne.arg)}}}function F(w,x){var S=x.method,D=w.iterator[S];if(D===void 0)return x.delegate=null,S==="throw"&&w.iterator.return&&(x.method="return",x.arg=void 0,F(w,x),x.method==="throw")||S!=="return"&&(x.method="throw",x.arg=new TypeError("The iterator does not provide a '"+S+"' method")),k;var A=N(D,w.iterator,x.arg);if(A.type==="throw")return x.method="throw",x.arg=A.arg,x.delegate=null,k;var P=A.arg;return P?P.done?(x[w.resultName]=P.value,x.next=w.nextLoc,x.method!=="return"&&(x.method="next",x.arg=void 0),x.delegate=null,k):P:(x.method="throw",x.arg=new TypeError("iterator result is not an object"),x.delegate=null,k)}function U(w){var x={tryLoc:w[0]};1 in w&&(x.catchLoc=w[1]),2 in w&&(x.finallyLoc=w[2],x.afterLoc=w[3]),this.tryEntries.push(x)}function R(w){var x=w.completion||{};x.type="normal",delete x.arg,w.completion=x}function T(w){this.tryEntries=[{tryLoc:"root"}],w.forEach(U,this),this.reset(!0)}function _(w){if(w){var x=w[v];if(x)return x.call(w);if(typeof w.next=="function")return w;if(!isNaN(w.length)){var S=-1,D=function A(){for(;++S<w.length;)if(b.call(w,S))return A.value=w[S],A.done=!1,A;return A.value=void 0,A.done=!0,A};return D.next=D}}return{next:L}}function L(){return{value:void 0,done:!0}}return J.prototype=oe,y(K,"constructor",{value:oe,configurable:!0}),y(oe,"constructor",{value:J,configurable:!0}),J.displayName=q(oe,M,"GeneratorFunction"),f.isGeneratorFunction=function(w){var x=typeof w=="function"&&w.constructor;return!!x&&(x===J||(x.displayName||x.name)==="GeneratorFunction")},f.mark=function(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,oe):(w.__proto__=oe,q(w,M,"GeneratorFunction")),w.prototype=Object.create(K),w},f.awrap=function(w){return{__await:w}},H(ie.prototype),q(ie.prototype,C,function(){return this}),f.AsyncIterator=ie,f.async=function(w,x,S,D,A){A===void 0&&(A=Promise);var P=new ie(Z(w,x,S,D),A);return f.isGeneratorFunction(x)?P:P.next().then(function(B){return B.done?B.value:P.next()})},H(K),q(K,M,"Generator"),q(K,v,function(){return this}),q(K,"toString",function(){return"[object Generator]"}),f.keys=function(w){var x=Object(w),S=[];for(var D in x)S.push(D);return S.reverse(),function A(){for(;S.length;){var P=S.pop();if(P in x)return A.value=P,A.done=!1,A}return A.done=!0,A}},f.values=_,T.prototype={constructor:T,reset:function(w){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!w)for(var x in this)x.charAt(0)==="t"&&b.call(this,x)&&!isNaN(+x.slice(1))&&(this[x]=void 0)},stop:function(){this.done=!0;var w=this.tryEntries[0].completion;if(w.type==="throw")throw w.arg;return this.rval},dispatchException:function(w){if(this.done)throw w;var x=this;function S(ne,Q){return P.type="throw",P.arg=w,x.next=ne,Q&&(x.method="next",x.arg=void 0),!!Q}for(var D=this.tryEntries.length-1;D>=0;--D){var A=this.tryEntries[D],P=A.completion;if(A.tryLoc==="root")return S("end");if(A.tryLoc<=this.prev){var B=b.call(A,"catchLoc"),G=b.call(A,"finallyLoc");if(B&&G){if(this.prev<A.catchLoc)return S(A.catchLoc,!0);if(this.prev<A.finallyLoc)return S(A.finallyLoc)}else if(B){if(this.prev<A.catchLoc)return S(A.catchLoc,!0)}else{if(!G)throw new Error("try statement without catch or finally");if(this.prev<A.finallyLoc)return S(A.finallyLoc)}}}},abrupt:function(w,x){for(var S=this.tryEntries.length-1;S>=0;--S){var D=this.tryEntries[S];if(D.tryLoc<=this.prev&&b.call(D,"finallyLoc")&&this.prev<D.finallyLoc){var A=D;break}}A&&(w==="break"||w==="continue")&&A.tryLoc<=x&&x<=A.finallyLoc&&(A=null);var P=A?A.completion:{};return P.type=w,P.arg=x,A?(this.method="next",this.next=A.finallyLoc,k):this.complete(P)},complete:function(w,x){if(w.type==="throw")throw w.arg;return w.type==="break"||w.type==="continue"?this.next=w.arg:w.type==="return"?(this.rval=this.arg=w.arg,this.method="return",this.next="end"):w.type==="normal"&&x&&(this.next=x),k},finish:function(w){for(var x=this.tryEntries.length-1;x>=0;--x){var S=this.tryEntries[x];if(S.finallyLoc===w)return this.complete(S.completion,S.afterLoc),R(S),k}},catch:function(w){for(var x=this.tryEntries.length-1;x>=0;--x){var S=this.tryEntries[x];if(S.tryLoc===w){var D=S.completion;if(D.type==="throw"){var A=D.arg;R(S)}return A}}throw new Error("illegal catch attempt")},delegateYield:function(w,x,S){return this.delegate={iterator:_(w),resultName:x,nextLoc:S},this.method==="next"&&(this.arg=void 0),k}},f}function a(f,g,b,y,m,v,C){try{var M=f[v](C),q=M.value}catch(Z){return void b(Z)}M.done?g(q):Promise.resolve(q).then(y,m)}function t(f){return function(){var g=this,b=arguments;return new Promise(function(y,m){var v=f.apply(g,b);function C(q){a(v,y,m,C,M,"next",q)}function M(q){a(v,y,m,C,M,"throw",q)}C(void 0)})}}var c=u(311),s=function(){var f=t(i().mark(function g(b,y,m){var v;return i().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,c(y,1,m);case 2:return v=C.sent,C.abrupt("return",v.recognize(b).finally(t(i().mark(function M(){return i().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,v.terminate();case 2:case"end":return q.stop()}},M)}))));case 4:case"end":return C.stop()}},g)}));return function(g,b,y){return f.apply(this,arguments)}}(),d=function(){var f=t(i().mark(function g(b,y){var m;return i().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,c("osd",0,y);case 2:return m=v.sent,v.abrupt("return",m.detect(b).finally(t(i().mark(function C(){return i().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,m.terminate();case 2:case"end":return M.stop()}},C)}))));case 4:case"end":return v.stop()}},g)}));return function(g,b){return f.apply(this,arguments)}}();n.exports={recognize:s,detect:d}},847:n=>{n.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},711:n=>{n.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},341:n=>{n.exports={workerBlobURL:!0,logger:function(){}}},5:n=>{n.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},106:(n,l,u)=>{var p=u(313),i=0;n.exports=function(a){var t=a.id,c=a.action,s=a.payload,d=s===void 0?{}:s,f=t;return f===void 0&&(f=p("Job",i),i+=1),{id:f,action:c,payload:d}}},936:function(n,l,u){function p(y){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},p(y)}var i=this;function a(){"use strict";a=function(){return y};var y={},m=Object.prototype,v=m.hasOwnProperty,C=Object.defineProperty||function(D,A,P){D[A]=P.value},M=typeof Symbol=="function"?Symbol:{},q=M.iterator||"@@iterator",Z=M.asyncIterator||"@@asyncIterator",N=M.toStringTag||"@@toStringTag";function k(D,A,P){return Object.defineProperty(D,A,{value:P,enumerable:!0,configurable:!0,writable:!0}),D[A]}try{k({},"")}catch{k=function(A,P,B){return A[P]=B}}function z(D,A,P,B){var G=A&&A.prototype instanceof ue?A:ue,ne=Object.create(G.prototype),Q=new w(B||[]);return C(ne,"_invoke",{value:R(D,P,Q)}),ne}function J(D,A,P){try{return{type:"normal",arg:D.call(A,P)}}catch(B){return{type:"throw",arg:B}}}y.wrap=z;var oe={};function ue(){}function se(){}function W(){}var K={};k(K,q,function(){return this});var H=Object.getPrototypeOf,ie=H&&H(H(x([])));ie&&ie!==m&&v.call(ie,q)&&(K=ie);var ae=W.prototype=ue.prototype=Object.create(K);function F(D){["next","throw","return"].forEach(function(A){k(D,A,function(P){return this._invoke(A,P)})})}function U(D,A){function P(G,ne,Q,fe){var ye=J(D[G],D,ne);if(ye.type!=="throw"){var _e=ye.arg,be=_e.value;return be&&p(be)=="object"&&v.call(be,"__await")?A.resolve(be.__await).then(function(Le){P("next",Le,Q,fe)},function(Le){P("throw",Le,Q,fe)}):A.resolve(be).then(function(Le){_e.value=Le,Q(_e)},function(Le){return P("throw",Le,Q,fe)})}fe(ye.arg)}var B;C(this,"_invoke",{value:function(G,ne){function Q(){return new A(function(fe,ye){P(G,ne,fe,ye)})}return B=B?B.then(Q,Q):Q()}})}function R(D,A,P){var B="suspendedStart";return function(G,ne){if(B==="executing")throw new Error("Generator is already running");if(B==="completed"){if(G==="throw")throw ne;return{value:void 0,done:!0}}for(P.method=G,P.arg=ne;;){var Q=P.delegate;if(Q){var fe=T(Q,P);if(fe){if(fe===oe)continue;return fe}}if(P.method==="next")P.sent=P._sent=P.arg;else if(P.method==="throw"){if(B==="suspendedStart")throw B="completed",P.arg;P.dispatchException(P.arg)}else P.method==="return"&&P.abrupt("return",P.arg);B="executing";var ye=J(D,A,P);if(ye.type==="normal"){if(B=P.done?"completed":"suspendedYield",ye.arg===oe)continue;return{value:ye.arg,done:P.done}}ye.type==="throw"&&(B="completed",P.method="throw",P.arg=ye.arg)}}}function T(D,A){var P=A.method,B=D.iterator[P];if(B===void 0)return A.delegate=null,P==="throw"&&D.iterator.return&&(A.method="return",A.arg=void 0,T(D,A),A.method==="throw")||P!=="return"&&(A.method="throw",A.arg=new TypeError("The iterator does not provide a '"+P+"' method")),oe;var G=J(B,D.iterator,A.arg);if(G.type==="throw")return A.method="throw",A.arg=G.arg,A.delegate=null,oe;var ne=G.arg;return ne?ne.done?(A[D.resultName]=ne.value,A.next=D.nextLoc,A.method!=="return"&&(A.method="next",A.arg=void 0),A.delegate=null,oe):ne:(A.method="throw",A.arg=new TypeError("iterator result is not an object"),A.delegate=null,oe)}function _(D){var A={tryLoc:D[0]};1 in D&&(A.catchLoc=D[1]),2 in D&&(A.finallyLoc=D[2],A.afterLoc=D[3]),this.tryEntries.push(A)}function L(D){var A=D.completion||{};A.type="normal",delete A.arg,D.completion=A}function w(D){this.tryEntries=[{tryLoc:"root"}],D.forEach(_,this),this.reset(!0)}function x(D){if(D){var A=D[q];if(A)return A.call(D);if(typeof D.next=="function")return D;if(!isNaN(D.length)){var P=-1,B=function G(){for(;++P<D.length;)if(v.call(D,P))return G.value=D[P],G.done=!1,G;return G.value=void 0,G.done=!0,G};return B.next=B}}return{next:S}}function S(){return{value:void 0,done:!0}}return se.prototype=W,C(ae,"constructor",{value:W,configurable:!0}),C(W,"constructor",{value:se,configurable:!0}),se.displayName=k(W,N,"GeneratorFunction"),y.isGeneratorFunction=function(D){var A=typeof D=="function"&&D.constructor;return!!A&&(A===se||(A.displayName||A.name)==="GeneratorFunction")},y.mark=function(D){return Object.setPrototypeOf?Object.setPrototypeOf(D,W):(D.__proto__=W,k(D,N,"GeneratorFunction")),D.prototype=Object.create(ae),D},y.awrap=function(D){return{__await:D}},F(U.prototype),k(U.prototype,Z,function(){return this}),y.AsyncIterator=U,y.async=function(D,A,P,B,G){G===void 0&&(G=Promise);var ne=new U(z(D,A,P,B),G);return y.isGeneratorFunction(A)?ne:ne.next().then(function(Q){return Q.done?Q.value:ne.next()})},F(ae),k(ae,N,"Generator"),k(ae,q,function(){return this}),k(ae,"toString",function(){return"[object Generator]"}),y.keys=function(D){var A=Object(D),P=[];for(var B in A)P.push(B);return P.reverse(),function G(){for(;P.length;){var ne=P.pop();if(ne in A)return G.value=ne,G.done=!1,G}return G.done=!0,G}},y.values=x,w.prototype={constructor:w,reset:function(D){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!D)for(var A in this)A.charAt(0)==="t"&&v.call(this,A)&&!isNaN(+A.slice(1))&&(this[A]=void 0)},stop:function(){this.done=!0;var D=this.tryEntries[0].completion;if(D.type==="throw")throw D.arg;return this.rval},dispatchException:function(D){if(this.done)throw D;var A=this;function P(ye,_e){return ne.type="throw",ne.arg=D,A.next=ye,_e&&(A.method="next",A.arg=void 0),!!_e}for(var B=this.tryEntries.length-1;B>=0;--B){var G=this.tryEntries[B],ne=G.completion;if(G.tryLoc==="root")return P("end");if(G.tryLoc<=this.prev){var Q=v.call(G,"catchLoc"),fe=v.call(G,"finallyLoc");if(Q&&fe){if(this.prev<G.catchLoc)return P(G.catchLoc,!0);if(this.prev<G.finallyLoc)return P(G.finallyLoc)}else if(Q){if(this.prev<G.catchLoc)return P(G.catchLoc,!0)}else{if(!fe)throw new Error("try statement without catch or finally");if(this.prev<G.finallyLoc)return P(G.finallyLoc)}}}},abrupt:function(D,A){for(var P=this.tryEntries.length-1;P>=0;--P){var B=this.tryEntries[P];if(B.tryLoc<=this.prev&&v.call(B,"finallyLoc")&&this.prev<B.finallyLoc){var G=B;break}}G&&(D==="break"||D==="continue")&&G.tryLoc<=A&&A<=G.finallyLoc&&(G=null);var ne=G?G.completion:{};return ne.type=D,ne.arg=A,G?(this.method="next",this.next=G.finallyLoc,oe):this.complete(ne)},complete:function(D,A){if(D.type==="throw")throw D.arg;return D.type==="break"||D.type==="continue"?this.next=D.arg:D.type==="return"?(this.rval=this.arg=D.arg,this.method="return",this.next="end"):D.type==="normal"&&A&&(this.next=A),oe},finish:function(D){for(var A=this.tryEntries.length-1;A>=0;--A){var P=this.tryEntries[A];if(P.finallyLoc===D)return this.complete(P.completion,P.afterLoc),L(P),oe}},catch:function(D){for(var A=this.tryEntries.length-1;A>=0;--A){var P=this.tryEntries[A];if(P.tryLoc===D){var B=P.completion;if(B.type==="throw"){var G=B.arg;L(P)}return G}}throw new Error("illegal catch attempt")},delegateYield:function(D,A,P){return this.delegate={iterator:x(D),resultName:A,nextLoc:P},this.method==="next"&&(this.arg=void 0),oe}},y}function t(y,m){(m==null||m>y.length)&&(m=y.length);for(var v=0,C=new Array(m);v<m;v++)C[v]=y[v];return C}function c(y,m,v,C,M,q,Z){try{var N=y[q](Z),k=N.value}catch(z){return void v(z)}N.done?m(k):Promise.resolve(k).then(C,M)}function s(y){return function(){var m=this,v=arguments;return new Promise(function(C,M){var q=y.apply(m,v);function Z(k){c(q,C,M,Z,N,"next",k)}function N(k){c(q,C,M,Z,N,"throw",k)}Z(void 0)})}}var d=u(106),f=u(185).log,g=u(313),b=0;n.exports=function(){var y=g("Scheduler",b),m={},v={},C=[];b+=1;var M=function(){return Object.keys(m).length},q=function(){if(C.length!==0){for(var z=Object.keys(m),J=0;J<z.length;J+=1)if(v[z[J]]===void 0){C[0](m[z[J]]);break}}},Z=function(z,J){return new Promise(function(oe,ue){var se=d({action:z,payload:J});C.push(function(){var W=s(a().mark(function K(H){return a().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return C.shift(),v[H.id]=se,ie.prev=2,ie.t0=oe,ie.next=6,H[z].apply(i,[].concat(function(F){if(Array.isArray(F))return t(F)}(ae=J)||function(F){if(typeof Symbol<"u"&&F[Symbol.iterator]!=null||F["@@iterator"]!=null)return Array.from(F)}(ae)||function(F,U){if(F){if(typeof F=="string")return t(F,U);var R=Object.prototype.toString.call(F).slice(8,-1);return R==="Object"&&F.constructor&&(R=F.constructor.name),R==="Map"||R==="Set"?Array.from(F):R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)?t(F,U):void 0}}(ae)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(),[se.id]));case 6:ie.t1=ie.sent,(0,ie.t0)(ie.t1),ie.next=13;break;case 10:ie.prev=10,ie.t2=ie.catch(2),ue(ie.t2);case 13:return ie.prev=13,delete v[H.id],q(),ie.finish(13);case 17:case"end":return ie.stop()}var ae},K,null,[[2,10,13,17]])}));return function(K){return W.apply(this,arguments)}}()),f("[".concat(y,"]: Add ").concat(se.id," to JobQueue")),f("[".concat(y,"]: JobQueue length=").concat(C.length)),q()})},N=function(){var z=s(a().mark(function J(oe){var ue,se,W,K=arguments;return a().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:if(M()!==0){H.next=2;break}throw Error("[".concat(y,"]: You need to have at least one worker before adding jobs"));case 2:for(ue=K.length,se=new Array(ue>1?ue-1:0),W=1;W<ue;W++)se[W-1]=K[W];return H.abrupt("return",Z(oe,se));case 4:case"end":return H.stop()}},J)}));return function(J){return z.apply(this,arguments)}}(),k=function(){var z=s(a().mark(function J(){return a().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:Object.keys(m).forEach(function(){var ue=s(a().mark(function se(W){return a().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,m[W].terminate();case 2:case"end":return K.stop()}},se)}));return function(se){return ue.apply(this,arguments)}}()),C=[];case 2:case"end":return oe.stop()}},J)}));return function(){return z.apply(this,arguments)}}();return{addWorker:function(z){return m[z.id]=z,f("[".concat(y,"]: Add ").concat(z.id)),f("[".concat(y,"]: Number of workers=").concat(M())),q(),z.id},addJob:N,terminate:k,getQueueLen:function(){return C.length},getNumWorkers:M}}},311:(n,l,u)=>{function p(W){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(K){return typeof K}:function(K){return K&&typeof Symbol=="function"&&K.constructor===Symbol&&K!==Symbol.prototype?"symbol":typeof K},p(W)}var i=["logger","errorHandler"];function a(){"use strict";a=function(){return W};var W={},K=Object.prototype,H=K.hasOwnProperty,ie=Object.defineProperty||function(te,X,ce){te[X]=ce.value},ae=typeof Symbol=="function"?Symbol:{},F=ae.iterator||"@@iterator",U=ae.asyncIterator||"@@asyncIterator",R=ae.toStringTag||"@@toStringTag";function T(te,X,ce){return Object.defineProperty(te,X,{value:ce,enumerable:!0,configurable:!0,writable:!0}),te[X]}try{T({},"")}catch{T=function(X,ce,Pe){return X[ce]=Pe}}function _(te,X,ce,Pe){var he=X&&X.prototype instanceof x?X:x,Ce=Object.create(he.prototype),je=new Le(Pe||[]);return ie(Ce,"_invoke",{value:fe(te,ce,je)}),Ce}function L(te,X,ce){try{return{type:"normal",arg:te.call(X,ce)}}catch(Pe){return{type:"throw",arg:Pe}}}W.wrap=_;var w={};function x(){}function S(){}function D(){}var A={};T(A,F,function(){return this});var P=Object.getPrototypeOf,B=P&&P(P(Je([])));B&&B!==K&&H.call(B,F)&&(A=B);var G=D.prototype=x.prototype=Object.create(A);function ne(te){["next","throw","return"].forEach(function(X){T(te,X,function(ce){return this._invoke(X,ce)})})}function Q(te,X){function ce(he,Ce,je,ze){var Be=L(te[he],te,Ce);if(Be.type!=="throw"){var Qe=Be.arg,it=Qe.value;return it&&p(it)=="object"&&H.call(it,"__await")?X.resolve(it.__await).then(function(ct){ce("next",ct,je,ze)},function(ct){ce("throw",ct,je,ze)}):X.resolve(it).then(function(ct){Qe.value=ct,je(Qe)},function(ct){return ce("throw",ct,je,ze)})}ze(Be.arg)}var Pe;ie(this,"_invoke",{value:function(he,Ce){function je(){return new X(function(ze,Be){ce(he,Ce,ze,Be)})}return Pe=Pe?Pe.then(je,je):je()}})}function fe(te,X,ce){var Pe="suspendedStart";return function(he,Ce){if(Pe==="executing")throw new Error("Generator is already running");if(Pe==="completed"){if(he==="throw")throw Ce;return{value:void 0,done:!0}}for(ce.method=he,ce.arg=Ce;;){var je=ce.delegate;if(je){var ze=ye(je,ce);if(ze){if(ze===w)continue;return ze}}if(ce.method==="next")ce.sent=ce._sent=ce.arg;else if(ce.method==="throw"){if(Pe==="suspendedStart")throw Pe="completed",ce.arg;ce.dispatchException(ce.arg)}else ce.method==="return"&&ce.abrupt("return",ce.arg);Pe="executing";var Be=L(te,X,ce);if(Be.type==="normal"){if(Pe=ce.done?"completed":"suspendedYield",Be.arg===w)continue;return{value:Be.arg,done:ce.done}}Be.type==="throw"&&(Pe="completed",ce.method="throw",ce.arg=Be.arg)}}}function ye(te,X){var ce=X.method,Pe=te.iterator[ce];if(Pe===void 0)return X.delegate=null,ce==="throw"&&te.iterator.return&&(X.method="return",X.arg=void 0,ye(te,X),X.method==="throw")||ce!=="return"&&(X.method="throw",X.arg=new TypeError("The iterator does not provide a '"+ce+"' method")),w;var he=L(Pe,te.iterator,X.arg);if(he.type==="throw")return X.method="throw",X.arg=he.arg,X.delegate=null,w;var Ce=he.arg;return Ce?Ce.done?(X[te.resultName]=Ce.value,X.next=te.nextLoc,X.method!=="return"&&(X.method="next",X.arg=void 0),X.delegate=null,w):Ce:(X.method="throw",X.arg=new TypeError("iterator result is not an object"),X.delegate=null,w)}function _e(te){var X={tryLoc:te[0]};1 in te&&(X.catchLoc=te[1]),2 in te&&(X.finallyLoc=te[2],X.afterLoc=te[3]),this.tryEntries.push(X)}function be(te){var X=te.completion||{};X.type="normal",delete X.arg,te.completion=X}function Le(te){this.tryEntries=[{tryLoc:"root"}],te.forEach(_e,this),this.reset(!0)}function Je(te){if(te){var X=te[F];if(X)return X.call(te);if(typeof te.next=="function")return te;if(!isNaN(te.length)){var ce=-1,Pe=function he(){for(;++ce<te.length;)if(H.call(te,ce))return he.value=te[ce],he.done=!1,he;return he.value=void 0,he.done=!0,he};return Pe.next=Pe}}return{next:Ze}}function Ze(){return{value:void 0,done:!0}}return S.prototype=D,ie(G,"constructor",{value:D,configurable:!0}),ie(D,"constructor",{value:S,configurable:!0}),S.displayName=T(D,R,"GeneratorFunction"),W.isGeneratorFunction=function(te){var X=typeof te=="function"&&te.constructor;return!!X&&(X===S||(X.displayName||X.name)==="GeneratorFunction")},W.mark=function(te){return Object.setPrototypeOf?Object.setPrototypeOf(te,D):(te.__proto__=D,T(te,R,"GeneratorFunction")),te.prototype=Object.create(G),te},W.awrap=function(te){return{__await:te}},ne(Q.prototype),T(Q.prototype,U,function(){return this}),W.AsyncIterator=Q,W.async=function(te,X,ce,Pe,he){he===void 0&&(he=Promise);var Ce=new Q(_(te,X,ce,Pe),he);return W.isGeneratorFunction(X)?Ce:Ce.next().then(function(je){return je.done?je.value:Ce.next()})},ne(G),T(G,R,"Generator"),T(G,F,function(){return this}),T(G,"toString",function(){return"[object Generator]"}),W.keys=function(te){var X=Object(te),ce=[];for(var Pe in X)ce.push(Pe);return ce.reverse(),function he(){for(;ce.length;){var Ce=ce.pop();if(Ce in X)return he.value=Ce,he.done=!1,he}return he.done=!0,he}},W.values=Je,Le.prototype={constructor:Le,reset:function(te){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(be),!te)for(var X in this)X.charAt(0)==="t"&&H.call(this,X)&&!isNaN(+X.slice(1))&&(this[X]=void 0)},stop:function(){this.done=!0;var te=this.tryEntries[0].completion;if(te.type==="throw")throw te.arg;return this.rval},dispatchException:function(te){if(this.done)throw te;var X=this;function ce(Be,Qe){return Ce.type="throw",Ce.arg=te,X.next=Be,Qe&&(X.method="next",X.arg=void 0),!!Qe}for(var Pe=this.tryEntries.length-1;Pe>=0;--Pe){var he=this.tryEntries[Pe],Ce=he.completion;if(he.tryLoc==="root")return ce("end");if(he.tryLoc<=this.prev){var je=H.call(he,"catchLoc"),ze=H.call(he,"finallyLoc");if(je&&ze){if(this.prev<he.catchLoc)return ce(he.catchLoc,!0);if(this.prev<he.finallyLoc)return ce(he.finallyLoc)}else if(je){if(this.prev<he.catchLoc)return ce(he.catchLoc,!0)}else{if(!ze)throw new Error("try statement without catch or finally");if(this.prev<he.finallyLoc)return ce(he.finallyLoc)}}}},abrupt:function(te,X){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var Pe=this.tryEntries[ce];if(Pe.tryLoc<=this.prev&&H.call(Pe,"finallyLoc")&&this.prev<Pe.finallyLoc){var he=Pe;break}}he&&(te==="break"||te==="continue")&&he.tryLoc<=X&&X<=he.finallyLoc&&(he=null);var Ce=he?he.completion:{};return Ce.type=te,Ce.arg=X,he?(this.method="next",this.next=he.finallyLoc,w):this.complete(Ce)},complete:function(te,X){if(te.type==="throw")throw te.arg;return te.type==="break"||te.type==="continue"?this.next=te.arg:te.type==="return"?(this.rval=this.arg=te.arg,this.method="return",this.next="end"):te.type==="normal"&&X&&(this.next=X),w},finish:function(te){for(var X=this.tryEntries.length-1;X>=0;--X){var ce=this.tryEntries[X];if(ce.finallyLoc===te)return this.complete(ce.completion,ce.afterLoc),be(ce),w}},catch:function(te){for(var X=this.tryEntries.length-1;X>=0;--X){var ce=this.tryEntries[X];if(ce.tryLoc===te){var Pe=ce.completion;if(Pe.type==="throw"){var he=Pe.arg;be(ce)}return he}}throw new Error("illegal catch attempt")},delegateYield:function(te,X,ce){return this.delegate={iterator:Je(te),resultName:X,nextLoc:ce},this.method==="next"&&(this.arg=void 0),w}},W}function t(W,K){(K==null||K>W.length)&&(K=W.length);for(var H=0,ie=new Array(K);H<K;H++)ie[H]=W[H];return ie}function c(W,K){var H=Object.keys(W);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(W);K&&(ie=ie.filter(function(ae){return Object.getOwnPropertyDescriptor(W,ae).enumerable})),H.push.apply(H,ie)}return H}function s(W){for(var K=1;K<arguments.length;K++){var H=arguments[K]!=null?arguments[K]:{};K%2?c(Object(H),!0).forEach(function(ie){d(W,ie,H[ie])}):Object.getOwnPropertyDescriptors?Object.defineProperties(W,Object.getOwnPropertyDescriptors(H)):c(Object(H)).forEach(function(ie){Object.defineProperty(W,ie,Object.getOwnPropertyDescriptor(H,ie))})}return W}function d(W,K,H){return(K=function(ie){var ae=function(F,U){if(p(F)!=="object"||F===null)return F;var R=F[Symbol.toPrimitive];if(R!==void 0){var T=R.call(F,"string");if(p(T)!=="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(F)}(ie);return p(ae)==="symbol"?ae:String(ae)}(K))in W?Object.defineProperty(W,K,{value:H,enumerable:!0,configurable:!0,writable:!0}):W[K]=H,W}function f(W,K){if(W==null)return{};var H,ie,ae=function(U,R){if(U==null)return{};var T,_,L={},w=Object.keys(U);for(_=0;_<w.length;_++)T=w[_],R.indexOf(T)>=0||(L[T]=U[T]);return L}(W,K);if(Object.getOwnPropertySymbols){var F=Object.getOwnPropertySymbols(W);for(ie=0;ie<F.length;ie++)H=F[ie],K.indexOf(H)>=0||Object.prototype.propertyIsEnumerable.call(W,H)&&(ae[H]=W[H])}return ae}function g(W,K,H,ie,ae,F,U){try{var R=W[F](U),T=R.value}catch(_){return void H(_)}R.done?K(T):Promise.resolve(T).then(ie,ae)}function b(W){return function(){var K=this,H=arguments;return new Promise(function(ie,ae){var F=W.apply(K,H);function U(T){g(F,ie,ae,U,R,"next",T)}function R(T){g(F,ie,ae,U,R,"throw",T)}U(void 0)})}}var y=u(187),m=u(549),v=u(106),C=u(185).log,M=u(313),q=u(847),Z=u(581),N=Z.defaultOptions,k=Z.spawnWorker,z=Z.terminateWorker,J=Z.onMessage,oe=Z.loadImage,ue=Z.send,se=0;n.exports=b(a().mark(function W(){var K,H,ie,ae,F,U,R,T,_,L,w,x,S,D,A,P,B,G,ne,Q,fe,ye,_e,be,Le,Je,Ze,te,X,ce,Pe,he,Ce,je,ze,Be,Qe,it,ct,Lt,pt=arguments;return a().wrap(function(at){for(;;)switch(at.prev=at.next){case 0:return K=pt.length>0&&pt[0]!==void 0?pt[0]:"eng",H=pt.length>1&&pt[1]!==void 0?pt[1]:q.LSTM_ONLY,ie=pt.length>2&&pt[2]!==void 0?pt[2]:{},ae=pt.length>3&&pt[3]!==void 0?pt[3]:{},F=M("Worker",se),U=y(s(s({},N),ie)),R=U.logger,T=U.errorHandler,_=f(U,i),L={},w={},x=typeof K=="string"?K.split("+"):K,S=H,D=ae,A=[q.DEFAULT,q.LSTM_ONLY].includes(H)&&!_.legacyCore,G=new Promise(function(Ee,ve){B=Ee,P=ve}),ne=function(Ee){P(Ee.message)},(Q=k(_)).onerror=ne,se+=1,fe=function(Ee,ve){L[Ee]=ve},ye=function(Ee,ve){w[Ee]=ve},_e=function(Ee){var ve=Ee.id,Ae=Ee.action,He=Ee.payload;return new Promise(function($e,lt){C("[".concat(F,"]: Start ").concat(ve,", action=").concat(Ae));var st="".concat(Ae,"-").concat(ve);fe(st,$e),ye(st,lt),ue(Q,{workerId:F,jobId:ve,action:Ae,payload:He})})},be=function(){},Le=function(Ee){return _e(v({id:Ee,action:"load",payload:{options:{lstmOnly:A,corePath:_.corePath,logging:_.logging}}}))},Je=function(Ee,ve,Ae){return _e(v({id:Ae,action:"FS",payload:{method:"writeFile",args:[Ee,ve]}}))},Ze=function(Ee,ve){return _e(v({id:ve,action:"FS",payload:{method:"readFile",args:[Ee,{encoding:"utf8"}]}}))},te=function(Ee,ve){return _e(v({id:ve,action:"FS",payload:{method:"unlink",args:[Ee]}}))},X=function(Ee,ve,Ae){return _e(v({id:Ae,action:"FS",payload:{method:Ee,args:ve}}))},ce=function(){},Pe=function(Ee,ve){return _e(v({id:ve,action:"loadLanguage",payload:{langs:Ee,options:{langPath:_.langPath,dataPath:_.dataPath,cachePath:_.cachePath,cacheMethod:_.cacheMethod,gzip:_.gzip,lstmOnly:[q.DEFAULT,q.LSTM_ONLY].includes(S)&&!_.legacyLang}}}))},he=function(){},Ce=function(Ee,ve,Ae,He){return _e(v({id:He,action:"initialize",payload:{langs:Ee,oem:ve,config:Ae}}))},je=function(){var Ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"eng",ve=arguments.length>1?arguments[1]:void 0,Ae=arguments.length>2?arguments[2]:void 0,He=arguments.length>3?arguments[3]:void 0;if(A&&[q.TESSERACT_ONLY,q.TESSERACT_LSTM_COMBINED].includes(ve))throw Error("Legacy model requested but code missing.");var $e=ve||S;S=$e;var lt=Ae||D;D=lt;var st,Me=(typeof Ee=="string"?Ee.split("+"):Ee).filter(function(dt){return!x.includes(dt)});return x.push.apply(x,function(dt){if(Array.isArray(dt))return t(dt)}(st=Me)||function(dt){if(typeof Symbol<"u"&&dt[Symbol.iterator]!=null||dt["@@iterator"]!=null)return Array.from(dt)}(st)||function(dt,ar){if(dt){if(typeof dt=="string")return t(dt,ar);var Bt=Object.prototype.toString.call(dt).slice(8,-1);return Bt==="Object"&&dt.constructor&&(Bt=dt.constructor.name),Bt==="Map"||Bt==="Set"?Array.from(dt):Bt==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bt)?t(dt,ar):void 0}}(st)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),Me.length>0?Pe(Me,He).then(function(){return Ce(Ee,$e,lt,He)}):Ce(Ee,$e,lt,He)},ze=function(){return _e(v({id:arguments.length>1?arguments[1]:void 0,action:"setParameters",payload:{params:arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}}}))},Be=function(){var Ee=b(a().mark(function ve(Ae){var He,$e,lt,st=arguments;return a().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:return He=st.length>1&&st[1]!==void 0?st[1]:{},$e=st.length>2&&st[2]!==void 0?st[2]:{blocks:!0,text:!0,hocr:!0,tsv:!0},lt=st.length>3?st[3]:void 0,Me.t0=_e,Me.t1=v,Me.t2=lt,Me.next=8,oe(Ae);case 8:return Me.t3=Me.sent,Me.t4=He,Me.t5=$e,Me.t6={image:Me.t3,options:Me.t4,output:Me.t5},Me.t7={id:Me.t2,action:"recognize",payload:Me.t6},Me.t8=(0,Me.t1)(Me.t7),Me.abrupt("return",(0,Me.t0)(Me.t8));case 15:case"end":return Me.stop()}},ve)}));return function(ve){return Ee.apply(this,arguments)}}(),Qe=function(){var Ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"Tesseract OCR Result",ve=arguments.length>1&&arguments[1]!==void 0&&arguments[1],Ae=arguments.length>2?arguments[2]:void 0;return _e(v({id:Ae,action:"getPDF",payload:{title:Ee,textonly:ve}}))},it=function(){var Ee=b(a().mark(function ve(Ae,He){return a().wrap(function($e){for(;;)switch($e.prev=$e.next){case 0:if(!A){$e.next=2;break}throw Error("`worker.detect` requires Legacy model, which was not loaded.");case 2:return $e.t0=_e,$e.t1=v,$e.t2=He,$e.next=7,oe(Ae);case 7:return $e.t3=$e.sent,$e.t4={image:$e.t3},$e.t5={id:$e.t2,action:"detect",payload:$e.t4},$e.t6=(0,$e.t1)($e.t5),$e.abrupt("return",(0,$e.t0)($e.t6));case 12:case"end":return $e.stop()}},ve)}));return function(ve,Ae){return Ee.apply(this,arguments)}}(),ct=function(){var Ee=b(a().mark(function ve(){return a().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Q!==null&&(z(Q),Q=null),Ae.abrupt("return",Promise.resolve());case 2:case"end":return Ae.stop()}},ve)}));return function(){return Ee.apply(this,arguments)}}(),J(Q,function(Ee){var ve=Ee.workerId,Ae=Ee.jobId,He=Ee.status,$e=Ee.action,lt=Ee.data,st="".concat($e,"-").concat(Ae);if(He==="resolve"){C("[".concat(ve,"]: Complete ").concat(Ae));var Me=lt;$e==="recognize"?Me=m(lt):$e==="getPDF"&&(Me=Array.from(s(s({},lt),{},{length:Object.keys(lt).length}))),L[st]({jobId:Ae,data:Me})}else if(He==="reject"){if(w[st](lt),$e==="load"&&P(lt),!T)throw Error(lt);T(lt)}else He==="progress"&&R(s(s({},lt),{},{userJobId:Ae}))}),Lt={id:F,worker:Q,setResolve:fe,setReject:ye,load:be,writeText:Je,readText:Ze,removeFile:te,FS:X,loadLanguage:ce,initialize:he,reinitialize:je,setParameters:ze,recognize:Be,getPDF:Qe,detect:it,terminate:ct},Le().then(function(){return Pe(K)}).then(function(){return Ce(K,H,ae)}).then(function(){return B(Lt)}).catch(function(){}),at.abrupt("return",G);case 40:case"end":return at.stop()}},W)}))},352:(n,l,u)=>{function p(y){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},p(y)}function i(y,m){var v=Object.keys(y);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(y);m&&(C=C.filter(function(M){return Object.getOwnPropertyDescriptor(y,M).enumerable})),v.push.apply(v,C)}return v}function a(y,m,v){return(m=function(C){var M=function(q,Z){if(p(q)!=="object"||q===null)return q;var N=q[Symbol.toPrimitive];if(N!==void 0){var k=N.call(q,"string");if(p(k)!=="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(q)}(C);return p(M)==="symbol"?M:String(M)}(m))in y?Object.defineProperty(y,m,{value:v,enumerable:!0,configurable:!0,writable:!0}):y[m]=v,y}u(760);var t=u(936),c=u(311),s=u(793),d=u(5),f=u(847),g=u(711),b=u(185).setLogging;n.exports=function(y){for(var m=1;m<arguments.length;m++){var v=arguments[m]!=null?arguments[m]:{};m%2?i(Object(v),!0).forEach(function(C){a(y,C,v[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(v)):i(Object(v)).forEach(function(C){Object.defineProperty(y,C,Object.getOwnPropertyDescriptor(v,C))})}return y}({languages:d,OEM:f,PSM:g,createScheduler:t,createWorker:c,setLogging:b},s)},549:n=>{function l(a){return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(a)}function u(a,t){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),c.push.apply(c,s)}return c}function p(a){for(var t=1;t<arguments.length;t++){var c=arguments[t]!=null?arguments[t]:{};t%2?u(Object(c),!0).forEach(function(s){i(a,s,c[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):u(Object(c)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(c,s))})}return a}function i(a,t,c){return(t=function(s){var d=function(f,g){if(l(f)!=="object"||f===null)return f;var b=f[Symbol.toPrimitive];if(b!==void 0){var y=b.call(f,"string");if(l(y)!=="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(f)}(s);return l(d)==="symbol"?d:String(d)}(t))in a?Object.defineProperty(a,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[t]=c,a}n.exports=function(a){var t=[],c=[],s=[],d=[],f=[];return a.blocks&&a.blocks.forEach(function(g){g.paragraphs.forEach(function(b){b.lines.forEach(function(y){y.words.forEach(function(m){m.symbols.forEach(function(v){f.push(p(p({},v),{},{page:a,block:g,paragraph:b,line:y,word:m}))}),d.push(p(p({},m),{},{page:a,block:g,paragraph:b,line:y}))}),s.push(p(p({},y),{},{page:a,block:g,paragraph:b}))}),c.push(p(p({},b),{},{page:a,block:g}))}),t.push(p(p({},g),{},{page:a}))}),p(p({},a),{},{blocks:t,paragraphs:c,lines:s,words:d,symbols:f})}},129:(n,l,u)=>{function p(a){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(a)}var i=u(670);n.exports=function(a){var t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":i()?t.type="electron":(typeof document>"u"?"undefined":p(document))==="object"?t.type="browser":(typeof process>"u"?"undefined":p(process))==="object"&&(t.type="node"),a===void 0?t:t[a]}},313:n=>{n.exports=function(l,u){return"".concat(l,"-").concat(u,"-").concat(Math.random().toString(16).slice(3,8))}},185:function(n,l){var u=this,p=!1;l.logging=p,l.setLogging=function(i){p=i},l.log=function(){for(var i=arguments.length,a=new Array(i),t=0;t<i;t++)a[t]=arguments[t];return p?void 0:null}},187:(n,l,u)=>{function p(c){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},p(c)}function i(c,s){var d=Object.keys(c);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(c);s&&(f=f.filter(function(g){return Object.getOwnPropertyDescriptor(c,g).enumerable})),d.push.apply(d,f)}return d}function a(c,s,d){return(s=function(f){var g=function(b,y){if(p(b)!=="object"||b===null)return b;var m=b[Symbol.toPrimitive];if(m!==void 0){var v=m.call(b,"string");if(p(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f);return p(g)==="symbol"?g:String(g)}(s))in c?Object.defineProperty(c,s,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[s]=d,c}var t=u(129)("type")==="browser"?function(c){return new URL(c,window.location.href).href}:function(c){return c};n.exports=function(c){var s=function(d){for(var f=1;f<arguments.length;f++){var g=arguments[f]!=null?arguments[f]:{};f%2?i(Object(g),!0).forEach(function(b){a(d,b,g[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(g)):i(Object(g)).forEach(function(b){Object.defineProperty(d,b,Object.getOwnPropertyDescriptor(g,b))})}return d}({},c);return["corePath","workerPath","langPath"].forEach(function(d){c[d]&&(s[d]=t(s[d]))}),s}},854:(n,l,u)=>{function p(d){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},p(d)}function i(d,f){var g=Object.keys(d);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(d);f&&(b=b.filter(function(y){return Object.getOwnPropertyDescriptor(d,y).enumerable})),g.push.apply(g,b)}return g}function a(d){for(var f=1;f<arguments.length;f++){var g=arguments[f]!=null?arguments[f]:{};f%2?i(Object(g),!0).forEach(function(b){t(d,b,g[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(g)):i(Object(g)).forEach(function(b){Object.defineProperty(d,b,Object.getOwnPropertyDescriptor(g,b))})}return d}function t(d,f,g){return(f=function(b){var y=function(m,v){if(p(m)!=="object"||m===null)return m;var C=m[Symbol.toPrimitive];if(C!==void 0){var M=C.call(m,"string");if(p(M)!=="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(b);return p(y)==="symbol"?y:String(y)}(f))in d?Object.defineProperty(d,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):d[f]=g,d}var c=u(147).i8,s=u(341);n.exports=a(a({},s),{},{workerPath:"".concat(c,"/dist/worker.min.js")})},581:(n,l,u)=>{var p=u(854),i=u(676),a=u(100),t=u(202),c=u(772),s=u(931);n.exports={defaultOptions:p,spawnWorker:i,terminateWorker:a,onMessage:t,send:c,loadImage:s}},931:n=>{function l(c){return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},l(c)}function u(){"use strict";u=function(){return c};var c={},s=Object.prototype,d=s.hasOwnProperty,f=Object.defineProperty||function(T,_,L){T[_]=L.value},g=typeof Symbol=="function"?Symbol:{},b=g.iterator||"@@iterator",y=g.asyncIterator||"@@asyncIterator",m=g.toStringTag||"@@toStringTag";function v(T,_,L){return Object.defineProperty(T,_,{value:L,enumerable:!0,configurable:!0,writable:!0}),T[_]}try{v({},"")}catch{v=function(_,L,w){return _[L]=w}}function C(T,_,L,w){var x=_&&_.prototype instanceof Z?_:Z,S=Object.create(x.prototype),D=new F(w||[]);return f(S,"_invoke",{value:K(T,L,D)}),S}function M(T,_,L){try{return{type:"normal",arg:T.call(_,L)}}catch(w){return{type:"throw",arg:w}}}c.wrap=C;var q={};function Z(){}function N(){}function k(){}var z={};v(z,b,function(){return this});var J=Object.getPrototypeOf,oe=J&&J(J(U([])));oe&&oe!==s&&d.call(oe,b)&&(z=oe);var ue=k.prototype=Z.prototype=Object.create(z);function se(T){["next","throw","return"].forEach(function(_){v(T,_,function(L){return this._invoke(_,L)})})}function W(T,_){function L(x,S,D,A){var P=M(T[x],T,S);if(P.type!=="throw"){var B=P.arg,G=B.value;return G&&l(G)=="object"&&d.call(G,"__await")?_.resolve(G.__await).then(function(ne){L("next",ne,D,A)},function(ne){L("throw",ne,D,A)}):_.resolve(G).then(function(ne){B.value=ne,D(B)},function(ne){return L("throw",ne,D,A)})}A(P.arg)}var w;f(this,"_invoke",{value:function(x,S){function D(){return new _(function(A,P){L(x,S,A,P)})}return w=w?w.then(D,D):D()}})}function K(T,_,L){var w="suspendedStart";return function(x,S){if(w==="executing")throw new Error("Generator is already running");if(w==="completed"){if(x==="throw")throw S;return{value:void 0,done:!0}}for(L.method=x,L.arg=S;;){var D=L.delegate;if(D){var A=H(D,L);if(A){if(A===q)continue;return A}}if(L.method==="next")L.sent=L._sent=L.arg;else if(L.method==="throw"){if(w==="suspendedStart")throw w="completed",L.arg;L.dispatchException(L.arg)}else L.method==="return"&&L.abrupt("return",L.arg);w="executing";var P=M(T,_,L);if(P.type==="normal"){if(w=L.done?"completed":"suspendedYield",P.arg===q)continue;return{value:P.arg,done:L.done}}P.type==="throw"&&(w="completed",L.method="throw",L.arg=P.arg)}}}function H(T,_){var L=_.method,w=T.iterator[L];if(w===void 0)return _.delegate=null,L==="throw"&&T.iterator.return&&(_.method="return",_.arg=void 0,H(T,_),_.method==="throw")||L!=="return"&&(_.method="throw",_.arg=new TypeError("The iterator does not provide a '"+L+"' method")),q;var x=M(w,T.iterator,_.arg);if(x.type==="throw")return _.method="throw",_.arg=x.arg,_.delegate=null,q;var S=x.arg;return S?S.done?(_[T.resultName]=S.value,_.next=T.nextLoc,_.method!=="return"&&(_.method="next",_.arg=void 0),_.delegate=null,q):S:(_.method="throw",_.arg=new TypeError("iterator result is not an object"),_.delegate=null,q)}function ie(T){var _={tryLoc:T[0]};1 in T&&(_.catchLoc=T[1]),2 in T&&(_.finallyLoc=T[2],_.afterLoc=T[3]),this.tryEntries.push(_)}function ae(T){var _=T.completion||{};_.type="normal",delete _.arg,T.completion=_}function F(T){this.tryEntries=[{tryLoc:"root"}],T.forEach(ie,this),this.reset(!0)}function U(T){if(T){var _=T[b];if(_)return _.call(T);if(typeof T.next=="function")return T;if(!isNaN(T.length)){var L=-1,w=function x(){for(;++L<T.length;)if(d.call(T,L))return x.value=T[L],x.done=!1,x;return x.value=void 0,x.done=!0,x};return w.next=w}}return{next:R}}function R(){return{value:void 0,done:!0}}return N.prototype=k,f(ue,"constructor",{value:k,configurable:!0}),f(k,"constructor",{value:N,configurable:!0}),N.displayName=v(k,m,"GeneratorFunction"),c.isGeneratorFunction=function(T){var _=typeof T=="function"&&T.constructor;return!!_&&(_===N||(_.displayName||_.name)==="GeneratorFunction")},c.mark=function(T){return Object.setPrototypeOf?Object.setPrototypeOf(T,k):(T.__proto__=k,v(T,m,"GeneratorFunction")),T.prototype=Object.create(ue),T},c.awrap=function(T){return{__await:T}},se(W.prototype),v(W.prototype,y,function(){return this}),c.AsyncIterator=W,c.async=function(T,_,L,w,x){x===void 0&&(x=Promise);var S=new W(C(T,_,L,w),x);return c.isGeneratorFunction(_)?S:S.next().then(function(D){return D.done?D.value:S.next()})},se(ue),v(ue,m,"Generator"),v(ue,b,function(){return this}),v(ue,"toString",function(){return"[object Generator]"}),c.keys=function(T){var _=Object(T),L=[];for(var w in _)L.push(w);return L.reverse(),function x(){for(;L.length;){var S=L.pop();if(S in _)return x.value=S,x.done=!1,x}return x.done=!0,x}},c.values=U,F.prototype={constructor:F,reset:function(T){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(ae),!T)for(var _ in this)_.charAt(0)==="t"&&d.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=void 0)},stop:function(){this.done=!0;var T=this.tryEntries[0].completion;if(T.type==="throw")throw T.arg;return this.rval},dispatchException:function(T){if(this.done)throw T;var _=this;function L(P,B){return S.type="throw",S.arg=T,_.next=P,B&&(_.method="next",_.arg=void 0),!!B}for(var w=this.tryEntries.length-1;w>=0;--w){var x=this.tryEntries[w],S=x.completion;if(x.tryLoc==="root")return L("end");if(x.tryLoc<=this.prev){var D=d.call(x,"catchLoc"),A=d.call(x,"finallyLoc");if(D&&A){if(this.prev<x.catchLoc)return L(x.catchLoc,!0);if(this.prev<x.finallyLoc)return L(x.finallyLoc)}else if(D){if(this.prev<x.catchLoc)return L(x.catchLoc,!0)}else{if(!A)throw new Error("try statement without catch or finally");if(this.prev<x.finallyLoc)return L(x.finallyLoc)}}}},abrupt:function(T,_){for(var L=this.tryEntries.length-1;L>=0;--L){var w=this.tryEntries[L];if(w.tryLoc<=this.prev&&d.call(w,"finallyLoc")&&this.prev<w.finallyLoc){var x=w;break}}x&&(T==="break"||T==="continue")&&x.tryLoc<=_&&_<=x.finallyLoc&&(x=null);var S=x?x.completion:{};return S.type=T,S.arg=_,x?(this.method="next",this.next=x.finallyLoc,q):this.complete(S)},complete:function(T,_){if(T.type==="throw")throw T.arg;return T.type==="break"||T.type==="continue"?this.next=T.arg:T.type==="return"?(this.rval=this.arg=T.arg,this.method="return",this.next="end"):T.type==="normal"&&_&&(this.next=_),q},finish:function(T){for(var _=this.tryEntries.length-1;_>=0;--_){var L=this.tryEntries[_];if(L.finallyLoc===T)return this.complete(L.completion,L.afterLoc),ae(L),q}},catch:function(T){for(var _=this.tryEntries.length-1;_>=0;--_){var L=this.tryEntries[_];if(L.tryLoc===T){var w=L.completion;if(w.type==="throw"){var x=w.arg;ae(L)}return x}}throw new Error("illegal catch attempt")},delegateYield:function(T,_,L){return this.delegate={iterator:U(T),resultName:_,nextLoc:L},this.method==="next"&&(this.arg=void 0),q}},c}function p(c,s,d,f,g,b,y){try{var m=c[b](y),v=m.value}catch(C){return void d(C)}m.done?s(v):Promise.resolve(v).then(f,g)}function i(c){return function(){var s=this,d=arguments;return new Promise(function(f,g){var b=c.apply(s,d);function y(v){p(b,f,g,y,m,"next",v)}function m(v){p(b,f,g,y,m,"throw",v)}y(void 0)})}}var a=function(c){return new Promise(function(s,d){var f=new FileReader;f.onload=function(){s(f.result)},f.onerror=function(g){var b=g.target.error.code;d(Error("File could not be read! Code=".concat(b)))},f.readAsArrayBuffer(c)})},t=function(){var c=i(u().mark(function s(d){var f,g,b;return u().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(f=d,d!==void 0){y.next=3;break}return y.abrupt("return","undefined");case 3:if(typeof d!="string"){y.next=16;break}if(!/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(d)){y.next=8;break}f=atob(d.split(",")[1]).split("").map(function(m){return m.charCodeAt(0)}),y.next=14;break;case 8:return y.next=10,fetch(d);case 10:return g=y.sent,y.next=13,g.arrayBuffer();case 13:f=y.sent;case 14:y.next=43;break;case 16:if(!(typeof HTMLElement<"u"&&d instanceof HTMLElement)){y.next=30;break}if(d.tagName!=="IMG"){y.next=21;break}return y.next=20,t(d.src);case 20:f=y.sent;case 21:if(d.tagName!=="VIDEO"){y.next=25;break}return y.next=24,t(d.poster);case 24:f=y.sent;case 25:if(d.tagName!=="CANVAS"){y.next=28;break}return y.next=28,new Promise(function(m){d.toBlob(function(){var v=i(u().mark(function C(M){return u().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,a(M);case 2:f=q.sent,m();case 4:case"end":return q.stop()}},C)}));return function(C){return v.apply(this,arguments)}}())});case 28:y.next=43;break;case 30:if(!(typeof OffscreenCanvas<"u"&&d instanceof OffscreenCanvas)){y.next=39;break}return y.next=33,d.convertToBlob();case 33:return b=y.sent,y.next=36,a(b);case 36:f=y.sent,y.next=43;break;case 39:if(!(d instanceof File||d instanceof Blob)){y.next=43;break}return y.next=42,a(d);case 42:f=y.sent;case 43:return y.abrupt("return",new Uint8Array(f));case 44:case"end":return y.stop()}},s)}));return function(s){return c.apply(this,arguments)}}();n.exports=t},202:n=>{n.exports=function(l,u){l.onmessage=function(p){var i=p.data;u(i)}}},772:n=>{function l(i){return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(i)}function u(){"use strict";u=function(){return i};var i={},a=Object.prototype,t=a.hasOwnProperty,c=Object.defineProperty||function(F,U,R){F[U]=R.value},s=typeof Symbol=="function"?Symbol:{},d=s.iterator||"@@iterator",f=s.asyncIterator||"@@asyncIterator",g=s.toStringTag||"@@toStringTag";function b(F,U,R){return Object.defineProperty(F,U,{value:R,enumerable:!0,configurable:!0,writable:!0}),F[U]}try{b({},"")}catch{b=function(U,R,T){return U[R]=T}}function y(F,U,R,T){var _=U&&U.prototype instanceof C?U:C,L=Object.create(_.prototype),w=new H(T||[]);return c(L,"_invoke",{value:ue(F,R,w)}),L}function m(F,U,R){try{return{type:"normal",arg:F.call(U,R)}}catch(T){return{type:"throw",arg:T}}}i.wrap=y;var v={};function C(){}function M(){}function q(){}var Z={};b(Z,d,function(){return this});var N=Object.getPrototypeOf,k=N&&N(N(ie([])));k&&k!==a&&t.call(k,d)&&(Z=k);var z=q.prototype=C.prototype=Object.create(Z);function J(F){["next","throw","return"].forEach(function(U){b(F,U,function(R){return this._invoke(U,R)})})}function oe(F,U){function R(_,L,w,x){var S=m(F[_],F,L);if(S.type!=="throw"){var D=S.arg,A=D.value;return A&&l(A)=="object"&&t.call(A,"__await")?U.resolve(A.__await).then(function(P){R("next",P,w,x)},function(P){R("throw",P,w,x)}):U.resolve(A).then(function(P){D.value=P,w(D)},function(P){return R("throw",P,w,x)})}x(S.arg)}var T;c(this,"_invoke",{value:function(_,L){function w(){return new U(function(x,S){R(_,L,x,S)})}return T=T?T.then(w,w):w()}})}function ue(F,U,R){var T="suspendedStart";return function(_,L){if(T==="executing")throw new Error("Generator is already running");if(T==="completed"){if(_==="throw")throw L;return{value:void 0,done:!0}}for(R.method=_,R.arg=L;;){var w=R.delegate;if(w){var x=se(w,R);if(x){if(x===v)continue;return x}}if(R.method==="next")R.sent=R._sent=R.arg;else if(R.method==="throw"){if(T==="suspendedStart")throw T="completed",R.arg;R.dispatchException(R.arg)}else R.method==="return"&&R.abrupt("return",R.arg);T="executing";var S=m(F,U,R);if(S.type==="normal"){if(T=R.done?"completed":"suspendedYield",S.arg===v)continue;return{value:S.arg,done:R.done}}S.type==="throw"&&(T="completed",R.method="throw",R.arg=S.arg)}}}function se(F,U){var R=U.method,T=F.iterator[R];if(T===void 0)return U.delegate=null,R==="throw"&&F.iterator.return&&(U.method="return",U.arg=void 0,se(F,U),U.method==="throw")||R!=="return"&&(U.method="throw",U.arg=new TypeError("The iterator does not provide a '"+R+"' method")),v;var _=m(T,F.iterator,U.arg);if(_.type==="throw")return U.method="throw",U.arg=_.arg,U.delegate=null,v;var L=_.arg;return L?L.done?(U[F.resultName]=L.value,U.next=F.nextLoc,U.method!=="return"&&(U.method="next",U.arg=void 0),U.delegate=null,v):L:(U.method="throw",U.arg=new TypeError("iterator result is not an object"),U.delegate=null,v)}function W(F){var U={tryLoc:F[0]};1 in F&&(U.catchLoc=F[1]),2 in F&&(U.finallyLoc=F[2],U.afterLoc=F[3]),this.tryEntries.push(U)}function K(F){var U=F.completion||{};U.type="normal",delete U.arg,F.completion=U}function H(F){this.tryEntries=[{tryLoc:"root"}],F.forEach(W,this),this.reset(!0)}function ie(F){if(F){var U=F[d];if(U)return U.call(F);if(typeof F.next=="function")return F;if(!isNaN(F.length)){var R=-1,T=function _(){for(;++R<F.length;)if(t.call(F,R))return _.value=F[R],_.done=!1,_;return _.value=void 0,_.done=!0,_};return T.next=T}}return{next:ae}}function ae(){return{value:void 0,done:!0}}return M.prototype=q,c(z,"constructor",{value:q,configurable:!0}),c(q,"constructor",{value:M,configurable:!0}),M.displayName=b(q,g,"GeneratorFunction"),i.isGeneratorFunction=function(F){var U=typeof F=="function"&&F.constructor;return!!U&&(U===M||(U.displayName||U.name)==="GeneratorFunction")},i.mark=function(F){return Object.setPrototypeOf?Object.setPrototypeOf(F,q):(F.__proto__=q,b(F,g,"GeneratorFunction")),F.prototype=Object.create(z),F},i.awrap=function(F){return{__await:F}},J(oe.prototype),b(oe.prototype,f,function(){return this}),i.AsyncIterator=oe,i.async=function(F,U,R,T,_){_===void 0&&(_=Promise);var L=new oe(y(F,U,R,T),_);return i.isGeneratorFunction(U)?L:L.next().then(function(w){return w.done?w.value:L.next()})},J(z),b(z,g,"Generator"),b(z,d,function(){return this}),b(z,"toString",function(){return"[object Generator]"}),i.keys=function(F){var U=Object(F),R=[];for(var T in U)R.push(T);return R.reverse(),function _(){for(;R.length;){var L=R.pop();if(L in U)return _.value=L,_.done=!1,_}return _.done=!0,_}},i.values=ie,H.prototype={constructor:H,reset:function(F){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(K),!F)for(var U in this)U.charAt(0)==="t"&&t.call(this,U)&&!isNaN(+U.slice(1))&&(this[U]=void 0)},stop:function(){this.done=!0;var F=this.tryEntries[0].completion;if(F.type==="throw")throw F.arg;return this.rval},dispatchException:function(F){if(this.done)throw F;var U=this;function R(S,D){return L.type="throw",L.arg=F,U.next=S,D&&(U.method="next",U.arg=void 0),!!D}for(var T=this.tryEntries.length-1;T>=0;--T){var _=this.tryEntries[T],L=_.completion;if(_.tryLoc==="root")return R("end");if(_.tryLoc<=this.prev){var w=t.call(_,"catchLoc"),x=t.call(_,"finallyLoc");if(w&&x){if(this.prev<_.catchLoc)return R(_.catchLoc,!0);if(this.prev<_.finallyLoc)return R(_.finallyLoc)}else if(w){if(this.prev<_.catchLoc)return R(_.catchLoc,!0)}else{if(!x)throw new Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return R(_.finallyLoc)}}}},abrupt:function(F,U){for(var R=this.tryEntries.length-1;R>=0;--R){var T=this.tryEntries[R];if(T.tryLoc<=this.prev&&t.call(T,"finallyLoc")&&this.prev<T.finallyLoc){var _=T;break}}_&&(F==="break"||F==="continue")&&_.tryLoc<=U&&U<=_.finallyLoc&&(_=null);var L=_?_.completion:{};return L.type=F,L.arg=U,_?(this.method="next",this.next=_.finallyLoc,v):this.complete(L)},complete:function(F,U){if(F.type==="throw")throw F.arg;return F.type==="break"||F.type==="continue"?this.next=F.arg:F.type==="return"?(this.rval=this.arg=F.arg,this.method="return",this.next="end"):F.type==="normal"&&U&&(this.next=U),v},finish:function(F){for(var U=this.tryEntries.length-1;U>=0;--U){var R=this.tryEntries[U];if(R.finallyLoc===F)return this.complete(R.completion,R.afterLoc),K(R),v}},catch:function(F){for(var U=this.tryEntries.length-1;U>=0;--U){var R=this.tryEntries[U];if(R.tryLoc===F){var T=R.completion;if(T.type==="throw"){var _=T.arg;K(R)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(F,U,R){return this.delegate={iterator:ie(F),resultName:U,nextLoc:R},this.method==="next"&&(this.arg=void 0),v}},i}function p(i,a,t,c,s,d,f){try{var g=i[d](f),b=g.value}catch(y){return void t(y)}g.done?a(b):Promise.resolve(b).then(c,s)}n.exports=function(){var i,a=(i=u().mark(function t(c,s){return u().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:c.postMessage(s);case 1:case"end":return d.stop()}},t)}),function(){var t=this,c=arguments;return new Promise(function(s,d){var f=i.apply(t,c);function g(y){p(f,s,d,g,b,"next",y)}function b(y){p(f,s,d,g,b,"throw",y)}g(void 0)})});return function(t,c){return a.apply(this,arguments)}}()},676:n=>{n.exports=function(l){var u,p=l.workerPath,i=l.workerBlobURL;if(Blob&&URL&&i){var a=new Blob(['importScripts("'.concat(p,'");')],{type:"application/javascript"});u=new Worker(URL.createObjectURL(a))}else u=new Worker(p);return u}},100:n=>{n.exports=function(l){l.terminate()}},147:n=>{"use strict";n.exports={i8:"5.1.1"}}},r={};function o(n){var l=r[n];if(l!==void 0)return l.exports;var u=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(u.exports,u,u.exports,o),u.loaded=!0,u.exports}return o.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),o(352)})())});Y();Y();Y();Y();var $m=Object.create,pi=Object.defineProperty,Mm=Object.getOwnPropertyDescriptor,hu=Object.getOwnPropertyNames,jm=Object.getPrototypeOf,Um=Object.prototype.hasOwnProperty,qm=(e,r)=>function(){return r||(0,e[hu(e)[0]])((r={exports:{}}).exports,r),r.exports},zm=(e,r)=>{for(var o in r)pi(e,o,{get:r[o],enumerable:!0})},ci=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of hu(r))!Um.call(e,l)&&l!==o&&pi(e,l,{get:()=>r[l],enumerable:!(n=Mm(r,l))||n.enumerable});return e},Gm=(e,r,o)=>(ci(e,r,"default"),o&&ci(o,r,"default")),gu=(e,r,o)=>(o=e!=null?$m(jm(e)):{},ci(r||!e||!e.__esModule?pi(o,"default",{value:e,enumerable:!0}):o,e)),mu=qm({"../esmd/npm/webextension-polyfill@0.10.0/node_modules/.pnpm/webextension-polyfill@0.10.0/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,r){(function(o,n){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],n);else if(typeof e<"u")n(r);else{var l={exports:{}};n(l),o.browser=l.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(o){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let n="The message port closed before a response was received.",l=u=>{let p={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(p).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class i extends WeakMap{constructor(N,k=void 0){super(k),this.createItem=N}get(N){return this.has(N)||this.set(N,this.createItem(N)),super.get(N)}}let a=Z=>Z&&typeof Z=="object"&&typeof Z.then=="function",t=(Z,N)=>(...k)=>{u.runtime.lastError?Z.reject(new Error(u.runtime.lastError.message)):N.singleCallbackArg||k.length<=1&&N.singleCallbackArg!==!1?Z.resolve(k[0]):Z.resolve(k)},c=Z=>Z==1?"argument":"arguments",s=(Z,N)=>function(z,...J){if(J.length<N.minArgs)throw new Error(`Expected at least ${N.minArgs} ${c(N.minArgs)} for ${Z}(), got ${J.length}`);if(J.length>N.maxArgs)throw new Error(`Expected at most ${N.maxArgs} ${c(N.maxArgs)} for ${Z}(), got ${J.length}`);return new Promise((oe,ue)=>{if(N.fallbackToNoCallback)try{z[Z](...J,t({resolve:oe,reject:ue},N))}catch{z[Z](...J),N.fallbackToNoCallback=!1,N.noCallback=!0,oe()}else N.noCallback?(z[Z](...J),oe()):z[Z](...J,t({resolve:oe,reject:ue},N))})},d=(Z,N,k)=>new Proxy(N,{apply(z,J,oe){return k.call(J,Z,...oe)}}),f=Function.call.bind(Object.prototype.hasOwnProperty),g=(Z,N={},k={})=>{let z=Object.create(null),J={has(ue,se){return se in Z||se in z},get(ue,se,W){if(se in z)return z[se];if(!(se in Z))return;let K=Z[se];if(typeof K=="function")if(typeof N[se]=="function")K=d(Z,Z[se],N[se]);else if(f(k,se)){let H=s(se,k[se]);K=d(Z,Z[se],H)}else K=K.bind(Z);else if(typeof K=="object"&&K!==null&&(f(N,se)||f(k,se)))K=g(K,N[se],k[se]);else if(f(k,"*"))K=g(K,N[se],k["*"]);else return Object.defineProperty(z,se,{configurable:!0,enumerable:!0,get(){return Z[se]},set(H){Z[se]=H}}),K;return z[se]=K,K},set(ue,se,W,K){return se in z?z[se]=W:Z[se]=W,!0},defineProperty(ue,se,W){return Reflect.defineProperty(z,se,W)},deleteProperty(ue,se){return Reflect.deleteProperty(z,se)}},oe=Object.create(Z);return new Proxy(oe,J)},b=Z=>({addListener(N,k,...z){N.addListener(Z.get(k),...z)},hasListener(N,k){return N.hasListener(Z.get(k))},removeListener(N,k){N.removeListener(Z.get(k))}}),y=new i(Z=>typeof Z!="function"?Z:function(k){let z=g(k,{},{getContent:{minArgs:0,maxArgs:0}});Z(z)}),m=new i(Z=>typeof Z!="function"?Z:function(k,z,J){let oe=!1,ue,se=new Promise(ie=>{ue=function(ae){oe=!0,ie(ae)}}),W;try{W=Z(k,z,ue)}catch(ie){W=Promise.reject(ie)}let K=W!==!0&&a(W);if(W!==!0&&!K&&!oe)return!1;let H=ie=>{ie.then(ae=>{J(ae)},ae=>{let F;ae&&(ae instanceof Error||typeof ae.message=="string")?F=ae.message:F="An unexpected error occurred",J({__mozWebExtensionPolyfillReject__:!0,message:F})}).catch(ae=>{})};return H(K?W:se),!0}),v=({reject:Z,resolve:N},k)=>{u.runtime.lastError?u.runtime.lastError.message===n?N():Z(new Error(u.runtime.lastError.message)):k&&k.__mozWebExtensionPolyfillReject__?Z(new Error(k.message)):N(k)},C=(Z,N,k,...z)=>{if(z.length<N.minArgs)throw new Error(`Expected at least ${N.minArgs} ${c(N.minArgs)} for ${Z}(), got ${z.length}`);if(z.length>N.maxArgs)throw new Error(`Expected at most ${N.maxArgs} ${c(N.maxArgs)} for ${Z}(), got ${z.length}`);return new Promise((J,oe)=>{let ue=v.bind(null,{resolve:J,reject:oe});z.push(ue),k.sendMessage(...z)})},M={devtools:{network:{onRequestFinished:b(y)}},runtime:{onMessage:b(m),onMessageExternal:b(m),sendMessage:C.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:C.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return p.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},g(u,M,p)};o.exports=l(chrome)}else o.exports=globalThis.browser})}}),bu={};zm(bu,{default:()=>bo});var Vm=gu(mu());Gm(bu,gu(mu()));var{default:fu,...Km}=Vm,bo=fu!==void 0?fu:Km;globalThis.immersiveTranslateBrowserAPI=bo;Y();Y();Y();Y();function xn(){let e,r="pending",o=new Promise((n,l)=>{e={async resolve(u){await u,r="fulfilled",n(u)},reject(u){r="rejected",l(u)}}});return Object.defineProperty(o,"state",{get:()=>r}),Object.assign(o,e)}Y();Y();Y();function di(e,r={}){let{signal:o,persistent:n}=r;return o?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((l,u)=>{let p=()=>{clearTimeout(a),u(new DOMException("Delay was aborted.","AbortError"))},a=setTimeout(()=>{o?.removeEventListener("abort",p),l()},e);if(o?.addEventListener("abort",p,{once:!0}),n===!1)try{Deno.unrefTimer(a)}catch(t){if(!(t instanceof ReferenceError))throw t}})}Y();var yu=class{#e=0;#t=[];#r=[];#n=xn();add(r){++this.#e,this.#o(r[Symbol.asyncIterator]())}async#o(r){try{let{value:o,done:n}=await r.next();n?--this.#e:this.#t.push({iterator:r,value:o})}catch(o){this.#r.push(o)}this.#n.resolve()}async*iterate(){for(;this.#e>0;){await this.#n;for(let r=0;r<this.#t.length;r++){let{iterator:o,value:n}=this.#t[r];yield n,this.#o(o)}if(this.#r.length){for(let r of this.#r)throw r;this.#r.length=0}this.#t.length=0,this.#n=xn()}}[Symbol.asyncIterator](){return this.iterate()}};Y();Y();Y();var Wt={};km(Wt,{bgBlack:()=>vb,bgBlue:()=>Ab,bgBrightBlack:()=>Sb,bgBrightBlue:()=>Ib,bgBrightCyan:()=>Lb,bgBrightGreen:()=>Cb,bgBrightMagenta:()=>Fb,bgBrightRed:()=>Pb,bgBrightWhite:()=>kb,bgBrightYellow:()=>Ob,bgCyan:()=>Eb,bgGreen:()=>wb,bgMagenta:()=>_b,bgRed:()=>xb,bgRgb24:()=>$b,bgRgb8:()=>Rb,bgWhite:()=>Db,bgYellow:()=>Tb,black:()=>nb,blue:()=>sb,bold:()=>Ym,brightBlack:()=>wu,brightBlue:()=>gb,brightCyan:()=>bb,brightGreen:()=>fb,brightMagenta:()=>mb,brightRed:()=>db,brightWhite:()=>yb,brightYellow:()=>hb,cyan:()=>lb,dim:()=>Jm,getColorEnabled:()=>Wm,gray:()=>pb,green:()=>ib,hidden:()=>tb,inverse:()=>eb,italic:()=>Zm,magenta:()=>ub,red:()=>ob,reset:()=>Xm,rgb24:()=>Bb,rgb8:()=>Nb,setColorEnabled:()=>Hm,strikethrough:()=>rb,stripColor:()=>jb,underline:()=>Qm,white:()=>cb,yellow:()=>ab});Y();var{Deno:vu}=globalThis,xu=typeof vu?.noColor=="boolean"?vu.noColor:!0,fi=!xu;function Hm(e){xu||(fi=e)}function Wm(){return fi}function Ie(e,r){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${r}m`,regexp:new RegExp(`\\x1b\\[${r}m`,"g")}}function Fe(e,r){return fi?`${r.open}${e.replace(r.regexp,r.open)}${r.close}`:e}function Xm(e){return Fe(e,Ie([0],0))}function Ym(e){return Fe(e,Ie([1],22))}function Jm(e){return Fe(e,Ie([2],22))}function Zm(e){return Fe(e,Ie([3],23))}function Qm(e){return Fe(e,Ie([4],24))}function eb(e){return Fe(e,Ie([7],27))}function tb(e){return Fe(e,Ie([8],28))}function rb(e){return Fe(e,Ie([9],29))}function nb(e){return Fe(e,Ie([30],39))}function ob(e){return Fe(e,Ie([31],39))}function ib(e){return Fe(e,Ie([32],39))}function ab(e){return Fe(e,Ie([33],39))}function sb(e){return Fe(e,Ie([34],39))}function ub(e){return Fe(e,Ie([35],39))}function lb(e){return Fe(e,Ie([36],39))}function cb(e){return Fe(e,Ie([37],39))}function pb(e){return wu(e)}function wu(e){return Fe(e,Ie([90],39))}function db(e){return Fe(e,Ie([91],39))}function fb(e){return Fe(e,Ie([92],39))}function hb(e){return Fe(e,Ie([93],39))}function gb(e){return Fe(e,Ie([94],39))}function mb(e){return Fe(e,Ie([95],39))}function bb(e){return Fe(e,Ie([96],39))}function yb(e){return Fe(e,Ie([97],39))}function vb(e){return Fe(e,Ie([40],49))}function xb(e){return Fe(e,Ie([41],49))}function wb(e){return Fe(e,Ie([42],49))}function Tb(e){return Fe(e,Ie([43],49))}function Ab(e){return Fe(e,Ie([44],49))}function _b(e){return Fe(e,Ie([45],49))}function Eb(e){return Fe(e,Ie([46],49))}function Db(e){return Fe(e,Ie([47],49))}function Sb(e){return Fe(e,Ie([100],49))}function Pb(e){return Fe(e,Ie([101],49))}function Cb(e){return Fe(e,Ie([102],49))}function Ob(e){return Fe(e,Ie([103],49))}function Ib(e){return Fe(e,Ie([104],49))}function Fb(e){return Fe(e,Ie([105],49))}function Lb(e){return Fe(e,Ie([106],49))}function kb(e){return Fe(e,Ie([107],49))}function br(e,r=255,o=0){return Math.trunc(Math.max(Math.min(e,r),o))}function Nb(e,r){return Fe(e,Ie([38,5,br(r)],39))}function Rb(e,r){return Fe(e,Ie([48,5,br(r)],49))}function Bb(e,r){return typeof r=="number"?Fe(e,Ie([38,2,r>>16&255,r>>8&255,r&255],39)):Fe(e,Ie([38,2,br(r.r),br(r.g),br(r.b)],39))}function $b(e,r){return typeof r=="number"?Fe(e,Ie([48,2,r>>16&255,r>>8&255,r&255],49)):Fe(e,Ie([48,2,br(r.r),br(r.g),br(r.b)],49))}var Mb=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function jb(e){return e.replace(Mb,"")}Y();Y();Y();Y();Y();Y();Y();var yo=globalThis||(typeof window<"u"?window:self),qb=Object.create,gi=Object.defineProperty,zb=Object.getOwnPropertyDescriptor,Gb=Object.getOwnPropertyNames,Vb=Object.getPrototypeOf,Kb=Object.prototype.hasOwnProperty,Hb=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Wb=(e,r)=>{for(var o in r)gi(e,o,{get:r[o],enumerable:!0})},hi=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of Gb(r))!Kb.call(e,l)&&l!==o&&gi(e,l,{get:()=>r[l],enumerable:!(n=zb(r,l))||n.enumerable});return e},Xb=(e,r,o)=>(hi(e,r,"default"),o&&hi(o,r,"default")),Au=(e,r,o)=>(o=e!=null?qb(Vb(e)):{},hi(r||!e||!e.__esModule?gi(o,"default",{value:e,enumerable:!0}):o,e)),_u=Hb((e,r)=>{var o="Expected a function",n=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,t=parseInt,c=typeof yo=="object"&&yo&&yo.Object===Object&&yo,s=typeof self=="object"&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),f=Object.prototype,g=f.toString,b=Math.max,y=Math.min,m=function(){return d.Date.now()};function v(k,z,J){var oe,ue,se,W,K,H,ie=0,ae=!1,F=!1,U=!0;if(typeof k!="function")throw new TypeError(o);z=N(z)||0,M(J)&&(ae=!!J.leading,F="maxWait"in J,se=F?b(N(J.maxWait)||0,z):se,U="trailing"in J?!!J.trailing:U);function R(P){var B=oe,G=ue;return oe=ue=void 0,ie=P,W=k.apply(G,B),W}function T(P){return ie=P,K=setTimeout(w,z),ae?R(P):W}function _(P){var B=P-H,G=P-ie,ne=z-B;return F?y(ne,se-G):ne}function L(P){var B=P-H,G=P-ie;return H===void 0||B>=z||B<0||F&&G>=se}function w(){var P=m();if(L(P))return x(P);K=setTimeout(w,_(P))}function x(P){return K=void 0,U&&oe?R(P):(oe=ue=void 0,W)}function S(){K!==void 0&&clearTimeout(K),ie=0,oe=H=ue=K=void 0}function D(){return K===void 0?W:x(m())}function A(){var P=m(),B=L(P);if(oe=arguments,ue=this,H=P,B){if(K===void 0)return T(H);if(F)return K=setTimeout(w,z),R(H)}return K===void 0&&(K=setTimeout(w,z)),W}return A.cancel=S,A.flush=D,A}function C(k,z,J){var oe=!0,ue=!0;if(typeof k!="function")throw new TypeError(o);return M(J)&&(oe="leading"in J?!!J.leading:oe,ue="trailing"in J?!!J.trailing:ue),v(k,z,{leading:oe,maxWait:z,trailing:ue})}function M(k){var z=typeof k;return!!k&&(z=="object"||z=="function")}function q(k){return!!k&&typeof k=="object"}function Z(k){return typeof k=="symbol"||q(k)&&g.call(k)==l}function N(k){if(typeof k=="number")return k;if(Z(k))return n;if(M(k)){var z=typeof k.valueOf=="function"?k.valueOf():k;k=M(z)?z+"":z}if(typeof k!="string")return k===0?k:+k;k=k.replace(u,"");var J=i.test(k);return J||a.test(k)?t(k.slice(2),J?2:8):p.test(k)?n:+k}r.exports=C}),Eu={};Wb(Eu,{default:()=>mi});var Yb=Au(_u());Xb(Eu,Au(_u()));var{default:Tu,...Jb}=Yb,mi=Tu!==void 0?Tu:Jb;Y();Y();var vo=globalThis||(typeof window<"u"?window:self),Zb=Object.create,yi=Object.defineProperty,Qb=Object.getOwnPropertyDescriptor,ey=Object.getOwnPropertyNames,ty=Object.getPrototypeOf,ry=Object.prototype.hasOwnProperty,ny=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),oy=(e,r)=>{for(var o in r)yi(e,o,{get:r[o],enumerable:!0})},bi=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of ey(r))!ry.call(e,l)&&l!==o&&yi(e,l,{get:()=>r[l],enumerable:!(n=Qb(r,l))||n.enumerable});return e},iy=(e,r,o)=>(bi(e,r,"default"),o&&bi(o,r,"default")),Su=(e,r,o)=>(o=e!=null?Zb(ty(e)):{},bi(r||!e||!e.__esModule?yi(o,"default",{value:e,enumerable:!0}):o,e)),Pu=ny((e,r)=>{var o="Expected a function",n=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,t=parseInt,c=typeof vo=="object"&&vo&&vo.Object===Object&&vo,s=typeof self=="object"&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),f=Object.prototype,g=f.toString,b=Math.max,y=Math.min,m=function(){return d.Date.now()};function v(N,k,z){var J,oe,ue,se,W,K,H=0,ie=!1,ae=!1,F=!0;if(typeof N!="function")throw new TypeError(o);k=Z(k)||0,C(z)&&(ie=!!z.leading,ae="maxWait"in z,ue=ae?b(Z(z.maxWait)||0,k):ue,F="trailing"in z?!!z.trailing:F);function U(A){var P=J,B=oe;return J=oe=void 0,H=A,se=N.apply(B,P),se}function R(A){return H=A,W=setTimeout(L,k),ie?U(A):se}function T(A){var P=A-K,B=A-H,G=k-P;return ae?y(G,ue-B):G}function _(A){var P=A-K,B=A-H;return K===void 0||P>=k||P<0||ae&&B>=ue}function L(){var A=m();if(_(A))return w(A);W=setTimeout(L,T(A))}function w(A){return W=void 0,F&&J?U(A):(J=oe=void 0,se)}function x(){W!==void 0&&clearTimeout(W),H=0,J=K=oe=W=void 0}function S(){return W===void 0?se:w(m())}function D(){var A=m(),P=_(A);if(J=arguments,oe=this,K=A,P){if(W===void 0)return R(K);if(ae)return W=setTimeout(L,k),U(K)}return W===void 0&&(W=setTimeout(L,k)),se}return D.cancel=x,D.flush=S,D}function C(N){var k=typeof N;return!!N&&(k=="object"||k=="function")}function M(N){return!!N&&typeof N=="object"}function q(N){return typeof N=="symbol"||M(N)&&g.call(N)==l}function Z(N){if(typeof N=="number")return N;if(q(N))return n;if(C(N)){var k=typeof N.valueOf=="function"?N.valueOf():N;N=C(k)?k+"":k}if(typeof N!="string")return N===0?N:+N;N=N.replace(u,"");var z=i.test(N);return z||a.test(N)?t(N.slice(2),z?2:8):p.test(N)?n:+N}r.exports=v}),Cu={};oy(Cu,{default:()=>vi});var ay=Su(Pu());iy(Cu,Su(Pu()));var{default:Du,...sy}=ay,vi=Du!==void 0?Du:sy;Y();Y();var uy=Object.create,wi=Object.defineProperty,ly=Object.getOwnPropertyDescriptor,cy=Object.getOwnPropertyNames,py=Object.getPrototypeOf,dy=Object.prototype.hasOwnProperty,fy=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),hy=(e,r)=>{for(var o in r)wi(e,o,{get:r[o],enumerable:!0})},xi=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of cy(r))!dy.call(e,l)&&l!==o&&wi(e,l,{get:()=>r[l],enumerable:!(n=ly(r,l))||n.enumerable});return e},gy=(e,r,o)=>(xi(e,r,"default"),o&&xi(o,r,"default")),Iu=(e,r,o)=>(o=e!=null?uy(py(e)):{},xi(r||!e||!e.__esModule?wi(o,"default",{value:e,enumerable:!0}):o,e)),Fu=fy((e,r)=>{(function(o,n){typeof e=="object"&&typeof r=="object"?r.exports=n():typeof define=="function"&&define.amd?define([],n):typeof e=="object"?e.notie=n():o.notie=n()})(e,function(){return function(o){function n(u){if(l[u])return l[u].exports;var p=l[u]={i:u,l:!1,exports:{}};return o[u].call(p.exports,p,p.exports,n),p.l=!0,p.exports}var l={};return n.m=o,n.c=l,n.i=function(u){return u},n.d=function(u,p,i){n.o(u,p)||Object.defineProperty(u,p,{configurable:!1,enumerable:!0,get:i})},n.n=function(u){var p=u&&u.__esModule?function(){return u.default}:function(){return u};return n.d(p,"a",p),p},n.o=function(u,p){return Object.prototype.hasOwnProperty.call(u,p)},n.p="",n(n.s=1)}([function(o,n){o.exports=function(l){return l.webpackPolyfill||(l.deprecate=function(){},l.paths=[],l.children||(l.children=[]),Object.defineProperty(l,"loaded",{enumerable:!0,get:function(){return l.l}}),Object.defineProperty(l,"id",{enumerable:!0,get:function(){return l.i}}),l.webpackPolyfill=1),l}},function(o,n,l){"use strict";(function(u){var p,i,a,t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};(function(c,s){t(n)==="object"&&t(u)==="object"?u.exports=s():(i=[],p=s,a=typeof p=="function"?p.apply(n,i):p,a!==void 0&&(u.exports=a))})(void 0,function(){return function(c){function s(f){if(d[f])return d[f].exports;var g=d[f]={i:f,l:!1,exports:{}};return c[f].call(g.exports,g,g.exports,s),g.l=!0,g.exports}var d={};return s.m=c,s.c=d,s.i=function(f){return f},s.d=function(f,g,b){s.o(f,g)||Object.defineProperty(f,g,{configurable:!1,enumerable:!0,get:b})},s.n=function(f){var g=f&&f.__esModule?function(){return f.default}:function(){return f};return s.d(g,"a",g),g},s.o=function(f,g){return Object.prototype.hasOwnProperty.call(f,g)},s.p="",s(s.s=0)}([function(c,s,d){function f(T,_){var L={};for(var w in T)_.indexOf(w)>=0||Object.prototype.hasOwnProperty.call(T,w)&&(L[w]=T[w]);return L}Object.defineProperty(s,"__esModule",{value:!0});var g=typeof Symbol=="function"&&t(Symbol.iterator)==="symbol"?function(T){return typeof T>"u"?"undefined":t(T)}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T>"u"?"undefined":t(T)},b=Object.assign||function(T){for(var _=1;_<arguments.length;_++){var L=arguments[_];for(var w in L)Object.prototype.hasOwnProperty.call(L,w)&&(T[w]=L[w])}return T},y={top:"top",bottom:"bottom"},m={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:y.top,force:y.top,confirm:y.top,input:y.top,select:y.bottom,date:y.top}},v=s.setOptions=function(T){m=b({},m,T,{classes:b({},m.classes,T.classes),ids:b({},m.ids,T.ids),positions:b({},m.positions,T.positions)})},C=function(){return new Promise(function(T){return setTimeout(T,0)})},M=function(T){return new Promise(function(_){return setTimeout(_,1e3*T)})},q=function(){document.activeElement&&document.activeElement.blur()},Z=function(){var T="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(_){var L=16*Math.random()|0,w=_==="x"?L:3&L|8;return w.toString(16)});return"notie-"+T},N={1:m.classes.backgroundSuccess,success:m.classes.backgroundSuccess,2:m.classes.backgroundWarning,warning:m.classes.backgroundWarning,3:m.classes.backgroundError,error:m.classes.backgroundError,4:m.classes.backgroundInfo,info:m.classes.backgroundInfo,5:m.classes.backgroundNeutral,neutral:m.classes.backgroundNeutral},k=function(){return m.transitionSelector+" "+m.transitionDuration+"s "+m.transitionCurve},z=function(T){return T.keyCode===13},J=function(T){return T.keyCode===27},oe=function(T,_){T.classList.add(m.classes.container),T.style[_]="-10000px",document.body.appendChild(T),T.style[_]="-"+T.offsetHeight+"px",T.listener&&window.addEventListener("keydown",T.listener),C().then(function(){T.style.transition=k(),T.style[_]=0})},ue=function(T,_){var L=document.getElementById(T);L&&(L.style[_]="-"+L.offsetHeight+"px",L.listener&&window.removeEventListener("keydown",L.listener),M(m.transitionDuration).then(function(){L.parentNode&&L.parentNode.removeChild(L)}))},se=function(T,_){var L=document.createElement("div");L.id=m.ids.overlay,L.classList.add(m.classes.overlay),L.classList.add(m.classes.backgroundOverlay),L.style.opacity=0,T&&m.overlayClickDismiss&&(L.onclick=function(){ue(T.id,_),W()}),document.body.appendChild(L),C().then(function(){L.style.transition=k(),L.style.opacity=m.overlayOpacity})},W=function(){var T=document.getElementById(m.ids.overlay);T.style.opacity=0,M(m.transitionDuration).then(function(){T.parentNode&&T.parentNode.removeChild(T)})},K=s.hideAlerts=function(T){var _=document.getElementsByClassName(m.classes.alert);if(_.length){for(var L=0;L<_.length;L++){var w=_[L];ue(w.id,w.position)}T&&M(m.transitionDuration).then(function(){return T()})}},H=s.alert=function(T){var _=T.type,L=_===void 0?4:_,w=T.text,x=T.time,S=x===void 0?m.alertTime:x,D=T.stay,A=D!==void 0&&D,P=T.position,B=P===void 0?m.positions.alert||B.top:P;q(),K();var G=document.createElement("div"),ne=Z();G.id=ne,G.position=B,G.classList.add(m.classes.textbox),G.classList.add(N[L]),G.classList.add(m.classes.alert),G.innerHTML='<div class="'+m.classes.textboxInner+'">'+w+"</div>",G.onclick=function(){return ue(ne,B)},G.listener=function(Q){(z(Q)||J(Q))&&K()},oe(G,B),S&&S<1&&(S=1),!A&&S&&M(S).then(function(){return ue(ne,B)})},ie=s.force=function(T,_){var L=T.type,w=L===void 0?5:L,x=T.text,S=T.buttonText,D=S===void 0?"OK":S,A=T.callback,P=T.position,B=P===void 0?m.positions.force||B.top:P;q(),K();var G=document.createElement("div"),ne=Z();G.id=ne;var Q=document.createElement("div");Q.classList.add(m.classes.textbox),Q.classList.add(m.classes.backgroundInfo),Q.innerHTML='<div class="'+m.classes.textboxInner+'">'+x+"</div>";var fe=document.createElement("div");fe.classList.add(m.classes.button),fe.classList.add(N[w]),fe.innerHTML=D,fe.onclick=function(){ue(ne,B),W(),A?A():_&&_()},G.appendChild(Q),G.appendChild(fe),G.listener=function(ye){z(ye)&&fe.click()},oe(G,B),se()},ae=s.confirm=function(T,_,L){var w=T.text,x=T.submitText,S=x===void 0?"Yes":x,D=T.cancelText,A=D===void 0?"Cancel":D,P=T.submitCallback,B=T.cancelCallback,G=T.position,ne=G===void 0?m.positions.confirm||ne.top:G;q(),K();var Q=document.createElement("div"),fe=Z();Q.id=fe;var ye=document.createElement("div");ye.classList.add(m.classes.textbox),ye.classList.add(m.classes.backgroundInfo),ye.innerHTML='<div class="'+m.classes.textboxInner+'">'+w+"</div>";var _e=document.createElement("div");_e.classList.add(m.classes.button),_e.classList.add(m.classes.elementHalf),_e.classList.add(m.classes.backgroundSuccess),_e.innerHTML=S,_e.onclick=function(){ue(fe,ne),W(),P?P():_&&_()};var be=document.createElement("div");be.classList.add(m.classes.button),be.classList.add(m.classes.elementHalf),be.classList.add(m.classes.backgroundError),be.innerHTML=A,be.onclick=function(){ue(fe,ne),W(),B?B():L&&L()},Q.appendChild(ye),Q.appendChild(_e),Q.appendChild(be),Q.listener=function(Le){z(Le)?_e.click():J(Le)&&be.click()},oe(Q,ne),se(Q,ne)},F=function(T,_,L){var w=T.text,x=T.submitText,S=x===void 0?"Submit":x,D=T.cancelText,A=D===void 0?"Cancel":D,P=T.submitCallback,B=T.cancelCallback,G=T.position,ne=G===void 0?m.positions.input||ne.top:G,Q=f(T,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);q(),K();var fe=document.createElement("div"),ye=Z();fe.id=ye;var _e=document.createElement("div");_e.classList.add(m.classes.textbox),_e.classList.add(m.classes.backgroundInfo),_e.innerHTML='<div class="'+m.classes.textboxInner+'">'+w+"</div>";var be=document.createElement("input");be.classList.add(m.classes.inputField),be.setAttribute("autocapitalize",Q.autocapitalize||"none"),be.setAttribute("autocomplete",Q.autocomplete||"off"),be.setAttribute("autocorrect",Q.autocorrect||"off"),be.setAttribute("autofocus",Q.autofocus||"true"),be.setAttribute("inputmode",Q.inputmode||"verbatim"),be.setAttribute("max",Q.max||""),be.setAttribute("maxlength",Q.maxlength||""),be.setAttribute("min",Q.min||""),be.setAttribute("minlength",Q.minlength||""),be.setAttribute("placeholder",Q.placeholder||""),be.setAttribute("spellcheck",Q.spellcheck||"default"),be.setAttribute("step",Q.step||"any"),be.setAttribute("type",Q.type||"text"),be.value=Q.value||"",Q.allowed&&(be.oninput=function(){var Ze=void 0;if(Array.isArray(Q.allowed)){for(var te="",X=Q.allowed,ce=0;ce<X.length;ce++)X[ce]==="an"?te+="0-9a-zA-Z":X[ce]==="a"?te+="a-zA-Z":X[ce]==="n"&&(te+="0-9"),X[ce]==="s"&&(te+=" ");Ze=new RegExp("[^"+te+"]","g")}else g(Q.allowed)==="object"&&(Ze=Q.allowed);be.value=be.value.replace(Ze,"")});var Le=document.createElement("div");Le.classList.add(m.classes.button),Le.classList.add(m.classes.elementHalf),Le.classList.add(m.classes.backgroundSuccess),Le.innerHTML=S,Le.onclick=function(){ue(ye,ne),W(),P?P(be.value):_&&_(be.value)};var Je=document.createElement("div");Je.classList.add(m.classes.button),Je.classList.add(m.classes.elementHalf),Je.classList.add(m.classes.backgroundError),Je.innerHTML=A,Je.onclick=function(){ue(ye,ne),W(),B?B(be.value):L&&L(be.value)},fe.appendChild(_e),fe.appendChild(be),fe.appendChild(Le),fe.appendChild(Je),fe.listener=function(Ze){z(Ze)?Le.click():J(Ze)&&Je.click()},oe(fe,ne),be.focus(),se(fe,ne)};s.input=F;var U=s.select=function(T,_){var L=T.text,w=T.cancelText,x=w===void 0?"Cancel":w,S=T.cancelCallback,D=T.choices,A=T.position,P=A===void 0?m.positions.select||P.top:A;q(),K();var B=document.createElement("div"),G=Z();B.id=G;var ne=document.createElement("div");ne.classList.add(m.classes.textbox),ne.classList.add(m.classes.backgroundInfo),ne.innerHTML='<div class="'+m.classes.textboxInner+'">'+L+"</div>",B.appendChild(ne),D.forEach(function(fe,ye){var _e=fe.type,be=_e===void 0?1:_e,Le=fe.text,Je=fe.handler,Ze=document.createElement("div");Ze.classList.add(N[be]),Ze.classList.add(m.classes.button),Ze.classList.add(m.classes.selectChoice);var te=D[ye+1];te&&!te.type&&(te.type=1),te&&te.type===be&&Ze.classList.add(m.classes.selectChoiceRepeated),Ze.innerHTML=Le,Ze.onclick=function(){ue(G,P),W(),Je()},B.appendChild(Ze)});var Q=document.createElement("div");Q.classList.add(m.classes.backgroundNeutral),Q.classList.add(m.classes.button),Q.innerHTML=x,Q.onclick=function(){ue(G,P),W(),S?S():_&&_()},B.appendChild(Q),B.listener=function(fe){J(fe)&&Q.click()},oe(B,P),se(B,P)},R=s.date=function(T,_,L){var w=T.value,x=w===void 0?new Date:w,S=T.submitText,D=S===void 0?"OK":S,A=T.cancelText,P=A===void 0?"Cancel":A,B=T.submitCallback,G=T.cancelCallback,ne=T.position,Q=ne===void 0?m.positions.date||Q.top:ne;q(),K();var fe="&#9662",ye=document.createElement("div"),_e=document.createElement("div"),be=document.createElement("div"),Le=function(ve){ye.innerHTML=m.dateMonths[ve.getMonth()],_e.innerHTML=ve.getDate(),be.innerHTML=ve.getFullYear()},Je=function(ve){var Ae=new Date(x.getFullYear(),x.getMonth()+1,0).getDate(),He=ve.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(He)>Ae&&(He=Ae.toString()),ve.target.textContent=He,Number(He)<1&&(He="1"),x.setDate(Number(He))},Ze=function(ve){var Ae=ve.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);ve.target.textContent=Ae,x.setFullYear(Number(Ae))},te=function(ve){Le(x)},X=function(ve){var Ae=new Date(x.getFullYear(),x.getMonth()+ve+1,0).getDate();x.getDate()>Ae&&x.setDate(Ae),x.setMonth(x.getMonth()+ve),Le(x)},ce=function(ve){x.setDate(x.getDate()+ve),Le(x)},Pe=function(ve){var Ae=x.getFullYear()+ve;Ae<0?x.setFullYear(0):x.setFullYear(x.getFullYear()+ve),Le(x)},he=document.createElement("div"),Ce=Z();he.id=Ce;var je=document.createElement("div");je.classList.add(m.classes.backgroundInfo);var ze=document.createElement("div");ze.classList.add(m.classes.dateSelectorInner);var Be=document.createElement("div");Be.classList.add(m.classes.button),Be.classList.add(m.classes.elementThird),Be.classList.add(m.classes.dateSelectorUp),Be.innerHTML=fe;var Qe=document.createElement("div");Qe.classList.add(m.classes.button),Qe.classList.add(m.classes.elementThird),Qe.classList.add(m.classes.dateSelectorUp),Qe.innerHTML=fe;var it=document.createElement("div");it.classList.add(m.classes.button),it.classList.add(m.classes.elementThird),it.classList.add(m.classes.dateSelectorUp),it.innerHTML=fe,ye.classList.add(m.classes.element),ye.classList.add(m.classes.elementThird),ye.innerHTML=m.dateMonths[x.getMonth()],_e.classList.add(m.classes.element),_e.classList.add(m.classes.elementThird),_e.setAttribute("contentEditable",!0),_e.addEventListener("input",Je),_e.addEventListener("blur",te),_e.innerHTML=x.getDate(),be.classList.add(m.classes.element),be.classList.add(m.classes.elementThird),be.setAttribute("contentEditable",!0),be.addEventListener("input",Ze),be.addEventListener("blur",te),be.innerHTML=x.getFullYear();var ct=document.createElement("div");ct.classList.add(m.classes.button),ct.classList.add(m.classes.elementThird),ct.innerHTML=fe;var Lt=document.createElement("div");Lt.classList.add(m.classes.button),Lt.classList.add(m.classes.elementThird),Lt.innerHTML=fe;var pt=document.createElement("div");pt.classList.add(m.classes.button),pt.classList.add(m.classes.elementThird),pt.innerHTML=fe,Be.onclick=function(){return X(1)},Qe.onclick=function(){return ce(1)},it.onclick=function(){return Pe(1)},ct.onclick=function(){return X(-1)},Lt.onclick=function(){return ce(-1)},pt.onclick=function(){return Pe(-1)};var at=document.createElement("div");at.classList.add(m.classes.button),at.classList.add(m.classes.elementHalf),at.classList.add(m.classes.backgroundSuccess),at.innerHTML=D,at.onclick=function(){ue(Ce,Q),W(),B?B(x):_&&_(x)};var Ee=document.createElement("div");Ee.classList.add(m.classes.button),Ee.classList.add(m.classes.elementHalf),Ee.classList.add(m.classes.backgroundError),Ee.innerHTML=P,Ee.onclick=function(){ue(Ce,Q),W(),G?G(x):L&&L(x)},ze.appendChild(Be),ze.appendChild(Qe),ze.appendChild(it),ze.appendChild(ye),ze.appendChild(_e),ze.appendChild(be),ze.appendChild(ct),ze.appendChild(Lt),ze.appendChild(pt),je.appendChild(ze),he.appendChild(je),he.appendChild(at),he.appendChild(Ee),he.listener=function(ve){z(ve)?at.click():J(ve)&&Ee.click()},oe(he,Q),se(he,Q)};s.default={alert:H,force:ie,confirm:ae,input:F,select:U,date:R,setOptions:v,hideAlerts:K}}])})}).call(n,l(0)(o))}])})}),Lu={};hy(Lu,{default:()=>xo});var my=Iu(Fu());gy(Lu,Iu(Fu()));var{default:Ou,...by}=my,xo=Ou!==void 0?Ou:by;Y();Y();var wo=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function wn(e,r,o,n){e.addEventListener?e.addEventListener(r,o,n):e.attachEvent&&e.attachEvent(`on${r}`,()=>{o(window.event)})}function Ti(e,r){let o=r.slice(0,r.length-1);for(let n=0;n<o.length;n++)o[n]=e[o[n].toLowerCase()];return o}function Ai(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");let r=e.split(","),o=r.lastIndexOf("");for(;o>=0;)r[o-1]+=",",r.splice(o,1),o=r.lastIndexOf("");return r}function ku(e,r){let o=e.length>=r.length?e:r,n=e.length>=r.length?r:e,l=!0;for(let u=0;u<o.length;u++)n.indexOf(o[u])===-1&&(l=!1);return l}Y();var Vr={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":wo?173:189,"=":wo?61:187,";":wo?59:186,"'":222,"[":219,"]":221,"\\":220},tr={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},To={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Et={16:!1,18:!1,17:!1,91:!1},ht={};for(let e=1;e<20;e++)Vr[`f${e}`]=111+e;var tt=[],Nu=!1,$u="all",Mu=[],An=e=>Vr[e.toLowerCase()]||tr[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),yy=e=>Object.keys(Vr).find(r=>Vr[r]===e),vy=e=>Object.keys(tr).find(r=>tr[r]===e);function ju(e){$u=e||"all"}function Tn(){return $u||"all"}function xy(){return tt.slice(0)}function wy(){return tt.map(e=>yy(e)||vy(e)||String.fromCharCode(e))}function Ty(){let e=[];return Object.keys(ht).forEach(r=>{ht[r].forEach(({key:o,scope:n,mods:l,shortcut:u})=>{e.push({scope:n,shortcut:u,mods:l,keys:o.split("+").map(p=>An(p))})})}),e}function Ay(e){let r=e.target||e.srcElement,{tagName:o}=r,n=!0;return(r.isContentEditable||(o==="INPUT"||o==="TEXTAREA"||o==="SELECT")&&!r.readOnly)&&(n=!1),n}function _y(e){return typeof e=="string"&&(e=An(e)),tt.indexOf(e)!==-1}function Ey(e,r){let o,n;e||(e=Tn());for(let l in ht)if(Object.prototype.hasOwnProperty.call(ht,l))for(o=ht[l],n=0;n<o.length;)o[n].scope===e?o.splice(n,1):n++;Tn()===e&&ju(r||"all")}function Dy(e){let r=e.keyCode||e.which||e.charCode,o=tt.indexOf(r);if(o>=0&&tt.splice(o,1),e.key&&e.key.toLowerCase()==="meta"&&tt.splice(0,tt.length),(r===93||r===224)&&(r=91),r in Et){Et[r]=!1;for(let n in tr)tr[n]===r&&(yr[n]=!1)}}function Uu(e,...r){if(typeof e>"u")Object.keys(ht).forEach(o=>delete ht[o]);else if(Array.isArray(e))e.forEach(o=>{o.key&&_i(o)});else if(typeof e=="object")e.key&&_i(e);else if(typeof e=="string"){let[o,n]=r;typeof o=="function"&&(n=o,o=""),_i({key:e,scope:o,method:n,splitKey:"+"})}}var _i=({key:e,scope:r,method:o,splitKey:n="+"})=>{Ai(e).forEach(u=>{let p=u.split(n),i=p.length,a=p[i-1],t=a==="*"?"*":An(a);if(!ht[t])return;r||(r=Tn());let c=i>1?Ti(tr,p):[];ht[t]=ht[t].filter(s=>!((o?s.method===o:!0)&&s.scope===r&&ku(s.mods,c)))})};function Ru(e,r,o,n){if(r.element!==n)return;let l;if(r.scope===o||r.scope==="all"){l=r.mods.length>0;for(let u in Et)Object.prototype.hasOwnProperty.call(Et,u)&&(!Et[u]&&r.mods.indexOf(+u)>-1||Et[u]&&r.mods.indexOf(+u)===-1)&&(l=!1);(r.mods.length===0&&!Et[16]&&!Et[18]&&!Et[17]&&!Et[91]||l||r.shortcut==="*")&&(r.keys=[],r.keys=r.keys.concat(tt),r.method(e,r)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function Bu(e,r){let o=ht["*"],n=e.keyCode||e.which||e.charCode;if(!yr.filter.call(this,e))return;if((n===93||n===224)&&(n=91),tt.indexOf(n)===-1&&n!==229&&tt.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(u=>{let p=To[u];e[u]&&tt.indexOf(p)===-1?tt.push(p):!e[u]&&tt.indexOf(p)>-1?tt.splice(tt.indexOf(p),1):u==="metaKey"&&e[u]&&tt.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(tt=tt.slice(tt.indexOf(p))))}),n in Et){Et[n]=!0;for(let u in tr)tr[u]===n&&(yr[u]=!0);if(!o)return}for(let u in Et)Object.prototype.hasOwnProperty.call(Et,u)&&(Et[u]=e[To[u]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(tt.indexOf(17)===-1&&tt.push(17),tt.indexOf(18)===-1&&tt.push(18),Et[17]=!0,Et[18]=!0);let l=Tn();if(o)for(let u=0;u<o.length;u++)o[u].scope===l&&(e.type==="keydown"&&o[u].keydown||e.type==="keyup"&&o[u].keyup)&&Ru(e,o[u],l,r);if(n in ht){for(let u=0;u<ht[n].length;u++)if((e.type==="keydown"&&ht[n][u].keydown||e.type==="keyup"&&ht[n][u].keyup)&&ht[n][u].key){let p=ht[n][u],{splitKey:i}=p,a=p.key.split(i),t=[];for(let c=0;c<a.length;c++)t.push(An(a[c]));t.sort().join("")===tt.sort().join("")&&Ru(e,p,l,r)}}}function Sy(e){return Mu.indexOf(e)>-1}function yr(e,r,o){tt=[];let n=Ai(e),l=[],u="all",p=document,i=0,a=!1,t=!0,c="+",s=!1,d=!1;for(o===void 0&&typeof r=="function"&&(o=r),Object.prototype.toString.call(r)==="[object Object]"&&(r.scope&&(u=r.scope),r.element&&(p=r.element),r.keyup&&(a=r.keyup),r.keydown!==void 0&&(t=r.keydown),r.capture!==void 0&&(s=r.capture),typeof r.splitKey=="string"&&(c=r.splitKey),r.single===!0&&(d=!0)),typeof r=="string"&&(u=r),d&&Uu(e,u);i<n.length;i++)e=n[i].split(c),l=[],e.length>1&&(l=Ti(tr,e)),e=e[e.length-1],e=e==="*"?"*":An(e),e in ht||(ht[e]=[]),ht[e].push({keyup:a,keydown:t,scope:u,mods:l,shortcut:n[i],method:o,key:n[i],splitKey:c,element:p});typeof p<"u"&&!Sy(p)&&window&&(Mu.push(p),wn(p,"keydown",f=>{Bu(f,p)},s),Nu||(Nu=!0,wn(window,"focus",()=>{tt=[]},s),wn(window,"click",()=>{tt=[]},!1)),wn(p,"keyup",f=>{Bu(f,p),Dy(f)},s))}function Py(e,r="all"){Object.keys(ht).forEach(o=>{ht[o].filter(l=>l.scope===r&&l.shortcut===e).forEach(l=>{l&&l.method&&l.method()})})}var Ei={getPressedKeyString:wy,setScope:ju,getScope:Tn,deleteScope:Ey,getPressedKeyCodes:xy,getAllKeyCodes:Ty,isPressed:_y,filter:Ay,trigger:Py,unbind:Uu,keyMap:Vr,modifier:tr,modifierMap:To};for(let e in Ei)Object.prototype.hasOwnProperty.call(Ei,e)&&(yr[e]=Ei[e]);if(typeof window<"u"){let e=window.hotkeys;yr.noConflict=r=>(r&&window.hotkeys===yr&&(window.hotkeys=e),yr),window.hotkeys=yr}Y();Y();Y();Y();var{entries:Xu,setPrototypeOf:qu,isFrozen:Oy,getPrototypeOf:Iy,getOwnPropertyDescriptor:Fy}=Object,{freeze:Nt,seal:nr,create:Ly}=Object,{apply:Ii,construct:Fi}=typeof Reflect<"u"&&Reflect;Ii||(Ii=function(e,r,o){return e.apply(r,o)});Nt||(Nt=function(e){return e});nr||(nr=function(e){return e});Fi||(Fi=function(e,r){return new e(...r)});var ky=Xt(Array.prototype.forEach),zu=Xt(Array.prototype.pop),_n=Xt(Array.prototype.push),Eo=Xt(String.prototype.toLowerCase),Di=Xt(String.prototype.toString),Ny=Xt(String.prototype.match),rr=Xt(String.prototype.replace),Ry=Xt(String.prototype.indexOf),By=Xt(String.prototype.trim),jt=Xt(RegExp.prototype.test),En=$y(TypeError);function Xt(e){return function(r){for(var o=arguments.length,n=new Array(o>1?o-1:0),l=1;l<o;l++)n[l-1]=arguments[l];return Ii(e,r,n)}}function $y(e){return function(){for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return Fi(e,o)}}function Ne(e,r,o){var n;o=(n=o)!==null&&n!==void 0?n:Eo,qu&&qu(e,null);let l=r.length;for(;l--;){let u=r[l];if(typeof u=="string"){let p=o(u);p!==u&&(Oy(r)||(r[l]=p),u=p)}e[u]=!0}return e}function Kr(e){let r=Ly(null);for(let[o,n]of Xu(e))r[o]=n;return r}function Ao(e,r){for(;e!==null;){let n=Fy(e,r);if(n){if(n.get)return Xt(n.get);if(typeof n.value=="function")return Xt(n.value)}e=Iy(e)}function o(n){return null}return o}var Gu=Nt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Si=Nt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Pi=Nt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),My=Nt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ci=Nt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),jy=Nt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Vu=Nt(["#text"]),Ku=Nt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Oi=Nt(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Hu=Nt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),_o=Nt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Uy=nr(/\{\{[\w\W]*|[\w\W]*\}\}/gm),qy=nr(/<%[\w\W]*|[\w\W]*%>/gm),zy=nr(/\${[\w\W]*}/gm),Gy=nr(/^data-[\-\w.\u00B7-\uFFFF]/),Vy=nr(/^aria-[\-\w]+$/),Yu=nr(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ky=nr(/^(?:\w+script|data):/i),Hy=nr(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ju=nr(/^html$/i),Wu=Object.freeze({__proto__:null,MUSTACHE_EXPR:Uy,ERB_EXPR:qy,TMPLIT_EXPR:zy,DATA_ATTR:Gy,ARIA_ATTR:Vy,IS_ALLOWED_URI:Yu,IS_SCRIPT_OR_DATA:Ky,ATTR_WHITESPACE:Hy,DOCTYPE_NAME:Ju}),Wy=()=>typeof window>"u"?null:window,Xy=function(e,r){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let o=null,n="data-tt-policy-suffix";r&&r.hasAttribute(n)&&(o=r.getAttribute(n));let l="dompurify"+(o?"#"+o:"");try{return e.createPolicy(l,{createHTML(u){return u},createScriptURL(u){return u}})}catch{return null}};function Zu(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wy(),r=O=>Zu(O);if(r.version="3.0.3",r.removed=[],!e||!e.document||e.document.nodeType!==9)return r.isSupported=!1,r;let o=e.document,n=o.currentScript,{document:l}=e,{DocumentFragment:u,HTMLTemplateElement:p,Node:i,Element:a,NodeFilter:t,NamedNodeMap:c=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:s,DOMParser:d,trustedTypes:f}=e,g=a.prototype,b=Ao(g,"cloneNode"),y=Ao(g,"nextSibling"),m=Ao(g,"childNodes"),v=Ao(g,"parentNode");if(typeof p=="function"){let O=l.createElement("template");O.content&&O.content.ownerDocument&&(l=O.content.ownerDocument)}let C,M="",{implementation:q,createNodeIterator:Z,createDocumentFragment:N,getElementsByTagName:k}=l,{importNode:z}=o,J={};r.isSupported=typeof Xu=="function"&&typeof v=="function"&&q&&q.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:oe,ERB_EXPR:ue,TMPLIT_EXPR:se,DATA_ATTR:W,ARIA_ATTR:K,IS_SCRIPT_OR_DATA:H,ATTR_WHITESPACE:ie}=Wu,{IS_ALLOWED_URI:ae}=Wu,F=null,U=Ne({},[...Gu,...Si,...Pi,...Ci,...Vu]),R=null,T=Ne({},[...Ku,...Oi,...Hu,..._o]),_=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),L=null,w=null,x=!0,S=!0,D=!1,A=!0,P=!1,B=!1,G=!1,ne=!1,Q=!1,fe=!1,ye=!1,_e=!0,be=!1,Le="user-content-",Je=!0,Ze=!1,te={},X=null,ce=Ne({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=null,he=Ne({},["audio","video","img","source","image","track"]),Ce=null,je=Ne({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ze="http://www.w3.org/1998/Math/MathML",Be="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml",it=Qe,ct=!1,Lt=null,pt=Ne({},[ze,Be,Qe],Di),at,Ee=["application/xhtml+xml","text/html"],ve="text/html",Ae,He=null,$e=l.createElement("form"),lt=function(O){return O instanceof RegExp||O instanceof Function},st=function(O){if(!(He&&He===O)){if((!O||typeof O!="object")&&(O={}),O=Kr(O),at=Ee.indexOf(O.PARSER_MEDIA_TYPE)===-1?at=ve:at=O.PARSER_MEDIA_TYPE,Ae=at==="application/xhtml+xml"?Di:Eo,F="ALLOWED_TAGS"in O?Ne({},O.ALLOWED_TAGS,Ae):U,R="ALLOWED_ATTR"in O?Ne({},O.ALLOWED_ATTR,Ae):T,Lt="ALLOWED_NAMESPACES"in O?Ne({},O.ALLOWED_NAMESPACES,Di):pt,Ce="ADD_URI_SAFE_ATTR"in O?Ne(Kr(je),O.ADD_URI_SAFE_ATTR,Ae):je,Pe="ADD_DATA_URI_TAGS"in O?Ne(Kr(he),O.ADD_DATA_URI_TAGS,Ae):he,X="FORBID_CONTENTS"in O?Ne({},O.FORBID_CONTENTS,Ae):ce,L="FORBID_TAGS"in O?Ne({},O.FORBID_TAGS,Ae):{},w="FORBID_ATTR"in O?Ne({},O.FORBID_ATTR,Ae):{},te="USE_PROFILES"in O?O.USE_PROFILES:!1,x=O.ALLOW_ARIA_ATTR!==!1,S=O.ALLOW_DATA_ATTR!==!1,D=O.ALLOW_UNKNOWN_PROTOCOLS||!1,A=O.ALLOW_SELF_CLOSE_IN_ATTR!==!1,P=O.SAFE_FOR_TEMPLATES||!1,B=O.WHOLE_DOCUMENT||!1,Q=O.RETURN_DOM||!1,fe=O.RETURN_DOM_FRAGMENT||!1,ye=O.RETURN_TRUSTED_TYPE||!1,ne=O.FORCE_BODY||!1,_e=O.SANITIZE_DOM!==!1,be=O.SANITIZE_NAMED_PROPS||!1,Je=O.KEEP_CONTENT!==!1,Ze=O.IN_PLACE||!1,ae=O.ALLOWED_URI_REGEXP||Yu,it=O.NAMESPACE||Qe,_=O.CUSTOM_ELEMENT_HANDLING||{},O.CUSTOM_ELEMENT_HANDLING&&lt(O.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_.tagNameCheck=O.CUSTOM_ELEMENT_HANDLING.tagNameCheck),O.CUSTOM_ELEMENT_HANDLING&&lt(O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_.attributeNameCheck=O.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),O.CUSTOM_ELEMENT_HANDLING&&typeof O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(_.allowCustomizedBuiltInElements=O.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),P&&(S=!1),fe&&(Q=!0),te&&(F=Ne({},[...Vu]),R=[],te.html===!0&&(Ne(F,Gu),Ne(R,Ku)),te.svg===!0&&(Ne(F,Si),Ne(R,Oi),Ne(R,_o)),te.svgFilters===!0&&(Ne(F,Pi),Ne(R,Oi),Ne(R,_o)),te.mathMl===!0&&(Ne(F,Ci),Ne(R,Hu),Ne(R,_o))),O.ADD_TAGS&&(F===U&&(F=Kr(F)),Ne(F,O.ADD_TAGS,Ae)),O.ADD_ATTR&&(R===T&&(R=Kr(R)),Ne(R,O.ADD_ATTR,Ae)),O.ADD_URI_SAFE_ATTR&&Ne(Ce,O.ADD_URI_SAFE_ATTR,Ae),O.FORBID_CONTENTS&&(X===ce&&(X=Kr(X)),Ne(X,O.FORBID_CONTENTS,Ae)),Je&&(F["#text"]=!0),B&&Ne(F,["html","head","body"]),F.table&&(Ne(F,["tbody"]),delete L.tbody),O.TRUSTED_TYPES_POLICY){if(typeof O.TRUSTED_TYPES_POLICY.createHTML!="function")throw En('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof O.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw En('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');C=O.TRUSTED_TYPES_POLICY,M=C.createHTML("")}else C===void 0&&(C=Xy(f,n)),C!==null&&typeof M=="string"&&(M=C.createHTML(""));Nt&&Nt(O),He=O}},Me=Ne({},["mi","mo","mn","ms","mtext"]),dt=Ne({},["foreignobject","desc","title","annotation-xml"]),ar=Ne({},["title","style","font","a","script"]),Bt=Ne({},Si);Ne(Bt,Pi),Ne(Bt,My);let Ur=Ne({},Ci);Ne(Ur,jy);let uo=function(O){let ge=v(O);(!ge||!ge.tagName)&&(ge={namespaceURI:it,tagName:"template"});let de=Eo(O.tagName),Ke=Eo(ge.tagName);return Lt[O.namespaceURI]?O.namespaceURI===Be?ge.namespaceURI===Qe?de==="svg":ge.namespaceURI===ze?de==="svg"&&(Ke==="annotation-xml"||Me[Ke]):!!Bt[de]:O.namespaceURI===ze?ge.namespaceURI===Qe?de==="math":ge.namespaceURI===Be?de==="math"&&dt[Ke]:!!Ur[de]:O.namespaceURI===Qe?ge.namespaceURI===Be&&!dt[Ke]||ge.namespaceURI===ze&&!Me[Ke]?!1:!Ur[de]&&(ar[de]||!Bt[de]):!!(at==="application/xhtml+xml"&&Lt[O.namespaceURI]):!1},dr=function(O){_n(r.removed,{element:O});try{O.parentNode.removeChild(O)}catch{O.remove()}},fr=function(O,ge){try{_n(r.removed,{attribute:ge.getAttributeNode(O),from:ge})}catch{_n(r.removed,{attribute:null,from:ge})}if(ge.removeAttribute(O),O==="is"&&!R[O])if(Q||fe)try{dr(ge)}catch{}else try{ge.setAttribute(O,"")}catch{}},hn=function(O){let ge,de;if(ne)O="<remove></remove>"+O;else{let wt=Ny(O,/^[\r\n\t ]+/);de=wt&&wt[0]}at==="application/xhtml+xml"&&it===Qe&&(O='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+O+"</body></html>");let Ke=C?C.createHTML(O):O;if(it===Qe)try{ge=new d().parseFromString(Ke,at)}catch{}if(!ge||!ge.documentElement){ge=q.createDocument(it,"template",null);try{ge.documentElement.innerHTML=ct?M:Ke}catch{}}let ft=ge.body||ge.documentElement;return O&&de&&ft.insertBefore(l.createTextNode(de),ft.childNodes[0]||null),it===Qe?k.call(ge,B?"html":"body")[0]:B?ge.documentElement:ft},gn=function(O){return Z.call(O.ownerDocument||O,O,t.SHOW_ELEMENT|t.SHOW_COMMENT|t.SHOW_TEXT,null,!1)},lo=function(O){return O instanceof s&&(typeof O.nodeName!="string"||typeof O.textContent!="string"||typeof O.removeChild!="function"||!(O.attributes instanceof c)||typeof O.removeAttribute!="function"||typeof O.setAttribute!="function"||typeof O.namespaceURI!="string"||typeof O.insertBefore!="function"||typeof O.hasChildNodes!="function")},Pr=function(O){return typeof i=="object"?O instanceof i:O&&typeof O=="object"&&typeof O.nodeType=="number"&&typeof O.nodeName=="string"},Ht=function(O,ge,de){J[O]&&ky(J[O],Ke=>{Ke.call(r,ge,de,He)})},mn=function(O){let ge;if(Ht("beforeSanitizeElements",O,null),lo(O))return dr(O),!0;let de=Ae(O.nodeName);if(Ht("uponSanitizeElement",O,{tagName:de,allowedTags:F}),O.hasChildNodes()&&!Pr(O.firstElementChild)&&(!Pr(O.content)||!Pr(O.content.firstElementChild))&&jt(/<[/\w]/g,O.innerHTML)&&jt(/<[/\w]/g,O.textContent))return dr(O),!0;if(!F[de]||L[de]){if(!L[de]&&yn(de)&&(_.tagNameCheck instanceof RegExp&&jt(_.tagNameCheck,de)||_.tagNameCheck instanceof Function&&_.tagNameCheck(de)))return!1;if(Je&&!X[de]){let Ke=v(O)||O.parentNode,ft=m(O)||O.childNodes;if(ft&&Ke){let wt=ft.length;for(let Pt=wt-1;Pt>=0;--Pt)Ke.insertBefore(b(ft[Pt],!0),y(O))}}return dr(O),!0}return O instanceof a&&!uo(O)||(de==="noscript"||de==="noembed")&&jt(/<\/no(script|embed)/i,O.innerHTML)?(dr(O),!0):(P&&O.nodeType===3&&(ge=O.textContent,ge=rr(ge,oe," "),ge=rr(ge,ue," "),ge=rr(ge,se," "),O.textContent!==ge&&(_n(r.removed,{element:O.cloneNode()}),O.textContent=ge)),Ht("afterSanitizeElements",O,null),!1)},bn=function(O,ge,de){if(_e&&(ge==="id"||ge==="name")&&(de in l||de in $e))return!1;if(!(S&&!w[ge]&&jt(W,ge))&&!(x&&jt(K,ge))){if(!R[ge]||w[ge]){if(!(yn(O)&&(_.tagNameCheck instanceof RegExp&&jt(_.tagNameCheck,O)||_.tagNameCheck instanceof Function&&_.tagNameCheck(O))&&(_.attributeNameCheck instanceof RegExp&&jt(_.attributeNameCheck,ge)||_.attributeNameCheck instanceof Function&&_.attributeNameCheck(ge))||ge==="is"&&_.allowCustomizedBuiltInElements&&(_.tagNameCheck instanceof RegExp&&jt(_.tagNameCheck,de)||_.tagNameCheck instanceof Function&&_.tagNameCheck(de))))return!1}else if(!Ce[ge]&&!jt(ae,rr(de,ie,""))&&!((ge==="src"||ge==="xlink:href"||ge==="href")&&O!=="script"&&Ry(de,"data:")===0&&Pe[O])&&!(D&&!jt(H,rr(de,ie,"")))&&de)return!1}return!0},yn=function(O){return O.indexOf("-")>0},vn=function(O){let ge,de,Ke,ft;Ht("beforeSanitizeAttributes",O,null);let{attributes:wt}=O;if(!wt)return;let Pt={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:R};for(ft=wt.length;ft--;){ge=wt[ft];let{name:mt,namespaceURI:mr}=ge;if(de=mt==="value"?ge.value:By(ge.value),Ke=Ae(mt),Pt.attrName=Ke,Pt.attrValue=de,Pt.keepAttr=!0,Pt.forceKeepAttr=void 0,Ht("uponSanitizeAttribute",O,Pt),de=Pt.attrValue,Pt.forceKeepAttr||(fr(mt,O),!Pt.keepAttr))continue;if(!A&&jt(/\/>/i,de)){fr(mt,O);continue}P&&(de=rr(de,oe," "),de=rr(de,ue," "),de=rr(de,se," "));let po=Ae(O.nodeName);if(bn(po,Ke,de)){if(be&&(Ke==="id"||Ke==="name")&&(fr(mt,O),de=Le+de),C&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!mr)switch(f.getAttributeType(po,Ke)){case"TrustedHTML":{de=C.createHTML(de);break}case"TrustedScriptURL":{de=C.createScriptURL(de);break}}try{mr?O.setAttributeNS(mr,mt,de):O.setAttribute(mt,de),zu(r.removed)}catch{}}}Ht("afterSanitizeAttributes",O,null)},co=function O(ge){let de,Ke=gn(ge);for(Ht("beforeSanitizeShadowDOM",ge,null);de=Ke.nextNode();)Ht("uponSanitizeShadowNode",de,null),!mn(de)&&(de.content instanceof u&&O(de.content),vn(de));Ht("afterSanitizeShadowDOM",ge,null)};return r.sanitize=function(O){let ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},de,Ke,ft,wt;if(ct=!O,ct&&(O="<!-->"),typeof O!="string"&&!Pr(O))if(typeof O.toString=="function"){if(O=O.toString(),typeof O!="string")throw En("dirty is not a string, aborting")}else throw En("toString is not a function");if(!r.isSupported)return O;if(G||st(ge),r.removed=[],typeof O=="string"&&(Ze=!1),Ze){if(O.nodeName){let mr=Ae(O.nodeName);if(!F[mr]||L[mr])throw En("root node is forbidden and cannot be sanitized in-place")}}else if(O instanceof i)de=hn("<!---->"),Ke=de.ownerDocument.importNode(O,!0),Ke.nodeType===1&&Ke.nodeName==="BODY"||Ke.nodeName==="HTML"?de=Ke:de.appendChild(Ke);else{if(!Q&&!P&&!B&&O.indexOf("<")===-1)return C&&ye?C.createHTML(O):O;if(de=hn(O),!de)return Q?null:ye?M:""}de&&ne&&dr(de.firstChild);let Pt=gn(Ze?O:de);for(;ft=Pt.nextNode();)mn(ft)||(ft.content instanceof u&&co(ft.content),vn(ft));if(Ze)return O;if(Q){if(fe)for(wt=N.call(de.ownerDocument);de.firstChild;)wt.appendChild(de.firstChild);else wt=de;return(R.shadowroot||R.shadowrootmod)&&(wt=z.call(o,wt,!0)),wt}let mt=B?de.outerHTML:de.innerHTML;return B&&F["!doctype"]&&de.ownerDocument&&de.ownerDocument.doctype&&de.ownerDocument.doctype.name&&jt(Ju,de.ownerDocument.doctype.name)&&(mt="<!DOCTYPE "+de.ownerDocument.doctype.name+`>
`+mt),P&&(mt=rr(mt,oe," "),mt=rr(mt,ue," "),mt=rr(mt,se," ")),C&&ye?C.createHTML(mt):mt},r.setConfig=function(O){st(O),G=!0},r.clearConfig=function(){He=null,G=!1},r.isValidAttribute=function(O,ge,de){He||st({});let Ke=Ae(O),ft=Ae(ge);return bn(Ke,ft,de)},r.addHook=function(O,ge){typeof ge=="function"&&(J[O]=J[O]||[],_n(J[O],ge))},r.removeHook=function(O){if(J[O])return zu(J[O])},r.removeHooks=function(O){J[O]&&(J[O]=[])},r.removeAllHooks=function(){J={}},r}var Qu=Zu();Y();Y();var Yy=Object.create,ki=Object.defineProperty,Jy=Object.getOwnPropertyDescriptor,Zy=Object.getOwnPropertyNames,Qy=Object.getPrototypeOf,e0=Object.prototype.hasOwnProperty,Ni=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),t0=(e,r)=>{for(var o in r)ki(e,o,{get:r[o],enumerable:!0})},Li=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of Zy(r))!e0.call(e,l)&&l!==o&&ki(e,l,{get:()=>r[l],enumerable:!(n=Jy(r,l))||n.enumerable});return e},r0=(e,r,o)=>(Li(e,r,"default"),o&&Li(o,r,"default")),tl=(e,r,o)=>(o=e!=null?Yy(Qy(e)):{},Li(r||!e||!e.__esModule?ki(o,"default",{value:e,enumerable:!0}):o,e)),n0=Ni((e,r)=>{function o(n,l){if(l&&l.documentElement)n=l,l=arguments[2];else if(!n||!n.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(l=l||{},this._doc=n,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!l.debug,this._maxElemsToParse=l.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=l.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=l.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(l.classesToPreserve||[]),this._keepClasses=!!l.keepClasses,this._serializer=l.serializer||function(u){return u.innerHTML},this._disableJSONLD=!!l.disableJSONLD,this._allowedVideoRegex=l.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let u=function(p){if(p.nodeType==p.TEXT_NODE)return`${p.nodeName} ("${p.textContent}")`;let i=Array.from(p.attributes||[],function(a){return`${a.name}="${a.value}"`}).join(" ");return`<${p.localName} ${i}>`};this.log=function(){if(typeof console<"u")Array.from(arguments,a=>a&&a.nodeType==this.ELEMENT_NODE?u(a):a).unshift("Reader: (Readability)");else if(typeof dump<"u"){var p=Array.prototype.map.call(arguments,function(i){return i&&i.nodeName?u(i):i}).join(" ");dump("Reader: (Readability) "+p+`
`)}}}else this.log=function(){}}o.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(n){this._fixRelativeUris(n),this._simplifyNestedElements(n),this._keepClasses||this._cleanClasses(n)},_removeNodes:function(n,l){if(this._docJSDOMParser&&n._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var u=n.length-1;u>=0;u--){var p=n[u],i=p.parentNode;i&&(!l||l.call(this,p,u,n))&&i.removeChild(p)}},_replaceNodeTags:function(n,l){if(this._docJSDOMParser&&n._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(let u of n)this._setNodeTag(u,l)},_forEachNode:function(n,l){Array.prototype.forEach.call(n,l,this)},_findNode:function(n,l){return Array.prototype.find.call(n,l,this)},_someNode:function(n,l){return Array.prototype.some.call(n,l,this)},_everyNode:function(n,l){return Array.prototype.every.call(n,l,this)},_concatNodeLists:function(){var n=Array.prototype.slice,l=n.call(arguments),u=l.map(function(p){return n.call(p)});return Array.prototype.concat.apply([],u)},_getAllNodesWithTag:function(n,l){return n.querySelectorAll?n.querySelectorAll(l.join(",")):[].concat.apply([],l.map(function(u){var p=n.getElementsByTagName(u);return Array.isArray(p)?p:Array.from(p)}))},_cleanClasses:function(n){var l=this._classesToPreserve,u=(n.getAttribute("class")||"").split(/\s+/).filter(function(p){return l.indexOf(p)!=-1}).join(" ");for(u?n.setAttribute("class",u):n.removeAttribute("class"),n=n.firstElementChild;n;n=n.nextElementSibling)this._cleanClasses(n)},_fixRelativeUris:function(n){var l=this._doc.baseURI,u=this._doc.documentURI;function p(t){if(l==u&&t.charAt(0)=="#")return t;try{return new URL(t,l).href}catch{}return t}var i=this._getAllNodesWithTag(n,["a"]);this._forEachNode(i,function(t){var c=t.getAttribute("href");if(c)if(c.indexOf("javascript:")===0)if(t.childNodes.length===1&&t.childNodes[0].nodeType===this.TEXT_NODE){var s=this._doc.createTextNode(t.textContent);t.parentNode.replaceChild(s,t)}else{for(var d=this._doc.createElement("span");t.firstChild;)d.appendChild(t.firstChild);t.parentNode.replaceChild(d,t)}else t.setAttribute("href",p(c))});var a=this._getAllNodesWithTag(n,["img","picture","figure","video","audio","source"]);this._forEachNode(a,function(t){var c=t.getAttribute("src"),s=t.getAttribute("poster"),d=t.getAttribute("srcset");if(c&&t.setAttribute("src",p(c)),s&&t.setAttribute("poster",p(s)),d){var f=d.replace(this.REGEXPS.srcsetUrl,function(g,b,y,m){return p(b)+(y||"")+m});t.setAttribute("srcset",f)}})},_simplifyNestedElements:function(n){for(var l=n;l;){if(l.parentNode&&["DIV","SECTION"].includes(l.tagName)&&!(l.id&&l.id.startsWith("readability"))){if(this._isElementWithoutContent(l)){l=this._removeAndGetNext(l);continue}else if(this._hasSingleTagInsideElement(l,"DIV")||this._hasSingleTagInsideElement(l,"SECTION")){for(var u=l.children[0],p=0;p<l.attributes.length;p++)u.setAttribute(l.attributes[p].name,l.attributes[p].value);l.parentNode.replaceChild(u,l),l=u;continue}}l=this._getNextNode(l)}},_getArticleTitle:function(){var n=this._doc,l="",u="";try{l=u=n.title.trim(),typeof l!="string"&&(l=u=this._getInnerText(n.getElementsByTagName("title")[0]))}catch{}var p=!1;function i(f){return f.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(l))p=/ [\\\/>»] /.test(l),l=u.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),i(l)<3&&(l=u.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(l.indexOf(": ")!==-1){var a=this._concatNodeLists(n.getElementsByTagName("h1"),n.getElementsByTagName("h2")),t=l.trim(),c=this._someNode(a,function(f){return f.textContent.trim()===t});c||(l=u.substring(u.lastIndexOf(":")+1),i(l)<3?l=u.substring(u.indexOf(":")+1):i(u.substr(0,u.indexOf(":")))>5&&(l=u))}else if(l.length>150||l.length<15){var s=n.getElementsByTagName("h1");s.length===1&&(l=this._getInnerText(s[0]))}l=l.trim().replace(this.REGEXPS.normalize," ");var d=i(l);return d<=4&&(!p||d!=i(u.replace(/[\|\-\\\/>»]+/g,""))-1)&&(l=u),l},_prepDocument:function(){var n=this._doc;this._removeNodes(this._getAllNodesWithTag(n,["style"])),n.body&&this._replaceBrs(n.body),this._replaceNodeTags(this._getAllNodesWithTag(n,["font"]),"SPAN")},_nextNode:function(n){for(var l=n;l&&l.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(l.textContent);)l=l.nextSibling;return l},_replaceBrs:function(n){this._forEachNode(this._getAllNodesWithTag(n,["br"]),function(l){for(var u=l.nextSibling,p=!1;(u=this._nextNode(u))&&u.tagName=="BR";){p=!0;var i=u.nextSibling;u.parentNode.removeChild(u),u=i}if(p){var a=this._doc.createElement("p");for(l.parentNode.replaceChild(a,l),u=a.nextSibling;u;){if(u.tagName=="BR"){var t=this._nextNode(u.nextSibling);if(t&&t.tagName=="BR")break}if(!this._isPhrasingContent(u))break;var c=u.nextSibling;a.appendChild(u),u=c}for(;a.lastChild&&this._isWhitespace(a.lastChild);)a.removeChild(a.lastChild);a.parentNode.tagName==="P"&&this._setNodeTag(a.parentNode,"DIV")}})},_setNodeTag:function(n,l){if(this.log("_setNodeTag",n,l),this._docJSDOMParser)return n.localName=l.toLowerCase(),n.tagName=l.toUpperCase(),n;for(var u=n.ownerDocument.createElement(l);n.firstChild;)u.appendChild(n.firstChild);n.parentNode.replaceChild(u,n),n.readability&&(u.readability=n.readability);for(var p=0;p<n.attributes.length;p++)try{u.setAttribute(n.attributes[p].name,n.attributes[p].value)}catch{}return u},_prepArticle:function(n){this._cleanStyles(n),this._markDataTables(n),this._fixLazyImages(n),this._cleanConditionally(n,"form"),this._cleanConditionally(n,"fieldset"),this._clean(n,"object"),this._clean(n,"embed"),this._clean(n,"footer"),this._clean(n,"link"),this._clean(n,"aside");var l=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(n.children,function(u){this._cleanMatchedNodes(u,function(p,i){return this.REGEXPS.shareElements.test(i)&&p.textContent.length<l})}),this._clean(n,"iframe"),this._clean(n,"input"),this._clean(n,"textarea"),this._clean(n,"select"),this._clean(n,"button"),this._cleanHeaders(n),this._cleanConditionally(n,"table"),this._cleanConditionally(n,"ul"),this._cleanConditionally(n,"div"),this._replaceNodeTags(this._getAllNodesWithTag(n,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(n,["p"]),function(u){var p=u.getElementsByTagName("img").length,i=u.getElementsByTagName("embed").length,a=u.getElementsByTagName("object").length,t=u.getElementsByTagName("iframe").length,c=p+i+a+t;return c===0&&!this._getInnerText(u,!1)}),this._forEachNode(this._getAllNodesWithTag(n,["br"]),function(u){var p=this._nextNode(u.nextSibling);p&&p.tagName=="P"&&u.parentNode.removeChild(u)}),this._forEachNode(this._getAllNodesWithTag(n,["table"]),function(u){var p=this._hasSingleTagInsideElement(u,"TBODY")?u.firstElementChild:u;if(this._hasSingleTagInsideElement(p,"TR")){var i=p.firstElementChild;if(this._hasSingleTagInsideElement(i,"TD")){var a=i.firstElementChild;a=this._setNodeTag(a,this._everyNode(a.childNodes,this._isPhrasingContent)?"P":"DIV"),u.parentNode.replaceChild(a,u)}}})},_initializeNode:function(n){switch(n.readability={contentScore:0},n.tagName){case"DIV":n.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":n.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":n.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":n.readability.contentScore-=5;break}n.readability.contentScore+=this._getClassWeight(n)},_removeAndGetNext:function(n){var l=this._getNextNode(n,!0);return n.parentNode.removeChild(n),l},_getNextNode:function(n,l){if(!l&&n.firstElementChild)return n.firstElementChild;if(n.nextElementSibling)return n.nextElementSibling;do n=n.parentNode;while(n&&!n.nextElementSibling);return n&&n.nextElementSibling},_textSimilarity:function(n,l){var u=n.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),p=l.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!u.length||!p.length)return 0;var i=p.filter(t=>!u.includes(t)),a=i.join(" ").length/p.join(" ").length;return 1-a},_checkByline:function(n,l){if(this._articleByline)return!1;if(n.getAttribute!==void 0)var u=n.getAttribute("rel"),p=n.getAttribute("itemprop");return(u==="author"||p&&p.indexOf("author")!==-1||this.REGEXPS.byline.test(l))&&this._isValidByline(n.textContent)?(this._articleByline=n.textContent.trim(),!0):!1},_getNodeAncestors:function(n,l){l=l||0;for(var u=0,p=[];n.parentNode&&(p.push(n.parentNode),!(l&&++u===l));)n=n.parentNode;return p},_grabArticle:function(n){this.log("**** grabArticle ****");var l=this._doc,u=n!==null;if(n=n||this._doc.body,!n)return this.log("No body found in document. Abort."),null;for(var p=n.innerHTML;;){this.log("Starting grabArticle loop");var i=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),a=[],t=this._doc.documentElement;let ne=!0;for(;t;){t.tagName==="HTML"&&(this._articleLang=t.getAttribute("lang"));var c=t.className+" "+t.id;if(!this._isProbablyVisible(t)){this.log("Removing hidden node - "+c),t=this._removeAndGetNext(t);continue}if(t.getAttribute("aria-modal")=="true"&&t.getAttribute("role")=="dialog"){t=this._removeAndGetNext(t);continue}if(this._checkByline(t,c)){t=this._removeAndGetNext(t);continue}if(ne&&this._headerDuplicatesTitle(t)){this.log("Removing header: ",t.textContent.trim(),this._articleTitle.trim()),ne=!1,t=this._removeAndGetNext(t);continue}if(i){if(this.REGEXPS.unlikelyCandidates.test(c)&&!this.REGEXPS.okMaybeItsACandidate.test(c)&&!this._hasAncestorTag(t,"table")&&!this._hasAncestorTag(t,"code")&&t.tagName!=="BODY"&&t.tagName!=="A"){this.log("Removing unlikely candidate - "+c),t=this._removeAndGetNext(t);continue}if(this.UNLIKELY_ROLES.includes(t.getAttribute("role"))){this.log("Removing content with role "+t.getAttribute("role")+" - "+c),t=this._removeAndGetNext(t);continue}}if((t.tagName==="DIV"||t.tagName==="SECTION"||t.tagName==="HEADER"||t.tagName==="H1"||t.tagName==="H2"||t.tagName==="H3"||t.tagName==="H4"||t.tagName==="H5"||t.tagName==="H6")&&this._isElementWithoutContent(t)){t=this._removeAndGetNext(t);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(t.tagName)!==-1&&a.push(t),t.tagName==="DIV"){for(var s=null,d=t.firstChild;d;){var f=d.nextSibling;if(this._isPhrasingContent(d))s!==null?s.appendChild(d):this._isWhitespace(d)||(s=l.createElement("p"),t.replaceChild(s,d),s.appendChild(d));else if(s!==null){for(;s.lastChild&&this._isWhitespace(s.lastChild);)s.removeChild(s.lastChild);s=null}d=f}if(this._hasSingleTagInsideElement(t,"P")&&this._getLinkDensity(t)<.25){var g=t.children[0];t.parentNode.replaceChild(g,t),t=g,a.push(t)}else this._hasChildBlockElement(t)||(t=this._setNodeTag(t,"P"),a.push(t))}t=this._getNextNode(t)}var b=[];this._forEachNode(a,function(Q){if(!(!Q.parentNode||typeof Q.parentNode.tagName>"u")){var fe=this._getInnerText(Q);if(!(fe.length<25)){var ye=this._getNodeAncestors(Q,5);if(ye.length!==0){var _e=0;_e+=1,_e+=fe.split(",").length,_e+=Math.min(Math.floor(fe.length/100),3),this._forEachNode(ye,function(be,Le){if(!(!be.tagName||!be.parentNode||typeof be.parentNode.tagName>"u")){if(typeof be.readability>"u"&&(this._initializeNode(be),b.push(be)),Le===0)var Je=1;else Le===1?Je=2:Je=Le*3;be.readability.contentScore+=_e/Je}})}}}});for(var y=[],m=0,v=b.length;m<v;m+=1){var C=b[m],M=C.readability.contentScore*(1-this._getLinkDensity(C));C.readability.contentScore=M,this.log("Candidate:",C,"with score "+M);for(var q=0;q<this._nbTopCandidates;q++){var Z=y[q];if(!Z||M>Z.readability.contentScore){y.splice(q,0,C),y.length>this._nbTopCandidates&&y.pop();break}}}var N=y[0]||null,k=!1,z;if(N===null||N.tagName==="BODY"){for(N=l.createElement("DIV"),k=!0;n.firstChild;)this.log("Moving child out:",n.firstChild),N.appendChild(n.firstChild);n.appendChild(N),this._initializeNode(N)}else if(N){for(var J=[],oe=1;oe<y.length;oe++)y[oe].readability.contentScore/N.readability.contentScore>=.75&&J.push(this._getNodeAncestors(y[oe]));var ue=3;if(J.length>=ue)for(z=N.parentNode;z.tagName!=="BODY";){for(var se=0,W=0;W<J.length&&se<ue;W++)se+=Number(J[W].includes(z));if(se>=ue){N=z;break}z=z.parentNode}N.readability||this._initializeNode(N),z=N.parentNode;for(var K=N.readability.contentScore,H=K/3;z.tagName!=="BODY";){if(!z.readability){z=z.parentNode;continue}var ie=z.readability.contentScore;if(ie<H)break;if(ie>K){N=z;break}K=z.readability.contentScore,z=z.parentNode}for(z=N.parentNode;z.tagName!="BODY"&&z.children.length==1;)N=z,z=N.parentNode;N.readability||this._initializeNode(N)}var ae=l.createElement("DIV");u&&(ae.id="readability-content");var F=Math.max(10,N.readability.contentScore*.2);z=N.parentNode;for(var U=z.children,R=0,T=U.length;R<T;R++){var _=U[R],L=!1;if(this.log("Looking at sibling node:",_,_.readability?"with score "+_.readability.contentScore:""),this.log("Sibling has score",_.readability?_.readability.contentScore:"Unknown"),_===N)L=!0;else{var w=0;if(_.className===N.className&&N.className!==""&&(w+=N.readability.contentScore*.2),_.readability&&_.readability.contentScore+w>=F)L=!0;else if(_.nodeName==="P"){var x=this._getLinkDensity(_),S=this._getInnerText(_),D=S.length;(D>80&&x<.25||D<80&&D>0&&x===0&&S.search(/\.( |$)/)!==-1)&&(L=!0)}}L&&(this.log("Appending node:",_),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(_.nodeName)===-1&&(this.log("Altering sibling:",_,"to div."),_=this._setNodeTag(_,"DIV")),ae.appendChild(_),U=z.children,R-=1,T-=1)}if(this._debug&&this.log("Article content pre-prep: "+ae.innerHTML),this._prepArticle(ae),this._debug&&this.log("Article content post-prep: "+ae.innerHTML),k)N.id="readability-page-1",N.className="page";else{var A=l.createElement("DIV");for(A.id="readability-page-1",A.className="page";ae.firstChild;)A.appendChild(ae.firstChild);ae.appendChild(A)}this._debug&&this.log("Article content after paging: "+ae.innerHTML);var P=!0,B=this._getInnerText(ae,!0).length;if(B<this._charThreshold)if(P=!1,n.innerHTML=p,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:ae,textLength:B});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:ae,textLength:B});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:ae,textLength:B});else{if(this._attempts.push({articleContent:ae,textLength:B}),this._attempts.sort(function(Q,fe){return fe.textLength-Q.textLength}),!this._attempts[0].textLength)return null;ae=this._attempts[0].articleContent,P=!0}if(P){var G=[z,N].concat(this._getNodeAncestors(z));return this._someNode(G,function(Q){if(!Q.tagName)return!1;var fe=Q.getAttribute("dir");return fe?(this._articleDir=fe,!0):!1}),ae}}},_isValidByline:function(n){return typeof n=="string"||n instanceof String?(n=n.trim(),n.length>0&&n.length<100):!1},_unescapeHtmlEntities:function(n){if(!n)return n;var l=this.HTML_ESCAPE_MAP;return n.replace(/&(quot|amp|apos|lt|gt);/g,function(u,p){return l[p]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(u,p,i){var a=parseInt(p||i,p?16:10);return String.fromCharCode(a)})},_getJSONLD:function(n){var l=this._getAllNodesWithTag(n,["script"]),u;return this._forEachNode(l,function(p){if(!u&&p.getAttribute("type")==="application/ld+json")try{var i=p.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),a=JSON.parse(i);if(!a["@context"]||!a["@context"].match(/^https?\:\/\/schema\.org$/)||(!a["@type"]&&Array.isArray(a["@graph"])&&(a=a["@graph"].find(function(d){return(d["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!a||!a["@type"]||!a["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(u={},typeof a.name=="string"&&typeof a.headline=="string"&&a.name!==a.headline){var t=this._getArticleTitle(),c=this._textSimilarity(a.name,t)>.75,s=this._textSimilarity(a.headline,t)>.75;s&&!c?u.title=a.headline:u.title=a.name}else typeof a.name=="string"?u.title=a.name.trim():typeof a.headline=="string"&&(u.title=a.headline.trim());a.author&&(typeof a.author.name=="string"?u.byline=a.author.name.trim():Array.isArray(a.author)&&a.author[0]&&typeof a.author[0].name=="string"&&(u.byline=a.author.filter(function(d){return d&&typeof d.name=="string"}).map(function(d){return d.name.trim()}).join(", "))),typeof a.description=="string"&&(u.excerpt=a.description.trim()),a.publisher&&typeof a.publisher.name=="string"&&(u.siteName=a.publisher.name.trim());return}catch(d){this.log(d.message)}}),u||{}},_getArticleMetadata:function(n){var l={},u={},p=this._doc.getElementsByTagName("meta"),i=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,a=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(p,function(t){var c=t.getAttribute("name"),s=t.getAttribute("property"),d=t.getAttribute("content");if(d){var f=null,g=null;s&&(f=s.match(i),f&&(g=f[0].toLowerCase().replace(/\s/g,""),u[g]=d.trim())),!f&&c&&a.test(c)&&(g=c,d&&(g=g.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),u[g]=d.trim()))}}),l.title=n.title||u["dc:title"]||u["dcterm:title"]||u["og:title"]||u["weibo:article:title"]||u["weibo:webpage:title"]||u.title||u["twitter:title"],l.title||(l.title=this._getArticleTitle()),l.byline=n.byline||u["dc:creator"]||u["dcterm:creator"]||u.author,l.excerpt=n.excerpt||u["dc:description"]||u["dcterm:description"]||u["og:description"]||u["weibo:article:description"]||u["weibo:webpage:description"]||u.description||u["twitter:description"],l.siteName=n.siteName||u["og:site_name"],l.title=this._unescapeHtmlEntities(l.title),l.byline=this._unescapeHtmlEntities(l.byline),l.excerpt=this._unescapeHtmlEntities(l.excerpt),l.siteName=this._unescapeHtmlEntities(l.siteName),l},_isSingleImage:function(n){return n.tagName==="IMG"?!0:n.children.length!==1||n.textContent.trim()!==""?!1:this._isSingleImage(n.children[0])},_unwrapNoscriptImages:function(n){var l=Array.from(n.getElementsByTagName("img"));this._forEachNode(l,function(p){for(var i=0;i<p.attributes.length;i++){var a=p.attributes[i];switch(a.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(a.value))return}p.parentNode.removeChild(p)});var u=Array.from(n.getElementsByTagName("noscript"));this._forEachNode(u,function(p){var i=n.createElement("div");if(i.innerHTML=p.innerHTML,!!this._isSingleImage(i)){var a=p.previousElementSibling;if(a&&this._isSingleImage(a)){var t=a;t.tagName!=="IMG"&&(t=a.getElementsByTagName("img")[0]);for(var c=i.getElementsByTagName("img")[0],s=0;s<t.attributes.length;s++){var d=t.attributes[s];if(d.value!==""&&(d.name==="src"||d.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(d.value))){if(c.getAttribute(d.name)===d.value)continue;var f=d.name;c.hasAttribute(f)&&(f="data-old-"+f),c.setAttribute(f,d.value)}}p.parentNode.replaceChild(i.firstElementChild,a)}}})},_removeScripts:function(n){this._removeNodes(this._getAllNodesWithTag(n,["script","noscript"]))},_hasSingleTagInsideElement:function(n,l){return n.children.length!=1||n.children[0].tagName!==l?!1:!this._someNode(n.childNodes,function(u){return u.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(u.textContent)})},_isElementWithoutContent:function(n){return n.nodeType===this.ELEMENT_NODE&&n.textContent.trim().length==0&&(n.children.length==0||n.children.length==n.getElementsByTagName("br").length+n.getElementsByTagName("hr").length)},_hasChildBlockElement:function(n){return this._someNode(n.childNodes,function(l){return this.DIV_TO_P_ELEMS.has(l.tagName)||this._hasChildBlockElement(l)})},_isPhrasingContent:function(n){return n.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(n.tagName)!==-1||(n.tagName==="A"||n.tagName==="DEL"||n.tagName==="INS")&&this._everyNode(n.childNodes,this._isPhrasingContent)},_isWhitespace:function(n){return n.nodeType===this.TEXT_NODE&&n.textContent.trim().length===0||n.nodeType===this.ELEMENT_NODE&&n.tagName==="BR"},_getInnerText:function(n,l){l=typeof l>"u"?!0:l;var u=n.textContent.trim();return l?u.replace(this.REGEXPS.normalize," "):u},_getCharCount:function(n,l){return l=l||",",this._getInnerText(n).split(l).length-1},_cleanStyles:function(n){if(!(!n||n.tagName.toLowerCase()==="svg")){for(var l=0;l<this.PRESENTATIONAL_ATTRIBUTES.length;l++)n.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[l]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(n.tagName)!==-1&&(n.removeAttribute("width"),n.removeAttribute("height"));for(var u=n.firstElementChild;u!==null;)this._cleanStyles(u),u=u.nextElementSibling}},_getLinkDensity:function(n){var l=this._getInnerText(n).length;if(l===0)return 0;var u=0;return this._forEachNode(n.getElementsByTagName("a"),function(p){var i=p.getAttribute("href"),a=i&&this.REGEXPS.hashUrl.test(i)?.3:1;u+=this._getInnerText(p).length*a}),u/l},_getClassWeight:function(n){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var l=0;return typeof n.className=="string"&&n.className!==""&&(this.REGEXPS.negative.test(n.className)&&(l-=25),this.REGEXPS.positive.test(n.className)&&(l+=25)),typeof n.id=="string"&&n.id!==""&&(this.REGEXPS.negative.test(n.id)&&(l-=25),this.REGEXPS.positive.test(n.id)&&(l+=25)),l},_clean:function(n,l){var u=["object","embed","iframe"].indexOf(l)!==-1;this._removeNodes(this._getAllNodesWithTag(n,[l]),function(p){if(u){for(var i=0;i<p.attributes.length;i++)if(this._allowedVideoRegex.test(p.attributes[i].value))return!1;if(p.tagName==="object"&&this._allowedVideoRegex.test(p.innerHTML))return!1}return!0})},_hasAncestorTag:function(n,l,u,p){u=u||3,l=l.toUpperCase();for(var i=0;n.parentNode;){if(u>0&&i>u)return!1;if(n.parentNode.tagName===l&&(!p||p(n.parentNode)))return!0;n=n.parentNode,i++}return!1},_getRowAndColumnCount:function(n){for(var l=0,u=0,p=n.getElementsByTagName("tr"),i=0;i<p.length;i++){var a=p[i].getAttribute("rowspan")||0;a&&(a=parseInt(a,10)),l+=a||1;for(var t=0,c=p[i].getElementsByTagName("td"),s=0;s<c.length;s++){var d=c[s].getAttribute("colspan")||0;d&&(d=parseInt(d,10)),t+=d||1}u=Math.max(u,t)}return{rows:l,columns:u}},_markDataTables:function(n){for(var l=n.getElementsByTagName("table"),u=0;u<l.length;u++){var p=l[u],i=p.getAttribute("role");if(i=="presentation"){p._readabilityDataTable=!1;continue}var a=p.getAttribute("datatable");if(a=="0"){p._readabilityDataTable=!1;continue}var t=p.getAttribute("summary");if(t){p._readabilityDataTable=!0;continue}var c=p.getElementsByTagName("caption")[0];if(c&&c.childNodes.length>0){p._readabilityDataTable=!0;continue}var s=["col","colgroup","tfoot","thead","th"],d=function(g){return!!p.getElementsByTagName(g)[0]};if(s.some(d)){this.log("Data table because found data-y descendant"),p._readabilityDataTable=!0;continue}if(p.getElementsByTagName("table")[0]){p._readabilityDataTable=!1;continue}var f=this._getRowAndColumnCount(p);if(f.rows>=10||f.columns>4){p._readabilityDataTable=!0;continue}p._readabilityDataTable=f.rows*f.columns>10}},_fixLazyImages:function(n){this._forEachNode(this._getAllNodesWithTag(n,["img","picture","figure"]),function(l){if(l.src&&this.REGEXPS.b64DataUrl.test(l.src)){var u=this.REGEXPS.b64DataUrl.exec(l.src);if(u[1]==="image/svg+xml")return;for(var p=!1,i=0;i<l.attributes.length;i++){var a=l.attributes[i];if(a.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(a.value)){p=!0;break}}if(p){var t=l.src.search(/base64\s*/i)+7,c=l.src.length-t;c<133&&l.removeAttribute("src")}}if(!((l.src||l.srcset&&l.srcset!="null")&&l.className.toLowerCase().indexOf("lazy")===-1)){for(var s=0;s<l.attributes.length;s++)if(a=l.attributes[s],!(a.name==="src"||a.name==="srcset"||a.name==="alt")){var d=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(a.value)?d="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(a.value)&&(d="src"),d){if(l.tagName==="IMG"||l.tagName==="PICTURE")l.setAttribute(d,a.value);else if(l.tagName==="FIGURE"&&!this._getAllNodesWithTag(l,["img","picture"]).length){var f=this._doc.createElement("img");f.setAttribute(d,a.value),l.appendChild(f)}}}}})},_getTextDensity:function(n,l){var u=this._getInnerText(n,!0).length;if(u===0)return 0;var p=0,i=this._getAllNodesWithTag(n,l);return this._forEachNode(i,a=>p+=this._getInnerText(a,!0).length),p/u},_cleanConditionally:function(n,l){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(n,[l]),function(u){var p=function(z){return z._readabilityDataTable},i=l==="ul"||l==="ol";if(!i){var a=0,t=this._getAllNodesWithTag(u,["ul","ol"]);this._forEachNode(t,z=>a+=this._getInnerText(z).length),i=a/this._getInnerText(u).length>.9}if(l==="table"&&p(u)||this._hasAncestorTag(u,"table",-1,p)||this._hasAncestorTag(u,"code"))return!1;var c=this._getClassWeight(u);this.log("Cleaning Conditionally",u);var s=0;if(c+s<0)return!0;if(this._getCharCount(u,",")<10){for(var d=u.getElementsByTagName("p").length,f=u.getElementsByTagName("img").length,g=u.getElementsByTagName("li").length-100,b=u.getElementsByTagName("input").length,y=this._getTextDensity(u,["h1","h2","h3","h4","h5","h6"]),m=0,v=this._getAllNodesWithTag(u,["object","embed","iframe"]),C=0;C<v.length;C++){for(var M=0;M<v[C].attributes.length;M++)if(this._allowedVideoRegex.test(v[C].attributes[M].value))return!1;if(v[C].tagName==="object"&&this._allowedVideoRegex.test(v[C].innerHTML))return!1;m++}var q=this._getLinkDensity(u),Z=this._getInnerText(u).length,N=f>1&&d/f<.5&&!this._hasAncestorTag(u,"figure")||!i&&g>d||b>Math.floor(d/3)||!i&&y<.9&&Z<25&&(f===0||f>2)&&!this._hasAncestorTag(u,"figure")||!i&&c<25&&q>.2||c>=25&&q>.5||m===1&&Z<75||m>1;if(i&&N){for(var k=0;k<u.children.length;k++)if(u.children[k].children.length>1)return N;let z=u.getElementsByTagName("li").length;if(f==z)return!1}return N}return!1})},_cleanMatchedNodes:function(n,l){for(var u=this._getNextNode(n,!0),p=this._getNextNode(n);p&&p!=u;)l.call(this,p,p.className+" "+p.id)?p=this._removeAndGetNext(p):p=this._getNextNode(p)},_cleanHeaders:function(n){let l=this._getAllNodesWithTag(n,["h1","h2"]);this._removeNodes(l,function(u){let p=this._getClassWeight(u)<0;return p&&this.log("Removing header with low class weight:",u),p})},_headerDuplicatesTitle:function(n){if(n.tagName!="H1"&&n.tagName!="H2")return!1;var l=this._getInnerText(n,!1);return this.log("Evaluating similarity of header:",l,this._articleTitle),this._textSimilarity(this._articleTitle,l)>.75},_flagIsActive:function(n){return(this._flags&n)>0},_removeFlag:function(n){this._flags=this._flags&~n},_isProbablyVisible:function(n){return(!n.style||n.style.display!="none")&&!n.hasAttribute("hidden")&&(!n.hasAttribute("aria-hidden")||n.getAttribute("aria-hidden")!="true"||n.className&&n.className.indexOf&&n.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var n=this._doc.getElementsByTagName("*").length;if(n>this._maxElemsToParse)throw new Error("Aborting parsing document; "+n+" elements found")}this._unwrapNoscriptImages(this._doc);var l=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var u=this._getArticleMetadata(l);this._articleTitle=u.title;var p=this._grabArticle();if(!p)return null;if(this.log("Grabbed: "+p.innerHTML),this._postProcessContent(p),!u.excerpt){var i=p.getElementsByTagName("p");i.length>0&&(u.excerpt=i[0].textContent.trim())}var a=p.textContent;return{title:this._articleTitle,byline:u.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(p),textContent:a,length:a.length,excerpt:u.excerpt,siteName:u.siteName||this._articleSiteName}}},typeof r=="object"&&(r.exports=o)}),o0=Ni((e,r)=>{var o={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function n(u){return(!u.style||u.style.display!="none")&&!u.hasAttribute("hidden")&&(!u.hasAttribute("aria-hidden")||u.getAttribute("aria-hidden")!="true"||u.className&&u.className.indexOf&&u.className.indexOf("fallback-image")!==-1)}function l(u,p={}){typeof p=="function"&&(p={visibilityChecker:p});var i={minScore:20,minContentLength:140,visibilityChecker:n};p=Object.assign(i,p);var a=u.querySelectorAll("p, pre, article"),t=u.querySelectorAll("div > br");if(t.length){var c=new Set(a);[].forEach.call(t,function(d){c.add(d.parentNode)}),a=Array.from(c)}var s=0;return[].some.call(a,function(d){if(!p.visibilityChecker(d))return!1;var f=d.className+" "+d.id;if(o.unlikelyCandidates.test(f)&&!o.okMaybeItsACandidate.test(f)||d.matches("li p"))return!1;var g=d.textContent.trim().length;return g<p.minContentLength?!1:(s+=Math.sqrt(g-p.minContentLength),s>p.minScore)})}typeof r=="object"&&(r.exports=l)}),rl=Ni((e,r)=>{var o=n0(),n=o0();r.exports={Readability:o,isProbablyReaderable:n}}),nl={};t0(nl,{Readability:()=>il,default:()=>sl,isProbablyReaderable:()=>al});var ol=tl(rl());r0(nl,tl(rl()));var{Readability:il,isProbablyReaderable:al}=ol,{default:el,...i0}=ol,sl=el!==void 0?el:i0;var LT=xo.alert;Y();Y();Y();Y();function Hr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():xe}var ul=Hr();function Do(){return ul.PROD==="1"}function Ri(){return ul.PROD_API==="1"}var XT=Hr().PROD==="1",Dn=Hr().PROD!=="1";var we="immersiveTranslate",Ir="Immersive Translate",xt="immersive-translate",ll="imt";var sr="immersivetranslate.com",a0=`https://config.${sr}/`,eA=`https://app.${sr}/`,Te=Do()||Ri()?`https://${sr}/`:`https://test.${sr}/`,So=`https://dash.${sr}/`,tA=Do()||Ri()?`https://api2.${sr}/`:`https://test-api2.${sr}/`,cl=Te+"accounts/login?from=plugin",pl=Te+"profile/",Wr=Te+"auth/pricing/",Xr=Te+"pricing/";var dl=`https://github.com/${xt}/${xt}/`,rA=`https://s.${sr}/`,nA=`https://onboarding.${sr}/`;var oA=we+"DeeplGlobalState",iA=we+"BingGlobalState",aA=we+"YandexGlobalState",sA=we+"BaiduQianfanGlobalConfigStorageKey",uA=we+"SiliconCloudGlobalConfigStorageKey",lA=we+"ZhipuGlobalConfigStorageKey";var cA=we+"GoogleAccessToken",pA=we+"AuthFlow",dA=xt+"-config-latest.json",fA=we+"AuthState",hA=we+"IframeMessage",gA=we+"WaitForRateLimit",mA=we+"DocumentMessageAsk",bA=we+"DocumentMessageTellThirdParty",yA=we+"showError",vA=we+"showModal",xA=we+"showToast",wA=we+"DocumentMessageThirdPartyTell",TA=we+"DocumentMessageEventUpload",AA=we+"DocumentMessageTypeStopJsSDK",_A=we+"DocumentMessageHandler",EA=we+"DocumentSetFloatBallActive",DA=`${we}Share`,SA=`${we}ShowFloatBallGuide`,PA=we+"DocumentMessageTempEnableSubtitleChanged",CA=`${we}ToggleMouseHoverTranslateDirectly`,OA=`${we}ReqDraft`,IA=`${we}ResDraft`,FA=`${we}Container`,LA=`${we}SpecifiedContainer`;var kA=`${we}PageTranslatedStatus`,NA=`${we}MangaTranslatedStatus`,RA=`${we}PageUrlChanged`,BA=`${we}ReceiveCommand`,$A=we+"LastUseMouseHoverTime",MA=we+"LastUseInputTime",jA=we+"LastUseManualTranslatePageTime",UA=`${we}PopupReceiveMessage`,qA=we+"DocumentMessageEventTogglePopup",zA=`${a0}default_config.json`,GA=`${we}Mark`,VA=`${we}Root`,KA=`${we}Walked`,HA=`data-${xt}-walked`,WA=`${we}Paragraph`,XA=`data-${xt}-paragraph`,YA=`data-${xt}-translation-element-mark`,JA=`${we}TranslationElementMark`,ZA=`${we}TranslatedMark`,QA=`${xt}-input-injected-css`,e_=`${we}LoadingId`,t_=`data-${xt}-loading-id`,r_=`${we}ErrorId`,n_=`data-${xt}-error-id`,o_=`${we}AtomicBlockMark`,i_=`${we}ExcludeMark`,a_=`data-${xt}-exclude-mark`,s_=`${we}StayOriginalMark`,u_=`${we}PreWhitespaceMark`,l_=`${we}InlineMark`,c_=`${we}BlockMark`,p_=`${we}Left`,d_=`${we}Right`,f_=`${we}Width`,h_=`${we}Height`,g_=`${we}Top`,m_=`${we}FontSize`;var b_=`${we}GlobalStyleMark`,fl=["@","#"];var y_=`${xt}-target-wrapper`,v_=`${xt}-pdf-target-container`,x_=`${xt}-target-inner`,w_=`${xt}-source-wrapper`,T_=`${xt}-target-translation-block-wrapper`,A_=`${xt}-root-translation-theme`,__=`${we}RootTranslationTheme`,E_=`${xt}-target-translation-vertical-block-wrapper`,D_=`${xt}-target-translation-pdf-block-wrapper`,S_=`${xt}-target-translation-pre-whitespace`,P_=`${xt}-target-translation-inline-wrapper`;var C_=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/",So,So+"auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","http://192.168.31.51:8000/dist/userscript/options/","http://192.168.1.72:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","http://192.168.31.51:8000/options/","http://192.168.1.72:8000/options/"];var O_=Te+"docs/communities/",I_=dl+"issues/1809",F_=dl+"issues/1179",L_={type:we+"ChildFrameToRootFrameIdentifier"};var k_=Do()?So+"#general":"http://localhost:8000/dist/userscript/options/#general";var s0=So+"#general",N_=Te+"accounts/login?from=plugin&return_url="+encodeURIComponent(s0),R_=cl+"&utm_source=extension&utm_medium=extension&utm_campaign=error_modal",B_=cl+"&utm_source=extension&utm_medium=extension&utm_campaign=manga_guide",u0=Te+"download/",l0=Te+"topup?type=open_ai&",c0=Te+"topup?type=deepl&",$_=Te+"topup?type=comics&",M_=Xr+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",j_=Xr+"?utm_source=extension&utm_medium=extension&utm_campaign=manga_guide",U_=u0+"?utm_source=extension&utm_medium=extension&utm_campaign=options_nav",q_=Xr+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",z_=Xr+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",G_=Xr+"?utm_source=extension&utm_medium=extension&utm_campaign=float_ball",V_=pl+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",K_=Wr+"?utm_source=extension&utm_medium=extension&utm_campaign=subtitle_download",H_=l0+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",W_=c0+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",X_=Te+"topup?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Y_=Xr+"?utm_source=extension&utm_medium=extension&utm_campaign=option_sync_config",J_=pl+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true",Z_=Wr+"?utm_source=extension&utm_medium=extension&utm_campaign=manga_intro",Q_=Wr+"?utm_source=extension&utm_medium=extension&utm_campaign=image_intro",eE=Wr+"?utm_source=extension&utm_medium=extension&utm_campaign=image_client",tE=Wr+"?utm_source=extension&utm_medium=extension&utm_campaign=yt_ai_asr",rE=Wr+"?utm_source=extension&utm_medium=extension&utm_campaign=",nE=Te+"docs/usage/",oE=Te+"docs/communities/",Sn=Hr().TRANSLATE_FILE_URL,iE=Sn+"?utm_source=extension&utm_medium=extension&utm_campaign=options_nav",aE=Sn+"?utm_source=extension&utm_medium=extension&utm_campaign=float_ball",sE=`${Sn}download-subtitle/`,uE=`${Sn}pdf-pro/`,lE=`${Sn}text/`;var cE=`https://analytics.${sr}/collect`,pE=`${Te}activities/components/image-pro`;var dE=`[${ll}-ctx-divider]`,p0=`${ll}_context_preview`;var Yr=console,Bi=class{#e=performance.now();reset(){this.#e=performance.now()}stop(r){let o=performance.now(),n=Math.round(o-this.#e),l=Wt.green;n>1e4?l=Wt.red:n>1e3&&(l=Wt.yellow),Yr.debug(Wt.dim(Ir+" TIMING:"),r,"in",l(n+"ms")),this.#e=o}},$i=class{#e=1;get level(){return this.#e}setLevel(r){switch(r){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...r){this.#e<=0&&Yr.log(Wt.dim(Ir+" DEBUG:"),...r)}v(...r){this.#e<=0}info(...r){this.#e<=1&&Yr.log(Wt.green(Ir+" INFO:"),...r)}l(...r){this.#e<=1}warn(...r){this.#e<=2&&Yr.warn(Wt.yellow(Ir+" WARN:"),...r)}error(...r){this.#e<=3&&Yr.error(Wt.red(Ir+" ERROR:"),...r)}fatal(...r){this.#e<=4&&Yr.error(Wt.red(Ir+" FATAL:"),...r)}timing(){return this.level===0?new Bi:{reset:()=>{},stop:()=>{}}}},Pn=new $i;Y();Y();Y();Y();Y();var Jr=typeof Reflect=="object"?Reflect:null,hl=Jr&&typeof Jr.apply=="function"?Jr.apply:function(e,r,o){return Function.prototype.apply.call(e,r,o)},Po;Jr&&typeof Jr.ownKeys=="function"?Po=Jr.ownKeys:Object.getOwnPropertySymbols?Po=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Po=function(e){return Object.getOwnPropertyNames(e)};var vl=Number.isNaN||function(e){return e!==e};function et(){xl.call(this)}et.EventEmitter=et,et.prototype._events=void 0,et.prototype._eventsCount=0,et.prototype._maxListeners=void 0;var gl=10;function Co(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(et,"defaultMaxListeners",{enumerable:!0,get:function(){return gl},set:function(e){if(typeof e!="number"||e<0||vl(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");gl=e}});function xl(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}et.init=xl,et.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||vl(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function wl(e){return e._maxListeners===void 0?et.defaultMaxListeners:e._maxListeners}et.prototype.getMaxListeners=function(){return wl(this)},et.prototype.emit=function(e){for(var r=[],o=1;o<arguments.length;o++)r.push(arguments[o]);var n=e==="error",l=this._events;if(l!==void 0)n=n&&l.error===void 0;else if(!n)return!1;if(n){var u;if(r.length>0&&(u=r[0]),u instanceof Error)throw u;var p=new Error("Unhandled error."+(u?" ("+u.message+")":""));throw p.context=u,p}var i=l[e];if(i===void 0)return!1;if(typeof i=="function")hl(i,this,r);else for(var a=i.length,t=Tl(i,a),o=0;o<a;++o)hl(t[o],this,r);return!0};function ml(e,r,o,n){var l,u,p;if(Co(o),u=e._events,u===void 0?(u=e._events=Object.create(null),e._eventsCount=0):(u.newListener!==void 0&&(e.emit("newListener",r,o.listener?o.listener:o),u=e._events),p=u[r]),p===void 0)p=u[r]=o,++e._eventsCount;else if(typeof p=="function"?p=u[r]=n?[o,p]:[p,o]:n?p.unshift(o):p.push(o),l=wl(e),l>0&&p.length>l&&!p.warned){p.warned=!0;var i=new Error("Possible EventEmitter memory leak detected. "+p.length+" "+String(r)+" listeners added. Use emitter.setMaxListeners() to increase limit");i.name="MaxListenersExceededWarning",i.emitter=e,i.type=r,i.count=p.length}return e}et.prototype.addListener=function(e,r){return ml(this,e,r,!1)},et.prototype.on=et.prototype.addListener,et.prototype.prependListener=function(e,r){return ml(this,e,r,!0)};function d0(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function bl(e,r,o){var n={fired:!1,wrapFn:void 0,target:e,type:r,listener:o},l=d0.bind(n);return l.listener=o,n.wrapFn=l,l}et.prototype.once=function(e,r){return Co(r),this.on(e,bl(this,e,r)),this},et.prototype.prependOnceListener=function(e,r){return Co(r),this.prependListener(e,bl(this,e,r)),this},et.prototype.removeListener=function(e,r){var o,n,l,u,p;if(Co(r),n=this._events,n===void 0)return this;if(o=n[e],o===void 0)return this;if(o===r||o.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,o.listener||r));else if(typeof o!="function"){for(l=-1,u=o.length-1;u>=0;u--)if(o[u]===r||o[u].listener===r){p=o[u].listener,l=u;break}if(l<0)return this;l===0?o.shift():h0(o,l),o.length===1&&(n[e]=o[0]),n.removeListener!==void 0&&this.emit("removeListener",e,p||r)}return this},et.prototype.off=et.prototype.removeListener,et.prototype.removeAllListeners=function(e){var r,o,n;if(o=this._events,o===void 0)return this;if(o.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):o[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete o[e]),this;if(arguments.length===0){var l=Object.keys(o),u;for(n=0;n<l.length;++n)u=l[n],u!=="removeListener"&&this.removeAllListeners(u);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=o[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(n=r.length-1;n>=0;n--)this.removeListener(e,r[n]);return this};function yl(e,r,o){var n=e._events;if(n===void 0)return[];var l=n[r];return l===void 0?[]:typeof l=="function"?o?[l.listener||l]:[l]:o?g0(l):Tl(l,l.length)}et.prototype.listeners=function(e){return yl(this,e,!0)},et.prototype.rawListeners=function(e){return yl(this,e,!1)};function f0(e,r){return typeof e.listenerCount=="function"?e.listenerCount(r):et.prototype.listenerCount.call(e,r)}et.listenerCount=f0,et.prototype.listenerCount=function(e){var r=this._events;if(r!==void 0){var o=r[e];if(typeof o=="function")return 1;if(o!==void 0)return o.length}return 0},et.prototype.eventNames=function(){return this._eventsCount>0?Po(this._events):[]};function Tl(e,r){for(var o=new Array(r),n=0;n<r;++n)o[n]=e[n];return o}function h0(e,r){for(;r+1<e.length;r++)e[r]=e[r+1];e.pop()}function g0(e){for(var r=new Array(e.length),o=0;o<r.length;++o)r[o]=e[o].listener||e[o];return r}function Mi(e){let r=performance.now(),o=Math.floor(r/1e3),n=Math.floor(r*1e6-o*1e9);if(!e)return[o,n];let[l,u]=e;return[o-l,n-u]}Mi.bigint=function(){let[e,r]=Mi();return BigInt(e)*1000000000n+BigInt(r)};var ji=class extends et{title="browser";browser=!0;env={};argv=[];pid=0;arch="unknown";platform="browser";version="";versions={};emitWarning=()=>{throw new Error("process.emitWarning is not supported")};binding=()=>{throw new Error("process.binding is not supported")};cwd=()=>{throw new Error("process.cwd is not supported")};chdir=r=>{throw new Error("process.chdir is not supported")};umask=()=>18;nextTick=(r,...o)=>queueMicrotask(()=>r(...o));hrtime=Mi;constructor(){super()}},Mt=new ji;if(typeof Deno<"u"){Mt.name="deno",Mt.browser=!1,Mt.pid=Deno.pid,Mt.cwd=()=>Deno.cwd(),Mt.chdir=r=>Deno.chdir(r),Mt.arch=Deno.build.arch,Mt.platform=Deno.build.os,Mt.version="v18.12.1",Mt.versions={node:"18.12.1",uv:"1.43.0",zlib:"1.2.11",brotli:"1.0.9",ares:"1.18.1",modules:"108",nghttp2:"1.47.0",napi:"8",llhttp:"6.0.10",openssl:"3.0.7+quic",cldr:"41.0",icu:"71.1",tz:"2022b",unicode:"14.0",ngtcp2:"0.8.1",nghttp3:"0.7.0",...Deno.version},Mt.env=new Proxy({},{get(r,o){return Deno.env.get(String(o))},ownKeys:()=>Reflect.ownKeys(Deno.env.toObject()),getOwnPropertyDescriptor:(r,o)=>{let n=Deno.env.toObject();if(o in Deno.env.toObject()){let l={enumerable:!0,configurable:!0};return typeof o=="string"&&(l.value=n[o]),l}},set(r,o,n){return Deno.env.set(String(o),String(n)),n}});let e=["","",...Deno.args];Object.defineProperty(e,"0",{get:Deno.execPath}),Object.defineProperty(e,"1",{get:()=>Deno.mainModule.startsWith("file:")?new URL(Deno.mainModule).pathname:join(Deno.cwd(),"$deno$node.js")}),Mt.argv=e}else{let e="/";Mt.cwd=()=>e,Mt.chdir=r=>e=r}var Oo=Mt;var Uo={};var Ui=globalThis||(typeof window<"u"?window:self),Zr=(e=>typeof Or<"u"?Or:typeof Proxy<"u"?new Proxy(e,{get:(r,o)=>(typeof Or<"u"?Or:r)[o]}):e)(function(e){if(typeof Or<"u")return Or.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),m0=Object.create,Xo=Object.defineProperty,b0=Object.getOwnPropertyDescriptor,y0=Object.getOwnPropertyNames,v0=Object.getPrototypeOf,x0=Object.prototype.hasOwnProperty,w0=(e=>typeof Zr<"u"?Zr:typeof Proxy<"u"?new Proxy(e,{get:(r,o)=>(typeof Zr<"u"?Zr:r)[o]}):e)(function(e){if(typeof Zr<"u")return Zr.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),re=(e,r)=>()=>(e&&(r=e(e=0)),r),Tt=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),no=(e,r)=>{for(var o in r)Xo(e,o,{get:r[o],enumerable:!0})},rd=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of y0(r))!x0.call(e,l)&&l!==o&&Xo(e,l,{get:()=>r[l],enumerable:!(n=b0(r,l))||n.enumerable});return e},rn=(e,r,o)=>(o=e!=null?m0(v0(e)):{},rd(r||!e||!e.__esModule?Xo(o,"default",{value:e,enumerable:!0}):o,e)),qo=e=>rd(Xo({},"__esModule",{value:!0}),e),Cn,vr,Qn,Al,fs,hs=re(()=>{"use strict";Cn=new Map,vr=[],Qn=(e,r,o)=>{if(r&&typeof r.init=="function"&&typeof r.createInferenceSessionHandler=="function"){let n=Cn.get(e);if(n===void 0)Cn.set(e,{backend:r,priority:o});else{if(n.priority>o)return;if(n.priority===o&&n.backend!==r)throw new Error(`cannot register backend "${e}" using priority ${o}`)}if(o>=0){let l=vr.indexOf(e);l!==-1&&vr.splice(l,1);for(let u=0;u<vr.length;u++)if(Cn.get(vr[u]).priority<=o){vr.splice(u,0,e);return}vr.push(e)}return}throw new TypeError("not a valid backend")},Al=async e=>{let r=Cn.get(e);if(!r)return"backend not found.";if(r.initialized)return r.backend;if(r.aborted)return r.error;{let o=!!r.initPromise;try{return o||(r.initPromise=r.backend.init(e)),await r.initPromise,r.initialized=!0,r.backend}catch(n){return o||(r.error=`${n}`,r.aborted=!0),r.error}finally{delete r.initPromise}}},fs=async e=>{let r=e.executionProviders||[],o=r.map(a=>typeof a=="string"?a:a.name),n=o.length===0?vr:o,l,u=[],p=new Set;for(let a of n){let t=await Al(a);typeof t=="string"?u.push({name:a,err:t}):(l||(l=t),l===t&&p.add(a))}if(!l)throw new Error(`no available backend found. ERR: ${u.map(a=>`[${a.name}] ${a.err}`).join(", ")}`);for(let{name:a,err:t}of u)o.includes(a);let i=r.filter(a=>p.has(typeof a=="string"?a:a.name));return[l,new Proxy(e,{get:(a,t)=>t==="executionProviders"?i:Reflect.get(a,t)})]}}),T0=re(()=>{"use strict";hs()}),nd,A0=re(()=>{"use strict";nd="1.20.1"}),qi,Jt,od=re(()=>{"use strict";A0(),qi="warning",Jt={wasm:{},webgl:{},webgpu:{},versions:{common:nd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);qi=e}},get logLevel(){return qi}},Object.defineProperty(Jt,"logLevel",{enumerable:!0})}),qe,_0=re(()=>{"use strict";od(),qe=Jt}),id,ad,E0=re(()=>{"use strict";id=(e,r)=>{let o=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);o.width=e.dims[3],o.height=e.dims[2];let n=o.getContext("2d");if(n!=null){let l,u;r?.tensorLayout!==void 0&&r.tensorLayout==="NHWC"?(l=e.dims[2],u=e.dims[3]):(l=e.dims[3],u=e.dims[2]);let p=r?.format!==void 0?r.format:"RGB",i=r?.norm,a,t;i===void 0||i.mean===void 0?a=[255,255,255,255]:typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:(a=[i.mean[0],i.mean[1],i.mean[2],0],i.mean[3]!==void 0&&(a[3]=i.mean[3])),i===void 0||i.bias===void 0?t=[0,0,0,0]:typeof i.bias=="number"?t=[i.bias,i.bias,i.bias,i.bias]:(t=[i.bias[0],i.bias[1],i.bias[2],0],i.bias[3]!==void 0&&(t[3]=i.bias[3]));let c=u*l,s=0,d=c,f=c*2,g=-1;p==="RGBA"?(s=0,d=c,f=c*2,g=c*3):p==="RGB"?(s=0,d=c,f=c*2):p==="RBG"&&(s=0,f=c,d=c*2);for(let b=0;b<u;b++)for(let y=0;y<l;y++){let m=(e.data[s++]-t[0])*a[0],v=(e.data[d++]-t[1])*a[1],C=(e.data[f++]-t[2])*a[2],M=g===-1?255:(e.data[g++]-t[3])*a[3];n.fillStyle="rgba("+m+","+v+","+C+","+M+")",n.fillRect(y,b,1,1)}if("toDataURL"in o)return o.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ad=(e,r)=>{let o=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(o!=null){let l,u,p;r?.tensorLayout!==void 0&&r.tensorLayout==="NHWC"?(l=e.dims[2],u=e.dims[1],p=e.dims[3]):(l=e.dims[3],u=e.dims[2],p=e.dims[1]);let i=r!==void 0&&r.format!==void 0?r.format:"RGB",a=r?.norm,t,c;a===void 0||a.mean===void 0?t=[255,255,255,255]:typeof a.mean=="number"?t=[a.mean,a.mean,a.mean,a.mean]:(t=[a.mean[0],a.mean[1],a.mean[2],255],a.mean[3]!==void 0&&(t[3]=a.mean[3])),a===void 0||a.bias===void 0?c=[0,0,0,0]:typeof a.bias=="number"?c=[a.bias,a.bias,a.bias,a.bias]:(c=[a.bias[0],a.bias[1],a.bias[2],0],a.bias[3]!==void 0&&(c[3]=a.bias[3]));let s=u*l;if(r!==void 0&&(r.format!==void 0&&p===4&&r.format!=="RGBA"||p===3&&r.format!=="RGB"&&r.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let d=4,f=0,g=1,b=2,y=3,m=0,v=s,C=s*2,M=-1;i==="RGBA"?(m=0,v=s,C=s*2,M=s*3):i==="RGB"?(m=0,v=s,C=s*2):i==="RBG"&&(m=0,C=s,v=s*2),n=o.createImageData(l,u);for(let q=0;q<u*l;f+=d,g+=d,b+=d,y+=d,q++)n.data[f]=(e.data[m++]-c[0])*t[0],n.data[g]=(e.data[v++]-c[1])*t[1],n.data[b]=(e.data[C++]-c[2])*t[2],n.data[y]=M===-1?255:(e.data[M++]-c[3])*t[3]}else throw new Error("Can not access image data");return n}}),Io,sd,ud,ld,cd,pd,D0=re(()=>{"use strict";gs(),Io=(e,r)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(r.height===void 0||r.width===void 0)throw new Error("Image height and width must be defined");if(r.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:o,width:n}=r,l=r.norm??{mean:255,bias:0},u,p;typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:u=[l.mean[0],l.mean[1],l.mean[2],l.mean[3]??255],typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:p=[l.bias[0],l.bias[1],l.bias[2],l.bias[3]??0];let i=r.format!==void 0?r.format:"RGBA",a=r.tensorFormat!==void 0&&r.tensorFormat!==void 0?r.tensorFormat:"RGB",t=o*n,c=a==="RGBA"?new Float32Array(t*4):new Float32Array(t*3),s=4,d=0,f=1,g=2,b=3,y=0,m=t,v=t*2,C=-1;i==="RGB"&&(s=3,d=0,f=1,g=2,b=-1),a==="RGBA"?C=t*3:a==="RBG"?(y=0,v=t,m=t*2):a==="BGR"&&(v=0,m=t,y=t*2);for(let M=0;M<t;M++,d+=s,g+=s,f+=s,b+=s)c[y++]=(e[d]+p[0])/u[0],c[m++]=(e[f]+p[1])/u[1],c[v++]=(e[g]+p[2])/u[2],C!==-1&&b!==-1&&(c[C++]=(e[b]+p[3])/u[3]);return a==="RGBA"?new Vt("float32",c,[1,4,o,n]):new Vt("float32",c,[1,3,o,n])},sd=async(e,r)=>{let o=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,l=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,u=typeof e=="string",p,i=r??{},a=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},t=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(o){let c=a();c.width=e.width,c.height=e.height;let s=t(c);if(s!=null){let d=e.height,f=e.width;if(r!==void 0&&r.resizedHeight!==void 0&&r.resizedWidth!==void 0&&(d=r.resizedHeight,f=r.resizedWidth),r!==void 0){if(i=r,r.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");i.tensorFormat="RGBA",i.height=d,i.width=f}else i.tensorFormat="RGBA",i.height=d,i.width=f;s.drawImage(e,0,0),p=s.getImageData(0,0,f,d).data}else throw new Error("Can not access image data")}else if(n){let c,s;if(r!==void 0&&r.resizedWidth!==void 0&&r.resizedHeight!==void 0?(c=r.resizedHeight,s=r.resizedWidth):(c=e.height,s=e.width),r!==void 0&&(i=r),i.format="RGBA",i.height=c,i.width=s,r!==void 0){let d=a();d.width=s,d.height=c;let f=t(d);if(f!=null)f.putImageData(e,0,0),p=f.getImageData(0,0,s,c).data;else throw new Error("Can not access image data")}else p=e.data}else if(l){if(r===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=a();c.width=e.width,c.height=e.height;let s=t(c);if(s!=null){let d=e.height,f=e.width;return s.drawImage(e,0,0,f,d),p=s.getImageData(0,0,f,d).data,i.height=d,i.width=f,Io(p,i)}else throw new Error("Can not access image data")}else{if(u)return new Promise((c,s)=>{let d=a(),f=t(d);if(!e||!f)return s();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{d.width=g.width,d.height=g.height,f.drawImage(g,0,0,d.width,d.height);let b=f.getImageData(0,0,d.width,d.height);i.height=d.height,i.width=d.width,c(Io(b.data,i))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(p!==void 0)return Io(p,i);throw new Error("Input data provided is not supported - aborted tensor creation")},ud=(e,r)=>{let{width:o,height:n,download:l,dispose:u}=r,p=[1,n,o,4];return new Vt({location:"texture",type:"float32",texture:e,dims:p,download:l,dispose:u})},ld=(e,r)=>{let{dataType:o,dims:n,download:l,dispose:u}=r;return new Vt({location:"gpu-buffer",type:o??"float32",gpuBuffer:e,dims:n,download:l,dispose:u})},cd=(e,r)=>{let{dataType:o,dims:n,download:l,dispose:u}=r;return new Vt({location:"ml-tensor",type:o??"float32",mlTensor:e,dims:n,download:l,dispose:u})},pd=(e,r,o)=>new Vt({location:"cpu-pinned",type:e,data:r,dims:o??[r.length]})}),$r,jn,zi,dd,S0=re(()=>{"use strict";$r=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),jn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),zi=!1,dd=()=>{if(!zi){zi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,r=typeof BigUint64Array<"u"&&BigUint64Array.from,o=typeof Float16Array<"u"&&Float16Array.from;e&&($r.set("int64",BigInt64Array),jn.set(BigInt64Array,"int64")),r&&($r.set("uint64",BigUint64Array),jn.set(BigUint64Array,"uint64")),o?($r.set("float16",Float16Array),jn.set(Float16Array,"float16")):$r.set("float16",Uint16Array)}}}),fd,hd,P0=re(()=>{"use strict";gs(),fd=e=>{let r=1;for(let o=0;o<e.length;o++){let n=e[o];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${o}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${o}] must be a non-negative integer, got: ${n}`);r*=n}return r},hd=(e,r)=>{switch(e.location){case"cpu":return new Vt(e.type,e.data,r);case"cpu-pinned":return new Vt({location:"cpu-pinned",data:e.data,type:e.type,dims:r});case"texture":return new Vt({location:"texture",texture:e.texture,type:e.type,dims:r});case"gpu-buffer":return new Vt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:r});case"ml-tensor":return new Vt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:r});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Vt,gs=re(()=>{"use strict";E0(),D0(),S0(),P0(),Vt=class{constructor(e,r,o){dd();let n,l;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,l=e.dims,e.location){case"cpu-pinned":{let p=$r.get(n);if(!p)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof p))throw new TypeError(`buffer should be of type ${p.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let p,i;if(typeof e=="string")if(n=e,i=o,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");p=r}else{let a=$r.get(e);if(a===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&a===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${a.name} as data.`);e==="uint64"||e==="int64"?p=a.from(r,BigInt):p=a.from(r)}else if(r instanceof a)p=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")p=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${n} tensor's data must be type of ${a}`)}else if(i=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let a=typeof e[0];if(a==="string")n="string",p=e;else if(a==="boolean")n="bool",p=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${a}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",p=Uint8Array.from(e);else{let a=jn.get(e.constructor);if(a===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=a,p=e}if(i===void 0)i=[p.length];else if(!Array.isArray(i))throw new TypeError("A tensor's dims must be a number array");l=i,this.cpuData=p,this.dataLocation="cpu"}let u=fd(l);if(this.cpuData&&u!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(u/2)===this.cpuData.length))throw new Error(`Tensor's size(${u}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=l,this.size=u}static async fromImage(e,r){return sd(e,r)}static fromTexture(e,r){return ud(e,r)}static fromGpuBuffer(e,r){return ld(e,r)}static fromMLTensor(e,r){return cd(e,r)}static fromPinnedBuffer(e,r,o){return pd(e,r,o)}toDataURL(e){return id(this,e)}toImageData(e){return ad(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return hd(this,e)}}}),Ft,ms=re(()=>{"use strict";gs(),Ft=Vt}),Ia,Gi,nn,on,gd=re(()=>{"use strict";od(),Ia=(e,r)=>{typeof Jt.trace>"u"?Jt.wasm.trace:Jt.trace},Gi=(e,r)=>{let o=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let l=0;l<o.length;l++){if(n&&!o[l].includes("TRACE_FUNC")){let u=`FUNC_${e}::${o[l].trim().split(" ")[1]}`;r&&(u+=`::${r}`),Ia("CPU",u);return}o[l].includes("TRACE_FUNC")&&(n=!0)}},nn=e=>{(typeof Jt.trace>"u"?!Jt.wasm.trace:!Jt.trace)||Gi("BEGIN",e)},on=e=>{(typeof Jt.trace>"u"?!Jt.wasm.trace:!Jt.trace)||Gi("END",e)}}),md,C0=re(()=>{"use strict";hs(),ms(),gd(),md=class bd{constructor(r){this.handler=r}async run(r,o,n){nn();let l={},u={};if(typeof r!="object"||r===null||r instanceof Ft||Array.isArray(r))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let p=!0;if(typeof o=="object"){if(o===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(o instanceof Ft)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(o)){if(o.length===0)throw new TypeError("'fetches' cannot be an empty array.");p=!1;for(let t of o){if(typeof t!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(t)===-1)throw new RangeError(`'fetches' contains invalid output name: ${t}.`);l[t]=null}if(typeof n=="object"&&n!==null)u=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let t=!1,c=Object.getOwnPropertyNames(o);for(let s of this.outputNames)if(c.indexOf(s)!==-1){let d=o[s];(d===null||d instanceof Ft)&&(t=!0,p=!1,l[s]=d)}if(t){if(typeof n=="object"&&n!==null)u=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else u=o}}else if(typeof o<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let t of this.inputNames)if(typeof r[t]>"u")throw new Error(`input '${t}' is missing in 'feeds'.`);if(p)for(let t of this.outputNames)l[t]=null;let i=await this.handler.run(r,l,u),a={};for(let t in i)if(Object.hasOwnProperty.call(i,t)){let c=i[t];c instanceof Ft?a[t]=c:a[t]=new Ft(c.type,c.data,c.dims)}return on(),a}async release(){return this.handler.dispose()}static async create(r,o,n,l){nn();let u,p={};if(typeof r=="string"){if(u=r,typeof o=="object"&&o!==null)p=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(u=r,typeof o=="object"&&o!==null)p=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&r instanceof SharedArrayBuffer){let c=r,s=0,d=r.byteLength;if(typeof o=="object"&&o!==null)p=o;else if(typeof o=="number"){if(s=o,!Number.isSafeInteger(s))throw new RangeError("'byteOffset' must be an integer.");if(s<0||s>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(d=r.byteLength-s,typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteLength' must be an integer.");if(d<=0||s+d>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-s}].`);if(typeof l=="object"&&l!==null)p=l;else if(typeof l<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof o<"u")throw new TypeError("'options' must be an object.");u=new Uint8Array(c,s,d)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[i,a]=await fs(p),t=await i.createInferenceSessionHandler(u,a);return on(),new bd(t)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),yd,O0=re(()=>{"use strict";C0(),yd=md}),I0=re(()=>{"use strict"}),F0=re(()=>{"use strict"}),L0=re(()=>{"use strict"}),k0=re(()=>{"use strict"}),_l,vd,N0=re(()=>{"use strict";hs(),ms(),_l="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",vd=class xd{constructor(r,o,n){this.handler=r,this.hasOptimizerModel=o,this.hasEvalModel=n}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(r,o){let n=r.evalModel||"",l=r.optimizerModel||"",u=o||{},[p,i]=await fs(u);if(p.createTrainingSessionHandler){let a=await p.createTrainingSessionHandler(r.checkpointState,r.trainModel,n,l,i);return new xd(a,!!r.optimizerModel,!!r.evalModel)}else throw new Error(_l)}typeNarrowingForRunStep(r,o,n,l,u){let p={},i={};if(typeof n!="object"||n===null||n instanceof Ft||Array.isArray(n))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof l=="object"){if(l===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(l instanceof Ft)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(l)){if(l.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let t of l){if(typeof t!="string")throw new TypeError("'fetches' must be a string array or an object.");if(o.indexOf(t)===-1)throw new RangeError(`'fetches' contains invalid output name: ${t}.`);p[t]=null}if(typeof u=="object"&&u!==null)i=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else{let t=!1,c=Object.getOwnPropertyNames(l);for(let s of o)if(c.indexOf(s)!==-1){let d=l[s];(d===null||d instanceof Ft)&&(t=!0,a=!1,p[s]=d)}if(t){if(typeof u=="object"&&u!==null)i=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else i=l}}else if(typeof l<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let t of r)if(typeof n[t]>"u")throw new Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let t of o)p[t]=null;return[p,i]}convertHandlerReturnTypeToMapOfTensors(r){let o={};for(let n in r)if(Object.hasOwnProperty.call(r,n)){let l=r[n];l instanceof Ft?o[n]=l:o[n]=new Ft(l.type,l.data,l.dims)}return o}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(r,o,n){let[l,u]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,r,o,n),p=await this.handler.runTrainStep(r,l,u);return this.convertHandlerReturnTypeToMapOfTensors(p)}async runOptimizerStep(r){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(r||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(r,o,n){if(this.hasEvalModel){let[l,u]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,r,o,n),p=await this.handler.runEvalStep(r,l,u);return this.convertHandlerReturnTypeToMapOfTensors(p)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(r=!0){return this.handler.getParametersSize(r)}async loadParametersBuffer(r,o=!0){let n=await this.getParametersSize(o);if(r.length!==4*n)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(r,o)}async getContiguousParameters(r=!0){return this.handler.getContiguousParameters(r)}async release(){return this.handler.dispose()}}}),wd,R0=re(()=>{"use strict";N0(),wd=vd}),Td={};no(Td,{InferenceSession:()=>yd,TRACE:()=>Ia,TRACE_FUNC_BEGIN:()=>nn,TRACE_FUNC_END:()=>on,Tensor:()=>Ft,TrainingSession:()=>wd,env:()=>qe,registerBackend:()=>Qn});var pr=re(()=>{"use strict";T0(),_0(),O0(),ms(),I0(),F0(),gd(),L0(),k0(),R0()});function _r(e,r,o,n){if(r===void 0)return B0(e);if(o===void 0)Fo(e,r,1);else if(typeof o=="number"&&n===void 0)Fo(e,r,o);else if(typeof o=="string"&&n===void 0)Fo(e,o,1,r);else if(typeof o=="string"&&typeof n=="number")Fo(e,o,n,r);else throw new TypeError("input is valid")}function B0(e){return{verbose:_r.verbose.bind(null,e),info:_r.info.bind(null,e),warning:_r.warning.bind(null,e),error:_r.error.bind(null,e),fatal:_r.fatal.bind(null,e)}}function Fo(e,r,o,n){let l=tn[n||""]||tn[""];Fa[e]<Fa[l.minimalSeverity]||(l.logDateTime&&(r=`${new Date().toISOString()}|${r}`),l.logSourceLocation,Ad[l.provider].log(e,r,n))}var El,Dl,Fa,Ad,Vi,tn,yt,Ki,Hi,_d,On,ir=re(()=>{"use strict";El=class{log(e,r,o){}},Dl=class{log(e,r,o){}color(e){switch(e){case"verbose":return"\x1B[34;40mv\x1B[0m";case"info":return"\x1B[32mi\x1B[0m";case"warning":return"\x1B[30;43mw\x1B[0m";case"error":return"\x1B[31;40me\x1B[0m";case"fatal":return"\x1B[101mf\x1B[0m";default:throw new Error(`unsupported severity: ${e}`)}}},Fa={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},Ad={none:new El,console:new Dl},Vi={provider:"console",minimalSeverity:"warning",logDateTime:!0,logSourceLocation:!1},tn={"":Vi},(e=>{function r(t,c){e("verbose",t,c)}e.verbose=r;function o(t,c){e("info",t,c)}e.info=o;function n(t,c){e("warning",t,c)}e.warning=n;function l(t,c){e("error",t,c)}e.error=l;function u(t,c){e("fatal",t,c)}e.fatal=u;function p(t){tn={},i("",t||{})}e.reset=p;function i(t,c){if(t==="*")p(c);else{let s=tn[t]||Vi;tn[t]={provider:c.provider||s.provider,minimalSeverity:c.minimalSeverity||s.minimalSeverity,logDateTime:c.logDateTime===void 0?s.logDateTime:c.logDateTime,logSourceLocation:c.logSourceLocation===void 0?s.logSourceLocation:c.logSourceLocation}}}e.set=i;function a(t){let c={};t.logLevel&&(c.minimalSeverity=t.logLevel),i("",c)}e.setWithEnv=a})(_r||(_r={})),yt=_r,Ki=class{constructor(e,r,o,n,l,u){this.category=e,this.name=r,this.startTime=o,this.endCallback=n,this.timer=l,this.ctx=u}async end(){return this.endCallback(this)}async checkTimer(){if(this.ctx===void 0||this.timer===void 0)throw new Error("No webgl timer found");return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},Hi=class{constructor(e,r,o,n){this.category=e,this.name=r,this.startTime=o,this.endTime=n}},_d=class{constructor(e,r,o){this._started=!1,this._flushPointer=0,this._started=!1,this._maxNumberEvents=e===void 0?1e4:e,this._flushBatchSize=r===void 0?10:r,this._flushIntervalInMilliseconds=o===void 0?5e3:o}static create(e){return e===void 0?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=On(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,r,o,n){let l=this._started?this.begin(e,r,n):void 0,u=!1,p=o();if(p&&typeof p.then=="function")return u=!0,new Promise((i,a)=>{p.then(async t=>{l&&await l.end(),i(t)},async t=>{l&&await l.end(),a(t)})});if(!u&&l){let i=l.end();if(i&&typeof i.then=="function")return new Promise((a,t)=>{i.then(()=>{a(p)},c=>{t(c)})})}return p}begin(e,r,o){if(!this._started)throw new Error("profiler is not started yet");if(o===void 0){let n=On();return this.flush(n),new Ki(e,r,n,l=>this.endSync(l))}else{let n=o.beginTimer();return new Ki(e,r,0,async l=>this.end(l),n,o)}}async end(e){let r=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Hi(e.category,e.name,e.startTime,r)),this.flush(r))}endSync(e){let r=On();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Hi(e.category,e.name,e.startTime,r)),this.flush(r))}logOneEvent(e){yt.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let r=this._flushPointer;this._flushPointer<r+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=On()}}get started(){return this._started}},On=typeof performance<"u"&&performance.now?()=>performance.now():Date.now});function $0(e,r,o){for(let n of o){let l=n[0],u=n[1],p=n[2],i=n[3],a=n[4];if(e.opType===l){for(let t of r)if((t.domain===u||t.domain==="ai.onnx"&&u==="")&&M0(t.version,p))return{opImpl:i,opInit:a}}}throw new TypeError(`cannot resolve operator '${e.opType}' with opsets: ${r.map(n=>`${n.domain||"ai.onnx"} v${n.version}`).join(", ")}`)}function M0(e,r){if(r.endsWith("+")){let o=Number.parseInt(r.substring(0,r.length-1),10);return!isNaN(o)&&o<=e}else if(r.split("-").length===2){let o=r.split("-"),n=Number.parseInt(o[0],10),l=Number.parseInt(o[1],10);return!isNaN(n)&&!isNaN(l)&&n<=e&&e<=l}else return Number.parseInt(r,10)===e}var j0=re(()=>{"use strict"}),U0=Tt(e=>{"use strict";e.__esModule=!0;var r=function(){function o(n){if(!n)throw new TypeError("Invalid argument; `value` has no value.");this.value=o.EMPTY,n&&o.isGuid(n)&&(this.value=n)}return o.isGuid=function(n){var l=n.toString();return n&&(n instanceof o||o.validator.test(l))},o.create=function(){return new o([o.gen(2),o.gen(1),o.gen(1),o.gen(1),o.gen(3)].join("-"))},o.createEmpty=function(){return new o("emptyguid")},o.parse=function(n){return new o(n)},o.raw=function(){return[o.gen(2),o.gen(1),o.gen(1),o.gen(1),o.gen(3)].join("-")},o.gen=function(n){for(var l="",u=0;u<n;u++)l+=((1+Math.random())*65536|0).toString(16).substring(1);return l},o.prototype.equals=function(n){return o.isGuid(n)&&this.value===n.toString()},o.prototype.isEmpty=function(){return this.value===o.EMPTY},o.prototype.toString=function(){return this.value},o.prototype.toJSON=function(){return{value:this.value}},o.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),o.EMPTY="00000000-0000-0000-0000-000000000000",o}();e.Guid=r});function nt(e,r,o){this.low=e|0,this.high=r|0,this.unsigned=!!o}function Ot(e){return(e&&e.__isLong__)===!0}function Sl(e){var r=Math.clz32(e&-e);return e?31-r:r}function Fr(e,r){var o,n,l;return r?(e>>>=0,(l=0<=e&&e<256)&&(n=ka[e],n)?n:(o=We(e,0,!0),l&&(ka[e]=o),o)):(e|=0,(l=-128<=e&&e<128)&&(n=La[e],n)?n:(o=We(e,e<0?-1:0,!1),l&&(La[e]=o),o))}function Qt(e,r){if(isNaN(e))return r?ur:Zt;if(r){if(e<0)return ur;if(e>=Na)return $a}else{if(e<=-Ra)return Rt;if(e+1>=Ra)return Ba}return e<0?Qt(-e,r).neg():We(e%Mr|0,e/Mr|0,r)}function We(e,r,o){return new nt(e,r,o)}function bs(e,r,o){if(e.length===0)throw Error("empty string");if(typeof r=="number"?(o=r,r=!1):r=!!r,e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return r?ur:Zt;if(o=o||10,o<2||36<o)throw RangeError("radix");var n;if((n=e.indexOf("-"))>0)throw Error("interior hyphen");if(n===0)return bs(e.substring(1),r,o).neg();for(var l=Qt(Xn(o,8)),u=Zt,p=0;p<e.length;p+=8){var i=Math.min(8,e.length-p),a=parseInt(e.substring(p,p+i),o);if(i<8){var t=Qt(Xn(o,i));u=u.mul(t).add(Qt(a))}else u=u.mul(l),u=u.add(Qt(a))}return u.unsigned=r,u}function or(e,r){return typeof e=="number"?Qt(e,r):typeof e=="string"?bs(e,r):We(e.low,e.high,typeof r=="boolean"?r:e.unsigned)}var Ut,La,ka,Xn,Wi,Pl,Mr,Na,Ra,Xi,Zt,ur,Lr,Yi,Lo,Ba,$a,Rt,pe,Er,Ed=re(()=>{Ut=null;try{Ut=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}nt.prototype.__isLong__,Object.defineProperty(nt.prototype,"__isLong__",{value:!0}),nt.isLong=Ot,La={},ka={},nt.fromInt=Fr,nt.fromNumber=Qt,nt.fromBits=We,Xn=Math.pow,nt.fromString=bs,nt.fromValue=or,Wi=65536,Pl=1<<24,Mr=Wi*Wi,Na=Mr*Mr,Ra=Na/2,Xi=Fr(Pl),Zt=Fr(0),nt.ZERO=Zt,ur=Fr(0,!0),nt.UZERO=ur,Lr=Fr(1),nt.ONE=Lr,Yi=Fr(1,!0),nt.UONE=Yi,Lo=Fr(-1),nt.NEG_ONE=Lo,Ba=We(-1,2147483647,!1),nt.MAX_VALUE=Ba,$a=We(-1,-1,!0),nt.MAX_UNSIGNED_VALUE=$a,Rt=We(0,-2147483648,!1),nt.MIN_VALUE=Rt,pe=nt.prototype,pe.toInt=function(){return this.unsigned?this.low>>>0:this.low},pe.toNumber=function(){return this.unsigned?(this.high>>>0)*Mr+(this.low>>>0):this.high*Mr+(this.low>>>0)},pe.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Rt)){var r=Qt(e),o=this.div(r),n=o.mul(r).sub(this);return o.toString(e)+n.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var l=Qt(Xn(e,6),this.unsigned),u=this,p="";;){var i=u.div(l),a=u.sub(i.mul(l)).toInt()>>>0,t=a.toString(e);if(u=i,u.isZero())return t+p;for(;t.length<6;)t="0"+t;p=""+t+p}},pe.getHighBits=function(){return this.high},pe.getHighBitsUnsigned=function(){return this.high>>>0},pe.getLowBits=function(){return this.low},pe.getLowBitsUnsigned=function(){return this.low>>>0},pe.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Rt)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,r=31;r>0&&!(e&1<<r);r--);return this.high!=0?r+33:r+1},pe.isZero=function(){return this.high===0&&this.low===0},pe.eqz=pe.isZero,pe.isNegative=function(){return!this.unsigned&&this.high<0},pe.isPositive=function(){return this.unsigned||this.high>=0},pe.isOdd=function(){return(this.low&1)===1},pe.isEven=function(){return(this.low&1)===0},pe.equals=function(e){return Ot(e)||(e=or(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low},pe.eq=pe.equals,pe.notEquals=function(e){return!this.eq(e)},pe.neq=pe.notEquals,pe.ne=pe.notEquals,pe.lessThan=function(e){return this.comp(e)<0},pe.lt=pe.lessThan,pe.lessThanOrEqual=function(e){return this.comp(e)<=0},pe.lte=pe.lessThanOrEqual,pe.le=pe.lessThanOrEqual,pe.greaterThan=function(e){return this.comp(e)>0},pe.gt=pe.greaterThan,pe.greaterThanOrEqual=function(e){return this.comp(e)>=0},pe.gte=pe.greaterThanOrEqual,pe.ge=pe.greaterThanOrEqual,pe.compare=function(e){if(Ot(e)||(e=or(e)),this.eq(e))return 0;var r=this.isNegative(),o=e.isNegative();return r&&!o?-1:!r&&o?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},pe.comp=pe.compare,pe.negate=function(){return!this.unsigned&&this.eq(Rt)?Rt:this.not().add(Lr)},pe.neg=pe.negate,pe.add=function(e){Ot(e)||(e=or(e));var r=this.high>>>16,o=this.high&65535,n=this.low>>>16,l=this.low&65535,u=e.high>>>16,p=e.high&65535,i=e.low>>>16,a=e.low&65535,t=0,c=0,s=0,d=0;return d+=l+a,s+=d>>>16,d&=65535,s+=n+i,c+=s>>>16,s&=65535,c+=o+p,t+=c>>>16,c&=65535,t+=r+u,t&=65535,We(s<<16|d,t<<16|c,this.unsigned)},pe.subtract=function(e){return Ot(e)||(e=or(e)),this.add(e.neg())},pe.sub=pe.subtract,pe.multiply=function(e){if(this.isZero())return this;if(Ot(e)||(e=or(e)),Ut){var r=Ut.mul(this.low,this.high,e.low,e.high);return We(r,Ut.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?ur:Zt;if(this.eq(Rt))return e.isOdd()?Rt:Zt;if(e.eq(Rt))return this.isOdd()?Rt:Zt;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Xi)&&e.lt(Xi))return Qt(this.toNumber()*e.toNumber(),this.unsigned);var o=this.high>>>16,n=this.high&65535,l=this.low>>>16,u=this.low&65535,p=e.high>>>16,i=e.high&65535,a=e.low>>>16,t=e.low&65535,c=0,s=0,d=0,f=0;return f+=u*t,d+=f>>>16,f&=65535,d+=l*t,s+=d>>>16,d&=65535,d+=u*a,s+=d>>>16,d&=65535,s+=n*t,c+=s>>>16,s&=65535,s+=l*a,c+=s>>>16,s&=65535,s+=u*i,c+=s>>>16,s&=65535,c+=o*t+n*a+l*i+u*p,c&=65535,We(d<<16|f,c<<16|s,this.unsigned)},pe.mul=pe.multiply,pe.divide=function(e){if(Ot(e)||(e=or(e)),e.isZero())throw Error("division by zero");if(Ut){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var r=(this.unsigned?Ut.div_u:Ut.div_s)(this.low,this.high,e.low,e.high);return We(r,Ut.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?ur:Zt;var o,n,l;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return ur;if(e.gt(this.shru(1)))return Yi;l=ur}else{if(this.eq(Rt)){if(e.eq(Lr)||e.eq(Lo))return Rt;if(e.eq(Rt))return Lr;var u=this.shr(1);return o=u.div(e).shl(1),o.eq(Zt)?e.isNegative()?Lr:Lo:(n=this.sub(e.mul(o)),l=o.add(n.div(e)),l)}else if(e.eq(Rt))return this.unsigned?ur:Zt;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();l=Zt}for(n=this;n.gte(e);){o=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var p=Math.ceil(Math.log(o)/Math.LN2),i=p<=48?1:Xn(2,p-48),a=Qt(o),t=a.mul(e);t.isNegative()||t.gt(n);)o-=i,a=Qt(o,this.unsigned),t=a.mul(e);a.isZero()&&(a=Lr),l=l.add(a),n=n.sub(t)}return l},pe.div=pe.divide,pe.modulo=function(e){if(Ot(e)||(e=or(e)),Ut){var r=(this.unsigned?Ut.rem_u:Ut.rem_s)(this.low,this.high,e.low,e.high);return We(r,Ut.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))},pe.mod=pe.modulo,pe.rem=pe.modulo,pe.not=function(){return We(~this.low,~this.high,this.unsigned)},pe.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},pe.clz=pe.countLeadingZeros,pe.countTrailingZeros=function(){return this.low?Sl(this.low):Sl(this.high)+32},pe.ctz=pe.countTrailingZeros,pe.and=function(e){return Ot(e)||(e=or(e)),We(this.low&e.low,this.high&e.high,this.unsigned)},pe.or=function(e){return Ot(e)||(e=or(e)),We(this.low|e.low,this.high|e.high,this.unsigned)},pe.xor=function(e){return Ot(e)||(e=or(e)),We(this.low^e.low,this.high^e.high,this.unsigned)},pe.shiftLeft=function(e){return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?We(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):We(0,this.low<<e-32,this.unsigned)},pe.shl=pe.shiftLeft,pe.shiftRight=function(e){return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?We(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):We(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},pe.shr=pe.shiftRight,pe.shiftRightUnsigned=function(e){return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?We(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?We(this.high,0,this.unsigned):We(this.high>>>e-32,0,this.unsigned)},pe.shru=pe.shiftRightUnsigned,pe.shr_u=pe.shiftRightUnsigned,pe.rotateLeft=function(e){var r;return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?We(this.high,this.low,this.unsigned):e<32?(r=32-e,We(this.low<<e|this.high>>>r,this.high<<e|this.low>>>r,this.unsigned)):(e-=32,r=32-e,We(this.high<<e|this.low>>>r,this.low<<e|this.high>>>r,this.unsigned))},pe.rotl=pe.rotateLeft,pe.rotateRight=function(e){var r;return Ot(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?We(this.high,this.low,this.unsigned):e<32?(r=32-e,We(this.high<<r|this.low>>>e,this.low<<r|this.high>>>e,this.unsigned)):(e-=32,r=32-e,We(this.low<<r|this.high>>>e,this.high<<r|this.low>>>e,this.unsigned))},pe.rotr=pe.rotateRight,pe.toSigned=function(){return this.unsigned?We(this.low,this.high,!1):this},pe.toUnsigned=function(){return this.unsigned?this:We(this.low,this.high,!0)},pe.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},pe.toBytesLE=function(){var e=this.high,r=this.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},pe.toBytesBE=function(){var e=this.high,r=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,r>>>24,r>>>16&255,r>>>8&255,r&255]},nt.fromBytes=function(e,r,o){return o?nt.fromBytesLE(e,r):nt.fromBytesBE(e,r)},nt.fromBytesLE=function(e,r){return new nt(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,r)},nt.fromBytesBE=function(e,r){return new nt(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],r)},Er=nt}),j,ys=re(()=>{j={},j.Offset,j.Table,j.SIZEOF_SHORT=2,j.SIZEOF_INT=4,j.FILE_IDENTIFIER_LENGTH=4,j.SIZE_PREFIX_LENGTH=4,j.Encoding={UTF8_BYTES:1,UTF16_STRING:2},j.int32=new Int32Array(2),j.float32=new Float32Array(j.int32.buffer),j.float64=new Float64Array(j.int32.buffer),j.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1,j.Long=function(e,r){this.low=e|0,this.high=r|0},j.Long.create=function(e,r){return e==0&&r==0?j.Long.ZERO:new j.Long(e,r)},j.Long.prototype.toFloat64=function(){return(this.low>>>0)+this.high*4294967296},j.Long.prototype.equals=function(e){return this.low==e.low&&this.high==e.high},j.Long.ZERO=new j.Long(0,0),j.Builder=function(e){if(e)var r=e;else var r=1024;this.bb=j.ByteBuffer.allocate(r),this.space=r,this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},j.Builder.prototype.clear=function(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},j.Builder.prototype.forceDefaults=function(e){this.force_defaults=e},j.Builder.prototype.dataBuffer=function(){return this.bb},j.Builder.prototype.asUint8Array=function(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())},j.Builder.prototype.prep=function(e,r){e>this.minalign&&(this.minalign=e);for(var o=~(this.bb.capacity()-this.space+r)+1&e-1;this.space<o+e+r;){var n=this.bb.capacity();this.bb=j.Builder.growByteBuffer(this.bb),this.space+=this.bb.capacity()-n}this.pad(o)},j.Builder.prototype.pad=function(e){for(var r=0;r<e;r++)this.bb.writeInt8(--this.space,0)},j.Builder.prototype.writeInt8=function(e){this.bb.writeInt8(this.space-=1,e)},j.Builder.prototype.writeInt16=function(e){this.bb.writeInt16(this.space-=2,e)},j.Builder.prototype.writeInt32=function(e){this.bb.writeInt32(this.space-=4,e)},j.Builder.prototype.writeInt64=function(e){this.bb.writeInt64(this.space-=8,e)},j.Builder.prototype.writeFloat32=function(e){this.bb.writeFloat32(this.space-=4,e)},j.Builder.prototype.writeFloat64=function(e){this.bb.writeFloat64(this.space-=8,e)},j.Builder.prototype.addInt8=function(e){this.prep(1,0),this.writeInt8(e)},j.Builder.prototype.addInt16=function(e){this.prep(2,0),this.writeInt16(e)},j.Builder.prototype.addInt32=function(e){this.prep(4,0),this.writeInt32(e)},j.Builder.prototype.addInt64=function(e){this.prep(8,0),this.writeInt64(e)},j.Builder.prototype.addFloat32=function(e){this.prep(4,0),this.writeFloat32(e)},j.Builder.prototype.addFloat64=function(e){this.prep(8,0),this.writeFloat64(e)},j.Builder.prototype.addFieldInt8=function(e,r,o){(this.force_defaults||r!=o)&&(this.addInt8(r),this.slot(e))},j.Builder.prototype.addFieldInt16=function(e,r,o){(this.force_defaults||r!=o)&&(this.addInt16(r),this.slot(e))},j.Builder.prototype.addFieldInt32=function(e,r,o){(this.force_defaults||r!=o)&&(this.addInt32(r),this.slot(e))},j.Builder.prototype.addFieldInt64=function(e,r,o){(this.force_defaults||!r.equals(o))&&(this.addInt64(r),this.slot(e))},j.Builder.prototype.addFieldFloat32=function(e,r,o){(this.force_defaults||r!=o)&&(this.addFloat32(r),this.slot(e))},j.Builder.prototype.addFieldFloat64=function(e,r,o){(this.force_defaults||r!=o)&&(this.addFloat64(r),this.slot(e))},j.Builder.prototype.addFieldOffset=function(e,r,o){(this.force_defaults||r!=o)&&(this.addOffset(r),this.slot(e))},j.Builder.prototype.addFieldStruct=function(e,r,o){r!=o&&(this.nested(r),this.slot(e))},j.Builder.prototype.nested=function(e){if(e!=this.offset())throw new Error("FlatBuffers: struct must be serialized inline.")},j.Builder.prototype.notNested=function(){if(this.isNested)throw new Error("FlatBuffers: object serialization must not be nested.")},j.Builder.prototype.slot=function(e){this.vtable[e]=this.offset()},j.Builder.prototype.offset=function(){return this.bb.capacity()-this.space},j.Builder.growByteBuffer=function(e){var r=e.capacity();if(r&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");var o=r<<1,n=j.ByteBuffer.allocate(o);return n.setPosition(o-r),n.bytes().set(e.bytes(),o-r),n},j.Builder.prototype.addOffset=function(e){this.prep(j.SIZEOF_INT,0),this.writeInt32(this.offset()-e+j.SIZEOF_INT)},j.Builder.prototype.startObject=function(e){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=e;for(var r=0;r<e;r++)this.vtable[r]=0;this.isNested=!0,this.object_start=this.offset()},j.Builder.prototype.endObject=function(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);for(var e=this.offset(),r=this.vtable_in_use-1;r>=0&&this.vtable[r]==0;r--);for(var o=r+1;r>=0;r--)this.addInt16(this.vtable[r]!=0?e-this.vtable[r]:0);var n=2;this.addInt16(e-this.object_start);var l=(o+n)*j.SIZEOF_SHORT;this.addInt16(l);var u=0,p=this.space;e:for(r=0;r<this.vtables.length;r++){var i=this.bb.capacity()-this.vtables[r];if(l==this.bb.readInt16(i)){for(var a=j.SIZEOF_SHORT;a<l;a+=j.SIZEOF_SHORT)if(this.bb.readInt16(p+a)!=this.bb.readInt16(i+a))continue e;u=this.vtables[r];break}}return u?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,u-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e},j.Builder.prototype.finish=function(e,r,o){var n=o?j.SIZE_PREFIX_LENGTH:0;if(r){var l=r;if(this.prep(this.minalign,j.SIZEOF_INT+j.FILE_IDENTIFIER_LENGTH+n),l.length!=j.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+j.FILE_IDENTIFIER_LENGTH);for(var u=j.FILE_IDENTIFIER_LENGTH-1;u>=0;u--)this.writeInt8(l.charCodeAt(u))}this.prep(this.minalign,j.SIZEOF_INT+n),this.addOffset(e),n&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)},j.Builder.prototype.finishSizePrefixed=function(e,r){this.finish(e,r,!0)},j.Builder.prototype.requiredField=function(e,r){var o=this.bb.capacity()-e,n=o-this.bb.readInt32(o),l=this.bb.readInt16(n+r)!=0;if(!l)throw new Error("FlatBuffers: field "+r+" must be set")},j.Builder.prototype.startVector=function(e,r,o){this.notNested(),this.vector_num_elems=r,this.prep(j.SIZEOF_INT,e*r),this.prep(o,e*r)},j.Builder.prototype.endVector=function(){return this.writeInt32(this.vector_num_elems),this.offset()},j.Builder.prototype.createString=function(e){if(e instanceof Uint8Array)var r=e;else for(var r=[],o=0;o<e.length;){var n,l=e.charCodeAt(o++);if(l<55296||l>=56320)n=l;else{var u=e.charCodeAt(o++);n=(l<<10)+u+-56613888}n<128?r.push(n):(n<2048?r.push(n>>6&31|192):(n<65536?r.push(n>>12&15|224):r.push(n>>18&7|240,n>>12&63|128),r.push(n>>6&63|128)),r.push(n&63|128))}this.addInt8(0),this.startVector(1,r.length,1),this.bb.setPosition(this.space-=r.length);for(var o=0,p=this.space,i=this.bb.bytes();o<r.length;o++)i[p++]=r[o];return this.endVector()},j.Builder.prototype.createLong=function(e,r){return j.Long.create(e,r)},j.ByteBuffer=function(e){this.bytes_=e,this.position_=0},j.ByteBuffer.allocate=function(e){return new j.ByteBuffer(new Uint8Array(e))},j.ByteBuffer.prototype.clear=function(){this.position_=0},j.ByteBuffer.prototype.bytes=function(){return this.bytes_},j.ByteBuffer.prototype.position=function(){return this.position_},j.ByteBuffer.prototype.setPosition=function(e){this.position_=e},j.ByteBuffer.prototype.capacity=function(){return this.bytes_.length},j.ByteBuffer.prototype.readInt8=function(e){return this.readUint8(e)<<24>>24},j.ByteBuffer.prototype.readUint8=function(e){return this.bytes_[e]},j.ByteBuffer.prototype.readInt16=function(e){return this.readUint16(e)<<16>>16},j.ByteBuffer.prototype.readUint16=function(e){return this.bytes_[e]|this.bytes_[e+1]<<8},j.ByteBuffer.prototype.readInt32=function(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24},j.ByteBuffer.prototype.readUint32=function(e){return this.readInt32(e)>>>0},j.ByteBuffer.prototype.readInt64=function(e){return new j.Long(this.readInt32(e),this.readInt32(e+4))},j.ByteBuffer.prototype.readUint64=function(e){return new j.Long(this.readUint32(e),this.readUint32(e+4))},j.ByteBuffer.prototype.readFloat32=function(e){return j.int32[0]=this.readInt32(e),j.float32[0]},j.ByteBuffer.prototype.readFloat64=function(e){return j.int32[j.isLittleEndian?0:1]=this.readInt32(e),j.int32[j.isLittleEndian?1:0]=this.readInt32(e+4),j.float64[0]},j.ByteBuffer.prototype.writeInt8=function(e,r){this.bytes_[e]=r},j.ByteBuffer.prototype.writeUint8=function(e,r){this.bytes_[e]=r},j.ByteBuffer.prototype.writeInt16=function(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8},j.ByteBuffer.prototype.writeUint16=function(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8},j.ByteBuffer.prototype.writeInt32=function(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8,this.bytes_[e+2]=r>>16,this.bytes_[e+3]=r>>24},j.ByteBuffer.prototype.writeUint32=function(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8,this.bytes_[e+2]=r>>16,this.bytes_[e+3]=r>>24},j.ByteBuffer.prototype.writeInt64=function(e,r){this.writeInt32(e,r.low),this.writeInt32(e+4,r.high)},j.ByteBuffer.prototype.writeUint64=function(e,r){this.writeUint32(e,r.low),this.writeUint32(e+4,r.high)},j.ByteBuffer.prototype.writeFloat32=function(e,r){j.float32[0]=r,this.writeInt32(e,j.int32[0])},j.ByteBuffer.prototype.writeFloat64=function(e,r){j.float64[0]=r,this.writeInt32(e,j.int32[j.isLittleEndian?0:1]),this.writeInt32(e+4,j.int32[j.isLittleEndian?1:0])},j.ByteBuffer.prototype.getBufferIdentifier=function(){if(this.bytes_.length<this.position_+j.SIZEOF_INT+j.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");for(var e="",r=0;r<j.FILE_IDENTIFIER_LENGTH;r++)e+=String.fromCharCode(this.readInt8(this.position_+j.SIZEOF_INT+r));return e},j.ByteBuffer.prototype.__offset=function(e,r){var o=e-this.readInt32(e);return r<this.readInt16(o)?this.readInt16(o+r):0},j.ByteBuffer.prototype.__union=function(e,r){return e.bb_pos=r+this.readInt32(r),e.bb=this,e},j.ByteBuffer.prototype.__string=function(e,r){e+=this.readInt32(e);var o=this.readInt32(e),n="",l=0;if(e+=j.SIZEOF_INT,r===j.Encoding.UTF8_BYTES)return this.bytes_.subarray(e,e+o);for(;l<o;){var u,p=this.readUint8(e+l++);if(p<192)u=p;else{var i=this.readUint8(e+l++);if(p<224)u=(p&31)<<6|i&63;else{var a=this.readUint8(e+l++);if(p<240)u=(p&15)<<12|(i&63)<<6|a&63;else{var t=this.readUint8(e+l++);u=(p&7)<<18|(i&63)<<12|(a&63)<<6|t&63}}}u<65536?n+=String.fromCharCode(u):(u-=65536,n+=String.fromCharCode((u>>10)+55296,(u&1023)+56320))}return n},j.ByteBuffer.prototype.__indirect=function(e){return e+this.readInt32(e)},j.ByteBuffer.prototype.__vector=function(e){return e+this.readInt32(e)+j.SIZEOF_INT},j.ByteBuffer.prototype.__vector_len=function(e){return this.readInt32(e+this.readInt32(e))},j.ByteBuffer.prototype.__has_identifier=function(e){if(e.length!=j.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+j.FILE_IDENTIFIER_LENGTH);for(var r=0;r<j.FILE_IDENTIFIER_LENGTH;r++)if(e.charCodeAt(r)!=this.readInt8(this.position_+j.SIZEOF_INT+r))return!1;return!0},j.ByteBuffer.prototype.createLong=function(e,r){return j.Long.create(e,r)}}),De,Yo=re(()=>{"use strict";ys(),(e=>{let r;(o=>{let n;(l=>{let u;(p=>(p[p.UNDEFINED=0]="UNDEFINED",p[p.FLOAT=1]="FLOAT",p[p.INT=2]="INT",p[p.STRING=3]="STRING",p[p.TENSOR=4]="TENSOR",p[p.GRAPH=5]="GRAPH",p[p.FLOATS=6]="FLOATS",p[p.INTS=7]="INTS",p[p.STRINGS=8]="STRINGS",p[p.TENSORS=9]="TENSORS",p[p.GRAPHS=10]="GRAPHS",p[p.SPARSE_TENSOR=11]="SPARSE_TENSOR",p[p.SPARSE_TENSORS=12]="SPARSE_TENSORS"))(u=l.AttributeType||(l.AttributeType={}))})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{let u;(p=>(p[p.UNKNOWN=0]="UNKNOWN",p[p.VALUE=1]="VALUE",p[p.PARAM=2]="PARAM"))(u=l.DimensionValueType||(l.DimensionValueType={}))})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{let u;(p=>(p[p.UNDEFINED=0]="UNDEFINED",p[p.FLOAT=1]="FLOAT",p[p.UINT8=2]="UINT8",p[p.INT8=3]="INT8",p[p.UINT16=4]="UINT16",p[p.INT16=5]="INT16",p[p.INT32=6]="INT32",p[p.INT64=7]="INT64",p[p.STRING=8]="STRING",p[p.BOOL=9]="BOOL",p[p.FLOAT16=10]="FLOAT16",p[p.DOUBLE=11]="DOUBLE",p[p.UINT32=12]="UINT32",p[p.UINT64=13]="UINT64",p[p.COMPLEX64=14]="COMPLEX64",p[p.COMPLEX128=15]="COMPLEX128",p[p.BFLOAT16=16]="BFLOAT16",p[p.FLOAT8E4M3FN=17]="FLOAT8E4M3FN",p[p.FLOAT8E4M3FNUZ=18]="FLOAT8E4M3FNUZ",p[p.FLOAT8E5M2=19]="FLOAT8E5M2",p[p.FLOAT8E5M2FNUZ=20]="FLOAT8E5M2FNUZ"))(u=l.TensorDataType||(l.TensorDataType={}))})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{let u;(p=>(p[p.Primitive=0]="Primitive",p[p.Fused=1]="Fused"))(u=l.NodeType||(l.NodeType={}))})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{let u;(p=>(p[p.NONE=0]="NONE",p[p.tensor_type=1]="tensor_type",p[p.sequence_type=2]="sequence_type",p[p.map_type=3]="map_type"))(u=l.TypeInfoValue||(l.TypeInfoValue={}))})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsShape(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsShape(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}dim(i,a){let t=this.bb.__offset(this.bb_pos,4);return t?(a||new e.experimental.fbs.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}dimLength(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.__vector_len(this.bb_pos+i):0}static startShape(i){i.startObject(1)}static addDim(i,a){i.addFieldOffset(0,a,0)}static createDimVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startDimVector(i,a){i.startVector(4,a,4)}static endShape(i){return i.endObject()}static createShape(i,a){return u.startShape(i),u.addDim(i,a),u.endShape(i)}}l.Shape=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsDimension(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsDimension(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}value(i){let a=this.bb.__offset(this.bb_pos,4);return a?(i||new e.experimental.fbs.DimensionValue).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}denotation(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}static startDimension(i){i.startObject(2)}static addValue(i,a){i.addFieldOffset(0,a,0)}static addDenotation(i,a){i.addFieldOffset(1,a,0)}static endDimension(i){return i.endObject()}static createDimension(i,a,t){return u.startDimension(i),u.addValue(i,a),u.addDenotation(i,t),u.endDimension(i)}}l.Dimension=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsDimensionValue(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsDimensionValue(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}dimType(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt8(this.bb_pos+i):0}dimValue(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}dimParam(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,i):null}static startDimensionValue(i){i.startObject(3)}static addDimType(i,a){i.addFieldInt8(0,a,0)}static addDimValue(i,a){i.addFieldInt64(1,a,i.createLong(0,0))}static addDimParam(i,a){i.addFieldOffset(2,a,0)}static endDimensionValue(i){return i.endObject()}static createDimensionValue(i,a,t,c){return u.startDimensionValue(i),u.addDimType(i,a),u.addDimValue(i,t),u.addDimParam(i,c),u.endDimensionValue(i)}}l.DimensionValue=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsTensorTypeAndShape(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsTensorTypeAndShape(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}elemType(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt32(this.bb_pos+i):0}shape(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.Shape).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startTensorTypeAndShape(i){i.startObject(2)}static addElemType(i,a){i.addFieldInt32(0,a,0)}static addShape(i,a){i.addFieldOffset(1,a,0)}static endTensorTypeAndShape(i){return i.endObject()}static createTensorTypeAndShape(i,a,t){return u.startTensorTypeAndShape(i),u.addElemType(i,a),u.addShape(i,t),u.endTensorTypeAndShape(i)}}l.TensorTypeAndShape=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsMapType(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsMapType(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}keyType(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt32(this.bb_pos+i):0}valueType(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startMapType(i){i.startObject(2)}static addKeyType(i,a){i.addFieldInt32(0,a,0)}static addValueType(i,a){i.addFieldOffset(1,a,0)}static endMapType(i){return i.endObject()}static createMapType(i,a,t){return u.startMapType(i),u.addKeyType(i,a),u.addValueType(i,t),u.endMapType(i)}}l.MapType=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsSequenceType(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsSequenceType(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}elemType(i){let a=this.bb.__offset(this.bb_pos,4);return a?(i||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startSequenceType(i){i.startObject(1)}static addElemType(i,a){i.addFieldOffset(0,a,0)}static endSequenceType(i){return i.endObject()}static createSequenceType(i,a){return u.startSequenceType(i),u.addElemType(i,a),u.endSequenceType(i)}}l.SequenceType=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static createEdgeEnd(i,a,t,c){return i.prep(4,12),i.writeInt32(c),i.writeInt32(t),i.writeInt32(a),i.offset()}}l.EdgeEnd=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsNodeEdge(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsNodeEdge(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}nodeIndex(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readUint32(this.bb_pos+i):0}inputEdges(i,a){let t=this.bb.__offset(this.bb_pos,6);return t?(a||new e.experimental.fbs.EdgeEnd).__init(this.bb.__vector(this.bb_pos+t)+i*12,this.bb):null}inputEdgesLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}outputEdges(i,a){let t=this.bb.__offset(this.bb_pos,8);return t?(a||new e.experimental.fbs.EdgeEnd).__init(this.bb.__vector(this.bb_pos+t)+i*12,this.bb):null}outputEdgesLength(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__vector_len(this.bb_pos+i):0}static startNodeEdge(i){i.startObject(3)}static addNodeIndex(i,a){i.addFieldInt32(0,a,0)}static addInputEdges(i,a){i.addFieldOffset(1,a,0)}static startInputEdgesVector(i,a){i.startVector(12,a,4)}static addOutputEdges(i,a){i.addFieldOffset(2,a,0)}static startOutputEdgesVector(i,a){i.startVector(12,a,4)}static endNodeEdge(i){return i.endObject()}static createNodeEdge(i,a,t,c){return u.startNodeEdge(i),u.addNodeIndex(i,a),u.addInputEdges(i,t),u.addOutputEdges(i,c),u.endNodeEdge(i)}}l.NodeEdge=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsNode(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsNode(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}name(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}docString(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}domain(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,i):null}sinceVersion(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readInt32(this.bb_pos+i):0}index(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.readUint32(this.bb_pos+i):0}opType(i){let a=this.bb.__offset(this.bb_pos,14);return a?this.bb.__string(this.bb_pos+a,i):null}type(){let i=this.bb.__offset(this.bb_pos,16);return i?this.bb.readInt32(this.bb_pos+i):0}executionProviderType(i){let a=this.bb.__offset(this.bb_pos,18);return a?this.bb.__string(this.bb_pos+a,i):null}inputs(i,a){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+i*4,a):null}inputsLength(){let i=this.bb.__offset(this.bb_pos,20);return i?this.bb.__vector_len(this.bb_pos+i):0}outputs(i,a){let t=this.bb.__offset(this.bb_pos,22);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+i*4,a):null}outputsLength(){let i=this.bb.__offset(this.bb_pos,22);return i?this.bb.__vector_len(this.bb_pos+i):0}attributes(i,a){let t=this.bb.__offset(this.bb_pos,24);return t?(a||new e.experimental.fbs.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}attributesLength(){let i=this.bb.__offset(this.bb_pos,24);return i?this.bb.__vector_len(this.bb_pos+i):0}inputArgCounts(i){let a=this.bb.__offset(this.bb_pos,26);return a?this.bb.readInt32(this.bb.__vector(this.bb_pos+a)+i*4):0}inputArgCountsLength(){let i=this.bb.__offset(this.bb_pos,26);return i?this.bb.__vector_len(this.bb_pos+i):0}inputArgCountsArray(){let i=this.bb.__offset(this.bb_pos,26);return i?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}implicitInputs(i,a){let t=this.bb.__offset(this.bb_pos,28);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+i*4,a):null}implicitInputsLength(){let i=this.bb.__offset(this.bb_pos,28);return i?this.bb.__vector_len(this.bb_pos+i):0}static startNode(i){i.startObject(13)}static addName(i,a){i.addFieldOffset(0,a,0)}static addDocString(i,a){i.addFieldOffset(1,a,0)}static addDomain(i,a){i.addFieldOffset(2,a,0)}static addSinceVersion(i,a){i.addFieldInt32(3,a,0)}static addIndex(i,a){i.addFieldInt32(4,a,0)}static addOpType(i,a){i.addFieldOffset(5,a,0)}static addType(i,a){i.addFieldInt32(6,a,0)}static addExecutionProviderType(i,a){i.addFieldOffset(7,a,0)}static addInputs(i,a){i.addFieldOffset(8,a,0)}static createInputsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startInputsVector(i,a){i.startVector(4,a,4)}static addOutputs(i,a){i.addFieldOffset(9,a,0)}static createOutputsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startOutputsVector(i,a){i.startVector(4,a,4)}static addAttributes(i,a){i.addFieldOffset(10,a,0)}static createAttributesVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startAttributesVector(i,a){i.startVector(4,a,4)}static addInputArgCounts(i,a){i.addFieldOffset(11,a,0)}static createInputArgCountsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addInt32(a[t]);return i.endVector()}static startInputArgCountsVector(i,a){i.startVector(4,a,4)}static addImplicitInputs(i,a){i.addFieldOffset(12,a,0)}static createImplicitInputsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startImplicitInputsVector(i,a){i.startVector(4,a,4)}static endNode(i){return i.endObject()}static createNode(i,a,t,c,s,d,f,g,b,y,m,v,C,M){return u.startNode(i),u.addName(i,a),u.addDocString(i,t),u.addDomain(i,c),u.addSinceVersion(i,s),u.addIndex(i,d),u.addOpType(i,f),u.addType(i,g),u.addExecutionProviderType(i,b),u.addInputs(i,y),u.addOutputs(i,m),u.addAttributes(i,v),u.addInputArgCounts(i,C),u.addImplicitInputs(i,M),u.endNode(i)}}l.Node=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsValueInfo(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsValueInfo(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}name(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}docString(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}type(i){let a=this.bb.__offset(this.bb_pos,8);return a?(i||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startValueInfo(i){i.startObject(3)}static addName(i,a){i.addFieldOffset(0,a,0)}static addDocString(i,a){i.addFieldOffset(1,a,0)}static addType(i,a){i.addFieldOffset(2,a,0)}static endValueInfo(i){return i.endObject()}static createValueInfo(i,a,t,c){return u.startValueInfo(i),u.addName(i,a),u.addDocString(i,t),u.addType(i,c),u.endValueInfo(i)}}l.ValueInfo=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsTypeInfo(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsTypeInfo(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}denotation(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}valueType(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.readUint8(this.bb_pos+i):0}value(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__union(i,this.bb_pos+a):null}static startTypeInfo(i){i.startObject(3)}static addDenotation(i,a){i.addFieldOffset(0,a,0)}static addValueType(i,a){i.addFieldInt8(1,a,0)}static addValue(i,a){i.addFieldOffset(2,a,0)}static endTypeInfo(i){return i.endObject()}static createTypeInfo(i,a,t,c){return u.startTypeInfo(i),u.addDenotation(i,a),u.addValueType(i,t),u.addValue(i,c),u.endTypeInfo(i)}}l.TypeInfo=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsOperatorSetId(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsOperatorSetId(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}domain(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}version(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}static startOperatorSetId(i){i.startObject(2)}static addDomain(i,a){i.addFieldOffset(0,a,0)}static addVersion(i,a){i.addFieldInt64(1,a,i.createLong(0,0))}static endOperatorSetId(i){return i.endObject()}static createOperatorSetId(i,a,t){return u.startOperatorSetId(i),u.addDomain(i,a),u.addVersion(i,t),u.endOperatorSetId(i)}}l.OperatorSetId=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsTensor(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsTensor(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}name(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}docString(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}dims(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+i*8):this.bb.createLong(0,0)}dimsLength(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__vector_len(this.bb_pos+i):0}dataType(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readInt32(this.bb_pos+i):0}rawData(i){let a=this.bb.__offset(this.bb_pos,12);return a?this.bb.readUint8(this.bb.__vector(this.bb_pos+a)+i):0}rawDataLength(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.__vector_len(this.bb_pos+i):0}rawDataArray(){let i=this.bb.__offset(this.bb_pos,12);return i?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}stringData(i,a){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+i*4,a):null}stringDataLength(){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.__vector_len(this.bb_pos+i):0}static startTensor(i){i.startObject(6)}static addName(i,a){i.addFieldOffset(0,a,0)}static addDocString(i,a){i.addFieldOffset(1,a,0)}static addDims(i,a){i.addFieldOffset(2,a,0)}static createDimsVector(i,a){i.startVector(8,a.length,8);for(let t=a.length-1;t>=0;t--)i.addInt64(a[t]);return i.endVector()}static startDimsVector(i,a){i.startVector(8,a,8)}static addDataType(i,a){i.addFieldInt32(3,a,0)}static addRawData(i,a){i.addFieldOffset(4,a,0)}static createRawDataVector(i,a){i.startVector(1,a.length,1);for(let t=a.length-1;t>=0;t--)i.addInt8(a[t]);return i.endVector()}static startRawDataVector(i,a){i.startVector(1,a,1)}static addStringData(i,a){i.addFieldOffset(5,a,0)}static createStringDataVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startStringDataVector(i,a){i.startVector(4,a,4)}static endTensor(i){return i.endObject()}static createTensor(i,a,t,c,s,d,f){return u.startTensor(i),u.addName(i,a),u.addDocString(i,t),u.addDims(i,c),u.addDataType(i,s),u.addRawData(i,d),u.addStringData(i,f),u.endTensor(i)}}l.Tensor=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsSparseTensor(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsSparseTensor(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}values(i){let a=this.bb.__offset(this.bb_pos,4);return a?(i||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}indices(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}dims(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+i*8):this.bb.createLong(0,0)}dimsLength(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__vector_len(this.bb_pos+i):0}static startSparseTensor(i){i.startObject(3)}static addValues(i,a){i.addFieldOffset(0,a,0)}static addIndices(i,a){i.addFieldOffset(1,a,0)}static addDims(i,a){i.addFieldOffset(2,a,0)}static createDimsVector(i,a){i.startVector(8,a.length,8);for(let t=a.length-1;t>=0;t--)i.addInt64(a[t]);return i.endVector()}static startDimsVector(i,a){i.startVector(8,a,8)}static endSparseTensor(i){return i.endObject()}static createSparseTensor(i,a,t,c){return u.startSparseTensor(i),u.addValues(i,a),u.addIndices(i,t),u.addDims(i,c),u.endSparseTensor(i)}}l.SparseTensor=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsAttribute(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsAttribute(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}name(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}docString(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}type(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.readInt32(this.bb_pos+i):0}f(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readFloat32(this.bb_pos+i):0}i(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}s(i){let a=this.bb.__offset(this.bb_pos,14);return a?this.bb.__string(this.bb_pos+a,i):null}t(i){let a=this.bb.__offset(this.bb_pos,16);return a?(i||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}g(i){let a=this.bb.__offset(this.bb_pos,18);return a?(i||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}floats(i){let a=this.bb.__offset(this.bb_pos,20);return a?this.bb.readFloat32(this.bb.__vector(this.bb_pos+a)+i*4):0}floatsLength(){let i=this.bb.__offset(this.bb_pos,20);return i?this.bb.__vector_len(this.bb_pos+i):0}floatsArray(){let i=this.bb.__offset(this.bb_pos,20);return i?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}ints(i){let a=this.bb.__offset(this.bb_pos,22);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+i*8):this.bb.createLong(0,0)}intsLength(){let i=this.bb.__offset(this.bb_pos,22);return i?this.bb.__vector_len(this.bb_pos+i):0}strings(i,a){let t=this.bb.__offset(this.bb_pos,24);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+i*4,a):null}stringsLength(){let i=this.bb.__offset(this.bb_pos,24);return i?this.bb.__vector_len(this.bb_pos+i):0}tensors(i,a){let t=this.bb.__offset(this.bb_pos,26);return t?(a||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}tensorsLength(){let i=this.bb.__offset(this.bb_pos,26);return i?this.bb.__vector_len(this.bb_pos+i):0}graphs(i,a){let t=this.bb.__offset(this.bb_pos,28);return t?(a||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}graphsLength(){let i=this.bb.__offset(this.bb_pos,28);return i?this.bb.__vector_len(this.bb_pos+i):0}static startAttribute(i){i.startObject(13)}static addName(i,a){i.addFieldOffset(0,a,0)}static addDocString(i,a){i.addFieldOffset(1,a,0)}static addType(i,a){i.addFieldInt32(2,a,0)}static addF(i,a){i.addFieldFloat32(3,a,0)}static addI(i,a){i.addFieldInt64(4,a,i.createLong(0,0))}static addS(i,a){i.addFieldOffset(5,a,0)}static addT(i,a){i.addFieldOffset(6,a,0)}static addG(i,a){i.addFieldOffset(7,a,0)}static addFloats(i,a){i.addFieldOffset(8,a,0)}static createFloatsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addFloat32(a[t]);return i.endVector()}static startFloatsVector(i,a){i.startVector(4,a,4)}static addInts(i,a){i.addFieldOffset(9,a,0)}static createIntsVector(i,a){i.startVector(8,a.length,8);for(let t=a.length-1;t>=0;t--)i.addInt64(a[t]);return i.endVector()}static startIntsVector(i,a){i.startVector(8,a,8)}static addStrings(i,a){i.addFieldOffset(10,a,0)}static createStringsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startStringsVector(i,a){i.startVector(4,a,4)}static addTensors(i,a){i.addFieldOffset(11,a,0)}static createTensorsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startTensorsVector(i,a){i.startVector(4,a,4)}static addGraphs(i,a){i.addFieldOffset(12,a,0)}static createGraphsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startGraphsVector(i,a){i.startVector(4,a,4)}static endAttribute(i){return i.endObject()}static createAttribute(i,a,t,c,s,d,f,g,b,y,m,v,C,M){return u.startAttribute(i),u.addName(i,a),u.addDocString(i,t),u.addType(i,c),u.addF(i,s),u.addI(i,d),u.addS(i,f),u.addT(i,g),u.addG(i,b),u.addFloats(i,y),u.addInts(i,m),u.addStrings(i,v),u.addTensors(i,C),u.addGraphs(i,M),u.endAttribute(i)}}l.Attribute=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsGraph(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsGraph(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}initializers(i,a){let t=this.bb.__offset(this.bb_pos,4);return t?(a||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}initializersLength(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.__vector_len(this.bb_pos+i):0}nodeArgs(i,a){let t=this.bb.__offset(this.bb_pos,6);return t?(a||new e.experimental.fbs.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}nodeArgsLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}nodes(i,a){let t=this.bb.__offset(this.bb_pos,8);return t?(a||new e.experimental.fbs.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}nodesLength(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__vector_len(this.bb_pos+i):0}maxNodeIndex(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readUint32(this.bb_pos+i):0}nodeEdges(i,a){let t=this.bb.__offset(this.bb_pos,12);return t?(a||new e.experimental.fbs.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}nodeEdgesLength(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.__vector_len(this.bb_pos+i):0}inputs(i,a){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+i*4,a):null}inputsLength(){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.__vector_len(this.bb_pos+i):0}outputs(i,a){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+i*4,a):null}outputsLength(){let i=this.bb.__offset(this.bb_pos,16);return i?this.bb.__vector_len(this.bb_pos+i):0}sparseInitializers(i,a){let t=this.bb.__offset(this.bb_pos,18);return t?(a||new e.experimental.fbs.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}sparseInitializersLength(){let i=this.bb.__offset(this.bb_pos,18);return i?this.bb.__vector_len(this.bb_pos+i):0}static startGraph(i){i.startObject(8)}static addInitializers(i,a){i.addFieldOffset(0,a,0)}static createInitializersVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startInitializersVector(i,a){i.startVector(4,a,4)}static addNodeArgs(i,a){i.addFieldOffset(1,a,0)}static createNodeArgsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startNodeArgsVector(i,a){i.startVector(4,a,4)}static addNodes(i,a){i.addFieldOffset(2,a,0)}static createNodesVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startNodesVector(i,a){i.startVector(4,a,4)}static addMaxNodeIndex(i,a){i.addFieldInt32(3,a,0)}static addNodeEdges(i,a){i.addFieldOffset(4,a,0)}static createNodeEdgesVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startNodeEdgesVector(i,a){i.startVector(4,a,4)}static addInputs(i,a){i.addFieldOffset(5,a,0)}static createInputsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startInputsVector(i,a){i.startVector(4,a,4)}static addOutputs(i,a){i.addFieldOffset(6,a,0)}static createOutputsVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startOutputsVector(i,a){i.startVector(4,a,4)}static addSparseInitializers(i,a){i.addFieldOffset(7,a,0)}static createSparseInitializersVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startSparseInitializersVector(i,a){i.startVector(4,a,4)}static endGraph(i){return i.endObject()}static createGraph(i,a,t,c,s,d,f,g,b){return u.startGraph(i),u.addInitializers(i,a),u.addNodeArgs(i,t),u.addNodes(i,c),u.addMaxNodeIndex(i,s),u.addNodeEdges(i,d),u.addInputs(i,f),u.addOutputs(i,g),u.addSparseInitializers(i,b),u.endGraph(i)}}l.Graph=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsModel(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsModel(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}irVersion(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}opsetImport(i,a){let t=this.bb.__offset(this.bb_pos,6);return t?(a||new e.experimental.fbs.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}opsetImportLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}producerName(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,i):null}producerVersion(i){let a=this.bb.__offset(this.bb_pos,10);return a?this.bb.__string(this.bb_pos+a,i):null}domain(i){let a=this.bb.__offset(this.bb_pos,12);return a?this.bb.__string(this.bb_pos+a,i):null}modelVersion(){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}docString(i){let a=this.bb.__offset(this.bb_pos,16);return a?this.bb.__string(this.bb_pos+a,i):null}graph(i){let a=this.bb.__offset(this.bb_pos,18);return a?(i||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}graphDocString(i){let a=this.bb.__offset(this.bb_pos,20);return a?this.bb.__string(this.bb_pos+a,i):null}static startModel(i){i.startObject(9)}static addIrVersion(i,a){i.addFieldInt64(0,a,i.createLong(0,0))}static addOpsetImport(i,a){i.addFieldOffset(1,a,0)}static createOpsetImportVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startOpsetImportVector(i,a){i.startVector(4,a,4)}static addProducerName(i,a){i.addFieldOffset(2,a,0)}static addProducerVersion(i,a){i.addFieldOffset(3,a,0)}static addDomain(i,a){i.addFieldOffset(4,a,0)}static addModelVersion(i,a){i.addFieldInt64(5,a,i.createLong(0,0))}static addDocString(i,a){i.addFieldOffset(6,a,0)}static addGraph(i,a){i.addFieldOffset(7,a,0)}static addGraphDocString(i,a){i.addFieldOffset(8,a,0)}static endModel(i){return i.endObject()}static createModel(i,a,t,c,s,d,f,g,b,y){return u.startModel(i),u.addIrVersion(i,a),u.addOpsetImport(i,t),u.addProducerName(i,c),u.addProducerVersion(i,s),u.addDomain(i,d),u.addModelVersion(i,f),u.addDocString(i,g),u.addGraph(i,b),u.addGraphDocString(i,y),u.endModel(i)}}l.Model=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsKernelCreateInfos(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsKernelCreateInfos(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}nodeIndices(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.readUint32(this.bb.__vector(this.bb_pos+a)+i*4):0}nodeIndicesLength(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.__vector_len(this.bb_pos+i):0}nodeIndicesArray(){let i=this.bb.__offset(this.bb_pos,4);return i?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}kernelDefHashes(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.readUint64(this.bb.__vector(this.bb_pos+a)+i*8):this.bb.createLong(0,0)}kernelDefHashesLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}static startKernelCreateInfos(i){i.startObject(2)}static addNodeIndices(i,a){i.addFieldOffset(0,a,0)}static createNodeIndicesVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addInt32(a[t]);return i.endVector()}static startNodeIndicesVector(i,a){i.startVector(4,a,4)}static addKernelDefHashes(i,a){i.addFieldOffset(1,a,0)}static createKernelDefHashesVector(i,a){i.startVector(8,a.length,8);for(let t=a.length-1;t>=0;t--)i.addInt64(a[t]);return i.endVector()}static startKernelDefHashesVector(i,a){i.startVector(8,a,8)}static endKernelCreateInfos(i){return i.endObject()}static createKernelCreateInfos(i,a,t){return u.startKernelCreateInfos(i),u.addNodeIndices(i,a),u.addKernelDefHashes(i,t),u.endKernelCreateInfos(i)}}l.KernelCreateInfos=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsSubGraphSessionState(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsSubGraphSessionState(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}graphId(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}sessionState(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.SessionState).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startSubGraphSessionState(i){i.startObject(2)}static addGraphId(i,a){i.addFieldOffset(0,a,0)}static addSessionState(i,a){i.addFieldOffset(1,a,0)}static endSubGraphSessionState(i){let a=i.endObject();return i.requiredField(a,4),a}static createSubGraphSessionState(i,a,t){return u.startSubGraphSessionState(i),u.addGraphId(i,a),u.addSessionState(i,t),u.endSubGraphSessionState(i)}}l.SubGraphSessionState=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsSessionState(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsSessionState(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}kernels(i){let a=this.bb.__offset(this.bb_pos,4);return a?(i||new e.experimental.fbs.KernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}subGraphSessionStates(i,a){let t=this.bb.__offset(this.bb_pos,6);return t?(a||new e.experimental.fbs.SubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+i*4),this.bb):null}subGraphSessionStatesLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}static startSessionState(i){i.startObject(2)}static addKernels(i,a){i.addFieldOffset(0,a,0)}static addSubGraphSessionStates(i,a){i.addFieldOffset(1,a,0)}static createSubGraphSessionStatesVector(i,a){i.startVector(4,a.length,4);for(let t=a.length-1;t>=0;t--)i.addOffset(a[t]);return i.endVector()}static startSubGraphSessionStatesVector(i,a){i.startVector(4,a,4)}static endSessionState(i){return i.endObject()}static createSessionState(i,a,t){return u.startSessionState(i),u.addKernels(i,a),u.addSubGraphSessionStates(i,t),u.endSessionState(i)}}l.SessionState=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={})),(e=>{let r;(o=>{let n;(l=>{class u{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsInferenceSession(i,a){return(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsInferenceSession(i,a){return i.setPosition(i.position()+j.SIZE_PREFIX_LENGTH),(a||new u).__init(i.readInt32(i.position())+i.position(),i)}static bufferHasIdentifier(i){return i.__has_identifier("ORTM")}ortVersion(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}model(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.Model).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}sessionState(i){let a=this.bb.__offset(this.bb_pos,8);return a?(i||new e.experimental.fbs.SessionState).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startInferenceSession(i){i.startObject(3)}static addOrtVersion(i,a){i.addFieldOffset(0,a,0)}static addModel(i,a){i.addFieldOffset(1,a,0)}static addSessionState(i,a){i.addFieldOffset(2,a,0)}static endInferenceSession(i){return i.endObject()}static finishInferenceSessionBuffer(i,a){i.finish(a,"ORTM")}static finishSizePrefixedInferenceSessionBuffer(i,a){i.finish(a,"ORTM",!0)}static createInferenceSession(i,a,t,c){return u.startInferenceSession(i),u.addOrtVersion(i,a),u.addModel(i,t),u.addSessionState(i,c),u.endInferenceSession(i)}}l.InferenceSession=u})(n=o.fbs||(o.fbs={}))})(r=e.experimental||(e.experimental={}))})(De||(De={}))}),q0=Tt((e,r)=>{"use strict";r.exports=o;function o(n,l){for(var u=new Array(arguments.length-1),p=0,i=2,a=!0;i<arguments.length;)u[p++]=arguments[i++];return new Promise(function(t,c){u[p]=function(s){if(a)if(a=!1,s)c(s);else{for(var d=new Array(arguments.length-1),f=0;f<d.length;)d[f++]=arguments[f];t.apply(null,d)}};try{n.apply(l||null,u)}catch(s){a&&(a=!1,c(s))}})}}),z0=Tt(e=>{"use strict";var r=e;r.length=function(p){var i=p.length;if(!i)return 0;for(var a=0;--i%4>1&&p.charAt(i)==="=";)++a;return Math.ceil(p.length*3)/4-a};var o=new Array(64),n=new Array(123);for(l=0;l<64;)n[o[l]=l<26?l+65:l<52?l+71:l<62?l-4:l-59|43]=l++;var l;r.encode=function(p,i,a){for(var t=null,c=[],s=0,d=0,f;i<a;){var g=p[i++];switch(d){case 0:c[s++]=o[g>>2],f=(g&3)<<4,d=1;break;case 1:c[s++]=o[f|g>>4],f=(g&15)<<2,d=2;break;case 2:c[s++]=o[f|g>>6],c[s++]=o[g&63],d=0;break}s>8191&&((t||(t=[])).push(String.fromCharCode.apply(String,c)),s=0)}return d&&(c[s++]=o[f],c[s++]=61,d===1&&(c[s++]=61)),t?(s&&t.push(String.fromCharCode.apply(String,c.slice(0,s))),t.join("")):String.fromCharCode.apply(String,c.slice(0,s))};var u="invalid encoding";r.decode=function(p,i,a){for(var t=a,c=0,s,d=0;d<p.length;){var f=p.charCodeAt(d++);if(f===61&&c>1)break;if((f=n[f])===void 0)throw Error(u);switch(c){case 0:s=f,c=1;break;case 1:i[a++]=s<<2|(f&48)>>4,s=f,c=2;break;case 2:i[a++]=(s&15)<<4|(f&60)>>2,s=f,c=3;break;case 3:i[a++]=(s&3)<<6|f,c=0;break}}if(c===1)throw Error(u);return a-t},r.test=function(p){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(p)}}),G0=Tt((e,r)=>{"use strict";r.exports=o;function o(){this._listeners={}}o.prototype.on=function(n,l,u){return(this._listeners[n]||(this._listeners[n]=[])).push({fn:l,ctx:u||this}),this},o.prototype.off=function(n,l){if(n===void 0)this._listeners={};else if(l===void 0)this._listeners[n]=[];else for(var u=this._listeners[n],p=0;p<u.length;)u[p].fn===l?u.splice(p,1):++p;return this},o.prototype.emit=function(n){var l=this._listeners[n];if(l){for(var u=[],p=1;p<arguments.length;)u.push(arguments[p++]);for(p=0;p<l.length;)l[p].fn.apply(l[p++].ctx,u)}return this}}),V0=Tt((e,r)=>{"use strict";r.exports=o(o);function o(i){return typeof Float32Array<"u"?function(){var a=new Float32Array([-0]),t=new Uint8Array(a.buffer),c=t[3]===128;function s(b,y,m){a[0]=b,y[m]=t[0],y[m+1]=t[1],y[m+2]=t[2],y[m+3]=t[3]}function d(b,y,m){a[0]=b,y[m]=t[3],y[m+1]=t[2],y[m+2]=t[1],y[m+3]=t[0]}i.writeFloatLE=c?s:d,i.writeFloatBE=c?d:s;function f(b,y){return t[0]=b[y],t[1]=b[y+1],t[2]=b[y+2],t[3]=b[y+3],a[0]}function g(b,y){return t[3]=b[y],t[2]=b[y+1],t[1]=b[y+2],t[0]=b[y+3],a[0]}i.readFloatLE=c?f:g,i.readFloatBE=c?g:f}():function(){function a(c,s,d,f){var g=s<0?1:0;if(g&&(s=-s),s===0)c(1/s>0?0:2147483648,d,f);else if(isNaN(s))c(2143289344,d,f);else if(s>34028234663852886e22)c((g<<31|2139095040)>>>0,d,f);else if(s<11754943508222875e-54)c((g<<31|Math.round(s/1401298464324817e-60))>>>0,d,f);else{var b=Math.floor(Math.log(s)/Math.LN2),y=Math.round(s*Math.pow(2,-b)*8388608)&8388607;c((g<<31|b+127<<23|y)>>>0,d,f)}}i.writeFloatLE=a.bind(null,n),i.writeFloatBE=a.bind(null,l);function t(c,s,d){var f=c(s,d),g=(f>>31)*2+1,b=f>>>23&255,y=f&8388607;return b===255?y?NaN:g*(1/0):b===0?g*1401298464324817e-60*y:g*Math.pow(2,b-150)*(y+8388608)}i.readFloatLE=t.bind(null,u),i.readFloatBE=t.bind(null,p)}(),typeof Float64Array<"u"?function(){var a=new Float64Array([-0]),t=new Uint8Array(a.buffer),c=t[7]===128;function s(b,y,m){a[0]=b,y[m]=t[0],y[m+1]=t[1],y[m+2]=t[2],y[m+3]=t[3],y[m+4]=t[4],y[m+5]=t[5],y[m+6]=t[6],y[m+7]=t[7]}function d(b,y,m){a[0]=b,y[m]=t[7],y[m+1]=t[6],y[m+2]=t[5],y[m+3]=t[4],y[m+4]=t[3],y[m+5]=t[2],y[m+6]=t[1],y[m+7]=t[0]}i.writeDoubleLE=c?s:d,i.writeDoubleBE=c?d:s;function f(b,y){return t[0]=b[y],t[1]=b[y+1],t[2]=b[y+2],t[3]=b[y+3],t[4]=b[y+4],t[5]=b[y+5],t[6]=b[y+6],t[7]=b[y+7],a[0]}function g(b,y){return t[7]=b[y],t[6]=b[y+1],t[5]=b[y+2],t[4]=b[y+3],t[3]=b[y+4],t[2]=b[y+5],t[1]=b[y+6],t[0]=b[y+7],a[0]}i.readDoubleLE=c?f:g,i.readDoubleBE=c?g:f}():function(){function a(c,s,d,f,g,b){var y=f<0?1:0;if(y&&(f=-f),f===0)c(0,g,b+s),c(1/f>0?0:2147483648,g,b+d);else if(isNaN(f))c(0,g,b+s),c(2146959360,g,b+d);else if(f>17976931348623157e292)c(0,g,b+s),c((y<<31|2146435072)>>>0,g,b+d);else{var m;if(f<22250738585072014e-324)m=f/5e-324,c(m>>>0,g,b+s),c((y<<31|m/4294967296)>>>0,g,b+d);else{var v=Math.floor(Math.log(f)/Math.LN2);v===1024&&(v=1023),m=f*Math.pow(2,-v),c(m*4503599627370496>>>0,g,b+s),c((y<<31|v+1023<<20|m*1048576&1048575)>>>0,g,b+d)}}}i.writeDoubleLE=a.bind(null,n,0,4),i.writeDoubleBE=a.bind(null,l,4,0);function t(c,s,d,f,g){var b=c(f,g+s),y=c(f,g+d),m=(y>>31)*2+1,v=y>>>20&2047,C=4294967296*(y&1048575)+b;return v===2047?C?NaN:m*(1/0):v===0?m*5e-324*C:m*Math.pow(2,v-1075)*(C+4503599627370496)}i.readDoubleLE=t.bind(null,u,0,4),i.readDoubleBE=t.bind(null,p,4,0)}(),i}function n(i,a,t){a[t]=i&255,a[t+1]=i>>>8&255,a[t+2]=i>>>16&255,a[t+3]=i>>>24}function l(i,a,t){a[t]=i>>>24,a[t+1]=i>>>16&255,a[t+2]=i>>>8&255,a[t+3]=i&255}function u(i,a){return(i[a]|i[a+1]<<8|i[a+2]<<16|i[a+3]<<24)>>>0}function p(i,a){return(i[a]<<24|i[a+1]<<16|i[a+2]<<8|i[a+3])>>>0}}),K0=Tt((exports,module)=>{"use strict";module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}}),H0=Tt(e=>{"use strict";var r=e;r.length=function(o){for(var n=0,l=0,u=0;u<o.length;++u)l=o.charCodeAt(u),l<128?n+=1:l<2048?n+=2:(l&64512)===55296&&(o.charCodeAt(u+1)&64512)===56320?(++u,n+=4):n+=3;return n},r.read=function(o,n,l){var u=l-n;if(u<1)return"";for(var p=null,i=[],a=0,t;n<l;)t=o[n++],t<128?i[a++]=t:t>191&&t<224?i[a++]=(t&31)<<6|o[n++]&63:t>239&&t<365?(t=((t&7)<<18|(o[n++]&63)<<12|(o[n++]&63)<<6|o[n++]&63)-65536,i[a++]=55296+(t>>10),i[a++]=56320+(t&1023)):i[a++]=(t&15)<<12|(o[n++]&63)<<6|o[n++]&63,a>8191&&((p||(p=[])).push(String.fromCharCode.apply(String,i)),a=0);return p?(a&&p.push(String.fromCharCode.apply(String,i.slice(0,a))),p.join("")):String.fromCharCode.apply(String,i.slice(0,a))},r.write=function(o,n,l){for(var u=l,p,i,a=0;a<o.length;++a)p=o.charCodeAt(a),p<128?n[l++]=p:p<2048?(n[l++]=p>>6|192,n[l++]=p&63|128):(p&64512)===55296&&((i=o.charCodeAt(a+1))&64512)===56320?(p=65536+((p&1023)<<10)+(i&1023),++a,n[l++]=p>>18|240,n[l++]=p>>12&63|128,n[l++]=p>>6&63|128,n[l++]=p&63|128):(n[l++]=p>>12|224,n[l++]=p>>6&63|128,n[l++]=p&63|128);return l-u}}),W0=Tt((e,r)=>{"use strict";r.exports=o;function o(n,l,u){var p=u||8192,i=p>>>1,a=null,t=p;return function(c){if(c<1||c>i)return n(c);t+c>p&&(a=n(p),t=0);var s=l.call(a,t,t+=c);return t&7&&(t=(t|7)+1),s}}}),X0=Tt((e,r)=>{"use strict";r.exports=n;var o=jr();function n(i,a){this.lo=i>>>0,this.hi=a>>>0}var l=n.zero=new n(0,0);l.toNumber=function(){return 0},l.zzEncode=l.zzDecode=function(){return this},l.length=function(){return 1};var u=n.zeroHash="\0\0\0\0\0\0\0\0";n.fromNumber=function(i){if(i===0)return l;var a=i<0;a&&(i=-i);var t=i>>>0,c=(i-t)/4294967296>>>0;return a&&(c=~c>>>0,t=~t>>>0,++t>4294967295&&(t=0,++c>4294967295&&(c=0))),new n(t,c)},n.from=function(i){if(typeof i=="number")return n.fromNumber(i);if(o.isString(i))if(o.Long)i=o.Long.fromString(i);else return n.fromNumber(parseInt(i,10));return i.low||i.high?new n(i.low>>>0,i.high>>>0):l},n.prototype.toNumber=function(i){if(!i&&this.hi>>>31){var a=~this.lo+1>>>0,t=~this.hi>>>0;return a||(t=t+1>>>0),-(a+t*4294967296)}return this.lo+this.hi*4294967296},n.prototype.toLong=function(i){return o.Long?new o.Long(this.lo|0,this.hi|0,!!i):{low:this.lo|0,high:this.hi|0,unsigned:!!i}};var p=String.prototype.charCodeAt;n.fromHash=function(i){return i===u?l:new n((p.call(i,0)|p.call(i,1)<<8|p.call(i,2)<<16|p.call(i,3)<<24)>>>0,(p.call(i,4)|p.call(i,5)<<8|p.call(i,6)<<16|p.call(i,7)<<24)>>>0)},n.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},n.prototype.zzEncode=function(){var i=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^i)>>>0,this.lo=(this.lo<<1^i)>>>0,this},n.prototype.zzDecode=function(){var i=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^i)>>>0,this.hi=(this.hi>>>1^i)>>>0,this},n.prototype.length=function(){var i=this.lo,a=(this.lo>>>28|this.hi<<4)>>>0,t=this.hi>>>24;return t===0?a===0?i<16384?i<128?1:2:i<2097152?3:4:a<16384?a<128?5:6:a<2097152?7:8:t<128?9:10}}),jr=Tt(e=>{"use strict";var r=e;r.asPromise=q0(),r.base64=z0(),r.EventEmitter=G0(),r.float=V0(),r.inquire=K0(),r.utf8=H0(),r.pool=W0(),r.LongBits=X0(),r.isNode=!!(typeof Ui<"u"&&Ui&&Oo&&Oo.versions&&Oo.versions.node),r.global=r.isNode&&Ui||typeof window<"u"&&window||typeof self<"u"&&self||e,r.emptyArray=Object.freeze?Object.freeze([]):[],r.emptyObject=Object.freeze?Object.freeze({}):{},r.isInteger=Number.isInteger||function(l){return typeof l=="number"&&isFinite(l)&&Math.floor(l)===l},r.isString=function(l){return typeof l=="string"||l instanceof String},r.isObject=function(l){return l&&typeof l=="object"},r.isset=r.isSet=function(l,u){var p=l[u];return p!=null&&l.hasOwnProperty(u)?typeof p!="object"||(Array.isArray(p)?p.length:Object.keys(p).length)>0:!1},r.Buffer=function(){try{var l=r.inquire("buffer").Buffer;return l.prototype.utf8Write?l:null}catch{return null}}(),r._Buffer_from=null,r._Buffer_allocUnsafe=null,r.newBuffer=function(l){return typeof l=="number"?r.Buffer?r._Buffer_allocUnsafe(l):new r.Array(l):r.Buffer?r._Buffer_from(l):typeof Uint8Array>"u"?l:new Uint8Array(l)},r.Array=typeof Uint8Array<"u"?Uint8Array:Array,r.Long=r.global.dcodeIO&&r.global.dcodeIO.Long||r.global.Long||r.inquire("long"),r.key2Re=/^true|false|0|1$/,r.key32Re=/^-?(?:0|[1-9][0-9]*)$/,r.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,r.longToHash=function(l){return l?r.LongBits.from(l).toHash():r.LongBits.zeroHash},r.longFromHash=function(l,u){var p=r.LongBits.fromHash(l);return r.Long?r.Long.fromBits(p.lo,p.hi,u):p.toNumber(!!u)};function o(l,u,p){for(var i=Object.keys(u),a=0;a<i.length;++a)(l[i[a]]===void 0||!p)&&(l[i[a]]=u[i[a]]);return l}r.merge=o,r.lcFirst=function(l){return l.charAt(0).toLowerCase()+l.substring(1)};function n(l){function u(p,i){if(!(this instanceof u))return new u(p,i);Object.defineProperty(this,"message",{get:function(){return p}}),Error.captureStackTrace?Error.captureStackTrace(this,u):Object.defineProperty(this,"stack",{value:new Error().stack||""}),i&&o(this,i)}return u.prototype=Object.create(Error.prototype,{constructor:{value:u,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return l},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),u}r.newError=n,r.ProtocolError=n("ProtocolError"),r.oneOfGetter=function(l){for(var u={},p=0;p<l.length;++p)u[l[p]]=1;return function(){for(var i=Object.keys(this),a=i.length-1;a>-1;--a)if(u[i[a]]===1&&this[i[a]]!==void 0&&this[i[a]]!==null)return i[a]}},r.oneOfSetter=function(l){return function(u){for(var p=0;p<l.length;++p)l[p]!==u&&delete this[l[p]]}},r.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},r._configure=function(){var l=r.Buffer;if(!l){r._Buffer_from=r._Buffer_allocUnsafe=null;return}r._Buffer_from=l.from!==Uint8Array.from&&l.from||function(u,p){return new l(u,p)},r._Buffer_allocUnsafe=l.allocUnsafe||function(u){return new l(u)}}}),Dd=Tt((e,r)=>{"use strict";r.exports=c;var o=jr(),n,l=o.LongBits,u=o.base64,p=o.utf8;function i(v,C,M){this.fn=v,this.len=C,this.next=void 0,this.val=M}function a(){}function t(v){this.head=v.head,this.tail=v.tail,this.len=v.len,this.next=v.states}function c(){this.len=0,this.head=new i(a,0,0),this.tail=this.head,this.states=null}var s=function(){return o.Buffer?function(){return(c.create=function(){return new n})()}:function(){return new c}};c.create=s(),c.alloc=function(v){return new o.Array(v)},o.Array!==Array&&(c.alloc=o.pool(c.alloc,o.Array.prototype.subarray)),c.prototype._push=function(v,C,M){return this.tail=this.tail.next=new i(v,C,M),this.len+=C,this};function d(v,C,M){C[M]=v&255}function f(v,C,M){for(;v>127;)C[M++]=v&127|128,v>>>=7;C[M]=v}function g(v,C){this.len=v,this.next=void 0,this.val=C}g.prototype=Object.create(i.prototype),g.prototype.fn=f,c.prototype.uint32=function(v){return this.len+=(this.tail=this.tail.next=new g((v=v>>>0)<128?1:v<16384?2:v<2097152?3:v<268435456?4:5,v)).len,this},c.prototype.int32=function(v){return v<0?this._push(b,10,l.fromNumber(v)):this.uint32(v)},c.prototype.sint32=function(v){return this.uint32((v<<1^v>>31)>>>0)};function b(v,C,M){for(;v.hi;)C[M++]=v.lo&127|128,v.lo=(v.lo>>>7|v.hi<<25)>>>0,v.hi>>>=7;for(;v.lo>127;)C[M++]=v.lo&127|128,v.lo=v.lo>>>7;C[M++]=v.lo}c.prototype.uint64=function(v){var C=l.from(v);return this._push(b,C.length(),C)},c.prototype.int64=c.prototype.uint64,c.prototype.sint64=function(v){var C=l.from(v).zzEncode();return this._push(b,C.length(),C)},c.prototype.bool=function(v){return this._push(d,1,v?1:0)};function y(v,C,M){C[M]=v&255,C[M+1]=v>>>8&255,C[M+2]=v>>>16&255,C[M+3]=v>>>24}c.prototype.fixed32=function(v){return this._push(y,4,v>>>0)},c.prototype.sfixed32=c.prototype.fixed32,c.prototype.fixed64=function(v){var C=l.from(v);return this._push(y,4,C.lo)._push(y,4,C.hi)},c.prototype.sfixed64=c.prototype.fixed64,c.prototype.float=function(v){return this._push(o.float.writeFloatLE,4,v)},c.prototype.double=function(v){return this._push(o.float.writeDoubleLE,8,v)};var m=o.Array.prototype.set?function(v,C,M){C.set(v,M)}:function(v,C,M){for(var q=0;q<v.length;++q)C[M+q]=v[q]};c.prototype.bytes=function(v){var C=v.length>>>0;if(!C)return this._push(d,1,0);if(o.isString(v)){var M=c.alloc(C=u.length(v));u.decode(v,M,0),v=M}return this.uint32(C)._push(m,C,v)},c.prototype.string=function(v){var C=p.length(v);return C?this.uint32(C)._push(p.write,C,v):this._push(d,1,0)},c.prototype.fork=function(){return this.states=new t(this),this.head=this.tail=new i(a,0,0),this.len=0,this},c.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new i(a,0,0),this.len=0),this},c.prototype.ldelim=function(){var v=this.head,C=this.tail,M=this.len;return this.reset().uint32(M),M&&(this.tail.next=v.next,this.tail=C,this.len+=M),this},c.prototype.finish=function(){for(var v=this.head.next,C=this.constructor.alloc(this.len),M=0;v;)v.fn(v.val,C,M),M+=v.len,v=v.next;return C},c._configure=function(v){n=v,c.create=s(),n._configure()}}),Y0=Tt((e,r)=>{"use strict";r.exports=l;var o=Dd();(l.prototype=Object.create(o.prototype)).constructor=l;var n=jr();function l(){o.call(this)}l._configure=function(){l.alloc=n._Buffer_allocUnsafe,l.writeBytesBuffer=n.Buffer&&n.Buffer.prototype instanceof Uint8Array&&n.Buffer.prototype.set.name==="set"?function(p,i,a){i.set(p,a)}:function(p,i,a){if(p.copy)p.copy(i,a,0,p.length);else for(var t=0;t<p.length;)i[a++]=p[t++]}},l.prototype.bytes=function(p){n.isString(p)&&(p=n._Buffer_from(p,"base64"));var i=p.length>>>0;return this.uint32(i),i&&this._push(l.writeBytesBuffer,i,p),this};function u(p,i,a){p.length<40?n.utf8.write(p,i,a):i.utf8Write?i.utf8Write(p,a):i.write(p,a)}l.prototype.string=function(p){var i=n.Buffer.byteLength(p);return this.uint32(i),i&&this._push(u,i,p),this},l._configure()}),Sd=Tt((e,r)=>{"use strict";r.exports=i;var o=jr(),n,l=o.LongBits,u=o.utf8;function p(f,g){return RangeError("index out of range: "+f.pos+" + "+(g||1)+" > "+f.len)}function i(f){this.buf=f,this.pos=0,this.len=f.length}var a=typeof Uint8Array<"u"?function(f){if(f instanceof Uint8Array||Array.isArray(f))return new i(f);throw Error("illegal buffer")}:function(f){if(Array.isArray(f))return new i(f);throw Error("illegal buffer")},t=function(){return o.Buffer?function(f){return(i.create=function(g){return o.Buffer.isBuffer(g)?new n(g):a(g)})(f)}:a};i.create=t(),i.prototype._slice=o.Array.prototype.subarray||o.Array.prototype.slice,i.prototype.uint32=function(){var f=4294967295;return function(){if(f=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(f=(f|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(f=(f|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(f=(f|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(f=(f|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return f;if((this.pos+=5)>this.len)throw this.pos=this.len,p(this,10);return f}}(),i.prototype.int32=function(){return this.uint32()|0},i.prototype.sint32=function(){var f=this.uint32();return f>>>1^-(f&1)|0};function c(){var f=new l(0,0),g=0;if(this.len-this.pos>4){for(;g<4;++g)if(f.lo=(f.lo|(this.buf[this.pos]&127)<<g*7)>>>0,this.buf[this.pos++]<128)return f;if(f.lo=(f.lo|(this.buf[this.pos]&127)<<28)>>>0,f.hi=(f.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return f;g=0}else{for(;g<3;++g){if(this.pos>=this.len)throw p(this);if(f.lo=(f.lo|(this.buf[this.pos]&127)<<g*7)>>>0,this.buf[this.pos++]<128)return f}return f.lo=(f.lo|(this.buf[this.pos++]&127)<<g*7)>>>0,f}if(this.len-this.pos>4){for(;g<5;++g)if(f.hi=(f.hi|(this.buf[this.pos]&127)<<g*7+3)>>>0,this.buf[this.pos++]<128)return f}else for(;g<5;++g){if(this.pos>=this.len)throw p(this);if(f.hi=(f.hi|(this.buf[this.pos]&127)<<g*7+3)>>>0,this.buf[this.pos++]<128)return f}throw Error("invalid varint encoding")}i.prototype.bool=function(){return this.uint32()!==0};function s(f,g){return(f[g-4]|f[g-3]<<8|f[g-2]<<16|f[g-1]<<24)>>>0}i.prototype.fixed32=function(){if(this.pos+4>this.len)throw p(this,4);return s(this.buf,this.pos+=4)},i.prototype.sfixed32=function(){if(this.pos+4>this.len)throw p(this,4);return s(this.buf,this.pos+=4)|0};function d(){if(this.pos+8>this.len)throw p(this,8);return new l(s(this.buf,this.pos+=4),s(this.buf,this.pos+=4))}i.prototype.float=function(){if(this.pos+4>this.len)throw p(this,4);var f=o.float.readFloatLE(this.buf,this.pos);return this.pos+=4,f},i.prototype.double=function(){if(this.pos+8>this.len)throw p(this,4);var f=o.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,f},i.prototype.bytes=function(){var f=this.uint32(),g=this.pos,b=this.pos+f;if(b>this.len)throw p(this,f);if(this.pos+=f,Array.isArray(this.buf))return this.buf.slice(g,b);if(g===b){var y=o.Buffer;return y?y.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,g,b)},i.prototype.string=function(){var f=this.bytes();return u.read(f,0,f.length)},i.prototype.skip=function(f){if(typeof f=="number"){if(this.pos+f>this.len)throw p(this,f);this.pos+=f}else do if(this.pos>=this.len)throw p(this);while(this.buf[this.pos++]&128);return this},i.prototype.skipType=function(f){switch(f){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(f=this.uint32()&7)!==4;)this.skipType(f);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+f+" at offset "+this.pos)}return this},i._configure=function(f){n=f,i.create=t(),n._configure();var g=o.Long?"toLong":"toNumber";o.merge(i.prototype,{int64:function(){return c.call(this)[g](!1)},uint64:function(){return c.call(this)[g](!0)},sint64:function(){return c.call(this).zzDecode()[g](!1)},fixed64:function(){return d.call(this)[g](!0)},sfixed64:function(){return d.call(this)[g](!1)}})}}),J0=Tt((e,r)=>{"use strict";r.exports=l;var o=Sd();(l.prototype=Object.create(o.prototype)).constructor=l;var n=jr();function l(u){o.call(this,u)}l._configure=function(){n.Buffer&&(l.prototype._slice=n.Buffer.prototype.slice)},l.prototype.string=function(){var u=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+u,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+u,this.len))},l._configure()}),Z0=Tt((e,r)=>{"use strict";r.exports=n;var o=jr();(n.prototype=Object.create(o.EventEmitter.prototype)).constructor=n;function n(l,u,p){if(typeof l!="function")throw TypeError("rpcImpl must be a function");o.EventEmitter.call(this),this.rpcImpl=l,this.requestDelimited=!!u,this.responseDelimited=!!p}n.prototype.rpcCall=function l(u,p,i,a,t){if(!a)throw TypeError("request must be specified");var c=this;if(!t)return o.asPromise(l,c,u,p,i,a);if(!c.rpcImpl){setTimeout(function(){t(Error("already ended"))},0);return}try{return c.rpcImpl(u,p[c.requestDelimited?"encodeDelimited":"encode"](a).finish(),function(s,d){if(s)return c.emit("error",s,u),t(s);if(d===null){c.end(!0);return}if(!(d instanceof i))try{d=i[c.responseDelimited?"decodeDelimited":"decode"](d)}catch(f){return c.emit("error",f,u),t(f)}return c.emit("data",d,u),t(null,d)})}catch(s){c.emit("error",s,u),setTimeout(function(){t(s)},0);return}},n.prototype.end=function(l){return this.rpcImpl&&(l||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}}),Q0=Tt(e=>{"use strict";var r=e;r.Service=Z0()}),ev=Tt((e,r)=>{"use strict";r.exports={}}),tv=Tt(e=>{"use strict";var r=e;r.build="minimal",r.Writer=Dd(),r.BufferWriter=Y0(),r.Reader=Sd(),r.BufferReader=J0(),r.util=jr(),r.rpc=Q0(),r.roots=ev(),r.configure=o;function o(){r.util._configure(),r.Writer._configure(r.BufferWriter),r.Reader._configure(r.BufferReader)}o()}),rv=Tt((e,r)=>{"use strict";r.exports=tv()}),oo=Tt((e,r)=>{"use strict";var o=rv(),n=o.Reader,l=o.Writer,u=o.util,p=o.roots.default||(o.roots.default={});p.onnx=function(){var i={};return i.Version=function(){var a={},t=Object.create(a);return t[a[0]="_START_VERSION"]=0,t[a[1]="IR_VERSION_2017_10_10"]=1,t[a[2]="IR_VERSION_2017_10_30"]=2,t[a[3]="IR_VERSION_2017_11_3"]=3,t[a[4]="IR_VERSION_2019_1_22"]=4,t[a[5]="IR_VERSION_2019_3_18"]=5,t[a[6]="IR_VERSION_2019_9_19"]=6,t[a[7]="IR_VERSION_2020_5_8"]=7,t[a[8]="IR_VERSION_2021_7_30"]=8,t[a[9]="IR_VERSION"]=9,t}(),i.AttributeProto=function(){function a(t){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.name="",a.prototype.refAttrName="",a.prototype.docString="",a.prototype.type=0,a.prototype.f=0,a.prototype.i=u.Long?u.Long.fromBits(0,0,!1):0,a.prototype.s=u.newBuffer([]),a.prototype.t=null,a.prototype.g=null,a.prototype.sparseTensor=null,a.prototype.tp=null,a.prototype.floats=u.emptyArray,a.prototype.ints=u.emptyArray,a.prototype.strings=u.emptyArray,a.prototype.tensors=u.emptyArray,a.prototype.graphs=u.emptyArray,a.prototype.sparseTensors=u.emptyArray,a.prototype.typeProtos=u.emptyArray,a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&c.uint32(10).string(t.name),t.f!=null&&Object.hasOwnProperty.call(t,"f")&&c.uint32(21).float(t.f),t.i!=null&&Object.hasOwnProperty.call(t,"i")&&c.uint32(24).int64(t.i),t.s!=null&&Object.hasOwnProperty.call(t,"s")&&c.uint32(34).bytes(t.s),t.t!=null&&Object.hasOwnProperty.call(t,"t")&&p.onnx.TensorProto.encode(t.t,c.uint32(42).fork()).ldelim(),t.g!=null&&Object.hasOwnProperty.call(t,"g")&&p.onnx.GraphProto.encode(t.g,c.uint32(50).fork()).ldelim(),t.floats!=null&&t.floats.length){c.uint32(58).fork();for(var s=0;s<t.floats.length;++s)c.float(t.floats[s]);c.ldelim()}if(t.ints!=null&&t.ints.length){c.uint32(66).fork();for(var s=0;s<t.ints.length;++s)c.int64(t.ints[s]);c.ldelim()}if(t.strings!=null&&t.strings.length)for(var s=0;s<t.strings.length;++s)c.uint32(74).bytes(t.strings[s]);if(t.tensors!=null&&t.tensors.length)for(var s=0;s<t.tensors.length;++s)p.onnx.TensorProto.encode(t.tensors[s],c.uint32(82).fork()).ldelim();if(t.graphs!=null&&t.graphs.length)for(var s=0;s<t.graphs.length;++s)p.onnx.GraphProto.encode(t.graphs[s],c.uint32(90).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&c.uint32(106).string(t.docString),t.tp!=null&&Object.hasOwnProperty.call(t,"tp")&&p.onnx.TypeProto.encode(t.tp,c.uint32(114).fork()).ldelim(),t.typeProtos!=null&&t.typeProtos.length)for(var s=0;s<t.typeProtos.length;++s)p.onnx.TypeProto.encode(t.typeProtos[s],c.uint32(122).fork()).ldelim();if(t.type!=null&&Object.hasOwnProperty.call(t,"type")&&c.uint32(160).int32(t.type),t.refAttrName!=null&&Object.hasOwnProperty.call(t,"refAttrName")&&c.uint32(170).string(t.refAttrName),t.sparseTensor!=null&&Object.hasOwnProperty.call(t,"sparseTensor")&&p.onnx.SparseTensorProto.encode(t.sparseTensor,c.uint32(178).fork()).ldelim(),t.sparseTensors!=null&&t.sparseTensors.length)for(var s=0;s<t.sparseTensors.length;++s)p.onnx.SparseTensorProto.encode(t.sparseTensors[s],c.uint32(186).fork()).ldelim();return c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.AttributeProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.name=t.string();break}case 21:{d.refAttrName=t.string();break}case 13:{d.docString=t.string();break}case 20:{d.type=t.int32();break}case 2:{d.f=t.float();break}case 3:{d.i=t.int64();break}case 4:{d.s=t.bytes();break}case 5:{d.t=p.onnx.TensorProto.decode(t,t.uint32());break}case 6:{d.g=p.onnx.GraphProto.decode(t,t.uint32());break}case 22:{d.sparseTensor=p.onnx.SparseTensorProto.decode(t,t.uint32());break}case 14:{d.tp=p.onnx.TypeProto.decode(t,t.uint32());break}case 7:{if(d.floats&&d.floats.length||(d.floats=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.floats.push(t.float());else d.floats.push(t.float());break}case 8:{if(d.ints&&d.ints.length||(d.ints=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.ints.push(t.int64());else d.ints.push(t.int64());break}case 9:{d.strings&&d.strings.length||(d.strings=[]),d.strings.push(t.bytes());break}case 10:{d.tensors&&d.tensors.length||(d.tensors=[]),d.tensors.push(p.onnx.TensorProto.decode(t,t.uint32()));break}case 11:{d.graphs&&d.graphs.length||(d.graphs=[]),d.graphs.push(p.onnx.GraphProto.decode(t,t.uint32()));break}case 23:{d.sparseTensors&&d.sparseTensors.length||(d.sparseTensors=[]),d.sparseTensors.push(p.onnx.SparseTensorProto.decode(t,t.uint32()));break}case 15:{d.typeProtos&&d.typeProtos.length||(d.typeProtos=[]),d.typeProtos.push(p.onnx.TypeProto.decode(t,t.uint32()));break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!u.isString(t.name))return"name: string expected";if(t.refAttrName!=null&&t.hasOwnProperty("refAttrName")&&!u.isString(t.refAttrName))return"refAttrName: string expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!u.isString(t.docString))return"docString: string expected";if(t.type!=null&&t.hasOwnProperty("type"))switch(t.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:break}if(t.f!=null&&t.hasOwnProperty("f")&&typeof t.f!="number")return"f: number expected";if(t.i!=null&&t.hasOwnProperty("i")&&!u.isInteger(t.i)&&!(t.i&&u.isInteger(t.i.low)&&u.isInteger(t.i.high)))return"i: integer|Long expected";if(t.s!=null&&t.hasOwnProperty("s")&&!(t.s&&typeof t.s.length=="number"||u.isString(t.s)))return"s: buffer expected";if(t.t!=null&&t.hasOwnProperty("t")){var c=p.onnx.TensorProto.verify(t.t);if(c)return"t."+c}if(t.g!=null&&t.hasOwnProperty("g")){var c=p.onnx.GraphProto.verify(t.g);if(c)return"g."+c}if(t.sparseTensor!=null&&t.hasOwnProperty("sparseTensor")){var c=p.onnx.SparseTensorProto.verify(t.sparseTensor);if(c)return"sparseTensor."+c}if(t.tp!=null&&t.hasOwnProperty("tp")){var c=p.onnx.TypeProto.verify(t.tp);if(c)return"tp."+c}if(t.floats!=null&&t.hasOwnProperty("floats")){if(!Array.isArray(t.floats))return"floats: array expected";for(var s=0;s<t.floats.length;++s)if(typeof t.floats[s]!="number")return"floats: number[] expected"}if(t.ints!=null&&t.hasOwnProperty("ints")){if(!Array.isArray(t.ints))return"ints: array expected";for(var s=0;s<t.ints.length;++s)if(!u.isInteger(t.ints[s])&&!(t.ints[s]&&u.isInteger(t.ints[s].low)&&u.isInteger(t.ints[s].high)))return"ints: integer|Long[] expected"}if(t.strings!=null&&t.hasOwnProperty("strings")){if(!Array.isArray(t.strings))return"strings: array expected";for(var s=0;s<t.strings.length;++s)if(!(t.strings[s]&&typeof t.strings[s].length=="number"||u.isString(t.strings[s])))return"strings: buffer[] expected"}if(t.tensors!=null&&t.hasOwnProperty("tensors")){if(!Array.isArray(t.tensors))return"tensors: array expected";for(var s=0;s<t.tensors.length;++s){var c=p.onnx.TensorProto.verify(t.tensors[s]);if(c)return"tensors."+c}}if(t.graphs!=null&&t.hasOwnProperty("graphs")){if(!Array.isArray(t.graphs))return"graphs: array expected";for(var s=0;s<t.graphs.length;++s){var c=p.onnx.GraphProto.verify(t.graphs[s]);if(c)return"graphs."+c}}if(t.sparseTensors!=null&&t.hasOwnProperty("sparseTensors")){if(!Array.isArray(t.sparseTensors))return"sparseTensors: array expected";for(var s=0;s<t.sparseTensors.length;++s){var c=p.onnx.SparseTensorProto.verify(t.sparseTensors[s]);if(c)return"sparseTensors."+c}}if(t.typeProtos!=null&&t.hasOwnProperty("typeProtos")){if(!Array.isArray(t.typeProtos))return"typeProtos: array expected";for(var s=0;s<t.typeProtos.length;++s){var c=p.onnx.TypeProto.verify(t.typeProtos[s]);if(c)return"typeProtos."+c}}return null},a.fromObject=function(t){if(t instanceof p.onnx.AttributeProto)return t;var c=new p.onnx.AttributeProto;switch(t.name!=null&&(c.name=String(t.name)),t.refAttrName!=null&&(c.refAttrName=String(t.refAttrName)),t.docString!=null&&(c.docString=String(t.docString)),t.type){default:if(typeof t.type=="number"){c.type=t.type;break}break;case"UNDEFINED":case 0:c.type=0;break;case"FLOAT":case 1:c.type=1;break;case"INT":case 2:c.type=2;break;case"STRING":case 3:c.type=3;break;case"TENSOR":case 4:c.type=4;break;case"GRAPH":case 5:c.type=5;break;case"SPARSE_TENSOR":case 11:c.type=11;break;case"TYPE_PROTO":case 13:c.type=13;break;case"FLOATS":case 6:c.type=6;break;case"INTS":case 7:c.type=7;break;case"STRINGS":case 8:c.type=8;break;case"TENSORS":case 9:c.type=9;break;case"GRAPHS":case 10:c.type=10;break;case"SPARSE_TENSORS":case 12:c.type=12;break;case"TYPE_PROTOS":case 14:c.type=14;break}if(t.f!=null&&(c.f=Number(t.f)),t.i!=null&&(u.Long?(c.i=u.Long.fromValue(t.i)).unsigned=!1:typeof t.i=="string"?c.i=parseInt(t.i,10):typeof t.i=="number"?c.i=t.i:typeof t.i=="object"&&(c.i=new u.LongBits(t.i.low>>>0,t.i.high>>>0).toNumber())),t.s!=null&&(typeof t.s=="string"?u.base64.decode(t.s,c.s=u.newBuffer(u.base64.length(t.s)),0):t.s.length>=0&&(c.s=t.s)),t.t!=null){if(typeof t.t!="object")throw TypeError(".onnx.AttributeProto.t: object expected");c.t=p.onnx.TensorProto.fromObject(t.t)}if(t.g!=null){if(typeof t.g!="object")throw TypeError(".onnx.AttributeProto.g: object expected");c.g=p.onnx.GraphProto.fromObject(t.g)}if(t.sparseTensor!=null){if(typeof t.sparseTensor!="object")throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");c.sparseTensor=p.onnx.SparseTensorProto.fromObject(t.sparseTensor)}if(t.tp!=null){if(typeof t.tp!="object")throw TypeError(".onnx.AttributeProto.tp: object expected");c.tp=p.onnx.TypeProto.fromObject(t.tp)}if(t.floats){if(!Array.isArray(t.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");c.floats=[];for(var s=0;s<t.floats.length;++s)c.floats[s]=Number(t.floats[s])}if(t.ints){if(!Array.isArray(t.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");c.ints=[];for(var s=0;s<t.ints.length;++s)u.Long?(c.ints[s]=u.Long.fromValue(t.ints[s])).unsigned=!1:typeof t.ints[s]=="string"?c.ints[s]=parseInt(t.ints[s],10):typeof t.ints[s]=="number"?c.ints[s]=t.ints[s]:typeof t.ints[s]=="object"&&(c.ints[s]=new u.LongBits(t.ints[s].low>>>0,t.ints[s].high>>>0).toNumber())}if(t.strings){if(!Array.isArray(t.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");c.strings=[];for(var s=0;s<t.strings.length;++s)typeof t.strings[s]=="string"?u.base64.decode(t.strings[s],c.strings[s]=u.newBuffer(u.base64.length(t.strings[s])),0):t.strings[s].length>=0&&(c.strings[s]=t.strings[s])}if(t.tensors){if(!Array.isArray(t.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");c.tensors=[];for(var s=0;s<t.tensors.length;++s){if(typeof t.tensors[s]!="object")throw TypeError(".onnx.AttributeProto.tensors: object expected");c.tensors[s]=p.onnx.TensorProto.fromObject(t.tensors[s])}}if(t.graphs){if(!Array.isArray(t.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");c.graphs=[];for(var s=0;s<t.graphs.length;++s){if(typeof t.graphs[s]!="object")throw TypeError(".onnx.AttributeProto.graphs: object expected");c.graphs[s]=p.onnx.GraphProto.fromObject(t.graphs[s])}}if(t.sparseTensors){if(!Array.isArray(t.sparseTensors))throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");c.sparseTensors=[];for(var s=0;s<t.sparseTensors.length;++s){if(typeof t.sparseTensors[s]!="object")throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");c.sparseTensors[s]=p.onnx.SparseTensorProto.fromObject(t.sparseTensors[s])}}if(t.typeProtos){if(!Array.isArray(t.typeProtos))throw TypeError(".onnx.AttributeProto.typeProtos: array expected");c.typeProtos=[];for(var s=0;s<t.typeProtos.length;++s){if(typeof t.typeProtos[s]!="object")throw TypeError(".onnx.AttributeProto.typeProtos: object expected");c.typeProtos[s]=p.onnx.TypeProto.fromObject(t.typeProtos[s])}}return c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.floats=[],s.ints=[],s.strings=[],s.tensors=[],s.graphs=[],s.typeProtos=[],s.sparseTensors=[]),c.defaults){if(s.name="",s.f=0,u.Long){var d=new u.Long(0,0,!1);s.i=c.longs===String?d.toString():c.longs===Number?d.toNumber():d}else s.i=c.longs===String?"0":0;c.bytes===String?s.s="":(s.s=[],c.bytes!==Array&&(s.s=u.newBuffer(s.s))),s.t=null,s.g=null,s.docString="",s.tp=null,s.type=c.enums===String?"UNDEFINED":0,s.refAttrName="",s.sparseTensor=null}if(t.name!=null&&t.hasOwnProperty("name")&&(s.name=t.name),t.f!=null&&t.hasOwnProperty("f")&&(s.f=c.json&&!isFinite(t.f)?String(t.f):t.f),t.i!=null&&t.hasOwnProperty("i")&&(typeof t.i=="number"?s.i=c.longs===String?String(t.i):t.i:s.i=c.longs===String?u.Long.prototype.toString.call(t.i):c.longs===Number?new u.LongBits(t.i.low>>>0,t.i.high>>>0).toNumber():t.i),t.s!=null&&t.hasOwnProperty("s")&&(s.s=c.bytes===String?u.base64.encode(t.s,0,t.s.length):c.bytes===Array?Array.prototype.slice.call(t.s):t.s),t.t!=null&&t.hasOwnProperty("t")&&(s.t=p.onnx.TensorProto.toObject(t.t,c)),t.g!=null&&t.hasOwnProperty("g")&&(s.g=p.onnx.GraphProto.toObject(t.g,c)),t.floats&&t.floats.length){s.floats=[];for(var f=0;f<t.floats.length;++f)s.floats[f]=c.json&&!isFinite(t.floats[f])?String(t.floats[f]):t.floats[f]}if(t.ints&&t.ints.length){s.ints=[];for(var f=0;f<t.ints.length;++f)typeof t.ints[f]=="number"?s.ints[f]=c.longs===String?String(t.ints[f]):t.ints[f]:s.ints[f]=c.longs===String?u.Long.prototype.toString.call(t.ints[f]):c.longs===Number?new u.LongBits(t.ints[f].low>>>0,t.ints[f].high>>>0).toNumber():t.ints[f]}if(t.strings&&t.strings.length){s.strings=[];for(var f=0;f<t.strings.length;++f)s.strings[f]=c.bytes===String?u.base64.encode(t.strings[f],0,t.strings[f].length):c.bytes===Array?Array.prototype.slice.call(t.strings[f]):t.strings[f]}if(t.tensors&&t.tensors.length){s.tensors=[];for(var f=0;f<t.tensors.length;++f)s.tensors[f]=p.onnx.TensorProto.toObject(t.tensors[f],c)}if(t.graphs&&t.graphs.length){s.graphs=[];for(var f=0;f<t.graphs.length;++f)s.graphs[f]=p.onnx.GraphProto.toObject(t.graphs[f],c)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(s.docString=t.docString),t.tp!=null&&t.hasOwnProperty("tp")&&(s.tp=p.onnx.TypeProto.toObject(t.tp,c)),t.typeProtos&&t.typeProtos.length){s.typeProtos=[];for(var f=0;f<t.typeProtos.length;++f)s.typeProtos[f]=p.onnx.TypeProto.toObject(t.typeProtos[f],c)}if(t.type!=null&&t.hasOwnProperty("type")&&(s.type=c.enums===String?p.onnx.AttributeProto.AttributeType[t.type]===void 0?t.type:p.onnx.AttributeProto.AttributeType[t.type]:t.type),t.refAttrName!=null&&t.hasOwnProperty("refAttrName")&&(s.refAttrName=t.refAttrName),t.sparseTensor!=null&&t.hasOwnProperty("sparseTensor")&&(s.sparseTensor=p.onnx.SparseTensorProto.toObject(t.sparseTensor,c)),t.sparseTensors&&t.sparseTensors.length){s.sparseTensors=[];for(var f=0;f<t.sparseTensors.length;++f)s.sparseTensors[f]=p.onnx.SparseTensorProto.toObject(t.sparseTensors[f],c)}return s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.AttributeProto"},a.AttributeType=function(){var t={},c=Object.create(t);return c[t[0]="UNDEFINED"]=0,c[t[1]="FLOAT"]=1,c[t[2]="INT"]=2,c[t[3]="STRING"]=3,c[t[4]="TENSOR"]=4,c[t[5]="GRAPH"]=5,c[t[11]="SPARSE_TENSOR"]=11,c[t[13]="TYPE_PROTO"]=13,c[t[6]="FLOATS"]=6,c[t[7]="INTS"]=7,c[t[8]="STRINGS"]=8,c[t[9]="TENSORS"]=9,c[t[10]="GRAPHS"]=10,c[t[12]="SPARSE_TENSORS"]=12,c[t[14]="TYPE_PROTOS"]=14,c}(),a}(),i.ValueInfoProto=function(){function a(t){if(t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.name="",a.prototype.type=null,a.prototype.docString="",a.create=function(t){return new a(t)},a.encode=function(t,c){return c||(c=l.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&c.uint32(10).string(t.name),t.type!=null&&Object.hasOwnProperty.call(t,"type")&&p.onnx.TypeProto.encode(t.type,c.uint32(18).fork()).ldelim(),t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&c.uint32(26).string(t.docString),c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.ValueInfoProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.name=t.string();break}case 2:{d.type=p.onnx.TypeProto.decode(t,t.uint32());break}case 3:{d.docString=t.string();break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!u.isString(t.name))return"name: string expected";if(t.type!=null&&t.hasOwnProperty("type")){var c=p.onnx.TypeProto.verify(t.type);if(c)return"type."+c}return t.docString!=null&&t.hasOwnProperty("docString")&&!u.isString(t.docString)?"docString: string expected":null},a.fromObject=function(t){if(t instanceof p.onnx.ValueInfoProto)return t;var c=new p.onnx.ValueInfoProto;if(t.name!=null&&(c.name=String(t.name)),t.type!=null){if(typeof t.type!="object")throw TypeError(".onnx.ValueInfoProto.type: object expected");c.type=p.onnx.TypeProto.fromObject(t.type)}return t.docString!=null&&(c.docString=String(t.docString)),c},a.toObject=function(t,c){c||(c={});var s={};return c.defaults&&(s.name="",s.type=null,s.docString=""),t.name!=null&&t.hasOwnProperty("name")&&(s.name=t.name),t.type!=null&&t.hasOwnProperty("type")&&(s.type=p.onnx.TypeProto.toObject(t.type,c)),t.docString!=null&&t.hasOwnProperty("docString")&&(s.docString=t.docString),s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.ValueInfoProto"},a}(),i.NodeProto=function(){function a(t){if(this.input=[],this.output=[],this.attribute=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.input=u.emptyArray,a.prototype.output=u.emptyArray,a.prototype.name="",a.prototype.opType="",a.prototype.domain="",a.prototype.attribute=u.emptyArray,a.prototype.docString="",a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.input!=null&&t.input.length)for(var s=0;s<t.input.length;++s)c.uint32(10).string(t.input[s]);if(t.output!=null&&t.output.length)for(var s=0;s<t.output.length;++s)c.uint32(18).string(t.output[s]);if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&c.uint32(26).string(t.name),t.opType!=null&&Object.hasOwnProperty.call(t,"opType")&&c.uint32(34).string(t.opType),t.attribute!=null&&t.attribute.length)for(var s=0;s<t.attribute.length;++s)p.onnx.AttributeProto.encode(t.attribute[s],c.uint32(42).fork()).ldelim();return t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&c.uint32(50).string(t.docString),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&c.uint32(58).string(t.domain),c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.NodeProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.input&&d.input.length||(d.input=[]),d.input.push(t.string());break}case 2:{d.output&&d.output.length||(d.output=[]),d.output.push(t.string());break}case 3:{d.name=t.string();break}case 4:{d.opType=t.string();break}case 7:{d.domain=t.string();break}case 5:{d.attribute&&d.attribute.length||(d.attribute=[]),d.attribute.push(p.onnx.AttributeProto.decode(t,t.uint32()));break}case 6:{d.docString=t.string();break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var c=0;c<t.input.length;++c)if(!u.isString(t.input[c]))return"input: string[] expected"}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var c=0;c<t.output.length;++c)if(!u.isString(t.output[c]))return"output: string[] expected"}if(t.name!=null&&t.hasOwnProperty("name")&&!u.isString(t.name))return"name: string expected";if(t.opType!=null&&t.hasOwnProperty("opType")&&!u.isString(t.opType))return"opType: string expected";if(t.domain!=null&&t.hasOwnProperty("domain")&&!u.isString(t.domain))return"domain: string expected";if(t.attribute!=null&&t.hasOwnProperty("attribute")){if(!Array.isArray(t.attribute))return"attribute: array expected";for(var c=0;c<t.attribute.length;++c){var s=p.onnx.AttributeProto.verify(t.attribute[c]);if(s)return"attribute."+s}}return t.docString!=null&&t.hasOwnProperty("docString")&&!u.isString(t.docString)?"docString: string expected":null},a.fromObject=function(t){if(t instanceof p.onnx.NodeProto)return t;var c=new p.onnx.NodeProto;if(t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.NodeProto.input: array expected");c.input=[];for(var s=0;s<t.input.length;++s)c.input[s]=String(t.input[s])}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.NodeProto.output: array expected");c.output=[];for(var s=0;s<t.output.length;++s)c.output[s]=String(t.output[s])}if(t.name!=null&&(c.name=String(t.name)),t.opType!=null&&(c.opType=String(t.opType)),t.domain!=null&&(c.domain=String(t.domain)),t.attribute){if(!Array.isArray(t.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");c.attribute=[];for(var s=0;s<t.attribute.length;++s){if(typeof t.attribute[s]!="object")throw TypeError(".onnx.NodeProto.attribute: object expected");c.attribute[s]=p.onnx.AttributeProto.fromObject(t.attribute[s])}}return t.docString!=null&&(c.docString=String(t.docString)),c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.input=[],s.output=[],s.attribute=[]),c.defaults&&(s.name="",s.opType="",s.docString="",s.domain=""),t.input&&t.input.length){s.input=[];for(var d=0;d<t.input.length;++d)s.input[d]=t.input[d]}if(t.output&&t.output.length){s.output=[];for(var d=0;d<t.output.length;++d)s.output[d]=t.output[d]}if(t.name!=null&&t.hasOwnProperty("name")&&(s.name=t.name),t.opType!=null&&t.hasOwnProperty("opType")&&(s.opType=t.opType),t.attribute&&t.attribute.length){s.attribute=[];for(var d=0;d<t.attribute.length;++d)s.attribute[d]=p.onnx.AttributeProto.toObject(t.attribute[d],c)}return t.docString!=null&&t.hasOwnProperty("docString")&&(s.docString=t.docString),t.domain!=null&&t.hasOwnProperty("domain")&&(s.domain=t.domain),s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.NodeProto"},a}(),i.TrainingInfoProto=function(){function a(t){if(this.initializationBinding=[],this.updateBinding=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.initialization=null,a.prototype.algorithm=null,a.prototype.initializationBinding=u.emptyArray,a.prototype.updateBinding=u.emptyArray,a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.initialization!=null&&Object.hasOwnProperty.call(t,"initialization")&&p.onnx.GraphProto.encode(t.initialization,c.uint32(10).fork()).ldelim(),t.algorithm!=null&&Object.hasOwnProperty.call(t,"algorithm")&&p.onnx.GraphProto.encode(t.algorithm,c.uint32(18).fork()).ldelim(),t.initializationBinding!=null&&t.initializationBinding.length)for(var s=0;s<t.initializationBinding.length;++s)p.onnx.StringStringEntryProto.encode(t.initializationBinding[s],c.uint32(26).fork()).ldelim();if(t.updateBinding!=null&&t.updateBinding.length)for(var s=0;s<t.updateBinding.length;++s)p.onnx.StringStringEntryProto.encode(t.updateBinding[s],c.uint32(34).fork()).ldelim();return c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.TrainingInfoProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.initialization=p.onnx.GraphProto.decode(t,t.uint32());break}case 2:{d.algorithm=p.onnx.GraphProto.decode(t,t.uint32());break}case 3:{d.initializationBinding&&d.initializationBinding.length||(d.initializationBinding=[]),d.initializationBinding.push(p.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 4:{d.updateBinding&&d.updateBinding.length||(d.updateBinding=[]),d.updateBinding.push(p.onnx.StringStringEntryProto.decode(t,t.uint32()));break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.initialization!=null&&t.hasOwnProperty("initialization")){var c=p.onnx.GraphProto.verify(t.initialization);if(c)return"initialization."+c}if(t.algorithm!=null&&t.hasOwnProperty("algorithm")){var c=p.onnx.GraphProto.verify(t.algorithm);if(c)return"algorithm."+c}if(t.initializationBinding!=null&&t.hasOwnProperty("initializationBinding")){if(!Array.isArray(t.initializationBinding))return"initializationBinding: array expected";for(var s=0;s<t.initializationBinding.length;++s){var c=p.onnx.StringStringEntryProto.verify(t.initializationBinding[s]);if(c)return"initializationBinding."+c}}if(t.updateBinding!=null&&t.hasOwnProperty("updateBinding")){if(!Array.isArray(t.updateBinding))return"updateBinding: array expected";for(var s=0;s<t.updateBinding.length;++s){var c=p.onnx.StringStringEntryProto.verify(t.updateBinding[s]);if(c)return"updateBinding."+c}}return null},a.fromObject=function(t){if(t instanceof p.onnx.TrainingInfoProto)return t;var c=new p.onnx.TrainingInfoProto;if(t.initialization!=null){if(typeof t.initialization!="object")throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");c.initialization=p.onnx.GraphProto.fromObject(t.initialization)}if(t.algorithm!=null){if(typeof t.algorithm!="object")throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");c.algorithm=p.onnx.GraphProto.fromObject(t.algorithm)}if(t.initializationBinding){if(!Array.isArray(t.initializationBinding))throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");c.initializationBinding=[];for(var s=0;s<t.initializationBinding.length;++s){if(typeof t.initializationBinding[s]!="object")throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");c.initializationBinding[s]=p.onnx.StringStringEntryProto.fromObject(t.initializationBinding[s])}}if(t.updateBinding){if(!Array.isArray(t.updateBinding))throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");c.updateBinding=[];for(var s=0;s<t.updateBinding.length;++s){if(typeof t.updateBinding[s]!="object")throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");c.updateBinding[s]=p.onnx.StringStringEntryProto.fromObject(t.updateBinding[s])}}return c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.initializationBinding=[],s.updateBinding=[]),c.defaults&&(s.initialization=null,s.algorithm=null),t.initialization!=null&&t.hasOwnProperty("initialization")&&(s.initialization=p.onnx.GraphProto.toObject(t.initialization,c)),t.algorithm!=null&&t.hasOwnProperty("algorithm")&&(s.algorithm=p.onnx.GraphProto.toObject(t.algorithm,c)),t.initializationBinding&&t.initializationBinding.length){s.initializationBinding=[];for(var d=0;d<t.initializationBinding.length;++d)s.initializationBinding[d]=p.onnx.StringStringEntryProto.toObject(t.initializationBinding[d],c)}if(t.updateBinding&&t.updateBinding.length){s.updateBinding=[];for(var d=0;d<t.updateBinding.length;++d)s.updateBinding[d]=p.onnx.StringStringEntryProto.toObject(t.updateBinding[d],c)}return s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TrainingInfoProto"},a}(),i.ModelProto=function(){function a(t){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.irVersion=u.Long?u.Long.fromBits(0,0,!1):0,a.prototype.opsetImport=u.emptyArray,a.prototype.producerName="",a.prototype.producerVersion="",a.prototype.domain="",a.prototype.modelVersion=u.Long?u.Long.fromBits(0,0,!1):0,a.prototype.docString="",a.prototype.graph=null,a.prototype.metadataProps=u.emptyArray,a.prototype.trainingInfo=u.emptyArray,a.prototype.functions=u.emptyArray,a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.irVersion!=null&&Object.hasOwnProperty.call(t,"irVersion")&&c.uint32(8).int64(t.irVersion),t.producerName!=null&&Object.hasOwnProperty.call(t,"producerName")&&c.uint32(18).string(t.producerName),t.producerVersion!=null&&Object.hasOwnProperty.call(t,"producerVersion")&&c.uint32(26).string(t.producerVersion),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&c.uint32(34).string(t.domain),t.modelVersion!=null&&Object.hasOwnProperty.call(t,"modelVersion")&&c.uint32(40).int64(t.modelVersion),t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&c.uint32(50).string(t.docString),t.graph!=null&&Object.hasOwnProperty.call(t,"graph")&&p.onnx.GraphProto.encode(t.graph,c.uint32(58).fork()).ldelim(),t.opsetImport!=null&&t.opsetImport.length)for(var s=0;s<t.opsetImport.length;++s)p.onnx.OperatorSetIdProto.encode(t.opsetImport[s],c.uint32(66).fork()).ldelim();if(t.metadataProps!=null&&t.metadataProps.length)for(var s=0;s<t.metadataProps.length;++s)p.onnx.StringStringEntryProto.encode(t.metadataProps[s],c.uint32(114).fork()).ldelim();if(t.trainingInfo!=null&&t.trainingInfo.length)for(var s=0;s<t.trainingInfo.length;++s)p.onnx.TrainingInfoProto.encode(t.trainingInfo[s],c.uint32(162).fork()).ldelim();if(t.functions!=null&&t.functions.length)for(var s=0;s<t.functions.length;++s)p.onnx.FunctionProto.encode(t.functions[s],c.uint32(202).fork()).ldelim();return c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.ModelProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.irVersion=t.int64();break}case 8:{d.opsetImport&&d.opsetImport.length||(d.opsetImport=[]),d.opsetImport.push(p.onnx.OperatorSetIdProto.decode(t,t.uint32()));break}case 2:{d.producerName=t.string();break}case 3:{d.producerVersion=t.string();break}case 4:{d.domain=t.string();break}case 5:{d.modelVersion=t.int64();break}case 6:{d.docString=t.string();break}case 7:{d.graph=p.onnx.GraphProto.decode(t,t.uint32());break}case 14:{d.metadataProps&&d.metadataProps.length||(d.metadataProps=[]),d.metadataProps.push(p.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 20:{d.trainingInfo&&d.trainingInfo.length||(d.trainingInfo=[]),d.trainingInfo.push(p.onnx.TrainingInfoProto.decode(t,t.uint32()));break}case 25:{d.functions&&d.functions.length||(d.functions=[]),d.functions.push(p.onnx.FunctionProto.decode(t,t.uint32()));break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.irVersion!=null&&t.hasOwnProperty("irVersion")&&!u.isInteger(t.irVersion)&&!(t.irVersion&&u.isInteger(t.irVersion.low)&&u.isInteger(t.irVersion.high)))return"irVersion: integer|Long expected";if(t.opsetImport!=null&&t.hasOwnProperty("opsetImport")){if(!Array.isArray(t.opsetImport))return"opsetImport: array expected";for(var c=0;c<t.opsetImport.length;++c){var s=p.onnx.OperatorSetIdProto.verify(t.opsetImport[c]);if(s)return"opsetImport."+s}}if(t.producerName!=null&&t.hasOwnProperty("producerName")&&!u.isString(t.producerName))return"producerName: string expected";if(t.producerVersion!=null&&t.hasOwnProperty("producerVersion")&&!u.isString(t.producerVersion))return"producerVersion: string expected";if(t.domain!=null&&t.hasOwnProperty("domain")&&!u.isString(t.domain))return"domain: string expected";if(t.modelVersion!=null&&t.hasOwnProperty("modelVersion")&&!u.isInteger(t.modelVersion)&&!(t.modelVersion&&u.isInteger(t.modelVersion.low)&&u.isInteger(t.modelVersion.high)))return"modelVersion: integer|Long expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!u.isString(t.docString))return"docString: string expected";if(t.graph!=null&&t.hasOwnProperty("graph")){var s=p.onnx.GraphProto.verify(t.graph);if(s)return"graph."+s}if(t.metadataProps!=null&&t.hasOwnProperty("metadataProps")){if(!Array.isArray(t.metadataProps))return"metadataProps: array expected";for(var c=0;c<t.metadataProps.length;++c){var s=p.onnx.StringStringEntryProto.verify(t.metadataProps[c]);if(s)return"metadataProps."+s}}if(t.trainingInfo!=null&&t.hasOwnProperty("trainingInfo")){if(!Array.isArray(t.trainingInfo))return"trainingInfo: array expected";for(var c=0;c<t.trainingInfo.length;++c){var s=p.onnx.TrainingInfoProto.verify(t.trainingInfo[c]);if(s)return"trainingInfo."+s}}if(t.functions!=null&&t.hasOwnProperty("functions")){if(!Array.isArray(t.functions))return"functions: array expected";for(var c=0;c<t.functions.length;++c){var s=p.onnx.FunctionProto.verify(t.functions[c]);if(s)return"functions."+s}}return null},a.fromObject=function(t){if(t instanceof p.onnx.ModelProto)return t;var c=new p.onnx.ModelProto;if(t.irVersion!=null&&(u.Long?(c.irVersion=u.Long.fromValue(t.irVersion)).unsigned=!1:typeof t.irVersion=="string"?c.irVersion=parseInt(t.irVersion,10):typeof t.irVersion=="number"?c.irVersion=t.irVersion:typeof t.irVersion=="object"&&(c.irVersion=new u.LongBits(t.irVersion.low>>>0,t.irVersion.high>>>0).toNumber())),t.opsetImport){if(!Array.isArray(t.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");c.opsetImport=[];for(var s=0;s<t.opsetImport.length;++s){if(typeof t.opsetImport[s]!="object")throw TypeError(".onnx.ModelProto.opsetImport: object expected");c.opsetImport[s]=p.onnx.OperatorSetIdProto.fromObject(t.opsetImport[s])}}if(t.producerName!=null&&(c.producerName=String(t.producerName)),t.producerVersion!=null&&(c.producerVersion=String(t.producerVersion)),t.domain!=null&&(c.domain=String(t.domain)),t.modelVersion!=null&&(u.Long?(c.modelVersion=u.Long.fromValue(t.modelVersion)).unsigned=!1:typeof t.modelVersion=="string"?c.modelVersion=parseInt(t.modelVersion,10):typeof t.modelVersion=="number"?c.modelVersion=t.modelVersion:typeof t.modelVersion=="object"&&(c.modelVersion=new u.LongBits(t.modelVersion.low>>>0,t.modelVersion.high>>>0).toNumber())),t.docString!=null&&(c.docString=String(t.docString)),t.graph!=null){if(typeof t.graph!="object")throw TypeError(".onnx.ModelProto.graph: object expected");c.graph=p.onnx.GraphProto.fromObject(t.graph)}if(t.metadataProps){if(!Array.isArray(t.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");c.metadataProps=[];for(var s=0;s<t.metadataProps.length;++s){if(typeof t.metadataProps[s]!="object")throw TypeError(".onnx.ModelProto.metadataProps: object expected");c.metadataProps[s]=p.onnx.StringStringEntryProto.fromObject(t.metadataProps[s])}}if(t.trainingInfo){if(!Array.isArray(t.trainingInfo))throw TypeError(".onnx.ModelProto.trainingInfo: array expected");c.trainingInfo=[];for(var s=0;s<t.trainingInfo.length;++s){if(typeof t.trainingInfo[s]!="object")throw TypeError(".onnx.ModelProto.trainingInfo: object expected");c.trainingInfo[s]=p.onnx.TrainingInfoProto.fromObject(t.trainingInfo[s])}}if(t.functions){if(!Array.isArray(t.functions))throw TypeError(".onnx.ModelProto.functions: array expected");c.functions=[];for(var s=0;s<t.functions.length;++s){if(typeof t.functions[s]!="object")throw TypeError(".onnx.ModelProto.functions: object expected");c.functions[s]=p.onnx.FunctionProto.fromObject(t.functions[s])}}return c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.opsetImport=[],s.metadataProps=[],s.trainingInfo=[],s.functions=[]),c.defaults){if(u.Long){var d=new u.Long(0,0,!1);s.irVersion=c.longs===String?d.toString():c.longs===Number?d.toNumber():d}else s.irVersion=c.longs===String?"0":0;if(s.producerName="",s.producerVersion="",s.domain="",u.Long){var d=new u.Long(0,0,!1);s.modelVersion=c.longs===String?d.toString():c.longs===Number?d.toNumber():d}else s.modelVersion=c.longs===String?"0":0;s.docString="",s.graph=null}if(t.irVersion!=null&&t.hasOwnProperty("irVersion")&&(typeof t.irVersion=="number"?s.irVersion=c.longs===String?String(t.irVersion):t.irVersion:s.irVersion=c.longs===String?u.Long.prototype.toString.call(t.irVersion):c.longs===Number?new u.LongBits(t.irVersion.low>>>0,t.irVersion.high>>>0).toNumber():t.irVersion),t.producerName!=null&&t.hasOwnProperty("producerName")&&(s.producerName=t.producerName),t.producerVersion!=null&&t.hasOwnProperty("producerVersion")&&(s.producerVersion=t.producerVersion),t.domain!=null&&t.hasOwnProperty("domain")&&(s.domain=t.domain),t.modelVersion!=null&&t.hasOwnProperty("modelVersion")&&(typeof t.modelVersion=="number"?s.modelVersion=c.longs===String?String(t.modelVersion):t.modelVersion:s.modelVersion=c.longs===String?u.Long.prototype.toString.call(t.modelVersion):c.longs===Number?new u.LongBits(t.modelVersion.low>>>0,t.modelVersion.high>>>0).toNumber():t.modelVersion),t.docString!=null&&t.hasOwnProperty("docString")&&(s.docString=t.docString),t.graph!=null&&t.hasOwnProperty("graph")&&(s.graph=p.onnx.GraphProto.toObject(t.graph,c)),t.opsetImport&&t.opsetImport.length){s.opsetImport=[];for(var f=0;f<t.opsetImport.length;++f)s.opsetImport[f]=p.onnx.OperatorSetIdProto.toObject(t.opsetImport[f],c)}if(t.metadataProps&&t.metadataProps.length){s.metadataProps=[];for(var f=0;f<t.metadataProps.length;++f)s.metadataProps[f]=p.onnx.StringStringEntryProto.toObject(t.metadataProps[f],c)}if(t.trainingInfo&&t.trainingInfo.length){s.trainingInfo=[];for(var f=0;f<t.trainingInfo.length;++f)s.trainingInfo[f]=p.onnx.TrainingInfoProto.toObject(t.trainingInfo[f],c)}if(t.functions&&t.functions.length){s.functions=[];for(var f=0;f<t.functions.length;++f)s.functions[f]=p.onnx.FunctionProto.toObject(t.functions[f],c)}return s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.ModelProto"},a}(),i.StringStringEntryProto=function(){function a(t){if(t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.key="",a.prototype.value="",a.create=function(t){return new a(t)},a.encode=function(t,c){return c||(c=l.create()),t.key!=null&&Object.hasOwnProperty.call(t,"key")&&c.uint32(10).string(t.key),t.value!=null&&Object.hasOwnProperty.call(t,"value")&&c.uint32(18).string(t.value),c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.StringStringEntryProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.key=t.string();break}case 2:{d.value=t.string();break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){return typeof t!="object"||t===null?"object expected":t.key!=null&&t.hasOwnProperty("key")&&!u.isString(t.key)?"key: string expected":t.value!=null&&t.hasOwnProperty("value")&&!u.isString(t.value)?"value: string expected":null},a.fromObject=function(t){if(t instanceof p.onnx.StringStringEntryProto)return t;var c=new p.onnx.StringStringEntryProto;return t.key!=null&&(c.key=String(t.key)),t.value!=null&&(c.value=String(t.value)),c},a.toObject=function(t,c){c||(c={});var s={};return c.defaults&&(s.key="",s.value=""),t.key!=null&&t.hasOwnProperty("key")&&(s.key=t.key),t.value!=null&&t.hasOwnProperty("value")&&(s.value=t.value),s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.StringStringEntryProto"},a}(),i.TensorAnnotation=function(){function a(t){if(this.quantParameterTensorNames=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.tensorName="",a.prototype.quantParameterTensorNames=u.emptyArray,a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.tensorName!=null&&Object.hasOwnProperty.call(t,"tensorName")&&c.uint32(10).string(t.tensorName),t.quantParameterTensorNames!=null&&t.quantParameterTensorNames.length)for(var s=0;s<t.quantParameterTensorNames.length;++s)p.onnx.StringStringEntryProto.encode(t.quantParameterTensorNames[s],c.uint32(18).fork()).ldelim();return c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.TensorAnnotation;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.tensorName=t.string();break}case 2:{d.quantParameterTensorNames&&d.quantParameterTensorNames.length||(d.quantParameterTensorNames=[]),d.quantParameterTensorNames.push(p.onnx.StringStringEntryProto.decode(t,t.uint32()));break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.tensorName!=null&&t.hasOwnProperty("tensorName")&&!u.isString(t.tensorName))return"tensorName: string expected";if(t.quantParameterTensorNames!=null&&t.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(t.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var c=0;c<t.quantParameterTensorNames.length;++c){var s=p.onnx.StringStringEntryProto.verify(t.quantParameterTensorNames[c]);if(s)return"quantParameterTensorNames."+s}}return null},a.fromObject=function(t){if(t instanceof p.onnx.TensorAnnotation)return t;var c=new p.onnx.TensorAnnotation;if(t.tensorName!=null&&(c.tensorName=String(t.tensorName)),t.quantParameterTensorNames){if(!Array.isArray(t.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");c.quantParameterTensorNames=[];for(var s=0;s<t.quantParameterTensorNames.length;++s){if(typeof t.quantParameterTensorNames[s]!="object")throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");c.quantParameterTensorNames[s]=p.onnx.StringStringEntryProto.fromObject(t.quantParameterTensorNames[s])}}return c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.quantParameterTensorNames=[]),c.defaults&&(s.tensorName=""),t.tensorName!=null&&t.hasOwnProperty("tensorName")&&(s.tensorName=t.tensorName),t.quantParameterTensorNames&&t.quantParameterTensorNames.length){s.quantParameterTensorNames=[];for(var d=0;d<t.quantParameterTensorNames.length;++d)s.quantParameterTensorNames[d]=p.onnx.StringStringEntryProto.toObject(t.quantParameterTensorNames[d],c)}return s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorAnnotation"},a}(),i.GraphProto=function(){function a(t){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.node=u.emptyArray,a.prototype.name="",a.prototype.initializer=u.emptyArray,a.prototype.sparseInitializer=u.emptyArray,a.prototype.docString="",a.prototype.input=u.emptyArray,a.prototype.output=u.emptyArray,a.prototype.valueInfo=u.emptyArray,a.prototype.quantizationAnnotation=u.emptyArray,a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.node!=null&&t.node.length)for(var s=0;s<t.node.length;++s)p.onnx.NodeProto.encode(t.node[s],c.uint32(10).fork()).ldelim();if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&c.uint32(18).string(t.name),t.initializer!=null&&t.initializer.length)for(var s=0;s<t.initializer.length;++s)p.onnx.TensorProto.encode(t.initializer[s],c.uint32(42).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&c.uint32(82).string(t.docString),t.input!=null&&t.input.length)for(var s=0;s<t.input.length;++s)p.onnx.ValueInfoProto.encode(t.input[s],c.uint32(90).fork()).ldelim();if(t.output!=null&&t.output.length)for(var s=0;s<t.output.length;++s)p.onnx.ValueInfoProto.encode(t.output[s],c.uint32(98).fork()).ldelim();if(t.valueInfo!=null&&t.valueInfo.length)for(var s=0;s<t.valueInfo.length;++s)p.onnx.ValueInfoProto.encode(t.valueInfo[s],c.uint32(106).fork()).ldelim();if(t.quantizationAnnotation!=null&&t.quantizationAnnotation.length)for(var s=0;s<t.quantizationAnnotation.length;++s)p.onnx.TensorAnnotation.encode(t.quantizationAnnotation[s],c.uint32(114).fork()).ldelim();if(t.sparseInitializer!=null&&t.sparseInitializer.length)for(var s=0;s<t.sparseInitializer.length;++s)p.onnx.SparseTensorProto.encode(t.sparseInitializer[s],c.uint32(122).fork()).ldelim();return c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.GraphProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.node&&d.node.length||(d.node=[]),d.node.push(p.onnx.NodeProto.decode(t,t.uint32()));break}case 2:{d.name=t.string();break}case 5:{d.initializer&&d.initializer.length||(d.initializer=[]),d.initializer.push(p.onnx.TensorProto.decode(t,t.uint32()));break}case 15:{d.sparseInitializer&&d.sparseInitializer.length||(d.sparseInitializer=[]),d.sparseInitializer.push(p.onnx.SparseTensorProto.decode(t,t.uint32()));break}case 10:{d.docString=t.string();break}case 11:{d.input&&d.input.length||(d.input=[]),d.input.push(p.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 12:{d.output&&d.output.length||(d.output=[]),d.output.push(p.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 13:{d.valueInfo&&d.valueInfo.length||(d.valueInfo=[]),d.valueInfo.push(p.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 14:{d.quantizationAnnotation&&d.quantizationAnnotation.length||(d.quantizationAnnotation=[]),d.quantizationAnnotation.push(p.onnx.TensorAnnotation.decode(t,t.uint32()));break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.node!=null&&t.hasOwnProperty("node")){if(!Array.isArray(t.node))return"node: array expected";for(var c=0;c<t.node.length;++c){var s=p.onnx.NodeProto.verify(t.node[c]);if(s)return"node."+s}}if(t.name!=null&&t.hasOwnProperty("name")&&!u.isString(t.name))return"name: string expected";if(t.initializer!=null&&t.hasOwnProperty("initializer")){if(!Array.isArray(t.initializer))return"initializer: array expected";for(var c=0;c<t.initializer.length;++c){var s=p.onnx.TensorProto.verify(t.initializer[c]);if(s)return"initializer."+s}}if(t.sparseInitializer!=null&&t.hasOwnProperty("sparseInitializer")){if(!Array.isArray(t.sparseInitializer))return"sparseInitializer: array expected";for(var c=0;c<t.sparseInitializer.length;++c){var s=p.onnx.SparseTensorProto.verify(t.sparseInitializer[c]);if(s)return"sparseInitializer."+s}}if(t.docString!=null&&t.hasOwnProperty("docString")&&!u.isString(t.docString))return"docString: string expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var c=0;c<t.input.length;++c){var s=p.onnx.ValueInfoProto.verify(t.input[c]);if(s)return"input."+s}}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var c=0;c<t.output.length;++c){var s=p.onnx.ValueInfoProto.verify(t.output[c]);if(s)return"output."+s}}if(t.valueInfo!=null&&t.hasOwnProperty("valueInfo")){if(!Array.isArray(t.valueInfo))return"valueInfo: array expected";for(var c=0;c<t.valueInfo.length;++c){var s=p.onnx.ValueInfoProto.verify(t.valueInfo[c]);if(s)return"valueInfo."+s}}if(t.quantizationAnnotation!=null&&t.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(t.quantizationAnnotation))return"quantizationAnnotation: array expected";for(var c=0;c<t.quantizationAnnotation.length;++c){var s=p.onnx.TensorAnnotation.verify(t.quantizationAnnotation[c]);if(s)return"quantizationAnnotation."+s}}return null},a.fromObject=function(t){if(t instanceof p.onnx.GraphProto)return t;var c=new p.onnx.GraphProto;if(t.node){if(!Array.isArray(t.node))throw TypeError(".onnx.GraphProto.node: array expected");c.node=[];for(var s=0;s<t.node.length;++s){if(typeof t.node[s]!="object")throw TypeError(".onnx.GraphProto.node: object expected");c.node[s]=p.onnx.NodeProto.fromObject(t.node[s])}}if(t.name!=null&&(c.name=String(t.name)),t.initializer){if(!Array.isArray(t.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");c.initializer=[];for(var s=0;s<t.initializer.length;++s){if(typeof t.initializer[s]!="object")throw TypeError(".onnx.GraphProto.initializer: object expected");c.initializer[s]=p.onnx.TensorProto.fromObject(t.initializer[s])}}if(t.sparseInitializer){if(!Array.isArray(t.sparseInitializer))throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");c.sparseInitializer=[];for(var s=0;s<t.sparseInitializer.length;++s){if(typeof t.sparseInitializer[s]!="object")throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");c.sparseInitializer[s]=p.onnx.SparseTensorProto.fromObject(t.sparseInitializer[s])}}if(t.docString!=null&&(c.docString=String(t.docString)),t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.GraphProto.input: array expected");c.input=[];for(var s=0;s<t.input.length;++s){if(typeof t.input[s]!="object")throw TypeError(".onnx.GraphProto.input: object expected");c.input[s]=p.onnx.ValueInfoProto.fromObject(t.input[s])}}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.GraphProto.output: array expected");c.output=[];for(var s=0;s<t.output.length;++s){if(typeof t.output[s]!="object")throw TypeError(".onnx.GraphProto.output: object expected");c.output[s]=p.onnx.ValueInfoProto.fromObject(t.output[s])}}if(t.valueInfo){if(!Array.isArray(t.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");c.valueInfo=[];for(var s=0;s<t.valueInfo.length;++s){if(typeof t.valueInfo[s]!="object")throw TypeError(".onnx.GraphProto.valueInfo: object expected");c.valueInfo[s]=p.onnx.ValueInfoProto.fromObject(t.valueInfo[s])}}if(t.quantizationAnnotation){if(!Array.isArray(t.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");c.quantizationAnnotation=[];for(var s=0;s<t.quantizationAnnotation.length;++s){if(typeof t.quantizationAnnotation[s]!="object")throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");c.quantizationAnnotation[s]=p.onnx.TensorAnnotation.fromObject(t.quantizationAnnotation[s])}}return c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.node=[],s.initializer=[],s.input=[],s.output=[],s.valueInfo=[],s.quantizationAnnotation=[],s.sparseInitializer=[]),c.defaults&&(s.name="",s.docString=""),t.node&&t.node.length){s.node=[];for(var d=0;d<t.node.length;++d)s.node[d]=p.onnx.NodeProto.toObject(t.node[d],c)}if(t.name!=null&&t.hasOwnProperty("name")&&(s.name=t.name),t.initializer&&t.initializer.length){s.initializer=[];for(var d=0;d<t.initializer.length;++d)s.initializer[d]=p.onnx.TensorProto.toObject(t.initializer[d],c)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(s.docString=t.docString),t.input&&t.input.length){s.input=[];for(var d=0;d<t.input.length;++d)s.input[d]=p.onnx.ValueInfoProto.toObject(t.input[d],c)}if(t.output&&t.output.length){s.output=[];for(var d=0;d<t.output.length;++d)s.output[d]=p.onnx.ValueInfoProto.toObject(t.output[d],c)}if(t.valueInfo&&t.valueInfo.length){s.valueInfo=[];for(var d=0;d<t.valueInfo.length;++d)s.valueInfo[d]=p.onnx.ValueInfoProto.toObject(t.valueInfo[d],c)}if(t.quantizationAnnotation&&t.quantizationAnnotation.length){s.quantizationAnnotation=[];for(var d=0;d<t.quantizationAnnotation.length;++d)s.quantizationAnnotation[d]=p.onnx.TensorAnnotation.toObject(t.quantizationAnnotation[d],c)}if(t.sparseInitializer&&t.sparseInitializer.length){s.sparseInitializer=[];for(var d=0;d<t.sparseInitializer.length;++d)s.sparseInitializer[d]=p.onnx.SparseTensorProto.toObject(t.sparseInitializer[d],c)}return s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.GraphProto"},a}(),i.TensorProto=function(){function a(t){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.dims=u.emptyArray,a.prototype.dataType=0,a.prototype.segment=null,a.prototype.floatData=u.emptyArray,a.prototype.int32Data=u.emptyArray,a.prototype.stringData=u.emptyArray,a.prototype.int64Data=u.emptyArray,a.prototype.name="",a.prototype.docString="",a.prototype.rawData=u.newBuffer([]),a.prototype.externalData=u.emptyArray,a.prototype.dataLocation=0,a.prototype.doubleData=u.emptyArray,a.prototype.uint64Data=u.emptyArray,a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.dims!=null&&t.dims.length){c.uint32(10).fork();for(var s=0;s<t.dims.length;++s)c.int64(t.dims[s]);c.ldelim()}if(t.dataType!=null&&Object.hasOwnProperty.call(t,"dataType")&&c.uint32(16).int32(t.dataType),t.segment!=null&&Object.hasOwnProperty.call(t,"segment")&&p.onnx.TensorProto.Segment.encode(t.segment,c.uint32(26).fork()).ldelim(),t.floatData!=null&&t.floatData.length){c.uint32(34).fork();for(var s=0;s<t.floatData.length;++s)c.float(t.floatData[s]);c.ldelim()}if(t.int32Data!=null&&t.int32Data.length){c.uint32(42).fork();for(var s=0;s<t.int32Data.length;++s)c.int32(t.int32Data[s]);c.ldelim()}if(t.stringData!=null&&t.stringData.length)for(var s=0;s<t.stringData.length;++s)c.uint32(50).bytes(t.stringData[s]);if(t.int64Data!=null&&t.int64Data.length){c.uint32(58).fork();for(var s=0;s<t.int64Data.length;++s)c.int64(t.int64Data[s]);c.ldelim()}if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&c.uint32(66).string(t.name),t.rawData!=null&&Object.hasOwnProperty.call(t,"rawData")&&c.uint32(74).bytes(t.rawData),t.doubleData!=null&&t.doubleData.length){c.uint32(82).fork();for(var s=0;s<t.doubleData.length;++s)c.double(t.doubleData[s]);c.ldelim()}if(t.uint64Data!=null&&t.uint64Data.length){c.uint32(90).fork();for(var s=0;s<t.uint64Data.length;++s)c.uint64(t.uint64Data[s]);c.ldelim()}if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&c.uint32(98).string(t.docString),t.externalData!=null&&t.externalData.length)for(var s=0;s<t.externalData.length;++s)p.onnx.StringStringEntryProto.encode(t.externalData[s],c.uint32(106).fork()).ldelim();return t.dataLocation!=null&&Object.hasOwnProperty.call(t,"dataLocation")&&c.uint32(112).int32(t.dataLocation),c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.TensorProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{if(d.dims&&d.dims.length||(d.dims=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.dims.push(t.int64());else d.dims.push(t.int64());break}case 2:{d.dataType=t.int32();break}case 3:{d.segment=p.onnx.TensorProto.Segment.decode(t,t.uint32());break}case 4:{if(d.floatData&&d.floatData.length||(d.floatData=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.floatData.push(t.float());else d.floatData.push(t.float());break}case 5:{if(d.int32Data&&d.int32Data.length||(d.int32Data=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.int32Data.push(t.int32());else d.int32Data.push(t.int32());break}case 6:{d.stringData&&d.stringData.length||(d.stringData=[]),d.stringData.push(t.bytes());break}case 7:{if(d.int64Data&&d.int64Data.length||(d.int64Data=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.int64Data.push(t.int64());else d.int64Data.push(t.int64());break}case 8:{d.name=t.string();break}case 12:{d.docString=t.string();break}case 9:{d.rawData=t.bytes();break}case 13:{d.externalData&&d.externalData.length||(d.externalData=[]),d.externalData.push(p.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 14:{d.dataLocation=t.int32();break}case 10:{if(d.doubleData&&d.doubleData.length||(d.doubleData=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.doubleData.push(t.double());else d.doubleData.push(t.double());break}case 11:{if(d.uint64Data&&d.uint64Data.length||(d.uint64Data=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.uint64Data.push(t.uint64());else d.uint64Data.push(t.uint64());break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.dims!=null&&t.hasOwnProperty("dims")){if(!Array.isArray(t.dims))return"dims: array expected";for(var c=0;c<t.dims.length;++c)if(!u.isInteger(t.dims[c])&&!(t.dims[c]&&u.isInteger(t.dims[c].low)&&u.isInteger(t.dims[c].high)))return"dims: integer|Long[] expected"}if(t.dataType!=null&&t.hasOwnProperty("dataType")&&!u.isInteger(t.dataType))return"dataType: integer expected";if(t.segment!=null&&t.hasOwnProperty("segment")){var s=p.onnx.TensorProto.Segment.verify(t.segment);if(s)return"segment."+s}if(t.floatData!=null&&t.hasOwnProperty("floatData")){if(!Array.isArray(t.floatData))return"floatData: array expected";for(var c=0;c<t.floatData.length;++c)if(typeof t.floatData[c]!="number")return"floatData: number[] expected"}if(t.int32Data!=null&&t.hasOwnProperty("int32Data")){if(!Array.isArray(t.int32Data))return"int32Data: array expected";for(var c=0;c<t.int32Data.length;++c)if(!u.isInteger(t.int32Data[c]))return"int32Data: integer[] expected"}if(t.stringData!=null&&t.hasOwnProperty("stringData")){if(!Array.isArray(t.stringData))return"stringData: array expected";for(var c=0;c<t.stringData.length;++c)if(!(t.stringData[c]&&typeof t.stringData[c].length=="number"||u.isString(t.stringData[c])))return"stringData: buffer[] expected"}if(t.int64Data!=null&&t.hasOwnProperty("int64Data")){if(!Array.isArray(t.int64Data))return"int64Data: array expected";for(var c=0;c<t.int64Data.length;++c)if(!u.isInteger(t.int64Data[c])&&!(t.int64Data[c]&&u.isInteger(t.int64Data[c].low)&&u.isInteger(t.int64Data[c].high)))return"int64Data: integer|Long[] expected"}if(t.name!=null&&t.hasOwnProperty("name")&&!u.isString(t.name))return"name: string expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!u.isString(t.docString))return"docString: string expected";if(t.rawData!=null&&t.hasOwnProperty("rawData")&&!(t.rawData&&typeof t.rawData.length=="number"||u.isString(t.rawData)))return"rawData: buffer expected";if(t.externalData!=null&&t.hasOwnProperty("externalData")){if(!Array.isArray(t.externalData))return"externalData: array expected";for(var c=0;c<t.externalData.length;++c){var s=p.onnx.StringStringEntryProto.verify(t.externalData[c]);if(s)return"externalData."+s}}if(t.dataLocation!=null&&t.hasOwnProperty("dataLocation"))switch(t.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:break}if(t.doubleData!=null&&t.hasOwnProperty("doubleData")){if(!Array.isArray(t.doubleData))return"doubleData: array expected";for(var c=0;c<t.doubleData.length;++c)if(typeof t.doubleData[c]!="number")return"doubleData: number[] expected"}if(t.uint64Data!=null&&t.hasOwnProperty("uint64Data")){if(!Array.isArray(t.uint64Data))return"uint64Data: array expected";for(var c=0;c<t.uint64Data.length;++c)if(!u.isInteger(t.uint64Data[c])&&!(t.uint64Data[c]&&u.isInteger(t.uint64Data[c].low)&&u.isInteger(t.uint64Data[c].high)))return"uint64Data: integer|Long[] expected"}return null},a.fromObject=function(t){if(t instanceof p.onnx.TensorProto)return t;var c=new p.onnx.TensorProto;if(t.dims){if(!Array.isArray(t.dims))throw TypeError(".onnx.TensorProto.dims: array expected");c.dims=[];for(var s=0;s<t.dims.length;++s)u.Long?(c.dims[s]=u.Long.fromValue(t.dims[s])).unsigned=!1:typeof t.dims[s]=="string"?c.dims[s]=parseInt(t.dims[s],10):typeof t.dims[s]=="number"?c.dims[s]=t.dims[s]:typeof t.dims[s]=="object"&&(c.dims[s]=new u.LongBits(t.dims[s].low>>>0,t.dims[s].high>>>0).toNumber())}if(t.dataType!=null&&(c.dataType=t.dataType|0),t.segment!=null){if(typeof t.segment!="object")throw TypeError(".onnx.TensorProto.segment: object expected");c.segment=p.onnx.TensorProto.Segment.fromObject(t.segment)}if(t.floatData){if(!Array.isArray(t.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");c.floatData=[];for(var s=0;s<t.floatData.length;++s)c.floatData[s]=Number(t.floatData[s])}if(t.int32Data){if(!Array.isArray(t.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");c.int32Data=[];for(var s=0;s<t.int32Data.length;++s)c.int32Data[s]=t.int32Data[s]|0}if(t.stringData){if(!Array.isArray(t.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");c.stringData=[];for(var s=0;s<t.stringData.length;++s)typeof t.stringData[s]=="string"?u.base64.decode(t.stringData[s],c.stringData[s]=u.newBuffer(u.base64.length(t.stringData[s])),0):t.stringData[s].length>=0&&(c.stringData[s]=t.stringData[s])}if(t.int64Data){if(!Array.isArray(t.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");c.int64Data=[];for(var s=0;s<t.int64Data.length;++s)u.Long?(c.int64Data[s]=u.Long.fromValue(t.int64Data[s])).unsigned=!1:typeof t.int64Data[s]=="string"?c.int64Data[s]=parseInt(t.int64Data[s],10):typeof t.int64Data[s]=="number"?c.int64Data[s]=t.int64Data[s]:typeof t.int64Data[s]=="object"&&(c.int64Data[s]=new u.LongBits(t.int64Data[s].low>>>0,t.int64Data[s].high>>>0).toNumber())}if(t.name!=null&&(c.name=String(t.name)),t.docString!=null&&(c.docString=String(t.docString)),t.rawData!=null&&(typeof t.rawData=="string"?u.base64.decode(t.rawData,c.rawData=u.newBuffer(u.base64.length(t.rawData)),0):t.rawData.length>=0&&(c.rawData=t.rawData)),t.externalData){if(!Array.isArray(t.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");c.externalData=[];for(var s=0;s<t.externalData.length;++s){if(typeof t.externalData[s]!="object")throw TypeError(".onnx.TensorProto.externalData: object expected");c.externalData[s]=p.onnx.StringStringEntryProto.fromObject(t.externalData[s])}}switch(t.dataLocation){default:if(typeof t.dataLocation=="number"){c.dataLocation=t.dataLocation;break}break;case"DEFAULT":case 0:c.dataLocation=0;break;case"EXTERNAL":case 1:c.dataLocation=1;break}if(t.doubleData){if(!Array.isArray(t.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");c.doubleData=[];for(var s=0;s<t.doubleData.length;++s)c.doubleData[s]=Number(t.doubleData[s])}if(t.uint64Data){if(!Array.isArray(t.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");c.uint64Data=[];for(var s=0;s<t.uint64Data.length;++s)u.Long?(c.uint64Data[s]=u.Long.fromValue(t.uint64Data[s])).unsigned=!0:typeof t.uint64Data[s]=="string"?c.uint64Data[s]=parseInt(t.uint64Data[s],10):typeof t.uint64Data[s]=="number"?c.uint64Data[s]=t.uint64Data[s]:typeof t.uint64Data[s]=="object"&&(c.uint64Data[s]=new u.LongBits(t.uint64Data[s].low>>>0,t.uint64Data[s].high>>>0).toNumber(!0))}return c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.dims=[],s.floatData=[],s.int32Data=[],s.stringData=[],s.int64Data=[],s.doubleData=[],s.uint64Data=[],s.externalData=[]),c.defaults&&(s.dataType=0,s.segment=null,s.name="",c.bytes===String?s.rawData="":(s.rawData=[],c.bytes!==Array&&(s.rawData=u.newBuffer(s.rawData))),s.docString="",s.dataLocation=c.enums===String?"DEFAULT":0),t.dims&&t.dims.length){s.dims=[];for(var d=0;d<t.dims.length;++d)typeof t.dims[d]=="number"?s.dims[d]=c.longs===String?String(t.dims[d]):t.dims[d]:s.dims[d]=c.longs===String?u.Long.prototype.toString.call(t.dims[d]):c.longs===Number?new u.LongBits(t.dims[d].low>>>0,t.dims[d].high>>>0).toNumber():t.dims[d]}if(t.dataType!=null&&t.hasOwnProperty("dataType")&&(s.dataType=t.dataType),t.segment!=null&&t.hasOwnProperty("segment")&&(s.segment=p.onnx.TensorProto.Segment.toObject(t.segment,c)),t.floatData&&t.floatData.length){s.floatData=[];for(var d=0;d<t.floatData.length;++d)s.floatData[d]=c.json&&!isFinite(t.floatData[d])?String(t.floatData[d]):t.floatData[d]}if(t.int32Data&&t.int32Data.length){s.int32Data=[];for(var d=0;d<t.int32Data.length;++d)s.int32Data[d]=t.int32Data[d]}if(t.stringData&&t.stringData.length){s.stringData=[];for(var d=0;d<t.stringData.length;++d)s.stringData[d]=c.bytes===String?u.base64.encode(t.stringData[d],0,t.stringData[d].length):c.bytes===Array?Array.prototype.slice.call(t.stringData[d]):t.stringData[d]}if(t.int64Data&&t.int64Data.length){s.int64Data=[];for(var d=0;d<t.int64Data.length;++d)typeof t.int64Data[d]=="number"?s.int64Data[d]=c.longs===String?String(t.int64Data[d]):t.int64Data[d]:s.int64Data[d]=c.longs===String?u.Long.prototype.toString.call(t.int64Data[d]):c.longs===Number?new u.LongBits(t.int64Data[d].low>>>0,t.int64Data[d].high>>>0).toNumber():t.int64Data[d]}if(t.name!=null&&t.hasOwnProperty("name")&&(s.name=t.name),t.rawData!=null&&t.hasOwnProperty("rawData")&&(s.rawData=c.bytes===String?u.base64.encode(t.rawData,0,t.rawData.length):c.bytes===Array?Array.prototype.slice.call(t.rawData):t.rawData),t.doubleData&&t.doubleData.length){s.doubleData=[];for(var d=0;d<t.doubleData.length;++d)s.doubleData[d]=c.json&&!isFinite(t.doubleData[d])?String(t.doubleData[d]):t.doubleData[d]}if(t.uint64Data&&t.uint64Data.length){s.uint64Data=[];for(var d=0;d<t.uint64Data.length;++d)typeof t.uint64Data[d]=="number"?s.uint64Data[d]=c.longs===String?String(t.uint64Data[d]):t.uint64Data[d]:s.uint64Data[d]=c.longs===String?u.Long.prototype.toString.call(t.uint64Data[d]):c.longs===Number?new u.LongBits(t.uint64Data[d].low>>>0,t.uint64Data[d].high>>>0).toNumber(!0):t.uint64Data[d]}if(t.docString!=null&&t.hasOwnProperty("docString")&&(s.docString=t.docString),t.externalData&&t.externalData.length){s.externalData=[];for(var d=0;d<t.externalData.length;++d)s.externalData[d]=p.onnx.StringStringEntryProto.toObject(t.externalData[d],c)}return t.dataLocation!=null&&t.hasOwnProperty("dataLocation")&&(s.dataLocation=c.enums===String?p.onnx.TensorProto.DataLocation[t.dataLocation]===void 0?t.dataLocation:p.onnx.TensorProto.DataLocation[t.dataLocation]:t.dataLocation),s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorProto"},a.DataType=function(){var t={},c=Object.create(t);return c[t[0]="UNDEFINED"]=0,c[t[1]="FLOAT"]=1,c[t[2]="UINT8"]=2,c[t[3]="INT8"]=3,c[t[4]="UINT16"]=4,c[t[5]="INT16"]=5,c[t[6]="INT32"]=6,c[t[7]="INT64"]=7,c[t[8]="STRING"]=8,c[t[9]="BOOL"]=9,c[t[10]="FLOAT16"]=10,c[t[11]="DOUBLE"]=11,c[t[12]="UINT32"]=12,c[t[13]="UINT64"]=13,c[t[14]="COMPLEX64"]=14,c[t[15]="COMPLEX128"]=15,c[t[16]="BFLOAT16"]=16,c[t[17]="FLOAT8E4M3FN"]=17,c[t[18]="FLOAT8E4M3FNUZ"]=18,c[t[19]="FLOAT8E5M2"]=19,c[t[20]="FLOAT8E5M2FNUZ"]=20,c}(),a.Segment=function(){function t(c){if(c)for(var s=Object.keys(c),d=0;d<s.length;++d)c[s[d]]!=null&&(this[s[d]]=c[s[d]])}return t.prototype.begin=u.Long?u.Long.fromBits(0,0,!1):0,t.prototype.end=u.Long?u.Long.fromBits(0,0,!1):0,t.create=function(c){return new t(c)},t.encode=function(c,s){return s||(s=l.create()),c.begin!=null&&Object.hasOwnProperty.call(c,"begin")&&s.uint32(8).int64(c.begin),c.end!=null&&Object.hasOwnProperty.call(c,"end")&&s.uint32(16).int64(c.end),s},t.encodeDelimited=function(c,s){return this.encode(c,s).ldelim()},t.decode=function(c,s){c instanceof n||(c=n.create(c));for(var d=s===void 0?c.len:c.pos+s,f=new p.onnx.TensorProto.Segment;c.pos<d;){var g=c.uint32();switch(g>>>3){case 1:{f.begin=c.int64();break}case 2:{f.end=c.int64();break}default:c.skipType(g&7);break}}return f},t.decodeDelimited=function(c){return c instanceof n||(c=new n(c)),this.decode(c,c.uint32())},t.verify=function(c){return typeof c!="object"||c===null?"object expected":c.begin!=null&&c.hasOwnProperty("begin")&&!u.isInteger(c.begin)&&!(c.begin&&u.isInteger(c.begin.low)&&u.isInteger(c.begin.high))?"begin: integer|Long expected":c.end!=null&&c.hasOwnProperty("end")&&!u.isInteger(c.end)&&!(c.end&&u.isInteger(c.end.low)&&u.isInteger(c.end.high))?"end: integer|Long expected":null},t.fromObject=function(c){if(c instanceof p.onnx.TensorProto.Segment)return c;var s=new p.onnx.TensorProto.Segment;return c.begin!=null&&(u.Long?(s.begin=u.Long.fromValue(c.begin)).unsigned=!1:typeof c.begin=="string"?s.begin=parseInt(c.begin,10):typeof c.begin=="number"?s.begin=c.begin:typeof c.begin=="object"&&(s.begin=new u.LongBits(c.begin.low>>>0,c.begin.high>>>0).toNumber())),c.end!=null&&(u.Long?(s.end=u.Long.fromValue(c.end)).unsigned=!1:typeof c.end=="string"?s.end=parseInt(c.end,10):typeof c.end=="number"?s.end=c.end:typeof c.end=="object"&&(s.end=new u.LongBits(c.end.low>>>0,c.end.high>>>0).toNumber())),s},t.toObject=function(c,s){s||(s={});var d={};if(s.defaults){if(u.Long){var f=new u.Long(0,0,!1);d.begin=s.longs===String?f.toString():s.longs===Number?f.toNumber():f}else d.begin=s.longs===String?"0":0;if(u.Long){var f=new u.Long(0,0,!1);d.end=s.longs===String?f.toString():s.longs===Number?f.toNumber():f}else d.end=s.longs===String?"0":0}return c.begin!=null&&c.hasOwnProperty("begin")&&(typeof c.begin=="number"?d.begin=s.longs===String?String(c.begin):c.begin:d.begin=s.longs===String?u.Long.prototype.toString.call(c.begin):s.longs===Number?new u.LongBits(c.begin.low>>>0,c.begin.high>>>0).toNumber():c.begin),c.end!=null&&c.hasOwnProperty("end")&&(typeof c.end=="number"?d.end=s.longs===String?String(c.end):c.end:d.end=s.longs===String?u.Long.prototype.toString.call(c.end):s.longs===Number?new u.LongBits(c.end.low>>>0,c.end.high>>>0).toNumber():c.end),d},t.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},t.getTypeUrl=function(c){return c===void 0&&(c="type.googleapis.com"),c+"/onnx.TensorProto.Segment"},t}(),a.DataLocation=function(){var t={},c=Object.create(t);return c[t[0]="DEFAULT"]=0,c[t[1]="EXTERNAL"]=1,c}(),a}(),i.SparseTensorProto=function(){function a(t){if(this.dims=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.values=null,a.prototype.indices=null,a.prototype.dims=u.emptyArray,a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.values!=null&&Object.hasOwnProperty.call(t,"values")&&p.onnx.TensorProto.encode(t.values,c.uint32(10).fork()).ldelim(),t.indices!=null&&Object.hasOwnProperty.call(t,"indices")&&p.onnx.TensorProto.encode(t.indices,c.uint32(18).fork()).ldelim(),t.dims!=null&&t.dims.length){c.uint32(26).fork();for(var s=0;s<t.dims.length;++s)c.int64(t.dims[s]);c.ldelim()}return c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.SparseTensorProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.values=p.onnx.TensorProto.decode(t,t.uint32());break}case 2:{d.indices=p.onnx.TensorProto.decode(t,t.uint32());break}case 3:{if(d.dims&&d.dims.length||(d.dims=[]),(f&7)===2)for(var g=t.uint32()+t.pos;t.pos<g;)d.dims.push(t.int64());else d.dims.push(t.int64());break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.values!=null&&t.hasOwnProperty("values")){var c=p.onnx.TensorProto.verify(t.values);if(c)return"values."+c}if(t.indices!=null&&t.hasOwnProperty("indices")){var c=p.onnx.TensorProto.verify(t.indices);if(c)return"indices."+c}if(t.dims!=null&&t.hasOwnProperty("dims")){if(!Array.isArray(t.dims))return"dims: array expected";for(var s=0;s<t.dims.length;++s)if(!u.isInteger(t.dims[s])&&!(t.dims[s]&&u.isInteger(t.dims[s].low)&&u.isInteger(t.dims[s].high)))return"dims: integer|Long[] expected"}return null},a.fromObject=function(t){if(t instanceof p.onnx.SparseTensorProto)return t;var c=new p.onnx.SparseTensorProto;if(t.values!=null){if(typeof t.values!="object")throw TypeError(".onnx.SparseTensorProto.values: object expected");c.values=p.onnx.TensorProto.fromObject(t.values)}if(t.indices!=null){if(typeof t.indices!="object")throw TypeError(".onnx.SparseTensorProto.indices: object expected");c.indices=p.onnx.TensorProto.fromObject(t.indices)}if(t.dims){if(!Array.isArray(t.dims))throw TypeError(".onnx.SparseTensorProto.dims: array expected");c.dims=[];for(var s=0;s<t.dims.length;++s)u.Long?(c.dims[s]=u.Long.fromValue(t.dims[s])).unsigned=!1:typeof t.dims[s]=="string"?c.dims[s]=parseInt(t.dims[s],10):typeof t.dims[s]=="number"?c.dims[s]=t.dims[s]:typeof t.dims[s]=="object"&&(c.dims[s]=new u.LongBits(t.dims[s].low>>>0,t.dims[s].high>>>0).toNumber())}return c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.dims=[]),c.defaults&&(s.values=null,s.indices=null),t.values!=null&&t.hasOwnProperty("values")&&(s.values=p.onnx.TensorProto.toObject(t.values,c)),t.indices!=null&&t.hasOwnProperty("indices")&&(s.indices=p.onnx.TensorProto.toObject(t.indices,c)),t.dims&&t.dims.length){s.dims=[];for(var d=0;d<t.dims.length;++d)typeof t.dims[d]=="number"?s.dims[d]=c.longs===String?String(t.dims[d]):t.dims[d]:s.dims[d]=c.longs===String?u.Long.prototype.toString.call(t.dims[d]):c.longs===Number?new u.LongBits(t.dims[d].low>>>0,t.dims[d].high>>>0).toNumber():t.dims[d]}return s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.SparseTensorProto"},a}(),i.TensorShapeProto=function(){function a(t){if(this.dim=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.dim=u.emptyArray,a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.dim!=null&&t.dim.length)for(var s=0;s<t.dim.length;++s)p.onnx.TensorShapeProto.Dimension.encode(t.dim[s],c.uint32(10).fork()).ldelim();return c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.TensorShapeProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.dim&&d.dim.length||(d.dim=[]),d.dim.push(p.onnx.TensorShapeProto.Dimension.decode(t,t.uint32()));break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.dim!=null&&t.hasOwnProperty("dim")){if(!Array.isArray(t.dim))return"dim: array expected";for(var c=0;c<t.dim.length;++c){var s=p.onnx.TensorShapeProto.Dimension.verify(t.dim[c]);if(s)return"dim."+s}}return null},a.fromObject=function(t){if(t instanceof p.onnx.TensorShapeProto)return t;var c=new p.onnx.TensorShapeProto;if(t.dim){if(!Array.isArray(t.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");c.dim=[];for(var s=0;s<t.dim.length;++s){if(typeof t.dim[s]!="object")throw TypeError(".onnx.TensorShapeProto.dim: object expected");c.dim[s]=p.onnx.TensorShapeProto.Dimension.fromObject(t.dim[s])}}return c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.dim=[]),t.dim&&t.dim.length){s.dim=[];for(var d=0;d<t.dim.length;++d)s.dim[d]=p.onnx.TensorShapeProto.Dimension.toObject(t.dim[d],c)}return s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorShapeProto"},a.Dimension=function(){function t(s){if(s)for(var d=Object.keys(s),f=0;f<d.length;++f)s[d[f]]!=null&&(this[d[f]]=s[d[f]])}t.prototype.dimValue=null,t.prototype.dimParam=null,t.prototype.denotation="";var c;return Object.defineProperty(t.prototype,"value",{get:u.oneOfGetter(c=["dimValue","dimParam"]),set:u.oneOfSetter(c)}),t.create=function(s){return new t(s)},t.encode=function(s,d){return d||(d=l.create()),s.dimValue!=null&&Object.hasOwnProperty.call(s,"dimValue")&&d.uint32(8).int64(s.dimValue),s.dimParam!=null&&Object.hasOwnProperty.call(s,"dimParam")&&d.uint32(18).string(s.dimParam),s.denotation!=null&&Object.hasOwnProperty.call(s,"denotation")&&d.uint32(26).string(s.denotation),d},t.encodeDelimited=function(s,d){return this.encode(s,d).ldelim()},t.decode=function(s,d){s instanceof n||(s=n.create(s));for(var f=d===void 0?s.len:s.pos+d,g=new p.onnx.TensorShapeProto.Dimension;s.pos<f;){var b=s.uint32();switch(b>>>3){case 1:{g.dimValue=s.int64();break}case 2:{g.dimParam=s.string();break}case 3:{g.denotation=s.string();break}default:s.skipType(b&7);break}}return g},t.decodeDelimited=function(s){return s instanceof n||(s=new n(s)),this.decode(s,s.uint32())},t.verify=function(s){if(typeof s!="object"||s===null)return"object expected";var d={};if(s.dimValue!=null&&s.hasOwnProperty("dimValue")&&(d.value=1,!u.isInteger(s.dimValue)&&!(s.dimValue&&u.isInteger(s.dimValue.low)&&u.isInteger(s.dimValue.high))))return"dimValue: integer|Long expected";if(s.dimParam!=null&&s.hasOwnProperty("dimParam")){if(d.value===1)return"value: multiple values";if(d.value=1,!u.isString(s.dimParam))return"dimParam: string expected"}return s.denotation!=null&&s.hasOwnProperty("denotation")&&!u.isString(s.denotation)?"denotation: string expected":null},t.fromObject=function(s){if(s instanceof p.onnx.TensorShapeProto.Dimension)return s;var d=new p.onnx.TensorShapeProto.Dimension;return s.dimValue!=null&&(u.Long?(d.dimValue=u.Long.fromValue(s.dimValue)).unsigned=!1:typeof s.dimValue=="string"?d.dimValue=parseInt(s.dimValue,10):typeof s.dimValue=="number"?d.dimValue=s.dimValue:typeof s.dimValue=="object"&&(d.dimValue=new u.LongBits(s.dimValue.low>>>0,s.dimValue.high>>>0).toNumber())),s.dimParam!=null&&(d.dimParam=String(s.dimParam)),s.denotation!=null&&(d.denotation=String(s.denotation)),d},t.toObject=function(s,d){d||(d={});var f={};return d.defaults&&(f.denotation=""),s.dimValue!=null&&s.hasOwnProperty("dimValue")&&(typeof s.dimValue=="number"?f.dimValue=d.longs===String?String(s.dimValue):s.dimValue:f.dimValue=d.longs===String?u.Long.prototype.toString.call(s.dimValue):d.longs===Number?new u.LongBits(s.dimValue.low>>>0,s.dimValue.high>>>0).toNumber():s.dimValue,d.oneofs&&(f.value="dimValue")),s.dimParam!=null&&s.hasOwnProperty("dimParam")&&(f.dimParam=s.dimParam,d.oneofs&&(f.value="dimParam")),s.denotation!=null&&s.hasOwnProperty("denotation")&&(f.denotation=s.denotation),f},t.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},t.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TensorShapeProto.Dimension"},t}(),a}(),i.TypeProto=function(){function a(c){if(c)for(var s=Object.keys(c),d=0;d<s.length;++d)c[s[d]]!=null&&(this[s[d]]=c[s[d]])}a.prototype.tensorType=null,a.prototype.sequenceType=null,a.prototype.mapType=null,a.prototype.optionalType=null,a.prototype.sparseTensorType=null,a.prototype.denotation="";var t;return Object.defineProperty(a.prototype,"value",{get:u.oneOfGetter(t=["tensorType","sequenceType","mapType","optionalType","sparseTensorType"]),set:u.oneOfSetter(t)}),a.create=function(c){return new a(c)},a.encode=function(c,s){return s||(s=l.create()),c.tensorType!=null&&Object.hasOwnProperty.call(c,"tensorType")&&p.onnx.TypeProto.Tensor.encode(c.tensorType,s.uint32(10).fork()).ldelim(),c.sequenceType!=null&&Object.hasOwnProperty.call(c,"sequenceType")&&p.onnx.TypeProto.Sequence.encode(c.sequenceType,s.uint32(34).fork()).ldelim(),c.mapType!=null&&Object.hasOwnProperty.call(c,"mapType")&&p.onnx.TypeProto.Map.encode(c.mapType,s.uint32(42).fork()).ldelim(),c.denotation!=null&&Object.hasOwnProperty.call(c,"denotation")&&s.uint32(50).string(c.denotation),c.sparseTensorType!=null&&Object.hasOwnProperty.call(c,"sparseTensorType")&&p.onnx.TypeProto.SparseTensor.encode(c.sparseTensorType,s.uint32(66).fork()).ldelim(),c.optionalType!=null&&Object.hasOwnProperty.call(c,"optionalType")&&p.onnx.TypeProto.Optional.encode(c.optionalType,s.uint32(74).fork()).ldelim(),s},a.encodeDelimited=function(c,s){return this.encode(c,s).ldelim()},a.decode=function(c,s){c instanceof n||(c=n.create(c));for(var d=s===void 0?c.len:c.pos+s,f=new p.onnx.TypeProto;c.pos<d;){var g=c.uint32();switch(g>>>3){case 1:{f.tensorType=p.onnx.TypeProto.Tensor.decode(c,c.uint32());break}case 4:{f.sequenceType=p.onnx.TypeProto.Sequence.decode(c,c.uint32());break}case 5:{f.mapType=p.onnx.TypeProto.Map.decode(c,c.uint32());break}case 9:{f.optionalType=p.onnx.TypeProto.Optional.decode(c,c.uint32());break}case 8:{f.sparseTensorType=p.onnx.TypeProto.SparseTensor.decode(c,c.uint32());break}case 6:{f.denotation=c.string();break}default:c.skipType(g&7);break}}return f},a.decodeDelimited=function(c){return c instanceof n||(c=new n(c)),this.decode(c,c.uint32())},a.verify=function(c){if(typeof c!="object"||c===null)return"object expected";var s={};if(c.tensorType!=null&&c.hasOwnProperty("tensorType")){s.value=1;{var d=p.onnx.TypeProto.Tensor.verify(c.tensorType);if(d)return"tensorType."+d}}if(c.sequenceType!=null&&c.hasOwnProperty("sequenceType")){if(s.value===1)return"value: multiple values";s.value=1;{var d=p.onnx.TypeProto.Sequence.verify(c.sequenceType);if(d)return"sequenceType."+d}}if(c.mapType!=null&&c.hasOwnProperty("mapType")){if(s.value===1)return"value: multiple values";s.value=1;{var d=p.onnx.TypeProto.Map.verify(c.mapType);if(d)return"mapType."+d}}if(c.optionalType!=null&&c.hasOwnProperty("optionalType")){if(s.value===1)return"value: multiple values";s.value=1;{var d=p.onnx.TypeProto.Optional.verify(c.optionalType);if(d)return"optionalType."+d}}if(c.sparseTensorType!=null&&c.hasOwnProperty("sparseTensorType")){if(s.value===1)return"value: multiple values";s.value=1;{var d=p.onnx.TypeProto.SparseTensor.verify(c.sparseTensorType);if(d)return"sparseTensorType."+d}}return c.denotation!=null&&c.hasOwnProperty("denotation")&&!u.isString(c.denotation)?"denotation: string expected":null},a.fromObject=function(c){if(c instanceof p.onnx.TypeProto)return c;var s=new p.onnx.TypeProto;if(c.tensorType!=null){if(typeof c.tensorType!="object")throw TypeError(".onnx.TypeProto.tensorType: object expected");s.tensorType=p.onnx.TypeProto.Tensor.fromObject(c.tensorType)}if(c.sequenceType!=null){if(typeof c.sequenceType!="object")throw TypeError(".onnx.TypeProto.sequenceType: object expected");s.sequenceType=p.onnx.TypeProto.Sequence.fromObject(c.sequenceType)}if(c.mapType!=null){if(typeof c.mapType!="object")throw TypeError(".onnx.TypeProto.mapType: object expected");s.mapType=p.onnx.TypeProto.Map.fromObject(c.mapType)}if(c.optionalType!=null){if(typeof c.optionalType!="object")throw TypeError(".onnx.TypeProto.optionalType: object expected");s.optionalType=p.onnx.TypeProto.Optional.fromObject(c.optionalType)}if(c.sparseTensorType!=null){if(typeof c.sparseTensorType!="object")throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");s.sparseTensorType=p.onnx.TypeProto.SparseTensor.fromObject(c.sparseTensorType)}return c.denotation!=null&&(s.denotation=String(c.denotation)),s},a.toObject=function(c,s){s||(s={});var d={};return s.defaults&&(d.denotation=""),c.tensorType!=null&&c.hasOwnProperty("tensorType")&&(d.tensorType=p.onnx.TypeProto.Tensor.toObject(c.tensorType,s),s.oneofs&&(d.value="tensorType")),c.sequenceType!=null&&c.hasOwnProperty("sequenceType")&&(d.sequenceType=p.onnx.TypeProto.Sequence.toObject(c.sequenceType,s),s.oneofs&&(d.value="sequenceType")),c.mapType!=null&&c.hasOwnProperty("mapType")&&(d.mapType=p.onnx.TypeProto.Map.toObject(c.mapType,s),s.oneofs&&(d.value="mapType")),c.denotation!=null&&c.hasOwnProperty("denotation")&&(d.denotation=c.denotation),c.sparseTensorType!=null&&c.hasOwnProperty("sparseTensorType")&&(d.sparseTensorType=p.onnx.TypeProto.SparseTensor.toObject(c.sparseTensorType,s),s.oneofs&&(d.value="sparseTensorType")),c.optionalType!=null&&c.hasOwnProperty("optionalType")&&(d.optionalType=p.onnx.TypeProto.Optional.toObject(c.optionalType,s),s.oneofs&&(d.value="optionalType")),d},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(c){return c===void 0&&(c="type.googleapis.com"),c+"/onnx.TypeProto"},a.Tensor=function(){function c(s){if(s)for(var d=Object.keys(s),f=0;f<d.length;++f)s[d[f]]!=null&&(this[d[f]]=s[d[f]])}return c.prototype.elemType=0,c.prototype.shape=null,c.create=function(s){return new c(s)},c.encode=function(s,d){return d||(d=l.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&d.uint32(8).int32(s.elemType),s.shape!=null&&Object.hasOwnProperty.call(s,"shape")&&p.onnx.TensorShapeProto.encode(s.shape,d.uint32(18).fork()).ldelim(),d},c.encodeDelimited=function(s,d){return this.encode(s,d).ldelim()},c.decode=function(s,d){s instanceof n||(s=n.create(s));for(var f=d===void 0?s.len:s.pos+d,g=new p.onnx.TypeProto.Tensor;s.pos<f;){var b=s.uint32();switch(b>>>3){case 1:{g.elemType=s.int32();break}case 2:{g.shape=p.onnx.TensorShapeProto.decode(s,s.uint32());break}default:s.skipType(b&7);break}}return g},c.decodeDelimited=function(s){return s instanceof n||(s=new n(s)),this.decode(s,s.uint32())},c.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")&&!u.isInteger(s.elemType))return"elemType: integer expected";if(s.shape!=null&&s.hasOwnProperty("shape")){var d=p.onnx.TensorShapeProto.verify(s.shape);if(d)return"shape."+d}return null},c.fromObject=function(s){if(s instanceof p.onnx.TypeProto.Tensor)return s;var d=new p.onnx.TypeProto.Tensor;if(s.elemType!=null&&(d.elemType=s.elemType|0),s.shape!=null){if(typeof s.shape!="object")throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");d.shape=p.onnx.TensorShapeProto.fromObject(s.shape)}return d},c.toObject=function(s,d){d||(d={});var f={};return d.defaults&&(f.elemType=0,f.shape=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(f.elemType=s.elemType),s.shape!=null&&s.hasOwnProperty("shape")&&(f.shape=p.onnx.TensorShapeProto.toObject(s.shape,d)),f},c.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},c.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Tensor"},c}(),a.Sequence=function(){function c(s){if(s)for(var d=Object.keys(s),f=0;f<d.length;++f)s[d[f]]!=null&&(this[d[f]]=s[d[f]])}return c.prototype.elemType=null,c.create=function(s){return new c(s)},c.encode=function(s,d){return d||(d=l.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&p.onnx.TypeProto.encode(s.elemType,d.uint32(10).fork()).ldelim(),d},c.encodeDelimited=function(s,d){return this.encode(s,d).ldelim()},c.decode=function(s,d){s instanceof n||(s=n.create(s));for(var f=d===void 0?s.len:s.pos+d,g=new p.onnx.TypeProto.Sequence;s.pos<f;){var b=s.uint32();switch(b>>>3){case 1:{g.elemType=p.onnx.TypeProto.decode(s,s.uint32());break}default:s.skipType(b&7);break}}return g},c.decodeDelimited=function(s){return s instanceof n||(s=new n(s)),this.decode(s,s.uint32())},c.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")){var d=p.onnx.TypeProto.verify(s.elemType);if(d)return"elemType."+d}return null},c.fromObject=function(s){if(s instanceof p.onnx.TypeProto.Sequence)return s;var d=new p.onnx.TypeProto.Sequence;if(s.elemType!=null){if(typeof s.elemType!="object")throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");d.elemType=p.onnx.TypeProto.fromObject(s.elemType)}return d},c.toObject=function(s,d){d||(d={});var f={};return d.defaults&&(f.elemType=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(f.elemType=p.onnx.TypeProto.toObject(s.elemType,d)),f},c.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},c.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Sequence"},c}(),a.Map=function(){function c(s){if(s)for(var d=Object.keys(s),f=0;f<d.length;++f)s[d[f]]!=null&&(this[d[f]]=s[d[f]])}return c.prototype.keyType=0,c.prototype.valueType=null,c.create=function(s){return new c(s)},c.encode=function(s,d){return d||(d=l.create()),s.keyType!=null&&Object.hasOwnProperty.call(s,"keyType")&&d.uint32(8).int32(s.keyType),s.valueType!=null&&Object.hasOwnProperty.call(s,"valueType")&&p.onnx.TypeProto.encode(s.valueType,d.uint32(18).fork()).ldelim(),d},c.encodeDelimited=function(s,d){return this.encode(s,d).ldelim()},c.decode=function(s,d){s instanceof n||(s=n.create(s));for(var f=d===void 0?s.len:s.pos+d,g=new p.onnx.TypeProto.Map;s.pos<f;){var b=s.uint32();switch(b>>>3){case 1:{g.keyType=s.int32();break}case 2:{g.valueType=p.onnx.TypeProto.decode(s,s.uint32());break}default:s.skipType(b&7);break}}return g},c.decodeDelimited=function(s){return s instanceof n||(s=new n(s)),this.decode(s,s.uint32())},c.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.keyType!=null&&s.hasOwnProperty("keyType")&&!u.isInteger(s.keyType))return"keyType: integer expected";if(s.valueType!=null&&s.hasOwnProperty("valueType")){var d=p.onnx.TypeProto.verify(s.valueType);if(d)return"valueType."+d}return null},c.fromObject=function(s){if(s instanceof p.onnx.TypeProto.Map)return s;var d=new p.onnx.TypeProto.Map;if(s.keyType!=null&&(d.keyType=s.keyType|0),s.valueType!=null){if(typeof s.valueType!="object")throw TypeError(".onnx.TypeProto.Map.valueType: object expected");d.valueType=p.onnx.TypeProto.fromObject(s.valueType)}return d},c.toObject=function(s,d){d||(d={});var f={};return d.defaults&&(f.keyType=0,f.valueType=null),s.keyType!=null&&s.hasOwnProperty("keyType")&&(f.keyType=s.keyType),s.valueType!=null&&s.hasOwnProperty("valueType")&&(f.valueType=p.onnx.TypeProto.toObject(s.valueType,d)),f},c.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},c.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Map"},c}(),a.Optional=function(){function c(s){if(s)for(var d=Object.keys(s),f=0;f<d.length;++f)s[d[f]]!=null&&(this[d[f]]=s[d[f]])}return c.prototype.elemType=null,c.create=function(s){return new c(s)},c.encode=function(s,d){return d||(d=l.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&p.onnx.TypeProto.encode(s.elemType,d.uint32(10).fork()).ldelim(),d},c.encodeDelimited=function(s,d){return this.encode(s,d).ldelim()},c.decode=function(s,d){s instanceof n||(s=n.create(s));for(var f=d===void 0?s.len:s.pos+d,g=new p.onnx.TypeProto.Optional;s.pos<f;){var b=s.uint32();switch(b>>>3){case 1:{g.elemType=p.onnx.TypeProto.decode(s,s.uint32());break}default:s.skipType(b&7);break}}return g},c.decodeDelimited=function(s){return s instanceof n||(s=new n(s)),this.decode(s,s.uint32())},c.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")){var d=p.onnx.TypeProto.verify(s.elemType);if(d)return"elemType."+d}return null},c.fromObject=function(s){if(s instanceof p.onnx.TypeProto.Optional)return s;var d=new p.onnx.TypeProto.Optional;if(s.elemType!=null){if(typeof s.elemType!="object")throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");d.elemType=p.onnx.TypeProto.fromObject(s.elemType)}return d},c.toObject=function(s,d){d||(d={});var f={};return d.defaults&&(f.elemType=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(f.elemType=p.onnx.TypeProto.toObject(s.elemType,d)),f},c.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},c.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Optional"},c}(),a.SparseTensor=function(){function c(s){if(s)for(var d=Object.keys(s),f=0;f<d.length;++f)s[d[f]]!=null&&(this[d[f]]=s[d[f]])}return c.prototype.elemType=0,c.prototype.shape=null,c.create=function(s){return new c(s)},c.encode=function(s,d){return d||(d=l.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&d.uint32(8).int32(s.elemType),s.shape!=null&&Object.hasOwnProperty.call(s,"shape")&&p.onnx.TensorShapeProto.encode(s.shape,d.uint32(18).fork()).ldelim(),d},c.encodeDelimited=function(s,d){return this.encode(s,d).ldelim()},c.decode=function(s,d){s instanceof n||(s=n.create(s));for(var f=d===void 0?s.len:s.pos+d,g=new p.onnx.TypeProto.SparseTensor;s.pos<f;){var b=s.uint32();switch(b>>>3){case 1:{g.elemType=s.int32();break}case 2:{g.shape=p.onnx.TensorShapeProto.decode(s,s.uint32());break}default:s.skipType(b&7);break}}return g},c.decodeDelimited=function(s){return s instanceof n||(s=new n(s)),this.decode(s,s.uint32())},c.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")&&!u.isInteger(s.elemType))return"elemType: integer expected";if(s.shape!=null&&s.hasOwnProperty("shape")){var d=p.onnx.TensorShapeProto.verify(s.shape);if(d)return"shape."+d}return null},c.fromObject=function(s){if(s instanceof p.onnx.TypeProto.SparseTensor)return s;var d=new p.onnx.TypeProto.SparseTensor;if(s.elemType!=null&&(d.elemType=s.elemType|0),s.shape!=null){if(typeof s.shape!="object")throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");d.shape=p.onnx.TensorShapeProto.fromObject(s.shape)}return d},c.toObject=function(s,d){d||(d={});var f={};return d.defaults&&(f.elemType=0,f.shape=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(f.elemType=s.elemType),s.shape!=null&&s.hasOwnProperty("shape")&&(f.shape=p.onnx.TensorShapeProto.toObject(s.shape,d)),f},c.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},c.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.SparseTensor"},c}(),a}(),i.OperatorSetIdProto=function(){function a(t){if(t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.domain="",a.prototype.version=u.Long?u.Long.fromBits(0,0,!1):0,a.create=function(t){return new a(t)},a.encode=function(t,c){return c||(c=l.create()),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&c.uint32(10).string(t.domain),t.version!=null&&Object.hasOwnProperty.call(t,"version")&&c.uint32(16).int64(t.version),c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.OperatorSetIdProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.domain=t.string();break}case 2:{d.version=t.int64();break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){return typeof t!="object"||t===null?"object expected":t.domain!=null&&t.hasOwnProperty("domain")&&!u.isString(t.domain)?"domain: string expected":t.version!=null&&t.hasOwnProperty("version")&&!u.isInteger(t.version)&&!(t.version&&u.isInteger(t.version.low)&&u.isInteger(t.version.high))?"version: integer|Long expected":null},a.fromObject=function(t){if(t instanceof p.onnx.OperatorSetIdProto)return t;var c=new p.onnx.OperatorSetIdProto;return t.domain!=null&&(c.domain=String(t.domain)),t.version!=null&&(u.Long?(c.version=u.Long.fromValue(t.version)).unsigned=!1:typeof t.version=="string"?c.version=parseInt(t.version,10):typeof t.version=="number"?c.version=t.version:typeof t.version=="object"&&(c.version=new u.LongBits(t.version.low>>>0,t.version.high>>>0).toNumber())),c},a.toObject=function(t,c){c||(c={});var s={};if(c.defaults)if(s.domain="",u.Long){var d=new u.Long(0,0,!1);s.version=c.longs===String?d.toString():c.longs===Number?d.toNumber():d}else s.version=c.longs===String?"0":0;return t.domain!=null&&t.hasOwnProperty("domain")&&(s.domain=t.domain),t.version!=null&&t.hasOwnProperty("version")&&(typeof t.version=="number"?s.version=c.longs===String?String(t.version):t.version:s.version=c.longs===String?u.Long.prototype.toString.call(t.version):c.longs===Number?new u.LongBits(t.version.low>>>0,t.version.high>>>0).toNumber():t.version),s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.OperatorSetIdProto"},a}(),i.OperatorStatus=function(){var a={},t=Object.create(a);return t[a[0]="EXPERIMENTAL"]=0,t[a[1]="STABLE"]=1,t}(),i.FunctionProto=function(){function a(t){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],t)for(var c=Object.keys(t),s=0;s<c.length;++s)t[c[s]]!=null&&(this[c[s]]=t[c[s]])}return a.prototype.name="",a.prototype.input=u.emptyArray,a.prototype.output=u.emptyArray,a.prototype.attribute=u.emptyArray,a.prototype.attributeProto=u.emptyArray,a.prototype.node=u.emptyArray,a.prototype.docString="",a.prototype.opsetImport=u.emptyArray,a.prototype.domain="",a.create=function(t){return new a(t)},a.encode=function(t,c){if(c||(c=l.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&c.uint32(10).string(t.name),t.input!=null&&t.input.length)for(var s=0;s<t.input.length;++s)c.uint32(34).string(t.input[s]);if(t.output!=null&&t.output.length)for(var s=0;s<t.output.length;++s)c.uint32(42).string(t.output[s]);if(t.attribute!=null&&t.attribute.length)for(var s=0;s<t.attribute.length;++s)c.uint32(50).string(t.attribute[s]);if(t.node!=null&&t.node.length)for(var s=0;s<t.node.length;++s)p.onnx.NodeProto.encode(t.node[s],c.uint32(58).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&c.uint32(66).string(t.docString),t.opsetImport!=null&&t.opsetImport.length)for(var s=0;s<t.opsetImport.length;++s)p.onnx.OperatorSetIdProto.encode(t.opsetImport[s],c.uint32(74).fork()).ldelim();if(t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&c.uint32(82).string(t.domain),t.attributeProto!=null&&t.attributeProto.length)for(var s=0;s<t.attributeProto.length;++s)p.onnx.AttributeProto.encode(t.attributeProto[s],c.uint32(90).fork()).ldelim();return c},a.encodeDelimited=function(t,c){return this.encode(t,c).ldelim()},a.decode=function(t,c){t instanceof n||(t=n.create(t));for(var s=c===void 0?t.len:t.pos+c,d=new p.onnx.FunctionProto;t.pos<s;){var f=t.uint32();switch(f>>>3){case 1:{d.name=t.string();break}case 4:{d.input&&d.input.length||(d.input=[]),d.input.push(t.string());break}case 5:{d.output&&d.output.length||(d.output=[]),d.output.push(t.string());break}case 6:{d.attribute&&d.attribute.length||(d.attribute=[]),d.attribute.push(t.string());break}case 11:{d.attributeProto&&d.attributeProto.length||(d.attributeProto=[]),d.attributeProto.push(p.onnx.AttributeProto.decode(t,t.uint32()));break}case 7:{d.node&&d.node.length||(d.node=[]),d.node.push(p.onnx.NodeProto.decode(t,t.uint32()));break}case 8:{d.docString=t.string();break}case 9:{d.opsetImport&&d.opsetImport.length||(d.opsetImport=[]),d.opsetImport.push(p.onnx.OperatorSetIdProto.decode(t,t.uint32()));break}case 10:{d.domain=t.string();break}default:t.skipType(f&7);break}}return d},a.decodeDelimited=function(t){return t instanceof n||(t=new n(t)),this.decode(t,t.uint32())},a.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!u.isString(t.name))return"name: string expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var c=0;c<t.input.length;++c)if(!u.isString(t.input[c]))return"input: string[] expected"}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var c=0;c<t.output.length;++c)if(!u.isString(t.output[c]))return"output: string[] expected"}if(t.attribute!=null&&t.hasOwnProperty("attribute")){if(!Array.isArray(t.attribute))return"attribute: array expected";for(var c=0;c<t.attribute.length;++c)if(!u.isString(t.attribute[c]))return"attribute: string[] expected"}if(t.attributeProto!=null&&t.hasOwnProperty("attributeProto")){if(!Array.isArray(t.attributeProto))return"attributeProto: array expected";for(var c=0;c<t.attributeProto.length;++c){var s=p.onnx.AttributeProto.verify(t.attributeProto[c]);if(s)return"attributeProto."+s}}if(t.node!=null&&t.hasOwnProperty("node")){if(!Array.isArray(t.node))return"node: array expected";for(var c=0;c<t.node.length;++c){var s=p.onnx.NodeProto.verify(t.node[c]);if(s)return"node."+s}}if(t.docString!=null&&t.hasOwnProperty("docString")&&!u.isString(t.docString))return"docString: string expected";if(t.opsetImport!=null&&t.hasOwnProperty("opsetImport")){if(!Array.isArray(t.opsetImport))return"opsetImport: array expected";for(var c=0;c<t.opsetImport.length;++c){var s=p.onnx.OperatorSetIdProto.verify(t.opsetImport[c]);if(s)return"opsetImport."+s}}return t.domain!=null&&t.hasOwnProperty("domain")&&!u.isString(t.domain)?"domain: string expected":null},a.fromObject=function(t){if(t instanceof p.onnx.FunctionProto)return t;var c=new p.onnx.FunctionProto;if(t.name!=null&&(c.name=String(t.name)),t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.FunctionProto.input: array expected");c.input=[];for(var s=0;s<t.input.length;++s)c.input[s]=String(t.input[s])}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.FunctionProto.output: array expected");c.output=[];for(var s=0;s<t.output.length;++s)c.output[s]=String(t.output[s])}if(t.attribute){if(!Array.isArray(t.attribute))throw TypeError(".onnx.FunctionProto.attribute: array expected");c.attribute=[];for(var s=0;s<t.attribute.length;++s)c.attribute[s]=String(t.attribute[s])}if(t.attributeProto){if(!Array.isArray(t.attributeProto))throw TypeError(".onnx.FunctionProto.attributeProto: array expected");c.attributeProto=[];for(var s=0;s<t.attributeProto.length;++s){if(typeof t.attributeProto[s]!="object")throw TypeError(".onnx.FunctionProto.attributeProto: object expected");c.attributeProto[s]=p.onnx.AttributeProto.fromObject(t.attributeProto[s])}}if(t.node){if(!Array.isArray(t.node))throw TypeError(".onnx.FunctionProto.node: array expected");c.node=[];for(var s=0;s<t.node.length;++s){if(typeof t.node[s]!="object")throw TypeError(".onnx.FunctionProto.node: object expected");c.node[s]=p.onnx.NodeProto.fromObject(t.node[s])}}if(t.docString!=null&&(c.docString=String(t.docString)),t.opsetImport){if(!Array.isArray(t.opsetImport))throw TypeError(".onnx.FunctionProto.opsetImport: array expected");c.opsetImport=[];for(var s=0;s<t.opsetImport.length;++s){if(typeof t.opsetImport[s]!="object")throw TypeError(".onnx.FunctionProto.opsetImport: object expected");c.opsetImport[s]=p.onnx.OperatorSetIdProto.fromObject(t.opsetImport[s])}}return t.domain!=null&&(c.domain=String(t.domain)),c},a.toObject=function(t,c){c||(c={});var s={};if((c.arrays||c.defaults)&&(s.input=[],s.output=[],s.attribute=[],s.node=[],s.opsetImport=[],s.attributeProto=[]),c.defaults&&(s.name="",s.docString="",s.domain=""),t.name!=null&&t.hasOwnProperty("name")&&(s.name=t.name),t.input&&t.input.length){s.input=[];for(var d=0;d<t.input.length;++d)s.input[d]=t.input[d]}if(t.output&&t.output.length){s.output=[];for(var d=0;d<t.output.length;++d)s.output[d]=t.output[d]}if(t.attribute&&t.attribute.length){s.attribute=[];for(var d=0;d<t.attribute.length;++d)s.attribute[d]=t.attribute[d]}if(t.node&&t.node.length){s.node=[];for(var d=0;d<t.node.length;++d)s.node[d]=p.onnx.NodeProto.toObject(t.node[d],c)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(s.docString=t.docString),t.opsetImport&&t.opsetImport.length){s.opsetImport=[];for(var d=0;d<t.opsetImport.length;++d)s.opsetImport[d]=p.onnx.OperatorSetIdProto.toObject(t.opsetImport[d],c)}if(t.domain!=null&&t.hasOwnProperty("domain")&&(s.domain=t.domain),t.attributeProto&&t.attributeProto.length){s.attributeProto=[];for(var d=0;d<t.attributeProto.length;++d)s.attributeProto[d]=p.onnx.AttributeProto.toObject(t.attributeProto[d],c)}return s},a.prototype.toJSON=function(){return this.constructor.toObject(this,o.util.toJSONOptions)},a.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.FunctionProto"},a}(),i}(),r.exports=p});function zo(e,r){if(!e)throw new Error(typeof r=="string"?r:r())}function Ma(e){return new TextDecoder().decode(e)}var rt,Un,Cl,cr,Pd,Gt,lr,ke,ja,Go,eo,to,Ye=re(()=>{"use strict";ys(),Ed(),rt=rn(oo()),sn(),Un=class{static arraysEqual(e,r){if(e.length!==r.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!==r[o])return!1;return!0}},Cl=class{static preprocessInputShapes(e,r){let o=e.length===1?[1,e[0]]:e,n=r.length===1?[r[0],1]:r;return[o,n]}static postprocessOutputShape(e,r,o){r===1&&e.splice(e.length-2,1),o===1&&e.pop()}static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},cr=class qn{static calcShape(r,o,n=!1){let l=r.length,u=o.length;if(l===0)return o;if(u===0)return r;let p=Math.max(r.length,o.length),i=new Array(p);if(n){if(l<2||u<2)return;let a=Cl.calcMatMulShape([r[l-2],r[l-1]],[o[u-2],o[u-1]]);if(a===void 0)return;[i[p-2],i[p-1]]=a}for(let a=n?3:1;a<=p;a++){let t=l-a<0?1:r[l-a],c=u-a<0?1:o[u-a];if(t!==c&&t>1&&c>1)return;i[p-a]=Math.max(t,c)}return i}static index(r,o){let n=new Array(o.length);return qn.fillIndex(r,o,n),n}static fillIndex(r,o,n){let l=r.length-o.length;for(let u=0;u<o.length;u++)n[u]=r[l+u]%o[u]}static calc(r,o,n,l,u){let p=qn.calcShape(r.dims,o.dims);if(p){if(l&&!ke.areEqual(p,r.dims))return;let i=ke.size(p),a=l?r:new Kt(p,u||r.type);if(p.length===0)a.set([],n(r.get([]),o.get([])));else{let t=new Array(p.length),c=new Array(r.dims.length),s=new Array(o.dims.length),d=0,f=0,g=!1,b=!1;r.dims.length===0&&(d=r.get([]),g=!0),o.dims.length===0&&(f=o.get([]),b=!0);let y;for(let m=0;m<i;m++){y=m;for(let v=p.length-1;v>=0;v--)t[v]=y%p[v],y=Math.floor(y/p[v]);g||(qn.fillIndex(t,r.dims,c),d=r.get(c)),b||(qn.fillIndex(t,o.dims,s),f=o.get(s)),a.set(t,n(d,f))}}return a}}static isValidBroadcast(r,o){let n=r.length,l=o.length;if(n>l)return!1;for(let u=1;u<=n;u++)if(r[n-u]!==1&&r[n-u]!==o[l-u])return!1;return!0}static getBroadcastDims(r,o){let n=r.length,l=[];for(let u=0;u<n;u++){let p=n-1-u,i=r[p]||1;(o[o.length-1-u]||1)>1&&i===1&&l.unshift(p)}return l}},Pd=class{static getShapeOfGemmResult(e,r,o,n,l){if(e.length!==2||o.length!==2)throw new Error("shape need to be of size 2");let u,p,i;r?(u=e[1],p=e[0]):(u=e[0],p=e[1]);let a=-1;if(n?(i=o[0],a=1):(i=o[1],a=0),o[a]!==p)throw new Error("dimension mismatch");if(u<=0||i<=0||p<=0)throw new Error("invalid shape specified");if(l&&!cr.isValidBroadcast(l,[u,i]))throw new Error("gemm: invalid bias shape for broadcast");return[u,i,p]}},Gt=class Ua{static tensorDataTypeFromProto(r){switch(r){case rt.onnx.TensorProto.DataType.INT8:return"int8";case rt.onnx.TensorProto.DataType.UINT8:return"uint8";case rt.onnx.TensorProto.DataType.BOOL:return"bool";case rt.onnx.TensorProto.DataType.INT16:return"int16";case rt.onnx.TensorProto.DataType.UINT16:return"uint16";case rt.onnx.TensorProto.DataType.INT32:return"int32";case rt.onnx.TensorProto.DataType.UINT32:return"uint32";case rt.onnx.TensorProto.DataType.FLOAT:return"float32";case rt.onnx.TensorProto.DataType.DOUBLE:return"float64";case rt.onnx.TensorProto.DataType.STRING:return"string";case rt.onnx.TensorProto.DataType.INT64:return"int32";case rt.onnx.TensorProto.DataType.UINT64:return"uint32";default:throw new Error(`unsupported data type: ${rt.onnx.TensorProto.DataType[r]}`)}}static tensorDataTypeStringToEnum(r){switch(r){case"int8":return rt.onnx.TensorProto.DataType.INT8;case"uint8":return rt.onnx.TensorProto.DataType.UINT8;case"bool":return rt.onnx.TensorProto.DataType.BOOL;case"int16":return rt.onnx.TensorProto.DataType.INT16;case"uint16":return rt.onnx.TensorProto.DataType.UINT16;case"int32":return rt.onnx.TensorProto.DataType.INT32;case"uint32":return rt.onnx.TensorProto.DataType.UINT32;case"float32":return rt.onnx.TensorProto.DataType.FLOAT;case"float64":return rt.onnx.TensorProto.DataType.DOUBLE;case"string":return rt.onnx.TensorProto.DataType.STRING;case"int64":return rt.onnx.TensorProto.DataType.INT64;case"uint64":return rt.onnx.TensorProto.DataType.UINT64;default:throw new Error(`unsupported data type: ${r}`)}}static tensorDimsFromProto(r){return r.map(o=>Er.isLong(o)?o.toNumber():o)}static tensorValueTypeFromProto(r){return{tensorType:Ua.tensorDataTypeFromProto(r.elemType),shape:{dims:Ua.tensorDimsFromProto(r.shape.dim.map(o=>o.dimValue))}}}static tensorDimsFromORTFormat(r){let o=[];for(let n=0;n<r.dimsLength();n++)o.push(lr.longToNumber(r.dims(n)));return o}static tensorAttributesFromORTFormat(r){let o=[];for(let n=0;n<r.attributesLength();n++)o.push(r.attributes(n));return o}},lr=class{static longToNumber(e,r){return Er.isLong(e)?e.toNumber():e instanceof j.Long?Er.fromValue({low:e.low,high:e.high,unsigned:r??!1}).toNumber():e}static isLong(e){return Er.isLong(e)||e instanceof j.Long}},ke=class Tr{static size(r){return Tr.getSizeFromDimensionRange(r,0,r.length)}static sizeFromDimension(r,o){if(o<0||o>r.length)throw new Error(`invalid dimension of ${o} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return Tr.getSizeFromDimensionRange(r,o,r.length)}static sizeToDimension(r,o){if(o<0||o>r.length)throw new Error(`invalid dimension of ${o} for sizeToDimension as Tensor has ${r.length} dimensions.`);return Tr.getSizeFromDimensionRange(r,0,o)}static getSizeFromDimensionRange(r,o,n){let l=1;for(let u=o;u<n;u++){if(r[u]<=0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");l*=r[u]}return l}static computeStrides(r){let o=r.length;if(o===0)return[];if(o===1)return[1];let n=new Array(o);n[o-1]=1,n[o-2]=r[o-1];for(let l=o-3;l>=0;--l)n[l]=n[l+1]*r[l+1];return n}static transpose(r){return r.slice().reverse()}static indicesToOffset(r,o,n){n===void 0&&(n=r.length);let l=0;for(let u=0;u<n;++u)l+=o[u]*r[u];return l}static offsetToIndices(r,o){let n=o.length;if(n===0)return[];if(n===1)return[r*o[0]];let l=new Array(o.length);for(let u=0;u<l.length-1;++u)l[u]=Math.floor(r/o[u]),r-=l[u]*o[u];return l[l.length-1]=r,l}static normalizeAxis(r,o){if(r<-o&&r>=o)throw new Error("unsupported axis for this operation.");return r<0?r+o:r}static normalizeAxes(r,o){return r.map(n=>this.normalizeAxis(n,o))}static incrementIndex(r,o,n){if(o.length===0||r.length===0)throw new Error("Index incrementing unsupported for scalar Tensor");if(n===void 0)n=o.length;else if(n<=0||n>o.length)throw new Error("Incorrect axis to increment on");for(let l=n-1;l>=0&&(r[l]++,!(r[l]<o[l]));--l)r[l]=0}static calculateReshapedDims(r,o){if(o.length===0){if(r.length===0||Tr.size(r)===1)return[];throw new Error("cannot reshape to a scalar Tensor")}let n=o.length,l=new Array(n),u=-1,p=1;for(let a=0;a<n;a++){if(o[a]<-1)throw new Error("a dimension in shape hints cannot be less than -1");if(o[a]===-1){if(u!==-1)throw new Error("at most one dimension in shape hints can be -1");u=a}else{if(o[a]===0){if(a>=r.length)throw new Error("the dimension with value zero exceeds the dimension size of the input tensor");l[a]=r[a]}else l[a]=o[a];p*=l[a]}}let i=Tr.size(r);if(u!==-1){if(i%p!==0)throw new Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${r}] Output shape: [${o}]`);l[u]=i/p}else if(p!==i)throw new Error("reshapedDims and originalDims don't have matching sizes");return l}static sortBasedOnPerm(r,o){return o?o.map(n=>r[n]):r.slice().reverse()}static padShape(r,o){let n=r.length;return r.map((l,u)=>l+o[u]+o[u+n])}static areEqual(r,o){return r.length!==o.length?!1:r.every((n,l)=>n===o[l])}static validateDimsAndCalcSize(r){if(r.length>6)throw new TypeError("Only rank 0 to 6 is supported for tensor shape.");let o=1;for(let n of r){if(!Number.isInteger(n))throw new TypeError(`Invalid shape: ${n} is not an integer`);if(n<0||n>2147483647)throw new TypeError(`Invalid shape: length ${n} is not allowed`);o*=n}return o}static flattenShape(r,o){o<0&&(o+=r.length);let n=r.reduce((u,p)=>u*p,1),l=r.slice(o).reduce((u,p)=>u*p,1);return[n/l,l]}static squeezeShape(r,o){let n=new Array;o=Tr.normalizeAxes(o,r.length);for(let l=0;l<r.length;l++){let u=o.indexOf(l)>=0;if(u&&r[l]!==1)throw new Error("squeeze an axis of size different than 1");(o.length===0&&r[l]>1||o.length>0&&!u)&&n.push(r[l])}return n}static unsqueezeShape(r,o){let n=new Array(r.length+o.length);n.fill(0);for(let u=0;u<o.length;u++){let p=Tr.normalizeAxis(o[u],n.length);if(p>=n.length)throw new Error("'axes' has an out of range axis");if(n[p]!==0)throw new Error("'axes' has a duplicate axis");n[p]=1}let l=0;for(let u=0;u<n.length;u++)n[u]===0&&(n[u]=r[l++]);if(l!==r.length)throw new Error("the unsqueezed dimension could not be established");return n}},ja=class Cd{static splitShape(r,o,n,l){if(n.length===0){if(!l)throw new Error("need to know number of outputs when the 'split' attribute is not specified");Cd.determineSplit(r[o],l,n)}let u=[],p=[0];for(let i=0;i<n.length;++i){i!==0&&p.push(p[i-1]+n[i-1]);let a=r.slice();a[o]=n[i],u.push(a)}return[u,p]}static determineSplit(r,o,n){if(r%o!==0)throw new Error("cannot split tensor to equal sized parts");for(let l=0;l<o;++l)n.push(r/o)}},Go=class zn{static adjustPoolAttributes(r,o,n,l,u,p){if(!r&&n.length!==o.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(r)for(let i=0;i<o.length-2;i++)i>=n.length?n.push(o[i+2]):n[i]=o[i+2];for(let i=0;i<n.length;i++)if(i<l.length){if(l[i]<0)throw new Error("strides should be greater than or equal to 1")}else l.push(1);for(let i=0;i<n.length;i++)if(i<u.length){if(u[i]<0)throw new Error("dilations should be greater than or equal to 1")}else u.push(1);for(let i=0;i<n.length*2;i++)if(i<p.length){if(p[i]<0)throw new Error("pad should be greater than or equal to 1")}else p.push(0);for(let i=0;i<n.length;i++){if(n[i]<=0)throw new Error("kernel shapes need to be greater than 0");if(p[i]>=n[i]||p[i+n.length]>=n[i])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,o,n,l,u,p){if(p){if(u.length!==2*(r.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(o.length!==r.length-2)throw new Error("length of strides should be the length of data dimensions");if(l.length!==r.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let i=0;i<r.length-2;i++)zn.adjustPadAndReturnShape(r[i+2],o[i],n[i],l[i],u,i,i+r.length-2,p)}}static computePoolOutputShape(r,o,n,l,u,p,i){if(o.length<=0)throw new Error("input shape must be of size greater than 0");let a=[o[0],o[1]];return zn.computeShapeHelper(r,o,a,n,l,u,p,i),a}static computeConvOutputShape(r,o,n,l,u,p,i){if(r.length<=0||o.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let a=[r[0],o[0]];return zn.computeShapeHelper(!1,r,a,n,l,u,p,i),a}static computeShapeHelper(r,o,n,l,u,p,i,a){if(r)for(let t=0;t<o.length-2;t++)n.push(1);else for(let t=0;t<o.length-2;t++)n.push(zn.adjustPadAndReturnShape(o[t+2],l[t],u[t],p[t],i,t,t+o.length-2,a))}static adjustPadAndReturnShape(r,o,n,l,u,p,i,a){let t=n*(l-1)+1;if(a&&a!=="NOTSET")switch(a){case"VALID":return u[p]=0,u[i]=0,Math.floor((r-t)/o+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((r+o-1)/o-1)*o+l-r;return u[p]=Math.floor(a==="SAME_LOWER"?(c+1)/2:c/2),u[i]=c-u[p],Math.floor((r+c-l)/o+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((r+u[p]+u[i]-t)/o+1)}},eo=-34028234663852886e22,to=34028234663852886e22});function nv(e){switch(e){case"bool":case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;case"float64":return 8;default:throw new Error(`cannot calculate sizeof() on type ${e}`)}}function Ol(e){switch(e){case Re.onnx.TensorProto.DataType.UINT8:case Re.onnx.TensorProto.DataType.INT8:case Re.onnx.TensorProto.DataType.BOOL:return 1;case Re.onnx.TensorProto.DataType.UINT16:case Re.onnx.TensorProto.DataType.INT16:return 2;case Re.onnx.TensorProto.DataType.FLOAT:case Re.onnx.TensorProto.DataType.INT32:case Re.onnx.TensorProto.DataType.UINT32:return 4;case Re.onnx.TensorProto.DataType.INT64:case Re.onnx.TensorProto.DataType.DOUBLE:case Re.onnx.TensorProto.DataType.UINT64:return 8;default:throw new Error(`cannot calculate sizeof() on type ${Re.onnx.TensorProto.DataType[e]}`)}}function ov(e,r){return new(Od(r))(e)}function Od(e){switch(e){case"bool":case"uint8":return Uint8Array;case"int8":return Int8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"float32":return Float32Array;case"float64":return Float64Array;default:throw new Error("unspecified error")}}function qa(e,r){if(r===Re.onnx.TensorProto.DataType.INT64||r===Mo.TensorDataType.INT64){if(e.greaterThanOrEqual(2147483648)||e.lessThan(-2147483648))throw new TypeError("int64 is not supported")}else if(r===Re.onnx.TensorProto.DataType.UINT32||r===Mo.TensorDataType.UINT32||r===Re.onnx.TensorProto.DataType.UINT64||r===Mo.TensorDataType.UINT64){if(e.greaterThanOrEqual(4294967296)||e.lessThan(0))throw new TypeError("uint64 is not supported")}else throw new TypeError(`not a LONG type: ${Re.onnx.TensorProto.DataType[r]}`);return e.toNumber()}function Il(e,r,o){switch(r){case Re.onnx.TensorProto.DataType.BOOL:case Re.onnx.TensorProto.DataType.UINT8:return e.getUint8(o);case Re.onnx.TensorProto.DataType.INT8:return e.getInt8(o);case Re.onnx.TensorProto.DataType.UINT16:return e.getUint16(o,!0);case Re.onnx.TensorProto.DataType.INT16:return e.getInt16(o,!0);case Re.onnx.TensorProto.DataType.FLOAT:return e.getFloat32(o,!0);case Re.onnx.TensorProto.DataType.INT32:return e.getInt32(o,!0);case Re.onnx.TensorProto.DataType.UINT32:return e.getUint32(o,!0);case Re.onnx.TensorProto.DataType.INT64:return qa(Er.fromBits(e.getUint32(o,!0),e.getUint32(o+4,!0),!1),r);case Re.onnx.TensorProto.DataType.DOUBLE:return e.getFloat64(o,!0);case Re.onnx.TensorProto.DataType.UINT64:return qa(Er.fromBits(e.getUint32(o,!0),e.getUint32(o+4,!0),!0),r);default:throw new Error(`cannot read from DataView for type ${Re.onnx.TensorProto.DataType[r]}`)}}var Fl,Re,Mo,Kt,sn=re(()=>{"use strict";Fl=rn(U0()),Ed(),Yo(),Re=rn(oo()),Ye(),Mo=De.experimental.fbs,Kt=class jo{constructor(r,o,n,l,u,p=Fl.Guid.create()){this.dims=r,this.type=o,this.dataProvider=n,this.asyncDataProvider=l,this.cache=u,this.dataId=p,this.size=ke.validateDimsAndCalcSize(r);let i=this.size,a=n===void 0&&l===void 0&&u===void 0;if(u!==void 0&&u.length!==i)throw new RangeError("Input dims doesn't match data length.");if(o==="string"){if(u!==void 0&&(!Array.isArray(u)||!u.every(t=>typeof t=="string")))throw new TypeError("cache should be a string array");a&&(this.cache=new Array(i))}else{if(u!==void 0){let t=Od(o);if(!(u instanceof t))throw new TypeError(`cache should be type ${t.name}`)}if(a){let t=new ArrayBuffer(i*nv(o));this.cache=ov(t,o)}}}get data(){if(this.cache===void 0){let r=this.dataProvider(this.dataId);if(r.length!==this.size)throw new Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");this.cache=r}return this.cache}get stringData(){if(this.type!=="string")throw new TypeError("data type is not string");return this.data}get integerData(){switch(this.type){case"uint8":case"int8":case"uint16":case"int16":case"int32":case"uint32":case"bool":return this.data;default:throw new TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)")}}get floatData(){switch(this.type){case"float32":case"float64":return this.data;default:throw new TypeError("data type is not float (float32, float64)")}}get numberData(){if(this.type!=="string")return this.data;throw new TypeError("type cannot be non-number (string)")}get(r){return this.data[ke.indicesToOffset(r,this.strides)]}set(r,o){this.data[ke.indicesToOffset(r,this.strides)]=o}async getData(){return this.cache===void 0&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||(this._strides=ke.computeStrides(this.dims)),this._strides}static fromProto(r){if(!r)throw new Error("cannot construct Value from an empty tensor");let o=Gt.tensorDataTypeFromProto(r.dataType),n=Gt.tensorDimsFromProto(r.dims),l=new jo(n,o);if(o==="string")r.stringData.forEach((u,p)=>{l.data[p]=Ma(u)});else if(r.rawData&&typeof r.rawData.byteLength=="number"&&r.rawData.byteLength>0){let u=l.data,p=new DataView(r.rawData.buffer,r.rawData.byteOffset,r.rawData.byteLength),i=Ol(r.dataType),a=r.rawData.byteLength/i;if(r.rawData.byteLength%i!==0)throw new Error("invalid buffer length");if(u.length!==a)throw new Error("buffer length mismatch");for(let t=0;t<a;t++){let c=Il(p,r.dataType,t*i);u[t]=c}}else{let u;switch(r.dataType){case Re.onnx.TensorProto.DataType.FLOAT:u=r.floatData;break;case Re.onnx.TensorProto.DataType.INT32:case Re.onnx.TensorProto.DataType.INT16:case Re.onnx.TensorProto.DataType.UINT16:case Re.onnx.TensorProto.DataType.INT8:case Re.onnx.TensorProto.DataType.UINT8:case Re.onnx.TensorProto.DataType.BOOL:u=r.int32Data;break;case Re.onnx.TensorProto.DataType.INT64:u=r.int64Data;break;case Re.onnx.TensorProto.DataType.DOUBLE:u=r.doubleData;break;case Re.onnx.TensorProto.DataType.UINT32:case Re.onnx.TensorProto.DataType.UINT64:u=r.uint64Data;break;default:throw new Error("unspecific error")}if(u==null)throw new Error("failed to populate data from a tensorproto value");let p=l.data;if(p.length!==u.length)throw new Error("array length mismatch");for(let i=0;i<u.length;i++){let a=u[i];Er.isLong(a)?p[i]=qa(a,r.dataType):p[i]=a}}return l}static fromData(r,o,n){return new jo(o,n,void 0,void 0,r)}static fromOrtTensor(r){if(!r)throw new Error("cannot construct Value from an empty tensor");let o=Gt.tensorDimsFromORTFormat(r),n=Gt.tensorDataTypeFromProto(r.dataType()),l=new jo(o,n);if(n==="string")for(let u=0;u<r.stringDataLength();u++)l.data[u]=r.stringData(u);else if(r.rawDataArray()&&typeof r.rawDataLength()=="number"&&r.rawDataLength()>0){let u=l.data,p=new DataView(r.rawDataArray().buffer,r.rawDataArray().byteOffset,r.rawDataLength()),i=Ol(r.dataType()),a=r.rawDataLength()/i;if(r.rawDataLength()%i!==0)throw new Error("invalid buffer length");if(u.length!==a)throw new Error("buffer length mismatch");for(let t=0;t<a;t++){let c=Il(p,r.dataType(),t*i);u[t]=c}}return l}}});function Ge(e){return e===1?Id:Fd}function iv(e){let r=Ge(e);return`${r.version}
      precision highp float;
      ${r.attribute} vec3 position;
      ${r.attribute} vec2 textureCoord;

      ${r.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`}function av(e){let r=Ge(e);return`${r.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${r.varyingFrag} vec2 TexCoords;
    ${r.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `}function sv(e,r){let o=Ge(e);return`
  void main() {
    int indices[${r}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${o.output} = result;
  }
  `}var Id,Fd,gt=re(()=>{"use strict";Id={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},Fd={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"}}),Ve=re(()=>{"use strict"});async function Ll(e,r=n=>0,o){return new Promise((n,l)=>{let u=0,p=()=>{if(e()){n();return}u++;let i=r(u);if(o!=null&&u>=o){l();return}setTimeout(p,i)};p()})}function Ji(e){return zo(typeof e<"u"&&e.length!==0,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)}function uv(e){return zo(typeof e<"u"&&e.length!==0,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)+"AtOutCoords"}function In(e,r){let o=JSON.parse(JSON.stringify(e));return o=r,o}function Fn(e,r){return r.map(o=>e[o]).join(", ")}function Dr(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function an(e=6){return["x","y","z","w","u","v"].slice(0,e)}var gr=re(()=>{"use strict";Ye()});function lv(e,r){return an(r).map(o=>`${e}.${o}`)}function vs(e,r){return r===1?[e]:lv(e,r)}function io(){return`
    float getChannel(vec4 frag, int dim) {
      int modCoord = imod(dim, 2);
      return modCoord == 0 ? frag.r : frag.g;
    }

    float getChannel(vec4 frag, vec2 innerDims) {
      vec2 modCoord = mod(innerDims, 2.);
      return modCoord.x == 0. ?
        (modCoord.y == 0. ? frag.r : frag.g) :
        (modCoord.y == 0. ? frag.b : frag.a);
    }
  `}var un=re(()=>{"use strict";gr()});function cv(e,r,o){if(e===0)return"false";if(e===1)return`rc > ${r[0]}`;let n="";for(let l=e-2;l<e;l++)n+=`${o[l]} >= ${r[l-e+2]}`,l<e-1&&(n+="||");return n}function pv(e,r){let o=e.length;if(o===0)return"getA(), 0, 0, 0";if(o===1)return`getA(rc),
            rc + 1 >= ${e[0]} ? 0. : getA(rc + 1),
            0, 0`;let n="r, c",l="r, cp1",u="rp1, c",p="rp1, cp1",i="";if(o>2)for(let a=0;a<o-2;++a)i=i+`${r[a]},`;return`getA(${i}${n}),
          rEdge ? 0. : getA(${i}${u}),
          cEdge ? 0. : getA(${i}${l}),
          rEdge || cEdge ? 0. : getA(${i}${p})`}function dv(e,r,o,n){return e===0||e===1?"":`
    int r = ${r[e-2]};
    int c = ${r[e-1]};
    int rp1 = ${r[e-2]} + 1;
    int cp1 = ${r[e-1]} + 1;
    bool rEdge = rp1 >= ${n};
    bool cEdge = cp1 >= ${o};
    `}var Zi,kl,Ld,fv=re(()=>{"use strict";gt(),Ve(),gr(),un(),Zi={name:"pack",inputNames:["A"],inputTypes:[1]},kl=(e,r)=>{let o=Ge(e.session.backend.glContext.version),n=r.dims,l=n.length,u=r.dims.length,p=Dr(u),i=vs("rc",u),a=dv(u,i,n[n.length-2],n[n.length-1]),t;l===0?t=[1,1]:l===1?t=[n[0],1]:t=[n[u-1],n[u-2]];let c=cv(u,t,i),s=pv(n,i),d=`
        void main() {
          ${p} rc = getOutputCoords();

          if(${c}) {
            ${o.output} = vec4(0);
          } else {
            ${a}

            ${o.output} = vec4(${s});
          }
        }
      `;return{...Zi,hasMain:!0,output:{dims:r.dims,type:r.type,textureType:2},shaderSource:d}},Ld=(e,r)=>({...Zi,get:()=>kl(e,r)})});function Nl(e){if(e.length===0)return[1,1,1];let r=1;for(let o=0;o<e.length-2;++o)r*=e[o];return[r,e.length>1?e[e.length-2]:1,e[e.length-1]]}function hv(e,r){let o=!1;return e.length===0||r.length===0?o=!0:e.length<2||r.length<2?o=e[e.length-1]===r[r.length-1]:o=e[e.length-1]===r[r.length-1]&&e[e.length-2]===r[r.length-2],o}function gv(e){let r=ke.computeStrides(e),o=["b","r","c"],n="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${r.map((l,u)=>{let p=`int ${o[u]} = ${n} / ${l}`,i=u===r.length-1?`int ${o[u+1]} = ${n} - ${o[u]} * ${l}`:`index -= ${o[u]} * ${l}`;return`${p}; ${i};`}).join("")}
      return ivec3(b, r, c);
    }
  `}function mv(e){let r=ke.computeStrides(e);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${r[0]} + coords.z * ${r[1]} + coords.y;
  }
`}var Rl,Bl,kd,bv=re(()=>{"use strict";Ye(),gt(),Ve(),un(),Rl=e=>({name:"Reshape (packed)",inputTypes:[2],inputNames:["A"],cacheHint:`${e}`}),Bl=(e,r,o,n)=>{let l=r.dims,u=n,p="";for(let t=0;t<4;t++){let c="";switch(t){case 0:c="outputCoords = rc;";break;case 1:c="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:c="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:c="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw new Error}p+=`
        ${c}
        ${t>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${t}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${t>0?"}":""}
      `}let i=Ge(e.session.backend.glContext.version),a=`
      ${gv(l)}
      ${mv(u)}
      ${io()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${u[2]};
        int cols = ${u[1]};

        ${p}
        ${i.output} = result;
      }
    `;return{...o,output:{dims:u,type:r.type,textureType:2},shaderSource:a,hasMain:!0}},kd=(e,r,o)=>{let n=Rl(o);return{...n,get:()=>Bl(e,r,n,o)}}}),za,yv=re(()=>{"use strict";gt(),Ve(),za=(e,r)=>{let o=r.shape,n=Ge(e.session.backend.glContext.version),l=`
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
        return vec4(255, 255, 255, 255);
      }

      highp float av = abs(v);

      if(av < FLOAT_MIN) {
        return vec4(0.0, 0.0, 0.0, 0.0);
      } else if(v > FLOAT_MAX) {
        return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
      } else if(v < -FLOAT_MAX) {
        return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
      }

      highp vec4 c = vec4(0,0,0,0);

      highp float e = floor(log2(av));
      highp float m = exp2(fract(log2(av))) - 1.0;

      c[2] = floor(128.0 * m);
      m -= c[2] / 128.0;
      c[1] = floor(32768.0 * m);
      m -= c[1] / 32768.0;
      c[0] = floor(8388608.0 * m);

      highp float ebias = e + 127.0;
      c[3] = floor(ebias / 2.0);
      ebias -= c[3] * 2.0;
      c[2] += floor(ebias) * 128.0;

      c[3] += 128.0 * step(0.0, -v);

      return c / 255.0;
    }

    void main() {
      float value = ${n.texture2D}(X,TexCoords).r;
      ${n.output} = encodeAsUint8(value);
    }`,u={name:"Uint8Encode",inputTypes:[0],inputNames:["X"],output:{dims:o,type:r.tensor.type,textureType:3},shaderSource:l,hasMain:!0};return e.executeProgram(u,[r.tensor])}});function vv(e,r){if(e===1)return"rc";let o="";for(let n=0;n<e;n++)o+=r[n],n<e-1&&(o+=",");return o}var Qi,$l,Nd,xv=re(()=>{"use strict";gt(),Ve(),gr(),un(),Qi={name:"unpack",inputNames:["A"],inputTypes:[2]},$l=(e,r)=>{let o=r.dims.length,n=vs("rc",o),l=n.slice(-2),u=Dr(o),p=io(),i=r.dims.length===0?"":vv(o,n),a=o<=1?"rc":`vec2(${l.join(",")})`,t=Ge(e.session.backend.glContext.version),c=`
    ${p}
    void main() {
      ${u} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${i});

       ${t.output} = vec4(getChannel(packedInput, ${a}), 0, 0, 0);
     }
   `;return{...Qi,hasMain:!0,output:{dims:r.dims,type:r.type,textureType:0},shaderSource:c}},Nd=(e,r)=>({...Qi,get:()=>$l(e,r)})}),Rd,Ga,Bd,Vo=re(()=>{"use strict";ir(),Rd=class{constructor(e,r=1){if(r===1)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=r;else if(r===4)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=r;else throw new Error(`Invalid number of channels: ${r}`)}encode(e,r){let o,n;return e.constructor!==Float32Array&&(yt.warning("Encoder","data was not of type Float32; creating new Float32Array"),n=new Float32Array(e)),r*this.channelSize>e.length?(yt.warning("Encoder","Source data too small. Allocating larger array"),n=e,o=this.allocate(r*this.channelSize),n.forEach((l,u)=>o[u]=l)):(n=e,o=n),o}allocate(e){return new Float32Array(e*4)}decode(e,r){return this.channelSize===1?e.filter((o,n)=>n%4===0).subarray(0,r):e.subarray(0,r)}},Ga=class{constructor(e,r=1,o){if(r!==1&&r!==4)throw new Error(`Invalid number of channels: ${r}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=r,this.textureType=o||e.FLOAT}encode(e,r){let o=e;return this.channelSize===1&&(yt.verbose("Encoder","Exploding into a larger array"),o=this.allocate(r),e.forEach((n,l)=>o[l*4]=n)),o}allocate(e){return new Float32Array(e*4)}decode(e,r){return this.channelSize===1?e.filter((o,n)=>n%4===0).subarray(0,r):e.subarray(0,r)}},Bd=class{constructor(e,r=1){if(this.channelSize=4,r===1)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=r;else if(r===4)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=r;else throw new Error(`Invalid number of channels: ${r}`)}encode(e,r){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,r){if(e instanceof Uint8Array)return e.subarray(0,r);throw new Error(`Invalid array type: ${e.constructor}`)}}}),Yn,$d,Va,wv=re(()=>{"use strict";Ye(),Ve(),Yn=(e,r,o)=>{let n=o===0||o===1?1:4,l=o===2,u=o===1||o===2,p=o===4?r.length-1:void 0,i=o===4?r.map((a,t)=>t===r.length-1?a*4:a):void 0;return Va(e,r,n,i,{isPacked:l,reverseWH:u,breakAxis:p})},$d=(e,r,o)=>{let n=Yn(e,r,o);return[n.width,n.height]},Va=(e,r,o=1,n,l)=>{let u=!!(l&&l.isPacked),[p,i]=e.computeTextureWH(u&&n||r,l),a=r.length,t=r.slice(0);if(a===0&&(t=[1]),o===1)n=r;else if(u){if(o!==4)throw new Error("a packed texture must be 4-channel");n=r,a>0&&(t[a-1]=Math.ceil(t[a-1]/2)),a>1&&(t[a-2]=Math.ceil(t[a-2]/2))}else if(!n)throw new Error("Unpacked shape is needed when using channels > 1");return{width:p,height:i,channels:o,isPacked:u,shape:t,strides:ke.computeStrides(t),unpackedShape:n,reversedWH:l&&l.reverseWH}}}),Ml,Md,Tv=re(()=>{"use strict";ir(),sn(),Ye(),fv(),bv(),yv(),xv(),Vo(),wv(),Ve(),Ml=(e,r)=>{let o=r.map(l=>`${l.unpackedShape.join(",")};${l.width}x${l.height}`).join("_"),n=e.name;return e.cacheHint&&(n+="["+e.cacheHint+"]"),n+=":"+o,n},Md=class{constructor(e){this.session=e,this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,r){return $d(this.session.layoutStrategy,e,r)}executeProgram(e,r){if(r.length<e.inputNames.length)throw new Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw new Error("input names size does not match input types");let o=[];for(let a=0;a<e.inputNames.length;++a)o[a]=this.getOrCreateTextureData(r[a],e.inputTypes[a]);let n=Ml(e,o),l=this.session.programManager.getArtifact(n),u=l?l.programInfo:typeof e.get=="function"?e.get():e,p=Yn(this.session.layoutStrategy,u.output.dims,u.output.textureType),i=this.createTextureData(p,u.output.type);return l||(l=this.session.programManager.build(u,o,i),this.session.programManager.setArtifact(n,l)),this.runProgram(l,o,i),i}run(e,r){return this.executeProgram(e,r).tensor}runProgram(e,r,o){for(let n=0;n<r.length;++n)if(!!r[n].isPacked!=(e.programInfo.inputTypes[n]===2))throw new Error(`input[${n}] property packed inconsistent`);if(!!o.isPacked!=(e.programInfo.output.textureType===2))throw new Error("output property packed inconsistent");this.session.programManager.run(e,r,o)}getOrCreateTextureData(e,r){let o=this.getTextureData(e.dataId,r===2);if(!o&&(o=this.getTextureData(e.dataId,r!==2),o))return r===2?this.pack(o):this.unpack(o);if(!o){let n=Yn(this.session.layoutStrategy,e.dims,r);if(r===4){let l=e.dims;if(l.length===4){let u=[l[0],Math.ceil(l[1]*l[2]*l[3]/4)],p=Yn(this.session.layoutStrategy,u,r),i=e.numberData;if(l[1]*l[2]*l[3]%4!==0){let a=l[0],t=l[1]*l[2]*l[3],c=Math.ceil(t*1/4)*4,s=a*c;i=new Float32Array(s);for(let d=0;d<a;++d){let f=d*t,g=d*c+d%1*t;i.set(e.numberData.subarray(f,f+t),g)}}return this.createTextureData(p,e.type,i,e,1)}}if(r===2){let l=Va(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),u=this.createTextureData(l,e.type,e.numberData,e,1);o=this.pack(u)}else o=this.createTextureData(n,e.type,e.numberData,e,1)}return o}createTextureDataFromLayoutBindTensor(e,r,o,n){return this.createTextureData(e,r,o,n,1)}createTextureData(e,r,o,n,l){yt.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(e)}]`);let u=this.session.textureManager.createTextureFromLayout(r,e,o,l);return this.createTextureDataFromTexture(e,r,u,n)}reshapeUnpacked(e,r){let o=this.getOrCreateTextureData(e,0),n={channels:o.channels,height:o.height,width:o.width,shape:r.length!==0?r:[1],strides:ke.computeStrides(r),unpackedShape:r};return this.createTextureDataFromTexture(n,e.type,o.texture).tensor}reshapePacked(e,r){let o=this.getOrCreateTextureData(e,2);if(hv(e.dims,r)){let i={channels:o.channels,height:o.height,width:o.width,shape:r.length!==0?r:[1],strides:ke.computeStrides(r),unpackedShape:r,isPacked:!0};return this.createTextureDataFromTexture(i,e.type,o.texture).tensor}let n=Nl(e.dims),l=Nl(r),u=this.reshapePacked(e,n),p=this.run(kd(this,u,l),[u]);return this.reshapePacked(p,r)}cast(e,r){let o=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(o,r,o.texture).tensor}createTextureDataFromTexture(e,r,o,n,l){let u={...e,tensor:n||new Kt(e.unpackedShape,r,p=>this.readTexture(u),async p=>this.readTextureAsync(u),void 0,l),texture:o};return this.setTextureData(u.tensor.dataId,u,e.isPacked),u}getTextureData(e,r=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,r):r?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,r,o=!1){this.session.isInitializer(e)?this.session.setTextureData(e,r,o):(o?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,r)}isTextureLayoutCached(e,r=!1){return!!this.getTextureData(e.dataId,r)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(za(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(za(this,e))}pack(e){return this.executeProgram(Ld(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(Nd(this,e.tensor),[e.tensor])}}}),jl,ot,St=re(()=>{"use strict";jl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ot=e=>new jl(e)}),ea,jd,Ud,Ul,ql,Av=re(()=>{"use strict";St(),gt(),Ve(),ea={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[0,0,0,0,0]},jd=(e,r,o)=>(ql(r),[e.run({...ea,cacheHint:o.cacheKey,get:()=>Ul(e,r,o)},r)]),Ud=e=>{let r=e.attributes.getFloat("epsilon",1e-5),o=e.attributes.getFloat("momentum",.9),n=e.attributes.getInt("spatial",1);return ot({epsilon:r,momentum:o,spatial:n})},Ul=(e,r,o)=>{let n=Ge(e.session.backend.glContext.version),l=r[0].dims.length,[u,p]=e.calculateTextureWidthAndHeight(r[1].dims,0),i=`
  float process(int[${l}] indices) {
    vec2 position = offsetToCoords(indices[1], ${u}, ${p});
    float scale = getColorAsFloat(${n.texture2D}(Scale, position));
    float mean = getColorAsFloat(${n.texture2D}(Mean, position));
    float variance = getColorAsFloat(${n.texture2D}(Variance, position));
    float b = getColorAsFloat(${n.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${o.epsilon})) ) + b;
  }`;return{...ea,output:{dims:r[0].dims,type:r[0].type,textureType:0},shaderSource:i}},ql=e=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs.");let r=e[0],o=e[1],n=e[2],l=e[3],u=e[4];if(r.dims.length<3||o.dims.length!==1||n.dims.length!==1||l.dims.length!==1||u.dims.length!==1)throw new Error("invalid input shape.");if(o.dims[0]!==r.dims[1]||n.dims[0]!==r.dims[1]||l.dims[0]!==r.dims[1]||u.dims[0]!==r.dims[1])throw new Error("invalid input shape.");if(r.type!=="float32"&&r.type!=="float64"||o.type!=="float32"&&o.type!=="float64"||n.type!=="float32"&&n.type!=="float64"||l.type!=="float32"&&l.type!=="float64"||u.type!=="float32"&&u.type!=="float64")throw new Error("invalid input tensor types.")}}),qd,ln,me,Ka,zd,Sr=re(()=>{"use strict";qd=class{constructor(e,r,o,n){this.glContext=e,this.programInfo=r,this.inputTextureLayouts=o,this.outputTextureLayout=n}},ln=class{constructor(e){this.context=e}},me=class{constructor(e,r){this.routineBody=e,this.dependencies=r}},Ka=class{constructor(e,r,o){this.name=e,o?this.dependencies=o:this.dependencies=[],r&&(this.routineBody=r)}addDependency(e){e&&this.dependencies.push(e)}},zd=class{static returnOrderedNodes(e){if(!e||e.length===0)return[];if(e.length===1)return e;let r=new Set,o=new Set,n=new Array;return this.createOrderedNodes(e,r,o,n),n}static createOrderedNodes(e,r,o,n){for(let l=0;l<e.length;++l)this.dfsTraverse(e[l],r,o,n)}static dfsTraverse(e,r,o,n){if(!e||o.has(e.name))return;if(r.has(e.name))throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");r.add(e.name);let l=e.dependencies;if(l&&l.length>0)for(let u=0;u<l.length;++u)this.dfsTraverse(l[u],r,o,n);n.push(e),o.add(e.name),r.delete(e.name)}}});function _v(){let e="add_";return{body:`
  float ${e}(float a, float b) {
    return a + b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:e,type:0}}function Ev(){let e="div_";return{body:`
  float ${e}(float a, float b) {
    return a / b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:e,type:0}}function Dv(){let e="mul_";return{body:`
  float ${e}(float a, float b) {
    return a * b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:e,type:0}}function Sv(){let e="sub_";return{body:`
  float ${e}(float a, float b) {
    return a - b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:e,type:0}}function Pv(){let e="equal_";return{body:`
  float ${e}(float a, float b) {
    return float(a == b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:e,type:0}}function Cv(){let e="greater_";return{body:`
  float ${e}(float a, float b) {
    return float(a > b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:e,type:0}}function Ov(){let e="less_";return{body:`
  float ${e}(float a, float b) {
    return float(a < b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:e,type:0}}function Iv(){let e="and_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,name:e,type:0}}function Fv(){let e="or_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `,name:e,type:0}}function Lv(){let e="xor_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,name:e,type:0}}function kv(){return Rv("pow")}function Nv(){let e="prelu_";return{body:`
  float ${e}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,name:e,type:0}}function Rv(e){let r=`${e}_`;return{body:`
  float ${r}(float a, float b) {
    return ${e}(a, b);
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return ${e}(v1, v2);
  }
  `,name:r,type:0}}var qt,zl,Gd,Vd,Kd,Hd,Wd,Xd,Yd,Jd,Zd,Qd,ef,tf,Bv=re(()=>{"use strict";Ye(),Sr(),gt(),Ve(),qt=(e,r,o,n=r[0].type,l)=>{let u=e.session.pack?2:0;return{name:o.name,inputNames:["A","B"],inputTypes:[u,u],cacheHint:l,get:()=>zl(e,r,o,n)}},zl=(e,r,o,n=r[0].type)=>{let l=e.session.pack?2:0,u=!ke.areEqual(r[0].dims,r[1].dims),p=r[0].dims,i=e.session.pack;if(u){let c=cr.calcShape(r[0].dims,r[1].dims,!1);if(!c)throw new Error("Can't perform binary op on the given tensors");p=c;let s=p.length,d=r[0].dims.length!==0?r[0].dims.length:1,f=r[1].dims.length!==0?r[1].dims.length:1,g=r[0].dims.length!==0?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",b=r[1].dims.length!==0?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",y=Ge(e.session.backend.glContext.version),m=i?`
      ${o.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${o.name}(a, b);
        ${y.output} = result;
      }`:`
      ${o.body}
      float process(int indices[${s}]) {
        int aindices[${d}];
        int bindices[${f}];
        ${g}
        ${b}
        return ${o.name}(_A(aindices), _B(bindices));
      }`;return{name:o.name,inputNames:["A","B"],inputTypes:[l,l],output:{dims:p,type:n,textureType:l},shaderSource:m,hasMain:i}}let a=Ge(e.session.backend.glContext.version),t=`
    ${o.body}
    void main() {
      vec4 v1 = ${a.texture2D}(A, TexCoords);
      vec4 v2 = ${a.texture2D}(B, TexCoords);
      vec4 result = ${o.name}(v1, v2);
      ${a.output} = result;
    }
    `;return{name:o.name,inputNames:["A","B"],inputTypes:[l,l],output:{dims:r[0].dims,type:n,textureType:l},shaderSource:t,hasMain:!0}},Gd=(e,r)=>[e.run(qt(e,r,_v()),r)],Vd=(e,r)=>[e.run(qt(e,r,Iv(),"bool"),r)],Kd=(e,r)=>[e.run(qt(e,r,Ev()),r)],Hd=(e,r)=>[e.run(qt(e,r,Pv(),"bool"),r)],Wd=(e,r)=>[e.run(qt(e,r,Cv(),"bool"),r)],Xd=(e,r)=>[e.run(qt(e,r,Ov(),"bool"),r)],Yd=(e,r)=>[e.run(qt(e,r,Dv()),r)],Jd=(e,r)=>[e.run(qt(e,r,Fv(),"bool"),r)],Zd=(e,r)=>[e.run(qt(e,r,kv()),r)],Qd=(e,r)=>[e.run(qt(e,r,Nv()),r)],ef=(e,r)=>[e.run(qt(e,r,Sv()),r)],tf=(e,r)=>[e.run(qt(e,r,Lv(),"bool"),r)]}),rf,nf,Gl,$v=re(()=>{"use strict";Ye(),rf=(e,r,o)=>(Gl(r),[e.cast(r[0],o)]),nf=e=>Gt.tensorDataTypeFromProto(e.attributes.getInt("to")),Gl=e=>{if(!e||e.length!==1)throw new Error("Cast requires 1 input.");if(e[0].type==="string")throw new Error("Invalid input type.")}}),Vl,Kl,of,Ln,Mv=re(()=>{"use strict";gt(),Ve(),gr(),un(),Vl=(e,r)=>({name:"Concat (packed)",inputNames:Array.from({length:e},(o,n)=>`X${n}`),inputTypes:Array(e).fill(2),cacheHint:r}),Kl=(e,r,o,n)=>{let l=o[0].dims.slice();if(n>=l.length||n<-1*l.length)throw new Error("axis specified for concat doesn't match input dimensionality");n<0&&(n=l.length+n);let u=l.slice(0);for(let q=1;q<o.length;q++){let Z=o[q].dims.slice();for(let N=0;N<l.length;N++)if(N===n)u[n]+=Z[N];else if(l[N]!==Z[N])throw new Error("non concat dimensions must match")}let p=u.length,i=vs("coords",p),a=Dr(p),t=io(),c=o.map(q=>q.dims),s=an(p),d=new Array(c.length-1);d[0]=c[0][n];for(let q=1;q<d.length;q++)d[q]=d[q-1]+c[q][n];let f=s[n],g=s.slice(-2),b=s.join(),y=`if (${f} < ${d[0]}) {
        return getChannel(
            getX0(${b}), vec2(${g.join()}));
        }`;for(let q=1;q<d.length;q++){let Z=d[q-1];y+=`
            if (${f} < ${d[q]}  && ${f} >= ${d[q-1]}) {
              return getChannel(
                getX${q}(${Ln(s,f,Z)}),
                vec2(${Ln(g,f,Z)}));
            }`}let m=d.length,v=d[d.length-1];y+=`
            return getChannel(
              getX${m}(${Ln(s,f,v)}),
              vec2(${Ln(g,f,v)}));`;let C=Ge(e.session.backend.glContext.version),M=`
          ${t}
          float getValue(${s.map(q=>"int "+q)}) {
            ${y}
          }

          void main() {
            ${a} coords = getOutputCoords();
            int lastDim = coords.${s[p-1]};
            coords.${s[p-1]} = coords.${s[p-2]};
            coords.${s[p-2]} = lastDim;

            vec4 result = vec4(getValue(${i}), 0., 0., 0.);

            ${i[p-1]} = ${i[p-1]} + 1;
            if (${i[p-1]} < ${u[p-1]}) {
              result.g = getValue(${i});
            }

            ${i[p-2]} = ${i[p-2]} + 1;
            if (${i[p-2]} < ${u[p-2]}) {
              result.a = getValue(${i});
            }

            ${i[p-1]} = ${i[p-1]} - 1;
            if (${i[p-2]} < ${u[p-2]} &&
                ${i[p-1]} < ${u[p-1]}) {
              result.b = getValue(${i});
            }
            ${C.output} = result;
          }
        `;return{...r,output:{dims:u,type:o[0].type,textureType:2},shaderSource:M,hasMain:!0}},of=(e,r,o)=>{let n=Vl(r.length,o.cacheKey);return{...n,get:()=>Kl(e,n,r,o.axis)}},Ln=(e,r,o)=>{let n=e.indexOf(r);return e.map((l,u)=>u===n?`${l} - ${o}`:l).join()}}),af,Hl,Wl,Xl,ta,Yl,Jl,Zl,sf,Ql,jv=re(()=>{"use strict";St(),Ve(),Mv(),af=(e,r,o)=>(Ql(r),e.session.pack&&r[0].dims.length>1?[e.run(of(e,r,o),r)]:[e.run(Xl(e,r,o),r)]),Hl=(e,r)=>({name:"Concat",inputNames:Array.from({length:e},(o,n)=>`X${n}`),inputTypes:Array(e).fill(0),cacheHint:r}),Wl=(e,r,o,n)=>{let l=o[0].dims.slice();if(n>=l.length||n<-1*l.length)throw new Error("axis specified for concat doesn't match input dimensionality");n<0&&(n=l.length+n);let u=l.slice(0);for(let f=1;f<o.length;f++){let g=o[f].dims.slice();for(let b=0;b<l.length;b++)if(b===n)u[n]+=g[b];else if(l[b]!==g[b])throw new Error("non concat dimensions must match")}let p=u.length,i=new Array(o.length),a=0;for(let f=0;f<i.length;++f)a+=o[f].dims[n],i[f]=a;let t="";o.length<5?t=ta(i):t=Yl(i);let c=Jl(o.length,p),s=Zl(i),d=`
        ${c}
        ${s}
        ${t}
        float process(int indices[${p}]) {
          int textureIndex = getTextureWhereDataResides (indices[${n}]);

          if(textureIndex != 0) {
            indices[${n}] = indices[${n}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...r,output:{dims:u,type:o[0].type,textureType:0},shaderSource:d}},Xl=(e,r,o)=>{let n=Hl(r.length,o.cacheKey);return{...n,get:()=>Wl(e,n,r,o.axis)}},ta=e=>`int getTextureWhereDataResides(int index) {
      ${e.map((r,o)=>`if(index<${r}) {return ${o};}
`).join("")}
    }`,Yl=e=>ta(e),Jl=(e,r)=>{let o=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${r}]) {`];for(let n=0;n<e;++n)n===0?o.push(`	if (textureIndex == ${n}) { return _X${n}(indices); }`):n===e-1?o.push(`	else { return _X${n}(indices); }`):o.push(`	else if (textureIndex == ${n}) { return _X${n}(indices); }`);return o.push("	}"),o.join(`
`)},Zl=e=>{let r=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let o=0;o<e.length;++o)o===0?r.push(`	if (index == ${o}) { return ${e[o]}; }`):o===e.length-1?r.push(`	else { return ${e[o]}; }`):r.push(`	else if (index == ${o}) { return ${e[o]}; }`);return r.push("	}"),r.join(`
`)},sf=e=>ot({axis:e.attributes.getInt("axis")}),Ql=e=>{if(!e||e.length<1)throw new Error("too few inputs");let r=e[0].type,o=e[0].dims.length;if(r==="string")throw new Error("string tensor is not supported yet");for(let n of e){if(n.type!==r)throw new Error("input tensors should be one type");if(n.dims.length!==o)throw new Error("input tensors should have the same shape")}}});function Uv(){return er("abs")}function qv(){return er("acos")}function zv(){return er("asin")}function Gv(){return er("atan")}function Vv(){return er("ceil")}function Kv(){return er("cos")}function Hv(e){let r="elu";return{body:`
  const float alpha = float(${e});

  float ${r}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${r}_(vec4 v) {
    return vec4(${r}_(v.x), ${r}_(v.y), ${r}_(v.z), ${r}_(v.w));
  }
  `,name:r,type:0}}function Wv(){return er("exp")}function Xv(){return er("floor")}function uf(e,r){let o="clip";return{body:`
  const float min = float(${e});
  const float max = float(${r});

  float ${o}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${o}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:o,type:0}}function Yv(){let e="indentity";return{body:`
  float ${e}_(float a) {
    return a;
  }
  vec4 ${e}_(vec4 v) {
    return v;
  }
  `,name:e,type:0}}function Jv(e){let r="leakyRelu";return{body:`
  const float alpha = float(${e});

  float ${r}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${r}_(vec4 v) {
    return vec4(${r}_(v.x), ${r}_(v.y), ${r}_(v.z), ${r}_(v.w));
  }
  `,name:r,type:0}}function Zv(){return er("log")}function Qv(){let e="neg";return{body:`
  float ${e}_(float a) {
    return -a;
  }
  vec4 ${e}_(vec4 v) {
    return -v;
  }
  `,name:e,type:0}}function ex(){let e="not";return{body:`
  float ${e}_(float a) {
    return float( ! bool(a) );
  }
  bool ${e}_(bool a) {
    return !a;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 ${e}_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `,name:e,type:0}}function tx(){return er("sin")}function lf(){let e="relu";return{body:`
  float ${e}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${e}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:e,type:0}}function cf(){let e="sigmoid";return{body:`
  float ${e}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${e}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:e,type:0}}function rx(){return er("sqrt")}function nx(){return er("tan")}function ox(){let e="tanh";return{body:`
  float ${e}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${e}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,name:e,type:0}}function er(e){return{body:`
  float ${e}_(float a) {
    return ${e}(a);
  }
  vec4 ${e}_(vec4 v) {
    return ${e}(v);
  }
  `,name:e,type:0}}var ec,bt,pf,df,ff,hf,Ha,gf,mf,tc,bf,yf,vf,xf,wf,Tf,Wa,Af,_f,Ef,Df,Sf,Pf,Cf,Of,If,Ff,Lf,kf=re(()=>{"use strict";St(),Ye(),Sr(),gt(),Ve(),ec=(e,r,o,n)=>{let l=e.session.pack?2:0,u=Ge(e.session.backend.glContext.version);return{...r,output:{dims:o.dims,type:o.type,textureType:l},shaderSource:`
     ${n.body}
     void main() {
       vec4 v = ${u.texture2D}(A, TexCoords);
       v = ${n.name}_(v);
       ${u.output} = v;
     }
     `,hasMain:!0}},bt=(e,r,o,n)=>{let l=e.session.pack?2:0,u={name:o.name,inputTypes:[l],inputNames:["A"],cacheHint:n};return{...u,get:()=>ec(e,u,r,o)}},pf=(e,r)=>[e.run(bt(e,r[0],Uv()),r)],df=(e,r)=>[e.run(bt(e,r[0],qv()),r)],ff=(e,r)=>[e.run(bt(e,r[0],zv()),r)],hf=(e,r)=>[e.run(bt(e,r[0],Gv()),r)],Ha=(e,r,o)=>[e.run(bt(e,r[0],uf(o.min,o.max),o.cacheKey),r)],gf=e=>ot({min:e.attributes.getFloat("min",eo),max:e.attributes.getFloat("max",to)}),mf=(e,r)=>{let o=tc(e,r);return Ha(e,[r[0]],o)},tc=(e,r)=>{if(r.length>=3&&(!e.session.isInitializer(r[1].dataId)||!e.session.isInitializer(r[2].dataId)))throw new Error("dynamic clip attributes are not allowed");let o=r.length>=3?r[1].numberData[0]:eo,n=r.length>=3?r[2].numberData[0]:to;return ot({min:o,max:n})},bf=(e,r)=>[e.run(bt(e,r[0],Vv()),r)],yf=(e,r)=>[e.run(bt(e,r[0],Kv()),r)],vf=(e,r,o)=>[e.run(bt(e,r[0],Hv(o.alpha),o.cacheKey),r)],xf=e=>ot({alpha:e.attributes.getFloat("alpha",1)}),wf=(e,r)=>[e.run(bt(e,r[0],Wv()),r)],Tf=(e,r)=>[e.run(bt(e,r[0],Xv()),r)],Wa=(e,r)=>[e.run(bt(e,r[0],Yv()),r)],Af=(e,r,o)=>[e.run(bt(e,r[0],Jv(o.alpha),o.cacheKey),r)],_f=e=>ot({alpha:e.attributes.getFloat("alpha",.01)}),Ef=(e,r)=>[e.run(bt(e,r[0],Zv()),r)],Df=(e,r)=>[e.run(bt(e,r[0],Qv()),r)],Sf=(e,r)=>[e.run(bt(e,r[0],ex()),r)],Pf=(e,r)=>[e.run(bt(e,r[0],lf()),r)],Cf=(e,r)=>[e.run(bt(e,r[0],cf()),r)],Of=(e,r)=>[e.run(bt(e,r[0],tx()),r)],If=(e,r)=>[e.run(bt(e,r[0],rx()),r)],Ff=(e,r)=>[e.run(bt(e,r[0],nx()),r)],Lf=(e,r)=>[e.run(bt(e,r[0],ox()),r)]});function ao(e){let r;switch(e.activation){case"Relu":r=lf();break;case"Sigmoid":r=cf();break;case"Clip":r=uf(e.clipMin,e.clipMax);break;default:return{activationFunction:"",applyActivation:""}}let o=r.name,n=r.body,l=`value = ${o}_(value);`;return{activationFunction:n,applyActivation:l}}var Jo,cn=re(()=>{"use strict";Ye(),kf(),Jo=e=>{let r=e.getString("activation","");if(r==="Clip"){let[o,n]=e.getFloats("activation_params",[eo,to]);return{activation:r,clipMax:n,clipMin:o,activationCacheKey:`${r}:${o},${n}`}}return{activation:r,activationCacheKey:r}}}),rc,nc,Nf,ix=re(()=>{"use strict";ir(),gt(),Ve(),Ts(),cn(),rc=(e,r)=>({name:"GroupedConv",inputNames:e?["X","W","Bias"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:r}),nc=(e,r,o,n)=>{let l=r.length>2?"value += getBias(output_channel);":"",u=r[0].dims.slice(),p=r[1].dims.slice(),i=p[0]/n.group;yt.verbose("GroupedConv",`autpPad:${n.autoPad}, dilations:${n.dilations}, group:${n.group}, kernelShape:${n.kernelShape}, pads:${n.pads}, strides:${n.strides}`);let a=Jn(u,p,n.dilations,n.pads,n.strides),t=Ge(e.session.backend.glContext.version),{activationFunction:c,applyActivation:s}=ao(n),d=`
  const ivec2 strides = ivec2(${n.strides[0]}, ${n.strides[1]});
  const ivec2 pads = ivec2(${n.pads[0]}, ${n.pads[1]});
  ${c}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${i};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${p[1]}; wInChannel++) {
      int input_channel = group_id * ${p[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${p[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${n.dilations[0]};

        if (xHeight < 0 || xHeight >= ${u[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${p[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${n.dilations[1]};
          if (xWidth < 0 || xWidth >= ${u[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${l}
    ${s}
    ${t.output} = vec4(value, .0, .0, .0);
  }
`;return{...o,output:{dims:a,type:r[0].type,textureType:0},shaderSource:d,hasMain:!0}},Nf=(e,r,o)=>{let n=rc(r.length>2,o.cacheKey);return{...n,get:()=>nc(e,r,n,o)}}}),oc,ic,Rf,ax=re(()=>{"use strict";gt(),Ve(),un(),oc=e=>({name:"Im2Col (packed)",inputNames:["A"],inputTypes:[2],cacheHint:e}),ic=(e,r,o,n,l,u)=>{let p=o.dims,i=n.dims,a=2,t=3,c=l.length,s=[i[1]*i[2]*i[3],l[2]*l[3]],d=i[2]*i[3],f=io(),g=Ge(e.session.backend.glContext.version),b="";for(let m=0;m<=1;m++)for(let v=0;v<=1;v++)b+=`
            blockIndex = rc.x + ${v};
            pos = rc.y + ${m};

            if(blockIndex < ${s[1]} && pos < ${s[0]}) {
              offsetY = int(blockIndex / (${l[c-1]})) * ${u.strides[0]} -
                ${u.pads[0]};
              d0 = offsetY + ${u.dilations[0]} * (imod(pos, ${d}) / ${i[2]});

              if(d0 < ${p[a]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${l[c-1]}) * ${u.strides[1]} -
                  ${u.pads[1]};
                d1 = offsetX + ${u.dilations[1]} * imod(imod(pos, ${d}), ${i[2]});

                if(d1 < ${p[t]} && d1 >= 0) {

                  ch = int(float(pos)/ ${d}.);
                    innerDims = vec2(d0, d1);
                    result[${m*2+v}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let y=`
      ${f}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${b}
          ${g.output} = result;
      }
            `;return{...r,output:{dims:s,type:o.type,textureType:2},shaderSource:y,hasMain:!0}},Rf=(e,r,o,n,l)=>{let u=oc(l.cacheKey);return{...u,get:()=>ic(e,u,r,o,n,l)}}});function sx(e,r,o){let n=r[0].dims,l=r[1].dims,u=cr.calcShape(n,l,!0);if(!u)throw new Error("Can't use matmul on the given tensors");let p=Dr(u.length),i=an(),{activationFunction:a,applyActivation:t}=ao(o),c=r.length>2,s=c?"value += getBiasForMatmul();":"",d=c?`${$f(p,i,r[2].dims,u,!1)}`:"",f=u.length,g=n.length,b=l.length,y=n[n.length-1],m=`
    ${a}
    ${d}
    float process(int indices[${f}]) {
        int a[${g}];
        int b[${b}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${y}; ++k) {
            a[${g-1}] = k;
            b[${b-2}] = k;
            value += _A(a) * _B(b);
        }
        ${s}
        ${t}
        return value;
    }`;return{...e,output:{dims:u,type:r[0].type,textureType:0},shaderSource:m}}function Bf(e,r){let o=Uf(e.length>2,r.activationCacheKey);return{...o,get:()=>sx(o,e,r)}}function $f(e,r,o,n,l){let u="",p=o.length,i=n.length,a=i-p;i<2&&p>0?u="coords":u=o.map((d,f)=>`coords.${r[f+a]}`).join(", ");let t=cr.getBroadcastDims(o,n).map(d=>`coords.${r[d+a]} = 0;`).join(`
`),c=ke.size(o)===1,s="vec4(outputValue.xx, outputValue.yy)";return c&&(s="vec4(outputValue.x)"),l?`
vec4 getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${t}
  vec4 outputValue = getBias(${u});
  return ${s};
}`:`
float getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${t}
  return getBias(coords.x);
}`}var Mf,jf,Uf,ac,xs=re(()=>{"use strict";Ye(),Ve(),gr(),cn(),qf(),Mf=(e,r,o)=>(ac(r),e.session.pack?[e.run(ws(e,r,o),r)]:[e.run(Bf(r,o),r)]),jf=e=>Jo(e.attributes),Uf=(e,r)=>({name:"MatMul",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[0,0,0]:[0,0],cacheHint:r}),ac=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.");if(e[0].type!=="float32"&&e[0].type!=="float64"||e[1].type!=="float32"&&e[1].type!=="float64")throw new Error("inputs should be float type");if(e[0].type!==e[1].type)throw new Error("inputs types should match")}});function ux(e,r,o,n){let l=[],u=[],p=o[0].dims,i=o[1].dims,a=p.length,t=i.length,c=n.length,s=c-a,d=c-t;l=p.map((v,C)=>`coords.${r[C+s]}`),l[a-1]="i*2",l.join(", "),u=i.map((v,C)=>`coords.${r[C+d]}`),u[t-2]="i*2",u.join(", ");let f=cr.getBroadcastDims(p,n),g=cr.getBroadcastDims(i,n),b=f.map(v=>`coords.${r[v+s]} = 0;`).join(`
`),y=g.map(v=>`coords.${r[v+d]} = 0;`).join(`
`),m=`int lastDim = coords.${r[c-1]};
  coords.${r[c-1]} = coords.${r[c-2]};
  coords.${r[c-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${m}
  ${b}
  vec4 outputValue = getA(${l});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${m}
  ${y}
  vec4 outputValue = getB(${u});
  return outputValue;
}`}function lx(e,r){let o="";for(let n=0;n<r-2;n++)o+=`rc.${e[n]}, `;return o+=`rc.${e[r-2]}, i*2`,o}function cx(e,r){let o="";for(let n=0;n<r-2;n++)o+=`rc.${e[n]}, `;return o+=`i*2, rc.${e[r-1]}`,o}var sc,uc,ws,qf=re(()=>{"use strict";Ye(),gt(),Ve(),gr(),cn(),xs(),sc=(e,r)=>({name:"MatMul (packed)",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[2,2,2]:[2,2],cacheHint:r}),uc=(e,r,o,n)=>{let l=o.length>2,u=l?"value += getBiasForMatmul();":"",p=o[0].dims,i=o[1].dims,a=cr.calcShape(p,i,!0),t=!ke.areEqual(o[0].dims,o[1].dims);if(!a)throw new Error("Can't use matmul on the given tensors");let c=p[p.length-1],s=Math.ceil(c/2),d=p.length,f=i.length,g=Ge(e.session.backend.glContext.version),b=Dr(a.length),y=a.length,m=an(),{activationFunction:v,applyActivation:C}=ao(n),M=l?`${$f(b,m,o[2].dims,a,!0)}`:"",q=t?`${ux(b,m,o,a)}`:"",Z=t?"getAAtOutCoordsMatmul(i)":`getA(${lx(m,d)})`,N=t?"getBAtOutCoordsMatmul(i)":`getB(${cx(m,f)})`,k=t?"":`${b} rc =
          getOutputCoords(); int lastDim = rc.${m[y-1]}; rc.${m[y-1]} =
          rc.${m[y-2]}; rc.${m[y-2]} = lastDim;
      `,z=`
            ${q}
            ${M}
            ${v}
            void main() {
              ${k}

              vec4 value = vec4(0);
              for (int i = 0; i < ${s}; i++) {
                vec4 a = ${Z};
                vec4 b = ${N};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${u}
              ${C}
              ${g.output} = value;
            }`;return{...r,output:{dims:a,type:o[0].type,textureType:2},shaderSource:z,hasMain:!0}},ws=(e,r,o)=>{let n=sc(r.length>2,o.activationCacheKey);return{...n,get:()=>uc(e,n,r,o)}}}),zf,px=re(()=>{"use strict";Ts(),ax(),qf(),zf=(e,r,o)=>{let n=r[0].dims,l=r[1].dims,u=Jn(n,l,o.dilations,o.pads,o.strides),p=e.run(Rf(e,r[0],r[1],u,o),[r[0]]),i=e.reshapePacked(r[1],[l[0],l[1]*l[2]*l[3]]),a=r.length===3?[i,p,r[2]]:[i,p],t=e.run(ws(e,a,o),a);return e.reshapePacked(t,u)}}),lc,cc,Gf,Xa,Vf=re(()=>{"use strict";Ve(),lc=e=>({name:"Im2Col",inputNames:["X"],inputTypes:[0],cacheHint:e}),cc=(e,r,o,n,l,u)=>{let p=o.dims,i=n.dims,a=l.length,t=Xa(p,i,l,4),c=`
        const int XC = ${p[1]};
        const int XH = ${p[2]};
        const int XW = ${p[3]};
        const int KH = ${u.kernelShape[0]};
        const int KW = ${u.kernelShape[1]};
        const int dilationH = ${u.dilations[0]};
        const int dilationW = ${u.dilations[1]};
        const int strideH = ${u.strides[0]};
        const int strideW = ${u.strides[1]};
        const int padH = ${u.pads[0]};
        const int padW = ${u.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${a}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${p.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;return{...r,output:{dims:t,type:o.type,textureType:4},shaderSource:c}},Gf=(e,r,o,n,l)=>{let u=lc(l.cacheKey);return{...u,get:()=>cc(e,u,r,o,n,l)}},Xa=(e,r,o,n=4)=>[o[0],o[2],o[3],Math.ceil(e[1]*r[2]*r[3]/n)]}),pc,dc,Kf,dx=re(()=>{"use strict";Ye(),gt(),Ve(),cn(),Vf(),pc=(e,r)=>({name:"ConvDotProduct",inputNames:e?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:e?[0,4,0]:[0,4],cacheKey:r.activationCacheKey}),dc=(e,r,o,n,l)=>{let u=o[0].dims,p=o[1].dims,i=[p[0],Math.ceil(u[1]*p[2]*p[3]/4)],a=Xa(u,p,n),[t,c]=e.calculateTextureWidthAndHeight(i,4),s=ke.computeStrides(a),[d,f]=e.calculateTextureWidthAndHeight(a,4),g=n.length,b=o.length<3?"0.0":"_B(b)",y=Math.ceil(u[1]*p[2]*p[3]/4),{activationFunction:m,applyActivation:v}=ao(l),C=Ge(e.session.backend.glContext.version),M=`
${m}
float process(int indices[${g}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${s[0]} + im2col[1] * ${s[1]} + im2col[2] * ${s[2]};
  int kernelOffset = indices[1] * ${i[1]};
  float value = ${b};
  for (int i = 0; i < ${y}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${d}, ${f});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${t}, ${c});
    value += dot(${C.texture2D}(Im2Col, im2colCoords), ${C.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${v}
  return value;
}`;return{...r,output:{dims:n,type:o[0].type,textureType:0},shaderSource:M}},Kf=(e,r,o,n)=>{let l=pc(r.length>2,n);return{...l,get:()=>dc(e,l,r,o,n)}}}),Jn,Ya,fc,hc,gc,mc,Ja,bc,Ts=re(()=>{"use strict";St(),Ye(),ix(),px(),dx(),cn(),Vf(),xs(),Jn=(e,r,o,n,l)=>{let u=e[0],p=e.slice(2),i=p.length,a=r[0],t=r.slice(2).map((s,d)=>s+(s-1)*(o[d]-1)),c=p.map((s,d)=>s+n[d]+n[d+i]).map((s,d)=>Math.floor((s-t[d]+l[d])/l[d]));return[u,a].concat(...c)},Ya=(e,r,o)=>(bc(r,o),fc(e,r,o)),fc=(e,r,o)=>{let n=mc(o,r),l=e.session.pack,u=n.kernelShape[0]===1&&n.kernelShape[1]===1;return n.group>1?[e.run(Nf(e,r,n),r)]:u&&l?[hc(e,r,n)]:l&&r[0].dims.length===4&&r[0].dims[0]===1&&!u?[zf(e,r,n)]:[gc(e,r,n)]},hc=(e,r,o)=>{let n=r[0].dims,l=r[1].dims,u=Jn(n,l,o.dilations,o.pads,o.strides),p=e.reshapeUnpacked(r[0],[n[1],n[2]*n[3]]),i=e.reshapeUnpacked(r[1],[l[0],l[1]]),a=r.length>2?[i,p,r[2]]:[i,p],t=e.run(Bf(a,o),a);return e.reshapeUnpacked(t,u)},gc=(e,r,o)=>{let n=r[0].dims,l=r[1].dims,u=Jn(n,l,o.dilations,o.pads,o.strides),p=e.run(Gf(e,r[0],r[1],u,o),[r[0]]),i=r.length===3?[p,r[1],r[2]]:[p,r[1]];return e.run(Kf(e,r,u,o),i)},mc=(e,r)=>{let o=e.kernelShape.slice();if(e.kernelShape.length===0)for(let u=2;u<r[1].dims.length;++u)o.push(r[1].dims[u]);let n=e.pads.slice();Go.adjustPadsBasedOnAutoPad(r[0].dims,e.strides,e.dilations,o,n,e.autoPad);let l=Object.assign({},e);return Object.assign(l,{kernelShape:o,pads:n,cacheKey:e.cacheKey}),l},Ja=e=>{let r=e.attributes,o=Jo(r),n=r.getString("auto_pad","NOTSET"),l=r.getInts("dilations",[1,1]),u=r.getInt("group",1),p=r.getInts("kernel_shape",[]),i=r.getInts("pads",[0,0,0,0]),a=r.getInts("strides",[1,1]);return ot({autoPad:n,dilations:l,group:u,kernelShape:p,pads:i,strides:a,...o})},bc=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4||e[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let o=e[0].dims[1],n=e[1].dims[1]*r.group;if(o!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let l=e[0].dims.length-2;if(r.dilations.length!==l)throw new Error(`dilations should be ${l}D`);if(r.strides.length!==l)throw new Error(`strides should be ${l}D`);if(r.pads.length!==l*2)throw new Error(`pads should be ${l*2}D`);if(r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(e[0].type!=="float32"||e[1].type!=="float32")throw new Error("Conv input(X,W) should be float tensor");if(e.length===3&&e[2].type!=="float32")throw new Error("Conv input(bias) should be float tensor")}}),yc,vc,xc,Hf,wc,Tc,Ac,_c,Ec,Dc,Wf,Sc,fx=re(()=>{"use strict";St(),gt(),Ve(),cn(),yc=(e,r,o,n,l,u)=>(e-1)*r+o+(n-1)*l+1-u,vc=(e,r,o,n,l)=>{let u=Math.floor(e/2);r==="SAME_UPPER"?(o[n]=u,o[l]=e-u):r==="SAME_LOWER"&&(o[n]=e-u,o[l]=u)},xc=(e,r,o,n,l,u,p,i)=>{let a=e.length-2,t=i.length===0;for(let c=0;c<a;++c){let s=t?e[c+2]*u[c]:i[c],d=yc(e[c+2],u[c],l[c],r[c],o[c],s);vc(d,n,l,c,c+a),t&&i.push(u[c]*(e[c+2]-1)+p[c]+(r[c]-1)*o[c]+1-l[c]-l[c+a])}},Hf=(e,r,o)=>(Sc(r,o),wc(e,r,o)),wc=(e,r,o)=>{let n=Dc(o,r);return[Ec(e,r,n)]},Tc=(e,r)=>({name:"ConvTranspose",inputNames:e?["X","W","B"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:r}),Ac=(e,r,o,n)=>{let l=r.length>2?"getB(output_channel)":"0.0",u=r[0].dims,p=r[1].dims,i=p[1],a=p[0]/n.group,t=[r[0].dims[0],r[1].dims[1]*n.group,...n.outputShape],c=Ge(e.session.backend.glContext.version),{activationFunction:s,applyActivation:d}=ao(n),f=`
  const ivec2 strides = ivec2(${n.strides[0]}, ${n.strides[1]});
  const ivec2 pads = ivec2(${n.pads[0]}, ${n.pads[1]});
  ${s}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${i};
    int wOutChannel = output_channel - group_id * ${i};

    float value = ${l};
    for (int inChannelOffset = 0; inChannelOffset < ${a}; inChannelOffset++) {
      int input_channel = group_id * ${a} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${p[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${p[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${n.dilations[0]}, wHOff * ${n.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${u[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${u[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${d}
    ${c.output} = vec4(value, .0, .0, .0);
  }
`;return{...o,output:{dims:t,type:r[0].type,textureType:0},shaderSource:f,hasMain:!0}},_c=(e,r,o)=>{let n=Tc(r.length>2,o.cacheKey);return{...n,get:()=>Ac(e,r,n,o)}},Ec=(e,r,o)=>e.run(_c(e,r,o),r),Dc=(e,r)=>{let o=e.kernelShape.slice();if(e.kernelShape.length===0)for(let i=2;i<r[1].dims.length;++i)o.push(r[1].dims[i]);let n=e.pads.slice(),l=e.outputShape.slice(),u=r[0].dims;xc(u,o,e.dilations,e.autoPad,n,e.strides,e.outputPadding,l);let p=Object.assign({},e);return Object.assign(p,{kernelShape:o,pads:n,outputShape:l,cacheKey:e.cacheKey}),p},Wf=e=>{let r=e.attributes,o=Jo(r),n=r.getString("auto_pad","NOTSET"),l=r.getInts("dilations",[1,1]),u=r.getInt("group",1),p=r.getInts("kernel_shape",[]),i=r.getInts("output_padding",[0,0]),a=r.getInts("output_shape",[]),t=r.getInts("pads",[0,0,0,0]),c=r.getInts("strides",[1,1]);return ot({autoPad:n,dilations:l,group:u,kernelShape:p,outputPadding:i,outputShape:a,pads:t,strides:c,...o})},Sc=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4||e[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let o=e[0].dims[1],n=e[1].dims[0];if(o!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let l=e[1].dims[1]*r.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==l))throw new Error("invalid bias");let u=e[0].dims.length-2;if(r.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(r.strides.length!==u)throw new Error(`strides should be ${u}D`);if(r.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(r.outputPadding.length!==u)throw new Error(`output_padding should be ${u}D`);if(r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(r.outputShape.length!==0&&r.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape");if(e[0].type!=="float32"||e[1].type!=="float32")throw new Error("ConvTranspose input(X,W) should be float tensor");if(e.length===3&&e[2].type!=="float32")throw new Error("ConvTranspose input(bias) should be float tensor")}}),ra,ro,Xf,Pc,na,Cc,Oc,Ic,As=re(()=>{"use strict";St(),Ye(),Ve(),ra={name:"Transpose",inputNames:["A"],inputTypes:[0]},ro=(e,r,o)=>(Ic(r),[e.run({...ra,cacheHint:o.cacheKey,get:()=>Pc(e,r[0],o.perm)},r)]),Xf=e=>ot({perm:e.attributes.getInts("perm",[])}),Pc=(e,r,o)=>{let n=r.dims;o=na(n,o);let l=Cc(n,o),u=n.length,p=`
      ${Oc("perm",o,u)}
      float process(int indices[${u}]) {
        int a[${u}];
        perm(a, indices);
        return _A(a);
      }`;return{...ra,output:{dims:l,type:r.type,textureType:0},shaderSource:p}},na=(e,r)=>(r&&r.length!==e.length&&(r=[...e.keys()].reverse()),r),Cc=(e,r)=>(r=na(e,r),ke.sortBasedOnPerm(e,r)),Oc=(e,r,o)=>{let n=[];n.push(`void ${e}(out int a[${o}], int src[${o}]) {`);for(let l=0;l<o;++l)n.push(`	a[${r[l]}]=src[${l}];`);return n.push("	}"),n.join(`
`)},Ic=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("input should be float tensor")}}),Yf,Jf,Fc,hx=re(()=>{"use strict";As(),Yf=(e,r,o)=>{Fc(r);let n=o.blocksize,l=n*n,u=o.mode==="DCR"?[0,3,4,1,5,2]:[0,1,4,2,5,3],p=o.mode==="DCR"?[r[0].dims[0],n,n,r[0].dims[1]/l,r[0].dims[2],r[0].dims[3]]:[r[0].dims[0],r[0].dims[1]/l,n,n,r[0].dims[2],r[0].dims[3]],i=e.reshapeUnpacked(r[0],p),a={perm:u,cacheKey:`${u}`},[t]=ro(e,[i],a),c=[r[0].dims[0],r[0].dims[1]/l,r[0].dims[2]*n,r[0].dims[3]*n];return[e.reshapeUnpacked(t,c)]},Jf=e=>{let r=e.attributes.getInt("blocksize");if(r<1)throw new Error(`blocksize must be >= 1, but got : ${r} for DepthToSpace`);let o=e.attributes.getString("mode","DCR");if(o!=="DCR"&&o!=="CRD")throw new Error(`unrecognized mode: ${o} for DepthToSpace`);return{mode:o,blocksize:r}},Fc=e=>{if(e.length!==1)throw new Error(`DepthToSpace expect 1 inputs, but got ${e.length}`);if(e[0].type==="string"||e[0].dims.length!==4)throw new TypeError("DepthToSpace input should be a 4-D numeric tensor")}}),Zf,Qf,Lc,gx=re(()=>{"use strict";Ye(),Zf=(e,r,o)=>{Lc(r,o);let n=ke.flattenShape(r[0].dims,o);return[e.reshapeUnpacked(r[0],n)]},Qf=e=>e.attributes.getInt("axis",1),Lc=(e,r)=>{if(!e||e.length!==1)throw new Error("Flatten requires 1 input.");let o=e[0].dims.length;if(o===0)throw new Error("scalar tensor is not supported.");if(r<-o||r>o)throw new Error("Invalid axis");if(e[0].type==="string")throw new Error("string tensor is not supported.")}}),so,Zo=re(()=>{"use strict";so=["float32","float64","int32","int16","int8","uint16","uint32","uint8"]}),eh,th,kc,Nc,Rc,Bc,mx=re(()=>{"use strict";St(),Zo(),Ye(),Ve(),eh=(e,r,o)=>(Bc(r,o.axis),[e.run(Rc(e,r,o),r)]),th=e=>ot({axis:e.attributes.getInt("axis",0)}),kc={name:"Gather",inputNames:["A","B"],inputTypes:[0,0]},Nc=(e,r,o,n)=>{let l=o[0].dims.slice(),u=o[1].dims.slice(),p=new Array(l.length+u.length-1);n=ke.normalizeAxis(n,l.length);let i=[];for(let d=0;d<p.length;d++)d<n?(p[d]=l[d],i.push(`inputIdx[${d}] = outputIdx[${d}];`)):d<n+u.length?(p[d]=u[d-n],i.push(`indexDataIdx[${d-n}] = outputIdx[${d}];`)):(p[d]=l[d-u.length+1],i.push(`inputIdx[${d-u.length+1}] = outputIdx[${d}];`));let a=p.length||1,t=l.length,c=u.length||1,s=`
      float process(int outputIdx[${a}]) {
        int inputIdx[${t}];
        int indexDataIdx[${c}];
        indexDataIdx[0] = 0;
        ${i.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${n}] = idx < 0 ? idx + ${l[n]} : idx;
        return _A(inputIdx);
      }`;return{...r,output:{dims:p,type:o[0].type,textureType:0},shaderSource:s}},Rc=(e,r,o)=>{let n={...kc,cacheHint:o.cacheKey};return{...n,get:()=>Nc(e,n,r,o.axis)}},Bc=(e,r)=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.");let o=e[0].dims.length;if(o<1)throw new Error("Invalid input shape.");if(r<-o||r>o-1)throw new Error("Invalid axis.");if(so.indexOf(e[0].type)===-1)throw new Error("Invaid input type.");if(e[1].type!=="int32"&&e[1].type!=="int16")throw new Error("Invaid input type.")}}),Za,oa,rh,nh,$c,Mc,jc,bx=re(()=>{"use strict";St(),Ye(),Ve(),Za=(e,r,o)=>(jc(r,o),[e.run($c(r,o),r)]),oa=(e,r)=>{let o=e.attributes.getInt("transA",0)!==0,n=e.attributes.getInt("transB",0)!==0,l=e.attributes.getFloat("alpha",1),u=e.attributes.getFloat("beta",1);return ot({transA:o,transB:n,alpha:l,beta:u,isOptionalC:r})},rh=e=>oa(e,!1),nh=e=>oa(e,!0),$c=(e,r)=>{let o={name:"Gemm",inputNames:e.length===3?["A","B","C"]:["A","B"],inputTypes:e.length===3?[0,0,0]:[0,0],key:r.cacheKey};return{...o,get:()=>Mc(o,e,r)}},Mc=(e,r,o)=>{let n=r[0].dims.slice(),l=r[1].dims.slice(),[u,p]=Pd.getShapeOfGemmResult(n,o.transA,l,o.transB,r.length===3?r[2].dims:void 0),i=[u,p];if(!i)throw new Error("Can't use gemm on the given tensors");let a=n[n.length-1],t="";o.transA&&(a=n[0]),o.transA&&o.transB?t="value += _A_T(a) * _B_T(b);":o.transA&&!o.transB?t="value += _A_T(a) * _B(b);":!o.transA&&o.transB?t="value += _A(a) * _B_T(b);":!o.transA&&!o.transB&&(t="value += _A(a) * _B(b);");let c=i.length,s=r.length===3?`int c[${r[2].dims.length}];`:"",d=r.length===3?"bcastIndices_C(indices, c);":"",f=r.length===3?"value += beta * _C(c);":"",g=`
      float process(int indices[${c}]) {
          int a[${c}];
          int b[${c}];
          ${s}

          copyVec(indices, a);
          copyVec(indices, b);
          ${d}

          float value = 0.0;
          for (int k=0; k<${a}; ++k) {
              a[${c-1}] = k;
              b[${c-2}] = k;
              ${t}
          }

          value = value * alpha;
          ${f}
          return value;
      }`;return{...e,output:{dims:i,type:r[0].type,textureType:0},variables:[{name:"alpha",type:"float",data:o.alpha},{name:"beta",type:"float",data:o.beta}],shaderSource:g}},jc=(e,r)=>{if(!e)throw new Error("Input is missing");if(r.isOptionalC&&(e.length<2||e.length>3))throw new Error("Invaid input shape.");if(!r.isOptionalC&&e.length!==3)throw new Error("Gemm requires 3 inputs");if(e.length===3&&e[2].dims.length!==1&&e[2].dims.length!==2)throw new Error("Invalid input shape of C");if(e[0].type!=="float32"&&e[0].type!=="float64"||e[1].type!=="float32"&&e[1].type!=="float64"||e.length===3&&e[2].type!=="float32"&&e[2].type!=="float64")throw new Error("Invalid input type.");if(e[0].type!==e[1].type||e.length===3&&e[0].type!==e[2].type)throw new Error("Input types are mismatched")}}),oh,ih,Uc,qc,zc,Gc,Vc,yx=re(()=>{"use strict";St(),Ve(),oh=(e,r,o)=>(Vc(r),[e.run(zc(e,r,o),r)]),ih=e=>{let r=e.attributes.getFloat("scale"),o=e.attributes.getFloats("bias");return ot({scale:r,bias:o})},Uc={name:"ImageScaler",inputNames:["X"],inputTypes:[0]},qc=(e,r,o,n)=>{let l=o[0].dims.slice(),u=l.length,p=`
      ${Gc(n.bias.length)}
      float process(int indices[${u}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...r,output:{dims:l,type:o[0].type,textureType:0},variables:[{name:"bias",type:"float",arrayLength:n.bias.length,data:n.bias},{name:"scale",type:"float",data:n.scale}],shaderSource:p}},zc=(e,r,o)=>{let n={...Uc,cacheHint:o.cacheKey};return{...n,get:()=>qc(e,n,r,o)}},Gc=e=>{let r=[`float getBias(float bias[${e}], int channel) {`];for(let o=0;o<e;++o)o===0?r.push(`	if (channel == ${o}) { return bias[${o}]; }`):o===e-1?r.push(`	else { return bias[${o}]; }`):r.push(`	else if (channel == ${o}) { return bias[${o}]; }`);return r.push("	}"),r.join(`
`)},Vc=e=>{if(!e||e.length!==1)throw new Error("ImageScaler requires 1 input.");if(e[0].dims.length!==4)throw new Error("Invalid input shape.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")}}),ah,sh,ia,Kc,Hc,Wc,Xc,Yc,Jc,vx=re(()=>{"use strict";gt(),Ve(),ah=(e,r,o)=>{Jc(r);let n=e.run(Hc(r[0]),r);return[e.run(Yc(e,r[0],o,n.dims),[r[0],n,r[1],r[2]])]},sh=e=>e.attributes.getFloat("epsilon",1e-5),ia={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[0]},Kc=(e,r)=>{let o=r.dims.slice(),n=o[1],l=o[2]*o[3],u=[o[0],n],p=`
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${o[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${o[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${l});
        temp = 0.0;
        for(int a2=0; a2<${o[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${o[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${l});

        return v;
      }`;return{...e,output:{dims:u,type:r.type,textureType:4},shaderSource:p}},Hc=e=>({...ia,get:()=>Kc(ia,e)}),Wc={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[0,4,0,0]},Xc=(e,r,o,n,l)=>{let u=Ge(e.session.backend.glContext.version),[p,i]=e.calculateTextureWidthAndHeight(l,4),[a,t]=[p/4,i],c=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${a}, ${t});
        return ${u.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;return{...r,output:{dims:o.dims,type:o.type,textureType:0},variables:[{name:"epsilon",type:"float",data:n}],shaderSource:c}},Yc=(e,r,o,n)=>{let l={...Wc,cacheHint:`${o}`};return{...l,get:()=>Xc(e,l,r,o,n)}},Jc=e=>{if(!e||e.length!==3)throw new Error("InstanceNormalization requires 3 inputs.");let r=e[0],o=e[1],n=e[2];if(r.dims.length<3||o.dims.length!==1||n.dims.length!==1)throw new Error("Invalid input shape.");if(o.dims[0]!==r.dims[1]||n.dims[0]!==r.dims[1])throw new Error("Input shapes are mismatched.");if(r.type!=="float32"&&r.type!=="float64"||o.type!=="float32"&&o.type!=="float64"||n.type!=="float32"&&n.type!=="float64")throw new Error("Invalid input type.");if(e[0].dims.length!==4)throw new Error("Only support 4-D input shape.")}});function xx(e,r){let o=e[0].dims[1],n=e[0].dims.length,l=-Math.floor((r.size-1)/2),u=Math.ceil((r.size-1)/2),p=`float(${r.alpha}) / float(${r.size})`,i=`float(${r.bias})`,a=`float(${r.beta})`,t=`
    float process(int indices[${n}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${l}; i <= ${u}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${o}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${i} + ${p} * square_sum, ${a});
    }`;return{..._s,cacheHint:r.cacheKey,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:t}}function wx(e,r){return{..._s,cacheHint:r.cacheKey,get:()=>xx(e,r)}}var uh,lh,_s,Zc,Tx=re(()=>{"use strict";St(),Ve(),uh=(e,r,o)=>(Zc(r),[e.run(wx(r,o),r)]),lh=e=>{let r=e.attributes.getFloat("alpha",1e-4),o=e.attributes.getFloat("beta",.75),n=e.attributes.getFloat("bias",1),l=e.attributes.getInt("size");return ot({alpha:r,beta:o,bias:n,size:l})},_s={name:"LRN",inputNames:["X"],inputTypes:[0]},Zc=e=>{if(!e||e.length!==1)throw new Error("LRN requires 1 input.");if(e[0].dims.length!==4)throw new Error('currently only support LRN for input with "NCHW" format');if(e[0].type!=="float32")throw new Error("input should be float type")}}),Qc,Qa,ch,ph,dh,ep,tp,rp,np,op,ip,ap,sp,Ax=re(()=>{"use strict";St(),Ye(),gt(),Ve(),Qc={name:"Pad",inputNames:["A"],inputTypes:[0]},Qa=(e,r,o)=>(rp(r),[e.run({...Qc,cacheHint:o.cacheKey,get:()=>tp(e,r[0],o)},r)]),ch=e=>{let r=e.attributes.getString("mode","constant"),o=e.attributes.getFloat("value",0),n=e.attributes.getInts("pads");return ot({mode:r,value:o,pads:n})},ph=(e,r,o)=>{np(r);let n=ep(e,r,o);return Qa(e,[r[0]],n)},dh=e=>e.attributes.getString("mode","constant"),ep=(e,r,o)=>{if(!e.session.isInitializer(r[1].dataId)||r.length>=3&&!e.session.isInitializer(r[2].dataId))throw new Error("dynamic pad attributes are not allowed");let n=Array.from(r[1].integerData),l=r.length>=3?r[2].floatData[0]:0;return ot({mode:o,pads:n,value:l})},tp=(e,r,o)=>{let n=ke.padShape(r.dims.slice(),o.pads),l=n.length,u=`
      ${op(e,r,o)}
      float process(int[${l}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[0],output:{dims:n,type:r.type,textureType:0},shaderSource:u}},rp=e=>{if(!e||e.length!==1)throw new Error("Pad requires 1 input");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")},np=e=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Pad requires 2 or 3 inputs");if(e[1].type!=="int32")throw new Error("Invalid input type.");if(e.length>=3&&e[2].type==="string")throw new Error("Invalid input type.")},op=(e,r,o)=>{let n=Ge(e.session.backend.glContext.version),[l,u]=e.calculateTextureWidthAndHeight(r.dims,0),p=ke.computeStrides(r.dims);switch(o.mode){case"constant":return ip(n,r.dims,p,l,u,o.pads,o.value);case"reflect":return ap(n,r.dims,p,l,u,o.pads);case"edge":return sp(n,r.dims,p,l,u,o.pads);default:throw new Error("Invalid mode")}},ip=(e,r,o,n,l,u,p)=>{let i=r.length,a="";for(let t=i-1;t>=0;--t)a+=`
        k = m[${t}] - ${u[t]};
        if (k < 0)  return constant;
        if (k >= ${r[t]}) return constant;
        offset += k * ${o[t]};
        `;return`
      float padA(int m[${i}]) {
        const float constant = float(${p});
        int offset = 0;
        int k = 0;
        ${a}
        vec2 coords = offsetToCoords(offset, ${n}, ${l});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},ap=(e,r,o,n,l,u)=>{let p=r.length,i="";for(let a=p-1;a>=0;--a)i+=`
        k = m[${a}] - ${u[a]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2*(r[a]-1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${r[a]}) { k = _2n_1 - k; }
        }
        offset += k * ${o[a]};
        `;return`
      float padA(int m[${p}]) {
        int offset = 0;
        int k = 0;
        ${i}
        vec2 coords = offsetToCoords(offset, ${n}, ${l});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},sp=(e,r,o,n,l,u)=>{let p=r.length,i="";for(let a=p-1;a>=0;--a)i+=`
        k = m[${a}] - ${u[a]};
        if (k < 0)  k = 0;
        if (k >= ${r[a]}) k = ${r[a]-1};
        offset += k * ${o[a]};
      `;return`
      float padA(int m[${p}]) {
        int offset = 0;
        int k = 0;
        ${i}
        vec2 coords = offsetToCoords(offset, ${n}, ${l});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `}}),fh,hh,aa,gh,mh,bh,yh,sa,ua,up,la,vh,kn,ca,Nn,lp,_x=re(()=>{"use strict";St(),Ye(),Ve(),fh=(e,r,o)=>{kn(r);let n={name:"AveragePool",inputNames:["X"],inputTypes:[0],cacheHint:o.cacheKey};return[e.run({...n,get:()=>aa(r,n,!1,o)},r)]},hh=e=>{let r=e.attributes.getString("auto_pad","NOTSET"),o=e.attributes.getInt("ceil_mode",0),n=e.attributes.getInt("count_include_pad",0)!==0,l=e.attributes.getInts("kernel_shape"),u=e.attributes.getInts("strides",[]),p=e.attributes.getInts("pads",[]);if(o!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");return ot({autoPad:r,ceilMode:o,countIncludePad:n,kernelShape:l,strides:u,pads:p})},aa=(e,r,o,n)=>{let[l,u]=ua(e,n,o),p=ke.size(l.kernelShape),i="value += _X(x);",a="";l.countIncludePad?a+=`value /= float(${p});`:a+=`value /= float(${p} - pad);`;let t=`
        ${ca(e[0].dims,l,i,a,"0.0")}
      `;return{...r,output:{dims:u,type:e[0].type,textureType:0},shaderSource:t}},gh=(e,r,o)=>{kn(r);let n={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[0],cacheHint:`${o.countIncludePad}`};return[e.run({...n,get:()=>aa(r,n,!0,o)},r)]},mh=e=>{let r=e.attributes.getInt("count_include_pad",0)!==0;return ot({autoPad:"",ceilMode:0,countIncludePad:r,kernelShape:[],strides:[],pads:[]})},bh=(e,r,o)=>{kn(r);let n={name:"MaxPool",inputNames:["X"],inputTypes:[0],cacheHint:o.cacheKey};return[e.run({...n,get:()=>sa(r,n,!1,o)},r)]},yh=e=>{let r=e.attributes.getString("auto_pad","NOTSET"),o=e.attributes.getInt("ceil_mode",0),n=e.attributes.getInts("kernel_shape"),l=e.attributes.getInts("strides",[]),u=e.attributes.getInts("pads",[]),p=e.attributes.getInt("storage_order",0),i=e.attributes.getInts("dilations",[]);if(p!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(o!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");return ot({autoPad:r,ceilMode:o,countIncludePad:!1,kernelShape:n,strides:l,pads:u,storageOrder:p,dilations:i})},sa=(e,r,o,n)=>{let[l,u]=ua(e,n,o),p=`
      value = max(_X(x), value);
    `,i="",a=`
      ${ca(e[0].dims,l,p,i,"-1e5")}
    `;return{...r,output:{dims:u,type:e[0].type,textureType:0},shaderSource:a}},ua=(e,r,o)=>{let n=e[0].dims.slice(),l=Object.hasOwnProperty.call(r,"dilations"),u=r.kernelShape.slice(),p=r.strides.slice(),i=l?r.dilations.slice():[],a=r.pads.slice();Go.adjustPoolAttributes(o,n,u,p,i,a);let t=Go.computePoolOutputShape(o,n,p,i,u,a,r.autoPad),c=Object.assign({},r);return l?Object.assign(c,{kernelShape:u,strides:p,pads:a,dilations:i,cacheKey:r.cacheKey}):Object.assign(c,{kernelShape:u,strides:p,pads:a,cacheKey:r.cacheKey}),[c,t]},up={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},la={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[0]},vh=(e,r)=>(kn(r),[e.run({...la,get:()=>sa(r,la,!0,up)},r)]),kn=e=>{if(!e||e.length!==1)throw new Error("Pool ops requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")},ca=(e,r,o,n,l)=>{let u=e.length;if(r.kernelShape.length<=2){let p=r.kernelShape[r.kernelShape.length-1],i=r.strides[r.strides.length-1],a=r.pads[r.pads.length/2-1],t=r.pads[r.pads.length-1],c=e[u-1],s="",d="",f="";if(a+t!==0?s=`
          for (int i = 0; i < ${p}; i++) {
            x[${u} - 1] = indices[${u} - 1] * ${i} - ${a} + i;
            if (x[${u} - 1] < 0 || x[${u} - 1] >= ${c}) {
              pad++;
              continue;
            }
            ${o}
          }`:s=`
          for (int i = 0; i < ${p}; i++) {
            x[${u} - 1] = indices[${u} - 1] * ${i} - ${a} + i;
            ${o}
          }`,r.kernelShape.length===2){let g=r.kernelShape[r.kernelShape.length-2],b=r.strides[r.strides.length-2],y=r.pads[r.pads.length/2-2],m=r.pads[r.pads.length-2],v=e[u-2];y+m!==0?d=`
            for (int j = 0; j < ${g}; j++) {
              x[${u} - 2] = indices[${u} - 2] * ${b} - ${y} + j;
              if (x[${u} - 2] < 0 || x[${u} - 2] >= ${v}) {
                pad+= ${p};
                continue;
              }
          `:d=`
            for (int j = 0; j < ${g}; j++) {
              x[${u} - 2] = indices[${u} - 2] * ${b} - ${y} + j;
            `,f=`
          }
        `}return`
        float process(int indices[${u}]) {
          int x[${u}];
          copyVec(indices, x);

          float value = ${l};
          int pad = 0;
          ${d}
          ${s}
          ${f}
          ${n}
          return value;
        }
      `}else{let p=ke.size(r.kernelShape),i=ke.computeStrides(r.kernelShape),a=i.length,t=r.pads.length,c=lp(a),s=Nn(e,"inputDims"),d=Nn(r.pads,"pads"),f=Nn(i,"kernelStrides"),g=Nn(r.strides,"strides"),b=r.pads.reduce((m,v)=>m+v),y="";return b?y=`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${o}
          }`:y=`
          }
          ${o}
        `,`
        ${c}
        float process(int indices[${u}]) {
          int x[${u}];
          copyVec(indices, x);
          int offset[${a}];
          int pads[${t}];
          int inputDims[${u}];
          int kernelStrides[${a}];
          int strides[${a}];
          ${d}
          ${s}
          ${g}
          ${f}

          float value = ${l};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${p}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${u} - ${a}; j < ${u}; j++) {
              x[j] = indices[j] * strides[j - ${u} + ${a}]
                + offset[j - ${u} + ${a}] - pads[j - 2];
              ${y}
          }
          ${n}

          return value;
        }
      `}},Nn=(e,r)=>{let o="";for(let n=0;n<e.length;n++)o+=`
      ${r}[${n}] = ${e[n]};
    `;return o},lp=e=>`
  void offsetToIndices(int offset, int[${e}] strides, out int[${e}] indices) {
    if (${e} == 0) {
      return;
    }
    for (int i = 0; i < ${e} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${e} - 1] = offset;
  }`}),xr,Ar,cp,pp,xh,wh,Th,Ah,_h,Eh,Dh,Ex=re(()=>{"use strict";St(),Zo(),Ye(),Ve(),xr=(e,r,o,n,l)=>{pp(r);let u={name:n,inputNames:["A"],inputTypes:[0]};return[e.run({...u,cacheHint:o.cacheKey,get:()=>cp(e,r,o,n,l,u)},r)]},Ar=e=>{let r=e.attributes.getInts("axes",[]),o=e.attributes.getInt("keepdims",1)===1;return ot({axes:r,keepDims:o})},cp=(e,r,o,n,l,u)=>{let p=[],i=r[0].dims.length||1,a=[],t=ke.normalizeAxes(o.axes,r[0].dims.length),c=l(r,t),s=c[1];for(let f=0;f<r[0].dims.length;f++)t.indexOf(f)>=0||t.length===0?(o.keepDims&&p.push(1),s=`
          for(int j${f} = 0; j${f} < ${r[0].dims[f]}; j${f}++) {
            inputIdx[${f}] = j${f};
            ${s}
          }`):(a.push(`inputIdx[${f}] = outputIdx[${p.length}];`),p.push(r[0].dims[f]));let d=`
      float process(int outputIdx[${p.length||1}]) {
        float value;                 // final result
        int inputIdx[${i}];      // addressing input data
        ${a.join(`
`)}
        ${c[0]}       // init ops for reduce max/min
        ${s}
        ${c[2]}       // final computation for reduce mean
        return value;
      }`;return{...u,output:{dims:p,type:r[0].type,textureType:0},shaderSource:d}},pp=e=>{if(!e||e.length!==1)throw new Error("Reduce op requires 1 input.");if(so.indexOf(e[0].type)===-1)throw new Error("Invalid input type.")},xh=(e,r,o)=>xr(e,r,o,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),wh=(e,r,o)=>xr(e,r,o,"ReduceMean",(n,l)=>{let u=1;for(let p=0;p<n[0].dims.length;p++)(l.indexOf(p)>=0||l.length===0)&&(u*=n[0].dims[p]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${u}.;`]}),Th=(e,r,o)=>xr(e,r,o,"ReduceMax",(n,l)=>{let u=[];for(let p=0;p<n[0].dims.length;p++)(l.indexOf(p)>=0||l.length===0)&&u.push(`inputIdx[${p}] = 0;`);return[`${u.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),Ah=(e,r,o)=>xr(e,r,o,"ReduceMin",(n,l)=>{let u=[];for(let p=0;p<n[0].dims.length;p++)(l.indexOf(p)>=0||l.length===0)&&u.push(`inputIdx[${p}] = 0;`);return[`${u.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),_h=(e,r,o)=>xr(e,r,o,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),Eh=(e,r,o)=>xr(e,r,o,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),Dh=(e,r,o)=>xr(e,r,o,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])}),Sh,Dx=re(()=>{"use strict";Ye(),Sh=(e,r)=>{let o=ke.calculateReshapedDims(r[0].dims,r[1].integerData);return e.session.pack?[e.reshapePacked(r[0],o)]:[e.reshapeUnpacked(r[0],o)]}}),pa,es,Ph,Ch,Zn,dp,ts,Ko,Oh=re(()=>{"use strict";St(),gt(),Ve(),pa={name:"Upsample",inputNames:["X"],inputTypes:[0]},es=(e,r,o)=>(ts(r,o),[e.run({...pa,cacheHint:o.cacheKey,get:()=>dp(e,r,o)},r)]),Ph=e=>Zn(e,7),Ch=e=>Zn(e,9),Zn=(e,r)=>{let o=r>=10,n=e.attributes.getString("mode","nearest");if(n!=="nearest"&&n!=="linear"&&(r<11||n!=="cubic"))throw new Error(`unrecognized mode: ${n}`);let l=[];r<9&&(l=e.attributes.getFloats("scales"),Ko(l,n,o));let u=e.attributes.getFloat("extrapolation_value",0),p=r>10?e.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(p)===-1)throw new Error(`coordinate_transform_mode '${p}' is not supported`);let i=p==="tf_crop_and_resize",a=i,t=n==="nearest"&&r>=11?e.attributes.getString("nearest_mode","round_prefer_floor"):"";if(["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(t)===-1)throw new Error(`nearest_mode '${t}' is not supported`);let c=e.attributes.getFloat("cubic_coeff_a",-.75),s=e.attributes.getInt("exclude_outside",0)!==0;if(s&&n!=="cubic")throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");let d=r<11?!0:n==="nearest"&&p==="asymmetric"&&t==="floor",f=0,g=0,b=0;return r>10?e.inputs.length>2?(f=1,g=2,b=3):(g=1,b=2):r===9&&(g=1),ot({opset:r,isResize:o,mode:n,scales:l,extrapolationValue:u,coordinateTransformMode:p,useExtrapolation:a,needRoiInput:i,nearestMode:t,cubicCoefficientA:c,excludeOutside:s,useNearest2xOptimization:d,roiInputIdx:f,scalesInputIdx:g,sizesInputIdx:b})},dp=(e,r,o)=>{let n=Ge(e.session.backend.glContext.version),[l,u]=e.calculateTextureWidthAndHeight(r[0].dims,0),p=r[0].dims.map((b,y)=>Math.floor(b*o.scales[y])),[i,a]=e.calculateTextureWidthAndHeight(p,0),t=p.length,c=new Array(t),s=new Array(t),d=`
      int output_pitches[${t}];
      int input_pitches[${t}];
      `;for(let b=t-1;b>=0;b--)c[b]=b===t-1?1:c[b+1]*p[b+1],s[b]=b===t-1?1:s[b+1]*r[0].dims[b+1],d+=`
        output_pitches[${b}] = ${c[b]};
        input_pitches[${b}] = ${s[b]};
        `;let f=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${l}, ${u});
        float value = getColorAsFloat(${n.texture2D}(X, coords));
        return value;
      }
      `,g=o.mode==="nearest"?`
    ${f}
    float process(int indices[${t}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${i}, ${a});

      ${d}

      int d, m;
      for (int dim = 0; dim < ${t}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }`:t===4?`
    ${f}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${i}, ${a});

      ${d}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${r[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }`:`
    ${f}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${i}, ${a});

      ${d}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${r[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;return{...pa,output:{dims:p,type:r[0].type,textureType:0},shaderSource:g,variables:[{name:"scales",type:"int",arrayLength:o.scales.length,data:o.scales.map(b=>Math.ceil(b))}]}},ts=(e,r)=>{if(!e||r.opset<9&&e.length!==1||r.opset>=9&&r.opset<11&&e.length!==2||r.opset>=11&&e.length<2)throw new Error("invalid inputs.");if(r.scales.length>0&&e[0].dims.length!==r.scales.length)throw new Error("Invalid input shape.");if(e[0].type==="string")throw new Error("Invalid input tensor types.")},Ko=(e,r,o)=>{if(o){for(let n of e)if(n<=0)throw new Error("Scale value should be greater than 0.")}else for(let n of e)if(n<1)throw new Error("Scale value should be greater than or equal to 1.");if((r==="linear"||r==="cubic")&&e.length!==2&&(e.length!==4||e[0]!==1||e[1]!==1))throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${o?"Resize":"Upsample"} opeartor.`)}}),ko,rs,Ih,Fh,fp,hp,gp,mp,Sx=re(()=>{"use strict";gt(),Ve(),gr(),un(),Oh(),ko={name:"Resize",inputNames:["A"],inputTypes:[2]},rs=(e,r,o)=>(ts(r,o),[e.run({...ko,cacheHint:o.cacheKey,get:()=>fp(e,r,o)},r)]),Ih=e=>Zn(e,10),Fh=e=>Zn(e,11),fp=(e,r,o)=>{let n=Ge(e.session.backend.glContext.version),[l,u]=hp(r,o);if(l.every(v=>v===1)&&o.coordinateTransformMode!=="tf_crop_and_resize")return{...ko,output:{dims:u,type:r[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${n.texture2D}(X, TexCoords);
                    ${n.output} = v;
                }`};let p=u.length;if(p<2)throw new Error(`output dimension should be at least 2, but got ${p}`);let i=u[p-2],a=u[p-1],t=r[0].dims;if(p!==t.length)throw new Error(`output dimension should match input ${t.length}, but got ${p}`);let c=t[p-2],s=t[p-1],d=l[p-2],f=l[p-1],g="";if(o.mode!=="linear")throw new Error(`resize (packed) does not support mode: '${o.mode}'`);switch(o.coordinateTransformMode){case"asymmetric":g=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return vec4(coords) / scaleWHWH;
                    }
                `;break;case"half_pixel":g=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;
                    }
                `;break;case"pytorch_half_pixel":g=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${a}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${i}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${a}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${i}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":g=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${a}.0 - 1.0, ${i}.0 - 1.0, ${a}.0 - 1.0,
                            ${i}.0 - 1.0);
                        vec4 original = vec4(${s}.0 - 1.0, ${c}.0 - 1.0, ${s}.0 - 1.0,
                            ${c}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${o.coordinateTransformMode}'`)}let b=Dr(p),y=io(),m=`
            const vec2 inputWH = vec2(${c}.0, ${s}.0);
            const vec4 scaleWHWH = vec4(float(${d}), float(${f}), float(${d}), float(${f}));
            ${y}
            ${g}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${b} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${i-1};
                bool hasNextCol = rc.z < ${a-1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${n.output} = vec4(newValue);
            }
        `;return{...ko,output:{dims:u,type:r[0].type,textureType:2},hasMain:!0,shaderSource:m}},hp=(e,r)=>{let o=e[0].dims,n=r.scales,l;if(n.length===0){let p=e[r.scalesInputIdx];if(p&&p.size!==0){if(e[r.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");n=gp(p,r.mode,r.isResize)}else{let i=e[r.sizesInputIdx];if(!i||i.size===0)throw new Error("Either scales or sizes MUST be provided as input.");l=Array.from(i.integerData),n=mp(l,o,r.mode,r.isResize)}}else if(e[r.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");let u=l||o.map((p,i)=>Math.floor(p*n[i]));return[n,u]},gp=(e,r,o)=>{let n=Array.from(e.floatData);return Ko(n,r,o),n},mp=(e,r,o,n)=>{let l=r.length,u=new Array(l);for(let p=0,i=l;p<i;p++)if(r[p]===0){if(e[p]!==0)throw new Error("Input dim is zero but required output dim is non-zero.");u[p]=1}else u[p]=e[p]/r[p];return Ko(u,o,n),u}}),Lh,bp,Px=re(()=>{"use strict";sn(),Lh=(e,r)=>(bp(r),[new Kt([r[0].dims.length],"int32",void 0,void 0,new Int32Array(r[0].dims))]),bp=e=>{if(!e||e.length!==1)throw new Error("Shape requires 1 input.")}}),No,kh,Nh,da,yp,Rh,vp,xp,Cx=re(()=>{"use strict";St(),Zo(),Ye(),Ve(),No={name:"Slice",inputNames:["A"],inputTypes:[0]},kh=(e,r,o)=>(yp(r),[e.run({...No,cacheHint:o.cacheKey,get:()=>da(e,r[0],o)},r)]),Nh=e=>{let r=e.attributes.getInts("starts"),o=e.attributes.getInts("ends"),n=e.attributes.getInts("axes",[]);return ot({starts:r,ends:o,axes:n})},da=(e,r,o)=>{let n=o.axes.length===0?r.dims.slice(0).map((c,s)=>s):o.axes,l=ke.normalizeAxes(n,r.dims.length),u=o.starts.map((c,s)=>c>r.dims[l[s]]-1?r.dims[l[s]]:ke.normalizeAxis(c,r.dims[l[s]])),p=o.ends.map((c,s)=>c>r.dims[l[s]]-1?r.dims[l[s]]:ke.normalizeAxis(c,r.dims[l[s]])),i=r.dims.slice(),a=[];for(let c=0;c<l.length;c++)i[l[c]]=p[c]-u[c],u[c]>0&&a.push(`outputIdx[${l[c]}] += ${u[c]};`);let t=`
      float process(int outputIdx[${i.length}]) {
        ${a.join(`
      `)}
        return _A(outputIdx);
      }`;return{...No,output:{dims:i,type:r.type,textureType:0},shaderSource:t}},yp=e=>{if(!e||e.length!==1)throw new Error("Slice requires 1 input.");if(so.indexOf(e[0].type)===-1)throw new Error("Invalid input type.")},Rh=(e,r)=>{xp(r);let o=vp(e,r);return[e.run({...No,cacheHint:o.cacheKey,get:()=>da(e,r[0],o)},[r[0]])]},vp=(e,r)=>{if(!e.session.isInitializer(r[1].dataId)||!e.session.isInitializer(r[2].dataId)||r.length>=4&&!e.session.isInitializer(r[3].dataId)||r.length>=5&&!e.session.isInitializer(r[4].dataId))throw new Error("dynamic slice attributes are not allowed");if(r.length>=5&&r[4].integerData.some(p=>p!==1))throw new Error("currently non-1 steps is not supported for Slice");let o=Array.from(r[1].integerData),n=Array.from(r[2].integerData),l=r.length>=4?Array.from(r[3].integerData):[],u=`${l};${o};${n}`;return{starts:o,ends:n,axes:l,cacheKey:u}},xp=e=>{if(!e||e.length<3||e.length>5)throw new Error("Invalid input number.");if(e[1].type!=="int32"||e[1].dims.length!==1)throw new Error("Invalid input type.");if(e[2].type!=="int32"||e[2].dims.length!==1)throw new Error("Invalid input type.");if(e.length>=4&&(e[3].type!=="int32"||e[3].dims.length!==1))throw new Error("Invalid input type.");if(e.length>=5&&(e[4].type!=="int32"||e[4].dims.length!==1))throw new Error("Invalid input type.")}}),fa,ha,ga,Bh,$h,Mh,jh,ma,wp,Tp,Ap,ba,Ox=re(()=>{"use strict";St(),Ye(),gt(),Ve(),As(),fa={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[0]},ha={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[0,0]},ga={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[0,0,0]},Bh=(e,r,o)=>{ba(r);let n=r[0].dims.slice(),l=ke.normalizeAxis(o.axis,n.length),u=ke.sizeToDimension(n,l),p=ke.sizeFromDimension(n,l);return ma(e,r,o,u,p)},$h=e=>ot({axis:e.attributes.getInt("axis",1)}),Mh=e=>ot({axis:e.attributes.getInt("axis",-1)}),jh=(e,r,o)=>{ba(r);let n=r[0].dims.slice(),l=ke.normalizeAxis(o.axis,n.length),u=n.length,p=l!==u-1,i=[],a=[],t=[],c;p&&(a=Array.from({length:u}).map((g,b)=>b),a[l]=u-1,a[u-1]=l,a.map(g=>i.push(n[g])),c=ot({perm:a}),t=ro(e,r,c));let s=p?ke.sizeToDimension(i,u-1):ke.sizeToDimension(n,u-1),d=p?ke.sizeFromDimension(i,u-1):ke.sizeFromDimension(n,u-1),f=ma(e,p?t:r,o,s,d);return p?ro(e,f,c):f},ma=(e,r,o,n,l)=>{let u=wp(e,r[0],n,l,[n]),p=e.run({...fa,cacheHint:o.cacheKey,get:()=>u},r),i=Tp(e,r[0],n,l,u.output.dims,[n]),a=e.run({...ha,cacheHint:o.cacheKey,get:()=>i},[r[0],p]),t=Ap(e,r[0],n,l,u.output.dims,i.output.dims);return[e.run({...ga,cacheHint:o.cacheKey,get:()=>t},[r[0],p,a])]},wp=(e,r,o,n,l)=>{let[u,p]=e.calculateTextureWidthAndHeight(r.dims,0),i=l.length;if(o<1||n<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(l.length!==1)throw new Error("Dimensionality of the output should be 1");if(l[0]!==o)throw new Error("Shape of the output should be equal to logical row count");let a=Ge(e.session.backend.glContext.version),t=`
      float process(int[${i}] indices) {
        int logical_row_start_offset = indices[0] * ${n};

        float max = getColorAsFloat(${a.texture2D}(A, offsetToCoords(logical_row_start_offset, ${u},
        ${p} )));
        for(int i=1; i<${n}; ++i)
        {
          float current = getColorAsFloat(${a.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${u}, ${p})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return{...fa,output:{dims:l,type:r.type,textureType:0},shaderSource:t}},Tp=(e,r,o,n,l,u)=>{let[p,i]=e.calculateTextureWidthAndHeight(r.dims,0),a=u.length;if(o<1||n<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(u.length!==1)throw new Error("Dimensionality of the output should be 1");if(u[0]!==o)throw new Error("Shape of the output should be equal to logical row count");if(l.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(l[0]!==o)throw new Error("Shape of the intermediate results should be equal to logical row count");let t=Ge(e.session.backend.glContext.version),c=`
      float process(int[${a}] indices) {
        int logical_row_start_offset = indices[0] * ${n};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${n}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${t.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${p}, ${i}))) - max);
        }

        return norm_factor;
      }`;return{...ha,output:{dims:u,type:r.type,textureType:0},shaderSource:c}},Ap=(e,r,o,n,l,u)=>{let[p,i]=e.calculateTextureWidthAndHeight(r.dims,0),a=r.dims.length;if(o<1||n<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(l.length!==1||u.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(l[0]!==o||u[0]!==o)throw new Error("Shape of the intermediate results should be equal to logical row count");let t=`
      float process(int[${a}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${p}, ${i});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${n};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;return{...ga,output:{dims:r.dims,type:r.type,textureType:0},shaderSource:t}},ba=e=>{if(!e||e.length!==1)throw new Error("Softmax requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type")}}),ya,Uh,qh,_p,Ep,Dp,Ix=re(()=>{"use strict";St(),Ye(),Ve(),ya={name:"Split",inputNames:["A"],inputTypes:[0]},Uh=(e,r,o)=>{Dp(r);let n=ke.normalizeAxis(o.axis,r[0].dims.length),l=_p(e,r,n,o),u=[];for(let p=0;p<l;++p)u.push(e.run({...ya,cacheHint:`${o.cacheKey};${p}`,get:()=>Ep(e,r[0],o,n,p)},r));return u},qh=e=>{let r=e.attributes.getInt("axis",0),o=e.attributes.getInts("split",[]),n=e.outputs.length;return ot({axis:r,split:o,numOutputs:n})},_p=(e,r,o,n)=>{let[,l]=ja.splitShape(r[0].dims,o,n.split,n.numOutputs);return l.length},Ep=(e,r,o,n,l)=>{let[u,p]=ja.splitShape(r.dims,n,o.split,o.numOutputs),i=p[l],a=u[l],t=`
      float process(int indices[${a.length}]) {
        indices[${n}] += ${i};
        return _A(indices);
      }
    `;return{...ya,cacheHint:`${o.cacheKey}:${l}`,output:{dims:a,type:r.type,textureType:0},shaderSource:t}},Dp=e=>{if(!e||e.length!==1)throw new Error("Split requires one input.");if(e[0].type!=="int8"&&e[0].type!=="uint8"&&e[0].type!=="int16"&&e[0].type!=="uint16"&&e[0].type!=="int32"&&e[0].type!=="uint32"&&e[0].type!=="float32"&&e[0].type!=="float64"&&e[0].type!=="bool")throw new Error("Invalid input type.")}}),ns,zh,Gh,Sp,Pp,Fx=re(()=>{"use strict";Ye(),ns=(e,r,o)=>{Sp(r);let n=ke.squeezeShape(r[0].dims,o);return[e.reshapeUnpacked(r[0],n)]},zh=(e,r)=>(Pp(r),ns(e,[r[0]],Array.from(r[1].integerData))),Gh=e=>e.attributes.getInts("axes"),Sp=e=>{if(!e||e.length!==1)throw new Error("Squeeze requires 1 input.");if(e[0].type==="string")throw new Error("invalid input tensor types.")},Pp=e=>{if(!e||e.length!==2)throw new Error("Squeeze requires 2 inputs.");if(e[1].type!=="int32")throw new Error("Invalid input type.")}}),Vh,Cp,Op,Lx=re(()=>{"use strict";gt(),Ve(),Vh=(e,r)=>{Op(r);let o={name:"Sum",inputNames:r.map((n,l)=>`X${l}`),inputTypes:new Array(r.length).fill(0)};return[e.run({...o,get:()=>Cp(e,r,o)},r)]},Cp=(e,r,o)=>{let n=Ge(e.session.backend.glContext.version),l=r[0].dims.slice(),u=`
      void main() {
        vec4 result = ${r.map((p,i)=>`${n.texture2D}(X${i},TexCoords)`).join(" + ")};
        ${n.output} = result;
      }
    `;return{...o,output:{dims:l,type:r[0].type,textureType:0},hasMain:!0,shaderSource:u}},Op=e=>{if(!e||e.length===0)throw new Error("Sum requires inputs.");let r=e[0].dims.length;for(let o=1;o<e.length;o++){if(r!==e[o].dims.length)throw new Error("Input shapes are mismatched.");for(let n=0;n<r;n++)if(e[0].dims[n]!==e[o].dims[n])throw new Error("Input shapes are not matched.")}if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.");for(let o=1;o<e.length;o++)if(e[0].type!==e[o].type)throw new Error("Input types are not matched.")}}),Kh,Ip,Fp,kx=re(()=>{"use strict";Zo(),Ve(),Kh=(e,r)=>{Fp(r);let o={name:"Tile",inputNames:["A"],inputTypes:[0]};return[e.run({...o,get:()=>Ip(e,r,o)},r)]},Ip=(e,r,o)=>{let n=r[0].dims.slice(),l=new Array(n.length),u=[];for(let a=0;a<n.length;a++)l[a]=n[a]*r[1].numberData[a],u.push(`inputIdx[${a}] = int(mod(float(outputIdx[${a}]), ${n[a]}.));`);let p=l.length,i=`
      float process(int outputIdx[${p}]) {
        int inputIdx[${p}];
        ${u.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...o,output:{dims:l,type:r[0].type,textureType:0},shaderSource:i}},Fp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 input.");if(e[1].dims.length!==1)throw new Error("The second input shape must 1 dimension.");if(e[1].dims[0]!==e[0].dims.length)throw new Error("Invalid input shape.");if(so.indexOf(e[0].type)===-1)throw new Error("Invalid input type.");if(e[1].type!=="int32"&&e[1].type!=="int16")throw new Error("Invalid repeat type.")}}),os,Hh,Wh,Lp,kp,Nx=re(()=>{"use strict";Ye(),os=(e,r,o)=>{Lp(r);let n=ke.unsqueezeShape(r[0].dims,o);return[e.reshapeUnpacked(r[0],n)]},Hh=(e,r)=>(kp(r),os(e,[r[0]],Array.from(r[1].integerData))),Wh=e=>e.attributes.getInts("axes"),Lp=e=>{if(!e||e.length!==1)throw new Error("Unsqueeze requires 1 input.");if(e[0].type==="string")throw new Error("invalid input tensor types.")},kp=e=>{if(!e||e.length!==2)throw new Error("Unsqueeze requires 2 inputs.");if(e[1].type!=="int32")throw new Error("Invalid input type.")}}),Xh,Rx=re(()=>{"use strict";Av(),Bv(),$v(),jv(),Ts(),fx(),hx(),gx(),mx(),bx(),yx(),vx(),Tx(),xs(),Ax(),_x(),Ex(),Dx(),Sx(),Px(),Cx(),Ox(),Ix(),Fx(),Lx(),kx(),As(),kf(),Nx(),Oh(),Xh=[["Abs","","6+",pf],["Acos","","7+",df],["Add","","7+",Gd],["And","","7+",Vd],["Asin","","7+",ff],["Atan","","7+",hf],["AveragePool","","7+",fh,hh],["BatchNormalization","","7+",jd,Ud],["Cast","","6+",rf,nf],["Ceil","","6+",bf],["Clip","","6-10",Ha,gf],["Clip","","11+",mf],["Concat","","4+",af,sf],["Conv","","1+",Ya,Ja],["ConvTranspose","","1+",Hf,Wf],["Cos","","7+",yf],["Div","","7+",Kd],["Dropout","","7+",Wa],["DepthToSpace","","1+",Yf,Jf],["Equal","","7+",Hd],["Elu","","6+",vf,xf],["Exp","","6+",wf],["Flatten","","1+",Zf,Qf],["Floor","","6+",Tf],["FusedConv","com.microsoft","1+",Ya,Ja],["Gather","","1+",eh,th],["Gemm","","7-10",Za,rh],["Gemm","","11+",Za,nh],["GlobalAveragePool","","1+",gh,mh],["GlobalMaxPool","","1+",vh],["Greater","","7+",Wd],["Identity","","1+",Wa],["ImageScaler","","1+",oh,ih],["InstanceNormalization","","6+",ah,sh],["LeakyRelu","","6+",Af,_f],["Less","","7+",Xd],["LRN","","1+",uh,lh],["Log","","6+",Ef],["MatMul","","1+",Mf,jf],["MaxPool","","1+",bh,yh],["Mul","","7+",Yd],["Neg","","6+",Df],["Not","","1+",Sf],["Or","","7+",Jd],["Pad","","2-10",Qa,ch],["Pad","","11+",ph,dh],["Pow","","7+",Zd],["PRelu","","7+",Qd],["ReduceLogSum","","1+",Eh,Ar],["ReduceMax","","1+",Th,Ar],["ReduceMean","","1+",wh,Ar],["ReduceMin","","1+",Ah,Ar],["ReduceProd","","1+",_h,Ar],["ReduceSum","","1-12",xh,Ar],["ReduceSumSquare","","1+",Dh,Ar],["Relu","","6+",Pf],["Reshape","","5+",Sh],["Resize","","10",rs,Ih],["Resize","","11+",rs,Fh],["Shape","","1+",Lh],["Sigmoid","","6+",Cf],["Sin","","7+",Of],["Slice","","10+",Rh],["Slice","","1-9",kh,Nh],["Softmax","","1-12",Bh,$h],["Softmax","","13+",jh,Mh],["Split","","2-12",Uh,qh],["Sqrt","","6+",If],["Squeeze","","1-12",ns,Gh],["Squeeze","","13+",zh],["Sub","","7+",ef],["Sum","","6+",Vh],["Tan","","7+",Ff],["Tanh","","6+",Lf],["Tile","","6+",Kh],["Transpose","","1+",ro,Xf],["Upsample","","7-8",es,Ph],["Upsample","","9",es,Ch],["Unsqueeze","","1-12",os,Wh],["Unsqueeze","","13+",Hh],["Xor","","7+",tf]]});function Bx(e){let r={},o;for(;(o=is.exec(e))!==null;){let n=o[3].split(",").map(l=>{let u=l.trim().split(" ");return u&&u.length===2?{type:u[0],name:u[1]}:null}).filter(l=>l!==null);r[o[2]]={params:n,body:o[4]}}for(let n in r){let l=Yh.replace("__FUNC__",n),u=new RegExp(l,"gm");for(;(o=u.exec(e))!==null;){let p=o[1],i=o[2],a=o[3].split(","),t=p?`${p} ${i};`:"",c=r[n].body,s="";r[n].params.forEach((f,g)=>{f&&(s+=`${f.type} ${f.name} = ${a[g]};
`)}),c=`${s}
 ${c}`,c=c.replace("return",`${i} = `);let d=`
      ${t}
      {
        ${c}
      }
      `;e=e.replace(o[0],d)}}return e=e.replace(is,""),e}var is,Yh,$x=re(()=>{"use strict";is=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,Yh="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;"});function Gn(e,r){let o=[],n=[],l=r!=null&&Array.isArray(r)&&r.length===0,u=r==null||l?null:Mx(r,e).sort(),p=0;for(let i=0;i<e.length;++i){if(u!=null){if(u[p]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(u[p]==null||u[p]>i)&&e[i]===1&&(o.push(e[i]),n.push(i)),u[p]<=i&&p++}e[i]!==1&&(o.push(e[i]),n.push(i))}return{newShape:o,keptDims:n}}function Mx(e,r){let o=r.length;return e=e==null?r.map((n,l)=>l):[].concat(e),zo(e.every(n=>n>=-o&&n<o),()=>`All values in axis param must be in range [-${o}, ${o}) but got axis ${e}`),zo(e.every(jx),()=>`All values in axis param must be integers but got axis ${e}`),e.map(n=>n<0?o+n:n)}function jx(e){return e%1===0}function Ux(e){if(e.length===0)return 1;let r=e[0];for(let o=1;o<e.length;o++)r*=e[o];return r}function Np(e){let r=Math.ceil(Math.sqrt(e));return[r,Math.ceil(e/r)]}var Jh,Zh=re(()=>{"use strict";ir(),Ye(),Jh=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,r){let o=this.computeTexture(e,r);return r&&r.isPacked&&(o[0]/=2,o[1]/=2),r&&r.reverseWH?[o[1],o[0]]:o}computeTexture(e,r){let o=r&&r.isPacked;if(e.length===0)return o?[2,2]:[1,1];let n=this.maxTextureSize;if(r&&r.breakAxis!==void 0){let p=r.breakAxis>=e.length?1:e.slice(r.breakAxis).reduce((a,t)=>a*t),i=r.breakAxis<=0?1:e.slice(0,r.breakAxis).reduce((a,t)=>a*t);if(p>n||i>n)yt.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${e}, breakAxis:${r.breakAxis}`);else return[p,i]}let l=e.slice(0);o&&(n=n*2,l=l.map((p,i)=>i>=l.length-2?l[i]%2===0?l[i]:l[i]+1:l[i]),l.length===1&&(l=[2,l[0]])),l.length!==2&&(l=Gn(l).newShape);let u=Ux(l);return l.length<=1&&u<=n?[1,u]:l.length===2&&l[0]<=n&&l[1]<=n?l:l.length===3&&l[0]*l[1]<=n&&l[2]<=n?[l[0]*l[1],l[2]]:l.length===3&&l[0]<=n&&l[1]*l[2]<=n?[l[0],l[1]*l[2]]:l.length===4&&l[0]*l[1]*l[2]<=n&&l[3]<=n?[l[0]*l[1]*l[2],l[3]]:l.length===4&&l[0]<=n&&l[1]*l[2]*l[3]<=n?[l[0],l[1]*l[2]*l[3]]:o?Np(u/4).map(p=>p*2):Np(u)}}}),Qh,qx=re(()=>{"use strict";Ye(),Sr(),gt(),Zh(),gr(),Qh=class extends ln{constructor(e){super(e)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){let e="offsetToCoords";return{offsetToCoords:new me(`
      vec2 ${e}(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){let e="coordsToOffset";return{coordsToOffset:new me(`
      int ${e}(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){let e=this.context.outputTextureLayout;return e.isPacked?this.getPackedOutputSamplingSnippet(e):this.getUnpackedOutputSamplingSnippet(e)}getPackedOutputSamplingSnippet(e){let r=e.unpackedShape,o=[e.width,e.height],n={},l="getOutputCoords";switch(r.length){case 0:n[l]=this.getOutputScalarCoords();break;case 1:n[l]=this.getOutputPacked1DCoords(r,o);break;case 2:n[l]=this.getOutputPacked2DCoords(r,o);break;case 3:n[l]=this.getOutputPacked3DCoords(r,o);break;default:n[l]=this.getOutputPackedNDCoords(r,o)}let u=`
      void setOutput(vec4 val) {
        ${Ge(this.context.glContext.version).output} = val;
      }
    `,p="floatTextureSetRGBA";return n[p]=new me(u),n}getUnpackedOutputSamplingSnippet(e){let r=e.unpackedShape,o=[e.width,e.height],n={},l="getOutputCoords";switch(r.length){case 0:n[l]=this.getOutputScalarCoords();break;case 1:n[l]=this.getOutputUnpacked1DCoords(r,o);break;case 2:n[l]=this.getOutputUnpacked2DCoords(r,o);break;case 3:n[l]=this.getOutputUnpacked3DCoords(r,o);break;case 4:n[l]=this.getOutputUnpacked4DCoords(r,o);break;case 5:n[l]=this.getOutputUnpacked5DCoords(r,o);break;case 6:n[l]=this.getOutputUnpacked6DCoords(r,o);break;default:throw new Error(`Unsupported output dimensionality: ${r.length}`)}let u=`
        void setOutput(float val) {
          ${Ge(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `,p="floatTextureSetR";return n[p]=new me(u),n}getOutputScalarCoords(){return new me(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(e,r){let o=r,n="";return o[0]===1?(n=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${o[1]}.0);
          }
        `,new me(n)):o[1]===1?(n=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${o[0]}.0);
          }
        `,new me(n)):(n=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${o[0]}, ${o[1]}));
          return 2 * (resTexRC.y * ${o[0]} + resTexRC.x);
        }
      `,new me(n))}getOutputPacked2DCoords(e,r){let o="";if(Un.arraysEqual(e,r))return o=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${r[0]}, ${r[1]}));
        }
      `,new me(o);let n=r,l=Math.ceil(e[1]/2);return o=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${n[0]}, ${n[1]}));

          int index = resTexRC.y * ${n[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${l}) * 2;
          int c = 2 * (index / ${l});

          return ivec2(r, c);
        }
      `,new me(o)}getOutputPacked3DCoords(e,r){let o=[r[0],r[1]],n=Math.ceil(e[2]/2),l=n*Math.ceil(e[1]/2),u=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${o[0]}, ${o[1]}));
          int index = resTexRC.y * ${o[0]} + resTexRC.x;

          int b = index / ${l};
          index -= b * ${l};

          // reverse r and c order for packed texture
          int r = imod(index, ${n}) * 2;
          int c = 2 * (index / ${n});

          return ivec3(b, r, c);
        }
      `;return new me(u)}getOutputPackedNDCoords(e,r){let o=[r[0],r[1]],n=Math.ceil(e[e.length-1]/2),l=n*Math.ceil(e[e.length-2]/2),u=l,p="",i="b, r, c";for(let t=2;t<e.length-1;t++)u*=e[e.length-t-1],p=`
      int b${t} = index / ${u};
      index -= b${t} * ${u};
    `+p,i=`b${t}, `+i;let a=`
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${o[0]}, ${o[1]}));
        int index = resTexRC.y * ${o[0]} + resTexRC.x;

        ${p}

        int b = index / ${l};
        index -= b * ${l};

        // reverse r and c order for packed texture
        int r = imod(index, ${n}) * 2;
        int c = 2 * (index / ${n});

        return ivec${e.length}(${i});
      }
    `;return new me(a)}getOutputUnpacked1DCoords(e,r){let o=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          return resTexRC.y * ${r[0]} + resTexRC.x;
        }
      `;return new me(o)}getOutputUnpacked2DCoords(e,r){let o=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;
          int r = index / ${e[1]};
          int c = index - r * ${e[1]};
          return ivec2(r, c);
        }
      `;return new me(o)}getOutputUnpacked3DCoords(e,r){let o="",n=e.length,l=null;n<2&&(l=[]),l=new Array(n-1),l[n-2]=e[n-1];for(let i=n-3;i>=0;--i)l[i]=l[i+1]*e[i+1];let u=["r","c","d"],p=l.map((i,a)=>{let t=`int ${u[a]} = index / ${i}`,c=a===l.length-1?`int ${u[a+1]} = index - ${u[a]} * ${i}`:`index -= ${u[a]} * ${i}`;return`${t}; ${c};`}).join("");return o=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;
          ${p}
          return ivec3(r, c, d);
        }
      `,new me(o)}getOutputUnpacked4DCoords(e,r){let o="",n=e.length,l=null;n<2&&(l=[]),l=new Array(n-1),l[n-2]=e[n-1];for(let i=n-3;i>=0;--i)l[i]=l[i+1]*e[i+1];let u=["r","c","d","d2"],p=l.map((i,a)=>{let t=`int ${u[a]} = index / ${i}`,c=a===l.length-1?`int ${u[a+1]} = index - ${u[a]} * ${i}`:`index -= ${u[a]} * ${i}`;return`${t}; ${c};`}).join("");return o=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;
          ${p}
          return ivec4(r, c, d, d2);
        }
      `,new me(o)}getOutputUnpacked5DCoords(e,r){let o="",n=e.length,l=null;n<2&&(l=[]),l=new Array(n-1),l[n-2]=e[n-1];for(let i=n-3;i>=0;--i)l[i]=l[i+1]*e[i+1];let u=["r","c","d","d2","d3"],p=l.map((i,a)=>{let t=`int ${u[a]} = index / ${i}`,c=a===l.length-1?`int ${u[a+1]} = index - ${u[a]} * ${i}`:`index -= ${u[a]} * ${i}`;return`${t}; ${c};`}).join("");return o=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;
          ${p}
          return ivec5(r, c, d, d2, d3);
        }
      `,new me(o)}getOutputUnpacked6DCoords(e,r){let o="",n=e.length,l=null;n<2&&(l=[]),l=new Array(n-1),l[n-2]=e[n-1];for(let i=n-3;i>=0;--i)l[i]=l[i+1]*e[i+1];let u=["r","c","d","d2","d3","d4"],p=l.map((i,a)=>{let t=`int ${u[a]} = index / ${i}`,c=a===l.length-1?`int ${u[a+1]} = index - ${u[a]} * ${i}`:`index -= ${u[a]} * ${i}`;return`${t}; ${c};`}).join("");return o=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${r[0]}, ${r[1]}));
         int index = resTexRC.y * ${r[0]} + resTexRC.x;
         ${p}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new me(o)}getCommonUtilFuncs(){let e={},r="uvFromFlat";e[r]=new me(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),r="packedUVfrom1D",e[r]=new me(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),r="packedUVfrom2D",e[r]=new me(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),r="packedUVfrom3D",e[r]=new me(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),r="sampleTexture";let o=Ge(this.context.glContext.version);return e[r]=new me(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${o.texture2D}(textureSampler, uv).r;
        }`),e}getInputsSamplingSnippets(){let e={},r=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((o,n)=>{let l=this.context.inputTextureLayouts[n],u=Ji(o);l.isPacked?e[u]=this.getPackedSamplerFromInput(u,o,l):e[u]=this.getUnpackedSamplerFromInput(u,o,l);let p=uv(o);l.unpackedShape.length<=r.unpackedShape.length&&(l.isPacked?e[p]=this.getPackedSamplerAtOutputCoords(p,l,r,o):e[p]=this.getUnpackedSamplerAtOutputCoords(p,l,r,o))}),e}getPackedSamplerAtOutputCoords(e,r,o,n){let l=r.unpackedShape,u=o.unpackedShape,p=Ji(n),i=l.length,a=u.length,t=cr.getBroadcastDims(l,u),c=Dr(a),s=a-i,d,f=an();i===0?d="":a<2&&t.length>=1?d="coords = 0;":d=t.map(M=>`coords.${f[M+s]} = 0;`).join(`
`);let g="";a<2&&i>0?g="coords":g=l.map((M,q)=>`coords.${f[q+s]}`).join(", ");let b="return outputValue;",y=ke.size(l)===1,m=ke.size(u)===1;if(i===1&&!y&&!m)b=`
        return vec4(outputValue.xy, outputValue.xy);
      `;else if(y&&!m)a===1?b=`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:b=`
          return vec4(outputValue.x);
        `;else if(t.length){let M=i-2,q=i-1;t.indexOf(M)>-1&&t.indexOf(q)>-1?b="return vec4(outputValue.x);":t.indexOf(M)>-1?b="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":t.indexOf(q)>-1&&(b="return vec4(outputValue.xx, outputValue.zz);")}let v=`
        int lastDim = coords.${f[a-1]};
        coords.${f[a-1]} = coords.${f[a-2]};
        coords.${f[a-2]} = lastDim;
      `,C=`
      vec4 ${e}() {
        ${c} coords = getOutputCoords();
        ${v}
        ${d}
        vec4 outputValue = ${p}(${g});
        ${b}
      }
    `;return new me(C,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(e,r,o,n){let l=[o.width,o.height],u=[r.width,r.height],p=r.unpackedShape.length,i=o.unpackedShape.length,a=r.unpackedShape,t=o.unpackedShape,c=Ji(n);if(p===i&&Un.arraysEqual(u,l)){let v=`
          float ${e}() {
            return sampleTexture(${n}, TexCoords);
          }
        `;return new me(v,["coordinates.sampleTexture"])}let s=Dr(i),d=cr.getBroadcastDims(a,t),f=i-p,g,b=an();p===0?g="":i<2&&d.length>=1?g="coords = 0;":g=d.map(v=>`coords.${b[v+f]} = 0;`).join(`
`);let y="";i<2&&p>0?y="coords":y=r.unpackedShape.map((v,C)=>`coords.${b[C+f]}`).join(", ");let m=`
        float ${e}() {
          ${s} coords = getOutputCoords();
          ${g}
          return ${c}(${y});
        }
      `;return new me(m,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(e,r,o){switch(o.unpackedShape.length){case 0:return this.getPackedSamplerScalar(e,r);case 1:return this.getPackedSampler1D(e,r,o);case 2:return this.getPackedSampler2D(e,r,o);case 3:return this.getPackedSampler3D(e,r,o);default:return this.getPackedSamplerND(e,r,o)}}getUnpackedSamplerFromInput(e,r,o){let n=o.unpackedShape;switch(n.length){case 0:return this.getUnpackedSamplerScalar(e,r,o);case 1:return this.getUnpackedSampler1D(e,r,o);case 2:return this.getUnpackedSampler2D(e,r,o);case 3:return this.getUnpackedSampler3D(e,r,o);case 4:return this.getUnpackedSampler4D(e,r,o);case 5:return this.getUnpackedSampler5D(e,r,o);case 6:return this.getUnpackedSampler6D(e,r,o);default:throw new Error(`Unsupported dimension ${n.length}-D`)}}getPackedSamplerScalar(e,r){let o=Ge(this.context.glContext.version),n=`
          vec4 ${e}() {
            return ${o.texture2D}(${r}, halfCR);
          }
        `;return new me(n)}getPackedSampler1D(e,r,o){let n=[o.width,o.height],l=[n[1],n[0]],u=Ge(this.context.glContext.version),p=`vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${l[0]}, ${l[1]}, index);
      return ${u.texture2D}(${r}, uv);
    }`;return new me(p,["coordinates.packedUVfrom1D"])}getPackedSampler2D(e,r,o){let n=o.unpackedShape,l=[o.width,o.height],u=Ge(this.context.glContext.version),p=l[0],i=l[1];if(l!=null&&Un.arraysEqual(n,l)){let s=`vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${i}.0, ${p}.0);
        return ${u.texture2D}(${r}, uv);
      }`;return new me(s)}let a=l,t=Math.ceil(n[1]/2),c=`vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${a[1]}, ${a[0]}, ${t}, row, col);
      return ${u.texture2D}(${r}, uv);
    }`;return new me(c,["coordinates.packedUVfrom2D"])}getPackedSampler3D(e,r,o){let n=o.unpackedShape,l=[o.width,o.height],u=[l[0],l[1]],p=Ge(this.context.glContext.version);if(n[0]===1){let d=n.slice(1),f=[1,2],g=In(n,d),b=["b","row","col"],y=JSON.parse(JSON.stringify(o));y.unpackedShape=g;let m=this.getPackedSamplerFromInput(e,r,y),v=`${m.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${Fn(b,f)});
      } `;return new me(v,m.dependencies)}let i=u[0],a=u[1],t=Math.ceil(n[2]/2),c=t*Math.ceil(n[1]/2),s=`vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${a}, ${i}, ${c}, ${t}, b, row, col);
      return ${p.texture2D}(${r}, uv);}`;return new me(s,["coordinates.packedUVfrom3D"])}getPackedSamplerND(e,r,o){let n=o.unpackedShape,l=n.length,u=[o.width,o.height],p=Ge(this.context.glContext.version),i=[u[0],u[1]],a=i[1],t=i[0],c=Math.ceil(n[l-1]/2),s=c*Math.ceil(n[l-2]/2),d="int b, int row, int col",f=`b * ${s} + (row / 2) * ${c} + (col / 2)`;for(let b=2;b<l-1;b++)d=`int b${b}, `+d,s*=n[l-b-1],f=`b${b} * ${s} + `+f;let g=`vec4 ${e}(${d}) {
      int index = ${f};
      int texR = index / ${t};
      int texC = index - texR * ${t};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${t}, ${a});
      return ${p.texture2D}(${r}, uv);
    }`;return new me(g)}getUnpackedSamplerScalar(e,r,o){let[n,l]=[o.width,o.height];if(n===1&&l===1){let p=`
          float ${e}() {
            return sampleTexture(${r}, halfCR);
          }
        `;return new me(p,["coordinates.sampleTexture"])}let u=`
        float ${e}() {
          int offset_${r} = coordsToOffset(TexCoords, ${n}, ${l});
          vec2 uv = uvFromFlat(${n}, ${l}, offset_${r});
          return sampleTexture(${r}, uv);
        }
      `;return new me(u,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(e,r,o){let n=o.width,l=o.height;if(l===1&&n===1){let p=`
        float ${e}(int index) {
          return sampleTexture(${r}, halfCR);
        }
      `;return new me(p,["coordinates.sampleTexture"])}if(l===1){let p=`
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${n}.0, 0.5);
            return sampleTexture(${r}, uv);
          }
        `;return new me(p,["coordinates.sampleTexture"])}if(n===1){let p=`
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${l}.0);
            return sampleTexture(${r}, uv);
          }
        `;return new me(p,["coordinates.sampleTexture"])}let u=`
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${n}, ${l}, index);
          return sampleTexture(${r}, uv);
        }
      `;return new me(u,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(e,r,o){let n=o.unpackedShape,l=[o.height,o.width];if(l!=null&&Un.arraysEqual(n,l)){let s=l[1],d=l[0],f=`
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${s}.0, ${d}.0);
            return sampleTexture(${r}, uv);
          }
        `;return new me(f,["coordinates.sampleTexture"])}let{newShape:u,keptDims:p}=Gn(n),i=u;if(i.length<n.length){let s=In(n,i),d=JSON.parse(JSON.stringify(o));d.unpackedShape=s;let f=["col","row"],g=`
          ${this.getUnpackedSamplerFromInput(e,r,d).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${Fn(f,p)});
          }
        `;return new me(g,["coordinates.sampleTexture"])}let a=l[1],t=l[0];if(t===1){let s=`
          float ${e}(int row, int col) {
            int offset_${r} = coordsToOffset(TexCoords, ${a}, ${t});
            float index = dot(vec3(row, col, offset_${r}), vec3(${n[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${a}.0);
            return sampleTexture(${r}, uv);
          }
        `;return new me(s,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(a===1){let s=`
          float ${e}(int row, int col) {
            int offset_${r} = coordsToOffset(TexCoords, ${a}, ${t});
            float index = dot(vec3(row, col, offset_${r}), vec3(${n[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${t}.0, 0.5);
            return sampleTexture(${r}, uv);
          }
        `;return new me(s,["coordinates.sampleTexture","coordinates.coordsToOffset"])}let c=`
        float ${e}(int row, int col) {
          int index = col * ${n[1]} + row;
          vec2 uv = uvFromFlat(${a}, ${t}, index);
          return sampleTexture(${r}, uv);
        }
      `;return new me(c,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(e,r,o){let n=o.unpackedShape,l=n[1]*n[2],u=n[2],{newShape:p,keptDims:i}=Gn(n),a=p;if(a.length<n.length){let d=In(n,a),f=["batch","col","row"],g=JSON.parse(JSON.stringify(o));g.unpackedShape=d;let b=this.getUnpackedSamplerFromInput(e,r,g),y=i.reverse(),m=`
          ${b.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${Fn(f,y)});
          }
        `;return new me(m,b.dependencies)}let t=o.width,c=o.height,s=`
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${l} + col * ${u} + row;
            vec2 uv = uvFromFlat(${t}, ${c}, index);
            return sampleTexture(${r}, uv);
          }
      `;return new me(s,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(e,r,o){let n=o.unpackedShape,l=n[3],u=n[2]*l,p=n[1]*u,i=o.width,a=o.height,t=`
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${p} + col * ${u} +
              depth2 * ${l} + depth;
          vec2 uv = uvFromFlat(${i}, ${a}, index);
          return sampleTexture(${r}, uv);
        }
      `;return new me(t,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(e,r,o){let n=o.unpackedShape,l=n[4],u=n[3]*l,p=n[2]*u,i=n[1]*p,{newShape:a,keptDims:t}=Gn(n);if(a.length<n.length){let f=In(n,a),g=["row","col","depth","depth2","depth3"],b=JSON.parse(JSON.stringify(o));b.unpackedShape=f;let y=`
          ${this.getUnpackedSamplerFromInput(e,r,b).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${Fn(g,t)});
          }
        `;return new me(y,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let c=o.width,s=o.height,d=`
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${i} + col * ${p} + depth * ${u} +
          depth3 * ${l} + depth2;
          vec2 uv = uvFromFlat(${c}, ${s}, index);
          return sampleTexture(${r}, uv);
        }
      `;return new me(d,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(e,r,o){let n=o.unpackedShape,l=n[5],u=n[4]*l,p=n[3]*u,i=n[2]*p,a=n[1]*i,{newShape:t,keptDims:c}=Gn(n);if(t.length<n.length){let g=In(n,t),b=["row","col","depth","depth2","depth3","depth4"],y=JSON.parse(JSON.stringify(o));y.unpackedShape=g;let m=`
            ${this.getUnpackedSamplerFromInput(e,r,y).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${Fn(b,c)});
            }
          `;return new me(m,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let s=o.width,d=o.height,f=`
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${a} + col * ${i} + depth * ${p} +
            depth2 * ${u} + depth3 * ${l} + depth4;
            vec2 uv = uvFromFlat(${s}, ${d}, index);
            return sampleTexture(${r}, uv);
          }
        `;return new me(f,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){let e=this.context.outputTextureLayout,r=e.shape.length,o=e.strides,n=e.width,l=e.height,u=[];for(let i=0;i<r-1;++i)u.push(`
        c[${i}] = offset / ${o[i]};`),u.push(`
        offset -= c[${i}] * ${o[i]};`);u.push(`
        c[${r-1}] = offset;`);let p=`
      void toVec(vec2 texCoords, out int c[${r}]) {
        int offset = coordsToOffset(texCoords, ${n}, ${l});
        ${u.join("")}
      }
      void toVec(int offset, out int c[${r}]) {
        ${u.join("")}
      }
    `;return{toVec:new me(p,["coordinates.coordsToOffset"])}}valueFrom(){let e={};return this.context.programInfo.inputNames.forEach((r,o)=>{let n=this.context.inputTextureLayouts[o],l=(n.unpackedShape.length>0?n.unpackedShape:n.shape).length,u=`_${r}`;e[u]=new me(this.getValueFromSingle(r,l,n.width,n.height,!1),[`shapeUtils.indicesToOffset${u}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),u=u+"_T",e[u]=new me(this.getValueFromSingle(r,l,n.width,n.height,!0),[`shapeUtils.indicesToOffset${u}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),e}getValueFromSingle(e,r,o,n,l){let u=`_${e}`;l&&(u=u+"_T");let p=Ge(this.context.glContext.version);return`
        float ${u}(int m[${r}]) {
          int offset = indicesToOffset${u}(m);
          vec2 coords = offsetToCoords(offset, ${o}, ${n});
          float value = getColorAsFloat(${p.texture2D}(${e}, coords));
          return value;
        }
        `}getPackedValueFrom(e,r,o,n,l){let u=`_${e}_Pack`;l&&(u=u+"_T");let p=Ge(this.context.glContext.version);return`
        vec4 ${u}(int m[${r}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${o}, ${n});
          return ${p.texture2D}(${e}, coords);
        }
        `}}}),eg,zx=re(()=>{"use strict";Sr(),eg=class as extends ln{constructor(r){super(r)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new me(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new me(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){let r=as.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{encode:new me(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${r}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `)}}decodeUint8(){let r=as.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{decode:new me(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${r}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){let r=new ArrayBuffer(4),o=new Uint32Array(r),n=new Uint8Array(r);if(o[0]=3735928559,n[0]===239)return!0;if(n[0]===222)return!1;throw new Error("unknown endianness")}}}),tg,Gx=re(()=>{"use strict";Sr(),gt(),tg=class extends ln{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=Ge(this.context.glContext.version);return{setFragColor:new me(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new me(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}}),rg,Vx=re(()=>{"use strict";Sr(),rg=class Vn extends ln{constructor(r){super(r)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let r=this.context.outputTextureLayout.shape.length,o={};return this.context.programInfo.inputNames.forEach((n,l)=>{let u=this.context.inputTextureLayouts[l].unpackedShape;if(u.length<=r){let p=u.length,i=r-p,a=`bcastIndices_${n}`,t="";for(let s=0;s<p;++s)t+=`
          realIndices[${s}] = int( mod(float(bcastedIndices[${i+s}]), ${u[s]}.0) );
          `;let c=`
        void ${a} (int bcastedIndices[${r}], out int realIndices[${p}]) {
          ${t}
        }
        `;o[a]=new me(c)}}),o}bcastMatmulIndex(){let r=this.context.outputTextureLayout.shape.length,o={};return this.context.programInfo.inputNames.forEach((n,l)=>{let u=this.context.inputTextureLayouts[l].shape;if(!(u.length<2||u.length>r)){let p=u.length,i=r-p,a=`bcastMatmulIndices_${n}`,t="";for(let s=0;s<p-2;++s)t+=`
          realIndices[${s}] = int( mod(float(bcastedIndices[${i+s}]), ${u[s]}.0) );
          `;let c=`
        void ${a}(int bcastedIndices[${r}], out int realIndices[${p}]) {
          ${t}
          realIndices[${p-1}] = bcastedIndices[${r-1}];
          realIndices[${p-2}] = bcastedIndices[${r-2}];
        }
        `;o[a]=new me(c)}}),o}indicesToOffset(){let r={};return this.context.programInfo.inputNames.forEach((o,n)=>{let l=this.context.inputTextureLayouts[n].shape,u=this.context.inputTextureLayouts[n].strides,p=l.length,i=`indicesToOffset_${o}`;r[i]=new me(Vn.indexToOffsetSingle(i,p,u)),i=`indicesToOffset_${o}_T`,r[i]=new me(Vn.indexToOffsetSingle(i,p,u.slice().reverse()))}),r}static indexToOffsetSingle(r,o,n){let l="";for(let u=o-1;u>=0;--u)l+=`
        offset += indices[${u}] * ${n[u]};
        `;return`
      int ${r}(int indices[${o}]) {
        int offset = 0;
        ${l}
        return offset;
      }
      `}offsetToIndices(){let r={};return this.context.programInfo.inputNames.forEach((o,n)=>{let l=this.context.inputTextureLayouts[n].shape,u=this.context.inputTextureLayouts[n].strides,p=l.length,i=`offsetToIndices_${o}`;r[i]=new me(Vn.offsetToIndicesSingle(i,p,u)),i=`offsetToIndices_${o}_T`,r[i]=new me(Vn.offsetToIndicesSingle(i,p,u.slice().reverse()))}),r}static offsetToIndicesSingle(r,o,n){let l=[];for(let u=0;u<o-1;++u)l.push(`
      indices[${u}] = offset / ${n[u]};`),l.push(`
        offset -= indices[${u}] * ${n[u]};`);return l.push(`
      indices[${o-1}] = offset;`),`
      void ${r}(int offset, out int indices[${o}]) {
        ${l.join("")}
      }
      `}incrementIndices(){let r={};return this.context.programInfo.inputNames.forEach((o,n)=>{let l=this.context.inputTextureLayouts[n].shape,u=l.length,p=`incrementIndices_${o}`,i="";for(let t=0;t<u;++t)i+=`
        shape[${t}] = ${l[t]};`;let a=`
        void ${p}(int axis, out int indices[${u}]) {
          int shape[${u}];
          ${i};
          for(int i = ${u} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;r[p]=new me(a)}),r}}}),ng,Kx=re(()=>{"use strict";Sr(),ng=class extends ln{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let e=this.context.outputTextureLayout.shape.length,r={add:"+=",sub:"-=",mul:"*=",div:"/="},o={};for(let n in r){let l=`${n}Vec`,u="";for(let i=0;i<e;++i)u+=`
          dest[${i}] ${r[n]} src[${i}];
          `;let p=`
        void ${l}(int src[${e}], out int dest[${e}]) {
          ${u}
        }
        `;o[l]=new me(p)}return o}copyVec(){let e=this.context.outputTextureLayout.shape.length,r="";for(let n=0;n<e;++n)r+=`
        dest[${n}] = src[${n}];
        `;let o=`
      void copyVec(int src[${e}], out int dest[${e}]) {
        ${r}
      }
      `;return{copyVec:new me(o)}}setVecItem(){let e=this.context.outputTextureLayout.shape.length,r=`
        if(index < 0)
            index =${e} + index;
        if (index == 0)
            m[0] = value;
        `;for(let n=1;n<e-1;++n)r+=`
        else if (index == ${n})
            m[${n}] = value;
            `;r+=`
        else
            m[${e-1}] = value;
        `;let o=`
      void setVecItem(out int m[${e}], int index, int value) {
        ${r}
      }
        `;return{setVecItem:new me(o)}}getVecItem(){let e=this.context.outputTextureLayout.shape.length,r=`
        if(index < 0)
            index = ${e} + index;
        if (index == 0)
            return m[0];
      `;for(let n=1;n<e-1;++n)r+=`
        else if (index == ${n})
            return m[${n}];
      `;r+=`
        else
            return m[${e-1}];
        `;let o=`
      int getVecItem(int m[${e}], int index) {
        ${r}
      }
    `;return{getVecItem:new me(o)}}}}),ss,Hx=re(()=>{"use strict";qx(),zx(),Gx(),Vx(),Kx(),ss={encoding:eg,fragcolor:tg,vec:ng,shapeUtils:rg,coordinates:Qh}}),og,Wx=re(()=>{"use strict";Sr(),$x(),Hx(),gt(),og=class{constructor(e,r,o,n){this.libs={},this.glslLibRoutineDependencyGraph={},this.context=new qd(e,r,o,n),Object.keys(ss).forEach(u=>{let p=new ss[u](this.context);this.libs[u]=p});let l=this.glslLibRoutineDependencyGraph;for(let u in this.libs){let p=this.libs[u].getFunctions();for(let i in p){let a=u+"."+i,t;l[a]?(t=l[a],t.routineBody=p[i].routineBody):(t=new Ka(a,p[i].routineBody),l[a]=t);let c=p[i].dependencies;if(c)for(let s=0;s<c.length;++s)if(l[c[s]])t.addDependency(l[c[s]]);else{let d=new Ka(c[s]);l[c[s]]=d,t.addDependency(d)}}}}preprocess(){let e=this.context.programInfo,r=e.shaderSource;return this.context.programInfo.hasMain||(r=`${r}
      ${sv(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),r=Bx(r),`${av(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(r)}
    ${r}`}getImports(e){let r=this.selectGlslLibRoutinesToBeIncluded(e);if(r.length===0)return"";let o="";for(let n=0;n<r.length;++n)if(r[n].routineBody)o+=r[n].routineBody+`
`;else throw new Error(`Missing body for the Glsl Library routine: ${r[n].name}`);return o}selectGlslLibRoutinesToBeIncluded(e){let r=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(o=>{let n=o.split(".")[1];e.indexOf(n)!==-1&&r.push(this.glslLibRoutineDependencyGraph[o])}),zd.returnOrderedNodes(r)}getUniforms(e,r){let o=[];if(e)for(let n of e)o.push(`uniform sampler2D ${n};`);if(r)for(let n of r)o.push(`uniform ${n.type} ${n.name}${n.arrayLength?`[${n.arrayLength}]`:""};`);return o.join(`
`)}}}),ig,Xx=re(()=>{"use strict";pr(),ir(),Wx(),gt(),ig=class{constructor(e,r,o){this.profiler=e,this.glContext=r,this.textureLayoutStrategy=o,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,o){this.profiler.event("op",`ProgramManager.run ${e.programInfo.name??"unknown kernel"}`,()=>{let n=this.glContext.gl,l=e.program;n.useProgram(l);try{this.bindOutput(o),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],r)}catch(u){throw yt.error("ProgramManager",e.programInfo.shaderSource),u}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,r,o){return this.profiler.event("backend","ProgramManager.build",()=>{let n=new og(this.glContext,e,r,o),l=n.preprocess(),u=this.compile(l);return{programInfo:e,program:u,uniformLocations:this.getUniformLocations(u,n.context.programInfo.inputNames,n.context.programInfo.variables),attribLocations:this.getAttribLocations(u)}})}compile(e){if(!this.vertexShader){yt.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");let n=iv(this.glContext.version);this.vertexShader=this.glContext.compileShader(n,this.glContext.gl.VERTEX_SHADER)}qe.debug&&yt.verbose("ProrgramManager",`FragShader:
${e}
`);let r=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),o=this.glContext.createProgram(this.vertexShader,r);return this.glContext.deleteShader(r),o}bindOutput(e){let r=e.width,o=e.height;yt.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${r}/${o}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,r,o)}bindAttributes(e){let r=e.position,o=e.textureCoord;this.glContext.setVertexAttributes(r,o),this.attributesBound=!0}bindUniforms(e,r,o){let n=this.glContext.gl,l=0;for(let{name:u,type:p,location:i,arrayLength:a}of e){let t=r.find(c=>c.name===u)?.data;if(p!=="sampler2D"&&!t)throw new Error(`variable '${u}' does not have data defined in program info`);switch(p){case"sampler2D":this.bindTexture(o[l],i,l),l++;break;case"float":a?n.uniform1fv(i,t):n.uniform1f(i,t);break;case"int":a?n.uniform1iv(i,t):n.uniform1i(i,t);break;default:throw new Error(`Uniform not implemented: ${p}`)}}}bindTexture(e,r,o){this.glContext.bindTextureToUniform(e.texture,o,r)}getAttribLocations(e){return{position:this.getAttribLocation(e,"position"),textureCoord:this.getAttribLocation(e,"textureCoord")}}getUniformLocations(e,r,o){let n=[];if(r)for(let l of r)n.push({name:l,type:"sampler2D",location:this.getUniformLocation(e,l)});if(o)for(let l of o)n.push({...l,location:this.getUniformLocation(e,l.name)});return n}getUniformLocation(e,r){let o=this.glContext.gl.getUniformLocation(e,r);if(o===null)throw new Error(`Uniform ${r} not found.`);return o}getAttribLocation(e,r){return this.glContext.gl.getAttribLocation(e,r)}}}),ag,Yx=re(()=>{"use strict";ir(),Vo(),ag=class{constructor(e,r,o,n){this.glContext=e,this.layoutStrategy=r,this.profiler=o,this.config=n,this.pendingRead=new Map,n.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,r,o,n){let l=this.toEncoderType(e),u=this.glContext.getEncoder(l,r.channels||1,n);if(r.isPacked&&n===1)throw new Error("not implemented");let p=r.width,i=r.height,a,t;if(this.config.reuseTextures){a=`${p}x${i}_${u.format}_${u.internalFormat}_${u.textureType}`,t=this.inUseTextures.get(a),t||(t=[],this.inUseTextures.set(a,t));let s=this.idleTextures.get(a);if(s&&s.length>0){let d=s.pop();return t.push(d),n===1&&this.glContext.updateTexture(d,p,i,u,this.toTextureData(e,o)),d}}yt.verbose("TextureManager",`Creating new texture of size ${r.width}x${r.height}`);let c=this.glContext.allocateTexture(p,i,u,this.toTextureData(e,o));return this.config.reuseTextures&&(t.push(c),this.textureLookup.set(c,a)),c}readTexture(e,r,o){return o||(o=1),this.profiler.event("backend","TextureManager.readTexture",()=>{let n=e.shape.reduce((u,p)=>u*p)*o,l=this.glContext.readTexture(e.texture,e.width,e.height,n,this.toEncoderType(r),o);return this.toTensorData(r,l)})}async readTextureAsync(e,r,o){let n=e.tensor.dataId;if(o||(o=1),this.pendingRead.has(n)){let l=this.pendingRead.get(n);return new Promise(u=>l?.push(u))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(n,[]);let l=e.shape.reduce((a,t)=>a*t)*o;await this.glContext.createAndWaitForFence();let u=this.glContext.readTexture(e.texture,e.width,e.height,l,this.toEncoderType(r),o),p=this.toTensorData(r,u),i=this.pendingRead.get(n);return this.pendingRead.delete(n),i?.forEach(a=>a(p)),p})}readUint8TextureAsFloat(e){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{let r=e.shape.reduce((n,l)=>n*l),o=this.glContext.readTexture(e.texture,e.width,e.height,r*4,"byte",4);return new Float32Array(o.buffer,o.byteOffset,r)})}releaseTexture(e,r){let o;if(this.config.reuseTextures&&(o=this.textureLookup.get(e.texture),o)){r&&this.textureLookup.delete(o);let n=this.inUseTextures.get(o);if(n){let l=n.indexOf(e.texture);if(l!==-1){n.splice(l,1);let u=this.idleTextures.get(o);u||(u=[],this.idleTextures.set(o,u)),u.push(e.texture)}}}(!o||r)&&(yt.verbose("TextureManager",`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,r){switch(e){case"int16":return r instanceof Int16Array?r:Int16Array.from(r);case"int32":return r instanceof Int32Array?r:Int32Array.from(r);case"int8":return r instanceof Int8Array?r:Int8Array.from(r);case"uint16":return r instanceof Uint16Array?r:Uint16Array.from(r);case"uint32":return r instanceof Uint32Array?r:Uint32Array.from(r);case"uint8":case"bool":return r instanceof Uint8Array?r:Uint8Array.from(r);case"float32":return r instanceof Float32Array?r:Float32Array.from(r);case"float64":return r instanceof Float64Array?r:Float64Array.from(r);default:throw new Error(`TensorData type ${e} is not supported`)}}toTextureData(e,r){if(r)return r instanceof Float32Array?r:new Float32Array(r)}toEncoderType(e){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}}),sg,Jx=re(()=>{"use strict";ir(),j0(),Tv(),Rx(),Xx(),Zh(),Yx(),sg=class{constructor(e,r){this.backend=e,this.context=r,this.layoutStrategy=new Jh(e.glContext.maxTextureSize),this.programManager=new ig(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new ag(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:e.textureCacheMode==="full"}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new Md(this)}onGraphInitialized(e){let r=e.getValues().filter(o=>o.from===-1&&o.tensor).map(o=>o.tensor.dataId);this.initializers=new Set(r)}isInitializer(e){return this.initializers?this.initializers.has(e):!1}addInitializer(e){this.initializers.add(e)}getTextureData(e,r){return r?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,r,o=!1){yt.verbose("WebGLSessionHandler","Storing Texture data in cache"),o?this.packedTextureDataCache.set(e,r):this.unpackedTextureDataCache.set(e,r)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,r,o){let n=$0(e,r,Xh);return{impl:n.opImpl,context:n.opInit?n.opInit(e,o):e}}}});function Zx(e){let r=0;for(;r<e.length&&e[r]();++r);return r-1}var us,Qx=re(()=>{"use strict";pr(),Vo(),Vo(),gr(),us=class{constructor(e,r){this.frameBufferBound=!1,this.itemsToPoll=[],this.gl=e,this.version=r,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,r,o,n){let l=this.gl,u=l.createTexture();l.bindTexture(l.TEXTURE_2D,u),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.NEAREST),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE);let p=n?o.encode(n,e*r):null;return l.texImage2D(l.TEXTURE_2D,0,o.internalFormat,e,r,0,o.format,o.textureType,p),this.checkError(),u}updateTexture(e,r,o,n,l){let u=this.gl;u.bindTexture(u.TEXTURE_2D,e);let p=n.encode(l,r*o);u.texSubImage2D(u.TEXTURE_2D,0,0,0,r,o,n.format,n.textureType,p),this.checkError()}attachFramebuffer(e,r,o){let n=this.gl;n.bindTexture(n.TEXTURE_2D,e),n.bindFramebuffer(n.FRAMEBUFFER,this.framebuffer),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0),this.checkError(),n.viewport(0,0,r,o),n.scissor(0,0,r,o)}readTexture(e,r,o,n,l,u){let p=this.gl;u||(u=1),this.frameBufferBound||this.attachFramebuffer(e,r,o);let i=this.getEncoder(l,u),a=i.allocate(r*o);return p.bindTexture(p.TEXTURE_2D,e),p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,e,0),p.readPixels(0,0,r,o,p.RGBA,i.textureType,a),this.checkError(),i.decode(a,n)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,r){let o=this.gl;o.vertexAttribPointer(e,3,o.FLOAT,!1,20,0),o.enableVertexAttribArray(e),r!==-1&&(o.vertexAttribPointer(r,2,o.FLOAT,!1,20,12),o.enableVertexAttribArray(r)),this.checkError()}createProgram(e,r){let o=this.gl,n=o.createProgram();return o.attachShader(n,e),o.attachShader(n,r),o.linkProgram(n),n}compileShader(e,r){let o=this.gl,n=o.createShader(r);if(!n)throw new Error(`createShader() returned null with type ${r}`);if(o.shaderSource(n,e),o.compileShader(n),o.getShaderParameter(n,o.COMPILE_STATUS)===!1)throw new Error(`Failed to compile shader: ${o.getShaderInfoLog(n)}
Shader source:
${e}`);return n}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,r,o){let n=this.gl;n.activeTexture(n.TEXTURE0+r),this.checkError(),n.bindTexture(n.TEXTURE_2D,e),this.checkError(),n.uniform1i(o,r),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(qe.debug){let e=this.gl,r=e.getError(),o="";switch(r){case e.NO_ERROR:return;case e.INVALID_ENUM:o="INVALID_ENUM";break;case e.INVALID_VALUE:o="INVALID_VALUE";break;case e.INVALID_OPERATION:o="INVALID_OPERATION";break;case e.INVALID_FRAMEBUFFER_OPERATION:o="INVALID_FRAMEBUFFER_OPERATION";break;case e.OUT_OF_MEMORY:o="OUT_OF_MEMORY";break;case e.CONTEXT_LOST_WEBGL:o="CONTEXT_LOST_WEBGL";break;default:o=`Unknown WebGL Error: ${r.toString(16)}`}throw new Error(o)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,r,o=0){if(this.version===2)return new Rd(this.gl,r);switch(e){case"float":return o===1||this.isRenderFloat32Supported?new Ga(this.gl,r):new Ga(this.gl,r,this.textureHalfFloatExtension.HALF_FLOAT_OES);case"int":throw new Error("not implemented");case"byte":return new Bd(this.gl,r);default:throw new Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let r=0;r<this.maxTextureImageUnits;++r)e.activeTexture(e.TEXTURE0+r),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,r=e.createBuffer();if(!r)throw new Error("createBuffer() returned null");let o=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,o,e.STATIC_DRAW),this.checkError(),r}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw new Error("createFramebuffer returned null");return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),this.version===1&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw new Error("both float32 and float16 TextureType are not supported");this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){this.version===2?(this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float"),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")):(this.textureFloatExtension=this.gl.getExtension("OES_texture_float"),this.textureHalfFloatExtension=this.gl.getExtension("OES_texture_half_float"))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);let o=this.version===2?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,o,1,1,0,e.RGBA,e.FLOAT,null);let n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let l=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(n),l}checkRenderFloat32(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension("WEBGL_color_buffer_float"))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,r,o,n,l,u;try{r=e.createTexture(),o=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,r);let p=this.version===2?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,p,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.enable(e.BLEND),n=e.createShader(e.VERTEX_SHADER),!n||(e.shaderSource(n,"void main(){}"),e.compileShader(n),l=e.createShader(e.FRAGMENT_SHADER),!l)||(e.shaderSource(l,"precision highp float;void main(){gl_FragColor=vec4(0.5);}"),e.compileShader(l),u=e.createProgram(),!u)?!1:(e.attachShader(u,n),e.attachShader(u,l),e.linkProgram(u),e.useProgram(u),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),u&&e.deleteProgram(u),n&&e.deleteShader(n),l&&e.deleteShader(l),o&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(o)),r&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(r))}}beginTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,r=this.disjointTimerQueryWebgl2Extension,o=e.createQuery();return e.beginQuery(r.TIME_ELAPSED_EXT,o),o}else throw new Error("WebGL1 profiling currently not supported.")}endTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,r=this.disjointTimerQueryWebgl2Extension;e.endQuery(r.TIME_ELAPSED_EXT);return}else throw new Error("WebGL1 profiling currently not supported")}isTimerResultAvailable(e){let r=!1,o=!1;if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let n=this.gl,l=this.disjointTimerQueryWebgl2Extension;r=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE),o=n.getParameter(l.GPU_DISJOINT_EXT)}else throw new Error("WebGL1 profiling currently not supported");return r&&!o}getTimerResult(e){let r=0;if(this.version===2){let o=this.gl;r=o.getQueryParameter(e,o.QUERY_RESULT),o.deleteQuery(e)}else throw new Error("WebGL1 profiling currently not supported");return r/1e6}async waitForQueryAndGetTime(e){return await Ll(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let r,o=e,n=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),n===null?r=()=>!0:r=()=>{let l=o.clientWaitSync(n,0,0);return l===o.ALREADY_SIGNALED||l===o.CONDITION_SATISFIED},{query:n,isFencePassed:r}}async pollFence(e){return new Promise(r=>{this.addItemToPoll(()=>e.isFencePassed(),()=>r())})}pollItems(){let e=Zx(this.itemsToPoll.map(r=>r.isDoneFn));for(let r=0;r<=e;++r){let{resolveFn:o}=this.itemsToPoll[r];o()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,r){this.itemsToPoll.push({isDoneFn:e,resolveFn:r}),!(this.itemsToPoll.length>1)&&await Ll(()=>(this.pollItems(),this.itemsToPoll.length===0))}}});function ug(e){let r;if((!e||e==="webgl2")&&"webgl2"in Br?r=Br.webgl2:(!e||e==="webgl")&&"webgl"in Br&&(r=Br.webgl),!r)try{let n=t1();r=Rp(n,e)}catch{let n=e1();r=Rp(n,e)}e=e||r.version===1?"webgl":"webgl2";let o=r.gl;return Br[e]=r,o.isContextLost()?(delete Br[e],ug(e)):(o.disable(o.DEPTH_TEST),o.disable(o.STENCIL_TEST),o.disable(o.BLEND),o.disable(o.DITHER),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SAMPLE_COVERAGE),o.enable(o.SCISSOR_TEST),o.enable(o.CULL_FACE),o.cullFace(o.BACK),r)}function Rp(e,r){let o={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1},n,l=o;if((!r||r==="webgl2")&&(n=e.getContext("webgl2",l),n))try{return new us(n,2)}catch(u){yt.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${u}`)}if((!r||r==="webgl")&&(n=e.getContext("webgl",l)||e.getContext("experimental-webgl",l),n))try{return new us(n,1)}catch(u){yt.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${u}`)}throw new Error("WebGL is not supported")}function e1(){if(typeof document>"u")throw new TypeError("failed to create canvas: document is not supported");let e=document.createElement("canvas");return e.width=1,e.height=1,e}function t1(){if(typeof OffscreenCanvas>"u")throw new TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}var Br,r1=re(()=>{"use strict";ir(),Qx(),Br={}}),lg,n1=re(()=>{"use strict";pr(),ir(),Jx(),r1(),lg=class{get contextId(){return qe.webgl.contextId}set contextId(e){qe.webgl.contextId=e}get matmulMaxBatchSize(){return qe.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){qe.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return qe.webgl.textureCacheMode}set textureCacheMode(e){qe.webgl.textureCacheMode=e}get pack(){return qe.webgl.pack}set pack(e){qe.webgl.pack=e}get async(){return qe.webgl.async}set async(e){qe.webgl.async=e}initialize(){try{return this.glContext=ug(this.contextId),typeof this.matmulMaxBatchSize!="number"&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!="string"&&(this.textureCacheMode="full"),typeof this.pack!="boolean"&&(this.pack=!1),typeof this.async!="boolean"&&(this.async=!1),yt.setWithEnv(qe),qe.webgl.context||Object.defineProperty(qe.webgl,"context",{value:this.glContext.gl}),yt.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return yt.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new sg(this,e)}dispose(){this.glContext.dispose()}}});async function cg(e){if(e){let r=typeof e=="string"?[e]:e;for(let o of r){let n=Es.get(o);if(n)return n;let l=await o1(o);if(l)return l}}else return cg(["webgl"]);throw new Error("no available backend to use")}async function o1(e){let r=pg;if(typeof r[e]<"u"&&i1(r[e])){let o=r[e],n=o.initialize();if(typeof n=="object"&&"then"in n&&(n=await n),n)return Es.set(e,o),o}}function i1(e){let r=e;return"initialize"in r&&typeof r.initialize=="function"&&"createSessionHandler"in r&&typeof r.createSessionHandler=="function"&&"dispose"in r&&typeof r.dispose=="function"}var Es,pg,a1=re(()=>{"use strict";n1(),Es=new Map,pg={webgl:new lg}}),Bp,dg,s1=re(()=>{"use strict";ir(),Bp=class{constructor(e,r){this.op=e,this.node=r}},dg=class{constructor(e,r,o){this.graph=e,this.profiler=o,this.initialize(r)}initialize(e){this.profiler.event("session","ExecutionPlan.initialize",()=>{let r=this.graph.getNodes();if(r.length!==e.length)throw new Error("The size of nodes and OPs do not match.");this._ops=e.map((o,n)=>new Bp(o,r[n])),this.reset(),this._starter=[],this._ops.forEach((o,n)=>{let l=!0;for(let u of o.node.inputs)if(!this._values[u]&&this.graph.getInputIndices().indexOf(u)===-1){l=!1;break}l&&this._starter.push(n)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,r){return this.profiler.event("session","ExecutionPlan.execute",async()=>{this.reset();let o=e.createInferenceHandler(),n=this.graph.getInputIndices();if(r.length!==n.length)throw new Error(`number of input tensors don't match the number of inputs to the model: actual: ${r.length} expected: ${n.length}`);r.forEach((t,c)=>{let s=n[c];this._values[s]=t});let l=this._starter.slice(0),u=this.graph.getValues(),p=this.graph.getNodes(),i=0;for(;i<l.length;){let t=l[i++],c=this._ops[t],s=c.node.inputs.map(b=>this._values[b]);if(s.indexOf(void 0)!==-1)throw new Error(`unresolved input detected: op: ${c.node}`);let d=s;yt.verbose("ExecPlan",`Running op:${c.node.name} (${d.map((b,y)=>`'${c.node.inputs[y]}': ${b.type}[${b.dims.join(",")}]`).join(", ")})`);let f=await this.profiler.event("node",c.node.name,async()=>c.op.impl(o,d,c.op.context));if(f.length!==c.node.outputs.length)throw new Error("the size of output does not match model definition.");f.forEach((b,y)=>{let m=c.node.outputs[y];if(this._values[m])throw new Error(`output [${m}] already has value: op:${c.node.name}`);this._values[m]=b});let g=new Set;f.forEach((b,y)=>{let m=c.node.outputs[y];for(let v of u[m].to){let C=p[v],M=!0;for(let q of C.inputs)if(!this._values[q]){M=!1;break}M&&g.add(v)}}),l.push(...g)}let a=[];for(let t=0;t<this.graph.getOutputIndices().length;t++){let c=this.graph.getOutputIndices()[t],s=this._values[c];if(s===void 0)throw new Error(`required output [${c}] does not have value`);c===0?await s.getData():s.data,a.push(s)}return yt.verbose("ExecPlan","disposing of inferenceHandler"),o.dispose(),a})}}}),Ue,zt,ls,u1=re(()=>{"use strict";Yo(),Ue=rn(oo()),sn(),Ye(),zt=De.experimental.fbs,ls=class Kn{constructor(r){if(this._attributes=new Map,r!=null){for(let o of r)o instanceof Ue.onnx.AttributeProto?this._attributes.set(o.name,[Kn.getValue(o),Kn.getType(o)]):o instanceof zt.Attribute&&this._attributes.set(o.name(),[Kn.getValue(o),Kn.getType(o)]);if(this._attributes.size<r.length)throw new Error("duplicated attribute names")}}set(r,o,n){this._attributes.set(r,[n,o])}delete(r){this._attributes.delete(r)}getFloat(r,o){return this.get(r,"float",o)}getInt(r,o){return this.get(r,"int",o)}getString(r,o){return this.get(r,"string",o)}getTensor(r,o){return this.get(r,"tensor",o)}getFloats(r,o){return this.get(r,"floats",o)}getInts(r,o){return this.get(r,"ints",o)}getStrings(r,o){return this.get(r,"strings",o)}getTensors(r,o){return this.get(r,"tensors",o)}get(r,o,n){let l=this._attributes.get(r);if(l===void 0){if(n!==void 0)return n;throw new Error(`required attribute not found: ${r}`)}if(l[1]!==o)throw new Error(`type mismatch: expected ${o} but got ${l[1]}`);return l[0]}static getType(r){let o=r instanceof Ue.onnx.AttributeProto?r.type:r.type();switch(o){case Ue.onnx.AttributeProto.AttributeType.FLOAT:return"float";case Ue.onnx.AttributeProto.AttributeType.INT:return"int";case Ue.onnx.AttributeProto.AttributeType.STRING:return"string";case Ue.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case Ue.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case Ue.onnx.AttributeProto.AttributeType.INTS:return"ints";case Ue.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case Ue.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw new Error(`attribute type is not supported yet: ${Ue.onnx.AttributeProto.AttributeType[o]}`)}}static getValue(r){let o=r instanceof Ue.onnx.AttributeProto?r.type:r.type();if(o===Ue.onnx.AttributeProto.AttributeType.GRAPH||o===Ue.onnx.AttributeProto.AttributeType.GRAPHS)throw new Error("graph attribute is not supported yet");let n=this.getValueNoCheck(r);if(o===Ue.onnx.AttributeProto.AttributeType.INT&&lr.isLong(n))return lr.longToNumber(n);if(o===Ue.onnx.AttributeProto.AttributeType.INTS){let l=n,u=new Array(l.length);for(let p=0;p<l.length;p++){let i=l[p];u[p]=lr.longToNumber(i)}return u}if(o===Ue.onnx.AttributeProto.AttributeType.TENSOR)return r instanceof Ue.onnx.AttributeProto?Kt.fromProto(n):Kt.fromOrtTensor(n);if(o===Ue.onnx.AttributeProto.AttributeType.TENSORS){if(r instanceof Ue.onnx.AttributeProto)return n.map(l=>Kt.fromProto(l));if(r instanceof zt.Attribute)return n.map(l=>Kt.fromOrtTensor(l))}return o===Ue.onnx.AttributeProto.AttributeType.STRING&&r instanceof Ue.onnx.AttributeProto?Ma(n):o===Ue.onnx.AttributeProto.AttributeType.STRINGS&&r instanceof Ue.onnx.AttributeProto?n.map(Ma):n}static getValueNoCheck(r){return r instanceof Ue.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(r):this.getValueNoCheckFromOrtFormat(r)}static getValueNoCheckFromOnnxFormat(r){switch(r.type){case Ue.onnx.AttributeProto.AttributeType.FLOAT:return r.f;case Ue.onnx.AttributeProto.AttributeType.INT:return r.i;case Ue.onnx.AttributeProto.AttributeType.STRING:return r.s;case Ue.onnx.AttributeProto.AttributeType.TENSOR:return r.t;case Ue.onnx.AttributeProto.AttributeType.GRAPH:return r.g;case Ue.onnx.AttributeProto.AttributeType.FLOATS:return r.floats;case Ue.onnx.AttributeProto.AttributeType.INTS:return r.ints;case Ue.onnx.AttributeProto.AttributeType.STRINGS:return r.strings;case Ue.onnx.AttributeProto.AttributeType.TENSORS:return r.tensors;case Ue.onnx.AttributeProto.AttributeType.GRAPHS:return r.graphs;default:throw new Error(`unsupported attribute type: ${Ue.onnx.AttributeProto.AttributeType[r.type]}`)}}static getValueNoCheckFromOrtFormat(r){switch(r.type()){case zt.AttributeType.FLOAT:return r.f();case zt.AttributeType.INT:return r.i();case zt.AttributeType.STRING:return r.s();case zt.AttributeType.TENSOR:return r.t();case zt.AttributeType.GRAPH:return r.g();case zt.AttributeType.FLOATS:return r.floatsArray();case zt.AttributeType.INTS:{let o=[];for(let n=0;n<r.intsLength();n++)o.push(r.ints(n));return o}case zt.AttributeType.STRINGS:{let o=[];for(let n=0;n<r.stringsLength();n++)o.push(r.strings(n));return o}case zt.AttributeType.TENSORS:{let o=[];for(let n=0;n<r.tensorsLength();n++)o.push(r.tensors(n));return o}default:throw new Error(`unsupported attribute type: ${zt.AttributeType[r.type()]}`)}}}}),va,Rn,cs,hr,xa,$p,l1=re(()=>{"use strict";u1(),Yo(),va=rn(oo()),sn(),Ye(),Rn=De.experimental.fbs,cs={from:(e,r)=>new $p(e,r)},hr=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=Gt.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},xa=class{constructor(e,r){e instanceof va.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new ls(e.attribute)):e instanceof Rn.Node&&(this.name=r??e.name(),this.opType=e.opType(),this.attributes=new ls(Gt.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},$p=class{constructor(e,r){if(!e)throw new TypeError("graph is empty");this.buildGraph(e),this.transformGraph(r),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof va.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof Rn.Graph)this.buildGraphFromOrtFormat(e);else throw new TypeError("Graph type is not supported.")}buildGraphFromOnnxFormat(e){let r=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let o=new Map;if(!e.input)throw new Error("missing information in graph: input");let n=[];for(let l of e.input){if(r.has(l.name))throw new Error(`duplicated input name: ${l.name}`);let u=this._allData.push(new hr(l))-1;r.set(l.name,u),n.push(l.name)}if(!e.initializer)throw new Error("missing information in graph: initializer");for(let l of e.initializer){let u=r.get(l.name);if(u===void 0){let p=new hr;p.type={shape:{dims:Gt.tensorDimsFromProto(l.dims)},tensorType:Gt.tensorDataTypeFromProto(l.dataType)},u=this._allData.push(p)-1,r.set(l.name,u)}this._allData[u]._from=-1,this._allData[u].tensor=Kt.fromProto(l)}for(let l=0;l<this._allData.length;l++)this._allData[l].tensor||(this._allInputIndices.push(l),this._allInputNames.push(n[l]));if(!e.output)throw new Error("missing information in graph: output");for(let l of e.output){if(r.has(l.name))throw new Error(`duplicated output name: ${l.name}`);let u=this._allData.push(new hr(l))-1;r.set(l.name,u),this._allOutputIndices.push(u),this._allOutputNames.push(l.name)}if(!e.node)throw new Error("missing information in graph: node");for(let l of e.node){if(!l.name)for(let p=0;;p++){let i=`unnamed_${l.opType}_${p}`;if(!o.has(i)){l.name=i;break}}if(o.has(l.name))throw new Error(`duplicated node name: ${l.name}`);let u=this._nodes.push(new xa(l))-1;o.set(l.name,u)}for(let l=0;l<this._nodes.length;l++){let u=this._nodes[l],p=e.node[l];if(!p.output)throw new Error(`missing output for node: ${p.name}`);for(let i of p.output){let a=r.get(i);if(typeof a>"u"&&(a=this._allData.push(new hr)-1,r.set(i,a)),u.outputs.push(a),this._allData[a]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${a}`);if(this._allData[a]._from=l,p.opType==="Constant"){if(!p.attribute||p.attribute.length!==1||!p.attribute[0].t)throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(!p.output||p.output.length!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");u.outputs.pop(),u.executeNode=!1,this._allData[a]._from=-1,this._allData[a].tensor=Kt.fromProto(p.attribute[0].t)}}}for(let l=0;l<this._nodes.length;l++){let u=this._nodes[l],p=e.node[l];if(!p.input)throw new Error(`missing input for node: ${p.name}`);for(let i of p.input){let a=r.get(i);if(typeof a>"u"){if(i===""&&(p.input.length===3||p.input.length===4)&&p.opType==="Resize")continue;throw new Error(`unrecognized input '${i}' for node: ${p.name}`)}u.inputs.push(a),this._allData[a]._to.push(l)}}return!0}buildGraphFromOrtFormat(e){let r=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let o=new Map,n=[];for(let l=0;l<e.inputsLength();l++){let u=e.inputs(l);if(r.has(u))throw new Error(`duplicated input name: ${u}`);for(let p=0;p<e.nodeArgsLength();p++)if(e.nodeArgs(p)?.name()===u){let i=new hr;if(e.nodeArgs(p)?.type()?.valueType()!==Rn.TypeInfoValue.tensor_type)throw new Error("Unexpected value type for the nodeArg.");let a=e.nodeArgs(p).type().value(new Rn.TensorTypeAndShape),t=Gt.tensorDataTypeFromProto(a.elemType()),c=a.shape(),s=[];for(let f=0;f<c.dimLength();f++)s.push(lr.longToNumber(c.dim(f).value().dimValue()));i.type={shape:{dims:s},tensorType:t};let d=this._allData.push(i)-1;r.set(u,d),n.push(u)}}for(let l=0;l<e.initializersLength();l++){let u=e.initializers(l),p=r.get(u.name());if(p===void 0){let i=new hr,a=Gt.tensorDimsFromORTFormat(u),t=Gt.tensorDataTypeFromProto(u.dataType());i.type={shape:{dims:a},tensorType:t},p=this._allData.push(i)-1,r.set(u.name(),p)}this._allData[p]._from=-1,this._allData[p].tensor=Kt.fromOrtTensor(u)}for(let l=0;l<this._allData.length;l++)this._allData[l].tensor||(this._allInputIndices.push(l),this._allInputNames.push(n[l]));for(let l=0;l<e.outputsLength();l++){let u=e.outputs(l);if(r.has(u))throw new Error(`duplicated output name: ${u}`);let p=this._allData.push(new hr)-1;r.set(u,p),this._allOutputIndices.push(p),this._allOutputNames.push(u)}if(!e.nodes)throw new Error("missing information in graph: node");for(let l=0;l<e.nodesLength();l++){let u=e.nodes(l),p=u.name();if(!p)for(let a=0;p=`unnamed_${u.opType()}_${a}`,!!o.has(p);a++);if(o.has(p))throw new Error(`duplicated node name: ${p}`);let i=this._nodes.push(new xa(u,p))-1;o.set(p,i)}for(let l=0;l<this._nodes.length;l++){let u=this._nodes[l],p=e.nodes(l);if(p==null)throw new Error(`No node exists at index ${l}`);if(p?.outputsLength()===0)throw new Error(`missing output for node: ${p.name}`);for(let i=0;i<p?.outputsLength();i++){let a=p?.outputs(i),t=r.get(a);if(typeof t>"u"&&(t=this._allData.push(new hr)-1,r.set(a,t)),u.outputs.push(t),this._allData[t]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${t}`);if(this._allData[t]._from=l,p.opType()==="Constant"){if(p.attributesLength()!==1||!p.attributes(0).t())throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(p.outputsLength()!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");u.outputs.pop(),u.executeNode=!1,this._allData[t]._from=-1,this._allData[t].tensor=Kt.fromOrtTensor(p.attributes(0).t())}}}for(let l=0;l<this._nodes.length;l++){let u=this._nodes[l],p=e.nodes(l);if(p.inputsLength()===0)throw new Error(`missing input for node: ${p.name}`);for(let i=0;i<p.inputsLength();i++){let a=p.inputs(i),t=r.get(a);if(typeof t>"u")throw new Error(`unrecognized input '${a}' for node: ${p.name()}`);u.inputs.push(t),this._allData[t]._to.push(l)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(n=>{this._allData[n]._to.forEach(l=>{e.add(l)})});let r=Array.from(e),o=new Array(this._nodes.length).fill("white");for(;r.length>0;){let n=r.pop();o[n]==="gray"?o[n]="black":(r.push(n),o[n]="gray",this._nodes[n].outputs.forEach(l=>{let u=this._allData[l];if(typeof u.tensor<"u")throw new Error("node outputs should not be initialized");if(u._from!==n)throw new Error("from property of the Value object doesn't match index of Node being processed");u._to.forEach(p=>{if(o[p]==="gray")throw new Error("model graph is cyclic");o[p]==="white"&&r.push(p)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,r=new Array(this._nodes.length,0),o=0;for(let n=0;n<this._nodes.length;n++)r[n]=o,this._nodes[n].executeNode?(o!==n&&(this._nodes[o]=this._nodes[n]),o++):this._nodes[n].outputs.forEach(l=>{this._allData[l]._from=-2});this._nodes.splice(o,this._nodes.length-o);for(let n=0;n<this._allData.length;n++){let l=this._allData[n];l._from!==void 0&&l._from!==-1&&l._from!==-2&&(l._from=r[l._from]);for(let u=0;u<l._to.length;u++)if(l._to[u]>=0)l._to[u]=r[l._to[u]];else throw new Error("Trying to update a removed node")}e=0;for(let n=0;n<this._allData.length;n++){if(this._allData[n].from===-2&&this._allOutputIndices.indexOf(n+e)===-1){e++,this._allData.splice(n,1),n--;continue}if(e>0){let l=-1;this._allData[n].from!==void 0&&this._allData[n].from!==-1?(l=this._nodes[this._allData[n].from].outputs.indexOf(n+e),l!==-1&&(this._nodes[this._allData[n].from].outputs[l]=n)):(l=this._allInputIndices.indexOf(n+e),l!==-1&&(this._allInputIndices[l]=n)),this._allData[n].to.forEach(u=>{l=this._nodes[u].inputs.indexOf(n+e),l!==-1&&(this._nodes[u].inputs[l]=n)}),this._allData[n].to.length===0&&(l=this._allOutputIndices.indexOf(n+e),l!==-1&&(this._allOutputIndices[l]=n))}}}deleteNode(e){let r=this._nodes[e];if(r.outputs.length>1){for(let p=1;p<r.outputs.length;p++)if(this._allData[r.outputs[p]].to.length>0)throw new Error("Node deletion with more than one output connected to other nodes is not supported. ")}r.executeNode=!1;let o=r.inputs[0],n=r.outputs[0],l=this._allData[n].to;for(let p=0;p<r.inputs.length;p++){let i=this._allData[r.inputs[p]].to.indexOf(e);if(i===-1)throw new Error("The Value object doesn't have the current Node in it's 'to' property ");this._allData[r.inputs[p]].to.splice(i,1)}this._allData[n]._to=[];let u=this._allOutputIndices.indexOf(n);if(u!==-1&&(this._allOutputIndices[u]=o),l&&l.length>0)for(let p of l){let i=this._nodes[p].inputs.indexOf(n);if(i===-1)throw new Error("The Node object doesn't have the output Value in it's 'inputs' property ");this._nodes[p].inputs[i]=o,this._allData[o].to.push(p)}}removeAllDropoutNodes(){let e=0;for(let r of this._nodes){if(r.opType==="Dropout"){if(r.inputs.length!==1)throw new Error("Dropout nodes should only contain one input. ");if(r.outputs.length!==1&&r.outputs.length!==2)throw new Error("Dropout nodes should contain either 1 or 2 output(s)");if(r.outputs.length===2&&this._allData[r.outputs[1]]._to.length!==0)throw new Error("Dropout nodes's second output should not be referenced by other nodes");this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let r of this._nodes)r.opType==="Identity"&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case"Relu":case"Sigmoid":case"Clip":return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if(e.opType==="Conv"){let r=this._allData[e.outputs[0]]._to;if(r.length===1&&this.isActivation(this._nodes[r[0]])){let o=this._nodes[r[0]];if(o.opType==="Clip")if(o.inputs.length===1)try{e.attributes.set("activation_params","floats",[o.attributes.getFloat("min"),o.attributes.getFloat("max")])}catch{e.attributes.set("activation_params","floats",[eo,to])}else if(o.inputs.length>=3&&this._allData[o.inputs[1]].tensor!==void 0&&this._allData[o.inputs[2]].tensor!==void 0)e.attributes.set("activation_params","floats",[this._allData[o.inputs[1]].tensor.floatData[0],this._allData[o.inputs[2]].tensor.floatData[0]]);else continue;e.attributes.set("activation","string",o.opType),this.deleteNode(r[0])}}}}}),Mp,jp,fg,c1=re(()=>{"use strict";ys(),l1(),Yo(),Mp=rn(oo()),Ye(),jp=De.experimental.fbs,fg=class{constructor(){}load(e,r,o){let n;if(!o)try{this.loadFromOnnxFormat(e,r);return}catch(l){if(o!==void 0)throw l;n=l}try{this.loadFromOrtFormat(e,r)}catch(l){throw o!==void 0?l:new Error(`Failed to load model as ONNX format: ${n}
as ORT format: ${l}`)}}loadFromOnnxFormat(e,r){let o=Mp.onnx.ModelProto.decode(e);if(lr.longToNumber(o.irVersion)<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=o.opsetImport.map(n=>({domain:n.domain,version:lr.longToNumber(n.version)})),this._graph=cs.from(o.graph,r)}loadFromOrtFormat(e,r){let o=new j.ByteBuffer(e),n=jp.InferenceSession.getRootAsInferenceSession(o).model();if(lr.longToNumber(n.irVersion())<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=[];for(let l=0;l<n.opsetImportLength();l++){let u=n.opsetImport(l);this._opsets.push({domain:u?.domain(),version:lr.longToNumber(u.version())})}this._graph=cs.from(n.graph(),r)}get graph(){return this._graph}get opsets(){return this._opsets}}}),hg,p1=re(()=>{"use strict";a1(),s1(),ir(),c1(),hg=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=_d.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,r,o){await this.profiler.event("session","Session.loadModel",async()=>{let n=await cg(this.backendHint);if(this.sessionHandler=n.createSessionHandler(this.context),this._model=new fg,typeof e=="string"){let l=e.endsWith(".ort");{let u=await(await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(u),l)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let l=new Uint8Array(e,r||0,o||e.byteLength);this.initialize(l)}})}initialize(e,r){if(this._initialized)throw new Error("already initialized");this.profiler.event("session","Session.initialize",()=>{let o=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,o,r),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new dg(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw new Error("session not initialized yet");return this.profiler.event("session","Session.run",async()=>{let r=this.normalizeAndValidateInputs(e),o=await this._executionPlan.execute(this.sessionHandler,r);return this.createOutput(o)})}normalizeAndValidateInputs(e){let r=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==r.length)throw new Error(`incorrect input array length: expected ${r.length} but got ${e.length}`)}else{if(e.size!==r.length)throw new Error(`incorrect input map size: expected ${r.length} but got ${e.size}`);let o=new Array(e.size),n=0;for(let l=0;l<r.length;++l){let u=e.get(r[l]);if(!u)throw new Error(`missing input tensor for: '${name}'`);o[n++]=u}e=o}if(!this.context.graphInputTypes||this.context.graphInputTypes.length===0||!this.context.graphInputDims||this.context.graphInputDims.length===0){let o=this._model.graph.getInputIndices(),n=this._model.graph.getValues(),l=new Array(o.length);for(let u=0;u<o.length;++u){let p=n[o[u]];l[u]=p.type.shape.dims,this.context.graphInputTypes.push(p.type.tensorType),this.context.graphInputDims.push(e[u].dims)}this.validateInputTensorDims(l,e,!0)}else this.validateInputTensorDims(this.context.graphInputDims,e,!1);return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,r){for(let o=0;o<r.length;o++){let n=e[o],l=r[o].type;if(n!==l)throw new Error(`input tensor[${o}] check failed: expected type '${n}' but got ${l}`)}}validateInputTensorDims(e,r,o){for(let n=0;n<r.length;n++){let l=e[n],u=r[n].dims;if(!this.compareTensorDims(l,u,o))throw new Error(`input tensor[${n}] check failed: expected shape '[${l.join(",")}]' but got [${u.join(",")}]`)}}compareTensorDims(e,r,o){if(e.length!==r.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==r[n]&&(!o||e[n]!==0))return!1;return!0}createOutput(e){let r=this._model.graph.getOutputNames();if(e.length!==r.length)throw new Error("expected number of outputs do not match number of generated outputs");let o=new Map;for(let n=0;n<r.length;++n)o.set(r[n],e[n]);return o}initializeOps(e){let r=e.getNodes();this._ops=new Array(r.length);for(let o=0;o<r.length;o++)this._ops[o]=this.sessionHandler.resolve(r[o],this._model.opsets,e)}}}),gg,d1=re(()=>{"use strict";pr(),sn(),gg=class{constructor(e){this.session=e,this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}async dispose(){}async run(e,r,o){let n=new Map;for(let p in e)if(Object.hasOwnProperty.call(e,p)){let i=e[p];n.set(p,new Kt(i.dims,i.type,void 0,void 0,i.data))}let l=await this.session.run(n),u={};return l.forEach((p,i)=>{u[i]=new Ft(p.type,p.data,p.dims)}),u}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}}),mg={};no(mg,{onnxjsBackend:()=>bg});var Up,bg,f1=re(()=>{"use strict";p1(),d1(),Up=class{async init(){}async createInferenceSessionHandler(e,r){let o=new hg(r);return typeof e=="string"?await o.loadModel(e):await o.loadModel(e),new gg(o)}},bg=new Up}),Ds=re(()=>{"use strict"}),yg={};no(yg,{default:()=>vg});var wa,Ta,vg,h1=re(()=>{"use strict";Fg(),pn(),Qo(),wa="ort-wasm-proxy-worker",Ta=globalThis.self?.name===wa,Ta&&(self.onmessage=e=>{let{type:r,in:o}=e.data;try{switch(r){case"init-wasm":Ss(o.wasm).then(()=>{Fs(o).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:l}=o;Ls(l,n).then(()=>{postMessage({type:r})},u=>{postMessage({type:r,err:u})});break}case"copy-from":{let{buffer:n}=o,l=Wo(n);postMessage({type:r,out:l});break}case"create":{let{model:n,options:l}=o;ks(n,l).then(u=>{postMessage({type:r,out:u})},u=>{postMessage({type:r,err:u})});break}case"release":Ns(o),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:l,inputs:u,outputIndices:p,options:i}=o;Rs(n,l,u,p,new Array(p.length).fill(null),i).then(a=>{a.some(t=>t[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:a},$s([...u,...a]))},a=>{postMessage({type:r,err:a})});break}case"end-profiling":Bs(o),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),vg=Ta?null:e=>new Worker(e??en,{type:"module",name:wa})}),xg={};no(xg,{default:()=>wg});var Aa,_a,wg,g1=re(()=>{"use strict";_a=(Aa=Uo.url,async function(e={}){function r(){return ue.buffer!=K.buffer&&T(),K}function o(){return ue.buffer!=K.buffer&&T(),H}function n(){return ue.buffer!=K.buffer&&T(),ie}function l(){return ue.buffer!=K.buffer&&T(),ae}function u(){return ue.buffer!=K.buffer&&T(),U}var p,i,a=Object.assign({},e),t=new Promise((h,E)=>{p=h,i=E}),c=typeof window=="object",s=typeof importScripts=="function",d=s&&self.name=="em-pthread";a.mountExternalData=(h,E)=>{h.startsWith("./")&&(h=h.substring(2)),(a.Ua||(a.Ua=new Map)).set(h,E)},a.unmountExternalData=()=>{delete a.Ua};var f,g,b=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor,y=Object.assign({},a),m="./this.program",v=(h,E)=>{throw E},C="";(c||s)&&(s?C=self.location.href:typeof document<"u"&&document.currentScript&&(C=document.currentScript.src),Aa&&(C=Aa),C=C.startsWith("blob:")?"":C.substr(0,C.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(g=h=>{var E=new XMLHttpRequest;return E.open("GET",h,!1),E.responseType="arraybuffer",E.send(null),new Uint8Array(E.response)}),f=(h,E,I)=>{var $=new XMLHttpRequest;$.open("GET",h,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?E($.response):I()},$.onerror=I,$.send(null)});var M,q=void 0,Z=void 0,N=q,k=Z;if(Object.assign(a,y),y=null,d){let h=function(E){try{var I=E.data,$=I.cmd;if($==="load"){let V=[];self.onmessage=le=>V.push(le),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let le of V)h(le);self.onmessage=h};for(let le of I.handlers)a[le]&&!a[le].proxy||(a[le]=(...Se)=>{postMessage({Za:"callHandler",kb:le,args:Se})},le=="print"&&(N=a[le]),le=="printErr"&&(k=a[le]));ue=I.wasmMemory,T(),J(I.wasmModule)}else if($==="run"){ii(I.pthread_ptr,0,0,1,0,0),ft(I.pthread_ptr),Ee(),it(),oe||(oe=!0);try{Ae(I.start_routine,I.arg)}catch(V){if(V!="unwind")throw V}}else $==="cancel"?Gr()&&go(-1):I.target!=="setimmediate"&&($==="checkMailbox"?oe&&wt():$&&(k(`worker: received unknown command ${$}`),k(I)))}catch(V){throw iu(),V}};var z=h,J,oe=!1;k=function(...E){E=E.join(" ")},self.alert=function(...E){postMessage({Za:"alert",text:E.join(" "),nb:Gr()})},a.instantiateWasm=(E,I)=>new Promise($=>{J=V=>{V=new WebAssembly.Instance(V,ye()),I(V),$()}}),self.onunhandledrejection=E=>{throw E.reason||E},self.onmessage=h}a.wasmBinary&&(M=a.wasmBinary);var ue,se,W,K,H,ie,ae,F,U,R=!1;function T(){var h=ue.buffer;a.HEAP8=K=new Int8Array(h),a.HEAP16=new Int16Array(h),a.HEAPU8=H=new Uint8Array(h),a.HEAPU16=new Uint16Array(h),a.HEAP32=ie=new Int32Array(h),a.HEAPU32=ae=new Uint32Array(h),a.HEAPF32=new Float32Array(h),a.HEAPF64=U=new Float64Array(h),a.HEAP64=F=new BigInt64Array(h),a.HEAPU64=new BigUint64Array(h)}if(!d){if(!((ue=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof b))throw k("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");T()}var _=[],L=[],w=[],x=0,S=null,D=null;function A(){if(--x==0&&(S!==null&&(clearInterval(S),S=null),D)){var h=D;D=null,h()}}function P(h){throw k(h="Aborted("+h+")"),R=!0,W=1,h=new WebAssembly.RuntimeError(h+". Build with -sASSERTIONS for more info."),i(h),h}var B,G=h=>h.startsWith("data:application/octet-stream;base64,"),ne=h=>h.startsWith("file://");function Q(h){if(h==B&&M)return new Uint8Array(M);if(g)return g(h);throw"both async and sync fetching of the wasm failed"}function fe(h,E,I){return function($){if(!M&&(c||s)){if(typeof fetch=="function"&&!ne($))return fetch($,{credentials:"same-origin"}).then(V=>{if(!V.ok)throw`failed to load wasm binary file at '${$}'`;return V.arrayBuffer()}).catch(()=>Q($));if(f)return new Promise((V,le)=>{f($,Se=>V(new Uint8Array(Se)),le)})}return Promise.resolve().then(()=>Q($))}(h).then($=>WebAssembly.instantiate($,E)).then(I,$=>{k(`failed to asynchronously prepare wasm: ${$}`),P($)})}function ye(){return{a:{j:be,b:$e,E:st,g:Bt,V:Ur,A:hn,C:gn,W:lo,T:Pr,L:Ht,S:mn,o:bn,B:yn,y:vn,U:co,z:O,_:ge,Z:de,P:Ke,w:Pt,F:mr,k:po,O:ft,Y:sm,I:um,J:lm,K:cm,G:Vs,H:Ks,v:pm,q:dm,l:fm,p:hm,e:gm,X:mm,x:bm,d:Hs,f:ym,i:vm,u:xm,t:wm,s:Tm,Q:Ys,R:Js,D:he,h:Zs,n:Qs,M:eu,m:tu,a:ue,r:ce,N:ou,c:Em}}}var _e={837620:(h,E,I,$,V)=>{if(a===void 0||!a.Ua)return 1;if((h=ar(h>>>0)).startsWith("./")&&(h=h.substring(2)),!(h=a.Ua.get(h)))return 2;if($>>>=0,(E>>>=0)+(I>>>=0)>h.byteLength)return 3;try{let le=h.subarray(E,E+I);switch(V){case 0:o().set(le,$>>>0);break;case 1:a.mb($,le);break;default:return 4}return 0}catch{return 4}},838303:()=>typeof wasmOffsetConverter<"u"};function be(){return typeof wasmOffsetConverter<"u"}function Le(h){this.name="ExitStatus",this.message=`Program terminated with exit(${h})`,this.status=h}var Je=h=>{h.terminate(),h.onmessage=()=>{}},Ze=h=>{Ce.length==0&&(Lt(),ct(Ce[0]));var E=Ce.pop();if(!E)return 6;je.push(E),Be[h.Ra]=E,E.Ra=h.Ra;var I={cmd:"run",start_routine:h.cb,arg:h.ab,pthread_ptr:h.Ra};return E.postMessage(I,h.ib),0},te=0,X=(h,E,...I)=>{for(var $=2*I.length,V=ui(),le=si(8*$),Se=le>>>3,ut=0;ut<I.length;ut++){var Ct=I[ut];typeof Ct=="bigint"?(F[Se+2*ut]=1n,F[Se+2*ut+1]=Ct):(F[Se+2*ut]=0n,u()[Se+2*ut+1>>>0]=Ct)}return h=au(h,0,$,le,E),mo(V),h};function ce(h){if(d)return X(0,1,h);if(W=h,!(0<te)){for(var E of je)Je(E);for(E of Ce)Je(E);Ce=[],je=[],Be=[],R=!0}v(h,new Le(h))}function Pe(h){if(d)return X(1,0,h);he(h)}var he=h=>{if(W=h,d)throw Pe(h),"unwind";ce(h)},Ce=[],je=[],ze=[],Be={},Qe=h=>{var E=h.Ra;delete Be[E],Ce.push(h),je.splice(je.indexOf(h),1),h.Ra=0,ai(E)};function it(){ze.forEach(h=>h())}var ct=h=>new Promise(E=>{h.onmessage=V=>{var le=(V=V.data).cmd;if(V.targetThread&&V.targetThread!=Gr()){var Se=Be[V.targetThread];Se?Se.postMessage(V,V.transferList):k(`Internal error! Worker sent a message "${le}" to target pthread ${V.targetThread}, but that thread no longer exists!`)}else le==="checkMailbox"?wt():le==="spawnThread"?Ze(V):le==="cleanupThread"?Qe(Be[V.thread]):le==="killThread"?(V=V.thread,le=Be[V],delete Be[V],Je(le),ai(V),je.splice(je.indexOf(le),1),le.Ra=0):le==="cancelThread"?Be[V.thread].postMessage({cmd:"cancel"}):le==="loaded"?(h.loaded=!0,E(h)):le==="alert"?alert(`Thread ${V.threadId}: ${V.text}`):V.target==="setimmediate"?h.postMessage(V):le==="callHandler"?a[V.handler](...V.args):le&&k(`worker sent an unknown command ${le}`)},h.onerror=V=>{throw k(`worker sent an error! ${V.filename}:${V.lineno}: ${V.message}`),V};var I,$=[];for(I of[])a.hasOwnProperty(I)&&$.push(I);h.postMessage({cmd:"load",handlers:$,wasmMemory:ue,wasmModule:se})});function Lt(){var h=new Worker(new URL(Uo.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});Ce.push(h)}var pt,at=h=>{for(;0<h.length;)h.shift()(a)},Ee=()=>{var h=Gr(),E=l()[h+52>>>2>>>0];h=l()[h+56>>>2>>>0],uu(E,E-h),mo(E)},ve=[],Ae=(h,E)=>{te=0;var I=ve[h];I||(h>=ve.length&&(ve.length=h+1),ve[h]=I=pt.get(h)),h=I(E),0<te?W=h:go(h)};class He{constructor(E){this.Xa=E-24}}function $e(h,E,I){var $=new He(h>>>=0);throw E>>>=0,I>>>=0,l()[$.Xa+16>>>2>>>0]=0,l()[$.Xa+4>>>2>>>0]=E,l()[$.Xa+8>>>2>>>0]=I,h}function lt(h,E,I,$){return d?X(2,1,h,E,I,$):st(h,E,I,$)}function st(h,E,I,$){if(h>>>=0,E>>>=0,I>>>=0,$>>>=0,b===void 0)return k("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var V=[];return d&&V.length===0?lt(h,E,I,$):(h={cb:I,Ra:h,ab:$,ib:V},d?(h.Za="spawnThread",postMessage(h,V),0):Ze(h))}var Me=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,dt=(h,E,I)=>{var $=(E>>>=0)+I;for(I=E;h[I]&&!(I>=$);)++I;if(16<I-E&&h.buffer&&Me)return Me.decode(h.buffer instanceof b?h.slice(E,I):h.subarray(E,I));for($="";E<I;){var V=h[E++];if(128&V){var le=63&h[E++];if((224&V)==192)$+=String.fromCharCode((31&V)<<6|le);else{var Se=63&h[E++];65536>(V=(240&V)==224?(15&V)<<12|le<<6|Se:(7&V)<<18|le<<12|Se<<6|63&h[E++])?$+=String.fromCharCode(V):(V-=65536,$+=String.fromCharCode(55296|V>>10,56320|1023&V))}}else $+=String.fromCharCode(V)}return $},ar=(h,E)=>(h>>>=0)?dt(o(),h,E):"";function Bt(h,E,I){return d?X(3,1,h,E,I):0}function Ur(h,E){if(d)return X(4,1,h,E)}var uo=h=>{for(var E=0,I=0;I<h.length;++I){var $=h.charCodeAt(I);127>=$?E++:2047>=$?E+=2:55296<=$&&57343>=$?(E+=4,++I):E+=3}return E},dr=(h,E,I,$)=>{if(!(0<$))return 0;var V=I>>>=0;$=I+$-1;for(var le=0;le<h.length;++le){var Se=h.charCodeAt(le);if(55296<=Se&&57343>=Se&&(Se=65536+((1023&Se)<<10)|1023&h.charCodeAt(++le)),127>=Se){if(I>=$)break;E[I++>>>0]=Se}else{if(2047>=Se){if(I+1>=$)break;E[I++>>>0]=192|Se>>6}else{if(65535>=Se){if(I+2>=$)break;E[I++>>>0]=224|Se>>12}else{if(I+3>=$)break;E[I++>>>0]=240|Se>>18,E[I++>>>0]=128|Se>>12&63}E[I++>>>0]=128|Se>>6&63}E[I++>>>0]=128|63&Se}}return E[I>>>0]=0,I-V},fr=(h,E,I)=>dr(h,o(),E,I);function hn(h,E){if(d)return X(5,1,h,E)}function gn(h,E,I){if(d)return X(6,1,h,E,I)}function lo(h,E,I){return d?X(7,1,h,E,I):0}function Pr(h,E){if(d)return X(8,1,h,E)}function Ht(h,E,I){if(d)return X(9,1,h,E,I)}function mn(h,E,I,$){if(d)return X(10,1,h,E,I,$)}function bn(h,E,I,$){if(d)return X(11,1,h,E,I,$)}function yn(h,E,I,$){if(d)return X(12,1,h,E,I,$)}function vn(h){if(d)return X(13,1,h)}function co(h,E){if(d)return X(14,1,h,E)}function O(h,E,I){if(d)return X(15,1,h,E,I)}var ge=()=>{P("")},de=()=>1;function Ke(h){ii(h>>>0,!s,1,!c,131072,!1),it()}function ft(h){h>>>=0,typeof Atomics.jb=="function"&&(Atomics.jb(n(),h>>>2,h).value.then(wt),h+=128,Atomics.store(n(),h>>>2,1))}var wt=()=>{var h=Gr();if(h&&(ft(h),h=su,!R))try{if(h(),!(0<te))try{d?go(W):he(W)}catch(E){E instanceof Le||E=="unwind"||v(1,E)}}catch(E){E instanceof Le||E=="unwind"||v(1,E)}};function Pt(h,E){(h>>>=0)==E>>>0?setTimeout(wt):d?postMessage({targetThread:h,cmd:"checkMailbox"}):(h=Be[h])&&h.postMessage({cmd:"checkMailbox"})}var mt=[];function mr(h,E,I,$,V){for(E>>>=0,$/=2,mt.length=$,I=V>>>0>>>3,V=0;V<$;V++)mt[V]=F[I+2*V]?F[I+2*V+1]:u()[I+2*V+1>>>0];return(E?_e[E]:Dm[h])(...mt)}function po(h){h>>>=0,d?postMessage({cmd:"cleanupThread",thread:h}):Qe(Be[h])}function sm(h){}function um(h,E){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),E>>>=0,h=new Date(1e3*h),n()[E>>>2>>>0]=h.getUTCSeconds(),n()[E+4>>>2>>>0]=h.getUTCMinutes(),n()[E+8>>>2>>>0]=h.getUTCHours(),n()[E+12>>>2>>>0]=h.getUTCDate(),n()[E+16>>>2>>>0]=h.getUTCMonth(),n()[E+20>>>2>>>0]=h.getUTCFullYear()-1900,n()[E+24>>>2>>>0]=h.getUTCDay(),h=(h.getTime()-Date.UTC(h.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[E+28>>>2>>>0]=h}var qr=h=>h%4==0&&(h%100!=0||h%400==0),zs=[0,31,60,91,121,152,182,213,244,274,305,335],Gs=[0,31,59,90,120,151,181,212,243,273,304,334];function lm(h,E){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),E>>>=0,h=new Date(1e3*h),n()[E>>>2>>>0]=h.getSeconds(),n()[E+4>>>2>>>0]=h.getMinutes(),n()[E+8>>>2>>>0]=h.getHours(),n()[E+12>>>2>>>0]=h.getDate(),n()[E+16>>>2>>>0]=h.getMonth(),n()[E+20>>>2>>>0]=h.getFullYear()-1900,n()[E+24>>>2>>>0]=h.getDay();var I=(qr(h.getFullYear())?zs:Gs)[h.getMonth()]+h.getDate()-1|0;n()[E+28>>>2>>>0]=I,n()[E+36>>>2>>>0]=-60*h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset();var $=new Date(h.getFullYear(),0,1).getTimezoneOffset();h=0|(I!=$&&h.getTimezoneOffset()==Math.min($,I)),n()[E+32>>>2>>>0]=h}function cm(h){h>>>=0;var E=new Date(n()[h+20>>>2>>>0]+1900,n()[h+16>>>2>>>0],n()[h+12>>>2>>>0],n()[h+8>>>2>>>0],n()[h+4>>>2>>>0],n()[h>>>2>>>0],0),I=n()[h+32>>>2>>>0],$=E.getTimezoneOffset(),V=new Date(E.getFullYear(),6,1).getTimezoneOffset(),le=new Date(E.getFullYear(),0,1).getTimezoneOffset(),Se=Math.min(le,V);return 0>I?n()[h+32>>>2>>>0]=+(V!=le&&Se==$):0<I!=(Se==$)&&(V=Math.max(le,V),E.setTime(E.getTime()+6e4*((0<I?Se:V)-$))),n()[h+24>>>2>>>0]=E.getDay(),I=(qr(E.getFullYear())?zs:Gs)[E.getMonth()]+E.getDate()-1|0,n()[h+28>>>2>>>0]=I,n()[h>>>2>>>0]=E.getSeconds(),n()[h+4>>>2>>>0]=E.getMinutes(),n()[h+8>>>2>>>0]=E.getHours(),n()[h+12>>>2>>>0]=E.getDate(),n()[h+16>>>2>>>0]=E.getMonth(),n()[h+20>>>2>>>0]=E.getYear(),h=E.getTime(),BigInt(isNaN(h)?-1:h/1e3)}function Vs(h,E,I,$,V,le,Se){return d?X(16,1,h,E,I,$,V,le,Se):-52}function Ks(h,E,I,$,V,le){if(d)return X(17,1,h,E,I,$,V,le)}function pm(h,E,I,$){h>>>=0,E>>>=0,I>>>=0,$>>>=0;var V=new Date().getFullYear(),le=new Date(V,0,1),Se=new Date(V,6,1);V=le.getTimezoneOffset();var ut=Se.getTimezoneOffset(),Ct=Math.max(V,ut);l()[h>>>2>>>0]=60*Ct,n()[E>>>2>>>0]=+(V!=ut),le=(h=kt=>kt.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(le),Se=h(Se),ut<V?(fr(le,I,17),fr(Se,$,17)):(fr(le,$,17),fr(Se,I,17))}var ri=[];function dm(h,E,I){h>>>=0,E>>>=0,I>>>=0,ri.length=0;for(var $;$=o()[E++>>>0];){var V=$!=105;I+=(V&=$!=112)&&I%8?4:0,ri.push($==112?l()[I>>>2>>>0]:$==106?F[I>>>3]:$==105?n()[I>>>2>>>0]:u()[I>>>3>>>0]),I+=V?8:4}return _e[h](...ri)}var fm=()=>{},hm=()=>Date.now();function gm(h,E){return k(ar(h>>>0,E>>>0))}var Hs,mm=()=>{throw te+=1,"unwind"};function bm(){return 4294901760}Hs=()=>performance.timeOrigin+performance.now();var ym=()=>navigator.hardwareConcurrency;function vm(){return P("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function xm(h){h>>>=0;var E=o().length;if(h<=E||4294901760<h)return!1;for(var I=1;4>=I;I*=2){var $=E*(1+.2/I);$=Math.min($,h+100663296);var V=Math;$=Math.max(h,$);e:{V=(V.min.call(V,4294901760,$+(65536-$%65536)%65536)-ue.buffer.byteLength+65535)/65536;try{ue.grow(V),T();var le=1;break e}catch{}le=void 0}if(le)return!0}return!1}var fo=()=>(P("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),zr={},Ws=h=>{h.forEach(E=>{var I=fo();I&&(zr[I]=E)})};function wm(){var h=Error().stack.toString().split(`
`);return h[0]=="Error"&&h.shift(),Ws(h),zr.$a=fo(),zr.bb=h,zr.$a}function Tm(h,E,I){if(h>>>=0,E>>>=0,zr.$a==h)var $=zr.bb;else($=Error().stack.toString().split(`
`))[0]=="Error"&&$.shift(),Ws($);for(var V=3;$[V]&&fo()!=h;)++V;for(h=0;h<I&&$[h+V];++h)n()[E+4*h>>>2>>>0]=fo();return h}var ni,oi={},Xs=()=>{if(!ni){var h,E={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:m||"./this.program"};for(h in oi)oi[h]===void 0?delete E[h]:E[h]=oi[h];var I=[];for(h in E)I.push(`${h}=${E[h]}`);ni=I}return ni};function Ys(h,E){if(d)return X(18,1,h,E);h>>>=0,E>>>=0;var I=0;return Xs().forEach(($,V)=>{var le=E+I;for(V=l()[h+4*V>>>2>>>0]=le,le=0;le<$.length;++le)r()[V++>>>0]=$.charCodeAt(le);r()[V>>>0]=0,I+=$.length+1}),0}function Js(h,E){if(d)return X(19,1,h,E);h>>>=0,E>>>=0;var I=Xs();l()[h>>>2>>>0]=I.length;var $=0;return I.forEach(V=>$+=V.length+1),l()[E>>>2>>>0]=$,0}function Zs(h){return d?X(20,1,h):52}function Qs(h,E,I,$){return d?X(21,1,h,E,I,$):52}function eu(h,E,I,$){return d?X(22,1,h,E,I,$):70}var Am=[null,[],[]];function tu(h,E,I,$){if(d)return X(23,1,h,E,I,$);E>>>=0,I>>>=0,$>>>=0;for(var V=0,le=0;le<I;le++){var Se=l()[E>>>2>>>0],ut=l()[E+4>>>2>>>0];E+=8;for(var Ct=0;Ct<ut;Ct++){var kt=o()[Se+Ct>>>0],$t=Am[h];kt===0||kt===10?((h===1?N:k)(dt($t,0)),$t.length=0):$t.push(kt)}V+=ut}return l()[$>>>2>>>0]=V,0}var ru=[31,29,31,30,31,30,31,31,30,31,30,31],nu=[31,28,31,30,31,30,31,31,30,31,30,31],_m=(h,E)=>{r().set(h,E>>>0)};function ou(h,E,I,$){function V(ee,Xe,vt){for(ee=typeof ee=="number"?ee.toString():ee||"";ee.length<Xe;)ee=vt[0]+ee;return ee}function le(ee,Xe){return V(ee,Xe,"0")}function Se(ee,Xe){function vt(du){return 0>du?-1:0<du?1:0}var Cr;return(Cr=vt(ee.getFullYear()-Xe.getFullYear()))===0&&(Cr=vt(ee.getMonth()-Xe.getMonth()))===0&&(Cr=vt(ee.getDate()-Xe.getDate())),Cr}function ut(ee){switch(ee.getDay()){case 0:return new Date(ee.getFullYear()-1,11,29);case 1:return ee;case 2:return new Date(ee.getFullYear(),0,3);case 3:return new Date(ee.getFullYear(),0,2);case 4:return new Date(ee.getFullYear(),0,1);case 5:return new Date(ee.getFullYear()-1,11,31);case 6:return new Date(ee.getFullYear()-1,11,30)}}function Ct(ee){var Xe=ee.Sa;for(ee=new Date(new Date(ee.Ta+1900,0,1).getTime());0<Xe;){var vt=ee.getMonth(),Cr=(qr(ee.getFullYear())?ru:nu)[vt];if(!(Xe>Cr-ee.getDate())){ee.setDate(ee.getDate()+Xe);break}Xe-=Cr-ee.getDate()+1,ee.setDate(1),11>vt?ee.setMonth(vt+1):(ee.setMonth(0),ee.setFullYear(ee.getFullYear()+1))}return vt=new Date(ee.getFullYear()+1,0,4),Xe=ut(new Date(ee.getFullYear(),0,4)),vt=ut(vt),0>=Se(Xe,ee)?0>=Se(vt,ee)?ee.getFullYear()+1:ee.getFullYear():ee.getFullYear()-1}h>>>=0,E>>>=0,I>>>=0,$>>>=0;var kt=l()[$+40>>>2>>>0];for(var $t in $={gb:n()[$>>>2>>>0],fb:n()[$+4>>>2>>>0],Va:n()[$+8>>>2>>>0],Ya:n()[$+12>>>2>>>0],Wa:n()[$+16>>>2>>>0],Ta:n()[$+20>>>2>>>0],Qa:n()[$+24>>>2>>>0],Sa:n()[$+28>>>2>>>0],ob:n()[$+32>>>2>>>0],eb:n()[$+36>>>2>>>0],hb:kt?ar(kt):""},I=ar(I),kt={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})I=I.replace(new RegExp($t,"g"),kt[$t]);var cu="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),pu="January February March April May June July August September October November December".split(" ");for($t in kt={"%a":ee=>cu[ee.Qa].substring(0,3),"%A":ee=>cu[ee.Qa],"%b":ee=>pu[ee.Wa].substring(0,3),"%B":ee=>pu[ee.Wa],"%C":ee=>le((ee.Ta+1900)/100|0,2),"%d":ee=>le(ee.Ya,2),"%e":ee=>V(ee.Ya,2," "),"%g":ee=>Ct(ee).toString().substring(2),"%G":Ct,"%H":ee=>le(ee.Va,2),"%I":ee=>((ee=ee.Va)==0?ee=12:12<ee&&(ee-=12),le(ee,2)),"%j":ee=>{for(var Xe=0,vt=0;vt<=ee.Wa-1;Xe+=(qr(ee.Ta+1900)?ru:nu)[vt++]);return le(ee.Ya+Xe,3)},"%m":ee=>le(ee.Wa+1,2),"%M":ee=>le(ee.fb,2),"%n":()=>`
`,"%p":ee=>0<=ee.Va&&12>ee.Va?"AM":"PM","%S":ee=>le(ee.gb,2),"%t":()=>"	","%u":ee=>ee.Qa||7,"%U":ee=>le(Math.floor((ee.Sa+7-ee.Qa)/7),2),"%V":ee=>{var Xe=Math.floor((ee.Sa+7-(ee.Qa+6)%7)/7);if(2>=(ee.Qa+371-ee.Sa-2)%7&&Xe++,Xe)Xe==53&&((vt=(ee.Qa+371-ee.Sa)%7)==4||vt==3&&qr(ee.Ta)||(Xe=1));else{Xe=52;var vt=(ee.Qa+7-ee.Sa-1)%7;(vt==4||vt==5&&qr(ee.Ta%400-1))&&Xe++}return le(Xe,2)},"%w":ee=>ee.Qa,"%W":ee=>le(Math.floor((ee.Sa+7-(ee.Qa+6)%7)/7),2),"%y":ee=>(ee.Ta+1900).toString().substring(2),"%Y":ee=>ee.Ta+1900,"%z":ee=>{var Xe=0<=(ee=ee.eb);return ee=Math.abs(ee)/60,(Xe?"+":"-")+("0000"+(ee/60*100+ee%60)).slice(-4)},"%Z":ee=>ee.hb,"%%":()=>"%"},I=I.replace(/%%/g,"\0\0"),kt)I.includes($t)&&(I=I.replace(new RegExp($t,"g"),kt[$t]($)));return $t=function(ee){var Xe=Array(uo(ee)+1);return dr(ee,Xe,0,Xe.length),Xe}(I=I.replace(/\0\0/g,"%")),$t.length>E?0:(_m($t,h),$t.length-1)}function Em(h,E,I,$){return ou(h>>>0,E>>>0,I>>>0,$>>>0)}d||function(){for(var h=a.numThreads-1;h--;)Lt();_.unshift(()=>{x++,function(E){d?E():Promise.all(Ce.map(ct)).then(E)}(()=>A())})}();var Dm=[ce,Pe,lt,Bt,Ur,hn,gn,lo,Pr,Ht,mn,bn,yn,vn,co,O,Vs,Ks,Ys,Js,Zs,Qs,eu,tu],Oe=function(){function h(I,$){return Oe=I.exports,Oe=function(){var V=Oe,le=ut=>()=>ut()>>>0,Se=ut=>Ct=>ut(Ct)>>>0;return(V=Object.assign({},V)).Ba=le(V.Ba),V.Ca=Se(V.Ca),V.emscripten_main_runtime_thread_id=le(V.emscripten_main_runtime_thread_id),V.Oa=Se(V.Oa),V.Pa=le(V.Pa),V}(),ze.push(Oe.Ea),pt=Oe.Fa,L.unshift(Oe.$),se=$,A(),Oe}var E=ye();if(x++,a.instantiateWasm)try{return a.instantiateWasm(E,h)}catch(I){k(`Module.instantiateWasm callback failed with error: ${I}`),i(I)}return B||(B=a.locateFile?G("ort-wasm-simd-threaded.wasm")?"ort-wasm-simd-threaded.wasm":a.locateFile?a.locateFile("ort-wasm-simd-threaded.wasm",C):C+"ort-wasm-simd-threaded.wasm":new URL("ort-wasm-simd-threaded.wasm",Uo.url).href),function(I,$){var V=B;return M||typeof WebAssembly.instantiateStreaming!="function"||G(V)||ne(V)||typeof fetch!="function"?fe(V,I,$):fetch(V,{credentials:"same-origin"}).then(le=>WebAssembly.instantiateStreaming(le,I).then($,function(Se){return k(`wasm streaming compile failed: ${Se}`),k("falling back to ArrayBuffer instantiation"),fe(V,I,$)}))}(E,function(I){h(I.instance,I.module)}).catch(i),{}}();a._OrtInit=(h,E)=>(a._OrtInit=Oe.aa)(h,E),a._OrtGetLastError=(h,E)=>(a._OrtGetLastError=Oe.ba)(h,E),a._OrtCreateSessionOptions=(h,E,I,$,V,le,Se,ut,Ct,kt)=>(a._OrtCreateSessionOptions=Oe.ca)(h,E,I,$,V,le,Se,ut,Ct,kt),a._OrtAppendExecutionProvider=(h,E)=>(a._OrtAppendExecutionProvider=Oe.da)(h,E),a._OrtAddFreeDimensionOverride=(h,E,I)=>(a._OrtAddFreeDimensionOverride=Oe.ea)(h,E,I),a._OrtAddSessionConfigEntry=(h,E,I)=>(a._OrtAddSessionConfigEntry=Oe.fa)(h,E,I),a._OrtReleaseSessionOptions=h=>(a._OrtReleaseSessionOptions=Oe.ga)(h),a._OrtCreateSession=(h,E,I)=>(a._OrtCreateSession=Oe.ha)(h,E,I),a._OrtReleaseSession=h=>(a._OrtReleaseSession=Oe.ia)(h),a._OrtGetInputOutputCount=(h,E,I)=>(a._OrtGetInputOutputCount=Oe.ja)(h,E,I),a._OrtGetInputName=(h,E)=>(a._OrtGetInputName=Oe.ka)(h,E),a._OrtGetOutputName=(h,E)=>(a._OrtGetOutputName=Oe.la)(h,E),a._OrtFree=h=>(a._OrtFree=Oe.ma)(h),a._OrtCreateTensor=(h,E,I,$,V,le)=>(a._OrtCreateTensor=Oe.na)(h,E,I,$,V,le),a._OrtGetTensorData=(h,E,I,$,V)=>(a._OrtGetTensorData=Oe.oa)(h,E,I,$,V),a._OrtReleaseTensor=h=>(a._OrtReleaseTensor=Oe.pa)(h),a._OrtCreateRunOptions=(h,E,I,$)=>(a._OrtCreateRunOptions=Oe.qa)(h,E,I,$),a._OrtAddRunConfigEntry=(h,E,I)=>(a._OrtAddRunConfigEntry=Oe.ra)(h,E,I),a._OrtReleaseRunOptions=h=>(a._OrtReleaseRunOptions=Oe.sa)(h),a._OrtCreateBinding=h=>(a._OrtCreateBinding=Oe.ta)(h),a._OrtBindInput=(h,E,I)=>(a._OrtBindInput=Oe.ua)(h,E,I),a._OrtBindOutput=(h,E,I,$)=>(a._OrtBindOutput=Oe.va)(h,E,I,$),a._OrtClearBoundOutputs=h=>(a._OrtClearBoundOutputs=Oe.wa)(h),a._OrtReleaseBinding=h=>(a._OrtReleaseBinding=Oe.xa)(h),a._OrtRunWithBinding=(h,E,I,$,V)=>(a._OrtRunWithBinding=Oe.ya)(h,E,I,$,V),a._OrtRun=(h,E,I,$,V,le,Se,ut)=>(a._OrtRun=Oe.za)(h,E,I,$,V,le,Se,ut),a._OrtEndProfiling=h=>(a._OrtEndProfiling=Oe.Aa)(h);var Gr=()=>(Gr=Oe.Ba)();a._malloc=h=>(a._malloc=Oe.Ca)(h),a._free=h=>(a._free=Oe.Da)(h);var ho,ii=(h,E,I,$,V,le)=>(ii=Oe.Ga)(h,E,I,$,V,le),iu=()=>(iu=Oe.Ha)(),au=(h,E,I,$,V)=>(au=Oe.Ia)(h,E,I,$,V),ai=h=>(ai=Oe.Ja)(h),go=h=>(go=Oe.Ka)(h),su=()=>(su=Oe.La)(),uu=(h,E)=>(uu=Oe.Ma)(h,E),mo=h=>(mo=Oe.Na)(h),si=h=>(si=Oe.Oa)(h),ui=()=>(ui=Oe.Pa)();function lu(){0<x||(d?(p(a),d||at(L),startWorker(a)):(at(_),0<x||ho||(ho=!0,a.calledRun=!0,R||(d||at(L),p(a),d||at(w)))))}return a.___start_em_js=838360,a.___stop_em_js=838421,a.stackSave=()=>ui(),a.stackRestore=h=>mo(h),a.stackAlloc=h=>si(h),a.UTF8ToString=ar,a.stringToUTF8=fr,a.lengthBytesUTF8=uo,D=function h(){ho||lu(),ho||(D=h)},lu(),t}),wg=_a,globalThis.self?.name==="em-pthread"&&_a()}),en,qp,zp,Gp,Ea,Tg,Vp,Ag,Qo=re(()=>{"use strict";Ds(),en=Uo.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),qp=typeof location>"u"?void 0:location.origin,zp=(e,r)=>{try{let o=r??en;return(o?new URL(e,o):new URL(e)).origin===qp}catch{return!1}},Gp=async e=>{let r=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},Ea=(h1(),qo(yg)).default,Tg=async()=>{if(!en)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(zp(en))return[void 0,Ea()];let e=await Gp(en);return[e,Ea(e)]},Vp=(g1(),qo(xg)).default,Ag=async(e,r,o)=>[void 0,Vp]}),Da,Ro,Bn,Sa,Kp,Hp,Ss,It,pn=re(()=>{"use strict";Qo(),Ro=!1,Bn=!1,Sa=!1,Kp=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Hp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ss=async e=>{if(Ro)return Promise.resolve();if(Bn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Sa)throw new Error("previous call to 'initializeWebAssembly()' failed.");Bn=!0;let r=e.initTimeout,o=e.numThreads;if(!Hp())throw new Error("WebAssembly SIMD is not supported in the current environment.");let n=Kp();o>1&&!n&&(typeof self<"u"&&self.crossOriginIsolated,e.numThreads=o=1);let l=e.wasmPaths,u=typeof l=="string"?l:void 0,p=l?.mjs,i=p?.href??p,a=l?.wasm,t=a?.href??a,c=e.wasmBinary,[s,d]=await Ag(i,u,o>1),f=!1,g=[];if(r>0&&g.push(new Promise(b=>{setTimeout(()=>{f=!0,b()},r)})),g.push(new Promise((b,y)=>{let m={numThreads:o};c?m.wasmBinary=c:(t||u)&&(m.locateFile=(v,C)=>t??(u??C)+v),d(m).then(v=>{Bn=!1,Ro=!0,Da=v,b(),s&&URL.revokeObjectURL(s)},v=>{Bn=!1,Sa=!0,y(v)})})),await Promise.race(g),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},It=()=>{if(Ro&&Da)return Da;throw new Error("WebAssembly is not initialized yet.")}}),Dt,Ho,At,Ps=re(()=>{"use strict";pn(),Dt=(e,r)=>{let o=It(),n=o.lengthBytesUTF8(e)+1,l=o._malloc(n);return o.stringToUTF8(e,l,n),r.push(l),l},Ho=(e,r,o,n)=>{if(typeof e=="object"&&e!==null){if(o.has(e))throw new Error("Circular reference in options");o.add(e)}Object.entries(e).forEach(([l,u])=>{let p=r?r+l:l;if(typeof u=="object")Ho(u,p+".",o,n);else if(typeof u=="string"||typeof u=="number")n(p,u.toString());else if(typeof u=="boolean")n(p,u?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof u}`)})},At=e=>{let r=It(),o=r.stackSave();try{let n=r.stackAlloc(8);r._OrtGetLastError(n,n+4);let l=r.HEAP32[n/4],u=r.HEAPU32[n/4+1],p=u?r.UTF8ToString(u):"";throw new Error(`${e} ERROR_CODE: ${l}, ERROR_MESSAGE: ${p}`)}finally{r.stackRestore(o)}}}),_g,m1=re(()=>{"use strict";pn(),Ps(),_g=e=>{let r=It(),o=0,n=[],l=e||{};try{if(e?.logSeverityLevel===void 0)l.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)l.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(l.terminate=!1);let u=0;return e?.tag!==void 0&&(u=Dt(e.tag,n)),o=r._OrtCreateRunOptions(l.logSeverityLevel,l.logVerbosityLevel,!!l.terminate,u),o===0&&At("Can't create run options."),e?.extra!==void 0&&Ho(e.extra,"",new WeakSet,(p,i)=>{let a=Dt(p,n),t=Dt(i,n);r._OrtAddRunConfigEntry(o,a,t)!==0&&At(`Can't set a run config entry: ${p} - ${i}.`)}),[o,n]}catch(u){throw o!==0&&r._OrtReleaseRunOptions(o),n.forEach(p=>r._free(p)),u}}}),Wp,Xp,Yp,Jp,Eg,b1=re(()=>{"use strict";pn(),Ps(),Wp=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Xp=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Yp=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let r=e.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(o=>(typeof o=="string"?o:o.name)==="webgpu")&&(e.enableMemPattern=!1)},Jp=(e,r,o)=>{for(let n of r){let l=typeof n=="string"?n:n.name;switch(l){case"webnn":if(l="WEBNN",typeof n!="string"){let p=n?.deviceType;if(p){let i=Dt("deviceType",o),a=Dt(p,o);It()._OrtAddSessionConfigEntry(e,i,a)!==0&&At(`Can't set a session config entry: 'deviceType' - ${p}.`)}}break;case"webgpu":if(l="JS",typeof n!="string"){let p=n;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);let i=Dt("preferredLayout",o),a=Dt(p.preferredLayout,o);It()._OrtAddSessionConfigEntry(e,i,a)!==0&&At(`Can't set a session config entry: 'preferredLayout' - ${p.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${l}`)}let u=Dt(l,o);It()._OrtAppendExecutionProvider(e,u)!==0&&At(`Can't append execution provider: ${l}.`)}},Eg=e=>{let r=It(),o=0,n=[],l=e||{};Yp(l);try{let u=Wp(l.graphOptimizationLevel??"all"),p=Xp(l.executionMode??"sequential"),i=typeof l.logId=="string"?Dt(l.logId,n):0,a=l.logSeverityLevel??2;if(!Number.isInteger(a)||a<0||a>4)throw new Error(`log serverity level is not valid: ${a}`);let t=l.logVerbosityLevel??0;if(!Number.isInteger(t)||t<0||t>4)throw new Error(`log verbosity level is not valid: ${t}`);let c=typeof l.optimizedModelFilePath=="string"?Dt(l.optimizedModelFilePath,n):0;if(o=r._OrtCreateSessionOptions(u,!!l.enableCpuMemArena,!!l.enableMemPattern,p,!!l.enableProfiling,0,i,a,t,c),o===0&&At("Can't create session options."),l.executionProviders&&Jp(o,l.executionProviders,n),l.enableGraphCapture!==void 0){if(typeof l.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${l.enableGraphCapture}`);let s=Dt("enableGraphCapture",n),d=Dt(l.enableGraphCapture.toString(),n);r._OrtAddSessionConfigEntry(o,s,d)!==0&&At(`Can't set a session config entry: 'enableGraphCapture' - ${l.enableGraphCapture}.`)}if(l.freeDimensionOverrides)for(let[s,d]of Object.entries(l.freeDimensionOverrides)){if(typeof s!="string")throw new Error(`free dimension override name must be a string: ${s}`);if(typeof d!="number"||!Number.isInteger(d)||d<0)throw new Error(`free dimension override value must be a non-negative integer: ${d}`);let f=Dt(s,n);r._OrtAddFreeDimensionOverride(o,f,d)!==0&&At(`Can't set a free dimension override: ${s} - ${d}.`)}return l.extra!==void 0&&Ho(l.extra,"",new WeakSet,(s,d)=>{let f=Dt(s,n),g=Dt(d,n);r._OrtAddSessionConfigEntry(o,f,g)!==0&&At(`Can't set a session config entry: ${s} - ${d}.`)}),[o,n]}catch(u){throw o!==0&&r._OrtReleaseSessionOptions(o),n.forEach(p=>r._free(p)),u}}}),Hn,Dg,Wn,Sg,Pg,Cs,Os,Cg,Og=re(()=>{"use strict";Hn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Dg=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Wn=(e,r)=>{let o=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof r=="number"?r:r.reduce((l,u)=>l*u,1);return o>0?Math.ceil(n*o):void 0},Sg=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Pg=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Cs=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Os=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",Cg=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Is,Ig=re(()=>{"use strict";Ds(),Is=async e=>{if(typeof e=="string")if(0)try{}catch(r){}else{let r=await fetch(e);if(!r.ok)throw new Error(`failed to load external data file: ${e}`);let o=r.headers.get("Content-Length"),n=o?parseInt(o,10):0;if(n<1073741824)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let l=r.body.getReader(),u;try{u=new ArrayBuffer(n)}catch(i){if(i instanceof RangeError){let a=Math.ceil(n/65536);u=new WebAssembly.Memory({initial:a,maximum:a}).buffer}else throw i}let p=0;for(;;){let{done:i,value:a}=await l.read();if(i)break;let t=a.byteLength;new Uint8Array(u,p,t).set(a),p+=t}return new Uint8Array(u,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Zp,Fs,Ls,kr,Qp,Wo,ks,Ns,Pa,Rs,Bs,$s,Fg=re(()=>{"use strict";m1(),b1(),Og(),pn(),Ps(),Ig(),Zp=(e,r)=>{It()._OrtInit(e,r)!==0&&At("Can't initialize onnxruntime.")},Fs=async e=>{Zp(e.wasm.numThreads,Pg(e.logLevel))},Ls=async(e,r)=>{},kr=new Map,Qp=e=>{let r=It(),o=r.stackSave();try{let n=r.stackAlloc(8);return r._OrtGetInputOutputCount(e,n,n+4)!==0&&At("Can't get session input/output count."),[r.HEAP32[n/4],r.HEAP32[n/4+1]]}finally{r.stackRestore(o)}},Wo=e=>{let r=It(),o=r._malloc(e.byteLength);if(o===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return r.HEAPU8.set(e,o),[o,e.byteLength]},ks=async(e,r)=>{let o,n,l=It();Array.isArray(e)?[o,n]=e:e.buffer===l.HEAPU8.buffer?[o,n]=[e.byteOffset,e.byteLength]:[o,n]=Wo(e);let u=0,p=0,i=0,a=[],t=[],c=[];try{if([p,a]=Eg(r),r?.externalData&&l.mountExternalData){let m=[];for(let v of r.externalData){let C=typeof v=="string"?v:v.path;m.push(Is(typeof v=="string"?v:v.data).then(M=>{l.mountExternalData(C,M)}))}await Promise.all(m)}for(let m of r?.executionProviders??[])if((typeof m=="string"?m:m.name)==="webnn"){if(l.shouldTransferToMLTensor=!1,l.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof m!="string"){let v=m,C=v?.context,M=v?.gpuDevice,q=v?.deviceType,Z=v?.numThreads,N=v?.powerPreference;C?l.currentContext=C:M?l.currentContext=await navigator.ml.createContext(M):l.currentContext=await navigator.ml.createContext({deviceType:q,numThreads:Z,powerPreference:N})}else l.currentContext=await navigator.ml.createContext();break}u=await l._OrtCreateSession(o,n,p),u===0&&At("Can't create a session."),l.currentContext&&(l.jsepRegisterMLContext(u,l.currentContext),l.currentContext=void 0,l.shouldTransferToMLTensor=!0);let[s,d]=Qp(u),f=!!r?.enableGraphCapture,g=[],b=[],y=[];for(let m=0;m<s;m++){let v=l._OrtGetInputName(u,m);v===0&&At("Can't get an input name."),t.push(v),g.push(l.UTF8ToString(v))}for(let m=0;m<d;m++){let v=l._OrtGetOutputName(u,m);v===0&&At("Can't get an output name."),c.push(v);let C=l.UTF8ToString(v);b.push(C)}return kr.set(u,[u,t,c,null,f,!1]),[u,g,b]}catch(s){throw t.forEach(d=>l._OrtFree(d)),c.forEach(d=>l._OrtFree(d)),i!==0&&l._OrtReleaseBinding(i),u!==0&&l._OrtReleaseSession(u),s}finally{l._free(o),p!==0&&l._OrtReleaseSessionOptions(p),a.forEach(s=>l._free(s)),l.unmountExternalData?.()}},Ns=e=>{let r=It(),o=kr.get(e);if(!o)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,l,u,p,i]=o;p&&(i&&r._OrtClearBoundOutputs(p.handle),r._OrtReleaseBinding(p.handle)),r.jsepOnReleaseSession?.(e),l.forEach(a=>r._OrtFree(a)),u.forEach(a=>r._OrtFree(a)),r._OrtReleaseSession(n),kr.delete(e)},Pa=(e,r,o,n,l,u=!1)=>{if(!e){r.push(0);return}let p=It(),i=e[0],a=e[1],t=e[3],c,s;if(i==="string"&&(t==="gpu-buffer"||t==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(u&&t!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${l} when enableGraphCapture is true.`);if(t==="gpu-buffer"){let g=e[2].gpuBuffer;s=Wn(Hn(i),a);let b=p.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');c=b(n,l,g,s)}else if(t==="ml-tensor"){let g=e[2].mlTensor;s=Wn(Hn(i),a);let b=p.jsepRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');c=b(g,Hn(i),a)}else{let g=e[2];if(Array.isArray(g)){s=4*g.length,c=p._malloc(s),o.push(c);let b=c/4;for(let y=0;y<g.length;y++){if(typeof g[y]!="string")throw new TypeError(`tensor data at index ${y} is not a string`);p.HEAPU32[b++]=Dt(g[y],o)}}else s=g.byteLength,c=p._malloc(s),o.push(c),p.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,s),c)}let d=p.stackSave(),f=p.stackAlloc(4*a.length);try{let g=f/4;a.forEach(y=>p.HEAP32[g++]=y);let b=p._OrtCreateTensor(Hn(i),c,s,f,a.length,Cg(t));b===0&&At(`Can't create tensor for input/output. session=${n}, index=${l}.`),r.push(b)}finally{p.stackRestore(d)}},Rs=async(e,r,o,n,l,u)=>{let p=It(),i=kr.get(e);if(!i)throw new Error(`cannot run inference. invalid session id: ${e}`);let a=i[0],t=i[1],c=i[2],s=i[3],d=i[4],f=i[5],g=r.length,b=n.length,y=0,m=[],v=[],C=[],M=[],q=p.stackSave(),Z=p.stackAlloc(g*4),N=p.stackAlloc(g*4),k=p.stackAlloc(b*4),z=p.stackAlloc(b*4);try{p.jsepOnRunStart?.(a),[y,m]=_g(u);for(let H=0;H<g;H++)Pa(o[H],v,M,e,r[H],d);for(let H=0;H<b;H++)Pa(l[H],C,M,e,g+n[H],d);let J=Z/4,oe=N/4,ue=k/4,se=z/4;for(let H=0;H<g;H++)p.HEAPU32[J++]=v[H],p.HEAPU32[oe++]=t[r[H]];for(let H=0;H<b;H++)p.HEAPU32[ue++]=C[H],p.HEAPU32[se++]=c[n[H]];let W;W=await p._OrtRun(a,N,Z,g,z,b,k,y),W!==0&&At("failed to call OrtRun().");let K=[];for(let H=0;H<b;H++){let ie=p.HEAPU32[k/4+H];if(ie===C[H]){K.push(l[H]);continue}let ae=p.stackSave(),F=p.stackAlloc(4*4),U=!1,R,T=0;try{p._OrtGetTensorData(ie,F,F+4,F+8,F+12)!==0&&At(`Can't access output tensor data on index ${H}.`);let _=F/4,L=p.HEAPU32[_++];T=p.HEAPU32[_++];let w=p.HEAPU32[_++],x=p.HEAPU32[_++],S=[];for(let P=0;P<x;P++)S.push(p.HEAPU32[w/4+P]);p._OrtFree(w);let D=S.reduce((P,B)=>P*B,1);R=Dg(L);let A=s?.outputPreferredLocations[n[H]];if(R==="string"){if(A==="gpu-buffer"||A==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let P=[],B=T/4;for(let G=0;G<D;G++){let ne=p.HEAPU32[B++],Q=G===D-1?void 0:p.HEAPU32[B]-ne;P.push(p.UTF8ToString(ne,Q))}K.push([R,S,P,"cpu"])}else if(A==="gpu-buffer"&&D>0){let P=p.jsepGetBuffer;if(!P)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let B=P(T),G=Wn(L,D);if(G===void 0||!Cs(R))throw new Error(`Unsupported data type: ${R}`);U=!0,K.push([R,S,{gpuBuffer:B,download:p.jsepCreateDownloader(B,G,R),dispose:()=>{p._OrtReleaseTensor(ie)}},"gpu-buffer"])}else if(A==="ml-tensor"&&D>0){let P=p.jsepEnsureTensor;if(!P)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Wn(L,D)===void 0||!Os(R))throw new Error(`Unsupported data type: ${R}`);let B=await P(T,L,S,!1);U=!0,K.push([R,S,{mlTensor:B,download:p.jsepCreateMLTensorDownloader(T,R),dispose:()=>{p.jsepReleaseTensorId(T),p._OrtReleaseTensor(ie)}},"ml-tensor"])}else{let P=Sg(R),B=new P(D);new Uint8Array(B.buffer,B.byteOffset,B.byteLength).set(p.HEAPU8.subarray(T,T+B.byteLength)),K.push([R,S,B,"cpu"])}}finally{p.stackRestore(ae),R==="string"&&T&&p._free(T),U||p._OrtReleaseTensor(ie)}}return s&&!d&&(p._OrtClearBoundOutputs(s.handle),kr.set(e,[a,t,c,s,d,!1])),K}finally{p.stackRestore(q),v.forEach(J=>p._OrtReleaseTensor(J)),C.forEach(J=>p._OrtReleaseTensor(J)),M.forEach(J=>p._free(J)),y!==0&&p._OrtReleaseRunOptions(y),m.forEach(J=>p._free(J))}},Bs=e=>{let r=It(),o=kr.get(e);if(!o)throw new Error("invalid session id");let n=o[0],l=r._OrtEndProfiling(n);l===0&&At("Can't get an profile file name."),r._OrtFree(l)},$s=e=>{let r=[];for(let o of e){let n=o[2];!Array.isArray(n)&&"buffer"in n&&r.push(n.buffer)}return r}}),wr,Yt,Qr,$n,Mn,Bo,Ca,$o,Nr,Rr,ed,Lg,kg,Ng,Rg,Bg,$g,Mg,jg=re(()=>{"use strict";pr(),Fg(),pn(),Qo(),wr=()=>!!qe.wasm.proxy&&typeof document<"u",Qr=!1,$n=!1,Mn=!1,$o=new Map,Nr=(e,r)=>{let o=$o.get(e);o?o.push(r):$o.set(e,[r])},Rr=()=>{if(Qr||!$n||Mn||!Yt)throw new Error("worker not ready")},ed=e=>{switch(e.data.type){case"init-wasm":Qr=!1,e.data.err?(Mn=!0,Ca[1](e.data.err)):($n=!0,Ca[0]()),Bo&&(URL.revokeObjectURL(Bo),Bo=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=$o.get(e.data.type);e.data.err?r.shift()[1](e.data.err):r.shift()[0](e.data.out);break}default:}},Lg=async()=>{if(!$n){if(Qr)throw new Error("multiple calls to 'initWasm()' detected.");if(Mn)throw new Error("previous call to 'initWasm()' failed.");if(Qr=!0,wr())return new Promise((e,r)=>{Yt?.terminate(),Tg().then(([o,n])=>{try{Yt=n,Yt.onerror=u=>r(u),Yt.onmessage=ed,Ca=[e,r];let l={type:"init-wasm",in:qe};Yt.postMessage(l),Bo=o}catch(l){r(l)}},r)});try{await Ss(qe.wasm),await Fs(qe),$n=!0}catch(e){throw Mn=!0,e}finally{Qr=!1}}},kg=async e=>{if(wr())return Rr(),new Promise((r,o)=>{Nr("init-ep",[r,o]);let n={type:"init-ep",in:{epName:e,env:qe}};Yt.postMessage(n)});await Ls(qe,e)},Ng=async e=>wr()?(Rr(),new Promise((r,o)=>{Nr("copy-from",[r,o]);let n={type:"copy-from",in:{buffer:e}};Yt.postMessage(n,[e.buffer])})):Wo(e),Rg=async(e,r)=>{if(wr()){if(r?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Rr(),new Promise((o,n)=>{Nr("create",[o,n]);let l={type:"create",in:{model:e,options:{...r}}},u=[];e instanceof Uint8Array&&u.push(e.buffer),Yt.postMessage(l,u)})}else return ks(e,r)},Bg=async e=>{if(wr())return Rr(),new Promise((r,o)=>{Nr("release",[r,o]);let n={type:"release",in:e};Yt.postMessage(n)});Ns(e)},$g=async(e,r,o,n,l,u)=>{if(wr()){if(o.some(p=>p[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(l.some(p=>p))throw new Error("pre-allocated output tensor is not supported for proxy.");return Rr(),new Promise((p,i)=>{Nr("run",[p,i]);let a=o,t={type:"run",in:{sessionId:e,inputIndices:r,inputs:a,outputIndices:n,options:u}};Yt.postMessage(t,$s(a))})}else return Rs(e,r,o,n,l,u)},Mg=async e=>{if(wr())return Rr(),new Promise((r,o)=>{Nr("end-profiling",[r,o]);let n={type:"end-profiling",in:e};Yt.postMessage(n)});Bs(e)}}),Oa,td,Ug,y1=re(()=>{"use strict";pr(),jg(),Og(),Ds(),Ig(),Oa=(e,r)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${r()}`)}},td=e=>{switch(e[3]){case"cpu":return new Ft(e[0],e[2],e[1]);case"gpu-buffer":{let r=e[0];if(!Cs(r))throw new Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:o,download:n,dispose:l}=e[2];return Ft.fromGpuBuffer(o,{dataType:r,dims:e[1],download:n,dispose:l})}case"ml-tensor":{let r=e[0];if(!Os(r))throw new Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:o,download:n,dispose:l}=e[2];return Ft.fromMLTensor(o,{dataType:r,dims:e[1],download:n,dispose:l})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ug=class{async fetchModelAndCopyToWasmMemory(e){return Ng(await Is(e))}async loadModel(e,r){nn();let o;typeof e=="string"?o=await this.fetchModelAndCopyToWasmMemory(e):o=e,[this.sessionId,this.inputNames,this.outputNames]=await Rg(o,r),on()}async dispose(){return Bg(this.sessionId)}async run(e,r,o){nn();let n=[],l=[];Object.entries(e).forEach(s=>{let d=s[0],f=s[1],g=this.inputNames.indexOf(d);if(g===-1)throw new Error(`invalid input '${d}'`);n.push(f),l.push(g)});let u=[],p=[];Object.entries(r).forEach(s=>{let d=s[0],f=s[1],g=this.outputNames.indexOf(d);if(g===-1)throw new Error(`invalid output '${d}'`);u.push(f),p.push(g)});let i=n.map((s,d)=>Oa(s,()=>`input "${this.inputNames[l[d]]}"`)),a=u.map((s,d)=>s?Oa(s,()=>`output "${this.outputNames[p[d]]}"`):null),t=await $g(this.sessionId,l,i,p,a,o),c={};for(let s=0;s<t.length;s++)c[this.outputNames[p[s]]]=u[s]??td(t[s]);return on(),c}startProfiling(){}endProfiling(){Mg(this.sessionId)}}}),qg={};no(qg,{OnnxruntimeWebAssemblyBackend:()=>ds,initializeFlags:()=>ps,wasmBackend:()=>zg});var ps,ds,zg,v1=re(()=>{"use strict";pr(),jg(),y1(),Qo(),ps=()=>{if((typeof qe.wasm.initTimeout!="number"||qe.wasm.initTimeout<0)&&(qe.wasm.initTimeout=0),qe.wasm.simd,typeof qe.wasm.proxy!="boolean"&&(qe.wasm.proxy=!1),typeof qe.wasm.trace!="boolean"&&(qe.wasm.trace=!1),typeof qe.wasm.numThreads!="number"||!Number.isInteger(qe.wasm.numThreads)||qe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)qe.wasm.numThreads=1;else{let e=typeof navigator>"u"?w0("node:os").cpus().length:navigator.hardwareConcurrency;qe.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},ds=class{async init(e){ps(),await Lg(),await kg(e)}async createInferenceSessionHandler(e,r){let o=new Ug;return await o.loadModel(e,r),Promise.resolve(o)}},zg=new ds});pr();pr();pr();var x1="1.20.1",dn=Td;{let e=(f1(),qo(mg)).onnxjsBackend;Qn("webgl",e,-10)}{let e=(v1(),qo(qg)).wasmBackend;Qn("cpu",e,10),Qn("wasm",e,10)}Object.defineProperty(qe.versions,"web",{value:x1,enumerable:!0});Y();function Gg(e,r){return new Promise((o,n)=>{let l=new XMLHttpRequest;if(l.open("GET",e,!0),l.responseType="arraybuffer",r){let[u,p]=r;l.onprogress=i=>{let a=i.loaded/i.total*100;p({text:u,progress:a.toFixed(2)})}}l.onload=function(){this.status>=200&&this.status<300?o(l.response):n({status:this.status,statusText:l.statusText}),o(l.response)},l.onerror=function(){n({status:this.status,statusText:l.statusText})},l.send()})}Y();Y();Y();Y();Y();function Vg(){return typeof Deno<"u"}Y();var Kg={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Hg={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Kg,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}},local:{map:new Map,async get(e){return new Promise(r=>{setTimeout(()=>{let o=this.map.get(e);r({[e]:o})},100)})},async set(e,r){return new Promise((o,n)=>{setTimeout(()=>{this.map.set(e,r),o("")},100)})}}},tabs:{onUpdated:Kg,query:()=>{},sendMessage:()=>{}}};var fn;Vg()?fn=Hg:fn=globalThis.immersiveTranslateBrowserAPI;var Xg=Rm(Wg()),js=e=>/[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/.test(e),T1=e=>{let r=[],o="";for(let n=0;n<e.length;n++){let l=e[n];js(l)?(o&&(r.push(o),o=""),r.push(l)):l===" "?o&&(r.push(o),o=""):o+=l}return o&&r.push(o),r},Yg=async(e,r,o,n)=>{let l=new ti,u={ocr:0,translation:0},p=`${Math.max(Math.round(Math.max(e.canvas.width,e.canvas.height)/40),14)}px Arial`;e.font=p,e.textBaseline="top";let i=performance.now(),a=r.map(async f=>{let[g,b,y,m]=f.bounding,v=e.getImageData(g,b,y,m),C=document.createElement("canvas");C.width=y,C.height=m,C.getContext("2d",{willReadFrequently:!0}).putImageData(v,0,0);try{let{data:{text:q}}=await Xg.default.recognize(C,void 0,{workerBlobURL:!1,workerPath:fn.runtime.getURL("tesseract/worker.min.js"),corePath:fn.runtime.getURL("tesseract/tesseract-core-simd-lstm.wasm.js"),cacheMethod:"none"});return{...f,originalText:q.trim().replace(/\s+/g," ")}}catch{return{...f,originalText:""}}}),t=await Promise.all(a);u.ocr=performance.now()-i;let c=t.map(f=>f.originalText).filter(f=>f),s=[];if(c.length>0){let f=performance.now();s=await n(c)||c,u.translation=performance.now()-f}else o=!0;let d=0;return t=t.map(f=>{if(f.originalText){let g=s[d++];return!g||g==f.originalText?f:{...f,translatedText:o?void 0:g}}return f}),t.forEach(f=>{let g=l.get(f.label),[b,y,m,v]=f.bounding,M=e.getImageData(b,y,m,v).data,q=new Map;for(let J=0;J<M.length;J+=4){let oe=Math.round(M[J]/16)*16,ue=Math.round(M[J+1]/16)*16,se=Math.round(M[J+2]/16)*16,W=`rgb(${oe},${ue},${se})`;q.set(W,(q.get(W)||0)+1)}let Z=[...q.entries()].sort((J,oe)=>oe[1]-J[1]).slice(0,2),[N,k]=Z,z=J=>{let oe=J.match(/\d+/g);return(parseInt(oe[0])*299+parseInt(oe[1])*587+parseInt(oe[2])*114)/1e3};if(N&&k){let J=z(N[0]),oe=z(k[0]);Math.abs(J-oe)<50&&(k[0]=J>128?"rgb(0,0,0)":"rgb(255,255,255)")}if(f.dominantColors={primary:N?N[0]:null,secondary:k?k[0]:null},o&&(e.strokeStyle=g,e.lineWidth=Math.max(Math.min(e.canvas.width,e.canvas.height)/200,2.5),e.strokeRect(b,y,m,v),e.fillStyle=ti.hexToRgba(g,.2),e.fillRect(b,y,m,v)),f.translatedText){let K=m*v,H=f.translatedText.length,ie=K/H,ae=Math.sqrt(ie)*.7;for(ae=Math.max(12,Math.min(ae,256)),ae=Math.min(ae,v/2);ae<256;){e.font=`${ae}px Arial`;let F=ae*1.2,U=m-8,R=T1(f.translatedText),T=[],_="",L="",w=!1;R.forEach(D=>{w=_!==""&&!js(L)&&!js(D);let A=_+(w?" ":"")+D;L=D,e.measureText(A).width>U&&_!==""?(T.push(_),_=D):_=A}),_&&T.push(_);let x=T.length*F,S=y+(v-x)/2+8;if(e.fillStyle=f.dominantColors.primary||"#000000",e.fillRect(b,y,m,v),T.forEach((D,A)=>{let P=e.measureText(D).width,B=b+(m-P)/2,G=S+A*F;e.fillStyle=f.dominantColors.secondary||"#ffffff",e.fillText(D,B,G)}),x>=v-8)break;ae+=2}}}),u},ti=class{constructor(){this.palette=["#FF3838","#FF9D97","#FF701F","#FFB21D","#CFD231","#48F90A","#92CC17","#3DDB86","#1A9334","#00D4BB","#2C99A8","#00C2FF","#344593","#6473FF","#0018EC","#8438FF","#520085","#CB38FF","#FF95C8","#FF37C7"],this.n=this.palette.length}get=r=>this.palette[Math.floor(r)%this.n];static hexToRgba=(r,o)=>{var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return n?`rgba(${[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)].join(", ")}, ${o})`:null}};var{Tensor:Us,InferenceSession:K2}=dn,Jg=async(e,r,o,n,l,u,p)=>{let i=r.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,i.canvas.width,i.canvas.height);let a=await Us.fromImage(e,{tensorFormat:"RGB"}),[t,c]=l.slice(2),[s,d]=a.dims.slice(2),f=Math.max(d,s),g=f-d,b=f-s,y=Math.floor(g/2),m=g-y,v=Math.floor(b/2),C=b-v,M=new Us("int64",new BigInt64Array([v,y,C,m].map(H=>BigInt(H)))),q=t/f,Z=c/f,N=Date.now(),k=await Zg(a,M,o,q,Z),{output0:z}=await o.net.run({images:k}),J=Date.now()-N,oe=[];for(let H=0;H<z.dims[2];H++){let ie=z.data[H],ae=z.data[H+z.dims[2]],F=z.data[H+z.dims[2]*2],U=z.data[H+z.dims[2]*3],R=z.data[H+z.dims[2]*4];if(R<n)continue;ie=ie/Z-y,ae=ae/q-v,F=F/Z,U=U/q;let T=Math.round(ie-F/2),_=Math.round(ae-U/2),L=Math.round(F),w=Math.round(U);oe.push({label:0,probability:R,area:L*w,bounding:[Math.max(T,0),Math.max(_,0),L,w]})}function ue(H,ie){let[ae,F,U,R]=H,[T,_,L,w]=ie,x=ae+U,S=F+R,D=T+L,A=_+w,P=Math.max(ae,T),B=Math.max(F,_),G=Math.min(x,D),ne=Math.min(S,A);if(G<P||ne<B)return 0;let Q=(G-P)*(ne-B),fe=U*R,ye=L*w;return Math.abs(Q/ye)>=.9?1:Q/(fe+ye-Q)}function se(H,ie=.45){H.sort((R,T)=>T.area-R.area);let ae=[],F=H.length,U=new Array(F).fill(!1);for(let R=0;R<F;R++)if(!U[R]){ae.push(H[R]),U[R]=!0;for(let T=R+1;T<F;T++){if(U[T])continue;ue(H[R].bounding,H[T].bounding)>ie&&(U[T]=!0)}}return ae}let W=se(oe,.45);i.canvas.width=d,i.canvas.height=s,i.putImageData(await a.toImageData(),0,0);let K=await Yg(i,W,u,p)};async function Zg(e,r,o,n,l){let u=new Us("float32",new Float32Array([n,l])),{letterbox:p}=await o.prep.run({images:e,padding:r,scales:u}),i=p.dims[3];if(i==640)return p;let a=0;return i>640?a=-5e-4:a=5e-4,Zg(e,r,o,n+a,l+a)}Y();Y();Y();Y();Y();var Q2=we+"CacheKey_";Y();Y();Y();var Qg=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],em={ai:!0,name:"Custom AI",homepage:"https://openai.com/api/",allProps:[{name:"name",labelKey:"field.name",placeholderKey:"field.namePlaceholder",required:!0,type:"text"},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",descriptionKey:"description.apiUrl",descriptionLink1:Te+"docs/services/ai/",default:"https://api.openai.com/v1/chat/completions"},{name:"APIKEY",required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"model-select",default:"gpt-3.5-turbo",options:[{label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{label:"gpt-3.5-turbo-1106",value:"gpt-3.5-turbo-1106"},{label:"gpt-3.5-turbo-0125",value:"gpt-3.5-turbo-0125"},{label:"gpt-3.5-turbo-16k",value:"gpt-3.5-turbo-16k"},{label:"gpt-3.5-turbo-instruct",value:"gpt-3.5-turbo-instruct"},{label:"gpt-4",value:"gpt-4"},{label:"gpt-4-0125-preview",value:"gpt-4-0125-preview"},{label:"gpt-4-32k",value:"gpt-4-32k"},{label:"gpt-4-turbo-preview",value:"gpt-4-turbo-preview"},{label:"gpt-4-turbo",value:"gpt-4-turbo"},{label:"gpt-4-vision-preview",value:"gpt-4-vision-preview"},{label:"claude-3-haiku-20240307",value:"claude-3-haiku-20240307"},{label:"claude-3-sonnet-20240229",value:"claude-3-sonnet-20240229"},{label:"claude-3-opus-20240229",value:"claude-3-opus-20240229"},{label:"ERNIE-4.0-8K",value:"ERNIE-4.0-8K"},{label:"ERNIE-3.5-8K",value:"ERNIE-3.5-8K"},{label:"ERNIE-Speed-8K",value:"ERNIE-Speed-8K"},{label:"ERNIE-Speed-128K",value:"ERNIE-Speed-128K"},{label:"chatglm_turbo",value:"chatglm_turbo"},{label:"chatglm_pro",value:"chatglm_pro"},{label:"chatglm_std",value:"chatglm_std"},{label:"chatglm_lite",value:"chatglm_lite"},{label:"glm-4",value:"glm-4"},{label:"glm-4v",value:"glm-4v"},{label:"glm-3-turbo",value:"glm-3-turbo"},{label:"qwen-turbo",value:"qwen-turbo"},{label:"qwen-plus",value:"qwen-plus"},{label:"qwen-max",value:"qwen-max"},{label:"qwen-max-longcontext",value:"qwen-max-longcontext"},{label:"SparkDesk",value:"SparkDesk"},{label:"hunyuan",value:"hunyuan"},{label:"gemini-1.0-pro-002",value:"gemini-1.0-pro-002"},{label:"gemini-1.5-flash-preview-0514",value:"gemini-1.5-flash-preview-0514"},{label:"llama2:7b",value:"llama2:7b"},{label:"llama3:latest",value:"llama3:latest"},{label:"command-r",value:"command-r"},{label:"moonshot-v1-8k",value:"moonshot-v1-8k"},{label:"moonshot-v1-32k",value:"moonshot-v1-32k"},{label:"moonshot-v1-128k",value:"moonshot-v1-128k"},{label:"Baichuan2-Turbo",value:"Baichuan2-Turbo"},{label:"Baichuan2-Turbo-192k",value:"Baichuan2-Turbo-192k"},{label:"llama3-70b-8192",value:"llama3-70b-8192"},{label:"deepseek-chat",value:"deepseek-chat"},{label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",default:5,type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},_1={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},zhipu:{ai:!0,name:"zhipu",homepage:"https://open.bigmodel.cn/",link1:"",link2:"",allProps:[{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!0,type:"model-select",providers:["custom"],options:[{label:"glm-4-flash (free)",value:"glm-4-flash"},{label:"glm-4-air",value:"glm-4-air"},{label:"glm-4-airx",value:"glm-4-airx"},{label:"glm-4",value:"glm-4"},{label:"glm-4-plus",value:"glm-4-plus"},{label:"glm-4-0520",value:"glm-4-0520"},{label:"glm-4-long",value:"glm-4-long"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"APIKEY",required:!0,type:"password",sensitive:!0,descriptionKey:"description.zhipuCustomAPIKey",descriptionLink1:"https://open.bigmodel.cn/",descriptionLink2:Te+"zh-Hans/docs/services/zhipu/"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",placeholder:"ep-20240512123030-kv128",descriptionKey:"description.generalLimitPerSecond",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",default:5,type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:Te+"docs/services/deepL/",link1:"https://www.deepl.com/zh/whydeepl",link2:Te+"pricing/?utm_source=extension&utm_medium=settings&utm_campaign=service_deepl",providers:[{name:"pro",nameKey:"deepLProName",descriptionKey:"deepLProDescription",descriptionKeyForNormal:"deeplProDescriptionForNormal",descriptionLink1:Te+"auth/pricing/?utm_campaign=services"},{name:"custom",nameKey:"deepLCustomName",descriptionKey:"deepLCustomDescription",descriptionLink1:"https://www.deepl.com/translator",descriptionLink2:Te+"docs/services/deepL/"}],allProps:[{name:"authKey",providers:["custom"],label:"Auth Key",required:!0,type:"password",sensitive:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!1}]},openai:{ai:!0,name:"Open AI",homepage:"https://openai.com/api/",docUrl:Te+"docs/services/openai/",link1:"https://readit.plus/a/GKQas/understanding-chatgpt",link2:Te+"pricing/?utm_source=extension&utm_medium=settings&utm_campaign=service_openai",providers:[{name:"pro",nameKey:"openaiProName",descriptionKey:"openaiProDescription",descriptionKeyForNormal:"openaiProDescriptionForNormal",descriptionLink1:Te+"auth/pricing/?utm_campaign=services"},{name:"custom",nameKey:"openaiCustomName",descriptionKey:"openaiCustomDescription",descriptionLink1:Te+"docs/services/openai/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"model-select",default:"gpt-3.5-turbo-1106",providers:["custom"],options:[{providers:["custom","pro"],label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{providers:["custom"],label:"gpt-3.5-turbo-0125",value:"gpt-3.5-turbo-0125"},{providers:["custom","pro"],label:"gpt-3.5-turbo-1106",value:"gpt-3.5-turbo-1106"},{providers:["custom","pro"],label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{providers:["custom"],label:"gpt-4-1106-preview",value:"gpt-4-1106-preview"},{providers:["custom"],label:"gpt-4-0125-preview",value:"gpt-4-0125-preview"},{providers:["custom"],label:"gpt-4o",value:"gpt-4o"},{providers:["custom"],label:"gpt-4o-mini",value:"gpt-4o-mini"},{providers:["custom"],label:"gpt-4-turbo",value:"gpt-4-turbo"},{providers:["custom"],label:"gpt-4",value:"gpt-4"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:Te+"docs/services/openai/",type:"number",default:10,providers:["custom"]},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",descriptionLink1:Te+"docs/services/openai/",optional:!0,providers:["custom"]},{name:"enableAIContext",labelKey:"field.enableAIContext",descriptionKey:"description.enableAIContext",required:!1,type:"boolean",default:!1,optional:!1},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},gemini:{ai:!0,name:"Gemini",homepage:"https://ai.google.dev/aistudio/",docUrl:Te+"docs/services/gemini/",link2:Te+"pricing/?utm_source=extension&utm_medium=settings&utm_campaign=service_gemini",providers:[{name:"pro",nameKey:"serviceProName",descriptionKey:"serviceProDescription",descriptionKeyForNormal:"serviceProDescriptionForNormal",descriptionLink1:Te+"auth/pricing/?utm_campaign=services"},{name:"custom",nameKey:"serviceCustomName",descriptionKey:"geminiCustomDescription",descriptionLink1:"https://ai.google.dev/aistudio/",descriptionLink2:Te+"docs/services/gemini/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"model-select",providers:["custom"],options:[{label:"gemini-1.5-pro-latest",value:"gemini-1.5-pro-latest"},{label:"gemini-1.5-flash",value:"gemini-1.5-flash"},{label:"gemini-2.0-flash-exp",value:"gemini-2.0-flash-exp"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",descriptionLink1:Te+"docs/services/openai/",type:"number",providers:["custom"],default:1},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:3,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}",descriptionKey:"description.apiUrl",descriptionLink1:Te+"docs/services/gemini/",optional:!0,providers:["custom"]},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:"",optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0}]},claude:{ai:!0,name:"Claude",homepage:"https://www.anthropic.com/",docUrl:Te+"docs/services/claude/",link2:Te+"pricing/?utm_source=extension&utm_medium=settings&utm_campaign=service_claude",providers:[{name:"pro",nameKey:"serviceProName",descriptionKey:"serviceProDescription",descriptionKeyForNormal:"serviceProDescriptionForNormal",descriptionLink1:Te+"auth/pricing/?utm_campaign=services"},{name:"custom",nameKey:"serviceCustomName",descriptionKey:"claudeCustomDescription",descriptionLink1:"https://www.anthropic.com/",descriptionLink2:Te+"docs/services/claude/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"model-select",default:"claude-3-haiku-20240307",providers:["custom"],options:[{label:"claude-3-haiku-20240307",value:"claude-3-haiku-20240307"},{label:"claude-3-sonnet-20240229",value:"claude-3-sonnet-20240229"},{label:"claude-3-5-sonnet-20240620",value:"claude-3-5-sonnet-20240620"},{label:"claude-3-opus-20240229",value:"claude-3-opus-20240229"},{label:"claude-2.1",value:"claude-2.1"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",providers:["custom"],descriptionKey:"description.generalLimitPerSecond",descriptionLink1:Te+"docs/services/openai/",type:"number",default:1},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:10,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.anthropic.com/v1/messages",descriptionKey:"description.apiUrl",descriptionLink1:Te+"docs/services/claude/",optional:!0,providers:["custom"]},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:"",optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},"zhipu-pro":{ai:!0,name:"Gemini",homepage:"https://open.bigmodel.cn/",docUrl:"",link2:Te+"pricing/?utm_source=extension&utm_medium=settings&utm_campaign=service_zhipu_pro",providers:[{name:"pro",nameKey:"serviceProName",descriptionKey:"serviceProDescription",descriptionKeyForNormal:"translationServices.proOnly",descriptionLink1:Te+"auth/pricing/?utm_campaign=services"}],allProps:[{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"enableAIContext",labelKey:"field.enableAIContext",descriptionKey:"description.enableAIContext",required:!1,type:"boolean",default:!1,optional:!1},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:"",optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0}]},siliconcloud:{ai:!0,name:"siliconcloud",homepage:"https://cloud.siliconflow.cn/",allProps:[{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!0,type:"model-select",providers:["custom"],default:"Qwen/Qwen2.5-7B-Instruct",options:[{label:"Qwen/Qwen2.5-7B-Instruct",value:"Qwen/Qwen2.5-7B-Instruct"},{label:"meta-llama/Meta-Llama-3.1-8B-Instruct",value:"meta-llama/Meta-Llama-3.1-8B-Instruct"},{label:"THUDM/glm-4-9b-chat",value:"THUDM/glm-4-9b-chat"},{label:"google/gemma-2-9b-it",value:"google/gemma-2-9b-it"},{label:"01-ai/Yi-1.5-9B-Chat-16K",value:"01-ai/Yi-1.5-9B-Chat-16K"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",descriptionLink1:Te+"docs/services/openai/",type:"number",providers:["custom"],default:1},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:3,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"APIKEY",descriptionKey:"description.siliconcloudCustomAPIKey",descriptionLink1:"https://siliconflow.cn/",providers:["custom"],required:!1,type:"password",sensitive:!0,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:"",optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",type:"number",optional:!0,default:5},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},yandex:{name:"Yandex",homepage:"https://translate.yandex.com/"},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},lingyiwanwu:{ai:!0,name:"lingyiwanwu",homepage:"https://platform.lingyiwanwu.com/docs",docUrl:Te+"docs/services/lingyiwanwu/",link1:"",link2:"",allProps:[{name:"APIKEY",required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!0,type:"model-select",providers:["custom"],options:[{label:"yi-large",value:"yi-large"},{label:"yi-large-turbo",value:"yi-large-turbo"},{label:"yi-large-rag",value:"yi-large-rag"},{label:"yi-medium",value:"yi-medium"},{label:"yi-medium-200k",value:"yi-medium-200k"},{label:"yi-spark",value:"yi-spark"},{label:"yi-vision",value:"yi-vision"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",placeholder:"ep-20240512123030-kv128",descriptionKey:"description.generalLimitPerSecond",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",default:5,type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:Te+"docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text",sensitive:!0},{name:"appSecret",required:!0,type:"password",sensitive:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/translateapi",docUrl:Te+"docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text",sensitive:!0},{name:"secretKey",required:!0,type:"password",sensitive:!0}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:Te+"docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text",sensitive:!0},{name:"AccessKeySecret",required:!0,type:"password",sensitive:!0},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:Te+"docs/services/azure/",allProps:[{name:"region",required:!1,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password",sensitive:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.cognitive.microsofttranslator.com/",descriptionKey:"description.azureApiUrl",optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:Te+"docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text",sensitive:!0},{name:"key",required:!0,type:"password",sensitive:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"action",required:!1,labelKey:"field.baiduAction",descriptionKey:"description.baiduAction",descriptionLink1:"https://fanyi-api.baidu.com/doc/21",type:"boolean",default:!1,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.baiduField",descriptionLink1:"https://fanyi-api.baidu.com/doc/22",type:"text",default:"",optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:Te+"docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text",sensitive:!0},{name:"secretAccessKey",required:!0,type:"password",sensitive:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:Te+"docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password",sensitive:!0}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:Te+"docs/services/custom/",docUrl:Te+"docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:fl,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:Te+"docs/services/openL/",beta:!0,allProps:[...Qg,{type:"password",name:"apikey",required:!0,sensitive:!0}],props:Qg},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",canary:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:Te+"docs/services/niu/",allProps:[{name:"APIKEY",required:!0,type:"password",sensitive:!0}]},qianfan:{ai:!0,name:"baidu-qianfan",homepage:"https://console.bce.baidu.com/qianfan/overview",docUrl:Te+"docs/services/baidu-qianfan/",allProps:[{label:"API Key",name:"AccessKeyID",placeholder:"API Key",required:!0,type:"text",sensitive:!0},{label:"Secret Key",name:"AccessKeySecret",placeholder:"Secret Key",required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!0,type:"model-select",providers:["custom"],options:[{label:"ERNIE-Speed-8K",value:"ernie_speed"},{label:"ERNIE-Speed-128K",value:"ernie-speed-128k"},{label:"ERNIE-4.0-8K",value:"completions_pro"},{label:"ERNIE-4.0-8K-Preview",value:"ernie-4.0-8k-preview"},{label:"ERNIE-3.5-8K",value:"completions"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",descriptionLink1:Te+"docs/services/openai/",type:"number",providers:["custom"],default:1},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:3,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:"",optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0}]},"custom-ai":em,deepseek:{ai:!0,name:"deepseek",homepage:"https://www.deepseek.com/",docUrl:Te+"docs/services/deepseek/",link1:"",link2:"",allProps:[{name:"APIKEY",required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"model-select",default:"deepseek-chat",options:[{label:"deepseek-chat",value:"deepseek-chat"},{label:"deepseek-coder",value:"deepseek-coder"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",default:5,type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},"aliyun-bailian":{ai:!0,name:"aliyun-bailian",homepage:"https://bailian.console.aliyun.com/",docUrl:Te+"docs/services/aliyun-bailian/",link1:"",link2:"",allProps:[{name:"APIKEY",required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"model-select",default:"qwen-long",options:[{label:"qwen-turbo",value:"qwen-turbo"},{label:"qwen-plus",value:"qwen-plus"},{label:"qwen-long",value:"qwen-long"},{label:"qwen-max",value:"qwen-max"},{label:"qwen1.5-7b-chat",value:"qwen1.5-7b-chat"},{label:"qwen1.5-14b-chat",value:"qwen1.5-14b-chat"},{label:"qwen1.5-32b-chat",value:"qwen1.5-32b-chat"},{label:"qwen1.5-72b-chat",value:"qwen1.5-72b-chat"},{label:"qwen1.5-110b-chat",value:"qwen1.5-110b-chat"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",default:5,type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},doubao:{ai:!0,name:"doubao",homepage:"https://www.volcengine.com/product/doubao",docUrl:Te+"docs/services/doubao/",link1:"",link2:"",allProps:[{name:"APIKEY",required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.accessPoint",descriptionKey:"description.accessPoint",placeholder:" ",required:!1,type:"text",default:""},{name:"limit",required:!1,labelKey:"field.limitPerSecond",placeholder:"ep-20240512123030-kv128",descriptionKey:"description.generalLimitPerSecond",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",default:5,type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0},{name:"temperature",descriptionKey:"description.temperature",label:"Temperature",required:!1,type:"number",default:"0",optional:!0}]},hunyuan:{ai:!0,name:"hunyuan",homepage:"https://hunyuan.tencent.com/",docUrl:Te+"docs/services/tencent-hunyuan/",allProps:[{label:"Secret ID",name:"secret_id",placeholder:"Secret ID",required:!0,type:"text",sensitive:!0},{label:"Secret Key",name:"secret_key",placeholder:"Secret Key",required:!0,type:"password",sensitive:!0},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!0,type:"model-select",providers:["custom"],options:[{label:"hunyuan-lite",value:"hunyuan-lite"},{label:"hunyuan-standard",value:"hunyuan-standard"},{label:"hunyuan-standard-256K",value:"hunyuan-standard-256K"},{label:"hunyuan-pro",value:"hunyuan-pro"},{providers:["custom"],label:"more-models",value:"more-models"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",descriptionLink1:Te+"docs/services/openai/",type:"number",providers:["custom"],default:1},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:3,optional:!0},{name:"enableRichTranslate",labelKey:"field.enableRichTranslate",descriptionKey:"description.enableRichTranslate",required:!1,type:"boolean",default:!1,optional:!0},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:"",optional:!0},{name:"multiplePrompt",label:"Multiple Prompt",required:!1,descriptionKey:"description.multiplePrompt",type:"textarea",default:"",optional:!0},{name:"maxTextGroupLengthPerRequestForSubtitle",required:!1,labelKey:"field.maxTextGroupLengthPerRequestForSubtitle",type:"number",optional:!0},{name:"subtitlePrompt",label:"Subtitle Prompt",required:!1,descriptionKey:"description.subtitlePrompt",type:"textarea",default:"",optional:!0}]}};Y();Y();var jD=1e3*3600*24;async function tm(e,r){return await new Promise((o,n)=>{let l=e,u=1,p=indexedDB.open(l,u);p.onsuccess=i=>{o(p.result)},p.onerror=i=>{n()},p.onupgradeneeded=i=>{let a=p.result,t=r||"cache";a.createObjectStore(t,{keyPath:"key"})}})}async function rm(e,r){let o=await tm("onnx","models");return new Promise((n,l)=>{let p=o.transaction(["models"],"readwrite").objectStore("models"),i={key:e,data:r},a=p.put(i);a.onsuccess=function(){n("Model stored successfully")},a.onerror=function(t){n("Error storing model:"+t.target.errorCode)}})}async function nm(e){let r=await tm("onnx","models");return new Promise((o,n)=>{let p=r.transaction(["models"],"readonly").objectStore("models").get(e);p.onsuccess=function(i){i.target.result?o(i.target.result.data):o(null)},p.onerror=function(i){o(null)}})}var{InferenceSession:om}=dn;dn.env.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.1/dist/";var E1=[1,3,640,640],D1=.2,S1=!1,qs;async function am(e,r,o,n){try{let l=await P1(e,r);if(!qs){Dn;let i=await im("preprocess-yolo",n),a=await im("best",n),t=await om.create(a),c=await om.create(i);n?.("detecting"),qs={net:t,prep:c},Dn}Dn;let u=document.createElement("canvas");return n?.("recognizing"),await Jg(l,u,qs,D1,E1,S1,o),n?.("saved"),Dn,u.toDataURL("image/png")}catch(l){throw l}}function P1(e,r){return new Promise((o,n)=>{let l=new Blob([r],{type:e}),u=URL.createObjectURL(l),p=new Image;p.src=u,p.onload=function(){let i=document.createElement("canvas"),a=i.getContext("2d");i.width=p.width,i.height=p.height,a.drawImage(p,0,0),C1(i),i.toBlob(t=>{let c=URL.createObjectURL(t);o(c),URL.revokeObjectURL(u)},e)},p.onerror=function(){n(new Error("Failed to load image"))}})}function C1(e){let r=e.getContext("2d"),n=r.getImageData(0,0,e.width,e.height).data,l=e.width,u=e.height,i=Math.floor(3/2),a=r.createImageData(l,u),t=a.data;for(let c=0;c<u;c++)for(let s=0;s<l;s++){let d=0,f=0,g=0,b=0;for(let m=-i;m<=i;m++)for(let v=-i;v<=i;v++){let C=c+m,M=s+v;if(M>=0&&M<l&&C>=0&&C<u){let q=(C*l+M)*4;d+=n[q],f+=n[q+1],g+=n[q+2],b++}}let y=(c*l+s)*4;t[y]=d/b,t[y+1]=f/b,t[y+2]=g/b,t[y+3]=n[y+3]}r.putImageData(a,0,0)}var O1="https://s.immersivetranslate.com/assets/r2-uploads/models/";async function im(e,r){let o=await nm(e);return o||(r?.("model_downloading"),o=await Gg(`${O1}${e}.onnx`,[`Loading ${e}`,({text:n,progress:l})=>{}]),o&&await rm(e,o)),o}var _t={};chrome.runtime.onMessage.addListener((e,r,o)=>{if(e.target==="offscreen")switch(e.data.type){case"trigger":return F1(e.data),!1;case"state":return I1(o,e.data),!0;default:throw new Error("Unrecognized message:",e.type)}});function I1(e,r){let{comicHash:o,translatedTexts:n}=r;_t[o]||(_t[o]={state:"extension_uploading",url:"",texts:[]}),n&&(_t[o].translatedTexts=n,Pn.debug("translatedTexts",n)),e({state:_t[o].state,url:_t[o].url,texts:_t[o].texts,errorMsg:_t[o].errorMsg})}async function F1(e){let{mimeType:r,imgBuffer:o,comicHash:n,context:l}=e;(!_t[n]||_t[n].state=="error")&&(_t[n]={..._t[n],state:"extension_uploading",errorMsg:"",url:""});let u=l.rule.imageRule.clientTranslateTimeout||6*1e3,p=Object.values(o),a=new Uint8Array(p).buffer;try{let t=await am(r,a,async c=>{_t[n].state="translating",_t[n].texts=c;for(let s=0;s<u*2;s+=50)if(await di(50),_t[n].translatedTexts)return _t[n].translatedTexts;throw"no translated"},c=>{_t[n].state=c,Pn.debug("imgState",c)});_t[n].url=t,Pn.debug("translateUrl",t)}catch(t){Pn.error(t),_t[n].state="error",_t[n].errorMsg=t.message}}})();
/*! For license information please see tesseract.min.js.LICENSE.txt */
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
/*! Bundled license information:

dompurify/dist/purify.es.js:
  (*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE *)
*/
/*! Bundled license information:

onnxruntime-web/dist/ort.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.20.1
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.bundle.min.mjs:
  (*! Bundled license information:
  
  long/index.js:
    (**
     * @license
     * Copyright 2009 The Closure Library Authors
     * Copyright 2020 Daniel Wirtz / The long.js Authors.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * SPDX-License-Identifier: Apache-2.0
     *)
  *)
*/
